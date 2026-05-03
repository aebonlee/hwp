const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/generator-DKXGUNmt.js","assets/jszip.min-BcJBHukL.js","assets/index-Cmm8s4WM.js","assets/index-CIugAJbD.css","assets/types-dbiTllwl.js"])))=>i.map(i=>d[i]);
import { u as ne, b as ie, c as se, d as re, r as d, j as e, g as q, T as O, _ as oe, __tla as __tla_0 } from "./index-Cmm8s4WM.js";
import { S as ce } from "./SEOHead-4YFiXqf9.js";
let ue;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const k = [
        {
            type: "startup",
            nameKo: "창업사업계획서",
            nameEn: "Startup Business Plan",
            icon: "🚀",
            descKo: "스타트업/신규 창업을 위한 사업계획서",
            descEn: "Business plan for startups and new ventures",
            sections: [
                {
                    id: "overview",
                    titleKo: "사업 개요",
                    titleEn: "Business Overview",
                    fields: [
                        {
                            key: "businessName",
                            labelKo: "사업명",
                            labelEn: "Business Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "businessField",
                            labelKo: "사업 분야",
                            labelEn: "Business Field",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "businessPurpose",
                            labelKo: "사업 목적",
                            labelEn: "Business Purpose",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "businessSummary",
                            labelKo: "사업 요약",
                            labelEn: "Business Summary",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "targetCustomer",
                            labelKo: "목표 고객",
                            labelEn: "Target Customer",
                            type: "text",
                            required: !0
                        }
                    ]
                },
                {
                    id: "founder",
                    titleKo: "창업자 소개",
                    titleEn: "Founder Introduction",
                    fields: [
                        {
                            key: "founderName",
                            labelKo: "대표자명",
                            labelEn: "Founder Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "founderCareer",
                            labelKo: "주요 경력",
                            labelEn: "Key Career",
                            type: "textarea"
                        },
                        {
                            key: "founderExpertise",
                            labelKo: "전문 분야",
                            labelEn: "Expertise",
                            type: "text"
                        },
                        {
                            key: "founderMotivation",
                            labelKo: "창업 동기",
                            labelEn: "Motivation",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "item",
                    titleKo: "아이템 분석",
                    titleEn: "Item Analysis",
                    fields: [
                        {
                            key: "itemDescription",
                            labelKo: "제품/서비스 설명",
                            labelEn: "Product/Service Description",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "itemAdvantage",
                            labelKo: "경쟁 우위",
                            labelEn: "Competitive Advantage",
                            type: "textarea"
                        },
                        {
                            key: "itemDifferentiation",
                            labelKo: "차별화 요소",
                            labelEn: "Differentiation",
                            type: "textarea"
                        },
                        {
                            key: "itemTechnology",
                            labelKo: "핵심 기술",
                            labelEn: "Core Technology",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "market",
                    titleKo: "시장 분석",
                    titleEn: "Market Analysis",
                    fields: [
                        {
                            key: "marketSize",
                            labelKo: "시장 규모",
                            labelEn: "Market Size",
                            type: "text"
                        },
                        {
                            key: "marketTrend",
                            labelKo: "시장 트렌드",
                            labelEn: "Market Trend",
                            type: "textarea"
                        },
                        {
                            key: "competitors",
                            labelKo: "주요 경쟁자",
                            labelEn: "Key Competitors",
                            type: "textarea"
                        },
                        {
                            key: "marketOpportunity",
                            labelKo: "시장 기회",
                            labelEn: "Market Opportunity",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "marketing",
                    titleKo: "마케팅 전략",
                    titleEn: "Marketing Strategy",
                    fields: [
                        {
                            key: "marketingStrategy",
                            labelKo: "마케팅 전략",
                            labelEn: "Marketing Strategy",
                            type: "textarea"
                        },
                        {
                            key: "salesChannel",
                            labelKo: "판매 채널",
                            labelEn: "Sales Channel",
                            type: "textarea"
                        },
                        {
                            key: "pricingStrategy",
                            labelKo: "가격 전략",
                            labelEn: "Pricing Strategy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "operation",
                    titleKo: "운영 계획",
                    titleEn: "Operations Plan",
                    fields: [
                        {
                            key: "operationPlan",
                            labelKo: "운영 방안",
                            labelEn: "Operations Plan",
                            type: "textarea"
                        },
                        {
                            key: "organization",
                            labelKo: "조직 구성",
                            labelEn: "Organization",
                            type: "textarea"
                        },
                        {
                            key: "location",
                            labelKo: "사업 장소",
                            labelEn: "Business Location",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "finance",
                    titleKo: "재무 계획",
                    titleEn: "Financial Plan",
                    fields: [
                        {
                            key: "initialInvestment",
                            labelKo: "초기 투자금",
                            labelEn: "Initial Investment",
                            type: "text"
                        },
                        {
                            key: "revenueProjection",
                            labelKo: "매출 전망",
                            labelEn: "Revenue Projection",
                            type: "textarea"
                        },
                        {
                            key: "costStructure",
                            labelKo: "비용 구조",
                            labelEn: "Cost Structure",
                            type: "textarea"
                        },
                        {
                            key: "breakEvenPoint",
                            labelKo: "손익분기점",
                            labelEn: "Break-even Point",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "schedule",
                    titleKo: "추진 일정",
                    titleEn: "Schedule",
                    fields: [
                        {
                            key: "milestones",
                            labelKo: "주요 마일스톤",
                            labelEn: "Key Milestones",
                            type: "textarea"
                        },
                        {
                            key: "startDate",
                            labelKo: "사업 시작일",
                            labelEn: "Start Date",
                            type: "date"
                        }
                    ]
                }
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
`
        },
        {
            type: "sme",
            nameKo: "중소기업 사업계획서",
            nameEn: "SME Business Plan",
            icon: "🏢",
            descKo: "기존 중소기업의 성장·확장 사업계획서",
            descEn: "Business plan for SME growth and expansion",
            sections: [
                {
                    id: "company",
                    titleKo: "기업 현황",
                    titleEn: "Company Status",
                    fields: [
                        {
                            key: "companyName",
                            labelKo: "기업명",
                            labelEn: "Company Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "establishedDate",
                            labelKo: "설립일",
                            labelEn: "Established Date",
                            type: "date"
                        },
                        {
                            key: "employeeCount",
                            labelKo: "종업원 수",
                            labelEn: "Employee Count",
                            type: "number"
                        },
                        {
                            key: "annualRevenue",
                            labelKo: "연매출",
                            labelEn: "Annual Revenue",
                            type: "text"
                        },
                        {
                            key: "mainBusiness",
                            labelKo: "주요 사업 내용",
                            labelEn: "Main Business",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "purpose",
                    titleKo: "사업 목적 및 배경",
                    titleEn: "Purpose & Background",
                    fields: [
                        {
                            key: "smePurpose",
                            labelKo: "사업 목적",
                            labelEn: "Purpose",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "smeBackground",
                            labelKo: "추진 배경",
                            labelEn: "Background",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "product",
                    titleKo: "제품/서비스",
                    titleEn: "Products/Services",
                    fields: [
                        {
                            key: "productList",
                            labelKo: "주요 제품/서비스",
                            labelEn: "Main Products/Services",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "productStrength",
                            labelKo: "제품 강점",
                            labelEn: "Product Strengths",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "competition",
                    titleKo: "경쟁 분석",
                    titleEn: "Competition Analysis",
                    fields: [
                        {
                            key: "smeCompetitors",
                            labelKo: "주요 경쟁사",
                            labelEn: "Key Competitors",
                            type: "textarea"
                        },
                        {
                            key: "smeSwot",
                            labelKo: "SWOT 분석",
                            labelEn: "SWOT Analysis",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "sales",
                    titleKo: "영업 전략",
                    titleEn: "Sales Strategy",
                    fields: [
                        {
                            key: "salesStrategy",
                            labelKo: "영업 전략",
                            labelEn: "Sales Strategy",
                            type: "textarea"
                        },
                        {
                            key: "salesTarget",
                            labelKo: "매출 목표",
                            labelEn: "Sales Target",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "smeOperation",
                    titleKo: "운영 계획",
                    titleEn: "Operations",
                    fields: [
                        {
                            key: "smeOperationPlan",
                            labelKo: "운영 계획",
                            labelEn: "Operations Plan",
                            type: "textarea"
                        },
                        {
                            key: "smeQuality",
                            labelKo: "품질 관리",
                            labelEn: "Quality Control",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "smeOrg",
                    titleKo: "조직 및 인력",
                    titleEn: "Organization",
                    fields: [
                        {
                            key: "smeOrgStructure",
                            labelKo: "조직 구조",
                            labelEn: "Organization Structure",
                            type: "textarea"
                        },
                        {
                            key: "smeHrPlan",
                            labelKo: "인력 계획",
                            labelEn: "HR Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "smeFinance",
                    titleKo: "재무 계획",
                    titleEn: "Financial Plan",
                    fields: [
                        {
                            key: "smeFinancePlan",
                            labelKo: "재무 계획",
                            labelEn: "Financial Plan",
                            type: "textarea"
                        },
                        {
                            key: "smeFundingNeeds",
                            labelKo: "자금 소요",
                            labelEn: "Funding Needs",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "risk",
                    titleKo: "위험 관리",
                    titleEn: "Risk Management",
                    fields: [
                        {
                            key: "riskFactors",
                            labelKo: "위험 요인",
                            labelEn: "Risk Factors",
                            type: "textarea"
                        },
                        {
                            key: "riskMitigation",
                            labelKo: "대응 방안",
                            labelEn: "Mitigation Plans",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "investment",
            nameKo: "투자유치용 사업계획서",
            nameEn: "Investment Pitch Plan",
            icon: "💰",
            descKo: "투자자 대상 IR/피칭용 사업계획서",
            descEn: "Business plan for investor relations and pitching",
            sections: [
                {
                    id: "execSummary",
                    titleKo: "투자 요약 (Executive Summary)",
                    titleEn: "Executive Summary",
                    fields: [
                        {
                            key: "invCompanyName",
                            labelKo: "회사명",
                            labelEn: "Company Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "oneLiner",
                            labelKo: "한 줄 소개",
                            labelEn: "One-liner",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "fundingAmount",
                            labelKo: "투자 희망 금액",
                            labelEn: "Funding Amount",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "fundingRound",
                            labelKo: "투자 라운드",
                            labelEn: "Funding Round",
                            type: "select",
                            options: [
                                "Pre-Seed",
                                "Seed",
                                "Series A",
                                "Series B",
                                "Series C+"
                            ]
                        }
                    ]
                },
                {
                    id: "problem",
                    titleKo: "문제 정의",
                    titleEn: "Problem",
                    fields: [
                        {
                            key: "problemStatement",
                            labelKo: "해결하려는 문제",
                            labelEn: "Problem Statement",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "painPoints",
                            labelKo: "고객 페인포인트",
                            labelEn: "Customer Pain Points",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "solution",
                    titleKo: "솔루션",
                    titleEn: "Solution",
                    fields: [
                        {
                            key: "solutionDescription",
                            labelKo: "솔루션 설명",
                            labelEn: "Solution Description",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "uniqueValue",
                            labelKo: "고유 가치 제안 (UVP)",
                            labelEn: "Unique Value Proposition",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "marketSize",
                    titleKo: "시장 규모 (TAM/SAM/SOM)",
                    titleEn: "Market Size (TAM/SAM/SOM)",
                    fields: [
                        {
                            key: "tam",
                            labelKo: "TAM (전체 시장)",
                            labelEn: "TAM (Total Addressable Market)",
                            type: "text"
                        },
                        {
                            key: "sam",
                            labelKo: "SAM (유효 시장)",
                            labelEn: "SAM (Serviceable Addressable Market)",
                            type: "text"
                        },
                        {
                            key: "som",
                            labelKo: "SOM (수익 시장)",
                            labelEn: "SOM (Serviceable Obtainable Market)",
                            type: "text"
                        },
                        {
                            key: "marketGrowth",
                            labelKo: "시장 성장률",
                            labelEn: "Market Growth Rate",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "bizModel",
                    titleKo: "비즈니스 모델",
                    titleEn: "Business Model",
                    fields: [
                        {
                            key: "revenueModel",
                            labelKo: "수익 모델",
                            labelEn: "Revenue Model",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "unitEconomics",
                            labelKo: "단위 경제성",
                            labelEn: "Unit Economics",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "traction",
                    titleKo: "트랙션/성과",
                    titleEn: "Traction",
                    fields: [
                        {
                            key: "keyMetrics",
                            labelKo: "주요 지표",
                            labelEn: "Key Metrics",
                            type: "textarea"
                        },
                        {
                            key: "achievements",
                            labelKo: "주요 성과",
                            labelEn: "Key Achievements",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "team",
                    titleKo: "팀 소개",
                    titleEn: "Team",
                    fields: [
                        {
                            key: "teamIntro",
                            labelKo: "팀 소개",
                            labelEn: "Team Introduction",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "advisors",
                            labelKo: "자문단/멘토",
                            labelEn: "Advisors/Mentors",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "funding",
                    titleKo: "자금 운용 계획",
                    titleEn: "Use of Funds",
                    fields: [
                        {
                            key: "useOfFunds",
                            labelKo: "자금 사용 계획",
                            labelEn: "Use of Funds",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "runway",
                            labelKo: "예상 런��이",
                            labelEn: "Expected Runway",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "exit",
                    titleKo: "출구 전략",
                    titleEn: "Exit Strategy",
                    fields: [
                        {
                            key: "exitStrategy",
                            labelKo: "출구 전략",
                            labelEn: "Exit Strategy",
                            type: "textarea"
                        },
                        {
                            key: "comparableExits",
                            labelKo: "유사 Exit 사례",
                            labelEn: "Comparable Exits",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "government",
            nameKo: "정부과제 사업계획서",
            nameEn: "Government Project Plan",
            icon: "🏛",
            descKo: "정부 R&D 및 지원사업 신청용 사업계획서",
            descEn: "Business plan for government R&D and support programs",
            sections: [
                {
                    id: "projectOverview",
                    titleKo: "과제 개요",
                    titleEn: "Project Overview",
                    fields: [
                        {
                            key: "projectTitle",
                            labelKo: "과제명",
                            labelEn: "Project Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "projectPeriod",
                            labelKo: "수행 기간",
                            labelEn: "Project Period",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "leadOrganization",
                            labelKo: "주관 기관",
                            labelEn: "Lead Organization",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "projectSummary",
                            labelKo: "과제 요약",
                            labelEn: "Project Summary",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "techGoal",
                    titleKo: "기술개발 목표",
                    titleEn: "Technology Development Goals",
                    fields: [
                        {
                            key: "finalGoal",
                            labelKo: "최종 목표",
                            labelEn: "Final Goal",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "yearlyGoals",
                            labelKo: "연차별 목표",
                            labelEn: "Yearly Goals",
                            type: "textarea"
                        },
                        {
                            key: "techSpecs",
                            labelKo: "목표 기술 사양",
                            labelEn: "Target Technical Specs",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "devContent",
                    titleKo: "개발 내용",
                    titleEn: "Development Content",
                    fields: [
                        {
                            key: "devScope",
                            labelKo: "개발 범위",
                            labelEn: "Development Scope",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "devMethod",
                            labelKo: "개발 방법",
                            labelEn: "Development Method",
                            type: "textarea"
                        },
                        {
                            key: "coreTech",
                            labelKo: "핵심 기술",
                            labelEn: "Core Technology",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "govSchedule",
                    titleKo: "추진 일정",
                    titleEn: "Schedule",
                    fields: [
                        {
                            key: "govMilestones",
                            labelKo: "단계별 추진 일정",
                            labelEn: "Phase Schedule",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "participants",
                    titleKo: "참여 인력",
                    titleEn: "Participants",
                    fields: [
                        {
                            key: "pmInfo",
                            labelKo: "과제 책임자 (PM)",
                            labelEn: "Project Manager",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "participantList",
                            labelKo: "참여 인력 현황",
                            labelEn: "Participant List",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "impact",
                    titleKo: "기대 효과",
                    titleEn: "Expected Impact",
                    fields: [
                        {
                            key: "techImpact",
                            labelKo: "기술적 기대효과",
                            labelEn: "Technical Impact",
                            type: "textarea"
                        },
                        {
                            key: "economicImpact",
                            labelKo: "경제적 기대효과",
                            labelEn: "Economic Impact",
                            type: "textarea"
                        },
                        {
                            key: "socialImpact",
                            labelKo: "사회적 기대효과",
                            labelEn: "Social Impact",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "govMarket",
                    titleKo: "시장 분석",
                    titleEn: "Market Analysis",
                    fields: [
                        {
                            key: "govMarketSize",
                            labelKo: "국내외 시장 규모",
                            labelEn: "Market Size",
                            type: "textarea"
                        },
                        {
                            key: "govMarketTrend",
                            labelKo: "기술/시장 동향",
                            labelEn: "Market Trends",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "commercialization",
                    titleKo: "사업화 계획",
                    titleEn: "Commercialization Plan",
                    fields: [
                        {
                            key: "commercializationPlan",
                            labelKo: "사업화 전략",
                            labelEn: "Commercialization Strategy",
                            type: "textarea"
                        },
                        {
                            key: "salesProjection",
                            labelKo: "매출 전망",
                            labelEn: "Sales Projection",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "budget",
                    titleKo: "소요 예산",
                    titleEn: "Budget",
                    fields: [
                        {
                            key: "totalBudget",
                            labelKo: "총 사업비",
                            labelEn: "Total Budget",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "govFunding",
                            labelKo: "정부 출연금",
                            labelEn: "Government Funding",
                            type: "text"
                        },
                        {
                            key: "selfFunding",
                            labelKo: "자기 부담금",
                            labelEn: "Self Funding",
                            type: "text"
                        },
                        {
                            key: "budgetDetail",
                            labelKo: "세부 예산",
                            labelEn: "Budget Detail",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "education",
            nameKo: "교육사업 계획서",
            nameEn: "Education Business Plan",
            icon: "🎓",
            descKo: "학원, 온라인교육, 직업훈련 등 교육사업 계획서",
            descEn: "Business plan for academies, online education, and vocational training",
            sections: [
                {
                    id: "eduOverview",
                    titleKo: "교육사업 개요",
                    titleEn: "Education Business Overview",
                    fields: [
                        {
                            key: "eduName",
                            labelKo: "교육기관명",
                            labelEn: "Institution Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "eduField",
                            labelKo: "교육 분야",
                            labelEn: "Education Field",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "eduType",
                            labelKo: "교육 형태",
                            labelEn: "Education Type",
                            type: "select",
                            options: [
                                "오프라인 학원",
                                "온라인 교육",
                                "블렌디드 러닝",
                                "직업훈련",
                                "기업교육",
                                "평생교육"
                            ]
                        },
                        {
                            key: "eduVision",
                            labelKo: "교육 비전",
                            labelEn: "Education Vision",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "eduTarget",
                            labelKo: "대상 학습자",
                            labelEn: "Target Learners",
                            type: "text",
                            required: !0
                        }
                    ]
                },
                {
                    id: "curriculum",
                    titleKo: "교육과정 설계",
                    titleEn: "Curriculum Design",
                    fields: [
                        {
                            key: "courseList",
                            labelKo: "주요 교육과정",
                            labelEn: "Main Courses",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "teachingMethod",
                            labelKo: "교수법",
                            labelEn: "Teaching Methods",
                            type: "textarea"
                        },
                        {
                            key: "eduDuration",
                            labelKo: "교육 기간/시수",
                            labelEn: "Duration/Hours",
                            type: "text"
                        },
                        {
                            key: "certification",
                            labelKo: "자격/수료증",
                            labelEn: "Certifications",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "instructor",
                    titleKo: "강사진 구성",
                    titleEn: "Instructor Team",
                    fields: [
                        {
                            key: "instructorPlan",
                            labelKo: "강사 확보 계획",
                            labelEn: "Instructor Recruitment",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "instructorQual",
                            labelKo: "강사 자격 요건",
                            labelEn: "Instructor Qualifications",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "eduFacility",
                    titleKo: "시설/플랫폼",
                    titleEn: "Facilities/Platform",
                    fields: [
                        {
                            key: "facilityPlan",
                            labelKo: "시설/플랫폼 계획",
                            labelEn: "Facility/Platform Plan",
                            type: "textarea"
                        },
                        {
                            key: "eduTechnology",
                            labelKo: "에듀테크 활용",
                            labelEn: "EdTech Utilization",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "eduMarketing",
                    titleKo: "학생 모집 전략",
                    titleEn: "Student Recruitment",
                    fields: [
                        {
                            key: "recruitStrategy",
                            labelKo: "모집 전략",
                            labelEn: "Recruitment Strategy",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "recruitTarget",
                            labelKo: "연간 모집 목표",
                            labelEn: "Annual Target",
                            type: "text"
                        },
                        {
                            key: "eduPricing",
                            labelKo: "수강료 정책",
                            labelEn: "Pricing Policy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "eduFinance",
                    titleKo: "재무 계획",
                    titleEn: "Financial Plan",
                    fields: [
                        {
                            key: "eduInitialCost",
                            labelKo: "초기 투자비",
                            labelEn: "Initial Investment",
                            type: "text"
                        },
                        {
                            key: "eduRevenue",
                            labelKo: "매출 전망",
                            labelEn: "Revenue Forecast",
                            type: "textarea"
                        },
                        {
                            key: "eduCostStructure",
                            labelKo: "비용 구조",
                            labelEn: "Cost Structure",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "eduQuality",
                    titleKo: "교육 품질 관리",
                    titleEn: "Quality Assurance",
                    fields: [
                        {
                            key: "qualityPlan",
                            labelKo: "품질 관리 방안",
                            labelEn: "QA Plan",
                            type: "textarea"
                        },
                        {
                            key: "satisfaction",
                            labelKo: "만족도 관리",
                            labelEn: "Satisfaction Management",
                            type: "textarea"
                        }
                    ]
                }
            ],
            markdownTemplate: `# {{eduName}} 교육사업 계획서

## 1. 교육사업 개요

- **교육기관명**: {{eduName}}
- **교육 분야**: {{eduField}}
- **교육 형태**: {{eduType}}
- **대상 학습자**: {{eduTarget}}

### 교육 비전
{{eduVision}}

## 2. 교육과정 설계

### 주요 교육과정
{{courseList}}

### 교수법
{{teachingMethod}}

- **교육 기간/시수**: {{eduDuration}}

### 자격/수료증
{{certification}}

## 3. 강사진 구성

### 강사 확보 계획
{{instructorPlan}}

### 강사 자격 요건
{{instructorQual}}

## 4. 시설/플랫폼

### 시설/플랫폼 계획
{{facilityPlan}}

### 에듀테크 활용
{{eduTechnology}}

## 5. 학생 모집 전략

- **연간 모집 목표**: {{recruitTarget}}

### 모집 전략
{{recruitStrategy}}

### 수강료 정책
{{eduPricing}}

## 6. 재무 계획

- **초기 투자비**: {{eduInitialCost}}

### 매출 전망
{{eduRevenue}}

### 비용 구조
{{eduCostStructure}}

## 7. 교육 품질 관리

### 품질 관리 방안
{{qualityPlan}}

### 만족도 관리
{{satisfaction}}
`
        },
        {
            type: "nonprofit",
            nameKo: "비영리/사회적기업 사업계획서",
            nameEn: "Nonprofit / Social Enterprise Plan",
            icon: "🤝",
            descKo: "비영리단체, 사회적기업, 협동조합 등을 위한 사업계획서",
            descEn: "Business plan for nonprofits, social enterprises, and cooperatives",
            sections: [
                {
                    id: "npOverview",
                    titleKo: "단체/기업 개요",
                    titleEn: "Organization Overview",
                    fields: [
                        {
                            key: "npName",
                            labelKo: "단체/기업명",
                            labelEn: "Organization Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "npType",
                            labelKo: "조직 형태",
                            labelEn: "Organization Type",
                            type: "select",
                            options: [
                                "비영리법인",
                                "사회적기업",
                                "협동조합",
                                "사회적협동조합",
                                "마을기업",
                                "자활기업"
                            ]
                        },
                        {
                            key: "npMission",
                            labelKo: "미션 (사회적 목적)",
                            labelEn: "Mission (Social Purpose)",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "npVision",
                            labelKo: "비전",
                            labelEn: "Vision",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "socialProblem",
                    titleKo: "사회 문제 정의",
                    titleEn: "Social Problem",
                    fields: [
                        {
                            key: "socialIssue",
                            labelKo: "해결하려는 사회 문제",
                            labelEn: "Social Issue to Solve",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "beneficiary",
                            labelKo: "수혜 대상",
                            labelEn: "Beneficiaries",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "socialNeed",
                            labelKo: "사회적 필요성",
                            labelEn: "Social Need",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "npPrograms",
                    titleKo: "사업 프로그램",
                    titleEn: "Programs",
                    fields: [
                        {
                            key: "mainPrograms",
                            labelKo: "주요 사업/프로그램",
                            labelEn: "Main Programs",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "socialImpact",
                            labelKo: "사회적 영향력 목표",
                            labelEn: "Social Impact Goals",
                            type: "textarea"
                        },
                        {
                            key: "impactMetrics",
                            labelKo: "성과 지표",
                            labelEn: "Impact Metrics",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "npRevenue",
                    titleKo: "수익 구조",
                    titleEn: "Revenue Structure",
                    fields: [
                        {
                            key: "revenueSource",
                            labelKo: "수익원",
                            labelEn: "Revenue Sources",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "grantPlan",
                            labelKo: "보조금/기부금 계획",
                            labelEn: "Grant/Donation Plan",
                            type: "textarea"
                        },
                        {
                            key: "selfSustain",
                            labelKo: "자립 방안",
                            labelEn: "Self-sustainability Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "npOrg",
                    titleKo: "조직 운영",
                    titleEn: "Organization Management",
                    fields: [
                        {
                            key: "npStructure",
                            labelKo: "조직 구조",
                            labelEn: "Organization Structure",
                            type: "textarea"
                        },
                        {
                            key: "npGovernance",
                            labelKo: "거버넌스",
                            labelEn: "Governance",
                            type: "textarea"
                        },
                        {
                            key: "npPartners",
                            labelKo: "파트너/네트워크",
                            labelEn: "Partners/Network",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "npBudget",
                    titleKo: "예산 계획",
                    titleEn: "Budget Plan",
                    fields: [
                        {
                            key: "npTotalBudget",
                            labelKo: "총 예산",
                            labelEn: "Total Budget",
                            type: "text"
                        },
                        {
                            key: "npExpenseDetail",
                            labelKo: "지출 세부 계획",
                            labelEn: "Expense Detail",
                            type: "textarea"
                        },
                        {
                            key: "npFundingPlan",
                            labelKo: "재원 조달 계획",
                            labelEn: "Funding Plan",
                            type: "textarea"
                        }
                    ]
                }
            ],
            markdownTemplate: `# {{npName}} 사업계획서

## 1. 단체/기업 개요

- **단체/기업명**: {{npName}}
- **조직 형태**: {{npType}}

### 미션 (사회적 목적)
{{npMission}}

### 비전
{{npVision}}

## 2. 사회 문제 정의

- **수혜 대상**: {{beneficiary}}

### 해결하려는 사회 문제
{{socialIssue}}

### 사회적 필요성
{{socialNeed}}

## 3. 사업 프로그램

### 주요 사업/프로그램
{{mainPrograms}}

### 사회적 영향력 목표
{{socialImpact}}

### 성과 지표
{{impactMetrics}}

## 4. 수익 구조

### 수익원
{{revenueSource}}

### 보조금/기부금 계획
{{grantPlan}}

### 자립 방안
{{selfSustain}}

## 5. 조직 운영

### 조직 구조
{{npStructure}}

### 거버넌스
{{npGovernance}}

### 파트너/네트워크
{{npPartners}}

## 6. 예산 계획

- **총 예산**: {{npTotalBudget}}

### 지출 세부 계획
{{npExpenseDetail}}

### 재원 조달 계획
{{npFundingPlan}}
`
        },
        {
            type: "franchise",
            nameKo: "프랜차이즈 사업계획서",
            nameEn: "Franchise Business Plan",
            icon: "🏪",
            descKo: "가맹점 모집 또는 프랜차이즈 창업 사업계획서",
            descEn: "Business plan for franchise development or franchise startup",
            sections: [
                {
                    id: "franchiseOverview",
                    titleKo: "프랜차이즈 개요",
                    titleEn: "Franchise Overview",
                    fields: [
                        {
                            key: "brandName",
                            labelKo: "브랜드명",
                            labelEn: "Brand Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "franIndustry",
                            labelKo: "업종",
                            labelEn: "Industry",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "franConcept",
                            labelKo: "브랜드 컨셉",
                            labelEn: "Brand Concept",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "franHistory",
                            labelKo: "브랜드 연혁",
                            labelEn: "Brand History",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "franProduct",
                    titleKo: "제품/메뉴 구성",
                    titleEn: "Products/Menu",
                    fields: [
                        {
                            key: "mainProducts",
                            labelKo: "주력 제품/메뉴",
                            labelEn: "Main Products/Menu",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "productStrategies",
                            labelKo: "제품 전략",
                            labelEn: "Product Strategy",
                            type: "textarea"
                        },
                        {
                            key: "avgPrice",
                            labelKo: "평균 가격대",
                            labelEn: "Average Price Range",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "franModel",
                    titleKo: "가맹 사업 모델",
                    titleEn: "Franchise Model",
                    fields: [
                        {
                            key: "franFee",
                            labelKo: "가맹비/보증금",
                            labelEn: "Franchise Fee/Deposit",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "royalty",
                            labelKo: "로열티 구조",
                            labelEn: "Royalty Structure",
                            type: "text"
                        },
                        {
                            key: "initialInvestFran",
                            labelKo: "초기 투자 비용",
                            labelEn: "Initial Investment",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "franSupport",
                            labelKo: "본부 지원 내용",
                            labelEn: "HQ Support",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "franStore",
                    titleKo: "매장 운영",
                    titleEn: "Store Operations",
                    fields: [
                        {
                            key: "storeSize",
                            labelKo: "표준 매장 규모",
                            labelEn: "Standard Store Size",
                            type: "text"
                        },
                        {
                            key: "storeDesign",
                            labelKo: "인테리어 컨셉",
                            labelEn: "Interior Concept",
                            type: "textarea"
                        },
                        {
                            key: "storeOperation",
                            labelKo: "운영 매뉴얼",
                            labelEn: "Operations Manual",
                            type: "textarea"
                        },
                        {
                            key: "storeStaff",
                            labelKo: "필요 인력",
                            labelEn: "Required Staff",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "franExpansion",
                    titleKo: "가맹점 확장 계획",
                    titleEn: "Expansion Plan",
                    fields: [
                        {
                            key: "currentStores",
                            labelKo: "현재 매장 수",
                            labelEn: "Current Stores",
                            type: "number"
                        },
                        {
                            key: "expansionTarget",
                            labelKo: "확장 목표",
                            labelEn: "Expansion Target",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "targetArea",
                            labelKo: "목표 지역",
                            labelEn: "Target Areas",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "franFinance",
                    titleKo: "재무 분석",
                    titleEn: "Financial Analysis",
                    fields: [
                        {
                            key: "avgMonthlyRevenue",
                            labelKo: "월 평균 매출",
                            labelEn: "Avg Monthly Revenue",
                            type: "text"
                        },
                        {
                            key: "franBreakEven",
                            labelKo: "손익분기 예상",
                            labelEn: "Break-even Estimate",
                            type: "text"
                        },
                        {
                            key: "franRoi",
                            labelKo: "투자 수익률 (ROI)",
                            labelEn: "ROI",
                            type: "text"
                        }
                    ]
                }
            ],
            markdownTemplate: `# {{brandName}} 프랜차이즈 사업계획서

## 1. 프랜차이즈 개요

- **브랜드명**: {{brandName}}
- **업종**: {{franIndustry}}

### 브랜드 컨셉
{{franConcept}}

### 브랜드 연혁
{{franHistory}}

## 2. 제품/메뉴 구성

- **평균 가격대**: {{avgPrice}}

### 주력 제품/메뉴
{{mainProducts}}

### 제품 전략
{{productStrategies}}

## 3. 가맹 사업 모델

| 항목 | 내용 |
|------|------|
| 가맹비/보증금 | {{franFee}} |
| 로열티 | {{royalty}} |
| 초기 투자 비용 | {{initialInvestFran}} |

### 본부 지원 내용
{{franSupport}}

## 4. 매장 운영

- **표준 매장 규모**: {{storeSize}}
- **필요 인력**: {{storeStaff}}

### 인테리어 컨셉
{{storeDesign}}

### 운영 매뉴얼
{{storeOperation}}

## 5. 가맹점 확장 계획

- **현재 매장 수**: {{currentStores}}개

### 확장 목표
{{expansionTarget}}

### 목표 지역
{{targetArea}}

## 6. 재무 분석

| 항목 | 내용 |
|------|------|
| 월 평균 매출 | {{avgMonthlyRevenue}} |
| 손익분기 예상 | {{franBreakEven}} |
| 투자 수익률 (ROI) | {{franRoi}} |
`
        },
        {
            type: "ecommerce",
            nameKo: "이커머스 사업계획서",
            nameEn: "E-commerce Business Plan",
            icon: "🛒",
            descKo: "온라인 쇼핑몰, D2C, 마켓플레이스 등 이커머스 사업계획서",
            descEn: "Business plan for online shops, D2C brands, and marketplaces",
            sections: [
                {
                    id: "ecOverview",
                    titleKo: "이커머스 사업 개요",
                    titleEn: "E-commerce Overview",
                    fields: [
                        {
                            key: "ecName",
                            labelKo: "쇼핑몰/브랜드명",
                            labelEn: "Store/Brand Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "ecModel",
                            labelKo: "비즈니스 모델",
                            labelEn: "Business Model",
                            type: "select",
                            options: [
                                "자사몰 D2C",
                                "오픈마켓 입점",
                                "마켓플레이스",
                                "구독 커머스",
                                "소셜 커머스",
                                "라이브 커머스"
                            ]
                        },
                        {
                            key: "ecCategory",
                            labelKo: "상품 카테고리",
                            labelEn: "Product Category",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "ecDescription",
                            labelKo: "사업 설명",
                            labelEn: "Business Description",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "ecProduct",
                    titleKo: "상품 전략",
                    titleEn: "Product Strategy",
                    fields: [
                        {
                            key: "ecProducts",
                            labelKo: "주력 상품",
                            labelEn: "Main Products",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "ecSourcing",
                            labelKo: "소싱/공급 전략",
                            labelEn: "Sourcing Strategy",
                            type: "textarea"
                        },
                        {
                            key: "ecPricing",
                            labelKo: "가격 전략",
                            labelEn: "Pricing Strategy",
                            type: "textarea"
                        },
                        {
                            key: "ecBranding",
                            labelKo: "브랜딩 전략",
                            labelEn: "Branding Strategy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "ecPlatform",
                    titleKo: "판매 플랫폼",
                    titleEn: "Sales Platform",
                    fields: [
                        {
                            key: "ecPlatformType",
                            labelKo: "플랫폼 구축 방안",
                            labelEn: "Platform Development",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "ecChannels",
                            labelKo: "판매 채널",
                            labelEn: "Sales Channels",
                            type: "textarea"
                        },
                        {
                            key: "ecPayment",
                            labelKo: "결제 시스템",
                            labelEn: "Payment System",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "ecMarketing",
                    titleKo: "마케팅/고객 확보",
                    titleEn: "Marketing & Customer Acquisition",
                    fields: [
                        {
                            key: "ecDigitalMkt",
                            labelKo: "디지털 마케팅 전략",
                            labelEn: "Digital Marketing Strategy",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "ecCac",
                            labelKo: "고객 획득 비용 (CAC)",
                            labelEn: "Customer Acquisition Cost",
                            type: "text"
                        },
                        {
                            key: "ecRetention",
                            labelKo: "고객 유지 전략",
                            labelEn: "Retention Strategy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "ecLogistics",
                    titleKo: "물류/배송",
                    titleEn: "Logistics & Shipping",
                    fields: [
                        {
                            key: "ecFulfillment",
                            labelKo: "풀필먼트 전략",
                            labelEn: "Fulfillment Strategy",
                            type: "textarea"
                        },
                        {
                            key: "ecShipping",
                            labelKo: "배송 정책",
                            labelEn: "Shipping Policy",
                            type: "textarea"
                        },
                        {
                            key: "ecReturns",
                            labelKo: "반품/교환 정책",
                            labelEn: "Returns Policy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "ecFinance",
                    titleKo: "재무 계획",
                    titleEn: "Financial Plan",
                    fields: [
                        {
                            key: "ecInitialCost",
                            labelKo: "초기 투자비",
                            labelEn: "Initial Investment",
                            type: "text"
                        },
                        {
                            key: "ecGmv",
                            labelKo: "GMV 목표",
                            labelEn: "GMV Target",
                            type: "text"
                        },
                        {
                            key: "ecMargin",
                            labelKo: "마진율",
                            labelEn: "Margin Rate",
                            type: "text"
                        },
                        {
                            key: "ecRevenueForcast",
                            labelKo: "매출 전망",
                            labelEn: "Revenue Forecast",
                            type: "textarea"
                        }
                    ]
                }
            ],
            markdownTemplate: `# {{ecName}} 이커머스 사업계획서

## 1. 이커머스 사업 개요

- **쇼핑몰/브랜드명**: {{ecName}}
- **비즈니스 모델**: {{ecModel}}
- **상품 카테고리**: {{ecCategory}}

### 사업 설명
{{ecDescription}}

## 2. 상품 전략

### 주력 상품
{{ecProducts}}

### 소싱/공급 전략
{{ecSourcing}}

### 가격 전략
{{ecPricing}}

### 브랜딩 전략
{{ecBranding}}

## 3. 판매 플랫폼

### 플랫폼 구축 방안
{{ecPlatformType}}

### 판매 채널
{{ecChannels}}

### 결제 시스템
{{ecPayment}}

## 4. 마케팅/고객 확보

- **고객 획득 비용 (CAC)**: {{ecCac}}

### 디지털 마케팅 전략
{{ecDigitalMkt}}

### 고객 유지 전략
{{ecRetention}}

## 5. 물류/배송

### 풀필먼트 전략
{{ecFulfillment}}

### 배송 정책
{{ecShipping}}

### 반품/교환 정책
{{ecReturns}}

## 6. 재무 계획

| 항목 | 내용 |
|------|------|
| 초기 투자비 | {{ecInitialCost}} |
| GMV 목표 | {{ecGmv}} |
| 마진율 | {{ecMargin}} |

### 매출 전망
{{ecRevenueForcast}}
`
        }
    ], j = "hwp_bp_autosave";
    function z(s) {
        let u = s.replace(/^#### (.+)$/gm, "<h4>$1</h4>").replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>").replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
        return u = u.replace(/^\|(.+)\|$/gm, (r)=>{
            if (/^\|[\s-:|]+\|$/.test(r)) return "";
            const b = r.split("|").filter((i)=>i.trim()), S = "td";
            return "<tr>" + b.map((i)=>`<${S}>${i.trim()}</${S}>`).join("") + "</tr>";
        }), u = u.replace(/(<tr>[\s\S]*?<\/tr>)/g, "<table>$1</table>"), u = u.replace(/<\/table>\s*<table>/g, ""), u = u.split(`

`).map((r)=>(r = r.trim(), r ? r.startsWith("<h") || r.startsWith("<li") || r.startsWith("<table") || r.startsWith("<blockquote") || r.startsWith("<tr") ? r : `<p>${r}</p>` : "")).join(`
`), u;
    }
    ue = ()=>{
        const { t: s, language: u } = ne(), { user: r } = ie(), { showToast: b } = se(), S = re(), i = u === "ko", [y, m] = d.useState(1), [x, K] = d.useState(null), [o, v] = d.useState({}), [B, g] = d.useState({}), [N, F] = d.useState("preview"), [D, R] = d.useState(!1), [I, A] = d.useState([]), [L, M] = d.useState(!1), [G, f] = d.useState(!1), [P, H] = d.useState(""), p = d.useMemo(()=>k.find((t)=>t.type === x) ?? null, [
            x
        ]), E = d.useMemo(()=>{
            if (!p) return "";
            let t = p.markdownTemplate;
            for (const a of p.sections)for (const l of a.fields){
                const n = o[l.key] || "", c = new RegExp(`\\{\\{${l.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g");
                t = t.replace(c, n || `(${i ? l.labelKo : l.labelEn})`);
            }
            return t;
        }, [
            p,
            o,
            i
        ]), C = d.useMemo(()=>{
            if (!p) return 0;
            const t = p.sections.flatMap((l)=>l.fields.filter((n)=>n.required));
            if (t.length === 0) return 100;
            const a = t.filter((l)=>o[l.key]?.trim()).length;
            return Math.round(a / t.length * 100);
        }, [
            p,
            o
        ]);
        d.useEffect(()=>{
            if (!x || Object.keys(o).length === 0) return;
            const t = {
                type: x,
                formData: o,
                timestamp: Date.now()
            };
            try {
                localStorage.setItem(j, JSON.stringify(t));
            } catch  {}
        }, [
            x,
            o
        ]), d.useEffect(()=>{
            try {
                const t = localStorage.getItem(j);
                if (!t) return;
                const { type: a, formData: l, timestamp: n } = JSON.parse(t);
                if (Date.now() - n > 864e5) return;
                if (a && l && Object.keys(l).length > 0) {
                    K(a), v(l);
                    const c = k.find((T)=>T.type === a);
                    c && (g({
                        [c.sections[0].id]: !0
                    }), m(2), b(i ? "자동 저장된 내용을 복원했습니다" : "Restored autosaved draft", "info"));
                }
            } catch  {}
        }, []);
        const _ = async ()=>{
            if (!r) return;
            M(!0);
            const t = q();
            if (!t) {
                M(!1);
                return;
            }
            const { data: a, error: l } = await t.from(O.businessPlans).select("*").eq("user_id", r.id).order("updated_at", {
                ascending: !1
            }).limit(20);
            !l && a && A(a), M(!1), f(!0);
        }, U = (t)=>{
            K(t.plan_type), v(t.data);
            const a = k.find((l)=>l.type === t.plan_type);
            if (a) {
                const l = {};
                a.sections.forEach((n)=>{
                    l[n.id] = !0;
                }), g(l);
            }
            f(!1), m(2), b(i ? "저장된 계획서를 불러왔습니다" : "Loaded saved plan", "success");
        }, V = async (t)=>{
            if (!confirm(i ? "이 사업계획서를 삭제하시겠습니까?" : "Delete this business plan?")) return;
            const a = q();
            if (!a || !r) return;
            const { error: l } = await a.from(O.businessPlans).delete().eq("id", t).eq("user_id", r.id);
            l || (A((n)=>n.filter((c)=>c.id !== t)), b(i ? "삭제되었습니다" : "Deleted", "success"));
        }, $ = d.useMemo(()=>{
            if (!P.trim()) return k;
            const t = P.toLowerCase();
            return k.filter((a)=>a.nameKo.toLowerCase().includes(t) || a.nameEn.toLowerCase().includes(t) || a.descKo.toLowerCase().includes(t) || a.descEn.toLowerCase().includes(t));
        }, [
            P
        ]), W = (t)=>{
            K(t), v({});
            const a = k.find((l)=>l.type === t);
            a && g({
                [a.sections[0].id]: !0
            }), m(2);
        }, Q = (t)=>{
            g((a)=>({
                    ...a,
                    [t]: !a[t]
                }));
        }, Y = ()=>{
            if (!p) return;
            const t = {};
            p.sections.forEach((a)=>{
                t[a.id] = !0;
            }), g(t);
        }, w = (t, a)=>{
            v((l)=>({
                    ...l,
                    [t]: a
                }));
        }, h = ()=>o.businessName || o.companyName || o.invCompanyName || o.projectTitle || o.eduName || o.npName || o.brandName || o.ecName || "", J = ()=>{
            const t = new Blob([
                E
            ], {
                type: "text/markdown;charset=utf-8"
            }), a = URL.createObjectURL(t), l = document.createElement("a");
            l.href = a, l.download = `${h() || "business-plan"}.md`, l.click(), URL.revokeObjectURL(a);
        }, X = ()=>{
            const t = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${h() || "Business Plan"}</title>
<style>body{font-family:'Malgun Gothic',sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}blockquote{border-left:4px solid #0046C8;padding:8px 16px;margin:16px 0;background:#f9f9f9}
@media print{body{margin:0;padding:20px}h2{page-break-before:auto}}</style></head>
<body>${z(E)}</body></html>`, a = new Blob([
                t
            ], {
                type: "text/html;charset=utf-8"
            }), l = URL.createObjectURL(a), n = document.createElement("a");
            n.href = l, n.download = `${h() || "business-plan"}.html`, n.click(), URL.revokeObjectURL(l);
        }, Z = async ()=>{
            try {
                const { generateHwpx: t } = await oe(async ()=>{
                    const { generateHwpx: T } = await import("./generator-DKXGUNmt.js");
                    return {
                        generateHwpx: T
                    };
                }, __vite__mapDeps([0,1,2,3,4])), a = h() || "business-plan", l = await t(E, a), n = URL.createObjectURL(l), c = document.createElement("a");
                c.href = n, c.download = `${a}.hwpx`, c.click(), URL.revokeObjectURL(n);
            } catch (t) {
                b(t.message || "HWPX export failed", "error");
            }
        }, ee = async ()=>{
            if (!r) {
                b(i ? "로그인이 필요합니다" : "Login required", "warning");
                return;
            }
            const t = q();
            if (!t) return;
            R(!0);
            const { error: a } = await t.from(O.businessPlans).insert({
                user_id: r.id,
                plan_type: x,
                title: h(),
                data: o,
                generated_content: E
            });
            if (R(!1), a) b(a.message, "error");
            else {
                b(s("site.businessPlan.saved"), "success");
                try {
                    localStorage.removeItem(j);
                } catch  {}
            }
        }, te = ()=>{
            S("/md-editor", {
                state: {
                    content: E
                }
            });
        }, ae = ()=>{
            m(1), K(null), v({}), g({}), f(!1);
            try {
                localStorage.removeItem(j);
            } catch  {}
        }, le = [
            s("site.businessPlan.step1"),
            s("site.businessPlan.step2"),
            s("site.businessPlan.step3"),
            s("site.businessPlan.step4")
        ];
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(ce, {
                    title: s("site.businessPlan.title"),
                    path: "/business-plan"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: s("site.businessPlan.title")
                            }),
                            e.jsx("p", {
                                children: s("site.businessPlan.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section bp-wizard",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("div", {
                                className: "bp-steps",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4
                                ].map((t, a)=>e.jsxs("div", {
                                        style: {
                                            display: "contents"
                                        },
                                        children: [
                                            a > 0 && e.jsx("div", {
                                                className: "bp-step-connector"
                                            }),
                                            e.jsxs("div", {
                                                className: `bp-step ${y === t ? "active" : ""} ${y > t ? "completed" : ""}`,
                                                onClick: ()=>{
                                                    y > t && m(t);
                                                },
                                                style: {
                                                    cursor: y > t ? "pointer" : "default"
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        className: "bp-step-num",
                                                        children: y > t ? "✓" : t
                                                    }),
                                                    le[a]
                                                ]
                                            })
                                        ]
                                    }, t))
                            }),
                            y === 1 && e.jsxs("div", {
                                className: "bp-step1-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-step1-actions",
                                        children: [
                                            e.jsxs("div", {
                                                className: "bp-search-wrap",
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }),
                                                            e.jsx("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("input", {
                                                        type: "text",
                                                        value: P,
                                                        onChange: (t)=>H(t.target.value),
                                                        placeholder: i ? "유형 검색..." : "Search types...",
                                                        className: "bp-search-input"
                                                    })
                                                ]
                                            }),
                                            r && e.jsxs("button", {
                                                className: "bp-btn",
                                                onClick: _,
                                                disabled: L,
                                                children: [
                                                    e.jsx("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: e.jsx("path", {
                                                            d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                                        })
                                                    }),
                                                    i ? "저장된 계획서" : "Saved Plans"
                                                ]
                                            })
                                        ]
                                    }),
                                    G && e.jsx("div", {
                                        className: "bp-saved-overlay",
                                        onClick: ()=>f(!1),
                                        children: e.jsxs("div", {
                                            className: "bp-saved-modal",
                                            onClick: (t)=>t.stopPropagation(),
                                            children: [
                                                e.jsxs("div", {
                                                    className: "bp-saved-header",
                                                    children: [
                                                        e.jsx("h3", {
                                                            children: i ? "저장된 사업계획서" : "Saved Business Plans"
                                                        }),
                                                        e.jsx("button", {
                                                            className: "bp-saved-close",
                                                            onClick: ()=>f(!1),
                                                            children: "×"
                                                        })
                                                    ]
                                                }),
                                                L ? e.jsx("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        padding: "40px 0"
                                                    },
                                                    children: e.jsx("div", {
                                                        className: "loading-spinner"
                                                    })
                                                }) : I.length === 0 ? e.jsx("div", {
                                                    className: "bp-saved-empty",
                                                    children: i ? "저장된 사업계획서가 없습니다" : "No saved business plans"
                                                }) : e.jsx("div", {
                                                    className: "bp-saved-list",
                                                    children: I.map((t)=>{
                                                        const a = k.find((l)=>l.type === t.plan_type);
                                                        return e.jsxs("div", {
                                                            className: "bp-saved-item",
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "bp-saved-item-icon",
                                                                    children: a?.icon || "📄"
                                                                }),
                                                                e.jsxs("div", {
                                                                    className: "bp-saved-item-info",
                                                                    children: [
                                                                        e.jsx("strong", {
                                                                            children: t.title || (i ? "제목 없음" : "Untitled")
                                                                        }),
                                                                        e.jsxs("span", {
                                                                            children: [
                                                                                i ? a?.nameKo : a?.nameEn,
                                                                                " · ",
                                                                                new Date(t.updated_at).toLocaleDateString()
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                e.jsxs("div", {
                                                                    className: "bp-saved-item-actions",
                                                                    children: [
                                                                        e.jsx("button", {
                                                                            className: "bp-btn primary",
                                                                            onClick: ()=>U(t),
                                                                            children: i ? "불러오기" : "Load"
                                                                        }),
                                                                        e.jsx("button", {
                                                                            className: "bp-btn danger",
                                                                            onClick: ()=>V(t.id),
                                                                            children: i ? "삭제" : "Delete"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, t.id);
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    e.jsx("div", {
                                        className: "bp-type-grid",
                                        children: $.map((t)=>e.jsxs("div", {
                                                className: `bp-type-card ${x === t.type ? "selected" : ""}`,
                                                onClick: ()=>W(t.type),
                                                children: [
                                                    e.jsx("div", {
                                                        className: "bp-type-icon",
                                                        children: t.icon
                                                    }),
                                                    e.jsx("h3", {
                                                        children: i ? t.nameKo : t.nameEn
                                                    }),
                                                    e.jsx("p", {
                                                        children: i ? t.descKo : t.descEn
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "bp-type-badge",
                                                        children: [
                                                            t.sections.length,
                                                            " ",
                                                            i ? "섹션" : "sections",
                                                            " · ",
                                                            t.sections.reduce((a, l)=>a + l.fields.length, 0),
                                                            " ",
                                                            i ? "항목" : "fields"
                                                        ]
                                                    })
                                                ]
                                            }, t.type))
                                    }),
                                    $.length === 0 && e.jsx("div", {
                                        className: "bp-empty-search",
                                        children: i ? "검색 결과가 없습니다" : "No results found"
                                    })
                                ]
                            }),
                            y === 2 && p && e.jsxs("div", {
                                className: "bp-form-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-form-header",
                                        children: [
                                            e.jsxs("div", {
                                                className: "bp-form-header-left",
                                                children: [
                                                    e.jsx("span", {
                                                        className: "bp-form-type-icon",
                                                        children: p.icon
                                                    }),
                                                    e.jsx("span", {
                                                        className: "bp-form-type-name",
                                                        children: i ? p.nameKo : p.nameEn
                                                    })
                                                ]
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn-text",
                                                onClick: Y,
                                                children: i ? "모두 펼치기" : "Expand All"
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-progress-bar",
                                        children: [
                                            e.jsx("span", {
                                                className: "bp-progress-bar-label",
                                                children: s("site.businessPlan.progress")
                                            }),
                                            e.jsx("div", {
                                                className: "bp-progress-bar-track",
                                                children: e.jsx("div", {
                                                    className: "bp-progress-bar-fill",
                                                    style: {
                                                        width: `${C}%`
                                                    }
                                                })
                                            }),
                                            e.jsxs("span", {
                                                className: "bp-progress-bar-pct",
                                                children: [
                                                    C,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    p.sections.map((t, a)=>{
                                        const l = t.fields.filter((n)=>o[n.key]?.trim()).length;
                                        return e.jsxs("div", {
                                            className: "bp-accordion",
                                            children: [
                                                e.jsxs("button", {
                                                    className: `bp-accordion-header ${B[t.id] ? "open" : ""}`,
                                                    onClick: ()=>Q(t.id),
                                                    children: [
                                                        e.jsxs("span", {
                                                            className: "bp-accordion-header-left",
                                                            children: [
                                                                e.jsx("span", {
                                                                    className: "bp-section-num",
                                                                    children: a + 1
                                                                }),
                                                                i ? t.titleKo : t.titleEn,
                                                                e.jsxs("span", {
                                                                    className: "bp-section-count",
                                                                    children: [
                                                                        l,
                                                                        "/",
                                                                        t.fields.length
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        e.jsx("svg", {
                                                            className: "bp-accordion-arrow",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: e.jsx("polyline", {
                                                                points: "6 9 12 15 18 9"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                B[t.id] && e.jsx("div", {
                                                    className: "bp-accordion-body",
                                                    children: t.fields.map((n)=>e.jsxs("div", {
                                                            className: "bp-field",
                                                            children: [
                                                                e.jsxs("label", {
                                                                    children: [
                                                                        i ? n.labelKo : n.labelEn,
                                                                        n.required && e.jsx("span", {
                                                                            className: "required",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                n.type === "textarea" ? e.jsx("textarea", {
                                                                    value: o[n.key] || "",
                                                                    onChange: (c)=>w(n.key, c.target.value),
                                                                    placeholder: n.placeholder,
                                                                    rows: 3
                                                                }) : n.type === "select" && n.options ? e.jsxs("select", {
                                                                    value: o[n.key] || "",
                                                                    onChange: (c)=>w(n.key, c.target.value),
                                                                    children: [
                                                                        e.jsx("option", {
                                                                            value: "",
                                                                            children: i ? "선택하세요" : "Select..."
                                                                        }),
                                                                        n.options.map((c)=>e.jsx("option", {
                                                                                value: c,
                                                                                children: c
                                                                            }, c))
                                                                    ]
                                                                }) : e.jsx("input", {
                                                                    type: n.type === "number" ? "number" : n.type === "date" ? "date" : "text",
                                                                    value: o[n.key] || "",
                                                                    onChange: (c)=>w(n.key, c.target.value),
                                                                    placeholder: n.placeholder
                                                                })
                                                            ]
                                                        }, n.key))
                                                })
                                            ]
                                        }, t.id);
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-autosave-hint",
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("path", {
                                                        d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                                                    }),
                                                    e.jsx("polyline", {
                                                        points: "17 21 17 13 7 13 7 21"
                                                    }),
                                                    e.jsx("polyline", {
                                                        points: "7 3 7 8 15 8"
                                                    })
                                                ]
                                            }),
                                            i ? "자동 저장 중" : "Auto-saving"
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>{
                                                    m(1), K(null);
                                                },
                                                children: s("site.businessPlan.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>m(3),
                                                disabled: C < 10,
                                                children: s("site.businessPlan.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            y === 3 && e.jsxs("div", {
                                className: "bp-preview-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-preview-tabs",
                                        children: [
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${N === "preview" ? "active" : ""}`,
                                                onClick: ()=>F("preview"),
                                                children: s("site.businessPlan.previewTab")
                                            }),
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${N === "markdown" ? "active" : ""}`,
                                                onClick: ()=>F("markdown"),
                                                children: s("site.businessPlan.markdownTab")
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "bp-preview-content",
                                        children: N === "markdown" ? e.jsx("pre", {
                                            children: E
                                        }) : e.jsx("div", {
                                            className: "bp-preview-rendered",
                                            dangerouslySetInnerHTML: {
                                                __html: z(E)
                                            }
                                        })
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>m(2),
                                                children: s("site.businessPlan.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>m(4),
                                                children: s("site.businessPlan.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            y === 4 && e.jsxs("div", {
                                className: "bp-export-section",
                                children: [
                                    e.jsx("div", {
                                        className: "bp-export-success",
                                        children: p?.icon
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-title",
                                        children: h() || s("site.businessPlan.title")
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-subtitle",
                                        children: i ? "사업계획서가 준비되었습니다. 원하는 형식으로 내보내세요." : "Your business plan is ready. Export in your preferred format."
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-export-buttons",
                                        children: [
                                            e.jsxs("button", {
                                                className: "bp-export-btn primary",
                                                onClick: Z,
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("path", {
                                                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                            }),
                                                            e.jsx("polyline", {
                                                                points: "7 10 12 15 17 10"
                                                            }),
                                                            e.jsx("line", {
                                                                x1: "12",
                                                                y1: "15",
                                                                x2: "12",
                                                                y2: "3"
                                                            })
                                                        ]
                                                    }),
                                                    s("site.businessPlan.downloadHwpx")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: J,
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("path", {
                                                                d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                            }),
                                                            e.jsx("polyline", {
                                                                points: "14 2 14 8 20 8"
                                                            })
                                                        ]
                                                    }),
                                                    s("site.businessPlan.downloadMd")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: X,
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("polyline", {
                                                                points: "16 18 22 12 16 6"
                                                            }),
                                                            e.jsx("polyline", {
                                                                points: "8 6 2 12 8 18"
                                                            })
                                                        ]
                                                    }),
                                                    s("site.businessPlan.downloadHtml")
                                                ]
                                            }),
                                            r && e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: ee,
                                                disabled: D,
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("path", {
                                                                d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                                                            }),
                                                            e.jsx("polyline", {
                                                                points: "17 21 17 13 7 13 7 21"
                                                            }),
                                                            e.jsx("polyline", {
                                                                points: "7 3 7 8 15 8"
                                                            })
                                                        ]
                                                    }),
                                                    D ? "..." : s("site.businessPlan.saveToDb")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: te,
                                                children: [
                                                    e.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            e.jsx("path", {
                                                                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                            }),
                                                            e.jsx("path", {
                                                                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                            })
                                                        ]
                                                    }),
                                                    s("site.businessPlan.openInEditor")
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("button", {
                                        className: "bp-btn",
                                        onClick: ae,
                                        children: s("site.businessPlan.startNew")
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
});
export { ue as default, __tla };
