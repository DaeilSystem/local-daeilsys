import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-M | Advanced Active Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-M is an advanced active vibration isolation system for high-precision applications. Learn about specifications, features, and applications.",
  keywords: ["DVIA-M", "active vibration isolation", "advanced vibration control", "precision equipment"],
  openGraph: {
    title: "DVIA-M | Advanced Active Vibration Isolation System | DAEIL SYSTEMS",
    description:
      "DVIA-M is an advanced active vibration isolation system for high-precision applications.",
    type: "website",
  },
}

export const revalidate = 86400

const DviaMPage = () => {
  return <Client />
}

export default DviaMPage
