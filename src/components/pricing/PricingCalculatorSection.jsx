import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Shield, Download, CheckCircle2 } from 'lucide-react';

export default function PricingCalculatorSection({ onScheduleConsultation }) {
  const [propertyType, setPropertyType] = useState('villa');
  const [area, setArea] = useState(3500);
  const [finishTier, setFinishTier] = useState('luxury');

  const propertyTypes = [
    { id: 'apartment', label: 'Apartment / Flat', baseMultiplier: 1.0 },
    { id: 'villa', label: 'Independent Villa', baseMultiplier: 1.1 },
    { id: 'penthouse', label: 'Sky Penthouse', baseMultiplier: 1.2 },
    { id: 'commercial', label: 'Boutique Office', baseMultiplier: 0.95 },
  ];

  const tiers = [
    {
      id: 'essential',
      name: 'Essential Premium',
      rate: 1650,
      description: 'Refined modern aesthetics with high-durability materials.',
      highlights: ['BWP Marine Grade Plywood', 'Soft-Close Hardware', 'Concealed LED Cove Ceilings', 'Premium Matte Acrylics'],
    },
    {
      id: 'luxury',
      name: 'Luxury Signature',
      rate: 2450,
      popular: true,
      description: 'Our most sought-after tier. Fluted veneers, quartz, and designer lighting.',
      highlights: ['Natural Teak & Walnut Veneers', 'Blum Austria Push-to-Open', 'Italian Large-Format Porcelain', 'Magnetic Track Smart Lighting'],
    },
    {
      id: 'atelier',
      name: 'Bespoke Atelier',
      rate: 3650,
      description: 'High-couture bespoke architecture, imported Italian marble & home automation.',
      highlights: ['Imported Italian Marble Floors', 'Solid Burma Teak Millwork', 'Tinted Glass Walk-In Closets', 'Integrated Touchless Smart Automation'],
    },
  ];

  const selectedTierObj = tiers.find((t) => t.id === finishTier) || tiers[1];
  const selectedTypeObj = propertyTypes.find((p) => p.id === propertyType) || propertyTypes[1];

  const totalEstimate = Math.round((area * selectedTierObj.rate * selectedTypeObj.baseMultiplier) / 100000) / 10;
  const minEstimate = Math.round(totalEstimate * 0.95 * 10) / 10;
  const maxEstimate = Math.round(totalEstimate * 1.08 * 10) / 10;

  const estimatedWeeks = area < 2500 ? '6 - 8 Weeks' : area < 5000 ? '9 - 12 Weeks' : '14 - 18 Weeks';

  return (
    <section 
      id="pricing-section"
      className="relative w-full bg-[#0a0b0e] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4944e] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            Transparent Turnkey Pricing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-light">
            Estimate your investment with complete transparency. Zero hidden contingencies, locked milestone contracts.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#13151c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-3">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {propertyTypes.map((pt) => {
                  const isSelected = propertyType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setPropertyType(pt.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#c48446] text-black border-[#c48446] font-semibold shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                      }`}
                    >
                      {pt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Carpet Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  2. Built-Up Carpet Area (Sq.Ft)
                </label>
                <div className="text-base sm:text-lg font-bold font-heading text-[#edd3b4]">
                  {area.toLocaleString()} sq.ft
                </div>
              </div>
              <input
                type="range"
                min="1200"
                max="10000"
                step="100"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#c48446] py-3"
              />
              <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1.5">
                <span>1,200 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>10,000+ sq.ft</span>
              </div>
            </div>

            {/* Step 3: Finish Tier Selector */}
            <div>
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-3">
                3. Choose Interior Specification Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((tier) => {
                  const isSelected = finishTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setFinishTier(tier.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-white/10 border-[#c48446] shadow-lg shadow-[#c48446]/10'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#c48446] text-black text-[9.5px] font-bold uppercase tracking-wider shadow">
                          Popular
                        </span>
                      )}
                      <div>
                        <h4 className="text-sm font-bold font-heading text-white">
                          {tier.name}
                        </h4>
                        <div className="text-xs text-[#c48446] font-semibold mt-1">
                          ₹{tier.rate.toLocaleString()} / sq.ft
                        </div>
                        <p className="text-[11px] text-gray-400 font-light mt-1.5 leading-snug">
                          {tier.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/10 space-y-1">
                        {tier.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="text-[10.5px] text-gray-300 flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#c48446] flex-shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Estimate Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#c48446] block">
                Preliminary Turnkey Estimate
              </span>
              
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight">
                  ₹{minEstimate} – ₹{maxEstimate}
                </span>
                <span className="text-base font-semibold text-[#edd3b4]">
                  Lakhs*
                </span>
              </div>

              <div className="mt-2 text-xs text-gray-400 font-light">
                *All-inclusive estimate covering 3D renders, materials, modular fitouts, MEP, civil work & warranty.
              </div>

              {/* Timeline & Scope Breakdown */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] uppercase text-gray-400 block font-medium">Turnkey Timeline</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">{estimatedWeeks}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[10px] uppercase text-gray-400 block font-medium">Warranty</span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">10-Year Guarantee</span>
                </div>
              </div>

              {/* Package Inclusions Checklist */}
              <div className="mt-5 space-y-2">
                <span className="text-xs uppercase tracking-wider text-gray-300 font-semibold block">
                  Included in This Estimate:
                </span>
                {selectedTierObj.highlights.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c48446] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-5 border-t border-white/10 space-y-3">
              <button
                onClick={onScheduleConsultation}
                className="w-full py-3.5 px-6 rounded-full bg-[#c48446] hover:bg-[#b0733a] text-black font-semibold text-xs tracking-wide shadow-xl transition-all cursor-pointer hover:scale-102 flex items-center justify-center gap-2"
              >
                <span>Book Site Survey & Exact BOQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] text-center text-gray-400 font-light">
                No obligations. Free on-site spatial measurement & 3D layout study.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
