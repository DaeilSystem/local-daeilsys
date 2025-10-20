import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Contact Us | DVIA",
  description:
    "Get in touch with DVIA for inquiries about vibration isolation solutions, technical support, or partnership opportunities.",
  keywords: ["contact", "support", "inquiries", "technical assistance", "sales"],
  openGraph: {
    title: "Contact Us | DVIA",
    description:
      "Get in touch with DVIA for inquiries about vibration isolation solutions, technical support, or partnership opportunities.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const ContactPage = () => {
  return <Client />
}

export default ContactPage
