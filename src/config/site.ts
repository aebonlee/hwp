/**
 * HWP Web 사이트 설정 파일
 */
import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'hwp',
  name: 'HWP Edit',
  nameKo: '한글 문서 편집기',
  description: '한글(HWP/HWPX) 문서를 웹에서 편집·변환·생성·관리하는 통합 도구',
  url: 'https://hwp.dreamitbiz.com',
  dbPrefix: 'hwp_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'HWP', className: 'brand-dream' },
      { text: 'Edit', className: 'brand-it' }
    ]
  },

  themeColor: '#0046C8',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: false,
    search: false,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  menuItems: [
    {
      path: '/convert',
      labelKey: 'site.nav.groupConvert',
      activePath: '/convert',
      dropdown: [
        { path: '/convert', labelKey: 'site.nav.convert' },
        { path: '/humanize', labelKey: 'site.nav.humanize' },
        { path: '/humanize-text', labelKey: 'site.nav.humanizeText' },
      ],
    },
    {
      path: '/md-editor',
      labelKey: 'site.nav.groupEdit',
      activePath: '/md-editor',
      dropdown: [
        { path: '/md-editor', labelKey: 'site.nav.mdEditor' },
        { path: '/hwp-editor', labelKey: 'site.nav.hwpEditor' },
        { path: '/viewer', labelKey: 'site.nav.viewer' },
      ],
    },
    {
      path: '/generator',
      labelKey: 'site.nav.groupCreate',
      activePath: '/generator',
      dropdown: [
        { path: '/generator', labelKey: 'site.nav.generator' },
        { path: '/business-plan', labelKey: 'site.nav.businessPlan' },
        { path: '/ai-writer', labelKey: 'site.nav.aiWriter' },
      ],
    },
    {
      path: '/templates',
      labelKey: 'site.nav.groupManage',
      activePath: '/templates',
      dropdown: [
        { path: '/templates', labelKey: 'site.nav.templates' },
        { path: '/documents', labelKey: 'site.nav.documents' },
      ],
    },
    { path: '/guide', labelKey: 'site.nav.guide' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
  ],

  footerLinks: [
    { path: '/convert', labelKey: 'site.nav.convert' },
    { path: '/md-editor', labelKey: 'site.nav.mdEditor' },
    { path: '/hwp-editor', labelKey: 'site.nav.hwpEditor' },
    { path: '/ai-writer', labelKey: 'site.nav.aiWriter' },
    { path: '/templates', labelKey: 'site.nav.templates' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'EDU Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
  ]
};

export default site;
