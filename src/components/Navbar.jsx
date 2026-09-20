import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLogin, onOpenEnquiry, onOpenBlueprint }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Background blur navbar style
      setIsScrolled(window.scrollY > 30);

      // 2. Active Scroll Spy detection
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page automatically activates Contact
      if (scrollY + windowHeight >= docHeight - 200) {
        setActiveTab('Contact');
        return;
      }

      const contactSection = document.getElementById('contact');
      const aboutSection = document.getElementById('why-us');
      const propertiesSection = document.getElementById('properties');

      // Detection threshold below the fixed navbar
      const threshold = 220;

      if (contactSection && contactSection.getBoundingClientRect().top <= threshold) {
        setActiveTab('Contact');
      } else if (aboutSection && aboutSection.getBoundingClientRect().top <= threshold) {
        setActiveTab('About');
      } else if (propertiesSection && propertiesSection.getBoundingClientRect().top <= threshold) {
        setActiveTab('Properties');
      } else {
        setActiveTab('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Properties', href: '#properties' },
    { label: 'About', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveTab(link.label);
    setMobileMenuOpen(false);

    if (link.label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = link.href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        const navHeight = 75;
        const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#081312]/92 backdrop-blur-xl border-b border-[#1C2E2A] py-3.5 shadow-2xl'
            : 'bg-[#081312]/75 backdrop-blur-md border-b border-[#1C2E2A]/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Identity / Official Logo (Secure Stay Private Limited) */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, { label: 'Home', href: '#' })}
            className="flex items-center gap-3 sm:gap-3.5 group transition-all duration-300 select-none py-1"
          >
            {/* Seamless Transparent Monogram Emblem */}
            <div className="relative shrink-0 flex items-center justify-center">
              <img
                src="./emblem.png"
                alt="Secure Stay Official Logo"
                className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,186,126,0.25)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Vertical Golden Separator Line */}
            <div className="w-[1.5px] h-9 sm:h-10 bg-gradient-to-b from-[#C6A868]/30 via-[#D4BA7E] to-[#C6A868]/30 rounded-full shrink-0 shadow-[0_0_6px_rgba(212,186,126,0.25)]" />

            {/* Razor-Sharp High-DPI Typography - Balanced and Center-Aligned */}
            <div className="flex flex-col items-center justify-center text-center">
              {/* Line 1: SECURE STAY */}
              <span className="font-serif-display text-[19px] sm:text-[21px] font-bold tracking-[0.16em] text-[#F5F1EA] leading-none group-hover:text-[#D4BA7E] transition-colors whitespace-nowrap">
                SECURE STAY
              </span>

              {/* Line 2: — PRIVATE LIMITED — (Equal flanking lines extending symmetrically) */}
              <div className="flex items-center justify-center w-full gap-2 my-1">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A868] to-[#C6A868]" />
                <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#D4BA7E] font-sans font-semibold uppercase leading-none whitespace-nowrap">
                  PRIVATE LIMITED
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A868] to-[#C6A868]" />
              </div>

              {/* Line 3: Managed with Trust • Delivered with Care */}
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.05em] text-[#9EA9A6] font-sans font-normal leading-none whitespace-nowrap">
                Managed with Trust • Delivered with Care
              </span>
            </div>
          </a>

          {/* Center Links (Stylized Editorial Typography with Active Scroll Indicator) */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-serif-display text-[17px] tracking-[0.09em] transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#D4BA7E] font-medium drop-shadow-[0_0_8px_rgba(212,186,126,0.35)]'
                      : 'text-[#C5C0B6]/80 hover:text-[#F5F1EA]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C6A868] via-[#E2C98E] to-[#C6A868] rounded-full shadow-[0_0_10px_rgba(198,168,104,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1EA] hover:text-[#C6A868] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#081312]/98 backdrop-blur-2xl pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A868] font-sans border-b border-[#1C2E2A] pb-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`font-serif-display text-3xl tracking-wide transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#D4BA7E]' : 'text-[#F5F1EA] hover:text-[#C6A868]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C6A868] shadow-[0_0_10px_rgba(198,168,104,0.8)]" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
