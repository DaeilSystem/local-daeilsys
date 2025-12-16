'use client';

import { translations } from '@/constants/translations';
import { useLanguage } from '@/hooks/use-language';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface HeroProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Hero({ setCursorVariant }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Individual parallax effects for different elements - each with unique speed
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);

  // Badge - fastest upward movement
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Each heading line moves at different speeds for staggered effect
  const heading1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heading2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heading3Y = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // Subtitle and CTAs - medium speed
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Stats - each item with staggered speed for wave effect
  const stat1Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const stat2Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const stat3Y = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const stat4Y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const statsYValues = [stat1Y, stat2Y, stat3Y, stat4Y];

  // Opacity fades for layered depth
  const heading1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heading2Opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.4]);
  const heading3Opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5]);

  // Scroll indicator
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-transparent"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="https://www.daeilsys.com/ko-KR/products/active-vibration-isolation-systems/dvia-ml-active-vibration-isolation-system/images/dvia-ml3000-for-glacios-2-product-image-01-min.png"
          alt="DVIA-ML Vibration Isolation System"
          fill
          className={`object-contain object-right transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          priority
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#75cdd6]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-4xl">
          {/* Badge - Fastest parallax */}
          <motion.div
            style={{ y: badgeY, opacity: badgeOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80 mb-6">
              <span className="w-2 h-2 bg-[#75cdd6] rounded-full animate-pulse" />
              {t.worldLeader}
            </span>
          </motion.div>

          {/* Main Heading - Each line with individual parallax */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <motion.span
              style={{ y: heading1Y, opacity: heading1Opacity }}
              className="block text-white"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.weControl}
            </motion.span>
            <motion.span
              style={{ y: heading2Y, opacity: heading2Opacity }}
              className="block text-white"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              {t.vibration}
            </motion.span>
            <motion.span
              style={{ y: heading3Y, opacity: heading3Opacity }}
              className="block bg-gradient-to-r from-[#75cdd6] to-[#4fa8b3] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.since1993}
            </motion.span>
          </h1>

          {/* Subtitle - Individual parallax */}
          <motion.p
            style={{ y: subtitleY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-10"
          >
            {t.heroDescription}
          </motion.p>

          {/* CTA Buttons - Individual parallax */}
          <motion.div
            style={{ y: ctaY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mb-10"
          >
              <motion.a
                href="https://www.daeilsys.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span className="relative z-10">{t.exploreProducts}</span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <motion.div
                  className="absolute inset-0 bg-[#75cdd6]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://www.daeilsys.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {t.contactUs}
              </motion.a>
            </motion.div>
        </div>

        {/* Stats - Bottom with individual item parallax */}
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 xl:left-32 xl:right-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-6 border-t border-white/10"
          >
            {[
              { value: '30+', label: t.years, sublabel: t.experience },
              { value: '80-90%', label: t.isolation, sublabel: t.at1Hz },
              { value: '6 DOF', label: t.degreesOf, sublabel: t.freedom },
              { value: '0.5Hz', label: t.control, sublabel: t.start },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{ y: statsYValues[index] }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="group"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#75cdd6] group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/40 mt-1">
                  <span className="block">{stat.label}</span>
                  <span className="block text-white/30">{stat.sublabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ y: scrollIndicatorY, opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 right-6 md:right-12 lg:right-20 xl:right-32 z-20 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-3 [writing-mode:vertical-rl]">
            {t.scrollToExplore}
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#75cdd6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-[#75cdd6]/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
