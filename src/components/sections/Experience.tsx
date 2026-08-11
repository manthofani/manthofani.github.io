import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Calendar, MapPin, ChevronDown, CheckCircle2, Filter, RotateCcw } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string>(experienceData[0].id);

  const careerSteps = [
    { expId: "exp-advantis", title: "Senior IT Support", company: "Advantis Sentra", period: "2016-2018", focus: "Infrastructure & Network" },
    { expId: "exp-freelance-it", title: "IT & Network Support", company: "Freelance", period: "2018-2019", focus: "Synology NAS & Security" },
    { expId: "exp-boon-software", title: "Software Developer", company: "Boon Software (SG)", period: "2018-2020", focus: "WMS, OMS, LMS & Reports" },
    { expId: "exp-cpr-vision", title: "Software Developer", company: "CPR Vision (SG)", period: "2020-2026", focus: "L'Oréal Regional Platforms" },
    { expId: "exp-imtek", title: "Independent Developer", company: "Imtek Media Data", period: "2020-2025", focus: "Full-Stack & Mobile" },
    { expId: "exp-infinite-tech", title: "Senior Software Developer", company: "Infinite Tech", period: "2026-Present", focus: "RF Scanner & WMS Core" },
  ];

  const handleStepClick = (expId: string) => {
    if (selectedExpId === expId) {
      // Toggle off to show all
      setSelectedExpId('all');
    } else {
      setSelectedExpId(expId);
      setExpandedId(expId);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? '' : id);
  };

  const filteredExperiences = selectedExpId === 'all'
    ? experienceData
    : experienceData.filter(exp => exp.id === selectedExpId);

  return (
    <section id="experience" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="02 / CURRICULUM VITAE"
          title={
            <>
              Battle-tested leadership in <span className="text-stroke-accent">enterprise</span> & <span className="text-stroke">industrial</span> systems.
            </>
          }
          description="A progressive career trajectory from network infrastructure and IT operations into senior-level software development and system architecture."
        />

        {/* Career Chronology Overview - Interactive Filter Boxes */}
        <div className="mb-12 p-6 sm:p-8 bg-[#141416] border border-white/10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#00ff66]" />
                CHRONOLOGICAL RECORD
              </span>
              <span className="text-white/40 text-xs hidden sm:inline">• CLICK BOX TO FILTER VIEW</span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              {selectedExpId !== 'all' && (
                <button
                  onClick={() => setSelectedExpId('all')}
                  className="px-3 py-1 bg-[#00ff66] text-[#0c0c0d] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-white cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  SHOW ALL ({experienceData.length})
                </button>
              )}
              <span className="text-white/50">2016 — PRESENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {careerSteps.map((step, idx) => {
              const isSelected = selectedExpId === step.expId;
              const isShowingAll = selectedExpId === 'all';

              return (
                <button
                  key={step.expId}
                  onClick={() => handleStepClick(step.expId)}
                  className={`p-3.5 sm:p-4 border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer group ${
                    isSelected
                      ? 'bg-[#00ff66] text-[#0c0c0d] border-[#00ff66] shadow-lg scale-[1.02] ring-2 ring-[#00ff66]/50'
                      : isShowingAll
                        ? 'bg-[#0c0c0d] border-white/10 text-white hover:border-[#00ff66] hover:bg-white/5'
                        : 'bg-[#0c0c0d]/60 border-white/5 text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className={`font-mono text-[10px] tracking-wider font-bold mb-1.5 uppercase ${
                      isSelected ? 'text-[#0c0c0d]/80' : 'text-[#00ff66]'
                    }`}>
                      0{idx + 1} // {step.period}
                    </div>
                    <h4 className={`font-syne text-xs font-extrabold uppercase leading-snug tracking-tight mb-1 break-words ${
                      isSelected ? 'text-[#0c0c0d]' : 'text-white group-hover:text-[#00ff66]'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-[11px] font-sans font-medium truncate ${
                      isSelected ? 'text-[#0c0c0d]/90' : 'text-white/70'
                    }`} title={step.company}>
                      {step.company}
                    </p>
                  </div>
                  
                  <div className={`mt-2.5 pt-2 border-t flex items-center justify-between font-mono text-[10px] ${
                    isSelected ? 'border-[#0c0c0d]/20 text-[#0c0c0d]/80' : 'border-white/10 text-white/60'
                  }`}>
                    <span className="truncate pr-1">{step.focus}</span>
                    <span className={`text-[9px] font-bold px-1 py-0.5 uppercase ${
                      isSelected ? 'bg-[#0c0c0d] text-[#00ff66]' : 'text-white/40 group-hover:text-[#00ff66]'
                    }`}>
                      {isSelected ? 'ACTIVE' : 'VIEW'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter State Banner if single experience filtered */}
        {selectedExpId !== 'all' && (
          <div className="mb-6 p-4 bg-[#141416] border-l-4 border-[#00ff66] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#00ff66] font-bold">FILTERED VIEW:</span>
              <span className="text-white uppercase">
                {experienceData.find(e => e.id === selectedExpId)?.role} @ {experienceData.find(e => e.id === selectedExpId)?.company}
              </span>
            </div>
            <button
              onClick={() => setSelectedExpId('all')}
              className="text-[#00ff66] hover:underline font-bold uppercase tracking-wider cursor-pointer"
            >
              RESET FILTER (SHOW ALL 6)
            </button>
          </div>
        )}

        {/* Detailed Experience Journal Entries */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id || filteredExperiences.length === 1;
            return (
              <div
                key={exp.id}
                className={`border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-[#141416] border-[#00ff66]'
                    : 'bg-[#0c0c0d] border-white/10 hover:border-white/30'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-white">
                        {exp.role}
                      </h3>
                      <span className="text-white/40 font-mono text-sm">@</span>
                      <span className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-[#00ff66]">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-white/60">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00ff66]" />
                        {exp.period}
                      </span>
                      <span>—</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#00ff66]" />
                        {exp.location}
                      </span>
                      {exp.clientContext && (
                        <>
                          <span>—</span>
                          <span className="text-[#0c0c0d] font-mono font-bold bg-[#00ff66] px-2.5 py-0.5 text-[11px] uppercase">
                            {exp.clientContext}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 md:pt-0">
                    <span className="font-mono text-xs text-[#00ff66] uppercase tracking-widest font-bold">
                      {isExpanded ? 'Collapse' : 'Inspect Details'}
                    </span>
                    <div className={`p-2 border border-white/20 transition-transform duration-200 ${isExpanded ? 'rotate-180 bg-[#00ff66] text-[#0c0c0d]' : 'bg-zinc-800 text-white'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Brief Summary */}
                <div className="px-6 sm:px-8 pb-4 text-base text-white/80 font-sans font-light leading-relaxed max-w-4xl">
                  {exp.summary}
                </div>

                {/* Tech Pills Bar */}
                <div className="px-6 sm:px-8 pb-6 flex flex-wrap gap-2 border-b border-white/10">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono font-bold rounded-2xs bg-zinc-800 text-[#00ff66] border border-white/10 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#0c0c0d] space-y-8 animate-in fade-in duration-200 border-t border-white/10">
                    
                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> KEY DELIVERABLES & IMPACT
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80 font-sans font-light">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="p-4 bg-[#141416] border border-white/10 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-[#00ff66] mt-2 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Scope Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="p-5 bg-[#141416] border border-white/10">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00ff66] block mb-2">ARCHITECTURAL SCOPE</span>
                        <p className="text-sm text-white/70 leading-relaxed font-sans font-light">{exp.expandedDetails.systemScope}</p>
                      </div>

                      {exp.expandedDetails.observabilityAndReliability && (
                        <div className="p-5 bg-[#141416] border border-white/10">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00ff66] block mb-2">OBSERVABILITY & RELIABILITY</span>
                          <p className="text-sm text-white/70 leading-relaxed font-sans font-light">{exp.expandedDetails.observabilityAndReliability}</p>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
