export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  category: 'news' | 'press-release' | 'product' | 'company';
  main_image?: string;
  content: string;
  images?: string[];
  video_url?: string;
  tags?: string[];
  featured?: boolean;
}

export interface PolicyDocument {
  id: string;
  title: string;
  content: string;
  category: 'warranty' | 'terms' | 'privacy';
  last_updated: string;
}

// 뉴스 기사 데이터
export const newsArticles: NewsArticle[] = [
  {
    id: 'precision-control-nanoworld-2025-05-14',
    title: 'DAEIL SYSTEMS\' Precision Control Unlocks Stability in the Nanoworld',
    date: '2025.05.14.',
    author: 'PR Team',
    category: 'company',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2025/05/daeil-systems-precision-control-unlocks-stability-in-the-nanoworld-min.png',
    content: `Nanotechnology, a key driver of future industries, is revolutionizing fields from materials science and electronics to energy and biotechnology. With its ability to enable precise control and analysis at the atomic and molecular levels, nanotechnology offers immense potential beyond imagination. However, realizing the potential of this ultra-microscopic realm requires overcoming a significant hurdle: unpredictable 'vibration'.

Nano-analysis instruments, operating at the incredibly minute scale of nanometers (one billionth of a meter), are exquisitely sensitive to even the slightest external tremors. These can lead to critical issues like measurement errors and image distortion, undermining research reliability and severely hindering precise processing. From subtle building movements and the operation of nearby equipment to the minute actions of researchers themselves, these seemingly insignificant factors can be major disturbances in the nanoworld.

While the diverse array of analytical tools crucial for nanotechnology research and industrial applications each have their own operational principles, they share a critical vulnerability: extreme sensitivity to 'vibration'. Atomic Force Microscopes (AFM), which manipulate probes at the nanometer level to map surfaces, suffer immediate image degradation from even minor vibrations. Similarly, Scanning Tunneling Microscopes (STM), measuring minute tunneling currents between atoms, require a stable probe-sample distance, making them prone to measurement errors caused by vibration. Furthermore, Scanning Electron Microscopes (SEM) and Transmission Electron Microscopes (TEM) experience image distortion due to tiny vibrations at high magnifications, with TEM being particularly susceptible due to the nature of its electron beam passing through the sample.

DAEIL SYSTEMS, South Korea's premier specialist in micro-vibration control, is dedicated to solving these fundamental challenges of the nanotechnology era. Drawing upon its extensive history of unique technological advancements and in-depth expertise, DAEIL SYSTEMS provides advanced vibration control solutions that guarantee the stable operation of a wide array of nano-analysis equipment. By effectively isolating unpredictable minute vibrations at the nanoscale, researchers and industry professionals can conduct groundbreaking research and execute top-tier precision processes in a stable environment free of vibrations.`,
    tags: ['nanotechnology', 'vibration control', 'AFM', 'SEM', 'TEM', 'precision measurement'],
    featured: true
  },
  {
    id: 'beyond-business-2025-08-20',
    title: 'Beyond Business: Driving Positive Change in the Community',
    date: '2025.08.20.',
    author: 'PR Team',
    category: 'company',
    main_image: '/daeilsys-images/news-1.jpg',
    content: `Where does an individual's purpose originate from? From the very beginning, can the phrase "a person's purpose" even be established? Purpose means some kind of benefit...

This philosophical question about individual purpose is also relevant to corporate existence. DAEIL SYSTEMS, as a company that manufactures vibration isolation systems, continuously contemplates its purpose and role in society.

Through our vibration isolation technology, we contribute to advancing nanotechnology research and precision manufacturing. Our products enable scientists and engineers to conduct research and development in stable environments, ultimately contributing to scientific advancement and industrial development.

DAEIL SYSTEMS believes that true corporate value lies not only in business success but also in the positive impact we create in the community and society. We are committed to creating meaningful change through our technology and expertise.`,
    tags: ['corporate responsibility', 'community impact', 'purpose', 'social contribution'],
    featured: true
  },
  {
    id: 'anxiety-existence-2025-08-20',
    title: 'Why are we anxious? Concerning the existence of DAEIL SYSTEMS in anxiety.',
    date: '2025.08.20.',
    author: 'PR Team',
    category: 'company',
    main_image: '/daeilsys-images/news-2.jpg',
    content: `What comes to mind when you hear the word vibration? By definition, vibration refers to a periodic motion or oscillation around an equilibrium position. However, in the context of precision research and manufacturing, vibration represents a silent threat that can compromise the integrity of delicate processes.

At DAEIL SYSTEMS, we understand that anxiety in the workplace often stems from uncertainty and the pressure to maintain perfection in an environment where even the smallest vibration can cause significant problems. This anxiety is not just a personal concern but a professional reality for researchers and engineers working with nanoscale precision.

Our mission is to eliminate this anxiety by providing reliable vibration isolation solutions. Through our advanced technology and decades of experience, we create stable environments where researchers can focus on their work without worrying about external disturbances.

The existence of DAEIL SYSTEMS is fundamentally about reducing anxiety in precision work environments, enabling confidence in research outcomes, and supporting the advancement of science and technology.`,
    tags: ['anxiety', 'workplace', 'precision', 'research environment', 'confidence'],
    featured: true
  },
  {
    id: 'invisible-force-vibration-control-2025-05-14',
    title: 'The Invisible Force Driving the Future of Industry: Vibration Control',
    date: '2025.05.14.',
    author: 'PR Team',
    category: 'company',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2025/05/the-invisible-force-driving-the-future-of-industry-vibration-control-min.png',
    content: `Today, industries built on innovative technologies, such as semiconductors, displays, automotive, and aerospace, are advancing at an unprecedented pace. In the constant pursuit of smaller, faster, and more precise products, one often overlooked element is vibration. Though imperceptible, vibrations can lead to significant challenges, ranging from reduced production efficiency and compromised product quality to shortened equipment lifespan. Given its hidden nature, effective vibration management is becoming a critical pillar of industrial competitiveness.

Vibration impacts core operations across advanced industries in different ways. In semiconductor manufacturing, it can cause errors in ultra-fine processes. In the display industry, it degrades panel quality. In the automotive sector, it affects performance and safety. And in aerospace, it leads to equipment malfunctions and reduces operational lifespan. As a result, tailored vibration control technologies have become essential across industries.

Vibration significantly contributes to productivity loss and quality issues in high-tech sectors. Effective vibration control technology enhances production efficiency, improves product quality, and prolongs equipment lifespan. Implementing these systems from the early stages of production can significantly reduce defect rates, cut maintenance costs, and boost productivity, directly contributing to improved profitability.

As South Korea's leading manufacturer of vibration isolation systems, DAEIL SYSTEMS brings decades of technical expertise and accumulated field experience to deliver optimized vibration control solutions across a range of next-generation industries. From active and passive isolation systems that enable extremely precise production environments to customized solutions that ensure stable equipment operation, DAEIL SYSTEMS provides industry-specific technologies that power innovation and serve as a trusted partner for success.

Ultimately, the future of advanced industries depends on building more precise and stable production environments. Controlling invisible vibrations is no longer a luxury, it is a strategic imperative that determines a company's competitiveness, resilience, and future. Mastering invisible vibration is mastering silent competitiveness. With this edge, DAEIL SYSTEMS is shaping an unshakable future for advanced industries.`,
    tags: ['vibration control', 'industrial innovation', 'semiconductor', 'display', 'automotive', 'aerospace'],
    featured: true
  },
  {
    id: 'dvia-ml-series-2025-02-04',
    title: 'DVIA-ML Series: Vibration Isolation for Optimal Electron Microscope Imaging',
    date: '2025.02.11.',
    author: 'PR Team',
    category: 'product',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2025/02/dvia-ml-series-the-perfect-vibration-isolation-table-for-electron-microscopy-imaging-min.jpg',
    content: `DAEIL SYSTEMS' DVIA-ML Series is a highly advanced vibration isolation system designed for optimal electron microscope imaging. This innovative system provides exceptional vibration control for SEM, TEM, and other electron microscopy applications, ensuring precise and stable imaging results.

The DVIA-ML Series features advanced active vibration isolation technology with real-time monitoring and control capabilities. It offers superior damping performance across a wide frequency range, making it ideal for high-magnification electron microscopy applications where even the slightest vibration can cause image distortion.

Key features include intelligent control algorithms, multi-sensor fusion technology, and user-friendly interface for easy operation and monitoring.`,
    tags: ['DVIA-ML', 'electron microscope', 'SEM', 'TEM', 'vibration isolation'],
    featured: true
  },
  {
    id: 'emc2024-exhibition-2024-09-27',
    title: '[NEWS] Met the Global Customers in Person: DAEIL SYSTEMS Successfully Participated in the "EMC2024" Exhibition in Denmark.',
    date: '2024.09.27.',
    author: 'PR Team',
    category: 'press-release',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/09/overview-of-the-emc-2024-exhibition-01-min.jpg',
    content: `DAEIL SYSTEMS successfully participated in the "EMC2024" exhibition held in Copenhagen, Denmark. The European Microscopy Congress (EMC) is the largest microscopy-related academic conference and exhibition in Europe, held every three years as a global event.

During the exhibition, DAEIL SYSTEMS showcased its latest vibration control technologies and products, receiving significant attention from attendees. The company achieved notable results including the European market debut of the DVIA-ML Series, technical seminars on AI-based vibration control technology, and networking with major European research institutions and companies.

The exhibition served as an important milestone in DAEIL SYSTEMS' European market entry strategy, demonstrating the company's global competitiveness and strengthening its position as a leading vibration control technology company.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/09/overview-of-the-emc-2024-exhibition-01-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/overview-of-the-emc-2024-exhibition-02-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/daeil-systems-at-the-emc-2024-exhibition-01-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/daeil-systems-at-the-emc-2024-exhibition-02-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/daeil-systems-at-the-emc-2024-exhibition-03-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/daeil-systems-at-the-emc-2024-exhibition-04-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/09/daeil-systems-at-the-emc-2024-exhibition-05-min.jpg'
    ],
    video_url: 'https://www.youtube.com/embed/cMIlZRBJelM?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0',
    tags: ['EMC2024', 'exhibition', 'Denmark', 'global', 'Europe'],
    featured: true
  },
  {
    id: 'dvia-mlp1000-2024-08-19',
    title: 'The new Active Vibration Isolation System you\'ve been waiting for, DVIA-MLP1000.',
    date: '2024.08.19.',
    author: 'PR Team',
    category: 'product',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/07/dvia-mlp1000-image-min.png',
    content: `DAEIL SYSTEMS introduces the new active vibration isolation system DVIA-MLP1000 that you've been waiting for. This revolutionary system features next-generation active vibration control technology with real-time vibration detection from 0.01Hz to 200Hz, AI-based control algorithms, and automatic performance optimization.

The DVIA-MLP1000 offers exceptional damping performance with -50dB attenuation at 0.1Hz, fast stabilization within 15 seconds, and supports loads up to 1,000kg. It includes user-friendly features such as touchscreen control, remote monitoring via smartphone app, and real-time vibration data logging and analysis.

The system is designed for various applications including semiconductor manufacturing, precision measurement, medical equipment, and research and development in nanotechnology and biotechnology fields.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/07/dvia-mlp1000-sketch-min.png',
      'https://www.daeilsys.com/wp-content/uploads/2024/07/dvia-mlp1000-image-min.png'
    ],
    tags: ['DVIA-MLP1000', 'new product', 'active vibration isolation', 'AI control'],
    featured: true
  },
  {
    id: 'hr-management-2024-08-05',
    title: '[News] Work Efficiently, Compensate Fairly : DAEIL SYSTEMS Advances Human Resources Practice',
    date: '2024.08.05.',
    author: 'PR Team',
    category: 'press-release',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-system-enhances-hr-management-01-min.jpg',
    content: `DAEIL SYSTEMS has embarked on improving its human resources system to create a better corporate culture. As the company approaches its 40th anniversary, it is seeking a new turning point in corporate culture, recognizing that talent acquisition and retention have become core competitive advantages in the rapidly changing industrial environment and global competition.

The company is implementing performance-based compensation systems, talent development programs, improved working environments, and organizational culture innovation. These improvements are expected to enhance talent attraction and retention, improve work efficiency, increase organizational satisfaction, and strengthen corporate competitiveness.

The HR system improvement represents more than just institutional change; it signifies fundamental innovation in corporate culture, creating a virtuous cycle where employees and the company grow together through efficient work performance and fair compensation.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-system-enhances-hr-management-01-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/07/daeil-system-enhances-hr-management-02-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/07/daeil-system-enhances-hr-management-03-min.jpg'
    ],
    tags: ['HR system', 'corporate culture', 'performance-based', 'talent development'],
    featured: false
  },
  {
    id: 'export-tower-2024-07-01',
    title: '[News] DAEIL SYSTEMS wins \'5 Million Dollar Export Tower\' on the 60th Trade Day.',
    date: '2024.07.01.',
    author: 'PR Team',
    category: 'press-release',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-wins-5-million-dollar-export-tower-min.png',
    content: `DAEIL SYSTEMS achieved the remarkable feat of winning the '5 Million Dollar Export Tower' at the 60th Trade Day. The company achieved export sales of over 5 million dollars in 2023, demonstrating its global market entry efforts and technological competitiveness.

The company's export performance includes major export regions such as the United States, Europe, Japan, China, and Southeast Asia, with main export products including vibration isolation systems, optical tables, and vibration isolation platforms.

This award recognizes DAEIL SYSTEMS' global competitiveness and technological capabilities, serving as an important milestone for more aggressive global market expansion and growth as a world-class vibration control technology company.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-wins-5-million-dollar-export-tower-min.png',
      'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-technology-min.png',
      'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-global-min.png',
      'https://www.daeilsys.com/wp-content/uploads/2024/07/shipping-container-min.jpg'
    ],
    tags: ['export', 'Trade Day', '5 million dollar', 'award', 'global'],
    featured: true
  },
  {
    id: 'vec-visit-2024-06-14',
    title: 'Bridging Silicon Valley to Korea : VEC visiting DAEIL SYSTEMS',
    date: '2024.06.14.',
    author: 'PR Team',
    category: 'press-release',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-visit-to-vec-min.jpg',
    content: `In March 2024, representatives from VEC (Vibration Engineering Consultants) in the United States visited DAEIL SYSTEMS. VEC is a precision equipment solutions provider based in Silicon Valley, offering vibration control solutions in semiconductor, bio, and medical equipment fields.

The visit included technical exchanges, product demonstrations of the DVIA Series active vibration isolation systems, and discussions on cooperation opportunities. This visit was an important milestone recognizing DAEIL SYSTEMS' global competitiveness, expanding global networks, and enhancing brand value.

The collaboration with VEC is expected to accelerate DAEIL SYSTEMS' entry into the US market, establish local customer support systems, and develop US-specific products, strengthening the company's position in the global market.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/06/commemorative-photo-of-daeil-systems-visit-to-vec-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/06/daeil-systems-josun-hotel-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/06/handshake-photo-min.jpg'
    ],
    tags: ['VEC', 'United States', 'cooperation', 'global', 'Silicon Valley'],
    featured: false
  },
  {
    id: '40th-anniversary-workshop-2024-04-22',
    title: 'Embrace and Release : Workshop to Celebrate DAEIL SYSTEMS\'s 40th Anniversary',
    date: '2024.04.22.',
    author: 'PR Team',
    category: 'company',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/04/workshop-article-background-image-min.jpg',
    content: `In celebration of the 40th anniversary of the company's founding, we embarked on a 4-night, 5-day workshop to Cebu, Philippines. The workshop, themed "Between Filling and Emptying," was a meaningful time to reflect on the company's 40-year history, share future vision, and strengthen employee unity.

The workshop included reviewing the company's growth process and major achievements, team building activities to enhance communication and cooperation, and cultural experiences in the Philippines. It served to strengthen organizational culture, share future vision, and develop talent through leadership development programs and knowledge sharing between generations.

The 40th anniversary workshop was an important opportunity to look back on DAEIL SYSTEMS' past and prepare for the future. Like the theme "Between Filling and Emptying," the company will continue to grow through new challenges based on 40 years of accumulated experience and technology, strengthening its position as a global vibration control technology leader.`,
    images: [
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-systems-travel-photograph-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/beer-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/tumulog-group-photo-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/cebu-beach-drone-photograph01-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop02-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/cebu-beach-drone-photograph02.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/embrace-and-release-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop01-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop03-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop04-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop05-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop06-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop07-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop08-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-system-philippines-workshop09-min.jpg',
      'https://www.daeilsys.com/wp-content/uploads/2024/04/daeil-systems-workshop-min.jpg'
    ],
    video_url: 'https://www.youtube.com/embed/FUxz8JkAuXc?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0',
    tags: ['40th anniversary', 'workshop', 'Philippines', 'Cebu', 'corporate culture'],
    featured: true
  }
];

// 정책 문서 데이터
export const policyDocuments: PolicyDocument[] = [
  {
    id: 'warranty-policy',
    title: 'DAEIL SYSTEMS Product Warranty Policy',
    content: 'Thank you for purchasing DAEIL SYSTEMS brand products (hereinafter "Products")...',
    category: 'warranty',
    last_updated: '2024-01-01'
  }
];

// 유틸리티 함수들
export const getNewsByCategory = (category: NewsArticle['category']) => {
  return newsArticles.filter(article => article.category === category);
};

export const getFeaturedNews = () => {
  return newsArticles.filter(article => article.featured);
};

export const getNewsByTag = (tag: string) => {
  return newsArticles.filter(article =>
    article.tags?.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getNewsById = (id: string) => {
  return newsArticles.find(article => article.id === id);
};

export const getPolicyByCategory = (category: PolicyDocument['category']) => {
  return policyDocuments.filter(doc => doc.category === category);
};
