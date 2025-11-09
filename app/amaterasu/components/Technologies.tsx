'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TechnologiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const technologies = [
  {
    title: 'DVIA-MLP2000',
    description: 'Ultra-low frequency passive vibration isolation table achieving 80-90% isolation at 1Hz for nanoscale precision.',
    icon: '▲',
  },
  {
    title: 'DVIA-T Series',
    description: 'Compact vibration isolation tables designed for optical and precision measurement equipment.',
    icon: '▲',
  },
  {
    title: 'DVIA-P Series',
    description: 'High-performance passive isolators for electron microscopes and sensitive analytical instruments.',
    icon: '▲',
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
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-gradient-to-b from-white/5 via-white/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-8"
            style={{ fontWeight: 300 }}
          >
            Our Product Lineup
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">
              DVIA Series
            </span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-base md:text-lg leading-relaxed opacity-80 text-center">
            DAEIL SYSTEMS pioneered ultra-low frequency passive vibration isolation technology
            since 1993. Our DVIA series delivers exceptional isolation performance from 1Hz,
            protecting nanoscale precision equipment from environmental vibrations without
            requiring external power or compressed air.
          </p>
        </motion.div>

        {/* Triangle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#183969" />
                  <stop offset="100%" stopColor="#75cdd6" />
                </linearGradient>
              </defs>
              <polygon
                points="50,10 90,80 10,80"
                fill="url(#triangleGradient)"
                opacity="0.6"
              />
            </svg>
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
                className="relative border border-white/20 hover:border-white/40 transition-all duration-500 p-8 md:p-10 cursor-pointer bg-gradient-to-br from-white/5 to-transparent"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Triangle Icon */}
                <div className="mb-6">
                  <svg viewBox="0 0 50 50" className="w-12 h-12 opacity-60">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#183969" />
                        <stop offset="100%" stopColor="#75cdd6" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="25,5 45,40 5,40"
                      fill={`url(#gradient-${index})`}
                      opacity="0.8"
                    />
                  </svg>
                </div>

                <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-[#75cdd6] transition-colors flex items-start gap-1">
                  <span className="flex flex-col">
                    {tech.title}
                  </span>
                  <sup className="text-xs opacity-60 mt-1">{index + 1}</sup>
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-70">
                  {tech.description}
                </p>

                {/* Plus Icon */}
                <div className="absolute top-8 right-8">
                  <motion.div
                    animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl opacity-40"
                  >
                    +
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#183969]/10 to-[#75cdd6]/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
