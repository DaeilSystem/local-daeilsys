import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DAEIL SYSTEMS - 혁신적인 진동 제어 솔루션",
  description: "대일시스템의 최첨단 액티브 제진대와 광학 테이블로 정밀한 측정 환경을 구축하세요. DVIA-ULF, DVIA-ML, DVIO 시리즈를 만나보세요.",
  keywords: "액티브 제진대, 광학 테이블, 진동 제어, DVIA-ULF, DVIA-ML, DVIO, 대일시스템",
  openGraph: {
    title: "DAEIL SYSTEMS - 혁신적인 진동 제어 솔루션",
    description: "대일시스템의 최첨단 액티브 제진대와 광학 테이블로 정밀한 측정 환경을 구축하세요.",
    url: "https://daeilsys.com/apple-main",
    siteName: "DAEIL SYSTEMS",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/daeilsys-images/dvia-ulf-main.jpg",
        width: 1200,
        height: 630,
        alt: "DAEIL SYSTEMS DVIA-ULF Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAEIL SYSTEMS - 혁신적인 진동 제어 솔루션",
    description: "대일시스템의 최첨단 액티브 제진대와 광학 테이블로 정밀한 측정 환경을 구축하세요.",
    images: ["/daeilsys-images/dvia-ulf-main.jpg"],
  },
  alternates: {
    canonical: "https://daeilsys.com/apple-main",
    languages: {
      "ko": "https://daeilsys.com/apple-main",
      "en": "https://daeilsys.com/apple-main?lang=en",
    },
  },
}

export default function AppleMainPage() {
  return <Client />
}
