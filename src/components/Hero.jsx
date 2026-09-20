import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Users, Building2, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

function AnimatedMetric({ target, decimals = 0, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref} className="tabular-nums font-sans-luxury text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-none flex items-baseline justify-center">
      <span className="bg-gradient-to-b from-[#FFFFFF] via-[#F5F1EA] to-[#D4BA7E] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,186,126,0.3)]">
        {decimals > 0 ? val.toFixed(decimals) : val}
      </span>
      <span className="text-[#C6A868] font-bold text-2xl sm:text-3xl ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

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
      target: 100,
      decimals: 0,
      suffix: '+',
      label: 'Happy Customers',
      sublabel: 'Private Wealth & Families',
    },
    {
      icon: Building2,
      target: 50,
      decimals: 0,
      suffix: '+',
      label: 'Completed Projects',
      sublabel: 'Prime Turnkey Enclaves',
    },
    {
      icon: TrendingUp,
      target: 99.2,
      decimals: 1,
      suffix: '%',
      label: 'On-Time Rent Payouts',
      sublabel: 'Guaranteed Yield Precision',
    },
    {
      icon: ShieldCheck,
      target: 100,
      decimals: 0,
      suffix: '%',
      label: 'Verified Background KYC',
      sublabel: 'Institutional Due Diligence',
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

      {/* Ultra-Luxury Trust & Performance Metrics Bar */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-10 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#061210]/90 backdrop-blur-3xl border border-[#C6A868]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.85),0_0_35px_rgba(198,168,104,0.12),inset_0_1px_2px_rgba(255,255,255,0.06)] transition-all duration-500 hover:border-[#C6A868]/65 before:absolute before:inset-x-12 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#E2C98E]/80 before:to-transparent"
        >
          {/* Subtle Institutional Eyebrow Header */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#C6A868]/60" />
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#C6A868]/10 border border-[#C6A868]/30">
              <Sparkles className="w-3 h-3 text-[#D4BA7E]" />
              <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.28em] text-[#D4BA7E] font-medium">
                Verified Portfolio Benchmarks
              </span>
            </div>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#C6A868]/60" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-stretch divide-y md:divide-y-0 md:divide-x divide-[#C6A868]/20">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-between text-center px-3 sm:px-6 py-2 group rounded-xl transition-all duration-300 hover:bg-[#0E201D]/40 ${
                    index >= 2 ? 'pt-6 md:pt-2' : ''
                  }`}
                >
                  {/* Faceted Luxury Icon Badge */}
                  <div className="relative mb-3.5">
                    <div className="absolute inset-0 rounded-2xl bg-[#C6A868]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#152E28] to-[#0A1815] border border-[#C6A868]/40 flex items-center justify-center text-[#E0C58A] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(224,197,138,0.35)] group-hover:scale-110 group-hover:border-[#C6A868] transition-all duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Animated Gold Serif Numerals */}
                  <div className="my-1">
                    <AnimatedMetric
                      target={metric.target}
                      decimals={metric.decimals}
                      suffix={metric.suffix}
                    />
                  </div>

                  {/* Title Label */}
                  <div className="text-xs sm:text-[13px] font-sans font-semibold text-[#F5F1EA] tracking-wide mt-1 group-hover:text-[#D4BA7E] transition-colors">
                    {metric.label}
                  </div>

                  {/* Institutional Micro-Narrative Subtitle */}
                  <div className="text-[10px] sm:text-[11px] font-sans text-[#8E9B97] font-light tracking-wide mt-0.5">
                    {metric.sublabel}
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



