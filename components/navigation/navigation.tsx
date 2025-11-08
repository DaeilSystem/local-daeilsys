"use client"

import { AnimatePresence } from "framer-motion"
import { Globe, Search } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
// import { Moon, Sun, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { translations } from "@/constants/translations"
import {
    getCompanyMenuItems,
    getProductsMenuItems,
    getSupportMenuItems,
} from "@/data/menu-items"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"
import { DropdownMenu } from "./dropdown-menu"
import { MobileMenu } from "./mobile-menu"

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const { theme /*, toggleTheme*/ } = useTheme()
  const { language, toggleLanguage, isInitialized } = useLanguage()

  const trans = isInitialized ? translations[language] : translations.en
  const companyMenuItems = getCompanyMenuItems(isInitialized ? language : "en")
  const productsMenuItems = getProductsMenuItems(isInitialized ? language : "en")
  const supportMenuItems = getSupportMenuItems(isInitialized ? language : "en")

  const langLabel = isInitialized ? language.toUpperCase() : "…"

  return (
    <>
      {/* spacer to avoid content under fixed nav */}
      <div className="h-12 sm:h-11" />
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-12 sm:h-11 py-1 sm:py-0">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/../logo.png" alt="DVIA Logo" className="h-8 w-auto sm:h-14" />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
              <Link
                href="/"
                className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
              >
                {trans.home}
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("company")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href="/company"
                  className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
                >
                  {trans.company}
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("products")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href="/products"
                  className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
                >
                  {trans.products}
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("support")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href="/support"
                  className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
                >
                  {trans.support}
                </Link>
              </div>

              <Link
                href="/support/case-studies"
                className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
              >
                {trans.caseStudies}
              </Link>
              <Link
                href="/newsroom"
                className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
              >
                {trans.newsroom}
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white text-sm font-normal transition-colors duration-200"
              >
                {trans.contact}
              </Link>
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Search */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 touch-manipulation p-1.5 sm:p-1"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Language toggle: Desktop (icon + label) */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hidden sm:flex text-white/80 hover:text-white hover:bg-white/10 touch-manipulation"
                disabled={!isInitialized}
                aria-label="Toggle language"
              >
                <Globe className="h-4 w-4 mr-1" />
                {langLabel}
              </Button>

              {/* Language toggle: Mobile (compact round button) */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex sm:hidden text-white/90 hover:text-white hover:bg-white/10 px-2 py-1 rounded-md border border-white/10"
                disabled={!isInitialized}
                aria-label="Toggle language"
              >
                <span className="text-[11px] font-semibold tracking-wide">{langLabel}</span>
              </Button>

              {/* Mobile hamburger / sheet menu */}
              <MobileMenu
                isOpen={isMenuOpen}
                onOpenChange={setIsMenuOpen}
                companyItems={companyMenuItems}
                productsItems={productsMenuItems}
                supportItems={supportMenuItems}
                translations={trans}
              />
            </div>
          </div>
        </div>

        {/* Dropdown Menus */}
        <AnimatePresence>
          {hoveredMenu && (
            <DropdownMenu
              type={hoveredMenu as "company" | "products" | "support"}
              companyItems={hoveredMenu === "company" ? companyMenuItems : undefined}
              productsItems={hoveredMenu === "products" ? productsMenuItems : undefined}
              supportItems={hoveredMenu === "support" ? supportMenuItems : undefined}
              onMouseEnter={() => setHoveredMenu(hoveredMenu)}
              onMouseLeave={() => setHoveredMenu(null)}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
