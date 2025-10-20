import { Metadata } from "next"
import NewMainClient from "./client"

export const metadata: Metadata = {
  title: "DAEIL SYSTEMS - Creating Innovative Solutions for Precision Measurement",
  description: "Leading manufacturer of vibration isolation systems and optical tables for precision measurement equipment. Discover our latest DVIA-ULF series and advanced solutions.",
  keywords: [
    "vibration isolation",
    "optical tables",
    "precision measurement",
    "DVIA-ULF",
    "DVIA-T",
    "DVIO",
    "DVIA-P",
    "DVIA-M",
    "DAEIL SYSTEMS",
    "active vibration control",
    "electron microscopy",
    "semiconductor metrology"
  ],
  authors: [{ name: "DAEIL SYSTEMS" }],
  creator: "DAEIL SYSTEMS",
  publisher: "DAEIL SYSTEMS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("/"),
  alternates: {
    canonical: "/new-main",
    languages: {
      "ko-KR": "/new-main?lang=ko",
      "en-US": "/new-main?lang=en",
    },
  },
  openGraph: {
    title: "DAEIL SYSTEMS - Creating Innovative Solutions for Precision Measurement",
    description: "Leading manufacturer of vibration isolation systems and optical tables for precision measurement equipment.",
    url: "/new-main",
    siteName: "DAEIL SYSTEMS",
    images: [
      {
        url: "/daeilsys-images/dvia-ulf-main.jpg",
        width: 1200,
        height: 630,
        alt: "DAEIL SYSTEMS DVIA-ULF Series",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAEIL SYSTEMS - Creating Innovative Solutions for Precision Measurement",
    description: "Leading manufacturer of vibration isolation systems and optical tables for precision measurement equipment.",
    images: ["/daeilsys-images/dvia-ulf-main.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function NewMainPage() {
  return <NewMainClient />
}
