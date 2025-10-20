"use client"

import type { MenuItem, ProductsMenuItems, SupportMenuItems } from "@/types"
import { motion } from "framer-motion"

interface DropdownMenuProps {
  type: "company" | "products" | "support"
  companyItems?: MenuItem[]
  productsItems?: ProductsMenuItems
  supportItems?: SupportMenuItems
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function DropdownMenu({
  type,
  companyItems,
  productsItems,
  supportItems,
  onMouseEnter,
  onMouseLeave,
}: DropdownMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="absolute top-full left-0 w-full apple-dropdown hidden lg:block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {type === "company" && companyItems && (
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <div className="space-y-2">
                {companyItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {type === "products" && productsItems && (
          <div className="grid grid-cols-4 gap-8">
            {Object.entries(productsItems).map(([key, category]) => (
              <div key={key}>
                <h3 className="text-white font-medium mb-4">
                  <a href={category.href} className="hover:text-gray-300">
                    {category.title}
                  </a>
                </h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "support" && supportItems && (
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(supportItems).map(([key, category]) => (
              <div key={key}>
                <h3 className="text-white font-medium mb-4">
                  <a href={category.href} className="hover:text-gray-300">
                    {category.title}
                  </a>
                </h3>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block text-gray-400 hover:text-white transition-colors text-sm"
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
    </motion.div>
  )
}
