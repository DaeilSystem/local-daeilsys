import type { Metadata } from "next"
import Client from "./client"
import productData from "@/data/products/optical-breadboards-full.json"

export const metadata: Metadata = {
  title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
  description: typeof productData.description === "string" ? productData.description : productData.description.en,
  keywords: [productData.name, "optical breadboard", "honeycomb", "breadboard", "광학 브레드보드"],
  openGraph: {
    title: `${productData.name} | ${typeof productData.fullName === "string" ? productData.fullName : productData.fullName.en} | DAEIL SYSTEMS`,
    description: typeof productData.description === "string" ? productData.description : productData.description.en,
    type: "website",
  },
}

export const revalidate = 86400

const OpticalBreadboardsPage = () => {
  return <Client />
}

export default OpticalBreadboardsPage
