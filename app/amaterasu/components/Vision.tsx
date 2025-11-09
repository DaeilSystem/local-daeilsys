'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface VisionProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Vision({ setCursorVariant }: VisionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="vision"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-12 py-24"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Vision Section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12"
          >
            VISION
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            To be the global leader in vibration isolation technology,
            empowering scientific discovery and precision engineering
            through innovative solutions.
          </motion.p>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Customer Orientation',
              description:
                'Long-term support aligned with customer satisfaction and retention',
            },
            {
              title: 'Partnership',
              description: 'Collaborative relationships to achieve shared objectives',
            },
            {
              title: 'Passion for Perfection',
              description: 'Commitment to defect-free products',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1e4a7a]/40 to-[#2d5c8f]/40 p-8 md:p-10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-base opacity-80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
