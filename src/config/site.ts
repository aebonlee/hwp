/**
 * HWP Web 사이트 설정 파일
 */
import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'hwp',
  name: 'HWP Web',
  nameKo: '한글 문서 변환기',
  description: '한글(HWP/HWPX) 문서를 웹에서 변환·편집·관리하는 도구',
  url: 'https://hwp.dreamitbiz.com',
  dbPrefix: 'hwp_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'HWP', className: 'brand-dream' },
      { text: 'Web', className: 'brand-it' }
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
    { path: '/', labelKey: 'nav.home' },
    { path: '/convert', labelKey: 'site.nav.convert' },
    { path: '/editor', labelKey: 'site.nav.editor' },
    { path: '/templates', labelKey: 'site.nav.templates' },
    { path: '/documents', labelKey: 'site.nav.documents' },
    { path: '/guide', labelKey: 'site.nav.guide' },
  ],

  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/convert', labelKey: 'site.nav.convert' },
    { path: '/editor', labelKey: 'site.nav.editor' },
    { path: '/templates', labelKey: 'site.nav.templates' },
    { path: '/guide', labelKey: 'site.nav.guide' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'EDU Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
  ]
};

export default site;
