const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/parser-DJPyiLWq.js","assets/jszip.min-BLhscryn.js","assets/index-BkmGhdSK.js","assets/index-DnMOgZSi.css","assets/types-b19hQvwC.js","assets/parser-DJr_P0bV.js"])))=>i.map(i=>d[i]);
import { u as z, b as K, c as G, d as J, e as Q, r as n, _ as N, j as e, g as L, T as $, __tla as __tla_0 } from "./index-BkmGhdSK.js";
import { S as U } from "./SEOHead-BgJ9AGa-.js";
import { g as X } from "./fileUtils-1h3TEy09.js";
let ae;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function Y(s) {
        const k = /\{\{([^}]+)\}\}/g, r = new Set;
        let l;
        for(; (l = k.exec(s)) !== null;)r.add(l[1].trim());
        return Array.from(r).map((h)=>({
                key: h,
                label: h,
                type: h.length > 20 ? "textarea" : "text",
                placeholder: ""
            }));
    }
    ae = ()=>{
        const { t: s, language: k } = z(), { user: r } = K(), { showToast: l } = G(), h = J(), [O] = Q(), d = k === "ko", x = O.get("edit"), p = !!x, [v, g] = n.useState(p ? 2 : 1), [m, _] = n.useState(""), [S, F] = n.useState(""), [c, j] = n.useState(""), [H, w] = n.useState(!1), [A, M] = n.useState(!1), [I, C] = n.useState(!1), [R, E] = n.useState(!1);
        n.useEffect(()=>{
            if (!x || !r) return;
            E(!0), (async ()=>{
                const a = L();
                if (!a) {
                    E(!1);
                    return;
                }
                const { data: i, error: f } = await a.from($.templates).select("*").eq("id", x).eq("user_id", r.id).single();
                !f && i && (_(i.title || ""), F(i.description || ""), j(i.content || ""), g(2)), E(!1);
            })();
        }, [
            x,
            r
        ]);
        const o = n.useMemo(()=>Y(c), [
            c
        ]), [y, b] = n.useState({}), V = n.useMemo(()=>{
            let t = c;
            for (const a of o){
                const i = y[a.key] || `{{${a.key}}}`;
                t = t.replace(new RegExp(`\\{\\{${a.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g"), i);
            }
            return t;
        }, [
            c,
            o,
            y
        ]), P = n.useCallback(async (t)=>{
            const a = X(t.name);
            if (!(a !== "hwp" && a !== "hwpx")) {
                M(!0);
                try {
                    if (a === "hwpx") {
                        const { parseHwpx: i } = await N(async ()=>{
                            const { parseHwpx: u } = await import("./parser-DJPyiLWq.js");
                            return {
                                parseHwpx: u
                            };
                        }, __vite__mapDeps([0,1,2,3,4])), f = await t.arrayBuffer(), T = await i(f), { irToMarkdown: D } = await N(async ()=>{
                            const { irToMarkdown: u } = await import("./toMarkdown-CeTF6k-c.js");
                            return {
                                irToMarkdown: u
                            };
                        }, []);
                        j(D(T));
                    } else {
                        const { parseHwp: i } = await N(async ()=>{
                            const { parseHwp: u } = await import("./parser-DJr_P0bV.js");
                            return {
                                parseHwp: u
                            };
                        }, __vite__mapDeps([5,4])), f = await t.arrayBuffer(), T = await i(f), { irToMarkdown: D } = await N(async ()=>{
                            const { irToMarkdown: u } = await import("./toMarkdown-CeTF6k-c.js");
                            return {
                                irToMarkdown: u
                            };
                        }, []);
                        j(D(T));
                    }
                    m || _(t.name.replace(/\.(hwp|hwpx)$/i, "")), g(2);
                } catch (i) {
                    console.error("Parse error:", i), l(i.message || (d ? "변환 중 오류가 발생했습니다" : "Conversion error"), "error");
                } finally{
                    M(!1);
                }
            }
        }, [
            m,
            l,
            d
        ]), B = (t)=>{
            t.preventDefault(), C(!1), t.dataTransfer.files.length > 0 && P(t.dataTransfer.files[0]);
        }, W = ()=>{
            const t = document.createElement("input");
            t.type = "file", t.accept = ".hwp,.hwpx", t.onchange = ()=>{
                t.files && t.files.length > 0 && P(t.files[0]);
            }, t.click();
        }, q = async ()=>{
            if (!m.trim() || !c.trim() || !r) return;
            w(!0);
            const t = L();
            if (!t) {
                w(!1);
                return;
            }
            if (p && x) {
                const { error: a } = await t.from($.templates).update({
                    title: m.trim(),
                    description: S.trim(),
                    content: c,
                    fields: o,
                    updated_at: new Date().toISOString()
                }).eq("id", x).eq("user_id", r.id);
                w(!1), a ? l(a.message, "error") : (l(d ? "템플릿이 수정되었습니다" : "Template updated", "success"), h("/templates"));
            } else {
                const { error: a } = await t.from($.templates).insert({
                    user_id: r.id,
                    title: m.trim(),
                    description: S.trim(),
                    content: c,
                    fields: o
                });
                w(!1), a ? l(a.message, "error") : (l(s("site.templates.saved"), "success"), h("/templates"));
            }
        };
        return R ? e.jsx("section", {
            className: "section",
            children: e.jsx("div", {
                className: "container",
                style: {
                    display: "flex",
                    justifyContent: "center",
                    padding: "80px 0"
                },
                children: e.jsx("div", {
                    className: "loading-spinner"
                })
            })
        }) : e.jsxs(e.Fragment, {
            children: [
                e.jsx(U, {
                    title: p ? d ? "템플릿 편집" : "Edit Template" : s("site.templates.create"),
                    path: "/templates/new"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: p ? d ? "템플릿 편집" : "Edit Template" : s("site.templates.create")
                            }),
                            e.jsx("p", {
                                children: s("site.templates.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section",
                    children: e.jsxs("div", {
                        className: "container template-create",
                        children: [
                            e.jsx("div", {
                                className: "template-steps",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((t)=>e.jsxs("div", {
                                        className: `template-step ${v === t ? "active" : ""} ${v > t ? "completed" : ""}`,
                                        children: [
                                            e.jsx("span", {
                                                className: "template-step-num",
                                                children: v > t ? "✓" : t
                                            }),
                                            s(`site.templates.step${t}`)
                                        ]
                                    }, t))
                            }),
                            v === 1 && !p && (A ? e.jsxs("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "60px 0"
                                },
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        style: {
                                            marginTop: "16px",
                                            color: "var(--text-secondary)"
                                        },
                                        children: d ? "변환 중..." : "Converting..."
                                    })
                                ]
                            }) : e.jsxs("div", {
                                className: "source-cards",
                                children: [
                                    e.jsxs("div", {
                                        className: `source-card ${I ? "drag-over" : ""}`,
                                        onClick: W,
                                        onDragOver: (t)=>{
                                            t.preventDefault(), C(!0);
                                        },
                                        onDragLeave: ()=>C(!1),
                                        onDrop: B,
                                        children: [
                                            e.jsxs("svg", {
                                                className: "source-card-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: [
                                                    e.jsx("path", {
                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                    }),
                                                    e.jsx("polyline", {
                                                        points: "17 8 12 3 7 8"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "12",
                                                        y1: "3",
                                                        x2: "12",
                                                        y2: "15"
                                                    })
                                                ]
                                            }),
                                            e.jsx("h3", {
                                                children: s("site.templates.upload")
                                            }),
                                            e.jsx("p", {
                                                children: s("site.templates.uploadHint")
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "source-card",
                                        onClick: ()=>g(2),
                                        children: [
                                            e.jsxs("svg", {
                                                className: "source-card-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: [
                                                    e.jsx("path", {
                                                        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    })
                                                ]
                                            }),
                                            e.jsx("h3", {
                                                children: s("site.templates.write")
                                            }),
                                            e.jsx("p", {
                                                children: s("site.templates.writeHint")
                                            })
                                        ]
                                    })
                                ]
                            })),
                            v === 2 && e.jsxs("div", {
                                className: "template-edit-section",
                                children: [
                                    e.jsx("input", {
                                        className: "template-title-input",
                                        type: "text",
                                        value: m,
                                        onChange: (t)=>_(t.target.value),
                                        placeholder: s("site.templates.titlePlaceholder")
                                    }),
                                    e.jsx("input", {
                                        className: "template-desc-input",
                                        type: "text",
                                        value: S,
                                        onChange: (t)=>F(t.target.value),
                                        placeholder: s("site.templates.descPlaceholder")
                                    }),
                                    e.jsx("div", {
                                        className: "template-field-hint",
                                        children: s("site.templates.fieldHint")
                                    }),
                                    e.jsx("textarea", {
                                        className: "template-content-editor",
                                        value: c,
                                        onChange: (t)=>j(t.target.value),
                                        placeholder: d ? `마크다운으로 템플릿을 작성하세요...

예시:
# {{회사명}} 계약서

계약일: {{계약일}}
내용: {{계약내용}}` : `Write your template in Markdown...

Example:
# {{company}} Contract

Date: {{date}}
Content: {{content}}`
                                    }),
                                    e.jsxs("div", {
                                        className: "detected-fields",
                                        children: [
                                            e.jsxs("div", {
                                                className: "detected-fields-title",
                                                children: [
                                                    s("site.templates.detectedFields"),
                                                    " (",
                                                    o.length,
                                                    ")"
                                                ]
                                            }),
                                            o.length > 0 ? e.jsx("div", {
                                                className: "detected-fields-list",
                                                children: o.map((t)=>e.jsx("span", {
                                                        className: "detected-field-tag",
                                                        children: `{{${t.key}}}`
                                                    }, t.key))
                                            }) : e.jsx("div", {
                                                className: "detected-fields-empty",
                                                children: s("site.templates.noFields")
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "template-step-actions",
                                        children: [
                                            !p && e.jsx("button", {
                                                className: "editor-btn",
                                                onClick: ()=>{
                                                    g(1);
                                                },
                                                children: s("site.templates.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "editor-btn primary",
                                                onClick: ()=>{
                                                    b({}), g(3);
                                                },
                                                disabled: !m.trim() || !c.trim(),
                                                children: s("site.templates.next")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            v === 3 && e.jsxs("div", {
                                className: "template-edit-section",
                                children: [
                                    o.length > 0 && e.jsxs(e.Fragment, {
                                        children: [
                                            e.jsx("h3", {
                                                style: {
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    margin: 0
                                                },
                                                children: s("site.templates.detectedFields")
                                            }),
                                            e.jsx("div", {
                                                className: "template-fields",
                                                children: o.map((t)=>e.jsxs("div", {
                                                        className: "template-field",
                                                        children: [
                                                            e.jsx("label", {
                                                                children: t.label
                                                            }),
                                                            t.type === "textarea" ? e.jsx("textarea", {
                                                                value: y[t.key] || "",
                                                                onChange: (a)=>b((i)=>({
                                                                            ...i,
                                                                            [t.key]: a.target.value
                                                                        })),
                                                                placeholder: `{{${t.key}}}`,
                                                                rows: 3
                                                            }) : e.jsx("input", {
                                                                type: "text",
                                                                value: y[t.key] || "",
                                                                onChange: (a)=>b((i)=>({
                                                                            ...i,
                                                                            [t.key]: a.target.value
                                                                        })),
                                                                placeholder: `{{${t.key}}}`
                                                            })
                                                        ]
                                                    }, t.key))
                                            })
                                        ]
                                    }),
                                    e.jsx("h3", {
                                        style: {
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            margin: 0
                                        },
                                        children: s("site.templates.preview")
                                    }),
                                    e.jsx("div", {
                                        className: "template-preview-box",
                                        children: V
                                    }),
                                    e.jsxs("div", {
                                        className: "template-step-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "editor-btn",
                                                onClick: ()=>g(2),
                                                children: s("site.templates.prev")
                                            }),
                                            e.jsx("button", {
                                                className: "editor-btn primary",
                                                onClick: q,
                                                disabled: H,
                                                children: H ? "..." : p ? d ? "수정 저장" : "Save Changes" : s("site.templates.save")
                                            })
                                        ]
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
export { ae as default, __tla };
