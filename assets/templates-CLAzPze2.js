const e=[{id:"business-plan",category:"business",title:"사업계획서",title_en:"Business Plan",description:"창업 및 사업 추진을 위한 표준 사업계획서 양식",content:`# 사업계획서

## 1. 사업 개요

### 사업명
{{business_name}}

### 대표자
{{representative}}

### 사업 목적
{{purpose}}

## 2. 시장 분석

### 목표 시장
{{target_market}}

### 경쟁 분석
{{competition}}

## 3. 사업 전략

### 마케팅 전략
{{marketing_strategy}}

### 운영 계획
{{operation_plan}}

## 4. 재무 계획

### 소요 자금
{{required_fund}}

### 예상 매출
{{expected_revenue}}

### 손익 분기점
{{break_even}}

## 5. 추진 일정

{{schedule}}
`,fields:[{key:"business_name",label:"사업명",label_en:"Business Name",type:"text",placeholder:"예: AI 교육 플랫폼",required:!0},{key:"representative",label:"대표자",label_en:"Representative",type:"text",placeholder:"홍길동",required:!0},{key:"purpose",label:"사업 목적",label_en:"Purpose",type:"textarea",placeholder:"사업의 목적과 비전을 기술하세요",required:!0},{key:"target_market",label:"목표 시장",label_en:"Target Market",type:"textarea",placeholder:"시장 규모와 타겟 고객을 기술하세요",required:!1},{key:"competition",label:"경쟁 분석",label_en:"Competition",type:"textarea",placeholder:"주요 경쟁사 및 차별화 전략",required:!1},{key:"marketing_strategy",label:"마케팅 전략",label_en:"Marketing Strategy",type:"textarea",placeholder:"마케팅 및 영업 전략",required:!1},{key:"operation_plan",label:"운영 계획",label_en:"Operation Plan",type:"textarea",placeholder:"인력, 설비, 운영 방안",required:!1},{key:"required_fund",label:"소요 자금",label_en:"Required Fund",type:"text",placeholder:"예: 5,000만 원",required:!1},{key:"expected_revenue",label:"예상 매출",label_en:"Expected Revenue",type:"text",placeholder:"예: 연 1억 원",required:!1},{key:"break_even",label:"손익 분기점",label_en:"Break Even",type:"text",placeholder:"예: 12개월",required:!1},{key:"schedule",label:"추진 일정",label_en:"Schedule",type:"textarea",placeholder:"주요 마일스톤과 일정",required:!1}],sort_order:1,is_active:!0},{id:"syllabus",category:"education",title:"강의계획서",title_en:"Syllabus",description:"대학/교육기관 강의계획서 양식",content:`# 강의계획서

## 교과목 정보

| 항목 | 내용 |
|------|------|
| 교과목명 | {{course_name}} |
| 담당교수 | {{professor}} |
| 학점/시수 | {{credits}} |
| 수업 시간 | {{schedule}} |
| 강의실 | {{room}} |
| 연락처 | {{contact}} |

## 교과목 개요
{{course_description}}

## 수업 목표
{{objectives}}

## 주차별 강의 계획

| 주차 | 내용 | 비고 |
|------|------|------|
| 1주 | 오리엔테이션 | |
| 2주 | {{week2}} | |
| 3주 | {{week3}} | |
| 4주 | {{week4}} | |
| 5-7주 | {{week5_7}} | |
| 8주 | 중간고사 | |
| 9-14주 | {{week9_14}} | |
| 15주 | 기말고사 | |

## 평가 방법
{{evaluation}}

## 교재 및 참고문헌
{{textbook}}
`,fields:[{key:"course_name",label:"교과목명",label_en:"Course Name",type:"text",placeholder:"예: 데이터베이스 개론",required:!0},{key:"professor",label:"담당교수",label_en:"Professor",type:"text",placeholder:"예: 홍길동",required:!0},{key:"credits",label:"학점/시수",label_en:"Credits",type:"text",placeholder:"예: 3학점/3시수",required:!1},{key:"schedule",label:"수업 시간",label_en:"Schedule",type:"text",placeholder:"예: 월/수 10:00~11:30",required:!1},{key:"room",label:"강의실",label_en:"Room",type:"text",placeholder:"예: 공학관 301호",required:!1},{key:"contact",label:"연락처",label_en:"Contact",type:"text",placeholder:"예: hong@university.ac.kr",required:!1},{key:"course_description",label:"교과목 개요",label_en:"Description",type:"textarea",placeholder:"교과목의 전반적인 내용을 소개하세요",required:!1},{key:"objectives",label:"수업 목표",label_en:"Objectives",type:"textarea",placeholder:"수업을 통해 달성할 목표",required:!1},{key:"week2",label:"2주차 내용",label_en:"Week 2",type:"text",placeholder:"",required:!1},{key:"week3",label:"3주차 내용",label_en:"Week 3",type:"text",placeholder:"",required:!1},{key:"week4",label:"4주차 내용",label_en:"Week 4",type:"text",placeholder:"",required:!1},{key:"week5_7",label:"5-7주차 내용",label_en:"Week 5-7",type:"text",placeholder:"",required:!1},{key:"week9_14",label:"9-14주차 내용",label_en:"Week 9-14",type:"text",placeholder:"",required:!1},{key:"evaluation",label:"평가 방법",label_en:"Evaluation",type:"textarea",placeholder:"예: 중간 30%, 기말 30%, 과제 20%, 출석 20%",required:!1},{key:"textbook",label:"교재",label_en:"Textbook",type:"textarea",placeholder:"교재명 / 저자 / 출판사",required:!1}],sort_order:2,is_active:!0},{id:"report",category:"official",title:"보고서",title_en:"Report",description:"업무 보고 및 연구 보고서 양식",content:`# {{title}}

**작성자**: {{author}}
**작성일**: {{date}}
**부서/소속**: {{department}}

---

## 1. 개요
{{overview}}

## 2. 현황 분석
{{analysis}}

## 3. 주요 내용
{{main_content}}

## 4. 결론 및 제언
{{conclusion}}

## 5. 첨부
{{attachments}}
`,fields:[{key:"title",label:"보고서 제목",label_en:"Title",type:"text",placeholder:"예: 2026년 1분기 실적 보고",required:!0},{key:"author",label:"작성자",label_en:"Author",type:"text",placeholder:"홍길동",required:!0},{key:"date",label:"작성일",label_en:"Date",type:"date",placeholder:"",required:!1},{key:"department",label:"부서/소속",label_en:"Department",type:"text",placeholder:"예: 기획팀",required:!1},{key:"overview",label:"개요",label_en:"Overview",type:"textarea",placeholder:"보고의 배경과 목적",required:!1},{key:"analysis",label:"현황 분석",label_en:"Analysis",type:"textarea",placeholder:"현재 상황 분석",required:!1},{key:"main_content",label:"주요 내용",label_en:"Main Content",type:"textarea",placeholder:"보고의 핵심 내용",required:!1},{key:"conclusion",label:"결론 및 제언",label_en:"Conclusion",type:"textarea",placeholder:"결론과 향후 방향",required:!1},{key:"attachments",label:"첨부",label_en:"Attachments",type:"textarea",placeholder:"첨부 자료 목록",required:!1}],sort_order:3,is_active:!0},{id:"resume",category:"personal",title:"이력서",title_en:"Resume",description:"취업용 표준 이력서 양식",content:`# 이력서

## 인적 사항

| 항목 | 내용 |
|------|------|
| 성명 | {{name}} |
| 생년월일 | {{birth}} |
| 연락처 | {{phone}} |
| 이메일 | {{email}} |
| 주소 | {{address}} |

## 학력

{{education}}

## 경력

{{experience}}

## 자격증/수상

{{certifications}}

## 기타

{{other}}
`,fields:[{key:"name",label:"성명",label_en:"Name",type:"text",placeholder:"홍길동",required:!0},{key:"birth",label:"생년월일",label_en:"Date of Birth",type:"text",placeholder:"1990.01.01",required:!1},{key:"phone",label:"연락처",label_en:"Phone",type:"text",placeholder:"010-1234-5678",required:!1},{key:"email",label:"이메일",label_en:"Email",type:"text",placeholder:"hong@email.com",required:!1},{key:"address",label:"주소",label_en:"Address",type:"text",placeholder:"서울시 강남구...",required:!1},{key:"education",label:"학력",label_en:"Education",type:"textarea",placeholder:"학력 사항을 입력하세요",required:!1},{key:"experience",label:"경력",label_en:"Experience",type:"textarea",placeholder:"경력 사항을 입력하세요",required:!1},{key:"certifications",label:"자격증/수상",label_en:"Certifications",type:"textarea",placeholder:"자격증 및 수상 내역",required:!1},{key:"other",label:"기타",label_en:"Other",type:"textarea",placeholder:"기타 특기 사항",required:!1}],sort_order:4,is_active:!0},{id:"meeting-minutes",category:"official",title:"회의록",title_en:"Meeting Minutes",description:"회의 내용 기록용 표준 양식",content:`# 회의록

| 항목 | 내용 |
|------|------|
| 회의명 | {{meeting_name}} |
| 일시 | {{datetime}} |
| 장소 | {{location}} |
| 참석자 | {{attendees}} |
| 작성자 | {{writer}} |

## 회의 안건
{{agenda}}

## 논의 내용
{{discussion}}

## 결정 사항
{{decisions}}

## 향후 일정
{{next_steps}}
`,fields:[{key:"meeting_name",label:"회의명",label_en:"Meeting Name",type:"text",placeholder:"예: 월간 정례 회의",required:!0},{key:"datetime",label:"일시",label_en:"Date/Time",type:"text",placeholder:"2026.04.11 14:00",required:!1},{key:"location",label:"장소",label_en:"Location",type:"text",placeholder:"예: 본사 3층 대회의실",required:!1},{key:"attendees",label:"참석자",label_en:"Attendees",type:"textarea",placeholder:"참석자 명단",required:!1},{key:"writer",label:"작성자",label_en:"Writer",type:"text",placeholder:"홍길동",required:!1},{key:"agenda",label:"회의 안건",label_en:"Agenda",type:"textarea",placeholder:"회의 안건을 입력하세요",required:!1},{key:"discussion",label:"논의 내용",label_en:"Discussion",type:"textarea",placeholder:"주요 논의 내용",required:!1},{key:"decisions",label:"결정 사항",label_en:"Decisions",type:"textarea",placeholder:"결정된 사항들",required:!1},{key:"next_steps",label:"향후 일정",label_en:"Next Steps",type:"textarea",placeholder:"후속 조치 및 일정",required:!1}],sort_order:5,is_active:!0},{id:"proposal",category:"business",title:"제안서",title_en:"Proposal",description:"프로젝트 및 사업 제안서 양식",content:`# {{title}}

**제안 기관**: {{organization}}
**제안 일자**: {{date}}
**담당자**: {{contact_person}}

---

## 1. 제안 배경
{{background}}

## 2. 제안 내용
{{proposal_content}}

## 3. 기대 효과
{{expected_effect}}

## 4. 추진 일정

{{schedule}}

## 5. 소요 예산

{{budget}}

## 6. 기타 사항
{{remarks}}
`,fields:[{key:"title",label:"제안서 제목",label_en:"Title",type:"text",placeholder:"예: AI 기반 교육 시스템 도입 제안",required:!0},{key:"organization",label:"제안 기관",label_en:"Organization",type:"text",placeholder:"예: (주)드림아이티",required:!1},{key:"date",label:"제안 일자",label_en:"Date",type:"date",placeholder:"",required:!1},{key:"contact_person",label:"담당자",label_en:"Contact",type:"text",placeholder:"홍길동 / 010-1234-5678",required:!1},{key:"background",label:"제안 배경",label_en:"Background",type:"textarea",placeholder:"제안의 배경과 필요성",required:!1},{key:"proposal_content",label:"제안 내용",label_en:"Content",type:"textarea",placeholder:"구체적인 제안 내용",required:!1},{key:"expected_effect",label:"기대 효과",label_en:"Expected Effect",type:"textarea",placeholder:"도입 시 기대되는 효과",required:!1},{key:"schedule",label:"추진 일정",label_en:"Schedule",type:"textarea",placeholder:"단계별 추진 일정",required:!1},{key:"budget",label:"소요 예산",label_en:"Budget",type:"textarea",placeholder:"항목별 예산",required:!1},{key:"remarks",label:"기타",label_en:"Remarks",type:"textarea",placeholder:"기타 참고 사항",required:!1}],sort_order:6,is_active:!0},{id:"official-letter",category:"official",title:"공문",title_en:"Official Letter",description:"공식 문서 발송용 공문 양식",content:`{{organization}}

문서번호: {{doc_number}}
시행일자: {{date}}

수신: {{recipient}}
(경유: {{via}})

제목: {{title}}

{{body}}

붙임: {{attachments}}

{{organization}}
{{sender_position}} {{sender_name}}
`,fields:[{key:"organization",label:"발신 기관",label_en:"Organization",type:"text",placeholder:"예: (주)드림아이티비즈",required:!0},{key:"doc_number",label:"문서번호",label_en:"Document No.",type:"text",placeholder:"예: DIT-2026-0041",required:!1},{key:"date",label:"시행일자",label_en:"Date",type:"date",placeholder:"",required:!1},{key:"recipient",label:"수신",label_en:"Recipient",type:"text",placeholder:"수신 기관/부서",required:!0},{key:"via",label:"경유",label_en:"Via",type:"text",placeholder:"경유처 (없으면 비워두세요)",required:!1},{key:"title",label:"제목",label_en:"Title",type:"text",placeholder:"공문 제목",required:!0},{key:"body",label:"본문",label_en:"Body",type:"textarea",placeholder:"공문 내용을 작성하세요",required:!0},{key:"attachments",label:"붙임",label_en:"Attachments",type:"textarea",placeholder:"첨부 문서 목록",required:!1},{key:"sender_position",label:"발신자 직위",label_en:"Sender Position",type:"text",placeholder:"예: 대표이사",required:!1},{key:"sender_name",label:"발신자 성명",label_en:"Sender Name",type:"text",placeholder:"예: 이애본",required:!1}],sort_order:7,is_active:!0},{id:"certificate",category:"official",title:"수료증/증명서",title_en:"Certificate",description:"교육 수료증 및 각종 증명서 양식",content:`# {{cert_type}}

**제 {{cert_number}} 호**

---

성명: {{name}}
생년월일: {{birth}}

{{body}}

위 사실을 증명합니다.

{{date}}

**{{organization}}**
{{issuer_position}} {{issuer_name}} (인)
`,fields:[{key:"cert_type",label:"증명서 종류",label_en:"Certificate Type",type:"text",placeholder:"예: 수료증, 재직증명서, 경력증명서",required:!0},{key:"cert_number",label:"증명서 번호",label_en:"Certificate No.",type:"text",placeholder:"2026-001",required:!1},{key:"name",label:"성명",label_en:"Name",type:"text",placeholder:"홍길동",required:!0},{key:"birth",label:"생년월일",label_en:"Date of Birth",type:"text",placeholder:"1990.01.01",required:!1},{key:"body",label:"증명 내용",label_en:"Content",type:"textarea",placeholder:"증명할 내용을 입력하세요",required:!0},{key:"date",label:"발급일",label_en:"Date",type:"date",placeholder:"",required:!1},{key:"organization",label:"발급 기관",label_en:"Organization",type:"text",placeholder:"예: (주)드림아이티비즈",required:!0},{key:"issuer_position",label:"발급자 직위",label_en:"Issuer Position",type:"text",placeholder:"예: 대표이사",required:!1},{key:"issuer_name",label:"발급자 성명",label_en:"Issuer Name",type:"text",placeholder:"예: 이애본",required:!1}],sort_order:8,is_active:!0},{id:"self-intro",category:"personal",title:"자기소개서",title_en:"Self Introduction",description:"취업/진학용 자기소개서 양식",content:`# 자기소개서

**지원자**: {{name}}
**지원 분야**: {{position}}

## 1. 성장 과정
{{growth}}

## 2. 성격의 장단점
{{personality}}

## 3. 지원 동기
{{motivation}}

## 4. 입사 후 포부
{{aspiration}}
`,fields:[{key:"name",label:"성명",label_en:"Name",type:"text",placeholder:"홍길동",required:!0},{key:"position",label:"지원 분야",label_en:"Position",type:"text",placeholder:"예: 소프트웨어 개발",required:!1},{key:"growth",label:"성장 과정",label_en:"Growth",type:"textarea",placeholder:"성장 배경과 가치관을 기술하세요",required:!1},{key:"personality",label:"성격의 장단점",label_en:"Personality",type:"textarea",placeholder:"장점과 단점을 솔직하게 기술하세요",required:!1},{key:"motivation",label:"지원 동기",label_en:"Motivation",type:"textarea",placeholder:"지원 동기를 구체적으로 기술하세요",required:!1},{key:"aspiration",label:"입사 후 포부",label_en:"Aspiration",type:"textarea",placeholder:"입사 후 이루고 싶은 목표",required:!1}],sort_order:9,is_active:!0},{id:"thesis-format",category:"education",title:"논문양식",title_en:"Thesis Format",description:"학위논문 및 학술논문 기본 양식",content:`# {{title}}

**{{author}}**
{{affiliation}}

## 초록 (Abstract)
{{abstract}}

**키워드**: {{keywords}}

## 1. 서론
{{introduction}}

## 2. 이론적 배경
{{background}}

## 3. 연구 방법
{{methodology}}

## 4. 연구 결과
{{results}}

## 5. 결론
{{conclusion}}

## 참고문헌
{{references}}
`,fields:[{key:"title",label:"논문 제목",label_en:"Title",type:"text",placeholder:"논문 제목을 입력하세요",required:!0},{key:"author",label:"저자",label_en:"Author",type:"text",placeholder:"홍길동",required:!0},{key:"affiliation",label:"소속",label_en:"Affiliation",type:"text",placeholder:"예: 경기대학교 컴퓨터공학과",required:!1},{key:"abstract",label:"초록",label_en:"Abstract",type:"textarea",placeholder:"연구 요약 (300자 내외)",required:!1},{key:"keywords",label:"키워드",label_en:"Keywords",type:"text",placeholder:"예: HWP, 문서 변환, 마크다운",required:!1},{key:"introduction",label:"서론",label_en:"Introduction",type:"textarea",placeholder:"연구 배경과 목적",required:!1},{key:"background",label:"이론적 배경",label_en:"Background",type:"textarea",placeholder:"선행 연구 및 이론적 배경",required:!1},{key:"methodology",label:"연구 방법",label_en:"Methodology",type:"textarea",placeholder:"연구 방법론",required:!1},{key:"results",label:"연구 결과",label_en:"Results",type:"textarea",placeholder:"연구 결과",required:!1},{key:"conclusion",label:"결론",label_en:"Conclusion",type:"textarea",placeholder:"결론 및 향후 연구",required:!1},{key:"references",label:"참고문헌",label_en:"References",type:"textarea",placeholder:"참고문헌 목록",required:!1}],sort_order:10,is_active:!0}];export{e as t};
