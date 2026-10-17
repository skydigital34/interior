import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ConsultationCard({ onClick, consultation, theme }) {
  const badge = consultation?.badge || "LET'S DESIGN YOUR SPACE";
  const title = consultation?.title || "Book a Free Consultation";
  const gradient = theme?.ctaGradient || "from-[#1c221e] via-[#202722] to-[#252d27]";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl sm:rounded-full px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r ${gradient} text-white shadow-[0_12px_28px_rgba(20,25,22,0.3)] hover:shadow-[0_16px_36px_rgba(20,25,22,0.4)] transition-all duration-500 flex items-center justify-between gap-4 relative overflow-hidden group cursor-pointer w-full md:w-auto min-w-[260px]`}
    >
      {/* Botanical Palm / Leaf Decorative Silhouette */}
      <div className="absolute left-0 top-0 bottom-0 w-24 opacity-35 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#526a57]"
        >
          <path
            d="M10 110C25 80 40 50 80 10C65 40 50 70 10 110Z"
            fill="currentColor"
          />
          <path
            d="M5 80C20 60 45 40 70 20C55 45 35 65 5 80Z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M2 50C15 35 40 25 60 15C45 30 25 45 2 50Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Center Copy */}
      <div className="relative z-10 pl-3 sm:pl-4">
        <span className={`block text-[9px] uppercase tracking-[0.24em] font-semibold transition-all duration-300 ${theme?.ctaBadgeColor || 'text-[#9db5a3]'}`}>
          {badge}
        </span>
        <h3 className={`text-xs sm:text-[13.5px] font-semibold font-heading text-white transition-colors mt-0.5 whitespace-nowrap ${theme?.ctaTitleHover || 'group-hover:text-[#edd3b4]'}`}>
          {title}
        </h3>
      </div>

      {/* Right Circular White CTA Button */}
      <div className="relative z-10 w-7 h-7 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
        <ArrowRight className="w-3 h-3 stroke-[2.2]" />
      </div>
    </div>
  );
}
