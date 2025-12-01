import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Vision & Mission | DAEIL SYSTEMS",
  description:
    "Discover DAEIL SYSTEMS' vision and mission for advancing nanotechnology through superior vibration isolation systems and precision control solutions.",
  keywords: ["vision", "mission", "DAEIL SYSTEMS", "nanotechnology", "vibration control"],
  openGraph: {
    title: "Vision & Mission | DAEIL SYSTEMS",
    description:
      "Discover DAEIL SYSTEMS' vision and mission for advancing nanotechnology through superior vibration isolation systems.",
    type: "website",
  },
}

export const revalidate = 86400

const VisionMissionPage = () => {
  return <Client />
}

export default VisionMissionPage
