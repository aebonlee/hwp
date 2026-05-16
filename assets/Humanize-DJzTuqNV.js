const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D7FnE-Ia.js","assets/jszip.min-BK2vI6Md.js","assets/index-BT8N0-UK.js","assets/index-Bm2LAQN6.css","assets/parser-DJr_P0bV.js","assets/types-b19hQvwC.js"])))=>i.map(i=>d[i]);
import { u as X, r as i, _ as b, j as e, g as q, __tla as __tla_0 } from "./index-BT8N0-UK.js";
import { S as G } from "./SEOHead-BkixELSI.js";
import { g as O, f as J } from "./fileUtils-1h3TEy09.js";
let ee;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function P(a) {
        return a.split(/\n\s*\n/).map((o)=>o.trim()).filter(Boolean);
    }
    function K(a, o) {
        const d = P(a), w = P(o), p = [], h = Math.max(d.length, w.length);
        for(let u = 0; u < h; u++){
            const r = d[u] ?? "", x = w[u] ?? "";
            let c;
            r && x ? c = r === x ? "same" : "changed" : r ? c = "removed" : c = "added", p.push({
                left: r,
                right: x,
                status: c
            });
        }
        return p;
    }
    ee = ()=>{
        const { t: a } = X(), [o, d] = i.useState("upload"), [w, p] = i.useState(!1), [h, u] = i.useState(null), [r, x] = i.useState(""), [c, E] = i.useState(""), [S, v] = i.useState(""), [g, k] = i.useState("moderate"), [f, y] = i.useState("formal"), [B, M] = i.useState(!1), [z, R] = i.useState("side-by-side"), U = i.useMemo(()=>o === "done" ? K(r, c) : [], [
            o,
            r,
            c
        ]), H = i.useCallback(async (s)=>{
            const n = O(s.name), t = await s.arrayBuffer();
            if (n === "md" || n === "txt") return new TextDecoder("utf-8").decode(t);
            const { parseHwpxDocument: m, parseDocxDocument: j, blocksToMarkdown: N } = await b(async ()=>{
                const { parseHwpxDocument: l, parseDocxDocument: C, blocksToMarkdown: _ } = await import("./index-D7FnE-Ia.js");
                return {
                    parseHwpxDocument: l,
                    parseDocxDocument: C,
                    blocksToMarkdown: _
                };
            }, __vite__mapDeps([0,1,2,3]));
            if (n === "hwpx") {
                const l = await m(t);
                return l.markdown || N(l.blocks);
            } else if (n === "docx") {
                const l = await j(t);
                return l.markdown || N(l.blocks);
            } else if (n === "hwp") {
                const { parseHwp: l } = await b(async ()=>{
                    const { parseHwp: D } = await import("./parser-DJr_P0bV.js");
                    return {
                        parseHwp: D
                    };
                }, __vite__mapDeps([4,5])), C = await l(t), { irToMarkdown: _ } = await b(async ()=>{
                    const { irToMarkdown: D } = await import("./toMarkdown-CeTF6k-c.js");
                    return {
                        irToMarkdown: D
                    };
                }, []);
                return _(C);
            }
            throw new Error("지원하지 않는 파일 형식입니다.");
        }, []), L = i.useCallback(async (s)=>{
            const n = O(s.name);
            if (![
                "hwp",
                "hwpx",
                "docx",
                "md",
                "txt"
            ].includes(n)) {
                v("지원 포맷: .hwpx, .docx, .hwp, .md, .txt");
                return;
            }
            u(s), v("");
            try {
                const m = await H(s);
                x(m), d("preview");
            } catch (m) {
                v(m.message || "파일 파싱 중 오류가 발생했습니다.");
            }
        }, [
            H
        ]), A = (s)=>{
            s.preventDefault(), p(!1);
            const n = s.dataTransfer.files;
            n.length > 0 && L(n[0]);
        }, F = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwpx,.docx,.hwp,.md,.txt", s.onchange = ()=>{
                s.files && s.files.length > 0 && L(s.files[0]);
            }, s.click();
        }, $ = async ()=>{
            d("processing"), v("");
            try {
                const s = q();
                if (!s) throw new Error("Supabase not configured");
                const { data: n, error: t } = await s.functions.invoke("humanize-document", {
                    body: {
                        markdown: r,
                        intensity: g,
                        tone: f,
                        provider: "openai"
                    }
                });
                if (t) throw t;
                E(n?.humanized || n?.markdown || r), d("done");
            } catch  {
                v(a("site.humanize.serviceUnavailable")), d("preview");
            }
        }, V = async ()=>{
            await navigator.clipboard.writeText(c), M(!0), setTimeout(()=>M(!1), 2e3);
        }, I = ()=>{
            const s = new Blob([
                c
            ], {
                type: "text/markdown"
            }), n = URL.createObjectURL(s), t = document.createElement("a");
            t.href = n, t.download = (h?.name.replace(/\.[^.]+$/, "") || "humanized") + ".md", t.click(), URL.revokeObjectURL(n);
        }, W = async ()=>{
            try {
                const { markdownToHwpx: s } = await b(async ()=>{
                    const { markdownToHwpx: N } = await import("./index-D7FnE-Ia.js");
                    return {
                        markdownToHwpx: N
                    };
                }, __vite__mapDeps([0,1,2,3])), n = await s(c), t = new Blob([
                    n
                ], {
                    type: "application/hwp+zip"
                }), m = URL.createObjectURL(t), j = document.createElement("a");
                j.href = m, j.download = (h?.name.replace(/\.[^.]+$/, "") || "humanized") + ".hwpx", j.click(), URL.revokeObjectURL(m);
            } catch (s) {
                console.error("HWPX export error:", s);
            }
        }, T = ()=>{
            d("upload"), u(null), x(""), E(""), v("");
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(G, {
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
                                className: `dropzone ${w ? "drag-over" : ""}`,
                                onDragOver: (s)=>{
                                    s.preventDefault(), p(!0);
                                },
                                onDragLeave: ()=>p(!1),
                                onDrop: A,
                                onClick: F,
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
                            o === "preview" && e.jsxs("div", {
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
                                                        children: J(h.size)
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
                                                                className: g === "light" ? "active" : "",
                                                                onClick: ()=>k("light"),
                                                                children: a("site.humanize.intensityLight")
                                                            }),
                                                            e.jsx("button", {
                                                                className: g === "moderate" ? "active" : "",
                                                                onClick: ()=>k("moderate"),
                                                                children: a("site.humanize.intensityModerate")
                                                            }),
                                                            e.jsx("button", {
                                                                className: g === "aggressive" ? "active" : "",
                                                                onClick: ()=>k("aggressive"),
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
                                                                className: f === "formal" ? "active" : "",
                                                                onClick: ()=>y("formal"),
                                                                children: a("site.humanize.toneFormal")
                                                            }),
                                                            e.jsx("button", {
                                                                className: f === "casual" ? "active" : "",
                                                                onClick: ()=>y("casual"),
                                                                children: a("site.humanize.toneCasual")
                                                            }),
                                                            e.jsx("button", {
                                                                className: f === "academic" ? "active" : "",
                                                                onClick: ()=>y("academic"),
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
                                                            r.split(`
`).length,
                                                            " lines"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsxs("pre", {
                                                className: "humanize-pre",
                                                children: [
                                                    r.slice(0, 3e3),
                                                    r.length > 3e3 ? `
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
                                                onClick: $,
                                                children: a("site.humanize.startConvert")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            o === "processing" && e.jsxs("div", {
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
                            o === "done" && e.jsxs("div", {
                                className: "humanize-result",
                                children: [
                                    e.jsxs("div", {
                                        className: "result-header",
                                        children: [
                                            e.jsxs("div", {
                                                className: "result-tabs",
                                                children: [
                                                    e.jsx("button", {
                                                        className: `result-tab ${z === "side-by-side" ? "active" : ""}`,
                                                        onClick: ()=>R("side-by-side"),
                                                        children: a("site.humanize.compare")
                                                    }),
                                                    e.jsx("button", {
                                                        className: `result-tab ${z === "result" ? "active" : ""}`,
                                                        onClick: ()=>R("result"),
                                                        children: a("site.humanize.resultOnly")
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "result-actions",
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: V,
                                                        children: a(B ? "site.convert.copied" : "site.convert.copy")
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: I,
                                                        children: "Markdown"
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: W,
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
                                        className: `humanize-result-content ${z}`,
                                        children: z === "side-by-side" ? e.jsxs("div", {
                                            className: "para-compare",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "para-compare-legend",
                                                    children: [
                                                        e.jsx("span", {
                                                            className: "legend-item legend-same",
                                                            children: a("site.humanize.paraSame")
                                                        }),
                                                        e.jsx("span", {
                                                            className: "legend-item legend-changed",
                                                            children: a("site.humanize.paraChanged")
                                                        }),
                                                        e.jsx("span", {
                                                            className: "legend-item legend-added",
                                                            children: a("site.humanize.paraAdded")
                                                        }),
                                                        e.jsx("span", {
                                                            className: "legend-item legend-removed",
                                                            children: a("site.humanize.paraRemoved")
                                                        })
                                                    ]
                                                }),
                                                U.map((s, n)=>e.jsxs("div", {
                                                        className: `para-row para-${s.status}`,
                                                        children: [
                                                            e.jsxs("div", {
                                                                className: "para-index",
                                                                children: [
                                                                    e.jsxs("span", {
                                                                        className: "para-num",
                                                                        children: [
                                                                            "#",
                                                                            n + 1
                                                                        ]
                                                                    }),
                                                                    e.jsx("span", {
                                                                        className: `para-badge badge-${s.status}`,
                                                                        children: s.status === "same" ? a("site.humanize.paraSame") : s.status === "changed" ? a("site.humanize.paraChanged") : s.status === "added" ? a("site.humanize.paraAdded") : a("site.humanize.paraRemoved")
                                                                    })
                                                                ]
                                                            }),
                                                            e.jsxs("div", {
                                                                className: "para-cols",
                                                                children: [
                                                                    e.jsx("div", {
                                                                        className: "para-col para-left",
                                                                        children: s.left || e.jsx("span", {
                                                                            className: "para-empty",
                                                                            children: "—"
                                                                        })
                                                                    }),
                                                                    e.jsx("div", {
                                                                        className: "para-col para-right",
                                                                        children: s.right || e.jsx("span", {
                                                                            className: "para-empty",
                                                                            children: "—"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, n))
                                            ]
                                        }) : e.jsx("pre", {
                                            className: "humanize-pre full",
                                            children: c
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
export { ee as default, __tla };
