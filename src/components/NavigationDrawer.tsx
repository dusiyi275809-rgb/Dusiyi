/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CornerDownRight, Mail, Sparkles } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
  scrollToSection: (id: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenWaitlist,
  scrollToSection,
}) => {
  const links = [
    { label: 'ABOUT SIYI DU // 杜思仪', id: 'about', tag: '01.5' },
    { label: 'WORK PORTFOLIO', id: 'work-sliders', tag: '01' },
    { label: 'CROSS-INDUSTRY COCKPITS', id: 'cross-industry', tag: '02' },
    { label: 'INTERACTIVE SWITCHER', id: 'interactive-switcher', tag: '03' },
    { label: 'ACADEMIC STUDY PATHWAY', id: 'project-timeline', tag: '03.5' },
    { label: 'PASSIONS & CRAFTS', id: 'passions-section', tag: '06' },
  ];

  const handleLinkHover = () => {
    audioEngine.playHoverChime();
  };

  const handleLinkClick = (id: string) => {
    audioEngine.playClickChime();
    onClose();
    setTimeout(() => {
      scrollToSection(id);
    }, 400); // Wait for sliding closing animation
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Drawer Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl bg-black border-l border-zinc-900 h-full flex flex-col justify-between p-8 md:p-12 z-10"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF9EC6] animate-pulse" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#FF9EC6] font-bold">
                  THE JS CLUB DIRECTORY
                </span>
              </div>
              <button
                id="close-drawer-btn"
                onClick={() => {
                  audioEngine.playClickChime();
                  onClose();
                }}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main giant layout links */}
            <nav className="flex-1 flex flex-col justify-center gap-1.5 md:gap-3 my-12">
              {links.map((link) => (
                <div key={link.id} className="group relative overflow-hidden">
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    onMouseEnter={link.id ? handleLinkHover : undefined}
                    className="flex items-baseline gap-4 text-left w-full cursor-pointer py-2"
                  >
                    <span className="font-mono text-[10px] md:text-xs text-zinc-500 group-hover:text-[#FF9EC6] transition-colors">
                      /{link.tag}
                    </span>
                    <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#FF9EC6] transition-all duration-300 tracking-tight flex items-center gap-2">
                      {link.label}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FF9EC6]" />
                    </span>
                  </button>
                  <div className="h-px bg-zinc-900 w-full group-hover:bg-[#FF9EC6]/20 transition-all" />
                </div>
              ))}
            </nav>

            {/* Bottom contact CTA card */}
            <div className="bg-[#0b0b0d] border border-zinc-950 p-6 rounded-2xl flex flex-col gap-4">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold uppercase mb-1 block">
                  Collaborative Opportunities
                </span>
                <p className="text-zinc-500 text-xs leading-normal">
                  Need custom interactions or high fidelity ThreeJS layouts? Let’s establish a private line and draft concepts.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  id="drawer-spot-btn"
                  onClick={() => {
                    audioEngine.playClickChime();
                    onClose();
                    onOpenWaitlist();
                  }}
                  className="flex-1 bg-[#FF9EC6] hover:bg-pink-400 text-black font-semibold rounded-xl py-3 text-xs tracking-wider transition-all cursor-pointer text-center"
                >
                  RESERVE SPOT
                </button>
                <a
                  href="mailto:2114540903@qq.com"
                  className="px-4 py-3 border border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  EMAIL
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
