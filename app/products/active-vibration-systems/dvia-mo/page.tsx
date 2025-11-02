import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-MO Series - Active Optical Table | DVIA",
  description:
    "DVIA-MO Series combines DVIA-M active vibration isolation system with high-performance optical tables, controlling ground vibrations from 0.5 Hz for photonics, laser, and spectroscopy applications.",
  openGraph: {
    title: "DVIA-MO Series - Active Optical Table | DVIA",
    description:
      "DVIA-MO Series combines DVIA-M active vibration isolation system with high-performance optical tables, controlling ground vibrations from 0.5 Hz for photonics, laser, and spectroscopy applications.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const DVIAMOPage = () => {
  return <Client />
}

export default DVIAMOPage
