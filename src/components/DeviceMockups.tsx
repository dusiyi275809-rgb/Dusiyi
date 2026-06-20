/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProjectItem } from '../types';
import { Smartphone, Globe, Landmark, Shield, User, Heart, Compass, MapPin, ZoomIn } from 'lucide-react';

interface PhoneMockupProps {
  content: ProjectItem['mockContent'];
  onClick?: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ content, onClick }) => {
  const { title, subtitle, metric, type, chartData, color = 'from-pink-400 to-[#FF9EC6]', imageUrl, videoUrl } = content;

  return (
    <div 
      onClick={(videoUrl || imageUrl) ? onClick : undefined}
      className={`relative w-[280px] h-[540px] bg-[#0c0c0e] rounded-[48px] p-2.5 shadow-2xl border-4 border-zinc-800 flex flex-col justify-between overflow-hidden group/phone preserve-3d ${(videoUrl || imageUrl) ? 'cursor-pointer active:scale-95 transition-all duration-300' : ''}`}
    >
      {/* Outer Glow Highlights */}
      <div className="absolute inset-0 rounded-[40px] border border-white/5 pointer-events-none" />

      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/85 animate-pulse" />
        <div className="w-12 h-1 bg-zinc-900 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-[#FF9EC6]/80" />
      </div>

      {/* Screen Area */}
      <div 
        className="w-full h-full bg-[#070708] rounded-[38px] overflow-hidden flex flex-col relative border border-zinc-900"
        style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
      >
        
        {videoUrl ? (
          <div className="w-full h-full relative" style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
            <video
              src={videoUrl.includes('capcut.cn') ? 'https://assets.mixkit.co/videos/preview/mixkit-abstract-render-of-falling-colorful-balls-43048-large.mp4' : videoUrl}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              className="absolute inset-0 w-full h-full object-cover z-0 group-hover/phone:scale-[1.03] transition-transform duration-700 ease-out"
              style={{ 
                transform: 'translate3d(0, 0, 0) scale(1.001)', 
                backfaceVisibility: 'hidden'
              }}
            />
            {/* Elegant hover magnifying zoom-in overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10">
              <div className="w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center scale-90 group-hover/phone:scale-100 transition-all duration-300">
                <ZoomIn className="w-5 h-5 text-[#FF9EC6]" />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold uppercase py-0.5 px-2.5 bg-black/80 border border-[#FF9EC6]/25 rounded-md">
                点击放大 VIEW HD
              </span>
            </div>

            {/* Dark overlay at top for status bar legibility */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Top Status Indicators layered over real image */}
            <div className="absolute top-11 inset-x-0 px-6 flex justify-between items-center text-[9px] font-mono text-zinc-300 z-20 pointer-events-none">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px]">5G</span>
                <div className="w-4 h-2.5 border border-zinc-300 rounded-xs p-0.5 flex items-center">
                  <div className="w-full h-full bg-zinc-300 rounded-2xs" />
                </div>
              </div>
            </div>
          </div>
        ) : imageUrl ? (
          <div className="w-full h-full relative" style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
            <img
              src={imageUrl}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover z-0 group-hover/phone:scale-[1.03] transition-transform duration-700 ease-out"
              style={{ 
                transform: 'translate3d(0, 0, 0) scale(1.001)', 
                backfaceVisibility: 'hidden',
                imageRendering: 'auto'
              }}
              alt={title || "Screenshot"}
            />
            {/* Elegant hover magnifying zoom-in overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10">
              <div className="w-10 h-10 rounded-full bg-black/80 border border-white/20 flex items-center justify-center scale-90 group-hover/phone:scale-100 transition-all duration-300">
                <ZoomIn className="w-5 h-5 text-[#FF9EC6]" />
              </div>
              <span className="font-mono text-[9px] tracking-widest text-[#FF9EC6] font-bold uppercase py-0.5 px-2.5 bg-black/80 border border-[#FF9EC6]/25 rounded-md">
                点击放大 VIEW HD
              </span>
            </div>

            {/* Dark overlay at top for status bar legibility */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Top Status Indicators layered over real image */}
            <div className="absolute top-11 inset-x-0 px-6 flex justify-between items-center text-[9px] font-mono text-zinc-300 z-20 pointer-events-none">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px]">5G</span>
                <div className="w-4 h-2.5 border border-zinc-300 rounded-xs p-0.5 flex items-center">
                  <div className="w-full h-full bg-zinc-300 rounded-2xs" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mock Screen Content */
          <div className="flex-1 p-5 pt-12 flex flex-col justify-between relative z-10">
          
          {/* Top Status Indicators */}
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 tracking-wider">
            <span>09:41 AM</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="w-3.5 h-2 border border-zinc-500 rounded-xs p-0.5">
                <div className="w-full h-full bg-zinc-550 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Dynamic Content based on Mock Type */}
          <div className="flex-1 flex flex-col justify-between mt-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EC6] animate-ping" />
                <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase font-semibold">
                  {subtitle || 'ACTIVE LAYER'}
                </span>
              </div>
              <h4 className="text-white text-base font-bold font-sans tracking-tight leading-tight">
                {title}
              </h4>
            </div>

            {/* Core Area Chart/Visual Representation */}
            <div className="my-4 flex-1 flex flex-col justify-center">
              {type === 'navigation' && (
                <div className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 font-mono">MAP ROUTE STATE</span>
                    <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                  </div>
                  <div className="flex items-end justify-between h-14 relative mt-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-[1.5px] bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-teal-500/20" />
                    </div>
                    {/* Tiny visual chart bars */}
                    {(chartData || [30, 45, 60, 50, 75, 80]).map((h, i) => (
                      <div
                        key={i}
                        className="w-2.5 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-full transition-all duration-500 relative z-10"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white font-mono">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TRAILHEAD ENTRY IN RANGE</span>
                  </div>
                </div>
              )}

              {type === 'bento' && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-2 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-3.5 border border-[#FF9EC6]/20 flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-[#FF9EC6] tracking-wider uppercase font-bold">RESERVATION ACTIVE</span>
                    <span className="text-xs text-white font-bold">12 Table Placements</span>
                  </div>
                  <div className="bg-zinc-900/60 rounded-xl p-2.5 border border-zinc-850 flex flex-col justify-between">
                    <span className="text-[8px] text-zinc-500 uppercase font-mono">Rating</span>
                    <span className="text-sm font-black text-white">4.9 ★</span>
                  </div>
                  <div className="bg-zinc-900/60 rounded-xl p-2.5 border border-zinc-850 flex flex-col justify-between">
                    <span className="text-[8px] text-zinc-500 uppercase font-mono">Locals</span>
                    <span className="text-sm font-black text-white">100k</span>
                  </div>
                </div>
              )}

              {type === 'visualizer' && (
                <div className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-cyan-400 font-mono">HRV AUTONOMIC WAVE</span>
                    <span className="text-[10px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full">ACTIVE</span>
                  </div>
                  <div className="flex items-end justify-between h-14 relative mt-2">
                    {(chartData || [40, 50, 48, 65, 80, 92, 94]).map((h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {type === 'photo' && (
                <div className="rounded-2xl overflow-hidden relative h-28 border border-zinc-800 group-hover/phone:border-[#FF9EC6]/30 transition-colors">
                  <img
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover/phone:scale-110 duration-700 transition-transform"
                    alt="iPhone studio mockup"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 font-mono text-[9px] text-white">
                    <Heart className="w-3 h-3 text-[#FF9EC6] fill-[#FF9EC6]" />
                    <span>MONO RAW ISO 100</span>
                  </div>
                </div>
              )}

              {!type && (
                <div className="bg-zinc-900/40 rounded-xl p-4 border border-zinc-850 h-28 flex flex-col justify-center items-center text-center">
                  <div className={`p-3 rounded-full bg-zinc-900 border border-zinc-800 text-[#FF9EC6] mb-2`}>
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">FLUID INTERACTIVE LAYER</span>
                </div>
              )}
            </div>

            {/* Bottom Giant Metric */}
            <div className="flex items-baseline justify-between border-t border-zinc-900/80 pt-3">
              <span className="text-zinc-500 text-[10px] font-mono tracking-wider">INDEX METRIC</span>
              <span className={`text-2xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent tracking-tight`}>
                {metric || '01'}
              </span>
            </div>
          </div>
        </div>
      )}

        {/* Home Sweep bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30" />
      </div>
    </div>
  );
};

interface BrowserMockupProps {
  content: ProjectItem['mockContent'];
  onClickImage?: () => void;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ content, onClickImage }) => {
  const { title, subtitle, metric, type, chartData, color = 'from-[#FF9EC6] to-pink-600', imageUrl } = content;

  return (
    <div className="w-full aspect-[5/3] md:aspect-[16/10] bg-[#0c0c0e] rounded-2xl border border-zinc-850 shadow-2xl flex flex-col justify-between overflow-hidden group/browser preserve-3d">
      
      {/* Browser Tab Header Section */}
      <div className="bg-[#121215] px-4 py-2 flex items-center justify-between border-b border-zinc-900/60 font-mono text-[9px] text-zinc-500 select-none">
        {/* Left window control dots */}
        <div className="flex gap-1.5 items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500" />
        </div>

        {/* Address Search Area */}
        <div className="bg-[#070708] border border-zinc-800 rounded-lg px-6 py-1 mx-4 flex-1 text-center text-zinc-400 font-mono truncate max-w-sm flex items-center justify-center gap-1.5">
          <Globe className="w-3 h-3 text-zinc-500" />
          <span>{imageUrl ? 'https://unrealengine.com/concept/viking-altar' : `https://builds.johnyvino.com/api/${type || 'dashboard'}`}</span>
        </div>

        {/* Plus tab button */}
        <div className="hidden sm:flex text-zinc-400 gap-2 items-center text-[10px]">
          <span>{imageUrl ? 'UE5 VIEW' : 'TAB +'}</span>
        </div>
      </div>

      {imageUrl ? (
        /* Render high-fidelity image inside the browser */
        <div 
          className={`flex-1 bg-[#060607] relative overflow-hidden group/browser-img ${onClickImage ? 'cursor-zoom-in' : ''}`}
          onClick={onClickImage}
        >
          <img
            src={imageUrl}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover group-hover/browser:scale-[1.03] transition-transform duration-700 ease-out"
            alt={title || "Screenshot"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-center text-[9px] font-mono text-white/90">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EC6] animate-pulse" />
              {subtitle || 'UNREAL ENGINE 5 PROJECT'}
            </span>
            <span className="bg-black/60 border border-zinc-800 px-2 py-0.5 rounded text-zinc-300">
              {metric || '4K CAPTURE'}
            </span>
          </div>
        </div>
      ) : (
        /* Main Internal Site Webpage (Default Sandbox Simulation) */
        <div className="flex-1 bg-[#060607] p-4 flex flex-col justify-between relative">
          <div className="absolute inset-0 bg-[radial-gradient(#1c1c24_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

          {/* Mockup internal content */}
          <div className="flex-1 flex flex-col justify-between relative z-10 gap-3">
            
            {/* Header section of dashboard */}
            <div className="flex items-start justify-between border-b border-zinc-900 pb-3">
              <div>
                <span className="font-mono text-[8px] text-[#FF9EC6] tracking-[0.2em] font-black uppercase">
                  {subtitle || 'ENTERPRISE DECK'}
                </span>
                <h5 className="text-white text-sm md:text-base font-bold font-sans tracking-tight mt-0.5">
                  {title}
                </h5>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded-md font-mono">
                  {metric || 'LIVE'}
                </span>
              </div>
            </div>

            {/* Dynamic Content of the Inside Webpage */}
            <div className="flex-1 flex gap-3 my-1">
              
              {/* Left Column - Graphic/Main Chart */}
              <div className="flex-1 bg-zinc-950/40 rounded-xl p-3 border border-zinc-900 flex flex-col justify-between min-h-[90px] md:min-h-[140px]">
                
                {type === 'automotive' && (
                  <div className="flex flex-col h-full justify-between gap-1.5">
                    <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                      <span>COCKPIT TELEMETRY v2</span>
                      <span className="text-pink-400">ACTIVATED</span>
                    </div>
                    {/* Beautiful vector automotive dial wheel */}
                    <div className="flex-1 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 60" className="w-24 h-16">
                        <path
                          d="M 10 50 A 40 40 0 0 1 90 50"
                          fill="none"
                          stroke="#222"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 10 50 A 40 40 0 0 1 70 20"
                          fill="none"
                          stroke="#FF9EC6"
                          strokeWidth="8"
                          strokeLinecap="round"
                          className="shadow-[0_0_15px_rgba(255,158,198,0.5)]"
                        />
                        <circle cx="50" cy="50" r="16" fill="#111" />
                        <text x="50" y="52" fontSize="8" fill="#fff" textAnchor="middle" className="font-mono font-bold">
                          140KM/H
                        </text>
                      </svg>
                    </div>
                  </div>
                )}

                {type === 'finance' && (
                  <div className="flex flex-col h-full justify-between gap-2">
                    <div className="flex justify-between items-center text-[9px] font-mono text-cyan-400">
                      <span>HIGH VOLUME ORDER BOOK</span>
                      <span>SPREAD: 0.01%</span>
                    </div>
                    {/* Ledger Area Chart */}
                    <div className="flex-1 flex items-end justify-between gap-1 h-12 relative">
                      {(chartData || [30, 45, 35, 60, 55, 80, 75, 95]).map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-cyan-600 to-indigo-400 rounded-t-sm"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {type === 'medical' && (
                  <div className="flex flex-col h-full justify-between gap-2.5">
                    <div className="flex justify-between items-center text-[9px] font-mono text-purple-400">
                      <span>CARDIAC PULSE FREQUENCY</span>
                      <span className="animate-pulse font-bold">● ONLINE</span>
                    </div>
                    {/* Sine waveform */}
                    <div className="flex-1 flex items-center justify-center">
                      <svg viewBox="0 0 160 40" className="w-full h-8 overflow-visible">
                        <path
                          d="M0 20 Q15 0 30 20 T60 20 T90 20 T120 20 T150 20"
                          fill="none"
                          stroke="#9333EA"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {type === 'neon' && (
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    <span className="font-display text-lg text-[#FF9EC6] tracking-tight mb-1">
                      thecodeflow.co
                    </span>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      VISUAL LANDING DESIGNER FRAMEWORK
                    </p>
                  </div>
                )}

                {type === 'typography' && (
                  <div className="flex flex-col h-full justify-center">
                    <span className="font-display font-black text-xs text-white leading-tight mb-1">
                      "BE SPONTANEOUS, CRAFT AUTHENTIC EXPERIENCES"
                    </span>
                    <span className="font-mono text-[8px] text-zinc-600 uppercase">
                      Variable Display Text Container Model
                    </span>
                  </div>
                )}

                {type === 'business' && (
                  <div className="flex flex-col h-full justify-between gap-2">
                    <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500">
                      <span>ACQUISITION REPORT CHANNELS</span>
                      <span className="text-purple-400 font-bold">+18.4%</span>
                    </div>
                    <div className="flex-1 flex items-end justify-between gap-1 h-12">
                      {(chartData || [10, 20, 15, 30, 25, 45, 55]).map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-sm"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {!type && (
                  <div className="flex-1 flex items-center justify-center text-zinc-700 font-mono text-[10px]">
                    <span>RESONANT DATA CANVAS // v2.0</span>
                  </div>
                )}

              </div>

              {/* Right Column - Secondary mini telemetry metrics list */}
              <div className="w-[80px] md:w-[120px] bg-zinc-950/40 rounded-xl p-3 border border-zinc-900 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-600 font-mono uppercase">API LATENCY</span>
                    <span className="text-[10px] text-emerald-400 font-bold font-mono">3ms</span>
                  </div>
                  <div className="flex flex-col border-t border-zinc-900 pt-1.5">
                    <span className="text-[8px] text-zinc-650 font-mono uppercase">BANDWIDTH</span>
                    <span className="text-[10px] text-white font-mono">98.2 MB/S</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[8px] text-zinc-500 border-t border-zinc-900 pt-1.5 flex-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>SECURE</span>
                </div>
              </div>

            </div>

            {/* Simple status footer inside */}
            <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600">
              <span>© DEPLOYED AT APPLET_ID</span>
              <span>SYSTEM STABLE 100%</span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

interface PortraitMockupProps {
  content: ProjectItem['mockContent'];
  onClickImage?: () => void;
}

export const PortraitMockup: React.FC<PortraitMockupProps> = ({ content, onClickImage }) => {
  const { title, subtitle, metric, type, chartData, color = 'from-[#FF9EC6] to-pink-600', imageUrl, videoUrl } = content;

  return (
    <div className="w-full max-w-[340px] aspect-[10/16] bg-[#09090b] rounded-[24px] border border-zinc-800/80 p-2 shadow-2xl flex flex-col justify-between overflow-hidden group/portrait preserve-3d transition-all duration-500 hover:border-[#FF9EC6]/30 hover:shadow-[0_0_35px_rgba(255,158,198,0.2)]">
      {/* Outer border fine highlight */}
      <div className="absolute inset-0 rounded-[24px] border border-white/5 pointer-events-none transition-colors duration-500 group-hover/portrait:border-[#FF9EC6]/10" />

      {/* Frame Screen Area */}
      <div className="w-full h-full bg-[#050506] rounded-[18px] overflow-hidden flex flex-col relative border border-zinc-900 transition-colors duration-500 group-hover/portrait:border-[#FF9EC6]/15">
        {videoUrl ? (
          /* Pure high-fidelity vertical video container */
          <div 
            className={`flex-1 bg-[#050506] relative overflow-hidden group/portrait-img transition-all duration-500 ${onClickImage ? 'cursor-zoom-in' : ''}`}
            onClick={onClickImage}
          >
            {/* Soft inner ambient pink glow overlay */}
            <div className="absolute inset-0 bg-[#FF9EC6]/5 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            <video
              src={videoUrl.includes('capcut.cn') ? 'https://assets.mixkit.co/videos/preview/mixkit-abstract-render-of-falling-colorful-balls-43048-large.mp4' : videoUrl}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              className="absolute inset-0 w-full h-full object-cover group-hover/portrait:scale-[1.04] transition-transform duration-700 ease-out"
            />
            {/* Hover fullscreen interactive hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 z-10">
              <div className="w-8 h-8 rounded-full bg-black/85 border border-white/10 flex items-center justify-center scale-90 group-hover/portrait:scale-100 transition-transform duration-300">
                <ZoomIn className="w-4.5 h-4.5 text-[#FF9EC6]" />
              </div>
              <span className="font-mono text-[7.5px] tracking-widest text-[#FF9EC6] font-bold uppercase py-0.5 px-2 bg-black/85 border border-[#FF9EC6]/25 rounded">
                VIEW FULLSCREEN
              </span>
            </div>

            {/* Bottom soft ambient gradient to ease text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none z-10" />
            
            {/* Fine typography over the portrait */}
            <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center text-[8px] font-mono text-white/95">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EC6] animate-pulse" />
                {subtitle || 'AR REAL-TIME VIEW'}
              </span>
              <span className="bg-black/65 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
                {metric || 'AR CORE'}
              </span>
            </div>
          </div>
        ) : imageUrl ? (
          /* Pure high-fidelity vertical image container */
          <div 
            className={`flex-1 bg-[#050506] relative overflow-hidden group/portrait-img transition-all duration-500 ${onClickImage ? 'cursor-zoom-in' : ''}`}
            onClick={onClickImage}
          >
            {/* Soft inner ambient pink glow overlay */}
            <div className="absolute inset-0 bg-[#FF9EC6]/5 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            <img
              src={imageUrl}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover/portrait:scale-[1.04] transition-transform duration-700 ease-out"
              alt={title || "Portrait Showcase"}
            />
            {/* Hover fullscreen interactive hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 z-10">
              <div className="w-8 h-8 rounded-full bg-black/85 border border-white/10 flex items-center justify-center scale-90 group-hover/portrait:scale-100 transition-transform duration-300">
                <ZoomIn className="w-4.5 h-4.5 text-[#FF9EC6]" />
              </div>
              <span className="font-mono text-[7.5px] tracking-widest text-[#FF9EC6] font-bold uppercase py-0.5 px-2 bg-black/85 border border-[#FF9EC6]/25 rounded">
                VIEW FULLSCREEN
              </span>
            </div>

            {/* Bottom soft ambient gradient to ease text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none z-10" />
            
            {/* Fine typography over the portrait */}
            <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-center text-[8px] font-mono text-white/95">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9EC6] animate-pulse" />
                {subtitle || 'AR REAL-TIME VIEW'}
              </span>
              <span className="bg-black/65 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">
                {metric || 'AR CORE'}
              </span>
            </div>
          </div>
        ) : (
          /* Clean internal fallback area */
          <div className="flex-1 bg-[#050506] p-3.5 flex flex-col justify-between relative">
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c24_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />

            <div className="flex-1 flex flex-col justify-between relative z-10 gap-3">
              
              <div className="border-b border-zinc-900 pb-2">
                <span className="font-mono text-[7.5px] text-[#FF9EC6] tracking-[0.15em] font-black uppercase">
                  {subtitle || 'PORTRAIT PREVIEW'}
                </span>
                <h5 className="text-white text-xs font-bold font-sans tracking-tight leading-tight mt-0.5">
                  {title}
                </h5>
              </div>

              <div className="flex-1 bg-zinc-950/50 rounded-xl p-3 border border-zinc-900/80 flex flex-col justify-between gap-2.5">
                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-550 border-b border-[#121215] pb-1.5">
                  <span>RESIDUAL MATRIX</span>
                  <span className="text-[#FF9EC6] animate-pulse">● LIVE</span>
                </div>

                <div className="flex-1 flex items-center justify-center text-zinc-700 font-mono text-[8.5px]">
                  <span>RESONANT DATA CANVAS</span>
                </div>
              </div>

              <div className="bg-zinc-950/30 rounded-xl p-2.5 border border-zinc-900/50 space-y-1.5">
                <div className="flex justify-between text-[7.5px] font-mono">
                  <span className="text-zinc-600">CAPABILITY COEFFICIENT</span>
                  <span className="text-white font-bold">{metric || '98.2%'}</span>
                </div>
              </div>

            </div>

            <div className="flex justify-between items-center text-[7.5px] font-mono text-zinc-650 border-t border-zinc-900/60 pt-2 mt-2 select-none">
              <span>PORTRAIT STABLE</span>
              <span>100%</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

