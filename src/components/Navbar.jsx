import React, { useState } from 'react';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenSearch, onOpenStartProject, onNavigate }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const handleLinkClick = (link) => {
    setActiveTab(link);
    if (onNavigate) onNavigate(link);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 pt-4 sm:pt-6 pb-2 flex items-center justify-between relative z-40">
      {/* Brand Logo with Blueprint Slide & Rotation */}
      <div className="animate-logo-draw">
        <Logo />
      </div>

      {/* Center Floating Pill Navigation with Drop & Bloom */}
      <nav className="hidden md:flex items-center p-1 rounded-full glass-pill animate-nav-drop">
        {navLinks.map((link) => {
          const isActive = activeTab === link;
          return (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className={`px-5 py-2 rounded-full text-[13px] tracking-wide font-normal transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white/[0.12] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] font-medium backdrop-blur-md'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {link}
            </button>
          );
        })}
      </nav>

      {/* Right Controls with Elastic Slide */}
      <div className="flex items-center gap-3 animate-top-right">
        {/* Search Circular Button */}
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 cursor-pointer group"
        >
          <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
        </button>

        {/* Start a Project Pill CTA */}
        <button
          onClick={onOpenStartProject}
          className="hidden sm:flex items-center pl-5 pr-1.5 py-1.5 rounded-full glass-button text-[13px] tracking-wide text-white group cursor-pointer"
        >
          <span className="mr-3 font-medium">Start a Project</span>
          <div className="w-8 h-8 rounded-full bg-[#f6efe6] text-[#121418] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </div>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white z-50 cursor-pointer transition-all"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#dfb482]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Full-Screen Architectural Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#08090c]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          {/* Top Row: Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Large Typography */}
          <div className="flex flex-col gap-3 my-auto py-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#dfb482] font-semibold">
              Navigation
            </span>
            {navLinks.map((link, idx) => {
              const isActive = activeTab === link;
              return (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`w-full text-left py-3.5 px-4 rounded-2xl text-lg font-heading tracking-wide transition-all duration-300 flex items-center justify-between ${
                    isActive 
                      ? 'bg-white/15 text-white font-semibold shadow-inner border border-white/10' 
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#dfb482]/70">0{idx + 1}</span>
                    <span>{link}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#dfb482]' : 'opacity-30'}`} />
                </button>
              );
            })}
          </div>

          {/* Bottom Actions: CTA & Quick Contact */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartProject();
              }}
              className="w-full py-4 rounded-full bg-[#dfb482] hover:bg-[#cfa572] text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-white/40 pt-2 px-1">
              <span>Chennai • Bengaluru</span>
              <a href="tel:+914448920012" className="text-[#dfb482]/80 hover:text-[#dfb482]">
                +91 44 4892 0012
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
