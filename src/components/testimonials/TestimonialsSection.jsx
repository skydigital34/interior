import React, { useState } from 'react';
import { Star, Quote, Play, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection({ onWatchStory }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. K. Radhakrishnan & Shanthi Radhakrishnan',
      role: 'Cardiologist & Healthcare Trustee',
      project: 'The Horizon Residence',
      location: 'Alwarpet, Chennai',
      area: '8,500 sq.ft Villa',
      rating: 5,
      quote: 'White Triad & Luxora transformed our plot into an architectural sanctuary. Ananya’s spatial orientation brought ocean breezes and dappled sunlight into every room. The turnkey handover was exactly on schedule, to the day.',
      videoThumbnail: '/assets/horizon-project.jpg',
      avatar: '/assets/dock-avatar.jpg',
      highlight: 'Delivered in 18 Months On-Time',
    },
    {
      id: 2,
      name: 'Siddharth & Priya Nair',
      role: 'Founders, FinTech Enterprise',
      project: 'The Zen Sky Penthouse',
      location: 'Indiranagar, Bengaluru',
      area: '4,800 sq.ft Penthouse',
      rating: 5,
      quote: 'The level of joinery precision in our minimalist penthouse is comparable to European luxury ateliers. Hidden flush walls, concealed AC coving, and the brass ring lighting create an atmosphere of pure serenity.',
      videoThumbnail: '/assets/types/minimalist.png',
      avatar: '/assets/dock-avatar.jpg',
      highlight: '100% Flush Joinery Finish',
    },
    {
      id: 3,
      name: 'Vikram & Meera Chandrasekhar',
      role: 'Heritage Estate Owners',
      project: 'Chettinad Heritage Mansion',
      location: 'Karaikudi / Chennai',
      area: '9,600 sq.ft Courtyard',
      rating: 5,
      quote: 'Restoring a 90-year-old family mansion without losing its soul requires immense reverence. White Triad seamlessly integrated modern climate control and smart lighting into carved teak beams. Truly masterful craft.',
      videoThumbnail: '/assets/types/traditional.png',
      avatar: '/assets/dock-avatar.jpg',
      highlight: 'Award-Winning Heritage Restoration',
    },
    {
      id: 4,
      name: 'Gautham Menon & Arundhati',
      role: 'Film Director & Writer',
      project: 'Nilgiri Glass Pavilion',
      location: 'Ooty, Tamil Nadu',
      area: '5,200 sq.ft Retreat',
      rating: 5,
      quote: 'Waking up inside a cantilevered glass pavilion hovering over tea estates is magical. The acoustic sealing means total silence inside even during Nilgiri monsoon storms. White Triad delivered pure poetry in steel and stone.',
      videoThumbnail: '/assets/ooty-pavilion.jpg',
      avatar: '/assets/dock-avatar.jpg',
      highlight: 'High-Altitude Structural Engineering',
    },
  ];

  const current = testimonials[activeIdx];

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      id="testimonials-section"
      className="relative w-full bg-[#0c0d12] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c48446]" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4944e]">
                Patron Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Words From Our Homeowners
            </h2>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              title="Previous Review"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-400 font-mono">
              0{activeIdx + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              title="Next Review"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#13151c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Client Quote & Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 5-Star Rating & Highlight Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#c48446]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-[#edd3b4] font-medium border border-white/10">
                {current.highlight}
              </span>
            </div>

            {/* Big Quote */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-light text-gray-100 leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-white/20 flex-shrink-0">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-base font-bold font-heading text-white">
                  {current.name}
                </h3>
                <p className="text-xs text-[#c48446] font-medium">
                  {current.role}
                </p>
                <p className="text-[11px] text-gray-400 font-light mt-0.5">
                  {current.project} • {current.location} ({current.area})
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Project Render Thumbnail with Play Action */}
          <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl aspect-[16/11]">
            <img
              src={current.videoThumbnail}
              alt={current.project}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

            {/* Center Play Button Overlay */}
            <div 
              onClick={() => onWatchStory && onWatchStory(current)}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-transform">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>
              <span className="mt-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                Watch Architectural Story
              </span>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="truncate">{current.project}</span>
              <span className="text-[#c48446] font-medium">{current.location}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
