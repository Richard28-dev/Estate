import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Compass, Building, UserCheck, PhoneCall, Check, ArrowRight, Code2, Sparkles } from 'lucide-react';

export default function InnerPagesBlueprint({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('listings');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const blueprints = {
    listings: {
      title: 'Page 1: The Collection (Listings Catalog)',
      path: '/properties or /collection',
      purpose: 'A comprehensive, high-performance catalog engineered for rapid filtering without losing the high-end editorial gravitas.',
      sections: [
        {
          name: '1. Sticky Editorial Header & Active Filter Bar',
          details: 'Discreet search, multi-select corridors (Worli, Bandra, Assagao, Lutyens LBZ, Alibaug), property typologies, price band slider, and "Off-Market Only" toggle for vetted HNIs.'
        },
        {
          name: '2. View Mode Toggle (Editorial Grid / Split Map View)',
          details: 'Allows switching between an oversized asymmetric 2-column editorial magazine spread and an interactive dark-themed Mapbox view highlighting prime coastal/urban enclaves.'
        },
        {
          name: '3. Sorting Engine (Discretion & Rarity)',
          details: 'Options: "Rarity Index" (highest price per sq ft & irreplaceable location), "Valuation: High to Low", "Recently Verified", and "Ready for Immediate Conveyance".'
        },
        {
          name: '4. Property Card Enhanced States',
          details: 'Displays high-res carousel, RERA number, verified title seal, legal firm audit stamp, beds/baths/sqft, and instant "Request Private Dossier" action.'
        },
        {
          name: '5. Confidential Off-Market Teaser Banner',
          details: 'At every 6th card: "Looking for unlisted properties? 65% of our portfolio is strictly under NDA. Unlock off-market access."'
        }
      ],
      techStack: 'React Router / Next.js Pages, URL query state preservation (?corridor=worli&type=penthouses), Framer Motion layout animations, Mapbox GL dark theme.'
    },
    detail: {
      title: 'Page 2: Property Dossier (Single Residence Detail)',
      path: '/properties/:slug (e.g. /properties/worli-sky-seraphim)',
      purpose: 'The digital equivalent of a hand-bound leather property monograph. Every detail conveys multi-million dollar craftsmanship.',
      sections: [
        {
          name: '1. Full-Bleed Cinematic Media Hero & Gallery Grid',
          details: 'Full-screen hero image/video with lightbox trigger, accompanied by a curated 12-image architectural spread (exterior dusk, salon, master retreat, cellar, infinity pool).'
        },
        {
          name: '2. Title Assurance & Due Diligence Header',
          details: 'Institutional credentials: RERA registration, Freehold Title Confirmation, Name of Tier-1 Legal Counsel conducting title search, and Sanad status.'
        },
        {
          name: '3. Architectural Pedigree & Narrative',
          details: 'Architect statement, structural engineer, acoustic isolation rating, double-height ceiling dimensions, orientation relative to sun and sea breeze.'
        },
        {
          name: '4. Specification Matrix & Material Finishes',
          details: 'Book-matched Italian marble origin, kitchen appliances (Sub-Zero/Wolf/Gaggenau), sanitary ware (Dornbracht platinum), smart home automation protocol (Crestron/Lutron).'
        },
        {
          name: '5. Interactive Architectural Floor Plates & Plans',
          details: 'Schematic floor plans with toggleable dimensions (sq ft / sq m) and 3D space orientation. High-res PDF download available upon verified email verification.'
        },
        {
          name: '6. Private Viewing Concierge Sticky Sidebar',
          details: 'Floating card with direct advisor contact, calendar date picker for viewing, chauffeur/speedboat transport request, and WhatsApp direct line.'
        },
        {
          name: '7. Micro-Location & Neighborhood Intelligence',
          details: 'Curated guide to private helipads, diplomatic clubs, golf courses, international schools, and private aviation terminals within proximity.'
        }
      ],
      techStack: 'Image lightbox (Yet Another React Lightbox / Embla), dynamic OG meta tags for WhatsApp/iMessage rich sharing, PDF generation download.'
    },
    about: {
      title: 'Page 3: The Private Office (About Us & Advisory)',
      path: '/about or /private-office',
      purpose: 'Establishes institutional credibility, sovereign fiduciary responsibility, and 15-year legacy of ultra-discreet advisory.',
      sections: [
        {
          name: '1. The Founding Creed & Heritage',
          details: 'The origins of Secure Stay: bridging the gap between chaotic transactional real estate and private wealth fiduciary standards.'
        },
        {
          name: '2. Leadership & Senior Partners',
          details: 'Biographies of managing partners with backgrounds in private equity, supreme court real estate law, and luxury architectural curation.'
        },
        {
          name: '3. The 40-Point Title Due Diligence Protocol',
          details: 'Interactive visual breakdown of the vetting pipeline: 30-year title search, encumbrance certificate audit, RERA compliance, structural stability certification, and coastal regulation clearances.'
        },
        {
          name: '4. Institutional Advisory Council & Legal Partners',
          details: 'Highlighting partnerships with tier-1 legal institutions, tax counsel, and heritage conservation architects.'
        },
        {
          name: '5. Press & Monograph Features',
          details: 'Select quotes from Financial Times, Architectural Digest, Bloomberg, and Robb Report.'
        }
      ],
      techStack: 'Editorial typography layout, SVG vector diagrams for the 40-point title audit, client quote accordions.'
    },
    contact: {
      title: 'Page 4: Concierge Desk (Confidential Contact & Intake)',
      path: '/contact or /concierge',
      purpose: 'A friction-free, ultra-secure contact hub for ultra-HNIs, family office CIOs, and NRI buyers.',
      sections: [
        {
          name: '1. Interactive Confidential Mandate Intake',
          details: 'Fields: Principal name, Family Office / Entity name, Acquisition vs Divestment, target geography, capital allocation bracket, and Bilateral NDA requirement.'
        },
        {
          name: '2. Instant Encrypted Channels',
          details: 'Direct VIP WhatsApp desk with instant response guarantee (<15 min), Signal protocol phone line, and secure PGP key for digital correspondence.'
        },
        {
          name: '3. Global Private Office Network',
          details: 'Interactive map and physical suite addresses in Mumbai (BKC), New Delhi (Golf Links), London (Mayfair), and Dubai (DIFC) with private appointment booking.'
        },
        {
          name: '4. Chauffeur & Private Viewing Coordination',
          details: 'Form to arrange Rolls-Royce/Mercedes Maybach transit or chartered speedboat from Gateway of India to Alibaug for estate inspections.'
        }
      ],
      techStack: 'Form validation, automated mutual NDA generation, Webhooks to internal CRM / secure notification dispatch.'
    }
  };

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 bg-[#070708]/92 backdrop-blur-xl overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-5xl bg-[#0B0B0C] border border-[#C9A96E]/35 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#C9A96E]/20 bg-[#111114]">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#DFBF85]" />
              <div>
                <h3 className="font-serif-display text-2xl text-[#F5F1EA] font-light">
                  Inner Pages Architecture Blueprint
                </h3>
                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C9A96E]">
                  Complete Layout & Feature Specifications for Development
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A59E92] hover:text-[#F5F1EA] rounded-full hover:bg-[#1C1C20] transition-colors"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex overflow-x-auto border-b border-[#C9A96E]/15 bg-[#0e0e11] px-6 sm:px-8 scrollbar-none">
            {[
              { id: 'listings', label: '1. The Collection (Listings)', icon: <Building className="w-4 h-4" /> },
              { id: 'detail', label: '2. Property Dossier (Detail)', icon: <Layers className="w-4 h-4" /> },
              { id: 'about', label: '3. The Private Office (About)', icon: <UserCheck className="w-4 h-4" /> },
              { id: 'contact', label: '4. Concierge Desk (Contact)', icon: <PhoneCall className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3.5 text-xs font-sans uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#C9A96E] text-[#DFBF85] bg-[#16161a]'
                    : 'border-transparent text-[#A59E92] hover:text-[#F5F1EA]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-grow">
            {/* Title & Route */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#C9A96E]/15">
              <div>
                <h4 className="font-serif-display text-3xl text-[#F5F1EA] font-light">
                  {blueprints[activeTab].title}
                </h4>
                <p className="text-xs font-sans text-[#A59E92] mt-1 font-light">
                  {blueprints[activeTab].purpose}
                </p>
              </div>
              <div className="font-mono text-xs text-[#DFBF85] bg-[#141418] px-3 py-1.5 border border-[#C9A96E]/30 rounded self-start sm:self-auto">
                Route: {blueprints[activeTab].path}
              </div>
            </div>

            {/* Sections Breakdown */}
            <div>
              <h5 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#DFBF85] mb-4 font-medium">
                Component Breakdown & Section Hierarchy
              </h5>
              <div className="space-y-3">
                {blueprints[activeTab].sections.map((sec, i) => (
                  <div
                    key={i}
                    className="p-4 border border-[#C9A96E]/15 bg-[#121215] flex flex-col gap-1.5 transition-all hover:border-[#C9A96E]/40"
                  >
                    <div className="flex items-center gap-2 text-xs font-sans font-medium text-[#F5F1EA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                      <span>{sec.name}</span>
                    </div>
                    <p className="text-xs font-sans text-[#A59E92] pl-3.5 leading-relaxed font-light">
                      {sec.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Implementation Stack */}
            <div className="p-4 border border-[#C9A96E]/20 bg-[#16161a] flex items-start gap-3">
              <Code2 className="w-5 h-5 text-[#DFBF85] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#DFBF85] block mb-1">
                  Technical Architecture & State Management
                </span>
                <p className="text-xs font-sans text-[#A59E92] font-light leading-relaxed">
                  {blueprints[activeTab].techStack}
                </p>
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 border-t border-[#C9A96E]/20 bg-[#111114] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] font-sans text-[#A59E92] text-center sm:text-left">
              Ready to be implemented as standalone routes or Next.js/React Router pages.
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#C9A96E] text-[#0B0B0C] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#DFBF85] transition-colors"
            >
              Close Blueprint
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
