'use client';

import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Components
import Aleph from './components/Aleph';
import CaseStudies from './components/CaseStudies';
import CustomCursor from './components/CustomCursor';
import GuidingPrinciples from './components/GuidingPrinciples';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Newsroom from './components/Newsroom';
import ProductsHorizontal from './components/ProductsHorizontal';
import SplashScreen from './components/SplashScreen';
import Technologies from './components/Technologies';
import Vision from './components/Vision';
import WebGLBackground from './components/WebGLBackground';

export default function AmaterasuClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'click'>('default');
  const [currentSection, setCurrentSection] = useState(0);

  // Initialize GSAP ScrollTrigger for section snapping
  useEffect(() => {
    if (!showSplash) {
      console.log('Initializing GSAP ScrollTrigger for Amaterasu...');

      // Get all sections
      const sections = gsap.utils.toArray<HTMLElement>([
        '.hero-section',
        '.vision-section',
        '.mission-section',
        '.principles-section',
        '.technologies-section',
        '.products-horizontal-section',
        '.case-studies-section',
        '.newsroom-section',
        '.aleph-section',
      ]);

      // Track section changes (fade animation disabled to fix visibility issues)
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setCurrentSection(i + 1),
          onEnterBack: () => setCurrentSection(i + 1),
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
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor
        mousePosition={mousePosition}
        variant={cursorVariant}
        currentSection={currentSection}
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
          {/* <Header setCursorVariant={setCursorVariant} /> */}

          <main className="relative z-10">
            <div className="hero-section">
              <Hero setCursorVariant={setCursorVariant} />
            </div>
            <div className="vision-section">
              <Vision setCursorVariant={setCursorVariant} />
            </div>
            <div className="mission-section">
              <Mission setCursorVariant={setCursorVariant} />
            </div>
            <div className="principles-section">
              <GuidingPrinciples setCursorVariant={setCursorVariant} />
            </div>
            <div className="technologies-section">
              <Technologies setCursorVariant={setCursorVariant} />
            </div>
            <div className="products-horizontal-section">
              <ProductsHorizontal setCursorVariant={setCursorVariant} />
            </div>
            <div className="case-studies-section">
              <CaseStudies setCursorVariant={setCursorVariant} />
            </div>
            <div className="newsroom-section">
              <Newsroom setCursorVariant={setCursorVariant} />
            </div>
            <div className="aleph-section">
              <Aleph setCursorVariant={setCursorVariant} />
            </div>
            {/* <Footer setCursorVariant={setCursorVariant} /> */}
          </main>
        </>
      )}
    </div>
  );
}
