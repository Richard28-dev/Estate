import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Home, Wrench, KeyRound } from 'lucide-react';

export default function WhyChooseSecureStay() {
  const features = [
    {
      icon: UserCheck,
      title: 'Verified Tenants',
      description: 'Thorough background verification, ID checks, and employment verification for complete safety.',
    },
    {
      icon: Home,
      title: 'On-Time Rent Payouts',
      description: 'Reliable and timely monthly rental deposits directly to your bank account with zero hassle.',
    },
    {
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Regular inspections, quick plumbing/electrical repairs, and professional housekeeping support.',
    },
    {
      icon: KeyRound,
      title: 'Zero Brokerage Stays',
      description: 'Tenants can rent clean, fully furnished, and verified rooms and flats with transparent pricing.',
    },
  ];

  return (
    <section id="why-choose" className="py-24 sm:py-28 px-6 bg-[#081312] relative border-t border-b border-[#1C2E2A] overflow-hidden">
      {/* Subtle background ambient gold lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C6A868]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium block mb-3"
          >
            The Secure Stay Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F1EA] tracking-tight"
          >
            Why Choose <span className="italic text-[#D4BA7E] font-normal">SecureStay?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base font-sans text-[#A5B0AD] font-light leading-relaxed max-w-xl mx-auto"
          >
            We provide a seamless and transparent experience for both homeowners and tenants.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#061412]/85 backdrop-blur-2xl border border-[#C6A868]/30 hover:border-[#C6A868]/80 rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(198,168,104,0.18)] group overflow-hidden before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C6A868]/60 before:to-transparent"
              >
                {/* Background Hover Glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C6A868]/10 rounded-full blur-2xl group-hover:bg-[#C6A868]/20 transition-all duration-500 pointer-events-none" />

                {/* Logo Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 rounded-2xl bg-[#C6A868]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#152E28] to-[#0A1815] border border-[#C6A868]/40 flex items-center justify-center text-[#E0C58A] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(224,197,138,0.35)] group-hover:scale-110 group-hover:border-[#C6A868] transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-2xl sm:text-[25px] font-normal text-[#F5F1EA] leading-snug mb-3 group-hover:text-[#D4BA7E] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-[#A5B0AD] font-light leading-relaxed group-hover:text-[#D0D7D5] transition-colors">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
