'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Components
import SplashScreen from './components/SplashScreen';
import WebGLBackground from './components/WebGLBackground';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Technologies from './components/Technologies';
import GuidingPrinciples from './components/GuidingPrinciples';
import Stories from './components/Stories';
import Aleph from './components/Aleph';
import Footer from './components/Footer';

export default function AmaterasuClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Initialize GSAP ScrollTrigger for section snapping
  useEffect(() => {
    if (!showSplash) {
      console.log('Initializing GSAP ScrollTrigger for Amaterasu...');

      // Get all sections
      const sections = gsap.utils.toArray<HTMLElement>([
        '.hero-section',
        '.vision-section',
        '.technologies-section',
        '.principles-section',
        '.stories-section',
        '.aleph-section',
      ]);

      // Create snap scroll for the entire container
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.6, max: 0.9 },
          delay: 0.1,
          ease: 'power2.inOut',
        },
      });

      // Pin and fade animation for each section
      sections.forEach((section, i) => {
        // Fade in animation
        gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [showSplash]);

  // Track mouse position (throttled for better performance)
  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setMousePosition({ x: lastX, y: lastY });
          rafId = 0;
        });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Handle splash screen
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleEnter = () => {
    setShowSplash(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#183969] text-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor
        mousePosition={mousePosition}
        variant={cursorVariant}
      />

      {/* WebGL Background */}
      <WebGLBackground />

      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onEnter={handleEnter} isLoaded={isLoaded} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <>
          <Header setCursorVariant={setCursorVariant} />

          <main className="relative z-10">
            <div className="hero-section">
              <Hero setCursorVariant={setCursorVariant} />
            </div>
            <div className="vision-section">
              <Vision setCursorVariant={setCursorVariant} />
            </div>
            <div className="technologies-section">
              <Technologies setCursorVariant={setCursorVariant} />
            </div>
            <div className="principles-section">
              <GuidingPrinciples setCursorVariant={setCursorVariant} />
            </div>
            <div className="stories-section">
              <Stories setCursorVariant={setCursorVariant} />
            </div>
            <div className="aleph-section">
              <Aleph setCursorVariant={setCursorVariant} />
            </div>
            <Footer setCursorVariant={setCursorVariant} />
          </main>
        </>
      )}
    </div>
  );
}
