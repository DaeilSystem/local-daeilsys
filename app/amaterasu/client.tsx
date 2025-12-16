'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

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
import GlobalStats from './components/GlobalStats';
import Vision from './components/Vision';
import WebGLBackground from './components/WebGLBackground';

export default function AmaterasuClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'click'>('default');
  const [currentSection, setCurrentSection] = useState(0);

  // Triangle animation refs
  const mainRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start start', 'end end'],
  });

  // Triangle animation: GlobalStats(Trusted Worldwide) 시작(약 30%) ~ 삼각형 위치(약 45%)
  // 화면 왼쪽 상단에서 화면 중앙으로 이동 후 정착
  const triangleX = useTransform(scrollYProgress, [0.30, 0.42], ['-30vw', '0vw']);
  const triangleY = useTransform(scrollYProgress, [0.30, 0.42], ['-20vh', '0vh']);
  const triangleScale = useTransform(scrollYProgress, [0.30, 0.42], [0.4, 1]);
  const triangleRotate = useTransform(scrollYProgress, [0.30, 0.42], [0, 360]);
  // GlobalStats 위치에 도착하면 계속 보임, 그 이후 서서히 사라짐
  const triangleOpacity = useTransform(scrollYProgress, [0.28, 0.32, 0.50, 0.55], [0, 1, 1, 0]);

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

          {/* Floating Triangle Animation - Vision에서 Technologies로 이동 */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-20 pointer-events-none"
            style={{
              x: triangleX,
              y: triangleY,
              scale: triangleScale,
              rotate: triangleRotate,
              opacity: triangleOpacity,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <svg viewBox="0 0 100 100" className="w-48 h-48">
              <defs>
                <linearGradient id="floatingTriangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#75cdd6" />
                </linearGradient>
              </defs>
              <polygon
                points="50,10 90,80 10,80"
                fill="url(#floatingTriangleGradient)"
                opacity="0.8"
              />
            </svg>
          </motion.div>

          <main ref={mainRef} className="relative z-10">
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
              <GlobalStats setCursorVariant={setCursorVariant} />
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
