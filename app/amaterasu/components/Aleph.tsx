'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface AlephProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Aleph({ setCursorVariant }: AlephProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];
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
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
    >
      {/* Gradient Background - removed gray overlay */}

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
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
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
        >
          {t.nextGenDVIA}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl opacity-70 leading-relaxed mb-16 max-w-4xl mx-auto"
        >
          {t.alephDescription}
        </motion.p>

        {/* Features - Clean inline design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 mb-16"
        >
          {[
            {
              title: t.activePassiveHybrid,
              description: t.activePassiveHybridDesc,
            },
            {
              title: t.smartDamping,
              description: t.smartDampingDesc,
            },
            {
              title: t.subHertzIsolation,
              description: t.subHertzIsolationDesc,
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="flex flex-col items-center max-w-[280px] group"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#75cdd6] group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base opacity-60 text-center">
                {feature.description}
              </p>
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
          <motion.a
            href="https://www.daeilsys.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#1a1a1a] font-medium tracking-wide hover:bg-opacity-90 transition-all duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {t.requestInformation}
          </motion.a>
          <motion.a
            href="https://www.daeilsys.com/products"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/40 font-medium tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {t.technicalSpecs}
          </motion.a>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-sm tracking-wider opacity-40"
        >
          {t.coming2026}
        </motion.p>
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
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
