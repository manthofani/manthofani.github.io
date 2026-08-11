import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  badge,
  align = 'left'
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl'}`}>
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-[#00ff66]">
          [ {eyebrow} ]
        </span>
        <span className="h-px w-10 bg-white/20" />
        {badge && (
          <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase font-extrabold rounded-sm bg-[#00ff66] text-[#0c0c0d]">
            {badge}
          </span>
        )}
      </div>
      
      <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
        {title}
      </h2>
      
      {description && (
        <p className="mt-4 text-base sm:text-xl text-white/70 leading-relaxed font-sans font-light max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

