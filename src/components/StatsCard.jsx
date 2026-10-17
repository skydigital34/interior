import React from 'react';
import { Home, Users, Star } from 'lucide-react';

export default function StatsCard() {
  const stats = [
    {
      icon: Home,
      value: '50+',
      label: 'Completed Projects',
    },
    {
      icon: Users,
      value: '30+',
      label: 'Happy Clients',
    },
    {
      icon: Star,
      value: '5+',
      label: 'Years of Experience',
    },
  ];

  return (
    <div className="w-full rounded-[18px] p-2.5 sm:p-3 glass-card flex flex-col justify-between relative overflow-hidden">
      {/* Top subtle crystal specular sheen */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* 3 Metric Columns */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="flex flex-col items-start">
              <div className="text-white/85 mb-1 drop-shadow-sm">
                <Icon className="w-3.5 h-3.5 stroke-[1.6]" />
              </div>
              <div className="text-lg sm:text-[19px] font-semibold text-white tracking-tight font-heading leading-tight drop-shadow-sm">
                {stat.value}
              </div>
              <div className="text-[9.5px] sm:text-[10px] text-white/50 mt-0.5 font-light leading-snug">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Separator Line */}
      <div className="w-full h-px bg-white/[0.1] my-2" />

      {/* Bottom Tagline / Process */}
      <div className="flex items-center justify-center gap-1.5 text-[8.5px] sm:text-[9px] font-semibold tracking-[0.2em] text-[#edd3b4]/90 uppercase pb-0.5 drop-shadow-sm">
        <span>IDEAS</span>
        <span className="text-[#dfb482]/60 text-[9px]">→</span>
        <span>PLANS</span>
        <span className="text-[#dfb482]/60 text-[9px]">→</span>
        <span>BEAUTIFUL SPACES</span>
      </div>
    </div>
  );
}
