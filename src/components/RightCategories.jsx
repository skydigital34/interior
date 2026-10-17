import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function RightCategories({ activeCategory, onSelectCategory, onScrollDown }) {
  const categories = [
    { id: 'residential', label: 'RESIDENTIAL' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'hospitality', label: 'HOSPITALITY' },
    { id: 'office-spaces', label: 'OFFICE SPACES' },
  ];

  return (
    <div className="hidden lg:flex flex-col items-end gap-8 xl:gap-10 select-none z-30 pt-1">
      {/* Category Pills Stack with Crystal Glass Container and Lateral Slide */}
      <div className="flex flex-col items-end gap-2.5 p-3.5 pr-4 rounded-2xl glass-card relative overflow-hidden animate-categories-slide">
        {/* Top subtle crystal specular sheen */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

        {categories.map((cat) => {
          const isActive = (activeCategory || 'residential').toLowerCase() === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`text-[10px] xl:text-[10.5px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer text-right ${
                isActive
                  ? 'text-[#dfb482] drop-shadow-[0_0_12px_rgba(223,180,130,0.6)] font-bold'
                  : 'text-white/45 hover:text-white/85'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Scroll Down Trigger with Drop & Float */}
      <div 
        onClick={onScrollDown}
        className="flex flex-col items-center gap-2 cursor-pointer group pr-4 animate-scroll-drop"
      >
        <div className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 animate-float-loop">
          <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </div>
        <div className="flex flex-col items-center text-[8.5px] font-semibold tracking-[0.25em] text-white/55 group-hover:text-white/90 transition-colors uppercase leading-[1.25]">
          <span>SCROLL</span>
          <span>DOWN</span>
        </div>
      </div>
    </div>
  );
}
