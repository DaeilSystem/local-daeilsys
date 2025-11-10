'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface CaseStudiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function CaseStudies({ setCursorVariant }: CaseStudiesProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="case-studies"
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] border border-white/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">
              Success Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            style={{ fontWeight: 300 }}
          >
            Industry Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg opacity-70 max-w-3xl mx-auto"
          >
            From semiconductor fabrication to quantum research, DVIA systems protect
            the world's most sensitive equipment from unwanted vibrations.
          </motion.p>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative border border-white/20 p-10 md:p-16">
            <div className="absolute top-6 left-6 text-6xl opacity-20 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-center opacity-90">
              The DVIA-MLP1000 has been instrumental in achieving the nanoscale precision
              required for our advanced research. The 1Hz isolation performance is unmatched.
            </blockquote>
            <div className="mt-8 text-center">
              <div className="text-sm opacity-60">Leading Research Institute</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-[#1a1a1a] to-[#75cdd6] rounded-full font-medium tracking-wide text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
