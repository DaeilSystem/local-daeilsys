'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface NewsroomProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Newsroom({ setCursorVariant }: NewsroomProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="newsroom"
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
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
              Latest Updates
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
            News & Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg opacity-70 max-w-3xl mx-auto"
          >
            Stay informed about the latest developments in vibration isolation
            technology and DVIA product innovations from DAEIL SYSTEMS.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              date: '2024',
              title: 'DVIA-MLP2000 Sets New Standard',
              description:
                'Our flagship ultra-low frequency passive isolation system achieves unprecedented 80-90% isolation at 1Hz.',
              tag: 'Product',
            },
            {
              date: '2024',
              title: 'Expanding Global Partnerships',
              description:
                'DAEIL SYSTEMS strengthens collaborations with leading research institutions worldwide.',
              tag: 'Partnership',
            },
          ].map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[#183969]/20 to-[#75cdd6]/20 border border-white/20 rounded-full text-xs tracking-wider">
                  {news.tag}
                </span>
                <span className="text-xs opacity-60">{news.date}</span>
              </div>
              <h3 className="text-2xl font-light mb-3 group-hover:text-[#75cdd6] transition-colors">
                {news.title}
              </h3>
              <p className="text-base opacity-70 leading-relaxed">{news.description}</p>
            </motion.div>
          ))}
        </div>

        {/* All News Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            className="px-10 py-5 border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="flex items-center gap-3 text-sm font-medium tracking-wide">
              Explore All Articles
              <svg
                width="20"
                height="12"
                viewBox="0 0 75 41"
                fill="none"
                className="transition-transform group-hover:translate-x-2"
              >
                <path
                  d="M61.0109 16.8393C61.4921 16.8393 61.7327 16.2571 61.3918 15.9174L46.3397 0.921817C45.9988 0.582201 46.2393 0 46.7205 0H55.7413C55.8841 0 56.021 0.0565705 56.1222 0.157321L73.9075 17.876C75.3642 19.3272 75.3642 21.68 73.9075 23.1312L56.1222 40.8499C56.021 40.9506 55.8841 41.0072 55.7413 41.0072H46.7205C46.2393 41.0072 45.9988 40.425 46.3397 40.0854L61.2882 25.193C61.629 24.8533 61.3885 24.2711 60.9073 24.2711L0.539568 24.2712C0.241573 24.2712 0 24.0296 0 23.7316V17.3788C0 17.0808 0.241575 16.8393 0.53957 16.8393L61.0109 16.8393Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
