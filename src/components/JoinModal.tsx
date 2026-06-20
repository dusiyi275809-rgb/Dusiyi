/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    audioEngine.playClickChime();
    setIsLoading(true);

    // Simulate luxury API call & trigger direct email send
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      audioEngine.playCelebrationArpeggio();

      // Store waitlist in localStorage
      const waitlist = JSON.parse(localStorage.getItem('waitlist_members') || '[]');
      waitlist.push({ name, email, joinedAt: new Date().toISOString() });
      localStorage.setItem('waitlist_members', JSON.stringify(waitlist));

      // Construct a premium mailto URL to directly send the early access application details to Siyi Du's email
      const subject = encodeURIComponent(`[Siyi Du Portfolio] Early Access Waitlist Application from ${name}`);
      const body = encodeURIComponent(`Hi Siyi Du (杜思仪),\n\nI want to join your digital media & AR design waitlist / early access reserve spot!\n\nHere are my application details:\n-----------------------------\n👤 Name: ${name}\n✉️ Email: ${email}\n📅 Applied At (UTC): ${new Date().toISOString()}\n-----------------------------\n\nLet's connect soon!\n\nSent from Siyi Du's AR Digital Portfolio App.`);
      
      const mailtoUrl = `mailto:2114540903@qq.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const resetAndClose = () => {
    onClose();
    // Reset after transition finishes
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setName('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-[#0d0d0d] border border-[#FF9EC6]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,158,198,0.15)] z-10"
          >
            {/* Pink Glow Line at Top */}
            <div className="h-1.5 w-full bg-gradient-to-r from-pink-400 via-[#FF9EC6] to-pink-500" />

            <button
              id="close-modal-btn"
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-[#FF9EC6]" />
                    <span className="font-mono text-xs tracking-widest text-[#FF9EC6] uppercase font-bold">
                      Limited Spaces Available
                    </span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl text-white tracking-tight mb-2 leading-tight">
                    RESERVE YOUR SPOT
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                    Join over 2,000+ elite Webflow developers mastering native JavaScript, Canvas interactions, and ThreeJS animations.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold tracking-wider">
                        Your Professional Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Alex Carter"
                        className="w-full bg-[#141414] border border-neutral-800 focus:border-[#FF9EC6]/60 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-neutral-600 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold tracking-wider">
                        Work Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@agency.com"
                          className="w-full bg-[#141414] border border-neutral-800 focus:border-[#FF9EC6]/60 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm outline-none transition-all placeholder:text-neutral-600 font-sans"
                        />
                        <Mail className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <p className="text-[11px] text-neutral-500 italic mt-2 leading-normal">
                      No limits. No spam. Receive private video previews and dynamic code boilerplate updates every week.
                    </p>

                    <button
                      id="submit-waitlist-btn"
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FF9EC6] hover:bg-pink-400 text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 group transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-pink-500/10 cursor-pointer text-sm tracking-wide mt-6"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          SECURE EARLY ACCESS
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl text-white mb-2 tracking-tight">
                    WELCOME TO THE JS CLUB
                  </h4>
                  <p className="text-neutral-400 text-sm max-w-xs mx-auto mb-6 leading-relaxed">
                    Check your inbox soon, <strong className="text-white">{name}</strong>! We've saved your Spot and unlocked a private premium starter repository.
                  </p>
                  <button
                    id="close-success-modal-btn"
                    onClick={resetAndClose}
                    className="border border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl px-6 py-2.5 text-sm font-medium transition-colors cursor-pointer"
                  >
                    RETURN TO LAUNCHPAD
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
