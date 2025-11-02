"use client"

import { Dispatch, SetStateAction } from "react"

export interface Tab<T extends string> {
  id: T
  label: string
}

interface ProductTabsProps<T extends string> {
  tabs: Tab<T>[]
  activeTab: T
  setActiveTab: Dispatch<SetStateAction<T>>
  variant?: "light" | "dark"
}

export default function ProductTabs<T extends string>({
  tabs,
  activeTab,
  setActiveTab,
  variant = "light",
}: ProductTabsProps<T>) {
  const isDark = variant === "dark"

  return (
    <div
      className={`border-b ${
        isDark
          ? "border-slate-700 bg-slate-900/95 backdrop-blur-lg shadow-lg"
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
      } sticky top-0 z-10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? isDark
                    ? "border-blue-400 text-blue-400"
                    : "border-blue-600 text-blue-600 dark:text-blue-400"
                  : isDark
                  ? "border-transparent text-gray-400 hover:text-gray-200"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
