import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dvia.com"

  // Static pages
  const staticPages = ["", "/company", "/products", "/support", "/case-studies", "/newsroom", "/contact"]

  // Company pages
  const companyPages = [
    "/company/overview",
    "/company/vision-mission",
    "/company/company-history",
    "/company/values",
    "/company/sustainability",
    "/company/intro-video",
    "/company/trade-shows",
  ]

  // Product categories
  const productCategories = [
    "/products/active-vibration-systems",
    "/products/optical-tables",
    "/products/vibration-workstations",
    "/products/pneumatic-platforms",
    "/products/pneumatic-isolators",
    "/products/acoustic-enclosures",
  ]

  // Product details
  const productDetails = [
    "/products/active-vibration-systems/dvia-t",
    "/products/active-vibration-systems/dvia-m",
    "/products/optical-tables/research-grade",
  ]

  const allPages = [...staticPages, ...companyPages, ...productCategories, ...productDetails]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : page.includes("/products/") ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.includes("/products/") ? 0.8 : 0.6,
  }))
}
