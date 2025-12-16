'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProductsHorizontalProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const products = [
  {
    id: 'ulf',
    name: 'DVIA-ULF',
    title: 'Ultra-Low Frequency',
    description: 'Revolutionary passive vibration isolation achieving 80-90% at 1Hz',
    specs: ['1Hz Isolation', 'Passive System', 'No Power Required'],
    image: '/images/products/dvia-ulf.png',
  },
  {
    id: 'ml',
    name: 'DVIA-ML',
    title: 'Medium Load',
    description: 'High-performance isolation for precision manufacturing equipment',
    specs: ['Medium Load', 'Compact Design', 'Easy Installation'],
    image: '/images/products/dvia-ml.png',
  },
  {
    id: 't',
    name: 'DVIA-T',
    title: 'Optical Tables',
    description: 'Premium optical tables for research and laboratory applications',
    specs: ['Optical Grade', 'Honeycomb Core', 'Rigid Support'],
    image: '/images/products/dvia-t.png',
  },
  {
    id: 'p',
    name: 'DVIA-P',
    title: 'Precision Series',
    description: 'Advanced isolation for electron microscopes and nanoscale work',
    specs: ['Nano-precision', 'Active Control', 'Multi-axis'],
    image: '/images/products/dvia-p.png',
  },
  {
    id: 'dvio',
    name: 'DVIO',
    title: 'Optical Isolation',
    description: 'Specialized solutions for sensitive optical equipment',
    specs: ['Optical Focus', 'Vibration Free', 'Temperature Stable'],
    image: '/images/products/dvio.png',
  },
];

export default function ProductsHorizontal({ setCursorVariant }: ProductsHorizontalProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't run horizontal scroll on mobile
    if (isMobile) return;

    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const cards = cardsRef.current;

    if (!section || !trigger || !cards) return;

    // Calculate dimensions
    const getScrollAmount = () => {
      const cardsWidth = cards.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(cardsWidth - viewportWidth + 100); // 100px for right padding
    };

    // Create GSAP animation
    const ctx = gsap.context(() => {
      const scrollAmount = getScrollAmount();

      // Main horizontal scroll animation
      const tween = gsap.to(cards, {
        x: scrollAmount,
        ease: 'none',
      });

      // ScrollTrigger with pin
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: () => `+=${Math.abs(scrollAmount)}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1, // Smooth scrubbing
        animation: tween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Update active index based on scroll progress
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * products.length),
            products.length - 1
          );
          setActiveIndex(newIndex);
        },
      });
    }, section);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Mobile layout - vertical stack with snap scroll
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-[#0a0a0a] py-16 px-4"
      >
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">PRODUCT LINEUP</h2>
          <p className="text-sm opacity-70">Swipe to explore our solutions</p>
        </div>

        {/* Mobile Cards - Horizontal scroll with snap */}
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className="snap-center flex-shrink-0 w-[280px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 cursor-pointer"
                onTouchStart={() => setCursorVariant('hover')}
                onTouchEnd={() => setCursorVariant('default')}
              >
                {/* Image Area */}
                <div className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <span className="text-2xl font-bold opacity-20">{product.name}</span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-xs opacity-70 mb-2">{product.title}</p>
                <p className="text-xs opacity-60 mb-3 line-clamp-2">{product.description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-1">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#75cdd6]/20 border border-[#75cdd6]/30 rounded-full text-[9px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/30"
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop layout - GSAP horizontal scroll
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a]"
    >
      {/* Trigger wrapper - this gets pinned */}
      <div ref={triggerRef} className="overflow-hidden">
        <div className="h-screen w-full flex flex-col justify-center">
          {/* Header */}
          <div className="px-8 md:px-12 lg:px-16 mb-8 flex-shrink-0">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 tracking-tight">
                  PRODUCT LINEUP
                </h2>
                <p className="text-sm md:text-base lg:text-lg opacity-70">
                  Scroll to explore our solutions
                </p>
              </div>
              {/* Counter - Desktop */}
              <div className="hidden md:block text-right">
                <span className="text-4xl lg:text-5xl font-bold text-[#75cdd6]">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-lg opacity-50"> / {String(products.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="flex-shrink-0 flex-grow flex items-center">
            <div
              ref={cardsRef}
              className="flex gap-6 lg:gap-8 pl-8 md:pl-12 lg:pl-16 pr-8"
            >
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`
                    flex-shrink-0
                    w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]
                    bg-white/5 backdrop-blur-sm border rounded-2xl lg:rounded-3xl
                    p-5 md:p-6 lg:p-8
                    cursor-pointer group
                    transition-all duration-500 ease-out
                    ${index === activeIndex
                      ? 'border-[#75cdd6]/60 scale-[1.02] shadow-2xl shadow-[#75cdd6]/10'
                      : 'border-white/10 hover:border-white/30 hover:bg-white/[0.07]'
                    }
                  `}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {/* Image Area */}
                  <div className="w-full aspect-[4/3] mb-4 lg:mb-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden relative">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110">
                      {product.name}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#75cdd6]/0 group-hover:bg-[#75cdd6]/5 transition-colors duration-500" />
                  </div>

                  {/* Info */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 group-hover:text-[#75cdd6] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base opacity-70 mb-2 lg:mb-3">{product.title}</p>
                  <p className="text-xs md:text-sm opacity-60 mb-4 lg:mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 lg:px-3 py-1 bg-[#75cdd6]/20 border border-[#75cdd6]/30 rounded-full text-[10px] md:text-xs transition-colors duration-300 group-hover:bg-[#75cdd6]/30"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 lg:mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#75cdd6]">Learn More</span>
                    <svg
                      className="w-4 h-4 text-[#75cdd6] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex-shrink-0 px-8 md:px-12 lg:px-16 mt-8">
            <div className="flex items-center gap-4">
              {/* Progress dots */}
              <div className="flex gap-2">
                {products.map((_, i) => (
                  <div
                    key={i}
                    className={`
                      h-1.5 rounded-full transition-all duration-500 ease-out
                      ${i === activeIndex
                        ? 'w-8 bg-[#75cdd6]'
                        : i < activeIndex
                          ? 'w-1.5 bg-[#75cdd6]/60'
                          : 'w-1.5 bg-white/30'
                      }
                    `}
                  />
                ))}
              </div>
              {/* Mobile Counter */}
              <div className="md:hidden ml-auto">
                <span className="text-lg font-bold text-[#75cdd6]">
                  {activeIndex + 1}
                </span>
                <span className="text-sm opacity-50"> / {products.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
