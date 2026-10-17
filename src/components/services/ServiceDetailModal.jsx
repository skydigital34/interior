import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onPrev,
  onNext,
  onBookConsultation,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#faf8f5] text-gray-900 rounded-3xl shadow-2xl border border-stone-200/90 flex flex-col md:flex-row overflow-hidden scrollbar-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all cursor-pointer hover:scale-105"
        >
          <X className="w-4 h-4 stroke-[2.2]" />
        </button>

        {/* Left Column: 3D Room Box View */}
        <div className="md:w-1/2 relative bg-[#f1ece5] flex flex-col items-center justify-center p-6 sm:p-8 min-h-[300px] md:min-h-[460px]">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          {/* 3D Niche Frame */}
          <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white/80 group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Floating Pill at bottom of modal image */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#201c18]/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase shadow-lg border border-white/10">
              {service.badge}
            </div>
          </div>

          {/* Prev/Next Navigation Controls */}
          <div className="flex items-center gap-3 mt-4 z-10">
            <button
              onClick={onPrev}
              title="Previous Service"
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-gray-500 font-medium tracking-wide">
              Browse 12 Services
            </span>
            <button
              onClick={onNext}
              title="Next Service"
              className="w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Details & Specifications */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Eyebrow & Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-stone-200/80 text-[10px] font-semibold text-stone-700 tracking-wider uppercase">
                Turnkey Execution
              </span>
              {service.popular && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#b26e2e] text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  Most Popular
                </span>
              )}
            </div>

            {/* Room Title */}
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              {service.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs sm:text-[13px] text-stone-600 font-medium mt-1 leading-relaxed">
              {service.tagline}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-gray-600 font-light mt-3 leading-relaxed">
              {service.description}
            </p>

            {/* Key Inclusions & Features */}
            <div className="mt-4 pt-4 border-t border-stone-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-2">
                What’s Included in This Package:
              </h4>
              <ul className="space-y-1.5">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b26e2e] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Turnkey Stats: Timeline & Warranty */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-stone-200">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/60 shadow-2xs">
                <Clock className="w-4 h-4 text-stone-500" />
                <div>
                  <div className="text-[10px] text-stone-500 uppercase font-medium">Timeline</div>
                  <div className="text-xs font-semibold text-gray-900">{service.timeline}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200/60 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#b26e2e]" />
                <div>
                  <div className="text-[10px] text-stone-500 uppercase font-medium">Guarantee</div>
                  <div className="text-xs font-semibold text-gray-900">{service.warranty}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                if (onBookConsultation) onBookConsultation(service);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#181a1d] hover:bg-black text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Design My {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-full bg-white hover:bg-stone-100 text-gray-700 text-xs font-medium border border-stone-200 shadow-2xs transition-colors cursor-pointer"
            >
              Explore More Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
