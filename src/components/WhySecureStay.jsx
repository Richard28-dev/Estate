import React from 'react';
import { motion } from 'framer-motion';
import { PILLARS } from '../data/properties';
import { FileCheck2, ShieldCheck, EyeOff, Sparkles } from 'lucide-react';

export default function WhySecureStay({ onOpenEnquiry }) {
  const icons = [
    <FileCheck2 className="w-5 h-5 text-[#C9A96E] stroke-[1.25]" key="1" />,
    <ShieldCheck className="w-5 h-5 text-[#C9A96E] stroke-[1.25]" key="2" />,
    <EyeOff className="w-5 h-5 text-[#C9A96E] stroke-[1.25]" key="3" />,
    <Sparkles className="w-5 h-5 text-[#C9A96E] stroke-[1.25]" key="4" />,
  ];

  return (
    <section id="why-us" className="py-28 px-6 bg-[#081312] relative border-t border-[#1C2E2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium block mb-3"
          >
            The Secure Stay Distinction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F1EA] tracking-tight"
          >
            Pillars of <span className="italic text-[#D4BA7E]">Absolute Assurance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-sans text-[#8F9C98] font-light leading-relaxed max-w-xl mx-auto"
          >
            Unlike conventional transactional brokerage, our private office operates under fiduciary standards designed to shield high-net-worth capital from title ambiguities and unwanted publicity.
          </motion.p>
        </div>

        {/* 4 Pillars Grid with Thin Gold Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 lg:p-10 flex flex-col justify-between border border-[#1C2E2A] lg:border-y-0 lg:border-l-0 ${
                idx === 0 ? 'lg:border-l' : ''
              } bg-[#0B1715]/40 hover:bg-[#10221F]/60 transition-colors duration-500 group`}
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1C2E2A]">
                  <span className="font-serif-display text-3xl font-light text-[#C6A868]/60 group-hover:text-[#D4BA7E] transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#C6A868]/30 flex items-center justify-center bg-[#081312]">
                    {icons[idx]}
                  </div>
                </div>

                {/* Badge */}
                <div className="mb-4">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#D4BA7E] px-2 py-0.5 border border-[#C6A868]/20 bg-[#C6A868]/5">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-2xl text-[#F5F1EA] font-normal leading-snug mb-4 group-hover:text-[#D4BA7E] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-sans text-[#8F9C98] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[#1C2E2A] flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.2em] text-[#8F9C98]/80 group-hover:text-[#D4BA7E] transition-colors">
                <span>Vetted Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A868]/40 group-hover:bg-[#C6A868]" />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Sub-text quote banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 p-8 border border-[#1C2E2A] bg-[#0B1715]/60 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full border border-[#C6A868]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4BA7E]" />
            </div>
            <div>
              <p className="font-serif-display text-lg sm:text-xl text-[#F5F1EA]">
                Require off-market acquisition confidentiality?
              </p>
              <p className="text-xs font-sans text-[#8F9C98]">
                Our private office executes formal mutual non-disclosure agreements prior to asset presentation.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-6 py-3 border border-[#C6A868] text-xs font-sans uppercase tracking-[0.25em] text-[#D4BA7E] hover:bg-[#C6A868] hover:text-[#081312] transition-all duration-300 font-medium rounded-md"
          >
            Initiate Confidential Mandate
          </button>
        </motion.div>

      </div>
    </section>
  );
}
