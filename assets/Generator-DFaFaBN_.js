const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C_x47v-1.js","assets/jszip.min-DO7avrBW.js","assets/index-DRinXlrQ.js","assets/index-BZaw4lSy.css"])))=>i.map(i=>d[i]);
import { u as U, b as _, c as A, d as z, r as p, j as e, _ as F, g as V, T as Y, __tla as __tla_0 } from "./index-DRinXlrQ.js";
import { S as G } from "./SEOHead-DQdA10qr.js";
let Q;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const w = [
        {
            type: "report",
            nameKo: "업무 보고서",
            nameEn: "Work Report",
            icon: "📋",
            descKo: "업무 성과와 이슈를 체계적으로 정리하는 보고서",
            descEn: "Systematic report of work results and issues",
            sections: [
                {
                    id: "basic",
                    titleKo: "기본 정보",
                    titleEn: "Basic Information",
                    fields: [
                        {
                            key: "reportTitle",
                            labelKo: "보고서 제목",
                            labelEn: "Report Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "reportDate",
                            labelKo: "보고일",
                            labelEn: "Report Date",
                            type: "date",
                            required: !0
                        },
                        {
                            key: "department",
                            labelKo: "부서",
                            labelEn: "Department",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "author",
                            labelKo: "작성자",
                            labelEn: "Author",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "reportPeriod",
                            labelKo: "보고 기간",
                            labelEn: "Report Period",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "content",
                    titleKo: "보고 내용",
                    titleEn: "Report Content",
                    fields: [
                        {
                            key: "achievements",
                            labelKo: "주요 성과",
                            labelEn: "Key Achievements",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "issues",
                            labelKo: "이슈 사항",
                            labelEn: "Issues",
                            type: "textarea"
                        },
                        {
                            key: "nextPlan",
                            labelKo: "차기 계획",
                            labelEn: "Next Plan",
                            type: "textarea"
                        },
                        {
                            key: "notes",
                            labelKo: "비고",
                            labelEn: "Notes",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "letter",
            nameKo: "공문/서한",
            nameEn: "Official Letter",
            icon: "✉️",
            descKo: "공식적인 문서 전달을 위한 서한 양식",
            descEn: "Official letter format for formal document delivery",
            sections: [
                {
                    id: "header",
                    titleKo: "문서 정보",
                    titleEn: "Document Info",
                    fields: [
                        {
                            key: "letterTitle",
                            labelKo: "제목",
                            labelEn: "Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "recipient",
                            labelKo: "수신",
                            labelEn: "Recipient",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "reference",
                            labelKo: "참조",
                            labelEn: "CC",
                            type: "text"
                        },
                        {
                            key: "letterDate",
                            labelKo: "발신일",
                            labelEn: "Date",
                            type: "date",
                            required: !0
                        },
                        {
                            key: "sender",
                            labelKo: "발신자",
                            labelEn: "Sender",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "senderOrg",
                            labelKo: "발신 기관",
                            labelEn: "Sender Organization",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "body",
                    titleKo: "본문",
                    titleEn: "Body",
                    fields: [
                        {
                            key: "letterBody",
                            labelKo: "본문 내용",
                            labelEn: "Body Content",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "attachment",
                            labelKo: "첨부",
                            labelEn: "Attachment",
                            type: "text"
                        }
                    ]
                }
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
`
        },
        {
            type: "minutes",
            nameKo: "회의록",
            nameEn: "Meeting Minutes",
            icon: "📝",
            descKo: "회의 내용과 결정사항을 기록하는 회의록",
            descEn: "Record meeting discussions and decisions",
            sections: [
                {
                    id: "info",
                    titleKo: "회의 정보",
                    titleEn: "Meeting Info",
                    fields: [
                        {
                            key: "meetingTitle",
                            labelKo: "회의명",
                            labelEn: "Meeting Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "meetingDate",
                            labelKo: "일시",
                            labelEn: "Date & Time",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "meetingPlace",
                            labelKo: "장소",
                            labelEn: "Location",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "attendees",
                            labelKo: "참석자",
                            labelEn: "Attendees",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "recorder",
                            labelKo: "기록자",
                            labelEn: "Recorder",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "content",
                    titleKo: "회의 내용",
                    titleEn: "Meeting Content",
                    fields: [
                        {
                            key: "agenda",
                            labelKo: "안건",
                            labelEn: "Agenda",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "discussion",
                            labelKo: "논의 내용",
                            labelEn: "Discussion",
                            type: "textarea"
                        },
                        {
                            key: "decisions",
                            labelKo: "결정 사항",
                            labelEn: "Decisions",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "actionItems",
                            labelKo: "후속 조치",
                            labelEn: "Action Items",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "proposal",
            nameKo: "제안서",
            nameEn: "Proposal",
            icon: "📊",
            descKo: "사업 또는 프로젝트 제안을 위한 양식",
            descEn: "Format for business or project proposals",
            sections: [
                {
                    id: "overview",
                    titleKo: "제안 개요",
                    titleEn: "Proposal Overview",
                    fields: [
                        {
                            key: "proposalTitle",
                            labelKo: "제안명",
                            labelEn: "Proposal Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "proposalDate",
                            labelKo: "제안일",
                            labelEn: "Proposal Date",
                            type: "date",
                            required: !0
                        },
                        {
                            key: "proposer",
                            labelKo: "제안자",
                            labelEn: "Proposer",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "background",
                            labelKo: "배경",
                            labelEn: "Background",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "purpose",
                            labelKo: "목적",
                            labelEn: "Purpose",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "detail",
                    titleKo: "상세 내용",
                    titleEn: "Details",
                    fields: [
                        {
                            key: "scope",
                            labelKo: "범위",
                            labelEn: "Scope",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "schedule",
                            labelKo: "일정",
                            labelEn: "Schedule",
                            type: "textarea"
                        },
                        {
                            key: "budget",
                            labelKo: "예산",
                            labelEn: "Budget",
                            type: "textarea"
                        },
                        {
                            key: "expectedEffect",
                            labelKo: "기대 효과",
                            labelEn: "Expected Effect",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "resume",
            nameKo: "이력서",
            nameEn: "Resume",
            icon: "👤",
            descKo: "취업 및 자기소개를 위한 이력서 양식",
            descEn: "Resume format for job applications",
            sections: [
                {
                    id: "personal",
                    titleKo: "인적 사항",
                    titleEn: "Personal Info",
                    fields: [
                        {
                            key: "fullName",
                            labelKo: "이름",
                            labelEn: "Full Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "phone",
                            labelKo: "연락처",
                            labelEn: "Phone",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "email",
                            labelKo: "이메일",
                            labelEn: "Email",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "address",
                            labelKo: "주소",
                            labelEn: "Address",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "career",
                    titleKo: "학력 및 경력",
                    titleEn: "Education & Career",
                    fields: [
                        {
                            key: "education",
                            labelKo: "학력",
                            labelEn: "Education",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "experience",
                            labelKo: "경력",
                            labelEn: "Work Experience",
                            type: "textarea"
                        },
                        {
                            key: "certifications",
                            labelKo: "자격증",
                            labelEn: "Certifications",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "intro",
                    titleKo: "자기소개",
                    titleEn: "Self Introduction",
                    fields: [
                        {
                            key: "selfIntro",
                            labelKo: "자기소개서",
                            labelEn: "Self Introduction",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "skills",
                            labelKo: "보유 기술",
                            labelEn: "Skills",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "certificate",
            nameKo: "증명서",
            nameEn: "Certificate",
            icon: "📜",
            descKo: "각종 증명서 발급을 위한 양식",
            descEn: "Template for issuing various certificates",
            sections: [
                {
                    id: "issuer",
                    titleKo: "발급 정보",
                    titleEn: "Issuer Info",
                    fields: [
                        {
                            key: "issuerOrg",
                            labelKo: "발급 기관",
                            labelEn: "Issuing Organization",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "issueDate",
                            labelKo: "발급일",
                            labelEn: "Issue Date",
                            type: "date",
                            required: !0
                        },
                        {
                            key: "issueNumber",
                            labelKo: "발급 번호",
                            labelEn: "Issue Number",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "content",
                    titleKo: "증명 내용",
                    titleEn: "Certificate Content",
                    fields: [
                        {
                            key: "certRecipient",
                            labelKo: "수신자",
                            labelEn: "Recipient",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "certTitle",
                            labelKo: "증명서 제목",
                            labelEn: "Certificate Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "certContent",
                            labelKo: "증명 내용",
                            labelEn: "Certificate Content",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "certPurpose",
                            labelKo: "용도",
                            labelEn: "Purpose",
                            type: "text"
                        }
                    ]
                }
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
`
        }
    ];
    function R(l) {
        let i = l.replace(/^#### (.+)$/gm, "<h4>$1</h4>").replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>").replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
        return i = i.replace(/^\|(.+)\|$/gm, (s)=>{
            if (/^\|[\s-:|]+\|$/.test(s)) return "";
            const u = s.split("|").filter((n)=>n.trim()), h = "td";
            return "<tr>" + u.map((n)=>`<${h}>${n.trim()}</${h}>`).join("") + "</tr>";
        }), i = i.replace(/(<tr>[\s\S]*?<\/tr>)/g, "<table>$1</table>"), i = i.replace(/<\/table>\s*<table>/g, ""), i = i.split(`

`).map((s)=>(s = s.trim(), s ? s.startsWith("<h") || s.startsWith("<li") || s.startsWith("<table") || s.startsWith("<blockquote") || s.startsWith("<tr") ? s : `<p>${s}</p>` : "")).join(`
`), i;
    }
    Q = ()=>{
        const { t: l, language: i } = U(), { user: s } = _(), { showToast: u } = A(), h = z(), n = i === "ko", [m, x] = p.useState(1), [g, f] = p.useState(null), [o, E] = p.useState({}), [N, j] = p.useState({}), [v, T] = p.useState("preview"), [C, q] = p.useState(!1), c = p.useMemo(()=>w.find((t)=>t.type === g) ?? null, [
            g
        ]), b = p.useMemo(()=>{
            if (!c) return "";
            let t = c.markdownTemplate;
            for (const r of c.sections)for (const a of r.fields){
                const d = o[a.key] || "", k = new RegExp(`\\{\\{${a.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g");
                t = t.replace(k, d || `(${n ? a.labelKo : a.labelEn})`);
            }
            return t;
        }, [
            c,
            o,
            n
        ]), $ = p.useMemo(()=>{
            if (!c) return 0;
            const t = c.sections.flatMap((a)=>a.fields.filter((d)=>d.required));
            if (t.length === 0) return 100;
            const r = t.filter((a)=>o[a.key]?.trim()).length;
            return Math.round(r / t.length * 100);
        }, [
            c,
            o
        ]), S = (t)=>{
            f(t), E({});
            const r = w.find((a)=>a.type === t);
            r && j({
                [r.sections[0].id]: !0
            }), x(2);
        }, P = (t)=>{
            j((r)=>({
                    ...r,
                    [t]: !r[t]
                }));
        }, D = (t, r)=>{
            E((a)=>({
                    ...a,
                    [t]: r
                }));
        }, y = ()=>o.reportTitle || o.letterTitle || o.meetingTitle || o.proposalTitle || o.fullName || o.certTitle || "", I = ()=>{
            const t = new Blob([
                b
            ], {
                type: "text/markdown;charset=utf-8"
            }), r = URL.createObjectURL(t), a = document.createElement("a");
            a.href = r, a.download = `${y() || "document"}.md`, a.click(), URL.revokeObjectURL(r);
        }, L = ()=>{
            const t = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${y() || "Document"}</title>
<style>body{font-family:sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}blockquote{border-left:4px solid #0046C8;padding:8px 16px;margin:16px 0;background:#f9f9f9}</style></head>
<body>${R(b)}</body></html>`, r = new Blob([
                t
            ], {
                type: "text/html;charset=utf-8"
            }), a = URL.createObjectURL(r), d = document.createElement("a");
            d.href = a, d.download = `${y() || "document"}.html`, d.click(), URL.revokeObjectURL(a);
        }, O = async ()=>{
            try {
                const { markdownToHwpx: t } = await F(async ()=>{
                    const { markdownToHwpx: W } = await import("./index-C_x47v-1.js");
                    return {
                        markdownToHwpx: W
                    };
                }, __vite__mapDeps([0,1,2,3])), r = y() || "document", a = await t(b), d = new Blob([
                    a
                ], {
                    type: "application/hwp+zip"
                }), k = URL.createObjectURL(d), K = document.createElement("a");
                K.href = k, K.download = `${r}.hwpx`, K.click(), URL.revokeObjectURL(k);
            } catch (t) {
                u(t.message || "HWPX export failed", "error");
            }
        }, M = async ()=>{
            if (!s) {
                u(n ? "로그인이 필요합니다" : "Login required", "warning");
                return;
            }
            const t = V();
            if (!t) return;
            q(!0);
            const { error: r } = await t.from(Y.documents).insert({
                user_id: s.id,
                title: y() || (n ? "문서" : "Document"),
                content: b,
                metadata: {
                    type: g,
                    formData: o
                },
                is_public: !1
            });
            q(!1), r ? u(r.message, "error") : u(l("site.generator.saved"), "success");
        }, B = ()=>{
            h("/editor", {
                state: {
                    content: b
                }
            });
        }, H = [
            l("site.generator.step1"),
            l("site.generator.step2"),
            l("site.generator.step3"),
            l("site.generator.step4")
        ];
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(G, {
                    title: l("site.generator.title"),
                    path: "/generator"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: l("site.generator.title")
                            }),
                            e.jsx("p", {
                                children: l("site.generator.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section gen-wizard",
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
                                ].map((t, r)=>e.jsxs("div", {
                                        style: {
                                            display: "contents"
                                        },
                                        children: [
                                            r > 0 && e.jsx("div", {
                                                className: "bp-step-connector"
                                            }),
                                            e.jsxs("div", {
                                                className: `bp-step ${m === t ? "active" : ""} ${m > t ? "completed" : ""}`,
                                                children: [
                                                    e.jsx("span", {
                                                        className: "bp-step-num",
                                                        children: t
                                                    }),
                                                    H[r]
                                                ]
                                            })
                                        ]
                                    }, t))
                            }),
                            m === 1 && e.jsx("div", {
                                className: "gen-type-grid",
                                children: w.map((t)=>e.jsxs("div", {
                                        className: `gen-type-card ${g === t.type ? "selected" : ""}`,
                                        onClick: ()=>S(t.type),
                                        children: [
                                            e.jsx("div", {
                                                className: "gen-type-icon",
                                                children: t.icon
                                            }),
                                            e.jsx("h3", {
                                                children: n ? t.nameKo : t.nameEn
                                            }),
                                            e.jsx("p", {
                                                children: n ? t.descKo : t.descEn
                                            })
                                        ]
                                    }, t.type))
                            }),
                            m === 2 && c && e.jsxs("div", {
                                className: "bp-form-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-progress-bar",
                                        children: [
                                            e.jsx("span", {
                                                className: "bp-progress-bar-label",
                                                children: l("site.generator.progress")
                                            }),
                                            e.jsx("div", {
                                                className: "bp-progress-bar-track",
                                                children: e.jsx("div", {
                                                    className: "bp-progress-bar-fill",
                                                    style: {
                                                        width: `${$}%`
                                                    }
                                                })
                                            }),
                                            e.jsxs("span", {
                                                className: "bp-progress-bar-pct",
                                                children: [
                                                    $,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    c.sections.map((t)=>e.jsxs("div", {
                                            className: "bp-accordion",
                                            children: [
                                                e.jsxs("button", {
                                                    className: `bp-accordion-header ${N[t.id] ? "open" : ""}`,
                                                    onClick: ()=>P(t.id),
                                                    children: [
                                                        n ? t.titleKo : t.titleEn,
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
                                                N[t.id] && e.jsx("div", {
                                                    className: "bp-accordion-body",
                                                    children: t.fields.map((r)=>e.jsxs("div", {
                                                            className: "bp-field",
                                                            children: [
                                                                e.jsxs("label", {
                                                                    children: [
                                                                        n ? r.labelKo : r.labelEn,
                                                                        r.required && e.jsx("span", {
                                                                            className: "required",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                r.type === "textarea" ? e.jsx("textarea", {
                                                                    value: o[r.key] || "",
                                                                    onChange: (a)=>D(r.key, a.target.value),
                                                                    placeholder: r.placeholder
                                                                }) : e.jsx("input", {
                                                                    type: r.type === "number" ? "number" : r.type === "date" ? "date" : "text",
                                                                    value: o[r.key] || "",
                                                                    onChange: (a)=>D(r.key, a.target.value),
                                                                    placeholder: r.placeholder
                                                                })
                                                            ]
                                                        }, r.key))
                                                })
                                            ]
                                        }, t.id)),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>{
                                                    x(1), f(null);
                                                },
                                                children: l("site.generator.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>x(3),
                                                children: l("site.generator.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            m === 3 && e.jsxs("div", {
                                className: "bp-preview-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-preview-tabs",
                                        children: [
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${v === "preview" ? "active" : ""}`,
                                                onClick: ()=>T("preview"),
                                                children: l("site.generator.previewTab")
                                            }),
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${v === "markdown" ? "active" : ""}`,
                                                onClick: ()=>T("markdown"),
                                                children: l("site.generator.markdownTab")
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "bp-preview-content",
                                        children: v === "markdown" ? e.jsx("pre", {
                                            children: b
                                        }) : e.jsx("div", {
                                            className: "bp-preview-rendered",
                                            dangerouslySetInnerHTML: {
                                                __html: R(b)
                                            }
                                        })
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>x(2),
                                                children: l("site.generator.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>x(4),
                                                children: l("site.generator.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            m === 4 && e.jsxs("div", {
                                className: "bp-export-section",
                                children: [
                                    e.jsx("div", {
                                        className: "bp-export-success",
                                        children: c?.icon
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-title",
                                        children: y() || l("site.generator.title")
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-subtitle",
                                        children: n ? "문서가 준비되었습니다. 원하는 형식으로 내보내세요." : "Your document is ready. Export in your preferred format."
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-export-buttons",
                                        children: [
                                            e.jsxs("button", {
                                                className: "bp-export-btn primary",
                                                onClick: O,
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
                                                    l("site.generator.downloadHwpx")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: I,
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
                                                    l("site.generator.downloadMd")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: L,
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
                                                    l("site.generator.downloadHtml")
                                                ]
                                            }),
                                            s && e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: M,
                                                disabled: C,
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
                                                    C ? "..." : l("site.generator.saveToDb")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: B,
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
                                                    l("site.generator.openInEditor")
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("button", {
                                        className: "bp-btn",
                                        onClick: ()=>{
                                            x(1), f(null), E({}), j({});
                                        },
                                        children: l("site.generator.startNew")
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
export { Q as default, __tla };
