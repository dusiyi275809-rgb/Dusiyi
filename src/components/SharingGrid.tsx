/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { sharingItems } from '../data/portfolioData';
import { Presentation, BookOpen, Mic, FileText, ArrowUpRight } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const SharingGrid: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return <Presentation className="w-5 h-5 text-[#FF9EC6]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      case 'talk':
        return <Mic className="w-5 h-5 text-emerald-400" />;
      default:
        return <FileText className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleCardClick = () => {
    audioEngine.playClickChime();
  };

  const handleCardHover = () => {
    audioEngine.playHoverChime();
  };

  return (
    <section id="sharing-grid" className="py-24 scroll-mt-24 border-t border-zinc-900">
      
      {/* Header section of Section 4 */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
          <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
            SECTION 04 // PUBLIC DISCOURSES & DOCUMENTATION
          </span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter">
          SHARING THE CRAFT
        </h2>
      </div>

      {/* Grid containing 3-4 columns card deck */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sharingItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={handleCardClick}
            onMouseEnter={handleCardHover}
            className="group/sharing bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 flex flex-col justify-between h-full hover:border-[#FF9EC6]/30 hover:-translate-y-2 transition-all duration-300 shadow-xl cursor-pointer relative overflow-hidden"
          >
            {/* Top decorative gradient glow circle */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/2 opacity-0 group-hover/sharing:opacity-100 transition-opacity duration-300 rounded-full blur-lg pointer-events-none" />

            {/* Icon + Top Badge tag */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-neutral-950 rounded-2xl border border-zinc-850">
                  {getIcon(item.type)}
                </div>
                {item.badge && (
                  <span className="font-mono text-[8px] border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-sm uppercase tracking-wider group-hover/sharing:border-[#FF9EC6]/25 group-hover/sharing:text-[#FF9EC6] transition-all">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Title and platform info */}
              <h3 className="text-white text-base font-bold font-sans tracking-tight mb-2 leading-snug group-hover/sharing:text-[#FF9EC6] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs font-mono font-medium tracking-wide">
                ↳ {item.platformString}
              </p>
            </div>

            {/* Bottom details of post */}
            <div className="flex items-center justify-between border-t border-zinc-900/60 pt-5 mt-8">
              <span className="text-[10px] text-zinc-500 font-mono">
                {item.attendees || 'Shared Globally'}
              </span>
              <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-850 text-zinc-400 group-hover/sharing:text-black group-hover/sharing:bg-white transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
