import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTIONS } from '../data/properties';

export default function CuratedCollections({ onSelectCollection }) {
  return (
    <section id="collections" className="py-24 bg-[#050E0D] relative border-t border-[#1C2E2A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium block mb-2">
            Curated Typologies
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F1EA]">
            The Curated <span className="italic text-[#D4BA7E]">Collections</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#8F9C98] max-w-md font-light leading-relaxed">
          Categorized by architectural distinction and lifestyle ethos, curated for collectors of irreplaceable prime real estate.
        </p>
      </motion.div>

      {/* Full-width 2x2 Grid with Parallax Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-7xl mx-auto px-4 sm:px-6">
        {COLLECTIONS.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectCollection && onSelectCollection(col.filterCategory)}
            className="group relative h-[420px] sm:h-[480px] overflow-hidden cursor-pointer border border-[#1C2E2A] flex flex-col justify-end p-8 sm:p-12 transition-all duration-700"
          >
            {/* Parallax-style Background Image with Slow Zoom */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-[0.65] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081312] via-[#081312]/45 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-700" />
            </div>

            {/* Hairline Border highlight on hover */}
            <div className="absolute inset-4 sm:inset-6 border border-[#C6A868]/0 group-hover:border-[#C6A868]/35 transition-all duration-700 pointer-events-none" />

            {/* Content Box */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#D4BA7E] font-medium">
                  {col.tagline}
                </span>
                <span className="text-[10px] font-sans text-[#8F9C98] tracking-wider">
                  {col.count}
                </span>
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#F5F1EA] group-hover:text-[#DFBF85] transition-colors duration-300 font-light mb-3">
                {col.title}
              </h3>

              <p className="text-xs font-sans text-[#A59E92] font-light max-w-md leading-relaxed line-clamp-2">
                {col.description}
              </p>

              {/* Action Prompt */}
              <div className="mt-6 flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.25em] text-[#DFBF85] group-hover:text-[#F5F1EA] transition-colors">
                <span>Explore Curated Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A96E] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
