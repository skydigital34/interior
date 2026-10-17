import React, { useState } from 'react';
import { Compass, Box, Layers, Hammer, Key, CheckCircle2, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProcessSection({ onScheduleConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: Compass,
      stepNum: '01',
      title: 'Discovery & Spatial Alignment',
      timeline: 'Days 1 – 7',
      tagline: 'Site analysis, orientation studies, and lifestyle deep-dive',
      description: 'We begin with on-site spatial scanning, orientation mapping (sun paths, cross-ventilation, and privacy vectors), and a deep interview to define your family’s daily rituals, aesthetic affinities, and spatial aspirations.',
      deliverables: [
        'Precise 3D Laser Site Measurement & As-Built Scan',
        'Zoning & Circulation Concept Matrix',
        'Moodboard & Texture Direction Presentation',
        'Preliminary Budget & Turnkey Scope Roadmap'
      ],
      deliverableBadge: 'Initial Design Dossier'
    },
    {
      id: 2,
      icon: Box,
      stepNum: '02',
      title: '3D Photorealism & VR Walkthrough',
      timeline: 'Days 8 – 20',
      tagline: 'Walk through your future sanctuary before a single brick is laid',
      description: 'Our digital atelier models every millimeter in 3D. Experience your villa in daylight and evening lighting configurations with millimeter-accurate joinery, furniture, and custom artwork.',
      deliverables: [
        '100% Photorealistic 4K Renders for All Rooms',
        'Interactive 360° VR Spatial Walkthrough',
        'Illumination Lux Level & Lighting Simulation',
        'Curated Material Sample Board Delivered to You'
      ],
      deliverableBadge: 'Full 3D Master Model'
    },
    {
      id: 3,
      icon: Layers,
      stepNum: '03',
      title: 'Engineering & Material Sourcing',
      timeline: 'Days 21 – 35',
      tagline: 'Precision millwork drafting and global stone selection',
      description: 'Detailed civil, electrical, plumbing, and HVAC routing schematics are finalized. We lock in Italian marble lots, seasoned teakwood, and Blum European hardware with transparent pricing.',
      deliverables: [
        'Reflected Ceiling Plans (RCP) & Circuit Layouts',
        'Bespoke Joinery & Wardrobe Cutting Blueprints',
        'Lock-In of Natural Stone & Veneer Bundles',
        'Itemized Fixed-Price Turnkey Contract'
      ],
      deliverableBadge: 'Execution Blueprints'
    },
    {
      id: 4,
      icon: Hammer,
      stepNum: '04',
      title: 'Turnkey Execution & Supervision',
      timeline: 'Days 36 – 75',
      tagline: 'Dedicated project managers and daily app progress updates',
      description: 'Our in-house master craftsmen, carpenters, and MEP technicians take the floor under the strict eye of a dedicated White Triad Project Architect. Zero unauthorized changes, zero hidden costs.',
      deliverables: [
        'Dedicated On-Site Architect & Safety Officer',
        'Daily Photo & Milestone Progress Updates',
        'Multi-Stage Waterproofing & Quality Audits',
        'Dust-Controlled Precision Millwork Assembly'
      ],
      deliverableBadge: 'Turnkey Construction'
    },
    {
      id: 5,
      icon: Key,
      stepNum: '05',
      title: 'White-Glove Handover & Warranty',
      timeline: 'Day 75+',
      tagline: 'Deep sanitized cleaning, ceremonial key handover, and 10-year backing',
      description: 'We perform deep multi-point acoustic, electrical, and finish inspections. Your home is delivered completely spotless with all warranties, maintenance manuals, and our 10-year structural guarantee.',
      deliverables: [
        'Comprehensive 120-Point Quality Handover Audit',
        '10-Year Turnkey Structural & Hardware Warranty',
        'Digital As-Built Wiring & Plumbing Vault',
        'Scheduled Bi-Annual Complimentary Checkups'
      ],
      deliverableBadge: 'Ceremonial Handover'
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="process-section"
      className="relative w-full bg-[#0f1117] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      {/* Decorative Grids */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4944e] text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Turnkey Project Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            How We Bring Visions to Life
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-light">
            A frictionless, 5-stage architectural journey engineered to eliminate guesswork, delays, and budget surprises.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Stepper */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 p-1.5 rounded-2xl sm:rounded-full bg-white/[0.04] border border-white/10 mb-10 overflow-x-auto scrollbar-none touch-pan-x">
          {steps.map((st, idx) => {
            const isSelected = activeStep === idx;
            const Icon = st.icon;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(idx)}
                className={`py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl sm:rounded-full flex items-center justify-center gap-2 text-xs font-medium transition-all duration-300 cursor-pointer flex-shrink-0 min-w-[125px] sm:min-w-0 flex-1 ${
                  isSelected
                    ? 'bg-[#c48446] text-black font-semibold shadow-lg shadow-[#c48446]/20 scale-102'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`text-[10px] font-mono ${isSelected ? 'text-black/80 font-bold' : 'text-gray-500'}`}>
                  {st.stepNum}
                </span>
                <span className="truncate">{st.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#141720] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Number, Title, Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-6xl font-bold font-heading text-[#c48446]/40 leading-none">
                {current.stepNum}
              </span>
              <div className="h-8 w-px bg-white/20" />
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs text-[#edd3b4] font-medium tracking-wide">
                  {current.timeline}
                </span>
                <div className="text-[11px] text-gray-400 font-light mt-0.5">
                  Phase Milestone
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-[#edd3b4] font-medium leading-relaxed">
              {current.tagline}
            </p>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onScheduleConsultation}
                className="px-6 py-3 rounded-full bg-white hover:bg-[#c48446] text-black font-semibold text-xs tracking-wide shadow-md transition-all duration-300 cursor-pointer hover:scale-105 flex items-center gap-2"
              >
                <span>Book Phase 1 Discovery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Inclusions & Deliverables Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#c48446]" />
                <span>Verified Deliverables</span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#c48446]/20 text-[#edd3b4] border border-[#c48446]/30 font-medium">
                {current.deliverableBadge}
              </span>
            </div>

            <ul className="space-y-3.5">
              {current.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#c48446] mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400 font-light flex items-center justify-between">
              <span>Zero Cost Overruns Guarantee</span>
              <span className="text-white font-medium">100% On-Time Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
