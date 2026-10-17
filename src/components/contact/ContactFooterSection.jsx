import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronUp, 
  MessageSquare,
  Globe,
  Share2
} from 'lucide-react';
import Logo from '../Logo';

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Chennai',
    projectType: 'Independent Villa',
    area: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // keep submitted state or reset
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact-section"
      className="relative w-full bg-[#08090c] text-white pt-20 sm:pt-28 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c48446]/30 to-transparent" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Main 2-Column: Left Studio Info & Right Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
          
          {/* Left Column: Studios, Direct Reach & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c48446]" />
                <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4944e]">
                  Connect With Our Studios
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
                Let's Shape Your Next Horizon
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Whether you possess vacant land awaiting an architectural masterplan, or a luxury shell requiring bespoke turnkey interiors, our principals are ready to consult.
              </p>
            </div>

            {/* Flagship Studios Cards */}
            <div className="space-y-4">
              
              {/* Chennai Flagship Studio */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c48446]/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c48446]" />
                    Chennai Flagship Studio
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                    HQ
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  No. 42, Kotturpuram High Road, Kotturpuram, Chennai 600085
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-4 text-xs text-gray-300">
                  <a href="tel:+914448920012" className="hover:text-[#c48446] transition-colors flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#c48446]" />
                    +91 44 4892 0012
                  </a>
                  <a href="mailto:chennai@whitetriad.com" className="hover:text-[#c48446] transition-colors flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#c48446]" />
                    chennai@whitetriad.com
                  </a>
                </div>
              </div>

              {/* Bengaluru Atelier */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c48446]/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold font-heading text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c48446]" />
                    Bengaluru Design Atelier
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                    Studio
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-4 text-xs text-gray-300">
                  <a href="tel:+918041207789" className="hover:text-[#c48446] transition-colors flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#c48446]" />
                    +91 80 4120 7789
                  </a>
                  <a href="mailto:blr@whitetriad.com" className="hover:text-[#c48446] transition-colors flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#c48446]" />
                    blr@whitetriad.com
                  </a>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Quick Connect Button */}
            <a
              href="https://wa.me/919840012345?text=Hello%20White%20Triad%20Team%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25d366]/15 hover:bg-[#25d366]/25 border border-[#25d366]/30 text-[#25d366] text-xs font-semibold tracking-wide transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp with Principal Architect</span>
            </a>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#13151c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            
            {isSubmitted ? (
              <div className="p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c48446]/20 border border-[#c48446] text-[#c48446] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-gray-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our Principal Architect will review your project requirements and connect within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-medium transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Request a Private Design Consultation
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    Fill in your details below for a comprehensive 3D spatial review and site evaluation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anandha Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Project Location / City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c24] border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white transition-colors"
                    >
                      <option value="Chennai">Chennai</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Kochi">Kochi</option>
                      <option value="Pan India">Other Location</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Type of Space
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1c24] border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white transition-colors"
                    >
                      <option value="Independent Villa">Independent Villa / Bungalow</option>
                      <option value="Luxury Apartment">Luxury Apartment (3BHK / 4BHK)</option>
                      <option value="Penthouse">Sky Penthouse / Duplex</option>
                      <option value="Heritage Restoration">Heritage Restoration</option>
                      <option value="Commercial Atelier">Commercial / Hospitality Space</option>
                    </select>
                  </div>

                  {/* Approximate Area */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                      Estimated Area (Sq.Ft)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4,500 sq.ft"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1.5">
                    Project Vision / Special Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your timeline, design preferences (Modern, Minimalist, etc.), or specific site conditions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#c48446] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#c48446] hover:bg-[#b0733a] text-black font-semibold text-xs tracking-wide shadow-xl transition-all cursor-pointer hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <span>Schedule My Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-gray-400 text-center font-light">
                  Strictly confidential. We respect your privacy and never share contact details.
                </p>
              </form>
            )}

          </div>

        </div>

        {/* Footer Bottom Bar with Logo, Links & Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Logo />
            <span className="hidden sm:inline-block w-px h-6 bg-white/20" />
            <p className="text-xs text-gray-400 font-light">
              Architecture • Interior Artistry • Turnkey Precision
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white text-gray-400 hover:text-black flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white text-gray-400 hover:text-black flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://whitetriad.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Global Node"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white text-gray-400 hover:text-black flex items-center justify-center transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Board"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white text-gray-400 hover:text-black flex items-center justify-center transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="w-9 h-9 rounded-full bg-[#c48446] text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ml-3 shadow-md"
            >
              <ChevronUp className="w-4 h-4 stroke-[2.4]" />
            </button>
          </div>

        </div>

        <div className="mt-8 text-center text-[11px] text-gray-500 font-light">
          © {new Date().getFullYear()} White Triad Architects & Luxora Studios LLP. All rights reserved. Registered with Council of Architecture (COA) & Indian Institute of Architects (IIA).
        </div>

      </div>
    </footer>
  );
}
