const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Dkz5U_LI.js","assets/SEOHead-BK-caFhv.js","assets/useAOS-FG_WQf7P.js","assets/Convert-CmqkWvIY.js","assets/fileUtils-1h3TEy09.js","assets/Convert-DYDy6mLq.css","assets/Editor-BtG4lRbY.js","assets/editor-B2FMxC-J.css","assets/Templates-C2TASKBo.js","assets/templates-zT9MYh1M.css","assets/TemplateCreate-Dm_jOx8-.js","assets/TemplateDetail-Zb0U8nT3.js","assets/Documents-B86gwuTx.js","assets/Documents-7jKc5y4S.css","assets/DocumentDetail-D6YUWjd3.js","assets/BusinessPlan-Cp-O3Ae3.js","assets/BusinessPlan-lsmXagVZ.css","assets/HwpEditor-BraqvtKr.js","assets/useRhwp-BPA6HEaD.js","assets/HwpEditor-DNPpr6at.css","assets/Viewer-DkF8p2I7.js","assets/Viewer-BeyzE84f.css","assets/Generator-DLKGPWeA.js","assets/Generator-B3i-1g61.css","assets/AiWriter-DlDtEGCv.js","assets/AiWriter-DtjHDkZn.css","assets/Humanize-BluwunKn.js","assets/Humanize--lwfvXIZ.css","assets/HumanizeText-3g4DM3xM.js","assets/HumanizeText-CpCP44Yi.css","assets/Guide-CJtMLZOg.js","assets/Pricing-Cvl8gBEX.js","assets/NotFound-C96W19tM.js","assets/Login-DFpt1M0c.js","assets/auth-DKHmQrFs.css","assets/Register-o_weFx9f.js","assets/ForgotPassword-dZjQPQ8-.js","assets/MyPage-p2rofCPh.js"])))=>i.map(i=>d[i]);
let Rn, SE, AE, Pe, Nt, Eg, jE, Oc, TE, EE, Jt, RE, OE, w, CE, kE, Tc, je, Xv, A, xE, ng;
let __tla = (async ()=>{
    (function() {
        const n = document.createElement("link").relList;
        if (n && n.supports && n.supports("modulepreload")) return;
        for (const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);
        new MutationObserver((u)=>{
            for (const h of u)if (h.type === "childList") for (const f of h.addedNodes)f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function r(u) {
            const h = {};
            return u.integrity && (h.integrity = u.integrity), u.referrerPolicy && (h.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? h.credentials = "include" : u.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
        }
        function l(u) {
            if (u.ep) return;
            u.ep = !0;
            const h = r(u);
            fetch(u.href, h);
        }
    })();
    Xv = function(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    };
    var Xu = {
        exports: {}
    }, _r = {};
    var Bp;
    function Wv() {
        if (Bp) return _r;
        Bp = 1;
        var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
        function r(l, u, h) {
            var f = null;
            if (h !== void 0 && (f = "" + h), u.key !== void 0 && (f = "" + u.key), "key" in u) {
                h = {};
                for(var d in u)d !== "key" && (h[d] = u[d]);
            } else h = u;
            return u = h.ref, {
                $$typeof: i,
                type: l,
                key: f,
                ref: u !== void 0 ? u : null,
                props: h
            };
        }
        return _r.Fragment = n, _r.jsx = r, _r.jsxs = r, _r;
    }
    var qp;
    function Jv() {
        return qp || (qp = 1, Xu.exports = Wv()), Xu.exports;
    }
    let Wu, re;
    w = Jv();
    Wu = {
        exports: {}
    };
    re = {};
    var Pp;
    function Qv() {
        if (Pp) return re;
        Pp = 1;
        var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), S = Symbol.iterator;
        function E(x) {
            return x === null || typeof x != "object" ? null : (x = S && x[S] || x["@@iterator"], typeof x == "function" ? x : null);
        }
        var N = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, D = Object.assign, k = {};
        function B(x, P, I) {
            this.props = x, this.context = P, this.refs = k, this.updater = I || N;
        }
        B.prototype.isReactComponent = {}, B.prototype.setState = function(x, P) {
            if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, x, P, "setState");
        }, B.prototype.forceUpdate = function(x) {
            this.updater.enqueueForceUpdate(this, x, "forceUpdate");
        };
        function $() {}
        $.prototype = B.prototype;
        function z(x, P, I) {
            this.props = x, this.context = P, this.refs = k, this.updater = I || N;
        }
        var V = z.prototype = new $;
        V.constructor = z, D(V, B.prototype), V.isPureReactComponent = !0;
        var te = Array.isArray;
        function ne() {}
        var K = {
            H: null,
            A: null,
            T: null,
            S: null
        }, Ne = Object.prototype.hasOwnProperty;
        function Se(x, P, I) {
            var W = I.ref;
            return {
                $$typeof: i,
                type: x,
                key: P,
                ref: W !== void 0 ? W : null,
                props: I
            };
        }
        function Dt(x, P) {
            return Se(x.type, P, x.props);
        }
        function ot(x) {
            return typeof x == "object" && x !== null && x.$$typeof === i;
        }
        function Je(x) {
            var P = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + x.replace(/[=:]/g, function(I) {
                return P[I];
            });
        }
        var ie = /\/+/g;
        function be(x, P) {
            return typeof x == "object" && x !== null && x.key != null ? Je("" + x.key) : P.toString(36);
        }
        function Re(x) {
            switch(x.status){
                case "fulfilled":
                    return x.value;
                case "rejected":
                    throw x.reason;
                default:
                    switch(typeof x.status == "string" ? x.then(ne, ne) : (x.status = "pending", x.then(function(P) {
                        x.status === "pending" && (x.status = "fulfilled", x.value = P);
                    }, function(P) {
                        x.status === "pending" && (x.status = "rejected", x.reason = P);
                    })), x.status){
                        case "fulfilled":
                            return x.value;
                        case "rejected":
                            throw x.reason;
                    }
            }
            throw x;
        }
        function M(x, P, I, W, se) {
            var ue = typeof x;
            (ue === "undefined" || ue === "boolean") && (x = null);
            var ve = !1;
            if (x === null) ve = !0;
            else switch(ue){
                case "bigint":
                case "string":
                case "number":
                    ve = !0;
                    break;
                case "object":
                    switch(x.$$typeof){
                        case i:
                        case n:
                            ve = !0;
                            break;
                        case b:
                            return ve = x._init, M(ve(x._payload), P, I, W, se);
                    }
            }
            if (ve) return se = se(x), ve = W === "" ? "." + be(x, 0) : W, te(se) ? (I = "", ve != null && (I = ve.replace(ie, "$&/") + "/"), M(se, P, I, "", function(Oi) {
                return Oi;
            })) : se != null && (ot(se) && (se = Dt(se, I + (se.key == null || x && x.key === se.key ? "" : ("" + se.key).replace(ie, "$&/") + "/") + ve)), P.push(se)), 1;
            ve = 0;
            var ut = W === "" ? "." : W + ":";
            if (te(x)) for(var $e = 0; $e < x.length; $e++)W = x[$e], ue = ut + be(W, $e), ve += M(W, P, I, ue, se);
            else if ($e = E(x), typeof $e == "function") for(x = $e.call(x), $e = 0; !(W = x.next()).done;)W = W.value, ue = ut + be(W, $e++), ve += M(W, P, I, ue, se);
            else if (ue === "object") {
                if (typeof x.then == "function") return M(Re(x), P, I, W, se);
                throw P = String(x), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ve;
        }
        function G(x, P, I) {
            if (x == null) return x;
            var W = [], se = 0;
            return M(x, W, "", "", function(ue) {
                return P.call(I, ue, se++);
            }), W;
        }
        function ae(x) {
            if (x._status === -1) {
                var P = x._result;
                P = P(), P.then(function(I) {
                    (x._status === 0 || x._status === -1) && (x._status = 1, x._result = I);
                }, function(I) {
                    (x._status === 0 || x._status === -1) && (x._status = 2, x._result = I);
                }), x._status === -1 && (x._status = 0, x._result = P);
            }
            if (x._status === 1) return x._result.default;
            throw x._result;
        }
        var Ee = typeof reportError == "function" ? reportError : function(x) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var P = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
                    error: x
                });
                if (!window.dispatchEvent(P)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", x);
                return;
            }
            console.error(x);
        }, Oe = {
            map: G,
            forEach: function(x, P, I) {
                G(x, function() {
                    P.apply(this, arguments);
                }, I);
            },
            count: function(x) {
                var P = 0;
                return G(x, function() {
                    P++;
                }), P;
            },
            toArray: function(x) {
                return G(x, function(P) {
                    return P;
                }) || [];
            },
            only: function(x) {
                if (!ot(x)) throw Error("React.Children.only expected to receive a single React element child.");
                return x;
            }
        };
        return re.Activity = v, re.Children = Oe, re.Component = B, re.Fragment = r, re.Profiler = u, re.PureComponent = z, re.StrictMode = l, re.Suspense = p, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(x) {
                return K.H.useMemoCache(x);
            }
        }, re.cache = function(x) {
            return function() {
                return x.apply(null, arguments);
            };
        }, re.cacheSignal = function() {
            return null;
        }, re.cloneElement = function(x, P, I) {
            if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
            var W = D({}, x.props), se = x.key;
            if (P != null) for(ue in P.key !== void 0 && (se = "" + P.key), P)!Ne.call(P, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && P.ref === void 0 || (W[ue] = P[ue]);
            var ue = arguments.length - 2;
            if (ue === 1) W.children = I;
            else if (1 < ue) {
                for(var ve = Array(ue), ut = 0; ut < ue; ut++)ve[ut] = arguments[ut + 2];
                W.children = ve;
            }
            return Se(x.type, se, W);
        }, re.createContext = function(x) {
            return x = {
                $$typeof: f,
                _currentValue: x,
                _currentValue2: x,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, x.Provider = x, x.Consumer = {
                $$typeof: h,
                _context: x
            }, x;
        }, re.createElement = function(x, P, I) {
            var W, se = {}, ue = null;
            if (P != null) for(W in P.key !== void 0 && (ue = "" + P.key), P)Ne.call(P, W) && W !== "key" && W !== "__self" && W !== "__source" && (se[W] = P[W]);
            var ve = arguments.length - 2;
            if (ve === 1) se.children = I;
            else if (1 < ve) {
                for(var ut = Array(ve), $e = 0; $e < ve; $e++)ut[$e] = arguments[$e + 2];
                se.children = ut;
            }
            if (x && x.defaultProps) for(W in ve = x.defaultProps, ve)se[W] === void 0 && (se[W] = ve[W]);
            return Se(x, ue, se);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(x) {
            return {
                $$typeof: d,
                render: x
            };
        }, re.isValidElement = ot, re.lazy = function(x) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: x
                },
                _init: ae
            };
        }, re.memo = function(x, P) {
            return {
                $$typeof: g,
                type: x,
                compare: P === void 0 ? null : P
            };
        }, re.startTransition = function(x) {
            var P = K.T, I = {};
            K.T = I;
            try {
                var W = x(), se = K.S;
                se !== null && se(I, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ne, Ee);
            } catch (ue) {
                Ee(ue);
            } finally{
                P !== null && I.types !== null && (P.types = I.types), K.T = P;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(x) {
            return K.H.use(x);
        }, re.useActionState = function(x, P, I) {
            return K.H.useActionState(x, P, I);
        }, re.useCallback = function(x, P) {
            return K.H.useCallback(x, P);
        }, re.useContext = function(x) {
            return K.H.useContext(x);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(x, P) {
            return K.H.useDeferredValue(x, P);
        }, re.useEffect = function(x, P) {
            return K.H.useEffect(x, P);
        }, re.useEffectEvent = function(x) {
            return K.H.useEffectEvent(x);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(x, P, I) {
            return K.H.useImperativeHandle(x, P, I);
        }, re.useInsertionEffect = function(x, P) {
            return K.H.useInsertionEffect(x, P);
        }, re.useLayoutEffect = function(x, P) {
            return K.H.useLayoutEffect(x, P);
        }, re.useMemo = function(x, P) {
            return K.H.useMemo(x, P);
        }, re.useOptimistic = function(x, P) {
            return K.H.useOptimistic(x, P);
        }, re.useReducer = function(x, P, I) {
            return K.H.useReducer(x, P, I);
        }, re.useRef = function(x) {
            return K.H.useRef(x);
        }, re.useState = function(x) {
            return K.H.useState(x);
        }, re.useSyncExternalStore = function(x, P, I) {
            return K.H.useSyncExternalStore(x, P, I);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.2.5", re;
    }
    var $p;
    function Ac() {
        return $p || ($p = 1, Wu.exports = Qv()), Wu.exports;
    }
    A = Ac();
    SE = Xv(A);
    var Ju = {
        exports: {}
    }, Sr = {}, Qu = {
        exports: {}
    }, Zu = {};
    var Gp;
    function Zv() {
        return Gp || (Gp = 1, (function(i) {
            function n(M, G) {
                var ae = M.length;
                M.push(G);
                e: for(; 0 < ae;){
                    var Ee = ae - 1 >>> 1, Oe = M[Ee];
                    if (0 < u(Oe, G)) M[Ee] = G, M[ae] = Oe, ae = Ee;
                    else break e;
                }
            }
            function r(M) {
                return M.length === 0 ? null : M[0];
            }
            function l(M) {
                if (M.length === 0) return null;
                var G = M[0], ae = M.pop();
                if (ae !== G) {
                    M[0] = ae;
                    e: for(var Ee = 0, Oe = M.length, x = Oe >>> 1; Ee < x;){
                        var P = 2 * (Ee + 1) - 1, I = M[P], W = P + 1, se = M[W];
                        if (0 > u(I, ae)) W < Oe && 0 > u(se, I) ? (M[Ee] = se, M[W] = ae, Ee = W) : (M[Ee] = I, M[P] = ae, Ee = P);
                        else if (W < Oe && 0 > u(se, ae)) M[Ee] = se, M[W] = ae, Ee = W;
                        else break e;
                    }
                }
                return G;
            }
            function u(M, G) {
                var ae = M.sortIndex - G.sortIndex;
                return ae !== 0 ? ae : M.id - G.id;
            }
            if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var h = performance;
                i.unstable_now = function() {
                    return h.now();
                };
            } else {
                var f = Date, d = f.now();
                i.unstable_now = function() {
                    return f.now() - d;
                };
            }
            var p = [], g = [], b = 1, v = null, S = 3, E = !1, N = !1, D = !1, k = !1, B = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
            function V(M) {
                for(var G = r(g); G !== null;){
                    if (G.callback === null) l(g);
                    else if (G.startTime <= M) l(g), G.sortIndex = G.expirationTime, n(p, G);
                    else break;
                    G = r(g);
                }
            }
            function te(M) {
                if (D = !1, V(M), !N) if (r(p) !== null) N = !0, ne || (ne = !0, Je());
                else {
                    var G = r(g);
                    G !== null && Re(te, G.startTime - M);
                }
            }
            var ne = !1, K = -1, Ne = 5, Se = -1;
            function Dt() {
                return k ? !0 : !(i.unstable_now() - Se < Ne);
            }
            function ot() {
                if (k = !1, ne) {
                    var M = i.unstable_now();
                    Se = M;
                    var G = !0;
                    try {
                        e: {
                            N = !1, D && (D = !1, $(K), K = -1), E = !0;
                            var ae = S;
                            try {
                                t: {
                                    for(V(M), v = r(p); v !== null && !(v.expirationTime > M && Dt());){
                                        var Ee = v.callback;
                                        if (typeof Ee == "function") {
                                            v.callback = null, S = v.priorityLevel;
                                            var Oe = Ee(v.expirationTime <= M);
                                            if (M = i.unstable_now(), typeof Oe == "function") {
                                                v.callback = Oe, V(M), G = !0;
                                                break t;
                                            }
                                            v === r(p) && l(p), V(M);
                                        } else l(p);
                                        v = r(p);
                                    }
                                    if (v !== null) G = !0;
                                    else {
                                        var x = r(g);
                                        x !== null && Re(te, x.startTime - M), G = !1;
                                    }
                                }
                                break e;
                            } finally{
                                v = null, S = ae, E = !1;
                            }
                            G = void 0;
                        }
                    } finally{
                        G ? Je() : ne = !1;
                    }
                }
            }
            var Je;
            if (typeof z == "function") Je = function() {
                z(ot);
            };
            else if (typeof MessageChannel < "u") {
                var ie = new MessageChannel, be = ie.port2;
                ie.port1.onmessage = ot, Je = function() {
                    be.postMessage(null);
                };
            } else Je = function() {
                B(ot, 0);
            };
            function Re(M, G) {
                K = B(function() {
                    M(i.unstable_now());
                }, G);
            }
            i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(M) {
                M.callback = null;
            }, i.unstable_forceFrameRate = function(M) {
                0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ne = 0 < M ? Math.floor(1e3 / M) : 5;
            }, i.unstable_getCurrentPriorityLevel = function() {
                return S;
            }, i.unstable_next = function(M) {
                switch(S){
                    case 1:
                    case 2:
                    case 3:
                        var G = 3;
                        break;
                    default:
                        G = S;
                }
                var ae = S;
                S = G;
                try {
                    return M();
                } finally{
                    S = ae;
                }
            }, i.unstable_requestPaint = function() {
                k = !0;
            }, i.unstable_runWithPriority = function(M, G) {
                switch(M){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        M = 3;
                }
                var ae = S;
                S = M;
                try {
                    return G();
                } finally{
                    S = ae;
                }
            }, i.unstable_scheduleCallback = function(M, G, ae) {
                var Ee = i.unstable_now();
                switch(typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? Ee + ae : Ee) : ae = Ee, M){
                    case 1:
                        var Oe = -1;
                        break;
                    case 2:
                        Oe = 250;
                        break;
                    case 5:
                        Oe = 1073741823;
                        break;
                    case 4:
                        Oe = 1e4;
                        break;
                    default:
                        Oe = 5e3;
                }
                return Oe = ae + Oe, M = {
                    id: b++,
                    callback: G,
                    priorityLevel: M,
                    startTime: ae,
                    expirationTime: Oe,
                    sortIndex: -1
                }, ae > Ee ? (M.sortIndex = ae, n(g, M), r(p) === null && M === r(g) && (D ? ($(K), K = -1) : D = !0, Re(te, ae - Ee))) : (M.sortIndex = Oe, n(p, M), N || E || (N = !0, ne || (ne = !0, Je()))), M;
            }, i.unstable_shouldYield = Dt, i.unstable_wrapCallback = function(M) {
                var G = S;
                return function() {
                    var ae = S;
                    S = G;
                    try {
                        return M.apply(this, arguments);
                    } finally{
                        S = ae;
                    }
                };
            };
        })(Zu)), Zu;
    }
    var Ip;
    function Fv() {
        return Ip || (Ip = 1, Qu.exports = Zv()), Qu.exports;
    }
    var Fu = {
        exports: {}
    }, lt = {};
    var Vp;
    function e0() {
        if (Vp) return lt;
        Vp = 1;
        var i = Ac();
        function n(p) {
            var g = "https://react.dev/errors/" + p;
            if (1 < arguments.length) {
                g += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)g += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function r() {}
        var l = {
            d: {
                f: r,
                r: function() {
                    throw Error(n(522));
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        }, u = Symbol.for("react.portal");
        function h(p, g, b) {
            var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: u,
                key: v == null ? null : "" + v,
                children: p,
                containerInfo: g,
                implementation: b
            };
        }
        var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function d(p, g) {
            if (p === "font") return "";
            if (typeof g == "string") return g === "use-credentials" ? g : "";
        }
        return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, lt.createPortal = function(p, g) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(n(299));
            return h(p, g, null, b);
        }, lt.flushSync = function(p) {
            var g = f.T, b = l.p;
            try {
                if (f.T = null, l.p = 2, p) return p();
            } finally{
                f.T = g, l.p = b, l.d.f();
            }
        }, lt.preconnect = function(p, g) {
            typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, l.d.C(p, g));
        }, lt.prefetchDNS = function(p) {
            typeof p == "string" && l.d.D(p);
        }, lt.preinit = function(p, g) {
            if (typeof p == "string" && g && typeof g.as == "string") {
                var b = g.as, v = d(b, g.crossOrigin), S = typeof g.integrity == "string" ? g.integrity : void 0, E = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
                b === "style" ? l.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                    crossOrigin: v,
                    integrity: S,
                    fetchPriority: E
                }) : b === "script" && l.d.X(p, {
                    crossOrigin: v,
                    integrity: S,
                    fetchPriority: E,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0
                });
            }
        }, lt.preinitModule = function(p, g) {
            if (typeof p == "string") if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var b = d(g.as, g.crossOrigin);
                    l.d.M(p, {
                        crossOrigin: b,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    });
                }
            } else g == null && l.d.M(p);
        }, lt.preload = function(p, g) {
            if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
                var b = g.as, v = d(b, g.crossOrigin);
                l.d.L(p, b, {
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                    type: typeof g.type == "string" ? g.type : void 0,
                    fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                    referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                    imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                    imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                    media: typeof g.media == "string" ? g.media : void 0
                });
            }
        }, lt.preloadModule = function(p, g) {
            if (typeof p == "string") if (g) {
                var b = d(g.as, g.crossOrigin);
                l.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: b,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                });
            } else l.d.m(p);
        }, lt.requestFormReset = function(p) {
            l.d.r(p);
        }, lt.unstable_batchedUpdates = function(p, g) {
            return p(g);
        }, lt.useFormState = function(p, g, b) {
            return f.H.useFormState(p, g, b);
        }, lt.useFormStatus = function() {
            return f.H.useHostTransitionStatus();
        }, lt.version = "19.2.5", lt;
    }
    var Kp;
    function t0() {
        if (Kp) return Fu.exports;
        Kp = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), Fu.exports = e0(), Fu.exports;
    }
    var Yp;
    function n0() {
        if (Yp) return Sr;
        Yp = 1;
        var i = Fv(), n = Ac(), r = t0();
        function l(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var a = 2; a < arguments.length; a++)t += "&args[]=" + encodeURIComponent(arguments[a]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function u(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function h(e) {
            var t = e, a = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? a : null;
        }
        function f(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function d(e) {
            if (e.tag === 31) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function p(e) {
            if (h(e) !== e) throw Error(l(188));
        }
        function g(e) {
            var t = e.alternate;
            if (!t) {
                if (t = h(e), t === null) throw Error(l(188));
                return t !== e ? null : e;
            }
            for(var a = e, s = t;;){
                var o = a.return;
                if (o === null) break;
                var c = o.alternate;
                if (c === null) {
                    if (s = o.return, s !== null) {
                        a = s;
                        continue;
                    }
                    break;
                }
                if (o.child === c.child) {
                    for(c = o.child; c;){
                        if (c === a) return p(o), e;
                        if (c === s) return p(o), t;
                        c = c.sibling;
                    }
                    throw Error(l(188));
                }
                if (a.return !== s.return) a = o, s = c;
                else {
                    for(var m = !1, y = o.child; y;){
                        if (y === a) {
                            m = !0, a = o, s = c;
                            break;
                        }
                        if (y === s) {
                            m = !0, s = o, a = c;
                            break;
                        }
                        y = y.sibling;
                    }
                    if (!m) {
                        for(y = c.child; y;){
                            if (y === a) {
                                m = !0, a = c, s = o;
                                break;
                            }
                            if (y === s) {
                                m = !0, s = c, a = o;
                                break;
                            }
                            y = y.sibling;
                        }
                        if (!m) throw Error(l(189));
                    }
                }
                if (a.alternate !== s) throw Error(l(190));
            }
            if (a.tag !== 3) throw Error(l(188));
            return a.stateNode.current === a ? e : t;
        }
        function b(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = b(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var v = Object.assign, S = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), z = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Ne = Symbol.for("react.lazy"), Se = Symbol.for("react.activity"), Dt = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
        function Je(e) {
            return e === null || typeof e != "object" ? null : (e = ot && e[ot] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var ie = Symbol.for("react.client.reference");
        function be(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === ie ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case D:
                    return "Fragment";
                case B:
                    return "Profiler";
                case k:
                    return "StrictMode";
                case te:
                    return "Suspense";
                case ne:
                    return "SuspenseList";
                case Se:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case N:
                    return "Portal";
                case z:
                    return e.displayName || "Context";
                case $:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case K:
                    return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
                case Ne:
                    t = e._payload, e = e._init;
                    try {
                        return be(e(t));
                    } catch  {}
            }
            return null;
        }
        var Re = Array.isArray, M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Ee = [], Oe = -1;
        function x(e) {
            return {
                current: e
            };
        }
        function P(e) {
            0 > Oe || (e.current = Ee[Oe], Ee[Oe] = null, Oe--);
        }
        function I(e, t) {
            Oe++, Ee[Oe] = e.current, e.current = t;
        }
        var W = x(null), se = x(null), ue = x(null), ve = x(null);
        function ut(e, t) {
            switch(I(ue, t), I(se, e), I(W, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? op(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = op(t), e = up(t, e);
                    else switch(e){
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
            }
            P(W), I(W, e);
        }
        function $e() {
            P(W), P(se), P(ue);
        }
        function Oi(e) {
            e.memoizedState !== null && I(ve, e);
            var t = W.current, a = up(t, e.type);
            t !== a && (I(se, e), I(W, a));
        }
        function Pr(e) {
            se.current === e && (P(W), P(se)), ve.current === e && (P(ve), yr._currentValue = ae);
        }
        var Cl, Mc;
        function aa(e) {
            if (Cl === void 0) try {
                throw Error();
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Cl = t && t[1] || "", Mc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Cl + e + Mc;
        }
        var kl = !1;
        function jl(e, t) {
            if (!e || kl) return "";
            kl = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var s = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var q = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(q.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(q, []);
                                    } catch (U) {
                                        var j = U;
                                    }
                                    Reflect.construct(e, [], q);
                                } else {
                                    try {
                                        q.call();
                                    } catch (U) {
                                        j = U;
                                    }
                                    e.call(q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (U) {
                                    j = U;
                                }
                                (q = e()) && typeof q.catch == "function" && q.catch(function() {});
                            }
                        } catch (U) {
                            if (U && j && typeof U.stack == "string") return [
                                U.stack,
                                j.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var o = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
                o && o.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var c = s.DetermineComponentFrameRoot(), m = c[0], y = c[1];
                if (m && y) {
                    var _ = m.split(`
`), C = y.split(`
`);
                    for(o = s = 0; s < _.length && !_[s].includes("DetermineComponentFrameRoot");)s++;
                    for(; o < C.length && !C[o].includes("DetermineComponentFrameRoot");)o++;
                    if (s === _.length || o === C.length) for(s = _.length - 1, o = C.length - 1; 1 <= s && 0 <= o && _[s] !== C[o];)o--;
                    for(; 1 <= s && 0 <= o; s--, o--)if (_[s] !== C[o]) {
                        if (s !== 1 || o !== 1) do if (s--, o--, 0 > o || _[s] !== C[o]) {
                            var L = `
` + _[s].replace(" at new ", " at ");
                            return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L;
                        }
                        while (1 <= s && 0 <= o);
                        break;
                    }
                }
            } finally{
                kl = !1, Error.prepareStackTrace = a;
            }
            return (a = e ? e.displayName || e.name : "") ? aa(a) : "";
        }
        function Ag(e, t) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return aa(e.type);
                case 16:
                    return aa("Lazy");
                case 13:
                    return e.child !== t && t !== null ? aa("Suspense Fallback") : aa("Suspense");
                case 19:
                    return aa("SuspenseList");
                case 0:
                case 15:
                    return jl(e.type, !1);
                case 11:
                    return jl(e.type.render, !1);
                case 1:
                    return jl(e.type, !0);
                case 31:
                    return aa("Activity");
                default:
                    return "";
            }
        }
        function Hc(e) {
            try {
                var t = "", a = null;
                do t += Ag(e, a), a = e, e = e.return;
                while (e);
                return t;
            } catch (s) {
                return `
Error generating stack: ` + s.message + `
` + s.stack;
            }
        }
        var Nl = Object.prototype.hasOwnProperty, Dl = i.unstable_scheduleCallback, Ul = i.unstable_cancelCallback, xg = i.unstable_shouldYield, Rg = i.unstable_requestPaint, bt = i.unstable_now, Og = i.unstable_getCurrentPriorityLevel, Bc = i.unstable_ImmediatePriority, qc = i.unstable_UserBlockingPriority, $r = i.unstable_NormalPriority, Cg = i.unstable_LowPriority, Pc = i.unstable_IdlePriority, kg = i.log, jg = i.unstable_setDisableYieldValue, Ci = null, wt = null;
        function kn(e) {
            if (typeof kg == "function" && jg(e), wt && typeof wt.setStrictMode == "function") try {
                wt.setStrictMode(Ci, e);
            } catch  {}
        }
        var _t = Math.clz32 ? Math.clz32 : Ug, Ng = Math.log, Dg = Math.LN2;
        function Ug(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Ng(e) / Dg | 0) | 0;
        }
        var Gr = 256, Ir = 262144, Vr = 4194304;
        function ia(e) {
            var t = e & 42;
            if (t !== 0) return t;
            switch(e & -e){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return e & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return e & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e;
            }
        }
        function Kr(e, t, a) {
            var s = e.pendingLanes;
            if (s === 0) return 0;
            var o = 0, c = e.suspendedLanes, m = e.pingedLanes;
            e = e.warmLanes;
            var y = s & 134217727;
            return y !== 0 ? (s = y & ~c, s !== 0 ? o = ia(s) : (m &= y, m !== 0 ? o = ia(m) : a || (a = y & ~e, a !== 0 && (o = ia(a))))) : (y = s & ~c, y !== 0 ? o = ia(y) : m !== 0 ? o = ia(m) : a || (a = s & ~e, a !== 0 && (o = ia(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, a = t & -t, c >= a || c === 32 && (a & 4194048) !== 0) ? t : o;
        }
        function ki(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function zg(e, t) {
            switch(e){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return t + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function $c() {
            var e = Vr;
            return Vr <<= 1, (Vr & 62914560) === 0 && (Vr = 4194304), e;
        }
        function zl(e) {
            for(var t = [], a = 0; 31 > a; a++)t.push(e);
            return t;
        }
        function ji(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Lg(e, t, a, s, o, c) {
            var m = e.pendingLanes;
            e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
            var y = e.entanglements, _ = e.expirationTimes, C = e.hiddenUpdates;
            for(a = m & ~a; 0 < a;){
                var L = 31 - _t(a), q = 1 << L;
                y[L] = 0, _[L] = -1;
                var j = C[L];
                if (j !== null) for(C[L] = null, L = 0; L < j.length; L++){
                    var U = j[L];
                    U !== null && (U.lane &= -536870913);
                }
                a &= ~q;
            }
            s !== 0 && Gc(e, s, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t));
        }
        function Gc(e, t, a) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var s = 31 - _t(t);
            e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930;
        }
        function Ic(e, t) {
            var a = e.entangledLanes |= t;
            for(e = e.entanglements; a;){
                var s = 31 - _t(a), o = 1 << s;
                o & t | e[s] & t && (e[s] |= t), a &= ~o;
            }
        }
        function Vc(e, t) {
            var a = t & -t;
            return a = (a & 42) !== 0 ? 1 : Ll(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
        }
        function Ll(e) {
            switch(e){
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    e = 128;
                    break;
                case 268435456:
                    e = 134217728;
                    break;
                default:
                    e = 0;
            }
            return e;
        }
        function Ml(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Kc() {
            var e = G.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Np(e.type));
        }
        function Yc(e, t) {
            var a = G.p;
            try {
                return G.p = e, t();
            } finally{
                G.p = a;
            }
        }
        var jn = Math.random().toString(36).slice(2), et = "__reactFiber$" + jn, ht = "__reactProps$" + jn, Ra = "__reactContainer$" + jn, Hl = "__reactEvents$" + jn, Mg = "__reactListeners$" + jn, Hg = "__reactHandles$" + jn, Xc = "__reactResources$" + jn, Ni = "__reactMarker$" + jn;
        function Bl(e) {
            delete e[et], delete e[ht], delete e[Hl], delete e[Mg], delete e[Hg];
        }
        function Oa(e) {
            var t = e[et];
            if (t) return t;
            for(var a = e.parentNode; a;){
                if (t = a[Ra] || a[et]) {
                    if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for(e = gp(e); e !== null;){
                        if (a = e[et]) return a;
                        e = gp(e);
                    }
                    return t;
                }
                e = a, a = e.parentNode;
            }
            return null;
        }
        function Ca(e) {
            if (e = e[et] || e[Ra]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Di(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(l(33));
        }
        function ka(e) {
            var t = e[Xc];
            return t || (t = e[Xc] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ze(e) {
            e[Ni] = !0;
        }
        var Wc = new Set, Jc = {};
        function ra(e, t) {
            ja(e, t), ja(e + "Capture", t);
        }
        function ja(e, t) {
            for(Jc[e] = t, e = 0; e < t.length; e++)Wc.add(t[e]);
        }
        var Bg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Qc = {}, Zc = {};
        function qg(e) {
            return Nl.call(Zc, e) ? !0 : Nl.call(Qc, e) ? !1 : Bg.test(e) ? Zc[e] = !0 : (Qc[e] = !0, !1);
        }
        function Yr(e, t, a) {
            if (qg(t)) if (a === null) e.removeAttribute(t);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var s = t.toLowerCase().slice(0, 5);
                        if (s !== "data-" && s !== "aria-") {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, "" + a);
            }
        }
        function Xr(e, t, a) {
            if (a === null) e.removeAttribute(t);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttribute(t, "" + a);
            }
        }
        function ln(e, t, a, s) {
            if (s === null) e.removeAttribute(a);
            else {
                switch(typeof s){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(a);
                        return;
                }
                e.setAttributeNS(t, a, "" + s);
            }
        }
        function Ut(e) {
            switch(typeof e){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function Fc(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Pg(e, t, a) {
            var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
                var o = s.get, c = s.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this);
                    },
                    set: function(m) {
                        a = "" + m, c.call(this, m);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: s.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(m) {
                        a = "" + m;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function ql(e) {
            if (!e._valueTracker) {
                var t = Fc(e) ? "checked" : "value";
                e._valueTracker = Pg(e, t, "" + e[t]);
            }
        }
        function eh(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var a = t.getValue(), s = "";
            return e && (s = Fc(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
        }
        function Wr(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var $g = /[\n"\\]/g;
        function zt(e) {
            return e.replace($g, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Pl(e, t, a, s, o, c, m, y) {
            e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? $l(e, m, Ut(t)) : a != null ? $l(e, m, Ut(a)) : s != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ut(y) : e.removeAttribute("name");
        }
        function th(e, t, a, s, o, c, m, y) {
            if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
                if (!(c !== "submit" && c !== "reset" || t != null)) {
                    ql(e);
                    return;
                }
                a = a != null ? "" + Ut(a) : "", t = t != null ? "" + Ut(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            s = s ?? o, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = y ? e.checked : !!s, e.defaultChecked = !!s, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), ql(e);
        }
        function $l(e, t, a) {
            t === "number" && Wr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
        }
        function Na(e, t, a, s) {
            if (e = e.options, t) {
                t = {};
                for(var o = 0; o < a.length; o++)t["$" + a[o]] = !0;
                for(a = 0; a < e.length; a++)o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && s && (e[a].defaultSelected = !0);
            } else {
                for(a = "" + Ut(a), t = null, o = 0; o < e.length; o++){
                    if (e[o].value === a) {
                        e[o].selected = !0, s && (e[o].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[o].disabled || (t = e[o]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function nh(e, t, a) {
            if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), a == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = a != null ? "" + Ut(a) : "";
        }
        function ah(e, t, a, s) {
            if (t == null) {
                if (s != null) {
                    if (a != null) throw Error(l(92));
                    if (Re(s)) {
                        if (1 < s.length) throw Error(l(93));
                        s = s[0];
                    }
                    a = s;
                }
                a == null && (a = ""), t = a;
            }
            a = Ut(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s), ql(e);
        }
        function Da(e, t) {
            if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === 3) {
                    a.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Gg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function ih(e, t, a) {
            var s = t.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Gg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
        }
        function rh(e, t, a) {
            if (t != null && typeof t != "object") throw Error(l(62));
            if (e = e.style, a != null) {
                for(var s in a)!a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
                for(var o in t)s = t[o], t.hasOwnProperty(o) && a[o] !== s && ih(e, o, s);
            } else for(var c in t)t.hasOwnProperty(c) && ih(e, c, t[c]);
        }
        function Gl(e) {
            if (e.indexOf("-") === -1) return !1;
            switch(e){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var Ig = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), Vg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Jr(e) {
            return Vg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function on() {}
        var Il = null;
        function Vl(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Ua = null, za = null;
        function sh(e) {
            var t = Ca(e);
            if (t && (e = t.stateNode)) {
                var a = e[ht] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Pl(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                            for(a = e; a.parentNode;)a = a.parentNode;
                            for(a = a.querySelectorAll('input[name="' + zt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++){
                                var s = a[t];
                                if (s !== e && s.form === e.form) {
                                    var o = s[ht] || null;
                                    if (!o) throw Error(l(90));
                                    Pl(s, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                                }
                            }
                            for(t = 0; t < a.length; t++)s = a[t], s.form === e.form && eh(s);
                        }
                        break e;
                    case "textarea":
                        nh(e, a.value, a.defaultValue);
                        break e;
                    case "select":
                        t = a.value, t != null && Na(e, !!a.multiple, t, !1);
                }
            }
        }
        var Kl = !1;
        function lh(e, t, a) {
            if (Kl) return e(t, a);
            Kl = !0;
            try {
                var s = e(t);
                return s;
            } finally{
                if (Kl = !1, (Ua !== null || za !== null) && (Ms(), Ua && (t = Ua, e = za, za = Ua = null, sh(t), e))) for(t = 0; t < e.length; t++)sh(e[t]);
            }
        }
        function Ui(e, t) {
            var a = e.stateNode;
            if (a === null) return null;
            var s = a[ht] || null;
            if (s === null) return null;
            a = s[t];
            e: switch(t){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (a && typeof a != "function") throw Error(l(231, t, typeof a));
            return a;
        }
        var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yl = !1;
        if (un) try {
            var zi = {};
            Object.defineProperty(zi, "passive", {
                get: function() {
                    Yl = !0;
                }
            }), window.addEventListener("test", zi, zi), window.removeEventListener("test", zi, zi);
        } catch  {
            Yl = !1;
        }
        var Nn = null, Xl = null, Qr = null;
        function oh() {
            if (Qr) return Qr;
            var e, t = Xl, a = t.length, s, o = "value" in Nn ? Nn.value : Nn.textContent, c = o.length;
            for(e = 0; e < a && t[e] === o[e]; e++);
            var m = a - e;
            for(s = 1; s <= m && t[a - s] === o[c - s]; s++);
            return Qr = o.slice(e, 1 < s ? 1 - s : void 0);
        }
        function Zr(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Fr() {
            return !0;
        }
        function uh() {
            return !1;
        }
        function ft(e) {
            function t(a, s, o, c, m) {
                this._reactName = a, this._targetInst = o, this.type = s, this.nativeEvent = c, this.target = m, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
                return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Fr : uh, this.isPropagationStopped = uh, this;
            }
            return v(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fr);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fr);
                },
                persist: function() {},
                isPersistent: Fr
            }), t;
        }
        var sa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, es = ft(sa), Li = v({}, sa, {
            view: 0,
            detail: 0
        }), Kg = ft(Li), Wl, Jl, Mi, ts = v({}, Li, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Zl,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Wl = e.screenX - Mi.screenX, Jl = e.screenY - Mi.screenY) : Jl = Wl = 0, Mi = e), Wl);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Jl;
            }
        }), ch = ft(ts), Yg = v({}, ts, {
            dataTransfer: 0
        }), Xg = ft(Yg), Wg = v({}, Li, {
            relatedTarget: 0
        }), Ql = ft(Wg), Jg = v({}, sa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Qg = ft(Jg), Zg = v({}, sa, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Fg = ft(Zg), ey = v({}, sa, {
            data: 0
        }), hh = ft(ey), ty = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, ny = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, ay = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function iy(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = ay[e]) ? !!t[e] : !1;
        }
        function Zl() {
            return iy;
        }
        var ry = v({}, Li, {
            key: function(e) {
                if (e.key) {
                    var t = ty[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ny[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Zl,
            charCode: function(e) {
                return e.type === "keypress" ? Zr(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), sy = ft(ry), ly = v({}, ts, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), fh = ft(ly), oy = v({}, Li, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Zl
        }), uy = ft(oy), cy = v({}, sa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), hy = ft(cy), fy = v({}, ts, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), dy = ft(fy), py = v({}, sa, {
            newState: 0,
            oldState: 0
        }), my = ft(py), gy = [
            9,
            13,
            27,
            32
        ], Fl = un && "CompositionEvent" in window, Hi = null;
        un && "documentMode" in document && (Hi = document.documentMode);
        var yy = un && "TextEvent" in window && !Hi, dh = un && (!Fl || Hi && 8 < Hi && 11 >= Hi), ph = " ", mh = !1;
        function gh(e, t) {
            switch(e){
                case "keyup":
                    return gy.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function yh(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var La = !1;
        function vy(e, t) {
            switch(e){
                case "compositionend":
                    return yh(t);
                case "keypress":
                    return t.which !== 32 ? null : (mh = !0, ph);
                case "textInput":
                    return e = t.data, e === ph && mh ? null : e;
                default:
                    return null;
            }
        }
        function by(e, t) {
            if (La) return e === "compositionend" || !Fl && gh(e, t) ? (e = oh(), Qr = Xl = Nn = null, La = !1, e) : null;
            switch(e){
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return dh && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var wy = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function vh(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!wy[e.type] : t === "textarea";
        }
        function bh(e, t, a, s) {
            Ua ? za ? za.push(s) : za = [
                s
            ] : Ua = s, t = Is(t, "onChange"), 0 < t.length && (a = new es("onChange", "change", null, a, s), e.push({
                event: a,
                listeners: t
            }));
        }
        var Bi = null, qi = null;
        function _y(e) {
            np(e, 0);
        }
        function ns(e) {
            var t = Di(e);
            if (eh(t)) return e;
        }
        function wh(e, t) {
            if (e === "change") return t;
        }
        var _h = !1;
        if (un) {
            var eo;
            if (un) {
                var to = "oninput" in document;
                if (!to) {
                    var Sh = document.createElement("div");
                    Sh.setAttribute("oninput", "return;"), to = typeof Sh.oninput == "function";
                }
                eo = to;
            } else eo = !1;
            _h = eo && (!document.documentMode || 9 < document.documentMode);
        }
        function Eh() {
            Bi && (Bi.detachEvent("onpropertychange", Th), qi = Bi = null);
        }
        function Th(e) {
            if (e.propertyName === "value" && ns(qi)) {
                var t = [];
                bh(t, qi, e, Vl(e)), lh(_y, t);
            }
        }
        function Sy(e, t, a) {
            e === "focusin" ? (Eh(), Bi = t, qi = a, Bi.attachEvent("onpropertychange", Th)) : e === "focusout" && Eh();
        }
        function Ey(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ns(qi);
        }
        function Ty(e, t) {
            if (e === "click") return ns(t);
        }
        function Ay(e, t) {
            if (e === "input" || e === "change") return ns(t);
        }
        function xy(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var St = typeof Object.is == "function" ? Object.is : xy;
        function Pi(e, t) {
            if (St(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var a = Object.keys(e), s = Object.keys(t);
            if (a.length !== s.length) return !1;
            for(s = 0; s < a.length; s++){
                var o = a[s];
                if (!Nl.call(t, o) || !St(e[o], t[o])) return !1;
            }
            return !0;
        }
        function Ah(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function xh(e, t) {
            var a = Ah(e);
            e = 0;
            for(var s; a;){
                if (a.nodeType === 3) {
                    if (s = e + a.textContent.length, e <= t && s >= t) return {
                        node: a,
                        offset: t - e
                    };
                    e = s;
                }
                e: {
                    for(; a;){
                        if (a.nextSibling) {
                            a = a.nextSibling;
                            break e;
                        }
                        a = a.parentNode;
                    }
                    a = void 0;
                }
                a = Ah(a);
            }
        }
        function Rh(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Oh(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = Wr(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var a = typeof t.contentWindow.location.href == "string";
                } catch  {
                    a = !1;
                }
                if (a) e = t.contentWindow;
                else break;
                t = Wr(e.document);
            }
            return t;
        }
        function no(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var Ry = un && "documentMode" in document && 11 >= document.documentMode, Ma = null, ao = null, $i = null, io = !1;
        function Ch(e, t, a) {
            var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            io || Ma == null || Ma !== Wr(s) || (s = Ma, "selectionStart" in s && no(s) ? s = {
                start: s.selectionStart,
                end: s.selectionEnd
            } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
                anchorNode: s.anchorNode,
                anchorOffset: s.anchorOffset,
                focusNode: s.focusNode,
                focusOffset: s.focusOffset
            }), $i && Pi($i, s) || ($i = s, s = Is(ao, "onSelect"), 0 < s.length && (t = new es("onSelect", "select", null, t, a), e.push({
                event: t,
                listeners: s
            }), t.target = Ma)));
        }
        function la(e, t) {
            var a = {};
            return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
        }
        var Ha = {
            animationend: la("Animation", "AnimationEnd"),
            animationiteration: la("Animation", "AnimationIteration"),
            animationstart: la("Animation", "AnimationStart"),
            transitionrun: la("Transition", "TransitionRun"),
            transitionstart: la("Transition", "TransitionStart"),
            transitioncancel: la("Transition", "TransitionCancel"),
            transitionend: la("Transition", "TransitionEnd")
        }, ro = {}, kh = {};
        un && (kh = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
        function oa(e) {
            if (ro[e]) return ro[e];
            if (!Ha[e]) return e;
            var t = Ha[e], a;
            for(a in t)if (t.hasOwnProperty(a) && a in kh) return ro[e] = t[a];
            return e;
        }
        var jh = oa("animationend"), Nh = oa("animationiteration"), Dh = oa("animationstart"), Oy = oa("transitionrun"), Cy = oa("transitionstart"), ky = oa("transitioncancel"), Uh = oa("transitionend"), zh = new Map, so = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        so.push("scrollEnd");
        function Vt(e, t) {
            zh.set(e, t), ra(t, [
                e
            ]);
        }
        var as = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return;
            }
            console.error(e);
        }, Lt = [], Ba = 0, lo = 0;
        function is() {
            for(var e = Ba, t = lo = Ba = 0; t < e;){
                var a = Lt[t];
                Lt[t++] = null;
                var s = Lt[t];
                Lt[t++] = null;
                var o = Lt[t];
                Lt[t++] = null;
                var c = Lt[t];
                if (Lt[t++] = null, s !== null && o !== null) {
                    var m = s.pending;
                    m === null ? o.next = o : (o.next = m.next, m.next = o), s.pending = o;
                }
                c !== 0 && Lh(a, o, c);
            }
        }
        function rs(e, t, a, s) {
            Lt[Ba++] = e, Lt[Ba++] = t, Lt[Ba++] = a, Lt[Ba++] = s, lo |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
        }
        function oo(e, t, a, s) {
            return rs(e, t, a, s), ss(e);
        }
        function ua(e, t) {
            return rs(e, null, null, t), ss(e);
        }
        function Lh(e, t, a) {
            e.lanes |= a;
            var s = e.alternate;
            s !== null && (s.lanes |= a);
            for(var o = !1, c = e.return; c !== null;)c.childLanes |= a, s = c.alternate, s !== null && (s.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
            return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - _t(a), e = c.hiddenUpdates, s = e[o], s === null ? e[o] = [
                t
            ] : s.push(t), t.lane = a | 536870912), c) : null;
        }
        function ss(e) {
            if (50 < cr) throw cr = 0, vu = null, Error(l(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var qa = {};
        function jy(e, t, a, s) {
            this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Et(e, t, a, s) {
            return new jy(e, t, a, s);
        }
        function uo(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function cn(e, t) {
            var a = e.alternate;
            return a === null ? (a = Et(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
        }
        function Mh(e, t) {
            e.flags &= 65011714;
            var a = e.alternate;
            return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function ls(e, t, a, s, o, c) {
            var m = 0;
            if (s = e, typeof e == "function") uo(e) && (m = 1);
            else if (typeof e == "string") m = Lv(e, a, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case Se:
                    return e = Et(31, a, t, o), e.elementType = Se, e.lanes = c, e;
                case D:
                    return ca(a.children, o, c, t);
                case k:
                    m = 8, o |= 24;
                    break;
                case B:
                    return e = Et(12, a, t, o | 2), e.elementType = B, e.lanes = c, e;
                case te:
                    return e = Et(13, a, t, o), e.elementType = te, e.lanes = c, e;
                case ne:
                    return e = Et(19, a, t, o), e.elementType = ne, e.lanes = c, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case z:
                            m = 10;
                            break e;
                        case $:
                            m = 9;
                            break e;
                        case V:
                            m = 11;
                            break e;
                        case K:
                            m = 14;
                            break e;
                        case Ne:
                            m = 16, s = null;
                            break e;
                    }
                    m = 29, a = Error(l(130, e === null ? "null" : typeof e, "")), s = null;
            }
            return t = Et(m, a, t, o), t.elementType = e, t.type = s, t.lanes = c, t;
        }
        function ca(e, t, a, s) {
            return e = Et(7, e, s, t), e.lanes = a, e;
        }
        function co(e, t, a) {
            return e = Et(6, e, null, t), e.lanes = a, e;
        }
        function Hh(e) {
            var t = Et(18, null, null, 0);
            return t.stateNode = e, t;
        }
        function ho(e, t, a) {
            return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Bh = new WeakMap;
        function Mt(e, t) {
            if (typeof e == "object" && e !== null) {
                var a = Bh.get(e);
                return a !== void 0 ? a : (t = {
                    value: e,
                    source: t,
                    stack: Hc(t)
                }, Bh.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Hc(t)
            };
        }
        var Pa = [], $a = 0, os = null, Gi = 0, Ht = [], Bt = 0, Dn = null, Zt = 1, Ft = "";
        function hn(e, t) {
            Pa[$a++] = Gi, Pa[$a++] = os, os = e, Gi = t;
        }
        function qh(e, t, a) {
            Ht[Bt++] = Zt, Ht[Bt++] = Ft, Ht[Bt++] = Dn, Dn = e;
            var s = Zt;
            e = Ft;
            var o = 32 - _t(s) - 1;
            s &= ~(1 << o), a += 1;
            var c = 32 - _t(t) + o;
            if (30 < c) {
                var m = o - o % 5;
                c = (s & (1 << m) - 1).toString(32), s >>= m, o -= m, Zt = 1 << 32 - _t(t) + o | a << o | s, Ft = c + e;
            } else Zt = 1 << c | a << o | s, Ft = e;
        }
        function fo(e) {
            e.return !== null && (hn(e, 1), qh(e, 1, 0));
        }
        function po(e) {
            for(; e === os;)os = Pa[--$a], Pa[$a] = null, Gi = Pa[--$a], Pa[$a] = null;
            for(; e === Dn;)Dn = Ht[--Bt], Ht[Bt] = null, Ft = Ht[--Bt], Ht[Bt] = null, Zt = Ht[--Bt], Ht[Bt] = null;
        }
        function Ph(e, t) {
            Ht[Bt++] = Zt, Ht[Bt++] = Ft, Ht[Bt++] = Dn, Zt = t.id, Ft = t.overflow, Dn = e;
        }
        var tt = null, De = null, pe = !1, Un = null, qt = !1, mo = Error(l(519));
        function zn(e) {
            var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw Ii(Mt(t, e)), mo;
        }
        function $h(e) {
            var t = e.stateNode, a = e.type, s = e.memoizedProps;
            switch(t[et] = e, t[ht] = s, a){
                case "dialog":
                    he("cancel", t), he("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    he("load", t);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < fr.length; a++)he(fr[a], t);
                    break;
                case "source":
                    he("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    he("error", t), he("load", t);
                    break;
                case "details":
                    he("toggle", t);
                    break;
                case "input":
                    he("invalid", t), th(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                    break;
                case "select":
                    he("invalid", t);
                    break;
                case "textarea":
                    he("invalid", t), ah(t, s.value, s.defaultValue, s.children);
            }
            a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || sp(t.textContent, a) ? (s.popover != null && (he("beforetoggle", t), he("toggle", t)), s.onScroll != null && he("scroll", t), s.onScrollEnd != null && he("scrollend", t), s.onClick != null && (t.onclick = on), t = !0) : t = !1, t || zn(e, !0);
        }
        function Gh(e) {
            for(tt = e.return; tt;)switch(tt.tag){
                case 5:
                case 31:
                case 13:
                    qt = !1;
                    return;
                case 27:
                case 3:
                    qt = !0;
                    return;
                default:
                    tt = tt.return;
            }
        }
        function Ga(e) {
            if (e !== tt) return !1;
            if (!pe) return Gh(e), pe = !0, !1;
            var t = e.tag, a;
            if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Du(e.type, e.memoizedProps)), a = !a), a && De && zn(e), Gh(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                De = mp(e);
            } else if (t === 31) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                De = mp(e);
            } else t === 27 ? (t = De, Wn(e.type) ? (e = Hu, Hu = null, De = e) : De = t) : De = tt ? $t(e.stateNode.nextSibling) : null;
            return !0;
        }
        function ha() {
            De = tt = null, pe = !1;
        }
        function go() {
            var e = Un;
            return e !== null && (gt === null ? gt = e : gt.push.apply(gt, e), Un = null), e;
        }
        function Ii(e) {
            Un === null ? Un = [
                e
            ] : Un.push(e);
        }
        var yo = x(null), fa = null, fn = null;
        function Ln(e, t, a) {
            I(yo, t._currentValue), t._currentValue = a;
        }
        function dn(e) {
            e._currentValue = yo.current, P(yo);
        }
        function vo(e, t, a) {
            for(; e !== null;){
                var s = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
                e = e.return;
            }
        }
        function bo(e, t, a, s) {
            var o = e.child;
            for(o !== null && (o.return = e); o !== null;){
                var c = o.dependencies;
                if (c !== null) {
                    var m = o.child;
                    c = c.firstContext;
                    e: for(; c !== null;){
                        var y = c;
                        c = o;
                        for(var _ = 0; _ < t.length; _++)if (y.context === t[_]) {
                            c.lanes |= a, y = c.alternate, y !== null && (y.lanes |= a), vo(c.return, a, e), s || (m = null);
                            break e;
                        }
                        c = y.next;
                    }
                } else if (o.tag === 18) {
                    if (m = o.return, m === null) throw Error(l(341));
                    m.lanes |= a, c = m.alternate, c !== null && (c.lanes |= a), vo(m, a, e), m = null;
                } else m = o.child;
                if (m !== null) m.return = o;
                else for(m = o; m !== null;){
                    if (m === e) {
                        m = null;
                        break;
                    }
                    if (o = m.sibling, o !== null) {
                        o.return = m.return, m = o;
                        break;
                    }
                    m = m.return;
                }
                o = m;
            }
        }
        function Ia(e, t, a, s) {
            e = null;
            for(var o = t, c = !1; o !== null;){
                if (!c) {
                    if ((o.flags & 524288) !== 0) c = !0;
                    else if ((o.flags & 262144) !== 0) break;
                }
                if (o.tag === 10) {
                    var m = o.alternate;
                    if (m === null) throw Error(l(387));
                    if (m = m.memoizedProps, m !== null) {
                        var y = o.type;
                        St(o.pendingProps.value, m.value) || (e !== null ? e.push(y) : e = [
                            y
                        ]);
                    }
                } else if (o === ve.current) {
                    if (m = o.alternate, m === null) throw Error(l(387));
                    m.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(yr) : e = [
                        yr
                    ]);
                }
                o = o.return;
            }
            e !== null && bo(t, e, a, s), t.flags |= 262144;
        }
        function us(e) {
            for(e = e.firstContext; e !== null;){
                if (!St(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function da(e) {
            fa = e, fn = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function nt(e) {
            return Ih(fa, e);
        }
        function cs(e, t) {
            return fa === null && da(e), Ih(e, t);
        }
        function Ih(e, t) {
            var a = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, fn === null) {
                if (e === null) throw Error(l(308));
                fn = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else fn = fn.next = t;
            return a;
        }
        var Ny = typeof AbortController < "u" ? AbortController : function() {
            var e = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(a, s) {
                    e.push(s);
                }
            };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(a) {
                    return a();
                });
            };
        }, Dy = i.unstable_scheduleCallback, Uy = i.unstable_NormalPriority, Ve = {
            $$typeof: z,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function wo() {
            return {
                controller: new Ny,
                data: new Map,
                refCount: 0
            };
        }
        function Vi(e) {
            e.refCount--, e.refCount === 0 && Dy(Uy, function() {
                e.controller.abort();
            });
        }
        var Ki = null, _o = 0, Va = 0, Ka = null;
        function zy(e, t) {
            if (Ki === null) {
                var a = Ki = [];
                _o = 0, Va = Tu(), Ka = {
                    status: "pending",
                    value: void 0,
                    then: function(s) {
                        a.push(s);
                    }
                };
            }
            return _o++, t.then(Vh, Vh), t;
        }
        function Vh() {
            if (--_o === 0 && Ki !== null) {
                Ka !== null && (Ka.status = "fulfilled");
                var e = Ki;
                Ki = null, Va = 0, Ka = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function Ly(e, t) {
            var a = [], s = {
                status: "pending",
                value: null,
                reason: null,
                then: function(o) {
                    a.push(o);
                }
            };
            return e.then(function() {
                s.status = "fulfilled", s.value = t;
                for(var o = 0; o < a.length; o++)(0, a[o])(t);
            }, function(o) {
                for(s.status = "rejected", s.reason = o, o = 0; o < a.length; o++)(0, a[o])(void 0);
            }), s;
        }
        var Kh = M.S;
        M.S = function(e, t) {
            kd = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && zy(e, t), Kh !== null && Kh(e, t);
        };
        var pa = x(null);
        function So() {
            var e = pa.current;
            return e !== null ? e : Ce.pooledCache;
        }
        function hs(e, t) {
            t === null ? I(pa, pa.current) : I(pa, t.pool);
        }
        function Yh() {
            var e = So();
            return e === null ? null : {
                parent: Ve._currentValue,
                pool: e
            };
        }
        var Ya = Error(l(460)), Eo = Error(l(474)), fs = Error(l(542)), ds = {
            then: function() {}
        };
        function Xh(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Wh(e, t, a) {
            switch(a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(on, on), t = a), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Qh(e), e;
                default:
                    if (typeof t.status == "string") t.then(on, on);
                    else {
                        if (e = Ce, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
                        e = t, e.status = "pending", e.then(function(s) {
                            if (t.status === "pending") {
                                var o = t;
                                o.status = "fulfilled", o.value = s;
                            }
                        }, function(s) {
                            if (t.status === "pending") {
                                var o = t;
                                o.status = "rejected", o.reason = s;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, Qh(e), e;
                    }
                    throw ga = t, Ya;
            }
        }
        function ma(e) {
            try {
                var t = e._init;
                return t(e._payload);
            } catch (a) {
                throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, Ya) : a;
            }
        }
        var ga = null;
        function Jh() {
            if (ga === null) throw Error(l(459));
            var e = ga;
            return ga = null, e;
        }
        function Qh(e) {
            if (e === Ya || e === fs) throw Error(l(483));
        }
        var Xa = null, Yi = 0;
        function ps(e) {
            var t = Yi;
            return Yi += 1, Xa === null && (Xa = []), Wh(Xa, e, t);
        }
        function Xi(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function ms(e, t) {
            throw t.$$typeof === S ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Zh(e) {
            function t(R, T) {
                if (e) {
                    var O = R.deletions;
                    O === null ? (R.deletions = [
                        T
                    ], R.flags |= 16) : O.push(T);
                }
            }
            function a(R, T) {
                if (!e) return null;
                for(; T !== null;)t(R, T), T = T.sibling;
                return null;
            }
            function s(R) {
                for(var T = new Map; R !== null;)R.key !== null ? T.set(R.key, R) : T.set(R.index, R), R = R.sibling;
                return T;
            }
            function o(R, T) {
                return R = cn(R, T), R.index = 0, R.sibling = null, R;
            }
            function c(R, T, O) {
                return R.index = O, e ? (O = R.alternate, O !== null ? (O = O.index, O < T ? (R.flags |= 67108866, T) : O) : (R.flags |= 67108866, T)) : (R.flags |= 1048576, T);
            }
            function m(R) {
                return e && R.alternate === null && (R.flags |= 67108866), R;
            }
            function y(R, T, O, H) {
                return T === null || T.tag !== 6 ? (T = co(O, R.mode, H), T.return = R, T) : (T = o(T, O), T.return = R, T);
            }
            function _(R, T, O, H) {
                var Q = O.type;
                return Q === D ? L(R, T, O.props.children, H, O.key) : T !== null && (T.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ne && ma(Q) === T.type) ? (T = o(T, O.props), Xi(T, O), T.return = R, T) : (T = ls(O.type, O.key, O.props, null, R.mode, H), Xi(T, O), T.return = R, T);
            }
            function C(R, T, O, H) {
                return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = ho(O, R.mode, H), T.return = R, T) : (T = o(T, O.children || []), T.return = R, T);
            }
            function L(R, T, O, H, Q) {
                return T === null || T.tag !== 7 ? (T = ca(O, R.mode, H, Q), T.return = R, T) : (T = o(T, O), T.return = R, T);
            }
            function q(R, T, O) {
                if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = co("" + T, R.mode, O), T.return = R, T;
                if (typeof T == "object" && T !== null) {
                    switch(T.$$typeof){
                        case E:
                            return O = ls(T.type, T.key, T.props, null, R.mode, O), Xi(O, T), O.return = R, O;
                        case N:
                            return T = ho(T, R.mode, O), T.return = R, T;
                        case Ne:
                            return T = ma(T), q(R, T, O);
                    }
                    if (Re(T) || Je(T)) return T = ca(T, R.mode, O, null), T.return = R, T;
                    if (typeof T.then == "function") return q(R, ps(T), O);
                    if (T.$$typeof === z) return q(R, cs(R, T), O);
                    ms(R, T);
                }
                return null;
            }
            function j(R, T, O, H) {
                var Q = T !== null ? T.key : null;
                if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return Q !== null ? null : y(R, T, "" + O, H);
                if (typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case E:
                            return O.key === Q ? _(R, T, O, H) : null;
                        case N:
                            return O.key === Q ? C(R, T, O, H) : null;
                        case Ne:
                            return O = ma(O), j(R, T, O, H);
                    }
                    if (Re(O) || Je(O)) return Q !== null ? null : L(R, T, O, H, null);
                    if (typeof O.then == "function") return j(R, T, ps(O), H);
                    if (O.$$typeof === z) return j(R, T, cs(R, O), H);
                    ms(R, O);
                }
                return null;
            }
            function U(R, T, O, H, Q) {
                if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return R = R.get(O) || null, y(T, R, "" + H, Q);
                if (typeof H == "object" && H !== null) {
                    switch(H.$$typeof){
                        case E:
                            return R = R.get(H.key === null ? O : H.key) || null, _(T, R, H, Q);
                        case N:
                            return R = R.get(H.key === null ? O : H.key) || null, C(T, R, H, Q);
                        case Ne:
                            return H = ma(H), U(R, T, O, H, Q);
                    }
                    if (Re(H) || Je(H)) return R = R.get(O) || null, L(T, R, H, Q, null);
                    if (typeof H.then == "function") return U(R, T, O, ps(H), Q);
                    if (H.$$typeof === z) return U(R, T, O, cs(T, H), Q);
                    ms(T, H);
                }
                return null;
            }
            function Y(R, T, O, H) {
                for(var Q = null, me = null, J = T, oe = T = 0, de = null; J !== null && oe < O.length; oe++){
                    J.index > oe ? (de = J, J = null) : de = J.sibling;
                    var ge = j(R, J, O[oe], H);
                    if (ge === null) {
                        J === null && (J = de);
                        break;
                    }
                    e && J && ge.alternate === null && t(R, J), T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge, J = de;
                }
                if (oe === O.length) return a(R, J), pe && hn(R, oe), Q;
                if (J === null) {
                    for(; oe < O.length; oe++)J = q(R, O[oe], H), J !== null && (T = c(J, T, oe), me === null ? Q = J : me.sibling = J, me = J);
                    return pe && hn(R, oe), Q;
                }
                for(J = s(J); oe < O.length; oe++)de = U(J, R, oe, O[oe], H), de !== null && (e && de.alternate !== null && J.delete(de.key === null ? oe : de.key), T = c(de, T, oe), me === null ? Q = de : me.sibling = de, me = de);
                return e && J.forEach(function(ea) {
                    return t(R, ea);
                }), pe && hn(R, oe), Q;
            }
            function ee(R, T, O, H) {
                if (O == null) throw Error(l(151));
                for(var Q = null, me = null, J = T, oe = T = 0, de = null, ge = O.next(); J !== null && !ge.done; oe++, ge = O.next()){
                    J.index > oe ? (de = J, J = null) : de = J.sibling;
                    var ea = j(R, J, ge.value, H);
                    if (ea === null) {
                        J === null && (J = de);
                        break;
                    }
                    e && J && ea.alternate === null && t(R, J), T = c(ea, T, oe), me === null ? Q = ea : me.sibling = ea, me = ea, J = de;
                }
                if (ge.done) return a(R, J), pe && hn(R, oe), Q;
                if (J === null) {
                    for(; !ge.done; oe++, ge = O.next())ge = q(R, ge.value, H), ge !== null && (T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge);
                    return pe && hn(R, oe), Q;
                }
                for(J = s(J); !ge.done; oe++, ge = O.next())ge = U(J, R, oe, ge.value, H), ge !== null && (e && ge.alternate !== null && J.delete(ge.key === null ? oe : ge.key), T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge);
                return e && J.forEach(function(Yv) {
                    return t(R, Yv);
                }), pe && hn(R, oe), Q;
            }
            function xe(R, T, O, H) {
                if (typeof O == "object" && O !== null && O.type === D && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case E:
                            e: {
                                for(var Q = O.key; T !== null;){
                                    if (T.key === Q) {
                                        if (Q = O.type, Q === D) {
                                            if (T.tag === 7) {
                                                a(R, T.sibling), H = o(T, O.props.children), H.return = R, R = H;
                                                break e;
                                            }
                                        } else if (T.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ne && ma(Q) === T.type) {
                                            a(R, T.sibling), H = o(T, O.props), Xi(H, O), H.return = R, R = H;
                                            break e;
                                        }
                                        a(R, T);
                                        break;
                                    } else t(R, T);
                                    T = T.sibling;
                                }
                                O.type === D ? (H = ca(O.props.children, R.mode, H, O.key), H.return = R, R = H) : (H = ls(O.type, O.key, O.props, null, R.mode, H), Xi(H, O), H.return = R, R = H);
                            }
                            return m(R);
                        case N:
                            e: {
                                for(Q = O.key; T !== null;){
                                    if (T.key === Q) if (T.tag === 4 && T.stateNode.containerInfo === O.containerInfo && T.stateNode.implementation === O.implementation) {
                                        a(R, T.sibling), H = o(T, O.children || []), H.return = R, R = H;
                                        break e;
                                    } else {
                                        a(R, T);
                                        break;
                                    }
                                    else t(R, T);
                                    T = T.sibling;
                                }
                                H = ho(O, R.mode, H), H.return = R, R = H;
                            }
                            return m(R);
                        case Ne:
                            return O = ma(O), xe(R, T, O, H);
                    }
                    if (Re(O)) return Y(R, T, O, H);
                    if (Je(O)) {
                        if (Q = Je(O), typeof Q != "function") throw Error(l(150));
                        return O = Q.call(O), ee(R, T, O, H);
                    }
                    if (typeof O.then == "function") return xe(R, T, ps(O), H);
                    if (O.$$typeof === z) return xe(R, T, cs(R, O), H);
                    ms(R, O);
                }
                return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, T !== null && T.tag === 6 ? (a(R, T.sibling), H = o(T, O), H.return = R, R = H) : (a(R, T), H = co(O, R.mode, H), H.return = R, R = H), m(R)) : a(R, T);
            }
            return function(R, T, O, H) {
                try {
                    Yi = 0;
                    var Q = xe(R, T, O, H);
                    return Xa = null, Q;
                } catch (J) {
                    if (J === Ya || J === fs) throw J;
                    var me = Et(29, J, null, R.mode);
                    return me.lanes = H, me.return = R, me;
                }
            };
        }
        var ya = Zh(!0), Fh = Zh(!1), Mn = !1;
        function To(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function Ao(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function Hn(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function Bn(e, t, a) {
            var s = e.updateQueue;
            if (s === null) return null;
            if (s = s.shared, (ye & 2) !== 0) {
                var o = s.pending;
                return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, t = ss(e), Lh(e, null, a), t;
            }
            return rs(e, s, t, a), ss(e);
        }
        function Wi(e, t, a) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, Ic(e, a);
            }
        }
        function xo(e, t) {
            var a = e.updateQueue, s = e.alternate;
            if (s !== null && (s = s.updateQueue, a === s)) {
                var o = null, c = null;
                if (a = a.firstBaseUpdate, a !== null) {
                    do {
                        var m = {
                            lane: a.lane,
                            tag: a.tag,
                            payload: a.payload,
                            callback: null,
                            next: null
                        };
                        c === null ? o = c = m : c = c.next = m, a = a.next;
                    }while (a !== null);
                    c === null ? o = c = t : c = c.next = t;
                } else o = c = t;
                a = {
                    baseState: s.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: c,
                    shared: s.shared,
                    callbacks: s.callbacks
                }, e.updateQueue = a;
                return;
            }
            e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
        }
        var Ro = !1;
        function Ji() {
            if (Ro) {
                var e = Ka;
                if (e !== null) throw e;
            }
        }
        function Qi(e, t, a, s) {
            Ro = !1;
            var o = e.updateQueue;
            Mn = !1;
            var c = o.firstBaseUpdate, m = o.lastBaseUpdate, y = o.shared.pending;
            if (y !== null) {
                o.shared.pending = null;
                var _ = y, C = _.next;
                _.next = null, m === null ? c = C : m.next = C, m = _;
                var L = e.alternate;
                L !== null && (L = L.updateQueue, y = L.lastBaseUpdate, y !== m && (y === null ? L.firstBaseUpdate = C : y.next = C, L.lastBaseUpdate = _));
            }
            if (c !== null) {
                var q = o.baseState;
                m = 0, L = C = _ = null, y = c;
                do {
                    var j = y.lane & -536870913, U = j !== y.lane;
                    if (U ? (fe & j) === j : (s & j) === j) {
                        j !== 0 && j === Va && (Ro = !0), L !== null && (L = L.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var Y = e, ee = y;
                            j = t;
                            var xe = a;
                            switch(ee.tag){
                                case 1:
                                    if (Y = ee.payload, typeof Y == "function") {
                                        q = Y.call(xe, q, j);
                                        break e;
                                    }
                                    q = Y;
                                    break e;
                                case 3:
                                    Y.flags = Y.flags & -65537 | 128;
                                case 0:
                                    if (Y = ee.payload, j = typeof Y == "function" ? Y.call(xe, q, j) : Y, j == null) break e;
                                    q = v({}, q, j);
                                    break e;
                                case 2:
                                    Mn = !0;
                            }
                        }
                        j = y.callback, j !== null && (e.flags |= 64, U && (e.flags |= 8192), U = o.callbacks, U === null ? o.callbacks = [
                            j
                        ] : U.push(j));
                    } else U = {
                        lane: j,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, L === null ? (C = L = U, _ = q) : L = L.next = U, m |= j;
                    if (y = y.next, y === null) {
                        if (y = o.shared.pending, y === null) break;
                        U = y, y = U.next, U.next = null, o.lastBaseUpdate = U, o.shared.pending = null;
                    }
                }while (!0);
                L === null && (_ = q), o.baseState = _, o.firstBaseUpdate = C, o.lastBaseUpdate = L, c === null && (o.shared.lanes = 0), In |= m, e.lanes = m, e.memoizedState = q;
            }
        }
        function ef(e, t) {
            if (typeof e != "function") throw Error(l(191, e));
            e.call(t);
        }
        function tf(e, t) {
            var a = e.callbacks;
            if (a !== null) for(e.callbacks = null, e = 0; e < a.length; e++)ef(a[e], t);
        }
        var Wa = x(null), gs = x(0);
        function nf(e, t) {
            e = Sn, I(gs, e), I(Wa, t), Sn = e | t.baseLanes;
        }
        function Oo() {
            I(gs, Sn), I(Wa, Wa.current);
        }
        function Co() {
            Sn = gs.current, P(Wa), P(gs);
        }
        var Tt = x(null), Pt = null;
        function qn(e) {
            var t = e.alternate;
            I(Ge, Ge.current & 1), I(Tt, e), Pt === null && (t === null || Wa.current !== null || t.memoizedState !== null) && (Pt = e);
        }
        function ko(e) {
            I(Ge, Ge.current), I(Tt, e), Pt === null && (Pt = e);
        }
        function af(e) {
            e.tag === 22 ? (I(Ge, Ge.current), I(Tt, e), Pt === null && (Pt = e)) : Pn();
        }
        function Pn() {
            I(Ge, Ge.current), I(Tt, Tt.current);
        }
        function At(e) {
            P(Tt), Pt === e && (Pt = null), P(Ge);
        }
        var Ge = x(0);
        function ys(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var a = t.memoizedState;
                    if (a !== null && (a = a.dehydrated, a === null || Lu(a) || Mu(a))) return t;
                } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                    if ((t.flags & 128) !== 0) return t;
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }
        var pn = 0, le = null, Te = null, Ke = null, vs = !1, Ja = !1, va = !1, bs = 0, Zi = 0, Qa = null, My = 0;
        function He() {
            throw Error(l(321));
        }
        function jo(e, t) {
            if (t === null) return !1;
            for(var a = 0; a < t.length && a < e.length; a++)if (!St(e[a], t[a])) return !1;
            return !0;
        }
        function No(e, t, a, s, o, c) {
            return pn = c, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Pf : Yo, va = !1, c = a(s, o), va = !1, Ja && (c = sf(t, a, s, o)), rf(e), c;
        }
        function rf(e) {
            M.H = tr;
            var t = Te !== null && Te.next !== null;
            if (pn = 0, Ke = Te = le = null, vs = !1, Zi = 0, Qa = null, t) throw Error(l(300));
            e === null || Ye || (e = e.dependencies, e !== null && us(e) && (Ye = !0));
        }
        function sf(e, t, a, s) {
            le = e;
            var o = 0;
            do {
                if (Ja && (Qa = null), Zi = 0, Ja = !1, 25 <= o) throw Error(l(301));
                if (o += 1, Ke = Te = null, e.updateQueue != null) {
                    var c = e.updateQueue;
                    c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
                }
                M.H = $f, c = t(a, s);
            }while (Ja);
            return c;
        }
        function Hy() {
            var e = M.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Fi(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (le.flags |= 1024), t;
        }
        function Do() {
            var e = bs !== 0;
            return bs = 0, e;
        }
        function Uo(e, t, a) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
        }
        function zo(e) {
            if (vs) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                vs = !1;
            }
            pn = 0, Ke = Te = le = null, Ja = !1, Zi = bs = 0, Qa = null;
        }
        function ct() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
        }
        function Ie() {
            if (Te === null) {
                var e = le.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Te.next;
            var t = Ke === null ? le.memoizedState : Ke.next;
            if (t !== null) Ke = t, Te = e;
            else {
                if (e === null) throw le.alternate === null ? Error(l(467)) : Error(l(310));
                Te = e, e = {
                    memoizedState: Te.memoizedState,
                    baseState: Te.baseState,
                    baseQueue: Te.baseQueue,
                    queue: Te.queue,
                    next: null
                }, Ke === null ? le.memoizedState = Ke = e : Ke = Ke.next = e;
            }
            return Ke;
        }
        function ws() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Fi(e) {
            var t = Zi;
            return Zi += 1, Qa === null && (Qa = []), e = Wh(Qa, e, t), t = le, (Ke === null ? t.memoizedState : Ke.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Pf : Yo), e;
        }
        function _s(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Fi(e);
                if (e.$$typeof === z) return nt(e);
            }
            throw Error(l(438, String(e)));
        }
        function Lo(e) {
            var t = null, a = le.updateQueue;
            if (a !== null && (t = a.memoCache), t == null) {
                var s = le.alternate;
                s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
                    data: s.data.map(function(o) {
                        return o.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), a === null && (a = ws(), le.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for(a = t.data[t.index] = Array(e), s = 0; s < e; s++)a[s] = Dt;
            return t.index++, a;
        }
        function mn(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Ss(e) {
            var t = Ie();
            return Mo(t, Te, e);
        }
        function Mo(e, t, a) {
            var s = e.queue;
            if (s === null) throw Error(l(311));
            s.lastRenderedReducer = a;
            var o = e.baseQueue, c = s.pending;
            if (c !== null) {
                if (o !== null) {
                    var m = o.next;
                    o.next = c.next, c.next = m;
                }
                t.baseQueue = o = c, s.pending = null;
            }
            if (c = e.baseState, o === null) e.memoizedState = c;
            else {
                t = o.next;
                var y = m = null, _ = null, C = t, L = !1;
                do {
                    var q = C.lane & -536870913;
                    if (q !== C.lane ? (fe & q) === q : (pn & q) === q) {
                        var j = C.revertLane;
                        if (j === 0) _ !== null && (_ = _.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }), q === Va && (L = !0);
                        else if ((pn & j) === j) {
                            C = C.next, j === Va && (L = !0);
                            continue;
                        } else q = {
                            lane: 0,
                            revertLane: C.revertLane,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }, _ === null ? (y = _ = q, m = c) : _ = _.next = q, le.lanes |= j, In |= j;
                        q = C.action, va && a(c, q), c = C.hasEagerState ? C.eagerState : a(c, q);
                    } else j = {
                        lane: q,
                        revertLane: C.revertLane,
                        gesture: C.gesture,
                        action: C.action,
                        hasEagerState: C.hasEagerState,
                        eagerState: C.eagerState,
                        next: null
                    }, _ === null ? (y = _ = j, m = c) : _ = _.next = j, le.lanes |= q, In |= q;
                    C = C.next;
                }while (C !== null && C !== t);
                if (_ === null ? m = c : _.next = y, !St(c, e.memoizedState) && (Ye = !0, L && (a = Ka, a !== null))) throw a;
                e.memoizedState = c, e.baseState = m, e.baseQueue = _, s.lastRenderedState = c;
            }
            return o === null && (s.lanes = 0), [
                e.memoizedState,
                s.dispatch
            ];
        }
        function Ho(e) {
            var t = Ie(), a = t.queue;
            if (a === null) throw Error(l(311));
            a.lastRenderedReducer = e;
            var s = a.dispatch, o = a.pending, c = t.memoizedState;
            if (o !== null) {
                a.pending = null;
                var m = o = o.next;
                do c = e(c, m.action), m = m.next;
                while (m !== o);
                St(c, t.memoizedState) || (Ye = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
            }
            return [
                c,
                s
            ];
        }
        function lf(e, t, a) {
            var s = le, o = Ie(), c = pe;
            if (c) {
                if (a === void 0) throw Error(l(407));
                a = a();
            } else a = t();
            var m = !St((Te || o).memoizedState, a);
            if (m && (o.memoizedState = a, Ye = !0), o = o.queue, Po(cf.bind(null, s, o, e), [
                e
            ]), o.getSnapshot !== t || m || Ke !== null && Ke.memoizedState.tag & 1) {
                if (s.flags |= 2048, Za(9, {
                    destroy: void 0
                }, uf.bind(null, s, o, a, t), null), Ce === null) throw Error(l(349));
                c || (pn & 127) !== 0 || of(s, t, a);
            }
            return a;
        }
        function of(e, t, a) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: a
            }, t = le.updateQueue, t === null ? (t = ws(), le.updateQueue = t, t.stores = [
                e
            ]) : (a = t.stores, a === null ? t.stores = [
                e
            ] : a.push(e));
        }
        function uf(e, t, a, s) {
            t.value = a, t.getSnapshot = s, hf(t) && ff(e);
        }
        function cf(e, t, a) {
            return a(function() {
                hf(t) && ff(e);
            });
        }
        function hf(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var a = t();
                return !St(e, a);
            } catch  {
                return !0;
            }
        }
        function ff(e) {
            var t = ua(e, 2);
            t !== null && yt(t, e, 2);
        }
        function Bo(e) {
            var t = ct();
            if (typeof e == "function") {
                var a = e;
                if (e = a(), va) {
                    kn(!0);
                    try {
                        a();
                    } finally{
                        kn(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: mn,
                lastRenderedState: e
            }, t;
        }
        function df(e, t, a, s) {
            return e.baseState = a, Mo(e, Te, typeof s == "function" ? s : mn);
        }
        function By(e, t, a, s, o) {
            if (As(e)) throw Error(l(485));
            if (e = t.action, e !== null) {
                var c = {
                    payload: o,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(m) {
                        c.listeners.push(m);
                    }
                };
                M.T !== null ? a(!0) : c.isTransition = !1, s(c), a = t.pending, a === null ? (c.next = t.pending = c, pf(t, c)) : (c.next = a.next, t.pending = a.next = c);
            }
        }
        function pf(e, t) {
            var a = t.action, s = t.payload, o = e.state;
            if (t.isTransition) {
                var c = M.T, m = {};
                M.T = m;
                try {
                    var y = a(o, s), _ = M.S;
                    _ !== null && _(m, y), mf(e, t, y);
                } catch (C) {
                    qo(e, t, C);
                } finally{
                    c !== null && m.types !== null && (c.types = m.types), M.T = c;
                }
            } else try {
                c = a(o, s), mf(e, t, c);
            } catch (C) {
                qo(e, t, C);
            }
        }
        function mf(e, t, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
                gf(e, t, s);
            }, function(s) {
                return qo(e, t, s);
            }) : gf(e, t, a);
        }
        function gf(e, t, a) {
            t.status = "fulfilled", t.value = a, yf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, pf(e, a)));
        }
        function qo(e, t, a) {
            var s = e.pending;
            if (e.pending = null, s !== null) {
                s = s.next;
                do t.status = "rejected", t.reason = a, yf(t), t = t.next;
                while (t !== s);
            }
            e.action = null;
        }
        function yf(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function vf(e, t) {
            return t;
        }
        function bf(e, t) {
            if (pe) {
                var a = Ce.formState;
                if (a !== null) {
                    e: {
                        var s = le;
                        if (pe) {
                            if (De) {
                                t: {
                                    for(var o = De, c = qt; o.nodeType !== 8;){
                                        if (!c) {
                                            o = null;
                                            break t;
                                        }
                                        if (o = $t(o.nextSibling), o === null) {
                                            o = null;
                                            break t;
                                        }
                                    }
                                    c = o.data, o = c === "F!" || c === "F" ? o : null;
                                }
                                if (o) {
                                    De = $t(o.nextSibling), s = o.data === "F!";
                                    break e;
                                }
                            }
                            zn(s);
                        }
                        s = !1;
                    }
                    s && (t = a[0]);
                }
            }
            return a = ct(), a.memoizedState = a.baseState = t, s = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: vf,
                lastRenderedState: t
            }, a.queue = s, a = Hf.bind(null, le, s), s.dispatch = a, s = Bo(!1), c = Ko.bind(null, le, !1, s.queue), s = ct(), o = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, s.queue = o, a = By.bind(null, le, o, c, a), o.dispatch = a, s.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function wf(e) {
            var t = Ie();
            return _f(t, Te, e);
        }
        function _f(e, t, a) {
            if (t = Mo(e, t, vf)[0], e = Ss(mn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var s = Fi(t);
            } catch (m) {
                throw m === Ya ? fs : m;
            }
            else s = t;
            t = Ie();
            var o = t.queue, c = o.dispatch;
            return a !== t.memoizedState && (le.flags |= 2048, Za(9, {
                destroy: void 0
            }, qy.bind(null, o, a), null)), [
                s,
                c,
                e
            ];
        }
        function qy(e, t) {
            e.action = t;
        }
        function Sf(e) {
            var t = Ie(), a = Te;
            if (a !== null) return _f(t, a, e);
            Ie(), t = t.memoizedState, a = Ie();
            var s = a.queue.dispatch;
            return a.memoizedState = e, [
                t,
                s,
                !1
            ];
        }
        function Za(e, t, a, s) {
            return e = {
                tag: e,
                create: a,
                deps: s,
                inst: t,
                next: null
            }, t = le.updateQueue, t === null && (t = ws(), le.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
        }
        function Ef() {
            return Ie().memoizedState;
        }
        function Es(e, t, a, s) {
            var o = ct();
            le.flags |= e, o.memoizedState = Za(1 | t, {
                destroy: void 0
            }, a, s === void 0 ? null : s);
        }
        function Ts(e, t, a, s) {
            var o = Ie();
            s = s === void 0 ? null : s;
            var c = o.memoizedState.inst;
            Te !== null && s !== null && jo(s, Te.memoizedState.deps) ? o.memoizedState = Za(t, c, a, s) : (le.flags |= e, o.memoizedState = Za(1 | t, c, a, s));
        }
        function Tf(e, t) {
            Es(8390656, 8, e, t);
        }
        function Po(e, t) {
            Ts(2048, 8, e, t);
        }
        function Py(e) {
            le.flags |= 4;
            var t = le.updateQueue;
            if (t === null) t = ws(), le.updateQueue = t, t.events = [
                e
            ];
            else {
                var a = t.events;
                a === null ? t.events = [
                    e
                ] : a.push(e);
            }
        }
        function Af(e) {
            var t = Ie().memoizedState;
            return Py({
                ref: t,
                nextImpl: e
            }), function() {
                if ((ye & 2) !== 0) throw Error(l(440));
                return t.impl.apply(void 0, arguments);
            };
        }
        function xf(e, t) {
            return Ts(4, 2, e, t);
        }
        function Rf(e, t) {
            return Ts(4, 4, e, t);
        }
        function Of(e, t) {
            if (typeof t == "function") {
                e = e();
                var a = t(e);
                return function() {
                    typeof a == "function" ? a() : t(null);
                };
            }
            if (t != null) return e = e(), t.current = e, function() {
                t.current = null;
            };
        }
        function Cf(e, t, a) {
            a = a != null ? a.concat([
                e
            ]) : null, Ts(4, 4, Of.bind(null, t, e), a);
        }
        function $o() {}
        function kf(e, t) {
            var a = Ie();
            t = t === void 0 ? null : t;
            var s = a.memoizedState;
            return t !== null && jo(t, s[1]) ? s[0] : (a.memoizedState = [
                e,
                t
            ], e);
        }
        function jf(e, t) {
            var a = Ie();
            t = t === void 0 ? null : t;
            var s = a.memoizedState;
            if (t !== null && jo(t, s[1])) return s[0];
            if (s = e(), va) {
                kn(!0);
                try {
                    e();
                } finally{
                    kn(!1);
                }
            }
            return a.memoizedState = [
                s,
                t
            ], s;
        }
        function Go(e, t, a) {
            return a === void 0 || (pn & 1073741824) !== 0 && (fe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Nd(), le.lanes |= e, In |= e, a);
        }
        function Nf(e, t, a, s) {
            return St(a, t) ? a : Wa.current !== null ? (e = Go(e, a, s), St(e, t) || (Ye = !0), e) : (pn & 42) === 0 || (pn & 1073741824) !== 0 && (fe & 261930) === 0 ? (Ye = !0, e.memoizedState = a) : (e = Nd(), le.lanes |= e, In |= e, t);
        }
        function Df(e, t, a, s, o) {
            var c = G.p;
            G.p = c !== 0 && 8 > c ? c : 8;
            var m = M.T, y = {};
            M.T = y, Ko(e, !1, t, a);
            try {
                var _ = o(), C = M.S;
                if (C !== null && C(y, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
                    var L = Ly(_, s);
                    er(e, t, L, Ot(e));
                } else er(e, t, s, Ot(e));
            } catch (q) {
                er(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: q
                }, Ot());
            } finally{
                G.p = c, m !== null && y.types !== null && (m.types = y.types), M.T = m;
            }
        }
        function $y() {}
        function Io(e, t, a, s) {
            if (e.tag !== 5) throw Error(l(476));
            var o = Uf(e).queue;
            Df(e, o, t, ae, a === null ? $y : function() {
                return zf(e), a(s);
            });
        }
        function Uf(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: ae,
                baseState: ae,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: mn,
                    lastRenderedState: ae
                },
                next: null
            };
            var a = {};
            return t.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: mn,
                    lastRenderedState: a
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function zf(e) {
            var t = Uf(e);
            t.next === null && (t = e.alternate.memoizedState), er(e, t.next.queue, {}, Ot());
        }
        function Vo() {
            return nt(yr);
        }
        function Lf() {
            return Ie().memoizedState;
        }
        function Mf() {
            return Ie().memoizedState;
        }
        function Gy(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var a = Ot();
                        e = Hn(a);
                        var s = Bn(t, e, a);
                        s !== null && (yt(s, t, a), Wi(s, t, a)), t = {
                            cache: wo()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Iy(e, t, a) {
            var s = Ot();
            a = {
                lane: s,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, As(e) ? Bf(t, a) : (a = oo(e, t, a, s), a !== null && (yt(a, e, s), qf(a, t, s)));
        }
        function Hf(e, t, a) {
            var s = Ot();
            er(e, t, a, s);
        }
        function er(e, t, a, s) {
            var o = {
                lane: s,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (As(e)) Bf(t, o);
            else {
                var c = e.alternate;
                if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                    var m = t.lastRenderedState, y = c(m, a);
                    if (o.hasEagerState = !0, o.eagerState = y, St(y, m)) return rs(e, t, o, 0), Ce === null && is(), !1;
                } catch  {}
                if (a = oo(e, t, o, s), a !== null) return yt(a, e, s), qf(a, t, s), !0;
            }
            return !1;
        }
        function Ko(e, t, a, s) {
            if (s = {
                lane: 2,
                revertLane: Tu(),
                gesture: null,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, As(e)) {
                if (t) throw Error(l(479));
            } else t = oo(e, a, s, 2), t !== null && yt(t, e, 2);
        }
        function As(e) {
            var t = e.alternate;
            return e === le || t !== null && t === le;
        }
        function Bf(e, t) {
            Ja = vs = !0;
            var a = e.pending;
            a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
        }
        function qf(e, t, a) {
            if ((a & 4194048) !== 0) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, Ic(e, a);
            }
        }
        var tr = {
            readContext: nt,
            use: _s,
            useCallback: He,
            useContext: He,
            useEffect: He,
            useImperativeHandle: He,
            useLayoutEffect: He,
            useInsertionEffect: He,
            useMemo: He,
            useReducer: He,
            useRef: He,
            useState: He,
            useDebugValue: He,
            useDeferredValue: He,
            useTransition: He,
            useSyncExternalStore: He,
            useId: He,
            useHostTransitionStatus: He,
            useFormState: He,
            useActionState: He,
            useOptimistic: He,
            useMemoCache: He,
            useCacheRefresh: He
        };
        tr.useEffectEvent = He;
        var Pf = {
            readContext: nt,
            use: _s,
            useCallback: function(e, t) {
                return ct().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: nt,
            useEffect: Tf,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([
                    e
                ]) : null, Es(4194308, 4, Of.bind(null, t, e), a);
            },
            useLayoutEffect: function(e, t) {
                return Es(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Es(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var a = ct();
                t = t === void 0 ? null : t;
                var s = e();
                if (va) {
                    kn(!0);
                    try {
                        e();
                    } finally{
                        kn(!1);
                    }
                }
                return a.memoizedState = [
                    s,
                    t
                ], s;
            },
            useReducer: function(e, t, a) {
                var s = ct();
                if (a !== void 0) {
                    var o = a(t);
                    if (va) {
                        kn(!0);
                        try {
                            a(t);
                        } finally{
                            kn(!1);
                        }
                    }
                } else o = t;
                return s.memoizedState = s.baseState = o, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: o
                }, s.queue = e, e = e.dispatch = Iy.bind(null, le, e), [
                    s.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = ct();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Bo(e);
                var t = e.queue, a = Hf.bind(null, le, t);
                return t.dispatch = a, [
                    e.memoizedState,
                    a
                ];
            },
            useDebugValue: $o,
            useDeferredValue: function(e, t) {
                var a = ct();
                return Go(a, e, t);
            },
            useTransition: function() {
                var e = Bo(!1);
                return e = Df.bind(null, le, e.queue, !0, !1), ct().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, a) {
                var s = le, o = ct();
                if (pe) {
                    if (a === void 0) throw Error(l(407));
                    a = a();
                } else {
                    if (a = t(), Ce === null) throw Error(l(349));
                    (fe & 127) !== 0 || of(s, t, a);
                }
                o.memoizedState = a;
                var c = {
                    value: a,
                    getSnapshot: t
                };
                return o.queue = c, Tf(cf.bind(null, s, c, e), [
                    e
                ]), s.flags |= 2048, Za(9, {
                    destroy: void 0
                }, uf.bind(null, s, c, a, t), null), a;
            },
            useId: function() {
                var e = ct(), t = Ce.identifierPrefix;
                if (pe) {
                    var a = Ft, s = Zt;
                    a = (s & ~(1 << 32 - _t(s) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = bs++, 0 < a && (t += "H" + a.toString(32)), t += "_";
                } else a = My++, t = "_" + t + "r_" + a.toString(32) + "_";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Vo,
            useFormState: bf,
            useActionState: bf,
            useOptimistic: function(e) {
                var t = ct();
                t.memoizedState = t.baseState = e;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = Ko.bind(null, le, !0, a), a.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Lo,
            useCacheRefresh: function() {
                return ct().memoizedState = Gy.bind(null, le);
            },
            useEffectEvent: function(e) {
                var t = ct(), a = {
                    impl: e
                };
                return t.memoizedState = a, function() {
                    if ((ye & 2) !== 0) throw Error(l(440));
                    return a.impl.apply(void 0, arguments);
                };
            }
        }, Yo = {
            readContext: nt,
            use: _s,
            useCallback: kf,
            useContext: nt,
            useEffect: Po,
            useImperativeHandle: Cf,
            useInsertionEffect: xf,
            useLayoutEffect: Rf,
            useMemo: jf,
            useReducer: Ss,
            useRef: Ef,
            useState: function() {
                return Ss(mn);
            },
            useDebugValue: $o,
            useDeferredValue: function(e, t) {
                var a = Ie();
                return Nf(a, Te.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Ss(mn)[0], t = Ie().memoizedState;
                return [
                    typeof e == "boolean" ? e : Fi(e),
                    t
                ];
            },
            useSyncExternalStore: lf,
            useId: Lf,
            useHostTransitionStatus: Vo,
            useFormState: wf,
            useActionState: wf,
            useOptimistic: function(e, t) {
                var a = Ie();
                return df(a, Te, e, t);
            },
            useMemoCache: Lo,
            useCacheRefresh: Mf
        };
        Yo.useEffectEvent = Af;
        var $f = {
            readContext: nt,
            use: _s,
            useCallback: kf,
            useContext: nt,
            useEffect: Po,
            useImperativeHandle: Cf,
            useInsertionEffect: xf,
            useLayoutEffect: Rf,
            useMemo: jf,
            useReducer: Ho,
            useRef: Ef,
            useState: function() {
                return Ho(mn);
            },
            useDebugValue: $o,
            useDeferredValue: function(e, t) {
                var a = Ie();
                return Te === null ? Go(a, e, t) : Nf(a, Te.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Ho(mn)[0], t = Ie().memoizedState;
                return [
                    typeof e == "boolean" ? e : Fi(e),
                    t
                ];
            },
            useSyncExternalStore: lf,
            useId: Lf,
            useHostTransitionStatus: Vo,
            useFormState: Sf,
            useActionState: Sf,
            useOptimistic: function(e, t) {
                var a = Ie();
                return Te !== null ? df(a, Te, e, t) : (a.baseState = e, [
                    e,
                    a.queue.dispatch
                ]);
            },
            useMemoCache: Lo,
            useCacheRefresh: Mf
        };
        $f.useEffectEvent = Af;
        function Xo(e, t, a, s) {
            t = e.memoizedState, a = a(s, t), a = a == null ? t : v({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
        }
        var Wo = {
            enqueueSetState: function(e, t, a) {
                e = e._reactInternals;
                var s = Ot(), o = Hn(s);
                o.payload = t, a != null && (o.callback = a), t = Bn(e, o, s), t !== null && (yt(t, e, s), Wi(t, e, s));
            },
            enqueueReplaceState: function(e, t, a) {
                e = e._reactInternals;
                var s = Ot(), o = Hn(s);
                o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Bn(e, o, s), t !== null && (yt(t, e, s), Wi(t, e, s));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var a = Ot(), s = Hn(a);
                s.tag = 2, t != null && (s.callback = t), t = Bn(e, s, a), t !== null && (yt(t, e, a), Wi(t, e, a));
            }
        };
        function Gf(e, t, a, s, o, c, m) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, c, m) : t.prototype && t.prototype.isPureReactComponent ? !Pi(a, s) || !Pi(o, c) : !0;
        }
        function If(e, t, a, s) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
        }
        function ba(e, t) {
            var a = t;
            if ("ref" in t) {
                a = {};
                for(var s in t)s !== "ref" && (a[s] = t[s]);
            }
            if (e = e.defaultProps) {
                a === t && (a = v({}, a));
                for(var o in e)a[o] === void 0 && (a[o] = e[o]);
            }
            return a;
        }
        function Vf(e) {
            as(e);
        }
        function Kf(e) {
            console.error(e);
        }
        function Yf(e) {
            as(e);
        }
        function xs(e, t) {
            try {
                var a = e.onUncaughtError;
                a(t.value, {
                    componentStack: t.stack
                });
            } catch (s) {
                setTimeout(function() {
                    throw s;
                });
            }
        }
        function Xf(e, t, a) {
            try {
                var s = e.onCaughtError;
                s(a.value, {
                    componentStack: a.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (o) {
                setTimeout(function() {
                    throw o;
                });
            }
        }
        function Jo(e, t, a) {
            return a = Hn(a), a.tag = 3, a.payload = {
                element: null
            }, a.callback = function() {
                xs(e, t);
            }, a;
        }
        function Wf(e) {
            return e = Hn(e), e.tag = 3, e;
        }
        function Jf(e, t, a, s) {
            var o = a.type.getDerivedStateFromError;
            if (typeof o == "function") {
                var c = s.value;
                e.payload = function() {
                    return o(c);
                }, e.callback = function() {
                    Xf(t, a, s);
                };
            }
            var m = a.stateNode;
            m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
                Xf(t, a, s), typeof o != "function" && (Vn === null ? Vn = new Set([
                    this
                ]) : Vn.add(this));
                var y = s.stack;
                this.componentDidCatch(s.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function Vy(e, t, a, s, o) {
            if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                if (t = a.alternate, t !== null && Ia(t, a, o, !0), a = Tt.current, a !== null) {
                    switch(a.tag){
                        case 31:
                        case 13:
                            return Pt === null ? Hs() : a.alternate === null && Be === 0 && (Be = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, s === ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([
                                s
                            ]) : t.add(s), _u(e, s, o)), !1;
                        case 22:
                            return a.flags |= 65536, s === ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    s
                                ])
                            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([
                                s
                            ]) : a.add(s)), _u(e, s, o)), !1;
                    }
                    throw Error(l(435, a.tag));
                }
                return _u(e, s, o), Hs(), !1;
            }
            if (pe) return t = Tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, s !== mo && (e = Error(l(422), {
                cause: s
            }), Ii(Mt(e, a)))) : (s !== mo && (t = Error(l(423), {
                cause: s
            }), Ii(Mt(t, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, s = Mt(s, a), o = Jo(e.stateNode, s, o), xo(e, o), Be !== 4 && (Be = 2)), !1;
            var c = Error(l(520), {
                cause: s
            });
            if (c = Mt(c, a), ur === null ? ur = [
                c
            ] : ur.push(c), Be !== 4 && (Be = 2), t === null) return !0;
            s = Mt(s, a), a = t;
            do {
                switch(a.tag){
                    case 3:
                        return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Jo(a.stateNode, s, e), xo(a, e), !1;
                    case 1:
                        if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Vn === null || !Vn.has(c)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = Wf(o), Jf(o, e, a, s), xo(a, o), !1;
                }
                a = a.return;
            }while (a !== null);
            return !1;
        }
        var Qo = Error(l(461)), Ye = !1;
        function at(e, t, a, s) {
            t.child = e === null ? Fh(t, null, a, s) : ya(t, e.child, a, s);
        }
        function Qf(e, t, a, s, o) {
            a = a.render;
            var c = t.ref;
            if ("ref" in s) {
                var m = {};
                for(var y in s)y !== "ref" && (m[y] = s[y]);
            } else m = s;
            return da(t), s = No(e, t, a, m, c, o), y = Do(), e !== null && !Ye ? (Uo(e, t, o), gn(e, t, o)) : (pe && y && fo(t), t.flags |= 1, at(e, t, s, o), t.child);
        }
        function Zf(e, t, a, s, o) {
            if (e === null) {
                var c = a.type;
                return typeof c == "function" && !uo(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Ff(e, t, c, s, o)) : (e = ls(a.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (c = e.child, !ru(e, o)) {
                var m = c.memoizedProps;
                if (a = a.compare, a = a !== null ? a : Pi, a(m, s) && e.ref === t.ref) return gn(e, t, o);
            }
            return t.flags |= 1, e = cn(c, s), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Ff(e, t, a, s, o) {
            if (e !== null) {
                var c = e.memoizedProps;
                if (Pi(c, s) && e.ref === t.ref) if (Ye = !1, t.pendingProps = s = c, ru(e, o)) (e.flags & 131072) !== 0 && (Ye = !0);
                else return t.lanes = e.lanes, gn(e, t, o);
            }
            return Zo(e, t, a, s, o);
        }
        function ed(e, t, a, s) {
            var o = s.children, c = e !== null ? e.memoizedState : null;
            if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), s.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (c = c !== null ? c.baseLanes | a : a, e !== null) {
                        for(s = t.child = e.child, o = 0; s !== null;)o = o | s.lanes | s.childLanes, s = s.sibling;
                        s = o & ~c;
                    } else s = 0, t.child = null;
                    return td(e, t, c, a, s);
                }
                if ((a & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && hs(t, c !== null ? c.cachePool : null), c !== null ? nf(t, c) : Oo(), af(t);
                else return s = t.lanes = 536870912, td(e, t, c !== null ? c.baseLanes | a : a, a, s);
            } else c !== null ? (hs(t, c.cachePool), nf(t, c), Pn(), t.memoizedState = null) : (e !== null && hs(t, null), Oo(), Pn());
            return at(e, t, o, a), t.child;
        }
        function nr(e, t) {
            return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), t.sibling;
        }
        function td(e, t, a, s, o) {
            var c = So();
            return c = c === null ? null : {
                parent: Ve._currentValue,
                pool: c
            }, t.memoizedState = {
                baseLanes: a,
                cachePool: c
            }, e !== null && hs(t, null), Oo(), af(t), e !== null && Ia(e, t, s, !0), t.childLanes = o, null;
        }
        function Rs(e, t) {
            return t = Cs({
                mode: t.mode,
                children: t.children
            }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function nd(e, t, a) {
            return ya(t, e.child, null, a), e = Rs(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
        }
        function Ky(e, t, a) {
            var s = t.pendingProps, o = (t.flags & 128) !== 0;
            if (t.flags &= -129, e === null) {
                if (pe) {
                    if (s.mode === "hidden") return e = Rs(t, s), t.lanes = 536870912, nr(null, e);
                    if (ko(t), (e = De) ? (e = pp(e, qt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Dn !== null ? {
                            id: Zt,
                            overflow: Ft
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Hh(e), a.return = t, t.child = a, tt = t, De = null)) : e = null, e === null) throw zn(t);
                    return t.lanes = 536870912, null;
                }
                return Rs(t, s);
            }
            var c = e.memoizedState;
            if (c !== null) {
                var m = c.dehydrated;
                if (ko(t), o) if (t.flags & 256) t.flags &= -257, t = nd(e, t, a);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
                else throw Error(l(558));
                else if (Ye || Ia(e, t, a, !1), o = (a & e.childLanes) !== 0, Ye || o) {
                    if (s = Ce, s !== null && (m = Vc(s, a), m !== 0 && m !== c.retryLane)) throw c.retryLane = m, ua(e, m), yt(s, e, m), Qo;
                    Hs(), t = nd(e, t, a);
                } else e = c.treeContext, De = $t(m.nextSibling), tt = t, pe = !0, Un = null, qt = !1, e !== null && Ph(t, e), t = Rs(t, s), t.flags |= 4096;
                return t;
            }
            return e = cn(e.child, {
                mode: s.mode,
                children: s.children
            }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Os(e, t) {
            var a = t.ref;
            if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof a != "function" && typeof a != "object") throw Error(l(284));
                (e === null || e.ref !== a) && (t.flags |= 4194816);
            }
        }
        function Zo(e, t, a, s, o) {
            return da(t), a = No(e, t, a, s, void 0, o), s = Do(), e !== null && !Ye ? (Uo(e, t, o), gn(e, t, o)) : (pe && s && fo(t), t.flags |= 1, at(e, t, a, o), t.child);
        }
        function ad(e, t, a, s, o, c) {
            return da(t), t.updateQueue = null, a = sf(t, s, a, o), rf(e), s = Do(), e !== null && !Ye ? (Uo(e, t, c), gn(e, t, c)) : (pe && s && fo(t), t.flags |= 1, at(e, t, a, c), t.child);
        }
        function id(e, t, a, s, o) {
            if (da(t), t.stateNode === null) {
                var c = qa, m = a.contextType;
                typeof m == "object" && m !== null && (c = nt(m)), c = new a(s, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Wo, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = s, c.state = t.memoizedState, c.refs = {}, To(t), m = a.contextType, c.context = typeof m == "object" && m !== null ? nt(m) : qa, c.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (Xo(t, a, m, s), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), m !== c.state && Wo.enqueueReplaceState(c, c.state, null), Qi(t, s, c, o), Ji(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
            } else if (e === null) {
                c = t.stateNode;
                var y = t.memoizedProps, _ = ba(a, y);
                c.props = _;
                var C = c.context, L = a.contextType;
                m = qa, typeof L == "object" && L !== null && (m = nt(L));
                var q = a.getDerivedStateFromProps;
                L = typeof q == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, L || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || C !== m) && If(t, c, s, m), Mn = !1;
                var j = t.memoizedState;
                c.state = j, Qi(t, s, c, o), Ji(), C = t.memoizedState, y || j !== C || Mn ? (typeof q == "function" && (Xo(t, a, q, s), C = t.memoizedState), (_ = Mn || Gf(t, a, _, s, j, C, m)) ? (L || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), c.props = s, c.state = C, c.context = m, s = _) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
            } else {
                c = t.stateNode, Ao(e, t), m = t.memoizedProps, L = ba(a, m), c.props = L, q = t.pendingProps, j = c.context, C = a.contextType, _ = qa, typeof C == "object" && C !== null && (_ = nt(C)), y = a.getDerivedStateFromProps, (C = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== q || j !== _) && If(t, c, s, _), Mn = !1, j = t.memoizedState, c.state = j, Qi(t, s, c, o), Ji();
                var U = t.memoizedState;
                m !== q || j !== U || Mn || e !== null && e.dependencies !== null && us(e.dependencies) ? (typeof y == "function" && (Xo(t, a, y, s), U = t.memoizedState), (L = Mn || Gf(t, a, L, s, j, U, _) || e !== null && e.dependencies !== null && us(e.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, U, _), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, U, _)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = U), c.props = s, c.state = U, c.context = _, s = L) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), s = !1);
            }
            return c = s, Os(e, t), s = (t.flags & 128) !== 0, c || s ? (c = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && s ? (t.child = ya(t, e.child, null, o), t.child = ya(t, null, a, o)) : at(e, t, a, o), t.memoizedState = c.state, e = t.child) : e = gn(e, t, o), e;
        }
        function rd(e, t, a, s) {
            return ha(), t.flags |= 256, at(e, t, a, s), t.child;
        }
        var Fo = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function eu(e) {
            return {
                baseLanes: e,
                cachePool: Yh()
            };
        }
        function tu(e, t, a) {
            return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rt), e;
        }
        function sd(e, t, a) {
            var s = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, m;
            if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), m && (o = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (pe) {
                    if (o ? qn(t) : Pn(), (e = De) ? (e = pp(e, qt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Dn !== null ? {
                            id: Zt,
                            overflow: Ft
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Hh(e), a.return = t, t.child = a, tt = t, De = null)) : e = null, e === null) throw zn(t);
                    return Mu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
                }
                var y = s.children;
                return s = s.fallback, o ? (Pn(), o = t.mode, y = Cs({
                    mode: "hidden",
                    children: y
                }, o), s = ca(s, o, a, null), y.return = t, s.return = t, y.sibling = s, t.child = y, s = t.child, s.memoizedState = eu(a), s.childLanes = tu(e, m, a), t.memoizedState = Fo, nr(null, s)) : (qn(t), nu(t, y));
            }
            var _ = e.memoizedState;
            if (_ !== null && (y = _.dehydrated, y !== null)) {
                if (c) t.flags & 256 ? (qn(t), t.flags &= -257, t = au(e, t, a)) : t.memoizedState !== null ? (Pn(), t.child = e.child, t.flags |= 128, t = null) : (Pn(), y = s.fallback, o = t.mode, s = Cs({
                    mode: "visible",
                    children: s.children
                }, o), y = ca(y, o, a, null), y.flags |= 2, s.return = t, y.return = t, s.sibling = y, t.child = s, ya(t, e.child, null, a), s = t.child, s.memoizedState = eu(a), s.childLanes = tu(e, m, a), t.memoizedState = Fo, t = nr(null, s));
                else if (qn(t), Mu(y)) {
                    if (m = y.nextSibling && y.nextSibling.dataset, m) var C = m.dgst;
                    m = C, s = Error(l(419)), s.stack = "", s.digest = m, Ii({
                        value: s,
                        source: null,
                        stack: null
                    }), t = au(e, t, a);
                } else if (Ye || Ia(e, t, a, !1), m = (a & e.childLanes) !== 0, Ye || m) {
                    if (m = Ce, m !== null && (s = Vc(m, a), s !== 0 && s !== _.retryLane)) throw _.retryLane = s, ua(e, s), yt(m, e, s), Qo;
                    Lu(y) || Hs(), t = au(e, t, a);
                } else Lu(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, De = $t(y.nextSibling), tt = t, pe = !0, Un = null, qt = !1, e !== null && Ph(t, e), t = nu(t, s.children), t.flags |= 4096);
                return t;
            }
            return o ? (Pn(), y = s.fallback, o = t.mode, _ = e.child, C = _.sibling, s = cn(_, {
                mode: "hidden",
                children: s.children
            }), s.subtreeFlags = _.subtreeFlags & 65011712, C !== null ? y = cn(C, y) : (y = ca(y, o, a, null), y.flags |= 2), y.return = t, s.return = t, s.sibling = y, t.child = s, nr(null, s), s = t.child, y = e.child.memoizedState, y === null ? y = eu(a) : (o = y.cachePool, o !== null ? (_ = Ve._currentValue, o = o.parent !== _ ? {
                parent: _,
                pool: _
            } : o) : o = Yh(), y = {
                baseLanes: y.baseLanes | a,
                cachePool: o
            }), s.memoizedState = y, s.childLanes = tu(e, m, a), t.memoizedState = Fo, nr(e.child, s)) : (qn(t), a = e.child, e = a.sibling, a = cn(a, {
                mode: "visible",
                children: s.children
            }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [
                e
            ], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
        }
        function nu(e, t) {
            return t = Cs({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Cs(e, t) {
            return e = Et(22, e, null, t), e.lanes = 0, e;
        }
        function au(e, t, a) {
            return ya(t, e.child, null, a), e = nu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ld(e, t, a) {
            e.lanes |= t;
            var s = e.alternate;
            s !== null && (s.lanes |= t), vo(e.return, t, a);
        }
        function iu(e, t, a, s, o, c) {
            var m = e.memoizedState;
            m === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: s,
                tail: a,
                tailMode: o,
                treeForkCount: c
            } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = a, m.tailMode = o, m.treeForkCount = c);
        }
        function od(e, t, a) {
            var s = t.pendingProps, o = s.revealOrder, c = s.tail;
            s = s.children;
            var m = Ge.current, y = (m & 2) !== 0;
            if (y ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, I(Ge, m), at(e, t, s, a), s = pe ? Gi : 0, !y && e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && ld(e, a, t);
                else if (e.tag === 19) ld(e, a, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            switch(o){
                case "forwards":
                    for(a = t.child, o = null; a !== null;)e = a.alternate, e !== null && ys(e) === null && (o = a), a = a.sibling;
                    a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), iu(t, !1, o, a, c, s);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for(a = null, o = t.child, t.child = null; o !== null;){
                        if (e = o.alternate, e !== null && ys(e) === null) {
                            t.child = o;
                            break;
                        }
                        e = o.sibling, o.sibling = a, a = o, o = e;
                    }
                    iu(t, !0, a, null, c, s);
                    break;
                case "together":
                    iu(t, !1, null, null, void 0, s);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function gn(e, t, a) {
            if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
                if (Ia(e, t, a, !1), (a & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(l(153));
            if (t.child !== null) {
                for(e = t.child, a = cn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;)e = e.sibling, a = a.sibling = cn(e, e.pendingProps), a.return = t;
                a.sibling = null;
            }
            return t.child;
        }
        function ru(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && us(e)));
        }
        function Yy(e, t, a) {
            switch(t.tag){
                case 3:
                    ut(t, t.stateNode.containerInfo), Ln(t, Ve, e.memoizedState.cache), ha();
                    break;
                case 27:
                case 5:
                    Oi(t);
                    break;
                case 4:
                    ut(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    Ln(t, t.type, t.memoizedProps.value);
                    break;
                case 31:
                    if (t.memoizedState !== null) return t.flags |= 128, ko(t), null;
                    break;
                case 13:
                    var s = t.memoizedState;
                    if (s !== null) return s.dehydrated !== null ? (qn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? sd(e, t, a) : (qn(t), e = gn(e, t, a), e !== null ? e.sibling : null);
                    qn(t);
                    break;
                case 19:
                    var o = (e.flags & 128) !== 0;
                    if (s = (a & t.childLanes) !== 0, s || (Ia(e, t, a, !1), s = (a & t.childLanes) !== 0), o) {
                        if (s) return od(e, t, a);
                        t.flags |= 128;
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), I(Ge, Ge.current), s) break;
                    return null;
                case 22:
                    return t.lanes = 0, ed(e, t, a, t.pendingProps);
                case 24:
                    Ln(t, Ve, e.memoizedState.cache);
            }
            return gn(e, t, a);
        }
        function ud(e, t, a) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ye = !0;
            else {
                if (!ru(e, a) && (t.flags & 128) === 0) return Ye = !1, Yy(e, t, a);
                Ye = (e.flags & 131072) !== 0;
            }
            else Ye = !1, pe && (t.flags & 1048576) !== 0 && qh(t, Gi, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        var s = t.pendingProps;
                        if (e = ma(t.elementType), t.type = e, typeof e == "function") uo(e) ? (s = ba(e, s), t.tag = 1, t = id(null, t, e, s, a)) : (t.tag = 0, t = Zo(null, t, e, s, a));
                        else {
                            if (e != null) {
                                var o = e.$$typeof;
                                if (o === V) {
                                    t.tag = 11, t = Qf(null, t, e, s, a);
                                    break e;
                                } else if (o === K) {
                                    t.tag = 14, t = Zf(null, t, e, s, a);
                                    break e;
                                }
                            }
                            throw t = be(e) || e, Error(l(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Zo(e, t, t.type, t.pendingProps, a);
                case 1:
                    return s = t.type, o = ba(s, t.pendingProps), id(e, t, s, o, a);
                case 3:
                    e: {
                        if (ut(t, t.stateNode.containerInfo), e === null) throw Error(l(387));
                        s = t.pendingProps;
                        var c = t.memoizedState;
                        o = c.element, Ao(e, t), Qi(t, s, null, a);
                        var m = t.memoizedState;
                        if (s = m.cache, Ln(t, Ve, s), s !== c.cache && bo(t, [
                            Ve
                        ], a, !0), Ji(), s = m.element, c.isDehydrated) if (c = {
                            element: s,
                            isDehydrated: !1,
                            cache: m.cache
                        }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = rd(e, t, s, a);
                            break e;
                        } else if (s !== o) {
                            o = Mt(Error(l(424)), t), Ii(o), t = rd(e, t, s, a);
                            break e;
                        } else for(e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, De = $t(e.firstChild), tt = t, pe = !0, Un = null, qt = !0, a = Fh(t, null, s, a), t.child = a; a;)a.flags = a.flags & -3 | 4096, a = a.sibling;
                        else {
                            if (ha(), s === o) {
                                t = gn(e, t, a);
                                break e;
                            }
                            at(e, t, s, a);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Os(e, t), e === null ? (a = wp(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : pe || (a = t.type, e = t.pendingProps, s = Vs(ue.current).createElement(a), s[et] = t, s[ht] = e, it(s, a, e), Ze(s), t.stateNode = s) : t.memoizedState = wp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Oi(t), e === null && pe && (s = t.stateNode = yp(t.type, t.pendingProps, ue.current), tt = t, qt = !0, o = De, Wn(t.type) ? (Hu = o, De = $t(s.firstChild)) : De = o), at(e, t, t.pendingProps.children, a), Os(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && pe && ((o = s = De) && (s = Ev(s, t.type, t.pendingProps, qt), s !== null ? (t.stateNode = s, tt = t, De = $t(s.firstChild), qt = !1, o = !0) : o = !1), o || zn(t)), Oi(t), o = t.type, c = t.pendingProps, m = e !== null ? e.memoizedProps : null, s = c.children, Du(o, c) ? s = null : m !== null && Du(o, m) && (t.flags |= 32), t.memoizedState !== null && (o = No(e, t, Hy, null, null, a), yr._currentValue = o), Os(e, t), at(e, t, s, a), t.child;
                case 6:
                    return e === null && pe && ((e = a = De) && (a = Tv(a, t.pendingProps, qt), a !== null ? (t.stateNode = a, tt = t, De = null, e = !0) : e = !1), e || zn(t)), null;
                case 13:
                    return sd(e, t, a);
                case 4:
                    return ut(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = ya(t, null, s, a) : at(e, t, s, a), t.child;
                case 11:
                    return Qf(e, t, t.type, t.pendingProps, a);
                case 7:
                    return at(e, t, t.pendingProps, a), t.child;
                case 8:
                    return at(e, t, t.pendingProps.children, a), t.child;
                case 12:
                    return at(e, t, t.pendingProps.children, a), t.child;
                case 10:
                    return s = t.pendingProps, Ln(t, t.type, s.value), at(e, t, s.children, a), t.child;
                case 9:
                    return o = t.type._context, s = t.pendingProps.children, da(t), o = nt(o), s = s(o), t.flags |= 1, at(e, t, s, a), t.child;
                case 14:
                    return Zf(e, t, t.type, t.pendingProps, a);
                case 15:
                    return Ff(e, t, t.type, t.pendingProps, a);
                case 19:
                    return od(e, t, a);
                case 31:
                    return Ky(e, t, a);
                case 22:
                    return ed(e, t, a, t.pendingProps);
                case 24:
                    return da(t), s = nt(Ve), e === null ? (o = So(), o === null && (o = Ce, c = wo(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), t.memoizedState = {
                        parent: s,
                        cache: o
                    }, To(t), Ln(t, Ve, o)) : ((e.lanes & a) !== 0 && (Ao(e, t), Qi(t, null, null, a), Ji()), o = e.memoizedState, c = t.memoizedState, o.parent !== s ? (o = {
                        parent: s,
                        cache: s
                    }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ln(t, Ve, s)) : (s = c.cache, Ln(t, Ve, s), s !== o.cache && bo(t, [
                        Ve
                    ], a, !0))), at(e, t, t.pendingProps.children, a), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(l(156, t.tag));
        }
        function yn(e) {
            e.flags |= 4;
        }
        function su(e, t, a, s, o) {
            if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
                if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
                else if (Ld()) e.flags |= 8192;
                else throw ga = ds, Eo;
            } else e.flags &= -16777217;
        }
        function cd(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !Ap(t)) if (Ld()) e.flags |= 8192;
            else throw ga = ds, Eo;
        }
        function ks(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? $c() : 536870912, e.lanes |= t, ni |= t);
        }
        function ar(e, t) {
            if (!pe) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var a = null; t !== null;)t.alternate !== null && (a = t), t = t.sibling;
                    a === null ? e.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = e.tail;
                    for(var s = null; a !== null;)a.alternate !== null && (s = a), a = a.sibling;
                    s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
            }
        }
        function Ue(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
            if (t) for(var o = e.child; o !== null;)a |= o.lanes | o.childLanes, s |= o.subtreeFlags & 65011712, s |= o.flags & 65011712, o.return = e, o = o.sibling;
            else for(o = e.child; o !== null;)a |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= s, e.childLanes = a, t;
        }
        function Xy(e, t, a) {
            var s = t.pendingProps;
            switch(po(t), t.tag){
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Ue(t), null;
                case 1:
                    return Ue(t), null;
                case 3:
                    return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), dn(Ve), $e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ga(t) ? yn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, go())), Ue(t), null;
                case 26:
                    var o = t.type, c = t.memoizedState;
                    return e === null ? (yn(t), c !== null ? (Ue(t), cd(t, c)) : (Ue(t), su(t, o, null, s, a))) : c ? c !== e.memoizedState ? (yn(t), Ue(t), cd(t, c)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== s && yn(t), Ue(t), su(t, o, e, s, a)), null;
                case 27:
                    if (Pr(t), a = ue.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && yn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ue(t), null;
                        }
                        e = W.current, Ga(t) ? $h(t) : (e = yp(o, s, a), t.stateNode = e, yn(t));
                    }
                    return Ue(t), null;
                case 5:
                    if (Pr(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && yn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ue(t), null;
                        }
                        if (c = W.current, Ga(t)) $h(t);
                        else {
                            var m = Vs(ue.current);
                            switch(c){
                                case 1:
                                    c = m.createElementNS("http://www.w3.org/2000/svg", o);
                                    break;
                                case 2:
                                    c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                    break;
                                default:
                                    switch(o){
                                        case "svg":
                                            c = m.createElementNS("http://www.w3.org/2000/svg", o);
                                            break;
                                        case "math":
                                            c = m.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                            break;
                                        case "script":
                                            c = m.createElement("div"), c.innerHTML = "<script><\/script>", c = c.removeChild(c.firstChild);
                                            break;
                                        case "select":
                                            c = typeof s.is == "string" ? m.createElement("select", {
                                                is: s.is
                                            }) : m.createElement("select"), s.multiple ? c.multiple = !0 : s.size && (c.size = s.size);
                                            break;
                                        default:
                                            c = typeof s.is == "string" ? m.createElement(o, {
                                                is: s.is
                                            }) : m.createElement(o);
                                    }
                            }
                            c[et] = t, c[ht] = s;
                            e: for(m = t.child; m !== null;){
                                if (m.tag === 5 || m.tag === 6) c.appendChild(m.stateNode);
                                else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                                    m.child.return = m, m = m.child;
                                    continue;
                                }
                                if (m === t) break e;
                                for(; m.sibling === null;){
                                    if (m.return === null || m.return === t) break e;
                                    m = m.return;
                                }
                                m.sibling.return = m.return, m = m.sibling;
                            }
                            t.stateNode = c;
                            e: switch(it(c, o, s), o){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s = !!s.autoFocus;
                                    break e;
                                case "img":
                                    s = !0;
                                    break e;
                                default:
                                    s = !1;
                            }
                            s && yn(t);
                        }
                    }
                    return Ue(t), su(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== s && yn(t);
                    else {
                        if (typeof s != "string" && t.stateNode === null) throw Error(l(166));
                        if (e = ue.current, Ga(t)) {
                            if (e = t.stateNode, a = t.memoizedProps, s = null, o = tt, o !== null) switch(o.tag){
                                case 27:
                                case 5:
                                    s = o.memoizedProps;
                            }
                            e[et] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || sp(e.nodeValue, a)), e || zn(t, !0);
                        } else e = Vs(e).createTextNode(s), e[et] = t, t.stateNode = e;
                    }
                    return Ue(t), null;
                case 31:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null) {
                        if (s = Ga(t), a !== null) {
                            if (e === null) {
                                if (!s) throw Error(l(318));
                                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
                                e[et] = t;
                            } else ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ue(t), e = !1;
                        } else a = go(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                        if (!e) return t.flags & 256 ? (At(t), t) : (At(t), null);
                        if ((t.flags & 128) !== 0) throw Error(l(558));
                    }
                    return Ue(t), null;
                case 13:
                    if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (o = Ga(t), s !== null && s.dehydrated !== null) {
                            if (e === null) {
                                if (!o) throw Error(l(318));
                                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
                                o[et] = t;
                            } else ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ue(t), o = !1;
                        } else o = go(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                        if (!o) return t.flags & 256 ? (At(t), t) : (At(t), null);
                    }
                    return At(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = s !== null, e = e !== null && e.memoizedState !== null, a && (s = t.child, o = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (o = s.alternate.memoizedState.cachePool.pool), c = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (c = s.memoizedState.cachePool.pool), c !== o && (s.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ks(t, t.updateQueue), Ue(t), null);
                case 4:
                    return $e(), e === null && Ou(t.stateNode.containerInfo), Ue(t), null;
                case 10:
                    return dn(t.type), Ue(t), null;
                case 19:
                    if (P(Ge), s = t.memoizedState, s === null) return Ue(t), null;
                    if (o = (t.flags & 128) !== 0, c = s.rendering, c === null) if (o) ar(s, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (c = ys(e), c !== null) {
                                for(t.flags |= 128, ar(s, !1), e = c.updateQueue, t.updateQueue = e, ks(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)Mh(a, e), a = a.sibling;
                                return I(Ge, Ge.current & 1 | 2), pe && hn(t, s.treeForkCount), t.child;
                            }
                            e = e.sibling;
                        }
                        s.tail !== null && bt() > zs && (t.flags |= 128, o = !0, ar(s, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!o) if (e = ys(c), e !== null) {
                            if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ks(t, e), ar(s, !0), s.tail === null && s.tailMode === "hidden" && !c.alternate && !pe) return Ue(t), null;
                        } else 2 * bt() - s.renderingStartTime > zs && a !== 536870912 && (t.flags |= 128, o = !0, ar(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (c.sibling = t.child, t.child = c) : (e = s.last, e !== null ? e.sibling = c : t.child = c, s.last = c);
                    }
                    return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = bt(), e.sibling = null, a = Ge.current, I(Ge, o ? a & 1 | 2 : a & 1), pe && hn(t, s.treeForkCount), e) : (Ue(t), null);
                case 22:
                case 23:
                    return At(t), Co(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), a = t.updateQueue, a !== null && ks(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && P(pa), null;
                case 24:
                    return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dn(Ve), Ue(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(l(156, t.tag));
        }
        function Wy(e, t) {
            switch(po(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return dn(Ve), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return Pr(t), null;
                case 31:
                    if (t.memoizedState !== null) {
                        if (At(t), t.alternate === null) throw Error(l(340));
                        ha();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 13:
                    if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(l(340));
                        ha();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return P(Ge), null;
                case 4:
                    return $e(), null;
                case 10:
                    return dn(t.type), null;
                case 22:
                case 23:
                    return At(t), Co(), e !== null && P(pa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return dn(Ve), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function hd(e, t) {
            switch(po(t), t.tag){
                case 3:
                    dn(Ve), $e();
                    break;
                case 26:
                case 27:
                case 5:
                    Pr(t);
                    break;
                case 4:
                    $e();
                    break;
                case 31:
                    t.memoizedState !== null && At(t);
                    break;
                case 13:
                    At(t);
                    break;
                case 19:
                    P(Ge);
                    break;
                case 10:
                    dn(t.type);
                    break;
                case 22:
                case 23:
                    At(t), Co(), e !== null && P(pa);
                    break;
                case 24:
                    dn(Ve);
            }
        }
        function ir(e, t) {
            try {
                var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
                if (s !== null) {
                    var o = s.next;
                    a = o;
                    do {
                        if ((a.tag & e) === e) {
                            s = void 0;
                            var c = a.create, m = a.inst;
                            s = c(), m.destroy = s;
                        }
                        a = a.next;
                    }while (a !== o);
                }
            } catch (y) {
                _e(t, t.return, y);
            }
        }
        function $n(e, t, a) {
            try {
                var s = t.updateQueue, o = s !== null ? s.lastEffect : null;
                if (o !== null) {
                    var c = o.next;
                    s = c;
                    do {
                        if ((s.tag & e) === e) {
                            var m = s.inst, y = m.destroy;
                            if (y !== void 0) {
                                m.destroy = void 0, o = t;
                                var _ = a, C = y;
                                try {
                                    C();
                                } catch (L) {
                                    _e(o, _, L);
                                }
                            }
                        }
                        s = s.next;
                    }while (s !== c);
                }
            } catch (L) {
                _e(t, t.return, L);
            }
        }
        function fd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var a = e.stateNode;
                try {
                    tf(t, a);
                } catch (s) {
                    _e(e, e.return, s);
                }
            }
        }
        function dd(e, t, a) {
            a.props = ba(e.type, e.memoizedProps), a.state = e.memoizedState;
            try {
                a.componentWillUnmount();
            } catch (s) {
                _e(e, t, s);
            }
        }
        function rr(e, t) {
            try {
                var a = e.ref;
                if (a !== null) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var s = e.stateNode;
                            break;
                        case 30:
                            s = e.stateNode;
                            break;
                        default:
                            s = e.stateNode;
                    }
                    typeof a == "function" ? e.refCleanup = a(s) : a.current = s;
                }
            } catch (o) {
                _e(e, t, o);
            }
        }
        function en(e, t) {
            var a = e.ref, s = e.refCleanup;
            if (a !== null) if (typeof s == "function") try {
                s();
            } catch (o) {
                _e(e, t, o);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof a == "function") try {
                a(null);
            } catch (o) {
                _e(e, t, o);
            }
            else a.current = null;
        }
        function pd(e) {
            var t = e.type, a = e.memoizedProps, s = e.stateNode;
            try {
                e: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a.autoFocus && s.focus();
                        break e;
                    case "img":
                        a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet);
                }
            } catch (o) {
                _e(e, e.return, o);
            }
        }
        function lu(e, t, a) {
            try {
                var s = e.stateNode;
                yv(s, e.type, a, t), s[ht] = t;
            } catch (o) {
                _e(e, e.return, o);
            }
        }
        function md(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Wn(e.type) || e.tag === 4;
        }
        function ou(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || md(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Wn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function uu(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = on));
            else if (s !== 4 && (s === 27 && Wn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for(uu(e, t, a), e = e.sibling; e !== null;)uu(e, t, a), e = e.sibling;
        }
        function js(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
            else if (s !== 4 && (s === 27 && Wn(e.type) && (a = e.stateNode), e = e.child, e !== null)) for(js(e, t, a), e = e.sibling; e !== null;)js(e, t, a), e = e.sibling;
        }
        function gd(e) {
            var t = e.stateNode, a = e.memoizedProps;
            try {
                for(var s = e.type, o = t.attributes; o.length;)t.removeAttributeNode(o[0]);
                it(t, s, a), t[et] = e, t[ht] = a;
            } catch (c) {
                _e(e, e.return, c);
            }
        }
        var vn = !1, Xe = !1, cu = !1, yd = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
        function Jy(e, t) {
            if (e = e.containerInfo, ju = Zs, e = Oh(e), no(e)) {
                if ("selectionStart" in e) var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var o = s.anchorOffset, c = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType, c.nodeType;
                        } catch  {
                            a = null;
                            break e;
                        }
                        var m = 0, y = -1, _ = -1, C = 0, L = 0, q = e, j = null;
                        t: for(;;){
                            for(var U; q !== a || o !== 0 && q.nodeType !== 3 || (y = m + o), q !== c || s !== 0 && q.nodeType !== 3 || (_ = m + s), q.nodeType === 3 && (m += q.nodeValue.length), (U = q.firstChild) !== null;)j = q, q = U;
                            for(;;){
                                if (q === e) break t;
                                if (j === a && ++C === o && (y = m), j === c && ++L === s && (_ = m), (U = q.nextSibling) !== null) break;
                                q = j, j = q.parentNode;
                            }
                            q = U;
                        }
                        a = y === -1 || _ === -1 ? null : {
                            start: y,
                            end: _
                        };
                    } else a = null;
                }
                a = a || {
                    start: 0,
                    end: 0
                };
            } else a = null;
            for(Nu = {
                focusedElem: e,
                selectionRange: a
            }, Zs = !1, Fe = t; Fe !== null;)if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Fe = e;
            else for(; Fe !== null;){
                switch(t = Fe, c = t.alternate, e = t.flags, t.tag){
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for(a = 0; a < e.length; a++)o = e[a], o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0, a = t, o = c.memoizedProps, c = c.memoizedState, s = a.stateNode;
                            try {
                                var Y = ba(a.type, o);
                                e = s.getSnapshotBeforeUpdate(Y, c), s.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ee) {
                                _e(a, a.return, ee);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) zu(e);
                            else if (a === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    zu(e);
                                    break;
                                default:
                                    e.textContent = "";
                            }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0) throw Error(l(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Fe = e;
                    break;
                }
                Fe = t.return;
            }
        }
        function vd(e, t, a) {
            var s = a.flags;
            switch(a.tag){
                case 0:
                case 11:
                case 15:
                    wn(e, a), s & 4 && ir(5, a);
                    break;
                case 1:
                    if (wn(e, a), s & 4) if (e = a.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (m) {
                        _e(a, a.return, m);
                    }
                    else {
                        var o = ba(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (m) {
                            _e(a, a.return, m);
                        }
                    }
                    s & 64 && fd(a), s & 512 && rr(a, a.return);
                    break;
                case 3:
                    if (wn(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
                        if (t = null, a.child !== null) switch(a.child.tag){
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode;
                        }
                        try {
                            tf(e, t);
                        } catch (m) {
                            _e(a, a.return, m);
                        }
                    }
                    break;
                case 27:
                    t === null && s & 4 && gd(a);
                case 26:
                case 5:
                    wn(e, a), t === null && s & 4 && pd(a), s & 512 && rr(a, a.return);
                    break;
                case 12:
                    wn(e, a);
                    break;
                case 31:
                    wn(e, a), s & 4 && _d(e, a);
                    break;
                case 13:
                    wn(e, a), s & 4 && Sd(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = rv.bind(null, a), Av(e, a))));
                    break;
                case 22:
                    if (s = a.memoizedState !== null || vn, !s) {
                        t = t !== null && t.memoizedState !== null || Xe, o = vn;
                        var c = Xe;
                        vn = s, (Xe = t) && !c ? _n(e, a, (a.subtreeFlags & 8772) !== 0) : wn(e, a), vn = o, Xe = c;
                    }
                    break;
                case 30:
                    break;
                default:
                    wn(e, a);
            }
        }
        function bd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, bd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var ze = null, dt = !1;
        function bn(e, t, a) {
            for(a = a.child; a !== null;)wd(e, t, a), a = a.sibling;
        }
        function wd(e, t, a) {
            if (wt && typeof wt.onCommitFiberUnmount == "function") try {
                wt.onCommitFiberUnmount(Ci, a);
            } catch  {}
            switch(a.tag){
                case 26:
                    Xe || en(a, t), bn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                    break;
                case 27:
                    Xe || en(a, t);
                    var s = ze, o = dt;
                    Wn(a.type) && (ze = a.stateNode, dt = !1), bn(e, t, a), pr(a.stateNode), ze = s, dt = o;
                    break;
                case 5:
                    Xe || en(a, t);
                case 6:
                    if (s = ze, o = dt, ze = null, bn(e, t, a), ze = s, dt = o, ze !== null) if (dt) try {
                        (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(a.stateNode);
                    } catch (c) {
                        _e(a, t, c);
                    }
                    else try {
                        ze.removeChild(a.stateNode);
                    } catch (c) {
                        _e(a, t, c);
                    }
                    break;
                case 18:
                    ze !== null && (dt ? (e = ze, fp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), ci(e)) : fp(ze, a.stateNode));
                    break;
                case 4:
                    s = ze, o = dt, ze = a.stateNode.containerInfo, dt = !0, bn(e, t, a), ze = s, dt = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    $n(2, a, t), Xe || $n(4, a, t), bn(e, t, a);
                    break;
                case 1:
                    Xe || (en(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && dd(a, t, s)), bn(e, t, a);
                    break;
                case 21:
                    bn(e, t, a);
                    break;
                case 22:
                    Xe = (s = Xe) || a.memoizedState !== null, bn(e, t, a), Xe = s;
                    break;
                default:
                    bn(e, t, a);
            }
        }
        function _d(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
                e = e.dehydrated;
                try {
                    ci(e);
                } catch (a) {
                    _e(t, t.return, a);
                }
            }
        }
        function Sd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                ci(e);
            } catch (a) {
                _e(t, t.return, a);
            }
        }
        function Qy(e) {
            switch(e.tag){
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new yd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new yd), t;
                default:
                    throw Error(l(435, e.tag));
            }
        }
        function Ns(e, t) {
            var a = Qy(e);
            t.forEach(function(s) {
                if (!a.has(s)) {
                    a.add(s);
                    var o = sv.bind(null, e, s);
                    s.then(o, o);
                }
            });
        }
        function pt(e, t) {
            var a = t.deletions;
            if (a !== null) for(var s = 0; s < a.length; s++){
                var o = a[s], c = e, m = t, y = m;
                e: for(; y !== null;){
                    switch(y.tag){
                        case 27:
                            if (Wn(y.type)) {
                                ze = y.stateNode, dt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            ze = y.stateNode, dt = !1;
                            break e;
                        case 3:
                        case 4:
                            ze = y.stateNode.containerInfo, dt = !0;
                            break e;
                    }
                    y = y.return;
                }
                if (ze === null) throw Error(l(160));
                wd(c, m, o), ze = null, dt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
            }
            if (t.subtreeFlags & 13886) for(t = t.child; t !== null;)Ed(t, e), t = t.sibling;
        }
        var Kt = null;
        function Ed(e, t) {
            var a = e.alternate, s = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    pt(t, e), mt(e), s & 4 && ($n(3, e, e.return), ir(3, e), $n(5, e, e.return));
                    break;
                case 1:
                    pt(t, e), mt(e), s & 512 && (Xe || a === null || en(a, a.return)), s & 64 && vn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
                    break;
                case 26:
                    var o = Kt;
                    if (pt(t, e), mt(e), s & 512 && (Xe || a === null || en(a, a.return)), s & 4) {
                        var c = a !== null ? a.memoizedState : null;
                        if (s = e.memoizedState, a === null) if (s === null) if (e.stateNode === null) {
                            e: {
                                s = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch(s){
                                    case "title":
                                        c = o.getElementsByTagName("title")[0], (!c || c[Ni] || c[et] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(s), o.head.insertBefore(c, o.querySelector("head > title"))), it(c, s, a), c[et] = e, Ze(c), s = c;
                                        break e;
                                    case "link":
                                        var m = Ep("link", "href", o).get(s + (a.href || ""));
                                        if (m) {
                                            for(var y = 0; y < m.length; y++)if (c = m[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                m.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        c = o.createElement(s), it(c, s, a), o.head.appendChild(c);
                                        break;
                                    case "meta":
                                        if (m = Ep("meta", "content", o).get(s + (a.content || ""))) {
                                            for(y = 0; y < m.length; y++)if (c = m[y], c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                m.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        c = o.createElement(s), it(c, s, a), o.head.appendChild(c);
                                        break;
                                    default:
                                        throw Error(l(468, s));
                                }
                                c[et] = e, Ze(c), s = c;
                            }
                            e.stateNode = s;
                        } else Tp(o, e.type, e.stateNode);
                        else e.stateNode = Sp(o, s, e.memoizedProps);
                        else c !== s ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, s === null ? Tp(o, e.type, e.stateNode) : Sp(o, s, e.memoizedProps)) : s === null && e.stateNode !== null && lu(e, e.memoizedProps, a.memoizedProps);
                    }
                    break;
                case 27:
                    pt(t, e), mt(e), s & 512 && (Xe || a === null || en(a, a.return)), a !== null && s & 4 && lu(e, e.memoizedProps, a.memoizedProps);
                    break;
                case 5:
                    if (pt(t, e), mt(e), s & 512 && (Xe || a === null || en(a, a.return)), e.flags & 32) {
                        o = e.stateNode;
                        try {
                            Da(o, "");
                        } catch (Y) {
                            _e(e, e.return, Y);
                        }
                    }
                    s & 4 && e.stateNode != null && (o = e.memoizedProps, lu(e, o, a !== null ? a.memoizedProps : o)), s & 1024 && (cu = !0);
                    break;
                case 6:
                    if (pt(t, e), mt(e), s & 4) {
                        if (e.stateNode === null) throw Error(l(162));
                        s = e.memoizedProps, a = e.stateNode;
                        try {
                            a.nodeValue = s;
                        } catch (Y) {
                            _e(e, e.return, Y);
                        }
                    }
                    break;
                case 3:
                    if (Xs = null, o = Kt, Kt = Ks(t.containerInfo), pt(t, e), Kt = o, mt(e), s & 4 && a !== null && a.memoizedState.isDehydrated) try {
                        ci(t.containerInfo);
                    } catch (Y) {
                        _e(e, e.return, Y);
                    }
                    cu && (cu = !1, Td(e));
                    break;
                case 4:
                    s = Kt, Kt = Ks(e.stateNode.containerInfo), pt(t, e), mt(e), Kt = s;
                    break;
                case 12:
                    pt(t, e), mt(e);
                    break;
                case 31:
                    pt(t, e), mt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Ns(e, s)));
                    break;
                case 13:
                    pt(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Us = bt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Ns(e, s)));
                    break;
                case 22:
                    o = e.memoizedState !== null;
                    var _ = a !== null && a.memoizedState !== null, C = vn, L = Xe;
                    if (vn = C || o, Xe = L || _, pt(t, e), Xe = L, vn = C, mt(e), s & 8192) e: for(t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || _ || vn || Xe || wa(e)), a = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                _ = a = t;
                                try {
                                    if (c = _.stateNode, o) m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                    else {
                                        y = _.stateNode;
                                        var q = _.memoizedProps.style, j = q != null && q.hasOwnProperty("display") ? q.display : null;
                                        y.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                                    }
                                } catch (Y) {
                                    _e(_, _.return, Y);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                _ = t;
                                try {
                                    _.stateNode.nodeValue = o ? "" : _.memoizedProps;
                                } catch (Y) {
                                    _e(_, _.return, Y);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (a === null) {
                                _ = t;
                                try {
                                    var U = _.stateNode;
                                    o ? dp(U, !0) : dp(_.stateNode, !1);
                                } catch (Y) {
                                    _e(_, _.return, Y);
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e) break e;
                        for(; t.sibling === null;){
                            if (t.return === null || t.return === e) break e;
                            a === t && (a = null), t = t.return;
                        }
                        a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
                    }
                    s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, Ns(e, a))));
                    break;
                case 19:
                    pt(t, e), mt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Ns(e, s)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    pt(t, e), mt(e);
            }
        }
        function mt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var a, s = e.return; s !== null;){
                        if (md(s)) {
                            a = s;
                            break;
                        }
                        s = s.return;
                    }
                    if (a == null) throw Error(l(160));
                    switch(a.tag){
                        case 27:
                            var o = a.stateNode, c = ou(e);
                            js(e, c, o);
                            break;
                        case 5:
                            var m = a.stateNode;
                            a.flags & 32 && (Da(m, ""), a.flags &= -33);
                            var y = ou(e);
                            js(e, y, m);
                            break;
                        case 3:
                        case 4:
                            var _ = a.stateNode.containerInfo, C = ou(e);
                            uu(e, C, _);
                            break;
                        default:
                            throw Error(l(161));
                    }
                } catch (L) {
                    _e(e, e.return, L);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Td(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Td(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function wn(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)vd(e, t.alternate, t), t = t.sibling;
        }
        function wa(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        $n(4, t, t.return), wa(t);
                        break;
                    case 1:
                        en(t, t.return);
                        var a = t.stateNode;
                        typeof a.componentWillUnmount == "function" && dd(t, t.return, a), wa(t);
                        break;
                    case 27:
                        pr(t.stateNode);
                    case 26:
                    case 5:
                        en(t, t.return), wa(t);
                        break;
                    case 22:
                        t.memoizedState === null && wa(t);
                        break;
                    case 30:
                        wa(t);
                        break;
                    default:
                        wa(t);
                }
                e = e.sibling;
            }
        }
        function _n(e, t, a) {
            for(a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var s = t.alternate, o = e, c = t, m = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        _n(o, c, a), ir(4, c);
                        break;
                    case 1:
                        if (_n(o, c, a), s = c, o = s.stateNode, typeof o.componentDidMount == "function") try {
                            o.componentDidMount();
                        } catch (C) {
                            _e(s, s.return, C);
                        }
                        if (s = c, o = s.updateQueue, o !== null) {
                            var y = s.stateNode;
                            try {
                                var _ = o.shared.hiddenCallbacks;
                                if (_ !== null) for(o.shared.hiddenCallbacks = null, o = 0; o < _.length; o++)ef(_[o], y);
                            } catch (C) {
                                _e(s, s.return, C);
                            }
                        }
                        a && m & 64 && fd(c), rr(c, c.return);
                        break;
                    case 27:
                        gd(c);
                    case 26:
                    case 5:
                        _n(o, c, a), a && s === null && m & 4 && pd(c), rr(c, c.return);
                        break;
                    case 12:
                        _n(o, c, a);
                        break;
                    case 31:
                        _n(o, c, a), a && m & 4 && _d(o, c);
                        break;
                    case 13:
                        _n(o, c, a), a && m & 4 && Sd(o, c);
                        break;
                    case 22:
                        c.memoizedState === null && _n(o, c, a), rr(c, c.return);
                        break;
                    case 30:
                        break;
                    default:
                        _n(o, c, a);
                }
                t = t.sibling;
            }
        }
        function hu(e, t) {
            var a = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Vi(a));
        }
        function fu(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Vi(e));
        }
        function Yt(e, t, a, s) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ad(e, t, a, s), t = t.sibling;
        }
        function Ad(e, t, a, s) {
            var o = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Yt(e, t, a, s), o & 2048 && ir(9, t);
                    break;
                case 1:
                    Yt(e, t, a, s);
                    break;
                case 3:
                    Yt(e, t, a, s), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Vi(e)));
                    break;
                case 12:
                    if (o & 2048) {
                        Yt(e, t, a, s), e = t.stateNode;
                        try {
                            var c = t.memoizedProps, m = c.id, y = c.onPostCommit;
                            typeof y == "function" && y(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (_) {
                            _e(t, t.return, _);
                        }
                    } else Yt(e, t, a, s);
                    break;
                case 31:
                    Yt(e, t, a, s);
                    break;
                case 13:
                    Yt(e, t, a, s);
                    break;
                case 23:
                    break;
                case 22:
                    c = t.stateNode, m = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? Yt(e, t, a, s) : sr(e, t) : c._visibility & 2 ? Yt(e, t, a, s) : (c._visibility |= 2, Fa(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && hu(m, t);
                    break;
                case 24:
                    Yt(e, t, a, s), o & 2048 && fu(t.alternate, t);
                    break;
                default:
                    Yt(e, t, a, s);
            }
        }
        function Fa(e, t, a, s, o) {
            for(o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;){
                var c = e, m = t, y = a, _ = s, C = m.flags;
                switch(m.tag){
                    case 0:
                    case 11:
                    case 15:
                        Fa(c, m, y, _, o), ir(8, m);
                        break;
                    case 23:
                        break;
                    case 22:
                        var L = m.stateNode;
                        m.memoizedState !== null ? L._visibility & 2 ? Fa(c, m, y, _, o) : sr(c, m) : (L._visibility |= 2, Fa(c, m, y, _, o)), o && C & 2048 && hu(m.alternate, m);
                        break;
                    case 24:
                        Fa(c, m, y, _, o), o && C & 2048 && fu(m.alternate, m);
                        break;
                    default:
                        Fa(c, m, y, _, o);
                }
                t = t.sibling;
            }
        }
        function sr(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var a = e, s = t, o = s.flags;
                switch(s.tag){
                    case 22:
                        sr(a, s), o & 2048 && hu(s.alternate, s);
                        break;
                    case 24:
                        sr(a, s), o & 2048 && fu(s.alternate, s);
                        break;
                    default:
                        sr(a, s);
                }
                t = t.sibling;
            }
        }
        var lr = 8192;
        function ei(e, t, a) {
            if (e.subtreeFlags & lr) for(e = e.child; e !== null;)xd(e, t, a), e = e.sibling;
        }
        function xd(e, t, a) {
            switch(e.tag){
                case 26:
                    ei(e, t, a), e.flags & lr && e.memoizedState !== null && Mv(a, Kt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    ei(e, t, a);
                    break;
                case 3:
                case 4:
                    var s = Kt;
                    Kt = Ks(e.stateNode.containerInfo), ei(e, t, a), Kt = s;
                    break;
                case 22:
                    e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = lr, lr = 16777216, ei(e, t, a), lr = s) : ei(e, t, a));
                    break;
                default:
                    ei(e, t, a);
            }
        }
        function Rd(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function or(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var a = 0; a < t.length; a++){
                    var s = t[a];
                    Fe = s, Cd(s, e);
                }
                Rd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Od(e), e = e.sibling;
        }
        function Od(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    or(e), e.flags & 2048 && $n(9, e, e.return);
                    break;
                case 3:
                    or(e);
                    break;
                case 12:
                    or(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ds(e)) : or(e);
                    break;
                default:
                    or(e);
            }
        }
        function Ds(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var a = 0; a < t.length; a++){
                    var s = t[a];
                    Fe = s, Cd(s, e);
                }
                Rd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        $n(8, t, t.return), Ds(t);
                        break;
                    case 22:
                        a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ds(t));
                        break;
                    default:
                        Ds(t);
                }
                e = e.sibling;
            }
        }
        function Cd(e, t) {
            for(; Fe !== null;){
                var a = Fe;
                switch(a.tag){
                    case 0:
                    case 11:
                    case 15:
                        $n(8, a, t);
                        break;
                    case 23:
                    case 22:
                        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                            var s = a.memoizedState.cachePool.pool;
                            s != null && s.refCount++;
                        }
                        break;
                    case 24:
                        Vi(a.memoizedState.cache);
                }
                if (s = a.child, s !== null) s.return = a, Fe = s;
                else e: for(a = e; Fe !== null;){
                    s = Fe;
                    var o = s.sibling, c = s.return;
                    if (bd(s), s === a) {
                        Fe = null;
                        break e;
                    }
                    if (o !== null) {
                        o.return = c, Fe = o;
                        break e;
                    }
                    Fe = c;
                }
            }
        }
        var Zy = {
            getCacheForType: function(e) {
                var t = nt(Ve), a = t.data.get(e);
                return a === void 0 && (a = e(), t.data.set(e, a)), a;
            },
            cacheSignal: function() {
                return nt(Ve).controller.signal;
            }
        }, Fy = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Ce = null, ce = null, fe = 0, we = 0, xt = null, Gn = !1, ti = !1, du = !1, Sn = 0, Be = 0, In = 0, _a = 0, pu = 0, Rt = 0, ni = 0, ur = null, gt = null, mu = !1, Us = 0, kd = 0, zs = 1 / 0, Ls = null, Vn = null, Qe = 0, Kn = null, ai = null, En = 0, gu = 0, yu = null, jd = null, cr = 0, vu = null;
        function Ot() {
            return (ye & 2) !== 0 && fe !== 0 ? fe & -fe : M.T !== null ? Tu() : Kc();
        }
        function Nd() {
            if (Rt === 0) if ((fe & 536870912) === 0 || pe) {
                var e = Ir;
                Ir <<= 1, (Ir & 3932160) === 0 && (Ir = 262144), Rt = e;
            } else Rt = 536870912;
            return e = Tt.current, e !== null && (e.flags |= 32), Rt;
        }
        function yt(e, t, a) {
            (e === Ce && (we === 2 || we === 9) || e.cancelPendingCommit !== null) && (ii(e, 0), Yn(e, fe, Rt, !1)), ji(e, a), ((ye & 2) === 0 || e !== Ce) && (e === Ce && ((ye & 2) === 0 && (_a |= a), Be === 4 && Yn(e, fe, Rt, !1)), tn(e));
        }
        function Dd(e, t, a) {
            if ((ye & 6) !== 0) throw Error(l(327));
            var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ki(e, t), o = s ? nv(e, t) : wu(e, t, !0), c = s;
            do {
                if (o === 0) {
                    ti && !s && Yn(e, t, 0, !1);
                    break;
                } else {
                    if (a = e.current.alternate, c && !ev(a)) {
                        o = wu(e, t, !1), c = !1;
                        continue;
                    }
                    if (o === 2) {
                        if (c = t, e.errorRecoveryDisabledLanes & c) var m = 0;
                        else m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                        if (m !== 0) {
                            t = m;
                            e: {
                                var y = e;
                                o = ur;
                                var _ = y.current.memoizedState.isDehydrated;
                                if (_ && (ii(y, m).flags |= 256), m = wu(y, m, !1), m !== 2) {
                                    if (du && !_) {
                                        y.errorRecoveryDisabledLanes |= c, _a |= c, o = 4;
                                        break e;
                                    }
                                    c = gt, gt = o, c !== null && (gt === null ? gt = c : gt.push.apply(gt, c));
                                }
                                o = m;
                            }
                            if (c = !1, o !== 2) continue;
                        }
                    }
                    if (o === 1) {
                        ii(e, 0), Yn(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(s = e, c = o, c){
                            case 0:
                            case 1:
                                throw Error(l(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Yn(s, t, Rt, !Gn);
                                break e;
                            case 2:
                                gt = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(l(329));
                        }
                        if ((t & 62914560) === t && (o = Us + 300 - bt(), 10 < o)) {
                            if (Yn(s, t, Rt, !Gn), Kr(s, 0, !0) !== 0) break e;
                            En = t, s.timeoutHandle = cp(Ud.bind(null, s, a, gt, Ls, mu, t, Rt, _a, ni, Gn, c, "Throttled", -0, 0), o);
                            break e;
                        }
                        Ud(s, a, gt, Ls, mu, t, Rt, _a, ni, Gn, c, null, -0, 0);
                    }
                }
                break;
            }while (!0);
            tn(e);
        }
        function Ud(e, t, a, s, o, c, m, y, _, C, L, q, j, U) {
            if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
                q = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: on
                }, xd(t, c, q);
                var Y = (c & 62914560) === c ? Us - bt() : (c & 4194048) === c ? kd - bt() : 0;
                if (Y = Hv(q, Y), Y !== null) {
                    En = c, e.cancelPendingCommit = Y($d.bind(null, e, t, c, a, s, o, m, y, _, L, q, null, j, U)), Yn(e, c, m, !C);
                    return;
                }
            }
            $d(e, t, c, a, s, o, m, y, _);
        }
        function ev(e) {
            for(var t = e;;){
                var a = t.tag;
                if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for(var s = 0; s < a.length; s++){
                    var o = a[s], c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!St(c(), o)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
                else {
                    if (t === e) break;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
            }
            return !0;
        }
        function Yn(e, t, a, s) {
            t &= ~pu, t &= ~_a, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
            for(var o = t; 0 < o;){
                var c = 31 - _t(o), m = 1 << c;
                s[c] = -1, o &= ~m;
            }
            a !== 0 && Gc(e, a, t);
        }
        function Ms() {
            return (ye & 6) === 0 ? (hr(0), !1) : !0;
        }
        function bu() {
            if (ce !== null) {
                if (we === 0) var e = ce.return;
                else e = ce, fn = fa = null, zo(e), Xa = null, Yi = 0, e = ce;
                for(; e !== null;)hd(e.alternate, e), e = e.return;
                ce = null;
            }
        }
        function ii(e, t) {
            var a = e.timeoutHandle;
            a !== -1 && (e.timeoutHandle = -1, wv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), En = 0, bu(), Ce = e, ce = a = cn(e.current, null), fe = t, we = 0, xt = null, Gn = !1, ti = ki(e, t), du = !1, ni = Rt = pu = _a = In = Be = 0, gt = ur = null, mu = !1, (t & 8) !== 0 && (t |= t & 32);
            var s = e.entangledLanes;
            if (s !== 0) for(e = e.entanglements, s &= t; 0 < s;){
                var o = 31 - _t(s), c = 1 << o;
                t |= e[o], s &= ~c;
            }
            return Sn = t, is(), a;
        }
        function zd(e, t) {
            le = null, M.H = tr, t === Ya || t === fs ? (t = Jh(), we = 3) : t === Eo ? (t = Jh(), we = 4) : we = t === Qo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, ce === null && (Be = 1, xs(e, Mt(t, e.current)));
        }
        function Ld() {
            var e = Tt.current;
            return e === null ? !0 : (fe & 4194048) === fe ? Pt === null : (fe & 62914560) === fe || (fe & 536870912) !== 0 ? e === Pt : !1;
        }
        function Md() {
            var e = M.H;
            return M.H = tr, e === null ? tr : e;
        }
        function Hd() {
            var e = M.A;
            return M.A = Zy, e;
        }
        function Hs() {
            Be = 4, Gn || (fe & 4194048) !== fe && Tt.current !== null || (ti = !0), (In & 134217727) === 0 && (_a & 134217727) === 0 || Ce === null || Yn(Ce, fe, Rt, !1);
        }
        function wu(e, t, a) {
            var s = ye;
            ye |= 2;
            var o = Md(), c = Hd();
            (Ce !== e || fe !== t) && (Ls = null, ii(e, t)), t = !1;
            var m = Be;
            e: do try {
                if (we !== 0 && ce !== null) {
                    var y = ce, _ = xt;
                    switch(we){
                        case 8:
                            bu(), m = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Tt.current === null && (t = !0);
                            var C = we;
                            if (we = 0, xt = null, ri(e, y, _, C), a && ti) {
                                m = 0;
                                break e;
                            }
                            break;
                        default:
                            C = we, we = 0, xt = null, ri(e, y, _, C);
                    }
                }
                tv(), m = Be;
                break;
            } catch (L) {
                zd(e, L);
            }
            while (!0);
            return t && e.shellSuspendCounter++, fn = fa = null, ye = s, M.H = o, M.A = c, ce === null && (Ce = null, fe = 0, is()), m;
        }
        function tv() {
            for(; ce !== null;)Bd(ce);
        }
        function nv(e, t) {
            var a = ye;
            ye |= 2;
            var s = Md(), o = Hd();
            Ce !== e || fe !== t ? (Ls = null, zs = bt() + 500, ii(e, t)) : ti = ki(e, t);
            e: do try {
                if (we !== 0 && ce !== null) {
                    t = ce;
                    var c = xt;
                    t: switch(we){
                        case 1:
                            we = 0, xt = null, ri(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (Xh(c)) {
                                we = 0, xt = null, qd(t);
                                break;
                            }
                            t = function() {
                                we !== 2 && we !== 9 || Ce !== e || (we = 7), tn(e);
                            }, c.then(t, t);
                            break e;
                        case 3:
                            we = 7;
                            break e;
                        case 4:
                            we = 5;
                            break e;
                        case 7:
                            Xh(c) ? (we = 0, xt = null, qd(t)) : (we = 0, xt = null, ri(e, t, c, 7));
                            break;
                        case 5:
                            var m = null;
                            switch(ce.tag){
                                case 26:
                                    m = ce.memoizedState;
                                case 5:
                                case 27:
                                    var y = ce;
                                    if (m ? Ap(m) : y.stateNode.complete) {
                                        we = 0, xt = null;
                                        var _ = y.sibling;
                                        if (_ !== null) ce = _;
                                        else {
                                            var C = y.return;
                                            C !== null ? (ce = C, Bs(C)) : ce = null;
                                        }
                                        break t;
                                    }
                            }
                            we = 0, xt = null, ri(e, t, c, 5);
                            break;
                        case 6:
                            we = 0, xt = null, ri(e, t, c, 6);
                            break;
                        case 8:
                            bu(), Be = 6;
                            break e;
                        default:
                            throw Error(l(462));
                    }
                }
                av();
                break;
            } catch (L) {
                zd(e, L);
            }
            while (!0);
            return fn = fa = null, M.H = s, M.A = o, ye = a, ce !== null ? 0 : (Ce = null, fe = 0, is(), Be);
        }
        function av() {
            for(; ce !== null && !xg();)Bd(ce);
        }
        function Bd(e) {
            var t = ud(e.alternate, e, Sn);
            e.memoizedProps = e.pendingProps, t === null ? Bs(e) : ce = t;
        }
        function qd(e) {
            var t = e, a = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = ad(a, t, t.pendingProps, t.type, void 0, fe);
                    break;
                case 11:
                    t = ad(a, t, t.pendingProps, t.type.render, t.ref, fe);
                    break;
                case 5:
                    zo(t);
                default:
                    hd(a, t), t = ce = Mh(t, Sn), t = ud(a, t, Sn);
            }
            e.memoizedProps = e.pendingProps, t === null ? Bs(e) : ce = t;
        }
        function ri(e, t, a, s) {
            fn = fa = null, zo(t), Xa = null, Yi = 0;
            var o = t.return;
            try {
                if (Vy(e, o, t, a, fe)) {
                    Be = 1, xs(e, Mt(a, e.current)), ce = null;
                    return;
                }
            } catch (c) {
                if (o !== null) throw ce = o, c;
                Be = 1, xs(e, Mt(a, e.current)), ce = null;
                return;
            }
            t.flags & 32768 ? (pe || s === 1 ? e = !0 : ti || (fe & 536870912) !== 0 ? e = !1 : (Gn = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Tt.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Pd(t, e)) : Bs(t);
        }
        function Bs(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Pd(t, Gn);
                    return;
                }
                e = t.return;
                var a = Xy(t.alternate, t, Sn);
                if (a !== null) {
                    ce = a;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    ce = t;
                    return;
                }
                ce = t = e;
            }while (t !== null);
            Be === 0 && (Be = 5);
        }
        function Pd(e, t) {
            do {
                var a = Wy(e.alternate, e);
                if (a !== null) {
                    a.flags &= 32767, ce = a;
                    return;
                }
                if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
                    ce = e;
                    return;
                }
                ce = e = a;
            }while (e !== null);
            Be = 6, ce = null;
        }
        function $d(e, t, a, s, o, c, m, y, _) {
            e.cancelPendingCommit = null;
            do qs();
            while (Qe !== 0);
            if ((ye & 6) !== 0) throw Error(l(327));
            if (t !== null) {
                if (t === e.current) throw Error(l(177));
                if (c = t.lanes | t.childLanes, c |= lo, Lg(e, a, c, m, y, _), e === Ce && (ce = Ce = null, fe = 0), ai = t, Kn = e, En = a, gu = c, yu = o, jd = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, lv($r, function() {
                    return Yd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
                    s = M.T, M.T = null, o = G.p, G.p = 2, m = ye, ye |= 4;
                    try {
                        Jy(e, t, a);
                    } finally{
                        ye = m, G.p = o, M.T = s;
                    }
                }
                Qe = 1, Gd(), Id(), Vd();
            }
        }
        function Gd() {
            if (Qe === 1) {
                Qe = 0;
                var e = Kn, t = ai, a = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || a) {
                    a = M.T, M.T = null;
                    var s = G.p;
                    G.p = 2;
                    var o = ye;
                    ye |= 4;
                    try {
                        Ed(t, e);
                        var c = Nu, m = Oh(e.containerInfo), y = c.focusedElem, _ = c.selectionRange;
                        if (m !== y && y && y.ownerDocument && Rh(y.ownerDocument.documentElement, y)) {
                            if (_ !== null && no(y)) {
                                var C = _.start, L = _.end;
                                if (L === void 0 && (L = C), "selectionStart" in y) y.selectionStart = C, y.selectionEnd = Math.min(L, y.value.length);
                                else {
                                    var q = y.ownerDocument || document, j = q && q.defaultView || window;
                                    if (j.getSelection) {
                                        var U = j.getSelection(), Y = y.textContent.length, ee = Math.min(_.start, Y), xe = _.end === void 0 ? ee : Math.min(_.end, Y);
                                        !U.extend && ee > xe && (m = xe, xe = ee, ee = m);
                                        var R = xh(y, ee), T = xh(y, xe);
                                        if (R && T && (U.rangeCount !== 1 || U.anchorNode !== R.node || U.anchorOffset !== R.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                                            var O = q.createRange();
                                            O.setStart(R.node, R.offset), U.removeAllRanges(), ee > xe ? (U.addRange(O), U.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), U.addRange(O));
                                        }
                                    }
                                }
                            }
                            for(q = [], U = y; U = U.parentNode;)U.nodeType === 1 && q.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                            for(typeof y.focus == "function" && y.focus(), y = 0; y < q.length; y++){
                                var H = q[y];
                                H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
                            }
                        }
                        Zs = !!ju, Nu = ju = null;
                    } finally{
                        ye = o, G.p = s, M.T = a;
                    }
                }
                e.current = t, Qe = 2;
            }
        }
        function Id() {
            if (Qe === 2) {
                Qe = 0;
                var e = Kn, t = ai, a = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || a) {
                    a = M.T, M.T = null;
                    var s = G.p;
                    G.p = 2;
                    var o = ye;
                    ye |= 4;
                    try {
                        vd(e, t.alternate, t);
                    } finally{
                        ye = o, G.p = s, M.T = a;
                    }
                }
                Qe = 3;
            }
        }
        function Vd() {
            if (Qe === 4 || Qe === 3) {
                Qe = 0, Rg();
                var e = Kn, t = ai, a = En, s = jd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Qe = 5 : (Qe = 0, ai = Kn = null, Kd(e, e.pendingLanes));
                var o = e.pendingLanes;
                if (o === 0 && (Vn = null), Ml(a), t = t.stateNode, wt && typeof wt.onCommitFiberRoot == "function") try {
                    wt.onCommitFiberRoot(Ci, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (s !== null) {
                    t = M.T, o = G.p, G.p = 2, M.T = null;
                    try {
                        for(var c = e.onRecoverableError, m = 0; m < s.length; m++){
                            var y = s[m];
                            c(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally{
                        M.T = t, G.p = o;
                    }
                }
                (En & 3) !== 0 && qs(), tn(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === vu ? cr++ : (cr = 0, vu = e) : cr = 0, hr(0);
            }
        }
        function Kd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Vi(t)));
        }
        function qs() {
            return Gd(), Id(), Vd(), Yd();
        }
        function Yd() {
            if (Qe !== 5) return !1;
            var e = Kn, t = gu;
            gu = 0;
            var a = Ml(En), s = M.T, o = G.p;
            try {
                G.p = 32 > a ? 32 : a, M.T = null, a = yu, yu = null;
                var c = Kn, m = En;
                if (Qe = 0, ai = Kn = null, En = 0, (ye & 6) !== 0) throw Error(l(331));
                var y = ye;
                if (ye |= 4, Od(c.current), Ad(c, c.current, m, a), ye = y, hr(0, !1), wt && typeof wt.onPostCommitFiberRoot == "function") try {
                    wt.onPostCommitFiberRoot(Ci, c);
                } catch  {}
                return !0;
            } finally{
                G.p = o, M.T = s, Kd(e, t);
            }
        }
        function Xd(e, t, a) {
            t = Mt(a, t), t = Jo(e.stateNode, t, 2), e = Bn(e, t, 2), e !== null && (ji(e, 2), tn(e));
        }
        function _e(e, t, a) {
            if (e.tag === 3) Xd(e, e, a);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Xd(t, e, a);
                    break;
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Vn === null || !Vn.has(s))) {
                        e = Mt(a, e), a = Wf(2), s = Bn(t, a, 2), s !== null && (Jf(a, s, t, e), ji(s, 2), tn(s));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function _u(e, t, a) {
            var s = e.pingCache;
            if (s === null) {
                s = e.pingCache = new Fy;
                var o = new Set;
                s.set(t, o);
            } else o = s.get(t), o === void 0 && (o = new Set, s.set(t, o));
            o.has(a) || (du = !0, o.add(a), e = iv.bind(null, e, t, a), t.then(e, e));
        }
        function iv(e, t, a) {
            var s = e.pingCache;
            s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ce === e && (fe & a) === a && (Be === 4 || Be === 3 && (fe & 62914560) === fe && 300 > bt() - Us ? (ye & 2) === 0 && ii(e, 0) : pu |= a, ni === fe && (ni = 0)), tn(e);
        }
        function Wd(e, t) {
            t === 0 && (t = $c()), e = ua(e, t), e !== null && (ji(e, t), tn(e));
        }
        function rv(e) {
            var t = e.memoizedState, a = 0;
            t !== null && (a = t.retryLane), Wd(e, a);
        }
        function sv(e, t) {
            var a = 0;
            switch(e.tag){
                case 31:
                case 13:
                    var s = e.stateNode, o = e.memoizedState;
                    o !== null && (a = o.retryLane);
                    break;
                case 19:
                    s = e.stateNode;
                    break;
                case 22:
                    s = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(l(314));
            }
            s !== null && s.delete(t), Wd(e, a);
        }
        function lv(e, t) {
            return Dl(e, t);
        }
        var Ps = null, si = null, Su = !1, $s = !1, Eu = !1, Xn = 0;
        function tn(e) {
            e !== si && e.next === null && (si === null ? Ps = si = e : si = si.next = e), $s = !0, Su || (Su = !0, uv());
        }
        function hr(e, t) {
            if (!Eu && $s) {
                Eu = !0;
                do for(var a = !1, s = Ps; s !== null;){
                    if (e !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0) var c = 0;
                        else {
                            var m = s.suspendedLanes, y = s.pingedLanes;
                            c = (1 << 31 - _t(42 | e) + 1) - 1, c &= o & ~(m & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
                        }
                        c !== 0 && (a = !0, Fd(s, c));
                    } else c = fe, c = Kr(s, s === Ce ? c : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (c & 3) === 0 || ki(s, c) || (a = !0, Fd(s, c));
                    s = s.next;
                }
                while (a);
                Eu = !1;
            }
        }
        function ov() {
            Jd();
        }
        function Jd() {
            $s = Su = !1;
            var e = 0;
            Xn !== 0 && bv() && (e = Xn);
            for(var t = bt(), a = null, s = Ps; s !== null;){
                var o = s.next, c = Qd(s, t);
                c === 0 ? (s.next = null, a === null ? Ps = o : a.next = o, o === null && (si = a)) : (a = s, (e !== 0 || (c & 3) !== 0) && ($s = !0)), s = o;
            }
            Qe !== 0 && Qe !== 5 || hr(e), Xn !== 0 && (Xn = 0);
        }
        function Qd(e, t) {
            for(var a = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;){
                var m = 31 - _t(c), y = 1 << m, _ = o[m];
                _ === -1 ? ((y & a) === 0 || (y & s) !== 0) && (o[m] = zg(y, t)) : _ <= t && (e.expiredLanes |= y), c &= ~y;
            }
            if (t = Ce, a = fe, a = Kr(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, a === 0 || e === t && (we === 2 || we === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && Ul(s), e.callbackNode = null, e.callbackPriority = 0;
            if ((a & 3) === 0 || ki(e, a)) {
                if (t = a & -a, t === e.callbackPriority) return t;
                switch(s !== null && Ul(s), Ml(a)){
                    case 2:
                    case 8:
                        a = qc;
                        break;
                    case 32:
                        a = $r;
                        break;
                    case 268435456:
                        a = Pc;
                        break;
                    default:
                        a = $r;
                }
                return s = Zd.bind(null, e), a = Dl(a, s), e.callbackPriority = t, e.callbackNode = a, t;
            }
            return s !== null && s !== null && Ul(s), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Zd(e, t) {
            if (Qe !== 0 && Qe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var a = e.callbackNode;
            if (qs() && e.callbackNode !== a) return null;
            var s = fe;
            return s = Kr(e, e === Ce ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (Dd(e, s, t), Qd(e, bt()), e.callbackNode != null && e.callbackNode === a ? Zd.bind(null, e) : null);
        }
        function Fd(e, t) {
            if (qs()) return null;
            Dd(e, t, !0);
        }
        function uv() {
            _v(function() {
                (ye & 6) !== 0 ? Dl(Bc, ov) : Jd();
            });
        }
        function Tu() {
            if (Xn === 0) {
                var e = Va;
                e === 0 && (e = Gr, Gr <<= 1, (Gr & 261888) === 0 && (Gr = 256)), Xn = e;
            }
            return Xn;
        }
        function ep(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Jr("" + e);
        }
        function tp(e, t) {
            var a = t.ownerDocument.createElement("input");
            return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
        }
        function cv(e, t, a, s, o) {
            if (t === "submit" && a && a.stateNode === o) {
                var c = ep((o[ht] || null).action), m = s.submitter;
                m && (t = (t = m[ht] || null) ? ep(t.formAction) : m.getAttribute("formAction"), t !== null && (c = t, m = null));
                var y = new es("action", "action", null, s, o);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (s.defaultPrevented) {
                                    if (Xn !== 0) {
                                        var _ = m ? tp(o, m) : new FormData(o);
                                        Io(a, {
                                            pending: !0,
                                            data: _,
                                            method: o.method,
                                            action: c
                                        }, null, _);
                                    }
                                } else typeof c == "function" && (y.preventDefault(), _ = m ? tp(o, m) : new FormData(o), Io(a, {
                                    pending: !0,
                                    data: _,
                                    method: o.method,
                                    action: c
                                }, c, _));
                            },
                            currentTarget: o
                        }
                    ]
                });
            }
        }
        for(var Au = 0; Au < so.length; Au++){
            var xu = so[Au], hv = xu.toLowerCase(), fv = xu[0].toUpperCase() + xu.slice(1);
            Vt(hv, "on" + fv);
        }
        Vt(jh, "onAnimationEnd"), Vt(Nh, "onAnimationIteration"), Vt(Dh, "onAnimationStart"), Vt("dblclick", "onDoubleClick"), Vt("focusin", "onFocus"), Vt("focusout", "onBlur"), Vt(Oy, "onTransitionRun"), Vt(Cy, "onTransitionStart"), Vt(ky, "onTransitionCancel"), Vt(Uh, "onTransitionEnd"), ja("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), ja("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), ja("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), ja("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), ra("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ra("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ra("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), ra("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ra("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ra("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fr));
        function np(e, t) {
            t = (t & 4) !== 0;
            for(var a = 0; a < e.length; a++){
                var s = e[a], o = s.event;
                s = s.listeners;
                e: {
                    var c = void 0;
                    if (t) for(var m = s.length - 1; 0 <= m; m--){
                        var y = s[m], _ = y.instance, C = y.currentTarget;
                        if (y = y.listener, _ !== c && o.isPropagationStopped()) break e;
                        c = y, o.currentTarget = C;
                        try {
                            c(o);
                        } catch (L) {
                            as(L);
                        }
                        o.currentTarget = null, c = _;
                    }
                    else for(m = 0; m < s.length; m++){
                        if (y = s[m], _ = y.instance, C = y.currentTarget, y = y.listener, _ !== c && o.isPropagationStopped()) break e;
                        c = y, o.currentTarget = C;
                        try {
                            c(o);
                        } catch (L) {
                            as(L);
                        }
                        o.currentTarget = null, c = _;
                    }
                }
            }
        }
        function he(e, t) {
            var a = t[Hl];
            a === void 0 && (a = t[Hl] = new Set);
            var s = e + "__bubble";
            a.has(s) || (ap(t, e, 2, !1), a.add(s));
        }
        function Ru(e, t, a) {
            var s = 0;
            t && (s |= 4), ap(a, e, s, t);
        }
        var Gs = "_reactListening" + Math.random().toString(36).slice(2);
        function Ou(e) {
            if (!e[Gs]) {
                e[Gs] = !0, Wc.forEach(function(a) {
                    a !== "selectionchange" && (dv.has(a) || Ru(a, !1, e), Ru(a, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Gs] || (t[Gs] = !0, Ru("selectionchange", !1, t));
            }
        }
        function ap(e, t, a, s) {
            switch(Np(t)){
                case 2:
                    var o = Pv;
                    break;
                case 8:
                    o = $v;
                    break;
                default:
                    o = Gu;
            }
            a = o.bind(null, t, a, e), o = void 0, !Yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, a, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
                passive: o
            }) : e.addEventListener(t, a, !1);
        }
        function Cu(e, t, a, s, o) {
            var c = s;
            if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for(;;){
                if (s === null) return;
                var m = s.tag;
                if (m === 3 || m === 4) {
                    var y = s.stateNode.containerInfo;
                    if (y === o) break;
                    if (m === 4) for(m = s.return; m !== null;){
                        var _ = m.tag;
                        if ((_ === 3 || _ === 4) && m.stateNode.containerInfo === o) return;
                        m = m.return;
                    }
                    for(; y !== null;){
                        if (m = Oa(y), m === null) return;
                        if (_ = m.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
                            s = c = m;
                            continue e;
                        }
                        y = y.parentNode;
                    }
                }
                s = s.return;
            }
            lh(function() {
                var C = c, L = Vl(a), q = [];
                e: {
                    var j = zh.get(e);
                    if (j !== void 0) {
                        var U = es, Y = e;
                        switch(e){
                            case "keypress":
                                if (Zr(a) === 0) break e;
                            case "keydown":
                            case "keyup":
                                U = sy;
                                break;
                            case "focusin":
                                Y = "focus", U = Ql;
                                break;
                            case "focusout":
                                Y = "blur", U = Ql;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                U = Ql;
                                break;
                            case "click":
                                if (a.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                U = ch;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                U = Xg;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                U = uy;
                                break;
                            case jh:
                            case Nh:
                            case Dh:
                                U = Qg;
                                break;
                            case Uh:
                                U = hy;
                                break;
                            case "scroll":
                            case "scrollend":
                                U = Kg;
                                break;
                            case "wheel":
                                U = dy;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                U = Fg;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                U = fh;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                U = my;
                        }
                        var ee = (t & 4) !== 0, xe = !ee && (e === "scroll" || e === "scrollend"), R = ee ? j !== null ? j + "Capture" : null : j;
                        ee = [];
                        for(var T = C, O; T !== null;){
                            var H = T;
                            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || R === null || (H = Ui(T, R), H != null && ee.push(dr(T, H, O))), xe) break;
                            T = T.return;
                        }
                        0 < ee.length && (j = new U(j, Y, null, a, L), q.push({
                            event: j,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (j = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", j && a !== Il && (Y = a.relatedTarget || a.fromElement) && (Oa(Y) || Y[Ra])) break e;
                        if ((U || j) && (j = L.window === L ? L : (j = L.ownerDocument) ? j.defaultView || j.parentWindow : window, U ? (Y = a.relatedTarget || a.toElement, U = C, Y = Y ? Oa(Y) : null, Y !== null && (xe = h(Y), ee = Y.tag, Y !== xe || ee !== 5 && ee !== 27 && ee !== 6) && (Y = null)) : (U = null, Y = C), U !== Y)) {
                            if (ee = ch, H = "onMouseLeave", R = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ee = fh, H = "onPointerLeave", R = "onPointerEnter", T = "pointer"), xe = U == null ? j : Di(U), O = Y == null ? j : Di(Y), j = new ee(H, T + "leave", U, a, L), j.target = xe, j.relatedTarget = O, H = null, Oa(L) === C && (ee = new ee(R, T + "enter", Y, a, L), ee.target = O, ee.relatedTarget = xe, H = ee), xe = H, U && Y) t: {
                                for(ee = pv, R = U, T = Y, O = 0, H = R; H; H = ee(H))O++;
                                H = 0;
                                for(var Q = T; Q; Q = ee(Q))H++;
                                for(; 0 < O - H;)R = ee(R), O--;
                                for(; 0 < H - O;)T = ee(T), H--;
                                for(; O--;){
                                    if (R === T || T !== null && R === T.alternate) {
                                        ee = R;
                                        break t;
                                    }
                                    R = ee(R), T = ee(T);
                                }
                                ee = null;
                            }
                            else ee = null;
                            U !== null && ip(q, j, U, ee, !1), Y !== null && xe !== null && ip(q, xe, Y, ee, !0);
                        }
                    }
                    e: {
                        if (j = C ? Di(C) : window, U = j.nodeName && j.nodeName.toLowerCase(), U === "select" || U === "input" && j.type === "file") var me = wh;
                        else if (vh(j)) if (_h) me = Ay;
                        else {
                            me = Ey;
                            var J = Sy;
                        }
                        else U = j.nodeName, !U || U.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? C && Gl(C.elementType) && (me = wh) : me = Ty;
                        if (me && (me = me(e, C))) {
                            bh(q, me, a, L);
                            break e;
                        }
                        J && J(e, j, C), e === "focusout" && C && j.type === "number" && C.memoizedProps.value != null && $l(j, "number", j.value);
                    }
                    switch(J = C ? Di(C) : window, e){
                        case "focusin":
                            (vh(J) || J.contentEditable === "true") && (Ma = J, ao = C, $i = null);
                            break;
                        case "focusout":
                            $i = ao = Ma = null;
                            break;
                        case "mousedown":
                            io = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            io = !1, Ch(q, a, L);
                            break;
                        case "selectionchange":
                            if (Ry) break;
                        case "keydown":
                        case "keyup":
                            Ch(q, a, L);
                    }
                    var oe;
                    if (Fl) e: {
                        switch(e){
                            case "compositionstart":
                                var de = "onCompositionStart";
                                break e;
                            case "compositionend":
                                de = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                de = "onCompositionUpdate";
                                break e;
                        }
                        de = void 0;
                    }
                    else La ? gh(e, a) && (de = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (de = "onCompositionStart");
                    de && (dh && a.locale !== "ko" && (La || de !== "onCompositionStart" ? de === "onCompositionEnd" && La && (oe = oh()) : (Nn = L, Xl = "value" in Nn ? Nn.value : Nn.textContent, La = !0)), J = Is(C, de), 0 < J.length && (de = new hh(de, e, null, a, L), q.push({
                        event: de,
                        listeners: J
                    }), oe ? de.data = oe : (oe = yh(a), oe !== null && (de.data = oe)))), (oe = yy ? vy(e, a) : by(e, a)) && (de = Is(C, "onBeforeInput"), 0 < de.length && (J = new hh("onBeforeInput", "beforeinput", null, a, L), q.push({
                        event: J,
                        listeners: de
                    }), J.data = oe)), cv(q, e, C, a, L);
                }
                np(q, t);
            });
        }
        function dr(e, t, a) {
            return {
                instance: e,
                listener: t,
                currentTarget: a
            };
        }
        function Is(e, t) {
            for(var a = t + "Capture", s = []; e !== null;){
                var o = e, c = o.stateNode;
                if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Ui(e, a), o != null && s.unshift(dr(e, o, c)), o = Ui(e, t), o != null && s.push(dr(e, o, c))), e.tag === 3) return s;
                e = e.return;
            }
            return [];
        }
        function pv(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function ip(e, t, a, s, o) {
            for(var c = t._reactName, m = []; a !== null && a !== s;){
                var y = a, _ = y.alternate, C = y.stateNode;
                if (y = y.tag, _ !== null && _ === s) break;
                y !== 5 && y !== 26 && y !== 27 || C === null || (_ = C, o ? (C = Ui(a, c), C != null && m.unshift(dr(a, C, _))) : o || (C = Ui(a, c), C != null && m.push(dr(a, C, _)))), a = a.return;
            }
            m.length !== 0 && e.push({
                event: t,
                listeners: m
            });
        }
        var mv = /\r\n?/g, gv = /\u0000|\uFFFD/g;
        function rp(e) {
            return (typeof e == "string" ? e : "" + e).replace(mv, `
`).replace(gv, "");
        }
        function sp(e, t) {
            return t = rp(t), rp(e) === t;
        }
        function Ae(e, t, a, s, o, c) {
            switch(a){
                case "children":
                    typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Da(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Da(e, "" + s);
                    break;
                case "className":
                    Xr(e, "class", s);
                    break;
                case "tabIndex":
                    Xr(e, "tabindex", s);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    Xr(e, a, s);
                    break;
                case "style":
                    rh(e, s, c);
                    break;
                case "data":
                    if (t !== "object") {
                        Xr(e, "data", s);
                        break;
                    }
                case "src":
                case "href":
                    if (s === "" && (t !== "a" || a !== "href")) {
                        e.removeAttribute(a);
                        break;
                    }
                    if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                        e.removeAttribute(a);
                        break;
                    }
                    s = Jr("" + s), e.setAttribute(a, s);
                    break;
                case "action":
                case "formAction":
                    if (typeof s == "function") {
                        e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof c == "function" && (a === "formAction" ? (t !== "input" && Ae(e, t, "name", o.name, o, null), Ae(e, t, "formEncType", o.formEncType, o, null), Ae(e, t, "formMethod", o.formMethod, o, null), Ae(e, t, "formTarget", o.formTarget, o, null)) : (Ae(e, t, "encType", o.encType, o, null), Ae(e, t, "method", o.method, o, null), Ae(e, t, "target", o.target, o, null)));
                    if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                        e.removeAttribute(a);
                        break;
                    }
                    s = Jr("" + s), e.setAttribute(a, s);
                    break;
                case "onClick":
                    s != null && (e.onclick = on);
                    break;
                case "onScroll":
                    s != null && he("scroll", e);
                    break;
                case "onScrollEnd":
                    s != null && he("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (s != null) {
                        if (typeof s != "object" || !("__html" in s)) throw Error(l(61));
                        if (a = s.__html, a != null) {
                            if (o.children != null) throw Error(l(60));
                            e.innerHTML = a;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = s && typeof s != "function" && typeof s != "symbol";
                    break;
                case "muted":
                    e.muted = s && typeof s != "function" && typeof s != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    a = Jr("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                    break;
                case "capture":
                case "download":
                    s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
                    break;
                case "rowSpan":
                case "start":
                    s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
                    break;
                case "popover":
                    he("beforetoggle", e), he("toggle", e), Yr(e, "popover", s);
                    break;
                case "xlinkActuate":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                    break;
                case "xlinkArcrole":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                    break;
                case "xlinkRole":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
                    break;
                case "xlinkShow":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
                    break;
                case "xlinkTitle":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
                    break;
                case "xlinkType":
                    ln(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
                    break;
                case "xmlBase":
                    ln(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                    break;
                case "xmlLang":
                    ln(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                    break;
                case "xmlSpace":
                    ln(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                    break;
                case "is":
                    Yr(e, "is", s);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ig.get(a) || a, Yr(e, a, s));
            }
        }
        function ku(e, t, a, s, o, c) {
            switch(a){
                case "style":
                    rh(e, s, c);
                    break;
                case "dangerouslySetInnerHTML":
                    if (s != null) {
                        if (typeof s != "object" || !("__html" in s)) throw Error(l(61));
                        if (a = s.__html, a != null) {
                            if (o.children != null) throw Error(l(60));
                            e.innerHTML = a;
                        }
                    }
                    break;
                case "children":
                    typeof s == "string" ? Da(e, s) : (typeof s == "number" || typeof s == "bigint") && Da(e, "" + s);
                    break;
                case "onScroll":
                    s != null && he("scroll", e);
                    break;
                case "onScrollEnd":
                    s != null && he("scrollend", e);
                    break;
                case "onClick":
                    s != null && (e.onclick = on);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Jc.hasOwnProperty(a)) e: {
                        if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), c = e[ht] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof s == "function")) {
                            typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, o);
                            break e;
                        }
                        a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Yr(e, a, s);
                    }
            }
        }
        function it(e, t, a) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    he("error", e), he("load", e);
                    var s = !1, o = !1, c;
                    for(c in a)if (a.hasOwnProperty(c)) {
                        var m = a[c];
                        if (m != null) switch(c){
                            case "src":
                                s = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(l(137, t));
                            default:
                                Ae(e, t, c, m, a, null);
                        }
                    }
                    o && Ae(e, t, "srcSet", a.srcSet, a, null), s && Ae(e, t, "src", a.src, a, null);
                    return;
                case "input":
                    he("invalid", e);
                    var y = c = m = o = null, _ = null, C = null;
                    for(s in a)if (a.hasOwnProperty(s)) {
                        var L = a[s];
                        if (L != null) switch(s){
                            case "name":
                                o = L;
                                break;
                            case "type":
                                m = L;
                                break;
                            case "checked":
                                _ = L;
                                break;
                            case "defaultChecked":
                                C = L;
                                break;
                            case "value":
                                c = L;
                                break;
                            case "defaultValue":
                                y = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(l(137, t));
                                break;
                            default:
                                Ae(e, t, s, L, a, null);
                        }
                    }
                    th(e, c, y, _, C, m, o, !1);
                    return;
                case "select":
                    he("invalid", e), s = m = c = null;
                    for(o in a)if (a.hasOwnProperty(o) && (y = a[o], y != null)) switch(o){
                        case "value":
                            c = y;
                            break;
                        case "defaultValue":
                            m = y;
                            break;
                        case "multiple":
                            s = y;
                        default:
                            Ae(e, t, o, y, a, null);
                    }
                    t = c, a = m, e.multiple = !!s, t != null ? Na(e, !!s, t, !1) : a != null && Na(e, !!s, a, !0);
                    return;
                case "textarea":
                    he("invalid", e), c = o = s = null;
                    for(m in a)if (a.hasOwnProperty(m) && (y = a[m], y != null)) switch(m){
                        case "value":
                            s = y;
                            break;
                        case "defaultValue":
                            o = y;
                            break;
                        case "children":
                            c = y;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (y != null) throw Error(l(91));
                            break;
                        default:
                            Ae(e, t, m, y, a, null);
                    }
                    ah(e, s, o, c);
                    return;
                case "option":
                    for(_ in a)a.hasOwnProperty(_) && (s = a[_], s != null) && (_ === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Ae(e, t, _, s, a, null));
                    return;
                case "dialog":
                    he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
                    break;
                case "iframe":
                case "object":
                    he("load", e);
                    break;
                case "video":
                case "audio":
                    for(s = 0; s < fr.length; s++)he(fr[s], e);
                    break;
                case "image":
                    he("error", e), he("load", e);
                    break;
                case "details":
                    he("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    he("error", e), he("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(C in a)if (a.hasOwnProperty(C) && (s = a[C], s != null)) switch(C){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            Ae(e, t, C, s, a, null);
                    }
                    return;
                default:
                    if (Gl(t)) {
                        for(L in a)a.hasOwnProperty(L) && (s = a[L], s !== void 0 && ku(e, t, L, s, a, void 0));
                        return;
                    }
            }
            for(y in a)a.hasOwnProperty(y) && (s = a[y], s != null && Ae(e, t, y, s, a, null));
        }
        function yv(e, t, a, s) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var o = null, c = null, m = null, y = null, _ = null, C = null, L = null;
                    for(U in a){
                        var q = a[U];
                        if (a.hasOwnProperty(U) && q != null) switch(U){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                _ = q;
                            default:
                                s.hasOwnProperty(U) || Ae(e, t, U, null, s, q);
                        }
                    }
                    for(var j in s){
                        var U = s[j];
                        if (q = a[j], s.hasOwnProperty(j) && (U != null || q != null)) switch(j){
                            case "type":
                                c = U;
                                break;
                            case "name":
                                o = U;
                                break;
                            case "checked":
                                C = U;
                                break;
                            case "defaultChecked":
                                L = U;
                                break;
                            case "value":
                                m = U;
                                break;
                            case "defaultValue":
                                y = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(l(137, t));
                                break;
                            default:
                                U !== q && Ae(e, t, j, U, s, q);
                        }
                    }
                    Pl(e, m, y, _, C, L, c, o);
                    return;
                case "select":
                    U = m = y = j = null;
                    for(c in a)if (_ = a[c], a.hasOwnProperty(c) && _ != null) switch(c){
                        case "value":
                            break;
                        case "multiple":
                            U = _;
                        default:
                            s.hasOwnProperty(c) || Ae(e, t, c, null, s, _);
                    }
                    for(o in s)if (c = s[o], _ = a[o], s.hasOwnProperty(o) && (c != null || _ != null)) switch(o){
                        case "value":
                            j = c;
                            break;
                        case "defaultValue":
                            y = c;
                            break;
                        case "multiple":
                            m = c;
                        default:
                            c !== _ && Ae(e, t, o, c, s, _);
                    }
                    t = y, a = m, s = U, j != null ? Na(e, !!a, j, !1) : !!s != !!a && (t != null ? Na(e, !!a, t, !0) : Na(e, !!a, a ? [] : "", !1));
                    return;
                case "textarea":
                    U = j = null;
                    for(y in a)if (o = a[y], a.hasOwnProperty(y) && o != null && !s.hasOwnProperty(y)) switch(y){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ae(e, t, y, null, s, o);
                    }
                    for(m in s)if (o = s[m], c = a[m], s.hasOwnProperty(m) && (o != null || c != null)) switch(m){
                        case "value":
                            j = o;
                            break;
                        case "defaultValue":
                            U = o;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(l(91));
                            break;
                        default:
                            o !== c && Ae(e, t, m, o, s, c);
                    }
                    nh(e, j, U);
                    return;
                case "option":
                    for(var Y in a)j = a[Y], a.hasOwnProperty(Y) && j != null && !s.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : Ae(e, t, Y, null, s, j));
                    for(_ in s)j = s[_], U = a[_], s.hasOwnProperty(_) && j !== U && (j != null || U != null) && (_ === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : Ae(e, t, _, j, s, U));
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for(var ee in a)j = a[ee], a.hasOwnProperty(ee) && j != null && !s.hasOwnProperty(ee) && Ae(e, t, ee, null, s, j);
                    for(C in s)if (j = s[C], U = a[C], s.hasOwnProperty(C) && j !== U && (j != null || U != null)) switch(C){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null) throw Error(l(137, t));
                            break;
                        default:
                            Ae(e, t, C, j, s, U);
                    }
                    return;
                default:
                    if (Gl(t)) {
                        for(var xe in a)j = a[xe], a.hasOwnProperty(xe) && j !== void 0 && !s.hasOwnProperty(xe) && ku(e, t, xe, void 0, s, j);
                        for(L in s)j = s[L], U = a[L], !s.hasOwnProperty(L) || j === U || j === void 0 && U === void 0 || ku(e, t, L, j, s, U);
                        return;
                    }
            }
            for(var R in a)j = a[R], a.hasOwnProperty(R) && j != null && !s.hasOwnProperty(R) && Ae(e, t, R, null, s, j);
            for(q in s)j = s[q], U = a[q], !s.hasOwnProperty(q) || j === U || j == null && U == null || Ae(e, t, q, j, s, U);
        }
        function lp(e) {
            switch(e){
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1;
            }
        }
        function vv() {
            if (typeof performance.getEntriesByType == "function") {
                for(var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++){
                    var o = a[s], c = o.transferSize, m = o.initiatorType, y = o.duration;
                    if (c && y && lp(m)) {
                        for(m = 0, y = o.responseEnd, s += 1; s < a.length; s++){
                            var _ = a[s], C = _.startTime;
                            if (C > y) break;
                            var L = _.transferSize, q = _.initiatorType;
                            L && lp(q) && (_ = _.responseEnd, m += L * (_ < y ? 1 : (y - C) / (_ - C)));
                        }
                        if (--s, t += 8 * (c + m) / (o.duration / 1e3), e++, 10 < e) break;
                    }
                }
                if (0 < e) return t / e / 1e6;
            }
            return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var ju = null, Nu = null;
        function Vs(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function op(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function up(e, t) {
            if (e === 0) switch(t){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return e === 1 && t === "foreignObject" ? 0 : e;
        }
        function Du(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Uu = null;
        function bv() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Uu ? !1 : (Uu = e, !0) : (Uu = null, !1);
        }
        var cp = typeof setTimeout == "function" ? setTimeout : void 0, wv = typeof clearTimeout == "function" ? clearTimeout : void 0, hp = typeof Promise == "function" ? Promise : void 0, _v = typeof queueMicrotask == "function" ? queueMicrotask : typeof hp < "u" ? function(e) {
            return hp.resolve(null).then(e).catch(Sv);
        } : cp;
        function Sv(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Wn(e) {
            return e === "head";
        }
        function fp(e, t) {
            var a = t, s = 0;
            do {
                var o = a.nextSibling;
                if (e.removeChild(a), o && o.nodeType === 8) if (a = o.data, a === "/$" || a === "/&") {
                    if (s === 0) {
                        e.removeChild(o), ci(t);
                        return;
                    }
                    s--;
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") s++;
                else if (a === "html") pr(e.ownerDocument.documentElement);
                else if (a === "head") {
                    a = e.ownerDocument.head, pr(a);
                    for(var c = a.firstChild; c;){
                        var m = c.nextSibling, y = c.nodeName;
                        c[Ni] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = m;
                    }
                } else a === "body" && pr(e.ownerDocument.body);
                a = o;
            }while (a);
            ci(t);
        }
        function dp(e, t) {
            var a = e;
            e = 0;
            do {
                var s = a.nextSibling;
                if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), s && s.nodeType === 8) if (a = s.data, a === "/$") {
                    if (e === 0) break;
                    e--;
                } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
                a = s;
            }while (a);
        }
        function zu(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var a = t;
                switch(t = t.nextSibling, a.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        zu(a), Bl(a);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (a.rel.toLowerCase() === "stylesheet") continue;
                }
                e.removeChild(a);
            }
        }
        function Ev(e, t, a, s) {
            for(; e.nodeType === 1;){
                var o = a;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (s) {
                    if (!e[Ni]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var c = o.name == null ? null : "" + o.name;
                    if (o.type === "hidden" && e.getAttribute("name") === c) return e;
                } else return e;
                if (e = $t(e.nextSibling), e === null) break;
            }
            return null;
        }
        function Tv(e, t, a) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = $t(e.nextSibling), e === null)) return null;
            return e;
        }
        function pp(e, t) {
            for(; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lu(e) {
            return e.data === "$?" || e.data === "$~";
        }
        function Mu(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function Av(e, t) {
            var a = e.ownerDocument;
            if (e.data === "$~") e._reactRetry = t;
            else if (e.data !== "$?" || a.readyState !== "loading") t();
            else {
                var s = function() {
                    t(), a.removeEventListener("DOMContentLoaded", s);
                };
                a.addEventListener("DOMContentLoaded", s), e._reactRetry = s;
            }
        }
        function $t(e) {
            for(; e != null; e = e.nextSibling){
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                    if (t === "/$" || t === "/&") return null;
                }
            }
            return e;
        }
        var Hu = null;
        function mp(e) {
            e = e.nextSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var a = e.data;
                    if (a === "/$" || a === "/&") {
                        if (t === 0) return $t(e.nextSibling);
                        t--;
                    } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
                }
                e = e.nextSibling;
            }
            return null;
        }
        function gp(e) {
            e = e.previousSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var a = e.data;
                    if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                        if (t === 0) return e;
                        t--;
                    } else a !== "/$" && a !== "/&" || t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function yp(e, t, a) {
            switch(t = Vs(a), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(l(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(l(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(l(454));
                    return e;
                default:
                    throw Error(l(451));
            }
        }
        function pr(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Bl(e);
        }
        var Gt = new Map, vp = new Set;
        function Ks(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Tn = G.d;
        G.d = {
            f: xv,
            r: Rv,
            D: Ov,
            C: Cv,
            L: kv,
            m: jv,
            X: Dv,
            S: Nv,
            M: Uv
        };
        function xv() {
            var e = Tn.f(), t = Ms();
            return e || t;
        }
        function Rv(e) {
            var t = Ca(e);
            t !== null && t.tag === 5 && t.type === "form" ? zf(t) : Tn.r(e);
        }
        var li = typeof document > "u" ? null : document;
        function bp(e, t, a) {
            var s = li;
            if (s && typeof t == "string" && t) {
                var o = zt(t);
                o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), vp.has(o) || (vp.add(o), e = {
                    rel: e,
                    crossOrigin: a,
                    href: t
                }, s.querySelector(o) === null && (t = s.createElement("link"), it(t, "link", e), Ze(t), s.head.appendChild(t)));
            }
        }
        function Ov(e) {
            Tn.D(e), bp("dns-prefetch", e, null);
        }
        function Cv(e, t) {
            Tn.C(e, t), bp("preconnect", e, t);
        }
        function kv(e, t, a) {
            Tn.L(e, t, a);
            var s = li;
            if (s && e && t) {
                var o = 'link[rel="preload"][as="' + zt(t) + '"]';
                t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + zt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + zt(a.imageSizes) + '"]')) : o += '[href="' + zt(e) + '"]';
                var c = o;
                switch(t){
                    case "style":
                        c = oi(e);
                        break;
                    case "script":
                        c = ui(e);
                }
                Gt.has(c) || (e = v({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                    as: t
                }, a), Gt.set(c, e), s.querySelector(o) !== null || t === "style" && s.querySelector(mr(c)) || t === "script" && s.querySelector(gr(c)) || (t = s.createElement("link"), it(t, "link", e), Ze(t), s.head.appendChild(t)));
            }
        }
        function jv(e, t) {
            Tn.m(e, t);
            var a = li;
            if (a && e) {
                var s = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + zt(s) + '"][href="' + zt(e) + '"]', c = o;
                switch(s){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        c = ui(e);
                }
                if (!Gt.has(c) && (e = v({
                    rel: "modulepreload",
                    href: e
                }, t), Gt.set(c, e), a.querySelector(o) === null)) {
                    switch(s){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (a.querySelector(gr(c))) return;
                    }
                    s = a.createElement("link"), it(s, "link", e), Ze(s), a.head.appendChild(s);
                }
            }
        }
        function Nv(e, t, a) {
            Tn.S(e, t, a);
            var s = li;
            if (s && e) {
                var o = ka(s).hoistableStyles, c = oi(e);
                t = t || "default";
                var m = o.get(c);
                if (!m) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (m = s.querySelector(mr(c))) y.loading = 5;
                    else {
                        e = v({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, a), (a = Gt.get(c)) && Bu(e, a);
                        var _ = m = s.createElement("link");
                        Ze(_), it(_, "link", e), _._p = new Promise(function(C, L) {
                            _.onload = C, _.onerror = L;
                        }), _.addEventListener("load", function() {
                            y.loading |= 1;
                        }), _.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, Ys(m, t, s);
                    }
                    m = {
                        type: "stylesheet",
                        instance: m,
                        count: 1,
                        state: y
                    }, o.set(c, m);
                }
            }
        }
        function Dv(e, t) {
            Tn.X(e, t);
            var a = li;
            if (a && e) {
                var s = ka(a).hoistableScripts, o = ui(e), c = s.get(o);
                c || (c = a.querySelector(gr(o)), c || (e = v({
                    src: e,
                    async: !0
                }, t), (t = Gt.get(o)) && qu(e, t), c = a.createElement("script"), Ze(c), it(c, "link", e), a.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, s.set(o, c));
            }
        }
        function Uv(e, t) {
            Tn.M(e, t);
            var a = li;
            if (a && e) {
                var s = ka(a).hoistableScripts, o = ui(e), c = s.get(o);
                c || (c = a.querySelector(gr(o)), c || (e = v({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Gt.get(o)) && qu(e, t), c = a.createElement("script"), Ze(c), it(c, "link", e), a.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, s.set(o, c));
            }
        }
        function wp(e, t, a, s) {
            var o = (o = ue.current) ? Ks(o) : null;
            if (!o) throw Error(l(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof a.precedence == "string" && typeof a.href == "string" ? (t = oi(a.href), a = ka(o).hoistableStyles, s = a.get(t), s || (s = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(t, s)), s) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                        e = oi(a.href);
                        var c = ka(o).hoistableStyles, m = c.get(e);
                        if (m || (o = o.ownerDocument || o, m = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, m), (c = o.querySelector(mr(e))) && !c._p && (m.instance = c, m.state.loading = 5), Gt.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Gt.set(e, a), c || zv(o, e, a, m.state))), t && s === null) throw Error(l(528, ""));
                        return m;
                    }
                    if (t && s !== null) throw Error(l(529, ""));
                    return null;
                case "script":
                    return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ui(a), a = ka(o).hoistableScripts, s = a.get(t), s || (s = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(t, s)), s) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(l(444, e));
            }
        }
        function oi(e) {
            return 'href="' + zt(e) + '"';
        }
        function mr(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function _p(e) {
            return v({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function zv(e, t, a, s) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
                return s.loading |= 1;
            }), t.addEventListener("error", function() {
                return s.loading |= 2;
            }), it(t, "link", a), Ze(t), e.head.appendChild(t));
        }
        function ui(e) {
            return '[src="' + zt(e) + '"]';
        }
        function gr(e) {
            return "script[async]" + e;
        }
        function Sp(e, t, a) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var s = e.querySelector('style[data-href~="' + zt(a.href) + '"]');
                    if (s) return t.instance = s, Ze(s), s;
                    var o = v({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return s = (e.ownerDocument || e).createElement("style"), Ze(s), it(s, "style", o), Ys(s, a.precedence, e), t.instance = s;
                case "stylesheet":
                    o = oi(a.href);
                    var c = e.querySelector(mr(o));
                    if (c) return t.state.loading |= 4, t.instance = c, Ze(c), c;
                    s = _p(a), (o = Gt.get(o)) && Bu(s, o), c = (e.ownerDocument || e).createElement("link"), Ze(c);
                    var m = c;
                    return m._p = new Promise(function(y, _) {
                        m.onload = y, m.onerror = _;
                    }), it(c, "link", s), t.state.loading |= 4, Ys(c, a.precedence, e), t.instance = c;
                case "script":
                    return c = ui(a.src), (o = e.querySelector(gr(c))) ? (t.instance = o, Ze(o), o) : (s = a, (o = Gt.get(c)) && (s = v({}, a), qu(s, o)), e = e.ownerDocument || e, o = e.createElement("script"), Ze(o), it(o, "link", s), e.head.appendChild(o), t.instance = o);
                case "void":
                    return null;
                default:
                    throw Error(l(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, Ys(s, a.precedence, e));
            return t.instance;
        }
        function Ys(e, t, a) {
            for(var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = s.length ? s[s.length - 1] : null, c = o, m = 0; m < s.length; m++){
                var y = s[m];
                if (y.dataset.precedence === t) c = y;
                else if (c !== o) break;
            }
            c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
        }
        function Bu(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function qu(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var Xs = null;
        function Ep(e, t, a) {
            if (Xs === null) {
                var s = new Map, o = Xs = new Map;
                o.set(a, s);
            } else o = Xs, s = o.get(a), s || (s = new Map, o.set(a, s));
            if (s.has(e)) return s;
            for(s.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++){
                var c = a[o];
                if (!(c[Ni] || c[et] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var m = c.getAttribute(t) || "";
                    m = e + m;
                    var y = s.get(m);
                    y ? y.push(c) : s.set(m, [
                        c
                    ]);
                }
            }
            return s;
        }
        function Tp(e, t, a) {
            e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
        }
        function Lv(e, t, a) {
            if (a === 1 || t.itemProp != null) return !1;
            switch(e){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                    return !0;
                case "link":
                    if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                    return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
                case "script":
                    if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
            }
            return !1;
        }
        function Ap(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function Mv(e, t, a, s) {
            if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
                if (a.instance === null) {
                    var o = oi(s.href), c = t.querySelector(mr(o));
                    if (c) {
                        t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ws.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, Ze(c);
                        return;
                    }
                    c = t.ownerDocument || t, s = _p(s), (o = Gt.get(o)) && Bu(s, o), c = c.createElement("link"), Ze(c);
                    var m = c;
                    m._p = new Promise(function(y, _) {
                        m.onload = y, m.onerror = _;
                    }), it(c, "link", s), a.instance = c;
                }
                e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Ws.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
            }
        }
        var Pu = 0;
        function Hv(e, t) {
            return e.stylesheets && e.count === 0 && Qs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
                var s = setTimeout(function() {
                    if (e.stylesheets && Qs(e, e.stylesheets), e.unsuspend) {
                        var c = e.unsuspend;
                        e.unsuspend = null, c();
                    }
                }, 6e4 + t);
                0 < e.imgBytes && Pu === 0 && (Pu = 62500 * vv());
                var o = setTimeout(function() {
                    if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qs(e, e.stylesheets), e.unsuspend)) {
                        var c = e.unsuspend;
                        e.unsuspend = null, c();
                    }
                }, (e.imgBytes > Pu ? 50 : 800) + t);
                return e.unsuspend = a, function() {
                    e.unsuspend = null, clearTimeout(s), clearTimeout(o);
                };
            } : null;
        }
        function Ws() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) Qs(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var Js = null;
        function Qs(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, Js = new Map, t.forEach(Bv, e), Js = null, Ws.call(e));
        }
        function Bv(e, t) {
            if (!(t.state.loading & 4)) {
                var a = Js.get(e);
                if (a) var s = a.get(null);
                else {
                    a = new Map, Js.set(e, a);
                    for(var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++){
                        var m = o[c];
                        (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), s = m);
                    }
                    s && a.set(null, s);
                }
                o = t.instance, m = o.getAttribute("data-precedence"), c = a.get(m) || s, c === s && a.set(null, o), a.set(m, o), this.count++, s = Ws.bind(this), o.addEventListener("load", s), o.addEventListener("error", s), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
            }
        }
        var yr = {
            $$typeof: z,
            Provider: null,
            Consumer: null,
            _currentValue: ae,
            _currentValue2: ae,
            _threadCount: 0
        };
        function qv(e, t, a, s, o, c, m, y, _) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.hiddenUpdates = zl(null), this.identifierPrefix = s, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = new Map;
        }
        function xp(e, t, a, s, o, c, m, y, _, C, L, q) {
            return e = new qv(e, t, a, m, _, C, L, q, y), t = 1, c === !0 && (t |= 24), c = Et(3, null, null, t), e.current = c, c.stateNode = e, t = wo(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
                element: s,
                isDehydrated: a,
                cache: t
            }, To(c), e;
        }
        function Rp(e) {
            return e ? (e = qa, e) : qa;
        }
        function Op(e, t, a, s, o, c) {
            o = Rp(o), s.context === null ? s.context = o : s.pendingContext = o, s = Hn(t), s.payload = {
                element: a
            }, c = c === void 0 ? null : c, c !== null && (s.callback = c), a = Bn(e, s, t), a !== null && (yt(a, e, t), Wi(a, e, t));
        }
        function Cp(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var a = e.retryLane;
                e.retryLane = a !== 0 && a < t ? a : t;
            }
        }
        function $u(e, t) {
            Cp(e, t), (e = e.alternate) && Cp(e, t);
        }
        function kp(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = ua(e, 67108864);
                t !== null && yt(t, e, 67108864), $u(e, 67108864);
            }
        }
        function jp(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = Ot();
                t = Ll(t);
                var a = ua(e, t);
                a !== null && yt(a, e, t), $u(e, t);
            }
        }
        var Zs = !0;
        function Pv(e, t, a, s) {
            var o = M.T;
            M.T = null;
            var c = G.p;
            try {
                G.p = 2, Gu(e, t, a, s);
            } finally{
                G.p = c, M.T = o;
            }
        }
        function $v(e, t, a, s) {
            var o = M.T;
            M.T = null;
            var c = G.p;
            try {
                G.p = 8, Gu(e, t, a, s);
            } finally{
                G.p = c, M.T = o;
            }
        }
        function Gu(e, t, a, s) {
            if (Zs) {
                var o = Iu(s);
                if (o === null) Cu(e, t, s, Fs, a), Dp(e, s);
                else if (Iv(o, e, t, a, s)) s.stopPropagation();
                else if (Dp(e, s), t & 4 && -1 < Gv.indexOf(e)) {
                    for(; o !== null;){
                        var c = Ca(o);
                        if (c !== null) switch(c.tag){
                            case 3:
                                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                    var m = ia(c.pendingLanes);
                                    if (m !== 0) {
                                        var y = c;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; m;){
                                            var _ = 1 << 31 - _t(m);
                                            y.entanglements[1] |= _, m &= ~_;
                                        }
                                        tn(c), (ye & 6) === 0 && (zs = bt() + 500, hr(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                y = ua(c, 2), y !== null && yt(y, c, 2), Ms(), $u(c, 2);
                        }
                        if (c = Iu(s), c === null && Cu(e, t, s, Fs, a), c === o) break;
                        o = c;
                    }
                    o !== null && s.stopPropagation();
                } else Cu(e, t, s, null, a);
            }
        }
        function Iu(e) {
            return e = Vl(e), Vu(e);
        }
        var Fs = null;
        function Vu(e) {
            if (Fs = null, e = Oa(e), e !== null) {
                var t = h(e);
                if (t === null) e = null;
                else {
                    var a = t.tag;
                    if (a === 13) {
                        if (e = f(t), e !== null) return e;
                        e = null;
                    } else if (a === 31) {
                        if (e = d(t), e !== null) return e;
                        e = null;
                    } else if (a === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return Fs = e, null;
        }
        function Np(e) {
            switch(e){
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(Og()){
                        case Bc:
                            return 2;
                        case qc:
                            return 8;
                        case $r:
                        case Cg:
                            return 32;
                        case Pc:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Ku = !1, Jn = null, Qn = null, Zn = null, vr = new Map, br = new Map, Fn = [], Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Dp(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Jn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Qn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Zn = null;
                    break;
                case "pointerover":
                case "pointerout":
                    vr.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    br.delete(t.pointerId);
            }
        }
        function wr(e, t, a, s, o, c) {
            return e === null || e.nativeEvent !== c ? (e = {
                blockedOn: t,
                domEventName: a,
                eventSystemFlags: s,
                nativeEvent: c,
                targetContainers: [
                    o
                ]
            }, t !== null && (t = Ca(t), t !== null && kp(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
        }
        function Iv(e, t, a, s, o) {
            switch(t){
                case "focusin":
                    return Jn = wr(Jn, e, t, a, s, o), !0;
                case "dragenter":
                    return Qn = wr(Qn, e, t, a, s, o), !0;
                case "mouseover":
                    return Zn = wr(Zn, e, t, a, s, o), !0;
                case "pointerover":
                    var c = o.pointerId;
                    return vr.set(c, wr(vr.get(c) || null, e, t, a, s, o)), !0;
                case "gotpointercapture":
                    return c = o.pointerId, br.set(c, wr(br.get(c) || null, e, t, a, s, o)), !0;
            }
            return !1;
        }
        function Up(e) {
            var t = Oa(e.target);
            if (t !== null) {
                var a = h(t);
                if (a !== null) {
                    if (t = a.tag, t === 13) {
                        if (t = f(a), t !== null) {
                            e.blockedOn = t, Yc(e.priority, function() {
                                jp(a);
                            });
                            return;
                        }
                    } else if (t === 31) {
                        if (t = d(a), t !== null) {
                            e.blockedOn = t, Yc(e.priority, function() {
                                jp(a);
                            });
                            return;
                        }
                    } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function el(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var a = Iu(e.nativeEvent);
                if (a === null) {
                    a = e.nativeEvent;
                    var s = new a.constructor(a.type, a);
                    Il = s, a.target.dispatchEvent(s), Il = null;
                } else return t = Ca(a), t !== null && kp(t), e.blockedOn = a, !1;
                t.shift();
            }
            return !0;
        }
        function zp(e, t, a) {
            el(e) && a.delete(t);
        }
        function Vv() {
            Ku = !1, Jn !== null && el(Jn) && (Jn = null), Qn !== null && el(Qn) && (Qn = null), Zn !== null && el(Zn) && (Zn = null), vr.forEach(zp), br.forEach(zp);
        }
        function tl(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Ku || (Ku = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vv)));
        }
        var nl = null;
        function Lp(e) {
            nl !== e && (nl = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                nl === e && (nl = null);
                for(var t = 0; t < e.length; t += 3){
                    var a = e[t], s = e[t + 1], o = e[t + 2];
                    if (typeof s != "function") {
                        if (Vu(s || a) === null) continue;
                        break;
                    }
                    var c = Ca(a);
                    c !== null && (e.splice(t, 3), t -= 3, Io(c, {
                        pending: !0,
                        data: o,
                        method: a.method,
                        action: s
                    }, s, o));
                }
            }));
        }
        function ci(e) {
            function t(_) {
                return tl(_, e);
            }
            Jn !== null && tl(Jn, e), Qn !== null && tl(Qn, e), Zn !== null && tl(Zn, e), vr.forEach(t), br.forEach(t);
            for(var a = 0; a < Fn.length; a++){
                var s = Fn[a];
                s.blockedOn === e && (s.blockedOn = null);
            }
            for(; 0 < Fn.length && (a = Fn[0], a.blockedOn === null);)Up(a), a.blockedOn === null && Fn.shift();
            if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for(s = 0; s < a.length; s += 3){
                var o = a[s], c = a[s + 1], m = o[ht] || null;
                if (typeof c == "function") m || Lp(a);
                else if (m) {
                    var y = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c, m = c[ht] || null) y = m.formAction;
                        else if (Vu(o) !== null) continue;
                    } else y = m.action;
                    typeof y == "function" ? a[s + 1] = y : (a.splice(s, 3), s -= 3), Lp(a);
                }
            }
        }
        function Mp() {
            function e(c) {
                c.canIntercept && c.info === "react-transition" && c.intercept({
                    handler: function() {
                        return new Promise(function(m) {
                            return o = m;
                        });
                    },
                    focusReset: "manual",
                    scroll: "manual"
                });
            }
            function t() {
                o !== null && (o(), o = null), s || setTimeout(a, 20);
            }
            function a() {
                if (!s && !navigation.transition) {
                    var c = navigation.currentEntry;
                    c && c.url != null && navigation.navigate(c.url, {
                        state: c.getState(),
                        info: "react-transition",
                        history: "replace"
                    });
                }
            }
            if (typeof navigation == "object") {
                var s = !1, o = null;
                return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
                    s = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
                };
            }
        }
        function Yu(e) {
            this._internalRoot = e;
        }
        al.prototype.render = Yu.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(l(409));
            var a = t.current, s = Ot();
            Op(a, s, e, t, null, null);
        }, al.prototype.unmount = Yu.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Op(e.current, 2, null, e, null, null), Ms(), t[Ra] = null;
            }
        };
        function al(e) {
            this._internalRoot = e;
        }
        al.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Kc();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var a = 0; a < Fn.length && t !== 0 && t < Fn[a].priority; a++);
                Fn.splice(a, 0, e), a === 0 && Up(e);
            }
        };
        var Hp = n.version;
        if (Hp !== "19.2.5") throw Error(l(527, Hp, "19.2.5"));
        G.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
            return e = g(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var Kv = {
            bundleType: 0,
            version: "19.2.5",
            rendererPackageName: "react-dom",
            currentDispatcherRef: M,
            reconcilerVersion: "19.2.5"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!il.isDisabled && il.supportsFiber) try {
                Ci = il.inject(Kv), wt = il;
            } catch  {}
        }
        return Sr.createRoot = function(e, t) {
            if (!u(e)) throw Error(l(299));
            var a = !1, s = "", o = Vf, c = Kf, m = Yf;
            return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = xp(e, 1, !1, null, null, a, s, null, o, c, m, Mp), e[Ra] = t.current, Ou(e), new Yu(t);
        }, Sr.hydrateRoot = function(e, t, a) {
            if (!u(e)) throw Error(l(299));
            var s = !1, o = "", c = Vf, m = Kf, y = Yf, _ = null;
            return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (m = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (_ = a.formState)), t = xp(e, 1, !0, t, a ?? null, s, o, _, c, m, y, Mp), t.context = Rp(null), a = t.current, s = Ot(), s = Ll(s), o = Hn(s), o.callback = null, Bn(a, o, s), a = s, t.current.lanes = a, ji(t, a), tn(t), e[Ra] = t.current, Ou(e), new al(t);
        }, Sr.version = "19.2.5", Sr;
    }
    var Xp;
    function a0() {
        if (Xp) return Ju.exports;
        Xp = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), Ju.exports = n0(), Ju.exports;
    }
    var i0 = a0();
    var Wp = "popstate";
    function Jp(i) {
        return typeof i == "object" && i != null && "pathname" in i && "search" in i && "hash" in i && "state" in i && "key" in i;
    }
    function r0(i = {}) {
        function n(l, u) {
            let h = u.state?.masked, { pathname: f, search: d, hash: p } = h || l.location;
            return uc("", {
                pathname: f,
                search: d,
                hash: p
            }, u.state && u.state.usr || null, u.state && u.state.key || "default", h ? {
                pathname: l.location.pathname,
                search: l.location.search,
                hash: l.location.hash
            } : void 0);
        }
        function r(l, u) {
            return typeof u == "string" ? u : kr(u);
        }
        return l0(n, r, null, i);
    }
    function Me(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function It(i, n) {
        if (!i) {
            typeof console < "u" && console.warn(n);
            try {
                throw new Error(n);
            } catch  {}
        }
    }
    function s0() {
        return Math.random().toString(36).substring(2, 10);
    }
    function Qp(i, n) {
        return {
            usr: i.state,
            key: i.key,
            idx: n,
            masked: i.unstable_mask ? {
                pathname: i.pathname,
                search: i.search,
                hash: i.hash
            } : void 0
        };
    }
    function uc(i, n, r = null, l, u) {
        return {
            pathname: typeof i == "string" ? i : i.pathname,
            search: "",
            hash: "",
            ...typeof n == "string" ? Ti(n) : n,
            state: r,
            key: n && n.key || l || s0(),
            unstable_mask: u
        };
    }
    function kr({ pathname: i = "/", search: n = "", hash: r = "" }) {
        return n && n !== "?" && (i += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (i += r.charAt(0) === "#" ? r : "#" + r), i;
    }
    function Ti(i) {
        let n = {};
        if (i) {
            let r = i.indexOf("#");
            r >= 0 && (n.hash = i.substring(r), i = i.substring(0, r));
            let l = i.indexOf("?");
            l >= 0 && (n.search = i.substring(l), i = i.substring(0, l)), i && (n.pathname = i);
        }
        return n;
    }
    function l0(i, n, r, l = {}) {
        let { window: u = document.defaultView, v5Compat: h = !1 } = l, f = u.history, d = "POP", p = null, g = b();
        g == null && (g = 0, f.replaceState({
            ...f.state,
            idx: g
        }, ""));
        function b() {
            return (f.state || {
                idx: null
            }).idx;
        }
        function v() {
            d = "POP";
            let k = b(), B = k == null ? null : k - g;
            g = k, p && p({
                action: d,
                location: D.location,
                delta: B
            });
        }
        function S(k, B) {
            d = "PUSH";
            let $ = Jp(k) ? k : uc(D.location, k, B);
            g = b() + 1;
            let z = Qp($, g), V = D.createHref($.unstable_mask || $);
            try {
                f.pushState(z, "", V);
            } catch (te) {
                if (te instanceof DOMException && te.name === "DataCloneError") throw te;
                u.location.assign(V);
            }
            h && p && p({
                action: d,
                location: D.location,
                delta: 1
            });
        }
        function E(k, B) {
            d = "REPLACE";
            let $ = Jp(k) ? k : uc(D.location, k, B);
            g = b();
            let z = Qp($, g), V = D.createHref($.unstable_mask || $);
            f.replaceState(z, "", V), h && p && p({
                action: d,
                location: D.location,
                delta: 0
            });
        }
        function N(k) {
            return o0(k);
        }
        let D = {
            get action () {
                return d;
            },
            get location () {
                return i(u, f);
            },
            listen (k) {
                if (p) throw new Error("A history only accepts one active listener");
                return u.addEventListener(Wp, v), p = k, ()=>{
                    u.removeEventListener(Wp, v), p = null;
                };
            },
            createHref (k) {
                return n(u, k);
            },
            createURL: N,
            encodeLocation (k) {
                let B = N(k);
                return {
                    pathname: B.pathname,
                    search: B.search,
                    hash: B.hash
                };
            },
            push: S,
            replace: E,
            go (k) {
                return f.go(k);
            }
        };
        return D;
    }
    function o0(i, n = !1) {
        let r = "http://localhost";
        typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Me(r, "No window.location.(origin|href) available to create URL");
        let l = typeof i == "string" ? i : kr(i);
        return l = l.replace(/ $/, "%20"), !n && l.startsWith("//") && (l = r + l), new URL(l, r);
    }
    function Lm(i, n, r = "/") {
        return u0(i, n, r, !1);
    }
    function u0(i, n, r, l) {
        let u = typeof n == "string" ? Ti(n) : n, h = On(u.pathname || "/", r);
        if (h == null) return null;
        let f = Mm(i);
        c0(f);
        let d = null;
        for(let p = 0; d == null && p < f.length; ++p){
            let g = _0(h);
            d = b0(f[p], g, l);
        }
        return d;
    }
    function Mm(i, n = [], r = [], l = "", u = !1) {
        let h = (f, d, p = u, g)=>{
            let b = {
                relativePath: g === void 0 ? f.path || "" : g,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: d,
                route: f
            };
            if (b.relativePath.startsWith("/")) {
                if (!b.relativePath.startsWith(l) && p) return;
                Me(b.relativePath.startsWith(l), `Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), b.relativePath = b.relativePath.slice(l.length);
            }
            let v = sn([
                l,
                b.relativePath
            ]), S = r.concat(b);
            f.children && f.children.length > 0 && (Me(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), Mm(f.children, n, S, v, p)), !(f.path == null && !f.index) && n.push({
                path: v,
                score: y0(v, f.index),
                routesMeta: S
            });
        };
        return i.forEach((f, d)=>{
            if (f.path === "" || !f.path?.includes("?")) h(f, d);
            else for (let p of Hm(f.path))h(f, d, !0, p);
        }), n;
    }
    function Hm(i) {
        let n = i.split("/");
        if (n.length === 0) return [];
        let [r, ...l] = n, u = r.endsWith("?"), h = r.replace(/\?$/, "");
        if (l.length === 0) return u ? [
            h,
            ""
        ] : [
            h
        ];
        let f = Hm(l.join("/")), d = [];
        return d.push(...f.map((p)=>p === "" ? h : [
                h,
                p
            ].join("/"))), u && d.push(...f), d.map((p)=>i.startsWith("/") && p === "" ? "/" : p);
    }
    function c0(i) {
        i.sort((n, r)=>n.score !== r.score ? r.score - n.score : v0(n.routesMeta.map((l)=>l.childrenIndex), r.routesMeta.map((l)=>l.childrenIndex)));
    }
    var h0 = /^:[\w-]+$/, f0 = 3, d0 = 2, p0 = 1, m0 = 10, g0 = -2, Zp = (i)=>i === "*";
    function y0(i, n) {
        let r = i.split("/"), l = r.length;
        return r.some(Zp) && (l += g0), n && (l += d0), r.filter((u)=>!Zp(u)).reduce((u, h)=>u + (h0.test(h) ? f0 : h === "" ? p0 : m0), l);
    }
    function v0(i, n) {
        return i.length === n.length && i.slice(0, -1).every((l, u)=>l === n[u]) ? i[i.length - 1] - n[n.length - 1] : 0;
    }
    function b0(i, n, r = !1) {
        let { routesMeta: l } = i, u = {}, h = "/", f = [];
        for(let d = 0; d < l.length; ++d){
            let p = l[d], g = d === l.length - 1, b = h === "/" ? n : n.slice(h.length) || "/", v = yl({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: g
            }, b), S = p.route;
            if (!v && g && r && !l[l.length - 1].route.index && (v = yl({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, b)), !v) return null;
            Object.assign(u, v.params), f.push({
                params: u,
                pathname: sn([
                    h,
                    v.pathname
                ]),
                pathnameBase: A0(sn([
                    h,
                    v.pathnameBase
                ])),
                route: S
            }), v.pathnameBase !== "/" && (h = sn([
                h,
                v.pathnameBase
            ]));
        }
        return f;
    }
    function yl(i, n) {
        typeof i == "string" && (i = {
            path: i,
            caseSensitive: !1,
            end: !0
        });
        let [r, l] = w0(i.path, i.caseSensitive, i.end), u = n.match(r);
        if (!u) return null;
        let h = u[0], f = h.replace(/(.)\/+$/, "$1"), d = u.slice(1);
        return {
            params: l.reduce((g, { paramName: b, isOptional: v }, S)=>{
                if (b === "*") {
                    let N = d[S] || "";
                    f = h.slice(0, h.length - N.length).replace(/(.)\/+$/, "$1");
                }
                const E = d[S];
                return v && !E ? g[b] = void 0 : g[b] = (E || "").replace(/%2F/g, "/"), g;
            }, {}),
            pathname: h,
            pathnameBase: f,
            pattern: i
        };
    }
    function w0(i, n = !1, r = !0) {
        It(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
        let l = [], u = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, d, p, g, b)=>{
            if (l.push({
                paramName: d,
                isOptional: p != null
            }), p) {
                let v = b.charAt(g + f.length);
                return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
            }
            return "/([^\\/]+)";
        }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
        return i.endsWith("*") ? (l.push({
            paramName: "*"
        }), u += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? u += "\\/*$" : i !== "" && i !== "/" && (u += "(?:(?=\\/|$))"), [
            new RegExp(u, n ? void 0 : "i"),
            l
        ];
    }
    function _0(i) {
        try {
            return i.split("/").map((n)=>decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
        } catch (n) {
            return It(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`), i;
        }
    }
    function On(i, n) {
        if (n === "/") return i;
        if (!i.toLowerCase().startsWith(n.toLowerCase())) return null;
        let r = n.endsWith("/") ? n.length - 1 : n.length, l = i.charAt(r);
        return l && l !== "/" ? null : i.slice(r) || "/";
    }
    var S0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    function E0(i, n = "/") {
        let { pathname: r, search: l = "", hash: u = "" } = typeof i == "string" ? Ti(i) : i, h;
        return r ? (r = r.replace(/\/\/+/g, "/"), r.startsWith("/") ? h = Fp(r.substring(1), "/") : h = Fp(r, n)) : h = n, {
            pathname: h,
            search: x0(l),
            hash: R0(u)
        };
    }
    function Fp(i, n) {
        let r = n.replace(/\/+$/, "").split("/");
        return i.split("/").forEach((u)=>{
            u === ".." ? r.length > 1 && r.pop() : u !== "." && r.push(u);
        }), r.length > 1 ? r.join("/") : "/";
    }
    function ec(i, n, r, l) {
        return `Cannot include a '${i}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function T0(i) {
        return i.filter((n, r)=>r === 0 || n.route.path && n.route.path.length > 0);
    }
    function xc(i) {
        let n = T0(i);
        return n.map((r, l)=>l === n.length - 1 ? r.pathname : r.pathnameBase);
    }
    function Sl(i, n, r, l = !1) {
        let u;
        typeof i == "string" ? u = Ti(i) : (u = {
            ...i
        }, Me(!u.pathname || !u.pathname.includes("?"), ec("?", "pathname", "search", u)), Me(!u.pathname || !u.pathname.includes("#"), ec("#", "pathname", "hash", u)), Me(!u.search || !u.search.includes("#"), ec("#", "search", "hash", u)));
        let h = i === "" || u.pathname === "", f = h ? "/" : u.pathname, d;
        if (f == null) d = r;
        else {
            let v = n.length - 1;
            if (!l && f.startsWith("..")) {
                let S = f.split("/");
                for(; S[0] === "..";)S.shift(), v -= 1;
                u.pathname = S.join("/");
            }
            d = v >= 0 ? n[v] : "/";
        }
        let p = E0(u, d), g = f && f !== "/" && f.endsWith("/"), b = (h || f === ".") && r.endsWith("/");
        return !p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p;
    }
    var sn = (i)=>i.join("/").replace(/\/\/+/g, "/"), A0 = (i)=>i.replace(/\/+$/, "").replace(/^\/*/, "/"), x0 = (i)=>!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, R0 = (i)=>!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, O0 = class {
        constructor(i, n, r, l = !1){
            this.status = i, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
    };
    function C0(i) {
        return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
    }
    function k0(i) {
        return i.map((n)=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
    }
    var Bm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    function qm(i, n) {
        let r = i;
        if (typeof r != "string" || !S0.test(r)) return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
        let l = r, u = !1;
        if (Bm) try {
            let h = new URL(window.location.href), f = r.startsWith("//") ? new URL(h.protocol + r) : new URL(r), d = On(f.pathname, n);
            f.origin === h.origin && d != null ? r = d + f.search + f.hash : u = !0;
        } catch  {
            It(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        return {
            absoluteURL: l,
            isExternal: u,
            to: r
        };
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    var Pm = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Pm);
    var j0 = [
        "GET",
        ...Pm
    ];
    new Set(j0);
    var Ai = A.createContext(null);
    Ai.displayName = "DataRouter";
    var El = A.createContext(null);
    El.displayName = "DataRouterState";
    var $m = A.createContext(!1);
    function N0() {
        return A.useContext($m);
    }
    var Gm = A.createContext({
        isTransitioning: !1
    });
    Gm.displayName = "ViewTransition";
    var D0 = A.createContext(new Map);
    D0.displayName = "Fetchers";
    var U0 = A.createContext(null);
    U0.displayName = "Await";
    var jt = A.createContext(null);
    jt.displayName = "Navigation";
    var Hr = A.createContext(null);
    Hr.displayName = "Location";
    var Qt = A.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    Qt.displayName = "Route";
    var Rc = A.createContext(null);
    Rc.displayName = "RouteError";
    var Im = "REACT_ROUTER_ERROR", z0 = "REDIRECT", L0 = "ROUTE_ERROR_RESPONSE";
    function M0(i) {
        if (i.startsWith(`${Im}:${z0}:{`)) try {
            let n = JSON.parse(i.slice(28));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.location == "string" && typeof n.reloadDocument == "boolean" && typeof n.replace == "boolean") return n;
        } catch  {}
    }
    function H0(i) {
        if (i.startsWith(`${Im}:${L0}:{`)) try {
            let n = JSON.parse(i.slice(40));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string") return new O0(n.status, n.statusText, n.data);
        } catch  {}
    }
    function B0(i, { relative: n } = {}) {
        Me(xi(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: r, navigator: l } = A.useContext(jt), { hash: u, pathname: h, search: f } = Br(i, {
            relative: n
        }), d = h;
        return r !== "/" && (d = h === "/" ? r : sn([
            r,
            h
        ])), l.createHref({
            pathname: d,
            search: f,
            hash: u
        });
    }
    function xi() {
        return A.useContext(Hr) != null;
    }
    Nt = function() {
        return Me(xi(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(Hr).location;
    };
    var Vm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function Km(i) {
        A.useContext(jt).static || A.useLayoutEffect(i);
    }
    Oc = function() {
        let { isDataRoute: i } = A.useContext(Qt);
        return i ? Z0() : q0();
    };
    function q0() {
        Me(xi(), "useNavigate() may be used only in the context of a <Router> component.");
        let i = A.useContext(Ai), { basename: n, navigator: r } = A.useContext(jt), { matches: l } = A.useContext(Qt), { pathname: u } = Nt(), h = JSON.stringify(xc(l)), f = A.useRef(!1);
        return Km(()=>{
            f.current = !0;
        }), A.useCallback((p, g = {})=>{
            if (It(f.current, Vm), !f.current) return;
            if (typeof p == "number") {
                r.go(p);
                return;
            }
            let b = Sl(p, JSON.parse(h), u, g.relative === "path");
            i == null && n !== "/" && (b.pathname = b.pathname === "/" ? n : sn([
                n,
                b.pathname
            ])), (g.replace ? r.replace : r.push)(b, g.state, g);
        }, [
            n,
            r,
            h,
            u,
            i
        ]);
    }
    A.createContext(null);
    EE = function() {
        let { matches: i } = A.useContext(Qt), n = i[i.length - 1];
        return n ? n.params : {};
    };
    function Br(i, { relative: n } = {}) {
        let { matches: r } = A.useContext(Qt), { pathname: l } = Nt(), u = JSON.stringify(xc(r));
        return A.useMemo(()=>Sl(i, JSON.parse(u), l, n === "path"), [
            i,
            u,
            l,
            n
        ]);
    }
    function P0(i, n) {
        return Ym(i, n);
    }
    function Ym(i, n, r) {
        Me(xi(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: l } = A.useContext(jt), { matches: u } = A.useContext(Qt), h = u[u.length - 1], f = h ? h.params : {}, d = h ? h.pathname : "/", p = h ? h.pathnameBase : "/", g = h && h.route;
        {
            let k = g && g.path || "";
            Wm(d, !g || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`);
        }
        let b = Nt(), v;
        if (n) {
            let k = typeof n == "string" ? Ti(n) : n;
            Me(p === "/" || k.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`), v = k;
        } else v = b;
        let S = v.pathname || "/", E = S;
        if (p !== "/") {
            let k = p.replace(/^\//, "").split("/");
            E = "/" + S.replace(/^\//, "").split("/").slice(k.length).join("/");
        }
        let N = Lm(i, {
            pathname: E
        });
        It(g || N != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `), It(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let D = K0(N && N.map((k)=>Object.assign({}, k, {
                params: Object.assign({}, f, k.params),
                pathname: sn([
                    p,
                    l.encodeLocation ? l.encodeLocation(k.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : k.pathname
                ]),
                pathnameBase: k.pathnameBase === "/" ? p : sn([
                    p,
                    l.encodeLocation ? l.encodeLocation(k.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : k.pathnameBase
                ])
            })), u, r);
        return n && D ? A.createElement(Hr.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    unstable_mask: void 0,
                    ...v
                },
                navigationType: "POP"
            }
        }, D) : D;
    }
    function $0() {
        let i = Q0(), n = C0(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), r = i instanceof Error ? i.stack : null, l = "rgba(200,200,200, 0.5)", u = {
            padding: "0.5rem",
            backgroundColor: l
        }, h = {
            padding: "2px 4px",
            backgroundColor: l
        }, f = null;
        return console.error("Error handled by React Router default ErrorBoundary:", i), f = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
            style: h
        }, "ErrorBoundary"), " or", " ", A.createElement("code", {
            style: h
        }, "errorElement"), " prop on your route.")), A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, n), r ? A.createElement("pre", {
            style: u
        }, r) : null, f);
    }
    var G0 = A.createElement($0, null), Xm = class extends A.Component {
        constructor(i){
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            };
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            };
        }
        static getDerivedStateFromProps(i, n) {
            return n.location !== i.location || n.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : n.error,
                location: n.location,
                revalidation: i.revalidation || n.revalidation
            };
        }
        componentDidCatch(i, n) {
            this.props.onError ? this.props.onError(i, n) : console.error("React Router caught the following error during render", i);
        }
        render() {
            let i = this.state.error;
            if (this.context && typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
                const r = H0(i.digest);
                r && (i = r);
            }
            let n = i !== void 0 ? A.createElement(Qt.Provider, {
                value: this.props.routeContext
            }, A.createElement(Rc.Provider, {
                value: i,
                children: this.props.component
            })) : this.props.children;
            return this.context ? A.createElement(I0, {
                error: i
            }, n) : n;
        }
    };
    Xm.contextType = $m;
    var tc = new WeakMap;
    function I0({ children: i, error: n }) {
        let { basename: r } = A.useContext(jt);
        if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
            let l = M0(n.digest);
            if (l) {
                let u = tc.get(n);
                if (u) throw u;
                let h = qm(l.location, r);
                if (Bm && !tc.get(n)) if (h.isExternal || l.reloadDocument) window.location.href = h.absoluteURL || h.to;
                else {
                    const f = Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to, {
                            replace: l.replace
                        }));
                    throw tc.set(n, f), f;
                }
                return A.createElement("meta", {
                    httpEquiv: "refresh",
                    content: `0;url=${h.absoluteURL || h.to}`
                });
            }
        }
        return i;
    }
    function V0({ routeContext: i, match: n, children: r }) {
        let l = A.useContext(Ai);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), A.createElement(Qt.Provider, {
            value: i
        }, r);
    }
    function K0(i, n = [], r) {
        let l = r?.state;
        if (i == null) {
            if (!l) return null;
            if (l.errors) i = l.matches;
            else if (n.length === 0 && !l.initialized && l.matches.length > 0) i = l.matches;
            else return null;
        }
        let u = i, h = l?.errors;
        if (h != null) {
            let b = u.findIndex((v)=>v.route.id && h?.[v.route.id] !== void 0);
            Me(b >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), u = u.slice(0, Math.min(u.length, b + 1));
        }
        let f = !1, d = -1;
        if (r && l) {
            f = l.renderFallback;
            for(let b = 0; b < u.length; b++){
                let v = u[b];
                if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (d = b), v.route.id) {
                    let { loaderData: S, errors: E } = l, N = v.route.loader && !S.hasOwnProperty(v.route.id) && (!E || E[v.route.id] === void 0);
                    if (v.route.lazy || N) {
                        r.isStatic && (f = !0), d >= 0 ? u = u.slice(0, d + 1) : u = [
                            u[0]
                        ];
                        break;
                    }
                }
            }
        }
        let p = r?.onError, g = l && p ? (b, v)=>{
            p(b, {
                location: l.location,
                params: l.matches?.[0]?.params ?? {},
                unstable_pattern: k0(l.matches),
                errorInfo: v
            });
        } : void 0;
        return u.reduceRight((b, v, S)=>{
            let E, N = !1, D = null, k = null;
            l && (E = h && v.route.id ? h[v.route.id] : void 0, D = v.route.errorElement || G0, f && (d < 0 && S === 0 ? (Wm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, k = null) : d === S && (N = !0, k = v.route.hydrateFallbackElement || null)));
            let B = n.concat(u.slice(0, S + 1)), $ = ()=>{
                let z;
                return E ? z = D : N ? z = k : v.route.Component ? z = A.createElement(v.route.Component, null) : v.route.element ? z = v.route.element : z = b, A.createElement(V0, {
                    match: v,
                    routeContext: {
                        outlet: b,
                        matches: B,
                        isDataRoute: l != null
                    },
                    children: z
                });
            };
            return l && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? A.createElement(Xm, {
                location: l.location,
                revalidation: l.revalidation,
                component: D,
                error: E,
                children: $(),
                routeContext: {
                    outlet: null,
                    matches: B,
                    isDataRoute: !0
                },
                onError: g
            }) : $();
        }, null);
    }
    function Cc(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Y0(i) {
        let n = A.useContext(Ai);
        return Me(n, Cc(i)), n;
    }
    function X0(i) {
        let n = A.useContext(El);
        return Me(n, Cc(i)), n;
    }
    function W0(i) {
        let n = A.useContext(Qt);
        return Me(n, Cc(i)), n;
    }
    function kc(i) {
        let n = W0(i), r = n.matches[n.matches.length - 1];
        return Me(r.route.id, `${i} can only be used on routes that contain a unique "id"`), r.route.id;
    }
    function J0() {
        return kc("useRouteId");
    }
    function Q0() {
        let i = A.useContext(Rc), n = X0("useRouteError"), r = kc("useRouteError");
        return i !== void 0 ? i : n.errors?.[r];
    }
    function Z0() {
        let { router: i } = Y0("useNavigate"), n = kc("useNavigate"), r = A.useRef(!1);
        return Km(()=>{
            r.current = !0;
        }), A.useCallback(async (u, h = {})=>{
            It(r.current, Vm), r.current && (typeof u == "number" ? await i.navigate(u) : await i.navigate(u, {
                fromRouteId: n,
                ...h
            }));
        }, [
            i,
            n
        ]);
    }
    var em = {};
    function Wm(i, n, r) {
        !n && !em[i] && (em[i] = !0, It(!1, r));
    }
    A.memo(F0);
    function F0({ routes: i, future: n, state: r, isStatic: l, onError: u }) {
        return Ym(i, void 0, {
            state: r,
            isStatic: l,
            onError: u
        });
    }
    function eb({ to: i, replace: n, state: r, relative: l }) {
        Me(xi(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: u } = A.useContext(jt);
        It(!u, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: h } = A.useContext(Qt), { pathname: f } = Nt(), d = Oc(), p = Sl(i, xc(h), f, l === "path"), g = JSON.stringify(p);
        return A.useEffect(()=>{
            d(JSON.parse(g), {
                replace: n,
                state: r,
                relative: l
            });
        }, [
            d,
            g,
            l,
            n,
            r
        ]), null;
    }
    function Le(i) {
        Me(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function tb({ basename: i = "/", children: n = null, location: r, navigationType: l = "POP", navigator: u, static: h = !1, unstable_useTransitions: f }) {
        Me(!xi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = i.replace(/^\/*/, "/"), p = A.useMemo(()=>({
                basename: d,
                navigator: u,
                static: h,
                unstable_useTransitions: f,
                future: {}
            }), [
            d,
            u,
            h,
            f
        ]);
        typeof r == "string" && (r = Ti(r));
        let { pathname: g = "/", search: b = "", hash: v = "", state: S = null, key: E = "default", unstable_mask: N } = r, D = A.useMemo(()=>{
            let k = On(g, d);
            return k == null ? null : {
                location: {
                    pathname: k,
                    search: b,
                    hash: v,
                    state: S,
                    key: E,
                    unstable_mask: N
                },
                navigationType: l
            };
        }, [
            d,
            g,
            b,
            v,
            S,
            E,
            l,
            N
        ]);
        return It(D != null, `<Router basename="${d}"> is not able to match the URL "${g}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`), D == null ? null : A.createElement(jt.Provider, {
            value: p
        }, A.createElement(Hr.Provider, {
            children: n,
            value: D
        }));
    }
    function Jm({ children: i, location: n }) {
        return P0(cc(i), n);
    }
    function cc(i, n = []) {
        let r = [];
        return A.Children.forEach(i, (l, u)=>{
            if (!A.isValidElement(l)) return;
            let h = [
                ...n,
                u
            ];
            if (l.type === A.Fragment) {
                r.push.apply(r, cc(l.props.children, h));
                return;
            }
            Me(l.type === Le, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Me(!l.props.index || !l.props.children, "An index route cannot have child routes.");
            let f = {
                id: l.props.id || h.join("-"),
                caseSensitive: l.props.caseSensitive,
                element: l.props.element,
                Component: l.props.Component,
                index: l.props.index,
                path: l.props.path,
                middleware: l.props.middleware,
                loader: l.props.loader,
                action: l.props.action,
                hydrateFallbackElement: l.props.hydrateFallbackElement,
                HydrateFallback: l.props.HydrateFallback,
                errorElement: l.props.errorElement,
                ErrorBoundary: l.props.ErrorBoundary,
                hasErrorBoundary: l.props.hasErrorBoundary === !0 || l.props.ErrorBoundary != null || l.props.errorElement != null,
                shouldRevalidate: l.props.shouldRevalidate,
                handle: l.props.handle,
                lazy: l.props.lazy
            };
            l.props.children && (f.children = cc(l.props.children, h)), r.push(f);
        }), r;
    }
    var pl = "get", ml = "application/x-www-form-urlencoded";
    function Tl(i) {
        return typeof HTMLElement < "u" && i instanceof HTMLElement;
    }
    function nb(i) {
        return Tl(i) && i.tagName.toLowerCase() === "button";
    }
    function ab(i) {
        return Tl(i) && i.tagName.toLowerCase() === "form";
    }
    function ib(i) {
        return Tl(i) && i.tagName.toLowerCase() === "input";
    }
    function rb(i) {
        return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
    }
    function sb(i, n) {
        return i.button === 0 && (!n || n === "_self") && !rb(i);
    }
    function hc(i = "") {
        return new URLSearchParams(typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams ? i : Object.keys(i).reduce((n, r)=>{
            let l = i[r];
            return n.concat(Array.isArray(l) ? l.map((u)=>[
                    r,
                    u
                ]) : [
                [
                    r,
                    l
                ]
            ]);
        }, []));
    }
    function lb(i, n) {
        let r = hc(i);
        return n && n.forEach((l, u)=>{
            r.has(u) || n.getAll(u).forEach((h)=>{
                r.append(u, h);
            });
        }), r;
    }
    var rl = null;
    function ob() {
        if (rl === null) try {
            new FormData(document.createElement("form"), 0), rl = !1;
        } catch  {
            rl = !0;
        }
        return rl;
    }
    var ub = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function nc(i) {
        return i != null && !ub.has(i) ? (It(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ml}"`), null) : i;
    }
    function cb(i, n) {
        let r, l, u, h, f;
        if (ab(i)) {
            let d = i.getAttribute("action");
            l = d ? On(d, n) : null, r = i.getAttribute("method") || pl, u = nc(i.getAttribute("enctype")) || ml, h = new FormData(i);
        } else if (nb(i) || ib(i) && (i.type === "submit" || i.type === "image")) {
            let d = i.form;
            if (d == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = i.getAttribute("formaction") || d.getAttribute("action");
            if (l = p ? On(p, n) : null, r = i.getAttribute("formmethod") || d.getAttribute("method") || pl, u = nc(i.getAttribute("formenctype")) || nc(d.getAttribute("enctype")) || ml, h = new FormData(d, i), !ob()) {
                let { name: g, type: b, value: v } = i;
                if (b === "image") {
                    let S = g ? `${g}.` : "";
                    h.append(`${S}x`, "0"), h.append(`${S}y`, "0");
                } else g && h.append(g, v);
            }
        } else {
            if (Tl(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            r = pl, l = null, u = ml, f = i;
        }
        return h && u === "text/plain" && (f = h, h = void 0), {
            action: l,
            method: r.toLowerCase(),
            encType: u,
            formData: h,
            body: f
        };
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    function jc(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function Qm(i, n, r, l) {
        let u = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
        return r ? u.pathname.endsWith("/") ? u.pathname = `${u.pathname}_.${l}` : u.pathname = `${u.pathname}.${l}` : u.pathname === "/" ? u.pathname = `_root.${l}` : n && On(u.pathname, n) === "/" ? u.pathname = `${n.replace(/\/$/, "")}/_root.${l}` : u.pathname = `${u.pathname.replace(/\/$/, "")}.${l}`, u;
    }
    async function hb(i, n) {
        if (i.id in n) return n[i.id];
        try {
            let r = await import(i.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return n[i.id] = r, r;
        } catch (r) {
            return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function fb(i) {
        return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
    }
    async function db(i, n, r) {
        let l = await Promise.all(i.map(async (u)=>{
            let h = n.routes[u.route.id];
            if (h) {
                let f = await hb(h, r);
                return f.links ? f.links() : [];
            }
            return [];
        }));
        return yb(l.flat(1).filter(fb).filter((u)=>u.rel === "stylesheet" || u.rel === "preload").map((u)=>u.rel === "stylesheet" ? {
                ...u,
                rel: "prefetch",
                as: "style"
            } : {
                ...u,
                rel: "prefetch"
            }));
    }
    function tm(i, n, r, l, u, h) {
        let f = (p, g)=>r[g] ? p.route.id !== r[g].route.id : !0, d = (p, g)=>r[g].pathname !== p.pathname || r[g].route.path?.endsWith("*") && r[g].params["*"] !== p.params["*"];
        return h === "assets" ? n.filter((p, g)=>f(p, g) || d(p, g)) : h === "data" ? n.filter((p, g)=>{
            let b = l.routes[p.route.id];
            if (!b || !b.hasLoader) return !1;
            if (f(p, g) || d(p, g)) return !0;
            if (p.route.shouldRevalidate) {
                let v = p.route.shouldRevalidate({
                    currentUrl: new URL(u.pathname + u.search + u.hash, window.origin),
                    currentParams: r[0]?.params || {},
                    nextUrl: new URL(i, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof v == "boolean") return v;
            }
            return !0;
        }) : [];
    }
    function pb(i, n, { includeHydrateFallback: r } = {}) {
        return mb(i.map((l)=>{
            let u = n.routes[l.route.id];
            if (!u) return [];
            let h = [
                u.module
            ];
            return u.clientActionModule && (h = h.concat(u.clientActionModule)), u.clientLoaderModule && (h = h.concat(u.clientLoaderModule)), r && u.hydrateFallbackModule && (h = h.concat(u.hydrateFallbackModule)), u.imports && (h = h.concat(u.imports)), h;
        }).flat(1));
    }
    function mb(i) {
        return [
            ...new Set(i)
        ];
    }
    function gb(i) {
        let n = {}, r = Object.keys(i).sort();
        for (let l of r)n[l] = i[l];
        return n;
    }
    function yb(i, n) {
        let r = new Set;
        return new Set(n), i.reduce((l, u)=>{
            let h = JSON.stringify(gb(u));
            return r.has(h) || (r.add(h), l.push({
                key: h,
                link: u
            })), l;
        }, []);
    }
    function Nc() {
        let i = A.useContext(Ai);
        return jc(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
    }
    function vb() {
        let i = A.useContext(El);
        return jc(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
    }
    var Dc = A.createContext(void 0);
    Dc.displayName = "FrameworkContext";
    function Uc() {
        let i = A.useContext(Dc);
        return jc(i, "You must render this element inside a <HydratedRouter> element"), i;
    }
    function bb(i, n) {
        let r = A.useContext(Dc), [l, u] = A.useState(!1), [h, f] = A.useState(!1), { onFocus: d, onBlur: p, onMouseEnter: g, onMouseLeave: b, onTouchStart: v } = n, S = A.useRef(null);
        A.useEffect(()=>{
            if (i === "render" && f(!0), i === "viewport") {
                let D = (B)=>{
                    B.forEach(($)=>{
                        f($.isIntersecting);
                    });
                }, k = new IntersectionObserver(D, {
                    threshold: .5
                });
                return S.current && k.observe(S.current), ()=>{
                    k.disconnect();
                };
            }
        }, [
            i
        ]), A.useEffect(()=>{
            if (l) {
                let D = setTimeout(()=>{
                    f(!0);
                }, 100);
                return ()=>{
                    clearTimeout(D);
                };
            }
        }, [
            l
        ]);
        let E = ()=>{
            u(!0);
        }, N = ()=>{
            u(!1), f(!1);
        };
        return r ? i !== "intent" ? [
            h,
            S,
            {}
        ] : [
            h,
            S,
            {
                onFocus: Er(d, E),
                onBlur: Er(p, N),
                onMouseEnter: Er(g, E),
                onMouseLeave: Er(b, N),
                onTouchStart: Er(v, E)
            }
        ] : [
            !1,
            S,
            {}
        ];
    }
    function Er(i, n) {
        return (r)=>{
            i && i(r), r.defaultPrevented || n(r);
        };
    }
    function wb({ page: i, ...n }) {
        let r = N0(), { router: l } = Nc(), u = A.useMemo(()=>Lm(l.routes, i, l.basename), [
            l.routes,
            i,
            l.basename
        ]);
        return u ? r ? A.createElement(Sb, {
            page: i,
            matches: u,
            ...n
        }) : A.createElement(Eb, {
            page: i,
            matches: u,
            ...n
        }) : null;
    }
    function _b(i) {
        let { manifest: n, routeModules: r } = Uc(), [l, u] = A.useState([]);
        return A.useEffect(()=>{
            let h = !1;
            return db(i, n, r).then((f)=>{
                h || u(f);
            }), ()=>{
                h = !0;
            };
        }, [
            i,
            n,
            r
        ]), l;
    }
    function Sb({ page: i, matches: n, ...r }) {
        let l = Nt(), { future: u } = Uc(), { basename: h } = Nc(), f = A.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let d = Qm(i, h, u.unstable_trailingSlashAwareDataRequests, "rsc"), p = !1, g = [];
            for (let b of n)typeof b.route.shouldRevalidate == "function" ? p = !0 : g.push(b.route.id);
            return p && g.length > 0 && d.searchParams.set("_routes", g.join(",")), [
                d.pathname + d.search
            ];
        }, [
            h,
            u.unstable_trailingSlashAwareDataRequests,
            i,
            l,
            n
        ]);
        return A.createElement(A.Fragment, null, f.map((d)=>A.createElement("link", {
                key: d,
                rel: "prefetch",
                as: "fetch",
                href: d,
                ...r
            })));
    }
    function Eb({ page: i, matches: n, ...r }) {
        let l = Nt(), { future: u, manifest: h, routeModules: f } = Uc(), { basename: d } = Nc(), { loaderData: p, matches: g } = vb(), b = A.useMemo(()=>tm(i, n, g, h, l, "data"), [
            i,
            n,
            g,
            h,
            l
        ]), v = A.useMemo(()=>tm(i, n, g, h, l, "assets"), [
            i,
            n,
            g,
            h,
            l
        ]), S = A.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let D = new Set, k = !1;
            if (n.forEach(($)=>{
                let z = h.routes[$.route.id];
                !z || !z.hasLoader || (!b.some((V)=>V.route.id === $.route.id) && $.route.id in p && f[$.route.id]?.shouldRevalidate || z.hasClientLoader ? k = !0 : D.add($.route.id));
            }), D.size === 0) return [];
            let B = Qm(i, d, u.unstable_trailingSlashAwareDataRequests, "data");
            return k && D.size > 0 && B.searchParams.set("_routes", n.filter(($)=>D.has($.route.id)).map(($)=>$.route.id).join(",")), [
                B.pathname + B.search
            ];
        }, [
            d,
            u.unstable_trailingSlashAwareDataRequests,
            p,
            l,
            h,
            b,
            n,
            i,
            f
        ]), E = A.useMemo(()=>pb(v, h), [
            v,
            h
        ]), N = _b(v);
        return A.createElement(A.Fragment, null, S.map((D)=>A.createElement("link", {
                key: D,
                rel: "prefetch",
                as: "fetch",
                href: D,
                ...r
            })), E.map((D)=>A.createElement("link", {
                key: D,
                rel: "modulepreload",
                href: D,
                ...r
            })), N.map(({ key: D, link: k })=>A.createElement("link", {
                key: D,
                nonce: r.nonce,
                ...k,
                crossOrigin: k.crossOrigin ?? r.crossOrigin
            })));
    }
    function Tb(...i) {
        return (n)=>{
            i.forEach((r)=>{
                typeof r == "function" ? r(n) : r != null && (r.current = n);
            });
        };
    }
    var Ab = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Ab && (window.__reactRouterVersion = "7.14.0");
    } catch  {}
    function xb({ basename: i, children: n, unstable_useTransitions: r, window: l }) {
        let u = A.useRef();
        u.current == null && (u.current = r0({
            window: l,
            v5Compat: !0
        }));
        let h = u.current, [f, d] = A.useState({
            action: h.action,
            location: h.location
        }), p = A.useCallback((g)=>{
            r === !1 ? d(g) : A.startTransition(()=>d(g));
        }, [
            r
        ]);
        return A.useLayoutEffect(()=>h.listen(p), [
            h,
            p
        ]), A.createElement(tb, {
            basename: i,
            children: n,
            location: f.location,
            navigationType: f.action,
            navigator: h,
            unstable_useTransitions: r
        });
    }
    let Zm;
    Zm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    Rn = A.forwardRef(function({ onClick: n, discover: r = "render", prefetch: l = "none", relative: u, reloadDocument: h, replace: f, unstable_mask: d, state: p, target: g, to: b, preventScrollReset: v, viewTransition: S, unstable_defaultShouldRevalidate: E, ...N }, D) {
        let { basename: k, navigator: B, unstable_useTransitions: $ } = A.useContext(jt), z = typeof b == "string" && Zm.test(b), V = qm(b, k);
        b = V.to;
        let te = B0(b, {
            relative: u
        }), ne = Nt(), K = null;
        if (d) {
            let Re = Sl(d, [], ne.unstable_mask ? ne.unstable_mask.pathname : "/", !0);
            k !== "/" && (Re.pathname = Re.pathname === "/" ? k : sn([
                k,
                Re.pathname
            ])), K = B.createHref(Re);
        }
        let [Ne, Se, Dt] = bb(l, N), ot = kb(b, {
            replace: f,
            unstable_mask: d,
            state: p,
            target: g,
            preventScrollReset: v,
            relative: u,
            viewTransition: S,
            unstable_defaultShouldRevalidate: E,
            unstable_useTransitions: $
        });
        function Je(Re) {
            n && n(Re), Re.defaultPrevented || ot(Re);
        }
        let ie = !(V.isExternal || h), be = A.createElement("a", {
            ...N,
            ...Dt,
            href: (ie ? K : void 0) || V.absoluteURL || te,
            onClick: ie ? Je : n,
            ref: Tb(D, Se),
            target: g,
            "data-discover": !z && r === "render" ? "true" : void 0
        });
        return Ne && !z ? A.createElement(A.Fragment, null, be, A.createElement(wb, {
            page: te
        })) : be;
    });
    Rn.displayName = "Link";
    var Rb = A.forwardRef(function({ "aria-current": n = "page", caseSensitive: r = !1, className: l = "", end: u = !1, style: h, to: f, viewTransition: d, children: p, ...g }, b) {
        let v = Br(f, {
            relative: g.relative
        }), S = Nt(), E = A.useContext(El), { navigator: N, basename: D } = A.useContext(jt), k = E != null && zb(v) && d === !0, B = N.encodeLocation ? N.encodeLocation(v).pathname : v.pathname, $ = S.pathname, z = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
        r || ($ = $.toLowerCase(), z = z ? z.toLowerCase() : null, B = B.toLowerCase()), z && D && (z = On(z, D) || z);
        const V = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
        let te = $ === B || !u && $.startsWith(B) && $.charAt(V) === "/", ne = z != null && (z === B || !u && z.startsWith(B) && z.charAt(B.length) === "/"), K = {
            isActive: te,
            isPending: ne,
            isTransitioning: k
        }, Ne = te ? n : void 0, Se;
        typeof l == "function" ? Se = l(K) : Se = [
            l,
            te ? "active" : null,
            ne ? "pending" : null,
            k ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Dt = typeof h == "function" ? h(K) : h;
        return A.createElement(Rn, {
            ...g,
            "aria-current": Ne,
            className: Se,
            ref: b,
            style: Dt,
            to: f,
            viewTransition: d
        }, typeof p == "function" ? p(K) : p);
    });
    Rb.displayName = "NavLink";
    var Ob = A.forwardRef(({ discover: i = "render", fetcherKey: n, navigate: r, reloadDocument: l, replace: u, state: h, method: f = pl, action: d, onSubmit: p, relative: g, preventScrollReset: b, viewTransition: v, unstable_defaultShouldRevalidate: S, ...E }, N)=>{
        let { unstable_useTransitions: D } = A.useContext(jt), k = Db(), B = Ub(d, {
            relative: g
        }), $ = f.toLowerCase() === "get" ? "get" : "post", z = typeof d == "string" && Zm.test(d), V = (te)=>{
            if (p && p(te), te.defaultPrevented) return;
            te.preventDefault();
            let ne = te.nativeEvent.submitter, K = ne?.getAttribute("formmethod") || f, Ne = ()=>k(ne || te.currentTarget, {
                    fetcherKey: n,
                    method: K,
                    navigate: r,
                    replace: u,
                    state: h,
                    relative: g,
                    preventScrollReset: b,
                    viewTransition: v,
                    unstable_defaultShouldRevalidate: S
                });
            D && r !== !1 ? A.startTransition(()=>Ne()) : Ne();
        };
        return A.createElement("form", {
            ref: N,
            method: $,
            action: B,
            onSubmit: l ? p : V,
            ...E,
            "data-discover": !z && i === "render" ? "true" : void 0
        });
    });
    Ob.displayName = "Form";
    function Cb(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Fm(i) {
        let n = A.useContext(Ai);
        return Me(n, Cb(i)), n;
    }
    function kb(i, { target: n, replace: r, unstable_mask: l, state: u, preventScrollReset: h, relative: f, viewTransition: d, unstable_defaultShouldRevalidate: p, unstable_useTransitions: g } = {}) {
        let b = Oc(), v = Nt(), S = Br(i, {
            relative: f
        });
        return A.useCallback((E)=>{
            if (sb(E, n)) {
                E.preventDefault();
                let N = r !== void 0 ? r : kr(v) === kr(S), D = ()=>b(i, {
                        replace: N,
                        unstable_mask: l,
                        state: u,
                        preventScrollReset: h,
                        relative: f,
                        viewTransition: d,
                        unstable_defaultShouldRevalidate: p
                    });
                g ? A.startTransition(()=>D()) : D();
            }
        }, [
            v,
            b,
            S,
            r,
            l,
            u,
            n,
            i,
            h,
            f,
            d,
            p,
            g
        ]);
    }
    TE = function(i) {
        It(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
        let n = A.useRef(hc(i)), r = A.useRef(!1), l = Nt(), u = A.useMemo(()=>lb(l.search, r.current ? null : n.current), [
            l.search
        ]), h = Oc(), f = A.useCallback((d, p)=>{
            const g = hc(typeof d == "function" ? d(new URLSearchParams(u)) : d);
            r.current = !0, h("?" + g, p);
        }, [
            h,
            u
        ]);
        return [
            u,
            f
        ];
    };
    var jb = 0, Nb = ()=>`__${String(++jb)}__`;
    function Db() {
        let { router: i } = Fm("useSubmit"), { basename: n } = A.useContext(jt), r = J0(), l = i.fetch, u = i.navigate;
        return A.useCallback(async (h, f = {})=>{
            let { action: d, method: p, encType: g, formData: b, body: v } = cb(h, n);
            if (f.navigate === !1) {
                let S = f.fetcherKey || Nb();
                await l(S, r, f.action || d, {
                    unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                    preventScrollReset: f.preventScrollReset,
                    formData: b,
                    body: v,
                    formMethod: f.method || p,
                    formEncType: f.encType || g,
                    flushSync: f.flushSync
                });
            } else await u(f.action || d, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: b,
                body: v,
                formMethod: f.method || p,
                formEncType: f.encType || g,
                replace: f.replace,
                state: f.state,
                fromRouteId: r,
                flushSync: f.flushSync,
                viewTransition: f.viewTransition
            });
        }, [
            l,
            u,
            n,
            r
        ]);
    }
    function Ub(i, { relative: n } = {}) {
        let { basename: r } = A.useContext(jt), l = A.useContext(Qt);
        Me(l, "useFormAction must be used inside a RouteContext");
        let [u] = l.matches.slice(-1), h = {
            ...Br(i || ".", {
                relative: n
            })
        }, f = Nt();
        if (i == null) {
            h.search = f.search;
            let d = new URLSearchParams(h.search), p = d.getAll("index");
            if (p.some((b)=>b === "")) {
                d.delete("index"), p.filter((v)=>v).forEach((v)=>d.append("index", v));
                let b = d.toString();
                h.search = b ? `?${b}` : "";
            }
        }
        return (!i || i === ".") && u.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (h.pathname = h.pathname === "/" ? r : sn([
            r,
            h.pathname
        ])), kr(h);
    }
    function zb(i, { relative: n } = {}) {
        let r = A.useContext(Gm);
        Me(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: l } = Fm("useViewTransitionState"), u = Br(i, {
            relative: n
        });
        if (!r.isTransitioning) return !1;
        let h = On(r.currentLocation.pathname, l) || r.currentLocation.pathname, f = On(r.nextLocation.pathname, l) || r.nextLocation.pathname;
        return yl(u.pathname, f) != null || yl(u.pathname, h) != null;
    }
    let eg, ac, Lb, nm, am, Mb, Hb, Bb, qb, tg, Pb;
    eg = A.createContext(null);
    ac = ()=>{
        const i = new Date().getHours();
        return i >= 6 && i < 18 ? "light" : "dark";
    };
    Lb = [
        "blue",
        "red",
        "green",
        "purple",
        "orange"
    ];
    nm = (i)=>{
        const n = document.cookie.match(new RegExp("(^| )" + i + "=([^;]+)"));
        return n ? decodeURIComponent(n[2]) : null;
    };
    am = (i, n)=>{
        document.cookie = `${i}=${encodeURIComponent(n)};path=/;max-age=31536000;SameSite=Lax`;
    };
    Mb = (i)=>{
        document.cookie = `${i}=;path=/;max-age=0`;
    };
    Hb = ({ children: i })=>{
        const [n, r] = A.useState(()=>{
            const p = nm("themeMode");
            return p === "light" || p === "dark" || p === "auto" ? p : "auto";
        }), [l, u] = A.useState(()=>n === "auto" ? ac() : n), [h, f] = A.useState(()=>{
            const p = nm("colorTheme");
            return Lb.includes(p ?? "") ? p : "blue";
        });
        A.useEffect(()=>{
            if (n !== "auto") {
                u(n);
                return;
            }
            u(ac());
            const p = setInterval(()=>{
                u(ac());
            }, 6e4);
            return ()=>clearInterval(p);
        }, [
            n
        ]), A.useEffect(()=>{
            document.documentElement.setAttribute("data-theme", l);
        }, [
            l
        ]), A.useEffect(()=>{
            document.documentElement.setAttribute("data-color", h), am("colorTheme", h);
        }, [
            h
        ]), A.useEffect(()=>{
            am("themeMode", n), Mb("theme");
        }, [
            n
        ]);
        const d = ()=>{
            r((p)=>p === "auto" ? "light" : p === "light" ? "dark" : "auto");
        };
        return w.jsx(eg.Provider, {
            value: {
                theme: l,
                mode: n,
                toggleTheme: d,
                colorTheme: h,
                setColorTheme: f
            },
            children: i
        });
    };
    Bb = ()=>{
        const i = A.useContext(eg);
        if (!i) throw new Error("useTheme must be used within ThemeProvider");
        return i;
    };
    qb = {
        ko: {
            nav: {
                home: "홈"
            },
            site: {
                nav: {
                    convert: "변환",
                    mdEditor: "마크다운 에디터",
                    hwpEditor: "HWP 에디터",
                    businessPlan: "사업계획서",
                    templates: "템플릿",
                    documents: "내 문서",
                    viewer: "HWP 뷰어",
                    generator: "문서 작성",
                    guide: "가이드",
                    aiWriter: "AI 문서 작성",
                    humanize: "AI 휴머나이징",
                    humanizeText: "문장 휴머나이징",
                    groupConvert: "변환",
                    groupEdit: "편집",
                    groupCreate: "생성",
                    groupManage: "관리",
                    pricing: "요금제"
                },
                humanize: {
                    title: "AI 문서 휴머나이징",
                    subtitle: "AI가 생성한 문서를 사람이 쓴 것처럼 자연스럽게 변환합니다",
                    dropzone: "파일을 드래그하거나 클릭하여 업로드",
                    intensity: "변환 강도",
                    intensityLight: "가벼움",
                    intensityModerate: "보통",
                    intensityAggressive: "적극적",
                    tone: "어체",
                    toneFormal: "격식체",
                    toneCasual: "반말",
                    toneAcademic: "학술체",
                    originalPreview: "원본 미리보기",
                    back: "뒤로",
                    startConvert: "변환 시작",
                    processing: "AI 휴머나이징 처리 중...",
                    compare: "비교 보기",
                    resultOnly: "결과만",
                    original: "원본",
                    humanized: "변환 결과",
                    newConversion: "새 변환",
                    serviceUnavailable: "AI 휴머나이징 서비스를 준비 중입니다. 곧 이용 가능합니다.",
                    paraSame: "동일",
                    paraChanged: "변경됨",
                    paraAdded: "추가됨",
                    paraRemoved: "삭제됨"
                },
                humanizeText: {
                    title: "문장 휴머나이징",
                    subtitle: "텍스트를 붙여넣어 문장별로 자연스럽게 변환합니다",
                    placeholder: "휴머나이징할 텍스트를 붙여넣으세요...",
                    charCount: "글자",
                    startConvert: "변환 시작",
                    reset: "초기화",
                    processing: "문장 휴머나이징 처리 중..."
                },
                pricing: {
                    title: "요금제",
                    subtitle: "HWP Web의 다양한 기능을 합리적인 가격으로 이용하세요",
                    recommended: "추천",
                    loginRequired: "로그인이 필요합니다.",
                    comingSoon: "유료 결제 기능을 준비 중입니다.",
                    compareTitle: "요금제 비교",
                    compareItem: "항목",
                    faqTitle: "자주 묻는 질문",
                    ctaTitle: "지금 시작하세요",
                    ctaDesc: "HWP Web으로 한글 문서를 웹에서 변환·편집·관리하세요",
                    ctaBtn: "무료로 시작하기",
                    freeName: "Free",
                    freeDesc: "기본 변환과 편집 기능을 무료로 체험하세요",
                    freeFeatures: "HWP/HWPX → Markdown 변환 5회/월|마크다운 에디터|문서 1개 저장|사용자 API 키로 AI 기능",
                    freeBtn: "무료 시작",
                    basicName: "Basic",
                    basicDesc: "자주 사용하는 분을 위한 합리적인 요금제",
                    basicFeatures: "변환 50회/월|AI 휴머나이징 20회/월|문서 30개 저장|HWP 에디터 + HWPX 내보내기|이메일 지원",
                    basicBtn: "Basic 시작",
                    proName: "Pro",
                    proDesc: "전문가를 위한 무제한 기능과 우선 지원",
                    proFeatures: "변환 무제한|AI 휴머나이징 무제한|문서 무제한 저장|사업계획서 + AI 문서 작성|PPTX 내보내기|카카오톡 + 이메일 지원",
                    proBtn: "Pro 시작",
                    compare: {
                        price: {
                            label: "월 요금",
                            free: "무료",
                            basic: "₩9,900",
                            pro: "₩29,900"
                        },
                        converts: {
                            label: "변환 횟수",
                            free: "5회/월",
                            basic: "50회/월",
                            pro: "무제한"
                        },
                        humanize: {
                            label: "AI 휴머나이징",
                            free: "사용자 키",
                            basic: "20회/월",
                            pro: "무제한"
                        },
                        maxLength: {
                            label: "최대 문서 길이",
                            free: "5,000자",
                            basic: "30,000자",
                            pro: "50,000자"
                        },
                        export: {
                            label: "내보내기",
                            free: "Markdown",
                            basic: "Markdown, HWPX",
                            pro: "Markdown, HWPX, PDF"
                        },
                        storage: {
                            label: "문서 저장",
                            free: "1개",
                            basic: "30개",
                            pro: "무제한"
                        },
                        support: {
                            label: "지원",
                            free: "-",
                            basic: "이메일",
                            pro: "이메일 + 카카오톡"
                        }
                    },
                    faq1: {
                        q: "무료 요금제로도 변환이 가능한가요?",
                        a: "네, 무료 요금제에서도 월 5회까지 HWP/HWPX → Markdown 변환을 이용할 수 있습니다. 마크다운 에디터도 제한 없이 사용 가능합니다."
                    },
                    faq2: {
                        q: "AI 휴머나이징은 어떤 기능인가요?",
                        a: "AI가 생성한 문서를 사람이 작성한 것처럼 자연스럽게 변환합니다. 변환 강도와 어체를 선택할 수 있으며, 원본과 결과를 문단별로 비교할 수 있습니다."
                    },
                    faq3: {
                        q: "요금제는 언제든 변경할 수 있나요?",
                        a: "네, 언제든 업그레이드 또는 다운그레이드가 가능합니다. 업그레이드 시 즉시 적용되며, 다운그레이드는 다음 결제일부터 적용됩니다."
                    },
                    faq4: {
                        q: "사용자 API 키는 어떻게 사용하나요?",
                        a: "무료 요금제에서 AI 기능을 사용하려면 본인의 Claude 또는 OpenAI API 키를 입력하면 됩니다. API 키는 브라우저에만 저장되며 서버로 전송되지 않습니다."
                    },
                    faq5: {
                        q: "환불 정책은 어떻게 되나요?",
                        a: "결제 후 7일 이내 사용 이력이 없는 경우 전액 환불이 가능합니다. 자세한 사항은 고객센터로 문의해 주세요."
                    }
                },
                home: {
                    title: "HWP Web",
                    subtitle: "한글(HWP/HWPX) 문서를 웹에서 변환·편집·관리",
                    welcome: "HWP Web에 오신 것을 환영합니다",
                    description: "HWP/HWPX 파일을 마크다운으로 변환하고, 마크다운 에디터로 편집하며, HWPX로 내보낼 수 있습니다."
                },
                convert: {
                    title: "HWP/HWPX → Markdown 변환",
                    subtitle: "HWP 또는 HWPX 파일을 업로드하여 마크다운으로 변환합니다",
                    dropzone: "파일을 드래그하거나 클릭하여 업로드",
                    dropzoneHint: ".hwp, .hwpx 파일 지원",
                    converting: "변환 중...",
                    complete: "변환 완료",
                    download: "다운로드",
                    copy: "복사",
                    copied: "복사됨!",
                    preview: "미리보기",
                    source: "소스",
                    newConversion: "새 변환",
                    aiEnhance: "AI 향상",
                    aiEnhancing: "AI 향상 중...",
                    aiEnhanceDesc: "AI를 사용하여 변환 결과를 향상시킵니다",
                    aiNotAvailable: "AI 향상 기능은 서버 설정이 필요합니다 (준비 중)",
                    original: "원본",
                    enhanced: "AI 향상"
                },
                editor: {
                    title: "마크다운 에디터",
                    subtitle: "마크다운으로 문서를 작성하고 다양한 형식으로 내보냅니다",
                    save: "저장",
                    export: "내보내기",
                    exportMd: "Markdown (.md)",
                    exportHwpx: "HWPX (.hwpx)",
                    exportHtml: "HTML (.html)",
                    exportTxt: "Text (.txt)",
                    newDocument: "새 문서",
                    untitled: "제목 없음"
                },
                hwpEditor: {
                    title: "HWP 에디터",
                    subtitle: "HWP 파일을 직접 편집하고 내보냅니다",
                    newDoc: "새 문서",
                    openFile: "파일 열기",
                    export: "내보내기",
                    exportHwp: "HWP (.hwp)",
                    exportHwpx: "HWPX (.hwpx)",
                    bold: "굵게",
                    italic: "기울임",
                    underline: "밑줄",
                    strikethrough: "취소선",
                    alignLeft: "왼쪽 정렬",
                    alignCenter: "가운데 정렬",
                    alignRight: "오른쪽 정렬",
                    alignJustify: "양쪽 정렬",
                    font: "글꼴",
                    fontSize: "글자 크기",
                    textColor: "글자 색",
                    highlight: "형광펜",
                    lineSpacing: "줄 간격",
                    indent: "들여쓰기",
                    outdent: "내어쓰기",
                    bulletList: "글머리 기호",
                    numberedList: "번호 매기기",
                    insertTable: "표 삽입",
                    insertImage: "이미지 삽입",
                    pageBreak: "쪽 나누기",
                    findReplace: "찾기/바꾸기",
                    find: "찾기",
                    replace: "바꾸기",
                    findNext: "다음 찾기",
                    replaceOne: "바꾸기",
                    replaceAllBtn: "모두 바꾸기",
                    caseSensitive: "대소문자 구분",
                    noResults: "결과 없음",
                    replaced: "개 바꿈",
                    undo: "실행취소",
                    redo: "다시실행",
                    page: "페이지",
                    zoom: "확대/축소",
                    wasmLoading: "HWP 엔진 로딩 중...",
                    wasmError: "HWP 엔진 초기화 실패",
                    clickToEdit: "문서를 클릭하여 편집을 시작하세요",
                    dropOrNew: "HWP 파일을 열거나 새 문서를 만드세요"
                },
                templates: {
                    title: "내 템플릿",
                    subtitle: "나만의 문서 템플릿을 만들고 재사용합니다",
                    create: "새 템플릿",
                    empty: "아직 템플릿이 없습니다",
                    emptyHint: "문서를 업로드하거나 직접 작성하여 템플릿을 만드세요",
                    upload: "파일 업로드",
                    uploadHint: ".hwp, .hwpx 파일을 업로드하여 자동 변환",
                    write: "직접 작성",
                    writeHint: "빈 에디터에서 마크다운으로 작성",
                    fieldHint: "채울 영역에 {{필드명}}을 입력하세요 (예: {{회사명}}, {{날짜}})",
                    detectedFields: "감지된 필드",
                    noFields: "아직 감지된 필드가 없습니다",
                    openInEditor: "에디터에서 열기",
                    save: "템플릿 저장",
                    saved: "템플릿이 저장되었습니다",
                    deleted: "템플릿이 삭제되었습니다",
                    deleteConfirm: "이 템플릿을 삭제하시겠습니까?",
                    use: "사용",
                    delete: "삭제",
                    preview: "미리보기",
                    step1: "소스 선택",
                    step2: "내용 편집",
                    step3: "미리보기 및 저장",
                    next: "다음",
                    prev: "이전",
                    titlePlaceholder: "템플릿 제목",
                    descPlaceholder: "템플릿 설명 (선택)",
                    fields: "필드",
                    export: "내보내기",
                    exportMd: "Markdown (.md)",
                    exportHwpx: "HWPX (.hwpx)",
                    notFound: "템플릿을 찾을 수 없습니다"
                },
                documents: {
                    title: "내 문서",
                    subtitle: "저장된 문서를 관리합니다",
                    empty: "저장된 문서가 없습니다",
                    delete: "삭제",
                    edit: "편집",
                    public: "공개",
                    private: "비공개"
                },
                guide: {
                    title: "사용 가이드",
                    subtitle: "HWP Web 사용 방법을 안내합니다"
                },
                aiWriter: {
                    title: "AI 문서 작성",
                    subtitle: "Claude 또는 ChatGPT API를 사용하여 AI로 문서를 생성합니다",
                    apiSetup: "AI API 설정",
                    keyHint: "API 키는 브라우저에만 저장되며 서버로 전송되지 않습니다",
                    selectType: "문서 유형 선택",
                    topicLabel: "주제 또는 내용을 입력하세요",
                    topicPlaceholder: `예: 2026년 1분기 마케팅 전략 보고서
예: 신규 SaaS 프로젝트 기획 제안서
예: AI 활용 교육 강의안`,
                    freePromptLabel: "프롬프트를 직접 입력하세요",
                    freePromptPlaceholder: `생성할 문서에 대한 상세한 설명을 입력하세요.
형식, 분량, 포함할 내용 등을 자유롭게 지정할 수 있습니다.`,
                    generate: "AI 문서 생성",
                    generating: "생성 중...",
                    stop: "중지",
                    result: "생성 결과",
                    previewTab: "미리보기",
                    markdownTab: "마크다운",
                    newDoc: "새 문서",
                    openInEditor: "에디터에서 열기",
                    saveToDb: "문서함에 저장",
                    saved: "문서가 저장되었습니다",
                    error: "AI 문서 생성에 실패했습니다"
                },
                businessPlan: {
                    title: "사업계획서",
                    subtitle: "사업계획서를 자동으로 작성합니다",
                    selectType: "사업계획서 유형 선택",
                    fillInfo: "정보 입력",
                    preview: "미리보기",
                    export: "내보내기",
                    step1: "유형 선택",
                    step2: "정보 입력",
                    step3: "미리보기",
                    step4: "내보내기",
                    next: "다음",
                    prev: "이전",
                    progress: "진행률",
                    sectionToggle: "섹션 접기/펼치기",
                    requiredField: "필수 항목",
                    downloadHwpx: "HWPX 다운로드",
                    downloadMd: "Markdown 다운로드",
                    downloadHtml: "HTML 다운로드",
                    saveToDb: "문서함에 저장",
                    openInEditor: "에디터에서 열기",
                    saved: "사업계획서가 저장되었습니다",
                    markdownTab: "마크다운",
                    previewTab: "미리보기",
                    startNew: "새로 작성"
                },
                viewer: {
                    title: "HWP 뷰어",
                    subtitle: "브라우저에서 HWP 파일을 직접 열람합니다",
                    upload: "HWP 파일 업로드",
                    uploadHint: ".hwp 파일을 드래그하거나 클릭하여 업로드",
                    loading: "WASM 모듈 로딩 중...",
                    rendering: "렌더링 중...",
                    page: "페이지",
                    of: "/",
                    zoom: "확대",
                    downloadSvg: "SVG 다운로드",
                    newFile: "새 파일",
                    prev: "이전",
                    next: "다음",
                    error: "파일을 렌더링할 수 없습니다",
                    wasmError: "WASM 모듈 초기화에 실패했습니다"
                },
                generator: {
                    title: "문서 작성",
                    subtitle: "6종 공문서를 위자드로 간편하게 작성합니다",
                    selectType: "문서 유형 선택",
                    fillInfo: "정보 입력",
                    preview: "미리보기",
                    export: "내보내기",
                    step1: "유형 선택",
                    step2: "정보 입력",
                    step3: "미리보기",
                    step4: "내보내기",
                    next: "다음",
                    prev: "이전",
                    progress: "진행률",
                    downloadHwpx: "HWPX 다운로드",
                    downloadMd: "Markdown 다운로드",
                    downloadHtml: "HTML 다운로드",
                    saveToDb: "문서함에 저장",
                    openInEditor: "에디터에서 열기",
                    saved: "문서가 저장되었습니다",
                    markdownTab: "마크다운",
                    previewTab: "미리보기",
                    startNew: "새로 작성"
                }
            },
            auth: {
                loginTitle: "로그인",
                loginSubtitle: "HWP Web에 로그인하세요",
                login: "로그인",
                logout: "로그아웃",
                signUp: "회원가입",
                signUpTitle: "회원가입",
                signUpSubtitle: "HWP Web 계정을 만드세요",
                signUpSuccess: "회원가입 완료!",
                checkEmail: "이메일을 확인하여 계정을 활성화하세요.",
                goToLogin: "로그인으로 이동",
                emailPlaceholder: "이메일",
                passwordPlaceholder: "비밀번호",
                passwordConfirmPlaceholder: "비밀번호 확인",
                displayNamePlaceholder: "이름",
                noAccount: "계정이 없으신가요?",
                hasAccount: "이미 계정이 있으신가요?",
                forgotPassword: "비밀번호를 잊으셨나요?",
                forgotPasswordTitle: "비밀번호 찾기",
                forgotPasswordSubtitle: "가입한 이메일을 입력하면 재설정 링크를 보내드립니다",
                resetEmailSent: "이메일이 전송되었습니다",
                checkEmailForReset: "이메일에서 비밀번호 재설정 링크를 확인하세요",
                backToLogin: "로그인으로 돌아가기",
                sendResetLink: "재설정 링크 보내기",
                sending: "전송 중...",
                loginError: "로그인에 실패했습니다",
                signUpError: "회원가입에 실패했습니다",
                passwordMismatch: "비밀번호가 일치하지 않습니다",
                loggingIn: "로그인 중...",
                signingUp: "가입 중...",
                myPage: "마이페이지",
                orderHistory: "주문 내역",
                editProfile: "프로필 수정",
                displayName: "이름",
                save: "저장",
                saving: "저장 중...",
                profileUpdated: "프로필이 업데이트되었습니다",
                noName: "이름 없음",
                loginWith: "로그인:",
                emailAccount: "이메일 계정",
                admin: "관리자",
                back: "뒤로"
            },
            footer: {
                tagline: "한글 문서의 웹 변환을 쉽고 빠르게",
                quickLinks: "바로가기",
                contact: "연락처"
            },
            search: {
                placeholder: "검색어를 입력하세요",
                searching: "검색 중...",
                noResults: "검색 결과가 없습니다",
                hint: "검색어를 입력하면 결과가 표시됩니다",
                blog: "블로그",
                board: "게시판",
                gallery: "갤러리"
            }
        },
        en: {
            nav: {
                home: "Home"
            },
            site: {
                nav: {
                    convert: "Convert",
                    mdEditor: "MD Editor",
                    hwpEditor: "HWP Editor",
                    businessPlan: "Biz Plan",
                    templates: "Templates",
                    documents: "My Docs",
                    viewer: "HWP Viewer",
                    generator: "Generator",
                    guide: "Guide",
                    aiWriter: "AI Writer",
                    humanize: "Humanize",
                    humanizeText: "Text Humanize",
                    groupConvert: "Convert",
                    groupEdit: "Edit",
                    groupCreate: "Create",
                    groupManage: "Manage",
                    pricing: "Pricing"
                },
                humanize: {
                    title: "AI Document Humanizer",
                    subtitle: "Transform AI-generated documents into natural human-written text",
                    dropzone: "Drag & drop or click to upload",
                    intensity: "Intensity",
                    intensityLight: "Light",
                    intensityModerate: "Moderate",
                    intensityAggressive: "Aggressive",
                    tone: "Tone",
                    toneFormal: "Formal",
                    toneCasual: "Casual",
                    toneAcademic: "Academic",
                    originalPreview: "Original Preview",
                    back: "Back",
                    startConvert: "Start Conversion",
                    processing: "Processing AI humanization...",
                    compare: "Compare",
                    resultOnly: "Result Only",
                    original: "Original",
                    humanized: "Humanized",
                    newConversion: "New Conversion",
                    serviceUnavailable: "AI humanization service is coming soon.",
                    paraSame: "Same",
                    paraChanged: "Changed",
                    paraAdded: "Added",
                    paraRemoved: "Removed"
                },
                humanizeText: {
                    title: "Text Humanizer",
                    subtitle: "Paste text to humanize sentence by sentence",
                    placeholder: "Paste text to humanize...",
                    charCount: "chars",
                    startConvert: "Start Conversion",
                    reset: "Reset",
                    processing: "Processing text humanization..."
                },
                pricing: {
                    title: "Pricing",
                    subtitle: "Access all HWP Web features at a fair price",
                    recommended: "Recommended",
                    loginRequired: "Please log in first.",
                    comingSoon: "Paid plans are coming soon.",
                    compareTitle: "Plan Comparison",
                    compareItem: "Feature",
                    faqTitle: "Frequently Asked Questions",
                    ctaTitle: "Get Started Now",
                    ctaDesc: "Convert, edit, and manage HWP documents on the web with HWP Web",
                    ctaBtn: "Start Free",
                    freeName: "Free",
                    freeDesc: "Try basic conversion and editing for free",
                    freeFeatures: "HWP/HWPX → Markdown 5 times/mo|Markdown editor|1 document storage|AI features with your own key",
                    freeBtn: "Start Free",
                    basicName: "Basic",
                    basicDesc: "A reasonable plan for regular users",
                    basicFeatures: "50 conversions/mo|20 AI humanizations/mo|30 document storage|HWP Editor + HWPX export|Email support",
                    basicBtn: "Start Basic",
                    proName: "Pro",
                    proDesc: "Unlimited features and priority support for professionals",
                    proFeatures: "Unlimited conversions|Unlimited AI humanization|Unlimited storage|Business plan + AI writer|PPTX export|Kakao + Email support",
                    proBtn: "Start Pro",
                    compare: {
                        price: {
                            label: "Monthly",
                            free: "Free",
                            basic: "₩9,900",
                            pro: "₩29,900"
                        },
                        converts: {
                            label: "Conversions",
                            free: "5/mo",
                            basic: "50/mo",
                            pro: "Unlimited"
                        },
                        humanize: {
                            label: "AI Humanize",
                            free: "Own key",
                            basic: "20/mo",
                            pro: "Unlimited"
                        },
                        maxLength: {
                            label: "Max Length",
                            free: "5,000 chars",
                            basic: "30,000 chars",
                            pro: "50,000 chars"
                        },
                        export: {
                            label: "Export",
                            free: "Markdown",
                            basic: "Markdown, HWPX",
                            pro: "Markdown, HWPX, PDF"
                        },
                        storage: {
                            label: "Storage",
                            free: "1 doc",
                            basic: "30 docs",
                            pro: "Unlimited"
                        },
                        support: {
                            label: "Support",
                            free: "-",
                            basic: "Email",
                            pro: "Email + Kakao"
                        }
                    },
                    faq1: {
                        q: "Can I convert files with the free plan?",
                        a: "Yes, the free plan allows up to 5 HWP/HWPX → Markdown conversions per month. The Markdown editor is also available without limits."
                    },
                    faq2: {
                        q: "What is AI Humanization?",
                        a: "It transforms AI-generated documents into natural, human-written text. You can choose intensity and tone, and compare the original with the result paragraph by paragraph."
                    },
                    faq3: {
                        q: "Can I change my plan anytime?",
                        a: "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately, and downgrades apply from the next billing date."
                    },
                    faq4: {
                        q: "How do I use my own API key?",
                        a: "To use AI features on the free plan, enter your Claude or OpenAI API key. Keys are stored only in your browser and never sent to our servers."
                    },
                    faq5: {
                        q: "What is the refund policy?",
                        a: "Full refunds are available within 7 days of payment if no usage has occurred. Please contact support for details."
                    }
                },
                home: {
                    title: "HWP Web",
                    subtitle: "Convert, edit, and manage HWP/HWPX documents on the web",
                    welcome: "Welcome to HWP Web",
                    description: "Convert HWP/HWPX files to Markdown, edit with a Markdown editor, and export to HWPX."
                },
                convert: {
                    title: "HWP/HWPX → Markdown Conversion",
                    subtitle: "Upload HWP or HWPX files to convert them to Markdown",
                    dropzone: "Drag & drop or click to upload",
                    dropzoneHint: "Supports .hwp, .hwpx files",
                    converting: "Converting...",
                    complete: "Conversion complete",
                    download: "Download",
                    copy: "Copy",
                    copied: "Copied!",
                    preview: "Preview",
                    source: "Source",
                    newConversion: "New conversion",
                    aiEnhance: "AI Enhance",
                    aiEnhancing: "Enhancing with AI...",
                    aiEnhanceDesc: "Use AI to improve conversion results",
                    aiNotAvailable: "AI enhancement requires server setup (coming soon)",
                    original: "Original",
                    enhanced: "AI Enhanced"
                },
                editor: {
                    title: "Markdown Editor",
                    subtitle: "Write documents in Markdown and export to various formats",
                    save: "Save",
                    export: "Export",
                    exportMd: "Markdown (.md)",
                    exportHwpx: "HWPX (.hwpx)",
                    exportHtml: "HTML (.html)",
                    exportTxt: "Text (.txt)",
                    newDocument: "New Document",
                    untitled: "Untitled"
                },
                hwpEditor: {
                    title: "HWP Editor",
                    subtitle: "Edit and export HWP files directly",
                    newDoc: "New Document",
                    openFile: "Open File",
                    export: "Export",
                    exportHwp: "HWP (.hwp)",
                    exportHwpx: "HWPX (.hwpx)",
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    strikethrough: "Strikethrough",
                    alignLeft: "Align Left",
                    alignCenter: "Align Center",
                    alignRight: "Align Right",
                    alignJustify: "Justify",
                    font: "Font",
                    fontSize: "Font Size",
                    textColor: "Text Color",
                    highlight: "Highlight",
                    lineSpacing: "Line Spacing",
                    indent: "Indent",
                    outdent: "Outdent",
                    bulletList: "Bullet List",
                    numberedList: "Numbered List",
                    insertTable: "Insert Table",
                    insertImage: "Insert Image",
                    pageBreak: "Page Break",
                    findReplace: "Find/Replace",
                    find: "Find",
                    replace: "Replace",
                    findNext: "Find Next",
                    replaceOne: "Replace",
                    replaceAllBtn: "Replace All",
                    caseSensitive: "Case Sensitive",
                    noResults: "No results",
                    replaced: "replaced",
                    undo: "Undo",
                    redo: "Redo",
                    page: "Page",
                    zoom: "Zoom",
                    wasmLoading: "Loading HWP engine...",
                    wasmError: "Failed to initialize HWP engine",
                    clickToEdit: "Click on the document to start editing",
                    dropOrNew: "Open an HWP file or create a new document"
                },
                templates: {
                    title: "My Templates",
                    subtitle: "Create and reuse your own document templates",
                    create: "New Template",
                    empty: "No templates yet",
                    emptyHint: "Upload a document or write manually to create a template",
                    upload: "Upload File",
                    uploadHint: "Upload .hwp/.hwpx files for auto conversion",
                    write: "Write Manually",
                    writeHint: "Start from a blank Markdown editor",
                    fieldHint: "Use {{fieldName}} for fillable areas (e.g. {{company}}, {{date}})",
                    detectedFields: "Detected Fields",
                    noFields: "No fields detected yet",
                    openInEditor: "Open in Editor",
                    save: "Save Template",
                    saved: "Template saved",
                    deleted: "Template deleted",
                    deleteConfirm: "Delete this template?",
                    use: "Use",
                    delete: "Delete",
                    preview: "Preview",
                    step1: "Choose Source",
                    step2: "Edit Content",
                    step3: "Preview & Save",
                    next: "Next",
                    prev: "Back",
                    titlePlaceholder: "Template title",
                    descPlaceholder: "Template description (optional)",
                    fields: "fields",
                    export: "Export",
                    exportMd: "Markdown (.md)",
                    exportHwpx: "HWPX (.hwpx)",
                    notFound: "Template not found"
                },
                documents: {
                    title: "My Documents",
                    subtitle: "Manage your saved documents",
                    empty: "No saved documents",
                    delete: "Delete",
                    edit: "Edit",
                    public: "Public",
                    private: "Private"
                },
                guide: {
                    title: "User Guide",
                    subtitle: "Learn how to use HWP Web"
                },
                aiWriter: {
                    title: "AI Writer",
                    subtitle: "Generate documents with AI using Claude or ChatGPT API",
                    apiSetup: "AI API Setup",
                    keyHint: "API keys are stored only in your browser and never sent to our servers",
                    selectType: "Select Document Type",
                    topicLabel: "Enter topic or content",
                    topicPlaceholder: `e.g., Q1 2026 Marketing Strategy Report
e.g., New SaaS Project Proposal
e.g., AI Education Lecture Material`,
                    freePromptLabel: "Enter your custom prompt",
                    freePromptPlaceholder: `Describe the document you want to generate in detail.
You can specify format, length, content to include, etc.`,
                    generate: "Generate with AI",
                    generating: "Generating...",
                    stop: "Stop",
                    result: "Generated Result",
                    previewTab: "Preview",
                    markdownTab: "Markdown",
                    newDoc: "New Document",
                    openInEditor: "Open in Editor",
                    saveToDb: "Save to Documents",
                    saved: "Document saved",
                    error: "Failed to generate AI document"
                },
                businessPlan: {
                    title: "Business Plan",
                    subtitle: "Auto-generate business plans",
                    selectType: "Select Plan Type",
                    fillInfo: "Fill Information",
                    preview: "Preview",
                    export: "Export",
                    step1: "Select Type",
                    step2: "Fill Info",
                    step3: "Preview",
                    step4: "Export",
                    next: "Next",
                    prev: "Back",
                    progress: "Progress",
                    sectionToggle: "Toggle Section",
                    requiredField: "Required",
                    downloadHwpx: "Download HWPX",
                    downloadMd: "Download Markdown",
                    downloadHtml: "Download HTML",
                    saveToDb: "Save to Documents",
                    openInEditor: "Open in Editor",
                    saved: "Business plan saved",
                    markdownTab: "Markdown",
                    previewTab: "Preview",
                    startNew: "Start New"
                },
                viewer: {
                    title: "HWP Viewer",
                    subtitle: "View HWP files directly in your browser",
                    upload: "Upload HWP File",
                    uploadHint: "Drag & drop or click to upload .hwp files",
                    loading: "Loading WASM module...",
                    rendering: "Rendering...",
                    page: "Page",
                    of: "/",
                    zoom: "Zoom",
                    downloadSvg: "Download SVG",
                    newFile: "New File",
                    prev: "Prev",
                    next: "Next",
                    error: "Cannot render this file",
                    wasmError: "Failed to initialize WASM module"
                },
                generator: {
                    title: "Document Generator",
                    subtitle: "Create 6 types of formal documents with a simple wizard",
                    selectType: "Select Document Type",
                    fillInfo: "Fill Information",
                    preview: "Preview",
                    export: "Export",
                    step1: "Select Type",
                    step2: "Fill Info",
                    step3: "Preview",
                    step4: "Export",
                    next: "Next",
                    prev: "Back",
                    progress: "Progress",
                    downloadHwpx: "Download HWPX",
                    downloadMd: "Download Markdown",
                    downloadHtml: "Download HTML",
                    saveToDb: "Save to Documents",
                    openInEditor: "Open in Editor",
                    saved: "Document saved",
                    markdownTab: "Markdown",
                    previewTab: "Preview",
                    startNew: "Start New"
                }
            },
            auth: {
                loginTitle: "Login",
                loginSubtitle: "Sign in to HWP Web",
                login: "Login",
                logout: "Logout",
                signUp: "Sign Up",
                signUpTitle: "Sign Up",
                signUpSubtitle: "Create your HWP Web account",
                signUpSuccess: "Registration Complete!",
                checkEmail: "Please check your email to activate your account.",
                goToLogin: "Go to Login",
                emailPlaceholder: "Email",
                passwordPlaceholder: "Password",
                passwordConfirmPlaceholder: "Confirm Password",
                displayNamePlaceholder: "Name",
                noAccount: "Don't have an account?",
                hasAccount: "Already have an account?",
                forgotPassword: "Forgot password?",
                forgotPasswordTitle: "Reset Password",
                forgotPasswordSubtitle: "Enter your email and we will send a reset link",
                resetEmailSent: "Email sent",
                checkEmailForReset: "Check your email for the password reset link",
                backToLogin: "Back to Login",
                sendResetLink: "Send Reset Link",
                sending: "Sending...",
                loginError: "Login failed",
                signUpError: "Registration failed",
                passwordMismatch: "Passwords do not match",
                loggingIn: "Logging in...",
                signingUp: "Signing up...",
                myPage: "My Page",
                orderHistory: "Order History",
                editProfile: "Edit Profile",
                displayName: "Name",
                save: "Save",
                saving: "Saving...",
                profileUpdated: "Profile updated",
                noName: "No name",
                loginWith: "Login via:",
                emailAccount: "Email account",
                admin: "Admin",
                back: "Back"
            },
            footer: {
                tagline: "Easy and fast web conversion for HWP documents",
                quickLinks: "Quick Links",
                contact: "Contact"
            },
            search: {
                placeholder: "Search...",
                searching: "Searching...",
                noResults: "No results found",
                hint: "Type to search",
                blog: "Blog",
                board: "Board",
                gallery: "Gallery"
            }
        }
    };
    tg = A.createContext(null);
    Pb = ({ children: i })=>{
        const [n, r] = A.useState("ko"), l = ()=>{
            r((h)=>h === "ko" ? "en" : "ko");
        }, u = (h)=>{
            const f = h.split(".");
            let d = qb[n];
            for (const p of f)d = d?.[p];
            return typeof d == "string" ? d : h;
        };
        return w.jsx(tg.Provider, {
            value: {
                language: n,
                toggleLanguage: l,
                t: u
            },
            children: i
        });
    };
    ng = ()=>{
        const i = A.useContext(tg);
        if (!i) throw new Error("useLanguage must be used within LanguageProvider");
        return i;
    };
    function Al(i, n) {
        var r = {};
        for(var l in i)Object.prototype.hasOwnProperty.call(i, l) && n.indexOf(l) < 0 && (r[l] = i[l]);
        if (i != null && typeof Object.getOwnPropertySymbols == "function") for(var u = 0, l = Object.getOwnPropertySymbols(i); u < l.length; u++)n.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[u]) && (r[l[u]] = i[l[u]]);
        return r;
    }
    function $b(i, n, r, l) {
        function u(h) {
            return h instanceof r ? h : new r(function(f) {
                f(h);
            });
        }
        return new (r || (r = Promise))(function(h, f) {
            function d(b) {
                try {
                    g(l.next(b));
                } catch (v) {
                    f(v);
                }
            }
            function p(b) {
                try {
                    g(l.throw(b));
                } catch (v) {
                    f(v);
                }
            }
            function g(b) {
                b.done ? h(b.value) : u(b.value).then(d, p);
            }
            g((l = l.apply(i, n || [])).next());
        });
    }
    const Gb = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n);
    class zc extends Error {
        constructor(n, r = "FunctionsError", l){
            super(n), this.name = r, this.context = l;
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                context: this.context
            };
        }
    }
    class Ib extends zc {
        constructor(n){
            super("Failed to send a request to the Edge Function", "FunctionsFetchError", n);
        }
    }
    class im extends zc {
        constructor(n){
            super("Relay Error invoking the Edge Function", "FunctionsRelayError", n);
        }
    }
    class rm extends zc {
        constructor(n){
            super("Edge Function returned a non-2xx status code", "FunctionsHttpError", n);
        }
    }
    var fc;
    (function(i) {
        i.Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
    })(fc || (fc = {}));
    class Vb {
        constructor(n, { headers: r = {}, customFetch: l, region: u = fc.Any } = {}){
            this.url = n, this.headers = r, this.region = u, this.fetch = Gb(l);
        }
        setAuth(n) {
            this.headers.Authorization = `Bearer ${n}`;
        }
        invoke(n) {
            return $b(this, arguments, void 0, function*(r, l = {}) {
                var u;
                let h, f;
                try {
                    const { headers: d, method: p, body: g, signal: b, timeout: v } = l;
                    let S = {}, { region: E } = l;
                    E || (E = this.region);
                    const N = new URL(`${this.url}/${r}`);
                    E && E !== "any" && (S["x-region"] = E, N.searchParams.set("forceFunctionRegion", E));
                    let D;
                    g && (d && !Object.prototype.hasOwnProperty.call(d, "Content-Type") || !d) ? typeof Blob < "u" && g instanceof Blob || g instanceof ArrayBuffer ? (S["Content-Type"] = "application/octet-stream", D = g) : typeof g == "string" ? (S["Content-Type"] = "text/plain", D = g) : typeof FormData < "u" && g instanceof FormData ? D = g : (S["Content-Type"] = "application/json", D = JSON.stringify(g)) : g && typeof g != "string" && !(typeof Blob < "u" && g instanceof Blob) && !(g instanceof ArrayBuffer) && !(typeof FormData < "u" && g instanceof FormData) ? D = JSON.stringify(g) : D = g;
                    let k = b;
                    v && (f = new AbortController, h = setTimeout(()=>f.abort(), v), b ? (k = f.signal, b.addEventListener("abort", ()=>f.abort())) : k = f.signal);
                    const B = yield this.fetch(N.toString(), {
                        method: p || "POST",
                        headers: Object.assign(Object.assign(Object.assign({}, S), this.headers), d),
                        body: D,
                        signal: k
                    }).catch((te)=>{
                        throw new Ib(te);
                    }), $ = B.headers.get("x-relay-error");
                    if ($ && $ === "true") throw new im(B);
                    if (!B.ok) throw new rm(B);
                    let z = ((u = B.headers.get("Content-Type")) !== null && u !== void 0 ? u : "text/plain").split(";")[0].trim(), V;
                    return z === "application/json" ? V = yield B.json() : z === "application/octet-stream" || z === "application/pdf" ? V = yield B.blob() : z === "text/event-stream" ? V = B : z === "multipart/form-data" ? V = yield B.formData() : V = yield B.text(), {
                        data: V,
                        error: null,
                        response: B
                    };
                } catch (d) {
                    return {
                        data: null,
                        error: d,
                        response: d instanceof rm || d instanceof im ? d.context : void 0
                    };
                } finally{
                    h && clearTimeout(h);
                }
            });
        }
    }
    const ag = 3, sm = (i)=>Math.min(1e3 * 2 ** i, 3e4), Kb = [
        520,
        503
    ], ig = [
        "GET",
        "HEAD",
        "OPTIONS"
    ];
    var Yb = class extends Error {
        constructor(i){
            super(i.message), this.name = "PostgrestError", this.details = i.details, this.hint = i.hint, this.code = i.code;
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                details: this.details,
                hint: this.hint,
                code: this.code
            };
        }
    };
    function lm(i, n) {
        return new Promise((r)=>{
            if (n?.aborted) {
                r();
                return;
            }
            const l = setTimeout(()=>{
                n?.removeEventListener("abort", u), r();
            }, i);
            function u() {
                clearTimeout(l), r();
            }
            n?.addEventListener("abort", u);
        });
    }
    function Xb(i, n, r, l) {
        return !(!l || r >= ag || !ig.includes(i) || !Kb.includes(n));
    }
    var Wb = class {
        constructor(i){
            var n, r, l, u, h;
            this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = i.method, this.url = i.url, this.headers = new Headers(i.headers), this.schema = i.schema, this.body = i.body, this.shouldThrowOnError = (n = i.shouldThrowOnError) !== null && n !== void 0 ? n : !1, this.signal = i.signal, this.isMaybeSingle = (r = i.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.shouldStripNulls = (l = i.shouldStripNulls) !== null && l !== void 0 ? l : !1, this.urlLengthLimit = (u = i.urlLengthLimit) !== null && u !== void 0 ? u : 8e3, this.retryEnabled = (h = i.retry) !== null && h !== void 0 ? h : !0, i.fetch ? this.fetch = i.fetch : this.fetch = fetch;
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this;
        }
        stripNulls() {
            if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
            return this.shouldStripNulls = !0, this;
        }
        setHeader(i, n) {
            return this.headers = new Headers(this.headers), this.headers.set(i, n), this;
        }
        retry(i) {
            return this.retryEnabled = i, this;
        }
        then(i, n) {
            var r = this;
            if (this.schema === void 0 || ([
                "GET",
                "HEAD"
            ].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
                const f = this.headers.get("Accept");
                f === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!f || f === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
            }
            const l = this.fetch;
            let h = (async ()=>{
                let f = 0;
                for(;;){
                    const g = new Headers(r.headers);
                    f > 0 && g.set("X-Retry-Count", String(f));
                    let b;
                    try {
                        b = await l(r.url.toString(), {
                            method: r.method,
                            headers: g,
                            body: JSON.stringify(r.body),
                            signal: r.signal
                        });
                    } catch (v) {
                        if (v?.name === "AbortError" || v?.code === "ABORT_ERR" || !ig.includes(r.method)) throw v;
                        if (r.retryEnabled && f < ag) {
                            const S = sm(f);
                            f++, await lm(S, r.signal);
                            continue;
                        }
                        throw v;
                    }
                    if (Xb(r.method, b.status, f, r.retryEnabled)) {
                        var d, p;
                        const v = (d = (p = b.headers) === null || p === void 0 ? void 0 : p.get("Retry-After")) !== null && d !== void 0 ? d : null, S = v !== null ? Math.max(0, parseInt(v, 10) || 0) * 1e3 : sm(f);
                        await b.text(), f++, await lm(S, r.signal);
                        continue;
                    }
                    return await r.processResponse(b);
                }
            })();
            return this.shouldThrowOnError || (h = h.catch((f)=>{
                var d;
                let p = "", g = "", b = "";
                const v = f?.cause;
                if (v) {
                    var S, E, N, D;
                    const $ = (S = v?.message) !== null && S !== void 0 ? S : "", z = (E = v?.code) !== null && E !== void 0 ? E : "";
                    p = `${(N = f?.name) !== null && N !== void 0 ? N : "FetchError"}: ${f?.message}`, p += `

Caused by: ${(D = v?.name) !== null && D !== void 0 ? D : "Error"}: ${$}`, z && (p += ` (${z})`), v?.stack && (p += `
${v.stack}`);
                } else {
                    var k;
                    p = (k = f?.stack) !== null && k !== void 0 ? k : "";
                }
                const B = this.url.toString().length;
                return f?.name === "AbortError" || f?.code === "ABORT_ERR" ? (b = "", g = "Request was aborted (timeout or manual cancellation)", B > this.urlLengthLimit && (g += `. Note: Your request URL is ${B} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (v?.name === "HeadersOverflowError" || v?.code === "UND_ERR_HEADERS_OVERFLOW") && (b = "", g = "HTTP headers exceeded server limits (typically 16KB)", B > this.urlLengthLimit && (g += `. Your request URL is ${B} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
                    success: !1,
                    error: {
                        message: `${(d = f?.name) !== null && d !== void 0 ? d : "FetchError"}: ${f?.message}`,
                        details: p,
                        hint: g,
                        code: b
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ""
                };
            })), h.then(i, n);
        }
        async processResponse(i) {
            var n = this;
            let r = null, l = null, u = null, h = i.status, f = i.statusText;
            if (i.ok) {
                var d, p;
                if (n.method !== "HEAD") {
                    var g;
                    const S = await i.text();
                    S === "" || (n.headers.get("Accept") === "text/csv" || n.headers.get("Accept") && (!((g = n.headers.get("Accept")) === null || g === void 0) && g.includes("application/vnd.pgrst.plan+text")) ? l = S : l = JSON.parse(S));
                }
                const b = (d = n.headers.get("Prefer")) === null || d === void 0 ? void 0 : d.match(/count=(exact|planned|estimated)/), v = (p = i.headers.get("content-range")) === null || p === void 0 ? void 0 : p.split("/");
                b && v && v.length > 1 && (u = parseInt(v[1])), n.isMaybeSingle && Array.isArray(l) && (l.length > 1 ? (r = {
                    code: "PGRST116",
                    details: `Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, l = null, u = null, h = 406, f = "Not Acceptable") : l.length === 1 ? l = l[0] : l = null);
            } else {
                const b = await i.text();
                try {
                    r = JSON.parse(b), Array.isArray(r) && i.status === 404 && (l = [], r = null, h = 200, f = "OK");
                } catch  {
                    i.status === 404 && b === "" ? (h = 204, f = "No Content") : r = {
                        message: b
                    };
                }
                if (r && n.shouldThrowOnError) throw new Yb(r);
            }
            return {
                success: r === null,
                error: r,
                data: l,
                count: u,
                status: h,
                statusText: f
            };
        }
        returns() {
            return this;
        }
        overrideTypes() {
            return this;
        }
    }, Jb = class extends Wb {
        select(i) {
            let n = !1;
            const r = (i ?? "*").split("").map((l)=>/\s/.test(l) && !n ? "" : (l === '"' && (n = !n), l)).join("");
            return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
        }
        order(i, { ascending: n = !0, nullsFirst: r, foreignTable: l, referencedTable: u = l } = {}) {
            const h = u ? `${u}.order` : "order", f = this.url.searchParams.get(h);
            return this.url.searchParams.set(h, `${f ? `${f},` : ""}${i}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
        }
        limit(i, { foreignTable: n, referencedTable: r = n } = {}) {
            const l = typeof r > "u" ? "limit" : `${r}.limit`;
            return this.url.searchParams.set(l, `${i}`), this;
        }
        range(i, n, { foreignTable: r, referencedTable: l = r } = {}) {
            const u = typeof l > "u" ? "offset" : `${l}.offset`, h = typeof l > "u" ? "limit" : `${l}.limit`;
            return this.url.searchParams.set(u, `${i}`), this.url.searchParams.set(h, `${n - i + 1}`), this;
        }
        abortSignal(i) {
            return this.signal = i, this;
        }
        single() {
            return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
        }
        maybeSingle() {
            return this.isMaybeSingle = !0, this;
        }
        csv() {
            return this.headers.set("Accept", "text/csv"), this;
        }
        geojson() {
            return this.headers.set("Accept", "application/geo+json"), this;
        }
        explain({ analyze: i = !1, verbose: n = !1, settings: r = !1, buffers: l = !1, wal: u = !1, format: h = "text" } = {}) {
            var f;
            const d = [
                i ? "analyze" : null,
                n ? "verbose" : null,
                r ? "settings" : null,
                l ? "buffers" : null,
                u ? "wal" : null
            ].filter(Boolean).join("|"), p = (f = this.headers.get("Accept")) !== null && f !== void 0 ? f : "application/json";
            return this.headers.set("Accept", `application/vnd.pgrst.plan+${h}; for="${p}"; options=${d};`), h === "json" ? this : this;
        }
        rollback() {
            return this.headers.append("Prefer", "tx=rollback"), this;
        }
        returns() {
            return this;
        }
        maxAffected(i) {
            return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${i}`), this;
        }
    };
    const om = new RegExp("[,()]");
    var vi = class extends Jb {
        eq(i, n) {
            return this.url.searchParams.append(i, `eq.${n}`), this;
        }
        neq(i, n) {
            return this.url.searchParams.append(i, `neq.${n}`), this;
        }
        gt(i, n) {
            return this.url.searchParams.append(i, `gt.${n}`), this;
        }
        gte(i, n) {
            return this.url.searchParams.append(i, `gte.${n}`), this;
        }
        lt(i, n) {
            return this.url.searchParams.append(i, `lt.${n}`), this;
        }
        lte(i, n) {
            return this.url.searchParams.append(i, `lte.${n}`), this;
        }
        like(i, n) {
            return this.url.searchParams.append(i, `like.${n}`), this;
        }
        likeAllOf(i, n) {
            return this.url.searchParams.append(i, `like(all).{${n.join(",")}}`), this;
        }
        likeAnyOf(i, n) {
            return this.url.searchParams.append(i, `like(any).{${n.join(",")}}`), this;
        }
        ilike(i, n) {
            return this.url.searchParams.append(i, `ilike.${n}`), this;
        }
        ilikeAllOf(i, n) {
            return this.url.searchParams.append(i, `ilike(all).{${n.join(",")}}`), this;
        }
        ilikeAnyOf(i, n) {
            return this.url.searchParams.append(i, `ilike(any).{${n.join(",")}}`), this;
        }
        regexMatch(i, n) {
            return this.url.searchParams.append(i, `match.${n}`), this;
        }
        regexIMatch(i, n) {
            return this.url.searchParams.append(i, `imatch.${n}`), this;
        }
        is(i, n) {
            return this.url.searchParams.append(i, `is.${n}`), this;
        }
        isDistinct(i, n) {
            return this.url.searchParams.append(i, `isdistinct.${n}`), this;
        }
        in(i, n) {
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && om.test(l) ? `"${l}"` : `${l}`).join(",");
            return this.url.searchParams.append(i, `in.(${r})`), this;
        }
        notIn(i, n) {
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && om.test(l) ? `"${l}"` : `${l}`).join(",");
            return this.url.searchParams.append(i, `not.in.(${r})`), this;
        }
        contains(i, n) {
            return typeof n == "string" ? this.url.searchParams.append(i, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(i, `cs.{${n.join(",")}}`) : this.url.searchParams.append(i, `cs.${JSON.stringify(n)}`), this;
        }
        containedBy(i, n) {
            return typeof n == "string" ? this.url.searchParams.append(i, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(i, `cd.{${n.join(",")}}`) : this.url.searchParams.append(i, `cd.${JSON.stringify(n)}`), this;
        }
        rangeGt(i, n) {
            return this.url.searchParams.append(i, `sr.${n}`), this;
        }
        rangeGte(i, n) {
            return this.url.searchParams.append(i, `nxl.${n}`), this;
        }
        rangeLt(i, n) {
            return this.url.searchParams.append(i, `sl.${n}`), this;
        }
        rangeLte(i, n) {
            return this.url.searchParams.append(i, `nxr.${n}`), this;
        }
        rangeAdjacent(i, n) {
            return this.url.searchParams.append(i, `adj.${n}`), this;
        }
        overlaps(i, n) {
            return typeof n == "string" ? this.url.searchParams.append(i, `ov.${n}`) : this.url.searchParams.append(i, `ov.{${n.join(",")}}`), this;
        }
        textSearch(i, n, { config: r, type: l } = {}) {
            let u = "";
            l === "plain" ? u = "pl" : l === "phrase" ? u = "ph" : l === "websearch" && (u = "w");
            const h = r === void 0 ? "" : `(${r})`;
            return this.url.searchParams.append(i, `${u}fts${h}.${n}`), this;
        }
        match(i) {
            return Object.entries(i).filter(([n, r])=>r !== void 0).forEach(([n, r])=>{
                this.url.searchParams.append(n, `eq.${r}`);
            }), this;
        }
        not(i, n, r) {
            return this.url.searchParams.append(i, `not.${n}.${r}`), this;
        }
        or(i, { foreignTable: n, referencedTable: r = n } = {}) {
            const l = r ? `${r}.or` : "or";
            return this.url.searchParams.append(l, `(${i})`), this;
        }
        filter(i, n, r) {
            return this.url.searchParams.append(i, `${n}.${r}`), this;
        }
    }, Qb = class {
        constructor(i, { headers: n = {}, schema: r, fetch: l, urlLengthLimit: u = 8e3, retry: h }){
            this.url = i, this.headers = new Headers(n), this.schema = r, this.fetch = l, this.urlLengthLimit = u, this.retry = h;
        }
        cloneRequestState() {
            return {
                url: new URL(this.url.toString()),
                headers: new Headers(this.headers)
            };
        }
        select(i, n) {
            const { head: r = !1, count: l } = n ?? {}, u = r ? "HEAD" : "GET";
            let h = !1;
            const f = (i ?? "*").split("").map((g)=>/\s/.test(g) && !h ? "" : (g === '"' && (h = !h), g)).join(""), { url: d, headers: p } = this.cloneRequestState();
            return d.searchParams.set("select", f), l && p.append("Prefer", `count=${l}`), new vi({
                method: u,
                url: d,
                headers: p,
                schema: this.schema,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        insert(i, { count: n, defaultToNull: r = !0 } = {}) {
            var l;
            const u = "POST", { url: h, headers: f } = this.cloneRequestState();
            if (n && f.append("Prefer", `count=${n}`), r || f.append("Prefer", "missing=default"), Array.isArray(i)) {
                const d = i.reduce((p, g)=>p.concat(Object.keys(g)), []);
                if (d.length > 0) {
                    const p = [
                        ...new Set(d)
                    ].map((g)=>`"${g}"`);
                    h.searchParams.set("columns", p.join(","));
                }
            }
            return new vi({
                method: u,
                url: h,
                headers: f,
                schema: this.schema,
                body: i,
                fetch: (l = this.fetch) !== null && l !== void 0 ? l : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        upsert(i, { onConflict: n, ignoreDuplicates: r = !1, count: l, defaultToNull: u = !0 } = {}) {
            var h;
            const f = "POST", { url: d, headers: p } = this.cloneRequestState();
            if (p.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), n !== void 0 && d.searchParams.set("on_conflict", n), l && p.append("Prefer", `count=${l}`), u || p.append("Prefer", "missing=default"), Array.isArray(i)) {
                const g = i.reduce((b, v)=>b.concat(Object.keys(v)), []);
                if (g.length > 0) {
                    const b = [
                        ...new Set(g)
                    ].map((v)=>`"${v}"`);
                    d.searchParams.set("columns", b.join(","));
                }
            }
            return new vi({
                method: f,
                url: d,
                headers: p,
                schema: this.schema,
                body: i,
                fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        update(i, { count: n } = {}) {
            var r;
            const l = "PATCH", { url: u, headers: h } = this.cloneRequestState();
            return n && h.append("Prefer", `count=${n}`), new vi({
                method: l,
                url: u,
                headers: h,
                schema: this.schema,
                body: i,
                fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        delete({ count: i } = {}) {
            var n;
            const r = "DELETE", { url: l, headers: u } = this.cloneRequestState();
            return i && u.append("Prefer", `count=${i}`), new vi({
                method: r,
                url: l,
                headers: u,
                schema: this.schema,
                fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
    };
    function jr(i) {
        "@babel/helpers - typeof";
        return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, jr(i);
    }
    function Zb(i, n) {
        if (jr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (jr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function Fb(i) {
        var n = Zb(i, "string");
        return jr(n) == "symbol" ? n : n + "";
    }
    function ew(i, n, r) {
        return (n = Fb(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function um(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function sl(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? um(Object(r), !0).forEach(function(l) {
                ew(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    var tw = class rg {
        constructor(n, { headers: r = {}, schema: l, fetch: u, timeout: h, urlLengthLimit: f = 8e3, retry: d } = {}){
            this.url = n, this.headers = new Headers(r), this.schemaName = l, this.urlLengthLimit = f;
            const p = u ?? globalThis.fetch;
            h !== void 0 && h > 0 ? this.fetch = (g, b)=>{
                const v = new AbortController, S = setTimeout(()=>v.abort(), h), E = b?.signal;
                if (E) {
                    if (E.aborted) return clearTimeout(S), p(g, b);
                    const N = ()=>{
                        clearTimeout(S), v.abort();
                    };
                    return E.addEventListener("abort", N, {
                        once: !0
                    }), p(g, sl(sl({}, b), {}, {
                        signal: v.signal
                    })).finally(()=>{
                        clearTimeout(S), E.removeEventListener("abort", N);
                    });
                }
                return p(g, sl(sl({}, b), {}, {
                    signal: v.signal
                })).finally(()=>clearTimeout(S));
            } : this.fetch = p, this.retry = d;
        }
        from(n) {
            if (!n || typeof n != "string" || n.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
            return new Qb(new URL(`${this.url}/${n}`), {
                headers: new Headers(this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        schema(n) {
            return new rg(this.url, {
                headers: this.headers,
                schema: n,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        rpc(n, r = {}, { head: l = !1, get: u = !1, count: h } = {}) {
            var f;
            let d;
            const p = new URL(`${this.url}/rpc/${n}`);
            let g;
            const b = (E)=>E !== null && typeof E == "object" && (!Array.isArray(E) || E.some(b)), v = l && Object.values(r).some(b);
            v ? (d = "POST", g = r) : l || u ? (d = l ? "HEAD" : "GET", Object.entries(r).filter(([E, N])=>N !== void 0).map(([E, N])=>[
                    E,
                    Array.isArray(N) ? `{${N.join(",")}}` : `${N}`
                ]).forEach(([E, N])=>{
                p.searchParams.append(E, N);
            })) : (d = "POST", g = r);
            const S = new Headers(this.headers);
            return v ? S.set("Prefer", h ? `count=${h},return=minimal` : "return=minimal") : h && S.set("Prefer", `count=${h}`), new vi({
                method: d,
                url: p,
                headers: S,
                schema: this.schemaName,
                body: g,
                fetch: (f = this.fetch) !== null && f !== void 0 ? f : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
    };
    class nw {
        constructor(){}
        static detectEnvironment() {
            var n;
            if (typeof WebSocket < "u") return {
                type: "native",
                constructor: WebSocket
            };
            if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u") return {
                type: "native",
                constructor: globalThis.WebSocket
            };
            if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u") return {
                type: "native",
                constructor: globalThis.WebSocket
            };
            if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u") return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
            };
            if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((n = navigator.userAgent) === null || n === void 0) && n.includes("Vercel-Edge"))) return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
            };
            const r = globalThis.process;
            if (r) {
                const l = r.versions;
                if (l && l.node) {
                    const u = l.node, h = parseInt(u.replace(/^v/, "").split(".")[0]);
                    return h >= 22 ? typeof globalThis.WebSocket < "u" ? {
                        type: "native",
                        constructor: globalThis.WebSocket
                    } : {
                        type: "unsupported",
                        error: `Node.js ${h} detected but native WebSocket not found.`,
                        workaround: "Provide a WebSocket implementation via the transport option."
                    } : {
                        type: "unsupported",
                        error: `Node.js ${h} detected without native WebSocket support.`,
                        workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
                    };
                }
            }
            return {
                type: "unsupported",
                error: "Unknown JavaScript runtime without WebSocket support.",
                workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
            };
        }
        static getWebSocketConstructor() {
            const n = this.detectEnvironment();
            if (n.constructor) return n.constructor;
            let r = n.error || "WebSocket not supported in this environment.";
            throw n.workaround && (r += `

Suggested solution: ${n.workaround}`), new Error(r);
        }
        static isWebSocketSupported() {
            try {
                const n = this.detectEnvironment();
                return n.type === "native" || n.type === "ws";
            } catch  {
                return !1;
            }
        }
    }
    const aw = "2.103.0", iw = `realtime-js/${aw}`, rw = "1.0.0", sg = "2.0.0", sw = sg, lw = 1e4, ow = 100, ta = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    }, lg = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        leave: "phx_leave",
        access_token: "access_token"
    }, dc = {
        connecting: "connecting",
        closing: "closing",
        closed: "closed"
    };
    class uw {
        constructor(n){
            this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = {
                userBroadcastPush: 3,
                userBroadcast: 4
            }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = n ?? [];
        }
        encode(n, r) {
            if (n.event === this.BROADCAST_EVENT && !(n.payload instanceof ArrayBuffer) && typeof n.payload.event == "string") return r(this._binaryEncodeUserBroadcastPush(n));
            let l = [
                n.join_ref,
                n.ref,
                n.topic,
                n.event,
                n.payload
            ];
            return r(JSON.stringify(l));
        }
        _binaryEncodeUserBroadcastPush(n) {
            var r;
            return this._isArrayBuffer((r = n.payload) === null || r === void 0 ? void 0 : r.payload) ? this._encodeBinaryUserBroadcastPush(n) : this._encodeJsonUserBroadcastPush(n);
        }
        _encodeBinaryUserBroadcastPush(n) {
            var r, l;
            const u = (l = (r = n.payload) === null || r === void 0 ? void 0 : r.payload) !== null && l !== void 0 ? l : new ArrayBuffer(0);
            return this._encodeUserBroadcastPush(n, this.BINARY_ENCODING, u);
        }
        _encodeJsonUserBroadcastPush(n) {
            var r, l;
            const u = (l = (r = n.payload) === null || r === void 0 ? void 0 : r.payload) !== null && l !== void 0 ? l : {}, f = new TextEncoder().encode(JSON.stringify(u)).buffer;
            return this._encodeUserBroadcastPush(n, this.JSON_ENCODING, f);
        }
        _encodeUserBroadcastPush(n, r, l) {
            var u, h;
            const f = n.topic, d = (u = n.ref) !== null && u !== void 0 ? u : "", p = (h = n.join_ref) !== null && h !== void 0 ? h : "", g = n.payload.event, b = this.allowedMetadataKeys ? this._pick(n.payload, this.allowedMetadataKeys) : {}, v = Object.keys(b).length === 0 ? "" : JSON.stringify(b);
            if (p.length > 255) throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);
            if (d.length > 255) throw new Error(`ref length ${d.length} exceeds maximum of 255`);
            if (f.length > 255) throw new Error(`topic length ${f.length} exceeds maximum of 255`);
            if (g.length > 255) throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);
            if (v.length > 255) throw new Error(`metadata length ${v.length} exceeds maximum of 255`);
            const S = this.USER_BROADCAST_PUSH_META_LENGTH + p.length + d.length + f.length + g.length + v.length, E = new ArrayBuffer(this.HEADER_LENGTH + S);
            let N = new DataView(E), D = 0;
            N.setUint8(D++, this.KINDS.userBroadcastPush), N.setUint8(D++, p.length), N.setUint8(D++, d.length), N.setUint8(D++, f.length), N.setUint8(D++, g.length), N.setUint8(D++, v.length), N.setUint8(D++, r), Array.from(p, (B)=>N.setUint8(D++, B.charCodeAt(0))), Array.from(d, (B)=>N.setUint8(D++, B.charCodeAt(0))), Array.from(f, (B)=>N.setUint8(D++, B.charCodeAt(0))), Array.from(g, (B)=>N.setUint8(D++, B.charCodeAt(0))), Array.from(v, (B)=>N.setUint8(D++, B.charCodeAt(0)));
            var k = new Uint8Array(E.byteLength + l.byteLength);
            return k.set(new Uint8Array(E), 0), k.set(new Uint8Array(l), E.byteLength), k.buffer;
        }
        decode(n, r) {
            if (this._isArrayBuffer(n)) {
                let l = this._binaryDecode(n);
                return r(l);
            }
            if (typeof n == "string") {
                const l = JSON.parse(n), [u, h, f, d, p] = l;
                return r({
                    join_ref: u,
                    ref: h,
                    topic: f,
                    event: d,
                    payload: p
                });
            }
            return r({});
        }
        _binaryDecode(n) {
            const r = new DataView(n), l = r.getUint8(0), u = new TextDecoder;
            if (l === this.KINDS.userBroadcast) return this._decodeUserBroadcast(n, r, u);
        }
        _decodeUserBroadcast(n, r, l) {
            const u = r.getUint8(1), h = r.getUint8(2), f = r.getUint8(3), d = r.getUint8(4);
            let p = this.HEADER_LENGTH + 4;
            const g = l.decode(n.slice(p, p + u));
            p = p + u;
            const b = l.decode(n.slice(p, p + h));
            p = p + h;
            const v = l.decode(n.slice(p, p + f));
            p = p + f;
            const S = n.slice(p, n.byteLength), E = d === this.JSON_ENCODING ? JSON.parse(l.decode(S)) : S, N = {
                type: this.BROADCAST_EVENT,
                event: b,
                payload: E
            };
            return f > 0 && (N.meta = JSON.parse(v)), {
                join_ref: null,
                ref: null,
                topic: g,
                event: this.BROADCAST_EVENT,
                payload: N
            };
        }
        _isArrayBuffer(n) {
            var r;
            return n instanceof ArrayBuffer || ((r = n?.constructor) === null || r === void 0 ? void 0 : r.name) === "ArrayBuffer";
        }
        _pick(n, r) {
            return !n || typeof n != "object" ? {} : Object.fromEntries(Object.entries(n).filter(([l])=>r.includes(l)));
        }
    }
    var ke;
    (function(i) {
        i.abstime = "abstime", i.bool = "bool", i.date = "date", i.daterange = "daterange", i.float4 = "float4", i.float8 = "float8", i.int2 = "int2", i.int4 = "int4", i.int4range = "int4range", i.int8 = "int8", i.int8range = "int8range", i.json = "json", i.jsonb = "jsonb", i.money = "money", i.numeric = "numeric", i.oid = "oid", i.reltime = "reltime", i.text = "text", i.time = "time", i.timestamp = "timestamp", i.timestamptz = "timestamptz", i.timetz = "timetz", i.tsrange = "tsrange", i.tstzrange = "tstzrange";
    })(ke || (ke = {}));
    const cm = (i, n, r = {})=>{
        var l;
        const u = (l = r.skipTypes) !== null && l !== void 0 ? l : [];
        return n ? Object.keys(n).reduce((h, f)=>(h[f] = cw(f, i, n, u), h), {}) : {};
    }, cw = (i, n, r, l)=>{
        const u = n.find((d)=>d.name === i), h = u?.type, f = r[i];
        return h && !l.includes(h) ? og(h, f) : pc(f);
    }, og = (i, n)=>{
        if (i.charAt(0) === "_") {
            const r = i.slice(1, i.length);
            return pw(n, r);
        }
        switch(i){
            case ke.bool:
                return hw(n);
            case ke.float4:
            case ke.float8:
            case ke.int2:
            case ke.int4:
            case ke.int8:
            case ke.numeric:
            case ke.oid:
                return fw(n);
            case ke.json:
            case ke.jsonb:
                return dw(n);
            case ke.timestamp:
                return mw(n);
            case ke.abstime:
            case ke.date:
            case ke.daterange:
            case ke.int4range:
            case ke.int8range:
            case ke.money:
            case ke.reltime:
            case ke.text:
            case ke.time:
            case ke.timestamptz:
            case ke.timetz:
            case ke.tsrange:
            case ke.tstzrange:
                return pc(n);
            default:
                return pc(n);
        }
    }, pc = (i)=>i, hw = (i)=>{
        switch(i){
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return i;
        }
    }, fw = (i)=>{
        if (typeof i == "string") {
            const n = parseFloat(i);
            if (!Number.isNaN(n)) return n;
        }
        return i;
    }, dw = (i)=>{
        if (typeof i == "string") try {
            return JSON.parse(i);
        } catch  {
            return i;
        }
        return i;
    }, pw = (i, n)=>{
        if (typeof i != "string") return i;
        const r = i.length - 1, l = i[r];
        if (i[0] === "{" && l === "}") {
            let h;
            const f = i.slice(1, r);
            try {
                h = JSON.parse("[" + f + "]");
            } catch  {
                h = f ? f.split(",") : [];
            }
            return h.map((d)=>og(n, d));
        }
        return i;
    }, mw = (i)=>typeof i == "string" ? i.replace(" ", "T") : i, ug = (i)=>{
        const n = new URL(i);
        return n.protocol = n.protocol.replace(/^ws/i, "http"), n.pathname = n.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), n.pathname === "" || n.pathname === "/" ? n.pathname = "/api/broadcast" : n.pathname = n.pathname + "/api/broadcast", n.href;
    };
    var Rr = (i)=>typeof i == "function" ? i : function() {
            return i;
        }, gw = typeof self < "u" ? self : null, bi = typeof window < "u" ? window : null, an = gw || bi || globalThis, yw = "2.0.0", vw = 1e4, bw = 1e3, rn = {
        connecting: 0,
        open: 1,
        closing: 2,
        closed: 3
    }, vt = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    }, An = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave"
    }, mc = {
        longpoll: "longpoll",
        websocket: "websocket"
    }, ww = {
        complete: 4
    }, gc = "base64url.bearer.phx.", ll = class {
        constructor(i, n, r, l){
            this.channel = i, this.event = n, this.payload = r || function() {
                return {};
            }, this.receivedResp = null, this.timeout = l, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
        }
        resend(i) {
            this.timeout = i, this.reset(), this.send();
        }
        send() {
            this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload(),
                ref: this.ref,
                join_ref: this.channel.joinRef()
            }));
        }
        receive(i, n) {
            return this.hasReceived(i) && n(this.receivedResp.response), this.recHooks.push({
                status: i,
                callback: n
            }), this;
        }
        reset() {
            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
        }
        destroy() {
            this.cancelRefEvent(), this.cancelTimeout();
        }
        matchReceive({ status: i, response: n, _ref: r }) {
            this.recHooks.filter((l)=>l.status === i).forEach((l)=>l.callback(n));
        }
        cancelRefEvent() {
            this.refEvent && this.channel.off(this.refEvent);
        }
        cancelTimeout() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
        startTimeout() {
            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (i)=>{
                this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = i, this.matchReceive(i);
            }), this.timeoutTimer = setTimeout(()=>{
                this.trigger("timeout", {});
            }, this.timeout);
        }
        hasReceived(i) {
            return this.receivedResp && this.receivedResp.status === i;
        }
        trigger(i, n) {
            this.channel.trigger(this.refEvent, {
                status: i,
                response: n
            });
        }
    }, cg = class {
        constructor(i, n){
            this.callback = i, this.timerCalc = n, this.timer = void 0, this.tries = 0;
        }
        reset() {
            this.tries = 0, clearTimeout(this.timer);
        }
        scheduleTimeout() {
            clearTimeout(this.timer), this.timer = setTimeout(()=>{
                this.tries = this.tries + 1, this.callback();
            }, this.timerCalc(this.tries + 1));
        }
    }, _w = class {
        constructor(i, n, r){
            this.state = vt.closed, this.topic = i, this.params = Rr(n || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new ll(this, An.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new cg(()=>{
                this.socket.isConnected() && this.rejoin();
            }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(()=>{
                this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
            })), this.joinPush.receive("ok", ()=>{
                this.state = vt.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((l)=>l.send()), this.pushBuffer = [];
            }), this.joinPush.receive("error", (l)=>{
                this.state = vt.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, l), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.onClose(()=>{
                this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = vt.closed, this.socket.remove(this);
            }), this.onError((l)=>{
                this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, l), this.isJoining() && this.joinPush.reset(), this.state = vt.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.joinPush.receive("timeout", ()=>{
                this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new ll(this, An.leave, Rr({}), this.timeout).send(), this.state = vt.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.on(An.reply, (l, u)=>{
                this.trigger(this.replyEventName(u), l);
            });
        }
        join(i = this.timeout) {
            if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = i, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
        teardown() {
            this.pushBuffer.forEach((i)=>i.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = vt.closed, this.bindings = [];
        }
        onClose(i) {
            this.on(An.close, i);
        }
        onError(i) {
            return this.on(An.error, (n)=>i(n));
        }
        on(i, n) {
            let r = this.bindingRef++;
            return this.bindings.push({
                event: i,
                ref: r,
                callback: n
            }), r;
        }
        off(i, n) {
            this.bindings = this.bindings.filter((r)=>!(r.event === i && (typeof n > "u" || n === r.ref)));
        }
        canPush() {
            return this.socket.isConnected() && this.isJoined();
        }
        push(i, n, r = this.timeout) {
            if (n = n || {}, !this.joinedOnce) throw new Error(`tried to push '${i}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
            let l = new ll(this, i, function() {
                return n;
            }, r);
            return this.canPush() ? l.send() : (l.startTimeout(), this.pushBuffer.push(l)), l;
        }
        leave(i = this.timeout) {
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = vt.leaving;
            let n = ()=>{
                this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(An.close, "leave");
            }, r = new ll(this, An.leave, Rr({}), i);
            return r.receive("ok", ()=>n()).receive("timeout", ()=>n()), r.send(), this.canPush() || r.trigger("ok", {}), r;
        }
        onMessage(i, n, r) {
            return n;
        }
        filterBindings(i, n, r) {
            return !0;
        }
        isMember(i, n, r, l) {
            return this.topic !== i ? !1 : l && l !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                topic: i,
                event: n,
                payload: r,
                joinRef: l
            }), !1) : !0;
        }
        joinRef() {
            return this.joinPush.ref;
        }
        rejoin(i = this.timeout) {
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = vt.joining, this.joinPush.resend(i));
        }
        trigger(i, n, r, l) {
            let u = this.onMessage(i, n, r, l);
            if (n && !u) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            let h = this.bindings.filter((f)=>f.event === i && this.filterBindings(f, n, r));
            for(let f = 0; f < h.length; f++)h[f].callback(u, r, l || this.joinRef());
        }
        replyEventName(i) {
            return `chan_reply_${i}`;
        }
        isClosed() {
            return this.state === vt.closed;
        }
        isErrored() {
            return this.state === vt.errored;
        }
        isJoined() {
            return this.state === vt.joined;
        }
        isJoining() {
            return this.state === vt.joining;
        }
        isLeaving() {
            return this.state === vt.leaving;
        }
    }, vl = class {
        static request(i, n, r, l, u, h, f) {
            if (an.XDomainRequest) {
                let d = new an.XDomainRequest;
                return this.xdomainRequest(d, i, n, l, u, h, f);
            } else if (an.XMLHttpRequest) {
                let d = new an.XMLHttpRequest;
                return this.xhrRequest(d, i, n, r, l, u, h, f);
            } else {
                if (an.fetch && an.AbortController) return this.fetchRequest(i, n, r, l, u, h, f);
                throw new Error("No suitable XMLHttpRequest implementation found");
            }
        }
        static fetchRequest(i, n, r, l, u, h, f) {
            let d = {
                method: i,
                headers: r,
                body: l
            }, p = null;
            return u && (p = new AbortController, setTimeout(()=>p.abort(), u), d.signal = p.signal), an.fetch(n, d).then((g)=>g.text()).then((g)=>this.parseJSON(g)).then((g)=>f && f(g)).catch((g)=>{
                g.name === "AbortError" && h ? h() : f && f(null);
            }), p;
        }
        static xdomainRequest(i, n, r, l, u, h, f) {
            return i.timeout = u, i.open(n, r), i.onload = ()=>{
                let d = this.parseJSON(i.responseText);
                f && f(d);
            }, h && (i.ontimeout = h), i.onprogress = ()=>{}, i.send(l), i;
        }
        static xhrRequest(i, n, r, l, u, h, f, d) {
            i.open(n, r, !0), i.timeout = h;
            for (let [p, g] of Object.entries(l))i.setRequestHeader(p, g);
            return i.onerror = ()=>d && d(null), i.onreadystatechange = ()=>{
                if (i.readyState === ww.complete && d) {
                    let p = this.parseJSON(i.responseText);
                    d(p);
                }
            }, f && (i.ontimeout = f), i.send(u), i;
        }
        static parseJSON(i) {
            if (!i || i === "") return null;
            try {
                return JSON.parse(i);
            } catch  {
                return console && console.log("failed to parse JSON response", i), null;
            }
        }
        static serialize(i, n) {
            let r = [];
            for(var l in i){
                if (!Object.prototype.hasOwnProperty.call(i, l)) continue;
                let u = n ? `${n}[${l}]` : l, h = i[l];
                typeof h == "object" ? r.push(this.serialize(h, u)) : r.push(encodeURIComponent(u) + "=" + encodeURIComponent(h));
            }
            return r.join("&");
        }
        static appendParams(i, n) {
            if (Object.keys(n).length === 0) return i;
            let r = i.match(/\?/) ? "&" : "?";
            return `${i}${r}${this.serialize(n)}`;
        }
    }, Sw = (i)=>{
        let n = "", r = new Uint8Array(i), l = r.byteLength;
        for(let u = 0; u < l; u++)n += String.fromCharCode(r[u]);
        return btoa(n);
    }, hi = class {
        constructor(i, n){
            n && n.length === 2 && n[1].startsWith(gc) && (this.authToken = atob(n[1].slice(gc.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = new Set, this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(i), this.readyState = rn.connecting, setTimeout(()=>this.poll(), 0);
        }
        normalizeEndpoint(i) {
            return i.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + mc.websocket), "$1/" + mc.longpoll);
        }
        endpointURL() {
            return vl.appendParams(this.pollEndpoint, {
                token: this.token
            });
        }
        closeAndRetry(i, n, r) {
            this.close(i, n, r), this.readyState = rn.connecting;
        }
        ontimeout() {
            this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
        }
        isActive() {
            return this.readyState === rn.open || this.readyState === rn.connecting;
        }
        poll() {
            const i = {
                Accept: "application/json"
            };
            this.authToken && (i["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", i, null, ()=>this.ontimeout(), (n)=>{
                if (n) {
                    var { status: r, token: l, messages: u } = n;
                    if (r === 410 && this.token !== null) {
                        this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
                        return;
                    }
                    this.token = l;
                } else r = 0;
                switch(r){
                    case 200:
                        u.forEach((h)=>{
                            setTimeout(()=>this.onmessage({
                                    data: h
                                }), 0);
                        }), this.poll();
                        break;
                    case 204:
                        this.poll();
                        break;
                    case 410:
                        this.readyState = rn.open, this.onopen({}), this.poll();
                        break;
                    case 403:
                        this.onerror(403), this.close(1008, "forbidden", !1);
                        break;
                    case 0:
                    case 500:
                        this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
                        break;
                    default:
                        throw new Error(`unhandled poll status ${r}`);
                }
            });
        }
        send(i) {
            typeof i != "string" && (i = Sw(i)), this.currentBatch ? this.currentBatch.push(i) : this.awaitingBatchAck ? this.batchBuffer.push(i) : (this.currentBatch = [
                i
            ], this.currentBatchTimer = setTimeout(()=>{
                this.batchSend(this.currentBatch), this.currentBatch = null;
            }, 0));
        }
        batchSend(i) {
            this.awaitingBatchAck = !0, this.ajax("POST", {
                "Content-Type": "application/x-ndjson"
            }, i.join(`
`), ()=>this.onerror("timeout"), (n)=>{
                this.awaitingBatchAck = !1, !n || n.status !== 200 ? (this.onerror(n && n.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = []);
            });
        }
        close(i, n, r) {
            for (let u of this.reqs)u.abort();
            this.readyState = rn.closed;
            let l = Object.assign({
                code: 1e3,
                reason: void 0,
                wasClean: !0
            }, {
                code: i,
                reason: n,
                wasClean: r
            });
            this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", l)) : this.onclose(l);
        }
        ajax(i, n, r, l, u) {
            let h, f = ()=>{
                this.reqs.delete(h), l();
            };
            h = vl.request(i, this.endpointURL(), n, r, this.timeout, f, (d)=>{
                this.reqs.delete(h), this.isActive() && u(d);
            }), this.reqs.add(h);
        }
    }, Ew = class Ar {
        constructor(n, r = {}){
            let l = r.events || {
                state: "presence_state",
                diff: "presence_diff"
            };
            this.state = {}, this.pendingDiffs = [], this.channel = n, this.joinRef = null, this.caller = {
                onJoin: function() {},
                onLeave: function() {},
                onSync: function() {}
            }, this.channel.on(l.state, (u)=>{
                let { onJoin: h, onLeave: f, onSync: d } = this.caller;
                this.joinRef = this.channel.joinRef(), this.state = Ar.syncState(this.state, u, h, f), this.pendingDiffs.forEach((p)=>{
                    this.state = Ar.syncDiff(this.state, p, h, f);
                }), this.pendingDiffs = [], d();
            }), this.channel.on(l.diff, (u)=>{
                let { onJoin: h, onLeave: f, onSync: d } = this.caller;
                this.inPendingSyncState() ? this.pendingDiffs.push(u) : (this.state = Ar.syncDiff(this.state, u, h, f), d());
            });
        }
        onJoin(n) {
            this.caller.onJoin = n;
        }
        onLeave(n) {
            this.caller.onLeave = n;
        }
        onSync(n) {
            this.caller.onSync = n;
        }
        list(n) {
            return Ar.list(this.state, n);
        }
        inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
        static syncState(n, r, l, u) {
            let h = this.clone(n), f = {}, d = {};
            return this.map(h, (p, g)=>{
                r[p] || (d[p] = g);
            }), this.map(r, (p, g)=>{
                let b = h[p];
                if (b) {
                    let v = g.metas.map((D)=>D.phx_ref), S = b.metas.map((D)=>D.phx_ref), E = g.metas.filter((D)=>S.indexOf(D.phx_ref) < 0), N = b.metas.filter((D)=>v.indexOf(D.phx_ref) < 0);
                    E.length > 0 && (f[p] = g, f[p].metas = E), N.length > 0 && (d[p] = this.clone(b), d[p].metas = N);
                } else f[p] = g;
            }), this.syncDiff(h, {
                joins: f,
                leaves: d
            }, l, u);
        }
        static syncDiff(n, r, l, u) {
            let { joins: h, leaves: f } = this.clone(r);
            return l || (l = function() {}), u || (u = function() {}), this.map(h, (d, p)=>{
                let g = n[d];
                if (n[d] = this.clone(p), g) {
                    let b = n[d].metas.map((S)=>S.phx_ref), v = g.metas.filter((S)=>b.indexOf(S.phx_ref) < 0);
                    n[d].metas.unshift(...v);
                }
                l(d, g, p);
            }), this.map(f, (d, p)=>{
                let g = n[d];
                if (!g) return;
                let b = p.metas.map((v)=>v.phx_ref);
                g.metas = g.metas.filter((v)=>b.indexOf(v.phx_ref) < 0), u(d, g, p), g.metas.length === 0 && delete n[d];
            }), n;
        }
        static list(n, r) {
            return r || (r = function(l, u) {
                return u;
            }), this.map(n, (l, u)=>r(l, u));
        }
        static map(n, r) {
            return Object.getOwnPropertyNames(n).map((l)=>r(l, n[l]));
        }
        static clone(n) {
            return JSON.parse(JSON.stringify(n));
        }
    }, ol = {
        HEADER_LENGTH: 1,
        META_LENGTH: 4,
        KINDS: {
            push: 0,
            reply: 1,
            broadcast: 2
        },
        encode (i, n) {
            if (i.payload.constructor === ArrayBuffer) return n(this.binaryEncode(i));
            {
                let r = [
                    i.join_ref,
                    i.ref,
                    i.topic,
                    i.event,
                    i.payload
                ];
                return n(JSON.stringify(r));
            }
        },
        decode (i, n) {
            if (i.constructor === ArrayBuffer) return n(this.binaryDecode(i));
            {
                let [r, l, u, h, f] = JSON.parse(i);
                return n({
                    join_ref: r,
                    ref: l,
                    topic: u,
                    event: h,
                    payload: f
                });
            }
        },
        binaryEncode (i) {
            let { join_ref: n, ref: r, event: l, topic: u, payload: h } = i, f = this.META_LENGTH + n.length + r.length + u.length + l.length, d = new ArrayBuffer(this.HEADER_LENGTH + f), p = new DataView(d), g = 0;
            p.setUint8(g++, this.KINDS.push), p.setUint8(g++, n.length), p.setUint8(g++, r.length), p.setUint8(g++, u.length), p.setUint8(g++, l.length), Array.from(n, (v)=>p.setUint8(g++, v.charCodeAt(0))), Array.from(r, (v)=>p.setUint8(g++, v.charCodeAt(0))), Array.from(u, (v)=>p.setUint8(g++, v.charCodeAt(0))), Array.from(l, (v)=>p.setUint8(g++, v.charCodeAt(0)));
            var b = new Uint8Array(d.byteLength + h.byteLength);
            return b.set(new Uint8Array(d), 0), b.set(new Uint8Array(h), d.byteLength), b.buffer;
        },
        binaryDecode (i) {
            let n = new DataView(i), r = n.getUint8(0), l = new TextDecoder;
            switch(r){
                case this.KINDS.push:
                    return this.decodePush(i, n, l);
                case this.KINDS.reply:
                    return this.decodeReply(i, n, l);
                case this.KINDS.broadcast:
                    return this.decodeBroadcast(i, n, l);
            }
        },
        decodePush (i, n, r) {
            let l = n.getUint8(1), u = n.getUint8(2), h = n.getUint8(3), f = this.HEADER_LENGTH + this.META_LENGTH - 1, d = r.decode(i.slice(f, f + l));
            f = f + l;
            let p = r.decode(i.slice(f, f + u));
            f = f + u;
            let g = r.decode(i.slice(f, f + h));
            f = f + h;
            let b = i.slice(f, i.byteLength);
            return {
                join_ref: d,
                ref: null,
                topic: p,
                event: g,
                payload: b
            };
        },
        decodeReply (i, n, r) {
            let l = n.getUint8(1), u = n.getUint8(2), h = n.getUint8(3), f = n.getUint8(4), d = this.HEADER_LENGTH + this.META_LENGTH, p = r.decode(i.slice(d, d + l));
            d = d + l;
            let g = r.decode(i.slice(d, d + u));
            d = d + u;
            let b = r.decode(i.slice(d, d + h));
            d = d + h;
            let v = r.decode(i.slice(d, d + f));
            d = d + f;
            let S = i.slice(d, i.byteLength), E = {
                status: v,
                response: S
            };
            return {
                join_ref: p,
                ref: g,
                topic: b,
                event: An.reply,
                payload: E
            };
        },
        decodeBroadcast (i, n, r) {
            let l = n.getUint8(1), u = n.getUint8(2), h = this.HEADER_LENGTH + 2, f = r.decode(i.slice(h, h + l));
            h = h + l;
            let d = r.decode(i.slice(h, h + u));
            h = h + u;
            let p = i.slice(h, i.byteLength);
            return {
                join_ref: null,
                ref: null,
                topic: f,
                event: d,
                payload: p
            };
        }
    }, Tw = class {
        constructor(i, n = {}){
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = n.timeout || vw, this.transport = n.transport || an.WebSocket || hi, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = n.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = n.sessionStorage || an && an.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = ol.encode.bind(ol), this.defaultDecoder = ol.decode.bind(ol), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = n.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== hi ? (this.encode = n.encode || this.defaultEncoder, this.decode = n.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
            let r = null;
            bi && bi.addEventListener && (bi.addEventListener("pagehide", (l)=>{
                this.conn && (this.disconnect(), r = this.connectClock);
            }), bi.addEventListener("pageshow", (l)=>{
                r === this.connectClock && (r = null, this.connect());
            }), bi.addEventListener("visibilitychange", ()=>{
                document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(()=>this.connect()));
            })), this.heartbeatIntervalMs = n.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = n.autoSendHeartbeat ?? !0, this.heartbeatCallback = n.heartbeatCallback ?? (()=>{}), this.rejoinAfterMs = (l)=>n.rejoinAfterMs ? n.rejoinAfterMs(l) : [
                    1e3,
                    2e3,
                    5e3
                ][l - 1] || 1e4, this.reconnectAfterMs = (l)=>n.reconnectAfterMs ? n.reconnectAfterMs(l) : [
                    10,
                    50,
                    100,
                    150,
                    200,
                    250,
                    500,
                    1e3,
                    2e3
                ][l - 1] || 5e3, this.logger = n.logger || null, !this.logger && n.debug && (this.logger = (l, u, h)=>{
                console.log(`${l}: ${u}`, h);
            }), this.longpollerTimeout = n.longpollerTimeout || 2e4, this.params = Rr(n.params || {}), this.endPoint = `${i}/${mc.websocket}`, this.vsn = n.vsn || yw, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new cg(()=>{
                if (this.pageHidden) {
                    this.log("Not reconnecting as page is hidden!"), this.teardown();
                    return;
                }
                this.teardown(async ()=>{
                    n.beforeReconnect && await n.beforeReconnect(), this.connect();
                });
            }, this.reconnectAfterMs), this.authToken = n.authToken;
        }
        getLongPollTransport() {
            return hi;
        }
        replaceTransport(i) {
            this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = i;
        }
        protocol() {
            return location.protocol.match(/^https/) ? "wss" : "ws";
        }
        endPointURL() {
            let i = vl.appendParams(vl.appendParams(this.endPoint, this.params()), {
                vsn: this.vsn
            });
            return i.charAt(0) !== "/" ? i : i.charAt(1) === "/" ? `${this.protocol()}:${i}` : `${this.protocol()}://${location.host}${i}`;
        }
        disconnect(i, n, r) {
            this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(()=>{
                this.disconnecting = !1, i && i();
            }, n, r);
        }
        connect(i) {
            i && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Rr(i)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== hi ? this.connectWithFallback(hi, this.longPollFallbackMs) : this.transportConnect());
        }
        log(i, n, r) {
            this.logger && this.logger(i, n, r);
        }
        hasLogger() {
            return this.logger !== null;
        }
        onOpen(i) {
            let n = this.makeRef();
            return this.stateChangeCallbacks.open.push([
                n,
                i
            ]), n;
        }
        onClose(i) {
            let n = this.makeRef();
            return this.stateChangeCallbacks.close.push([
                n,
                i
            ]), n;
        }
        onError(i) {
            let n = this.makeRef();
            return this.stateChangeCallbacks.error.push([
                n,
                i
            ]), n;
        }
        onMessage(i) {
            let n = this.makeRef();
            return this.stateChangeCallbacks.message.push([
                n,
                i
            ]), n;
        }
        onHeartbeat(i) {
            this.heartbeatCallback = i;
        }
        ping(i) {
            if (!this.isConnected()) return !1;
            let n = this.makeRef(), r = Date.now();
            this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: n
            });
            let l = this.onMessage((u)=>{
                u.ref === n && (this.off([
                    l
                ]), i(Date.now() - r));
            });
            return !0;
        }
        transportName(i) {
            return i === hi ? "LongPoll" : i.name;
        }
        transportConnect() {
            this.connectClock++, this.closeWasClean = !1;
            let i;
            this.authToken && (i = [
                "phoenix",
                `${gc}${btoa(this.authToken).replace(/=/g, "")}`
            ]), this.conn = new this.transport(this.endPointURL(), i), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = ()=>this.onConnOpen(), this.conn.onerror = (n)=>this.onConnError(n), this.conn.onmessage = (n)=>this.onConnMessage(n), this.conn.onclose = (n)=>this.onConnClose(n);
        }
        getSession(i) {
            return this.sessionStore && this.sessionStore.getItem(i);
        }
        storeSession(i, n) {
            this.sessionStore && this.sessionStore.setItem(i, n);
        }
        connectWithFallback(i, n = 2500) {
            clearTimeout(this.fallbackTimer);
            let r = !1, l = !0, u, h, f = this.transportName(i), d = (p)=>{
                this.log("transport", `falling back to ${f}...`, p), this.off([
                    u,
                    h
                ]), l = !1, this.replaceTransport(i), this.transportConnect();
            };
            if (this.getSession(`phx:fallback:${f}`)) return d("memorized");
            this.fallbackTimer = setTimeout(d, n), h = this.onError((p)=>{
                this.log("transport", "error", p), l && !r && (clearTimeout(this.fallbackTimer), d(p));
            }), this.fallbackRef && this.off([
                this.fallbackRef
            ]), this.fallbackRef = this.onOpen(()=>{
                if (r = !0, !l) {
                    let p = this.transportName(i);
                    return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${p}`, "true"), this.log("transport", `established ${p} fallback`);
                }
                clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(d, n), this.ping((p)=>{
                    this.log("transport", "connected to primary after", p), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
                });
            }), this.transportConnect();
        }
        clearHeartbeats() {
            clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
        }
        onConnOpen() {
            this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
        }
        heartbeatTimeout() {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
                try {
                    this.heartbeatCallback("timeout");
                } catch (i) {
                    this.log("error", "error in heartbeat callback", i);
                }
                this.triggerChanError(), this.closeWasClean = !1, this.teardown(()=>this.reconnectTimer.scheduleTimeout(), bw, "heartbeat timeout");
            }
        }
        resetHeartbeat() {
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(()=>this.sendHeartbeat(), this.heartbeatIntervalMs));
        }
        teardown(i, n, r) {
            if (!this.conn) return i && i();
            const l = this.conn;
            this.waitForBufferDone(l, ()=>{
                n ? l.close(n, r || "") : l.close(), this.waitForSocketClosed(l, ()=>{
                    this.conn === l && (this.conn.onopen = function() {}, this.conn.onerror = function() {}, this.conn.onmessage = function() {}, this.conn.onclose = function() {}, this.conn = null), i && i();
                });
            });
        }
        waitForBufferDone(i, n, r = 1) {
            if (r === 5 || !i.bufferedAmount) {
                n();
                return;
            }
            setTimeout(()=>{
                this.waitForBufferDone(i, n, r + 1);
            }, 150 * r);
        }
        waitForSocketClosed(i, n, r = 1) {
            if (r === 5 || i.readyState === rn.closed) {
                n();
                return;
            }
            setTimeout(()=>{
                this.waitForSocketClosed(i, n, r + 1);
            }, 150 * r);
        }
        onConnClose(i) {
            this.conn && (this.conn.onclose = ()=>{}), this.hasLogger() && this.log("transport", "close", i), this.triggerChanError(), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", i);
        }
        onConnError(i) {
            this.hasLogger() && this.log("transport", i);
            let n = this.transport, r = this.establishedConnections;
            this.triggerStateCallbacks("error", i, n, r), (n === this.transport || r > 0) && this.triggerChanError();
        }
        triggerChanError() {
            this.channels.forEach((i)=>{
                i.isErrored() || i.isLeaving() || i.isClosed() || i.trigger(An.error);
            });
        }
        connectionState() {
            switch(this.conn && this.conn.readyState){
                case rn.connecting:
                    return "connecting";
                case rn.open:
                    return "open";
                case rn.closing:
                    return "closing";
                default:
                    return "closed";
            }
        }
        isConnected() {
            return this.connectionState() === "open";
        }
        remove(i) {
            this.off(i.stateChangeRefs), this.channels = this.channels.filter((n)=>n !== i);
        }
        off(i) {
            for(let n in this.stateChangeCallbacks)this.stateChangeCallbacks[n] = this.stateChangeCallbacks[n].filter(([r])=>i.indexOf(r) === -1);
        }
        channel(i, n = {}) {
            let r = new _w(i, n, this);
            return this.channels.push(r), r;
        }
        push(i) {
            if (this.hasLogger()) {
                let { topic: n, event: r, payload: l, ref: u, join_ref: h } = i;
                this.log("push", `${n} ${r} (${h}, ${u})`, l);
            }
            this.isConnected() ? this.encode(i, (n)=>this.conn.send(n)) : this.sendBuffer.push(()=>this.encode(i, (n)=>this.conn.send(n)));
        }
        makeRef() {
            let i = this.ref + 1;
            return i === this.ref ? this.ref = 0 : this.ref = i, this.ref.toString();
        }
        sendHeartbeat() {
            if (!this.isConnected()) {
                try {
                    this.heartbeatCallback("disconnected");
                } catch (i) {
                    this.log("error", "error in heartbeat callback", i);
                }
                return;
            }
            if (this.pendingHeartbeatRef) {
                this.heartbeatTimeout();
                return;
            }
            this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            });
            try {
                this.heartbeatCallback("sent");
            } catch (i) {
                this.log("error", "error in heartbeat callback", i);
            }
            this.heartbeatTimeoutTimer = setTimeout(()=>this.heartbeatTimeout(), this.heartbeatIntervalMs);
        }
        flushSendBuffer() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((i)=>i()), this.sendBuffer = []);
        }
        onConnMessage(i) {
            this.decode(i.data, (n)=>{
                let { topic: r, event: l, payload: u, ref: h, join_ref: f } = n;
                if (h && h === this.pendingHeartbeatRef) {
                    const d = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                    this.clearHeartbeats();
                    try {
                        this.heartbeatCallback(u.status === "ok" ? "ok" : "error", d);
                    } catch (p) {
                        this.log("error", "error in heartbeat callback", p);
                    }
                    this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(()=>this.sendHeartbeat(), this.heartbeatIntervalMs));
                }
                this.hasLogger() && this.log("receive", `${u.status || ""} ${r} ${l} ${h && "(" + h + ")" || ""}`.trim(), u);
                for(let d = 0; d < this.channels.length; d++){
                    const p = this.channels[d];
                    p.isMember(r, l, u, f) && p.trigger(l, u, h, f);
                }
                this.triggerStateCallbacks("message", n);
            });
        }
        triggerStateCallbacks(i, ...n) {
            try {
                this.stateChangeCallbacks[i].forEach(([r, l])=>{
                    try {
                        l(...n);
                    } catch (u) {
                        this.log("error", `error in ${i} callback`, u);
                    }
                });
            } catch (r) {
                this.log("error", `error triggering ${i} callbacks`, r);
            }
        }
        leaveOpenTopic(i) {
            let n = this.channels.find((r)=>r.topic === i && (r.isJoined() || r.isJoining()));
            n && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${i}"`), n.leave());
        }
    };
    class Or {
        constructor(n, r){
            const l = xw(r);
            this.presence = new Ew(n.getChannel(), l), this.presence.onJoin((u, h, f)=>{
                const d = Or.onJoinPayload(u, h, f);
                n.getChannel().trigger("presence", d);
            }), this.presence.onLeave((u, h, f)=>{
                const d = Or.onLeavePayload(u, h, f);
                n.getChannel().trigger("presence", d);
            }), this.presence.onSync(()=>{
                n.getChannel().trigger("presence", {
                    event: "sync"
                });
            });
        }
        get state() {
            return Or.transformState(this.presence.state);
        }
        static transformState(n) {
            return n = Aw(n), Object.getOwnPropertyNames(n).reduce((r, l)=>{
                const u = n[l];
                return r[l] = gl(u), r;
            }, {});
        }
        static onJoinPayload(n, r, l) {
            const u = hm(r), h = gl(l);
            return {
                event: "join",
                key: n,
                currentPresences: u,
                newPresences: h
            };
        }
        static onLeavePayload(n, r, l) {
            const u = hm(r), h = gl(l);
            return {
                event: "leave",
                key: n,
                currentPresences: u,
                leftPresences: h
            };
        }
    }
    function gl(i) {
        return i.metas.map((n)=>(n.presence_ref = n.phx_ref, delete n.phx_ref, delete n.phx_ref_prev, n));
    }
    function Aw(i) {
        return JSON.parse(JSON.stringify(i));
    }
    function xw(i) {
        return i?.events && {
            events: i.events
        };
    }
    function hm(i) {
        return i?.metas ? gl(i) : [];
    }
    var fm;
    (function(i) {
        i.SYNC = "sync", i.JOIN = "join", i.LEAVE = "leave";
    })(fm || (fm = {}));
    class Rw {
        get state() {
            return this.presenceAdapter.state;
        }
        constructor(n, r){
            this.channel = n, this.presenceAdapter = new Or(this.channel.channelAdapter, r);
        }
    }
    class Ow {
        constructor(n, r, l){
            const u = Cw(l);
            this.channel = n.getSocket().channel(r, u), this.socket = n;
        }
        get state() {
            return this.channel.state;
        }
        set state(n) {
            this.channel.state = n;
        }
        get joinedOnce() {
            return this.channel.joinedOnce;
        }
        get joinPush() {
            return this.channel.joinPush;
        }
        get rejoinTimer() {
            return this.channel.rejoinTimer;
        }
        on(n, r) {
            return this.channel.on(n, r);
        }
        off(n, r) {
            this.channel.off(n, r);
        }
        subscribe(n) {
            return this.channel.join(n);
        }
        unsubscribe(n) {
            return this.channel.leave(n);
        }
        teardown() {
            this.channel.teardown();
        }
        onClose(n) {
            this.channel.onClose(n);
        }
        onError(n) {
            return this.channel.onError(n);
        }
        push(n, r, l) {
            let u;
            try {
                u = this.channel.push(n, r, l);
            } catch  {
                throw `tried to push '${n}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`;
            }
            if (this.channel.pushBuffer.length > ow) {
                const h = this.channel.pushBuffer.shift();
                h.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${h.event}`, h.payload());
            }
            return u;
        }
        updateJoinPayload(n) {
            const r = this.channel.joinPush.payload();
            this.channel.joinPush.payload = ()=>Object.assign(Object.assign({}, r), n);
        }
        canPush() {
            return this.socket.isConnected() && this.state === ta.joined;
        }
        isJoined() {
            return this.state === ta.joined;
        }
        isJoining() {
            return this.state === ta.joining;
        }
        isClosed() {
            return this.state === ta.closed;
        }
        isLeaving() {
            return this.state === ta.leaving;
        }
        updateFilterBindings(n) {
            this.channel.filterBindings = n;
        }
        updatePayloadTransform(n) {
            this.channel.onMessage = n;
        }
        getChannel() {
            return this.channel;
        }
    }
    function Cw(i) {
        return {
            config: Object.assign({
                broadcast: {
                    ack: !1,
                    self: !1
                },
                presence: {
                    key: "",
                    enabled: !1
                },
                private: !1
            }, i.config)
        };
    }
    var dm;
    (function(i) {
        i.ALL = "*", i.INSERT = "INSERT", i.UPDATE = "UPDATE", i.DELETE = "DELETE";
    })(dm || (dm = {}));
    var Si;
    (function(i) {
        i.BROADCAST = "broadcast", i.PRESENCE = "presence", i.POSTGRES_CHANGES = "postgres_changes", i.SYSTEM = "system";
    })(Si || (Si = {}));
    var xn;
    (function(i) {
        i.SUBSCRIBED = "SUBSCRIBED", i.TIMED_OUT = "TIMED_OUT", i.CLOSED = "CLOSED", i.CHANNEL_ERROR = "CHANNEL_ERROR";
    })(xn || (xn = {}));
    class Cr {
        get state() {
            return this.channelAdapter.state;
        }
        set state(n) {
            this.channelAdapter.state = n;
        }
        get joinedOnce() {
            return this.channelAdapter.joinedOnce;
        }
        get timeout() {
            return this.socket.timeout;
        }
        get joinPush() {
            return this.channelAdapter.joinPush;
        }
        get rejoinTimer() {
            return this.channelAdapter.rejoinTimer;
        }
        constructor(n, r = {
            config: {}
        }, l){
            var u, h;
            if (this.topic = n, this.params = r, this.socket = l, this.bindings = {}, this.subTopic = n.replace(/^realtime:/i, ""), this.params.config = Object.assign({
                broadcast: {
                    ack: !1,
                    self: !1
                },
                presence: {
                    key: "",
                    enabled: !1
                },
                private: !1
            }, r.config), this.channelAdapter = new Ow(this.socket.socketAdapter, n, this.params), this.presence = new Rw(this), this._onClose(()=>{
                this.socket._remove(this);
            }), this._updateFilterTransform(), this.broadcastEndpointURL = ug(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((h = (u = this.params.config) === null || u === void 0 ? void 0 : u.broadcast) === null || h === void 0) && h.replay)) throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
        }
        subscribe(n, r = this.timeout) {
            var l, u, h;
            if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
                const { config: { broadcast: f, presence: d, private: p } } = this.params, g = (u = (l = this.bindings.postgres_changes) === null || l === void 0 ? void 0 : l.map((E)=>E.filter)) !== null && u !== void 0 ? u : [], b = !!this.bindings[Si.PRESENCE] && this.bindings[Si.PRESENCE].length > 0 || ((h = this.params.config.presence) === null || h === void 0 ? void 0 : h.enabled) === !0, v = {}, S = {
                    broadcast: f,
                    presence: Object.assign(Object.assign({}, d), {
                        enabled: b
                    }),
                    postgres_changes: g,
                    private: p
                };
                this.socket.accessTokenValue && (v.access_token = this.socket.accessTokenValue), this._onError((E)=>{
                    n?.(xn.CHANNEL_ERROR, E);
                }), this._onClose(()=>n?.(xn.CLOSED)), this.updateJoinPayload(Object.assign({
                    config: S
                }, v)), this._updateFilterMessage(), this.channelAdapter.subscribe(r).receive("ok", async ({ postgres_changes: E })=>{
                    if (this.socket._isManualToken() || this.socket.setAuth(), E === void 0) {
                        n?.(xn.SUBSCRIBED);
                        return;
                    }
                    this._updatePostgresBindings(E, n);
                }).receive("error", (E)=>{
                    this.state = ta.errored, n?.(xn.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(E).join(", ") || "error")));
                }).receive("timeout", ()=>{
                    n?.(xn.TIMED_OUT);
                });
            }
            return this;
        }
        _updatePostgresBindings(n, r) {
            var l;
            const u = this.bindings.postgres_changes, h = (l = u?.length) !== null && l !== void 0 ? l : 0, f = [];
            for(let d = 0; d < h; d++){
                const p = u[d], { filter: { event: g, schema: b, table: v, filter: S } } = p, E = n && n[d];
                if (E && E.event === g && Cr.isFilterValueEqual(E.schema, b) && Cr.isFilterValueEqual(E.table, v) && Cr.isFilterValueEqual(E.filter, S)) f.push(Object.assign(Object.assign({}, p), {
                    id: E.id
                }));
                else {
                    this.unsubscribe(), this.state = ta.errored, r?.(xn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                    return;
                }
            }
            this.bindings.postgres_changes = f, this.state != ta.errored && r && r(xn.SUBSCRIBED);
        }
        presenceState() {
            return this.presence.state;
        }
        async track(n, r = {}) {
            return await this.send({
                type: "presence",
                event: "track",
                payload: n
            }, r.timeout || this.timeout);
        }
        async untrack(n = {}) {
            return await this.send({
                type: "presence",
                event: "untrack"
            }, n);
        }
        on(n, r, l) {
            const u = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), h = n === Si.PRESENCE || n === Si.POSTGRES_CHANGES;
            if (u && h) throw this.socket.log("channel", `cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`);
            return this._on(n, r, l);
        }
        async httpSend(n, r, l = {}) {
            var u;
            if (r == null) return Promise.reject("Payload is required for httpSend()");
            const h = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (h.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            const f = {
                method: "POST",
                headers: h,
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event: n,
                            payload: r,
                            private: this.private
                        }
                    ]
                })
            }, d = await this._fetchWithTimeout(this.broadcastEndpointURL, f, (u = l.timeout) !== null && u !== void 0 ? u : this.timeout);
            if (d.status === 202) return {
                success: !0
            };
            let p = d.statusText;
            try {
                const g = await d.json();
                p = g.error || g.message || p;
            } catch  {}
            return Promise.reject(new Error(p));
        }
        async send(n, r = {}) {
            var l, u;
            if (!this.channelAdapter.canPush() && n.type === "broadcast") {
                console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
                const { event: h, payload: f } = n, d = {
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                };
                this.socket.accessTokenValue && (d.Authorization = `Bearer ${this.socket.accessTokenValue}`);
                const p = {
                    method: "POST",
                    headers: d,
                    body: JSON.stringify({
                        messages: [
                            {
                                topic: this.subTopic,
                                event: h,
                                payload: f,
                                private: this.private
                            }
                        ]
                    })
                };
                try {
                    const g = await this._fetchWithTimeout(this.broadcastEndpointURL, p, (l = r.timeout) !== null && l !== void 0 ? l : this.timeout);
                    return await ((u = g.body) === null || u === void 0 ? void 0 : u.cancel()), g.ok ? "ok" : "error";
                } catch (g) {
                    return g.name === "AbortError" ? "timed out" : "error";
                }
            } else return new Promise((h)=>{
                var f, d, p;
                const g = this.channelAdapter.push(n.type, n, r.timeout || this.timeout);
                n.type === "broadcast" && !(!((p = (d = (f = this.params) === null || f === void 0 ? void 0 : f.config) === null || d === void 0 ? void 0 : d.broadcast) === null || p === void 0) && p.ack) && h("ok"), g.receive("ok", ()=>h("ok")), g.receive("error", ()=>h("error")), g.receive("timeout", ()=>h("timed out"));
            });
        }
        updateJoinPayload(n) {
            this.channelAdapter.updateJoinPayload(n);
        }
        async unsubscribe(n = this.timeout) {
            return new Promise((r)=>{
                this.channelAdapter.unsubscribe(n).receive("ok", ()=>r("ok")).receive("timeout", ()=>r("timed out")).receive("error", ()=>r("error"));
            });
        }
        teardown() {
            this.channelAdapter.teardown();
        }
        async _fetchWithTimeout(n, r, l) {
            const u = new AbortController, h = setTimeout(()=>u.abort(), l), f = await this.socket.fetch(n, Object.assign(Object.assign({}, r), {
                signal: u.signal
            }));
            return clearTimeout(h), f;
        }
        _on(n, r, l) {
            const u = n.toLocaleLowerCase(), h = this.channelAdapter.on(n, l), f = {
                type: u,
                filter: r,
                callback: l,
                ref: h
            };
            return this.bindings[u] ? this.bindings[u].push(f) : this.bindings[u] = [
                f
            ], this._updateFilterMessage(), this;
        }
        _onClose(n) {
            this.channelAdapter.onClose(n);
        }
        _onError(n) {
            this.channelAdapter.onError(n);
        }
        _updateFilterMessage() {
            this.channelAdapter.updateFilterBindings((n, r, l)=>{
                var u, h, f, d, p, g, b;
                const v = n.event.toLocaleLowerCase();
                if (this._notThisChannelEvent(v, l)) return !1;
                const S = (u = this.bindings[v]) === null || u === void 0 ? void 0 : u.find((E)=>E.ref === n.ref);
                if (!S) return !0;
                if ([
                    "broadcast",
                    "presence",
                    "postgres_changes"
                ].includes(v)) if ("id" in S) {
                    const E = S.id, N = (h = S.filter) === null || h === void 0 ? void 0 : h.event;
                    return E && ((f = r.ids) === null || f === void 0 ? void 0 : f.includes(E)) && (N === "*" || N?.toLocaleLowerCase() === ((d = r.data) === null || d === void 0 ? void 0 : d.type.toLocaleLowerCase()));
                } else {
                    const E = (g = (p = S?.filter) === null || p === void 0 ? void 0 : p.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase();
                    return E === "*" || E === ((b = r?.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase());
                }
                else return S.type.toLocaleLowerCase() === v;
            });
        }
        _notThisChannelEvent(n, r) {
            const { close: l, error: u, leave: h, join: f } = lg;
            return r && [
                l,
                u,
                h,
                f
            ].includes(n) && r !== this.joinPush.ref;
        }
        _updateFilterTransform() {
            this.channelAdapter.updatePayloadTransform((n, r, l)=>{
                if (typeof r == "object" && "ids" in r) {
                    const u = r.data, { schema: h, table: f, commit_timestamp: d, type: p, errors: g } = u;
                    return Object.assign(Object.assign({}, {
                        schema: h,
                        table: f,
                        commit_timestamp: d,
                        eventType: p,
                        new: {},
                        old: {},
                        errors: g
                    }), this._getPayloadRecords(u));
                }
                return r;
            });
        }
        copyBindings(n) {
            if (this.joinedOnce) throw new Error("cannot copy bindings into joined channel");
            for(const r in n.bindings)for (const l of n.bindings[r])this._on(l.type, l.filter, l.callback);
        }
        static isFilterValueEqual(n, r) {
            return (n ?? void 0) === (r ?? void 0);
        }
        _getPayloadRecords(n) {
            const r = {
                new: {},
                old: {}
            };
            return (n.type === "INSERT" || n.type === "UPDATE") && (r.new = cm(n.columns, n.record)), (n.type === "UPDATE" || n.type === "DELETE") && (r.old = cm(n.columns, n.old_record)), r;
        }
    }
    class kw {
        constructor(n, r){
            this.socket = new Tw(n, r);
        }
        get timeout() {
            return this.socket.timeout;
        }
        get endPoint() {
            return this.socket.endPoint;
        }
        get transport() {
            return this.socket.transport;
        }
        get heartbeatIntervalMs() {
            return this.socket.heartbeatIntervalMs;
        }
        get heartbeatCallback() {
            return this.socket.heartbeatCallback;
        }
        set heartbeatCallback(n) {
            this.socket.heartbeatCallback = n;
        }
        get heartbeatTimer() {
            return this.socket.heartbeatTimer;
        }
        get pendingHeartbeatRef() {
            return this.socket.pendingHeartbeatRef;
        }
        get reconnectTimer() {
            return this.socket.reconnectTimer;
        }
        get vsn() {
            return this.socket.vsn;
        }
        get encode() {
            return this.socket.encode;
        }
        get decode() {
            return this.socket.decode;
        }
        get reconnectAfterMs() {
            return this.socket.reconnectAfterMs;
        }
        get sendBuffer() {
            return this.socket.sendBuffer;
        }
        get stateChangeCallbacks() {
            return this.socket.stateChangeCallbacks;
        }
        connect() {
            this.socket.connect();
        }
        disconnect(n, r, l, u = 1e4) {
            return new Promise((h)=>{
                setTimeout(()=>h("timeout"), u), this.socket.disconnect(()=>{
                    n(), h("ok");
                }, r, l);
            });
        }
        push(n) {
            this.socket.push(n);
        }
        log(n, r, l) {
            this.socket.log(n, r, l);
        }
        makeRef() {
            return this.socket.makeRef();
        }
        onOpen(n) {
            this.socket.onOpen(n);
        }
        onClose(n) {
            this.socket.onClose(n);
        }
        onError(n) {
            this.socket.onError(n);
        }
        onMessage(n) {
            this.socket.onMessage(n);
        }
        isConnected() {
            return this.socket.isConnected();
        }
        isConnecting() {
            return this.socket.connectionState() == dc.connecting;
        }
        isDisconnecting() {
            return this.socket.connectionState() == dc.closing;
        }
        connectionState() {
            return this.socket.connectionState();
        }
        endPointURL() {
            return this.socket.endPointURL();
        }
        sendHeartbeat() {
            this.socket.sendHeartbeat();
        }
        getSocket() {
            return this.socket;
        }
    }
    const jw = {
        HEARTBEAT_INTERVAL: 25e3
    }, Nw = [
        1e3,
        2e3,
        5e3,
        1e4
    ], Dw = 1e4, Uw = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
    class zw {
        get endPoint() {
            return this.socketAdapter.endPoint;
        }
        get timeout() {
            return this.socketAdapter.timeout;
        }
        get transport() {
            return this.socketAdapter.transport;
        }
        get heartbeatCallback() {
            return this.socketAdapter.heartbeatCallback;
        }
        get heartbeatIntervalMs() {
            return this.socketAdapter.heartbeatIntervalMs;
        }
        get heartbeatTimer() {
            return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
        }
        get pendingHeartbeatRef() {
            return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
        }
        get reconnectTimer() {
            return this.socketAdapter.reconnectTimer;
        }
        get vsn() {
            return this.socketAdapter.vsn;
        }
        get encode() {
            return this.socketAdapter.encode;
        }
        get decode() {
            return this.socketAdapter.decode;
        }
        get reconnectAfterMs() {
            return this.socketAdapter.reconnectAfterMs;
        }
        get sendBuffer() {
            return this.socketAdapter.sendBuffer;
        }
        get stateChangeCallbacks() {
            return this.socketAdapter.stateChangeCallbacks;
        }
        constructor(n, r){
            var l;
            if (this.channels = new Array, this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new uw, this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._resolveFetch = (h)=>h ? (...f)=>h(...f) : (...f)=>fetch(...f), !(!((l = r?.params) === null || l === void 0) && l.apikey)) throw new Error("API key is required to connect to Realtime");
            this.apiKey = r.params.apikey;
            const u = this._initializeOptions(r);
            this.socketAdapter = new kw(n, u), this.httpEndpoint = ug(n), this.fetch = this._resolveFetch(r?.fetch);
        }
        connect() {
            if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
                this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
                try {
                    this.socketAdapter.connect();
                } catch (n) {
                    const r = n.message;
                    throw r.includes("Node.js") ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${r}`);
                }
                this._handleNodeJsRaceCondition();
            }
        }
        endpointURL() {
            return this.socketAdapter.endPointURL();
        }
        async disconnect(n, r) {
            return this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(()=>{
                clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
            }, n, r);
        }
        getChannels() {
            return this.channels;
        }
        async removeChannel(n) {
            const r = await n.unsubscribe();
            return r === "ok" && n.teardown(), this.channels.length === 0 && this.disconnect(), r;
        }
        async removeAllChannels() {
            const n = this.channels.map(async (l)=>{
                const u = await l.unsubscribe();
                return l.teardown(), u;
            }), r = await Promise.all(n);
            return this.disconnect(), r;
        }
        log(n, r, l) {
            this.socketAdapter.log(n, r, l);
        }
        connectionState() {
            return this.socketAdapter.connectionState() || dc.closed;
        }
        isConnected() {
            return this.socketAdapter.isConnected();
        }
        isConnecting() {
            return this.socketAdapter.isConnecting();
        }
        isDisconnecting() {
            return this.socketAdapter.isDisconnecting();
        }
        channel(n, r = {
            config: {}
        }) {
            const l = `realtime:${n}`, u = this.getChannels().find((h)=>h.topic === l);
            if (u) return u;
            {
                const h = new Cr(`realtime:${n}`, r, this);
                return this.channels.push(h), h;
            }
        }
        push(n) {
            this.socketAdapter.push(n);
        }
        async setAuth(n = null) {
            this._authPromise = this._performAuth(n);
            try {
                await this._authPromise;
            } finally{
                this._authPromise = null;
            }
        }
        _isManualToken() {
            return this._manuallySetToken;
        }
        async sendHeartbeat() {
            this.socketAdapter.sendHeartbeat();
        }
        onHeartbeat(n) {
            this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(n);
        }
        _makeRef() {
            return this.socketAdapter.makeRef();
        }
        _remove(n) {
            this.channels = this.channels.filter((r)=>r.topic !== n.topic);
        }
        async _performAuth(n = null) {
            let r, l = !1;
            if (n) r = n, l = !0;
            else if (this.accessToken) try {
                r = await this.accessToken();
            } catch (u) {
                this.log("error", "Error fetching access token from callback", u), r = this.accessTokenValue;
            }
            else r = this.accessTokenValue;
            l ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((u)=>{
                const h = {
                    access_token: r,
                    version: iw
                };
                r && u.updateJoinPayload(h), u.joinedOnce && u.channelAdapter.isJoined() && u.channelAdapter.push(lg.access_token, {
                    access_token: r
                });
            }));
        }
        async _waitForAuthIfNeeded() {
            this._authPromise && await this._authPromise;
        }
        _setAuthSafely(n = "general") {
            this._isManualToken() || this.setAuth().catch((r)=>{
                this.log("error", `Error setting auth in ${n}`, r);
            });
        }
        _setupConnectionHandlers() {
            this.socketAdapter.onOpen(()=>{
                (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((r)=>{
                    this.log("error", "error waiting for auth on connect", r);
                }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
            }), this.socketAdapter.onClose(()=>{
                this.worker && this.workerRef && this._terminateWorker();
            }), this.socketAdapter.onMessage((n)=>{
                n.ref && n.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
            });
        }
        _handleNodeJsRaceCondition() {
            this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
        }
        _wrapHeartbeatCallback(n) {
            return (r, l)=>{
                r == "sent" && this._setAuthSafely(), n && n(r, l);
            };
        }
        _startWorkerHeartbeat() {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const n = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(n), this.workerRef.onerror = (r)=>{
                this.log("worker", "worker error", r.message), this._terminateWorker(), this.disconnect();
            }, this.workerRef.onmessage = (r)=>{
                r.data.event === "keepAlive" && this.sendHeartbeat();
            }, this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            });
        }
        _terminateWorker() {
            this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
        }
        _workerObjectUrl(n) {
            let r;
            if (n) r = n;
            else {
                const l = new Blob([
                    Uw
                ], {
                    type: "application/javascript"
                });
                r = URL.createObjectURL(l);
            }
            return r;
        }
        _initializeOptions(n) {
            var r, l, u, h, f, d, p, g, b;
            this.worker = (r = n?.worker) !== null && r !== void 0 ? r : !1, this.accessToken = (l = n?.accessToken) !== null && l !== void 0 ? l : null;
            const v = {};
            v.timeout = (u = n?.timeout) !== null && u !== void 0 ? u : lw, v.heartbeatIntervalMs = (h = n?.heartbeatIntervalMs) !== null && h !== void 0 ? h : jw.HEARTBEAT_INTERVAL, v.transport = (f = n?.transport) !== null && f !== void 0 ? f : nw.getWebSocketConstructor(), v.params = n?.params, v.logger = n?.logger, v.heartbeatCallback = this._wrapHeartbeatCallback(n?.heartbeatCallback), v.reconnectAfterMs = (d = n?.reconnectAfterMs) !== null && d !== void 0 ? d : ((D)=>Nw[D - 1] || Dw);
            let S, E;
            const N = (p = n?.vsn) !== null && p !== void 0 ? p : sw;
            switch(N){
                case rw:
                    S = (D, k)=>k(JSON.stringify(D)), E = (D, k)=>k(JSON.parse(D));
                    break;
                case sg:
                    S = this.serializer.encode.bind(this.serializer), E = this.serializer.decode.bind(this.serializer);
                    break;
                default:
                    throw new Error(`Unsupported serializer version: ${v.vsn}`);
            }
            if (v.vsn = N, v.encode = (g = n?.encode) !== null && g !== void 0 ? g : S, v.decode = (b = n?.decode) !== null && b !== void 0 ? b : E, v.beforeReconnect = this._reconnectAuth.bind(this), (n?.logLevel || n?.log_level) && (this.logLevel = n.logLevel || n.log_level, v.params = Object.assign(Object.assign({}, v.params), {
                log_level: this.logLevel
            })), this.worker) {
                if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
                this.workerUrl = n?.workerUrl, v.autoSendHeartbeat = !this.worker;
            }
            return v;
        }
        async _reconnectAuth() {
            await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
        }
    }
    var Nr = class extends Error {
        constructor(i, n){
            super(i), this.name = "IcebergError", this.status = n.status, this.icebergType = n.icebergType, this.icebergCode = n.icebergCode, this.details = n.details, this.isCommitStateUnknown = n.icebergType === "CommitStateUnknownException" || [
                500,
                502,
                504
            ].includes(n.status) && n.icebergType?.includes("CommitState") === !0;
        }
        isNotFound() {
            return this.status === 404;
        }
        isConflict() {
            return this.status === 409;
        }
        isAuthenticationTimeout() {
            return this.status === 419;
        }
    };
    function Lw(i, n, r) {
        const l = new URL(n, i);
        if (r) for (const [u, h] of Object.entries(r))h !== void 0 && l.searchParams.set(u, h);
        return l.toString();
    }
    async function Mw(i) {
        return !i || i.type === "none" ? {} : i.type === "bearer" ? {
            Authorization: `Bearer ${i.token}`
        } : i.type === "header" ? {
            [i.name]: i.value
        } : i.type === "custom" ? await i.getHeaders() : {};
    }
    function Hw(i) {
        const n = i.fetchImpl ?? globalThis.fetch;
        return {
            async request ({ method: r, path: l, query: u, body: h, headers: f }) {
                const d = Lw(i.baseUrl, l, u), p = await Mw(i.auth), g = await n(d, {
                    method: r,
                    headers: {
                        ...h ? {
                            "Content-Type": "application/json"
                        } : {},
                        ...p,
                        ...f
                    },
                    body: h ? JSON.stringify(h) : void 0
                }), b = await g.text(), v = (g.headers.get("content-type") || "").includes("application/json"), S = v && b ? JSON.parse(b) : b;
                if (!g.ok) {
                    const E = v ? S : void 0, N = E?.error;
                    throw new Nr(N?.message ?? `Request failed with status ${g.status}`, {
                        status: g.status,
                        icebergType: N?.type,
                        icebergCode: N?.code,
                        details: E
                    });
                }
                return {
                    status: g.status,
                    headers: g.headers,
                    data: S
                };
            }
        };
    }
    function ul(i) {
        return i.join("");
    }
    var Bw = class {
        constructor(i, n = ""){
            this.client = i, this.prefix = n;
        }
        async listNamespaces(i) {
            const n = i ? {
                parent: ul(i.namespace)
            } : void 0;
            return (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces`,
                query: n
            })).data.namespaces.map((l)=>({
                    namespace: l
                }));
        }
        async createNamespace(i, n) {
            const r = {
                namespace: i.namespace,
                properties: n?.properties
            };
            return (await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces`,
                body: r
            })).data;
        }
        async dropNamespace(i) {
            await this.client.request({
                method: "DELETE",
                path: `${this.prefix}/namespaces/${ul(i.namespace)}`
            });
        }
        async loadNamespaceMetadata(i) {
            return {
                properties: (await this.client.request({
                    method: "GET",
                    path: `${this.prefix}/namespaces/${ul(i.namespace)}`
                })).data.properties
            };
        }
        async namespaceExists(i) {
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${ul(i.namespace)}`
                }), !0;
            } catch (n) {
                if (n instanceof Nr && n.status === 404) return !1;
                throw n;
            }
        }
        async createNamespaceIfNotExists(i, n) {
            try {
                return await this.createNamespace(i, n);
            } catch (r) {
                if (r instanceof Nr && r.status === 409) return;
                throw r;
            }
        }
    };
    function fi(i) {
        return i.join("");
    }
    var qw = class {
        constructor(i, n = "", r){
            this.client = i, this.prefix = n, this.accessDelegation = r;
        }
        async listTables(i) {
            return (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables`
            })).data.identifiers;
        }
        async createTable(i, n) {
            const r = {};
            return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables`,
                body: n,
                headers: r
            })).data.metadata;
        }
        async updateTable(i, n) {
            const r = await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables/${i.name}`,
                body: n
            });
            return {
                "metadata-location": r.data["metadata-location"],
                metadata: r.data.metadata
            };
        }
        async dropTable(i, n) {
            await this.client.request({
                method: "DELETE",
                path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables/${i.name}`,
                query: {
                    purgeRequested: String(n?.purge ?? !1)
                }
            });
        }
        async loadTable(i) {
            const n = {};
            return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables/${i.name}`,
                headers: n
            })).data.metadata;
        }
        async tableExists(i) {
            const n = {};
            this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation);
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${fi(i.namespace)}/tables/${i.name}`,
                    headers: n
                }), !0;
            } catch (r) {
                if (r instanceof Nr && r.status === 404) return !1;
                throw r;
            }
        }
        async createTableIfNotExists(i, n) {
            try {
                return await this.createTable(i, n);
            } catch (r) {
                if (r instanceof Nr && r.status === 409) return await this.loadTable({
                    namespace: i.namespace,
                    name: n.name
                });
                throw r;
            }
        }
    }, Pw = class {
        constructor(i){
            let n = "v1";
            i.catalogName && (n += `/${i.catalogName}`);
            const r = i.baseUrl.endsWith("/") ? i.baseUrl : `${i.baseUrl}/`;
            this.client = Hw({
                baseUrl: r,
                auth: i.auth,
                fetchImpl: i.fetch
            }), this.accessDelegation = i.accessDelegation?.join(","), this.namespaceOps = new Bw(this.client, n), this.tableOps = new qw(this.client, n, this.accessDelegation);
        }
        async listNamespaces(i) {
            return this.namespaceOps.listNamespaces(i);
        }
        async createNamespace(i, n) {
            return this.namespaceOps.createNamespace(i, n);
        }
        async dropNamespace(i) {
            await this.namespaceOps.dropNamespace(i);
        }
        async loadNamespaceMetadata(i) {
            return this.namespaceOps.loadNamespaceMetadata(i);
        }
        async listTables(i) {
            return this.tableOps.listTables(i);
        }
        async createTable(i, n) {
            return this.tableOps.createTable(i, n);
        }
        async updateTable(i, n) {
            return this.tableOps.updateTable(i, n);
        }
        async dropTable(i, n) {
            await this.tableOps.dropTable(i, n);
        }
        async loadTable(i) {
            return this.tableOps.loadTable(i);
        }
        async namespaceExists(i) {
            return this.namespaceOps.namespaceExists(i);
        }
        async tableExists(i) {
            return this.tableOps.tableExists(i);
        }
        async createNamespaceIfNotExists(i, n) {
            return this.namespaceOps.createNamespaceIfNotExists(i, n);
        }
        async createTableIfNotExists(i, n) {
            return this.tableOps.createTableIfNotExists(i, n);
        }
    }, xl = class extends Error {
        constructor(i, n = "storage", r, l){
            super(i), this.__isStorageError = !0, this.namespace = n, this.name = n === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = l;
        }
    };
    function Rl(i) {
        return typeof i == "object" && i !== null && "__isStorageError" in i;
    }
    var yc = class extends xl {
        constructor(i, n, r, l = "storage"){
            super(i, l, n, r), this.name = l === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = n, this.statusCode = r;
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                statusCode: this.statusCode
            };
        }
    }, hg = class extends xl {
        constructor(i, n, r = "storage"){
            super(i, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = n;
        }
    };
    const $w = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), Gw = (i)=>{
        if (typeof i != "object" || i === null) return !1;
        const n = Object.getPrototypeOf(i);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
    }, vc = (i)=>{
        if (Array.isArray(i)) return i.map((r)=>vc(r));
        if (typeof i == "function" || i !== Object(i)) return i;
        const n = {};
        return Object.entries(i).forEach(([r, l])=>{
            const u = r.replace(/([-_][a-z])/gi, (h)=>h.toUpperCase().replace(/[-_]/g, ""));
            n[u] = vc(l);
        }), n;
    }, Iw = (i)=>!i || typeof i != "string" || i.length === 0 || i.length > 100 || i.trim() !== i || i.includes("/") || i.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(i);
    function Dr(i) {
        "@babel/helpers - typeof";
        return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, Dr(i);
    }
    function Vw(i, n) {
        if (Dr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (Dr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function Kw(i) {
        var n = Vw(i, "string");
        return Dr(n) == "symbol" ? n : n + "";
    }
    function Yw(i, n, r) {
        return (n = Kw(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function pm(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function F(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? pm(Object(r), !0).forEach(function(l) {
                Yw(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const mm = (i)=>{
        var n;
        return i.msg || i.message || i.error_description || (typeof i.error == "string" ? i.error : (n = i.error) === null || n === void 0 ? void 0 : n.message) || JSON.stringify(i);
    }, Xw = async (i, n, r, l)=>{
        if (i !== null && typeof i == "object" && typeof i.json == "function") {
            const u = i;
            let h = parseInt(u.status, 10);
            Number.isFinite(h) || (h = 500), u.json().then((f)=>{
                const d = f?.statusCode || f?.code || h + "";
                n(new yc(mm(f), h, d, l));
            }).catch(()=>{
                const f = h + "";
                n(new yc(u.statusText || `HTTP ${h} error`, h, f, l));
            });
        } else n(new hg(mm(i), i, l));
    }, Ww = (i, n, r, l)=>{
        const u = {
            method: i,
            headers: n?.headers || {}
        };
        if (i === "GET" || i === "HEAD" || !l) return F(F({}, u), r);
        if (Gw(l)) {
            var h;
            const f = n?.headers || {};
            let d;
            for (const [p, g] of Object.entries(f))p.toLowerCase() === "content-type" && (d = g);
            u.headers = Jw(f, "Content-Type", (h = d) !== null && h !== void 0 ? h : "application/json"), u.body = JSON.stringify(l);
        } else u.body = l;
        return n?.duplex && (u.duplex = n.duplex), F(F({}, u), r);
    };
    function Jw(i, n, r) {
        const l = F({}, i);
        for (const u of Object.keys(l))u.toLowerCase() === n.toLowerCase() && delete l[u];
        return l[n] = r, l;
    }
    async function Tr(i, n, r, l, u, h, f) {
        return new Promise((d, p)=>{
            i(r, Ww(n, l, u, h)).then((g)=>{
                if (!g.ok) throw g;
                if (l?.noResolveJson) return g;
                if (f === "vectors") {
                    const b = g.headers.get("content-type");
                    if (g.headers.get("content-length") === "0" || g.status === 204) return {};
                    if (!b || !b.includes("application/json")) return {};
                }
                return g.json();
            }).then((g)=>d(g)).catch((g)=>Xw(g, p, l, f));
        });
    }
    function fg(i = "storage") {
        return {
            get: async (n, r, l, u)=>Tr(n, "GET", r, l, u, void 0, i),
            post: async (n, r, l, u, h)=>Tr(n, "POST", r, u, h, l, i),
            put: async (n, r, l, u, h)=>Tr(n, "PUT", r, u, h, l, i),
            head: async (n, r, l, u)=>Tr(n, "HEAD", r, F(F({}, l), {}, {
                    noResolveJson: !0
                }), u, void 0, i),
            remove: async (n, r, l, u, h)=>Tr(n, "DELETE", r, u, h, l, i)
        };
    }
    const Qw = fg("storage"), { get: Ur, post: Wt, put: bc, head: Zw, remove: Lc } = Qw, kt = fg("vectors");
    var Ri = class {
        constructor(i, n = {}, r, l = "storage"){
            this.shouldThrowOnError = !1, this.url = i, this.headers = Object.fromEntries(Object.entries(n).map(([u, h])=>[
                    u.toLowerCase(),
                    h
                ])), this.fetch = $w(r), this.namespace = l;
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this;
        }
        setHeader(i, n) {
            return this.headers = F(F({}, this.headers), {}, {
                [i.toLowerCase()]: n
            }), this;
        }
        async handleOperation(i) {
            var n = this;
            try {
                return {
                    data: await i(),
                    error: null
                };
            } catch (r) {
                if (n.shouldThrowOnError) throw r;
                if (Rl(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
    }, Fw = class {
        constructor(i, n){
            this.downloadFn = i, this.shouldThrowOnError = n;
        }
        then(i, n) {
            return this.execute().then(i, n);
        }
        async execute() {
            var i = this;
            try {
                return {
                    data: (await i.downloadFn()).body,
                    error: null
                };
            } catch (n) {
                if (i.shouldThrowOnError) throw n;
                if (Rl(n)) return {
                    data: null,
                    error: n
                };
                throw n;
            }
        }
    };
    let dg;
    dg = Symbol.toStringTag;
    var e_ = class {
        constructor(i, n){
            this.downloadFn = i, this.shouldThrowOnError = n, this[dg] = "BlobDownloadBuilder", this.promise = null;
        }
        asStream() {
            return new Fw(this.downloadFn, this.shouldThrowOnError);
        }
        then(i, n) {
            return this.getPromise().then(i, n);
        }
        catch(i) {
            return this.getPromise().catch(i);
        }
        finally(i) {
            return this.getPromise().finally(i);
        }
        getPromise() {
            return this.promise || (this.promise = this.execute()), this.promise;
        }
        async execute() {
            var i = this;
            try {
                return {
                    data: await (await i.downloadFn()).blob(),
                    error: null
                };
            } catch (n) {
                if (i.shouldThrowOnError) throw n;
                if (Rl(n)) return {
                    data: null,
                    error: n
                };
                throw n;
            }
        }
    };
    const t_ = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    }, gm = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
    var n_ = class extends Ri {
        constructor(i, n = {}, r, l){
            super(i, n, l, "storage"), this.bucketId = r;
        }
        async uploadOrUpdate(i, n, r, l) {
            var u = this;
            return u.handleOperation(async ()=>{
                let h;
                const f = F(F({}, gm), l);
                let d = F(F({}, u.headers), i === "POST" && {
                    "x-upsert": String(f.upsert)
                });
                const p = f.metadata;
                typeof Blob < "u" && r instanceof Blob ? (h = new FormData, h.append("cacheControl", f.cacheControl), p && h.append("metadata", u.encodeMetadata(p)), h.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (h = r, h.has("cacheControl") || h.append("cacheControl", f.cacheControl), p && !h.has("metadata") && h.append("metadata", u.encodeMetadata(p))) : (h = r, d["cache-control"] = `max-age=${f.cacheControl}`, d["content-type"] = f.contentType, p && (d["x-metadata"] = u.toBase64(u.encodeMetadata(p))), (typeof ReadableStream < "u" && h instanceof ReadableStream || h && typeof h == "object" && "pipe" in h && typeof h.pipe == "function") && !f.duplex && (f.duplex = "half")), l?.headers && (d = F(F({}, d), l.headers));
                const g = u._removeEmptyFolders(n), b = u._getFinalPath(g), v = await (i == "PUT" ? bc : Wt)(u.fetch, `${u.url}/object/${b}`, h, F({
                    headers: d
                }, f?.duplex ? {
                    duplex: f.duplex
                } : {}));
                return {
                    path: g,
                    id: v.Id,
                    fullPath: v.Key
                };
            });
        }
        async upload(i, n, r) {
            return this.uploadOrUpdate("POST", i, n, r);
        }
        async uploadToSignedUrl(i, n, r, l) {
            var u = this;
            const h = u._removeEmptyFolders(i), f = u._getFinalPath(h), d = new URL(u.url + `/object/upload/sign/${f}`);
            return d.searchParams.set("token", n), u.handleOperation(async ()=>{
                let p;
                const g = F(F({}, gm), l), b = F(F({}, u.headers), {
                    "x-upsert": String(g.upsert)
                });
                return typeof Blob < "u" && r instanceof Blob ? (p = new FormData, p.append("cacheControl", g.cacheControl), p.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (p = r, p.append("cacheControl", g.cacheControl)) : (p = r, b["cache-control"] = `max-age=${g.cacheControl}`, b["content-type"] = g.contentType), {
                    path: h,
                    fullPath: (await bc(u.fetch, d.toString(), p, {
                        headers: b
                    })).Key
                };
            });
        }
        async createSignedUploadUrl(i, n) {
            var r = this;
            return r.handleOperation(async ()=>{
                let l = r._getFinalPath(i);
                const u = F({}, r.headers);
                n?.upsert && (u["x-upsert"] = "true");
                const h = await Wt(r.fetch, `${r.url}/object/upload/sign/${l}`, {}, {
                    headers: u
                }), f = new URL(r.url + h.url), d = f.searchParams.get("token");
                if (!d) throw new xl("No token returned by API");
                return {
                    signedUrl: f.toString(),
                    path: i,
                    token: d
                };
            });
        }
        async update(i, n, r) {
            return this.uploadOrUpdate("PUT", i, n, r);
        }
        async move(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>await Wt(l.fetch, `${l.url}/object/move`, {
                    bucketId: l.bucketId,
                    sourceKey: i,
                    destinationKey: n,
                    destinationBucket: r?.destinationBucket
                }, {
                    headers: l.headers
                }));
        }
        async copy(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>({
                    path: (await Wt(l.fetch, `${l.url}/object/copy`, {
                        bucketId: l.bucketId,
                        sourceKey: i,
                        destinationKey: n,
                        destinationBucket: r?.destinationBucket
                    }, {
                        headers: l.headers
                    })).Key
                }));
        }
        async createSignedUrl(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                let u = l._getFinalPath(i);
                const h = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
                let f = await Wt(l.fetch, `${l.url}/object/sign/${u}`, F({
                    expiresIn: n
                }, h ? {
                    transform: r.transform
                } : {}), {
                    headers: l.headers
                });
                const d = new URLSearchParams;
                r?.download && d.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && d.set("cacheNonce", String(r.cacheNonce));
                const p = d.toString(), g = h && f.signedURL.includes("/object/sign/") ? f.signedURL.replace("/object/sign/", "/render/image/sign/") : f.signedURL;
                return {
                    signedUrl: encodeURI(`${l.url}${g}${p ? `&${p}` : ""}`)
                };
            });
        }
        async createSignedUrls(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                const u = await Wt(l.fetch, `${l.url}/object/sign/${l.bucketId}`, {
                    expiresIn: n,
                    paths: i
                }, {
                    headers: l.headers
                }), h = new URLSearchParams;
                r?.download && h.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && h.set("cacheNonce", String(r.cacheNonce));
                const f = h.toString();
                return u.map((d)=>F(F({}, d), {}, {
                        signedUrl: d.signedURL ? encodeURI(`${l.url}${d.signedURL}${f ? `&${f}` : ""}`) : null
                    }));
            });
        }
        download(i, n, r) {
            const l = typeof n?.transform < "u" ? "render/image/authenticated" : "object", u = new URLSearchParams;
            n?.transform && this.applyTransformOptsToQuery(u, n.transform), n?.cacheNonce != null && u.set("cacheNonce", String(n.cacheNonce));
            const h = u.toString(), f = this._getFinalPath(i), d = ()=>Ur(this.fetch, `${this.url}/${l}/${f}${h ? `?${h}` : ""}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }, r);
            return new e_(d, this.shouldThrowOnError);
        }
        async info(i) {
            var n = this;
            const r = n._getFinalPath(i);
            return n.handleOperation(async ()=>vc(await Ur(n.fetch, `${n.url}/object/info/${r}`, {
                    headers: n.headers
                })));
        }
        async exists(i) {
            var n = this;
            const r = n._getFinalPath(i);
            try {
                return await Zw(n.fetch, `${n.url}/object/${r}`, {
                    headers: n.headers
                }), {
                    data: !0,
                    error: null
                };
            } catch (u) {
                if (n.shouldThrowOnError) throw u;
                if (Rl(u)) {
                    var l;
                    const h = u instanceof yc ? u.status : u instanceof hg ? (l = u.originalError) === null || l === void 0 ? void 0 : l.status : void 0;
                    if (h !== void 0 && [
                        400,
                        404
                    ].includes(h)) return {
                        data: !1,
                        error: u
                    };
                }
                throw u;
            }
        }
        getPublicUrl(i, n) {
            const r = this._getFinalPath(i), l = new URLSearchParams;
            n?.download && l.set("download", n.download === !0 ? "" : n.download), n?.transform && this.applyTransformOptsToQuery(l, n.transform), n?.cacheNonce != null && l.set("cacheNonce", String(n.cacheNonce));
            const u = l.toString(), h = typeof n?.transform < "u" ? "render/image" : "object";
            return {
                data: {
                    publicUrl: encodeURI(`${this.url}/${h}/public/${r}`) + (u ? `?${u}` : "")
                }
            };
        }
        async remove(i) {
            var n = this;
            return n.handleOperation(async ()=>await Lc(n.fetch, `${n.url}/object/${n.bucketId}`, {
                    prefixes: i
                }, {
                    headers: n.headers
                }));
        }
        async list(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                const u = F(F(F({}, t_), n), {}, {
                    prefix: i || ""
                });
                return await Wt(l.fetch, `${l.url}/object/list/${l.bucketId}`, u, {
                    headers: l.headers
                }, r);
            });
        }
        async listV2(i, n) {
            var r = this;
            return r.handleOperation(async ()=>{
                const l = F({}, i);
                return await Wt(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, l, {
                    headers: r.headers
                }, n);
            });
        }
        encodeMetadata(i) {
            return JSON.stringify(i);
        }
        toBase64(i) {
            return typeof Buffer < "u" ? Buffer.from(i).toString("base64") : btoa(i);
        }
        _getFinalPath(i) {
            return `${this.bucketId}/${i.replace(/^\/+/, "")}`;
        }
        _removeEmptyFolders(i) {
            return i.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        applyTransformOptsToQuery(i, n) {
            return n.width && i.set("width", n.width.toString()), n.height && i.set("height", n.height.toString()), n.resize && i.set("resize", n.resize), n.format && i.set("format", n.format), n.quality && i.set("quality", n.quality.toString()), i;
        }
    };
    const a_ = "2.103.0", qr = {
        "X-Client-Info": `storage-js/${a_}`
    };
    var i_ = class extends Ri {
        constructor(i, n = {}, r, l){
            const u = new URL(i);
            l?.useNewHostname && /supabase\.(co|in|red)$/.test(u.hostname) && !u.hostname.includes("storage.supabase.") && (u.hostname = u.hostname.replace("supabase.", "storage.supabase."));
            const h = u.href.replace(/\/$/, ""), f = F(F({}, qr), n);
            super(h, f, r, "storage");
        }
        async listBuckets(i) {
            var n = this;
            return n.handleOperation(async ()=>{
                const r = n.listBucketOptionsToQueryString(i);
                return await Ur(n.fetch, `${n.url}/bucket${r}`, {
                    headers: n.headers
                });
            });
        }
        async getBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Ur(n.fetch, `${n.url}/bucket/${i}`, {
                    headers: n.headers
                }));
        }
        async createBucket(i, n = {
            public: !1
        }) {
            var r = this;
            return r.handleOperation(async ()=>await Wt(r.fetch, `${r.url}/bucket`, {
                    id: i,
                    name: i,
                    type: n.type,
                    public: n.public,
                    file_size_limit: n.fileSizeLimit,
                    allowed_mime_types: n.allowedMimeTypes
                }, {
                    headers: r.headers
                }));
        }
        async updateBucket(i, n) {
            var r = this;
            return r.handleOperation(async ()=>await bc(r.fetch, `${r.url}/bucket/${i}`, {
                    id: i,
                    name: i,
                    public: n.public,
                    file_size_limit: n.fileSizeLimit,
                    allowed_mime_types: n.allowedMimeTypes
                }, {
                    headers: r.headers
                }));
        }
        async emptyBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Wt(n.fetch, `${n.url}/bucket/${i}/empty`, {}, {
                    headers: n.headers
                }));
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Lc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        listBucketOptionsToQueryString(i) {
            const n = {};
            return i && ("limit" in i && (n.limit = String(i.limit)), "offset" in i && (n.offset = String(i.offset)), i.search && (n.search = i.search), i.sortColumn && (n.sortColumn = i.sortColumn), i.sortOrder && (n.sortOrder = i.sortOrder)), Object.keys(n).length > 0 ? "?" + new URLSearchParams(n).toString() : "";
        }
    }, r_ = class extends Ri {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = F(F({}, qr), n);
            super(l, u, r, "storage");
        }
        async createBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Wt(n.fetch, `${n.url}/bucket`, {
                    name: i
                }, {
                    headers: n.headers
                }));
        }
        async listBuckets(i) {
            var n = this;
            return n.handleOperation(async ()=>{
                const r = new URLSearchParams;
                i?.limit !== void 0 && r.set("limit", i.limit.toString()), i?.offset !== void 0 && r.set("offset", i.offset.toString()), i?.sortColumn && r.set("sortColumn", i.sortColumn), i?.sortOrder && r.set("sortOrder", i.sortOrder), i?.search && r.set("search", i.search);
                const l = r.toString(), u = l ? `${n.url}/bucket?${l}` : `${n.url}/bucket`;
                return await Ur(n.fetch, u, {
                    headers: n.headers
                });
            });
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Lc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        from(i) {
            var n = this;
            if (!Iw(i)) throw new xl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
            const r = new Pw({
                baseUrl: this.url,
                catalogName: i,
                auth: {
                    type: "custom",
                    getHeaders: async ()=>n.headers
                },
                fetch: this.fetch
            }), l = this.shouldThrowOnError;
            return new Proxy(r, {
                get (u, h) {
                    const f = u[h];
                    return typeof f != "function" ? f : async (...d)=>{
                        try {
                            return {
                                data: await f.apply(u, d),
                                error: null
                            };
                        } catch (p) {
                            if (l) throw p;
                            return {
                                data: null,
                                error: p
                            };
                        }
                    };
                }
            });
        }
    }, s_ = class extends Ri {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = F(F({}, qr), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async createIndex(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/CreateIndex`, i, {
                    headers: n.headers
                }) || {});
        }
        async getIndex(i, n) {
            var r = this;
            return r.handleOperation(async ()=>await kt.post(r.fetch, `${r.url}/GetIndex`, {
                    vectorBucketName: i,
                    indexName: n
                }, {
                    headers: r.headers
                }));
        }
        async listIndexes(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/ListIndexes`, i, {
                    headers: n.headers
                }));
        }
        async deleteIndex(i, n) {
            var r = this;
            return r.handleOperation(async ()=>await kt.post(r.fetch, `${r.url}/DeleteIndex`, {
                    vectorBucketName: i,
                    indexName: n
                }, {
                    headers: r.headers
                }) || {});
        }
    }, l_ = class extends Ri {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = F(F({}, qr), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async putVectors(i) {
            var n = this;
            if (i.vectors.length < 1 || i.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/PutVectors`, i, {
                    headers: n.headers
                }) || {});
        }
        async getVectors(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/GetVectors`, i, {
                    headers: n.headers
                }));
        }
        async listVectors(i) {
            var n = this;
            if (i.segmentCount !== void 0) {
                if (i.segmentCount < 1 || i.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
                if (i.segmentIndex !== void 0 && (i.segmentIndex < 0 || i.segmentIndex >= i.segmentCount)) throw new Error(`segmentIndex must be between 0 and ${i.segmentCount - 1}`);
            }
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/ListVectors`, i, {
                    headers: n.headers
                }));
        }
        async queryVectors(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/QueryVectors`, i, {
                    headers: n.headers
                }));
        }
        async deleteVectors(i) {
            var n = this;
            if (i.keys.length < 1 || i.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/DeleteVectors`, i, {
                    headers: n.headers
                }) || {});
        }
    }, o_ = class extends Ri {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = F(F({}, qr), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async createBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/CreateVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }) || {});
        }
        async getBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/GetVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }));
        }
        async listBuckets(i = {}) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/ListVectorBuckets`, i, {
                    headers: n.headers
                }));
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await kt.post(n.fetch, `${n.url}/DeleteVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }) || {});
        }
    }, u_ = class extends o_ {
        constructor(i, n = {}){
            super(i, n.headers || {}, n.fetch);
        }
        from(i) {
            return new c_(this.url, this.headers, i, this.fetch);
        }
        async createBucket(i) {
            var n = ()=>super.createBucket, r = this;
            return n().call(r, i);
        }
        async getBucket(i) {
            var n = ()=>super.getBucket, r = this;
            return n().call(r, i);
        }
        async listBuckets(i = {}) {
            var n = ()=>super.listBuckets, r = this;
            return n().call(r, i);
        }
        async deleteBucket(i) {
            var n = ()=>super.deleteBucket, r = this;
            return n().call(r, i);
        }
    }, c_ = class extends s_ {
        constructor(i, n, r, l){
            super(i, n, l), this.vectorBucketName = r;
        }
        async createIndex(i) {
            var n = ()=>super.createIndex, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName
            }));
        }
        async listIndexes(i = {}) {
            var n = ()=>super.listIndexes, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName
            }));
        }
        async getIndex(i) {
            var n = ()=>super.getIndex, r = this;
            return n().call(r, r.vectorBucketName, i);
        }
        async deleteIndex(i) {
            var n = ()=>super.deleteIndex, r = this;
            return n().call(r, r.vectorBucketName, i);
        }
        index(i) {
            return new h_(this.url, this.headers, this.vectorBucketName, i, this.fetch);
        }
    }, h_ = class extends l_ {
        constructor(i, n, r, l, u){
            super(i, n, u), this.vectorBucketName = r, this.indexName = l;
        }
        async putVectors(i) {
            var n = ()=>super.putVectors, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async getVectors(i) {
            var n = ()=>super.getVectors, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async listVectors(i = {}) {
            var n = ()=>super.listVectors, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async queryVectors(i) {
            var n = ()=>super.queryVectors, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async deleteVectors(i) {
            var n = ()=>super.deleteVectors, r = this;
            return n().call(r, F(F({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
    }, f_ = class extends i_ {
        constructor(i, n = {}, r, l){
            super(i, n, r, l);
        }
        from(i) {
            return new n_(this.url, this.headers, i, this.fetch);
        }
        get vectors() {
            return new u_(this.url + "/vector", {
                headers: this.headers,
                fetch: this.fetch
            });
        }
        get analytics() {
            return new r_(this.url + "/iceberg", this.headers, this.fetch);
        }
    };
    const pg = "2.103.0", wi = 30 * 1e3, wc = 3, ic = wc * wi, d_ = "http://localhost:9999", p_ = "supabase.auth.token", m_ = {
        "X-Client-Info": `gotrue-js/${pg}`
    }, _c = "X-Supabase-Api-Version", mg = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    }, g_ = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, y_ = 600 * 1e3;
    class zr extends Error {
        constructor(n, r, l){
            super(n), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = l;
        }
    }
    function X(i) {
        return typeof i == "object" && i !== null && "__isAuthError" in i;
    }
    class v_ extends zr {
        constructor(n, r, l){
            super(n, r, l), this.name = "AuthApiError", this.status = r, this.code = l;
        }
    }
    function b_(i) {
        return X(i) && i.name === "AuthApiError";
    }
    class Aa extends zr {
        constructor(n, r){
            super(n), this.name = "AuthUnknownError", this.originalError = r;
        }
    }
    class Cn extends zr {
        constructor(n, r, l, u){
            super(n, l, u), this.name = r, this.status = l;
        }
    }
    class Ct extends Cn {
        constructor(){
            super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
        }
    }
    function cl(i) {
        return X(i) && i.name === "AuthSessionMissingError";
    }
    class di extends Cn {
        constructor(){
            super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
        }
    }
    class hl extends Cn {
        constructor(n){
            super(n, "AuthInvalidCredentialsError", 400, void 0);
        }
    }
    class fl extends Cn {
        constructor(n, r = null){
            super(n, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = r;
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details
            };
        }
    }
    function w_(i) {
        return X(i) && i.name === "AuthImplicitGrantRedirectError";
    }
    class ym extends Cn {
        constructor(n, r = null){
            super(n, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = r;
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details
            };
        }
    }
    class __ extends Cn {
        constructor(){
            super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
        }
    }
    class Sc extends Cn {
        constructor(n, r){
            super(n, "AuthRetryableFetchError", r, void 0);
        }
    }
    function rc(i) {
        return X(i) && i.name === "AuthRetryableFetchError";
    }
    class vm extends Cn {
        constructor(n, r, l){
            super(n, "AuthWeakPasswordError", r, "weak_password"), this.reasons = l;
        }
    }
    class Ec extends Cn {
        constructor(n){
            super(n, "AuthInvalidJwtError", 400, "invalid_jwt");
        }
    }
    const bl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), bm = ` 	
\r=`.split(""), S_ = (()=>{
        const i = new Array(128);
        for(let n = 0; n < i.length; n += 1)i[n] = -1;
        for(let n = 0; n < bm.length; n += 1)i[bm[n].charCodeAt(0)] = -2;
        for(let n = 0; n < bl.length; n += 1)i[bl[n].charCodeAt(0)] = n;
        return i;
    })();
    function wm(i, n, r) {
        if (i !== null) for(n.queue = n.queue << 8 | i, n.queuedBits += 8; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r(bl[l]), n.queuedBits -= 6;
        }
        else if (n.queuedBits > 0) for(n.queue = n.queue << 6 - n.queuedBits, n.queuedBits = 6; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r(bl[l]), n.queuedBits -= 6;
        }
    }
    function gg(i, n, r) {
        const l = S_[i];
        if (l > -1) for(n.queue = n.queue << 6 | l, n.queuedBits += 6; n.queuedBits >= 8;)r(n.queue >> n.queuedBits - 8 & 255), n.queuedBits -= 8;
        else {
            if (l === -2) return;
            throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`);
        }
    }
    function _m(i) {
        const n = [], r = (f)=>{
            n.push(String.fromCodePoint(f));
        }, l = {
            utf8seq: 0,
            codepoint: 0
        }, u = {
            queue: 0,
            queuedBits: 0
        }, h = (f)=>{
            A_(f, l, r);
        };
        for(let f = 0; f < i.length; f += 1)gg(i.charCodeAt(f), u, h);
        return n.join("");
    }
    function E_(i, n) {
        if (i <= 127) {
            n(i);
            return;
        } else if (i <= 2047) {
            n(192 | i >> 6), n(128 | i & 63);
            return;
        } else if (i <= 65535) {
            n(224 | i >> 12), n(128 | i >> 6 & 63), n(128 | i & 63);
            return;
        } else if (i <= 1114111) {
            n(240 | i >> 18), n(128 | i >> 12 & 63), n(128 | i >> 6 & 63), n(128 | i & 63);
            return;
        }
        throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`);
    }
    function T_(i, n) {
        for(let r = 0; r < i.length; r += 1){
            let l = i.charCodeAt(r);
            if (l > 55295 && l <= 56319) {
                const u = (l - 55296) * 1024 & 65535;
                l = (i.charCodeAt(r + 1) - 56320 & 65535 | u) + 65536, r += 1;
            }
            E_(l, n);
        }
    }
    function A_(i, n, r) {
        if (n.utf8seq === 0) {
            if (i <= 127) {
                r(i);
                return;
            }
            for(let l = 1; l < 6; l += 1)if ((i >> 7 - l & 1) === 0) {
                n.utf8seq = l;
                break;
            }
            if (n.utf8seq === 2) n.codepoint = i & 31;
            else if (n.utf8seq === 3) n.codepoint = i & 15;
            else if (n.utf8seq === 4) n.codepoint = i & 7;
            else throw new Error("Invalid UTF-8 sequence");
            n.utf8seq -= 1;
        } else if (n.utf8seq > 0) {
            if (i <= 127) throw new Error("Invalid UTF-8 sequence");
            n.codepoint = n.codepoint << 6 | i & 63, n.utf8seq -= 1, n.utf8seq === 0 && r(n.codepoint);
        }
    }
    function Ei(i) {
        const n = [], r = {
            queue: 0,
            queuedBits: 0
        }, l = (u)=>{
            n.push(u);
        };
        for(let u = 0; u < i.length; u += 1)gg(i.charCodeAt(u), r, l);
        return new Uint8Array(n);
    }
    function x_(i) {
        const n = [];
        return T_(i, (r)=>n.push(r)), new Uint8Array(n);
    }
    function xa(i) {
        const n = [], r = {
            queue: 0,
            queuedBits: 0
        }, l = (u)=>{
            n.push(u);
        };
        return i.forEach((u)=>wm(u, r, l)), wm(null, r, l), n.join("");
    }
    function R_(i) {
        return Math.round(Date.now() / 1e3) + i;
    }
    function O_() {
        return Symbol("auth-callback");
    }
    const st = ()=>typeof window < "u" && typeof document < "u", Sa = {
        tested: !1,
        writable: !1
    }, yg = ()=>{
        if (!st()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1;
        } catch  {
            return !1;
        }
        if (Sa.tested) return Sa.writable;
        const i = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(i, i), globalThis.localStorage.removeItem(i), Sa.tested = !0, Sa.writable = !0;
        } catch  {
            Sa.tested = !0, Sa.writable = !1;
        }
        return Sa.writable;
    };
    function C_(i) {
        const n = {}, r = new URL(i);
        if (r.hash && r.hash[0] === "#") try {
            new URLSearchParams(r.hash.substring(1)).forEach((u, h)=>{
                n[h] = u;
            });
        } catch  {}
        return r.searchParams.forEach((l, u)=>{
            n[u] = l;
        }), n;
    }
    const vg = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), k_ = (i)=>typeof i == "object" && i !== null && "status" in i && "ok" in i && "json" in i && typeof i.json == "function", _i = async (i, n, r)=>{
        await i.setItem(n, JSON.stringify(r));
    }, Ea = async (i, n)=>{
        const r = await i.getItem(n);
        if (!r) return null;
        try {
            return JSON.parse(r);
        } catch  {
            return r;
        }
    }, rt = async (i, n)=>{
        await i.removeItem(n);
    };
    class Ol {
        constructor(){
            this.promise = new Ol.promiseConstructor((n, r)=>{
                this.resolve = n, this.reject = r;
            });
        }
    }
    Ol.promiseConstructor = Promise;
    function dl(i) {
        const n = i.split(".");
        if (n.length !== 3) throw new Ec("Invalid JWT structure");
        for(let l = 0; l < n.length; l++)if (!g_.test(n[l])) throw new Ec("JWT not in base64url format");
        return {
            header: JSON.parse(_m(n[0])),
            payload: JSON.parse(_m(n[1])),
            signature: Ei(n[2]),
            raw: {
                header: n[0],
                payload: n[1]
            }
        };
    }
    async function j_(i) {
        return await new Promise((n)=>{
            setTimeout(()=>n(null), i);
        });
    }
    function N_(i, n) {
        return new Promise((l, u)=>{
            (async ()=>{
                for(let h = 0; h < 1 / 0; h++)try {
                    const f = await i(h);
                    if (!n(h, null, f)) {
                        l(f);
                        return;
                    }
                } catch (f) {
                    if (!n(h, f)) {
                        u(f);
                        return;
                    }
                }
            })();
        });
    }
    function D_(i) {
        return ("0" + i.toString(16)).substr(-2);
    }
    function U_() {
        const n = new Uint32Array(56);
        if (typeof crypto > "u") {
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", l = r.length;
            let u = "";
            for(let h = 0; h < 56; h++)u += r.charAt(Math.floor(Math.random() * l));
            return u;
        }
        return crypto.getRandomValues(n), Array.from(n, D_).join("");
    }
    async function z_(i) {
        const r = new TextEncoder().encode(i), l = await crypto.subtle.digest("SHA-256", r), u = new Uint8Array(l);
        return Array.from(u).map((h)=>String.fromCharCode(h)).join("");
    }
    async function L_(i) {
        if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), i;
        const r = await z_(i);
        return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    async function pi(i, n, r = !1) {
        const l = U_();
        let u = l;
        r && (u += "/PASSWORD_RECOVERY"), await _i(i, `${n}-code-verifier`, u);
        const h = await L_(l);
        return [
            h,
            l === h ? "plain" : "s256"
        ];
    }
    const M_ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
    function H_(i) {
        const n = i.headers.get(_c);
        if (!n || !n.match(M_)) return null;
        try {
            return new Date(`${n}T00:00:00.0Z`);
        } catch  {
            return null;
        }
    }
    function B_(i) {
        if (!i) throw new Error("Missing exp claim");
        const n = Math.floor(Date.now() / 1e3);
        if (i <= n) throw new Error("JWT has expired");
    }
    function q_(i) {
        switch(i){
            case "RS256":
                return {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: {
                        name: "SHA-256"
                    }
                };
            case "ES256":
                return {
                    name: "ECDSA",
                    namedCurve: "P-256",
                    hash: {
                        name: "SHA-256"
                    }
                };
            default:
                throw new Error("Invalid alg claim");
        }
    }
    const P_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    function mi(i) {
        if (!P_.test(i)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
    }
    function sc() {
        const i = {};
        return new Proxy(i, {
            get: (n, r)=>{
                if (r === "__isUserNotAvailableProxy") return !0;
                if (typeof r == "symbol") {
                    const l = r.toString();
                    if (l === "Symbol(Symbol.toPrimitive)" || l === "Symbol(Symbol.toStringTag)" || l === "Symbol(util.inspect.custom)") return;
                }
                throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`);
            },
            set: (n, r)=>{
                throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
            },
            deleteProperty: (n, r)=>{
                throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
            }
        });
    }
    function $_(i, n) {
        return new Proxy(i, {
            get: (r, l, u)=>{
                if (l === "__isInsecureUserWarningProxy") return !0;
                if (typeof l == "symbol") {
                    const h = l.toString();
                    if (h === "Symbol(Symbol.toPrimitive)" || h === "Symbol(Symbol.toStringTag)" || h === "Symbol(util.inspect.custom)" || h === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(r, l, u);
                }
                return !n.value && typeof l == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), n.value = !0), Reflect.get(r, l, u);
            }
        });
    }
    function Sm(i) {
        return JSON.parse(JSON.stringify(i));
    }
    const Ta = (i)=>i.msg || i.message || i.error_description || i.error || JSON.stringify(i), G_ = [
        502,
        503,
        504
    ];
    async function Em(i) {
        var n;
        if (!k_(i)) throw new Sc(Ta(i), 0);
        if (G_.includes(i.status)) throw new Sc(Ta(i), i.status);
        let r;
        try {
            r = await i.json();
        } catch (h) {
            throw new Aa(Ta(h), h);
        }
        let l;
        const u = H_(i);
        if (u && u.getTime() >= mg["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? l = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (l = r.error_code), l) {
            if (l === "weak_password") throw new vm(Ta(r), i.status, ((n = r.weak_password) === null || n === void 0 ? void 0 : n.reasons) || []);
            if (l === "session_not_found") throw new Ct;
        } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((h, f)=>h && typeof f == "string", !0)) throw new vm(Ta(r), i.status, r.weak_password.reasons);
        throw new v_(Ta(r), i.status || 500, l);
    }
    const I_ = (i, n, r, l)=>{
        const u = {
            method: i,
            headers: n?.headers || {}
        };
        return i === "GET" ? u : (u.headers = Object.assign({
            "Content-Type": "application/json;charset=UTF-8"
        }, n?.headers), u.body = JSON.stringify(l), Object.assign(Object.assign({}, u), r));
    };
    async function Z(i, n, r, l) {
        var u;
        const h = Object.assign({}, l?.headers);
        h[_c] || (h[_c] = mg["2024-01-01"].name), l?.jwt && (h.Authorization = `Bearer ${l.jwt}`);
        const f = (u = l?.query) !== null && u !== void 0 ? u : {};
        l?.redirectTo && (f.redirect_to = l.redirectTo);
        const d = Object.keys(f).length ? "?" + new URLSearchParams(f).toString() : "", p = await V_(i, n, r + d, {
            headers: h,
            noResolveJson: l?.noResolveJson
        }, {}, l?.body);
        return l?.xform ? l?.xform(p) : {
            data: Object.assign({}, p),
            error: null
        };
    }
    async function V_(i, n, r, l, u, h) {
        const f = I_(n, l, u, h);
        let d;
        try {
            d = await i(r, Object.assign({}, f));
        } catch (p) {
            throw console.error(p), new Sc(Ta(p), 0);
        }
        if (d.ok || await Em(d), l?.noResolveJson) return d;
        try {
            return await d.json();
        } catch (p) {
            await Em(p);
        }
    }
    function Xt(i) {
        var n;
        let r = null;
        X_(i) && (r = Object.assign({}, i), i.expires_at || (r.expires_at = R_(i.expires_in)));
        const l = (n = i.user) !== null && n !== void 0 ? n : i;
        return {
            data: {
                session: r,
                user: l
            },
            error: null
        };
    }
    function Tm(i) {
        const n = Xt(i);
        return !n.error && i.weak_password && typeof i.weak_password == "object" && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.message && typeof i.weak_password.message == "string" && i.weak_password.reasons.reduce((r, l)=>r && typeof l == "string", !0) && (n.data.weak_password = i.weak_password), n;
    }
    function na(i) {
        var n;
        return {
            data: {
                user: (n = i.user) !== null && n !== void 0 ? n : i
            },
            error: null
        };
    }
    function K_(i) {
        return {
            data: i,
            error: null
        };
    }
    function Y_(i) {
        const { action_link: n, email_otp: r, hashed_token: l, redirect_to: u, verification_type: h } = i, f = Al(i, [
            "action_link",
            "email_otp",
            "hashed_token",
            "redirect_to",
            "verification_type"
        ]), d = {
            action_link: n,
            email_otp: r,
            hashed_token: l,
            redirect_to: u,
            verification_type: h
        }, p = Object.assign({}, f);
        return {
            data: {
                properties: d,
                user: p
            },
            error: null
        };
    }
    function Am(i) {
        return i;
    }
    function X_(i) {
        return i.access_token && i.refresh_token && i.expires_in;
    }
    const lc = [
        "global",
        "local",
        "others"
    ];
    class W_ {
        constructor({ url: n = "", headers: r = {}, fetch: l }){
            this.url = n, this.headers = r, this.fetch = vg(l), this.mfa = {
                listFactors: this._listFactors.bind(this),
                deleteFactor: this._deleteFactor.bind(this)
            }, this.oauth = {
                listClients: this._listOAuthClients.bind(this),
                createClient: this._createOAuthClient.bind(this),
                getClient: this._getOAuthClient.bind(this),
                updateClient: this._updateOAuthClient.bind(this),
                deleteClient: this._deleteOAuthClient.bind(this),
                regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
            }, this.customProviders = {
                listProviders: this._listCustomProviders.bind(this),
                createProvider: this._createCustomProvider.bind(this),
                getProvider: this._getCustomProvider.bind(this),
                updateProvider: this._updateCustomProvider.bind(this),
                deleteProvider: this._deleteCustomProvider.bind(this)
            };
        }
        async signOut(n, r = lc[0]) {
            if (lc.indexOf(r) < 0) throw new Error(`@supabase/auth-js: Parameter scope must be one of ${lc.join(", ")}`);
            try {
                return await Z(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                    headers: this.headers,
                    jwt: n,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (l) {
                if (X(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async inviteUserByEmail(n, r = {}) {
            try {
                return await Z(this.fetch, "POST", `${this.url}/invite`, {
                    body: {
                        email: n,
                        data: r.data
                    },
                    headers: this.headers,
                    redirectTo: r.redirectTo,
                    xform: na
                });
            } catch (l) {
                if (X(l)) return {
                    data: {
                        user: null
                    },
                    error: l
                };
                throw l;
            }
        }
        async generateLink(n) {
            try {
                const { options: r } = n, l = Al(n, [
                    "options"
                ]), u = Object.assign(Object.assign({}, l), r);
                return "newEmail" in l && (u.new_email = l?.newEmail, delete u.newEmail), await Z(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                    body: u,
                    headers: this.headers,
                    xform: Y_,
                    redirectTo: r?.redirectTo
                });
            } catch (r) {
                if (X(r)) return {
                    data: {
                        properties: null,
                        user: null
                    },
                    error: r
                };
                throw r;
            }
        }
        async createUser(n) {
            try {
                return await Z(this.fetch, "POST", `${this.url}/admin/users`, {
                    body: n,
                    headers: this.headers,
                    xform: na
                });
            } catch (r) {
                if (X(r)) return {
                    data: {
                        user: null
                    },
                    error: r
                };
                throw r;
            }
        }
        async listUsers(n) {
            var r, l, u, h, f, d, p;
            try {
                const g = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                }, b = await Z(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (l = (r = n?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && l !== void 0 ? l : "",
                        per_page: (h = (u = n?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && h !== void 0 ? h : ""
                    },
                    xform: Am
                });
                if (b.error) throw b.error;
                const v = await b.json(), S = (f = b.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, E = (p = (d = b.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && p !== void 0 ? p : [];
                return E.length > 0 && (E.forEach((N)=>{
                    const D = parseInt(N.split(";")[0].split("=")[1].substring(0, 1)), k = JSON.parse(N.split(";")[1].split("=")[1]);
                    g[`${k}Page`] = D;
                }), g.total = parseInt(S)), {
                    data: Object.assign(Object.assign({}, v), g),
                    error: null
                };
            } catch (g) {
                if (X(g)) return {
                    data: {
                        users: []
                    },
                    error: g
                };
                throw g;
            }
        }
        async getUserById(n) {
            mi(n);
            try {
                return await Z(this.fetch, "GET", `${this.url}/admin/users/${n}`, {
                    headers: this.headers,
                    xform: na
                });
            } catch (r) {
                if (X(r)) return {
                    data: {
                        user: null
                    },
                    error: r
                };
                throw r;
            }
        }
        async updateUserById(n, r) {
            mi(n);
            try {
                return await Z(this.fetch, "PUT", `${this.url}/admin/users/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: na
                });
            } catch (l) {
                if (X(l)) return {
                    data: {
                        user: null
                    },
                    error: l
                };
                throw l;
            }
        }
        async deleteUser(n, r = !1) {
            mi(n);
            try {
                return await Z(this.fetch, "DELETE", `${this.url}/admin/users/${n}`, {
                    headers: this.headers,
                    body: {
                        should_soft_delete: r
                    },
                    xform: na
                });
            } catch (l) {
                if (X(l)) return {
                    data: {
                        user: null
                    },
                    error: l
                };
                throw l;
            }
        }
        async _listFactors(n) {
            mi(n.userId);
            try {
                const { data: r, error: l } = await Z(this.fetch, "GET", `${this.url}/admin/users/${n.userId}/factors`, {
                    headers: this.headers,
                    xform: (u)=>({
                            data: {
                                factors: u
                            },
                            error: null
                        })
                });
                return {
                    data: r,
                    error: l
                };
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _deleteFactor(n) {
            mi(n.userId), mi(n.id);
            try {
                return {
                    data: await Z(this.fetch, "DELETE", `${this.url}/admin/users/${n.userId}/factors/${n.id}`, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _listOAuthClients(n) {
            var r, l, u, h, f, d, p;
            try {
                const g = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                }, b = await Z(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (l = (r = n?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && l !== void 0 ? l : "",
                        per_page: (h = (u = n?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && h !== void 0 ? h : ""
                    },
                    xform: Am
                });
                if (b.error) throw b.error;
                const v = await b.json(), S = (f = b.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, E = (p = (d = b.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && p !== void 0 ? p : [];
                return E.length > 0 && (E.forEach((N)=>{
                    const D = parseInt(N.split(";")[0].split("=")[1].substring(0, 1)), k = JSON.parse(N.split(";")[1].split("=")[1]);
                    g[`${k}Page`] = D;
                }), g.total = parseInt(S)), {
                    data: Object.assign(Object.assign({}, v), g),
                    error: null
                };
            } catch (g) {
                if (X(g)) return {
                    data: {
                        clients: []
                    },
                    error: g
                };
                throw g;
            }
        }
        async _createOAuthClient(n) {
            try {
                return await Z(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                    body: n,
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _getOAuthClient(n) {
            try {
                return await Z(this.fetch, "GET", `${this.url}/admin/oauth/clients/${n}`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _updateOAuthClient(n, r) {
            try {
                return await Z(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: (l)=>({
                            data: l,
                            error: null
                        })
                });
            } catch (l) {
                if (X(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async _deleteOAuthClient(n) {
            try {
                return await Z(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${n}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _regenerateOAuthClientSecret(n) {
            try {
                return await Z(this.fetch, "POST", `${this.url}/admin/oauth/clients/${n}/regenerate_secret`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _listCustomProviders(n) {
            try {
                const r = {};
                return n?.type && (r.type = n.type), await Z(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
                    headers: this.headers,
                    query: r,
                    xform: (l)=>{
                        var u;
                        return {
                            data: {
                                providers: (u = l?.providers) !== null && u !== void 0 ? u : []
                            },
                            error: null
                        };
                    }
                });
            } catch (r) {
                if (X(r)) return {
                    data: {
                        providers: []
                    },
                    error: r
                };
                throw r;
            }
        }
        async _createCustomProvider(n) {
            try {
                return await Z(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
                    body: n,
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _getCustomProvider(n) {
            try {
                return await Z(this.fetch, "GET", `${this.url}/admin/custom-providers/${n}`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _updateCustomProvider(n, r) {
            try {
                return await Z(this.fetch, "PUT", `${this.url}/admin/custom-providers/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: (l)=>({
                            data: l,
                            error: null
                        })
                });
            } catch (l) {
                if (X(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async _deleteCustomProvider(n) {
            try {
                return await Z(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${n}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (r) {
                if (X(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
    }
    function xm(i = {}) {
        return {
            getItem: (n)=>i[n] || null,
            setItem: (n, r)=>{
                i[n] = r;
            },
            removeItem: (n)=>{
                delete i[n];
            }
        };
    }
    const nn = {
        debug: !!(globalThis && yg() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
    };
    class bg extends Error {
        constructor(n){
            super(n), this.isAcquireTimeout = !0;
        }
    }
    class Rm extends bg {
    }
    async function J_(i, n, r) {
        nn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", i, n);
        const l = new globalThis.AbortController;
        let u;
        n > 0 && (u = setTimeout(()=>{
            l.abort(), nn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", i);
        }, n)), await Promise.resolve();
        try {
            return await globalThis.navigator.locks.request(i, n === 0 ? {
                mode: "exclusive",
                ifAvailable: !0
            } : {
                mode: "exclusive",
                signal: l.signal
            }, async (h)=>{
                if (h) {
                    clearTimeout(u), nn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", i, h.name);
                    try {
                        return await r();
                    } finally{
                        nn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", i, h.name);
                    }
                } else {
                    if (n === 0) throw nn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", i), new Rm(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);
                    if (nn.debug) try {
                        const f = await globalThis.navigator.locks.query();
                        console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(f, null, "  "));
                    } catch (f) {
                        console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", f);
                    }
                    return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(u), await r();
                }
            });
        } catch (h) {
            if (n > 0 && clearTimeout(u), h?.name === "AbortError" && n > 0) {
                if (l.signal.aborted) return nn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", i), console.warn(`@supabase/gotrue-js: Lock "${i}" was not released within ${n}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(()=>globalThis.navigator.locks.request(i, {
                        mode: "exclusive",
                        steal: !0
                    }, async (f)=>{
                        if (f) {
                            nn.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", i, f.name);
                            try {
                                return await r();
                            } finally{
                                nn.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", i, f.name);
                            }
                        } else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await r();
                    }));
                throw nn.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", i), new Rm(`Lock "${i}" was released because another request stole it`);
            }
            throw h;
        }
    }
    function Q_() {
        if (typeof globalThis != "object") try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this;
                },
                configurable: !0
            }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
        } catch  {
            typeof self < "u" && (self.globalThis = self);
        }
    }
    function wg(i) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(i)) throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);
        return i.toLowerCase();
    }
    function Z_(i) {
        return parseInt(i, 16);
    }
    function F_(i) {
        const n = new TextEncoder().encode(i);
        return "0x" + Array.from(n, (l)=>l.toString(16).padStart(2, "0")).join("");
    }
    function eS(i) {
        var n;
        const { chainId: r, domain: l, expirationTime: u, issuedAt: h = new Date, nonce: f, notBefore: d, requestId: p, resources: g, scheme: b, uri: v, version: S } = i;
        {
            if (!Number.isInteger(r)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
            if (!l) throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
            if (f && f.length < 8) throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);
            if (!v) throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
            if (S !== "1") throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${S}`);
            if (!((n = i.statement) === null || n === void 0) && n.includes(`
`)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`);
        }
        const E = wg(i.address), N = b ? `${b}://${l}` : l, D = i.statement ? `${i.statement}
` : "", k = `${N} wants you to sign in with your Ethereum account:
${E}

${D}`;
        let B = `URI: ${v}
Version: ${S}
Chain ID: ${r}${f ? `
Nonce: ${f}` : ""}
Issued At: ${h.toISOString()}`;
        if (u && (B += `
Expiration Time: ${u.toISOString()}`), d && (B += `
Not Before: ${d.toISOString()}`), p && (B += `
Request ID: ${p}`), g) {
            let $ = `
Resources:`;
            for (const z of g){
                if (!z || typeof z != "string") throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${z}`);
                $ += `
- ${z}`;
            }
            B += $;
        }
        return `${k}
${B}`;
    }
    class We extends Error {
        constructor({ message: n, code: r, cause: l, name: u }){
            var h;
            super(n, {
                cause: l
            }), this.__isWebAuthnError = !0, this.name = (h = u ?? (l instanceof Error ? l.name : void 0)) !== null && h !== void 0 ? h : "Unknown Error", this.code = r;
        }
    }
    class wl extends We {
        constructor(n, r){
            super({
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: r,
                message: n
            }), this.name = "WebAuthnUnknownError", this.originalError = r;
        }
    }
    function tS({ error: i, options: n }) {
        var r, l, u;
        const { publicKey: h } = n;
        if (!h) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new We({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else if (i.name === "ConstraintError") {
            if (((r = h.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0) return new We({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: i
            });
            if (n.mediation === "conditional" && ((l = h.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) === "required") return new We({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: i
            });
            if (((u = h.authenticatorSelection) === null || u === void 0 ? void 0 : u.userVerification) === "required") return new We({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: i
            });
        } else {
            if (i.name === "InvalidStateError") return new We({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: i
            });
            if (i.name === "NotAllowedError") return new We({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "NotSupportedError") return h.pubKeyCredParams.filter((d)=>d.type === "public-key").length === 0 ? new We({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: i
            }) : new We({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: i
            });
            if (i.name === "SecurityError") {
                const f = window.location.hostname;
                if (_g(f)) {
                    if (h.rp.id !== f) return new We({
                        message: `The RP ID "${h.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new We({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "TypeError") {
                if (h.user.id.byteLength < 1 || h.user.id.byteLength > 64) return new We({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new We({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new We({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    function nS({ error: i, options: n }) {
        const { publicKey: r } = n;
        if (!r) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new We({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else {
            if (i.name === "NotAllowedError") return new We({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "SecurityError") {
                const l = window.location.hostname;
                if (_g(l)) {
                    if (r.rpId !== l) return new We({
                        message: `The RP ID "${r.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new We({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new We({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new We({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    class aS {
        createNewAbortSignal() {
            if (this.controller) {
                const r = new Error("Cancelling existing WebAuthn API call for new one");
                r.name = "AbortError", this.controller.abort(r);
            }
            const n = new AbortController;
            return this.controller = n, n.signal;
        }
        cancelCeremony() {
            if (this.controller) {
                const n = new Error("Manually cancelling existing WebAuthn API call");
                n.name = "AbortError", this.controller.abort(n), this.controller = void 0;
            }
        }
    }
    const iS = new aS;
    function rS(i) {
        if (!i) throw new Error("Credential creation options are required");
        if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(i);
        const { challenge: n, user: r, excludeCredentials: l } = i, u = Al(i, [
            "challenge",
            "user",
            "excludeCredentials"
        ]), h = Ei(n).buffer, f = Object.assign(Object.assign({}, r), {
            id: Ei(r.id).buffer
        }), d = Object.assign(Object.assign({}, u), {
            challenge: h,
            user: f
        });
        if (l && l.length > 0) {
            d.excludeCredentials = new Array(l.length);
            for(let p = 0; p < l.length; p++){
                const g = l[p];
                d.excludeCredentials[p] = Object.assign(Object.assign({}, g), {
                    id: Ei(g.id).buffer,
                    type: g.type || "public-key",
                    transports: g.transports
                });
            }
        }
        return d;
    }
    function sS(i) {
        if (!i) throw new Error("Credential request options are required");
        if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(i);
        const { challenge: n, allowCredentials: r } = i, l = Al(i, [
            "challenge",
            "allowCredentials"
        ]), u = Ei(n).buffer, h = Object.assign(Object.assign({}, l), {
            challenge: u
        });
        if (r && r.length > 0) {
            h.allowCredentials = new Array(r.length);
            for(let f = 0; f < r.length; f++){
                const d = r[f];
                h.allowCredentials[f] = Object.assign(Object.assign({}, d), {
                    id: Ei(d.id).buffer,
                    type: d.type || "public-key",
                    transports: d.transports
                });
            }
        }
        return h;
    }
    function lS(i) {
        var n;
        if ("toJSON" in i && typeof i.toJSON == "function") return i.toJSON();
        const r = i;
        return {
            id: i.id,
            rawId: i.id,
            response: {
                attestationObject: xa(new Uint8Array(i.response.attestationObject)),
                clientDataJSON: xa(new Uint8Array(i.response.clientDataJSON))
            },
            type: "public-key",
            clientExtensionResults: i.getClientExtensionResults(),
            authenticatorAttachment: (n = r.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
        };
    }
    function oS(i) {
        var n;
        if ("toJSON" in i && typeof i.toJSON == "function") return i.toJSON();
        const r = i, l = i.getClientExtensionResults(), u = i.response;
        return {
            id: i.id,
            rawId: i.id,
            response: {
                authenticatorData: xa(new Uint8Array(u.authenticatorData)),
                clientDataJSON: xa(new Uint8Array(u.clientDataJSON)),
                signature: xa(new Uint8Array(u.signature)),
                userHandle: u.userHandle ? xa(new Uint8Array(u.userHandle)) : void 0
            },
            type: "public-key",
            clientExtensionResults: l,
            authenticatorAttachment: (n = r.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
        };
    }
    function _g(i) {
        return i === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i);
    }
    function Om() {
        var i, n;
        return !!(st() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((i = navigator?.credentials) === null || i === void 0 ? void 0 : i.create) == "function" && typeof ((n = navigator?.credentials) === null || n === void 0 ? void 0 : n.get) == "function");
    }
    async function uS(i) {
        try {
            const n = await navigator.credentials.create(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new wl("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new wl("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: tS({
                    error: n,
                    options: i
                })
            };
        }
    }
    async function cS(i) {
        try {
            const n = await navigator.credentials.get(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new wl("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new wl("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: nS({
                    error: n,
                    options: i
                })
            };
        }
    }
    const hS = {
        hints: [
            "security-key"
        ],
        authenticatorSelection: {
            authenticatorAttachment: "cross-platform",
            requireResidentKey: !1,
            userVerification: "preferred",
            residentKey: "discouraged"
        },
        attestation: "direct"
    }, fS = {
        userVerification: "preferred",
        hints: [
            "security-key"
        ],
        attestation: "direct"
    };
    function _l(...i) {
        const n = (u)=>u !== null && typeof u == "object" && !Array.isArray(u), r = (u)=>u instanceof ArrayBuffer || ArrayBuffer.isView(u), l = {};
        for (const u of i)if (u) for(const h in u){
            const f = u[h];
            if (f !== void 0) if (Array.isArray(f)) l[h] = f;
            else if (r(f)) l[h] = f;
            else if (n(f)) {
                const d = l[h];
                n(d) ? l[h] = _l(d, f) : l[h] = _l(f);
            } else l[h] = f;
        }
        return l;
    }
    function dS(i, n) {
        return _l(hS, i, n || {});
    }
    function pS(i, n) {
        return _l(fS, i, n || {});
    }
    class mS {
        constructor(n){
            this.client = n, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
        }
        async _enroll(n) {
            return this.client.mfa.enroll(Object.assign(Object.assign({}, n), {
                factorType: "webauthn"
            }));
        }
        async _challenge({ factorId: n, webauthn: r, friendlyName: l, signal: u }, h) {
            var f;
            try {
                const { data: d, error: p } = await this.client.mfa.challenge({
                    factorId: n,
                    webauthn: r
                });
                if (!d) return {
                    data: null,
                    error: p
                };
                const g = u ?? iS.createNewAbortSignal();
                if (d.webauthn.type === "create") {
                    const { user: b } = d.webauthn.credential_options.publicKey;
                    if (!b.name) {
                        const v = l;
                        if (v) b.name = `${b.id}:${v}`;
                        else {
                            const E = (await this.client.getUser()).data.user, N = ((f = E?.user_metadata) === null || f === void 0 ? void 0 : f.name) || E?.email || E?.id || "User";
                            b.name = `${b.id}:${N}`;
                        }
                    }
                    b.displayName || (b.displayName = b.name);
                }
                switch(d.webauthn.type){
                    case "create":
                        {
                            const b = dS(d.webauthn.credential_options.publicKey, h?.create), { data: v, error: S } = await uS({
                                publicKey: b,
                                signal: g
                            });
                            return v ? {
                                data: {
                                    factorId: n,
                                    challengeId: d.id,
                                    webauthn: {
                                        type: d.webauthn.type,
                                        credential_response: v
                                    }
                                },
                                error: null
                            } : {
                                data: null,
                                error: S
                            };
                        }
                    case "request":
                        {
                            const b = pS(d.webauthn.credential_options.publicKey, h?.request), { data: v, error: S } = await cS(Object.assign(Object.assign({}, d.webauthn.credential_options), {
                                publicKey: b,
                                signal: g
                            }));
                            return v ? {
                                data: {
                                    factorId: n,
                                    challengeId: d.id,
                                    webauthn: {
                                        type: d.webauthn.type,
                                        credential_response: v
                                    }
                                },
                                error: null
                            } : {
                                data: null,
                                error: S
                            };
                        }
                }
            } catch (d) {
                return X(d) ? {
                    data: null,
                    error: d
                } : {
                    data: null,
                    error: new Aa("Unexpected error in challenge", d)
                };
            }
        }
        async _verify({ challengeId: n, factorId: r, webauthn: l }) {
            return this.client.mfa.verify({
                factorId: r,
                challengeId: n,
                webauthn: l
            });
        }
        async _authenticate({ factorId: n, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: l = typeof window < "u" ? [
            window.location.origin
        ] : void 0, signal: u } = {} }, h) {
            if (!r) return {
                data: null,
                error: new zr("rpId is required for WebAuthn authentication")
            };
            try {
                if (!Om()) return {
                    data: null,
                    error: new Aa("Browser does not support WebAuthn", null)
                };
                const { data: f, error: d } = await this.challenge({
                    factorId: n,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l
                    },
                    signal: u
                }, {
                    request: h
                });
                if (!f) return {
                    data: null,
                    error: d
                };
                const { webauthn: p } = f;
                return this._verify({
                    factorId: n,
                    challengeId: f.challengeId,
                    webauthn: {
                        type: p.type,
                        rpId: r,
                        rpOrigins: l,
                        credential_response: p.credential_response
                    }
                });
            } catch (f) {
                return X(f) ? {
                    data: null,
                    error: f
                } : {
                    data: null,
                    error: new Aa("Unexpected error in authenticate", f)
                };
            }
        }
        async _register({ friendlyName: n, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: l = typeof window < "u" ? [
            window.location.origin
        ] : void 0, signal: u } = {} }, h) {
            if (!r) return {
                data: null,
                error: new zr("rpId is required for WebAuthn registration")
            };
            try {
                if (!Om()) return {
                    data: null,
                    error: new Aa("Browser does not support WebAuthn", null)
                };
                const { data: f, error: d } = await this._enroll({
                    friendlyName: n
                });
                if (!f) return await this.client.mfa.listFactors().then((b)=>{
                    var v;
                    return (v = b.data) === null || v === void 0 ? void 0 : v.all.find((S)=>S.factor_type === "webauthn" && S.friendly_name === n && S.status !== "unverified");
                }).then((b)=>b ? this.client.mfa.unenroll({
                        factorId: b?.id
                    }) : void 0), {
                    data: null,
                    error: d
                };
                const { data: p, error: g } = await this._challenge({
                    factorId: f.id,
                    friendlyName: f.friendly_name,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l
                    },
                    signal: u
                }, {
                    create: h
                });
                return p ? this._verify({
                    factorId: f.id,
                    challengeId: p.challengeId,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l,
                        type: p.webauthn.type,
                        credential_response: p.webauthn.credential_response
                    }
                }) : {
                    data: null,
                    error: g
                };
            } catch (f) {
                return X(f) ? {
                    data: null,
                    error: f
                } : {
                    data: null,
                    error: new Aa("Unexpected error in register", f)
                };
            }
        }
    }
    Q_();
    const gS = {
        url: d_,
        storageKey: p_,
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: m_,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
        throwOnError: !1,
        lockAcquireTimeout: 5e3,
        skipAutoInitialize: !1
    };
    async function Cm(i, n, r) {
        return await r();
    }
    const gi = {};
    class Lr {
        get jwks() {
            var n, r;
            return (r = (n = gi[this.storageKey]) === null || n === void 0 ? void 0 : n.jwks) !== null && r !== void 0 ? r : {
                keys: []
            };
        }
        set jwks(n) {
            gi[this.storageKey] = Object.assign(Object.assign({}, gi[this.storageKey]), {
                jwks: n
            });
        }
        get jwks_cached_at() {
            var n, r;
            return (r = (n = gi[this.storageKey]) === null || n === void 0 ? void 0 : n.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
        }
        set jwks_cached_at(n) {
            gi[this.storageKey] = Object.assign(Object.assign({}, gi[this.storageKey]), {
                cachedAt: n
            });
        }
        constructor(n){
            var r, l, u;
            this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
            const h = Object.assign(Object.assign({}, gS), n);
            if (this.storageKey = h.storageKey, this.instanceID = (r = Lr.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Lr.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!h.debug, typeof h.debug == "function" && (this.logger = h.debug), this.instanceID > 0 && st()) {
                const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
                console.warn(f), this.logDebugMessages && console.trace(f);
            }
            if (this.persistSession = h.persistSession, this.autoRefreshToken = h.autoRefreshToken, this.admin = new W_({
                url: h.url,
                headers: h.headers,
                fetch: h.fetch
            }), this.url = h.url, this.headers = h.headers, this.fetch = vg(h.fetch), this.lock = h.lock || Cm, this.detectSessionInUrl = h.detectSessionInUrl, this.flowType = h.flowType, this.hasCustomAuthorizationHeader = h.hasCustomAuthorizationHeader, this.throwOnError = h.throwOnError, this.lockAcquireTimeout = h.lockAcquireTimeout, h.lock ? this.lock = h.lock : this.persistSession && st() && (!((l = globalThis?.navigator) === null || l === void 0) && l.locks) ? this.lock = J_ : this.lock = Cm, this.jwks || (this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                webauthn: new mS(this)
            }, this.oauth = {
                getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
                approveAuthorization: this._approveAuthorization.bind(this),
                denyAuthorization: this._denyAuthorization.bind(this),
                listGrants: this._listOAuthGrants.bind(this),
                revokeGrant: this._revokeOAuthGrant.bind(this)
            }, this.persistSession ? (h.storage ? this.storage = h.storage : yg() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = xm(this.memoryStorage)), h.userStorage && (this.userStorage = h.userStorage)) : (this.memoryStorage = {}, this.storage = xm(this.memoryStorage)), st() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                try {
                    this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
                } catch (f) {
                    console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", f);
                }
                (u = this.broadcastChannel) === null || u === void 0 || u.addEventListener("message", async (f)=>{
                    this._debug("received broadcast notification from other tab or client", f);
                    try {
                        await this._notifyAllSubscribers(f.data.event, f.data.session, !1);
                    } catch (d) {
                        this._debug("#broadcastChannel", "error", d);
                    }
                });
            }
            h.skipAutoInitialize || this.initialize().catch((f)=>{
                this._debug("#initialize()", "error", f);
            });
        }
        isThrowOnErrorEnabled() {
            return this.throwOnError;
        }
        _returnResult(n) {
            if (this.throwOnError && n && n.error) throw n.error;
            return n;
        }
        _logPrefix() {
            return `GoTrueClient@${this.storageKey}:${this.instanceID} (${pg}) ${new Date().toISOString()}`;
        }
        _debug(...n) {
            return this.logDebugMessages && this.logger(this._logPrefix(), ...n), this;
        }
        async initialize() {
            return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async ()=>await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._initialize()))(), await this.initializePromise);
        }
        async _initialize() {
            var n;
            try {
                let r = {}, l = "none";
                if (st() && (r = C_(window.location.href), this._isImplicitGrantCallback(r) ? l = "implicit" : await this._isPKCECallback(r) && (l = "pkce")), st() && this.detectSessionInUrl && l !== "none") {
                    const { data: u, error: h } = await this._getSessionFromURL(r, l);
                    if (h) {
                        if (this._debug("#_initialize()", "error detecting session from URL", h), w_(h)) {
                            const p = (n = h.details) === null || n === void 0 ? void 0 : n.code;
                            if (p === "identity_already_exists" || p === "identity_not_found" || p === "single_identity_not_deletable") return {
                                error: h
                            };
                        }
                        return {
                            error: h
                        };
                    }
                    const { session: f, redirectType: d } = u;
                    return this._debug("#_initialize()", "detected session in URL", f, "redirect type", d), await this._saveSession(f), setTimeout(async ()=>{
                        d === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", f) : await this._notifyAllSubscribers("SIGNED_IN", f);
                    }, 0), {
                        error: null
                    };
                }
                return await this._recoverAndRefresh(), {
                    error: null
                };
            } catch (r) {
                return X(r) ? this._returnResult({
                    error: r
                }) : this._returnResult({
                    error: new Aa("Unexpected error during initialization", r)
                });
            } finally{
                await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
            }
        }
        async signInAnonymously(n) {
            var r, l, u;
            try {
                const h = await Z(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (l = (r = n?.options) === null || r === void 0 ? void 0 : r.data) !== null && l !== void 0 ? l : {},
                        gotrue_meta_security: {
                            captcha_token: (u = n?.options) === null || u === void 0 ? void 0 : u.captchaToken
                        }
                    },
                    xform: Xt
                }), { data: f, error: d } = h;
                if (d || !f) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
                const p = f.session, g = f.user;
                return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", p)), this._returnResult({
                    data: {
                        user: g,
                        session: p
                    },
                    error: null
                });
            } catch (h) {
                if (X(h)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                });
                throw h;
            }
        }
        async signUp(n) {
            var r, l, u;
            try {
                let h;
                if ("email" in n) {
                    const { email: b, password: v, options: S } = n;
                    let E = null, N = null;
                    this.flowType === "pkce" && ([E, N] = await pi(this.storage, this.storageKey)), h = await Z(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        redirectTo: S?.emailRedirectTo,
                        body: {
                            email: b,
                            password: v,
                            data: (r = S?.data) !== null && r !== void 0 ? r : {},
                            gotrue_meta_security: {
                                captcha_token: S?.captchaToken
                            },
                            code_challenge: E,
                            code_challenge_method: N
                        },
                        xform: Xt
                    });
                } else if ("phone" in n) {
                    const { phone: b, password: v, options: S } = n;
                    h = await Z(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        body: {
                            phone: b,
                            password: v,
                            data: (l = S?.data) !== null && l !== void 0 ? l : {},
                            channel: (u = S?.channel) !== null && u !== void 0 ? u : "sms",
                            gotrue_meta_security: {
                                captcha_token: S?.captchaToken
                            }
                        },
                        xform: Xt
                    });
                } else throw new hl("You must provide either an email or phone number and a password");
                const { data: f, error: d } = h;
                if (d || !f) return await rt(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
                const p = f.session, g = f.user;
                return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", p)), this._returnResult({
                    data: {
                        user: g,
                        session: p
                    },
                    error: null
                });
            } catch (h) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(h)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: h
                });
                throw h;
            }
        }
        async signInWithPassword(n) {
            try {
                let r;
                if ("email" in n) {
                    const { email: h, password: f, options: d } = n;
                    r = await Z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            email: h,
                            password: f,
                            gotrue_meta_security: {
                                captcha_token: d?.captchaToken
                            }
                        },
                        xform: Tm
                    });
                } else if ("phone" in n) {
                    const { phone: h, password: f, options: d } = n;
                    r = await Z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            phone: h,
                            password: f,
                            gotrue_meta_security: {
                                captcha_token: d?.captchaToken
                            }
                        },
                        xform: Tm
                    });
                } else throw new hl("You must provide either an email or phone number and a password");
                const { data: l, error: u } = r;
                if (u) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                });
                if (!l || !l.session || !l.user) {
                    const h = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: h
                    });
                }
                return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({
                    data: Object.assign({
                        user: l.user,
                        session: l.session
                    }, l.weak_password ? {
                        weakPassword: l.weak_password
                    } : null),
                    error: u
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async signInWithOAuth(n) {
            var r, l, u, h;
            return await this._handleProviderSignIn(n.provider, {
                redirectTo: (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo,
                scopes: (l = n.options) === null || l === void 0 ? void 0 : l.scopes,
                queryParams: (u = n.options) === null || u === void 0 ? void 0 : u.queryParams,
                skipBrowserRedirect: (h = n.options) === null || h === void 0 ? void 0 : h.skipBrowserRedirect
            });
        }
        async exchangeCodeForSession(n) {
            return await this.initializePromise, this._acquireLock(this.lockAcquireTimeout, async ()=>this._exchangeCodeForSession(n));
        }
        async signInWithWeb3(n) {
            const { chain: r } = n;
            switch(r){
                case "ethereum":
                    return await this.signInWithEthereum(n);
                case "solana":
                    return await this.signInWithSolana(n);
                default:
                    throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
            }
        }
        async signInWithEthereum(n) {
            var r, l, u, h, f, d, p, g, b, v, S;
            let E, N;
            if ("message" in n) E = n.message, N = n.signature;
            else {
                const { chain: D, wallet: k, statement: B, options: $ } = n;
                let z;
                if (st()) if (typeof k == "object") z = k;
                else {
                    const Se = window;
                    if ("ethereum" in Se && typeof Se.ethereum == "object" && "request" in Se.ethereum && typeof Se.ethereum.request == "function") z = Se.ethereum;
                    else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof k != "object" || !$?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    z = k;
                }
                const V = new URL((r = $?.url) !== null && r !== void 0 ? r : window.location.href), te = await z.request({
                    method: "eth_requestAccounts"
                }).then((Se)=>Se).catch(()=>{
                    throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
                });
                if (!te || te.length === 0) throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
                const ne = wg(te[0]);
                let K = (l = $?.signInWithEthereum) === null || l === void 0 ? void 0 : l.chainId;
                if (!K) {
                    const Se = await z.request({
                        method: "eth_chainId"
                    });
                    K = Z_(Se);
                }
                const Ne = {
                    domain: V.host,
                    address: ne,
                    statement: B,
                    uri: V.href,
                    version: "1",
                    chainId: K,
                    nonce: (u = $?.signInWithEthereum) === null || u === void 0 ? void 0 : u.nonce,
                    issuedAt: (f = (h = $?.signInWithEthereum) === null || h === void 0 ? void 0 : h.issuedAt) !== null && f !== void 0 ? f : new Date,
                    expirationTime: (d = $?.signInWithEthereum) === null || d === void 0 ? void 0 : d.expirationTime,
                    notBefore: (p = $?.signInWithEthereum) === null || p === void 0 ? void 0 : p.notBefore,
                    requestId: (g = $?.signInWithEthereum) === null || g === void 0 ? void 0 : g.requestId,
                    resources: (b = $?.signInWithEthereum) === null || b === void 0 ? void 0 : b.resources
                };
                E = eS(Ne), N = await z.request({
                    method: "personal_sign",
                    params: [
                        F_(E),
                        ne
                    ]
                });
            }
            try {
                const { data: D, error: k } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                    headers: this.headers,
                    body: Object.assign({
                        chain: "ethereum",
                        message: E,
                        signature: N
                    }, !((v = n.options) === null || v === void 0) && v.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: (S = n.options) === null || S === void 0 ? void 0 : S.captchaToken
                        }
                    } : null),
                    xform: Xt
                });
                if (k) throw k;
                if (!D || !D.session || !D.user) {
                    const B = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: B
                    });
                }
                return D.session && (await this._saveSession(D.session), await this._notifyAllSubscribers("SIGNED_IN", D.session)), this._returnResult({
                    data: Object.assign({}, D),
                    error: k
                });
            } catch (D) {
                if (X(D)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: D
                });
                throw D;
            }
        }
        async signInWithSolana(n) {
            var r, l, u, h, f, d, p, g, b, v, S, E;
            let N, D;
            if ("message" in n) N = n.message, D = n.signature;
            else {
                const { chain: k, wallet: B, statement: $, options: z } = n;
                let V;
                if (st()) if (typeof B == "object") V = B;
                else {
                    const ne = window;
                    if ("solana" in ne && typeof ne.solana == "object" && ("signIn" in ne.solana && typeof ne.solana.signIn == "function" || "signMessage" in ne.solana && typeof ne.solana.signMessage == "function")) V = ne.solana;
                    else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof B != "object" || !z?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    V = B;
                }
                const te = new URL((r = z?.url) !== null && r !== void 0 ? r : window.location.href);
                if ("signIn" in V && V.signIn) {
                    const ne = await V.signIn(Object.assign(Object.assign(Object.assign({
                        issuedAt: new Date().toISOString()
                    }, z?.signInWithSolana), {
                        version: "1",
                        domain: te.host,
                        uri: te.href
                    }), $ ? {
                        statement: $
                    } : null));
                    let K;
                    if (Array.isArray(ne) && ne[0] && typeof ne[0] == "object") K = ne[0];
                    else if (ne && typeof ne == "object" && "signedMessage" in ne && "signature" in ne) K = ne;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                    if ("signedMessage" in K && "signature" in K && (typeof K.signedMessage == "string" || K.signedMessage instanceof Uint8Array) && K.signature instanceof Uint8Array) N = typeof K.signedMessage == "string" ? K.signedMessage : new TextDecoder().decode(K.signedMessage), D = K.signature;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
                } else {
                    if (!("signMessage" in V) || typeof V.signMessage != "function" || !("publicKey" in V) || typeof V != "object" || !V.publicKey || !("toBase58" in V.publicKey) || typeof V.publicKey.toBase58 != "function") throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                    N = [
                        `${te.host} wants you to sign in with your Solana account:`,
                        V.publicKey.toBase58(),
                        ...$ ? [
                            "",
                            $,
                            ""
                        ] : [
                            ""
                        ],
                        "Version: 1",
                        `URI: ${te.href}`,
                        `Issued At: ${(u = (l = z?.signInWithSolana) === null || l === void 0 ? void 0 : l.issuedAt) !== null && u !== void 0 ? u : new Date().toISOString()}`,
                        ...!((h = z?.signInWithSolana) === null || h === void 0) && h.notBefore ? [
                            `Not Before: ${z.signInWithSolana.notBefore}`
                        ] : [],
                        ...!((f = z?.signInWithSolana) === null || f === void 0) && f.expirationTime ? [
                            `Expiration Time: ${z.signInWithSolana.expirationTime}`
                        ] : [],
                        ...!((d = z?.signInWithSolana) === null || d === void 0) && d.chainId ? [
                            `Chain ID: ${z.signInWithSolana.chainId}`
                        ] : [],
                        ...!((p = z?.signInWithSolana) === null || p === void 0) && p.nonce ? [
                            `Nonce: ${z.signInWithSolana.nonce}`
                        ] : [],
                        ...!((g = z?.signInWithSolana) === null || g === void 0) && g.requestId ? [
                            `Request ID: ${z.signInWithSolana.requestId}`
                        ] : [],
                        ...!((v = (b = z?.signInWithSolana) === null || b === void 0 ? void 0 : b.resources) === null || v === void 0) && v.length ? [
                            "Resources",
                            ...z.signInWithSolana.resources.map((K)=>`- ${K}`)
                        ] : []
                    ].join(`
`);
                    const ne = await V.signMessage(new TextEncoder().encode(N), "utf8");
                    if (!ne || !(ne instanceof Uint8Array)) throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                    D = ne;
                }
            }
            try {
                const { data: k, error: B } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                    headers: this.headers,
                    body: Object.assign({
                        chain: "solana",
                        message: N,
                        signature: xa(D)
                    }, !((S = n.options) === null || S === void 0) && S.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: (E = n.options) === null || E === void 0 ? void 0 : E.captchaToken
                        }
                    } : null),
                    xform: Xt
                });
                if (B) throw B;
                if (!k || !k.session || !k.user) {
                    const $ = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: $
                    });
                }
                return k.session && (await this._saveSession(k.session), await this._notifyAllSubscribers("SIGNED_IN", k.session)), this._returnResult({
                    data: Object.assign({}, k),
                    error: B
                });
            } catch (k) {
                if (X(k)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: k
                });
                throw k;
            }
        }
        async _exchangeCodeForSession(n) {
            const r = await Ea(this.storage, `${this.storageKey}-code-verifier`), [l, u] = (r ?? "").split("/");
            try {
                if (!l && this.flowType === "pkce") throw new __;
                const { data: h, error: f } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                    headers: this.headers,
                    body: {
                        auth_code: n,
                        code_verifier: l
                    },
                    xform: Xt
                });
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), f) throw f;
                if (!h || !h.session || !h.user) {
                    const d = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: d
                    });
                }
                return h.session && (await this._saveSession(h.session), await this._notifyAllSubscribers("SIGNED_IN", h.session)), this._returnResult({
                    data: Object.assign(Object.assign({}, h), {
                        redirectType: u ?? null
                    }),
                    error: f
                });
            } catch (h) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(h)) return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: h
                });
                throw h;
            }
        }
        async signInWithIdToken(n) {
            try {
                const { options: r, provider: l, token: u, access_token: h, nonce: f } = n, d = await Z(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    body: {
                        provider: l,
                        id_token: u,
                        access_token: h,
                        nonce: f,
                        gotrue_meta_security: {
                            captcha_token: r?.captchaToken
                        }
                    },
                    xform: Xt
                }), { data: p, error: g } = d;
                if (g) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: g
                });
                if (!p || !p.session || !p.user) {
                    const b = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: b
                    });
                }
                return p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), this._returnResult({
                    data: p,
                    error: g
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async signInWithOtp(n) {
            var r, l, u, h, f;
            try {
                if ("email" in n) {
                    const { email: d, options: p } = n;
                    let g = null, b = null;
                    this.flowType === "pkce" && ([g, b] = await pi(this.storage, this.storageKey));
                    const { error: v } = await Z(this.fetch, "POST", `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            email: d,
                            data: (r = p?.data) !== null && r !== void 0 ? r : {},
                            create_user: (l = p?.shouldCreateUser) !== null && l !== void 0 ? l : !0,
                            gotrue_meta_security: {
                                captcha_token: p?.captchaToken
                            },
                            code_challenge: g,
                            code_challenge_method: b
                        },
                        redirectTo: p?.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: v
                    });
                }
                if ("phone" in n) {
                    const { phone: d, options: p } = n, { data: g, error: b } = await Z(this.fetch, "POST", `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            phone: d,
                            data: (u = p?.data) !== null && u !== void 0 ? u : {},
                            create_user: (h = p?.shouldCreateUser) !== null && h !== void 0 ? h : !0,
                            gotrue_meta_security: {
                                captcha_token: p?.captchaToken
                            },
                            channel: (f = p?.channel) !== null && f !== void 0 ? f : "sms"
                        }
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            messageId: g?.message_id
                        },
                        error: b
                    });
                }
                throw new hl("You must provide either an email or phone number.");
            } catch (d) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(d)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
                throw d;
            }
        }
        async verifyOtp(n) {
            var r, l;
            try {
                let u, h;
                "options" in n && (u = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo, h = (l = n.options) === null || l === void 0 ? void 0 : l.captchaToken);
                const { data: f, error: d } = await Z(this.fetch, "POST", `${this.url}/verify`, {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, n), {
                        gotrue_meta_security: {
                            captcha_token: h
                        }
                    }),
                    redirectTo: u,
                    xform: Xt
                });
                if (d) throw d;
                if (!f) throw new Error("An error occurred on token verification.");
                const p = f.session, g = f.user;
                return p?.access_token && (await this._saveSession(p), await this._notifyAllSubscribers(n.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", p)), this._returnResult({
                    data: {
                        user: g,
                        session: p
                    },
                    error: null
                });
            } catch (u) {
                if (X(u)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                });
                throw u;
            }
        }
        async signInWithSSO(n) {
            var r, l, u, h, f;
            try {
                let d = null, p = null;
                this.flowType === "pkce" && ([d, p] = await pi(this.storage, this.storageKey));
                const g = await Z(this.fetch, "POST", `${this.url}/sso`, {
                    body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in n ? {
                        provider_id: n.providerId
                    } : null), "domain" in n ? {
                        domain: n.domain
                    } : null), {
                        redirect_to: (l = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo) !== null && l !== void 0 ? l : void 0
                    }), !((u = n?.options) === null || u === void 0) && u.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: n.options.captchaToken
                        }
                    } : null), {
                        skip_http_redirect: !0,
                        code_challenge: d,
                        code_challenge_method: p
                    }),
                    headers: this.headers,
                    xform: K_
                });
                return !((h = g.data) === null || h === void 0) && h.url && st() && !(!((f = n.options) === null || f === void 0) && f.skipBrowserRedirect) && window.location.assign(g.data.url), this._returnResult(g);
            } catch (d) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(d)) return this._returnResult({
                    data: null,
                    error: d
                });
                throw d;
            }
        }
        async reauthenticate() {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._reauthenticate());
        }
        async _reauthenticate() {
            try {
                return await this._useSession(async (n)=>{
                    const { data: { session: r }, error: l } = n;
                    if (l) throw l;
                    if (!r) throw new Ct;
                    const { error: u } = await Z(this.fetch, "GET", `${this.url}/reauthenticate`, {
                        headers: this.headers,
                        jwt: r.access_token
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: u
                    });
                });
            } catch (n) {
                if (X(n)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: n
                });
                throw n;
            }
        }
        async resend(n) {
            try {
                const r = `${this.url}/resend`;
                if ("email" in n) {
                    const { email: l, type: u, options: h } = n, { error: f } = await Z(this.fetch, "POST", r, {
                        headers: this.headers,
                        body: {
                            email: l,
                            type: u,
                            gotrue_meta_security: {
                                captcha_token: h?.captchaToken
                            }
                        },
                        redirectTo: h?.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: f
                    });
                } else if ("phone" in n) {
                    const { phone: l, type: u, options: h } = n, { data: f, error: d } = await Z(this.fetch, "POST", r, {
                        headers: this.headers,
                        body: {
                            phone: l,
                            type: u,
                            gotrue_meta_security: {
                                captcha_token: h?.captchaToken
                            }
                        }
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            messageId: f?.message_id
                        },
                        error: d
                    });
                }
                throw new hl("You must provide either an email or phone number and a type");
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async getSession() {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>this._useSession(async (r)=>r));
        }
        async _acquireLock(n, r) {
            this._debug("#_acquireLock", "begin", n);
            try {
                if (this.lockAcquired) {
                    const l = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), u = (async ()=>(await l, await r()))();
                    return this.pendingInLock.push((async ()=>{
                        try {
                            await u;
                        } catch  {}
                    })()), u;
                }
                return await this.lock(`lock:${this.storageKey}`, n, async ()=>{
                    this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                    try {
                        this.lockAcquired = !0;
                        const l = r();
                        for(this.pendingInLock.push((async ()=>{
                            try {
                                await l;
                            } catch  {}
                        })()), await l; this.pendingInLock.length;){
                            const u = [
                                ...this.pendingInLock
                            ];
                            await Promise.all(u), this.pendingInLock.splice(0, u.length);
                        }
                        return await l;
                    } finally{
                        this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
                    }
                });
            } finally{
                this._debug("#_acquireLock", "end");
            }
        }
        async _useSession(n) {
            this._debug("#_useSession", "begin");
            try {
                const r = await this.__loadSession();
                return await n(r);
            } finally{
                this._debug("#_useSession", "end");
            }
        }
        async __loadSession() {
            this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
            try {
                let n = null;
                const r = await Ea(this.storage, this.storageKey);
                if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? n = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !n) return {
                    data: {
                        session: null
                    },
                    error: null
                };
                const l = n.expires_at ? n.expires_at * 1e3 - Date.now() < ic : !1;
                if (this._debug("#__loadSession()", `session has${l ? "" : " not"} expired`, "expires_at", n.expires_at), !l) {
                    if (this.userStorage) {
                        const f = await Ea(this.userStorage, this.storageKey + "-user");
                        f?.user ? n.user = f.user : n.user = sc();
                    }
                    if (this.storage.isServer && n.user && !n.user.__isUserNotAvailableProxy) {
                        const f = {
                            value: this.suppressGetSessionWarning
                        };
                        n.user = $_(n.user, f), f.value && (this.suppressGetSessionWarning = !0);
                    }
                    return {
                        data: {
                            session: n
                        },
                        error: null
                    };
                }
                const { data: u, error: h } = await this._callRefreshToken(n.refresh_token);
                return h ? this._returnResult({
                    data: {
                        session: null
                    },
                    error: h
                }) : this._returnResult({
                    data: {
                        session: u
                    },
                    error: null
                });
            } finally{
                this._debug("#__loadSession()", "end");
            }
        }
        async getUser(n) {
            if (n) return await this._getUser(n);
            await this.initializePromise;
            const r = await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._getUser());
            return r.data.user && (this.suppressGetSessionWarning = !0), r;
        }
        async _getUser(n) {
            try {
                return n ? await Z(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: n,
                    xform: na
                }) : await this._useSession(async (r)=>{
                    var l, u, h;
                    const { data: f, error: d } = r;
                    if (d) throw d;
                    return !(!((l = f.session) === null || l === void 0) && l.access_token) && !this.hasCustomAuthorizationHeader ? {
                        data: {
                            user: null
                        },
                        error: new Ct
                    } : await Z(this.fetch, "GET", `${this.url}/user`, {
                        headers: this.headers,
                        jwt: (h = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && h !== void 0 ? h : void 0,
                        xform: na
                    });
                });
            } catch (r) {
                if (X(r)) return cl(r) && (await this._removeSession(), await rt(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                    data: {
                        user: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async updateUser(n, r = {}) {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._updateUser(n, r));
        }
        async _updateUser(n, r = {}) {
            try {
                return await this._useSession(async (l)=>{
                    const { data: u, error: h } = l;
                    if (h) throw h;
                    if (!u.session) throw new Ct;
                    const f = u.session;
                    let d = null, p = null;
                    this.flowType === "pkce" && n.email != null && ([d, p] = await pi(this.storage, this.storageKey));
                    const { data: g, error: b } = await Z(this.fetch, "PUT", `${this.url}/user`, {
                        headers: this.headers,
                        redirectTo: r?.emailRedirectTo,
                        body: Object.assign(Object.assign({}, n), {
                            code_challenge: d,
                            code_challenge_method: p
                        }),
                        jwt: f.access_token,
                        xform: na
                    });
                    if (b) throw b;
                    return f.user = g.user, await this._saveSession(f), await this._notifyAllSubscribers("USER_UPDATED", f), this._returnResult({
                        data: {
                            user: f.user
                        },
                        error: null
                    });
                });
            } catch (l) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(l)) return this._returnResult({
                    data: {
                        user: null
                    },
                    error: l
                });
                throw l;
            }
        }
        async setSession(n) {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._setSession(n));
        }
        async _setSession(n) {
            try {
                if (!n.access_token || !n.refresh_token) throw new Ct;
                const r = Date.now() / 1e3;
                let l = r, u = !0, h = null;
                const { payload: f } = dl(n.access_token);
                if (f.exp && (l = f.exp, u = l <= r), u) {
                    const { data: d, error: p } = await this._callRefreshToken(n.refresh_token);
                    if (p) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: p
                    });
                    if (!d) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                    h = d;
                } else {
                    const { data: d, error: p } = await this._getUser(n.access_token);
                    if (p) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: p
                    });
                    h = {
                        access_token: n.access_token,
                        refresh_token: n.refresh_token,
                        user: d.user,
                        token_type: "bearer",
                        expires_in: l - r,
                        expires_at: l
                    }, await this._saveSession(h), await this._notifyAllSubscribers("SIGNED_IN", h);
                }
                return this._returnResult({
                    data: {
                        user: h.user,
                        session: h
                    },
                    error: null
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async refreshSession(n) {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._refreshSession(n));
        }
        async _refreshSession(n) {
            try {
                return await this._useSession(async (r)=>{
                    var l;
                    if (!n) {
                        const { data: f, error: d } = r;
                        if (d) throw d;
                        n = (l = f.session) !== null && l !== void 0 ? l : void 0;
                    }
                    if (!n?.refresh_token) throw new Ct;
                    const { data: u, error: h } = await this._callRefreshToken(n.refresh_token);
                    return h ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: h
                    }) : u ? this._returnResult({
                        data: {
                            user: u.user,
                            session: u
                        },
                        error: null
                    }) : this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    });
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                });
                throw r;
            }
        }
        async _getSessionFromURL(n, r) {
            try {
                if (!st()) throw new fl("No browser detected.");
                if (n.error || n.error_description || n.error_code) throw new fl(n.error_description || "Error in URL with unspecified error_description", {
                    error: n.error || "unspecified_error",
                    code: n.error_code || "unspecified_code"
                });
                switch(r){
                    case "implicit":
                        if (this.flowType === "pkce") throw new ym("Not a valid PKCE flow url.");
                        break;
                    case "pkce":
                        if (this.flowType === "implicit") throw new fl("Not a valid implicit grant flow url.");
                        break;
                    default:
                }
                if (r === "pkce") {
                    if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !n.code) throw new ym("No code detected.");
                    const { data: $, error: z } = await this._exchangeCodeForSession(n.code);
                    if (z) throw z;
                    const V = new URL(window.location.href);
                    return V.searchParams.delete("code"), window.history.replaceState(window.history.state, "", V.toString()), {
                        data: {
                            session: $.session,
                            redirectType: null
                        },
                        error: null
                    };
                }
                const { provider_token: l, provider_refresh_token: u, access_token: h, refresh_token: f, expires_in: d, expires_at: p, token_type: g } = n;
                if (!h || !d || !f || !g) throw new fl("No session defined in URL");
                const b = Math.round(Date.now() / 1e3), v = parseInt(d);
                let S = b + v;
                p && (S = parseInt(p));
                const E = S - b;
                E * 1e3 <= wi && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${E}s, should have been closer to ${v}s`);
                const N = S - v;
                b - N >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", N, S, b) : b - N < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", N, S, b);
                const { data: D, error: k } = await this._getUser(h);
                if (k) throw k;
                const B = {
                    provider_token: l,
                    provider_refresh_token: u,
                    access_token: h,
                    expires_in: v,
                    expires_at: S,
                    refresh_token: f,
                    token_type: g,
                    user: D.user
                };
                return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({
                    data: {
                        session: B,
                        redirectType: n.type
                    },
                    error: null
                });
            } catch (l) {
                if (X(l)) return this._returnResult({
                    data: {
                        session: null,
                        redirectType: null
                    },
                    error: l
                });
                throw l;
            }
        }
        _isImplicitGrantCallback(n) {
            return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), n) : !!(n.access_token || n.error_description);
        }
        async _isPKCECallback(n) {
            const r = await Ea(this.storage, `${this.storageKey}-code-verifier`);
            return !!(n.code && r);
        }
        async signOut(n = {
            scope: "global"
        }) {
            return await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>await this._signOut(n));
        }
        async _signOut({ scope: n } = {
            scope: "global"
        }) {
            return await this._useSession(async (r)=>{
                var l;
                const { data: u, error: h } = r;
                if (h && !cl(h)) return this._returnResult({
                    error: h
                });
                const f = (l = u.session) === null || l === void 0 ? void 0 : l.access_token;
                if (f) {
                    const { error: d } = await this.admin.signOut(f, n);
                    if (d && !(b_(d) && (d.status === 404 || d.status === 401 || d.status === 403) || cl(d))) return this._returnResult({
                        error: d
                    });
                }
                return n !== "others" && (await this._removeSession(), await rt(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                    error: null
                });
            });
        }
        onAuthStateChange(n) {
            const r = O_(), l = {
                id: r,
                callback: n,
                unsubscribe: ()=>{
                    this._debug("#unsubscribe()", "state change callback with id removed", r), this.stateChangeEmitters.delete(r);
                }
            };
            return this._debug("#onAuthStateChange()", "registered callback with id", r), this.stateChangeEmitters.set(r, l), (async ()=>(await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>{
                    this._emitInitialSession(r);
                })))(), {
                data: {
                    subscription: l
                }
            };
        }
        async _emitInitialSession(n) {
            return await this._useSession(async (r)=>{
                var l, u;
                try {
                    const { data: { session: h }, error: f } = r;
                    if (f) throw f;
                    await ((l = this.stateChangeEmitters.get(n)) === null || l === void 0 ? void 0 : l.callback("INITIAL_SESSION", h)), this._debug("INITIAL_SESSION", "callback id", n, "session", h);
                } catch (h) {
                    await ((u = this.stateChangeEmitters.get(n)) === null || u === void 0 ? void 0 : u.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", n, "error", h), cl(h) ? console.warn(h) : console.error(h);
                }
            });
        }
        async resetPasswordForEmail(n, r = {}) {
            let l = null, u = null;
            this.flowType === "pkce" && ([l, u] = await pi(this.storage, this.storageKey, !0));
            try {
                return await Z(this.fetch, "POST", `${this.url}/recover`, {
                    body: {
                        email: n,
                        code_challenge: l,
                        code_challenge_method: u,
                        gotrue_meta_security: {
                            captcha_token: r.captchaToken
                        }
                    },
                    headers: this.headers,
                    redirectTo: r.redirectTo
                });
            } catch (h) {
                if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(h)) return this._returnResult({
                    data: null,
                    error: h
                });
                throw h;
            }
        }
        async getUserIdentities() {
            var n;
            try {
                const { data: r, error: l } = await this.getUser();
                if (l) throw l;
                return this._returnResult({
                    data: {
                        identities: (n = r.user.identities) !== null && n !== void 0 ? n : []
                    },
                    error: null
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async linkIdentity(n) {
            return "token" in n ? this.linkIdentityIdToken(n) : this.linkIdentityOAuth(n);
        }
        async linkIdentityOAuth(n) {
            var r;
            try {
                const { data: l, error: u } = await this._useSession(async (h)=>{
                    var f, d, p, g, b;
                    const { data: v, error: S } = h;
                    if (S) throw S;
                    const E = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, n.provider, {
                        redirectTo: (f = n.options) === null || f === void 0 ? void 0 : f.redirectTo,
                        scopes: (d = n.options) === null || d === void 0 ? void 0 : d.scopes,
                        queryParams: (p = n.options) === null || p === void 0 ? void 0 : p.queryParams,
                        skipBrowserRedirect: !0
                    });
                    return await Z(this.fetch, "GET", E, {
                        headers: this.headers,
                        jwt: (b = (g = v.session) === null || g === void 0 ? void 0 : g.access_token) !== null && b !== void 0 ? b : void 0
                    });
                });
                if (u) throw u;
                return st() && !(!((r = n.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(l?.url), this._returnResult({
                    data: {
                        provider: n.provider,
                        url: l?.url
                    },
                    error: null
                });
            } catch (l) {
                if (X(l)) return this._returnResult({
                    data: {
                        provider: n.provider,
                        url: null
                    },
                    error: l
                });
                throw l;
            }
        }
        async linkIdentityIdToken(n) {
            return await this._useSession(async (r)=>{
                var l;
                try {
                    const { error: u, data: { session: h } } = r;
                    if (u) throw u;
                    const { options: f, provider: d, token: p, access_token: g, nonce: b } = n, v = await Z(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                        headers: this.headers,
                        jwt: (l = h?.access_token) !== null && l !== void 0 ? l : void 0,
                        body: {
                            provider: d,
                            id_token: p,
                            access_token: g,
                            nonce: b,
                            link_identity: !0,
                            gotrue_meta_security: {
                                captcha_token: f?.captchaToken
                            }
                        },
                        xform: Xt
                    }), { data: S, error: E } = v;
                    return E ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: E
                    }) : !S || !S.session || !S.user ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: new di
                    }) : (S.session && (await this._saveSession(S.session), await this._notifyAllSubscribers("USER_UPDATED", S.session)), this._returnResult({
                        data: S,
                        error: E
                    }));
                } catch (u) {
                    if (await rt(this.storage, `${this.storageKey}-code-verifier`), X(u)) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: u
                    });
                    throw u;
                }
            });
        }
        async unlinkIdentity(n) {
            try {
                return await this._useSession(async (r)=>{
                    var l, u;
                    const { data: h, error: f } = r;
                    if (f) throw f;
                    return await Z(this.fetch, "DELETE", `${this.url}/user/identities/${n.identity_id}`, {
                        headers: this.headers,
                        jwt: (u = (l = h.session) === null || l === void 0 ? void 0 : l.access_token) !== null && u !== void 0 ? u : void 0
                    });
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async _refreshAccessToken(n) {
            const r = `#_refreshAccessToken(${n.substring(0, 5)}...)`;
            this._debug(r, "begin");
            try {
                const l = Date.now();
                return await N_(async (u)=>(u > 0 && await j_(200 * Math.pow(2, u - 1)), this._debug(r, "refreshing attempt", u), await Z(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                        body: {
                            refresh_token: n
                        },
                        headers: this.headers,
                        xform: Xt
                    })), (u, h)=>{
                    const f = 200 * Math.pow(2, u);
                    return h && rc(h) && Date.now() + f - l < wi;
                });
            } catch (l) {
                if (this._debug(r, "error", l), X(l)) return this._returnResult({
                    data: {
                        session: null,
                        user: null
                    },
                    error: l
                });
                throw l;
            } finally{
                this._debug(r, "end");
            }
        }
        _isValidSession(n) {
            return typeof n == "object" && n !== null && "access_token" in n && "refresh_token" in n && "expires_at" in n;
        }
        async _handleProviderSignIn(n, r) {
            const l = await this._getUrlForProvider(`${this.url}/authorize`, n, {
                redirectTo: r.redirectTo,
                scopes: r.scopes,
                queryParams: r.queryParams
            });
            return this._debug("#_handleProviderSignIn()", "provider", n, "options", r, "url", l), st() && !r.skipBrowserRedirect && window.location.assign(l), {
                data: {
                    provider: n,
                    url: l
                },
                error: null
            };
        }
        async _recoverAndRefresh() {
            var n, r;
            const l = "#_recoverAndRefresh()";
            this._debug(l, "begin");
            try {
                const u = await Ea(this.storage, this.storageKey);
                if (u && this.userStorage) {
                    let f = await Ea(this.userStorage, this.storageKey + "-user");
                    !this.storage.isServer && Object.is(this.storage, this.userStorage) && !f && (f = {
                        user: u.user
                    }, await _i(this.userStorage, this.storageKey + "-user", f)), u.user = (n = f?.user) !== null && n !== void 0 ? n : sc();
                } else if (u && !u.user && !u.user) {
                    const f = await Ea(this.storage, this.storageKey + "-user");
                    f && f?.user ? (u.user = f.user, await rt(this.storage, this.storageKey + "-user"), await _i(this.storage, this.storageKey, u)) : u.user = sc();
                }
                if (this._debug(l, "session from storage", u), !this._isValidSession(u)) {
                    this._debug(l, "session is not valid"), u !== null && await this._removeSession();
                    return;
                }
                const h = ((r = u.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < ic;
                if (this._debug(l, `session has${h ? "" : " not"} expired with margin of ${ic}s`), h) {
                    if (this.autoRefreshToken && u.refresh_token) {
                        const { error: f } = await this._callRefreshToken(u.refresh_token);
                        f && (console.error(f), rc(f) || (this._debug(l, "refresh failed with a non-retryable error, removing the session", f), await this._removeSession()));
                    }
                } else if (u.user && u.user.__isUserNotAvailableProxy === !0) try {
                    const { data: f, error: d } = await this._getUser(u.access_token);
                    !d && f?.user ? (u.user = f.user, await this._saveSession(u), await this._notifyAllSubscribers("SIGNED_IN", u)) : this._debug(l, "could not get user data, skipping SIGNED_IN notification");
                } catch (f) {
                    console.error("Error getting user data:", f), this._debug(l, "error getting user data, skipping SIGNED_IN notification", f);
                }
                else await this._notifyAllSubscribers("SIGNED_IN", u);
            } catch (u) {
                this._debug(l, "error", u), console.error(u);
                return;
            } finally{
                this._debug(l, "end");
            }
        }
        async _callRefreshToken(n) {
            var r, l;
            if (!n) throw new Ct;
            if (this.refreshingDeferred) return this.refreshingDeferred.promise;
            const u = `#_callRefreshToken(${n.substring(0, 5)}...)`;
            this._debug(u, "begin");
            try {
                this.refreshingDeferred = new Ol;
                const { data: h, error: f } = await this._refreshAccessToken(n);
                if (f) throw f;
                if (!h.session) throw new Ct;
                await this._saveSession(h.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", h.session);
                const d = {
                    data: h.session,
                    error: null
                };
                return this.refreshingDeferred.resolve(d), d;
            } catch (h) {
                if (this._debug(u, "error", h), X(h)) {
                    const f = {
                        data: null,
                        error: h
                    };
                    return rc(h) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(f), f;
                }
                throw (l = this.refreshingDeferred) === null || l === void 0 || l.reject(h), h;
            } finally{
                this.refreshingDeferred = null, this._debug(u, "end");
            }
        }
        async _notifyAllSubscribers(n, r, l = !0) {
            const u = `#_notifyAllSubscribers(${n})`;
            this._debug(u, "begin", r, `broadcast = ${l}`);
            try {
                this.broadcastChannel && l && this.broadcastChannel.postMessage({
                    event: n,
                    session: r
                });
                const h = [], f = Array.from(this.stateChangeEmitters.values()).map(async (d)=>{
                    try {
                        await d.callback(n, r);
                    } catch (p) {
                        h.push(p);
                    }
                });
                if (await Promise.all(f), h.length > 0) {
                    for(let d = 0; d < h.length; d += 1)console.error(h[d]);
                    throw h[0];
                }
            } finally{
                this._debug(u, "end");
            }
        }
        async _saveSession(n) {
            this._debug("#_saveSession()", n), this.suppressGetSessionWarning = !0, await rt(this.storage, `${this.storageKey}-code-verifier`);
            const r = Object.assign({}, n), l = r.user && r.user.__isUserNotAvailableProxy === !0;
            if (this.userStorage) {
                !l && r.user && await _i(this.userStorage, this.storageKey + "-user", {
                    user: r.user
                });
                const u = Object.assign({}, r);
                delete u.user;
                const h = Sm(u);
                await _i(this.storage, this.storageKey, h);
            } else {
                const u = Sm(r);
                await _i(this.storage, this.storageKey, u);
            }
        }
        async _removeSession() {
            this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await rt(this.storage, this.storageKey), await rt(this.storage, this.storageKey + "-code-verifier"), await rt(this.storage, this.storageKey + "-user"), this.userStorage && await rt(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
        }
        _removeVisibilityChangedCallback() {
            this._debug("#_removeVisibilityChangedCallback()");
            const n = this.visibilityChangedCallback;
            this.visibilityChangedCallback = null;
            try {
                n && st() && window?.removeEventListener && window.removeEventListener("visibilitychange", n);
            } catch (r) {
                console.error("removing visibilitychange callback failed", r);
            }
        }
        async _startAutoRefresh() {
            await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
            const n = setInterval(()=>this._autoRefreshTokenTick(), wi);
            this.autoRefreshTicker = n, n && typeof n == "object" && typeof n.unref == "function" ? n.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(n);
            const r = setTimeout(async ()=>{
                await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
            this.autoRefreshTickTimeout = r, r && typeof r == "object" && typeof r.unref == "function" ? r.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(r);
        }
        async _stopAutoRefresh() {
            this._debug("#_stopAutoRefresh()");
            const n = this.autoRefreshTicker;
            this.autoRefreshTicker = null, n && clearInterval(n);
            const r = this.autoRefreshTickTimeout;
            this.autoRefreshTickTimeout = null, r && clearTimeout(r);
        }
        async startAutoRefresh() {
            this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
            this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
            this._debug("#_autoRefreshTokenTick()", "begin");
            try {
                await this._acquireLock(0, async ()=>{
                    try {
                        const n = Date.now();
                        try {
                            return await this._useSession(async (r)=>{
                                const { data: { session: l } } = r;
                                if (!l || !l.refresh_token || !l.expires_at) {
                                    this._debug("#_autoRefreshTokenTick()", "no session");
                                    return;
                                }
                                const u = Math.floor((l.expires_at * 1e3 - n) / wi);
                                this._debug("#_autoRefreshTokenTick()", `access token expires in ${u} ticks, a tick lasts ${wi}ms, refresh threshold is ${wc} ticks`), u <= wc && await this._callRefreshToken(l.refresh_token);
                            });
                        } catch (r) {
                            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
                        }
                    } finally{
                        this._debug("#_autoRefreshTokenTick()", "end");
                    }
                });
            } catch (n) {
                if (n.isAcquireTimeout || n instanceof bg) this._debug("auto refresh token tick lock not available");
                else throw n;
            }
        }
        async _handleVisibilityChange() {
            if (this._debug("#_handleVisibilityChange()"), !st() || !window?.addEventListener) return this.autoRefreshToken && this.startAutoRefresh(), !1;
            try {
                this.visibilityChangedCallback = async ()=>{
                    try {
                        await this._onVisibilityChanged(!1);
                    } catch (n) {
                        this._debug("#visibilityChangedCallback", "error", n);
                    }
                }, window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
            } catch (n) {
                console.error("_handleVisibilityChange", n);
            }
        }
        async _onVisibilityChanged(n) {
            const r = `#_onVisibilityChanged(${n})`;
            this._debug(r, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), n || (await this.initializePromise, await this._acquireLock(this.lockAcquireTimeout, async ()=>{
                if (document.visibilityState !== "visible") {
                    this._debug(r, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                    return;
                }
                await this._recoverAndRefresh();
            }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
        }
        async _getUrlForProvider(n, r, l) {
            const u = [
                `provider=${encodeURIComponent(r)}`
            ];
            if (l?.redirectTo && u.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`), l?.scopes && u.push(`scopes=${encodeURIComponent(l.scopes)}`), this.flowType === "pkce") {
                const [h, f] = await pi(this.storage, this.storageKey), d = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(h)}`,
                    code_challenge_method: `${encodeURIComponent(f)}`
                });
                u.push(d.toString());
            }
            if (l?.queryParams) {
                const h = new URLSearchParams(l.queryParams);
                u.push(h.toString());
            }
            return l?.skipBrowserRedirect && u.push(`skip_http_redirect=${l.skipBrowserRedirect}`), `${n}?${u.join("&")}`;
        }
        async _unenroll(n) {
            try {
                return await this._useSession(async (r)=>{
                    var l;
                    const { data: u, error: h } = r;
                    return h ? this._returnResult({
                        data: null,
                        error: h
                    }) : await Z(this.fetch, "DELETE", `${this.url}/factors/${n.factorId}`, {
                        headers: this.headers,
                        jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async _enroll(n) {
            try {
                return await this._useSession(async (r)=>{
                    var l, u;
                    const { data: h, error: f } = r;
                    if (f) return this._returnResult({
                        data: null,
                        error: f
                    });
                    const d = Object.assign({
                        friendly_name: n.friendlyName,
                        factor_type: n.factorType
                    }, n.factorType === "phone" ? {
                        phone: n.phone
                    } : n.factorType === "totp" ? {
                        issuer: n.issuer
                    } : {}), { data: p, error: g } = await Z(this.fetch, "POST", `${this.url}/factors`, {
                        body: d,
                        headers: this.headers,
                        jwt: (l = h?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                    return g ? this._returnResult({
                        data: null,
                        error: g
                    }) : (n.factorType === "totp" && p.type === "totp" && (!((u = p?.totp) === null || u === void 0) && u.qr_code) && (p.totp.qr_code = `data:image/svg+xml;utf-8,${p.totp.qr_code}`), this._returnResult({
                        data: p,
                        error: null
                    }));
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async _verify(n) {
            return this._acquireLock(this.lockAcquireTimeout, async ()=>{
                try {
                    return await this._useSession(async (r)=>{
                        var l;
                        const { data: u, error: h } = r;
                        if (h) return this._returnResult({
                            data: null,
                            error: h
                        });
                        const f = Object.assign({
                            challenge_id: n.challengeId
                        }, "webauthn" in n ? {
                            webauthn: Object.assign(Object.assign({}, n.webauthn), {
                                credential_response: n.webauthn.type === "create" ? lS(n.webauthn.credential_response) : oS(n.webauthn.credential_response)
                            })
                        } : {
                            code: n.code
                        }), { data: d, error: p } = await Z(this.fetch, "POST", `${this.url}/factors/${n.factorId}/verify`, {
                            body: f,
                            headers: this.headers,
                            jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
                        });
                        return p ? this._returnResult({
                            data: null,
                            error: p
                        }) : (await this._saveSession(Object.assign({
                            expires_at: Math.round(Date.now() / 1e3) + d.expires_in
                        }, d)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d), this._returnResult({
                            data: d,
                            error: p
                        }));
                    });
                } catch (r) {
                    if (X(r)) return this._returnResult({
                        data: null,
                        error: r
                    });
                    throw r;
                }
            });
        }
        async _challenge(n) {
            return this._acquireLock(this.lockAcquireTimeout, async ()=>{
                try {
                    return await this._useSession(async (r)=>{
                        var l;
                        const { data: u, error: h } = r;
                        if (h) return this._returnResult({
                            data: null,
                            error: h
                        });
                        const f = await Z(this.fetch, "POST", `${this.url}/factors/${n.factorId}/challenge`, {
                            body: n,
                            headers: this.headers,
                            jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
                        });
                        if (f.error) return f;
                        const { data: d } = f;
                        if (d.type !== "webauthn") return {
                            data: d,
                            error: null
                        };
                        switch(d.webauthn.type){
                            case "create":
                                return {
                                    data: Object.assign(Object.assign({}, d), {
                                        webauthn: Object.assign(Object.assign({}, d.webauthn), {
                                            credential_options: Object.assign(Object.assign({}, d.webauthn.credential_options), {
                                                publicKey: rS(d.webauthn.credential_options.publicKey)
                                            })
                                        })
                                    }),
                                    error: null
                                };
                            case "request":
                                return {
                                    data: Object.assign(Object.assign({}, d), {
                                        webauthn: Object.assign(Object.assign({}, d.webauthn), {
                                            credential_options: Object.assign(Object.assign({}, d.webauthn.credential_options), {
                                                publicKey: sS(d.webauthn.credential_options.publicKey)
                                            })
                                        })
                                    }),
                                    error: null
                                };
                        }
                    });
                } catch (r) {
                    if (X(r)) return this._returnResult({
                        data: null,
                        error: r
                    });
                    throw r;
                }
            });
        }
        async _challengeAndVerify(n) {
            const { data: r, error: l } = await this._challenge({
                factorId: n.factorId
            });
            return l ? this._returnResult({
                data: null,
                error: l
            }) : await this._verify({
                factorId: n.factorId,
                challengeId: r.id,
                code: n.code
            });
        }
        async _listFactors() {
            var n;
            const { data: { user: r }, error: l } = await this.getUser();
            if (l) return {
                data: null,
                error: l
            };
            const u = {
                all: [],
                phone: [],
                totp: [],
                webauthn: []
            };
            for (const h of (n = r?.factors) !== null && n !== void 0 ? n : [])u.all.push(h), h.status === "verified" && u[h.factor_type].push(h);
            return {
                data: u,
                error: null
            };
        }
        async _getAuthenticatorAssuranceLevel(n) {
            var r, l, u, h;
            if (n) try {
                const { payload: E } = dl(n);
                let N = null;
                E.aal && (N = E.aal);
                let D = N;
                const { data: { user: k }, error: B } = await this.getUser(n);
                if (B) return this._returnResult({
                    data: null,
                    error: B
                });
                ((l = (r = k?.factors) === null || r === void 0 ? void 0 : r.filter((V)=>V.status === "verified")) !== null && l !== void 0 ? l : []).length > 0 && (D = "aal2");
                const z = E.amr || [];
                return {
                    data: {
                        currentLevel: N,
                        nextLevel: D,
                        currentAuthenticationMethods: z
                    },
                    error: null
                };
            } catch (E) {
                if (X(E)) return this._returnResult({
                    data: null,
                    error: E
                });
                throw E;
            }
            const { data: { session: f }, error: d } = await this.getSession();
            if (d) return this._returnResult({
                data: null,
                error: d
            });
            if (!f) return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
            const { payload: p } = dl(f.access_token);
            let g = null;
            p.aal && (g = p.aal);
            let b = g;
            ((h = (u = f.user.factors) === null || u === void 0 ? void 0 : u.filter((E)=>E.status === "verified")) !== null && h !== void 0 ? h : []).length > 0 && (b = "aal2");
            const S = p.amr || [];
            return {
                data: {
                    currentLevel: g,
                    nextLevel: b,
                    currentAuthenticationMethods: S
                },
                error: null
            };
        }
        async _getAuthorizationDetails(n) {
            try {
                return await this._useSession(async (r)=>{
                    const { data: { session: l }, error: u } = r;
                    return u ? this._returnResult({
                        data: null,
                        error: u
                    }) : l ? await Z(this.fetch, "GET", `${this.url}/oauth/authorizations/${n}`, {
                        headers: this.headers,
                        jwt: l.access_token,
                        xform: (h)=>({
                                data: h,
                                error: null
                            })
                    }) : this._returnResult({
                        data: null,
                        error: new Ct
                    });
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async _approveAuthorization(n, r) {
            try {
                return await this._useSession(async (l)=>{
                    const { data: { session: u }, error: h } = l;
                    if (h) return this._returnResult({
                        data: null,
                        error: h
                    });
                    if (!u) return this._returnResult({
                        data: null,
                        error: new Ct
                    });
                    const f = await Z(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
                        headers: this.headers,
                        jwt: u.access_token,
                        body: {
                            action: "approve"
                        },
                        xform: (d)=>({
                                data: d,
                                error: null
                            })
                    });
                    return f.data && f.data.redirect_url && st() && !r?.skipBrowserRedirect && window.location.assign(f.data.redirect_url), f;
                });
            } catch (l) {
                if (X(l)) return this._returnResult({
                    data: null,
                    error: l
                });
                throw l;
            }
        }
        async _denyAuthorization(n, r) {
            try {
                return await this._useSession(async (l)=>{
                    const { data: { session: u }, error: h } = l;
                    if (h) return this._returnResult({
                        data: null,
                        error: h
                    });
                    if (!u) return this._returnResult({
                        data: null,
                        error: new Ct
                    });
                    const f = await Z(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
                        headers: this.headers,
                        jwt: u.access_token,
                        body: {
                            action: "deny"
                        },
                        xform: (d)=>({
                                data: d,
                                error: null
                            })
                    });
                    return f.data && f.data.redirect_url && st() && !r?.skipBrowserRedirect && window.location.assign(f.data.redirect_url), f;
                });
            } catch (l) {
                if (X(l)) return this._returnResult({
                    data: null,
                    error: l
                });
                throw l;
            }
        }
        async _listOAuthGrants() {
            try {
                return await this._useSession(async (n)=>{
                    const { data: { session: r }, error: l } = n;
                    return l ? this._returnResult({
                        data: null,
                        error: l
                    }) : r ? await Z(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                        headers: this.headers,
                        jwt: r.access_token,
                        xform: (u)=>({
                                data: u,
                                error: null
                            })
                    }) : this._returnResult({
                        data: null,
                        error: new Ct
                    });
                });
            } catch (n) {
                if (X(n)) return this._returnResult({
                    data: null,
                    error: n
                });
                throw n;
            }
        }
        async _revokeOAuthGrant(n) {
            try {
                return await this._useSession(async (r)=>{
                    const { data: { session: l }, error: u } = r;
                    return u ? this._returnResult({
                        data: null,
                        error: u
                    }) : l ? (await Z(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
                        headers: this.headers,
                        jwt: l.access_token,
                        query: {
                            client_id: n.clientId
                        },
                        noResolveJson: !0
                    }), {
                        data: {},
                        error: null
                    }) : this._returnResult({
                        data: null,
                        error: new Ct
                    });
                });
            } catch (r) {
                if (X(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async fetchJwk(n, r = {
            keys: []
        }) {
            let l = r.keys.find((d)=>d.kid === n);
            if (l) return l;
            const u = Date.now();
            if (l = this.jwks.keys.find((d)=>d.kid === n), l && this.jwks_cached_at + y_ > u) return l;
            const { data: h, error: f } = await Z(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
                headers: this.headers
            });
            if (f) throw f;
            return !h.keys || h.keys.length === 0 || (this.jwks = h, this.jwks_cached_at = u, l = h.keys.find((d)=>d.kid === n), !l) ? null : l;
        }
        async getClaims(n, r = {}) {
            try {
                let l = n;
                if (!l) {
                    const { data: E, error: N } = await this.getSession();
                    if (N || !E.session) return this._returnResult({
                        data: null,
                        error: N
                    });
                    l = E.session.access_token;
                }
                const { header: u, payload: h, signature: f, raw: { header: d, payload: p } } = dl(l);
                r?.allowExpired || B_(h.exp);
                const g = !u.alg || u.alg.startsWith("HS") || !u.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(u.kid, r?.keys ? {
                    keys: r.keys
                } : r?.jwks);
                if (!g) {
                    const { error: E } = await this.getUser(l);
                    if (E) throw E;
                    return {
                        data: {
                            claims: h,
                            header: u,
                            signature: f
                        },
                        error: null
                    };
                }
                const b = q_(u.alg), v = await crypto.subtle.importKey("jwk", g, b, !0, [
                    "verify"
                ]);
                if (!await crypto.subtle.verify(b, v, f, x_(`${d}.${p}`))) throw new Ec("Invalid JWT signature");
                return {
                    data: {
                        claims: h,
                        header: u,
                        signature: f
                    },
                    error: null
                };
            } catch (l) {
                if (X(l)) return this._returnResult({
                    data: null,
                    error: l
                });
                throw l;
            }
        }
    }
    Lr.nextInstanceID = {};
    const yS = Lr, vS = "2.103.0";
    let xr = "";
    typeof Deno < "u" ? xr = "deno" : typeof document < "u" ? xr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? xr = "react-native" : xr = "node";
    const bS = {
        "X-Client-Info": `supabase-js-${xr}/${vS}`
    }, wS = {
        headers: bS
    }, _S = {
        schema: "public"
    }, SS = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    }, ES = {};
    function Mr(i) {
        "@babel/helpers - typeof";
        return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, Mr(i);
    }
    function TS(i, n) {
        if (Mr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (Mr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function AS(i) {
        var n = TS(i, "string");
        return Mr(n) == "symbol" ? n : n + "";
    }
    function xS(i, n, r) {
        return (n = AS(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function km(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function qe(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? km(Object(r), !0).forEach(function(l) {
                xS(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : km(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const RS = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), OS = ()=>Headers, CS = (i, n, r)=>{
        const l = RS(r), u = OS();
        return async (h, f)=>{
            var d;
            const p = (d = await n()) !== null && d !== void 0 ? d : i;
            let g = new u(f?.headers);
            return g.has("apikey") || g.set("apikey", i), g.has("Authorization") || g.set("Authorization", `Bearer ${p}`), l(h, qe(qe({}, f), {}, {
                headers: g
            }));
        };
    };
    function kS(i) {
        return i.endsWith("/") ? i : i + "/";
    }
    function jS(i, n) {
        var r, l;
        const { db: u, auth: h, realtime: f, global: d } = i, { db: p, auth: g, realtime: b, global: v } = n, S = {
            db: qe(qe({}, p), u),
            auth: qe(qe({}, g), h),
            realtime: qe(qe({}, b), f),
            storage: {},
            global: qe(qe(qe({}, v), d), {}, {
                headers: qe(qe({}, (r = v?.headers) !== null && r !== void 0 ? r : {}), (l = d?.headers) !== null && l !== void 0 ? l : {})
            }),
            accessToken: async ()=>""
        };
        return i.accessToken ? S.accessToken = i.accessToken : delete S.accessToken, S;
    }
    function NS(i) {
        const n = i?.trim();
        if (!n) throw new Error("supabaseUrl is required.");
        if (!n.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
        try {
            return new URL(kS(n));
        } catch  {
            throw Error("Invalid supabaseUrl: Provided URL is malformed.");
        }
    }
    var DS = class extends yS {
        constructor(i){
            super(i);
        }
    }, US = class {
        constructor(i, n, r){
            var l, u;
            this.supabaseUrl = i, this.supabaseKey = n;
            const h = NS(i);
            if (!n) throw new Error("supabaseKey is required.");
            this.realtimeUrl = new URL("realtime/v1", h), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", h), this.storageUrl = new URL("storage/v1", h), this.functionsUrl = new URL("functions/v1", h);
            const f = `sb-${h.hostname.split(".")[0]}-auth-token`, d = {
                db: _S,
                realtime: ES,
                auth: qe(qe({}, SS), {}, {
                    storageKey: f
                }),
                global: wS
            }, p = jS(r ?? {}, d);
            if (this.storageKey = (l = p.auth.storageKey) !== null && l !== void 0 ? l : "", this.headers = (u = p.global.headers) !== null && u !== void 0 ? u : {}, p.accessToken) this.accessToken = p.accessToken, this.auth = new Proxy({}, {
                get: (b, v)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`);
                }
            });
            else {
                var g;
                this.auth = this._initSupabaseAuthClient((g = p.auth) !== null && g !== void 0 ? g : {}, this.headers, p.global.fetch);
            }
            this.fetch = CS(n, this._getAccessToken.bind(this), p.global.fetch), this.realtime = this._initRealtimeClient(qe({
                headers: this.headers,
                accessToken: this._getAccessToken.bind(this)
            }, p.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((b)=>this.realtime.setAuth(b)).catch((b)=>console.warn("Failed to set initial Realtime auth token:", b)), this.rest = new tw(new URL("rest/v1", h).href, {
                headers: this.headers,
                schema: p.db.schema,
                fetch: this.fetch,
                timeout: p.db.timeout,
                urlLengthLimit: p.db.urlLengthLimit
            }), this.storage = new f_(this.storageUrl.href, this.headers, this.fetch, r?.storage), p.accessToken || this._listenForAuthEvents();
        }
        get functions() {
            return new Vb(this.functionsUrl.href, {
                headers: this.headers,
                customFetch: this.fetch
            });
        }
        from(i) {
            return this.rest.from(i);
        }
        schema(i) {
            return this.rest.schema(i);
        }
        rpc(i, n = {}, r = {
            head: !1,
            get: !1,
            count: void 0
        }) {
            return this.rest.rpc(i, n, r);
        }
        channel(i, n = {
            config: {}
        }) {
            return this.realtime.channel(i, n);
        }
        getChannels() {
            return this.realtime.getChannels();
        }
        removeChannel(i) {
            return this.realtime.removeChannel(i);
        }
        removeAllChannels() {
            return this.realtime.removeAllChannels();
        }
        async _getAccessToken() {
            var i = this, n, r;
            if (i.accessToken) return await i.accessToken();
            const { data: l } = await i.auth.getSession();
            return (n = (r = l.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : i.supabaseKey;
        }
        _initSupabaseAuthClient({ autoRefreshToken: i, persistSession: n, detectSessionInUrl: r, storage: l, userStorage: u, storageKey: h, flowType: f, lock: d, debug: p, throwOnError: g }, b, v) {
            const S = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`
            };
            return new DS({
                url: this.authUrl.href,
                headers: qe(qe({}, S), b),
                storageKey: h,
                autoRefreshToken: i,
                persistSession: n,
                detectSessionInUrl: r,
                storage: l,
                userStorage: u,
                flowType: f,
                lock: d,
                debug: p,
                throwOnError: g,
                fetch: v,
                hasCustomAuthorizationHeader: Object.keys(this.headers).some((E)=>E.toLowerCase() === "authorization")
            });
        }
        _initRealtimeClient(i) {
            return new zw(this.realtimeUrl.href, qe(qe({}, i), {}, {
                params: qe(qe({}, {
                    apikey: this.supabaseKey
                }), i?.params)
            }));
        }
        _listenForAuthEvents() {
            return this.auth.onAuthStateChange((i, n)=>{
                this._handleTokenChanged(i, "CLIENT", n?.access_token);
            });
        }
        _handleTokenChanged(i, n, r) {
            (i === "TOKEN_REFRESHED" || i === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : i === "SIGNED_OUT" && (this.realtime.setAuth(), n == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
        }
    };
    const zS = (i, n, r)=>new US(i, n, r);
    function LS() {
        if (typeof window < "u") return !1;
        const i = globalThis.process;
        if (!i) return !1;
        const n = i.version;
        if (n == null) return !1;
        const r = n.match(/^v(\d+)\./);
        return r ? parseInt(r[1], 10) <= 18 : !1;
    }
    LS() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
    let jm, Nm;
    je = {
        name: "HWP Edit",
        nameKo: "한글 문서 편집기",
        description: "한글(HWP/HWPX) 문서를 웹에서 편집·변환·생성·관리하는 통합 도구",
        url: "https://hwp.dreamitbiz.com",
        dbPrefix: "hwp_",
        parentSite: {
            name: "DreamIT Biz",
            url: "https://www.dreamitbiz.com"
        },
        brand: {
            parts: [
                {
                    text: "HWP",
                    className: "brand-dream"
                },
                {
                    text: "Edit",
                    className: "brand-it"
                }
            ]
        },
        company: {
            name: "드림아이티비즈(DreamIT Biz)",
            ceo: "이애본",
            bizNumber: "601-45-20154",
            salesNumber: "제2024-수원팔달-0584호",
            address: "경기도 수원시 팔달구 매산로 45, 419호",
            email: "aebon@dreamitbiz.com",
            phone: "010-3700-0629",
            kakao: "aebon",
            businessHours: "평일: 09:00 ~ 18:00"
        },
        features: {
            search: !1
        },
        colors: [
            {
                name: "blue",
                color: "#0046C8"
            },
            {
                name: "red",
                color: "#C8102E"
            },
            {
                name: "green",
                color: "#00855A"
            },
            {
                name: "purple",
                color: "#8B1AC8"
            },
            {
                name: "orange",
                color: "#C87200"
            }
        ],
        menuItems: [
            {
                path: "/convert",
                labelKey: "site.nav.groupConvert",
                activePath: "/convert",
                dropdown: [
                    {
                        path: "/convert",
                        labelKey: "site.nav.convert"
                    },
                    {
                        path: "/humanize",
                        labelKey: "site.nav.humanize"
                    },
                    {
                        path: "/humanize-text",
                        labelKey: "site.nav.humanizeText"
                    }
                ]
            },
            {
                path: "/md-editor",
                labelKey: "site.nav.groupEdit",
                activePath: "/md-editor",
                dropdown: [
                    {
                        path: "/md-editor",
                        labelKey: "site.nav.mdEditor"
                    },
                    {
                        path: "/hwp-editor",
                        labelKey: "site.nav.hwpEditor"
                    },
                    {
                        path: "/viewer",
                        labelKey: "site.nav.viewer"
                    }
                ]
            },
            {
                path: "/generator",
                labelKey: "site.nav.groupCreate",
                activePath: "/generator",
                dropdown: [
                    {
                        path: "/generator",
                        labelKey: "site.nav.generator"
                    },
                    {
                        path: "/business-plan",
                        labelKey: "site.nav.businessPlan"
                    },
                    {
                        path: "/ai-writer",
                        labelKey: "site.nav.aiWriter"
                    }
                ]
            },
            {
                path: "/templates",
                labelKey: "site.nav.groupManage",
                activePath: "/templates",
                dropdown: [
                    {
                        path: "/templates",
                        labelKey: "site.nav.templates"
                    },
                    {
                        path: "/documents",
                        labelKey: "site.nav.documents"
                    }
                ]
            },
            {
                path: "/guide",
                labelKey: "site.nav.guide"
            },
            {
                path: "/pricing",
                labelKey: "site.nav.pricing"
            }
        ],
        footerLinks: [
            {
                path: "/convert",
                labelKey: "site.nav.convert"
            },
            {
                path: "/md-editor",
                labelKey: "site.nav.mdEditor"
            },
            {
                path: "/hwp-editor",
                labelKey: "site.nav.hwpEditor"
            },
            {
                path: "/ai-writer",
                labelKey: "site.nav.aiWriter"
            },
            {
                path: "/templates",
                labelKey: "site.nav.templates"
            },
            {
                path: "/pricing",
                labelKey: "site.nav.pricing"
            }
        ],
        familySites: [
            {
                name: "DreamIT Biz (본사이트)",
                url: "https://www.dreamitbiz.com"
            },
            {
                name: "EDU Hub",
                url: "https://edu-hub.dreamitbiz.com"
            },
            {
                name: "AI Hub",
                url: "https://ai-hub.dreamitbiz.com"
            }
        ]
    };
    jm = "https://hcmgdztsgjvzcyxyayaj.supabase.co";
    Nm = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw";
    AE = {
        documents: `${je.dbPrefix}documents`,
        templates: `${je.dbPrefix}templates`,
        conversions: `${je.dbPrefix}conversions`,
        businessPlans: `${je.dbPrefix}business_plans`
    };
    let oc = null;
    Jt = ()=>(!oc && jm && Nm && (oc = zS(jm, Nm, {
            auth: {
                flowType: "pkce",
                detectSessionInUrl: !0,
                autoRefreshToken: !0,
                persistSession: !0
            }
        })), oc);
    xE = async function() {
        const i = Jt();
        if (!i) throw new Error("Supabase not configured");
        const { data: n, error: r } = await i.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: window.location.origin + window.location.pathname
            }
        });
        if (r) throw r;
        return n;
    };
    RE = async function() {
        const i = Jt();
        if (!i) throw new Error("Supabase not configured");
        const { data: n, error: r } = await i.auth.signInWithOAuth({
            provider: "kakao",
            options: {
                redirectTo: window.location.origin + window.location.pathname,
                scopes: "profile_nickname profile_image account_email"
            }
        });
        if (r) throw r;
        return n;
    };
    OE = async function(i, n) {
        const r = Jt();
        if (!r) throw new Error("Supabase not configured");
        const { data: l, error: u } = await r.auth.signInWithPassword({
            email: i,
            password: n
        });
        if (u) throw u;
        return l;
    };
    CE = async function(i, n, r) {
        const l = Jt();
        if (!l) throw new Error("Supabase not configured");
        const { data: u, error: h } = await l.auth.signUp({
            email: i,
            password: n,
            options: {
                data: {
                    full_name: r,
                    signup_domain: window.location.hostname
                }
            }
        });
        if (h) throw h;
        return u;
    };
    async function Dm() {
        const i = Jt();
        if (!i) return;
        const { error: n } = await i.auth.signOut({
            scope: "local"
        });
        if (n) throw n;
    }
    async function MS(i) {
        const n = Jt();
        if (!n) return null;
        const { data: r, error: l } = await n.from("user_profiles").select("*").eq("id", i).single();
        return l ? (console.error("getProfile error:", l), null) : r;
    }
    kE = async function(i) {
        const n = Jt();
        if (!n) throw new Error("Supabase not configured");
        const { data: r, error: l } = await n.auth.resetPasswordForEmail(i, {
            redirectTo: window.location.origin + window.location.pathname
        });
        if (l) throw l;
        return r;
    };
    Tc = async function(i, n) {
        const r = Jt();
        if (!r) return null;
        const { data: l, error: u } = await r.from("user_profiles").update({
            ...n,
            updated_at: new Date().toISOString()
        }).eq("id", i).select().single();
        if (u) throw u;
        return l;
    };
    const HS = [
        "aebon@kakao.com",
        "radical8566@gmail.com",
        "aebon@kyonggi.ac.kr"
    ];
    function Um(i) {
        const n = i.replace(/\D/g, "").slice(0, 11);
        return n.length <= 3 ? n : n.length <= 7 ? `${n.slice(0, 3)}-${n.slice(3)}` : `${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7)}`;
    }
    const BS = ({ user: i, onComplete: n })=>{
        const r = i.user_metadata || {}, [l, u] = A.useState(r.full_name || r.name || ""), [h, f] = A.useState(""), [d, p] = A.useState(!1), [g, b] = A.useState(""), v = async (E)=>{
            E.preventDefault(), b("");
            const N = l.trim();
            if (!N) {
                b("이름을 입력해주세요.");
                return;
            }
            const D = h.replace(/\D/g, "");
            if (D && !/^01[0-9]\d{7,8}$/.test(D)) {
                b("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)");
                return;
            }
            p(!0);
            try {
                const k = {
                    name: N,
                    display_name: N
                };
                D && (k.phone = Um(D)), await Tc(i.id, k), await n();
            } catch (k) {
                b("저장에 실패했습니다. 다시 시도해주세요."), console.error("ProfileCompleteModal save error:", k);
            } finally{
                p(!1);
            }
        }, S = async ()=>{
            const E = l.trim();
            if (E) try {
                await Tc(i.id, {
                    name: E,
                    display_name: E
                });
            } catch  {}
            await n();
        };
        return w.jsx("div", {
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(4px)"
            },
            children: w.jsxs("form", {
                onSubmit: v,
                style: {
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "36px 32px 28px",
                    width: "100%",
                    maxWidth: "400px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    margin: "16px",
                    position: "relative"
                },
                onClick: (E)=>E.stopPropagation(),
                children: [
                    w.jsx("button", {
                        type: "button",
                        onClick: S,
                        style: {
                            position: "absolute",
                            top: "14px",
                            right: "14px",
                            background: "none",
                            border: "none",
                            color: "#9CA3AF",
                            cursor: "pointer",
                            fontSize: "20px",
                            lineHeight: 1,
                            padding: "4px 8px",
                            borderRadius: "6px"
                        },
                        title: "나중에 입력",
                        children: "✕"
                    }),
                    w.jsx("h2", {
                        style: {
                            margin: "0 0 6px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "프로필 정보 입력"
                    }),
                    w.jsxs("p", {
                        style: {
                            margin: "0 0 24px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.5
                        },
                        children: [
                            "원활한 수업 운영을 위해 아래 정보를 입력해주세요.",
                            w.jsx("br", {}),
                            w.jsx("span", {
                                style: {
                                    color: "#9CA3AF",
                                    fontSize: "12px"
                                },
                                children: "전화번호는 선택 사항입니다."
                            })
                        ]
                    }),
                    w.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "16px"
                        },
                        children: [
                            w.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "이름 ",
                                    w.jsx("span", {
                                        style: {
                                            color: "#dc2626"
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            w.jsx("input", {
                                type: "text",
                                value: l,
                                onChange: (E)=>u(E.target.value),
                                placeholder: "실명을 입력해주세요",
                                autoFocus: !0,
                                style: {
                                    width: "100%",
                                    padding: "10px 12px",
                                    fontSize: "15px",
                                    border: "1.5px solid #d1d5db",
                                    borderRadius: "8px",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    transition: "border-color 0.2s"
                                },
                                onFocus: (E)=>E.target.style.borderColor = "#2563eb",
                                onBlur: (E)=>E.target.style.borderColor = "#d1d5db"
                            })
                        ]
                    }),
                    w.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "20px"
                        },
                        children: [
                            w.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "전화번호 ",
                                    w.jsx("span", {
                                        style: {
                                            color: "#9CA3AF",
                                            fontWeight: 400
                                        },
                                        children: "(선택)"
                                    })
                                ]
                            }),
                            w.jsx("input", {
                                type: "tel",
                                value: h,
                                onChange: (E)=>f(Um(E.target.value)),
                                placeholder: "010-0000-0000",
                                style: {
                                    width: "100%",
                                    padding: "10px 12px",
                                    fontSize: "15px",
                                    border: "1.5px solid #d1d5db",
                                    borderRadius: "8px",
                                    outline: "none",
                                    boxSizing: "border-box",
                                    transition: "border-color 0.2s"
                                },
                                onFocus: (E)=>E.target.style.borderColor = "#2563eb",
                                onBlur: (E)=>E.target.style.borderColor = "#d1d5db"
                            })
                        ]
                    }),
                    g && w.jsx("p", {
                        style: {
                            margin: "0 0 14px",
                            fontSize: "13px",
                            color: "#dc2626",
                            fontWeight: 500
                        },
                        children: g
                    }),
                    w.jsx("button", {
                        type: "submit",
                        disabled: d,
                        style: {
                            width: "100%",
                            padding: "12px",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#fff",
                            background: d ? "#93c5fd" : "#2563eb",
                            border: "none",
                            borderRadius: "8px",
                            cursor: d ? "not-allowed" : "pointer",
                            transition: "background 0.2s",
                            marginBottom: "10px"
                        },
                        children: d ? "저장 중..." : "저장하고 시작하기"
                    }),
                    w.jsx("button", {
                        type: "button",
                        onClick: S,
                        disabled: d,
                        style: {
                            width: "100%",
                            padding: "10px",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#6B7280",
                            background: "none",
                            border: "1px solid #E5E7EB",
                            borderRadius: "8px",
                            cursor: d ? "not-allowed" : "pointer"
                        },
                        children: "나중에 입력하기"
                    })
                ]
            })
        });
    };
    async function qS() {
        const i = [
            "../utils/supabase",
            "../config/supabase"
        ];
        for (const n of i)try {
            const r = await import(n).then(async (m)=>{
                await m.__tla;
                return m;
            });
            if (typeof r.default == "function") return r.default();
            if (r.default) return r.default;
            if (r.supabase) return r.supabase;
            if (typeof r.getSupabase == "function") return r.getSupabase();
        } catch  {}
        return null;
    }
    const PS = [
        "aebon@kakao.com",
        "aebon@kyonggi.ac.kr",
        "radical8566@gmail.com"
    ], $S = 10080 * 60 * 1e3;
    function GS({ user: i, siteSlug: n, shopUrl: r = "https://biz-hub.dreamitbiz.com/shop" }) {
        const [l, u] = A.useState(!1);
        A.useEffect(()=>{
            const f = `nudge_dismissed_${n}`;
            if (sessionStorage.getItem(f)) return;
            const d = (i.email || "").toLowerCase();
            if (PS.includes(d)) return;
            const p = i.created_at ? new Date(i.created_at).getTime() : Date.now();
            if (Date.now() - p < $S) return;
            (async ()=>{
                try {
                    const b = await qS();
                    if (!b) return;
                    const { data: v, error: S } = await b.from("user_licenses").select("id, license_type, site_slug, expires_at").eq("user_id", i.id);
                    if (S) return;
                    if (v && v.length > 0) {
                        const E = new Date;
                        if (v.some((D)=>D.expires_at && new Date(D.expires_at) < E ? !1 : D.license_type === "bundle" || D.site_slug === n)) return;
                    }
                    u(!0);
                } catch  {}
            })();
        }, [
            i,
            n
        ]);
        const h = ()=>{
            sessionStorage.setItem(`nudge_dismissed_${n}`, "1"), u(!1);
        };
        return l ? w.jsx("div", {
            onClick: h,
            style: {
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(3px)"
            },
            children: w.jsxs("div", {
                onClick: (f)=>f.stopPropagation(),
                style: {
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "36px 32px 28px",
                    width: "100%",
                    maxWidth: "420px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                    margin: "16px",
                    position: "relative",
                    textAlign: "center"
                },
                children: [
                    w.jsx("button", {
                        onClick: h,
                        style: {
                            position: "absolute",
                            top: "14px",
                            right: "14px",
                            background: "none",
                            border: "none",
                            color: "#9CA3AF",
                            cursor: "pointer",
                            fontSize: "20px",
                            lineHeight: 1,
                            padding: "4px 8px",
                            borderRadius: "6px"
                        },
                        title: "닫기",
                        children: "✕"
                    }),
                    w.jsx("div", {
                        style: {
                            fontSize: "48px",
                            marginBottom: "12px"
                        },
                        children: "📚"
                    }),
                    w.jsx("h2", {
                        style: {
                            margin: "0 0 8px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "더 나은 학습 경험을 위해"
                    }),
                    w.jsxs("p", {
                        style: {
                            margin: "0 0 20px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.6
                        },
                        children: [
                            "이용권을 구매하시면 모든 콘텐츠를",
                            w.jsx("br", {}),
                            "제한 없이 평생 이용하실 수 있습니다."
                        ]
                    }),
                    w.jsxs("div", {
                        style: {
                            background: "#F0F7FF",
                            borderRadius: "12px",
                            padding: "16px",
                            marginBottom: "20px",
                            textAlign: "left"
                        },
                        children: [
                            w.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "8px"
                                },
                                children: [
                                    w.jsx("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: "개별 사이트 이용권"
                                    }),
                                    w.jsx("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#2563EB"
                                        },
                                        children: "30,000원"
                                    })
                                ]
                            }),
                            w.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [
                                    w.jsxs("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: [
                                            "전체 사이트 이용권",
                                            w.jsx("span", {
                                                style: {
                                                    background: "#DC2626",
                                                    color: "#fff",
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    padding: "2px 6px",
                                                    borderRadius: "4px",
                                                    marginLeft: "6px"
                                                },
                                                children: "~55% 할인"
                                            })
                                        ]
                                    }),
                                    w.jsx("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#DC2626"
                                        },
                                        children: "150,000원"
                                    })
                                ]
                            })
                        ]
                    }),
                    w.jsx("a", {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            display: "block",
                            width: "100%",
                            padding: "13px",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#fff",
                            background: "#2563EB",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            textDecoration: "none",
                            textAlign: "center",
                            marginBottom: "10px",
                            boxSizing: "border-box"
                        },
                        children: "이용권 보기"
                    }),
                    w.jsx("button", {
                        onClick: h,
                        style: {
                            width: "100%",
                            padding: "11px",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#6B7280",
                            background: "none",
                            border: "1px solid #E5E7EB",
                            borderRadius: "8px",
                            cursor: "pointer"
                        },
                        children: "다음에 할게요"
                    }),
                    w.jsx("p", {
                        style: {
                            margin: "14px 0 0",
                            fontSize: "12px",
                            color: "#9CA3AF"
                        },
                        children: "1회 결제로 평생 무제한 이용"
                    })
                ]
            })
        }) : null;
    }
    let Sg, IS, Tg;
    Sg = A.createContext(null);
    IS = ({ children: i })=>{
        const [n, r] = A.useState(null), [l, u] = A.useState(null), [h, f] = A.useState(!0), [d, p] = A.useState(null), g = A.useCallback(async (k)=>{
            if (!k) {
                u(null);
                return;
            }
            let B = await MS(k.id);
            if (!B) {
                const $ = Jt();
                if ($) {
                    const z = k.user_metadata || {}, V = window.location.hostname, { data: te } = await $.from("user_profiles").insert({
                        id: k.id,
                        email: k.email || "",
                        name: z.full_name || z.name || "",
                        display_name: z.full_name || z.name || "",
                        phone: "",
                        provider: k.app_metadata?.provider || "email",
                        signup_domain: V,
                        visited_sites: [
                            V
                        ],
                        role: "member"
                    }).select().single();
                    te && (B = te);
                }
            }
            if (B) {
                const $ = {}, z = window.location.hostname;
                B.signup_domain || ($.signup_domain = z), (!B.role || B.role === "user") && ($.role = "member");
                const V = Array.isArray(B.visited_sites) ? B.visited_sites : [];
                if (V.includes(z) || ($.visited_sites = [
                    ...V,
                    z
                ]), Object.keys($).length > 0) try {
                    const te = await Tc(k.id, $);
                    u(te);
                } catch  {
                    u(B);
                }
                else u(B);
            }
            try {
                const $ = Jt();
                if ($) {
                    const { data: z } = await $.rpc("check_user_status", {
                        target_user_id: k.id,
                        current_domain: window.location.hostname
                    });
                    if (z && z.status && z.status !== "active") {
                        p({
                            status: z.status,
                            reason: z.reason || "",
                            suspended_until: z.suspended_until || null
                        }), await Dm(), r(null), u(null);
                        return;
                    }
                }
            } catch  {}
        }, []);
        A.useEffect(()=>{
            const k = Jt();
            if (!k) {
                f(!1);
                return;
            }
            const { data: { subscription: B } } = k.auth.onAuthStateChange((z, V)=>{
                const te = V?.user ?? null;
                r(te), te ? (g(te), z === "SIGNED_IN" && k.from("user_profiles").update({
                    last_sign_in_at: new Date().toISOString()
                }).eq("id", te.id).then(()=>{})) : u(null), z === "INITIAL_SESSION" && f(!1);
            }), $ = setTimeout(()=>{
                f((z)=>(z && console.warn("Auth: INITIAL_SESSION timeout, forcing loading=false"), !1));
            }, 5e3);
            return ()=>{
                clearTimeout($), B.unsubscribe();
            };
        }, [
            g
        ]);
        const b = A.useCallback(async ()=>{
            await Dm(), r(null), u(null);
        }, []), v = A.useCallback(async ()=>{
            n && await g(n);
        }, [
            n,
            g
        ]), E = [
            n?.email,
            n?.user_metadata?.email,
            n?.identities?.[0]?.identity_data?.email,
            l?.email
        ].filter((k)=>!!k).map((k)=>k.toLowerCase()).some((k)=>HS.includes(k)), N = !!n, D = N && !!l && !l.name;
        return w.jsxs(Sg.Provider, {
            value: {
                user: n,
                profile: l,
                loading: h,
                isLoggedIn: N,
                isAdmin: E,
                signOut: b,
                refreshProfile: v,
                accountBlock: d,
                clearAccountBlock: ()=>p(null)
            },
            children: [
                i,
                D && n && w.jsx(BS, {
                    user: n,
                    onComplete: v
                }),
                N && n && !D && w.jsx(GS, {
                    user: n,
                    siteSlug: "hwp"
                })
            ]
        });
    };
    Eg = ()=>{
        const i = A.useContext(Sg);
        if (!i) throw new Error("useAuth must be used within AuthProvider");
        return i;
    };
    Tg = A.createContext(null);
    let VS = 0;
    function KS({ children: i }) {
        const [n, r] = A.useState([]), l = A.useRef({}), u = A.useCallback((f)=>{
            clearTimeout(l.current[f]), delete l.current[f], r((d)=>d.filter((p)=>p.id !== f));
        }, []), h = A.useCallback((f, d = "info", p = 4e3)=>{
            const g = ++VS;
            return r((b)=>[
                    ...b,
                    {
                        id: g,
                        message: f,
                        type: d
                    }
                ]), l.current[g] = setTimeout(()=>u(g), p), g;
        }, [
            u
        ]);
        return w.jsxs(Tg.Provider, {
            value: {
                showToast: h,
                removeToast: u
            },
            children: [
                i,
                w.jsx("div", {
                    className: "toast-container",
                    role: "status",
                    "aria-live": "polite",
                    children: n.map((f)=>w.jsxs("div", {
                            className: `toast-item toast-${f.type}`,
                            children: [
                                w.jsxs("span", {
                                    className: "toast-icon",
                                    children: [
                                        f.type === "success" && w.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                w.jsx("path", {
                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                }),
                                                w.jsx("polyline", {
                                                    points: "22 4 12 14.01 9 11.01"
                                                })
                                            ]
                                        }),
                                        f.type === "error" && w.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                w.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                w.jsx("line", {
                                                    x1: "15",
                                                    y1: "9",
                                                    x2: "9",
                                                    y2: "15"
                                                }),
                                                w.jsx("line", {
                                                    x1: "9",
                                                    y1: "9",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        f.type === "info" && w.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                w.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                w.jsx("line", {
                                                    x1: "12",
                                                    y1: "16",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                w.jsx("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12.01",
                                                    y2: "8"
                                                })
                                            ]
                                        }),
                                        f.type === "warning" && w.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                w.jsx("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                                }),
                                                w.jsx("line", {
                                                    x1: "12",
                                                    y1: "9",
                                                    x2: "12",
                                                    y2: "13"
                                                }),
                                                w.jsx("line", {
                                                    x1: "12",
                                                    y1: "17",
                                                    x2: "12.01",
                                                    y2: "17"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                w.jsx("span", {
                                    className: "toast-message",
                                    children: f.message
                                }),
                                w.jsx("button", {
                                    className: "toast-close",
                                    onClick: ()=>u(f.id),
                                    children: w.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        width: "14",
                                        height: "14",
                                        children: [
                                            w.jsx("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }),
                                            w.jsx("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }, f.id))
                })
            ]
        });
    }
    jE = function() {
        const i = A.useContext(Tg);
        return i || {
            showToast: (n)=>(console.warn("ToastProvider not found:", n), 0),
            removeToast: ()=>{}
        };
    };
    let YS, XS, zm, yi, WS, JS, QS, ZS, FS, eE, tE, nE, aE, iE, rE, sE, lE, oE, uE, cE, hE, fE, dE, pE, mE, gE, yE, vE, bE, wE;
    YS = "modulepreload";
    XS = function(i) {
        return "/" + i;
    };
    zm = {};
    Pe = function(n, r, l) {
        let u = Promise.resolve();
        if (r && r.length > 0) {
            let p = function(g) {
                return Promise.all(g.map((b)=>Promise.resolve(b).then((v)=>({
                            status: "fulfilled",
                            value: v
                        }), (v)=>({
                            status: "rejected",
                            reason: v
                        }))));
            };
            document.getElementsByTagName("link");
            const f = document.querySelector("meta[property=csp-nonce]"), d = f?.nonce || f?.getAttribute("nonce");
            u = p(r.map((g)=>{
                if (g = XS(g), g in zm) return;
                zm[g] = !0;
                const b = g.endsWith(".css"), v = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${v}`)) return;
                const S = document.createElement("link");
                if (S.rel = b ? "stylesheet" : YS, b || (S.as = "script"), S.crossOrigin = "", S.href = g, d && S.setAttribute("nonce", d), document.head.appendChild(S), b) return new Promise((E, N)=>{
                    S.addEventListener("load", E), S.addEventListener("error", ()=>N(new Error(`Unable to preload CSS for ${g}`)));
                });
            }));
        }
        function h(f) {
            const d = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (d.payload = f, window.dispatchEvent(d), !d.defaultPrevented) throw f;
        }
        return u.then((f)=>{
            for (const d of f || [])d.status === "rejected" && h(d.reason);
            return n().catch(h);
        });
    };
    yi = ({ children: i })=>{
        const { isLoggedIn: n, loading: r } = Eg(), l = Nt();
        return r ? w.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: w.jsx("div", {
                className: "loading-spinner"
            })
        }) : n ? w.jsx(w.Fragment, {
            children: i
        }) : w.jsx(eb, {
            to: "/login",
            state: {
                from: l
            },
            replace: !0
        });
    };
    WS = ()=>{
        const [i, n] = A.useState(!1), [r, l] = A.useState(!1), [u, h] = A.useState(null), [f, d] = A.useState(!1), [p, g] = A.useState(!1), [b, v] = A.useState(!1), S = A.useRef(null), E = Nt(), { mode: N, toggleTheme: D, colorTheme: k, setColorTheme: B } = Bb(), { language: $, toggleLanguage: z, t: V } = ng(), { isLoggedIn: te, isAdmin: ne, profile: K, signOut: Ne } = Eg();
        A.useEffect(()=>{
            const ie = ()=>n(window.scrollY > 50);
            return window.addEventListener("scroll", ie), ()=>window.removeEventListener("scroll", ie);
        }, []), A.useEffect(()=>{
            l(!1), h(null), g(!1);
        }, [
            E
        ]), A.useEffect(()=>{
            const ie = (be)=>{
                S.current && !S.current.contains(be.target) && g(!1);
            };
            return document.addEventListener("mousedown", ie), ()=>document.removeEventListener("mousedown", ie);
        }, []);
        const Se = async ()=>{
            await Ne(), g(!1);
        }, Dt = je.menuItems.map((ie)=>({
                ...ie,
                label: V(ie.labelKey),
                dropdown: ie.dropdown ? ie.dropdown.map((be)=>({
                        ...be,
                        label: V(be.labelKey)
                    })) : void 0
            })), ot = (ie)=>{
            if (ie.dropdown) return ie.dropdown.some((Re)=>E.pathname.startsWith(Re.path));
            const be = ie.activePath || ie.path;
            return be === "/" ? E.pathname === "/" : E.pathname.startsWith(be);
        }, Je = (K?.display_name || K?.email || "?")[0].toUpperCase();
        return w.jsxs("nav", {
            className: `navbar ${i ? "scrolled" : ""}`,
            children: [
                w.jsx("div", {
                    className: "container",
                    children: w.jsxs("div", {
                        className: "nav-wrapper",
                        children: [
                            w.jsx("div", {
                                className: "logo",
                                children: w.jsx(Rn, {
                                    to: "/",
                                    children: w.jsx("h1", {
                                        children: je.brand.parts.map((ie, be)=>w.jsx("span", {
                                                className: ie.className,
                                                children: ie.text
                                            }, be))
                                    })
                                })
                            }),
                            w.jsx("ul", {
                                className: `nav-menu ${r ? "active" : ""}`,
                                children: Dt.map((ie, be)=>w.jsx("li", {
                                        className: `${ie.dropdown ? "nav-item-dropdown" : ""} ${u === be ? "active" : ""}`,
                                        onMouseEnter: ()=>ie.dropdown && h(be),
                                        onMouseLeave: ()=>ie.dropdown && h(null),
                                        children: ie.dropdown ? w.jsxs(w.Fragment, {
                                            children: [
                                                w.jsxs(Rn, {
                                                    to: ie.path,
                                                    className: `nav-link has-dropdown ${ot(ie) ? "active" : ""}`,
                                                    onClick: (Re)=>{
                                                        window.innerWidth <= 1100 && (Re.preventDefault(), h(u === be ? null : be));
                                                    },
                                                    children: [
                                                        ie.label,
                                                        w.jsx("svg", {
                                                            className: "nav-dropdown-arrow",
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: w.jsx("path", {
                                                                d: "M3 5l3 3 3-3"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                w.jsx("ul", {
                                                    className: `dropdown-menu ${u === be ? "active" : ""}`,
                                                    children: ie.dropdown.map((Re, M)=>w.jsx("li", {
                                                            children: w.jsx(Rn, {
                                                                to: Re.path,
                                                                children: Re.label
                                                            })
                                                        }, M))
                                                })
                                            ]
                                        }) : w.jsx(Rn, {
                                            to: ie.path,
                                            className: `nav-link ${ot(ie) ? "active" : ""}`,
                                            children: ie.label
                                        })
                                    }, be))
                            }),
                            w.jsxs("div", {
                                className: "nav-actions",
                                children: [
                                    je.features.search,
                                    w.jsx("button", {
                                        className: "lang-switcher",
                                        onClick: z,
                                        "aria-label": $ === "ko" ? "Switch to English" : "한국어로 전환",
                                        children: $ === "ko" ? "EN" : "KR"
                                    }),
                                    w.jsxs("div", {
                                        className: "color-picker-wrapper",
                                        children: [
                                            w.jsx("button", {
                                                className: "color-picker-btn",
                                                onClick: ()=>d(!f),
                                                "aria-label": "Color theme",
                                                children: w.jsxs("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: [
                                                        w.jsx("circle", {
                                                            cx: "13.5",
                                                            cy: "6.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C8102E",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        w.jsx("circle", {
                                                            cx: "17.5",
                                                            cy: "10.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C87200",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        w.jsx("circle", {
                                                            cx: "8.5",
                                                            cy: "7.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#00855A",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        w.jsx("circle", {
                                                            cx: "6.5",
                                                            cy: "12",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#0046C8",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        w.jsx("path", {
                                                            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.24-.3-.39-.65-.39-1.04 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.5-9-10-9z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            f && w.jsxs(w.Fragment, {
                                                children: [
                                                    w.jsx("div", {
                                                        className: "color-picker-overlay",
                                                        onClick: ()=>d(!1)
                                                    }),
                                                    w.jsxs("div", {
                                                        className: "color-picker-tooltip",
                                                        children: [
                                                            w.jsx("div", {
                                                                className: "color-picker-arrow"
                                                            }),
                                                            je.colors.map((ie)=>w.jsx("button", {
                                                                    className: `color-dot${k === ie.name ? " active" : ""}`,
                                                                    style: {
                                                                        background: ie.color
                                                                    },
                                                                    onClick: ()=>{
                                                                        B(ie.name), d(!1);
                                                                    },
                                                                    "aria-label": `${ie.name} theme`
                                                                }, ie.name))
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    w.jsxs("button", {
                                        className: "theme-toggle",
                                        onClick: D,
                                        "aria-label": "테마 전환",
                                        "data-mode": N,
                                        children: [
                                            w.jsxs("svg", {
                                                className: "sun-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    w.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "5"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "18.36",
                                                        x2: "19.78",
                                                        y2: "19.78"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "21",
                                                        y1: "12",
                                                        x2: "23",
                                                        y2: "12"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "5.64",
                                                        x2: "19.78",
                                                        y2: "4.22"
                                                    })
                                                ]
                                            }),
                                            w.jsx("svg", {
                                                className: "moon-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: w.jsx("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                })
                                            }),
                                            w.jsxs("svg", {
                                                className: "auto-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    w.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "9"
                                                    }),
                                                    w.jsx("path", {
                                                        d: "M12 3a9 9 0 0 1 0 18",
                                                        fill: "currentColor",
                                                        opacity: "0.3"
                                                    }),
                                                    w.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    w.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    te ? w.jsxs("div", {
                                        className: "nav-user-menu",
                                        ref: S,
                                        children: [
                                            w.jsx("button", {
                                                className: "nav-user-btn",
                                                onClick: ()=>g(!p),
                                                children: w.jsx("span", {
                                                    className: "nav-user-avatar-placeholder",
                                                    children: Je
                                                })
                                            }),
                                            p && w.jsxs("div", {
                                                className: "nav-user-dropdown",
                                                children: [
                                                    w.jsxs("div", {
                                                        className: "dropdown-user-header",
                                                        children: [
                                                            w.jsx("span", {
                                                                className: "dropdown-user-avatar",
                                                                children: Je
                                                            }),
                                                            w.jsxs("div", {
                                                                className: "dropdown-user-info",
                                                                children: [
                                                                    w.jsx("span", {
                                                                        className: "dropdown-user-name",
                                                                        children: K?.display_name || ""
                                                                    }),
                                                                    w.jsx("span", {
                                                                        className: "dropdown-user-email",
                                                                        children: K?.email || ""
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    w.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    w.jsxs(Rn, {
                                                        to: "/mypage",
                                                        className: "dropdown-menu-item",
                                                        children: [
                                                            w.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    w.jsx("path", {
                                                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                                    }),
                                                                    w.jsx("circle", {
                                                                        cx: "12",
                                                                        cy: "7",
                                                                        r: "4"
                                                                    })
                                                                ]
                                                            }),
                                                            V("auth.myPage")
                                                        ]
                                                    }),
                                                    ne && w.jsxs("a", {
                                                        href: je.parentSite.url + "/admin",
                                                        className: "dropdown-menu-item",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            w.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    w.jsx("rect", {
                                                                        x: "3",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    w.jsx("rect", {
                                                                        x: "14",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    w.jsx("rect", {
                                                                        x: "3",
                                                                        y: "14",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    w.jsx("rect", {
                                                                        x: "14",
                                                                        y: "14",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    })
                                                                ]
                                                            }),
                                                            "관리자"
                                                        ]
                                                    }),
                                                    w.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    w.jsxs("button", {
                                                        onClick: Se,
                                                        className: "dropdown-menu-item logout",
                                                        children: [
                                                            w.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    w.jsx("path", {
                                                                        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                                                    }),
                                                                    w.jsx("polyline", {
                                                                        points: "16 17 21 12 16 7"
                                                                    }),
                                                                    w.jsx("line", {
                                                                        x1: "21",
                                                                        y1: "12",
                                                                        x2: "9",
                                                                        y2: "12"
                                                                    })
                                                                ]
                                                            }),
                                                            "Logout"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : w.jsx(Rn, {
                                        to: "/login",
                                        className: "nav-login-btn",
                                        children: "Login"
                                    }),
                                    w.jsxs("button", {
                                        className: `mobile-toggle ${r ? "active" : ""}`,
                                        onClick: ()=>l(!r),
                                        "aria-label": "메뉴 토글",
                                        children: [
                                            w.jsx("span", {}),
                                            w.jsx("span", {}),
                                            w.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                je.features.search
            ]
        });
    };
    JS = ()=>{
        const { t: i } = ng();
        return w.jsx("footer", {
            className: "footer",
            children: w.jsxs("div", {
                className: "container",
                children: [
                    w.jsxs("div", {
                        className: "footer-content",
                        children: [
                            w.jsxs("div", {
                                className: "footer-brand",
                                children: [
                                    w.jsx("h3", {
                                        children: je.brand.parts.map((n, r)=>w.jsx("span", {
                                                className: n.className,
                                                children: n.text
                                            }, r))
                                    }),
                                    w.jsx("p", {
                                        children: i("footer.tagline")
                                    }),
                                    w.jsxs("div", {
                                        className: "company-info",
                                        children: [
                                            w.jsx("p", {
                                                children: w.jsx("strong", {
                                                    children: je.company.name
                                                })
                                            }),
                                            w.jsxs("p", {
                                                children: [
                                                    "대표이사: ",
                                                    je.company.ceo
                                                ]
                                            }),
                                            w.jsxs("p", {
                                                children: [
                                                    "사업자등록번호: ",
                                                    je.company.bizNumber
                                                ]
                                            }),
                                            w.jsxs("p", {
                                                children: [
                                                    "통신판매신고번호: ",
                                                    je.company.salesNumber
                                                ]
                                            }),
                                            je.company.publisherNumber && w.jsxs("p", {
                                                children: [
                                                    "출판사 신고번호: ",
                                                    je.company.publisherNumber
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            w.jsxs("div", {
                                className: "footer-links",
                                children: [
                                    w.jsx("h4", {
                                        children: i("footer.quickLinks")
                                    }),
                                    w.jsx("ul", {
                                        children: je.footerLinks.map((n, r)=>w.jsx("li", {
                                                children: w.jsx(Rn, {
                                                    to: n.path,
                                                    children: i(n.labelKey)
                                                })
                                            }, r))
                                    })
                                ]
                            }),
                            w.jsxs("div", {
                                className: "footer-contact",
                                children: [
                                    w.jsx("h4", {
                                        children: i("footer.contact")
                                    }),
                                    w.jsx("p", {
                                        children: je.company.address
                                    }),
                                    w.jsx("p", {
                                        children: je.company.email
                                    }),
                                    w.jsx("p", {
                                        children: je.company.phone
                                    }),
                                    w.jsxs("p", {
                                        children: [
                                            "카카오톡: ",
                                            je.company.kakao
                                        ]
                                    }),
                                    w.jsx("p", {
                                        className: "business-hours",
                                        children: je.company.businessHours
                                    }),
                                    w.jsx("div", {
                                        className: "footer-family",
                                        children: w.jsxs("select", {
                                            defaultValue: "",
                                            onChange: (n)=>{
                                                n.target.value && window.open(n.target.value, "_blank"), n.target.value = "";
                                            },
                                            children: [
                                                w.jsx("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    children: "Family Site"
                                                }),
                                                w.jsxs("option", {
                                                    value: je.parentSite.url,
                                                    children: [
                                                        je.parentSite.name,
                                                        " (본사이트)"
                                                    ]
                                                }),
                                                je.familySites.map((n, r)=>w.jsx("option", {
                                                        value: n.url,
                                                        children: n.name
                                                    }, r))
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    w.jsx("div", {
                        className: "footer-bottom",
                        children: w.jsxs("p", {
                            children: [
                                "© 2020-",
                                new Date().getFullYear(),
                                " DreamIT Biz. All rights reserved."
                            ]
                        })
                    })
                ]
            })
        });
    };
    QS = A.lazy(()=>Pe(()=>import("./Home-Dkz5U_LI.js"), __vite__mapDeps([0,1,2])));
    ZS = A.lazy(()=>Pe(()=>import("./Convert-CmqkWvIY.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([3,1,4,5])));
    FS = A.lazy(()=>Pe(()=>import("./Editor-BtG4lRbY.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([6,1,4,7])));
    eE = A.lazy(()=>Pe(()=>import("./Templates-C2TASKBo.js"), __vite__mapDeps([8,1,9])));
    tE = A.lazy(()=>Pe(()=>import("./TemplateCreate-Dm_jOx8-.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([10,1,4,9])));
    nE = A.lazy(()=>Pe(()=>import("./TemplateDetail-Zb0U8nT3.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([11,1,4,9])));
    aE = A.lazy(()=>Pe(()=>import("./Documents-B86gwuTx.js"), __vite__mapDeps([12,1,13])));
    iE = A.lazy(()=>Pe(()=>import("./DocumentDetail-D6YUWjd3.js"), __vite__mapDeps([14,1,4,7])));
    rE = A.lazy(()=>Pe(()=>import("./BusinessPlan-Cp-O3Ae3.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([15,1,16])));
    sE = A.lazy(()=>Pe(()=>import("./HwpEditor-BraqvtKr.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([17,18,1,19])));
    lE = A.lazy(()=>Pe(()=>import("./Viewer-DkF8p2I7.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([20,1,18,21])));
    oE = A.lazy(()=>Pe(()=>import("./Generator-DLKGPWeA.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([22,1,23])));
    uE = A.lazy(()=>Pe(()=>import("./AiWriter-DlDtEGCv.js"), __vite__mapDeps([24,1,25])));
    cE = A.lazy(()=>Pe(()=>import("./Humanize-BluwunKn.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([26,1,4,27])));
    hE = A.lazy(()=>Pe(()=>import("./HumanizeText-3g4DM3xM.js"), __vite__mapDeps([28,1,29])));
    fE = A.lazy(()=>Pe(()=>import("./Guide-CJtMLZOg.js"), __vite__mapDeps([30,1])));
    dE = A.lazy(()=>Pe(()=>import("./Pricing-Cvl8gBEX.js"), __vite__mapDeps([31,1,2])));
    pE = A.lazy(()=>Pe(()=>import("./NotFound-C96W19tM.js"), __vite__mapDeps([32,1])));
    mE = A.lazy(()=>Pe(()=>import("./Login-DFpt1M0c.js"), __vite__mapDeps([33,1,34])));
    gE = A.lazy(()=>Pe(()=>import("./Register-o_weFx9f.js"), __vite__mapDeps([35,1,34])));
    yE = A.lazy(()=>Pe(()=>import("./ForgotPassword-dZjQPQ8-.js"), __vite__mapDeps([36,1,34])));
    vE = A.lazy(()=>Pe(()=>import("./MyPage-p2rofCPh.js"), __vite__mapDeps([37,1,34])));
    bE = ()=>w.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: w.jsx("div", {
                className: "loading-spinner"
            })
        });
    wE = ()=>w.jsxs(w.Fragment, {
            children: [
                w.jsx(WS, {}),
                w.jsx("main", {
                    children: w.jsx(A.Suspense, {
                        fallback: w.jsx(bE, {}),
                        children: w.jsxs(Jm, {
                            children: [
                                w.jsx(Le, {
                                    path: "/",
                                    element: w.jsx(QS, {})
                                }),
                                w.jsx(Le, {
                                    path: "/convert",
                                    element: w.jsx(ZS, {})
                                }),
                                w.jsx(Le, {
                                    path: "/md-editor",
                                    element: w.jsx(FS, {})
                                }),
                                w.jsx(Le, {
                                    path: "/hwp-editor",
                                    element: w.jsx(sE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/templates",
                                    element: w.jsx(yi, {
                                        children: w.jsx(eE, {})
                                    })
                                }),
                                w.jsx(Le, {
                                    path: "/templates/new",
                                    element: w.jsx(yi, {
                                        children: w.jsx(tE, {})
                                    })
                                }),
                                w.jsx(Le, {
                                    path: "/templates/:id",
                                    element: w.jsx(yi, {
                                        children: w.jsx(nE, {})
                                    })
                                }),
                                w.jsx(Le, {
                                    path: "/business-plan",
                                    element: w.jsx(rE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/viewer",
                                    element: w.jsx(lE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/generator",
                                    element: w.jsx(oE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/ai-writer",
                                    element: w.jsx(uE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/humanize",
                                    element: w.jsx(cE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/humanize-text",
                                    element: w.jsx(hE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/guide",
                                    element: w.jsx(fE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/pricing",
                                    element: w.jsx(dE, {})
                                }),
                                w.jsx(Le, {
                                    path: "/documents",
                                    element: w.jsx(yi, {
                                        children: w.jsx(aE, {})
                                    })
                                }),
                                w.jsx(Le, {
                                    path: "/documents/:id",
                                    element: w.jsx(yi, {
                                        children: w.jsx(iE, {})
                                    })
                                }),
                                w.jsxs(w.Fragment, {
                                    children: [
                                        w.jsx(Le, {
                                            path: "/login",
                                            element: w.jsx(mE, {})
                                        }),
                                        w.jsx(Le, {
                                            path: "/register",
                                            element: w.jsx(gE, {})
                                        }),
                                        w.jsx(Le, {
                                            path: "/forgot-password",
                                            element: w.jsx(yE, {})
                                        }),
                                        w.jsx(Le, {
                                            path: "/mypage",
                                            element: w.jsx(yi, {
                                                children: w.jsx(vE, {})
                                            })
                                        })
                                    ]
                                }),
                                w.jsx(Le, {
                                    path: "*",
                                    element: w.jsx(pE, {})
                                })
                            ]
                        })
                    })
                }),
                w.jsx(JS, {})
            ]
        });
    function _E() {
        return w.jsx(Hb, {
            children: w.jsx(Pb, {
                children: w.jsx(IS, {
                    children: w.jsx(KS, {
                        children: w.jsx(xb, {
                            children: w.jsx("div", {
                                className: "App",
                                children: w.jsx(Jm, {
                                    children: w.jsx(Le, {
                                        path: "*",
                                        element: w.jsx(wE, {})
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
    i0.createRoot(document.getElementById("root")).render(w.jsx(A.StrictMode, {
        children: w.jsx(_E, {})
    }));
})();
export { Rn as L, SE as R, AE as T, Pe as _, Nt as a, Eg as b, jE as c, Oc as d, TE as e, EE as f, Jt as g, RE as h, OE as i, w as j, CE as k, kE as l, Tc as m, je as n, Xv as o, A as r, xE as s, ng as u, __tla };
