import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import FeaturedProperties from './components/FeaturedProperties';
import CuratedCollections from './components/CuratedCollections';
import WhySecureStay from './components/WhySecureStay';
import SignatureSpotlight from './components/SignatureSpotlight';
import Testimonials from './components/Testimonials';
import InsightsJournal from './components/InsightsJournal';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import PropertyModal from './components/PropertyModal';
import PrivateEnquiryModal from './components/PrivateEnquiryModal';
import InnerPagesBlueprint from './components/InnerPagesBlueprint';
import LoginModal from './components/LoginModal';
import { PROPERTIES } from './data/properties';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState('INR');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Progress Tracking for Top Luxury Progress Bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (searchParams) => {
    setActiveFilter(searchParams);
  };

  const handleSelectCollection = (category) => {
    setActiveFilter({ location: 'all', propertyType: category, budget: 'all' });
    const elem = document.getElementById('properties');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleTour = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="relative min-h-screen bg-[#081312] text-[#F5F1EA] selection:bg-[#C6A868]/25 selection:text-[#D4BA7E] font-sans antialiased overflow-x-hidden">
      
      {/* Top Luxury Scroll Progress Indicator Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#9E7B3B] via-[#DFBF85] to-[#F3E5AB] origin-left z-[99999] shadow-[0_0_12px_rgba(223,191,133,0.8)] pointer-events-none"
      />

      {/* Floating Scroll to Top Luxury Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-full bg-[#081312]/90 backdrop-blur-xl border border-[#C6A868]/40 hover:border-[#C6A868] text-[#D4BA7E] hover:text-[#F5F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(198,168,104,0.2)] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          >
            <ChevronUp className="w-5 h-5 stroke-[2] group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Luxury Magnetic Cursor */}
      <CustomCursor isModalOpen={Boolean(selectedProperty || isEnquiryOpen || isBlueprintOpen || activeArticle || isLoginOpen)} />

      {/* Intro Page Load Monogram Sequence */}
      <PageLoader />

      {/* Sticky Glass Navbar with Styled Links and Login only */}
      <Navbar
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* 1. Hero Section with Cinematic Background & Floating Filter Bar */}
      <Hero
        onSearchSubmit={handleHeroSearch}
        currentCurrency={currentCurrency}
      />

      {/* 2. Brand Statement & Animated Counters */}
      <BrandStatement />

      {/* 3. Featured Properties Editorial Grid */}
      <FeaturedProperties
        properties={PROPERTIES}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        currentCurrency={currentCurrency}
        activeFilter={activeFilter}
      />

      {/* 4. Curated Collections Full-Width Tiles */}
      <CuratedCollections
        onSelectCollection={handleSelectCollection}
      />

      {/* 5. Why Secure Stay (4 Institutional Pillars) */}
      <WhySecureStay
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* 6. Signature Property Spotlight (Split Screen) */}
      <SignatureSpotlight
        property={PROPERTIES[0]}
        onScheduleTour={handleScheduleTour}
        currentCurrency={currentCurrency}
      />

      {/* 7. Client Testimonials (Minimalist Carousel) */}
      <Testimonials />

      {/* 8. Insights / Journal (3 Editorial Articles) */}
      <InsightsJournal
        onReadArticle={(article) => setActiveArticle(article)}
      />

      {/* 9. Final CTA (Private Conversation & Concierge) */}
      <FinalCTA
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* 10. Refined Footer with Desks & Legal Disclaimers */}
      <Footer
        onOpenBlueprint={() => setIsBlueprintOpen(true)}
      />

      {/* Interactive Modals */}
      <PropertyModal
        property={selectedProperty}
        isOpen={Boolean(selectedProperty)}
        onClose={() => setSelectedProperty(null)}
        currentCurrency={currentCurrency}
        onScheduleTour={handleScheduleTour}
      />

      <PrivateEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <InnerPagesBlueprint
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Article Reader Quick Lightbox */}
      {activeArticle && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#081312]/92 backdrop-blur-2xl">
          <div className="relative w-full max-w-2xl bg-[#0B1715] border border-[#C6A868]/40 p-8 my-auto max-h-[85vh] overflow-y-auto rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(198,168,104,0.15)]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-[#A59E92] hover:text-[#D4BA7E] text-xs font-sans uppercase tracking-[0.2em] transition-colors"
            >
              Close ✕
            </button>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A868] block mb-2 font-medium">
              {activeArticle.category} • {activeArticle.readTime}
            </span>
            <h3 className="font-serif-display text-3xl text-[#F5F1EA] mb-4">
              {activeArticle.title}
            </h3>
            <div className="aspect-[16/9] w-full overflow-hidden mb-6 border border-[#C6A868]/20 rounded-sm">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-sans text-[#A59E92] leading-relaxed mb-6 font-light">
              {activeArticle.summary}
            </p>
            <p className="text-xs font-sans text-[#DFBF85] border-t border-[#1C2E2A] pt-4">
              Authored by {activeArticle.author} — Secure Stay Research Monograph. Complete monograph available upon client request.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
