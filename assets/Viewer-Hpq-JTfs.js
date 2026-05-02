import { u as O, r as i, _ as P, j as e, __tla as __tla_0 } from "./index-CsyNRKlW.js";
import { S as H } from "./SEOHead-w9vpUQy8.js";
import { u as W, __tla as __tla_1 } from "./useRhwp-BEzLNlwP.js";
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
        const { t } = O(), { ready: h, loading: C, error: m } = W(), [S, v] = i.useState(!1), [u, j] = i.useState(null), [f, d] = i.useState(""), [y, x] = i.useState(!1), [n, p] = i.useState([]), [a, o] = i.useState(0), [N, w] = i.useState(100), _ = i.useRef(null), b = i.useCallback(async (s)=>{
            const r = s.name.split(".").pop()?.toLowerCase();
            if (r !== "hwp" && r !== "hwpx") {
                d(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            j(s), d(""), x(!0), p([]), o(0);
            try {
                const { HwpDocument: l } = await P(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), z = await s.arrayBuffer(), g = new l(new Uint8Array(z)), M = g.pageCount(), k = [];
                for(let c = 0; c < M; c++)k.push(g.renderPageSvg(c));
                g.free(), p(k), x(!1);
            } catch (l) {
                d(l.message || t("site.viewer.error")), x(!1);
            }
        }, [
            t
        ]), B = (s)=>{
            s.preventDefault(), v(!1);
            const r = s.dataTransfer.files;
            r.length > 0 && b(r[0]);
        }, D = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwp,.hwpx", s.onchange = ()=>{
                s.files && s.files.length > 0 && b(s.files[0]);
            }, s.click();
        }, E = ()=>{
            if (!n[a]) return;
            const s = new Blob([
                n[a]
            ], {
                type: "image/svg+xml"
            }), r = URL.createObjectURL(s), l = document.createElement("a");
            l.href = r, l.download = `${u?.name?.replace(/\.[^.]+$/, "") || "page"}_p${a + 1}.svg`, l.click(), URL.revokeObjectURL(r);
        }, L = ()=>{
            j(null), p([]), o(0), w(100), d("");
        }, R = (s)=>{
            const r = parseInt(s.target.value, 10);
            !isNaN(r) && r >= 1 && r <= n.length && o(r - 1);
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(H, {
                    title: t("site.viewer.title"),
                    path: "/viewer"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: t("site.viewer.title")
                            }),
                            e.jsx("p", {
                                children: t("site.viewer.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section viewer-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            m && e.jsxs("div", {
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
                                    t("site.viewer.wasmError"),
                                    ": ",
                                    m
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
                            n.length === 0 && !y && e.jsx(e.Fragment, {
                                children: C ? e.jsxs("div", {
                                    className: "viewer-loading",
                                    children: [
                                        e.jsx("div", {
                                            className: "loading-spinner"
                                        }),
                                        e.jsx("p", {
                                            children: t("site.viewer.loading")
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
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
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
                                        }),
                                        e.jsx("h3", {
                                            children: t("site.viewer.upload")
                                        }),
                                        e.jsx("p", {
                                            children: t("site.viewer.uploadHint")
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
                                        children: t("site.viewer.rendering")
                                    })
                                ]
                            }),
                            n.length > 0 && e.jsxs("div", {
                                className: "viewer-container",
                                children: [
                                    e.jsxs("div", {
                                        className: "viewer-toolbar",
                                        children: [
                                            e.jsx("div", {
                                                className: "viewer-toolbar-left",
                                                children: e.jsx("span", {
                                                    className: "viewer-filename",
                                                    children: u?.name
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
                                                                max: n.length
                                                            }),
                                                            e.jsxs("span", {
                                                                children: [
                                                                    t("site.viewer.of"),
                                                                    " ",
                                                                    n.length
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>o((s)=>Math.min(n.length - 1, s + 1)),
                                                        disabled: a === n.length - 1,
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
                                                        onClick: ()=>w((s)=>Math.max(50, s - 25)),
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
                                                        onClick: ()=>w((s)=>Math.min(200, s + 25)),
                                                        children: "+"
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-action-btn",
                                                        onClick: E,
                                                        title: t("site.viewer.downloadSvg"),
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
                                                        title: t("site.viewer.newFile"),
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
                                                __html: n[a] || ""
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
