export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionEn?: string;
  image: string;
  url: string;
}

export interface Solution {
  id: string;
  title: string;
  titleKo: string;
  description: string;
  descriptionKo: string;
  image: string;
  url: string;
  productSeries: string;
  keyFeatures: string[];
  keyFeaturesKo: string[];
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface UpdateItem {
  id: string;
  title: string;
  date: string;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "우리는 이미 대일시스템 기업의 가치를 보고 있다.",
    excerpt: "인간의 소용은 어디서 오는 것인가? 애초에 '인간의 소용'이란 말이 성립되기나 하는 것인가? 소용이란 어떠한 득이...",
    date: "2025년 8월 20일",
    image: "/daeilsys-images/news-1.jpg",
    url: "/newsroom/beyond-business-driving-positive-change-in-the-community"
  },
  {
    id: "2",
    title: "왜 불안한가? 불안이 주는 대일시스템의 실존에 관하여.",
    excerpt: "진동이란 무엇인가. 지진과 같은 커다란 흔들림부터 보이지 않는 정밀한 세계에 있는 작은 움직임까지 그것을 진동이라...",
    date: "2025년 8월 20일",
    image: "/daeilsys-images/news-2.jpg",
    url: "https://www.daeilsys.com/ko/newsroom/concerning-the-existence-of-daeil-systems-in-anxiety/"
  },
  {
    id: "3",
    title: "대일시스템의 초정밀 진동 제어, 흔들림 없는 나노 세계를 열다.",
    excerpt: "미래 산업의 핵심 동력인 나노 기술은 소재, 전자, 에너지, 바이오 등 광범위한 분야에서 혁신적인 변화를...",
    date: "2025년 5월 14일",
    image: "/daeilsys-images/news-3.png",
    url: "https://www.daeilsys.com/ko/newsroom/daeil-systems-precision-control-unlocks-stability-in-the-nanoworld/"
  },
  {
    id: "4",
    title: "소리 없는 위협, 진동 왜 정밀 실험실은 흔들림에 민감할까?",
    excerpt: "최첨단 과학 연구가 이루어지는 정밀 실험실은 눈에 보이지 않는 미세한 세계를 탐구하는 공간이다.",
    date: "2025년 5월 14일",
    image: "/daeilsys-images/news-4.png",
    url: "https://www.daeilsys.com/ko/newsroom/silent-threat-why-are-precision-laboratories-so-sensitive-to-vibration/"
  },
  {
    id: "5",
    title: "연구실 환경 구축의 숨은 조력자, 제진대의 역할",
    excerpt: "정밀한 실험과 정확한 측정이 핵심인 연구 환경에서 예상치 못한 작은 진동은 실험 결과에 중대한 영향을...",
    date: "2025년 5월 14일",
    image: "/daeilsys-images/news-5.png",
    url: "https://www.daeilsys.com/ko/newsroom/the-unsung-hero-of-research-lab-environments-the-vital-role-of-vibration-isolation/"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Thermo Fisher Scientific Scios 2 DualBeam – FIB SEM DVIA-MB1000 Installation Report",
    description: "Thermo Fisher Scientific Scios 2 DualBeam - FIB SEM DVIA-MB1000 Installation Customer: SILA",
    date: "2024년 6월 11일",
    image: "/daeilsys-images/case-study-1.jpg",
    url: "/support/case-studies/thermo-fisher-scios-2-fib-sem-dvia-mb1000",
    tags: ["DVIA-M 시리즈", "설치사례"]
  },
  {
    id: "2",
    title: "Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Report",
    description: "Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Customer: NOVARTIS",
    date: "2024년 6월 11일",
    image: "/daeilsys-images/case-study-2.jpg",
    url: "/support/case-studies/thermo-fisher-glacios-2-cryo-tem-dvia-mb3000",
    tags: ["DVIA-M 시리즈", "설치사례"]
  },
  {
    id: "3",
    title: "Thermo Fisher Scientific Scios 2 DualBeam – FIB SEM DVIA-MB1000 Installation Report",
    description: "Thermo Fisher Scientific Scios 2 DualBeam - FIB SEM DVIA-MB1000 Installation Customer: SILA",
    date: "2024년 6월 11일",
    image: "/daeilsys-images/case-study-3.jpg",
    url: "https://www.daeilsys.com/ko/support/case-studies/thermo-fisher-installation-mb1000-tfs-scios-2-tamlin-matthews/",
    tags: ["DVIA-M 시리즈", "설치사례"]
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Active Vibration Isolation Systems",
    nameKo: "액티브 제진대",
    description: "DVIA 시리즈: DVIA-T, DVIA-M, DVIA-ML, DVIA-MB, DVIA-P, DVIA-U, DVIA-ULF 등 다양한 모델의 능동형 진동 제어 시스템으로 전자현미경, 반도체 계측, 광학 계측 등 고정밀 장비를 위한 최고의 진동 제어 솔루션을 제공합니다.",
    descriptionEn: "DVIA Series: DVIA-T, DVIA-M, DVIA-ML, DVIA-MB, DVIA-P, DVIA-U, DVIA-ULF and more - Advanced active vibration isolation systems providing the ultimate vibration control solution for high-precision equipment including electron microscopes, semiconductor metrology, and optical metrology.",
    image: "/daeilsys-images/product-active-vibration.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "2",
    name: "Optical Tables",
    nameKo: "광학테이블",
    description: "DVIO 시리즈: 1993년부터 제조한 국내 최초의 프리미엄 광학테이블로, 가볍지만 놀랍도록 견고한 스틸 허니컴 구조와 독특하게 설계된 공압 진동 절연기를 결합하여 연구용, 과학용, 비자성 광학테이블을 제공합니다.",
    descriptionEn: "DVIO Series: Since 1993, Korea's first premium optical tables combining lightweight but incredibly rigid steel honeycomb structure with uniquely designed pneumatic vibration isolators for research, scientific, and non-magnetic applications.",
    image: "/daeilsys-images/product-optical-tables.jpg",
    url: "/products/optical-tables"
  },
  {
    id: "3",
    name: "Vibration Isolation Workstations",
    nameKo: "진동 제어 워크스테이션",
    description: "DVID-L, DVID-C 시리즈: 진동 제어 워크스테이션으로 실험실 환경에서 안정적인 작업 공간을 제공하며, 다양한 액세서리와 지원 장비를 통해 맞춤형 솔루션을 제공합니다.",
    descriptionEn: "DVID-L, DVID-C Series: Vibration isolation workstations providing stable workspace in laboratory environments with various accessories and support equipment for customized solutions.",
    image: "/daeilsys-images/product-workstation.jpg",
    url: "/products/vibration-isolation-workstations"
  },
  {
    id: "4",
    name: "Low-Profile Pneumatic Vibration Isolation Platform",
    nameKo: "저상형 공압 진동 제어 플랫폼",
    description: "DVIP-C, DVIP-B 시리즈: 저상형 공압 진동 제어 플랫폼으로 공간 효율성을 극대화하면서도 우수한 진동 제어 성능을 제공합니다.",
    descriptionEn: "DVIP-C, DVIP-B Series: Low-profile pneumatic vibration isolation platforms maximizing space efficiency while providing excellent vibration control performance.",
    image: "/daeilsys-images/product-low-profile.jpg",
    url: "/products/low-profile-pneumatic-platforms"
  },
  {
    id: "5",
    name: "Pneumatic Vibration Isolators",
    nameKo: "공압식 진동 아이솔레이터",
    description: "DVIM-G, DVIM-M 시리즈: 공압식 진동 아이솔레이터로 다양한 부하와 응용 분야에 맞는 진동 제어 솔루션을 제공합니다.",
    descriptionEn: "DVIM-G, DVIM-M Series: Pneumatic vibration isolators providing vibration control solutions for various loads and applications.",
    image: "/daeilsys-images/product-pneumatic.jpg",
    url: "/products/pneumatic-vibration-isolators"
  },
  {
    id: "6",
    name: "Foundation Vibration Isolation System",
    nameKo: "독립기초 진동 제어 시스템",
    description: "DVIF 시리즈: 독립기초 진동 제어 시스템으로 건물 구조물과 분리된 독립적인 진동 제어 환경을 제공합니다.",
    descriptionEn: "DVIF Series: Foundation vibration isolation systems providing independent vibration control environment separated from building structures.",
    image: "/daeilsys-images/product-foundation.jpg",
    url: "/products/foundation-vibration-systems"
  },
  {
    id: "7",
    name: "Acoustic Enclosures",
    nameKo: "음향 인클로저",
    description: "DAE, DSE 시리즈: 음향 인클로저로 소음 차단과 진동 제어를 동시에 제공하여 최적의 실험 환경을 조성합니다.",
    descriptionEn: "DAE, DSE Series: Acoustic enclosures providing both noise isolation and vibration control for optimal experimental environments.",
    image: "/daeilsys-images/product-acoustic.jpg",
    url: "/products/acoustic-enclosures"
  }
];

