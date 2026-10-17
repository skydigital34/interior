import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Geometric Architectural Triad Monogram */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white/90 group-hover:text-white transition-colors"
        >
          {/* Main Triangle */}
          <path 
            d="M10 34L22 8L34 34H10Z" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Internal Triad / Horizon Perspective Line */}
          <path 
            d="M6 31H38" 
            stroke="currentColor" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
          />
          {/* Modernist Angular Baseline Accent */}
          <path 
            d="M10 34L17 40H30" 
            stroke="currentColor" 
            strokeWidth="1.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeOpacity="0.75"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-0.5 text-[15px] font-normal tracking-[0.08em] text-white">
          <span>white</span>
          <span className="relative ml-1.5 font-light">
            triad
            {/* Architectural circumflex / chevron accent over the i */}
            <span className="absolute -top-1.5 left-[11px] text-[10px] text-[#dfb482] font-semibold leading-none select-none">
              ^
            </span>
          </span>
        </div>
        <span className="text-[9.5px] uppercase tracking-[0.38em] text-white/50 font-light -mt-0.5">
          architects
        </span>
      </div>
    </div>
  );
}
