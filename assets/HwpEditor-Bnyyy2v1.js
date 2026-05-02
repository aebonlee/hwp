import { u as dr, r as n, _ as jt, j as t, __tla as __tla_0 } from "./index-B1Os76hq.js";
import { u as pr, __tla as __tla_1 } from "./useRhwp-BeqL0wP0.js";
import { S as ur } from "./SEOHead-BgvAu2Yz.js";
let Cr;
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
        const F = parseInt(b.slice(1, 3), 16), N = parseInt(b.slice(3, 5), 16);
        return parseInt(b.slice(5, 7), 16) << 16 | N << 8 | F;
    }
    function mt(b) {
        const F = b & 255, N = b >> 8 & 255, l = b >> 16 & 255;
        return "#" + [
            F,
            N,
            l
        ].map((u)=>u.toString(16).padStart(2, "0")).join("");
    }
    function y(b) {
        try {
            return JSON.parse(b);
        } catch  {
            return null;
        }
    }
    function xr(b) {
        const F = b.match(/viewBox=["']([^"']+)["']/);
        if (!F) return null;
        const N = F[1].split(/[\s,]+/).map(Number);
        return N.length < 4 ? null : {
            x: N[0],
            y: N[1],
            w: N[2],
            h: N[3]
        };
    }
    let fr, gr, wr, yr, br;
    fr = [
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
    gr = [
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
    wr = [
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
    yr = [
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
    br = 100;
    Cr = ()=>{
        const { ready: b, loading: F, error: N } = pr(), { t: l } = dr(), u = n.useRef(null), [ze, vt] = n.useState([]), [K, Ct] = n.useState(0), [A, V] = n.useState(0), [ue, xe] = n.useState("1"), [X, Te] = n.useState(100), [J, kt] = n.useState(""), [It, He] = n.useState(!1), m = n.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [fe, Me] = n.useState(null), [R, Z] = n.useState(null), h = n.useRef(null), [, k] = n.useState(!1), [Ot, T] = n.useState([]), Y = n.useRef({}), [I, St] = n.useState({
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
        }), B = n.useRef([]), H = n.useRef([]), [Et, G] = n.useState(!1), [Ft, ee] = n.useState(!1), te = n.useRef(!1), U = n.useRef(null), We = n.useRef({}), [Rt, Dt] = n.useState(!0), [Lt, ge] = n.useState(!1), [$e, D] = n.useState(""), [we, re] = n.useState(!1), [ye, se] = n.useState(!1), [be, ne] = n.useState(!1), [je, ae] = n.useState(!1), [me, ce] = n.useState(!1), [ve, oe] = n.useState(!1), [Ce, ie] = n.useState(!1), [ke, Bt] = n.useState(3), [Ie, Pt] = n.useState(3), [zt, Tt] = n.useState("#000000"), [Ht, Mt] = n.useState("#FFFF00"), [Oe, Ae] = n.useState("맑은 고딕"), [Ue, _e] = n.useState("10"), [Ke, le] = n.useState(!1), [L, Wt] = n.useState(""), [Q, $t] = n.useState(""), [M, At] = n.useState(!1), [Ve, W] = n.useState(""), Je = n.useRef(null), Ze = n.useRef(null), Qe = n.useRef(null), Xe = n.useRef(null), Ye = n.useRef(null), qe = n.useRef(null), Ge = n.useRef(null), et = n.useRef(null), tt = n.useRef(null), rt = n.useRef(null), st = n.useRef(null), nt = n.useRef(null), at = n.useRef(null), ct = n.useRef(null), j = n.useCallback((e)=>{
            m.current = e, Me(e);
        }, []), p = n.useCallback(()=>{
            const e = u.current;
            if (e) try {
                const s = e.pageCount();
                Ct(s);
                const r = [];
                for(let o = 0; o < s; o++){
                    const a = e.renderPageSvg(o);
                    r.push(a);
                    const c = xr(a);
                    c && (Y.current[o] = c);
                }
                vt(r);
            } catch (s) {
                D(String(s));
            }
        }, []), w = n.useCallback((e)=>{
            const s = u.current;
            if (!s) {
                Z(null);
                return;
            }
            try {
                const r = y(s.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                r && r.x !== void 0 ? (Z({
                    pageIndex: r.pageIndex ?? 0,
                    x: r.x,
                    y: r.y,
                    height: r.height
                }), V(r.pageIndex ?? 0)) : Z(null);
            } catch  {
                Z(null);
            }
        }, []), E = n.useCallback((e)=>{
            const s = u.current;
            if (s) {
                try {
                    const r = s.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), o = y(r);
                    if (o) {
                        const a = o.fontFamily || "맑은 고딕", c = o.fontSize || 1e3;
                        Ae(a), _e(String(Math.round(c / 100))), St({
                            fontFamily: a,
                            fontSize: c,
                            bold: !!o.bold,
                            italic: !!o.italic,
                            underline: !!o.underline,
                            strikethrough: !!o.strikethrough,
                            textColor: o.textColor ?? 0,
                            highlight: o.highlight ?? pe("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const r = s.getParaPropertiesAt(e.secIdx, e.paraIdx), o = y(r);
                    o && Nt({
                        alignment: o.alignment || "justify",
                        lineSpacing: o.lineSpacing || 160,
                        marginLeft: o.marginLeft || 0,
                        marginRight: o.marginRight || 0,
                        indent: o.indent || 0
                    });
                } catch  {}
            }
        }, []), O = n.useCallback((e, s)=>{
            const r = u.current;
            if (!r) {
                T([]);
                return;
            }
            let o = e.paraIdx, a = e.charOffset, c = s.paraIdx, i = s.charOffset;
            (o > c || o === c && a > i) && ([o, c] = [
                c,
                o
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const d = r.getSelectionRects(e.secIdx, o, a, c, i), x = JSON.parse(d);
                T(Array.isArray(x) ? x : []);
            } catch  {
                T([]);
            }
        }, []), f = n.useCallback((e, s = !0)=>{
            j(e), s ? (h.current = null, k(!1), T([])) : h.current && O(h.current, e), w(e), E(e), He(!0), U.current?.focus();
        }, [
            j,
            w,
            E,
            O
        ]), g = n.useCallback(()=>{
            const e = u.current;
            if (e) try {
                const s = e.saveSnapshot();
                if (B.current.push(s), B.current.length > br) {
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
        }, []), Se = n.useCallback(()=>{
            const e = u.current;
            if (!e || B.current.length === 0) return;
            const s = B.current.pop();
            try {
                const o = e.saveSnapshot();
                H.current.push(o), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            p(), G(B.current.length > 0), ee(!0);
            const r = m.current;
            w(r), E(r);
        }, [
            p,
            w,
            E
        ]), Ne = n.useCallback(()=>{
            const e = u.current;
            if (!e || H.current.length === 0) return;
            const s = H.current.pop();
            try {
                const o = e.saveSnapshot();
                B.current.push(o), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            p(), G(!0), ee(H.current.length > 0);
            const r = m.current;
            w(r), E(r);
        }, [
            p,
            w,
            E
        ]), he = n.useCallback((e, s)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (u.current && u.current !== e) try {
                u.current.free();
            } catch  {}
            u.current = e, B.current = [], H.current = [], G(!1), ee(!1), kt(s), He(!1), Me(null), Z(null), h.current = null, k(!1), T([]), V(0), D(""), Y.current = {}, p();
            try {
                const r = y(e.getCaretPosition());
                if (r && r.paragraphIndex !== void 0) {
                    const o = {
                        secIdx: r.sectionIndex ?? 0,
                        paraIdx: r.paragraphIndex,
                        charOffset: r.charOffset ?? 0
                    };
                    j(o), setTimeout(()=>w(o), 80);
                } else {
                    const o = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    j(o), setTimeout(()=>w(o), 80);
                }
            } catch  {
                const r = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                j(r), setTimeout(()=>w(r), 80);
            }
        }, [
            p,
            j,
            w
        ]), ot = n.useCallback(async ()=>{
            if (b) try {
                const { HwpDocument: e } = await jt(async ()=>{
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
                const { HwpDocument: r } = await jt(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), o = new Uint8Array(await e.arrayBuffer()), a = new r(o);
                he(a, e.name);
            } catch (r) {
                D(`파일 열기 실패: ${r.message}`);
            }
        }, [
            b,
            he
        ]), it = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && de(e.files[0]);
            }, e.click();
        }, [
            de
        ]), lt = n.useCallback((e)=>{
            e.preventDefault(), ge(!0);
        }, []), ht = n.useCallback(()=>ge(!1), []), dt = n.useCallback((e)=>{
            e.preventDefault(), ge(!1);
            const s = e.dataTransfer.files[0];
            s && de(s);
        }, [
            de
        ]), Ut = n.useCallback((e, s)=>{
            const r = u.current;
            if (!r) return;
            const o = We.current[s];
            if (!o) return;
            const a = Y.current[s];
            if (!a) return;
            const c = o.querySelector("svg"), i = c ? c.getBoundingClientRect() : o.getBoundingClientRect(), d = (e.clientX - i.left) / i.width * a.w + a.x, x = (e.clientY - i.top) / i.height * a.h + a.y;
            try {
                const S = r.hitTest(s, d, x), C = y(S);
                if (!C) return;
                const Pe = C.paragraphIndex ?? C.paraIndex ?? 0, z = {
                    secIdx: C.sectionIndex ?? 0,
                    paraIdx: Pe,
                    charOffset: C.charOffset ?? 0
                };
                e.shiftKey && h.current ? (j(z), O(h.current, z), k(!0), w(z), E(z)) : (h.current = {
                    ...z
                }, f(z, !0));
            } catch  {}
            U.current?.focus();
        }, [
            j,
            f,
            O,
            w,
            E
        ]), P = n.useCallback(()=>{
            const e = u.current, s = h.current, r = m.current;
            if (!e || !s) return null;
            let o = s.paraIdx, a = s.charOffset, c = r.paraIdx, i = r.charOffset;
            (o > c || o === c && a > i) && ([o, c] = [
                c,
                o
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const d = e.deleteRange(r.secIdx, o, a, c, i), x = y(d);
                return h.current = null, k(!1), T([]), x?.ok ? {
                    secIdx: r.secIdx,
                    paraIdx: x.paraIdx,
                    charOffset: x.charOffset
                } : {
                    ...s
                };
            } catch  {
                return h.current = null, k(!1), T([]), {
                    ...s
                };
            }
        }, []), $ = n.useCallback((e)=>{
            const s = u.current;
            if (!s) return;
            g();
            let r = m.current;
            if (h.current) {
                const o = P();
                o && (r = o);
            }
            try {
                const o = s.insertText(r.secIdx, r.paraIdx, r.charOffset, e), c = y(o)?.charOffset ?? r.charOffset + e.length, i = {
                    ...r,
                    charOffset: c
                };
                p(), f(i);
            } catch (o) {
                console.error("insertText failed:", o);
            }
        }, [
            g,
            P,
            f,
            p
        ]), Ee = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            if (h.current) {
                g();
                const r = P();
                r && f(r), p();
                return;
            }
            const s = m.current;
            g();
            try {
                if (s.charOffset > 0) {
                    const r = e.deleteText(s.secIdx, s.paraIdx, s.charOffset - 1, 1), a = y(r)?.charOffset ?? s.charOffset - 1;
                    f({
                        ...s,
                        charOffset: a
                    });
                } else if (s.paraIdx > 0) {
                    const r = e.getParagraphLength(s.secIdx, s.paraIdx - 1), o = e.mergeParagraph(s.secIdx, s.paraIdx), a = y(o);
                    f({
                        secIdx: s.secIdx,
                        paraIdx: a?.paraIdx ?? s.paraIdx - 1,
                        charOffset: a?.charOffset ?? r
                    });
                }
            } catch (r) {
                console.error("deleteCharBefore failed:", r);
            }
            p();
        }, [
            P,
            g,
            f,
            p
        ]), pt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            if (h.current) {
                g();
                const r = P();
                r && f(r), p();
                return;
            }
            const s = m.current;
            g();
            try {
                const r = e.getParagraphLength(s.secIdx, s.paraIdx);
                if (s.charOffset < r) e.deleteText(s.secIdx, s.paraIdx, s.charOffset, 1), f({
                    ...s
                });
                else {
                    const o = e.getParagraphCount(s.secIdx);
                    if (s.paraIdx < o - 1) {
                        const a = e.mergeParagraph(s.secIdx, s.paraIdx + 1), c = y(a);
                        f({
                            secIdx: s.secIdx,
                            paraIdx: c?.paraIdx ?? s.paraIdx,
                            charOffset: c?.charOffset ?? s.charOffset
                        });
                    }
                }
            } catch (r) {
                console.error("deleteCharAfter failed:", r);
            }
            p();
        }, [
            P,
            g,
            f,
            p
        ]), v = n.useCallback((e)=>{
            const s = u.current;
            if (!s) return;
            const r = m.current;
            if (g(), h.current) {
                const o = h.current;
                let a = o.paraIdx, c = o.charOffset, i = r.paraIdx, d = r.charOffset;
                (a > i || a === i && c > d) && ([a, i] = [
                    i,
                    a
                ], [c, d] = [
                    d,
                    c
                ]);
                try {
                    s.beginBatch();
                    for(let x = a; x <= i; x++){
                        const S = x === a ? c : 0, C = x === i ? d : s.getParagraphLength(r.secIdx, x);
                        s.applyCharFormat(r.secIdx, x, S, C, JSON.stringify(e));
                    }
                    s.endBatch();
                } catch  {
                    try {
                        s.endBatch();
                    } catch  {}
                }
            } else try {
                const o = s.getParagraphLength(r.secIdx, r.paraIdx), a = Math.min(r.charOffset + 1, o);
                r.charOffset < a && s.applyCharFormat(r.secIdx, r.paraIdx, r.charOffset, a, JSON.stringify(e));
            } catch  {}
            p(), E(r);
        }, [
            g,
            p,
            E
        ]), _ = n.useCallback((e)=>{
            const s = u.current;
            if (!s) return;
            const r = m.current;
            g();
            try {
                s.applyParaFormat(r.secIdx, r.paraIdx, JSON.stringify(e));
            } catch  {}
            p(), E(r);
        }, [
            g,
            p,
            E
        ]), Fe = n.useCallback(()=>v({
                bold: !I.bold
            }), [
            v,
            I.bold
        ]), Re = n.useCallback(()=>v({
                italic: !I.italic
            }), [
            v,
            I.italic
        ]), De = n.useCallback(()=>v({
                underline: !I.underline
            }), [
            v,
            I.underline
        ]), _t = n.useCallback(()=>v({
                strikethrough: !I.strikethrough
            }), [
            v,
            I.strikethrough
        ]), Kt = n.useCallback((e)=>{
            v({
                fontFamily: e
            }), Ae(e), re(!1);
        }, [
            v
        ]), Vt = n.useCallback((e)=>{
            v({
                fontSize: Math.round(e * 100)
            }), _e(String(e)), se(!1);
        }, [
            v
        ]), Jt = n.useCallback((e)=>{
            _({
                alignment: e
            });
        }, [
            _
        ]), Zt = n.useCallback((e)=>{
            _({
                lineSpacing: e
            }), oe(!1);
        }, [
            _
        ]), ut = n.useCallback((e)=>{
            const s = Math.max(0, q.marginLeft + e * 800);
            _({
                marginLeft: s
            });
        }, [
            _,
            q.marginLeft
        ]), Qt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const s = m.current;
            g();
            try {
                const r = e.ensureDefaultBullet("●");
                e.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify({
                    numberingId: r,
                    numberingLevel: 0
                }));
            } catch  {}
            p();
        }, [
            g,
            p
        ]), Xt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const s = m.current;
            g();
            try {
                const r = e.ensureDefaultNumbering();
                e.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify({
                    numberingId: r,
                    numberingLevel: 0
                }));
            } catch  {}
            p();
        }, [
            g,
            p
        ]), Yt = n.useCallback((e)=>{
            v({
                textColor: pe(e)
            }), ne(!1);
        }, [
            v
        ]), qt = n.useCallback((e)=>{
            v({
                highlight: pe(e)
            }), ae(!1);
        }, [
            v
        ]), Gt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const s = m.current;
            g();
            try {
                const r = e.createTable(s.secIdx, s.paraIdx, s.charOffset, ke, Ie), o = y(r);
                o?.ok && f({
                    ...s,
                    paraIdx: o.paraIdx ?? s.paraIdx,
                    charOffset: 0
                });
            } catch (r) {
                D(r.message);
            }
            p(), ie(!1);
        }, [
            g,
            f,
            p,
            ke,
            Ie
        ]), er = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (s)=>{
                const r = s.target.files?.[0];
                if (!r) return;
                const o = u.current;
                if (!o) return;
                const a = m.current;
                g();
                try {
                    const c = new Uint8Array(await r.arrayBuffer()), i = new Image, d = URL.createObjectURL(r);
                    i.onload = ()=>{
                        URL.revokeObjectURL(d);
                        const x = i.naturalWidth, S = i.naturalHeight, C = Math.min(Math.round(x / 96 * 7200), 48e3), Pe = Math.round(S / x * C), z = r.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            o.insertPicture(a.secIdx, a.paraIdx, a.charOffset, c, C, Pe, x, S, z, r.name), f({
                                ...a,
                                charOffset: a.charOffset + 1
                            });
                        } catch (hr) {
                            D(hr.message);
                        }
                        p();
                    }, i.src = d;
                } catch (c) {
                    D(c.message);
                }
            }, e.click();
        }, [
            g,
            f,
            p
        ]), tr = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const s = m.current;
            g();
            try {
                e.insertPageBreak(s.secIdx, s.paraIdx, s.charOffset);
            } catch  {}
            p();
        }, [
            g,
            p
        ]), xt = n.useCallback(()=>{
            const e = u.current;
            if (!e || !L) return;
            const s = m.current;
            try {
                const r = e.searchText(L, s.secIdx, s.paraIdx, s.charOffset, !0, M), o = y(r);
                if (o?.found) {
                    const a = {
                        secIdx: o.sectionIndex ?? s.secIdx,
                        paraIdx: o.paragraphIndex ?? o.paraIdx ?? s.paraIdx,
                        charOffset: o.charOffset ?? 0
                    };
                    f(a), W("");
                } else W(l("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            L,
            M,
            f,
            l
        ]), ft = n.useCallback(()=>{
            const e = u.current;
            if (!(!e || !L)) {
                g();
                try {
                    const s = e.replaceOne(L, Q, M);
                    y(s)?.ok ? (p(), W(l("site.hwpEditor.replaced"))) : W(l("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            L,
            Q,
            M,
            g,
            p,
            l
        ]), rr = n.useCallback(()=>{
            const e = u.current;
            if (!(!e || !L)) {
                g();
                try {
                    const s = e.replaceAll(L, Q, M), r = y(s);
                    p(), W(`${l("site.hwpEditor.replaced")} ${r?.count ?? 0}`);
                } catch  {}
            }
        }, [
            L,
            Q,
            M,
            g,
            p,
            l
        ]), gt = n.useCallback((e)=>{
            const s = u.current;
            if (s) {
                try {
                    const r = e === "hwp" ? s.exportHwp() : s.exportHwpx(), o = new Blob([
                        r
                    ], {
                        type: "application/octet-stream"
                    }), a = URL.createObjectURL(o), c = document.createElement("a");
                    c.href = a;
                    const i = J ? J.replace(/\.[^.]+$/, "") : "document";
                    c.download = `${i}.${e}`, c.click(), URL.revokeObjectURL(a);
                } catch (r) {
                    D(`내보내기 실패: ${r.message}`);
                }
                ce(!1);
            }
        }, [
            J
        ]), sr = n.useCallback((e)=>{
            if (te.current) return;
            const s = u.current;
            if (!s || !m.current) return;
            const r = m.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), Se();
                        return;
                    case "y":
                        e.preventDefault(), Ne();
                        return;
                    case "b":
                        e.preventDefault(), Fe();
                        return;
                    case "i":
                        e.preventDefault(), Re();
                        return;
                    case "u":
                        e.preventDefault(), De();
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
                                const c = a - 1, i = s.getParagraphCount(c) - 1, d = s.getParagraphLength(c, i), x = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, S = {
                                    secIdx: c,
                                    paraIdx: i,
                                    charOffset: d
                                };
                                h.current = x, j(S), O(x, S), k(!0), w(S);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            e.preventDefault();
                            const a = h.current;
                            if (!a) return;
                            let c = a.paraIdx, i = a.charOffset, d = r.paraIdx, x = r.charOffset;
                            (c > d || c === d && i > x) && ([c, d] = [
                                d,
                                c
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const S = s.copySelection(r.secIdx, c, i, d, x), C = y(S);
                                C?.text && navigator.clipboard.writeText(C.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const a = h.current;
                            if (!a) return;
                            let c = a.paraIdx, i = a.charOffset, d = r.paraIdx, x = r.charOffset;
                            (c > d || c === d && i > x) && ([c, d] = [
                                d,
                                c
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const S = s.copySelection(r.secIdx, c, i, d, x), C = y(S);
                                C?.text && navigator.clipboard.writeText(C.text).catch(()=>{});
                            } catch  {}
                            Ee();
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), navigator.clipboard.readText().then((a)=>{
                                a && $(a);
                            }).catch(()=>{});
                            return;
                        }
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    {
                        if (e.preventDefault(), g(), h.current) {
                            const c = P();
                            c && j(c);
                        }
                        const a = m.current;
                        try {
                            const c = s.splitParagraph(a.secIdx, a.paraIdx, a.charOffset), i = y(c), d = {
                                secIdx: a.secIdx,
                                paraIdx: i?.paraIdx ?? a.paraIdx + 1,
                                charOffset: 0
                            };
                            f(d);
                        } catch  {}
                        p();
                        break;
                    }
                case "Backspace":
                    e.preventDefault(), Ee();
                    break;
                case "Delete":
                    e.preventDefault(), pt();
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
                        e.shiftKey ? (h.current || (h.current = {
                            ...r
                        }), j(a), O(h.current, a), k(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowRight":
                    {
                        e.preventDefault();
                        const a = {
                            ...r
                        };
                        try {
                            const c = s.getParagraphLength(r.secIdx, r.paraIdx);
                            if (r.charOffset < c) a.charOffset = r.charOffset + 1;
                            else {
                                const i = s.getParagraphCount(r.secIdx);
                                if (r.paraIdx < i - 1) a.paraIdx = r.paraIdx + 1, a.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        e.shiftKey ? (h.current || (h.current = {
                            ...r
                        }), j(a), O(h.current, a), k(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const a = R ? R.x : 0;
                        try {
                            const c = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, -1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(c);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), j(d), O(h.current, d), k(!0), w(d)) : f(d);
                            }
                        } catch  {
                            if (r.paraIdx > 0) {
                                const c = {
                                    ...r,
                                    paraIdx: r.paraIdx - 1
                                };
                                try {
                                    c.charOffset = Math.min(r.charOffset, s.getParagraphLength(r.secIdx, c.paraIdx));
                                } catch  {
                                    c.charOffset = 0;
                                }
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), j(c), O(h.current, c), k(!0), w(c)) : f(c);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const a = R ? R.x : 0;
                        try {
                            const c = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, 1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(c);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), j(d), O(h.current, d), k(!0), w(d)) : f(d);
                            }
                        } catch  {
                            try {
                                const c = s.getParagraphCount(r.secIdx);
                                if (r.paraIdx < c - 1) {
                                    const i = {
                                        ...r,
                                        paraIdx: r.paraIdx + 1
                                    };
                                    i.charOffset = Math.min(r.charOffset, s.getParagraphLength(r.secIdx, i.paraIdx)), e.shiftKey ? (h.current || (h.current = {
                                        ...r
                                    }), j(i), O(h.current, i), k(!0), w(i)) : f(i);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault();
                        try {
                            const a = y(s.getLineInfo(r.secIdx, r.paraIdx, r.charOffset)), c = {
                                ...r,
                                charOffset: a ? a.charStart : 0
                            };
                            e.shiftKey ? (h.current || (h.current = {
                                ...r
                            }), j(c), O(h.current, c), k(!0), w(c)) : f(c);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        try {
                            const a = y(s.getLineInfo(r.secIdx, r.paraIdx, r.charOffset)), c = s.getParagraphLength(r.secIdx, r.paraIdx), i = {
                                ...r,
                                charOffset: a ? Math.min(a.charEnd, c) : c
                            };
                            e.shiftKey ? (h.current || (h.current = {
                                ...r
                            }), j(i), O(h.current, i), k(!0), w(i)) : f(i);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), $("	");
                    break;
                case "Escape":
                    le(!1), re(!1), se(!1), ne(!1), ae(!1), ce(!1), oe(!1), ie(!1);
                    break;
            }
        }, [
            fe,
            R,
            Se,
            Ne,
            Fe,
            Re,
            De,
            $,
            P,
            Ee,
            pt,
            g,
            f,
            p,
            O,
            w,
            j
        ]), nr = n.useCallback(()=>{
            te.current = !0;
        }, []), ar = n.useCallback((e)=>{
            te.current = !1;
            const s = e.data;
            s && $(s), U.current && (U.current.value = "");
        }, [
            $
        ]), cr = n.useCallback((e)=>{
            if (te.current) return;
            const s = e.target, r = s.value;
            r && ($(r), s.value = "");
        }, [
            $
        ]), or = n.useCallback((e)=>{
            xe(e.target.value);
        }, []), wt = n.useCallback(()=>{
            const e = parseInt(ue, 10);
            !isNaN(e) && e >= 1 && e <= K ? V(e - 1) : xe(String(A + 1));
        }, [
            ue,
            K,
            A
        ]), ir = n.useCallback(()=>Te((e)=>Math.min(e + 10, 200)), []), lr = n.useCallback(()=>Te((e)=>Math.max(e - 10, 30)), []);
        n.useEffect(()=>{
            xe(String(A + 1));
        }, [
            A
        ]), n.useEffect(()=>{
            if (!fe) return;
            const e = setInterval(()=>Dt((s)=>!s), 530);
            return ()=>clearInterval(e);
        }, [
            fe
        ]), n.useEffect(()=>{
            const e = (s)=>{
                const r = s.target, o = (a, c)=>!a.current?.contains(r) && !c.current?.contains(r);
                we && o(Je, Ze) && re(!1), ye && o(Qe, Xe) && se(!1), be && o(Ye, qe) && ne(!1), je && o(Ge, et) && ae(!1), me && o(tt, rt) && ce(!1), ve && o(st, nt) && oe(!1), Ce && o(ct, at) && ie(!1);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            we,
            ye,
            be,
            je,
            me,
            ve,
            Ce
        ]), n.useEffect(()=>()=>{
                if (u.current) {
                    try {
                        u.current.free();
                    } catch  {}
                    u.current = null;
                }
            }, []);
        const yt = ze.length > 0, Le = mt(I.textColor), Be = mt(I.highlight), bt = (e, s, r, o)=>t.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    t.jsx("div", {
                        className: "hwp-color-grid",
                        children: yr.map((a, c)=>t.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: a.map((i)=>t.jsx("div", {
                                        className: `hwp-color-swatch${e.toUpperCase() === i.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: i
                                        },
                                        title: i,
                                        onClick: ()=>o(i)
                                    }, i))
                            }, c))
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
                                onClick: ()=>o(s),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(ur, {
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
                            $e && t.jsxs("div", {
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
                                        children: $e
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
                            N && !F && t.jsxs("div", {
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
                                            N
                                        ]
                                    })
                                ]
                            }),
                            F && t.jsxs("div", {
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
                            b && !yt && !F && t.jsx("div", {
                                className: `hwp-editor-container${Lt ? " drag-over" : ""}`,
                                onDragOver: lt,
                                onDragLeave: ht,
                                onDrop: dt,
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
                                                    onClick: ot,
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
                                                    onClick: it,
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
                            yt && t.jsxs("div", {
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
                                                        onClick: ot,
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
                                                        onClick: it,
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
                                                                ref: tt,
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
                                                            me && t.jsxs("div", {
                                                                ref: rt,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    t.jsx("button", {
                                                                        onClick: ()=>gt("hwp"),
                                                                        children: l("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    t.jsx("button", {
                                                                        onClick: ()=>gt("hwpx"),
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
                                                        onClick: Se,
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
                                                        onClick: Ne,
                                                        disabled: !Ft,
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
                                                                ref: Je,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.font"),
                                                                onClick: ()=>re((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontFamily: Oe,
                                                                            maxWidth: 96,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap",
                                                                            display: "inline-block"
                                                                        },
                                                                        children: Oe
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
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: fr.map((e)=>t.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: Oe === e ? "active" : "",
                                                                        onClick: ()=>Kt(e),
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
                                                                ref: Qe,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.fontSize"),
                                                                onClick: ()=>se((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        children: Ue
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
                                                            ye && t.jsx("div", {
                                                                ref: Xe,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: gr.map((e)=>t.jsx("button", {
                                                                        className: parseFloat(Ue) === e ? "active" : "",
                                                                        onClick: ()=>Vt(e),
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
                                                        className: `hwp-toolbar-btn${I.bold ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.bold")} (Ctrl+B)`,
                                                        onClick: Fe,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.italic ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: Re,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.underline ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: De,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.strikethrough ? " active" : ""}`,
                                                        title: l("site.hwpEditor.strikethrough"),
                                                        onClick: _t,
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
                                                                ref: Ye,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.textColor"),
                                                                onClick: ()=>ne((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: Le,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
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
                                                                ref: qe,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: bt(Le, zt, Tt, Yt)
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: Ge,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.highlight"),
                                                                onClick: ()=>ae((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: Be,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    t.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: Be
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
                                                            je && t.jsx("div", {
                                                                ref: et,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: bt(Be, Ht, Mt, qt)
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
                                                        onClick: ()=>Jt(e),
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
                                                            ref: st,
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
                                                        ve && t.jsx("div", {
                                                            ref: nt,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: wr.map((e)=>t.jsx("button", {
                                                                    className: q.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>Zt(e.value),
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
                                                        onClick: ()=>ut(-1),
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
                                                        onClick: ()=>ut(1),
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
                                                        onClick: Qt,
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
                                                        onClick: Xt,
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
                                                                ref: ct,
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
                                                            Ce && t.jsxs("div", {
                                                                ref: at,
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
                                                                                value: ke,
                                                                                onChange: (e)=>Bt(Number(e.target.value))
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
                                                                                value: Ie,
                                                                                onChange: (e)=>Pt(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: Gt,
                                                                        children: l("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.insertImage"),
                                                        onClick: er,
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
                                                        onClick: tr,
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
                                                    className: `hwp-toolbar-btn${Ke ? " active" : ""}`,
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
                                                    It ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    Ke && t.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.find"),
                                                value: L,
                                                onChange: (e)=>{
                                                    Wt(e.target.value), W("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && xt();
                                                },
                                                autoFocus: !0
                                            }),
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.replace"),
                                                value: Q,
                                                onChange: (e)=>$t(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && ft();
                                                }
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: xt,
                                                children: l("site.hwpEditor.findNext")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: ft,
                                                children: l("site.hwpEditor.replaceOne")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: rr,
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
                                            Ve && t.jsx("span", {
                                                className: "hwp-find-info",
                                                children: Ve
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    le(!1), W("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    t.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>U.current?.focus(),
                                        onDragOver: lt,
                                        onDragLeave: ht,
                                        onDrop: dt,
                                        children: ze.map((e, s)=>{
                                            const r = Y.current[s], o = R && R.pageIndex === s, a = Ot.filter((c)=>c.pageIndex === s);
                                            return t.jsxs("div", {
                                                ref: (c)=>{
                                                    We.current[s] = c;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    position: "relative",
                                                    cursor: "text",
                                                    userSelect: "none",
                                                    transform: `scale(${X / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onClick: (c)=>Ut(c, s),
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
                                                    r && a.map((c, i)=>t.jsx("div", {
                                                            className: "hwp-selection-overlay",
                                                            style: {
                                                                position: "absolute",
                                                                left: `${(c.x - r.x) / r.w * 100}%`,
                                                                top: `${(c.y - r.y) / r.h * 100}%`,
                                                                width: `${c.width / r.w * 100}%`,
                                                                height: `${c.height / r.h * 100}%`
                                                            }
                                                        }, i)),
                                                    o && r && Rt && t.jsx("div", {
                                                        className: "hwp-cursor",
                                                        style: {
                                                            position: "absolute",
                                                            left: `${(R.x - r.x) / r.w * 100}%`,
                                                            top: `${(R.y - r.y) / r.h * 100}%`,
                                                            height: `${R.height / r.h * 100}%`,
                                                            width: "2px",
                                                            pointerEvents: "none"
                                                        }
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
                                        onCompositionStart: nr,
                                        onCompositionEnd: ar,
                                        onInput: cr,
                                        onKeyDown: sr,
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
                                                        disabled: A <= 0,
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
                                                                onChange: or,
                                                                onBlur: wt,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && wt();
                                                                }
                                                            }),
                                                            " / ",
                                                            K
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: A >= K - 1,
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
                                                        onClick: lr,
                                                        disabled: X <= 30,
                                                        children: "−"
                                                    }),
                                                    t.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            X,
                                                            "%"
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: ir,
                                                        disabled: X >= 200,
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
export { Cr as default, __tla };
