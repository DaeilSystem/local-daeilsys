export interface BilingualText {
  ko: string;
  en: string;
}

export interface CompanySection {
  id: string;
  title: BilingualText;
  slug: string;
  description: BilingualText;
  content: BilingualText;
  icon?: string;
  image?: string;
  video_url?: string;
  timeline?: TimelineEvent[];
}

export interface TimelineEvent {
  year: string;
  event: BilingualText;
  image?: string;
}

export interface CompanyInfo {
  industry: BilingualText;
  products: BilingualText[];
  yearEstablished: string;
  location: BilingualText;
  employees: BilingualText;
  organizationType: BilingualText;
  keyExecutives: BilingualText[];
}

export interface Value {
  id: string;
  title: BilingualText;
  description: BilingualText;
}

export interface TradeShow {
  year: string;
  name: string;
  images: string[];
}

export interface NewsArticle {
  id: string;
  category: {
    ko: string;
    en: string;
  };
  title: BilingualText;
  date: string;
  href: string;
}

// 회사 기본 정보
export const companyInfo: CompanyInfo = {
  industry: {
    ko: "제조업",
    en: "Manufacturing"
  },
  products: [
    { ko: "액티브 제진대", en: "Active Vibration Isolation System" },
    { ko: "패시브 제진대", en: "Passive Vibration Isolation System" },
    { ko: "광학테이블", en: "Optical Tables" },
    { ko: "음향챔버", en: "Acoustic Enclosures" }
  ],
  yearEstablished: "1984",
  location: {
    ko: "대한민국 경기도 용인시 처인구 원삼면 맹리로 40",
    en: "40 Maengni-ro, Wonsam-myeon, Cheoin-gu, Yongin-si, Gyeonggi-do"
  },
  employees: {
    ko: "50명",
    en: "50"
  },
  organizationType: {
    ko: "주식회사",
    en: "Private"
  },
  keyExecutives: [
    { ko: "CEO 김광산", en: "CEO Kwangsan Kim" },
    { ko: "COO 김성국", en: "COO Sungkuk Kim" }
  ]
};

// 가치관 데이터
export const companyValues: Value[] = [
  {
    id: "vision-innovation",
    title: {
      ko: "비전과 혁신",
      en: "Vision and Innovation"
    },
    description: {
      ko: "세상에 필요한 제품을 선보임으로써 회사를 성장시키는 혁신과 비전을 따른다.",
      en: "We follow a vision and innovation by making products that make the world a better place."
    }
  },
  {
    id: "technology",
    title: {
      ko: "기술",
      en: "Technology"
    },
    description: {
      ko: "우리는 우리가 만드는 제품의 기초가 되는 기술을 소유하고 지배해야 한다.",
      en: "We must own and control technology which is a fundamental of products."
    }
  },
  {
    id: "quality",
    title: {
      ko: "품질",
      en: "Quality"
    },
    description: {
      ko: "우리는 고객의 신뢰와 충성을 얻기 위해 수준 높은 품질과 우리의 가치가 담긴 제품을 제공해야 한다.",
      en: "We need to provide products that are high quality and align with our core values."
    }
  },
  {
    id: "customer-interaction",
    title: {
      ko: "고객과의 공감",
      en: "Interaction with Customer"
    },
    description: {
      ko: "고객의 관점, 즉 고객의 실질적인 요구와 필요성을 충족하고 지속적인 가치를 전하는 제품을 개발하고 개선한다.",
      en: "Based on customers' perspective we develop and improve products that satisfy customers' practical needs and requirements."
    }
  },
  {
    id: "profit-sharing",
    title: {
      ko: "개인별 보상",
      en: "Sharing Profit with Individuals"
    },
    description: {
      ko: "우리는 성공에 대한 개인의 기여도를 인정하고 높은 실적으로부터 발생하는 금전적 이익을 분배하다.",
      en: "We acknowledge individuals' contribution to our achievement and share profits."
    }
  },
  {
    id: "freedom",
    title: {
      ko: "자유성",
      en: "Freedom"
    },
    description: {
      ko: "대일시스템 직원 누구나 직급, 나이에 상관없이 자유롭게 의견을 제안할 수 있다.",
      en: "Regardless of age and title, everyone has a right to speak freely and propose ideas."
    }
  },
  {
    id: "partnership",
    title: {
      ko: "파트너쉽",
      en: "Partnership"
    },
    description: {
      ko: "우리는 파트너와 상생협력을 통해 대일시스템 제품을 해외에서 판매하는데 적극적으로 지원을 해야 한다.",
      en: "We value a partnership and support our partners to actively sell products worldwide."
    }
  },
  {
    id: "innovative-leadership",
    title: {
      ko: "혁신적인 리더십",
      en: "Innovative Leadership"
    },
    description: {
      ko: "경영진은 대일시스템의 가치가 번창할 수 있는 혁신적이고 생산적인 일을 할 수 있는 환경과 조직문화를 조성할 책임이 있다. 환경을 조성하는 일은 리더로서 해야 할 가장 중요한 역할 중 하나다.",
      en: "Executives must create a workplace and a company culture where employees can innovatively and productively work. Creating an innovative work environment is the most important job as a leader."
    }
  }
];