export const solutions: Solution[] = [
  {
    id: "1",
    title: "Semiconductor Metrology",
    titleKo: "반도체 계측",
    description: "The DVIA-P Series ensures accurate nanoscale measurements, fast settling time, and superior vibration isolation performance for semiconductor metrology equipment",
    descriptionKo: "DVIA-P 시리즈는 반도체 계측 장비를 위한 정확한 나노스케일 측정, 빠른 안정화 시간, 우수한 진동 절연 성능을 보장합니다",
    image: "/daeilsys-images/solution-semiconductor.jpg",
    url: "/solutions/semiconductor-metrology",
    productSeries: "DVIA-P Series",
    keyFeatures: [
      "Accurate nanoscale measurements",
      "Fast settling time",
      "Superior vibration isolation performance"
    ],
    keyFeaturesKo: [
      "정확한 나노스케일 측정",
      "빠른 안정화 시간",
      "우수한 진동 절연 성능"
    ]
  },
  {
    id: "2",
    title: "Electron Microscopy",
    titleKo: "전자현미경",
    description: "The DVIA-MB Series, the most advanced active vibration isolation system, maximizes the performance of electron microscopes without any disturbances.",
    descriptionKo: "DVIA-MB 시리즈는 가장 고급스러운 액티브 진동 절연 시스템으로, 전자현미경의 성능을 어떤 방해 없이 최대화합니다.",
    image: "/daeilsys-images/solution-electron-microscopy.jpg",
    url: "/solutions/electron-microscopy",
    productSeries: "DVIA-MB Series",
    keyFeatures: [
      "Most advanced active vibration isolation",
      "Maximizes electron microscope performance",
      "No disturbances"
    ],
    keyFeaturesKo: [
      "가장 고급스러운 액티브 진동 절연",
      "전자현미경 성능 최대화",
      "방해 요소 없음"
    ]
  },
  {
    id: "3",
    title: "Microscopy",
    titleKo: "현미경",
    description: "The DVIA-T Series, a tabletop active vibration isolation platform provides a complete vibration-controlled environment for microscopes with nanoscale resolutions.",
    descriptionKo: "DVIA-T 시리즈는 탁상형 액티브 진동 절연 플랫폼으로, 나노스케일 해상도의 현미경을 위한 완전한 진동 제어 환경을 제공합니다.",
    image: "/daeilsys-images/solution-microscopy.jpg",
    url: "/solutions/microscopy",
    productSeries: "DVIA-T Series",
    keyFeatures: [
      "Tabletop active vibration isolation platform",
      "Complete vibration-controlled environment",
      "Nanoscale resolution support"
    ],
    keyFeaturesKo: [
      "탁상형 액티브 진동 절연 플랫폼",
      "완전한 진동 제어 환경",
      "나노스케일 해상도 지원"
    ]
  },
  {
    id: "4",
    title: "Photonics & Laser",
    titleKo: "포토닉스 & 레이저",
    description: "The DVIO Series, the lightweight but incredibly rigid steel honeycomb optical table is combined with uniquely designed pneumatic vibration isolators, reduces floor vibrations, and minimizes relative motions on the optical table top.",
    descriptionKo: "DVIO 시리즈는 가볍지만 놀랍도록 견고한 스틸 허니컴 광학테이블과 독특하게 설계된 공압 진동 절연기를 결합하여 바닥 진동을 줄이고 광학테이블 상단의 상대적 움직임을 최소화합니다.",
    image: "/daeilsys-images/solution-photonics.jpg",
    url: "/solutions/photonics-laser",
    productSeries: "DVIO Series",
    keyFeatures: [
      "Lightweight but incredibly rigid steel honeycomb",
      "Uniquely designed pneumatic vibration isolators",
      "Reduces floor vibrations"
    ],
    keyFeaturesKo: [
      "가볍지만 놀랍도록 견고한 스틸 허니컴",
      "독특하게 설계된 공압 진동 절연기",
      "바닥 진동 감소"
    ]
  },
  {
    id: "5",
    title: "Flat Panel Display Metrology",
    titleKo: "플랫 패널 디스플레이 계측",
    description: "The DVIM Series, pneumatic vibration isolators with oil-damper options are designed to support the flat panel display metrology equipment with motorized linear stages, providing fast settling time of the equipment and reducing floor vibrations.",
    descriptionKo: "DVIM 시리즈는 오일 댐퍼 옵션이 있는 공압 진동 절연기로, 모터화된 선형 스테이지가 있는 플랫 패널 디스플레이 계측 장비를 지원하도록 설계되어 장비의 빠른 안정화 시간을 제공하고 바닥 진동을 줄입니다.",
    image: "/daeilsys-images/solution-display.jpg",
    url: "/solutions/flat-panel-display-metrology",
    productSeries: "DVIM Series",
    keyFeatures: [
      "Pneumatic vibration isolators with oil-damper options",
      "Support for motorized linear stages",
      "Fast settling time"
    ],
    keyFeaturesKo: [
      "오일 댐퍼 옵션이 있는 공압 진동 절연기",
      "모터화된 선형 스테이지 지원",
      "빠른 안정화 시간"
    ]
  },
  {
    id: "6",
    title: "X-Ray Metrology",
    titleKo: "엑스레이 계측",
    description: "The DVIA-MB Series is designed to isolate X-Ray metrology equipment from low-frequency floor vibrations.",
    descriptionKo: "DVIA-MB 시리즈는 X-Ray 계측 장비를 저주파 바닥 진동으로부터 격리하도록 설계되었습니다.",
    image: "/daeilsys-images/solution-xray.jpg",
    url: "/solutions/x-ray-metrology",
    productSeries: "DVIA-MB Series",
    keyFeatures: [
      "Isolates X-Ray metrology equipment",
      "Protects from low-frequency floor vibrations",
      "High precision measurement support"
    ],
    keyFeaturesKo: [
      "X-Ray 계측 장비 격리",
      "저주파 바닥 진동으로부터 보호",
      "고정밀 측정 지원"
    ]
  },
  {
    id: "7",
    title: "NMR Spectroscopy",
    titleKo: "NMR 분광법",
    description: "The DVIA-M Series with magnetic field resistant stainless steel design offers a vibration-controlled environment for NMR spectroscopy.",
    descriptionKo: "자기장 저항 스테인리스 스틸 설계의 DVIA-M 시리즈는 NMR 분광법을 위한 진동 제어 환경을 제공합니다.",
    image: "/daeilsys-images/solution-nmr.jpg",
    url: "/solutions/nmr-spectroscopy",
    productSeries: "DVIA-M Series",
    keyFeatures: [
      "Magnetic field resistant stainless steel design",
      "Vibration-controlled environment",
      "NMR spectroscopy optimization"
    ],
    keyFeaturesKo: [
      "자기장 저항 스테인리스 스틸 설계",
      "진동 제어 환경",
      "NMR 분광법 최적화"
    ]
  }
];

