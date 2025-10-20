"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { useState } from "react"

export function AppleNavigationNew() {
  const { language, isInitialized } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-semibold text-black">DAEIL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products/active-vibration-systems" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "제품" : "Products"}
            </Link>
            <Link href="/solutions" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "솔루션" : "Solutions"}
            </Link>
            <Link href="/support" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "지원" : "Support"}
            </Link>
            <Link href="/company" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "회사" : "Company"}
            </Link>
            <Link href="/newsroom" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "뉴스룸" : "Newsroom"}
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
              {isInitialized && language === "ko" ? "문의" : "Contact"}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-2">
              <Link href="/products/active-vibration-systems" className="block py-2 text-black hover:text-gray-600">
                {isInitialized && language === "ko" ? "제품" : "Products"}
              </Link>
              <Link href="/solutions" className="block py-2 text-black hover:text-gray-600">
                {isInitialized && language === "ko" ? "솔루션" : "Solutions"}
              </Link>
              <Link href="/support" className="block py-2 text-black hover:text-gray-600">
                {isInitialized && language === "ko" ? "지원" : "Support"}
              </Link>
              <Link href="/company" className="block py-2 text-black hover:text-gray-600">
                {isInitialized && language === "ko" ? "회사" : "Company"}
              </Link>
              <Link href="/newsroom" className="block py-2 text-black hover:text-gray-600">
                {isInitialized && language === "ko" ? "뉴스룸" : "Newsroom"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
