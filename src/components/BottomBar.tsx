/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Volume2, VolumeX, Eye, Activity, RotateCcw } from 'lucide-react';
import { CubeTheme, CubeMode } from '../types';
import { audioEngine } from './AudioEngine';

interface BottomBarProps {
  currentTheme: CubeTheme;
  setTheme: (t: CubeTheme) => void;
  currentMode: CubeMode;
  setMode: (m: CubeMode) => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentTheme,
  setTheme,
  currentMode,
  setMode,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [spectrum, setSpectrum] = useState<number[]>(new Array(16).fill(10));
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Initial mute state check
    setIsMuted(audioEngine.getMuted());

    // Loop to draw real-time visualizer waveform bars
    const updateSpectrum = () => {
      const data = audioEngine.getVisualizerData();
      // downsample or map to 16 bars
      setSpectrum(data.slice(0, 16));
      requestRef.current = requestAnimationFrame(updateSpectrum);
    };

    requestRef.current = requestAnimationFrame(updateSpectrum);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleMuteToggle = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleControlHover = () => {
    audioEngine.playHoverChime();
  };

  const handleControlClick = () => {
    audioEngine.playClickChime();
  };

  const themes: { id: CubeTheme; label: string; color: string }[] = [
    { id: 'neon', label: 'NEON', color: 'bg-[#FF9EC6]' },
    { id: 'glass', label: 'GLASS', color: 'bg-white' },
    { id: 'cyber', label: 'CYBER', color: 'bg-[#00F0FF]' },
    { id: 'retro', label: 'RETRO', color: 'bg-emerald-400' },
  ];

  const modes: { id: CubeMode; label: string }[] = [
    { id: 'solve', label: 'RESOLVED' },
    { id: 'breathe', label: 'BREATHE' },
    { id: 'spin', label: 'TWIST' },
    { id: 'scatter', label: 'SCATTER' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-max max-w-full px-4">
      {/* Premium capsule dashboard bar */}
      <div className="flex flex-wrap items-center bg-[#070707c2] backdrop-blur-xl border border-zinc-800/80 rounded-2xl px-5 py-3 md:py-3.5 gap-6 md:gap-8 justify-center shadow-2xl relative">
        {/* Subtle decorative target scope hair indicators in the corners */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-zinc-700 pointer-events-none" />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-zinc-700 pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-zinc-700 pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-zinc-700 pointer-events-none" />

        {/* CONTROLLER 1: Cube Themes */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-zinc-500 font-bold">
            <Eye className="w-3.5 h-3.5" />
            THEME
          </div>
          <div className="flex bg-black/60 rounded-xl p-1 gap-1 border border-zinc-900">
            {themes.map((t) => (
              <button
                key={t.id}
                onMouseEnter={handleControlHover}
                onClick={() => {
                  handleControlClick();
                  setTheme(t.id);
                }}
                className={`text-[9px] font-mono tracking-wider font-bold px-2 py-1 rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  currentTheme === t.id
                    ? 'bg-zinc-800 text-white shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${t.color}`} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer divider */}
        <div className="hidden md:block h-6 w-px bg-zinc-800" />

        {/* CONTROLLER 2: Cube Animation Modes */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-zinc-500 font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            BEHAVIOR
          </div>
          <div className="flex bg-black/60 rounded-xl p-1 gap-1 border border-zinc-900">
            {modes.map((m) => (
              <button
                key={m.id}
                onMouseEnter={handleControlHover}
                onClick={() => {
                  handleControlClick();
                  setMode(m.id);
                }}
                className={`text-[9px] font-mono tracking-wider font-bold px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer ${
                  currentMode === m.id
                    ? 'bg-zinc-800 text-[#FF9EC6]'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacer divider */}
        <div className="hidden md:block h-6 w-px bg-zinc-800" />

        {/* CONTROLLER 3: Web Audio Synth Synth system + spectrum */}
        <div className="flex items-center gap-4">
          <button
            onMouseEnter={handleControlHover}
            onClick={handleMuteToggle}
            className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 cursor-pointer ${
              !isMuted
                ? 'bg-[#FF9EC6]/10 text-[#FF9EC6] border border-[#FF9EC6]/20'
                : 'bg-zinc-900/60 text-zinc-500 border border-transparent hover:text-zinc-300'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Graphical equalizer waveform animation in Tailwind */}
          <div className="flex items-end gap-0.5 h-6 w-[64px] bg-black/40 px-2 rounded-lg border border-zinc-900 overflow-hidden">
            {spectrum.map((val, idx) => {
              // Convert value to a percentage height
              const heightPercentage = Math.min((val / 255) * 100 + 10, 100);
              return (
                <div
                  key={idx}
                  className={`w-[2.5px] transition-all duration-100 ease-out rounded-t-[1px] ${
                    isMuted ? 'bg-zinc-800' : 'bg-gradient-to-t from-pink-500 to-[#FF9EC6]'
                  }`}
                  style={{
                    height: `${isMuted ? 3 : heightPercentage}%`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
