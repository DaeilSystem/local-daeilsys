import type { Metadata } from "next"
import Client from "./client"

export const metadata: Metadata = {
  title: "Products | DVIA",
  description:
    "Explore DVIA's comprehensive range of vibration isolation products including active systems, optical tables, and workstations.",
  keywords: ["vibration isolation products", "optical tables", "active vibration control", "pneumatic isolators"],
  openGraph: {
    title: "Products | DVIA",
    description:
      "Explore DVIA's comprehensive range of vibration isolation products including active systems, optical tables, and workstations.",
    type: "website",
  },
}

export const revalidate = 3600 // ISR: revalidate every hour

const ProductsPage = () => {
  return <Client />
}

export default ProductsPage
