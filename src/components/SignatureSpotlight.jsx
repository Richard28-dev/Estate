import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bed, Bath, Maximize2, ShieldCheck, MapPin, Sparkles, Check } from 'lucide-react';
import { formatPrice } from '../utils/currency';

export default function SignatureSpotlight({ onScheduleTour, currentCurrency, property }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Default to Worli Penthouse if not provided
  const spotlightItem = property || {
    id: 'worli-sky-seraphim',
    title: 'The Sky Seraphim Penthouse',
    location: 'Worli Sea Face, Mumbai',
    categoryLabel: 'Signature Triplex Penthouse',
    priceInr: 68.5,
    priceUsd: 8.2,
    priceAed: 30.1,
    beds: 5,
    baths: 6,
    sqft: '8,450',
    headline: 'Suspended 60 floors above the Arabian Sea with 270° uninterrupted horizon vistas.',
    description: 'A monument to modern structural brilliance perched high above Mumbai prime coastline. Built with floor-to-ceiling panoramic curved glass, an interior cantilevered heated infinity pool, and private biometric express elevator. Hand-selected bookmatched Calacatta marble flows throughout the residence.',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    ],
    features: [
      'Cantilevered Heated Infinity Pool Hanging Over Horizon',
      'Biometric Direct High-Speed Private Elevator',
      'Temperature-Controlled 400-Bottle Sommelier Cellar',
      'Sub-Zero & Wolf Professional Chef Culinary Suite',
      '6 Reserved Underground Multi-Vehicle EV Stalls',
      'Separate 3-Room Dedicated Residence Staff Wing'
    ],
    legalStatus: '100% Freehold Title Audited by Tier-1 Counsel',
    rera: 'PRM/KA/RERA/1251/310/PR/210323/004018',
    architect: 'Foster & Partners / Studio Lotus'
  };

  return (
    <section id="spotlight" className="py-28 px-6 bg-[#050E0D] relative overflow-hidden border-t border-[#1C2E2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[2px] bg-[#C6A868]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#D4BA7E]">
            Signature Residence Spotlight
          </span>
        </div>

        {/* Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Gallery Thumbnails */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            
            {/* Main Stage Image */}
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-[#C6A868]/30 rounded-sm group">
              <motion.img
                key={activeImageIndex}
                src={spotlightItem.gallery[activeImageIndex]}
                alt={spotlightItem.title}
                initial={{ opacity: 0.6, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center filter brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081312]/85 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1.5 bg-[#081312]/90 backdrop-blur-md border border-[#C6A868]/40 text-[9px] uppercase tracking-[0.25em] text-[#D4BA7E] font-sans font-medium">
                  Private Trophy Mandate
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-sans text-[#F5F1EA]/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A868]" />
                  {spotlightItem.location}
                </span>
                <span className="text-[#C6A868] text-[11px] uppercase tracking-wider">
                  Architect: {spotlightItem.architect}
                </span>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-3">
              {spotlightItem.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative aspect-[16/10] overflow-hidden border rounded-sm transition-all duration-300 ${
                    activeImageIndex === i
                      ? 'border-[#C6A868] scale-98 shadow-[0_0_12px_rgba(198,168,104,0.3)]'
                      : 'border-[#1C2E2A] opacity-60 hover:opacity-95'
                  }`}
                >
                  <img src={img} alt={`Gallery view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Architectural Narrative & Private Tour CTA */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            
            <div>
              {/* Category & Verified Pill */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#D4BA7E]">
                  {spotlightItem.categoryLabel}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C6A868]" />
                <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-[#8F9C98] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#C6A868]" />
                  {spotlightItem.legalStatus}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F1EA] leading-[1.15] tracking-tight mb-4">
                {spotlightItem.title}
              </h3>

              {/* Price */}
              <div className="mb-6 font-serif-display text-3xl text-[#D4BA7E] font-light">
                {formatPrice(spotlightItem, currentCurrency)}
                <span className="text-xs font-sans text-[#8F9C98] ml-2 tracking-widest uppercase">
                  (Private Treaty Valuation)
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#1C2E2A] mb-6 text-center">
                <div className="flex flex-col">
                  <span className="font-serif-display text-2xl text-[#F5F1EA] font-light">
                    {spotlightItem.beds}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8F9C98]">
                    Bedrooms
                  </span>
                </div>
                <div className="flex flex-col border-x border-[#1C2E2A]">
                  <span className="font-serif-display text-2xl text-[#F5F1EA] font-light">
                    {spotlightItem.baths}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8F9C98]">
                    Baths
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-display text-2xl text-[#F5F1EA] font-light">
                    {spotlightItem.sqft}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8F9C98]">
                    Super Built Sq Ft
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-[#A59E92] font-light leading-relaxed mb-6">
                {spotlightItem.description}
              </p>

              {/* Curated Key Amenities */}
              <div className="mb-8">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#DFBF85] block mb-3 font-medium">
                  Residence Specifications
                </span>
                <ul className="grid grid-cols-1 gap-2.5">
                  {spotlightItem.features.slice(0, 4).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#F5F1EA]/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A868] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Schedule Private Tour CTA */}
            <div className="pt-4 border-t border-[#1C2E2A] flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onScheduleTour(spotlightItem)}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] font-sans text-xs uppercase tracking-[0.2em] font-semibold text-center rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Schedule Private Tour</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </button>

              <span className="text-[10px] font-sans uppercase tracking-widest text-[#8F9C98] text-center sm:text-left">
                Chauffeur & NDA Provided
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
