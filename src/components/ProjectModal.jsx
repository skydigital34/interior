import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential Villa',
    location: '',
    budget: '$150k - $300k',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-2xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[92dvh] overflow-y-auto scrollbar-none rounded-[32px] p-6 sm:p-8 bg-[#12141c]/95 border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 text-[#dfb482] mb-4 animate-bounce" />
            <h3 className="text-2xl font-heading text-white font-medium">Inquiry Received</h3>
            <p className="text-sm text-white/60 mt-2 max-w-md">
              Thank you for reaching out to White Triad Architects. Our design principal will contact you within 24 hours to arrange an initial architectural consultation.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#dfb482] font-semibold">
                START A PROJECT
              </span>
              <h3 className="text-2xl font-heading text-white font-medium mt-1">
                Let's Design Your Vision
              </h3>
              <p className="text-xs text-white/50 mt-1">
                Tell us about your upcoming space, timeline, and aspirations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/60 mb-1.5 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Iyer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#dfb482] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5 font-medium">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#dfb482] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/60 mb-1.5 font-medium">Project Scope</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1d26] border border-white/10 text-white text-sm focus:outline-none focus:border-[#dfb482] transition"
                  >
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Penthouse & Luxury Interior">Penthouse & Luxury Interior</option>
                    <option value="Commercial Space">Commercial Architecture</option>
                    <option value="Boutique Hospitality">Boutique Hospitality</option>
                    <option value="Workspace Design">Workspace Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5 font-medium">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#dfb482] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1.5 font-medium">Estimated Budget Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  {['$50k - $150k', '$150k - $300k', '$300k+'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition cursor-pointer ${
                        formData.budget === tier
                          ? 'bg-[#dfb482]/20 border-[#dfb482] text-white'
                          : 'bg-white/[0.04] border-white/10 text-white/60 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-full bg-[#dfb482] hover:bg-[#ebd0b0] text-black font-semibold text-sm flex items-center justify-center gap-2 transition duration-300 shadow-[0_10px_30px_rgba(223,180,130,0.35)] cursor-pointer"
              >
                Submit Consultation Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
