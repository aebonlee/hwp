import { u as Dn, r as s, _ as yr, j as r, __tla as __tla_0 } from "./index-BrMzuWn5.js";
import { u as En, __tla as __tla_1 } from "./useRhwp-B8kAuW2M.js";
import { S as Pn } from "./SEOHead-CntKNw5z.js";
let An;
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
    function He(v) {
        const V = parseInt(v.slice(1, 3), 16), Q = parseInt(v.slice(3, 5), 16);
        return parseInt(v.slice(5, 7), 16) << 16 | Q << 8 | V;
    }
    function wr(v) {
        const V = v & 255, Q = v >> 8 & 255, u = v >> 16 & 255;
        return "#" + [
            V,
            Q,
            u
        ].map((d)=>d.toString(16).padStart(2, "0")).join("");
    }
    function g(v) {
        try {
            return JSON.parse(v);
        } catch  {
            return null;
        }
    }
    let Fn, Bn, Tn, Ln, Mn;
    Fn = [
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
    Bn = [
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
    Tn = [
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
    Ln = [
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
    Mn = 100;
    An = ()=>{
        const { ready: v, loading: V, error: Q } = En(), { t: u } = Dn(), d = s.useRef(null), [F, jr] = s.useState(0), [pt, mr] = s.useState(0), [G, ae] = s.useState(0), [We, Ae] = s.useState("1"), [fe, ft] = s.useState(100), [ce, Ir] = s.useState(""), [Cr, gt] = s.useState(!1), y = s.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [vr, bt] = s.useState(null), [R, B] = s.useState(null), x = s.useRef(null), [, k] = s.useState(!1), [yt, $] = s.useState([]), [wt, $e] = s.useState(!0), oe = s.useRef({}), Ke = s.useRef({}), le = s.useRef(window.devicePixelRatio || 1), jt = s.useRef({}), [D, kr] = s.useState({
            fontFamily: "맑은 고딕",
            fontSize: 1e3,
            bold: !1,
            italic: !1,
            underline: !1,
            strikethrough: !1,
            textColor: 0,
            highlight: He("#FFFF00")
        }), [ge, Or] = s.useState({
            alignment: "justify",
            lineSpacing: 160,
            marginLeft: 0,
            marginRight: 0,
            indent: 0
        }), K = s.useRef([]), J = s.useRef([]), [Nr, be] = s.useState(!1), [Sr, ye] = s.useState(!1), we = s.useRef(!1), Y = s.useRef(null), Rr = s.useRef({}), [Dr, Ue] = s.useState(!1), [mt, L] = s.useState(""), [_e, je] = s.useState(!1), [Ve, me] = s.useState(!1), [Je, Ie] = s.useState(!1), [Ye, Ce] = s.useState(!1), [Xe, ve] = s.useState(!1), [Ze, ke] = s.useState(!1), [Qe, Oe] = s.useState(!1), [Ge, Er] = s.useState(3), [qe, Pr] = s.useState(3), [Fr, Br] = s.useState("#000000"), [Tr, Lr] = s.useState("#FFFF00"), [et, It] = s.useState("맑은 고딕"), [Ct, vt] = s.useState("10"), [kt, Ne] = s.useState(!1), [M, Mr] = s.useState(""), [ie, zr] = s.useState(""), [X, Hr] = s.useState(!1), [Ot, Z] = s.useState(""), [C, W] = s.useState("body"), z = s.useRef(null), de = s.useRef(null), he = s.useRef(null), [Nt, St] = s.useState(!1), [I, T] = s.useState(null), [Wr, ue] = s.useState(!1), [A, U] = s.useState({
            width: 59528,
            height: 84188,
            marginTop: 5669,
            marginBottom: 4252,
            marginLeft: 4252,
            marginRight: 4252,
            landscape: !1
        }), [Rt, Dt] = s.useState([]), [tt, Se] = s.useState(!1), [rt, Ar] = s.useState(!1), [nt, $r] = s.useState(!1), [Kr, xe] = s.useState(!1), [Re, Et] = s.useState(""), [Pt, Ft] = s.useState([]), Bt = s.useRef(null), Tt = s.useRef(null), Lt = s.useRef(null), Mt = s.useRef(null), zt = s.useRef(null), Ht = s.useRef(null), Wt = s.useRef(null), At = s.useRef(null), $t = s.useRef(null), Kt = s.useRef(null), Ut = s.useRef(null), _t = s.useRef(null), Vt = s.useRef(null), Jt = s.useRef(null), Yt = s.useRef(null), Xt = s.useRef(null), m = s.useCallback((e)=>{
            y.current = e, bt(e);
        }, []), q = s.useCallback((e, n)=>{
            const t = d.current;
            if (!t) return null;
            const a = oe.current[n];
            if (!a) return null;
            const o = le.current, c = a.getBoundingClientRect(), l = (e.clientX - c.left) / c.width * a.width / o, p = (e.clientY - c.top) / c.height * a.height / o;
            try {
                const f = t.hitTest(n, l, p), w = g(f);
                return w ? {
                    secIdx: w.sectionIndex ?? 0,
                    paraIdx: w.paragraphIndex ?? w.paraIndex ?? 0,
                    charOffset: w.charOffset ?? 0
                } : null;
            } catch  {
                return null;
            }
        }, []), i = s.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.pageCount();
                jr(n), mr((t)=>t + 1);
            } catch (n) {
                L(String(n));
            }
        }, []), j = s.useCallback((e)=>{
            const n = d.current;
            if (!n) {
                B(null);
                return;
            }
            try {
                const t = g(n.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                t && t.x !== void 0 ? (B({
                    pageIndex: t.pageIndex ?? 0,
                    x: t.x,
                    y: t.y,
                    height: t.height
                }), ae(t.pageIndex ?? 0)) : B(null);
            } catch  {
                B(null);
            }
        }, []), O = s.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    const t = n.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), a = g(t);
                    if (a) {
                        const o = a.fontFamily || "맑은 고딕", c = a.fontSize || 1e3;
                        It(o), vt(String(Math.round(c / 100))), kr({
                            fontFamily: o,
                            fontSize: c,
                            bold: !!a.bold,
                            italic: !!a.italic,
                            underline: !!a.underline,
                            strikethrough: !!a.strikethrough,
                            textColor: a.textColor ?? 0,
                            highlight: a.highlight ?? He("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const t = n.getParaPropertiesAt(e.secIdx, e.paraIdx), a = g(t);
                    a && Or({
                        alignment: a.alignment || "justify",
                        lineSpacing: a.lineSpacing || 160,
                        marginLeft: a.marginLeft || 0,
                        marginRight: a.marginRight || 0,
                        indent: a.indent || 0
                    });
                } catch  {}
            }
        }, []), N = s.useCallback((e, n)=>{
            const t = d.current;
            if (!t) {
                $([]);
                return;
            }
            let a = e.paraIdx, o = e.charOffset, c = n.paraIdx, l = n.charOffset;
            (a > c || a === c && o > l) && ([a, c] = [
                c,
                a
            ], [o, l] = [
                l,
                o
            ]);
            try {
                const p = t.getSelectionRects(e.secIdx, a, o, c, l), f = JSON.parse(p);
                $(Array.isArray(f) ? f : []);
            } catch  {
                $([]);
            }
        }, []), b = s.useCallback((e, n = !0)=>{
            m(e), n ? (x.current = null, k(!1), $([])) : x.current && N(x.current, e), j(e), O(e), gt(!0), Y.current?.focus();
        }, [
            m,
            j,
            O,
            N
        ]), h = s.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.saveSnapshot();
                if (K.current.push(n), K.current.length > Mn) {
                    const t = K.current.shift();
                    if (t !== void 0) try {
                        e.discardSnapshot(t);
                    } catch  {}
                }
                J.current.forEach((t)=>{
                    try {
                        e.discardSnapshot(t);
                    } catch  {}
                }), J.current = [], be(!0), ye(!1);
            } catch  {}
        }, []), ee = s.useCallback(()=>{
            const e = d.current;
            if (!e || K.current.length === 0) return;
            const n = K.current.pop();
            try {
                const a = e.saveSnapshot();
                J.current.push(a), e.restoreSnapshot(n);
                try {
                    e.discardSnapshot(n);
                } catch  {}
            } catch  {}
            i(), be(K.current.length > 0), ye(!0);
            const t = y.current;
            j(t), O(t);
        }, [
            i,
            j,
            O
        ]), te = s.useCallback(()=>{
            const e = d.current;
            if (!e || J.current.length === 0) return;
            const n = J.current.pop();
            try {
                const a = e.saveSnapshot();
                K.current.push(a), e.restoreSnapshot(n);
                try {
                    e.discardSnapshot(n);
                } catch  {}
            } catch  {}
            i(), be(!0), ye(J.current.length > 0);
            const t = y.current;
            j(t), O(t);
        }, [
            i,
            j,
            O
        ]), De = s.useCallback((e, n)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (d.current && d.current !== e) try {
                d.current.free();
            } catch  {}
            d.current = e, K.current = [], J.current = [], be(!1), ye(!1), Ir(n), gt(!1), bt(null), B(null), x.current = null, k(!1), $([]), ae(0), L(""), jt.current = {}, W("body"), z.current = null, de.current = null, he.current = null, T(null), i();
            try {
                const t = g(e.getCaretPosition());
                if (t && t.paragraphIndex !== void 0) {
                    const a = {
                        secIdx: t.sectionIndex ?? 0,
                        paraIdx: t.paragraphIndex,
                        charOffset: t.charOffset ?? 0
                    };
                    m(a), setTimeout(()=>j(a), 80);
                } else {
                    const a = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    m(a), setTimeout(()=>j(a), 80);
                }
            } catch  {
                const t = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                m(t), setTimeout(()=>j(t), 80);
            }
        }, [
            i,
            m,
            j
        ]), Zt = s.useCallback(async ()=>{
            if (v) try {
                const { HwpDocument: e } = await yr(async ()=>{
                    const { HwpDocument: t } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: t
                    };
                }, []), n = e.createEmpty();
                g(n.createBlankDocument()), De(n, "새 문서.hwp");
            } catch (e) {
                L(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            v,
            De
        ]), Ee = s.useCallback(async (e)=>{
            if (!v) return;
            const n = e.name.split(".").pop()?.toLowerCase();
            if (n !== "hwp" && n !== "hwpx") {
                L(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: t } = await yr(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), a = new Uint8Array(await e.arrayBuffer()), o = new t(a);
                De(o, e.name);
            } catch (t) {
                L(`파일 열기 실패: ${t.message}`);
            }
        }, [
            v,
            De
        ]), Qt = s.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && Ee(e.files[0]);
            }, e.click();
        }, [
            Ee
        ]), Gt = s.useCallback((e)=>{
            e.preventDefault(), Ue(!0);
        }, []), qt = s.useCallback(()=>Ue(!1), []), er = s.useCallback((e)=>{
            e.preventDefault(), Ue(!1);
            const n = e.dataTransfer.files[0];
            n && Ee(n);
        }, [
            Ee
        ]), Ur = s.useCallback((e, n)=>{
            const t = d.current;
            if (!t) return;
            const a = oe.current[n];
            if (!a) return;
            const o = le.current, c = a.getBoundingClientRect(), l = (e.clientX - c.left) / c.width * a.width / o, p = (e.clientY - c.top) / c.height * a.height / o;
            try {
                const f = t.hitTest(n, l, p), w = g(f);
                if (!w) return;
                const E = w.paragraphIndex ?? w.paraIndex ?? 0, P = {
                    secIdx: w.sectionIndex ?? 0,
                    paraIdx: E,
                    charOffset: w.charOffset ?? 0
                };
                e.shiftKey && x.current ? (m(P), N(x.current, P), k(!0), j(P), O(P)) : (x.current = {
                    ...P
                }, b(P, !0));
            } catch  {}
            Y.current?.focus();
        }, [
            m,
            b,
            N,
            j,
            O
        ]), H = s.useCallback(()=>{
            const e = d.current, n = x.current, t = y.current;
            if (!e || !n) return null;
            let a = n.paraIdx, o = n.charOffset, c = t.paraIdx, l = t.charOffset;
            (a > c || a === c && o > l) && ([a, c] = [
                c,
                a
            ], [o, l] = [
                l,
                o
            ]);
            try {
                const p = e.deleteRange(t.secIdx, a, o, c, l), f = g(p);
                return x.current = null, k(!1), $([]), f?.ok ? {
                    secIdx: t.secIdx,
                    paraIdx: f.paraIdx,
                    charOffset: f.charOffset
                } : {
                    ...n
                };
            } catch  {
                return x.current = null, k(!1), $([]), {
                    ...n
                };
            }
        }, []), _ = s.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            h();
            let t = y.current;
            if (x.current) {
                const a = H();
                a && (t = a);
            }
            try {
                const a = n.insertText(t.secIdx, t.paraIdx, t.charOffset, e), c = g(a)?.charOffset ?? t.charOffset + e.length, l = {
                    ...t,
                    charOffset: c
                };
                i(), b(l);
            } catch (a) {
                console.error("insertText failed:", a);
            }
        }, [
            h,
            H,
            b,
            i
        ]), st = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            if (x.current) {
                h();
                const t = H();
                t && b(t), i();
                return;
            }
            const n = y.current;
            h();
            try {
                if (n.charOffset > 0) {
                    const t = e.deleteText(n.secIdx, n.paraIdx, n.charOffset - 1, 1), o = g(t)?.charOffset ?? n.charOffset - 1;
                    b({
                        ...n,
                        charOffset: o
                    });
                } else if (n.paraIdx > 0) {
                    const t = e.getParagraphLength(n.secIdx, n.paraIdx - 1), a = e.mergeParagraph(n.secIdx, n.paraIdx), o = g(a);
                    b({
                        secIdx: n.secIdx,
                        paraIdx: o?.paraIdx ?? n.paraIdx - 1,
                        charOffset: o?.charOffset ?? t
                    });
                }
            } catch (t) {
                console.error("deleteCharBefore failed:", t);
            }
            i();
        }, [
            H,
            h,
            b,
            i
        ]), tr = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            if (x.current) {
                h();
                const t = H();
                t && b(t), i();
                return;
            }
            const n = y.current;
            h();
            try {
                const t = e.getParagraphLength(n.secIdx, n.paraIdx);
                if (n.charOffset < t) e.deleteText(n.secIdx, n.paraIdx, n.charOffset, 1), b({
                    ...n
                });
                else {
                    const a = e.getParagraphCount(n.secIdx);
                    if (n.paraIdx < a - 1) {
                        const o = e.mergeParagraph(n.secIdx, n.paraIdx + 1), c = g(o);
                        b({
                            secIdx: n.secIdx,
                            paraIdx: c?.paraIdx ?? n.paraIdx,
                            charOffset: c?.charOffset ?? n.charOffset
                        });
                    }
                }
            } catch (t) {
                console.error("deleteCharAfter failed:", t);
            }
            i();
        }, [
            H,
            h,
            b,
            i
        ]), S = s.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = y.current;
            if (h(), x.current) {
                const a = x.current;
                let o = a.paraIdx, c = a.charOffset, l = t.paraIdx, p = t.charOffset;
                (o > l || o === l && c > p) && ([o, l] = [
                    l,
                    o
                ], [c, p] = [
                    p,
                    c
                ]);
                try {
                    n.beginBatch();
                    for(let f = o; f <= l; f++){
                        const w = f === o ? c : 0, E = f === l ? p : n.getParagraphLength(t.secIdx, f);
                        n.applyCharFormat(t.secIdx, f, w, E, JSON.stringify(e));
                    }
                    n.endBatch();
                } catch  {
                    try {
                        n.endBatch();
                    } catch  {}
                }
            } else try {
                const a = n.getParagraphLength(t.secIdx, t.paraIdx), o = Math.min(t.charOffset + 1, a);
                t.charOffset < o && n.applyCharFormat(t.secIdx, t.paraIdx, t.charOffset, o, JSON.stringify(e));
            } catch  {}
            i(), O(t);
        }, [
            h,
            i,
            O
        ]), re = s.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = y.current;
            h();
            try {
                n.applyParaFormat(t.secIdx, t.paraIdx, JSON.stringify(e));
            } catch  {}
            i(), O(t);
        }, [
            h,
            i,
            O
        ]), at = s.useCallback(()=>S({
                bold: !D.bold
            }), [
            S,
            D.bold
        ]), ct = s.useCallback(()=>S({
                italic: !D.italic
            }), [
            S,
            D.italic
        ]), ot = s.useCallback(()=>S({
                underline: !D.underline
            }), [
            S,
            D.underline
        ]), _r = s.useCallback(()=>S({
                strikethrough: !D.strikethrough
            }), [
            S,
            D.strikethrough
        ]), Vr = s.useCallback((e)=>{
            S({
                fontFamily: e
            }), It(e), je(!1);
        }, [
            S
        ]), Jr = s.useCallback((e)=>{
            S({
                fontSize: Math.round(e * 100)
            }), vt(String(e)), me(!1);
        }, [
            S
        ]), Yr = s.useCallback((e)=>{
            re({
                alignment: e
            });
        }, [
            re
        ]), Xr = s.useCallback((e)=>{
            re({
                lineSpacing: e
            }), ke(!1);
        }, [
            re
        ]), rr = s.useCallback((e)=>{
            const n = Math.max(0, ge.marginLeft + e * 800);
            re({
                marginLeft: n
            });
        }, [
            re,
            ge.marginLeft
        ]), Zr = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                const t = e.ensureDefaultBullet("●");
                e.applyParaFormat(n.secIdx, n.paraIdx, JSON.stringify({
                    numberingId: t,
                    numberingLevel: 0
                }));
            } catch  {}
            i();
        }, [
            h,
            i
        ]), Qr = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                const t = e.ensureDefaultNumbering();
                e.applyParaFormat(n.secIdx, n.paraIdx, JSON.stringify({
                    numberingId: t,
                    numberingLevel: 0
                }));
            } catch  {}
            i();
        }, [
            h,
            i
        ]), Gr = s.useCallback((e)=>{
            S({
                textColor: He(e)
            }), Ie(!1);
        }, [
            S
        ]), qr = s.useCallback((e)=>{
            S({
                highlight: He(e)
            }), Ce(!1);
        }, [
            S
        ]), en = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                const t = e.createTable(n.secIdx, n.paraIdx, n.charOffset, Ge, qe), a = g(t);
                a?.ok && b({
                    ...n,
                    paraIdx: a.paraIdx ?? n.paraIdx,
                    charOffset: 0
                });
            } catch (t) {
                L(t.message);
            }
            i(), Oe(!1);
        }, [
            h,
            b,
            i,
            Ge,
            qe
        ]), tn = s.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (n)=>{
                const t = n.target.files?.[0];
                if (!t) return;
                const a = d.current;
                if (!a) return;
                const o = y.current;
                h();
                try {
                    const c = new Uint8Array(await t.arrayBuffer()), l = new Image, p = URL.createObjectURL(t);
                    l.onload = ()=>{
                        URL.revokeObjectURL(p);
                        const f = l.naturalWidth, w = l.naturalHeight, E = Math.min(Math.round(f / 96 * 7200), 48e3), P = Math.round(w / f * E), Me = t.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            a.insertPicture(o.secIdx, o.paraIdx, o.charOffset, c, E, P, f, w, Me, t.name), b({
                                ...o,
                                charOffset: o.charOffset + 1
                            });
                        } catch (ne) {
                            L(ne.message);
                        }
                        i();
                    }, l.src = p;
                } catch (c) {
                    L(c.message);
                }
            }, e.click();
        }, [
            h,
            b,
            i
        ]), rn = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                e.insertPageBreak(n.secIdx, n.paraIdx, n.charOffset);
            } catch  {}
            i();
        }, [
            h,
            i
        ]), nn = s.useCallback((e, n)=>{
            if (e.button !== 0) return;
            const t = q(e, n);
            t && (St(!0), x.current = {
                ...t
            }, m(t), k(!1), $([]), j(t), O(t), Y.current?.focus());
        }, [
            q,
            m,
            j,
            O
        ]), sn = s.useCallback((e, n)=>{
            if (!Nt) return;
            const t = q(e, n);
            !t || !x.current || (m(t), N(x.current, t), k(!0), j(t));
        }, [
            Nt,
            q,
            m,
            N,
            j
        ]), an = s.useCallback(()=>{
            St(!1);
        }, []), cn = s.useCallback((e, n)=>{
            e.preventDefault();
            const t = d.current;
            if (!t) return;
            const a = q(e, n);
            if (!a) return;
            let o = "body", c;
            try {
                const l = t.getControlTextPositions(a.secIdx, a.paraIdx), f = JSON.parse(l)?.find((w)=>w.type === "table" && w.charOffset <= a.charOffset);
                if (f) {
                    o = "table";
                    try {
                        const w = t.getTableCellBboxes(a.secIdx, a.paraIdx, f.controlIdx), E = JSON.parse(w), P = oe.current[n];
                        if (P) {
                            const Me = le.current, ne = P.getBoundingClientRect(), gr = (e.clientX - ne.left) / ne.width * P.width / Me, br = (e.clientY - ne.top) / ne.height * P.height / Me, ze = E.find((se)=>gr >= se.x && gr <= se.x + se.w && br >= se.y && br <= se.y + se.h);
                            ze && (c = {
                                secIdx: a.secIdx,
                                paraIdx: a.paraIdx,
                                controlIdx: f.controlIdx,
                                row: ze.row,
                                col: ze.col,
                                cellIdx: ze.cellIdx
                            });
                        }
                    } catch  {}
                }
            } catch  {}
            T({
                x: e.clientX,
                y: e.clientY,
                type: o,
                tableInfo: c
            });
        }, [
            q
        ]), Pe = s.useCallback(()=>T(null), []), lt = s.useCallback((e, n, t, a)=>{
            W("cell"), z.current = {
                secIdx: e,
                parentParaIdx: n,
                controlIdx: t,
                cellIdx: a,
                cellParaIdx: 0,
                charOffset: 0
            };
            try {
                const o = d.current;
                if (o) {
                    const c = g(o.getCursorRectInCell(e, n, t, a, 0, 0));
                    c && c.x !== void 0 && B({
                        pageIndex: c.pageIndex ?? 0,
                        x: c.x,
                        y: c.y,
                        height: c.height
                    });
                }
            } catch  {}
        }, []), Fe = s.useCallback((e)=>{
            const n = d.current, t = z.current;
            if (!(!n || !t)) {
                h();
                try {
                    const a = n.insertTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, e), o = g(a);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, i();
                    try {
                        const c = g(n.getCursorRectInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset));
                        c && c.x !== void 0 && B({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            h,
            i
        ]), it = s.useCallback((e)=>{
            const n = d.current, t = z.current;
            if (!(!n || !t)) {
                h();
                try {
                    if (!e && t.charOffset > 0) n.deleteTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset - 1, 1), t.charOffset--;
                    else if (!e && t.charOffset === 0 && t.cellParaIdx > 0) {
                        const a = n.mergeParagraphInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx), o = g(a);
                        t.cellParaIdx = o?.paraIdx ?? t.cellParaIdx - 1, t.charOffset = o?.charOffset ?? 0;
                    } else e && n.deleteTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, 1);
                    i();
                    try {
                        const a = g(n.getCursorRectInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset));
                        a && a.x !== void 0 && B({
                            pageIndex: a.pageIndex ?? 0,
                            x: a.x,
                            y: a.y,
                            height: a.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            h,
            i
        ]), nr = s.useCallback(()=>{
            const e = d.current, n = z.current;
            if (!(!e || !n)) {
                h();
                try {
                    const t = e.splitParagraphInCell(n.secIdx, n.parentParaIdx, n.controlIdx, n.cellIdx, n.cellParaIdx, n.charOffset), a = g(t);
                    n.cellParaIdx = a?.paraIdx ?? n.cellParaIdx + 1, n.charOffset = 0, i();
                } catch  {}
            }
        }, [
            h,
            i
        ]), Be = s.useCallback((e)=>{
            const n = d.current, t = z.current;
            if (!(!n || !t)) {
                h();
                try {
                    n.applyCharFormatInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, t.charOffset + 1, JSON.stringify(e));
                } catch  {}
                i();
            }
        }, [
            h,
            i
        ]), sr = s.useCallback((e)=>{
            const n = I?.tableInfo, t = d.current;
            if (!(!t || !n)) {
                h();
                try {
                    t.insertTableRow(n.secIdx, n.paraIdx, n.controlIdx, n.row, e);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), on = s.useCallback(()=>{
            const e = I?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                h();
                try {
                    n.deleteTableRow(e.secIdx, e.paraIdx, e.controlIdx, e.row);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), ar = s.useCallback((e)=>{
            const n = I?.tableInfo, t = d.current;
            if (!(!t || !n)) {
                h();
                try {
                    t.insertTableColumn(n.secIdx, n.paraIdx, n.controlIdx, n.col, e);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), ln = s.useCallback(()=>{
            const e = I?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                h();
                try {
                    n.deleteTableColumn(e.secIdx, e.paraIdx, e.controlIdx, e.col);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), dn = s.useCallback(()=>{
            const e = I?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                h();
                try {
                    n.mergeTableCells(e.secIdx, e.paraIdx, e.controlIdx, e.row, e.col, e.row, e.col + 1);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), hn = s.useCallback(()=>{
            const e = I?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                h();
                try {
                    n.splitTableCell(e.secIdx, e.paraIdx, e.controlIdx, e.row, e.col);
                } catch  {}
                i(), T(null);
            }
        }, [
            I,
            h,
            i
        ]), dt = s.useCallback((e, n)=>{
            const t = d.current;
            if (t) {
                try {
                    t.createHeaderFooter(e, n, 0);
                } catch  {}
                W(n ? "header" : "footer"), de.current = {
                    secIdx: e,
                    isHeader: n,
                    applyTo: 0,
                    hfParaIdx: 0,
                    charOffset: 0
                };
                try {
                    const a = g(t.getCursorRectInHeaderFooter(e, n, 0, 0, 0, 0));
                    a && a.x !== void 0 && B({
                        pageIndex: a.pageIndex ?? 0,
                        x: a.x,
                        y: a.y,
                        height: a.height
                    });
                } catch  {}
            }
        }, []), Te = s.useCallback((e)=>{
            const n = d.current, t = de.current;
            if (!(!n || !t)) {
                h();
                try {
                    const a = n.insertTextInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, e), o = g(a);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, i();
                    try {
                        const c = g(n.getCursorRectInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, 0));
                        c && c.x !== void 0 && B({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            h,
            i
        ]), un = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                const t = e.insertFootnote(n.secIdx, n.paraIdx, n.charOffset), a = g(t);
                a?.ok && (W("footnote"), he.current = {
                    secIdx: n.secIdx,
                    paraIdx: n.paraIdx,
                    controlIdx: a.controlIdx ?? 0,
                    fnParaIdx: 0,
                    charOffset: 0
                });
            } catch  {}
            i();
        }, [
            h,
            i
        ]), Le = s.useCallback((e)=>{
            const n = d.current, t = he.current;
            if (!(!n || !t)) {
                h();
                try {
                    const a = n.insertTextInFootnote(t.secIdx, t.paraIdx, t.controlIdx, t.fnParaIdx, t.charOffset, e), o = g(a);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, i();
                    try {
                        const c = g(n.getCursorRectInFootnote(0, t.controlIdx, t.fnParaIdx, t.charOffset));
                        c && c.x !== void 0 && B({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            h,
            i
        ]), xn = s.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getPageDef(0), t = g(n);
                t && U({
                    width: t.width ?? 59528,
                    height: t.height ?? 84188,
                    marginTop: t.marginTop ?? 5669,
                    marginBottom: t.marginBottom ?? 4252,
                    marginLeft: t.marginLeft ?? 4252,
                    marginRight: t.marginRight ?? 4252,
                    landscape: !!t.landscape
                });
            } catch  {}
        }, []), pn = s.useCallback(()=>{
            const e = d.current;
            if (e) {
                h();
                try {
                    e.setPageDef(0, JSON.stringify(A));
                } catch  {}
                i(), ue(!1);
            }
        }, [
            A,
            h,
            i
        ]), fn = s.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getStyleList(), t = JSON.parse(n);
                Dt(Array.isArray(t) ? t : []);
            } catch  {
                Dt([]);
            }
        }, []), gn = s.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = y.current;
            h();
            try {
                n.applyStyle(t.secIdx, t.paraIdx, e);
            } catch  {}
            i(), O(t), Se(!1);
        }, [
            h,
            i,
            O
        ]), bn = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = y.current;
            h();
            try {
                e.createShapeControl(JSON.stringify({
                    sectionIdx: n.secIdx,
                    paraIdx: n.paraIdx,
                    charOffset: n.charOffset,
                    width: 14400,
                    height: 7200
                }));
            } catch  {}
            i();
        }, [
            h,
            i
        ]), pe = s.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getBookmarks(), t = JSON.parse(n);
                Ft(Array.isArray(t) ? t : []);
            } catch  {
                Ft([]);
            }
        }, []), cr = s.useCallback(()=>{
            const e = d.current;
            if (!e || !Re.trim()) return;
            const n = y.current;
            try {
                e.addBookmark(n.secIdx, n.paraIdx, n.charOffset, Re.trim());
            } catch  {}
            Et(""), pe();
        }, [
            Re,
            pe
        ]), yn = s.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    n.deleteBookmark(e.secIdx, e.paraIdx, e.controlIdx ?? 0);
                } catch  {}
                pe();
            }
        }, [
            pe
        ]), wn = s.useCallback((e)=>{
            b({
                secIdx: e.secIdx,
                paraIdx: e.paraIdx,
                charOffset: e.charOffset
            }), xe(!1);
        }, [
            b
        ]), jn = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = !rt;
            try {
                e.setShowControlCodes(n);
            } catch  {}
            Ar(n), i();
        }, [
            rt,
            i
        ]), mn = s.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = !nt;
            try {
                e.setShowParagraphMarks(n);
            } catch  {}
            $r(n), i();
        }, [
            nt,
            i
        ]), ht = s.useCallback(async ()=>{
            const e = d.current;
            if (e) {
                try {
                    const n = await navigator.clipboard.read();
                    for (const t of n)if (t.types.includes("text/html")) {
                        const o = await (await t.getType("text/html")).text();
                        h();
                        const c = y.current;
                        if (x.current) {
                            const l = H();
                            l && m(l);
                        }
                        try {
                            const l = e.pasteHtml(y.current.secIdx, y.current.paraIdx, y.current.charOffset, o), p = g(l);
                            p?.ok && b({
                                secIdx: y.current.secIdx,
                                paraIdx: p.paraIdx ?? c.paraIdx,
                                charOffset: p.charOffset ?? 0
                            });
                        } catch  {}
                        i();
                        return;
                    }
                } catch  {}
                try {
                    const n = await navigator.clipboard.readText();
                    n && _(n);
                } catch  {}
            }
        }, [
            h,
            H,
            m,
            b,
            _,
            i
        ]), or = s.useCallback((e)=>{
            const n = z.current;
            if (!n) {
                W("body"), z.current = null;
                return;
            }
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), ee();
                        return;
                    case "y":
                        e.preventDefault(), te();
                        return;
                    case "b":
                        e.preventDefault(), Be({
                            bold: !0
                        });
                        return;
                    case "i":
                        e.preventDefault(), Be({
                            italic: !0
                        });
                        return;
                    case "u":
                        e.preventDefault(), Be({
                            underline: !0
                        });
                        return;
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    e.preventDefault(), nr();
                    break;
                case "Backspace":
                    e.preventDefault(), it(!1);
                    break;
                case "Delete":
                    e.preventDefault(), it(!0);
                    break;
                case "Escape":
                    e.preventDefault(), W("body"), z.current = null;
                    break;
                case "Tab":
                    {
                        e.preventDefault();
                        const a = d.current;
                        if (!a) break;
                        try {
                            const o = g(a.getTableDimensions(n.secIdx, n.parentParaIdx, n.controlIdx));
                            if (o) {
                                const c = o.rows * o.cols;
                                n.cellIdx + 1 < c && lt(n.secIdx, n.parentParaIdx, n.controlIdx, n.cellIdx + 1);
                            }
                        } catch  {}
                        break;
                    }
            }
        }, [
            ee,
            te,
            Be,
            nr,
            it,
            lt
        ]), lr = s.useCallback((e)=>{
            e.key === "Escape" && (e.preventDefault(), W("body"), de.current = null);
        }, []), ir = s.useCallback((e)=>{
            e.key === "Escape" && (e.preventDefault(), W("body"), he.current = null);
        }, []), dr = s.useCallback(()=>{
            const e = d.current;
            if (!e || !M) return;
            const n = y.current;
            try {
                const t = e.searchText(M, n.secIdx, n.paraIdx, n.charOffset, !0, X), a = g(t);
                if (a?.found) {
                    const o = {
                        secIdx: a.sectionIndex ?? n.secIdx,
                        paraIdx: a.paragraphIndex ?? a.paraIdx ?? n.paraIdx,
                        charOffset: a.charOffset ?? 0
                    };
                    b(o), Z("");
                } else Z(u("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            M,
            X,
            b,
            u
        ]), hr = s.useCallback(()=>{
            const e = d.current;
            if (!(!e || !M)) {
                h();
                try {
                    const n = e.replaceOne(M, ie, X);
                    g(n)?.ok ? (i(), Z(u("site.hwpEditor.replaced"))) : Z(u("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            M,
            ie,
            X,
            h,
            i,
            u
        ]), In = s.useCallback(()=>{
            const e = d.current;
            if (!(!e || !M)) {
                h();
                try {
                    const n = e.replaceAll(M, ie, X), t = g(n);
                    i(), Z(`${u("site.hwpEditor.replaced")} ${t?.count ?? 0}`);
                } catch  {}
            }
        }, [
            M,
            ie,
            X,
            h,
            i,
            u
        ]), ur = s.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    const t = e === "hwp" ? n.exportHwp() : n.exportHwpx(), a = new Blob([
                        t
                    ], {
                        type: "application/octet-stream"
                    }), o = URL.createObjectURL(a), c = document.createElement("a");
                    c.href = o;
                    const l = ce ? ce.replace(/\.[^.]+$/, "") : "document";
                    c.download = `${l}.${e}`, c.click(), URL.revokeObjectURL(o);
                } catch (t) {
                    L(`내보내기 실패: ${t.message}`);
                }
                ve(!1);
            }
        }, [
            ce
        ]), Cn = s.useCallback((e)=>{
            if (we.current) return;
            const n = d.current;
            if (!n || !y.current) return;
            if (C === "cell") {
                or(e);
                return;
            }
            if (C === "header" || C === "footer") {
                lr(e);
                return;
            }
            if (C === "footnote") {
                ir(e);
                return;
            }
            const t = y.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), ee();
                        return;
                    case "y":
                        e.preventDefault(), te();
                        return;
                    case "b":
                        e.preventDefault(), at();
                        return;
                    case "i":
                        e.preventDefault(), ct();
                        return;
                    case "u":
                        e.preventDefault(), ot();
                        return;
                    case "f":
                        e.preventDefault(), Ne(!0);
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const o = n.getSectionCount();
                                if (o === 0) return;
                                const c = o - 1, l = n.getParagraphCount(c) - 1, p = n.getParagraphLength(c, l), f = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, w = {
                                    secIdx: c,
                                    paraIdx: l,
                                    charOffset: p
                                };
                                x.current = f, m(w), N(f, w), k(!0), j(w);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            e.preventDefault();
                            const o = x.current;
                            if (!o) return;
                            let c = o.paraIdx, l = o.charOffset, p = t.paraIdx, f = t.charOffset;
                            (c > p || c === p && l > f) && ([c, p] = [
                                p,
                                c
                            ], [l, f] = [
                                f,
                                l
                            ]);
                            try {
                                const w = n.copySelection(t.secIdx, c, l, p, f), E = g(w);
                                E?.text && navigator.clipboard.writeText(E.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const o = x.current;
                            if (!o) return;
                            let c = o.paraIdx, l = o.charOffset, p = t.paraIdx, f = t.charOffset;
                            (c > p || c === p && l > f) && ([c, p] = [
                                p,
                                c
                            ], [l, f] = [
                                f,
                                l
                            ]);
                            try {
                                const w = n.copySelection(t.secIdx, c, l, p, f), E = g(w);
                                E?.text && navigator.clipboard.writeText(E.text).catch(()=>{});
                            } catch  {}
                            st();
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), ht();
                            return;
                        }
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    {
                        if (e.preventDefault(), h(), x.current) {
                            const c = H();
                            c && m(c);
                        }
                        const o = y.current;
                        try {
                            const c = n.splitParagraph(o.secIdx, o.paraIdx, o.charOffset), l = g(c), p = {
                                secIdx: o.secIdx,
                                paraIdx: l?.paraIdx ?? o.paraIdx + 1,
                                charOffset: 0
                            };
                            b(p);
                        } catch  {}
                        i();
                        break;
                    }
                case "Backspace":
                    e.preventDefault(), st();
                    break;
                case "Delete":
                    e.preventDefault(), tr();
                    break;
                case "ArrowLeft":
                    {
                        e.preventDefault();
                        const o = {
                            ...t
                        };
                        if (t.charOffset > 0) o.charOffset = t.charOffset - 1;
                        else if (t.paraIdx > 0) {
                            o.paraIdx = t.paraIdx - 1;
                            try {
                                o.charOffset = n.getParagraphLength(t.secIdx, o.paraIdx);
                            } catch  {
                                o.charOffset = 0;
                            }
                        } else break;
                        e.shiftKey ? (x.current || (x.current = {
                            ...t
                        }), m(o), N(x.current, o), k(!0), j(o)) : b(o);
                        break;
                    }
                case "ArrowRight":
                    {
                        e.preventDefault();
                        const o = {
                            ...t
                        };
                        try {
                            const c = n.getParagraphLength(t.secIdx, t.paraIdx);
                            if (t.charOffset < c) o.charOffset = t.charOffset + 1;
                            else {
                                const l = n.getParagraphCount(t.secIdx);
                                if (t.paraIdx < l - 1) o.paraIdx = t.paraIdx + 1, o.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        e.shiftKey ? (x.current || (x.current = {
                            ...t
                        }), m(o), N(x.current, o), k(!0), j(o)) : b(o);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const o = R ? R.x : 0;
                        try {
                            const c = n.moveVertical(t.secIdx, t.paraIdx, t.charOffset, -1, o, 4294967295, 4294967295, 4294967295, 4294967295), l = g(c);
                            if (l) {
                                const p = {
                                    secIdx: l.sectionIndex ?? t.secIdx,
                                    paraIdx: l.paragraphIndex ?? l.paraIdx ?? t.paraIdx,
                                    charOffset: l.charOffset ?? t.charOffset
                                };
                                e.shiftKey ? (x.current || (x.current = {
                                    ...t
                                }), m(p), N(x.current, p), k(!0), j(p)) : b(p);
                            }
                        } catch  {
                            if (t.paraIdx > 0) {
                                const c = {
                                    ...t,
                                    paraIdx: t.paraIdx - 1
                                };
                                try {
                                    c.charOffset = Math.min(t.charOffset, n.getParagraphLength(t.secIdx, c.paraIdx));
                                } catch  {
                                    c.charOffset = 0;
                                }
                                e.shiftKey ? (x.current || (x.current = {
                                    ...t
                                }), m(c), N(x.current, c), k(!0), j(c)) : b(c);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const o = R ? R.x : 0;
                        try {
                            const c = n.moveVertical(t.secIdx, t.paraIdx, t.charOffset, 1, o, 4294967295, 4294967295, 4294967295, 4294967295), l = g(c);
                            if (l) {
                                const p = {
                                    secIdx: l.sectionIndex ?? t.secIdx,
                                    paraIdx: l.paragraphIndex ?? l.paraIdx ?? t.paraIdx,
                                    charOffset: l.charOffset ?? t.charOffset
                                };
                                e.shiftKey ? (x.current || (x.current = {
                                    ...t
                                }), m(p), N(x.current, p), k(!0), j(p)) : b(p);
                            }
                        } catch  {
                            try {
                                const c = n.getParagraphCount(t.secIdx);
                                if (t.paraIdx < c - 1) {
                                    const l = {
                                        ...t,
                                        paraIdx: t.paraIdx + 1
                                    };
                                    l.charOffset = Math.min(t.charOffset, n.getParagraphLength(t.secIdx, l.paraIdx)), e.shiftKey ? (x.current || (x.current = {
                                        ...t
                                    }), m(l), N(x.current, l), k(!0), j(l)) : b(l);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault();
                        try {
                            const o = g(n.getLineInfo(t.secIdx, t.paraIdx, t.charOffset)), c = {
                                ...t,
                                charOffset: o ? o.charStart : 0
                            };
                            e.shiftKey ? (x.current || (x.current = {
                                ...t
                            }), m(c), N(x.current, c), k(!0), j(c)) : b(c);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        try {
                            const o = g(n.getLineInfo(t.secIdx, t.paraIdx, t.charOffset)), c = n.getParagraphLength(t.secIdx, t.paraIdx), l = {
                                ...t,
                                charOffset: o ? Math.min(o.charEnd, c) : c
                            };
                            e.shiftKey ? (x.current || (x.current = {
                                ...t
                            }), m(l), N(x.current, l), k(!0), j(l)) : b(l);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), _("	");
                    break;
                case "Escape":
                    Ne(!1), je(!1), me(!1), Ie(!1), Ce(!1), ve(!1), ke(!1), Oe(!1), T(null), ue(!1), Se(!1), xe(!1);
                    break;
            }
        }, [
            C,
            or,
            lr,
            ir,
            vr,
            R,
            ee,
            te,
            at,
            ct,
            ot,
            _,
            H,
            st,
            tr,
            h,
            b,
            i,
            N,
            j,
            m,
            ht
        ]), vn = s.useCallback(()=>{
            we.current = !0;
        }, []), kn = s.useCallback((e)=>{
            we.current = !1;
            const n = e.data;
            n && (C === "cell" ? Fe(n) : C === "header" || C === "footer" ? Te(n) : C === "footnote" ? Le(n) : _(n)), Y.current && (Y.current.value = "");
        }, [
            C,
            _,
            Fe,
            Te,
            Le
        ]), On = s.useCallback((e)=>{
            if (we.current) return;
            const n = e.target, t = n.value;
            t && (C === "cell" ? Fe(t) : C === "header" || C === "footer" ? Te(t) : C === "footnote" ? Le(t) : _(t), n.value = "");
        }, [
            C,
            _,
            Fe,
            Te,
            Le
        ]), Nn = s.useCallback((e)=>{
            Ae(e.target.value);
        }, []), xr = s.useCallback(()=>{
            const e = parseInt(We, 10);
            !isNaN(e) && e >= 1 && e <= F ? ae(e - 1) : Ae(String(G + 1));
        }, [
            We,
            F,
            G
        ]), Sn = s.useCallback(()=>ft((e)=>Math.min(e + 10, 200)), []), Rn = s.useCallback(()=>ft((e)=>Math.max(e - 10, 30)), []);
        s.useEffect(()=>{
            Ae(String(G + 1));
        }, [
            G
        ]), s.useEffect(()=>{
            const e = (n)=>{
                const t = n.target, a = (o, c)=>!o.current?.contains(t) && !c.current?.contains(t);
                _e && a(Bt, Tt) && je(!1), Ve && a(Lt, Mt) && me(!1), Je && a(zt, Ht) && Ie(!1), Ye && a(Wt, At) && Ce(!1), Xe && a($t, Kt) && ve(!1), Ze && a(Ut, _t) && ke(!1), Qe && a(Jt, Vt) && Oe(!1), tt && a(Yt, Xt) && Se(!1), I && T(null);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            _e,
            Ve,
            Je,
            Ye,
            Xe,
            Ze,
            Qe,
            tt,
            I
        ]), s.useEffect(()=>()=>{
                if (d.current) {
                    try {
                        d.current.free();
                    } catch  {}
                    d.current = null;
                }
            }, []), s.useEffect(()=>{
            const e = d.current;
            if (!e || F === 0) return;
            const n = le.current;
            for(let t = 0; t < F; t++){
                const a = oe.current[t];
                if (a) try {
                    e.renderPageToCanvas(t, a, n);
                    const o = a.width / n, c = a.height / n;
                    a.style.width = o + "px", a.style.height = c + "px", jt.current[t] = {
                        w: o,
                        h: c
                    };
                    const l = Ke.current[t];
                    l && (l.width = a.width, l.height = a.height, l.style.width = o + "px", l.style.height = c + "px");
                } catch (o) {
                    console.error("renderPageToCanvas failed for page", t, o);
                }
            }
        }, [
            pt,
            F
        ]), s.useEffect(()=>{
            const e = le.current;
            for(let n = 0; n < F; n++){
                const t = Ke.current[n];
                if (!t) continue;
                const a = t.getContext("2d");
                if (!a) continue;
                a.clearRect(0, 0, t.width, t.height);
                const o = yt.filter((c)=>c.pageIndex === n);
                if (o.length > 0) {
                    a.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const c of o)a.fillRect(c.x * e, c.y * e, c.width * e, c.height * e);
                }
                R && R.pageIndex === n && wt && (a.strokeStyle = "#0046C8", a.lineWidth = Math.max(1.5, 2 * e), a.beginPath(), a.moveTo(R.x * e, R.y * e), a.lineTo(R.x * e, (R.y + R.height) * e), a.stroke());
            }
        }, [
            F,
            R,
            yt,
            wt,
            pt
        ]), s.useEffect(()=>{
            if (!R) {
                $e(!0);
                return;
            }
            $e(!0);
            const e = setInterval(()=>$e((n)=>!n), 530);
            return ()=>clearInterval(e);
        }, [
            R
        ]);
        const pr = F > 0, ut = wr(D.textColor), xt = wr(D.highlight), fr = (e, n, t, a)=>r.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    r.jsx("div", {
                        className: "hwp-color-grid",
                        children: Ln.map((o, c)=>r.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: o.map((l)=>r.jsx("div", {
                                        className: `hwp-color-swatch${e.toUpperCase() === l.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: l
                                        },
                                        title: l,
                                        onClick: ()=>a(l)
                                    }, l))
                            }, c))
                    }),
                    r.jsxs("div", {
                        className: "hwp-color-custom",
                        children: [
                            r.jsx("input", {
                                type: "color",
                                value: n,
                                onChange: (o)=>t(o.target.value)
                            }),
                            r.jsx("button", {
                                onClick: ()=>a(n),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return r.jsxs(r.Fragment, {
            children: [
                r.jsx(Pn, {
                    title: u("site.hwpEditor.title"),
                    description: u("site.hwpEditor.subtitle")
                }),
                r.jsx("section", {
                    className: "page-header",
                    children: r.jsxs("div", {
                        className: "container",
                        children: [
                            r.jsx("h2", {
                                children: u("site.hwpEditor.title")
                            }),
                            r.jsx("p", {
                                children: u("site.hwpEditor.subtitle")
                            })
                        ]
                    })
                }),
                r.jsx("section", {
                    className: "section hwp-editor-page",
                    children: r.jsxs("div", {
                        className: "container",
                        children: [
                            mt && r.jsxs("div", {
                                className: "hwp-editor-error",
                                children: [
                                    r.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            r.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }),
                                            r.jsx("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "9",
                                                y2: "15"
                                            }),
                                            r.jsx("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "15",
                                                y2: "15"
                                            })
                                        ]
                                    }),
                                    r.jsx("span", {
                                        children: mt
                                    }),
                                    r.jsx("button", {
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
                            Q && !V && r.jsxs("div", {
                                className: "hwp-editor-error",
                                children: [
                                    r.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            r.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }),
                                            r.jsx("line", {
                                                x1: "15",
                                                y1: "9",
                                                x2: "9",
                                                y2: "15"
                                            }),
                                            r.jsx("line", {
                                                x1: "9",
                                                y1: "9",
                                                x2: "15",
                                                y2: "15"
                                            })
                                        ]
                                    }),
                                    r.jsxs("span", {
                                        children: [
                                            u("site.hwpEditor.wasmError"),
                                            ": ",
                                            Q
                                        ]
                                    })
                                ]
                            }),
                            V && r.jsxs("div", {
                                className: "hwp-editor-loading",
                                children: [
                                    r.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    r.jsx("p", {
                                        children: u("site.hwpEditor.wasmLoading")
                                    })
                                ]
                            }),
                            v && !pr && !V && r.jsx("div", {
                                className: `hwp-editor-container${Dr ? " drag-over" : ""}`,
                                onDragOver: Gt,
                                onDragLeave: qt,
                                onDrop: er,
                                children: r.jsxs("div", {
                                    className: "hwp-editor-empty",
                                    children: [
                                        r.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "56",
                                            height: "56",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            children: [
                                                r.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                }),
                                                r.jsx("polyline", {
                                                    points: "14 2 14 8 20 8"
                                                }),
                                                r.jsx("line", {
                                                    x1: "12",
                                                    y1: "18",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                r.jsx("line", {
                                                    x1: "9",
                                                    y1: "15",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        r.jsx("h3", {
                                            children: u("site.hwpEditor.dropOrNew")
                                        }),
                                        r.jsx("p", {
                                            children: u("site.hwpEditor.clickToEdit")
                                        }),
                                        r.jsxs("div", {
                                            className: "hwp-editor-empty-actions",
                                            children: [
                                                r.jsxs("button", {
                                                    className: "hwp-empty-btn primary",
                                                    onClick: Zt,
                                                    disabled: !v,
                                                    children: [
                                                        r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("path", {
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                }),
                                                                r.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8"
                                                                })
                                                            ]
                                                        }),
                                                        u("site.hwpEditor.newDoc")
                                                    ]
                                                }),
                                                r.jsxs("button", {
                                                    className: "hwp-empty-btn",
                                                    onClick: Qt,
                                                    disabled: !v,
                                                    children: [
                                                        r.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: r.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        }),
                                                        u("site.hwpEditor.openFile")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            pr && r.jsxs("div", {
                                className: "hwp-editor-container",
                                children: [
                                    r.jsxs("div", {
                                        className: "hwp-editor-toolbar",
                                        children: [
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.newDoc"),
                                                        onClick: Zt,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("path", {
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                                }),
                                                                r.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.openFile"),
                                                        onClick: Qt,
                                                        children: r.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: r.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                                            })
                                                        })
                                                    }),
                                                    r.jsxs("div", {
                                                        className: "hwp-export-wrapper",
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: $t,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.export"),
                                                                onClick: ()=>ve((e)=>!e),
                                                                children: [
                                                                    r.jsxs("svg", {
                                                                        viewBox: "0 0 24 24",
                                                                        width: "16",
                                                                        height: "16",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        children: [
                                                                            r.jsx("path", {
                                                                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                                                            }),
                                                                            r.jsx("polyline", {
                                                                                points: "7 10 12 15 17 10"
                                                                            }),
                                                                            r.jsx("line", {
                                                                                x1: "12",
                                                                                y1: "15",
                                                                                x2: "12",
                                                                                y2: "3"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px"
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            Xe && r.jsxs("div", {
                                                                ref: Kt,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    r.jsx("button", {
                                                                        onClick: ()=>ur("hwp"),
                                                                        children: u("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    r.jsx("button", {
                                                                        onClick: ()=>ur("hwpx"),
                                                                        children: u("site.hwpEditor.exportHwpx")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: `${u("site.hwpEditor.undo")} (Ctrl+Z)`,
                                                        onClick: ee,
                                                        disabled: !Nr,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("polyline", {
                                                                    points: "1 4 1 10 7 10"
                                                                }),
                                                                r.jsx("path", {
                                                                    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: `${u("site.hwpEditor.redo")} (Ctrl+Y)`,
                                                        onClick: te,
                                                        disabled: !Sr,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("polyline", {
                                                                    points: "23 4 23 10 17 10"
                                                                }),
                                                                r.jsx("path", {
                                                                    d: "M20.49 15a9 9 0 1 1-2.13-9.36L23 10"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: Bt,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.font"),
                                                                onClick: ()=>je((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontFamily: et,
                                                                            maxWidth: 96,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap",
                                                                            display: "inline-block"
                                                                        },
                                                                        children: et
                                                                    }),
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 2
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            _e && r.jsx("div", {
                                                                ref: Tt,
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: Fn.map((e)=>r.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: et === e ? "active" : "",
                                                                        onClick: ()=>Vr(e),
                                                                        children: e
                                                                    }, e))
                                                            })
                                                        ]
                                                    }),
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: Lt,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.fontSize"),
                                                                onClick: ()=>me((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        children: Ct
                                                                    }),
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 2
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            Ve && r.jsx("div", {
                                                                ref: Mt,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: Bn.map((e)=>r.jsx("button", {
                                                                        className: parseFloat(Ct) === e ? "active" : "",
                                                                        onClick: ()=>Jr(e),
                                                                        children: e
                                                                    }, e))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${D.bold ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.bold")} (Ctrl+B)`,
                                                        onClick: at,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${D.italic ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: ct,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${D.underline ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: ot,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${D.strikethrough ? " active" : ""}`,
                                                        title: u("site.hwpEditor.strikethrough"),
                                                        onClick: _r,
                                                        style: {
                                                            textDecoration: "line-through"
                                                        },
                                                        children: "S"
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: zt,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.textColor"),
                                                                onClick: ()=>Ie((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: ut,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
                                                                    }),
                                                                    r.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: ut
                                                                        }
                                                                    }),
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 1
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            Je && r.jsx("div", {
                                                                ref: Ht,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: fr(ut, Fr, Br, Gr)
                                                            })
                                                        ]
                                                    }),
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: Wt,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.highlight"),
                                                                onClick: ()=>Ce((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: xt,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    r.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: xt
                                                                        }
                                                                    }),
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            marginLeft: 1
                                                                        },
                                                                        children: "▾"
                                                                    })
                                                                ]
                                                            }),
                                                            Ye && r.jsx("div", {
                                                                ref: At,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: fr(xt, Tr, Lr, qr)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    "left",
                                                    "center",
                                                    "right",
                                                    "justify"
                                                ].map((e)=>{
                                                    const n = {
                                                        left: u("site.hwpEditor.alignLeft"),
                                                        center: u("site.hwpEditor.alignCenter"),
                                                        right: u("site.hwpEditor.alignRight"),
                                                        justify: u("site.hwpEditor.alignJustify")
                                                    }, t = {
                                                        left: r.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        center: r.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "2.5",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "3.5",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        right: r.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "5",
                                                                    y: "5",
                                                                    width: "11",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "7",
                                                                    y: "13",
                                                                    width: "9",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        }),
                                                        justify: r.jsxs("svg", {
                                                            viewBox: "0 0 16 16",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "currentColor",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "1",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "5",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "9",
                                                                    width: "16",
                                                                    height: "2",
                                                                    rx: "1"
                                                                }),
                                                                r.jsx("rect", {
                                                                    x: "0",
                                                                    y: "13",
                                                                    width: "16",
                                                                    height: "1.5",
                                                                    rx: "0.75"
                                                                })
                                                            ]
                                                        })
                                                    };
                                                    return r.jsx("button", {
                                                        className: `hwp-toolbar-btn${ge.alignment === e ? " active" : ""}`,
                                                        title: n[e],
                                                        onClick: ()=>Yr(e),
                                                        children: t[e]
                                                    }, e);
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsxs("div", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    children: [
                                                        r.jsxs("button", {
                                                            ref: Ut,
                                                            className: "hwp-toolbar-btn",
                                                            title: u("site.hwpEditor.lineSpacing"),
                                                            onClick: ()=>ke((e)=>!e),
                                                            children: [
                                                                r.jsxs("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: [
                                                                        r.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "6",
                                                                            x2: "21",
                                                                            y2: "6"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "12",
                                                                            x2: "21",
                                                                            y2: "12"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "8",
                                                                            y1: "18",
                                                                            x2: "21",
                                                                            y2: "18"
                                                                        }),
                                                                        r.jsx("polyline", {
                                                                            points: "3 8 3 3 3 8"
                                                                        }),
                                                                        r.jsx("polyline", {
                                                                            points: "3 3 1 5 3 3 5 5"
                                                                        }),
                                                                        r.jsx("polyline", {
                                                                            points: "3 16 3 21 3 16"
                                                                        }),
                                                                        r.jsx("polyline", {
                                                                            points: "3 21 1 19 3 21 5 19"
                                                                        })
                                                                    ]
                                                                }),
                                                                r.jsx("span", {
                                                                    style: {
                                                                        fontSize: "10px",
                                                                        marginLeft: 2
                                                                    },
                                                                    children: "▾"
                                                                })
                                                            ]
                                                        }),
                                                        Ze && r.jsx("div", {
                                                            ref: _t,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: Tn.map((e)=>r.jsx("button", {
                                                                    className: ge.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>Xr(e.value),
                                                                    children: e.label
                                                                }, e.value))
                                                        })
                                                    ]
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.outdent"),
                                                        onClick: ()=>rr(-1),
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "10",
                                                                    x2: "7",
                                                                    y2: "10"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "14",
                                                                    x2: "7",
                                                                    y2: "14"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                }),
                                                                r.jsx("polyline", {
                                                                    points: "11 8 7 10 11 12"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.indent"),
                                                        onClick: ()=>rr(1),
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "10",
                                                                    x2: "7",
                                                                    y2: "10"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "6",
                                                                    x2: "3",
                                                                    y2: "6"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "14",
                                                                    x2: "7",
                                                                    y2: "14"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "21",
                                                                    y1: "18",
                                                                    x2: "3",
                                                                    y2: "18"
                                                                }),
                                                                r.jsx("polyline", {
                                                                    points: "3 8 7 10 3 12"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.bulletList"),
                                                        onClick: Zr,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "6",
                                                                    x2: "20",
                                                                    y2: "6"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "12",
                                                                    x2: "20",
                                                                    y2: "12"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "18",
                                                                    x2: "20",
                                                                    y2: "18"
                                                                }),
                                                                r.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "6",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                }),
                                                                r.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "12",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                }),
                                                                r.jsx("circle", {
                                                                    cx: "4",
                                                                    cy: "18",
                                                                    r: "1.5",
                                                                    fill: "currentColor",
                                                                    stroke: "none"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.numberedList"),
                                                        onClick: Qr,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "6",
                                                                    x2: "21",
                                                                    y2: "6"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "12",
                                                                    x2: "21",
                                                                    y2: "12"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "10",
                                                                    y1: "18",
                                                                    x2: "21",
                                                                    y2: "18"
                                                                }),
                                                                r.jsx("text", {
                                                                    x: "1",
                                                                    y: "8",
                                                                    fill: "currentColor",
                                                                    stroke: "none",
                                                                    fontSize: "8",
                                                                    fontFamily: "sans-serif",
                                                                    children: "1"
                                                                }),
                                                                r.jsx("text", {
                                                                    x: "1",
                                                                    y: "14",
                                                                    fill: "currentColor",
                                                                    stroke: "none",
                                                                    fontSize: "8",
                                                                    fontFamily: "sans-serif",
                                                                    children: "2"
                                                                }),
                                                                r.jsx("text", {
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
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsx("button", {
                                                                ref: Jt,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.insertTable"),
                                                                onClick: ()=>Oe((e)=>!e),
                                                                children: r.jsxs("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: [
                                                                        r.jsx("rect", {
                                                                            x: "3",
                                                                            y: "3",
                                                                            width: "18",
                                                                            height: "18",
                                                                            rx: "2"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "3",
                                                                            y1: "9",
                                                                            x2: "21",
                                                                            y2: "9"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "3",
                                                                            y1: "15",
                                                                            x2: "21",
                                                                            y2: "15"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "9",
                                                                            y1: "3",
                                                                            x2: "9",
                                                                            y2: "21"
                                                                        }),
                                                                        r.jsx("line", {
                                                                            x1: "15",
                                                                            y1: "3",
                                                                            x2: "15",
                                                                            y2: "21"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            Qe && r.jsxs("div", {
                                                                ref: Vt,
                                                                className: "hwp-table-dialog",
                                                                children: [
                                                                    r.jsxs("div", {
                                                                        className: "hwp-table-dialog-row",
                                                                        children: [
                                                                            r.jsx("label", {
                                                                                children: "행 (Rows)"
                                                                            }),
                                                                            r.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 50,
                                                                                value: Ge,
                                                                                onChange: (e)=>Er(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    r.jsxs("div", {
                                                                        className: "hwp-table-dialog-row",
                                                                        children: [
                                                                            r.jsx("label", {
                                                                                children: "열 (Cols)"
                                                                            }),
                                                                            r.jsx("input", {
                                                                                type: "number",
                                                                                min: 1,
                                                                                max: 20,
                                                                                value: qe,
                                                                                onChange: (e)=>Pr(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    r.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: en,
                                                                        children: u("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.insertImage"),
                                                        onClick: tn,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2"
                                                                }),
                                                                r.jsx("circle", {
                                                                    cx: "8.5",
                                                                    cy: "8.5",
                                                                    r: "1.5"
                                                                }),
                                                                r.jsx("polyline", {
                                                                    points: "21 15 16 10 5 21"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.pageBreak"),
                                                        onClick: rn,
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "12",
                                                                    x2: "21",
                                                                    y2: "12",
                                                                    strokeDasharray: "4 2"
                                                                }),
                                                                r.jsx("path", {
                                                                    d: "M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsx("button", {
                                                    className: `hwp-toolbar-btn${kt ? " active" : ""}`,
                                                    title: `${u("site.hwpEditor.findReplace")} (Ctrl+F)`,
                                                    onClick: ()=>Ne((e)=>!e),
                                                    children: r.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            r.jsx("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }),
                                                            r.jsx("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsx("button", {
                                                    className: "hwp-toolbar-btn",
                                                    title: "페이지 설정",
                                                    onClick: ()=>{
                                                        xn(), ue((e)=>!e);
                                                    },
                                                    children: r.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            r.jsx("rect", {
                                                                x: "5",
                                                                y: "2",
                                                                width: "14",
                                                                height: "20",
                                                                rx: "1"
                                                            }),
                                                            r.jsx("line", {
                                                                x1: "8",
                                                                y1: "6",
                                                                x2: "16",
                                                                y2: "6"
                                                            }),
                                                            r.jsx("line", {
                                                                x1: "8",
                                                                y1: "18",
                                                                x2: "16",
                                                                y2: "18"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsxs("div", {
                                                    style: {
                                                        position: "relative"
                                                    },
                                                    children: [
                                                        r.jsxs("button", {
                                                            ref: Yt,
                                                            className: "hwp-toolbar-btn",
                                                            title: "스타일",
                                                            onClick: ()=>{
                                                                fn(), Se((e)=>!e);
                                                            },
                                                            children: [
                                                                r.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    width: "16",
                                                                    height: "16",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: r.jsx("path", {
                                                                        d: "M4 7h16M4 12h10M4 17h14"
                                                                    })
                                                                }),
                                                                r.jsx("span", {
                                                                    style: {
                                                                        fontSize: "0.7rem"
                                                                    },
                                                                    children: "스타일"
                                                                }),
                                                                r.jsx("span", {
                                                                    style: {
                                                                        fontSize: "10px",
                                                                        marginLeft: 1
                                                                    },
                                                                    children: "▾"
                                                                })
                                                            ]
                                                        }),
                                                        tt && r.jsxs("div", {
                                                            ref: Xt,
                                                            className: "hwp-toolbar-dropdown hwp-style-dropdown",
                                                            children: [
                                                                Rt.length === 0 && r.jsx("div", {
                                                                    style: {
                                                                        padding: 10,
                                                                        fontSize: "0.82rem",
                                                                        color: "var(--text-secondary)"
                                                                    },
                                                                    children: "스타일 없음"
                                                                }),
                                                                Rt.map((e)=>r.jsx("button", {
                                                                        onClick: ()=>gn(e.id),
                                                                        children: e.name
                                                                    }, e.id))
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: "머리말",
                                                        onClick: ()=>dt(y.current.secIdx, !0),
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "9",
                                                                    x2: "21",
                                                                    y2: "9"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "8",
                                                                    y1: "6",
                                                                    x2: "16",
                                                                    y2: "6"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: "꼬리말",
                                                        onClick: ()=>dt(y.current.secIdx, !1),
                                                        children: r.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: [
                                                                r.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "15",
                                                                    x2: "21",
                                                                    y2: "15"
                                                                }),
                                                                r.jsx("line", {
                                                                    x1: "8",
                                                                    y1: "18",
                                                                    x2: "16",
                                                                    y2: "18"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsx("button", {
                                                    className: "hwp-toolbar-btn",
                                                    title: "각주 삽입",
                                                    onClick: un,
                                                    children: r.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            r.jsx("path", {
                                                                d: "M4 20h16M12 4v12"
                                                            }),
                                                            r.jsx("text", {
                                                                x: "14",
                                                                y: "10",
                                                                fontSize: "8",
                                                                fill: "currentColor",
                                                                stroke: "none",
                                                                fontWeight: "bold",
                                                                children: "1"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsx("button", {
                                                    className: "hwp-toolbar-btn",
                                                    title: "글상자 삽입",
                                                    onClick: bn,
                                                    children: r.jsxs("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            r.jsx("rect", {
                                                                x: "3",
                                                                y: "3",
                                                                width: "18",
                                                                height: "18",
                                                                rx: "2"
                                                            }),
                                                            r.jsx("text", {
                                                                x: "8",
                                                                y: "16",
                                                                fontSize: "10",
                                                                fill: "currentColor",
                                                                stroke: "none",
                                                                children: "T"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-group",
                                                children: r.jsx("button", {
                                                    className: "hwp-toolbar-btn",
                                                    title: "북마크",
                                                    onClick: ()=>{
                                                        pe(), xe((e)=>!e);
                                                    },
                                                    children: r.jsx("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: r.jsx("path", {
                                                            d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                                                        })
                                                    })
                                                })
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-divider"
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-toolbar-group",
                                                children: [
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${nt ? " active" : ""}`,
                                                        title: "조판부호 표시",
                                                        onClick: mn,
                                                        children: r.jsx("span", {
                                                            style: {
                                                                fontFamily: "monospace",
                                                                fontSize: "14px",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "¶"
                                                        })
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${rt ? " active" : ""}`,
                                                        title: "제어코드 표시",
                                                        onClick: jn,
                                                        children: r.jsx("span", {
                                                            style: {
                                                                fontFamily: "monospace",
                                                                fontSize: "12px",
                                                                fontWeight: "bold"
                                                            },
                                                            children: "§"
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsx("div", {
                                                className: "hwp-toolbar-spacer"
                                            }),
                                            ce && r.jsxs("span", {
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
                                                    ce,
                                                    Cr ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    kt && r.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            r.jsx("input", {
                                                type: "text",
                                                placeholder: u("site.hwpEditor.find"),
                                                value: M,
                                                onChange: (e)=>{
                                                    Mr(e.target.value), Z("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && dr();
                                                },
                                                autoFocus: !0
                                            }),
                                            r.jsx("input", {
                                                type: "text",
                                                placeholder: u("site.hwpEditor.replace"),
                                                value: ie,
                                                onChange: (e)=>zr(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && hr();
                                                }
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: dr,
                                                children: u("site.hwpEditor.findNext")
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: hr,
                                                children: u("site.hwpEditor.replaceOne")
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: In,
                                                children: u("site.hwpEditor.replaceAllBtn")
                                            }),
                                            r.jsxs("label", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 4,
                                                    fontSize: "13px",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    r.jsx("input", {
                                                        type: "checkbox",
                                                        checked: X,
                                                        onChange: (e)=>Hr(e.target.checked)
                                                    }),
                                                    u("site.hwpEditor.caseSensitive")
                                                ]
                                            }),
                                            Ot && r.jsx("span", {
                                                className: "hwp-find-info",
                                                children: Ot
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    Ne(!1), Z("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    C !== "body" && r.jsxs("div", {
                                        className: "hwp-edit-mode-bar",
                                        children: [
                                            r.jsx("span", {
                                                children: C === "cell" ? "표 셀 편집" : C === "header" ? "머리말 편집" : C === "footer" ? "꼬리말 편집" : "각주 편집"
                                            }),
                                            r.jsx("button", {
                                                onClick: ()=>{
                                                    W("body"), z.current = null, de.current = null, he.current = null;
                                                },
                                                children: "ESC 나가기"
                                            })
                                        ]
                                    }),
                                    r.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>Y.current?.focus(),
                                        onMouseUp: an,
                                        onDragOver: Gt,
                                        onDragLeave: qt,
                                        onDrop: er,
                                        children: Array.from({
                                            length: F
                                        }, (e, n)=>r.jsxs("div", {
                                                ref: (t)=>{
                                                    Rr.current[n] = t;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    transform: `scale(${fe / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onClick: (t)=>Ur(t, n),
                                                onMouseDown: (t)=>nn(t, n),
                                                onMouseMove: (t)=>sn(t, n),
                                                onContextMenu: (t)=>cn(t, n),
                                                onDoubleClick: ()=>{
                                                    const t = y.current;
                                                    t && C === "body" && dt(t.secIdx, !0);
                                                },
                                                children: [
                                                    r.jsx("canvas", {
                                                        ref: (t)=>{
                                                            oe.current[n] = t;
                                                        },
                                                        className: "hwp-page-canvas"
                                                    }),
                                                    r.jsx("canvas", {
                                                        ref: (t)=>{
                                                            Ke.current[n] = t;
                                                        },
                                                        className: "hwp-overlay-canvas"
                                                    })
                                                ]
                                            }, n))
                                    }),
                                    I && r.jsx("div", {
                                        className: "hwp-context-menu",
                                        style: {
                                            position: "fixed",
                                            left: I.x,
                                            top: I.y,
                                            zIndex: 9999
                                        },
                                        onMouseDown: (e)=>e.stopPropagation(),
                                        children: I.type === "table" && I.tableInfo ? r.jsxs(r.Fragment, {
                                            children: [
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        I.tableInfo && lt(I.tableInfo.secIdx, I.tableInfo.paraIdx, I.tableInfo.controlIdx, I.tableInfo.cellIdx), Pe();
                                                    },
                                                    children: "셀 편집"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>sr(!1),
                                                    children: "위에 행 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>sr(!0),
                                                    children: "아래에 행 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>on(),
                                                    children: "행 삭제"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>ar(!1),
                                                    children: "왼쪽에 열 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>ar(!0),
                                                    children: "오른쪽에 열 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>ln(),
                                                    children: "열 삭제"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>dn(),
                                                    children: "셀 병합"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>hn(),
                                                    children: "셀 분할"
                                                })
                                            ]
                                        }) : r.jsxs(r.Fragment, {
                                            children: [
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        ee(), Pe();
                                                    },
                                                    children: "실행 취소"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        te(), Pe();
                                                    },
                                                    children: "다시 실행"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        ht(), Pe();
                                                    },
                                                    children: "붙여넣기"
                                                })
                                            ]
                                        })
                                    }),
                                    Wr && r.jsx("div", {
                                        className: "hwp-dialog-overlay",
                                        onClick: ()=>ue(!1),
                                        children: r.jsxs("div", {
                                            className: "hwp-dialog",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                r.jsx("h3", {
                                                    children: "페이지 설정"
                                                }),
                                                r.jsxs("div", {
                                                    className: "hwp-dialog-grid",
                                                    children: [
                                                        r.jsx("label", {
                                                            children: "용지 폭 (HWPUNIT)"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.width,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        width: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "용지 높이 (HWPUNIT)"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.height,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        height: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "위 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.marginTop,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        marginTop: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "아래 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.marginBottom,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        marginBottom: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "왼쪽 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.marginLeft,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        marginLeft: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "오른쪽 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: A.marginRight,
                                                            onChange: (e)=>U((n)=>({
                                                                        ...n,
                                                                        marginRight: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "가로 방향"
                                                        }),
                                                        r.jsxs("label", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 4
                                                            },
                                                            children: [
                                                                r.jsx("input", {
                                                                    type: "checkbox",
                                                                    checked: A.landscape,
                                                                    onChange: (e)=>U((n)=>({
                                                                                ...n,
                                                                                landscape: e.target.checked
                                                                            }))
                                                                }),
                                                                "가로"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                r.jsxs("div", {
                                                    className: "hwp-dialog-actions",
                                                    children: [
                                                        r.jsx("button", {
                                                            onClick: ()=>ue(!1),
                                                            children: "취소"
                                                        }),
                                                        r.jsx("button", {
                                                            className: "primary",
                                                            onClick: pn,
                                                            children: "적용"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    Kr && r.jsx("div", {
                                        className: "hwp-dialog-overlay",
                                        onClick: ()=>xe(!1),
                                        children: r.jsxs("div", {
                                            className: "hwp-dialog",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                r.jsx("h3", {
                                                    children: "북마크"
                                                }),
                                                r.jsxs("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: 6,
                                                        marginBottom: 12
                                                    },
                                                    children: [
                                                        r.jsx("input", {
                                                            type: "text",
                                                            placeholder: "북마크 이름",
                                                            value: Re,
                                                            onChange: (e)=>Et(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                e.key === "Enter" && cr();
                                                            },
                                                            style: {
                                                                flex: 1,
                                                                padding: "6px 10px",
                                                                border: "1px solid var(--border-color)",
                                                                borderRadius: "var(--radius-sm)",
                                                                background: "var(--bg-primary)",
                                                                color: "var(--text-primary)",
                                                                fontSize: "0.85rem"
                                                            }
                                                        }),
                                                        r.jsx("button", {
                                                            className: "hwp-toolbar-btn",
                                                            style: {
                                                                minWidth: 60
                                                            },
                                                            onClick: cr,
                                                            children: "추가"
                                                        })
                                                    ]
                                                }),
                                                r.jsxs("div", {
                                                    style: {
                                                        maxHeight: 200,
                                                        overflowY: "auto"
                                                    },
                                                    children: [
                                                        Pt.length === 0 && r.jsx("div", {
                                                            style: {
                                                                padding: 10,
                                                                fontSize: "0.82rem",
                                                                color: "var(--text-secondary)"
                                                            },
                                                            children: "북마크 없음"
                                                        }),
                                                        Pt.map((e)=>r.jsxs("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    padding: "6px 0",
                                                                    borderBottom: "1px solid var(--border-color)"
                                                                },
                                                                children: [
                                                                    r.jsx("button", {
                                                                        style: {
                                                                            background: "none",
                                                                            border: "none",
                                                                            cursor: "pointer",
                                                                            color: "var(--primary)",
                                                                            fontSize: "0.85rem"
                                                                        },
                                                                        onClick: ()=>wn(e),
                                                                        children: e.name
                                                                    }),
                                                                    r.jsx("button", {
                                                                        style: {
                                                                            background: "none",
                                                                            border: "none",
                                                                            cursor: "pointer",
                                                                            color: "#dc2626",
                                                                            fontSize: "0.8rem"
                                                                        },
                                                                        onClick: ()=>yn(e),
                                                                        children: "삭제"
                                                                    })
                                                                ]
                                                            }, e.name))
                                                    ]
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-dialog-actions",
                                                    children: r.jsx("button", {
                                                        onClick: ()=>xe(!1),
                                                        children: "닫기"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    r.jsx("textarea", {
                                        ref: Y,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: vn,
                                        onCompositionEnd: kn,
                                        onInput: On,
                                        onKeyDown: Cn,
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
                                    r.jsxs("div", {
                                        className: "hwp-page-bar",
                                        children: [
                                            r.jsxs("div", {
                                                className: "hwp-page-nav",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: G <= 0,
                                                        onClick: ()=>ae((e)=>Math.max(0, e - 1)),
                                                        children: r.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: r.jsx("polyline", {
                                                                points: "15 18 9 12 15 6"
                                                            })
                                                        })
                                                    }),
                                                    r.jsxs("span", {
                                                        className: "hwp-page-info",
                                                        children: [
                                                            u("site.hwpEditor.page"),
                                                            " ",
                                                            r.jsx("input", {
                                                                className: "hwp-page-input",
                                                                type: "text",
                                                                value: We,
                                                                onChange: Nn,
                                                                onBlur: xr,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && xr();
                                                                }
                                                            }),
                                                            " / ",
                                                            F
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: G >= F - 1,
                                                        onClick: ()=>ae((e)=>Math.min(F - 1, e + 1)),
                                                        children: r.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "14",
                                                            height: "14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: r.jsx("polyline", {
                                                                points: "9 18 15 12 9 6"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            r.jsxs("div", {
                                                className: "hwp-zoom-controls",
                                                children: [
                                                    r.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: Rn,
                                                        disabled: fe <= 30,
                                                        children: "−"
                                                    }),
                                                    r.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            fe,
                                                            "%"
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: Sn,
                                                        disabled: fe >= 200,
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
export { An as default, __tla };
