import { u as ps, r as n, _ as mt, j as t, __tla as __tla_0 } from "./index-DbtbuWeR.js";
import { u as us, __tla as __tla_1 } from "./useRhwp-De7gZ18w.js";
import { S as xs } from "./SEOHead-IURV6xUA.js";
let ks;
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
    function ue(b) {
        const F = parseInt(b.slice(1, 3), 16), N = parseInt(b.slice(3, 5), 16);
        return parseInt(b.slice(5, 7), 16) << 16 | N << 8 | F;
    }
    function vt(b) {
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
    function fs(b) {
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
    let gs, ws, ys, bs, js;
    gs = [
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
    ws = [
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
    ys = [
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
    bs = [
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
    js = 100;
    ks = ()=>{
        const { ready: b, loading: F, error: N } = us(), { t: l } = ps(), u = n.useRef(null), [He, Ct] = n.useState([]), [V, kt] = n.useState(0), [U, J] = n.useState(0), [xe, fe] = n.useState("1"), [Y, Te] = n.useState(100), [Z, It] = n.useState(""), [Ot, Me] = n.useState(!1), m = n.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [ge, We] = n.useState(null), [R, Q] = n.useState(null), h = n.useRef(null), [D, k] = n.useState(!1), [St, T] = n.useState([]), q = n.useRef({}), [I, Nt] = n.useState({
            fontFamily: "맑은 고딕",
            fontSize: 1e3,
            bold: !1,
            italic: !1,
            underline: !1,
            strikethrough: !1,
            textColor: 0,
            highlight: ue("#FFFF00")
        }), [G, Et] = n.useState({
            alignment: "justify",
            lineSpacing: 160,
            marginLeft: 0,
            marginRight: 0,
            indent: 0
        }), P = n.useRef([]), M = n.useRef([]), [Ft, ee] = n.useState(!1), [Rt, te] = n.useState(!1), se = n.useRef(!1), _ = n.useRef(null), $e = n.useRef({}), [Dt, Lt] = n.useState(!0), [Bt, we] = n.useState(!1), [Ae, L] = n.useState(""), [ye, re] = n.useState(!1), [be, ne] = n.useState(!1), [je, ae] = n.useState(!1), [me, ce] = n.useState(!1), [ve, oe] = n.useState(!1), [Ce, ie] = n.useState(!1), [ke, le] = n.useState(!1), [Ie, Pt] = n.useState(3), [Oe, zt] = n.useState(3), [Ht, Tt] = n.useState("#000000"), [Mt, Wt] = n.useState("#FFFF00"), [Se, Ue] = n.useState("맑은 고딕"), [_e, Ke] = n.useState("10"), [Ve, he] = n.useState(!1), [B, $t] = n.useState(""), [X, At] = n.useState(""), [W, Ut] = n.useState(!1), [Je, $] = n.useState(""), Ze = n.useRef(null), Qe = n.useRef(null), Xe = n.useRef(null), Ye = n.useRef(null), qe = n.useRef(null), Ge = n.useRef(null), et = n.useRef(null), tt = n.useRef(null), st = n.useRef(null), rt = n.useRef(null), nt = n.useRef(null), at = n.useRef(null), ct = n.useRef(null), ot = n.useRef(null), j = n.useCallback((e)=>{
            m.current = e, We(e);
        }, []), p = n.useCallback(()=>{
            const e = u.current;
            if (e) try {
                const r = e.pageCount();
                kt(r);
                const s = [];
                for(let o = 0; o < r; o++){
                    const a = e.renderPageSvg(o);
                    s.push(a);
                    const c = fs(a);
                    c && (q.current[o] = c);
                }
                Ct(s);
            } catch (r) {
                L(String(r));
            }
        }, []), w = n.useCallback((e)=>{
            const r = u.current;
            if (!r) {
                Q(null);
                return;
            }
            try {
                const s = y(r.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                s && s.x !== void 0 ? (Q({
                    pageIndex: s.pageIndex ?? 0,
                    x: s.x,
                    y: s.y,
                    height: s.height
                }), J(s.pageIndex ?? 0)) : Q(null);
            } catch  {
                Q(null);
            }
        }, []), E = n.useCallback((e)=>{
            const r = u.current;
            if (r) {
                try {
                    const s = r.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), o = y(s);
                    if (o) {
                        const a = o.fontFamily || "맑은 고딕", c = o.fontSize || 1e3;
                        Ue(a), Ke(String(Math.round(c / 100))), Nt({
                            fontFamily: a,
                            fontSize: c,
                            bold: !!o.bold,
                            italic: !!o.italic,
                            underline: !!o.underline,
                            strikethrough: !!o.strikethrough,
                            textColor: o.textColor ?? 0,
                            highlight: o.highlight ?? ue("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const s = r.getParaPropertiesAt(e.secIdx, e.paraIdx), o = y(s);
                    o && Et({
                        alignment: o.alignment || "justify",
                        lineSpacing: o.lineSpacing || 160,
                        marginLeft: o.marginLeft || 0,
                        marginRight: o.marginRight || 0,
                        indent: o.indent || 0
                    });
                } catch  {}
            }
        }, []), O = n.useCallback((e, r)=>{
            const s = u.current;
            if (!s) {
                T([]);
                return;
            }
            let o = e.paraIdx, a = e.charOffset, c = r.paraIdx, i = r.charOffset;
            (o > c || o === c && a > i) && ([o, c] = [
                c,
                o
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const d = s.getSelectionRects(e.secIdx, o, a, c, i), x = JSON.parse(d);
                T(Array.isArray(x) ? x : []);
            } catch  {
                T([]);
            }
        }, []), f = n.useCallback((e, r = !0)=>{
            j(e), r ? (h.current = null, k(!1), T([])) : h.current && O(h.current, e), w(e), E(e), Me(!0), _.current?.focus();
        }, [
            j,
            w,
            E,
            O
        ]), g = n.useCallback(()=>{
            const e = u.current;
            if (e) try {
                const r = e.saveSnapshot();
                if (P.current.push(r), P.current.length > js) {
                    const s = P.current.shift();
                    if (s !== void 0) try {
                        e.discardSnapshot(s);
                    } catch  {}
                }
                M.current.forEach((s)=>{
                    try {
                        e.discardSnapshot(s);
                    } catch  {}
                }), M.current = [], ee(!0), te(!1);
            } catch  {}
        }, []), Ne = n.useCallback(()=>{
            const e = u.current;
            if (!e || P.current.length === 0) return;
            const r = P.current.pop();
            try {
                const o = e.saveSnapshot();
                M.current.push(o), e.restoreSnapshot(r);
                try {
                    e.discardSnapshot(r);
                } catch  {}
            } catch  {}
            p(), ee(P.current.length > 0), te(!0);
            const s = m.current;
            w(s), E(s);
        }, [
            p,
            w,
            E
        ]), Ee = n.useCallback(()=>{
            const e = u.current;
            if (!e || M.current.length === 0) return;
            const r = M.current.pop();
            try {
                const o = e.saveSnapshot();
                P.current.push(o), e.restoreSnapshot(r);
                try {
                    e.discardSnapshot(r);
                } catch  {}
            } catch  {}
            p(), ee(!0), te(M.current.length > 0);
            const s = m.current;
            w(s), E(s);
        }, [
            p,
            w,
            E
        ]), de = n.useCallback((e, r)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (u.current && u.current !== e) try {
                u.current.free();
            } catch  {}
            u.current = e, P.current = [], M.current = [], ee(!1), te(!1), It(r), Me(!1), We(null), Q(null), h.current = null, k(!1), T([]), J(0), L(""), q.current = {}, p();
            try {
                const s = y(e.getCaretPosition());
                if (s && s.paragraphIndex !== void 0) {
                    const o = {
                        secIdx: s.sectionIndex ?? 0,
                        paraIdx: s.paragraphIndex,
                        charOffset: s.charOffset ?? 0
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
                const s = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                j(s), setTimeout(()=>w(s), 80);
            }
        }, [
            p,
            j,
            w
        ]), it = n.useCallback(async ()=>{
            if (b) try {
                const { HwpDocument: e } = await mt(async ()=>{
                    const { HwpDocument: s } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: s
                    };
                }, []), r = e.createEmpty();
                y(r.createBlankDocument()), de(r, "새 문서.hwp");
            } catch (e) {
                L(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            b,
            de
        ]), pe = n.useCallback(async (e)=>{
            if (!b) return;
            const r = e.name.split(".").pop()?.toLowerCase();
            if (r !== "hwp" && r !== "hwpx") {
                L(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: s } = await mt(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), o = new Uint8Array(await e.arrayBuffer()), a = new s(o);
                de(a, e.name);
            } catch (s) {
                L(`파일 열기 실패: ${s.message}`);
            }
        }, [
            b,
            de
        ]), lt = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && pe(e.files[0]);
            }, e.click();
        }, [
            pe
        ]), ht = n.useCallback((e)=>{
            e.preventDefault(), we(!0);
        }, []), dt = n.useCallback(()=>we(!1), []), pt = n.useCallback((e)=>{
            e.preventDefault(), we(!1);
            const r = e.dataTransfer.files[0];
            r && pe(r);
        }, [
            pe
        ]), _t = n.useCallback((e, r)=>{
            const s = u.current;
            if (!s) return;
            const o = $e.current[r];
            if (!o) return;
            const a = q.current[r];
            if (!a) return;
            const c = o.querySelector("svg"), i = c ? c.getBoundingClientRect() : o.getBoundingClientRect(), d = (e.clientX - i.left) / i.width * a.w + a.x, x = (e.clientY - i.top) / i.height * a.h + a.y;
            try {
                const S = s.hitTest(r, d, x), C = y(S);
                if (!C) return;
                const ze = C.paragraphIndex ?? C.paraIndex ?? 0, H = {
                    secIdx: C.sectionIndex ?? 0,
                    paraIdx: ze,
                    charOffset: C.charOffset ?? 0
                };
                e.shiftKey && h.current ? (j(H), O(h.current, H), k(!0), w(H), E(H)) : (h.current = {
                    ...H
                }, f(H, !0));
            } catch  {}
            _.current?.focus();
        }, [
            j,
            f,
            O,
            w,
            E
        ]), z = n.useCallback(()=>{
            const e = u.current, r = h.current, s = m.current;
            if (!e || !r) return null;
            let o = r.paraIdx, a = r.charOffset, c = s.paraIdx, i = s.charOffset;
            (o > c || o === c && a > i) && ([o, c] = [
                c,
                o
            ], [a, i] = [
                i,
                a
            ]);
            try {
                const d = e.deleteRange(s.secIdx, o, a, c, i), x = y(d);
                return h.current = null, k(!1), T([]), x?.ok ? {
                    secIdx: s.secIdx,
                    paraIdx: x.paraIdx,
                    charOffset: x.charOffset
                } : {
                    ...r
                };
            } catch  {
                return h.current = null, k(!1), T([]), {
                    ...r
                };
            }
        }, []), A = n.useCallback((e)=>{
            const r = u.current;
            if (!r) return;
            g();
            let s = m.current;
            if (D) {
                const o = z();
                o && (s = o);
            }
            try {
                const o = r.insertText(s.secIdx, s.paraIdx, s.charOffset, e), c = y(o)?.charOffset ?? s.charOffset + e.length, i = {
                    ...s,
                    charOffset: c
                };
                f(i);
            } catch  {}
            p();
        }, [
            D,
            g,
            z,
            f,
            p
        ]), Fe = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            if (D) {
                const s = z();
                s && f(s), p();
                return;
            }
            const r = m.current;
            g();
            try {
                if (r.charOffset > 0) {
                    const s = e.deleteText(r.secIdx, r.paraIdx, r.charOffset - 1, 1), a = y(s)?.charOffset ?? r.charOffset - 1;
                    f({
                        ...r,
                        charOffset: a
                    });
                } else if (r.paraIdx > 0) {
                    const s = e.getParagraphLength(r.secIdx, r.paraIdx - 1), o = e.mergeParagraph(r.secIdx, r.paraIdx - 1), a = y(o);
                    f({
                        secIdx: r.secIdx,
                        paraIdx: a?.paraIdx ?? r.paraIdx - 1,
                        charOffset: a?.charOffset ?? s
                    });
                }
            } catch  {}
            p();
        }, [
            D,
            z,
            g,
            f,
            p
        ]), ut = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            if (D) {
                const s = z();
                s && f(s), p();
                return;
            }
            const r = m.current;
            g();
            try {
                const s = e.getParagraphLength(r.secIdx, r.paraIdx);
                if (r.charOffset < s) e.deleteText(r.secIdx, r.paraIdx, r.charOffset, 1), f({
                    ...r
                });
                else {
                    const o = e.getParagraphCount(r.secIdx);
                    if (r.paraIdx < o - 1) {
                        const a = e.mergeParagraph(r.secIdx, r.paraIdx), c = y(a);
                        f({
                            secIdx: r.secIdx,
                            paraIdx: c?.paraIdx ?? r.paraIdx,
                            charOffset: c?.charOffset ?? r.charOffset
                        });
                    }
                }
            } catch  {}
            p();
        }, [
            D,
            z,
            g,
            f,
            p
        ]), v = n.useCallback((e)=>{
            const r = u.current;
            if (!r) return;
            const s = m.current;
            if (g(), D && h.current) {
                const o = h.current;
                let a = o.paraIdx, c = o.charOffset, i = s.paraIdx, d = s.charOffset;
                (a > i || a === i && c > d) && ([a, i] = [
                    i,
                    a
                ], [c, d] = [
                    d,
                    c
                ]);
                try {
                    r.beginBatch();
                    for(let x = a; x <= i; x++){
                        const S = x === a ? c : 0, C = x === i ? d : r.getParagraphLength(s.secIdx, x);
                        r.applyCharFormat(s.secIdx, x, S, C, JSON.stringify(e));
                    }
                    r.endBatch();
                } catch  {
                    try {
                        r.endBatch();
                    } catch  {}
                }
            } else try {
                const o = r.getParagraphLength(s.secIdx, s.paraIdx), a = Math.min(s.charOffset + 1, o);
                s.charOffset < a && r.applyCharFormat(s.secIdx, s.paraIdx, s.charOffset, a, JSON.stringify(e));
            } catch  {}
            p(), E(s);
        }, [
            D,
            g,
            p,
            E
        ]), K = n.useCallback((e)=>{
            const r = u.current;
            if (!r) return;
            const s = m.current;
            g();
            try {
                r.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify(e));
            } catch  {}
            p(), E(s);
        }, [
            g,
            p,
            E
        ]), Re = n.useCallback(()=>v({
                bold: !I.bold
            }), [
            v,
            I.bold
        ]), De = n.useCallback(()=>v({
                italic: !I.italic
            }), [
            v,
            I.italic
        ]), Le = n.useCallback(()=>v({
                underline: !I.underline
            }), [
            v,
            I.underline
        ]), Kt = n.useCallback(()=>v({
                strikethrough: !I.strikethrough
            }), [
            v,
            I.strikethrough
        ]), Vt = n.useCallback((e)=>{
            v({
                fontFamily: e
            }), Ue(e), re(!1);
        }, [
            v
        ]), Jt = n.useCallback((e)=>{
            v({
                fontSize: Math.round(e * 100)
            }), Ke(String(e)), ne(!1);
        }, [
            v
        ]), Zt = n.useCallback((e)=>{
            K({
                alignment: e
            });
        }, [
            K
        ]), Qt = n.useCallback((e)=>{
            K({
                lineSpacing: e
            }), ie(!1);
        }, [
            K
        ]), xt = n.useCallback((e)=>{
            const r = Math.max(0, G.marginLeft + e * 800);
            K({
                marginLeft: r
            });
        }, [
            K,
            G.marginLeft
        ]), Xt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const r = m.current;
            g();
            try {
                const s = e.ensureDefaultBullet("●");
                e.applyParaFormat(r.secIdx, r.paraIdx, JSON.stringify({
                    numberingId: s,
                    numberingLevel: 0
                }));
            } catch  {}
            p();
        }, [
            g,
            p
        ]), Yt = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const r = m.current;
            g();
            try {
                const s = e.ensureDefaultNumbering();
                e.applyParaFormat(r.secIdx, r.paraIdx, JSON.stringify({
                    numberingId: s,
                    numberingLevel: 0
                }));
            } catch  {}
            p();
        }, [
            g,
            p
        ]), qt = n.useCallback((e)=>{
            v({
                textColor: ue(e)
            }), ae(!1);
        }, [
            v
        ]), Gt = n.useCallback((e)=>{
            v({
                highlight: ue(e)
            }), ce(!1);
        }, [
            v
        ]), es = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const r = m.current;
            g();
            try {
                const s = e.createTable(r.secIdx, r.paraIdx, r.charOffset, Ie, Oe), o = y(s);
                o?.ok && f({
                    ...r,
                    paraIdx: o.paraIdx ?? r.paraIdx,
                    charOffset: 0
                });
            } catch (s) {
                L(s.message);
            }
            p(), le(!1);
        }, [
            g,
            f,
            p,
            Ie,
            Oe
        ]), ts = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (r)=>{
                const s = r.target.files?.[0];
                if (!s) return;
                const o = u.current;
                if (!o) return;
                const a = m.current;
                g();
                try {
                    const c = new Uint8Array(await s.arrayBuffer()), i = new Image, d = URL.createObjectURL(s);
                    i.onload = ()=>{
                        URL.revokeObjectURL(d);
                        const x = i.naturalWidth, S = i.naturalHeight, C = Math.min(Math.round(x / 96 * 7200), 48e3), ze = Math.round(S / x * C), H = s.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            o.insertPicture(a.secIdx, a.paraIdx, a.charOffset, c, C, ze, x, S, H, s.name), f({
                                ...a,
                                charOffset: a.charOffset + 1
                            });
                        } catch (ds) {
                            L(ds.message);
                        }
                        p();
                    }, i.src = d;
                } catch (c) {
                    L(c.message);
                }
            }, e.click();
        }, [
            g,
            f,
            p
        ]), ss = n.useCallback(()=>{
            const e = u.current;
            if (!e) return;
            const r = m.current;
            g();
            try {
                e.insertPageBreak(r.secIdx, r.paraIdx, r.charOffset);
            } catch  {}
            p();
        }, [
            g,
            p
        ]), ft = n.useCallback(()=>{
            const e = u.current;
            if (!e || !B) return;
            const r = m.current;
            try {
                const s = e.searchText(B, r.secIdx, r.paraIdx, r.charOffset, !0, W), o = y(s);
                if (o?.found) {
                    const a = {
                        secIdx: o.sectionIndex ?? r.secIdx,
                        paraIdx: o.paragraphIndex ?? o.paraIdx ?? r.paraIdx,
                        charOffset: o.charOffset ?? 0
                    };
                    f(a), $("");
                } else $(l("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            B,
            W,
            f,
            l
        ]), gt = n.useCallback(()=>{
            const e = u.current;
            if (!(!e || !B)) {
                g();
                try {
                    const r = e.replaceOne(B, X, W);
                    y(r)?.ok ? (p(), $(l("site.hwpEditor.replaced"))) : $(l("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            B,
            X,
            W,
            g,
            p,
            l
        ]), rs = n.useCallback(()=>{
            const e = u.current;
            if (!(!e || !B)) {
                g();
                try {
                    const r = e.replaceAll(B, X, W), s = y(r);
                    p(), $(`${l("site.hwpEditor.replaced")} ${s?.count ?? 0}`);
                } catch  {}
            }
        }, [
            B,
            X,
            W,
            g,
            p,
            l
        ]), wt = n.useCallback((e)=>{
            const r = u.current;
            if (r) {
                try {
                    const s = e === "hwp" ? r.exportHwp() : r.exportHwpx(), o = new Blob([
                        s
                    ], {
                        type: "application/octet-stream"
                    }), a = URL.createObjectURL(o), c = document.createElement("a");
                    c.href = a;
                    const i = Z ? Z.replace(/\.[^.]+$/, "") : "document";
                    c.download = `${i}.${e}`, c.click(), URL.revokeObjectURL(a);
                } catch (s) {
                    L(`내보내기 실패: ${s.message}`);
                }
                oe(!1);
            }
        }, [
            Z
        ]), ns = n.useCallback((e)=>{
            if (se.current) return;
            const r = u.current;
            if (!r || !m.current) return;
            const s = m.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), Ne();
                        return;
                    case "y":
                        e.preventDefault(), Ee();
                        return;
                    case "b":
                        e.preventDefault(), Re();
                        return;
                    case "i":
                        e.preventDefault(), De();
                        return;
                    case "u":
                        e.preventDefault(), Le();
                        return;
                    case "f":
                        e.preventDefault(), he(!0);
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const a = r.getSectionCount();
                                if (a === 0) return;
                                const c = a - 1, i = r.getParagraphCount(c) - 1, d = r.getParagraphLength(c, i), x = {
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
                            let c = a.paraIdx, i = a.charOffset, d = s.paraIdx, x = s.charOffset;
                            (c > d || c === d && i > x) && ([c, d] = [
                                d,
                                c
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const S = r.copySelection(s.secIdx, c, i, d, x), C = y(S);
                                C?.text && navigator.clipboard.writeText(C.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const a = h.current;
                            if (!a) return;
                            let c = a.paraIdx, i = a.charOffset, d = s.paraIdx, x = s.charOffset;
                            (c > d || c === d && i > x) && ([c, d] = [
                                d,
                                c
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const S = r.copySelection(s.secIdx, c, i, d, x), C = y(S);
                                C?.text && navigator.clipboard.writeText(C.text).catch(()=>{});
                            } catch  {}
                            Fe();
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), navigator.clipboard.readText().then((a)=>{
                                a && A(a);
                            }).catch(()=>{});
                            return;
                        }
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    {
                        if (e.preventDefault(), D) {
                            const c = z();
                            c && (j(c), p(), w(c));
                        }
                        g();
                        const a = m.current;
                        try {
                            const c = r.splitParagraph(a.secIdx, a.paraIdx, a.charOffset), i = y(c), d = {
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
                    e.preventDefault(), Fe();
                    break;
                case "Delete":
                    e.preventDefault(), ut();
                    break;
                case "ArrowLeft":
                    {
                        e.preventDefault();
                        const a = {
                            ...s
                        };
                        if (s.charOffset > 0) a.charOffset = s.charOffset - 1;
                        else if (s.paraIdx > 0) {
                            a.paraIdx = s.paraIdx - 1;
                            try {
                                a.charOffset = r.getParagraphLength(s.secIdx, a.paraIdx);
                            } catch  {
                                a.charOffset = 0;
                            }
                        } else break;
                        e.shiftKey ? (h.current || (h.current = {
                            ...s
                        }), j(a), O(h.current, a), k(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowRight":
                    {
                        e.preventDefault();
                        const a = {
                            ...s
                        };
                        try {
                            const c = r.getParagraphLength(s.secIdx, s.paraIdx);
                            if (s.charOffset < c) a.charOffset = s.charOffset + 1;
                            else {
                                const i = r.getParagraphCount(s.secIdx);
                                if (s.paraIdx < i - 1) a.paraIdx = s.paraIdx + 1, a.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        e.shiftKey ? (h.current || (h.current = {
                            ...s
                        }), j(a), O(h.current, a), k(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const a = R ? R.x : 0;
                        try {
                            const c = r.moveVertical(s.secIdx, s.paraIdx, s.charOffset, -1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(c);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? s.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? s.paraIdx,
                                    charOffset: i.charOffset ?? s.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...s
                                }), j(d), O(h.current, d), k(!0), w(d)) : f(d);
                            }
                        } catch  {
                            if (s.paraIdx > 0) {
                                const c = {
                                    ...s,
                                    paraIdx: s.paraIdx - 1
                                };
                                try {
                                    c.charOffset = Math.min(s.charOffset, r.getParagraphLength(s.secIdx, c.paraIdx));
                                } catch  {
                                    c.charOffset = 0;
                                }
                                e.shiftKey ? (h.current || (h.current = {
                                    ...s
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
                            const c = r.moveVertical(s.secIdx, s.paraIdx, s.charOffset, 1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(c);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? s.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? s.paraIdx,
                                    charOffset: i.charOffset ?? s.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...s
                                }), j(d), O(h.current, d), k(!0), w(d)) : f(d);
                            }
                        } catch  {
                            try {
                                const c = r.getParagraphCount(s.secIdx);
                                if (s.paraIdx < c - 1) {
                                    const i = {
                                        ...s,
                                        paraIdx: s.paraIdx + 1
                                    };
                                    i.charOffset = Math.min(s.charOffset, r.getParagraphLength(s.secIdx, i.paraIdx)), e.shiftKey ? (h.current || (h.current = {
                                        ...s
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
                            const a = y(r.getLineInfo(s.secIdx, s.paraIdx, s.charOffset)), c = {
                                ...s,
                                charOffset: a ? a.charStart : 0
                            };
                            e.shiftKey ? (h.current || (h.current = {
                                ...s
                            }), j(c), O(h.current, c), k(!0), w(c)) : f(c);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        try {
                            const a = y(r.getLineInfo(s.secIdx, s.paraIdx, s.charOffset)), c = r.getParagraphLength(s.secIdx, s.paraIdx), i = {
                                ...s,
                                charOffset: a ? Math.min(a.charEnd, c) : c
                            };
                            e.shiftKey ? (h.current || (h.current = {
                                ...s
                            }), j(i), O(h.current, i), k(!0), w(i)) : f(i);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), A("	");
                    break;
                case "Escape":
                    he(!1), re(!1), ne(!1), ae(!1), ce(!1), oe(!1), ie(!1), le(!1);
                    break;
            }
        }, [
            ge,
            D,
            R,
            Ne,
            Ee,
            Re,
            De,
            Le,
            A,
            z,
            Fe,
            ut,
            g,
            f,
            p,
            O,
            w,
            j
        ]), as = n.useCallback(()=>{
            se.current = !0;
        }, []), cs = n.useCallback((e)=>{
            se.current = !1;
            const r = e.data;
            r && A(r), _.current && (_.current.value = "");
        }, [
            A
        ]), os = n.useCallback((e)=>{
            if (se.current) return;
            const r = e.target, s = r.value;
            s && (A(s), r.value = "");
        }, [
            A
        ]), is = n.useCallback((e)=>{
            fe(e.target.value);
        }, []), yt = n.useCallback(()=>{
            const e = parseInt(xe, 10);
            !isNaN(e) && e >= 1 && e <= V ? J(e - 1) : fe(String(U + 1));
        }, [
            xe,
            V,
            U
        ]), ls = n.useCallback(()=>Te((e)=>Math.min(e + 10, 200)), []), hs = n.useCallback(()=>Te((e)=>Math.max(e - 10, 30)), []);
        n.useEffect(()=>{
            fe(String(U + 1));
        }, [
            U
        ]), n.useEffect(()=>{
            if (!ge) return;
            const e = setInterval(()=>Lt((r)=>!r), 530);
            return ()=>clearInterval(e);
        }, [
            ge
        ]), n.useEffect(()=>{
            const e = (r)=>{
                const s = r.target, o = (a, c)=>!a.current?.contains(s) && !c.current?.contains(s);
                ye && o(Ze, Qe) && re(!1), be && o(Xe, Ye) && ne(!1), je && o(qe, Ge) && ae(!1), me && o(et, tt) && ce(!1), ve && o(st, rt) && oe(!1), Ce && o(nt, at) && ie(!1), ke && o(ot, ct) && le(!1);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            ye,
            be,
            je,
            me,
            ve,
            Ce,
            ke
        ]), n.useEffect(()=>()=>{
                if (u.current) {
                    try {
                        u.current.free();
                    } catch  {}
                    u.current = null;
                }
            }, []);
        const bt = u.current !== null && He.length > 0, Be = vt(I.textColor), Pe = vt(I.highlight), jt = (e, r, s, o)=>t.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    t.jsx("div", {
                        className: "hwp-color-grid",
                        children: bs.map((a, c)=>t.jsx("div", {
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
                                value: r,
                                onChange: (a)=>s(a.target.value)
                            }),
                            t.jsx("button", {
                                onClick: ()=>o(r),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(xs, {
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
                                        onClick: ()=>L(""),
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
                            b && !bt && !F && t.jsx("div", {
                                className: `hwp-editor-container${Bt ? " drag-over" : ""}`,
                                onDragOver: ht,
                                onDragLeave: dt,
                                onDrop: pt,
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
                                                    onClick: it,
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
                                                    onClick: lt,
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
                            bt && t.jsxs("div", {
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
                                                        onClick: it,
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
                                                        onClick: lt,
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
                                                                ref: st,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.export"),
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
                                                            ve && t.jsxs("div", {
                                                                ref: rt,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    t.jsx("button", {
                                                                        onClick: ()=>wt("hwp"),
                                                                        children: l("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    t.jsx("button", {
                                                                        onClick: ()=>wt("hwpx"),
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
                                                        onClick: Ee,
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
                                                                ref: Ze,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.font"),
                                                                onClick: ()=>re((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontFamily: Se,
                                                                            maxWidth: 96,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap",
                                                                            display: "inline-block"
                                                                        },
                                                                        children: Se
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
                                                                ref: Qe,
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: gs.map((e)=>t.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: Se === e ? "active" : "",
                                                                        onClick: ()=>Vt(e),
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
                                                                ref: Xe,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.fontSize"),
                                                                onClick: ()=>ne((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        children: _e
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
                                                            be && t.jsx("div", {
                                                                ref: Ye,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: ws.map((e)=>t.jsx("button", {
                                                                        className: parseFloat(_e) === e ? "active" : "",
                                                                        onClick: ()=>Jt(e),
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
                                                        onClick: Re,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.italic ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: De,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.underline ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: Le,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${I.strikethrough ? " active" : ""}`,
                                                        title: l("site.hwpEditor.strikethrough"),
                                                        onClick: Kt,
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
                                                                ref: qe,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.textColor"),
                                                                onClick: ()=>ae((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: Be,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
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
                                                                ref: Ge,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: jt(Be, Ht, Tt, qt)
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: et,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.highlight"),
                                                                onClick: ()=>ce((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: Pe,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    t.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: Pe
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
                                                            me && t.jsx("div", {
                                                                ref: tt,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: jt(Pe, Mt, Wt, Gt)
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
                                                    const r = {
                                                        left: l("site.hwpEditor.alignLeft"),
                                                        center: l("site.hwpEditor.alignCenter"),
                                                        right: l("site.hwpEditor.alignRight"),
                                                        justify: l("site.hwpEditor.alignJustify")
                                                    }, s = {
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
                                                        className: `hwp-toolbar-btn${G.alignment === e ? " active" : ""}`,
                                                        title: r[e],
                                                        onClick: ()=>Zt(e),
                                                        children: s[e]
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
                                                            ref: nt,
                                                            className: "hwp-toolbar-btn",
                                                            title: l("site.hwpEditor.lineSpacing"),
                                                            onClick: ()=>ie((e)=>!e),
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
                                                        Ce && t.jsx("div", {
                                                            ref: at,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: ys.map((e)=>t.jsx("button", {
                                                                    className: G.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>Qt(e.value),
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
                                                        onClick: ()=>xt(-1),
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
                                                        onClick: ()=>xt(1),
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
                                                                ref: ot,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.insertTable"),
                                                                onClick: ()=>le((e)=>!e),
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
                                                            ke && t.jsxs("div", {
                                                                ref: ct,
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
                                                                                value: Ie,
                                                                                onChange: (e)=>Pt(Number(e.target.value))
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
                                                                                value: Oe,
                                                                                onChange: (e)=>zt(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: es,
                                                                        children: l("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.insertImage"),
                                                        onClick: ts,
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
                                                        onClick: ss,
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
                                                    className: `hwp-toolbar-btn${Ve ? " active" : ""}`,
                                                    title: `${l("site.hwpEditor.findReplace")} (Ctrl+F)`,
                                                    onClick: ()=>he((e)=>!e),
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
                                            Z && t.jsxs("span", {
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
                                                    Z,
                                                    Ot ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    Ve && t.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.find"),
                                                value: B,
                                                onChange: (e)=>{
                                                    $t(e.target.value), $("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && ft();
                                                },
                                                autoFocus: !0
                                            }),
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.replace"),
                                                value: X,
                                                onChange: (e)=>At(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && gt();
                                                }
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: ft,
                                                children: l("site.hwpEditor.findNext")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: gt,
                                                children: l("site.hwpEditor.replaceOne")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: rs,
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
                                                        checked: W,
                                                        onChange: (e)=>Ut(e.target.checked)
                                                    }),
                                                    l("site.hwpEditor.caseSensitive")
                                                ]
                                            }),
                                            Je && t.jsx("span", {
                                                className: "hwp-find-info",
                                                children: Je
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    he(!1), $("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    t.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>_.current?.focus(),
                                        onDragOver: ht,
                                        onDragLeave: dt,
                                        onDrop: pt,
                                        children: He.map((e, r)=>{
                                            const s = q.current[r], o = R && R.pageIndex === r, a = St.filter((c)=>c.pageIndex === r);
                                            return t.jsxs("div", {
                                                ref: (c)=>{
                                                    $e.current[r] = c;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    position: "relative",
                                                    cursor: "text",
                                                    userSelect: "none",
                                                    transform: `scale(${Y / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onClick: (c)=>_t(c, r),
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
                                                    s && a.map((c, i)=>t.jsx("div", {
                                                            className: "hwp-selection-overlay",
                                                            style: {
                                                                position: "absolute",
                                                                left: `${(c.x - s.x) / s.w * 100}%`,
                                                                top: `${(c.y - s.y) / s.h * 100}%`,
                                                                width: `${c.width / s.w * 100}%`,
                                                                height: `${c.height / s.h * 100}%`
                                                            }
                                                        }, i)),
                                                    o && s && Dt && t.jsx("div", {
                                                        className: "hwp-cursor",
                                                        style: {
                                                            position: "absolute",
                                                            left: `${(R.x - s.x) / s.w * 100}%`,
                                                            top: `${(R.y - s.y) / s.h * 100}%`,
                                                            height: `${R.height / s.h * 100}%`,
                                                            width: "2px",
                                                            pointerEvents: "none"
                                                        }
                                                    })
                                                ]
                                            }, r);
                                        })
                                    }),
                                    t.jsx("textarea", {
                                        ref: _,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: as,
                                        onCompositionEnd: cs,
                                        onInput: os,
                                        onKeyDown: ns,
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
                                                        disabled: U <= 0,
                                                        onClick: ()=>J((e)=>Math.max(0, e - 1)),
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
                                                                value: xe,
                                                                onChange: is,
                                                                onBlur: yt,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && yt();
                                                                }
                                                            }),
                                                            " / ",
                                                            V
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: U >= V - 1,
                                                        onClick: ()=>J((e)=>Math.min(V - 1, e + 1)),
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
                                                        onClick: hs,
                                                        disabled: Y <= 30,
                                                        children: "−"
                                                    }),
                                                    t.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            Y,
                                                            "%"
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: ls,
                                                        disabled: Y >= 200,
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
export { ks as default, __tla };
