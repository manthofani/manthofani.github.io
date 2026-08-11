import React, { useState } from 'react';
import { X, Download, Copy, Check, Briefcase, GraduationCap, Code, Globe, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';
import { experienceData } from '../../data/experience';
import { skillsData } from '../../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const markdownResume = `
# ${profileData.name}
${profileData.title} | ${profileData.location}
Email: ${profileData.email} | Context: ${profileData.workExperienceContext}

## Summary
${profileData.roleDescription}

## Experience
${experienceData.map(exp => `
### ${exp.role} - ${exp.company} (${exp.period})
Location: ${exp.location} ${exp.clientContext ? `| Client: ${exp.clientContext}` : ''}
${exp.summary}
Key Achievements:
${exp.achievements.map(a => `- ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

## Key Skills
${skillsData.map(cat => `
### ${cat.categoryName}
${cat.skills.map(s => `- ${s.name} (${s.level})`).join(', ')}
`).join('\n')}

## Education
${profileData.education.map(e => `- ${e.degree}, ${e.institution} (${e.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(markdownResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-white/20 shadow-2xl overflow-hidden flex flex-col my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-zinc-800 text-[#00ff66]">
              <Briefcase className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-syne font-extrabold text-lg uppercase text-white">
                Curriculum Vitae — Tegar Manthofani
              </h3>
              <p className="text-xs text-[#00ff66] font-mono font-bold uppercase">
                Senior Software Developer & Full Stack Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-mono font-bold uppercase bg-zinc-800 border border-white/10 text-white hover:border-[#00ff66] hover:text-[#00ff66] transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied MD' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono font-extrabold uppercase bg-[#00ff66] text-[#0c0c0d] hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-white/50 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-white/90">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-syne text-3xl font-extrabold uppercase tracking-tight text-white">
                TEGAR MANTHOFANI
              </h1>
              <p className="font-mono text-sm font-bold text-[#00ff66] uppercase mt-1">
                Senior Software Developer | Full Stack Engineer
              </p>
              <p className="text-xs text-white/60 mt-1 flex items-center gap-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#00ff66]" /> Batam, Indonesia • Singapore Work Experience
              </p>
            </div>
            <div className="text-xs font-mono space-y-1 text-white/70">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00ff66]" /> {profileData.email}
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#00ff66]" /> English & Indonesian
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00ff66]" /> Executive Profile
            </h2>
            <p className="text-sm leading-relaxed text-white/80 bg-[#0c0c0d] p-4 border border-white/10">
              Senior Software Developer with 7+ years of experience architecting and scaling full-stack, backend, and mobile applications using Java, Spring Boot, React.js, React Native, and TypeScript. Extensive background delivering enterprise systems for regional Asia-Pacific clients, including L'Oréal brand digital platforms in Singapore. Proven expertise in API design, microservices, POS e-commerce integrations, database optimization, Docker CI/CD, and production observability.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#00ff66]" /> Work Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#00ff66] pl-4 py-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-syne font-extrabold text-base uppercase text-white">
                      {exp.role} — <span className="text-[#00ff66]">{exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-white/50 uppercase">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  {exp.clientContext && (
                    <p className="text-xs font-mono text-white/50 mt-0.5 uppercase">
                      Client Context: {exp.clientContext}
                    </p>
                  )}
                  <p className="text-xs text-white/80 mt-2 font-light">
                    {exp.summary}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-white/70 list-disc list-inside">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-zinc-800 text-[#00ff66] border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#00ff66]" /> Education
              </h2>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <p className="font-bold text-white uppercase">{edu.degree}</p>
                  <p className="text-white/70">{edu.institution} ({edu.year})</p>
                  <p className="text-white/50">{edu.location}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#00ff66]" /> Languages
              </h2>
              <div className="space-y-2">
                {profileData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white uppercase">{lang.name}</span>
                    <span className="font-mono text-[#00ff66] font-bold">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-zinc-950 flex items-center justify-between text-xs text-white/50 font-mono uppercase">
          <span>Tegar Manthofani — Senior Software Developer</span>
          <span>Batam, Indonesia / Singapore</span>
        </div>
      </div>
    </div>
  );
};
