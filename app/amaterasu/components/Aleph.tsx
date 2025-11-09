'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AlephProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Aleph({ setCursorVariant }: AlephProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="aleph"
      className="relative h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Gradient Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-[#0a0a0a] opacity-50"
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="opacity-80"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {/* Aleph Symbol - Stylized */}
            <motion.path
              d="M 30 90 L 60 20 L 90 90 M 45 60 L 75 60"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="55"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          Next-Generation DVIA
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Our next-generation vibration isolation systems represent a quantum leap in precision control technology.
          Combining advanced materials science with intelligent damping algorithms to deliver
          unprecedented levels of isolation performance across all frequency ranges.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              title: 'Active-Passive Hybrid',
              description: 'Combining passive and active isolation for optimal performance',
            },
            {
              title: 'Smart Damping',
              description: 'Real-time adaptive control responding to vibration conditions',
            },
            {
              title: 'Sub-Hertz Isolation',
              description: 'Pushing boundaries with isolation below 0.5Hz frequency',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="px-10 py-5 bg-white text-[#1a1a1a] font-bold tracking-wide hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            REQUEST INFORMATION
          </motion.button>
          <motion.button
            className="px-10 py-5 border-2 border-white font-bold tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            TECHNICAL SPECS
          </motion.button>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-sm tracking-wider opacity-60"
        >
          Coming 2026 • R&D in Progress
        </motion.p>
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
