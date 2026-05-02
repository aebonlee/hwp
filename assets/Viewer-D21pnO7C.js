import { r, _ as D, u as T, j as e, __tla as __tla_0 } from "./index-CzPHPB3A.js";
import { S as H } from "./SEOHead-CuC8HsIL.js";
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
        const t = globalThis;
        if (typeof t.measureTextWidth == "function") return;
        const i = document.createElement("canvas").getContext("2d");
        t.measureTextWidth = (o, g)=>i ? (i.font = g || "16px sans-serif", i.measureText(o).width) : o.length * 10;
    }
    function I() {
        return v ? Promise.resolve() : p || (p = (async ()=>{
            F();
            const t = await D(()=>import("./rhwp-BgOEd_j0.js"), []);
            typeof t.init_panic_hook == "function" && t.init_panic_hook(), typeof t.default == "function" && await t.default(), v = !0;
        })(), p);
    }
    function U() {
        const [t, l] = r.useState({
            ready: v,
            loading: !v,
            error: null
        }), i = r.useRef(!0);
        return r.useEffect(()=>{
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
        }, []), t;
    }
    V = ()=>{
        const { t } = T(), { ready: l, loading: i, error: o } = U(), [g, m] = r.useState(!1), [N, b] = r.useState(null), [k, x] = r.useState(""), [C, w] = r.useState(!1), [a, f] = r.useState([]), [c, h] = r.useState(0), [_, j] = r.useState(100), R = r.useRef(null), S = r.useCallback(async (s)=>{
            const n = s.name.split(".").pop()?.toLowerCase();
            if (n !== "hwp" && n !== "hwpx") {
                x(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            b(s), x(""), w(!0), f([]), h(0);
            try {
                const { HwpDocument: d } = await D(async ()=>{
                    const { HwpDocument: u } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: u
                    };
                }, []), O = await s.arrayBuffer(), y = new d(new Uint8Array(O)), z = y.pageCount(), E = [];
                for(let u = 0; u < z; u++)E.push(y.renderPageSvg(u));
                y.free(), f(E), w(!1);
            } catch (d) {
                x(d.message || t("site.viewer.error")), w(!1);
            }
        }, [
            t
        ]), L = (s)=>{
            s.preventDefault(), m(!1);
            const n = s.dataTransfer.files;
            n.length > 0 && S(n[0]);
        }, P = ()=>{
            const s = document.createElement("input");
            s.type = "file", s.accept = ".hwp,.hwpx", s.onchange = ()=>{
                s.files && s.files.length > 0 && S(s.files[0]);
            }, s.click();
        }, B = ()=>{
            if (!a[c]) return;
            const s = new Blob([
                a[c]
            ], {
                type: "image/svg+xml"
            }), n = URL.createObjectURL(s), d = document.createElement("a");
            d.href = n, d.download = `${N?.name?.replace(/\.[^.]+$/, "") || "page"}_p${c + 1}.svg`, d.click(), URL.revokeObjectURL(n);
        }, M = ()=>{
            b(null), f([]), h(0), j(100), x("");
        }, W = (s)=>{
            const n = parseInt(s.target.value, 10);
            !isNaN(n) && n >= 1 && n <= a.length && h(n - 1);
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
                                    t("site.viewer.wasmError"),
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
                                            children: t("site.viewer.loading")
                                        })
                                    ]
                                }) : e.jsxs("div", {
                                    className: `dropzone ${g ? "drag-over" : ""}`,
                                    onDragOver: (s)=>{
                                        s.preventDefault(), m(!0);
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
                                            children: t("site.viewer.upload")
                                        }),
                                        e.jsx("p", {
                                            children: t("site.viewer.uploadHint")
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
                                        children: t("site.viewer.rendering")
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
                                                        onClick: ()=>h((s)=>Math.max(0, s - 1)),
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
                                                                    t("site.viewer.of"),
                                                                    " ",
                                                                    a.length
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-nav-btn",
                                                        onClick: ()=>h((s)=>Math.min(a.length - 1, s + 1)),
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
                                                        onClick: ()=>j((s)=>Math.max(50, s - 25)),
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
                                                        onClick: ()=>j((s)=>Math.min(200, s + 25)),
                                                        children: "+"
                                                    }),
                                                    e.jsx("button", {
                                                        className: "viewer-action-btn",
                                                        onClick: B,
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
                                                        onClick: M,
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
