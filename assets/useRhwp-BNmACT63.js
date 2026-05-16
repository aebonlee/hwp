import { r as o, _ as s, __tla as __tla_0 } from "./index-ClwInC4J.js";
let d;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    let i = null, r = !1;
    function f() {
        const e = globalThis;
        if (typeof e.measureTextWidth == "function") return;
        const t = document.createElement("canvas").getContext("2d");
        e.measureTextWidth = (a, u)=>t ? (t.font = u || "16px sans-serif", t.measureText(a).width) : a.length * 10;
    }
    function c() {
        return r ? Promise.resolve() : i || (i = (async ()=>{
            f();
            const e = await s(()=>import("./rhwp-BG_h0eyp.js"), []);
            typeof e.default == "function" && await e.default();
            try {
                typeof e.init_panic_hook == "function" && e.init_panic_hook();
            } catch  {}
            r = !0;
        })(), i);
    }
    d = function() {
        const [e, n] = o.useState({
            ready: r,
            loading: !r,
            error: null
        }), t = o.useRef(!0);
        return o.useEffect(()=>{
            if (t.current = !0, r) {
                n({
                    ready: !0,
                    loading: !1,
                    error: null
                });
                return;
            }
            return c().then(()=>{
                t.current && n({
                    ready: !0,
                    loading: !1,
                    error: null
                });
            }).catch((a)=>{
                t.current && n({
                    ready: !1,
                    loading: !1,
                    error: a.message || "WASM init failed"
                });
            }), ()=>{
                t.current = !1;
            };
        }, []), e;
    };
});
export { d as u, __tla };
