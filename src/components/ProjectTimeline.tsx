/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, BookOpen, Layers, Milestone, Trophy, ArrowRight, CornerDownRight, Smartphone, Eye, Lightbulb } from 'lucide-react';
import { audioEngine } from './AudioEngine';

// Securely import local image assets for reliable cross-regional deployment bundling
import timelineImage1 from '../assets/images/regenerated_image_1781966022640.png';
import timelineImage2 from '../assets/images/regenerated_image_1781884110396.png';
import timelineImage3 from '../assets/images/regenerated_image_1781877178618.png';

interface TimelineEvent {
  id: string;
  year: string;
  period: string;
  title: string;
  chineseTitle: string;
  category: string;
  institution: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metric: string;
  isMarquee?: boolean;
  image?: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 'ar-capstone-2026',
    year: '2026',
    period: 'SPRING TERM // JUNIOR YEAR',
    title: 'Inside Out: AR Emotion Game & Gachapon Machine',
    chineseTitle: '《头脑特工队》主题AR情绪导航游戏与扭扭机',
    category: 'AR INTERACTIONS & PHYSICAL INTEGRATION',
    institution: 'COMMUNICATION UNIVERSITY // CO-PROJECT',
    description: '作为大三春季最核心的跨界沉浸式设计，将《头脑特工队》的情绪主角们设计为彩色能量球。通过AR语音导航和现场拼图指引层层探险收集情绪回忆，并利用AR智能“扭扭机”兑换实物，打通数字体验与物理现实。',
    highlights: [
      '“乐乐”智能语音微动效交互指引',
      '物理空间智能投射3D扭蛋机模型',
      '真实与虚拟无缝衔接的软硬一体体验',
      '基于面部与身心互动的五色情绪维度拼图'
    ],
    techStack: ['AR Core', 'Unity ARFoundation', 'C#', '3D UI Mockups', 'Physical Toys Dev'],
    metric: 'FEATURED CAPSTONE // GRAND REWARD',
    isMarquee: true,
    image: timelineImage1
  },
  {
    id: 'gaochang-2025',
    year: '2026',
    period: 'AUTUMN TERM // JUNIOR YEAR',
    title: 'Gaochang Ruins: Immersive World Heritage Reconstruction',
    chineseTitle: '丝路遗珠高昌故城遗址AR/VR数字化复刻项目',
    category: 'DIGITAL HERITAGE & VR ENVIRONMENT',
    institution: 'COMMUNICATION UNIVERSITY // INDEPENDENT WORK',
    description: '攻克风化脆弱古人类遗产保护难题，采用高精数字雕刻技术与质感模拟算法，在虚幻引擎5中重建真实漫游交互模式。彻底解决游客难以抵达核心风化限制区的时空障碍。',
    highlights: [
      '单人全栈完成草图概念设计与建模',
      '虚幻5实时Lumen高精数字光照交互',
      '在保护性围挡外实现1:1毫米级遗迹全景漫游'
    ],
    techStack: ['虚幻引擎5 (UE5)', 'Lumen Real-time', '3ds Max / Blender', 'VR Controllers SDK'],
    metric: 'HERITAGE INNOVATION // UE5 WORK',
    image: timelineImage2
  },
  {
    id: 'viking-2024',
    year: '2026',
    period: 'AUTUMN TERM // SOPHOMORE YEAR',
    title: 'Viking Altar: Frozen Volumetric Arctic Scene Design',
    chineseTitle: '极地冰封洞穴与维京祭坛宏大尺度概念渲染',
    category: 'CONCEPT ART & ATMOSPHERE LEVEL DESIGN',
    institution: 'COMMUNICATION UNIVERSITY // LEVEL DESIGN LAB',
    description: '大二下学期的首个重磅三维关卡。研究法罗群岛冷峻冰川岩石地貌与冰封洞穴的光效折射，利用体积雾与动态着色器构建出宏大壮丽的极地维京仪式场。',
    highlights: [
      '极地冷调渐变光照排布与光线引导路径',
      '岩石风浪侵蚀肌理定制与雪花飞舞粒子系统',
      '聚焦于超大宏伟尺度的空间纵深结构编排'
    ],
    techStack: ['UE5 Runtime', 'Volumetric Shaders', 'Substance Painter', 'Niagara Particle System'],
    metric: 'CONCEPT LAB PREMIER // 4K LIGHTING',
    image: timelineImage3
  }
];

