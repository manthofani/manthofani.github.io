import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Search, Code2, Server, Smartphone, Database, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    backend: Server,
    languages: Code2,
    'frontend-mobile': Smartphone,
    databases: Database,
    'devops-observability': Cpu,
    'integrations-security': ShieldCheck
  };

  const filteredCategories = skillsData.map(cat => {
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, skills: matchingSkills };
  }).filter(cat =>
    (activeTab === 'all' || cat.id === activeTab) && cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="04 / TECHNICAL MATRIX"
          title={
            <>
              Full-stack depth with <span className="text-stroke-accent">backend</span> & <span className="text-stroke">infrastructure</span> mastery.
            </>
          }
          description="A comprehensive inventory of languages, frameworks, enterprise databases, DevOps tools, and observability stacks honed across 7+ years in production."
        />

        {/* Search & Category Tabs Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#00ff66] text-[#0c0c0d] font-bold'
                  : 'bg-[#141416] text-white/70 border border-white/10 hover:text-white'
              }`}
            >
              All Categories
            </button>

            {skillsData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#00ff66] text-[#0c0c0d] font-bold'
                    : 'bg-[#141416] text-white/70 border border-white/10 hover:text-white'
                }`}
              >
                {cat.categoryName.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="FILTER MATRIX INDEX..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono bg-[#141416] border border-white/20 text-white focus:outline-none focus:border-[#00ff66] uppercase"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#00ff66] hover:underline font-mono uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Sparkles;
            return (
              <div
                key={category.id}
                className="p-8 sm:p-10 bg-[#141416] border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="p-2.5 bg-zinc-800 text-[#00ff66]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne text-2xl font-extrabold uppercase text-white">
                      {category.categoryName}
                    </h3>
                    <p className="text-xs font-mono text-[#00ff66] uppercase tracking-[0.2em] font-bold mt-0.5">
                      {category.skills.length} CORE TECHNOLOGIES
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 transition-all duration-200 border ${
                        skill.highlight
                          ? 'bg-zinc-800/90 border-[#00ff66]'
                          : 'bg-[#0c0c0d] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-syne text-lg font-bold uppercase text-white flex items-center gap-2">
                          {skill.name}
                          {skill.highlight && (
                            <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#00ff66] text-[#0c0c0d] font-extrabold">
                              FLAGSHIP
                            </span>
                          )}
                        </span>
                        
                        <span className="text-xs font-mono px-2.5 py-0.5 uppercase bg-zinc-800 text-[#00ff66] font-bold border border-white/10">
                          {skill.level}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="mt-2 text-xs text-white/70 font-sans font-light leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
