import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Code2, Terminal } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MagneticButton } from '../ui/MagneticButton';
import { profileData } from '../../data/profile';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (pageId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'home', onNavigate, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0c0d]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-[#0c0c0d] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 cursor-pointer text-left border-none bg-transparent p-0"
        >
          <div className="w-8 h-8 rounded-none bg-[#00ff66] text-[#0c0c0d] font-syne font-extrabold text-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            TM
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-extrabold text-sm uppercase tracking-wider text-white group-hover:text-[#00ff66] transition-colors">
              TEGAR MANTHOFANI
            </span>
            <span className="font-mono text-[9px] text-white/50 tracking-[0.2em] uppercase">
              ARCHITECT // 2026
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#141416] p-1 rounded-sm border border-white/10">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#0c0c0d] font-bold bg-[#00ff66] rounded-2xs'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-[#00ff66] flex items-center gap-1.5 border border-white/15 rounded-2xs hover:border-[#00ff66] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#00ff66]" />
            Resume
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-1.5 bg-[#00ff66] text-[#0c0c0d] font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
          >
            Inquire
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-2xs bg-zinc-900 text-white border border-white/20"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#0c0c0d] border-b border-white/20 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
              <span>NAVIGATION PAGES</span>
              <span className="text-[#00ff66] font-bold">● SENIOR DEV</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-syne font-extrabold uppercase py-1 flex items-center justify-between text-left cursor-pointer ${
                  activePage === item.id ? 'text-[#00ff66]' : 'text-white hover:text-[#00ff66]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="w-full py-2.5 px-4 text-xs font-mono uppercase font-bold rounded-2xs border border-white/20 text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#00ff66]" />
                View Curriculum Vitae
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 px-4 text-xs font-syne font-extrabold uppercase tracking-wider text-[#0c0c0d] bg-[#00ff66] flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire / Connect
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
