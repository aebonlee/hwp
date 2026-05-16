import type { BusinessPlanTemplate } from '../types';

export const governmentTemplates: BusinessPlanTemplate[] = [
  // ── 1. 예비창업패키지 ──
  {
    type: 'gov-prestartup',
    nameKo: '예비창업패키지',
    nameEn: 'Pre-Startup Package',
    icon: '🌱',
    descKo: '중소벤처기업부/창업진흥원 예비창업자 지원사업',
    descEn: 'KISED Pre-Startup Support Program',
    category: 'government',
    sections: [
      {
        id: 'applicant',
        titleKo: '예비창업자 정보',
        titleEn: 'Applicant Information',
        fields: [
          { key: 'applicantName', labelKo: '신청자명', labelEn: 'Applicant Name', type: 'text', required: true },
          { key: 'applicantBirth', labelKo: '생년월일', labelEn: 'Date of Birth', type: 'date' },
          { key: 'career', labelKo: '주요 경력 및 학력', labelEn: 'Career & Education', type: 'textarea', required: true },
          { key: 'preStartupMotivation', labelKo: '창업 동기', labelEn: 'Startup Motivation', type: 'textarea' },
        ],
      },
      {
        id: 'itemOverview',
        titleKo: '창업아이템 개요',
        titleEn: 'Startup Item Overview',
        fields: [
          { key: 'itemTitle', labelKo: '아이템명', labelEn: 'Item Title', type: 'text', required: true },
          { key: 'itemSummary', labelKo: '아이템 요약', labelEn: 'Item Summary', type: 'textarea', required: true },
          { key: 'itemCategory', labelKo: '업종/분야', labelEn: 'Industry/Field', type: 'text', required: true },
        ],
      },
      {
        id: 'innovation',
        titleKo: '아이템 혁신성·차별성',
        titleEn: 'Innovation & Differentiation',
        fields: [
          { key: 'innovationPoint', labelKo: '혁신성 (기존 대비 개선점)', labelEn: 'Innovation Points', type: 'textarea', required: true },
          { key: 'techDiff', labelKo: '기술적 차별성', labelEn: 'Technical Differentiation', type: 'textarea', required: true },
          { key: 'ipStatus', labelKo: '지식재산권 현황', labelEn: 'IP Status', type: 'textarea' },
        ],
      },
      {
        id: 'market',
        titleKo: '시장분석 및 경쟁력',
        titleEn: 'Market Analysis & Competitiveness',
        fields: [
          { key: 'targetMarket', labelKo: '목표 시장', labelEn: 'Target Market', type: 'textarea', required: true },
          { key: 'preMarketSize', labelKo: '시장 규모 (국내/해외)', labelEn: 'Market Size (Domestic/Global)', type: 'textarea' },
          { key: 'preCompetitors', labelKo: '경쟁자 분석', labelEn: 'Competitor Analysis', type: 'textarea' },
          { key: 'competitiveEdge', labelKo: '경쟁 우위 요소', labelEn: 'Competitive Advantage', type: 'textarea' },
        ],
      },
      {
        id: 'bizModel',
        titleKo: 'BM·수익모델',
        titleEn: 'Business Model & Revenue',
        fields: [
          { key: 'businessModel', labelKo: '비즈니스 모델', labelEn: 'Business Model', type: 'textarea', required: true },
          { key: 'revenueModel', labelKo: '수익 모델', labelEn: 'Revenue Model', type: 'textarea', required: true },
          { key: 'salesStrategy', labelKo: '판매/마케팅 전략', labelEn: 'Sales/Marketing Strategy', type: 'textarea' },
        ],
      },
      {
        id: 'execution',
        titleKo: '사업화 전략',
        titleEn: 'Commercialization Strategy',
        fields: [
          { key: 'bizStrategy', labelKo: '사업화 추진 전략', labelEn: 'Commercialization Plan', type: 'textarea', required: true },
          { key: 'protoType', labelKo: '시제품/MVP 계획', labelEn: 'Prototype/MVP Plan', type: 'textarea' },
        ],
      },
      {
        id: 'schedule',
        titleKo: '추진일정·마일스톤',
        titleEn: 'Schedule & Milestones',
        fields: [
          { key: 'preMilestones', labelKo: '단계별 추진 일정', labelEn: 'Phase Schedule', type: 'textarea', required: true },
        ],
      },
      {
        id: 'budget',
        titleKo: '소요자금 및 자금운용계획',
        titleEn: 'Budget & Fund Plan',
        fields: [
          { key: 'budgetTotal', labelKo: '총 소요자금', labelEn: 'Total Budget', type: 'text', required: true },
          { key: 'preGovFunding', labelKo: '정부지원금 신청액', labelEn: 'Government Funding Request', type: 'text', required: true },
          { key: 'preSelfFunding', labelKo: '자기부담금', labelEn: 'Self Funding', type: 'text' },
          { key: 'budgetBreakdown', labelKo: '세부 자금 사용계획', labelEn: 'Budget Breakdown', type: 'textarea' },
        ],
      },
      {
        id: 'impact',
        titleKo: '기대효과',
        titleEn: 'Expected Outcomes',
        fields: [
          { key: 'revenue3yr', labelKo: '3년 매출 전망', labelEn: '3-Year Revenue Forecast', type: 'textarea' },
          { key: 'jobCreation', labelKo: '고용 창출 계획', labelEn: 'Job Creation Plan', type: 'textarea' },
          { key: 'socialImpactPre', labelKo: '사회적 기대효과', labelEn: 'Social Impact', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# 예비창업패키지 사업계획서

## 예비창업자 정보

| 항목 | 내용 |
|------|------|
| 신청자명 | {{applicantName}} |
| 생년월일 | {{applicantBirth}} |

### 주요 경력 및 학력
{{career}}

### 창업 동기
{{preStartupMotivation}}

## 1. 창업아이템 개요

| 항목 | 내용 |
|------|------|
| 아이템명 | {{itemTitle}} |
| 업종/분야 | {{itemCategory}} |

### 아이템 요약
{{itemSummary}}

## 2. 아이템 혁신성·차별성

### 혁신성 (기존 대비 개선점)
{{innovationPoint}}

### 기술적 차별성
{{techDiff}}

### 지식재산권 현황
{{ipStatus}}

## 3. 시장분석 및 경쟁력

### 목표 시장
{{targetMarket}}

### 시장 규모
{{preMarketSize}}

### 경쟁자 분석
{{preCompetitors}}

### 경쟁 우위 요소
{{competitiveEdge}}

## 4. BM·수익모델

### 비즈니스 모델
{{businessModel}}

### 수익 모델
{{revenueModel}}

### 판매/마케팅 전략
{{salesStrategy}}

## 5. 사업화 전략

### 사업화 추진 전략
{{bizStrategy}}

### 시제품/MVP 계획
{{protoType}}

## 6. 추진일정·마일스톤

{{preMilestones}}

## 7. 소요자금 및 자금운용계획

| 항목 | 금액 |
|------|------|
| 총 소요자금 | {{budgetTotal}} |
| 정부지원금 신청액 | {{preGovFunding}} |
| 자기부담금 | {{preSelfFunding}} |

### 세부 자금 사용계획
{{budgetBreakdown}}

## 8. 기대효과

### 3년 매출 전망
{{revenue3yr}}

### 고용 창출 계획
{{jobCreation}}

### 사회적 기대효과
{{socialImpactPre}}
`,
  },

  // ── 2. 초기창업패키지 ──
  {
    type: 'gov-earlystartup',
    nameKo: '초기창업패키지',
    nameEn: 'Early-Stage Startup Package',
    icon: '🚀',
    descKo: '3년 이내 창업기업 대상 초기창업 지원사업',
    descEn: 'Support program for startups within 3 years',
    category: 'government',
    sections: [
      {
        id: 'companyStatus',
        titleKo: '기업 현황',
        titleEn: 'Company Status',
        fields: [
          { key: 'earlyCompanyName', labelKo: '기업명', labelEn: 'Company Name', type: 'text', required: true },
          { key: 'earlyRepName', labelKo: '대표자명', labelEn: 'CEO Name', type: 'text', required: true },
          { key: 'earlyEstDate', labelKo: '설립일', labelEn: 'Established Date', type: 'date', required: true },
          { key: 'earlyBizNumber', labelKo: '사업자등록번호', labelEn: 'Business Registration Number', type: 'text' },
          { key: 'earlyEmployees', labelKo: '상시근로자 수', labelEn: 'Number of Employees', type: 'number' },
          { key: 'earlyAddress', labelKo: '소재지', labelEn: 'Location', type: 'text' },
        ],
      },
      {
        id: 'earlyItem',
        titleKo: '창업아이템',
        titleEn: 'Startup Item',
        fields: [
          { key: 'earlyItemName', labelKo: '아이템명', labelEn: 'Item Name', type: 'text', required: true },
          { key: 'earlyItemDesc', labelKo: '아이템 설명', labelEn: 'Item Description', type: 'textarea', required: true },
          { key: 'earlyItemDiff', labelKo: '차별성 및 혁신성', labelEn: 'Differentiation & Innovation', type: 'textarea', required: true },
        ],
      },
      {
        id: 'earlyTech',
        titleKo: '기술/IP 현황',
        titleEn: 'Technology/IP Status',
        fields: [
          { key: 'earlyCoreTech', labelKo: '핵심 보유 기술', labelEn: 'Core Technology', type: 'textarea', required: true },
          { key: 'earlyIpList', labelKo: '지식재산권 보유 현황', labelEn: 'IP Holdings', type: 'textarea' },
          { key: 'earlyTechRoadmap', labelKo: '기술 개발 로드맵', labelEn: 'Technology Roadmap', type: 'textarea' },
        ],
      },
      {
        id: 'earlyMarket',
        titleKo: '시장분석',
        titleEn: 'Market Analysis',
        fields: [
          { key: 'earlyTargetMarket', labelKo: '목표 시장 및 고객', labelEn: 'Target Market & Customers', type: 'textarea', required: true },
          { key: 'earlyMarketSize', labelKo: '시장 규모 및 성장성', labelEn: 'Market Size & Growth', type: 'textarea' },
          { key: 'earlyCompetitorAnalysis', labelKo: '경쟁 환경 분석', labelEn: 'Competitive Landscape', type: 'textarea' },
        ],
      },
      {
        id: 'earlyBizStrategy',
        titleKo: '사업화 전략',
        titleEn: 'Commercialization Strategy',
        fields: [
          { key: 'earlyBizModel', labelKo: '비즈니스 모델', labelEn: 'Business Model', type: 'textarea', required: true },
          { key: 'earlySalesStrategy', labelKo: '판로 개척 전략', labelEn: 'Sales Strategy', type: 'textarea' },
          { key: 'earlyMarketingPlan', labelKo: '마케팅 계획', labelEn: 'Marketing Plan', type: 'textarea' },
        ],
      },
      {
        id: 'earlyGrowth',
        titleKo: '성장전략',
        titleEn: 'Growth Strategy',
        fields: [
          { key: 'earlyGrowthPlan', labelKo: '중장기 성장 전략', labelEn: 'Mid-Long Term Growth Plan', type: 'textarea', required: true },
          { key: 'earlyScaleup', labelKo: '스케일업 계획', labelEn: 'Scale-up Plan', type: 'textarea' },
          { key: 'earlyGlobalPlan', labelKo: '해외 진출 계획', labelEn: 'Global Expansion Plan', type: 'textarea' },
        ],
      },
      {
        id: 'earlyTeam',
        titleKo: '팀 구성',
        titleEn: 'Team Composition',
        fields: [
          { key: 'earlyTeamIntro', labelKo: '핵심 인력 현황', labelEn: 'Key Personnel', type: 'textarea', required: true },
          { key: 'earlyHiringPlan', labelKo: '인력 충원 계획', labelEn: 'Hiring Plan', type: 'textarea' },
        ],
      },
      {
        id: 'earlyBudget',
        titleKo: '자금운용계획',
        titleEn: 'Budget Plan',
        fields: [
          { key: 'earlyTotalBudget', labelKo: '총 사업비', labelEn: 'Total Budget', type: 'text', required: true },
          { key: 'earlyGovAmount', labelKo: '정부지원금', labelEn: 'Government Funding', type: 'text', required: true },
          { key: 'earlySelfAmount', labelKo: '자부담금', labelEn: 'Self Funding', type: 'text' },
          { key: 'earlyBudgetDetail', labelKo: '세부 자금운용 계획', labelEn: 'Detailed Budget Plan', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# 초기창업패키지 사업계획서

## 기업 현황

| 항목 | 내용 |
|------|------|
| 기업명 | {{earlyCompanyName}} |
| 대표자명 | {{earlyRepName}} |
| 설립일 | {{earlyEstDate}} |
| 사업자등록번호 | {{earlyBizNumber}} |
| 상시근로자 수 | {{earlyEmployees}}명 |
| 소재지 | {{earlyAddress}} |

## 1. 창업아이템

### 아이템명
{{earlyItemName}}

### 아이템 설명
{{earlyItemDesc}}

### 차별성 및 혁신성
{{earlyItemDiff}}

## 2. 기술/IP 현황

### 핵심 보유 기술
{{earlyCoreTech}}

### 지식재산권 보유 현황
{{earlyIpList}}

### 기술 개발 로드맵
{{earlyTechRoadmap}}

## 3. 시장분석

### 목표 시장 및 고객
{{earlyTargetMarket}}

### 시장 규모 및 성장성
{{earlyMarketSize}}

### 경쟁 환경 분석
{{earlyCompetitorAnalysis}}

## 4. 사업화 전략

### 비즈니스 모델
{{earlyBizModel}}

### 판로 개척 전략
{{earlySalesStrategy}}

### 마케팅 계획
{{earlyMarketingPlan}}

## 5. 성장전략

### 중장기 성장 전략
{{earlyGrowthPlan}}

### 스케일업 계획
{{earlyScaleup}}

### 해외 진출 계획
{{earlyGlobalPlan}}

## 6. 팀 구성

### 핵심 인력 현황
{{earlyTeamIntro}}

### 인력 충원 계획
{{earlyHiringPlan}}

## 7. 자금운용계획

| 항목 | 금액 |
|------|------|
| 총 사업비 | {{earlyTotalBudget}} |
| 정부지원금 | {{earlyGovAmount}} |
| 자부담금 | {{earlySelfAmount}} |

### 세부 자금운용 계획
{{earlyBudgetDetail}}
`,
  },

  // ── 3. 소상공인 정책자금 ──
  {
    type: 'gov-smallbiz',
    nameKo: '소상공인 정책자금',
    nameEn: 'Small Business Policy Fund',
    icon: '🏪',
    descKo: '소상공인시장진흥공단 정책자금 신청서',
    descEn: 'Small Enterprise & Market Service Policy Fund Application',
    category: 'government',
    sections: [
      {
        id: 'sbApplicant',
        titleKo: '신청인 정보',
        titleEn: 'Applicant Information',
        fields: [
          { key: 'sbName', labelKo: '상호/법인명', labelEn: 'Business Name', type: 'text', required: true },
          { key: 'sbRepName', labelKo: '대표자명', labelEn: 'Representative', type: 'text', required: true },
          { key: 'sbBizNumber', labelKo: '사업자등록번호', labelEn: 'Business Registration No.', type: 'text', required: true },
          { key: 'sbIndustry', labelKo: '업종', labelEn: 'Industry', type: 'text', required: true },
          { key: 'sbEstDate', labelKo: '개업일', labelEn: 'Opening Date', type: 'date' },
        ],
      },
      {
        id: 'sbLocation',
        titleKo: '사업장 현황',
        titleEn: 'Business Location Status',
        fields: [
          { key: 'sbAddress', labelKo: '사업장 주소', labelEn: 'Business Address', type: 'text', required: true },
          { key: 'sbSize', labelKo: '사업장 규모 (면적)', labelEn: 'Business Area Size', type: 'text' },
          { key: 'sbEmployees', labelKo: '종업원 수', labelEn: 'Employee Count', type: 'number' },
          { key: 'sbOwnership', labelKo: '소유/임차 여부', labelEn: 'Ownership Type', type: 'select', options: ['자가', '임차', '기타'] },
        ],
      },
      {
        id: 'sbBusiness',
        titleKo: '사업 내용',
        titleEn: 'Business Description',
        fields: [
          { key: 'sbDescription', labelKo: '주요 사업 내용', labelEn: 'Main Business Activities', type: 'textarea', required: true },
          { key: 'sbProducts', labelKo: '주요 상품/서비스', labelEn: 'Main Products/Services', type: 'textarea', required: true },
          { key: 'sbCustomers', labelKo: '주요 고객층', labelEn: 'Target Customers', type: 'textarea' },
          { key: 'sbStrength', labelKo: '사업 경쟁력', labelEn: 'Business Competitiveness', type: 'textarea' },
        ],
      },
      {
        id: 'sbFundUse',
        titleKo: '자금 사용계획',
        titleEn: 'Fund Usage Plan',
        fields: [
          { key: 'sbLoanAmount', labelKo: '신청 금액', labelEn: 'Requested Amount', type: 'text', required: true },
          { key: 'sbLoanPurpose', labelKo: '자금 용도', labelEn: 'Fund Purpose', type: 'select', options: ['운전자금', '시설자금', '운전+시설', '긴급경영안정자금'] },
          { key: 'sbFundDetail', labelKo: '세부 사용계획', labelEn: 'Detailed Usage Plan', type: 'textarea', required: true },
        ],
      },
      {
        id: 'sbRepayment',
        titleKo: '상환계획',
        titleEn: 'Repayment Plan',
        fields: [
          { key: 'sbRepaymentPlan', labelKo: '상환 계획', labelEn: 'Repayment Plan', type: 'textarea', required: true },
          { key: 'sbRepaymentSource', labelKo: '상환 재원', labelEn: 'Repayment Source', type: 'textarea' },
        ],
      },
      {
        id: 'sbFinance',
        titleKo: '매출·재무현황',
        titleEn: 'Sales & Financial Status',
        fields: [
          { key: 'sbAnnualRevenue', labelKo: '최근 연 매출액', labelEn: 'Recent Annual Revenue', type: 'text' },
          { key: 'sbMonthlyRevenue', labelKo: '월 평균 매출액', labelEn: 'Average Monthly Revenue', type: 'text' },
          { key: 'sbDebtStatus', labelKo: '부채 현황', labelEn: 'Debt Status', type: 'textarea' },
          { key: 'sbCreditGrade', labelKo: '신용등급', labelEn: 'Credit Rating', type: 'text' },
        ],
      },
    ],
    markdownTemplate: `# 소상공인 정책자금 신청서

## 신청인 정보

| 항목 | 내용 |
|------|------|
| 상호/법인명 | {{sbName}} |
| 대표자명 | {{sbRepName}} |
| 사업자등록번호 | {{sbBizNumber}} |
| 업종 | {{sbIndustry}} |
| 개업일 | {{sbEstDate}} |

## 1. 사업장 현황

| 항목 | 내용 |
|------|------|
| 사업장 주소 | {{sbAddress}} |
| 사업장 규모 | {{sbSize}} |
| 종업원 수 | {{sbEmployees}}명 |
| 소유/임차 | {{sbOwnership}} |

## 2. 사업 내용

### 주요 사업 내용
{{sbDescription}}

### 주요 상품/서비스
{{sbProducts}}

### 주요 고객층
{{sbCustomers}}

### 사업 경쟁력
{{sbStrength}}

## 3. 자금 사용계획

| 항목 | 내용 |
|------|------|
| 신청 금액 | {{sbLoanAmount}} |
| 자금 용도 | {{sbLoanPurpose}} |

### 세부 사용계획
{{sbFundDetail}}

## 4. 상환계획

### 상환 계획
{{sbRepaymentPlan}}

### 상환 재원
{{sbRepaymentSource}}

## 5. 매출·재무현황

| 항목 | 내용 |
|------|------|
| 최근 연 매출액 | {{sbAnnualRevenue}} |
| 월 평균 매출액 | {{sbMonthlyRevenue}} |
| 신용등급 | {{sbCreditGrade}} |

### 부채 현황
{{sbDebtStatus}}
`,
  },

  // ── 4. 기술개발 R&D ──
  {
    type: 'gov-rnd',
    nameKo: '기술개발 R&D 사업계획서',
    nameEn: 'R&D Project Plan',
    icon: '🔬',
    descKo: '정부 R&D 기술개발 과제 신청용 사업계획서',
    descEn: 'Government R&D Technology Development Project Plan',
    category: 'government',
    sections: [
      {
        id: 'rndSummary',
        titleKo: '과제 총괄표',
        titleEn: 'Project Summary',
        fields: [
          { key: 'rndTitle', labelKo: '과제명', labelEn: 'Project Title', type: 'text', required: true },
          { key: 'rndProgram', labelKo: '사업명/공고명', labelEn: 'Program Name', type: 'text' },
          { key: 'rndPeriod', labelKo: '연구개발 기간', labelEn: 'R&D Period', type: 'text', required: true },
          { key: 'rndOrganization', labelKo: '주관연구기관', labelEn: 'Lead Research Institution', type: 'text', required: true },
          { key: 'rndPI', labelKo: '연구책임자', labelEn: 'Principal Investigator', type: 'text', required: true },
          { key: 'rndCoOrg', labelKo: '참여기관', labelEn: 'Participating Organizations', type: 'textarea' },
        ],
      },
      {
        id: 'rndNecessity',
        titleKo: '기술개발 필요성',
        titleEn: 'R&D Necessity',
        fields: [
          { key: 'rndBackground', labelKo: '연구개발 배경 및 필요성', labelEn: 'R&D Background & Necessity', type: 'textarea', required: true },
          { key: 'rndProblem', labelKo: '현재 기술적 한계/문제점', labelEn: 'Current Technical Limitations', type: 'textarea', required: true },
        ],
      },
      {
        id: 'rndTrend',
        titleKo: '국내외 기술동향',
        titleEn: 'Technology Trends',
        fields: [
          { key: 'rndDomesticTrend', labelKo: '국내 기술동향', labelEn: 'Domestic Technology Trends', type: 'textarea', required: true },
          { key: 'rndGlobalTrend', labelKo: '국외 기술동향', labelEn: 'Global Technology Trends', type: 'textarea' },
          { key: 'rndPriorArt', labelKo: '선행연구 분석', labelEn: 'Prior Art Analysis', type: 'textarea' },
        ],
      },
      {
        id: 'rndGoal',
        titleKo: '개발 목표·내용',
        titleEn: 'Development Goals & Content',
        fields: [
          { key: 'rndFinalGoal', labelKo: '최종 개발 목표', labelEn: 'Final Development Goal', type: 'textarea', required: true },
          { key: 'rndYearlyGoal', labelKo: '연차별 개발 목표', labelEn: 'Yearly Development Goals', type: 'textarea' },
          { key: 'rndDevContent', labelKo: '세부 개발 내용', labelEn: 'Detailed Development Content', type: 'textarea', required: true },
          { key: 'rndSpecs', labelKo: '목표 성능 지표', labelEn: 'Target Performance Specs', type: 'textarea' },
        ],
      },
      {
        id: 'rndEquip',
        titleKo: '연구장비·시설',
        titleEn: 'Research Equipment & Facilities',
        fields: [
          { key: 'rndExistingEquip', labelKo: '보유 연구장비 현황', labelEn: 'Existing Equipment', type: 'textarea' },
          { key: 'rndNewEquip', labelKo: '신규 장비 구매 계획', labelEn: 'New Equipment Purchase Plan', type: 'textarea' },
        ],
      },
      {
        id: 'rndSystem',
        titleKo: '추진체계',
        titleEn: 'Implementation System',
        fields: [
          { key: 'rndOrgChart', labelKo: '연구 추진체계', labelEn: 'R&D Organization Chart', type: 'textarea', required: true },
          { key: 'rndSchedule', labelKo: '추진 일정', labelEn: 'Schedule', type: 'textarea', required: true },
        ],
      },
      {
        id: 'rndTeam',
        titleKo: '연구인력',
        titleEn: 'Research Personnel',
        fields: [
          { key: 'rndPIProfile', labelKo: '연구책임자 이력', labelEn: 'PI Profile', type: 'textarea', required: true },
          { key: 'rndResearchers', labelKo: '참여 연구원 현황', labelEn: 'Research Team', type: 'textarea' },
        ],
      },
      {
        id: 'rndComm',
        titleKo: '사업화 계획',
        titleEn: 'Commercialization Plan',
        fields: [
          { key: 'rndCommPlan', labelKo: '사업화 추진 계획', labelEn: 'Commercialization Plan', type: 'textarea', required: true },
          { key: 'rndMarketAnalysis', labelKo: '시장 분석 및 매출 전망', labelEn: 'Market Analysis & Revenue Forecast', type: 'textarea' },
          { key: 'rndIpStrategy', labelKo: 'IP 전략', labelEn: 'IP Strategy', type: 'textarea' },
        ],
      },
      {
        id: 'rndBudget',
        titleKo: '연구비 편성',
        titleEn: 'R&D Budget',
        fields: [
          { key: 'rndTotalBudget', labelKo: '총 연구비', labelEn: 'Total R&D Budget', type: 'text', required: true },
          { key: 'rndGovFunding', labelKo: '정부출연금', labelEn: 'Government Funding', type: 'text', required: true },
          { key: 'rndMatchFunding', labelKo: '민간부담금', labelEn: 'Private Match', type: 'text' },
          { key: 'rndBudgetDetail', labelKo: '비목별 연구비 내역', labelEn: 'Budget by Category', type: 'textarea', required: true },
        ],
      },
    ],
    markdownTemplate: `# {{rndTitle}}

## 기술개발 R&D 사업계획서

### 과제 총괄표

| 항목 | 내용 |
|------|------|
| 과제명 | {{rndTitle}} |
| 사업명/공고명 | {{rndProgram}} |
| 연구개발 기간 | {{rndPeriod}} |
| 주관연구기관 | {{rndOrganization}} |
| 연구책임자 | {{rndPI}} |

### 참여기관
{{rndCoOrg}}

## 1. 기술개발 필요성

### 연구개발 배경 및 필요성
{{rndBackground}}

### 현재 기술적 한계/문제점
{{rndProblem}}

## 2. 국내외 기술동향

### 국내 기술동향
{{rndDomesticTrend}}

### 국외 기술동향
{{rndGlobalTrend}}

### 선행연구 분석
{{rndPriorArt}}

## 3. 개발 목표·내용

### 최종 개발 목표
{{rndFinalGoal}}

### 연차별 개발 목표
{{rndYearlyGoal}}

### 세부 개발 내용
{{rndDevContent}}

### 목표 성능 지표
{{rndSpecs}}

## 4. 연구장비·시설

### 보유 연구장비 현황
{{rndExistingEquip}}

### 신규 장비 구매 계획
{{rndNewEquip}}

## 5. 추진체계

### 연구 추진체계
{{rndOrgChart}}

### 추진 일정
{{rndSchedule}}

## 6. 연구인력

### 연구책임자 이력
{{rndPIProfile}}

### 참여 연구원 현황
{{rndResearchers}}

## 7. 사업화 계획

### 사업화 추진 계획
{{rndCommPlan}}

### 시장 분석 및 매출 전망
{{rndMarketAnalysis}}

### IP 전략
{{rndIpStrategy}}

## 8. 연구비 편성

| 항목 | 금액 |
|------|------|
| 총 연구비 | {{rndTotalBudget}} |
| 정부출연금 | {{rndGovFunding}} |
| 민간부담금 | {{rndMatchFunding}} |

### 비목별 연구비 내역
{{rndBudgetDetail}}
`,
  },

  // ── 5. 사회적기업 육성사업 ──
  {
    type: 'gov-social',
    nameKo: '사회적기업 육성사업',
    nameEn: 'Social Enterprise Development',
    icon: '🤝',
    descKo: '한국사회적기업진흥원 사회적기업 육성사업 신청서',
    descEn: 'Korea Social Enterprise Promotion Agency Development Program',
    category: 'government',
    sections: [
      {
        id: 'seOverview',
        titleKo: '기업 개요',
        titleEn: 'Enterprise Overview',
        fields: [
          { key: 'seName', labelKo: '기업명', labelEn: 'Enterprise Name', type: 'text', required: true },
          { key: 'seType', labelKo: '조직 형태', labelEn: 'Organization Type', type: 'select', options: ['사회적기업(인증)', '예비사회적기업', '사회적협동조합', '마을기업', '자활기업'], required: true },
          { key: 'seRepName', labelKo: '대표자명', labelEn: 'Representative', type: 'text', required: true },
          { key: 'seEstDate', labelKo: '설립일', labelEn: 'Established Date', type: 'date' },
          { key: 'seEmployees', labelKo: '총 근로자 수', labelEn: 'Total Employees', type: 'number' },
          { key: 'seDescription', labelKo: '기업 소개', labelEn: 'Enterprise Description', type: 'textarea', required: true },
        ],
      },
      {
        id: 'sePurpose',
        titleKo: '사회적 목적',
        titleEn: 'Social Purpose',
        fields: [
          { key: 'seMission', labelKo: '사회적 미션', labelEn: 'Social Mission', type: 'textarea', required: true },
          { key: 'seSocialGoal', labelKo: '사회적 목적 유형', labelEn: 'Social Purpose Type', type: 'select', options: ['일자리제공형', '사회서비스제공형', '지역사회공헌형', '혼합형', '기타(창의·혁신)형'] },
          { key: 'seSocialProblem', labelKo: '해결하려는 사회문제', labelEn: 'Social Problem to Solve', type: 'textarea', required: true },
          { key: 'seBeneficiary', labelKo: '주요 수혜 대상', labelEn: 'Main Beneficiaries', type: 'textarea', required: true },
        ],
      },
      {
        id: 'seService',
        titleKo: '사회서비스 실적',
        titleEn: 'Social Service Performance',
        fields: [
          { key: 'seServiceList', labelKo: '제공 사회서비스 내용', labelEn: 'Social Services Provided', type: 'textarea', required: true },
          { key: 'seServiceResult', labelKo: '서비스 제공 실적', labelEn: 'Service Performance', type: 'textarea' },
          { key: 'seSocialImpact', labelKo: '사회적 성과', labelEn: 'Social Impact Results', type: 'textarea' },
        ],
      },
      {
        id: 'seJobs',
        titleKo: '일자리 창출',
        titleEn: 'Job Creation',
        fields: [
          { key: 'seCurrentJobs', labelKo: '현재 고용 현황', labelEn: 'Current Employment Status', type: 'textarea', required: true },
          { key: 'seJobPlan', labelKo: '신규 일자리 창출 계획', labelEn: 'New Job Creation Plan', type: 'textarea', required: true },
          { key: 'seVulnerable', labelKo: '취약계층 고용 현황/계획', labelEn: 'Vulnerable Group Employment', type: 'textarea' },
        ],
      },
      {
        id: 'seBizPlan',
        titleKo: '사업계획',
        titleEn: 'Business Plan',
        fields: [
          { key: 'seMainBiz', labelKo: '주요 사업 내용', labelEn: 'Main Business Activities', type: 'textarea', required: true },
          { key: 'seBizModel', labelKo: '수익 모델', labelEn: 'Revenue Model', type: 'textarea', required: true },
          { key: 'seGrowthPlan', labelKo: '성장 계획', labelEn: 'Growth Plan', type: 'textarea' },
          { key: 'seSchedule', labelKo: '사업 추진 일정', labelEn: 'Business Schedule', type: 'textarea' },
        ],
      },
      {
        id: 'seFinance',
        titleKo: '재무계획',
        titleEn: 'Financial Plan',
        fields: [
          { key: 'seAnnualRevenue', labelKo: '연간 매출액 (최근)', labelEn: 'Annual Revenue (Recent)', type: 'text' },
          { key: 'seRevenueTarget', labelKo: '매출 목표', labelEn: 'Revenue Target', type: 'textarea' },
          { key: 'seTotalBudget', labelKo: '총 사업비', labelEn: 'Total Budget', type: 'text', required: true },
          { key: 'seGovSupport', labelKo: '정부지원 신청금액', labelEn: 'Government Support Requested', type: 'text', required: true },
          { key: 'seBudgetDetail', labelKo: '예산 세부 내역', labelEn: 'Detailed Budget', type: 'textarea' },
        ],
      },
      {
        id: 'sePerformance',
        titleKo: '성과관리',
        titleEn: 'Performance Management',
        fields: [
          { key: 'seKpi', labelKo: '성과 지표 (KPI)', labelEn: 'Key Performance Indicators', type: 'textarea', required: true },
          { key: 'seMonitoring', labelKo: '모니터링 계획', labelEn: 'Monitoring Plan', type: 'textarea' },
          { key: 'seSustainPlan', labelKo: '자립 지속가능성 계획', labelEn: 'Sustainability Plan', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{seName}} 사회적기업 육성사업 신청서

## 기업 개요

| 항목 | 내용 |
|------|------|
| 기업명 | {{seName}} |
| 조직 형태 | {{seType}} |
| 대표자명 | {{seRepName}} |
| 설립일 | {{seEstDate}} |
| 총 근로자 수 | {{seEmployees}}명 |

### 기업 소개
{{seDescription}}

## 1. 사회적 목적

- **사회적 목적 유형**: {{seSocialGoal}}

### 사회적 미션
{{seMission}}

### 해결하려는 사회문제
{{seSocialProblem}}

### 주요 수혜 대상
{{seBeneficiary}}

## 2. 사회서비스 실적

### 제공 사회서비스 내용
{{seServiceList}}

### 서비스 제공 실적
{{seServiceResult}}

### 사회적 성과
{{seSocialImpact}}

## 3. 일자리 창출

### 현재 고용 현황
{{seCurrentJobs}}

### 신규 일자리 창출 계획
{{seJobPlan}}

### 취약계층 고용 현황/계획
{{seVulnerable}}

## 4. 사업계획

### 주요 사업 내용
{{seMainBiz}}

### 수익 모델
{{seBizModel}}

### 성장 계획
{{seGrowthPlan}}

### 사업 추진 일정
{{seSchedule}}

## 5. 재무계획

| 항목 | 내용 |
|------|------|
| 연간 매출액 (최근) | {{seAnnualRevenue}} |
| 총 사업비 | {{seTotalBudget}} |
| 정부지원 신청금액 | {{seGovSupport}} |

### 매출 목표
{{seRevenueTarget}}

### 예산 세부 내역
{{seBudgetDetail}}

## 6. 성과관리

### 성과 지표 (KPI)
{{seKpi}}

### 모니터링 계획
{{seMonitoring}}

### 자립 지속가능성 계획
{{seSustainPlan}}
`,
  },
];
