import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Mail, Check } from 'lucide-react';

export default function Footer({ onOpenBlueprint }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) setSubscribed(true);
  };

  return (
    <footer className="bg-[#050E0D] text-[#F5F1EA] pt-20 pb-12 border-t border-[#1C2E2A] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Tier: Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C2E2A] items-start">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#C6A868] flex items-center justify-center">
                <span className="font-serif-display text-sm tracking-wider text-[#C6A868] italic">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl tracking-[0.25em] text-[#F5F1EA] uppercase font-light leading-none">
                  SECURE STAY
                </span>
                <span className="text-[8.5px] tracking-[0.32em] text-[#C6A868] uppercase font-sans font-medium mt-1">
                  REAL ESTATES
                </span>
              </div>
            </div>
            <p className="text-[#8F9C98] font-light max-w-md text-xs leading-relaxed mb-6">
              A private real estate office dedicated to the acquisition, stewardship, and discreet disposition of trophy residential assets across India and premier international capital centres.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#1C2E2A] bg-[#081312] text-[10px] text-[#D4BA7E] uppercase tracking-wider rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A868]" />
              Institutional Due Diligence Standards
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A868] font-medium block mb-2">
              The Private Gazette
            </span>
            <h4 className="font-serif-display text-2xl text-[#F5F1EA] font-light mb-3">
              Receive Off-Market Market Intelligence
            </h4>
            <p className="text-xs text-[#8F9C98] font-light mb-5 max-w-md">
              A quarterly monograph on prime residential capital flows, discreet transactions, and architectural heritage.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#D4BA7E] py-3">
                <Check className="w-4 h-4" />
                <span>You have been added to our private advisory circulation list.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter confidential email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow bg-[#0B1715] border border-[#1C2E2A] px-4 py-3 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C6A868]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] text-[10px] font-semibold uppercase tracking-[0.2em] shrink-0 transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Tier: Global Desks & Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-[#C9A96E]/15">
          
          {/* Mumbai HQ */}
          <div>
            <h5 className="font-serif-display text-lg text-[#DFBF85] mb-3">Mumbai Flagship</h5>
            <p className="text-[#A59E92] leading-relaxed font-light">
              Level 28, Maker Maxity<br />
              Bandra Kurla Complex<br />
              Mumbai 400 051, India<br />
              <span className="text-[#DFBF85] mt-1 inline-block">+91 22 4980 8800</span>
            </p>
          </div>

          {/* New Delhi Desk */}
          <div>
            <h5 className="font-serif-display text-lg text-[#DFBF85] mb-3">Delhi NCR Advisory</h5>
            <p className="text-[#A59E92] leading-relaxed font-light">
              The Oberoi Advisory Suite<br />
              Dr. Zakir Hussain Marg<br />
              New Delhi 110 003, India<br />
              <span className="text-[#DFBF85] mt-1 inline-block">+91 11 6810 4400</span>
            </p>
          </div>

          {/* International Desks */}
          <div>
            <h5 className="font-serif-display text-lg text-[#DFBF85] mb-3">International Hubs</h5>
            <p className="text-[#A59E92] leading-relaxed font-light mb-2">
              <strong className="text-[#F5F1EA] font-normal">London Mayfair:</strong> 14 Berkeley Street, London W1J 8DX
            </p>
            <p className="text-[#A59E92] leading-relaxed font-light">
              <strong className="text-[#F5F1EA] font-normal">Dubai DIFC:</strong> Gate Precinct 4, Level 5, DIFC
            </p>
          </div>

          {/* Directory & Quick Navigation */}
          <div>
            <h5 className="font-serif-display text-lg text-[#DFBF85] mb-3">Dossiers & Exploration</h5>
            <ul className="space-y-2 text-[#A59E92]">
              <li>
                <a href="#properties" className="hover:text-[#DFBF85] transition-colors">
                  Featured Residences
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DFBF85] transition-colors">
                  Curated Collections
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#DFBF85] transition-colors">
                  Pillars of Assurance
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#DFBF85] transition-colors">
                  Intellectual Capital & Journal
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBlueprint}
                  className="text-[#DFBF85] hover:underline flex items-center gap-1 text-left"
                >
                  <span>Inner Pages Blueprint</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Tier: RERA & Regulatory Disclosures */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#A59E92]/70 font-light">
          
          <div className="max-w-2xl leading-relaxed">
            <p>
              © {new Date().getFullYear()} Secure Stay Private Advisory LLP. All rights reserved. Registered Real Estate Agent RERA: PRM/MUM/RERA/2026/00914. Discretion guaranteed under client mandate. All property details are provided for informational contemplation and do not constitute formal legal tender until conveyance contracts are ratified.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-xs">
            <a href="#" className="hover:text-[#DFBF85] transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-[#DFBF85] transition-colors">NDA Protocol</a>
            <a href="#" className="hover:text-[#DFBF85] transition-colors">Title Assurance Policy</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
