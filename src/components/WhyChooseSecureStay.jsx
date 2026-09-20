import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Home, Wrench, KeyRound, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function WhyChooseSecureStay({ onOpenEnquiry }) {
  const features = [
    {
      number: '01',
      icon: UserCheck,
      title: 'Verified Tenants',
      description: 'Thorough background verification, ID checks, and employment verification for complete safety.',
      badge: '100% Vetted',
      highlight: 'Zero Compromise KYC',
    },
    {
      number: '02',
      icon: Home,
      title: 'On-Time Rent Payouts',
      description: 'Reliable and timely monthly rental deposits directly to your bank account with zero hassle.',
      badge: 'Guaranteed Yield',
      highlight: 'Automated Payouts',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Regular inspections, quick plumbing/electrical repairs, and professional housekeeping support.',
      badge: 'Turnkey Care',
      highlight: '24/7 Dedicated Support',
    },
    {
      number: '04',
      icon: KeyRound,
      title: 'Zero Brokerage Stays',
      description: 'Tenants can rent clean, fully furnished, and verified rooms and flats with transparent pricing.',
      badge: 'Direct Transparent',
      highlight: 'No Hidden Fees',
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
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#061412]/85 backdrop-blur-2xl border border-[#C6A868]/30 hover:border-[#C6A868]/80 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(198,168,104,0.18)] group overflow-hidden before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C6A868]/60 before:to-transparent"
              >
                {/* Background Hover Glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C6A868]/10 rounded-full blur-2xl group-hover:bg-[#C6A868]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Faceted Icon & Index Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#C6A868]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#152E28] to-[#0A1815] border border-[#C6A868]/40 flex items-center justify-center text-[#E0C58A] shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(224,197,138,0.35)] group-hover:scale-110 group-hover:border-[#C6A868] transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                    </div>

                    <span className="font-serif-display text-3xl font-light text-[#C6A868]/35 group-hover:text-[#D4BA7E]/70 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Tag Pill */}
                  <div className="mb-3">
                    <span className="text-[9.5px] font-sans uppercase tracking-[0.2em] text-[#D4BA7E] font-medium px-2.5 py-1 rounded-md border border-[#C6A868]/25 bg-[#C6A868]/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-2xl sm:text-[25px] font-normal text-[#F5F1EA] leading-snug mb-3 group-hover:text-[#D4BA7E] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-sans text-[#A5B0AD] font-light leading-relaxed group-hover:text-[#D0D7D5] transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#1C2E2A] flex items-center justify-between text-[11px] font-sans text-[#8E9B97] group-hover:text-[#D4BA7E] transition-colors">
                  <span className="font-medium tracking-wide">{item.highlight}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#C6A868] shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sub-Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-14 sm:mt-16 p-7 sm:p-9 rounded-3xl border border-[#C6A868]/35 bg-[#061210]/90 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(198,168,104,0.1)]"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl border border-[#C6A868]/40 bg-[#122823] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(198,168,104,0.15)]">
              <ShieldCheck className="w-6 h-6 text-[#D4BA7E] stroke-[1.8]" />
            </div>
            <div>
              <h4 className="font-serif-display text-xl sm:text-2xl text-[#F5F1EA] font-normal">
                Looking to lease or manage your premium residence?
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#A5B0AD] font-light mt-0.5">
                Join 100+ high-net-worth homeowners enjoying guaranteed rent, rigorous KYC, and hands-off stewardship.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-7 py-3.5 bg-gradient-to-r from-[#C6A868] via-[#E2C98E] to-[#C6A868] hover:from-[#D4BA7E] hover:to-[#E5CB95] text-[#071110] text-xs font-sans font-semibold uppercase tracking-[0.2em] transition-all rounded-xl shadow-[0_4px_25px_rgba(198,168,104,0.35)] active:scale-95 group flex items-center gap-2"
          >
            <span>Consult With Us</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
