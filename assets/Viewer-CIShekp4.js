import { u as M, r as n, _ as O, j as e, __tla as __tla_0 } from "./index-Cmm8s4WM.js";
import { S as P } from "./SEOHead-4YFiXqf9.js";
import { u as W, __tla as __tla_1 } from "./useRhwp-Dx4500w8.js";
let I;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })()
]).then(async ()=>{
    I = ()=>{
        const { t: r } = M(), { ready: h, loading: C, error: g } = W(), [S, v] = n.useState(!1), [j, u] = n.useState(null), [f, d] = n.useState(""), [y, x] = n.useState(!1), [i, p] = n.useState([]), [a, o] = n.useState(0), [N, m] = n.useState(100), _ = n.useRef(null), b = n.useCallback(async (s)=>{
            const t = s.name.split(".").pop()?.toLowerCase();
            if (t !== "hwp" && t !== "hwpx") {
                d(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            u(s), d(""), x(!0), p([]), o(0);
            try {
                const { HwpDocument: l } = await O(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), z = await s.arrayBuffer(), w = new l(new Uint8Array(z)), H = w.pageCount(), k = [];
                for(let c = 0; c < H; c++)k.push(w.renderPageSvg(c));
                w.free(), p(k), x(!1);
            } catch (l) {
                d(l.message || r("site.viewer.error")), x(!1);
            }
        }, [
            r
        ]), B = (s)=>{
            s.preventDefault(), v(!1);
            const t = s.dataTransfer.files;
            t.length > 0 && b(t[0]);
        }, D = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwp,.hwpx", s.onchange = ()=>{
                s.files && s.files.length > 0 && b(s.files[0]);
            }, s.click();
        }, E = ()=>{
            if (!i[a]) return;
            const s = new Blob([
                i[a]
            ], {
                type: "image/svg+xml"
            }), t = URL.createObjectURL(s), l = document.createElement("a");
            l.href = t, l.download = `${j?.name?.replace(/\.[^.]+$/, "") || "page"}_p${a + 1}.svg`, l.click(), URL.revokeObjectURL(t);
        }, L = ()=>{
            u(null), p([]), o(0), m(100), d("");
        }, R = (s)=>{
            const t = parseInt(s.target.value, 10);
            !isNaN(t) && t >= 1 && t <= i.length && o(t - 1);
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(P, {
                    title: r("site.viewer.title"),
                    path: "/viewer"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: r("site.viewer.title")
                            }),
                            e.jsx("p", {
                                children: r("site.viewer.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section viewer-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            g && e.jsxs("div", {
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
                                    r("site.viewer.wasmError"),
                                    ": ",
                                    g
                                ]
                            }),
                            f && e.jsxs("div", {
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
                                    f
                                ]
                            }),
                            i.length === 0 && !y && e.jsx(e.Fragment, {
                                children: C ? e.jsxs("div", {
                                    className: "viewer-loading",
                                    children: [
                                        e.jsx("div", {
                                            className: "loading-spinner"
                                        }),
                                        e.jsx("p", {
                                            children: r("site.viewer.loading")
                                        })
                                    ]
                                }) : e.jsxs("div", {
                                    className: `dropzone ${S ? "drag-over" : ""}`,
                                    onDragOver: (s)=>{
                                        s.preventDefault(), v(!0);
                                    },
                                    onDragLeave: ()=>v(!1),
                                    onDrop: B,
                                    onClick: h ? D : void 0,
                                    style: {
                                        cursor: h ? "pointer" : "not-allowed",
                                        opacity: h ? 1 : .5
                                    },
                                    children: [
                                        e.jsxs("svg", {
                                            className: "dropzone-icon",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            children: [
                                                e.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                    fill: "rgba(74,143,231,0.12)",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("polyline", {
                                                    points: "14 2 14 8 20 8",
                                                    fill: "rgba(74,143,231,0.2)",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("line", {
                                                    x1: "9",
                                                    y1: "13",
                                                    x2: "15",
                                                    y2: "13",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("polyline", {
                                                    points: "12 10 12 16",
                                                    stroke: "var(--primary, #0046C8)"
                                                })
                                            ]
                                        }),
                                        e.jsx("h3", {
                                            children: r("site.viewer.upload")
                                        }),
                                        e.jsx("p", {
                                            children: r("site.viewer.uploadHint")
                                        })
                                    ]
                                })
                            }),
                            y && e.jsxs("div", {
                                className: "viewer-loading",
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        children: r("site.viewer.rendering")
                                    })
                                ]
                            }),
                            i.length > 0 && e.jsxs("div", {
                                className: "viewer-container",
                                children: [
                                    e.jsxs("div", {
                                        className: "viewer-toolbar",
                                        children: [
                                            e.jsx("div", {
                                                className: "viewer-toolbar-left",
                                                children: e.jsx("span", {
                                                    className: "viewer-filename",
                                                    children: j?.name
                                                })
                                            }),
                                            e.jsxs("div", {
                                                className: "viewer-toolbar-center",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>o((s)=>Math.max(0, s - 1)),
                                                        disabled: a === 0,
                                                        children: e.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: e.jsx("polyline", {
                                                                points: "15 18 9 12 15 6"
                                                            })
                                                        })
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "viewer-page-info",
                                                        children: [
                                                            e.jsx("input", {
                                                                type: "number",
                                                                className: "viewer-page-input",
                                                                value: a + 1,
                                                                onChange: R,
                                                                min: 1,
                                                                max: i.length
                                                            }),
                                                            e.jsxs("span", {
                                                                children: [
                                                                    r("site.viewer.of"),
                                                                    " ",
                                                                    i.length
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>o((s)=>Math.min(i.length - 1, s + 1)),
                                                        disabled: a === i.length - 1,
                                                        children: e.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: e.jsx("polyline", {
                                                                points: "9 18 15 12 9 6"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "viewer-toolbar-right",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "viewer-zoom-btn",
                                                        onClick: ()=>m((s)=>Math.max(50, s - 25)),
                                                        children: "-"
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "viewer-zoom-label",
                                                        children: [
                                                            N,
                                                            "%"
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-zoom-btn",
                                                        onClick: ()=>m((s)=>Math.min(200, s + 25)),
                                                        children: "+"
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-action-btn",
                                                        onClick: E,
                                                        title: r("site.viewer.downloadSvg"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
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
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-action-btn",
                                                        onClick: L,
                                                        title: r("site.viewer.newFile"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
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
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "viewer-canvas-wrapper",
                                        ref: _,
                                        children: e.jsx("div", {
                                            className: "viewer-canvas",
                                            style: {
                                                transform: `scale(${N / 100})`,
                                                transformOrigin: "top center"
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: i[a] || ""
                                            }
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
export { I as default, __tla };
