import React from 'react';
import { Armchair, Building2, Grid3X3, Play, ChevronRight, RotateCcw } from 'lucide-react';

export default function ServiceCardsStack({ 
  onOpenWalkthrough, 
  onReplayVideo,
  onSelectService, 
  isVisible = true,
  services: customServices,
  walkthrough: customWalkthrough,
  accentColor = '#c48446',
  theme,
  isDarkTheme = false
}) {
  const defaultServices = [
    {
      id: 'residential',
      title: 'Residential Interiors',
      subtitle: 'Elegant homes tailored to your lifestyle',
      icon: Armchair,
      animClass: 'animate-luxora-service-1',
    },
    {
      id: 'commercial',
      title: 'Commercial Spaces',
      subtitle: 'Functional and inspiring work environments',
      icon: Building2,
      animClass: 'animate-luxora-service-2',
    },
    {
      id: 'modular',
      title: 'Modular Interiors',
      subtitle: 'Smart designs for modern living',
      icon: Grid3X3,
      animClass: 'animate-luxora-service-3',
    },
  ];

  const defaultWalkthrough = {
    title: '3D Walkthrough',
    subtitle: 'Modern Living Pavilion',
    image: '/assets/walkthrough-thumb.jpg',
    video: '/assets/modern.mp4',
  };

  const services = customServices && customServices.length > 0 ? customServices : defaultServices;
  const walkthrough = customWalkthrough || defaultWalkthrough;
  const animClasses = ['animate-luxora-service-1', 'animate-luxora-service-2', 'animate-luxora-service-3'];

  const handleClickWalkthrough = () => {
    if (onReplayVideo) {
      onReplayVideo();
    } else if (onOpenWalkthrough) {
      onOpenWalkthrough();
    }
  };

  const walkthroughCardClass = isDarkTheme
    ? 'bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-white/25 text-white'
    : 'bg-white/95 backdrop-blur-xl border border-stone-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-xl text-gray-900';

  const serviceCardClass = isDarkTheme
    ? 'bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.45)] hover:border-white/25 text-white'
    : 'bg-white/95 backdrop-blur-xl border border-stone-200/80 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-stone-300 text-gray-900';

  const iconFrameClass = isDarkTheme
    ? 'bg-white/10 border-white/15 text-white'
    : 'bg-gray-50 border-gray-100 text-gray-800';

  const cardTitleClass = isDarkTheme
    ? 'text-white group-hover:text-[#edd3b4]'
    : 'text-gray-900 group-hover:text-black';

  const cardSubtextClass = isDarkTheme
    ? 'text-gray-400'
    : 'text-gray-500';

  return (
    <div className="flex flex-col gap-2 sm:gap-2.5 w-full max-w-[240px] xl:max-w-[250px] select-none">
      {/* 1. 3D Walkthrough Card with Category Video & Replay */}
      <div
        onClick={handleClickWalkthrough}
        title="Click to replay background video"
        className={`rounded-2xl p-2 sm:p-2.5 transition-all duration-300 group cursor-pointer ${walkthroughCardClass} ${
          isVisible ? 'animate-luxora-walkthrough' : 'opacity-0'
        }`}
      >
        {/* Render Thumbnail with Category Video */}
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full bg-gray-900">
          {walkthrough.video ? (
            <video
              key={walkthrough.video}
              src={walkthrough.video}
              poster={walkthrough.image || '/assets/walkthrough-thumb.jpg'}
              playsInline
              muted
              loop
              autoPlay
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            />
          ) : (
            <img
              src={walkthrough.image || '/assets/walkthrough-thumb.jpg'}
              alt={walkthrough.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

          {/* Replay Pill Badge on Top-Left */}
          <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] text-white/95 font-medium flex items-center gap-1 shadow-sm">
            <RotateCcw className="w-2.5 h-2.5" style={{ color: accentColor }} />
            <span>Replay Video</span>
          </div>

          {/* Center Circular Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              <Play className="w-3.5 h-3.5 fill-gray-900 translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Card Title Bar */}
        <div className="flex items-center justify-between pt-1.5 px-1">
          <div className="flex flex-col">
            <span className={`text-[11.5px] font-semibold transition-colors ${cardTitleClass}`}>
              {walkthrough.title}
            </span>
            <span className={`text-[9.5px] font-light truncate max-w-[160px] ${cardSubtextClass}`}>
              {walkthrough.subtitle}
            </span>
          </div>
          <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all ${isDarkTheme ? 'text-gray-400 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`} />
        </div>
      </div>

      {/* 2, 3, 4: Service Feature Cards */}
      {services.map((svc, idx) => {
        const Icon = svc.icon || Armchair;
        const animClass = animClasses[idx % animClasses.length];
        return (
          <div
            key={`${svc.id || svc.title}-${idx}`}
            onClick={() => onSelectService && onSelectService(svc)}
            className={`rounded-2xl p-2.5 sm:p-3 transition-all duration-300 group cursor-pointer ${serviceCardClass} ${
              isVisible ? animClass : 'opacity-0'
            }`}
          >
            {/* Top Icon & Arrow Row */}
            <div className="flex items-center justify-between">
              <div 
                className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all group-hover:scale-105 ${iconFrameClass}`}
              >
                <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
              </div>
              <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 transition-all ${isDarkTheme ? 'text-gray-400 group-hover:text-white' : 'text-gray-300 group-hover:text-gray-900'}`} />
            </div>

            {/* Title & Description */}
            <div className="mt-1.5">
              <h3 className={`text-[12px] font-semibold transition-colors leading-snug ${cardTitleClass}`}>
                {svc.title}
              </h3>
              <p className={`text-[10px] mt-0.5 leading-snug font-light line-clamp-1 ${cardSubtextClass}`}>
                {svc.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
