import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onSearchSubmit, currentCurrency }) {
  const heroRef = useRef(null);

  // Scroll Parallax for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0px', '45px']);

  const scrollToProperties = () => {
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Background Cinematic Visual with Smooth Scroll Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none origin-top"
      >
        <img
          src="./hero-villa.jpg"
          alt="Ultra-luxury modern villa with infinity pool at sunset overlooking sea"
          className="w-full h-full object-cover object-[70%_center] sm:object-center filter contrast-[1.05]"
        />
        {/* Layered Obsidian-Green Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081312] via-[#081312]/85 to-transparent w-full md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081312] via-transparent to-[#081312]/40" />
      </motion.div>

      {/* Left-Aligned Hero Content with Scroll Fade */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto"
      >
        <div className="max-w-2xl text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] tracking-tight text-[#F5F1EA]"
          >
            Where Trust Meets<br />
            <span className="italic text-[#D4BA7E] font-normal">
              Architectural Grandeur.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg font-sans text-[#C5C0B6] max-w-lg font-light leading-relaxed"
          >
            Discover exceptional homes, premium investments, and lifestyle spaces curated for a better tomorrow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <button
              onClick={scrollToProperties}
              className="bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-md inline-flex items-center gap-2.5 transition-all shadow-md active:scale-95 group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mouse Scroll Prompt at Bottom */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-10">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="flex flex-col items-center justify-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C6A868]/80 font-medium">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-[#C6A868]/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#D4BA7E]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

