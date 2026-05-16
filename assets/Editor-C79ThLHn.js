const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-huYkBFZr.js","assets/jszip.min-D71cCqt0.js","assets/index-BeTNCLMQ.js","assets/index-BgB6f-Ri.css"])))=>i.map(i=>d[i]);
import { u as v, a as E, r as i, j as t, _ as N, __tla as __tla_0 } from "./index-BeTNCLMQ.js";
import { S as g } from "./SEOHead-DeI1M0Aj.js";
import { d as c } from "./fileUtils-1h3TEy09.js";
let _;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    _ = ()=>{
        const { t: e } = v(), d = E(), [x, p] = i.useState(""), [o, h] = i.useState(""), [m, u] = i.useState(!1), w = i.useRef(null);
        i.useEffect(()=>{
            const s = d.state;
            s?.content && h(s.content), s?.title && p(s.title);
        }, [
            d.state
        ]);
        const n = async (s)=>{
            u(!1);
            const a = x || e("site.editor.untitled");
            switch(s){
                case "md":
                    c(o, `${a}.md`, "text/markdown");
                    break;
                case "html":
                    {
                        const r = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>${a}</title></head>
<body>${o}</body>
</html>`;
                        c(r, `${a}.html`, "text/html");
                        break;
                    }
                case "txt":
                    c(o, `${a}.txt`, "text/plain");
                    break;
                case "hwpx":
                    {
                        try {
                            const { markdownToHwpx: r } = await N(async ()=>{
                                const { markdownToHwpx: k } = await import("./index-huYkBFZr.js");
                                return {
                                    markdownToHwpx: k
                                };
                            }, __vite__mapDeps([0,1,2,3])), b = await r(o), f = new Blob([
                                b
                            ], {
                                type: "application/hwp+zip"
                            }), j = URL.createObjectURL(f), l = document.createElement("a");
                            l.href = j, l.download = `${a}.hwpx`, l.click(), URL.revokeObjectURL(j);
                        } catch (r) {
                            console.error("HWPX export error:", r), alert("HWPX 내보내기 중 오류가 발생했습니다.");
                        }
                        break;
                    }
            }
        };
        return t.jsxs(t.Fragment, {
            children: [
                t.jsx(g, {
                    title: e("site.editor.title"),
                    path: "/md-editor"
                }),
                t.jsx("section", {
                    className: "page-header",
                    children: t.jsxs("div", {
                        className: "container",
                        children: [
                            t.jsx("h2", {
                                children: e("site.editor.title")
                            }),
                            t.jsx("p", {
                                children: e("site.editor.subtitle")
                            })
                        ]
                    })
                }),
                t.jsx("section", {
                    className: "section editor-page",
                    children: t.jsxs("div", {
                        className: "container",
                        children: [
                            t.jsxs("div", {
                                className: "editor-toolbar",
                                children: [
                                    t.jsx("input", {
                                        className: "editor-title-input",
                                        type: "text",
                                        value: x,
                                        onChange: (s)=>p(s.target.value),
                                        placeholder: e("site.editor.untitled")
                                    }),
                                    t.jsx("div", {
                                        className: "editor-actions",
                                        children: t.jsxs("div", {
                                            className: "export-menu-wrapper",
                                            ref: w,
                                            children: [
                                                t.jsxs("button", {
                                                    className: "editor-btn",
                                                    onClick: ()=>u(!m),
                                                    children: [
                                                        e("site.editor.export"),
                                                        " ▾"
                                                    ]
                                                }),
                                                m && t.jsxs("div", {
                                                    className: "export-dropdown",
                                                    children: [
                                                        t.jsx("button", {
                                                            onClick: ()=>n("md"),
                                                            children: e("site.editor.exportMd")
                                                        }),
                                                        t.jsx("button", {
                                                            onClick: ()=>n("hwpx"),
                                                            children: e("site.editor.exportHwpx")
                                                        }),
                                                        t.jsx("button", {
                                                            onClick: ()=>n("html"),
                                                            children: e("site.editor.exportHtml")
                                                        }),
                                                        t.jsx("button", {
                                                            onClick: ()=>n("txt"),
                                                            children: e("site.editor.exportTxt")
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            t.jsx("div", {
                                className: "md-editor-wrapper",
                                children: t.jsx("textarea", {
                                    value: o,
                                    onChange: (s)=>h(s.target.value),
                                    placeholder: "마크다운으로 문서를 작성하세요..."
                                })
                            })
                        ]
                    })
                })
            ]
        });
    };
});
export { _ as default, __tla };
