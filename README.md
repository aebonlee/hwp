# HWP Web

한글(HWP/HWPX) 문서를 웹에서 변환, 편집, 관리하는 도구입니다.

**URL**: https://hwp.dreamitbiz.com

---

## 주요 기능

| 기능 | 설명 | 경로 |
|------|------|------|
| **HWP 에디터** | WASM 기반 한글 문서 편집기 (113개 API) | `/hwp-editor` |
| **문서 변환** | HWP/HWPX → Markdown/HTML 변환 | `/convert` |
| **MD 에디터** | Markdown 편집기 | `/md-editor` |
| **뷰어** | HWP/HWPX 문서 미리보기 | `/viewer` |
| **사업계획서** | AI 기반 사업계획서 생성기 | `/business-plan` |
| **문서 생성기** | 템플릿 기반 문서 자동 생성 | `/generator` |
| **템플릿** | 문서 템플릿 관리 | `/templates` |
| **내 문서** | Supabase 기반 문서 저장/관리 | `/documents` |
| **가이드** | 사용 설명서 | `/guide` |

---

## 기술 스택

- **프론트엔드**: React 19 + TypeScript 5.8 + Vite 7
- **WASM**: `@rhwp/core` ^0.7.9 — Rust 기반 HWP 파서/렌더러
- **백엔드**: Supabase (Auth + PostgreSQL + Edge Functions)
- **배포**: GitHub Pages (`hwp.dreamitbiz.com`)

---

## HWP 에디터 아키텍처

`@rhwp/core` WASM 라이브러리의 172개 공개 메서드 중 113개를 사용하는 웹 기반 한글 문서 편집기입니다.

### 파일 구조

```
src/pages/HwpEditor.tsx              ← 메인 셸 (상태 + 레이아웃 조합)
src/components/hwp/
  ├── EditorToolbar.tsx              ← 상단 툴바 (서식, 삽입, 보기)
  ├── EditorCanvas.tsx               ← Canvas 렌더링 + 마우스 이벤트
  ├── EditorSidebar.tsx              ← 속성 패널
  ├── FindReplaceBar.tsx             ← 찾기/바꾸기
  ├── ContextMenu.tsx                ← 우클릭 메뉴
  ├── dialogs/
  │   ├── TableDialog.tsx            ← 표 삽입
  │   ├── TablePropsDialog.tsx       ← 표 속성
  │   ├── CellPropsDialog.tsx        ← 셀 속성
  │   ├── ShapeDialog.tsx            ← 글상자 삽입/속성
  │   ├── PicturePropsDialog.tsx     ← 그림 속성
  │   ├── StyleDialog.tsx            ← 스타일 관리
  │   ├── PageSetupDialog.tsx        ← 쪽 설정
  │   ├── HeaderFooterDialog.tsx     ← 머리말/꼬리말
  │   ├── FieldDialog.tsx            ← 필드/누름틀
  │   ├── BookmarkDialog.tsx         ← 책갈피
  │   ├── ColumnDialog.tsx           ← 다단 설정
  │   ├── FormDialog.tsx             ← 양식 개체
  │   ├── NumberingDialog.tsx        ← 문단 번호/글머리표
  │   └── EquationDialog.tsx         ← 수식 편집
  └── hooks/
      ├── useEditorState.ts          ← 중앙 상태 관리
      ├── useKeyboard.ts             ← 키보드 이벤트 핸들러
      ├── useClipboard.ts            ← 클립보드 (복사/붙여넣기)
      ├── useCellEditing.ts          ← 셀 편집 로직
      └── useNavigation.ts           ← 커서 네비게이션
src/styles/
  ├── hwp-editor.css                 ← 에디터 스타일
  ├── hwp-dialogs.css                ← 다이얼로그 스타일
  └── dark-mode.css                  ← 다크모드 오버라이드
```

### 편집기 기능

- **텍스트 편집**: 입력, 삭제, 선택, 복사/붙여넣기, 실행취소/다시실행
- **서식**: 글꼴, 크기, 굵게/기울임/밑줄/취소선, 글자색, 강조색
- **문단**: 정렬(좌/중/우/양쪽), 줄간격, 들여쓰기, 글머리표/번호
- **표**: 삽입, 행/열 추가·삭제, 셀 병합·분할, 속성 편집, 수식
- **이미지/도형**: 삽입, 속성 편집, Z순서, 그룹핑
- **머리말/꼬리말**: 생성, 편집, 템플릿 적용, 필드 삽입
- **각주**: 삽입, 편집
- **필드/양식**: 필드 탐색, 값 설정, 누름틀, 체크박스/라디오/콤보
- **스타일**: 생성, 수정, 삭제, 적용
- **책갈피**: 추가, 삭제, 이름변경, 이동
- **다단**: 다단 설정, 단 나누기
- **수식**: 수식 스크립트 편집, SVG 미리보기
- **내보내기**: HWP, HWPX, HTML 내보내기, 문서 검증
- **네비게이션**: F11(컨트롤 탐색), Tab(편집 영역 이동), DFS 탐색
- **한글 IME**: 조합 입력 지원 (hidden textarea 방식)

### 편집 모드

| 모드 | 설명 |
|------|------|
| `body` | 본문 편집 (기본) |
| `cell` | 표 셀 내부 편집 |
| `header` | 머리말 편집 |
| `footer` | 꼬리말 편집 |
| `footnote` | 각주 편집 |

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

## 라이선스

Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.
