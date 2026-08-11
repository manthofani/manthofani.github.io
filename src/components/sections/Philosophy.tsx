import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldAlert, Stethoscope, Activity, Zap, GitBranch, Sparkles } from 'lucide-react';
import { philosophyPrinciples } from '../../data/philosophy';

export const Philosophy: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    Stethoscope,
    Activity,
    Zap,
    GitBranch,
    Sparkles
  };

  return (
    <section id="philosophy" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="06 / ENGINEERING DISCIPLINE"
          title={
            <>
              Guiding principles behind <span className="text-stroke-accent">reliable</span> production software.
            </>
          }
          description="A pragmatic engineering philosophy forged through 7+ years of building production applications, diagnosing real outages, and managing critical software lifecycles."
        />

        {/* Featured Pull Quote Manifesto */}
        <div className="mb-16 p-10 sm:p-14 bg-[#141416] border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <span className="font-syne text-9xl text-white/5 absolute top-2 left-6 select-none leading-none font-extrabold">“</span>
          <blockquote className="max-w-4xl mx-auto font-syne text-xl sm:text-3xl font-extrabold uppercase text-white leading-snug relative z-10">
            Software engineering is not merely writing code; it is <span className="text-stroke">managing complexity</span>, anticipating failure modes, and ensuring continuous <span className="text-stroke-accent">predictability</span> in production.
          </blockquote>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#00ff66] font-bold">
            — TEGAR MANTHOFANI, CORE PHILOSOPHY
          </p>
        </div>

        {/* 6 Core Principles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyPrinciples.map((principle, index) => {
            const Icon = iconMap[principle.iconName] || Sparkles;
            return (
              <div
                key={principle.id}
                className="p-8 sm:p-10 bg-[#141416] border border-white/10 shadow-2xl hover:border-[#00ff66] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <div className="p-3 bg-zinc-800 text-[#00ff66]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#00ff66]">
                      PRINCIPLE 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-syne text-2xl font-extrabold uppercase text-white mb-2">
                    {principle.title}
                  </h3>

                  <p className="font-mono text-xs text-[#00ff66] font-bold uppercase tracking-wider mb-4">
                    {principle.tagline}
                  </p>

                  <p className="text-sm text-white/70 font-sans font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>DISCIPLINE</span>
                  <span className="text-[#00ff66] font-bold uppercase">IN PRACTICE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
