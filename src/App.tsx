/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CornerDownRight, ArrowUpRight, Award, Sparkles, Sliders } from 'lucide-react';
import { Header } from './components/Header';
import { RubiksCube } from './components/RubiksCube';
import { JoinModal } from './components/JoinModal';
import { NavigationDrawer } from './components/NavigationDrawer';
import { SignatureLogo } from './components/SignatureLogo';
import { WorkSliders } from './components/WorkSliders';
import { AboutSection } from './components/AboutSection';
import { CategorySwitcher } from './components/CategorySwitcher';
import { ProjectTimeline } from './components/ProjectTimeline';
import { PassionsGrid } from './components/PassionsGrid';
import { FooterSection } from './components/FooterSection';
import { CubeTheme, CubeMode } from './types';
import { audioEngine } from './components/AudioEngine';
import { Magnetic } from './components/Magnetic';

export default function App() {
  const [cubeTheme, setCubeTheme] = useState<CubeTheme>('neon');
  const [cubeMode, setCubeMode] = useState<CubeMode>('breathe');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Mouse tilt variables
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    // Handle mouse move for parallax tilt
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setTilt({ x: nx, y: ny });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCtaHover = () => {
    audioEngine.playHoverChime();
    setCursorHovered(true);
  };

  const handleCtaLeave = () => {
    setCursorHovered(false);
  };

  const handleCtaClick = () => {
    audioEngine.playClickChime();
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between overflow-x-hidden selection:bg-pink-500/30 selection:text-[#FF9EC6]">
      
      {/* Absolute Dynamic Cursor Follower */}
      <div
        className={`hidden md:block fixed pointer-events-none z-50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border ${
          cursorHovered
            ? 'w-16 h-16 bg-pink-500/15 border-[#FF9EC6] scale-110 shadow-[0_0_25px_rgba(255,158,198,0.4)]'
            : 'w-8 h-8 bg-black/40 border-zinc-700 shadow-md'
        }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        {cursorHovered && (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[7px] text-[#FF9EC6] font-bold tracking-wider animate-pulse">
            RESERVE
          </span>
        )}
      </div>

      {/* Background Gradient Ambient Orbs */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-50 transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(232, 165, 200, 0.06) 0%, rgba(0,0,0,0) 70%)',
            transform: `translate(calc(-50% + ${tilt.x * 30}px), calc(-50% + ${tilt.y * 30}px))`,
          }}
        />
        <div
          className="absolute left-1/4 top-2/3 w-[600px] h-[600px] rounded-full opacity-35 transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.03) 0%, rgba(0,0,0,0) 70%)',
            transform: `translate(calc(-50% - ${tilt.x * 45}px), calc(-50% - ${tilt.y * 50}px))`,
          }}
        />
      </div>

      {/* Interactive header (Top nav) */}
      <Header
        onOpenModal={() => setIsModalOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Structured Page Content Wrapper */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 gap-12">
          
          {/* Subtle Brutalist Noise Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06] md:opacity-[0.08] z-0 select-none overflow-hidden">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="brutalist-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#brutalist-noise)" />
            </svg>
          </div>
          
          {/* Top drawing signature */}
          <SignatureLogo />

          {/* Brutalist Apple Designer heading */}
          <div
            className="text-center transition-transform duration-500 ease-out transform-gpu pointer-events-none select-none z-0"
            style={{
              transform: `rotate(0deg) rotateX(${tilt.y * -2.5}deg) rotateY(${tilt.x * 2.5}deg) translateZ(-40px)`,
            }}
          >
            <h1 className="font-display font-black text-[#FF9EC6] flex flex-col justify-center leading-[0.88] uppercase text-center relative tracking-tighter max-w-5xl">
              <span 
                className="text-[7.5vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4.6vw] block transition-transform duration-500 ease-out transform-gpu"
                style={{
                  transform: `translate(${tilt.x * 24}px, ${tilt.y * 24}px)`,
                }}
              >
                PORTFOLIO
              </span>
              <span 
                className="text-[7.5vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4.6vw] text-outline block transition-transform duration-500 ease-out transform-gpu"
                style={{
                  transform: `translate(${tilt.x * 12}px, ${tilt.y * 12}px)`,
                }}
              >
                Digital Media Design
              </span>
              <span 
                className="text-[5vw] sm:text-[4vw] md:text-[3.2vw] text-zinc-400 font-sans tracking-tight leading-normal lowercase italic mt-2 block transition-transform duration-500 ease-out transform-gpu"
                style={{
                  transform: `translate(${tilt.x * 4}px, ${tilt.y * 4}px)`,
                }}
              >
                数字媒体与设计作品集
              </span>
            </h1>
          </div>

          {/* Centered 3D Cube Showcase */}
          <div className="w-full flex justify-center mt-4">
            <div className="relative flex items-center justify-center min-h-[300px] w-full max-w-sm">
              
              {/* 3D Rotating Cube */}
              <div className="absolute opacity-95 scale-105 transition-all duration-500">
                <RubiksCube
                  theme={cubeTheme}
                  mode={cubeMode}
                  tiltX={tilt.x}
                  tiltY={tilt.y}
                />
              </div>

            </div>
          </div>

        </section>

        {/* ABOUT SIYI DU (Section 1.5) */}
        <AboutSection />

        {/* WORK CAROUSELS (Section 1 and Section 2) */}
        <WorkSliders />

        {/* CATEGORY SWITCHER (Section 3) */}
        <CategorySwitcher />

        {/* PROJECT TIMELINE (Section 3.5) */}
        <ProjectTimeline />

        {/* PASSIONS PHOTOGRAPHY CARDS (Section 6) */}
        <PassionsGrid />

      </div>

      {/* FOOTER SECTION */}
      <FooterSection />

      {/* Hamburger Drawer overlay link directory */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenWaitlist={() => setIsModalOpen(true)}
        scrollToSection={scrollToSection}
      />

      {/* Popup modal waitlist form support */}
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
