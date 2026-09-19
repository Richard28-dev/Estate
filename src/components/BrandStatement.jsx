import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Award, Lock, Sparkles } from 'lucide-react';

function CounterItem({ end, prefix = '', suffix = '', label, sublabel }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 py-6">
      <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#DFBF85] tracking-tight flex items-baseline">
        <span className="text-2xl sm:text-3xl text-[#C9A96E]/80 mr-0.5">{prefix}</span>
        <span>{count.toLocaleString()}</span>
        <span className="text-2xl sm:text-3xl text-[#C9A96E]/80 ml-0.5">{suffix}</span>
      </div>
      <div className="mt-2 text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#F5F1EA] font-medium">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 text-[11px] font-sans text-[#A59E92] tracking-wider font-light">
          {sublabel}
        </div>
      )}
    </div>
  );
}

export default function BrandStatement() {
  return (
    <section id="brand-statement" className="relative py-28 px-6 bg-[#081312] overflow-hidden border-t border-b border-[#1C2E2A]">
      
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6A868]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Subtle Brand Crest Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-12 h-12 rounded-full border border-[#C6A868]/40 flex items-center justify-center mb-10 bg-[#0E1C1A]/60"
        >
          <Sparkles className="w-5 h-5 text-[#C6A868] stroke-[1.25]" />
        </motion.div>

        {/* Editorial Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium mb-6"
        >
          The Creed of Secure Stay
        </motion.span>

        {/* Large Centered Serif Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#F5F1EA] leading-[1.38] max-w-4xl tracking-tight"
        >
          "True luxury is not merely the height of a ceiling or the provenance of marble. It is the serenity of{' '}
          <span className="italic text-[#D4BA7E] font-normal">unquestioned title</span>, absolute discretion, and a home that endures across generations."
        </motion.p>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 text-sm sm:text-base font-sans text-[#A5A096] max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Born to serve sovereign families, private equity leaders, and NRI investors, Secure Stay operates as an elite private office—vetting every freehold covenant, structural permit, and heritage deed prior to quiet presentation.
        </motion.p>

        {/* Animated Counter Metrics */}
        <div className="w-full mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          
          {/* Hairline dividers */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A868]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A868]/30 to-transparent" />

          <CounterItem
            end={500}
            suffix="+"
            label="Homes Curated"
            sublabel="Exclusive Tier Only"
          />

          <CounterItem
            end={3200}
            prefix="₹"
            suffix=" Cr+"
            label="Transacted Capital"
            sublabel="Institutional & Private"
          />

          <CounterItem
            end={100}
            suffix="%"
            label="Title Verified"
            sublabel="Audited Prior to Listing"
          />

          <CounterItem
            end={15}
            suffix=" Yrs"
            label="Discreet Advisory"
            sublabel="Across Prime Corridors"
          />

        </div>

      </div>

    </section>
  );
}