export const values: Value[] = [
  {
    id: "1",
    title: "고객 지향",
    description: "우리는 장기적으로 고객의 요구를 충족시키기 위해 개인과 팀 목표를 조정할 것 입니다.",
    icon: "🎯"
  },
  {
    id: "2",
    title: "파트너쉽",
    description: "우리는 파트너와의 밀접하고 돈독한 관계의 힘으로 공동 목표를 달성할 것 입니다.",
    icon: "🤝"
  },
  {
    id: "3",
    title: "완벽에 대한 열정",
    description: "우리는 고객을 만족시키기 위해 결함이 없는 제품을 제공하는데 지속적으로 집중하고 최선을 다할 것 입니다.",
    icon: "⚡"
  }
];

export const updates: UpdateItem[] = [
  {
    id: "1",
    title: "DVIA-T 설치 방법 영상이 업로드 되었습니다.",
    date: "2025년 1월15일",
    url: "/ko/support/how-to-set-up/dvia-t/"
  },
  {
    id: "2",
    title: "DVIO 공압식 서포트 사용 설명서가 업로드 되었습니다.",
    date: "2024년 12월09일",
    url: "/ko/support/user-manual/"
  },
  {
    id: "3",
    title: "'광학테이블 – 공압식 타이바 서포트 타입' 설치 방법 영상이 업로드 되었습니다.",
    date: "2024년 11월18일",
    url: "/ko/support/how-to-set-up/optical-table-with-tie-bar-support/"
  }
];

