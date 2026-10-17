import React from 'react';
import { X, Play, Maximize2, RotateCcw } from 'lucide-react';

export default function LuxoraWalkthroughModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-[32px] overflow-hidden bg-white border border-gray-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-105 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 3D Walkthrough Viewport */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/assets/walkthrough-thumb.jpg"
            alt="3D Walkthrough"
            className="w-full h-full object-cover opacity-90 scale-100 hover:scale-105 transition-transform duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Interactive 3D Cursor Badge */}
          <div className="absolute flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition duration-300">
              <Play className="w-6 h-6 fill-gray-900 translate-x-0.5" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-white drop-shadow-md">
              Interactive 360° Living Room Tour
            </span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/80 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-mono">
                FOV: 85° • 4K HDR
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-4 h-4 cursor-pointer hover:text-white" />
              <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-5 bg-[#faf8f5] flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Contemporary Penthouse — Coimbatore
            </h4>
            <p className="text-xs text-gray-500">
              Experience the layout with real-time lighting simulation and custom joinery detailing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-xs font-medium text-gray-800 transition"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
}
