const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BEV9Kba7.js","assets/jszip.min-CLDqg0mI.js","assets/index-Dsgd-0r-.js","assets/index-DnMOgZSi.css","assets/parser-DJr_P0bV.js","assets/types-b19hQvwC.js"])))=>i.map(i=>d[i]);
import { u as I, r as t, _ as b, j as e, g as W, __tla as __tla_0 } from "./index-Dsgd-0r-.js";
import { S as X } from "./SEOHead-BQASjo3X.js";
import { g as O, f as q } from "./fileUtils-1h3TEy09.js";
let Q;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    Q = ()=>{
        const { t: a } = I(), [p, d] = t.useState("upload"), [R, z] = t.useState(!1), [h, C] = t.useState(null), [o, _] = t.useState(""), [m, D] = t.useState(""), [E, l] = t.useState(""), [x, f] = t.useState("moderate"), [v, k] = t.useState("formal"), [F, S] = t.useState(!1), [w, H] = t.useState("side-by-side"), L = t.useCallback(async (s)=>{
            const n = O(s.name), i = await s.arrayBuffer();
            if (n === "md" || n === "txt") return new TextDecoder("utf-8").decode(i);
            const { parseHwpxDocument: c, parseDocxDocument: u, blocksToMarkdown: j } = await b(async ()=>{
                const { parseHwpxDocument: r, parseDocxDocument: g, blocksToMarkdown: N } = await import("./index-BEV9Kba7.js");
                return {
                    parseHwpxDocument: r,
                    parseDocxDocument: g,
                    blocksToMarkdown: N
                };
            }, __vite__mapDeps([0,1,2,3]));
            if (n === "hwpx") {
                const r = await c(i);
                return r.markdown || j(r.blocks);
            } else if (n === "docx") {
                const r = await u(i);
                return r.markdown || j(r.blocks);
            } else if (n === "hwp") {
                const { parseHwp: r } = await b(async ()=>{
                    const { parseHwp: y } = await import("./parser-DJr_P0bV.js");
                    return {
                        parseHwp: y
                    };
                }, __vite__mapDeps([4,5])), g = await r(i), { irToMarkdown: N } = await b(async ()=>{
                    const { irToMarkdown: y } = await import("./toMarkdown-CeTF6k-c.js");
                    return {
                        irToMarkdown: y
                    };
                }, []);
                return N(g);
            }
            throw new Error("지원하지 않는 파일 형식입니다.");
        }, []), M = t.useCallback(async (s)=>{
            const n = O(s.name);
            if (![
                "hwp",
                "hwpx",
                "docx",
                "md",
                "txt"
            ].includes(n)) {
                l("지원 포맷: .hwpx, .docx, .hwp, .md, .txt");
                return;
            }
            C(s), l("");
            try {
                const c = await L(s);
                _(c), d("preview");
            } catch (c) {
                l(c.message || "파일 파싱 중 오류가 발생했습니다.");
            }
        }, [
            L
        ]), U = (s)=>{
            s.preventDefault(), z(!1);
            const n = s.dataTransfer.files;
            n.length > 0 && M(n[0]);
        }, B = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwpx,.docx,.hwp,.md,.txt", s.onchange = ()=>{
                s.files && s.files.length > 0 && M(s.files[0]);
            }, s.click();
        }, P = async ()=>{
            d("processing"), l("");
            try {
                const s = W();
                if (!s) throw new Error("Supabase not configured");
                const { data: n, error: i } = await s.functions.invoke("humanize-document", {
                    body: {
                        markdown: o,
                        intensity: x,
                        tone: v
                    }
                });
                if (i) throw i;
                D(n?.humanized || n?.markdown || o), d("done");
            } catch  {
                l(a("site.humanize.serviceUnavailable")), d("preview");
            }
        }, A = async ()=>{
            await navigator.clipboard.writeText(m), S(!0), setTimeout(()=>S(!1), 2e3);
        }, V = ()=>{
            const s = new Blob([
                m
            ], {
                type: "text/markdown"
            }), n = URL.createObjectURL(s), i = document.createElement("a");
            i.href = n, i.download = (h?.name.replace(/\.[^.]+$/, "") || "humanized") + ".md", i.click(), URL.revokeObjectURL(n);
        }, $ = async ()=>{
            try {
                const { markdownToHwpx: s } = await b(async ()=>{
                    const { markdownToHwpx: j } = await import("./index-BEV9Kba7.js");
                    return {
                        markdownToHwpx: j
                    };
                }, __vite__mapDeps([0,1,2,3])), n = await s(m), i = new Blob([
                    n
                ], {
                    type: "application/hwp+zip"
                }), c = URL.createObjectURL(i), u = document.createElement("a");
                u.href = c, u.download = (h?.name.replace(/\.[^.]+$/, "") || "humanized") + ".hwpx", u.click(), URL.revokeObjectURL(c);
            } catch (s) {
                console.error("HWPX export error:", s);
            }
        }, T = ()=>{
            d("upload"), C(null), _(""), D(""), l("");
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(X, {
                    title: a("site.humanize.title"),
                    path: "/humanize"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: a("site.humanize.title")
                            }),
                            e.jsx("p", {
                                children: a("site.humanize.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section humanize-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            E && e.jsxs("div", {
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
                                    E
                                ]
                            }),
                            p === "upload" && e.jsxs("div", {
                                className: `dropzone ${R ? "drag-over" : ""}`,
                                onDragOver: (s)=>{
                                    s.preventDefault(), z(!0);
                                },
                                onDragLeave: ()=>z(!1),
                                onDrop: U,
                                onClick: B,
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
                                        children: a("site.humanize.dropzone")
                                    }),
                                    e.jsx("p", {
                                        children: ".hwpx, .docx, .hwp, .md, .txt"
                                    })
                                ]
                            }),
                            p === "preview" && e.jsxs("div", {
                                className: "humanize-preview",
                                children: [
                                    h && e.jsxs("div", {
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
                                                        children: h.name
                                                    }),
                                                    e.jsx("div", {
                                                        className: "file-info-size",
                                                        children: q(h.size)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "humanize-options",
                                        children: [
                                            e.jsxs("div", {
                                                className: "option-group",
                                                children: [
                                                    e.jsx("label", {
                                                        children: a("site.humanize.intensity")
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "option-buttons",
                                                        children: [
                                                            e.jsx("button", {
                                                                className: x === "light" ? "active" : "",
                                                                onClick: ()=>f("light"),
                                                                children: a("site.humanize.intensityLight")
                                                            }),
                                                            e.jsx("button", {
                                                                className: x === "moderate" ? "active" : "",
                                                                onClick: ()=>f("moderate"),
                                                                children: a("site.humanize.intensityModerate")
                                                            }),
                                                            e.jsx("button", {
                                                                className: x === "aggressive" ? "active" : "",
                                                                onClick: ()=>f("aggressive"),
                                                                children: a("site.humanize.intensityAggressive")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "option-group",
                                                children: [
                                                    e.jsx("label", {
                                                        children: a("site.humanize.tone")
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "option-buttons",
                                                        children: [
                                                            e.jsx("button", {
                                                                className: v === "formal" ? "active" : "",
                                                                onClick: ()=>k("formal"),
                                                                children: a("site.humanize.toneFormal")
                                                            }),
                                                            e.jsx("button", {
                                                                className: v === "casual" ? "active" : "",
                                                                onClick: ()=>k("casual"),
                                                                children: a("site.humanize.toneCasual")
                                                            }),
                                                            e.jsx("button", {
                                                                className: v === "academic" ? "active" : "",
                                                                onClick: ()=>k("academic"),
                                                                children: a("site.humanize.toneAcademic")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "humanize-source-preview",
                                        children: [
                                            e.jsxs("div", {
                                                className: "preview-header",
                                                children: [
                                                    e.jsx("span", {
                                                        children: a("site.humanize.originalPreview")
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "preview-lines",
                                                        children: [
                                                            o.split(`
`).length,
                                                            " lines"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsxs("pre", {
                                                className: "humanize-pre",
                                                children: [
                                                    o.slice(0, 3e3),
                                                    o.length > 3e3 ? `
...` : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "humanize-actions",
                                        children: [
                                            e.jsx("button", {
                                                className: "btn-secondary",
                                                onClick: T,
                                                children: a("site.humanize.back")
                                            }),
                                            e.jsx("button", {
                                                className: "btn-primary",
                                                onClick: P,
                                                children: a("site.humanize.startConvert")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            p === "processing" && e.jsxs("div", {
                                className: "humanize-processing",
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        children: a("site.humanize.processing")
                                    })
                                ]
                            }),
                            p === "done" && e.jsxs("div", {
                                className: "humanize-result",
                                children: [
                                    e.jsxs("div", {
                                        className: "result-header",
                                        children: [
                                            e.jsxs("div", {
                                                className: "result-tabs",
                                                children: [
                                                    e.jsx("button", {
                                                        className: `result-tab ${w === "side-by-side" ? "active" : ""}`,
                                                        onClick: ()=>H("side-by-side"),
                                                        children: a("site.humanize.compare")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ${w === "result" ? "active" : ""}`,
                                                        onClick: ()=>H("result"),
                                                        children: a("site.humanize.resultOnly")
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "result-actions",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: A,
                                                        children: a(F ? "site.convert.copied" : "site.convert.copy")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: V,
                                                        children: "Markdown"
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: $,
                                                        children: "HWPX"
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: T,
                                                        children: a("site.humanize.newConversion")
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: `humanize-result-content ${w}`,
                                        children: w === "side-by-side" ? e.jsxs(e.Fragment, {
                                            children: [
                                                e.jsxs("div", {
                                                    className: "compare-col",
                                                    children: [
                                                        e.jsx("div", {
                                                            className: "compare-label",
                                                            children: a("site.humanize.original")
                                                        }),
                                                        e.jsx("pre", {
                                                            className: "humanize-pre",
                                                            children: o
                                                        })
                                                    ]
                                                }),
                                                e.jsxs("div", {
                                                    className: "compare-col",
                                                    children: [
                                                        e.jsx("div", {
                                                            className: "compare-label",
                                                            children: a("site.humanize.humanized")
                                                        }),
                                                        e.jsx("pre", {
                                                            className: "humanize-pre",
                                                            children: m
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : e.jsx("pre", {
                                            className: "humanize-pre full",
                                            children: m
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
});
export { Q as default, __tla };
