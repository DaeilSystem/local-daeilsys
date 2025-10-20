export interface CompanySection {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon?: string;
  image?: string;
  video_url?: string;
  timeline?: TimelineEvent[];
}

export interface TimelineEvent {
  year: string;
  event: string;
  image?: string;
}

export interface CompanyInfo {
  industry: string;
  products: string[];
  yearEstablished: string;
  location: string;
  employees: string;
  organizationType: string;
  keyExecutives: string[];
}

// 회사 기본 정보
export const companyInfo: CompanyInfo = {
  industry: "Manufacturing",
  products: [
    "Active Vibration Isolation System",
    "Passive Vibration Isolation System",
    "Optical Tables",
    "Acoustic Enclosures"
  ],
  yearEstablished: "1984",
  location: "40 Maengni-ro, Yongin, South Korea",
  employees: "50",
  organizationType: "Private",
  keyExecutives: [
    "CEO Kwangsan Kim",
    "COO Sungkuk Kim"
  ]
};

// 회사 섹션 데이터
export const companySections: CompanySection[] = [
  {
    id: 'overview',
    title: 'Overview',
    slug: 'overview',
    description: 'Learn about DAEIL SYSTEMS, a specialized manufacturer of vibration isolation systems',
    content: `DAEIL SYSTEMS is a specialized manufacturer of vibration isolation systems. These systems control vibrations affecting internal and external structures, allowing for stable imaging in high resolution without disturbance to nano-scale structures and materials. The vibration isolation systems are designed to isolate ultra-precision semiconductor metrology and display equipment, electron microscopes, photonics & laser from the low-frequency floor vibrations.

Producing these vibration isolation systems demands advanced technological expertise. It's not just about assembly, but also about the capabilities in development, design, and processing, which are essential to deliver high-quality products to the market. Even minor defects can render these systems unreliable.

Established in 1984, DAEIL SYSTEMS has emerged as a pioneer in micro-vibration control systems domestically, garnering recognition for the excellence of its products in the global market over the past 40 years, thanks to its accumulated experience and technological prowess. Positioned as a key player in the vibration isolation field, DAEIL SYSTEMS takes pride in positively impacting the creation of various products that enrich humanity in the era of nanotechnology.

Our pride stems not from arrogance but from confidence. Our confidence in illuminating the world comes from our solid technological capabilities, rigorous quality assurance systems, and stable company operations. DAEIL SYSTEMS, committed to playing a significant role in creating a better environment, asks for your continued support. We pledge to continue advancing diligently.

As technology unfolds worlds previously unseen, our work in vibration isolation technology is becoming more significant. Enabling the world to view the unseen using our technology, DAEIL SYSTEMS continues to pursue groundbreaking innovations in the field of vibration isolation.

Established in 1984, DAEIL Systems became the first company to introduce a vibration isolation table in Korea. Since then, our passion for technological innovation led us to become the industry leader in vibration solutions for nanotechnology.

We design and manufacture innovative products at our cutting-edge manufacturing facilities and have established a global network to supply our products to Asia, the Middle East, Europe, Oceania and the Americas.

Our vibration isolation technology has tremendously improved precision and productivity in the science and engineering industries. By enhancing the efficiency of nanoscale measurements, we have enabled researchers to explore microscopic worlds with ease.

Devoting our human capital and technology to deliver superior products and services, DAEIL SYSTEMS is a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems. Our relentless pursuit of excellence, our drive to become a global leader in creating positive changes for the world, that is who we are. And we are DAEIL Systems.`,
    icon: '📊',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/01-Overview.png'
  },
  {
    id: 'vision-mission',
    title: 'Vision and Mission',
    slug: 'vision-mission',
    description: 'Discover our vision and mission for the future of vibration control technology',
    content: `**Vision**

DAEIL SYSTEMS announces a new vision of the company.

"We enable nanoscale imaging to make the world a better place."

DAEIL SYSTEMS' vibration isolation systems have been contributing to making the world a better place. Without our vibration isolation systems, nanoscale imaging metrology equipment won't be getting optimal measurements. These metrology equipment are used in semiconductor, analyzing materials, life science, display and photonics. If the nanoscale imaging equipment had been unable to obtain the desired measurements because of vibration, then we wouldn't have enjoyed using high-technology smart phones, tablet pcs, computers, cars and the benefits of AI. Furthermore, without our vibration isolation systems, developing the vaccine for COVID-19 would have been postponed.

**Mission**

Our mission is to deliver the best vibration isolation systems to students, scientists, engineers, and consumers around the world, enhancing precision and efficiency in every endeavor.

DAEIL SYSTEMS is about people who think differently, people who want to use vibration isolation systems to help them change the world, to help them create things that make a difference and push the human race forward.

To make innovative products that influence the world.

To deliver the best vibration isolation systems and support to students, scientists, engineers and consumers around the world.`,
    icon: '🎯',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/02-Vision-and-Mission.png'
  },
  {
    id: 'values',
    title: 'Values',
    slug: 'values',
    description: 'The core values that drive our innovation and success',
    content: `At DAEIL SYSTEMS, our values are the foundation of everything we do. These eight core principles guide our decisions, shape our culture, and drive our success in the vibration isolation industry.

**Vision and Innovation** 🌟
We follow a vision and innovation by making products that make the world a better place. Our commitment to pushing technological boundaries enables breakthrough discoveries in nanotechnology and precision manufacturing.

**Technology Excellence** ⚡
We must own and control technology which is fundamental to our products. Our deep expertise in vibration isolation systems represents decades of research, development, and real-world application.

**Quality Assurance** ✨
We need to provide products that are high quality and align with our core values. Every system we manufacture undergoes rigorous testing to ensure it meets the exacting standards required for nanoscale precision.

**Customer-Centric Approach** 🤝
Based on customers' perspective we develop and improve products that satisfy customers' practical needs and requirements. We listen, learn, and adapt our solutions to meet the evolving challenges of our global customer base.

**Individual Recognition** 👥
We acknowledge individuals' contribution to our achievement and share profits. Our success is built on the dedication and expertise of every team member, and we believe in recognizing and rewarding their contributions.

**Freedom of Expression** 🗣️
Regardless of age and title, everyone has a right to speak freely and propose ideas. We foster an open environment where innovation thrives through diverse perspectives and collaborative thinking.

**Partnership Growth** 🌍
We value partnership and support our partners to actively sell products worldwide. Our global network of partners enables us to serve customers across continents with local expertise and support.

**Innovative Leadership** 🚀
Executives must create a workplace and company culture where employees can innovatively and productively work. Creating an innovative work environment is the most important job as a leader, ensuring our team can achieve their full potential.

These values are not just words on paper—they are the living principles that drive our daily operations, guide our strategic decisions, and inspire our commitment to excellence in everything we do.`,
    icon: '💎',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/03-Values.png'
  },
  {
    id: 'company-history',
    title: 'Company History',
    slug: 'company-history',
    description: 'Four decades of innovation and leadership in vibration control technology',
    content: `DAEIL SYSTEMS has been at the forefront of vibration isolation technology for over four decades, pioneering innovations that have shaped the industry and enabled breakthrough discoveries in nanotechnology and precision manufacturing.

Our journey began in 1984 with a vision to revolutionize vibration control technology, and today we stand as a global leader in the field, serving customers worldwide with cutting-edge solutions that enable nanoscale imaging and precision manufacturing.`,
    icon: '📅',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/04-Company-History.png',
    timeline: [
      {
        year: "1984",
        event: "DAEIL Machinery was founded",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1984-DAEIL-Machinery-was-founded.jpg"
      },
      {
        year: "1988",
        event: "Changed to DAEIL SYSTEMS",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1988-Changed-to-DAEIL-SYSTEMS.png"
      },
      {
        year: "1989",
        event: "Introduced first vibration isolation table in Korea",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1989-Introduced-first-vibration-isolation-table-in-Korea.png"
      },
      {
        year: "1993",
        event: "Introduced first optical table in Korea",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1993-Introduced-first-optical-table-in-Korea.png"
      },
      {
        year: "1997",
        event: "Obtained ISO 9002",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/1997-Obtained-ISO-9002.jpg"
      },
      {
        year: "2000",
        event: "Built new HQ and 1st factory",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2000-Built-new-HQ-and-1st-factory.jpg"
      },
      {
        year: "2001",
        event: "Established R&D"
      },
      {
        year: "2007",
        event: "Introduced Active Vibration Isolation System",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2007-Introduced-Active-Vibration-Isolation-System.png"
      },
      {
        year: "2009",
        event: "Qingdao DAEIL SYSTEMS CO.,LTD was founded"
      },
      {
        year: "2016",
        event: "Built 2nd factory",
        image: "https://www.daeilsys.com/wp-content/uploads/2020/05/2016-Built-2nd-factory-DAEIL-SYSTEMS.png"
      },
      {
        year: "2024",
        event: "Celebrating the 40th Anniversary of DAEIL SYSTEMS",
        image: "https://www.daeilsys.com/wp-content/uploads/2024/03/daeil-systems-celebrates-40-years-flag-min.png"
      }
    ]
  },
  {
    id: 'company-intro-video',
    title: 'Company Intro Video',
    slug: 'company-intro-video',
    description: 'Watch our company introduction video to learn more about DAEIL SYSTEMS',
    content: `**Thank you for visiting DAEIL SYSTEMS.**

Daeil Systems is a world-class leader in developing and manufacturing state-of-the-art vibration isolation systems. With vibration isolating technology in Korea, Daeil systems continues to make innovative achievements in the field with a new technology. To become a global leader in the field of vibration isolation, Daeil Systems will keep pursuing excellence and create positive changes for the world.`,
    video_url: 'https://www.youtube-nocookie.com/embed/A0H4Sd7i4lk?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0',
    icon: '🎥',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/06-Company-Intro-Video.png'
  },
  {
    id: 'sustainability-management',
    title: 'Sustainability Management',
    slug: 'sustainability-management',
    description: 'Our commitment to sustainable business practices and environmental responsibility',
    content: `**S**ustainability management is essential for the successful maintenance of products quality. As Daeil systems' value is 'Passion for Perfection', we constantly check and make sure that there is no defect or fault in the process of manufacturing products.

With this spirit in mind, Daeil System will continuously strive to satisfy all our customers with their needs, and ultimately, pursue our goal, which is to make contribution to science, industrial technology and society.`,
    icon: '🌱',
    image: 'https://www.daeilsys.com/wp-content/uploads/2020/05/04-Sustain_Management.png'
  },
  {
    id: 'trade-shows',
    title: 'Trade Shows',
    slug: 'trade-shows',
    description: 'Connect with us at leading industry trade shows and exhibitions worldwide',
    content: `DAEIL SYSTEMS actively participates in major trade shows and exhibitions worldwide, showcasing our latest innovations in vibration control technology and connecting with customers, partners, and industry experts.

**Recent Exhibitions**

**LASER World of PHOTONICS CHINA 2019**
**Microscopy & Microanalysis 2019**
**IMC 2019**
**Laser World of Photonics 2018**
**NANO KOREA 2017**
**SEMICON TAIWAN 2017**

Our participation in these premier exhibitions demonstrates our global reach and technological leadership in vibration isolation systems for various applications including photonics, microscopy, manufacturing, nanotechnology, and semiconductor industries.`,
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