export const heroSlides = [
  {
    id: "1",
    title: "차별화된 설계로 더 선명하게.",
    subtitle: "진동 없는 SEM 이미징.",
    product: "DVIA-ULF Series",
    category: "Active Vibration Isolation System",
    image: "/daeilsys-images/dvia-ulf-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "2",
    title: "타의 추종을 불허하는 성능으로,",
    subtitle: "전자현미경을 위한 세계 최고 수준의 액티브 제진대",
    product: "DVIA-ML Series",
    category: "The world's most advanced active vibration isolation systems for electron microscopes",
    image: "/daeilsys-images/dvia-ml-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "3",
    title: "새로운 표준을 제시하는",
    subtitle: "제진 시스템의 새로운 기준을 설정하는 액티브 제진 시스템",
    product: "DVIA-MLP1000",
    category: "Advanced Active Vibration Isolation System",
    image: "/daeilsys-images/dvia-mlp1000-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "4",
    title: "2024년부터 대일시스템에서 제조하는 모든 제품에 대한",
    subtitle: "최종 사용자가 납품일로부터 5년 동안 정상적인 사용 상태에서 결함에 대한 보증 서비스를 제공합니다.",
    product: "5년 보증 서비스",
    category: "Warranty Policy",
    image: "/daeilsys-images/warranty-policy-bg.jpg",
    url: "/support/warranty-policy"
  },
  {
    id: "5",
    title: "언제,어디서, 누구나 쉽게 사용할 수 있는",
    subtitle: "나노미터 해상도 현미경을 위한 탁상형 액티브 제진 플랫폼",
    product: "DVIA-T",
    category: "Tabletop Active Vibration Isolation Platform",
    image: "/daeilsys-images/dvia-t-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "6",
    title: "초정밀 전자현미경을 위한",
    subtitle: "전자현미경용 액티브 제진 시스템",
    product: "DVIA-MB",
    category: "Active Vibration Isolation System for Electron Microscopy",
    image: "/daeilsys-images/dvia-mb-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "7",
    title: "고해상도 웨이퍼 검사 장비를 위한",
    subtitle: "반도체/웨이퍼 계측 도구용 공압식 액티브 제진 시스템",
    product: "DVIA-P",
    category: "Active Pneumatic Vibration Isolation System",
    image: "/daeilsys-images/dvia-p-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "8",
    title: "1993년부터 제조한",
    subtitle: "우수한 광학 테이블",
    product: "DVIO Series",
    category: "Premium Optical Tables",
    image: "/daeilsys-images/dvio-series-official.jpg",
    url: "/products/optical-tables"
  }
];

export const heroSlidesEn = [
  {
    id: "1",
    title: "Designed to make a difference.",
    subtitle: "Clear SEM imaging without vibration.",
    product: "DVIA-ULF Series",
    category: "Active Vibration Isolation System",
    image: "/daeilsys-images/dvia-ulf-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "2",
    title: "Unmatched performance that",
    subtitle: "outperforms any existing system's active vibration isolation platform",
    product: "DVIA-ML Series",
    category: "The world's most advanced active vibration isolation systems for electron microscopes",
    image: "/daeilsys-images/dvia-ml-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "3",
    title: "Introducing new active vibration isolation system that",
    subtitle: "sets a new standard for vibration isolation systems.",
    product: "DVIA-MLP1000",
    category: "Advanced Active Vibration Isolation System",
    image: "/daeilsys-images/dvia-mlp1000-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "4",
    title: "Starting from 2024, DAEIL SYSTEMS provides",
    subtitle: "a 5-year warranty service for all products manufactured by DAEIL SYSTEMS from the delivery date under normal use conditions.",
    product: "5-Year Warranty Service",
    category: "Warranty Policy",
    image: "/daeilsys-images/warranty-policy-bg.jpg",
    url: "/support/warranty-policy"
  },
  {
    id: "5",
    title: "Tabletop Active Vibration Isolation Platform",
    subtitle: "for Nanometer Resolution Microscopes",
    product: "DVIA-T",
    category: "Tabletop Active Vibration Isolation Platform",
    image: "/daeilsys-images/dvia-t-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "6",
    title: "Active vibration isolation system",
    subtitle: "for ultra-precision electron microscopy",
    product: "DVIA-MB",
    category: "Active Vibration Isolation System for Electron Microscopy",
    image: "/daeilsys-images/dvia-mb-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "7",
    title: "Active pneumatic vibration isolation system",
    subtitle: "for Semiconductor / Wafer Metrology Tools",
    product: "DVIA-P",
    category: "Active Pneumatic Vibration Isolation System",
    image: "/daeilsys-images/dvia-p-official.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "8",
    title: "Superior Optical Tables",
    subtitle: "Manufactured Since 1993",
    product: "DVIO Series",
    category: "Premium Optical Tables",
    image: "/daeilsys-images/dvio-series-official.jpg",
    url: "/products/optical-tables"
  }
];

export const companyInfo = {
  name: "대일시스템",
  ceo: "김광산",
  address: "경기 용인시 처인구 원삼면 맹리로 40",
  businessNumber: "117-81-15867",
  phone: "031-339-3375",
  email: "sales@daeilsys.com",
  founded: "1984년",
  description: "DAEIL SYSTEMS is about people who think differently, people who want to use vibration isolation systems to help them change the world, to help them create things that make a difference and push the human race forward.",
  mission: "We design and manufacture vibration isolation systems for equipment with nanoscale measurements. With over 35 years of experience in vibration control system manufacturing, we guarantee to provide the most excellent performance vibration control systems."
};

// English versions
export const companyInfoEn = {
  name: "DAEIL SYSTEMS",
  ceo: "Kwangsan Kim",
  address: "40 Maengni-ro, Wonsam-myeon, Cheoin-gu, Yongin-si, Gyeonggi-do",
  businessNumber: "117-81-15867",
  phone: "+82-031-339-3375",
  email: "internationalsales@daeilsys.com",
  founded: "1984",
  description: "DAEIL SYSTEMS is about people who think differently, people who want to use vibration isolation systems to help them change the world, to help them create things that make a difference and push the human race forward.",
  mission: "We design and manufacture vibration isolation systems for equipment with nanoscale measurements. With over 35 years of experience in vibration control system manufacturing, we guarantee to provide the most excellent performance vibration control systems."
};

// Footer 정보
export const footerInfo = {
  companyName: "DAEIL SYSTEMS",
  companyNameKo: "대일시스템",
  ceo: "Kwangsan Kim",
  ceoKo: "김광산",
  address: "40 Maengni-ro, Wonsam-myeon, Cheoin-gu, Yongin-si, Gyeonggi-do",
  addressKo: "경기 용인시 처인구 원삼면 맹리로 40",
  businessNumber: "117-81-15867",
  phone: "+82-031-339-3375",
  email: "internationalsales@daeilsys.com",
  socialLinks: {
    facebook: "https://www.facebook.com/daeilsys",
    linkedin: "https://www.linkedin.com/company/daeil-systems",
    youtube: "https://www.youtube.com/daeilsys",
    instagram: "https://www.instagram.com/daeilsys"
  },
  legalLinks: {
    termsOfUse: "/terms-of-use",
    privacyPolicy: "/privacy-policy",
    warrantyPolicy: "/warranty-policy"
  },
  copyright: "Copyright © 2025 DAEIL SYSTEMS CO., LTD. All rights reserved.",
  copyrightKo: "Copyright © 2025 대일시스템 주식회사. All rights reserved."
};

