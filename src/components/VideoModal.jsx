import React from 'react';
import { X, Play, Volume2, Maximize2 } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-[32px] overflow-hidden bg-[#12141c] border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:scale-105 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img 
            src="/assets/hero-bg.jpg" 
            alt="Architecture Walkthrough" 
            className="w-full h-full object-cover opacity-85 scale-105 animate-pulse"
            style={{ animationDuration: '4s' }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Central Play Badge */}
          <div className="absolute flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#dfb482]/90 text-black flex items-center justify-center shadow-[0_0_50px_rgba(223,180,130,0.6)] cursor-pointer hover:scale-110 transition duration-300">
              <Play className="w-8 h-8 fill-black translate-x-0.5" />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-white/90 drop-shadow-md">
              White Triad: Philosophy & Craft
            </span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between text-white/70">
            <div className="flex items-center gap-4">
              <Play className="w-4 h-4 cursor-pointer hover:text-white" />
              <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
              <div className="w-32 sm:w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-[#dfb482]" />
              </div>
              <span className="text-xs font-mono">01:42 / 04:30</span>
            </div>
            <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Video Subtitle & Details */}
        <div className="p-6 bg-[#0f1117] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-heading text-white font-medium">
              Thoughtful Spaces: An Architectural Journey
            </h4>
            <p className="text-xs text-white/50 mt-1">
              Explore how our architectural studio sculpts light, materiality, and emotional harmony across residential masterpieces.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white font-medium transition cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
