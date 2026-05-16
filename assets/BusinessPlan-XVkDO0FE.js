const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DrxlCJyF.js","assets/jszip.min-Bi_P3b37.js","assets/index-CTebl28t.js","assets/index-BZaw4lSy.css"])))=>i.map(i=>d[i]);
import { u as L, r as c, j as e, c as Z, b as Ee, d as xe, g as _, T as z, _ as ge, __tla as __tla_0 } from "./index-CTebl28t.js";
import { S as ke } from "./SEOHead-Cajeojgs.js";
let De;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const U = "hwp_ai_provider", H = "hwp_ai_claude_key", V = "hwp_ai_openai_key", W = "hwp_ai_claude_model", Y = "hwp_ai_openai_model", J = [
        {
            id: "claude-sonnet-4-20250514",
            label: "Claude Sonnet 4"
        },
        {
            id: "claude-3-5-haiku-20241022",
            label: "Claude 3.5 Haiku"
        }
    ], Q = [
        {
            id: "gpt-4o",
            label: "GPT-4o"
        },
        {
            id: "gpt-4o-mini",
            label: "GPT-4o Mini"
        },
        {
            id: "gpt-4.1",
            label: "GPT-4.1"
        },
        {
            id: "gpt-4.1-mini",
            label: "GPT-4.1 Mini"
        }
    ], he = ({ collapsed: s = !0 })=>{
        const { language: y } = L(), o = y === "ko", [u, f] = c.useState(!s), [a, E] = c.useState(()=>localStorage.getItem(U) || "claude"), [d, b] = c.useState(()=>localStorage.getItem(H) || ""), [m, n] = c.useState(()=>localStorage.getItem(V) || ""), [h, S] = c.useState(()=>localStorage.getItem(W) || J[0].id), [g, K] = c.useState(()=>localStorage.getItem(Y) || Q[0].id), [k, P] = c.useState(!1), N = a === "claude" ? d : m, j = a === "claude" ? h : g, T = a === "claude" ? J : Q, C = N.trim().length > 0, q = c.useCallback((p)=>{
            E(p), localStorage.setItem(U, p);
        }, []), F = c.useCallback((p)=>{
            a === "claude" ? (b(p), localStorage.setItem(H, p)) : (n(p), localStorage.setItem(V, p));
        }, [
            a
        ]), M = c.useCallback((p)=>{
            a === "claude" ? (S(p), localStorage.setItem(W, p)) : (K(p), localStorage.setItem(Y, p));
        }, [
            a
        ]);
        return e.jsxs("div", {
            className: "ai-key-setup",
            children: [
                e.jsxs("button", {
                    className: "ai-key-setup-toggle",
                    onClick: ()=>f(!u),
                    children: [
                        e.jsxs("span", {
                            className: "ai-key-setup-toggle-left",
                            children: [
                                e.jsxs("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "16",
                                    height: "16",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        e.jsx("rect", {
                                            x: "3",
                                            y: "11",
                                            width: "18",
                                            height: "11",
                                            rx: "2",
                                            ry: "2"
                                        }),
                                        e.jsx("path", {
                                            d: "M7 11V7a5 5 0 0 1 10 0v4"
                                        })
                                    ]
                                }),
                                e.jsx("span", {
                                    children: o ? "AI 작성 설정" : "AI Writing Setup"
                                }),
                                e.jsx("span", {
                                    className: `ai-key-setup-status ${C ? "configured" : ""}`,
                                    children: C ? o ? "✓ 설정됨" : "✓ Configured" : o ? "미설정" : "Not set"
                                })
                            ]
                        }),
                        e.jsx("svg", {
                            className: `ai-key-setup-arrow ${u ? "open" : ""}`,
                            viewBox: "0 0 24 24",
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: e.jsx("polyline", {
                                points: "6 9 12 15 18 9"
                            })
                        })
                    ]
                }),
                u && e.jsxs("div", {
                    className: "ai-key-setup-body",
                    children: [
                        e.jsxs("div", {
                            className: "ai-key-setup-providers",
                            children: [
                                e.jsxs("button", {
                                    className: `ai-key-setup-provider ${a === "claude" ? "active" : ""}`,
                                    onClick: ()=>q("claude"),
                                    children: [
                                        e.jsx("span", {
                                            className: "ai-provider-icon",
                                            children: "C"
                                        }),
                                        "Claude"
                                    ]
                                }),
                                e.jsxs("button", {
                                    className: `ai-key-setup-provider ${a === "openai" ? "active" : ""}`,
                                    onClick: ()=>q("openai"),
                                    children: [
                                        e.jsx("span", {
                                            className: "ai-provider-icon",
                                            children: "G"
                                        }),
                                        "OpenAI"
                                    ]
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            className: "ai-key-setup-row",
                            children: [
                                e.jsxs("div", {
                                    className: "ai-key-setup-input-wrap",
                                    children: [
                                        e.jsx("input", {
                                            type: k ? "text" : "password",
                                            className: "ai-key-setup-input",
                                            placeholder: a === "claude" ? "sk-ant-api03-..." : "sk-proj-...",
                                            value: N,
                                            onChange: (p)=>F(p.target.value)
                                        }),
                                        e.jsx("button", {
                                            className: "ai-key-setup-eye",
                                            onClick: ()=>P(!k),
                                            children: e.jsx("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: k ? e.jsxs(e.Fragment, {
                                                    children: [
                                                        e.jsx("path", {
                                                            d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
                                                        }),
                                                        e.jsx("line", {
                                                            x1: "1",
                                                            y1: "1",
                                                            x2: "23",
                                                            y2: "23"
                                                        })
                                                    ]
                                                }) : e.jsxs(e.Fragment, {
                                                    children: [
                                                        e.jsx("path", {
                                                            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                                        }),
                                                        e.jsx("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "3"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                e.jsx("select", {
                                    className: "ai-key-setup-model",
                                    value: j,
                                    onChange: (p)=>M(p.target.value),
                                    children: T.map((p)=>e.jsx("option", {
                                            value: p.id,
                                            children: p.label
                                        }, p.id))
                                })
                            ]
                        }),
                        e.jsx("p", {
                            className: "ai-key-setup-hint",
                            children: o ? "API 키는 브라우저에만 저장되며 서버로 전송되지 않습니다." : "API keys are stored locally and never sent to our server."
                        })
                    ]
                })
            ]
        });
    }, Ke = "hwp_ai_provider", ve = "hwp_ai_claude_key", fe = "hwp_ai_openai_key", Se = "hwp_ai_claude_model", Pe = "hwp_ai_openai_model";
    function je() {
        const [s, y] = c.useState(!1), [o, u] = c.useState(""), f = c.useRef(null), a = c.useCallback(()=>{
            f.current?.abort();
        }, []), E = c.useCallback(async (d)=>{
            const b = localStorage.getItem(Ke) || "claude", m = localStorage.getItem(ve) || "", n = localStorage.getItem(fe) || "", h = localStorage.getItem(Se) || "claude-sonnet-4-20250514", S = localStorage.getItem(Pe) || "gpt-4o";
            if (!(b === "claude" ? m : n)) throw new Error("API 키가 설정되지 않았습니다. 상단에서 API 키를 입력해 주세요.");
            y(!0), u("");
            const K = new AbortController;
            f.current = K;
            try {
                let k = "";
                return b === "claude" ? k = await Ce(d, m, h, K.signal, (P)=>{
                    u(P);
                }) : k = await Ne(d, n, S, K.signal, (P)=>{
                    u(P);
                }), k;
            } finally{
                y(!1), f.current = null;
            }
        }, []);
        return {
            generating: s,
            generatedText: o,
            generate: E,
            stop: a
        };
    }
    async function Ce(s, y, o, u, f) {
        const a = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": y,
                "anthropic-version": "2023-06-01",
                "anthropic-dangerous-direct-browser-access": "true"
            },
            body: JSON.stringify({
                model: o,
                max_tokens: 4096,
                stream: !0,
                messages: [
                    {
                        role: "user",
                        content: s
                    }
                ],
                system: "당신은 한국 사업계획서 작성 전문가입니다. 요청받은 항목을 전문적이고 구체적으로 작성해 주세요. 마크다운 서식 없이 순수 텍스트만 출력해 주세요."
            }),
            signal: u
        });
        if (!a.ok) {
            const n = await a.json().catch(()=>({}));
            throw new Error(n?.error?.message || `Claude API error: ${a.status}`);
        }
        const E = a.body?.getReader();
        if (!E) throw new Error("No response body");
        const d = new TextDecoder;
        let b = "", m = "";
        for(;;){
            const { done: n, value: h } = await E.read();
            if (n) break;
            b += d.decode(h, {
                stream: !0
            });
            const S = b.split(`
`);
            b = S.pop() || "";
            for (const g of S){
                if (!g.startsWith("data: ")) continue;
                const K = g.slice(6);
                if (K !== "[DONE]") try {
                    const k = JSON.parse(K);
                    k.type === "content_block_delta" && k.delta?.text && (m += k.delta.text, f(m));
                } catch  {}
            }
        }
        return m;
    }
    async function Ne(s, y, o, u, f) {
        const a = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${y}`
            },
            body: JSON.stringify({
                model: o,
                max_tokens: 4096,
                stream: !0,
                messages: [
                    {
                        role: "system",
                        content: "당신은 한국 사업계획서 작성 전문가입니다. 요청받은 항목을 전문적이고 구체적으로 작성해 주세요. 마크다운 서식 없이 순수 텍스트만 출력해 주세요."
                    },
                    {
                        role: "user",
                        content: s
                    }
                ]
            }),
            signal: u
        });
        if (!a.ok) {
            const n = await a.json().catch(()=>({}));
            throw new Error(n?.error?.message || `OpenAI API error: ${a.status}`);
        }
        const E = a.body?.getReader();
        if (!E) throw new Error("No response body");
        const d = new TextDecoder;
        let b = "", m = "";
        for(;;){
            const { done: n, value: h } = await E.read();
            if (n) break;
            b += d.decode(h, {
                stream: !0
            });
            const S = b.split(`
`);
            b = S.pop() || "";
            for (const g of S){
                if (!g.startsWith("data: ")) continue;
                const K = g.slice(6);
                if (K !== "[DONE]") try {
                    const P = JSON.parse(K).choices?.[0]?.delta?.content;
                    P && (m += P, f(m));
                } catch  {}
            }
        }
        return m;
    }
    const Me = ({ fieldLabel: s, sectionTitle: y, templateName: o, allFormData: u, onAccept: f })=>{
        const { language: a } = L(), { showToast: E } = Z(), d = a === "ko", [b, m] = c.useState(!1), { generating: n, generatedText: h, generate: S, stop: g } = je(), K = ()=>{
            const j = {};
            for (const [T, C] of Object.entries(u))C && C.trim() && (j[T] = C);
            return `당신은 한국 사업계획서 작성 전문가입니다.
사업유형: ${o}
섹션: ${y}
작성 항목: ${s}
이미 입력된 정보: ${JSON.stringify(j, null, 2)}

위 맥락을 참고하여 '${s}' 항목을 전문적이고 구체적으로 작성해 주세요.
- 실제 사업계획서에 바로 사용할 수 있는 수준으로 작성
- 구체적인 수치나 예시를 포함
- 3~5개 문단 또는 항목으로 구성
- 마크다운 서식 없이 순수 텍스트만 출력`;
        }, k = async ()=>{
            try {
                await S(K());
            } catch (j) {
                j.name !== "AbortError" && E(j.message, "error");
            }
        }, P = ()=>{
            f(h), m(!1);
        }, N = ()=>{
            n && g(), m(!1);
        };
        return b ? e.jsxs("div", {
            className: "ai-field-popover",
            children: [
                e.jsxs("div", {
                    className: "ai-field-popover-header",
                    children: [
                        e.jsx("span", {
                            children: d ? `AI 작성: ${s}` : `AI Write: ${s}`
                        }),
                        e.jsx("button", {
                            className: "ai-field-popover-close",
                            onClick: N,
                            children: "×"
                        })
                    ]
                }),
                e.jsxs("div", {
                    className: "ai-field-preview",
                    children: [
                        h || (n ? d ? "생성 중..." : "Generating..." : ""),
                        n && e.jsx("span", {
                            className: "ai-cursor-blink",
                            children: "|"
                        })
                    ]
                }),
                e.jsxs("div", {
                    className: "ai-field-actions",
                    children: [
                        !n && h && e.jsxs(e.Fragment, {
                            children: [
                                e.jsx("button", {
                                    className: "bp-btn primary",
                                    onClick: P,
                                    children: d ? "적용" : "Apply"
                                }),
                                e.jsx("button", {
                                    className: "bp-btn",
                                    onClick: k,
                                    children: d ? "재생성" : "Regenerate"
                                })
                            ]
                        }),
                        n && e.jsx("button", {
                            className: "bp-btn",
                            onClick: g,
                            children: d ? "중지" : "Stop"
                        }),
                        e.jsx("button", {
                            className: "bp-btn",
                            onClick: N,
                            children: d ? "취소" : "Cancel"
                        })
                    ]
                })
            ]
        }) : e.jsx("button", {
            type: "button",
            className: "ai-field-btn",
            onClick: ()=>{
                m(!0), k();
            },
            title: d ? "AI로 작성" : "Write with AI",
            children: e.jsx("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: e.jsx("polygon", {
                    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                })
            })
        });
    }, we = [
        {
            type: "gov-prestartup",
            nameKo: "예비창업패키지",
            nameEn: "Pre-Startup Package",
            icon: "🌱",
            descKo: "중소벤처기업부/창업진흥원 예비창업자 지원사업",
            descEn: "KISED Pre-Startup Support Program",
            category: "government",
            sections: [
                {
                    id: "applicant",
                    titleKo: "예비창업자 정보",
                    titleEn: "Applicant Information",
                    fields: [
                        {
                            key: "applicantName",
                            labelKo: "신청자명",
                            labelEn: "Applicant Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "applicantBirth",
                            labelKo: "생년월일",
                            labelEn: "Date of Birth",
                            type: "date"
                        },
                        {
                            key: "career",
                            labelKo: "주요 경력 및 학력",
                            labelEn: "Career & Education",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "preStartupMotivation",
                            labelKo: "창업 동기",
                            labelEn: "Startup Motivation",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "itemOverview",
                    titleKo: "창업아이템 개요",
                    titleEn: "Startup Item Overview",
                    fields: [
                        {
                            key: "itemTitle",
                            labelKo: "아이템명",
                            labelEn: "Item Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "itemSummary",
                            labelKo: "아이템 요약",
                            labelEn: "Item Summary",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "itemCategory",
                            labelKo: "업종/분야",
                            labelEn: "Industry/Field",
                            type: "text",
                            required: !0
                        }
                    ]
                },
                {
                    id: "innovation",
                    titleKo: "아이템 혁신성·차별성",
                    titleEn: "Innovation & Differentiation",
                    fields: [
                        {
                            key: "innovationPoint",
                            labelKo: "혁신성 (기존 대비 개선점)",
                            labelEn: "Innovation Points",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "techDiff",
                            labelKo: "기술적 차별성",
                            labelEn: "Technical Differentiation",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "ipStatus",
                            labelKo: "지식재산권 현황",
                            labelEn: "IP Status",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "market",
                    titleKo: "시장분석 및 경쟁력",
                    titleEn: "Market Analysis & Competitiveness",
                    fields: [
                        {
                            key: "targetMarket",
                            labelKo: "목표 시장",
                            labelEn: "Target Market",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "preMarketSize",
                            labelKo: "시장 규모 (국내/해외)",
                            labelEn: "Market Size (Domestic/Global)",
                            type: "textarea"
                        },
                        {
                            key: "preCompetitors",
                            labelKo: "경쟁자 분석",
                            labelEn: "Competitor Analysis",
                            type: "textarea"
                        },
                        {
                            key: "competitiveEdge",
                            labelKo: "경쟁 우위 요소",
                            labelEn: "Competitive Advantage",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "bizModel",
                    titleKo: "BM·수익모델",
                    titleEn: "Business Model & Revenue",
                    fields: [
                        {
                            key: "businessModel",
                            labelKo: "비즈니스 모델",
                            labelEn: "Business Model",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "revenueModel",
                            labelKo: "수익 모델",
                            labelEn: "Revenue Model",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "salesStrategy",
                            labelKo: "판매/마케팅 전략",
                            labelEn: "Sales/Marketing Strategy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "execution",
                    titleKo: "사업화 전략",
                    titleEn: "Commercialization Strategy",
                    fields: [
                        {
                            key: "bizStrategy",
                            labelKo: "사업화 추진 전략",
                            labelEn: "Commercialization Plan",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "protoType",
                            labelKo: "시제품/MVP 계획",
                            labelEn: "Prototype/MVP Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "schedule",
                    titleKo: "추진일정·마일스톤",
                    titleEn: "Schedule & Milestones",
                    fields: [
                        {
                            key: "preMilestones",
                            labelKo: "단계별 추진 일정",
                            labelEn: "Phase Schedule",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "budget",
                    titleKo: "소요자금 및 자금운용계획",
                    titleEn: "Budget & Fund Plan",
                    fields: [
                        {
                            key: "budgetTotal",
                            labelKo: "총 소요자금",
                            labelEn: "Total Budget",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "preGovFunding",
                            labelKo: "정부지원금 신청액",
                            labelEn: "Government Funding Request",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "preSelfFunding",
                            labelKo: "자기부담금",
                            labelEn: "Self Funding",
                            type: "text"
                        },
                        {
                            key: "budgetBreakdown",
                            labelKo: "세부 자금 사용계획",
                            labelEn: "Budget Breakdown",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "impact",
                    titleKo: "기대효과",
                    titleEn: "Expected Outcomes",
                    fields: [
                        {
                            key: "revenue3yr",
                            labelKo: "3년 매출 전망",
                            labelEn: "3-Year Revenue Forecast",
                            type: "textarea"
                        },
                        {
                            key: "jobCreation",
                            labelKo: "고용 창출 계획",
                            labelEn: "Job Creation Plan",
                            type: "textarea"
                        },
                        {
                            key: "socialImpactPre",
                            labelKo: "사회적 기대효과",
                            labelEn: "Social Impact",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "gov-earlystartup",
            nameKo: "초기창업패키지",
            nameEn: "Early-Stage Startup Package",
            icon: "🚀",
            descKo: "3년 이내 창업기업 대상 초기창업 지원사업",
            descEn: "Support program for startups within 3 years",
            category: "government",
            sections: [
                {
                    id: "companyStatus",
                    titleKo: "기업 현황",
                    titleEn: "Company Status",
                    fields: [
                        {
                            key: "earlyCompanyName",
                            labelKo: "기업명",
                            labelEn: "Company Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "earlyRepName",
                            labelKo: "대표자명",
                            labelEn: "CEO Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "earlyEstDate",
                            labelKo: "설립일",
                            labelEn: "Established Date",
                            type: "date",
                            required: !0
                        },
                        {
                            key: "earlyBizNumber",
                            labelKo: "사업자등록번호",
                            labelEn: "Business Registration Number",
                            type: "text"
                        },
                        {
                            key: "earlyEmployees",
                            labelKo: "상시근로자 수",
                            labelEn: "Number of Employees",
                            type: "number"
                        },
                        {
                            key: "earlyAddress",
                            labelKo: "소재지",
                            labelEn: "Location",
                            type: "text"
                        }
                    ]
                },
                {
                    id: "earlyItem",
                    titleKo: "창업아이템",
                    titleEn: "Startup Item",
                    fields: [
                        {
                            key: "earlyItemName",
                            labelKo: "아이템명",
                            labelEn: "Item Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "earlyItemDesc",
                            labelKo: "아이템 설명",
                            labelEn: "Item Description",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlyItemDiff",
                            labelKo: "차별성 및 혁신성",
                            labelEn: "Differentiation & Innovation",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "earlyTech",
                    titleKo: "기술/IP 현황",
                    titleEn: "Technology/IP Status",
                    fields: [
                        {
                            key: "earlyCoreTech",
                            labelKo: "핵심 보유 기술",
                            labelEn: "Core Technology",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlyIpList",
                            labelKo: "지식재산권 보유 현황",
                            labelEn: "IP Holdings",
                            type: "textarea"
                        },
                        {
                            key: "earlyTechRoadmap",
                            labelKo: "기술 개발 로드맵",
                            labelEn: "Technology Roadmap",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "earlyMarket",
                    titleKo: "시장분석",
                    titleEn: "Market Analysis",
                    fields: [
                        {
                            key: "earlyTargetMarket",
                            labelKo: "목표 시장 및 고객",
                            labelEn: "Target Market & Customers",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlyMarketSize",
                            labelKo: "시장 규모 및 성장성",
                            labelEn: "Market Size & Growth",
                            type: "textarea"
                        },
                        {
                            key: "earlyCompetitorAnalysis",
                            labelKo: "경쟁 환경 분석",
                            labelEn: "Competitive Landscape",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "earlyBizStrategy",
                    titleKo: "사업화 전략",
                    titleEn: "Commercialization Strategy",
                    fields: [
                        {
                            key: "earlyBizModel",
                            labelKo: "비즈니스 모델",
                            labelEn: "Business Model",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlySalesStrategy",
                            labelKo: "판로 개척 전략",
                            labelEn: "Sales Strategy",
                            type: "textarea"
                        },
                        {
                            key: "earlyMarketingPlan",
                            labelKo: "마케팅 계획",
                            labelEn: "Marketing Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "earlyGrowth",
                    titleKo: "성장전략",
                    titleEn: "Growth Strategy",
                    fields: [
                        {
                            key: "earlyGrowthPlan",
                            labelKo: "중장기 성장 전략",
                            labelEn: "Mid-Long Term Growth Plan",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlyScaleup",
                            labelKo: "스케일업 계획",
                            labelEn: "Scale-up Plan",
                            type: "textarea"
                        },
                        {
                            key: "earlyGlobalPlan",
                            labelKo: "해외 진출 계획",
                            labelEn: "Global Expansion Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "earlyTeam",
                    titleKo: "팀 구성",
                    titleEn: "Team Composition",
                    fields: [
                        {
                            key: "earlyTeamIntro",
                            labelKo: "핵심 인력 현황",
                            labelEn: "Key Personnel",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "earlyHiringPlan",
                            labelKo: "인력 충원 계획",
                            labelEn: "Hiring Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "earlyBudget",
                    titleKo: "자금운용계획",
                    titleEn: "Budget Plan",
                    fields: [
                        {
                            key: "earlyTotalBudget",
                            labelKo: "총 사업비",
                            labelEn: "Total Budget",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "earlyGovAmount",
                            labelKo: "정부지원금",
                            labelEn: "Government Funding",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "earlySelfAmount",
                            labelKo: "자부담금",
                            labelEn: "Self Funding",
                            type: "text"
                        },
                        {
                            key: "earlyBudgetDetail",
                            labelKo: "세부 자금운용 계획",
                            labelEn: "Detailed Budget Plan",
                            type: "textarea"
                        }
                    ]
                }
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
`
        },
        {
            type: "gov-smallbiz",
            nameKo: "소상공인 정책자금",
            nameEn: "Small Business Policy Fund",
            icon: "🏪",
            descKo: "소상공인시장진흥공단 정책자금 신청서",
            descEn: "Small Enterprise & Market Service Policy Fund Application",
            category: "government",
            sections: [
                {
                    id: "sbApplicant",
                    titleKo: "신청인 정보",
                    titleEn: "Applicant Information",
                    fields: [
                        {
                            key: "sbName",
                            labelKo: "상호/법인명",
                            labelEn: "Business Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbRepName",
                            labelKo: "대표자명",
                            labelEn: "Representative",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbBizNumber",
                            labelKo: "사업자등록번호",
                            labelEn: "Business Registration No.",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbIndustry",
                            labelKo: "업종",
                            labelEn: "Industry",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbEstDate",
                            labelKo: "개업일",
                            labelEn: "Opening Date",
                            type: "date"
                        }
                    ]
                },
                {
                    id: "sbLocation",
                    titleKo: "사업장 현황",
                    titleEn: "Business Location Status",
                    fields: [
                        {
                            key: "sbAddress",
                            labelKo: "사업장 주소",
                            labelEn: "Business Address",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbSize",
                            labelKo: "사업장 규모 (면적)",
                            labelEn: "Business Area Size",
                            type: "text"
                        },
                        {
                            key: "sbEmployees",
                            labelKo: "종업원 수",
                            labelEn: "Employee Count",
                            type: "number"
                        },
                        {
                            key: "sbOwnership",
                            labelKo: "소유/임차 여부",
                            labelEn: "Ownership Type",
                            type: "select",
                            options: [
                                "자가",
                                "임차",
                                "기타"
                            ]
                        }
                    ]
                },
                {
                    id: "sbBusiness",
                    titleKo: "사업 내용",
                    titleEn: "Business Description",
                    fields: [
                        {
                            key: "sbDescription",
                            labelKo: "주요 사업 내용",
                            labelEn: "Main Business Activities",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "sbProducts",
                            labelKo: "주요 상품/서비스",
                            labelEn: "Main Products/Services",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "sbCustomers",
                            labelKo: "주요 고객층",
                            labelEn: "Target Customers",
                            type: "textarea"
                        },
                        {
                            key: "sbStrength",
                            labelKo: "사업 경쟁력",
                            labelEn: "Business Competitiveness",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "sbFundUse",
                    titleKo: "자금 사용계획",
                    titleEn: "Fund Usage Plan",
                    fields: [
                        {
                            key: "sbLoanAmount",
                            labelKo: "신청 금액",
                            labelEn: "Requested Amount",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "sbLoanPurpose",
                            labelKo: "자금 용도",
                            labelEn: "Fund Purpose",
                            type: "select",
                            options: [
                                "운전자금",
                                "시설자금",
                                "운전+시설",
                                "긴급경영안정자금"
                            ]
                        },
                        {
                            key: "sbFundDetail",
                            labelKo: "세부 사용계획",
                            labelEn: "Detailed Usage Plan",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "sbRepayment",
                    titleKo: "상환계획",
                    titleEn: "Repayment Plan",
                    fields: [
                        {
                            key: "sbRepaymentPlan",
                            labelKo: "상환 계획",
                            labelEn: "Repayment Plan",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "sbRepaymentSource",
                            labelKo: "상환 재원",
                            labelEn: "Repayment Source",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "sbFinance",
                    titleKo: "매출·재무현황",
                    titleEn: "Sales & Financial Status",
                    fields: [
                        {
                            key: "sbAnnualRevenue",
                            labelKo: "최근 연 매출액",
                            labelEn: "Recent Annual Revenue",
                            type: "text"
                        },
                        {
                            key: "sbMonthlyRevenue",
                            labelKo: "월 평균 매출액",
                            labelEn: "Average Monthly Revenue",
                            type: "text"
                        },
                        {
                            key: "sbDebtStatus",
                            labelKo: "부채 현황",
                            labelEn: "Debt Status",
                            type: "textarea"
                        },
                        {
                            key: "sbCreditGrade",
                            labelKo: "신용등급",
                            labelEn: "Credit Rating",
                            type: "text"
                        }
                    ]
                }
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
`
        },
        {
            type: "gov-rnd",
            nameKo: "기술개발 R&D 사업계획서",
            nameEn: "R&D Project Plan",
            icon: "🔬",
            descKo: "정부 R&D 기술개발 과제 신청용 사업계획서",
            descEn: "Government R&D Technology Development Project Plan",
            category: "government",
            sections: [
                {
                    id: "rndSummary",
                    titleKo: "과제 총괄표",
                    titleEn: "Project Summary",
                    fields: [
                        {
                            key: "rndTitle",
                            labelKo: "과제명",
                            labelEn: "Project Title",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndProgram",
                            labelKo: "사업명/공고명",
                            labelEn: "Program Name",
                            type: "text"
                        },
                        {
                            key: "rndPeriod",
                            labelKo: "연구개발 기간",
                            labelEn: "R&D Period",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndOrganization",
                            labelKo: "주관연구기관",
                            labelEn: "Lead Research Institution",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndPI",
                            labelKo: "연구책임자",
                            labelEn: "Principal Investigator",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndCoOrg",
                            labelKo: "참여기관",
                            labelEn: "Participating Organizations",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndNecessity",
                    titleKo: "기술개발 필요성",
                    titleEn: "R&D Necessity",
                    fields: [
                        {
                            key: "rndBackground",
                            labelKo: "연구개발 배경 및 필요성",
                            labelEn: "R&D Background & Necessity",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndProblem",
                            labelKo: "현재 기술적 한계/문제점",
                            labelEn: "Current Technical Limitations",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "rndTrend",
                    titleKo: "국내외 기술동향",
                    titleEn: "Technology Trends",
                    fields: [
                        {
                            key: "rndDomesticTrend",
                            labelKo: "국내 기술동향",
                            labelEn: "Domestic Technology Trends",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndGlobalTrend",
                            labelKo: "국외 기술동향",
                            labelEn: "Global Technology Trends",
                            type: "textarea"
                        },
                        {
                            key: "rndPriorArt",
                            labelKo: "선행연구 분석",
                            labelEn: "Prior Art Analysis",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndGoal",
                    titleKo: "개발 목표·내용",
                    titleEn: "Development Goals & Content",
                    fields: [
                        {
                            key: "rndFinalGoal",
                            labelKo: "최종 개발 목표",
                            labelEn: "Final Development Goal",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndYearlyGoal",
                            labelKo: "연차별 개발 목표",
                            labelEn: "Yearly Development Goals",
                            type: "textarea"
                        },
                        {
                            key: "rndDevContent",
                            labelKo: "세부 개발 내용",
                            labelEn: "Detailed Development Content",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndSpecs",
                            labelKo: "목표 성능 지표",
                            labelEn: "Target Performance Specs",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndEquip",
                    titleKo: "연구장비·시설",
                    titleEn: "Research Equipment & Facilities",
                    fields: [
                        {
                            key: "rndExistingEquip",
                            labelKo: "보유 연구장비 현황",
                            labelEn: "Existing Equipment",
                            type: "textarea"
                        },
                        {
                            key: "rndNewEquip",
                            labelKo: "신규 장비 구매 계획",
                            labelEn: "New Equipment Purchase Plan",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndSystem",
                    titleKo: "추진체계",
                    titleEn: "Implementation System",
                    fields: [
                        {
                            key: "rndOrgChart",
                            labelKo: "연구 추진체계",
                            labelEn: "R&D Organization Chart",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndSchedule",
                            labelKo: "추진 일정",
                            labelEn: "Schedule",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "rndTeam",
                    titleKo: "연구인력",
                    titleEn: "Research Personnel",
                    fields: [
                        {
                            key: "rndPIProfile",
                            labelKo: "연구책임자 이력",
                            labelEn: "PI Profile",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndResearchers",
                            labelKo: "참여 연구원 현황",
                            labelEn: "Research Team",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndComm",
                    titleKo: "사업화 계획",
                    titleEn: "Commercialization Plan",
                    fields: [
                        {
                            key: "rndCommPlan",
                            labelKo: "사업화 추진 계획",
                            labelEn: "Commercialization Plan",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "rndMarketAnalysis",
                            labelKo: "시장 분석 및 매출 전망",
                            labelEn: "Market Analysis & Revenue Forecast",
                            type: "textarea"
                        },
                        {
                            key: "rndIpStrategy",
                            labelKo: "IP 전략",
                            labelEn: "IP Strategy",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "rndBudget",
                    titleKo: "연구비 편성",
                    titleEn: "R&D Budget",
                    fields: [
                        {
                            key: "rndTotalBudget",
                            labelKo: "총 연구비",
                            labelEn: "Total R&D Budget",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndGovFunding",
                            labelKo: "정부출연금",
                            labelEn: "Government Funding",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "rndMatchFunding",
                            labelKo: "민간부담금",
                            labelEn: "Private Match",
                            type: "text"
                        },
                        {
                            key: "rndBudgetDetail",
                            labelKo: "비목별 연구비 내역",
                            labelEn: "Budget by Category",
                            type: "textarea",
                            required: !0
                        }
                    ]
                }
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
`
        },
        {
            type: "gov-social",
            nameKo: "사회적기업 육성사업",
            nameEn: "Social Enterprise Development",
            icon: "🤝",
            descKo: "한국사회적기업진흥원 사회적기업 육성사업 신청서",
            descEn: "Korea Social Enterprise Promotion Agency Development Program",
            category: "government",
            sections: [
                {
                    id: "seOverview",
                    titleKo: "기업 개요",
                    titleEn: "Enterprise Overview",
                    fields: [
                        {
                            key: "seName",
                            labelKo: "기업명",
                            labelEn: "Enterprise Name",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "seType",
                            labelKo: "조직 형태",
                            labelEn: "Organization Type",
                            type: "select",
                            options: [
                                "사회적기업(인증)",
                                "예비사회적기업",
                                "사회적협동조합",
                                "마을기업",
                                "자활기업"
                            ],
                            required: !0
                        },
                        {
                            key: "seRepName",
                            labelKo: "대표자명",
                            labelEn: "Representative",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "seEstDate",
                            labelKo: "설립일",
                            labelEn: "Established Date",
                            type: "date"
                        },
                        {
                            key: "seEmployees",
                            labelKo: "총 근로자 수",
                            labelEn: "Total Employees",
                            type: "number"
                        },
                        {
                            key: "seDescription",
                            labelKo: "기업 소개",
                            labelEn: "Enterprise Description",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "sePurpose",
                    titleKo: "사회적 목적",
                    titleEn: "Social Purpose",
                    fields: [
                        {
                            key: "seMission",
                            labelKo: "사회적 미션",
                            labelEn: "Social Mission",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seSocialGoal",
                            labelKo: "사회적 목적 유형",
                            labelEn: "Social Purpose Type",
                            type: "select",
                            options: [
                                "일자리제공형",
                                "사회서비스제공형",
                                "지역사회공헌형",
                                "혼합형",
                                "기타(창의·혁신)형"
                            ]
                        },
                        {
                            key: "seSocialProblem",
                            labelKo: "해결하려는 사회문제",
                            labelEn: "Social Problem to Solve",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seBeneficiary",
                            labelKo: "주요 수혜 대상",
                            labelEn: "Main Beneficiaries",
                            type: "textarea",
                            required: !0
                        }
                    ]
                },
                {
                    id: "seService",
                    titleKo: "사회서비스 실적",
                    titleEn: "Social Service Performance",
                    fields: [
                        {
                            key: "seServiceList",
                            labelKo: "제공 사회서비스 내용",
                            labelEn: "Social Services Provided",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seServiceResult",
                            labelKo: "서비스 제공 실적",
                            labelEn: "Service Performance",
                            type: "textarea"
                        },
                        {
                            key: "seSocialImpact",
                            labelKo: "사회적 성과",
                            labelEn: "Social Impact Results",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "seJobs",
                    titleKo: "일자리 창출",
                    titleEn: "Job Creation",
                    fields: [
                        {
                            key: "seCurrentJobs",
                            labelKo: "현재 고용 현황",
                            labelEn: "Current Employment Status",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seJobPlan",
                            labelKo: "신규 일자리 창출 계획",
                            labelEn: "New Job Creation Plan",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seVulnerable",
                            labelKo: "취약계층 고용 현황/계획",
                            labelEn: "Vulnerable Group Employment",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "seBizPlan",
                    titleKo: "사업계획",
                    titleEn: "Business Plan",
                    fields: [
                        {
                            key: "seMainBiz",
                            labelKo: "주요 사업 내용",
                            labelEn: "Main Business Activities",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seBizModel",
                            labelKo: "수익 모델",
                            labelEn: "Revenue Model",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seGrowthPlan",
                            labelKo: "성장 계획",
                            labelEn: "Growth Plan",
                            type: "textarea"
                        },
                        {
                            key: "seSchedule",
                            labelKo: "사업 추진 일정",
                            labelEn: "Business Schedule",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "seFinance",
                    titleKo: "재무계획",
                    titleEn: "Financial Plan",
                    fields: [
                        {
                            key: "seAnnualRevenue",
                            labelKo: "연간 매출액 (최근)",
                            labelEn: "Annual Revenue (Recent)",
                            type: "text"
                        },
                        {
                            key: "seRevenueTarget",
                            labelKo: "매출 목표",
                            labelEn: "Revenue Target",
                            type: "textarea"
                        },
                        {
                            key: "seTotalBudget",
                            labelKo: "총 사업비",
                            labelEn: "Total Budget",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "seGovSupport",
                            labelKo: "정부지원 신청금액",
                            labelEn: "Government Support Requested",
                            type: "text",
                            required: !0
                        },
                        {
                            key: "seBudgetDetail",
                            labelKo: "예산 세부 내역",
                            labelEn: "Detailed Budget",
                            type: "textarea"
                        }
                    ]
                },
                {
                    id: "sePerformance",
                    titleKo: "성과관리",
                    titleEn: "Performance Management",
                    fields: [
                        {
                            key: "seKpi",
                            labelKo: "성과 지표 (KPI)",
                            labelEn: "Key Performance Indicators",
                            type: "textarea",
                            required: !0
                        },
                        {
                            key: "seMonitoring",
                            labelKo: "모니터링 계획",
                            labelEn: "Monitoring Plan",
                            type: "textarea"
                        },
                        {
                            key: "seSustainPlan",
                            labelKo: "자립 지속가능성 계획",
                            labelEn: "Sustainability Plan",
                            type: "textarea"
                        }
                    ]
                }
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
`
        }
    ], Te = [
        {
            type: "startup",
            nameKo: "창업사업계획서",
            nameEn: "Startup Business Plan",
            icon: "🚀",
            descKo: "스타트업/신규 창업을 위한 사업계획서",
            descEn: "Business plan for startups and new ventures",
            category: "general",
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
            category: "general",
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
            category: "general",
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
            category: "general",
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
            category: "general",
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
            category: "general",
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
            category: "general",
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
            category: "general",
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
    ], D = [
        ...Te,
        ...we
    ], O = "hwp_bp_autosave";
    function X(s) {
        let y = s.replace(/^#### (.+)$/gm, "<h4>$1</h4>").replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>").replace(/^\> (.+)$/gm, "<blockquote>$1</blockquote>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
        return y = y.replace(/^\|(.+)\|$/gm, (o)=>{
            if (/^\|[\s-:|]+\|$/.test(o)) return "";
            const u = o.split("|").filter((a)=>a.trim()), f = "td";
            return "<tr>" + u.map((a)=>`<${f}>${a.trim()}</${f}>`).join("") + "</tr>";
        }), y = y.replace(/(<tr>[\s\S]*?<\/tr>)/g, "<table>$1</table>"), y = y.replace(/<\/table>\s*<table>/g, ""), y = y.split(`

`).map((o)=>(o = o.trim(), o ? o.startsWith("<h") || o.startsWith("<li") || o.startsWith("<table") || o.startsWith("<blockquote") || o.startsWith("<tr") ? o : `<p>${o}</p>` : "")).join(`
`), y;
    }
    De = ()=>{
        const { t: s, language: y } = L(), { user: o } = Ee(), { showToast: u } = Z(), f = xe(), a = y === "ko", [E, d] = c.useState(1), [b, m] = c.useState(null), [n, h] = c.useState({}), [S, g] = c.useState({}), [K, k] = c.useState("preview"), [P, N] = c.useState(!1), [j, T] = c.useState([]), [C, q] = c.useState(!1), [F, M] = c.useState(!1), [p, ee] = c.useState(""), [B, te] = c.useState("all"), v = c.useMemo(()=>D.find((t)=>t.type === b) ?? null, [
            b
        ]), w = c.useMemo(()=>{
            if (!v) return "";
            let t = v.markdownTemplate;
            for (const l of v.sections)for (const r of l.fields){
                const i = n[r.key] || "", x = new RegExp(`\\{\\{${r.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g");
                t = t.replace(x, i || `(${a ? r.labelKo : r.labelEn})`);
            }
            return t;
        }, [
            v,
            n,
            a
        ]), G = c.useMemo(()=>{
            if (!v) return 0;
            const t = v.sections.flatMap((r)=>r.fields.filter((i)=>i.required));
            if (t.length === 0) return 100;
            const l = t.filter((r)=>n[r.key]?.trim()).length;
            return Math.round(l / t.length * 100);
        }, [
            v,
            n
        ]);
        c.useEffect(()=>{
            if (!b || Object.keys(n).length === 0) return;
            const t = {
                type: b,
                formData: n,
                timestamp: Date.now()
            };
            try {
                localStorage.setItem(O, JSON.stringify(t));
            } catch  {}
        }, [
            b,
            n
        ]), c.useEffect(()=>{
            try {
                const t = localStorage.getItem(O);
                if (!t) return;
                const { type: l, formData: r, timestamp: i } = JSON.parse(t);
                if (Date.now() - i > 864e5) return;
                if (l && r && Object.keys(r).length > 0) {
                    m(l), h(r);
                    const x = D.find((R)=>R.type === l);
                    x && (g({
                        [x.sections[0].id]: !0
                    }), d(2), u(a ? "자동 저장된 내용을 복원했습니다" : "Restored autosaved draft", "info"));
                }
            } catch  {}
        }, []);
        const ae = async ()=>{
            if (!o) return;
            q(!0);
            const t = _();
            if (!t) {
                q(!1);
                return;
            }
            const { data: l, error: r } = await t.from(z.businessPlans).select("*").eq("user_id", o.id).order("updated_at", {
                ascending: !1
            }).limit(20);
            !r && l && T(l), q(!1), M(!0);
        }, le = (t)=>{
            m(t.plan_type), h(t.data);
            const l = D.find((r)=>r.type === t.plan_type);
            if (l) {
                const r = {};
                l.sections.forEach((i)=>{
                    r[i.id] = !0;
                }), g(r);
            }
            M(!1), d(2), u(a ? "저장된 계획서를 불러왔습니다" : "Loaded saved plan", "success");
        }, ne = async (t)=>{
            if (!confirm(a ? "이 사업계획서를 삭제하시겠습니까?" : "Delete this business plan?")) return;
            const l = _();
            if (!l || !o) return;
            const { error: r } = await l.from(z.businessPlans).delete().eq("id", t).eq("user_id", o.id);
            r || (T((i)=>i.filter((x)=>x.id !== t)), u(a ? "삭제되었습니다" : "Deleted", "success"));
        }, $ = c.useMemo(()=>{
            let t = D;
            if (B !== "all" && (t = t.filter((l)=>l.category === B)), p.trim()) {
                const l = p.toLowerCase();
                t = t.filter((r)=>r.nameKo.toLowerCase().includes(l) || r.nameEn.toLowerCase().includes(l) || r.descKo.toLowerCase().includes(l) || r.descEn.toLowerCase().includes(l));
            }
            return t;
        }, [
            p,
            B
        ]), re = (t)=>{
            m(t), h({});
            const l = D.find((r)=>r.type === t);
            l && g({
                [l.sections[0].id]: !0
            }), d(2);
        }, ie = (t)=>{
            g((l)=>({
                    ...l,
                    [t]: !l[t]
                }));
        }, se = ()=>{
            if (!v) return;
            const t = {};
            v.sections.forEach((l)=>{
                t[l.id] = !0;
            }), g(t);
        }, A = (t, l)=>{
            h((r)=>({
                    ...r,
                    [t]: l
                }));
        }, I = ()=>n.businessName || n.companyName || n.invCompanyName || n.projectTitle || n.eduName || n.npName || n.brandName || n.ecName || n.itemTitle || n.earlyCompanyName || n.sbName || n.rndTitle || n.seName || "", oe = ()=>{
            const t = new Blob([
                w
            ], {
                type: "text/markdown;charset=utf-8"
            }), l = URL.createObjectURL(t), r = document.createElement("a");
            r.href = l, r.download = `${I() || "business-plan"}.md`, r.click(), URL.revokeObjectURL(l);
        }, ce = ()=>{
            const t = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${I() || "Business Plan"}</title>
<style>body{font-family:'Malgun Gothic',sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}blockquote{border-left:4px solid #0046C8;padding:8px 16px;margin:16px 0;background:#f9f9f9}
@media print{body{margin:0;padding:20px}h2{page-break-before:auto}}</style></head>
<body>${X(w)}</body></html>`, l = new Blob([
                t
            ], {
                type: "text/html;charset=utf-8"
            }), r = URL.createObjectURL(l), i = document.createElement("a");
            i.href = r, i.download = `${I() || "business-plan"}.html`, i.click(), URL.revokeObjectURL(r);
        }, de = async ()=>{
            try {
                const { markdownToHwpx: t } = await ge(async ()=>{
                    const { markdownToHwpx: me } = await import("./index-DrxlCJyF.js");
                    return {
                        markdownToHwpx: me
                    };
                }, __vite__mapDeps([0,1,2,3])), l = I() || "business-plan", r = await t(w), i = new Blob([
                    r
                ], {
                    type: "application/hwp+zip"
                }), x = URL.createObjectURL(i), R = document.createElement("a");
                R.href = x, R.download = `${l}.hwpx`, R.click(), URL.revokeObjectURL(x);
            } catch (t) {
                u(t.message || "HWPX export failed", "error");
            }
        }, pe = async ()=>{
            if (!o) {
                u(a ? "로그인이 필요합니다" : "Login required", "warning");
                return;
            }
            const t = _();
            if (!t) return;
            N(!0);
            const { error: l } = await t.from(z.businessPlans).insert({
                user_id: o.id,
                plan_type: b,
                title: I(),
                data: n,
                generated_content: w
            });
            if (N(!1), l) u(l.message, "error");
            else {
                u(s("site.businessPlan.saved"), "success");
                try {
                    localStorage.removeItem(O);
                } catch  {}
            }
        }, ue = ()=>{
            f("/md-editor", {
                state: {
                    content: w
                }
            });
        }, ye = ()=>{
            d(1), m(null), h({}), g({}), M(!1);
            try {
                localStorage.removeItem(O);
            } catch  {}
        }, be = [
            s("site.businessPlan.step1"),
            s("site.businessPlan.step2"),
            s("site.businessPlan.step3"),
            s("site.businessPlan.step4")
        ];
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(ke, {
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
                                ].map((t, l)=>e.jsxs("div", {
                                        style: {
                                            display: "contents"
                                        },
                                        children: [
                                            l > 0 && e.jsx("div", {
                                                className: "bp-step-connector"
                                            }),
                                            e.jsxs("div", {
                                                className: `bp-step ${E === t ? "active" : ""} ${E > t ? "completed" : ""}`,
                                                onClick: ()=>{
                                                    E > t && d(t);
                                                },
                                                style: {
                                                    cursor: E > t ? "pointer" : "default"
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        className: "bp-step-num",
                                                        children: E > t ? "✓" : t
                                                    }),
                                                    be[l]
                                                ]
                                            })
                                        ]
                                    }, t))
                            }),
                            E === 1 && e.jsxs("div", {
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
                                                        value: p,
                                                        onChange: (t)=>ee(t.target.value),
                                                        placeholder: a ? "유형 검색..." : "Search types...",
                                                        className: "bp-search-input"
                                                    })
                                                ]
                                            }),
                                            o && e.jsxs("button", {
                                                className: "bp-btn",
                                                onClick: ae,
                                                disabled: C,
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
                                                    a ? "저장된 계획서" : "Saved Plans"
                                                ]
                                            })
                                        ]
                                    }),
                                    F && e.jsx("div", {
                                        className: "bp-saved-overlay",
                                        onClick: ()=>M(!1),
                                        children: e.jsxs("div", {
                                            className: "bp-saved-modal",
                                            onClick: (t)=>t.stopPropagation(),
                                            children: [
                                                e.jsxs("div", {
                                                    className: "bp-saved-header",
                                                    children: [
                                                        e.jsx("h3", {
                                                            children: a ? "저장된 사업계획서" : "Saved Business Plans"
                                                        }),
                                                        e.jsx("button", {
                                                            className: "bp-saved-close",
                                                            onClick: ()=>M(!1),
                                                            children: "×"
                                                        })
                                                    ]
                                                }),
                                                C ? e.jsx("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        padding: "40px 0"
                                                    },
                                                    children: e.jsx("div", {
                                                        className: "loading-spinner"
                                                    })
                                                }) : j.length === 0 ? e.jsx("div", {
                                                    className: "bp-saved-empty",
                                                    children: a ? "저장된 사업계획서가 없습니다" : "No saved business plans"
                                                }) : e.jsx("div", {
                                                    className: "bp-saved-list",
                                                    children: j.map((t)=>{
                                                        const l = D.find((r)=>r.type === t.plan_type);
                                                        return e.jsxs("div", {
                                                            className: "bp-saved-item",
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "bp-saved-item-icon",
                                                                    children: l?.icon || "📄"
                                                                }),
                                                                e.jsxs("div", {
                                                                    className: "bp-saved-item-info",
                                                                    children: [
                                                                        e.jsx("strong", {
                                                                            children: t.title || (a ? "제목 없음" : "Untitled")
                                                                        }),
                                                                        e.jsxs("span", {
                                                                            children: [
                                                                                a ? l?.nameKo : l?.nameEn,
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
                                                                            onClick: ()=>le(t),
                                                                            children: a ? "불러오기" : "Load"
                                                                        }),
                                                                        e.jsx("button", {
                                                                            className: "bp-btn danger",
                                                                            onClick: ()=>ne(t.id),
                                                                            children: a ? "삭제" : "Delete"
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
                                        className: "bp-category-tabs",
                                        children: [
                                            "all",
                                            "general",
                                            "government"
                                        ].map((t)=>e.jsx("button", {
                                                className: `bp-category-tab ${B === t ? "active" : ""}`,
                                                onClick: ()=>te(t),
                                                children: t === "all" ? a ? "전체" : "All" : t === "general" ? a ? "일반 사업계획서" : "General" : a ? "정부지원사업" : "Government"
                                            }, t))
                                    }),
                                    e.jsx("div", {
                                        className: "bp-type-grid",
                                        children: $.map((t)=>e.jsxs("div", {
                                                className: `bp-type-card ${b === t.type ? "selected" : ""}`,
                                                onClick: ()=>re(t.type),
                                                children: [
                                                    t.category === "government" && e.jsx("span", {
                                                        className: "bp-gov-badge",
                                                        children: a ? "🏛️ 정부지원" : "🏛️ Gov"
                                                    }),
                                                    e.jsx("div", {
                                                        className: "bp-type-icon",
                                                        children: t.icon
                                                    }),
                                                    e.jsx("h3", {
                                                        children: a ? t.nameKo : t.nameEn
                                                    }),
                                                    e.jsx("p", {
                                                        children: a ? t.descKo : t.descEn
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "bp-type-badge",
                                                        children: [
                                                            t.sections.length,
                                                            " ",
                                                            a ? "섹션" : "sections",
                                                            " · ",
                                                            t.sections.reduce((l, r)=>l + r.fields.length, 0),
                                                            " ",
                                                            a ? "항목" : "fields"
                                                        ]
                                                    })
                                                ]
                                            }, t.type))
                                    }),
                                    $.length === 0 && e.jsx("div", {
                                        className: "bp-empty-search",
                                        children: a ? "검색 결과가 없습니다" : "No results found"
                                    })
                                ]
                            }),
                            E === 2 && v && e.jsxs("div", {
                                className: "bp-form-section",
                                children: [
                                    e.jsx(he, {
                                        collapsed: !0
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-form-header",
                                        children: [
                                            e.jsxs("div", {
                                                className: "bp-form-header-left",
                                                children: [
                                                    e.jsx("span", {
                                                        className: "bp-form-type-icon",
                                                        children: v.icon
                                                    }),
                                                    e.jsx("span", {
                                                        className: "bp-form-type-name",
                                                        children: a ? v.nameKo : v.nameEn
                                                    })
                                                ]
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn-text",
                                                onClick: se,
                                                children: a ? "모두 펼치기" : "Expand All"
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
                                                        width: `${G}%`
                                                    }
                                                })
                                            }),
                                            e.jsxs("span", {
                                                className: "bp-progress-bar-pct",
                                                children: [
                                                    G,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    v.sections.map((t, l)=>{
                                        const r = t.fields.filter((i)=>n[i.key]?.trim()).length;
                                        return e.jsxs("div", {
                                            className: "bp-accordion",
                                            children: [
                                                e.jsxs("button", {
                                                    className: `bp-accordion-header ${S[t.id] ? "open" : ""}`,
                                                    onClick: ()=>ie(t.id),
                                                    children: [
                                                        e.jsxs("span", {
                                                            className: "bp-accordion-header-left",
                                                            children: [
                                                                e.jsx("span", {
                                                                    className: "bp-section-num",
                                                                    children: l + 1
                                                                }),
                                                                a ? t.titleKo : t.titleEn,
                                                                e.jsxs("span", {
                                                                    className: "bp-section-count",
                                                                    children: [
                                                                        r,
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
                                                S[t.id] && e.jsx("div", {
                                                    className: "bp-accordion-body",
                                                    children: t.fields.map((i)=>e.jsxs("div", {
                                                            className: "bp-field",
                                                            children: [
                                                                e.jsxs("label", {
                                                                    children: [
                                                                        a ? i.labelKo : i.labelEn,
                                                                        i.required && e.jsx("span", {
                                                                            className: "required",
                                                                            children: "*"
                                                                        }),
                                                                        i.type === "textarea" && e.jsx(Me, {
                                                                            fieldKey: i.key,
                                                                            fieldLabel: a ? i.labelKo : i.labelEn,
                                                                            sectionTitle: a ? t.titleKo : t.titleEn,
                                                                            templateName: a ? v.nameKo : v.nameEn,
                                                                            allFormData: n,
                                                                            onAccept: (x)=>A(i.key, x)
                                                                        })
                                                                    ]
                                                                }),
                                                                i.type === "textarea" ? e.jsx("textarea", {
                                                                    value: n[i.key] || "",
                                                                    onChange: (x)=>A(i.key, x.target.value),
                                                                    placeholder: i.placeholder,
                                                                    rows: 3
                                                                }) : i.type === "select" && i.options ? e.jsxs("select", {
                                                                    value: n[i.key] || "",
                                                                    onChange: (x)=>A(i.key, x.target.value),
                                                                    children: [
                                                                        e.jsx("option", {
                                                                            value: "",
                                                                            children: a ? "선택하세요" : "Select..."
                                                                        }),
                                                                        i.options.map((x)=>e.jsx("option", {
                                                                                value: x,
                                                                                children: x
                                                                            }, x))
                                                                    ]
                                                                }) : e.jsx("input", {
                                                                    type: i.type === "number" ? "number" : i.type === "date" ? "date" : "text",
                                                                    value: n[i.key] || "",
                                                                    onChange: (x)=>A(i.key, x.target.value),
                                                                    placeholder: i.placeholder
                                                                })
                                                            ]
                                                        }, i.key))
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
                                            a ? "자동 저장 중" : "Auto-saving"
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>{
                                                    d(1), m(null);
                                                },
                                                children: s("site.businessPlan.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>d(3),
                                                disabled: G < 10,
                                                children: s("site.businessPlan.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            E === 3 && e.jsxs("div", {
                                className: "bp-preview-section",
                                children: [
                                    e.jsxs("div", {
                                        className: "bp-preview-tabs",
                                        children: [
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${K === "preview" ? "active" : ""}`,
                                                onClick: ()=>k("preview"),
                                                children: s("site.businessPlan.previewTab")
                                            }),
                                            e.jsx("button", {
                                                className: `bp-preview-tab ${K === "markdown" ? "active" : ""}`,
                                                onClick: ()=>k("markdown"),
                                                children: s("site.businessPlan.markdownTab")
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "bp-preview-content",
                                        children: K === "markdown" ? e.jsx("pre", {
                                            children: w
                                        }) : e.jsx("div", {
                                            className: "bp-preview-rendered",
                                            dangerouslySetInnerHTML: {
                                                __html: X(w)
                                            }
                                        })
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "bp-btn",
                                                onClick: ()=>d(2),
                                                children: s("site.businessPlan.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "bp-btn primary",
                                                onClick: ()=>d(4),
                                                children: s("site.businessPlan.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            E === 4 && e.jsxs("div", {
                                className: "bp-export-section",
                                children: [
                                    e.jsx("div", {
                                        className: "bp-export-success",
                                        children: v?.icon
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-title",
                                        children: I() || s("site.businessPlan.title")
                                    }),
                                    e.jsx("div", {
                                        className: "bp-export-subtitle",
                                        children: a ? "사업계획서가 준비되었습니다. 원하는 형식으로 내보내세요." : "Your business plan is ready. Export in your preferred format."
                                    }),
                                    e.jsxs("div", {
                                        className: "bp-export-buttons",
                                        children: [
                                            e.jsxs("button", {
                                                className: "bp-export-btn primary",
                                                onClick: de,
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
                                                onClick: oe,
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
                                                onClick: ce,
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
                                            o && e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: pe,
                                                disabled: P,
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
                                                    P ? "..." : s("site.businessPlan.saveToDb")
                                                ]
                                            }),
                                            e.jsxs("button", {
                                                className: "bp-export-btn",
                                                onClick: ue,
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
                                        onClick: ye,
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
export { De as default, __tla };
