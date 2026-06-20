/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ArrowUp, Space } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const FooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = '2114540903@qq.com';

  const handleCopyEmail = () => {
    audioEngine.playClickChime();
    navigator.clipboard.writeText(email.toLowerCase());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const handleMouseEnter = () => {
    audioEngine.playHoverChime();
  };

  const scrollToTop = () => {
    audioEngine.playClickChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 border-t border-zinc-900 bg-neutral-950/20">
      
      {/* Scope marker crosshair decorations */}
      <div className="absolute top-1 left-6 w-2 h-2 border-t border-l border-zinc-800" />
      <div className="absolute top-1 right-6 w-2 h-2 border-t border-r border-zinc-800" />

      <div className="max-w-7xl mx-auto px-5 text-center flex flex-col items-center justify-center">
        
        <span className="font-mono text-[9px] text-[#FF9EC6] tracking-[0.25em] font-black uppercase mb-4 block">
          ESTABLISH A SECURE LINE
        </span>

        {/* Massive Mail to Title Link */}
        <div className="relative group mb-6">
          <a
            href={`mailto:${email.toLowerCase()}`}
            onMouseEnter={handleMouseEnter}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8vw text-[#FF9EC6] hover:text-white transition-colors duration-300 leading-none break-all inline-block uppercase select-all tracking-tighter"
          >
            {email}
          </a>
          {/* Custom Growing Premium Underline */}
          <div className="h-1 bg-gradient-to-r from-pink-400 to-[#FF9EC6] w-0 group-hover:w-full transition-all duration-500 rounded-full mt-2" />
        </div>

        {/* Copy email pill button */}
        <button
          id="copy-email-btn"
          onClick={handleCopyEmail}
          onMouseEnter={handleMouseEnter}
          className={`px-5 py-3 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
            copied
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-black text-zinc-400 hover:text-white border-zinc-800 hover:border-[#FF9EC6]/40'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'EMAIL COPIED SUCCESFULLY' : 'CLICK TO COPY'}</span>
        </button>

        {/* Bottom copyright alignment column */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-900 pt-12 mt-20 relative text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
          
          {/* Leftside copy credit */}
          <span>
            © 2026 SIYI DU • PORTFOLIO SYSTEM
          </span>

          {/* Core scroll helper */}
          <button
            onClick={scrollToTop}
            onMouseEnter={handleMouseEnter}
            className="w-10 h-10 rounded-full border border-zinc-900 bg-black/40 hover:bg-white text-zinc-400 hover:text-black flex items-center justify-center transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Rightside social lists */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF9EC6] flex items-center gap-1 transition-colors"
            >
              LINKEDIN <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF9EC6] flex items-center gap-1 transition-colors"
            >
              INSTAGRAM <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};