export const newsItemsEn: NewsItem[] = [
  {
    id: "1",
    title: "Beyond Business: Driving Positive Change in the Community",
    excerpt: "Where does an individual's purpose originate from? From the very beginning, can the phrase \"a...",
    date: "20/08/2025",
    image: "/daeilsys-images/news-1.jpg",
    url: "https://www.daeilsys.com/newsroom/beyond-business-driving-positive-change-in-the-community/"
  },
  {
    id: "2",
    title: "Why are we anxious? Concerning the existence of DAEIL SYSTEMS in anxiety.",
    excerpt: "What comes to mind when you hear the word vibration? By definition, vibration refers to...",
    date: "20/08/2025",
    image: "/daeilsys-images/news-2.jpg",
    url: "https://www.daeilsys.com/newsroom/concerning-the-existence-of-daeil-systems-in-anxiety/"
  },
  {
    id: "3",
    title: "DAEIL SYSTEMS' Precision Control Unlocks Stability in the Nanoworld",
    excerpt: "Nanotechnology, a key driver of future industries, is revolutionizing fields from materials science and electronics...",
    date: "14/05/2025",
    image: "/daeilsys-images/news-3.png",
    url: "https://www.daeilsys.com/newsroom/daeil-systems-precision-control-unlocks-stability-in-the-nanoworld/"
  },
  {
    id: "4",
    title: "Silent Threat: Why Are Precision Laboratories So Sensitive to Vibration?",
    excerpt: "A precision laboratory, where leading-edge research is conducted, is a space dedicated to exploring the...",
    date: "14/05/2025",
    image: "/daeilsys-images/news-4.png",
    url: "https://www.daeilsys.com/newsroom/silent-threat-why-are-precision-laboratories-so-sensitive-to-vibration/"
  },
  {
    id: "5",
    title: "The Unsung Hero of Research Lab Environments: The Vital Role of Vibration Isolation",
    excerpt: "In research environments, where precision experiments and accurate measurements are crucial, even the smallest unintended...",
    date: "14/05/2025",
    image: "/daeilsys-images/news-5.png",
    url: "https://www.daeilsys.com/newsroom/the-unsung-hero-of-research-lab-environments-the-vital-role-of-vibration-isolation/"
  }
];

export const caseStudiesEn: CaseStudy[] = [
  {
    id: "1",
    title: "Thermo Fisher Scientific Scios 2 DualBeam – FIB SEM DVIA-MB1000 Installation Report",
    description: "Thermo Fisher Scientific Scios 2 DualBeam - FIB SEM DVIA-MB1000 Installation Customer: SILA",
    date: "11/06/2024",
    image: "/daeilsys-images/case-study-3.jpg",
    url: "https://www.daeilsys.com/support/case-studies/thermo-fisher-installation-mb1000-tfs-scios-2-tamlin-matthews/",
    tags: ["DVIA-M Series", "Installation Reports"]
  },
  {
    id: "2",
    title: "Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Report",
    description: "Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Customer: NOVARTIS",
    date: "11/06/2024",
    image: "/daeilsys-images/case-study-1.jpg",
    url: "https://www.daeilsys.com/support/case-studies/novartis-daeil-installation-2nd-report/",
    tags: ["DVIA-M Series", "Installation Reports"]
  },
  {
    id: "3",
    title: "Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Report",
    description: "",
    date: "11/06/2024",
    image: "/daeilsys-images/case-study-2.jpg",
    url: "https://www.daeilsys.com/support/case-studies/thermo-fisher-installation-mb3000-tfs-glacios-2-joel-mancuso/",
    tags: ["DVIA-M Series", "Installation Reports"]
  }
];

