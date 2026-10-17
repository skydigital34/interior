import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function ServiceRoomCard({ service, onClick }) {
  return (
    <div
      onClick={() => onClick(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(service);
        }
      }}
      className="group relative cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-3xl"
    >
      {/* 3D Niche Container */}
      <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#e8e2d8] shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(30,25,20,0.18)] transition-all duration-400 ease-out transform group-hover:-translate-y-1 group-hover:scale-[1.02]">
        {/* Actual 3D Room Box Tile */}
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Ambient Hover Shimmer / Warm Light Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Floating View Details Quick Action on Hover (top right) */}
        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        {/* Bottom Pill Badge - matching the user's reference image */}
        <div className="absolute bottom-2 sm:bottom-2.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-auto max-w-[92%]">
          <div className="px-2.5 sm:px-4 py-0.5 sm:py-1.5 rounded-full bg-[#2a2420]/95 backdrop-blur-md border border-white/10 text-white text-[8.5px] min-[380px]:text-[9.5px] sm:text-[11px] font-semibold tracking-wide sm:tracking-wider uppercase text-center shadow-md whitespace-nowrap transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#1a1715]">
            {service.badge}
          </div>
        </div>
      </div>
    </div>
  );
}
