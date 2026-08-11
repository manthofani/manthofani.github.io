import React from 'react';
import { ChevronLeft, ChevronRight, Shuffle, Sparkles, Layers } from 'lucide-react';
import { TransitionPreset } from '../../lib/transitions';

export interface PageInfo {
  id: string;
  num: string;
  title: string;
  shortLabel: string;
}

interface PagePaginationProps {
  pages: PageInfo[];
  currentIndex: number;
  activePreset: TransitionPreset;
  onSelectPage: (index: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  onRerollFx: () => void;
}

export const PagePagination: React.FC<PagePaginationProps> = ({
  pages,
  currentIndex,
  activePreset,
  onSelectPage,
  onNextPage,
  onPrevPage,
  onRerollFx,
}) => {
  const currentPage = pages[currentIndex];
  const totalPages = pages.length;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pt-2">
        <div className="pointer-events-auto bg-[#0c0c0d]/95 backdrop-blur-xl border border-white/20 p-3 sm:p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-white font-mono text-xs">
          
          {/* Left: Page Title & Index Status */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#00ff66] text-[#0c0c0d] font-bold font-syne flex items-center justify-center text-xs">
                {currentPage.num}
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">
                  PAGE {currentPage.num} OF 0{totalPages}
                </div>
                <div className="font-syne font-extrabold text-sm uppercase text-white truncate max-w-[200px] sm:max-w-[280px]">
                  {currentPage.title}
                </div>
              </div>
            </div>

            {/* Live Animation Preset HUD tag */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#141416] border border-white/15 text-[11px] text-[#00ff66]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#00ff66]" />
              <span className="font-bold tracking-wider uppercase">
                {activePreset.code}
              </span>
              <button
                onClick={onRerollFx}
                title="Randomize transition animation preset"
                className="ml-1 p-1 hover:bg-[#00ff66] hover:text-[#0c0c0d] transition-colors rounded-2xs cursor-pointer text-white/70"
              >
                <Shuffle className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Center: Page Jump Pills */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#141416] p-1 border border-white/10">
            {pages.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectPage(idx)}
                  className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#00ff66] text-[#0c0c0d] font-bold'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  title={`${p.num} - ${p.title}`}
                >
                  {p.num}
                </button>
              );
            })}
          </div>

          {/* Right: Prev / Next Navigation Controls & Reroll */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            
            {/* Mobile FX Reroll Trigger */}
            <button
              onClick={onRerollFx}
              className="lg:hidden px-2.5 py-1.5 bg-[#141416] border border-white/15 text-[#00ff66] hover:bg-[#00ff66] hover:text-[#0c0c0d] transition-all flex items-center gap-1 text-[10px] font-bold uppercase cursor-pointer"
              title="Randomize animation effect"
            >
              <Shuffle className="w-3 h-3" />
              <span>RANDOM FX</span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onPrevPage}
                disabled={currentIndex === 0}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1 transition-all cursor-pointer border ${
                  currentIndex === 0
                    ? 'opacity-30 border-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-[#141416] border-white/20 text-white hover:border-[#00ff66] hover:text-[#00ff66]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">PREV</span>
              </button>

              <button
                onClick={onNextPage}
                disabled={currentIndex === totalPages - 1}
                className={`px-4 py-1.5 font-syne font-extrabold text-xs uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer border ${
                  currentIndex === totalPages - 1
                    ? 'opacity-30 border-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-[#00ff66] text-[#0c0c0d] border-[#00ff66] hover:bg-white'
                }`}
              >
                <span className="hidden sm:inline">NEXT PAGE</span>
                <span className="sm:hidden">NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
