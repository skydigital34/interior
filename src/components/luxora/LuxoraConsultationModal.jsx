import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, User, Mail, Phone, Home } from 'lucide-react';

export default function LuxoraConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Chennai',
    scope: 'Full Home Interior',
    date: '2026-10-25',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92dvh] overflow-y-auto scrollbar-none rounded-[32px] p-6 sm:p-8 bg-white border border-gray-100 shadow-[0_30px_90px_rgba(0,0,0,0.2)] text-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle className="w-16 h-16 text-[#c48446] mb-4 animate-bounce" />
            <h3 className="text-2xl font-heading font-semibold text-gray-900">
              Consultation Booked!
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Our lead consultant, Ananya Rao, will reach out to you within 2 hours to confirm your personalized design session.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#c48446] font-bold">
                LUXORA INTERIOR STUDIO
              </span>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mt-1">
                Book a Free Consultation
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Meet our senior design architects for tailored plans and 3D estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#c48446]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#c48446]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Location</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#c48446] bg-white"
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pan India">Other (Pan India)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-700 font-medium mb-1">Design Scope</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#c48446] bg-white"
                  >
                    <option value="Full Home Interior">Full Home Interior</option>
                    <option value="Living & Dining">Living & Dining</option>
                    <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                    <option value="Commercial & Office">Commercial & Office</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-full bg-[#181a1d] hover:bg-black text-white font-medium text-sm flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
              >
                Confirm Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
