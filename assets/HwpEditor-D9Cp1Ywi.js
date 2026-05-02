import { u as lr, r as n, _ as bt, j as t, __tla as __tla_0 } from "./index-DJn6hGqw.js";
import { u as hr, __tla as __tla_1 } from "./useRhwp-CC-fPIaq.js";
import { S as dr } from "./SEOHead-xLAmYFSj.js";
let vr;
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
    function pe(b) {
        const N = parseInt(b.slice(1, 3), 16), E = parseInt(b.slice(3, 5), 16);
        return parseInt(b.slice(5, 7), 16) << 16 | E << 8 | N;
    }
    function jt(b) {
        const N = b & 255, E = b >> 8 & 255, l = b >> 16 & 255;
        return "#" + [
            N,
            E,
            l
        ].map((x)=>x.toString(16).padStart(2, "0")).join("");
    }
    function y(b) {
        try {
            return JSON.parse(b);
        } catch  {
            return null;
        }
    }
    function pr(b) {
        const N = b.match(/viewBox=["']([^"']+)["']/);
        if (!N) return null;
        const E = N[1].split(/[\s,]+/).map(Number);
        return E.length < 4 ? null : {
            x: E[0],
            y: E[1],
            w: E[2],
            h: E[3]
        };
    }
    function ur(b) {
        const N = b.match(/preserveAspectRatio=["']([^"']+)["']/);
        return N ? N[1] : "xMidYMid meet";
    }
    let xr, fr, gr, wr, yr;
    xr = [
        "맑은 고딕",
        "함초롬바탕",
        "함초롬돋움",
        "나눔고딕",
        "나눔명조",
        "바탕",
        "돋움",
        "굴림",
        "Arial",
        "Times New Roman"
    ];
    fr = [
        8,
        9,
        10,
        10.5,
        11,
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        28,
        36,
        48,
        72
    ];
    gr = [
        {
            label: "100%",
            value: 100
        },
        {
            label: "115%",
            value: 115
        },
        {
            label: "130%",
            value: 130
        },
        {
            label: "150%",
            value: 150
        },
        {
            label: "160%",
            value: 160
        },
        {
            label: "200%",
            value: 200
        },
        {
            label: "250%",
            value: 250
        },
        {
            label: "300%",
            value: 300
        }
    ];
    wr = [
        [
            "#000000",
            "#434343",
            "#666666",
            "#999999",
            "#B7B7B7",
            "#CCCCCC",
            "#D9D9D9",
            "#EFEFEF",
            "#F3F3F3",
            "#FFFFFF"
        ],
        [
            "#980000",
            "#FF0000",
            "#FF9900",
            "#FFFF00",
            "#00FF00",
            "#00FFFF",
            "#4A86E8",
            "#0000FF",
            "#9900FF",
            "#FF00FF"
        ],
        [
            "#E6B8AF",
            "#F4CCCC",
            "#FCE5CD",
            "#FFF2CC",
            "#D9EAD3",
            "#D0E0E3",
            "#C9DAF8",
            "#CFE2F3",
            "#D9D2E9",
            "#EAD1DC"
        ]
    ];
    yr = 100;
    vr = ()=>{
        const { ready: b, loading: N, error: E } = hr(), { t: l } = lr(), x = n.useRef(null), [Pe, mt] = n.useState([]), [K, vt] = n.useState(0), [$, V] = n.useState(0), [ue, xe] = n.useState("1"), [Q, ze] = n.useState(100), [J, Ct] = n.useState(""), [kt, Te] = n.useState(!1), C = n.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [It, He] = n.useState(null), [R, Y] = n.useState(null), d = n.useRef(null), [, I] = n.useState(!1), [Ot, T] = n.useState([]), X = n.useRef({}), [O, St] = n.useState({
            fontFamily: "맑은 고딕",
            fontSize: 1e3,
            bold: !1,
            italic: !1,
            underline: !1,
            strikethrough: !1,
            textColor: 0,
            highlight: pe("#FFFF00")
        }), [q, Nt] = n.useState({
            alignment: "justify",
            lineSpacing: 160,
            marginLeft: 0,
            marginRight: 0,
            indent: 0
        }), B = n.useRef([]), H = n.useRef([]), [Et, G] = n.useState(!1), [Rt, ee] = n.useState(!1), te = n.useRef(!1), U = n.useRef(null), Me = n.useRef({}), [Ft, fe] = n.useState(!1), [Ae, D] = n.useState(""), [ge, re] = n.useState(!1), [we, se] = n.useState(!1), [ye, ne] = n.useState(!1), [be, ae] = n.useState(!1), [je, ce] = n.useState(!1), [me, oe] = n.useState(!1), [ve, ie] = n.useState(!1), [Ce, Dt] = n.useState(3), [ke, Lt] = n.useState(3), [Bt, Pt] = n.useState("#000000"), [zt, Tt] = n.useState("#FFFF00"), [Ie, We] = n.useState("맑은 고딕"), [$e, Ue] = n.useState("10"), [_e, le] = n.useState(!1), [L, Ht] = n.useState(""), [Z, Mt] = n.useState(""), [M, At] = n.useState(!1), [Ke, A] = n.useState(""), Ve = n.useRef(null), Je = n.useRef(null), Ye = n.useRef(null), Ze = n.useRef(null), Qe = n.useRef(null), Xe = n.useRef(null), qe = n.useRef(null), Ge = n.useRef(null), et = n.useRef(null), tt = n.useRef(null), rt = n.useRef(null), st = n.useRef(null), nt = n.useRef(null), at = n.useRef(null), m = n.useCallback((e)=>{
            C.current = e, He(e);
        }, []), u = n.useCallback(()=>{
            const e = x.current;
            if (e) try {
                const s = e.pageCount();
                vt(s);
                const r = [];
                for(let c = 0; c < s; c++){
                    const a = e.renderPageSvg(c);
                    r.push(a);
                    const o = pr(a);
                    o && (X.current[c] = o);
                }
                mt(r);
            } catch (s) {
                D(String(s));
            }
        }, []), w = n.useCallback((e)=>{
            const s = x.current;
            if (!s) {
                Y(null);
                return;
            }
            try {
                const r = y(s.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                r && r.x !== void 0 ? (Y({
                    pageIndex: r.pageIndex ?? 0,
                    x: r.x,
                    y: r.y,
                    height: r.height
                }), V(r.pageIndex ?? 0)) : Y(null);
            } catch  {
                Y(null);
            }
        }, []), F = n.useCallback((e)=>{
            const s = x.current;
            if (s) {
                try {
                    const r = s.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), c = y(r);
                    if (c) {
                        const a = c.fontFamily || "맑은 고딕", o = c.fontSize || 1e3;
                        We(a), Ue(String(Math.round(o / 100))), St({
                            fontFamily: a,
                            fontSize: o,
                            bold: !!c.bold,
                            italic: !!c.italic,
                            underline: !!c.underline,
                            strikethrough: !!c.strikethrough,
                            textColor: c.textColor ?? 0,
                            highlight: c.highlight ?? pe("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const r = s.getParaPropertiesAt(e.secIdx, e.paraIdx), c = y(r);
                    c && Nt({
                        alignment: c.alignment || "justify",
                        lineSpacing: c.lineSpacing || 160,
                        marginLeft: c.marginLeft || 0,
                        marginRight: c.marginRight || 0,
                        indent: c.indent || 0
                    });
                } catch  {}
            }
        }, []), S = n.useCallback((e, s)=>{
            const r = x.current;
            if (!r) {
                T([]);
                return;
            }
            let c = e.paraIdx, a = e.charOffset, o = s.paraIdx, i = s.charOffset;
            (c > o || c === o && a > i) && ([c, o] = [
                o,
                c
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const h = r.getSelectionRects(e.secIdx, c, a, o, i), p = JSON.parse(h);
                T(Array.isArray(p) ? p : []);
            } catch  {
                T([]);
            }
        }, []), f = n.useCallback((e, s = !0)=>{
            m(e), s ? (d.current = null, I(!1), T([])) : d.current && S(d.current, e), w(e), F(e), Te(!0), U.current?.focus();
        }, [
            m,
            w,
            F,
            S
        ]), g = n.useCallback(()=>{
            const e = x.current;
            if (e) try {
                const s = e.saveSnapshot();
                if (B.current.push(s), B.current.length > yr) {
                    const r = B.current.shift();
                    if (r !== void 0) try {
                        e.discardSnapshot(r);
                    } catch  {}
                }
                H.current.forEach((r)=>{
                    try {
                        e.discardSnapshot(r);
                    } catch  {}
                }), H.current = [], G(!0), ee(!1);
            } catch  {}
        }, []), Oe = n.useCallback(()=>{
            const e = x.current;
            if (!e || B.current.length === 0) return;
            const s = B.current.pop();
            try {
                const c = e.saveSnapshot();
                H.current.push(c), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            u(), G(B.current.length > 0), ee(!0);
            const r = C.current;
            w(r), F(r);
        }, [
            u,
            w,
            F
        ]), Se = n.useCallback(()=>{
            const e = x.current;
            if (!e || H.current.length === 0) return;
            const s = H.current.pop();
            try {
                const c = e.saveSnapshot();
                B.current.push(c), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            u(), G(!0), ee(H.current.length > 0);
            const r = C.current;
            w(r), F(r);
        }, [
            u,
            w,
            F
        ]), he = n.useCallback((e, s)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (x.current && x.current !== e) try {
                x.current.free();
            } catch  {}
            x.current = e, B.current = [], H.current = [], G(!1), ee(!1), Ct(s), Te(!1), He(null), Y(null), d.current = null, I(!1), T([]), V(0), D(""), X.current = {}, u();
            try {
                const r = y(e.getCaretPosition());
                if (r && r.paragraphIndex !== void 0) {
                    const c = {
                        secIdx: r.sectionIndex ?? 0,
                        paraIdx: r.paragraphIndex,
                        charOffset: r.charOffset ?? 0
                    };
                    m(c), setTimeout(()=>w(c), 80);
                } else {
                    const c = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    m(c), setTimeout(()=>w(c), 80);
                }
            } catch  {
                const r = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                m(r), setTimeout(()=>w(r), 80);
            }
        }, [
            u,
            m,
            w
        ]), ct = n.useCallback(async ()=>{
            if (b) try {
                const { HwpDocument: e } = await bt(async ()=>{
                    const { HwpDocument: r } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: r
                    };
                }, []), s = e.createEmpty();
                y(s.createBlankDocument()), he(s, "새 문서.hwp");
            } catch (e) {
                D(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            b,
            he
        ]), de = n.useCallback(async (e)=>{
            if (!b) return;
            const s = e.name.split(".").pop()?.toLowerCase();
            if (s !== "hwp" && s !== "hwpx") {
                D(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: r } = await bt(async ()=>{
                    const { HwpDocument: o } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: o
                    };
                }, []), c = new Uint8Array(await e.arrayBuffer()), a = new r(c);
                he(a, e.name);
            } catch (r) {
                D(`파일 열기 실패: ${r.message}`);
            }
        }, [
            b,
            he
        ]), ot = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && de(e.files[0]);
            }, e.click();
        }, [
            de
        ]), it = n.useCallback((e)=>{
            e.preventDefault(), fe(!0);
        }, []), lt = n.useCallback(()=>fe(!1), []), ht = n.useCallback((e)=>{
            e.preventDefault(), fe(!1);
            const s = e.dataTransfer.files[0];
            s && de(s);
        }, [
            de
        ]), Wt = n.useCallback((e, s)=>{
            const r = x.current;
            if (!r) return;
            const c = Me.current[s];
            if (!c) return;
            const a = X.current[s];
            if (!a) return;
            const o = c.querySelector("svg:not(.hwp-overlay-svg)");
            let i, h;
            const p = o?.getScreenCTM();
            if (p) {
                const v = new DOMPoint(e.clientX, e.clientY).matrixTransform(p.inverse());
                i = v.x, h = v.y;
            } else {
                const j = o ? o.getBoundingClientRect() : c.getBoundingClientRect();
                i = (e.clientX - j.left) / j.width * a.w + a.x, h = (e.clientY - j.top) / j.height * a.h + a.y;
            }
            try {
                const j = r.hitTest(s, i, h), v = y(j);
                if (!v) return;
                const Be = v.paragraphIndex ?? v.paraIndex ?? 0, z = {
                    secIdx: v.sectionIndex ?? 0,
                    paraIdx: Be,
                    charOffset: v.charOffset ?? 0
                };
                e.shiftKey && d.current ? (m(z), S(d.current, z), I(!0), w(z), F(z)) : (d.current = {
                    ...z
                }, f(z, !0));
            } catch  {}
            U.current?.focus();
        }, [
            m,
            f,
            S,
            w,
            F
        ]), P = n.useCallback(()=>{
            const e = x.current, s = d.current, r = C.current;
            if (!e || !s) return null;
            let c = s.paraIdx, a = s.charOffset, o = r.paraIdx, i = r.charOffset;
            (c > o || c === o && a > i) && ([c, o] = [
                o,
                c
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const h = e.deleteRange(r.secIdx, c, a, o, i), p = y(h);
                return d.current = null, I(!1), T([]), p?.ok ? {
                    secIdx: r.secIdx,
                    paraIdx: p.paraIdx,
                    charOffset: p.charOffset
                } : {
                    ...s
                };
            } catch  {
                return d.current = null, I(!1), T([]), {
                    ...s
                };
            }
        }, []), W = n.useCallback((e)=>{
            const s = x.current;
            if (!s) return;
            g();
            let r = C.current;
            if (d.current) {
                const c = P();
                c && (r = c);
            }
            try {
                const c = s.insertText(r.secIdx, r.paraIdx, r.charOffset, e), o = y(c)?.charOffset ?? r.charOffset + e.length, i = {
                    ...r,
                    charOffset: o
                };
                u(), f(i);
            } catch (c) {
                console.error("insertText failed:", c);
            }
        }, [
            g,
            P,
            f,
            u
        ]), Ne = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            if (d.current) {
                g();
                const r = P();
                r && f(r), u();
                return;
            }
            const s = C.current;
            g();
            try {
                if (s.charOffset > 0) {
                    const r = e.deleteText(s.secIdx, s.paraIdx, s.charOffset - 1, 1), a = y(r)?.charOffset ?? s.charOffset - 1;
                    f({
                        ...s,
                        charOffset: a
                    });
                } else if (s.paraIdx > 0) {
                    const r = e.getParagraphLength(s.secIdx, s.paraIdx - 1), c = e.mergeParagraph(s.secIdx, s.paraIdx), a = y(c);
                    f({
                        secIdx: s.secIdx,
                        paraIdx: a?.paraIdx ?? s.paraIdx - 1,
                        charOffset: a?.charOffset ?? r
                    });
                }
            } catch (r) {
                console.error("deleteCharBefore failed:", r);
            }
            u();
        }, [
            P,
            g,
            f,
            u
        ]), dt = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            if (d.current) {
                g();
                const r = P();
                r && f(r), u();
                return;
            }
            const s = C.current;
            g();
            try {
                const r = e.getParagraphLength(s.secIdx, s.paraIdx);
                if (s.charOffset < r) e.deleteText(s.secIdx, s.paraIdx, s.charOffset, 1), f({
                    ...s
                });
                else {
                    const c = e.getParagraphCount(s.secIdx);
                    if (s.paraIdx < c - 1) {
                        const a = e.mergeParagraph(s.secIdx, s.paraIdx + 1), o = y(a);
                        f({
                            secIdx: s.secIdx,
                            paraIdx: o?.paraIdx ?? s.paraIdx,
                            charOffset: o?.charOffset ?? s.charOffset
                        });
                    }
                }
            } catch (r) {
                console.error("deleteCharAfter failed:", r);
            }
            u();
        }, [
            P,
            g,
            f,
            u
        ]), k = n.useCallback((e)=>{
            const s = x.current;
            if (!s) return;
            const r = C.current;
            if (g(), d.current) {
                const c = d.current;
                let a = c.paraIdx, o = c.charOffset, i = r.paraIdx, h = r.charOffset;
                (a > i || a === i && o > h) && ([a, i] = [
                    i,
                    a
                ], [o, h] = [
                    h,
                    o
                ]);
                try {
                    s.beginBatch();
                    for(let p = a; p <= i; p++){
                        const j = p === a ? o : 0, v = p === i ? h : s.getParagraphLength(r.secIdx, p);
                        s.applyCharFormat(r.secIdx, p, j, v, JSON.stringify(e));
                    }
                    s.endBatch();
                } catch  {
                    try {
                        s.endBatch();
                    } catch  {}
                }
            } else try {
                const c = s.getParagraphLength(r.secIdx, r.paraIdx), a = Math.min(r.charOffset + 1, c);
                r.charOffset < a && s.applyCharFormat(r.secIdx, r.paraIdx, r.charOffset, a, JSON.stringify(e));
            } catch  {}
            u(), F(r);
        }, [
            g,
            u,
            F
        ]), _ = n.useCallback((e)=>{
            const s = x.current;
            if (!s) return;
            const r = C.current;
            g();
            try {
                s.applyParaFormat(r.secIdx, r.paraIdx, JSON.stringify(e));
            } catch  {}
            u(), F(r);
        }, [
            g,
            u,
            F
        ]), Ee = n.useCallback(()=>k({
                bold: !O.bold
            }), [
            k,
            O.bold
        ]), Re = n.useCallback(()=>k({
                italic: !O.italic
            }), [
            k,
            O.italic
        ]), Fe = n.useCallback(()=>k({
                underline: !O.underline
            }), [
            k,
            O.underline
        ]), $t = n.useCallback(()=>k({
                strikethrough: !O.strikethrough
            }), [
            k,
            O.strikethrough
        ]), Ut = n.useCallback((e)=>{
            k({
                fontFamily: e
            }), We(e), re(!1);
        }, [
            k
        ]), _t = n.useCallback((e)=>{
            k({
                fontSize: Math.round(e * 100)
            }), Ue(String(e)), se(!1);
        }, [
            k
        ]), Kt = n.useCallback((e)=>{
            _({
                alignment: e
            });
        }, [
            _
        ]), Vt = n.useCallback((e)=>{
            _({
                lineSpacing: e
            }), oe(!1);
        }, [
            _
        ]), pt = n.useCallback((e)=>{
            const s = Math.max(0, q.marginLeft + e * 800);
            _({
                marginLeft: s
            });
        }, [
            _,
            q.marginLeft
        ]), Jt = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            const s = C.current;
            g();
            try {
                const r = e.ensureDefaultBullet("●");
                e.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify({
                    numberingId: r,
                    numberingLevel: 0
                }));
            } catch  {}
            u();
        }, [
            g,
            u
        ]), Yt = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            const s = C.current;
            g();
            try {
                const r = e.ensureDefaultNumbering();
                e.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify({
                    numberingId: r,
                    numberingLevel: 0
                }));
            } catch  {}
            u();
        }, [
            g,
            u
        ]), Zt = n.useCallback((e)=>{
            k({
                textColor: pe(e)
            }), ne(!1);
        }, [
            k
        ]), Qt = n.useCallback((e)=>{
            k({
                highlight: pe(e)
            }), ae(!1);
        }, [
            k
        ]), Xt = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            const s = C.current;
            g();
            try {
                const r = e.createTable(s.secIdx, s.paraIdx, s.charOffset, Ce, ke), c = y(r);
                c?.ok && f({
                    ...s,
                    paraIdx: c.paraIdx ?? s.paraIdx,
                    charOffset: 0
                });
            } catch (r) {
                D(r.message);
            }
            u(), ie(!1);
        }, [
            g,
            f,
            u,
            Ce,
            ke
        ]), qt = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (s)=>{
                const r = s.target.files?.[0];
                if (!r) return;
                const c = x.current;
                if (!c) return;
                const a = C.current;
                g();
                try {
                    const o = new Uint8Array(await r.arrayBuffer()), i = new Image, h = URL.createObjectURL(r);
                    i.onload = ()=>{
                        URL.revokeObjectURL(h);
                        const p = i.naturalWidth, j = i.naturalHeight, v = Math.min(Math.round(p / 96 * 7200), 48e3), Be = Math.round(j / p * v), z = r.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            c.insertPicture(a.secIdx, a.paraIdx, a.charOffset, o, v, Be, p, j, z, r.name), f({
                                ...a,
                                charOffset: a.charOffset + 1
                            });
                        } catch (ir) {
                            D(ir.message);
                        }
                        u();
                    }, i.src = h;
                } catch (o) {
                    D(o.message);
                }
            }, e.click();
        }, [
            g,
            f,
            u
        ]), Gt = n.useCallback(()=>{
            const e = x.current;
            if (!e) return;
            const s = C.current;
            g();
            try {
                e.insertPageBreak(s.secIdx, s.paraIdx, s.charOffset);
            } catch  {}
            u();
        }, [
            g,
            u
        ]), ut = n.useCallback(()=>{
            const e = x.current;
            if (!e || !L) return;
            const s = C.current;
            try {
                const r = e.searchText(L, s.secIdx, s.paraIdx, s.charOffset, !0, M), c = y(r);
                if (c?.found) {
                    const a = {
                        secIdx: c.sectionIndex ?? s.secIdx,
                        paraIdx: c.paragraphIndex ?? c.paraIdx ?? s.paraIdx,
                        charOffset: c.charOffset ?? 0
                    };
                    f(a), A("");
                } else A(l("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            L,
            M,
            f,
            l
        ]), xt = n.useCallback(()=>{
            const e = x.current;
            if (!(!e || !L)) {
                g();
                try {
                    const s = e.replaceOne(L, Z, M);
                    y(s)?.ok ? (u(), A(l("site.hwpEditor.replaced"))) : A(l("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            L,
            Z,
            M,
            g,
            u,
            l
        ]), er = n.useCallback(()=>{
            const e = x.current;
            if (!(!e || !L)) {
                g();
                try {
                    const s = e.replaceAll(L, Z, M), r = y(s);
                    u(), A(`${l("site.hwpEditor.replaced")} ${r?.count ?? 0}`);
                } catch  {}
            }
        }, [
            L,
            Z,
            M,
            g,
            u,
            l
        ]), ft = n.useCallback((e)=>{
            const s = x.current;
            if (s) {
                try {
                    const r = e === "hwp" ? s.exportHwp() : s.exportHwpx(), c = new Blob([
                        r
                    ], {
                        type: "application/octet-stream"
                    }), a = URL.createObjectURL(c), o = document.createElement("a");
                    o.href = a;
                    const i = J ? J.replace(/\.[^.]+$/, "") : "document";
                    o.download = `${i}.${e}`, o.click(), URL.revokeObjectURL(a);
                } catch (r) {
                    D(`내보내기 실패: ${r.message}`);
                }
                ce(!1);
            }
        }, [
            J
        ]), tr = n.useCallback((e)=>{
            if (te.current) return;
            const s = x.current;
            if (!s || !C.current) return;
            const r = C.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), Oe();
                        return;
                    case "y":
                        e.preventDefault(), Se();
                        return;
                    case "b":
                        e.preventDefault(), Ee();
                        return;
                    case "i":
                        e.preventDefault(), Re();
                        return;
                    case "u":
                        e.preventDefault(), Fe();
                        return;
                    case "f":
                        e.preventDefault(), le(!0);
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const a = s.getSectionCount();
                                if (a === 0) return;
                                const o = a - 1, i = s.getParagraphCount(o) - 1, h = s.getParagraphLength(o, i), p = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, j = {
                                    secIdx: o,
                                    paraIdx: i,
                                    charOffset: h
                                };
                                d.current = p, m(j), S(p, j), I(!0), w(j);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            e.preventDefault();
                            const a = d.current;
                            if (!a) return;
                            let o = a.paraIdx, i = a.charOffset, h = r.paraIdx, p = r.charOffset;
                            (o > h || o === h && i > p) && ([o, h] = [
                                h,
                                o
                            ], [i, p] = [
                                p,
                                i
                            ]);
                            try {
                                const j = s.copySelection(r.secIdx, o, i, h, p), v = y(j);
                                v?.text && navigator.clipboard.writeText(v.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const a = d.current;
                            if (!a) return;
                            let o = a.paraIdx, i = a.charOffset, h = r.paraIdx, p = r.charOffset;
                            (o > h || o === h && i > p) && ([o, h] = [
                                h,
                                o
                            ], [i, p] = [
                                p,
                                i
                            ]);
                            try {
                                const j = s.copySelection(r.secIdx, o, i, h, p), v = y(j);
                                v?.text && navigator.clipboard.writeText(v.text).catch(()=>{});
                            } catch  {}
                            Ne();
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), navigator.clipboard.readText().then((a)=>{
                                a && W(a);
                            }).catch(()=>{});
                            return;
                        }
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    {
                        if (e.preventDefault(), g(), d.current) {
                            const o = P();
                            o && m(o);
                        }
                        const a = C.current;
                        try {
                            const o = s.splitParagraph(a.secIdx, a.paraIdx, a.charOffset), i = y(o), h = {
                                secIdx: a.secIdx,
                                paraIdx: i?.paraIdx ?? a.paraIdx + 1,
                                charOffset: 0
                            };
                            f(h);
                        } catch  {}
                        u();
                        break;
                    }
                case "Backspace":
                    e.preventDefault(), Ne();
                    break;
                case "Delete":
                    e.preventDefault(), dt();
                    break;
                case "ArrowLeft":
                    {
                        e.preventDefault();
                        const a = {
                            ...r
                        };
                        if (r.charOffset > 0) a.charOffset = r.charOffset - 1;
                        else if (r.paraIdx > 0) {
                            a.paraIdx = r.paraIdx - 1;
                            try {
                                a.charOffset = s.getParagraphLength(r.secIdx, a.paraIdx);
                            } catch  {
                                a.charOffset = 0;
                            }
                        } else break;
                        e.shiftKey ? (d.current || (d.current = {
                            ...r
                        }), m(a), S(d.current, a), I(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowRight":
                    {
                        e.preventDefault();
                        const a = {
                            ...r
                        };
                        try {
                            const o = s.getParagraphLength(r.secIdx, r.paraIdx);
                            if (r.charOffset < o) a.charOffset = r.charOffset + 1;
                            else {
                                const i = s.getParagraphCount(r.secIdx);
                                if (r.paraIdx < i - 1) a.paraIdx = r.paraIdx + 1, a.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        e.shiftKey ? (d.current || (d.current = {
                            ...r
                        }), m(a), S(d.current, a), I(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const a = R ? R.x : 0;
                        try {
                            const o = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, -1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(o);
                            if (i) {
                                const h = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (d.current || (d.current = {
                                    ...r
                                }), m(h), S(d.current, h), I(!0), w(h)) : f(h);
                            }
                        } catch  {
                            if (r.paraIdx > 0) {
                                const o = {
                                    ...r,
                                    paraIdx: r.paraIdx - 1
                                };
                                try {
                                    o.charOffset = Math.min(r.charOffset, s.getParagraphLength(r.secIdx, o.paraIdx));
                                } catch  {
                                    o.charOffset = 0;
                                }
                                e.shiftKey ? (d.current || (d.current = {
                                    ...r
                                }), m(o), S(d.current, o), I(!0), w(o)) : f(o);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const a = R ? R.x : 0;
                        try {
                            const o = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, 1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(o);
                            if (i) {
                                const h = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (d.current || (d.current = {
                                    ...r
                                }), m(h), S(d.current, h), I(!0), w(h)) : f(h);
                            }
                        } catch  {
                            try {
                                const o = s.getParagraphCount(r.secIdx);
                                if (r.paraIdx < o - 1) {
                                    const i = {
                                        ...r,
                                        paraIdx: r.paraIdx + 1
                                    };
                                    i.charOffset = Math.min(r.charOffset, s.getParagraphLength(r.secIdx, i.paraIdx)), e.shiftKey ? (d.current || (d.current = {
                                        ...r
                                    }), m(i), S(d.current, i), I(!0), w(i)) : f(i);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault();
                        try {
                            const a = y(s.getLineInfo(r.secIdx, r.paraIdx, r.charOffset)), o = {
                                ...r,
                                charOffset: a ? a.charStart : 0
                            };
                            e.shiftKey ? (d.current || (d.current = {
                                ...r
                            }), m(o), S(d.current, o), I(!0), w(o)) : f(o);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        try {
                            const a = y(s.getLineInfo(r.secIdx, r.paraIdx, r.charOffset)), o = s.getParagraphLength(r.secIdx, r.paraIdx), i = {
                                ...r,
                                charOffset: a ? Math.min(a.charEnd, o) : o
                            };
                            e.shiftKey ? (d.current || (d.current = {
                                ...r
                            }), m(i), S(d.current, i), I(!0), w(i)) : f(i);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), W("	");
                    break;
                case "Escape":
                    le(!1), re(!1), se(!1), ne(!1), ae(!1), ce(!1), oe(!1), ie(!1);
                    break;
            }
        }, [
            It,
            R,
            Oe,
            Se,
            Ee,
            Re,
            Fe,
            W,
            P,
            Ne,
            dt,
            g,
            f,
            u,
            S,
            w,
            m
        ]), rr = n.useCallback(()=>{
            te.current = !0;
        }, []), sr = n.useCallback((e)=>{
            te.current = !1;
            const s = e.data;
            s && W(s), U.current && (U.current.value = "");
        }, [
            W
        ]), nr = n.useCallback((e)=>{
            if (te.current) return;
            const s = e.target, r = s.value;
            r && (W(r), s.value = "");
        }, [
            W
        ]), ar = n.useCallback((e)=>{
            xe(e.target.value);
        }, []), gt = n.useCallback(()=>{
            const e = parseInt(ue, 10);
            !isNaN(e) && e >= 1 && e <= K ? V(e - 1) : xe(String($ + 1));
        }, [
            ue,
            K,
            $
        ]), cr = n.useCallback(()=>ze((e)=>Math.min(e + 10, 200)), []), or = n.useCallback(()=>ze((e)=>Math.max(e - 10, 30)), []);
        n.useEffect(()=>{
            xe(String($ + 1));
        }, [
            $
        ]), n.useEffect(()=>{
            const e = (s)=>{
                const r = s.target, c = (a, o)=>!a.current?.contains(r) && !o.current?.contains(r);
                ge && c(Ve, Je) && re(!1), we && c(Ye, Ze) && se(!1), ye && c(Qe, Xe) && ne(!1), be && c(qe, Ge) && ae(!1), je && c(et, tt) && ce(!1), me && c(rt, st) && oe(!1), ve && c(at, nt) && ie(!1);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            ge,
            we,
            ye,
            be,
            je,
            me,
            ve
        ]), n.useEffect(()=>()=>{
                if (x.current) {
                    try {
                        x.current.free();
                    } catch  {}
                    x.current = null;
                }
            }, []);
        const wt = Pe.length > 0, De = jt(O.textColor), Le = jt(O.highlight), yt = (e, s, r, c)=>t.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    t.jsx("div", {
                        className: "hwp-color-grid",
                        children: wr.map((a, o)=>t.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: a.map((i)=>t.jsx("div", {
                                        className: `hwp-color-swatch${e.toUpperCase() === i.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: i
                                        },
                                        title: i,
                                        onClick: ()=>c(i)
                                    }, i))
                            }, o))
                    }),
                    t.jsxs("div", {
                        className: "hwp-color-custom",
                        children: [
                            t.jsx("input", {
                                type: "color",
                                value: s,
                                onChange: (a)=>r(a.target.value)
                            }),
                            t.jsx("button", {
                                onClick: ()=>c(s),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(dr, {
                    title: l("site.hwpEditor.title"),
                    description: l("site.hwpEditor.subtitle")
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
                            Ae && t.jsxs("div", {
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
                                    t.jsx("span", {
                                        children: Ae
                                    }),
                                    t.jsx("button", {
                                        onClick: ()=>D(""),
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
                            E && !N && t.jsxs("div", {
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
                                    t.jsxs("span", {
                                        children: [
                                            l("site.hwpEditor.wasmError"),
                                            ": ",
                                            E
                                        ]
                                    })
                                ]
                            }),
                            N && t.jsxs("div", {
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
                            b && !wt && !N && t.jsx("div", {
                                className: `hwp-editor-container${Ft ? " drag-over" : ""}`,
                                onDragOver: it,
                                onDragLeave: lt,
                                onDrop: ht,
                                children: t.jsxs("div", {
                                    className: "hwp-editor-empty",
                                    children: [
                                        t.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "56",
                                            height: "56",
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
                                                    onClick: ct,
                                                    disabled: !b,
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
                                                    onClick: ot,
                                                    disabled: !b,
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
                            wt && t.jsxs("div", {
                                className: "hwp-editor-container",
                                children: [
                                    t.jsxs("div", {
                                        className: "hwp-editor-toolbar",
                                        children: [
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.newDoc"),
                                                        onClick: ct,
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
                                                        title: l("site.hwpEditor.openFile"),
                                                        onClick: ot,
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
                                                    }),
                                                    t.jsxs("div", {
                                                        className: "hwp-export-wrapper",
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: et,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.export"),
                                                                onClick: ()=>ce((e)=>!e),
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
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            je && t.jsxs("div", {
                                                                ref: tt,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    t.jsx("button", {
                                                                        onClick: ()=>ft("hwp"),
                                                                        children: l("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    t.jsx("button", {
                                                                        onClick: ()=>ft("hwpx"),
                                                                        children: l("site.hwpEditor.exportHwpx")
                                                                    })
                                                                ]
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
                                                        title: `${l("site.hwpEditor.undo")} (Ctrl+Z)`,
                                                        onClick: Oe,
                                                        disabled: !Et,
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
                                                        title: `${l("site.hwpEditor.redo")} (Ctrl+Y)`,
                                                        onClick: Se,
                                                        disabled: !Rt,
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
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: Ve,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.font"),
                                                                onClick: ()=>re((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontFamily: Ie,
                                                                            maxWidth: 96,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap",
                                                                            display: "inline-block"
                                                                        },
                                                                        children: Ie
                                                                    }),
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 2
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            ge && t.jsx("div", {
                                                                ref: Je,
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: xr.map((e)=>t.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: Ie === e ? "active" : "",
                                                                        onClick: ()=>Ut(e),
                                                                        children: e
                                                                    }, e))
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: Ye,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.fontSize"),
                                                                onClick: ()=>se((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        children: $e
                                                                    }),
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 2
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            we && t.jsx("div", {
                                                                ref: Ze,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: fr.map((e)=>t.jsx("button", {
                                                                        className: parseFloat($e) === e ? "active" : "",
                                                                        onClick: ()=>_t(e),
                                                                        children: e
                                                                    }, e))
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
                                                        className: `hwp-toolbar-btn${O.bold ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.bold")} (Ctrl+B)`,
                                                        onClick: Ee,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.italic ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: Re,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.underline ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: Fe,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.strikethrough ? " active" : ""}`,
                                                        title: l("site.hwpEditor.strikethrough"),
                                                        onClick: $t,
                                                        style: {
                                                            textDecoration: "line-through"
                                                        },
                                                        children: "S"
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: Qe,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.textColor"),
                                                                onClick: ()=>ne((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: De,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
                                                                    }),
                                                                    t.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: De
                                                                        }
                                                                    }),
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 1
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            ye && t.jsx("div", {
                                                                ref: Xe,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: yt(De, Bt, Pt, Zt)
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: qe,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.highlight"),
                                                                onClick: ()=>ae((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: Le,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    t.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: Le
                                                                        }
                                                                    }),
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 1
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            be && t.jsx("div", {
                                                                ref: Ge,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: yt(Le, zt, Tt, Qt)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    "left",
                                                    "center",
                                                    "right",
                                                    "justify"
                                                ].map((e)=>{
                                                    const s = {
                                                        left: l("site.hwpEditor.alignLeft"),
                                                        center: l("site.hwpEditor.alignCenter"),
                                                        right: l("site.hwpEditor.alignRight"),
                                                        justify: l("site.hwpEditor.alignJustify")
                                                    }, r = {
                                                        left: t.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        center: t.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "2.5",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "3.5",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        right: t.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "5",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "7",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        justify: t.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "5",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                t.jsx("rect", {
                                                                    x: "0",
                                                                    y: "13",
                                                                    width: "16",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        })
                                                    };
                                                    return t.jsx("button", {
                                                        className: `hwp-toolbar-btn${q.alignment === e ? " active" : ""}`,
                                                        title: s[e],
                                                        onClick: ()=>Kt(e),
                                                        children: r[e]
                                                    }, e);
                                                })
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: t.jsxs("div", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    children: [
                                                        t.jsxs("button", {
                                                            ref: rt,
                                                            className: "hwp-toolbar-btn",
                                                            title: l("site.hwpEditor.lineSpacing"),
                                                            onClick: ()=>oe((e)=>!e),
                                                            children: [
                                                                t.jsxs("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: [
                                                                        t.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "6",
                                                                            x2: "21",
                                                                            y2: "6"
                                                                        }),
                                                                        t.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "12",
                                                                            x2: "21",
                                                                            y2: "12"
                                                                        }),
                                                                        t.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "18",
                                                                            x2: "21",
                                                                            y2: "18"
                                                                        }),
                                                                        t.jsx("polyline", {
                                                                            points: "3 8 3 3 3 8"
                                                                        }),
                                                                        t.jsx("polyline", {
                                                                            points: "3 3 1 5 3 3 5 5"
                                                                        }),
                                                                        t.jsx("polyline", {
                                                                            points: "3 16 3 21 3 16"
                                                                        }),
                                                                        t.jsx("polyline", {
                                                                            points: "3 21 1 19 3 21 5 19"
                                                                        })
                                                                    ]
                                                                }),
                                                                t.jsx("span", {
                                                                    style: {
                                                                        fontSize: "10px",
                                                                        marginLeft: 2
                                                                    },
                                                                    children: "▾"
                                                                })
                                                            ]
                                                        }),
                                                        me && t.jsx("div", {
                                                            ref: st,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: gr.map((e)=>t.jsx("button", {
                                                                    className: q.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>Vt(e.value),
                                                                    children: e.label
                                                                }, e.value))
                                                        })
                                                    ]
                                                })
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.outdent"),
                                                        onClick: ()=>pt(-1),
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
                                                                }),
                                                                t.jsx("polyline", {
                                                                    points: "11 8 7 10 11 12"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.indent"),
                                                        onClick: ()=>pt(1),
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
                                                                }),
                                                                t.jsx("polyline", {
                                                                    points: "3 8 7 10 3 12"
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
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.bulletList"),
                                                        onClick: Jt,
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "6",
                                                                    x2: "20",
                                                                    y2: "6"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "12",
                                                                    x2: "20",
                                                                    y2: "12"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "18",
                                                                    x2: "20",
                                                                    y2: "18"
                                                                }),
                                                                t.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "6",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                }),
                                                                t.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "12",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                }),
                                                                t.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "18",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.numberedList"),
                                                        onClick: Yt,
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "6",
                                                                    x2: "21",
                                                                    y2: "6"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "12",
                                                                    x2: "21",
                                                                    y2: "12"
                                                                }),
                                                                t.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "18",
                                                                    x2: "21",
                                                                    y2: "18"
                                                                }),
                                                                t.jsx("text", {
                                                                    x: "1",
                                                                    y: "8",
                                                                    fill: "currentColor",
                                                                    stroke: "none",
                                                                    fontSize: "8",
                                                                    fontFamily: "sans-serif",
                                                                    children: "1"
                                                                }),
                                                                t.jsx("text", {
                                                                    x: "1",
                                                                    y: "14",
                                                                    fill: "currentColor",
                                                                    stroke: "none",
                                                                    fontSize: "8",
                                                                    fontFamily: "sans-serif",
                                                                    children: "2"
                                                                }),
                                                                t.jsx("text", {
                                                                    x: "1",
                                                                    y: "20",
                                                                    fill: "currentColor",
                                                                    stroke: "none",
                                                                    fontSize: "8",
                                                                    fontFamily: "sans-serif",
                                                                    children: "3"
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
                                                children: [
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsx("button", {
                                                                ref: at,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.insertTable"),
                                                                onClick: ()=>ie((e)=>!e),
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
                                                                            rx: "2"
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
                                                            ve && t.jsxs("div", {
                                                                ref: nt,
                                                                className: "hwp-table-dialog",
                                                                children: [
                                                                    t.jsxs("div", {
                                                                        className: "hwp-table-dialog-row",
                                                                        children: [
                                                                            t.jsx("label", {
                                                                                children: "행 (Rows)"
                                                                            }),
                                                                            t.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 50,
                                                                                value: Ce,
                                                                                onChange: (e)=>Dt(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsxs("div", {
                                                                        className: "hwp-table-dialog-row",
                                                                        children: [
                                                                            t.jsx("label", {
                                                                                children: "열 (Cols)"
                                                                            }),
                                                                            t.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 20,
                                                                                value: ke,
                                                                                onChange: (e)=>Lt(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: Xt,
                                                                        children: l("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.insertImage"),
                                                        onClick: qt,
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
                                                                    rx: "2"
                                                                }),
                                                                t.jsx("circle", {
                                                                    cx: "8.5",
                                                                    cy: "8.5",
                                                                    r: "1.5"
                                                                }),
                                                                t.jsx("polyline", {
                                                                    points: "21 15 16 10 5 21"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.pageBreak"),
                                                        onClick: Gt,
                                                        children: t.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                t.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "12",
                                                                    x2: "21",
                                                                    y2: "12",
                                                                    strokeDasharray: "4 2"
                                                                }),
                                                                t.jsx("path", {
                                                                    d: "M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: t.jsx("button", {
                                                    className: `hwp-toolbar-btn${_e ? " active" : ""}`,
                                                    title: `${l("site.hwpEditor.findReplace")} (Ctrl+F)`,
                                                    onClick: ()=>le((e)=>!e),
                                                    children: t.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            t.jsx("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }),
                                                            t.jsx("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            t.jsx("div", {
                                                className: "hwp-toolbar-spacer"
                                            }),
                                            J && t.jsxs("span", {
                                                style: {
                                                    fontSize: "0.8rem",
                                                    color: "var(--text-secondary)",
                                                    marginRight: 8,
                                                    maxWidth: 160,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    J,
                                                    kt ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    _e && t.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.find"),
                                                value: L,
                                                onChange: (e)=>{
                                                    Ht(e.target.value), A("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && ut();
                                                },
                                                autoFocus: !0
                                            }),
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.replace"),
                                                value: Z,
                                                onChange: (e)=>Mt(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && xt();
                                                }
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: ut,
                                                children: l("site.hwpEditor.findNext")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: xt,
                                                children: l("site.hwpEditor.replaceOne")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: er,
                                                children: l("site.hwpEditor.replaceAllBtn")
                                            }),
                                            t.jsxs("label", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 4,
                                                    fontSize: "13px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    t.jsx("input", {
                                                        type: "checkbox",
                                                        checked: M,
                                                        onChange: (e)=>At(e.target.checked)
                                                    }),
                                                    l("site.hwpEditor.caseSensitive")
                                                ]
                                            }),
                                            Ke && t.jsx("span", {
                                                className: "hwp-find-info",
                                                children: Ke
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    le(!1), A("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    t.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>U.current?.focus(),
                                        onDragOver: it,
                                        onDragLeave: lt,
                                        onDrop: ht,
                                        children: Pe.map((e, s)=>{
                                            const r = X.current[s], c = ur(e), a = R && R.pageIndex === s, o = Ot.filter((h)=>h.pageIndex === s), i = r ? Math.max(r.w * .0015, 1) : 2;
                                            return t.jsxs("div", {
                                                ref: (h)=>{
                                                    Me.current[s] = h;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    transform: `scale(${Q / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onClick: (h)=>Wt(h, s),
                                                children: [
                                                    t.jsx("div", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: e
                                                        },
                                                        style: {
                                                            display: "block",
                                                            lineHeight: 0
                                                        }
                                                    }),
                                                    r && (o.length > 0 || a) && t.jsxs("svg", {
                                                        className: "hwp-overlay-svg",
                                                        viewBox: `${r.x} ${r.y} ${r.w} ${r.h}`,
                                                        preserveAspectRatio: c,
                                                        children: [
                                                            o.map((h, p)=>t.jsx("rect", {
                                                                    x: h.x,
                                                                    y: h.y,
                                                                    width: h.width,
                                                                    height: h.height,
                                                                    fill: "rgba(0, 70, 200, 0.2)"
                                                                }, p)),
                                                            a && t.jsx("line", {
                                                                x1: R.x,
                                                                y1: R.y,
                                                                x2: R.x,
                                                                y2: R.y + R.height,
                                                                stroke: "var(--primary, #0046C8)",
                                                                strokeWidth: i,
                                                                children: t.jsx("animate", {
                                                                    attributeName: "opacity",
                                                                    values: "1;1;0;0",
                                                                    keyTimes: "0;0.5;0.5;1",
                                                                    dur: "1.06s",
                                                                    repeatCount: "indefinite"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, s);
                                        })
                                    }),
                                    t.jsx("textarea", {
                                        ref: U,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: rr,
                                        onCompositionEnd: sr,
                                        onInput: nr,
                                        onKeyDown: tr,
                                        style: {
                                            position: "fixed",
                                            left: "-9999px",
                                            top: "-9999px",
                                            width: "1px",
                                            height: "1px",
                                            opacity: 0,
                                            pointerEvents: "none",
                                            resize: "none"
                                        }
                                    }),
                                    t.jsxs("div", {
                                        className: "hwp-page-bar",
                                        children: [
                                            t.jsxs("div", {
                                                className: "hwp-page-nav",
                                                children: [
                                                    t.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: $ <= 0,
                                                        onClick: ()=>V((e)=>Math.max(0, e - 1)),
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
                                                            l("site.hwpEditor.page"),
                                                            " ",
                                                            t.jsx("input", {
                                                                className: "hwp-page-input",
                                                                type: "text",
                                                                value: ue,
                                                                onChange: ar,
                                                                onBlur: gt,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && gt();
                                                                }
                                                            }),
                                                            " / ",
                                                            K
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: $ >= K - 1,
                                                        onClick: ()=>V((e)=>Math.min(K - 1, e + 1)),
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
                                                        onClick: or,
                                                        disabled: Q <= 30,
                                                        children: "−"
                                                    }),
                                                    t.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            Q,
                                                            "%"
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: cr,
                                                        disabled: Q >= 200,
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
                })
            ]
        });
    };
});
export { vr as default, __tla };
