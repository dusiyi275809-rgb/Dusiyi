/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Users, Menu } from 'lucide-react';
import { audioEngine } from './AudioEngine';

interface HeaderProps {
  onOpenModal: () => void;
  onOpenDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal, onOpenDrawer }) => {
  const handleHover = () => {
    audioEngine.playHoverChime();
  };

  const handleClick = () => {
    audioEngine.playClickChime();
    onOpenModal();
  };

  const handleBurgerClick = () => {
    audioEngine.playClickChime();
    onOpenDrawer();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-5 py-4 md:px-8 md:py-6 flex items-center justify-between bg-gradient-to-b from-[#000000ef] via-[#0000009c] to-transparent">
      {/* Top Left Menu Trigger */}
      <div className="flex items-center gap-4">
        {/* Elegant Minimal Toggle Button */}
        <button
          id="menu-hamburger-btn"
          onClick={handleBurgerClick}
          onMouseEnter={handleHover}
          className="flex flex-col gap-1.5 p-3 rounded-xl border border-zinc-900 bg-black/60 hover:bg-zinc-950 hover:border-[#FF9EC6]/30 text-white hover:text-[#FF9EC6] transition-all cursor-pointer group"
        >
          <div className="w-5 h-[1.5px] bg-current transition-transform group-hover:translate-x-0.5" />
          <div className="w-3 h-[1.5px] bg-current transition-transform group-hover:w-5" />
          <div className="w-5 h-[1.5px] bg-current transition-transform group-hover:translate-x-[-2px]" />
        </button>
      </div>

      {/* Navigation / Actions on Right */}
      <div className="flex items-center gap-4">
        {/* Dynamic circular SVG emblem badge */}
        <div
          onClick={handleClick}
          onMouseEnter={handleHover}
          className="relative w-11 h-11 flex items-center justify-center cursor-pointer group"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin-slow transition-transform group-hover:scale-105 duration-300"
          >
            <path
              id="headerCirclePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text fontSize="7" fill="#FF9EC6" letterSpacing="4.5" className="font-mono font-bold tracking-widest uppercase">
              <textPath href="#headerCirclePath">THE JS CLUB • NO LIMITS • </textPath>
            </text>
          </svg>
          {/* Static Center Arrow */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
            <svg
              className="w-4.5 h-4.5 text-[#FF9EC6]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
