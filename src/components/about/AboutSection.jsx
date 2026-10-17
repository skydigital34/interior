import React from 'react';
import { Award, Compass, Sparkles, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { value: '14+', label: 'Years of Architectural Excellence' },
    { value: '380+', label: 'Luxury Homes & Villas Delivered' },
    { value: '24', label: 'National & Global Design Accolades' },
    { value: '100%', label: 'Turnkey Execution On Schedule' },
  ];

  const pillars = [
    {
      icon: Compass,
      title: 'Contextual Architecture',
      description: 'Every structure responds intuitively to local topography, sun paths, wind circulation, and native flora.',
    },
    {
      icon: Sparkles,
      title: 'Artisan Materiality',
      description: 'Sourced hand-troweled microcement, raw Corten steel, seasoned Burma teak, and large-format porcelain slabs.',
    },
    {
      icon: ShieldCheck,
      title: 'Precision Turnkey Guild',
      description: 'From soil testing to final bespoke furniture placement, our in-house civil engineers and master carpenters manage every millimeter.',
    },
  ];

  return (
    <section 
      id="about-section" 
      className="relative w-full bg-[#0c0d12] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      {/* Background Architectural Grid Lines & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#8a7b54]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Top Header Badge & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c48446] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4944e]">
                About White Triad & Luxora Studios
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-[1.12]">
              The Architecture of Balance: <br />
              <span className="bg-gradient-to-r from-white via-[#f0ded0] to-[#c48446] bg-clip-text text-transparent">
                Form, Light & Emotional Depth
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 font-light max-w-md leading-relaxed">
            Founded in 2012 by Ar. Ananya Rao & Ar. Vikramaditya, White Triad Architects brings together high-concept spatial architecture and the artisanal interior finesse of Luxora Studios.
          </p>
        </div>

        {/* 2-Column Story: Left Architect Profile & Right Design Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Founding Partner Portrait Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#161820] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src="/assets/ananya-rao.jpg"
                  alt="Ar. Ananya Rao - Principal Architect & Founder"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent opacity-90" />
              </div>

              {/* Float Glass Label at bottom of photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      Ar. Ananya Rao
                    </h3>
                    <p className="text-xs text-[#c48446] font-medium tracking-wide">
                      Founding Principal & Design Director
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 border border-white/15">
                    <Award className="w-5 h-5 text-[#c48446]" />
                  </div>
                </div>
                <p className="mt-2 text-[11.5px] text-gray-300 font-light leading-relaxed italic border-t border-white/10 pt-2">
                  "Architecture is not just about sheltering the body; it is the choreographing of sunlight, silence, and human emotion across time."
                </p>
              </div>
            </div>

            {/* Accent badge floating on side */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-[#c48446] text-black text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center gap-1.5">
              <span>AIA & IIA Fellow</span>
            </div>
          </div>

          {/* Right Column: 3 Pillars & Design Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-gray-400">
                Our Triple Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Merging Contemporary Engineering with Craft Traditions
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                We believe exceptional luxury is never loud. It lives in the precision of shadow gaps, the warmth of seasoned walnut under bare feet, and the seamless continuum between exterior landscape and interior sanctuary.
              </p>
            </div>

            {/* 3 Interactive Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#c48446]/40 hover:bg-white/[0.07] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#c48446] mb-3.5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white font-heading mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Recognition & Publication Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-gray-400 font-light">
              <span className="font-semibold text-white tracking-wider uppercase text-[11px]">
                Featured in:
              </span>
              <span className="hover:text-white transition-colors cursor-default tracking-widest uppercase font-serif text-[13px]">
                Architectural Digest
              </span>
              <span className="hover:text-white transition-colors cursor-default tracking-widest uppercase font-serif text-[13px]">
                Elle Decor
              </span>
              <span className="hover:text-white transition-colors cursor-default tracking-widest uppercase font-serif text-[13px]">
                Dezeen
              </span>
              <span className="hover:text-white transition-colors cursor-default tracking-widest uppercase font-serif text-[13px]">
                IIA National Award
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Numbers Row */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-light mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
