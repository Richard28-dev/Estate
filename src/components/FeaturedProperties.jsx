import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Bed, Bath, Maximize2, ShieldCheck, MapPin } from 'lucide-react';
import { formatPrice } from '../utils/currency';

export default function FeaturedProperties({ properties, onSelectProperty, currentCurrency, activeFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Curations' },
    { id: 'penthouses', label: 'Skyline Penthouses' },
    { id: 'villas', label: 'Coastal Villas' },
    { id: 'estates', label: 'Heritage Estates' },
    { id: 'waterfront', label: 'Waterfront Living' },
  ];

  const filteredProperties = properties.filter((prop) => {
    // If external activeFilter is passed from hero search
    if (activeFilter && activeFilter.location !== 'all' && !prop.location.toLowerCase().includes(activeFilter.location.toLowerCase()) && !prop.city.toLowerCase().includes(activeFilter.location.toLowerCase())) {
      return false;
    }
    if (activeFilter && activeFilter.propertyType !== 'all' && prop.category !== activeFilter.propertyType) {
      return false;
    }
    // Category tabs
    if (selectedCategory !== 'all' && prop.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="properties" className="py-28 px-6 bg-[#081312] relative border-t border-[#1C2E2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#1C2E2A] gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C6A868]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#D4BA7E]">
                Curated Portfolio
              </span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F1EA] tracking-tight">
              Featured <span className="italic text-[#D4BA7E]">Residences</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[11px] font-sans uppercase tracking-[0.2em] transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0E1D1B] text-[#D4BA7E] border-b-2 border-[#C6A868]'
                    : 'text-[#8F9C98] hover:text-[#F5F1EA] border-b-2 border-transparent hover:border-[#C6A868]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Properties Staggered / Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          <AnimatePresence>
            {filteredProperties.map((property, idx) => (
              <motion.article
                key={property.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.75, delay: (idx % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProperty(property)}
                className="group cursor-pointer flex flex-col bg-[#0B1715]/70 border border-[#1C2E2A] hover:border-[#C6A868]/50 transition-all duration-700 relative overflow-hidden rounded-sm"
              >
                {/* Image Container with Slow Zoom */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#10221F]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover object-center img-zoom-hover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081312] via-[#081312]/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-[#081312]/90 backdrop-blur-md border border-[#C6A868]/30 text-[9px] uppercase tracking-[0.25em] text-[#D4BA7E] font-sans">
                      {property.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#081312]/90 backdrop-blur-md border border-[#1C2E2A] text-[9px] uppercase tracking-[0.15em] text-[#8F9C98] font-sans">
                      <ShieldCheck className="w-3 h-3 text-[#C6A868]" /> Verified
                    </span>
                  </div>

                  {/* "View Residence" Slide-in Trigger on Hover */}
                  <div className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#C6A868] text-[#081312] text-[10px] font-sans uppercase tracking-[0.25em] font-semibold rounded-sm">
                      View Residence
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex flex-col flex-grow justify-between relative">
                  
                  {/* Gold Underline that appears/expands on hover */}
                  <span className="absolute top-0 left-0 w-0 h-[1.5px] bg-[#C6A868] transition-all duration-700 ease-out group-hover:w-full" />

                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#8F9C98] font-sans tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C6A868] stroke-[1.5]" />
                      <span>{property.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F5F1EA] group-hover:text-[#D4BA7E] transition-colors duration-300 font-normal leading-snug">
                      {property.title}
                    </h3>

                    {/* Short Teaser */}
                    <p className="mt-2.5 text-xs text-[#A5A096] font-sans font-light line-clamp-2 leading-relaxed">
                      {property.headline}
                    </p>
                  </div>

                  {/* Specs & Valuation */}
                  <div className="mt-6 pt-5 border-t border-[#1C2E2A] flex items-center justify-between">
                    
                    {/* Architectural Specs */}
                    <div className="flex items-center gap-4 text-[11px] text-[#8F9C98] font-sans">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#C6A868] stroke-[1.25]" />
                        {property.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-[#C6A868] stroke-[1.25]" />
                        {property.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C6A868] stroke-[1.25]" />
                        {property.sqft} sq ft
                      </span>
                    </div>

                    {/* Price with Currency support */}
                    <div className="font-serif-display text-xl sm:text-2xl text-[#D4BA7E] font-light">
                      {formatPrice(property, currentCurrency)}
                    </div>

                  </div>

                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20 border border-[#C9A96E]/20 bg-[#121214]/50 p-12">
            <p className="font-serif-display text-2xl text-[#EAE4D7]">
              No public residences found matching your exact filter parameters.
            </p>
            <p className="text-xs font-sans text-[#A59E92] mt-3 tracking-widest uppercase">
              Our off-market desk holds 28+ confidential properties not displayed online.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-6 px-6 py-2.5 border border-[#C9A96E] text-xs font-sans uppercase tracking-[0.2em] text-[#DFBF85] hover:bg-[#C9A96E] hover:text-[#0B0B0C] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
