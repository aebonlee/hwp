import type { BusinessPlanTemplate } from '../types';

export const businessPlanTemplates: BusinessPlanTemplate[] = [
  // ── 1. 창업사업계획서 ──
  {
    type: 'startup',
    nameKo: '창업사업계획서',
    nameEn: 'Startup Business Plan',
    icon: '\u{1F680}',
    descKo: '스타트업/신규 창업을 위한 사업계획서',
    descEn: 'Business plan for startups and new ventures',
    sections: [
      {
        id: 'overview',
        titleKo: '사업 개요',
        titleEn: 'Business Overview',
        fields: [
          { key: 'businessName', labelKo: '사업명', labelEn: 'Business Name', type: 'text', required: true },
          { key: 'businessField', labelKo: '사업 분야', labelEn: 'Business Field', type: 'text', required: true },
          { key: 'businessPurpose', labelKo: '사업 목적', labelEn: 'Business Purpose', type: 'textarea', required: true },
          { key: 'businessSummary', labelKo: '사업 요약', labelEn: 'Business Summary', type: 'textarea', required: true },
          { key: 'targetCustomer', labelKo: '목표 고객', labelEn: 'Target Customer', type: 'text', required: true },
        ],
      },
      {
        id: 'founder',
        titleKo: '창업자 소개',
        titleEn: 'Founder Introduction',
        fields: [
          { key: 'founderName', labelKo: '대표자명', labelEn: 'Founder Name', type: 'text', required: true },
          { key: 'founderCareer', labelKo: '주요 경력', labelEn: 'Key Career', type: 'textarea' },
          { key: 'founderExpertise', labelKo: '전문 분야', labelEn: 'Expertise', type: 'text' },
          { key: 'founderMotivation', labelKo: '창업 동기', labelEn: 'Motivation', type: 'textarea' },
        ],
      },
      {
        id: 'item',
        titleKo: '아이템 분석',
        titleEn: 'Item Analysis',
        fields: [
          { key: 'itemDescription', labelKo: '제품/서비스 설명', labelEn: 'Product/Service Description', type: 'textarea', required: true },
          { key: 'itemAdvantage', labelKo: '경쟁 우위', labelEn: 'Competitive Advantage', type: 'textarea' },
          { key: 'itemDifferentiation', labelKo: '차별화 요소', labelEn: 'Differentiation', type: 'textarea' },
          { key: 'itemTechnology', labelKo: '핵심 기술', labelEn: 'Core Technology', type: 'textarea' },
        ],
      },
      {
        id: 'market',
        titleKo: '시장 분석',
        titleEn: 'Market Analysis',
        fields: [
          { key: 'marketSize', labelKo: '시장 규모', labelEn: 'Market Size', type: 'text' },
          { key: 'marketTrend', labelKo: '시장 트렌드', labelEn: 'Market Trend', type: 'textarea' },
          { key: 'competitors', labelKo: '주요 경쟁자', labelEn: 'Key Competitors', type: 'textarea' },
          { key: 'marketOpportunity', labelKo: '시장 기회', labelEn: 'Market Opportunity', type: 'textarea' },
        ],
      },
      {
        id: 'marketing',
        titleKo: '마케팅 전략',
        titleEn: 'Marketing Strategy',
        fields: [
          { key: 'marketingStrategy', labelKo: '마케팅 전략', labelEn: 'Marketing Strategy', type: 'textarea' },
          { key: 'salesChannel', labelKo: '판매 채널', labelEn: 'Sales Channel', type: 'textarea' },
          { key: 'pricingStrategy', labelKo: '가격 전략', labelEn: 'Pricing Strategy', type: 'textarea' },
        ],
      },
      {
        id: 'operation',
        titleKo: '운영 계획',
        titleEn: 'Operations Plan',
        fields: [
          { key: 'operationPlan', labelKo: '운영 방안', labelEn: 'Operations Plan', type: 'textarea' },
          { key: 'organization', labelKo: '조직 구성', labelEn: 'Organization', type: 'textarea' },
          { key: 'location', labelKo: '사업 장소', labelEn: 'Business Location', type: 'text' },
        ],
      },
      {
        id: 'finance',
        titleKo: '재무 계획',
        titleEn: 'Financial Plan',
        fields: [
          { key: 'initialInvestment', labelKo: '초기 투자금', labelEn: 'Initial Investment', type: 'text' },
          { key: 'revenueProjection', labelKo: '매출 전망', labelEn: 'Revenue Projection', type: 'textarea' },
          { key: 'costStructure', labelKo: '비용 구조', labelEn: 'Cost Structure', type: 'textarea' },
          { key: 'breakEvenPoint', labelKo: '손익분기점', labelEn: 'Break-even Point', type: 'text' },
        ],
      },
      {
        id: 'schedule',
        titleKo: '추진 일정',
        titleEn: 'Schedule',
        fields: [
          { key: 'milestones', labelKo: '주요 마일스톤', labelEn: 'Key Milestones', type: 'textarea' },
          { key: 'startDate', labelKo: '사업 시작일', labelEn: 'Start Date', type: 'date' },
        ],
      },
    ],
    markdownTemplate: `# {{businessName}} 창업사업계획서

## 1. 사업 개요

- **사업명**: {{businessName}}
- **사업 분야**: {{businessField}}
- **목표 고객**: {{targetCustomer}}

### 사업 목적
{{businessPurpose}}

### 사업 요약
{{businessSummary}}

## 2. 창업자 소개

- **대표자명**: {{founderName}}
- **전문 분야**: {{founderExpertise}}

### 주요 경력
{{founderCareer}}

### 창업 동기
{{founderMotivation}}

## 3. 아이템 분석

### 제품/서비스 설명
{{itemDescription}}

### 경쟁 우위
{{itemAdvantage}}

### 차별화 요소
{{itemDifferentiation}}

### 핵심 기술
{{itemTechnology}}

## 4. 시장 분석

- **시장 규모**: {{marketSize}}

### 시장 트렌드
{{marketTrend}}

### 주요 경쟁자
{{competitors}}

### 시장 기회
{{marketOpportunity}}

## 5. 마케팅 전략

### 마케팅 전략
{{marketingStrategy}}

### 판매 채널
{{salesChannel}}

### 가격 전략
{{pricingStrategy}}

## 6. 운영 계획

- **사업 장소**: {{location}}

### 운영 방안
{{operationPlan}}

### 조직 구성
{{organization}}

## 7. 재무 계획

- **초기 투자금**: {{initialInvestment}}
- **손익분기점**: {{breakEvenPoint}}

### 매출 전망
{{revenueProjection}}

### 비용 구조
{{costStructure}}

## 8. 추진 일정

- **사업 시작일**: {{startDate}}

### 주요 마일스톤
{{milestones}}
`,
  },

  // ── 2. 중소기업 사업계획서 ──
  {
    type: 'sme',
    nameKo: '중소기업 사업계획서',
    nameEn: 'SME Business Plan',
    icon: '\u{1F3E2}',
    descKo: '기존 중소기업의 성장·확장 사업계획서',
    descEn: 'Business plan for SME growth and expansion',
    sections: [
      {
        id: 'company',
        titleKo: '기업 현황',
        titleEn: 'Company Status',
        fields: [
          { key: 'companyName', labelKo: '기업명', labelEn: 'Company Name', type: 'text', required: true },
          { key: 'establishedDate', labelKo: '설립일', labelEn: 'Established Date', type: 'date' },
          { key: 'employeeCount', labelKo: '종업원 수', labelEn: 'Employee Count', type: 'number' },
          { key: 'annualRevenue', labelKo: '연매출', labelEn: 'Annual Revenue', type: 'text' },
          { key: 'mainBusiness', labelKo: '주요 사업 내용', labelEn: 'Main Business', type: 'textarea', required: true },
        ],
      },
      {
        id: 'purpose',
        titleKo: '사업 목적 및 배경',
        titleEn: 'Purpose & Background',
        fields: [
          { key: 'smePurpose', labelKo: '사업 목적', labelEn: 'Purpose', type: 'textarea', required: true },
          { key: 'smeBackground', labelKo: '추진 배경', labelEn: 'Background', type: 'textarea' },
        ],
      },
      {
        id: 'product',
        titleKo: '제품/서비스',
        titleEn: 'Products/Services',
        fields: [
          { key: 'productList', labelKo: '주요 제품/서비스', labelEn: 'Main Products/Services', type: 'textarea', required: true },
          { key: 'productStrength', labelKo: '제품 강점', labelEn: 'Product Strengths', type: 'textarea' },
        ],
      },
      {
        id: 'competition',
        titleKo: '경쟁 분석',
        titleEn: 'Competition Analysis',
        fields: [
          { key: 'smeCompetitors', labelKo: '주요 경쟁사', labelEn: 'Key Competitors', type: 'textarea' },
          { key: 'smeSwot', labelKo: 'SWOT 분석', labelEn: 'SWOT Analysis', type: 'textarea' },
        ],
      },
      {
        id: 'sales',
        titleKo: '영업 전략',
        titleEn: 'Sales Strategy',
        fields: [
          { key: 'salesStrategy', labelKo: '영업 전략', labelEn: 'Sales Strategy', type: 'textarea' },
          { key: 'salesTarget', labelKo: '매출 목표', labelEn: 'Sales Target', type: 'text' },
        ],
      },
      {
        id: 'smeOperation',
        titleKo: '운영 계획',
        titleEn: 'Operations',
        fields: [
          { key: 'smeOperationPlan', labelKo: '운영 계획', labelEn: 'Operations Plan', type: 'textarea' },
          { key: 'smeQuality', labelKo: '품질 관리', labelEn: 'Quality Control', type: 'textarea' },
        ],
      },
      {
        id: 'smeOrg',
        titleKo: '조직 및 인력',
        titleEn: 'Organization',
        fields: [
          { key: 'smeOrgStructure', labelKo: '조직 구조', labelEn: 'Organization Structure', type: 'textarea' },
          { key: 'smeHrPlan', labelKo: '인력 계획', labelEn: 'HR Plan', type: 'textarea' },
        ],
      },
      {
        id: 'smeFinance',
        titleKo: '재무 계획',
        titleEn: 'Financial Plan',
        fields: [
          { key: 'smeFinancePlan', labelKo: '재무 계획', labelEn: 'Financial Plan', type: 'textarea' },
          { key: 'smeFundingNeeds', labelKo: '자금 소요', labelEn: 'Funding Needs', type: 'textarea' },
        ],
      },
      {
        id: 'risk',
        titleKo: '위험 관리',
        titleEn: 'Risk Management',
        fields: [
          { key: 'riskFactors', labelKo: '위험 요인', labelEn: 'Risk Factors', type: 'textarea' },
          { key: 'riskMitigation', labelKo: '대응 방안', labelEn: 'Mitigation Plans', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{companyName}} 사업계획서

## 1. 기업 현황

- **기업명**: {{companyName}}
- **설립일**: {{establishedDate}}
- **종업원 수**: {{employeeCount}}명
- **연매출**: {{annualRevenue}}

### 주요 사업 내용
{{mainBusiness}}

## 2. 사업 목적 및 배경

### 사업 목적
{{smePurpose}}

### 추진 배경
{{smeBackground}}

## 3. 제품/서비스

### 주요 제품/서비스
{{productList}}

### 제품 강점
{{productStrength}}

## 4. 경쟁 분석

### 주요 경쟁사
{{smeCompetitors}}

### SWOT 분석
{{smeSwot}}

## 5. 영업 전략

- **매출 목표**: {{salesTarget}}

### 영업 전략
{{salesStrategy}}

## 6. 운영 계획

### 운영 계획
{{smeOperationPlan}}

### 품질 관리
{{smeQuality}}

## 7. 조직 및 인력

### 조직 구조
{{smeOrgStructure}}

### 인력 계획
{{smeHrPlan}}

## 8. 재무 계획

### 재무 계획
{{smeFinancePlan}}

### 자금 소요
{{smeFundingNeeds}}

## 9. 위험 관리

### 위험 요인
{{riskFactors}}

### 대응 방안
{{riskMitigation}}
`,
  },

  // ── 3. 투자유치용 사업계획서 ──
  {
    type: 'investment',
    nameKo: '투자유치용 사업계획서',
    nameEn: 'Investment Pitch Plan',
    icon: '\u{1F4B0}',
    descKo: '투자자 대상 IR/피칭용 사업계획서',
    descEn: 'Business plan for investor relations and pitching',
    sections: [
      {
        id: 'execSummary',
        titleKo: '투자 요약 (Executive Summary)',
        titleEn: 'Executive Summary',
        fields: [
          { key: 'invCompanyName', labelKo: '회사명', labelEn: 'Company Name', type: 'text', required: true },
          { key: 'oneLiner', labelKo: '한 줄 소개', labelEn: 'One-liner', type: 'text', required: true },
          { key: 'fundingAmount', labelKo: '투자 희망 금액', labelEn: 'Funding Amount', type: 'text', required: true },
          { key: 'fundingRound', labelKo: '투자 라운드', labelEn: 'Funding Round', type: 'select', options: ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+'] },
        ],
      },
      {
        id: 'problem',
        titleKo: '문제 정의',
        titleEn: 'Problem',
        fields: [
          { key: 'problemStatement', labelKo: '해결하려는 문제', labelEn: 'Problem Statement', type: 'textarea', required: true },
          { key: 'painPoints', labelKo: '고객 페인포인트', labelEn: 'Customer Pain Points', type: 'textarea' },
        ],
      },
      {
        id: 'solution',
        titleKo: '솔루션',
        titleEn: 'Solution',
        fields: [
          { key: 'solutionDescription', labelKo: '솔루션 설명', labelEn: 'Solution Description', type: 'textarea', required: true },
          { key: 'uniqueValue', labelKo: '고유 가치 제안 (UVP)', labelEn: 'Unique Value Proposition', type: 'textarea' },
        ],
      },
      {
        id: 'marketSize',
        titleKo: '시장 규모 (TAM/SAM/SOM)',
        titleEn: 'Market Size (TAM/SAM/SOM)',
        fields: [
          { key: 'tam', labelKo: 'TAM (전체 시장)', labelEn: 'TAM (Total Addressable Market)', type: 'text' },
          { key: 'sam', labelKo: 'SAM (유효 시장)', labelEn: 'SAM (Serviceable Addressable Market)', type: 'text' },
          { key: 'som', labelKo: 'SOM (수익 시장)', labelEn: 'SOM (Serviceable Obtainable Market)', type: 'text' },
          { key: 'marketGrowth', labelKo: '시장 성장률', labelEn: 'Market Growth Rate', type: 'text' },
        ],
      },
      {
        id: 'bizModel',
        titleKo: '비즈니스 모델',
        titleEn: 'Business Model',
        fields: [
          { key: 'revenueModel', labelKo: '수익 모델', labelEn: 'Revenue Model', type: 'textarea', required: true },
          { key: 'unitEconomics', labelKo: '단위 경제성', labelEn: 'Unit Economics', type: 'textarea' },
        ],
      },
      {
        id: 'traction',
        titleKo: '트랙션/성과',
        titleEn: 'Traction',
        fields: [
          { key: 'keyMetrics', labelKo: '주요 지표', labelEn: 'Key Metrics', type: 'textarea' },
          { key: 'achievements', labelKo: '주요 성과', labelEn: 'Key Achievements', type: 'textarea' },
        ],
      },
      {
        id: 'team',
        titleKo: '팀 소개',
        titleEn: 'Team',
        fields: [
          { key: 'teamIntro', labelKo: '팀 소개', labelEn: 'Team Introduction', type: 'textarea', required: true },
          { key: 'advisors', labelKo: '자문단/멘토', labelEn: 'Advisors/Mentors', type: 'textarea' },
        ],
      },
      {
        id: 'funding',
        titleKo: '자금 운용 계획',
        titleEn: 'Use of Funds',
        fields: [
          { key: 'useOfFunds', labelKo: '자금 사용 계획', labelEn: 'Use of Funds', type: 'textarea', required: true },
          { key: 'runway', labelKo: '예상 런��이', labelEn: 'Expected Runway', type: 'text' },
        ],
      },
      {
        id: 'exit',
        titleKo: '출구 전략',
        titleEn: 'Exit Strategy',
        fields: [
          { key: 'exitStrategy', labelKo: '출구 전략', labelEn: 'Exit Strategy', type: 'textarea' },
          { key: 'comparableExits', labelKo: '유사 Exit 사례', labelEn: 'Comparable Exits', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{invCompanyName}} 투자유치용 사업계획서

> {{oneLiner}}

## 1. 투자 요약 (Executive Summary)

- **회사명**: {{invCompanyName}}
- **투자 라운드**: {{fundingRound}}
- **투자 희망 금액**: {{fundingAmount}}

## 2. 문제 정의

### 해결하려는 문제
{{problemStatement}}

### 고객 페인포인트
{{painPoints}}

## 3. 솔루션

### 솔루션 설명
{{solutionDescription}}

### 고유 가치 제안 (UVP)
{{uniqueValue}}

## 4. 시장 규모

| 구분 | 규모 |
|------|------|
| TAM (전체 시장) | {{tam}} |
| SAM (유효 시장) | {{sam}} |
| SOM (수익 시장) | {{som}} |

- **시장 성장률**: {{marketGrowth}}

## 5. 비즈니스 모델

### 수익 모델
{{revenueModel}}

### 단위 경제성
{{unitEconomics}}

## 6. 트랙션/성과

### 주요 지표
{{keyMetrics}}

### 주요 성과
{{achievements}}

## 7. 팀 소개

### 팀 소개
{{teamIntro}}

### 자문단/멘토
{{advisors}}

## 8. 자금 운용 계획

- **예상 런웨이**: {{runway}}

### 자금 사용 계획
{{useOfFunds}}

## 9. 출구 전략

### 출구 전략
{{exitStrategy}}

### 유사 Exit 사례
{{comparableExits}}
`,
  },

  // ── 4. 정부과제 사업계획서 ──
  {
    type: 'government',
    nameKo: '정부과제 사업계획서',
    nameEn: 'Government Project Plan',
    icon: '\u{1F3DB}',
    descKo: '정부 R&D 및 지원사업 신청용 사업계획서',
    descEn: 'Business plan for government R&D and support programs',
    sections: [
      {
        id: 'projectOverview',
        titleKo: '과제 개요',
        titleEn: 'Project Overview',
        fields: [
          { key: 'projectTitle', labelKo: '과제명', labelEn: 'Project Title', type: 'text', required: true },
          { key: 'projectPeriod', labelKo: '수행 기간', labelEn: 'Project Period', type: 'text', required: true },
          { key: 'leadOrganization', labelKo: '주관 기관', labelEn: 'Lead Organization', type: 'text', required: true },
          { key: 'projectSummary', labelKo: '과제 요약', labelEn: 'Project Summary', type: 'textarea', required: true },
        ],
      },
      {
        id: 'techGoal',
        titleKo: '기술개발 목표',
        titleEn: 'Technology Development Goals',
        fields: [
          { key: 'finalGoal', labelKo: '최종 목표', labelEn: 'Final Goal', type: 'textarea', required: true },
          { key: 'yearlyGoals', labelKo: '연차별 목표', labelEn: 'Yearly Goals', type: 'textarea' },
          { key: 'techSpecs', labelKo: '목표 기술 사양', labelEn: 'Target Technical Specs', type: 'textarea' },
        ],
      },
      {
        id: 'devContent',
        titleKo: '개발 내용',
        titleEn: 'Development Content',
        fields: [
          { key: 'devScope', labelKo: '개발 범위', labelEn: 'Development Scope', type: 'textarea', required: true },
          { key: 'devMethod', labelKo: '개발 방법', labelEn: 'Development Method', type: 'textarea' },
          { key: 'coreTech', labelKo: '핵심 기술', labelEn: 'Core Technology', type: 'textarea' },
        ],
      },
      {
        id: 'govSchedule',
        titleKo: '추진 일정',
        titleEn: 'Schedule',
        fields: [
          { key: 'govMilestones', labelKo: '단계별 추진 일정', labelEn: 'Phase Schedule', type: 'textarea', required: true },
        ],
      },
      {
        id: 'participants',
        titleKo: '참여 인력',
        titleEn: 'Participants',
        fields: [
          { key: 'pmInfo', labelKo: '과제 책임자 (PM)', labelEn: 'Project Manager', type: 'textarea', required: true },
          { key: 'participantList', labelKo: '참여 인력 현황', labelEn: 'Participant List', type: 'textarea' },
        ],
      },
      {
        id: 'impact',
        titleKo: '기대 효과',
        titleEn: 'Expected Impact',
        fields: [
          { key: 'techImpact', labelKo: '기술적 기대효과', labelEn: 'Technical Impact', type: 'textarea' },
          { key: 'economicImpact', labelKo: '경제적 기대효과', labelEn: 'Economic Impact', type: 'textarea' },
          { key: 'socialImpact', labelKo: '사회적 기대효과', labelEn: 'Social Impact', type: 'textarea' },
        ],
      },
      {
        id: 'govMarket',
        titleKo: '시장 분석',
        titleEn: 'Market Analysis',
        fields: [
          { key: 'govMarketSize', labelKo: '국내외 시장 규모', labelEn: 'Market Size', type: 'textarea' },
          { key: 'govMarketTrend', labelKo: '기술/시장 동향', labelEn: 'Market Trends', type: 'textarea' },
        ],
      },
      {
        id: 'commercialization',
        titleKo: '사업화 계획',
        titleEn: 'Commercialization Plan',
        fields: [
          { key: 'commercializationPlan', labelKo: '사업화 전략', labelEn: 'Commercialization Strategy', type: 'textarea' },
          { key: 'salesProjection', labelKo: '매출 전망', labelEn: 'Sales Projection', type: 'textarea' },
        ],
      },
      {
        id: 'budget',
        titleKo: '소요 예산',
        titleEn: 'Budget',
        fields: [
          { key: 'totalBudget', labelKo: '총 사업비', labelEn: 'Total Budget', type: 'text', required: true },
          { key: 'govFunding', labelKo: '정부 출연금', labelEn: 'Government Funding', type: 'text' },
          { key: 'selfFunding', labelKo: '자기 부담금', labelEn: 'Self Funding', type: 'text' },
          { key: 'budgetDetail', labelKo: '세부 예산', labelEn: 'Budget Detail', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{projectTitle}}

## 정부과제 사업계획서

### 과제 개요

| 항목 | 내용 |
|------|------|
| 과제명 | {{projectTitle}} |
| 수행 기간 | {{projectPeriod}} |
| 주관 기관 | {{leadOrganization}} |

### 과제 요약
{{projectSummary}}

## 1. 기술개발 목표

### 최종 목표
{{finalGoal}}

### 연차별 목표
{{yearlyGoals}}

### 목표 기술 사양
{{techSpecs}}

## 2. 개발 내용

### 개발 범위
{{devScope}}

### 개발 방법
{{devMethod}}

### 핵심 기술
{{coreTech}}

## 3. 추진 일정

{{govMilestones}}

## 4. 참여 인력

### 과제 책임자 (PM)
{{pmInfo}}

### 참여 인력 현황
{{participantList}}

## 5. 기대 효과

### 기술적 기대효과
{{techImpact}}

### 경제적 기대효과
{{economicImpact}}

### 사회적 기대효과
{{socialImpact}}

## 6. 시장 분석

### 국내외 시장 규모
{{govMarketSize}}

### 기술/시장 동향
{{govMarketTrend}}

## 7. 사업화 계획

### 사업화 전략
{{commercializationPlan}}

### 매출 전망
{{salesProjection}}

## 8. 소요 예산

| 항목 | 금액 |
|------|------|
| 총 사업비 | {{totalBudget}} |
| 정부 출연금 | {{govFunding}} |
| 자기 부담금 | {{selfFunding}} |

### 세부 예산
{{budgetDetail}}
`,
  },
];
