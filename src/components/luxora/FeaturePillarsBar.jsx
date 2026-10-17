import React from 'react';
import { Palette, Box, Leaf, Settings, Users } from 'lucide-react';

export default function FeaturePillarsBar({ 
  pillars = [],
  theme,
  isDarkTheme = false 
}) {
  const defaultPillars = [
    { icon: Palette, label: 'Personalized Designs' },
    { icon: Box, label: '3D Visualization' },
    { icon: Leaf, label: 'Premium Materials' },
    { icon: Settings, label: 'Turnkey Solutions' },
    { icon: Users, label: 'Dedicated Support' },
  ];

  const items = pillars.length > 0 ? pillars : defaultPillars;
  const accentColor = theme?.accentColor || '#c48446';

  const containerClass = isDarkTheme
    ? 'bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-white'
    : 'bg-white/95 backdrop-blur-xl border border-stone-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-gray-800';

  const iconFrameClass = isDarkTheme
    ? 'bg-white/10 border-white/15 text-gray-200 group-hover:bg-white/20 group-hover:text-white'
    : 'bg-gray-50 border-gray-100 text-gray-700 group-hover:bg-[#fbf5ed]';

  const labelClass = isDarkTheme
    ? 'text-gray-200 group-hover:text-white'
    : 'text-gray-800 group-hover:text-black';

  return (
    <div className={`rounded-2xl sm:rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6 flex-1 select-none overflow-x-auto scrollbar-none transition-all duration-300 ${containerClass}`}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={`${item.label}-${idx}`}
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer group hover:opacity-90 transition-opacity animate-fadeIn"
          >
            {/* Circular Icon Frame */}
            <div 
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${iconFrameClass}`}
              style={{ '--hover-accent': accentColor }}
            >
              <Icon className="w-3.5 h-3.5 stroke-[1.8]" />
            </div>

            {/* Label */}
            <span className={`text-[11px] sm:text-[11.5px] font-medium tracking-tight whitespace-nowrap transition-colors ${labelClass}`}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
