'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface GlobalStatsProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

// 숫자 카운트업 애니메이션 컴포넌트
function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const clients = [
  'Samsung Electronics',
  'SK Hynix',
  'KAIST',
  'Seoul National University',
  'KIST',
  'ETRI',
  'Thermo Fisher Scientific',
  'ZEISS',
];

export default function GlobalStats({ setCursorVariant }: GlobalStatsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { value: 5000, suffix: '+', label: t.unitsInstalled, sublabel: t.worldwide },
    { value: 50, suffix: '+', label: t.countries, sublabel: t.exportReach },
    { value: 30, suffix: '+', label: t.years, sublabel: t.experience },
    { value: 200, suffix: '+', label: t.researchInstitutions, sublabel: t.globalPartners },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.section
      ref={containerRef}
      id="global-stats"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase opacity-50 mb-6"
          >
            {t.globalPresence}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
          >
            {t.trustedWorldwide}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto"
          >
            {t.globalStatsIntro}
          </motion.p>
        </div>

        {/* Stats Grid - Apple Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center py-8 lg:py-12"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium opacity-80 mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm opacity-50">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Triangle Anchor - 플로팅 삼각형이 여기에 정착 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-24"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="globalTriangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#75cdd6" />
                </linearGradient>
              </defs>
              <polygon
                points="50,10 90,80 10,80"
                fill="url(#globalTriangleGradient)"
                opacity="0.8"
              />
            </svg>
          </div>
        </motion.div>

        {/* Trusted By - Scrolling Logos Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-8">
            {t.trustedByLeaders}
          </p>

          {/* Client Names - Minimal Style */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ opacity: 1 }}
                className="text-sm md:text-base font-medium cursor-default transition-opacity duration-300"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
