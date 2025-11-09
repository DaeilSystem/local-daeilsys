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
            CASE STUDIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Real-world applications and success stories from leading research institutions
            and semiconductor manufacturers worldwide
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Electron Microscopy Excellence',
              industry: 'Research Institute',
              result: '95% reduction in low-frequency vibrations',
              image: '/daeilsys-images/case-study-1.jpg',
            },
            {
              title: 'Semiconductor Metrology',
              industry: 'Manufacturing',
              result: 'Sub-nanometer positioning accuracy',
              image: '/daeilsys-images/case-study-2.jpg',
            },
            {
              title: 'AFM Installation',
              industry: 'University Lab',
              result: 'Perfect imaging without disturbance',
              image: '/daeilsys-images/case-study-3.jpg',
            },
          ].map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group overflow-hidden flex flex-col"
            >
              {/* Case Study Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                <motion.img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183969] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs tracking-wider uppercase">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-base opacity-80 mb-6">{study.result}</p>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>Read more</span>
                  <svg
                    width="16"
                    height="16"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
