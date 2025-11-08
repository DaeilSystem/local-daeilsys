'use client';

import { motion } from 'framer-motion';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  variant: 'default' | 'hover' | 'click';
}

export default function CustomCursor({ mousePosition, variant }: CustomCursorProps) {
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      opacity: 0.5,
    },
    click: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      opacity: 0.8,
    },
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        animate={variants[variant]}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full border border-white" />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999] bg-white rounded-full"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
        }}
      />
    </>
  );
}