export const productsEn: Product[] = [
  {
    id: "1",
    name: "Active Vibration Isolation Systems",
    nameKo: "액티브 제진대",
    description: "DVIA Series: DVIA-T, DVIA-M, DVIA-ML, DVIA-MB, DVIA-P, DVIA-U, DVIA-ULF and more - Advanced active vibration isolation systems providing the ultimate vibration control solution for high-precision equipment including electron microscopes, semiconductor metrology, and optical metrology.",
    descriptionEn: "DVIA Series: DVIA-T, DVIA-M, DVIA-ML, DVIA-MB, DVIA-P, DVIA-U, DVIA-ULF and more - Advanced active vibration isolation systems providing the ultimate vibration control solution for high-precision equipment including electron microscopes, semiconductor metrology, and optical metrology.",
    image: "/daeilsys-images/product-active-vibration.jpg",
    url: "/products/active-vibration-systems"
  },
  {
    id: "2",
    name: "Optical Tables",
    nameKo: "광학테이블",
    description: "DVIO Series: Since 1993, Korea's first premium optical tables combining lightweight but incredibly rigid steel honeycomb structure with uniquely designed pneumatic vibration isolators for research, scientific, and non-magnetic applications.",
    descriptionEn: "DVIO Series: Since 1993, Korea's first premium optical tables combining lightweight but incredibly rigid steel honeycomb structure with uniquely designed pneumatic vibration isolators for research, scientific, and non-magnetic applications.",
    image: "/daeilsys-images/product-optical-tables.jpg",
    url: "/products/optical-tables"
  },
  {
    id: "3",
    name: "Vibration Isolation Workstations",
    nameKo: "진동 제어 워크스테이션",
    description: "DVID-L, DVID-C Series: Vibration isolation workstations providing stable workspace in laboratory environments with various accessories and support equipment for customized solutions.",
    descriptionEn: "DVID-L, DVID-C Series: Vibration isolation workstations providing stable workspace in laboratory environments with various accessories and support equipment for customized solutions.",
    image: "/daeilsys-images/product-workstation.jpg",
    url: "/products/vibration-isolation-workstations"
  },
  {
    id: "4",
    name: "Low-Profile Pneumatic Vibration Isolation Platform",
    nameKo: "저상형 공압 진동 제어 플랫폼",
    description: "DVIP-C, DVIP-B Series: Low-profile pneumatic vibration isolation platforms maximizing space efficiency while providing excellent vibration control performance.",
    descriptionEn: "DVIP-C, DVIP-B Series: Low-profile pneumatic vibration isolation platforms maximizing space efficiency while providing excellent vibration control performance.",
    image: "/daeilsys-images/product-low-profile.jpg",
    url: "/products/low-profile-pneumatic-platforms"
  },
  {
    id: "5",
    name: "Pneumatic Vibration Isolators",
    nameKo: "공압식 진동 아이솔레이터",
    description: "DVIM-G, DVIM-M Series: Pneumatic vibration isolators providing vibration control solutions for various loads and applications.",
    descriptionEn: "DVIM-G, DVIM-M Series: Pneumatic vibration isolators providing vibration control solutions for various loads and applications.",
    image: "/daeilsys-images/product-pneumatic.jpg",
    url: "/products/pneumatic-vibration-isolators"
  },
  {
    id: "6",
    name: "Foundation Vibration Isolation System",
    nameKo: "독립기초 진동 제어 시스템",
    description: "DVIF Series: Foundation vibration isolation systems providing independent vibration control environment separated from building structures.",
    descriptionEn: "DVIF Series: Foundation vibration isolation systems providing independent vibration control environment separated from building structures.",
    image: "/daeilsys-images/product-foundation.jpg",
    url: "/products/foundation-vibration-systems"
  },
  {
    id: "7",
    name: "Acoustic Enclosures",
    nameKo: "음향 인클로저",
    description: "DAE, DSE Series: Acoustic enclosures providing both noise isolation and vibration control for optimal experimental environments.",
    descriptionEn: "DAE, DSE Series: Acoustic enclosures providing both noise isolation and vibration control for optimal experimental environments.",
    image: "/daeilsys-images/product-acoustic.jpg",
    url: "/products/acoustic-enclosures"
  }
];

export const solutionsEn: Solution[] = [
  {
    id: "1",
    title: "Semiconductor Metrology",
    titleKo: "반도체 계측",
    description: "The DVIA-P Series ensures accurate nanoscale measurements, fast settling time, and superior vibration isolation performance for semiconductor metrology equipment",
    descriptionKo: "DVIA-P 시리즈는 반도체 계측 장비를 위한 정확한 나노스케일 측정, 빠른 안정화 시간, 우수한 진동 절연 성능을 보장합니다",
    image: "/daeilsys-images/solution-semiconductor.jpg",
    url: "/solutions/semiconductor-metrology",
    productSeries: "DVIA-P Series",
    keyFeatures: [
      "Accurate nanoscale measurements",
      "Fast settling time",
      "Superior vibration isolation performance"
    ],
    keyFeaturesKo: [
      "정확한 나노스케일 측정",
      "빠른 안정화 시간",
      "우수한 진동 절연 성능"
    ]
  },
  {
    id: "2",
    title: "Electron Microscopy",
    titleKo: "전자현미경",
    description: "The DVIA-MB Series, the most advanced active vibration isolation system, maximizes the performance of electron microscopes without any disturbances.",
    descriptionKo: "DVIA-MB 시리즈는 가장 고급스러운 액티브 진동 절연 시스템으로, 전자현미경의 성능을 어떤 방해 없이 최대화합니다.",
    image: "/daeilsys-images/solution-electron-microscopy.jpg",
    url: "/solutions/electron-microscopy",
    productSeries: "DVIA-MB Series",
    keyFeatures: [
      "Most advanced active vibration isolation",
      "Maximizes electron microscope performance",
      "No disturbances"
    ],
    keyFeaturesKo: [
      "가장 고급스러운 액티브 진동 절연",
      "전자현미경 성능 최대화",
      "방해 요소 없음"
    ]
  },
  {
    id: "3",
    title: "Microscopy",
    titleKo: "현미경",
    description: "The DVIA-T Series, a tabletop active vibration isolation platform provides a complete vibration-controlled environment for microscopes with nanoscale resolutions.",
    descriptionKo: "DVIA-T 시리즈는 탁상형 액티브 진동 절연 플랫폼으로, 나노스케일 해상도의 현미경을 위한 완전한 진동 제어 환경을 제공합니다.",
    image: "/daeilsys-images/solution-microscopy.jpg",
    url: "/solutions/microscopy",
    productSeries: "DVIA-T Series",
    keyFeatures: [
      "Tabletop active vibration isolation platform",
      "Complete vibration-controlled environment",
      "Nanoscale resolution support"
    ],
    keyFeaturesKo: [
      "탁상형 액티브 진동 절연 플랫폼",
      "완전한 진동 제어 환경",
      "나노스케일 해상도 지원"
    ]
  },
  {
    id: "4",
    title: "Photonics & Laser",
    titleKo: "포토닉스 & 레이저",
    description: "The DVIO Series, the lightweight but incredibly rigid steel honeycomb optical table is combined with uniquely designed pneumatic vibration isolators, reduces floor vibrations, and minimizes relative motions on the optical table top.",
    descriptionKo: "DVIO 시리즈는 가볍지만 놀랍도록 견고한 스틸 허니컴 광학테이블과 독특하게 설계된 공압 진동 절연기를 결합하여 바닥 진동을 줄이고 광학테이블 상단의 상대적 움직임을 최소화합니다.",
    image: "/daeilsys-images/solution-photonics.jpg",
    url: "/solutions/photonics-laser",
    productSeries: "DVIO Series",
    keyFeatures: [
      "Lightweight but incredibly rigid steel honeycomb",
      "Uniquely designed pneumatic vibration isolators",
      "Reduces floor vibrations"
    ],
    keyFeaturesKo: [
      "가볍지만 놀랍도록 견고한 스틸 허니컴",
      "독특하게 설계된 공압 진동 절연기",
      "바닥 진동 감소"
    ]
  },
  {
    id: "5",
    title: "Flat Panel Display Metrology",
    titleKo: "플랫 패널 디스플레이 계측",
    description: "The DVIM Series, pneumatic vibration isolators with oil-damper options are designed to support the flat panel display metrology equipment with motorized linear stages, providing fast settling time of the equipment and reducing floor vibrations.",
    descriptionKo: "DVIM 시리즈는 오일 댐퍼 옵션이 있는 공압 진동 절연기로, 모터화된 선형 스테이지가 있는 플랫 패널 디스플레이 계측 장비를 지원하도록 설계되어 장비의 빠른 안정화 시간을 제공하고 바닥 진동을 줄입니다.",
    image: "/daeilsys-images/solution-display.jpg",
    url: "/solutions/flat-panel-display-metrology",
    productSeries: "DVIM Series",
    keyFeatures: [
      "Pneumatic vibration isolators with oil-damper options",
      "Support for motorized linear stages",
      "Fast settling time"
    ],
    keyFeaturesKo: [
      "오일 댐퍼 옵션이 있는 공압 진동 절연기",
      "모터화된 선형 스테이지 지원",
      "빠른 안정화 시간"
    ]
  },
  {
    id: "6",
    title: "X-Ray Metrology",
    titleKo: "엑스레이 계측",
    description: "The DVIA-MB Series is designed to isolate X-Ray metrology equipment from low-frequency floor vibrations.",
    descriptionKo: "DVIA-MB 시리즈는 X-Ray 계측 장비를 저주파 바닥 진동으로부터 격리하도록 설계되었습니다.",
    image: "/daeilsys-images/solution-xray.jpg",
    url: "/solutions/x-ray-metrology",
    productSeries: "DVIA-MB Series",
    keyFeatures: [
      "Isolates X-Ray metrology equipment",
      "Protects from low-frequency floor vibrations",
      "High precision measurement support"
    ],
    keyFeaturesKo: [
      "X-Ray 계측 장비 격리",
      "저주파 바닥 진동으로부터 보호",
      "고정밀 측정 지원"
    ]
  },
  {
    id: "7",
    title: "NMR Spectroscopy",
    titleKo: "NMR 분광법",
    description: "The DVIA-M Series with magnetic field resistant stainless steel design offers a vibration-controlled environment for NMR spectroscopy.",
    descriptionKo: "자기장 저항 스테인리스 스틸 설계의 DVIA-M 시리즈는 NMR 분광법을 위한 진동 제어 환경을 제공합니다.",
    image: "/daeilsys-images/solution-nmr.jpg",
    url: "/solutions/nmr-spectroscopy",
    productSeries: "DVIA-M Series",
    keyFeatures: [
      "Magnetic field resistant stainless steel design",
      "Vibration-controlled environment",
      "NMR spectroscopy optimization"
    ],
    keyFeaturesKo: [
      "자기장 저항 스테인리스 스틸 설계",
      "진동 제어 환경",
      "NMR 분광법 최적화"
    ]
  }
];

