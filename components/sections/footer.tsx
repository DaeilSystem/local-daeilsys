"use client"

import Link from "next/link"
import type { MenuItem, ProductsMenuItems, SupportMenuItems, TranslationKeys } from "@/types"

interface FooterProps {
  translations: TranslationKeys
  companyItems: MenuItem[]
  productsItems: ProductsMenuItems
  supportItems: SupportMenuItems
}

export function Footer({ translations: t, companyItems, productsItems, supportItems }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 섹션 - 로고, 회사정보, 네비게이션, 소셜미디어 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 왼쪽 - 로고 및 회사 정보 */}
          <div className="space-y-6">
            {/* 로고 및 회사명 */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gray-900 rounded-full border-r-transparent"></div>
              </div>
              <span className="text-xl font-bold">DAEIL SYSTEMS</span>
            </div>

            {/* 회사 상세 정보 */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>CEO : Kim Kwang-san | Address : 40 Maengri-ro, Wonsam-myeon, Cheoin-gu, Yongin-si, Gyeonggi-do</p>
              <p>Business Registration No. : 117-81-15867 | Tel : 031-339-3375 | Email: sales@daeilsys.com</p>
            </div>
          </div>

          {/* 오른쪽 - 네비게이션 및 소셜미디어 */}
          <div className="space-y-6">
            {/* 메인 네비게이션 */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/company" className="text-gray-300 hover:text-white transition-colors">Company</Link>
              <span className="text-gray-500">|</span>
              <Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              <span className="text-gray-500">|</span>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link>
              <span className="text-gray-500">|</span>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>

            {/* 소셜미디어 아이콘 */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/daeilsystems/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="https://www.linkedin.com/company/14623938" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="https://www.youtube.com/channel/UCdt-FbeboSTxAlcYuW62j6w" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <span className="text-xs">▶</span>
              </a>
              <a href="mailto:sales@daeilsys.com" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <span className="text-xs">✉</span>
              </a>
              <a href="https://www.instagram.com/daeilsystems/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <span className="text-xs">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* 중간 섹션 - 기존 메뉴 구조 유지 */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              {companyItems.slice(0, 4).map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.products}</h3>
            <ul className="space-y-2">
              {Object.entries(productsItems)
                .slice(0, 4)
                .map(([key, category]) => (
                  <li key={key}>
                    <a href={category.href} className="text-gray-400 hover:text-white transition-colors">
                      {category.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.support}</h3>
            <ul className="space-y-2">
              {Object.entries(supportItems).map(([key, category]) => (
                <li key={key}>
                  <a href={category.href} className="text-gray-400 hover:text-white transition-colors">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">CEO: Kim Kwang-san</li>
              <li className="text-gray-400">Address: 40 Maengri-ro, Wonsam-myeon, Cheoin-gu, Yongin-si, Gyeonggi-do</li>
              <li className="text-gray-400">Business Registration No.: 117-81-15867</li>
              <li className="text-gray-400">Tel: 031-339-3375</li>
              <li className="text-gray-400">Email: sales@daeilsys.com</li>
            </ul>
          </div>
        </div>

        {/* 하단 섹션 - 저작권 및 정책 링크 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 저작권 정보 */}
            <p className="text-sm text-gray-400">
              Copyright © 2025 DAEIL SYSTEMS CO., LTD. All rights reserved.
            </p>

            {/* 정책 링크 */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
              <span className="text-gray-500">|</span>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-gray-500">|</span>
              <Link href="/support/warranty-policy" className="text-gray-400 hover:text-white transition-colors">Warranty Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
