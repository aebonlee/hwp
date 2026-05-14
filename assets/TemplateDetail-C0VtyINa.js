const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/generator-56FRFKxg.js","assets/jszip.min-hMq8e4Wj.js","assets/index-Ds74n7JL.js","assets/index-DymPi6cS.css","assets/types-dbiTllwl.js"])))=>i.map(i=>d[i]);
import { f as R, u as M, b as F, c as U, d as W, a as A, r as c, j as e, g as S, T as C, _ as I, __tla as __tla_0 } from "./index-Ds74n7JL.js";
import { S as V } from "./SEOHead-Bs-UI5fS.js";
import { d as E } from "./fileUtils-1h3TEy09.js";
let K;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function X(d) {
        const n = /\{\{([^}]+)\}\}/g, u = new Set;
        let i;
        for(; (i = n.exec(d)) !== null;)u.add(i[1].trim());
        return Array.from(u).map((r)=>({
                key: r,
                label: r,
                type: r.length > 20 ? "textarea" : "text",
                placeholder: ""
            }));
    }
    K = ()=>{
        const { id: d } = R(), { t: n, language: u } = M(), { user: i } = F(), { showToast: r } = U(), y = W(), $ = A(), m = u === "ko", [a, v] = c.useState(null), [T, g] = c.useState(!0), [p, b] = c.useState({}), [k, N] = c.useState(!1), h = $.state?.sample ?? null;
        c.useEffect(()=>{
            if (h) {
                v({
                    id: d || "__sample",
                    user_id: "",
                    title: h.title,
                    description: h.description,
                    content: h.content,
                    fields: h.fields,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }), g(!1);
                return;
            }
            if (!i || !d) {
                g(!1);
                return;
            }
            (async ()=>{
                const s = S();
                if (!s) {
                    g(!1);
                    return;
                }
                const { data: l, error: j } = await s.from(C.templates).select("*").eq("id", d).eq("user_id", i.id).single();
                !j && l && v(l), g(!1);
            })();
        }, [
            i,
            d,
            h
        ]);
        const o = c.useMemo(()=>a ? a.fields?.length ? a.fields : X(a.content) : [], [
            a
        ]), L = c.useMemo(()=>{
            if (!a) return "";
            let t = a.content;
            for (const s of o){
                const l = p[s.key] || `{{${s.key}}}`;
                t = t.replace(new RegExp(`\\{\\{${s.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g"), l);
            }
            return t;
        }, [
            a,
            o,
            p
        ]), x = c.useMemo(()=>{
            if (!a) return "";
            let t = a.content;
            for (const s of o){
                const l = p[s.key] || "";
                t = t.replace(new RegExp(`\\{\\{${s.key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}\\}`, "g"), l);
            }
            return t;
        }, [
            a,
            o,
            p
        ]), H = ()=>{
            y("/md-editor", {
                state: {
                    content: x,
                    title: a?.title || ""
                }
            });
        }, f = async (t)=>{
            N(!1);
            const s = a?.title || "document";
            if (t === "md") E(x, `${s}.md`, "text/markdown");
            else if (t === "html") {
                const l = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>${s}</title>
<style>body{font-family:'Malgun Gothic',sans-serif;max-width:800px;margin:40px auto;padding:0 20px;line-height:1.8;color:#333}
h1{border-bottom:2px solid #333;padding-bottom:8px}h2{color:#0046C8;margin-top:32px}
table{border-collapse:collapse;width:100%;margin:16px 0}th,td{border:1px solid #ddd;padding:8px 12px;text-align:left}
th{background:#f5f5f5}</style></head><body><pre style="white-space:pre-wrap;font-family:inherit">${x}</pre></body></html>`;
                E(l, `${s}.html`, "text/html");
            } else try {
                const { generateHwpx: l } = await I(async ()=>{
                    const { generateHwpx: P } = await import("./generator-56FRFKxg.js");
                    return {
                        generateHwpx: P
                    };
                }, __vite__mapDeps([0,1,2,3,4])), j = await l(x, s), _ = URL.createObjectURL(j), w = document.createElement("a");
                w.href = _, w.download = `${s}.hwpx`, w.click(), URL.revokeObjectURL(_), r(m ? "HWPX 파일이 다운로드되었습니다" : "HWPX file downloaded", "success");
            } catch (l) {
                console.error("HWPX export error:", l), r(l.message || "HWPX export failed", "error");
            }
        }, D = async ()=>{
            if (!i) {
                r(m ? "로그인이 필요합니다" : "Login required", "warning");
                return;
            }
            const t = S();
            if (!t) return;
            const { error: s } = await t.from(C.documents).insert({
                user_id: i.id,
                title: a?.title || "Untitled",
                content: x,
                template_id: a?.id?.startsWith("__sample") ? null : a?.id
            });
            s ? r(s.message, "error") : r(m ? "문서함에 저장했습니다" : "Saved to Documents", "success");
        };
        if (T) return e.jsx("section", {
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
        });
        if (!a) return e.jsx("section", {
            className: "section",
            children: e.jsxs("div", {
                className: "container",
                style: {
                    textAlign: "center",
                    padding: "80px 0"
                },
                children: [
                    e.jsx("h2", {
                        children: n("site.templates.notFound")
                    }),
                    e.jsx("button", {
                        className: "editor-btn",
                        onClick: ()=>y("/templates"),
                        style: {
                            marginTop: 16
                        },
                        children: m ? "템플릿 목록" : "Template List"
                    })
                ]
            })
        });
        const O = o.filter((t)=>p[t.key]?.trim()).length;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(V, {
                    title: a.title,
                    path: `/templates/${d}`
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: a.title
                            }),
                            a.description && e.jsx("p", {
                                children: a.description
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section",
                    children: e.jsxs("div", {
                        className: "container template-detail",
                        children: [
                            o.length > 0 && e.jsxs("div", {
                                className: "template-detail-fields",
                                children: [
                                    e.jsxs("div", {
                                        className: "template-detail-fields-header",
                                        children: [
                                            e.jsxs("h3", {
                                                children: [
                                                    n("site.templates.detectedFields"),
                                                    " (",
                                                    o.length,
                                                    ")"
                                                ]
                                            }),
                                            e.jsxs("span", {
                                                className: "template-detail-progress",
                                                children: [
                                                    O,
                                                    "/",
                                                    o.length,
                                                    " ",
                                                    m ? "입력됨" : "filled"
                                                ]
                                            })
                                        ]
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
                                                        value: p[t.key] || "",
                                                        onChange: (s)=>b((l)=>({
                                                                    ...l,
                                                                    [t.key]: s.target.value
                                                                })),
                                                        placeholder: t.placeholder || `{{${t.key}}}`,
                                                        rows: 3
                                                    }) : e.jsx("input", {
                                                        type: "text",
                                                        value: p[t.key] || "",
                                                        onChange: (s)=>b((l)=>({
                                                                    ...l,
                                                                    [t.key]: s.target.value
                                                                })),
                                                        placeholder: t.placeholder || `{{${t.key}}}`
                                                    })
                                                ]
                                            }, t.key))
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "template-detail-preview",
                                children: [
                                    e.jsx("h3", {
                                        children: n("site.templates.preview")
                                    }),
                                    e.jsx("div", {
                                        className: "template-preview-box",
                                        children: L
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "template-detail-actions",
                                children: [
                                    e.jsx("button", {
                                        className: "editor-btn primary",
                                        onClick: H,
                                        children: n("site.templates.openInEditor")
                                    }),
                                    i && e.jsxs("button", {
                                        className: "editor-btn",
                                        onClick: D,
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "16",
                                                height: "16",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("path", {
                                                        d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                                                    }),
                                                    e.jsx("polyline", {
                                                        points: "17 21 17 13 7 13 7 21"
                                                    })
                                                ]
                                            }),
                                            m ? "문서함에 저장" : "Save to Documents"
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "template-export-wrapper",
                                        children: [
                                            e.jsxs("button", {
                                                className: "editor-btn",
                                                onClick: ()=>N(!k),
                                                children: [
                                                    n("site.templates.export"),
                                                    " ▾"
                                                ]
                                            }),
                                            k && e.jsxs("div", {
                                                className: "template-export-dropdown",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: ()=>f("md"),
                                                        children: n("site.templates.exportMd")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: ()=>f("hwpx"),
                                                        children: n("site.templates.exportHwpx")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: ()=>f("html"),
                                                        children: "HTML (.html)"
                                                    })
                                                ]
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
export { K as default, __tla };
