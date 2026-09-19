import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, ArrowRight, KeyRound, CheckCircle2, UserCheck } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [clientId, setClientId] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [authMethod, setAuthMethod] = useState('password'); // 'password' | 'otp'

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

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#050E0D]/90 backdrop-blur-xl overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#081312] border border-[#C6A868]/30 shadow-2xl p-8 sm:p-10 my-auto rounded-xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8F9C98] hover:text-[#F5F1EA] transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full border border-[#C6A868] mx-auto mb-3.5 flex items-center justify-center">
              <span className="font-serif-display text-lg text-[#C6A868] italic">SS</span>
            </div>
            <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-[#C6A868] font-medium block">
              Private Client Portal
            </span>
            <h3 className="font-serif-display text-3xl text-[#F5F1EA] font-light mt-1">
              Client Authentication
            </h3>
            <p className="text-xs font-sans text-[#8F9C98] mt-1.5 font-light">
              Access your confidential acquisition dossiers and private mandates.
            </p>
          </div>

          {loginSuccess ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-[#C6A868] mx-auto mb-3" />
              <h4 className="font-serif-display text-2xl text-[#F5F1EA]">
                Access Authorized
              </h4>
              <p className="text-xs font-sans text-[#8F9C98] mt-2 leading-relaxed">
                Welcome back, {clientId || 'Valued Principal'}. Your private advisory desk is synchronized.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] font-semibold text-xs uppercase tracking-widest rounded-md transition-colors"
              >
                Enter Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              
              {/* Auth Mode Toggle */}
              <div className="grid grid-cols-2 p-1 bg-[#050D0C] border border-[#1C2E2A] rounded-lg text-xs font-sans">
                <button
                  type="button"
                  onClick={() => setAuthMethod('password')}
                  className={`py-1.5 rounded-md transition-all ${
                    authMethod === 'password'
                      ? 'bg-[#0E1D1B] text-[#D4BA7E] font-medium'
                      : 'text-[#8F9C98] hover:text-[#F5F1EA]'
                  }`}
                >
                  Access Key
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMethod('otp')}
                  className={`py-1.5 rounded-md transition-all ${
                    authMethod === 'otp'
                      ? 'bg-[#0E1D1B] text-[#D4BA7E] font-medium'
                      : 'text-[#8F9C98] hover:text-[#F5F1EA]'
                  }`}
                >
                  Encrypted OTP
                </button>
              </div>

              {/* Client ID / Email */}
              <div className="flex flex-col text-left">
                <label className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#8F9C98] mb-1.5">
                  Client ID or Private Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    placeholder="e.g. principal@familyoffice.com"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="w-full bg-[#0B1715] border border-[#1C2E2A] px-4 py-2.5 text-xs font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors"
                  />
                  <UserCheck className="w-4 h-4 text-[#C6A868]/60 absolute right-3 pointer-events-none" />
                </div>
              </div>

              {/* Password / OTP */}
              <div className="flex flex-col text-left">
                <label className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#8F9C98] mb-1.5">
                  {authMethod === 'password' ? 'Private Security Key' : 'One-Time Passcode'}
                </label>
                <div className="relative flex items-center">
                  <input
                    type={authMethod === 'password' ? 'password' : 'text'}
                    required
                    placeholder={authMethod === 'password' ? '••••••••••••' : '6-digit secure code'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0B1715] border border-[#1C2E2A] px-4 py-2.5 text-xs font-sans text-[#F5F1EA] rounded-md focus:outline-none focus:border-[#C6A868] transition-colors"
                  />
                  <KeyRound className="w-4 h-4 text-[#C6A868]/60 absolute right-3 pointer-events-none" />
                </div>
              </div>

              {/* Discretion Checkbox */}
              <div className="flex items-center justify-between text-[11px] font-sans text-[#8F9C98] pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#C6A868] rounded" />
                  <span>Remember secure session</span>
                </label>
                <a href="#contact" onClick={onClose} className="text-[#D4BA7E] hover:underline">
                  Request Access Key
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#C6A868] hover:bg-[#D4BA7E] text-[#081312] font-semibold text-xs uppercase tracking-[0.2em] rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 stroke-[2]" />
                <span>Authorize Login</span>
              </button>

              {/* Security Assurance */}
              <div className="pt-3 border-t border-[#1C2E2A] flex items-center justify-center gap-1.5 text-[10px] text-[#8F9C98] font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A868]" />
                <span>256-Bit Encrypted Sovereign Access</span>
              </div>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
