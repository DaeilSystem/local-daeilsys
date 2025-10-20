import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-ML Series | Advanced Active Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-ML Series represents the world's most advanced active vibration isolation systems for electron microscopes. Unmatched performance that outperforms any existing system.",
  keywords: ["DVIA-ML", "electron microscope", "active vibration isolation", "advanced vibration control", "precision measurement"],
  openGraph: {
    title: "DVIA-ML Series | Advanced Active Vibration Isolation System | DAEIL SYSTEMS",
    description:
      "DVIA-ML Series represents the world's most advanced active vibration isolation systems for electron microscopes.",
    type: "website",
  },
}

export const revalidate = 86400

const DviaMLPage = () => {
  return <Client />
}

export default DviaMLPage
