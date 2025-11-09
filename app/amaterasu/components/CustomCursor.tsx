'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  variant: 'default' | 'hover' | 'click';
  currentSection?: number;
}

export default function CustomCursor({ mousePosition, variant, currentSection = 0 }: CustomCursorProps) {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    if (currentSection > 0) {
      setShowSection(true);
      const timer = setTimeout(() => setShowSection(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  const isExpanded = showSection && currentSection > 0;

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: variant === 'hover' ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer Circle */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            width: isExpanded ? '120px' : '40px',
            height: isExpanded ? '120px' : '40px',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        >
          {/* Circle border with animation */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* Background circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/20"
            />
            {/* Animated circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: isExpanded ? 1 : 0,
                opacity: isExpanded ? 1 : 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
              strokeDasharray="0 999"
            />
          </svg>

          {/* Center dot (hidden when expanded) */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            animate={{
              scale: isExpanded ? 0 : 1,
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Section number (shown when expanded) */}
          <AnimatePresence>
            {isExpanded && currentSection > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="absolute text-white font-bold tracking-wider"
                style={{
                  fontSize: '20px',
                  letterSpacing: '0.1em',
                }}
              >
                0{currentSection}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Trail effect (optional) */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9998] bg-white rounded-full opacity-50 hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 40,
        }}
      />
    </>
  );
}
