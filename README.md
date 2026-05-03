# HWP Web — 한글 문서 통합 플랫폼

한글(HWP/HWPX) 문서를 웹에서 **편집, 변환, 생성, 관리**하는 통합 도구입니다.
Markdown 문서 작성, AI 기반 사업계획서 생성, 클로드 코드와 함께 문서 작업이 가능합니다.

**URL**: https://hwp.dreamitbiz.com

---

## 프로젝트 비전

- HWP/HWPX 파일을 브라우저에서 직접 편집 (설치 불필요)
- Markdown 문서 작성 및 HWP 변환
- AI(Claude)와 함께 문서 작성 및 보정
- 템플릿 기반 공문서/사업계획서 자동 생성
- 문서 클라우드 저장 및 관리

---

## 주요 기능

### 문서 편집

| 기능 | 설명 | 경로 |
|------|------|------|
| **HWP 에디터** | WASM 기반 한글 문서 편집기 (113개 API, 14개 다이얼로그) | `/hwp-editor` |
| **MD 에디터** | Markdown 편집기 (HWPX/HTML/TXT 내보내기) | `/md-editor` |

### 문서 변환/뷰어

| 기능 | 설명 | 경로 |
|------|------|------|
| **문서 변환** | HWP/HWPX → Markdown 변환 + AI 보정 | `/convert` |
| **뷰어** | WASM 기반 HWP/HWPX 미리보기 (확대/축소, SVG 다운로드) | `/viewer` |

### 문서 생성

| 기능 | 설명 | 경로 |
|------|------|------|
| **사업계획서** | 4개 템플릿, 4단계 위자드, HWPX/MD/HTML 내보내기 | `/business-plan` |
| **문서 생성기** | 6종 공문서 (보고서/공문/회의록/제안서/이력서/증명서) | `/generator` |
| **템플릿** | 사용자 정의 템플릿 (HWP 업로드→변환→{{필드}} 자동 감지) | `/templates` |

### 문서 관리

| 기능 | 설명 | 경로 |
|------|------|------|
| **내 문서** | Supabase 기반 문서 클라우드 저장/관리 | `/documents` |
| **가이드** | 전체 기능 사용 설명서 + HWP 생태계 소개 | `/guide` |

---

## 기술 스택

| 항목 | 기술 |
|------|------|
| 프론트엔드 | React 19 + TypeScript 5.8 + Vite 7 |
| WASM 엔진 | `@rhwp/core` ^0.7.9 (Rust → WebAssembly) |
| 백엔드 | Supabase (Auth + PostgreSQL + Edge Functions) |
| 인증 | Google OAuth + Kakao OAuth + 이메일 |
| 다국어 | 한국어/영어 (547개 번역 키) |
| 테마 | 다크/라이트 + 5색 컬러 테마 |
| 배포 | GitHub Pages (`hwp.dreamitbiz.com`) |

---

## 프로젝트 통계

| 항목 | 수치 |
|------|------|
| 소스 파일 | 111개 (TSX 55 + TS 35 + CSS 21) |
| 총 코드량 | ~26,500줄 |
| React 컴포넌트 | 55개 |
| 커스텀 훅 | 7개 |
| 페이지 라우트 | 18개 (보호 7개) |
| WASM API 사용 | 113 / 172개 (66%) |

---

## HWP 에디터 아키텍처

`@rhwp/core` WASM 라이브러리의 172개 공개 메서드 중 113개를 사용하는 웹 기반 한글 문서 편집기입니다.

### 파일 구조 (26개 모듈)

