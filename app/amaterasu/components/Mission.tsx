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
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-12 py-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-[400px] h-[400px] border border-white/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] border border-white/20 rounded-full"
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Mission Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase opacity-60">
            Our Mission
          </span>
        </motion.div>

        {/* Mission Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12"
        >
          MISSION
        </motion.h2>

        {/* Mission Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light opacity-90 max-w-5xl mx-auto">
            To deliver world-class vibration isolation solutions that enable
            breakthrough scientific discoveries and precision manufacturing,
            backed by exceptional engineering and unwavering customer support.
          </p>
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Innovation', subtitle: 'Advanced Technology' },
            { label: 'Quality', subtitle: 'Zero Defects' },
            { label: 'Support', subtitle: 'Long-term Partnership' },
          ].map((area, index) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="relative group"
            >
              <div className="border-2 border-white/30 p-8 hover:border-white/60 transition-all duration-300 text-center">
                <div className="text-2xl font-bold mb-2">
                  {area.label}
                </div>
                <div className="text-sm uppercase tracking-wider opacity-60">
                  {area.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
