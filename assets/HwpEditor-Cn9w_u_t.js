import { R as pt, r as n, j as e, u as Er, _ as Rr, __tla as __tla_0 } from "./index-BcN9a2gA.js";
import { u as Br, __tla as __tla_1 } from "./useRhwp-CIdgSSeW.js";
import { S as zr } from "./SEOHead-hGQ78IE-.js";
let Ln;
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
    const Mr = [
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
    ], Hr = [
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
    ], Ar = [
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
    ], Lr = [
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
    ], Wr = ({ t: h, onNewDoc: u, onOpenFile: i, onExport: k, canUndo: t, canRedo: l, onUndo: x, onRedo: g, fontInput: C, sizeInput: N, onApplyFont: S, onApplySize: E, charProps: P, onToggleBold: L, onToggleItalic: $, onToggleUnderline: b, onToggleStrikethrough: I, textColorHex: D, highlightHex: v, onApplyTextColor: c, onApplyHighlight: z, paraProps: y, onApplyAlignment: m, onApplyLineSpacing: F, onApplyIndentChange: V, onApplyBulletList: j, onApplyNumberedList: p, onInsertTable: H, tableRows: K, tableCols: A, onSetTableRows: te, onSetTableCols: Y, onConfirmInsertTable: re, onInsertImage: R, onPageBreak: w, onInsertShape: o, onInsertFootnote: f, onEnterHeader: U, onEnterFooter: M, findBarOpen: G, onToggleFindBar: Q, onOpenPageSetup: Z, styleList: se, onLoadStyles: le, onApplyStyle: he, onOpenBookmarks: Ce, showParaMarks: Se, showControlCodes: J, showTransparentBorders: de, onToggleParaMarks: pe, onToggleControlCodes: Fe, onToggleTransparentBorders: Ae, fileName: De, dirty: Le, clipboardHasContent: Ye, onCopy: qe, onCut: Ge, onPaste: Qe, sidebarOpen: B, onToggleSidebar: q, onOpenTableProps: W, onOpenStyleDialog: ge, onOpenHeaderFooterDialog: ee, onOpenFieldDialog: ce, onOpenColumnDialog: ne, onOpenNumberingDialog: ie, onOpenEquationDialog: xe, onOpenFormDialog: Ee, onExportSelectionHtml: Ht, onExportVerify: xt })=>{
        const [Xe, We] = n.useState(!1), [Ze, et] = n.useState(!1), [tt, me] = n.useState(!1), [we, Ne] = n.useState(!1), [rt, Be] = n.useState(!1), [nt, at] = n.useState(!1), [st, lt] = n.useState(!1), [ot, ct] = n.useState(!1), [Ue, ve] = n.useState(!1), [At, je] = n.useState("#000000"), [Ve, Ie] = n.useState("#FFFF00"), ft = n.useRef(null), gt = n.useRef(null), bt = n.useRef(null), mt = n.useRef(null), yt = n.useRef(null), vt = n.useRef(null), Ct = n.useRef(null), it = n.useRef(null), jt = n.useRef(null), It = n.useRef(null), dt = n.useRef(null), wt = n.useRef(null), kt = n.useRef(null), St = n.useRef(null), Nt = n.useRef(null), Ot = n.useRef(null), Pt = n.useRef(null), Rt = n.useRef(null);
        n.useEffect(()=>{
            const _ = (Oe)=>{
                const Pe = Oe.target, ye = (ze, ht)=>!ze.current?.contains(Pe) && !ht.current?.contains(Pe);
                Xe && ye(ft, gt) && We(!1), Ze && ye(bt, mt) && et(!1), tt && ye(yt, vt) && me(!1), we && ye(Ct, it) && Ne(!1), rt && ye(jt, It) && Be(!1), nt && ye(dt, wt) && at(!1), st && ye(kt, St) && lt(!1), ot && ye(Nt, Ot) && ct(!1), Ue && ye(Pt, Rt) && ve(!1);
            };
            return document.addEventListener("mousedown", _), ()=>document.removeEventListener("mousedown", _);
        }, [
            Xe,
            Ze,
            tt,
            we,
            rt,
            nt,
            st,
            ot,
            Ue
        ]);
        const Lt = n.useCallback((_)=>{
            S(_), We(!1);
        }, [
            S
        ]), Wt = n.useCallback((_)=>{
            E(_), et(!1);
        }, [
            E
        ]), Ut = n.useCallback((_)=>{
            c(_), me(!1);
        }, [
            c
        ]), Vt = n.useCallback((_)=>{
            z(_), Ne(!1);
        }, [
            z
        ]), _t = n.useCallback((_)=>{
            F(_), at(!1);
        }, [
            F
        ]), Tt = n.useCallback((_)=>{
            k(_), Be(!1);
        }, [
            k
        ]), Ft = n.useCallback((_)=>{
            he(_), ct(!1);
        }, [
            he
        ]), _e = n.useCallback(()=>{
            re(), lt(!1);
        }, [
            re
        ]), Dt = (_, Oe, Pe, ye)=>e.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    e.jsx("div", {
                        className: "hwp-color-grid",
                        children: Lr.map((ze, ht)=>e.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: ze.map((Me)=>e.jsx("div", {
                                        className: `hwp-color-swatch${_.toUpperCase() === Me.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: Me
                                        },
                                        title: Me,
                                        onClick: ()=>ye(Me)
                                    }, Me))
                            }, ht))
                    }),
                    e.jsxs("div", {
                        className: "hwp-color-custom",
                        children: [
                            e.jsx("input", {
                                type: "color",
                                value: Oe,
                                onChange: (ze)=>Pe(ze.target.value)
                            }),
                            e.jsx("button", {
                                onClick: ()=>ye(Oe),
                                children: "OK"
                            })
                        ]
                    })
                ]
            });
        return e.jsxs("div", {
            className: "hwp-editor-toolbar",
            children: [
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.newDoc"),
                            onClick: u,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("path", {
                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                        fill: "rgba(74,143,231,0.15)"
                                    }),
                                    e.jsx("polyline", {
                                        points: "14 2 14 8 20 8",
                                        fill: "rgba(74,143,231,0.25)"
                                    }),
                                    e.jsx("line", {
                                        x1: "9",
                                        y1: "13",
                                        x2: "15",
                                        y2: "13",
                                        strokeWidth: "1.5"
                                    }),
                                    e.jsx("line", {
                                        x1: "12",
                                        y1: "10",
                                        x2: "12",
                                        y2: "16",
                                        strokeWidth: "1.5"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.openFile"),
                            onClick: i,
                            children: e.jsx("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: e.jsx("path", {
                                    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
                                    fill: "rgba(234,179,8,0.2)"
                                })
                            })
                        }),
                        e.jsxs("div", {
                            className: "hwp-export-wrapper",
                            children: [
                                e.jsxs("button", {
                                    ref: jt,
                                    className: "hwp-toolbar-btn",
                                    title: h("site.hwpEditor.export"),
                                    onClick: ()=>Be((_)=>!_),
                                    children: [
                                        e.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                e.jsx("path", {
                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                                                    fill: "none"
                                                }),
                                                e.jsx("polyline", {
                                                    points: "7 10 12 15 17 10",
                                                    fill: "none"
                                                }),
                                                e.jsx("line", {
                                                    x1: "12",
                                                    y1: "15",
                                                    x2: "12",
                                                    y2: "3"
                                                })
                                            ]
                                        }),
                                        e.jsx("span", {
                                            style: {
                                                fontSize: "10px"
                                            },
                                            children: "▾"
                                        })
                                    ]
                                }),
                                rt && e.jsxs("div", {
                                    ref: It,
                                    className: "hwp-export-dropdown",
                                    children: [
                                        e.jsx("button", {
                                            onClick: ()=>Tt("hwp"),
                                            children: h("site.hwpEditor.exportHwp")
                                        }),
                                        e.jsx("button", {
                                            onClick: ()=>Tt("hwpx"),
                                            children: h("site.hwpEditor.exportHwpx")
                                        }),
                                        e.jsx("div", {
                                            className: "hwp-dropdown-divider"
                                        }),
                                        e.jsx("button", {
                                            onClick: ()=>{
                                                Ht(), Be(!1);
                                            },
                                            children: "HTML (선택 영역)"
                                        }),
                                        e.jsx("button", {
                                            onClick: ()=>{
                                                xt(), Be(!1);
                                            },
                                            children: "문서 검증"
                                        })
                                    ]
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
                            title: `${h("site.hwpEditor.undo")} (Ctrl+Z)`,
                            onClick: x,
                            disabled: !t,
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
                            title: `${h("site.hwpEditor.redo")} (Ctrl+Y)`,
                            onClick: g,
                            disabled: !l,
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
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: "복사 (Ctrl+C)",
                            onClick: qe,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("rect", {
                                        x: "9",
                                        y: "9",
                                        width: "13",
                                        height: "13",
                                        rx: "2",
                                        ry: "2"
                                    }),
                                    e.jsx("path", {
                                        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: "잘라내기 (Ctrl+X)",
                            onClick: Ge,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("circle", {
                                        cx: "6",
                                        cy: "6",
                                        r: "3"
                                    }),
                                    e.jsx("circle", {
                                        cx: "6",
                                        cy: "18",
                                        r: "3"
                                    }),
                                    e.jsx("line", {
                                        x1: "20",
                                        y1: "4",
                                        x2: "8.12",
                                        y2: "15.88"
                                    }),
                                    e.jsx("line", {
                                        x1: "14.47",
                                        y1: "14.48",
                                        x2: "20",
                                        y2: "20"
                                    }),
                                    e.jsx("line", {
                                        x1: "8.12",
                                        y1: "8.12",
                                        x2: "12",
                                        y2: "12"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: "붙여넣기 (Ctrl+V)",
                            onClick: Qe,
                            disabled: !Ye,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("path", {
                                        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                                    }),
                                    e.jsx("rect", {
                                        x: "8",
                                        y: "2",
                                        width: "8",
                                        height: "4",
                                        rx: "1",
                                        ry: "1"
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
                    children: [
                        e.jsxs("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                e.jsxs("button", {
                                    ref: ft,
                                    className: "hwp-font-btn hwp-toolbar-btn",
                                    title: h("site.hwpEditor.font"),
                                    onClick: ()=>We((_)=>!_),
                                    children: [
                                        e.jsx("span", {
                                            style: {
                                                fontFamily: C,
                                                maxWidth: 96,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                display: "inline-block"
                                            },
                                            children: C
                                        }),
                                        e.jsx("span", {
                                            style: {
                                                fontSize: "10px",
                                                marginLeft: 2
                                            },
                                            children: "▾"
                                        })
                                    ]
                                }),
                                Xe && e.jsx("div", {
                                    ref: gt,
                                    className: "hwp-toolbar-dropdown hwp-font-dropdown",
                                    children: Mr.map((_)=>e.jsx("button", {
                                            style: {
                                                fontFamily: _
                                            },
                                            className: C === _ ? "active" : "",
                                            onClick: ()=>Lt(_),
                                            children: _
                                        }, _))
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                e.jsxs("button", {
                                    ref: bt,
                                    className: "hwp-size-btn hwp-toolbar-btn",
                                    title: h("site.hwpEditor.fontSize"),
                                    onClick: ()=>et((_)=>!_),
                                    children: [
                                        e.jsx("span", {
                                            children: N
                                        }),
                                        e.jsx("span", {
                                            style: {
                                                fontSize: "10px",
                                                marginLeft: 2
                                            },
                                            children: "▾"
                                        })
                                    ]
                                }),
                                Ze && e.jsx("div", {
                                    ref: mt,
                                    className: "hwp-toolbar-dropdown hwp-size-dropdown",
                                    children: Hr.map((_)=>e.jsx("button", {
                                            className: parseFloat(N) === _ ? "active" : "",
                                            onClick: ()=>Wt(_),
                                            children: _
                                        }, _))
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
                            className: `hwp-toolbar-btn${P.bold ? " active" : ""}`,
                            title: `${h("site.hwpEditor.bold")} (Ctrl+B)`,
                            onClick: L,
                            style: {
                                fontWeight: "bold"
                            },
                            children: "B"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${P.italic ? " active" : ""}`,
                            title: `${h("site.hwpEditor.italic")} (Ctrl+I)`,
                            onClick: $,
                            style: {
                                fontStyle: "italic"
                            },
                            children: "I"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${P.underline ? " active" : ""}`,
                            title: `${h("site.hwpEditor.underline")} (Ctrl+U)`,
                            onClick: b,
                            style: {
                                textDecoration: "underline"
                            },
                            children: "U"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${P.strikethrough ? " active" : ""}`,
                            title: h("site.hwpEditor.strikethrough"),
                            onClick: I,
                            style: {
                                textDecoration: "line-through"
                            },
                            children: "S"
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsxs("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                e.jsxs("button", {
                                    ref: yt,
                                    className: "hwp-toolbar-btn",
                                    title: h("site.hwpEditor.textColor"),
                                    onClick: ()=>me((_)=>!_),
                                    children: [
                                        e.jsx("span", {
                                            style: {
                                                fontWeight: "bold",
                                                color: D,
                                                fontSize: "14px",
                                                lineHeight: 1
                                            },
                                            children: "A"
                                        }),
                                        e.jsx("div", {
                                            className: "hwp-color-indicator",
                                            style: {
                                                backgroundColor: D
                                            }
                                        }),
                                        e.jsx("span", {
                                            style: {
                                                fontSize: "10px",
                                                marginLeft: 1
                                            },
                                            children: "▾"
                                        })
                                    ]
                                }),
                                tt && e.jsx("div", {
                                    ref: vt,
                                    style: {
                                        position: "absolute",
                                        zIndex: 1e3,
                                        top: "100%",
                                        left: 0
                                    },
                                    children: Dt(D, At, je, Ut)
                                })
                            ]
                        }),
                        e.jsxs("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                e.jsxs("button", {
                                    ref: Ct,
                                    className: "hwp-toolbar-btn",
                                    title: h("site.hwpEditor.highlight"),
                                    onClick: ()=>Ne((_)=>!_),
                                    children: [
                                        e.jsx("span", {
                                            style: {
                                                fontWeight: "bold",
                                                backgroundColor: v,
                                                padding: "0 2px",
                                                fontSize: "13px",
                                                lineHeight: 1
                                            },
                                            children: "H"
                                        }),
                                        e.jsx("div", {
                                            className: "hwp-color-indicator",
                                            style: {
                                                backgroundColor: v
                                            }
                                        }),
                                        e.jsx("span", {
                                            style: {
                                                fontSize: "10px",
                                                marginLeft: 1
                                            },
                                            children: "▾"
                                        })
                                    ]
                                }),
                                we && e.jsx("div", {
                                    ref: it,
                                    style: {
                                        position: "absolute",
                                        zIndex: 1e3,
                                        top: "100%",
                                        left: 0
                                    },
                                    children: Dt(v, Ve, Ie, Vt)
                                })
                            ]
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        "left",
                        "center",
                        "right",
                        "justify"
                    ].map((_)=>{
                        const Oe = {
                            left: h("site.hwpEditor.alignLeft"),
                            center: h("site.hwpEditor.alignCenter"),
                            right: h("site.hwpEditor.alignRight"),
                            justify: h("site.hwpEditor.alignJustify")
                        }, Pe = {
                            left: e.jsxs("svg", {
                                viewBox: "0 0 16 16",
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                children: [
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "1",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "5",
                                        width: "11",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "9",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "13",
                                        width: "9",
                                        height: "1.5",
                                        rx: "0.75"
                                    })
                                ]
                            }),
                            center: e.jsxs("svg", {
                                viewBox: "0 0 16 16",
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                children: [
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "1",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "2.5",
                                        y: "5",
                                        width: "11",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "9",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "3.5",
                                        y: "13",
                                        width: "9",
                                        height: "1.5",
                                        rx: "0.75"
                                    })
                                ]
                            }),
                            right: e.jsxs("svg", {
                                viewBox: "0 0 16 16",
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                children: [
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "1",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "5",
                                        y: "5",
                                        width: "11",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "9",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "7",
                                        y: "13",
                                        width: "9",
                                        height: "1.5",
                                        rx: "0.75"
                                    })
                                ]
                            }),
                            justify: e.jsxs("svg", {
                                viewBox: "0 0 16 16",
                                width: "15",
                                height: "15",
                                fill: "currentColor",
                                children: [
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "1",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "5",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "9",
                                        width: "16",
                                        height: "2",
                                        rx: "1"
                                    }),
                                    e.jsx("rect", {
                                        x: "0",
                                        y: "13",
                                        width: "16",
                                        height: "1.5",
                                        rx: "0.75"
                                    })
                                ]
                            })
                        };
                        return e.jsx("button", {
                            className: `hwp-toolbar-btn${y.alignment === _ ? " active" : ""}`,
                            title: Oe[_],
                            onClick: ()=>m(_),
                            children: Pe[_]
                        }, _);
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsxs("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            e.jsxs("button", {
                                ref: dt,
                                className: "hwp-toolbar-btn",
                                title: h("site.hwpEditor.lineSpacing"),
                                onClick: ()=>at((_)=>!_),
                                children: [
                                    e.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                            e.jsx("line", {
                                                x1: "8",
                                                y1: "6",
                                                x2: "21",
                                                y2: "6"
                                            }),
                                            e.jsx("line", {
                                                x1: "8",
                                                y1: "12",
                                                x2: "21",
                                                y2: "12"
                                            }),
                                            e.jsx("line", {
                                                x1: "8",
                                                y1: "18",
                                                x2: "21",
                                                y2: "18"
                                            }),
                                            e.jsx("polyline", {
                                                points: "3 8 3 3 3 8"
                                            }),
                                            e.jsx("polyline", {
                                                points: "3 3 1 5 3 3 5 5"
                                            }),
                                            e.jsx("polyline", {
                                                points: "3 16 3 21 3 16"
                                            }),
                                            e.jsx("polyline", {
                                                points: "3 21 1 19 3 21 5 19"
                                            })
                                        ]
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "10px",
                                            marginLeft: 2
                                        },
                                        children: "▾"
                                    })
                                ]
                            }),
                            nt && e.jsx("div", {
                                ref: wt,
                                className: "hwp-toolbar-dropdown hwp-spacing-dropdown",
                                children: Ar.map((_)=>e.jsx("button", {
                                        className: y.lineSpacing === _.value ? "active" : "",
                                        onClick: ()=>_t(_.value),
                                        children: _.label
                                    }, _.value))
                            })
                        ]
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.outdent"),
                            onClick: ()=>V(-1),
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
                                    }),
                                    e.jsx("polyline", {
                                        points: "11 8 7 10 11 12"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.indent"),
                            onClick: ()=>V(1),
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
                                    }),
                                    e.jsx("polyline", {
                                        points: "3 8 7 10 3 12"
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
                    children: [
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.bulletList"),
                            onClick: j,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("line", {
                                        x1: "9",
                                        y1: "6",
                                        x2: "20",
                                        y2: "6"
                                    }),
                                    e.jsx("line", {
                                        x1: "9",
                                        y1: "12",
                                        x2: "20",
                                        y2: "12"
                                    }),
                                    e.jsx("line", {
                                        x1: "9",
                                        y1: "18",
                                        x2: "20",
                                        y2: "18"
                                    }),
                                    e.jsx("circle", {
                                        cx: "4",
                                        cy: "6",
                                        r: "1.5",
                                        fill: "currentColor",
                                        stroke: "none"
                                    }),
                                    e.jsx("circle", {
                                        cx: "4",
                                        cy: "12",
                                        r: "1.5",
                                        fill: "currentColor",
                                        stroke: "none"
                                    }),
                                    e.jsx("circle", {
                                        cx: "4",
                                        cy: "18",
                                        r: "1.5",
                                        fill: "currentColor",
                                        stroke: "none"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.numberedList"),
                            onClick: p,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("line", {
                                        x1: "10",
                                        y1: "6",
                                        x2: "21",
                                        y2: "6"
                                    }),
                                    e.jsx("line", {
                                        x1: "10",
                                        y1: "12",
                                        x2: "21",
                                        y2: "12"
                                    }),
                                    e.jsx("line", {
                                        x1: "10",
                                        y1: "18",
                                        x2: "21",
                                        y2: "18"
                                    }),
                                    e.jsx("text", {
                                        x: "1",
                                        y: "8",
                                        fill: "currentColor",
                                        stroke: "none",
                                        fontSize: "8",
                                        fontFamily: "sans-serif",
                                        children: "1"
                                    }),
                                    e.jsx("text", {
                                        x: "1",
                                        y: "14",
                                        fill: "currentColor",
                                        stroke: "none",
                                        fontSize: "8",
                                        fontFamily: "sans-serif",
                                        children: "2"
                                    }),
                                    e.jsx("text", {
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
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsxs("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                e.jsx("button", {
                                    ref: kt,
                                    className: "hwp-toolbar-btn",
                                    title: h("site.hwpEditor.insertTable"),
                                    onClick: ()=>lt((_)=>!_),
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
                                                rx: "2"
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
                                st && e.jsxs("div", {
                                    ref: St,
                                    className: "hwp-table-dialog",
                                    children: [
                                        e.jsxs("div", {
                                            className: "hwp-table-dialog-row",
                                            children: [
                                                e.jsx("label", {
                                                    children: "행 (Rows)"
                                                }),
                                                e.jsx("input", {
                                                    type: "number",
                                                    min: 1,
                                                    max: 50,
                                                    value: K,
                                                    onChange: (_)=>te(Number(_.target.value))
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "hwp-table-dialog-row",
                                            children: [
                                                e.jsx("label", {
                                                    children: "열 (Cols)"
                                                }),
                                                e.jsx("input", {
                                                    type: "number",
                                                    min: 1,
                                                    max: 20,
                                                    value: A,
                                                    onChange: (_)=>Y(Number(_.target.value))
                                                })
                                            ]
                                        }),
                                        e.jsx("button", {
                                            className: "hwp-toolbar-btn",
                                            style: {
                                                width: "100%",
                                                justifyContent: "center"
                                            },
                                            onClick: _e,
                                            children: h("site.hwpEditor.insertTable")
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.insertImage"),
                            onClick: R,
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
                                        rx: "2"
                                    }),
                                    e.jsx("circle", {
                                        cx: "8.5",
                                        cy: "8.5",
                                        r: "1.5"
                                    }),
                                    e.jsx("polyline", {
                                        points: "21 15 16 10 5 21"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.pageBreak"),
                            onClick: w,
                            children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                    e.jsx("line", {
                                        x1: "3",
                                        y1: "12",
                                        x2: "21",
                                        y2: "12",
                                        strokeDasharray: "4 2"
                                    }),
                                    e.jsx("path", {
                                        d: "M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsx("button", {
                        className: `hwp-toolbar-btn${G ? " active" : ""}`,
                        title: `${h("site.hwpEditor.findReplace")} (Ctrl+F)`,
                        onClick: Q,
                        children: e.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                e.jsx("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8"
                                }),
                                e.jsx("line", {
                                    x1: "21",
                                    y1: "21",
                                    x2: "16.65",
                                    y2: "16.65"
                                })
                            ]
                        })
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsx("button", {
                        className: "hwp-toolbar-btn",
                        title: "페이지 설정",
                        onClick: Z,
                        children: e.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                e.jsx("rect", {
                                    x: "5",
                                    y: "2",
                                    width: "14",
                                    height: "20",
                                    rx: "1"
                                }),
                                e.jsx("line", {
                                    x1: "8",
                                    y1: "6",
                                    x2: "16",
                                    y2: "6"
                                }),
                                e.jsx("line", {
                                    x1: "8",
                                    y1: "18",
                                    x2: "16",
                                    y2: "18"
                                })
                            ]
                        })
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsxs("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            e.jsxs("button", {
                                ref: Nt,
                                className: "hwp-toolbar-btn",
                                title: "스타일",
                                onClick: ()=>{
                                    le(), ct((_)=>!_);
                                },
                                children: [
                                    e.jsx("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: e.jsx("path", {
                                            d: "M4 7h16M4 12h10M4 17h14"
                                        })
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.7rem"
                                        },
                                        children: "스타일"
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "10px",
                                            marginLeft: 1
                                        },
                                        children: "▾"
                                    })
                                ]
                            }),
                            ot && e.jsxs("div", {
                                ref: Ot,
                                className: "hwp-toolbar-dropdown hwp-style-dropdown",
                                children: [
                                    se.length === 0 && e.jsx("div", {
                                        style: {
                                            padding: 10,
                                            fontSize: "0.82rem",
                                            color: "var(--text-secondary)"
                                        },
                                        children: "스타일 없음"
                                    }),
                                    se.map((_)=>e.jsx("button", {
                                            onClick: ()=>Ft(_.id),
                                            children: _.name
                                        }, _.id))
                                ]
                            })
                        ]
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: "머리말",
                            onClick: U,
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
                                        rx: "2"
                                    }),
                                    e.jsx("line", {
                                        x1: "3",
                                        y1: "9",
                                        x2: "21",
                                        y2: "9"
                                    }),
                                    e.jsx("line", {
                                        x1: "8",
                                        y1: "6",
                                        x2: "16",
                                        y2: "6"
                                    })
                                ]
                            })
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: "꼬리말",
                            onClick: M,
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
                                        rx: "2"
                                    }),
                                    e.jsx("line", {
                                        x1: "3",
                                        y1: "15",
                                        x2: "21",
                                        y2: "15"
                                    }),
                                    e.jsx("line", {
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
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsx("button", {
                        className: "hwp-toolbar-btn",
                        title: "각주 삽입",
                        onClick: f,
                        children: e.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                                e.jsx("path", {
                                    d: "M4 20h16M12 4v12"
                                }),
                                e.jsx("text", {
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
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsx("button", {
                        className: "hwp-toolbar-btn",
                        title: "글상자 삽입",
                        onClick: o,
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
                                    rx: "2"
                                }),
                                e.jsx("text", {
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
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsx("button", {
                        className: "hwp-toolbar-btn",
                        title: "북마크",
                        onClick: Ce,
                        children: e.jsx("svg", {
                            viewBox: "0 0 24 24",
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: e.jsx("path", {
                                d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                            })
                        })
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsxs("div", {
                    className: "hwp-toolbar-group",
                    children: [
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${Se ? " active" : ""}`,
                            title: "조판부호 표시",
                            onClick: pe,
                            children: e.jsx("span", {
                                style: {
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                    fontWeight: "bold"
                                },
                                children: "¶"
                            })
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${J ? " active" : ""}`,
                            title: "제어코드 표시",
                            onClick: Fe,
                            children: e.jsx("span", {
                                style: {
                                    fontFamily: "monospace",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                },
                                children: "§"
                            })
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${de ? " active" : ""}`,
                            title: "투명 테두리 표시",
                            onClick: Ae,
                            children: e.jsx("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeDasharray: "3 2",
                                children: e.jsx("rect", {
                                    x: "3",
                                    y: "3",
                                    width: "18",
                                    height: "18",
                                    rx: "1"
                                })
                            })
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-divider"
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-group",
                    children: e.jsxs("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            e.jsxs("button", {
                                ref: Pt,
                                className: `hwp-toolbar-btn${Ue ? " active" : ""}`,
                                title: "더 보기",
                                onClick: ()=>ve((_)=>!_),
                                children: [
                                    e.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        stroke: "none",
                                        children: [
                                            e.jsx("circle", {
                                                cx: "5",
                                                cy: "12",
                                                r: "2"
                                            }),
                                            e.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "2"
                                            }),
                                            e.jsx("circle", {
                                                cx: "19",
                                                cy: "12",
                                                r: "2"
                                            })
                                        ]
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.7rem",
                                            marginLeft: 2
                                        },
                                        children: "더 보기"
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "10px",
                                            marginLeft: 1
                                        },
                                        children: "▾"
                                    })
                                ]
                            }),
                            Ue && e.jsxs("div", {
                                ref: Rt,
                                className: "hwp-toolbar-dropdown hwp-more-dropdown",
                                children: [
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            W(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "3",
                                                        y1: "9",
                                                        x2: "21",
                                                        y2: "9"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "9",
                                                        y1: "3",
                                                        x2: "9",
                                                        y2: "21"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "표 속성"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            ne(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "12",
                                                        y1: "3",
                                                        x2: "12",
                                                        y2: "21"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "다단 설정"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            ie(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("line", {
                                                        x1: "10",
                                                        y1: "6",
                                                        x2: "21",
                                                        y2: "6"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "10",
                                                        y1: "12",
                                                        x2: "21",
                                                        y2: "12"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "10",
                                                        y1: "18",
                                                        x2: "21",
                                                        y2: "18"
                                                    }),
                                                    e.jsx("text", {
                                                        x: "2",
                                                        y: "8",
                                                        fontSize: "7",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        children: "1."
                                                    }),
                                                    e.jsx("text", {
                                                        x: "2",
                                                        y: "14",
                                                        fontSize: "7",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        children: "2."
                                                    }),
                                                    e.jsx("text", {
                                                        x: "2",
                                                        y: "20",
                                                        fontSize: "7",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        children: "3."
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "문단 번호"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            xe(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("text", {
                                                        x: "2",
                                                        y: "17",
                                                        fontSize: "14",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        fontStyle: "italic",
                                                        fontFamily: "serif",
                                                        children: "f"
                                                    }),
                                                    e.jsx("text", {
                                                        x: "10",
                                                        y: "14",
                                                        fontSize: "10",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        children: "(x)"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "수식"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            ce(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("path", {
                                                        d: "M7 8l-4 4 4 4"
                                                    }),
                                                    e.jsx("path", {
                                                        d: "M17 8l4 4-4 4"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "14",
                                                        y1: "4",
                                                        x2: "10",
                                                        y2: "20"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "필드"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            Ee(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "7",
                                                        y1: "8",
                                                        x2: "17",
                                                        y2: "8"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "7",
                                                        y1: "12",
                                                        x2: "17",
                                                        y2: "12"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "7",
                                                        y1: "16",
                                                        x2: "13",
                                                        y2: "16"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "양식"
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        className: "hwp-dropdown-divider"
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            ee(), ve(!1);
                                        },
                                        children: [
                                            e.jsxs("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    e.jsx("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "3",
                                                        y1: "8",
                                                        x2: "21",
                                                        y2: "8"
                                                    }),
                                                    e.jsx("line", {
                                                        x1: "3",
                                                        y1: "16",
                                                        x2: "21",
                                                        y2: "16"
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                children: "머리말/꼬리말 관리"
                                            })
                                        ]
                                    }),
                                    e.jsxs("button", {
                                        onClick: ()=>{
                                            ge(), ve(!1);
                                        },
                                        children: [
                                            e.jsx("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: e.jsx("path", {
                                                    d: "M4 7h16M4 12h10M4 17h14"
                                                })
                                            }),
                                            e.jsx("span", {
                                                children: "스타일 관리"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                e.jsx("div", {
                    className: "hwp-toolbar-spacer"
                }),
                De && e.jsxs("span", {
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
                        De,
                        Le ? " *" : ""
                    ]
                }),
                e.jsx("button", {
                    className: `hwp-toolbar-btn${B ? " active" : ""}`,
                    title: B ? "사이드바 닫기" : "사이드바 열기",
                    onClick: q,
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
                                rx: "2"
                            }),
                            e.jsx("line", {
                                x1: "15",
                                y1: "3",
                                x2: "15",
                                y2: "21"
                            }),
                            e.jsx("line", {
                                x1: "17",
                                y1: "8",
                                x2: "20",
                                y2: "8"
                            }),
                            e.jsx("line", {
                                x1: "17",
                                y1: "12",
                                x2: "20",
                                y2: "12"
                            }),
                            e.jsx("line", {
                                x1: "17",
                                y1: "16",
                                x2: "20",
                                y2: "16"
                            })
                        ]
                    })
                })
            ]
        });
    }, Ur = pt.memo(Wr), Vr = ({ pageCount: h, currentPage: u, zoom: i, renderVer: k, pageCanvasRefs: t, overlayCanvasRefs: l, canvasRefs: x, cursorRect: g, cursorVisible: C, selRects: N, renderScaleRef: S, onCanvasMouseDown: E, onCanvasMouseMove: P, onCanvasMouseUp: L, onContextMenu: $, onDoubleClick: b, isDragging: I, onDragOver: D, onDragLeave: v, onDrop: c, onFocusInput: z })=>(n.useEffect(()=>{
            const y = S.current;
            for(let m = 0; m < h; m++){
                const F = l.current[m];
                if (!F) continue;
                const V = F.getContext("2d");
                if (!V) continue;
                V.clearRect(0, 0, F.width, F.height);
                const j = N.filter((p)=>p.pageIndex === m);
                if (j.length > 0) {
                    V.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const p of j)V.fillRect(p.x * y, p.y * y, p.width * y, p.height * y);
                }
                g && g.pageIndex === m && C && (V.strokeStyle = "#0046C8", V.lineWidth = Math.max(1.5, 2 * y), V.beginPath(), V.moveTo(g.x * y, g.y * y), V.lineTo(g.x * y, (g.y + g.height) * y), V.stroke());
            }
        }, [
            h,
            g,
            N,
            C,
            k
        ]), e.jsx("div", {
            className: "hwp-canvas-wrapper",
            onClick: z,
            onDragOver: D,
            onDragLeave: v,
            onDrop: c,
            children: Array.from({
                length: h
            }, (y, m)=>e.jsxs("div", {
                    ref: (F)=>{
                        x.current[m] = F;
                    },
                    className: "hwp-canvas",
                    style: {
                        transform: `scale(${i / 100})`,
                        transformOrigin: "top center"
                    },
                    onMouseDown: (F)=>E(F, m),
                    onMouseMove: (F)=>P(F, m),
                    onMouseUp: (F)=>L(F, m),
                    onContextMenu: (F)=>$(F, m),
                    onDoubleClick: (F)=>b(F, m),
                    children: [
                        e.jsx("canvas", {
                            ref: (F)=>{
                                t.current[m] = F;
                            },
                            className: "hwp-page-canvas"
                        }),
                        e.jsx("canvas", {
                            ref: (F)=>{
                                l.current[m] = F;
                            },
                            className: "hwp-overlay-canvas"
                        })
                    ]
                }, m))
        })), _r = pt.memo(Vr), $r = ({ t: h, findQuery: u, replaceQuery: i, caseSensitive: k, findInfo: t, onFindQueryChange: l, onReplaceQueryChange: x, onCaseSensitiveChange: g, onFindNext: C, onReplaceOne: N, onReplaceAll: S, onClose: E })=>e.jsxs("div", {
            className: "hwp-find-bar",
            children: [
                e.jsx("input", {
                    type: "text",
                    placeholder: h("site.hwpEditor.find"),
                    value: u,
                    onChange: (P)=>{
                        l(P.target.value);
                    },
                    onKeyDown: (P)=>{
                        P.key === "Enter" && C();
                    },
                    autoFocus: !0
                }),
                e.jsx("input", {
                    type: "text",
                    placeholder: h("site.hwpEditor.replace"),
                    value: i,
                    onChange: (P)=>x(P.target.value),
                    onKeyDown: (P)=>{
                        P.key === "Enter" && N();
                    }
                }),
                e.jsx("button", {
                    className: "hwp-toolbar-btn",
                    onClick: C,
                    children: h("site.hwpEditor.findNext")
                }),
                e.jsx("button", {
                    className: "hwp-toolbar-btn",
                    onClick: N,
                    children: h("site.hwpEditor.replaceOne")
                }),
                e.jsx("button", {
                    className: "hwp-toolbar-btn",
                    onClick: S,
                    children: h("site.hwpEditor.replaceAllBtn")
                }),
                e.jsxs("label", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "13px",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        e.jsx("input", {
                            type: "checkbox",
                            checked: k,
                            onChange: (P)=>g(P.target.checked)
                        }),
                        h("site.hwpEditor.caseSensitive")
                    ]
                }),
                t && e.jsx("span", {
                    className: "hwp-find-info",
                    children: t
                }),
                e.jsx("button", {
                    className: "hwp-find-close",
                    onClick: E,
                    children: "✕"
                })
            ]
        }), Jr = pt.memo($r), Kr = ({ menu: h, onClose: u, onUndo: i, onRedo: k, onCopy: t, onCut: l, onPaste: x, onEnterCell: g, onInsertRowBefore: C, onInsertRowAfter: N, onDeleteRow: S, onInsertColBefore: E, onInsertColAfter: P, onDeleteCol: L, onMergeCells: $, onSplitCell: b, onTableProps: I, onTableFormula: D, onDeleteTable: v, onShapeProps: c, onDeleteShape: z, onPictureProps: y, onDeletePicture: m, onDownloadImage: F, onZOrderFront: V, onZOrderBack: j, onZOrderForward: p, onZOrderBackward: H, onGroupShapes: K, onUngroupShape: A, onFieldProps: te, onRemoveField: Y, onFindNextControl: re, onFindPrevControl: R })=>{
        const w = n.useRef(null);
        n.useEffect(()=>{
            const le = (he)=>{
                w.current && !w.current.contains(he.target) && u();
            };
            return document.addEventListener("mousedown", le), ()=>document.removeEventListener("mousedown", le);
        }, [
            u
        ]), n.useEffect(()=>{
            const le = (he)=>{
                he.key === "Escape" && u();
            };
            return document.addEventListener("keydown", le), ()=>document.removeEventListener("keydown", le);
        }, [
            u
        ]);
        const o = (le, he)=>e.jsx("button", {
                onClick: ()=>{
                    he(), u();
                },
                children: le
            }), f = e.jsx("div", {
            className: "hwp-ctx-divider"
        }), U = e.jsxs(e.Fragment, {
            children: [
                o("맨 앞으로", V),
                o("맨 뒤로", j),
                o("앞으로", p),
                o("뒤로", H)
            ]
        }), M = ()=>e.jsxs(e.Fragment, {
                children: [
                    o("실행 취소", i),
                    o("다시 실행", k),
                    f,
                    o("복사 (Ctrl+C)", t),
                    o("잘라내기 (Ctrl+X)", l),
                    o("붙여넣기 (Ctrl+V)", x)
                ]
            }), G = ()=>e.jsxs(e.Fragment, {
                children: [
                    o("셀 편집", g),
                    f,
                    o("위에 행 삽입", C),
                    o("아래에 행 삽입", N),
                    o("행 삭제", S),
                    f,
                    o("왼쪽에 열 삽입", E),
                    o("오른쪽에 열 삽입", P),
                    o("열 삭제", L),
                    f,
                    o("셀 병합", $),
                    o("셀 분할", b),
                    f,
                    o("표 속성", I),
                    o("표 계산식", D),
                    o("표 삭제", v)
                ]
            }), Q = ()=>e.jsxs(e.Fragment, {
                children: [
                    o("개체 속성", c),
                    f,
                    U,
                    f,
                    o("그룹", K),
                    o("그룹 해제", A),
                    f,
                    o("개체 삭제", z)
                ]
            }), Z = ()=>e.jsxs(e.Fragment, {
                children: [
                    o("그림 속성", y),
                    o("이미지 다운로드", F),
                    f,
                    U,
                    f,
                    o("그림 삭제", m)
                ]
            }), se = ()=>{
            switch(h.type){
                case "table":
                    return G();
                case "shape":
                    return Q();
                case "picture":
                case "image":
                    return Z();
                default:
                    return M();
            }
        };
        return e.jsx("div", {
            ref: w,
            className: "hwp-context-menu",
            style: {
                position: "fixed",
                left: h.x,
                top: h.y,
                zIndex: 9999
            },
            children: se()
        });
    }, Yr = pt.memo(Kr);
    function Et(h) {
        const u = h & 255, i = h >> 8 & 255, k = h >> 16 & 255;
        return "#" + [
            u,
            i,
            k
        ].map((t)=>t.toString(16).padStart(2, "0")).join("");
    }
    const qr = {
        left: "Left",
        center: "Center",
        right: "Right",
        justify: "Justify",
        distribute: "Distribute"
    }, Gr = {
        top: "Top",
        middle: "Middle",
        bottom: "Bottom"
    };
    function Bt({ title: h, defaultExpanded: u = !0, children: i }) {
        const [k, t] = n.useState(u), l = n.useCallback(()=>t((x)=>!x), []);
        return e.jsxs("div", {
            className: "hwp-sidebar-section",
            children: [
                e.jsxs("button", {
                    className: "hwp-sidebar-section-header",
                    onClick: l,
                    type: "button",
                    children: [
                        e.jsx("span", {
                            children: h
                        }),
                        e.jsx("span", {
                            children: k ? "▾" : "▸"
                        })
                    ]
                }),
                k && e.jsx("div", {
                    className: "hwp-sidebar-section-body",
                    children: i
                })
            ]
        });
    }
    function Qr({ isOpen: h, onClose: u, t: i, editMode: k, cursor: t, charProps: l, paraProps: x, currentPage: g, pageCount: C, currentStyleName: N, styleList: S, onApplyStyle: E, cellProps: P, onUpdateCellProps: L, documentInfo: $, fieldInfo: b }) {
        const [I, D] = n.useState(P);
        n.useEffect(()=>{
            D(P);
        }, [
            P
        ]);
        const v = n.useCallback((m, F)=>{
            D((V)=>V && {
                    ...V,
                    [m]: F
                });
        }, []), c = n.useCallback(()=>{
            I && L(I);
        }, [
            I,
            L
        ]), z = n.useCallback((m)=>{
            const F = Number(m.target.value);
            Number.isNaN(F) || E(F);
        }, [
            E
        ]), y = ()=>{
            switch(k){
                case "body":
                    return i("editMode.body") || "본문";
                case "cell":
                    return i("editMode.cell") || "셀";
                case "header":
                    return i("editMode.header") || "머리말";
                case "footer":
                    return i("editMode.footer") || "꼬리말";
                case "footnote":
                    return i("editMode.footnote") || "각주";
                default:
                    return k;
            }
        };
        return e.jsxs("div", {
            className: `hwp-editor-sidebar ${h ? "open" : ""}`,
            children: [
                e.jsxs("div", {
                    className: "hwp-sidebar-header",
                    children: [
                        e.jsx("h4", {
                            children: i("sidebar.title") || "속성"
                        }),
                        e.jsx("button", {
                            className: "hwp-sidebar-close",
                            onClick: u,
                            type: "button",
                            children: "×"
                        })
                    ]
                }),
                e.jsxs("div", {
                    className: "hwp-sidebar-content",
                    children: [
                        e.jsxs(Bt, {
                            title: i("sidebar.documentInfo") || "문서 정보",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.page") || "페이지"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                g,
                                                " / ",
                                                C
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.editMode") || "편집 모드"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value",
                                            children: y()
                                        })
                                    ]
                                }),
                                t && e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.cursor") || "커서"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                "S",
                                                t.secIdx + 1,
                                                " P",
                                                t.paraIdx + 1,
                                                " C",
                                                t.charOffset
                                            ]
                                        })
                                    ]
                                }),
                                $ && e.jsxs(e.Fragment, {
                                    children: [
                                        e.jsxs("div", {
                                            className: "hwp-sidebar-row",
                                            children: [
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-label",
                                                    children: i("sidebar.sections") || "구역 수"
                                                }),
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-value",
                                                    children: $.sectionCount
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "hwp-sidebar-row",
                                            children: [
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-label",
                                                    children: i("sidebar.paragraphs") || "문단 수"
                                                }),
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-value",
                                                    children: $.totalParagraphs.toLocaleString()
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "hwp-sidebar-row",
                                            children: [
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-label",
                                                    children: i("sidebar.chars") || "글자 수"
                                                }),
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-value",
                                                    children: $.totalChars.toLocaleString()
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsxs(Bt, {
                            title: i("sidebar.charProps") || "글자 속성",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.font") || "글꼴"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value hwp-sidebar-value--ellipsis",
                                            children: l.fontFamily
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.fontSize") || "크기"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                (l.fontSize / 100).toFixed(1),
                                                "pt"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.style") || "스타일"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value hwp-sidebar-char-styles",
                                            children: [
                                                l.bold && e.jsx("span", {
                                                    className: "hwp-char-indicator hwp-char-bold",
                                                    title: "Bold",
                                                    children: "B"
                                                }),
                                                l.italic && e.jsx("span", {
                                                    className: "hwp-char-indicator hwp-char-italic",
                                                    title: "Italic",
                                                    children: "I"
                                                }),
                                                l.underline && e.jsx("span", {
                                                    className: "hwp-char-indicator hwp-char-underline",
                                                    title: "Underline",
                                                    children: "U"
                                                }),
                                                l.strikethrough && e.jsx("span", {
                                                    className: "hwp-char-indicator hwp-char-strike",
                                                    title: "Strikethrough",
                                                    children: "S"
                                                }),
                                                !l.bold && !l.italic && !l.underline && !l.strikethrough && e.jsx("span", {
                                                    className: "hwp-char-indicator hwp-char-none",
                                                    children: i("sidebar.none") || "없음"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.textColor") || "글자색"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-color-swatch",
                                                    style: {
                                                        backgroundColor: Et(l.textColor)
                                                    },
                                                    title: Et(l.textColor)
                                                }),
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-color-hex",
                                                    children: Et(l.textColor)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.highlight") || "강조색"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-color-swatch",
                                                    style: {
                                                        backgroundColor: Et(l.highlight)
                                                    },
                                                    title: Et(l.highlight)
                                                }),
                                                e.jsx("span", {
                                                    className: "hwp-sidebar-color-hex",
                                                    children: Et(l.highlight)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsxs(Bt, {
                            title: i("sidebar.paraProps") || "문단 속성",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.alignment") || "정렬"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value",
                                            children: qr[x.alignment] || x.alignment
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.lineSpacing") || "줄 간격"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                x.lineSpacing,
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.marginLeft") || "왼쪽 여백"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                x.marginLeft,
                                                " HWPUNIT"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.marginRight") || "오른쪽 여백"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                x.marginRight,
                                                " HWPUNIT"
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.indent") || "들여쓰기"
                                        }),
                                        e.jsxs("span", {
                                            className: "hwp-sidebar-value",
                                            children: [
                                                x.indent,
                                                " HWPUNIT"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsxs(Bt, {
                            title: i("sidebar.styleSection") || "스타일",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.currentStyle") || "현재"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value hwp-sidebar-value--ellipsis",
                                            children: N || i("sidebar.noStyle") || "(없음)"
                                        })
                                    ]
                                }),
                                S.length > 0 && e.jsx("div", {
                                    className: "hwp-sidebar-row hwp-sidebar-row--full",
                                    children: e.jsxs("select", {
                                        className: "hwp-sidebar-select",
                                        value: "",
                                        onChange: z,
                                        "aria-label": i("sidebar.applyStyle") || "스타일 적용",
                                        children: [
                                            e.jsx("option", {
                                                value: "",
                                                disabled: !0,
                                                children: i("sidebar.selectStyle") || "스타일 선택..."
                                            }),
                                            S.map((m)=>e.jsxs("option", {
                                                    value: m.id,
                                                    children: [
                                                        m.name,
                                                        " (",
                                                        m.type,
                                                        ")"
                                                    ]
                                                }, m.id))
                                        ]
                                    })
                                })
                            ]
                        }),
                        k === "cell" && I && e.jsxs(Bt, {
                            title: i("sidebar.cellProps") || "셀 속성",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.paddingTop") || "위 여백"
                                        }),
                                        e.jsx("input", {
                                            type: "number",
                                            className: "hwp-sidebar-input",
                                            value: I.paddingTop,
                                            onChange: (m)=>v("paddingTop", Number(m.target.value)),
                                            min: 0
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.paddingBottom") || "아래 여백"
                                        }),
                                        e.jsx("input", {
                                            type: "number",
                                            className: "hwp-sidebar-input",
                                            value: I.paddingBottom,
                                            onChange: (m)=>v("paddingBottom", Number(m.target.value)),
                                            min: 0
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.paddingLeft") || "왼쪽 여백"
                                        }),
                                        e.jsx("input", {
                                            type: "number",
                                            className: "hwp-sidebar-input",
                                            value: I.paddingLeft,
                                            onChange: (m)=>v("paddingLeft", Number(m.target.value)),
                                            min: 0
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.paddingRight") || "오른쪽 여백"
                                        }),
                                        e.jsx("input", {
                                            type: "number",
                                            className: "hwp-sidebar-input",
                                            value: I.paddingRight,
                                            onChange: (m)=>v("paddingRight", Number(m.target.value)),
                                            min: 0
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.verticalAlign") || "세로 정렬"
                                        }),
                                        e.jsx("select", {
                                            className: "hwp-sidebar-select",
                                            value: I.verticalAlign,
                                            onChange: (m)=>v("verticalAlign", m.target.value),
                                            children: Object.entries(Gr).map(([m, F])=>e.jsx("option", {
                                                    value: m,
                                                    children: F
                                                }, m))
                                        })
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "hwp-sidebar-row",
                                    children: e.jsxs("label", {
                                        className: "hwp-sidebar-checkbox-label",
                                        children: [
                                            e.jsx("input", {
                                                type: "checkbox",
                                                checked: I.isHeader,
                                                onChange: (m)=>v("isHeader", m.target.checked)
                                            }),
                                            e.jsx("span", {
                                                children: i("sidebar.headerCell") || "제목 셀"
                                            })
                                        ]
                                    })
                                }),
                                e.jsx("div", {
                                    className: "hwp-sidebar-row hwp-sidebar-row--full",
                                    children: e.jsx("button", {
                                        className: "hwp-sidebar-apply-btn",
                                        onClick: c,
                                        type: "button",
                                        children: i("sidebar.apply") || "적용"
                                    })
                                })
                            ]
                        }),
                        b && e.jsxs(Bt, {
                            title: i("sidebar.fieldInfo") || "필드 정보",
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.fieldType") || "유형"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value",
                                            children: b.type
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.fieldName") || "이름"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value hwp-sidebar-value--ellipsis",
                                            children: b.name
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-sidebar-row",
                                    children: [
                                        e.jsx("span", {
                                            className: "hwp-sidebar-label",
                                            children: i("sidebar.fieldValue") || "값"
                                        }),
                                        e.jsx("span", {
                                            className: "hwp-sidebar-value hwp-sidebar-value--ellipsis",
                                            children: b.value
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    const Xr = pt.memo(Qr), Zr = ({ t: h, onClose: u, tableProps: i, onApply: k })=>{
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(!1), [S, E] = n.useState(!1), [P, L] = n.useState(0), [$, b] = n.useState(0), [I, D] = n.useState("left");
        n.useEffect(()=>{
            i && (l(i.cellSpacing), g(i.cellPadding), N(i.pageBreak), E(i.repeatHeader), L(i.borderWidth), b(i.width), D(i.alignment));
        }, [
            i
        ]);
        const v = ()=>{
            k({
                cellSpacing: t,
                cellPadding: x,
                pageBreak: C,
                repeatHeader: S,
                borderWidth: P,
                width: $,
                alignment: I
            });
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: u,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (c)=>c.stopPropagation(),
                children: [
                    e.jsx("h3", {
                        children: h("표 속성")
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: h("셀 간격 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: t,
                                onChange: (c)=>l(Number(c.target.value))
                            }),
                            e.jsx("label", {
                                children: h("셀 여백 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: x,
                                onChange: (c)=>g(Number(c.target.value))
                            }),
                            e.jsx("label", {
                                children: h("페이지 경계 분리")
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: C,
                                        onChange: (c)=>N(c.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: h("페이지 경계에서 표를 나눕니다")
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: h("제목 행 반복")
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: S,
                                        onChange: (c)=>E(c.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: h("각 페이지마다 제목 행을 반복합니다")
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: h("테두리 두께")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: P,
                                onChange: (c)=>L(Number(c.target.value))
                            }),
                            e.jsx("label", {
                                children: h("표 너비 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: $,
                                onChange: (c)=>b(Number(c.target.value))
                            }),
                            e.jsx("label", {
                                children: h("정렬")
                            }),
                            e.jsxs("select", {
                                value: I,
                                onChange: (c)=>D(c.target.value),
                                style: {
                                    padding: "5px 10px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    background: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    fontSize: "0.85rem",
                                    width: "100%"
                                },
                                children: [
                                    e.jsx("option", {
                                        value: "left",
                                        children: h("왼쪽")
                                    }),
                                    e.jsx("option", {
                                        value: "center",
                                        children: h("가운데")
                                    }),
                                    e.jsx("option", {
                                        value: "right",
                                        children: h("오른쪽")
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: u,
                                children: h("취소")
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: v,
                                children: h("적용")
                            })
                        ]
                    })
                ]
            })
        });
    };
    function en(h) {
        const u = parseInt(h.slice(1, 3), 16), i = parseInt(h.slice(3, 5), 16);
        return parseInt(h.slice(5, 7), 16) << 16 | i << 8 | u;
    }
    function tn(h) {
        const u = h & 255, i = h >> 8 & 255, k = h >> 16 & 255;
        return "#" + [
            u,
            i,
            k
        ].map((t)=>t.toString(16).padStart(2, "0")).join("");
    }
    const rn = ({ t: h, onClose: u, cellProps: i, onApply: k })=>{
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(0), [S, E] = n.useState(0), [P, L] = n.useState("top"), [$, b] = n.useState("horizontal"), [I, D] = n.useState(!1), [v, c] = n.useState("#ffffff");
        n.useEffect(()=>{
            i && (l(i.paddingTop), g(i.paddingBottom), N(i.paddingLeft), E(i.paddingRight), L(i.verticalAlign), b(i.textDirection), D(i.isHeader), c(tn(i.backgroundColor)));
        }, [
            i
        ]);
        const z = ()=>{
            k({
                paddingTop: t,
                paddingBottom: x,
                paddingLeft: C,
                paddingRight: S,
                verticalAlign: P,
                textDirection: $,
                isHeader: I,
                backgroundColor: en(v)
            });
        }, y = {
            padding: "5px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.85rem",
            width: "100%"
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: u,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (m)=>m.stopPropagation(),
                children: [
                    e.jsx("h3", {
                        children: h("셀 속성")
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: h("위 여백 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: t,
                                onChange: (m)=>l(Number(m.target.value))
                            }),
                            e.jsx("label", {
                                children: h("아래 여백 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: x,
                                onChange: (m)=>g(Number(m.target.value))
                            }),
                            e.jsx("label", {
                                children: h("왼쪽 여백 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: C,
                                onChange: (m)=>N(Number(m.target.value))
                            }),
                            e.jsx("label", {
                                children: h("오른쪽 여백 (HWPUNIT)")
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: S,
                                onChange: (m)=>E(Number(m.target.value))
                            }),
                            e.jsx("label", {
                                children: h("세로 정렬")
                            }),
                            e.jsxs("select", {
                                value: P,
                                onChange: (m)=>L(m.target.value),
                                style: y,
                                children: [
                                    e.jsx("option", {
                                        value: "top",
                                        children: h("위")
                                    }),
                                    e.jsx("option", {
                                        value: "middle",
                                        children: h("가운데")
                                    }),
                                    e.jsx("option", {
                                        value: "bottom",
                                        children: h("아래")
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: h("글자 방향")
                            }),
                            e.jsxs("select", {
                                value: $,
                                onChange: (m)=>b(m.target.value),
                                style: y,
                                children: [
                                    e.jsx("option", {
                                        value: "horizontal",
                                        children: h("가로")
                                    }),
                                    e.jsx("option", {
                                        value: "vertical",
                                        children: h("세로")
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: h("머리글 셀")
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: I,
                                        onChange: (m)=>D(m.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: h("이 셀을 머리글로 지정합니다")
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: h("배경색")
                            }),
                            e.jsxs("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "color",
                                        value: v,
                                        onChange: (m)=>c(m.target.value),
                                        style: {
                                            width: 36,
                                            height: 28,
                                            padding: 0,
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            cursor: "pointer"
                                        }
                                    }),
                                    e.jsx("input", {
                                        type: "text",
                                        value: v,
                                        onChange: (m)=>{
                                            const F = m.target.value;
                                            /^#[0-9a-fA-F]{0,6}$/.test(F) && c(F);
                                        },
                                        style: {
                                            flex: 1
                                        },
                                        maxLength: 7,
                                        placeholder: "#FFFFFF"
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: u,
                                children: h("취소")
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: z,
                                children: h("적용")
                            })
                        ]
                    })
                ]
            })
        });
    }, nn = [
        {
            value: "none",
            label: "없음 (none)"
        },
        {
            value: "square",
            label: "자리차지 (square)"
        },
        {
            value: "tight",
            label: "빈 공간 (tight)"
        },
        {
            value: "through",
            label: "어울림 (through)"
        }
    ], an = ({ mode: h, onClose: u, shapeProps: i, onInsert: k, onApply: t })=>{
        const [l, x] = n.useState(14400), [g, C] = n.useState(7200), [N, S] = n.useState(0), [E, P] = n.useState(0), [L, $] = n.useState("none"), [b, I] = n.useState(0), [D, v] = n.useState(!1), [c, z] = n.useState(0), [y, m] = n.useState(0), [F, V] = n.useState(0), [j, p] = n.useState(0);
        n.useEffect(()=>{
            h === "properties" && i && (x(i.width), C(i.height), S(i.offsetX), P(i.offsetY), $(i.textWrap), I(i.zOrder), v(i.treatAsChar), z(i.marginLeft), m(i.marginRight), V(i.marginTop), p(i.marginBottom));
        }, [
            h,
            i
        ]);
        const H = ()=>{
            k?.({
                width: l,
                height: g,
                treatAsChar: D || void 0
            });
        }, K = ()=>{
            t?.({
                width: l,
                height: g,
                offsetX: N,
                offsetY: E,
                textWrap: L,
                zOrder: b,
                treatAsChar: D,
                marginLeft: c,
                marginRight: y,
                marginTop: F,
                marginBottom: j
            });
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: u,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (A)=>A.stopPropagation(),
                children: [
                    e.jsx("h3", {
                        children: h === "insert" ? "글상자 삽입" : "글상자 속성"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "폭 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: l,
                                onChange: (A)=>x(Number(A.target.value)),
                                min: 0
                            }),
                            e.jsx("label", {
                                children: "높이 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: g,
                                onChange: (A)=>C(Number(A.target.value)),
                                min: 0
                            }),
                            e.jsx("label", {
                                children: "문자처럼 취급"
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: D,
                                        onChange: (A)=>v(A.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: "활성화"
                                    })
                                ]
                            })
                        ]
                    }),
                    h === "properties" && e.jsxs(e.Fragment, {
                        children: [
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "12px 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "위치"
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "X 오프셋 (HWPUNIT)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: N,
                                        onChange: (A)=>S(Number(A.target.value))
                                    }),
                                    e.jsx("label", {
                                        children: "Y 오프셋 (HWPUNIT)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: E,
                                        onChange: (A)=>P(Number(A.target.value))
                                    })
                                ]
                            }),
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "12px 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "텍스트 배치"
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "배치 방식"
                                    }),
                                    e.jsx("select", {
                                        value: L,
                                        onChange: (A)=>$(A.target.value),
                                        style: {
                                            padding: "5px 10px",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            background: "var(--bg-primary)",
                                            color: "var(--text-primary)",
                                            fontSize: "0.85rem",
                                            width: "100%"
                                        },
                                        children: nn.map((A)=>e.jsx("option", {
                                                value: A.value,
                                                children: A.label
                                            }, A.value))
                                    }),
                                    e.jsx("label", {
                                        children: "Z 순서"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: b,
                                        onChange: (A)=>I(Number(A.target.value))
                                    })
                                ]
                            }),
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "12px 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "내부 여백 (HWPUNIT)"
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "왼쪽"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: c,
                                        onChange: (A)=>z(Number(A.target.value)),
                                        min: 0
                                    }),
                                    e.jsx("label", {
                                        children: "오른쪽"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: y,
                                        onChange: (A)=>m(Number(A.target.value)),
                                        min: 0
                                    }),
                                    e.jsx("label", {
                                        children: "위"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: F,
                                        onChange: (A)=>V(Number(A.target.value)),
                                        min: 0
                                    }),
                                    e.jsx("label", {
                                        children: "아래"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        value: j,
                                        onChange: (A)=>p(Number(A.target.value)),
                                        min: 0
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: u,
                                children: "취소"
                            }),
                            h === "insert" ? e.jsx("button", {
                                className: "primary",
                                onClick: H,
                                children: "삽입"
                            }) : e.jsx("button", {
                                className: "primary",
                                onClick: K,
                                children: "적용"
                            })
                        ]
                    })
                ]
            })
        });
    }, sn = [
        {
            value: "none",
            label: "없음 (none)"
        },
        {
            value: "square",
            label: "자리차지 (square)"
        },
        {
            value: "tight",
            label: "빈 공간 (tight)"
        },
        {
            value: "through",
            label: "어울림 (through)"
        }
    ], ln = ({ onClose: h, pictureProps: u, onApply: i, onDownloadImage: k })=>{
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(0), [S, E] = n.useState(0), [P, L] = n.useState(0), [$, b] = n.useState(0), [I, D] = n.useState(!1), [v, c] = n.useState("none"), [z, y] = n.useState(0), [m, F] = n.useState(0), [V, j] = n.useState(0), [p, H] = n.useState(!0);
        n.useEffect(()=>{
            u && (l(u.width), g(u.height), N(u.originalWidth), E(u.originalHeight), L(u.offsetX), b(u.offsetY), D(u.treatAsChar), c(u.textWrap), y(u.brightness), F(u.contrast), j(u.transparency));
        }, [
            u
        ]);
        const K = (o)=>{
            if (l(o), p && C > 0) {
                const f = S / C;
                g(Math.round(o * f));
            }
        }, A = (o)=>{
            if (g(o), p && S > 0) {
                const f = C / S;
                l(Math.round(o * f));
            }
        }, te = ()=>{
            l(C), g(S);
        }, Y = ()=>{
            i({
                width: t,
                height: x,
                offsetX: P,
                offsetY: $,
                treatAsChar: I,
                textWrap: v,
                brightness: z,
                contrast: m,
                transparency: V
            });
        }, re = {
            padding: "5px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.85rem",
            width: "100%"
        }, R = {
            display: "flex",
            alignItems: "center",
            gap: 8
        }, w = {
            minWidth: 36,
            textAlign: "right",
            fontSize: "0.82rem",
            color: "var(--text-secondary)"
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (o)=>o.stopPropagation(),
                children: [
                    e.jsx("h3", {
                        children: "그림 속성"
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "0 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "크기"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "폭 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: t,
                                onChange: (o)=>K(Number(o.target.value)),
                                min: 0
                            }),
                            e.jsx("label", {
                                children: "높이 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: x,
                                onChange: (o)=>A(Number(o.target.value)),
                                min: 0
                            }),
                            e.jsx("label", {
                                children: "원본 크기"
                            }),
                            e.jsxs("span", {
                                style: {
                                    fontSize: "0.82rem",
                                    color: "var(--text-secondary)",
                                    alignSelf: "center"
                                },
                                children: [
                                    C,
                                    " x ",
                                    S,
                                    " HWPUNIT"
                                ]
                            }),
                            e.jsx("label", {
                                children: "비율 고정"
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: p,
                                        onChange: (o)=>H(o.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: "활성화"
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: {
                            marginBottom: 12
                        },
                        children: e.jsx("button", {
                            onClick: te,
                            style: {
                                padding: "5px 14px",
                                border: "1px solid var(--border-color)",
                                borderRadius: "var(--radius-sm)",
                                background: "var(--bg-secondary, var(--bg-primary))",
                                color: "var(--text-primary)",
                                fontSize: "0.82rem",
                                cursor: "pointer"
                            },
                            children: "원래 크기로"
                        })
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "위치"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "X 오프셋 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: P,
                                onChange: (o)=>L(Number(o.target.value))
                            }),
                            e.jsx("label", {
                                children: "Y 오프셋 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                value: $,
                                onChange: (o)=>b(Number(o.target.value))
                            }),
                            e.jsx("label", {
                                children: "배치 방식"
                            }),
                            e.jsx("select", {
                                value: v,
                                onChange: (o)=>c(o.target.value),
                                style: re,
                                children: sn.map((o)=>e.jsx("option", {
                                        value: o.value,
                                        children: o.label
                                    }, o.value))
                            }),
                            e.jsx("label", {
                                children: "문자처럼 취급"
                            }),
                            e.jsxs("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6
                                },
                                children: [
                                    e.jsx("input", {
                                        type: "checkbox",
                                        checked: I,
                                        onChange: (o)=>D(o.target.checked)
                                    }),
                                    e.jsx("span", {
                                        style: {
                                            fontSize: "0.82rem"
                                        },
                                        children: "활성화"
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "이미지 효과"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "밝기"
                            }),
                            e.jsxs("div", {
                                style: R,
                                children: [
                                    e.jsx("input", {
                                        type: "range",
                                        min: -100,
                                        max: 100,
                                        value: z,
                                        onChange: (o)=>y(Number(o.target.value)),
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    e.jsx("span", {
                                        style: w,
                                        children: z
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: "대비"
                            }),
                            e.jsxs("div", {
                                style: R,
                                children: [
                                    e.jsx("input", {
                                        type: "range",
                                        min: -100,
                                        max: 100,
                                        value: m,
                                        onChange: (o)=>F(Number(o.target.value)),
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    e.jsx("span", {
                                        style: w,
                                        children: m
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: "투명도"
                            }),
                            e.jsxs("div", {
                                style: R,
                                children: [
                                    e.jsx("input", {
                                        type: "range",
                                        min: 0,
                                        max: 100,
                                        value: V,
                                        onChange: (o)=>j(Number(o.target.value)),
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    e.jsx("span", {
                                        style: w,
                                        children: V
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: k,
                                children: "이미지 다운로드"
                            }),
                            e.jsx("button", {
                                onClick: h,
                                children: "취소"
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: Y,
                                children: "적용"
                            })
                        ]
                    })
                ]
            })
        });
    }, on = ({ onClose: h, styleList: u, onCreateStyle: i, onUpdateStyle: k, onDeleteStyle: t, onGetStyleDetail: l, onApplyStyle: x })=>{
        const [g, C] = n.useState(null), [N, S] = n.useState(!1), [E, P] = n.useState(!1), [L, $] = n.useState(null), [b, I] = n.useState({
            name: "",
            engName: "",
            type: "paragraph",
            nextStyleId: 0
        }), [D, v] = n.useState({
            name: "",
            engName: ""
        });
        n.useEffect(()=>{
            if (g !== null) {
                const j = l(g);
                $(j), j && v({
                    name: j.name || "",
                    engName: j.engName || ""
                });
            } else $(null);
        }, [
            g,
            l
        ]);
        const c = ()=>{
            b.name.trim() && (i({
                name: b.name.trim(),
                engName: b.engName.trim(),
                type: b.type,
                nextStyleId: b.nextStyleId
            }), I({
                name: "",
                engName: "",
                type: "paragraph",
                nextStyleId: 0
            }), S(!1));
        }, z = ()=>{
            g !== null && (k(g, {
                name: D.name.trim(),
                engName: D.engName.trim()
            }), P(!1));
        }, y = ()=>{
            if (g === null) return;
            const j = u.find((p)=>p.id === g);
            j && window.confirm(`"${j.name}" 스타일을 삭제하시겠습니까?`) && (t(g), C(null), P(!1));
        }, m = ()=>{
            g !== null && (x(g), h());
        }, F = (j)=>{
            switch(j){
                case "paragraph":
                    return "문단";
                case "character":
                    return "글자";
                default:
                    return j;
            }
        }, V = (j, p)=>{
            if (!p || typeof p != "object") return "정보 없음";
            const H = Object.entries(p).filter(([, K])=>K != null).map(([K, A])=>`${K}: ${A}`).slice(0, 6);
            return H.length > 0 ? H.join(", ") : `${j} 정보 없음`;
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (j)=>j.stopPropagation(),
                style: {
                    width: 640,
                    maxWidth: "90vw"
                },
                children: [
                    e.jsx("h3", {
                        children: "스타일 관리"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            gap: 16,
                            minHeight: 320
                        },
                        children: [
                            e.jsxs("div", {
                                style: {
                                    width: 200,
                                    minWidth: 200,
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    e.jsxs("div", {
                                        style: {
                                            padding: "8px 12px",
                                            background: "var(--bg-secondary)",
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            color: "var(--text-secondary)",
                                            borderBottom: "1px solid var(--border-color)"
                                        },
                                        children: [
                                            "스타일 목록 (",
                                            u.length,
                                            ")"
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        style: {
                                            flex: 1,
                                            overflowY: "auto"
                                        },
                                        children: [
                                            u.length === 0 && e.jsx("div", {
                                                style: {
                                                    padding: 16,
                                                    fontSize: "0.82rem",
                                                    color: "var(--text-tertiary)",
                                                    textAlign: "center"
                                                },
                                                children: "스타일이 없습니다"
                                            }),
                                            u.map((j)=>e.jsxs("div", {
                                                    onClick: ()=>{
                                                        C(j.id), S(!1), P(!1);
                                                    },
                                                    style: {
                                                        padding: "8px 12px",
                                                        cursor: "pointer",
                                                        background: g === j.id ? "var(--primary-light, rgba(0,70,200,0.1))" : "transparent",
                                                        borderBottom: "1px solid var(--border-color)",
                                                        transition: "background 0.15s"
                                                    },
                                                    children: [
                                                        e.jsx("div", {
                                                            style: {
                                                                fontSize: "0.85rem",
                                                                fontWeight: g === j.id ? 600 : 400,
                                                                color: "var(--text-primary)"
                                                            },
                                                            children: j.name
                                                        }),
                                                        e.jsx("div", {
                                                            style: {
                                                                fontSize: "0.72rem",
                                                                color: "var(--text-tertiary)",
                                                                marginTop: 2
                                                            },
                                                            children: F(j.type)
                                                        })
                                                    ]
                                                }, j.id))
                                        ]
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12
                                },
                                children: [
                                    N && e.jsxs("div", {
                                        style: {
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            padding: 16
                                        },
                                        children: [
                                            e.jsx("div", {
                                                style: {
                                                    fontSize: "0.85rem",
                                                    fontWeight: 600,
                                                    marginBottom: 12,
                                                    color: "var(--text-primary)"
                                                },
                                                children: "새 스타일 만들기"
                                            }),
                                            e.jsxs("div", {
                                                className: "hwp-dialog-grid",
                                                children: [
                                                    e.jsx("label", {
                                                        children: "이름"
                                                    }),
                                                    e.jsx("input", {
                                                        type: "text",
                                                        value: b.name,
                                                        onChange: (j)=>I({
                                                                ...b,
                                                                name: j.target.value
                                                            }),
                                                        placeholder: "스타일 이름"
                                                    }),
                                                    e.jsx("label", {
                                                        children: "영문 이름"
                                                    }),
                                                    e.jsx("input", {
                                                        type: "text",
                                                        value: b.engName,
                                                        onChange: (j)=>I({
                                                                ...b,
                                                                engName: j.target.value
                                                            }),
                                                        placeholder: "English name"
                                                    }),
                                                    e.jsx("label", {
                                                        children: "유형"
                                                    }),
                                                    e.jsxs("select", {
                                                        value: b.type,
                                                        onChange: (j)=>I({
                                                                ...b,
                                                                type: j.target.value
                                                            }),
                                                        style: {
                                                            padding: "5px 10px",
                                                            border: "1px solid var(--border-color)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--bg-primary)",
                                                            color: "var(--text-primary)",
                                                            fontSize: "0.85rem",
                                                            width: "100%"
                                                        },
                                                        children: [
                                                            e.jsx("option", {
                                                                value: "paragraph",
                                                                children: "문단 스타일"
                                                            }),
                                                            e.jsx("option", {
                                                                value: "character",
                                                                children: "글자 스타일"
                                                            })
                                                        ]
                                                    }),
                                                    e.jsx("label", {
                                                        children: "다음 스타일"
                                                    }),
                                                    e.jsxs("select", {
                                                        value: b.nextStyleId,
                                                        onChange: (j)=>I({
                                                                ...b,
                                                                nextStyleId: Number(j.target.value)
                                                            }),
                                                        style: {
                                                            padding: "5px 10px",
                                                            border: "1px solid var(--border-color)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--bg-primary)",
                                                            color: "var(--text-primary)",
                                                            fontSize: "0.85rem",
                                                            width: "100%"
                                                        },
                                                        children: [
                                                            e.jsx("option", {
                                                                value: 0,
                                                                children: "— 같은 스타일 —"
                                                            }),
                                                            u.map((j)=>e.jsx("option", {
                                                                    value: j.id,
                                                                    children: j.name
                                                                }, j.id))
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    gap: 8,
                                                    marginTop: 12
                                                },
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: ()=>S(!1),
                                                        style: {
                                                            padding: "5px 14px",
                                                            border: "1px solid var(--border-color)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--bg-primary)",
                                                            color: "var(--text-primary)",
                                                            fontSize: "0.82rem",
                                                            cursor: "pointer"
                                                        },
                                                        children: "취소"
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: c,
                                                        style: {
                                                            padding: "5px 14px",
                                                            border: "1px solid var(--primary)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--primary)",
                                                            color: "white",
                                                            fontSize: "0.82rem",
                                                            cursor: "pointer"
                                                        },
                                                        children: "만들기"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !N && g !== null && L && e.jsxs("div", {
                                        style: {
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            padding: 16,
                                            flex: 1,
                                            overflowY: "auto"
                                        },
                                        children: [
                                            e.jsxs("div", {
                                                className: "hwp-dialog-grid",
                                                children: [
                                                    e.jsx("label", {
                                                        children: "이름"
                                                    }),
                                                    E ? e.jsx("input", {
                                                        type: "text",
                                                        value: D.name,
                                                        onChange: (j)=>v({
                                                                ...D,
                                                                name: j.target.value
                                                            })
                                                    }) : e.jsx("span", {
                                                        style: {
                                                            fontSize: "0.85rem",
                                                            color: "var(--text-primary)"
                                                        },
                                                        children: L.name || "—"
                                                    }),
                                                    e.jsx("label", {
                                                        children: "영문 이름"
                                                    }),
                                                    E ? e.jsx("input", {
                                                        type: "text",
                                                        value: D.engName,
                                                        onChange: (j)=>v({
                                                                ...D,
                                                                engName: j.target.value
                                                            })
                                                    }) : e.jsx("span", {
                                                        style: {
                                                            fontSize: "0.85rem",
                                                            color: "var(--text-primary)"
                                                        },
                                                        children: L.engName || "—"
                                                    }),
                                                    e.jsx("label", {
                                                        children: "유형"
                                                    }),
                                                    e.jsx("span", {
                                                        style: {
                                                            fontSize: "0.85rem",
                                                            color: "var(--text-primary)"
                                                        },
                                                        children: F(L.type || "")
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                style: {
                                                    marginTop: 16
                                                },
                                                children: [
                                                    e.jsx("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            fontWeight: 600,
                                                            color: "var(--text-secondary)",
                                                            marginBottom: 6
                                                        },
                                                        children: "글자 모양 (CharShape)"
                                                    }),
                                                    e.jsx("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "var(--text-tertiary)",
                                                            background: "var(--bg-secondary)",
                                                            padding: "8px 12px",
                                                            borderRadius: "var(--radius-sm)",
                                                            lineHeight: 1.5,
                                                            wordBreak: "break-all"
                                                        },
                                                        children: V("글자 모양", L.charShape)
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                style: {
                                                    marginTop: 12
                                                },
                                                children: [
                                                    e.jsx("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            fontWeight: 600,
                                                            color: "var(--text-secondary)",
                                                            marginBottom: 6
                                                        },
                                                        children: "문단 모양 (ParaShape)"
                                                    }),
                                                    e.jsx("div", {
                                                        style: {
                                                            fontSize: "0.8rem",
                                                            color: "var(--text-tertiary)",
                                                            background: "var(--bg-secondary)",
                                                            padding: "8px 12px",
                                                            borderRadius: "var(--radius-sm)",
                                                            lineHeight: 1.5,
                                                            wordBreak: "break-all"
                                                        },
                                                        children: V("문단 모양", L.paraShape)
                                                    })
                                                ]
                                            }),
                                            E && e.jsxs("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    gap: 8,
                                                    marginTop: 12
                                                },
                                                children: [
                                                    e.jsx("button", {
                                                        onClick: ()=>P(!1),
                                                        style: {
                                                            padding: "5px 14px",
                                                            border: "1px solid var(--border-color)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--bg-primary)",
                                                            color: "var(--text-primary)",
                                                            fontSize: "0.82rem",
                                                            cursor: "pointer"
                                                        },
                                                        children: "취소"
                                                    }),
                                                    e.jsx("button", {
                                                        onClick: z,
                                                        style: {
                                                            padding: "5px 14px",
                                                            border: "1px solid var(--primary)",
                                                            borderRadius: "var(--radius-sm)",
                                                            background: "var(--primary)",
                                                            color: "white",
                                                            fontSize: "0.82rem",
                                                            cursor: "pointer"
                                                        },
                                                        children: "저장"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !N && g === null && e.jsx("div", {
                                        style: {
                                            flex: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            color: "var(--text-tertiary)",
                                            fontSize: "0.85rem"
                                        },
                                        children: "왼쪽 목록에서 스타일을 선택하세요"
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        style: {
                            marginTop: 16
                        },
                        children: [
                            e.jsx("button", {
                                onClick: ()=>{
                                    S(!0), P(!1), C(null);
                                },
                                children: "새 스타일"
                            }),
                            e.jsx("button", {
                                onClick: ()=>P(!0),
                                disabled: g === null || N,
                                children: "수정"
                            }),
                            e.jsx("button", {
                                onClick: y,
                                disabled: g === null || N,
                                children: "삭제"
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: m,
                                disabled: g === null || N,
                                children: "적용"
                            }),
                            e.jsx("button", {
                                onClick: h,
                                children: "닫기"
                            })
                        ]
                    })
                ]
            })
        });
    }, Tr = [
        {
            id: 1,
            label: "페이지 번호 중앙"
        },
        {
            id: 2,
            label: "페이지 번호 오른쪽"
        },
        {
            id: 3,
            label: "날짜"
        },
        {
            id: 4,
            label: "파일명"
        }
    ], cn = [
        {
            type: "page_number",
            label: "페이지 번호"
        },
        {
            type: "total_pages",
            label: "전체 페이지"
        },
        {
            type: "date",
            label: "날짜"
        },
        {
            type: "time",
            label: "시간"
        },
        {
            type: "filename",
            label: "파일명"
        }
    ], dn = {
        0: "양쪽",
        1: "짝수 쪽",
        2: "홀수 쪽"
    }, hn = ({ onClose: h, headerFooterList: u, onRefreshList: i, onCreateHeaderFooter: k, onDeleteHeaderFooter: t, onToggleHide: l, onNavigateByPage: x, onApplyTemplate: g, onInsertField: C, onEnterEditMode: N, sectionCount: S, currentPage: E, pageCount: P })=>{
        const [L, $] = n.useState(0), [b, I] = n.useState("header"), [D, v] = n.useState(String(E)), [c, z] = n.useState(Tr[0].id), y = b === "header", m = u.filter((R)=>R.secIdx === L && R.isHeader === y), F = ()=>{
            k(L, y), i();
        }, V = (R)=>{
            const w = R.isHeader ? "머리말" : "꼬리말";
            window.confirm(`이 ${w}을 삭제하시겠습니까?`) && (t(R.secIdx, R.isHeader, R.applyTo), i());
        }, j = (R)=>{
            l(R.secIdx, R.isHeader, R.applyTo), i();
        }, p = (R)=>{
            N(R.secIdx, R.isHeader), h();
        }, H = ()=>{
            const R = Math.max(1, Math.min(P, Number(D) || 1));
            x(L, y, R);
        }, K = (R)=>{
            g(R.secIdx, R.isHeader, R.applyTo, c), i();
        }, A = (R, w)=>{
            C(R.secIdx, R.isHeader, R.applyTo, w);
        }, te = {
            padding: "5px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.85rem"
        }, Y = {
            padding: "4px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.78rem",
            cursor: "pointer"
        }, re = {
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: 8,
            marginTop: 16
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (R)=>R.stopPropagation(),
                style: {
                    width: 560,
                    maxWidth: "90vw"
                },
                children: [
                    e.jsx("h3", {
                        children: "머리말/꼬리말"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 12
                        },
                        children: [
                            e.jsx("label", {
                                style: {
                                    fontSize: "0.82rem",
                                    color: "var(--text-secondary)"
                                },
                                children: "구역"
                            }),
                            e.jsx("select", {
                                value: L,
                                onChange: (R)=>$(Number(R.target.value)),
                                style: te,
                                children: Array.from({
                                    length: S
                                }, (R, w)=>e.jsxs("option", {
                                        value: w,
                                        children: [
                                            "구역 ",
                                            w + 1
                                        ]
                                    }, w))
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 0,
                            marginBottom: 16
                        },
                        children: [
                            "header",
                            "footer"
                        ].map((R)=>e.jsx("button", {
                                onClick: ()=>I(R),
                                style: {
                                    flex: 1,
                                    padding: "8px 0",
                                    border: "1px solid var(--border-color)",
                                    borderBottom: b === R ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                                    background: b === R ? "var(--bg-primary)" : "var(--bg-secondary)",
                                    color: b === R ? "var(--primary)" : "var(--text-secondary)",
                                    fontWeight: b === R ? 600 : 400,
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    borderRadius: R === "header" ? "var(--radius-sm) 0 0 0" : "0 var(--radius-sm) 0 0"
                                },
                                children: R === "header" ? "머리말" : "꼬리말"
                            }, R))
                    }),
                    e.jsx("div", {
                        style: {
                            border: "1px solid var(--border-color)",
                            borderRadius: "var(--radius-sm)",
                            maxHeight: 200,
                            overflowY: "auto",
                            marginBottom: 8
                        },
                        children: m.length === 0 ? e.jsxs("div", {
                            style: {
                                padding: 20,
                                textAlign: "center",
                                fontSize: "0.82rem",
                                color: "var(--text-tertiary)"
                            },
                            children: [
                                y ? "머리말" : "꼬리말",
                                "이 없습니다"
                            ]
                        }) : m.map((R, w)=>e.jsxs("div", {
                                style: {
                                    padding: "10px 14px",
                                    borderBottom: w < m.length - 1 ? "1px solid var(--border-color)" : "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    e.jsxs("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            e.jsxs("div", {
                                                style: {
                                                    fontSize: "0.85rem",
                                                    color: "var(--text-primary)"
                                                },
                                                children: [
                                                    y ? "머리말" : "꼬리말",
                                                    " ",
                                                    e.jsxs("span", {
                                                        style: {
                                                            fontSize: "0.75rem",
                                                            color: "var(--text-tertiary)",
                                                            marginLeft: 4
                                                        },
                                                        children: [
                                                            "적용: ",
                                                            dn[R.applyTo] || `#${R.applyTo}`
                                                        ]
                                                    })
                                                ]
                                            }),
                                            e.jsxs("div", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-tertiary)",
                                                    marginTop: 2
                                                },
                                                children: [
                                                    "문단 수: ",
                                                    R.paraCount,
                                                    R.hidden && e.jsx("span", {
                                                        style: {
                                                            color: "var(--warning, #e6a817)",
                                                            marginLeft: 8
                                                        },
                                                        children: "(숨김)"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>p(R),
                                        style: Y,
                                        children: "편집"
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>j(R),
                                        style: Y,
                                        children: R.hidden ? "표시" : "숨김"
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>V(R),
                                        style: {
                                            ...Y,
                                            color: "var(--danger, #c00)"
                                        },
                                        children: "삭제"
                                    })
                                ]
                            }, w))
                    }),
                    e.jsx("div", {
                        style: re,
                        children: "페이지별 탐색"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 4
                        },
                        children: [
                            e.jsx("input", {
                                type: "number",
                                min: 1,
                                max: P,
                                value: D,
                                onChange: (R)=>v(R.target.value),
                                style: {
                                    width: 80,
                                    padding: "5px 10px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    background: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    fontSize: "0.85rem"
                                }
                            }),
                            e.jsxs("span", {
                                style: {
                                    fontSize: "0.8rem",
                                    color: "var(--text-tertiary)"
                                },
                                children: [
                                    "/ ",
                                    P,
                                    " 페이지"
                                ]
                            }),
                            e.jsx("button", {
                                onClick: H,
                                style: Y,
                                children: "이동"
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: re,
                        children: "템플릿 적용"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 4
                        },
                        children: [
                            e.jsx("select", {
                                value: c,
                                onChange: (R)=>z(Number(R.target.value)),
                                style: {
                                    ...te,
                                    flex: 1
                                },
                                children: Tr.map((R)=>e.jsx("option", {
                                        value: R.id,
                                        children: R.label
                                    }, R.id))
                            }),
                            e.jsx("button", {
                                onClick: ()=>{
                                    m.length > 0 && K(m[0]);
                                },
                                disabled: m.length === 0,
                                style: Y,
                                children: "적용"
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: re,
                        children: "필드 삽입"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginBottom: 8
                        },
                        children: cn.map((R)=>e.jsx("button", {
                                onClick: ()=>{
                                    m.length > 0 && A(m[0], R.type);
                                },
                                disabled: m.length === 0,
                                style: Y,
                                children: R.label
                            }, R.type))
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        style: {
                            marginTop: 16
                        },
                        children: [
                            e.jsxs("button", {
                                onClick: F,
                                children: [
                                    "새 ",
                                    y ? "머리말" : "꼬리말"
                                ]
                            }),
                            e.jsx("button", {
                                onClick: h,
                                children: "닫기"
                            })
                        ]
                    })
                ]
            })
        });
    }, un = ({ onClose: h, fieldList: u, onRefreshFieldList: i, onGetFieldValue: k, onSetFieldValue: t, onSetActiveField: l, onClearActiveField: x, onRemoveField: g, clickHereProps: C, onUpdateClickHere: N, onGotoField: S })=>{
        const [E, P] = n.useState("fields"), [L, $] = n.useState(null), [b, I] = n.useState(""), [D, v] = n.useState(C?.name ?? ""), [c, z] = n.useState(C?.guide ?? ""), [y, m] = n.useState(C?.memo ?? ""), [F, V] = n.useState(C?.editable ?? !0), j = L !== null ? u.find((M)=>M.index === L) ?? null : null, p = (M)=>{
            $(M.index);
            const G = k(M.name);
            I(G || M.value);
        }, H = ()=>{
            j && (t(j.name, b), i());
        }, K = ()=>{
            L !== null && (S(L), h());
        }, A = ()=>{
            if (j && window.confirm(`"${j.name}" 필드를 삭제하시겠습니까?`)) {
                const M = j.path.split("/"), G = Number(M[0]) || 0, Q = Number(M[1]) || 0;
                g(G, Q), $(null), i();
            }
        }, te = ()=>{
            L !== null && l(L);
        }, Y = ()=>{
            x();
        }, re = ()=>{
            N({
                name: D,
                guide: c,
                memo: y,
                editable: F
            });
        }, R = ()=>{
            C && (v(C.name), z(C.guide), m(C.memo), V(C.editable));
        }, w = {
            padding: "4px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.78rem",
            cursor: "pointer"
        }, o = {
            padding: "5px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.85rem",
            width: "100%",
            boxSizing: "border-box"
        }, f = {
            ...o,
            minHeight: 60,
            resize: "vertical",
            fontFamily: "inherit"
        }, U = (M, G)=>M.length > G ? M.slice(0, G) + "..." : M;
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (M)=>M.stopPropagation(),
                style: {
                    width: 600,
                    maxWidth: "90vw"
                },
                children: [
                    e.jsx("h3", {
                        children: "필드 / 누름틀"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 0,
                            marginBottom: 16
                        },
                        children: [
                            "fields",
                            "clickhere"
                        ].map((M)=>e.jsx("button", {
                                onClick: ()=>{
                                    P(M), M === "clickhere" && R();
                                },
                                style: {
                                    flex: 1,
                                    padding: "8px 0",
                                    border: "1px solid var(--border-color)",
                                    borderBottom: E === M ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                                    background: E === M ? "var(--bg-primary)" : "var(--bg-secondary)",
                                    color: E === M ? "var(--primary)" : "var(--text-secondary)",
                                    fontWeight: E === M ? 600 : 400,
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    borderRadius: M === "fields" ? "var(--radius-sm) 0 0 0" : "0 var(--radius-sm) 0 0"
                                },
                                children: M === "fields" ? "필드 목록" : "누름틀"
                            }, M))
                    }),
                    E === "fields" && e.jsxs("div", {
                        style: {
                            display: "flex",
                            gap: 14,
                            minHeight: 280
                        },
                        children: [
                            e.jsxs("div", {
                                style: {
                                    width: 220,
                                    minWidth: 220,
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [
                                    e.jsxs("div", {
                                        style: {
                                            padding: "8px 12px",
                                            background: "var(--bg-secondary)",
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            color: "var(--text-secondary)",
                                            borderBottom: "1px solid var(--border-color)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            e.jsxs("span", {
                                                children: [
                                                    "필드 (",
                                                    u.length,
                                                    ")"
                                                ]
                                            }),
                                            e.jsx("button", {
                                                onClick: i,
                                                style: {
                                                    padding: "2px 8px",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-primary)",
                                                    color: "var(--text-secondary)",
                                                    fontSize: "0.72rem",
                                                    cursor: "pointer"
                                                },
                                                title: "새로고침",
                                                children: "새로고침"
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        style: {
                                            flex: 1,
                                            overflowY: "auto"
                                        },
                                        children: [
                                            u.length === 0 && e.jsx("div", {
                                                style: {
                                                    padding: 16,
                                                    textAlign: "center",
                                                    fontSize: "0.82rem",
                                                    color: "var(--text-tertiary)"
                                                },
                                                children: "필드가 없습니다"
                                            }),
                                            u.map((M)=>e.jsxs("div", {
                                                    onClick: ()=>p(M),
                                                    style: {
                                                        padding: "8px 12px",
                                                        cursor: "pointer",
                                                        background: L === M.index ? "var(--primary-light, rgba(0,70,200,0.1))" : "transparent",
                                                        borderBottom: "1px solid var(--border-color)",
                                                        transition: "background 0.15s"
                                                    },
                                                    children: [
                                                        e.jsxs("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 6
                                                            },
                                                            children: [
                                                                e.jsx("span", {
                                                                    style: {
                                                                        fontSize: "0.7rem",
                                                                        color: "var(--text-tertiary)",
                                                                        background: "var(--bg-secondary)",
                                                                        padding: "1px 5px",
                                                                        borderRadius: 3
                                                                    },
                                                                    children: M.type
                                                                }),
                                                                e.jsx("span", {
                                                                    style: {
                                                                        fontSize: "0.82rem",
                                                                        fontWeight: L === M.index ? 600 : 400,
                                                                        color: "var(--text-primary)"
                                                                    },
                                                                    children: M.name || `#${M.index}`
                                                                })
                                                            ]
                                                        }),
                                                        M.value && e.jsx("div", {
                                                            style: {
                                                                fontSize: "0.72rem",
                                                                color: "var(--text-tertiary)",
                                                                marginTop: 3,
                                                                overflow: "hidden",
                                                                textOverflow: "ellipsis",
                                                                whiteSpace: "nowrap"
                                                            },
                                                            children: U(M.value, 30)
                                                        })
                                                    ]
                                                }, M.index))
                                        ]
                                    })
                                ]
                            }),
                            e.jsx("div", {
                                style: {
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: j ? e.jsxs("div", {
                                    style: {
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-sm)",
                                        padding: 16,
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10
                                    },
                                    children: [
                                        e.jsxs("div", {
                                            className: "hwp-dialog-grid",
                                            children: [
                                                e.jsx("label", {
                                                    children: "유형"
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        color: "var(--text-primary)"
                                                    },
                                                    children: j.type
                                                }),
                                                e.jsx("label", {
                                                    children: "이름"
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.85rem",
                                                        color: "var(--text-primary)"
                                                    },
                                                    children: j.name || "(이름 없음)"
                                                }),
                                                e.jsx("label", {
                                                    children: "경로"
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.8rem",
                                                        color: "var(--text-tertiary)",
                                                        wordBreak: "break-all"
                                                    },
                                                    children: j.path || "—"
                                                }),
                                                e.jsx("label", {
                                                    children: "값"
                                                }),
                                                e.jsx("input", {
                                                    type: "text",
                                                    value: b,
                                                    onChange: (M)=>I(M.target.value),
                                                    style: o,
                                                    placeholder: "필드 값을 입력하세요"
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 6,
                                                marginTop: "auto",
                                                paddingTop: 12
                                            },
                                            children: [
                                                e.jsx("button", {
                                                    onClick: H,
                                                    style: {
                                                        ...w,
                                                        border: "1px solid var(--primary)",
                                                        color: "var(--primary)"
                                                    },
                                                    children: "값 설정"
                                                }),
                                                e.jsx("button", {
                                                    onClick: K,
                                                    style: w,
                                                    children: "이동"
                                                }),
                                                e.jsx("button", {
                                                    onClick: te,
                                                    style: w,
                                                    children: "활성화"
                                                }),
                                                e.jsx("button", {
                                                    onClick: Y,
                                                    style: w,
                                                    children: "비활성화"
                                                }),
                                                e.jsx("button", {
                                                    onClick: A,
                                                    style: {
                                                        ...w,
                                                        color: "var(--danger, #c00)"
                                                    },
                                                    children: "삭제"
                                                })
                                            ]
                                        })
                                    ]
                                }) : e.jsx("div", {
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-sm)",
                                        color: "var(--text-tertiary)",
                                        fontSize: "0.85rem"
                                    },
                                    children: "왼쪽 목록에서 필드를 선택하세요"
                                })
                            })
                        ]
                    }),
                    E === "clickhere" && e.jsx("div", {
                        style: {
                            border: "1px solid var(--border-color)",
                            borderRadius: "var(--radius-sm)",
                            padding: 16,
                            minHeight: 280
                        },
                        children: C === null ? e.jsx("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 200,
                                color: "var(--text-tertiary)",
                                fontSize: "0.85rem"
                            },
                            children: "현재 위치에 누름틀이 없습니다"
                        }) : e.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 14
                            },
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-dialog-grid",
                                    children: [
                                        e.jsx("label", {
                                            children: "이름"
                                        }),
                                        e.jsx("input", {
                                            type: "text",
                                            value: D,
                                            onChange: (M)=>v(M.target.value),
                                            style: o,
                                            placeholder: "누름틀 이름"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            style: {
                                                display: "block",
                                                fontSize: "0.82rem",
                                                color: "var(--text-secondary)",
                                                marginBottom: 6
                                            },
                                            children: "안내문"
                                        }),
                                        e.jsx("textarea", {
                                            value: c,
                                            onChange: (M)=>z(M.target.value),
                                            style: f,
                                            placeholder: "사용자에게 표시되는 안내 문구를 입력하세요"
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            style: {
                                                display: "block",
                                                fontSize: "0.82rem",
                                                color: "var(--text-secondary)",
                                                marginBottom: 6
                                            },
                                            children: "메모"
                                        }),
                                        e.jsx("textarea", {
                                            value: y,
                                            onChange: (M)=>m(M.target.value),
                                            style: f,
                                            placeholder: "내부 참고용 메모"
                                        })
                                    ]
                                }),
                                e.jsxs("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        fontSize: "0.82rem",
                                        color: "var(--text-primary)"
                                    },
                                    children: [
                                        e.jsx("input", {
                                            type: "checkbox",
                                            checked: F,
                                            onChange: (M)=>V(M.target.checked)
                                        }),
                                        e.jsx("span", {
                                            children: "편집 가능"
                                        })
                                    ]
                                }),
                                e.jsx("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        marginTop: 8
                                    },
                                    children: e.jsx("button", {
                                        onClick: re,
                                        style: {
                                            padding: "6px 18px",
                                            border: "1px solid var(--primary)",
                                            borderRadius: "var(--radius-sm)",
                                            background: "var(--primary)",
                                            color: "white",
                                            fontSize: "0.82rem",
                                            cursor: "pointer"
                                        },
                                        children: "적용"
                                    })
                                })
                            ]
                        })
                    }),
                    e.jsx("div", {
                        className: "hwp-dialog-actions",
                        style: {
                            marginTop: 16
                        },
                        children: e.jsx("button", {
                            onClick: h,
                            children: "닫기"
                        })
                    })
                ]
            })
        });
    }, pn = ({ onClose: h, bookmarkList: u, onRefresh: i, onAdd: k, onDelete: t, onRename: l, onGoto: x })=>{
        const [g, C] = n.useState(""), [N, S] = n.useState(null), [E, P] = n.useState(""), L = ()=>{
            const z = g.trim();
            z && (u.some((y)=>y.name === z) || (k(z), C(""), i()));
        }, $ = (z)=>{
            z.key === "Enter" && L();
        }, b = (z)=>{
            t(z), i();
        }, I = (z, y)=>{
            S(z), P(y);
        }, D = (z)=>{
            const y = E.trim();
            if (!y || y === z.name) {
                S(null);
                return;
            }
            u.some((m)=>m.name === y && m !== z) || (l(z, y), S(null), i());
        }, v = (z, y)=>{
            z.key === "Enter" ? D(y) : z.key === "Escape" && S(null);
        }, c = (z)=>{
            x(z);
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (z)=>z.stopPropagation(),
                style: {
                    minWidth: 400
                },
                children: [
                    e.jsx("h3", {
                        children: "책갈피"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            marginBottom: 16,
                            alignItems: "center"
                        },
                        children: [
                            e.jsx("input", {
                                type: "text",
                                placeholder: "책갈피 이름 입력",
                                value: g,
                                onChange: (z)=>C(z.target.value),
                                onKeyDown: $,
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
                            e.jsx("button", {
                                onClick: L,
                                disabled: !g.trim(),
                                style: {
                                    padding: "6px 16px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    background: g.trim() ? "var(--primary, #0046C8)" : "var(--bg-secondary)",
                                    color: g.trim() ? "#fff" : "var(--text-secondary)",
                                    fontSize: "0.85rem",
                                    cursor: g.trim() ? "pointer" : "default",
                                    whiteSpace: "nowrap"
                                },
                                children: "추가"
                            })
                        ]
                    }),
                    e.jsxs("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "0 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: [
                            "책갈피 목록 (",
                            u.length,
                            "개)"
                        ]
                    }),
                    e.jsx("div", {
                        style: {
                            maxHeight: 300,
                            overflowY: "auto",
                            border: "1px solid var(--border-color)",
                            borderRadius: "var(--radius-sm)",
                            marginBottom: 12
                        },
                        children: u.length === 0 ? e.jsx("div", {
                            style: {
                                padding: 20,
                                textAlign: "center",
                                color: "var(--text-secondary)",
                                fontSize: "0.82rem"
                            },
                            children: "등록된 책갈피가 없습니다"
                        }) : u.map((z, y)=>e.jsxs("div", {
                                style: {
                                    padding: "10px 12px",
                                    borderBottom: y < u.length - 1 ? "1px solid var(--border-color)" : "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 6
                                },
                                children: [
                                    e.jsxs("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            N === y ? e.jsx("input", {
                                                type: "text",
                                                value: E,
                                                onChange: (m)=>P(m.target.value),
                                                onKeyDown: (m)=>v(m, z),
                                                onBlur: ()=>D(z),
                                                autoFocus: !0,
                                                style: {
                                                    flex: 1,
                                                    padding: "4px 8px",
                                                    border: "1px solid var(--primary, #0046C8)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-primary)",
                                                    color: "var(--text-primary)",
                                                    fontSize: "0.85rem",
                                                    marginRight: 8
                                                }
                                            }) : e.jsx("span", {
                                                style: {
                                                    fontWeight: 500,
                                                    fontSize: "0.88rem",
                                                    color: "var(--text-primary)"
                                                },
                                                children: z.name
                                            }),
                                            e.jsxs("span", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-secondary)",
                                                    whiteSpace: "nowrap",
                                                    marginLeft: 8
                                                },
                                                children: [
                                                    "섹션 ",
                                                    z.secIdx + 1,
                                                    ", 문단 ",
                                                    z.paraIdx + 1
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        style: {
                                            display: "flex",
                                            gap: 6,
                                            justifyContent: "flex-end"
                                        },
                                        children: [
                                            e.jsx("button", {
                                                onClick: ()=>c(z),
                                                style: {
                                                    padding: "3px 10px",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-secondary)",
                                                    color: "var(--primary, #0046C8)",
                                                    fontSize: "0.78rem",
                                                    cursor: "pointer"
                                                },
                                                children: "이동"
                                            }),
                                            e.jsx("button", {
                                                onClick: ()=>I(y, z.name),
                                                style: {
                                                    padding: "3px 10px",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-secondary)",
                                                    color: "var(--text-primary)",
                                                    fontSize: "0.78rem",
                                                    cursor: "pointer"
                                                },
                                                children: "이름변경"
                                            }),
                                            e.jsx("button", {
                                                onClick: ()=>b(z),
                                                style: {
                                                    padding: "3px 10px",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-secondary)",
                                                    color: "#c8102e",
                                                    fontSize: "0.78rem",
                                                    cursor: "pointer"
                                                },
                                                children: "삭제"
                                            })
                                        ]
                                    })
                                ]
                            }, `${z.name}-${y}`))
                    }),
                    e.jsx("div", {
                        className: "hwp-dialog-actions",
                        children: e.jsx("button", {
                            onClick: h,
                            children: "닫기"
                        })
                    })
                ]
            })
        });
    }, xn = [
        {
            value: "none",
            label: "없음 (none)"
        },
        {
            value: "solid",
            label: "실선 (solid)"
        },
        {
            value: "dashed",
            label: "점선 (dashed)"
        },
        {
            value: "double",
            label: "이중선 (double)"
        }
    ], fn = ({ onClose: h, currentDef: u, onApply: i, onInsertBreak: k })=>{
        const [t, l] = n.useState(1), [x, g] = n.useState("equal"), [C, N] = n.useState(1134), [S, E] = n.useState([]), [P, L] = n.useState("none");
        n.useEffect(()=>{
            u && (l(u.count), g(u.type === "custom" ? "custom" : "equal"), N(u.gap), L(u.separatorType), u.widths.length > 0 && E([
                ...u.widths
            ]));
        }, [
            u
        ]), n.useEffect(()=>{
            E((y)=>Array.from({
                    length: t
                }, (F, V)=>V < y.length ? y[V] : 8504));
        }, [
            t
        ]);
        const $ = (y, m, F)=>Math.max(m, Math.min(F, y)), b = (y)=>{
            l($(y, 1, 5));
        }, I = (y, m)=>{
            E((F)=>{
                const V = [
                    ...F
                ];
                return V[y] = Math.max(0, m), V;
            });
        }, D = ()=>{
            const y = {
                count: t,
                type: x,
                gap: C,
                separatorType: P
            };
            x === "custom" && S.length === t && (y.widths = [
                ...S
            ]), i(y);
        }, v = ()=>{
            k();
        }, z = (()=>{
            if (x === "custom" && S.length === t) {
                const y = S.reduce((m, F)=>m + F, 0);
                if (y > 0) return S.map((m)=>m / y * 100);
            }
            return Array.from({
                length: t
            }, ()=>100 / t);
        })();
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (y)=>y.stopPropagation(),
                children: [
                    e.jsx("h3", {
                        children: "다단 설정"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "단 수"
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 1,
                                max: 5,
                                value: t,
                                onChange: (y)=>b(Number(y.target.value))
                            }),
                            e.jsx("label", {
                                children: "유형"
                            }),
                            e.jsxs("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 6
                                },
                                children: [
                                    e.jsxs("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6
                                        },
                                        children: [
                                            e.jsx("input", {
                                                type: "radio",
                                                name: "colType",
                                                checked: x === "equal",
                                                onChange: ()=>g("equal")
                                            }),
                                            e.jsx("span", {
                                                style: {
                                                    fontSize: "0.82rem"
                                                },
                                                children: "균등 (equal)"
                                            })
                                        ]
                                    }),
                                    e.jsxs("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6
                                        },
                                        children: [
                                            e.jsx("input", {
                                                type: "radio",
                                                name: "colType",
                                                checked: x === "custom",
                                                onChange: ()=>g("custom")
                                            }),
                                            e.jsx("span", {
                                                style: {
                                                    fontSize: "0.82rem"
                                                },
                                                children: "사용자 지정 (custom)"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            e.jsx("label", {
                                children: "간격 (HWPUNIT)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 0,
                                value: C,
                                onChange: (y)=>N(Math.max(0, Number(y.target.value)))
                            }),
                            e.jsx("label", {
                                children: "구분선"
                            }),
                            e.jsx("select", {
                                value: P,
                                onChange: (y)=>L(y.target.value),
                                style: {
                                    padding: "5px 10px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    background: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    fontSize: "0.85rem",
                                    width: "100%"
                                },
                                children: xn.map((y)=>e.jsx("option", {
                                        value: y.value,
                                        children: y.label
                                    }, y.value))
                            })
                        ]
                    }),
                    x === "custom" && t > 1 && e.jsxs(e.Fragment, {
                        children: [
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "12px 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "개별 단 너비 (HWPUNIT)"
                            }),
                            e.jsx("div", {
                                className: "hwp-dialog-grid",
                                children: S.map((y, m)=>e.jsxs(pt.Fragment, {
                                        children: [
                                            e.jsxs("label", {
                                                children: [
                                                    "단 ",
                                                    m + 1
                                                ]
                                            }),
                                            e.jsx("input", {
                                                type: "number",
                                                min: 0,
                                                value: y,
                                                onChange: (F)=>I(m, Number(F.target.value))
                                            })
                                        ]
                                    }, m))
                            })
                        ]
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "미리보기"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 2,
                            height: 80,
                            border: "1px solid var(--border-color)",
                            borderRadius: "var(--radius-sm)",
                            padding: 8,
                            background: "var(--bg-secondary, #f5f5f5)",
                            alignItems: "stretch"
                        },
                        children: z.map((y, m)=>e.jsxs(pt.Fragment, {
                                children: [
                                    e.jsx("div", {
                                        style: {
                                            flex: `0 0 ${y}%`,
                                            background: "var(--bg-primary, #fff)",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.75rem",
                                            color: "var(--text-secondary)"
                                        },
                                        children: m + 1
                                    }),
                                    m < z.length - 1 && P !== "none" && e.jsx("div", {
                                        style: {
                                            width: 1,
                                            alignSelf: "stretch",
                                            borderLeft: P === "dashed" ? "1px dashed var(--text-secondary)" : P === "double" ? "3px double var(--text-secondary)" : "1px solid var(--text-secondary)"
                                        }
                                    })
                                ]
                            }, m))
                    }),
                    e.jsx("div", {
                        style: {
                            margin: "12px 0 0",
                            textAlign: "center"
                        },
                        children: e.jsx("button", {
                            onClick: v,
                            style: {
                                padding: "6px 16px",
                                border: "1px solid var(--border-color)",
                                borderRadius: "var(--radius-sm)",
                                background: "var(--bg-secondary)",
                                color: "var(--text-primary)",
                                fontSize: "0.85rem",
                                cursor: "pointer"
                            },
                            children: "단 나누기 삽입"
                        })
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: h,
                                children: "취소"
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: D,
                                children: "적용"
                            })
                        ]
                    })
                ]
            })
        });
    }, gn = {
        checkbox: "☑",
        radio: "◉",
        combo: "▼",
        text: "✎",
        button: "▣"
    }, bn = {
        checkbox: "체크박스",
        radio: "라디오",
        combo: "콤보박스",
        text: "텍스트",
        button: "버튼"
    }, mn = ({ onClose: h, formObjects: u, onRefresh: i, onSetValue: k, onSetValueInCell: t, editMode: l })=>{
        const [x, g] = n.useState({}), C = (b)=>x[b.index] !== void 0 ? x[b.index] : b.value, N = (b, I)=>{
            g((D)=>({
                    ...D,
                    [b]: I
                }));
        }, S = (b)=>{
            const I = C(b);
            l === "cell" ? t(b.index, I) : k(b.index, I), g((D)=>{
                const v = {
                    ...D
                };
                return delete v[b.index], v;
            }), i();
        }, E = (b)=>{
            const I = b.checked ? "0" : "1";
            N(b.index, I);
        }, P = (b)=>{
            const I = b.checked ? "0" : "1";
            N(b.index, I);
        }, L = {
            body: "본문",
            cell: "셀",
            header: "머리말",
            footer: "꼬리말",
            footnote: "각주"
        }, $ = (b)=>{
            switch(b.type){
                case "checkbox":
                    {
                        const I = x[b.index] !== void 0 ? x[b.index] === "1" : b.checked ?? !1;
                        return e.jsxs("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                e.jsx("button", {
                                    onClick: ()=>E(b),
                                    style: {
                                        fontSize: "1.2rem",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0,
                                        color: "var(--text-primary)"
                                    },
                                    children: I ? "☑" : "☐"
                                }),
                                e.jsx("span", {
                                    style: {
                                        fontSize: "0.82rem",
                                        color: "var(--text-secondary)"
                                    },
                                    children: I ? "선택됨" : "선택 안 됨"
                                })
                            ]
                        });
                    }
                case "radio":
                    {
                        const I = x[b.index] !== void 0 ? x[b.index] === "1" : b.checked ?? !1;
                        return e.jsxs("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8
                            },
                            children: [
                                e.jsx("button", {
                                    onClick: ()=>P(b),
                                    style: {
                                        fontSize: "1.2rem",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0,
                                        color: "var(--text-primary)"
                                    },
                                    children: I ? "◉" : "○"
                                }),
                                e.jsxs("span", {
                                    style: {
                                        fontSize: "0.82rem",
                                        color: "var(--text-secondary)"
                                    },
                                    children: [
                                        I ? "선택됨" : "선택 안 됨",
                                        b.groupName && e.jsxs("span", {
                                            style: {
                                                marginLeft: 6,
                                                color: "var(--text-tertiary, #999)"
                                            },
                                            children: [
                                                "(그룹: ",
                                                b.groupName,
                                                ")"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                case "combo":
                    {
                        const I = C(b);
                        return e.jsxs("select", {
                            value: I,
                            onChange: (D)=>N(b.index, D.target.value),
                            style: {
                                width: "100%",
                                padding: "5px 10px",
                                border: "1px solid var(--border-color)",
                                borderRadius: "var(--radius-sm)",
                                background: "var(--bg-primary)",
                                color: "var(--text-primary)",
                                fontSize: "0.85rem"
                            },
                            children: [
                                (!b.options || b.options.length === 0) && e.jsx("option", {
                                    value: "",
                                    children: "-- 옵션 없음 --"
                                }),
                                b.options?.map((D, v)=>e.jsx("option", {
                                        value: D,
                                        children: D
                                    }, v))
                            ]
                        });
                    }
                case "text":
                    {
                        const I = C(b);
                        return e.jsx("input", {
                            type: "text",
                            value: I,
                            onChange: (D)=>N(b.index, D.target.value),
                            style: {
                                width: "100%",
                                padding: "5px 10px",
                                border: "1px solid var(--border-color)",
                                borderRadius: "var(--radius-sm)",
                                background: "var(--bg-primary)",
                                color: "var(--text-primary)",
                                fontSize: "0.85rem",
                                boxSizing: "border-box"
                            }
                        });
                    }
                case "button":
                    return e.jsx("span", {
                        style: {
                            fontSize: "0.82rem",
                            color: "var(--text-secondary)",
                            fontStyle: "italic"
                        },
                        children: "버튼 (읽기 전용)"
                    });
                default:
                    return null;
            }
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (b)=>b.stopPropagation(),
                style: {
                    minWidth: 440
                },
                children: [
                    e.jsx("h3", {
                        children: "양식 개체"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 12,
                            fontSize: "0.82rem"
                        },
                        children: [
                            e.jsx("span", {
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: "편집 모드:"
                            }),
                            e.jsx("span", {
                                style: {
                                    padding: "2px 8px",
                                    borderRadius: "var(--radius-sm)",
                                    background: "var(--primary-light, #e8f0fe)",
                                    color: "var(--primary, #0046C8)",
                                    fontWeight: 500
                                },
                                children: L[l] || l
                            }),
                            e.jsxs("span", {
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: [
                                    "(",
                                    u.length,
                                    "개 개체)"
                                ]
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: {
                            maxHeight: 400,
                            overflowY: "auto",
                            border: "1px solid var(--border-color)",
                            borderRadius: "var(--radius-sm)",
                            marginBottom: 12
                        },
                        children: u.length === 0 ? e.jsx("div", {
                            style: {
                                padding: 24,
                                textAlign: "center",
                                color: "var(--text-secondary)",
                                fontSize: "0.82rem"
                            },
                            children: "양식 개체가 없습니다"
                        }) : u.map((b)=>e.jsxs("div", {
                                style: {
                                    padding: "12px",
                                    borderBottom: "1px solid var(--border-color)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8
                                },
                                children: [
                                    e.jsxs("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            e.jsxs("span", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 4,
                                                    padding: "2px 8px",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-secondary, #f0f0f0)",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 500,
                                                    color: "var(--text-secondary)",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        children: gn[b.type]
                                                    }),
                                                    e.jsx("span", {
                                                        children: bn[b.type]
                                                    })
                                                ]
                                            }),
                                            e.jsx("span", {
                                                style: {
                                                    fontWeight: 500,
                                                    fontSize: "0.88rem",
                                                    color: "var(--text-primary)",
                                                    flex: 1
                                                },
                                                children: b.name || `(이름 없음 #${b.index})`
                                            }),
                                            e.jsxs("span", {
                                                style: {
                                                    fontSize: "0.78rem",
                                                    color: "var(--text-secondary)",
                                                    maxWidth: 120,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                title: `현재 값: ${b.value}`,
                                                children: [
                                                    "현재: ",
                                                    b.value || "(없음)"
                                                ]
                                            })
                                        ]
                                    }),
                                    e.jsx("div", {
                                        children: $(b)
                                    }),
                                    b.type !== "button" && e.jsx("div", {
                                        style: {
                                            textAlign: "right"
                                        },
                                        children: e.jsx("button", {
                                            onClick: ()=>S(b),
                                            style: {
                                                padding: "4px 14px",
                                                border: "1px solid var(--border-color)",
                                                borderRadius: "var(--radius-sm)",
                                                background: "var(--primary, #0046C8)",
                                                color: "#fff",
                                                fontSize: "0.78rem",
                                                cursor: "pointer"
                                            },
                                            children: "값 설정"
                                        })
                                    })
                                ]
                            }, b.index))
                    }),
                    e.jsx("div", {
                        className: "hwp-dialog-actions",
                        children: e.jsx("button", {
                            onClick: h,
                            children: "닫기"
                        })
                    })
                ]
            })
        });
    }, yn = [
        {
            value: "1.2.3.",
            label: "1. 2. 3."
        },
        {
            value: "가.나.다.",
            label: "가. 나. 다."
        },
        {
            value: "(1)(2)(3)",
            label: "(1) (2) (3)"
        },
        {
            value: "①②③",
            label: "① ② ③"
        },
        {
            value: "I.II.III.",
            label: "I. II. III."
        }
    ], vn = [
        "●",
        "○",
        "■",
        "□",
        "◆",
        "◇",
        "▶",
        "▷",
        "★",
        "☆",
        "✓",
        "※",
        "→",
        "-",
        "·"
    ], Cn = ({ onClose: h, numberingList: u, bulletList: i, onRefreshLists: k, onCreateNumbering: t, onApplyNumbering: l, onApplyBullet: x, onRestartNumbering: g, onRemoveNumbering: C })=>{
        const [N, S] = n.useState("numbering"), [E, P] = n.useState(null), [L, $] = n.useState("1.2.3."), [b, I] = n.useState(1), [D, v] = n.useState(0), [c, z] = n.useState(1), [y, m] = n.useState(null), [F, V] = n.useState(null), [j, p] = n.useState(0), H = ()=>{
            t({
                format: L,
                startNumber: b
            }), k();
        }, K = ()=>{
            E !== null && l(E, D);
        }, A = ()=>{
            E !== null && g(E, c);
        }, te = ()=>{
            C();
        }, Y = ()=>{
            y !== null && x(y, j);
        }, re = (o)=>{
            V(o);
            const f = i.find((U)=>U.symbol === o);
            f && m(f.id);
        }, R = (o)=>{
            switch(o){
                case "1.2.3.":
                    return "1. 2. 3.";
                case "가.나.다.":
                    return "가. 나. 다.";
                case "(1)(2)(3)":
                    return "(1) (2) (3)";
                case "①②③":
                    return "① ② ③";
                case "I.II.III.":
                    return "I. II. III.";
                default:
                    return o;
            }
        }, w = (o)=>({
                flex: 1,
                padding: "8px 12px",
                border: "none",
                borderBottom: o ? "2px solid var(--primary, #0046C8)" : "2px solid transparent",
                background: "transparent",
                color: o ? "var(--primary, #0046C8)" : "var(--text-secondary)",
                fontWeight: o ? 600 : 400,
                fontSize: "0.85rem",
                cursor: "pointer"
            });
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (o)=>o.stopPropagation(),
                style: {
                    minWidth: 420
                },
                children: [
                    e.jsx("h3", {
                        children: "번호/글머리표"
                    }),
                    e.jsxs("div", {
                        style: {
                            display: "flex",
                            borderBottom: "1px solid var(--border-color)",
                            marginBottom: 12
                        },
                        children: [
                            e.jsx("button", {
                                style: w(N === "numbering"),
                                onClick: ()=>S("numbering"),
                                children: "번호 매기기"
                            }),
                            e.jsx("button", {
                                style: w(N === "bullets"),
                                onClick: ()=>S("bullets"),
                                children: "글머리표"
                            })
                        ]
                    }),
                    N === "numbering" && e.jsxs("div", {
                        children: [
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "등록된 번호 목록"
                            }),
                            e.jsx("div", {
                                style: {
                                    maxHeight: 160,
                                    overflowY: "auto",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm)",
                                    marginBottom: 12
                                },
                                children: u.length === 0 ? e.jsx("div", {
                                    style: {
                                        padding: 12,
                                        textAlign: "center",
                                        color: "var(--text-secondary)",
                                        fontSize: "0.82rem"
                                    },
                                    children: "등록된 번호 정의가 없습니다"
                                }) : u.map((o)=>e.jsxs("div", {
                                        onClick: ()=>P(o.id),
                                        style: {
                                            padding: "8px 12px",
                                            cursor: "pointer",
                                            background: E === o.id ? "var(--primary-light, #e8f0fe)" : "transparent",
                                            borderBottom: "1px solid var(--border-color)",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            fontSize: "0.85rem"
                                        },
                                        children: [
                                            e.jsxs("span", {
                                                children: [
                                                    e.jsxs("strong", {
                                                        children: [
                                                            "#",
                                                            o.id
                                                        ]
                                                    }),
                                                    " ",
                                                    e.jsx("span", {
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: R(o.format)
                                                    })
                                                ]
                                            }),
                                            e.jsxs("span", {
                                                style: {
                                                    fontSize: "0.78rem",
                                                    color: "var(--text-secondary)"
                                                },
                                                children: [
                                                    "시작: ",
                                                    o.startNumber
                                                ]
                                            })
                                        ]
                                    }, o.id))
                            }),
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "새 번호 만들기"
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "형식"
                                    }),
                                    e.jsx("select", {
                                        value: L,
                                        onChange: (o)=>$(o.target.value),
                                        style: {
                                            padding: "5px 10px",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            background: "var(--bg-primary)",
                                            color: "var(--text-primary)",
                                            fontSize: "0.85rem",
                                            width: "100%"
                                        },
                                        children: yn.map((o)=>e.jsx("option", {
                                                value: o.value,
                                                children: o.label
                                            }, o.value))
                                    }),
                                    e.jsx("label", {
                                        children: "시작 번호"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 1,
                                        value: b,
                                        onChange: (o)=>I(Math.max(1, Number(o.target.value)))
                                    })
                                ]
                            }),
                            e.jsx("div", {
                                style: {
                                    textAlign: "right",
                                    margin: "8px 0 12px"
                                },
                                children: e.jsx("button", {
                                    onClick: H,
                                    style: {
                                        padding: "5px 14px",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--bg-secondary)",
                                        color: "var(--text-primary)",
                                        fontSize: "0.82rem",
                                        cursor: "pointer"
                                    },
                                    children: "번호 생성"
                                })
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "수준 (Level)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        max: 9,
                                        value: D,
                                        onChange: (o)=>v(Math.max(0, Math.min(9, Number(o.target.value))))
                                    })
                                ]
                            }),
                            E !== null && e.jsxs("div", {
                                style: {
                                    margin: "12px 0"
                                },
                                children: [
                                    e.jsx("h4", {
                                        style: {
                                            fontSize: "0.9rem",
                                            margin: "0 0 8px",
                                            color: "var(--text-primary)"
                                        },
                                        children: "번호 다시 시작"
                                    }),
                                    e.jsxs("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            e.jsx("label", {
                                                style: {
                                                    fontSize: "0.82rem",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: "시작 번호"
                                            }),
                                            e.jsx("input", {
                                                type: "number",
                                                min: 1,
                                                value: c,
                                                onChange: (o)=>z(Math.max(1, Number(o.target.value))),
                                                style: {
                                                    width: 80
                                                }
                                            }),
                                            e.jsx("button", {
                                                onClick: A,
                                                style: {
                                                    padding: "5px 12px",
                                                    border: "1px solid var(--border-color)",
                                                    borderRadius: "var(--radius-sm)",
                                                    background: "var(--bg-secondary)",
                                                    color: "var(--text-primary)",
                                                    fontSize: "0.82rem",
                                                    cursor: "pointer",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: "다시 시작"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-actions",
                                children: [
                                    e.jsx("button", {
                                        onClick: te,
                                        children: "번호 제거"
                                    }),
                                    e.jsx("button", {
                                        className: "primary",
                                        onClick: K,
                                        disabled: E === null,
                                        children: "적용"
                                    })
                                ]
                            })
                        ]
                    }),
                    N === "bullets" && e.jsxs("div", {
                        children: [
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "0 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "글머리표 기호"
                            }),
                            e.jsx("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: 4,
                                    marginBottom: 12
                                },
                                children: vn.map((o)=>e.jsx("button", {
                                        onClick: ()=>re(o),
                                        style: {
                                            width: "100%",
                                            aspectRatio: "1",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                            border: F === o ? "2px solid var(--primary, #0046C8)" : "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            background: F === o ? "var(--primary-light, #e8f0fe)" : "var(--bg-primary)",
                                            color: "var(--text-primary)",
                                            cursor: "pointer"
                                        },
                                        children: o
                                    }, o))
                            }),
                            i.length > 0 && e.jsxs(e.Fragment, {
                                children: [
                                    e.jsx("h4", {
                                        style: {
                                            fontSize: "0.9rem",
                                            margin: "0 0 8px",
                                            color: "var(--text-primary)"
                                        },
                                        children: "등록된 글머리표"
                                    }),
                                    e.jsx("div", {
                                        style: {
                                            maxHeight: 120,
                                            overflowY: "auto",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            marginBottom: 12
                                        },
                                        children: i.map((o)=>e.jsxs("div", {
                                                onClick: ()=>{
                                                    m(o.id), V(o.symbol);
                                                },
                                                style: {
                                                    padding: "8px 12px",
                                                    cursor: "pointer",
                                                    background: y === o.id ? "var(--primary-light, #e8f0fe)" : "transparent",
                                                    borderBottom: "1px solid var(--border-color)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8,
                                                    fontSize: "0.85rem"
                                                },
                                                children: [
                                                    e.jsx("span", {
                                                        style: {
                                                            fontSize: "1.1rem"
                                                        },
                                                        children: o.symbol
                                                    }),
                                                    e.jsxs("span", {
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: [
                                                            "#",
                                                            o.id
                                                        ]
                                                    })
                                                ]
                                            }, o.id))
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "수준 (Level)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        max: 9,
                                        value: j,
                                        onChange: (o)=>p(Math.max(0, Math.min(9, Number(o.target.value))))
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-actions",
                                children: [
                                    e.jsx("button", {
                                        onClick: te,
                                        children: "글머리표 제거"
                                    }),
                                    e.jsx("button", {
                                        className: "primary",
                                        onClick: Y,
                                        disabled: y === null,
                                        children: "적용"
                                    })
                                ]
                            })
                        ]
                    }),
                    e.jsx("div", {
                        style: {
                            textAlign: "right",
                            marginTop: 8
                        },
                        children: e.jsx("button", {
                            onClick: h,
                            children: "닫기"
                        })
                    })
                ]
            })
        });
    }, Fr = [
        {
            label: "Greek",
            symbols: [
                "α",
                "β",
                "γ",
                "δ",
                "ε",
                "ζ",
                "η",
                "θ",
                "ι",
                "κ",
                "λ",
                "μ",
                "ν",
                "ξ",
                "π",
                "ρ",
                "σ",
                "τ",
                "υ",
                "φ",
                "χ",
                "ψ",
                "ω"
            ]
        },
        {
            label: "Operators",
            symbols: [
                "+",
                "−",
                "×",
                "÷",
                "±",
                "∓",
                "·",
                "∘",
                "⊕",
                "⊗",
                "∑",
                "∏",
                "∫",
                "∮"
            ]
        },
        {
            label: "Relations",
            symbols: [
                "=",
                "≠",
                "<",
                ">",
                "≤",
                "≥",
                "≈",
                "∝",
                "∞",
                "∈",
                "∉",
                "⊂",
                "⊃",
                "∪",
                "∩"
            ]
        },
        {
            label: "Arrows",
            symbols: [
                "←",
                "→",
                "↑",
                "↓",
                "↔",
                "⇐",
                "⇒",
                "⇔"
            ]
        }
    ], jn = [
        {
            label: "a/b",
            insert: "{a} over {b}"
        },
        {
            label: "√",
            insert: "sqrt {a}"
        },
        {
            label: "x²",
            insert: "{x} ^{2}"
        },
        {
            label: "x₂",
            insert: "{x} _{2}"
        },
        {
            label: "∑",
            insert: "sum from {i=1} to {n}"
        },
        {
            label: "∫",
            insert: "int from {a} to {b}"
        },
        {
            label: "matrix",
            insert: "left( matrix {a # b ## c # d} right)"
        }
    ], In = ({ mode: h, onClose: u, equationProps: i, onInsert: k, onApply: t, onRenderPreview: l })=>{
        const [x, g] = n.useState(i?.script ?? ""), [C, N] = n.useState(i?.fontSize ?? 10), [S, E] = n.useState(null), [P, L] = n.useState(0), $ = n.useRef(null), b = n.useCallback((v)=>{
            const c = $.current;
            if (!c) {
                g((j)=>j + v);
                return;
            }
            const z = c.selectionStart, y = c.selectionEnd, m = x.slice(0, z), F = x.slice(y), V = m + v + F;
            g(V), requestAnimationFrame(()=>{
                c.selectionStart = z + v.length, c.selectionEnd = z + v.length, c.focus();
            });
        }, [
            x
        ]), I = ()=>{
            const v = l(x);
            E(v);
        }, D = ()=>{
            h === "insert" && k ? k(x, C) : h === "edit" && t && t({
                script: x,
                fontSize: C,
                textColor: i?.textColor ?? 0,
                baselineShift: i?.baselineShift ?? 0
            }), u();
        };
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: u,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (v)=>v.stopPropagation(),
                style: {
                    width: 600,
                    maxWidth: "90vw"
                },
                children: [
                    e.jsx("h3", {
                        children: h === "insert" ? "수식 삽입" : "수식 편집"
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-grid",
                        children: [
                            e.jsx("label", {
                                children: "수식 스크립트"
                            }),
                            e.jsx("div", {
                                style: {
                                    gridColumn: "1 / -1"
                                },
                                children: e.jsx("textarea", {
                                    ref: $,
                                    value: x,
                                    onChange: (v)=>g(v.target.value),
                                    rows: 6,
                                    style: {
                                        width: "100%",
                                        fontFamily: 'Consolas, "Courier New", monospace',
                                        fontSize: "0.9rem",
                                        padding: "10px",
                                        border: "1px solid var(--border-color)",
                                        borderRadius: "var(--radius-sm, 4px)",
                                        background: "var(--bg-primary)",
                                        color: "var(--text-primary)",
                                        resize: "vertical",
                                        boxSizing: "border-box"
                                    },
                                    placeholder: "수식을 입력하세요... (예: {a} over {b})"
                                })
                            }),
                            e.jsx("label", {
                                children: "글자 크기 (pt)"
                            }),
                            e.jsx("input", {
                                type: "number",
                                min: 1,
                                max: 200,
                                value: C,
                                onChange: (v)=>N(Math.max(1, Number(v.target.value))),
                                style: {
                                    width: 100
                                }
                            })
                        ]
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "기호 팔레트"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 4,
                            marginBottom: 8,
                            flexWrap: "wrap"
                        },
                        children: Fr.map((v, c)=>e.jsx("button", {
                                onClick: ()=>L(c),
                                style: {
                                    padding: "4px 10px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm, 4px)",
                                    background: P === c ? "rgba(var(--primary-rgb), 0.1)" : "var(--bg-primary)",
                                    color: P === c ? "var(--primary)" : "var(--text-secondary)",
                                    fontSize: "0.78rem",
                                    fontWeight: P === c ? 600 : 400,
                                    cursor: "pointer"
                                },
                                children: v.label
                            }, v.label))
                    }),
                    e.jsx("div", {
                        className: "hwp-symbol-palette",
                        children: Fr[P].symbols.map((v, c)=>e.jsx("button", {
                                className: "hwp-symbol-btn",
                                onClick: ()=>b(v),
                                title: v,
                                children: v
                            }, `${P}-${c}`))
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "템플릿"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 4,
                            flexWrap: "wrap",
                            marginBottom: 12
                        },
                        children: jn.map((v)=>e.jsx("button", {
                                onClick: ()=>b(v.insert),
                                style: {
                                    padding: "6px 12px",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "var(--radius-sm, 4px)",
                                    background: "var(--bg-primary)",
                                    color: "var(--text-primary)",
                                    fontSize: "0.85rem",
                                    cursor: "pointer"
                                },
                                title: v.insert,
                                children: v.label
                            }, v.label))
                    }),
                    e.jsx("h4", {
                        style: {
                            fontSize: "0.9rem",
                            margin: "12px 0 8px",
                            color: "var(--text-primary)"
                        },
                        children: "미리보기"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            marginBottom: 8
                        },
                        children: e.jsx("button", {
                            onClick: I,
                            style: {
                                padding: "6px 16px",
                                border: "1px solid var(--border-color)",
                                borderRadius: "var(--radius-sm, 4px)",
                                background: "var(--bg-secondary)",
                                color: "var(--text-primary)",
                                fontSize: "0.85rem",
                                cursor: "pointer"
                            },
                            children: "미리보기"
                        })
                    }),
                    e.jsx("div", {
                        className: "hwp-equation-preview",
                        children: S ? e.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: S
                            }
                        }) : e.jsx("span", {
                            style: {
                                fontSize: "0.85rem",
                                color: "var(--text-tertiary)"
                            },
                            children: "미리보기 없음"
                        })
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        children: [
                            e.jsx("button", {
                                onClick: u,
                                children: "취소"
                            }),
                            e.jsx("button", {
                                className: "primary",
                                onClick: D,
                                children: h === "insert" ? "삽입" : "적용"
                            })
                        ]
                    })
                ]
            })
        });
    }, Or = [
        {
            label: "A4",
            width: 59528,
            height: 84188
        },
        {
            label: "B5",
            width: 51592,
            height: 72852
        },
        {
            label: "Letter",
            width: 61200,
            height: 79200
        },
        {
            label: "Legal",
            width: 61200,
            height: 100800
        },
        {
            label: "사용자 지정 (Custom)",
            width: 0,
            height: 0
        }
    ], wn = [
        {
            value: "new_page",
            label: "새 페이지 (new_page)"
        },
        {
            value: "continuous",
            label: "연속 (continuous)"
        },
        {
            value: "odd_page",
            label: "홀수 쪽 (odd_page)"
        },
        {
            value: "even_page",
            label: "짝수 쪽 (even_page)"
        }
    ], kn = [
        {
            value: "horizontal",
            label: "가로 (horizontal)"
        },
        {
            value: "vertical",
            label: "세로 (vertical)"
        }
    ], Sn = ({ onClose: h, pageDef: u, onApply: i, sectionDef: k, onApplySectionDef: t, pageHide: l, onApplyPageHide: x })=>{
        const [g, C] = n.useState("paper"), [N, S] = n.useState(u.width), [E, P] = n.useState(u.height), [L, $] = n.useState(u.landscape), [b, I] = n.useState(u.marginTop), [D, v] = n.useState(u.marginBottom), [c, z] = n.useState(u.marginLeft), [y, m] = n.useState(u.marginRight), [F, V] = n.useState(""), [j, p] = n.useState(k?.startType ?? "new_page"), [H, K] = n.useState(k?.textDirection ?? "horizontal"), [A, te] = n.useState(l?.hideHeader ?? !1), [Y, re] = n.useState(l?.hideFooter ?? !1), [R, w] = n.useState(l?.hideMasterPage ?? !1), [o, f] = n.useState(l?.hideBorder ?? !1), [U, M] = n.useState(l?.hideFill ?? !1), [G, Q] = n.useState(l?.hidePageNumber ?? !1);
        n.useEffect(()=>{
            const J = Or.find((de)=>de.width === u.width && de.height === u.height);
            V(J ? J.label : "사용자 지정 (Custom)");
        }, [
            u.width,
            u.height
        ]), n.useEffect(()=>{
            k && (p(k.startType), K(k.textDirection));
        }, [
            k
        ]), n.useEffect(()=>{
            l && (te(l.hideHeader), re(l.hideFooter), w(l.hideMasterPage), f(l.hideBorder), M(l.hideFill), Q(l.hidePageNumber));
        }, [
            l
        ]);
        const Z = (J)=>{
            V(J);
            const de = Or.find((pe)=>pe.label === J);
            de && de.width > 0 && (S(de.width), P(de.height));
        }, se = ()=>{
            $((J)=>{
                const de = !J;
                if (de) {
                    const pe = N;
                    S(E), P(pe);
                } else {
                    const pe = N;
                    S(E), P(pe);
                }
                return de;
            });
        }, le = ()=>{
            i({
                width: N,
                height: E,
                marginTop: b,
                marginBottom: D,
                marginLeft: c,
                marginRight: y,
                landscape: L
            });
        }, he = ()=>{
            t({
                startType: j,
                textDirection: H
            });
        }, Ce = ()=>{
            x({
                hideHeader: A,
                hideFooter: Y,
                hideMasterPage: R,
                hideBorder: o,
                hideFill: U,
                hidePageNumber: G
            });
        }, Se = [
            {
                key: "paper",
                label: "용지 (Paper)"
            },
            {
                key: "section",
                label: "구역 (Section)"
            },
            {
                key: "hide",
                label: "감추기 (Hide)"
            }
        ];
        return e.jsx("div", {
            className: "hwp-dialog-overlay",
            onClick: h,
            children: e.jsxs("div", {
                className: "hwp-dialog",
                onClick: (J)=>J.stopPropagation(),
                style: {
                    width: 520,
                    maxWidth: "90vw"
                },
                children: [
                    e.jsx("h3", {
                        children: "페이지 설정"
                    }),
                    e.jsx("div", {
                        className: "hwp-dialog-tabs",
                        children: Se.map((J)=>e.jsx("button", {
                                className: `hwp-dialog-tab${g === J.key ? " active" : ""}`,
                                onClick: ()=>C(J.key),
                                children: J.label
                            }, J.key))
                    }),
                    g === "paper" && e.jsxs(e.Fragment, {
                        children: [
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "용지 크기"
                                    }),
                                    e.jsx("select", {
                                        value: F,
                                        onChange: (J)=>Z(J.target.value),
                                        children: Or.map((J)=>e.jsx("option", {
                                                value: J.label,
                                                children: J.label
                                            }, J.label))
                                    }),
                                    e.jsx("label", {
                                        children: "너비 (HWPUNIT)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: N,
                                        onChange: (J)=>{
                                            S(Number(J.target.value)), V("사용자 지정 (Custom)");
                                        }
                                    }),
                                    e.jsx("label", {
                                        children: "높이 (HWPUNIT)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: E,
                                        onChange: (J)=>{
                                            P(Number(J.target.value)), V("사용자 지정 (Custom)");
                                        }
                                    }),
                                    e.jsx("label", {
                                        children: "가로 (Landscape)"
                                    }),
                                    e.jsxs("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            e.jsx("input", {
                                                type: "checkbox",
                                                checked: L,
                                                onChange: se
                                            }),
                                            e.jsx("span", {
                                                style: {
                                                    fontSize: "0.82rem",
                                                    color: "var(--text-secondary)"
                                                },
                                                children: L ? "가로 방향" : "세로 방향"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            e.jsx("h4", {
                                style: {
                                    fontSize: "0.9rem",
                                    margin: "12px 0 8px",
                                    color: "var(--text-primary)"
                                },
                                children: "여백 (Margins)"
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-grid",
                                children: [
                                    e.jsx("label", {
                                        children: "위 (Top)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: b,
                                        onChange: (J)=>I(Number(J.target.value))
                                    }),
                                    e.jsx("label", {
                                        children: "아래 (Bottom)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: D,
                                        onChange: (J)=>v(Number(J.target.value))
                                    }),
                                    e.jsx("label", {
                                        children: "왼쪽 (Left)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: c,
                                        onChange: (J)=>z(Number(J.target.value))
                                    }),
                                    e.jsx("label", {
                                        children: "오른쪽 (Right)"
                                    }),
                                    e.jsx("input", {
                                        type: "number",
                                        min: 0,
                                        value: y,
                                        onChange: (J)=>m(Number(J.target.value))
                                    })
                                ]
                            }),
                            e.jsxs("div", {
                                className: "hwp-dialog-actions",
                                children: [
                                    e.jsx("button", {
                                        onClick: h,
                                        children: "취소"
                                    }),
                                    e.jsx("button", {
                                        className: "primary",
                                        onClick: le,
                                        children: "적용"
                                    })
                                ]
                            })
                        ]
                    }),
                    g === "section" && e.jsx(e.Fragment, {
                        children: k === null ? e.jsx("div", {
                            style: {
                                padding: 24,
                                textAlign: "center",
                                fontSize: "0.85rem",
                                color: "var(--text-tertiary)"
                            },
                            children: "구역 정의를 불러올 수 없습니다."
                        }) : e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-dialog-grid",
                                    children: [
                                        e.jsx("label", {
                                            children: "구역 시작"
                                        }),
                                        e.jsx("select", {
                                            value: j,
                                            onChange: (J)=>p(J.target.value),
                                            children: wn.map((J)=>e.jsx("option", {
                                                    value: J.value,
                                                    children: J.label
                                                }, J.value))
                                        }),
                                        e.jsx("label", {
                                            children: "텍스트 방향"
                                        }),
                                        e.jsx("select", {
                                            value: H,
                                            onChange: (J)=>K(J.target.value),
                                            children: kn.map((J)=>e.jsx("option", {
                                                    value: J.value,
                                                    children: J.label
                                                }, J.value))
                                        }),
                                        e.jsx("label", {
                                            children: "다단 수"
                                        }),
                                        e.jsxs("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "number",
                                                    value: k.columnCount,
                                                    readOnly: !0,
                                                    style: {
                                                        width: 80,
                                                        opacity: .7,
                                                        cursor: "not-allowed"
                                                    }
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.78rem",
                                                        color: "var(--text-tertiary)"
                                                    },
                                                    children: "다단 설정에서 변경"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-dialog-actions",
                                    children: [
                                        e.jsx("button", {
                                            onClick: h,
                                            children: "취소"
                                        }),
                                        e.jsx("button", {
                                            className: "primary",
                                            onClick: he,
                                            children: "적용"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    g === "hide" && e.jsx(e.Fragment, {
                        children: l === null ? e.jsx("div", {
                            style: {
                                padding: 24,
                                textAlign: "center",
                                fontSize: "0.85rem",
                                color: "var(--text-tertiary)"
                            },
                            children: "감추기 설정을 불러올 수 없습니다."
                        }) : e.jsxs(e.Fragment, {
                            children: [
                                e.jsxs("div", {
                                    className: "hwp-dialog-grid",
                                    children: [
                                        e.jsx("label", {
                                            children: "머리말 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: A,
                                                    onChange: (J)=>te(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: A ? "감춤" : "표시"
                                                })
                                            ]
                                        }),
                                        e.jsx("label", {
                                            children: "꼬리말 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: Y,
                                                    onChange: (J)=>re(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: Y ? "감춤" : "표시"
                                                })
                                            ]
                                        }),
                                        e.jsx("label", {
                                            children: "마스터페이지 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: R,
                                                    onChange: (J)=>w(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: R ? "감춤" : "표시"
                                                })
                                            ]
                                        }),
                                        e.jsx("label", {
                                            children: "테두리 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: o,
                                                    onChange: (J)=>f(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: o ? "감춤" : "표시"
                                                })
                                            ]
                                        }),
                                        e.jsx("label", {
                                            children: "배경 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: U,
                                                    onChange: (J)=>M(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: U ? "감춤" : "표시"
                                                })
                                            ]
                                        }),
                                        e.jsx("label", {
                                            children: "쪽 번호 감추기"
                                        }),
                                        e.jsxs("label", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8
                                            },
                                            children: [
                                                e.jsx("input", {
                                                    type: "checkbox",
                                                    checked: G,
                                                    onChange: (J)=>Q(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: G ? "감춤" : "표시"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "hwp-dialog-actions",
                                    children: [
                                        e.jsx("button", {
                                            onClick: h,
                                            children: "취소"
                                        }),
                                        e.jsx("button", {
                                            className: "primary",
                                            onClick: Ce,
                                            children: "적용"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }, Nn = {
        secIdx: 0,
        paraIdx: 0,
        charOffset: 0
    }, On = {
        fontFamily: "맑은 고딕",
        fontSize: 1e3,
        bold: !1,
        italic: !1,
        underline: !1,
        strikethrough: !1,
        textColor: 0,
        highlight: 65535
    }, Pn = {
        alignment: "justify",
        lineSpacing: 160,
        marginLeft: 0,
        marginRight: 0,
        indent: 0
    }, Rn = {
        width: 59528,
        height: 84188,
        marginTop: 5669,
        marginBottom: 4252,
        marginLeft: 4252,
        marginRight: 4252,
        landscape: !1
    };
    function Tn() {
        const h = n.useRef(null), [u, i] = n.useState(0), [k, t] = n.useState(0), [l, x] = n.useState(0), [g, C] = n.useState("1"), [N, S] = n.useState(100), [E, P] = n.useState(""), [L, $] = n.useState(!1), b = n.useRef({
            ...Nn
        }), [I, D] = n.useState(null), [v, c] = n.useState(null), z = n.useRef(null), [y, m] = n.useState(!1), [F, V] = n.useState([]), [j, p] = n.useState(!0), H = n.useCallback((O)=>{
            b.current = O, D(O);
        }, []), K = n.useRef({}), A = n.useRef({}), te = n.useRef(typeof window < "u" && window.devicePixelRatio || 1), Y = n.useRef({}), re = n.useRef({}), [R, w] = n.useState({
            ...On
        }), [o, f] = n.useState({
            ...Pn
        }), U = n.useRef([]), M = n.useRef([]), [G, Q] = n.useState(!1), [Z, se] = n.useState(!1), le = n.useRef(!1), he = n.useRef(null), [Ce, Se] = n.useState(!1), [J, de] = n.useState(!1), pe = n.useRef(null), [Fe, Ae] = n.useState(""), [De, Le] = n.useState(!1), [Ye, qe] = n.useState(!1), [Ge, Qe] = n.useState(!1), [B, q] = n.useState(!1), [W, ge] = n.useState(!1), [ee, ce] = n.useState(!1), [ne, ie] = n.useState(!1), [xe, Ee] = n.useState(3), [Ht, xt] = n.useState(3), [Xe, We] = n.useState("#000000"), [Ze, et] = n.useState("#FFFF00"), [tt, me] = n.useState("맑은 고딕"), [we, Ne] = n.useState("10"), [rt, Be] = n.useState(!1), [nt, at] = n.useState(""), [st, lt] = n.useState(""), [ot, ct] = n.useState(!1), [Ue, ve] = n.useState(""), [At, je] = n.useState("body"), Ve = n.useRef("body"), Ie = n.useCallback((O)=>{
            Ve.current = O, je(O);
        }, []), ft = n.useRef(null), gt = n.useRef(null), bt = n.useRef(null), [mt, yt] = n.useState(null), [vt, Ct] = n.useState(!1), [it, jt] = n.useState({
            ...Rn
        }), [It, dt] = n.useState([]), [wt, kt] = n.useState(!1), [St, Nt] = n.useState(!1), [Ot, Pt] = n.useState(!1), [Rt, Lt] = n.useState(!1), [Wt, Ut] = n.useState(""), [Vt, _t] = n.useState([]), Tt = n.useRef(null), Ft = n.useRef(null), _e = n.useRef(null), Dt = n.useRef(null), _ = n.useRef(null), Oe = n.useRef(null), Pe = n.useRef(null), ye = n.useRef(null), ze = n.useRef(null), ht = n.useRef(null), Me = n.useRef(null), Jt = n.useRef(null), Kt = n.useRef(null), Yt = n.useRef(null), qt = n.useRef(null), Gt = n.useRef(null), Qt = n.useRef(null), [Xt, Zt] = n.useState(!1), [er, tr] = n.useState(!1), [rr, nr] = n.useState(!1), [ar, sr] = n.useState(!1), [lr, or] = n.useState(!1), [cr, ir] = n.useState(!1), [dr, hr] = n.useState(!1), [ur, pr] = n.useState(!1), [xr, fr] = n.useState(!1), [gr, br] = n.useState(!1), [mr, yr] = n.useState(!1), [vr, Cr] = n.useState(!1), [jr, Ir] = n.useState(!1), [wr, kr] = n.useState(!1), [Sr, r] = n.useState(!1), [a, s] = n.useState(!1), [d, T] = n.useState(!1);
        return {
            docRef: h,
            pageCount: u,
            setPageCount: i,
            renderVer: k,
            setRenderVer: t,
            currentPage: l,
            setCurrentPage: x,
            pageInputVal: g,
            setPageInputVal: C,
            zoom: N,
            setZoom: S,
            fileName: E,
            setFileName: P,
            dirty: L,
            setDirty: $,
            cursorRef: b,
            cursor: I,
            setCursor: H,
            cursorRect: v,
            setCursorRect: c,
            selAnchorRef: z,
            hasSelection: y,
            setHasSelection: m,
            selRects: F,
            setSelRects: V,
            cursorVisible: j,
            setCursorVisible: p,
            pageCanvasRefs: K,
            overlayCanvasRefs: A,
            renderScaleRef: te,
            pageSizesRef: Y,
            canvasRefs: re,
            charProps: R,
            setCharProps: w,
            paraProps: o,
            setParaProps: f,
            undoStack: U,
            redoStack: M,
            canUndo: G,
            setCanUndo: Q,
            canRedo: Z,
            setCanRedo: se,
            composingRef: le,
            hiddenInputRef: he,
            isDragging: Ce,
            setIsDragging: Se,
            isDragSelecting: J,
            setIsDragSelecting: de,
            dragStartPos: pe,
            editorError: Fe,
            setEditorError: Ae,
            fontOpen: De,
            setFontOpen: Le,
            sizeOpen: Ye,
            setSizeOpen: qe,
            colorOpen: Ge,
            setColorOpen: Qe,
            highlightOpen: B,
            setHighlightOpen: q,
            exportOpen: W,
            setExportOpen: ge,
            spacingOpen: ee,
            setSpacingOpen: ce,
            tableDialogOpen: ne,
            setTableDialogOpen: ie,
            tableRows: xe,
            setTableRows: Ee,
            tableCols: Ht,
            setTableCols: xt,
            customTextColor: Xe,
            setCustomTextColor: We,
            customHighlight: Ze,
            setCustomHighlight: et,
            fontInput: tt,
            setFontInput: me,
            sizeInput: we,
            setSizeInput: Ne,
            findBarOpen: rt,
            setFindBarOpen: Be,
            findQuery: nt,
            setFindQuery: at,
            replaceQuery: st,
            setReplaceQuery: lt,
            caseSensitive: ot,
            setCaseSensitive: ct,
            findInfo: Ue,
            setFindInfo: ve,
            editMode: At,
            setEditMode: Ie,
            editModeRef: Ve,
            cellCtxRef: ft,
            hfCtxRef: gt,
            fnCtxRef: bt,
            contextMenu: mt,
            setContextMenu: yt,
            pageDefOpen: vt,
            setPageDefOpen: Ct,
            pageDef: it,
            setPageDef: jt,
            styleList: It,
            setStyleList: dt,
            styleOpen: wt,
            setStyleOpen: kt,
            showControlCodes: St,
            setShowControlCodes: Nt,
            showParaMarks: Ot,
            setShowParaMarks: Pt,
            bookmarkOpen: Rt,
            setBookmarkOpen: Lt,
            bookmarkName: Wt,
            setBookmarkName: Ut,
            bookmarkList: Vt,
            setBookmarkList: _t,
            fontBtnRef: Tt,
            fontDropRef: Ft,
            sizeBtnRef: _e,
            sizeDropRef: Dt,
            colorBtnRef: _,
            colorDropRef: Oe,
            hlBtnRef: Pe,
            hlDropRef: ye,
            exportBtnRef: ze,
            exportDropRef: ht,
            spacingBtnRef: Me,
            spacingDropRef: Jt,
            tableDialogRef: Kt,
            tableBtnRef: Yt,
            styleBtnRef: qt,
            styleDropRef: Gt,
            contextMenuRef: Qt,
            sidebarOpen: Xt,
            setSidebarOpen: Zt,
            clipboardHasContent: er,
            setClipboardHasContent: tr,
            clipboardHasControl: rr,
            setClipboardHasControl: nr,
            tablePropsOpen: ar,
            setTablePropsOpen: sr,
            cellPropsOpen: lr,
            setCellPropsOpen: or,
            shapeDialogOpen: cr,
            setShapeDialogOpen: ir,
            picturePropsOpen: dr,
            setPicturePropsOpen: hr,
            styleDialogOpen: ur,
            setStyleDialogOpen: pr,
            headerFooterDialogOpen: xr,
            setHeaderFooterDialogOpen: fr,
            fieldDialogOpen: gr,
            setFieldDialogOpen: br,
            bookmarkDialogOpen: mr,
            setBookmarkDialogOpen: yr,
            columnDialogOpen: vr,
            setColumnDialogOpen: Cr,
            formDialogOpen: jr,
            setFormDialogOpen: Ir,
            numberingDialogOpen: wr,
            setNumberingDialogOpen: kr,
            equationDialogOpen: Sr,
            setEquationDialogOpen: r,
            showTransparentBorders: a,
            setShowTransparentBorders: s,
            debugOverlay: d,
            setDebugOverlay: T
        };
    }
    function zt(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    function Fn(h) {
        const { editMode: u, getDoc: i, getCursor: k, getCursorRect: t, setCursor: l, setCursorRect: x, moveCursor: g, updateCursorDisplay: C, updateSelectionRects: N, getSelAnchor: S, setSelAnchor: E, setHasSelection: P, saveSnapshot: L, handleUndo: $, handleRedo: b, deleteSelection: I, insertText: D, deleteCharBefore: v, deleteCharAfter: c, toggleBold: z, toggleItalic: y, toggleUnderline: m, insertTextInCell: F, deleteTextInCell: V, splitParagraphInCell: j, applyCharFormatInCell: p, getCellCtx: H, enterCellMode: K, insertTextInHf: A, deleteTextInHf: te, splitParagraphInHf: Y, insertTextInFn: re, deleteTextInFn: R, splitParagraphInFn: w, setEditMode: o, clearCellCtx: f, clearHfCtx: U, clearFnCtx: M, rerenderCurrentPage: G, handleHtmlPaste: Q, handleCopy: Z, handleCut: se, setFindBarOpen: le, closeAllDropdowns: he, findNextControl: Ce, findPrevControl: Se, navigateNextEditable: J, composingRef: de, editModeRef: pe, hiddenInputRef: Fe } = h, Ae = n.useCallback((B)=>{
            const q = H();
            if (!q) {
                o("body"), f();
                return;
            }
            if (B.ctrlKey || B.metaKey) {
                switch(B.key.toLowerCase()){
                    case "z":
                        B.preventDefault(), $();
                        return;
                    case "y":
                        B.preventDefault(), b();
                        return;
                    case "b":
                        B.preventDefault(), p({
                            bold: !0
                        });
                        return;
                    case "i":
                        B.preventDefault(), p({
                            italic: !0
                        });
                        return;
                    case "u":
                        B.preventDefault(), p({
                            underline: !0
                        });
                        return;
                }
                return;
            }
            switch(B.key){
                case "Enter":
                    B.preventDefault(), j();
                    break;
                case "Backspace":
                    B.preventDefault(), V(!1);
                    break;
                case "Delete":
                    B.preventDefault(), V(!0);
                    break;
                case "Escape":
                    B.preventDefault(), o("body"), f();
                    break;
                case "Tab":
                    {
                        B.preventDefault();
                        const ge = i();
                        if (!ge) break;
                        try {
                            const ee = zt(ge.getTableDimensions(q.secIdx, q.parentParaIdx, q.controlIdx));
                            if (ee) {
                                const ce = ee.rows * ee.cols;
                                B.shiftKey ? q.cellIdx - 1 >= 0 && K(q.secIdx, q.parentParaIdx, q.controlIdx, q.cellIdx - 1) : q.cellIdx + 1 < ce && K(q.secIdx, q.parentParaIdx, q.controlIdx, q.cellIdx + 1);
                            }
                        } catch  {}
                        break;
                    }
            }
        }, [
            H,
            o,
            f,
            $,
            b,
            p,
            j,
            V,
            K,
            i
        ]), De = n.useCallback((B)=>{
            if (pe.current !== "header" && pe.current !== "footer") {
                o("body");
                return;
            }
            if (B.ctrlKey || B.metaKey) {
                switch(B.key.toLowerCase()){
                    case "z":
                        B.preventDefault(), $();
                        return;
                    case "y":
                        B.preventDefault(), b();
                        return;
                }
                return;
            }
            switch(B.key){
                case "Escape":
                    B.preventDefault(), o("body"), U();
                    break;
                case "Enter":
                    B.preventDefault(), Y();
                    break;
                case "Backspace":
                    B.preventDefault(), te(!1);
                    break;
                case "Delete":
                    B.preventDefault(), te(!0);
                    break;
            }
        }, [
            o,
            U,
            $,
            b,
            Y,
            te,
            pe
        ]), Le = n.useCallback((B)=>{
            if (pe.current !== "footnote") {
                o("body");
                return;
            }
            if (B.ctrlKey || B.metaKey) {
                switch(B.key.toLowerCase()){
                    case "z":
                        B.preventDefault(), $();
                        return;
                    case "y":
                        B.preventDefault(), b();
                        return;
                }
                return;
            }
            switch(B.key){
                case "Escape":
                    B.preventDefault(), o("body"), M();
                    break;
                case "Enter":
                    B.preventDefault(), w();
                    break;
                case "Backspace":
                    B.preventDefault(), R(!1);
                    break;
                case "Delete":
                    B.preventDefault(), R(!0);
                    break;
            }
        }, [
            o,
            M,
            $,
            b,
            w,
            R,
            pe
        ]), Ye = n.useCallback((B)=>{
            if (de.current) return;
            const q = i();
            if (!q) return;
            const W = k();
            if (!W) return;
            if (u === "cell") {
                Ae(B);
                return;
            }
            if (u === "header" || u === "footer") {
                De(B);
                return;
            }
            if (u === "footnote") {
                Le(B);
                return;
            }
            if (B.ctrlKey || B.metaKey) {
                switch(B.key.toLowerCase()){
                    case "z":
                        B.preventDefault(), $();
                        return;
                    case "y":
                        B.preventDefault(), b();
                        return;
                    case "b":
                        B.preventDefault(), z();
                        return;
                    case "i":
                        B.preventDefault(), y();
                        return;
                    case "u":
                        B.preventDefault(), m();
                        return;
                    case "f":
                        B.preventDefault(), le(!0);
                        return;
                    case "a":
                        {
                            B.preventDefault();
                            try {
                                const ee = q.getSectionCount();
                                if (ee === 0) return;
                                const ce = ee - 1, ne = q.getParagraphCount(ce) - 1, ie = q.getParagraphLength(ce, ne), xe = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, Ee = {
                                    secIdx: ce,
                                    paraIdx: ne,
                                    charOffset: ie
                                };
                                E(xe), l(Ee), N(xe, Ee), P(!0), C(Ee);
                            } catch  {}
                            return;
                        }
                    case "c":
                        {
                            B.preventDefault(), Z();
                            return;
                        }
                    case "x":
                        {
                            B.preventDefault(), se();
                            return;
                        }
                    case "v":
                        {
                            B.preventDefault(), Q();
                            return;
                        }
                    case "g":
                        {
                            B.preventDefault(), J();
                            return;
                        }
                }
                return;
            }
            if (B.key === "F11") {
                B.preventDefault(), B.shiftKey ? Se() : Ce();
                return;
            }
            switch(B.key){
                case "Enter":
                    {
                        if (B.preventDefault(), L(), S()) {
                            const ne = I();
                            ne && l(ne);
                        }
                        const ce = k();
                        try {
                            const ne = q.splitParagraph(ce.secIdx, ce.paraIdx, ce.charOffset), ie = zt(ne), xe = {
                                secIdx: ce.secIdx,
                                paraIdx: ie?.paraIdx ?? ce.paraIdx + 1,
                                charOffset: 0
                            };
                            g(xe);
                        } catch  {}
                        G();
                        break;
                    }
                case "Backspace":
                    B.preventDefault(), v();
                    break;
                case "Delete":
                    B.preventDefault(), c();
                    break;
                case "ArrowLeft":
                    {
                        B.preventDefault();
                        const ee = {
                            ...W
                        };
                        if (W.charOffset > 0) ee.charOffset = W.charOffset - 1;
                        else if (W.paraIdx > 0) {
                            ee.paraIdx = W.paraIdx - 1;
                            try {
                                ee.charOffset = q.getParagraphLength(W.secIdx, ee.paraIdx);
                            } catch  {
                                ee.charOffset = 0;
                            }
                        } else break;
                        B.shiftKey ? (S() || E({
                            ...W
                        }), l(ee), N(S(), ee), P(!0), C(ee)) : g(ee);
                        break;
                    }
                case "ArrowRight":
                    {
                        B.preventDefault();
                        const ee = {
                            ...W
                        };
                        try {
                            const ce = q.getParagraphLength(W.secIdx, W.paraIdx);
                            if (W.charOffset < ce) ee.charOffset = W.charOffset + 1;
                            else {
                                const ne = q.getParagraphCount(W.secIdx);
                                if (W.paraIdx < ne - 1) ee.paraIdx = W.paraIdx + 1, ee.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        B.shiftKey ? (S() || E({
                            ...W
                        }), l(ee), N(S(), ee), P(!0), C(ee)) : g(ee);
                        break;
                    }
                case "ArrowUp":
                    {
                        B.preventDefault();
                        const ee = t(), ce = ee ? ee.x : 0;
                        try {
                            const ne = q.moveVertical(W.secIdx, W.paraIdx, W.charOffset, -1, ce, 4294967295, 4294967295, 4294967295, 4294967295), ie = zt(ne);
                            if (ie) {
                                const xe = {
                                    secIdx: ie.sectionIndex ?? W.secIdx,
                                    paraIdx: ie.paragraphIndex ?? ie.paraIdx ?? W.paraIdx,
                                    charOffset: ie.charOffset ?? W.charOffset
                                };
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(xe), N(S(), xe), P(!0), C(xe)) : g(xe);
                            }
                        } catch  {
                            if (W.paraIdx > 0) {
                                const ne = {
                                    ...W,
                                    paraIdx: W.paraIdx - 1
                                };
                                try {
                                    ne.charOffset = Math.min(W.charOffset, q.getParagraphLength(W.secIdx, ne.paraIdx));
                                } catch  {
                                    ne.charOffset = 0;
                                }
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(ne), N(S(), ne), P(!0), C(ne)) : g(ne);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        B.preventDefault();
                        const ee = t(), ce = ee ? ee.x : 0;
                        try {
                            const ne = q.moveVertical(W.secIdx, W.paraIdx, W.charOffset, 1, ce, 4294967295, 4294967295, 4294967295, 4294967295), ie = zt(ne);
                            if (ie) {
                                const xe = {
                                    secIdx: ie.sectionIndex ?? W.secIdx,
                                    paraIdx: ie.paragraphIndex ?? ie.paraIdx ?? W.paraIdx,
                                    charOffset: ie.charOffset ?? W.charOffset
                                };
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(xe), N(S(), xe), P(!0), C(xe)) : g(xe);
                            }
                        } catch  {
                            try {
                                const ne = q.getParagraphCount(W.secIdx);
                                if (W.paraIdx < ne - 1) {
                                    const ie = {
                                        ...W,
                                        paraIdx: W.paraIdx + 1
                                    };
                                    ie.charOffset = Math.min(W.charOffset, q.getParagraphLength(W.secIdx, ie.paraIdx)), B.shiftKey ? (S() || E({
                                        ...W
                                    }), l(ie), N(S(), ie), P(!0), C(ie)) : g(ie);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        B.preventDefault();
                        try {
                            const ee = zt(q.getLineInfo(W.secIdx, W.paraIdx, W.charOffset)), ce = {
                                ...W,
                                charOffset: ee ? ee.charStart : 0
                            };
                            B.shiftKey ? (S() || E({
                                ...W
                            }), l(ce), N(S(), ce), P(!0), C(ce)) : g(ce);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        B.preventDefault();
                        try {
                            const ee = zt(q.getLineInfo(W.secIdx, W.paraIdx, W.charOffset)), ce = q.getParagraphLength(W.secIdx, W.paraIdx), ne = {
                                ...W,
                                charOffset: ee ? Math.min(ee.charEnd, ce) : ce
                            };
                            B.shiftKey ? (S() || E({
                                ...W
                            }), l(ne), N(S(), ne), P(!0), C(ne)) : g(ne);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    B.preventDefault(), D("	");
                    break;
                case "Escape":
                    he();
                    break;
            }
        }, [
            u,
            de,
            i,
            k,
            t,
            Ae,
            De,
            Le,
            $,
            b,
            z,
            y,
            m,
            D,
            I,
            v,
            c,
            L,
            g,
            G,
            N,
            C,
            l,
            x,
            E,
            P,
            S,
            Q,
            Z,
            se,
            le,
            he,
            Ce,
            Se,
            J
        ]), qe = n.useCallback(()=>{
            de.current = !0;
        }, [
            de
        ]), Ge = n.useCallback((B)=>{
            de.current = !1;
            const q = B.data;
            if (q) {
                const W = pe.current;
                W === "cell" ? F(q) : W === "header" || W === "footer" ? A(q) : W === "footnote" ? re(q) : D(q);
            }
            Fe.current && (Fe.current.value = "");
        }, [
            de,
            pe,
            Fe,
            D,
            F,
            A,
            re
        ]), Qe = n.useCallback((B)=>{
            if (de.current) return;
            const q = B.target, W = q.value;
            if (W) {
                const ge = pe.current;
                ge === "cell" ? F(W) : ge === "header" || ge === "footer" ? A(W) : ge === "footnote" ? re(W) : D(W), q.value = "";
            }
        }, [
            de,
            pe,
            D,
            F,
            A,
            re
        ]);
        return {
            handleKeyDown: Ye,
            handleIMECompositionStart: qe,
            handleIMECompositionEnd: Ge,
            handleIMEInput: Qe
        };
    }
    function Ke(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    function Dn(h) {
        const { getDoc: u, getCursor: i, getSelAnchor: k, getCellCtx: t, editMode: l, saveSnapshot: x, deleteSelection: g, setCursor: C, moveCursor: N, rerender: S, rerenderCurrentPage: E, insertText: P } = h, [L, $] = n.useState(!1), [b, I] = n.useState(!1), D = n.useCallback(()=>{
            const j = u();
            if (!j) return;
            const p = k();
            if (p) try {
                if (l === "cell") {
                    const H = t();
                    if (!H) return;
                    let K = p.charOffset, A = H.charOffset;
                    K > A && ([K, A] = [
                        A,
                        K
                    ]);
                    const te = j.copySelectionInCell(H.secIdx, H.parentParaIdx, H.controlIdx, H.cellIdx, H.cellParaIdx, K, A), Y = Ke(te);
                    Y?.text && navigator.clipboard.writeText(Y.text).catch(()=>{});
                } else {
                    const H = i();
                    let K = p.paraIdx, A = p.charOffset, te = H.paraIdx, Y = H.charOffset;
                    (K > te || K === te && A > Y) && ([K, te] = [
                        te,
                        K
                    ], [A, Y] = [
                        Y,
                        A
                    ]);
                    const re = j.copySelection(H.secIdx, K, A, te, Y), R = Ke(re);
                    R?.text && navigator.clipboard.writeText(R.text).catch(()=>{});
                }
                $(!0);
            } catch  {}
        }, [
            u,
            i,
            k,
            t,
            l
        ]), v = n.useCallback(()=>{
            if (!(!u() || !k())) {
                D(), x();
                try {
                    const H = g();
                    H && (C(H), N(H)), E();
                } catch  {}
            }
        }, [
            u,
            k,
            D,
            x,
            g,
            C,
            N,
            E
        ]), c = n.useCallback(()=>{
            const j = u();
            if (!j) return;
            const p = i();
            try {
                const H = j.copyControl(p.secIdx, p.paraIdx, p.charOffset);
                Ke(H)?.ok && (I(!0), $(!0));
            } catch  {}
        }, [
            u,
            i
        ]), z = n.useCallback(async ()=>{
            const j = u();
            if (!j) return;
            if (x(), k()) try {
                const H = g();
                H && C(H);
            } catch  {}
            try {
                const H = await navigator.clipboard.read();
                for (const K of H)if (K.types.includes("text/html")) {
                    const te = await (await K.getType("text/html")).text();
                    if (l === "cell") {
                        const Y = t();
                        if (!Y) return;
                        try {
                            const re = j.pasteHtmlInCell(Y.secIdx, Y.parentParaIdx, Y.controlIdx, Y.cellIdx, Y.cellParaIdx, Y.charOffset, te), R = Ke(re);
                            R?.ok && (Y.cellParaIdx = R.paraIdx ?? Y.cellParaIdx, Y.charOffset = R.charOffset ?? Y.charOffset);
                        } catch  {}
                    } else {
                        const Y = i();
                        try {
                            const re = j.pasteHtml(Y.secIdx, Y.paraIdx, Y.charOffset, te), R = Ke(re);
                            R?.ok && N({
                                secIdx: Y.secIdx,
                                paraIdx: R.paraIdx ?? Y.paraIdx,
                                charOffset: R.charOffset ?? 0
                            });
                        } catch  {}
                    }
                    S();
                    return;
                }
            } catch  {}
            try {
                const H = await navigator.clipboard.readText();
                H && P(H);
            } catch  {}
        }, [
            u,
            i,
            k,
            t,
            l,
            x,
            g,
            C,
            N,
            S,
            P
        ]), y = n.useCallback(()=>{
            const j = u();
            if (!j) return;
            if (x(), k()) try {
                const K = g();
                K && C(K);
            } catch  {}
            const H = i();
            try {
                const K = j.pasteControl(H.secIdx, H.paraIdx, H.charOffset), A = Ke(K);
                A?.ok && N({
                    secIdx: H.secIdx,
                    paraIdx: A.paraIdx ?? H.paraIdx,
                    charOffset: A.charOffset ?? 0
                }), S();
            } catch  {}
        }, [
            u,
            i,
            k,
            x,
            g,
            C,
            N,
            S
        ]), m = n.useCallback(()=>{
            const j = u();
            if (j) {
                try {
                    if (j.hasInternalClipboard()) {
                        if (x(), k()) try {
                            const H = g();
                            H && C(H);
                        } catch  {}
                        if (l === "cell") {
                            const H = t();
                            if (!H) return;
                            try {
                                const K = j.pasteInternalInCell(H.secIdx, H.parentParaIdx, H.controlIdx, H.cellIdx, H.cellParaIdx, H.charOffset), A = Ke(K);
                                A?.ok && (H.cellParaIdx = A.paraIdx ?? H.cellParaIdx, H.charOffset = A.charOffset ?? H.charOffset);
                            } catch  {}
                        } else {
                            const H = i();
                            try {
                                const K = j.pasteInternal(H.secIdx, H.paraIdx, H.charOffset), A = Ke(K);
                                A?.ok && N({
                                    secIdx: H.secIdx,
                                    paraIdx: A.paraIdx ?? H.paraIdx,
                                    charOffset: A.charOffset ?? 0
                                });
                            } catch  {}
                        }
                        S();
                        return;
                    }
                } catch  {}
                try {
                    if (j.clipboardHasControl()) {
                        y();
                        return;
                    }
                } catch  {}
                z();
            }
        }, [
            u,
            i,
            k,
            t,
            l,
            x,
            g,
            C,
            N,
            S,
            y,
            z
        ]), F = n.useCallback(()=>{
            const j = u();
            if (j) {
                try {
                    j.clearClipboard();
                } catch  {}
                $(!1), I(!1);
            }
        }, [
            u
        ]), V = n.useCallback(()=>{
            const j = u();
            if (!j) return "";
            try {
                return j.getClipboardText() ?? "";
            } catch  {
                return "";
            }
        }, [
            u
        ]);
        return {
            clipboardHasContent: L,
            clipboardHasControl: b,
            handleCopy: D,
            handleCut: v,
            handleCopyControl: c,
            handlePaste: m,
            handlePasteControl: y,
            handlePasteHtml: z,
            clearClipboard: F,
            getClipboardText: V
        };
    }
    function be(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    function En(h) {
        const { getDoc: u, getCellCtx: i, updateCellCtx: k, saveSnapshot: t, rerender: l, setCursorRect: x } = h, [g, C] = n.useState({
            anchor: null,
            rects: []
        }), N = n.useCallback((w)=>{
            const o = u();
            if (o) try {
                const f = be(o.getCursorRectInCell(w.secIdx, w.parentParaIdx, w.controlIdx, w.cellIdx, w.cellParaIdx, w.charOffset));
                f && f.x !== void 0 && x({
                    pageIndex: f.pageIndex ?? 0,
                    x: f.x,
                    y: f.y,
                    height: f.height
                });
            } catch  {}
        }, [
            u,
            x
        ]), S = n.useCallback((w, o)=>w.cellParaIdx < o.cellParaIdx || w.cellParaIdx === o.cellParaIdx && w.charOffset <= o.charOffset ? {
                startPara: w.cellParaIdx,
                startOff: w.charOffset,
                endPara: o.cellParaIdx,
                endOff: o.charOffset
            } : {
                startPara: o.cellParaIdx,
                startOff: o.charOffset,
                endPara: w.cellParaIdx,
                endOff: w.charOffset
            }, []), E = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                t();
                try {
                    if (g.anchor) {
                        const { startPara: U, startOff: M, endPara: G, endOff: Q } = S(g.anchor, {
                            cellParaIdx: f.cellParaIdx,
                            charOffset: f.charOffset
                        });
                        if (o.applyCharFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, Q, JSON.stringify(w)), U !== G) for(let Z = U; Z <= G; Z++){
                            const se = Z === U ? M : 0, le = Z === G ? Q : (()=>{
                                try {
                                    return o.getCellParagraphLength(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, Z);
                                } catch  {
                                    return 0;
                                }
                            })();
                            try {
                                o.applyCharFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, Z, se, le, JSON.stringify(w));
                            } catch  {}
                        }
                    } else o.applyCharFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, f.charOffset, f.charOffset + 1, JSON.stringify(w));
                } catch  {}
                l();
            }
        }, [
            u,
            i,
            t,
            l,
            g.anchor,
            S
        ]), P = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                t();
                try {
                    o.applyParaFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, JSON.stringify(w));
                } catch  {}
                l();
            }
        }, [
            u,
            i,
            t,
            l
        ]), L = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                t();
                try {
                    o.applyCellStyle(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, w);
                } catch  {}
                l();
            }
        }, [
            u,
            i,
            t,
            l
        ]), $ = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getCellCharPropertiesAt(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx, o.charOffset);
                return be(f);
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), b = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getCellParaPropertiesAt(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx);
                return be(f);
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), I = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getCellStyleAt(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx);
                return be(f);
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), D = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getCellProperties(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx), U = be(f);
                return U ? {
                    paddingLeft: U.paddingLeft ?? 0,
                    paddingRight: U.paddingRight ?? 0,
                    paddingTop: U.paddingTop ?? 0,
                    paddingBottom: U.paddingBottom ?? 0,
                    verticalAlign: U.verticalAlign ?? "top",
                    textDirection: U.textDirection ?? "horizontal",
                    isHeader: U.isHeader ?? !1,
                    borderLeft: U.borderLeft ?? "none",
                    borderRight: U.borderRight ?? "none",
                    borderTop: U.borderTop ?? "none",
                    borderBottom: U.borderBottom ?? "none",
                    backgroundColor: U.backgroundColor ?? 16777215
                } : null;
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), v = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                t();
                try {
                    o.setCellProperties(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, JSON.stringify(w));
                } catch  {}
                l();
            }
        }, [
            u,
            i,
            t,
            l
        ]), c = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getCellInfo(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx);
                return be(f);
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), z = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return 0;
            try {
                return w.getCellParagraphCount(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx);
            } catch  {
                return 0;
            }
        }, [
            u,
            i
        ]), y = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!o || !f) return 0;
            try {
                return o.getCellParagraphLength(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, w);
            } catch  {
                return 0;
            }
        }, [
            u,
            i
        ]), m = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return "horizontal";
            try {
                return w.getCellTextDirection(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx);
            } catch  {
                return "horizontal";
            }
        }, [
            u,
            i
        ]), F = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return "";
            try {
                const f = w.getCellParagraphLength(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx);
                return w.getTextInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx, 0, f);
            } catch  {
                return "";
            }
        }, [
            u,
            i
        ]), V = n.useCallback((w, o)=>{
            C({
                anchor: {
                    cellParaIdx: w,
                    charOffset: o
                },
                rects: []
            });
        }, []), j = n.useCallback((w, o)=>{
            const f = u(), U = i();
            if (!f || !U || !g.anchor) return;
            const { startPara: M, startOff: G, endPara: Q, endOff: Z } = S(g.anchor, {
                cellParaIdx: w,
                charOffset: o
            });
            try {
                const se = f.getSelectionRectsInCell(U.secIdx, U.parentParaIdx, U.controlIdx, U.cellIdx, M, G, Q, Z), le = be(se), he = Array.isArray(le?.rects) ? le.rects : [];
                C((Ce)=>({
                        ...Ce,
                        rects: he
                    }));
            } catch  {}
            k({
                cellParaIdx: w,
                charOffset: o
            });
        }, [
            u,
            i,
            g.anchor,
            S,
            k
        ]), p = n.useCallback(()=>{
            C({
                anchor: null,
                rects: []
            });
        }, []), H = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o || !g.anchor) return null;
            const { startPara: f, startOff: U, endPara: M, endOff: G } = S(g.anchor, {
                cellParaIdx: o.cellParaIdx,
                charOffset: o.charOffset
            });
            if (f === M && U === G) return null;
            t();
            try {
                const Q = w.deleteRangeInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, f, U, M, G), Z = be(Q), se = {
                    cellParaIdx: Z?.paraIdx ?? f,
                    charOffset: Z?.charOffset ?? U
                };
                return k(se), C({
                    anchor: null,
                    rects: []
                }), l(), N({
                    ...o,
                    cellParaIdx: se.cellParaIdx,
                    charOffset: se.charOffset
                }), se;
            } catch  {
                return null;
            }
        }, [
            u,
            i,
            g.anchor,
            S,
            t,
            l,
            k,
            N
        ]), K = n.useCallback(()=>{
            const w = i();
            w && N(w);
        }, [
            i,
            N
        ]), A = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return null;
            try {
                const f = w.getLineInfoInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx, o.charOffset);
                return be(f);
            } catch  {
                return null;
            }
        }, [
            u,
            i
        ]), te = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                if (g.anchor) {
                    const { startPara: U, startOff: M, endPara: G, endOff: Q } = S(g.anchor, {
                        cellParaIdx: f.cellParaIdx,
                        charOffset: f.charOffset
                    });
                    if (U !== G || M !== Q) {
                        t();
                        try {
                            const se = o.deleteRangeInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, G, Q), le = be(se);
                            k({
                                cellParaIdx: le?.paraIdx ?? U,
                                charOffset: le?.charOffset ?? M
                            });
                        } catch  {}
                        C({
                            anchor: null,
                            rects: []
                        });
                        const Z = i();
                        if (!Z) return;
                        try {
                            const se = o.insertTextInCell(Z.secIdx, Z.parentParaIdx, Z.controlIdx, Z.cellIdx, Z.cellParaIdx, Z.charOffset, w), le = be(se);
                            k({
                                charOffset: le?.charOffset ?? Z.charOffset + w.length
                            }), l();
                            const he = i();
                            he && N(he);
                        } catch  {}
                        return;
                    }
                }
                t();
                try {
                    const U = o.insertTextInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, f.charOffset, w), M = be(U);
                    k({
                        charOffset: M?.charOffset ?? f.charOffset + w.length
                    }), l();
                    const G = i();
                    G && N(G);
                } catch  {}
            }
        }, [
            u,
            i,
            t,
            l,
            k,
            N,
            g.anchor,
            S
        ]), Y = n.useCallback((w)=>{
            const o = u(), f = i();
            if (!(!o || !f)) {
                if (g.anchor) {
                    const { startPara: U, startOff: M, endPara: G, endOff: Q } = S(g.anchor, {
                        cellParaIdx: f.cellParaIdx,
                        charOffset: f.charOffset
                    });
                    if (U !== G || M !== Q) {
                        t();
                        try {
                            const se = o.deleteRangeInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, G, Q), le = be(se);
                            k({
                                cellParaIdx: le?.paraIdx ?? U,
                                charOffset: le?.charOffset ?? M
                            });
                        } catch  {}
                        C({
                            anchor: null,
                            rects: []
                        }), l();
                        const Z = i();
                        Z && N(Z);
                        return;
                    }
                }
                t();
                try {
                    if (!w && f.charOffset > 0) o.deleteTextInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, f.charOffset - 1, 1), k({
                        charOffset: f.charOffset - 1
                    });
                    else if (!w && f.charOffset === 0 && f.cellParaIdx > 0) {
                        const M = o.mergeParagraphInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx), G = be(M);
                        k({
                            cellParaIdx: G?.paraIdx ?? f.cellParaIdx - 1,
                            charOffset: G?.charOffset ?? 0
                        });
                    } else w && o.deleteTextInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, f.charOffset, 1);
                    l();
                    const U = i();
                    U && N(U);
                } catch  {}
            }
        }, [
            u,
            i,
            t,
            l,
            k,
            N,
            g.anchor,
            S
        ]), re = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return;
            if (g.anchor) {
                const { startPara: U, startOff: M, endPara: G, endOff: Q } = S(g.anchor, {
                    cellParaIdx: o.cellParaIdx,
                    charOffset: o.charOffset
                });
                if (U !== G || M !== Q) {
                    try {
                        const Z = w.deleteRangeInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, U, M, G, Q), se = be(Z);
                        k({
                            cellParaIdx: se?.paraIdx ?? U,
                            charOffset: se?.charOffset ?? M
                        });
                    } catch  {}
                    C({
                        anchor: null,
                        rects: []
                    });
                }
            }
            const f = i();
            if (f) {
                t();
                try {
                    const U = w.splitParagraphInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx, f.charOffset), M = be(U);
                    k({
                        cellParaIdx: M?.paraIdx ?? f.cellParaIdx + 1,
                        charOffset: 0
                    }), l();
                    const G = i();
                    G && N(G);
                } catch  {}
            }
        }, [
            u,
            i,
            t,
            l,
            k,
            N,
            g.anchor,
            S
        ]), R = n.useCallback(()=>{
            const w = u(), o = i();
            if (!(!w || !o) && !(o.cellParaIdx <= 0)) {
                t();
                try {
                    const f = w.mergeParagraphInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, o.cellParaIdx), U = be(f);
                    k({
                        cellParaIdx: U?.paraIdx ?? o.cellParaIdx - 1,
                        charOffset: U?.charOffset ?? 0
                    }), l();
                    const M = i();
                    M && N(M);
                } catch  {}
            }
        }, [
            u,
            i,
            t,
            l,
            k,
            N
        ]);
        return {
            applyCharFormatInCell: E,
            applyParaFormatInCell: P,
            applyCellStyle: L,
            getCellCharProps: $,
            getCellParaProps: b,
            getCellStyleAt: I,
            getCellProperties: D,
            getCellInfo: c,
            getCellParagraphCount: z,
            getCellParagraphLength: y,
            getCellTextDirection: m,
            getTextInCell: F,
            setCellProperties: v,
            cellSelection: g,
            startCellSelection: V,
            updateCellSelection: j,
            clearCellSelection: p,
            deleteRangeInCell: H,
            updateCellCursorRect: K,
            getLineInfoInCell: A,
            insertTextInCell: te,
            deleteTextInCell: Y,
            splitParagraphInCell: re,
            mergeParagraphInCell: R
        };
    }
    function Mt(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    function Bn({ getDoc: h, getCursor: u, moveCursor: i, editMode: k, setEditMode: t, enterCellMode: l, rerender: x }) {
        const g = n.useCallback((b)=>{
            const I = b.editMode;
            I === "cell" || I === "header" || I === "footer" || I === "footnote" ? t(I) : I === "body" && t("body");
        }, [
            t
        ]), C = n.useCallback((b, I)=>({
                secIdx: b.sectionIndex ?? I.secIdx,
                paraIdx: b.paragraphIndex ?? b.paraIdx ?? I.paraIdx,
                charOffset: b.charOffset ?? I.charOffset
            }), []), N = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const D = b.findNearestControlForward(I.secIdx, I.paraIdx, I.charOffset), v = Mt(D);
                if (!v || !v.found) return;
                const c = C(v, I);
                i(c), v.controlType === "table" && l(c.secIdx, c.paraIdx, v.controlIdx ?? 0, 0), x();
            } catch  {}
        }, [
            h,
            u,
            i,
            l,
            C,
            x
        ]), S = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const D = b.findNearestControlBackward(I.secIdx, I.paraIdx, I.charOffset), v = Mt(D);
                if (!v || !v.found) return;
                const c = C(v, I);
                i(c), v.controlType === "table" && l(c.secIdx, c.paraIdx, v.controlIdx ?? 0, 0), x();
            } catch  {}
        }, [
            h,
            u,
            i,
            l,
            C,
            x
        ]), E = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const D = b.findNextEditableControl(I.secIdx, I.paraIdx, I.charOffset, !0), v = Mt(D);
                if (!v || !v.found) return;
                const c = C(v, I);
                i(c, !0), g(v), (v.controlType === "table" || v.editMode === "cell") && l(c.secIdx, v.parentParaIdx ?? c.paraIdx, v.controlIdx ?? 0, v.cellIdx ?? 0), x();
            } catch  {}
        }, [
            h,
            u,
            i,
            l,
            g,
            C,
            x
        ]), P = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const D = b.findNextEditableControl(I.secIdx, I.paraIdx, I.charOffset, !1), v = Mt(D);
                if (!v || !v.found) return;
                const c = C(v, I);
                i(c, !0), g(v), (v.controlType === "table" || v.editMode === "cell") && l(c.secIdx, v.parentParaIdx ?? c.paraIdx, v.controlIdx ?? 0, v.cellIdx ?? 0), x();
            } catch  {}
        }, [
            h,
            u,
            i,
            l,
            g,
            C,
            x
        ]), L = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const D = b.navigateNextEditable(I.secIdx, I.paraIdx, I.charOffset), v = Mt(D);
                if (!v || !v.found) return;
                const c = C(v, I);
                switch(i(c, !0), v.editMode){
                    case "cell":
                        t("cell"), l(c.secIdx, v.parentParaIdx ?? c.paraIdx, v.controlIdx ?? 0, v.cellIdx ?? 0);
                        break;
                    case "header":
                        t("header");
                        break;
                    case "footer":
                        t("footer");
                        break;
                    case "footnote":
                        t("footnote");
                        break;
                    default:
                        t("body");
                        break;
                }
                x();
            } catch  {}
        }, [
            h,
            u,
            i,
            t,
            l,
            C,
            x
        ]), $ = n.useCallback((b, I, D)=>{
            const v = h();
            if (!v) return;
            const c = u();
            try {
                const z = v.moveVerticalByPath(JSON.stringify(b), I, D), y = Mt(z);
                if (!y || !y.found) return;
                const m = C(y, c);
                i(m, !0), y.editMode === "cell" ? (t("cell"), l(m.secIdx, y.parentParaIdx ?? m.paraIdx, y.controlIdx ?? 0, y.cellIdx ?? 0)) : y.editMode === "body" && t("body"), x();
            } catch  {}
        }, [
            h,
            u,
            i,
            t,
            l,
            C,
            x
        ]);
        return {
            findNextControl: N,
            findPrevControl: S,
            findNextEditable: E,
            findPrevEditable: P,
            navigateNextEditable: L,
            moveVerticalByPath: $
        };
    }
    function Pr(h) {
        const u = parseInt(h.slice(1, 3), 16), i = parseInt(h.slice(3, 5), 16);
        return parseInt(h.slice(5, 7), 16) << 16 | i << 8 | u;
    }
    function Dr(h) {
        const u = h & 255, i = h >> 8 & 255, k = h >> 16 & 255;
        return "#" + [
            u,
            i,
            k
        ].map((t)=>t.toString(16).padStart(2, "0")).join("");
    }
    function ae(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    let zn;
    zn = 100;
    Ln = ()=>{
        const { ready: h, loading: u, error: i } = Br(), { t: k } = Er(), t = Tn(), { docRef: l, cursorRef: x, selAnchorRef: g, cellCtxRef: C, hfCtxRef: N, fnCtxRef: S, pageCanvasRefs: E, overlayCanvasRefs: P, renderScaleRef: L, pageSizesRef: $, undoStack: b, redoStack: I, dragStartPos: D } = t, v = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return null;
            const d = E.current[a];
            if (!d) return null;
            const T = L.current, O = d.getBoundingClientRect(), X = (r.clientX - O.left) / O.width * d.width / T, fe = (r.clientY - O.top) / O.height * d.height / T;
            try {
                const oe = s.hitTest(a, X, fe), ue = ae(oe);
                return ue ? {
                    secIdx: ue.sectionIndex ?? 0,
                    paraIdx: ue.paragraphIndex ?? ue.paraIndex ?? 0,
                    charOffset: ue.charOffset ?? 0
                } : null;
            } catch  {
                return null;
            }
        }, [
            l,
            E,
            L
        ]), c = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.pageCount();
                t.setPageCount(a), t.setRenderVer((s)=>s + 1);
            } catch (a) {
                t.setEditorError(String(a));
            }
        }, [
            l,
            t
        ]), z = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = E.current[r];
            if (!s) return;
            const d = L.current;
            try {
                a.renderPageToCanvas(r, s, d);
                const T = s.width / d, O = s.height / d;
                s.style.width = T + "px", s.style.height = O + "px", $.current[r] = {
                    w: T,
                    h: O
                };
                const X = P.current[r];
                X && (X.width = s.width, X.height = s.height, X.style.width = T + "px", X.style.height = O + "px");
            } catch  {}
        }, [
            l,
            E,
            P,
            L,
            $
        ]), y = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.pageCount();
                if (a !== t.pageCount) t.setPageCount(a), t.setRenderVer((s)=>s + 1);
                else {
                    const s = t.currentPage;
                    z(s), s > 0 && z(s - 1), s < a - 1 && z(s + 1), t.setRenderVer((d)=>d + 1);
                }
            } catch (a) {
                t.setEditorError(String(a));
            }
        }, [
            l,
            t,
            z
        ]), m = n.useCallback((r)=>{
            const a = l.current;
            if (!a) {
                t.setCursorRect(null);
                return;
            }
            try {
                const s = ae(a.getCursorRect(r.secIdx, r.paraIdx, r.charOffset));
                s && s.x !== void 0 ? (t.setCursorRect({
                    pageIndex: s.pageIndex ?? 0,
                    x: s.x,
                    y: s.y,
                    height: s.height
                }), t.setCurrentPage(s.pageIndex ?? 0)) : t.setCursorRect(null);
            } catch  {
                t.setCursorRect(null);
            }
        }, [
            l,
            t
        ]), F = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    const s = a.getCharPropertiesAt(r.secIdx, r.paraIdx, r.charOffset), d = ae(s);
                    if (d) {
                        const T = d.fontFamily || "맑은 고딕", O = d.fontSize || 1e3;
                        t.setFontInput(T), t.setSizeInput(String(Math.round(O / 100))), t.setCharProps({
                            fontFamily: T,
                            fontSize: O,
                            bold: !!d.bold,
                            italic: !!d.italic,
                            underline: !!d.underline,
                            strikethrough: !!d.strikethrough,
                            textColor: d.textColor ?? 0,
                            highlight: d.highlight ?? Pr("#FFFF00")
                        });
                    }
                } catch  {}
                try {
                    const s = a.getParaPropertiesAt(r.secIdx, r.paraIdx), d = ae(s);
                    d && t.setParaProps({
                        alignment: d.alignment || "justify",
                        lineSpacing: d.lineSpacing || 160,
                        marginLeft: d.marginLeft || 0,
                        marginRight: d.marginRight || 0,
                        indent: d.indent || 0
                    });
                } catch  {}
            }
        }, [
            l,
            t
        ]), V = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) {
                t.setSelRects([]);
                return;
            }
            let d = r.paraIdx, T = r.charOffset, O = a.paraIdx, X = a.charOffset;
            (d > O || d === O && T > X) && ([d, O] = [
                O,
                d
            ], [T, X] = [
                X,
                T
            ]);
            try {
                const fe = s.getSelectionRects(r.secIdx, d, T, O, X), oe = JSON.parse(fe);
                t.setSelRects(Array.isArray(oe) ? oe : []);
            } catch  {
                t.setSelRects([]);
            }
        }, [
            l,
            t
        ]), j = n.useCallback((r, a = !0)=>{
            t.setCursor(r), a ? (g.current = null, t.setHasSelection(!1), t.setSelRects([])) : g.current && V(g.current, r), m(r), F(r), t.setDirty(!0), t.hiddenInputRef.current?.focus();
        }, [
            t,
            g,
            m,
            F,
            V
        ]), p = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.saveSnapshot();
                if (b.current.push(a), b.current.length > zn) {
                    const s = b.current.shift();
                    if (s !== void 0) try {
                        r.discardSnapshot(s);
                    } catch  {}
                }
                I.current.forEach((s)=>{
                    try {
                        r.discardSnapshot(s);
                    } catch  {}
                }), I.current = [], t.setCanUndo(!0), t.setCanRedo(!1);
            } catch  {}
        }, [
            l,
            b,
            I,
            t
        ]), H = n.useCallback(()=>{
            const r = l.current;
            if (!r || b.current.length === 0) return;
            const a = b.current.pop();
            try {
                const d = r.saveSnapshot();
                I.current.push(d), r.restoreSnapshot(a);
                try {
                    r.discardSnapshot(a);
                } catch  {}
            } catch  {}
            c(), t.setCanUndo(b.current.length > 0), t.setCanRedo(!0);
            const s = x.current;
            m(s), F(s);
        }, [
            l,
            b,
            I,
            t,
            c,
            x,
            m,
            F
        ]), K = n.useCallback(()=>{
            const r = l.current;
            if (!r || I.current.length === 0) return;
            const a = I.current.pop();
            try {
                const d = r.saveSnapshot();
                b.current.push(d), r.restoreSnapshot(a);
                try {
                    r.discardSnapshot(a);
                } catch  {}
            } catch  {}
            c(), t.setCanUndo(!0), t.setCanRedo(I.current.length > 0);
            const s = x.current;
            m(s), F(s);
        }, [
            l,
            b,
            I,
            t,
            c,
            x,
            m,
            F
        ]), A = n.useCallback((r, a)=>{
            try {
                r.convertToEditable();
            } catch  {}
            if (l.current && l.current !== r) try {
                l.current.free();
            } catch  {}
            l.current = r, b.current = [], I.current = [], t.setCanUndo(!1), t.setCanRedo(!1), t.setFileName(a), t.setDirty(!1), t.setCursor({
                secIdx: 0,
                paraIdx: 0,
                charOffset: 0
            }), t.setCursorRect(null), g.current = null, t.setHasSelection(!1), t.setSelRects([]), t.setCurrentPage(0), t.setEditorError(""), $.current = {}, t.setEditMode("body"), C.current = null, N.current = null, S.current = null, t.setContextMenu(null), c();
            try {
                const s = ae(r.getCaretPosition());
                if (s && s.paragraphIndex !== void 0) {
                    const d = {
                        secIdx: s.sectionIndex ?? 0,
                        paraIdx: s.paragraphIndex,
                        charOffset: s.charOffset ?? 0
                    };
                    t.setCursor(d), setTimeout(()=>m(d), 80);
                } else {
                    const d = {
                        secIdx: 0,
                        paraIdx: 0,
                        charOffset: 0
                    };
                    t.setCursor(d), setTimeout(()=>m(d), 80);
                }
            } catch  {
                const s = {
                    secIdx: 0,
                    paraIdx: 0,
                    charOffset: 0
                };
                t.setCursor(s), setTimeout(()=>m(s), 80);
            }
        }, [
            l,
            b,
            I,
            g,
            C,
            N,
            S,
            $,
            t,
            c,
            m
        ]), te = n.useCallback(async ()=>{
            if (h) try {
                const { HwpDocument: r } = await Rr(async ()=>{
                    const { HwpDocument: s } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: s
                    };
                }, []), a = r.createEmpty();
                ae(a.createBlankDocument()), A(a, "새 문서.hwp");
            } catch (r) {
                t.setEditorError(`새 문서 생성 실패: ${r.message}`);
            }
        }, [
            h,
            A,
            t
        ]), Y = n.useCallback(async (r)=>{
            if (!h) return;
            const a = r.name.split(".").pop()?.toLowerCase();
            if (a !== "hwp" && a !== "hwpx") {
                t.setEditorError(".hwp 또는 .hwpx 파일만 지원합니다.");
                return;
            }
            try {
                const { HwpDocument: s } = await Rr(async ()=>{
                    const { HwpDocument: O } = await import("./rhwp-BgOEd_j0.js");
                    return {
                        HwpDocument: O
                    };
                }, []), d = new Uint8Array(await r.arrayBuffer()), T = new s(d);
                A(T, r.name);
            } catch (s) {
                t.setEditorError(`파일 열기 실패: ${s.message}`);
            }
        }, [
            h,
            A,
            t
        ]), re = n.useCallback(()=>{
            const r = document.createElement("input");
            r.type = "file", r.accept = ".hwp,.hwpx", r.onchange = ()=>{
                r.files?.[0] && Y(r.files[0]);
            }, r.click();
        }, [
            Y
        ]), R = n.useCallback((r)=>{
            r.preventDefault(), t.setIsDragging(!0);
        }, [
            t
        ]), w = n.useCallback(()=>t.setIsDragging(!1), [
            t
        ]), o = n.useCallback((r)=>{
            r.preventDefault(), t.setIsDragging(!1);
            const a = r.dataTransfer.files[0];
            a && Y(a);
        }, [
            t,
            Y
        ]), f = n.useCallback(()=>{
            const r = l.current, a = g.current, s = x.current;
            if (!r || !a) return null;
            let d = a.paraIdx, T = a.charOffset, O = s.paraIdx, X = s.charOffset;
            (d > O || d === O && T > X) && ([d, O] = [
                O,
                d
            ], [T, X] = [
                X,
                T
            ]);
            try {
                const fe = r.deleteRange(s.secIdx, d, T, O, X), oe = ae(fe);
                return g.current = null, t.setHasSelection(!1), t.setSelRects([]), oe?.ok ? {
                    secIdx: s.secIdx,
                    paraIdx: oe.paraIdx,
                    charOffset: oe.charOffset
                } : {
                    ...a
                };
            } catch  {
                return g.current = null, t.setHasSelection(!1), t.setSelRects([]), {
                    ...a
                };
            }
        }, [
            l,
            g,
            x,
            t
        ]), U = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            p();
            let s = x.current;
            if (g.current) {
                const d = f();
                d && (s = d);
            }
            try {
                const d = a.insertText(s.secIdx, s.paraIdx, s.charOffset, r), O = ae(d)?.charOffset ?? s.charOffset + r.length, X = {
                    ...s,
                    charOffset: O
                };
                y(), j(X);
            } catch (d) {
                console.error("insertText failed:", d);
            }
        }, [
            l,
            x,
            g,
            p,
            f,
            j,
            y
        ]), M = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            if (g.current) {
                p();
                const s = f();
                s && j(s), y();
                return;
            }
            const a = x.current;
            p();
            try {
                if (a.charOffset > 0) {
                    const s = r.deleteText(a.secIdx, a.paraIdx, a.charOffset - 1, 1), T = ae(s)?.charOffset ?? a.charOffset - 1;
                    j({
                        ...a,
                        charOffset: T
                    });
                } else if (a.paraIdx > 0) {
                    const s = r.getParagraphLength(a.secIdx, a.paraIdx - 1), d = r.mergeParagraph(a.secIdx, a.paraIdx), T = ae(d);
                    j({
                        secIdx: a.secIdx,
                        paraIdx: T?.paraIdx ?? a.paraIdx - 1,
                        charOffset: T?.charOffset ?? s
                    });
                }
            } catch (s) {
                console.error("deleteCharBefore failed:", s);
            }
            y();
        }, [
            l,
            x,
            g,
            f,
            p,
            j,
            y
        ]), G = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            if (g.current) {
                p();
                const s = f();
                s && j(s), y();
                return;
            }
            const a = x.current;
            p();
            try {
                const s = r.getParagraphLength(a.secIdx, a.paraIdx);
                if (a.charOffset < s) r.deleteText(a.secIdx, a.paraIdx, a.charOffset, 1), j({
                    ...a
                });
                else {
                    const d = r.getParagraphCount(a.secIdx);
                    if (a.paraIdx < d - 1) {
                        const T = r.mergeParagraph(a.secIdx, a.paraIdx + 1), O = ae(T);
                        j({
                            secIdx: a.secIdx,
                            paraIdx: O?.paraIdx ?? a.paraIdx,
                            charOffset: O?.charOffset ?? a.charOffset
                        });
                    }
                }
            } catch (s) {
                console.error("deleteCharAfter failed:", s);
            }
            y();
        }, [
            l,
            x,
            g,
            f,
            p,
            j,
            y
        ]), Q = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            if (p(), g.current) {
                const d = g.current;
                let T = d.paraIdx, O = d.charOffset, X = s.paraIdx, fe = s.charOffset;
                (T > X || T === X && O > fe) && ([T, X] = [
                    X,
                    T
                ], [O, fe] = [
                    fe,
                    O
                ]);
                try {
                    a.beginBatch();
                    for(let oe = T; oe <= X; oe++){
                        const ue = oe === T ? O : 0, $e = oe === X ? fe : a.getParagraphLength(s.secIdx, oe);
                        a.applyCharFormat(s.secIdx, oe, ue, $e, JSON.stringify(r));
                    }
                    a.endBatch();
                } catch  {
                    try {
                        a.endBatch();
                    } catch  {}
                }
            } else try {
                const d = a.getParagraphLength(s.secIdx, s.paraIdx);
                let T = s.charOffset, O = s.charOffset + 1;
                s.charOffset >= d && s.charOffset > 0 && (T = s.charOffset - 1, O = s.charOffset), T < O && a.applyCharFormat(s.secIdx, s.paraIdx, T, O, JSON.stringify(r));
            } catch  {}
            y(), F(s);
        }, [
            l,
            x,
            g,
            p,
            y,
            F
        ]), Z = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify(r));
            } catch  {}
            c(), F(s);
        }, [
            l,
            x,
            p,
            c,
            F
        ]), se = n.useCallback(()=>Q({
                bold: !t.charProps.bold
            }), [
            Q,
            t.charProps.bold
        ]), le = n.useCallback(()=>Q({
                italic: !t.charProps.italic
            }), [
            Q,
            t.charProps.italic
        ]), he = n.useCallback(()=>Q({
                underline: !t.charProps.underline
            }), [
            Q,
            t.charProps.underline
        ]), Ce = n.useCallback(()=>Q({
                strikethrough: !t.charProps.strikethrough
            }), [
            Q,
            t.charProps.strikethrough
        ]), Se = n.useCallback((r)=>{
            Q({
                fontFamily: r
            }), t.setFontInput(r), t.setFontOpen(!1);
        }, [
            Q,
            t
        ]), J = n.useCallback((r)=>{
            Q({
                fontSize: Math.round(r * 100)
            }), t.setSizeInput(String(r)), t.setSizeOpen(!1);
        }, [
            Q,
            t
        ]), de = n.useCallback((r)=>Z({
                alignment: r
            }), [
            Z
        ]), pe = n.useCallback((r)=>{
            Z({
                lineSpacing: r
            }), t.setSpacingOpen(!1);
        }, [
            Z,
            t
        ]), Fe = n.useCallback((r)=>{
            const a = Math.max(0, t.paraProps.marginLeft + r * 800);
            Z({
                marginLeft: a
            });
        }, [
            Z,
            t.paraProps.marginLeft
        ]), Ae = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                const s = r.ensureDefaultBullet("●");
                r.applyParaFormat(a.secIdx, a.paraIdx, JSON.stringify({
                    numberingId: s,
                    numberingLevel: 0
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), De = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                const s = r.ensureDefaultNumbering();
                r.applyParaFormat(a.secIdx, a.paraIdx, JSON.stringify({
                    numberingId: s,
                    numberingLevel: 0
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), Le = n.useCallback((r)=>{
            Q({
                textColor: Pr(r)
            }), t.setColorOpen(!1);
        }, [
            Q,
            t
        ]), Ye = n.useCallback((r)=>{
            Q({
                highlight: Pr(r)
            }), t.setHighlightOpen(!1);
        }, [
            Q,
            t
        ]), qe = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                const s = r.createTable(a.secIdx, a.paraIdx, a.charOffset, t.tableRows, t.tableCols), d = ae(s);
                d?.ok && j({
                    ...a,
                    paraIdx: d.paraIdx ?? a.paraIdx,
                    charOffset: 0
                });
            } catch (s) {
                t.setEditorError(s.message);
            }
            c(), t.setTableDialogOpen(!1);
        }, [
            l,
            x,
            p,
            j,
            c,
            t
        ]), Ge = n.useCallback(()=>{
            const r = document.createElement("input");
            r.type = "file", r.accept = "image/*", r.onchange = async (a)=>{
                const s = a.target.files?.[0];
                if (!s) return;
                const d = l.current;
                if (!d) return;
                const T = x.current;
                p();
                try {
                    const O = new Uint8Array(await s.arrayBuffer()), X = new Image, fe = URL.createObjectURL(s);
                    X.onload = ()=>{
                        URL.revokeObjectURL(fe);
                        const oe = X.naturalWidth, ue = X.naturalHeight, $e = Math.min(Math.round(oe / 96 * 7200), 48e3), ut = Math.round(ue / oe * $e), Re = s.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            d.insertPicture(T.secIdx, T.paraIdx, T.charOffset, O, $e, ut, oe, ue, Re, s.name), j({
                                ...T,
                                charOffset: T.charOffset + 1
                            });
                        } catch (He) {
                            t.setEditorError(He.message);
                        }
                        c();
                    }, X.src = fe;
                } catch (O) {
                    t.setEditorError(O.message);
                }
            }, r.click();
        }, [
            l,
            x,
            p,
            j,
            c,
            t
        ]), Qe = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.insertPageBreak(a.secIdx, a.paraIdx, a.charOffset);
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), B = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.createShapeControl(JSON.stringify({
                    sectionIdx: a.secIdx,
                    paraIdx: a.paraIdx,
                    charOffset: a.charOffset,
                    width: 14400,
                    height: 7200
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), q = n.useCallback((r, a, s, d)=>{
            t.setEditMode("cell"), C.current = {
                secIdx: r,
                parentParaIdx: a,
                controlIdx: s,
                cellIdx: d,
                cellParaIdx: 0,
                charOffset: 0
            };
            try {
                const T = l.current;
                if (T) {
                    const O = ae(T.getCursorRectInCell(r, a, s, d, 0, 0));
                    O && O.x !== void 0 && t.setCursorRect({
                        pageIndex: O.pageIndex ?? 0,
                        x: O.x,
                        y: O.y,
                        height: O.height
                    });
                }
            } catch  {}
        }, [
            t,
            C,
            l
        ]), W = En({
            getDoc: ()=>l.current,
            getCellCtx: ()=>C.current,
            updateCellCtx: (r)=>{
                const a = C.current;
                a && Object.assign(a, r);
            },
            saveSnapshot: p,
            rerender: c,
            setCursorRect: t.setCursorRect
        }), ge = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                try {
                    s.createHeaderFooter(r, a, 0);
                } catch  {}
                t.setEditMode(a ? "header" : "footer"), N.current = {
                    secIdx: r,
                    isHeader: a,
                    applyTo: 0,
                    hfParaIdx: 0,
                    charOffset: 0
                };
                try {
                    const d = ae(s.getCursorRectInHeaderFooter(r, a, 0, 0, 0, 0));
                    d && d.x !== void 0 && t.setCursorRect({
                        pageIndex: d.pageIndex ?? 0,
                        x: d.x,
                        y: d.y,
                        height: d.height
                    });
                } catch  {}
            }
        }, [
            l,
            t,
            N
        ]), ee = n.useCallback((r)=>{
            const a = l.current, s = N.current;
            if (!(!a || !s)) {
                p();
                try {
                    const d = a.insertTextInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, r), T = ae(d);
                    s.charOffset = T?.charOffset ?? s.charOffset + r.length, c();
                    try {
                        const O = ae(a.getCursorRectInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 0));
                        O && O.x !== void 0 && t.setCursorRect({
                            pageIndex: O.pageIndex ?? 0,
                            x: O.x,
                            y: O.y,
                            height: O.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            l,
            N,
            p,
            c,
            t
        ]), ce = n.useCallback((r)=>{
            const a = l.current, s = N.current;
            if (!(!a || !s)) {
                p();
                try {
                    if (!r && s.charOffset > 0) a.deleteTextInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset - 1, 1), s.charOffset--;
                    else if (!r && s.charOffset === 0 && s.hfParaIdx > 0) {
                        const d = a.mergeParagraphInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx), T = ae(d);
                        s.hfParaIdx = T?.paraIdx ?? s.hfParaIdx - 1, s.charOffset = T?.charOffset ?? 0;
                    } else r && a.deleteTextInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 1);
                    y();
                    try {
                        const d = ae(a.getCursorRectInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 0));
                        d && d.x !== void 0 && t.setCursorRect({
                            pageIndex: d.pageIndex ?? 0,
                            x: d.x,
                            y: d.y,
                            height: d.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            l,
            N,
            p,
            y,
            t
        ]), ne = n.useCallback(()=>{
            const r = l.current, a = N.current;
            if (!(!r || !a)) {
                p();
                try {
                    const s = r.splitParagraphInHeaderFooter(a.secIdx, a.isHeader, a.applyTo, a.hfParaIdx, a.charOffset), d = ae(s);
                    a.hfParaIdx = d?.paraIdx ?? a.hfParaIdx + 1, a.charOffset = 0, y();
                } catch  {}
            }
        }, [
            l,
            N,
            p,
            y
        ]), ie = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                const s = r.insertFootnote(a.secIdx, a.paraIdx, a.charOffset), d = ae(s);
                d?.ok && (t.setEditMode("footnote"), S.current = {
                    secIdx: a.secIdx,
                    paraIdx: a.paraIdx,
                    controlIdx: d.controlIdx ?? 0,
                    fnParaIdx: 0,
                    charOffset: 0
                });
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c,
            t,
            S
        ]), xe = n.useCallback((r)=>{
            const a = l.current, s = S.current;
            if (!(!a || !s)) {
                p();
                try {
                    const d = a.insertTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset, r), T = ae(d);
                    s.charOffset = T?.charOffset ?? s.charOffset + r.length, c();
                    try {
                        const O = ae(a.getCursorRectInFootnote(0, s.controlIdx, s.fnParaIdx, s.charOffset));
                        O && O.x !== void 0 && t.setCursorRect({
                            pageIndex: O.pageIndex ?? 0,
                            x: O.x,
                            y: O.y,
                            height: O.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            l,
            S,
            p,
            c,
            t
        ]), Ee = n.useCallback((r)=>{
            const a = l.current, s = S.current;
            if (!(!a || !s)) {
                p();
                try {
                    !r && s.charOffset > 0 ? (a.deleteTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset - 1, 1), s.charOffset--) : r && a.deleteTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset, 1), y();
                    try {
                        const d = ae(a.getCursorRectInFootnote(0, s.controlIdx, s.fnParaIdx, s.charOffset));
                        d && d.x !== void 0 && t.setCursorRect({
                            pageIndex: d.pageIndex ?? 0,
                            x: d.x,
                            y: d.y,
                            height: d.height
                        });
                    } catch  {}
                } catch  {}
            }
        }, [
            l,
            S,
            p,
            y,
            t
        ]), Ht = n.useCallback(()=>{
            const r = l.current, a = S.current;
            if (!(!r || !a)) {
                p();
                try {
                    const s = r.splitParagraphInFootnote(a.secIdx, a.paraIdx, a.controlIdx, a.fnParaIdx, a.charOffset), d = ae(s);
                    a.fnParaIdx = d?.paraIdx ?? a.fnParaIdx + 1, a.charOffset = 0, y();
                } catch  {}
            }
        }, [
            l,
            S,
            p,
            y
        ]), xt = n.useCallback((r)=>{
            const a = t.contextMenu?.tableInfo, s = l.current;
            if (!(!s || !a)) {
                p();
                try {
                    s.insertTableRow(a.secIdx, a.paraIdx, a.controlIdx, a.row, r);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), Xe = n.useCallback(()=>{
            const r = t.contextMenu?.tableInfo, a = l.current;
            if (!(!a || !r)) {
                p();
                try {
                    a.deleteTableRow(r.secIdx, r.paraIdx, r.controlIdx, r.row);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), We = n.useCallback((r)=>{
            const a = t.contextMenu?.tableInfo, s = l.current;
            if (!(!s || !a)) {
                p();
                try {
                    s.insertTableColumn(a.secIdx, a.paraIdx, a.controlIdx, a.col, r);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), Ze = n.useCallback(()=>{
            const r = t.contextMenu?.tableInfo, a = l.current;
            if (!(!a || !r)) {
                p();
                try {
                    a.deleteTableColumn(r.secIdx, r.paraIdx, r.controlIdx, r.col);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), et = n.useCallback(()=>{
            const r = t.contextMenu?.tableInfo, a = l.current;
            if (!(!a || !r)) {
                p();
                try {
                    a.mergeTableCells(r.secIdx, r.paraIdx, r.controlIdx, r.row, r.col, r.row, r.col + 1);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), tt = n.useCallback(()=>{
            const r = t.contextMenu?.tableInfo, a = l.current;
            if (!(!a || !r)) {
                p();
                try {
                    a.splitTableCell(r.secIdx, r.paraIdx, r.controlIdx, r.row, r.col);
                } catch  {}
                c(), t.setContextMenu(null);
            }
        }, [
            t,
            l,
            p,
            c
        ]), me = Dn({
            getDoc: ()=>l.current,
            getCursor: ()=>x.current,
            getSelAnchor: ()=>g.current,
            getCellCtx: ()=>C.current,
            editMode: t.editMode,
            saveSnapshot: p,
            deleteSelection: f,
            setCursor: t.setCursor,
            moveCursor: j,
            rerender: c,
            rerenderCurrentPage: y,
            insertText: U,
            setHasSelection: t.setHasSelection,
            setSelRects: t.setSelRects
        }), we = Bn({
            getDoc: ()=>l.current,
            getCursor: ()=>x.current,
            moveCursor: j,
            editMode: t.editMode,
            setEditMode: t.setEditMode,
            enterCellMode: q,
            rerender: c
        }), Ne = Fn({
            editMode: t.editMode,
            getDoc: ()=>l.current,
            getCursor: ()=>x.current,
            getCursorRect: ()=>t.cursorRect,
            setCursor: t.setCursor,
            setCursorRect: t.setCursorRect,
            moveCursor: j,
            updateCursorDisplay: m,
            updateSelectionRects: V,
            getSelAnchor: ()=>g.current,
            setSelAnchor: (r)=>{
                g.current = r;
            },
            setHasSelection: t.setHasSelection,
            saveSnapshot: p,
            handleUndo: H,
            handleRedo: K,
            deleteSelection: f,
            insertText: U,
            deleteCharBefore: M,
            deleteCharAfter: G,
            toggleBold: se,
            toggleItalic: le,
            toggleUnderline: he,
            insertTextInCell: W.insertTextInCell,
            deleteTextInCell: W.deleteTextInCell,
            splitParagraphInCell: W.splitParagraphInCell,
            applyCharFormatInCell: W.applyCharFormatInCell,
            getCellCtx: ()=>C.current,
            enterCellMode: q,
            insertTextInHf: ee,
            deleteTextInHf: ce,
            splitParagraphInHf: ne,
            insertTextInFn: xe,
            deleteTextInFn: Ee,
            splitParagraphInFn: Ht,
            setEditMode: t.setEditMode,
            clearCellCtx: ()=>{
                C.current = null;
            },
            clearHfCtx: ()=>{
                N.current = null;
            },
            clearFnCtx: ()=>{
                S.current = null;
            },
            rerenderCurrentPage: y,
            handleHtmlPaste: me.handlePasteHtml,
            handleCopy: me.handleCopy,
            handleCut: me.handleCut,
            setFindBarOpen: t.setFindBarOpen,
            closeAllDropdowns: ()=>{
                t.setFindBarOpen(!1), t.setContextMenu(null);
            },
            findNextControl: we.findNextControl,
            findPrevControl: we.findPrevControl,
            navigateNextEditable: we.navigateNextEditable,
            composingRef: t.composingRef,
            editModeRef: t.editModeRef,
            hiddenInputRef: t.hiddenInputRef
        }), rt = n.useCallback((r, a)=>{
            if (r.button !== 0) return;
            const s = v(r, a);
            s && (t.setIsDragSelecting(!0), D.current = {
                ...s
            }, g.current = {
                ...s
            }, t.setCursor(s), m(s), F(s), t.hiddenInputRef.current?.focus());
        }, [
            v,
            t,
            D,
            g,
            m,
            F
        ]), Be = n.useCallback((r, a)=>{
            if (!t.isDragSelecting) return;
            const s = v(r, a);
            !s || !g.current || (t.setCursor(s), V(g.current, s), t.setHasSelection(!0), m(s));
        }, [
            t,
            v,
            g,
            V,
            m
        ]), nt = n.useCallback((r, a)=>{
            if (!t.isDragSelecting) return;
            t.setIsDragSelecting(!1);
            const s = v(r, a), d = D.current;
            d && s && d.secIdx === s.secIdx && d.paraIdx === s.paraIdx && d.charOffset === s.charOffset ? r.shiftKey && g.current ? (t.setCursor(s), V(g.current, s), t.setHasSelection(!0), m(s), F(s)) : j(s, !0) : s && (t.setCursor(s), m(s), F(s));
        }, [
            t,
            v,
            D,
            g,
            j,
            V,
            m,
            F
        ]), at = n.useCallback((r, a)=>{
            r.preventDefault();
            const s = l.current;
            if (!s) return;
            const d = v(r, a);
            if (!d) return;
            let T = "body", O;
            try {
                const X = s.getControlTextPositions(d.secIdx, d.paraIdx), oe = JSON.parse(X)?.find((ue)=>ue.type === "table" && ue.charOffset <= d.charOffset);
                if (oe) {
                    T = "table";
                    try {
                        const ue = s.getTableCellBboxes(d.secIdx, d.paraIdx, oe.controlIdx), $e = JSON.parse(ue), ut = E.current[a];
                        if (ut) {
                            const Re = L.current, He = ut.getBoundingClientRect(), $t = (r.clientX - He.left) / He.width * ut.width / Re, Je = (r.clientY - He.top) / He.height * ut.height / Re, Te = $e.find((ke)=>$t >= ke.x && $t <= ke.x + ke.w && Je >= ke.y && Je <= ke.y + ke.h);
                            Te && (O = {
                                secIdx: d.secIdx,
                                paraIdx: d.paraIdx,
                                controlIdx: oe.controlIdx,
                                row: Te.row,
                                col: Te.col,
                                cellIdx: Te.cellIdx
                            });
                        }
                    } catch  {}
                }
            } catch  {}
            t.setContextMenu({
                x: r.clientX,
                y: r.clientY,
                type: T,
                tableInfo: O
            });
        }, [
            l,
            v,
            t,
            E,
            L
        ]), st = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s || t.editMode !== "body") return;
            const d = E.current[a];
            if (!d) return;
            const T = L.current, O = d.getBoundingClientRect(), X = (r.clientX - O.left) / O.width * d.width / T, fe = (r.clientY - O.top) / O.height * d.height / T;
            try {
                const ue = ae(s.hitTestHeaderFooter(a, X, fe));
                if (ue?.hit) {
                    ge(ue.sectionIndex ?? 0, !!ue.isHeader);
                    return;
                }
            } catch  {}
            const oe = x.current;
            if (oe) try {
                const ue = s.getParagraphLength(oe.secIdx, oe.paraIdx);
                if (ue > 0) {
                    const $e = s.getTextRange(oe.secIdx, oe.paraIdx, 0, ue), Re = ae($e)?.text ?? "";
                    if (Re) {
                        const He = Math.min(oe.charOffset, Re.length), $t = (ke)=>/[\w\u3131-\uD79D]/.test(ke);
                        let Je = He, Te = He;
                        for(; Je > 0 && $t(Re[Je - 1]);)Je--;
                        for(; Te < Re.length && $t(Re[Te]);)Te++;
                        if (Je < Te) {
                            const ke = {
                                ...oe,
                                charOffset: Je
                            }, Nr = {
                                ...oe,
                                charOffset: Te
                            };
                            g.current = ke, t.setCursor(Nr), V(ke, Nr), t.setHasSelection(!0), m(Nr);
                        }
                    }
                }
            } catch  {}
        }, [
            l,
            t,
            x,
            g,
            E,
            L,
            ge,
            V,
            m
        ]), lt = n.useCallback(()=>{
            const r = l.current;
            if (!r || !t.findQuery) return;
            const a = x.current;
            try {
                const s = r.searchText(t.findQuery, a.secIdx, a.paraIdx, a.charOffset, !0, t.caseSensitive), d = ae(s);
                if (d?.found) {
                    const T = {
                        secIdx: d.sectionIndex ?? a.secIdx,
                        paraIdx: d.paragraphIndex ?? d.paraIdx ?? a.paraIdx,
                        charOffset: d.charOffset ?? 0
                    };
                    j(T), t.setFindInfo("");
                } else t.setFindInfo(k("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            l,
            t,
            x,
            j,
            k
        ]), ot = n.useCallback(()=>{
            const r = l.current;
            if (!(!r || !t.findQuery)) {
                p();
                try {
                    const a = r.replaceOne(t.findQuery, t.replaceQuery, t.caseSensitive);
                    ae(a)?.ok ? (c(), t.setFindInfo(k("site.hwpEditor.replaced"))) : t.setFindInfo(k("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            l,
            t,
            p,
            c,
            k
        ]), ct = n.useCallback(()=>{
            const r = l.current;
            if (!(!r || !t.findQuery)) {
                p();
                try {
                    const a = r.replaceAll(t.findQuery, t.replaceQuery, t.caseSensitive), s = ae(a);
                    c(), t.setFindInfo(`${k("site.hwpEditor.replaced")} ${s?.count ?? 0}`);
                } catch  {}
            }
        }, [
            l,
            t,
            p,
            c,
            k
        ]), Ue = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    const s = r === "hwp" ? a.exportHwp() : a.exportHwpx(), d = new Blob([
                        s
                    ], {
                        type: "application/octet-stream"
                    }), T = URL.createObjectURL(d), O = document.createElement("a");
                    O.href = T;
                    const X = t.fileName ? t.fileName.replace(/\.[^.]+$/, "") : "document";
                    O.download = `${X}.${r}`, O.click(), URL.revokeObjectURL(T);
                } catch (s) {
                    t.setEditorError(`내보내기 실패: ${s.message}`);
                }
                t.setExportOpen(!1);
            }
        }, [
            l,
            t
        ]), ve = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.getPageDef(0), s = ae(a);
                s && t.setPageDef({
                    width: s.width ?? 59528,
                    height: s.height ?? 84188,
                    marginTop: s.marginTop ?? 5669,
                    marginBottom: s.marginBottom ?? 4252,
                    marginLeft: s.marginLeft ?? 4252,
                    marginRight: s.marginRight ?? 4252,
                    landscape: !!s.landscape
                });
            } catch  {}
        }, [
            l,
            t
        ]), At = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                p();
                try {
                    a.setPageDef(0, JSON.stringify(r));
                } catch  {}
                c(), t.setPageDefOpen(!1);
            }
        }, [
            l,
            p,
            c,
            t
        ]), je = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.getStyleList(), s = JSON.parse(a);
                t.setStyleList(Array.isArray(s) ? s : []);
            } catch  {
                t.setStyleList([]);
            }
        }, [
            l,
            t
        ]), Ve = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.applyStyle(s.secIdx, s.paraIdx, r);
            } catch  {}
            c(), F(s), t.setStyleOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            F,
            t
        ]), Ie = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.getBookmarks(), s = JSON.parse(a);
                t.setBookmarkList(Array.isArray(s) ? s : []);
            } catch  {
                t.setBookmarkList([]);
            }
        }, [
            l,
            t
        ]), ft = n.useCallback((r)=>{
            const a = l.current;
            if (!a || !r.trim()) return;
            const s = x.current;
            try {
                a.addBookmark(s.secIdx, s.paraIdx, s.charOffset, r.trim());
            } catch  {}
            Ie();
        }, [
            l,
            x,
            Ie
        ]), gt = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    a.deleteBookmark(r.secIdx, r.paraIdx, r.controlIdx ?? 0);
                } catch  {}
                Ie();
            }
        }, [
            l,
            Ie
        ]), bt = n.useCallback((r)=>{
            j({
                secIdx: r.secIdx,
                paraIdx: r.paraIdx,
                charOffset: r.charOffset
            }), t.setBookmarkDialogOpen(!1);
        }, [
            j,
            t
        ]), mt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = !t.showControlCodes;
            try {
                r.setShowControlCodes(a);
            } catch  {}
            t.setShowControlCodes(a), c();
        }, [
            l,
            t,
            c
        ]), yt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = !t.showParaMarks;
            try {
                r.setShowParagraphMarks(a);
            } catch  {}
            t.setShowParaMarks(a), c();
        }, [
            l,
            t,
            c
        ]), vt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = !t.showTransparentBorders;
            try {
                r.setShowTransparentBorders(a);
            } catch  {}
            t.setShowTransparentBorders(a), c();
        }, [
            l,
            t,
            c
        ]), Ct = n.useCallback((r)=>{
            t.setPageInputVal(r.target.value);
        }, [
            t
        ]), it = n.useCallback(()=>{
            const r = parseInt(t.pageInputVal, 10);
            !isNaN(r) && r >= 1 && r <= t.pageCount ? t.setCurrentPage(r - 1) : t.setPageInputVal(String(t.currentPage + 1));
        }, [
            t
        ]), jt = n.useCallback(()=>t.setZoom((r)=>Math.min(r + 10, 200)), [
            t
        ]), It = n.useCallback(()=>t.setZoom((r)=>Math.max(r - 10, 30)), [
            t
        ]);
        n.useEffect(()=>{
            t.setPageInputVal(String(t.currentPage + 1));
        }, [
            t.currentPage
        ]), n.useEffect(()=>{
            const r = l.current;
            if (!r || t.pageCount === 0) return;
            const a = L.current;
            for(let s = 0; s < t.pageCount; s++){
                const d = E.current[s];
                if (d) try {
                    r.renderPageToCanvas(s, d, a);
                    const T = d.width / a, O = d.height / a;
                    d.style.width = T + "px", d.style.height = O + "px", $.current[s] = {
                        w: T,
                        h: O
                    };
                    const X = P.current[s];
                    X && (X.width = d.width, X.height = d.height, X.style.width = T + "px", X.style.height = O + "px");
                } catch (T) {
                    console.error("renderPageToCanvas failed for page", s, T);
                }
            }
        }, [
            t.renderVer,
            t.pageCount
        ]), n.useEffect(()=>{
            const r = L.current;
            for(let a = 0; a < t.pageCount; a++){
                const s = P.current[a];
                if (!s) continue;
                const d = s.getContext("2d");
                if (!d) continue;
                d.clearRect(0, 0, s.width, s.height);
                const T = t.selRects.filter((O)=>O.pageIndex === a);
                if (T.length > 0) {
                    d.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const O of T)d.fillRect(O.x * r, O.y * r, O.width * r, O.height * r);
                }
                t.cursorRect && t.cursorRect.pageIndex === a && t.cursorVisible && (d.strokeStyle = "#0046C8", d.lineWidth = Math.max(1.5, 2 * r), d.beginPath(), d.moveTo(t.cursorRect.x * r, t.cursorRect.y * r), d.lineTo(t.cursorRect.x * r, (t.cursorRect.y + t.cursorRect.height) * r), d.stroke());
            }
        }, [
            t.pageCount,
            t.cursorRect,
            t.selRects,
            t.cursorVisible,
            t.renderVer
        ]), n.useEffect(()=>{
            if (!t.cursorRect) {
                t.setCursorVisible(!0);
                return;
            }
            t.setCursorVisible(!0);
            const r = setInterval(()=>t.setCursorVisible((a)=>!a), 530);
            return ()=>clearInterval(r);
        }, [
            t.cursorRect
        ]), n.useEffect(()=>{
            if (!t.isDragSelecting) return;
            const r = ()=>t.setIsDragSelecting(!1);
            return document.addEventListener("mouseup", r), ()=>document.removeEventListener("mouseup", r);
        }, [
            t.isDragSelecting
        ]), n.useEffect(()=>{
            if (!t.contextMenu) return;
            const r = (a)=>{
                const s = a.target;
                t.contextMenuRef.current?.contains(s) || t.setContextMenu(null);
            };
            return document.addEventListener("mousedown", r), ()=>document.removeEventListener("mousedown", r);
        }, [
            t.contextMenu
        ]), n.useEffect(()=>()=>{
                if (l.current) {
                    try {
                        l.current.free();
                    } catch  {}
                    l.current = null;
                }
            }, []);
        const dt = t.pageCount > 0, wt = Dr(t.charProps.textColor), kt = Dr(t.charProps.highlight), St = n.useCallback(()=>{
            const r = l.current;
            if (!r) return null;
            const a = x.current;
            try {
                const s = r.getTableProperties(a.secIdx, a.paraIdx, 0);
                return ae(s);
            } catch  {
                return null;
            }
        }, [
            l,
            x
        ]), Nt = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.setTableProperties(s.secIdx, s.paraIdx, 0, JSON.stringify(r));
            } catch  {}
            c(), t.setTablePropsOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Ot = n.useCallback(()=>{
            const r = l.current;
            if (!r || !t.contextMenu?.tableInfo) return;
            const a = t.contextMenu.tableInfo, s = prompt("수식 입력 (예: SUM(A1:A5))");
            if (!s) {
                t.setContextMenu(null);
                return;
            }
            p();
            try {
                r.evaluateTableFormula(a.secIdx, a.paraIdx, a.controlIdx, a.row, a.col, s, !0);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            t,
            p,
            c
        ]), Pt = n.useCallback(()=>{
            const r = l.current;
            if (!r || !t.contextMenu?.tableInfo) return;
            const a = t.contextMenu.tableInfo;
            p();
            try {
                r.deleteTableControl(a.secIdx, a.paraIdx, a.controlIdx);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            t,
            p,
            c
        ]), Rt = n.useCallback(()=>{
            const r = C.current, a = l.current;
            if (!a || !r) return null;
            try {
                const s = a.getCellProperties(r.secIdx, r.parentParaIdx, r.controlIdx, r.cellIdx);
                return ae(s);
            } catch  {
                return null;
            }
        }, [
            l,
            C
        ]), Lt = n.useCallback((r)=>{
            const a = C.current, s = l.current;
            if (!(!s || !a)) {
                p();
                try {
                    s.setCellProperties(a.secIdx, a.parentParaIdx, a.controlIdx, a.cellIdx, JSON.stringify(r));
                } catch  {}
                c(), t.setCellPropsOpen(!1);
            }
        }, [
            l,
            C,
            p,
            c,
            t
        ]), Wt = n.useCallback((r)=>{
            const a = C.current, s = l.current;
            if (!(!s || !a)) {
                p();
                try {
                    s.setCellProperties(a.secIdx, a.parentParaIdx, a.controlIdx, a.cellIdx, JSON.stringify(r));
                } catch  {}
                c();
            }
        }, [
            l,
            C,
            p,
            c
        ]), Ut = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.setShapeProperties(s.secIdx, s.paraIdx, 0, JSON.stringify(r));
            } catch  {}
            c(), t.setShapeDialogOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Vt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.deleteShapeControl(a.secIdx, a.paraIdx, 0);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), _t = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.setPictureProperties(s.secIdx, s.paraIdx, 0, JSON.stringify(r));
            } catch  {}
            c(), t.setPicturePropsOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Tt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.deletePictureControl(a.secIdx, a.paraIdx, 0);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Ft = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            try {
                const s = r.getControlImageData(a.secIdx, a.paraIdx, 0), d = r.getControlImageMime(a.secIdx, a.paraIdx, 0), T = d.includes("png") ? "png" : d.includes("jpeg") ? "jpg" : "bin", O = new Blob([
                    s
                ], {
                    type: d
                }), X = URL.createObjectURL(O), fe = document.createElement("a");
                fe.href = X, fe.download = `image.${T}`, fe.click(), URL.revokeObjectURL(X);
            } catch  {}
            t.setContextMenu(null);
        }, [
            l,
            x,
            t
        ]), _e = n.useCallback((r)=>()=>{
                const a = l.current;
                if (!a) return;
                const s = x.current;
                p();
                try {
                    a.changeShapeZOrder(s.secIdx, s.paraIdx, 0, r);
                } catch  {}
                c(), t.setContextMenu(null);
            }, [
            l,
            x,
            p,
            c,
            t
        ]), Dt = _e("front"), _ = _e("back"), Oe = _e("forward"), Pe = _e("backward"), ye = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.groupShapes(JSON.stringify({
                    sectionIdx: a.secIdx,
                    controls: [
                        {
                            paraIdx: a.paraIdx,
                            controlIdx: 0
                        }
                    ]
                }));
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), ze = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.ungroupShape(a.secIdx, a.paraIdx, 0);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), ht = n.useCallback(()=>{}, []), Me = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return "";
            try {
                return a.getFieldValueByName(r) ?? "";
            } catch  {
                return "";
            }
        }, [
            l
        ]), Jt = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                p();
                try {
                    s.setFieldValueByName(r, a);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), Kt = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    const s = a.getFieldList(), T = JSON.parse(s)[r];
                    T && a.setActiveField(T.secIdx ?? 0, T.paraIdx ?? 0, T.charOffset ?? 0);
                } catch  {}
                c();
            }
        }, [
            l,
            c
        ]), Yt = n.useCallback(()=>{
            const r = l.current;
            if (r) {
                try {
                    r.clearActiveField();
                } catch  {}
                c();
            }
        }, [
            l,
            c
        ]), qt = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.removeFieldAt(a.secIdx, a.paraIdx, a.charOffset);
            } catch  {}
            c(), t.setContextMenu(null);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Gt = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                p();
                try {
                    s.removeFieldAt(r, a, 0);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), Qt = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                p();
                try {
                    a.updateClickHereProps(r.fieldId ?? 0, r.guide ?? "", r.memo ?? "", r.name ?? "", r.editable ?? !0);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), Xt = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    const s = a.getFieldList(), T = JSON.parse(s)[r];
                    if (T) {
                        const O = {
                            secIdx: T.secIdx ?? 0,
                            paraIdx: T.paraIdx ?? 0,
                            charOffset: T.charOffset ?? 0
                        };
                        j(O);
                    }
                } catch  {}
                t.setFieldDialogOpen(!1);
            }
        }, [
            l,
            j,
            t
        ]), Zt = n.useCallback(()=>{}, []), er = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = x.current;
            p();
            try {
                s.setFormValue(d.secIdx, d.paraIdx, r, JSON.stringify({
                    value: a
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), tr = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = C.current;
            if (d) {
                p();
                try {
                    s.setFormValueInCell(d.secIdx, d.parentParaIdx, d.controlIdx, d.cellIdx, d.cellParaIdx, r, JSON.stringify({
                        value: a
                    }));
                } catch  {}
                c();
            }
        }, [
            l,
            C,
            p,
            c
        ]), rr = n.useCallback(()=>{}, []), nr = n.useCallback((r, a, s)=>{
            const d = l.current;
            if (d) {
                p();
                try {
                    d.deleteHeaderFooter(r, a, s);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), ar = n.useCallback((r, a, s)=>{
            const d = l.current;
            if (d) {
                p();
                try {
                    d.toggleHideHeaderFooter(t.currentPage, a);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c,
            t
        ]), sr = n.useCallback((r, a, s)=>{
            const d = l.current;
            if (d) {
                try {
                    d.navigateHeaderFooterByPage(s, a, 1);
                } catch  {}
                c();
            }
        }, [
            l,
            c
        ]), lr = n.useCallback((r, a, s, d)=>{
            const T = l.current;
            if (T) {
                p();
                try {
                    T.applyHfTemplate(r, a, s, d);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), or = n.useCallback((r, a, s, d)=>{
            const T = l.current;
            if (!T) return;
            p();
            const O = [
                "page_number",
                "total_pages",
                "date",
                "time",
                "filename"
            ].indexOf(d);
            try {
                T.insertFieldInHf(r, a, s, 0, 0, O >= 0 ? O : 0);
            } catch  {}
            c();
        }, [
            l,
            p,
            c
        ]), cr = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    a.createStyle(JSON.stringify(r));
                } catch  {}
                je();
            }
        }, [
            l,
            je
        ]), ir = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                p();
                try {
                    s.updateStyle(r, JSON.stringify(a)), (a.charShape || a.paraShape) && s.updateStyleShapes(r, JSON.stringify(a.charShape ?? {}), JSON.stringify(a.paraShape ?? {}));
                } catch  {}
                je(), c();
            }
        }, [
            l,
            p,
            je,
            c
        ]), dr = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    a.deleteStyle(r);
                } catch  {}
                je();
            }
        }, [
            l,
            je
        ]), hr = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return null;
            try {
                const s = a.getStyleDetail(r);
                return ae(s);
            } catch  {
                return null;
            }
        }, [
            l
        ]), ur = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                p();
                try {
                    a.setSectionDef(0, JSON.stringify(r));
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), pr = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                p();
                try {
                    a.setPageHide(0, 0, !!r.hideHeader, !!r.hideFooter, !!r.hideMasterPage, !!r.hideBorder, !!r.hideFill, !!r.hidePageNumber);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), xr = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                try {
                    s.renameBookmark(r.secIdx, r.paraIdx, r.controlIdx ?? 0, a);
                } catch  {}
                Ie();
            }
        }, [
            l,
            Ie
        ]), fr = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            p();
            const s = r.type === "equal" ? 0 : 1, d = r.type === "equal" ? 1 : 0;
            try {
                a.setColumnDef(x.current.secIdx, r.count, s, d, r.gap);
            } catch  {}
            c(), t.setColumnDialogOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), gr = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.insertColumnBreak(a.secIdx, a.paraIdx, a.charOffset);
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), br = n.useCallback(()=>{}, []), mr = n.useCallback((r)=>{
            const a = l.current;
            if (a) try {
                a.createNumbering(JSON.stringify(r));
            } catch  {}
        }, [
            l
        ]), yr = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = x.current;
            p();
            try {
                s.applyParaFormat(d.secIdx, d.paraIdx, JSON.stringify({
                    numbering: {
                        id: r,
                        level: a
                    }
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), vr = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = x.current;
            p();
            try {
                s.applyParaFormat(d.secIdx, d.paraIdx, JSON.stringify({
                    bullet: {
                        id: r,
                        level: a
                    }
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), Cr = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = x.current;
            p();
            try {
                s.setNumberingRestart(d.secIdx, d.paraIdx, r, a);
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), jr = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                r.applyParaFormat(a.secIdx, a.paraIdx, JSON.stringify({
                    numbering: null,
                    bullet: null
                }));
            } catch  {}
            c();
        }, [
            l,
            x,
            p,
            c
        ]), Ir = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = g.current, s = x.current;
                if (!a) return;
                const d = t.editMode === "cell" && C.current ? r.exportSelectionInCellHtml(C.current.secIdx, C.current.parentParaIdx, C.current.controlIdx, C.current.cellIdx, a.paraIdx, a.charOffset, s.paraIdx, s.charOffset) : r.exportSelectionHtml(a.secIdx, a.paraIdx, a.charOffset, s.paraIdx, s.charOffset);
                navigator.clipboard.writeText(d).catch(()=>{});
            } catch  {}
        }, [
            l,
            g,
            x,
            t,
            C
        ]), wr = n.useCallback(()=>{
            const r = l.current;
            if (r) try {
                const a = r.exportHwpVerify(), s = ae(a);
                if (s) {
                    const d = s.ok ? `검증 성공 (${s.pageCount}페이지)` : `검증 실패: ${s.message}`;
                    t.setEditorError(d);
                }
            } catch (a) {
                t.setEditorError(`검증 오류: ${a.message}`);
            }
        }, [
            l,
            t
        ]), kr = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return;
            const d = x.current;
            p();
            try {
                s.createShapeControl(JSON.stringify({
                    sectionIdx: d.secIdx,
                    paraIdx: d.paraIdx,
                    charOffset: d.charOffset,
                    type: "equation",
                    script: r,
                    fontSize: a
                }));
            } catch  {}
            c(), t.setEquationDialogOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            t
        ]), Sr = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return null;
            try {
                return a.renderEquationPreview(r, 1e3, 0);
            } catch  {
                return null;
            }
        }, [
            l
        ]);
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(zr, {
                    title: k("site.hwpEditor.title"),
                    description: k("site.hwpEditor.subtitle")
                }),
                e.jsx("section", {
                    className: "page-header",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            e.jsx("h2", {
                                children: k("site.hwpEditor.title")
                            }),
                            e.jsx("p", {
                                children: k("site.hwpEditor.subtitle")
                            })
                        ]
                    })
                }),
                e.jsx("section", {
                    className: "section hwp-editor-page",
                    children: e.jsxs("div", {
                        className: "container",
                        children: [
                            t.editorError && e.jsxs("div", {
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
                                    e.jsx("span", {
                                        children: t.editorError
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>t.setEditorError(""),
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
                            i && !u && e.jsxs("div", {
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
                                    e.jsxs("span", {
                                        children: [
                                            k("site.hwpEditor.wasmError"),
                                            ": ",
                                            i
                                        ]
                                    })
                                ]
                            }),
                            u && e.jsxs("div", {
                                className: "hwp-editor-loading",
                                children: [
                                    e.jsx("div", {
                                        className: "loading-spinner"
                                    }),
                                    e.jsx("p", {
                                        children: k("site.hwpEditor.wasmLoading")
                                    })
                                ]
                            }),
                            h && !dt && !u && e.jsx("div", {
                                className: `hwp-editor-container${t.isDragging ? " drag-over" : ""}`,
                                onDragOver: R,
                                onDragLeave: w,
                                onDrop: o,
                                children: e.jsxs("div", {
                                    className: "hwp-editor-empty",
                                    children: [
                                        e.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "56",
                                            height: "56",
                                            strokeWidth: "1.5",
                                            children: [
                                                e.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                    fill: "rgba(74,143,231,0.15)",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("polyline", {
                                                    points: "14 2 14 8 20 8",
                                                    fill: "rgba(74,143,231,0.25)",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("line", {
                                                    x1: "12",
                                                    y1: "18",
                                                    x2: "12",
                                                    y2: "12",
                                                    stroke: "var(--primary, #0046C8)"
                                                }),
                                                e.jsx("line", {
                                                    x1: "9",
                                                    y1: "15",
                                                    x2: "15",
                                                    y2: "15",
                                                    stroke: "var(--primary, #0046C8)"
                                                })
                                            ]
                                        }),
                                        e.jsx("h3", {
                                            children: k("site.hwpEditor.dropOrNew")
                                        }),
                                        e.jsx("p", {
                                            children: k("site.hwpEditor.clickToEdit")
                                        }),
                                        e.jsxs("div", {
                                            className: "hwp-editor-empty-actions",
                                            children: [
                                                e.jsxs("button", {
                                                    className: "hwp-empty-btn primary",
                                                    onClick: te,
                                                    disabled: !h,
                                                    children: [
                                                        e.jsxs("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "18",
                                                            height: "18",
                                                            strokeWidth: "2",
                                                            children: [
                                                                e.jsx("path", {
                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                                    fill: "rgba(255,255,255,0.25)",
                                                                    stroke: "white"
                                                                }),
                                                                e.jsx("polyline", {
                                                                    points: "14 2 14 8 20 8",
                                                                    fill: "rgba(255,255,255,0.15)",
                                                                    stroke: "white"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "12",
                                                                    y1: "18",
                                                                    x2: "12",
                                                                    y2: "11",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.5"
                                                                }),
                                                                e.jsx("line", {
                                                                    x1: "9",
                                                                    y1: "14.5",
                                                                    x2: "15",
                                                                    y2: "14.5",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.5"
                                                                })
                                                            ]
                                                        }),
                                                        k("site.hwpEditor.newDoc")
                                                    ]
                                                }),
                                                e.jsxs("button", {
                                                    className: "hwp-empty-btn",
                                                    onClick: re,
                                                    disabled: !h,
                                                    children: [
                                                        e.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "18",
                                                            height: "18",
                                                            strokeWidth: "2",
                                                            children: e.jsx("path", {
                                                                d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
                                                                fill: "rgba(234,179,8,0.25)",
                                                                stroke: "currentColor"
                                                            })
                                                        }),
                                                        k("site.hwpEditor.openFile")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            dt && e.jsxs("div", {
                                className: "hwp-editor-container",
                                children: [
                                    e.jsx(Ur, {
                                        t: k,
                                        onNewDoc: te,
                                        onOpenFile: re,
                                        onExport: Ue,
                                        canUndo: t.canUndo,
                                        canRedo: t.canRedo,
                                        onUndo: H,
                                        onRedo: K,
                                        fontInput: t.fontInput,
                                        sizeInput: t.sizeInput,
                                        onApplyFont: Se,
                                        onApplySize: J,
                                        charProps: t.charProps,
                                        onToggleBold: se,
                                        onToggleItalic: le,
                                        onToggleUnderline: he,
                                        onToggleStrikethrough: Ce,
                                        textColorHex: wt,
                                        highlightHex: kt,
                                        onApplyTextColor: Le,
                                        onApplyHighlight: Ye,
                                        paraProps: t.paraProps,
                                        onApplyAlignment: de,
                                        onApplyLineSpacing: pe,
                                        onApplyIndentChange: Fe,
                                        onApplyBulletList: Ae,
                                        onApplyNumberedList: De,
                                        onInsertTable: ()=>t.setTableDialogOpen((r)=>!r),
                                        tableRows: t.tableRows,
                                        tableCols: t.tableCols,
                                        onSetTableRows: t.setTableRows,
                                        onSetTableCols: t.setTableCols,
                                        onConfirmInsertTable: qe,
                                        onInsertImage: Ge,
                                        onPageBreak: Qe,
                                        onInsertShape: B,
                                        onInsertFootnote: ie,
                                        onEnterHeader: ()=>ge(x.current.secIdx, !0),
                                        onEnterFooter: ()=>ge(x.current.secIdx, !1),
                                        findBarOpen: t.findBarOpen,
                                        onToggleFindBar: ()=>t.setFindBarOpen((r)=>!r),
                                        onOpenPageSetup: ()=>{
                                            ve(), t.setPageDefOpen(!0);
                                        },
                                        styleList: t.styleList,
                                        onLoadStyles: je,
                                        onApplyStyle: Ve,
                                        onOpenBookmarks: ()=>{
                                            Ie(), t.setBookmarkDialogOpen(!0);
                                        },
                                        showParaMarks: t.showParaMarks,
                                        showControlCodes: t.showControlCodes,
                                        showTransparentBorders: t.showTransparentBorders,
                                        onToggleParaMarks: yt,
                                        onToggleControlCodes: mt,
                                        onToggleTransparentBorders: vt,
                                        fileName: t.fileName,
                                        dirty: t.dirty,
                                        clipboardHasContent: me.clipboardHasContent,
                                        onCopy: me.handleCopy,
                                        onCut: me.handleCut,
                                        onPaste: me.handlePaste,
                                        sidebarOpen: t.sidebarOpen,
                                        onToggleSidebar: ()=>t.setSidebarOpen((r)=>!r),
                                        onOpenTableProps: ()=>t.setTablePropsOpen(!0),
                                        onOpenStyleDialog: ()=>{
                                            je(), t.setStyleDialogOpen(!0);
                                        },
                                        onOpenHeaderFooterDialog: ()=>t.setHeaderFooterDialogOpen(!0),
                                        onOpenFieldDialog: ()=>t.setFieldDialogOpen(!0),
                                        onOpenColumnDialog: ()=>t.setColumnDialogOpen(!0),
                                        onOpenNumberingDialog: ()=>t.setNumberingDialogOpen(!0),
                                        onOpenEquationDialog: ()=>t.setEquationDialogOpen(!0),
                                        onOpenFormDialog: ()=>t.setFormDialogOpen(!0),
                                        onExportSelectionHtml: Ir,
                                        onExportVerify: wr
                                    }),
                                    t.findBarOpen && e.jsx(Jr, {
                                        t: k,
                                        findQuery: t.findQuery,
                                        replaceQuery: t.replaceQuery,
                                        caseSensitive: t.caseSensitive,
                                        findInfo: t.findInfo,
                                        onFindQueryChange: (r)=>{
                                            t.setFindQuery(r), t.setFindInfo("");
                                        },
                                        onReplaceQueryChange: t.setReplaceQuery,
                                        onCaseSensitiveChange: t.setCaseSensitive,
                                        onFindNext: lt,
                                        onReplaceOne: ot,
                                        onReplaceAll: ct,
                                        onClose: ()=>{
                                            t.setFindBarOpen(!1), t.setFindInfo("");
                                        }
                                    }),
                                    t.editMode !== "body" && e.jsxs("div", {
                                        className: "hwp-edit-mode-bar",
                                        children: [
                                            e.jsx("span", {
                                                children: t.editMode === "cell" ? "표 셀 편집" : t.editMode === "header" ? "머리말 편집" : t.editMode === "footer" ? "꼬리말 편집" : "각주 편집"
                                            }),
                                            e.jsx("button", {
                                                onClick: ()=>{
                                                    t.setEditMode("body"), C.current = null, N.current = null, S.current = null;
                                                },
                                                children: "ESC \\uB098\\uAC00\\uAE30"
                                            })
                                        ]
                                    }),
                                    e.jsxs("div", {
                                        className: "hwp-editor-main-layout",
                                        children: [
                                            e.jsx("div", {
                                                className: "hwp-editor-main-content",
                                                children: e.jsx(_r, {
                                                    pageCount: t.pageCount,
                                                    currentPage: t.currentPage,
                                                    zoom: t.zoom,
                                                    renderVer: t.renderVer,
                                                    pageCanvasRefs: E,
                                                    overlayCanvasRefs: P,
                                                    canvasRefs: t.canvasRefs,
                                                    cursorRect: t.cursorRect,
                                                    cursorVisible: t.cursorVisible,
                                                    selRects: t.selRects,
                                                    renderScaleRef: L,
                                                    onCanvasMouseDown: rt,
                                                    onCanvasMouseMove: Be,
                                                    onCanvasMouseUp: nt,
                                                    onContextMenu: at,
                                                    onDoubleClick: st,
                                                    isDragging: t.isDragging,
                                                    onDragOver: R,
                                                    onDragLeave: w,
                                                    onDrop: o,
                                                    onFocusInput: ()=>t.hiddenInputRef.current?.focus()
                                                })
                                            }),
                                            e.jsx(Xr, {
                                                isOpen: t.sidebarOpen,
                                                onClose: ()=>t.setSidebarOpen(!1),
                                                t: k,
                                                editMode: t.editMode,
                                                cursor: t.cursor,
                                                charProps: t.charProps,
                                                paraProps: t.paraProps,
                                                currentPage: t.currentPage,
                                                pageCount: t.pageCount,
                                                currentStyleName: "",
                                                styleList: t.styleList,
                                                onApplyStyle: Ve,
                                                cellProps: null,
                                                onUpdateCellProps: Wt,
                                                documentInfo: null,
                                                fieldInfo: null
                                            })
                                        ]
                                    }),
                                    t.contextMenu && e.jsx(Yr, {
                                        menu: t.contextMenu,
                                        onClose: ()=>t.setContextMenu(null),
                                        onUndo: ()=>{
                                            H(), t.setContextMenu(null);
                                        },
                                        onRedo: ()=>{
                                            K(), t.setContextMenu(null);
                                        },
                                        onCopy: ()=>{
                                            me.handleCopy(), t.setContextMenu(null);
                                        },
                                        onCut: ()=>{
                                            me.handleCut(), t.setContextMenu(null);
                                        },
                                        onPaste: ()=>{
                                            me.handlePasteHtml(), t.setContextMenu(null);
                                        },
                                        onEnterCell: ()=>{
                                            if (t.contextMenu?.tableInfo) {
                                                const r = t.contextMenu.tableInfo;
                                                q(r.secIdx, r.paraIdx, r.controlIdx, r.cellIdx);
                                            }
                                            t.setContextMenu(null);
                                        },
                                        onInsertRowBefore: ()=>xt(!1),
                                        onInsertRowAfter: ()=>xt(!0),
                                        onDeleteRow: Xe,
                                        onInsertColBefore: ()=>We(!1),
                                        onInsertColAfter: ()=>We(!0),
                                        onDeleteCol: Ze,
                                        onMergeCells: et,
                                        onSplitCell: tt,
                                        onTableProps: ()=>{
                                            t.setTablePropsOpen(!0), t.setContextMenu(null);
                                        },
                                        onTableFormula: Ot,
                                        onDeleteTable: Pt,
                                        onShapeProps: ()=>{
                                            t.setShapeDialogOpen(!0), t.setContextMenu(null);
                                        },
                                        onDeleteShape: Vt,
                                        onPictureProps: ()=>{
                                            t.setPicturePropsOpen(!0), t.setContextMenu(null);
                                        },
                                        onDeletePicture: Tt,
                                        onDownloadImage: Ft,
                                        onZOrderFront: Dt,
                                        onZOrderBack: _,
                                        onZOrderForward: Oe,
                                        onZOrderBackward: Pe,
                                        onGroupShapes: ye,
                                        onUngroupShape: ze,
                                        onFieldProps: ()=>{
                                            t.setFieldDialogOpen(!0), t.setContextMenu(null);
                                        },
                                        onRemoveField: qt,
                                        onFindNextControl: we.findNextControl,
                                        onFindPrevControl: we.findPrevControl
                                    }),
                                    t.pageDefOpen && e.jsx(Sn, {
                                        onClose: ()=>t.setPageDefOpen(!1),
                                        pageDef: t.pageDef,
                                        onApply: At,
                                        sectionDef: null,
                                        onApplySectionDef: ur,
                                        pageHide: null,
                                        onApplyPageHide: pr
                                    }),
                                    t.bookmarkDialogOpen && e.jsx(pn, {
                                        onClose: ()=>t.setBookmarkDialogOpen(!1),
                                        bookmarkList: t.bookmarkList,
                                        onRefresh: Ie,
                                        onAdd: ft,
                                        onDelete: gt,
                                        onRename: xr,
                                        onGoto: bt
                                    }),
                                    t.tablePropsOpen && e.jsx(Zr, {
                                        t: k,
                                        onClose: ()=>t.setTablePropsOpen(!1),
                                        tableProps: St(),
                                        onApply: Nt
                                    }),
                                    t.cellPropsOpen && e.jsx(rn, {
                                        t: k,
                                        onClose: ()=>t.setCellPropsOpen(!1),
                                        cellProps: Rt(),
                                        onApply: Lt
                                    }),
                                    t.shapeDialogOpen && e.jsx(an, {
                                        mode: "insert",
                                        onClose: ()=>t.setShapeDialogOpen(!1),
                                        onInsert: (r)=>{
                                            const a = l.current;
                                            if (!a) return;
                                            const s = x.current;
                                            p();
                                            try {
                                                a.createShapeControl(JSON.stringify({
                                                    sectionIdx: s.secIdx,
                                                    paraIdx: s.paraIdx,
                                                    charOffset: s.charOffset,
                                                    ...r
                                                }));
                                            } catch  {}
                                            c(), t.setShapeDialogOpen(!1);
                                        },
                                        onApply: Ut
                                    }),
                                    t.picturePropsOpen && e.jsx(ln, {
                                        onClose: ()=>t.setPicturePropsOpen(!1),
                                        pictureProps: null,
                                        onApply: _t,
                                        onDownloadImage: Ft
                                    }),
                                    t.styleDialogOpen && e.jsx(on, {
                                        onClose: ()=>t.setStyleDialogOpen(!1),
                                        styleList: t.styleList,
                                        onCreateStyle: cr,
                                        onUpdateStyle: ir,
                                        onDeleteStyle: dr,
                                        onGetStyleDetail: hr,
                                        onApplyStyle: Ve
                                    }),
                                    t.headerFooterDialogOpen && e.jsx(hn, {
                                        onClose: ()=>t.setHeaderFooterDialogOpen(!1),
                                        headerFooterList: [],
                                        onRefreshList: rr,
                                        onCreateHeaderFooter: (r, a)=>ge(r, a),
                                        onDeleteHeaderFooter: nr,
                                        onToggleHide: ar,
                                        onNavigateByPage: sr,
                                        onApplyTemplate: lr,
                                        onInsertField: or,
                                        onEnterEditMode: (r, a)=>ge(r, a),
                                        sectionCount: 1,
                                        currentPage: t.currentPage,
                                        pageCount: t.pageCount
                                    }),
                                    t.fieldDialogOpen && e.jsx(un, {
                                        onClose: ()=>t.setFieldDialogOpen(!1),
                                        fieldList: [],
                                        onRefreshFieldList: ht,
                                        onGetFieldValue: Me,
                                        onSetFieldValue: Jt,
                                        onSetActiveField: Kt,
                                        onClearActiveField: Yt,
                                        onRemoveField: Gt,
                                        clickHereProps: null,
                                        onUpdateClickHere: Qt,
                                        onGotoField: Xt
                                    }),
                                    t.columnDialogOpen && e.jsx(fn, {
                                        onClose: ()=>t.setColumnDialogOpen(!1),
                                        currentDef: null,
                                        onApply: fr,
                                        onInsertBreak: gr
                                    }),
                                    t.formDialogOpen && e.jsx(mn, {
                                        onClose: ()=>t.setFormDialogOpen(!1),
                                        formObjects: [],
                                        onRefresh: Zt,
                                        onSetValue: er,
                                        onSetValueInCell: tr,
                                        editMode: t.editMode
                                    }),
                                    t.numberingDialogOpen && e.jsx(Cn, {
                                        onClose: ()=>t.setNumberingDialogOpen(!1),
                                        numberingList: [],
                                        bulletList: [],
                                        onRefreshLists: br,
                                        onCreateNumbering: mr,
                                        onApplyNumbering: yr,
                                        onApplyBullet: vr,
                                        onRestartNumbering: Cr,
                                        onRemoveNumbering: jr
                                    }),
                                    t.equationDialogOpen && e.jsx(In, {
                                        mode: "insert",
                                        onClose: ()=>t.setEquationDialogOpen(!1),
                                        onInsert: kr,
                                        onRenderPreview: Sr
                                    }),
                                    e.jsx("textarea", {
                                        ref: t.hiddenInputRef,
                                        className: "hwp-hidden-input",
                                        "aria-label": "HWP Editor input",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: !1,
                                        onCompositionStart: Ne.handleIMECompositionStart,
                                        onCompositionEnd: Ne.handleIMECompositionEnd,
                                        onInput: Ne.handleIMEInput,
                                        onKeyDown: Ne.handleKeyDown,
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
                                    e.jsxs("div", {
                                        className: "hwp-page-bar",
                                        children: [
                                            e.jsxs("div", {
                                                className: "hwp-page-nav",
                                                children: [
                                                    e.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: t.currentPage <= 0,
                                                        onClick: ()=>t.setCurrentPage((r)=>Math.max(0, r - 1)),
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
                                                            k("site.hwpEditor.page"),
                                                            " ",
                                                            e.jsx("input", {
                                                                className: "hwp-page-input",
                                                                type: "text",
                                                                value: t.pageInputVal,
                                                                onChange: Ct,
                                                                onBlur: it,
                                                                onKeyDown: (r)=>{
                                                                    r.key === "Enter" && it();
                                                                }
                                                            }),
                                                            " / ",
                                                            t.pageCount
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-page-btn",
                                                        disabled: t.currentPage >= t.pageCount - 1,
                                                        onClick: ()=>t.setCurrentPage((r)=>Math.min(t.pageCount - 1, r + 1)),
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
                                                        onClick: It,
                                                        disabled: t.zoom <= 30,
                                                        children: "−"
                                                    }),
                                                    e.jsxs("span", {
                                                        className: "hwp-zoom-label",
                                                        children: [
                                                            t.zoom,
                                                            "%"
                                                        ]
                                                    }),
                                                    e.jsx("button", {
                                                        className: "hwp-zoom-btn",
                                                        onClick: jt,
                                                        disabled: t.zoom >= 200,
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
export { Ln as default, __tla };
