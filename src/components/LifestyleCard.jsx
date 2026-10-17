import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LifestyleCard({ onExplore }) {
  return (
    <div 
      onClick={onExplore}
      className="w-full rounded-[18px] p-2 sm:p-2.5 glass-card group cursor-pointer flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top subtle crystal specular sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      <div>
        {/* Top Image Container */}
        <div className="relative rounded-[13px] overflow-hidden aspect-[16/7.5] sm:aspect-[16/8] max-h-[85px] w-full bg-[#181a22]">
          <img 
            src="/assets/lifestyle.jpg" 
            alt="Crafted for your Lifestyle" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Floating Top-Right White Pill / Circle CTA */}
          <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-[#f6efe6]/95 text-[#121418] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-45">
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.2]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-1.5 px-0.5">
          <h3 className="text-[12.5px] sm:text-[13px] font-normal text-white tracking-tight font-heading group-hover:text-[#dfb482] transition-colors leading-tight">
            Crafted for your Lifestyle
          </h3>
          <p className="text-[9.5px] text-white/50 mt-0.5 leading-[1.3] font-light line-clamp-1 sm:line-clamp-2">
            From concept to completion, we build spaces that feel like home.
          </p>
        </div>
      </div>

      {/* Bottom Progress Bars */}
      <div className="flex items-center gap-1.5 px-0.5 mt-1.5">
        <div className="w-4 h-[2px] rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
        <div className="w-1.5 h-[2px] rounded-full bg-white/25" />
      </div>
    </div>
  );
}
