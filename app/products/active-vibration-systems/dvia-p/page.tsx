import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-P | Active Pneumatic Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-P is an active pneumatic vibration isolation system designed for semiconductor and wafer metrology tools. Superior performance for precision measurements.",
  keywords: ["DVIA-P", "semiconductor metrology", "wafer metrology", "pneumatic vibration isolation", "precision measurement"],
  openGraph: {
    title: "DVIA-P | Active Pneumatic Vibration Isolation System | DAEIL SYSTEMS",
    description:
      "DVIA-P is an active pneumatic vibration isolation system designed for semiconductor and wafer metrology tools.",
    type: "website",
  },
}

export const revalidate = 86400

const DviaPPage = () => {
  return <Client />
}

export default DviaPPage
