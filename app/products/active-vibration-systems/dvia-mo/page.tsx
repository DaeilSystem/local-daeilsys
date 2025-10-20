import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "DVIA-MO - Modular Active Vibration Isolation System | DVIA",
  description:
    "Modular Active Vibration Isolation System designed for SEM and TEM applications with ultra-low frequency isolation performance.",
  openGraph: {
    title: "DVIA-MO - Modular Active Vibration Isolation System | DVIA",
    description:
      "Modular Active Vibration Isolation System designed for SEM and TEM applications with ultra-low frequency isolation performance.",
    type: "website",
  },
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const DVIAMOPage = () => {
  return <Client />
}

export default DVIAMOPage
