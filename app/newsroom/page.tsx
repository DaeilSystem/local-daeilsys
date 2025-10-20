import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Newsroom | DVIA",
  description: "Stay updated with the latest news, announcements, and developments from DVIA.",
  keywords: ["news", "announcements", "press releases", "company updates", "vibration isolation news"],
  openGraph: {
    title: "Newsroom | DVIA",
    description: "Stay updated with the latest news, announcements, and developments from DVIA.",
    type: "website",
  },
}

export const revalidate = 1800 // ISR: revalidate every 30 minutes

const NewsroomPage = () => {
  return <Client />
}

export default NewsroomPage
