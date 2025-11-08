'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GuidingPrinciplesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const principles = [
  {
    number: '01',
    title: 'Human-Centered Design',
    description: 'Every feature is built with empathy, focusing on user needs and experiences above all else.',
  },
  {
    number: '02',
    title: 'Evidence-Based Approach',
    description: 'Our methods are grounded in clinical research and proven therapeutic practices.',
  },
  {
    number: '03',
    title: 'Privacy & Security',
    description: 'User trust is paramount. We maintain the highest standards of data protection.',
  },
  {
    number: '04',
    title: 'Continuous Innovation',
    description: 'We constantly evolve our technology to provide better, more effective care.',
  },
  {
    number: '05',
    title: 'Accessibility First',
    description: 'Mental health support should be available to everyone, regardless of barriers.',
  },
];

export default function GuidingPrinciples({ setCursorVariant }: GuidingPrinciplesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      ref={containerRef}
      id="principles"
      className="relative h-screen flex items-center justify-center px-6 md:px-12 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          style={{ y }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.3em] opacity-60 mb-4 block"
          >
            GUIDING PRINCIPLES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl"
          >
            The Foundation of Our Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl"
          >
            These core principles guide every decision we make and every line of code we write
          </motion.p>
        </motion.div>

        {/* Principles List */}
        <div className="space-y-0">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="group relative border-t border-white/10 last:border-b"
            >
              <motion.div
                className="py-8 md:py-12 grid md:grid-cols-12 gap-8 items-center"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <motion.div
                    className="text-7xl md:text-8xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {principle.number}
                  </motion.div>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white/90 transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-base md:text-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    {principle.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <motion.svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <path
                      d="M8 20H32M32 20L24 12M32 20L24 28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-white/5 pointer-events-none"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-20">
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.4, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}
