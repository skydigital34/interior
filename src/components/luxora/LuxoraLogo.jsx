import React from 'react';

export default function LuxoraLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Origami Ribbon Peaked House Monogram */}
      <div className="relative w-8 h-8 flex items-center justify-center text-[#181a1d]">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-current"
        >
          {/* Peaked Roof Ribbon */}
          <path
            d="M5 24L18 8L31 24"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lower Horizon / Floor Step */}
          <path
            d="M11 24L18 16L25 24"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className="text-[17px] font-bold tracking-[0.22em] text-[#141618] leading-none font-heading">
          LUXORA
        </span>
        <span className="text-[8.5px] uppercase tracking-[0.34em] text-gray-500 font-medium mt-1 leading-none">
          INTERIOR STUDIO
        </span>
      </div>
    </div>
  );
}
