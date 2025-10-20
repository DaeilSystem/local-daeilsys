import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-T | Tabletop Active Vibration Isolation Platform | DAEIL SYSTEMS",
  description:
    "DVIA-T is a tabletop active vibration isolation platform designed for nanometer resolution microscopes. Learn about specifications, features, and applications.",
  keywords: ["DVIA-T", "tabletop vibration isolation", "active vibration control", "microscope platform", "nanometer resolution"],
  openGraph: {
    title: "DVIA-T | Tabletop Active Vibration Isolation Platform | DAEIL SYSTEMS",
    description:
      "DVIA-T is a tabletop active vibration isolation platform designed for nanometer resolution microscopes.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const DviaTPage = () => {
  return <Client />
}

export default DviaTPage
