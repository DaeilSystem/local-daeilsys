"use client"

import { Menu, Search, ShoppingBag, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface AppleNavigationProps {
  className?: string
}

export function AppleNavigation({ className }: AppleNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Apple Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-semibold">D</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/products" className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200">
              제품
            </Link>
            <Link href="/solutions" className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200">
              솔루션
            </Link>
            <Link href="/support" className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200">
              지원
            </Link>
            <Link href="/company" className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200">
              회사
            </Link>
            <Link href="/newsroom" className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200">
              뉴스룸
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors duration-200">
              <ShoppingBag className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white/80 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/products"
              className="block text-white/80 hover:text-white text-lg font-normal transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              제품
            </Link>
            <Link
              href="/solutions"
              className="block text-white/80 hover:text-white text-lg font-normal transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              솔루션
            </Link>
            <Link
              href="/support"
              className="block text-white/80 hover:text-white text-lg font-normal transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              지원
            </Link>
            <Link
              href="/company"
              className="block text-white/80 hover:text-white text-lg font-normal transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              회사
            </Link>
            <Link
              href="/newsroom"
              className="block text-white/80 hover:text-white text-lg font-normal transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              뉴스룸
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
