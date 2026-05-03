import { useState, useEffect, useMemo, type ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import getSupabase, { TABLES } from '../utils/supabase';
import type { HwpTemplate } from '../types';
import '../styles/templates.css';

/** Built-in sample templates that don't require login */
const SAMPLE_TEMPLATES = [
  {
    id: '__sample_meeting',
    titleKo: '회의록',
    titleEn: 'Meeting Minutes',
    descKo: '회의 내용, 참석자, 결정사항을 기록하는 표준 회의록',
    descEn: 'Standard meeting minutes with attendees, agenda, and decisions',
    icon: '\u{1F4CB}',
    category: 'business',
    content: `# {{회의명}} 회의록

## 회의 정보

| 항목 | 내용 |
|------|------|
| 일시 | {{일시}} |
| 장소 | {{장소}} |
| 참석자 | {{참석자}} |
| 작성자 | {{작성자}} |

## 안건

{{안건}}

## 논의 내용

{{논의내용}}

## 결정 사항

{{결정사항}}

## 향후 일정

{{향후일정}}
`,
    fields: [
      { key: '회의명', label: '회의명', type: 'text' as const, placeholder: '' },
      { key: '일시', label: '일시', type: 'text' as const, placeholder: '' },
      { key: '장소', label: '장소', type: 'text' as const, placeholder: '' },
      { key: '참석자', label: '참석자', type: 'text' as const, placeholder: '' },
      { key: '작성자', label: '작성자', type: 'text' as const, placeholder: '' },
      { key: '안건', label: '안건', type: 'textarea' as const, placeholder: '' },
      { key: '논의내용', label: '논의 내용', type: 'textarea' as const, placeholder: '' },
      { key: '결정사항', label: '결정 사항', type: 'textarea' as const, placeholder: '' },
      { key: '향후일정', label: '향후 일정', type: 'textarea' as const, placeholder: '' },
    ],
  },
  {
    id: '__sample_report',
    titleKo: '업무 보고서',
    titleEn: 'Work Report',
    descKo: '일간/주간/월간 업무 보고서 템플릿',
    descEn: 'Daily/weekly/monthly work report template',
    icon: '\u{1F4C4}',
    category: 'business',
    content: `# {{보고서명}}

**보고자**: {{보고자}}
**보고일**: {{보고일}}
**보고 기간**: {{보고기간}}

## 1. 주요 업무 실적

{{업무실적}}

## 2. 진행 중인 업무

{{진행중업무}}

## 3. 이슈 및 해결 방안

{{이슈사항}}

## 4. 다음 기간 계획

{{계획}}

## 5. 건의 사항

{{건의사항}}
`,
    fields: [
      { key: '보고서명', label: '보고서명', type: 'text' as const, placeholder: '' },
      { key: '보고자', label: '보고자', type: 'text' as const, placeholder: '' },
      { key: '보고일', label: '보고일', type: 'text' as const, placeholder: '' },
      { key: '보고기간', label: '보고 기간', type: 'text' as const, placeholder: '' },
      { key: '업무실적', label: '업무 실적', type: 'textarea' as const, placeholder: '' },
      { key: '진행중업무', label: '진행 중인 업무', type: 'textarea' as const, placeholder: '' },
      { key: '이슈사항', label: '이슈 사항', type: 'textarea' as const, placeholder: '' },
      { key: '계획', label: '다음 기간 계획', type: 'textarea' as const, placeholder: '' },
      { key: '건의사항', label: '건의 사항', type: 'textarea' as const, placeholder: '' },
    ],
  },
  {
    id: '__sample_proposal',
    titleKo: '기획 제안서',
    titleEn: 'Project Proposal',
    descKo: '프로젝트/사업 기획 제안서 템플릿',
    descEn: 'Project/business proposal template',
    icon: '\u{1F4A1}',
    category: 'business',
    content: `# {{프로젝트명}} 기획 제안서

## 1. 개요

- **프로젝트명**: {{프로젝트명}}
- **제안자**: {{제안자}}
- **제안일**: {{제안일}}
- **목표 기간**: {{목표기간}}

### 배경 및 목적
{{배경및목적}}

## 2. 현황 분석

{{현황분석}}

## 3. 추진 내용

{{추진내용}}

## 4. 기대 효과

{{기대효과}}

## 5. 소요 예산

{{소요예산}}

## 6. 추진 일정

{{추진일정}}
`,
    fields: [
      { key: '프로젝트명', label: '프로젝트명', type: 'text' as const, placeholder: '' },
      { key: '제안자', label: '제안자', type: 'text' as const, placeholder: '' },
      { key: '제안일', label: '제안일', type: 'text' as const, placeholder: '' },
      { key: '목표기간', label: '목표 기간', type: 'text' as const, placeholder: '' },
      { key: '배경및목적', label: '배경 및 목적', type: 'textarea' as const, placeholder: '' },
      { key: '현황분석', label: '현황 분석', type: 'textarea' as const, placeholder: '' },
      { key: '추진내용', label: '추진 내용', type: 'textarea' as const, placeholder: '' },
      { key: '기대효과', label: '기대 효과', type: 'textarea' as const, placeholder: '' },
      { key: '소요예산', label: '소요 예산', type: 'textarea' as const, placeholder: '' },
      { key: '추진일정', label: '추진 일정', type: 'textarea' as const, placeholder: '' },
    ],
  },
  {
    id: '__sample_contract',
    titleKo: '계약서',
    titleEn: 'Contract',
    descKo: '기본 업무 위탁/용역 계약서 템플릿',
    descEn: 'Basic service/outsourcing contract template',
    icon: '\u{1F4DD}',
    category: 'legal',
    content: `# {{계약명}}

## 계약 당사자

- **갑(위탁자)**: {{갑_회사명}} (대표: {{갑_대표}})
- **을(수탁자)**: {{을_회사명}} (대표: {{을_대표}})

## 제1조 (계약의 목적)

{{계약목적}}

## 제2조 (계약 기간)

본 계약의 기간은 {{시작일}}부터 {{종료일}}까지로 한다.

## 제3조 (계약 금액)

계약 금액은 금 {{계약금액}} 원정(부가세 별도)으로 한다.

## 제4조 (업무 범위)

{{업무범위}}

## 제5조 (기밀 유지)

{{기밀유지조항}}

## 제6조 (일반 조항)

{{일반조항}}

---

상기 계약 내용에 동의하며 이를 증명하기 위해 각 2통을 작성하여 서명 날인 후 각 1통씩 보관한다.

**{{계약일}}**

- 갑: {{갑_회사명}} 대표 {{갑_대표}} (인)
- 을: {{을_회사명}} 대표 {{을_대표}} (인)
`,
    fields: [
      { key: '계약명', label: '계약명', type: 'text' as const, placeholder: '' },
      { key: '갑_회사명', label: '갑 회사명', type: 'text' as const, placeholder: '' },
      { key: '갑_대표', label: '갑 대표자', type: 'text' as const, placeholder: '' },
      { key: '을_회사명', label: '을 회사명', type: 'text' as const, placeholder: '' },
      { key: '을_대표', label: '을 대표자', type: 'text' as const, placeholder: '' },
      { key: '계약목적', label: '계약 목적', type: 'textarea' as const, placeholder: '' },
      { key: '시작일', label: '계약 시작일', type: 'text' as const, placeholder: '' },
      { key: '종료일', label: '계약 종료일', type: 'text' as const, placeholder: '' },
      { key: '계약금액', label: '계약 금액', type: 'text' as const, placeholder: '' },
      { key: '업무범위', label: '업무 범위', type: 'textarea' as const, placeholder: '' },
      { key: '기밀유지조항', label: '기밀 유지 조항', type: 'textarea' as const, placeholder: '' },
      { key: '일반조항', label: '일반 조항', type: 'textarea' as const, placeholder: '' },
      { key: '계약일', label: '계약일', type: 'text' as const, placeholder: '' },
    ],
  },
  {
    id: '__sample_resume',
    titleKo: '이력서/자기소개서',
    titleEn: 'Resume / Cover Letter',
    descKo: '취업용 이력서 및 자기소개서 통합 템플릿',
    descEn: 'Integrated resume and cover letter template',
    icon: '\u{1F464}',
    category: 'personal',
    content: `# 이력서

## 인적 사항

| 항목 | 내용 |
|------|------|
| 성명 | {{성명}} |
| 생년월일 | {{생년월일}} |
| 연락처 | {{연락처}} |
| 이메일 | {{이메일}} |
| 주소 | {{주소}} |

## 학력

{{학력}}

## 경력 사항

{{경력}}

## 자격/어학

{{자격어학}}

---

# 자기소개서

## 1. 성장 과정

{{성장과정}}

## 2. 지원 동기

{{지원동기}}

## 3. 직무 역량

{{직무역량}}

## 4. 입사 후 포부

{{입사후포부}}
`,
    fields: [
      { key: '성명', label: '성명', type: 'text' as const, placeholder: '' },
      { key: '생년월일', label: '생년월일', type: 'text' as const, placeholder: '' },
      { key: '연락처', label: '연락처', type: 'text' as const, placeholder: '' },
      { key: '이메일', label: '이메일', type: 'text' as const, placeholder: '' },
      { key: '주소', label: '주소', type: 'text' as const, placeholder: '' },
      { key: '학력', label: '학력', type: 'textarea' as const, placeholder: '' },
      { key: '경력', label: '경력 사항', type: 'textarea' as const, placeholder: '' },
      { key: '자격어학', label: '자격/어학', type: 'textarea' as const, placeholder: '' },
      { key: '성장과정', label: '성장 과정', type: 'textarea' as const, placeholder: '' },
      { key: '지원동기', label: '지원 동기', type: 'textarea' as const, placeholder: '' },
      { key: '직무역량', label: '직무 역량', type: 'textarea' as const, placeholder: '' },
      { key: '입사후포부', label: '입사 후 포부', type: 'textarea' as const, placeholder: '' },
    ],
  },
  {
    id: '__sample_lecture',
    titleKo: '강의 계획서',
    titleEn: 'Syllabus',
    descKo: '학기별 강의 계획서 / 교수학습 계획서',
    descEn: 'Semester course syllabus / teaching plan',
    icon: '\u{1F393}',
    category: 'education',
    content: `# {{과목명}} 강의 계획서

## 강좌 정보

| 항목 | 내용 |
|------|------|
| 과목명 | {{과목명}} |
| 담당교수 | {{담당교수}} |
| 학기 | {{학기}} |
| 학점/시수 | {{학점시수}} |
| 강의실 | {{강의실}} |
| 연락처 | {{교수연락처}} |

## 교과목 개요

{{교과목개요}}

## 수업 목표

{{수업목표}}

## 교재 및 참고서

{{교재}}

## 주차별 강의 계획

{{주차별계획}}

## 성적 평가 방법

{{평가방법}}

## 수강 시 유의사항

{{유의사항}}
`,
    fields: [
      { key: '과목명', label: '과목명', type: 'text' as const, placeholder: '' },
      { key: '담당교수', label: '담당교수', type: 'text' as const, placeholder: '' },
      { key: '학기', label: '학기', type: 'text' as const, placeholder: '' },
      { key: '학점시수', label: '학점/시수', type: 'text' as const, placeholder: '' },
      { key: '강의실', label: '강의실', type: 'text' as const, placeholder: '' },
      { key: '교수연락처', label: '교수 연락처', type: 'text' as const, placeholder: '' },
      { key: '교과목개요', label: '교과목 개요', type: 'textarea' as const, placeholder: '' },
      { key: '수업목표', label: '수업 목표', type: 'textarea' as const, placeholder: '' },
      { key: '교재', label: '교재 및 참고서', type: 'textarea' as const, placeholder: '' },
      { key: '주차별계획', label: '주차별 계획', type: 'textarea' as const, placeholder: '' },
      { key: '평가방법', label: '평가 방법', type: 'textarea' as const, placeholder: '' },
      { key: '유의사항', label: '유의사항', type: 'textarea' as const, placeholder: '' },
    ],
  },
];

type Tab = 'my' | 'samples';
type Category = 'all' | 'business' | 'legal' | 'personal' | 'education';

const CATEGORY_LABELS: Record<Category, { ko: string; en: string }> = {
  all: { ko: '전체', en: 'All' },
  business: { ko: '비즈니스', en: 'Business' },
  legal: { ko: '법률/계약', en: 'Legal' },
  personal: { ko: '개인', en: 'Personal' },
  education: { ko: '교육', en: 'Education' },
};

const Templates = (): ReactElement => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';

  const [templates, setTemplates] = useState<HwpTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>(user ? 'my' : 'samples');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('all');

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    const loadTemplates = async () => {
      const client = getSupabase();
      if (!client) { setLoading(false); return; }
      const { data, error } = await client
        .from(TABLES.templates)
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
      if (!error && data) setTemplates(data as HwpTemplate[]);
      setLoading(false);
    };
    loadTemplates();
  }, [user]);

  const handleDelete = async (id: string) => {
    if (!confirm(t('site.templates.deleteConfirm'))) return;
    const client = getSupabase();
    if (!client || !user) return;
    const { error } = await client
      .from(TABLES.templates)
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);
    if (!error) {
      setTemplates(prev => prev.filter(tmpl => tmpl.id !== id));
      showToast(t('site.templates.deleted'), 'success');
    }
  };

  const handleUseSample = (sample: typeof SAMPLE_TEMPLATES[0]) => {
    // Navigate to template detail with sample data in state
    navigate(`/templates/${sample.id}`, {
      state: {
        sample: {
          title: isKo ? sample.titleKo : sample.titleEn,
          description: isKo ? sample.descKo : sample.descEn,
          content: sample.content,
          fields: sample.fields,
        },
      },
    });
  };

  const handleCopySample = async (sample: typeof SAMPLE_TEMPLATES[0]) => {
    if (!user) {
      showToast(isKo ? '로그인이 필요합니다' : 'Login required', 'warning');
      return;
    }
    const client = getSupabase();
    if (!client) return;
    const { error } = await client.from(TABLES.templates).insert({
      user_id: user.id,
      title: isKo ? sample.titleKo : sample.titleEn,
      description: isKo ? sample.descKo : sample.descEn,
      content: sample.content,
      fields: sample.fields,
    });
    if (!error) {
      showToast(isKo ? '내 템플릿에 복사했습니다' : 'Copied to My Templates', 'success');
      // Reload
      const { data } = await client
        .from(TABLES.templates)
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });
      if (data) setTemplates(data as HwpTemplate[]);
      setTab('my');
    } else {
      showToast(error.message, 'error');
    }
  };

  // Filtered user templates
  const filteredTemplates = useMemo(() => {
    if (!search.trim()) return templates;
    const q = search.toLowerCase();
    return templates.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.description?.toLowerCase().includes(q)
    );
  }, [templates, search]);

  // Filtered sample templates
  const filteredSamples = useMemo(() => {
    let result = SAMPLE_TEMPLATES;
    if (category !== 'all') {
      result = result.filter(s => s.category === category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(s =>
        s.titleKo.toLowerCase().includes(q) ||
        s.titleEn.toLowerCase().includes(q) ||
        s.descKo.toLowerCase().includes(q) ||
        s.descEn.toLowerCase().includes(q)
      );
    }
    return result;
  }, [category, search]);

  return (
    <>
      <SEOHead title={t('site.templates.title')} path="/templates" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.templates.title')}</h2>
          <p>{t('site.templates.subtitle')}</p>
        </div>
      </section>

      <section className="section templates-page">
        <div className="container">
          {/* Tab Bar + Actions */}
          <div className="templates-top-bar">
            <div className="templates-tabs">
              {user && (
                <button
                  className={`templates-tab ${tab === 'my' ? 'active' : ''}`}
                  onClick={() => setTab('my')}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {isKo ? '내 템플릿' : 'My Templates'}
                  {templates.length > 0 && <span className="templates-tab-count">{templates.length}</span>}
                </button>
              )}
              <button
                className={`templates-tab ${tab === 'samples' ? 'active' : ''}`}
                onClick={() => setTab('samples')}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                {isKo ? '샘플 갤러리' : 'Sample Gallery'}
                <span className="templates-tab-count">{SAMPLE_TEMPLATES.length}</span>
              </button>
            </div>

            <div className="templates-actions">
              <div className="templates-search-wrap">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={isKo ? '검색...' : 'Search...'}
                  className="templates-search-input"
                />
              </div>
              {user && (
                <Link to="/templates/new">
                  <button className="editor-btn primary">{t('site.templates.create')}</button>
                </Link>
              )}
            </div>
          </div>

          {/* Category Filter (samples only) */}
          {tab === 'samples' && (
            <div className="templates-categories">
              {(Object.keys(CATEGORY_LABELS) as Category[]).map(cat => (
                <button
                  key={cat}
                  className={`templates-cat-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {isKo ? CATEGORY_LABELS[cat].ko : CATEGORY_LABELS[cat].en}
                </button>
              ))}
            </div>
          )}

          {/* My Templates Tab */}
          {tab === 'my' && (
            loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                <div className="loading-spinner"></div>
              </div>
            ) : filteredTemplates.length === 0 ? (
              <div className="templates-empty">
                <svg className="templates-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <h3>{search ? (isKo ? '검색 결과가 없습니다' : 'No results found') : t('site.templates.empty')}</h3>
                <p>{t('site.templates.emptyHint')}</p>
                <div className="templates-empty-actions">
                  <Link to="/templates/new">
                    <button className="editor-btn primary">{t('site.templates.create')}</button>
                  </Link>
                  <button className="editor-btn" onClick={() => setTab('samples')}>
                    {isKo ? '샘플 갤러리 보기' : 'Browse Samples'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="template-grid">
                {filteredTemplates.map(tmpl => (
                  <div key={tmpl.id} className="template-card">
                    <h3>{tmpl.title}</h3>
                    {tmpl.description && <p>{tmpl.description}</p>}
                    <div className="template-card-meta">
                      <span className="template-card-badge">
                        {tmpl.fields?.length || 0} {t('site.templates.fields')}
                      </span>
                      <span>{new Date(tmpl.updated_at).toLocaleDateString()}</span>
                    </div>
                    <div className="template-card-actions">
                      <Link to={`/templates/${tmpl.id}`}>
                        <button className="primary">{t('site.templates.use')}</button>
                      </Link>
                      <Link to={`/templates/new?edit=${tmpl.id}`}>
                        <button>{isKo ? '편집' : 'Edit'}</button>
                      </Link>
                      <button className="danger" onClick={() => handleDelete(tmpl.id)}>
                        {t('site.templates.delete')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {/* Samples Tab */}
          {tab === 'samples' && (
            <div className="template-grid">
              {filteredSamples.map(sample => (
                <div key={sample.id} className="template-card sample-card">
                  <div className="sample-card-icon">{sample.icon}</div>
                  <h3>{isKo ? sample.titleKo : sample.titleEn}</h3>
                  <p>{isKo ? sample.descKo : sample.descEn}</p>
                  <div className="template-card-meta">
                    <span className="template-card-badge">
                      {sample.fields.length} {t('site.templates.fields')}
                    </span>
                    <span className="template-card-badge cat-badge">
                      {isKo ? CATEGORY_LABELS[sample.category as Category].ko : CATEGORY_LABELS[sample.category as Category].en}
                    </span>
                  </div>
                  <div className="template-card-actions">
                    <button className="primary" onClick={() => handleUseSample(sample)}>
                      {t('site.templates.use')}
                    </button>
                    {user && (
                      <button onClick={() => handleCopySample(sample)}>
                        {isKo ? '내 템플릿에 복사' : 'Copy to Mine'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {filteredSamples.length === 0 && (
                <div className="templates-empty" style={{ gridColumn: '1 / -1' }}>
                  <h3>{isKo ? '검색 결과가 없습니다' : 'No results found'}</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Templates;
