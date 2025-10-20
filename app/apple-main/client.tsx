"use client"

import { AppleFAMGallery } from "@/components/apple/apple-fam-gallery"
import { AppleHeroNew } from "@/components/apple/apple-hero-new"
import { AppleProductsGridNew } from "@/components/apple/apple-products-grid-new"
import { AppleTVGallery } from "@/components/apple/apple-tv-gallery"
import { useTheme } from "@/hooks/use-theme"

export default function Client() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* 기존 Navigation */}
      {/* @ts-ignore */}

      {/* Apple Style Hero Section */}
      {/* @ts-ignore */}
      <AppleHeroNew />

      {/* Apple Style Products Grid */}
      {/* @ts-ignore */}
      <AppleProductsGridNew />

      {/* Apple Style TV Gallery */}
      {/* @ts-ignore */}
      <AppleTVGallery />

      {/* Apple Style FAM Gallery */}
      {/* @ts-ignore */}
      <AppleFAMGallery />

      {/* Apple Style Footer - 고정된 영어 텍스트로 hydration 오류 방지 */}
      <footer className="bg-gray-100 text-gray-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/company/overview" className="hover:text-gray-900">Overview</a></li>
                <li><a href="/company/vision-mission" className="hover:text-gray-900">Vision & Mission</a></li>
                <li><a href="/company/company-history" className="hover:text-gray-900">Company History</a></li>
                <li><a href="/company/values" className="hover:text-gray-900">Values</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/products/active-vibration-systems" className="hover:text-gray-900">Active Vibration Systems</a></li>
                <li><a href="/products/passive-vibration-systems" className="hover:text-gray-900">Passive Vibration Systems</a></li>
                <li><a href="/products/accessories" className="hover:text-gray-900">Accessories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/support/technical-support" className="hover:text-gray-900">Technical Support</a></li>
                <li><a href="/support/warranty" className="hover:text-gray-900">Warranty</a></li>
                <li><a href="/support/case-studies" className="hover:text-gray-900">Case Studies</a></li>
                <li><a href="/support/downloads" className="hover:text-gray-900">Downloads</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="/newsroom" className="hover:text-gray-900">Newsroom</a></li>
                <li><a href="/careers" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500">
                © 2024 DAEIL SYSTEMS. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                <a href="/cookies" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