export const valuesEn: Value[] = [
  {
    id: "1",
    title: "Customer orientation",
    description: "We are determined to support customers to meet long-term needs. We align individuals and team objectives around satisfying and retaining customers.",
    icon: "🎯"
  },
  {
    id: "2",
    title: "Partnership",
    description: "We believe in the power of partnership with our partners to achieve our common goals.",
    icon: "🤝"
  },
  {
    id: "3",
    title: "Passion for perfection",
    description: "We constantly focus on delivering products without any defects to satisfy every customer.",
    icon: "⚡"
  }
];

export const updatesEn: UpdateItem[] = [
  {
    id: "1",
    title: "Watch our newly uploaded video on 'how to set up DVIA-T'",
    date: "January 15, 2025",
    url: "/support/how-to-set-up/dvia-t/"
  },
  {
    id: "2",
    title: "Check out the newly uploaded user manual to learn how to use the pneumatic support.",
    date: "December 09, 2024",
    url: "/support/user-manual/"
  },
  {
    id: "3",
    title: "Watch our newly uploaded video to learn 'how to set up on an optical table with a tie-bar support'",
    date: "November 18, 2024",
    url: "/support/how-to-set-up/optical-table-with-tie-bar-support/"
  }
];

// 웹사이트에서 추출한 추가 데이터들
export interface TradeShow {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  website?: string;
}

export interface CompanyVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration?: string;
}

export interface WarrantyInfo {
  id: string;
  title: string;
  description: string;
  duration: string;
  effectiveDate: string;
  coverage: string[];
  conditions: string[];
}

export const tradeShows: TradeShow[] = [
  {
    id: "1",
    name: "LASER World of PHOTONICS CHINA 2019",
    date: "2019년",
    location: "중국",
    description: "광학 및 레이저 기술 전시회",
    image: "/daeilsys-images/trade-show-1.jpg"
  },
  {
    id: "2",
    name: "Microscopy & Microanalysis 2019",
    date: "2019년",
    location: "미국",
    description: "현미경 및 미세분석 기술 전시회",
    image: "/daeilsys-images/trade-show-2.jpg"
  },
  {
    id: "3",
    name: "IMC 2019",
    date: "2019년",
    location: "한국",
    description: "국제 제조기술 전시회",
    image: "/daeilsys-images/trade-show-3.jpg"
  },
  {
    id: "4",
    name: "Laser World of Photonics 2018",
    date: "2018년",
    location: "독일",
    description: "광학 및 레이저 기술 전시회",
    image: "/daeilsys-images/trade-show-4.jpg"
  },
  {
    id: "5",
    name: "NANO KOREA 2017",
    date: "2017년",
    location: "한국",
    description: "나노 기술 전시회",
    image: "/daeilsys-images/trade-show-5.jpg"
  },
  {
    id: "6",
    name: "SEMICON TAIWAN 2017",
    date: "2017년",
    location: "대만",
    description: "반도체 제조 기술 전시회",
    image: "/daeilsys-images/trade-show-6.jpg"
  }
];

