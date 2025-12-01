"use client"

import { getCompanyInfo } from "@/data/company"

interface CompanyStatsProps {
  className?: string
}

export function CompanyStats({ className }: CompanyStatsProps) {
  const companyInfo = getCompanyInfo()

  const stats = [
    {
      value: companyInfo.yearEstablished,
      label: "Founded",
    },
    {
      value: `${companyInfo.employees}+`,
      label: "Employees",
    },
    {
      value: companyInfo.products.length,
      label: "Product Lines",
    },
    {
      value: "40+",
      label: "Years Experience",
    },
  ]

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
