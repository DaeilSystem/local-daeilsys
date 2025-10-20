"use client"

import { getCompanyInfo } from "@/data/company"
import { useLanguage } from "@/hooks/use-language"

interface CompanyInfoProps {
  className?: string
}

export function CompanyInfo({ className }: CompanyInfoProps) {
  const { language, isInitialized } = useLanguage()
  const companyInfo = getCompanyInfo()

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Company Information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Company Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Industry</span>
                <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium text-right">{companyInfo.industry}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Location</span>
                <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium text-right">{companyInfo.location}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Type</span>
                <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium text-right">{companyInfo.organizationType}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">CEO</span>
                <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium text-right">{companyInfo.keyExecutives[0]}</span>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Products
            </h3>
            <div className="space-y-3">
              {companyInfo.products.map((product, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
