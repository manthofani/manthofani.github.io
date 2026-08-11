import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PagePagination, PageInfo } from './components/layout/PagePagination';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Architecture } from './components/sections/Architecture';
import { Philosophy } from './components/sections/Philosophy';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/ui/ResumeModal';
import { Cursor } from './components/ui/Cursor';
import { ANIMATION_PRESETS, getRandomPreset, TransitionPreset } from './lib/transitions';

const PAGES: PageInfo[] = [
  { id: 'home', num: '01', title: 'Landing Hero & Overview', shortLabel: 'Home' },
  { id: 'about', num: '02', title: 'Executive Narrative', shortLabel: 'About' },
  { id: 'experience', num: '03', title: 'Curriculum Vitae', shortLabel: 'Experience' },
  { id: 'projects', num: '04', title: 'Selected Portfolio Works', shortLabel: 'Projects' },
  { id: 'skills', num: '05', title: 'Core Technology Matrix', shortLabel: 'Skills' },
  { id: 'architecture', num: '06', title: 'System Architecture Blueprint', shortLabel: 'Architecture' },
  { id: 'philosophy', num: '07', title: 'Engineering Philosophy', shortLabel: 'Philosophy' },
  { id: 'contact', num: '08', title: 'Direct Correspondence', shortLabel: 'Contact' },
];

export function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activePreset, setActivePreset] = useState<TransitionPreset>(ANIMATION_PRESETS[0]);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavigatePage = useCallback((target: string | number) => {
    let newIndex = typeof target === 'number' ? target : PAGES.findIndex((p) => p.id === target);
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= PAGES.length) newIndex = PAGES.length - 1;

    setCurrentPageIndex((prevIndex) => {
      if (newIndex === prevIndex) return prevIndex;

      // Determine directional vector
      const dir = newIndex > prevIndex ? 1 : -1;
      setDirection(dir);

      // Randomly select a transition preset!
      const randomPreset = getRandomPreset(activePreset.id);
      setActivePreset(randomPreset);

      window.scrollTo({ top: 0, behavior: 'instant' });
      return newIndex;
    });
  }, [activePreset.id]);

  const handleNextPage = useCallback(() => {
    if (currentPageIndex < PAGES.length - 1) {
      handleNavigatePage(currentPageIndex + 1);
    }
  }, [currentPageIndex, handleNavigatePage]);

  const handlePrevPage = useCallback(() => {
    if (currentPageIndex > 0) {
      handleNavigatePage(currentPageIndex - 1);
    }
  }, [currentPageIndex, handleNavigatePage]);

  const handleRerollFx = useCallback(() => {
    const freshPreset = getRandomPreset(activePreset.id);
    setActivePreset(freshPreset);
  }, [activePreset.id]);

  // Keyboard Navigation Listener (Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextPage, handlePrevPage]);

  const currentPage = PAGES[currentPageIndex];

  const renderActiveSection = () => {
    switch (currentPage.id) {
      case 'home':
        return <Hero onOpenResume={() => setIsResumeModalOpen(true)} onNavigate={handleNavigatePage} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'architecture':
        return <Architecture />;
      case 'philosophy':
        return <Philosophy />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onOpenResume={() => setIsResumeModalOpen(true)} onNavigate={handleNavigatePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-white font-sans antialiased selection:bg-[#00ff66] selection:text-[#0c0c0d] transition-colors duration-300 relative overflow-x-hidden flex flex-col justify-between">
      {/* Custom Desktop Cursor */}
      <Cursor />

      {/* Navigation Bar */}
      <Navbar
        activePage={currentPage.id}
        onNavigate={handleNavigatePage}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Animated Multi-Page View Stage */}
      <main className="pt-20 pb-24 flex-grow relative w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={{ direction }}>
          <motion.div
            key={currentPage.id}
            custom={{ direction }}
            variants={activePreset.variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={activePreset.transition}
            className="w-full flex flex-col justify-between"
          >
            <div>
              {renderActiveSection()}
            </div>

            {/* Footer attached at bottom of page content */}
            <Footer onNavigate={handleNavigatePage} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Multi-Page Pagination HUD */}
      <PagePagination
        pages={PAGES}
        currentIndex={currentPageIndex}
        activePreset={activePreset}
        onSelectPage={handleNavigatePage}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onRerollFx={handleRerollFx}
      />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
