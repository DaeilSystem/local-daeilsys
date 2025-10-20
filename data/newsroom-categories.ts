export const NEWS_CATEGORIES = {
  news: {
    label: '뉴스',
    description: '회사 주요 소식',
    color: 'blue'
  },
  'press-release': {
    label: '보도자료',
    description: '공식 보도자료',
    color: 'green'
  },
  product: {
    label: '제품',
    description: '신제품 및 제품 관련 소식',
    color: 'purple'
  },
  company: {
    label: '회사',
    description: '회사 행사 및 문화',
    color: 'orange'
  }
} as const;

export const POLICY_CATEGORIES = {
  warranty: {
    label: '보증정책',
    description: '제품 보증 관련 정책',
    icon: 'shield'
  },
  terms: {
    label: '이용약관',
    description: '서비스 이용 약관',
    icon: 'file-text'
  },
  privacy: {
    label: '개인정보보호',
    description: '개인정보 처리방침',
    icon: 'lock'
  }
} as const;

export type NewsCategory = keyof typeof NEWS_CATEGORIES;
export type PolicyCategory = keyof typeof POLICY_CATEGORIES;
