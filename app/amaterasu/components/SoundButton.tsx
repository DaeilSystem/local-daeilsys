'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface SoundButtonProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function SoundButton({ setCursorVariant }: SoundButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) {
      // Create audio element with ambient background music
      const audio = new Audio();
      // You can add your ambient music URL here
      // audio.src = '/audio/ambient.mp3';
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Audio play failed:', error);
      });
    }

    setIsPlaying(!isPlaying);
  };

  if (!isMounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onClick={toggleSound}
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 group"
      aria-label={isPlaying ? 'Mute sound' : 'Play sound'}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        {/* Outer circle */}
        <div className="absolute inset-0 border border-white/30 rounded-full group-hover:border-white/60 transition-colors" />

        {/* Animated sound waves */}
        <svg
          viewBox="0 0 10 5"
          className="w-8 h-4 md:w-10 md:h-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave line with animation */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            const x = i;
            const baseY = 2.5;
            const amplitude = isPlaying ? 1.5 : 0.3;
            const y = baseY + Math.sin((i * Math.PI) / 5) * amplitude;

            return (
              <motion.line
                key={i}
                x1={x}
                y1={baseY}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.3"
                strokeLinecap="round"
                className="text-white"
                animate={{
                  y2: isPlaying
                    ? [y, y + 0.5, y - 0.5, y + 0.3, y]
                    : y,
                }}
                transition={{
                  duration: 1,
                  repeat: isPlaying ? Infinity : 0,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </svg>

        {/* Muted indicator */}
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            className="absolute w-[2px] h-10 bg-white/50 rotate-45"
          />
        )}
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        {isPlaying ? 'MUTE' : 'SOUND'}
      </motion.div>
    </motion.button>
  );
}
