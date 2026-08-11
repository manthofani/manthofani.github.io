import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, Filter, Terminal } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { ProjectModal } from '../projects/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Mobile', 'Web & Enterprise', 'Systems & Integrations'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="03 / SELECTED WORKS"
          title={
            <>
              Case studies in <span className="text-stroke-accent">enterprise</span> & <span className="text-stroke">application</span> architecture.
            </>
          }
          description="A curated showcase of production applications spanning industrial mobile RF scanners, high-throughput web portals, and inventory reconciliation platforms."
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-white/10 pb-6">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#00ff66] mr-2 flex items-center gap-1.5 font-bold">
            <Filter className="w-3.5 h-3.5" /> FILTER INDEX:
          </span>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00ff66] text-[#0c0c0d] font-bold'
                    : 'bg-[#141416] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Case Studies Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              onClick={() => setActiveProject(project)}
              className="group relative bg-[#141416] border border-white/10 hover:border-[#00ff66] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer shadow-2xl"
            >
              
              {/* Header Info */}
              <div className="p-8 sm:p-10 pb-4 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-white/50">
                  <span className="px-3 py-1 font-bold uppercase tracking-wider bg-zinc-800 text-[#00ff66] border border-white/10">
                    {project.category}
                  </span>
                  <span>CATALOG NO. 0{index + 1} // {project.year}</span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase text-white group-hover:text-[#00ff66] transition-colors flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-[#00ff66] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </h3>

                <p className="text-base text-white/70 font-sans font-light leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technical Specifications Container */}
              <div className="px-8 sm:px-10 py-3">
                <div className="p-6 bg-[#0c0c0d] text-white font-mono text-xs space-y-3 relative overflow-hidden border border-white/10">
                  <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-xs text-[#00ff66] font-bold uppercase tracking-wider">
                      <Terminal className="w-3.5 h-3.5" /> SPECIFICATION HIGHLIGHTS
                    </span>
                    <span className="text-[10px] text-white/40 uppercase">DOSSIER AVAIL.</span>
                  </div>

                  <div className="space-y-2 text-white/80">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#00ff66] font-bold">›</span>
                        <span className="line-clamp-2 text-xs leading-relaxed font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Action */}
              <div className="p-8 sm:p-10 pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-2xs bg-zinc-800 text-[#00ff66] border border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-mono rounded-2xs bg-zinc-800 text-white/40">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#00ff66] tracking-wider uppercase group-hover:underline">
                    View Case Study →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
