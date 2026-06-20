/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { passionItems } from '../data/portfolioData';
import { Heart, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from './AudioEngine';

export const PassionsGrid: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handlePassionHover = () => {
    audioEngine.playHoverChime();
  };

  return (
    <section id="passions-section" className="py-24 scroll-mt-24 border-t border-zinc-900">
      
      {/* Title */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
          <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
            SECTION 06 // PERSONAL PURSUITS & ART
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-tight uppercase tracking-tighter">
          IPAD PORTRAIT PAINTINGS // 课余手绘人物头像创作
        </h2>
        <p className="text-zinc-500 font-mono text-xs tracking-wider mt-3 max-w-2xl leading-relaxed">
          在课余时间，我喜欢使用 IPad 进行一些人物头像的细致绘画与创作。这一份对艺术与色彩重构的坚持和热爱，作为我视觉表达的基础，贯穿了我的整个大学生活。
        </p>
      </div>

      {/* Grid Layout representing image zoom cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {passionItems.map((item, idx) => (
          <div
            key={item.id}
            onMouseEnter={handlePassionHover}
            onClick={() => {
              setLightboxImage(item.imageUrl);
              audioEngine.playClickChime();
            }}
            className="group relative rounded-3xl overflow-hidden bg-zinc-950/40 border border-zinc-900 hover:border-[#FF9EC6]/25 transition-all duration-500 cursor-zoom-in"
          >
            {/* Image section with Zoom Animation */}
            <div className={`w-full overflow-hidden ${item.aspectRatio} relative bg-zinc-900`}>
              <img
                src={item.imageUrl}
                referrerPolicy="no-referrer"
                loading="lazy"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              
              {/* Subtle Overlay with Magnifying/Zoom indicator */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-zinc-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-350">
                <ZoomIn className="w-4 h-4 text-[#FF9EC6]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Absolute hovering text details on bottom of card */}
            <div className="p-5 relative z-10 border-t border-zinc-950 bg-black/40 backdrop-blur-xs flex items-center justify-between">
              <div>
                <span className="text-[8px] font-mono tracking-widest text-[#FF9EC6] uppercase font-bold block mb-1">
                  // {item.category}
                </span>
                <span className="text-white text-xs font-bold font-sans group-hover:text-[#FF9EC6] transition-colors">
                  {item.title}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-900 text-zinc-500 group-hover:text-[#FF9EC6] group-hover:border-[#FF9EC6]/20 transition-all duration-300">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen Dialog */}
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
            {/* Close instruction / button top-right */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[9.5px] text-zinc-500 tracking-wider hidden sm:inline uppercase font-bold">
                ESC 键或点击任意空白处关闭
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

            {/* Display element container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center bg-black/10 rounded-2xl overflow-hidden p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-xl border border-zinc-900 shadow-2xl select-none"
                alt="Expanded portrait artwork"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
