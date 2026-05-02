import { u as ve, r as a, _ as he, j as e, __tla as __tla_0 } from "./index-Ctewv4u7.js";
import { S as ke } from "./SEOHead-DHi9tw9A.js";
import { u as Ce, __tla as __tla_1 } from "./useRhwp-CwZsT57c.js";
let Se;
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
    Se = ()=>{
        const { t: i } = ve(), { ready: b, loading: X, error: Y } = Ce(), d = a.useRef(null), [g, q] = a.useState([]), [f, v] = a.useState(0), [E, Z] = a.useState(100), [D, G] = a.useState(""), [de, T] = a.useState(!1), [c, x] = a.useState(null), [I, H] = a.useState(null), [O, W] = a.useState(!1), [L, M] = a.useState(!1), [_, pe] = a.useState(3), [z, ue] = a.useState(3), [Q, j] = a.useState(""), m = a.useRef([]), y = a.useRef([]), [xe, S] = a.useState(!1), [we, P] = a.useState(!1), U = a.useRef(null), ee = a.useRef(null), A = a.useRef(null), F = a.useRef(null);
        a.useEffect(()=>{
            const t = (s)=>{
                O && A.current && !A.current.contains(s.target) && W(!1), L && F.current && !F.current.contains(s.target) && M(!1);
            };
            return document.addEventListener("mousedown", t), ()=>document.removeEventListener("mousedown", t);
        }, [
            O,
            L
        ]);
        const B = a.useCallback((t)=>{
            const s = t.pageCount(), r = [];
            for(let n = 0; n < s; n++)r.push(t.renderPageSvg(n));
            q(r), f >= s && v(Math.max(0, s - 1));
        }, [
            f
        ]), p = a.useCallback(()=>{
            const t = d.current;
            if (!t) return;
            const s = t.pageCount(), r = [];
            for(let n = 0; n < s; n++)r.push(t.renderPageSvg(n));
            q(r);
        }, []), u = a.useCallback((t)=>{
            const s = d.current;
            if (s) try {
                const r = s.getCursorRect(t.secIdx, t.paraIdx, t.charOffset), n = JSON.parse(r);
                n.x !== void 0 && H({
                    x: n.x,
                    y: n.y,
                    width: n.width || 2,
                    height: n.height
                });
            } catch  {}
        }, []), w = a.useCallback(()=>{
            const t = d.current;
            if (!t) return;
            const s = t.saveSnapshot();
            m.current.push(s), y.current = [], S(!0), P(!1), T(!0);
        }, []), te = a.useCallback(async ()=>{
            if (b) try {
                const { HwpDocument: t } = await he(async ()=>{
                    const { HwpDocument: r } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: r
                    };
                }, []), s = t.createEmpty();
                s.createBlankDocument(), d.current && d.current.free(), d.current = s, m.current = [], y.current = [], S(!1), P(!1), G(""), T(!1), x(null), H(null), v(0), j(""), B(s);
            } catch (t) {
                j(t.message);
            }
        }, [
            b,
            B
        ]), K = a.useCallback(async (t)=>{
            if (!b) return;
            const s = t.name.split(".").pop()?.toLowerCase();
            if (s !== "hwp" && s !== "hwpx") {
                j(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: r } = await he(async ()=>{
                    const { HwpDocument: o } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: o
                    };
                }, []), n = await t.arrayBuffer(), l = new r(new Uint8Array(n));
                d.current && d.current.free(), d.current = l, m.current = [], y.current = [], S(!1), P(!1), G(t.name), T(!1), x(null), H(null), v(0), j(""), B(l);
            } catch (r) {
                j(r.message);
            }
        }, [
            b,
            B
        ]), se = a.useCallback(()=>{
            const t = document.createElement("input");
            t.type = "file", t.accept = ".hwp,.hwpx", t.onchange = ()=>{
                t.files && t.files.length > 0 && K(t.files[0]);
            }, t.click();
        }, [
            K
        ]), [fe, V] = a.useState(!1), ge = (t)=>{
            t.preventDefault(), V(!1), t.dataTransfer.files.length > 0 && K(t.dataTransfer.files[0]);
        }, je = a.useCallback((t)=>{
            const s = d.current;
            if (!s || !U.current) return;
            const r = U.current.querySelector("svg");
            if (!r) return;
            const n = r.getBoundingClientRect(), l = E / 100, o = E / 100, h = (t.clientX - n.left) / l, C = (t.clientY - n.top) / o;
            try {
                const J = s.hitTest(f, h, C), N = JSON.parse(J);
                if (N.paraIndex !== void 0) {
                    const R = {
                        secIdx: N.sectionIndex ?? 0,
                        paraIdx: N.paraIndex,
                        charOffset: N.charOffset ?? 0
                    };
                    x(R), u(R);
                }
            } catch  {}
            ee.current?.focus();
        }, [
            f,
            E,
            u
        ]), me = a.useCallback((t)=>{
            const s = d.current;
            if (!s || !c) return;
            if (t.ctrlKey || t.metaKey) {
                switch(t.key){
                    case "z":
                        t.preventDefault(), oe();
                        return;
                    case "y":
                        t.preventDefault(), le();
                        return;
                    case "b":
                        t.preventDefault(), re();
                        return;
                    case "i":
                        t.preventDefault(), ne();
                        return;
                    case "u":
                        t.preventDefault(), ae();
                        return;
                }
                return;
            }
            const { secIdx: r, paraIdx: n, charOffset: l } = c;
            if (t.key === "Enter") {
                t.preventDefault(), w();
                try {
                    s.splitParagraph(r, n, l);
                    const o = {
                        secIdx: r,
                        paraIdx: n + 1,
                        charOffset: 0
                    };
                    x(o), p(), u(o);
                } catch  {}
                return;
            }
            if (t.key === "Backspace") {
                t.preventDefault(), w();
                try {
                    if (l > 0) {
                        s.deleteText(r, n, l - 1, 1);
                        const o = {
                            secIdx: r,
                            paraIdx: n,
                            charOffset: l - 1
                        };
                        x(o), p(), u(o);
                    } else if (n > 0) {
                        const o = s.getParagraphLength(r, n - 1);
                        s.mergeParagraph(r, n);
                        const h = {
                            secIdx: r,
                            paraIdx: n - 1,
                            charOffset: o
                        };
                        x(h), p(), u(h);
                    }
                } catch  {}
                return;
            }
            if (t.key === "Delete") {
                t.preventDefault(), w();
                try {
                    const o = s.getParagraphLength(r, n);
                    if (l < o) s.deleteText(r, n, l, 1), p(), u(c);
                    else {
                        const h = s.getParagraphCount(r);
                        n < h - 1 && (s.mergeParagraph(r, n + 1), p(), u(c));
                    }
                } catch  {}
                return;
            }
            if (t.key === "ArrowLeft") {
                if (t.preventDefault(), l > 0) {
                    const o = {
                        secIdx: r,
                        paraIdx: n,
                        charOffset: l - 1
                    };
                    x(o), u(o);
                } else if (n > 0) {
                    const o = s.getParagraphLength(r, n - 1), h = {
                        secIdx: r,
                        paraIdx: n - 1,
                        charOffset: o
                    };
                    x(h), u(h);
                }
                return;
            }
            if (t.key === "ArrowRight") {
                t.preventDefault();
                try {
                    const o = s.getParagraphLength(r, n);
                    if (l < o) {
                        const h = {
                            secIdx: r,
                            paraIdx: n,
                            charOffset: l + 1
                        };
                        x(h), u(h);
                    } else {
                        const h = s.getParagraphCount(r);
                        if (n < h - 1) {
                            const C = {
                                secIdx: r,
                                paraIdx: n + 1,
                                charOffset: 0
                            };
                            x(C), u(C);
                        }
                    }
                } catch  {}
                return;
            }
            if (t.key === "ArrowUp" || t.key === "ArrowDown") {
                t.preventDefault();
                const o = t.key === "ArrowUp" ? -1 : 1, h = n + o;
                try {
                    const C = s.getParagraphCount(r);
                    if (h >= 0 && h < C) {
                        const J = s.getParagraphLength(r, h), N = Math.min(l, J), R = {
                            secIdx: r,
                            paraIdx: h,
                            charOffset: N
                        };
                        x(R), u(R);
                    }
                } catch  {}
                return;
            }
            if (t.key.length === 1 && !t.ctrlKey && !t.metaKey && !t.altKey) {
                t.preventDefault(), w();
                try {
                    s.insertText(r, n, l, t.key);
                    const o = {
                        secIdx: r,
                        paraIdx: n,
                        charOffset: l + 1
                    };
                    x(o), p(), u(o);
                } catch  {}
            }
        }, [
            c,
            w,
            p,
            u
        ]), k = a.useCallback((t)=>{
            const s = d.current;
            if (!(!s || !c)) {
                w();
                try {
                    const { secIdx: r, paraIdx: n, charOffset: l } = c, o = s.getParagraphLength(r, n);
                    l < o && (s.applyCharFormat(r, n, l, l + 1, JSON.stringify(t)), p());
                } catch  {}
            }
        }, [
            c,
            w,
            p
        ]), re = a.useCallback(()=>k({
                bold: !0
            }), [
            k
        ]), ne = a.useCallback(()=>k({
                italic: !0
            }), [
            k
        ]), ae = a.useCallback(()=>k({
                underline: !0
            }), [
            k
        ]), $ = a.useCallback((t)=>{
            const s = d.current;
            if (!(!s || !c)) {
                w();
                try {
                    s.applyParaFormat(c.secIdx, c.paraIdx, JSON.stringify({
                        alignment: t
                    })), p();
                } catch  {}
            }
        }, [
            c,
            w,
            p
        ]), ye = a.useCallback(()=>{
            const t = d.current;
            if (!(!t || !c)) {
                w();
                try {
                    t.createTable(c.secIdx, c.paraIdx, c.charOffset, _, z), p(), M(!1);
                } catch (s) {
                    j(s.message);
                }
            }
        }, [
            c,
            _,
            z,
            w,
            p
        ]), oe = a.useCallback(()=>{
            const t = d.current;
            if (!t || m.current.length === 0) return;
            const s = m.current.pop(), r = t.saveSnapshot();
            y.current.push(r), t.restoreSnapshot(s), p(), S(m.current.length > 0), P(!0);
        }, [
            p
        ]), le = a.useCallback(()=>{
            const t = d.current;
            if (!t || y.current.length === 0) return;
            const s = y.current.pop(), r = t.saveSnapshot();
            m.current.push(r), t.restoreSnapshot(s), p(), S(!0), P(y.current.length > 0);
        }, [
            p
        ]), ie = a.useCallback(async (t)=>{
            const s = d.current;
            if (s) {
                W(!1);
                try {
                    const r = t === "hwp" ? s.exportHwp() : s.exportHwpx(), n = new Blob([
                        r
                    ], {
                        type: "application/octet-stream"
                    }), l = URL.createObjectURL(n), o = document.createElement("a");
                    o.href = l;
                    const h = D ? D.replace(/\.[^.]+$/, "") : "document";
                    o.download = `${h}.${t}`, o.click(), URL.revokeObjectURL(l);
                } catch (r) {
                    j(r.message);
                }
            }
        }, [
            D
        ]), be = (t)=>{
            const s = parseInt(t.target.value, 10);
            !isNaN(s) && s >= 1 && s <= g.length && v(s - 1);
        };
        a.useEffect(()=>()=>{
                d.current && (d.current.free(), d.current = null);
            }, []);
        const ce = g.length > 0;
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(ke, {
                    title: i("site.hwpEditor.title"),
                    path: "/hwp-editor"
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: i("site.hwpEditor.title")
                            }),
                            e.jsx("p", {
                                children: i("site.hwpEditor.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section hwp-editor-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            Y && e.jsxs("div", {
                                className: "hwp-editor-error",
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
                                    i("site.hwpEditor.wasmError"),
                                    ": ",
                                    Y
                                ]
                            }),
                            Q && e.jsxs("div", {
                                className: "hwp-editor-error",
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
                                    Q
                                ]
                            }),
                            X && e.jsxs("div", {
                                className: "hwp-editor-loading",
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        children: i("site.hwpEditor.wasmLoading")
                                    })
                                ]
                            }),
                            !X && !ce && e.jsx("div", {
                                className: `hwp-editor-container ${fe ? "drag-over" : ""}`,
                                onDragOver: (t)=>{
                                    t.preventDefault(), V(!0);
                                },
                                onDragLeave: ()=>V(!1),
                                onDrop: ge,
                                children: e.jsxs("div", {
                                    className: "hwp-editor-empty",
                                    children: [
                                        e.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "48",
                                            height: "48",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            children: [
                                                e.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                }),
                                                e.jsx("polyline", {
                                                    points: "14 2 14 8 20 8"
                                                }),
                                                e.jsx("line", {
                                                    x1: "12",
                                                    y1: "18",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                e.jsx("line", {
                                                    x1: "9",
                                                    y1: "15",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        e.jsx("h3", {
                                            children: i("site.hwpEditor.dropOrNew")
                                        }),
                                        e.jsx("p", {
                                            children: i("site.hwpEditor.clickToEdit")
                                        }),
                                        e.jsxs("div", {
                                            className: "hwp-editor-empty-actions",
                                            children: [
                                                e.jsxs("button", {
                                                    className: "hwp-empty-btn primary",
                                                    onClick: te,
                                                    disabled: !b,
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
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                }),
                                                                e.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8"
                                                                })
                                                            ]
                                                        }),
                                                        i("site.hwpEditor.newDoc")
                                                    ]
                                                }),
                                                e.jsxs("button", {
                                                    className: "hwp-empty-btn",
                                                    onClick: se,
                                                    disabled: !b,
                                                    children: [
                                                        e.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: e.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        }),
                                                        i("site.hwpEditor.openFile")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            ce && e.jsxs(e.Fragment, {
                                children: [
                                    e.jsxs("div", {
                                        className: "hwp-editor-toolbar",
                                        children: [
                                            e.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: te,
                                                        title: i("site.hwpEditor.newDoc"),
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
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: se,
                                                        title: i("site.hwpEditor.openFile"),
                                                        children: e.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: e.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            e.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: re,
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.bold"),
                                                        children: e.jsx("strong", {
                                                            children: "B"
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ne,
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.italic"),
                                                        children: e.jsx("em", {
                                                            children: "I"
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ae,
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.underline"),
                                                        children: e.jsx("span", {
                                                            style: {
                                                                textDecoration: "underline"
                                                            },
                                                            children: "U"
                                                        })
                                                    })
                                                ]
                                            }),
                                            e.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>$("left"),
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.alignLeft"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("line", {
                                                                    x1: "17",
                                                                    y1: "10",
                                                                    x2: "3",
                                                                    y2: "10"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "17",
                                                                    y1: "14",
                                                                    x2: "3",
                                                                    y2: "14"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>$("center"),
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.alignCenter"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("line", {
                                                                    x1: "18",
                                                                    y1: "10",
                                                                    x2: "6",
                                                                    y2: "10"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "18",
                                                                    y1: "14",
                                                                    x2: "6",
                                                                    y2: "14"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>$("right"),
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.alignRight"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "10",
                                                                    x2: "7",
                                                                    y2: "10"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "14",
                                                                    x2: "7",
                                                                    y2: "14"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            e.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                style: {
                                                    position: "relative"
                                                },
                                                ref: F,
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>M(!L),
                                                        disabled: !c,
                                                        title: i("site.hwpEditor.insertTable"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "9",
                                                                    x2: "21",
                                                                    y2: "9"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "15",
                                                                    x2: "21",
                                                                    y2: "15"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "3",
                                                                    x2: "9",
                                                                    y2: "21"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "15",
                                                                    y1: "3",
                                                                    x2: "15",
                                                                    y2: "21"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    L && e.jsxs("div", {
                                                        className: "hwp-table-dialog",
                                                        children: [
                                                            e.jsxs("div", {
                                                                className: "hwp-table-dialog-row",
                                                                children: [
                                                                    e.jsxs("div", {
                                                                        children: [
                                                                            e.jsx("label", {
                                                                                children: "Rows"
                                                                            }),
                                                                            e.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 20,
                                                                                value: _,
                                                                                onChange: (t)=>pe(Number(t.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    e.jsxs("div", {
                                                                        children: [
                                                                            e.jsx("label", {
                                                                                children: "Cols"
                                                                            }),
                                                                            e.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 10,
                                                                                value: z,
                                                                                onChange: (t)=>ue(Number(t.target.value))
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            e.jsx("button", {
                                                                onClick: ye,
                                                                children: i("site.hwpEditor.insertTable")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: oe,
                                                        disabled: !xe,
                                                        title: i("site.hwpEditor.undo"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("polyline", {
                                                                    points: "1 4 1 10 7 10"
                                                                }),
                                                                e.jsx("path", {
                                                                    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: le,
                                                        disabled: !we,
                                                        title: i("site.hwpEditor.redo"),
                                                        children: e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("polyline", {
                                                                    points: "23 4 23 10 17 10"
                                                                }),
                                                                e.jsx("path", {
                                                                    d: "M20.49 15a9 9 0 1 1-2.13-9.36L23 10"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            e.jsx("div", {
                                                className: "hwp-toolbar-spacer"
                                            }),
                                            D && e.jsxs("span", {
                                                style: {
                                                    fontSize: "0.82rem",
                                                    color: "var(--text-secondary)",
                                                    marginRight: 8
                                                },
                                                children: [
                                                    D,
                                                    de ? " *" : ""
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-export-wrapper",
                                                ref: A,
                                                children: [
                                                    e.jsxs("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>W(!O),
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
                                                            }),
                                                            e.jsxs("span", {
                                                                children: [
                                                                    i("site.hwpEditor.export"),
                                                                    " ▾"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    O && e.jsxs("div", {
                                                        className: "hwp-export-dropdown",
                                                        children: [
                                                            e.jsx("button", {
                                                                onClick: ()=>ie("hwp"),
                                                                children: i("site.hwpEditor.exportHwp")
                                                            }),
                                                            e.jsx("button", {
                                                                onClick: ()=>ie("hwpx"),
                                                                children: i("site.hwpEditor.exportHwpx")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "hwp-editor-container",
                                        children: [
                                            e.jsx("div", {
                                                className: "hwp-canvas-wrapper",
                                                ref: ee,
                                                tabIndex: 0,
                                                onKeyDown: me,
                                                style: {
                                                    outline: "none"
                                                },
                                                children: e.jsxs("div", {
                                                    className: "hwp-canvas",
                                                    ref: U,
                                                    style: {
                                                        transform: `scale(${E / 100})`,
                                                        transformOrigin: "top center"
                                                    },
                                                    onClick: je,
                                                    children: [
                                                        e.jsx("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: g[f] || ""
                                                            }
                                                        }),
                                                        I && e.jsx("div", {
                                                            className: "hwp-cursor",
                                                            style: {
                                                                left: I.x,
                                                                top: I.y,
                                                                height: I.height
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-page-bar",
                                                children: [
                                                    e.jsxs("div", {
                                                        className: "hwp-page-nav",
                                                        children: [
                                                            e.jsx("button", {
                                                                className: "hwp-page-btn",
                                                                onClick: ()=>v((t)=>Math.max(0, t - 1)),
                                                                disabled: f === 0,
                                                                children: e.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "14",
                                                                    height: "14",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: e.jsx("polyline", {
                                                                        points: "15 18 9 12 15 6"
                                                                    })
                                                                })
                                                            }),
                                                            e.jsxs("span", {
                                                                className: "hwp-page-info",
                                                                children: [
                                                                    e.jsx("input", {
                                                                        type: "number",
                                                                        className: "hwp-page-input",
                                                                        value: f + 1,
                                                                        onChange: be,
                                                                        min: 1,
                                                                        max: g.length
                                                                    }),
                                                                    e.jsxs("span", {
                                                                        children: [
                                                                            "/ ",
                                                                            g.length
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            e.jsx("button", {
                                                                className: "hwp-page-btn",
                                                                onClick: ()=>v((t)=>Math.min(g.length - 1, t + 1)),
                                                                disabled: f === g.length - 1,
                                                                children: e.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "14",
                                                                    height: "14",
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
                                                        className: "hwp-zoom-controls",
                                                        children: [
                                                            e.jsx("button", {
                                                                className: "hwp-zoom-btn",
                                                                onClick: ()=>Z((t)=>Math.max(50, t - 25)),
                                                                children: "-"
                                                            }),
                                                            e.jsxs("span", {
                                                                className: "hwp-zoom-label",
                                                                children: [
                                                                    E,
                                                                    "%"
                                                                ]
                                                            }),
                                                            e.jsx("button", {
                                                                className: "hwp-zoom-btn",
                                                                onClick: ()=>Z((t)=>Math.min(200, t + 25)),
                                                                children: "+"
                                                            })
                                                        ]
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
export { Se as default, __tla };
