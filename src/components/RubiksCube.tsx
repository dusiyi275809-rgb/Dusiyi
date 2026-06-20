/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { CubeTheme, CubeMode } from '../types';

interface RubiksCubeProps {
  theme: CubeTheme;
  mode: CubeMode;
  tiltX: number; // calculated tilt from mouseX
  tiltY: number; // calculated tilt from mouseY
}

export const RubiksCube: React.FC<RubiksCubeProps> = ({
  theme,
  mode,
  tiltX,
  tiltY,
}) => {
  const [time, setTime] = useState(0);
  const requestRef = useRef<number | null>(null);

  // Keep a clean clock going for smoother wave calculations
  useEffect(() => {
    const animate = () => {
      setTime((prev) => prev + 0.016); // ~60fps step
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate 26 outer cubelet coordinates (excluding 0,0,0 core)
  const cubelets = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (x === 0 && y === 0 && z === 0) continue;
        cubelets.push({ x, y, z, id: cubelets.length });
      }
    }
  }

  // Base configurations
  const d = 44; // size of each cubelet in pixels
  const gap = 6; // base spacing in pixels

  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center perspective-1000 select-none">
      {/* Outer 3D Sphere of Rotate Container */}
      <div
        className="w-full h-full relative preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${-20 + tiltY * 35}deg) rotateY(${35 + tiltX * 35 + time * 12}deg)`,
        }}
      >
        {cubelets.map((c) => {
          // Distance from core
          const dist = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);

          // Calculate breathing dynamics
          let breathFactor = 1.0;
          if (mode === 'breathe') {
            breathFactor = 1.0 + 0.35 * Math.sin(time * 2.5 + dist * 1.1);
          } else if (mode === 'scatter') {
            breathFactor = 1.6 + 0.4 * Math.sin(time * 1.5 + c.id * 0.15);
          }

          // Calculate slice-spinning rotation
          let sliceRotX = 0;
          let sliceRotY = 0;
          let sliceRotZ = 0;

          if (mode === 'spin') {
            // Spin layers based on position
            if (c.y === 1) {
              sliceRotY = time * 85; // Spin top clockwise
            } else if (c.y === -1) {
              sliceRotY = -time * 85; // Spin bottom counter-clockwise
            } else {
              sliceRotX = time * 45; // Spin middle vertically
            }
          }

          // Compute raw 3D translations
          const tx = c.x * (d + gap) * breathFactor;
          const ty = c.y * (d + gap) * breathFactor;
          const tz = c.z * (d + gap) * breathFactor;

          // Theme Styling for the individual cubelet faces
          let faceClass = 'absolute inset-0 border rounded-xs preserve-3d backface-hidden';
          let borderStyle = {};

          if (theme === 'neon') {
            // Neon pink / deep black scheme
            faceClass += ' bg-[#000000ee] border-[#FF9EC6] shadow-[0_0_8px_rgba(255,158,198,0.2)]';
          } else if (theme === 'glass') {
            // Frosted silver metallic glass
            faceClass += ' bg-white/5 backdrop-blur-xs border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.15)]';
          } else if (theme === 'cyber') {
            // Cyberpunk deep violet and cyan glow
            faceClass += ' bg-[#08031aef] border-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.35)]';
          } else if (theme === 'retro') {
            // Monospace terminal green
            faceClass += ' bg-black border-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.3)]';
          }

          // Render 6 faces per cubelet
          const hSize = d / 2;

          return (
            <div
              key={c.id}
              className="absolute preserve-3d"
              style={{
                width: `${d}px`,
                height: `${d}px`,
                left: `calc(50% - ${d / 2}px)`,
                top: `calc(50% - ${d / 2}px)`,
                transform: `
                  translate3d(${tx}px, ${ty}px, ${tz}px)
                  rotateX(${sliceRotX}deg)
                  rotateY(${sliceRotY}deg)
                  rotateZ(${sliceRotZ}deg)
                `,
              }}
            >
              {/* Front Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `translateZ(${hSize}px)`,
                }}
              >
                {theme === 'retro' && c.id % 3 === 0 && (
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-emerald-500 font-bold opacity-60">
                    JS
                  </span>
                )}
              </div>

              {/* Back Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `rotateY(180deg) translateZ(${hSize}px)`,
                }}
              >
                {theme === 'retro' && c.id % 3 === 1 && (
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-emerald-500 font-bold opacity-60">
                    01
                  </span>
                )}
              </div>

              {/* Left Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `rotateY(-90deg) translateZ(${hSize}px)`,
                }}
              />

              {/* Right Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `rotateY(90deg) translateZ(${hSize}px)`,
                }}
              />

              {/* Top Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `rotateX(90deg) translateZ(${hSize}px)`,
                }}
              />

              {/* Bottom Face */}
              <div
                className={faceClass}
                style={{
                  ...borderStyle,
                  transform: `rotateX(-90deg) translateZ(${hSize}px)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
