/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight, CornerDownRight, ArrowRight, Layers, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { iosProjects, crossIndustryProjects } from '../data/portfolioData';
import { PhoneMockup, BrowserMockup } from './DeviceMockups';
import { TiltCard } from './TiltCard';
import { audioEngine } from './AudioEngine';

// Swiper CSS is required
import 'swiper/css';

export const WorkSliders: React.FC = () => {
  const iosSwiperRef = useRef<any>(null);
  const crossSwiperRef = useRef<any>(null);

  // Lightbox Modal state
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectIndex(null);
        setLightboxImage(null);
      } else if (activeProjectIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveProjectIndex((prev) => (prev !== null && prev < iosProjects.length - 1 ? prev + 1 : 0));
          audioEngine.playClickChime();
        } else if (e.key === 'ArrowLeft') {
          setActiveProjectIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : iosProjects.length - 1));
          audioEngine.playClickChime();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectIndex]);

  const handleArrowClick = (swiper: any, direction: 'prev' | 'next') => {
    audioEngine.playClickChime();
    if (swiper) {
      if (direction === 'prev') swiper.slidePrev();
      else swiper.slideNext();
    }
  };

  const handleHoverArrow = () => {
    audioEngine.playHoverChime();
  };

  const activeProject = activeProjectIndex !== null ? iosProjects[activeProjectIndex] : null;

  return (
    <div className="space-y-32 py-12">
      
      {/* SECTION 1: Gaochang Ruins AR/VR Slider (Work Carousel 1) - Replaced 1-to-1 style copy of Section 2 */}
      <section id="work-sliders" className="scroll-mt-24">
        {/* Header Title with Subtitle */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-zinc-900 pb-8 mb-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
              <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
                SECTION 01 // GAOCHANG RUINS AR/VR ENVIRONMENT & RECONSTRUCTION
              </span>
            </motion.div>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
              }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter"
            >
              GAOCHANG RUINS // 高昌故城遗址AR重建
            </motion.h2>
          </motion.div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 font-mono text-[10px] hidden sm:block tracking-widest">
              SLIDE TO DISCOVER DETAILS
            </span>
            {/* Custom Circular Pink Arrows */}
            <div className="flex gap-2.5">
              <button
                id="ios-slide-prev"
                onMouseEnter={handleHoverArrow}
                onClick={() => handleArrowClick(iosSwiperRef.current, 'prev')}
                className="w-11 h-11 rounded-full border border-zinc-800 bg-neutral-950 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer dynamic-action"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="ios-slide-next"
                onMouseEnter={handleHoverArrow}
                onClick={() => handleArrowClick(iosSwiperRef.current, 'next')}
                className="w-11 h-11 rounded-full border border-zinc-800 bg-neutral-950 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer dynamic-action"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel containing browser dashboards in TiltCards */}
        <div className="w-full relative px-1">
          <Swiper
            onSwiper={(swiper) => {
              iosSwiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.3, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="overflow-visible"
          >
            {iosProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-[32px] flex flex-col justify-between h-full group hover:border-[#FF9EC6]/25 transition-all">
                  
                  {/* Inside card - Device Mockup in a TiltCard */}
                  <div className="flex justify-center py-4">
                    <TiltCard glowColor="rgba(255, 158, 198, 0.08)" className="w-full">
                      <BrowserMockup 
                        content={project.mockContent} 
                        onClickImage={() => {
                          if (project.mockContent.imageUrl) {
                            setLightboxImage(project.mockContent.imageUrl);
                            audioEngine.playClickChime();
                          }
                        }}
                      />
                    </TiltCard>
                  </div>

                  {/* Details section */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold">
                        {project.category}
                      </span>
                      <span className="font-mono text-[9px] text-zinc-600">
                        {project.tags.join(' // ')}
                      </span>
                    </div>

                    <h3 className="text-white text-xl font-bold tracking-tight mb-2.5 font-sans group-hover:text-[#FF9EC6] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECTION 2: Cross Products & Industry (Work Carousel 2) */}
      <section id="cross-industry" className="scroll-mt-24">
        {/* Header Title with Subtitle */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-zinc-900 pb-8 mb-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
              <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
                SECTION 02 // UNREAL ENGINE 5 ENVIRONMENT & MOTION DESIGN
              </span>
            </motion.div>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
              }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter"
            >
              VIKING ALTAR // 冰冻洞穴中的祭坛
            </motion.h2>
          </motion.div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 font-mono text-[10px] hidden sm:block tracking-widest">
              SLIDE TO DISCOVER DETAILS
            </span>
            {/* Custom Circular Pink Arrows */}
            <div className="flex gap-2.5">
              <button
                id="cross-slide-prev"
                onMouseEnter={handleHoverArrow}
                onClick={() => handleArrowClick(crossSwiperRef.current, 'prev')}
                className="w-11 h-11 rounded-full border border-zinc-800 bg-neutral-950 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer dynamic-action"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="cross-slide-next"
                onMouseEnter={handleHoverArrow}
                onClick={() => handleArrowClick(crossSwiperRef.current, 'next')}
                className="w-11 h-11 rounded-full border border-zinc-800 bg-neutral-950 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer dynamic-action"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel containing browser dashboards in TiltCards */}
        <div className="w-full relative px-1">
          <Swiper
            onSwiper={(swiper) => {
              crossSwiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1.3, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            className="overflow-visible"
          >
            {crossIndustryProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-[32px] flex flex-col justify-between h-full group hover:border-[#FF9EC6]/25 transition-all">
                  
                  {/* Inside card - Device Mockup in a TiltCard */}
                  <div className="flex justify-center py-4">
                    <TiltCard glowColor="rgba(255, 158, 198, 0.08)" className="w-full">
                      <BrowserMockup 
                        content={project.mockContent} 
                        onClickImage={() => {
                          if (project.mockContent.imageUrl) {
                            setLightboxImage(project.mockContent.imageUrl);
                            audioEngine.playClickChime();
                          }
                        }}
                      />
                    </TiltCard>
                  </div>

                  {/* Details section */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold">
                        {project.category}
                      </span>
                      <span className="font-mono text-[9px] text-zinc-600">
                        {project.tags.join(' // ')}
                      </span>
                    </div>

                    <h3 className="text-white text-xl font-bold tracking-tight mb-2.5 font-sans group-hover:text-[#FF9EC6] transition-colors leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* STAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeProjectIndex !== null && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#070709ef] backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8 select-none"
            onClick={() => setActiveProjectIndex(null)}
          >
            {/* Grid details background */}
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c24_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none" />

            {/* Custom Header controls */}
            <div 
              className="absolute top-5 inset-x-5 md:inset-x-8 flex items-center justify-between z-50 text-white font-mono text-[11px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 bg-black/60 border border-zinc-800 rounded-full px-3.5 py-1.5 backdrop-blur-md">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FF9EC6] animate-pulse" />
                <span className="text-zinc-400">PROJECT STAGE</span>
                <strong className="text-white">{activeProjectIndex + 1} // {iosProjects.length}</strong>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setActiveProjectIndex(null);
                  audioEngine.playClickChime();
                }}
                className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#FF9EC6]/40 px-4 py-1.5 rounded-full transition-all cursor-pointer shadow-lg scroll-mt-24"
              >
                <span className="text-[9px] text-[#FF9EC6]/80 group-hover:text-[#FF9EC6] hidden sm:inline">ESC TO</span>
                <span>CLOSE</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Main Stage Zone */}
            <div 
              className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12- relative z-10 p-2 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Left Navigation Arrow */}
              <button
                onClick={() => {
                  setActiveProjectIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : iosProjects.length - 1));
                  audioEngine.playClickChime();
                }}
                onMouseEnter={handleHoverArrow}
                className="absolute left-2 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-800 bg-black/80 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* HD Image Visual container */}
              <motion.div 
                key={activeProjectIndex}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-full max-w-[340px] md:max-w-[380px] aspect-[9/16] bg-[#0c0c0e] border-4 border-zinc-800 rounded-[56px] p-3 shadow-[0_0_50px_rgba(255,158,198,0.15)] overflow-hidden relative flex flex-col justify-between"
              >
                {/* Dynamic Screen simulation styling */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30" />
                <div className="w-full h-full rounded-[44px] overflow-hidden relative border border-zinc-900 bg-zinc-950">
                  <img
                    src={activeProject.mockContent.imageUrl}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    alt={activeProject.title}
                  />
                  {/* Subtle vignette/gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-10" />
                </div>
              </motion.div>

              {/* Right Detail Pane */}
              <motion.div
                key={`desc-${activeProjectIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[420px] bg-zinc-900/40 border border-zinc-800/80 rounded-[32px] p-6 backdrop-blur-md flex flex-col justify-between gap-6 relative"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold py-0.5 px-2 bg-[#FF9EC6]/10 border border-[#FF9EC6]/25 rounded-md uppercase">
                      {activeProject.category}
                    </span>
                    <span className="text-[10px] text-zinc-550 font-mono">
                      {activeProject.tags.join(' • ')}
                    </span>
                  </div>

                  <h3 className="text-white text-xl sm:text-2xl font-black font-sans tracking-tight mb-2 leading-tight uppercase">
                    {activeProject.title}
                  </h3>

                  <div className="h-[1px] w-12 bg-pink-500/30 my-3.5" />

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium font-sans">
                    {activeProject.description}
                  </p>
                </div>

                <div className="bg-black/40 border border-zinc-850 p-3 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-820">
                    <Sparkles className="w-4 h-4 text-[#FF9EC6]" />
                  </div>
                  <div className="flex-1 font-mono text-[9px] leading-normal text-zinc-400">
                    <span>提示: 可以使用键盘左右方向键 </span>
                    <strong className="text-white">←</strong>
                    <span> / </span>
                    <strong className="text-white">→</strong>
                    <span> 切换，</span>
                    <strong className="text-[#FF9EC6]">ESC</strong>
                    <span> 键退出。</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Navigation Arrow */}
              <button
                onClick={() => {
                  setActiveProjectIndex((prev) => (prev !== null && prev < iosProjects.length - 1 ? prev + 1 : 0));
                  audioEngine.playClickChime();
                }}
                onMouseEnter={handleHoverArrow}
                className="absolute right-2 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-800 bg-black/80 text-zinc-400 hover:text-[#FF9EC6] hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 select-none cursor-zoom-out"
            onClick={() => {
              setLightboxImage(null);
              audioEngine.playClickChime();
            }}
          >
            {/* Close instruction / button at top right */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[9.5px] text-zinc-500 tracking-wider hidden sm:inline uppercase">
                ESC 键或点击空白处关闭
              </span>
              <button
                onClick={() => {
                  setLightboxImage(null);
                  audioEngine.playClickChime();
                }}
                className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-[#FF9EC6]/40 flex items-center justify-center transition-all cursor-pointer shadow-xl backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Centered Image display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center bg-black/10 rounded-2xl overflow-hidden p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-xl border border-zinc-900 shadow-2xl select-none"
                alt="Expanded view"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
