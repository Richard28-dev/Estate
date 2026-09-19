import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, MessageSquare, PhoneCall, ArrowUpRight } from 'lucide-react';

export default function PrivateEnquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [channel, setChannel] = useState('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    ndaRequired: true
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div 
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#070708]/90 backdrop-blur-xl overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0B0B0C] border border-[#C9A96E]/30 shadow-2xl p-6 sm:p-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#A59E92] hover:text-[#F5F1EA] transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Crest / Header */}
          <div className="text-center mb-8">
            <div className="w-10 h-10 rounded-full border border-[#C9A96E]/30 mx-auto mb-3 flex items-center justify-center">
              <span className="font-serif-display text-base text-[#DFBF85] italic">SS</span>
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C9A96E] font-medium block">
              Private Client Office
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl text-[#F5F1EA] font-light mt-1">
              Confidential Client Mandate
            </h3>
            <p className="text-xs font-sans text-[#A59E92] max-w-md mx-auto mt-2 font-light">
              Connect directly with a Senior Advisory Partner for off-market acquisitions and discreet property evaluations.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-[#DFBF85] mx-auto mb-4" />
              <h4 className="font-serif-display text-2xl text-[#F5F1EA]">
                Mandate Intake Acknowledged
              </h4>
              <p className="text-xs font-sans text-[#A59E92] max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, {formData.name}. Our Senior Partner has been notified and will connect through {channel === 'whatsapp' ? 'WhatsApp' : 'Secure Call'} with complete confidentiality.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#C9A96E] text-[#0B0B0C] text-xs font-sans uppercase tracking-[0.2em] font-semibold"
              >
                Return to Portfolios
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Channel Selector */}
              <div className="flex items-center justify-center gap-3 pb-3 border-b border-[#C9A96E]/15">
                <button
                  type="button"
                  onClick={() => setChannel('whatsapp')}
                  className={`px-3 py-1.5 text-[11px] font-sans flex items-center gap-1.5 transition-all ${
                    channel === 'whatsapp'
                      ? 'bg-[#1D1D22] border border-[#25D366] text-[#25D366]'
                      : 'border border-[#C9A96E]/20 text-[#A59E92]'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Preferred
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('phone')}
                  className={`px-3 py-1.5 text-[11px] font-sans flex items-center gap-1.5 transition-all ${
                    channel === 'phone'
                      ? 'bg-[#1D1D22] border border-[#DFBF85] text-[#DFBF85]'
                      : 'border border-[#C9A96E]/20 text-[#A59E92]'
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Secure Phone Call
                </button>
              </div>

              <div>
                <label className="text-[10px] uppercase font-sans tracking-widest text-[#A59E92] block mb-1">
                  Full Name / Principal
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141418] border border-[#C9A96E]/25 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase font-sans tracking-widest text-[#A59E92] block mb-1">
                    Confidential Phone / Signal
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +44 / +971"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#141418] border border-[#C9A96E]/25 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-sans tracking-widest text-[#A59E92] block mb-1">
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@familyoffice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#141418] border border-[#C9A96E]/25 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase font-sans tracking-widest text-[#A59E92] block mb-1">
                  Specific Requirements or Target Asset
                </label>
                <textarea
                  rows={2}
                  placeholder="Target corridor, budget tier, or off-market preference..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full bg-[#141418] border border-[#C9A96E]/25 px-3.5 py-2.5 text-xs text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E] resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-nda"
                  checked={formData.ndaRequired}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="accent-[#C9A96E] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="modal-nda" className="text-[11px] font-sans text-[#A59E92] cursor-pointer">
                  Execute bilateral non-disclosure agreement prior to sharing off-market dossiers
                </label>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#DFBF85] via-[#C9A96E] to-[#B39055] text-[#0B0B0C] font-sans text-xs uppercase tracking-[0.25em] font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Initiate Private Mandate</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
