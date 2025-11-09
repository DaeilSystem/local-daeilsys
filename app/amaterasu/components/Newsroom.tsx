'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface NewsroomProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Newsroom({ setCursorVariant }: NewsroomProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="newsroom"
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold"
        >
          NEWSROOM
        </motion.h2>
      </div>
    </motion.section>
  );
}
