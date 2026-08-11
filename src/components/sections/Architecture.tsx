import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { architectureNodes } from '../../data/architecture';

export const Architecture: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(architectureNodes[0].id);

  const selectedNode = architectureNodes.find(n => n.id === selectedNodeId) || architectureNodes[0];

  return (
    <section id="architecture" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="05 / ARCHITECTURAL TOPOLOGY"
          title={
            <>
              End-to-end <span className="text-stroke-accent">request pipeline</span> built for high availability.
            </>
          }
          description="Visualizing the request pipeline from client mobile/web interfaces through secure API gateways, Spring Boot domain services, Oracle/MSSQL databases, and Grafana observability."
        />

        {/* Interactive Architecture Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Visual Topology Pipeline (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#141416] border border-white/10 text-xs font-mono text-white/50 mb-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00ff66] animate-pulse" />
                SYSTEM PIPELINE BLUEPRINT
              </span>
              <span className="font-bold text-[#00ff66] uppercase tracking-wider">SELECT NODE FOR SPECS</span>
            </div>

            {architectureNodes.map((node, index) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <React.Fragment key={node.id}>
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#141416] text-white border-[#00ff66] shadow-2xl'
                        : 'bg-[#0c0c0d] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 font-mono text-xs font-bold flex items-center justify-center ${
                          isSelected ? 'bg-[#00ff66] text-[#0c0c0d]' : 'bg-zinc-800 text-white'
                        }`}>
                          0{index + 1}
                        </div>
                        <div>
                          <h4 className={`font-syne text-xl font-extrabold uppercase ${isSelected ? 'text-[#00ff66]' : 'text-white'}`}>
                            {node.label}
                          </h4>
                          <p className={`font-mono text-xs uppercase ${isSelected ? 'text-white/70' : 'text-white/40'}`}>
                            {node.sublabel}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isSelected ? 'bg-[#00ff66] text-[#0c0c0d]' : 'bg-zinc-800 text-white/70 border border-white/10'
                        }`}>
                          {node.status}
                        </span>
                        <ArrowRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-[#00ff66] translate-x-1' : 'text-white/40'}`} />
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/10">
                      {node.tech.map((t) => (
                        <span key={t} className={`px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase ${
                          isSelected ? 'bg-zinc-800 text-[#00ff66]' : 'bg-[#141416] text-white/60 border border-white/10'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {index < architectureNodes.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-6 bg-white/20 relative">
                        <div className="w-1.5 h-1.5 bg-[#00ff66] -left-[2px] absolute animate-ping" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Node Specification Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="p-8 sm:p-10 bg-[#141416] text-white border border-white/10 shadow-2xl space-y-6">
              <div>
                <span className="font-mono text-xs text-[#00ff66] uppercase font-bold tracking-[0.2em] block mb-2">
                  BLUEPRINT SPECIFICATION INSPECTOR
                </span>
                <h3 className="font-syne text-3xl font-extrabold uppercase text-white">
                  {selectedNode.label}
                </h3>
                <p className="font-mono text-xs text-white/50 mt-1 uppercase tracking-wider">
                  {selectedNode.sublabel}
                </p>
              </div>

              <p className="text-sm text-white/80 font-sans font-light leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="p-5 bg-[#0c0c0d] border border-white/10 space-y-2">
                <span className="font-mono text-xs font-bold text-[#00ff66] flex items-center gap-2 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> PERFORMANCE & SLA TARGET
                </span>
                <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-white/50 uppercase font-bold tracking-widest block mb-3">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono font-bold uppercase bg-zinc-800 text-[#00ff66] border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>PATTERN</span>
                <span className="text-[#00ff66] font-bold uppercase">ENTERPRISE GRADE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
