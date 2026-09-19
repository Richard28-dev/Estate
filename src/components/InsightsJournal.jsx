import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/properties';

export default function InsightsJournal({ onReadArticle }) {
  return (
    <section id="journal" className="py-28 px-6 bg-[#081312] relative border-t border-[#1C2E2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C2E2A] gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#C6A868]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#D4BA7E]">
                Intellectual Capital
              </span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F1EA]">
              The Private <span className="italic text-[#D4BA7E]">Gazette</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-[#8F9C98] max-w-md font-light leading-relaxed">
            Essays on architectural craft, wealth preservation, and macro trends shaping prime residential holdings.
          </p>
        </motion.div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onReadArticle && onReadArticle(article)}
              className="group cursor-pointer flex flex-col bg-[#0B1715]/70 border border-[#1C2E2A] hover:border-[#C6A868]/50 transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Image with zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#10221F]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-[#081312]/90 text-[9px] uppercase tracking-[0.25em] text-[#D4BA7E] font-sans border border-[#C6A868]/30">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow relative">
                <span className="absolute top-0 left-0 w-0 h-[1.5px] bg-[#C6A868] transition-all duration-500 group-hover:w-full" />
                
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase font-sans text-[#8F9C98] tracking-wider mb-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-light text-[#F5F1EA] group-hover:text-[#D4BA7E] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs font-sans text-[#8F9C98] font-light leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C2E2A] flex items-center justify-between">
                  <span className="text-[11px] font-sans text-[#8F9C98]/80 italic">
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4BA7E] group-hover:translate-x-1 transition-transform">
                    Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
