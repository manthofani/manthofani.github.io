import React from 'react';
import { profileData } from '../../data/profile';
import { ArrowUp, MapPin, ShieldCheck, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleTop = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { pageId: 'about', label: '01 / Executive Narrative' },
    { pageId: 'experience', label: '02 / Curriculum Vitae' },
    { pageId: 'projects', label: '03 / Selected Works' },
    { pageId: 'architecture', label: '05 / System Architecture' },
    { pageId: 'contact', label: '07 / Correspondence' },
  ];

  return (
    <footer className="bg-[#0c0c0d] text-white border-t border-white/10 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00ff66] text-[#0c0c0d] font-syne font-extrabold text-sm flex items-center justify-center">
                TM
              </div>
              <div>
                <h3 className="font-syne text-2xl font-extrabold uppercase text-white">
                  TEGAR MANTHOFANI
                </h3>
                <p className="text-xs font-mono text-[#00ff66] font-bold uppercase tracking-wider">
                  Senior Software Developer | Full Stack Engineer
                </p>
              </div>
            </div>
            
            <p className="text-base text-white/70 max-w-md leading-relaxed font-sans font-light">
              Specialized in production backend services, cross-platform mobile apps, enterprise e-commerce integrations, and high-availability database architecture.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-white/50">
              <span className="inline-block w-2 h-2 bg-[#00ff66] animate-pulse" />
              <span className="uppercase">{profileData.statusText}</span>
            </div>
          </div>

          {/* Credentials */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs text-white/70">
            <h4 className="font-syne text-base font-extrabold uppercase text-[#00ff66] mb-2">
              LOCATION & REACH
            </h4>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
              <span>Batam, Indonesia</span>
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
              <span>Singapore Regional Enterprise</span>
            </p>
            <p className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#00ff66] shrink-0" />
              <span>7+ Years Production Experience</span>
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-syne text-base font-extrabold uppercase text-[#00ff66] mb-2">
              DIRECTORY INDEX
            </h4>
            <ul className="space-y-2 uppercase text-white/70">
              {navLinks.map((link) => (
                <li key={link.pageId}>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate(link.pageId);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="hover:text-[#00ff66] transition-colors cursor-pointer text-left bg-transparent p-0 border-none uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© {currentYear} TEGAR MANTHOFANI. BRUTALIST EDITION.</p>
          
          <div className="flex items-center gap-6">
            <span>REACT 19 • TYPESCRIPT • MULTI-PAGE SLIDE EDITION</span>
            <button
              onClick={handleTop}
              className="px-3 py-1.5 bg-[#00ff66] text-[#0c0c0d] hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer font-bold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px] font-extrabold uppercase">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
