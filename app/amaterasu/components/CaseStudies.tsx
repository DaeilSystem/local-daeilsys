'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { caseStudies } from '@/data/casestudies';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface CaseStudiesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

// Get featured case studies (최대 3개)
const featuredCaseStudies = caseStudies.filter(study => study.featured).slice(0, 3);

// Series badge color mapping
const seriesColors: Record<string, string> = {
  'dvia-m-series': 'from-[#75cdd6]/30 to-[#75cdd6]/10 border-[#75cdd6]/40',
  'dvia-u-series': 'from-[#6b8dd6]/30 to-[#6b8dd6]/10 border-[#6b8dd6]/40',
  'dvia-t-series': 'from-[#d675c4]/30 to-[#d675c4]/10 border-[#d675c4]/40',
  'dvia-ulf-series': 'from-[#d6a775]/30 to-[#d6a775]/10 border-[#d6a775]/40',
};

// Series label mapping
const seriesLabels: Record<string, string> = {
  'dvia-m-series': 'DVIA-M Series',
  'dvia-u-series': 'DVIA-U Series',
  'dvia-t-series': 'DVIA-T Series',
  'dvia-ulf-series': 'DVIA-ULF Series',
};

export default function CaseStudies({ setCursorVariant }: CaseStudiesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

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
              {t.successStories}
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
            {t.installationReports}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg opacity-70 max-w-3xl mx-auto"
          >
            {t.caseStudiesDescription}
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <motion.a
              key={study.id}
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer group rounded-lg"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={study.main_image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Series Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${seriesColors[study.series] || 'from-white/20 to-white/10 border-white/30'} border rounded-full text-xs font-medium backdrop-blur-sm`}>
                    {seriesLabels[study.series] || study.series}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Customer */}
                {study.customer && (
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm opacity-70">{study.customer}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-medium mb-2 group-hover:text-[#75cdd6] transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs opacity-50">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {study.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://www.daeilsys.com/support/case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#1a1a1a] to-[#75cdd6] rounded-full font-medium tracking-wide text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {t.viewAllCaseStudies}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
