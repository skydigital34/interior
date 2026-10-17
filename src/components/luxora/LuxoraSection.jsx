import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, X, RotateCcw, Play } from 'lucide-react';
import LuxoraNavbar from './LuxoraNavbar';
import HotspotPin from './HotspotPin';
import LocationsCard from './LocationsCard';
import FeaturePillarsBar from './FeaturePillarsBar';
import ConsultationCard from './ConsultationCard';
import ServiceCardsStack from './ServiceCardsStack';
import LuxoraConsultationModal from './LuxoraConsultationModal';
import LuxoraWalkthroughModal from './LuxoraWalkthroughModal';
import { INTERIOR_CATEGORIES_DATA } from '../../data/interiorCategories';

export default function LuxoraSection() {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const lockedCategories = ['Traditional', 'Contemporary', 'Mid-Century Modern'];
  const requestedCat = urlParams?.get('category') || 'Modern';
  const initialCat = lockedCategories.includes(requestedCat) ? 'Modern' : requestedCat;

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(initialCat);
  const [isVisible, setIsVisible] = useState(false);

  // Track categories whose video has already played once (so it doesn't replay on every switch)
  const [playedCategories, setPlayedCategories] = useState(() => new Set(['Modern']));
  
  // Transition phases: 'idle' | 'exiting' | 'playing_video' | 'revealing'
  const [transitionPhase, setTransitionPhase] = useState('idle');
  const [revealKey, setRevealKey] = useState(0);

  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const cat = INTERIOR_CATEGORIES_DATA[selectedType] || INTERIOR_CATEGORIES_DATA['Modern'];

  useEffect(() => {
    // If loaded directly with ?view=luxora or #luxora-section
    if (window.location.search.includes('view=luxora') || window.location.hash === '#luxora-section') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Finish video and trigger choreographed entrance reveal
  const finishVideoAndReveal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setTransitionPhase('revealing');
    setRevealKey((k) => k + 1);
    setTimeout(() => {
      setTransitionPhase('idle');
    }, 1500);
  };

  // Category switch handler:
  // 1. Elements smoothly exit frame first
  // 2. Then, if video hasn't played yet, play video one time
  // 3. If video has already played once, switch category directly with reveal animations (NO redundant video playback)
  const handleSelectInteriorType = (type) => {
    if (lockedCategories.includes(type) || type === selectedType || transitionPhase === 'exiting') return;

    const targetCat = INTERIOR_CATEGORIES_DATA[type];
    const willPlayVideo = targetCat && targetCat.video && !playedCategories.has(type);

    // Step 1: Smoothly glide existing elements outside of frame
    setTransitionPhase('exiting');

    setTimeout(() => {
      // Step 2: Elements are now outside the frame
      setSelectedType(type);

      if (willPlayVideo) {
        // Mark as played so it only plays once
        setPlayedCategories((prev) => new Set(prev).add(type));
        setTransitionPhase('playing_video');
        setVideoProgress(0);

        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch((err) => {
              console.log('Video autoplay blocked, revealing contents:', err);
              finishVideoAndReveal();
            });
          }
        }, 80);
      } else {
        // Video has already played once: reveal contents directly with animations!
        setTransitionPhase('revealing');
        setRevealKey((k) => k + 1);
        setTimeout(() => {
          setTransitionPhase('idle');
        }, 1500);
      }
    }, 450); // 450ms for smooth exit transition
  };

  // Replay handler when user clicks 3D Walkthrough card
  const handleReplayVideo = () => {
    if (transitionPhase === 'exiting' || transitionPhase === 'playing_video') return;

    // Smoothly exit elements first
    setTransitionPhase('exiting');

    setTimeout(() => {
      setTransitionPhase('playing_video');
      setVideoProgress(0);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch((err) => {
            console.log('Video replay error:', err);
            finishVideoAndReveal();
          });
        }
      }, 80);
    }, 450);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const isPlayingVideo = transitionPhase === 'playing_video';
  const isExiting = transitionPhase === 'exiting';

  return (
    <section 
      ref={sectionRef}
      id="luxora-section"
      className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen w-full bg-[#0d0e12] text-gray-900 overflow-x-hidden flex flex-col justify-between selection:bg-[#c48446]/20 selection:text-black font-sans"
    >
      {/* 1. Category Video / Daylight Living Room Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Category High-Res Backdrop Base Image */}
        <img
          key={cat.backgroundImage || selectedType}
          src={cat.backgroundImage || '/assets/luxora-bg.jpg'}
          alt={`Luxora ${selectedType} Interior Studio`}
          className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out ${
            isVisible ? 'animate-luxora-bg' : ''
          }`}
        />

        {cat.video && (
          <video
            ref={videoRef}
            key={cat.video}
            src={cat.video}
            poster={cat.backgroundImage || '/assets/luxora-bg.jpg'}
            playsInline
            muted={isMuted}
            onEnded={finishVideoAndReveal}
            onTimeUpdate={handleTimeUpdate}
            className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700 ${
              isPlayingVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        )}

        {/* Ambient Left Vignette (Fades out when video plays so video is 100% visible) */}
        <div 
          className={`absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r ${cat.theme.vignette} pointer-events-none transition-all duration-700 z-10 ${
            isPlayingVideo ? 'opacity-0' : 'opacity-100'
          }`} 
        />

        {/* Soft Bottom Floor Glow (Fades out when video plays) */}
        <div 
          className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${cat.theme.floorGlow} pointer-events-none transition-all duration-700 z-10 ${
            isPlayingVideo ? 'opacity-0' : 'opacity-100'
          }`} 
        />
      </div>

      {/* Floating Video Overlay Controls (Active while video is playing) */}
      {isPlayingVideo && (
        <div className="absolute top-5 right-6 sm:right-10 z-50 flex items-center gap-2.5 animate-fadeIn">
          {/* Active Category Video Badge */}
          <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white text-xs font-medium flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c48446] animate-pulse" />
            <span>{selectedType} Walkthrough</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all cursor-pointer shadow-lg"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Skip Button */}
          <button
            onClick={finishVideoAndReveal}
            title="Skip to Designs"
            className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-black text-xs font-semibold flex items-center gap-1.5 shadow-xl transition-all cursor-pointer hover:scale-105"
          >
            <span>Skip</span>
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Video Progress Bar along Bottom */}
      {isPlayingVideo && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-50 pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-[#c48446] to-[#edd3b4] transition-all duration-150 shadow-[0_0_10px_rgba(196,132,70,0.8)]"
            style={{ width: `${videoProgress}%` }}
          />
        </div>
      )}

      {/* 2. Top Header Navigation Bar */}
      <div 
        className={`w-full transition-all duration-500 relative z-40 ${
          isVisible ? 'animate-luxora-nav' : 'opacity-0'
        }`}
      >
        <LuxoraNavbar 
          selectedType={selectedType}
          onSelectInteriorType={handleSelectInteriorType}
          theme={cat.theme}
          isDarkTheme={cat.isDarkTheme}
        />
      </div>

      {/* 3. Main Body Content Area - Directional Exit & Sequential Reveal */}
      <div 
        key={`${selectedType}-${revealKey}`}
        className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 flex-1 flex flex-col justify-between py-1 sm:py-2 min-h-0"
      >
        
        {/* Middle Level: Left Hero Copy & Right Stacked Cards */}
        <div className="relative w-full flex items-start justify-between flex-1 min-h-0 pt-1 sm:pt-2">
          
          {/* Left Column: Headline, Subtitle, 3 Stats & Locations Card (Glides LEFT outside frame on exit) */}
          <div 
            className={`max-w-md z-20 select-none flex flex-col justify-center transition-all duration-450 ease-in-out ${
              isExiting 
                ? '-translate-x-36 opacity-0 pointer-events-none' 
                : isPlayingVideo 
                  ? 'opacity-0 pointer-events-none' 
                  : 'translate-x-0 opacity-100'
            }`}
          >
            {/* Category Eyebrow */}
            <div className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] ${cat.theme?.eyebrowColor || 'text-gray-500'} uppercase mb-1 transition-all duration-300 ${
              isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-eyebrow' : 'opacity-0'
            }`}>
              {cat.eyebrow}
            </div>

            {/* Main Headline */}
            <h2 className={`text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight font-heading leading-[1.08] ${
              isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-headline' : 'opacity-0'
            }`}>
              <span className={`inline-block transition-all duration-300 ${cat.theme?.headlinePrefixColor || 'text-white'}`}>
                {cat.headlinePrefix}
              </span> <br />
              <span className={`transition-all duration-300 ${cat.theme?.headlineSuffixColor || 'text-gray-900'}`}>
                {cat.headlineSuffix}
              </span>
            </h2>

            {/* Subtitle */}
            <p className={`mt-1.5 text-xs sm:text-[13.5px] font-light leading-snug transition-all duration-300 ${cat.theme?.subtitleColor || 'text-gray-400'} ${
              isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-subtitle' : 'opacity-0'
            }`}>
              {cat.subtitle}
            </p>

            {/* 3 Metrics Row */}
            <div className="mt-3.5 sm:mt-4 flex items-center gap-6 sm:gap-8">
              {cat.metrics.map((m, idx) => {
                const metricAnimClass = idx === 0 
                  ? 'animate-luxora-metric-1' 
                  : idx === 1 
                    ? 'animate-luxora-metric-2' 
                    : 'animate-luxora-metric-3';
                return (
                  <div key={`${m.label}-${idx}`} className={isVisible && !isPlayingVideo && !isExiting ? metricAnimClass : 'opacity-0'}>
                    <div className={`text-xl sm:text-2xl font-bold font-heading leading-tight transition-all duration-300 ${cat.theme?.metricValueColor || 'text-white'}`}>
                      {m.value}
                    </div>
                    <div className={`text-[10px] sm:text-[10.5px] font-normal leading-tight mt-0.5 transition-all duration-300 ${cat.theme?.metricLabelColor || 'text-gray-400'}`}>
                      {m.label.split(' ')[0]} <br /> {m.label.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Design Locations Floating Card below Metrics */}
            <div className={`mt-3 sm:mt-4 ${isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-locations' : 'opacity-0'}`}>
              <LocationsCard 
                locations={cat.locations} 
                accentColor={cat.theme.accentColor} 
                theme={cat.theme}
                isDarkTheme={cat.isDarkTheme}
              />
            </div>

            {/* Mobile Walkthrough & Services Preview Pill (Visible on < lg screens) */}
            <div className={`lg:hidden mt-3 flex items-center gap-2 ${isVisible && !isPlayingVideo && !isExiting ? 'animate-fadeIn' : 'opacity-0'}`}>
              <button
                onClick={handleReplayVideo}
                className="flex-1 py-2.5 px-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center justify-between shadow-lg cursor-pointer hover:bg-black/85 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-[#c48446] text-[#c48446]" />
                  <span>3D Walkthrough</span>
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Replay</span>
              </button>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="py-2.5 px-4 rounded-xl bg-[#c48446] hover:bg-[#b0733a] text-black text-xs font-semibold shadow-lg cursor-pointer whitespace-nowrap transition-all"
              >
                Services
              </button>
            </div>
          </div>

          {/* Interactive Hotspots Overlaid on Interior Furniture & Walls (Fades out smoothly on exit) */}
          {cat.hotspots.map((spot, idx) => {
            const spotAnimClass = idx === 0 
              ? 'animate-luxora-hotspot-1' 
              : idx === 1 
                ? 'animate-luxora-hotspot-2' 
                : 'animate-luxora-hotspot-3';
            return (
              <div 
                key={`${spot.label}-${idx}-${selectedType}`}
                className={`transition-all duration-350 ease-in-out ${
                  isExiting || isPlayingVideo ? 'scale-50 opacity-0 pointer-events-none' : ''
                }`}
              >
                <HotspotPin
                  pinX={spot.pinX}
                  pinY={spot.pinY}
                  cardOffsetX={spot.cardOffsetX}
                  cardOffsetY={spot.cardOffsetY}
                  iconType={spot.iconType}
                  label={spot.label}
                  accentColor={cat.theme.accentColor}
                  isDarkTheme={cat.isDarkTheme}
                  className={isVisible && !isPlayingVideo && !isExiting ? spotAnimClass : 'opacity-0'}
                  onClick={() => setIsConsultationOpen(true)}
                />
              </div>
            );
          })}

          {/* Right Column: 3D Walkthrough Preview & 3 Service Cards (Glides RIGHT outside frame on exit) */}
          <div 
            className={`hidden lg:flex flex-col z-20 transition-all duration-450 ease-in-out ${
              isExiting 
                ? 'translate-x-36 opacity-0 pointer-events-none' 
                : isPlayingVideo 
                  ? 'opacity-0 pointer-events-none' 
                  : 'translate-x-0 opacity-100'
            }`}
          >
            <ServiceCardsStack
              isVisible={isVisible && !isPlayingVideo && !isExiting}
              services={cat.services}
              walkthrough={{ ...cat.walkthrough, image: cat.backgroundImage || cat.walkthrough?.image }}
              accentColor={cat.theme.accentColor}
              theme={cat.theme}
              isDarkTheme={cat.isDarkTheme}
              onReplayVideo={handleReplayVideo}
              onOpenWalkthrough={handleReplayVideo}
              onSelectService={() => setIsConsultationOpen(true)}
            />
          </div>

        </div>

        {/* 4. Bottom Horizontal Row: 5 Feature Pillars Bar + Consultation Card (Glides DOWN outside frame on exit) */}
        <div 
          className={`w-full pt-2 sm:pt-3 pb-2 sm:pb-3 z-20 transition-all duration-450 ease-in-out ${
            isExiting 
              ? 'translate-y-28 opacity-0 pointer-events-none' 
              : isPlayingVideo 
                ? 'opacity-0 pointer-events-none' 
                : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4">
            {/* 5 Feature Pillars Bar */}
            <div className={`flex-1 ${isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-pillars' : 'opacity-0'}`}>
              <FeaturePillarsBar 
                pillars={cat.pillars} 
                theme={cat.theme}
                isDarkTheme={cat.isDarkTheme}
              />
            </div>

            {/* Dark Botanical Free Consultation Card */}
            <div className={isVisible && !isPlayingVideo && !isExiting ? 'animate-luxora-cta' : 'opacity-0'}>
              <ConsultationCard 
                consultation={cat.consultation}
                theme={cat.theme}
                isDarkTheme={cat.isDarkTheme}
                onClick={() => setIsConsultationOpen(true)} 
              />
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Modals */}
      <LuxoraConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <LuxoraWalkthroughModal
        isOpen={isWalkthroughOpen}
        onClose={() => setIsWalkthroughOpen(false)}
      />
    </section>
  );
}
