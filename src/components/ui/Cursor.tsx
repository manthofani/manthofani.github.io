import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointers (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const hoverable = target.closest('[data-cursor]');
      if (hoverable) {
        setIsHovered(true);
        setHoverText(hoverable.getAttribute('data-cursor') || '');
      } else if (target.closest('a, button, [role="button"]')) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-300 hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
          isHovered
            ? 'w-16 h-16 bg-emerald-500/20 backdrop-blur-xs border border-emerald-500/40'
            : 'w-4 h-4 bg-emerald-500/60 ring-2 ring-emerald-500/30'
        }`}
      >
        {hoverText && (
          <span className="font-mono text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-300 tracking-wider">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
};
