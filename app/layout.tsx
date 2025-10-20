// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type React from "react"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/sections/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { translations } from "@/constants/translations"
import { getCompanyMenuItems, getProductsMenuItems, getSupportMenuItems } from "@/data/menu-items"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DVIA - Advanced Vibration Isolation Systems",
  description:
    "Leading manufacturer of active and passive vibration isolation systems for precision instruments and research applications.",
  keywords:
    "vibration isolation, active vibration control, optical tables, pneumatic isolators, research equipment",
  authors: [{ name: "DVIA" }],
  openGraph: {
    title: "DVIA - Advanced Vibration Isolation Systems",
    description:
      "Leading manufacturer of active and passive vibration isolation systems for precision instruments and research applications.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
    icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = translations["en"] // 기본값으로 영어 사용
  const companyMenuItems = getCompanyMenuItems("en")
  const productsMenuItems = getProductsMenuItems("en")
  const supportMenuItems = getSupportMenuItems("en")

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="overflow-x-hidden">{children}</main>
          <Footer
            translations={t}
            companyItems={companyMenuItems}
            productsItems={productsMenuItems}
            supportItems={supportMenuItems}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
