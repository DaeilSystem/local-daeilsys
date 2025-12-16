'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/constants/translations';

interface VisionProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Vision({ setCursorVariant }: VisionProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id="vision"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-12 py-24"
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
    >
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
            {t.vision}
          </motion.h2>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto flex flex-wrap justify-center gap-x-2">
            {t.visionStatement
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
              title: t.customerOrientation,
              description: t.customerOrientationDesc,
            },
            {
              title: t.partnership,
              description: t.partnershipDesc,
            },
            {
              title: t.passionForPerfection,
              description: t.passionForPerfectionDesc,
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
    </motion.section>
  );
}
