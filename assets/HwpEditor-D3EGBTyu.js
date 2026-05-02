import { u as An, r as a, _ as Dr, j as r, __tla as __tla_0 } from "./index-XUQ89LnN.js";
import { u as Kn, __tla as __tla_1 } from "./useRhwp-b7diPa_E.js";
import { S as Un } from "./SEOHead-B-Qd4pN6.js";
let Gn;
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
    function Ve(k) {
        const te = parseInt(k.slice(1, 3), 16), ce = parseInt(k.slice(3, 5), 16);
        return parseInt(k.slice(5, 7), 16) << 16 | ce << 8 | te;
    }
    function Er(k) {
        const te = k & 255, ce = k >> 8 & 255, u = k >> 16 & 255;
        return "#" + [
            te,
            ce,
            u
        ].map((d)=>d.toString(16).padStart(2, "0")).join("");
    }
    function p(k) {
        try {
            return JSON.parse(k);
        } catch  {
            return null;
        }
    }
    let $n, _n, Vn, Jn, Yn;
    $n = [
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
    _n = [
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
    Vn = [
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
    Jn = [
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
    Yn = 100;
    Gn = ()=>{
        const { ready: k, loading: te, error: ce } = Kn(), { t: u } = An(), d = a.useRef(null), [D, Nt] = a.useState(0), [St, Je] = a.useState(0), [J, ue] = a.useState(0), [Ye, Xe] = a.useState("1"), [me, Pt] = a.useState(100), [xe, Fr] = a.useState(""), [Tr, Rt] = a.useState(!1), I = a.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [Br, Dt] = a.useState(null), [R, F] = a.useState(null), x = a.useRef(null), [, S] = a.useState(!1), [Et, re] = a.useState([]), [Ft, Ze] = a.useState(!0), oe = a.useRef({}), je = a.useRef({}), le = a.useRef(window.devicePixelRatio || 1), Qe = a.useRef({}), [E, Lr] = a.useState({
            fontFamily: "맑은 고딕",
            fontSize: 1e3,
            bold: !1,
            italic: !1,
            underline: !1,
            strikethrough: !1,
            textColor: 0,
            highlight: Ve("#FFFF00")
        }), [Ce, Mr] = a.useState({
            alignment: "justify",
            lineSpacing: 160,
            marginLeft: 0,
            marginRight: 0,
            indent: 0
        }), Y = a.useRef([]), ne = a.useRef([]), [Hr, ve] = a.useState(!1), [zr, ke] = a.useState(!1), Oe = a.useRef(!1), ie = a.useRef(null), Wr = a.useRef({}), [Ar, Ge] = a.useState(!1), [Tt, M] = a.useState(""), [qe, Ne] = a.useState(!1), [et, Se] = a.useState(!1), [tt, Pe] = a.useState(!1), [rt, Re] = a.useState(!1), [nt, De] = a.useState(!1), [st, Ee] = a.useState(!1), [at, Fe] = a.useState(!1), [ct, Kr] = a.useState(3), [ot, Ur] = a.useState(3), [$r, _r] = a.useState("#000000"), [Vr, Jr] = a.useState("#FFFF00"), [lt, Bt] = a.useState("맑은 고딕"), [Lt, Mt] = a.useState("10"), [Ht, Te] = a.useState(!1), [z, Yr] = a.useState(""), [fe, Xr] = a.useState(""), [se, Zr] = a.useState(!1), [zt, ae] = a.useState(""), [W, Qr] = a.useState("body"), it = a.useRef("body"), T = a.useCallback((e)=>{
            it.current = e, Qr(e);
        }, []), A = a.useRef(null), X = a.useRef(null), Z = a.useRef(null), [de, dt] = a.useState(!1), Wt = a.useRef(null), [j, H] = a.useState(null), [Gr, pe] = a.useState(!1), [V, Q] = a.useState({
            width: 59528,
            height: 84188,
            marginTop: 5669,
            marginBottom: 4252,
            marginLeft: 4252,
            marginRight: 4252,
            landscape: !1
        }), [At, Kt] = a.useState([]), [ht, Be] = a.useState(!1), [ut, qr] = a.useState(!1), [xt, en] = a.useState(!1), [tn, ge] = a.useState(!1), [Le, Ut] = a.useState(""), [$t, _t] = a.useState([]), Vt = a.useRef(null), Jt = a.useRef(null), Yt = a.useRef(null), Xt = a.useRef(null), Zt = a.useRef(null), Qt = a.useRef(null), Gt = a.useRef(null), qt = a.useRef(null), er = a.useRef(null), tr = a.useRef(null), rr = a.useRef(null), nr = a.useRef(null), sr = a.useRef(null), ar = a.useRef(null), cr = a.useRef(null), or = a.useRef(null), lr = a.useRef(null), m = a.useCallback((e)=>{
            I.current = e, Dt(e);
        }, []), G = a.useCallback((e, n)=>{
            const t = d.current;
            if (!t) return null;
            const s = oe.current[n];
            if (!s) return null;
            const o = le.current, c = s.getBoundingClientRect(), l = (e.clientX - c.left) / c.width * s.width / o, f = (e.clientY - c.top) / c.height * s.height / o;
            try {
                const g = t.hitTest(n, l, f), b = p(g);
                return b ? {
                    secIdx: b.sectionIndex ?? 0,
                    paraIdx: b.paragraphIndex ?? b.paraIndex ?? 0,
                    charOffset: b.charOffset ?? 0
                } : null;
            } catch  {
                return null;
            }
        }, []), h = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.pageCount();
                Nt(n), Je((t)=>t + 1);
            } catch (n) {
                M(String(n));
            }
        }, []), Me = a.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = oe.current[e];
            if (!t) return;
            const s = le.current;
            try {
                n.renderPageToCanvas(e, t, s);
                const o = t.width / s, c = t.height / s;
                t.style.width = o + "px", t.style.height = c + "px", Qe.current[e] = {
                    w: o,
                    h: c
                };
                const l = je.current[e];
                l && (l.width = t.width, l.height = t.height, l.style.width = o + "px", l.style.height = c + "px");
            } catch  {}
        }, []), C = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.pageCount();
                if (n !== D) Nt(n), Je((t)=>t + 1);
                else {
                    const t = J;
                    Me(t), t > 0 && Me(t - 1), t < n - 1 && Me(t + 1), Je((s)=>s + 1);
                }
            } catch (n) {
                M(String(n));
            }
        }, [
            D,
            J,
            Me
        ]), w = a.useCallback((e)=>{
            const n = d.current;
            if (!n) {
                F(null);
                return;
            }
            try {
                const t = p(n.getCursorRect(e.secIdx, e.paraIdx, e.charOffset));
                t && t.x !== void 0 ? (F({
                    pageIndex: t.pageIndex ?? 0,
                    x: t.x,
                    y: t.y,
                    height: t.height
                }), ue(t.pageIndex ?? 0)) : F(null);
            } catch  {
                F(null);
            }
        }, []), O = a.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    const t = n.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), s = p(t);
                    if (s) {
                        const o = s.fontFamily || "맑은 고딕", c = s.fontSize || 1e3;
                        Bt(o), Mt(String(Math.round(c / 100))), Lr({
                            fontFamily: o,
                            fontSize: c,
                            bold: !!s.bold,
                            italic: !!s.italic,
                            underline: !!s.underline,
                            strikethrough: !!s.strikethrough,
                            textColor: s.textColor ?? 0,
                            highlight: s.highlight ?? Ve("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const t = n.getParaPropertiesAt(e.secIdx, e.paraIdx), s = p(t);
                    s && Mr({
                        alignment: s.alignment || "justify",
                        lineSpacing: s.lineSpacing || 160,
                        marginLeft: s.marginLeft || 0,
                        marginRight: s.marginRight || 0,
                        indent: s.indent || 0
                    });
                } catch  {}
            }
        }, []), N = a.useCallback((e, n)=>{
            const t = d.current;
            if (!t) {
                re([]);
                return;
            }
            let s = e.paraIdx, o = e.charOffset, c = n.paraIdx, l = n.charOffset;
            (s > c || s === c && o > l) && ([s, c] = [
                c,
                s
            ], [o, l] = [
                l,
                o
            ]);
            try {
                const f = t.getSelectionRects(e.secIdx, s, o, c, l), g = JSON.parse(f);
                re(Array.isArray(g) ? g : []);
            } catch  {
                re([]);
            }
        }, []), y = a.useCallback((e, n = !0)=>{
            m(e), n ? (x.current = null, S(!1), re([])) : x.current && N(x.current, e), w(e), O(e), Rt(!0), ie.current?.focus();
        }, [
            m,
            w,
            O,
            N
        ]), i = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.saveSnapshot();
                if (Y.current.push(n), Y.current.length > Yn) {
                    const t = Y.current.shift();
                    if (t !== void 0) try {
                        e.discardSnapshot(t);
                    } catch  {}
                }
                ne.current.forEach((t)=>{
                    try {
                        e.discardSnapshot(t);
                    } catch  {}
                }), ne.current = [], ve(!0), ke(!1);
            } catch  {}
        }, []), K = a.useCallback(()=>{
            const e = d.current;
            if (!e || Y.current.length === 0) return;
            const n = Y.current.pop();
            try {
                const s = e.saveSnapshot();
                ne.current.push(s), e.restoreSnapshot(n);
                try {
                    e.discardSnapshot(n);
                } catch  {}
            } catch  {}
            h(), ve(Y.current.length > 0), ke(!0);
            const t = I.current;
            w(t), O(t);
        }, [
            h,
            w,
            O
        ]), U = a.useCallback(()=>{
            const e = d.current;
            if (!e || ne.current.length === 0) return;
            const n = ne.current.pop();
            try {
                const s = e.saveSnapshot();
                Y.current.push(s), e.restoreSnapshot(n);
                try {
                    e.discardSnapshot(n);
                } catch  {}
            } catch  {}
            h(), ve(!0), ke(ne.current.length > 0);
            const t = I.current;
            w(t), O(t);
        }, [
            h,
            w,
            O
        ]), He = a.useCallback((e, n)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (d.current && d.current !== e) try {
                d.current.free();
            } catch  {}
            d.current = e, Y.current = [], ne.current = [], ve(!1), ke(!1), Fr(n), Rt(!1), Dt(null), F(null), x.current = null, S(!1), re([]), ue(0), M(""), Qe.current = {}, T("body"), A.current = null, X.current = null, Z.current = null, H(null), h();
            try {
                const t = p(e.getCaretPosition());
                if (t && t.paragraphIndex !== void 0) {
                    const s = {
                        secIdx: t.sectionIndex ?? 0,
                        paraIdx: t.paragraphIndex,
                        charOffset: t.charOffset ?? 0
                    };
                    m(s), setTimeout(()=>w(s), 80);
                } else {
                    const s = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    m(s), setTimeout(()=>w(s), 80);
                }
            } catch  {
                const t = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                m(t), setTimeout(()=>w(t), 80);
            }
        }, [
            h,
            m,
            w
        ]), ir = a.useCallback(async ()=>{
            if (k) try {
                const { HwpDocument: e } = await Dr(async ()=>{
                    const { HwpDocument: t } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: t
                    };
                }, []), n = e.createEmpty();
                p(n.createBlankDocument()), He(n, "새 문서.hwp");
            } catch (e) {
                M(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            k,
            He
        ]), ze = a.useCallback(async (e)=>{
            if (!k) return;
            const n = e.name.split(".").pop()?.toLowerCase();
            if (n !== "hwp" && n !== "hwpx") {
                M(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: t } = await Dr(async ()=>{
                    const { HwpDocument: c } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: c
                    };
                }, []), s = new Uint8Array(await e.arrayBuffer()), o = new t(s);
                He(o, e.name);
            } catch (t) {
                M(`파일 열기 실패: ${t.message}`);
            }
        }, [
            k,
            He
        ]), dr = a.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && ze(e.files[0]);
            }, e.click();
        }, [
            ze
        ]), hr = a.useCallback((e)=>{
            e.preventDefault(), Ge(!0);
        }, []), ur = a.useCallback(()=>Ge(!1), []), xr = a.useCallback((e)=>{
            e.preventDefault(), Ge(!1);
            const n = e.dataTransfer.files[0];
            n && ze(n);
        }, [
            ze
        ]), $ = a.useCallback(()=>{
            const e = d.current, n = x.current, t = I.current;
            if (!e || !n) return null;
            let s = n.paraIdx, o = n.charOffset, c = t.paraIdx, l = t.charOffset;
            (s > c || s === c && o > l) && ([s, c] = [
                c,
                s
            ], [o, l] = [
                l,
                o
            ]);
            try {
                const f = e.deleteRange(t.secIdx, s, o, c, l), g = p(f);
                return x.current = null, S(!1), re([]), g?.ok ? {
                    secIdx: t.secIdx,
                    paraIdx: g.paraIdx,
                    charOffset: g.charOffset
                } : {
                    ...n
                };
            } catch  {
                return x.current = null, S(!1), re([]), {
                    ...n
                };
            }
        }, []), q = a.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            i();
            let t = I.current;
            if (x.current) {
                const s = $();
                s && (t = s);
            }
            try {
                const s = n.insertText(t.secIdx, t.paraIdx, t.charOffset, e), c = p(s)?.charOffset ?? t.charOffset + e.length, l = {
                    ...t,
                    charOffset: c
                };
                C(), y(l);
            } catch (s) {
                console.error("insertText failed:", s);
            }
        }, [
            i,
            $,
            y,
            C
        ]), ft = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            if (x.current) {
                i();
                const t = $();
                t && y(t), C();
                return;
            }
            const n = I.current;
            i();
            try {
                if (n.charOffset > 0) {
                    const t = e.deleteText(n.secIdx, n.paraIdx, n.charOffset - 1, 1), o = p(t)?.charOffset ?? n.charOffset - 1;
                    y({
                        ...n,
                        charOffset: o
                    });
                } else if (n.paraIdx > 0) {
                    const t = e.getParagraphLength(n.secIdx, n.paraIdx - 1), s = e.mergeParagraph(n.secIdx, n.paraIdx), o = p(s);
                    y({
                        secIdx: n.secIdx,
                        paraIdx: o?.paraIdx ?? n.paraIdx - 1,
                        charOffset: o?.charOffset ?? t
                    });
                }
            } catch (t) {
                console.error("deleteCharBefore failed:", t);
            }
            C();
        }, [
            $,
            i,
            y,
            C
        ]), fr = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            if (x.current) {
                i();
                const t = $();
                t && y(t), C();
                return;
            }
            const n = I.current;
            i();
            try {
                const t = e.getParagraphLength(n.secIdx, n.paraIdx);
                if (n.charOffset < t) e.deleteText(n.secIdx, n.paraIdx, n.charOffset, 1), y({
                    ...n
                });
                else {
                    const s = e.getParagraphCount(n.secIdx);
                    if (n.paraIdx < s - 1) {
                        const o = e.mergeParagraph(n.secIdx, n.paraIdx + 1), c = p(o);
                        y({
                            secIdx: n.secIdx,
                            paraIdx: c?.paraIdx ?? n.paraIdx,
                            charOffset: c?.charOffset ?? n.charOffset
                        });
                    }
                }
            } catch (t) {
                console.error("deleteCharAfter failed:", t);
            }
            C();
        }, [
            $,
            i,
            y,
            C
        ]), P = a.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = I.current;
            if (i(), x.current) {
                const s = x.current;
                let o = s.paraIdx, c = s.charOffset, l = t.paraIdx, f = t.charOffset;
                (o > l || o === l && c > f) && ([o, l] = [
                    l,
                    o
                ], [c, f] = [
                    f,
                    c
                ]);
                try {
                    n.beginBatch();
                    for(let g = o; g <= l; g++){
                        const b = g === o ? c : 0, v = g === l ? f : n.getParagraphLength(t.secIdx, g);
                        n.applyCharFormat(t.secIdx, g, b, v, JSON.stringify(e));
                    }
                    n.endBatch();
                } catch  {
                    try {
                        n.endBatch();
                    } catch  {}
                }
            } else try {
                const s = n.getParagraphLength(t.secIdx, t.paraIdx);
                let o = t.charOffset, c = t.charOffset + 1;
                t.charOffset >= s && t.charOffset > 0 && (o = t.charOffset - 1, c = t.charOffset), o < c && n.applyCharFormat(t.secIdx, t.paraIdx, o, c, JSON.stringify(e));
            } catch  {}
            C(), O(t);
        }, [
            i,
            C,
            O
        ]), he = a.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = I.current;
            i();
            try {
                n.applyParaFormat(t.secIdx, t.paraIdx, JSON.stringify(e));
            } catch  {}
            h(), O(t);
        }, [
            i,
            h,
            O
        ]), pt = a.useCallback(()=>P({
                bold: !E.bold
            }), [
            P,
            E.bold
        ]), gt = a.useCallback(()=>P({
                italic: !E.italic
            }), [
            P,
            E.italic
        ]), yt = a.useCallback(()=>P({
                underline: !E.underline
            }), [
            P,
            E.underline
        ]), rn = a.useCallback(()=>P({
                strikethrough: !E.strikethrough
            }), [
            P,
            E.strikethrough
        ]), nn = a.useCallback((e)=>{
            P({
                fontFamily: e
            }), Bt(e), Ne(!1);
        }, [
            P
        ]), sn = a.useCallback((e)=>{
            P({
                fontSize: Math.round(e * 100)
            }), Mt(String(e)), Se(!1);
        }, [
            P
        ]), an = a.useCallback((e)=>{
            he({
                alignment: e
            });
        }, [
            he
        ]), cn = a.useCallback((e)=>{
            he({
                lineSpacing: e
            }), Ee(!1);
        }, [
            he
        ]), pr = a.useCallback((e)=>{
            const n = Math.max(0, Ce.marginLeft + e * 800);
            he({
                marginLeft: n
            });
        }, [
            he,
            Ce.marginLeft
        ]), on = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                const t = e.ensureDefaultBullet("●");
                e.applyParaFormat(n.secIdx, n.paraIdx, JSON.stringify({
                    numberingId: t,
                    numberingLevel: 0
                }));
            } catch  {}
            h();
        }, [
            i,
            h
        ]), ln = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                const t = e.ensureDefaultNumbering();
                e.applyParaFormat(n.secIdx, n.paraIdx, JSON.stringify({
                    numberingId: t,
                    numberingLevel: 0
                }));
            } catch  {}
            h();
        }, [
            i,
            h
        ]), dn = a.useCallback((e)=>{
            P({
                textColor: Ve(e)
            }), Pe(!1);
        }, [
            P
        ]), hn = a.useCallback((e)=>{
            P({
                highlight: Ve(e)
            }), Re(!1);
        }, [
            P
        ]), un = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                const t = e.createTable(n.secIdx, n.paraIdx, n.charOffset, ct, ot), s = p(t);
                s?.ok && y({
                    ...n,
                    paraIdx: s.paraIdx ?? n.paraIdx,
                    charOffset: 0
                });
            } catch (t) {
                M(t.message);
            }
            h(), Fe(!1);
        }, [
            i,
            y,
            h,
            ct,
            ot
        ]), xn = a.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (n)=>{
                const t = n.target.files?.[0];
                if (!t) return;
                const s = d.current;
                if (!s) return;
                const o = I.current;
                i();
                try {
                    const c = new Uint8Array(await t.arrayBuffer()), l = new Image, f = URL.createObjectURL(t);
                    l.onload = ()=>{
                        URL.revokeObjectURL(f);
                        const g = l.naturalWidth, b = l.naturalHeight, v = Math.min(Math.round(g / 96 * 7200), 48e3), ee = Math.round(b / g * v), be = t.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            s.insertPicture(o.secIdx, o.paraIdx, o.charOffset, c, v, ee, g, b, be, t.name), y({
                                ...o,
                                charOffset: o.charOffset + 1
                            });
                        } catch (B) {
                            M(B.message);
                        }
                        h();
                    }, l.src = f;
                } catch (c) {
                    M(c.message);
                }
            }, e.click();
        }, [
            i,
            y,
            h
        ]), fn = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                e.insertPageBreak(n.secIdx, n.paraIdx, n.charOffset);
            } catch  {}
            h();
        }, [
            i,
            h
        ]), pn = a.useCallback((e, n)=>{
            if (e.button !== 0) return;
            const t = G(e, n);
            t && (dt(!0), Wt.current = {
                ...t
            }, x.current = {
                ...t
            }, m(t), w(t), O(t), ie.current?.focus());
        }, [
            G,
            m,
            w,
            O
        ]), gn = a.useCallback((e, n)=>{
            if (!de) return;
            const t = G(e, n);
            !t || !x.current || (m(t), N(x.current, t), S(!0), w(t));
        }, [
            de,
            G,
            m,
            N,
            w
        ]), yn = a.useCallback((e, n)=>{
            if (!de) return;
            dt(!1);
            const t = G(e, n), s = Wt.current;
            s && t && s.secIdx === t.secIdx && s.paraIdx === t.paraIdx && s.charOffset === t.charOffset ? e.shiftKey && x.current ? (m(t), N(x.current, t), S(!0), w(t), O(t)) : y(t, !0) : t && (m(t), w(t), O(t));
        }, [
            de,
            G,
            m,
            y,
            N,
            w,
            O
        ]), bn = a.useCallback((e, n)=>{
            e.preventDefault();
            const t = d.current;
            if (!t) return;
            const s = G(e, n);
            if (!s) return;
            let o = "body", c;
            try {
                const l = t.getControlTextPositions(s.secIdx, s.paraIdx), g = JSON.parse(l)?.find((b)=>b.type === "table" && b.charOffset <= s.charOffset);
                if (g) {
                    o = "table";
                    try {
                        const b = t.getTableCellBboxes(s.secIdx, s.paraIdx, g.controlIdx), v = JSON.parse(b), ee = oe.current[n];
                        if (ee) {
                            const be = le.current, B = ee.getBoundingClientRect(), Ie = (e.clientX - B.left) / B.width * ee.width / be, we = (e.clientY - B.top) / B.height * ee.height / be, _ = v.find((L)=>Ie >= L.x && Ie <= L.x + L.w && we >= L.y && we <= L.y + L.h);
                            _ && (c = {
                                secIdx: s.secIdx,
                                paraIdx: s.paraIdx,
                                controlIdx: g.controlIdx,
                                row: _.row,
                                col: _.col,
                                cellIdx: _.cellIdx
                            });
                        }
                    } catch  {}
                }
            } catch  {}
            H({
                x: e.clientX,
                y: e.clientY,
                type: o,
                tableInfo: c
            });
        }, [
            G
        ]), We = a.useCallback(()=>H(null), []), bt = a.useCallback((e, n, t, s)=>{
            T("cell"), A.current = {
                secIdx: e,
                parentParaIdx: n,
                controlIdx: t,
                cellIdx: s,
                cellParaIdx: 0,
                charOffset: 0
            };
            try {
                const o = d.current;
                if (o) {
                    const c = p(o.getCursorRectInCell(e, n, t, s, 0, 0));
                    c && c.x !== void 0 && F({
                        pageIndex: c.pageIndex ?? 0,
                        x: c.x,
                        y: c.y,
                        height: c.height
                    });
                }
            } catch  {}
        }, []), Ae = a.useCallback((e)=>{
            const n = d.current, t = A.current;
            if (!(!n || !t)) {
                i();
                try {
                    const s = n.insertTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, e), o = p(s);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, h();
                    try {
                        const c = p(n.getCursorRectInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset));
                        c && c.x !== void 0 && F({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            h
        ]), It = a.useCallback((e)=>{
            const n = d.current, t = A.current;
            if (!(!n || !t)) {
                i();
                try {
                    if (!e && t.charOffset > 0) n.deleteTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset - 1, 1), t.charOffset--;
                    else if (!e && t.charOffset === 0 && t.cellParaIdx > 0) {
                        const s = n.mergeParagraphInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx), o = p(s);
                        t.cellParaIdx = o?.paraIdx ?? t.cellParaIdx - 1, t.charOffset = o?.charOffset ?? 0;
                    } else e && n.deleteTextInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, 1);
                    h();
                    try {
                        const s = p(n.getCursorRectInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset));
                        s && s.x !== void 0 && F({
                            pageIndex: s.pageIndex ?? 0,
                            x: s.x,
                            y: s.y,
                            height: s.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            h
        ]), gr = a.useCallback(()=>{
            const e = d.current, n = A.current;
            if (!(!e || !n)) {
                i();
                try {
                    const t = e.splitParagraphInCell(n.secIdx, n.parentParaIdx, n.controlIdx, n.cellIdx, n.cellParaIdx, n.charOffset), s = p(t);
                    n.cellParaIdx = s?.paraIdx ?? n.cellParaIdx + 1, n.charOffset = 0, h();
                } catch  {}
            }
        }, [
            i,
            h
        ]), Ke = a.useCallback((e)=>{
            const n = d.current, t = A.current;
            if (!(!n || !t)) {
                i();
                try {
                    n.applyCharFormatInCell(t.secIdx, t.parentParaIdx, t.controlIdx, t.cellIdx, t.cellParaIdx, t.charOffset, t.charOffset + 1, JSON.stringify(e));
                } catch  {}
                h();
            }
        }, [
            i,
            h
        ]), yr = a.useCallback((e)=>{
            const n = j?.tableInfo, t = d.current;
            if (!(!t || !n)) {
                i();
                try {
                    t.insertTableRow(n.secIdx, n.paraIdx, n.controlIdx, n.row, e);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), In = a.useCallback(()=>{
            const e = j?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                i();
                try {
                    n.deleteTableRow(e.secIdx, e.paraIdx, e.controlIdx, e.row);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), br = a.useCallback((e)=>{
            const n = j?.tableInfo, t = d.current;
            if (!(!t || !n)) {
                i();
                try {
                    t.insertTableColumn(n.secIdx, n.paraIdx, n.controlIdx, n.col, e);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), wn = a.useCallback(()=>{
            const e = j?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                i();
                try {
                    n.deleteTableColumn(e.secIdx, e.paraIdx, e.controlIdx, e.col);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), mn = a.useCallback(()=>{
            const e = j?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                i();
                try {
                    n.mergeTableCells(e.secIdx, e.paraIdx, e.controlIdx, e.row, e.col, e.row, e.col + 1);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), jn = a.useCallback(()=>{
            const e = j?.tableInfo, n = d.current;
            if (!(!n || !e)) {
                i();
                try {
                    n.splitTableCell(e.secIdx, e.paraIdx, e.controlIdx, e.row, e.col);
                } catch  {}
                h(), H(null);
            }
        }, [
            j,
            i,
            h
        ]), wt = a.useCallback((e, n)=>{
            const t = d.current;
            if (t) {
                try {
                    t.createHeaderFooter(e, n, 0);
                } catch  {}
                T(n ? "header" : "footer"), X.current = {
                    secIdx: e,
                    isHeader: n,
                    applyTo: 0,
                    hfParaIdx: 0,
                    charOffset: 0
                };
                try {
                    const s = p(t.getCursorRectInHeaderFooter(e, n, 0, 0, 0, 0));
                    s && s.x !== void 0 && F({
                        pageIndex: s.pageIndex ?? 0,
                        x: s.x,
                        y: s.y,
                        height: s.height
                    });
                } catch  {}
            }
        }, []), Ue = a.useCallback((e)=>{
            const n = d.current, t = X.current;
            if (!(!n || !t)) {
                i();
                try {
                    const s = n.insertTextInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, e), o = p(s);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, h();
                    try {
                        const c = p(n.getCursorRectInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, 0));
                        c && c.x !== void 0 && F({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            h
        ]), Cn = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                const t = e.insertFootnote(n.secIdx, n.paraIdx, n.charOffset), s = p(t);
                s?.ok && (T("footnote"), Z.current = {
                    secIdx: n.secIdx,
                    paraIdx: n.paraIdx,
                    controlIdx: s.controlIdx ?? 0,
                    fnParaIdx: 0,
                    charOffset: 0
                });
            } catch  {}
            h();
        }, [
            i,
            h
        ]), $e = a.useCallback((e)=>{
            const n = d.current, t = Z.current;
            if (!(!n || !t)) {
                i();
                try {
                    const s = n.insertTextInFootnote(t.secIdx, t.paraIdx, t.controlIdx, t.fnParaIdx, t.charOffset, e), o = p(s);
                    t.charOffset = o?.charOffset ?? t.charOffset + e.length, h();
                    try {
                        const c = p(n.getCursorRectInFootnote(0, t.controlIdx, t.fnParaIdx, t.charOffset));
                        c && c.x !== void 0 && F({
                            pageIndex: c.pageIndex ?? 0,
                            x: c.x,
                            y: c.y,
                            height: c.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            h
        ]), vn = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getPageDef(0), t = p(n);
                t && Q({
                    width: t.width ?? 59528,
                    height: t.height ?? 84188,
                    marginTop: t.marginTop ?? 5669,
                    marginBottom: t.marginBottom ?? 4252,
                    marginLeft: t.marginLeft ?? 4252,
                    marginRight: t.marginRight ?? 4252,
                    landscape: !!t.landscape
                });
            } catch  {}
        }, []), kn = a.useCallback(()=>{
            const e = d.current;
            if (e) {
                i();
                try {
                    e.setPageDef(0, JSON.stringify(V));
                } catch  {}
                h(), pe(!1);
            }
        }, [
            V,
            i,
            h
        ]), On = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getStyleList(), t = JSON.parse(n);
                Kt(Array.isArray(t) ? t : []);
            } catch  {
                Kt([]);
            }
        }, []), Nn = a.useCallback((e)=>{
            const n = d.current;
            if (!n) return;
            const t = I.current;
            i();
            try {
                n.applyStyle(t.secIdx, t.paraIdx, e);
            } catch  {}
            h(), O(t), Be(!1);
        }, [
            i,
            h,
            O
        ]), Sn = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = I.current;
            i();
            try {
                e.createShapeControl(JSON.stringify({
                    sectionIdx: n.secIdx,
                    paraIdx: n.paraIdx,
                    charOffset: n.charOffset,
                    width: 14400,
                    height: 7200
                }));
            } catch  {}
            h();
        }, [
            i,
            h
        ]), ye = a.useCallback(()=>{
            const e = d.current;
            if (e) try {
                const n = e.getBookmarks(), t = JSON.parse(n);
                _t(Array.isArray(t) ? t : []);
            } catch  {
                _t([]);
            }
        }, []), Ir = a.useCallback(()=>{
            const e = d.current;
            if (!e || !Le.trim()) return;
            const n = I.current;
            try {
                e.addBookmark(n.secIdx, n.paraIdx, n.charOffset, Le.trim());
            } catch  {}
            Ut(""), ye();
        }, [
            Le,
            ye
        ]), Pn = a.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    n.deleteBookmark(e.secIdx, e.paraIdx, e.controlIdx ?? 0);
                } catch  {}
                ye();
            }
        }, [
            ye
        ]), Rn = a.useCallback((e)=>{
            y({
                secIdx: e.secIdx,
                paraIdx: e.paraIdx,
                charOffset: e.charOffset
            }), ge(!1);
        }, [
            y
        ]), Dn = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = !ut;
            try {
                e.setShowControlCodes(n);
            } catch  {}
            qr(n), h();
        }, [
            ut,
            h
        ]), En = a.useCallback(()=>{
            const e = d.current;
            if (!e) return;
            const n = !xt;
            try {
                e.setShowParagraphMarks(n);
            } catch  {}
            en(n), h();
        }, [
            xt,
            h
        ]), mt = a.useCallback(async ()=>{
            const e = d.current;
            if (e) {
                try {
                    const n = await navigator.clipboard.read();
                    for (const t of n)if (t.types.includes("text/html")) {
                        const o = await (await t.getType("text/html")).text();
                        i();
                        const c = I.current;
                        if (x.current) {
                            const l = $();
                            l && m(l);
                        }
                        try {
                            const l = e.pasteHtml(I.current.secIdx, I.current.paraIdx, I.current.charOffset, o), f = p(l);
                            f?.ok && y({
                                secIdx: I.current.secIdx,
                                paraIdx: f.paraIdx ?? c.paraIdx,
                                charOffset: f.charOffset ?? 0
                            });
                        } catch  {}
                        h();
                        return;
                    }
                } catch  {}
                try {
                    const n = await navigator.clipboard.readText();
                    n && q(n);
                } catch  {}
            }
        }, [
            i,
            $,
            m,
            y,
            q,
            h
        ]), wr = a.useCallback((e)=>{
            const n = A.current;
            if (!n) {
                T("body"), A.current = null;
                return;
            }
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), K();
                        return;
                    case "y":
                        e.preventDefault(), U();
                        return;
                    case "b":
                        e.preventDefault(), Ke({
                            bold: !0
                        });
                        return;
                    case "i":
                        e.preventDefault(), Ke({
                            italic: !0
                        });
                        return;
                    case "u":
                        e.preventDefault(), Ke({
                            underline: !0
                        });
                        return;
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    e.preventDefault(), gr();
                    break;
                case "Backspace":
                    e.preventDefault(), It(!1);
                    break;
                case "Delete":
                    e.preventDefault(), It(!0);
                    break;
                case "Escape":
                    e.preventDefault(), T("body"), A.current = null;
                    break;
                case "Tab":
                    {
                        e.preventDefault();
                        const s = d.current;
                        if (!s) break;
                        try {
                            const o = p(s.getTableDimensions(n.secIdx, n.parentParaIdx, n.controlIdx));
                            if (o) {
                                const c = o.rows * o.cols;
                                n.cellIdx + 1 < c && bt(n.secIdx, n.parentParaIdx, n.controlIdx, n.cellIdx + 1);
                            }
                        } catch  {}
                        break;
                    }
            }
        }, [
            K,
            U,
            Ke,
            gr,
            It,
            bt
        ]), jt = a.useCallback((e)=>{
            const n = d.current, t = X.current;
            if (!(!n || !t)) {
                i();
                try {
                    if (!e && t.charOffset > 0) n.deleteTextInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset - 1, 1), t.charOffset--;
                    else if (!e && t.charOffset === 0 && t.hfParaIdx > 0) {
                        const s = n.mergeParagraphInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx), o = p(s);
                        t.hfParaIdx = o?.paraIdx ?? t.hfParaIdx - 1, t.charOffset = o?.charOffset ?? 0;
                    } else e && n.deleteTextInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, 1);
                    C();
                    try {
                        const s = p(n.getCursorRectInHeaderFooter(t.secIdx, t.isHeader, t.applyTo, t.hfParaIdx, t.charOffset, 0));
                        s && s.x !== void 0 && F({
                            pageIndex: s.pageIndex ?? 0,
                            x: s.x,
                            y: s.y,
                            height: s.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            C
        ]), mr = a.useCallback(()=>{
            const e = d.current, n = X.current;
            if (!(!e || !n)) {
                i();
                try {
                    const t = e.splitParagraphInHeaderFooter(n.secIdx, n.isHeader, n.applyTo, n.hfParaIdx, n.charOffset), s = p(t);
                    n.hfParaIdx = s?.paraIdx ?? n.hfParaIdx + 1, n.charOffset = 0, C();
                } catch  {}
            }
        }, [
            i,
            C
        ]), jr = a.useCallback((e)=>{
            if (!X.current) {
                T("body");
                return;
            }
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), K();
                        return;
                    case "y":
                        e.preventDefault(), U();
                        return;
                }
                return;
            }
            switch(e.key){
                case "Escape":
                    e.preventDefault(), T("body"), X.current = null;
                    break;
                case "Enter":
                    e.preventDefault(), mr();
                    break;
                case "Backspace":
                    e.preventDefault(), jt(!1);
                    break;
                case "Delete":
                    e.preventDefault(), jt(!0);
                    break;
            }
        }, [
            T,
            K,
            U,
            mr,
            jt
        ]), Ct = a.useCallback((e)=>{
            const n = d.current, t = Z.current;
            if (!(!n || !t)) {
                i();
                try {
                    !e && t.charOffset > 0 ? (n.deleteTextInFootnote(t.secIdx, t.paraIdx, t.controlIdx, t.fnParaIdx, t.charOffset - 1, 1), t.charOffset--) : e && n.deleteTextInFootnote(t.secIdx, t.paraIdx, t.controlIdx, t.fnParaIdx, t.charOffset, 1), C();
                    try {
                        const s = p(n.getCursorRectInFootnote(0, t.controlIdx, t.fnParaIdx, t.charOffset));
                        s && s.x !== void 0 && F({
                            pageIndex: s.pageIndex ?? 0,
                            x: s.x,
                            y: s.y,
                            height: s.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            i,
            C
        ]), Cr = a.useCallback(()=>{
            const e = d.current, n = Z.current;
            if (!(!e || !n)) {
                i();
                try {
                    const t = e.splitParagraphInFootnote(n.secIdx, n.paraIdx, n.controlIdx, n.fnParaIdx, n.charOffset), s = p(t);
                    n.fnParaIdx = s?.paraIdx ?? n.fnParaIdx + 1, n.charOffset = 0, C();
                } catch  {}
            }
        }, [
            i,
            C
        ]), vr = a.useCallback((e)=>{
            if (!Z.current) {
                T("body");
                return;
            }
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), K();
                        return;
                    case "y":
                        e.preventDefault(), U();
                        return;
                }
                return;
            }
            switch(e.key){
                case "Escape":
                    e.preventDefault(), T("body"), Z.current = null;
                    break;
                case "Enter":
                    e.preventDefault(), Cr();
                    break;
                case "Backspace":
                    e.preventDefault(), Ct(!1);
                    break;
                case "Delete":
                    e.preventDefault(), Ct(!0);
                    break;
            }
        }, [
            T,
            K,
            U,
            Cr,
            Ct
        ]), kr = a.useCallback(()=>{
            const e = d.current;
            if (!e || !z) return;
            const n = I.current;
            try {
                const t = e.searchText(z, n.secIdx, n.paraIdx, n.charOffset, !0, se), s = p(t);
                if (s?.found) {
                    const o = {
                        secIdx: s.sectionIndex ?? n.secIdx,
                        paraIdx: s.paragraphIndex ?? s.paraIdx ?? n.paraIdx,
                        charOffset: s.charOffset ?? 0
                    };
                    y(o), ae("");
                } else ae(u("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            z,
            se,
            y,
            u
        ]), Or = a.useCallback(()=>{
            const e = d.current;
            if (!(!e || !z)) {
                i();
                try {
                    const n = e.replaceOne(z, fe, se);
                    p(n)?.ok ? (h(), ae(u("site.hwpEditor.replaced"))) : ae(u("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            z,
            fe,
            se,
            i,
            h,
            u
        ]), Fn = a.useCallback(()=>{
            const e = d.current;
            if (!(!e || !z)) {
                i();
                try {
                    const n = e.replaceAll(z, fe, se), t = p(n);
                    h(), ae(`${u("site.hwpEditor.replaced")} ${t?.count ?? 0}`);
                } catch  {}
            }
        }, [
            z,
            fe,
            se,
            i,
            h,
            u
        ]), Nr = a.useCallback((e)=>{
            const n = d.current;
            if (n) {
                try {
                    const t = e === "hwp" ? n.exportHwp() : n.exportHwpx(), s = new Blob([
                        t
                    ], {
                        type: "application/octet-stream"
                    }), o = URL.createObjectURL(s), c = document.createElement("a");
                    c.href = o;
                    const l = xe ? xe.replace(/\.[^.]+$/, "") : "document";
                    c.download = `${l}.${e}`, c.click(), URL.revokeObjectURL(o);
                } catch (t) {
                    M(`내보내기 실패: ${t.message}`);
                }
                De(!1);
            }
        }, [
            xe
        ]), Tn = a.useCallback((e)=>{
            if (Oe.current) return;
            const n = d.current;
            if (!n || !I.current) return;
            if (W === "cell") {
                wr(e);
                return;
            }
            if (W === "header" || W === "footer") {
                jr(e);
                return;
            }
            if (W === "footnote") {
                vr(e);
                return;
            }
            const t = I.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), K();
                        return;
                    case "y":
                        e.preventDefault(), U();
                        return;
                    case "b":
                        e.preventDefault(), pt();
                        return;
                    case "i":
                        e.preventDefault(), gt();
                        return;
                    case "u":
                        e.preventDefault(), yt();
                        return;
                    case "f":
                        e.preventDefault(), Te(!0);
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const o = n.getSectionCount();
                                if (o === 0) return;
                                const c = o - 1, l = n.getParagraphCount(c) - 1, f = n.getParagraphLength(c, l), g = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, b = {
                                    secIdx: c,
                                    paraIdx: l,
                                    charOffset: f
                                };
                                x.current = g, m(b), N(g, b), S(!0), w(b);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            e.preventDefault();
                            const o = x.current;
                            if (!o) return;
                            let c = o.paraIdx, l = o.charOffset, f = t.paraIdx, g = t.charOffset;
                            (c > f || c === f && l > g) && ([c, f] = [
                                f,
                                c
                            ], [l, g] = [
                                g,
                                l
                            ]);
                            try {
                                const b = n.copySelection(t.secIdx, c, l, f, g), v = p(b);
                                v?.text && navigator.clipboard.writeText(v.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const o = x.current;
                            if (!o) return;
                            let c = o.paraIdx, l = o.charOffset, f = t.paraIdx, g = t.charOffset;
                            (c > f || c === f && l > g) && ([c, f] = [
                                f,
                                c
                            ], [l, g] = [
                                g,
                                l
                            ]);
                            try {
                                const b = n.copySelection(t.secIdx, c, l, f, g), v = p(b);
                                v?.text && navigator.clipboard.writeText(v.text).catch(()=>{});
                            } catch  {}
                            ft();
                            return;
                        }
                    case "v":
                        {
                            e.preventDefault(), mt();
                            return;
                        }
                }
                return;
            }
            switch(e.key){
                case "Enter":
                    {
                        if (e.preventDefault(), i(), x.current) {
                            const c = $();
                            c && m(c);
                        }
                        const o = I.current;
                        try {
                            const c = n.splitParagraph(o.secIdx, o.paraIdx, o.charOffset), l = p(c), f = {
                                secIdx: o.secIdx,
                                paraIdx: l?.paraIdx ?? o.paraIdx + 1,
                                charOffset: 0
                            };
                            y(f);
                        } catch  {}
                        C();
                        break;
                    }
                case "Backspace":
                    e.preventDefault(), ft();
                    break;
                case "Delete":
                    e.preventDefault(), fr();
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
                        }), m(o), N(x.current, o), S(!0), w(o)) : y(o);
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
                        }), m(o), N(x.current, o), S(!0), w(o)) : y(o);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const o = R ? R.x : 0;
                        try {
                            const c = n.moveVertical(t.secIdx, t.paraIdx, t.charOffset, -1, o, 4294967295, 4294967295, 4294967295, 4294967295), l = p(c);
                            if (l) {
                                const f = {
                                    secIdx: l.sectionIndex ?? t.secIdx,
                                    paraIdx: l.paragraphIndex ?? l.paraIdx ?? t.paraIdx,
                                    charOffset: l.charOffset ?? t.charOffset
                                };
                                e.shiftKey ? (x.current || (x.current = {
                                    ...t
                                }), m(f), N(x.current, f), S(!0), w(f)) : y(f);
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
                                }), m(c), N(x.current, c), S(!0), w(c)) : y(c);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const o = R ? R.x : 0;
                        try {
                            const c = n.moveVertical(t.secIdx, t.paraIdx, t.charOffset, 1, o, 4294967295, 4294967295, 4294967295, 4294967295), l = p(c);
                            if (l) {
                                const f = {
                                    secIdx: l.sectionIndex ?? t.secIdx,
                                    paraIdx: l.paragraphIndex ?? l.paraIdx ?? t.paraIdx,
                                    charOffset: l.charOffset ?? t.charOffset
                                };
                                e.shiftKey ? (x.current || (x.current = {
                                    ...t
                                }), m(f), N(x.current, f), S(!0), w(f)) : y(f);
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
                                    }), m(l), N(x.current, l), S(!0), w(l)) : y(l);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault();
                        try {
                            const o = p(n.getLineInfo(t.secIdx, t.paraIdx, t.charOffset)), c = {
                                ...t,
                                charOffset: o ? o.charStart : 0
                            };
                            e.shiftKey ? (x.current || (x.current = {
                                ...t
                            }), m(c), N(x.current, c), S(!0), w(c)) : y(c);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        try {
                            const o = p(n.getLineInfo(t.secIdx, t.paraIdx, t.charOffset)), c = n.getParagraphLength(t.secIdx, t.paraIdx), l = {
                                ...t,
                                charOffset: o ? Math.min(o.charEnd, c) : c
                            };
                            e.shiftKey ? (x.current || (x.current = {
                                ...t
                            }), m(l), N(x.current, l), S(!0), w(l)) : y(l);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), q("	");
                    break;
                case "Escape":
                    Te(!1), Ne(!1), Se(!1), Pe(!1), Re(!1), De(!1), Ee(!1), Fe(!1), H(null), pe(!1), Be(!1), ge(!1);
                    break;
            }
        }, [
            W,
            wr,
            jr,
            vr,
            Br,
            R,
            K,
            U,
            pt,
            gt,
            yt,
            q,
            $,
            ft,
            fr,
            i,
            y,
            C,
            N,
            w,
            m,
            mt
        ]), Bn = a.useCallback(()=>{
            Oe.current = !0;
        }, []), Ln = a.useCallback((e)=>{
            Oe.current = !1;
            const n = e.data;
            if (n) {
                const t = it.current;
                t === "cell" ? Ae(n) : t === "header" || t === "footer" ? Ue(n) : t === "footnote" ? $e(n) : q(n);
            }
            ie.current && (ie.current.value = "");
        }, [
            q,
            Ae,
            Ue,
            $e
        ]), Mn = a.useCallback((e)=>{
            if (Oe.current) return;
            const n = e.target, t = n.value;
            if (t) {
                const s = it.current;
                s === "cell" ? Ae(t) : s === "header" || s === "footer" ? Ue(t) : s === "footnote" ? $e(t) : q(t), n.value = "";
            }
        }, [
            q,
            Ae,
            Ue,
            $e
        ]), Hn = a.useCallback((e)=>{
            Xe(e.target.value);
        }, []), Sr = a.useCallback(()=>{
            const e = parseInt(Ye, 10);
            !isNaN(e) && e >= 1 && e <= D ? ue(e - 1) : Xe(String(J + 1));
        }, [
            Ye,
            D,
            J
        ]), zn = a.useCallback(()=>Pt((e)=>Math.min(e + 10, 200)), []), Wn = a.useCallback(()=>Pt((e)=>Math.max(e - 10, 30)), []);
        a.useEffect(()=>{
            Xe(String(J + 1));
        }, [
            J
        ]), a.useEffect(()=>{
            const e = (n)=>{
                const t = n.target, s = (o, c)=>!o.current?.contains(t) && !c.current?.contains(t);
                qe && s(Vt, Jt) && Ne(!1), et && s(Yt, Xt) && Se(!1), tt && s(Zt, Qt) && Pe(!1), rt && s(Gt, qt) && Re(!1), nt && s(er, tr) && De(!1), st && s(rr, nr) && Ee(!1), at && s(ar, sr) && Fe(!1), ht && s(cr, or) && Be(!1), j && !lr.current?.contains(t) && H(null);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            qe,
            et,
            tt,
            rt,
            nt,
            st,
            at,
            ht,
            j
        ]), a.useEffect(()=>{
            if (!de) return;
            const e = ()=>dt(!1);
            return document.addEventListener("mouseup", e), ()=>document.removeEventListener("mouseup", e);
        }, [
            de
        ]), a.useEffect(()=>()=>{
                if (d.current) {
                    try {
                        d.current.free();
                    } catch  {}
                    d.current = null;
                }
            }, []), a.useEffect(()=>{
            const e = d.current;
            if (!e || D === 0) return;
            const n = le.current;
            for(let t = 0; t < D; t++){
                const s = oe.current[t];
                if (s) try {
                    e.renderPageToCanvas(t, s, n);
                    const o = s.width / n, c = s.height / n;
                    s.style.width = o + "px", s.style.height = c + "px", Qe.current[t] = {
                        w: o,
                        h: c
                    };
                    const l = je.current[t];
                    l && (l.width = s.width, l.height = s.height, l.style.width = o + "px", l.style.height = c + "px");
                } catch (o) {
                    console.error("renderPageToCanvas failed for page", t, o);
                }
            }
        }, [
            St,
            D
        ]), a.useEffect(()=>{
            const e = le.current;
            for(let n = 0; n < D; n++){
                const t = je.current[n];
                if (!t) continue;
                const s = t.getContext("2d");
                if (!s) continue;
                s.clearRect(0, 0, t.width, t.height);
                const o = Et.filter((c)=>c.pageIndex === n);
                if (o.length > 0) {
                    s.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const c of o)s.fillRect(c.x * e, c.y * e, c.width * e, c.height * e);
                }
                R && R.pageIndex === n && Ft && (s.strokeStyle = "#0046C8", s.lineWidth = Math.max(1.5, 2 * e), s.beginPath(), s.moveTo(R.x * e, R.y * e), s.lineTo(R.x * e, (R.y + R.height) * e), s.stroke());
            }
        }, [
            D,
            R,
            Et,
            Ft,
            St
        ]), a.useEffect(()=>{
            if (!R) {
                Ze(!0);
                return;
            }
            Ze(!0);
            const e = setInterval(()=>Ze((n)=>!n), 530);
            return ()=>clearInterval(e);
        }, [
            R
        ]);
        const Pr = D > 0, vt = Er(E.textColor), kt = Er(E.highlight), Rr = (e, n, t, s)=>r.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    r.jsx("div", {
                        className: "hwp-color-grid",
                        children: Jn.map((o, c)=>r.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: o.map((l)=>r.jsx("div", {
                                        className: `hwp-color-swatch${e.toUpperCase() === l.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: l
                                        },
                                        title: l,
                                        onClick: ()=>s(l)
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
                                onClick: ()=>s(n),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return r.jsxs(r.Fragment, {
            children: [
                r.jsx(Un, {
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
                            Tt && r.jsxs("div", {
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
                                        children: Tt
                                    }),
                                    r.jsx("button", {
                                        onClick: ()=>M(""),
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
                            ce && !te && r.jsxs("div", {
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
                                            ce
                                        ]
                                    })
                                ]
                            }),
                            te && r.jsxs("div", {
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
                            k && !Pr && !te && r.jsx("div", {
                                className: `hwp-editor-container${Ar ? " drag-over" : ""}`,
                                onDragOver: hr,
                                onDragLeave: ur,
                                onDrop: xr,
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
                                                    onClick: ir,
                                                    disabled: !k,
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
                                                    onClick: dr,
                                                    disabled: !k,
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
                            Pr && r.jsxs("div", {
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
                                                        onClick: ir,
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
                                                        onClick: dr,
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
                                                                ref: er,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.export"),
                                                                onClick: ()=>De((e)=>!e),
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
                                                            nt && r.jsxs("div", {
                                                                ref: tr,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    r.jsx("button", {
                                                                        onClick: ()=>Nr("hwp"),
                                                                        children: u("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    r.jsx("button", {
                                                                        onClick: ()=>Nr("hwpx"),
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
                                                        onClick: K,
                                                        disabled: !Hr,
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
                                                        onClick: U,
                                                        disabled: !zr,
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
                                                                ref: Vt,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.font"),
                                                                onClick: ()=>Ne((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontFamily: lt,
                                                                            maxWidth: 96,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap",
                                                                            display: "inline-block"
                                                                        },
                                                                        children: lt
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
                                                            qe && r.jsx("div", {
                                                                ref: Jt,
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: $n.map((e)=>r.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: lt === e ? "active" : "",
                                                                        onClick: ()=>nn(e),
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
                                                                ref: Yt,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.fontSize"),
                                                                onClick: ()=>Se((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        children: Lt
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
                                                            et && r.jsx("div", {
                                                                ref: Xt,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: _n.map((e)=>r.jsx("button", {
                                                                        className: parseFloat(Lt) === e ? "active" : "",
                                                                        onClick: ()=>sn(e),
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
                                                        className: `hwp-toolbar-btn${E.bold ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.bold")} (Ctrl+B)`,
                                                        onClick: pt,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${E.italic ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: gt,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${E.underline ? " active" : ""}`,
                                                        title: `${u("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: yt,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    r.jsx("button", {
                                                        className: `hwp-toolbar-btn${E.strikethrough ? " active" : ""}`,
                                                        title: u("site.hwpEditor.strikethrough"),
                                                        onClick: rn,
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
                                                                ref: Zt,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.textColor"),
                                                                onClick: ()=>Pe((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: vt,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
                                                                    }),
                                                                    r.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: vt
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
                                                            tt && r.jsx("div", {
                                                                ref: Qt,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: Rr(vt, $r, _r, dn)
                                                            })
                                                        ]
                                                    }),
                                                    r.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            r.jsxs("button", {
                                                                ref: Gt,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.highlight"),
                                                                onClick: ()=>Re((e)=>!e),
                                                                children: [
                                                                    r.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: kt,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    r.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: kt
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
                                                            rt && r.jsx("div", {
                                                                ref: qt,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: Rr(kt, Vr, Jr, hn)
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
                                                        className: `hwp-toolbar-btn${Ce.alignment === e ? " active" : ""}`,
                                                        title: n[e],
                                                        onClick: ()=>an(e),
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
                                                            ref: rr,
                                                            className: "hwp-toolbar-btn",
                                                            title: u("site.hwpEditor.lineSpacing"),
                                                            onClick: ()=>Ee((e)=>!e),
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
                                                        st && r.jsx("div", {
                                                            ref: nr,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: Vn.map((e)=>r.jsx("button", {
                                                                    className: Ce.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>cn(e.value),
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
                                                        onClick: ()=>pr(-1),
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
                                                        onClick: ()=>pr(1),
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
                                                        onClick: on,
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
                                                        onClick: ln,
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
                                                                ref: ar,
                                                                className: "hwp-toolbar-btn",
                                                                title: u("site.hwpEditor.insertTable"),
                                                                onClick: ()=>Fe((e)=>!e),
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
                                                            at && r.jsxs("div", {
                                                                ref: sr,
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
                                                                                value: ct,
                                                                                onChange: (e)=>Kr(Number(e.target.value))
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
                                                                                value: ot,
                                                                                onChange: (e)=>Ur(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    r.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: un,
                                                                        children: u("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: u("site.hwpEditor.insertImage"),
                                                        onClick: xn,
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
                                                        onClick: fn,
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
                                                    className: `hwp-toolbar-btn${Ht ? " active" : ""}`,
                                                    title: `${u("site.hwpEditor.findReplace")} (Ctrl+F)`,
                                                    onClick: ()=>Te((e)=>!e),
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
                                                        vn(), pe((e)=>!e);
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
                                                            ref: cr,
                                                            className: "hwp-toolbar-btn",
                                                            title: "스타일",
                                                            onClick: ()=>{
                                                                On(), Be((e)=>!e);
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
                                                        ht && r.jsxs("div", {
                                                            ref: or,
                                                            className: "hwp-toolbar-dropdown hwp-style-dropdown",
                                                            children: [
                                                                At.length === 0 && r.jsx("div", {
                                                                    style: {
                                                                        padding: 10,
                                                                        fontSize: "0.82rem",
                                                                        color: "var(--text-secondary)"
                                                                    },
                                                                    children: "스타일 없음"
                                                                }),
                                                                At.map((e)=>r.jsx("button", {
                                                                        onClick: ()=>Nn(e.id),
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
                                                        onClick: ()=>wt(I.current.secIdx, !0),
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
                                                        onClick: ()=>wt(I.current.secIdx, !1),
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
                                                    onClick: Cn,
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
                                                    onClick: Sn,
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
                                                        ye(), ge((e)=>!e);
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
                                                        className: `hwp-toolbar-btn${xt ? " active" : ""}`,
                                                        title: "조판부호 표시",
                                                        onClick: En,
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
                                                        className: `hwp-toolbar-btn${ut ? " active" : ""}`,
                                                        title: "제어코드 표시",
                                                        onClick: Dn,
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
                                            xe && r.jsxs("span", {
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
                                                    xe,
                                                    Tr ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    Ht && r.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            r.jsx("input", {
                                                type: "text",
                                                placeholder: u("site.hwpEditor.find"),
                                                value: z,
                                                onChange: (e)=>{
                                                    Yr(e.target.value), ae("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && kr();
                                                },
                                                autoFocus: !0
                                            }),
                                            r.jsx("input", {
                                                type: "text",
                                                placeholder: u("site.hwpEditor.replace"),
                                                value: fe,
                                                onChange: (e)=>Xr(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && Or();
                                                }
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: kr,
                                                children: u("site.hwpEditor.findNext")
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: Or,
                                                children: u("site.hwpEditor.replaceOne")
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: Fn,
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
                                                        checked: se,
                                                        onChange: (e)=>Zr(e.target.checked)
                                                    }),
                                                    u("site.hwpEditor.caseSensitive")
                                                ]
                                            }),
                                            zt && r.jsx("span", {
                                                className: "hwp-find-info",
                                                children: zt
                                            }),
                                            r.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    Te(!1), ae("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    W !== "body" && r.jsxs("div", {
                                        className: "hwp-edit-mode-bar",
                                        children: [
                                            r.jsx("span", {
                                                children: W === "cell" ? "표 셀 편집" : W === "header" ? "머리말 편집" : W === "footer" ? "꼬리말 편집" : "각주 편집"
                                            }),
                                            r.jsx("button", {
                                                onClick: ()=>{
                                                    T("body"), A.current = null, X.current = null, Z.current = null;
                                                },
                                                children: "ESC 나가기"
                                            })
                                        ]
                                    }),
                                    r.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>ie.current?.focus(),
                                        onDragOver: hr,
                                        onDragLeave: ur,
                                        onDrop: xr,
                                        children: Array.from({
                                            length: D
                                        }, (e, n)=>r.jsxs("div", {
                                                ref: (t)=>{
                                                    Wr.current[n] = t;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    transform: `scale(${me / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onMouseDown: (t)=>pn(t, n),
                                                onMouseMove: (t)=>gn(t, n),
                                                onMouseUp: (t)=>yn(t, n),
                                                onContextMenu: (t)=>bn(t, n),
                                                onDoubleClick: (t)=>{
                                                    const s = d.current;
                                                    if (!s || W !== "body") return;
                                                    const o = oe.current[n];
                                                    if (!o) return;
                                                    const c = le.current, l = o.getBoundingClientRect(), f = (t.clientX - l.left) / l.width * o.width / c, g = (t.clientY - l.top) / l.height * o.height / c;
                                                    try {
                                                        const v = p(s.hitTestHeaderFooter(n, f, g));
                                                        if (v?.hit) {
                                                            wt(v.sectionIndex ?? 0, !!v.isHeader);
                                                            return;
                                                        }
                                                    } catch  {}
                                                    const b = I.current;
                                                    if (b) try {
                                                        const v = s.getParagraphLength(b.secIdx, b.paraIdx);
                                                        if (v > 0) {
                                                            const ee = s.getTextRange(b.secIdx, b.paraIdx, 0, v), B = p(ee)?.text ?? "";
                                                            if (B) {
                                                                const Ie = Math.min(b.charOffset, B.length), we = (_e)=>/[\w\u3131-\uD79D]/.test(_e);
                                                                let _ = Ie, L = Ie;
                                                                for(; _ > 0 && we(B[_ - 1]);)_--;
                                                                for(; L < B.length && we(B[L]);)L++;
                                                                if (_ < L) {
                                                                    const _e = {
                                                                        ...b,
                                                                        charOffset: _
                                                                    }, Ot = {
                                                                        ...b,
                                                                        charOffset: L
                                                                    };
                                                                    x.current = _e, m(Ot), N(_e, Ot), S(!0), w(Ot);
                                                                }
                                                            }
                                                        }
                                                    } catch  {}
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
                                                            je.current[n] = t;
                                                        },
                                                        className: "hwp-overlay-canvas"
                                                    })
                                                ]
                                            }, n))
                                    }),
                                    j && r.jsx("div", {
                                        ref: lr,
                                        className: "hwp-context-menu",
                                        style: {
                                            position: "fixed",
                                            left: j.x,
                                            top: j.y,
                                            zIndex: 9999
                                        },
                                        children: j.type === "table" && j.tableInfo ? r.jsxs(r.Fragment, {
                                            children: [
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        j.tableInfo && bt(j.tableInfo.secIdx, j.tableInfo.paraIdx, j.tableInfo.controlIdx, j.tableInfo.cellIdx), We();
                                                    },
                                                    children: "셀 편집"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>yr(!1),
                                                    children: "위에 행 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>yr(!0),
                                                    children: "아래에 행 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>In(),
                                                    children: "행 삭제"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>br(!1),
                                                    children: "왼쪽에 열 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>br(!0),
                                                    children: "오른쪽에 열 삽입"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>wn(),
                                                    children: "열 삭제"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>mn(),
                                                    children: "셀 병합"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>jn(),
                                                    children: "셀 분할"
                                                })
                                            ]
                                        }) : r.jsxs(r.Fragment, {
                                            children: [
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        K(), We();
                                                    },
                                                    children: "실행 취소"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        U(), We();
                                                    },
                                                    children: "다시 실행"
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-ctx-divider"
                                                }),
                                                r.jsx("button", {
                                                    onClick: ()=>{
                                                        mt(), We();
                                                    },
                                                    children: "붙여넣기"
                                                })
                                            ]
                                        })
                                    }),
                                    Gr && r.jsx("div", {
                                        className: "hwp-dialog-overlay",
                                        onClick: ()=>pe(!1),
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
                                                            value: V.width,
                                                            onChange: (e)=>Q((n)=>({
                                                                        ...n,
                                                                        width: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "용지 높이 (HWPUNIT)"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: V.height,
                                                            onChange: (e)=>Q((n)=>({
                                                                        ...n,
                                                                        height: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "위 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: V.marginTop,
                                                            onChange: (e)=>Q((n)=>({
                                                                        ...n,
                                                                        marginTop: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "아래 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: V.marginBottom,
                                                            onChange: (e)=>Q((n)=>({
                                                                        ...n,
                                                                        marginBottom: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "왼쪽 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: V.marginLeft,
                                                            onChange: (e)=>Q((n)=>({
                                                                        ...n,
                                                                        marginLeft: Number(e.target.value)
                                                                    }))
                                                        }),
                                                        r.jsx("label", {
                                                            children: "오른쪽 여백"
                                                        }),
                                                        r.jsx("input", {
                                                            type: "number",
                                                            value: V.marginRight,
                                                            onChange: (e)=>Q((n)=>({
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
                                                                    checked: V.landscape,
                                                                    onChange: (e)=>Q((n)=>({
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
                                                            onClick: ()=>pe(!1),
                                                            children: "취소"
                                                        }),
                                                        r.jsx("button", {
                                                            className: "primary",
                                                            onClick: kn,
                                                            children: "적용"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    tn && r.jsx("div", {
                                        className: "hwp-dialog-overlay",
                                        onClick: ()=>ge(!1),
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
                                                            value: Le,
                                                            onChange: (e)=>Ut(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                e.key === "Enter" && Ir();
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
                                                            onClick: Ir,
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
                                                        $t.length === 0 && r.jsx("div", {
                                                            style: {
                                                                padding: 10,
                                                                fontSize: "0.82rem",
                                                                color: "var(--text-secondary)"
                                                            },
                                                            children: "북마크 없음"
                                                        }),
                                                        $t.map((e)=>r.jsxs("div", {
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
                                                                        onClick: ()=>Rn(e),
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
                                                                        onClick: ()=>Pn(e),
                                                                        children: "삭제"
                                                                    })
                                                                ]
                                                            }, e.name))
                                                    ]
                                                }),
                                                r.jsx("div", {
                                                    className: "hwp-dialog-actions",
                                                    children: r.jsx("button", {
                                                        onClick: ()=>ge(!1),
                                                        children: "닫기"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    r.jsx("textarea", {
                                        ref: ie,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: Bn,
                                        onCompositionEnd: Ln,
                                        onInput: Mn,
                                        onKeyDown: Tn,
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
                                                        disabled: J <= 0,
                                                        onClick: ()=>ue((e)=>Math.max(0, e - 1)),
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
                                                                value: Ye,
                                                                onChange: Hn,
                                                                onBlur: Sr,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && Sr();
                                                                }
                                                            }),
                                                            " / ",
                                                            D
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: J >= D - 1,
                                                        onClick: ()=>ue((e)=>Math.min(D - 1, e + 1)),
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
                                                        onClick: Wn,
                                                        disabled: me <= 30,
                                                        children: "−"
                                                    }),
                                                    r.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            me,
                                                            "%"
                                                        ]
                                                    }),
                                                    r.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: zn,
                                                        disabled: me >= 200,
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
export { Gn as default, __tla };
