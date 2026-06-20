/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { testimonialItems } from '../data/portfolioData';
import { MessageSquare, Quote } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const TestimonialsSection: React.FC = () => {
  const handleHoverQuote = () => {
    audioEngine.playHoverChime();
  };

  return (
    <section id="testimonials" className="py-24 scroll-mt-24 border-t border-zinc-900">
      
      {/* Title section */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
          <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
            SECTION 05 // RECOMMENDATION LEDGER
          </span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter">
          KIND WORDS
        </h2>
      </div>

      {/* Structured 3-column client quotes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonialItems.map((item) => (
          <div
            key={item.id}
            onMouseEnter={handleHoverQuote}
            className="group bg-[#080809] border border-zinc-90 w-full rounded-[28px] p-8 flex flex-col justify-between hover:border-[#FF9EC6]/25 hover:shadow-[0_15px_40px_rgba(255,158,198,0.03)] duration-500 transition-all select-none relative"
          >
            {/* Quote indicator mark in corners */}
            <div className="absolute top-6 left-6 text-zinc-900 group-hover:text-[#FF9EC6]/10 transition-colors pointer-events-none">
              <Quote className="w-12 h-12 uppercase transform -scale-x-100" />
            </div>

            {/* Quote Body in pure white matching guidance */}
            <p className="text-white text-sm md:text-base leading-relaxed tracking-tight relative z-10 mb-8 font-medium italic">
              {item.quote}
            </p>

            {/* Author info block */}
            <div className="flex items-center gap-3.5 border-t border-zinc-900/60 pt-6">
              {/* Circular Avatar Badge replacement placeholder */}
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 text-[#FF9EC6] flex items-center justify-center font-mono font-bold text-xs">
                {item.author.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold font-sans">
                  {item.author}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                  {item.role}, <strong className="text-zinc-400 font-normal">{item.company}</strong>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
