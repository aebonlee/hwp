import { R as pt, r as n, j as e, u as Er, _ as Rr, __tla as __tla_0 } from "./index-BtpUbS1A.js";
import { u as Br, __tla as __tla_1 } from "./useRhwp-dm9dpOx7.js";
import { S as zr } from "./SEOHead-DiSh1TKm.js";
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
    ], Wr = ({ t: h, onNewDoc: u, onOpenFile: i, onExport: k, canUndo: t, canRedo: l, onUndo: x, onRedo: g, fontInput: C, sizeInput: N, onApplyFont: S, onApplySize: E, charProps: O, onToggleBold: L, onToggleItalic: $, onToggleUnderline: b, onToggleStrikethrough: I, textColorHex: F, highlightHex: v, onApplyTextColor: c, onApplyHighlight: z, paraProps: y, onApplyAlignment: m, onApplyLineSpacing: R, onApplyIndentChange: V, onApplyBulletList: j, onApplyNumberedList: p, onInsertTable: H, tableRows: K, tableCols: A, onSetTableRows: te, onSetTableCols: Y, onConfirmInsertTable: ne, onInsertImage: P, onPageBreak: w, onInsertShape: o, onInsertFootnote: f, onEnterHeader: U, onEnterFooter: M, findBarOpen: Q, onToggleFindBar: X, onOpenPageSetup: Z, styleList: le, onLoadStyles: oe, onApplyStyle: he, onOpenBookmarks: je, showParaMarks: Se, showControlCodes: J, showTransparentBorders: de, onToggleParaMarks: xe, onToggleControlCodes: De, onToggleTransparentBorders: Ae, fileName: Ee, dirty: Le, clipboardHasContent: Ke, onCopy: Ye, onCut: qe, onPaste: Ge, sidebarOpen: B, onToggleSidebar: G, onOpenTableProps: W, onOpenStyleDialog: ge, onOpenHeaderFooterDialog: ee, onOpenFieldDialog: ce, onOpenColumnDialog: ae, onOpenNumberingDialog: ie, onOpenEquationDialog: fe, onOpenFormDialog: Be, onExportSelectionHtml: Ht, onExportVerify: xt })=>{
        const [Qe, We] = n.useState(!1), [Xe, Ze] = n.useState(!1), [et, me] = n.useState(!1), [we, Ne] = n.useState(!1), [tt, ze] = n.useState(!1), [rt, nt] = n.useState(!1), [at, st] = n.useState(!1), [lt, ot] = n.useState(!1), [Ue, ve] = n.useState(!1), [At, Ie] = n.useState("#000000"), [ct, Ce] = n.useState("#FFFF00"), ft = n.useRef(null), gt = n.useRef(null), bt = n.useRef(null), mt = n.useRef(null), yt = n.useRef(null), vt = n.useRef(null), Ct = n.useRef(null), it = n.useRef(null), jt = n.useRef(null), It = n.useRef(null), dt = n.useRef(null), wt = n.useRef(null), kt = n.useRef(null), St = n.useRef(null), Nt = n.useRef(null), Ot = n.useRef(null), Pt = n.useRef(null), Rt = n.useRef(null);
        n.useEffect(()=>{
            const _ = (Oe)=>{
                const Pe = Oe.target, ye = (Me, ht)=>!Me.current?.contains(Pe) && !ht.current?.contains(Pe);
                Qe && ye(ft, gt) && We(!1), Xe && ye(bt, mt) && Ze(!1), et && ye(yt, vt) && me(!1), we && ye(Ct, it) && Ne(!1), tt && ye(jt, It) && ze(!1), rt && ye(dt, wt) && nt(!1), at && ye(kt, St) && st(!1), lt && ye(Nt, Ot) && ot(!1), Ue && ye(Pt, Rt) && ve(!1);
            };
            return document.addEventListener("mousedown", _), ()=>document.removeEventListener("mousedown", _);
        }, [
            Qe,
            Xe,
            et,
            we,
            tt,
            rt,
            at,
            lt,
            Ue
        ]);
        const Lt = n.useCallback((_)=>{
            S(_), We(!1);
        }, [
            S
        ]), Wt = n.useCallback((_)=>{
            E(_), Ze(!1);
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
            R(_), nt(!1);
        }, [
            R
        ]), Tt = n.useCallback((_)=>{
            k(_), ze(!1);
        }, [
            k
        ]), Ft = n.useCallback((_)=>{
            he(_), ot(!1);
        }, [
            he
        ]), Ve = n.useCallback(()=>{
            ne(), st(!1);
        }, [
            ne
        ]), Dt = (_, Oe, Pe, ye)=>e.jsxs("div", {
                className: "hwp-color-picker",
                children: [
                    e.jsx("div", {
                        className: "hwp-color-grid",
                        children: Lr.map((Me, ht)=>e.jsx("div", {
                                style: {
                                    display: "flex"
                                },
                                children: Me.map((He)=>e.jsx("div", {
                                        className: `hwp-color-swatch${_.toUpperCase() === He.toUpperCase() ? " active" : ""}`,
                                        style: {
                                            backgroundColor: He
                                        },
                                        title: He,
                                        onClick: ()=>ye(He)
                                    }, He))
                            }, ht))
                    }),
                    e.jsxs("div", {
                        className: "hwp-color-custom",
                        children: [
                            e.jsx("input", {
                                type: "color",
                                value: Oe,
                                onChange: (Me)=>Pe(Me.target.value)
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
                                    onClick: ()=>ze((_)=>!_),
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
                                tt && e.jsxs("div", {
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
                                                Ht(), ze(!1);
                                            },
                                            children: "HTML (선택 영역)"
                                        }),
                                        e.jsx("button", {
                                            onClick: ()=>{
                                                xt(), ze(!1);
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
                            onClick: Ye,
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
                            onClick: qe,
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
                            onClick: Ge,
                            disabled: !Ke,
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
                                Qe && e.jsx("div", {
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
                                    onClick: ()=>Ze((_)=>!_),
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
                                Xe && e.jsx("div", {
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
                            className: `hwp-toolbar-btn${O.bold ? " active" : ""}`,
                            title: `${h("site.hwpEditor.bold")} (Ctrl+B)`,
                            onClick: L,
                            style: {
                                fontWeight: "bold"
                            },
                            children: "B"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${O.italic ? " active" : ""}`,
                            title: `${h("site.hwpEditor.italic")} (Ctrl+I)`,
                            onClick: $,
                            style: {
                                fontStyle: "italic"
                            },
                            children: "I"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${O.underline ? " active" : ""}`,
                            title: `${h("site.hwpEditor.underline")} (Ctrl+U)`,
                            onClick: b,
                            style: {
                                textDecoration: "underline"
                            },
                            children: "U"
                        }),
                        e.jsx("button", {
                            className: `hwp-toolbar-btn${O.strikethrough ? " active" : ""}`,
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
                                                color: F,
                                                fontSize: "14px",
                                                lineHeight: 1
                                            },
                                            children: "A"
                                        }),
                                        e.jsx("div", {
                                            className: "hwp-color-indicator",
                                            style: {
                                                backgroundColor: F
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
                                et && e.jsx("div", {
                                    ref: vt,
                                    style: {
                                        position: "absolute",
                                        zIndex: 1e3,
                                        top: "100%",
                                        left: 0
                                    },
                                    children: Dt(F, At, Ie, Ut)
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
                                    children: Dt(v, ct, Ce, Vt)
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
                                onClick: ()=>nt((_)=>!_),
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
                            rt && e.jsx("div", {
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
                                    onClick: ()=>st((_)=>!_),
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
                                at && e.jsxs("div", {
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
                                            onClick: Ve,
                                            children: h("site.hwpEditor.insertTable")
                                        })
                                    ]
                                })
                            ]
                        }),
                        e.jsx("button", {
                            className: "hwp-toolbar-btn",
                            title: h("site.hwpEditor.insertImage"),
                            onClick: P,
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
                        className: `hwp-toolbar-btn${Q ? " active" : ""}`,
                        title: `${h("site.hwpEditor.findReplace")} (Ctrl+F)`,
                        onClick: X,
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
                                    oe(), ot((_)=>!_);
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
                            lt && e.jsxs("div", {
                                ref: Ot,
                                className: "hwp-toolbar-dropdown hwp-style-dropdown",
                                children: [
                                    le.length === 0 && e.jsx("div", {
                                        style: {
                                            padding: 10,
                                            fontSize: "0.82rem",
                                            color: "var(--text-secondary)"
                                        },
                                        children: "스타일 없음"
                                    }),
                                    le.map((_)=>e.jsx("button", {
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
                        onClick: je,
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
                            onClick: xe,
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
                            onClick: De,
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
                                            ae(), ve(!1);
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
                                            fe(), ve(!1);
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
                                            Be(), ve(!1);
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
                Ee && e.jsxs("span", {
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
                        Ee,
                        Le ? " *" : ""
                    ]
                }),
                e.jsx("button", {
                    className: `hwp-toolbar-btn${B ? " active" : ""}`,
                    title: B ? "사이드바 닫기" : "사이드바 열기",
                    onClick: G,
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
    }, Ur = pt.memo(Wr), Vr = ({ pageCount: h, currentPage: u, zoom: i, renderVer: k, pageCanvasRefs: t, overlayCanvasRefs: l, canvasRefs: x, cursorRect: g, cursorVisible: C, selRects: N, renderScaleRef: S, onCanvasMouseDown: E, onCanvasMouseMove: O, onCanvasMouseUp: L, onContextMenu: $, onDoubleClick: b, isDragging: I, onDragOver: F, onDragLeave: v, onDrop: c, onFocusInput: z })=>(n.useEffect(()=>{
            const y = S.current;
            for(let m = 0; m < h; m++){
                const R = l.current[m];
                if (!R) continue;
                const V = R.getContext("2d");
                if (!V) continue;
                V.clearRect(0, 0, R.width, R.height);
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
            onDragOver: F,
            onDragLeave: v,
            onDrop: c,
            children: Array.from({
                length: h
            }, (y, m)=>e.jsxs("div", {
                    ref: (R)=>{
                        x.current[m] = R;
                    },
                    className: "hwp-canvas",
                    style: {
                        transform: `scale(${i / 100})`,
                        transformOrigin: "top center"
                    },
                    onMouseDown: (R)=>E(R, m),
                    onMouseMove: (R)=>O(R, m),
                    onMouseUp: (R)=>L(R, m),
                    onContextMenu: (R)=>$(R, m),
                    onDoubleClick: (R)=>b(R, m),
                    children: [
                        e.jsx("canvas", {
                            ref: (R)=>{
                                t.current[m] = R;
                            },
                            className: "hwp-page-canvas"
                        }),
                        e.jsx("canvas", {
                            ref: (R)=>{
                                l.current[m] = R;
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
                    onChange: (O)=>{
                        l(O.target.value);
                    },
                    onKeyDown: (O)=>{
                        O.key === "Enter" && C();
                    },
                    autoFocus: !0
                }),
                e.jsx("input", {
                    type: "text",
                    placeholder: h("site.hwpEditor.replace"),
                    value: i,
                    onChange: (O)=>x(O.target.value),
                    onKeyDown: (O)=>{
                        O.key === "Enter" && N();
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
                            onChange: (O)=>g(O.target.checked)
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
        }), Jr = pt.memo($r), Kr = ({ menu: h, onClose: u, onUndo: i, onRedo: k, onCopy: t, onCut: l, onPaste: x, onEnterCell: g, onInsertRowBefore: C, onInsertRowAfter: N, onDeleteRow: S, onInsertColBefore: E, onInsertColAfter: O, onDeleteCol: L, onMergeCells: $, onSplitCell: b, onTableProps: I, onTableFormula: F, onDeleteTable: v, onShapeProps: c, onDeleteShape: z, onPictureProps: y, onDeletePicture: m, onDownloadImage: R, onZOrderFront: V, onZOrderBack: j, onZOrderForward: p, onZOrderBackward: H, onGroupShapes: K, onUngroupShape: A, onFieldProps: te, onRemoveField: Y, onFindNextControl: ne, onFindPrevControl: P })=>{
        const w = n.useRef(null);
        n.useEffect(()=>{
            const oe = (he)=>{
                w.current && !w.current.contains(he.target) && u();
            };
            return document.addEventListener("mousedown", oe), ()=>document.removeEventListener("mousedown", oe);
        }, [
            u
        ]), n.useEffect(()=>{
            const oe = (he)=>{
                he.key === "Escape" && u();
            };
            return document.addEventListener("keydown", oe), ()=>document.removeEventListener("keydown", oe);
        }, [
            u
        ]);
        const o = (oe, he)=>e.jsx("button", {
                onClick: ()=>{
                    he(), u();
                },
                children: oe
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
            }), Q = ()=>e.jsxs(e.Fragment, {
                children: [
                    o("셀 편집", g),
                    f,
                    o("위에 행 삽입", C),
                    o("아래에 행 삽입", N),
                    o("행 삭제", S),
                    f,
                    o("왼쪽에 열 삽입", E),
                    o("오른쪽에 열 삽입", O),
                    o("열 삭제", L),
                    f,
                    o("셀 병합", $),
                    o("셀 분할", b),
                    f,
                    o("표 속성", I),
                    o("표 계산식", F),
                    o("표 삭제", v)
                ]
            }), X = ()=>e.jsxs(e.Fragment, {
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
                    o("이미지 다운로드", R),
                    f,
                    U,
                    f,
                    o("그림 삭제", m)
                ]
            }), le = ()=>{
            switch(h.type){
                case "table":
                    return Q();
                case "shape":
                    return X();
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
            children: le()
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
    function Qr({ isOpen: h, onClose: u, t: i, editMode: k, cursor: t, charProps: l, paraProps: x, currentPage: g, pageCount: C, currentStyleName: N, styleList: S, onApplyStyle: E, cellProps: O, onUpdateCellProps: L, documentInfo: $, fieldInfo: b }) {
        const [I, F] = n.useState(O);
        n.useEffect(()=>{
            F(O);
        }, [
            O
        ]);
        const v = n.useCallback((m, R)=>{
            F((V)=>V && {
                    ...V,
                    [m]: R
                });
        }, []), c = n.useCallback(()=>{
            I && L(I);
        }, [
            I,
            L
        ]), z = n.useCallback((m)=>{
            const R = Number(m.target.value);
            Number.isNaN(R) || E(R);
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
                                            children: Object.entries(Gr).map(([m, R])=>e.jsx("option", {
                                                    value: m,
                                                    children: R
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
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(!1), [S, E] = n.useState(!1), [O, L] = n.useState(0), [$, b] = n.useState(0), [I, F] = n.useState("left");
        n.useEffect(()=>{
            i && (l(i.cellSpacing), g(i.cellPadding), N(i.pageBreak), E(i.repeatHeader), L(i.borderWidth), b(i.width), F(i.alignment));
        }, [
            i
        ]);
        const v = ()=>{
            k({
                cellSpacing: t,
                cellPadding: x,
                pageBreak: C,
                repeatHeader: S,
                borderWidth: O,
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
                                value: O,
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
                                onChange: (c)=>F(c.target.value),
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
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(0), [S, E] = n.useState(0), [O, L] = n.useState("top"), [$, b] = n.useState("horizontal"), [I, F] = n.useState(!1), [v, c] = n.useState("#ffffff");
        n.useEffect(()=>{
            i && (l(i.paddingTop), g(i.paddingBottom), N(i.paddingLeft), E(i.paddingRight), L(i.verticalAlign), b(i.textDirection), F(i.isHeader), c(tn(i.backgroundColor)));
        }, [
            i
        ]);
        const z = ()=>{
            k({
                paddingTop: t,
                paddingBottom: x,
                paddingLeft: C,
                paddingRight: S,
                verticalAlign: O,
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
                                value: O,
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
                                        onChange: (m)=>F(m.target.checked)
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
                                            const R = m.target.value;
                                            /^#[0-9a-fA-F]{0,6}$/.test(R) && c(R);
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
        const [l, x] = n.useState(14400), [g, C] = n.useState(7200), [N, S] = n.useState(0), [E, O] = n.useState(0), [L, $] = n.useState("none"), [b, I] = n.useState(0), [F, v] = n.useState(!1), [c, z] = n.useState(0), [y, m] = n.useState(0), [R, V] = n.useState(0), [j, p] = n.useState(0);
        n.useEffect(()=>{
            h === "properties" && i && (x(i.width), C(i.height), S(i.offsetX), O(i.offsetY), $(i.textWrap), I(i.zOrder), v(i.treatAsChar), z(i.marginLeft), m(i.marginRight), V(i.marginTop), p(i.marginBottom));
        }, [
            h,
            i
        ]);
        const H = ()=>{
            k?.({
                width: l,
                height: g,
                treatAsChar: F || void 0
            });
        }, K = ()=>{
            t?.({
                width: l,
                height: g,
                offsetX: N,
                offsetY: E,
                textWrap: L,
                zOrder: b,
                treatAsChar: F,
                marginLeft: c,
                marginRight: y,
                marginTop: R,
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
                                        checked: F,
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
                                        onChange: (A)=>O(Number(A.target.value))
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
                                        value: R,
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
        const [t, l] = n.useState(0), [x, g] = n.useState(0), [C, N] = n.useState(0), [S, E] = n.useState(0), [O, L] = n.useState(0), [$, b] = n.useState(0), [I, F] = n.useState(!1), [v, c] = n.useState("none"), [z, y] = n.useState(0), [m, R] = n.useState(0), [V, j] = n.useState(0), [p, H] = n.useState(!0);
        n.useEffect(()=>{
            u && (l(u.width), g(u.height), N(u.originalWidth), E(u.originalHeight), L(u.offsetX), b(u.offsetY), F(u.treatAsChar), c(u.textWrap), y(u.brightness), R(u.contrast), j(u.transparency));
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
                offsetX: O,
                offsetY: $,
                treatAsChar: I,
                textWrap: v,
                brightness: z,
                contrast: m,
                transparency: V
            });
        }, ne = {
            padding: "5px 10px",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-sm)",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontSize: "0.85rem",
            width: "100%"
        }, P = {
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
                                value: O,
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
                                style: ne,
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
                                        onChange: (o)=>F(o.target.checked)
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
                                style: P,
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
                                style: P,
                                children: [
                                    e.jsx("input", {
                                        type: "range",
                                        min: -100,
                                        max: 100,
                                        value: m,
                                        onChange: (o)=>R(Number(o.target.value)),
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
                                style: P,
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
        const [g, C] = n.useState(null), [N, S] = n.useState(!1), [E, O] = n.useState(!1), [L, $] = n.useState(null), [b, I] = n.useState({
            name: "",
            engName: "",
            type: "paragraph",
            nextStyleId: 0
        }), [F, v] = n.useState({
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
                name: F.name.trim(),
                engName: F.engName.trim()
            }), O(!1));
        }, y = ()=>{
            if (g === null) return;
            const j = u.find((p)=>p.id === g);
            j && window.confirm(`"${j.name}" 스타일을 삭제하시겠습니까?`) && (t(g), C(null), O(!1));
        }, m = ()=>{
            g !== null && (x(g), h());
        }, R = (j)=>{
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
                                                        C(j.id), S(!1), O(!1);
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
                                                            children: R(j.type)
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
                                                        value: F.name,
                                                        onChange: (j)=>v({
                                                                ...F,
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
                                                        value: F.engName,
                                                        onChange: (j)=>v({
                                                                ...F,
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
                                                        children: R(L.type || "")
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
                                                        onClick: ()=>O(!1),
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
                                    S(!0), O(!1), C(null);
                                },
                                children: "새 스타일"
                            }),
                            e.jsx("button", {
                                onClick: ()=>O(!0),
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
    }, hn = ({ onClose: h, headerFooterList: u, onRefreshList: i, onCreateHeaderFooter: k, onDeleteHeaderFooter: t, onToggleHide: l, onNavigateByPage: x, onApplyTemplate: g, onInsertField: C, onEnterEditMode: N, sectionCount: S, currentPage: E, pageCount: O })=>{
        const [L, $] = n.useState(0), [b, I] = n.useState("header"), [F, v] = n.useState(String(E)), [c, z] = n.useState(Tr[0].id), y = b === "header", m = u.filter((P)=>P.secIdx === L && P.isHeader === y), R = ()=>{
            k(L, y), i();
        }, V = (P)=>{
            const w = P.isHeader ? "머리말" : "꼬리말";
            window.confirm(`이 ${w}을 삭제하시겠습니까?`) && (t(P.secIdx, P.isHeader, P.applyTo), i());
        }, j = (P)=>{
            l(P.secIdx, P.isHeader, P.applyTo), i();
        }, p = (P)=>{
            N(P.secIdx, P.isHeader), h();
        }, H = ()=>{
            const P = Math.max(1, Math.min(O, Number(F) || 1));
            x(L, y, P);
        }, K = (P)=>{
            g(P.secIdx, P.isHeader, P.applyTo, c), i();
        }, A = (P, w)=>{
            C(P.secIdx, P.isHeader, P.applyTo, w);
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
        }, ne = {
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
                onClick: (P)=>P.stopPropagation(),
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
                                onChange: (P)=>$(Number(P.target.value)),
                                style: te,
                                children: Array.from({
                                    length: S
                                }, (P, w)=>e.jsxs("option", {
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
                        ].map((P)=>e.jsx("button", {
                                onClick: ()=>I(P),
                                style: {
                                    flex: 1,
                                    padding: "8px 0",
                                    border: "1px solid var(--border-color)",
                                    borderBottom: b === P ? "2px solid var(--primary)" : "1px solid var(--border-color)",
                                    background: b === P ? "var(--bg-primary)" : "var(--bg-secondary)",
                                    color: b === P ? "var(--primary)" : "var(--text-secondary)",
                                    fontWeight: b === P ? 600 : 400,
                                    fontSize: "0.85rem",
                                    cursor: "pointer",
                                    borderRadius: P === "header" ? "var(--radius-sm) 0 0 0" : "0 var(--radius-sm) 0 0"
                                },
                                children: P === "header" ? "머리말" : "꼬리말"
                            }, P))
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
                        }) : m.map((P, w)=>e.jsxs("div", {
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
                                                            dn[P.applyTo] || `#${P.applyTo}`
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
                                                    P.paraCount,
                                                    P.hidden && e.jsx("span", {
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
                                        onClick: ()=>p(P),
                                        style: Y,
                                        children: "편집"
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>j(P),
                                        style: Y,
                                        children: P.hidden ? "표시" : "숨김"
                                    }),
                                    e.jsx("button", {
                                        onClick: ()=>V(P),
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
                        style: ne,
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
                                max: O,
                                value: F,
                                onChange: (P)=>v(P.target.value),
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
                                    O,
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
                        style: ne,
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
                                onChange: (P)=>z(Number(P.target.value)),
                                style: {
                                    ...te,
                                    flex: 1
                                },
                                children: Tr.map((P)=>e.jsx("option", {
                                        value: P.id,
                                        children: P.label
                                    }, P.id))
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
                        style: ne,
                        children: "필드 삽입"
                    }),
                    e.jsx("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginBottom: 8
                        },
                        children: cn.map((P)=>e.jsx("button", {
                                onClick: ()=>{
                                    m.length > 0 && A(m[0], P.type);
                                },
                                disabled: m.length === 0,
                                style: Y,
                                children: P.label
                            }, P.type))
                    }),
                    e.jsxs("div", {
                        className: "hwp-dialog-actions",
                        style: {
                            marginTop: 16
                        },
                        children: [
                            e.jsxs("button", {
                                onClick: R,
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
        const [E, O] = n.useState("fields"), [L, $] = n.useState(null), [b, I] = n.useState(""), [F, v] = n.useState(C?.name ?? ""), [c, z] = n.useState(C?.guide ?? ""), [y, m] = n.useState(C?.memo ?? ""), [R, V] = n.useState(C?.editable ?? !0), j = L !== null ? u.find((M)=>M.index === L) ?? null : null, p = (M)=>{
            $(M.index);
            const Q = k(M.name);
            I(Q || M.value);
        }, H = ()=>{
            j && (t(j.name, b), i());
        }, K = ()=>{
            L !== null && (S(L), h());
        }, A = ()=>{
            if (j && window.confirm(`"${j.name}" 필드를 삭제하시겠습니까?`)) {
                const M = j.path.split("/"), Q = Number(M[0]) || 0, X = Number(M[1]) || 0;
                g(Q, X), $(null), i();
            }
        }, te = ()=>{
            L !== null && l(L);
        }, Y = ()=>{
            x();
        }, ne = ()=>{
            N({
                name: F,
                guide: c,
                memo: y,
                editable: R
            });
        }, P = ()=>{
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
        }, U = (M, Q)=>M.length > Q ? M.slice(0, Q) + "..." : M;
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
                                    O(M), M === "clickhere" && P();
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
                                            value: F,
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
                                            checked: R,
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
                                        onClick: ne,
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
        const [g, C] = n.useState(""), [N, S] = n.useState(null), [E, O] = n.useState(""), L = ()=>{
            const z = g.trim();
            z && (u.some((y)=>y.name === z) || (k(z), C(""), i()));
        }, $ = (z)=>{
            z.key === "Enter" && L();
        }, b = (z)=>{
            t(z), i();
        }, I = (z, y)=>{
            S(z), O(y);
        }, F = (z)=>{
            const y = E.trim();
            if (!y || y === z.name) {
                S(null);
                return;
            }
            u.some((m)=>m.name === y && m !== z) || (l(z, y), S(null), i());
        }, v = (z, y)=>{
            z.key === "Enter" ? F(y) : z.key === "Escape" && S(null);
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
                                                onChange: (m)=>O(m.target.value),
                                                onKeyDown: (m)=>v(m, z),
                                                onBlur: ()=>F(z),
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
        const [t, l] = n.useState(1), [x, g] = n.useState("equal"), [C, N] = n.useState(1134), [S, E] = n.useState([]), [O, L] = n.useState("none");
        n.useEffect(()=>{
            u && (l(u.count), g(u.type === "custom" ? "custom" : "equal"), N(u.gap), L(u.separatorType), u.widths.length > 0 && E([
                ...u.widths
            ]));
        }, [
            u
        ]), n.useEffect(()=>{
            E((y)=>Array.from({
                    length: t
                }, (R, V)=>V < y.length ? y[V] : 8504));
        }, [
            t
        ]);
        const $ = (y, m, R)=>Math.max(m, Math.min(R, y)), b = (y)=>{
            l($(y, 1, 5));
        }, I = (y, m)=>{
            E((R)=>{
                const V = [
                    ...R
                ];
                return V[y] = Math.max(0, m), V;
            });
        }, F = ()=>{
            const y = {
                count: t,
                type: x,
                gap: C,
                separatorType: O
            };
            x === "custom" && S.length === t && (y.widths = [
                ...S
            ]), i(y);
        }, v = ()=>{
            k();
        }, z = (()=>{
            if (x === "custom" && S.length === t) {
                const y = S.reduce((m, R)=>m + R, 0);
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
                                value: O,
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
                                                onChange: (R)=>I(m, Number(R.target.value))
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
                                    m < z.length - 1 && O !== "none" && e.jsx("div", {
                                        style: {
                                            width: 1,
                                            alignSelf: "stretch",
                                            borderLeft: O === "dashed" ? "1px dashed var(--text-secondary)" : O === "double" ? "3px double var(--text-secondary)" : "1px solid var(--text-secondary)"
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
                                onClick: F,
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
            g((F)=>({
                    ...F,
                    [b]: I
                }));
        }, S = (b)=>{
            const I = C(b);
            l === "cell" ? t(b.index, I) : k(b.index, I), g((F)=>{
                const v = {
                    ...F
                };
                return delete v[b.index], v;
            }), i();
        }, E = (b)=>{
            const I = b.checked ? "0" : "1";
            N(b.index, I);
        }, O = (b)=>{
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
                                    onClick: ()=>O(b),
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
                            onChange: (F)=>N(b.index, F.target.value),
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
                                b.options?.map((F, v)=>e.jsx("option", {
                                        value: F,
                                        children: F
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
                            onChange: (F)=>N(b.index, F.target.value),
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
        const [N, S] = n.useState("numbering"), [E, O] = n.useState(null), [L, $] = n.useState("1.2.3."), [b, I] = n.useState(1), [F, v] = n.useState(0), [c, z] = n.useState(1), [y, m] = n.useState(null), [R, V] = n.useState(null), [j, p] = n.useState(0), H = ()=>{
            t({
                format: L,
                startNumber: b
            }), k();
        }, K = ()=>{
            E !== null && l(E, F);
        }, A = ()=>{
            E !== null && g(E, c);
        }, te = ()=>{
            C();
        }, Y = ()=>{
            y !== null && x(y, j);
        }, ne = (o)=>{
            V(o);
            const f = i.find((U)=>U.symbol === o);
            f && m(f.id);
        }, P = (o)=>{
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
                                        onClick: ()=>O(o.id),
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
                                                        children: P(o.format)
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
                                        value: F,
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
                                        onClick: ()=>ne(o),
                                        style: {
                                            width: "100%",
                                            aspectRatio: "1",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.2rem",
                                            border: R === o ? "2px solid var(--primary, #0046C8)" : "1px solid var(--border-color)",
                                            borderRadius: "var(--radius-sm)",
                                            background: R === o ? "var(--primary-light, #e8f0fe)" : "var(--bg-primary)",
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
        const [x, g] = n.useState(i?.script ?? ""), [C, N] = n.useState(i?.fontSize ?? 10), [S, E] = n.useState(null), [O, L] = n.useState(0), $ = n.useRef(null), b = n.useCallback((v)=>{
            const c = $.current;
            if (!c) {
                g((j)=>j + v);
                return;
            }
            const z = c.selectionStart, y = c.selectionEnd, m = x.slice(0, z), R = x.slice(y), V = m + v + R;
            g(V), requestAnimationFrame(()=>{
                c.selectionStart = z + v.length, c.selectionEnd = z + v.length, c.focus();
            });
        }, [
            x
        ]), I = ()=>{
            const v = l(x);
            E(v);
        }, F = ()=>{
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
                                    background: O === c ? "rgba(var(--primary-rgb), 0.1)" : "var(--bg-primary)",
                                    color: O === c ? "var(--primary)" : "var(--text-secondary)",
                                    fontSize: "0.78rem",
                                    fontWeight: O === c ? 600 : 400,
                                    cursor: "pointer"
                                },
                                children: v.label
                            }, v.label))
                    }),
                    e.jsx("div", {
                        className: "hwp-symbol-palette",
                        children: Fr[O].symbols.map((v, c)=>e.jsx("button", {
                                className: "hwp-symbol-btn",
                                onClick: ()=>b(v),
                                title: v,
                                children: v
                            }, `${O}-${c}`))
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
                                onClick: F,
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
        const [g, C] = n.useState("paper"), [N, S] = n.useState(u.width), [E, O] = n.useState(u.height), [L, $] = n.useState(u.landscape), [b, I] = n.useState(u.marginTop), [F, v] = n.useState(u.marginBottom), [c, z] = n.useState(u.marginLeft), [y, m] = n.useState(u.marginRight), [R, V] = n.useState(""), [j, p] = n.useState(k?.startType ?? "new_page"), [H, K] = n.useState(k?.textDirection ?? "horizontal"), [A, te] = n.useState(l?.hideHeader ?? !1), [Y, ne] = n.useState(l?.hideFooter ?? !1), [P, w] = n.useState(l?.hideMasterPage ?? !1), [o, f] = n.useState(l?.hideBorder ?? !1), [U, M] = n.useState(l?.hideFill ?? !1), [Q, X] = n.useState(l?.hidePageNumber ?? !1);
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
            l && (te(l.hideHeader), ne(l.hideFooter), w(l.hideMasterPage), f(l.hideBorder), M(l.hideFill), X(l.hidePageNumber));
        }, [
            l
        ]);
        const Z = (J)=>{
            V(J);
            const de = Or.find((xe)=>xe.label === J);
            de && de.width > 0 && (S(de.width), O(de.height));
        }, le = ()=>{
            $((J)=>{
                const de = !J;
                if (de) {
                    const xe = N;
                    S(E), O(xe);
                } else {
                    const xe = N;
                    S(E), O(xe);
                }
                return de;
            });
        }, oe = ()=>{
            i({
                width: N,
                height: E,
                marginTop: b,
                marginBottom: F,
                marginLeft: c,
                marginRight: y,
                landscape: L
            });
        }, he = ()=>{
            t({
                startType: j,
                textDirection: H
            });
        }, je = ()=>{
            x({
                hideHeader: A,
                hideFooter: Y,
                hideMasterPage: P,
                hideBorder: o,
                hideFill: U,
                hidePageNumber: Q
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
                                        value: R,
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
                                            O(Number(J.target.value)), V("사용자 지정 (Custom)");
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
                                                onChange: le
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
                                        value: F,
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
                                        onClick: oe,
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
                                                    onChange: (J)=>ne(J.target.checked)
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
                                                    checked: P,
                                                    onChange: (J)=>w(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: P ? "감춤" : "표시"
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
                                                    checked: Q,
                                                    onChange: (J)=>X(J.target.checked)
                                                }),
                                                e.jsx("span", {
                                                    style: {
                                                        fontSize: "0.82rem"
                                                    },
                                                    children: Q ? "감춤" : "표시"
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
                                            onClick: je,
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
        const h = n.useRef(null), [u, i] = n.useState(0), [k, t] = n.useState(0), [l, x] = n.useState(0), [g, C] = n.useState("1"), [N, S] = n.useState(100), [E, O] = n.useState(""), [L, $] = n.useState(!1), b = n.useRef({
            ...Nn
        }), [I, F] = n.useState(null), [v, c] = n.useState(null), z = n.useRef(null), [y, m] = n.useState(!1), [R, V] = n.useState([]), [j, p] = n.useState(!0), H = n.useCallback((q)=>{
            b.current = q, F(q);
        }, []), K = n.useRef(null), A = n.useRef({}), te = n.useRef({}), Y = n.useRef(typeof window < "u" && window.devicePixelRatio || 1), ne = n.useRef({}), P = n.useRef({}), [w, o] = n.useState({
            ...On
        }), [f, U] = n.useState({
            ...Pn
        }), M = n.useRef([]), Q = n.useRef([]), [X, Z] = n.useState(!1), [le, oe] = n.useState(!1), he = n.useRef(!1), je = n.useRef(null), [Se, J] = n.useState(!1), [de, xe] = n.useState(!1), De = n.useRef(null), [Ae, Ee] = n.useState(""), [Le, Ke] = n.useState(!1), [Ye, qe] = n.useState(!1), [Ge, B] = n.useState(!1), [G, W] = n.useState(!1), [ge, ee] = n.useState(!1), [ce, ae] = n.useState(!1), [ie, fe] = n.useState(!1), [Be, Ht] = n.useState(3), [xt, Qe] = n.useState(3), [We, Xe] = n.useState("#000000"), [Ze, et] = n.useState("#FFFF00"), [me, we] = n.useState("맑은 고딕"), [Ne, tt] = n.useState("10"), [ze, rt] = n.useState(!1), [nt, at] = n.useState(""), [st, lt] = n.useState(""), [ot, Ue] = n.useState(!1), [ve, At] = n.useState(""), [Ie, ct] = n.useState("body"), Ce = n.useRef("body"), ft = n.useCallback((q)=>{
            Ce.current = q, ct(q);
        }, []), gt = n.useRef(null), bt = n.useRef(null), mt = n.useRef(null), [yt, vt] = n.useState(null), [Ct, it] = n.useState(!1), [jt, It] = n.useState({
            ...Rn
        }), [dt, wt] = n.useState([]), [kt, St] = n.useState(!1), [Nt, Ot] = n.useState(!1), [Pt, Rt] = n.useState(!1), [Lt, Wt] = n.useState(!1), [Ut, Vt] = n.useState(""), [_t, Tt] = n.useState([]), Ft = n.useRef(null), Ve = n.useRef(null), Dt = n.useRef(null), _ = n.useRef(null), Oe = n.useRef(null), Pe = n.useRef(null), ye = n.useRef(null), Me = n.useRef(null), ht = n.useRef(null), He = n.useRef(null), Jt = n.useRef(null), Kt = n.useRef(null), Yt = n.useRef(null), qt = n.useRef(null), Gt = n.useRef(null), Qt = n.useRef(null), Xt = n.useRef(null), [Zt, er] = n.useState(!1), [tr, rr] = n.useState(!1), [nr, ar] = n.useState(!1), [sr, lr] = n.useState(!1), [or, cr] = n.useState(!1), [ir, dr] = n.useState(!1), [hr, ur] = n.useState(!1), [pr, xr] = n.useState(!1), [fr, gr] = n.useState(!1), [br, mr] = n.useState(!1), [yr, vr] = n.useState(!1), [Cr, jr] = n.useState(!1), [Ir, wr] = n.useState(!1), [kr, Sr] = n.useState(!1), [r, a] = n.useState(!1), [s, d] = n.useState(!1), [D, T] = n.useState(!1);
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
            setFileName: O,
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
            selRects: R,
            setSelRects: V,
            cursorVisible: j,
            setCursorVisible: p,
            pageCanvasRefs: A,
            overlayCanvasRefs: te,
            renderScaleRef: Y,
            pageSizesRef: ne,
            canvasRefs: P,
            charProps: w,
            setCharProps: o,
            paraProps: f,
            setParaProps: U,
            undoStack: M,
            redoStack: Q,
            canUndo: X,
            setCanUndo: Z,
            canRedo: le,
            setCanRedo: oe,
            composingRef: he,
            hiddenInputRef: je,
            isDragging: Se,
            setIsDragging: J,
            isDragSelecting: de,
            setIsDragSelecting: xe,
            dragStartPos: De,
            editorError: Ae,
            setEditorError: Ee,
            fontOpen: Le,
            setFontOpen: Ke,
            sizeOpen: Ye,
            setSizeOpen: qe,
            colorOpen: Ge,
            setColorOpen: B,
            highlightOpen: G,
            setHighlightOpen: W,
            exportOpen: ge,
            setExportOpen: ee,
            spacingOpen: ce,
            setSpacingOpen: ae,
            tableDialogOpen: ie,
            setTableDialogOpen: fe,
            tableRows: Be,
            setTableRows: Ht,
            tableCols: xt,
            setTableCols: Qe,
            customTextColor: We,
            setCustomTextColor: Xe,
            customHighlight: Ze,
            setCustomHighlight: et,
            fontInput: me,
            setFontInput: we,
            sizeInput: Ne,
            setSizeInput: tt,
            findBarOpen: ze,
            setFindBarOpen: rt,
            findQuery: nt,
            setFindQuery: at,
            replaceQuery: st,
            setReplaceQuery: lt,
            caseSensitive: ot,
            setCaseSensitive: Ue,
            findInfo: ve,
            setFindInfo: At,
            editMode: Ie,
            setEditMode: ft,
            editModeRef: Ce,
            cellCtxRef: gt,
            hfCtxRef: bt,
            fnCtxRef: mt,
            contextMenu: yt,
            setContextMenu: vt,
            pageDefOpen: Ct,
            setPageDefOpen: it,
            pageDef: jt,
            setPageDef: It,
            styleList: dt,
            setStyleList: wt,
            styleOpen: kt,
            setStyleOpen: St,
            showControlCodes: Nt,
            setShowControlCodes: Ot,
            showParaMarks: Pt,
            setShowParaMarks: Rt,
            bookmarkOpen: Lt,
            setBookmarkOpen: Wt,
            bookmarkName: Ut,
            setBookmarkName: Vt,
            bookmarkList: _t,
            setBookmarkList: Tt,
            fontBtnRef: Ft,
            fontDropRef: Ve,
            sizeBtnRef: Dt,
            sizeDropRef: _,
            colorBtnRef: Oe,
            colorDropRef: Pe,
            hlBtnRef: ye,
            hlDropRef: Me,
            exportBtnRef: ht,
            exportDropRef: He,
            spacingBtnRef: Jt,
            spacingDropRef: Kt,
            tableDialogRef: Yt,
            tableBtnRef: qt,
            styleBtnRef: Gt,
            styleDropRef: Qt,
            contextMenuRef: Xt,
            sidebarOpen: Zt,
            setSidebarOpen: er,
            clipboardHasContent: tr,
            setClipboardHasContent: rr,
            clipboardHasControl: nr,
            setClipboardHasControl: ar,
            tablePropsOpen: sr,
            setTablePropsOpen: lr,
            cellPropsOpen: or,
            setCellPropsOpen: cr,
            shapeDialogOpen: ir,
            setShapeDialogOpen: dr,
            picturePropsOpen: hr,
            setPicturePropsOpen: ur,
            styleDialogOpen: pr,
            setStyleDialogOpen: xr,
            headerFooterDialogOpen: fr,
            setHeaderFooterDialogOpen: gr,
            fieldDialogOpen: br,
            setFieldDialogOpen: mr,
            bookmarkDialogOpen: yr,
            setBookmarkDialogOpen: vr,
            columnDialogOpen: Cr,
            setColumnDialogOpen: jr,
            formDialogOpen: Ir,
            setFormDialogOpen: wr,
            numberingDialogOpen: kr,
            setNumberingDialogOpen: Sr,
            equationDialogOpen: r,
            setEquationDialogOpen: a,
            showTransparentBorders: s,
            setShowTransparentBorders: d,
            debugOverlay: D,
            setDebugOverlay: T,
            pendingCharFormat: K
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
        const { editMode: u, getDoc: i, getCursor: k, getCursorRect: t, setCursor: l, setCursorRect: x, moveCursor: g, updateCursorDisplay: C, updateSelectionRects: N, getSelAnchor: S, setSelAnchor: E, setHasSelection: O, saveSnapshot: L, handleUndo: $, handleRedo: b, deleteSelection: I, insertText: F, deleteCharBefore: v, deleteCharAfter: c, toggleBold: z, toggleItalic: y, toggleUnderline: m, insertTextInCell: R, deleteTextInCell: V, splitParagraphInCell: j, applyCharFormatInCell: p, getCellCtx: H, enterCellMode: K, insertTextInHf: A, deleteTextInHf: te, splitParagraphInHf: Y, insertTextInFn: ne, deleteTextInFn: P, splitParagraphInFn: w, setEditMode: o, clearCellCtx: f, clearHfCtx: U, clearFnCtx: M, rerenderCurrentPage: Q, handleHtmlPaste: X, handleCopy: Z, handleCut: le, setFindBarOpen: oe, closeAllDropdowns: he, findNextControl: je, findPrevControl: Se, navigateNextEditable: J, composingRef: de, editModeRef: xe, hiddenInputRef: De } = h, Ae = n.useCallback((B)=>{
            const G = H();
            if (!G) {
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
                            const ee = zt(ge.getTableDimensions(G.secIdx, G.parentParaIdx, G.controlIdx));
                            if (ee) {
                                const ce = ee.rows * ee.cols;
                                B.shiftKey ? G.cellIdx - 1 >= 0 && K(G.secIdx, G.parentParaIdx, G.controlIdx, G.cellIdx - 1) : G.cellIdx + 1 < ce && K(G.secIdx, G.parentParaIdx, G.controlIdx, G.cellIdx + 1);
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
        ]), Ee = n.useCallback((B)=>{
            if (xe.current !== "header" && xe.current !== "footer") {
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
            xe
        ]), Le = n.useCallback((B)=>{
            if (xe.current !== "footnote") {
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
                    B.preventDefault(), P(!1);
                    break;
                case "Delete":
                    B.preventDefault(), P(!0);
                    break;
            }
        }, [
            o,
            M,
            $,
            b,
            w,
            P,
            xe
        ]), Ke = n.useCallback((B)=>{
            if (de.current) return;
            const G = i();
            if (!G) return;
            const W = k();
            if (!W) return;
            if (u === "cell") {
                Ae(B);
                return;
            }
            if (u === "header" || u === "footer") {
                Ee(B);
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
                        B.preventDefault(), oe(!0);
                        return;
                    case "a":
                        {
                            B.preventDefault();
                            try {
                                const ee = G.getSectionCount();
                                if (ee === 0) return;
                                const ce = ee - 1, ae = G.getParagraphCount(ce) - 1, ie = G.getParagraphLength(ce, ae), fe = {
                                    secIdx: 0,
                                    paraIdx: 0,
                                    charOffset: 0
                                }, Be = {
                                    secIdx: ce,
                                    paraIdx: ae,
                                    charOffset: ie
                                };
                                E(fe), l(Be), N(fe, Be), O(!0), C(Be);
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
                            B.preventDefault(), le();
                            return;
                        }
                    case "v":
                        {
                            B.preventDefault(), X();
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
                B.preventDefault(), B.shiftKey ? Se() : je();
                return;
            }
            switch(B.key){
                case "Enter":
                    {
                        if (B.preventDefault(), L(), S()) {
                            const ae = I();
                            ae && l(ae);
                        }
                        const ce = k();
                        try {
                            const ae = G.splitParagraph(ce.secIdx, ce.paraIdx, ce.charOffset), ie = zt(ae), fe = {
                                secIdx: ce.secIdx,
                                paraIdx: ie?.paraIdx ?? ce.paraIdx + 1,
                                charOffset: 0
                            };
                            g(fe);
                        } catch  {}
                        Q();
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
                                ee.charOffset = G.getParagraphLength(W.secIdx, ee.paraIdx);
                            } catch  {
                                ee.charOffset = 0;
                            }
                        } else break;
                        B.shiftKey ? (S() || E({
                            ...W
                        }), l(ee), N(S(), ee), O(!0), C(ee)) : g(ee);
                        break;
                    }
                case "ArrowRight":
                    {
                        B.preventDefault();
                        const ee = {
                            ...W
                        };
                        try {
                            const ce = G.getParagraphLength(W.secIdx, W.paraIdx);
                            if (W.charOffset < ce) ee.charOffset = W.charOffset + 1;
                            else {
                                const ae = G.getParagraphCount(W.secIdx);
                                if (W.paraIdx < ae - 1) ee.paraIdx = W.paraIdx + 1, ee.charOffset = 0;
                                else break;
                            }
                        } catch  {
                            break;
                        }
                        B.shiftKey ? (S() || E({
                            ...W
                        }), l(ee), N(S(), ee), O(!0), C(ee)) : g(ee);
                        break;
                    }
                case "ArrowUp":
                    {
                        B.preventDefault();
                        const ee = t(), ce = ee ? ee.x : 0;
                        try {
                            const ae = G.moveVertical(W.secIdx, W.paraIdx, W.charOffset, -1, ce, 4294967295, 4294967295, 4294967295, 4294967295), ie = zt(ae);
                            if (ie) {
                                const fe = {
                                    secIdx: ie.sectionIndex ?? W.secIdx,
                                    paraIdx: ie.paragraphIndex ?? ie.paraIdx ?? W.paraIdx,
                                    charOffset: ie.charOffset ?? W.charOffset
                                };
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(fe), N(S(), fe), O(!0), C(fe)) : g(fe);
                            }
                        } catch  {
                            if (W.paraIdx > 0) {
                                const ae = {
                                    ...W,
                                    paraIdx: W.paraIdx - 1
                                };
                                try {
                                    ae.charOffset = Math.min(W.charOffset, G.getParagraphLength(W.secIdx, ae.paraIdx));
                                } catch  {
                                    ae.charOffset = 0;
                                }
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(ae), N(S(), ae), O(!0), C(ae)) : g(ae);
                            }
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        B.preventDefault();
                        const ee = t(), ce = ee ? ee.x : 0;
                        try {
                            const ae = G.moveVertical(W.secIdx, W.paraIdx, W.charOffset, 1, ce, 4294967295, 4294967295, 4294967295, 4294967295), ie = zt(ae);
                            if (ie) {
                                const fe = {
                                    secIdx: ie.sectionIndex ?? W.secIdx,
                                    paraIdx: ie.paragraphIndex ?? ie.paraIdx ?? W.paraIdx,
                                    charOffset: ie.charOffset ?? W.charOffset
                                };
                                B.shiftKey ? (S() || E({
                                    ...W
                                }), l(fe), N(S(), fe), O(!0), C(fe)) : g(fe);
                            }
                        } catch  {
                            try {
                                const ae = G.getParagraphCount(W.secIdx);
                                if (W.paraIdx < ae - 1) {
                                    const ie = {
                                        ...W,
                                        paraIdx: W.paraIdx + 1
                                    };
                                    ie.charOffset = Math.min(W.charOffset, G.getParagraphLength(W.secIdx, ie.paraIdx)), B.shiftKey ? (S() || E({
                                        ...W
                                    }), l(ie), N(S(), ie), O(!0), C(ie)) : g(ie);
                                }
                            } catch  {}
                        }
                        break;
                    }
                case "Home":
                    {
                        B.preventDefault();
                        try {
                            const ee = zt(G.getLineInfo(W.secIdx, W.paraIdx, W.charOffset)), ce = {
                                ...W,
                                charOffset: ee ? ee.charStart : 0
                            };
                            B.shiftKey ? (S() || E({
                                ...W
                            }), l(ce), N(S(), ce), O(!0), C(ce)) : g(ce);
                        } catch  {}
                        break;
                    }
                case "End":
                    {
                        B.preventDefault();
                        try {
                            const ee = zt(G.getLineInfo(W.secIdx, W.paraIdx, W.charOffset)), ce = G.getParagraphLength(W.secIdx, W.paraIdx), ae = {
                                ...W,
                                charOffset: ee ? Math.min(ee.charEnd, ce) : ce
                            };
                            B.shiftKey ? (S() || E({
                                ...W
                            }), l(ae), N(S(), ae), O(!0), C(ae)) : g(ae);
                        } catch  {}
                        break;
                    }
                case "Tab":
                    B.preventDefault(), F("	");
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
            Ee,
            Le,
            $,
            b,
            z,
            y,
            m,
            F,
            I,
            v,
            c,
            L,
            g,
            Q,
            N,
            C,
            l,
            x,
            E,
            O,
            S,
            X,
            Z,
            le,
            oe,
            he,
            je,
            Se,
            J
        ]), Ye = n.useCallback(()=>{
            de.current = !0;
        }, [
            de
        ]), qe = n.useCallback((B)=>{
            de.current = !1;
            const G = B.data;
            if (G) {
                const W = xe.current;
                W === "cell" ? R(G) : W === "header" || W === "footer" ? A(G) : W === "footnote" ? ne(G) : F(G);
            }
            De.current && (De.current.value = "");
        }, [
            de,
            xe,
            De,
            F,
            R,
            A,
            ne
        ]), Ge = n.useCallback((B)=>{
            if (de.current) return;
            const G = B.target, W = G.value;
            if (W) {
                const ge = xe.current;
                ge === "cell" ? R(W) : ge === "header" || ge === "footer" ? A(W) : ge === "footnote" ? ne(W) : F(W), G.value = "";
            }
        }, [
            de,
            xe,
            F,
            R,
            A,
            ne
        ]);
        return {
            handleKeyDown: Ke,
            handleIMECompositionStart: Ye,
            handleIMECompositionEnd: qe,
            handleIMEInput: Ge
        };
    }
    function Je(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    function Dn(h) {
        const { getDoc: u, getCursor: i, getSelAnchor: k, getCellCtx: t, editMode: l, saveSnapshot: x, deleteSelection: g, setCursor: C, moveCursor: N, rerender: S, rerenderCurrentPage: E, insertText: O } = h, [L, $] = n.useState(!1), [b, I] = n.useState(!1), F = n.useCallback(()=>{
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
                    const te = j.copySelectionInCell(H.secIdx, H.parentParaIdx, H.controlIdx, H.cellIdx, H.cellParaIdx, K, A), Y = Je(te);
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
                    const ne = j.copySelection(H.secIdx, K, A, te, Y), P = Je(ne);
                    P?.text && navigator.clipboard.writeText(P.text).catch(()=>{});
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
                F(), x();
                try {
                    const H = g();
                    H && (C(H), N(H)), E();
                } catch  {}
            }
        }, [
            u,
            k,
            F,
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
                Je(H)?.ok && (I(!0), $(!0));
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
                            const ne = j.pasteHtmlInCell(Y.secIdx, Y.parentParaIdx, Y.controlIdx, Y.cellIdx, Y.cellParaIdx, Y.charOffset, te), P = Je(ne);
                            P?.ok && (Y.cellParaIdx = P.paraIdx ?? Y.cellParaIdx, Y.charOffset = P.charOffset ?? Y.charOffset);
                        } catch  {}
                    } else {
                        const Y = i();
                        try {
                            const ne = j.pasteHtml(Y.secIdx, Y.paraIdx, Y.charOffset, te), P = Je(ne);
                            P?.ok && N({
                                secIdx: Y.secIdx,
                                paraIdx: P.paraIdx ?? Y.paraIdx,
                                charOffset: P.charOffset ?? 0
                            });
                        } catch  {}
                    }
                    S();
                    return;
                }
            } catch  {}
            try {
                const H = await navigator.clipboard.readText();
                H && O(H);
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
            O
        ]), y = n.useCallback(()=>{
            const j = u();
            if (!j) return;
            if (x(), k()) try {
                const K = g();
                K && C(K);
            } catch  {}
            const H = i();
            try {
                const K = j.pasteControl(H.secIdx, H.paraIdx, H.charOffset), A = Je(K);
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
                                const K = j.pasteInternalInCell(H.secIdx, H.parentParaIdx, H.controlIdx, H.cellIdx, H.cellParaIdx, H.charOffset), A = Je(K);
                                A?.ok && (H.cellParaIdx = A.paraIdx ?? H.cellParaIdx, H.charOffset = A.charOffset ?? H.charOffset);
                            } catch  {}
                        } else {
                            const H = i();
                            try {
                                const K = j.pasteInternal(H.secIdx, H.paraIdx, H.charOffset), A = Je(K);
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
        ]), R = n.useCallback(()=>{
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
            handleCopy: F,
            handleCut: v,
            handleCopyControl: c,
            handlePaste: m,
            handlePasteControl: y,
            handlePasteHtml: z,
            clearClipboard: R,
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
                        const { startPara: U, startOff: M, endPara: Q, endOff: X } = S(g.anchor, {
                            cellParaIdx: f.cellParaIdx,
                            charOffset: f.charOffset
                        });
                        if (o.applyCharFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, X, JSON.stringify(w)), U !== Q) for(let Z = U; Z <= Q; Z++){
                            const le = Z === U ? M : 0, oe = Z === Q ? X : (()=>{
                                try {
                                    return o.getCellParagraphLength(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, Z);
                                } catch  {
                                    return 0;
                                }
                            })();
                            try {
                                o.applyCharFormatInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, Z, le, oe, JSON.stringify(w));
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
        ]), O = n.useCallback((w)=>{
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
        ]), F = n.useCallback(()=>{
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
        ]), R = n.useCallback(()=>{
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
            const { startPara: M, startOff: Q, endPara: X, endOff: Z } = S(g.anchor, {
                cellParaIdx: w,
                charOffset: o
            });
            try {
                const le = f.getSelectionRectsInCell(U.secIdx, U.parentParaIdx, U.controlIdx, U.cellIdx, M, Q, X, Z), oe = be(le), he = Array.isArray(oe?.rects) ? oe.rects : [];
                C((je)=>({
                        ...je,
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
            const { startPara: f, startOff: U, endPara: M, endOff: Q } = S(g.anchor, {
                cellParaIdx: o.cellParaIdx,
                charOffset: o.charOffset
            });
            if (f === M && U === Q) return null;
            t();
            try {
                const X = w.deleteRangeInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, f, U, M, Q), Z = be(X), le = {
                    cellParaIdx: Z?.paraIdx ?? f,
                    charOffset: Z?.charOffset ?? U
                };
                return k(le), C({
                    anchor: null,
                    rects: []
                }), l(), N({
                    ...o,
                    cellParaIdx: le.cellParaIdx,
                    charOffset: le.charOffset
                }), le;
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
                    const { startPara: U, startOff: M, endPara: Q, endOff: X } = S(g.anchor, {
                        cellParaIdx: f.cellParaIdx,
                        charOffset: f.charOffset
                    });
                    if (U !== Q || M !== X) {
                        t();
                        try {
                            const le = o.deleteRangeInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, Q, X), oe = be(le);
                            k({
                                cellParaIdx: oe?.paraIdx ?? U,
                                charOffset: oe?.charOffset ?? M
                            });
                        } catch  {}
                        C({
                            anchor: null,
                            rects: []
                        });
                        const Z = i();
                        if (!Z) return;
                        try {
                            const le = o.insertTextInCell(Z.secIdx, Z.parentParaIdx, Z.controlIdx, Z.cellIdx, Z.cellParaIdx, Z.charOffset, w), oe = be(le);
                            k({
                                charOffset: oe?.charOffset ?? Z.charOffset + w.length
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
                    const Q = i();
                    Q && N(Q);
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
                    const { startPara: U, startOff: M, endPara: Q, endOff: X } = S(g.anchor, {
                        cellParaIdx: f.cellParaIdx,
                        charOffset: f.charOffset
                    });
                    if (U !== Q || M !== X) {
                        t();
                        try {
                            const le = o.deleteRangeInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, U, M, Q, X), oe = be(le);
                            k({
                                cellParaIdx: oe?.paraIdx ?? U,
                                charOffset: oe?.charOffset ?? M
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
                        const M = o.mergeParagraphInCell(f.secIdx, f.parentParaIdx, f.controlIdx, f.cellIdx, f.cellParaIdx), Q = be(M);
                        k({
                            cellParaIdx: Q?.paraIdx ?? f.cellParaIdx - 1,
                            charOffset: Q?.charOffset ?? 0
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
        ]), ne = n.useCallback(()=>{
            const w = u(), o = i();
            if (!w || !o) return;
            if (g.anchor) {
                const { startPara: U, startOff: M, endPara: Q, endOff: X } = S(g.anchor, {
                    cellParaIdx: o.cellParaIdx,
                    charOffset: o.charOffset
                });
                if (U !== Q || M !== X) {
                    try {
                        const Z = w.deleteRangeInCell(o.secIdx, o.parentParaIdx, o.controlIdx, o.cellIdx, U, M, Q, X), le = be(Z);
                        k({
                            cellParaIdx: le?.paraIdx ?? U,
                            charOffset: le?.charOffset ?? M
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
                    const Q = i();
                    Q && N(Q);
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
        ]), P = n.useCallback(()=>{
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
            applyParaFormatInCell: O,
            applyCellStyle: L,
            getCellCharProps: $,
            getCellParaProps: b,
            getCellStyleAt: I,
            getCellProperties: F,
            getCellInfo: c,
            getCellParagraphCount: z,
            getCellParagraphLength: y,
            getCellTextDirection: m,
            getTextInCell: R,
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
            splitParagraphInCell: ne,
            mergeParagraphInCell: P
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
                const F = b.findNearestControlForward(I.secIdx, I.paraIdx, I.charOffset), v = Mt(F);
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
                const F = b.findNearestControlBackward(I.secIdx, I.paraIdx, I.charOffset), v = Mt(F);
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
                const F = b.findNextEditableControl(I.secIdx, I.paraIdx, I.charOffset, !0), v = Mt(F);
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
        ]), O = n.useCallback(()=>{
            const b = h();
            if (!b) return;
            const I = u();
            try {
                const F = b.findNextEditableControl(I.secIdx, I.paraIdx, I.charOffset, !1), v = Mt(F);
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
                const F = b.navigateNextEditable(I.secIdx, I.paraIdx, I.charOffset), v = Mt(F);
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
        ]), $ = n.useCallback((b, I, F)=>{
            const v = h();
            if (!v) return;
            const c = u();
            try {
                const z = v.moveVerticalByPath(JSON.stringify(b), I, F), y = Mt(z);
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
            findPrevEditable: O,
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
    function se(h) {
        try {
            return JSON.parse(h);
        } catch  {
            return null;
        }
    }
    let zn;
    zn = 100;
    Ln = ()=>{
        const { ready: h, loading: u, error: i } = Br(), { t: k } = Er(), t = Tn(), { docRef: l, cursorRef: x, selAnchorRef: g, cellCtxRef: C, hfCtxRef: N, fnCtxRef: S, pageCanvasRefs: E, overlayCanvasRefs: O, renderScaleRef: L, pageSizesRef: $, undoStack: b, redoStack: I, dragStartPos: F } = t, v = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s) return null;
            const d = E.current[a];
            if (!d) return null;
            const D = L.current, T = d.getBoundingClientRect(), q = (r.clientX - T.left) / T.width * d.width / D, ue = (r.clientY - T.top) / T.height * d.height / D;
            try {
                const re = s.hitTest(a, q, ue), pe = se(re);
                return pe ? {
                    secIdx: pe.sectionIndex ?? 0,
                    paraIdx: pe.paragraphIndex ?? pe.paraIndex ?? 0,
                    charOffset: pe.charOffset ?? 0
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
                const D = s.width / d, T = s.height / d;
                s.style.width = D + "px", s.style.height = T + "px", $.current[r] = {
                    w: D,
                    h: T
                };
                const q = O.current[r];
                q && (q.width = s.width, q.height = s.height, q.style.width = D + "px", q.style.height = T + "px");
            } catch  {}
        }, [
            l,
            E,
            O,
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
                const s = se(a.getCursorRect(r.secIdx, r.paraIdx, r.charOffset));
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
        ]), R = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    const s = a.getCharPropertiesAt(r.secIdx, r.paraIdx, r.charOffset), d = se(s);
                    if (d) {
                        const D = d.fontFamily || "맑은 고딕", T = d.fontSize || 1e3;
                        t.setFontInput(D), t.setSizeInput(String(Math.round(T / 100))), t.setCharProps({
                            fontFamily: D,
                            fontSize: T,
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
                    const s = a.getParaPropertiesAt(r.secIdx, r.paraIdx), d = se(s);
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
            let d = r.paraIdx, D = r.charOffset, T = a.paraIdx, q = a.charOffset;
            (d > T || d === T && D > q) && ([d, T] = [
                T,
                d
            ], [D, q] = [
                q,
                D
            ]);
            try {
                const ue = s.getSelectionRects(r.secIdx, d, D, T, q), re = JSON.parse(ue);
                t.setSelRects(Array.isArray(re) ? re : []);
            } catch  {
                t.setSelRects([]);
            }
        }, [
            l,
            t
        ]), j = n.useCallback((r, a = !0)=>{
            t.setCursor(r), a ? (g.current = null, t.setHasSelection(!1), t.setSelRects([])) : g.current && V(g.current, r), m(r), R(r), t.setDirty(!0), t.hiddenInputRef.current?.focus();
        }, [
            t,
            g,
            m,
            R,
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
            m(s), R(s);
        }, [
            l,
            b,
            I,
            t,
            c,
            x,
            m,
            R
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
            m(s), R(s);
        }, [
            l,
            b,
            I,
            t,
            c,
            x,
            m,
            R
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
                const s = se(r.getCaretPosition());
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
                    const { HwpDocument: s } = await import("./rhwp-BG_h0eyp.js");
                    return {
                        HwpDocument: s
                    };
                }, []), a = r.createEmpty();
                se(a.createBlankDocument()), A(a, "새 문서.hwp");
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
                    const { HwpDocument: T } = await import("./rhwp-BG_h0eyp.js");
                    return {
                        HwpDocument: T
                    };
                }, []), d = new Uint8Array(await r.arrayBuffer()), D = new s(d);
                A(D, r.name);
            } catch (s) {
                t.setEditorError(`파일 열기 실패: ${s.message}`);
            }
        }, [
            h,
            A,
            t
        ]), ne = n.useCallback(()=>{
            const r = document.createElement("input");
            r.type = "file", r.accept = ".hwp,.hwpx", r.onchange = ()=>{
                r.files?.[0] && Y(r.files[0]);
            }, r.click();
        }, [
            Y
        ]), P = n.useCallback((r)=>{
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
            let d = a.paraIdx, D = a.charOffset, T = s.paraIdx, q = s.charOffset;
            (d > T || d === T && D > q) && ([d, T] = [
                T,
                d
            ], [D, q] = [
                q,
                D
            ]);
            try {
                const ue = r.deleteRange(s.secIdx, d, D, T, q), re = se(ue);
                return g.current = null, t.setHasSelection(!1), t.setSelRects([]), re?.ok ? {
                    secIdx: s.secIdx,
                    paraIdx: re.paraIdx,
                    charOffset: re.charOffset
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
                const d = a.insertText(s.secIdx, s.paraIdx, s.charOffset, r), T = se(d)?.charOffset ?? s.charOffset + r.length, q = t.pendingCharFormat.current;
                if (q) try {
                    a.applyCharFormat(s.secIdx, s.paraIdx, s.charOffset, T, JSON.stringify(q));
                } catch (re) {
                    console.error("applyCharFormat (pending) failed:", re);
                }
                const ue = {
                    ...s,
                    charOffset: T
                };
                y(), j(ue);
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
            y,
            t
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
                    const s = r.deleteText(a.secIdx, a.paraIdx, a.charOffset - 1, 1), D = se(s)?.charOffset ?? a.charOffset - 1;
                    j({
                        ...a,
                        charOffset: D
                    });
                } else if (a.paraIdx > 0) {
                    const s = r.getParagraphLength(a.secIdx, a.paraIdx - 1), d = r.mergeParagraph(a.secIdx, a.paraIdx), D = se(d);
                    j({
                        secIdx: a.secIdx,
                        paraIdx: D?.paraIdx ?? a.paraIdx - 1,
                        charOffset: D?.charOffset ?? s
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
        ]), Q = n.useCallback(()=>{
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
                        const D = r.mergeParagraph(a.secIdx, a.paraIdx + 1), T = se(D);
                        j({
                            secIdx: a.secIdx,
                            paraIdx: T?.paraIdx ?? a.paraIdx,
                            charOffset: T?.charOffset ?? a.charOffset
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
        ]), X = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            if (p(), g.current) {
                const d = g.current;
                let D = d.paraIdx, T = d.charOffset, q = s.paraIdx, ue = s.charOffset;
                (D > q || D === q && T > ue) && ([D, q] = [
                    q,
                    D
                ], [T, ue] = [
                    ue,
                    T
                ]);
                try {
                    a.beginBatch();
                    for(let re = D; re <= q; re++){
                        const pe = re === D ? T : 0, _e = re === q ? ue : a.getParagraphLength(s.secIdx, re);
                        a.applyCharFormat(s.secIdx, re, pe, _e, JSON.stringify(r));
                    }
                    a.endBatch();
                } catch (re) {
                    console.error("applyCharFormat (selection) failed:", re);
                    try {
                        a.endBatch();
                    } catch  {}
                }
            } else t.pendingCharFormat.current = {
                ...t.pendingCharFormat.current ?? {},
                ...r
            };
            y(), R(s);
        }, [
            l,
            x,
            g,
            p,
            y,
            R
        ]), Z = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.applyParaFormat(s.secIdx, s.paraIdx, JSON.stringify(r));
            } catch (d) {
                console.error("applyParaFormat failed:", d);
            }
            c(), R(s);
        }, [
            l,
            x,
            p,
            c,
            R
        ]), le = n.useCallback(()=>X({
                bold: !t.charProps.bold
            }), [
            X,
            t.charProps.bold
        ]), oe = n.useCallback(()=>X({
                italic: !t.charProps.italic
            }), [
            X,
            t.charProps.italic
        ]), he = n.useCallback(()=>X({
                underline: !t.charProps.underline
            }), [
            X,
            t.charProps.underline
        ]), je = n.useCallback(()=>X({
                strikethrough: !t.charProps.strikethrough
            }), [
            X,
            t.charProps.strikethrough
        ]), Se = n.useCallback((r)=>{
            X({
                fontFamily: r
            }), t.setFontInput(r), t.setFontOpen(!1);
        }, [
            X,
            t
        ]), J = n.useCallback((r)=>{
            X({
                fontSize: Math.round(r * 100)
            }), t.setSizeInput(String(r)), t.setSizeOpen(!1);
        }, [
            X,
            t
        ]), de = n.useCallback((r)=>Z({
                alignment: r
            }), [
            Z
        ]), xe = n.useCallback((r)=>{
            Z({
                lineSpacing: r
            }), t.setSpacingOpen(!1);
        }, [
            Z,
            t
        ]), De = n.useCallback((r)=>{
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
        ]), Ee = n.useCallback(()=>{
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
            X({
                textColor: Pr(r)
            }), t.setColorOpen(!1);
        }, [
            X,
            t
        ]), Ke = n.useCallback((r)=>{
            X({
                highlight: Pr(r)
            }), t.setHighlightOpen(!1);
        }, [
            X,
            t
        ]), Ye = n.useCallback(()=>{
            const r = l.current;
            if (!r) return;
            const a = x.current;
            p();
            try {
                const s = r.createTable(a.secIdx, a.paraIdx, a.charOffset, t.tableRows, t.tableCols), d = se(s);
                d?.ok && j({
                    ...a,
                    paraIdx: d.paraIdx ?? a.paraIdx,
                    charOffset: 0
                });
            } catch (s) {
                console.error("createTable failed:", s), t.setEditorError(s.message);
            }
            try {
                r.reflowLinesegs();
            } catch (s) {
                console.error("reflowLinesegs after table failed:", s);
            }
            c(), t.setTableDialogOpen(!1);
        }, [
            l,
            x,
            p,
            j,
            c,
            t
        ]), qe = n.useCallback(()=>{
            const r = document.createElement("input");
            r.type = "file", r.accept = "image/*", r.onchange = async (a)=>{
                const s = a.target.files?.[0];
                if (!s) return;
                const d = l.current;
                if (!d) return;
                const D = x.current;
                p();
                try {
                    const T = new Uint8Array(await s.arrayBuffer()), q = new Image, ue = URL.createObjectURL(s);
                    q.onload = ()=>{
                        URL.revokeObjectURL(ue);
                        const re = q.naturalWidth, pe = q.naturalHeight, _e = Math.min(Math.round(re / 96 * 7200), 48e3), ut = Math.round(pe / re * _e), Re = s.name.split(".").pop()?.toLowerCase() || "png";
                        try {
                            d.insertPicture(D.secIdx, D.paraIdx, D.charOffset, T, _e, ut, re, pe, Re, s.name), j({
                                ...D,
                                charOffset: D.charOffset + 1
                            });
                        } catch (Te) {
                            console.error("insertPicture failed:", Te), t.setEditorError(Te.message);
                        }
                        try {
                            d.reflowLinesegs();
                        } catch  {}
                        c();
                    }, q.src = ue;
                } catch (T) {
                    t.setEditorError(T.message);
                }
            }, r.click();
        }, [
            l,
            x,
            p,
            j,
            c,
            t
        ]), Ge = n.useCallback(()=>{
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
        ]), G = n.useCallback((r, a, s, d)=>{
            t.setEditMode("cell"), C.current = {
                secIdx: r,
                parentParaIdx: a,
                controlIdx: s,
                cellIdx: d,
                cellParaIdx: 0,
                charOffset: 0
            };
            try {
                const D = l.current;
                if (D) {
                    const T = se(D.getCursorRectInCell(r, a, s, d, 0, 0));
                    T && T.x !== void 0 && t.setCursorRect({
                        pageIndex: T.pageIndex ?? 0,
                        x: T.x,
                        y: T.y,
                        height: T.height
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
                    const d = se(s.getCursorRectInHeaderFooter(r, a, 0, 0, 0, 0));
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
                    const d = a.insertTextInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, r), D = se(d);
                    s.charOffset = D?.charOffset ?? s.charOffset + r.length, c();
                    try {
                        const T = se(a.getCursorRectInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 0));
                        T && T.x !== void 0 && t.setCursorRect({
                            pageIndex: T.pageIndex ?? 0,
                            x: T.x,
                            y: T.y,
                            height: T.height
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
                        const d = a.mergeParagraphInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx), D = se(d);
                        s.hfParaIdx = D?.paraIdx ?? s.hfParaIdx - 1, s.charOffset = D?.charOffset ?? 0;
                    } else r && a.deleteTextInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 1);
                    y();
                    try {
                        const d = se(a.getCursorRectInHeaderFooter(s.secIdx, s.isHeader, s.applyTo, s.hfParaIdx, s.charOffset, 0));
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
        ]), ae = n.useCallback(()=>{
            const r = l.current, a = N.current;
            if (!(!r || !a)) {
                p();
                try {
                    const s = r.splitParagraphInHeaderFooter(a.secIdx, a.isHeader, a.applyTo, a.hfParaIdx, a.charOffset), d = se(s);
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
                const s = r.insertFootnote(a.secIdx, a.paraIdx, a.charOffset), d = se(s);
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
        ]), fe = n.useCallback((r)=>{
            const a = l.current, s = S.current;
            if (!(!a || !s)) {
                p();
                try {
                    const d = a.insertTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset, r), D = se(d);
                    s.charOffset = D?.charOffset ?? s.charOffset + r.length, c();
                    try {
                        const T = se(a.getCursorRectInFootnote(0, s.controlIdx, s.fnParaIdx, s.charOffset));
                        T && T.x !== void 0 && t.setCursorRect({
                            pageIndex: T.pageIndex ?? 0,
                            x: T.x,
                            y: T.y,
                            height: T.height
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
        ]), Be = n.useCallback((r)=>{
            const a = l.current, s = S.current;
            if (!(!a || !s)) {
                p();
                try {
                    !r && s.charOffset > 0 ? (a.deleteTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset - 1, 1), s.charOffset--) : r && a.deleteTextInFootnote(s.secIdx, s.paraIdx, s.controlIdx, s.fnParaIdx, s.charOffset, 1), y();
                    try {
                        const d = se(a.getCursorRectInFootnote(0, s.controlIdx, s.fnParaIdx, s.charOffset));
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
                    const s = r.splitParagraphInFootnote(a.secIdx, a.paraIdx, a.controlIdx, a.fnParaIdx, a.charOffset), d = se(s);
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
        ]), Qe = n.useCallback(()=>{
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
        ]), Xe = n.useCallback(()=>{
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
        ]), Ze = n.useCallback(()=>{
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
        ]), et = n.useCallback(()=>{
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
            enterCellMode: G,
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
            deleteCharAfter: Q,
            toggleBold: le,
            toggleItalic: oe,
            toggleUnderline: he,
            insertTextInCell: W.insertTextInCell,
            deleteTextInCell: W.deleteTextInCell,
            splitParagraphInCell: W.splitParagraphInCell,
            applyCharFormatInCell: W.applyCharFormatInCell,
            getCellCtx: ()=>C.current,
            enterCellMode: G,
            insertTextInHf: ee,
            deleteTextInHf: ce,
            splitParagraphInHf: ae,
            insertTextInFn: fe,
            deleteTextInFn: Be,
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
        }), tt = n.useCallback((r, a)=>{
            if (r.button !== 0) return;
            const s = v(r, a);
            s && (t.setIsDragSelecting(!0), F.current = {
                ...s
            }, g.current = {
                ...s
            }, t.setCursor(s), m(s), R(s), t.hiddenInputRef.current?.focus());
        }, [
            v,
            t,
            F,
            g,
            m,
            R
        ]), ze = n.useCallback((r, a)=>{
            if (!t.isDragSelecting) return;
            const s = v(r, a);
            !s || !g.current || (t.setCursor(s), V(g.current, s), t.setHasSelection(!0), m(s));
        }, [
            t,
            v,
            g,
            V,
            m
        ]), rt = n.useCallback((r, a)=>{
            if (!t.isDragSelecting) return;
            t.setIsDragSelecting(!1);
            const s = v(r, a), d = F.current;
            d && s && d.secIdx === s.secIdx && d.paraIdx === s.paraIdx && d.charOffset === s.charOffset ? r.shiftKey && g.current ? (t.setCursor(s), V(g.current, s), t.setHasSelection(!0), m(s), R(s)) : j(s, !0) : s && (t.setCursor(s), m(s), R(s));
        }, [
            t,
            v,
            F,
            g,
            j,
            V,
            m,
            R
        ]), nt = n.useCallback((r, a)=>{
            r.preventDefault();
            const s = l.current;
            if (!s) return;
            const d = v(r, a);
            if (!d) return;
            let D = "body", T;
            try {
                const q = s.getControlTextPositions(d.secIdx, d.paraIdx), re = JSON.parse(q)?.find((pe)=>pe.type === "table" && pe.charOffset <= d.charOffset);
                if (re) {
                    D = "table";
                    try {
                        const pe = s.getTableCellBboxes(d.secIdx, d.paraIdx, re.controlIdx), _e = JSON.parse(pe), ut = E.current[a];
                        if (ut) {
                            const Re = L.current, Te = ut.getBoundingClientRect(), $t = (r.clientX - Te.left) / Te.width * ut.width / Re, $e = (r.clientY - Te.top) / Te.height * ut.height / Re, Fe = _e.find((ke)=>$t >= ke.x && $t <= ke.x + ke.w && $e >= ke.y && $e <= ke.y + ke.h);
                            Fe && (T = {
                                secIdx: d.secIdx,
                                paraIdx: d.paraIdx,
                                controlIdx: re.controlIdx,
                                row: Fe.row,
                                col: Fe.col,
                                cellIdx: Fe.cellIdx
                            });
                        }
                    } catch  {}
                }
            } catch  {}
            t.setContextMenu({
                x: r.clientX,
                y: r.clientY,
                type: D,
                tableInfo: T
            });
        }, [
            l,
            v,
            t,
            E,
            L
        ]), at = n.useCallback((r, a)=>{
            const s = l.current;
            if (!s || t.editMode !== "body") return;
            const d = E.current[a];
            if (!d) return;
            const D = L.current, T = d.getBoundingClientRect(), q = (r.clientX - T.left) / T.width * d.width / D, ue = (r.clientY - T.top) / T.height * d.height / D;
            try {
                const pe = se(s.hitTestHeaderFooter(a, q, ue));
                if (pe?.hit) {
                    ge(pe.sectionIndex ?? 0, !!pe.isHeader);
                    return;
                }
            } catch  {}
            const re = x.current;
            if (re) try {
                const pe = s.getParagraphLength(re.secIdx, re.paraIdx);
                if (pe > 0) {
                    const _e = s.getTextRange(re.secIdx, re.paraIdx, 0, pe), Re = se(_e)?.text ?? "";
                    if (Re) {
                        const Te = Math.min(re.charOffset, Re.length), $t = (ke)=>/[\w\u3131-\uD79D]/.test(ke);
                        let $e = Te, Fe = Te;
                        for(; $e > 0 && $t(Re[$e - 1]);)$e--;
                        for(; Fe < Re.length && $t(Re[Fe]);)Fe++;
                        if ($e < Fe) {
                            const ke = {
                                ...re,
                                charOffset: $e
                            }, Nr = {
                                ...re,
                                charOffset: Fe
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
        ]), st = n.useCallback(()=>{
            const r = l.current;
            if (!r || !t.findQuery) return;
            const a = x.current;
            try {
                const s = r.searchText(t.findQuery, a.secIdx, a.paraIdx, a.charOffset, !0, t.caseSensitive), d = se(s);
                if (d?.found) {
                    const D = {
                        secIdx: d.sectionIndex ?? a.secIdx,
                        paraIdx: d.paragraphIndex ?? d.paraIdx ?? a.paraIdx,
                        charOffset: d.charOffset ?? 0
                    };
                    j(D), t.setFindInfo("");
                } else t.setFindInfo(k("site.hwpEditor.noResults"));
            } catch  {}
        }, [
            l,
            t,
            x,
            j,
            k
        ]), lt = n.useCallback(()=>{
            const r = l.current;
            if (!(!r || !t.findQuery)) {
                p();
                try {
                    const a = r.replaceOne(t.findQuery, t.replaceQuery, t.caseSensitive);
                    se(a)?.ok ? (c(), t.setFindInfo(k("site.hwpEditor.replaced"))) : t.setFindInfo(k("site.hwpEditor.noResults"));
                } catch  {}
            }
        }, [
            l,
            t,
            p,
            c,
            k
        ]), ot = n.useCallback(()=>{
            const r = l.current;
            if (!(!r || !t.findQuery)) {
                p();
                try {
                    const a = r.replaceAll(t.findQuery, t.replaceQuery, t.caseSensitive), s = se(a);
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
                    }), D = URL.createObjectURL(d), T = document.createElement("a");
                    T.href = D;
                    const q = t.fileName ? t.fileName.replace(/\.[^.]+$/, "") : "document";
                    T.download = `${q}.${r}`, T.click(), URL.revokeObjectURL(D);
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
                const a = r.getPageDef(0), s = se(a);
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
        ]), Ie = n.useCallback(()=>{
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
        ]), ct = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return;
            const s = x.current;
            p();
            try {
                a.applyStyle(s.secIdx, s.paraIdx, r);
            } catch  {}
            c(), R(s), t.setStyleOpen(!1);
        }, [
            l,
            x,
            p,
            c,
            R,
            t
        ]), Ce = n.useCallback(()=>{
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
            Ce();
        }, [
            l,
            x,
            Ce
        ]), gt = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    a.deleteBookmark(r.secIdx, r.paraIdx, r.controlIdx ?? 0);
                } catch  {}
                Ce();
            }
        }, [
            l,
            Ce
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
                    const D = d.width / a, T = d.height / a;
                    d.style.width = D + "px", d.style.height = T + "px", $.current[s] = {
                        w: D,
                        h: T
                    };
                    const q = O.current[s];
                    q && (q.width = d.width, q.height = d.height, q.style.width = D + "px", q.style.height = T + "px");
                } catch (D) {
                    console.error("renderPageToCanvas failed for page", s, D);
                }
            }
        }, [
            t.renderVer,
            t.pageCount
        ]), n.useEffect(()=>{
            const r = L.current;
            for(let a = 0; a < t.pageCount; a++){
                const s = O.current[a];
                if (!s) continue;
                const d = s.getContext("2d");
                if (!d) continue;
                d.clearRect(0, 0, s.width, s.height);
                const D = t.selRects.filter((T)=>T.pageIndex === a);
                if (D.length > 0) {
                    d.fillStyle = "rgba(0, 70, 200, 0.25)";
                    for (const T of D)d.fillRect(T.x * r, T.y * r, T.width * r, T.height * r);
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
                return se(s);
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
                return se(s);
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
                const s = r.getControlImageData(a.secIdx, a.paraIdx, 0), d = r.getControlImageMime(a.secIdx, a.paraIdx, 0), D = d.includes("png") ? "png" : d.includes("jpeg") ? "jpg" : "bin", T = new Blob([
                    s
                ], {
                    type: d
                }), q = URL.createObjectURL(T), ue = document.createElement("a");
                ue.href = q, ue.download = `image.${D}`, ue.click(), URL.revokeObjectURL(q);
            } catch  {}
            t.setContextMenu(null);
        }, [
            l,
            x,
            t
        ]), Ve = n.useCallback((r)=>()=>{
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
        ]), Dt = Ve("front"), _ = Ve("back"), Oe = Ve("forward"), Pe = Ve("backward"), ye = n.useCallback(()=>{
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
        ]), Me = n.useCallback(()=>{
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
        ]), ht = n.useCallback(()=>{}, []), He = n.useCallback((r)=>{
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
                    const s = a.getFieldList(), D = JSON.parse(s)[r];
                    D && a.setActiveField(D.secIdx ?? 0, D.paraIdx ?? 0, D.charOffset ?? 0);
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
                    const s = a.getFieldList(), D = JSON.parse(s)[r];
                    if (D) {
                        const T = {
                            secIdx: D.secIdx ?? 0,
                            paraIdx: D.paraIdx ?? 0,
                            charOffset: D.charOffset ?? 0
                        };
                        j(T);
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
            const D = l.current;
            if (D) {
                p();
                try {
                    D.applyHfTemplate(r, a, s, d);
                } catch  {}
                c();
            }
        }, [
            l,
            p,
            c
        ]), or = n.useCallback((r, a, s, d)=>{
            const D = l.current;
            if (!D) return;
            p();
            const T = [
                "page_number",
                "total_pages",
                "date",
                "time",
                "filename"
            ].indexOf(d);
            try {
                D.insertFieldInHf(r, a, s, 0, 0, T >= 0 ? T : 0);
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
                Ie();
            }
        }, [
            l,
            Ie
        ]), ir = n.useCallback((r, a)=>{
            const s = l.current;
            if (s) {
                p();
                try {
                    s.updateStyle(r, JSON.stringify(a)), (a.charShape || a.paraShape) && s.updateStyleShapes(r, JSON.stringify(a.charShape ?? {}), JSON.stringify(a.paraShape ?? {}));
                } catch  {}
                Ie(), c();
            }
        }, [
            l,
            p,
            Ie,
            c
        ]), dr = n.useCallback((r)=>{
            const a = l.current;
            if (a) {
                try {
                    a.deleteStyle(r);
                } catch  {}
                Ie();
            }
        }, [
            l,
            Ie
        ]), hr = n.useCallback((r)=>{
            const a = l.current;
            if (!a) return null;
            try {
                const s = a.getStyleDetail(r);
                return se(s);
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
                Ce();
            }
        }, [
            l,
            Ce
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
                const a = r.exportHwpVerify(), s = se(a);
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
                                onDragOver: P,
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
                                                    onClick: ne,
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
                                        onOpenFile: ne,
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
                                        onToggleBold: le,
                                        onToggleItalic: oe,
                                        onToggleUnderline: he,
                                        onToggleStrikethrough: je,
                                        textColorHex: wt,
                                        highlightHex: kt,
                                        onApplyTextColor: Le,
                                        onApplyHighlight: Ke,
                                        paraProps: t.paraProps,
                                        onApplyAlignment: de,
                                        onApplyLineSpacing: xe,
                                        onApplyIndentChange: De,
                                        onApplyBulletList: Ae,
                                        onApplyNumberedList: Ee,
                                        onInsertTable: ()=>t.setTableDialogOpen((r)=>!r),
                                        tableRows: t.tableRows,
                                        tableCols: t.tableCols,
                                        onSetTableRows: t.setTableRows,
                                        onSetTableCols: t.setTableCols,
                                        onConfirmInsertTable: Ye,
                                        onInsertImage: qe,
                                        onPageBreak: Ge,
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
                                        onLoadStyles: Ie,
                                        onApplyStyle: ct,
                                        onOpenBookmarks: ()=>{
                                            Ce(), t.setBookmarkDialogOpen(!0);
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
                                            Ie(), t.setStyleDialogOpen(!0);
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
                                        onFindNext: st,
                                        onReplaceOne: lt,
                                        onReplaceAll: ot,
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
                                                    overlayCanvasRefs: O,
                                                    canvasRefs: t.canvasRefs,
                                                    cursorRect: t.cursorRect,
                                                    cursorVisible: t.cursorVisible,
                                                    selRects: t.selRects,
                                                    renderScaleRef: L,
                                                    onCanvasMouseDown: tt,
                                                    onCanvasMouseMove: ze,
                                                    onCanvasMouseUp: rt,
                                                    onContextMenu: nt,
                                                    onDoubleClick: at,
                                                    isDragging: t.isDragging,
                                                    onDragOver: P,
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
                                                onApplyStyle: ct,
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
                                                G(r.secIdx, r.paraIdx, r.controlIdx, r.cellIdx);
                                            }
                                            t.setContextMenu(null);
                                        },
                                        onInsertRowBefore: ()=>xt(!1),
                                        onInsertRowAfter: ()=>xt(!0),
                                        onDeleteRow: Qe,
                                        onInsertColBefore: ()=>We(!1),
                                        onInsertColAfter: ()=>We(!0),
                                        onDeleteCol: Xe,
                                        onMergeCells: Ze,
                                        onSplitCell: et,
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
                                        onUngroupShape: Me,
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
                                        onRefresh: Ce,
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
                                        onApplyStyle: ct
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
                                        onGetFieldValue: He,
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
