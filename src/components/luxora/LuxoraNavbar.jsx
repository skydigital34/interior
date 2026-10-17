import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export default function LuxoraNavbar({ 
  selectedType = 'Modern', 
  onSelectInteriorType,
  theme,
  isDarkTheme = false
}) {
  const [shakingType, setShakingType] = useState(null);

  const interiorTypes = [
    'Modern',
    'Minimalist',
    'Industrial',
    'Traditional',
    'Contemporary',
    'Mid-Century Modern'
  ];

  const lockedCategories = ['Traditional', 'Contemporary', 'Mid-Century Modern'];

  const handleClick = (type) => {
    if (lockedCategories.includes(type)) {
      // Trigger subtle shake feedback for locked item
      setShakingType(type);
      setTimeout(() => setShakingType(null), 500);
      return;
    }

    if (onSelectInteriorType) {
      onSelectInteriorType(type);
    }
  };

  const navBgClass = isDarkTheme
    ? 'bg-[#12141a]/85 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
    : 'bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)]';

  return (
    <header className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 pt-3 sm:pt-4 pb-1 sm:pb-2 flex items-center justify-center relative z-40 transition-all duration-500">
      {/* Centered Floating Pill Navigation: Interior Types */}
      <nav className={`flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none touch-pan-x justify-start sm:justify-center transition-all duration-500 ${navBgClass}`}>
        {interiorTypes.map((type) => {
          const isActive = selectedType === type;
          const isLocked = lockedCategories.includes(type);
          const isShaking = shakingType === type;

          if (isLocked) {
            const lockedBtnClass = isDarkTheme
              ? 'bg-white/5 hover:bg-white/10 text-gray-500 border border-white/5'
              : 'bg-white/40 hover:bg-white/60 text-gray-400 border border-gray-200/40';

            return (
              <button
                key={type}
                onClick={() => handleClick(type)}
                title={`${type} (Locked)`}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-[12px] font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-not-allowed relative group select-none ${lockedBtnClass} ${
                  isShaking ? 'animate-shake' : ''
                }`}
              >
                <Lock className="w-3 h-3 text-gray-400 stroke-[2.2]" />
                <span className={`line-through decoration-1 ${isDarkTheme ? 'decoration-gray-600 text-gray-500' : 'decoration-gray-300 text-gray-500'}`}>
                  {type}
                </span>
                <span className={`text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full ml-0.5 shadow-2xs ${
                  isDarkTheme ? 'bg-white/10 text-gray-400' : 'bg-gray-200/70 text-gray-500'
                }`}>
                  Locked
                </span>

                {/* Hover Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#181a1d] text-white text-[10px] tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
                  Temporarily Locked
                </span>
              </button>
            );
          }

          if (isActive) {
            return (
              <button
                key={type}
                onClick={() => handleClick(type)}
                style={isDarkTheme && theme?.accentColor ? { backgroundColor: theme.accentColor, color: '#ffffff' } : {}}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[12.5px] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap scale-105 shadow-md ${
                  !isDarkTheme ? 'bg-[#181a1d] text-white' : ''
                }`}
              >
                {type}
              </button>
            );
          }

          const inactiveBtnClass = isDarkTheme
            ? 'bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/10 shadow-xs'
            : 'bg-white/80 hover:bg-white text-gray-700 hover:text-black border border-gray-200/50 shadow-xs';

          return (
            <button
              key={type}
              onClick={() => handleClick(type)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[12.5px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${inactiveBtnClass}`}
            >
              {type}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
