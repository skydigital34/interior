import React, { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickPills = [
    'The Horizon Residence',
    'Luxury Villas',
    'Minimalist Wood Cladding',
    'Cove Lighting Solutions',
    'Penthouse Living',
    'Hospitality Suites',
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-black/80 backdrop-blur-2xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-[32px] p-6 bg-[#13151e]/95 border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <Search className="w-5 h-5 text-white/50" />
          <input
            type="text"
            autoFocus
            placeholder="Search projects, materials, concepts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-white/35 text-base sm:text-lg focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick searches */}
        <div className="mt-5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white/40">
            Suggested Searches
          </span>
          <div className="flex flex-wrap gap-2 mt-2.5">
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => {
                  setQuery(pill);
                  if (onSelectResult) onSelectResult(pill);
                }}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/15 border border-white/10 text-xs text-white/80 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
              >
                {pill} <ArrowUpRight className="w-3 h-3 opacity-60" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
