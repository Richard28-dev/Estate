import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] bg-[#0B0B0C] flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Architectural Monogram */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-20 h-20 mb-6 flex items-center justify-center border border-[#C9A96E]/30 rounded-full"
            >
              <div className="absolute inset-1 border border-[#C9A96E]/15 rounded-full" />
              <span className="font-serif-display text-2xl tracking-[0.2em] text-[#DFBF85] font-light italic">
                SS
              </span>
            </motion.div>

            {/* Brand Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="font-serif-display text-xl tracking-[0.35em] text-[#F5F1EA] uppercase font-light">
                SECURE STAY
              </h1>
              <p className="mt-2 text-[10px] tracking-[0.3em] text-[#C9A96E]/80 uppercase font-sans-luxury">
                Private Real Estate Advisory
              </p>
            </motion.div>

            {/* Hairline loading bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: 'easeInOut' }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
