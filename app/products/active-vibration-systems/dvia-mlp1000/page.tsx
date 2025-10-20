import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-MLP1000 | New Standard Active Vibration Isolation System | DAEIL SYSTEMS",
  description:
    "DVIA-MLP1000 introduces a new active vibration isolation system that sets a new standard for vibration isolation systems. Advanced technology for precision applications.",
  keywords: ["DVIA-MLP1000", "new standard", "active vibration isolation", "advanced technology", "precision applications"],
  openGraph: {
    title: "DVIA-MLP1000 | New Standard Active Vibration Isolation System | DAEIL SYSTEMS",
    description:
      "DVIA-MLP1000 introduces a new active vibration isolation system that sets a new standard for vibration isolation systems.",
    type: "website",
  },
}

export const revalidate = 86400

const DviaMLP1000Page = () => {
  return <Client />
}

export default DviaMLP1000Page
