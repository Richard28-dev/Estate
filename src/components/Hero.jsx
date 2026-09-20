import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

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

  const metrics = [
    {
      icon: Users,
      value: '100+',
      label: 'Happy Customers',
    },
    {
      icon: Building2,
      value: '50+',
      label: 'Completed Projects',
    },
    {
      icon: TrendingUp,
      value: '99.2%',
      label: 'On-Time Rent Payouts',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Verified Background KYC',
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[96vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-12 overflow-hidden"
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

      {/* Trust & Performance Metrics Bar */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-10 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#071412]/85 backdrop-blur-2xl border border-[#C6A868]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_25px_rgba(198,168,104,0.1)] transition-all duration-500 hover:border-[#C6A868]/55 before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C6A868]/50 before:to-transparent"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center divide-y md:divide-y-0 md:divide-x divide-[#C6A868]/20">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center px-4 group ${
                    index >= 2 ? 'pt-5 md:pt-0' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-[#C6A868]/10 border border-[#C6A868]/30 flex items-center justify-center text-[#D4BA7E] mb-3 group-hover:scale-110 group-hover:bg-[#C6A868]/20 group-hover:border-[#C6A868]/60 shadow-[0_0_15px_rgba(198,168,104,0.1)] transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#F5F1EA] tracking-tight leading-tight group-hover:text-[#D4BA7E] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-[13px] font-sans text-[#C5C0B6] font-medium tracking-wide mt-1">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mouse Scroll Prompt at Bottom */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="mt-7 sm:mt-9 flex flex-col items-center justify-center gap-2 pointer-events-none"
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


