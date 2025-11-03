import { translations } from "@/constants/translations"
import type { MenuItem, ProductsMenuItems, SupportMenuItems } from "@/types"

export const getCompanyMenuItems = (language: "en" | "ko"): MenuItem[] => {
  const t = translations[language]
  return [
    { key: "overview", label: t.overview, href: "/company/overview" },
    { key: "vision-mission", label: t.visionMission, href: "/company/vision-mission" },
    { key: "company-history", label: t.companyHistory, href: "/company/company-history" },
    { key: "values", label: t.values, href: "/company/values" },
    { key: "sustainability", label: t.sustainability, href: "/company/sustainability-management" },
    { key: "intro-video", label: t.introVideo, href: "/company/company-intro-video" },
    { key: "trade-shows", label: t.tradeShows, href: "/company/trade-shows" },
  ]
}

export const getProductsMenuItems = (language: "en" | "ko"): ProductsMenuItems => {
  const t = translations[language]
  return {
    "active-vibration-systems": {
      title: t.activeVibrationSystems,
      href: "/products/active-vibration-systems",
      items: [
        { key: "dvia-t", label: t.dviaT, href: "/products/active-vibration-systems/dvia-t" },
        { key: "dvia-m", label: t.dviaM, href: "/products/active-vibration-systems/dvia-m" },
        { key: "dvia-mb", label: t.dviaMB, href: "/products/active-vibration-systems/dvia-mb" },
        { key: "dvia-ml", label: t.dviaML, href: "/products/active-vibration-systems/dvia-ml" },
        { key: "dvia-mlp", label: t.dviaMLP, href: "/products/active-vibration-systems/dvia-mlp1000" },
        { key: "dvia-mo", label: t.dviaMO, href: "/products/active-vibration-systems/dvia-mo" },
        { key: "dvia-u", label: t.dviaU, href: "/products/active-vibration-systems/dvia-u" },
        { key: "dvia-ud", label: t.dviaUD, href: "/products/active-vibration-systems/dvia-ud" },
        { key: "dvia-ub", label: t.dviaUB, href: "/products/active-vibration-systems/dvia-ub" },
        { key: "dvia-ulf", label: t.dviaULF, href: "/products/active-vibration-systems/dvia-ulf" },
        { key: "dvia-p", label: t.dviaP, href: "/products/active-vibration-systems/dvia-p" },
      ],
    },
    "optical-tables": {
      title: t.opticalTablesMenu,
      href: "/products/optical-tables",
      items: [
        { key: "research-grade", label: t.researchGrade, href: "/products/optical-tables/research-grade" },
        { key: "scientific-grade", label: t.scientificGrade, href: "/products/optical-tables/scientific-grade" },
        { key: "non-magnetic", label: t.nonMagnetic, href: "/products/optical-tables/non-magnetic" },
        { key: "breadboards", label: t.opticalBreadboards, href: "/products/optical-tables/optical-breadboards" },
        { key: "aluminum-plates", label: t.aluminumPlates, href: "/products/optical-tables/aluminum-plates" },
        { key: "pneumatic-supports", label: t.pneumaticSupports, href: "/products/optical-tables/pneumatic-supports-tie-bar" },
        { key: "rigid-supports", label: t.rigidSupports, href: "/products/optical-tables/rigid-supports-tie-bar" },
        { key: "pneumatic-self", label: t.pneumaticSelfStanding, href: "/products/optical-tables/pneumatic-supports-self-standing" },
        { key: "rigid-self", label: t.rigidSelfStanding, href: "/products/optical-tables/rigid-supports-self-standing" },
        { key: "accessories", label: t.accessories, href: "/products/optical-tables/accessories/overhead-shelf" },
      ],
    },
    "vibration-workstations": {
      title: t.vibrationWorkstations,
      href: "/products/vibration-isolation-workstations",
      items: [
        { key: "dvid-l", label: t.dvidL, href: "/products/vibration-isolation-workstations/dvid-l" },
        { key: "dvid-c", label: t.dvidC, href: "/products/vibration-isolation-workstations/dvid-c" },
        { key: "dvid-h", label: t.dvidH, href: "/products/vibration-isolation-workstations/dvid-h" },
        { key: "dvid-t", label: t.dvidT, href: "/products/vibration-isolation-workstations/dvid-t" },
      ],
    },
    "pneumatic-platforms": {
      title: t.pneumaticPlatforms,
      href: "/products/vibration-isolation-floor-platforms",
      items: [
        { key: "dvip-c", label: t.dvipC, href: "/products/vibration-isolation-floor-platforms/dvip-c" },
        { key: "dvip-b", label: t.dvipB, href: "/products/vibration-isolation-floor-platforms/dvip-b" },
      ],
    },
    "pneumatic-isolators": {
      title: t.pneumaticIsolators,
      href: "/products/pneumatic-vibration-isolation-mounts",
      items: [
        { key: "dvim-g", label: t.dvimG, href: "/products/pneumatic-vibration-isolation-mounts/dvim-g" },
        { key: "dvim-m", label: t.dvimM, href: "/products/pneumatic-vibration-isolation-mounts/dvim-m" },
        { key: "dvim-f", label: t.dvimF, href: "/products/pneumatic-vibration-isolation-mounts/dvim-f" },
      ],
    },
    "foundation-systems": {
      title: t.foundationSystems,
      href: "/products/foundation-vibration-isolation-system",
      items: [{ key: "dvif", label: t.dvif, href: "/products/foundation-vibration-isolation-system/dvif" }],
    },
    "acoustic-enclosures": {
      title: t.acousticEnclosures,
      href: "/products/acoustic-enclosures",
      items: [
        { key: "dae-series", label: t.daeSeries, href: "/products/acoustic-enclosures/dae" },
        { key: "dse-series", label: t.dseSeries, href: "/products/acoustic-enclosures/dse" },
      ],
    },
  }
}

export const getSupportMenuItems = (language: "en" | "ko"): SupportMenuItems => {
  const t = translations[language]
  return {
    "technical-notes": {
      title: t.technicalNotes,
      href: "/support/technical-notes",
      items: [
        { key: "fundamentals", label: t.fundamentals, href: "/support/technical-notes/fundamentals" },
        { key: "generic-criteria", label: t.genericCriteria, href: "/support/technical-notes/generic-criteria" },
        { key: "active-system", label: t.activeSystem, href: "/support/technical-notes/active-system" },
        { key: "passive-system", label: t.passiveSystem, href: "/support/technical-notes/passive-system" },
      ],
    },
    resources: {
      title: "Resources",
      href: "/support",
      items: [
        { key: "user-manual", label: t.userManual, href: "/support/user-manual" },
        { key: "catalogs", label: t.catalogs, href: "/support/catalogs" },
        { key: "how-to-setup", label: t.howToSetup, href: "/support/how-to-setup" },
      ],
    },
  }
}
