'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface VisionProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Vision({ setCursorVariant }: VisionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(0);

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
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-12 py-24"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {/* Vision Header */}
      <div className="max-w-7xl w-full mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Title */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-xs tracking-[0.16em] uppercase opacity-80">
                Vision
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
            >
              We empower humanity with the tools, knowledge, and wisdom to face
              mental health challenges from a position of unprecedented resilience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Interactive Scenes */}
      <div className="max-w-7xl w-full mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Scene 1: Nature/Ratio SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square relative"
            onMouseEnter={() => setActiveScene(1)}
          >
            <svg
              viewBox="0 0 2466 3440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.circle
                cx="889.27"
                cy="2617.27"
                r="35.77"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.1 }}
              />
              <motion.circle
                cx="852.65"
                cy="2642.65"
                r="97.15"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2 }}
              />
              <motion.circle
                cx="888.5"
                cy="2642.5"
                r="61"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
              />
              <motion.circle
                cx="854.215"
                cy="2577.22"
                r="162.715"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.4 }}
              />
              <motion.circle
                cx="960.235"
                cy="2577.24"
                r="268.735"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.circle
                cx="960.5"
                cy="2742.5"
                r="434"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.6 }}
              />
              <motion.circle
                cx="697.5"
                cy="2742.5"
                r="697"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.circle
                cx="1350"
                cy="1116"
                r="1115.5"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
              />
            </svg>
          </motion.div>

          {/* Scene 2: Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
            onMouseEnter={() => setActiveScene(2)}
          >
            {[
              'Understand the Patient',
              'Initial Assessment',
              'Evaluation',
              'Assessment continued',
              'Diagnostic',
              'Re-do Initial Assessment',
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
                    <span className="text-xs font-medium">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                    {step}
                  </p>
                </div>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 75 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                >
                  <path
                    d="M61.0109 16.8393C61.4921 16.8393 61.7327 16.2571 61.3918 15.9174L46.3397 0.921817C45.9988 0.582201 46.2393 0 46.7205 0H55.7413C55.8841 0 56.021 0.0565705 56.1222 0.157321L73.9075 17.876C75.3642 19.3272 75.3642 21.68 73.9075 23.1312L56.1222 40.8499C56.021 40.9506 55.8841 41.0072 55.7413 41.0072H46.7205C46.2393 41.0072 45.9988 40.425 46.3397 40.0854L61.2882 25.193C61.629 24.8533 61.3885 24.2711 60.9073 24.2711L0.539568 24.2712C0.241573 24.2712 0 24.0296 0 23.7316V17.3788C0 17.0808 0.241575 16.8393 0.53957 16.8393L61.0109 16.8393Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            ))}
          </motion.div>

          {/* Scene 3: Ecosystem/Connected SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="aspect-square relative"
            onMouseEnter={() => setActiveScene(3)}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <span className="text-sm font-medium opacity-90">Human</span>
            </div>
            <svg
              viewBox="0 0 672 655"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Ecosystem circles - 8 surrounding circles + 1 center */}
              <motion.circle
                cx="336"
                cy="123"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.1 }}
              />
              <motion.circle
                cx="458"
                cy="209"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.circle
                cx="549"
                cy="328"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              <motion.circle
                cx="458"
                cy="453"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
              <motion.circle
                cx="336"
                cy="532"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.circle
                cx="215"
                cy="453"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
              />
              <motion.circle
                cx="123"
                cy="328"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.circle
                cx="214"
                cy="209"
                r="122"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              {/* Center circle */}
              <motion.circle
                cx="335"
                cy="328"
                r="122"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
            </svg>

            {/* Connected SVG overlay */}
            <motion.svg
              viewBox="0 0 293 293"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1.2 }}
            >
              <motion.path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m219.07.5c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86,32.62,72.86,72.86-32.62,72.86-72.86,72.86-72.86-32.62-72.86-72.86-32.62-72.86-72.86-72.86c-40.24,0-72.86,32.62-72.86,72.86s32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86-32.62-72.86-72.86-72.86S.5,113.6.5,73.36,33.12.5,73.36.5s72.86,32.62,72.86,72.86,32.62,72.86,72.86,72.86,72.86-32.62,72.86-72.86c0-40.24-32.62-72.86-72.86-72.86"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 1.5 }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl w-full mx-auto space-y-20">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            Our minds are a deep reflection of nature, yet our internal world has
            driven too far from natural order.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            It is now our duty to restore balance and harmony.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Modern mental health care operates in a linear way, isolating insights
              over long periods of time, with little consideration or ability to map
              a full view of the mind.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Amaterasu moves beyond the linear, leveraging nonlinear dynamics to
              capture the fully connected conscious mind, towards holistic, dynamic,
              and interconnected truths.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
