import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Server, Smartphone, Database, Globe, Code, Activity, Award } from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: "SYSTEM ARCHITECTURE",
      description: "Designing modular, decoupled microservices and event-driven REST APIs that handle concurrent enterprise traffic gracefully.",
      icon: Server,
      tech: "Java Spring Boot, Node.js, Next.js"
    },
    {
      title: "BACKEND ENGINEERING",
      description: "Building robust domain services with defensive transaction boundaries, JWT security, and high-performance stored procedures.",
      icon: Code,
      tech: "Spring Security, Express, Laravel"
    },
    {
      title: "FULL-STACK & MOBILE",
      description: "Crafting 60fps React Native mobile applications for industrial handheld RF scanners and responsive web portals with React & Next.js.",
      icon: Smartphone,
      tech: "React Native, Expo, TypeScript, Tailwind"
    },
    {
      title: "ENTERPRISE INTEGRATIONS",
      description: "Bridging physical POS retail terminals with regional marketplace APIs (Lazada, Shopee) and Salesforce Marketing Cloud for L'Oréal brands.",
      icon: Globe,
      tech: "POS APIs, E-commerce, Salesforce, Webhooks"
    },
    {
      title: "DATABASE & PERFORMANCE",
      description: "Tuning complex queries, execution plans, and indexing strategies across Oracle PL/SQL, Microsoft SQL Server, PostgreSQL, and Redis caching.",
      icon: Database,
      tech: "Oracle DB, MSSQL, Redis, Query Profiling"
    },
    {
      title: "OBSERVABILITY & DEVOPS",
      description: "Setting up Grafana alerting dashboards, structured log tracing, root-cause analysis (RCA), and automated Docker CI/CD pipelines.",
      icon: Activity,
      tech: "Grafana, Docker, Nginx, CI/CD, RCA"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0c0c0d] text-white transition-colors duration-300 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="01 / CURRICULUM OVERVIEW"
          title={
            <>
              Architecting systems from <span className="text-stroke-accent">interface</span> to <span className="text-stroke">database</span>.
            </>
          }
          description="A senior software developer with 7+ years of hands-on experience building, scaling, and maintaining mission-critical enterprise software across Singapore and Indonesia."
        />

        {/* Narrative & Editorial Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          
          {/* Left Large Pull Quote Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 bg-[#141416] text-white relative overflow-hidden shadow-2xl border border-white/10 space-y-6">
              <span className="font-mono text-xs tracking-widest text-[#00ff66] uppercase font-bold block">
                EDITORIAL PERSPECTIVE
              </span>

              <h3 className="font-syne text-[26px] sm:text-[28px] font-extrabold leading-snug text-white">
                “Production <span className="text-stroke-accent">reliability</span> isn't an afterthought—it's the primary metric of engineering quality.”
              </h3>

              <p className="text-white/70 text-sm leading-relaxed font-sans font-light">
                Having engineered systems for regional brands like L'Oréal in Singapore and industrial warehouse RF logistics in Indonesia, I focus on software that stays operational under real-world traffic.
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>LOCATIONS</span>
                <span className="text-[#00ff66] font-bold">Singapore & Indonesia</span>
              </div>
            </div>

            {/* Quick Stats Column */}
            <div className="grid grid-cols-2 gap-4 text-left font-mono">
              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-3xl font-syne font-extrabold text-[#00ff66] block">7+ YRS</span>
                <span className="text-xs text-white/60 uppercase">Software Engineering</span>
              </div>
              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-3xl font-syne font-extrabold text-white block">L'Oréal</span>
                <span className="text-xs text-white/60 uppercase">Singapore Regional</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-8 font-sans text-base leading-relaxed text-white/80 font-light">
            <p className="text-xl sm:text-2xl font-syne font-bold text-white leading-snug">
              My engineering discipline began with a foundation in IT infrastructure, networking, and low-level system diagnostics—giving me an intuitive understanding of how software interacts with hardware under pressure.
            </p>
            
            <p className="text-base sm:text-lg">
              Over the past 7+ years, I transitioned into full-stack and backend software development, taking end-to-end ownership of product lifecycles. At <strong className="text-white font-semibold">CPR Vision Management in Singapore</strong>, I built e-commerce loyalty platforms and point-of-sale integrations for <strong className="text-white font-semibold">L'Oréal regional brand platforms</strong>, synchronizing millions of consumer transactions across Lazada, Shopee, and Salesforce Marketing Cloud.
            </p>

            <p className="text-base sm:text-lg">
              Currently as <strong className="text-white font-semibold">Senior Software Developer at Infinite Tech</strong>, I architect mobile RF scanning applications and Java Spring Boot / Oracle backend services for warehouse logistics, ensuring 100% stock tracking accuracy on rugged hardware.
            </p>

            <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
              <h4 className="font-syne text-lg font-bold uppercase text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00ff66]" />
                Engineering Scope & End-to-End Delivery
              </h4>
              <p className="text-xs font-mono text-[#00ff66] leading-relaxed uppercase tracking-wider font-bold">
                PRODUCT ARCHITECTURE → CLIENT INTERFACE → API GATEWAY → DATABASE PROCEDURES → OBSERVABILITY & CI/CD
              </p>
            </div>
          </div>

        </div>

        {/* Technical Focus Pillars Grid */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#00ff66] mb-10">
            ENGINEERING PILLARS & CORE COMPETENCIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#141416] border border-white/10 hover:border-[#00ff66] transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-zinc-800 text-[#00ff66] w-fit mb-6 group-hover:bg-[#00ff66] group-hover:text-[#0c0c0d] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <h4 className="font-syne text-xl font-extrabold uppercase text-white mb-3">
                      {area.title}
                    </h4>
                    
                    <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans font-light">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#00ff66] font-bold uppercase">
                    {area.tech}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
