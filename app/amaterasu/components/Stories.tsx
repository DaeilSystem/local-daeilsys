'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface StoriesProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const stories = [
  {
    name: 'Sarah',
    issue: 'Delay in Mental Health Support',
    story: "I've been on a waitlist for months, and every day feels like a battle. The system is so slow to respond, and there's no help for people in immediate crisis.",
    image: '01',
  },
  {
    name: 'John',
    issue: 'Inconsistent Diagnoses',
    story: "Every therapist I see has a different idea of what's wrong with me, but none seem to get it right. It's exhausting to be reassessed constantly without real progress.",
    image: '02',
  },
  {
    name: 'Emily',
    issue: 'Lack of Continuity in Care',
    story: "I've had to switch therapists multiple times, and every time I do, it feels like starting from square one.",
    image: '03',
  },
  {
    name: 'Alex',
    issue: 'Cultural Barriers',
    story: "It's hard to find a therapist who understands my cultural background. I often feel like they don't get the unique pressures I face, which makes it harder to open up.",
    image: '04',
  },
  {
    name: 'Kevin',
    issue: 'Stigma Around Mental Health',
    story: "There's so much stigma around mental health that even when I reach out for help, I feel ashamed. The system doesn't support openness, which makes it harder.",
    image: '05',
  },
  {
    name: 'Olivia',
    issue: 'System Playing Catch-Up',
    story: "The mental health system feels like it's constantly playing catch-up. By the time you get the help you need, it's already too late for so many people.",
    image: '06',
  },
];

export default function Stories({ setCursorVariant }: StoriesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <motion.section
      ref={containerRef}
      id="stories"
      className="relative h-screen flex items-center justify-center px-6 md:px-12"
    >
      <motion.div style={{ y }} className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.3em] opacity-60 mb-4 block"
          >
            STORIES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Real Stories, Real Struggles
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto"
          >
            Hear from individuals facing the challenges of the current mental health system
          </motion.p>
        </div>

        {/* Story Carousel */}
        <div className="relative">
          <div className="max-w-4xl mx-auto">
            {/* Story Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="border border-white/20 p-8 md:p-12">
                {/* Quote Mark */}
                <div className="text-8xl opacity-10 mb-4">"</div>

                {/* Story Text */}
                <p className="text-xl md:text-2xl leading-relaxed mb-8 min-h-[120px]">
                  {stories[activeIndex].story}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold">
                    {stories[activeIndex].image}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{stories[activeIndex].name}</div>
                    <div className="opacity-60">{stories[activeIndex].issue}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Prev Button */}
              <motion.button
                onClick={prevStory}
                className="p-4 border border-white/20 hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </motion.button>

              {/* Dots */}
              <div className="flex gap-3">
                {stories.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-white w-8' : 'bg-white/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextStory}
                className="p-4 border border-white/20 hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '95%', label: 'Satisfaction Rate' },
            { value: '1M+', label: 'Conversations' },
            { value: '24/7', label: 'Availability' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
