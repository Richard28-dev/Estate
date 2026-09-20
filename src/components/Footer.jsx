import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBlueprint, onOpenEnquiry }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06121E] text-[#F5F1EA] pt-20 pb-12 border-t border-[#122334] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 items-start">
          
          {/* Column 1: Brand Logo, Description, Registered Corporate Entity */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start text-left">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-3.5 mb-6 select-none">
              <img
                src="./emblem.png"
                alt="Secure Stay Official Crest"
                className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(198,168,104,0.25)]"
              />
              <div className="w-[1.5px] h-9 sm:h-10 bg-gradient-to-b from-[#C6A868]/30 via-[#D4BA7E] to-[#C6A868]/30 rounded-full shrink-0 shadow-[0_0_6px_rgba(212,186,126,0.25)]" />
              
              <div className="flex flex-col items-center justify-center text-center">
                <span className="font-serif-display text-[19px] sm:text-[21px] font-bold tracking-[0.16em] text-[#F5F1EA] leading-none whitespace-nowrap">
                  SECURE STAY
                </span>
                <div className="flex items-center justify-center w-full gap-2 my-1">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A868] to-[#C6A868]" />
                  <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#D4BA7E] font-sans font-semibold uppercase leading-none whitespace-nowrap">
                    PRIVATE LIMITED
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A868] to-[#C6A868]" />
                </div>
                <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.05em] text-[#9EA9A6] font-sans font-normal leading-none whitespace-nowrap">
                  Managed with Trust • Delivered with Care
                </span>
              </div>
            </div>

            {/* Paragraph Text */}
            <p className="text-sm sm:text-[14.5px] text-[#A6B7C6] font-normal leading-relaxed max-w-md mb-6">
              India's premier end-to-end residential property services company. Providing guaranteed on-time rent, 100% verified background checks, and seamless property care.
            </p>

            {/* Registered Corporate Entity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#C6A868]/30 bg-[#0A1B2C]/90 text-xs sm:text-[13px] text-[#E5ECF2] shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <ShieldCheck className="w-4 h-4 text-[#D4BA7E] stroke-[2]" />
              <span className="font-medium tracking-wide">Registered Corporate Entity</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 lg:pl-6">
            <h4 className="text-base sm:text-lg font-bold text-[#F5F1EA] mb-1.5 tracking-tight">
              Quick Links
            </h4>
            <div className="w-7 h-[2px] bg-[#C6A868] mb-6 rounded-full" />

            <ul className="space-y-3.5 text-sm sm:text-[14.5px] text-[#B0C0CE]">
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  About SecureStay
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  onClick={(e) => scrollToSection(e, 'properties')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  All Properties
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onOpenEnquiry) {
                      e.preventDefault();
                      onOpenEnquiry();
                    } else {
                      scrollToSection(e, 'contact');
                    }
                  }}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  List Your Property
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-4">
            <h4 className="text-base sm:text-lg font-bold text-[#F5F1EA] mb-1.5 tracking-tight">
              Our Services
            </h4>
            <div className="w-7 h-[2px] bg-[#C6A868] mb-6 rounded-full" />

            <ul className="space-y-3.5 text-sm sm:text-[14.5px] text-[#B0C0CE]">
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Guaranteed Rent Payouts
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Tenant KYC Verification
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Property Inspections & Repairs
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Legal Rental Agreements
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  onClick={(e) => scrollToSection(e, 'properties')}
                  className="hover:text-[#D4BA7E] transition-colors block"
                >
                  Zero Brokerage Stays
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-[#122334] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-[#869BAE]">
          <div>
            © 2026 SecureStay Properties. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBlueprint) onOpenBlueprint();
              }}
              className="hover:text-[#D4BA7E] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#3A5063]">•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBlueprint) onOpenBlueprint();
              }}
              className="hover:text-[#D4BA7E] transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-[#3A5063]">•</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBlueprint) onOpenBlueprint();
              }}
              className="hover:text-[#D4BA7E] transition-colors"
            >
              Trust & Safety
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

