import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MapPin, Home, Tag, ArrowRight, Check } from 'lucide-react';

export default function Hero({ onSearchSubmit, currentCurrency }) {
  const [location, setLocation] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [budget, setBudget] = useState('all');

  const [activeDropdown, setActiveDropdown] = useState(null); // 'location' | 'type' | 'budget' | null
  const searchBarRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll Parallax for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0px', '45px']);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locationOptions = [
    { value: 'all', label: 'All Prime Locations' },
    { value: 'Mumbai', label: 'Mumbai (Worli & Altamount)' },
    { value: 'Goa', label: 'North Goa (Assagao & Anjuna)' },
    { value: 'Delhi NCR', label: 'New Delhi (Lutyens LBZ)' },
    { value: 'Alibaug', label: 'Alibaug (Waterfront)' },
    { value: 'Bengaluru', label: 'Bengaluru (Indiranagar)' },
  ];

  const propertyTypeOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'penthouses', label: 'Skyline Penthouses' },
    { value: 'villas', label: 'Private Coastal Villas' },
    { value: 'estates', label: 'Heritage Estates' },
    { value: 'waterfront', label: 'Waterfront Sanctuaries' },
  ];

  const budgetOptions = [
    { value: 'all', label: 'Any Range' },
    {
      value: 'tier1',
      label: currentCurrency === 'INR' ? '₹25 Cr – ₹45 Cr' : currentCurrency === 'USD' ? '$3M – $5.5M' : 'AED 11M – 20M',
    },
    {
      value: 'tier2',
      label: currentCurrency === 'INR' ? '₹45 Cr – ₹80 Cr' : currentCurrency === 'USD' ? '$5.5M – $10M' : 'AED 20M – 36M',
    },
    {
      value: 'tier3',
      label: currentCurrency === 'INR' ? '₹80 Cr+ (Trophy Estates)' : currentCurrency === 'USD' ? '$10M+ (Trophy)' : 'AED 36M+ (Trophy)',
    },
  ];

  const getSelectedLabel = (options, value) => {
    const found = options.find((opt) => opt.value === value);
    return found ? found.label : options[0].label;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onSearchSubmit) {
      onSearchSubmit({ location, propertyType, budget });
    }
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProperties = () => {
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Background Cinematic Visual with Smooth Scroll Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none origin-top"
      >
        <img
          src="./hero-villa.jpg"
          alt="Ultra-luxury modern villa with infinity pool at sunset overlooking sea"
          className="w-full h-full object-cover object-[70%_center] sm:object-center filter contrast-[1.05]"
        />
        {/* Layered Obsidian-Green Gradients to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081312] via-[#081312]/85 to-transparent w-full md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081312] via-transparent to-[#081312]/40" />
      </motion.div>

      {/* Left-Aligned Hero Content with Scroll Fade */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto"
      >
        <div className="max-w-2xl text-left">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] tracking-tight text-[#F5F1EA]"
          >
            Where Trust Meets<br />
            <span className="italic text-[#D4BA7E] font-normal">
              Architectural Grandeur.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg font-sans text-[#C5C0B6] max-w-lg font-light leading-relaxed"
          >
            Discover exceptional homes, premium investments, and lifestyle spaces curated for a better tomorrow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <button
              onClick={scrollToProperties}
              className="bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-md inline-flex items-center gap-2.5 transition-all shadow-md active:scale-95 group"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Filter Bar with Custom Animated Luxury Dropdowns */}
      <div
        ref={searchBarRef}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-10 sm:mt-16"
      >
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#071412]/85 backdrop-blur-2xl border border-[#C6A868]/30 rounded-2xl p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_25px_rgba(198,168,104,0.1)] flex flex-col md:flex-row items-center gap-2 sm:gap-3 transition-all duration-500 hover:border-[#C6A868]/60 hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_35px_rgba(198,168,104,0.18)] before:absolute before:inset-x-8 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C6A868]/50 before:to-transparent"
        >
          {/* Location Selector */}
          <div className="relative w-full md:w-1/3">
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-300 group ${
                activeDropdown === 'location'
                  ? 'bg-[#0E201D] border border-[#C6A868]/60 shadow-[0_0_15px_rgba(198,168,104,0.15)]'
                  : 'hover:bg-[#0E201D]/70 border border-transparent'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#C6A868]/10 border border-[#C6A868]/25 flex items-center justify-center shrink-0 group-hover:bg-[#C6A868]/20 group-hover:border-[#C6A868]/50 transition-all">
                <MapPin className="w-4 h-4 text-[#D4BA7E] stroke-[1.75]" />
              </div>
              <div className="flex flex-col text-left w-full min-w-0">
                <span className="text-[9.5px] uppercase font-sans tracking-[0.22em] text-[#C6A868] font-medium block mb-0.5">
                  LOCATION
                </span>
                <span className="text-[14px] sm:text-[15px] font-serif text-[#F5F1EA] group-hover:text-[#D4BA7E] transition-colors truncate block leading-tight font-normal">
                  {getSelectedLabel(locationOptions, location)}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#C6A868]/70 transition-transform duration-300 shrink-0 ${
                  activeDropdown === 'location' ? 'rotate-180 text-[#D4BA7E]' : 'group-hover:text-[#F5F1EA]'
                }`}
              />
            </button>

            {/* Custom Animated Location Popover */}
            <AnimatePresence>
              {activeDropdown === 'location' && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-full sm:w-80 bg-[#071513]/98 backdrop-blur-3xl border border-[#C6A868]/35 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(198,168,104,0.12)] p-2 z-50 overflow-hidden"
                >
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#C6A868] px-3 py-2 font-medium border-b border-[#1C2E2A] flex items-center justify-between">
                    <span>Select Prime Corridor</span>
                    <span className="text-[10px] text-[#8F9C98] font-serif italic">Exclusive Hubs</span>
                  </div>
                  <div className="max-h-56 overflow-y-auto py-1 space-y-0.5 custom-scrollbar">
                    {locationOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => {
                          setLocation(opt.value);
                          setActiveDropdown(null);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-sans rounded-lg transition-all text-left ${
                          location === opt.value
                            ? 'bg-[#122A26] text-[#D4BA7E] font-medium border border-[#C6A868]/30'
                            : 'text-[#C5C0B6] hover:bg-[#0E201D] hover:text-[#F5F1EA]'
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        {location === opt.value && <Check className="w-3.5 h-3.5 text-[#C6A868] shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#C6A868]/30 to-transparent" />

          {/* Property Type Selector */}
          <div className="relative w-full md:w-1/3">
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-300 group ${
                activeDropdown === 'type'
                  ? 'bg-[#0E201D] border border-[#C6A868]/60 shadow-[0_0_15px_rgba(198,168,104,0.15)]'
                  : 'hover:bg-[#0E201D]/70 border border-transparent'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#C6A868]/10 border border-[#C6A868]/25 flex items-center justify-center shrink-0 group-hover:bg-[#C6A868]/20 group-hover:border-[#C6A868]/50 transition-all">
                <Home className="w-4 h-4 text-[#D4BA7E] stroke-[1.75]" />
              </div>
              <div className="flex flex-col text-left w-full min-w-0">
                <span className="text-[9.5px] uppercase font-sans tracking-[0.22em] text-[#C6A868] font-medium block mb-0.5">
                  PROPERTY TYPE
                </span>
                <span className="text-[14px] sm:text-[15px] font-serif text-[#F5F1EA] group-hover:text-[#D4BA7E] transition-colors truncate block leading-tight font-normal">
                  {getSelectedLabel(propertyTypeOptions, propertyType)}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#C6A868]/70 transition-transform duration-300 shrink-0 ${
                  activeDropdown === 'type' ? 'rotate-180 text-[#D4BA7E]' : 'group-hover:text-[#F5F1EA]'
                }`}
              />
            </button>

            {/* Custom Animated Property Type Popover */}
            <AnimatePresence>
              {activeDropdown === 'type' && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-full sm:w-80 bg-[#071513]/98 backdrop-blur-3xl border border-[#C6A868]/35 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(198,168,104,0.12)] p-2 z-50 overflow-hidden"
                >
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#C6A868] px-3 py-2 font-medium border-b border-[#1C2E2A] flex items-center justify-between">
                    <span>Select Typology</span>
                    <span className="text-[10px] text-[#8F9C98] font-serif italic">Category</span>
                  </div>
                  <div className="max-h-56 overflow-y-auto py-1 space-y-0.5 custom-scrollbar">
                    {propertyTypeOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => {
                          setPropertyType(opt.value);
                          setActiveDropdown(null);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-sans rounded-lg transition-all text-left ${
                          propertyType === opt.value
                            ? 'bg-[#122A26] text-[#D4BA7E] font-medium border border-[#C6A868]/30'
                            : 'text-[#C5C0B6] hover:bg-[#0E201D] hover:text-[#F5F1EA]'
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        {propertyType === opt.value && <Check className="w-3.5 h-3.5 text-[#C6A868] shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#C6A868]/30 to-transparent" />

          {/* Budget Range Selector */}
          <div className="relative w-full md:w-1/3">
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-300 group ${
                activeDropdown === 'budget'
                  ? 'bg-[#0E201D] border border-[#C6A868]/60 shadow-[0_0_15px_rgba(198,168,104,0.15)]'
                  : 'hover:bg-[#0E201D]/70 border border-transparent'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#C6A868]/10 border border-[#C6A868]/25 flex items-center justify-center shrink-0 group-hover:bg-[#C6A868]/20 group-hover:border-[#C6A868]/50 transition-all">
                <Tag className="w-4 h-4 text-[#D4BA7E] stroke-[1.75]" />
              </div>
              <div className="flex flex-col text-left w-full min-w-0">
                <span className="text-[9.5px] uppercase font-sans tracking-[0.22em] text-[#C6A868] font-medium block mb-0.5">
                  BUDGET RANGE
                </span>
                <span className="text-[14px] sm:text-[15px] font-serif text-[#F5F1EA] group-hover:text-[#D4BA7E] transition-colors truncate block leading-tight font-normal">
                  {getSelectedLabel(budgetOptions, budget)}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#C6A868]/70 transition-transform duration-300 shrink-0 ${
                  activeDropdown === 'budget' ? 'rotate-180 text-[#D4BA7E]' : 'group-hover:text-[#F5F1EA]'
                }`}
              />
            </button>

            {/* Custom Animated Budget Popover */}
            <AnimatePresence>
              {activeDropdown === 'budget' && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-full sm:w-80 bg-[#071513]/98 backdrop-blur-3xl border border-[#C6A868]/35 rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(198,168,104,0.12)] p-2 z-50 overflow-hidden"
                >
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#C6A868] px-3 py-2 font-medium border-b border-[#1C2E2A] flex items-center justify-between">
                    <span>Select Valuation Tier</span>
                    <span className="text-[10px] text-[#8F9C98] font-serif italic">Capital</span>
                  </div>
                  <div className="max-h-56 overflow-y-auto py-1 space-y-0.5 custom-scrollbar">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => {
                          setBudget(opt.value);
                          setActiveDropdown(null);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-sans rounded-lg transition-all text-left ${
                          budget === opt.value
                            ? 'bg-[#122A26] text-[#D4BA7E] font-medium border border-[#C6A868]/30'
                            : 'text-[#C5C0B6] hover:bg-[#0E201D] hover:text-[#F5F1EA]'
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        {budget === opt.value && <Check className="w-3.5 h-3.5 text-[#C6A868] shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Button with Shimmer & Scale Effect */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="relative overflow-hidden w-full md:w-auto px-8 sm:px-9 py-3.5 bg-gradient-to-r from-[#C6A868] via-[#E0C58A] to-[#C6A868] hover:from-[#D4BA7E] hover:to-[#E5CB95] text-[#071110] font-semibold text-xs sm:text-[13px] rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_25px_rgba(198,168,104,0.35)] shrink-0 uppercase tracking-[0.2em] group"
          >
            {/* Shimmer Sheen on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ translateX: '100%' }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
            />
            <Search className="w-4 h-4 stroke-[2.2] text-[#071110] group-hover:scale-110 transition-transform" />
            <span>Search</span>
          </motion.button>
        </motion.form>

        {/* Mouse Scroll Prompt at Bottom */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C6A868]/80 font-medium">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-[#C6A868]/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-[#D4BA7E]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
