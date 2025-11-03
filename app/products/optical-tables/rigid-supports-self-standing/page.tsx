import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/rigid-supports-self-standing-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "rigid support", "self-standing", "vibration isolation", "리지드 서포트"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const RigidSupportsSelfStandingPage = () => {
  return <Client />
}

export default RigidSupportsSelfStandingPage

