'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ProductsHorizontalProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

const products = [
  {
    id: 'ulf',
    name: 'DVIA-ULF',
    title: 'Ultra-Low Frequency',
    description: 'Revolutionary passive vibration isolation achieving 80-90% at 1Hz',
    image: '/dvia-ulf/dvia-ulf-main.png',
    specs: ['1Hz Isolation', 'Passive System', 'No Power Required'],
  },
  {
    id: 'ml',
    name: 'DVIA-ML',
    title: 'Medium Load',
    description: 'High-performance isolation for precision manufacturing equipment',
    image: '/products/dvia-ml.png',
    specs: ['Medium Load', 'Compact Design', 'Easy Installation'],
  },
  {
    id: 't',
    name: 'DVIA-T',
    title: 'Optical Tables',
    description: 'Premium optical tables for research and laboratory applications',
    image: '/products/dvia-t.png',
    specs: ['Optical Grade', 'Honeycomb Core', 'Rigid Support'],
  },
  {
    id: 'p',
    name: 'DVIA-P',
    title: 'Precision Series',
    description: 'Advanced isolation for electron microscopes and nanoscale work',
    image: '/products/dvia-p.png',
    specs: ['Nano-precision', 'Active Control', 'Multi-axis'],
  },
  {
    id: 'dvio',
    name: 'DVIO',
    title: 'Optical Isolation',
    description: 'Specialized solutions for sensitive optical equipment',
    image: '/products/dvio.png',
    specs: ['Optical Focus', 'Vibration Free', 'Temperature Stable'],
  },
];

export default function ProductsHorizontal({ setCursorVariant }: ProductsHorizontalProps) {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  // Create progress indicators for each product
  const indicatorColors = products.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index / products.length, (index + 1) / products.length],
      ['rgba(255,255,255,0.3)', 'rgba(117,205,214,1)']
    )
  );

  return (
    <motion.section
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]"
      style={{ height: '400vh' }} // Extended height for horizontal scroll
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          {/* Header */}
          <div className="absolute left-12 top-12 z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4">PRODUCT LINEUP</h2>
              <p className="text-lg opacity-70">Scroll to explore our solutions →</p>
            </motion.div>
          </div>

          {/* Horizontal scrolling products */}
          <motion.div
            ref={scrollContainerRef}
            style={{ x }}
            className="flex gap-8 pl-12 pr-12"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className="flex-shrink-0 w-[500px] h-[600px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Product Image */}
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-6xl font-bold opacity-20">{product.name}</div>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-[#75cdd6] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xl opacity-70">{product.title}</p>
                  </div>

                  <p className="text-base leading-relaxed opacity-80">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-[#1a1a1a]/30 to-[#75cdd6]/30 border border-white/20 rounded-full text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <motion.button
                    className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 75 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M61.0109 16.8393C61.4921 16.8393 61.7327 16.2571 61.3918 15.9174L46.3397 0.921817C45.9988 0.582201 46.2393 0 46.7205 0H55.7413C55.8841 0 56.021 0.0565705 56.1222 0.157321L73.9075 17.876C75.3642 19.3272 75.3642 21.68 73.9075 23.1312L56.1222 40.8499C56.021 40.9506 55.8841 41.0072 55.7413 41.0072H46.7205C46.2393 41.0072 45.9988 40.425 46.3397 40.0854L61.2882 25.193C61.629 24.8533 61.3885 24.2711 60.9073 24.2711L0.539568 24.2712C0.241573 24.2712 0 24.0296 0 23.7316V17.3788C0 17.0808 0.241575 16.8393 0.53957 16.8393L61.0109 16.8393Z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {products.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: indicatorColors[index],
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
