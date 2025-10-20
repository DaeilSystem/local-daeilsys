import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: {
    template: "%s | DAEIL SYSTEMS",
    default: "DAEIL SYSTEMS - Advanced Vibration Isolation Solutions",
  },
  description:
    "DAEIL SYSTEMS is a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems for nanoscale measurement equipment. Since 1984, we provide the most excellent performance vibration control systems.",
  keywords: [
    "vibration isolation",
    "optical tables",
    "active vibration control",
    "research equipment",
    "DAEIL SYSTEMS",
    "DVIA series",
    "electron microscopy",
    "semiconductor metrology",
    "nanotechnology",
    "precision measurement"
  ],
  openGraph: {
    title: "DAEIL SYSTEMS - Advanced Vibration Isolation Solutions",
    description:
      "DAEIL SYSTEMS is a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems for nanoscale measurement equipment. Since 1984, we provide the most excellent performance vibration control systems.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: "/",
    siteName: "DAEIL SYSTEMS",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAEIL SYSTEMS - Advanced Vibration Isolation Solutions",
    description: "Leading provider of vibration isolation systems for research, manufacturing, and scientific applications",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ko-KR": "/ko",
    },
  },
}

export const revalidate = 3600 // ISR: revalidate every hour

const HomePage = () => {
  return <Client />
}

export default HomePage
