'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface TechnologiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const technologies = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP models that understand context, emotion, and intent in conversations',
    icon: '01',
  },
  {
    title: 'Machine Learning',
    description: 'Adaptive algorithms that personalize care based on individual patterns and needs',
    icon: '02',
  },
  {
    title: 'Cognitive Behavioral Therapy',
    description: 'Evidence-based therapeutic techniques integrated into AI interactions',
    icon: '03',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Real-time emotion detection to provide appropriate support and interventions',
    icon: '04',
  },
  {
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade encryption and privacy protection for all user data',
    icon: '05',
  },
  {
    title: 'Clinical Integration',
    description: 'Seamless connection with healthcare providers and existing care systems',
    icon: '06',
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
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.3em] opacity-60 mb-4 block"
          >
            TECHNOLOGIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Powered by Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Our platform combines multiple cutting-edge technologies to deliver
            effective, accessible mental health support
          </motion.p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
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
                className="relative p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full"
                whileHover={{ scale: 1.02 }}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 text-6xl font-bold opacity-10">
                  {tech.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {tech.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {tech.description}
                  </p>
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
