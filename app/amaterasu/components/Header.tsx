'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeaderProps {
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
}

export default function Header({ setCursorVariant }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Principles', href: '#principles' },
    { label: 'Stories', href: '#stories' },
    { label: 'Aleph', href: '#aleph' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-wider"
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          AMATERASU
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide hover:opacity-70 transition-opacity"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2 border border-white hover:bg-white hover:text-[#183969] transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            CONTACT
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 w-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseEnter={() => setCursorVariant('hover')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <motion.span
            className="w-full h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
          />
          <motion.span
            className="w-full h-0.5 bg-white"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-full h-0.5 bg-white"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden mt-6"
      >
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg tracking-wide hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="px-6 py-2 border border-white hover:bg-white hover:text-[#183969] transition-colors duration-300 w-fit">
            CONTACT
          </button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
