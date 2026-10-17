import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'The Horizon Residence',
    type: 'Luxury Villa',
    location: 'Coimbatore',
    image: '/assets/horizon-project.jpg',
    tag: 'FEATURED PROJECT',
  },
  {
    title: 'The Ooty Pavilion',
    type: 'Mountain Estate',
    location: 'Nilgiris',
    image: '/assets/ooty-pavilion.jpg',
    tag: 'FEATURED PROJECT',
  },
  {
    title: 'The Courtyard Sanctuary',
    type: 'Private Residence',
    location: 'Bangalore',
    image: '/assets/hero-bg.jpg',
    tag: 'FEATURED PROJECT',
  },
];

export default function FeaturedProjectCard({ onProjectClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div 
      onClick={() => onProjectClick && onProjectClick(currentProject)}
      className="w-full rounded-[18px] p-2 sm:p-2.5 glass-card group cursor-pointer flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top subtle crystal specular sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Media Container */}
      <div className="relative rounded-[13px] overflow-hidden aspect-[16/6.8] sm:aspect-[16/7] max-h-[105px] w-full bg-[#181a22]">
        <img 
          src={currentProject.image} 
          alt={currentProject.title}
          key={currentIndex}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

        {/* Featured Project Glass Pill Badge */}
        <div className="absolute top-1.5 left-1.5 px-2.5 py-0.5 rounded-full glass-pill shadow-sm">
          <span className="text-[8px] font-semibold tracking-[0.2em] text-white/95 uppercase drop-shadow-sm">
            {currentProject.tag}
          </span>
        </div>
      </div>

      {/* Details Row */}
      <div className="pt-1.5 px-0.5 flex items-center justify-between">
        <div>
          <h3 className="text-[13.5px] sm:text-[14px] font-normal text-white tracking-tight font-heading group-hover:text-[#dfb482] transition-colors leading-tight">
            {currentProject.title}
          </h3>
          <div className="flex items-center gap-1.5 text-[10px] text-white/50 mt-0.5 font-light">
            <span>{currentProject.type}</span>
            <span className="text-[7px] text-white/30">•</span>
            <span>{currentProject.location}</span>
          </div>
        </div>

        {/* Navigation Indicator & Next Button */}
        <div className="flex items-center gap-2">
          {/* Progress Indicators */}
          <div className="flex items-center gap-1">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full h-[2px] ${
                  currentIndex === idx
                    ? 'w-4 bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                    : 'w-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button with Glass finish */}
          <button
            onClick={handleNext}
            title="Next project"
            className="w-6 h-6 rounded-full glass-button flex items-center justify-center text-white/85 hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.2]" />
          </button>
        </div>
      </div>
    </div>
  );
}
