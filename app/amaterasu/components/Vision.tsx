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
    offset: ['start start', 'end end'],
  });

  // Circle expansion animation - radius grows from 0% to 100% as user scrolls
  const maskRadius = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const maskPosition = useTransform(scrollYProgress, [0, 0.5], ['50%', '50%']);

  // Triangle animation - starts small in upper-left, rotates and scales to center
  const triangleX = useTransform(scrollYProgress, [0, 0.5], ['-40%', '0%']);
  const triangleY = useTransform(scrollYProgress, [0, 0.5], ['-40%', '0%']);
  const triangleScale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const triangleRotate = useTransform(scrollYProgress, [0, 0.5], [0, 360]);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={containerRef}
      id="vision"
      className="relative flex flex-col items-center justify-center px-8 md:px-12 py-24"
      style={{
        height: '300vh',
      }}
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {/* Expanding Circle Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] z-0"
        style={{
          WebkitMaskImage: `radial-gradient(circle at 50% ${maskPosition}, transparent ${maskRadius}, #000 0)`,
          maskImage: `radial-gradient(circle at 50% ${maskPosition}, transparent ${maskRadius}, #000 0)`,
        }}
      />

      {/* Animated Triangle - starts upper-left, rotates and scales to center */}
      <motion.div
        className="fixed top-20 left-20 z-10"
        style={{
          x: triangleX,
          y: triangleY,
          scale: triangleScale,
          rotate: triangleRotate,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48">
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#75cdd6" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,80 10,80"
            fill="url(#triangleGradient)"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Sticky Content Container */}
      <div className="sticky top-0 min-h-screen w-full flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto relative z-20">
        {/* Vision Section */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12"
          >
            VISION
          </motion.h2>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto flex flex-wrap justify-center gap-x-2">
            {`To be the global leader in vibration isolation technology, empowering scientific discovery and precision engineering through innovative solutions.`
              .split(' ')
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.05,
                    ease: "easeOut"
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </p>
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Customer Orientation',
              description:
                'Long-term support aligned with customer satisfaction and retention',
            },
            {
              title: 'Partnership',
              description: 'Collaborative relationships to achieve shared objectives',
            },
            {
              title: 'Passion for Perfection',
              description: 'Commitment to defect-free products',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#2a2a2a]/40 to-[#1a1a1a]/40 p-8 md:p-10 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-base opacity-80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </motion.section>
  );
}
