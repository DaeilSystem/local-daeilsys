import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-MB | Active Vibration Isolation System for Electron Microscopy | DAEIL SYSTEMS",
  description:
    "DVIA-MB is an active vibration isolation system designed specifically for electron microscopy applications. Maximize microscope performance without disturbances.",
  keywords: ["DVIA-MB", "electron microscopy", "active vibration isolation", "SEM", "TEM"],
  openGraph: {
    title: "DVIA-MB | Active Vibration Isolation System for Electron Microscopy | DAEIL SYSTEMS",
    description:
      "DVIA-MB is an active vibration isolation system designed specifically for electron microscopy applications.",
    type: "website",
  },
}

export const revalidate = 86400

const DviaMBPage = () => {
  return <Client />
}

export default DviaMBPage