export const companyVideos: CompanyVideo[] = [
  {
    id: "1",
    title: "DAEIL SYSTEMS Company Introduction",
    description: "Learn about DAEIL SYSTEMS, a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems.",
    videoUrl: "https://www.youtube-nocookie.com/embed/A0H4Sd7i4lk?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0",
    thumbnail: "/daeilsys-images/company-video-thumbnail.jpg",
    duration: "3:45"
  }
];

export const warrantyInfo: WarrantyInfo = {
  id: "1",
  title: "5년 보증 정책",
  description: "2024년부터 대일시스템에서 제조하는 모든 제품에 대한 최종 사용자가 납품일로부터 5년 동안 정상적인 사용 상태에서 결함에 대한 보증 서비스를 제공합니다.",
  duration: "5년",
  effectiveDate: "2024년 1월 1일",
  coverage: [
    "재료 및 제작상의 결함",
    "정상적인 사용 상태에서의 결함",
    "제조사 책임 범위 내의 결함"
  ],
  conditions: [
    "원본 포장 상태의 제품",
    "정상적인 사용 조건",
    "납품일로부터 5년 이내"
  ]
};

// 최신 업데이트 (웹사이트에서 추출)
export const latestUpdates = [
  {
    id: "1",
    title: "DVIA-T 설치 방법 영상이 업로드 되었습니다.",
    date: "2025년 1월 15일",
    description: "DVIA-T 탁상형 액티브 제진대 설치 방법에 대한 상세한 영상 가이드가 업로드되었습니다."
  },
  {
    id: "2",
    title: "공압식 서포트 사용 설명서가 업로드 되었습니다.",
    date: "2024년 12월 09일",
    description: "공압식 서포트 사용법에 대한 상세한 설명서가 업로드되었습니다."
  },
  {
    id: "3",
    title: "광학테이블 – 공압식 타이바 서포트 타입 설치 방법 영상이 업로드 되었습니다.",
    date: "2024년 11월 18일",
    description: "광학테이블과 공압식 타이바 서포트를 함께 설치하는 방법에 대한 영상 가이드가 업로드되었습니다."
  }
];

// 웹사이트의 주요 제품 하이라이트 (메인 페이지에서 추출)
export const featuredProducts = [
  {
    id: "1",
    name: "DVIA-T",
    nameKo: "DVIA-T",
    title: "Tabletop Active Vibration Isolation Platform",
    titleKo: "탁상형 액티브 제진대",
    subtitle: "for Nanometer Resolution Microscopes",
    subtitleKo: "나노미터 해상도 현미경용",
    description: "언제,어디서, 누구나 쉽게 사용할 수 있는 탁상형 액티브 제진대",
    descriptionEn: "Tabletop Active Vibration Isolation Platform for Nanometer Resolution Microscopes",
    image: "/daeilsys-images/dvia-t-featured.jpg",
    url: "/products/active-vibration-systems/dvia-t"
  },
  {
    id: "2",
    name: "DVIA-MB",
    nameKo: "DVIA-MB",
    title: "Active Vibration Isolation System",
    titleKo: "액티브 제진대",
    subtitle: "for Electron Microscopy",
    subtitleKo: "전자현미경용",
    description: "초정밀 전자현미경을 위한 액티브 제진대",
    descriptionEn: "Active Vibration Isolation System for Electron Microscopy",
    image: "/daeilsys-images/dvia-mb-featured.jpg",
    url: "/products/active-vibration-systems/dvia-mb"
  },
  {
    id: "3",
    name: "DVIA-P",
    nameKo: "DVIA-P",
    title: "Active Pneumatic Vibration Isolation System",
    titleKo: "공압식 액티브 제진대",
    subtitle: "for Semiconductor / Wafer Metrology Tools",
    subtitleKo: "반도체/웨이퍼 계측 장비용",
    description: "고해상도 웨이퍼 검사 장비를 위한 공압식 액티브 제진대",
    descriptionEn: "Active Pneumatic Vibration Isolation System for Semiconductor / Wafer Metrology Tools",
    image: "/daeilsys-images/dvia-p-featured.jpg",
    url: "/products/active-vibration-systems/dvia-p"
  },
  {
    id: "4",
    name: "DVIO Series",
    nameKo: "DVIO 시리즈",
    title: "Superior Optical Tables",
    titleKo: "고급 광학테이블",
    subtitle: "Manufactured Since 1993",
    subtitleKo: "1993년부터 제조",
    description: "Since 1993년부터 제조한 국내 최초의 프리미엄 광학테이블",
    descriptionEn: "Superior Optical Tables Manufactured Since 1993",
    image: "/daeilsys-images/dvio-featured.jpg",
    url: "/products/optical-tables"
  }
];

// 웹사이트의 최신 업데이트 섹션
export const latestUpdatesSection = {
  title: "Latest Updates",
  titleKo: "최신 업데이트",
  items: [
    {
      id: "1",
      title: "Watch our newly uploaded video on 'how to set up DVIA-T'",
      titleKo: "DVIA-T 설정 방법에 대한 새로 업로드된 비디오를 시청하세요",
      date: "January 15, 2025",
      dateKo: "2025년 1월 15일",
      url: "/support/how-to-set-up/dvia-t-setup-video"
    },
    {
      id: "2",
      title: "Check out the newly uploaded user manual to learn how to use the pneumatic support",
      titleKo: "공압 지지대 사용법을 배우기 위해 새로 업로드된 사용자 매뉴얼을 확인하세요",
      date: "December 09, 2024",
      dateKo: "2024년 12월 09일",
      url: "/support/user-manual/pneumatic-support"
    },
    {
      id: "3",
      title: "Watch our newly uploaded video to learn 'how to set up on an optical table with a tie-bar support'",
      titleKo: "타이바 지지대가 있는 광학테이블에 설정하는 방법을 배우기 위해 새로 업로드된 비디오를 시청하세요",
      date: "November 18, 2024",
      dateKo: "2024년 11월 18일",
      url: "/support/how-to-set-up/optical-table-with-tie-bar-support"
    }
  ]
};
