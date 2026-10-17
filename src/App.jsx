import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import LuxoraSection from './components/luxora/LuxoraSection';
import ServicesSection from './components/services/ServicesSection';
import AboutSection from './components/about/AboutSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import ProcessSection from './components/process/ProcessSection';
import PricingCalculatorSection from './components/pricing/PricingCalculatorSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import FAQSection from './components/faq/FAQSection';
import ContactFooterSection from './components/contact/ContactFooterSection';
import LuxoraConsultationModal from './components/luxora/LuxoraConsultationModal';
import VideoModal from './components/VideoModal';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view');

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState('');
  const [activeVideoStory, setActiveVideoStory] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
  }, []);

  const handleOpenConsultation = (serviceName = 'General Architectural Consultation') => {
    setConsultationContext(typeof serviceName === 'string' ? serviceName : serviceName?.title || 'Project Consultation');
    setIsConsultationOpen(true);
  };

  const handleWatchVideoStory = (testimonial) => {
    setActiveVideoStory({
      title: `${testimonial.project} — ${testimonial.name}`,
      videoUrl: '/assets/hero-story.mp4',
    });
  };

  // Dedicated Views for direct isolated inspection:
  if (viewParam === 'luxora') {
    return <LuxoraSection />;
  }
  if (viewParam === 'white-triad') {
    return <HeroSection />;
  }
  if (viewParam === 'services') {
    return <ServicesSection />;
  }
  if (viewParam === 'about') {
    return <AboutSection />;
  }
  if (viewParam === 'portfolio') {
    return <PortfolioSection onStartProject={handleOpenConsultation} />;
  }
  if (viewParam === 'process') {
    return <ProcessSection onScheduleConsultation={handleOpenConsultation} />;
  }
  if (viewParam === 'pricing') {
    return <PricingCalculatorSection onScheduleConsultation={handleOpenConsultation} />;
  }
  if (viewParam === 'testimonials') {
    return <TestimonialsSection onWatchStory={handleWatchVideoStory} />;
  }
  if (viewParam === 'faq') {
    return <FAQSection onOpenContact={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} />;
  }
  if (viewParam === 'contact') {
    return <ContactFooterSection />;
  }

  // Full Continuous Experience: All 10 Award-Winning Sections Stacked Seamlessly
  return (
    <div id="top" className="w-full bg-[#08090c] min-h-screen font-sans antialiased text-white selection:bg-[#c48446]/30">
      
      {/* 1. White Triad Architects — Dark Luxury Cinematic Hero */}
      <HeroSection />

      {/* 2. Luxora Interior Studio — Interactive Category Showcase & Walkthrough */}
      <LuxoraSection />

      {/* 3. Interior Design Services — 4x3 3D Room Niches Grid */}
      <ServicesSection />

      {/* 4. About & Design Philosophy — The Architecture of Balance & Founders */}
      <AboutSection />

      {/* 5. Selected Portfolio & Masterworks — 6 Featured Works & Case Study Modal */}
      <PortfolioSection onStartProject={handleOpenConsultation} />

      {/* 6. Design Process & Turnkey Journey — 5-Stage Methodology */}
      <ProcessSection onScheduleConsultation={handleOpenConsultation} />

      {/* 7. Interactive Pricing Calculator — Custom Sq.Ft & Specification Estimator */}
      <PricingCalculatorSection onScheduleConsultation={handleOpenConsultation} />

      {/* 8. Patron Testimonials & Reviews — Video Stories & Star Ratings */}
      <TestimonialsSection onWatchStory={handleWatchVideoStory} />

      {/* 9. Frequently Asked Questions — Turnkey Warranties, Milestones & Sourcing */}
      <FAQSection onOpenContact={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} />

      {/* 10. Contact Studios & Luxury Footer — Chennai & Bengaluru Showrooms & Booking Form */}
      <ContactFooterSection />

      {/* Global Interactive Modals */}
      <LuxoraConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationContext}
      />

      <VideoModal
        isOpen={!!activeVideoStory}
        onClose={() => setActiveVideoStory(null)}
        title={activeVideoStory?.title}
        videoUrl={activeVideoStory?.videoUrl}
      />
    </div>
  );
}

export default App;
