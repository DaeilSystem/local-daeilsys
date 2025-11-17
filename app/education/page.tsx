import { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Education - DVIA | DaeilSystem",
  description: "Education moves learners, leaders, innovators, communities, and everyone forward.",
}

export default function EducationPage() {
  return <Client />
}
