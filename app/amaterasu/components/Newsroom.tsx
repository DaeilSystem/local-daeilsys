'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { newsArticles } from '@/data/newsroom';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface NewsroomProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

// Get featured news articles (최대 4개)
const featuredNews = newsArticles.filter(article => article.featured).slice(0, 4);

// Category label mapping
const getCategoryLabels = (t: typeof translations['en']) => ({
  'news': t.news,
  'press-release': t.pressRelease,
  'product': t.product,
  'company': t.company
});

export default function Newsroom({ setCursorVariant }: NewsroomProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];
  const categoryLabels = getCategoryLabels(t);

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
              {t.latestUpdates}
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
            {t.newsAndInsights}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg opacity-70 max-w-3xl mx-auto"
          >
            {t.newsroomDescription}
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredNews.map((article, index) => (
            <motion.a
              key={article.id}
              href={`https://www.daeilsys.com/newsroom/${article.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Image */}
              {article.main_image && (
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <Image
                    src={article.main_image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#1a1a1a]/20 to-[#75cdd6]/20 border border-white/20 rounded-full text-xs tracking-wider">
                    {categoryLabels[article.category] || article.category}
                  </span>
                  <span className="text-xs opacity-60 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-[#75cdd6] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed line-clamp-2">
                  {article.content.substring(0, 150)}...
                </p>
              </div>
            </motion.a>
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
          <motion.a
            href="https://www.daeilsys.com/newsroom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="flex items-center gap-3 text-sm font-medium tracking-wide">
              {t.exploreAllArticles}
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
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