export const ProjectTimeline: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>('ar-capstone-2026');

  const handleNodeMouseEnter = (id: string) => {
    setHoveredId(id);
    audioEngine.playHoverChime();
  };

  const handleNodeClick = (id: string) => {
    setSelectedId(id);
    audioEngine.playClickChime();
  };

  return (
    <section id="project-timeline" className="py-24 scroll-mt-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c24_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      
      {/* Editorial aesthetic title block */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-zinc-900 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9EC6]" />
              <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
                SECTION 03.5 // ACADEMIC CHRONICLE & TIMELINE
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter">
              UNIVERSITY STUDY PATH // 创新历程
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
            Interactive Academic Chronicles (2024 - 2026)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Side: Interactive vertical timeline track */}
        <div className="lg:col-span-5 relative pl-4 md:pl-8 py-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[20px] md:left-[36px] top-0 bottom-0 w-[1.5px] bg-zinc-900" />
          
          {/* Active node highlight path */}
          <div 
            className="absolute left-[19.5px] md:left-[35.5px] w-[2px] bg-gradient-to-b from-[#FF9EC6] to-pink-600 transition-all duration-700 ease-out pointer-events-none"
            style={{
              top: selectedId === 'ar-capstone-2026' ? '12%' : selectedId === 'gaochang-2025' ? '46%' : '80%',
              height: '24%'
            }}
          />

          <div className="space-y-12 relative">
            {timelineData.map((event) => {
              const isSelected = selectedId === event.id;
              const isHovered = hoveredId === event.id;
              
              return (
                <div 
                  key={event.id}
                  className="group relative flex items-start gap-6 md:gap-10 cursor-pointer"
                  onMouseEnter={() => handleNodeMouseEnter(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleNodeClick(event.id)}
                >
                  
                  {/* Outer Timeline Ring indicator */}
                  <div className="relative z-15 flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 bg-black ${
                      isSelected 
                        ? 'border-[#FF9EC6] bg-[#FF9EC6]/10 text-[#FF9EC6] scale-110 shadow-[0_0_20px_rgba(255,158,198,0.3)]'
                        : isHovered 
                        ? 'border-[#FF9EC6]/40 bg-zinc-900 text-zinc-300 scale-105'
                        : 'border-zinc-800 bg-neutral-950 text-zinc-500'
                    }`}>
                      {event.isMarquee ? (
                        <Trophy className={`w-4 h-4 md:w-5 md:h-5 ${isSelected ? 'animate-pulse' : ''}`} />
                      ) : (
                        <Milestone className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </div>
                  </div>

                  {/* Text meta summaries */}
                  <div className="flex-1 py-1">
                    <div className="flex items-center gap-2 mb-1.5 font-mono text-[10px] md:text-xs">
                      <span className={`px-2 py-0.5 rounded border tracking-widest uppercase font-bold transition-colors duration-350 ${
                        isSelected 
                          ? 'border-[#FF9EC6]/40 text-[#FF9EC6] bg-[#FF9EC6]/5' 
                          : 'border-zinc-900 text-zinc-500'
                      }`}>
                        {event.year}
                      </span>
                      <span className="text-zinc-500 tracking-wider hidden sm:inline">•</span>
                      <span className="text-zinc-400 tracking-wider font-semibold">{event.period}</span>
                    </div>

                    <h3 className={`font-display text-lg md:text-xl font-bold uppercase tracking-tight transition-colors duration-350 ${
                      isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                    }`}>
                      {event.title}
                    </h3>
                    
                    <p className={`font-sans text-xs md:text-sm mt-1 transition-colors duration-350 ${
                      isSelected ? 'text-[#FF9EC6]' : 'text-zinc-500 group-hover:text-zinc-400'
                    }`}>
                      {event.chineseTitle}
                    </p>

                    <div className={`mt-3 flex flex-wrap gap-2 transition-all duration-500 ${
                      isSelected ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 overflow-hidden pointer-events-none'
                    }`}>
                      {event.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="font-mono text-[9px] text-zinc-400 bg-zinc-950 border border-zinc-900 px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed card display with highlight layouts */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {timelineData.map((event) => {
              if (selectedId !== event.id) return null;
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20, 
                    scale: 0.98,
                    transition: { duration: 0.3 }
                  }}
                  className={`w-full bg-[#070709] rounded-2xl border p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${
                    event.isMarquee 
                      ? 'border-[#FF9EC6]/30 shadow-[0_0_50px_rgba(255,158,198,0.12)]' 
                      : 'border-zinc-850 shadow-2xl'
                  }`}
                >
                  {/* Subtle corner neon light for marquee event */}
                  {event.isMarquee && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF9EC6]/20 to-transparent blur-2xl pointer-events-none" />
                  )}

                  {/* Header metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-zinc-900 pb-5">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#FF9EC6] tracking-widest font-black uppercase mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{event.metric}</span>
                      </div>
                      <span className="font-mono text-[9.5px] text-zinc-500 tracking-widest uppercase">
                        {event.institution}
                      </span>
                    </div>

                    <div className="px-3.5 py-1 rounded-full border border-zinc-850 bg-neutral-950 font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      {event.category}
                    </div>
                  </div>

                  {/* Main Grid Content: Left text columns, right vertical mock visual */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    
                    {/* Left text summaries */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {event.isMarquee && (
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FF9EC6]/10 border border-[#FF9EC6]/20 rounded text-[#FF9EC6] text-[8.5px] font-bold tracking-widest uppercase mb-4 animate-pulse">
                            <Smartphone className="w-3.5 h-3.5" />
                            <span>CO-CREATIVE UNIVERSITY LAB CAPSTONE</span>
                          </div>
                        )}

                        <h4 className="font-display text-2xl font-black text-white leading-tight uppercase mb-2">
                          {event.title}
                        </h4>
                        
                        <p className="font-sans text-sm text-[#FF9EC6] font-medium tracking-tight mb-4">
                          {event.chineseTitle}
                        </p>

                        <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {/* Interactive list of research milestones/highlights */}
                        <div className="space-y-2.5 mb-6">
                          <span className="font-mono text-[9.5px] text-zinc-500 tracking-widest uppercase block mb-1">
                            HIGHLIGHTED ACHIEVEMENTS // 核心创新
                          </span>
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-zinc-300">
                              <CornerDownRight className="w-4 h-4 text-[#FF9EC6] flex-shrink-0 mt-0.5" />
                              <span className="font-sans text-xs">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical specifications footer inside card */}
                      <div className="border-t border-zinc-900/60 pt-5">
                        <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-2">
                          CORE CAPABILITIES // 支撑媒介
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {event.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="font-mono text-[10px] px-2.5 py-0.5 rounded border border-zinc-850 bg-black text-zinc-300 hover:border-[#FF9EC6]/25 hover:text-white transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right side portrait image visual without heavy phone mockup */}
                    <div className="md:col-span-5 flex justify-center">
                      {event.image ? (
                        <div className={`group/timeline-img relative w-full aspect-[3/4] max-w-[240px] rounded-2xl overflow-hidden border transition-all duration-500 ${
                          event.isMarquee 
                            ? 'border-[#FF9EC6]/40 shadow-[0_0_30px_rgba(255,158,198,0.25)] hover:border-[#FF9EC6]/70 hover:shadow-[0_0_40px_rgba(255,158,198,0.4)]' 
                            : 'border-zinc-850 hover:border-zinc-700'
                        }`}>
                          {/* Fine dark inner vignette gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none z-10" />
                          
                          {/* Inner glowing hover sheet for interactive vibe */}
                          <div className="absolute inset-0 bg-[#FF9EC6]/5 opacity-0 group-hover/timeline-img:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                          <img 
                            src={event.image} 
                            referrerPolicy="no-referrer"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/timeline-img:scale-[1.05]" 
                            alt={event.title}
                          />

                          {/* Top-right subtle technology telemetry badge inside photo */}
                          <div className="absolute top-3 right-3 z-15 bg-black/75 border border-zinc-850 px-2 py-0.5 rounded text-[8px] font-mono text-zinc-400 tracking-wider uppercase">
                            {event.year}
                          </div>

                          {/* Bottom title display inside photo overlay */}
                          <div className="absolute bottom-3 left-3 right-3 z-15">
                            <span className="font-mono text-[8px] text-[#FF9EC6] tracking-widest uppercase block mb-0.5">
                              ACADEMIC GRAPHICS
                            </span>
                            <span className="font-display text-[10px] text-white/95 tracking-wide block uppercase font-bold truncate">
                              {event.title}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-[3/4] max-w-[240px] rounded-2xl border border-zinc-850 bg-neutral-950 flex flex-col items-center justify-center p-6 text-center text-zinc-550 gap-2.5">
                          <Eye className="w-7 h-7 text-zinc-750" />
                          <span className="font-mono text-[9px] tracking-widest uppercase">
                            NO ATTACHMENT REGISTERED
                          </span>
                        </div>
                      )}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
