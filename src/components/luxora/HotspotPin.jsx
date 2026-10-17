import React, { useState } from 'react';
import { Layers, Maximize2, Armchair } from 'lucide-react';

export default function HotspotPin({ 
  iconType = 'materials', 
  label = 'Feature', 
  pinX = '50%', 
  pinY = '50%',
  cardOffsetX = 0,
  cardOffsetY = -45,
  accentColor = '#c48446',
  isDarkTheme = false,
  className = '',
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false);

  const iconColor = isDarkTheme ? 'text-gray-200' : 'text-gray-800';

  const renderIcon = () => {
    switch (iconType) {
      case 'materials':
        return <Layers className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
      case 'space':
        return <Maximize2 className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
      case 'furniture':
        return <Armchair className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
      default:
        return <Layers className={`w-3.5 h-3.5 stroke-[2] ${iconColor}`} />;
    }
  };

  const pillCardClass = isDarkTheme
    ? 'bg-[#12141a]/90 backdrop-blur-md border border-white/15 text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
    : 'bg-white/95 backdrop-blur-md border border-stone-200/90 text-gray-800 shadow-[0_10px_25px_rgba(0,0,0,0.1)]';

  const iconBoxClass = isDarkTheme
    ? 'bg-white/10 border-white/15'
    : 'bg-gray-50 border-gray-100 group-hover:bg-[#fbf5ed]';

  const labelClass = isDarkTheme
    ? 'text-gray-100 group-hover:text-white'
    : 'text-gray-800 group-hover:text-black';

  return (
    <div
      style={{ left: pinX, top: pinY }}
      className={`absolute z-25 pointer-events-auto select-none ${className}`}
    >
      {/* 1. Target Pin Anchor with Concentric Radar Pulse */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className="relative flex items-center justify-center cursor-pointer group"
      >
        {/* Outer expanding pulsing wave */}
        <span 
          className="absolute w-7 h-7 rounded-full animate-ping opacity-60" 
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Middle translucent ring */}
        <span className="w-5 h-5 rounded-full bg-white/70 backdrop-blur-xs flex items-center justify-center border border-white shadow-md">
          {/* Center solid core dot */}
          <span 
            className="w-2 h-2 rounded-full shadow-xs group-hover:scale-125 transition-transform" 
            style={{ backgroundColor: accentColor }}
          />
        </span>
      </div>

      {/* 2. Slanted Connecting Line (Drawn via SVG) - Desktop & Tablet */}
      <svg
        className="hidden md:block absolute pointer-events-none overflow-visible"
        style={{
          left: cardOffsetX > 0 ? 0 : cardOffsetX,
          top: cardOffsetY > 0 ? 0 : cardOffsetY,
          width: Math.abs(cardOffsetX) || 2,
          height: Math.abs(cardOffsetY) || 2,
        }}
      >
        <line
          x1={cardOffsetX > 0 ? 0 : Math.abs(cardOffsetX)}
          y1={cardOffsetY > 0 ? 0 : Math.abs(cardOffsetY)}
          x2={cardOffsetX > 0 ? Math.abs(cardOffsetX) : 0}
          y2={cardOffsetY > 0 ? Math.abs(cardOffsetY) : 0}
          stroke={isDarkTheme ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.35)'}
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </svg>

      {/* 3. Floating Feature Pill Card - Desktop & Tablet */}
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate(${cardOffsetX}px, ${cardOffsetY}px)`,
        }}
        className={`hidden md:flex absolute top-0 left-0 items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap group ${pillCardClass} ${
          isHovered ? 'scale-105' : ''
        }`}
      >
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${iconBoxClass}`}>
          {renderIcon()}
        </div>
        <span className={`text-[11.5px] font-medium tracking-tight transition-colors ${labelClass}`}>
          {label}
        </span>
      </div>

      {/* 4. Compact Mobile Tooltip on Tap */}
      {isHovered && (
        <div className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] text-white whitespace-nowrap shadow-xl pointer-events-none z-50">
          {label}
        </div>
      )}
    </div>
  );
}
