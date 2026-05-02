import { u as _e, r as o, _ as be, j as t, __tla as __tla_0 } from "./index-CsyNRKlW.js";
import { S as ze } from "./SEOHead-w9vpUQy8.js";
import { u as Ue, __tla as __tla_1 } from "./useRhwp-BEzLNlwP.js";
let Ye;
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
    function Ce(l) {
        const w = l.match(/viewBox=["']([^"']+)["']/);
        if (!w) return null;
        const S = w[1].split(/[\s,]+/).map(Number);
        return S.length < 4 ? null : {
            x: S[0],
            y: S[1],
            w: S[2],
            h: S[3]
        };
    }
    function O(l) {
        try {
            return JSON.parse(l);
        } catch  {
            return null;
        }
    }
    function F(l, w) {
        return l.secIdx !== w.secIdx ? l.secIdx < w.secIdx ? -1 : 1 : l.paraIdx !== w.paraIdx ? l.paraIdx < w.paraIdx ? -1 : 1 : l.charOffset !== w.charOffset ? l.charOffset < w.charOffset ? -1 : 1 : 0;
    }
    function X(l) {
        return F(l.start, l.end) <= 0 ? [
            l.start,
            l.end
        ] : [
            l.end,
            l.start
        ];
    }
    Ye = ()=>{
        const { t: l } = _e(), { ready: w, loading: S, error: oe } = Ue(), x = o.useRef(null), [k, ke] = o.useState([]), [I, R] = o.useState(0), [ce, le] = o.useState(100), [M, Ie] = o.useState(""), [Oe, ie] = o.useState(!1), [i, f] = o.useState(null), [H, W] = o.useState(null), [y, j] = o.useState(null), [Ne, C] = o.useState([]), [_, Z] = o.useState(!1), [z, q] = o.useState(!1), [G, Se] = o.useState(3), [Q, Ee] = o.useState(3), [he, E] = o.useState(""), [Le, ee] = o.useState(!1), U = o.useRef(!1), L = o.useRef([]), B = o.useRef([]), [De, K] = o.useState(!1), [Pe, J] = o.useState(!1), te = o.useRef(null), A = o.useRef(null), re = o.useRef(null), se = o.useRef(null);
        o.useEffect(()=>{
            const e = (s)=>{
                _ && re.current && !re.current.contains(s.target) && Z(!1), z && se.current && !se.current.contains(s.target) && q(!1);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            _,
            z
        ]);
        const V = o.useCallback((e)=>{
            try {
                const s = e.pageCount(), r = [];
                for(let n = 0; n < s; n++)r.push(e.renderPageSvg(n));
                ke(r), R((n)=>n >= s ? Math.max(0, s - 1) : n);
            } catch (s) {
                console.error("renderAllPages error:", s);
            }
        }, []), u = o.useCallback(()=>{
            const e = x.current;
            e && V(e);
        }, [
            V
        ]), p = o.useCallback((e)=>{
            const s = x.current;
            if (!s) {
                W(null);
                return;
            }
            try {
                const r = O(s.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                if (r && r.x !== void 0) {
                    const n = {
                        pageIndex: r.pageIndex ?? 0,
                        x: r.x,
                        y: r.y,
                        height: r.height
                    };
                    W(n), R(n.pageIndex);
                } else W(null);
            } catch  {
                W(null);
            }
        }, []), T = o.useCallback((e)=>{
            const s = x.current;
            if (!s || !e) {
                C([]);
                return;
            }
            try {
                const [r, n] = X(e), h = s.getSelectionRects(r.secIdx, r.paraIdx, r.charOffset, n.paraIdx, n.charOffset), a = JSON.parse(h);
                C(Array.isArray(a) ? a : []);
            } catch  {
                C([]);
            }
        }, []), b = o.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            const s = e.saveSnapshot();
            if (L.current.push(s), L.current.length > 100) {
                const r = L.current.shift();
                try {
                    e.discardSnapshot(r);
                } catch  {}
            }
            B.current = [], K(!0), J(!1), ie(!0);
        }, []), Y = o.useCallback((e, s)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (x.current && x.current !== e) try {
                x.current.free();
            } catch  {}
            x.current = e, L.current = [], B.current = [], K(!1), J(!1), Ie(s), ie(!1), f(null), W(null), j(null), C([]), R(0), E(""), V(e);
            try {
                const r = O(e.getCaretPosition());
                if (r && r.paragraphIndex !== void 0) {
                    const n = {
                        secIdx: r.sectionIndex ?? 0,
                        paraIdx: r.paragraphIndex,
                        charOffset: r.charOffset ?? 0
                    };
                    f(n), setTimeout(()=>p(n), 50);
                }
            } catch  {}
        }, [
            V,
            p
        ]), de = o.useCallback(async ()=>{
            if (w) try {
                const { HwpDocument: e } = await be(async ()=>{
                    const { HwpDocument: n } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: n
                    };
                }, []), s = e.createEmpty(), r = O(s.createBlankDocument());
                if (r && r.ok === !1) {
                    E(`새 문서 생성 실패: ${r.error || "unknown"}`);
                    return;
                }
                Y(s, "");
            } catch (e) {
                E(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            w,
            Y
        ]), ne = o.useCallback(async (e)=>{
            if (!w) return;
            const s = e.name.split(".").pop()?.toLowerCase();
            if (s !== "hwp" && s !== "hwpx") {
                E(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: r } = await be(async ()=>{
                    const { HwpDocument: a } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: a
                    };
                }, []), n = await e.arrayBuffer(), h = new r(new Uint8Array(n));
                Y(h, e.name);
            } catch (r) {
                E(`파일 열기 실패: ${r.message}`);
            }
        }, [
            w,
            Y
        ]), pe = o.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files && e.files.length > 0 && ne(e.files[0]);
            }, e.click();
        }, [
            ne
        ]), Re = (e)=>{
            e.preventDefault(), ee(!1), e.dataTransfer.files.length > 0 && ne(e.dataTransfer.files[0]);
        }, Be = o.useCallback((e)=>{
            const s = x.current;
            if (!s || !te.current) return;
            const r = te.current.querySelector("svg");
            if (!r) return;
            const n = Ce(k[I] || "");
            if (!n) return;
            const h = r.getBoundingClientRect(), a = (e.clientX - h.left) / h.width * n.w + n.x, c = (e.clientY - h.top) / h.height * n.h + n.y;
            try {
                const d = O(s.hitTest(I, a, c));
                if (d && (d.paraIndex !== void 0 || d.paragraphIndex !== void 0)) {
                    const m = {
                        secIdx: d.sectionIndex ?? 0,
                        paraIdx: d.paraIndex ?? d.paragraphIndex,
                        charOffset: d.charOffset ?? 0
                    };
                    if (e.shiftKey && i) {
                        const g = {
                            start: i,
                            end: m
                        };
                        j(g), T(g);
                    } else j(null), C([]);
                    f(m), p(m);
                }
            } catch  {}
            A.current?.focus();
        }, [
            I,
            k,
            i,
            p,
            T
        ]), D = o.useCallback(()=>{
            const e = x.current;
            if (!e || !y) return null;
            const [s, r] = X(y);
            try {
                const n = O(e.deleteRange(s.secIdx, s.paraIdx, s.charOffset, r.paraIdx, r.charOffset));
                return j(null), C([]), n && n.ok ? {
                    secIdx: s.secIdx,
                    paraIdx: n.paraIdx ?? s.paraIdx,
                    charOffset: n.charOffset ?? s.charOffset
                } : s;
            } catch  {
                return j(null), C([]), s;
            }
        }, [
            y
        ]), P = o.useCallback((e)=>{
            const s = x.current;
            if (!s || !i) return;
            b();
            let r = i;
            if (y) {
                const n = D();
                n && (r = n);
            }
            try {
                const n = O(s.insertText(r.secIdx, r.paraIdx, r.charOffset, e)), h = n && n.charOffset !== void 0 ? n.charOffset : r.charOffset + e.length, a = {
                    ...r,
                    charOffset: h
                };
                f(a), u(), p(a);
            } catch (n) {
                console.error("insertText error:", n);
            }
        }, [
            i,
            y,
            b,
            D,
            u,
            p
        ]), Te = o.useCallback(()=>{
            U.current = !0;
        }, []), $e = o.useCallback((e)=>{
            U.current = !1;
            const s = e.data;
            s && P(s), A.current && (A.current.value = "");
        }, [
            P
        ]), Me = o.useCallback((e)=>{
            if (U.current) return;
            const s = e.target, r = s.value;
            r && (P(r), s.value = "");
        }, [
            P
        ]), He = o.useCallback((e)=>{
            const s = x.current;
            if (!s || !i || U.current) return;
            const { secIdx: r, paraIdx: n, charOffset: h } = i;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key){
                    case "z":
                        e.preventDefault(), ge();
                        return;
                    case "y":
                        e.preventDefault(), we();
                        return;
                    case "b":
                        e.preventDefault(), ue();
                        return;
                    case "i":
                        e.preventDefault(), xe();
                        return;
                    case "u":
                        e.preventDefault(), fe();
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const a = s.getParagraphCount(r), c = s.getParagraphLength(r, a - 1), d = {
                                    start: {
                                        secIdx: r,
                                        paraIdx: 0,
                                        charOffset: 0
                                    },
                                    end: {
                                        secIdx: r,
                                        paraIdx: a - 1,
                                        charOffset: c
                                    }
                                };
                                j(d), T(d);
                            } catch  {}
                            return;
                        }
                    case "c":
                    case "x":
                        {
                            if (!y) return;
                            e.preventDefault();
                            const [a, c] = X(y);
                            try {
                                const m = O(s.copySelection(a.secIdx, a.paraIdx, a.charOffset, c.paraIdx, c.charOffset))?.text || "";
                                if (m && navigator.clipboard.writeText(m).catch(()=>{}), e.key === "x") {
                                    b();
                                    const g = D();
                                    g && (f(g), u(), p(g));
                                }
                            } catch  {}
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), navigator.clipboard.readText().then((a)=>{
                                a && P(a);
                            }).catch(()=>{});
                            return;
                        }
                }
                return;
            }
            if (e.key === "Enter") {
                if (e.preventDefault(), b(), y) {
                    const a = D();
                    if (a) try {
                        s.splitParagraph(a.secIdx, a.paraIdx, a.charOffset);
                        const c = {
                            secIdx: a.secIdx,
                            paraIdx: a.paraIdx + 1,
                            charOffset: 0
                        };
                        f(c), u(), p(c);
                    } catch  {}
                    return;
                }
                try {
                    s.splitParagraph(r, n, h);
                    const a = {
                        secIdx: r,
                        paraIdx: n + 1,
                        charOffset: 0
                    };
                    f(a), u(), p(a);
                } catch  {}
                return;
            }
            if (e.key === "Backspace") {
                if (e.preventDefault(), b(), y) {
                    const a = D();
                    a && (f(a), u(), p(a));
                    return;
                }
                try {
                    if (h > 0) {
                        const a = O(s.deleteText(r, n, h - 1, 1)), c = a?.charOffset !== void 0 ? a.charOffset : h - 1, d = {
                            secIdx: r,
                            paraIdx: n,
                            charOffset: c
                        };
                        f(d), u(), p(d);
                    } else if (n > 0) {
                        const a = s.getParagraphLength(r, n - 1);
                        s.mergeParagraph(r, n);
                        const c = {
                            secIdx: r,
                            paraIdx: n - 1,
                            charOffset: a
                        };
                        f(c), u(), p(c);
                    }
                } catch  {}
                return;
            }
            if (e.key === "Delete") {
                if (e.preventDefault(), b(), y) {
                    const a = D();
                    a && (f(a), u(), p(a));
                    return;
                }
                try {
                    const a = s.getParagraphLength(r, n);
                    if (h < a) s.deleteText(r, n, h, 1), u(), p(i);
                    else {
                        const c = s.getParagraphCount(r);
                        n < c - 1 && (s.mergeParagraph(r, n + 1), u(), p(i));
                    }
                } catch  {}
                return;
            }
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                let a;
                if (h > 0) a = {
                    secIdx: r,
                    paraIdx: n,
                    charOffset: h - 1
                };
                else if (n > 0) {
                    const c = s.getParagraphLength(r, n - 1);
                    a = {
                        secIdx: r,
                        paraIdx: n - 1,
                        charOffset: c
                    };
                } else return;
                if (e.shiftKey) {
                    const c = {
                        start: y?.start ?? i,
                        end: a
                    };
                    j(F(c.start, c.end) === 0 ? null : c), T(F(c.start, c.end) === 0 ? null : c);
                } else j(null), C([]);
                f(a), p(a);
                return;
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                let a;
                try {
                    const c = s.getParagraphLength(r, n);
                    if (h < c) a = {
                        secIdx: r,
                        paraIdx: n,
                        charOffset: h + 1
                    };
                    else {
                        const d = s.getParagraphCount(r);
                        if (n < d - 1) a = {
                            secIdx: r,
                            paraIdx: n + 1,
                            charOffset: 0
                        };
                        else return;
                    }
                } catch  {
                    return;
                }
                if (e.shiftKey) {
                    const c = {
                        start: y?.start ?? i,
                        end: a
                    };
                    j(F(c.start, c.end) === 0 ? null : c), T(F(c.start, c.end) === 0 ? null : c);
                } else j(null), C([]);
                f(a), p(a);
                return;
            }
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                try {
                    const a = O(s.getLineInfo(r, n, h));
                    if (a) {
                        const c = a.lineIndex, d = a.lineCount;
                        if (e.key === "ArrowUp") {
                            if (c > 0) {
                                const m = a.charStart, g = Math.max(0, m - 1), N = {
                                    secIdx: r,
                                    paraIdx: n,
                                    charOffset: g
                                };
                                f(N), p(N);
                            } else if (n > 0) {
                                const m = s.getParagraphLength(r, n - 1), g = Math.min(h, m), N = {
                                    secIdx: r,
                                    paraIdx: n - 1,
                                    charOffset: g
                                };
                                f(N), p(N);
                            }
                        } else if (c < d - 1) {
                            const m = a.charEnd, g = {
                                secIdx: r,
                                paraIdx: n,
                                charOffset: Math.min(m + 1 + (h - a.charStart), s.getParagraphLength(r, n))
                            };
                            f(g), p(g);
                        } else {
                            const m = s.getParagraphCount(r);
                            if (n < m - 1) {
                                const g = s.getParagraphLength(r, n + 1), N = Math.min(h, g), je = {
                                    secIdx: r,
                                    paraIdx: n + 1,
                                    charOffset: N
                                };
                                f(je), p(je);
                            }
                        }
                    } else {
                        const c = e.key === "ArrowUp" ? -1 : 1, d = n + c, m = s.getParagraphCount(r);
                        if (d >= 0 && d < m) {
                            const g = s.getParagraphLength(r, d), N = {
                                secIdx: r,
                                paraIdx: d,
                                charOffset: Math.min(h, g)
                            };
                            f(N), p(N);
                        }
                    }
                    e.shiftKey || (j(null), C([]));
                } catch  {}
                return;
            }
            if (e.key === "Home") {
                e.preventDefault();
                try {
                    const a = O(s.getLineInfo(r, n, h)), c = {
                        secIdx: r,
                        paraIdx: n,
                        charOffset: a ? a.charStart : 0
                    };
                    e.shiftKey || (j(null), C([])), f(c), p(c);
                } catch  {}
                return;
            }
            if (e.key === "End") {
                e.preventDefault();
                try {
                    const a = O(s.getLineInfo(r, n, h)), c = s.getParagraphLength(r, n), d = {
                        secIdx: r,
                        paraIdx: n,
                        charOffset: a ? Math.min(a.charEnd, c) : c
                    };
                    e.shiftKey || (j(null), C([])), f(d), p(d);
                } catch  {}
                return;
            }
            if (e.key === "Tab") {
                e.preventDefault(), P("	");
                return;
            }
        }, [
            i,
            y,
            b,
            D,
            u,
            p,
            T,
            P
        ]), $ = o.useCallback((e)=>{
            const s = x.current;
            if (!(!s || !i)) {
                b();
                try {
                    if (y) {
                        const [r, n] = X(y);
                        if (s.applyCharFormat(r.secIdx, r.paraIdx, r.charOffset, n.charOffset, JSON.stringify(e)), r.paraIdx !== n.paraIdx) {
                            s.beginBatch();
                            const h = s.getParagraphLength(r.secIdx, r.paraIdx);
                            s.applyCharFormat(r.secIdx, r.paraIdx, r.charOffset, h, JSON.stringify(e));
                            for(let a = r.paraIdx + 1; a < n.paraIdx; a++){
                                const c = s.getParagraphLength(r.secIdx, a);
                                s.applyCharFormat(r.secIdx, a, 0, c, JSON.stringify(e));
                            }
                            s.applyCharFormat(r.secIdx, n.paraIdx, 0, n.charOffset, JSON.stringify(e)), s.endBatch();
                        }
                    } else {
                        const r = s.getParagraphLength(i.secIdx, i.paraIdx);
                        i.charOffset < r && s.applyCharFormat(i.secIdx, i.paraIdx, i.charOffset, i.charOffset + 1, JSON.stringify(e));
                    }
                    u();
                } catch (r) {
                    console.error("applyCharFormat error:", r);
                }
            }
        }, [
            i,
            y,
            b,
            u
        ]), ue = o.useCallback(()=>$({
                bold: !0
            }), [
            $
        ]), xe = o.useCallback(()=>$({
                italic: !0
            }), [
            $
        ]), fe = o.useCallback(()=>$({
                underline: !0
            }), [
            $
        ]), ae = o.useCallback((e)=>{
            const s = x.current;
            if (!(!s || !i)) {
                b();
                try {
                    s.applyParaFormat(i.secIdx, i.paraIdx, JSON.stringify({
                        alignment: e
                    })), u();
                } catch  {}
            }
        }, [
            i,
            b,
            u
        ]), We = o.useCallback(()=>{
            const e = x.current;
            if (!(!e || !i)) {
                b();
                try {
                    e.createTable(i.secIdx, i.paraIdx, i.charOffset, G, Q), u(), q(!1);
                } catch (s) {
                    E(s.message);
                }
            }
        }, [
            i,
            G,
            Q,
            b,
            u
        ]), ge = o.useCallback(()=>{
            const e = x.current;
            if (!e || L.current.length === 0) return;
            const s = L.current.pop(), r = e.saveSnapshot();
            B.current.push(r), e.restoreSnapshot(s), u(), K(L.current.length > 0), J(!0);
        }, [
            u
        ]), we = o.useCallback(()=>{
            const e = x.current;
            if (!e || B.current.length === 0) return;
            const s = B.current.pop(), r = e.saveSnapshot();
            L.current.push(r), e.restoreSnapshot(s), u(), K(!0), J(B.current.length > 0);
        }, [
            u
        ]), ye = o.useCallback(async (e)=>{
            const s = x.current;
            if (s) {
                Z(!1);
                try {
                    const r = e === "hwp" ? s.exportHwp() : s.exportHwpx(), n = new Blob([
                        r
                    ], {
                        type: "application/octet-stream"
                    }), h = URL.createObjectURL(n), a = document.createElement("a");
                    a.href = h;
                    const c = M ? M.replace(/\.[^.]+$/, "") : "document";
                    a.download = `${c}.${e}`, a.click(), URL.revokeObjectURL(h);
                } catch (r) {
                    E(`내보내기 실패: ${r.message}`);
                }
            }
        }, [
            M
        ]), Ae = (e)=>{
            const s = parseInt(e.target.value, 10);
            !isNaN(s) && s >= 1 && s <= k.length && R(s - 1);
        };
        o.useEffect(()=>()=>{
                if (x.current) {
                    try {
                        x.current.free();
                    } catch  {}
                    x.current = null;
                }
            }, []);
        const v = k[I] ? Ce(k[I]) : null, me = H && v && H.pageIndex === I ? {
            left: `${(H.x - v.x) / v.w * 100}%`,
            top: `${(H.y - v.y) / v.h * 100}%`,
            height: `${H.height / v.h * 100}%`
        } : null, Fe = v ? Ne.filter((e)=>e.pageIndex === I) : [], ve = k.length > 0;
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(ze, {
                    title: l("site.hwpEditor.title"),
                    path: "/hwp-editor"
                }),
                t.jsx("section", {
                    className: "page-header",
                    children: t.jsxs("div", {
                        className: "container",
                        children: [
                            t.jsx("h2", {
                                children: l("site.hwpEditor.title")
                            }),
                            t.jsx("p", {
                                children: l("site.hwpEditor.subtitle")
                            })
                        ]
                    })
                }),
                t.jsx("section", {
                    className: "section hwp-editor-page",
                    children: t.jsxs("div", {
                        className: "container",
                        children: [
                            oe && t.jsxs("div", {
                                className: "hwp-editor-error",
                                children: [
                                    t.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            t.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }),
                                            t.jsx("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "9",
                                                y2: "15"
                                            }),
                                            t.jsx("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "15",
                                                y2: "15"
                                            })
                                        ]
                                    }),
                                    l("site.hwpEditor.wasmError"),
                                    ": ",
                                    oe
                                ]
                            }),
                            he && t.jsxs("div", {
                                className: "hwp-editor-error",
                                children: [
                                    t.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            t.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }),
                                            t.jsx("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "9",
                                                y2: "15"
                                            }),
                                            t.jsx("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "15",
                                                y2: "15"
                                            })
                                        ]
                                    }),
                                    he,
                                    t.jsx("button", {
                                        onClick: ()=>E(""),
                                        style: {
                                            marginLeft: "auto",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            color: "inherit",
                                            fontSize: "1.1rem"
                                        },
                                        children: "×"
                                    })
                                ]
                            }),
                            S && t.jsxs("div", {
                                className: "hwp-editor-loading",
                                children: [
                                    t.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    t.jsx("p", {
                                        children: l("site.hwpEditor.wasmLoading")
                                    })
                                ]
                            }),
                            !S && !ve && t.jsx("div", {
                                className: `hwp-editor-container ${Le ? "drag-over" : ""}`,
                                onDragOver: (e)=>{
                                    e.preventDefault(), ee(!0);
                                },
                                onDragLeave: ()=>ee(!1),
                                onDrop: Re,
                                children: t.jsxs("div", {
                                    className: "hwp-editor-empty",
                                    children: [
                                        t.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "48",
                                            height: "48",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            children: [
                                                t.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                }),
                                                t.jsx("polyline", {
                                                    points: "14 2 14 8 20 8"
                                                }),
                                                t.jsx("line", {
                                                    x1: "12",
                                                    y1: "18",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                t.jsx("line", {
                                                    x1: "9",
                                                    y1: "15",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        t.jsx("h3", {
                                            children: l("site.hwpEditor.dropOrNew")
                                        }),
                                        t.jsx("p", {
                                            children: l("site.hwpEditor.clickToEdit")
                                        }),
                                        t.jsxs("div", {
                                            className: "hwp-editor-empty-actions",
                                            children: [
                                                t.jsxs("button", {
                                                    className: "hwp-empty-btn primary",
                                                    onClick: de,
                                                    disabled: !w,
                                                    children: [
                                                        t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("path", {
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                }),
                                                                t.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8"
                                                                })
                                                            ]
                                                        }),
                                                        l("site.hwpEditor.newDoc")
                                                    ]
                                                }),
                                                t.jsxs("button", {
                                                    className: "hwp-empty-btn",
                                                    onClick: pe,
                                                    disabled: !w,
                                                    children: [
                                                        t.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: t.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        }),
                                                        l("site.hwpEditor.openFile")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            ve && t.jsxs(t.Fragment, {
                                children: [
                                    t.jsxs("div", {
                                        className: "hwp-editor-toolbar",
                                        children: [
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: de,
                                                        title: l("site.hwpEditor.newDoc"),
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("path", {
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                }),
                                                                t.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: pe,
                                                        title: l("site.hwpEditor.openFile"),
                                                        children: t.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: t.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ue,
                                                        disabled: !i,
                                                        title: `${l("site.hwpEditor.bold")} (Ctrl+B)`,
                                                        children: t.jsx("strong", {
                                                            children: "B"
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: xe,
                                                        disabled: !i,
                                                        title: `${l("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        children: t.jsx("em", {
                                                            children: "I"
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: fe,
                                                        disabled: !i,
                                                        title: `${l("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        children: t.jsx("span", {
                                                            style: {
                                                                textDecoration: "underline"
                                                            },
                                                            children: "U"
                                                        })
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>ae("left"),
                                                        disabled: !i,
                                                        title: l("site.hwpEditor.alignLeft"),
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "17",
                                                                    y1: "10",
                                                                    x2: "3",
                                                                    y2: "10"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "17",
                                                                    y1: "14",
                                                                    x2: "3",
                                                                    y2: "14"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>ae("center"),
                                                        disabled: !i,
                                                        title: l("site.hwpEditor.alignCenter"),
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "18",
                                                                    y1: "10",
                                                                    x2: "6",
                                                                    y2: "10"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "18",
                                                                    y1: "14",
                                                                    x2: "6",
                                                                    y2: "14"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>ae("right"),
                                                        disabled: !i,
                                                        title: l("site.hwpEditor.alignRight"),
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "10",
                                                                    x2: "7",
                                                                    y2: "10"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "14",
                                                                    x2: "7",
                                                                    y2: "14"
                                                                }),
                                                                t.jsx("line", {
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
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                style: {
                                                    position: "relative"
                                                },
                                                ref: se,
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>q(!z),
                                                        disabled: !i,
                                                        title: l("site.hwpEditor.insertTable"),
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "9",
                                                                    x2: "21",
                                                                    y2: "9"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "15",
                                                                    x2: "21",
                                                                    y2: "15"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "3",
                                                                    x2: "9",
                                                                    y2: "21"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "15",
                                                                    y1: "3",
                                                                    x2: "15",
                                                                    y2: "21"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    z && t.jsxs("div", {
                                                        className: "hwp-table-dialog",
                                                        children: [
                                                            t.jsxs("div", {
                                                                className: "hwp-table-dialog-row",
                                                                children: [
                                                                    t.jsxs("div", {
                                                                        children: [
                                                                            t.jsx("label", {
                                                                                children: "Rows"
                                                                            }),
                                                                            t.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 20,
                                                                                value: G,
                                                                                onChange: (e)=>Se(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsxs("div", {
                                                                        children: [
                                                                            t.jsx("label", {
                                                                                children: "Cols"
                                                                            }),
                                                                            t.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 10,
                                                                                value: Q,
                                                                                onChange: (e)=>Ee(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            t.jsx("button", {
                                                                onClick: We,
                                                                children: l("site.hwpEditor.insertTable")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ge,
                                                        disabled: !De,
                                                        title: `${l("site.hwpEditor.undo")} (Ctrl+Z)`,
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("polyline", {
                                                                    points: "1 4 1 10 7 10"
                                                                }),
                                                                t.jsx("path", {
                                                                    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: we,
                                                        disabled: !Pe,
                                                        title: `${l("site.hwpEditor.redo")} (Ctrl+Y)`,
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("polyline", {
                                                                    points: "23 4 23 10 17 10"
                                                                }),
                                                                t.jsx("path", {
                                                                    d: "M20.49 15a9 9 0 1 1-2.13-9.36L23 10"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-spacer"
                                            }),
                                            M && t.jsxs("span", {
                                                style: {
                                                    fontSize: "0.82rem",
                                                    color: "var(--text-secondary)",
                                                    marginRight: 8
                                                },
                                                children: [
                                                    M,
                                                    Oe ? " *" : ""
                                                ]
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-export-wrapper",
                                                ref: re,
                                                children: [
                                                    t.jsxs("button", {
                                                        className: "hwp-toolbar-btn",
                                                        onClick: ()=>Z(!_),
                                                        children: [
                                                            t.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                width: "16",
                                                                height: "16",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    t.jsx("path", {
                                                                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                                    }),
                                                                    t.jsx("polyline", {
                                                                        points: "7 10 12 15 17 10"
                                                                    }),
                                                                    t.jsx("line", {
                                                                        x1: "12",
                                                                        y1: "15",
                                                                        x2: "12",
                                                                        y2: "3"
                                                                    })
                                                                ]
                                                            }),
                                                            t.jsxs("span", {
                                                                children: [
                                                                    l("site.hwpEditor.export"),
                                                                    " ▾"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    _ && t.jsxs("div", {
                                                        className: "hwp-export-dropdown",
                                                        children: [
                                                            t.jsx("button", {
                                                                onClick: ()=>ye("hwp"),
                                                                children: l("site.hwpEditor.exportHwp")
                                                            }),
                                                            t.jsx("button", {
                                                                onClick: ()=>ye("hwpx"),
                                                                children: l("site.hwpEditor.exportHwpx")
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    t.jsxs("div", {
                                        className: "hwp-editor-container",
                                        children: [
                                            t.jsxs("div", {
                                                className: "hwp-canvas-wrapper",
                                                onClick: ()=>A.current?.focus(),
                                                children: [
                                                    t.jsxs("div", {
                                                        className: "hwp-canvas",
                                                        ref: te,
                                                        style: {
                                                            transform: `scale(${ce / 100})`,
                                                            transformOrigin: "top center"
                                                        },
                                                        onClick: Be,
                                                        children: [
                                                            t.jsx("div", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: k[I] || ""
                                                                }
                                                            }),
                                                            v && Fe.map((e, s)=>t.jsx("div", {
                                                                    className: "hwp-selection-overlay",
                                                                    style: {
                                                                        left: `${(e.x - v.x) / v.w * 100}%`,
                                                                        top: `${(e.y - v.y) / v.h * 100}%`,
                                                                        width: `${e.width / v.w * 100}%`,
                                                                        height: `${e.height / v.h * 100}%`
                                                                    }
                                                                }, s)),
                                                            me && t.jsx("div", {
                                                                className: "hwp-cursor",
                                                                style: me
                                                            })
                                                        ]
                                                    }),
                                                    t.jsx("textarea", {
                                                        ref: A,
                                                        className: "hwp-hidden-input",
                                                        onKeyDown: He,
                                                        onCompositionStart: Te,
                                                        onCompositionEnd: $e,
                                                        onInput: Me,
                                                        autoComplete: "off",
                                                        autoCorrect: "off",
                                                        autoCapitalize: "off",
                                                        spellCheck: !1,
                                                        "aria-label": "HWP Editor input"
                                                    })
                                                ]
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-page-bar",
                                                children: [
                                                    t.jsxs("div", {
                                                        className: "hwp-page-nav",
                                                        children: [
                                                            t.jsx("button", {
                                                                className: "hwp-page-btn",
                                                                onClick: ()=>R((e)=>Math.max(0, e - 1)),
                                                                disabled: I === 0,
                                                                children: t.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "14",
                                                                    height: "14",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: t.jsx("polyline", {
                                                                        points: "15 18 9 12 15 6"
                                                                    })
                                                                })
                                                            }),
                                                            t.jsxs("span", {
                                                                className: "hwp-page-info",
                                                                children: [
                                                                    t.jsx("input", {
                                                                        type: "number",
                                                                        className: "hwp-page-input",
                                                                        value: I + 1,
                                                                        onChange: Ae,
                                                                        min: 1,
                                                                        max: k.length
                                                                    }),
                                                                    t.jsxs("span", {
                                                                        children: [
                                                                            "/ ",
                                                                            k.length
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            t.jsx("button", {
                                                                className: "hwp-page-btn",
                                                                onClick: ()=>R((e)=>Math.min(k.length - 1, e + 1)),
                                                                disabled: I === k.length - 1,
                                                                children: t.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "14",
                                                                    height: "14",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: t.jsx("polyline", {
                                                                        points: "9 18 15 12 9 6"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        className: "hwp-zoom-controls",
                                                        children: [
                                                            t.jsx("button", {
                                                                className: "hwp-zoom-btn",
                                                                onClick: ()=>le((e)=>Math.max(50, e - 25)),
                                                                children: "-"
                                                            }),
                                                            t.jsxs("span", {
                                                                className: "hwp-zoom-label",
                                                                children: [
                                                                    ce,
                                                                    "%"
                                                                ]
                                                            }),
                                                            t.jsx("button", {
                                                                className: "hwp-zoom-btn",
                                                                onClick: ()=>le((e)=>Math.min(200, e + 25)),
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
export { Ye as default, __tla };
