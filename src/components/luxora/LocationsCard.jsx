import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function LocationsCard({ 
  locations, 
  accentColor = '#c48446',
  theme,
  isDarkTheme = false 
}) {
  const cities = locations?.cities || ['Chennai', 'Bengaluru', 'Coimbatore', 'Hyderabad', 'Pan India'];
  const title = locations?.title || 'Our Design Locations';

  const containerClass = isDarkTheme
    ? 'bg-[#12141a]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.5)] text-white'
    : 'bg-white/95 backdrop-blur-xl border border-stone-200/80 shadow-[0_12px_28px_rgba(0,0,0,0.05)] text-gray-900';

  const mapBgClass = isDarkTheme
    ? 'bg-[#0d0f14] border-white/10'
    : 'bg-[#fbf9f6] border-stone-200/80';

  return (
    <div className={`rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 hover:shadow-xl transition-all duration-300 w-full max-w-[320px] select-none ${containerClass}`}>
      {/* Title Header */}
      <div className={`flex items-center justify-between pb-2 border-b ${isDarkTheme ? 'border-white/10' : 'border-gray-100'}`}>
        <h3 className={`text-[11.5px] font-semibold tracking-tight transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <ChevronRight className={`w-3 h-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-400'}`} />
      </div>

      {/* Map Graphic & City Pins List */}
      <div className="grid grid-cols-12 gap-2.5 items-center pt-2">
        {/* Left: Minimalist Dot Matrix Geographic Map */}
        <div className={`col-span-7 relative h-20 flex items-center justify-center rounded-xl p-1.5 border overflow-hidden ${mapBgClass}`}>
          {/* Subtle World Map Vector SVG with Dot Grid */}
          <svg
            viewBox="0 0 160 90"
            className="w-full h-full opacity-70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Americas */}
            <circle cx="20" cy="30" r="1.4" fill="#88929e" />
            <circle cx="28" cy="24" r="1.4" fill="#88929e" />
            <circle cx="35" cy="32" r="1.4" fill="#88929e" />
            <circle cx="24" cy="42" r="1.4" fill="#88929e" />
            <circle cx="32" cy="54" r="1.4" fill="#88929e" />
            <circle cx="38" cy="68" r="1.4" fill="#88929e" />

            {/* Europe / Africa */}
            <circle cx="68" cy="25" r="1.4" fill="#88929e" />
            <circle cx="76" cy="22" r="1.4" fill="#88929e" />
            <circle cx="82" cy="28" r="1.4" fill="#88929e" />
            <circle cx="72" cy="40" r="1.4" fill="#88929e" />
            <circle cx="78" cy="52" r="1.4" fill="#88929e" />
            <circle cx="82" cy="65" r="1.4" fill="#88929e" />

            {/* Asia / Middle East */}
            <circle cx="95" cy="26" r="1.4" fill="#88929e" />
            <circle cx="106" cy="22" r="1.4" fill="#88929e" />
            <circle cx="118" cy="28" r="1.4" fill="#88929e" />
            <circle cx="130" cy="32" r="1.4" fill="#88929e" />
            <circle cx="122" cy="42" r="1.4" fill="#88929e" />

            {/* Active Highlight Node Cluster */}
            <circle cx="104" cy="48" r="2" fill={accentColor} />
            <circle cx="108" cy="54" r="2.4" fill={accentColor} />
            <circle cx="106" cy="60" r="2" fill={accentColor} />

            {/* Australia */}
            <circle cx="138" cy="62" r="1.4" fill="#88929e" />
            <circle cx="145" cy="68" r="1.4" fill="#88929e" />
          </svg>

          {/* Active Pulsing Pin on Location */}
          <div className="absolute top-[60%] left-[68%] -translate-x-1/2 -translate-y-1/2">
            <span 
              className="absolute -inset-1.5 rounded-full animate-ping opacity-45"
              style={{ backgroundColor: accentColor }}
            />
            <div 
              className="w-2 h-2 rounded-full border border-white shadow-md transition-colors duration-500"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          <div className="absolute top-[52%] left-[65%] -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-1.5 h-1.5 rounded-full border border-white shadow-xs transition-colors duration-500"
              style={{ backgroundColor: accentColor }}
            />
          </div>
        </div>

        {/* Right: Cities List with Pins */}
        <div className="col-span-5 flex flex-col gap-1 pl-1">
          {cities.map((city, idx) => (
            <div 
              key={`${city}-${idx}`} 
              className={`flex items-center gap-1.5 text-[10.5px] font-medium transition-colors cursor-pointer group ${
                isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              <MapPin 
                className="w-2.5 h-2.5 group-hover:scale-110 transition-transform flex-shrink-0"
                style={{ color: accentColor }}
              />
              <span className="truncate">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
