export interface MenuItem {
  key: string
  label: string
  href: string
}

export interface ProductCategory {
  title: string
  href: string
  items: MenuItem[]
}

export interface ProductsMenuItems {
  [key: string]: ProductCategory
}

export interface SupportMenuItems {
  [key: string]: ProductCategory
}

export interface Language {
  en: string
  ko: string
}

export interface Translations {
  en: TranslationKeys
  ko: TranslationKeys
}

export interface TranslationKeys {
  home: string
  company: string
  products: string
  support: string
  caseStudies: string
  newsroom: string
  contact: string
  heroTitle: string
  heroSubtitle: string
  learnMore: string
  exploreProducts: string
  companyOverview: string
  ourMission: string
  leadingProvider: string
  missionText: string
  featuredProducts: string
  activeVibration: string
  opticalTables: string
  workstations: string
  overview: string
  visionMission: string
  companyHistory: string
  values: string
  sustainability: string
  introVideo: string
  tradeShows: string
  activeVibrationSystems: string
  opticalTablesMenu: string
  vibrationWorkstations: string
  pneumaticPlatforms: string
  pneumaticIsolators: string
  foundationSystems: string
  acousticEnclosures: string
  technicalNotes: string
  userManual: string
  catalogs: string
  howToSetup: string
  dviaT: string
  dviaM: string
  dviaML: string
  dviaMLP: string
  dviaMO: string
  dviaU: string
  dviaUD: string
  dviaUB: string
  dviaULF: string
  dviaP: string
  researchGrade: string
  scientificGrade: string
  nonMagnetic: string
  opticalBreadboards: string
  aluminumPlates: string
  pneumaticSupports: string
  rigidSupports: string
  pneumaticSelfStanding: string
  rigidSelfStanding: string
  accessories: string
  dvidL: string
  dvidC: string
  dvidH: string
  dvidT: string
  dvipC: string
  dvipB: string
  dvimG: string
  dvimM: string
  dvimF: string
  dvif: string
  daeSeries: string
  dseSeries: string
  fundamentals: string
  genericCriteria: string
  activeSystem: string
  passiveSystem: string
  // Amaterasu Hero
  worldLeader: string
  weControl: string
  vibration: string
  since1993: string
  heroDescription: string
  contactUs: string
  years: string
  experience: string
  isolation: string
  at1Hz: string
  degreesOf: string
  freedom: string
  control: string
  start: string
  scrollToExplore: string
  // Amaterasu Vision
  vision: string
  visionStatement: string
  customerOrientation: string
  customerOrientationDesc: string
  partnership: string
  partnershipDesc: string
  passionForPerfection: string
  passionForPerfectionDesc: string
  // Amaterasu Products
  productLineup: string
  scrollToExploreSolutions: string
  swipeToExplore: string
  // Product items
  customActiveVibration: string
  customActiveVibrationDesc: string
  electronMicroscopeSeries: string
  electronMicroscopeSeriesDesc: string
  tabletopSeries: string
  tabletopSeriesDesc: string
  pneumaticServoSeries: string
  pneumaticServoSeriesDesc: string
  floorStandingSeries: string
  floorStandingSeriesDesc: string
  // Amaterasu Case Studies
  successStories: string
  installationReports: string
  caseStudiesDescription: string
  viewAllCaseStudies: string
  // Amaterasu Newsroom
  latestUpdates: string
  newsAndInsights: string
  newsroomDescription: string
  exploreAllArticles: string
  news: string
  pressRelease: string
  product: string
  // Amaterasu Footer
  footerDescription: string
  stayUpdated: string
  newsletterDescription: string
  enterEmail: string
  subscribe: string
  about: string
  history: string
  resources: string
  privacyPolicy: string
  termsOfUse: string
  warrantyPolicy: string
  legal: string
  allProducts: string
  copyright: string
  footerTagline: string
}

export interface ProductItem {
  title: string
  image: string
  description: string
}
