import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIO Series | Premium Optical Tables | DAEIL SYSTEMS",
  description:
    "DVIO Series represents the first premium optical tables manufactured in Korea since 1993. Superior quality and performance for precision optical applications.",
  keywords: ["DVIO Series", "optical tables", "premium optical tables", "precision optics", "Korea manufactured"],
  openGraph: {
    title: "DVIO Series | Premium Optical Tables | DAEIL SYSTEMS",
    description:
      "DVIO Series represents the first premium optical tables manufactured in Korea since 1993.",
    type: "website",
  },
}

export const revalidate = 86400

const OpticalTablesPage = () => {
  return <Client />
}

export default OpticalTablesPage
