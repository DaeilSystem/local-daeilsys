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
      <div className="max-w-7xl w-full mx-auto">
        {/* Mission Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12"
          >
            MISSION
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e4a7a] to-[#2d5c8f] p-10 md:p-14 rounded-lg"
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-white/95 mb-6">
              To deliver world-class vibration isolation systems that enable
              nanoscale precision and empower researchers and engineers to push
              the boundaries of science and technology.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              We achieve this by combining cutting-edge technology with exceptional
              customer service, providing solutions that meet the most demanding
              vibration control requirements across electron microscopy, semiconductor
              metrology, and precision measurement applications.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
