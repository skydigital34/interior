import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2, Award, Calendar, Layers, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '../../data/portfolioData';

export default function PortfolioSection({ onStartProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    setActiveGalleryIdx(0);
  };

  return (
    <section 
      id="portfolio-section"
      className="relative w-full bg-[#0a0b0e] text-white py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden selection:bg-[#c48446]/30 font-sans"
    >
      {/* Background Lighting Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#c48446]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        
        {/* Top Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c48446]" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#d4944e]">
                Selected Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading leading-tight">
              Architectural Masterworks
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-light max-w-xl">
              From cliffside glass pavilions to restored heritage mansions, explore our portfolio of bespoke living environments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[12.5px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#c48446] text-black shadow-lg shadow-[#c48446]/20 font-semibold scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x2 Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group rounded-3xl overflow-hidden bg-[#13151c] border border-white/10 hover:border-[#c48446]/50 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] cursor-pointer hover:-translate-y-1.5"
            >
              {/* Project Image Frame with Overlays */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151c] via-black/20 to-transparent" />

                {/* Top Badges: Category & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10.5px] font-medium text-white/90">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10.5px] font-mono text-gray-300">
                    {project.year}
                  </span>
                </div>

                {/* Quick Zoom Pill Button on Hover */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Location & Square Footage */}
                  <div className="flex items-center gap-3 text-xs text-[#c48446] mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#edd3b4] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-2 text-xs sm:text-[13px] text-gray-400 font-light line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Award Badge or CTA link */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.award ? (
                    <span className="text-[11px] text-amber-200/90 font-medium flex items-center gap-1 truncate max-w-[80%]">
                      <Award className="w-3.5 h-3.5 text-[#c48446] flex-shrink-0" />
                      <span className="truncate">{project.award}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-gray-400 font-light">
                      Bespoke Turnkey Project
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Case Study In-Depth Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#13151c] text-white rounded-3xl shadow-2xl border border-white/15 flex flex-col scrollbar-none"
          >
            {/* Modal Header Bar with Close */}
            <div className="sticky top-0 z-30 flex items-center justify-between p-5 sm:p-6 bg-[#13151c]/95 backdrop-blur-xl border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-[#c48446] font-semibold">
                  {selectedProject.categoryLabel} Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Gallery on Top, Details Below */}
            <div className="p-5 sm:p-8 space-y-8">
              
              {/* Main Active Image Display */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                <img
                  src={selectedProject.gallery[activeGalleryIdx] || selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnail Selector */}
              {selectedProject.gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIdx(idx)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                        activeGalleryIdx === idx ? 'border-[#c48446] scale-105' : 'border-white/15 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Architectural Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Built-Up Area</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{selectedProject.area}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Timeline</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{selectedProject.timeline}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-medium">Accolade</span>
                  <span className="text-sm font-semibold text-amber-300 mt-0.5 block truncate">{selectedProject.award || 'Turnkey Deliverable'}</span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c48446]">
                  Architectural Concept & Execution
                </h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Material Palette Tags */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                  Curated Material Palette
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((mat, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-200 border border-white/10"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400">
                  <span className="text-white font-medium">Interested in a similar spatial concept?</span> Our studio will prepare a custom spatial study for your site.
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    if (onStartProject) onStartProject(selectedProject);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c48446] hover:bg-[#b0733a] text-black font-semibold text-xs tracking-wide shadow-lg transition-all cursor-pointer hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Commission a Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
