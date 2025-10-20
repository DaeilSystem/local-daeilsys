import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Support | DVIA",
  description:
    "Access technical documentation, user manuals, catalogs, and setup guides for DVIA vibration isolation products.",
  keywords: ["technical support", "user manual", "product catalogs", "installation guides", "vibration isolation"],
  openGraph: {
    title: "Support | DVIA",
    description:
      "Access technical documentation, user manuals, catalogs, and setup guides for DVIA vibration isolation products.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const SupportPage = () => {
  return <Client />
}

export default SupportPage
