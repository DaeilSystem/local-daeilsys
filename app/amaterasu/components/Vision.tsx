'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface VisionProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Vision({ setCursorVariant }: VisionProps) {
  const containerRef = useRef<HTMLElement>(null);
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
      className="relative h-screen flex items-center justify-center px-6 md:px-12"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm tracking-[0.3em] opacity-60 mb-4 block"
            >
              OUR VISION
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Reimagining Mental Healthcare
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl opacity-80 leading-relaxed mb-8"
            >
              We believe that mental health support should be immediate,
              personalized, and stigma-free. Our AI-powered platform combines
              cutting-edge technology with evidence-based practices to deliver
              care that adapts to each individual's needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Accessibility</h3>
                  <p className="opacity-70">
                    Support available anytime, anywhere, removing barriers to care
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                  <p className="opacity-70">
                    AI that learns and adapts to your unique mental health journey
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-white rounded-full mt-2.5" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                  <p className="opacity-70">
                    Your conversations and data are completely confidential
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Animated Circle Pattern */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.4, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="10"
                  fill="white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
