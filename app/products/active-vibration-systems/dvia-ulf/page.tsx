import dynamic from "next/dynamic"
import type { Metadata, Viewport } from "next"

const Client = dynamic(() => import("./client"), { ssr: false })

const SITE_URL = "/products/active-vibration-systems/dvia-ulf"
const PAGE_PATH = "/products/active-vibration-systems/dvia-ulf"
const OG_IMAGE = "/og/dvia-ulf.png"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DVIA-ULF - Modular Active Vibration Isolation System | DVIA",
  description:
    "DVIA-ULF is a Modular Active Vibration Isolation System designed to deliver exceptional vibration control for SEM, TEM, and precision instruments.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_PATH,
    title: "DVIA-ULF - Modular Active Vibration Isolation System | DVIA",
    description:
      "Discover DVIA-ULF, a Modular Active Vibration Isolation System engineered for SEM, TEM, and precision research tools requiring stable and reliable vibration isolation.",
    siteName: "DVIA",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "DVIA-ULF - Modular Active Vibration Isolation System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DVIA-ULF - Modular Active Vibration Isolation System | DVIA",
    description:
      "DVIA-ULF is engineered for SEM, TEM, and precision instruments requiring ultra-low-frequency vibration isolation.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const revalidate = 86400

export default function DVIAULFPage() {
  return <Client />
}
