/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const SignatureLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <svg
        viewBox="0 0 320 80"
        className="w-48 sm:w-56 h-auto text-white hover:text-[#FF9EC6] transition-colors duration-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Animated text for 'Design' using display font */}
        <motion.text
          x="160"
          y="54"
          textAnchor="middle"
          className="font-display text-5xl font-black uppercase tracking-[0.15em]"
          fill="rgba(255,255,255,0)"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ strokeDasharray: 300, strokeDashoffset: 300, fill: 'rgba(255,255,255,0)' }}
          animate={{ strokeDashoffset: 0, fill: 'rgba(255,255,255,1)' }}
          transition={{
            strokeDashoffset: { duration: 1.5, ease: 'easeInOut' },
            fill: { duration: 0.8, delay: 1.2, ease: 'easeIn' }
          }}
        >
          Design
        </motion.text>

        {/* Dynamic decorative star prompt overlay */}
        <motion.polygon
          points="290,20 293,25 299,26 294,30 295,36 290,33 285,36 286,30 281,26 287,25"
          className="fill-[#FF9EC6]"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.8, type: 'spring', stiffness: 150 }}
        />
      </svg>
    </div>
  );
};
