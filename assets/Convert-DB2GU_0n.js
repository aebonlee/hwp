const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BEV9Kba7.js","assets/jszip.min-CLDqg0mI.js","assets/index-Dsgd-0r-.js","assets/index-DnMOgZSi.css","assets/parser-DJr_P0bV.js","assets/types-b19hQvwC.js"])))=>i.map(i=>d[i]);
import { u as V, r as l, _ as k, j as e, g as F, __tla as __tla_0 } from "./index-Dsgd-0r-.js";
import { S as U } from "./SEOHead-BQASjo3X.js";
import { g as X, f as q } from "./fileUtils-1h3TEy09.js";
let se;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const G = [
        "hwp",
        "hwpx",
        "docx",
        "xlsx",
        "hwp3",
        "hwpml"
    ];
    function J(t) {
        return G.includes(t);
    }
    se = ()=>{
        const { t } = V(), [w, r] = l.useState("upload"), [C, _] = l.useState(!1), [f, D] = l.useState(null), [u, v] = l.useState(""), [Q, j] = l.useState(null), [g, y] = l.useState("source"), [L, H] = l.useState(!1), [R, b] = l.useState(""), [T, S] = l.useState(""), [N, M] = l.useState(!1), [I, E] = l.useState(""), $ = l.useCallback(async (o)=>{
            const n = X(o.name);
            if (!J(n)) {
                b("지원하지 않는 파일 형식입니다. (.hwp, .hwpx, .docx, .xlsx, .hwp3 지원)");
                return;
            }
            D(o), b(""), r("converting");
            try {
                const a = await o.arrayBuffer();
                if (n === "hwpx") {
                    const { parseHwpxDocument: d, blocksToMarkdown: i, kordocToHwpIR: p } = await k(async ()=>{
                        const { parseHwpxDocument: h, blocksToMarkdown: x, kordocToHwpIR: m } = await import("./index-BEV9Kba7.js");
                        return {
                            parseHwpxDocument: h,
                            blocksToMarkdown: x,
                            kordocToHwpIR: m
                        };
                    }, __vite__mapDeps([0,1,2,3])), s = await d(a), c = s.markdown || i(s.blocks);
                    j(p(s.blocks, s.metadata)), v(c);
                } else if (n === "docx") {
                    const { parseDocxDocument: d, blocksToMarkdown: i, kordocToHwpIR: p } = await k(async ()=>{
                        const { parseDocxDocument: h, blocksToMarkdown: x, kordocToHwpIR: m } = await import("./index-BEV9Kba7.js");
                        return {
                            parseDocxDocument: h,
                            blocksToMarkdown: x,
                            kordocToHwpIR: m
                        };
                    }, __vite__mapDeps([0,1,2,3])), s = await d(a), c = s.markdown || i(s.blocks);
                    j(p(s.blocks, s.metadata)), v(c);
                } else if (n === "xlsx") {
                    const { parseXlsxDocument: d, blocksToMarkdown: i, kordocToHwpIR: p } = await k(async ()=>{
                        const { parseXlsxDocument: h, blocksToMarkdown: x, kordocToHwpIR: m } = await import("./index-BEV9Kba7.js");
                        return {
                            parseXlsxDocument: h,
                            blocksToMarkdown: x,
                            kordocToHwpIR: m
                        };
                    }, __vite__mapDeps([0,1,2,3])), s = await d(a), c = s.markdown || i(s.blocks);
                    j(p(s.blocks, s.metadata)), v(c);
                } else if (n === "hwp3") {
                    const { parseHwp3Document: d, blocksToMarkdown: i, kordocToHwpIR: p } = await k(async ()=>{
                        const { parseHwp3Document: h, blocksToMarkdown: x, kordocToHwpIR: m } = await import("./index-BEV9Kba7.js");
                        return {
                            parseHwp3Document: h,
                            blocksToMarkdown: x,
                            kordocToHwpIR: m
                        };
                    }, __vite__mapDeps([0,1,2,3])), s = d(a), c = s.markdown || i(s.blocks);
                    j(p(s.blocks, s.metadata)), v(c);
                } else if (n === "hwpml") {
                    const { parseHwpmlDocument: d, blocksToMarkdown: i, kordocToHwpIR: p } = await k(async ()=>{
                        const { parseHwpmlDocument: h, blocksToMarkdown: x, kordocToHwpIR: m } = await import("./index-BEV9Kba7.js");
                        return {
                            parseHwpmlDocument: h,
                            blocksToMarkdown: x,
                            kordocToHwpIR: m
                        };
                    }, __vite__mapDeps([0,1,2,3])), s = d(a), c = s.markdown || i(s.blocks);
                    j(p(s.blocks, s.metadata)), v(c);
                } else {
                    const { parseHwp: d } = await k(async ()=>{
                        const { parseHwp: c } = await import("./parser-DJr_P0bV.js");
                        return {
                            parseHwp: c
                        };
                    }, __vite__mapDeps([4,5])), i = await d(a);
                    j(i);
                    const { irToMarkdown: p } = await k(async ()=>{
                        const { irToMarkdown: c } = await import("./toMarkdown-CeTF6k-c.js");
                        return {
                            irToMarkdown: c
                        };
                    }, []), s = p(i);
                    v(s);
                }
                r("done");
            } catch (a) {
                b(a.message || "변환 중 오류가 발생했습니다."), r("upload");
            }
        }, []), O = (o)=>{
            o.preventDefault(), _(!1);
            const n = o.dataTransfer.files;
            n.length > 0 && $(n[0]);
        }, A = ()=>{
            const o = document.createElement("input");
            o.type = "file", o.accept = ".hwp,.hwpx,.docx,.xlsx,.hwp3,.hwpml", o.onchange = ()=>{
                o.files && o.files.length > 0 && $(o.files[0]);
            }, o.click();
        }, B = async ()=>{
            await navigator.clipboard.writeText(u), H(!0), setTimeout(()=>H(!1), 2e3);
        }, P = ()=>{
            const o = new Blob([
                u
            ], {
                type: "text/markdown"
            }), n = URL.createObjectURL(o), a = document.createElement("a");
            a.href = n, a.download = (f?.name.replace(/\.(hwp|hwpx|docx|xlsx|hwp3|hwpml)$/i, "") || "document") + ".md", a.click(), URL.revokeObjectURL(n);
        }, W = async ()=>{
            if (!(T || N)) {
                M(!0), E("");
                try {
                    const o = F();
                    if (!o) throw new Error("Supabase not configured");
                    const { data: n, error: a } = await o.functions.invoke("enhance-markdown", {
                        body: {
                            markdown: u
                        }
                    });
                    if (a) throw a;
                    S(n?.enhanced || n?.markdown || u);
                } catch  {
                    E(t("site.convert.aiNotAvailable"));
                } finally{
                    M(!1);
                }
            }
        }, z = ()=>{
            r("upload"), D(null), v(""), j(null), b(""), S(""), E("");
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(U, {
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
                            R && e.jsxs("div", {
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
                                    R
                                ]
                            }),
                            w === "upload" && e.jsxs("div", {
                                className: `dropzone ${C ? "drag-over" : ""}`,
                                onDragOver: (o)=>{
                                    o.preventDefault(), _(!0);
                                },
                                onDragLeave: ()=>_(!1),
                                onDrop: O,
                                onClick: A,
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
                                        children: ".hwp, .hwpx, .docx, .xlsx, .hwp3, .hwpml"
                                    })
                                ]
                            }),
                            w === "converting" && e.jsxs("div", {
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
                            w === "done" && e.jsxs("div", {
                                className: "conversion-result",
                                children: [
                                    f && e.jsxs("div", {
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
                                                        children: f.name
                                                    }),
                                                    e.jsx("div", {
                                                        className: "file-info-size",
                                                        children: q(f.size)
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
                                                        className: `result-tab ${g === "source" ? "active" : ""}`,
                                                        onClick: ()=>y("source"),
                                                        children: t("site.convert.source")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ${g === "preview" ? "active" : ""}`,
                                                        onClick: ()=>y("preview"),
                                                        children: t("site.convert.preview")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ai-tab ${g === "ai" ? "active" : ""}`,
                                                        onClick: ()=>{
                                                            y("ai"), W();
                                                        },
                                                        children: t(N ? "site.convert.aiEnhancing" : "site.convert.aiEnhance")
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "result-actions",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: B,
                                                        children: t(L ? "site.convert.copied" : "site.convert.copy")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: P,
                                                        children: t("site.convert.download")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: z,
                                                        children: t("site.convert.newConversion")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "result-content",
                                        children: g === "source" ? e.jsx("pre", {
                                            children: u
                                        }) : g === "preview" ? e.jsx("div", {
                                            className: "result-preview",
                                            dangerouslySetInnerHTML: {
                                                __html: K(u)
                                            }
                                        }) : e.jsxs("div", {
                                            className: "ai-enhance-content",
                                            children: [
                                                N && e.jsxs("div", {
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
                                                I && e.jsxs("div", {
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
                                                            children: I
                                                        })
                                                    ]
                                                }),
                                                T && !N && e.jsxs("div", {
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
                                                                    children: u
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
                                                                    children: T
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
    function K(t) {
        let w = t.replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>").replace(/^- (.+)$/gm, "<li>$1</li>").replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
        return w = w.split(`

`).map((r)=>(r = r.trim(), r ? r.startsWith("<h") || r.startsWith("<li") || r.startsWith("<table") ? r : `<p>${r}</p>` : "")).join(`
`), w;
    }
});
export { se as default, __tla };
