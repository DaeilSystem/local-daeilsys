import { translations } from "@/constants/translations"
import type { MenuItem, ProductsMenuItems, SupportMenuItems } from "@/types"

export const getCompanyMenuItems = (language: "en" | "ko"): MenuItem[] => {
  const t = translations[language]
  return [
    { key: "overview", label: t.overview, href: "https://www.daeilsys.com/company/overview/" },
    { key: "vision-mission", label: t.visionMission, href: "https://www.daeilsys.com/company/vision/" },
    { key: "company-history", label: t.companyHistory, href: "https://www.daeilsys.com/company/company-history/" },
    { key: "values", label: t.values, href: "https://www.daeilsys.com/company/values/" },
    { key: "sustainability", label: t.sustainability, href: "https://www.daeilsys.com/company/sustainability-management/" },
    { key: "intro-video", label: t.introVideo, href: "https://www.daeilsys.com/company/company-intro-video/" },
    { key: "trade-shows", label: t.tradeShows, href: "https://www.daeilsys.com/company/trade-shows/" },
  ]
}

export const getProductsMenuItems = (language: "en" | "ko"): ProductsMenuItems => {
  const t = translations[language]
  return {
    "active-vibration-systems": {
      title: t.activeVibrationSystems,
      href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/",
      items: [
        { key: "dvia-t", label: t.dviaT, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/tabletop-active-vibration-isolation-platform/" },
        { key: "dvia-m", label: t.dviaM, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/advanced-active-vibration-isolation-system/" },
        { key: "dvia-ml", label: t.dviaML, href: "https://www.daeilsys.com/product/active-vibration-isolation-systems/dvia-ml-active-vibration-isolation-system/" },
        { key: "dvia-mlp", label: t.dviaMLP, href: "https://www.daeilsys.com/product/active-vibration-isolation-systems/dvia-mlp1000-active-vibration-isolation-system/" },
        { key: "dvia-mo", label: t.dviaMO, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/active-vibration-isolation-optical-table/" },
        { key: "dvia-u", label: t.dviaU, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/modular-active-vibration-isolation-platform/" },
        { key: "dvia-ud", label: t.dviaUD, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/desk-active-vibration-isolation-platform/" },
        { key: "dvia-ub", label: t.dviaUB, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/base-spring-type-active-vibration-isolation-platform/" },
        { key: "dvia-ulf", label: t.dviaULF, href: "/products/active-vibration-systems/dvia-ulf" },
        { key: "dvia-p", label: t.dviaP, href: "https://www.daeilsys.com/products/active-vibration-isolation-systems/active-pneumatic-vibration-isolation-system/" },
      ],
    },
    "optical-tables": {
      title: t.opticalTablesMenu,
      href: "https://www.daeilsys.com/products/optical-tables/",
      items: [
        { key: "research-grade", label: t.researchGrade, href: "https://www.daeilsys.com/products/optical-tables/research-grade-optical-table-top/" },
        { key: "scientific-grade", label: t.scientificGrade, href: "https://www.daeilsys.com/products/optical-tables/scientific-grade-optical-table-top/" },
        { key: "non-magnetic", label: t.nonMagnetic, href: "https://www.daeilsys.com/products/optical-tables/non-magnetic-optical-table-top/" },
        { key: "breadboards", label: t.opticalBreadboards, href: "https://www.daeilsys.com/products/optical-tables/optical-breadboards/" },
        { key: "aluminum-plates", label: t.aluminumPlates, href: "https://www.daeilsys.com/products/optical-tables/optical-aluminum-plates/" },
        { key: "pneumatic-supports", label: t.pneumaticSupports, href: "https://www.daeilsys.com/products/optical-tables/pneumatic-supports-tie-bar-and-casters/" },
        { key: "rigid-supports", label: t.rigidSupports, href: "https://www.daeilsys.com/products/optical-tables/rigid-supports-tie-bar-and-casters/" },
        { key: "pneumatic-self", label: t.pneumaticSelfStanding, href: "https://www.daeilsys.com/products/optical-tables/pneumatic-supports-self-standing-type/" },
        { key: "rigid-self", label: t.rigidSelfStanding, href: "https://www.daeilsys.com/products/optical-tables/rigid-supports-self-standing-type/" },
        { key: "accessories", label: t.accessories, href: "https://www.daeilsys.com/products/optical-tables/accessories/" },
      ],
    },
    "vibration-workstations": {
      title: t.vibrationWorkstations,
      href: "https://www.daeilsys.com/products/vibration-isolation-workstations/",
      items: [
        { key: "dvid-l", label: t.dvidL, href: "https://www.daeilsys.com/products/vibration-isolation-workstations/lab-vibration-isolation-workstation/" },
        { key: "dvid-c", label: t.dvidC, href: "https://www.daeilsys.com/products/vibration-isolation-workstations/cleanroom-vibration-isolation-workstation/" },
        { key: "dvid-h", label: t.dvidH, href: "https://www.daeilsys.com/products/vibration-isolation-workstations/optical-vibration-isolation-workstation/" },
        { key: "dvid-t", label: t.dvidT, href: "https://www.daeilsys.com/products/vibration-isolation-workstations/dvid-t-tabletop-vibration-isolation-workstation/" },
      ],
    },
    "pneumatic-platforms": {
      title: t.pneumaticPlatforms,
      href: "https://www.daeilsys.com/products/low-profile-pneumatic-vibration-isolation-platform/",
      items: [
        { key: "dvip-c", label: t.dvipC, href: "https://www.daeilsys.com/products/vibration-isolation-floor-platforms/cradle-pneumatic-vibration-isolation-platform/" },
        { key: "dvip-b", label: t.dvipB, href: "https://www.daeilsys.com/products/vibration-isolation-floor-platforms/base-pneumatic-vibration-isolation-platform/" },
      ],
    },
    "pneumatic-isolators": {
      title: t.pneumaticIsolators,
      href: "https://www.daeilsys.com/products/pneumatic-vibration-isolators/",
      items: [
        { key: "dvim-g", label: t.dvimG, href: "https://www.daeilsys.com/products/pneumatic-vibration-isolation-mounts/advanced-pneumatic-vibration-isolator/" },
        { key: "dvim-m", label: t.dvimM, href: "https://www.daeilsys.com/products/pneumatic-vibration-isolation-mounts/standard-pneumatic-vibration-isolator/" },
        { key: "dvim-f", label: t.dvimF, href: "https://www.daeilsys.com/products/pneumatic-vibration-isolation-mounts/basic-pneumatic-vibration-isolator/" },
      ],
    },
    "foundation-systems": {
      title: t.foundationSystems,
      href: "https://www.daeilsys.com/products/vibration-isolated-foundation/",
      items: [{ key: "dvif", label: t.dvif, href: "https://www.daeilsys.com/products/foundation-vibration-isolation-system/vibration-isolated-foundation/" }],
    },
    "acoustic-enclosures": {
      title: t.acousticEnclosures,
      href: "https://www.daeilsys.com/products/acoustic-enclosures/",
      items: [
        { key: "dae-series", label: t.daeSeries, href: "https://www.daeilsys.com/products/acoustic-enclosures/tabletop-acoustic-enclosure/" },
        { key: "dse-series", label: t.dseSeries, href: "https://www.daeilsys.com/products/acoustic-enclosures/em-acoustic-enclosure/" },
      ],
    },
  }
}

export const getSupportMenuItems = (language: "en" | "ko"): SupportMenuItems => {
  const t = translations[language]
  return {
    "technical-notes": {
      title: t.technicalNotes,
      href: "https://www.daeilsys.com/support/technical-notes/",
      items: [
        { key: "fundamentals", label: t.fundamentals, href: "https://www.daeilsys.com/support/technical-notes/fundamentals-of-vibration/" },
        { key: "generic-criteria", label: t.genericCriteria, href: "https://www.daeilsys.com/support/technical-notes/generic-vibration-criteria/" },
        { key: "active-system", label: t.activeSystem, href: "https://www.daeilsys.com/support/technical-notes/active-vibration-isolation-system/" },
        { key: "passive-system", label: t.passiveSystem, href: "https://www.daeilsys.com/support/technical-notes/passive-vibration-isolation-system/" },
      ],
    },
    resources: {
      title: "Resources",
      href: "https://www.daeilsys.com/support/",
      items: [
        { key: "user-manual", label: t.userManual, href: "https://www.daeilsys.com/support/user-manual/" },
        { key: "catalogs", label: t.catalogs, href: "https://www.daeilsys.com/support/catalogs/" },
        { key: "how-to-setup", label: t.howToSetup, href: "https://www.daeilsys.com/support/how-to-set-up/" },
      ],
    },
  }
}
