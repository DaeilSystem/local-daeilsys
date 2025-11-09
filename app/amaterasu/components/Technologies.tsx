'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TechnologiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const products = [
  {
    title: 'ULF',
    description: 'Ultra-Low Frequency Vibration Isolation System',
    category: 'Vibration Isolation',
  },
  {
    title: 'ML',
    description: 'Machine Learning Vibration Control Platform',
    category: 'Smart Technology',
    highlighted: true,
  },
  {
    title: 'DVIA-T',
    description: 'Precision Table-Top Vibration Isolator',
    category: 'Vibration Isolation',
  },
  {
    title: 'DVIA-P',
    description: 'Advanced Passive Vibration Isolation',
    category: 'Vibration Isolation',
  },
  {
    title: 'DVIO',
    description: 'Dynamic Vibration Isolation Optimizer',
    category: 'Control Systems',
  },
];

export default function Technologies({ setCursorVariant }: TechnologiesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.section
      ref={containerRef}
      id="technologies"
      className="relative h-screen flex items-center justify-center px-6 md:px-12"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-20 text-center"
          >
            ULF
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setCursorVariant('hover');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setCursorVariant('default');
              }}
              className="relative group"
            >
              <motion.div
                className={`relative p-8 md:p-12 border ${
                  product.highlighted
                    ? 'border-blue-400/60 bg-blue-900/20'
                    : 'border-white/20'
                } hover:border-white/40 transition-all duration-300 h-full flex items-center justify-center`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                    {product.title}
                  </h3>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner Decoration */}
                <svg
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <motion.path
                    d="M 64 0 L 64 64 L 0 64"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 border border-white hover:bg-white hover:text-[#183969] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            EXPLORE OUR TECHNOLOGY
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
