const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/parser-CTcrG0uq.js","assets/jszip.min-mukrFm0l.js","assets/index-BcN9a2gA.js","assets/index-y1Zlf-dZ.css","assets/types-dbiTllwl.js","assets/parser-RcNDRhfQ.js"])))=>i.map(i=>d[i]);
import { u as R, r as i, _ as m, j as e, g as F, __tla as __tla_0 } from "./index-BcN9a2gA.js";
import { S as I } from "./SEOHead-hGQ78IE-.js";
import { g as V, f as P } from "./fileUtils-1h3TEy09.js";
let Q;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    Q = ()=>{
        const { t } = R(), [o, n] = i.useState("upload"), [D, u] = i.useState(!1), [p, _] = i.useState(null), [c, j] = i.useState(""), [q, w] = i.useState(null), [d, g] = i.useState("source"), [M, E] = i.useState(!1), [S, x] = i.useState(""), [f, $] = i.useState(""), [v, C] = i.useState(!1), [L, N] = i.useState(""), T = i.useCallback(async (s)=>{
            const r = V(s.name);
            if (r !== "hwp" && r !== "hwpx") {
                x(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            _(s), x(""), n("converting");
            try {
                if (r === "hwpx") {
                    const { parseHwpx: a } = await m(async ()=>{
                        const { parseHwpx: l } = await import("./parser-CTcrG0uq.js");
                        return {
                            parseHwpx: l
                        };
                    }, __vite__mapDeps([0,1,2,3,4])), k = await s.arrayBuffer(), h = await a(k);
                    w(h);
                    const { irToMarkdown: y } = await m(async ()=>{
                        const { irToMarkdown: l } = await import("./toMarkdown-CeTF6k-c.js");
                        return {
                            irToMarkdown: l
                        };
                    }, []), b = y(h);
                    j(b);
                } else {
                    const { parseHwp: a } = await m(async ()=>{
                        const { parseHwp: l } = await import("./parser-RcNDRhfQ.js");
                        return {
                            parseHwp: l
                        };
                    }, __vite__mapDeps([5,4])), k = await s.arrayBuffer(), h = await a(k);
                    w(h);
                    const { irToMarkdown: y } = await m(async ()=>{
                        const { irToMarkdown: l } = await import("./toMarkdown-CeTF6k-c.js");
                        return {
                            irToMarkdown: l
                        };
                    }, []), b = y(h);
                    j(b);
                }
                n("done");
            } catch (a) {
                x(a.message || "변환 중 오류가 발생했습니다."), n("upload");
            }
        }, []), B = (s)=>{
            s.preventDefault(), u(!1);
            const r = s.dataTransfer.files;
            r.length > 0 && T(r[0]);
        }, H = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwp,.hwpx", s.onchange = ()=>{
                s.files && s.files.length > 0 && T(s.files[0]);
            }, s.click();
        }, z = async ()=>{
            await navigator.clipboard.writeText(c), E(!0), setTimeout(()=>E(!1), 2e3);
        }, O = ()=>{
            const s = new Blob([
                c
            ], {
                type: "text/markdown"
            }), r = URL.createObjectURL(s), a = document.createElement("a");
            a.href = r, a.download = (p?.name.replace(/\.(hwp|hwpx)$/i, "") || "document") + ".md", a.click(), URL.revokeObjectURL(r);
        }, W = async ()=>{
            if (!(f || v)) {
                C(!0), N("");
                try {
                    const s = F();
                    if (!s) throw new Error("Supabase not configured");
                    const { data: r, error: a } = await s.functions.invoke("enhance-markdown", {
                        body: {
                            markdown: c
                        }
                    });
                    if (a) throw a;
                    $(r?.enhanced || r?.markdown || c);
                } catch  {
                    N(t("site.convert.aiNotAvailable"));
                } finally{
                    C(!1);
                }
            }
        }, A = ()=>{
            n("upload"), _(null), j(""), w(null), x(""), $(""), N("");
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(I, {
                    title: t("site.convert.title"),
                    path: "/convert"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: t("site.convert.title")
                            }),
                            e.jsx("p", {
                                children: t("site.convert.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section convert-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            S && e.jsxs("div", {
                                className: "error-alert",
                                children: [
                                    e.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            e.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }),
                                            e.jsx("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "9",
                                                y2: "15"
                                            }),
                                            e.jsx("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "15",
                                                y2: "15"
                                            })
                                        ]
                                    }),
                                    S
                                ]
                            }),
                            o === "upload" && e.jsxs("div", {
                                className: `dropzone ${D ? "drag-over" : ""}`,
                                onDragOver: (s)=>{
                                    s.preventDefault(), u(!0);
                                },
                                onDragLeave: ()=>u(!1),
                                onDrop: B,
                                onClick: H,
                                children: [
                                    e.jsxs("svg", {
                                        className: "dropzone-icon",
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
                                        children: t("site.convert.dropzone")
                                    }),
                                    e.jsx("p", {
                                        children: t("site.convert.dropzoneHint")
                                    })
                                ]
                            }),
                            o === "converting" && e.jsxs("div", {
                                className: "conversion-progress",
                                children: [
                                    e.jsxs("div", {
                                        className: "progress-steps",
                                        children: [
                                            e.jsxs("div", {
                                                className: "progress-step active",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "step-icon",
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "20",
                                                            height: "20",
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
                                                        })
                                                    }),
                                                    e.jsx("span", {
                                                        className: "step-label",
                                                        children: "파일 읽기"
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "progress-step",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "step-icon",
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "20",
                                                            height: "20",
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
                                                        })
                                                    }),
                                                    e.jsx("span", {
                                                        className: "step-label",
                                                        children: "파싱"
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "progress-step",
                                                children: [
                                                    e.jsx("div", {
                                                        className: "step-icon",
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "20",
                                                            height: "20",
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
                                                        })
                                                    }),
                                                    e.jsx("span", {
                                                        className: "step-label",
                                                        children: "변환"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("p", {
                                        children: t("site.convert.converting")
                                    })
                                ]
                            }),
                            o === "done" && e.jsxs("div", {
                                className: "conversion-result",
                                children: [
                                    p && e.jsxs("div", {
                                        className: "file-info",
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                fill: "none",
                                                stroke: "var(--primary)",
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
                                            e.jsxs("div", {
                                                children: [
                                                    e.jsx("div", {
                                                        className: "file-info-name",
                                                        children: p.name
                                                    }),
                                                    e.jsx("div", {
                                                        className: "file-info-size",
                                                        children: P(p.size)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "result-header",
                                        children: [
                                            e.jsxs("div", {
                                                className: "result-tabs",
                                                children: [
                                                    e.jsx("button", {
                                                        className: `result-tab ${d === "source" ? "active" : ""}`,
                                                        onClick: ()=>g("source"),
                                                        children: t("site.convert.source")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ${d === "preview" ? "active" : ""}`,
                                                        onClick: ()=>g("preview"),
                                                        children: t("site.convert.preview")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ai-tab ${d === "ai" ? "active" : ""}`,
                                                        onClick: ()=>{
                                                            g("ai"), W();
                                                        },
                                                        children: t(v ? "site.convert.aiEnhancing" : "site.convert.aiEnhance")
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "result-actions",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: z,
                                                        children: t(M ? "site.convert.copied" : "site.convert.copy")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: O,
                                                        children: t("site.convert.download")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: A,
                                                        children: t("site.convert.newConversion")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "result-content",
                                        children: d === "source" ? e.jsx("pre", {
                                            children: c
                                        }) : d === "preview" ? e.jsx("div", {
                                            className: "result-preview",
                                            dangerouslySetInnerHTML: {
                                                __html: U(c)
                                            }
                                        }) : e.jsxs("div", {
                                            className: "ai-enhance-content",
                                            children: [
                                                v && e.jsxs("div", {
                                                    className: "ai-loading",
                                                    children: [
                                                        e.jsx("div", {
                                                            className: "loading-spinner"
                                                        }),
                                                        e.jsx("p", {
                                                            children: t("site.convert.aiEnhancing")
                                                        })
                                                    ]
                                                }),
                                                L && e.jsxs("div", {
                                                    className: "ai-notice",
                                                    children: [
                                                        e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "20",
                                                            height: "20",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "12",
                                                                    y1: "16",
                                                                    x2: "12",
                                                                    y2: "12"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "12",
                                                                    y1: "8",
                                                                    x2: "12.01",
                                                                    y2: "8"
                                                                })
                                                            ]
                                                        }),
                                                        e.jsx("p", {
                                                            children: L
                                                        })
                                                    ]
                                                }),
                                                f && !v && e.jsxs("div", {
                                                    className: "ai-compare",
                                                    children: [
                                                        e.jsxs("div", {
                                                            className: "ai-compare-col",
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "ai-compare-label",
                                                                    children: t("site.convert.original")
                                                                }),
                                                                e.jsx("pre", {
                                                                    children: c
                                                                })
                                                            ]
                                                        }),
                                                        e.jsxs("div", {
                                                            className: "ai-compare-col",
                                                            children: [
                                                                e.jsx("div", {
                                                                    className: "ai-compare-label",
                                                                    children: t("site.convert.enhanced")
                                                                }),
                                                                e.jsx("pre", {
                                                                    children: f
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    function U(t) {
        let o = t.replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
        return o = o.split(`

`).map((n)=>(n = n.trim(), n ? n.startsWith("<h") || n.startsWith("<li") || n.startsWith("<table") ? n : `<p>${n}</p>` : "")).join(`
`), o;
    }
});
export { Q as default, __tla };
