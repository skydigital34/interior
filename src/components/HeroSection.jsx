import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Volume2, VolumeX, X } from 'lucide-react';
import Navbar from './Navbar';
import LeftDock from './LeftDock';
import RightCategories from './RightCategories';
import FeaturedProjectCard from './FeaturedProjectCard';
import StatsCard from './StatsCard';
import LifestyleCard from './LifestyleCard';
import BottomBar from './BottomBar';
import ProjectModal from './ProjectModal';
import SearchModal from './SearchModal';

export default function HeroSection() {
  const [isPlayingStory, setIsPlayingStory] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('residential');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const videoRef = useRef(null);

  const handleStartStory = () => {
    setIsPlayingStory(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.log('Autoplay policy caught:', err);
      });
    }
  };

  const handleEndStory = () => {
    setIsPlayingStory(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setVideoProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleScrollDown = () => {
    const el = document.getElementById('luxora-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreWork = () => {
    setIsProjectModalOpen(true);
  };

  return (
    <div className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen w-full bg-[#08090c] text-white overflow-x-hidden flex flex-col justify-between selection:bg-[#dfb482]/30 selection:text-white">
      
      {/* 1. Cinematic Architectural Background & Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Full-bleed Hero Video (hero section.mp4) */}
        <video
          ref={videoRef}
          src="/assets/hero-story.mp4"
          playsInline
          muted={isMuted}
          onEnded={handleEndStory}
          onTimeUpdate={handleTimeUpdate}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isPlayingStory ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none -z-10'
          }`}
        />

        {/* Static Background Image (Visible when not playing story) */}
        <img
          src="/assets/hero-bg.jpg"
          alt="White Triad Architectural Interior"
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            isPlayingStory ? 'opacity-0' : 'opacity-100 animate-bg-cinematic'
          }`}
        />

        {/* Ambient Dark Gradient Vignettes (Softens during video playback for full immersion) */}
        <div 
          className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#08090c]/85 via-[#08090c]/40 to-transparent transition-opacity duration-700 ${
            isPlayingStory ? 'opacity-25' : 'opacity-100'
          }`} 
        />
        <div 
          className={`absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#08090c]/80 via-[#08090c]/40 to-transparent transition-opacity duration-700 ${
            isPlayingStory ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        <div 
          className={`absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#08090c]/90 via-[#08090c]/30 to-transparent transition-opacity duration-700 ${
            isPlayingStory ? 'opacity-20' : 'opacity-100'
          }`} 
        />

        {/* Warm Architectural Ambient Glow Highlight */}
        <div 
          className={`absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#dfb482]/12 blur-[130px] pointer-events-none mix-blend-screen transition-opacity duration-700 ${
            isPlayingStory ? 'opacity-0' : 'opacity-100'
          }`} 
        />
      </div>

      {/* Floating Cinema Mode Controls (Visible while video is active) */}
      {isPlayingStory && (
        <div className="absolute top-6 right-8 z-50 flex items-center gap-3 animate-fadeIn">
          {/* Sound Mute/Unmute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white shadow-xl cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          
          {/* Exit Cinema Pill Button */}
          <button
            onClick={handleEndStory}
            className="px-5 py-2.5 rounded-full glass-button text-xs font-medium text-white flex items-center gap-2 shadow-xl hover:bg-white/20 transition cursor-pointer"
          >
            <span>Exit Story</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Video Progress Bar along Bottom */}
      {isPlayingStory && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-50">
          <div 
            className="h-full bg-gradient-to-r from-[#dfb482] to-[#edd3b4] transition-all duration-150 shadow-[0_0_10px_rgba(223,180,130,0.8)]"
            style={{ width: `${videoProgress}%` }}
          />
        </div>
      )}

      {/* 2. Top Header Navigation (Fades OUT UPWARDS when playing story) */}
      <div 
        className={`transition-all duration-700 ease-in-out relative z-40 ${
          isPlayingStory ? '-translate-y-28 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <Navbar 
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenStartProject={() => setIsProjectModalOpen(true)}
          onNavigate={(tab) => {
            if (tab === 'Home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (tab === 'About') {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            } else if (tab === 'Services') {
              document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
            } else if (tab === 'Projects') {
              document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' });
            } else if (tab === 'Contact') {
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>

      {/* 3. Left Navigation Dock (Glides out to the left when playing story) */}
      <LeftDock 
        isPlayingStory={isPlayingStory}
        onSelectCategory={() => setIsSearchOpen(true)} 
      />

      {/* 4. Main Hero Body Area */}
      <main className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 lg:pl-28 xl:pl-32 flex-1 flex flex-col justify-between py-4 lg:py-1">
        
        {/* Middle Section: Main Headline + Right Sidebar Categories */}
        <div className="flex items-start justify-between w-full pt-2 lg:pt-1">
          {/* Main Hero Copy & CTAs (Fades OUT UPWARDS when playing story) */}
          <div 
            className={`max-w-2xl transition-all duration-700 ease-in-out ${
              isPlayingStory ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
            }`}
          >
            {/* Category / Sub-heading with Letter Tracking Expansion */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-white/60 uppercase mb-2 animate-eyebrow-expand">
              <span>INTERIORS</span>
              <span className="text-[#dfb482]/60 text-xs">×</span>
              <span>ARCHITECTURE</span>
              <span className="text-[#dfb482]/60 text-xs">×</span>
              <span>SPACES</span>
            </div>

            {/* Main Headline with Kinetic Dual-line Reveal */}
            <h1 className="text-[30px] sm:text-[44px] lg:text-[52px] xl:text-[58px] font-light leading-[1.08] tracking-[-0.02em] text-white font-heading">
              <span className="block animate-headline-line1">
                Thoughtful Spaces
              </span>
              <span className="block animate-headline-line2 mt-0.5">
                <span className="font-light">for </span>
                <span className="bg-gradient-to-r from-[#edd3b4] via-[#dfb482] to-[#c5915a] bg-clip-text text-transparent font-normal drop-shadow-sm">
                  Modern Living
                </span>
              </span>
            </h1>

            {/* Description with Soft Diffuse Rise */}
            <p className="mt-2.5 text-xs sm:text-[14px] text-white/60 font-light leading-relaxed max-w-lg line-clamp-2 animate-desc-rise">
              We design and execute interior spaces that balance aesthetics, functionality and your unique lifestyle.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3.5 sm:gap-6">
              {/* Explore Our Work Pill Button */}
              <button
                onClick={handleExploreWork}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full glass-button text-xs sm:text-[13px] font-medium text-white flex items-center gap-2.5 group cursor-pointer active:scale-98 animate-cta-explore shadow-md"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Watch Our Story Play Button -> Triggers Hero Video Cinema Transition */}
              <button
                onClick={handleStartStory}
                className="flex items-center gap-2.5 text-xs sm:text-[13px] font-medium text-white/80 hover:text-white transition-all duration-300 group cursor-pointer animate-cta-watch"
              >
                {/* Circular Glassmorphism Play Button */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#382f24]/85 to-[#5a4836]/85 backdrop-blur-xl border border-[#dfb482]/45 border-t-white/40 flex items-center justify-center text-[#edd3b4] shadow-[0_0_25px_rgba(223,180,130,0.3),inset_0_1px_1px_rgba(255,255,255,0.35)] group-hover:shadow-[0_0_35px_rgba(223,180,130,0.55)] group-hover:scale-105 transition-all duration-300">
                  <Play className="w-3.5 h-3.5 fill-[#edd3b4] translate-x-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Floating Categories & Scroll Down Trigger (Slides out to the right) */}
          <div 
            className={`transition-all duration-700 ease-in-out ${
              isPlayingStory ? 'translate-x-32 opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
            }`}
          >
            <RightCategories 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
              onScrollDown={handleScrollDown}
            />
          </div>
        </div>

        {/* 5. Bottom Ultra-Glassmorphism Cards Grid / Mobile Swipe Rail (Moves Smoothly DOWNWARDS when playing story) */}
        <div 
          className={`w-full pt-3 lg:pt-2 pb-1 transition-all duration-700 ease-in-out ${
            isPlayingStory ? 'translate-y-40 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-12 gap-3 xl:gap-3.5 items-stretch w-full">
            
            {/* Card 1: Featured Project */}
            <div className="w-[84vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:snap-align-none lg:col-span-5 flex animate-card-left">
              <FeaturedProjectCard 
                onProjectClick={(proj) => {
                  setSelectedProject(proj);
                  setIsProjectModalOpen(true);
                }} 
              />
            </div>

            {/* Card 2: Stats & Workflow */}
            <div className="w-[84vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:snap-align-none lg:col-span-4 flex animate-card-center">
              <StatsCard />
            </div>

            {/* Card 3: Lifestyle Craft */}
            <div className="w-[84vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:snap-align-none lg:col-span-3 flex animate-card-right">
              <LifestyleCard onExplore={() => setIsProjectModalOpen(true)} />
            </div>

          </div>
        </div>

      </main>

      {/* 6. Bottom Slide Tracker & Brand Signoff (Slides DOWNWARDS when playing story) */}
      <div 
        className={`transition-all duration-700 ease-in-out ${
          isPlayingStory ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <BottomBar 
          currentSlide={currentSlide} 
          onSelectSlide={(slideNum) => {
            setCurrentSlide(slideNum);
            if (slideNum === 2) {
              const el = document.getElementById('luxora-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else if (slideNum === 3) {
              const el = document.getElementById('services-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }} 
        />
      </div>

      {/* Interactive Modals */}
      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(query) => {
          setIsSearchOpen(false);
          setIsProjectModalOpen(true);
        }}
      />
    </div>
  );
}
