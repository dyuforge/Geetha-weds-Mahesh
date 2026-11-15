import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

export const ScrollDownHint: React.FC = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      setIsAtEnd(scrolledToBottom);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.75),
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {!isAtEnd && (
        <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center pointer-events-none">
          <motion.button
            type="button"
            onClick={handleScrollDown}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            aria-label="Scroll down"
            className="pointer-events-auto inline-flex flex-col items-center justify-center gap-0.5 px-3.5 py-1.5 rounded-2xl bg-[#3D0711]/90 hover:bg-[#5C0C16] backdrop-blur-md border border-[#D4AF62]/70 shadow-[0_6px_20px_rgba(61,11,17,0.4)] text-[#FCF6BA] cursor-pointer transition-colors"
          >
            <span className="text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-wider leading-none">
              Scroll Down
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="inline-flex items-center justify-center"
            >
              <ChevronsDown className="w-6 h-6 text-[#D4AF62]" />
            </motion.span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};
