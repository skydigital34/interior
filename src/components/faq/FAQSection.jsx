import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

export default function FAQSection({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is the synergy between White Triad Architects and Luxora Studios?',
      a: 'White Triad Architects directs master architecture, structural engineering, facade design, and environmental compliance. Luxora Studios is our dedicated interior atelier that designs and manufactures bespoke modular furniture, acoustic wall paneling, false ceiling coves, and curates turnkey material palettes. You get a single, seamless design-and-build team with zero finger-pointing between architects and interior contractors.',
    },
    {
      q: 'How does the 10-Year Turnkey Warranty work?',
      a: 'Every White Triad & Luxora turnkey project comes with a signed 10-Year Warranty Certificate. This covers structural integrity, joinery adhesion, waterproofing membranes, and drawer/hinge mechanisms (backed by official lifetime warranties from Blum Austria and Hettich Germany). Furthermore, we provide bi-annual complimentary quality checkups for the first 3 years.',
    },
    {
      q: 'Can we experience our space in 3D & VR before making a financial commitment to materials?',
      a: 'Yes. In Phase 2 of our process, we build a 1:1 photorealistic digital twin of your home. You will receive 4K renders and an interactive VR walkthrough showing daylight and evening lighting scenes. Material procurement and millwork production only begin after you have physically touched our curated material sample board and formally signed off on the 3D renders.',
    },
    {
      q: 'What are your payment milestones and how do you prevent cost overruns?',
      a: 'We work on a fixed-price itemized BOQ (Bill of Quantities). Once signed, we guarantee zero cost escalation. Payments are divided into 5 progressive milestones tied strictly to on-site deliverables: 10% Initial Discovery & 3D, 25% Production & Sourcing, 30% First Fix & MEP, 25% Joinery Assembly, and 10% upon final white-glove handover.',
    },
    {
      q: 'Do you design and execute projects outside Chennai and Bengaluru?',
      a: 'Yes. Our flagship studios are located in Kotturpuram (Chennai) and Indiranagar (Bengaluru). We regularly execute luxury villas, hillside estates, and penthouses across Coimbatore, Hyderabad, Ooty, Kochi, and Goa, with dedicated on-site project engineers deployed for the duration of the project.',
    },
  ];

  return (
    <section 
      id="faq-section"
      className="relative w-full bg-[#0f1117] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1080px] mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4944e] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-light">
            Clear, honest answers about our turnkey methodology, contracts, and craftsmanship standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#151822] border-[#c48446]/40 shadow-xl' 
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold font-heading text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-[#c48446] text-black rotate-180' : 'bg-white/10 text-gray-300'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#c48446]/20 border border-[#c48446]/30 flex items-center justify-center text-[#c48446] flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white font-heading">
                Have a specialized architectural requirement?
              </h4>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Our principal architects are available for a confidential 1-on-1 project discussion.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white hover:bg-[#c48446] text-black font-semibold text-xs tracking-wide transition-all cursor-pointer whitespace-nowrap"
          >
            Ask Our Architects
          </button>
        </div>

      </div>
    </section>
  );
}
