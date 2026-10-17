import React, { useState } from 'react';

// Crisp, lightweight inline brand SVG components
function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function LeftDock({ isPlayingStory = false }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const socialLinks = [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@whitetriad',
      icon: InstagramIcon,
      href: 'https://instagram.com',
      isPrimary: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'White Triad Architects',
      icon: LinkedinIcon,
      href: 'https://linkedin.com',
    },
    {
      id: 'twitter',
      label: 'Twitter / X',
      handle: '@whitetriad_arch',
      icon: TwitterXIcon,
      href: 'https://x.com',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: 'White Triad Studio',
      icon: YoutubeIcon,
      href: 'https://youtube.com',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'White Triad Architects',
      icon: FacebookIcon,
      href: 'https://facebook.com',
    },
  ];

  const primarySocial = socialLinks[0];
  const otherSocials = socialLinks.slice(1);

  return (
    <aside 
      aria-label="Social Media Dock"
      className={`absolute left-4 sm:left-6 lg:left-7 top-[110px] sm:top-[118px] z-30 hidden xl:flex flex-col items-center py-3.5 px-2 rounded-[30px] glass-pill shadow-[0_15px_40px_rgba(0,0,0,0.65)] select-none animate-dock-glide w-auto transition-all duration-700 ease-in-out ${
        isPlayingStory ? '-translate-x-32 opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
      }`}
    >
      {/* Top Primary Social: Instagram Glowing Pill Button */}
      <a
        href={primarySocial.href}
        target="_blank"
        rel="noopener noreferrer"
        title={primarySocial.label}
        onMouseEnter={() => setHoveredItem(primarySocial.id)}
        onMouseLeave={() => setHoveredItem(null)}
        className="relative w-9 h-9 rounded-full bg-[#f4efe6] text-[#121418] flex items-center justify-center shadow-[0_0_15px_rgba(244,239,230,0.35)] hover:scale-110 transition-all duration-300 cursor-pointer group"
      >
        <primarySocial.icon className="w-4 h-4" />

        {/* Tooltip on hover */}
        <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md glass-card text-[11px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
          {primarySocial.label} ({primarySocial.handle})
        </span>
      </a>

      {/* Social Icons Group */}
      <div className="flex flex-col items-center gap-3.5 my-3.5">
        {otherSocials.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="p-1.5 rounded-full text-white/50 hover:text-[#dfb482] hover:scale-115 transition-all duration-200 cursor-pointer relative group"
            >
              <Icon className="w-4 h-4" />

              {/* Tooltip on hover */}
              <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md glass-card text-[11px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Social Follow Community Badge */}
      <div className="flex flex-col items-center pt-1 cursor-pointer group">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30 group-hover:border-[#dfb482] transition-colors p-[1px] shadow-sm">
          <img 
            src="/assets/dock-avatar.jpg" 
            alt="Follow Us" 
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="mt-1.5 text-center flex flex-col items-center leading-[1.1]">
          <span className="text-[9.5px] text-white/90 font-normal tracking-wide group-hover:text-[#dfb482] transition-colors">
            Follow
          </span>
          <span className="text-[9.5px] text-white/50 font-light tracking-wide group-hover:text-white/80 transition-colors">
            Us
          </span>
        </div>
      </div>

      {/* Bottom Subtle Pill Bar */}
      <div className="w-3.5 h-[2.5px] rounded-full bg-white/25 mt-3" />
    </aside>
  );
}
