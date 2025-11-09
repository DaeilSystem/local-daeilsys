'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MissionProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Mission({ setCursorVariant }: MissionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="mission"
      style={{ opacity }}
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-12 py-24"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {/* Mission Header */}
      <div className="max-w-7xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-20"
        >
          MISSION
        </motion.h2>
      </div>

      {/* Content Section - Quote */}
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1e4a7a] to-[#2d5c8f] p-8 md:p-12 rounded-lg"
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-white/90">
            Our minds are a deep reflection of nature, yet our internal world has
            driven too far from natural order.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
