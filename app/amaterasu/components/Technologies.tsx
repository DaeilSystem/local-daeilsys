'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TechnologiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const products = [
  {
    title: 'DVIA-MLP2000',
    subtitle: 'Custom Active System for SEM',
    description: 'World\'s most advanced active vibration isolation system for electron microscopes',
    tagline: '80-90% isolation at 1Hz',
    highlighted: true,
    image: '/dvia-ulf/hero-product.png',
  },
  {
    title: 'DVIA-T',
    subtitle: 'Tabletop Active Platform',
    description: 'Compact, plug-and-play active isolation for microscopy',
    tagline: '40-80% isolation at 1Hz',
    image: '/dvia-ulf/dvia-ulf-front-view.png',
  },
  {
    title: 'DVIA-P',
    subtitle: 'Pneumatic Active System',
    description: 'Designed for semiconductor metrology equipment',
    tagline: '40-70% isolation at 2Hz',
    image: '/dvia-ulf/dvia-ulf-system.png',
  },
  {
    title: 'DVIO',
    subtitle: 'Optical Tables',
    description: 'Research and scientific-grade optical table systems',
    tagline: 'Precision surfaces',
    image: '/dvia-ulf/dvia-ulf-main.png',
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
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.3em] opacity-60 mb-4 block uppercase"
          >
            Product Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Advanced Vibration Isolation Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Industry-leading solutions for electron microscopy, semiconductor metrology,
            and precision measurement applications
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className={`relative overflow-hidden border ${
                  product.highlighted
                    ? 'border-blue-400/60 bg-gradient-to-br from-blue-900/30 to-blue-800/20'
                    : 'border-white/20 bg-gradient-to-br from-white/5 to-transparent'
                } hover:border-white/50 transition-all duration-300 h-full flex flex-col`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Product Image */}
                <div className="relative h-64 flex items-center justify-center p-8 bg-gradient-to-b from-white/5 to-transparent">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain filter drop-shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  {product.highlighted && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs tracking-wider backdrop-blur-sm">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-sm md:text-base opacity-60 mb-4">{product.subtitle}</p>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed opacity-80 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-400">{product.tagline}</span>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer group/link">
                      <span>Learn more</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
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
