import React from 'react';
import { X, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#141416] border border-white/20 shadow-2xl overflow-hidden flex flex-col my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-8 sm:p-10 border-b border-white/10 bg-[#0c0c0d] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-mono bg-[#00ff66] text-[#0c0c0d] font-extrabold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest">PUBLISHED {project.year}</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-white/60 hover:text-[#0c0c0d] hover:bg-[#00ff66] border border-white/10 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 sm:p-10 space-y-8 overflow-y-auto max-h-[70vh] font-sans text-sm text-white/80">
          
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-3">
              DOSSIER OVERVIEW
            </h3>
            <p className="leading-relaxed text-base text-white/90 font-sans font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ff66]" /> KEY ENGINEERING DELIVERABLES
            </h3>
            <div className="space-y-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#0c0c0d] border border-white/10 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#00ff66] mt-2 shrink-0" />
                  <span className="leading-relaxed font-light text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-5 bg-[#0c0c0d] text-white border border-white/10">
              <h3 className="font-mono text-xs font-bold text-[#00ff66] mb-2 flex items-center gap-2 uppercase tracking-wider">
                <Terminal className="w-4 h-4" /> ARCHITECTURAL PATTERN & SPECS
              </h3>
              <p className="text-xs text-white/70 font-mono leading-relaxed font-light">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-3">
              TECHNOLOGY MATRIX
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3.5 py-1.5 text-xs font-mono font-bold uppercase bg-zinc-800 text-[#00ff66] border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-8 border-t border-white/10 bg-[#0c0c0d] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
            ENGINEERING CASE DOSSIER
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-syne font-extrabold uppercase tracking-wider bg-[#00ff66] text-[#0c0c0d] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                Inspect Live System
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-mono font-bold uppercase border border-white/20 text-white hover:border-[#00ff66] hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
