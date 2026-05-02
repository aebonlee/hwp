import { r as n, _ as D, u as T, j as e, __tla as __tla_0 } from "./index-9utJaTWv.js";
import { S as H } from "./SEOHead-DhT4I9Pd.js";
let V;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    let p = null, v = !1;
    function F() {
        const s = globalThis;
        if (typeof s.measureTextWidth == "function") return;
        const i = document.createElement("canvas").getContext("2d");
        s.measureTextWidth = (o, g)=>i ? (i.font = g || "16px sans-serif", i.measureText(o).width) : o.length * 10;
    }
    function I() {
        return v ? Promise.resolve() : p || (p = (async ()=>{
            F();
            const s = await D(()=>import("./rhwp-BgOEd_j0.js"), []);
            typeof s.default == "function" && await s.default();
            try {
                typeof s.init_panic_hook == "function" && s.init_panic_hook();
            } catch  {}
            v = !0;
        })(), p);
    }
    function U() {
        const [s, l] = n.useState({
            ready: v,
            loading: !v,
            error: null
        }), i = n.useRef(!0);
        return n.useEffect(()=>{
            if (i.current = !0, v) {
                l({
                    ready: !0,
                    loading: !1,
                    error: null
                });
                return;
            }
            return I().then(()=>{
                i.current && l({
                    ready: !0,
                    loading: !1,
                    error: null
                });
            }).catch((o)=>{
                i.current && l({
                    ready: !1,
                    loading: !1,
                    error: o.message || "WASM init failed"
                });
            }), ()=>{
                i.current = !1;
            };
        }, []), s;
    }
    V = ()=>{
        const { t: s } = T(), { ready: l, loading: i, error: o } = U(), [g, m] = n.useState(!1), [N, b] = n.useState(null), [k, x] = n.useState(""), [C, w] = n.useState(!1), [a, f] = n.useState([]), [c, h] = n.useState(0), [_, j] = n.useState(100), R = n.useRef(null), S = n.useCallback(async (t)=>{
            const r = t.name.split(".").pop()?.toLowerCase();
            if (r !== "hwp" && r !== "hwpx") {
                x(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            b(t), x(""), w(!0), f([]), h(0);
            try {
                const { HwpDocument: d } = await D(async ()=>{
                    const { HwpDocument: u } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: u
                    };
                }, []), O = await t.arrayBuffer(), y = new d(new Uint8Array(O)), z = y.pageCount(), E = [];
                for(let u = 0; u < z; u++)E.push(y.renderPageSvg(u));
                y.free(), f(E), w(!1);
            } catch (d) {
                x(d.message || s("site.viewer.error")), w(!1);
            }
        }, [
            s
        ]), L = (t)=>{
            t.preventDefault(), m(!1);
            const r = t.dataTransfer.files;
            r.length > 0 && S(r[0]);
        }, P = ()=>{
            const t = document.createElement("input");
            t.type = "file", t.accept = ".hwp,.hwpx", t.onchange = ()=>{
                t.files && t.files.length > 0 && S(t.files[0]);
            }, t.click();
        }, B = ()=>{
            if (!a[c]) return;
            const t = new Blob([
                a[c]
            ], {
                type: "image/svg+xml"
            }), r = URL.createObjectURL(t), d = document.createElement("a");
            d.href = r, d.download = `${N?.name?.replace(/\.[^.]+$/, "") || "page"}_p${c + 1}.svg`, d.click(), URL.revokeObjectURL(r);
        }, M = ()=>{
            b(null), f([]), h(0), j(100), x("");
        }, W = (t)=>{
            const r = parseInt(t.target.value, 10);
            !isNaN(r) && r >= 1 && r <= a.length && h(r - 1);
        };
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(H, {
                    title: s("site.viewer.title"),
                    path: "/viewer"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: s("site.viewer.title")
                            }),
                            e.jsx("p", {
                                children: s("site.viewer.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section viewer-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            o && e.jsxs("div", {
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
                                    s("site.viewer.wasmError"),
                                    ": ",
                                    o
                                ]
                            }),
                            k && e.jsxs("div", {
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
                                    k
                                ]
                            }),
                            a.length === 0 && !C && e.jsx(e.Fragment, {
                                children: i ? e.jsxs("div", {
                                    className: "viewer-loading",
                                    children: [
                                        e.jsx("div", {
                                            className: "loading-spinner"
                                        }),
                                        e.jsx("p", {
                                            children: s("site.viewer.loading")
                                        })
                                    ]
                                }) : e.jsxs("div", {
                                    className: `dropzone ${g ? "drag-over" : ""}`,
                                    onDragOver: (t)=>{
                                        t.preventDefault(), m(!0);
                                    },
                                    onDragLeave: ()=>m(!1),
                                    onDrop: L,
                                    onClick: l ? P : void 0,
                                    style: {
                                        cursor: l ? "pointer" : "not-allowed",
                                        opacity: l ? 1 : .5
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
                                            children: s("site.viewer.upload")
                                        }),
                                        e.jsx("p", {
                                            children: s("site.viewer.uploadHint")
                                        })
                                    ]
                                })
                            }),
                            C && e.jsxs("div", {
                                className: "viewer-loading",
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        children: s("site.viewer.rendering")
                                    })
                                ]
                            }),
                            a.length > 0 && e.jsxs("div", {
                                className: "viewer-container",
                                children: [
                                    e.jsxs("div", {
                                        className: "viewer-toolbar",
                                        children: [
                                            e.jsx("div", {
                                                className: "viewer-toolbar-left",
                                                children: e.jsx("span", {
                                                    className: "viewer-filename",
                                                    children: N?.name
                                                })
                                            }),
                                            e.jsxs("div", {
                                                className: "viewer-toolbar-center",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>h((t)=>Math.max(0, t - 1)),
                                                        disabled: c === 0,
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
                                                                value: c + 1,
                                                                onChange: W,
                                                                min: 1,
                                                                max: a.length
                                                            }),
                                                            e.jsxs("span", {
                                                                children: [
                                                                    s("site.viewer.of"),
                                                                    " ",
                                                                    a.length
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>h((t)=>Math.min(a.length - 1, t + 1)),
                                                        disabled: c === a.length - 1,
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
                                                        onClick: ()=>j((t)=>Math.max(50, t - 25)),
                                                        children: "-"
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "viewer-zoom-label",
                                                        children: [
                                                            _,
                                                            "%"
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-zoom-btn",
                                                        onClick: ()=>j((t)=>Math.min(200, t + 25)),
                                                        children: "+"
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-action-btn",
                                                        onClick: B,
                                                        title: s("site.viewer.downloadSvg"),
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
                                                        onClick: M,
                                                        title: s("site.viewer.newFile"),
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
                                        ref: R,
                                        children: e.jsx("div", {
                                            className: "viewer-canvas",
                                            style: {
                                                transform: `scale(${_ / 100})`,
                                                transformOrigin: "top center"
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: a[c] || ""
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
export { V as default, __tla };
