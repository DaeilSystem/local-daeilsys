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
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            NEWSROOM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Latest updates, product launches, and industry insights from DAEIL SYSTEMS
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              date: '2024',
              title: 'Introducing DVIA-MLP2000',
              description:
                'New standard in active vibration isolation for electron microscopes',
              tag: 'Product Launch',
            },
            {
              date: '2024',
              title: '5-Year Warranty Program',
              description:
                'Extended warranty coverage on all DAEIL SYSTEMS branded products',
              tag: 'Announcement',
            },
          ].map((news, index) => (
            <motion.div
              key={news.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 p-8 hover:border-white/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs tracking-wider">
                  {news.tag}
                </span>
                <span className="text-xs opacity-60">{news.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-base opacity-80">{news.description}</p>
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
          <button className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300 group">
            <span className="flex items-center gap-3">
              View All News
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
