import React from 'react';

export default function BottomBar({ currentSlide = 1, onSelectSlide }) {
  const slides = ['01', '02', '03'];

  return (
    <footer className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 py-3 sm:py-4 flex items-center justify-between relative z-30 select-none animate-bottom-bar">
      {/* Slide Pagination Tracker */}
      <div className="flex items-center gap-4 text-xs font-light text-white/50 tracking-wider">
        {/* Active Line Indicator */}
        <div className="w-7 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
        
        <div className="flex items-center gap-4">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx + 1;
            return (
              <button
                key={s}
                onClick={() => onSelectSlide && onSelectSlide(idx + 1)}
                className={`transition-colors cursor-pointer text-[12px] ${
                  isActive ? 'text-white font-medium drop-shadow-sm' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Signoff */}
      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/40 font-light hover:text-white/60 transition-colors">
        WHITE TRIAD ARCHITECTS
      </div>
    </footer>
  );
}
