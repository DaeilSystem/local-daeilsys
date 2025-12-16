export interface CaseStudy {
  id: string;
  title: string;
  date: string;
  description: string;
  customer?: string;
  main_image: string;
  category: 'installation-reports' | 'case-studies';
  series: 'dvia-m-series' | 'dvia-u-series' | 'dvia-t-series' | 'dvia-ulf-series';
  tags: string[];
  url: string;
  featured?: boolean;
  content?: string;
  images?: string[];
  video_url?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'jeol-jem-f200-tem-dvia-mb3000',
    title: 'JEOL JEM-F200 TEM DVIA-MB3000 Installation Report',
    date: '2024-09-04',
    description: 'JEOL JEM-F200 TEM DVIA-MB3000 Installation',
    customer: 'BCPCA',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/09/jeol-jem-f200-tem-dvia-mb3000-vertical-transmissibility-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/jeol-jem-f200-tem-dvia-mb3000-installation-report/',
    featured: true
  },
  {
    id: 'tescan-solaris-x-fib-sem-dvia-ml1000',
    title: 'TESCAN Solaris X FIB-SEM DVIA-ML1000 Installation Report',
    date: '2024-09-03',
    description: 'TESCAN Solaris X FIB-SEM DVIA-ML1000 Installation',
    customer: 'Samsung Electronics',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/09/dvia-ml1000-vertical-vc-curves-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/tescan-solaris-x-fib-sem-dvia-ml1000-installation-report/',
    featured: true
  },
  {
    id: 'thermo-fisher-talos-tem-dvia-mb3000',
    title: 'Thermo Fisher Scientific Talos TEM DVIA-MB3000 Installation Report',
    date: '2024-07-19',
    description: 'Thermo Fisher Scientific Talos DVIA-MB3000 Installation',
    customer: 'Fuzhou University',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/07/240607-thermo-fisher-scientific-talos-vertical-transmissibility.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/thermo-fisher-scientific-talos-tem-dvia-mb3000-installation-report/',
    featured: true
  },
  {
    id: 'thermo-fisher-spectra-300-tem-dvia-mb3000',
    title: 'Thermo Fisher Scientific Spectra 300 TEM DVIA-MB3000 Installation Report',
    date: '2024-07-19',
    description: 'Thermo Fisher Scientific Spectra 300 TEM DVIA-MB3000 Installation',
    customer: 'Peking University Huairou',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/07/tfs-spectra-300-tem-dvia-mb3000-installation-report-vertical-transmissibility-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/thermo-fisher-scientific-spectra-300-tem-dvia-mb3000-installation-report/',
    featured: true
  },
  {
    id: 'thermo-fisher-krios-g4-cryo-tem-dvia-mb3000',
    title: 'Thermo Fisher Scientific Krios G4 Cryo-TEM DVIA-MB3000 Installation Report',
    date: '2024-07-19',
    description: 'Thermo Fisher Scientific Krios G4 Cryo-TEM DVIA-MB3000 Installation',
    customer: 'Peking University Huairou',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/07/tfs-krios-g4-cryo-tem-mb3000-installation-report-vertical-transmissibility-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/thermo-fisher-scientific-krios-g4-cryo-tem-dvia-mb3000-installation-report/',
    featured: true
  },
  {
    id: 'thermo-fisher-scios-2-dualbeam-fib-sem-dvia-mb1000',
    title: 'Thermo Fisher Scientific Scios 2 DualBeam FIB SEM DVIA-MB1000 Installation Report',
    date: '2024-06-11',
    description: 'Thermo Fisher Scientific Scios 2 DualBeam - FIB SEM DVIA-MB1000 Installation',
    customer: 'SILA',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/sila-figure-7-final-result-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/thermo-fisher-installation-mb1000-tfs-scios-2-tamlin-matthews/',
    featured: true
  },
  {
    id: 'thermo-fisher-glacios-2-cryo-tem-dvia-mb3000-novartis',
    title: 'Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Report',
    date: '2024-06-11',
    description: 'Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation',
    customer: 'NOVARTIS',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/novartis-2nd-tune-report-image-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/novartis-daeil-installation-2nd-report/',
    featured: true
  },
  {
    id: 'thermo-fisher-glacios-2-cryo-tem-dvia-mb3000-pfizer',
    title: 'Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation Report',
    date: '2024-06-11',
    description: 'Thermo Fisher Scientific Glacios 2 Cryo-TEM DVIA-MB3000 Installation',
    customer: 'Pfizer',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/06/deerfeild-install-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/thermo-fisher-installation-mb3000-tfs-glacios-2-joel-mancuso/',
    featured: true
  },
  {
    id: 'raith-epbg5150-ebeam-lithography-dvia-mb3000',
    title: 'RAITH EBPG5150 E-Beam Lithography System DVIA-MB3000 Installation Report',
    date: '2023-11-29',
    description: 'RAITH EBPG5150 E-Beam Lithography System DVIA-MB3000 Installation',
    customer: 'Ohio State University',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2023/11/sila-figure-1-vibration-front-back-floor.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/ohio-state-university-installation-mb3000-raith-epbg5150-aimee-price/',
    featured: true
  },
  {
    id: 'thermo-fisher-glacios-2-selectris-dvia-mb3000',
    title: 'Thermo Fisher Scientific Glacios 2 with Selectris Cryo-TEM DVIA-MB3000 Installation Report',
    date: '2023-09-25',
    description: 'Thermo Fisher Scientific Glacios 2 with Selectris Cryo-TEM DVIA-MB3000 Installation',
    customer: 'Schrodinger',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/05/figure-15-installation-detail-2-min.jpg',
    category: 'installation-reports',
    series: 'dvia-m-series',
    tags: ['DVIA-M Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/schrodinger-installation-mb3000-tfs-glacios-2-with-selectris-mark-gerrard/',
    featured: true
  },
  {
    id: 'hitachi-su8220-dvia-u350',
    title: 'Hitachi SU8220 DVIA-U350 Installation Report',
    date: '2024-07-29',
    description: 'Hitachi SU8220 DVIA-U350 Installation',
    customer: 'Applied Materials',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/07/su8220-figure-1-vibration-vertical-floor.jpg',
    category: 'installation-reports',
    series: 'dvia-u-series',
    tags: ['DVIA-U Series', 'Installation Reports'],
    url: 'https://www.daeilsys.com/support/case-studies/hitachi-su8220-dvia-u350-installation-report/',
    featured: false
  },
  {
    id: 'live-cell-imaging-microscope',
    title: 'LIVE CELL IMAGING MICROSCOPE',
    date: '2022-04-12',
    description: 'LIVE CELL IMAGING MICROSCOPE',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2020/09/DVIA-UD-case-studies.jpg',
    category: 'case-studies',
    series: 'dvia-u-series',
    tags: ['Case Studies', 'DVIA-U Series'],
    url: 'https://www.daeilsys.com/support/case-studies/live-cell-imaging-microscope/',
    featured: false
  },
  {
    id: 'white-light-interferometer',
    title: 'WHITE LIGHT INTERFEROMETER',
    date: '2022-04-12',
    description: 'WHITE LIGHT INTERFEROMETER',
    main_image: 'https://www.daeilsys.com/wp-content/uploads/2024/04/white-light-interferometer.jpg',
    category: 'case-studies',
    series: 'dvia-t-series',
    tags: ['Case Studies', 'DVIA-T Series'],
    url: 'https://www.daeilsys.com/support/case-studies/white-light-interferometer/',
    featured: false
  }
];

// 유틸리티 함수들
export const getCaseStudiesByCategory = (category: CaseStudy['category']) => {
  return caseStudies.filter(study => study.category === category);
};

export const getCaseStudiesBySeries = (series: CaseStudy['series']) => {
  return caseStudies.filter(study => study.series === series);
};

export const getFeaturedCaseStudies = () => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudiesByTag = (tag: string) => {
  return caseStudies.filter(study =>
    study.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getCaseStudyById = (id: string) => {
  return caseStudies.find(study => study.id === id);
};

export const getCaseStudiesByCustomer = (customer: string) => {
  return caseStudies.filter(study =>
    study.customer?.toLowerCase().includes(customer.toLowerCase())
  );
};
