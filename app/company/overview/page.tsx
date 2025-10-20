import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Company Overview | DAEIL SYSTEMS",
  description:
    "Learn about DAEIL SYSTEMS, a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems since 1984.",
  keywords: ["company overview", "DAEIL SYSTEMS", "vibration isolation", "company history", "mission"],
  openGraph: {
    title: "Company Overview | DAEIL SYSTEMS",
    description:
      "Learn about DAEIL SYSTEMS, a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems since 1984.",
    type: "website",
  },
}

export const revalidate = 86400

const CompanyOverviewPage = () => {
  return <Client />
}

export default CompanyOverviewPage
