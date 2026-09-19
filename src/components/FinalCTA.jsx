import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare, ArrowUpRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

export default function FinalCTA({ onOpenEnquiry }) {
  const [submitted, setSubmitted] = useState(false);
  const [clientType, setClientType] = useState('buyer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intent: 'Looking to acquire a trophy residence'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#081312] relative overflow-hidden border-t border-[#1C2E2A]">
      
      {/* Background ambient lighting */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C6A868]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C6A868] font-medium block mb-4">
            Private Office Engagement
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F1EA] tracking-tight leading-[1.15]">
            Your Next Address Deserves a{' '}
            <span className="italic text-[#D4BA7E]">Private Conversation.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base font-sans text-[#8F9C98] font-light max-w-xl mx-auto leading-relaxed">
            Whether seeking an off-market coastal compound or divesting a generational skyline holding, our partners provide total confidentiality.
          </p>
        </motion.div>

        {/* Form Container & Quick Concierge Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Quick Contact & Direct VIP Desks (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            
            <div className="p-8 border border-[#1C2E2A] bg-[#0B1715]/80 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D4BA7E] block mb-4 font-medium">
                Immediate VIP Access
              </span>

              <div className="space-y-4">
                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/919820011223?text=Hello%20Secure%20Stay%20Private%20Office,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-[#1C2E2A] hover:border-[#C6A868]/60 bg-[#0E201D]/60 hover:bg-[#122A26]/80 rounded-lg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#25D366] stroke-[1.5]" />
                    <div className="text-left">
                      <div className="text-xs font-sans text-[#F5F1EA] uppercase tracking-wider font-medium">
                        WhatsApp Private Desk
                      </div>
                      <div className="text-[11px] text-[#8F9C98] font-sans">
                        Instant encrypted concierge response
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A868] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+912249808800"
                  className="flex items-center justify-between p-4 border border-[#1C2E2A] hover:border-[#C6A868]/60 bg-[#0E201D]/60 hover:bg-[#122A26]/80 rounded-lg transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-[#C6A868] stroke-[1.5]" />
                    <div className="text-left">
                      <div className="text-xs font-sans text-[#F5F1EA] uppercase tracking-wider font-medium">
                        Direct Private Advisory
                      </div>
                      <div className="text-[11px] text-[#8F9C98] font-sans">
                        +91 22 4980 8800 (Mumbai HQ)
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A868] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Assurance Callout */}
              <div className="mt-6 pt-5 border-t border-[#1C2E2A] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#D4BA7E] shrink-0 mt-0.5" />
                <p className="text-[11px] font-sans text-[#8F9C98] font-light leading-relaxed">
                  All communications are strictly confidential and governed by non-disclosure protocols upon request.
                </p>
              </div>
            </div>

            {/* Global Desk Presence Teaser */}
            <div className="p-6 border border-[#1C2E2A] bg-[#0B1715]/40 rounded-xl text-xs font-sans text-[#8F9C98]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4BA7E] mb-2 font-medium">
                Active Private Desks
              </div>
              <p className="font-light leading-relaxed">
                Mumbai • London Mayfair • Dubai DIFC • New Delhi Golf Links
              </p>
            </div>

          </motion.div>

          {/* Confidential Booking / Intake Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 border border-[#C6A868]/30 bg-[#0B1715]/80 rounded-xl relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <span className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A868] to-transparent" />

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-[#D4BA7E] mb-4 stroke-[1.25]" />
                <h3 className="font-serif-display text-3xl text-[#F5F1EA] font-light mb-2">
                  Dossier Request Received
                </h3>
                <p className="text-xs font-sans text-[#8F9C98] max-w-md font-light leading-relaxed">
                  A Senior Managing Partner from our Private Office will contact you via your preferred confidential channel within two business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[#C6A868]/50 text-[11px] uppercase tracking-widest text-[#D4BA7E] hover:bg-[#C6A868]/10 transition-colors rounded-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Intent Selector */}
                <div className="flex items-center gap-4 pb-3 border-b border-[#1C2E2A]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8F9C98]">
                    I am an:
                  </span>
                  <div className="flex items-center gap-2">
                    {['buyer', 'investor', 'seller'].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setClientType(t)}
                        className={`px-3 py-1 text-[10px] uppercase tracking-wider font-sans rounded-sm transition-all ${
                          clientType === t
                            ? 'bg-[#C6A868] text-[#081312] font-semibold'
                            : 'border border-[#1C2E2A] text-[#8F9C98] hover:text-[#F5F1EA]'
                        }`}
                      >
                        {t === 'buyer' ? 'Acquiring HNI' : t === 'investor' ? 'Family Office' : 'Property Principal'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="flex flex-col text-left">
                  <label className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#8F9C98] mb-1.5">
                    Principal Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0E201D]/70 border border-[#1C2E2A] px-4 py-3 text-sm font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#8F9C98] mb-1.5">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="advisory@familyoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0E201D]/70 border border-[#1C2E2A] px-4 py-3 text-sm font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#8F9C98] mb-1.5">
                      Private Telephone / Signal
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / +44 / +971"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0E201D]/70 border border-[#1C2E2A] px-4 py-3 text-sm font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors"
                    />
                  </div>
                </div>

                {/* Specific Portfolio or Requirement */}
                <div className="flex flex-col text-left">
                  <label className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#8F9C98] mb-1.5">
                    Acquisition Focus / Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Off-market coastal estate in Goa or Worli Sea Face penthouse, budget ₹40-70 Cr."
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full bg-[#0E201D]/70 border border-[#1C2E2A] px-4 py-3 text-sm font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors resize-none"
                  />
                </div>

                {/* NDA Request Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda"
                    defaultChecked
                    className="accent-[#C6A868] w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="nda" className="text-[11px] font-sans text-[#8F9C98] cursor-pointer">
                    Request formal mutual Non-Disclosure Agreement prior to presentation
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#C6A868] via-[#E0C58A] to-[#C6A868] hover:from-[#D4BA7E] hover:to-[#E5CB95] text-[#081312] font-sans text-xs uppercase tracking-[0.2em] font-semibold text-center rounded-md transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_4px_25px_rgba(198,168,104,0.35)]"
                >
                  <span>Request Private Consultation</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
