'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
  isLoaded: boolean;
}

export default function SplashScreen({ onEnter, isLoaded }: SplashScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#183969]"
    >
      {/* Animated Background Circles */}
      <svg
        viewBox="0 0 672 655"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[200vw] md:w-[120vw] opacity-20"
      >
        <motion.circle
          cx="336"
          cy="123"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />
        <motion.circle
          cx="458"
          cy="209"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.circle
          cx="549"
          cy="328"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.circle
          cx="458"
          cy="453"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.circle
          cx="336"
          cy="532"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.circle
          cx="215"
          cy="453"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.circle
          cx="123"
          cy="328"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.circle
          cx="214"
          cy="209"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.circle
          cx="335"
          cy="328"
          r="122"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </svg>

      {/* Enter Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={onEnter}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group cursor-pointer"
      >
        {/* Circular Border */}
        <svg
          viewBox="0 0 197 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <motion.circle
            cx="98.5"
            cy="98.5"
            r="97.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformOrigin: 'center', rotate: -90 }}
          />
          <circle
            cx="98.5"
            cy="98.5"
            r="97.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
        </svg>

        {/* Text */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm font-medium"
        >
          CLICK TO ENTER
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
