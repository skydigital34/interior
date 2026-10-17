import React, { useState } from 'react';
import { ArrowRight, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA, SERVICES_CATEGORIES } from '../../data/servicesData';
import ServiceRoomCard from './ServiceRoomCard';
import ServiceDetailModal from './ServiceDetailModal';
import LuxoraConsultationModal from '../luxora/LuxoraConsultationModal';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState('');

  // Filter items based on activeCategory
  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((item) => item.category === activeCategory);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleNextService = () => {
    if (!selectedService) return;
    const currentIndex = SERVICES_DATA.findIndex((s) => s.id === selectedService.id);
    const nextIndex = (currentIndex + 1) % SERVICES_DATA.length;
    setSelectedService(SERVICES_DATA[nextIndex]);
  };

  const handlePrevService = () => {
    if (!selectedService) return;
    const currentIndex = SERVICES_DATA.findIndex((s) => s.id === selectedService.id);
    const prevIndex = (currentIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
    setSelectedService(SERVICES_DATA[prevIndex]);
  };

  const handleBookConsultation = (service) => {
    setSelectedService(null);
    setConsultationContext(service?.title || 'Interior Design Service');
    setIsConsultationOpen(true);
  };

  return (
    <section 
      id="services-section"
      className="relative w-full bg-[#f6f2ec] text-gray-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#c48446]/20 font-sans"
    >
      {/* Background Soft Architectural Glow & Subtle Texture */}
      <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Header Section: Title, Subtitle, Filter Pills & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          
          {/* Main Typography exactly matching the reference image */}
          <div>
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c48446]" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-stone-600">
                White Triad & Luxora Studios
              </span>
            </div>

            {/* Main Title matching reference image */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#171615] font-heading leading-tight">
              Interior Design Services
            </h2>

            {/* Subtitle matching reference image */}
            <p className="mt-1 text-sm sm:text-base text-stone-600 font-light tracking-wide">
              Beautiful Spaces for a Better Tomorrow
            </p>
          </div>

          {/* Category Filter Pills & Book CTA Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none touch-pan-x flex-nowrap sm:flex-wrap pb-1 max-w-full">
            {SERVICES_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[12.5px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#181a1d] text-white shadow-md font-semibold scale-105'
                      : 'bg-white/80 hover:bg-white text-stone-700 hover:text-black border border-stone-200 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            {/* Free Consultation Quick CTA Button */}
            <button
              onClick={() => {
                setConsultationContext('General Interior Design Consultation');
                setIsConsultationOpen(true);
              }}
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#c48446] hover:bg-[#b0733a] text-white text-xs sm:text-[12.5px] font-semibold flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 ml-1"
            >
              <span>Consult Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* 4 x 3 Grid of 12 3D Chamfered Room Niche Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {filteredServices.map((service) => (
            <ServiceRoomCard
              key={service.id}
              service={service}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Bottom Turnkey Assurance Banner */}
        <div className="mt-12 sm:mt-16 rounded-3xl p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f5ede3] border border-[#e8d5be] flex items-center justify-center text-[#c48446] flex-shrink-0">
              <Sparkles className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-heading">
                Comprehensive 360° Interior Design & Turnkey Fitouts
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-600 font-light mt-0.5">
                From 3D photorealistic visualization and bespoke millwork to on-site project execution with 10-year warranty.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setConsultationContext('Turnkey Interior Project');
              setIsConsultationOpen(true);
            }}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-[#181a1d] hover:bg-black text-white text-xs sm:text-[13px] font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer hover:scale-105 whitespace-nowrap"
          >
            <span>Book a Free 3D Design Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Modal 1: Room Service Detail Modal (Features, specs, zoom) */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onNext={handleNextService}
        onPrev={handlePrevService}
        onBookConsultation={handleBookConsultation}
      />

      {/* Modal 2: Luxora Consultation Modal */}
      <LuxoraConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationContext}
      />
    </section>
  );
}
