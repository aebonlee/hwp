const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CXjsdQFt.js","assets/SEOHead-xLAmYFSj.js","assets/Convert-BzzsriOS.js","assets/fileUtils-1h3TEy09.js","assets/Convert-DYDy6mLq.css","assets/Editor-B57kssIs.js","assets/editor-B2FMxC-J.css","assets/Templates-Dil3PBBy.js","assets/templates-B0Lp2Vr7.css","assets/TemplateCreate-D5huuuJ0.js","assets/TemplateDetail-CSJX1reX.js","assets/Documents-BdVVzk6Y.js","assets/Documents-7jKc5y4S.css","assets/DocumentDetail-5oC7qF1N.js","assets/BusinessPlan-rLyh2NNP.js","assets/BusinessPlan-D5W1kh0e.css","assets/HwpEditor-D9Cp1Ywi.js","assets/useRhwp-CC-fPIaq.js","assets/Viewer-Bx1vea56.js","assets/Viewer-BeyzE84f.css","assets/Generator-sJ8unXoT.js","assets/Generator-B3i-1g61.css","assets/Guide-U8nMn2zQ.js","assets/NotFound-ClIkqUac.js","assets/Login-IaHvSxU_.js","assets/auth-DKHmQrFs.css","assets/Register-D0Q83x7T.js","assets/ForgotPassword-lnP-41rS.js","assets/MyPage-tDtD4SXj.js"])))=>i.map(i=>d[i]);
let Rn, gE, Fe, Gt, Sg, SE, Km, mE, vE, Jt, bE, _E, _, wE, Ec, De, x, yE, tg;
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
    var Xu = {
        exports: {}
    }, wr = {};
    var Mp;
    function Iv() {
        if (Mp) return wr;
        Mp = 1;
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
        return wr.Fragment = n, wr.jsx = r, wr.jsxs = r, wr;
    }
    var Hp;
    function Xv() {
        return Hp || (Hp = 1, Xu.exports = Iv()), Xu.exports;
    }
    let Ju, re;
    _ = Xv();
    Ju = {
        exports: {}
    };
    re = {};
    var Bp;
    function Jv() {
        if (Bp) return re;
        Bp = 1;
        var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), S = Symbol.iterator;
        function E(A) {
            return A === null || typeof A != "object" ? null : (A = S && A[S] || A["@@iterator"], typeof A == "function" ? A : null);
        }
        var N = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, U = Object.assign, k = {};
        function B(A, $, V) {
            this.props = A, this.context = $, this.refs = k, this.updater = V || N;
        }
        B.prototype.isReactComponent = {}, B.prototype.setState = function(A, $) {
            if (typeof A != "object" && typeof A != "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, A, $, "setState");
        }, B.prototype.forceUpdate = function(A) {
            this.updater.enqueueForceUpdate(this, A, "forceUpdate");
        };
        function P() {}
        P.prototype = B.prototype;
        function z(A, $, V) {
            this.props = A, this.context = $, this.refs = k, this.updater = V || N;
        }
        var K = z.prototype = new P;
        K.constructor = z, U(K, B.prototype), K.isPureReactComponent = !0;
        var te = Array.isArray;
        function ne() {}
        var Y = {
            H: null,
            A: null,
            T: null,
            S: null
        }, ke = Object.prototype.hasOwnProperty;
        function Se(A, $, V) {
            var J = V.ref;
            return {
                $$typeof: i,
                type: A,
                key: $,
                ref: J !== void 0 ? J : null,
                props: V
            };
        }
        function Nt(A, $) {
            return Se(A.type, $, A.props);
        }
        function ot(A) {
            return typeof A == "object" && A !== null && A.$$typeof === i;
        }
        function Je(A) {
            var $ = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + A.replace(/[=:]/g, function(V) {
                return $[V];
            });
        }
        var ie = /\/+/g;
        function be(A, $) {
            return typeof A == "object" && A !== null && A.key != null ? Je("" + A.key) : $.toString(36);
        }
        function je(A) {
            switch(A.status){
                case "fulfilled":
                    return A.value;
                case "rejected":
                    throw A.reason;
                default:
                    switch(typeof A.status == "string" ? A.then(ne, ne) : (A.status = "pending", A.then(function($) {
                        A.status === "pending" && (A.status = "fulfilled", A.value = $);
                    }, function($) {
                        A.status === "pending" && (A.status = "rejected", A.reason = $);
                    })), A.status){
                        case "fulfilled":
                            return A.value;
                        case "rejected":
                            throw A.reason;
                    }
            }
            throw A;
        }
        function M(A, $, V, J, se) {
            var ue = typeof A;
            (ue === "undefined" || ue === "boolean") && (A = null);
            var ve = !1;
            if (A === null) ve = !0;
            else switch(ue){
                case "bigint":
                case "string":
                case "number":
                    ve = !0;
                    break;
                case "object":
                    switch(A.$$typeof){
                        case i:
                        case n:
                            ve = !0;
                            break;
                        case b:
                            return ve = A._init, M(ve(A._payload), $, V, J, se);
                    }
            }
            if (ve) return se = se(A), ve = J === "" ? "." + be(A, 0) : J, te(se) ? (V = "", ve != null && (V = ve.replace(ie, "$&/") + "/"), M(se, $, V, "", function(Oi) {
                return Oi;
            })) : se != null && (ot(se) && (se = Nt(se, V + (se.key == null || A && A.key === se.key ? "" : ("" + se.key).replace(ie, "$&/") + "/") + ve)), $.push(se)), 1;
            ve = 0;
            var ut = J === "" ? "." : J + ":";
            if (te(A)) for(var qe = 0; qe < A.length; qe++)J = A[qe], ue = ut + be(J, qe), ve += M(J, $, V, ue, se);
            else if (qe = E(A), typeof qe == "function") for(A = qe.call(A), qe = 0; !(J = A.next()).done;)J = J.value, ue = ut + be(J, qe++), ve += M(J, $, V, ue, se);
            else if (ue === "object") {
                if (typeof A.then == "function") return M(je(A), $, V, J, se);
                throw $ = String(A), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ve;
        }
        function G(A, $, V) {
            if (A == null) return A;
            var J = [], se = 0;
            return M(A, J, "", "", function(ue) {
                return $.call(V, ue, se++);
            }), J;
        }
        function ae(A) {
            if (A._status === -1) {
                var $ = A._result;
                $ = $(), $.then(function(V) {
                    (A._status === 0 || A._status === -1) && (A._status = 1, A._result = V);
                }, function(V) {
                    (A._status === 0 || A._status === -1) && (A._status = 2, A._result = V);
                }), A._status === -1 && (A._status = 0, A._result = $);
            }
            if (A._status === 1) return A._result.default;
            throw A._result;
        }
        var Ee = typeof reportError == "function" ? reportError : function(A) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var $ = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                    error: A
                });
                if (!window.dispatchEvent($)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", A);
                return;
            }
            console.error(A);
        }, Re = {
            map: G,
            forEach: function(A, $, V) {
                G(A, function() {
                    $.apply(this, arguments);
                }, V);
            },
            count: function(A) {
                var $ = 0;
                return G(A, function() {
                    $++;
                }), $;
            },
            toArray: function(A) {
                return G(A, function($) {
                    return $;
                }) || [];
            },
            only: function(A) {
                if (!ot(A)) throw Error("React.Children.only expected to receive a single React element child.");
                return A;
            }
        };
        return re.Activity = v, re.Children = Re, re.Component = B, re.Fragment = r, re.Profiler = u, re.PureComponent = z, re.StrictMode = l, re.Suspense = p, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(A) {
                return Y.H.useMemoCache(A);
            }
        }, re.cache = function(A) {
            return function() {
                return A.apply(null, arguments);
            };
        }, re.cacheSignal = function() {
            return null;
        }, re.cloneElement = function(A, $, V) {
            if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
            var J = U({}, A.props), se = A.key;
            if ($ != null) for(ue in $.key !== void 0 && (se = "" + $.key), $)!ke.call($, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && $.ref === void 0 || (J[ue] = $[ue]);
            var ue = arguments.length - 2;
            if (ue === 1) J.children = V;
            else if (1 < ue) {
                for(var ve = Array(ue), ut = 0; ut < ue; ut++)ve[ut] = arguments[ut + 2];
                J.children = ve;
            }
            return Se(A.type, se, J);
        }, re.createContext = function(A) {
            return A = {
                $$typeof: f,
                _currentValue: A,
                _currentValue2: A,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, A.Provider = A, A.Consumer = {
                $$typeof: h,
                _context: A
            }, A;
        }, re.createElement = function(A, $, V) {
            var J, se = {}, ue = null;
            if ($ != null) for(J in $.key !== void 0 && (ue = "" + $.key), $)ke.call($, J) && J !== "key" && J !== "__self" && J !== "__source" && (se[J] = $[J]);
            var ve = arguments.length - 2;
            if (ve === 1) se.children = V;
            else if (1 < ve) {
                for(var ut = Array(ve), qe = 0; qe < ve; qe++)ut[qe] = arguments[qe + 2];
                se.children = ut;
            }
            if (A && A.defaultProps) for(J in ve = A.defaultProps, ve)se[J] === void 0 && (se[J] = ve[J]);
            return Se(A, ue, se);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(A) {
            return {
                $$typeof: d,
                render: A
            };
        }, re.isValidElement = ot, re.lazy = function(A) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: A
                },
                _init: ae
            };
        }, re.memo = function(A, $) {
            return {
                $$typeof: g,
                type: A,
                compare: $ === void 0 ? null : $
            };
        }, re.startTransition = function(A) {
            var $ = Y.T, V = {};
            Y.T = V;
            try {
                var J = A(), se = Y.S;
                se !== null && se(V, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ne, Ee);
            } catch (ue) {
                Ee(ue);
            } finally{
                $ !== null && V.types !== null && ($.types = V.types), Y.T = $;
            }
        }, re.unstable_useCacheRefresh = function() {
            return Y.H.useCacheRefresh();
        }, re.use = function(A) {
            return Y.H.use(A);
        }, re.useActionState = function(A, $, V) {
            return Y.H.useActionState(A, $, V);
        }, re.useCallback = function(A, $) {
            return Y.H.useCallback(A, $);
        }, re.useContext = function(A) {
            return Y.H.useContext(A);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(A, $) {
            return Y.H.useDeferredValue(A, $);
        }, re.useEffect = function(A, $) {
            return Y.H.useEffect(A, $);
        }, re.useEffectEvent = function(A) {
            return Y.H.useEffectEvent(A);
        }, re.useId = function() {
            return Y.H.useId();
        }, re.useImperativeHandle = function(A, $, V) {
            return Y.H.useImperativeHandle(A, $, V);
        }, re.useInsertionEffect = function(A, $) {
            return Y.H.useInsertionEffect(A, $);
        }, re.useLayoutEffect = function(A, $) {
            return Y.H.useLayoutEffect(A, $);
        }, re.useMemo = function(A, $) {
            return Y.H.useMemo(A, $);
        }, re.useOptimistic = function(A, $) {
            return Y.H.useOptimistic(A, $);
        }, re.useReducer = function(A, $, V) {
            return Y.H.useReducer(A, $, V);
        }, re.useRef = function(A) {
            return Y.H.useRef(A);
        }, re.useState = function(A) {
            return Y.H.useState(A);
        }, re.useSyncExternalStore = function(A, $, V) {
            return Y.H.useSyncExternalStore(A, $, V);
        }, re.useTransition = function() {
            return Y.H.useTransition();
        }, re.version = "19.2.5", re;
    }
    var qp;
    function Tc() {
        return qp || (qp = 1, Ju.exports = Jv()), Ju.exports;
    }
    let Wu, Sr, Qu, Zu;
    x = Tc();
    Wu = {
        exports: {}
    };
    Sr = {};
    Qu = {
        exports: {}
    };
    Zu = {};
    var $p;
    function Wv() {
        return $p || ($p = 1, (function(i) {
            function n(M, G) {
                var ae = M.length;
                M.push(G);
                e: for(; 0 < ae;){
                    var Ee = ae - 1 >>> 1, Re = M[Ee];
                    if (0 < u(Re, G)) M[Ee] = G, M[ae] = Re, ae = Ee;
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
                    e: for(var Ee = 0, Re = M.length, A = Re >>> 1; Ee < A;){
                        var $ = 2 * (Ee + 1) - 1, V = M[$], J = $ + 1, se = M[J];
                        if (0 > u(V, ae)) J < Re && 0 > u(se, V) ? (M[Ee] = se, M[J] = ae, Ee = J) : (M[Ee] = V, M[$] = ae, Ee = $);
                        else if (J < Re && 0 > u(se, ae)) M[Ee] = se, M[J] = ae, Ee = J;
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
            var p = [], g = [], b = 1, v = null, S = 3, E = !1, N = !1, U = !1, k = !1, B = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
            function K(M) {
                for(var G = r(g); G !== null;){
                    if (G.callback === null) l(g);
                    else if (G.startTime <= M) l(g), G.sortIndex = G.expirationTime, n(p, G);
                    else break;
                    G = r(g);
                }
            }
            function te(M) {
                if (U = !1, K(M), !N) if (r(p) !== null) N = !0, ne || (ne = !0, Je());
                else {
                    var G = r(g);
                    G !== null && je(te, G.startTime - M);
                }
            }
            var ne = !1, Y = -1, ke = 5, Se = -1;
            function Nt() {
                return k ? !0 : !(i.unstable_now() - Se < ke);
            }
            function ot() {
                if (k = !1, ne) {
                    var M = i.unstable_now();
                    Se = M;
                    var G = !0;
                    try {
                        e: {
                            N = !1, U && (U = !1, P(Y), Y = -1), E = !0;
                            var ae = S;
                            try {
                                t: {
                                    for(K(M), v = r(p); v !== null && !(v.expirationTime > M && Nt());){
                                        var Ee = v.callback;
                                        if (typeof Ee == "function") {
                                            v.callback = null, S = v.priorityLevel;
                                            var Re = Ee(v.expirationTime <= M);
                                            if (M = i.unstable_now(), typeof Re == "function") {
                                                v.callback = Re, K(M), G = !0;
                                                break t;
                                            }
                                            v === r(p) && l(p), K(M);
                                        } else l(p);
                                        v = r(p);
                                    }
                                    if (v !== null) G = !0;
                                    else {
                                        var A = r(g);
                                        A !== null && je(te, A.startTime - M), G = !1;
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
            function je(M, G) {
                Y = B(function() {
                    M(i.unstable_now());
                }, G);
            }
            i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(M) {
                M.callback = null;
            }, i.unstable_forceFrameRate = function(M) {
                0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ke = 0 < M ? Math.floor(1e3 / M) : 5;
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
                        var Re = -1;
                        break;
                    case 2:
                        Re = 250;
                        break;
                    case 5:
                        Re = 1073741823;
                        break;
                    case 4:
                        Re = 1e4;
                        break;
                    default:
                        Re = 5e3;
                }
                return Re = ae + Re, M = {
                    id: b++,
                    callback: G,
                    priorityLevel: M,
                    startTime: ae,
                    expirationTime: Re,
                    sortIndex: -1
                }, ae > Ee ? (M.sortIndex = ae, n(g, M), r(p) === null && M === r(g) && (U ? (P(Y), Y = -1) : U = !0, je(te, ae - Ee))) : (M.sortIndex = Re, n(p, M), N || E || (N = !0, ne || (ne = !0, Je()))), M;
            }, i.unstable_shouldYield = Nt, i.unstable_wrapCallback = function(M) {
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
    var Pp;
    function Qv() {
        return Pp || (Pp = 1, Qu.exports = Wv()), Qu.exports;
    }
    var Fu = {
        exports: {}
    }, lt = {};
    var Gp;
    function Zv() {
        if (Gp) return lt;
        Gp = 1;
        var i = Tc();
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
    var Vp;
    function Fv() {
        if (Vp) return Fu.exports;
        Vp = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), Fu.exports = Zv(), Fu.exports;
    }
    var Kp;
    function e0() {
        if (Kp) return Sr;
        Kp = 1;
        var i = Qv(), n = Tc(), r = Fv();
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
        var v = Object.assign, S = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), z = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Se = Symbol.for("react.activity"), Nt = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
        function Je(e) {
            return e === null || typeof e != "object" ? null : (e = ot && e[ot] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var ie = Symbol.for("react.client.reference");
        function be(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === ie ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case U:
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
                case P:
                    return (e._context.displayName || "Context") + ".Consumer";
                case K:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Y:
                    return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
                case ke:
                    t = e._payload, e = e._init;
                    try {
                        return be(e(t));
                    } catch  {}
            }
            return null;
        }
        var je = Array.isArray, M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Ee = [], Re = -1;
        function A(e) {
            return {
                current: e
            };
        }
        function $(e) {
            0 > Re || (e.current = Ee[Re], Ee[Re] = null, Re--);
        }
        function V(e, t) {
            Re++, Ee[Re] = e.current, e.current = t;
        }
        var J = A(null), se = A(null), ue = A(null), ve = A(null);
        function ut(e, t) {
            switch(V(ue, t), V(se, e), V(J, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? sp(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = sp(t), e = lp(t, e);
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
            $(J), V(J, e);
        }
        function qe() {
            $(J), $(se), $(ue);
        }
        function Oi(e) {
            e.memoizedState !== null && V(ve, e);
            var t = J.current, a = lp(t, e.type);
            t !== a && (V(se, e), V(J, a));
        }
        function $r(e) {
            se.current === e && ($(J), $(se)), ve.current === e && ($(ve), yr._currentValue = ae);
        }
        var Cl, zc;
        function aa(e) {
            if (Cl === void 0) try {
                throw Error();
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Cl = t && t[1] || "", zc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Cl + e + zc;
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
                                    } catch (D) {
                                        var j = D;
                                    }
                                    Reflect.construct(e, [], q);
                                } else {
                                    try {
                                        q.call();
                                    } catch (D) {
                                        j = D;
                                    }
                                    e.call(q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (D) {
                                    j = D;
                                }
                                (q = e()) && typeof q.catch == "function" && q.catch(function() {});
                            }
                        } catch (D) {
                            if (D && j && typeof D.stack == "string") return [
                                D.stack,
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
                    var w = m.split(`
`), C = y.split(`
`);
                    for(o = s = 0; s < w.length && !w[s].includes("DetermineComponentFrameRoot");)s++;
                    for(; o < C.length && !C[o].includes("DetermineComponentFrameRoot");)o++;
                    if (s === w.length || o === C.length) for(s = w.length - 1, o = C.length - 1; 1 <= s && 0 <= o && w[s] !== C[o];)o--;
                    for(; 1 <= s && 0 <= o; s--, o--)if (w[s] !== C[o]) {
                        if (s !== 1 || o !== 1) do if (s--, o--, 0 > o || w[s] !== C[o]) {
                            var L = `
` + w[s].replace(" at new ", " at ");
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
        function Tg(e, t) {
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
        function Lc(e) {
            try {
                var t = "", a = null;
                do t += Tg(e, a), a = e, e = e.return;
                while (e);
                return t;
            } catch (s) {
                return `
Error generating stack: ` + s.message + `
` + s.stack;
            }
        }
        var Nl = Object.prototype.hasOwnProperty, Ul = i.unstable_scheduleCallback, Dl = i.unstable_cancelCallback, Ag = i.unstable_shouldYield, xg = i.unstable_requestPaint, bt = i.unstable_now, Rg = i.unstable_getCurrentPriorityLevel, Mc = i.unstable_ImmediatePriority, Hc = i.unstable_UserBlockingPriority, Pr = i.unstable_NormalPriority, Og = i.unstable_LowPriority, Bc = i.unstable_IdlePriority, Cg = i.log, kg = i.unstable_setDisableYieldValue, Ci = null, _t = null;
        function kn(e) {
            if (typeof Cg == "function" && kg(e), _t && typeof _t.setStrictMode == "function") try {
                _t.setStrictMode(Ci, e);
            } catch  {}
        }
        var wt = Math.clz32 ? Math.clz32 : Ug, jg = Math.log, Ng = Math.LN2;
        function Ug(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (jg(e) / Ng | 0) | 0;
        }
        var Gr = 256, Vr = 262144, Kr = 4194304;
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
        function Yr(e, t, a) {
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
        function Dg(e, t) {
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
        function qc() {
            var e = Kr;
            return Kr <<= 1, (Kr & 62914560) === 0 && (Kr = 4194304), e;
        }
        function zl(e) {
            for(var t = [], a = 0; 31 > a; a++)t.push(e);
            return t;
        }
        function ji(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function zg(e, t, a, s, o, c) {
            var m = e.pendingLanes;
            e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
            var y = e.entanglements, w = e.expirationTimes, C = e.hiddenUpdates;
            for(a = m & ~a; 0 < a;){
                var L = 31 - wt(a), q = 1 << L;
                y[L] = 0, w[L] = -1;
                var j = C[L];
                if (j !== null) for(C[L] = null, L = 0; L < j.length; L++){
                    var D = j[L];
                    D !== null && (D.lane &= -536870913);
                }
                a &= ~q;
            }
            s !== 0 && $c(e, s, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t));
        }
        function $c(e, t, a) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var s = 31 - wt(t);
            e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930;
        }
        function Pc(e, t) {
            var a = e.entangledLanes |= t;
            for(e = e.entanglements; a;){
                var s = 31 - wt(a), o = 1 << s;
                o & t | e[s] & t && (e[s] |= t), a &= ~o;
            }
        }
        function Gc(e, t) {
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
        function Vc() {
            var e = G.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kp(e.type));
        }
        function Kc(e, t) {
            var a = G.p;
            try {
                return G.p = e, t();
            } finally{
                G.p = a;
            }
        }
        var jn = Math.random().toString(36).slice(2), et = "__reactFiber$" + jn, ht = "__reactProps$" + jn, Ra = "__reactContainer$" + jn, Hl = "__reactEvents$" + jn, Lg = "__reactListeners$" + jn, Mg = "__reactHandles$" + jn, Yc = "__reactResources$" + jn, Ni = "__reactMarker$" + jn;
        function Bl(e) {
            delete e[et], delete e[ht], delete e[Hl], delete e[Lg], delete e[Mg];
        }
        function Oa(e) {
            var t = e[et];
            if (t) return t;
            for(var a = e.parentNode; a;){
                if (t = a[Ra] || a[et]) {
                    if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for(e = pp(e); e !== null;){
                        if (a = e[et]) return a;
                        e = pp(e);
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
        function Ui(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(l(33));
        }
        function ka(e) {
            var t = e[Yc];
            return t || (t = e[Yc] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[Ni] = !0;
        }
        var Ic = new Set, Xc = {};
        function ra(e, t) {
            ja(e, t), ja(e + "Capture", t);
        }
        function ja(e, t) {
            for(Xc[e] = t, e = 0; e < t.length; e++)Ic.add(t[e]);
        }
        var Hg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Jc = {}, Wc = {};
        function Bg(e) {
            return Nl.call(Wc, e) ? !0 : Nl.call(Jc, e) ? !1 : Hg.test(e) ? Wc[e] = !0 : (Jc[e] = !0, !1);
        }
        function Ir(e, t, a) {
            if (Bg(t)) if (a === null) e.removeAttribute(t);
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
        function Qc(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function qg(e, t, a) {
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
                var t = Qc(e) ? "checked" : "value";
                e._valueTracker = qg(e, t, "" + e[t]);
            }
        }
        function Zc(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var a = t.getValue(), s = "";
            return e && (s = Qc(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
        }
        function Jr(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var $g = /[\n"\\]/g;
        function Dt(e) {
            return e.replace($g, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function $l(e, t, a, s, o, c, m, y) {
            e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? Pl(e, m, Ut(t)) : a != null ? Pl(e, m, Ut(a)) : s != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Ut(y) : e.removeAttribute("name");
        }
        function Fc(e, t, a, s, o, c, m, y) {
            if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || a != null) {
                if (!(c !== "submit" && c !== "reset" || t != null)) {
                    ql(e);
                    return;
                }
                a = a != null ? "" + Ut(a) : "", t = t != null ? "" + Ut(t) : a, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            s = s ?? o, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = y ? e.checked : !!s, e.defaultChecked = !!s, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), ql(e);
        }
        function Pl(e, t, a) {
            t === "number" && Jr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
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
        function eh(e, t, a) {
            if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), a == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = a != null ? "" + Ut(a) : "";
        }
        function th(e, t, a, s) {
            if (t == null) {
                if (s != null) {
                    if (a != null) throw Error(l(92));
                    if (je(s)) {
                        if (1 < s.length) throw Error(l(93));
                        s = s[0];
                    }
                    a = s;
                }
                a == null && (a = ""), t = a;
            }
            a = Ut(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s), ql(e);
        }
        function Ua(e, t) {
            if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === 3) {
                    a.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Pg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function nh(e, t, a) {
            var s = t.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Pg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
        }
        function ah(e, t, a) {
            if (t != null && typeof t != "object") throw Error(l(62));
            if (e = e.style, a != null) {
                for(var s in a)!a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
                for(var o in t)s = t[o], t.hasOwnProperty(o) && a[o] !== s && nh(e, o, s);
            } else for(var c in t)t.hasOwnProperty(c) && nh(e, c, t[c]);
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
        var Gg = new Map([
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
        function Wr(e) {
            return Vg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function on() {}
        var Vl = null;
        function Kl(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Da = null, za = null;
        function ih(e) {
            var t = Ca(e);
            if (t && (e = t.stateNode)) {
                var a = e[ht] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if ($l(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                            for(a = e; a.parentNode;)a = a.parentNode;
                            for(a = a.querySelectorAll('input[name="' + Dt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++){
                                var s = a[t];
                                if (s !== e && s.form === e.form) {
                                    var o = s[ht] || null;
                                    if (!o) throw Error(l(90));
                                    $l(s, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                                }
                            }
                            for(t = 0; t < a.length; t++)s = a[t], s.form === e.form && Zc(s);
                        }
                        break e;
                    case "textarea":
                        eh(e, a.value, a.defaultValue);
                        break e;
                    case "select":
                        t = a.value, t != null && Na(e, !!a.multiple, t, !1);
                }
            }
        }
        var Yl = !1;
        function rh(e, t, a) {
            if (Yl) return e(t, a);
            Yl = !0;
            try {
                var s = e(t);
                return s;
            } finally{
                if (Yl = !1, (Da !== null || za !== null) && (Ms(), Da && (t = Da, e = za, za = Da = null, ih(t), e))) for(t = 0; t < e.length; t++)ih(e[t]);
            }
        }
        function Di(e, t) {
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
        var un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Il = !1;
        if (un) try {
            var zi = {};
            Object.defineProperty(zi, "passive", {
                get: function() {
                    Il = !0;
                }
            }), window.addEventListener("test", zi, zi), window.removeEventListener("test", zi, zi);
        } catch  {
            Il = !1;
        }
        var Nn = null, Xl = null, Qr = null;
        function sh() {
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
        function lh() {
            return !1;
        }
        function ft(e) {
            function t(a, s, o, c, m) {
                this._reactName = a, this._targetInst = o, this.type = s, this.nativeEvent = c, this.target = m, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (a = e[y], this[y] = a ? a(c) : c[y]);
                return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Fr : lh, this.isPropagationStopped = lh, this;
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
        }), Kg = ft(Li), Jl, Wl, Mi, ts = v({}, Li, {
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
                return "movementX" in e ? e.movementX : (e !== Mi && (Mi && e.type === "mousemove" ? (Jl = e.screenX - Mi.screenX, Wl = e.screenY - Mi.screenY) : Wl = Jl = 0, Mi = e), Jl);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Wl;
            }
        }), oh = ft(ts), Yg = v({}, ts, {
            dataTransfer: 0
        }), Ig = ft(Yg), Xg = v({}, Li, {
            relatedTarget: 0
        }), Ql = ft(Xg), Jg = v({}, sa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Wg = ft(Jg), Qg = v({}, sa, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Zg = ft(Qg), Fg = v({}, sa, {
            data: 0
        }), uh = ft(Fg), ey = {
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
        }, ty = {
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
        }, ny = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function ay(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = ny[e]) ? !!t[e] : !1;
        }
        function Zl() {
            return ay;
        }
        var iy = v({}, Li, {
            key: function(e) {
                if (e.key) {
                    var t = ey[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ty[e.keyCode] || "Unidentified" : "";
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
        }), ry = ft(iy), sy = v({}, ts, {
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
        }), ch = ft(sy), ly = v({}, Li, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Zl
        }), oy = ft(ly), uy = v({}, sa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), cy = ft(uy), hy = v({}, ts, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), fy = ft(hy), dy = v({}, sa, {
            newState: 0,
            oldState: 0
        }), py = ft(dy), my = [
            9,
            13,
            27,
            32
        ], Fl = un && "CompositionEvent" in window, Hi = null;
        un && "documentMode" in document && (Hi = document.documentMode);
        var gy = un && "TextEvent" in window && !Hi, hh = un && (!Fl || Hi && 8 < Hi && 11 >= Hi), fh = " ", dh = !1;
        function ph(e, t) {
            switch(e){
                case "keyup":
                    return my.indexOf(t.keyCode) !== -1;
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
        function mh(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var La = !1;
        function yy(e, t) {
            switch(e){
                case "compositionend":
                    return mh(t);
                case "keypress":
                    return t.which !== 32 ? null : (dh = !0, fh);
                case "textInput":
                    return e = t.data, e === fh && dh ? null : e;
                default:
                    return null;
            }
        }
        function vy(e, t) {
            if (La) return e === "compositionend" || !Fl && ph(e, t) ? (e = sh(), Qr = Xl = Nn = null, La = !1, e) : null;
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
                    return hh && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var by = {
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
        function gh(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!by[e.type] : t === "textarea";
        }
        function yh(e, t, a, s) {
            Da ? za ? za.push(s) : za = [
                s
            ] : Da = s, t = Vs(t, "onChange"), 0 < t.length && (a = new es("onChange", "change", null, a, s), e.push({
                event: a,
                listeners: t
            }));
        }
        var Bi = null, qi = null;
        function _y(e) {
            ep(e, 0);
        }
        function ns(e) {
            var t = Ui(e);
            if (Zc(t)) return e;
        }
        function vh(e, t) {
            if (e === "change") return t;
        }
        var bh = !1;
        if (un) {
            var eo;
            if (un) {
                var to = "oninput" in document;
                if (!to) {
                    var _h = document.createElement("div");
                    _h.setAttribute("oninput", "return;"), to = typeof _h.oninput == "function";
                }
                eo = to;
            } else eo = !1;
            bh = eo && (!document.documentMode || 9 < document.documentMode);
        }
        function wh() {
            Bi && (Bi.detachEvent("onpropertychange", Sh), qi = Bi = null);
        }
        function Sh(e) {
            if (e.propertyName === "value" && ns(qi)) {
                var t = [];
                yh(t, qi, e, Kl(e)), rh(_y, t);
            }
        }
        function wy(e, t, a) {
            e === "focusin" ? (wh(), Bi = t, qi = a, Bi.attachEvent("onpropertychange", Sh)) : e === "focusout" && wh();
        }
        function Sy(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return ns(qi);
        }
        function Ey(e, t) {
            if (e === "click") return ns(t);
        }
        function Ty(e, t) {
            if (e === "input" || e === "change") return ns(t);
        }
        function Ay(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var St = typeof Object.is == "function" ? Object.is : Ay;
        function $i(e, t) {
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
        function Eh(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Th(e, t) {
            var a = Eh(e);
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
                a = Eh(a);
            }
        }
        function Ah(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ah(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function xh(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = Jr(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var a = typeof t.contentWindow.location.href == "string";
                } catch  {
                    a = !1;
                }
                if (a) e = t.contentWindow;
                else break;
                t = Jr(e.document);
            }
            return t;
        }
        function no(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var xy = un && "documentMode" in document && 11 >= document.documentMode, Ma = null, ao = null, Pi = null, io = !1;
        function Rh(e, t, a) {
            var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            io || Ma == null || Ma !== Jr(s) || (s = Ma, "selectionStart" in s && no(s) ? s = {
                start: s.selectionStart,
                end: s.selectionEnd
            } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
                anchorNode: s.anchorNode,
                anchorOffset: s.anchorOffset,
                focusNode: s.focusNode,
                focusOffset: s.focusOffset
            }), Pi && $i(Pi, s) || (Pi = s, s = Vs(ao, "onSelect"), 0 < s.length && (t = new es("onSelect", "select", null, t, a), e.push({
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
        }, ro = {}, Oh = {};
        un && (Oh = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
        function oa(e) {
            if (ro[e]) return ro[e];
            if (!Ha[e]) return e;
            var t = Ha[e], a;
            for(a in t)if (t.hasOwnProperty(a) && a in Oh) return ro[e] = t[a];
            return e;
        }
        var Ch = oa("animationend"), kh = oa("animationiteration"), jh = oa("animationstart"), Ry = oa("transitionrun"), Oy = oa("transitionstart"), Cy = oa("transitioncancel"), Nh = oa("transitionend"), Uh = new Map, so = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        so.push("scrollEnd");
        function Vt(e, t) {
            Uh.set(e, t), ra(t, [
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
        }, zt = [], Ba = 0, lo = 0;
        function is() {
            for(var e = Ba, t = lo = Ba = 0; t < e;){
                var a = zt[t];
                zt[t++] = null;
                var s = zt[t];
                zt[t++] = null;
                var o = zt[t];
                zt[t++] = null;
                var c = zt[t];
                if (zt[t++] = null, s !== null && o !== null) {
                    var m = s.pending;
                    m === null ? o.next = o : (o.next = m.next, m.next = o), s.pending = o;
                }
                c !== 0 && Dh(a, o, c);
            }
        }
        function rs(e, t, a, s) {
            zt[Ba++] = e, zt[Ba++] = t, zt[Ba++] = a, zt[Ba++] = s, lo |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
        }
        function oo(e, t, a, s) {
            return rs(e, t, a, s), ss(e);
        }
        function ua(e, t) {
            return rs(e, null, null, t), ss(e);
        }
        function Dh(e, t, a) {
            e.lanes |= a;
            var s = e.alternate;
            s !== null && (s.lanes |= a);
            for(var o = !1, c = e.return; c !== null;)c.childLanes |= a, s = c.alternate, s !== null && (s.childLanes |= a), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
            return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - wt(a), e = c.hiddenUpdates, s = e[o], s === null ? e[o] = [
                t
            ] : s.push(t), t.lane = a | 536870912), c) : null;
        }
        function ss(e) {
            if (50 < cr) throw cr = 0, vu = null, Error(l(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var qa = {};
        function ky(e, t, a, s) {
            this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Et(e, t, a, s) {
            return new ky(e, t, a, s);
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
        function zh(e, t) {
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
            else if (typeof e == "string") m = zv(e, a, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case Se:
                    return e = Et(31, a, t, o), e.elementType = Se, e.lanes = c, e;
                case U:
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
                        case P:
                            m = 9;
                            break e;
                        case K:
                            m = 11;
                            break e;
                        case Y:
                            m = 14;
                            break e;
                        case ke:
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
        function Lh(e) {
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
        var Mh = new WeakMap;
        function Lt(e, t) {
            if (typeof e == "object" && e !== null) {
                var a = Mh.get(e);
                return a !== void 0 ? a : (t = {
                    value: e,
                    source: t,
                    stack: Lc(t)
                }, Mh.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Lc(t)
            };
        }
        var $a = [], Pa = 0, os = null, Gi = 0, Mt = [], Ht = 0, Un = null, Zt = 1, Ft = "";
        function hn(e, t) {
            $a[Pa++] = Gi, $a[Pa++] = os, os = e, Gi = t;
        }
        function Hh(e, t, a) {
            Mt[Ht++] = Zt, Mt[Ht++] = Ft, Mt[Ht++] = Un, Un = e;
            var s = Zt;
            e = Ft;
            var o = 32 - wt(s) - 1;
            s &= ~(1 << o), a += 1;
            var c = 32 - wt(t) + o;
            if (30 < c) {
                var m = o - o % 5;
                c = (s & (1 << m) - 1).toString(32), s >>= m, o -= m, Zt = 1 << 32 - wt(t) + o | a << o | s, Ft = c + e;
            } else Zt = 1 << c | a << o | s, Ft = e;
        }
        function fo(e) {
            e.return !== null && (hn(e, 1), Hh(e, 1, 0));
        }
        function po(e) {
            for(; e === os;)os = $a[--Pa], $a[Pa] = null, Gi = $a[--Pa], $a[Pa] = null;
            for(; e === Un;)Un = Mt[--Ht], Mt[Ht] = null, Ft = Mt[--Ht], Mt[Ht] = null, Zt = Mt[--Ht], Mt[Ht] = null;
        }
        function Bh(e, t) {
            Mt[Ht++] = Zt, Mt[Ht++] = Ft, Mt[Ht++] = Un, Zt = t.id, Ft = t.overflow, Un = e;
        }
        var tt = null, Ne = null, pe = !1, Dn = null, Bt = !1, mo = Error(l(519));
        function zn(e) {
            var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw Vi(Lt(t, e)), mo;
        }
        function qh(e) {
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
                    he("invalid", t), Fc(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                    break;
                case "select":
                    he("invalid", t);
                    break;
                case "textarea":
                    he("invalid", t), th(t, s.value, s.defaultValue, s.children);
            }
            a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || ip(t.textContent, a) ? (s.popover != null && (he("beforetoggle", t), he("toggle", t)), s.onScroll != null && he("scroll", t), s.onScrollEnd != null && he("scrollend", t), s.onClick != null && (t.onclick = on), t = !0) : t = !1, t || zn(e, !0);
        }
        function $h(e) {
            for(tt = e.return; tt;)switch(tt.tag){
                case 5:
                case 31:
                case 13:
                    Bt = !1;
                    return;
                case 27:
                case 3:
                    Bt = !0;
                    return;
                default:
                    tt = tt.return;
            }
        }
        function Ga(e) {
            if (e !== tt) return !1;
            if (!pe) return $h(e), pe = !0, !1;
            var t = e.tag, a;
            if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Uu(e.type, e.memoizedProps)), a = !a), a && Ne && zn(e), $h(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                Ne = dp(e);
            } else if (t === 31) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                Ne = dp(e);
            } else t === 27 ? (t = Ne, Jn(e.type) ? (e = Hu, Hu = null, Ne = e) : Ne = t) : Ne = tt ? $t(e.stateNode.nextSibling) : null;
            return !0;
        }
        function ha() {
            Ne = tt = null, pe = !1;
        }
        function go() {
            var e = Dn;
            return e !== null && (gt === null ? gt = e : gt.push.apply(gt, e), Dn = null), e;
        }
        function Vi(e) {
            Dn === null ? Dn = [
                e
            ] : Dn.push(e);
        }
        var yo = A(null), fa = null, fn = null;
        function Ln(e, t, a) {
            V(yo, t._currentValue), t._currentValue = a;
        }
        function dn(e) {
            e._currentValue = yo.current, $(yo);
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
                        for(var w = 0; w < t.length; w++)if (y.context === t[w]) {
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
        function Va(e, t, a, s) {
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
            return Ph(fa, e);
        }
        function cs(e, t) {
            return fa === null && da(e), Ph(e, t);
        }
        function Ph(e, t) {
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
        var jy = typeof AbortController < "u" ? AbortController : function() {
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
        }, Ny = i.unstable_scheduleCallback, Uy = i.unstable_NormalPriority, Ge = {
            $$typeof: z,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function _o() {
            return {
                controller: new jy,
                data: new Map,
                refCount: 0
            };
        }
        function Ki(e) {
            e.refCount--, e.refCount === 0 && Ny(Uy, function() {
                e.controller.abort();
            });
        }
        var Yi = null, wo = 0, Ka = 0, Ya = null;
        function Dy(e, t) {
            if (Yi === null) {
                var a = Yi = [];
                wo = 0, Ka = Tu(), Ya = {
                    status: "pending",
                    value: void 0,
                    then: function(s) {
                        a.push(s);
                    }
                };
            }
            return wo++, t.then(Gh, Gh), t;
        }
        function Gh() {
            if (--wo === 0 && Yi !== null) {
                Ya !== null && (Ya.status = "fulfilled");
                var e = Yi;
                Yi = null, Ka = 0, Ya = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function zy(e, t) {
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
        var Vh = M.S;
        M.S = function(e, t) {
            Od = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && Dy(e, t), Vh !== null && Vh(e, t);
        };
        var pa = A(null);
        function So() {
            var e = pa.current;
            return e !== null ? e : Oe.pooledCache;
        }
        function hs(e, t) {
            t === null ? V(pa, pa.current) : V(pa, t.pool);
        }
        function Kh() {
            var e = So();
            return e === null ? null : {
                parent: Ge._currentValue,
                pool: e
            };
        }
        var Ia = Error(l(460)), Eo = Error(l(474)), fs = Error(l(542)), ds = {
            then: function() {}
        };
        function Yh(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Ih(e, t, a) {
            switch(a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(on, on), t = a), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Jh(e), e;
                default:
                    if (typeof t.status == "string") t.then(on, on);
                    else {
                        if (e = Oe, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
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
                            throw e = t.reason, Jh(e), e;
                    }
                    throw ga = t, Ia;
            }
        }
        function ma(e) {
            try {
                var t = e._init;
                return t(e._payload);
            } catch (a) {
                throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ga = a, Ia) : a;
            }
        }
        var ga = null;
        function Xh() {
            if (ga === null) throw Error(l(459));
            var e = ga;
            return ga = null, e;
        }
        function Jh(e) {
            if (e === Ia || e === fs) throw Error(l(483));
        }
        var Xa = null, Ii = 0;
        function ps(e) {
            var t = Ii;
            return Ii += 1, Xa === null && (Xa = []), Ih(Xa, e, t);
        }
        function Xi(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function ms(e, t) {
            throw t.$$typeof === S ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Wh(e) {
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
            function w(R, T, O, H) {
                var Q = O.type;
                return Q === U ? L(R, T, O.props.children, H, O.key) : T !== null && (T.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ke && ma(Q) === T.type) ? (T = o(T, O.props), Xi(T, O), T.return = R, T) : (T = ls(O.type, O.key, O.props, null, R.mode, H), Xi(T, O), T.return = R, T);
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
                        case ke:
                            return T = ma(T), q(R, T, O);
                    }
                    if (je(T) || Je(T)) return T = ca(T, R.mode, O, null), T.return = R, T;
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
                            return O.key === Q ? w(R, T, O, H) : null;
                        case N:
                            return O.key === Q ? C(R, T, O, H) : null;
                        case ke:
                            return O = ma(O), j(R, T, O, H);
                    }
                    if (je(O) || Je(O)) return Q !== null ? null : L(R, T, O, H, null);
                    if (typeof O.then == "function") return j(R, T, ps(O), H);
                    if (O.$$typeof === z) return j(R, T, cs(R, O), H);
                    ms(R, O);
                }
                return null;
            }
            function D(R, T, O, H, Q) {
                if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return R = R.get(O) || null, y(T, R, "" + H, Q);
                if (typeof H == "object" && H !== null) {
                    switch(H.$$typeof){
                        case E:
                            return R = R.get(H.key === null ? O : H.key) || null, w(T, R, H, Q);
                        case N:
                            return R = R.get(H.key === null ? O : H.key) || null, C(T, R, H, Q);
                        case ke:
                            return H = ma(H), D(R, T, O, H, Q);
                    }
                    if (je(H) || Je(H)) return R = R.get(O) || null, L(T, R, H, Q, null);
                    if (typeof H.then == "function") return D(R, T, O, ps(H), Q);
                    if (H.$$typeof === z) return D(R, T, O, cs(T, H), Q);
                    ms(T, H);
                }
                return null;
            }
            function I(R, T, O, H) {
                for(var Q = null, me = null, W = T, oe = T = 0, de = null; W !== null && oe < O.length; oe++){
                    W.index > oe ? (de = W, W = null) : de = W.sibling;
                    var ge = j(R, W, O[oe], H);
                    if (ge === null) {
                        W === null && (W = de);
                        break;
                    }
                    e && W && ge.alternate === null && t(R, W), T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge, W = de;
                }
                if (oe === O.length) return a(R, W), pe && hn(R, oe), Q;
                if (W === null) {
                    for(; oe < O.length; oe++)W = q(R, O[oe], H), W !== null && (T = c(W, T, oe), me === null ? Q = W : me.sibling = W, me = W);
                    return pe && hn(R, oe), Q;
                }
                for(W = s(W); oe < O.length; oe++)de = D(W, R, oe, O[oe], H), de !== null && (e && de.alternate !== null && W.delete(de.key === null ? oe : de.key), T = c(de, T, oe), me === null ? Q = de : me.sibling = de, me = de);
                return e && W.forEach(function(ea) {
                    return t(R, ea);
                }), pe && hn(R, oe), Q;
            }
            function ee(R, T, O, H) {
                if (O == null) throw Error(l(151));
                for(var Q = null, me = null, W = T, oe = T = 0, de = null, ge = O.next(); W !== null && !ge.done; oe++, ge = O.next()){
                    W.index > oe ? (de = W, W = null) : de = W.sibling;
                    var ea = j(R, W, ge.value, H);
                    if (ea === null) {
                        W === null && (W = de);
                        break;
                    }
                    e && W && ea.alternate === null && t(R, W), T = c(ea, T, oe), me === null ? Q = ea : me.sibling = ea, me = ea, W = de;
                }
                if (ge.done) return a(R, W), pe && hn(R, oe), Q;
                if (W === null) {
                    for(; !ge.done; oe++, ge = O.next())ge = q(R, ge.value, H), ge !== null && (T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge);
                    return pe && hn(R, oe), Q;
                }
                for(W = s(W); !ge.done; oe++, ge = O.next())ge = D(W, R, oe, ge.value, H), ge !== null && (e && ge.alternate !== null && W.delete(ge.key === null ? oe : ge.key), T = c(ge, T, oe), me === null ? Q = ge : me.sibling = ge, me = ge);
                return e && W.forEach(function(Yv) {
                    return t(R, Yv);
                }), pe && hn(R, oe), Q;
            }
            function xe(R, T, O, H) {
                if (typeof O == "object" && O !== null && O.type === U && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case E:
                            e: {
                                for(var Q = O.key; T !== null;){
                                    if (T.key === Q) {
                                        if (Q = O.type, Q === U) {
                                            if (T.tag === 7) {
                                                a(R, T.sibling), H = o(T, O.props.children), H.return = R, R = H;
                                                break e;
                                            }
                                        } else if (T.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ke && ma(Q) === T.type) {
                                            a(R, T.sibling), H = o(T, O.props), Xi(H, O), H.return = R, R = H;
                                            break e;
                                        }
                                        a(R, T);
                                        break;
                                    } else t(R, T);
                                    T = T.sibling;
                                }
                                O.type === U ? (H = ca(O.props.children, R.mode, H, O.key), H.return = R, R = H) : (H = ls(O.type, O.key, O.props, null, R.mode, H), Xi(H, O), H.return = R, R = H);
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
                        case ke:
                            return O = ma(O), xe(R, T, O, H);
                    }
                    if (je(O)) return I(R, T, O, H);
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
                    Ii = 0;
                    var Q = xe(R, T, O, H);
                    return Xa = null, Q;
                } catch (W) {
                    if (W === Ia || W === fs) throw W;
                    var me = Et(29, W, null, R.mode);
                    return me.lanes = H, me.return = R, me;
                }
            };
        }
        var ya = Wh(!0), Qh = Wh(!1), Mn = !1;
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
                return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, t = ss(e), Dh(e, null, a), t;
            }
            return rs(e, s, t, a), ss(e);
        }
        function Ji(e, t, a) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, Pc(e, a);
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
        function Wi() {
            if (Ro) {
                var e = Ya;
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
                var w = y, C = w.next;
                w.next = null, m === null ? c = C : m.next = C, m = w;
                var L = e.alternate;
                L !== null && (L = L.updateQueue, y = L.lastBaseUpdate, y !== m && (y === null ? L.firstBaseUpdate = C : y.next = C, L.lastBaseUpdate = w));
            }
            if (c !== null) {
                var q = o.baseState;
                m = 0, L = C = w = null, y = c;
                do {
                    var j = y.lane & -536870913, D = j !== y.lane;
                    if (D ? (fe & j) === j : (s & j) === j) {
                        j !== 0 && j === Ka && (Ro = !0), L !== null && (L = L.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var I = e, ee = y;
                            j = t;
                            var xe = a;
                            switch(ee.tag){
                                case 1:
                                    if (I = ee.payload, typeof I == "function") {
                                        q = I.call(xe, q, j);
                                        break e;
                                    }
                                    q = I;
                                    break e;
                                case 3:
                                    I.flags = I.flags & -65537 | 128;
                                case 0:
                                    if (I = ee.payload, j = typeof I == "function" ? I.call(xe, q, j) : I, j == null) break e;
                                    q = v({}, q, j);
                                    break e;
                                case 2:
                                    Mn = !0;
                            }
                        }
                        j = y.callback, j !== null && (e.flags |= 64, D && (e.flags |= 8192), D = o.callbacks, D === null ? o.callbacks = [
                            j
                        ] : D.push(j));
                    } else D = {
                        lane: j,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, L === null ? (C = L = D, w = q) : L = L.next = D, m |= j;
                    if (y = y.next, y === null) {
                        if (y = o.shared.pending, y === null) break;
                        D = y, y = D.next, D.next = null, o.lastBaseUpdate = D, o.shared.pending = null;
                    }
                }while (!0);
                L === null && (w = q), o.baseState = w, o.firstBaseUpdate = C, o.lastBaseUpdate = L, c === null && (o.shared.lanes = 0), Vn |= m, e.lanes = m, e.memoizedState = q;
            }
        }
        function Zh(e, t) {
            if (typeof e != "function") throw Error(l(191, e));
            e.call(t);
        }
        function Fh(e, t) {
            var a = e.callbacks;
            if (a !== null) for(e.callbacks = null, e = 0; e < a.length; e++)Zh(a[e], t);
        }
        var Ja = A(null), gs = A(0);
        function ef(e, t) {
            e = Sn, V(gs, e), V(Ja, t), Sn = e | t.baseLanes;
        }
        function Oo() {
            V(gs, Sn), V(Ja, Ja.current);
        }
        function Co() {
            Sn = gs.current, $(Ja), $(gs);
        }
        var Tt = A(null), qt = null;
        function qn(e) {
            var t = e.alternate;
            V($e, $e.current & 1), V(Tt, e), qt === null && (t === null || Ja.current !== null || t.memoizedState !== null) && (qt = e);
        }
        function ko(e) {
            V($e, $e.current), V(Tt, e), qt === null && (qt = e);
        }
        function tf(e) {
            e.tag === 22 ? (V($e, $e.current), V(Tt, e), qt === null && (qt = e)) : $n();
        }
        function $n() {
            V($e, $e.current), V(Tt, Tt.current);
        }
        function At(e) {
            $(Tt), qt === e && (qt = null), $($e);
        }
        var $e = A(0);
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
        var pn = 0, le = null, Te = null, Ve = null, vs = !1, Wa = !1, va = !1, bs = 0, Zi = 0, Qa = null, Ly = 0;
        function Me() {
            throw Error(l(321));
        }
        function jo(e, t) {
            if (t === null) return !1;
            for(var a = 0; a < t.length && a < e.length; a++)if (!St(e[a], t[a])) return !1;
            return !0;
        }
        function No(e, t, a, s, o, c) {
            return pn = c, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Bf : Io, va = !1, c = a(s, o), va = !1, Wa && (c = af(t, a, s, o)), nf(e), c;
        }
        function nf(e) {
            M.H = tr;
            var t = Te !== null && Te.next !== null;
            if (pn = 0, Ve = Te = le = null, vs = !1, Zi = 0, Qa = null, t) throw Error(l(300));
            e === null || Ke || (e = e.dependencies, e !== null && us(e) && (Ke = !0));
        }
        function af(e, t, a, s) {
            le = e;
            var o = 0;
            do {
                if (Wa && (Qa = null), Zi = 0, Wa = !1, 25 <= o) throw Error(l(301));
                if (o += 1, Ve = Te = null, e.updateQueue != null) {
                    var c = e.updateQueue;
                    c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0);
                }
                M.H = qf, c = t(a, s);
            }while (Wa);
            return c;
        }
        function My() {
            var e = M.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Fi(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (le.flags |= 1024), t;
        }
        function Uo() {
            var e = bs !== 0;
            return bs = 0, e;
        }
        function Do(e, t, a) {
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
            pn = 0, Ve = Te = le = null, Wa = !1, Zi = bs = 0, Qa = null;
        }
        function ct() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Ve === null ? le.memoizedState = Ve = e : Ve = Ve.next = e, Ve;
        }
        function Pe() {
            if (Te === null) {
                var e = le.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Te.next;
            var t = Ve === null ? le.memoizedState : Ve.next;
            if (t !== null) Ve = t, Te = e;
            else {
                if (e === null) throw le.alternate === null ? Error(l(467)) : Error(l(310));
                Te = e, e = {
                    memoizedState: Te.memoizedState,
                    baseState: Te.baseState,
                    baseQueue: Te.baseQueue,
                    queue: Te.queue,
                    next: null
                }, Ve === null ? le.memoizedState = Ve = e : Ve = Ve.next = e;
            }
            return Ve;
        }
        function _s() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Fi(e) {
            var t = Zi;
            return Zi += 1, Qa === null && (Qa = []), e = Ih(Qa, e, t), t = le, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Bf : Io), e;
        }
        function ws(e) {
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
            }), a === null && (a = _s(), le.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for(a = t.data[t.index] = Array(e), s = 0; s < e; s++)a[s] = Nt;
            return t.index++, a;
        }
        function mn(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Ss(e) {
            var t = Pe();
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
                var y = m = null, w = null, C = t, L = !1;
                do {
                    var q = C.lane & -536870913;
                    if (q !== C.lane ? (fe & q) === q : (pn & q) === q) {
                        var j = C.revertLane;
                        if (j === 0) w !== null && (w = w.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }), q === Ka && (L = !0);
                        else if ((pn & j) === j) {
                            C = C.next, j === Ka && (L = !0);
                            continue;
                        } else q = {
                            lane: 0,
                            revertLane: C.revertLane,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null
                        }, w === null ? (y = w = q, m = c) : w = w.next = q, le.lanes |= j, Vn |= j;
                        q = C.action, va && a(c, q), c = C.hasEagerState ? C.eagerState : a(c, q);
                    } else j = {
                        lane: q,
                        revertLane: C.revertLane,
                        gesture: C.gesture,
                        action: C.action,
                        hasEagerState: C.hasEagerState,
                        eagerState: C.eagerState,
                        next: null
                    }, w === null ? (y = w = j, m = c) : w = w.next = j, le.lanes |= q, Vn |= q;
                    C = C.next;
                }while (C !== null && C !== t);
                if (w === null ? m = c : w.next = y, !St(c, e.memoizedState) && (Ke = !0, L && (a = Ya, a !== null))) throw a;
                e.memoizedState = c, e.baseState = m, e.baseQueue = w, s.lastRenderedState = c;
            }
            return o === null && (s.lanes = 0), [
                e.memoizedState,
                s.dispatch
            ];
        }
        function Ho(e) {
            var t = Pe(), a = t.queue;
            if (a === null) throw Error(l(311));
            a.lastRenderedReducer = e;
            var s = a.dispatch, o = a.pending, c = t.memoizedState;
            if (o !== null) {
                a.pending = null;
                var m = o = o.next;
                do c = e(c, m.action), m = m.next;
                while (m !== o);
                St(c, t.memoizedState) || (Ke = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), a.lastRenderedState = c;
            }
            return [
                c,
                s
            ];
        }
        function rf(e, t, a) {
            var s = le, o = Pe(), c = pe;
            if (c) {
                if (a === void 0) throw Error(l(407));
                a = a();
            } else a = t();
            var m = !St((Te || o).memoizedState, a);
            if (m && (o.memoizedState = a, Ke = !0), o = o.queue, $o(of.bind(null, s, o, e), [
                e
            ]), o.getSnapshot !== t || m || Ve !== null && Ve.memoizedState.tag & 1) {
                if (s.flags |= 2048, Za(9, {
                    destroy: void 0
                }, lf.bind(null, s, o, a, t), null), Oe === null) throw Error(l(349));
                c || (pn & 127) !== 0 || sf(s, t, a);
            }
            return a;
        }
        function sf(e, t, a) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: a
            }, t = le.updateQueue, t === null ? (t = _s(), le.updateQueue = t, t.stores = [
                e
            ]) : (a = t.stores, a === null ? t.stores = [
                e
            ] : a.push(e));
        }
        function lf(e, t, a, s) {
            t.value = a, t.getSnapshot = s, uf(t) && cf(e);
        }
        function of(e, t, a) {
            return a(function() {
                uf(t) && cf(e);
            });
        }
        function uf(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var a = t();
                return !St(e, a);
            } catch  {
                return !0;
            }
        }
        function cf(e) {
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
        function hf(e, t, a, s) {
            return e.baseState = a, Mo(e, Te, typeof s == "function" ? s : mn);
        }
        function Hy(e, t, a, s, o) {
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
                M.T !== null ? a(!0) : c.isTransition = !1, s(c), a = t.pending, a === null ? (c.next = t.pending = c, ff(t, c)) : (c.next = a.next, t.pending = a.next = c);
            }
        }
        function ff(e, t) {
            var a = t.action, s = t.payload, o = e.state;
            if (t.isTransition) {
                var c = M.T, m = {};
                M.T = m;
                try {
                    var y = a(o, s), w = M.S;
                    w !== null && w(m, y), df(e, t, y);
                } catch (C) {
                    qo(e, t, C);
                } finally{
                    c !== null && m.types !== null && (c.types = m.types), M.T = c;
                }
            } else try {
                c = a(o, s), df(e, t, c);
            } catch (C) {
                qo(e, t, C);
            }
        }
        function df(e, t, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
                pf(e, t, s);
            }, function(s) {
                return qo(e, t, s);
            }) : pf(e, t, a);
        }
        function pf(e, t, a) {
            t.status = "fulfilled", t.value = a, mf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ff(e, a)));
        }
        function qo(e, t, a) {
            var s = e.pending;
            if (e.pending = null, s !== null) {
                s = s.next;
                do t.status = "rejected", t.reason = a, mf(t), t = t.next;
                while (t !== s);
            }
            e.action = null;
        }
        function mf(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function gf(e, t) {
            return t;
        }
        function yf(e, t) {
            if (pe) {
                var a = Oe.formState;
                if (a !== null) {
                    e: {
                        var s = le;
                        if (pe) {
                            if (Ne) {
                                t: {
                                    for(var o = Ne, c = Bt; o.nodeType !== 8;){
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
                                    Ne = $t(o.nextSibling), s = o.data === "F!";
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
                lastRenderedReducer: gf,
                lastRenderedState: t
            }, a.queue = s, a = Lf.bind(null, le, s), s.dispatch = a, s = Bo(!1), c = Yo.bind(null, le, !1, s.queue), s = ct(), o = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, s.queue = o, a = Hy.bind(null, le, o, c, a), o.dispatch = a, s.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function vf(e) {
            var t = Pe();
            return bf(t, Te, e);
        }
        function bf(e, t, a) {
            if (t = Mo(e, t, gf)[0], e = Ss(mn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var s = Fi(t);
            } catch (m) {
                throw m === Ia ? fs : m;
            }
            else s = t;
            t = Pe();
            var o = t.queue, c = o.dispatch;
            return a !== t.memoizedState && (le.flags |= 2048, Za(9, {
                destroy: void 0
            }, By.bind(null, o, a), null)), [
                s,
                c,
                e
            ];
        }
        function By(e, t) {
            e.action = t;
        }
        function _f(e) {
            var t = Pe(), a = Te;
            if (a !== null) return bf(t, a, e);
            Pe(), t = t.memoizedState, a = Pe();
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
            }, t = le.updateQueue, t === null && (t = _s(), le.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
        }
        function wf() {
            return Pe().memoizedState;
        }
        function Es(e, t, a, s) {
            var o = ct();
            le.flags |= e, o.memoizedState = Za(1 | t, {
                destroy: void 0
            }, a, s === void 0 ? null : s);
        }
        function Ts(e, t, a, s) {
            var o = Pe();
            s = s === void 0 ? null : s;
            var c = o.memoizedState.inst;
            Te !== null && s !== null && jo(s, Te.memoizedState.deps) ? o.memoizedState = Za(t, c, a, s) : (le.flags |= e, o.memoizedState = Za(1 | t, c, a, s));
        }
        function Sf(e, t) {
            Es(8390656, 8, e, t);
        }
        function $o(e, t) {
            Ts(2048, 8, e, t);
        }
        function qy(e) {
            le.flags |= 4;
            var t = le.updateQueue;
            if (t === null) t = _s(), le.updateQueue = t, t.events = [
                e
            ];
            else {
                var a = t.events;
                a === null ? t.events = [
                    e
                ] : a.push(e);
            }
        }
        function Ef(e) {
            var t = Pe().memoizedState;
            return qy({
                ref: t,
                nextImpl: e
            }), function() {
                if ((ye & 2) !== 0) throw Error(l(440));
                return t.impl.apply(void 0, arguments);
            };
        }
        function Tf(e, t) {
            return Ts(4, 2, e, t);
        }
        function Af(e, t) {
            return Ts(4, 4, e, t);
        }
        function xf(e, t) {
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
        function Rf(e, t, a) {
            a = a != null ? a.concat([
                e
            ]) : null, Ts(4, 4, xf.bind(null, t, e), a);
        }
        function Po() {}
        function Of(e, t) {
            var a = Pe();
            t = t === void 0 ? null : t;
            var s = a.memoizedState;
            return t !== null && jo(t, s[1]) ? s[0] : (a.memoizedState = [
                e,
                t
            ], e);
        }
        function Cf(e, t) {
            var a = Pe();
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
            return a === void 0 || (pn & 1073741824) !== 0 && (fe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = kd(), le.lanes |= e, Vn |= e, a);
        }
        function kf(e, t, a, s) {
            return St(a, t) ? a : Ja.current !== null ? (e = Go(e, a, s), St(e, t) || (Ke = !0), e) : (pn & 42) === 0 || (pn & 1073741824) !== 0 && (fe & 261930) === 0 ? (Ke = !0, e.memoizedState = a) : (e = kd(), le.lanes |= e, Vn |= e, t);
        }
        function jf(e, t, a, s, o) {
            var c = G.p;
            G.p = c !== 0 && 8 > c ? c : 8;
            var m = M.T, y = {};
            M.T = y, Yo(e, !1, t, a);
            try {
                var w = o(), C = M.S;
                if (C !== null && C(y, w), w !== null && typeof w == "object" && typeof w.then == "function") {
                    var L = zy(w, s);
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
        function Vo(e, t, a, s) {
            if (e.tag !== 5) throw Error(l(476));
            var o = Nf(e).queue;
            jf(e, o, t, ae, a === null ? $y : function() {
                return Uf(e), a(s);
            });
        }
        function Nf(e) {
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
        function Uf(e) {
            var t = Nf(e);
            t.next === null && (t = e.alternate.memoizedState), er(e, t.next.queue, {}, Ot());
        }
        function Ko() {
            return nt(yr);
        }
        function Df() {
            return Pe().memoizedState;
        }
        function zf() {
            return Pe().memoizedState;
        }
        function Py(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var a = Ot();
                        e = Hn(a);
                        var s = Bn(t, e, a);
                        s !== null && (yt(s, t, a), Ji(s, t, a)), t = {
                            cache: _o()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Gy(e, t, a) {
            var s = Ot();
            a = {
                lane: s,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, As(e) ? Mf(t, a) : (a = oo(e, t, a, s), a !== null && (yt(a, e, s), Hf(a, t, s)));
        }
        function Lf(e, t, a) {
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
            if (As(e)) Mf(t, o);
            else {
                var c = e.alternate;
                if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                    var m = t.lastRenderedState, y = c(m, a);
                    if (o.hasEagerState = !0, o.eagerState = y, St(y, m)) return rs(e, t, o, 0), Oe === null && is(), !1;
                } catch  {}
                if (a = oo(e, t, o, s), a !== null) return yt(a, e, s), Hf(a, t, s), !0;
            }
            return !1;
        }
        function Yo(e, t, a, s) {
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
        function Mf(e, t) {
            Wa = vs = !0;
            var a = e.pending;
            a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
        }
        function Hf(e, t, a) {
            if ((a & 4194048) !== 0) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, Pc(e, a);
            }
        }
        var tr = {
            readContext: nt,
            use: ws,
            useCallback: Me,
            useContext: Me,
            useEffect: Me,
            useImperativeHandle: Me,
            useLayoutEffect: Me,
            useInsertionEffect: Me,
            useMemo: Me,
            useReducer: Me,
            useRef: Me,
            useState: Me,
            useDebugValue: Me,
            useDeferredValue: Me,
            useTransition: Me,
            useSyncExternalStore: Me,
            useId: Me,
            useHostTransitionStatus: Me,
            useFormState: Me,
            useActionState: Me,
            useOptimistic: Me,
            useMemoCache: Me,
            useCacheRefresh: Me
        };
        tr.useEffectEvent = Me;
        var Bf = {
            readContext: nt,
            use: ws,
            useCallback: function(e, t) {
                return ct().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: nt,
            useEffect: Sf,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([
                    e
                ]) : null, Es(4194308, 4, xf.bind(null, t, e), a);
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
                }, s.queue = e, e = e.dispatch = Gy.bind(null, le, e), [
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
                var t = e.queue, a = Lf.bind(null, le, t);
                return t.dispatch = a, [
                    e.memoizedState,
                    a
                ];
            },
            useDebugValue: Po,
            useDeferredValue: function(e, t) {
                var a = ct();
                return Go(a, e, t);
            },
            useTransition: function() {
                var e = Bo(!1);
                return e = jf.bind(null, le, e.queue, !0, !1), ct().memoizedState = e, [
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
                    if (a = t(), Oe === null) throw Error(l(349));
                    (fe & 127) !== 0 || sf(s, t, a);
                }
                o.memoizedState = a;
                var c = {
                    value: a,
                    getSnapshot: t
                };
                return o.queue = c, Sf(of.bind(null, s, c, e), [
                    e
                ]), s.flags |= 2048, Za(9, {
                    destroy: void 0
                }, lf.bind(null, s, c, a, t), null), a;
            },
            useId: function() {
                var e = ct(), t = Oe.identifierPrefix;
                if (pe) {
                    var a = Ft, s = Zt;
                    a = (s & ~(1 << 32 - wt(s) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = bs++, 0 < a && (t += "H" + a.toString(32)), t += "_";
                } else a = Ly++, t = "_" + t + "r_" + a.toString(32) + "_";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Ko,
            useFormState: yf,
            useActionState: yf,
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
                return t.queue = a, t = Yo.bind(null, le, !0, a), a.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Lo,
            useCacheRefresh: function() {
                return ct().memoizedState = Py.bind(null, le);
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
        }, Io = {
            readContext: nt,
            use: ws,
            useCallback: Of,
            useContext: nt,
            useEffect: $o,
            useImperativeHandle: Rf,
            useInsertionEffect: Tf,
            useLayoutEffect: Af,
            useMemo: Cf,
            useReducer: Ss,
            useRef: wf,
            useState: function() {
                return Ss(mn);
            },
            useDebugValue: Po,
            useDeferredValue: function(e, t) {
                var a = Pe();
                return kf(a, Te.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Ss(mn)[0], t = Pe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Fi(e),
                    t
                ];
            },
            useSyncExternalStore: rf,
            useId: Df,
            useHostTransitionStatus: Ko,
            useFormState: vf,
            useActionState: vf,
            useOptimistic: function(e, t) {
                var a = Pe();
                return hf(a, Te, e, t);
            },
            useMemoCache: Lo,
            useCacheRefresh: zf
        };
        Io.useEffectEvent = Ef;
        var qf = {
            readContext: nt,
            use: ws,
            useCallback: Of,
            useContext: nt,
            useEffect: $o,
            useImperativeHandle: Rf,
            useInsertionEffect: Tf,
            useLayoutEffect: Af,
            useMemo: Cf,
            useReducer: Ho,
            useRef: wf,
            useState: function() {
                return Ho(mn);
            },
            useDebugValue: Po,
            useDeferredValue: function(e, t) {
                var a = Pe();
                return Te === null ? Go(a, e, t) : kf(a, Te.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Ho(mn)[0], t = Pe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Fi(e),
                    t
                ];
            },
            useSyncExternalStore: rf,
            useId: Df,
            useHostTransitionStatus: Ko,
            useFormState: _f,
            useActionState: _f,
            useOptimistic: function(e, t) {
                var a = Pe();
                return Te !== null ? hf(a, Te, e, t) : (a.baseState = e, [
                    e,
                    a.queue.dispatch
                ]);
            },
            useMemoCache: Lo,
            useCacheRefresh: zf
        };
        qf.useEffectEvent = Ef;
        function Xo(e, t, a, s) {
            t = e.memoizedState, a = a(s, t), a = a == null ? t : v({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
        }
        var Jo = {
            enqueueSetState: function(e, t, a) {
                e = e._reactInternals;
                var s = Ot(), o = Hn(s);
                o.payload = t, a != null && (o.callback = a), t = Bn(e, o, s), t !== null && (yt(t, e, s), Ji(t, e, s));
            },
            enqueueReplaceState: function(e, t, a) {
                e = e._reactInternals;
                var s = Ot(), o = Hn(s);
                o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Bn(e, o, s), t !== null && (yt(t, e, s), Ji(t, e, s));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var a = Ot(), s = Hn(a);
                s.tag = 2, t != null && (s.callback = t), t = Bn(e, s, a), t !== null && (yt(t, e, a), Ji(t, e, a));
            }
        };
        function $f(e, t, a, s, o, c, m) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, c, m) : t.prototype && t.prototype.isPureReactComponent ? !$i(a, s) || !$i(o, c) : !0;
        }
        function Pf(e, t, a, s) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && Jo.enqueueReplaceState(t, t.state, null);
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
        function Gf(e) {
            as(e);
        }
        function Vf(e) {
            console.error(e);
        }
        function Kf(e) {
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
        function Yf(e, t, a) {
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
        function Wo(e, t, a) {
            return a = Hn(a), a.tag = 3, a.payload = {
                element: null
            }, a.callback = function() {
                xs(e, t);
            }, a;
        }
        function If(e) {
            return e = Hn(e), e.tag = 3, e;
        }
        function Xf(e, t, a, s) {
            var o = a.type.getDerivedStateFromError;
            if (typeof o == "function") {
                var c = s.value;
                e.payload = function() {
                    return o(c);
                }, e.callback = function() {
                    Yf(t, a, s);
                };
            }
            var m = a.stateNode;
            m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
                Yf(t, a, s), typeof o != "function" && (Kn === null ? Kn = new Set([
                    this
                ]) : Kn.add(this));
                var y = s.stack;
                this.componentDidCatch(s.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function Vy(e, t, a, s, o) {
            if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                if (t = a.alternate, t !== null && Va(t, a, o, !0), a = Tt.current, a !== null) {
                    switch(a.tag){
                        case 31:
                        case 13:
                            return qt === null ? Hs() : a.alternate === null && He === 0 && (He = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, s === ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([
                                s
                            ]) : t.add(s), wu(e, s, o)), !1;
                        case 22:
                            return a.flags |= 65536, s === ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    s
                                ])
                            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([
                                s
                            ]) : a.add(s)), wu(e, s, o)), !1;
                    }
                    throw Error(l(435, a.tag));
                }
                return wu(e, s, o), Hs(), !1;
            }
            if (pe) return t = Tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, s !== mo && (e = Error(l(422), {
                cause: s
            }), Vi(Lt(e, a)))) : (s !== mo && (t = Error(l(423), {
                cause: s
            }), Vi(Lt(t, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, s = Lt(s, a), o = Wo(e.stateNode, s, o), xo(e, o), He !== 4 && (He = 2)), !1;
            var c = Error(l(520), {
                cause: s
            });
            if (c = Lt(c, a), ur === null ? ur = [
                c
            ] : ur.push(c), He !== 4 && (He = 2), t === null) return !0;
            s = Lt(s, a), a = t;
            do {
                switch(a.tag){
                    case 3:
                        return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Wo(a.stateNode, s, e), xo(a, e), !1;
                    case 1:
                        if (t = a.type, c = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Kn === null || !Kn.has(c)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = If(o), Xf(o, e, a, s), xo(a, o), !1;
                }
                a = a.return;
            }while (a !== null);
            return !1;
        }
        var Qo = Error(l(461)), Ke = !1;
        function at(e, t, a, s) {
            t.child = e === null ? Qh(t, null, a, s) : ya(t, e.child, a, s);
        }
        function Jf(e, t, a, s, o) {
            a = a.render;
            var c = t.ref;
            if ("ref" in s) {
                var m = {};
                for(var y in s)y !== "ref" && (m[y] = s[y]);
            } else m = s;
            return da(t), s = No(e, t, a, m, c, o), y = Uo(), e !== null && !Ke ? (Do(e, t, o), gn(e, t, o)) : (pe && y && fo(t), t.flags |= 1, at(e, t, s, o), t.child);
        }
        function Wf(e, t, a, s, o) {
            if (e === null) {
                var c = a.type;
                return typeof c == "function" && !uo(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = c, Qf(e, t, c, s, o)) : (e = ls(a.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (c = e.child, !ru(e, o)) {
                var m = c.memoizedProps;
                if (a = a.compare, a = a !== null ? a : $i, a(m, s) && e.ref === t.ref) return gn(e, t, o);
            }
            return t.flags |= 1, e = cn(c, s), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Qf(e, t, a, s, o) {
            if (e !== null) {
                var c = e.memoizedProps;
                if ($i(c, s) && e.ref === t.ref) if (Ke = !1, t.pendingProps = s = c, ru(e, o)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, gn(e, t, o);
            }
            return Zo(e, t, a, s, o);
        }
        function Zf(e, t, a, s) {
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
                    return Ff(e, t, c, a, s);
                }
                if ((a & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && hs(t, c !== null ? c.cachePool : null), c !== null ? ef(t, c) : Oo(), tf(t);
                else return s = t.lanes = 536870912, Ff(e, t, c !== null ? c.baseLanes | a : a, a, s);
            } else c !== null ? (hs(t, c.cachePool), ef(t, c), $n(), t.memoizedState = null) : (e !== null && hs(t, null), Oo(), $n());
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
        function Ff(e, t, a, s, o) {
            var c = So();
            return c = c === null ? null : {
                parent: Ge._currentValue,
                pool: c
            }, t.memoizedState = {
                baseLanes: a,
                cachePool: c
            }, e !== null && hs(t, null), Oo(), tf(t), e !== null && Va(e, t, s, !0), t.childLanes = o, null;
        }
        function Rs(e, t) {
            return t = Cs({
                mode: t.mode,
                children: t.children
            }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function ed(e, t, a) {
            return ya(t, e.child, null, a), e = Rs(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
        }
        function Ky(e, t, a) {
            var s = t.pendingProps, o = (t.flags & 128) !== 0;
            if (t.flags &= -129, e === null) {
                if (pe) {
                    if (s.mode === "hidden") return e = Rs(t, s), t.lanes = 536870912, nr(null, e);
                    if (ko(t), (e = Ne) ? (e = fp(e, Bt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Un !== null ? {
                            id: Zt,
                            overflow: Ft
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Lh(e), a.return = t, t.child = a, tt = t, Ne = null)) : e = null, e === null) throw zn(t);
                    return t.lanes = 536870912, null;
                }
                return Rs(t, s);
            }
            var c = e.memoizedState;
            if (c !== null) {
                var m = c.dehydrated;
                if (ko(t), o) if (t.flags & 256) t.flags &= -257, t = ed(e, t, a);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
                else throw Error(l(558));
                else if (Ke || Va(e, t, a, !1), o = (a & e.childLanes) !== 0, Ke || o) {
                    if (s = Oe, s !== null && (m = Gc(s, a), m !== 0 && m !== c.retryLane)) throw c.retryLane = m, ua(e, m), yt(s, e, m), Qo;
                    Hs(), t = ed(e, t, a);
                } else e = c.treeContext, Ne = $t(m.nextSibling), tt = t, pe = !0, Dn = null, Bt = !1, e !== null && Bh(t, e), t = Rs(t, s), t.flags |= 4096;
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
            return da(t), a = No(e, t, a, s, void 0, o), s = Uo(), e !== null && !Ke ? (Do(e, t, o), gn(e, t, o)) : (pe && s && fo(t), t.flags |= 1, at(e, t, a, o), t.child);
        }
        function td(e, t, a, s, o, c) {
            return da(t), t.updateQueue = null, a = af(t, s, a, o), nf(e), s = Uo(), e !== null && !Ke ? (Do(e, t, c), gn(e, t, c)) : (pe && s && fo(t), t.flags |= 1, at(e, t, a, c), t.child);
        }
        function nd(e, t, a, s, o) {
            if (da(t), t.stateNode === null) {
                var c = qa, m = a.contextType;
                typeof m == "object" && m !== null && (c = nt(m)), c = new a(s, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Jo, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = s, c.state = t.memoizedState, c.refs = {}, To(t), m = a.contextType, c.context = typeof m == "object" && m !== null ? nt(m) : qa, c.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (Xo(t, a, m, s), c.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), m !== c.state && Jo.enqueueReplaceState(c, c.state, null), Qi(t, s, c, o), Wi(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
            } else if (e === null) {
                c = t.stateNode;
                var y = t.memoizedProps, w = ba(a, y);
                c.props = w;
                var C = c.context, L = a.contextType;
                m = qa, typeof L == "object" && L !== null && (m = nt(L));
                var q = a.getDerivedStateFromProps;
                L = typeof q == "function" || typeof c.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, L || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y || C !== m) && Pf(t, c, s, m), Mn = !1;
                var j = t.memoizedState;
                c.state = j, Qi(t, s, c, o), Wi(), C = t.memoizedState, y || j !== C || Mn ? (typeof q == "function" && (Xo(t, a, q, s), C = t.memoizedState), (w = Mn || $f(t, a, w, s, j, C, m)) ? (L || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), c.props = s, c.state = C, c.context = m, s = w) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
            } else {
                c = t.stateNode, Ao(e, t), m = t.memoizedProps, L = ba(a, m), c.props = L, q = t.pendingProps, j = c.context, C = a.contextType, w = qa, typeof C == "object" && C !== null && (w = nt(C)), y = a.getDerivedStateFromProps, (C = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== q || j !== w) && Pf(t, c, s, w), Mn = !1, j = t.memoizedState, c.state = j, Qi(t, s, c, o), Wi();
                var D = t.memoizedState;
                m !== q || j !== D || Mn || e !== null && e.dependencies !== null && us(e.dependencies) ? (typeof y == "function" && (Xo(t, a, y, s), D = t.memoizedState), (L = Mn || $f(t, a, L, s, j, D, w) || e !== null && e.dependencies !== null && us(e.dependencies)) ? (C || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, D, w), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, D, w)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = D), c.props = s, c.state = D, c.context = w, s = L) : (typeof c.componentDidUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), s = !1);
            }
            return c = s, Os(e, t), s = (t.flags & 128) !== 0, c || s ? (c = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && s ? (t.child = ya(t, e.child, null, o), t.child = ya(t, null, a, o)) : at(e, t, a, o), t.memoizedState = c.state, e = t.child) : e = gn(e, t, o), e;
        }
        function ad(e, t, a, s) {
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
                cachePool: Kh()
            };
        }
        function tu(e, t, a) {
            return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rt), e;
        }
        function id(e, t, a) {
            var s = t.pendingProps, o = !1, c = (t.flags & 128) !== 0, m;
            if ((m = c) || (m = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), m && (o = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (pe) {
                    if (o ? qn(t) : $n(), (e = Ne) ? (e = fp(e, Bt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Un !== null ? {
                            id: Zt,
                            overflow: Ft
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Lh(e), a.return = t, t.child = a, tt = t, Ne = null)) : e = null, e === null) throw zn(t);
                    return Mu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
                }
                var y = s.children;
                return s = s.fallback, o ? ($n(), o = t.mode, y = Cs({
                    mode: "hidden",
                    children: y
                }, o), s = ca(s, o, a, null), y.return = t, s.return = t, y.sibling = s, t.child = y, s = t.child, s.memoizedState = eu(a), s.childLanes = tu(e, m, a), t.memoizedState = Fo, nr(null, s)) : (qn(t), nu(t, y));
            }
            var w = e.memoizedState;
            if (w !== null && (y = w.dehydrated, y !== null)) {
                if (c) t.flags & 256 ? (qn(t), t.flags &= -257, t = au(e, t, a)) : t.memoizedState !== null ? ($n(), t.child = e.child, t.flags |= 128, t = null) : ($n(), y = s.fallback, o = t.mode, s = Cs({
                    mode: "visible",
                    children: s.children
                }, o), y = ca(y, o, a, null), y.flags |= 2, s.return = t, y.return = t, s.sibling = y, t.child = s, ya(t, e.child, null, a), s = t.child, s.memoizedState = eu(a), s.childLanes = tu(e, m, a), t.memoizedState = Fo, t = nr(null, s));
                else if (qn(t), Mu(y)) {
                    if (m = y.nextSibling && y.nextSibling.dataset, m) var C = m.dgst;
                    m = C, s = Error(l(419)), s.stack = "", s.digest = m, Vi({
                        value: s,
                        source: null,
                        stack: null
                    }), t = au(e, t, a);
                } else if (Ke || Va(e, t, a, !1), m = (a & e.childLanes) !== 0, Ke || m) {
                    if (m = Oe, m !== null && (s = Gc(m, a), s !== 0 && s !== w.retryLane)) throw w.retryLane = s, ua(e, s), yt(m, e, s), Qo;
                    Lu(y) || Hs(), t = au(e, t, a);
                } else Lu(y) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Ne = $t(y.nextSibling), tt = t, pe = !0, Dn = null, Bt = !1, e !== null && Bh(t, e), t = nu(t, s.children), t.flags |= 4096);
                return t;
            }
            return o ? ($n(), y = s.fallback, o = t.mode, w = e.child, C = w.sibling, s = cn(w, {
                mode: "hidden",
                children: s.children
            }), s.subtreeFlags = w.subtreeFlags & 65011712, C !== null ? y = cn(C, y) : (y = ca(y, o, a, null), y.flags |= 2), y.return = t, s.return = t, s.sibling = y, t.child = s, nr(null, s), s = t.child, y = e.child.memoizedState, y === null ? y = eu(a) : (o = y.cachePool, o !== null ? (w = Ge._currentValue, o = o.parent !== w ? {
                parent: w,
                pool: w
            } : o) : o = Kh(), y = {
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
        function rd(e, t, a) {
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
        function sd(e, t, a) {
            var s = t.pendingProps, o = s.revealOrder, c = s.tail;
            s = s.children;
            var m = $e.current, y = (m & 2) !== 0;
            if (y ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, V($e, m), at(e, t, s, a), s = pe ? Gi : 0, !y && e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && rd(e, a, t);
                else if (e.tag === 19) rd(e, a, t);
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
            if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
                if (Va(e, t, a, !1), (a & t.childLanes) === 0) return null;
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
                    ut(t, t.stateNode.containerInfo), Ln(t, Ge, e.memoizedState.cache), ha();
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
                    if (s !== null) return s.dehydrated !== null ? (qn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? id(e, t, a) : (qn(t), e = gn(e, t, a), e !== null ? e.sibling : null);
                    qn(t);
                    break;
                case 19:
                    var o = (e.flags & 128) !== 0;
                    if (s = (a & t.childLanes) !== 0, s || (Va(e, t, a, !1), s = (a & t.childLanes) !== 0), o) {
                        if (s) return sd(e, t, a);
                        t.flags |= 128;
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V($e, $e.current), s) break;
                    return null;
                case 22:
                    return t.lanes = 0, Zf(e, t, a, t.pendingProps);
                case 24:
                    Ln(t, Ge, e.memoizedState.cache);
            }
            return gn(e, t, a);
        }
        function ld(e, t, a) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!ru(e, a) && (t.flags & 128) === 0) return Ke = !1, Yy(e, t, a);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, pe && (t.flags & 1048576) !== 0 && Hh(t, Gi, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        var s = t.pendingProps;
                        if (e = ma(t.elementType), t.type = e, typeof e == "function") uo(e) ? (s = ba(e, s), t.tag = 1, t = nd(null, t, e, s, a)) : (t.tag = 0, t = Zo(null, t, e, s, a));
                        else {
                            if (e != null) {
                                var o = e.$$typeof;
                                if (o === K) {
                                    t.tag = 11, t = Jf(null, t, e, s, a);
                                    break e;
                                } else if (o === Y) {
                                    t.tag = 14, t = Wf(null, t, e, s, a);
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
                    return s = t.type, o = ba(s, t.pendingProps), nd(e, t, s, o, a);
                case 3:
                    e: {
                        if (ut(t, t.stateNode.containerInfo), e === null) throw Error(l(387));
                        s = t.pendingProps;
                        var c = t.memoizedState;
                        o = c.element, Ao(e, t), Qi(t, s, null, a);
                        var m = t.memoizedState;
                        if (s = m.cache, Ln(t, Ge, s), s !== c.cache && bo(t, [
                            Ge
                        ], a, !0), Wi(), s = m.element, c.isDehydrated) if (c = {
                            element: s,
                            isDehydrated: !1,
                            cache: m.cache
                        }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = ad(e, t, s, a);
                            break e;
                        } else if (s !== o) {
                            o = Lt(Error(l(424)), t), Vi(o), t = ad(e, t, s, a);
                            break e;
                        } else for(e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ne = $t(e.firstChild), tt = t, pe = !0, Dn = null, Bt = !0, a = Qh(t, null, s, a), t.child = a; a;)a.flags = a.flags & -3 | 4096, a = a.sibling;
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
                    return Os(e, t), e === null ? (a = vp(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : pe || (a = t.type, e = t.pendingProps, s = Ks(ue.current).createElement(a), s[et] = t, s[ht] = e, it(s, a, e), Qe(s), t.stateNode = s) : t.memoizedState = vp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Oi(t), e === null && pe && (s = t.stateNode = mp(t.type, t.pendingProps, ue.current), tt = t, Bt = !0, o = Ne, Jn(t.type) ? (Hu = o, Ne = $t(s.firstChild)) : Ne = o), at(e, t, t.pendingProps.children, a), Os(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && pe && ((o = s = Ne) && (s = Sv(s, t.type, t.pendingProps, Bt), s !== null ? (t.stateNode = s, tt = t, Ne = $t(s.firstChild), Bt = !1, o = !0) : o = !1), o || zn(t)), Oi(t), o = t.type, c = t.pendingProps, m = e !== null ? e.memoizedProps : null, s = c.children, Uu(o, c) ? s = null : m !== null && Uu(o, m) && (t.flags |= 32), t.memoizedState !== null && (o = No(e, t, My, null, null, a), yr._currentValue = o), Os(e, t), at(e, t, s, a), t.child;
                case 6:
                    return e === null && pe && ((e = a = Ne) && (a = Ev(a, t.pendingProps, Bt), a !== null ? (t.stateNode = a, tt = t, Ne = null, e = !0) : e = !1), e || zn(t)), null;
                case 13:
                    return id(e, t, a);
                case 4:
                    return ut(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = ya(t, null, s, a) : at(e, t, s, a), t.child;
                case 11:
                    return Jf(e, t, t.type, t.pendingProps, a);
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
                    return Wf(e, t, t.type, t.pendingProps, a);
                case 15:
                    return Qf(e, t, t.type, t.pendingProps, a);
                case 19:
                    return sd(e, t, a);
                case 31:
                    return Ky(e, t, a);
                case 22:
                    return Zf(e, t, a, t.pendingProps);
                case 24:
                    return da(t), s = nt(Ge), e === null ? (o = So(), o === null && (o = Oe, c = _o(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= a), o = c), t.memoizedState = {
                        parent: s,
                        cache: o
                    }, To(t), Ln(t, Ge, o)) : ((e.lanes & a) !== 0 && (Ao(e, t), Qi(t, null, null, a), Wi()), o = e.memoizedState, c = t.memoizedState, o.parent !== s ? (o = {
                        parent: s,
                        cache: s
                    }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ln(t, Ge, s)) : (s = c.cache, Ln(t, Ge, s), s !== o.cache && bo(t, [
                        Ge
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
                else if (Dd()) e.flags |= 8192;
                else throw ga = ds, Eo;
            } else e.flags &= -16777217;
        }
        function od(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !Ep(t)) if (Dd()) e.flags |= 8192;
            else throw ga = ds, Eo;
        }
        function ks(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? qc() : 536870912, e.lanes |= t, ni |= t);
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
        function Iy(e, t, a) {
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
                    return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), dn(Ge), qe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ga(t) ? yn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, go())), Ue(t), null;
                case 26:
                    var o = t.type, c = t.memoizedState;
                    return e === null ? (yn(t), c !== null ? (Ue(t), od(t, c)) : (Ue(t), su(t, o, null, s, a))) : c ? c !== e.memoizedState ? (yn(t), Ue(t), od(t, c)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== s && yn(t), Ue(t), su(t, o, e, s, a)), null;
                case 27:
                    if ($r(t), a = ue.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && yn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ue(t), null;
                        }
                        e = J.current, Ga(t) ? qh(t) : (e = mp(o, s, a), t.stateNode = e, yn(t));
                    }
                    return Ue(t), null;
                case 5:
                    if ($r(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && yn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ue(t), null;
                        }
                        if (c = J.current, Ga(t)) qh(t);
                        else {
                            var m = Ks(ue.current);
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
                            e[et] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || ip(e.nodeValue, a)), e || zn(t, !0);
                        } else e = Ks(e).createTextNode(s), e[et] = t, t.stateNode = e;
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
                    return qe(), e === null && Ou(t.stateNode.containerInfo), Ue(t), null;
                case 10:
                    return dn(t.type), Ue(t), null;
                case 19:
                    if ($($e), s = t.memoizedState, s === null) return Ue(t), null;
                    if (o = (t.flags & 128) !== 0, c = s.rendering, c === null) if (o) ar(s, !1);
                    else {
                        if (He !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (c = ys(e), c !== null) {
                                for(t.flags |= 128, ar(s, !1), e = c.updateQueue, t.updateQueue = e, ks(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)zh(a, e), a = a.sibling;
                                return V($e, $e.current & 1 | 2), pe && hn(t, s.treeForkCount), t.child;
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
                    return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = bt(), e.sibling = null, a = $e.current, V($e, o ? a & 1 | 2 : a & 1), pe && hn(t, s.treeForkCount), e) : (Ue(t), null);
                case 22:
                case 23:
                    return At(t), Co(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), a = t.updateQueue, a !== null && ks(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && $(pa), null;
                case 24:
                    return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dn(Ge), Ue(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(l(156, t.tag));
        }
        function Xy(e, t) {
            switch(po(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return dn(Ge), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return $r(t), null;
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
                    return $($e), null;
                case 4:
                    return qe(), null;
                case 10:
                    return dn(t.type), null;
                case 22:
                case 23:
                    return At(t), Co(), e !== null && $(pa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return dn(Ge), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function ud(e, t) {
            switch(po(t), t.tag){
                case 3:
                    dn(Ge), qe();
                    break;
                case 26:
                case 27:
                case 5:
                    $r(t);
                    break;
                case 4:
                    qe();
                    break;
                case 31:
                    t.memoizedState !== null && At(t);
                    break;
                case 13:
                    At(t);
                    break;
                case 19:
                    $($e);
                    break;
                case 10:
                    dn(t.type);
                    break;
                case 22:
                case 23:
                    At(t), Co(), e !== null && $(pa);
                    break;
                case 24:
                    dn(Ge);
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
                we(t, t.return, y);
            }
        }
        function Pn(e, t, a) {
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
                                var w = a, C = y;
                                try {
                                    C();
                                } catch (L) {
                                    we(o, w, L);
                                }
                            }
                        }
                        s = s.next;
                    }while (s !== c);
                }
            } catch (L) {
                we(t, t.return, L);
            }
        }
        function cd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var a = e.stateNode;
                try {
                    Fh(t, a);
                } catch (s) {
                    we(e, e.return, s);
                }
            }
        }
        function hd(e, t, a) {
            a.props = ba(e.type, e.memoizedProps), a.state = e.memoizedState;
            try {
                a.componentWillUnmount();
            } catch (s) {
                we(e, t, s);
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
                we(e, t, o);
            }
        }
        function en(e, t) {
            var a = e.ref, s = e.refCleanup;
            if (a !== null) if (typeof s == "function") try {
                s();
            } catch (o) {
                we(e, t, o);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof a == "function") try {
                a(null);
            } catch (o) {
                we(e, t, o);
            }
            else a.current = null;
        }
        function fd(e) {
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
                we(e, e.return, o);
            }
        }
        function lu(e, t, a) {
            try {
                var s = e.stateNode;
                gv(s, e.type, a, t), s[ht] = t;
            } catch (o) {
                we(e, e.return, o);
            }
        }
        function dd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jn(e.type) || e.tag === 4;
        }
        function ou(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || dd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function uu(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = on));
            else if (s !== 4 && (s === 27 && Jn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for(uu(e, t, a), e = e.sibling; e !== null;)uu(e, t, a), e = e.sibling;
        }
        function js(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
            else if (s !== 4 && (s === 27 && Jn(e.type) && (a = e.stateNode), e = e.child, e !== null)) for(js(e, t, a), e = e.sibling; e !== null;)js(e, t, a), e = e.sibling;
        }
        function pd(e) {
            var t = e.stateNode, a = e.memoizedProps;
            try {
                for(var s = e.type, o = t.attributes; o.length;)t.removeAttributeNode(o[0]);
                it(t, s, a), t[et] = e, t[ht] = a;
            } catch (c) {
                we(e, e.return, c);
            }
        }
        var vn = !1, Ye = !1, cu = !1, md = typeof WeakSet == "function" ? WeakSet : Set, Ze = null;
        function Jy(e, t) {
            if (e = e.containerInfo, ju = Zs, e = xh(e), no(e)) {
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
                        var m = 0, y = -1, w = -1, C = 0, L = 0, q = e, j = null;
                        t: for(;;){
                            for(var D; q !== a || o !== 0 && q.nodeType !== 3 || (y = m + o), q !== c || s !== 0 && q.nodeType !== 3 || (w = m + s), q.nodeType === 3 && (m += q.nodeValue.length), (D = q.firstChild) !== null;)j = q, q = D;
                            for(;;){
                                if (q === e) break t;
                                if (j === a && ++C === o && (y = m), j === c && ++L === s && (w = m), (D = q.nextSibling) !== null) break;
                                q = j, j = q.parentNode;
                            }
                            q = D;
                        }
                        a = y === -1 || w === -1 ? null : {
                            start: y,
                            end: w
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
            }, Zs = !1, Ze = t; Ze !== null;)if (t = Ze, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ze = e;
            else for(; Ze !== null;){
                switch(t = Ze, c = t.alternate, e = t.flags, t.tag){
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
                                var I = ba(a.type, o);
                                e = s.getSnapshotBeforeUpdate(I, c), s.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ee) {
                                we(a, a.return, ee);
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
                    e.return = t.return, Ze = e;
                    break;
                }
                Ze = t.return;
            }
        }
        function gd(e, t, a) {
            var s = a.flags;
            switch(a.tag){
                case 0:
                case 11:
                case 15:
                    _n(e, a), s & 4 && ir(5, a);
                    break;
                case 1:
                    if (_n(e, a), s & 4) if (e = a.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (m) {
                        we(a, a.return, m);
                    }
                    else {
                        var o = ba(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (m) {
                            we(a, a.return, m);
                        }
                    }
                    s & 64 && cd(a), s & 512 && rr(a, a.return);
                    break;
                case 3:
                    if (_n(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
                        if (t = null, a.child !== null) switch(a.child.tag){
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode;
                        }
                        try {
                            Fh(e, t);
                        } catch (m) {
                            we(a, a.return, m);
                        }
                    }
                    break;
                case 27:
                    t === null && s & 4 && pd(a);
                case 26:
                case 5:
                    _n(e, a), t === null && s & 4 && fd(a), s & 512 && rr(a, a.return);
                    break;
                case 12:
                    _n(e, a);
                    break;
                case 31:
                    _n(e, a), s & 4 && bd(e, a);
                    break;
                case 13:
                    _n(e, a), s & 4 && _d(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = iv.bind(null, a), Tv(e, a))));
                    break;
                case 22:
                    if (s = a.memoizedState !== null || vn, !s) {
                        t = t !== null && t.memoizedState !== null || Ye, o = vn;
                        var c = Ye;
                        vn = s, (Ye = t) && !c ? wn(e, a, (a.subtreeFlags & 8772) !== 0) : _n(e, a), vn = o, Ye = c;
                    }
                    break;
                case 30:
                    break;
                default:
                    _n(e, a);
            }
        }
        function yd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var ze = null, dt = !1;
        function bn(e, t, a) {
            for(a = a.child; a !== null;)vd(e, t, a), a = a.sibling;
        }
        function vd(e, t, a) {
            if (_t && typeof _t.onCommitFiberUnmount == "function") try {
                _t.onCommitFiberUnmount(Ci, a);
            } catch  {}
            switch(a.tag){
                case 26:
                    Ye || en(a, t), bn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                    break;
                case 27:
                    Ye || en(a, t);
                    var s = ze, o = dt;
                    Jn(a.type) && (ze = a.stateNode, dt = !1), bn(e, t, a), pr(a.stateNode), ze = s, dt = o;
                    break;
                case 5:
                    Ye || en(a, t);
                case 6:
                    if (s = ze, o = dt, ze = null, bn(e, t, a), ze = s, dt = o, ze !== null) if (dt) try {
                        (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(a.stateNode);
                    } catch (c) {
                        we(a, t, c);
                    }
                    else try {
                        ze.removeChild(a.stateNode);
                    } catch (c) {
                        we(a, t, c);
                    }
                    break;
                case 18:
                    ze !== null && (dt ? (e = ze, cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), ci(e)) : cp(ze, a.stateNode));
                    break;
                case 4:
                    s = ze, o = dt, ze = a.stateNode.containerInfo, dt = !0, bn(e, t, a), ze = s, dt = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Pn(2, a, t), Ye || Pn(4, a, t), bn(e, t, a);
                    break;
                case 1:
                    Ye || (en(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && hd(a, t, s)), bn(e, t, a);
                    break;
                case 21:
                    bn(e, t, a);
                    break;
                case 22:
                    Ye = (s = Ye) || a.memoizedState !== null, bn(e, t, a), Ye = s;
                    break;
                default:
                    bn(e, t, a);
            }
        }
        function bd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
                e = e.dehydrated;
                try {
                    ci(e);
                } catch (a) {
                    we(t, t.return, a);
                }
            }
        }
        function _d(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                ci(e);
            } catch (a) {
                we(t, t.return, a);
            }
        }
        function Wy(e) {
            switch(e.tag){
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new md), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new md), t;
                default:
                    throw Error(l(435, e.tag));
            }
        }
        function Ns(e, t) {
            var a = Wy(e);
            t.forEach(function(s) {
                if (!a.has(s)) {
                    a.add(s);
                    var o = rv.bind(null, e, s);
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
                            if (Jn(y.type)) {
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
                vd(c, m, o), ze = null, dt = !1, c = o.alternate, c !== null && (c.return = null), o.return = null;
            }
            if (t.subtreeFlags & 13886) for(t = t.child; t !== null;)wd(t, e), t = t.sibling;
        }
        var Kt = null;
        function wd(e, t) {
            var a = e.alternate, s = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    pt(t, e), mt(e), s & 4 && (Pn(3, e, e.return), ir(3, e), Pn(5, e, e.return));
                    break;
                case 1:
                    pt(t, e), mt(e), s & 512 && (Ye || a === null || en(a, a.return)), s & 64 && vn && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
                    break;
                case 26:
                    var o = Kt;
                    if (pt(t, e), mt(e), s & 512 && (Ye || a === null || en(a, a.return)), s & 4) {
                        var c = a !== null ? a.memoizedState : null;
                        if (s = e.memoizedState, a === null) if (s === null) if (e.stateNode === null) {
                            e: {
                                s = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch(s){
                                    case "title":
                                        c = o.getElementsByTagName("title")[0], (!c || c[Ni] || c[et] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(s), o.head.insertBefore(c, o.querySelector("head > title"))), it(c, s, a), c[et] = e, Qe(c), s = c;
                                        break e;
                                    case "link":
                                        var m = wp("link", "href", o).get(s + (a.href || ""));
                                        if (m) {
                                            for(var y = 0; y < m.length; y++)if (c = m[y], c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                m.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        c = o.createElement(s), it(c, s, a), o.head.appendChild(c);
                                        break;
                                    case "meta":
                                        if (m = wp("meta", "content", o).get(s + (a.content || ""))) {
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
                                c[et] = e, Qe(c), s = c;
                            }
                            e.stateNode = s;
                        } else Sp(o, e.type, e.stateNode);
                        else e.stateNode = _p(o, s, e.memoizedProps);
                        else c !== s ? (c === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : c.count--, s === null ? Sp(o, e.type, e.stateNode) : _p(o, s, e.memoizedProps)) : s === null && e.stateNode !== null && lu(e, e.memoizedProps, a.memoizedProps);
                    }
                    break;
                case 27:
                    pt(t, e), mt(e), s & 512 && (Ye || a === null || en(a, a.return)), a !== null && s & 4 && lu(e, e.memoizedProps, a.memoizedProps);
                    break;
                case 5:
                    if (pt(t, e), mt(e), s & 512 && (Ye || a === null || en(a, a.return)), e.flags & 32) {
                        o = e.stateNode;
                        try {
                            Ua(o, "");
                        } catch (I) {
                            we(e, e.return, I);
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
                        } catch (I) {
                            we(e, e.return, I);
                        }
                    }
                    break;
                case 3:
                    if (Xs = null, o = Kt, Kt = Ys(t.containerInfo), pt(t, e), Kt = o, mt(e), s & 4 && a !== null && a.memoizedState.isDehydrated) try {
                        ci(t.containerInfo);
                    } catch (I) {
                        we(e, e.return, I);
                    }
                    cu && (cu = !1, Sd(e));
                    break;
                case 4:
                    s = Kt, Kt = Ys(e.stateNode.containerInfo), pt(t, e), mt(e), Kt = s;
                    break;
                case 12:
                    pt(t, e), mt(e);
                    break;
                case 31:
                    pt(t, e), mt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Ns(e, s)));
                    break;
                case 13:
                    pt(t, e), mt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ds = bt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Ns(e, s)));
                    break;
                case 22:
                    o = e.memoizedState !== null;
                    var w = a !== null && a.memoizedState !== null, C = vn, L = Ye;
                    if (vn = C || o, Ye = L || w, pt(t, e), Ye = L, vn = C, mt(e), s & 8192) e: for(t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || w || vn || Ye || _a(e)), a = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                w = a = t;
                                try {
                                    if (c = w.stateNode, o) m = c.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                    else {
                                        y = w.stateNode;
                                        var q = w.memoizedProps.style, j = q != null && q.hasOwnProperty("display") ? q.display : null;
                                        y.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                                    }
                                } catch (I) {
                                    we(w, w.return, I);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                w = t;
                                try {
                                    w.stateNode.nodeValue = o ? "" : w.memoizedProps;
                                } catch (I) {
                                    we(w, w.return, I);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (a === null) {
                                w = t;
                                try {
                                    var D = w.stateNode;
                                    o ? hp(D, !0) : hp(w.stateNode, !1);
                                } catch (I) {
                                    we(w, w.return, I);
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
                        if (dd(s)) {
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
                            a.flags & 32 && (Ua(m, ""), a.flags &= -33);
                            var y = ou(e);
                            js(e, y, m);
                            break;
                        case 3:
                        case 4:
                            var w = a.stateNode.containerInfo, C = ou(e);
                            uu(e, C, w);
                            break;
                        default:
                            throw Error(l(161));
                    }
                } catch (L) {
                    we(e, e.return, L);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Sd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function _n(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)gd(e, t.alternate, t), t = t.sibling;
        }
        function _a(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Pn(4, t, t.return), _a(t);
                        break;
                    case 1:
                        en(t, t.return);
                        var a = t.stateNode;
                        typeof a.componentWillUnmount == "function" && hd(t, t.return, a), _a(t);
                        break;
                    case 27:
                        pr(t.stateNode);
                    case 26:
                    case 5:
                        en(t, t.return), _a(t);
                        break;
                    case 22:
                        t.memoizedState === null && _a(t);
                        break;
                    case 30:
                        _a(t);
                        break;
                    default:
                        _a(t);
                }
                e = e.sibling;
            }
        }
        function wn(e, t, a) {
            for(a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var s = t.alternate, o = e, c = t, m = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        wn(o, c, a), ir(4, c);
                        break;
                    case 1:
                        if (wn(o, c, a), s = c, o = s.stateNode, typeof o.componentDidMount == "function") try {
                            o.componentDidMount();
                        } catch (C) {
                            we(s, s.return, C);
                        }
                        if (s = c, o = s.updateQueue, o !== null) {
                            var y = s.stateNode;
                            try {
                                var w = o.shared.hiddenCallbacks;
                                if (w !== null) for(o.shared.hiddenCallbacks = null, o = 0; o < w.length; o++)Zh(w[o], y);
                            } catch (C) {
                                we(s, s.return, C);
                            }
                        }
                        a && m & 64 && cd(c), rr(c, c.return);
                        break;
                    case 27:
                        pd(c);
                    case 26:
                    case 5:
                        wn(o, c, a), a && s === null && m & 4 && fd(c), rr(c, c.return);
                        break;
                    case 12:
                        wn(o, c, a);
                        break;
                    case 31:
                        wn(o, c, a), a && m & 4 && bd(o, c);
                        break;
                    case 13:
                        wn(o, c, a), a && m & 4 && _d(o, c);
                        break;
                    case 22:
                        c.memoizedState === null && wn(o, c, a), rr(c, c.return);
                        break;
                    case 30:
                        break;
                    default:
                        wn(o, c, a);
                }
                t = t.sibling;
            }
        }
        function hu(e, t) {
            var a = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ki(a));
        }
        function fu(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ki(e));
        }
        function Yt(e, t, a, s) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ed(e, t, a, s), t = t.sibling;
        }
        function Ed(e, t, a, s) {
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
                    Yt(e, t, a, s), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ki(e)));
                    break;
                case 12:
                    if (o & 2048) {
                        Yt(e, t, a, s), e = t.stateNode;
                        try {
                            var c = t.memoizedProps, m = c.id, y = c.onPostCommit;
                            typeof y == "function" && y(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (w) {
                            we(t, t.return, w);
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
                var c = e, m = t, y = a, w = s, C = m.flags;
                switch(m.tag){
                    case 0:
                    case 11:
                    case 15:
                        Fa(c, m, y, w, o), ir(8, m);
                        break;
                    case 23:
                        break;
                    case 22:
                        var L = m.stateNode;
                        m.memoizedState !== null ? L._visibility & 2 ? Fa(c, m, y, w, o) : sr(c, m) : (L._visibility |= 2, Fa(c, m, y, w, o)), o && C & 2048 && hu(m.alternate, m);
                        break;
                    case 24:
                        Fa(c, m, y, w, o), o && C & 2048 && fu(m.alternate, m);
                        break;
                    default:
                        Fa(c, m, y, w, o);
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
            if (e.subtreeFlags & lr) for(e = e.child; e !== null;)Td(e, t, a), e = e.sibling;
        }
        function Td(e, t, a) {
            switch(e.tag){
                case 26:
                    ei(e, t, a), e.flags & lr && e.memoizedState !== null && Lv(a, Kt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    ei(e, t, a);
                    break;
                case 3:
                case 4:
                    var s = Kt;
                    Kt = Ys(e.stateNode.containerInfo), ei(e, t, a), Kt = s;
                    break;
                case 22:
                    e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = lr, lr = 16777216, ei(e, t, a), lr = s) : ei(e, t, a));
                    break;
                default:
                    ei(e, t, a);
            }
        }
        function Ad(e) {
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
                    Ze = s, Rd(s, e);
                }
                Ad(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)xd(e), e = e.sibling;
        }
        function xd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    or(e), e.flags & 2048 && Pn(9, e, e.return);
                    break;
                case 3:
                    or(e);
                    break;
                case 12:
                    or(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Us(e)) : or(e);
                    break;
                default:
                    or(e);
            }
        }
        function Us(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var a = 0; a < t.length; a++){
                    var s = t[a];
                    Ze = s, Rd(s, e);
                }
                Ad(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        Pn(8, t, t.return), Us(t);
                        break;
                    case 22:
                        a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Us(t));
                        break;
                    default:
                        Us(t);
                }
                e = e.sibling;
            }
        }
        function Rd(e, t) {
            for(; Ze !== null;){
                var a = Ze;
                switch(a.tag){
                    case 0:
                    case 11:
                    case 15:
                        Pn(8, a, t);
                        break;
                    case 23:
                    case 22:
                        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                            var s = a.memoizedState.cachePool.pool;
                            s != null && s.refCount++;
                        }
                        break;
                    case 24:
                        Ki(a.memoizedState.cache);
                }
                if (s = a.child, s !== null) s.return = a, Ze = s;
                else e: for(a = e; Ze !== null;){
                    s = Ze;
                    var o = s.sibling, c = s.return;
                    if (yd(s), s === a) {
                        Ze = null;
                        break e;
                    }
                    if (o !== null) {
                        o.return = c, Ze = o;
                        break e;
                    }
                    Ze = c;
                }
            }
        }
        var Qy = {
            getCacheForType: function(e) {
                var t = nt(Ge), a = t.data.get(e);
                return a === void 0 && (a = e(), t.data.set(e, a)), a;
            },
            cacheSignal: function() {
                return nt(Ge).controller.signal;
            }
        }, Zy = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Oe = null, ce = null, fe = 0, _e = 0, xt = null, Gn = !1, ti = !1, du = !1, Sn = 0, He = 0, Vn = 0, wa = 0, pu = 0, Rt = 0, ni = 0, ur = null, gt = null, mu = !1, Ds = 0, Od = 0, zs = 1 / 0, Ls = null, Kn = null, We = 0, Yn = null, ai = null, En = 0, gu = 0, yu = null, Cd = null, cr = 0, vu = null;
        function Ot() {
            return (ye & 2) !== 0 && fe !== 0 ? fe & -fe : M.T !== null ? Tu() : Vc();
        }
        function kd() {
            if (Rt === 0) if ((fe & 536870912) === 0 || pe) {
                var e = Vr;
                Vr <<= 1, (Vr & 3932160) === 0 && (Vr = 262144), Rt = e;
            } else Rt = 536870912;
            return e = Tt.current, e !== null && (e.flags |= 32), Rt;
        }
        function yt(e, t, a) {
            (e === Oe && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (ii(e, 0), In(e, fe, Rt, !1)), ji(e, a), ((ye & 2) === 0 || e !== Oe) && (e === Oe && ((ye & 2) === 0 && (wa |= a), He === 4 && In(e, fe, Rt, !1)), tn(e));
        }
        function jd(e, t, a) {
            if ((ye & 6) !== 0) throw Error(l(327));
            var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ki(e, t), o = s ? tv(e, t) : _u(e, t, !0), c = s;
            do {
                if (o === 0) {
                    ti && !s && In(e, t, 0, !1);
                    break;
                } else {
                    if (a = e.current.alternate, c && !Fy(a)) {
                        o = _u(e, t, !1), c = !1;
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
                                var w = y.current.memoizedState.isDehydrated;
                                if (w && (ii(y, m).flags |= 256), m = _u(y, m, !1), m !== 2) {
                                    if (du && !w) {
                                        y.errorRecoveryDisabledLanes |= c, wa |= c, o = 4;
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
                        ii(e, 0), In(e, t, 0, !0);
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
                                In(s, t, Rt, !Gn);
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
                        if ((t & 62914560) === t && (o = Ds + 300 - bt(), 10 < o)) {
                            if (In(s, t, Rt, !Gn), Yr(s, 0, !0) !== 0) break e;
                            En = t, s.timeoutHandle = op(Nd.bind(null, s, a, gt, Ls, mu, t, Rt, wa, ni, Gn, c, "Throttled", -0, 0), o);
                            break e;
                        }
                        Nd(s, a, gt, Ls, mu, t, Rt, wa, ni, Gn, c, null, -0, 0);
                    }
                }
                break;
            }while (!0);
            tn(e);
        }
        function Nd(e, t, a, s, o, c, m, y, w, C, L, q, j, D) {
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
                }, Td(t, c, q);
                var I = (c & 62914560) === c ? Ds - bt() : (c & 4194048) === c ? Od - bt() : 0;
                if (I = Mv(q, I), I !== null) {
                    En = c, e.cancelPendingCommit = I(qd.bind(null, e, t, c, a, s, o, m, y, w, L, q, null, j, D)), In(e, c, m, !C);
                    return;
                }
            }
            qd(e, t, c, a, s, o, m, y, w);
        }
        function Fy(e) {
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
        function In(e, t, a, s) {
            t &= ~pu, t &= ~wa, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
            for(var o = t; 0 < o;){
                var c = 31 - wt(o), m = 1 << c;
                s[c] = -1, o &= ~m;
            }
            a !== 0 && $c(e, a, t);
        }
        function Ms() {
            return (ye & 6) === 0 ? (hr(0), !1) : !0;
        }
        function bu() {
            if (ce !== null) {
                if (_e === 0) var e = ce.return;
                else e = ce, fn = fa = null, zo(e), Xa = null, Ii = 0, e = ce;
                for(; e !== null;)ud(e.alternate, e), e = e.return;
                ce = null;
            }
        }
        function ii(e, t) {
            var a = e.timeoutHandle;
            a !== -1 && (e.timeoutHandle = -1, bv(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), En = 0, bu(), Oe = e, ce = a = cn(e.current, null), fe = t, _e = 0, xt = null, Gn = !1, ti = ki(e, t), du = !1, ni = Rt = pu = wa = Vn = He = 0, gt = ur = null, mu = !1, (t & 8) !== 0 && (t |= t & 32);
            var s = e.entangledLanes;
            if (s !== 0) for(e = e.entanglements, s &= t; 0 < s;){
                var o = 31 - wt(s), c = 1 << o;
                t |= e[o], s &= ~c;
            }
            return Sn = t, is(), a;
        }
        function Ud(e, t) {
            le = null, M.H = tr, t === Ia || t === fs ? (t = Xh(), _e = 3) : t === Eo ? (t = Xh(), _e = 4) : _e = t === Qo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, ce === null && (He = 1, xs(e, Lt(t, e.current)));
        }
        function Dd() {
            var e = Tt.current;
            return e === null ? !0 : (fe & 4194048) === fe ? qt === null : (fe & 62914560) === fe || (fe & 536870912) !== 0 ? e === qt : !1;
        }
        function zd() {
            var e = M.H;
            return M.H = tr, e === null ? tr : e;
        }
        function Ld() {
            var e = M.A;
            return M.A = Qy, e;
        }
        function Hs() {
            He = 4, Gn || (fe & 4194048) !== fe && Tt.current !== null || (ti = !0), (Vn & 134217727) === 0 && (wa & 134217727) === 0 || Oe === null || In(Oe, fe, Rt, !1);
        }
        function _u(e, t, a) {
            var s = ye;
            ye |= 2;
            var o = zd(), c = Ld();
            (Oe !== e || fe !== t) && (Ls = null, ii(e, t)), t = !1;
            var m = He;
            e: do try {
                if (_e !== 0 && ce !== null) {
                    var y = ce, w = xt;
                    switch(_e){
                        case 8:
                            bu(), m = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Tt.current === null && (t = !0);
                            var C = _e;
                            if (_e = 0, xt = null, ri(e, y, w, C), a && ti) {
                                m = 0;
                                break e;
                            }
                            break;
                        default:
                            C = _e, _e = 0, xt = null, ri(e, y, w, C);
                    }
                }
                ev(), m = He;
                break;
            } catch (L) {
                Ud(e, L);
            }
            while (!0);
            return t && e.shellSuspendCounter++, fn = fa = null, ye = s, M.H = o, M.A = c, ce === null && (Oe = null, fe = 0, is()), m;
        }
        function ev() {
            for(; ce !== null;)Md(ce);
        }
        function tv(e, t) {
            var a = ye;
            ye |= 2;
            var s = zd(), o = Ld();
            Oe !== e || fe !== t ? (Ls = null, zs = bt() + 500, ii(e, t)) : ti = ki(e, t);
            e: do try {
                if (_e !== 0 && ce !== null) {
                    t = ce;
                    var c = xt;
                    t: switch(_e){
                        case 1:
                            _e = 0, xt = null, ri(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (Yh(c)) {
                                _e = 0, xt = null, Hd(t);
                                break;
                            }
                            t = function() {
                                _e !== 2 && _e !== 9 || Oe !== e || (_e = 7), tn(e);
                            }, c.then(t, t);
                            break e;
                        case 3:
                            _e = 7;
                            break e;
                        case 4:
                            _e = 5;
                            break e;
                        case 7:
                            Yh(c) ? (_e = 0, xt = null, Hd(t)) : (_e = 0, xt = null, ri(e, t, c, 7));
                            break;
                        case 5:
                            var m = null;
                            switch(ce.tag){
                                case 26:
                                    m = ce.memoizedState;
                                case 5:
                                case 27:
                                    var y = ce;
                                    if (m ? Ep(m) : y.stateNode.complete) {
                                        _e = 0, xt = null;
                                        var w = y.sibling;
                                        if (w !== null) ce = w;
                                        else {
                                            var C = y.return;
                                            C !== null ? (ce = C, Bs(C)) : ce = null;
                                        }
                                        break t;
                                    }
                            }
                            _e = 0, xt = null, ri(e, t, c, 5);
                            break;
                        case 6:
                            _e = 0, xt = null, ri(e, t, c, 6);
                            break;
                        case 8:
                            bu(), He = 6;
                            break e;
                        default:
                            throw Error(l(462));
                    }
                }
                nv();
                break;
            } catch (L) {
                Ud(e, L);
            }
            while (!0);
            return fn = fa = null, M.H = s, M.A = o, ye = a, ce !== null ? 0 : (Oe = null, fe = 0, is(), He);
        }
        function nv() {
            for(; ce !== null && !Ag();)Md(ce);
        }
        function Md(e) {
            var t = ld(e.alternate, e, Sn);
            e.memoizedProps = e.pendingProps, t === null ? Bs(e) : ce = t;
        }
        function Hd(e) {
            var t = e, a = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = td(a, t, t.pendingProps, t.type, void 0, fe);
                    break;
                case 11:
                    t = td(a, t, t.pendingProps, t.type.render, t.ref, fe);
                    break;
                case 5:
                    zo(t);
                default:
                    ud(a, t), t = ce = zh(t, Sn), t = ld(a, t, Sn);
            }
            e.memoizedProps = e.pendingProps, t === null ? Bs(e) : ce = t;
        }
        function ri(e, t, a, s) {
            fn = fa = null, zo(t), Xa = null, Ii = 0;
            var o = t.return;
            try {
                if (Vy(e, o, t, a, fe)) {
                    He = 1, xs(e, Lt(a, e.current)), ce = null;
                    return;
                }
            } catch (c) {
                if (o !== null) throw ce = o, c;
                He = 1, xs(e, Lt(a, e.current)), ce = null;
                return;
            }
            t.flags & 32768 ? (pe || s === 1 ? e = !0 : ti || (fe & 536870912) !== 0 ? e = !1 : (Gn = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Tt.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Bd(t, e)) : Bs(t);
        }
        function Bs(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Bd(t, Gn);
                    return;
                }
                e = t.return;
                var a = Iy(t.alternate, t, Sn);
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
            He === 0 && (He = 5);
        }
        function Bd(e, t) {
            do {
                var a = Xy(e.alternate, e);
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
            He = 6, ce = null;
        }
        function qd(e, t, a, s, o, c, m, y, w) {
            e.cancelPendingCommit = null;
            do qs();
            while (We !== 0);
            if ((ye & 6) !== 0) throw Error(l(327));
            if (t !== null) {
                if (t === e.current) throw Error(l(177));
                if (c = t.lanes | t.childLanes, c |= lo, zg(e, a, c, m, y, w), e === Oe && (ce = Oe = null, fe = 0), ai = t, Yn = e, En = a, gu = c, yu = o, Cd = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sv(Pr, function() {
                    return Kd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
                    s = M.T, M.T = null, o = G.p, G.p = 2, m = ye, ye |= 4;
                    try {
                        Jy(e, t, a);
                    } finally{
                        ye = m, G.p = o, M.T = s;
                    }
                }
                We = 1, $d(), Pd(), Gd();
            }
        }
        function $d() {
            if (We === 1) {
                We = 0;
                var e = Yn, t = ai, a = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || a) {
                    a = M.T, M.T = null;
                    var s = G.p;
                    G.p = 2;
                    var o = ye;
                    ye |= 4;
                    try {
                        wd(t, e);
                        var c = Nu, m = xh(e.containerInfo), y = c.focusedElem, w = c.selectionRange;
                        if (m !== y && y && y.ownerDocument && Ah(y.ownerDocument.documentElement, y)) {
                            if (w !== null && no(y)) {
                                var C = w.start, L = w.end;
                                if (L === void 0 && (L = C), "selectionStart" in y) y.selectionStart = C, y.selectionEnd = Math.min(L, y.value.length);
                                else {
                                    var q = y.ownerDocument || document, j = q && q.defaultView || window;
                                    if (j.getSelection) {
                                        var D = j.getSelection(), I = y.textContent.length, ee = Math.min(w.start, I), xe = w.end === void 0 ? ee : Math.min(w.end, I);
                                        !D.extend && ee > xe && (m = xe, xe = ee, ee = m);
                                        var R = Th(y, ee), T = Th(y, xe);
                                        if (R && T && (D.rangeCount !== 1 || D.anchorNode !== R.node || D.anchorOffset !== R.offset || D.focusNode !== T.node || D.focusOffset !== T.offset)) {
                                            var O = q.createRange();
                                            O.setStart(R.node, R.offset), D.removeAllRanges(), ee > xe ? (D.addRange(O), D.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), D.addRange(O));
                                        }
                                    }
                                }
                            }
                            for(q = [], D = y; D = D.parentNode;)D.nodeType === 1 && q.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
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
                e.current = t, We = 2;
            }
        }
        function Pd() {
            if (We === 2) {
                We = 0;
                var e = Yn, t = ai, a = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || a) {
                    a = M.T, M.T = null;
                    var s = G.p;
                    G.p = 2;
                    var o = ye;
                    ye |= 4;
                    try {
                        gd(e, t.alternate, t);
                    } finally{
                        ye = o, G.p = s, M.T = a;
                    }
                }
                We = 3;
            }
        }
        function Gd() {
            if (We === 4 || We === 3) {
                We = 0, xg();
                var e = Yn, t = ai, a = En, s = Cd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, ai = Yn = null, Vd(e, e.pendingLanes));
                var o = e.pendingLanes;
                if (o === 0 && (Kn = null), Ml(a), t = t.stateNode, _t && typeof _t.onCommitFiberRoot == "function") try {
                    _t.onCommitFiberRoot(Ci, t, void 0, (t.current.flags & 128) === 128);
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
        function Vd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ki(t)));
        }
        function qs() {
            return $d(), Pd(), Gd(), Kd();
        }
        function Kd() {
            if (We !== 5) return !1;
            var e = Yn, t = gu;
            gu = 0;
            var a = Ml(En), s = M.T, o = G.p;
            try {
                G.p = 32 > a ? 32 : a, M.T = null, a = yu, yu = null;
                var c = Yn, m = En;
                if (We = 0, ai = Yn = null, En = 0, (ye & 6) !== 0) throw Error(l(331));
                var y = ye;
                if (ye |= 4, xd(c.current), Ed(c, c.current, m, a), ye = y, hr(0, !1), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                    _t.onPostCommitFiberRoot(Ci, c);
                } catch  {}
                return !0;
            } finally{
                G.p = o, M.T = s, Vd(e, t);
            }
        }
        function Yd(e, t, a) {
            t = Lt(a, t), t = Wo(e.stateNode, t, 2), e = Bn(e, t, 2), e !== null && (ji(e, 2), tn(e));
        }
        function we(e, t, a) {
            if (e.tag === 3) Yd(e, e, a);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Yd(t, e, a);
                    break;
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Kn === null || !Kn.has(s))) {
                        e = Lt(a, e), a = If(2), s = Bn(t, a, 2), s !== null && (Xf(a, s, t, e), ji(s, 2), tn(s));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function wu(e, t, a) {
            var s = e.pingCache;
            if (s === null) {
                s = e.pingCache = new Zy;
                var o = new Set;
                s.set(t, o);
            } else o = s.get(t), o === void 0 && (o = new Set, s.set(t, o));
            o.has(a) || (du = !0, o.add(a), e = av.bind(null, e, t, a), t.then(e, e));
        }
        function av(e, t, a) {
            var s = e.pingCache;
            s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Oe === e && (fe & a) === a && (He === 4 || He === 3 && (fe & 62914560) === fe && 300 > bt() - Ds ? (ye & 2) === 0 && ii(e, 0) : pu |= a, ni === fe && (ni = 0)), tn(e);
        }
        function Id(e, t) {
            t === 0 && (t = qc()), e = ua(e, t), e !== null && (ji(e, t), tn(e));
        }
        function iv(e) {
            var t = e.memoizedState, a = 0;
            t !== null && (a = t.retryLane), Id(e, a);
        }
        function rv(e, t) {
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
            s !== null && s.delete(t), Id(e, a);
        }
        function sv(e, t) {
            return Ul(e, t);
        }
        var $s = null, si = null, Su = !1, Ps = !1, Eu = !1, Xn = 0;
        function tn(e) {
            e !== si && e.next === null && (si === null ? $s = si = e : si = si.next = e), Ps = !0, Su || (Su = !0, ov());
        }
        function hr(e, t) {
            if (!Eu && Ps) {
                Eu = !0;
                do for(var a = !1, s = $s; s !== null;){
                    if (e !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0) var c = 0;
                        else {
                            var m = s.suspendedLanes, y = s.pingedLanes;
                            c = (1 << 31 - wt(42 | e) + 1) - 1, c &= o & ~(m & ~y), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0;
                        }
                        c !== 0 && (a = !0, Qd(s, c));
                    } else c = fe, c = Yr(s, s === Oe ? c : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (c & 3) === 0 || ki(s, c) || (a = !0, Qd(s, c));
                    s = s.next;
                }
                while (a);
                Eu = !1;
            }
        }
        function lv() {
            Xd();
        }
        function Xd() {
            Ps = Su = !1;
            var e = 0;
            Xn !== 0 && vv() && (e = Xn);
            for(var t = bt(), a = null, s = $s; s !== null;){
                var o = s.next, c = Jd(s, t);
                c === 0 ? (s.next = null, a === null ? $s = o : a.next = o, o === null && (si = a)) : (a = s, (e !== 0 || (c & 3) !== 0) && (Ps = !0)), s = o;
            }
            We !== 0 && We !== 5 || hr(e), Xn !== 0 && (Xn = 0);
        }
        function Jd(e, t) {
            for(var a = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;){
                var m = 31 - wt(c), y = 1 << m, w = o[m];
                w === -1 ? ((y & a) === 0 || (y & s) !== 0) && (o[m] = Dg(y, t)) : w <= t && (e.expiredLanes |= y), c &= ~y;
            }
            if (t = Oe, a = fe, a = Yr(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, a === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && Dl(s), e.callbackNode = null, e.callbackPriority = 0;
            if ((a & 3) === 0 || ki(e, a)) {
                if (t = a & -a, t === e.callbackPriority) return t;
                switch(s !== null && Dl(s), Ml(a)){
                    case 2:
                    case 8:
                        a = Hc;
                        break;
                    case 32:
                        a = Pr;
                        break;
                    case 268435456:
                        a = Bc;
                        break;
                    default:
                        a = Pr;
                }
                return s = Wd.bind(null, e), a = Ul(a, s), e.callbackPriority = t, e.callbackNode = a, t;
            }
            return s !== null && s !== null && Dl(s), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Wd(e, t) {
            if (We !== 0 && We !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var a = e.callbackNode;
            if (qs() && e.callbackNode !== a) return null;
            var s = fe;
            return s = Yr(e, e === Oe ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (jd(e, s, t), Jd(e, bt()), e.callbackNode != null && e.callbackNode === a ? Wd.bind(null, e) : null);
        }
        function Qd(e, t) {
            if (qs()) return null;
            jd(e, t, !0);
        }
        function ov() {
            _v(function() {
                (ye & 6) !== 0 ? Ul(Mc, lv) : Xd();
            });
        }
        function Tu() {
            if (Xn === 0) {
                var e = Ka;
                e === 0 && (e = Gr, Gr <<= 1, (Gr & 261888) === 0 && (Gr = 256)), Xn = e;
            }
            return Xn;
        }
        function Zd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Wr("" + e);
        }
        function Fd(e, t) {
            var a = t.ownerDocument.createElement("input");
            return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
        }
        function uv(e, t, a, s, o) {
            if (t === "submit" && a && a.stateNode === o) {
                var c = Zd((o[ht] || null).action), m = s.submitter;
                m && (t = (t = m[ht] || null) ? Zd(t.formAction) : m.getAttribute("formAction"), t !== null && (c = t, m = null));
                var y = new es("action", "action", null, s, o);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (s.defaultPrevented) {
                                    if (Xn !== 0) {
                                        var w = m ? Fd(o, m) : new FormData(o);
                                        Vo(a, {
                                            pending: !0,
                                            data: w,
                                            method: o.method,
                                            action: c
                                        }, null, w);
                                    }
                                } else typeof c == "function" && (y.preventDefault(), w = m ? Fd(o, m) : new FormData(o), Vo(a, {
                                    pending: !0,
                                    data: w,
                                    method: o.method,
                                    action: c
                                }, c, w));
                            },
                            currentTarget: o
                        }
                    ]
                });
            }
        }
        for(var Au = 0; Au < so.length; Au++){
            var xu = so[Au], cv = xu.toLowerCase(), hv = xu[0].toUpperCase() + xu.slice(1);
            Vt(cv, "on" + hv);
        }
        Vt(Ch, "onAnimationEnd"), Vt(kh, "onAnimationIteration"), Vt(jh, "onAnimationStart"), Vt("dblclick", "onDoubleClick"), Vt("focusin", "onFocus"), Vt("focusout", "onBlur"), Vt(Ry, "onTransitionRun"), Vt(Oy, "onTransitionStart"), Vt(Cy, "onTransitionCancel"), Vt(Nh, "onTransitionEnd"), ja("onMouseEnter", [
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
        var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fr));
        function ep(e, t) {
            t = (t & 4) !== 0;
            for(var a = 0; a < e.length; a++){
                var s = e[a], o = s.event;
                s = s.listeners;
                e: {
                    var c = void 0;
                    if (t) for(var m = s.length - 1; 0 <= m; m--){
                        var y = s[m], w = y.instance, C = y.currentTarget;
                        if (y = y.listener, w !== c && o.isPropagationStopped()) break e;
                        c = y, o.currentTarget = C;
                        try {
                            c(o);
                        } catch (L) {
                            as(L);
                        }
                        o.currentTarget = null, c = w;
                    }
                    else for(m = 0; m < s.length; m++){
                        if (y = s[m], w = y.instance, C = y.currentTarget, y = y.listener, w !== c && o.isPropagationStopped()) break e;
                        c = y, o.currentTarget = C;
                        try {
                            c(o);
                        } catch (L) {
                            as(L);
                        }
                        o.currentTarget = null, c = w;
                    }
                }
            }
        }
        function he(e, t) {
            var a = t[Hl];
            a === void 0 && (a = t[Hl] = new Set);
            var s = e + "__bubble";
            a.has(s) || (tp(t, e, 2, !1), a.add(s));
        }
        function Ru(e, t, a) {
            var s = 0;
            t && (s |= 4), tp(a, e, s, t);
        }
        var Gs = "_reactListening" + Math.random().toString(36).slice(2);
        function Ou(e) {
            if (!e[Gs]) {
                e[Gs] = !0, Ic.forEach(function(a) {
                    a !== "selectionchange" && (fv.has(a) || Ru(a, !1, e), Ru(a, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Gs] || (t[Gs] = !0, Ru("selectionchange", !1, t));
            }
        }
        function tp(e, t, a, s) {
            switch(kp(t)){
                case 2:
                    var o = qv;
                    break;
                case 8:
                    o = $v;
                    break;
                default:
                    o = Gu;
            }
            a = o.bind(null, t, a, e), o = void 0, !Il || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, a, {
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
                        var w = m.tag;
                        if ((w === 3 || w === 4) && m.stateNode.containerInfo === o) return;
                        m = m.return;
                    }
                    for(; y !== null;){
                        if (m = Oa(y), m === null) return;
                        if (w = m.tag, w === 5 || w === 6 || w === 26 || w === 27) {
                            s = c = m;
                            continue e;
                        }
                        y = y.parentNode;
                    }
                }
                s = s.return;
            }
            rh(function() {
                var C = c, L = Kl(a), q = [];
                e: {
                    var j = Uh.get(e);
                    if (j !== void 0) {
                        var D = es, I = e;
                        switch(e){
                            case "keypress":
                                if (Zr(a) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = ry;
                                break;
                            case "focusin":
                                I = "focus", D = Ql;
                                break;
                            case "focusout":
                                I = "blur", D = Ql;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                D = Ql;
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
                                D = oh;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = Ig;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = oy;
                                break;
                            case Ch:
                            case kh:
                            case jh:
                                D = Wg;
                                break;
                            case Nh:
                                D = cy;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = Kg;
                                break;
                            case "wheel":
                                D = fy;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = Zg;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = ch;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = py;
                        }
                        var ee = (t & 4) !== 0, xe = !ee && (e === "scroll" || e === "scrollend"), R = ee ? j !== null ? j + "Capture" : null : j;
                        ee = [];
                        for(var T = C, O; T !== null;){
                            var H = T;
                            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || R === null || (H = Di(T, R), H != null && ee.push(dr(T, H, O))), xe) break;
                            T = T.return;
                        }
                        0 < ee.length && (j = new D(j, I, null, a, L), q.push({
                            event: j,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (j = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", j && a !== Vl && (I = a.relatedTarget || a.fromElement) && (Oa(I) || I[Ra])) break e;
                        if ((D || j) && (j = L.window === L ? L : (j = L.ownerDocument) ? j.defaultView || j.parentWindow : window, D ? (I = a.relatedTarget || a.toElement, D = C, I = I ? Oa(I) : null, I !== null && (xe = h(I), ee = I.tag, I !== xe || ee !== 5 && ee !== 27 && ee !== 6) && (I = null)) : (D = null, I = C), D !== I)) {
                            if (ee = oh, H = "onMouseLeave", R = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ee = ch, H = "onPointerLeave", R = "onPointerEnter", T = "pointer"), xe = D == null ? j : Ui(D), O = I == null ? j : Ui(I), j = new ee(H, T + "leave", D, a, L), j.target = xe, j.relatedTarget = O, H = null, Oa(L) === C && (ee = new ee(R, T + "enter", I, a, L), ee.target = O, ee.relatedTarget = xe, H = ee), xe = H, D && I) t: {
                                for(ee = dv, R = D, T = I, O = 0, H = R; H; H = ee(H))O++;
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
                            D !== null && np(q, j, D, ee, !1), I !== null && xe !== null && np(q, xe, I, ee, !0);
                        }
                    }
                    e: {
                        if (j = C ? Ui(C) : window, D = j.nodeName && j.nodeName.toLowerCase(), D === "select" || D === "input" && j.type === "file") var me = vh;
                        else if (gh(j)) if (bh) me = Ty;
                        else {
                            me = Sy;
                            var W = wy;
                        }
                        else D = j.nodeName, !D || D.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? C && Gl(C.elementType) && (me = vh) : me = Ey;
                        if (me && (me = me(e, C))) {
                            yh(q, me, a, L);
                            break e;
                        }
                        W && W(e, j, C), e === "focusout" && C && j.type === "number" && C.memoizedProps.value != null && Pl(j, "number", j.value);
                    }
                    switch(W = C ? Ui(C) : window, e){
                        case "focusin":
                            (gh(W) || W.contentEditable === "true") && (Ma = W, ao = C, Pi = null);
                            break;
                        case "focusout":
                            Pi = ao = Ma = null;
                            break;
                        case "mousedown":
                            io = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            io = !1, Rh(q, a, L);
                            break;
                        case "selectionchange":
                            if (xy) break;
                        case "keydown":
                        case "keyup":
                            Rh(q, a, L);
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
                    else La ? ph(e, a) && (de = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (de = "onCompositionStart");
                    de && (hh && a.locale !== "ko" && (La || de !== "onCompositionStart" ? de === "onCompositionEnd" && La && (oe = sh()) : (Nn = L, Xl = "value" in Nn ? Nn.value : Nn.textContent, La = !0)), W = Vs(C, de), 0 < W.length && (de = new uh(de, e, null, a, L), q.push({
                        event: de,
                        listeners: W
                    }), oe ? de.data = oe : (oe = mh(a), oe !== null && (de.data = oe)))), (oe = gy ? yy(e, a) : vy(e, a)) && (de = Vs(C, "onBeforeInput"), 0 < de.length && (W = new uh("onBeforeInput", "beforeinput", null, a, L), q.push({
                        event: W,
                        listeners: de
                    }), W.data = oe)), uv(q, e, C, a, L);
                }
                ep(q, t);
            });
        }
        function dr(e, t, a) {
            return {
                instance: e,
                listener: t,
                currentTarget: a
            };
        }
        function Vs(e, t) {
            for(var a = t + "Capture", s = []; e !== null;){
                var o = e, c = o.stateNode;
                if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = Di(e, a), o != null && s.unshift(dr(e, o, c)), o = Di(e, t), o != null && s.push(dr(e, o, c))), e.tag === 3) return s;
                e = e.return;
            }
            return [];
        }
        function dv(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function np(e, t, a, s, o) {
            for(var c = t._reactName, m = []; a !== null && a !== s;){
                var y = a, w = y.alternate, C = y.stateNode;
                if (y = y.tag, w !== null && w === s) break;
                y !== 5 && y !== 26 && y !== 27 || C === null || (w = C, o ? (C = Di(a, c), C != null && m.unshift(dr(a, C, w))) : o || (C = Di(a, c), C != null && m.push(dr(a, C, w)))), a = a.return;
            }
            m.length !== 0 && e.push({
                event: t,
                listeners: m
            });
        }
        var pv = /\r\n?/g, mv = /\u0000|\uFFFD/g;
        function ap(e) {
            return (typeof e == "string" ? e : "" + e).replace(pv, `
`).replace(mv, "");
        }
        function ip(e, t) {
            return t = ap(t), ap(e) === t;
        }
        function Ae(e, t, a, s, o, c) {
            switch(a){
                case "children":
                    typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Ua(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Ua(e, "" + s);
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
                    ah(e, s, c);
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
                    s = Wr("" + s), e.setAttribute(a, s);
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
                    s = Wr("" + s), e.setAttribute(a, s);
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
                    a = Wr("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
                    he("beforetoggle", e), he("toggle", e), Ir(e, "popover", s);
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
                    Ir(e, "is", s);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Gg.get(a) || a, Ir(e, a, s));
            }
        }
        function ku(e, t, a, s, o, c) {
            switch(a){
                case "style":
                    ah(e, s, c);
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
                    typeof s == "string" ? Ua(e, s) : (typeof s == "number" || typeof s == "bigint") && Ua(e, "" + s);
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
                    if (!Xc.hasOwnProperty(a)) e: {
                        if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), c = e[ht] || null, c = c != null ? c[a] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof s == "function")) {
                            typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, o);
                            break e;
                        }
                        a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Ir(e, a, s);
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
                    var y = c = m = o = null, w = null, C = null;
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
                                w = L;
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
                    Fc(e, c, y, w, C, m, o, !1);
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
                    th(e, s, o, c);
                    return;
                case "option":
                    for(w in a)a.hasOwnProperty(w) && (s = a[w], s != null) && (w === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Ae(e, t, w, s, a, null));
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
        function gv(e, t, a, s) {
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
                    var o = null, c = null, m = null, y = null, w = null, C = null, L = null;
                    for(D in a){
                        var q = a[D];
                        if (a.hasOwnProperty(D) && q != null) switch(D){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                w = q;
                            default:
                                s.hasOwnProperty(D) || Ae(e, t, D, null, s, q);
                        }
                    }
                    for(var j in s){
                        var D = s[j];
                        if (q = a[j], s.hasOwnProperty(j) && (D != null || q != null)) switch(j){
                            case "type":
                                c = D;
                                break;
                            case "name":
                                o = D;
                                break;
                            case "checked":
                                C = D;
                                break;
                            case "defaultChecked":
                                L = D;
                                break;
                            case "value":
                                m = D;
                                break;
                            case "defaultValue":
                                y = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(l(137, t));
                                break;
                            default:
                                D !== q && Ae(e, t, j, D, s, q);
                        }
                    }
                    $l(e, m, y, w, C, L, c, o);
                    return;
                case "select":
                    D = m = y = j = null;
                    for(c in a)if (w = a[c], a.hasOwnProperty(c) && w != null) switch(c){
                        case "value":
                            break;
                        case "multiple":
                            D = w;
                        default:
                            s.hasOwnProperty(c) || Ae(e, t, c, null, s, w);
                    }
                    for(o in s)if (c = s[o], w = a[o], s.hasOwnProperty(o) && (c != null || w != null)) switch(o){
                        case "value":
                            j = c;
                            break;
                        case "defaultValue":
                            y = c;
                            break;
                        case "multiple":
                            m = c;
                        default:
                            c !== w && Ae(e, t, o, c, s, w);
                    }
                    t = y, a = m, s = D, j != null ? Na(e, !!a, j, !1) : !!s != !!a && (t != null ? Na(e, !!a, t, !0) : Na(e, !!a, a ? [] : "", !1));
                    return;
                case "textarea":
                    D = j = null;
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
                            D = o;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(l(91));
                            break;
                        default:
                            o !== c && Ae(e, t, m, o, s, c);
                    }
                    eh(e, j, D);
                    return;
                case "option":
                    for(var I in a)j = a[I], a.hasOwnProperty(I) && j != null && !s.hasOwnProperty(I) && (I === "selected" ? e.selected = !1 : Ae(e, t, I, null, s, j));
                    for(w in s)j = s[w], D = a[w], s.hasOwnProperty(w) && j !== D && (j != null || D != null) && (w === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : Ae(e, t, w, j, s, D));
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
                    for(C in s)if (j = s[C], D = a[C], s.hasOwnProperty(C) && j !== D && (j != null || D != null)) switch(C){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (j != null) throw Error(l(137, t));
                            break;
                        default:
                            Ae(e, t, C, j, s, D);
                    }
                    return;
                default:
                    if (Gl(t)) {
                        for(var xe in a)j = a[xe], a.hasOwnProperty(xe) && j !== void 0 && !s.hasOwnProperty(xe) && ku(e, t, xe, void 0, s, j);
                        for(L in s)j = s[L], D = a[L], !s.hasOwnProperty(L) || j === D || j === void 0 && D === void 0 || ku(e, t, L, j, s, D);
                        return;
                    }
            }
            for(var R in a)j = a[R], a.hasOwnProperty(R) && j != null && !s.hasOwnProperty(R) && Ae(e, t, R, null, s, j);
            for(q in s)j = s[q], D = a[q], !s.hasOwnProperty(q) || j === D || j == null && D == null || Ae(e, t, q, j, s, D);
        }
        function rp(e) {
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
        function yv() {
            if (typeof performance.getEntriesByType == "function") {
                for(var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++){
                    var o = a[s], c = o.transferSize, m = o.initiatorType, y = o.duration;
                    if (c && y && rp(m)) {
                        for(m = 0, y = o.responseEnd, s += 1; s < a.length; s++){
                            var w = a[s], C = w.startTime;
                            if (C > y) break;
                            var L = w.transferSize, q = w.initiatorType;
                            L && rp(q) && (w = w.responseEnd, m += L * (w < y ? 1 : (y - C) / (w - C)));
                        }
                        if (--s, t += 8 * (c + m) / (o.duration / 1e3), e++, 10 < e) break;
                    }
                }
                if (0 < e) return t / e / 1e6;
            }
            return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var ju = null, Nu = null;
        function Ks(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function sp(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function lp(e, t) {
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
        function Uu(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Du = null;
        function vv() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Du ? !1 : (Du = e, !0) : (Du = null, !1);
        }
        var op = typeof setTimeout == "function" ? setTimeout : void 0, bv = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, _v = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(e) {
            return up.resolve(null).then(e).catch(wv);
        } : op;
        function wv(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Jn(e) {
            return e === "head";
        }
        function cp(e, t) {
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
        function hp(e, t) {
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
        function Sv(e, t, a, s) {
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
        function Ev(e, t, a) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = $t(e.nextSibling), e === null)) return null;
            return e;
        }
        function fp(e, t) {
            for(; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lu(e) {
            return e.data === "$?" || e.data === "$~";
        }
        function Mu(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function Tv(e, t) {
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
        function dp(e) {
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
        function pp(e) {
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
        function mp(e, t, a) {
            switch(t = Ks(a), e){
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
        var Pt = new Map, gp = new Set;
        function Ys(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Tn = G.d;
        G.d = {
            f: Av,
            r: xv,
            D: Rv,
            C: Ov,
            L: Cv,
            m: kv,
            X: Nv,
            S: jv,
            M: Uv
        };
        function Av() {
            var e = Tn.f(), t = Ms();
            return e || t;
        }
        function xv(e) {
            var t = Ca(e);
            t !== null && t.tag === 5 && t.type === "form" ? Uf(t) : Tn.r(e);
        }
        var li = typeof document > "u" ? null : document;
        function yp(e, t, a) {
            var s = li;
            if (s && typeof t == "string" && t) {
                var o = Dt(t);
                o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), gp.has(o) || (gp.add(o), e = {
                    rel: e,
                    crossOrigin: a,
                    href: t
                }, s.querySelector(o) === null && (t = s.createElement("link"), it(t, "link", e), Qe(t), s.head.appendChild(t)));
            }
        }
        function Rv(e) {
            Tn.D(e), yp("dns-prefetch", e, null);
        }
        function Ov(e, t) {
            Tn.C(e, t), yp("preconnect", e, t);
        }
        function Cv(e, t, a) {
            Tn.L(e, t, a);
            var s = li;
            if (s && e && t) {
                var o = 'link[rel="preload"][as="' + Dt(t) + '"]';
                t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Dt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Dt(a.imageSizes) + '"]')) : o += '[href="' + Dt(e) + '"]';
                var c = o;
                switch(t){
                    case "style":
                        c = oi(e);
                        break;
                    case "script":
                        c = ui(e);
                }
                Pt.has(c) || (e = v({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                    as: t
                }, a), Pt.set(c, e), s.querySelector(o) !== null || t === "style" && s.querySelector(mr(c)) || t === "script" && s.querySelector(gr(c)) || (t = s.createElement("link"), it(t, "link", e), Qe(t), s.head.appendChild(t)));
            }
        }
        function kv(e, t) {
            Tn.m(e, t);
            var a = li;
            if (a && e) {
                var s = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Dt(s) + '"][href="' + Dt(e) + '"]', c = o;
                switch(s){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        c = ui(e);
                }
                if (!Pt.has(c) && (e = v({
                    rel: "modulepreload",
                    href: e
                }, t), Pt.set(c, e), a.querySelector(o) === null)) {
                    switch(s){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (a.querySelector(gr(c))) return;
                    }
                    s = a.createElement("link"), it(s, "link", e), Qe(s), a.head.appendChild(s);
                }
            }
        }
        function jv(e, t, a) {
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
                        }, a), (a = Pt.get(c)) && Bu(e, a);
                        var w = m = s.createElement("link");
                        Qe(w), it(w, "link", e), w._p = new Promise(function(C, L) {
                            w.onload = C, w.onerror = L;
                        }), w.addEventListener("load", function() {
                            y.loading |= 1;
                        }), w.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, Is(m, t, s);
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
        function Nv(e, t) {
            Tn.X(e, t);
            var a = li;
            if (a && e) {
                var s = ka(a).hoistableScripts, o = ui(e), c = s.get(o);
                c || (c = a.querySelector(gr(o)), c || (e = v({
                    src: e,
                    async: !0
                }, t), (t = Pt.get(o)) && qu(e, t), c = a.createElement("script"), Qe(c), it(c, "link", e), a.head.appendChild(c)), c = {
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
                }, t), (t = Pt.get(o)) && qu(e, t), c = a.createElement("script"), Qe(c), it(c, "link", e), a.head.appendChild(c)), c = {
                    type: "script",
                    instance: c,
                    count: 1,
                    state: null
                }, s.set(o, c));
            }
        }
        function vp(e, t, a, s) {
            var o = (o = ue.current) ? Ys(o) : null;
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
                        }, c.set(e, m), (c = o.querySelector(mr(e))) && !c._p && (m.instance = c, m.state.loading = 5), Pt.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Pt.set(e, a), c || Dv(o, e, a, m.state))), t && s === null) throw Error(l(528, ""));
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
            return 'href="' + Dt(e) + '"';
        }
        function mr(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function bp(e) {
            return v({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function Dv(e, t, a, s) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
                return s.loading |= 1;
            }), t.addEventListener("error", function() {
                return s.loading |= 2;
            }), it(t, "link", a), Qe(t), e.head.appendChild(t));
        }
        function ui(e) {
            return '[src="' + Dt(e) + '"]';
        }
        function gr(e) {
            return "script[async]" + e;
        }
        function _p(e, t, a) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var s = e.querySelector('style[data-href~="' + Dt(a.href) + '"]');
                    if (s) return t.instance = s, Qe(s), s;
                    var o = v({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return s = (e.ownerDocument || e).createElement("style"), Qe(s), it(s, "style", o), Is(s, a.precedence, e), t.instance = s;
                case "stylesheet":
                    o = oi(a.href);
                    var c = e.querySelector(mr(o));
                    if (c) return t.state.loading |= 4, t.instance = c, Qe(c), c;
                    s = bp(a), (o = Pt.get(o)) && Bu(s, o), c = (e.ownerDocument || e).createElement("link"), Qe(c);
                    var m = c;
                    return m._p = new Promise(function(y, w) {
                        m.onload = y, m.onerror = w;
                    }), it(c, "link", s), t.state.loading |= 4, Is(c, a.precedence, e), t.instance = c;
                case "script":
                    return c = ui(a.src), (o = e.querySelector(gr(c))) ? (t.instance = o, Qe(o), o) : (s = a, (o = Pt.get(c)) && (s = v({}, a), qu(s, o)), e = e.ownerDocument || e, o = e.createElement("script"), Qe(o), it(o, "link", s), e.head.appendChild(o), t.instance = o);
                case "void":
                    return null;
                default:
                    throw Error(l(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, Is(s, a.precedence, e));
            return t.instance;
        }
        function Is(e, t, a) {
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
        function wp(e, t, a) {
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
        function Sp(e, t, a) {
            e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
        }
        function zv(e, t, a) {
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
        function Ep(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function Lv(e, t, a, s) {
            if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
                if (a.instance === null) {
                    var o = oi(s.href), c = t.querySelector(mr(o));
                    if (c) {
                        t = c._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Js.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = c, Qe(c);
                        return;
                    }
                    c = t.ownerDocument || t, s = bp(s), (o = Pt.get(o)) && Bu(s, o), c = c.createElement("link"), Qe(c);
                    var m = c;
                    m._p = new Promise(function(y, w) {
                        m.onload = y, m.onerror = w;
                    }), it(c, "link", s), a.instance = c;
                }
                e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Js.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
            }
        }
        var $u = 0;
        function Mv(e, t) {
            return e.stylesheets && e.count === 0 && Qs(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
                var s = setTimeout(function() {
                    if (e.stylesheets && Qs(e, e.stylesheets), e.unsuspend) {
                        var c = e.unsuspend;
                        e.unsuspend = null, c();
                    }
                }, 6e4 + t);
                0 < e.imgBytes && $u === 0 && ($u = 62500 * yv());
                var o = setTimeout(function() {
                    if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qs(e, e.stylesheets), e.unsuspend)) {
                        var c = e.unsuspend;
                        e.unsuspend = null, c();
                    }
                }, (e.imgBytes > $u ? 50 : 800) + t);
                return e.unsuspend = a, function() {
                    e.unsuspend = null, clearTimeout(s), clearTimeout(o);
                };
            } : null;
        }
        function Js() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) Qs(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var Ws = null;
        function Qs(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, Ws = new Map, t.forEach(Hv, e), Ws = null, Js.call(e));
        }
        function Hv(e, t) {
            if (!(t.state.loading & 4)) {
                var a = Ws.get(e);
                if (a) var s = a.get(null);
                else {
                    a = new Map, Ws.set(e, a);
                    for(var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++){
                        var m = o[c];
                        (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), s = m);
                    }
                    s && a.set(null, s);
                }
                o = t.instance, m = o.getAttribute("data-precedence"), c = a.get(m) || s, c === s && a.set(null, o), a.set(m, o), this.count++, s = Js.bind(this), o.addEventListener("load", s), o.addEventListener("error", s), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
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
        function Bv(e, t, a, s, o, c, m, y, w) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.hiddenUpdates = zl(null), this.identifierPrefix = s, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map;
        }
        function Tp(e, t, a, s, o, c, m, y, w, C, L, q) {
            return e = new Bv(e, t, a, m, w, C, L, q, y), t = 1, c === !0 && (t |= 24), c = Et(3, null, null, t), e.current = c, c.stateNode = e, t = _o(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
                element: s,
                isDehydrated: a,
                cache: t
            }, To(c), e;
        }
        function Ap(e) {
            return e ? (e = qa, e) : qa;
        }
        function xp(e, t, a, s, o, c) {
            o = Ap(o), s.context === null ? s.context = o : s.pendingContext = o, s = Hn(t), s.payload = {
                element: a
            }, c = c === void 0 ? null : c, c !== null && (s.callback = c), a = Bn(e, s, t), a !== null && (yt(a, e, t), Ji(a, e, t));
        }
        function Rp(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var a = e.retryLane;
                e.retryLane = a !== 0 && a < t ? a : t;
            }
        }
        function Pu(e, t) {
            Rp(e, t), (e = e.alternate) && Rp(e, t);
        }
        function Op(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = ua(e, 67108864);
                t !== null && yt(t, e, 67108864), Pu(e, 67108864);
            }
        }
        function Cp(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = Ot();
                t = Ll(t);
                var a = ua(e, t);
                a !== null && yt(a, e, t), Pu(e, t);
            }
        }
        var Zs = !0;
        function qv(e, t, a, s) {
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
                var o = Vu(s);
                if (o === null) Cu(e, t, s, Fs, a), jp(e, s);
                else if (Gv(o, e, t, a, s)) s.stopPropagation();
                else if (jp(e, s), t & 4 && -1 < Pv.indexOf(e)) {
                    for(; o !== null;){
                        var c = Ca(o);
                        if (c !== null) switch(c.tag){
                            case 3:
                                if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                    var m = ia(c.pendingLanes);
                                    if (m !== 0) {
                                        var y = c;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; m;){
                                            var w = 1 << 31 - wt(m);
                                            y.entanglements[1] |= w, m &= ~w;
                                        }
                                        tn(c), (ye & 6) === 0 && (zs = bt() + 500, hr(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                y = ua(c, 2), y !== null && yt(y, c, 2), Ms(), Pu(c, 2);
                        }
                        if (c = Vu(s), c === null && Cu(e, t, s, Fs, a), c === o) break;
                        o = c;
                    }
                    o !== null && s.stopPropagation();
                } else Cu(e, t, s, null, a);
            }
        }
        function Vu(e) {
            return e = Kl(e), Ku(e);
        }
        var Fs = null;
        function Ku(e) {
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
        function kp(e) {
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
                    switch(Rg()){
                        case Mc:
                            return 2;
                        case Hc:
                            return 8;
                        case Pr:
                        case Og:
                            return 32;
                        case Bc:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Yu = !1, Wn = null, Qn = null, Zn = null, vr = new Map, br = new Map, Fn = [], Pv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function jp(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Wn = null;
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
        function _r(e, t, a, s, o, c) {
            return e === null || e.nativeEvent !== c ? (e = {
                blockedOn: t,
                domEventName: a,
                eventSystemFlags: s,
                nativeEvent: c,
                targetContainers: [
                    o
                ]
            }, t !== null && (t = Ca(t), t !== null && Op(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
        }
        function Gv(e, t, a, s, o) {
            switch(t){
                case "focusin":
                    return Wn = _r(Wn, e, t, a, s, o), !0;
                case "dragenter":
                    return Qn = _r(Qn, e, t, a, s, o), !0;
                case "mouseover":
                    return Zn = _r(Zn, e, t, a, s, o), !0;
                case "pointerover":
                    var c = o.pointerId;
                    return vr.set(c, _r(vr.get(c) || null, e, t, a, s, o)), !0;
                case "gotpointercapture":
                    return c = o.pointerId, br.set(c, _r(br.get(c) || null, e, t, a, s, o)), !0;
            }
            return !1;
        }
        function Np(e) {
            var t = Oa(e.target);
            if (t !== null) {
                var a = h(t);
                if (a !== null) {
                    if (t = a.tag, t === 13) {
                        if (t = f(a), t !== null) {
                            e.blockedOn = t, Kc(e.priority, function() {
                                Cp(a);
                            });
                            return;
                        }
                    } else if (t === 31) {
                        if (t = d(a), t !== null) {
                            e.blockedOn = t, Kc(e.priority, function() {
                                Cp(a);
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
                var a = Vu(e.nativeEvent);
                if (a === null) {
                    a = e.nativeEvent;
                    var s = new a.constructor(a.type, a);
                    Vl = s, a.target.dispatchEvent(s), Vl = null;
                } else return t = Ca(a), t !== null && Op(t), e.blockedOn = a, !1;
                t.shift();
            }
            return !0;
        }
        function Up(e, t, a) {
            el(e) && a.delete(t);
        }
        function Vv() {
            Yu = !1, Wn !== null && el(Wn) && (Wn = null), Qn !== null && el(Qn) && (Qn = null), Zn !== null && el(Zn) && (Zn = null), vr.forEach(Up), br.forEach(Up);
        }
        function tl(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Yu || (Yu = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Vv)));
        }
        var nl = null;
        function Dp(e) {
            nl !== e && (nl = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                nl === e && (nl = null);
                for(var t = 0; t < e.length; t += 3){
                    var a = e[t], s = e[t + 1], o = e[t + 2];
                    if (typeof s != "function") {
                        if (Ku(s || a) === null) continue;
                        break;
                    }
                    var c = Ca(a);
                    c !== null && (e.splice(t, 3), t -= 3, Vo(c, {
                        pending: !0,
                        data: o,
                        method: a.method,
                        action: s
                    }, s, o));
                }
            }));
        }
        function ci(e) {
            function t(w) {
                return tl(w, e);
            }
            Wn !== null && tl(Wn, e), Qn !== null && tl(Qn, e), Zn !== null && tl(Zn, e), vr.forEach(t), br.forEach(t);
            for(var a = 0; a < Fn.length; a++){
                var s = Fn[a];
                s.blockedOn === e && (s.blockedOn = null);
            }
            for(; 0 < Fn.length && (a = Fn[0], a.blockedOn === null);)Np(a), a.blockedOn === null && Fn.shift();
            if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for(s = 0; s < a.length; s += 3){
                var o = a[s], c = a[s + 1], m = o[ht] || null;
                if (typeof c == "function") m || Dp(a);
                else if (m) {
                    var y = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c, m = c[ht] || null) y = m.formAction;
                        else if (Ku(o) !== null) continue;
                    } else y = m.action;
                    typeof y == "function" ? a[s + 1] = y : (a.splice(s, 3), s -= 3), Dp(a);
                }
            }
        }
        function zp() {
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
        function Iu(e) {
            this._internalRoot = e;
        }
        al.prototype.render = Iu.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(l(409));
            var a = t.current, s = Ot();
            xp(a, s, e, t, null, null);
        }, al.prototype.unmount = Iu.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                xp(e.current, 2, null, e, null, null), Ms(), t[Ra] = null;
            }
        };
        function al(e) {
            this._internalRoot = e;
        }
        al.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Vc();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var a = 0; a < Fn.length && t !== 0 && t < Fn[a].priority; a++);
                Fn.splice(a, 0, e), a === 0 && Np(e);
            }
        };
        var Lp = n.version;
        if (Lp !== "19.2.5") throw Error(l(527, Lp, "19.2.5"));
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
                Ci = il.inject(Kv), _t = il;
            } catch  {}
        }
        return Sr.createRoot = function(e, t) {
            if (!u(e)) throw Error(l(299));
            var a = !1, s = "", o = Gf, c = Vf, m = Kf;
            return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = Tp(e, 1, !1, null, null, a, s, null, o, c, m, zp), e[Ra] = t.current, Ou(e), new Iu(t);
        }, Sr.hydrateRoot = function(e, t, a) {
            if (!u(e)) throw Error(l(299));
            var s = !1, o = "", c = Gf, m = Vf, y = Kf, w = null;
            return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (c = a.onUncaughtError), a.onCaughtError !== void 0 && (m = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.formState !== void 0 && (w = a.formState)), t = Tp(e, 1, !0, t, a ?? null, s, o, w, c, m, y, zp), t.context = Ap(null), a = t.current, s = Ot(), s = Ll(s), o = Hn(s), o.callback = null, Bn(a, o, s), a = s, t.current.lanes = a, ji(t, a), tn(t), e[Ra] = t.current, Ou(e), new al(t);
        }, Sr.version = "19.2.5", Sr;
    }
    var Yp;
    function t0() {
        if (Yp) return Wu.exports;
        Yp = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), Wu.exports = e0(), Wu.exports;
    }
    var n0 = t0();
    var Ip = "popstate";
    function Xp(i) {
        return typeof i == "object" && i != null && "pathname" in i && "search" in i && "hash" in i && "state" in i && "key" in i;
    }
    function a0(i = {}) {
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
        return r0(n, r, null, i);
    }
    function Le(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function Wt(i, n) {
        if (!i) {
            typeof console < "u" && console.warn(n);
            try {
                throw new Error(n);
            } catch  {}
        }
    }
    function i0() {
        return Math.random().toString(36).substring(2, 10);
    }
    function Jp(i, n) {
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
            key: n && n.key || l || i0(),
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
    function r0(i, n, r, l = {}) {
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
                location: U.location,
                delta: B
            });
        }
        function S(k, B) {
            d = "PUSH";
            let P = Xp(k) ? k : uc(U.location, k, B);
            g = b() + 1;
            let z = Jp(P, g), K = U.createHref(P.unstable_mask || P);
            try {
                f.pushState(z, "", K);
            } catch (te) {
                if (te instanceof DOMException && te.name === "DataCloneError") throw te;
                u.location.assign(K);
            }
            h && p && p({
                action: d,
                location: U.location,
                delta: 1
            });
        }
        function E(k, B) {
            d = "REPLACE";
            let P = Xp(k) ? k : uc(U.location, k, B);
            g = b();
            let z = Jp(P, g), K = U.createHref(P.unstable_mask || P);
            f.replaceState(z, "", K), h && p && p({
                action: d,
                location: U.location,
                delta: 0
            });
        }
        function N(k) {
            return s0(k);
        }
        let U = {
            get action () {
                return d;
            },
            get location () {
                return i(u, f);
            },
            listen (k) {
                if (p) throw new Error("A history only accepts one active listener");
                return u.addEventListener(Ip, v), p = k, ()=>{
                    u.removeEventListener(Ip, v), p = null;
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
        return U;
    }
    function s0(i, n = !1) {
        let r = "http://localhost";
        typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(r, "No window.location.(origin|href) available to create URL");
        let l = typeof i == "string" ? i : kr(i);
        return l = l.replace(/ $/, "%20"), !n && l.startsWith("//") && (l = r + l), new URL(l, r);
    }
    function Dm(i, n, r = "/") {
        return l0(i, n, r, !1);
    }
    function l0(i, n, r, l) {
        let u = typeof n == "string" ? Ti(n) : n, h = On(u.pathname || "/", r);
        if (h == null) return null;
        let f = zm(i);
        o0(f);
        let d = null;
        for(let p = 0; d == null && p < f.length; ++p){
            let g = b0(h);
            d = y0(f[p], g, l);
        }
        return d;
    }
    function zm(i, n = [], r = [], l = "", u = !1) {
        let h = (f, d, p = u, g)=>{
            let b = {
                relativePath: g === void 0 ? f.path || "" : g,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: d,
                route: f
            };
            if (b.relativePath.startsWith("/")) {
                if (!b.relativePath.startsWith(l) && p) return;
                Le(b.relativePath.startsWith(l), `Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), b.relativePath = b.relativePath.slice(l.length);
            }
            let v = sn([
                l,
                b.relativePath
            ]), S = r.concat(b);
            f.children && f.children.length > 0 && (Le(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), zm(f.children, n, S, v, p)), !(f.path == null && !f.index) && n.push({
                path: v,
                score: m0(v, f.index),
                routesMeta: S
            });
        };
        return i.forEach((f, d)=>{
            if (f.path === "" || !f.path?.includes("?")) h(f, d);
            else for (let p of Lm(f.path))h(f, d, !0, p);
        }), n;
    }
    function Lm(i) {
        let n = i.split("/");
        if (n.length === 0) return [];
        let [r, ...l] = n, u = r.endsWith("?"), h = r.replace(/\?$/, "");
        if (l.length === 0) return u ? [
            h,
            ""
        ] : [
            h
        ];
        let f = Lm(l.join("/")), d = [];
        return d.push(...f.map((p)=>p === "" ? h : [
                h,
                p
            ].join("/"))), u && d.push(...f), d.map((p)=>i.startsWith("/") && p === "" ? "/" : p);
    }
    function o0(i) {
        i.sort((n, r)=>n.score !== r.score ? r.score - n.score : g0(n.routesMeta.map((l)=>l.childrenIndex), r.routesMeta.map((l)=>l.childrenIndex)));
    }
    var u0 = /^:[\w-]+$/, c0 = 3, h0 = 2, f0 = 1, d0 = 10, p0 = -2, Wp = (i)=>i === "*";
    function m0(i, n) {
        let r = i.split("/"), l = r.length;
        return r.some(Wp) && (l += p0), n && (l += h0), r.filter((u)=>!Wp(u)).reduce((u, h)=>u + (u0.test(h) ? c0 : h === "" ? f0 : d0), l);
    }
    function g0(i, n) {
        return i.length === n.length && i.slice(0, -1).every((l, u)=>l === n[u]) ? i[i.length - 1] - n[n.length - 1] : 0;
    }
    function y0(i, n, r = !1) {
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
                pathnameBase: E0(sn([
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
        let [r, l] = v0(i.path, i.caseSensitive, i.end), u = n.match(r);
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
    function v0(i, n = !1, r = !0) {
        Wt(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
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
    function b0(i) {
        try {
            return i.split("/").map((n)=>decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
        } catch (n) {
            return Wt(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`), i;
        }
    }
    function On(i, n) {
        if (n === "/") return i;
        if (!i.toLowerCase().startsWith(n.toLowerCase())) return null;
        let r = n.endsWith("/") ? n.length - 1 : n.length, l = i.charAt(r);
        return l && l !== "/" ? null : i.slice(r) || "/";
    }
    var _0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    function w0(i, n = "/") {
        let { pathname: r, search: l = "", hash: u = "" } = typeof i == "string" ? Ti(i) : i, h;
        return r ? (r = r.replace(/\/\/+/g, "/"), r.startsWith("/") ? h = Qp(r.substring(1), "/") : h = Qp(r, n)) : h = n, {
            pathname: h,
            search: T0(l),
            hash: A0(u)
        };
    }
    function Qp(i, n) {
        let r = n.replace(/\/+$/, "").split("/");
        return i.split("/").forEach((u)=>{
            u === ".." ? r.length > 1 && r.pop() : u !== "." && r.push(u);
        }), r.length > 1 ? r.join("/") : "/";
    }
    function ec(i, n, r, l) {
        return `Cannot include a '${i}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function S0(i) {
        return i.filter((n, r)=>r === 0 || n.route.path && n.route.path.length > 0);
    }
    function Ac(i) {
        let n = S0(i);
        return n.map((r, l)=>l === n.length - 1 ? r.pathname : r.pathnameBase);
    }
    function Sl(i, n, r, l = !1) {
        let u;
        typeof i == "string" ? u = Ti(i) : (u = {
            ...i
        }, Le(!u.pathname || !u.pathname.includes("?"), ec("?", "pathname", "search", u)), Le(!u.pathname || !u.pathname.includes("#"), ec("#", "pathname", "hash", u)), Le(!u.search || !u.search.includes("#"), ec("#", "search", "hash", u)));
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
        let p = w0(u, d), g = f && f !== "/" && f.endsWith("/"), b = (h || f === ".") && r.endsWith("/");
        return !p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p;
    }
    var sn = (i)=>i.join("/").replace(/\/\/+/g, "/"), E0 = (i)=>i.replace(/\/+$/, "").replace(/^\/*/, "/"), T0 = (i)=>!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, A0 = (i)=>!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, x0 = class {
        constructor(i, n, r, l = !1){
            this.status = i, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
    };
    function R0(i) {
        return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
    }
    function O0(i) {
        return i.map((n)=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
    }
    var Mm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    function Hm(i, n) {
        let r = i;
        if (typeof r != "string" || !_0.test(r)) return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
        let l = r, u = !1;
        if (Mm) try {
            let h = new URL(window.location.href), f = r.startsWith("//") ? new URL(h.protocol + r) : new URL(r), d = On(f.pathname, n);
            f.origin === h.origin && d != null ? r = d + f.search + f.hash : u = !0;
        } catch  {
            Wt(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        return {
            absoluteURL: l,
            isExternal: u,
            to: r
        };
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    var Bm = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Bm);
    var C0 = [
        "GET",
        ...Bm
    ];
    new Set(C0);
    var Ai = x.createContext(null);
    Ai.displayName = "DataRouter";
    var El = x.createContext(null);
    El.displayName = "DataRouterState";
    var qm = x.createContext(!1);
    function k0() {
        return x.useContext(qm);
    }
    var $m = x.createContext({
        isTransitioning: !1
    });
    $m.displayName = "ViewTransition";
    var j0 = x.createContext(new Map);
    j0.displayName = "Fetchers";
    var N0 = x.createContext(null);
    N0.displayName = "Await";
    var jt = x.createContext(null);
    jt.displayName = "Navigation";
    var Hr = x.createContext(null);
    Hr.displayName = "Location";
    var Qt = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    Qt.displayName = "Route";
    var xc = x.createContext(null);
    xc.displayName = "RouteError";
    var Pm = "REACT_ROUTER_ERROR", U0 = "REDIRECT", D0 = "ROUTE_ERROR_RESPONSE";
    function z0(i) {
        if (i.startsWith(`${Pm}:${U0}:{`)) try {
            let n = JSON.parse(i.slice(28));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.location == "string" && typeof n.reloadDocument == "boolean" && typeof n.replace == "boolean") return n;
        } catch  {}
    }
    function L0(i) {
        if (i.startsWith(`${Pm}:${D0}:{`)) try {
            let n = JSON.parse(i.slice(40));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string") return new x0(n.status, n.statusText, n.data);
        } catch  {}
    }
    function M0(i, { relative: n } = {}) {
        Le(xi(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: r, navigator: l } = x.useContext(jt), { hash: u, pathname: h, search: f } = Br(i, {
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
        return x.useContext(Hr) != null;
    }
    Gt = function() {
        return Le(xi(), "useLocation() may be used only in the context of a <Router> component."), x.useContext(Hr).location;
    };
    var Gm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function Vm(i) {
        x.useContext(jt).static || x.useLayoutEffect(i);
    }
    Km = function() {
        let { isDataRoute: i } = x.useContext(Qt);
        return i ? W0() : H0();
    };
    function H0() {
        Le(xi(), "useNavigate() may be used only in the context of a <Router> component.");
        let i = x.useContext(Ai), { basename: n, navigator: r } = x.useContext(jt), { matches: l } = x.useContext(Qt), { pathname: u } = Gt(), h = JSON.stringify(Ac(l)), f = x.useRef(!1);
        return Vm(()=>{
            f.current = !0;
        }), x.useCallback((p, g = {})=>{
            if (Wt(f.current, Gm), !f.current) return;
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
    x.createContext(null);
    mE = function() {
        let { matches: i } = x.useContext(Qt), n = i[i.length - 1];
        return n ? n.params : {};
    };
    function Br(i, { relative: n } = {}) {
        let { matches: r } = x.useContext(Qt), { pathname: l } = Gt(), u = JSON.stringify(Ac(r));
        return x.useMemo(()=>Sl(i, JSON.parse(u), l, n === "path"), [
            i,
            u,
            l,
            n
        ]);
    }
    function B0(i, n) {
        return Ym(i, n);
    }
    function Ym(i, n, r) {
        Le(xi(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: l } = x.useContext(jt), { matches: u } = x.useContext(Qt), h = u[u.length - 1], f = h ? h.params : {}, d = h ? h.pathname : "/", p = h ? h.pathnameBase : "/", g = h && h.route;
        {
            let k = g && g.path || "";
            Xm(d, !g || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`);
        }
        let b = Gt(), v;
        if (n) {
            let k = typeof n == "string" ? Ti(n) : n;
            Le(p === "/" || k.pathname?.startsWith(p), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`), v = k;
        } else v = b;
        let S = v.pathname || "/", E = S;
        if (p !== "/") {
            let k = p.replace(/^\//, "").split("/");
            E = "/" + S.replace(/^\//, "").split("/").slice(k.length).join("/");
        }
        let N = Dm(i, {
            pathname: E
        });
        Wt(g || N != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `), Wt(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let U = V0(N && N.map((k)=>Object.assign({}, k, {
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
        return n && U ? x.createElement(Hr.Provider, {
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
        }, U) : U;
    }
    function q0() {
        let i = J0(), n = R0(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), r = i instanceof Error ? i.stack : null, l = "rgba(200,200,200, 0.5)", u = {
            padding: "0.5rem",
            backgroundColor: l
        }, h = {
            padding: "2px 4px",
            backgroundColor: l
        }, f = null;
        return console.error("Error handled by React Router default ErrorBoundary:", i), f = x.createElement(x.Fragment, null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
            style: h
        }, "ErrorBoundary"), " or", " ", x.createElement("code", {
            style: h
        }, "errorElement"), " prop on your route.")), x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, n), r ? x.createElement("pre", {
            style: u
        }, r) : null, f);
    }
    var $0 = x.createElement(q0, null), Im = class extends x.Component {
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
                const r = L0(i.digest);
                r && (i = r);
            }
            let n = i !== void 0 ? x.createElement(Qt.Provider, {
                value: this.props.routeContext
            }, x.createElement(xc.Provider, {
                value: i,
                children: this.props.component
            })) : this.props.children;
            return this.context ? x.createElement(P0, {
                error: i
            }, n) : n;
        }
    };
    Im.contextType = qm;
    var tc = new WeakMap;
    function P0({ children: i, error: n }) {
        let { basename: r } = x.useContext(jt);
        if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
            let l = z0(n.digest);
            if (l) {
                let u = tc.get(n);
                if (u) throw u;
                let h = Hm(l.location, r);
                if (Mm && !tc.get(n)) if (h.isExternal || l.reloadDocument) window.location.href = h.absoluteURL || h.to;
                else {
                    const f = Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to, {
                            replace: l.replace
                        }));
                    throw tc.set(n, f), f;
                }
                return x.createElement("meta", {
                    httpEquiv: "refresh",
                    content: `0;url=${h.absoluteURL || h.to}`
                });
            }
        }
        return i;
    }
    function G0({ routeContext: i, match: n, children: r }) {
        let l = x.useContext(Ai);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(Qt.Provider, {
            value: i
        }, r);
    }
    function V0(i, n = [], r) {
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
            Le(b >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), u = u.slice(0, Math.min(u.length, b + 1));
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
                unstable_pattern: O0(l.matches),
                errorInfo: v
            });
        } : void 0;
        return u.reduceRight((b, v, S)=>{
            let E, N = !1, U = null, k = null;
            l && (E = h && v.route.id ? h[v.route.id] : void 0, U = v.route.errorElement || $0, f && (d < 0 && S === 0 ? (Xm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, k = null) : d === S && (N = !0, k = v.route.hydrateFallbackElement || null)));
            let B = n.concat(u.slice(0, S + 1)), P = ()=>{
                let z;
                return E ? z = U : N ? z = k : v.route.Component ? z = x.createElement(v.route.Component, null) : v.route.element ? z = v.route.element : z = b, x.createElement(G0, {
                    match: v,
                    routeContext: {
                        outlet: b,
                        matches: B,
                        isDataRoute: l != null
                    },
                    children: z
                });
            };
            return l && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? x.createElement(Im, {
                location: l.location,
                revalidation: l.revalidation,
                component: U,
                error: E,
                children: P(),
                routeContext: {
                    outlet: null,
                    matches: B,
                    isDataRoute: !0
                },
                onError: g
            }) : P();
        }, null);
    }
    function Rc(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function K0(i) {
        let n = x.useContext(Ai);
        return Le(n, Rc(i)), n;
    }
    function Y0(i) {
        let n = x.useContext(El);
        return Le(n, Rc(i)), n;
    }
    function I0(i) {
        let n = x.useContext(Qt);
        return Le(n, Rc(i)), n;
    }
    function Oc(i) {
        let n = I0(i), r = n.matches[n.matches.length - 1];
        return Le(r.route.id, `${i} can only be used on routes that contain a unique "id"`), r.route.id;
    }
    function X0() {
        return Oc("useRouteId");
    }
    function J0() {
        let i = x.useContext(xc), n = Y0("useRouteError"), r = Oc("useRouteError");
        return i !== void 0 ? i : n.errors?.[r];
    }
    function W0() {
        let { router: i } = K0("useNavigate"), n = Oc("useNavigate"), r = x.useRef(!1);
        return Vm(()=>{
            r.current = !0;
        }), x.useCallback(async (u, h = {})=>{
            Wt(r.current, Gm), r.current && (typeof u == "number" ? await i.navigate(u) : await i.navigate(u, {
                fromRouteId: n,
                ...h
            }));
        }, [
            i,
            n
        ]);
    }
    var Zp = {};
    function Xm(i, n, r) {
        !n && !Zp[i] && (Zp[i] = !0, Wt(!1, r));
    }
    x.memo(Q0);
    function Q0({ routes: i, future: n, state: r, isStatic: l, onError: u }) {
        return Ym(i, void 0, {
            state: r,
            isStatic: l,
            onError: u
        });
    }
    function Z0({ to: i, replace: n, state: r, relative: l }) {
        Le(xi(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: u } = x.useContext(jt);
        Wt(!u, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: h } = x.useContext(Qt), { pathname: f } = Gt(), d = Km(), p = Sl(i, Ac(h), f, l === "path"), g = JSON.stringify(p);
        return x.useEffect(()=>{
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
    function Ie(i) {
        Le(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function F0({ basename: i = "/", children: n = null, location: r, navigationType: l = "POP", navigator: u, static: h = !1, unstable_useTransitions: f }) {
        Le(!xi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = i.replace(/^\/*/, "/"), p = x.useMemo(()=>({
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
        let { pathname: g = "/", search: b = "", hash: v = "", state: S = null, key: E = "default", unstable_mask: N } = r, U = x.useMemo(()=>{
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
        return Wt(U != null, `<Router basename="${d}"> is not able to match the URL "${g}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`), U == null ? null : x.createElement(jt.Provider, {
            value: p
        }, x.createElement(Hr.Provider, {
            children: n,
            value: U
        }));
    }
    function Jm({ children: i, location: n }) {
        return B0(cc(i), n);
    }
    function cc(i, n = []) {
        let r = [];
        return x.Children.forEach(i, (l, u)=>{
            if (!x.isValidElement(l)) return;
            let h = [
                ...n,
                u
            ];
            if (l.type === x.Fragment) {
                r.push.apply(r, cc(l.props.children, h));
                return;
            }
            Le(l.type === Ie, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Le(!l.props.index || !l.props.children, "An index route cannot have child routes.");
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
    function eb(i) {
        return Tl(i) && i.tagName.toLowerCase() === "button";
    }
    function tb(i) {
        return Tl(i) && i.tagName.toLowerCase() === "form";
    }
    function nb(i) {
        return Tl(i) && i.tagName.toLowerCase() === "input";
    }
    function ab(i) {
        return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
    }
    function ib(i, n) {
        return i.button === 0 && (!n || n === "_self") && !ab(i);
    }
    var rl = null;
    function rb() {
        if (rl === null) try {
            new FormData(document.createElement("form"), 0), rl = !1;
        } catch  {
            rl = !0;
        }
        return rl;
    }
    var sb = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function nc(i) {
        return i != null && !sb.has(i) ? (Wt(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ml}"`), null) : i;
    }
    function lb(i, n) {
        let r, l, u, h, f;
        if (tb(i)) {
            let d = i.getAttribute("action");
            l = d ? On(d, n) : null, r = i.getAttribute("method") || pl, u = nc(i.getAttribute("enctype")) || ml, h = new FormData(i);
        } else if (eb(i) || nb(i) && (i.type === "submit" || i.type === "image")) {
            let d = i.form;
            if (d == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = i.getAttribute("formaction") || d.getAttribute("action");
            if (l = p ? On(p, n) : null, r = i.getAttribute("formmethod") || d.getAttribute("method") || pl, u = nc(i.getAttribute("formenctype")) || nc(d.getAttribute("enctype")) || ml, h = new FormData(d, i), !rb()) {
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
    function Cc(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function Wm(i, n, r, l) {
        let u = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
        return r ? u.pathname.endsWith("/") ? u.pathname = `${u.pathname}_.${l}` : u.pathname = `${u.pathname}.${l}` : u.pathname === "/" ? u.pathname = `_root.${l}` : n && On(u.pathname, n) === "/" ? u.pathname = `${n.replace(/\/$/, "")}/_root.${l}` : u.pathname = `${u.pathname.replace(/\/$/, "")}.${l}`, u;
    }
    async function ob(i, n) {
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
    function ub(i) {
        return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
    }
    async function cb(i, n, r) {
        let l = await Promise.all(i.map(async (u)=>{
            let h = n.routes[u.route.id];
            if (h) {
                let f = await ob(h, r);
                return f.links ? f.links() : [];
            }
            return [];
        }));
        return pb(l.flat(1).filter(ub).filter((u)=>u.rel === "stylesheet" || u.rel === "preload").map((u)=>u.rel === "stylesheet" ? {
                ...u,
                rel: "prefetch",
                as: "style"
            } : {
                ...u,
                rel: "prefetch"
            }));
    }
    function Fp(i, n, r, l, u, h) {
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
    function hb(i, n, { includeHydrateFallback: r } = {}) {
        return fb(i.map((l)=>{
            let u = n.routes[l.route.id];
            if (!u) return [];
            let h = [
                u.module
            ];
            return u.clientActionModule && (h = h.concat(u.clientActionModule)), u.clientLoaderModule && (h = h.concat(u.clientLoaderModule)), r && u.hydrateFallbackModule && (h = h.concat(u.hydrateFallbackModule)), u.imports && (h = h.concat(u.imports)), h;
        }).flat(1));
    }
    function fb(i) {
        return [
            ...new Set(i)
        ];
    }
    function db(i) {
        let n = {}, r = Object.keys(i).sort();
        for (let l of r)n[l] = i[l];
        return n;
    }
    function pb(i, n) {
        let r = new Set;
        return new Set(n), i.reduce((l, u)=>{
            let h = JSON.stringify(db(u));
            return r.has(h) || (r.add(h), l.push({
                key: h,
                link: u
            })), l;
        }, []);
    }
    function kc() {
        let i = x.useContext(Ai);
        return Cc(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
    }
    function mb() {
        let i = x.useContext(El);
        return Cc(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
    }
    var jc = x.createContext(void 0);
    jc.displayName = "FrameworkContext";
    function Nc() {
        let i = x.useContext(jc);
        return Cc(i, "You must render this element inside a <HydratedRouter> element"), i;
    }
    function gb(i, n) {
        let r = x.useContext(jc), [l, u] = x.useState(!1), [h, f] = x.useState(!1), { onFocus: d, onBlur: p, onMouseEnter: g, onMouseLeave: b, onTouchStart: v } = n, S = x.useRef(null);
        x.useEffect(()=>{
            if (i === "render" && f(!0), i === "viewport") {
                let U = (B)=>{
                    B.forEach((P)=>{
                        f(P.isIntersecting);
                    });
                }, k = new IntersectionObserver(U, {
                    threshold: .5
                });
                return S.current && k.observe(S.current), ()=>{
                    k.disconnect();
                };
            }
        }, [
            i
        ]), x.useEffect(()=>{
            if (l) {
                let U = setTimeout(()=>{
                    f(!0);
                }, 100);
                return ()=>{
                    clearTimeout(U);
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
    function yb({ page: i, ...n }) {
        let r = k0(), { router: l } = kc(), u = x.useMemo(()=>Dm(l.routes, i, l.basename), [
            l.routes,
            i,
            l.basename
        ]);
        return u ? r ? x.createElement(bb, {
            page: i,
            matches: u,
            ...n
        }) : x.createElement(_b, {
            page: i,
            matches: u,
            ...n
        }) : null;
    }
    function vb(i) {
        let { manifest: n, routeModules: r } = Nc(), [l, u] = x.useState([]);
        return x.useEffect(()=>{
            let h = !1;
            return cb(i, n, r).then((f)=>{
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
    function bb({ page: i, matches: n, ...r }) {
        let l = Gt(), { future: u } = Nc(), { basename: h } = kc(), f = x.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let d = Wm(i, h, u.unstable_trailingSlashAwareDataRequests, "rsc"), p = !1, g = [];
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
        return x.createElement(x.Fragment, null, f.map((d)=>x.createElement("link", {
                key: d,
                rel: "prefetch",
                as: "fetch",
                href: d,
                ...r
            })));
    }
    function _b({ page: i, matches: n, ...r }) {
        let l = Gt(), { future: u, manifest: h, routeModules: f } = Nc(), { basename: d } = kc(), { loaderData: p, matches: g } = mb(), b = x.useMemo(()=>Fp(i, n, g, h, l, "data"), [
            i,
            n,
            g,
            h,
            l
        ]), v = x.useMemo(()=>Fp(i, n, g, h, l, "assets"), [
            i,
            n,
            g,
            h,
            l
        ]), S = x.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let U = new Set, k = !1;
            if (n.forEach((P)=>{
                let z = h.routes[P.route.id];
                !z || !z.hasLoader || (!b.some((K)=>K.route.id === P.route.id) && P.route.id in p && f[P.route.id]?.shouldRevalidate || z.hasClientLoader ? k = !0 : U.add(P.route.id));
            }), U.size === 0) return [];
            let B = Wm(i, d, u.unstable_trailingSlashAwareDataRequests, "data");
            return k && U.size > 0 && B.searchParams.set("_routes", n.filter((P)=>U.has(P.route.id)).map((P)=>P.route.id).join(",")), [
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
        ]), E = x.useMemo(()=>hb(v, h), [
            v,
            h
        ]), N = vb(v);
        return x.createElement(x.Fragment, null, S.map((U)=>x.createElement("link", {
                key: U,
                rel: "prefetch",
                as: "fetch",
                href: U,
                ...r
            })), E.map((U)=>x.createElement("link", {
                key: U,
                rel: "modulepreload",
                href: U,
                ...r
            })), N.map(({ key: U, link: k })=>x.createElement("link", {
                key: U,
                nonce: r.nonce,
                ...k,
                crossOrigin: k.crossOrigin ?? r.crossOrigin
            })));
    }
    function wb(...i) {
        return (n)=>{
            i.forEach((r)=>{
                typeof r == "function" ? r(n) : r != null && (r.current = n);
            });
        };
    }
    var Sb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Sb && (window.__reactRouterVersion = "7.14.0");
    } catch  {}
    function Eb({ basename: i, children: n, unstable_useTransitions: r, window: l }) {
        let u = x.useRef();
        u.current == null && (u.current = a0({
            window: l,
            v5Compat: !0
        }));
        let h = u.current, [f, d] = x.useState({
            action: h.action,
            location: h.location
        }), p = x.useCallback((g)=>{
            r === !1 ? d(g) : x.startTransition(()=>d(g));
        }, [
            r
        ]);
        return x.useLayoutEffect(()=>h.listen(p), [
            h,
            p
        ]), x.createElement(F0, {
            basename: i,
            children: n,
            location: f.location,
            navigationType: f.action,
            navigator: h,
            unstable_useTransitions: r
        });
    }
    let Qm;
    Qm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    Rn = x.forwardRef(function({ onClick: n, discover: r = "render", prefetch: l = "none", relative: u, reloadDocument: h, replace: f, unstable_mask: d, state: p, target: g, to: b, preventScrollReset: v, viewTransition: S, unstable_defaultShouldRevalidate: E, ...N }, U) {
        let { basename: k, navigator: B, unstable_useTransitions: P } = x.useContext(jt), z = typeof b == "string" && Qm.test(b), K = Hm(b, k);
        b = K.to;
        let te = M0(b, {
            relative: u
        }), ne = Gt(), Y = null;
        if (d) {
            let je = Sl(d, [], ne.unstable_mask ? ne.unstable_mask.pathname : "/", !0);
            k !== "/" && (je.pathname = je.pathname === "/" ? k : sn([
                k,
                je.pathname
            ])), Y = B.createHref(je);
        }
        let [ke, Se, Nt] = gb(l, N), ot = Rb(b, {
            replace: f,
            unstable_mask: d,
            state: p,
            target: g,
            preventScrollReset: v,
            relative: u,
            viewTransition: S,
            unstable_defaultShouldRevalidate: E,
            unstable_useTransitions: P
        });
        function Je(je) {
            n && n(je), je.defaultPrevented || ot(je);
        }
        let ie = !(K.isExternal || h), be = x.createElement("a", {
            ...N,
            ...Nt,
            href: (ie ? Y : void 0) || K.absoluteURL || te,
            onClick: ie ? Je : n,
            ref: wb(U, Se),
            target: g,
            "data-discover": !z && r === "render" ? "true" : void 0
        });
        return ke && !z ? x.createElement(x.Fragment, null, be, x.createElement(yb, {
            page: te
        })) : be;
    });
    Rn.displayName = "Link";
    var Tb = x.forwardRef(function({ "aria-current": n = "page", caseSensitive: r = !1, className: l = "", end: u = !1, style: h, to: f, viewTransition: d, children: p, ...g }, b) {
        let v = Br(f, {
            relative: g.relative
        }), S = Gt(), E = x.useContext(El), { navigator: N, basename: U } = x.useContext(jt), k = E != null && Nb(v) && d === !0, B = N.encodeLocation ? N.encodeLocation(v).pathname : v.pathname, P = S.pathname, z = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
        r || (P = P.toLowerCase(), z = z ? z.toLowerCase() : null, B = B.toLowerCase()), z && U && (z = On(z, U) || z);
        const K = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
        let te = P === B || !u && P.startsWith(B) && P.charAt(K) === "/", ne = z != null && (z === B || !u && z.startsWith(B) && z.charAt(B.length) === "/"), Y = {
            isActive: te,
            isPending: ne,
            isTransitioning: k
        }, ke = te ? n : void 0, Se;
        typeof l == "function" ? Se = l(Y) : Se = [
            l,
            te ? "active" : null,
            ne ? "pending" : null,
            k ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Nt = typeof h == "function" ? h(Y) : h;
        return x.createElement(Rn, {
            ...g,
            "aria-current": ke,
            className: Se,
            ref: b,
            style: Nt,
            to: f,
            viewTransition: d
        }, typeof p == "function" ? p(Y) : p);
    });
    Tb.displayName = "NavLink";
    var Ab = x.forwardRef(({ discover: i = "render", fetcherKey: n, navigate: r, reloadDocument: l, replace: u, state: h, method: f = pl, action: d, onSubmit: p, relative: g, preventScrollReset: b, viewTransition: v, unstable_defaultShouldRevalidate: S, ...E }, N)=>{
        let { unstable_useTransitions: U } = x.useContext(jt), k = kb(), B = jb(d, {
            relative: g
        }), P = f.toLowerCase() === "get" ? "get" : "post", z = typeof d == "string" && Qm.test(d), K = (te)=>{
            if (p && p(te), te.defaultPrevented) return;
            te.preventDefault();
            let ne = te.nativeEvent.submitter, Y = ne?.getAttribute("formmethod") || f, ke = ()=>k(ne || te.currentTarget, {
                    fetcherKey: n,
                    method: Y,
                    navigate: r,
                    replace: u,
                    state: h,
                    relative: g,
                    preventScrollReset: b,
                    viewTransition: v,
                    unstable_defaultShouldRevalidate: S
                });
            U && r !== !1 ? x.startTransition(()=>ke()) : ke();
        };
        return x.createElement("form", {
            ref: N,
            method: P,
            action: B,
            onSubmit: l ? p : K,
            ...E,
            "data-discover": !z && i === "render" ? "true" : void 0
        });
    });
    Ab.displayName = "Form";
    function xb(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Zm(i) {
        let n = x.useContext(Ai);
        return Le(n, xb(i)), n;
    }
    function Rb(i, { target: n, replace: r, unstable_mask: l, state: u, preventScrollReset: h, relative: f, viewTransition: d, unstable_defaultShouldRevalidate: p, unstable_useTransitions: g } = {}) {
        let b = Km(), v = Gt(), S = Br(i, {
            relative: f
        });
        return x.useCallback((E)=>{
            if (ib(E, n)) {
                E.preventDefault();
                let N = r !== void 0 ? r : kr(v) === kr(S), U = ()=>b(i, {
                        replace: N,
                        unstable_mask: l,
                        state: u,
                        preventScrollReset: h,
                        relative: f,
                        viewTransition: d,
                        unstable_defaultShouldRevalidate: p
                    });
                g ? x.startTransition(()=>U()) : U();
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
    var Ob = 0, Cb = ()=>`__${String(++Ob)}__`;
    function kb() {
        let { router: i } = Zm("useSubmit"), { basename: n } = x.useContext(jt), r = X0(), l = i.fetch, u = i.navigate;
        return x.useCallback(async (h, f = {})=>{
            let { action: d, method: p, encType: g, formData: b, body: v } = lb(h, n);
            if (f.navigate === !1) {
                let S = f.fetcherKey || Cb();
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
    function jb(i, { relative: n } = {}) {
        let { basename: r } = x.useContext(jt), l = x.useContext(Qt);
        Le(l, "useFormAction must be used inside a RouteContext");
        let [u] = l.matches.slice(-1), h = {
            ...Br(i || ".", {
                relative: n
            })
        }, f = Gt();
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
    function Nb(i, { relative: n } = {}) {
        let r = x.useContext($m);
        Le(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: l } = Zm("useViewTransitionState"), u = Br(i, {
            relative: n
        });
        if (!r.isTransitioning) return !1;
        let h = On(r.currentLocation.pathname, l) || r.currentLocation.pathname, f = On(r.nextLocation.pathname, l) || r.nextLocation.pathname;
        return yl(u.pathname, f) != null || yl(u.pathname, h) != null;
    }
    let Fm, ac, Ub, em, tm, Db, zb, Lb, Mb, eg, Hb;
    Fm = x.createContext(null);
    ac = ()=>{
        const i = new Date().getHours();
        return i >= 6 && i < 18 ? "light" : "dark";
    };
    Ub = [
        "blue",
        "red",
        "green",
        "purple",
        "orange"
    ];
    em = (i)=>{
        const n = document.cookie.match(new RegExp("(^| )" + i + "=([^;]+)"));
        return n ? decodeURIComponent(n[2]) : null;
    };
    tm = (i, n)=>{
        document.cookie = `${i}=${encodeURIComponent(n)};path=/;max-age=31536000;SameSite=Lax`;
    };
    Db = (i)=>{
        document.cookie = `${i}=;path=/;max-age=0`;
    };
    zb = ({ children: i })=>{
        const [n, r] = x.useState(()=>{
            const p = em("themeMode");
            return p === "light" || p === "dark" || p === "auto" ? p : "auto";
        }), [l, u] = x.useState(()=>n === "auto" ? ac() : n), [h, f] = x.useState(()=>{
            const p = em("colorTheme");
            return Ub.includes(p ?? "") ? p : "blue";
        });
        x.useEffect(()=>{
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
        ]), x.useEffect(()=>{
            document.documentElement.setAttribute("data-theme", l);
        }, [
            l
        ]), x.useEffect(()=>{
            document.documentElement.setAttribute("data-color", h), tm("colorTheme", h);
        }, [
            h
        ]), x.useEffect(()=>{
            tm("themeMode", n), Db("theme");
        }, [
            n
        ]);
        const d = ()=>{
            r((p)=>p === "auto" ? "light" : p === "light" ? "dark" : "auto");
        };
        return _.jsx(Fm.Provider, {
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
    Lb = ()=>{
        const i = x.useContext(Fm);
        if (!i) throw new Error("useTheme must be used within ThemeProvider");
        return i;
    };
    Mb = {
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
                    guide: "가이드"
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
                    aiNotAvailable: "AI 향상 기능은 Edge Function 설정이 필요합니다",
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
                    guide: "Guide"
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
                    aiNotAvailable: "AI enhancement requires Edge Function setup",
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
    eg = x.createContext(null);
    Hb = ({ children: i })=>{
        const [n, r] = x.useState("ko"), l = ()=>{
            r((h)=>h === "ko" ? "en" : "ko");
        }, u = (h)=>{
            const f = h.split(".");
            let d = Mb[n];
            for (const p of f)d = d?.[p];
            return typeof d == "string" ? d : h;
        };
        return _.jsx(eg.Provider, {
            value: {
                language: n,
                toggleLanguage: l,
                t: u
            },
            children: i
        });
    };
    tg = ()=>{
        const i = x.useContext(eg);
        if (!i) throw new Error("useLanguage must be used within LanguageProvider");
        return i;
    };
    function Al(i, n) {
        var r = {};
        for(var l in i)Object.prototype.hasOwnProperty.call(i, l) && n.indexOf(l) < 0 && (r[l] = i[l]);
        if (i != null && typeof Object.getOwnPropertySymbols == "function") for(var u = 0, l = Object.getOwnPropertySymbols(i); u < l.length; u++)n.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[u]) && (r[l[u]] = i[l[u]]);
        return r;
    }
    function Bb(i, n, r, l) {
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
    const qb = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n);
    class Uc extends Error {
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
    class $b extends Uc {
        constructor(n){
            super("Failed to send a request to the Edge Function", "FunctionsFetchError", n);
        }
    }
    class nm extends Uc {
        constructor(n){
            super("Relay Error invoking the Edge Function", "FunctionsRelayError", n);
        }
    }
    class am extends Uc {
        constructor(n){
            super("Edge Function returned a non-2xx status code", "FunctionsHttpError", n);
        }
    }
    var hc;
    (function(i) {
        i.Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
    })(hc || (hc = {}));
    class Pb {
        constructor(n, { headers: r = {}, customFetch: l, region: u = hc.Any } = {}){
            this.url = n, this.headers = r, this.region = u, this.fetch = qb(l);
        }
        setAuth(n) {
            this.headers.Authorization = `Bearer ${n}`;
        }
        invoke(n) {
            return Bb(this, arguments, void 0, function*(r, l = {}) {
                var u;
                let h, f;
                try {
                    const { headers: d, method: p, body: g, signal: b, timeout: v } = l;
                    let S = {}, { region: E } = l;
                    E || (E = this.region);
                    const N = new URL(`${this.url}/${r}`);
                    E && E !== "any" && (S["x-region"] = E, N.searchParams.set("forceFunctionRegion", E));
                    let U;
                    g && (d && !Object.prototype.hasOwnProperty.call(d, "Content-Type") || !d) ? typeof Blob < "u" && g instanceof Blob || g instanceof ArrayBuffer ? (S["Content-Type"] = "application/octet-stream", U = g) : typeof g == "string" ? (S["Content-Type"] = "text/plain", U = g) : typeof FormData < "u" && g instanceof FormData ? U = g : (S["Content-Type"] = "application/json", U = JSON.stringify(g)) : g && typeof g != "string" && !(typeof Blob < "u" && g instanceof Blob) && !(g instanceof ArrayBuffer) && !(typeof FormData < "u" && g instanceof FormData) ? U = JSON.stringify(g) : U = g;
                    let k = b;
                    v && (f = new AbortController, h = setTimeout(()=>f.abort(), v), b ? (k = f.signal, b.addEventListener("abort", ()=>f.abort())) : k = f.signal);
                    const B = yield this.fetch(N.toString(), {
                        method: p || "POST",
                        headers: Object.assign(Object.assign(Object.assign({}, S), this.headers), d),
                        body: U,
                        signal: k
                    }).catch((te)=>{
                        throw new $b(te);
                    }), P = B.headers.get("x-relay-error");
                    if (P && P === "true") throw new nm(B);
                    if (!B.ok) throw new am(B);
                    let z = ((u = B.headers.get("Content-Type")) !== null && u !== void 0 ? u : "text/plain").split(";")[0].trim(), K;
                    return z === "application/json" ? K = yield B.json() : z === "application/octet-stream" || z === "application/pdf" ? K = yield B.blob() : z === "text/event-stream" ? K = B : z === "multipart/form-data" ? K = yield B.formData() : K = yield B.text(), {
                        data: K,
                        error: null,
                        response: B
                    };
                } catch (d) {
                    return {
                        data: null,
                        error: d,
                        response: d instanceof am || d instanceof nm ? d.context : void 0
                    };
                } finally{
                    h && clearTimeout(h);
                }
            });
        }
    }
    const ng = 3, im = (i)=>Math.min(1e3 * 2 ** i, 3e4), Gb = [
        520,
        503
    ], ag = [
        "GET",
        "HEAD",
        "OPTIONS"
    ];
    var Vb = class extends Error {
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
    function rm(i, n) {
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
    function Kb(i, n, r, l) {
        return !(!l || r >= ng || !ag.includes(i) || !Gb.includes(n));
    }
    var Yb = class {
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
                        if (v?.name === "AbortError" || v?.code === "ABORT_ERR" || !ag.includes(r.method)) throw v;
                        if (r.retryEnabled && f < ng) {
                            const S = im(f);
                            f++, await rm(S, r.signal);
                            continue;
                        }
                        throw v;
                    }
                    if (Kb(r.method, b.status, f, r.retryEnabled)) {
                        var d, p;
                        const v = (d = (p = b.headers) === null || p === void 0 ? void 0 : p.get("Retry-After")) !== null && d !== void 0 ? d : null, S = v !== null ? Math.max(0, parseInt(v, 10) || 0) * 1e3 : im(f);
                        await b.text(), f++, await rm(S, r.signal);
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
                    var S, E, N, U;
                    const P = (S = v?.message) !== null && S !== void 0 ? S : "", z = (E = v?.code) !== null && E !== void 0 ? E : "";
                    p = `${(N = f?.name) !== null && N !== void 0 ? N : "FetchError"}: ${f?.message}`, p += `

Caused by: ${(U = v?.name) !== null && U !== void 0 ? U : "Error"}: ${P}`, z && (p += ` (${z})`), v?.stack && (p += `
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
                if (r && n.shouldThrowOnError) throw new Vb(r);
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
    }, Ib = class extends Yb {
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
    const sm = new RegExp("[,()]");
    var vi = class extends Ib {
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
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && sm.test(l) ? `"${l}"` : `${l}`).join(",");
            return this.url.searchParams.append(i, `in.(${r})`), this;
        }
        notIn(i, n) {
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && sm.test(l) ? `"${l}"` : `${l}`).join(",");
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
    }, Xb = class {
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
    function Jb(i, n) {
        if (jr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (jr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function Wb(i) {
        var n = Jb(i, "string");
        return jr(n) == "symbol" ? n : n + "";
    }
    function Qb(i, n, r) {
        return (n = Wb(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function lm(i, n) {
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
            n % 2 ? lm(Object(r), !0).forEach(function(l) {
                Qb(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    var Zb = class ig {
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
            return new Xb(new URL(`${this.url}/${n}`), {
                headers: new Headers(this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        schema(n) {
            return new ig(this.url, {
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
    class Fb {
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
            if (typeof global < "u" && typeof global.WebSocket < "u") return {
                type: "native",
                constructor: global.WebSocket
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
    const e_ = "2.103.0", t_ = `realtime-js/${e_}`, n_ = "1.0.0", rg = "2.0.0", a_ = rg, i_ = 1e4, r_ = 100, ta = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    }, sg = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        leave: "phx_leave",
        access_token: "access_token"
    }, fc = {
        connecting: "connecting",
        closing: "closing",
        closed: "closed"
    };
    class s_ {
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
            let N = new DataView(E), U = 0;
            N.setUint8(U++, this.KINDS.userBroadcastPush), N.setUint8(U++, p.length), N.setUint8(U++, d.length), N.setUint8(U++, f.length), N.setUint8(U++, g.length), N.setUint8(U++, v.length), N.setUint8(U++, r), Array.from(p, (B)=>N.setUint8(U++, B.charCodeAt(0))), Array.from(d, (B)=>N.setUint8(U++, B.charCodeAt(0))), Array.from(f, (B)=>N.setUint8(U++, B.charCodeAt(0))), Array.from(g, (B)=>N.setUint8(U++, B.charCodeAt(0))), Array.from(v, (B)=>N.setUint8(U++, B.charCodeAt(0)));
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
    var Ce;
    (function(i) {
        i.abstime = "abstime", i.bool = "bool", i.date = "date", i.daterange = "daterange", i.float4 = "float4", i.float8 = "float8", i.int2 = "int2", i.int4 = "int4", i.int4range = "int4range", i.int8 = "int8", i.int8range = "int8range", i.json = "json", i.jsonb = "jsonb", i.money = "money", i.numeric = "numeric", i.oid = "oid", i.reltime = "reltime", i.text = "text", i.time = "time", i.timestamp = "timestamp", i.timestamptz = "timestamptz", i.timetz = "timetz", i.tsrange = "tsrange", i.tstzrange = "tstzrange";
    })(Ce || (Ce = {}));
    const om = (i, n, r = {})=>{
        var l;
        const u = (l = r.skipTypes) !== null && l !== void 0 ? l : [];
        return n ? Object.keys(n).reduce((h, f)=>(h[f] = l_(f, i, n, u), h), {}) : {};
    }, l_ = (i, n, r, l)=>{
        const u = n.find((d)=>d.name === i), h = u?.type, f = r[i];
        return h && !l.includes(h) ? lg(h, f) : dc(f);
    }, lg = (i, n)=>{
        if (i.charAt(0) === "_") {
            const r = i.slice(1, i.length);
            return h_(n, r);
        }
        switch(i){
            case Ce.bool:
                return o_(n);
            case Ce.float4:
            case Ce.float8:
            case Ce.int2:
            case Ce.int4:
            case Ce.int8:
            case Ce.numeric:
            case Ce.oid:
                return u_(n);
            case Ce.json:
            case Ce.jsonb:
                return c_(n);
            case Ce.timestamp:
                return f_(n);
            case Ce.abstime:
            case Ce.date:
            case Ce.daterange:
            case Ce.int4range:
            case Ce.int8range:
            case Ce.money:
            case Ce.reltime:
            case Ce.text:
            case Ce.time:
            case Ce.timestamptz:
            case Ce.timetz:
            case Ce.tsrange:
            case Ce.tstzrange:
                return dc(n);
            default:
                return dc(n);
        }
    }, dc = (i)=>i, o_ = (i)=>{
        switch(i){
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return i;
        }
    }, u_ = (i)=>{
        if (typeof i == "string") {
            const n = parseFloat(i);
            if (!Number.isNaN(n)) return n;
        }
        return i;
    }, c_ = (i)=>{
        if (typeof i == "string") try {
            return JSON.parse(i);
        } catch  {
            return i;
        }
        return i;
    }, h_ = (i, n)=>{
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
            return h.map((d)=>lg(n, d));
        }
        return i;
    }, f_ = (i)=>typeof i == "string" ? i.replace(" ", "T") : i, og = (i)=>{
        const n = new URL(i);
        return n.protocol = n.protocol.replace(/^ws/i, "http"), n.pathname = n.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), n.pathname === "" || n.pathname === "/" ? n.pathname = "/api/broadcast" : n.pathname = n.pathname + "/api/broadcast", n.href;
    };
    var Rr = (i)=>typeof i == "function" ? i : function() {
            return i;
        }, d_ = typeof self < "u" ? self : null, bi = typeof window < "u" ? window : null, an = d_ || bi || globalThis, p_ = "2.0.0", m_ = 1e4, g_ = 1e3, rn = {
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
    }, pc = {
        longpoll: "longpoll",
        websocket: "websocket"
    }, y_ = {
        complete: 4
    }, mc = "base64url.bearer.phx.", ll = class {
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
    }, ug = class {
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
    }, v_ = class {
        constructor(i, n, r){
            this.state = vt.closed, this.topic = i, this.params = Rr(n || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new ll(this, An.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new ug(()=>{
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
                if (i.readyState === y_.complete && d) {
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
    }, b_ = (i)=>{
        let n = "", r = new Uint8Array(i), l = r.byteLength;
        for(let u = 0; u < l; u++)n += String.fromCharCode(r[u]);
        return btoa(n);
    }, hi = class {
        constructor(i, n){
            n && n.length === 2 && n[1].startsWith(mc) && (this.authToken = atob(n[1].slice(mc.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = new Set, this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(i), this.readyState = rn.connecting, setTimeout(()=>this.poll(), 0);
        }
        normalizeEndpoint(i) {
            return i.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + pc.websocket), "$1/" + pc.longpoll);
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
            typeof i != "string" && (i = b_(i)), this.currentBatch ? this.currentBatch.push(i) : this.awaitingBatchAck ? this.batchBuffer.push(i) : (this.currentBatch = [
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
    }, __ = class Ar {
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
                    let v = g.metas.map((U)=>U.phx_ref), S = b.metas.map((U)=>U.phx_ref), E = g.metas.filter((U)=>S.indexOf(U.phx_ref) < 0), N = b.metas.filter((U)=>v.indexOf(U.phx_ref) < 0);
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
    }, w_ = class {
        constructor(i, n = {}){
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = n.timeout || m_, this.transport = n.transport || an.WebSocket || hi, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = n.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = n.sessionStorage || an && an.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = ol.encode.bind(ol), this.defaultDecoder = ol.decode.bind(ol), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = n.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== hi ? (this.encode = n.encode || this.defaultEncoder, this.decode = n.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
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
            }), this.longpollerTimeout = n.longpollerTimeout || 2e4, this.params = Rr(n.params || {}), this.endPoint = `${i}/${pc.websocket}`, this.vsn = n.vsn || p_, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new ug(()=>{
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
                `${mc}${btoa(this.authToken).replace(/=/g, "")}`
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
                this.triggerChanError(), this.closeWasClean = !1, this.teardown(()=>this.reconnectTimer.scheduleTimeout(), g_, "heartbeat timeout");
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
            let r = new v_(i, n, this);
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
            const l = E_(r);
            this.presence = new __(n.getChannel(), l), this.presence.onJoin((u, h, f)=>{
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
            return n = S_(n), Object.getOwnPropertyNames(n).reduce((r, l)=>{
                const u = n[l];
                return r[l] = gl(u), r;
            }, {});
        }
        static onJoinPayload(n, r, l) {
            const u = um(r), h = gl(l);
            return {
                event: "join",
                key: n,
                currentPresences: u,
                newPresences: h
            };
        }
        static onLeavePayload(n, r, l) {
            const u = um(r), h = gl(l);
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
    function S_(i) {
        return JSON.parse(JSON.stringify(i));
    }
    function E_(i) {
        return i?.events && {
            events: i.events
        };
    }
    function um(i) {
        return i?.metas ? gl(i) : [];
    }
    var cm;
    (function(i) {
        i.SYNC = "sync", i.JOIN = "join", i.LEAVE = "leave";
    })(cm || (cm = {}));
    class T_ {
        get state() {
            return this.presenceAdapter.state;
        }
        constructor(n, r){
            this.channel = n, this.presenceAdapter = new Or(this.channel.channelAdapter, r);
        }
    }
    class A_ {
        constructor(n, r, l){
            const u = x_(l);
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
            if (this.channel.pushBuffer.length > r_) {
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
    function x_(i) {
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
    var hm;
    (function(i) {
        i.ALL = "*", i.INSERT = "INSERT", i.UPDATE = "UPDATE", i.DELETE = "DELETE";
    })(hm || (hm = {}));
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
            }, r.config), this.channelAdapter = new A_(this.socket.socketAdapter, n, this.params), this.presence = new T_(this), this._onClose(()=>{
                this.socket._remove(this);
            }), this._updateFilterTransform(), this.broadcastEndpointURL = og(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((h = (u = this.params.config) === null || u === void 0 ? void 0 : u.broadcast) === null || h === void 0) && h.replay)) throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
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
            const { close: l, error: u, leave: h, join: f } = sg;
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
            return (n.type === "INSERT" || n.type === "UPDATE") && (r.new = om(n.columns, n.record)), (n.type === "UPDATE" || n.type === "DELETE") && (r.old = om(n.columns, n.old_record)), r;
        }
    }
    class R_ {
        constructor(n, r){
            this.socket = new w_(n, r);
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
            return this.socket.connectionState() == fc.connecting;
        }
        isDisconnecting() {
            return this.socket.connectionState() == fc.closing;
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
    const O_ = {
        HEARTBEAT_INTERVAL: 25e3
    }, C_ = [
        1e3,
        2e3,
        5e3,
        1e4
    ], k_ = 1e4, j_ = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
    class N_ {
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
            if (this.channels = new Array, this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new s_, this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._resolveFetch = (h)=>h ? (...f)=>h(...f) : (...f)=>fetch(...f), !(!((l = r?.params) === null || l === void 0) && l.apikey)) throw new Error("API key is required to connect to Realtime");
            this.apiKey = r.params.apikey;
            const u = this._initializeOptions(r);
            this.socketAdapter = new R_(n, u), this.httpEndpoint = og(n), this.fetch = this._resolveFetch(r?.fetch);
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
            return this.socketAdapter.connectionState() || fc.closed;
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
                    version: t_
                };
                r && u.updateJoinPayload(h), u.joinedOnce && u.channelAdapter.isJoined() && u.channelAdapter.push(sg.access_token, {
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
                    j_
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
            v.timeout = (u = n?.timeout) !== null && u !== void 0 ? u : i_, v.heartbeatIntervalMs = (h = n?.heartbeatIntervalMs) !== null && h !== void 0 ? h : O_.HEARTBEAT_INTERVAL, v.transport = (f = n?.transport) !== null && f !== void 0 ? f : Fb.getWebSocketConstructor(), v.params = n?.params, v.logger = n?.logger, v.heartbeatCallback = this._wrapHeartbeatCallback(n?.heartbeatCallback), v.reconnectAfterMs = (d = n?.reconnectAfterMs) !== null && d !== void 0 ? d : ((U)=>C_[U - 1] || k_);
            let S, E;
            const N = (p = n?.vsn) !== null && p !== void 0 ? p : a_;
            switch(N){
                case n_:
                    S = (U, k)=>k(JSON.stringify(U)), E = (U, k)=>k(JSON.parse(U));
                    break;
                case rg:
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
    function U_(i, n, r) {
        const l = new URL(n, i);
        if (r) for (const [u, h] of Object.entries(r))h !== void 0 && l.searchParams.set(u, h);
        return l.toString();
    }
    async function D_(i) {
        return !i || i.type === "none" ? {} : i.type === "bearer" ? {
            Authorization: `Bearer ${i.token}`
        } : i.type === "header" ? {
            [i.name]: i.value
        } : i.type === "custom" ? await i.getHeaders() : {};
    }
    function z_(i) {
        const n = i.fetchImpl ?? globalThis.fetch;
        return {
            async request ({ method: r, path: l, query: u, body: h, headers: f }) {
                const d = U_(i.baseUrl, l, u), p = await D_(i.auth), g = await n(d, {
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
    var L_ = class {
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
    var M_ = class {
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
    }, H_ = class {
        constructor(i){
            let n = "v1";
            i.catalogName && (n += `/${i.catalogName}`);
            const r = i.baseUrl.endsWith("/") ? i.baseUrl : `${i.baseUrl}/`;
            this.client = z_({
                baseUrl: r,
                auth: i.auth,
                fetchImpl: i.fetch
            }), this.accessDelegation = i.accessDelegation?.join(","), this.namespaceOps = new L_(this.client, n), this.tableOps = new M_(this.client, n, this.accessDelegation);
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
    var gc = class extends xl {
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
    }, cg = class extends xl {
        constructor(i, n, r = "storage"){
            super(i, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = n;
        }
    };
    const B_ = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), q_ = (i)=>{
        if (typeof i != "object" || i === null) return !1;
        const n = Object.getPrototypeOf(i);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
    }, yc = (i)=>{
        if (Array.isArray(i)) return i.map((r)=>yc(r));
        if (typeof i == "function" || i !== Object(i)) return i;
        const n = {};
        return Object.entries(i).forEach(([r, l])=>{
            const u = r.replace(/([-_][a-z])/gi, (h)=>h.toUpperCase().replace(/[-_]/g, ""));
            n[u] = yc(l);
        }), n;
    }, $_ = (i)=>!i || typeof i != "string" || i.length === 0 || i.length > 100 || i.trim() !== i || i.includes("/") || i.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(i);
    function Ur(i) {
        "@babel/helpers - typeof";
        return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, Ur(i);
    }
    function P_(i, n) {
        if (Ur(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (Ur(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function G_(i) {
        var n = P_(i, "string");
        return Ur(n) == "symbol" ? n : n + "";
    }
    function V_(i, n, r) {
        return (n = G_(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function fm(i, n) {
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
            n % 2 ? fm(Object(r), !0).forEach(function(l) {
                V_(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : fm(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const dm = (i)=>{
        var n;
        return i.msg || i.message || i.error_description || (typeof i.error == "string" ? i.error : (n = i.error) === null || n === void 0 ? void 0 : n.message) || JSON.stringify(i);
    }, K_ = async (i, n, r, l)=>{
        if (i !== null && typeof i == "object" && typeof i.json == "function") {
            const u = i;
            let h = parseInt(u.status, 10);
            Number.isFinite(h) || (h = 500), u.json().then((f)=>{
                const d = f?.statusCode || f?.code || h + "";
                n(new gc(dm(f), h, d, l));
            }).catch(()=>{
                const f = h + "";
                n(new gc(u.statusText || `HTTP ${h} error`, h, f, l));
            });
        } else n(new cg(dm(i), i, l));
    }, Y_ = (i, n, r, l)=>{
        const u = {
            method: i,
            headers: n?.headers || {}
        };
        if (i === "GET" || i === "HEAD" || !l) return F(F({}, u), r);
        if (q_(l)) {
            var h;
            const f = n?.headers || {};
            let d;
            for (const [p, g] of Object.entries(f))p.toLowerCase() === "content-type" && (d = g);
            u.headers = I_(f, "Content-Type", (h = d) !== null && h !== void 0 ? h : "application/json"), u.body = JSON.stringify(l);
        } else u.body = l;
        return n?.duplex && (u.duplex = n.duplex), F(F({}, u), r);
    };
    function I_(i, n, r) {
        const l = F({}, i);
        for (const u of Object.keys(l))u.toLowerCase() === n.toLowerCase() && delete l[u];
        return l[n] = r, l;
    }
    async function Tr(i, n, r, l, u, h, f) {
        return new Promise((d, p)=>{
            i(r, Y_(n, l, u, h)).then((g)=>{
                if (!g.ok) throw g;
                if (l?.noResolveJson) return g;
                if (f === "vectors") {
                    const b = g.headers.get("content-type");
                    if (g.headers.get("content-length") === "0" || g.status === 204) return {};
                    if (!b || !b.includes("application/json")) return {};
                }
                return g.json();
            }).then((g)=>d(g)).catch((g)=>K_(g, p, l, f));
        });
    }
    function hg(i = "storage") {
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
    const X_ = hg("storage"), { get: Dr, post: Xt, put: vc, head: J_, remove: Dc } = X_, kt = hg("vectors");
    var Ri = class {
        constructor(i, n = {}, r, l = "storage"){
            this.shouldThrowOnError = !1, this.url = i, this.headers = Object.fromEntries(Object.entries(n).map(([u, h])=>[
                    u.toLowerCase(),
                    h
                ])), this.fetch = B_(r), this.namespace = l;
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
    }, W_ = class {
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
    let fg;
    fg = Symbol.toStringTag;
    var Q_ = class {
        constructor(i, n){
            this.downloadFn = i, this.shouldThrowOnError = n, this[fg] = "BlobDownloadBuilder", this.promise = null;
        }
        asStream() {
            return new W_(this.downloadFn, this.shouldThrowOnError);
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
    const Z_ = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    }, pm = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
    var F_ = class extends Ri {
        constructor(i, n = {}, r, l){
            super(i, n, l, "storage"), this.bucketId = r;
        }
        async uploadOrUpdate(i, n, r, l) {
            var u = this;
            return u.handleOperation(async ()=>{
                let h;
                const f = F(F({}, pm), l);
                let d = F(F({}, u.headers), i === "POST" && {
                    "x-upsert": String(f.upsert)
                });
                const p = f.metadata;
                typeof Blob < "u" && r instanceof Blob ? (h = new FormData, h.append("cacheControl", f.cacheControl), p && h.append("metadata", u.encodeMetadata(p)), h.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (h = r, h.has("cacheControl") || h.append("cacheControl", f.cacheControl), p && !h.has("metadata") && h.append("metadata", u.encodeMetadata(p))) : (h = r, d["cache-control"] = `max-age=${f.cacheControl}`, d["content-type"] = f.contentType, p && (d["x-metadata"] = u.toBase64(u.encodeMetadata(p))), (typeof ReadableStream < "u" && h instanceof ReadableStream || h && typeof h == "object" && "pipe" in h && typeof h.pipe == "function") && !f.duplex && (f.duplex = "half")), l?.headers && (d = F(F({}, d), l.headers));
                const g = u._removeEmptyFolders(n), b = u._getFinalPath(g), v = await (i == "PUT" ? vc : Xt)(u.fetch, `${u.url}/object/${b}`, h, F({
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
                const g = F(F({}, pm), l), b = F(F({}, u.headers), {
                    "x-upsert": String(g.upsert)
                });
                return typeof Blob < "u" && r instanceof Blob ? (p = new FormData, p.append("cacheControl", g.cacheControl), p.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (p = r, p.append("cacheControl", g.cacheControl)) : (p = r, b["cache-control"] = `max-age=${g.cacheControl}`, b["content-type"] = g.contentType), {
                    path: h,
                    fullPath: (await vc(u.fetch, d.toString(), p, {
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
                const h = await Xt(r.fetch, `${r.url}/object/upload/sign/${l}`, {}, {
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
            return l.handleOperation(async ()=>await Xt(l.fetch, `${l.url}/object/move`, {
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
                    path: (await Xt(l.fetch, `${l.url}/object/copy`, {
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
                let f = await Xt(l.fetch, `${l.url}/object/sign/${u}`, F({
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
                const u = await Xt(l.fetch, `${l.url}/object/sign/${l.bucketId}`, {
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
            const h = u.toString(), f = this._getFinalPath(i), d = ()=>Dr(this.fetch, `${this.url}/${l}/${f}${h ? `?${h}` : ""}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }, r);
            return new Q_(d, this.shouldThrowOnError);
        }
        async info(i) {
            var n = this;
            const r = n._getFinalPath(i);
            return n.handleOperation(async ()=>yc(await Dr(n.fetch, `${n.url}/object/info/${r}`, {
                    headers: n.headers
                })));
        }
        async exists(i) {
            var n = this;
            const r = n._getFinalPath(i);
            try {
                return await J_(n.fetch, `${n.url}/object/${r}`, {
                    headers: n.headers
                }), {
                    data: !0,
                    error: null
                };
            } catch (u) {
                if (n.shouldThrowOnError) throw u;
                if (Rl(u)) {
                    var l;
                    const h = u instanceof gc ? u.status : u instanceof cg ? (l = u.originalError) === null || l === void 0 ? void 0 : l.status : void 0;
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
            return n.handleOperation(async ()=>await Dc(n.fetch, `${n.url}/object/${n.bucketId}`, {
                    prefixes: i
                }, {
                    headers: n.headers
                }));
        }
        async list(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                const u = F(F(F({}, Z_), n), {}, {
                    prefix: i || ""
                });
                return await Xt(l.fetch, `${l.url}/object/list/${l.bucketId}`, u, {
                    headers: l.headers
                }, r);
            });
        }
        async listV2(i, n) {
            var r = this;
            return r.handleOperation(async ()=>{
                const l = F({}, i);
                return await Xt(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, l, {
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
    const ew = "2.103.0", qr = {
        "X-Client-Info": `storage-js/${ew}`
    };
    var tw = class extends Ri {
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
                return await Dr(n.fetch, `${n.url}/bucket${r}`, {
                    headers: n.headers
                });
            });
        }
        async getBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Dr(n.fetch, `${n.url}/bucket/${i}`, {
                    headers: n.headers
                }));
        }
        async createBucket(i, n = {
            public: !1
        }) {
            var r = this;
            return r.handleOperation(async ()=>await Xt(r.fetch, `${r.url}/bucket`, {
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
            return r.handleOperation(async ()=>await vc(r.fetch, `${r.url}/bucket/${i}`, {
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
            return n.handleOperation(async ()=>await Xt(n.fetch, `${n.url}/bucket/${i}/empty`, {}, {
                    headers: n.headers
                }));
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Dc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        listBucketOptionsToQueryString(i) {
            const n = {};
            return i && ("limit" in i && (n.limit = String(i.limit)), "offset" in i && (n.offset = String(i.offset)), i.search && (n.search = i.search), i.sortColumn && (n.sortColumn = i.sortColumn), i.sortOrder && (n.sortOrder = i.sortOrder)), Object.keys(n).length > 0 ? "?" + new URLSearchParams(n).toString() : "";
        }
    }, nw = class extends Ri {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = F(F({}, qr), n);
            super(l, u, r, "storage");
        }
        async createBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Xt(n.fetch, `${n.url}/bucket`, {
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
                return await Dr(n.fetch, u, {
                    headers: n.headers
                });
            });
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Dc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        from(i) {
            var n = this;
            if (!$_(i)) throw new xl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
            const r = new H_({
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
    }, aw = class extends Ri {
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
    }, iw = class extends Ri {
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
    }, rw = class extends Ri {
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
    }, sw = class extends rw {
        constructor(i, n = {}){
            super(i, n.headers || {}, n.fetch);
        }
        from(i) {
            return new lw(this.url, this.headers, i, this.fetch);
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
    }, lw = class extends aw {
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
            return new ow(this.url, this.headers, this.vectorBucketName, i, this.fetch);
        }
    }, ow = class extends iw {
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
    }, uw = class extends tw {
        constructor(i, n = {}, r, l){
            super(i, n, r, l);
        }
        from(i) {
            return new F_(this.url, this.headers, i, this.fetch);
        }
        get vectors() {
            return new sw(this.url + "/vector", {
                headers: this.headers,
                fetch: this.fetch
            });
        }
        get analytics() {
            return new nw(this.url + "/iceberg", this.headers, this.fetch);
        }
    };
    const dg = "2.103.0", _i = 30 * 1e3, bc = 3, ic = bc * _i, cw = "http://localhost:9999", hw = "supabase.auth.token", fw = {
        "X-Client-Info": `gotrue-js/${dg}`
    }, _c = "X-Supabase-Api-Version", pg = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    }, dw = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, pw = 600 * 1e3;
    class zr extends Error {
        constructor(n, r, l){
            super(n), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = l;
        }
    }
    function X(i) {
        return typeof i == "object" && i !== null && "__isAuthError" in i;
    }
    class mw extends zr {
        constructor(n, r, l){
            super(n, r, l), this.name = "AuthApiError", this.status = r, this.code = l;
        }
    }
    function gw(i) {
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
    function yw(i) {
        return X(i) && i.name === "AuthImplicitGrantRedirectError";
    }
    class mm extends Cn {
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
    class vw extends Cn {
        constructor(){
            super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
        }
    }
    class wc extends Cn {
        constructor(n, r){
            super(n, "AuthRetryableFetchError", r, void 0);
        }
    }
    function rc(i) {
        return X(i) && i.name === "AuthRetryableFetchError";
    }
    class gm extends Cn {
        constructor(n, r, l){
            super(n, "AuthWeakPasswordError", r, "weak_password"), this.reasons = l;
        }
    }
    class Sc extends Cn {
        constructor(n){
            super(n, "AuthInvalidJwtError", 400, "invalid_jwt");
        }
    }
    const bl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), ym = ` 	
\r=`.split(""), bw = (()=>{
        const i = new Array(128);
        for(let n = 0; n < i.length; n += 1)i[n] = -1;
        for(let n = 0; n < ym.length; n += 1)i[ym[n].charCodeAt(0)] = -2;
        for(let n = 0; n < bl.length; n += 1)i[bl[n].charCodeAt(0)] = n;
        return i;
    })();
    function vm(i, n, r) {
        if (i !== null) for(n.queue = n.queue << 8 | i, n.queuedBits += 8; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r(bl[l]), n.queuedBits -= 6;
        }
        else if (n.queuedBits > 0) for(n.queue = n.queue << 6 - n.queuedBits, n.queuedBits = 6; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r(bl[l]), n.queuedBits -= 6;
        }
    }
    function mg(i, n, r) {
        const l = bw[i];
        if (l > -1) for(n.queue = n.queue << 6 | l, n.queuedBits += 6; n.queuedBits >= 8;)r(n.queue >> n.queuedBits - 8 & 255), n.queuedBits -= 8;
        else {
            if (l === -2) return;
            throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`);
        }
    }
    function bm(i) {
        const n = [], r = (f)=>{
            n.push(String.fromCodePoint(f));
        }, l = {
            utf8seq: 0,
            codepoint: 0
        }, u = {
            queue: 0,
            queuedBits: 0
        }, h = (f)=>{
            Sw(f, l, r);
        };
        for(let f = 0; f < i.length; f += 1)mg(i.charCodeAt(f), u, h);
        return n.join("");
    }
    function _w(i, n) {
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
    function ww(i, n) {
        for(let r = 0; r < i.length; r += 1){
            let l = i.charCodeAt(r);
            if (l > 55295 && l <= 56319) {
                const u = (l - 55296) * 1024 & 65535;
                l = (i.charCodeAt(r + 1) - 56320 & 65535 | u) + 65536, r += 1;
            }
            _w(l, n);
        }
    }
    function Sw(i, n, r) {
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
        for(let u = 0; u < i.length; u += 1)mg(i.charCodeAt(u), r, l);
        return new Uint8Array(n);
    }
    function Ew(i) {
        const n = [];
        return ww(i, (r)=>n.push(r)), new Uint8Array(n);
    }
    function xa(i) {
        const n = [], r = {
            queue: 0,
            queuedBits: 0
        }, l = (u)=>{
            n.push(u);
        };
        return i.forEach((u)=>vm(u, r, l)), vm(null, r, l), n.join("");
    }
    function Tw(i) {
        return Math.round(Date.now() / 1e3) + i;
    }
    function Aw() {
        return Symbol("auth-callback");
    }
    const st = ()=>typeof window < "u" && typeof document < "u", Sa = {
        tested: !1,
        writable: !1
    }, gg = ()=>{
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
    function xw(i) {
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
    const yg = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), Rw = (i)=>typeof i == "object" && i !== null && "status" in i && "ok" in i && "json" in i && typeof i.json == "function", wi = async (i, n, r)=>{
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
        if (n.length !== 3) throw new Sc("Invalid JWT structure");
        for(let l = 0; l < n.length; l++)if (!dw.test(n[l])) throw new Sc("JWT not in base64url format");
        return {
            header: JSON.parse(bm(n[0])),
            payload: JSON.parse(bm(n[1])),
            signature: Ei(n[2]),
            raw: {
                header: n[0],
                payload: n[1]
            }
        };
    }
    async function Ow(i) {
        return await new Promise((n)=>{
            setTimeout(()=>n(null), i);
        });
    }
    function Cw(i, n) {
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
    function kw(i) {
        return ("0" + i.toString(16)).substr(-2);
    }
    function jw() {
        const n = new Uint32Array(56);
        if (typeof crypto > "u") {
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", l = r.length;
            let u = "";
            for(let h = 0; h < 56; h++)u += r.charAt(Math.floor(Math.random() * l));
            return u;
        }
        return crypto.getRandomValues(n), Array.from(n, kw).join("");
    }
    async function Nw(i) {
        const r = new TextEncoder().encode(i), l = await crypto.subtle.digest("SHA-256", r), u = new Uint8Array(l);
        return Array.from(u).map((h)=>String.fromCharCode(h)).join("");
    }
    async function Uw(i) {
        if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), i;
        const r = await Nw(i);
        return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    async function pi(i, n, r = !1) {
        const l = jw();
        let u = l;
        r && (u += "/PASSWORD_RECOVERY"), await wi(i, `${n}-code-verifier`, u);
        const h = await Uw(l);
        return [
            h,
            l === h ? "plain" : "s256"
        ];
    }
    const Dw = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
    function zw(i) {
        const n = i.headers.get(_c);
        if (!n || !n.match(Dw)) return null;
        try {
            return new Date(`${n}T00:00:00.0Z`);
        } catch  {
            return null;
        }
    }
    function Lw(i) {
        if (!i) throw new Error("Missing exp claim");
        const n = Math.floor(Date.now() / 1e3);
        if (i <= n) throw new Error("JWT has expired");
    }
    function Mw(i) {
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
    const Hw = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    function mi(i) {
        if (!Hw.test(i)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
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
    function Bw(i, n) {
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
    function _m(i) {
        return JSON.parse(JSON.stringify(i));
    }
    const Ta = (i)=>i.msg || i.message || i.error_description || i.error || JSON.stringify(i), qw = [
        502,
        503,
        504
    ];
    async function wm(i) {
        var n;
        if (!Rw(i)) throw new wc(Ta(i), 0);
        if (qw.includes(i.status)) throw new wc(Ta(i), i.status);
        let r;
        try {
            r = await i.json();
        } catch (h) {
            throw new Aa(Ta(h), h);
        }
        let l;
        const u = zw(i);
        if (u && u.getTime() >= pg["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? l = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (l = r.error_code), l) {
            if (l === "weak_password") throw new gm(Ta(r), i.status, ((n = r.weak_password) === null || n === void 0 ? void 0 : n.reasons) || []);
            if (l === "session_not_found") throw new Ct;
        } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((h, f)=>h && typeof f == "string", !0)) throw new gm(Ta(r), i.status, r.weak_password.reasons);
        throw new mw(Ta(r), i.status || 500, l);
    }
    const $w = (i, n, r, l)=>{
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
        h[_c] || (h[_c] = pg["2024-01-01"].name), l?.jwt && (h.Authorization = `Bearer ${l.jwt}`);
        const f = (u = l?.query) !== null && u !== void 0 ? u : {};
        l?.redirectTo && (f.redirect_to = l.redirectTo);
        const d = Object.keys(f).length ? "?" + new URLSearchParams(f).toString() : "", p = await Pw(i, n, r + d, {
            headers: h,
            noResolveJson: l?.noResolveJson
        }, {}, l?.body);
        return l?.xform ? l?.xform(p) : {
            data: Object.assign({}, p),
            error: null
        };
    }
    async function Pw(i, n, r, l, u, h) {
        const f = $w(n, l, u, h);
        let d;
        try {
            d = await i(r, Object.assign({}, f));
        } catch (p) {
            throw console.error(p), new wc(Ta(p), 0);
        }
        if (d.ok || await wm(d), l?.noResolveJson) return d;
        try {
            return await d.json();
        } catch (p) {
            await wm(p);
        }
    }
    function It(i) {
        var n;
        let r = null;
        Kw(i) && (r = Object.assign({}, i), i.expires_at || (r.expires_at = Tw(i.expires_in)));
        const l = (n = i.user) !== null && n !== void 0 ? n : i;
        return {
            data: {
                session: r,
                user: l
            },
            error: null
        };
    }
    function Sm(i) {
        const n = It(i);
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
    function Gw(i) {
        return {
            data: i,
            error: null
        };
    }
    function Vw(i) {
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
    function Em(i) {
        return i;
    }
    function Kw(i) {
        return i.access_token && i.refresh_token && i.expires_in;
    }
    const lc = [
        "global",
        "local",
        "others"
    ];
    class Yw {
        constructor({ url: n = "", headers: r = {}, fetch: l }){
            this.url = n, this.headers = r, this.fetch = yg(l), this.mfa = {
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
                    xform: Vw,
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
                    xform: Em
                });
                if (b.error) throw b.error;
                const v = await b.json(), S = (f = b.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, E = (p = (d = b.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && p !== void 0 ? p : [];
                return E.length > 0 && (E.forEach((N)=>{
                    const U = parseInt(N.split(";")[0].split("=")[1].substring(0, 1)), k = JSON.parse(N.split(";")[1].split("=")[1]);
                    g[`${k}Page`] = U;
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
                    xform: Em
                });
                if (b.error) throw b.error;
                const v = await b.json(), S = (f = b.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, E = (p = (d = b.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && p !== void 0 ? p : [];
                return E.length > 0 && (E.forEach((N)=>{
                    const U = parseInt(N.split(";")[0].split("=")[1].substring(0, 1)), k = JSON.parse(N.split(";")[1].split("=")[1]);
                    g[`${k}Page`] = U;
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
    function Tm(i = {}) {
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
        debug: !!(globalThis && gg() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
    };
    class vg extends Error {
        constructor(n){
            super(n), this.isAcquireTimeout = !0;
        }
    }
    class Am extends vg {
    }
    async function Iw(i, n, r) {
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
                    if (n === 0) throw nn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", i), new Am(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);
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
                throw nn.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", i), new Am(`Lock "${i}" was released because another request stole it`);
            }
            throw h;
        }
    }
    function Xw() {
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
    function bg(i) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(i)) throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);
        return i.toLowerCase();
    }
    function Jw(i) {
        return parseInt(i, 16);
    }
    function Ww(i) {
        const n = new TextEncoder().encode(i);
        return "0x" + Array.from(n, (l)=>l.toString(16).padStart(2, "0")).join("");
    }
    function Qw(i) {
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
        const E = bg(i.address), N = b ? `${b}://${l}` : l, U = i.statement ? `${i.statement}
` : "", k = `${N} wants you to sign in with your Ethereum account:
${E}

${U}`;
        let B = `URI: ${v}
Version: ${S}
Chain ID: ${r}${f ? `
Nonce: ${f}` : ""}
Issued At: ${h.toISOString()}`;
        if (u && (B += `
Expiration Time: ${u.toISOString()}`), d && (B += `
Not Before: ${d.toISOString()}`), p && (B += `
Request ID: ${p}`), g) {
            let P = `
Resources:`;
            for (const z of g){
                if (!z || typeof z != "string") throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${z}`);
                P += `
- ${z}`;
            }
            B += P;
        }
        return `${k}
${B}`;
    }
    class Xe extends Error {
        constructor({ message: n, code: r, cause: l, name: u }){
            var h;
            super(n, {
                cause: l
            }), this.__isWebAuthnError = !0, this.name = (h = u ?? (l instanceof Error ? l.name : void 0)) !== null && h !== void 0 ? h : "Unknown Error", this.code = r;
        }
    }
    class _l extends Xe {
        constructor(n, r){
            super({
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: r,
                message: n
            }), this.name = "WebAuthnUnknownError", this.originalError = r;
        }
    }
    function Zw({ error: i, options: n }) {
        var r, l, u;
        const { publicKey: h } = n;
        if (!h) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new Xe({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else if (i.name === "ConstraintError") {
            if (((r = h.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0) return new Xe({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: i
            });
            if (n.mediation === "conditional" && ((l = h.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) === "required") return new Xe({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: i
            });
            if (((u = h.authenticatorSelection) === null || u === void 0 ? void 0 : u.userVerification) === "required") return new Xe({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: i
            });
        } else {
            if (i.name === "InvalidStateError") return new Xe({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: i
            });
            if (i.name === "NotAllowedError") return new Xe({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "NotSupportedError") return h.pubKeyCredParams.filter((d)=>d.type === "public-key").length === 0 ? new Xe({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: i
            }) : new Xe({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: i
            });
            if (i.name === "SecurityError") {
                const f = window.location.hostname;
                if (_g(f)) {
                    if (h.rp.id !== f) return new Xe({
                        message: `The RP ID "${h.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new Xe({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "TypeError") {
                if (h.user.id.byteLength < 1 || h.user.id.byteLength > 64) return new Xe({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new Xe({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new Xe({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    function Fw({ error: i, options: n }) {
        const { publicKey: r } = n;
        if (!r) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new Xe({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else {
            if (i.name === "NotAllowedError") return new Xe({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "SecurityError") {
                const l = window.location.hostname;
                if (_g(l)) {
                    if (r.rpId !== l) return new Xe({
                        message: `The RP ID "${r.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new Xe({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new Xe({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new Xe({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    class eS {
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
    const tS = new eS;
    function nS(i) {
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
    function aS(i) {
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
    function iS(i) {
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
    function rS(i) {
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
    function xm() {
        var i, n;
        return !!(st() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((i = navigator?.credentials) === null || i === void 0 ? void 0 : i.create) == "function" && typeof ((n = navigator?.credentials) === null || n === void 0 ? void 0 : n.get) == "function");
    }
    async function sS(i) {
        try {
            const n = await navigator.credentials.create(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new _l("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new _l("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: Zw({
                    error: n,
                    options: i
                })
            };
        }
    }
    async function lS(i) {
        try {
            const n = await navigator.credentials.get(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new _l("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new _l("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: Fw({
                    error: n,
                    options: i
                })
            };
        }
    }
    const oS = {
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
    }, uS = {
        userVerification: "preferred",
        hints: [
            "security-key"
        ],
        attestation: "direct"
    };
    function wl(...i) {
        const n = (u)=>u !== null && typeof u == "object" && !Array.isArray(u), r = (u)=>u instanceof ArrayBuffer || ArrayBuffer.isView(u), l = {};
        for (const u of i)if (u) for(const h in u){
            const f = u[h];
            if (f !== void 0) if (Array.isArray(f)) l[h] = f;
            else if (r(f)) l[h] = f;
            else if (n(f)) {
                const d = l[h];
                n(d) ? l[h] = wl(d, f) : l[h] = wl(f);
            } else l[h] = f;
        }
        return l;
    }
    function cS(i, n) {
        return wl(oS, i, n || {});
    }
    function hS(i, n) {
        return wl(uS, i, n || {});
    }
    class fS {
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
                const g = u ?? tS.createNewAbortSignal();
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
                            const b = cS(d.webauthn.credential_options.publicKey, h?.create), { data: v, error: S } = await sS({
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
                            const b = hS(d.webauthn.credential_options.publicKey, h?.request), { data: v, error: S } = await lS(Object.assign(Object.assign({}, d.webauthn.credential_options), {
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
                if (!xm()) return {
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
                if (!xm()) return {
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
    Xw();
    const dS = {
        url: cw,
        storageKey: hw,
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: fw,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
        throwOnError: !1,
        lockAcquireTimeout: 5e3,
        skipAutoInitialize: !1
    };
    async function Rm(i, n, r) {
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
            const h = Object.assign(Object.assign({}, dS), n);
            if (this.storageKey = h.storageKey, this.instanceID = (r = Lr.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, Lr.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!h.debug, typeof h.debug == "function" && (this.logger = h.debug), this.instanceID > 0 && st()) {
                const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
                console.warn(f), this.logDebugMessages && console.trace(f);
            }
            if (this.persistSession = h.persistSession, this.autoRefreshToken = h.autoRefreshToken, this.admin = new Yw({
                url: h.url,
                headers: h.headers,
                fetch: h.fetch
            }), this.url = h.url, this.headers = h.headers, this.fetch = yg(h.fetch), this.lock = h.lock || Rm, this.detectSessionInUrl = h.detectSessionInUrl, this.flowType = h.flowType, this.hasCustomAuthorizationHeader = h.hasCustomAuthorizationHeader, this.throwOnError = h.throwOnError, this.lockAcquireTimeout = h.lockAcquireTimeout, h.lock ? this.lock = h.lock : this.persistSession && st() && (!((l = globalThis?.navigator) === null || l === void 0) && l.locks) ? this.lock = Iw : this.lock = Rm, this.jwks || (this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                webauthn: new fS(this)
            }, this.oauth = {
                getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
                approveAuthorization: this._approveAuthorization.bind(this),
                denyAuthorization: this._denyAuthorization.bind(this),
                listGrants: this._listOAuthGrants.bind(this),
                revokeGrant: this._revokeOAuthGrant.bind(this)
            }, this.persistSession ? (h.storage ? this.storage = h.storage : gg() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Tm(this.memoryStorage)), h.userStorage && (this.userStorage = h.userStorage)) : (this.memoryStorage = {}, this.storage = Tm(this.memoryStorage)), st() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
            return `GoTrueClient@${this.storageKey}:${this.instanceID} (${dg}) ${new Date().toISOString()}`;
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
                if (st() && (r = xw(window.location.href), this._isImplicitGrantCallback(r) ? l = "implicit" : await this._isPKCECallback(r) && (l = "pkce")), st() && this.detectSessionInUrl && l !== "none") {
                    const { data: u, error: h } = await this._getSessionFromURL(r, l);
                    if (h) {
                        if (this._debug("#_initialize()", "error detecting session from URL", h), yw(h)) {
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
                    xform: It
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
                        xform: It
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
                        xform: It
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
                        xform: Sm
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
                        xform: Sm
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
                const { chain: U, wallet: k, statement: B, options: P } = n;
                let z;
                if (st()) if (typeof k == "object") z = k;
                else {
                    const Se = window;
                    if ("ethereum" in Se && typeof Se.ethereum == "object" && "request" in Se.ethereum && typeof Se.ethereum.request == "function") z = Se.ethereum;
                    else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof k != "object" || !P?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    z = k;
                }
                const K = new URL((r = P?.url) !== null && r !== void 0 ? r : window.location.href), te = await z.request({
                    method: "eth_requestAccounts"
                }).then((Se)=>Se).catch(()=>{
                    throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
                });
                if (!te || te.length === 0) throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
                const ne = bg(te[0]);
                let Y = (l = P?.signInWithEthereum) === null || l === void 0 ? void 0 : l.chainId;
                if (!Y) {
                    const Se = await z.request({
                        method: "eth_chainId"
                    });
                    Y = Jw(Se);
                }
                const ke = {
                    domain: K.host,
                    address: ne,
                    statement: B,
                    uri: K.href,
                    version: "1",
                    chainId: Y,
                    nonce: (u = P?.signInWithEthereum) === null || u === void 0 ? void 0 : u.nonce,
                    issuedAt: (f = (h = P?.signInWithEthereum) === null || h === void 0 ? void 0 : h.issuedAt) !== null && f !== void 0 ? f : new Date,
                    expirationTime: (d = P?.signInWithEthereum) === null || d === void 0 ? void 0 : d.expirationTime,
                    notBefore: (p = P?.signInWithEthereum) === null || p === void 0 ? void 0 : p.notBefore,
                    requestId: (g = P?.signInWithEthereum) === null || g === void 0 ? void 0 : g.requestId,
                    resources: (b = P?.signInWithEthereum) === null || b === void 0 ? void 0 : b.resources
                };
                E = Qw(ke), N = await z.request({
                    method: "personal_sign",
                    params: [
                        Ww(E),
                        ne
                    ]
                });
            }
            try {
                const { data: U, error: k } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
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
                    xform: It
                });
                if (k) throw k;
                if (!U || !U.session || !U.user) {
                    const B = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: B
                    });
                }
                return U.session && (await this._saveSession(U.session), await this._notifyAllSubscribers("SIGNED_IN", U.session)), this._returnResult({
                    data: Object.assign({}, U),
                    error: k
                });
            } catch (U) {
                if (X(U)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: U
                });
                throw U;
            }
        }
        async signInWithSolana(n) {
            var r, l, u, h, f, d, p, g, b, v, S, E;
            let N, U;
            if ("message" in n) N = n.message, U = n.signature;
            else {
                const { chain: k, wallet: B, statement: P, options: z } = n;
                let K;
                if (st()) if (typeof B == "object") K = B;
                else {
                    const ne = window;
                    if ("solana" in ne && typeof ne.solana == "object" && ("signIn" in ne.solana && typeof ne.solana.signIn == "function" || "signMessage" in ne.solana && typeof ne.solana.signMessage == "function")) K = ne.solana;
                    else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof B != "object" || !z?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    K = B;
                }
                const te = new URL((r = z?.url) !== null && r !== void 0 ? r : window.location.href);
                if ("signIn" in K && K.signIn) {
                    const ne = await K.signIn(Object.assign(Object.assign(Object.assign({
                        issuedAt: new Date().toISOString()
                    }, z?.signInWithSolana), {
                        version: "1",
                        domain: te.host,
                        uri: te.href
                    }), P ? {
                        statement: P
                    } : null));
                    let Y;
                    if (Array.isArray(ne) && ne[0] && typeof ne[0] == "object") Y = ne[0];
                    else if (ne && typeof ne == "object" && "signedMessage" in ne && "signature" in ne) Y = ne;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                    if ("signedMessage" in Y && "signature" in Y && (typeof Y.signedMessage == "string" || Y.signedMessage instanceof Uint8Array) && Y.signature instanceof Uint8Array) N = typeof Y.signedMessage == "string" ? Y.signedMessage : new TextDecoder().decode(Y.signedMessage), U = Y.signature;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
                } else {
                    if (!("signMessage" in K) || typeof K.signMessage != "function" || !("publicKey" in K) || typeof K != "object" || !K.publicKey || !("toBase58" in K.publicKey) || typeof K.publicKey.toBase58 != "function") throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                    N = [
                        `${te.host} wants you to sign in with your Solana account:`,
                        K.publicKey.toBase58(),
                        ...P ? [
                            "",
                            P,
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
                            ...z.signInWithSolana.resources.map((Y)=>`- ${Y}`)
                        ] : []
                    ].join(`
`);
                    const ne = await K.signMessage(new TextEncoder().encode(N), "utf8");
                    if (!ne || !(ne instanceof Uint8Array)) throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                    U = ne;
                }
            }
            try {
                const { data: k, error: B } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                    headers: this.headers,
                    body: Object.assign({
                        chain: "solana",
                        message: N,
                        signature: xa(U)
                    }, !((S = n.options) === null || S === void 0) && S.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: (E = n.options) === null || E === void 0 ? void 0 : E.captchaToken
                        }
                    } : null),
                    xform: It
                });
                if (B) throw B;
                if (!k || !k.session || !k.user) {
                    const P = new di;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: P
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
                if (!l && this.flowType === "pkce") throw new vw;
                const { data: h, error: f } = await Z(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                    headers: this.headers,
                    body: {
                        auth_code: n,
                        code_verifier: l
                    },
                    xform: It
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
                    xform: It
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
                    xform: It
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
                    xform: Gw
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
                        n.user = Bw(n.user, f), f.value && (this.suppressGetSessionWarning = !0);
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
                        if (this.flowType === "pkce") throw new mm("Not a valid PKCE flow url.");
                        break;
                    case "pkce":
                        if (this.flowType === "implicit") throw new fl("Not a valid implicit grant flow url.");
                        break;
                    default:
                }
                if (r === "pkce") {
                    if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !n.code) throw new mm("No code detected.");
                    const { data: P, error: z } = await this._exchangeCodeForSession(n.code);
                    if (z) throw z;
                    const K = new URL(window.location.href);
                    return K.searchParams.delete("code"), window.history.replaceState(window.history.state, "", K.toString()), {
                        data: {
                            session: P.session,
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
                E * 1e3 <= _i && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${E}s, should have been closer to ${v}s`);
                const N = S - v;
                b - N >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", N, S, b) : b - N < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", N, S, b);
                const { data: U, error: k } = await this._getUser(h);
                if (k) throw k;
                const B = {
                    provider_token: l,
                    provider_refresh_token: u,
                    access_token: h,
                    expires_in: v,
                    expires_at: S,
                    refresh_token: f,
                    token_type: g,
                    user: U.user
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
                    if (d && !(gw(d) && (d.status === 404 || d.status === 401 || d.status === 403) || cl(d))) return this._returnResult({
                        error: d
                    });
                }
                return n !== "others" && (await this._removeSession(), await rt(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                    error: null
                });
            });
        }
        onAuthStateChange(n) {
            const r = Aw(), l = {
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
                        xform: It
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
                return await Cw(async (u)=>(u > 0 && await Ow(200 * Math.pow(2, u - 1)), this._debug(r, "refreshing attempt", u), await Z(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                        body: {
                            refresh_token: n
                        },
                        headers: this.headers,
                        xform: It
                    })), (u, h)=>{
                    const f = 200 * Math.pow(2, u);
                    return h && rc(h) && Date.now() + f - l < _i;
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
                    }, await wi(this.userStorage, this.storageKey + "-user", f)), u.user = (n = f?.user) !== null && n !== void 0 ? n : sc();
                } else if (u && !u.user && !u.user) {
                    const f = await Ea(this.storage, this.storageKey + "-user");
                    f && f?.user ? (u.user = f.user, await rt(this.storage, this.storageKey + "-user"), await wi(this.storage, this.storageKey, u)) : u.user = sc();
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
                !l && r.user && await wi(this.userStorage, this.storageKey + "-user", {
                    user: r.user
                });
                const u = Object.assign({}, r);
                delete u.user;
                const h = _m(u);
                await wi(this.storage, this.storageKey, h);
            } else {
                const u = _m(r);
                await wi(this.storage, this.storageKey, u);
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
            const n = setInterval(()=>this._autoRefreshTokenTick(), _i);
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
                                const u = Math.floor((l.expires_at * 1e3 - n) / _i);
                                this._debug("#_autoRefreshTokenTick()", `access token expires in ${u} ticks, a tick lasts ${_i}ms, refresh threshold is ${bc} ticks`), u <= bc && await this._callRefreshToken(l.refresh_token);
                            });
                        } catch (r) {
                            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
                        }
                    } finally{
                        this._debug("#_autoRefreshTokenTick()", "end");
                    }
                });
            } catch (n) {
                if (n.isAcquireTimeout || n instanceof vg) this._debug("auto refresh token tick lock not available");
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
                                credential_response: n.webauthn.type === "create" ? iS(n.webauthn.credential_response) : rS(n.webauthn.credential_response)
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
                                                publicKey: nS(d.webauthn.credential_options.publicKey)
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
                                                publicKey: aS(d.webauthn.credential_options.publicKey)
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
                let U = N;
                const { data: { user: k }, error: B } = await this.getUser(n);
                if (B) return this._returnResult({
                    data: null,
                    error: B
                });
                ((l = (r = k?.factors) === null || r === void 0 ? void 0 : r.filter((K)=>K.status === "verified")) !== null && l !== void 0 ? l : []).length > 0 && (U = "aal2");
                const z = E.amr || [];
                return {
                    data: {
                        currentLevel: N,
                        nextLevel: U,
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
            if (l = this.jwks.keys.find((d)=>d.kid === n), l && this.jwks_cached_at + pw > u) return l;
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
                r?.allowExpired || Lw(h.exp);
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
                const b = Mw(u.alg), v = await crypto.subtle.importKey("jwk", g, b, !0, [
                    "verify"
                ]);
                if (!await crypto.subtle.verify(b, v, f, Ew(`${d}.${p}`))) throw new Sc("Invalid JWT signature");
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
    const pS = Lr, mS = "2.103.0";
    let xr = "";
    typeof Deno < "u" ? xr = "deno" : typeof document < "u" ? xr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? xr = "react-native" : xr = "node";
    const gS = {
        "X-Client-Info": `supabase-js-${xr}/${mS}`
    }, yS = {
        headers: gS
    }, vS = {
        schema: "public"
    }, bS = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    }, _S = {};
    function Mr(i) {
        "@babel/helpers - typeof";
        return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, Mr(i);
    }
    function wS(i, n) {
        if (Mr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (Mr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function SS(i) {
        var n = wS(i, "string");
        return Mr(n) == "symbol" ? n : n + "";
    }
    function ES(i, n, r) {
        return (n = SS(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function Om(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function Be(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? Om(Object(r), !0).forEach(function(l) {
                ES(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const TS = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), AS = ()=>Headers, xS = (i, n, r)=>{
        const l = TS(r), u = AS();
        return async (h, f)=>{
            var d;
            const p = (d = await n()) !== null && d !== void 0 ? d : i;
            let g = new u(f?.headers);
            return g.has("apikey") || g.set("apikey", i), g.has("Authorization") || g.set("Authorization", `Bearer ${p}`), l(h, Be(Be({}, f), {}, {
                headers: g
            }));
        };
    };
    function RS(i) {
        return i.endsWith("/") ? i : i + "/";
    }
    function OS(i, n) {
        var r, l;
        const { db: u, auth: h, realtime: f, global: d } = i, { db: p, auth: g, realtime: b, global: v } = n, S = {
            db: Be(Be({}, p), u),
            auth: Be(Be({}, g), h),
            realtime: Be(Be({}, b), f),
            storage: {},
            global: Be(Be(Be({}, v), d), {}, {
                headers: Be(Be({}, (r = v?.headers) !== null && r !== void 0 ? r : {}), (l = d?.headers) !== null && l !== void 0 ? l : {})
            }),
            accessToken: async ()=>""
        };
        return i.accessToken ? S.accessToken = i.accessToken : delete S.accessToken, S;
    }
    function CS(i) {
        const n = i?.trim();
        if (!n) throw new Error("supabaseUrl is required.");
        if (!n.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
        try {
            return new URL(RS(n));
        } catch  {
            throw Error("Invalid supabaseUrl: Provided URL is malformed.");
        }
    }
    var kS = class extends pS {
        constructor(i){
            super(i);
        }
    }, jS = class {
        constructor(i, n, r){
            var l, u;
            this.supabaseUrl = i, this.supabaseKey = n;
            const h = CS(i);
            if (!n) throw new Error("supabaseKey is required.");
            this.realtimeUrl = new URL("realtime/v1", h), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", h), this.storageUrl = new URL("storage/v1", h), this.functionsUrl = new URL("functions/v1", h);
            const f = `sb-${h.hostname.split(".")[0]}-auth-token`, d = {
                db: vS,
                realtime: _S,
                auth: Be(Be({}, bS), {}, {
                    storageKey: f
                }),
                global: yS
            }, p = OS(r ?? {}, d);
            if (this.storageKey = (l = p.auth.storageKey) !== null && l !== void 0 ? l : "", this.headers = (u = p.global.headers) !== null && u !== void 0 ? u : {}, p.accessToken) this.accessToken = p.accessToken, this.auth = new Proxy({}, {
                get: (b, v)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`);
                }
            });
            else {
                var g;
                this.auth = this._initSupabaseAuthClient((g = p.auth) !== null && g !== void 0 ? g : {}, this.headers, p.global.fetch);
            }
            this.fetch = xS(n, this._getAccessToken.bind(this), p.global.fetch), this.realtime = this._initRealtimeClient(Be({
                headers: this.headers,
                accessToken: this._getAccessToken.bind(this)
            }, p.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((b)=>this.realtime.setAuth(b)).catch((b)=>console.warn("Failed to set initial Realtime auth token:", b)), this.rest = new Zb(new URL("rest/v1", h).href, {
                headers: this.headers,
                schema: p.db.schema,
                fetch: this.fetch,
                timeout: p.db.timeout,
                urlLengthLimit: p.db.urlLengthLimit
            }), this.storage = new uw(this.storageUrl.href, this.headers, this.fetch, r?.storage), p.accessToken || this._listenForAuthEvents();
        }
        get functions() {
            return new Pb(this.functionsUrl.href, {
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
            return new kS({
                url: this.authUrl.href,
                headers: Be(Be({}, S), b),
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
            return new N_(this.realtimeUrl.href, Be(Be({}, i), {}, {
                params: Be(Be({}, {
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
    const NS = (i, n, r)=>new jS(i, n, r);
    function US() {
        if (typeof window < "u") return !1;
        const i = globalThis.process;
        if (!i) return !1;
        const n = i.version;
        if (n == null) return !1;
        const r = n.match(/^v(\d+)\./);
        return r ? parseInt(r[1], 10) <= 18 : !1;
    }
    US() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
    let Cm, km;
    De = {
        name: "HWP Web",
        nameKo: "한글 문서 변환기",
        description: "한글(HWP/HWPX) 문서를 웹에서 변환·편집·관리하는 도구",
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
                    text: "Web",
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
                path: "/viewer",
                labelKey: "site.nav.viewer"
            },
            {
                path: "/business-plan",
                labelKey: "site.nav.businessPlan"
            },
            {
                path: "/generator",
                labelKey: "site.nav.generator"
            },
            {
                path: "/templates",
                labelKey: "site.nav.templates"
            },
            {
                path: "/documents",
                labelKey: "site.nav.documents"
            },
            {
                path: "/guide",
                labelKey: "site.nav.guide"
            }
        ],
        footerLinks: [
            {
                path: "/",
                labelKey: "nav.home"
            },
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
                path: "/templates",
                labelKey: "site.nav.templates"
            },
            {
                path: "/guide",
                labelKey: "site.nav.guide"
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
    Cm = "https://hcmgdztsgjvzcyxyayaj.supabase.co";
    km = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw";
    gE = {
        documents: `${De.dbPrefix}documents`,
        templates: `${De.dbPrefix}templates`,
        businessPlans: `${De.dbPrefix}business_plans`
    };
    let oc = null;
    Jt = ()=>(!oc && Cm && km && (oc = NS(Cm, km, {
            auth: {
                flowType: "pkce",
                detectSessionInUrl: !0,
                autoRefreshToken: !0,
                persistSession: !0
            }
        })), oc);
    yE = async function() {
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
    vE = async function() {
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
    bE = async function(i, n) {
        const r = Jt();
        if (!r) throw new Error("Supabase not configured");
        const { data: l, error: u } = await r.auth.signInWithPassword({
            email: i,
            password: n
        });
        if (u) throw u;
        return l;
    };
    _E = async function(i, n, r) {
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
    async function jm() {
        const i = Jt();
        if (!i) return;
        const { error: n } = await i.auth.signOut({
            scope: "local"
        });
        if (n) throw n;
    }
    async function DS(i) {
        const n = Jt();
        if (!n) return null;
        const { data: r, error: l } = await n.from("user_profiles").select("*").eq("id", i).single();
        return l ? (console.error("getProfile error:", l), null) : r;
    }
    wE = async function(i) {
        const n = Jt();
        if (!n) throw new Error("Supabase not configured");
        const { data: r, error: l } = await n.auth.resetPasswordForEmail(i, {
            redirectTo: window.location.origin + window.location.pathname
        });
        if (l) throw l;
        return r;
    };
    Ec = async function(i, n) {
        const r = Jt();
        if (!r) return null;
        const { data: l, error: u } = await r.from("user_profiles").update({
            ...n,
            updated_at: new Date().toISOString()
        }).eq("id", i).select().single();
        if (u) throw u;
        return l;
    };
    const zS = [
        "aebon@kakao.com",
        "radical8566@gmail.com",
        "aebon@kyonggi.ac.kr"
    ];
    function Nm(i) {
        const n = i.replace(/\D/g, "").slice(0, 11);
        return n.length <= 3 ? n : n.length <= 7 ? `${n.slice(0, 3)}-${n.slice(3)}` : `${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7)}`;
    }
    const LS = ({ user: i, onComplete: n })=>{
        const r = i.user_metadata || {}, [l, u] = x.useState(r.full_name || r.name || ""), [h, f] = x.useState(""), [d, p] = x.useState(!1), [g, b] = x.useState(""), v = async (E)=>{
            E.preventDefault(), b("");
            const N = l.trim();
            if (!N) {
                b("이름을 입력해주세요.");
                return;
            }
            const U = h.replace(/\D/g, "");
            if (U && !/^01[0-9]\d{7,8}$/.test(U)) {
                b("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)");
                return;
            }
            p(!0);
            try {
                const k = {
                    name: N,
                    display_name: N
                };
                U && (k.phone = Nm(U)), await Ec(i.id, k), await n();
            } catch (k) {
                b("저장에 실패했습니다. 다시 시도해주세요."), console.error("ProfileCompleteModal save error:", k);
            } finally{
                p(!1);
            }
        }, S = async ()=>{
            const E = l.trim();
            if (E) try {
                await Ec(i.id, {
                    name: E,
                    display_name: E
                });
            } catch  {}
            await n();
        };
        return _.jsx("div", {
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
            children: _.jsxs("form", {
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
                    _.jsx("button", {
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
                    _.jsx("h2", {
                        style: {
                            margin: "0 0 6px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "프로필 정보 입력"
                    }),
                    _.jsxs("p", {
                        style: {
                            margin: "0 0 24px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.5
                        },
                        children: [
                            "원활한 수업 운영을 위해 아래 정보를 입력해주세요.",
                            _.jsx("br", {}),
                            _.jsx("span", {
                                style: {
                                    color: "#9CA3AF",
                                    fontSize: "12px"
                                },
                                children: "전화번호는 선택 사항입니다."
                            })
                        ]
                    }),
                    _.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "16px"
                        },
                        children: [
                            _.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "이름 ",
                                    _.jsx("span", {
                                        style: {
                                            color: "#dc2626"
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            _.jsx("input", {
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
                    _.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "20px"
                        },
                        children: [
                            _.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "전화번호 ",
                                    _.jsx("span", {
                                        style: {
                                            color: "#9CA3AF",
                                            fontWeight: 400
                                        },
                                        children: "(선택)"
                                    })
                                ]
                            }),
                            _.jsx("input", {
                                type: "tel",
                                value: h,
                                onChange: (E)=>f(Nm(E.target.value)),
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
                    g && _.jsx("p", {
                        style: {
                            margin: "0 0 14px",
                            fontSize: "13px",
                            color: "#dc2626",
                            fontWeight: 500
                        },
                        children: g
                    }),
                    _.jsx("button", {
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
                    _.jsx("button", {
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
    async function MS() {
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
    const HS = [
        "aebon@kakao.com",
        "aebon@kyonggi.ac.kr",
        "radical8566@gmail.com"
    ], BS = 10080 * 60 * 1e3;
    function qS({ user: i, siteSlug: n, shopUrl: r = "https://biz-hub.dreamitbiz.com/shop" }) {
        const [l, u] = x.useState(!1);
        x.useEffect(()=>{
            const f = `nudge_dismissed_${n}`;
            if (sessionStorage.getItem(f)) return;
            const d = (i.email || "").toLowerCase();
            if (HS.includes(d)) return;
            const p = i.created_at ? new Date(i.created_at).getTime() : Date.now();
            if (Date.now() - p < BS) return;
            (async ()=>{
                try {
                    const b = await MS();
                    if (!b) return;
                    const { data: v, error: S } = await b.from("user_licenses").select("id, license_type, site_slug, expires_at").eq("user_id", i.id);
                    if (S) return;
                    if (v && v.length > 0) {
                        const E = new Date;
                        if (v.some((U)=>U.expires_at && new Date(U.expires_at) < E ? !1 : U.license_type === "bundle" || U.site_slug === n)) return;
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
        return l ? _.jsx("div", {
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
            children: _.jsxs("div", {
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
                    _.jsx("button", {
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
                    _.jsx("div", {
                        style: {
                            fontSize: "48px",
                            marginBottom: "12px"
                        },
                        children: "📚"
                    }),
                    _.jsx("h2", {
                        style: {
                            margin: "0 0 8px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "더 나은 학습 경험을 위해"
                    }),
                    _.jsxs("p", {
                        style: {
                            margin: "0 0 20px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.6
                        },
                        children: [
                            "이용권을 구매하시면 모든 콘텐츠를",
                            _.jsx("br", {}),
                            "제한 없이 평생 이용하실 수 있습니다."
                        ]
                    }),
                    _.jsxs("div", {
                        style: {
                            background: "#F0F7FF",
                            borderRadius: "12px",
                            padding: "16px",
                            marginBottom: "20px",
                            textAlign: "left"
                        },
                        children: [
                            _.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "8px"
                                },
                                children: [
                                    _.jsx("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: "개별 사이트 이용권"
                                    }),
                                    _.jsx("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#2563EB"
                                        },
                                        children: "30,000원"
                                    })
                                ]
                            }),
                            _.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [
                                    _.jsxs("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: [
                                            "전체 사이트 이용권",
                                            _.jsx("span", {
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
                                    _.jsx("span", {
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
                    _.jsx("a", {
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
                    _.jsx("button", {
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
                    _.jsx("p", {
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
    let wg, $S, Eg;
    wg = x.createContext(null);
    $S = ({ children: i })=>{
        const [n, r] = x.useState(null), [l, u] = x.useState(null), [h, f] = x.useState(!0), [d, p] = x.useState(null), g = x.useCallback(async (k)=>{
            if (!k) {
                u(null);
                return;
            }
            let B = await DS(k.id);
            if (!B) {
                const P = Jt();
                if (P) {
                    const z = k.user_metadata || {}, K = window.location.hostname, { data: te } = await P.from("user_profiles").insert({
                        id: k.id,
                        email: k.email || "",
                        name: z.full_name || z.name || "",
                        display_name: z.full_name || z.name || "",
                        phone: "",
                        provider: k.app_metadata?.provider || "email",
                        signup_domain: K,
                        visited_sites: [
                            K
                        ],
                        role: "member"
                    }).select().single();
                    te && (B = te);
                }
            }
            if (B) {
                const P = {}, z = window.location.hostname;
                B.signup_domain || (P.signup_domain = z), (!B.role || B.role === "user") && (P.role = "member");
                const K = Array.isArray(B.visited_sites) ? B.visited_sites : [];
                if (K.includes(z) || (P.visited_sites = [
                    ...K,
                    z
                ]), Object.keys(P).length > 0) try {
                    const te = await Ec(k.id, P);
                    u(te);
                } catch  {
                    u(B);
                }
                else u(B);
            }
            try {
                const P = Jt();
                if (P) {
                    const { data: z } = await P.rpc("check_user_status", {
                        target_user_id: k.id,
                        current_domain: window.location.hostname
                    });
                    if (z && z.status && z.status !== "active") {
                        p({
                            status: z.status,
                            reason: z.reason || "",
                            suspended_until: z.suspended_until || null
                        }), await jm(), r(null), u(null);
                        return;
                    }
                }
            } catch  {}
        }, []);
        x.useEffect(()=>{
            const k = Jt();
            if (!k) {
                f(!1);
                return;
            }
            const { data: { subscription: B } } = k.auth.onAuthStateChange((z, K)=>{
                const te = K?.user ?? null;
                r(te), te ? (g(te), z === "SIGNED_IN" && k.from("user_profiles").update({
                    last_sign_in_at: new Date().toISOString()
                }).eq("id", te.id).then(()=>{})) : u(null), z === "INITIAL_SESSION" && f(!1);
            }), P = setTimeout(()=>{
                f((z)=>(z && console.warn("Auth: INITIAL_SESSION timeout, forcing loading=false"), !1));
            }, 5e3);
            return ()=>{
                clearTimeout(P), B.unsubscribe();
            };
        }, [
            g
        ]);
        const b = x.useCallback(async ()=>{
            await jm(), r(null), u(null);
        }, []), v = x.useCallback(async ()=>{
            n && await g(n);
        }, [
            n,
            g
        ]), E = [
            n?.email,
            n?.user_metadata?.email,
            n?.identities?.[0]?.identity_data?.email,
            l?.email
        ].filter((k)=>!!k).map((k)=>k.toLowerCase()).some((k)=>zS.includes(k)), N = !!n, U = N && !!l && !l.name;
        return _.jsxs(wg.Provider, {
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
                U && n && _.jsx(LS, {
                    user: n,
                    onComplete: v
                }),
                N && n && !U && _.jsx(qS, {
                    user: n,
                    siteSlug: "hwp"
                })
            ]
        });
    };
    Sg = ()=>{
        const i = x.useContext(wg);
        if (!i) throw new Error("useAuth must be used within AuthProvider");
        return i;
    };
    Eg = x.createContext(null);
    let PS = 0;
    function GS({ children: i }) {
        const [n, r] = x.useState([]), l = x.useRef({}), u = x.useCallback((f)=>{
            clearTimeout(l.current[f]), delete l.current[f], r((d)=>d.filter((p)=>p.id !== f));
        }, []), h = x.useCallback((f, d = "info", p = 4e3)=>{
            const g = ++PS;
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
        return _.jsxs(Eg.Provider, {
            value: {
                showToast: h,
                removeToast: u
            },
            children: [
                i,
                _.jsx("div", {
                    className: "toast-container",
                    role: "status",
                    "aria-live": "polite",
                    children: n.map((f)=>_.jsxs("div", {
                            className: `toast-item toast-${f.type}`,
                            children: [
                                _.jsxs("span", {
                                    className: "toast-icon",
                                    children: [
                                        f.type === "success" && _.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                _.jsx("path", {
                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                }),
                                                _.jsx("polyline", {
                                                    points: "22 4 12 14.01 9 11.01"
                                                })
                                            ]
                                        }),
                                        f.type === "error" && _.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                _.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                _.jsx("line", {
                                                    x1: "15",
                                                    y1: "9",
                                                    x2: "9",
                                                    y2: "15"
                                                }),
                                                _.jsx("line", {
                                                    x1: "9",
                                                    y1: "9",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        f.type === "info" && _.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                _.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                _.jsx("line", {
                                                    x1: "12",
                                                    y1: "16",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                _.jsx("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12.01",
                                                    y2: "8"
                                                })
                                            ]
                                        }),
                                        f.type === "warning" && _.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                _.jsx("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                                }),
                                                _.jsx("line", {
                                                    x1: "12",
                                                    y1: "9",
                                                    x2: "12",
                                                    y2: "13"
                                                }),
                                                _.jsx("line", {
                                                    x1: "12",
                                                    y1: "17",
                                                    x2: "12.01",
                                                    y2: "17"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                _.jsx("span", {
                                    className: "toast-message",
                                    children: f.message
                                }),
                                _.jsx("button", {
                                    className: "toast-close",
                                    onClick: ()=>u(f.id),
                                    children: _.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        width: "14",
                                        height: "14",
                                        children: [
                                            _.jsx("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }),
                                            _.jsx("line", {
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
    SE = function() {
        const i = x.useContext(Eg);
        return i || {
            showToast: (n)=>(console.warn("ToastProvider not found:", n), 0),
            removeToast: ()=>{}
        };
    };
    let VS, KS, Um, yi, YS, IS, XS, JS, WS, QS, ZS, FS, eE, tE, nE, aE, iE, rE, sE, lE, oE, uE, cE, hE, fE, dE;
    VS = "modulepreload";
    KS = function(i) {
        return "/" + i;
    };
    Um = {};
    Fe = function(n, r, l) {
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
                if (g = KS(g), g in Um) return;
                Um[g] = !0;
                const b = g.endsWith(".css"), v = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${g}"]${v}`)) return;
                const S = document.createElement("link");
                if (S.rel = b ? "stylesheet" : VS, b || (S.as = "script"), S.crossOrigin = "", S.href = g, d && S.setAttribute("nonce", d), document.head.appendChild(S), b) return new Promise((E, N)=>{
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
        const { isLoggedIn: n, loading: r } = Sg(), l = Gt();
        return r ? _.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: _.jsx("div", {
                className: "loading-spinner"
            })
        }) : n ? _.jsx(_.Fragment, {
            children: i
        }) : _.jsx(Z0, {
            to: "/login",
            state: {
                from: l
            },
            replace: !0
        });
    };
    YS = ()=>{
        const [i, n] = x.useState(!1), [r, l] = x.useState(!1), [u, h] = x.useState(null), [f, d] = x.useState(!1), [p, g] = x.useState(!1), [b, v] = x.useState(!1), S = x.useRef(null), E = Gt(), { mode: N, toggleTheme: U, colorTheme: k, setColorTheme: B } = Lb(), { language: P, toggleLanguage: z, t: K } = tg(), { isLoggedIn: te, isAdmin: ne, profile: Y, signOut: ke } = Sg();
        x.useEffect(()=>{
            const ie = ()=>n(window.scrollY > 50);
            return window.addEventListener("scroll", ie), ()=>window.removeEventListener("scroll", ie);
        }, []), x.useEffect(()=>{
            l(!1), h(null), g(!1);
        }, [
            E
        ]), x.useEffect(()=>{
            const ie = (be)=>{
                S.current && !S.current.contains(be.target) && g(!1);
            };
            return document.addEventListener("mousedown", ie), ()=>document.removeEventListener("mousedown", ie);
        }, []);
        const Se = async ()=>{
            await ke(), g(!1);
        }, Nt = De.menuItems.map((ie)=>({
                ...ie,
                label: K(ie.labelKey),
                dropdown: ie.dropdown ? ie.dropdown.map((be)=>({
                        ...be,
                        label: K(be.labelKey)
                    })) : void 0
            })), ot = (ie)=>{
            const be = ie.activePath || ie.path;
            return be === "/" ? E.pathname === "/" : E.pathname.startsWith(be);
        }, Je = (Y?.display_name || Y?.email || "?")[0].toUpperCase();
        return _.jsxs("nav", {
            className: `navbar ${i ? "scrolled" : ""}`,
            children: [
                _.jsx("div", {
                    className: "container",
                    children: _.jsxs("div", {
                        className: "nav-wrapper",
                        children: [
                            _.jsx("div", {
                                className: "logo",
                                children: _.jsx(Rn, {
                                    to: "/",
                                    children: _.jsx("h1", {
                                        children: De.brand.parts.map((ie, be)=>_.jsx("span", {
                                                className: ie.className,
                                                children: ie.text
                                            }, be))
                                    })
                                })
                            }),
                            _.jsx("ul", {
                                className: `nav-menu ${r ? "active" : ""}`,
                                children: Nt.map((ie, be)=>_.jsx("li", {
                                        className: `${ie.dropdown ? "nav-item-dropdown" : ""} ${u === be ? "active" : ""}`,
                                        onMouseEnter: ()=>ie.dropdown && h(be),
                                        onMouseLeave: ()=>ie.dropdown && h(null),
                                        children: ie.dropdown ? _.jsxs(_.Fragment, {
                                            children: [
                                                _.jsx(Rn, {
                                                    to: ie.path,
                                                    className: `nav-link ${ot(ie) ? "active" : ""}`,
                                                    onClick: (je)=>{
                                                        window.innerWidth <= 1100 && (je.preventDefault(), h(u === be ? null : be));
                                                    },
                                                    children: ie.label
                                                }),
                                                _.jsx("ul", {
                                                    className: `dropdown-menu ${u === be ? "active" : ""}`,
                                                    children: ie.dropdown.map((je, M)=>_.jsx("li", {
                                                            children: _.jsx(Rn, {
                                                                to: je.path,
                                                                children: je.label
                                                            })
                                                        }, M))
                                                })
                                            ]
                                        }) : _.jsx(Rn, {
                                            to: ie.path,
                                            className: `nav-link ${ot(ie) ? "active" : ""}`,
                                            children: ie.label
                                        })
                                    }, be))
                            }),
                            _.jsxs("div", {
                                className: "nav-actions",
                                children: [
                                    De.features.search,
                                    _.jsx("button", {
                                        className: "lang-switcher",
                                        onClick: z,
                                        "aria-label": P === "ko" ? "Switch to English" : "한국어로 전환",
                                        children: P === "ko" ? "EN" : "KR"
                                    }),
                                    _.jsxs("div", {
                                        className: "color-picker-wrapper",
                                        children: [
                                            _.jsx("button", {
                                                className: "color-picker-btn",
                                                onClick: ()=>d(!f),
                                                "aria-label": "Color theme",
                                                children: _.jsxs("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: [
                                                        _.jsx("circle", {
                                                            cx: "13.5",
                                                            cy: "6.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C8102E",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        _.jsx("circle", {
                                                            cx: "17.5",
                                                            cy: "10.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C87200",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        _.jsx("circle", {
                                                            cx: "8.5",
                                                            cy: "7.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#00855A",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        _.jsx("circle", {
                                                            cx: "6.5",
                                                            cy: "12",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#0046C8",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        _.jsx("path", {
                                                            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.24-.3-.39-.65-.39-1.04 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.5-9-10-9z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            f && _.jsxs(_.Fragment, {
                                                children: [
                                                    _.jsx("div", {
                                                        className: "color-picker-overlay",
                                                        onClick: ()=>d(!1)
                                                    }),
                                                    _.jsxs("div", {
                                                        className: "color-picker-tooltip",
                                                        children: [
                                                            _.jsx("div", {
                                                                className: "color-picker-arrow"
                                                            }),
                                                            De.colors.map((ie)=>_.jsx("button", {
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
                                    _.jsxs("button", {
                                        className: "theme-toggle",
                                        onClick: U,
                                        "aria-label": "테마 전환",
                                        "data-mode": N,
                                        children: [
                                            _.jsxs("svg", {
                                                className: "sun-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    _.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "5"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "18.36",
                                                        x2: "19.78",
                                                        y2: "19.78"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "21",
                                                        y1: "12",
                                                        x2: "23",
                                                        y2: "12"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "5.64",
                                                        x2: "19.78",
                                                        y2: "4.22"
                                                    })
                                                ]
                                            }),
                                            _.jsx("svg", {
                                                className: "moon-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: _.jsx("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                })
                                            }),
                                            _.jsxs("svg", {
                                                className: "auto-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    _.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "9"
                                                    }),
                                                    _.jsx("path", {
                                                        d: "M12 3a9 9 0 0 1 0 18",
                                                        fill: "currentColor",
                                                        opacity: "0.3"
                                                    }),
                                                    _.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    _.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    te ? _.jsxs("div", {
                                        className: "nav-user-menu",
                                        ref: S,
                                        children: [
                                            _.jsx("button", {
                                                className: "nav-user-btn",
                                                onClick: ()=>g(!p),
                                                children: _.jsx("span", {
                                                    className: "nav-user-avatar-placeholder",
                                                    children: Je
                                                })
                                            }),
                                            p && _.jsxs("div", {
                                                className: "nav-user-dropdown",
                                                children: [
                                                    _.jsxs("div", {
                                                        className: "dropdown-user-header",
                                                        children: [
                                                            _.jsx("span", {
                                                                className: "dropdown-user-avatar",
                                                                children: Je
                                                            }),
                                                            _.jsxs("div", {
                                                                className: "dropdown-user-info",
                                                                children: [
                                                                    _.jsx("span", {
                                                                        className: "dropdown-user-name",
                                                                        children: Y?.display_name || ""
                                                                    }),
                                                                    _.jsx("span", {
                                                                        className: "dropdown-user-email",
                                                                        children: Y?.email || ""
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    _.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    _.jsxs(Rn, {
                                                        to: "/mypage",
                                                        className: "dropdown-menu-item",
                                                        children: [
                                                            _.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    _.jsx("path", {
                                                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                                    }),
                                                                    _.jsx("circle", {
                                                                        cx: "12",
                                                                        cy: "7",
                                                                        r: "4"
                                                                    })
                                                                ]
                                                            }),
                                                            K("auth.myPage")
                                                        ]
                                                    }),
                                                    ne && _.jsxs("a", {
                                                        href: De.parentSite.url + "/admin",
                                                        className: "dropdown-menu-item",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            _.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    _.jsx("rect", {
                                                                        x: "3",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    _.jsx("rect", {
                                                                        x: "14",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    _.jsx("rect", {
                                                                        x: "3",
                                                                        y: "14",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    _.jsx("rect", {
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
                                                    _.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    _.jsxs("button", {
                                                        onClick: Se,
                                                        className: "dropdown-menu-item logout",
                                                        children: [
                                                            _.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    _.jsx("path", {
                                                                        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                                                    }),
                                                                    _.jsx("polyline", {
                                                                        points: "16 17 21 12 16 7"
                                                                    }),
                                                                    _.jsx("line", {
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
                                    }) : _.jsx(Rn, {
                                        to: "/login",
                                        className: "nav-login-btn",
                                        children: "Login"
                                    }),
                                    _.jsxs("button", {
                                        className: `mobile-toggle ${r ? "active" : ""}`,
                                        onClick: ()=>l(!r),
                                        "aria-label": "메뉴 토글",
                                        children: [
                                            _.jsx("span", {}),
                                            _.jsx("span", {}),
                                            _.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                De.features.search
            ]
        });
    };
    IS = ()=>{
        const { t: i } = tg();
        return _.jsx("footer", {
            className: "footer",
            children: _.jsxs("div", {
                className: "container",
                children: [
                    _.jsxs("div", {
                        className: "footer-content",
                        children: [
                            _.jsxs("div", {
                                className: "footer-brand",
                                children: [
                                    _.jsx("h3", {
                                        children: De.brand.parts.map((n, r)=>_.jsx("span", {
                                                className: n.className,
                                                children: n.text
                                            }, r))
                                    }),
                                    _.jsx("p", {
                                        children: i("footer.tagline")
                                    }),
                                    _.jsxs("div", {
                                        className: "company-info",
                                        children: [
                                            _.jsx("p", {
                                                children: _.jsx("strong", {
                                                    children: De.company.name
                                                })
                                            }),
                                            _.jsxs("p", {
                                                children: [
                                                    "대표이사: ",
                                                    De.company.ceo
                                                ]
                                            }),
                                            _.jsxs("p", {
                                                children: [
                                                    "사업자등록번호: ",
                                                    De.company.bizNumber
                                                ]
                                            }),
                                            _.jsxs("p", {
                                                children: [
                                                    "통신판매신고번호: ",
                                                    De.company.salesNumber
                                                ]
                                            }),
                                            De.company.publisherNumber && _.jsxs("p", {
                                                children: [
                                                    "출판사 신고번호: ",
                                                    De.company.publisherNumber
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            _.jsxs("div", {
                                className: "footer-links",
                                children: [
                                    _.jsx("h4", {
                                        children: i("footer.quickLinks")
                                    }),
                                    _.jsx("ul", {
                                        children: De.footerLinks.map((n, r)=>_.jsx("li", {
                                                children: _.jsx(Rn, {
                                                    to: n.path,
                                                    children: i(n.labelKey)
                                                })
                                            }, r))
                                    })
                                ]
                            }),
                            _.jsxs("div", {
                                className: "footer-contact",
                                children: [
                                    _.jsx("h4", {
                                        children: i("footer.contact")
                                    }),
                                    _.jsx("p", {
                                        children: De.company.address
                                    }),
                                    _.jsx("p", {
                                        children: De.company.email
                                    }),
                                    _.jsx("p", {
                                        children: De.company.phone
                                    }),
                                    _.jsxs("p", {
                                        children: [
                                            "카카오톡: ",
                                            De.company.kakao
                                        ]
                                    }),
                                    _.jsx("p", {
                                        className: "business-hours",
                                        children: De.company.businessHours
                                    }),
                                    _.jsx("div", {
                                        className: "footer-family",
                                        children: _.jsxs("select", {
                                            defaultValue: "",
                                            onChange: (n)=>{
                                                n.target.value && window.open(n.target.value, "_blank"), n.target.value = "";
                                            },
                                            children: [
                                                _.jsx("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    children: "Family Site"
                                                }),
                                                _.jsxs("option", {
                                                    value: De.parentSite.url,
                                                    children: [
                                                        De.parentSite.name,
                                                        " (본사이트)"
                                                    ]
                                                }),
                                                De.familySites.map((n, r)=>_.jsx("option", {
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
                    _.jsx("div", {
                        className: "footer-bottom",
                        children: _.jsxs("p", {
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
    XS = x.lazy(()=>Fe(()=>import("./Home-CXjsdQFt.js"), __vite__mapDeps([0,1])));
    JS = x.lazy(()=>Fe(()=>import("./Convert-BzzsriOS.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([2,1,3,4])));
    WS = x.lazy(()=>Fe(()=>import("./Editor-B57kssIs.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([5,1,3,6])));
    QS = x.lazy(()=>Fe(()=>import("./Templates-Dil3PBBy.js"), __vite__mapDeps([7,1,8])));
    ZS = x.lazy(()=>Fe(()=>import("./TemplateCreate-D5huuuJ0.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([9,1,3,8])));
    FS = x.lazy(()=>Fe(()=>import("./TemplateDetail-CSJX1reX.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([10,1,3,8])));
    eE = x.lazy(()=>Fe(()=>import("./Documents-BdVVzk6Y.js"), __vite__mapDeps([11,1,12])));
    tE = x.lazy(()=>Fe(()=>import("./DocumentDetail-5oC7qF1N.js"), __vite__mapDeps([13,1,3,6])));
    nE = x.lazy(()=>Fe(()=>import("./BusinessPlan-rLyh2NNP.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([14,1,15])));
    aE = x.lazy(()=>Fe(()=>import("./HwpEditor-D9Cp1Ywi.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([16,17,1])));
    iE = x.lazy(()=>Fe(()=>import("./Viewer-Bx1vea56.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([18,1,17,19])));
    rE = x.lazy(()=>Fe(()=>import("./Generator-sJ8unXoT.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([20,1,21])));
    sE = x.lazy(()=>Fe(()=>import("./Guide-U8nMn2zQ.js"), __vite__mapDeps([22,1])));
    lE = x.lazy(()=>Fe(()=>import("./NotFound-ClIkqUac.js"), __vite__mapDeps([23,1])));
    oE = x.lazy(()=>Fe(()=>import("./Login-IaHvSxU_.js"), __vite__mapDeps([24,1,25])));
    uE = x.lazy(()=>Fe(()=>import("./Register-D0Q83x7T.js"), __vite__mapDeps([26,1,25])));
    cE = x.lazy(()=>Fe(()=>import("./ForgotPassword-lnP-41rS.js"), __vite__mapDeps([27,1,25])));
    hE = x.lazy(()=>Fe(()=>import("./MyPage-tDtD4SXj.js"), __vite__mapDeps([28,1,25])));
    fE = ()=>_.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: _.jsx("div", {
                className: "loading-spinner"
            })
        });
    dE = ()=>_.jsxs(_.Fragment, {
            children: [
                _.jsx(YS, {}),
                _.jsx("main", {
                    children: _.jsx(x.Suspense, {
                        fallback: _.jsx(fE, {}),
                        children: _.jsxs(Jm, {
                            children: [
                                _.jsx(Ie, {
                                    path: "/",
                                    element: _.jsx(XS, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/convert",
                                    element: _.jsx(JS, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/md-editor",
                                    element: _.jsx(WS, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/hwp-editor",
                                    element: _.jsx(aE, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/templates",
                                    element: _.jsx(yi, {
                                        children: _.jsx(QS, {})
                                    })
                                }),
                                _.jsx(Ie, {
                                    path: "/templates/new",
                                    element: _.jsx(yi, {
                                        children: _.jsx(ZS, {})
                                    })
                                }),
                                _.jsx(Ie, {
                                    path: "/templates/:id",
                                    element: _.jsx(yi, {
                                        children: _.jsx(FS, {})
                                    })
                                }),
                                _.jsx(Ie, {
                                    path: "/business-plan",
                                    element: _.jsx(nE, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/viewer",
                                    element: _.jsx(iE, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/generator",
                                    element: _.jsx(rE, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/guide",
                                    element: _.jsx(sE, {})
                                }),
                                _.jsx(Ie, {
                                    path: "/documents",
                                    element: _.jsx(yi, {
                                        children: _.jsx(eE, {})
                                    })
                                }),
                                _.jsx(Ie, {
                                    path: "/documents/:id",
                                    element: _.jsx(yi, {
                                        children: _.jsx(tE, {})
                                    })
                                }),
                                _.jsxs(_.Fragment, {
                                    children: [
                                        _.jsx(Ie, {
                                            path: "/login",
                                            element: _.jsx(oE, {})
                                        }),
                                        _.jsx(Ie, {
                                            path: "/register",
                                            element: _.jsx(uE, {})
                                        }),
                                        _.jsx(Ie, {
                                            path: "/forgot-password",
                                            element: _.jsx(cE, {})
                                        }),
                                        _.jsx(Ie, {
                                            path: "/mypage",
                                            element: _.jsx(yi, {
                                                children: _.jsx(hE, {})
                                            })
                                        })
                                    ]
                                }),
                                _.jsx(Ie, {
                                    path: "*",
                                    element: _.jsx(lE, {})
                                })
                            ]
                        })
                    })
                }),
                _.jsx(IS, {})
            ]
        });
    function pE() {
        return _.jsx(zb, {
            children: _.jsx(Hb, {
                children: _.jsx($S, {
                    children: _.jsx(GS, {
                        children: _.jsx(Eb, {
                            children: _.jsx("div", {
                                className: "App",
                                children: _.jsx(Jm, {
                                    children: _.jsx(Ie, {
                                        path: "*",
                                        element: _.jsx(dE, {})
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
    n0.createRoot(document.getElementById("root")).render(_.jsx(x.StrictMode, {
        children: _.jsx(pE, {})
    }));
})();
export { Rn as L, gE as T, Fe as _, Gt as a, Sg as b, SE as c, Km as d, mE as e, vE as f, Jt as g, bE as h, _E as i, _ as j, wE as k, Ec as l, De as m, x as r, yE as s, tg as u, __tla };
