import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Maximize2, ShieldCheck, MapPin, CheckCircle2, ArrowUpRight, FileText, Calendar } from 'lucide-react';
import { formatPrice } from '../utils/currency';

export default function PropertyModal({ property, isOpen, onClose, currentCurrency, onScheduleTour }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [tourBooked, setTourBooked] = useState(false);
  const [tourDate, setTourDate] = useState('');
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !property) return null;

  const handleBook = (e) => {
    e.preventDefault();
    setTourBooked(true);
  };

  const images = property.gallery || [property.image];

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#070708]/90 backdrop-blur-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#0B0B0C] border border-[#C9A96E]/30 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar with Title & Close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#C9A96E]/20 bg-[#111113]/80">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#DFBF85]">
                Residence Dossier • {property.categoryLabel}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A59E92] hover:text-[#F5F1EA] hover:bg-[#1C1C20] rounded-full transition-colors"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto flex-grow p-6 sm:p-8 space-y-8">
            
            {/* Gallery Stage */}
            <div className="space-y-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#C9A96E]/20 bg-[#161619]">
                <img
                  src={images[activeImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0B0B0C]/80 px-3 py-1 text-[10px] font-sans text-[#DFBF85] border border-[#C9A96E]/30 uppercase tracking-widest">
                  {property.city} Corridors
                </div>
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative aspect-[16/10] overflow-hidden border transition-all ${
                        activeImageIndex === i ? 'border-[#C9A96E] scale-95' : 'border-[#C9A96E]/15 opacity-60'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Header & Valuation Info */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#C9A96E]/15">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-sans mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.location}</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#F5F1EA] font-light">
                  {property.title}
                </h2>
                <p className="text-xs text-[#A59E92] font-sans mt-2 italic">
                  Architectural Provenance: {property.architect || 'Private Commission'}
                </p>
              </div>

              <div className="flex flex-col md:text-right">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#A59E92]">
                  Acquisition Valuation
                </span>
                <span className="font-serif-display text-3xl sm:text-4xl text-[#DFBF85] font-light mt-1">
                  {formatPrice(property, currentCurrency)}
                </span>
                <span className="text-[10px] font-sans text-[#A59E92]/80 mt-1">
                  RERA: {property.rera}
                </span>
              </div>
            </div>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-4 border border-[#C9A96E]/20 bg-[#121215]/60 text-center">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A59E92] block">Bedrooms</span>
                <span className="font-serif-display text-2xl text-[#F5F1EA]">{property.beds} Suites</span>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A59E92] block">Bathrooms</span>
                <span className="font-serif-display text-2xl text-[#F5F1EA]">{property.baths} Bath</span>
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A59E92] block">Super Area</span>
                <span className="font-serif-display text-2xl text-[#F5F1EA]">{property.sqft} sq ft</span>
              </div>
              <div className="col-span-3 sm:col-span-1">
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A59E92] block">Title Status</span>
                <span className="font-serif-display text-lg text-[#DFBF85] flex items-center justify-center gap-1 mt-1">
                  <ShieldCheck className="w-4 h-4 text-[#C9A96E]" /> 100% Verified
                </span>
              </div>
            </div>

            {/* Narrative & Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#DFBF85] mb-3">
                  Architectural Narrative
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#A59E92] font-light leading-relaxed">
                  {property.description}
                </p>
                <div className="mt-4 p-3.5 border border-[#C9A96E]/15 bg-[#141418] flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#DFBF85] shrink-0 mt-0.5" />
                  <p className="text-[11px] font-sans text-[#A59E92]">
                    Complete architectural blueprints, floor plates, and structural certificates are available under mutual Non-Disclosure Agreement.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#DFBF85] mb-3">
                  Curated Residence Features
                </h4>
                <ul className="space-y-2.5">
                  {property.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs font-sans text-[#F5F1EA]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Form or Confirmation */}
            <div className="pt-6 border-t border-[#C9A96E]/20">
              {tourBooked ? (
                <div className="p-6 bg-[#161619] border border-[#C9A96E]/40 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 text-[#DFBF85] mb-2" />
                  <h4 className="font-serif-display text-2xl text-[#F5F1EA]">
                    Private Viewing Requested
                  </h4>
                  <p className="text-xs font-sans text-[#A59E92] mt-1 max-w-md">
                    Thank you, {clientName || 'valued principal'}. Our private liaison will contact you to coordinate chauffeur transit and secure access.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBook} className="p-6 border border-[#C9A96E]/20 bg-[#111114]">
                  <h4 className="font-serif-display text-xl text-[#F5F1EA] mb-2">
                    Request Discreet Private Inspection
                  </h4>
                  <p className="text-xs font-sans text-[#A59E92] mb-4">
                    Appointments are limited and conducted exclusively with a Senior Advisory Partner.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Representative"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="bg-[#18181D] border border-[#C9A96E]/30 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                    <input
                      type="date"
                      required
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="bg-[#18181D] border border-[#C9A96E]/30 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                    <button
                      type="submit"
                      className="py-2.5 px-4 bg-gradient-to-r from-[#DFBF85] via-[#C9A96E] to-[#B39055] text-[#0B0B0C] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Confirm Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