// 회사 연혁 데이터
export const companyTimeline: TimelineEvent[] = [
  {
    year: "1984",
    event: {
      ko: "대일기공 설립",
      en: "DAEIL Machinery was founded"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1984-DAEIL-Machinery-was-founded.jpg"
  },
  {
    year: "1988",
    event: {
      ko: "대일시스템으로 상호 변경",
      en: "Changed to DAEIL SYSTEMS"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1988-Changed-to-DAEIL-SYSTEMS.png"
  },
  {
    year: "1989",
    event: {
      ko: "국내최초 제진대 국산화 개발 및 생산 완료",
      en: "Introduced first vibration isolation table in Korea"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1989-Introduced-first-vibration-isolation-table-in-Korea.png"
  },
  {
    year: "1993",
    event: {
      ko: "국내최초 광학테이블 개발 완료",
      en: "Introduced first optical table in Korea"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1993-Introduced-first-optical-table-in-Korea.png"
  },
  {
    year: "1997",
    event: {
      ko: "ISO 9002 품질시스템 인증획득",
      en: "Obtained ISO 9002"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1997-Obtained-ISO-9002.jpg"
  },
  {
    year: "2000",
    event: {
      ko: "용인에 공장 및 본사 신축 이전",
      en: "Built new HQ and 1st factory"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2000-Built-new-HQ-and-1st-factory.jpg"
  },
  {
    year: "2001",
    event: {
      ko: "부설연구소 설립",
      en: "Established R&D"
    }
  },
  {
    year: "2007",
    event: {
      ko: "액티브 제진대 개발 완료",
      en: "Introduced Active Vibration Isolation System"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2007-Introduced-Active-Vibration-Isolation-System.png"
  },
  {
    year: "2009",
    event: {
      ko: "청도대일시스템 설립",
      en: "Qingdao DAEIL SYSTEMS CO.,LTD was founded"
    }
  },
  {
    year: "2016",
    event: {
      ko: "제2공장 증축 완료",
      en: "Built 2nd factory"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2016-Built-2nd-factory-DAEIL-SYSTEMS.png"
  },
  {
    year: "2024",
    event: {
      ko: "대일시스템 창립 40주년",
      en: "Celebrating the 40th Anniversary of DAEIL SYSTEMS"
    },
    image: "https://www.daeilsys.com/wp-content/uploads/2024/03/daeil-systems-celebrates-40-years-flag-min.png"
  }
];

// 전시회 데이터
export const tradeShows: TradeShow[] = [
  {
    year: "2019",
    name: "LASER World of PHOTONICS CHINA 2019",
    images: [
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-06.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-02.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-03.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-04.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-05.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Laser-World-of-Photonics-2019-01.jpg"
    ]
  },
  {
    year: "2019",
    name: "Microscopy & Microanalysis 2019",
    images: [
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-01.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-02.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-03.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-04.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-05.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/Microscopy-and-Microanalysis-2019-06.jpg"
    ]
  },
  {
    year: "2019",
    name: "IMC 2019",
    images: [
      "https://www.daeilsys.com/wp-content/uploads/2020/06/IMC-2019-02.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/IMC-2019-03.jpg",
      "https://www.daeilsys.com/wp-content/uploads/2020/06/IMC-2019-04.jpg"
    ]
  }
];

// 뉴스 데이터
export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    category: { ko: "기념일", en: "ANNIVERSARY" },
    title: {
      ko: "대일시스템 창립 40주년을 맞이했습니다",
      en: "DAEIL SYSTEMS celebrates its 40th anniversary"
    },
    date: "2024-03-15",
    href: "/newsroom/40th-anniversary"
  },
  {
    id: "2",
    category: { ko: "전시회", en: "TRADE SHOW" },
    title: {
      ko: "LASER World of PHOTONICS 2024 전시회 참가",
      en: "Participation in LASER World of PHOTONICS 2024"
    },
    date: "2024-06-20",
    href: "/newsroom/laser-world-2024"
  },
  {
    id: "3",
    category: { ko: "제품 소식", en: "PRODUCT NEWS" },
    title: {
      ko: "신제품 DVIA-MLP 액티브 제진대 출시",
      en: "New DVIA-MLP Active Vibration Isolation System launched"
    },
    date: "2024-01-10",
    href: "/newsroom/dvia-mlp-launch"
  },
  {
    id: "4",
    category: { ko: "기업 소식", en: "COMPANY NEWS" },
    title: {
      ko: "반도체 장비 분야 주요 고객사와 대규모 공급 계약 체결",
      en: "Major supply agreement signed with key semiconductor equipment customer"
    },
    date: "2023-11-15",
    href: "/newsroom/semiconductor-partnership"
  },
  {
    id: "5",
    category: { ko: "기술", en: "TECHNOLOGY" },
    title: {
      ko: "나노스케일 이미징을 위한 차세대 제진 기술 개발",
      en: "Next-generation vibration isolation technology for nanoscale imaging"
    },
    date: "2023-09-20",
    href: "/newsroom/next-gen-technology"
  },
  {
    id: "6",
    category: { ko: "수상", en: "AWARD" },
    title: {
      ko: "대일시스템, 기술혁신 우수기업 인증 획득",
      en: "DAEIL SYSTEMS receives Technology Innovation Excellence certification"
    },
    date: "2023-07-10",
    href: "/newsroom/tech-innovation-award"
  }
];

// 회사 섹션 데이터
export const companySections: CompanySection[] = [
  {
    id: 'overview',
    title: {
      ko: '사업개요',
      en: 'Overview'
    },
    slug: 'overview',
    description: {
      ko: '제진대 전문 제조 기업 대일시스템을 소개합니다',
      en: 'Learn about DAEIL SYSTEMS, a specialized manufacturer of vibration isolation systems'
    },
    content: {
      ko: `대일시스템은 제진대 전문 제조 기업입니다. 제진대는 내·외 구조물에 영향을 주는 진동을 제어하여 안정상태에서 나노미터 크기의 구조와 물질이 외란 없이 고해상도로 이미징 할 수 있게 하는 시스템을 말합니다. 이 시스템은 신속한 정착시간이 있어야 하는 초정밀 반도체 측정 장비, 전자현미경, 광학 레이저 그리고 디스플레이 검사장비에 활용됩니다.

제진대를 생산하기 위해서는 고도의 기술력이 요구됩니다. 제품의 조립뿐 아니라, 개발, 설계, 가공 등의 수행력이 뒷받침돼야 비로소 고품질의 제품을 시장에 내놓을 수 있기 때문입니다.

1984년 설립된 대일시스템은 국내 미세진동 제어 시스템의 선구자로서 지난 40여 년간 쌓아올린 경험과 기술력으로 글로벌 시장을 이끌어 나가고 있습니다. 대일시스템은 나노기술 시대를 맞아 인류를 풍요롭게 하는 다양한 제품을 만드는 데 긍정적인 영향을 끼치고 있다고 자부하고 있습니다.

자부심은 자만감이 아니라 자신감에서 옵니다. 세상을 밝게 열겠다는 우리의 자신감은 탄탄한 기술력과 철저한 품질보장제도 그리고 안정감 있는 회사운영으로 빛을 더할 것입니다. 견고히 쌓아갈 내일을 위해 오늘도 한걸음 더 나아가는 우리는 대일시스템입니다.`,
      en: `DAEIL SYSTEMS is a specialized manufacturer of vibration isolation systems. These systems control vibrations affecting internal and external structures, allowing for stable imaging in high resolution without disturbance to nano-scale structures and materials. The vibration isolation systems are designed to isolate ultra-precision semiconductor metrology and display equipment, electron microscopes, photonics & laser from the low-frequency floor vibrations.

Producing these vibration isolation systems demands advanced technological expertise. It's not just about assembly, but also about the capabilities in development, design, and processing, which are essential to deliver high-quality products to the market. Even minor defects can render these systems unreliable.

Established in 1984, DAEIL SYSTEMS has emerged as a pioneer in micro-vibration control systems domestically, garnering recognition for the excellence of its products in the global market over the past 40 years, thanks to its accumulated experience and technological prowess. Positioned as a key player in the vibration isolation field, DAEIL SYSTEMS takes pride in positively impacting the creation of various products that enrich humanity in the era of nanotechnology.

Our pride stems not from arrogance but from confidence. Our confidence in illuminating the world comes from our solid technological capabilities, rigorous quality assurance systems, and stable company operations. DAEIL SYSTEMS, committed to playing a significant role in creating a better environment, asks for your continued support. We pledge to continue advancing diligently.`
    },
    icon: '📊',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/01-Overview.png'
  },
  {
    id: 'vision-mission',
    title: {
      ko: '비전 & 미션',
      en: 'Vision and Mission'
    },
    slug: 'vision-mission',
    description: {
      ko: '진동 제어 기술의 미래를 위한 비전과 미션을 알아보세요',
      en: 'Discover our vision and mission for the future of vibration control technology'
    },
    content: {
      ko: `**비전**

나노스케일 이미징으로 더 나은 세상을 향하여

대일시스템의 제진대는 더 나은 세상을 만드는 데 중요한 역할을 합니다. 제진대가 없다면 수십억 원에 달하는 초정밀 측정 장비들은 최상의 이미징 성능을 발휘할 수 없습니다. 나노스케일 이미징 장비는 반도체, 화학, 소재, 생명과학, 디스플레이 등 다양한 분야에서 필수적으로 사용됩니다. 만약 이 장비들이 진동으로 인해 이미징에 실패한다면, 우리가 사용하는 고성능 스마트폰, 태블릿 PC, 컴퓨터, 자동차, 그리고 AI 기술의 발전 속도는 지금보다 훨씬 뒤처졌을 것입니다.

대일시스템은 정밀과학의 초석이 되는 제진 기술로, 미래 산업의 혁신과 인류의 더 나은 삶을 함께 만들어갑니다.

**미션**

우리의 미션은 전 세계 학생, 과학자, 엔지니어 및 소비자들에게 최고의 제진대를 제공하여, 그들의 모든 활동에서 정밀성과 효율성을 향상시키는 것입니다.`,
      en: `**Vision**

DAEIL SYSTEMS announces a new vision of the company.

"We enable nanoscale imaging to make the world a better place."

DAEIL SYSTEMS' vibration isolation systems have been contributing to making the world a better place. Without our vibration isolation systems, nanoscale imaging metrology equipment won't be getting optimal measurements. These metrology equipment are used in semiconductor, analyzing materials, life science, display and photonics. If the nanoscale imaging equipment had been unable to obtain the desired measurements because of vibration, then we wouldn't have enjoyed using high-technology smart phones, tablet pcs, computers, cars and the benefits of AI. Furthermore, without our vibration isolation systems, developing the vaccine for COVID-19 would have been postponed.

**Mission**

Our mission is to deliver the best vibration isolation systems to students, scientists, engineers, and consumers around the world, enhancing precision and efficiency in every endeavor.`
    },
    icon: '🎯',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/02-Vision-and-Mission.png'
  },
  {
    id: 'values',
    title: {
      ko: '가치관',
      en: 'Values'
    },
    slug: 'values',
    description: {
      ko: '혁신과 성공을 이끄는 핵심 가치',
      en: 'The core values that drive our innovation and success'
    },
    content: {
      ko: `대일시스템에서 가치관은 우리가 하는 모든 일의 기초입니다. 이 8가지 핵심 원칙은 우리의 결정을 안내하고, 문화를 형성하며, 제진 산업에서의 성공을 이끕니다.`,
      en: `At DAEIL SYSTEMS, our values are the foundation of everything we do. These eight core principles guide our decisions, shape our culture, and drive our success in the vibration isolation industry.`
    },
    icon: '💎',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/03-Values.png'
  },
  {
    id: 'company-history',
    title: {
      ko: '회사연혁',
      en: 'Company History'
    },
    slug: 'company-history',
    description: {
      ko: '진동 제어 기술 분야에서 40년간의 혁신과 리더십',
      en: 'Four decades of innovation and leadership in vibration control technology'
    },
    content: {
      ko: `대일시스템은 40년 이상 제진 기술의 최전선에서 산업을 형성하고 나노기술과 정밀 제조 분야의 획기적인 발견을 가능하게 하는 혁신을 선도해 왔습니다.

1984년 진동 제어 기술을 혁신하겠다는 비전으로 시작된 우리의 여정은 오늘날 나노스케일 이미징과 정밀 제조를 가능하게 하는 최첨단 솔루션으로 전 세계 고객에게 서비스를 제공하는 글로벌 리더로 자리매김했습니다.`,
      en: `DAEIL SYSTEMS has been at the forefront of vibration isolation technology for over four decades, pioneering innovations that have shaped the industry and enabled breakthrough discoveries in nanotechnology and precision manufacturing.

Our journey began in 1984 with a vision to revolutionize vibration control technology, and today we stand as a global leader in the field, serving customers worldwide with cutting-edge solutions that enable nanoscale imaging and precision manufacturing.`
    },
    icon: '📅',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/04-Company-History.png',
    timeline: companyTimeline
  },
  {
    id: 'company-intro-video',
    title: {
      ko: '회사소개 영상',
      en: 'Company Intro Video'
    },
    slug: 'company-intro-video',
    description: {
      ko: '대일시스템에 대해 더 알아보려면 회사 소개 영상을 시청하세요',
      en: 'Watch our company introduction video to learn more about DAEIL SYSTEMS'
    },
    content: {
      ko: `**대일시스템에 방문해 주셔서 감사합니다.**

대일시스템은 최첨단 제진 시스템 개발 및 제조 분야의 세계적 선두 업체입니다. 국내 제진기술로 현장에서 혁신적인 성과를 이어가고 있으며, 이 분야의 글로벌 리더가 되기 위해 지속적으로 우수성을 추구하고 세계에 긍정적 변화를 만들어 낼 수 있도록 노력할 것입니다.`,
      en: `**Thank you for visiting DAEIL SYSTEMS.**

Daeil Systems is a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems. With vibration isolating technology in Korea, Daeil systems continues to make innovative achievements in the field with a new technology. To become a global leader in the field of vibration isolation, Daeil Systems will keep pursuing excellence and create positive changes for the world.`
    },
    video_url: 'https://www.youtube.com/watch?v=A0H4Sd7i4lk',
    icon: '🎥',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/06-Company-Intro-Video.png'
  },
  {
    id: 'sustainability-management',
    title: {
      ko: '지속가능경영',
      en: 'Sustainability Management'
    },
    slug: 'sustainability-management',
    description: {
      ko: '지속 가능한 비즈니스 관행과 환경적 책임에 대한 약속',
      en: 'Our commitment to sustainable business practices and environmental responsibility'
    },
    content: {
      ko: `제품의 품질을 성공적으로 유지하기 위해서는 지속가능성 관리가 필수적입니다. 대일시스템의 경영철학이 '완전성을 위한 열정'인 만큼 제품이나 제조 과정에서 결함이 없는지 끊임없이 점검하고 확인합니다.

이러한 정신을 염두에 두고 대일시스템은 고객 모두의 니즈를 충족시키기 위해 지속적으로 노력할 것이며, 궁극적으로는 과학, 산업기술, 사회에 기여하는 우리의 목표를 추구할 것입니다.`,
      en: `Sustainability management is essential for the successful maintenance of products quality. As Daeil systems' value is 'Passion for Perfection', we constantly check and make sure that there is no defect or fault in the process of manufacturing products.

With this spirit in mind, Daeil System will continuously strive to satisfy all our customers with their needs, and ultimately, pursue our goal, which is to make contribution to science, industrial technology and society.`
    },
    icon: '🌱',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/04-Sustain_Management.png'
  },
  {
    id: 'trade-shows',
    title: {
      ko: '전시회',
      en: 'Trade Shows'
    },
    slug: 'trade-shows',
    description: {
      ko: '전 세계 주요 산업 전시회 및 박람회에서 만나보세요',
      en: 'Connect with us at leading industry trade shows and exhibitions worldwide'
    },
    content: {
      ko: `대일시스템은 전 세계 주요 전시회 및 박람회에 적극적으로 참여하여 진동 제어 기술의 최신 혁신을 선보이고 고객, 파트너 및 업계 전문가들과 교류하고 있습니다.`,
      en: `DAEIL SYSTEMS actively participates in major trade shows and exhibitions worldwide, showcasing our latest innovations in vibration control technology and connecting with customers, partners, and industry experts.`
    },
    icon: '🌍',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/07/Trade-Shows.png'
  }
];

// 유틸리티 함수들
export const getCompanySectionBySlug = (slug: string) => {
  return companySections.find(section => section.slug === slug);
};

export const getAllCompanySections = () => {
  return companySections;
};

export const getCompanyInfo = () => {
  return companyInfo;
};

export const getCompanyValues = () => {
  return companyValues;
};

export const getCompanyTimeline = () => {
  return companyTimeline;
};

export const getTradeShows = () => {
  return tradeShows;
};

// 언어별 텍스트 헬퍼
export const getText = (bilingualText: BilingualText, language: 'ko' | 'en'): string => {
  return bilingualText[language];
};
