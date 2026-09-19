import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 px-6 bg-[#081312] relative border-t border-[#1C2E2A] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto"
      >
        
        {/* Eyebrow */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium">
            Confidential Client Accolades
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[320px] flex flex-col items-center justify-center text-center px-4 sm:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-4xl"
            >
              {/* Subtle Quote Symbol */}
              <Quote className="w-8 h-8 text-[#C6A868]/40 mb-6 stroke-[1]" />

              {/* Large Serif Editorial Quote */}
              <blockquote className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-light text-[#F5F1EA] leading-[1.38] tracking-tight italic">
                "{active.quote}"
              </blockquote>

              {/* Client Persona & Property Credential */}
              <div className="mt-8 flex flex-col items-center">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4BA7E] font-medium">
                  {active.client}
                </span>
                <span className="mt-1 text-[11px] font-sans text-[#8F9C98] tracking-wider font-light">
                  {active.propertyType} • {active.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Navigation Arrows & Indicators */}
          <div className="flex items-center justify-between w-full max-w-xs mt-12 pt-6 border-t border-[#1C2E2A]">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-2 text-[#8F9C98] hover:text-[#D4BA7E] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.25]" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[2px] transition-all duration-500 ${
                    currentIndex === i ? 'w-8 bg-[#D4BA7E]' : 'w-2 bg-[#C6A868]/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-2 text-[#8F9C98] hover:text-[#D4BA7E] transition-colors"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.25]" />
            </button>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
