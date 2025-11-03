import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/pneumatic-supports-tie-bar-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "pneumatic support", "tie-bars", "casters", "vibration isolation", "공압식 서포트"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const PneumaticSupportsTieBarPage = () => {
  return <Client />
}

export default PneumaticSupportsTieBarPage

