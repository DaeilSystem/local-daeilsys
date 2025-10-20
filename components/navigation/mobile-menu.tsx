"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { MenuItem, ProductsMenuItems, SupportMenuItems } from "@/types"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  companyItems: MenuItem[]
  productsItems: ProductsMenuItems
  supportItems: SupportMenuItems
  translations: any
}

export function MobileMenu({
  isOpen,
  onOpenChange,
  companyItems,
  productsItems,
  supportItems,
  translations: t,
}: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<{
    company: boolean
    products: boolean
    support: boolean
  }>({
    company: false,
    products: false,
    support: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleLinkClick = () => {
    onOpenChange(false)
    setExpandedSections({
      company: false,
      products: false,
      support: false,
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden text-white/80 hover:text-white hover:bg-white/10 touch-manipulation p-1.5 sm:p-1"
          aria-label="메뉴 열기"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-80 bg-black text-white border-gray-800 overflow-y-auto [&>button]:hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between py-4 border-b border-gray-800">
            <div className="text-lg font-medium text-white">Menu</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="text-white/80 hover:text-white hover:bg-white/10"
              aria-label="메뉴 닫기"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto py-4 space-y-1">
            {/* Home */}
            <a
              href="/"
              className="block px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
              onClick={handleLinkClick}
            >
              {t.home}
            </a>

            {/* Company Section */}
            <div className="border-b border-gray-800/50">
              <button
                onClick={() => toggleSection('company')}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
                aria-expanded={expandedSections.company}
              >
                <a href="https://www.daeilsys.com/company/" className="hover:text-gray-300">
                  {t.company}
                </a>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedSections.company ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.company && (
                <div className="px-4 pb-3 space-y-1">
                  {companyItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block py-2 px-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-sm"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Products Section */}
            <div className="border-b border-gray-800/50">
              <button
                onClick={() => toggleSection('products')}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
                aria-expanded={expandedSections.products}
              >
                <a href="https://www.daeilsys.com/products/" className="hover:text-gray-300">
                  {t.products}
                </a>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedSections.products ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.products && (
                <div className="px-4 pb-3 space-y-3">
                  {Object.entries(productsItems).map(([key, category]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="text-gray-300 font-medium px-3">
                        <a
                          href={category.href}
                          className="hover:text-white transition-colors"
                          onClick={handleLinkClick}
                        >
                          {category.title}
                        </a>
                      </h4>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <a
                            key={item.key}
                            href={item.href}
                            className="block py-2 px-6 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-sm"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Support Section */}
            <div className="border-b border-gray-800/50">
              <button
                onClick={() => toggleSection('support')}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
                aria-expanded={expandedSections.support}
              >
                <a href="https://www.daeilsys.com/support/" className="hover:text-gray-300">
                  {t.support}
                </a>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    expandedSections.support ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.support && (
                <div className="px-4 pb-3 space-y-3">
                  {Object.entries(supportItems).map(([key, category]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="text-gray-300 font-medium px-3">
                        <a
                          href={category.href}
                          className="hover:text-white transition-colors"
                          onClick={handleLinkClick}
                        >
                          {category.title}
                        </a>
                      </h4>
                      <div className="space-y-1">
                        {category.items.map((item) => (
                          <a
                            key={item.key}
                            href={item.href}
                            className="block py-2 px-6 text-gray-400 hover:text-white hover:bg-white/5 transition-colors rounded-lg text-sm"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <a
              href="https://www.daeilsys.com/support/case-studies/"
              className="block px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
              onClick={handleLinkClick}
            >
              {t.caseStudies}
            </a>
            <a
              href="https://www.daeilsys.com/newsroom/"
              className="block px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
              onClick={handleLinkClick}
            >
              {t.newsroom}
            </a>
            <a
              href="https://www.daeilsys.com/contact/"
              className="block px-4 py-3 text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-colors rounded-lg"
              onClick={handleLinkClick}
            >
              {t.contact}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
