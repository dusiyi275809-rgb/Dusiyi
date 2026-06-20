/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { switcherCategories, categorySwitcherData } from '../data/portfolioData';
import { PhoneMockup, BrowserMockup, PortraitMockup } from './DeviceMockups';
import { TiltCard } from './TiltCard';
import { Sparkles, ArrowUpRight, X, ZoomIn, Sliders, Smartphone, Globe } from 'lucide-react';
import { audioEngine } from './AudioEngine';

export const CategorySwitcher: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(switcherCategories[0] || 'AR INTERACTION');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Live tactile widget haptic parameters
  const [hapticVolume, setHapticVolume] = useState<number>(65);
  const [coreFrequency, setCoreFrequency] = useState<number>(240);

  const handleCategoryClick = (cat: string) => {
    audioEngine.playClickChime();
    setActiveCategory(cat);
  };

  const handleCategoryHover = () => {
    audioEngine.playHoverChime();
  };

  // Custom live Web Audio sound synthesizer for physical feedback of sliders and knobs
  const playCustomPitch = (freqOffset: number) => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140 + freqOffset * 3.5, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      // Gracefully catch if context blocked
    }
  };

  const activeProjects = categorySwitcherData[activeCategory] || [];
  const project = activeProjects[0] || null;

  return (
    <section id="interactive-switcher" className="py-24 scroll-mt-24 border-t border-zinc-900">
      


      {/* Main title block */}
      <div className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-zinc-900/60 pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
            <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
              AR Digital Interaction - Kivicube
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter">
            MUSEUM EMOTION-AR
          </h2>
        </div>
        <p className="max-w-xs text-zinc-500 font-mono text-[9px] tracking-wider uppercase leading-relaxed text-left md:text-right">
          Interactive full-screen capability simulation highlighting modular components and live haptics.
        </p>
      </div>

      {/* Sleek Horizontal Discipline Capsules Navigation */}
      <div className="flex flex-col items-center mb-16">
        <span className="font-mono text-[9.5px] text-zinc-500 tracking-[0.25em] font-black mb-4 uppercase">
          SELECT DISCIPLINE CATEGORY
        </span>
        <div className="flex overflow-x-auto w-full max-w-5xl no-scrollbar justify-start md:justify-center gap-2 p-1.5 bg-zinc-950/30 border border-zinc-900 rounded-[24px]">
          {switcherCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onMouseEnter={handleCategoryHover}
                onClick={() => handleCategoryClick(category)}
                className={`relative px-5 py-2.5 rounded-[16px] text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive ? 'text-[#FF9EC6]' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBar"
                    className="absolute inset-0 bg-[#FF9EC6]/5 border border-[#FF9EC6]/25 rounded-[16px]"
                    style={{ originY: '0px' }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Showcase Content Grid inspired by target photograph */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {project ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
            >
              
              {/* LEFT COLUMN: Metadata, Description & Inset Detail Widget (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:space-y-0">
                
                {/* Text Info and details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9.5px] text-[#FF9EC6] tracking-widest uppercase font-black bg-[#FF9EC6]/6 border border-[#FF9EC6]/15 px-2.5 py-1 rounded-md">
                      // {project.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
                      PROTOTYPE DEPLOYED
                    </span>
                  </div>
                  
                  <h3 className="text-white text-3xl sm:text-4xl font-display font-black tracking-tight leading-none uppercase">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans font-medium">
                    {project.description}
                  </p>

                  {/* Elegant contextual brochure tagline mimicking physical product specs in the reference photo */}
                  <div className="border-l-2 border-[#FF9EC6]/30 pl-4 py-1 italic font-serif text-[12.5px] text-zinc-400 leading-snug">
                    {activeCategory === 'AR INTERACTION' && "结合《头脑特工队》情绪导航“乐乐”，在层层探险中破解AR互动游戏，顺利摘得专属情绪回忆球。"}
                    {activeCategory === 'AR GACHAPON' && "在真实物理空间中投射出奇幻扭蛋机模型，使用智能摇杆完成心境交织的彩色扭蛋能量释放。"}
                  </div>

                  {/* Badges for Project tags */}
                  <div className="flex gap-1.5 flex-wrap pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono font-bold text-zinc-400 bg-zinc-950 px-3 py-1 border border-zinc-900 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM INSET ELEMENT (Adapting to project count in category to match asymmetric structure) */}
                {activeProjects.length > 1 ? (
                  /* Render beautiful micro card for the secondary module/project as inset detail draft */
                  <div className="bg-[#0a0a0d] border border-zinc-900/80 rounded-[28px] p-5 hover:border-[#FF9EC6]/20 transition-all duration-300 group/second mt-6 z-10 cursor-zoom-in"
                       onClick={() => {
                         if (activeProjects[1]?.mockContent?.imageUrl) {
                           setLightboxImage(activeProjects[1].mockContent.imageUrl);
                           audioEngine.playClickChime();
                         }
                       }}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="space-y-1">
                        <span className="font-mono text-[8.5px] text-[#FF9EC6] tracking-wider uppercase font-black">
                          // SECONDARY SPECIALIZED MODULE
                        </span>
                        <h4 className="text-white text-sm font-bold font-sans group-hover/second:text-[#FF9EC6] transition-colors line-clamp-1 mt-1">
                          {activeProjects[1].title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-[10.5px] leading-relaxed mb-4 line-clamp-2">
                      {activeProjects[1].description}
                    </p>
                    <div className="w-full h-24 bg-zinc-950/80 border border-zinc-900 rounded-xl overflow-hidden flex items-center justify-center opacity-70 group-hover/second:opacity-100 transition-opacity">
                      {activeProjects[1].mockContent.imageUrl ? (
                        <img 
                          src={activeProjects[1].mockContent.imageUrl} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                          alt="Detail thumb"
                        />
                      ) : (
                        <Globe className="w-6 h-6 text-zinc-700" />
                      )}
                    </div>
                  </div>
                ) : (
                  /* Render actual high-fidelity, interactive physical volume/frequency dial knob to mimic knob in reference image bottom-left */
                  <div className="bg-[#0a0a0d] border border-zinc-900/85 rounded-[28px] p-5 relative overflow-hidden group/tactile mt-6 shadow-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF9EC6]/3 rounded-bl-[40px] border-b border-l border-zinc-900/60 pointer-events-none" />
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[8.5px] text-[#FF9EC6] tracking-wider uppercase font-black flex items-center gap-1.5">
                          <Sliders className="w-3 h-3 text-[#FF9EC6]" /> 
                          TACTILE HAPTIC CONTROLLER // 02
                        </span>
                        <p className="text-zinc-500 text-[9px] leading-relaxed">
                          调整滑杆改变声学频率与振幅，聆听高复现微赫兹脉冲
                        </p>
                      </div>
                    </div>
                    
                    {/* Knob Dial & Haptic Slider layout */}
                    <div className="flex gap-5 items-center">
                      
                      {/* Stylized physical rotational knob */}
                      <div 
                        className="relative w-12 h-12 rounded-full border border-zinc-800 bg-[#121216] flex items-center justify-center cursor-pointer select-none group/knob hover:border-[#FF9EC6]/30 transition-all active:scale-95 duration-100"
                        onClick={() => {
                          const nextFreq = coreFrequency >= 440 ? 140 : coreFrequency + 50;
                          setCoreFrequency(nextFreq);
                          playCustomPitch(nextFreq - 100);
                        }}
                      >
                        <div 
                          className="absolute w-1 h-2.5 bg-[#FF9EC6] rounded-full top-1 left-1/2 -ml-0.5 origin-bottom transition-transform duration-300 shadow-[0_0_5px_rgba(255,158,198,0.7)]"
                          style={{ transform: `rotate(${(coreFrequency * 0.9) % 360}deg)` }}
                        />
                        <span className="font-mono text-[8px] text-zinc-500 group-hover/knob:text-white transition-colors uppercase font-bold text-center pt-1.5 select-none">
                          {coreFrequency}Hz
                        </span>
                      </div>

                      {/* Line range Slider */}
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                          <span>RESONANCE DEPTH</span>
                          <span className="text-[#FF9EC6] font-bold">{hapticVolume}%</span>
                        </div>
                        <div className="relative w-full h-1.5 bg-zinc-950 rounded-full border border-zinc-900/60 overflow-hidden">
                          <input 
                            type="range"
                            min="20"
                            max="100"
                            value={hapticVolume}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              setHapticVolume(val);
                              playCustomPitch(val * 2.2);
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF9EC6] to-pink-500 rounded-full shadow-[0_0_6px_rgba(255,158,198,0.15)]"
                            style={{ width: `${hapticVolume}%` }}
                          />
                        </div>
                      </div>

                    </div>

                    {/* Miniature parameter feedback */}
                    <div className="flex justify-between border-t border-zinc-950 mt-4 pt-3 text-[8px] font-mono text-zinc-650 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${hapticVolume > 20 ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                        <span>INTEGRATION: ACTIVE</span>
                      </div>
                      <div>GAIN VALUE: {Math.round(hapticVolume * 1.5)} FPS</div>
                      <div>DUMPING: HYDRATED</div>
                    </div>
                  </div>
                )}

              </div>

              {/* RIGHT COLUMN: Large, Tall Pristine Showcase Backplate with Core device (lg:col-span-7) */}
              <div className="lg:col-span-7">
                <div className="relative flex flex-col justify-center items-center bg-[#0d0d10] border border-zinc-900/60 rounded-[40px] px-6 py-12 md:py-16 shadow-[inset_0_4px_45px_rgba(255,158,198,0.01)] group/showcase hover:border-[#FF9EC6]/15 transition-all duration-700 min-h-[500px] h-full">
                  
                  {/* Clean light background mesh to match keyboard setup backplate in the reference photograph */}
                  <div className="absolute inset-4 rounded-[32px] bg-gradient-to-b from-zinc-950/25 to-zinc-950/5 pointer-events-none border border-zinc-900/20" />
                  
                  {/* Dynamic hovering metric pill */}
                  <div className="absolute top-5 right-5 flex items-center gap-2 font-mono text-[8.5px] bg-zinc-900/80 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full z-10 shadow-lg select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EC6] animate-pulse" />
                    <span>SYSTEM CORE: {project.mockContent.metric || 'PROMPT'}</span>
                  </div>

                  {/* Main scale-animate TiltCard containing Device Mockup */}
                  <div className="relative w-full z-10 flex justify-center transform group-hover/showcase:scale-[1.015] transition-transform duration-700 ease-out">
                    <TiltCard glowColor="rgba(255, 158, 198, 0.05)" className="w-full max-w-full flex justify-center">
                      {project.mockType === 'phone' ? (
                        <div className="py-2">
                          <PhoneMockup 
                            content={project.mockContent} 
                            onClick={() => {
                              if (project.mockContent.videoUrl) {
                                setLightboxImage(project.mockContent.videoUrl);
                                audioEngine.playClickChime();
                              } else if (project.mockContent.imageUrl) {
                                setLightboxImage(project.mockContent.imageUrl);
                                audioEngine.playClickChime();
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <PortraitMockup 
                          content={project.mockContent} 
                          onClickImage={() => {
                            if (project.mockContent.videoUrl) {
                              setLightboxImage(project.mockContent.videoUrl);
                              audioEngine.playClickChime();
                            } else if (project.mockContent.imageUrl) {
                              setLightboxImage(project.mockContent.imageUrl);
                              audioEngine.playClickChime();
                            }
                          }}
                        />
                      )}
                    </TiltCard>
                  </div>

                  {/* Interactive zoom help text in footer */}
                  <div className="absolute bottom-5 inset-x-0 text-center pointer-events-none z-10 select-none">
                    <span className="font-mono text-[8.5px] text-zinc-650 tracking-widest uppercase font-black">
                      点击图像放大展示整张高清图 (CLICK TO VIEW FULLSCREEN HD)
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>
          ) : (
            <div className="py-24 flex flex-col justify-center items-center text-center bg-zinc-950/20 border border-zinc-900 rounded-[32px]">
              <Sparkles className="w-8 h-8 text-zinc-700 animate-spin-slow mb-4" />
              <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                No active prototypes configured. Adding soon!
              </span>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox / Zoom-In Fullscreen Modal Dialog */}
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
            {/* Top Close bar */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]" onClick={(e) => e.stopPropagation()}>
              <span className="font-mono text-[9px] text-zinc-500 tracking-wider hidden sm:inline uppercase font-bold">
                ESC 键或点击空白任意处关闭
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

            {/* Display wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center bg-black/10 rounded-2xl overflow-hidden p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxImage.includes('capcut.cn') ? (
                <div className="w-full max-w-xl aspect-[9/16] md:max-w-md bg-zinc-950/95 rounded-2xl border border-zinc-850 p-6 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden">
                  {/* Abstract background loop preview */}
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-abstract-render-of-falling-colorful-balls-43048-large.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50 z-0 pointer-events-none" />

                  <div className="z-10 flex flex-col items-center mt-6">
                    <div className="w-14 h-14 bg-[#FF9EC6]/10 border border-[#FF9EC6]/30 text-[#FF9EC6] rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] text-[#FF9EC6] tracking-widest uppercase font-black px-2.5 py-1 bg-[#FF9EC6]/10 rounded border border-[#FF9EC6]/20">
                      AR 数字交互演示视频
                    </span>
                    <h3 className="text-white text-xl font-black tracking-tight mt-4 uppercase">
                      AR智能“扭扭机”
                    </h3>
                    <p className="text-zinc-400 text-xs max-w-xs leading-relaxed mt-2.5">
                      该演示视频包含多通道AR三维场景空间及真实物理重构机制细节。
                    </p>
                  </div>

                  <div className="w-full z-10 space-y-3 mb-4">
                    <a
                      href={lightboxImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full py-4 bg-gradient-to-r from-[#FF9EC6] to-pink-600 hover:from-pink-400 hover:to-pink-500 text-black font-black text-xs tracking-widest uppercase rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] items-center justify-center gap-2"
                    >
                      <span>在新窗口播放剪映高清视频</span>
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </a>
                    <p className="font-mono text-[8.5px] text-zinc-500">
                      由于剪映的安全跨域限制，请点击按钮进行高清源片播映
                    </p>
                  </div>
                </div>
              ) : lightboxImage.endsWith('.mp4') ? (
                <video
                  src={lightboxImage}
                  autoPlay
                  loop
                  controls
                  className="max-w-full max-h-[80vh] object-contain rounded-xl border border-zinc-900 shadow-2xl select-auto"
                />
              ) : (
                <img
                  src={lightboxImage}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[80vh] object-contain rounded-xl border border-zinc-900 shadow-2xl select-none"
                  alt="Expanded view mockup"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
