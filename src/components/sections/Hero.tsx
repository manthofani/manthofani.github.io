import React, { useState } from 'react';
import { ArrowDown, FileText, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate?: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-24 border-b border-white/10 bg-[#0c0c0d] text-white">
      {/* Background Editorial Grid */}
      <div className="absolute inset-0 bg-grid-editorial pointer-events-none opacity-20" />

      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 text-xs font-mono text-white/60 uppercase tracking-widest relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
          <span className="text-white font-bold">[ Engineering ]</span>
          <span className="hidden sm:inline text-white/40">• Batam, ID (SGT)</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/60">Portfolio // 2026</span>
          <span className="text-[#00ff66] font-bold">7+ YRS EXP</span>
        </div>
      </div>

      {/* Hero Section Split Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-white/10 relative z-10">
        
        {/* Title Block (Left 7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00ff66] font-bold block mb-4 sm:mb-6">
              Full-Stack & System Architect
            </span>
            <h1 className="font-syne text-5xl sm:text-7xl lg:text-[88px] font-extrabold uppercase tracking-tight leading-[0.98] py-2">
              TEGAR<br />
              <span className="text-stroke-accent">MANTHO</span><br />
              <span className="text-white">FANI</span>
            </h1>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('projects');
                else {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3.5 bg-[#00ff66] text-[#0c0c0d] font-syne font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              Explore Portfolio Works
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3.5 bg-zinc-900 text-white font-mono text-xs uppercase tracking-wider font-bold border border-white/20 hover:border-[#00ff66] hover:text-[#00ff66] transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#00ff66]" />
              Curriculum Vitae
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3.5 bg-transparent text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-white/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Hero Meta Narrative (Right 5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-light text-white/90 leading-snug">
              Building resilient enterprise architecture and mobile systems with 7+ years of clinical production experience.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 block">
                Primary Narrative
              </span>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                From network infrastructure at Advantis Sentra to high-speed L'Oréal loyalty platforms in Singapore, I focus on systems that survive real-world scale and high-concurrency loads.
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white/50 uppercase">Current Availability</span>
              <span className="text-[#00ff66] font-bold">OPEN FOR ROLES</span>
            </div>
            <p className="text-xs font-mono text-white/70">
              Senior Software Engineer • Enterprise Backend Consulting • System Architecture
            </p>
          </div>
        </div>

      </div>

      {/* Content Grid - Awards Style (3 Columns) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border-b border-white/10 relative z-10">
        
        {/* Cell 1: RF Scanner */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between bg-gradient-to-b from-transparent to-white/[0.02] hover:bg-white/[0.04] transition-colors group">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 block mb-4">
              01 / Logistics
            </span>
            <h3 className="font-syne font-extrabold text-2xl text-white uppercase group-hover:text-[#00ff66] transition-colors">
              RF SCANNER PLATFORM
            </h3>
            <p className="text-sm font-light text-white/70 mt-3 leading-relaxed">
              Industrial logistics hub handling real-time stock opname with Redis caching layer and multi-threaded barcode validation.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50">
            <span>React Native + Java Springboot</span>
            <span className="text-[#00ff66]">Sub-50ms</span>
          </div>
        </div>

        {/* Cell 2: I-Cerdas */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between bg-gradient-to-b from-transparent to-white/[0.02] hover:bg-white/[0.04] transition-colors group">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 block mb-4">
              02 / Institutional
            </span>
            <h3 className="font-syne font-extrabold text-2xl text-white uppercase group-hover:text-[#00ff66] transition-colors">
              I-CERDAS PLATFORM
            </h3>
            <p className="text-sm font-light text-white/70 mt-3 leading-relaxed">
              Cross-platform mobile application optimized for ultra-fast response times using Redis memory caching and streamlined payload design.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/50">
            <span>React Native</span>
            <span className="text-[#00ff66]">-75% DB Load</span>
          </div>
        </div>

        {/* Cell 3: Loyalty Gateway (High-Viz Neon Green Featured Accent) */}
        <div className="p-8 bg-[#00ff66] text-[#0c0c0d] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0c0c0d]/70 font-bold block mb-4">
              03 / Commerce
            </span>
            <h3 className="font-syne font-extrabold text-2xl text-[#0c0c0d] uppercase">
              LOYALTY GATEWAY
            </h3>
            <p className="text-sm font-normal text-[#0c0c0d]/80 mt-3 leading-relaxed">
              Supporting L’Oréal’s CRM and Loyalty platforms across retail networks.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-[#0c0c0d]/20 flex items-center justify-between font-mono text-xs font-bold text-[#0c0c0d]">
            <span>Singapore L'Oréal Platform</span>
            <span>99.99% ACID</span>
          </div>
        </div>

      </div>

      {/* Tech Strip */}
      <div className="bg-white text-[#0c0c0d] py-4 px-6 sm:px-12 relative z-10 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0c0c0d]/60">
            Core Stack //
          </span>
          <div className="flex flex-wrap gap-2">
            {['JAVA', 'SPRING BOOT', 'TYPESCRIPT', 'DOCKER', 'MSSQL'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-extrabold border border-[#0c0c0d]/20 px-2.5 py-1 rounded-sm bg-[#0c0c0d]/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="font-mono text-[11px] font-bold tracking-widest text-[#0c0c0d]/70 uppercase">
          AVAILABLE FOR GLOBAL COMMISSIONS // 2026
        </div>
      </div>

      {/* Experience Bar */}
      <div className="bg-[#141416] py-8 px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-white/10 relative z-10 text-white font-sans">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">Current Role</span>
          <div className="font-bold text-base text-white">Infinite Tech</div>
          <div className="font-syne font-extrabold text-lg text-[#00ff66]">2026—NOW</div>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">Previous Enterprise</span>
          <div className="font-bold text-base text-white">CPR Vision Management (L'Oréal SG)</div>
          <div className="font-syne font-extrabold text-lg text-[#00ff66]">2020—2026</div>
        </div>

        <div className="space-y-1 sm:text-right">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 block">Key Metrics</span>
          <div className="font-bold text-base text-white">24ms REST Targets</div>
          <div className="font-syne font-extrabold text-lg text-[#00ff66]">7+ Years Production</div>
        </div>
      </div>

      {/* Direct CTA Bar */}
      <button
        onClick={() => {
          if (onNavigate) onNavigate('contact');
        }}
        className="w-full bg-[#00ff66] text-[#0c0c0d] py-6 px-6 sm:px-12 flex items-center justify-between font-syne font-extrabold text-xl sm:text-2xl uppercase tracking-wider hover:bg-white transition-all group cursor-pointer border-none text-left"
      >
        <span>CONNECT@TEGAR.ENGINEERING</span>
        <div className="hidden sm:block h-[1px] bg-[#0c0c0d]/20 flex-grow mx-8" />
        <div className="flex items-center gap-2">
          <span>INQUIRE</span>
          <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </button>

    </section>
  );
};

