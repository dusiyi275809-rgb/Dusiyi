/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Sparkles, 
  Cpu, 
  Box, 
  Layers, 
  TrendingUp, 
  Brush, 
  Compass,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText('Dusiyi275');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 scroll-mt-24 border-t border-zinc-900 relative">
      {/* Scope crosshair highlights */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-800" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-800" />
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF9EC6] animate-pulse" />
          <span className="font-mono text-xs text-[#FF9EC6] tracking-widest uppercase font-black">
            个人简介
          </span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-5xl text-white leading-none uppercase tracking-tighter">
          ABOUT SIYI DU // 杜思仪
        </h2>
      </div>

      {/* Main Grid: Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Academy education & Identity Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Main profile brief */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#08080a] border border-zinc-900 rounded-[32px] p-8 flex flex-col justify-between h-full group hover:border-[#FF9EC6]/20 transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-pink-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[#FF9EC6]">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans tracking-tight text-white">杜思仪</h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Siyi Du • UI & AR Designer</p>
                </div>
              </div>

              <div className="h-px bg-zinc-900/60" />

              <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                我致力于 UI 与 AR 空间设计，深耕数字化创意媒介。在这两个领域的交汇点上，我探索如何建立更直观、富有审美感染力与空间实存感的交互体验。
              </p>
              
              <p className="text-zinc-500 text-xs leading-relaxed">
                拥有深厚的艺术审美根底与前沿跨界创意思维。对界面细节具有敏锐的捕捉力和严苛的设计标准，并致力于打通真实与虚似维度的 AR 基础交互逻辑，在全新维度释放内容活力。
              </p>
            </div>

            <div className="mt-8 flex gap-2.5">
              <span className="text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-400 px-3 py-1.5 rounded-xl font-mono tracking-wide">
                ↳ CREATIVE THINKER
              </span>
              <span className="text-[10px] bg-zinc-950 border border-zinc-900 text-[#FF9EC6] px-3 py-1.5 rounded-xl font-mono tracking-wide font-semibold">
                ↳ FUTURE CRAFT
              </span>
            </div>
          </motion.div>

          {/* Education timeline card */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#08080a] border border-zinc-900 rounded-[32px] p-8 relative overflow-hidden group hover:border-purple-500/20 transition-colors duration-500"
          >
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
            
            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-2.5 bg-zinc-950 border border-zinc-900 text-purple-400 rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-black">
                Education Registry
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-[9px] text-[#FF9EC6] font-bold block mb-1">
                  MOSCOW, RU // ACADEMY OF ART
                </span>
                <h4 className="text-white text-base font-bold leading-snug">
                  斯特罗加诺夫莫斯科国立工艺美术大学
                </h4>
                <p className="text-zinc-500 text-xs mt-1 font-mono">
                  Stroganov Moscow State Academy of Arts and Industry
                </p>
              </div>

              <div className="h-px bg-zinc-900/60" />

              <div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-medium">数字媒体专业 (Digital Media Major)</span>
                  <span className="text-zinc-600 font-mono text-[10px]">M.A. & B.A. Tracks</span>
                </div>
                <p className="text-zinc-500 text-xs mt-1">
                  学术领域探索 3D 成像、数字感官装置与跨媒介三维用户交互结构。
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Skills & Expertises Bento Deck */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Advanced Tech Tools */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#08080a] border border-zinc-900 rounded-[30px] p-6 flex flex-col justify-between hover:border-[#FF9EC6]/20 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-zinc-950 border border-zinc-900 text-cyan-400 rounded-xl">
                  <Box className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase font-bold">
                  SOFTWARE SUITE
                </span>
              </div>
              <h4 className="text-white font-bold text-base tracking-tight mb-2">精通核心创意工具链</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                掌握由 2D 原型到 3D 复杂建模和虚似渲染管线的全套协作流：
              </p>
              
              <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-[10px]">
                <div className="flex items-center gap-2 p-2 bg-zinc-950 border border-zinc-900/60 rounded-xl text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Figma (UI/UX)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-zinc-950 border border-zinc-900/60 rounded-xl text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Blender (3D)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-zinc-950 border border-zinc-900/60 rounded-xl text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>C4D (Studio)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-zinc-950 border border-zinc-900/60 rounded-xl text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>UE5 (Real-time)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-zinc-900/50 pt-4 flex items-center justify-between text-zinc-600 font-mono text-[9px]">
              <span>TECHNICAL PIPELINE</span>
              <span className="text-cyan-400 font-bold">STABLE V3</span>
            </div>
          </motion.div>



          {/* Card 3: Interactive AR Spatials */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#08080a] border border-zinc-900 rounded-[30px] p-6 flex flex-col justify-between hover:border-[#FF9EC6]/20 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-zinc-950 border border-zinc-900 text-emerald-400 rounded-xl">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase font-bold">
                  AR Interactions
                </span>
              </div>
              <h4 className="text-white font-bold text-base tracking-tight mb-2">空间界面与AR交互逻辑</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                跨越二维约束。熟悉空间界面深度控制、六自由度 (6DoF) 操控、锚定投射和视野平衡：
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed mt-2.5">
                建立能使视线无阻碍穿梭、自然手势流畅触发、并且符合空间人类工效学的下一代信息交互逻辑。
              </p>
            </div>
            
            <div className="mt-6 border-t border-zinc-900/50 pt-4 flex items-center justify-between text-zinc-600 font-mono text-[9px]">
              <span>SPATIAL COMPUTING</span>
              <span className="text-emerald-400 font-bold">RESONANT</span>
            </div>
          </motion.div>

          {/* Card 4: Dev & Hands-on Passion */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#08080a] border border-zinc-900 rounded-[30px] p-6 flex flex-col justify-between hover:border-[#FF9EC6]/20 transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-zinc-950 border border-zinc-900 text-indigo-400 rounded-xl">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase font-bold">
                  Future Drive
                </span>
              </div>
              <h4 className="text-white font-bold text-base tracking-tight mb-2">超群动手力与趋势热忱</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                信奉以高保真可运行的原型说话。拥有敏捷的代码、蓝图测试和立体资产调试能力。
              </p>
              <p className="text-zinc-500 text-xs leading-relaxed mt-2.5">
                长久保持对前沿渲染技术、多终端串流、物理引擎表现和硬件演进趋势的高频关注与实操钻研。
              </p>
            </div>
            
            <div className="mt-6 border-t border-zinc-900/50 pt-4 flex items-center justify-between text-zinc-600 font-mono text-[9px]">
              <span>TREND REVOLUTION</span>
              <span className="text-indigo-400 font-bold">100% INITIATIVE</span>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
