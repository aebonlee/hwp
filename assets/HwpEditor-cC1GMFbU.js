import { u as xr, r as n, _ as Ct, j as t, __tla as __tla_0 } from "./index-ZpH84hnk.js";
import { u as fr, __tla as __tla_1 } from "./useRhwp-k8qsxdyT.js";
import { S as gr } from "./SEOHead-B_6-qNMs.js";
let Ir;
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
    function de(v) {
        const z = parseInt(v.slice(1, 3), 16), $ = parseInt(v.slice(3, 5), 16);
        return parseInt(v.slice(5, 7), 16) << 16 | $ << 8 | z;
    }
    function kt(v) {
        const z = v & 255, $ = v >> 8 & 255, l = v >> 16 & 255;
        return "#" + [
            z,
            $,
            l
        ].map((p)=>p.toString(16).padStart(2, "0")).join("");
    }
    function y(v) {
        try {
            return JSON.parse(v);
        } catch  {
            return null;
        }
    }
    let wr, yr, br, jr, mr;
    wr = [
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
    yr = [
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
    br = [
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
    jr = [
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
    mr = 100;
    Ir = ()=>{
        const { ready: v, loading: z, error: $ } = fr(), { t: l } = xr(), p = n.useRef(null), [S, It] = n.useState(0), [Te, Ot] = n.useState(0), [U, V] = n.useState(0), [pe, ue] = n.useState("1"), [X, He] = n.useState(100), [J, Nt] = n.useState(""), [St, We] = n.useState(!1), j = n.useRef({
            secIdx: 0,
            paraIdx: 0,
            charOffset: 0
        }), [Et, Me] = n.useState(null), [k, Z] = n.useState(null), h = n.useRef(null), [, I] = n.useState(!1), [Ae, T] = n.useState([]), [$e, xe] = n.useState(!0), fe = n.useRef({}), ge = n.useRef({}), we = n.useRef(window.devicePixelRatio || 1), Ue = n.useRef({}), [O, Rt] = n.useState({
            fontFamily: "맑은 고딕",
            fontSize: 1e3,
            bold: !1,
            italic: !1,
            underline: !1,
            strikethrough: !1,
            textColor: 0,
            highlight: de("#FFFF00")
        }), [Y, Ft] = n.useState({
            alignment: "justify",
            lineSpacing: 160,
            marginLeft: 0,
            marginRight: 0,
            indent: 0
        }), L = n.useRef([]), H = n.useRef([]), [Dt, G] = n.useState(!1), [Lt, q] = n.useState(!1), ee = n.useRef(!1), _ = n.useRef(null), Bt = n.useRef({}), [Pt, ye] = n.useState(!1), [_e, F] = n.useState(""), [be, te] = n.useState(!1), [je, re] = n.useState(!1), [me, se] = n.useState(!1), [ve, ne] = n.useState(!1), [Ce, ae] = n.useState(!1), [ke, ce] = n.useState(!1), [Ie, oe] = n.useState(!1), [Oe, zt] = n.useState(3), [Ne, Tt] = n.useState(3), [Ht, Wt] = n.useState("#000000"), [Mt, At] = n.useState("#FFFF00"), [Se, Ke] = n.useState("맑은 고딕"), [Ve, Je] = n.useState("10"), [Ze, ie] = n.useState(!1), [D, $t] = n.useState(""), [Q, Ut] = n.useState(""), [W, _t] = n.useState(!1), [Qe, M] = n.useState(""), Xe = n.useRef(null), Ye = n.useRef(null), Ge = n.useRef(null), qe = n.useRef(null), et = n.useRef(null), tt = n.useRef(null), rt = n.useRef(null), st = n.useRef(null), nt = n.useRef(null), at = n.useRef(null), ct = n.useRef(null), ot = n.useRef(null), it = n.useRef(null), lt = n.useRef(null), b = n.useCallback((e)=>{
            j.current = e, Me(e);
        }, []), u = n.useCallback(()=>{
            const e = p.current;
            if (e) try {
                const s = e.pageCount();
                It(s), Ot((r)=>r + 1);
            } catch (s) {
                F(String(s));
            }
        }, []), w = n.useCallback((e)=>{
            const s = p.current;
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
            const s = p.current;
            if (s) {
                try {
                    const r = s.getCharPropertiesAt(e.secIdx, e.paraIdx, e.charOffset), c = y(r);
                    if (c) {
                        const a = c.fontFamily || "맑은 고딕", o = c.fontSize || 1e3;
                        Ke(a), Je(String(Math.round(o / 100))), Rt({
                            fontFamily: a,
                            fontSize: o,
                            bold: !!c.bold,
                            italic: !!c.italic,
                            underline: !!c.underline,
                            strikethrough: !!c.strikethrough,
                            textColor: c.textColor ?? 0,
                            highlight: c.highlight ?? de("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const r = s.getParaPropertiesAt(e.secIdx, e.paraIdx), c = y(r);
                    c && Ft({
                        alignment: c.alignment || "justify",
                        lineSpacing: c.lineSpacing || 160,
                        marginLeft: c.marginLeft || 0,
                        marginRight: c.marginRight || 0,
                        indent: c.indent || 0
                    });
                } catch  {}
            }
        }, []), N = n.useCallback((e, s)=>{
            const r = p.current;
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
                const d = r.getSelectionRects(e.secIdx, c, a, o, i), x = JSON.parse(d);
                T(Array.isArray(x) ? x : []);
            } catch  {
                T([]);
            }
        }, []), f = n.useCallback((e, s = !0)=>{
            b(e), s ? (h.current = null, I(!1), T([])) : h.current && N(h.current, e), w(e), E(e), We(!0), _.current?.focus();
        }, [
            b,
            w,
            E,
            N
        ]), g = n.useCallback(()=>{
            const e = p.current;
            if (e) try {
                const s = e.saveSnapshot();
                if (L.current.push(s), L.current.length > mr) {
                    const r = L.current.shift();
                    if (r !== void 0) try {
                        e.discardSnapshot(r);
                    } catch  {}
                }
                H.current.forEach((r)=>{
                    try {
                        e.discardSnapshot(r);
                    } catch  {}
                }), H.current = [], G(!0), q(!1);
            } catch  {}
        }, []), Ee = n.useCallback(()=>{
            const e = p.current;
            if (!e || L.current.length === 0) return;
            const s = L.current.pop();
            try {
                const c = e.saveSnapshot();
                H.current.push(c), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            u(), G(L.current.length > 0), q(!0);
            const r = j.current;
            w(r), E(r);
        }, [
            u,
            w,
            E
        ]), Re = n.useCallback(()=>{
            const e = p.current;
            if (!e || H.current.length === 0) return;
            const s = H.current.pop();
            try {
                const c = e.saveSnapshot();
                L.current.push(c), e.restoreSnapshot(s);
                try {
                    e.discardSnapshot(s);
                } catch  {}
            } catch  {}
            u(), G(!0), q(H.current.length > 0);
            const r = j.current;
            w(r), E(r);
        }, [
            u,
            w,
            E
        ]), le = n.useCallback((e, s)=>{
            try {
                e.convertToEditable();
            } catch  {}
            if (p.current && p.current !== e) try {
                p.current.free();
            } catch  {}
            p.current = e, L.current = [], H.current = [], G(!1), q(!1), Nt(s), We(!1), Me(null), Z(null), h.current = null, I(!1), T([]), V(0), F(""), Ue.current = {}, u();
            try {
                const r = y(e.getCaretPosition());
                if (r && r.paragraphIndex !== void 0) {
                    const c = {
                        secIdx: r.sectionIndex ?? 0,
                        paraIdx: r.paragraphIndex,
                        charOffset: r.charOffset ?? 0
                    };
                    b(c), setTimeout(()=>w(c), 80);
                } else {
                    const c = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    b(c), setTimeout(()=>w(c), 80);
                }
            } catch  {
                const r = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                b(r), setTimeout(()=>w(r), 80);
            }
        }, [
            u,
            b,
            w
        ]), ht = n.useCallback(async ()=>{
            if (v) try {
                const { HwpDocument: e } = await Ct(async ()=>{
                    const { HwpDocument: r } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: r
                    };
                }, []), s = e.createEmpty();
                y(s.createBlankDocument()), le(s, "새 문서.hwp");
            } catch (e) {
                F(`새 문서 생성 실패: ${e.message}`);
            }
        }, [
            v,
            le
        ]), he = n.useCallback(async (e)=>{
            if (!v) return;
            const s = e.name.split(".").pop()?.toLowerCase();
            if (s !== "hwp" && s !== "hwpx") {
                F(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: r } = await Ct(async ()=>{
                    const { HwpDocument: o } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: o
                    };
                }, []), c = new Uint8Array(await e.arrayBuffer()), a = new r(c);
                le(a, e.name);
            } catch (r) {
                F(`파일 열기 실패: ${r.message}`);
            }
        }, [
            v,
            le
        ]), dt = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = ".hwp,.hwpx", e.onchange = ()=>{
                e.files?.[0] && he(e.files[0]);
            }, e.click();
        }, [
            he
        ]), pt = n.useCallback((e)=>{
            e.preventDefault(), ye(!0);
        }, []), ut = n.useCallback(()=>ye(!1), []), xt = n.useCallback((e)=>{
            e.preventDefault(), ye(!1);
            const s = e.dataTransfer.files[0];
            s && he(s);
        }, [
            he
        ]), Kt = n.useCallback((e, s)=>{
            const r = p.current;
            if (!r) return;
            const c = fe.current[s];
            if (!c) return;
            const a = we.current, o = c.getBoundingClientRect(), i = (e.clientX - o.left) / o.width * c.width / a, d = (e.clientY - o.top) / o.height * c.height / a;
            try {
                const x = r.hitTest(s, i, d), m = y(x);
                if (!m) return;
                const R = m.paragraphIndex ?? m.paraIndex ?? 0, P = {
                    secIdx: m.sectionIndex ?? 0,
                    paraIdx: R,
                    charOffset: m.charOffset ?? 0
                };
                e.shiftKey && h.current ? (b(P), N(h.current, P), I(!0), w(P), E(P)) : (h.current = {
                    ...P
                }, f(P, !0));
            } catch  {}
            _.current?.focus();
        }, [
            b,
            f,
            N,
            w,
            E
        ]), B = n.useCallback(()=>{
            const e = p.current, s = h.current, r = j.current;
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
                const d = e.deleteRange(r.secIdx, c, a, o, i), x = y(d);
                return h.current = null, I(!1), T([]), x?.ok ? {
                    secIdx: r.secIdx,
                    paraIdx: x.paraIdx,
                    charOffset: x.charOffset
                } : {
                    ...s
                };
            } catch  {
                return h.current = null, I(!1), T([]), {
                    ...s
                };
            }
        }, []), A = n.useCallback((e)=>{
            const s = p.current;
            if (!s) return;
            g();
            let r = j.current;
            if (h.current) {
                const c = B();
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
            B,
            f,
            u
        ]), Fe = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            if (h.current) {
                g();
                const r = B();
                r && f(r), u();
                return;
            }
            const s = j.current;
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
            B,
            g,
            f,
            u
        ]), ft = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            if (h.current) {
                g();
                const r = B();
                r && f(r), u();
                return;
            }
            const s = j.current;
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
            B,
            g,
            f,
            u
        ]), C = n.useCallback((e)=>{
            const s = p.current;
            if (!s) return;
            const r = j.current;
            if (g(), h.current) {
                const c = h.current;
                let a = c.paraIdx, o = c.charOffset, i = r.paraIdx, d = r.charOffset;
                (a > i || a === i && o > d) && ([a, i] = [
                    i,
                    a
                ], [o, d] = [
                    d,
                    o
                ]);
                try {
                    s.beginBatch();
                    for(let x = a; x <= i; x++){
                        const m = x === a ? o : 0, R = x === i ? d : s.getParagraphLength(r.secIdx, x);
                        s.applyCharFormat(r.secIdx, x, m, R, JSON.stringify(e));
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
            u(), E(r);
        }, [
            g,
            u,
            E
        ]), K = n.useCallback((e)=>{
            const s = p.current;
            if (!s) return;
            const r = j.current;
            g();
            try {
                s.applyParaFormat(r.secIdx, r.paraIdx, JSON.stringify(e));
            } catch  {}
            u(), E(r);
        }, [
            g,
            u,
            E
        ]), De = n.useCallback(()=>C({
                bold: !O.bold
            }), [
            C,
            O.bold
        ]), Le = n.useCallback(()=>C({
                italic: !O.italic
            }), [
            C,
            O.italic
        ]), Be = n.useCallback(()=>C({
                underline: !O.underline
            }), [
            C,
            O.underline
        ]), Vt = n.useCallback(()=>C({
                strikethrough: !O.strikethrough
            }), [
            C,
            O.strikethrough
        ]), Jt = n.useCallback((e)=>{
            C({
                fontFamily: e
            }), Ke(e), te(!1);
        }, [
            C
        ]), Zt = n.useCallback((e)=>{
            C({
                fontSize: Math.round(e * 100)
            }), Je(String(e)), re(!1);
        }, [
            C
        ]), Qt = n.useCallback((e)=>{
            K({
                alignment: e
            });
        }, [
            K
        ]), Xt = n.useCallback((e)=>{
            K({
                lineSpacing: e
            }), ce(!1);
        }, [
            K
        ]), gt = n.useCallback((e)=>{
            const s = Math.max(0, Y.marginLeft + e * 800);
            K({
                marginLeft: s
            });
        }, [
            K,
            Y.marginLeft
        ]), Yt = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            const s = j.current;
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
        ]), Gt = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            const s = j.current;
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
        ]), qt = n.useCallback((e)=>{
            C({
                textColor: de(e)
            }), se(!1);
        }, [
            C
        ]), er = n.useCallback((e)=>{
            C({
                highlight: de(e)
            }), ne(!1);
        }, [
            C
        ]), tr = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            const s = j.current;
            g();
            try {
                const r = e.createTable(s.secIdx, s.paraIdx, s.charOffset, Oe, Ne), c = y(r);
                c?.ok && f({
                    ...s,
                    paraIdx: c.paraIdx ?? s.paraIdx,
                    charOffset: 0
                });
            } catch (r) {
                F(r.message);
            }
            u(), oe(!1);
        }, [
            g,
            f,
            u,
            Oe,
            Ne
        ]), rr = n.useCallback(()=>{
            const e = document.createElement("input");
            e.type = "file", e.accept = "image/*", e.onchange = async (s)=>{
                const r = s.target.files?.[0];
                if (!r) return;
                const c = p.current;
                if (!c) return;
                const a = j.current;
                g();
                try {
                    const o = new Uint8Array(await r.arrayBuffer()), i = new Image, d = URL.createObjectURL(r);
                    i.onload = ()=>{
                        URL.revokeObjectURL(d);
                        const x = i.naturalWidth, m = i.naturalHeight, R = Math.min(Math.round(x / 96 * 7200), 48e3), P = Math.round(m / x * R), pr = r.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            c.insertPicture(a.secIdx, a.paraIdx, a.charOffset, o, R, P, x, m, pr, r.name), f({
                                ...a,
                                charOffset: a.charOffset + 1
                            });
                        } catch (ur) {
                            F(ur.message);
                        }
                        u();
                    }, i.src = d;
                } catch (o) {
                    F(o.message);
                }
            }, e.click();
        }, [
            g,
            f,
            u
        ]), sr = n.useCallback(()=>{
            const e = p.current;
            if (!e) return;
            const s = j.current;
            g();
            try {
                e.insertPageBreak(s.secIdx, s.paraIdx, s.charOffset);
            } catch  {}
            u();
        }, [
            g,
            u
        ]), wt = n.useCallback(()=>{
            const e = p.current;
            if (!e || !D) return;
            const s = j.current;
            try {
                const r = e.searchText(D, s.secIdx, s.paraIdx, s.charOffset, !0, W), c = y(r);
                if (c?.found) {
                    const a = {
                        secIdx: c.sectionIndex ?? s.secIdx,
                        paraIdx: c.paragraphIndex ?? c.paraIdx ?? s.paraIdx,
                        charOffset: c.charOffset ?? 0
                    };
                    f(a), M("");
                } else M(l("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            D,
            W,
            f,
            l
        ]), yt = n.useCallback(()=>{
            const e = p.current;
            if (!(!e || !D)) {
                g();
                try {
                    const s = e.replaceOne(D, Q, W);
                    y(s)?.ok ? (u(), M(l("site.hwpEditor.replaced"))) : M(l("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            D,
            Q,
            W,
            g,
            u,
            l
        ]), nr = n.useCallback(()=>{
            const e = p.current;
            if (!(!e || !D)) {
                g();
                try {
                    const s = e.replaceAll(D, Q, W), r = y(s);
                    u(), M(`${l("site.hwpEditor.replaced")} ${r?.count ?? 0}`);
                } catch  {}
            }
        }, [
            D,
            Q,
            W,
            g,
            u,
            l
        ]), bt = n.useCallback((e)=>{
            const s = p.current;
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
                    F(`내보내기 실패: ${r.message}`);
                }
                ae(!1);
            }
        }, [
            J
        ]), ar = n.useCallback((e)=>{
            if (ee.current) return;
            const s = p.current;
            if (!s || !j.current) return;
            const r = j.current;
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()){
                    case "z":
                        e.preventDefault(), Ee();
                        return;
                    case "y":
                        e.preventDefault(), Re();
                        return;
                    case "b":
                        e.preventDefault(), De();
                        return;
                    case "i":
                        e.preventDefault(), Le();
                        return;
                    case "u":
                        e.preventDefault(), Be();
                        return;
                    case "f":
                        e.preventDefault(), ie(!0);
                        return;
                    case "a":
                        {
                            e.preventDefault();
                            try {
                                const a = s.getSectionCount();
                                if (a === 0) return;
                                const o = a - 1, i = s.getParagraphCount(o) - 1, d = s.getParagraphLength(o, i), x = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, m = {
                                    secIdx: o,
                                    paraIdx: i,
                                    charOffset: d
                                };
                                h.current = x, b(m), N(x, m), I(!0), w(m);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            e.preventDefault();
                            const a = h.current;
                            if (!a) return;
                            let o = a.paraIdx, i = a.charOffset, d = r.paraIdx, x = r.charOffset;
                            (o > d || o === d && i > x) && ([o, d] = [
                                d,
                                o
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const m = s.copySelection(r.secIdx, o, i, d, x), R = y(m);
                                R?.text && navigator.clipboard.writeText(R.text).catch(()=>{});
                            } catch  {}
                            return;
                        }
                    case "x":
                        {
                            e.preventDefault();
                            const a = h.current;
                            if (!a) return;
                            let o = a.paraIdx, i = a.charOffset, d = r.paraIdx, x = r.charOffset;
                            (o > d || o === d && i > x) && ([o, d] = [
                                d,
                                o
                            ], [i, x] = [
                                x,
                                i
                            ]);
                            try {
                                const m = s.copySelection(r.secIdx, o, i, d, x), R = y(m);
                                R?.text && navigator.clipboard.writeText(R.text).catch(()=>{});
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
                        if (e.preventDefault(), g(), h.current) {
                            const o = B();
                            o && b(o);
                        }
                        const a = j.current;
                        try {
                            const o = s.splitParagraph(a.secIdx, a.paraIdx, a.charOffset), i = y(o), d = {
                                secIdx: a.secIdx,
                                paraIdx: i?.paraIdx ?? a.paraIdx + 1,
                                charOffset: 0
                            };
                            f(d);
                        } catch  {}
                        u();
                        break;
                    }
                case "Backspace":
                    e.preventDefault(), Fe();
                    break;
                case "Delete":
                    e.preventDefault(), ft();
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
                        }), b(a), N(h.current, a), I(!0), w(a)) : f(a);
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
                        e.shiftKey ? (h.current || (h.current = {
                            ...r
                        }), b(a), N(h.current, a), I(!0), w(a)) : f(a);
                        break;
                    }
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const a = k ? k.x : 0;
                        try {
                            const o = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, -1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(o);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), b(d), N(h.current, d), I(!0), w(d)) : f(d);
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
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), b(o), N(h.current, o), I(!0), w(o)) : f(o);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const a = k ? k.x : 0;
                        try {
                            const o = s.moveVertical(r.secIdx, r.paraIdx, r.charOffset, 1, a, 4294967295, 4294967295, 4294967295, 4294967295), i = y(o);
                            if (i) {
                                const d = {
                                    secIdx: i.sectionIndex ?? r.secIdx,
                                    paraIdx: i.paragraphIndex ?? i.paraIdx ?? r.paraIdx,
                                    charOffset: i.charOffset ?? r.charOffset
                                };
                                e.shiftKey ? (h.current || (h.current = {
                                    ...r
                                }), b(d), N(h.current, d), I(!0), w(d)) : f(d);
                            }
                        } catch  {
                            try {
                                const o = s.getParagraphCount(r.secIdx);
                                if (r.paraIdx < o - 1) {
                                    const i = {
                                        ...r,
                                        paraIdx: r.paraIdx + 1
                                    };
                                    i.charOffset = Math.min(r.charOffset, s.getParagraphLength(r.secIdx, i.paraIdx)), e.shiftKey ? (h.current || (h.current = {
                                        ...r
                                    }), b(i), N(h.current, i), I(!0), w(i)) : f(i);
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
                            e.shiftKey ? (h.current || (h.current = {
                                ...r
                            }), b(o), N(h.current, o), I(!0), w(o)) : f(o);
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
                            e.shiftKey ? (h.current || (h.current = {
                                ...r
                            }), b(i), N(h.current, i), I(!0), w(i)) : f(i);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    e.preventDefault(), A("	");
                    break;
                case "Escape":
                    ie(!1), te(!1), re(!1), se(!1), ne(!1), ae(!1), ce(!1), oe(!1);
                    break;
            }
        }, [
            Et,
            k,
            Ee,
            Re,
            De,
            Le,
            Be,
            A,
            B,
            Fe,
            ft,
            g,
            f,
            u,
            N,
            w,
            b
        ]), cr = n.useCallback(()=>{
            ee.current = !0;
        }, []), or = n.useCallback((e)=>{
            ee.current = !1;
            const s = e.data;
            s && A(s), _.current && (_.current.value = "");
        }, [
            A
        ]), ir = n.useCallback((e)=>{
            if (ee.current) return;
            const s = e.target, r = s.value;
            r && (A(r), s.value = "");
        }, [
            A
        ]), lr = n.useCallback((e)=>{
            ue(e.target.value);
        }, []), jt = n.useCallback(()=>{
            const e = parseInt(pe, 10);
            !isNaN(e) && e >= 1 && e <= S ? V(e - 1) : ue(String(U + 1));
        }, [
            pe,
            S,
            U
        ]), hr = n.useCallback(()=>He((e)=>Math.min(e + 10, 200)), []), dr = n.useCallback(()=>He((e)=>Math.max(e - 10, 30)), []);
        n.useEffect(()=>{
            ue(String(U + 1));
        }, [
            U
        ]), n.useEffect(()=>{
            const e = (s)=>{
                const r = s.target, c = (a, o)=>!a.current?.contains(r) && !o.current?.contains(r);
                be && c(Xe, Ye) && te(!1), je && c(Ge, qe) && re(!1), me && c(et, tt) && se(!1), ve && c(rt, st) && ne(!1), Ce && c(nt, at) && ae(!1), ke && c(ct, ot) && ce(!1), Ie && c(lt, it) && oe(!1);
            };
            return document.addEventListener("mousedown", e), ()=>document.removeEventListener("mousedown", e);
        }, [
            be,
            je,
            me,
            ve,
            Ce,
            ke,
            Ie
        ]), n.useEffect(()=>()=>{
                if (p.current) {
                    try {
                        p.current.free();
                    } catch  {}
                    p.current = null;
                }
            }, []), n.useEffect(()=>{
            const e = p.current;
            if (!e || S === 0) return;
            const s = we.current;
            for(let r = 0; r < S; r++){
                const c = fe.current[r];
                if (c) try {
                    e.renderPageToCanvas(r, c, s);
                    const a = c.width / s, o = c.height / s;
                    c.style.width = a + "px", c.style.height = o + "px", Ue.current[r] = {
                        w: a,
                        h: o
                    };
                    const i = ge.current[r];
                    i && (i.width = c.width, i.height = c.height, i.style.width = a + "px", i.style.height = o + "px");
                } catch (a) {
                    console.error("renderPageToCanvas failed for page", r, a);
                }
            }
        }, [
            Te,
            S
        ]), n.useEffect(()=>{
            const e = we.current;
            for(let s = 0; s < S; s++){
                const r = ge.current[s];
                if (!r) continue;
                const c = r.getContext("2d");
                if (!c) continue;
                c.clearRect(0, 0, r.width, r.height);
                const a = Ae.filter((o)=>o.pageIndex === s);
                if (a.length > 0) {
                    c.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const o of a)c.fillRect(o.x * e, o.y * e, o.width * e, o.height * e);
                }
                k && k.pageIndex === s && $e && (c.strokeStyle = "#0046C8", c.lineWidth = Math.max(1.5, 2 * e), c.beginPath(), c.moveTo(k.x * e, k.y * e), c.lineTo(k.x * e, (k.y + k.height) * e), c.stroke());
            }
        }, [
            S,
            k,
            Ae,
            $e,
            Te
        ]), n.useEffect(()=>{
            if (!k) {
                xe(!0);
                return;
            }
            xe(!0);
            const e = setInterval(()=>xe((s)=>!s), 530);
            return ()=>clearInterval(e);
        }, [
            k
        ]);
        const mt = S > 0, Pe = kt(O.textColor), ze = kt(O.highlight), vt = (e, s, r, c)=>t.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    t.jsx("div", {
                        className: "hwp-color-grid",
                        children: jr.map((a, o)=>t.jsx("div", {
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
                t.jsx(gr, {
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
                            _e && t.jsxs("div", {
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
                                        children: _e
                                    }),
                                    t.jsx("button", {
                                        onClick: ()=>F(""),
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
                            $ && !z && t.jsxs("div", {
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
                                            $
                                        ]
                                    })
                                ]
                            }),
                            z && t.jsxs("div", {
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
                            v && !mt && !z && t.jsx("div", {
                                className: `hwp-editor-container${Pt ? " drag-over" : ""}`,
                                onDragOver: pt,
                                onDragLeave: ut,
                                onDrop: xt,
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
                                                    onClick: ht,
                                                    disabled: !v,
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
                                                    onClick: dt,
                                                    disabled: !v,
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
                            mt && t.jsxs("div", {
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
                                                        onClick: ht,
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
                                                        onClick: dt,
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
                                                                ref: nt,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.export"),
                                                                onClick: ()=>ae((e)=>!e),
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
                                                            Ce && t.jsxs("div", {
                                                                ref: at,
                                                                className: "hwp-export-dropdown",
                                                                children: [
                                                                    t.jsx("button", {
                                                                        onClick: ()=>bt("hwp"),
                                                                        children: l("site.hwpEditor.exportHwp")
                                                                    }),
                                                                    t.jsx("button", {
                                                                        onClick: ()=>bt("hwpx"),
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
                                                        onClick: Ee,
                                                        disabled: !Dt,
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
                                                        onClick: Re,
                                                        disabled: !Lt,
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
                                                                ref: Xe,
                                                                className: "hwp-font-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.font"),
                                                                onClick: ()=>te((e)=>!e),
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
                                                            be && t.jsx("div", {
                                                                ref: Ye,
                                                                className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                                                children: wr.map((e)=>t.jsx("button", {
                                                                        style: {
                                                                            fontFamily: e
                                                                        },
                                                                        className: Se === e ? "active" : "",
                                                                        onClick: ()=>Jt(e),
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
                                                                ref: Ge,
                                                                className: "hwp-size-btn hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.fontSize"),
                                                                onClick: ()=>re((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        children: Ve
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
                                                            je && t.jsx("div", {
                                                                ref: qe,
                                                                className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                                                children: yr.map((e)=>t.jsx("button", {
                                                                        className: parseFloat(Ve) === e ? "active" : "",
                                                                        onClick: ()=>Zt(e),
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
                                                        onClick: De,
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: "B"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.italic ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.italic")} (Ctrl+I)`,
                                                        onClick: Le,
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        children: "I"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.underline ? " active" : ""}`,
                                                        title: `${l("site.hwpEditor.underline")} (Ctrl+U)`,
                                                        onClick: Be,
                                                        style: {
                                                            textDecoration: "underline"
                                                        },
                                                        children: "U"
                                                    }),
                                                    t.jsx("button", {
                                                        className: `hwp-toolbar-btn${O.strikethrough ? " active" : ""}`,
                                                        title: l("site.hwpEditor.strikethrough"),
                                                        onClick: Vt,
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
                                                                ref: et,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.textColor"),
                                                                onClick: ()=>se((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            color: Pe,
                                                                            fontSize: "14px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "A"
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
                                                                children: vt(Pe, Ht, Wt, qt)
                                                            })
                                                        ]
                                                    }),
                                                    t.jsxs("div", {
                                                        style: {
                                                            position: "relative"
                                                        },
                                                        children: [
                                                            t.jsxs("button", {
                                                                ref: rt,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.highlight"),
                                                                onClick: ()=>ne((e)=>!e),
                                                                children: [
                                                                    t.jsx("span", {
                                                                        style: {
                                                                            fontWeight: "bold",
                                                                            backgroundColor: ze,
                                                                            padding: "0 2px",
                                                                            fontSize: "13px",
                                                                            lineHeight: 1
                                                                        },
                                                                        children: "H"
                                                                    }),
                                                                    t.jsx("div", {
                                                                        className: "hwp-color-indicator",
                                                                        style: {
                                                                            backgroundColor: ze
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
                                                            ve && t.jsx("div", {
                                                                ref: st,
                                                                style: {
                                                                    position: "absolute",
                                                                    zIndex: 1e3,
                                                                    top: "100%",
                                                                    left: 0
                                                                },
                                                                children: vt(ze, Mt, At, er)
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
                                                        className: `hwp-toolbar-btn${Y.alignment === e ? " active" : ""}`,
                                                        title: s[e],
                                                        onClick: ()=>Qt(e),
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
                                                            ref: ct,
                                                            className: "hwp-toolbar-btn",
                                                            title: l("site.hwpEditor.lineSpacing"),
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
                                                        ke && t.jsx("div", {
                                                            ref: ot,
                                                            className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                                            children: br.map((e)=>t.jsx("button", {
                                                                    className: Y.lineSpacing === e.value ? "active" : "",
                                                                    onClick: ()=>Xt(e.value),
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
                                                        onClick: ()=>gt(-1),
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
                                                        onClick: ()=>gt(1),
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
                                                                ref: lt,
                                                                className: "hwp-toolbar-btn",
                                                                title: l("site.hwpEditor.insertTable"),
                                                                onClick: ()=>oe((e)=>!e),
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
                                                            Ie && t.jsxs("div", {
                                                                ref: it,
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
                                                                                value: Oe,
                                                                                onChange: (e)=>zt(Number(e.target.value))
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
                                                                                value: Ne,
                                                                                onChange: (e)=>Tt(Number(e.target.value))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    t.jsx("button", {
                                                                        className: "hwp-toolbar-btn",
                                                                        style: {
                                                                            width: "100%",
                                                                            justifyContent: "center"
                                                                        },
                                                                        onClick: tr,
                                                                        children: l("site.hwpEditor.insertTable")
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-toolbar-btn",
                                                        title: l("site.hwpEditor.insertImage"),
                                                        onClick: rr,
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
                                                        onClick: sr,
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
                                                    className: `hwp-toolbar-btn${Ze ? " active" : ""}`,
                                                    title: `${l("site.hwpEditor.findReplace")} (Ctrl+F)`,
                                                    onClick: ()=>ie((e)=>!e),
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
                                                    St ? " *" : ""
                                                ]
                                            })
                                        ]
                                    }),
                                    Ze && t.jsxs("div", {
                                        className: "hwp-find-bar",
                                        children: [
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.find"),
                                                value: D,
                                                onChange: (e)=>{
                                                    $t(e.target.value), M("");
                                                },
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && wt();
                                                },
                                                autoFocus: !0
                                            }),
                                            t.jsx("input", {
                                                type: "text",
                                                placeholder: l("site.hwpEditor.replace"),
                                                value: Q,
                                                onChange: (e)=>Ut(e.target.value),
                                                onKeyDown: (e)=>{
                                                    e.key === "Enter" && yt();
                                                }
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: wt,
                                                children: l("site.hwpEditor.findNext")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: yt,
                                                children: l("site.hwpEditor.replaceOne")
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-toolbar-btn",
                                                onClick: nr,
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
                                                        onChange: (e)=>_t(e.target.checked)
                                                    }),
                                                    l("site.hwpEditor.caseSensitive")
                                                ]
                                            }),
                                            Qe && t.jsx("span", {
                                                className: "hwp-find-info",
                                                children: Qe
                                            }),
                                            t.jsx("button", {
                                                className: "hwp-find-close",
                                                onClick: ()=>{
                                                    ie(!1), M("");
                                                },
                                                children: "✕"
                                            })
                                        ]
                                    }),
                                    t.jsx("div", {
                                        className: "hwp-canvas-wrapper",
                                        onClick: ()=>_.current?.focus(),
                                        onDragOver: pt,
                                        onDragLeave: ut,
                                        onDrop: xt,
                                        children: Array.from({
                                            length: S
                                        }, (e, s)=>t.jsxs("div", {
                                                ref: (r)=>{
                                                    Bt.current[s] = r;
                                                },
                                                className: "hwp-canvas",
                                                style: {
                                                    transform: `scale(${X / 100})`,
                                                    transformOrigin: "top center"
                                                },
                                                onClick: (r)=>Kt(r, s),
                                                children: [
                                                    t.jsx("canvas", {
                                                        ref: (r)=>{
                                                            fe.current[s] = r;
                                                        },
                                                        className: "hwp-page-canvas"
                                                    }),
                                                    t.jsx("canvas", {
                                                        ref: (r)=>{
                                                            ge.current[s] = r;
                                                        },
                                                        className: "hwp-overlay-canvas"
                                                    })
                                                ]
                                            }, s))
                                    }),
                                    t.jsx("textarea", {
                                        ref: _,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: cr,
                                        onCompositionEnd: or,
                                        onInput: ir,
                                        onKeyDown: ar,
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
                                                                value: pe,
                                                                onChange: lr,
                                                                onBlur: jt,
                                                                onKeyDown: (e)=>{
                                                                    e.key === "Enter" && jt();
                                                                }
                                                            }),
                                                            " / ",
                                                            S
                                                        ]
                                                    }),
                                                    t.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: U >= S - 1,
                                                        onClick: ()=>V((e)=>Math.min(S - 1, e + 1)),
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
                                                        onClick: dr,
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
                                                        onClick: hr,
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
export { Ir as default, __tla };