```
src/pages/HwpEditor.tsx                ← 메인 셸 (상태 + 레이아웃)
src/components/hwp/
  ├── EditorToolbar.tsx                ← 상단 툴바 (서식, 삽입, 보기)
  ├── EditorCanvas.tsx                 ← Canvas 렌더링 + 마우스 이벤트
  ├── EditorSidebar.tsx                ← 속성 패널
  ├── FindReplaceBar.tsx               ← 찾기/바꾸기
  ├── ContextMenu.tsx                  ← 우클릭 메뉴
  ├── dialogs/                         ← 14개 다이얼로그
  │   ├── TableDialog.tsx              ← 표 삽입 (createTableEx)
  │   ├── TablePropsDialog.tsx         ← 표 속성 편집
  │   ├── CellPropsDialog.tsx          ← 셀 속성 (패딩, 정렬, 배경색)
  │   ├── ShapeDialog.tsx              ← 글상자 삽입/속성
  │   ├── PicturePropsDialog.tsx       ← 그림 속성 (크기, 효과, 다운로드)
  │   ├── StyleDialog.tsx              ← 스타일 관리 (CRUD)
  │   ├── PageSetupDialog.tsx          ← 쪽 설정 (용지, 구역, 감추기)
  │   ├── HeaderFooterDialog.tsx       ← 머리말/꼬리말 (템플릿, 필드)
  │   ├── FieldDialog.tsx              ← 필드/누름틀 관리
  │   ├── BookmarkDialog.tsx           ← 책갈피 (추가, 이동, 이름변경)
  │   ├── ColumnDialog.tsx             ← 다단 설정 (미리보기 포함)
  │   ├── FormDialog.tsx               ← 양식 개체 (체크박스, 라디오, 콤보)
  │   ├── NumberingDialog.tsx          ← 문단 번호/글머리표
  │   └── EquationDialog.tsx           ← 수식 편집 (SVG 미리보기)
  └── hooks/                           ← 5개 커스텀 훅
      ├── useEditorState.ts            ← 중앙 상태 관리 (커서, 선택, 편집모드)
      ├── useKeyboard.ts              ← 키보드 이벤트 + 단축키
      ├── useClipboard.ts             ← 복사/붙여넣기 (body + cell)
      ├── useCellEditing.ts           ← 셀 편집 (서식, 선택, 삭제, 입력)
      └── useNavigation.ts            ← F11/Tab/DFS 탐색, 중첩 표 이동
```

### 편집기 기능

- **텍스트**: 입력, 삭제, 선택, 복사/붙여넣기, 실행취소/다시실행
- **서식**: 글꼴, 크기, 굵게/기울임/밑줄/취소선, 글자색, 강조색
- **문단**: 정렬, 줄간격, 들여쓰기, 글머리표/번호
- **표**: 삽입, 행/열 추가/삭제, 셀 병합/분할, 속성, 수식
- **이미지/도형**: 삽입, 속성, Z순서, 그룹, 이미지 다운로드
- **머리말/꼬리말**: 생성, 편집, 템플릿, 필드, 페이지별 탐색
- **각주**: 삽입, 편집
- **필드/양식**: 필드 탐색/설정, 누름틀, 체크박스/라디오/콤보
- **스타일**: 생성/수정/삭제/적용
- **책갈피**: 추가/삭제/이름변경/이동
- **다단**: 다단 설정, 단 나누기
- **수식**: 수식 스크립트, 기호 팔레트, SVG 미리보기
- **내보내기**: HWP, HWPX, HTML, 문서 검증
- **네비게이션**: F11(컨트롤), Tab(편집 영역), DFS(전체 순회)
- **한글 IME**: hidden textarea 방식 조합 입력

### 편집 모드

| 모드 | 설명 |
|------|------|
| `body` | 본문 편집 (기본) |
| `cell` | 표 셀 내부 편집 |
| `header` | 머리말 편집 |
| `footer` | 꼬리말 편집 |
| `footnote` | 각주 편집 |

---

## 관련 프로젝트

HWP Web은 아래 오픈소스 프로젝트들과 함께 HWP 문서 생태계를 구성합니다.

| 프로젝트 | 설명 |
|----------|------|
| `@rhwp/core` | Rust → WASM HWP 파서/렌더러 (핵심 엔진) |
| `hwp2md` | HWP → Markdown 변환 CLI/라이브러리 |
| `hwp-mcp` | HWP MCP 서버 (Claude 연동) |
| `python-hwplib` | Python HWP 라이브러리 |

---

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 (localhost:5173)
npm run dev

# 타입 체크
npm run typecheck

# 빌드
npm run build

# 배포
npx gh-pages -d dist
```

### 환경 변수

`.env` 파일에 Supabase 키 설정 필요:

```env
VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxxxxxxx
```

---

## 배포

GitHub Pages를 통해 배포됩니다.

```bash
npm run build          # tsc + vite build
npx gh-pages -d dist   # gh-pages 브랜치로 배포
```

- **도메인**: `hwp.dreamitbiz.com` (`public/CNAME`)
- **SPA 라우팅**: `public/404.html`에서 리다이렉트 처리

---

## 개발 이력

| 날짜 | 작업 |
|------|------|
| 2026-04-11 | 초기 구축 — 전체 웹앱 프레임, CNAME, 디자인 |
| 2026-04-12 | 템플릿 시스템 리디자인 |
| 2026-04-15~23 | 알림 인프라, 관리자, 모바일 최적화 |
| 2026-04-30 | page-header + 다크모드 전 사이트 패치 |
| 2026-05-03 | HWP 에디터 WASM 통합 + 97개 API 구현 + 컴포넌트 분리 |

전체 개발 일지: `Dev_md/2026-05-03_hwp-editor-full-api-implementation.md`

---

## 라이선스

Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.
