'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Hero({ setCursorVariant }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center px-8 md:px-12"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column - Heading + Button */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              WE CONTROL
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              VIBRATION TO
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              EMPOWER
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              DISCOVERY AND
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              PRECISION
            </motion.div>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-transparent border-2 border-white rounded-full font-medium tracking-widest text-sm overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Solutions
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 75 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-2"
                >
                  <path
                    d="M61.0109 16.8393C61.4921 16.8393 61.7327 16.2571 61.3918 15.9174L46.3397 0.921817C45.9988 0.582201 46.2393 0 46.7205 0H55.7413C55.8841 0 56.021 0.0565705 56.1222 0.157321L73.9075 17.876C75.3642 19.3272 75.3642 21.68 73.9075 23.1312L56.1222 40.8499C56.021 40.9506 55.8841 41.0072 55.7413 41.0072H46.7205C46.2393 41.0072 45.9988 40.425 46.3397 40.0854L61.2882 25.193C61.629 24.8533 61.3885 24.2711 60.9073 24.2711L0.539568 24.2712C0.241573 24.2712 0 24.0296 0 23.7316V17.3788C0 17.0808 0.241575 16.8393 0.53957 16.8393L61.0109 16.8393Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#183969] font-semibold transition-opacity duration-300 gap-3">
                Explore Solutions
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 75 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform translate-x-2"
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

        {/* Right Column - Product Image */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Product Image */}
            <motion.img
              src="/dvia-ulf/hero-product.png"
              alt="DVIA Vibration Isolation System"
              className="w-full h-auto filter drop-shadow-2xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-10 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4"
            >
              <div className="text-xs opacity-60 mb-1">Isolation Performance</div>
              <div className="text-2xl font-bold text-green-400">80-90%</div>
              <div className="text-xs opacity-60">at 1Hz</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-10 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4"
            >
              <div className="text-xs opacity-60 mb-1">Since</div>
              <div className="text-2xl font-bold">1993</div>
              <div className="text-xs opacity-60">30+ Years</div>
            </motion.div>
          </motion.div>

          {/* Description Below Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 space-y-4"
          >
            <span className="block text-sm tracking-widest opacity-70 uppercase">
              DAEIL SYSTEMS INTRODUCTION
            </span>
            <p className="text-base leading-relaxed opacity-90">
              Since 1993, DAEIL SYSTEMS has specialized in vibration isolation systems
              for nanoscale precision equipment. We are people who think differently,
              dedicated to creating products that make a difference.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Divider SVG with drawing animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-24 h-auto opacity-20"
      >
        <svg
          viewBox="0 0 96 1332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            d="M1.00003 1332L1.00006 726.469C1.00007 691.615 18.8257 659.182 48.25 640.5V640.5C77.6744 621.818 95.5 589.385 95.5 554.531L95.5 0"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2, delay: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: 1.5 }
            }}
          />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-12 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-3"
        >
          <span className="text-xs tracking-[0.16em] uppercase flex gap-1">
            {'Scroll to explore'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0.6 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5 + index * 0.03,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <svg
            width="20"
            height="12"
            viewBox="0 0 75 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-60"
          >
            <path
              d="M61.0109 16.8393C61.4921 16.8393 61.7327 16.2571 61.3918 15.9174L46.3397 0.921817C45.9988 0.582201 46.2393 0 46.7205 0H55.7413C55.8841 0 56.021 0.0565705 56.1222 0.157321L73.9075 17.876C75.3642 19.3272 75.3642 21.68 73.9075 23.1312L56.1222 40.8499C56.021 40.9506 55.8841 41.0072 55.7413 41.0072H46.7205C46.2393 41.0072 45.9988 40.425 46.3397 40.0854L61.2882 25.193C61.629 24.8533 61.3885 24.2711 60.9073 24.2711L0.539568 24.2712C0.241573 24.2712 0 24.0296 0 23.7316V17.3788C0 17.0808 0.241575 16.8393 0.53957 16.8393L61.0109 16.8393Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
