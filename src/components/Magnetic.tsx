/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Distance from button where cursor triggers pull
  strength?: number; // Multiplier of pull (0 to 1)
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  range = 65,
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Calculate a pulling pull vector weighted stronger near the center
      const power = (range - distance) / range; // 0 (at range limit) to 1 (at center)
      const pullX = distanceX * power * strength;
      const pullY = distanceY * power * strength;
      setPosition({ x: pullX, y: pullY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [range, strength]);

  return (
    <div ref={ref} onMouseLeave={handleMouseLeave} className="relative inline-block w-full">
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 120, damping: 15, mass: 0.1 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
