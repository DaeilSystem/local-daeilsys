import { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Company - DVIA | DaeilSystem",
  description: "Education moves learners, leaders, innovators, communities, and everyone forward.",
}

export default function CompanyPage() {
  return <Client />
}
