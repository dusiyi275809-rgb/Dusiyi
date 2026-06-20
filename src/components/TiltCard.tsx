/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { audioEngine } from './AudioEngine';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(255, 158, 198, 0.25)"
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(255, 158, 198, 0.15)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (-15 to 15 degrees)
    const rotX = -(mouseY / (height / 2)) * 15;
    const rotY = (mouseX / (width / 2)) * 15;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioEngine.playHoverChime();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (onClick) {
      audioEngine.playClickChime();
      onClick();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative preserve-3d cursor-pointer ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {/* Glare/Highlight effect overlay */}
      {isHovered && (
        <div
          className="absolute inset-x-0 inset-y-0 pointer-events-none rounded-3xl z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(0,0,0,0) 80%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Decorative Shadow Glow */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl blur-[20px] transition-opacity duration-500 opacity-60"
        style={{
          background: glowColor,
          opacity: isHovered ? 0.9 : 0.2,
        }}
      />

      {children}
    </div>
  );
};
