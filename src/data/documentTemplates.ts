import type { DocumentTemplate } from '../types/generator';

export const documentTemplates: DocumentTemplate[] = [
  // ── 1. 업무 보고서 ──
  {
    type: 'report',
    nameKo: '업무 보고서',
    nameEn: 'Work Report',
    icon: '\u{1F4CB}',
    descKo: '업무 성과와 이슈를 체계적으로 정리하는 보고서',
    descEn: 'Systematic report of work results and issues',
    sections: [
      {
        id: 'basic',
        titleKo: '기본 정보',
        titleEn: 'Basic Information',
        fields: [
          { key: 'reportTitle', labelKo: '보고서 제목', labelEn: 'Report Title', type: 'text', required: true },
          { key: 'reportDate', labelKo: '보고일', labelEn: 'Report Date', type: 'date', required: true },
          { key: 'department', labelKo: '부서', labelEn: 'Department', type: 'text', required: true },
          { key: 'author', labelKo: '작성자', labelEn: 'Author', type: 'text', required: true },
          { key: 'reportPeriod', labelKo: '보고 기간', labelEn: 'Report Period', type: 'text' },
        ],
      },
      {
        id: 'content',
        titleKo: '보고 내용',
        titleEn: 'Report Content',
        fields: [
          { key: 'achievements', labelKo: '주요 성과', labelEn: 'Key Achievements', type: 'textarea', required: true },
          { key: 'issues', labelKo: '이슈 사항', labelEn: 'Issues', type: 'textarea' },
          { key: 'nextPlan', labelKo: '차기 계획', labelEn: 'Next Plan', type: 'textarea' },
          { key: 'notes', labelKo: '비고', labelEn: 'Notes', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{reportTitle}}

| 항목 | 내용 |
|------|------|
| 보고일 | {{reportDate}} |
| 부서 | {{department}} |
| 작성자 | {{author}} |
| 보고 기간 | {{reportPeriod}} |

## 주요 성과

{{achievements}}

## 이슈 사항

{{issues}}

## 차기 계획

{{nextPlan}}

## 비고

{{notes}}
`,
  },

  // ── 2. 공문/서한 ──
  {
    type: 'letter',
    nameKo: '공문/서한',
    nameEn: 'Official Letter',
    icon: '\u{2709}\u{FE0F}',
    descKo: '공식적인 문서 전달을 위한 서한 양식',
    descEn: 'Official letter format for formal document delivery',
    sections: [
      {
        id: 'header',
        titleKo: '문서 정보',
        titleEn: 'Document Info',
        fields: [
          { key: 'letterTitle', labelKo: '제목', labelEn: 'Title', type: 'text', required: true },
          { key: 'recipient', labelKo: '수신', labelEn: 'Recipient', type: 'text', required: true },
          { key: 'reference', labelKo: '참조', labelEn: 'CC', type: 'text' },
          { key: 'letterDate', labelKo: '발신일', labelEn: 'Date', type: 'date', required: true },
          { key: 'sender', labelKo: '발신자', labelEn: 'Sender', type: 'text', required: true },
          { key: 'senderOrg', labelKo: '발신 기관', labelEn: 'Sender Organization', type: 'text' },
        ],
      },
      {
        id: 'body',
        titleKo: '본문',
        titleEn: 'Body',
        fields: [
          { key: 'letterBody', labelKo: '본문 내용', labelEn: 'Body Content', type: 'textarea', required: true },
          { key: 'attachment', labelKo: '첨부', labelEn: 'Attachment', type: 'text' },
        ],
      },
    ],
    markdownTemplate: `# {{letterTitle}}

| 항목 | 내용 |
|------|------|
| 수신 | {{recipient}} |
| 참조 | {{reference}} |
| 발신일 | {{letterDate}} |
| 발신자 | {{sender}} |
| 발신 기관 | {{senderOrg}} |

---

{{letterBody}}

---

**첨부:** {{attachment}}

**발신자:** {{sender}} / {{senderOrg}}
`,
  },

  // ── 3. 회의록 ──
  {
    type: 'minutes',
    nameKo: '회의록',
    nameEn: 'Meeting Minutes',
    icon: '\u{1F4DD}',
    descKo: '회의 내용과 결정사항을 기록하는 회의록',
    descEn: 'Record meeting discussions and decisions',
    sections: [
      {
        id: 'info',
        titleKo: '회의 정보',
        titleEn: 'Meeting Info',
        fields: [
          { key: 'meetingTitle', labelKo: '회의명', labelEn: 'Meeting Title', type: 'text', required: true },
          { key: 'meetingDate', labelKo: '일시', labelEn: 'Date & Time', type: 'text', required: true },
          { key: 'meetingPlace', labelKo: '장소', labelEn: 'Location', type: 'text', required: true },
          { key: 'attendees', labelKo: '참석자', labelEn: 'Attendees', type: 'textarea', required: true },
          { key: 'recorder', labelKo: '기록자', labelEn: 'Recorder', type: 'text' },
        ],
      },
      {
        id: 'content',
        titleKo: '회의 내용',
        titleEn: 'Meeting Content',
        fields: [
          { key: 'agenda', labelKo: '안건', labelEn: 'Agenda', type: 'textarea', required: true },
          { key: 'discussion', labelKo: '논의 내용', labelEn: 'Discussion', type: 'textarea' },
          { key: 'decisions', labelKo: '결정 사항', labelEn: 'Decisions', type: 'textarea', required: true },
          { key: 'actionItems', labelKo: '후속 조치', labelEn: 'Action Items', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{meetingTitle}} 회의록

| 항목 | 내용 |
|------|------|
| 일시 | {{meetingDate}} |
| 장소 | {{meetingPlace}} |
| 참석자 | {{attendees}} |
| 기록자 | {{recorder}} |

## 안건

{{agenda}}

## 논의 내용

{{discussion}}

## 결정 사항

{{decisions}}

## 후속 조치

{{actionItems}}
`,
  },

  // ── 4. 제안서 ──
  {
    type: 'proposal',
    nameKo: '제안서',
    nameEn: 'Proposal',
    icon: '\u{1F4CA}',
    descKo: '사업 또는 프로젝트 제안을 위한 양식',
    descEn: 'Format for business or project proposals',
    sections: [
      {
        id: 'overview',
        titleKo: '제안 개요',
        titleEn: 'Proposal Overview',
        fields: [
          { key: 'proposalTitle', labelKo: '제안명', labelEn: 'Proposal Title', type: 'text', required: true },
          { key: 'proposalDate', labelKo: '제안일', labelEn: 'Proposal Date', type: 'date', required: true },
          { key: 'proposer', labelKo: '제안자', labelEn: 'Proposer', type: 'text', required: true },
          { key: 'background', labelKo: '배경', labelEn: 'Background', type: 'textarea', required: true },
          { key: 'purpose', labelKo: '목적', labelEn: 'Purpose', type: 'textarea', required: true },
        ],
      },
      {
        id: 'detail',
        titleKo: '상세 내용',
        titleEn: 'Details',
        fields: [
          { key: 'scope', labelKo: '범위', labelEn: 'Scope', type: 'textarea', required: true },
          { key: 'schedule', labelKo: '일정', labelEn: 'Schedule', type: 'textarea' },
          { key: 'budget', labelKo: '예산', labelEn: 'Budget', type: 'textarea' },
          { key: 'expectedEffect', labelKo: '기대 효과', labelEn: 'Expected Effect', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# {{proposalTitle}}

| 항목 | 내용 |
|------|------|
| 제안일 | {{proposalDate}} |
| 제안자 | {{proposer}} |

## 1. 배경

{{background}}

## 2. 목적

{{purpose}}

## 3. 범위

{{scope}}

## 4. 일정

{{schedule}}

## 5. 예산

{{budget}}

## 6. 기대 효과

{{expectedEffect}}
`,
  },

  // ── 5. 이력서 ──
  {
    type: 'resume',
    nameKo: '이력서',
    nameEn: 'Resume',
    icon: '\u{1F464}',
    descKo: '취업 및 자기소개를 위한 이력서 양식',
    descEn: 'Resume format for job applications',
    sections: [
      {
        id: 'personal',
        titleKo: '인적 사항',
        titleEn: 'Personal Info',
        fields: [
          { key: 'fullName', labelKo: '이름', labelEn: 'Full Name', type: 'text', required: true },
          { key: 'phone', labelKo: '연락처', labelEn: 'Phone', type: 'text', required: true },
          { key: 'email', labelKo: '이메일', labelEn: 'Email', type: 'text', required: true },
          { key: 'address', labelKo: '주소', labelEn: 'Address', type: 'text' },
        ],
      },
      {
        id: 'career',
        titleKo: '학력 및 경력',
        titleEn: 'Education & Career',
        fields: [
          { key: 'education', labelKo: '학력', labelEn: 'Education', type: 'textarea', required: true },
          { key: 'experience', labelKo: '경력', labelEn: 'Work Experience', type: 'textarea' },
          { key: 'certifications', labelKo: '자격증', labelEn: 'Certifications', type: 'textarea' },
        ],
      },
      {
        id: 'intro',
        titleKo: '자기소개',
        titleEn: 'Self Introduction',
        fields: [
          { key: 'selfIntro', labelKo: '자기소개서', labelEn: 'Self Introduction', type: 'textarea', required: true },
          { key: 'skills', labelKo: '보유 기술', labelEn: 'Skills', type: 'textarea' },
        ],
      },
    ],
    markdownTemplate: `# 이력서

## 인적 사항

| 항목 | 내용 |
|------|------|
| 이름 | {{fullName}} |
| 연락처 | {{phone}} |
| 이메일 | {{email}} |
| 주소 | {{address}} |

## 학력

{{education}}

## 경력

{{experience}}

## 자격증

{{certifications}}

## 자기소개

{{selfIntro}}

## 보유 기술

{{skills}}
`,
  },

  // ── 6. 증명서 ──
  {
    type: 'certificate',
    nameKo: '증명서',
    nameEn: 'Certificate',
    icon: '\u{1F4DC}',
    descKo: '각종 증명서 발급을 위한 양식',
    descEn: 'Template for issuing various certificates',
    sections: [
      {
        id: 'issuer',
        titleKo: '발급 정보',
        titleEn: 'Issuer Info',
        fields: [
          { key: 'issuerOrg', labelKo: '발급 기관', labelEn: 'Issuing Organization', type: 'text', required: true },
          { key: 'issueDate', labelKo: '발급일', labelEn: 'Issue Date', type: 'date', required: true },
          { key: 'issueNumber', labelKo: '발급 번호', labelEn: 'Issue Number', type: 'text' },
        ],
      },
      {
        id: 'content',
        titleKo: '증명 내용',
        titleEn: 'Certificate Content',
        fields: [
          { key: 'certRecipient', labelKo: '수신자', labelEn: 'Recipient', type: 'text', required: true },
          { key: 'certTitle', labelKo: '증명서 제목', labelEn: 'Certificate Title', type: 'text', required: true },
          { key: 'certContent', labelKo: '증명 내용', labelEn: 'Certificate Content', type: 'textarea', required: true },
          { key: 'certPurpose', labelKo: '용도', labelEn: 'Purpose', type: 'text' },
        ],
      },
    ],
    markdownTemplate: `# {{certTitle}}

**발급 번호:** {{issueNumber}}

**발급일:** {{issueDate}}

---

**수신:** {{certRecipient}}

## 증명 내용

{{certContent}}

---

**용도:** {{certPurpose}}

위 내용을 증명합니다.

**발급 기관:** {{issuerOrg}}

**발급일:** {{issueDate}}
`,
  },
];
