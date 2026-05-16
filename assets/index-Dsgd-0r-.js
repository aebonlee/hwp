const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BH5FMpIj.js","assets/SEOHead-BQASjo3X.js","assets/Convert-DB2GU_0n.js","assets/fileUtils-1h3TEy09.js","assets/Convert-DYDy6mLq.css","assets/Editor-HwZRSveP.js","assets/editor-B2FMxC-J.css","assets/Templates-ldxFnP_Y.js","assets/templates-zT9MYh1M.css","assets/TemplateCreate-sbACS5Ci.js","assets/TemplateDetail-DjLxR9ow.js","assets/Documents-Co0jlz2X.js","assets/Documents-7jKc5y4S.css","assets/DocumentDetail-C7ziZkOT.js","assets/BusinessPlan-KrE-oupc.js","assets/BusinessPlan-lsmXagVZ.css","assets/HwpEditor-CD-0rt04.js","assets/useRhwp--A8v8Rrx.js","assets/HwpEditor-DNPpr6at.css","assets/Viewer-BeNGOK4u.js","assets/Viewer-BeyzE84f.css","assets/Generator-DQ0rX9LD.js","assets/Generator-B3i-1g61.css","assets/AiWriter-ZJ5Z3prX.js","assets/AiWriter-DtjHDkZn.css","assets/Humanize-I7Xuva2p.js","assets/Humanize-DHztE4rn.css","assets/Guide-okKLu32C.js","assets/NotFound-CiA67wED.js","assets/Login-PjFpRQuo.js","assets/auth-DKHmQrFs.css","assets/Register-B4cyqRFK.js","assets/ForgotPassword-DwqXalcg.js","assets/MyPage-BIVSbKOc.js"])))=>i.map(i=>d[i]);
let $n, jE, DE, ut, Gt, Mg, qE, Vc, NE, UE, un, LE, zE, T, ME, HE, $c, Pe, ev, k, BE, yg;
let __tla = (async ()=>{
    (function() {
        const n = document.createElement("link").relList;
        if (n && n.supports && n.supports("modulepreload")) return;
        for (const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);
        new MutationObserver((u)=>{
            for (const c of u)if (c.type === "childList") for (const f of c.addedNodes)f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function r(u) {
            const c = {};
            return u.integrity && (c.integrity = u.integrity), u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? c.credentials = "include" : u.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
        }
        function l(u) {
            if (u.ep) return;
            u.ep = !0;
            const c = r(u);
            fetch(u.href, c);
        }
    })();
    ev = function(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    };
    var cc = {
        exports: {}
    }, $r = {};
    var Wp;
    function tv() {
        if (Wp) return $r;
        Wp = 1;
        var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
        function r(l, u, c) {
            var f = null;
            if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
                c = {};
                for(var d in u)d !== "key" && (c[d] = u[d]);
            } else c = u;
            return u = c.ref, {
                $$typeof: i,
                type: l,
                key: f,
                ref: u !== void 0 ? u : null,
                props: c
            };
        }
        return $r.Fragment = n, $r.jsx = r, $r.jsxs = r, $r;
    }
    var Qp;
    function nv() {
        return Qp || (Qp = 1, cc.exports = tv()), cc.exports;
    }
    let hc, Ir, Zp;
    T = nv();
    hc = {};
    Ir = {};
    function av() {
        if (Zp) return Ir;
        Zp = 1, Ir.byteLength = d, Ir.toByteArray = v, Ir.fromByteArray = x;
        for(var i = [], n = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, c = l.length; u < c; ++u)i[u] = l[u], n[l.charCodeAt(u)] = u;
        n[45] = 62, n[95] = 63;
        function f(A) {
            var U = A.length;
            if (U % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var B = A.indexOf("=");
            B === -1 && (B = U);
            var D = B === U ? 0 : 4 - B % 4;
            return [
                B,
                D
            ];
        }
        function d(A) {
            var U = f(A), B = U[0], D = U[1];
            return (B + D) * 3 / 4 - D;
        }
        function m(A, U, B) {
            return (U + B) * 3 / 4 - B;
        }
        function v(A) {
            var U, B = f(A), D = B[0], I = B[1], K = new r(m(A, D, I)), H = 0, F = I > 0 ? D - 4 : D, Z;
            for(Z = 0; Z < F; Z += 4)U = n[A.charCodeAt(Z)] << 18 | n[A.charCodeAt(Z + 1)] << 12 | n[A.charCodeAt(Z + 2)] << 6 | n[A.charCodeAt(Z + 3)], K[H++] = U >> 16 & 255, K[H++] = U >> 8 & 255, K[H++] = U & 255;
            return I === 2 && (U = n[A.charCodeAt(Z)] << 2 | n[A.charCodeAt(Z + 1)] >> 4, K[H++] = U & 255), I === 1 && (U = n[A.charCodeAt(Z)] << 10 | n[A.charCodeAt(Z + 1)] << 4 | n[A.charCodeAt(Z + 2)] >> 2, K[H++] = U >> 8 & 255, K[H++] = U & 255), K;
        }
        function S(A) {
            return i[A >> 18 & 63] + i[A >> 12 & 63] + i[A >> 6 & 63] + i[A & 63];
        }
        function b(A, U, B) {
            for(var D, I = [], K = U; K < B; K += 3)D = (A[K] << 16 & 16711680) + (A[K + 1] << 8 & 65280) + (A[K + 2] & 255), I.push(S(D));
            return I.join("");
        }
        function x(A) {
            for(var U, B = A.length, D = B % 3, I = [], K = 16383, H = 0, F = B - D; H < F; H += K)I.push(b(A, H, H + K > F ? F : H + K));
            return D === 1 ? (U = A[B - 1], I.push(i[U >> 2] + i[U << 4 & 63] + "==")) : D === 2 && (U = (A[B - 2] << 8) + A[B - 1], I.push(i[U >> 10] + i[U >> 4 & 63] + i[U << 2 & 63] + "=")), I.join("");
        }
        return Ir;
    }
    var xl = {};
    var em;
    function iv() {
        return em || (em = 1, xl.read = function(i, n, r, l, u) {
            var c, f, d = u * 8 - l - 1, m = (1 << d) - 1, v = m >> 1, S = -7, b = r ? u - 1 : 0, x = r ? -1 : 1, A = i[n + b];
            for(b += x, c = A & (1 << -S) - 1, A >>= -S, S += d; S > 0; c = c * 256 + i[n + b], b += x, S -= 8);
            for(f = c & (1 << -S) - 1, c >>= -S, S += l; S > 0; f = f * 256 + i[n + b], b += x, S -= 8);
            if (c === 0) c = 1 - v;
            else {
                if (c === m) return f ? NaN : (A ? -1 : 1) * (1 / 0);
                f = f + Math.pow(2, l), c = c - v;
            }
            return (A ? -1 : 1) * f * Math.pow(2, c - l);
        }, xl.write = function(i, n, r, l, u, c) {
            var f, d, m, v = c * 8 - u - 1, S = (1 << v) - 1, b = S >> 1, x = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = l ? 0 : c - 1, U = l ? 1 : -1, B = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
            for(n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (d = isNaN(n) ? 1 : 0, f = S) : (f = Math.floor(Math.log(n) / Math.LN2), n * (m = Math.pow(2, -f)) < 1 && (f--, m *= 2), f + b >= 1 ? n += x / m : n += x * Math.pow(2, 1 - b), n * m >= 2 && (f++, m /= 2), f + b >= S ? (d = 0, f = S) : f + b >= 1 ? (d = (n * m - 1) * Math.pow(2, u), f = f + b) : (d = n * Math.pow(2, b - 1) * Math.pow(2, u), f = 0)); u >= 8; i[r + A] = d & 255, A += U, d /= 256, u -= 8);
            for(f = f << u | d, v += u; v > 0; i[r + A] = f & 255, A += U, f /= 256, v -= 8);
            i[r + A - U] |= B * 128;
        }), xl;
    }
    var tm;
    function rv() {
        return tm || (tm = 1, (function(i) {
            const n = av(), r = iv(), l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            i.Buffer = d, i.SlowBuffer = K, i.INSPECT_MAX_BYTES = 50;
            const u = 2147483647;
            i.kMaxLength = u, d.TYPED_ARRAY_SUPPORT = c(), !d.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            function c() {
                try {
                    const _ = new Uint8Array(1), p = {
                        foo: function() {
                            return 42;
                        }
                    };
                    return Object.setPrototypeOf(p, Uint8Array.prototype), Object.setPrototypeOf(_, p), _.foo() === 42;
                } catch  {
                    return !1;
                }
            }
            Object.defineProperty(d.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (d.isBuffer(this)) return this.buffer;
                }
            }), Object.defineProperty(d.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (d.isBuffer(this)) return this.byteOffset;
                }
            });
            function f(_) {
                if (_ > u) throw new RangeError('The value "' + _ + '" is invalid for option "size"');
                const p = new Uint8Array(_);
                return Object.setPrototypeOf(p, d.prototype), p;
            }
            function d(_, p, g) {
                if (typeof _ == "number") {
                    if (typeof p == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                    return b(_);
                }
                return m(_, p, g);
            }
            d.poolSize = 8192;
            function m(_, p, g) {
                if (typeof _ == "string") return x(_, p);
                if (ArrayBuffer.isView(_)) return U(_);
                if (_ == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _);
                if (Vt(_, ArrayBuffer) || _ && Vt(_.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Vt(_, SharedArrayBuffer) || _ && Vt(_.buffer, SharedArrayBuffer))) return B(_, p, g);
                if (typeof _ == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
                const E = _.valueOf && _.valueOf();
                if (E != null && E !== _) return d.from(E, p, g);
                const j = D(_);
                if (j) return j;
                if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof _[Symbol.toPrimitive] == "function") return d.from(_[Symbol.toPrimitive]("string"), p, g);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _);
            }
            d.from = function(_, p, g) {
                return m(_, p, g);
            }, Object.setPrototypeOf(d.prototype, Uint8Array.prototype), Object.setPrototypeOf(d, Uint8Array);
            function v(_) {
                if (typeof _ != "number") throw new TypeError('"size" argument must be of type number');
                if (_ < 0) throw new RangeError('The value "' + _ + '" is invalid for option "size"');
            }
            function S(_, p, g) {
                return v(_), _ <= 0 ? f(_) : p !== void 0 ? typeof g == "string" ? f(_).fill(p, g) : f(_).fill(p) : f(_);
            }
            d.alloc = function(_, p, g) {
                return S(_, p, g);
            };
            function b(_) {
                return v(_), f(_ < 0 ? 0 : I(_) | 0);
            }
            d.allocUnsafe = function(_) {
                return b(_);
            }, d.allocUnsafeSlow = function(_) {
                return b(_);
            };
            function x(_, p) {
                if ((typeof p != "string" || p === "") && (p = "utf8"), !d.isEncoding(p)) throw new TypeError("Unknown encoding: " + p);
                const g = H(_, p) | 0;
                let E = f(g);
                const j = E.write(_, p);
                return j !== g && (E = E.slice(0, j)), E;
            }
            function A(_) {
                const p = _.length < 0 ? 0 : I(_.length) | 0, g = f(p);
                for(let E = 0; E < p; E += 1)g[E] = _[E] & 255;
                return g;
            }
            function U(_) {
                if (Vt(_, Uint8Array)) {
                    const p = new Uint8Array(_);
                    return B(p.buffer, p.byteOffset, p.byteLength);
                }
                return A(_);
            }
            function B(_, p, g) {
                if (p < 0 || _.byteLength < p) throw new RangeError('"offset" is outside of buffer bounds');
                if (_.byteLength < p + (g || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let E;
                return p === void 0 && g === void 0 ? E = new Uint8Array(_) : g === void 0 ? E = new Uint8Array(_, p) : E = new Uint8Array(_, p, g), Object.setPrototypeOf(E, d.prototype), E;
            }
            function D(_) {
                if (d.isBuffer(_)) {
                    const p = I(_.length) | 0, g = f(p);
                    return g.length === 0 || _.copy(g, 0, 0, p), g;
                }
                if (_.length !== void 0) return typeof _.length != "number" || Ji(_.length) ? f(0) : A(_);
                if (_.type === "Buffer" && Array.isArray(_.data)) return A(_.data);
            }
            function I(_) {
                if (_ >= u) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
                return _ | 0;
            }
            function K(_) {
                return +_ != _ && (_ = 0), d.alloc(+_);
            }
            d.isBuffer = function(p) {
                return p != null && p._isBuffer === !0 && p !== d.prototype;
            }, d.compare = function(p, g) {
                if (Vt(p, Uint8Array) && (p = d.from(p, p.offset, p.byteLength)), Vt(g, Uint8Array) && (g = d.from(g, g.offset, g.byteLength)), !d.isBuffer(p) || !d.isBuffer(g)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (p === g) return 0;
                let E = p.length, j = g.length;
                for(let q = 0, Y = Math.min(E, j); q < Y; ++q)if (p[q] !== g[q]) {
                    E = p[q], j = g[q];
                    break;
                }
                return E < j ? -1 : j < E ? 1 : 0;
            }, d.isEncoding = function(p) {
                switch(String(p).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1;
                }
            }, d.concat = function(p, g) {
                if (!Array.isArray(p)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (p.length === 0) return d.alloc(0);
                let E;
                if (g === void 0) for(g = 0, E = 0; E < p.length; ++E)g += p[E].length;
                const j = d.allocUnsafe(g);
                let q = 0;
                for(E = 0; E < p.length; ++E){
                    let Y = p[E];
                    if (Vt(Y, Uint8Array)) q + Y.length > j.length ? (d.isBuffer(Y) || (Y = d.from(Y)), Y.copy(j, q)) : Uint8Array.prototype.set.call(j, Y, q);
                    else if (d.isBuffer(Y)) Y.copy(j, q);
                    else throw new TypeError('"list" argument must be an Array of Buffers');
                    q += Y.length;
                }
                return j;
            };
            function H(_, p) {
                if (d.isBuffer(_)) return _.length;
                if (ArrayBuffer.isView(_) || Vt(_, ArrayBuffer)) return _.byteLength;
                if (typeof _ != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof _);
                const g = _.length, E = arguments.length > 2 && arguments[2] === !0;
                if (!E && g === 0) return 0;
                let j = !1;
                for(;;)switch(p){
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return g;
                    case "utf8":
                    case "utf-8":
                        return Yi(_).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return g * 2;
                    case "hex":
                        return g >>> 1;
                    case "base64":
                        return Pa(_).length;
                    default:
                        if (j) return E ? -1 : Yi(_).length;
                        p = ("" + p).toLowerCase(), j = !0;
                }
            }
            d.byteLength = H;
            function F(_, p, g) {
                let E = !1;
                if ((p === void 0 || p < 0) && (p = 0), p > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, p >>>= 0, g <= p)) return "";
                for(_ || (_ = "utf8");;)switch(_){
                    case "hex":
                        return Ue(this, p, g);
                    case "utf8":
                    case "utf-8":
                        return Ae(this, p, g);
                    case "ascii":
                        return W(this, p, g);
                    case "latin1":
                    case "binary":
                        return he(this, p, g);
                    case "base64":
                        return fe(this, p, g);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return Ne(this, p, g);
                    default:
                        if (E) throw new TypeError("Unknown encoding: " + _);
                        _ = (_ + "").toLowerCase(), E = !0;
                }
            }
            d.prototype._isBuffer = !0;
            function Z(_, p, g) {
                const E = _[p];
                _[p] = _[g], _[g] = E;
            }
            d.prototype.swap16 = function() {
                const p = this.length;
                if (p % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for(let g = 0; g < p; g += 2)Z(this, g, g + 1);
                return this;
            }, d.prototype.swap32 = function() {
                const p = this.length;
                if (p % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for(let g = 0; g < p; g += 4)Z(this, g, g + 3), Z(this, g + 1, g + 2);
                return this;
            }, d.prototype.swap64 = function() {
                const p = this.length;
                if (p % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for(let g = 0; g < p; g += 8)Z(this, g, g + 7), Z(this, g + 1, g + 6), Z(this, g + 2, g + 5), Z(this, g + 3, g + 4);
                return this;
            }, d.prototype.toString = function() {
                const p = this.length;
                return p === 0 ? "" : arguments.length === 0 ? Ae(this, 0, p) : F.apply(this, arguments);
            }, d.prototype.toLocaleString = d.prototype.toString, d.prototype.equals = function(p) {
                if (!d.isBuffer(p)) throw new TypeError("Argument must be a Buffer");
                return this === p ? !0 : d.compare(this, p) === 0;
            }, d.prototype.inspect = function() {
                let p = "";
                const g = i.INSPECT_MAX_BYTES;
                return p = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (p += " ... "), "<Buffer " + p + ">";
            }, l && (d.prototype[l] = d.prototype.inspect), d.prototype.compare = function(p, g, E, j, q) {
                if (Vt(p, Uint8Array) && (p = d.from(p, p.offset, p.byteLength)), !d.isBuffer(p)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof p);
                if (g === void 0 && (g = 0), E === void 0 && (E = p ? p.length : 0), j === void 0 && (j = 0), q === void 0 && (q = this.length), g < 0 || E > p.length || j < 0 || q > this.length) throw new RangeError("out of range index");
                if (j >= q && g >= E) return 0;
                if (j >= q) return -1;
                if (g >= E) return 1;
                if (g >>>= 0, E >>>= 0, j >>>= 0, q >>>= 0, this === p) return 0;
                let Y = q - j, ue = E - g;
                const Ce = Math.min(Y, ue), ve = this.slice(j, q), Ye = p.slice(g, E);
                for(let De = 0; De < Ce; ++De)if (ve[De] !== Ye[De]) {
                    Y = ve[De], ue = Ye[De];
                    break;
                }
                return Y < ue ? -1 : ue < Y ? 1 : 0;
            };
            function le(_, p, g, E, j) {
                if (_.length === 0) return -1;
                if (typeof g == "string" ? (E = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, Ji(g) && (g = j ? 0 : _.length - 1), g < 0 && (g = _.length + g), g >= _.length) {
                    if (j) return -1;
                    g = _.length - 1;
                } else if (g < 0) if (j) g = 0;
                else return -1;
                if (typeof p == "string" && (p = d.from(p, E)), d.isBuffer(p)) return p.length === 0 ? -1 : ee(_, p, g, E, j);
                if (typeof p == "number") return p = p & 255, typeof Uint8Array.prototype.indexOf == "function" ? j ? Uint8Array.prototype.indexOf.call(_, p, g) : Uint8Array.prototype.lastIndexOf.call(_, p, g) : ee(_, [
                    p
                ], g, E, j);
                throw new TypeError("val must be string, number or Buffer");
            }
            function ee(_, p, g, E, j) {
                let q = 1, Y = _.length, ue = p.length;
                if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
                    if (_.length < 2 || p.length < 2) return -1;
                    q = 2, Y /= 2, ue /= 2, g /= 2;
                }
                function Ce(Ye, De) {
                    return q === 1 ? Ye[De] : Ye.readUInt16BE(De * q);
                }
                let ve;
                if (j) {
                    let Ye = -1;
                    for(ve = g; ve < Y; ve++)if (Ce(_, ve) === Ce(p, Ye === -1 ? 0 : ve - Ye)) {
                        if (Ye === -1 && (Ye = ve), ve - Ye + 1 === ue) return Ye * q;
                    } else Ye !== -1 && (ve -= ve - Ye), Ye = -1;
                } else for(g + ue > Y && (g = Y - ue), ve = g; ve >= 0; ve--){
                    let Ye = !0;
                    for(let De = 0; De < ue; De++)if (Ce(_, ve + De) !== Ce(p, De)) {
                        Ye = !1;
                        break;
                    }
                    if (Ye) return ve;
                }
                return -1;
            }
            d.prototype.includes = function(p, g, E) {
                return this.indexOf(p, g, E) !== -1;
            }, d.prototype.indexOf = function(p, g, E) {
                return le(this, p, g, E, !0);
            }, d.prototype.lastIndexOf = function(p, g, E) {
                return le(this, p, g, E, !1);
            };
            function qe(_, p, g, E) {
                g = Number(g) || 0;
                const j = _.length - g;
                E ? (E = Number(E), E > j && (E = j)) : E = j;
                const q = p.length;
                E > q / 2 && (E = q / 2);
                let Y;
                for(Y = 0; Y < E; ++Y){
                    const ue = parseInt(p.substr(Y * 2, 2), 16);
                    if (Ji(ue)) return Y;
                    _[g + Y] = ue;
                }
                return Y;
            }
            function ke(_, p, g, E) {
                return Vn(Yi(p, _.length - g), _, g, E);
            }
            function Tt(_, p, g, E) {
                return Vn(os(p), _, g, E);
            }
            function dt(_, p, g, E) {
                return Vn(Pa(p), _, g, E);
            }
            function tt(_, p, g, E) {
                return Vn(Xi(p, _.length - g), _, g, E);
            }
            d.prototype.write = function(p, g, E, j) {
                if (g === void 0) j = "utf8", E = this.length, g = 0;
                else if (E === void 0 && typeof g == "string") j = g, E = this.length, g = 0;
                else if (isFinite(g)) g = g >>> 0, isFinite(E) ? (E = E >>> 0, j === void 0 && (j = "utf8")) : (j = E, E = void 0);
                else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                const q = this.length - g;
                if ((E === void 0 || E > q) && (E = q), p.length > 0 && (E < 0 || g < 0) || g > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                j || (j = "utf8");
                let Y = !1;
                for(;;)switch(j){
                    case "hex":
                        return qe(this, p, g, E);
                    case "utf8":
                    case "utf-8":
                        return ke(this, p, g, E);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return Tt(this, p, g, E);
                    case "base64":
                        return dt(this, p, g, E);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return tt(this, p, g, E);
                    default:
                        if (Y) throw new TypeError("Unknown encoding: " + j);
                        j = ("" + j).toLowerCase(), Y = !0;
                }
            }, d.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function fe(_, p, g) {
                return p === 0 && g === _.length ? n.fromByteArray(_) : n.fromByteArray(_.slice(p, g));
            }
            function Ae(_, p, g) {
                g = Math.min(_.length, g);
                const E = [];
                let j = p;
                for(; j < g;){
                    const q = _[j];
                    let Y = null, ue = q > 239 ? 4 : q > 223 ? 3 : q > 191 ? 2 : 1;
                    if (j + ue <= g) {
                        let Ce, ve, Ye, De;
                        switch(ue){
                            case 1:
                                q < 128 && (Y = q);
                                break;
                            case 2:
                                Ce = _[j + 1], (Ce & 192) === 128 && (De = (q & 31) << 6 | Ce & 63, De > 127 && (Y = De));
                                break;
                            case 3:
                                Ce = _[j + 1], ve = _[j + 2], (Ce & 192) === 128 && (ve & 192) === 128 && (De = (q & 15) << 12 | (Ce & 63) << 6 | ve & 63, De > 2047 && (De < 55296 || De > 57343) && (Y = De));
                                break;
                            case 4:
                                Ce = _[j + 1], ve = _[j + 2], Ye = _[j + 3], (Ce & 192) === 128 && (ve & 192) === 128 && (Ye & 192) === 128 && (De = (q & 15) << 18 | (Ce & 63) << 12 | (ve & 63) << 6 | Ye & 63, De > 65535 && De < 1114112 && (Y = De));
                        }
                    }
                    Y === null ? (Y = 65533, ue = 1) : Y > 65535 && (Y -= 65536, E.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), E.push(Y), j += ue;
                }
                return P(E);
            }
            const je = 4096;
            function P(_) {
                const p = _.length;
                if (p <= je) return String.fromCharCode.apply(String, _);
                let g = "", E = 0;
                for(; E < p;)g += String.fromCharCode.apply(String, _.slice(E, E += je));
                return g;
            }
            function W(_, p, g) {
                let E = "";
                g = Math.min(_.length, g);
                for(let j = p; j < g; ++j)E += String.fromCharCode(_[j] & 127);
                return E;
            }
            function he(_, p, g) {
                let E = "";
                g = Math.min(_.length, g);
                for(let j = p; j < g; ++j)E += String.fromCharCode(_[j]);
                return E;
            }
            function Ue(_, p, g) {
                const E = _.length;
                (!p || p < 0) && (p = 0), (!g || g < 0 || g > E) && (g = E);
                let j = "";
                for(let q = p; q < g; ++q)j += St[_[q]];
                return j;
            }
            function Ne(_, p, g) {
                const E = _.slice(p, g);
                let j = "";
                for(let q = 0; q < E.length - 1; q += 2)j += String.fromCharCode(E[q] + E[q + 1] * 256);
                return j;
            }
            d.prototype.slice = function(p, g) {
                const E = this.length;
                p = ~~p, g = g === void 0 ? E : ~~g, p < 0 ? (p += E, p < 0 && (p = 0)) : p > E && (p = E), g < 0 ? (g += E, g < 0 && (g = 0)) : g > E && (g = E), g < p && (g = p);
                const j = this.subarray(p, g);
                return Object.setPrototypeOf(j, d.prototype), j;
            };
            function C(_, p, g) {
                if (_ % 1 !== 0 || _ < 0) throw new RangeError("offset is not uint");
                if (_ + p > g) throw new RangeError("Trying to access beyond buffer length");
            }
            d.prototype.readUintLE = d.prototype.readUIntLE = function(p, g, E) {
                p = p >>> 0, g = g >>> 0, E || C(p, g, this.length);
                let j = this[p], q = 1, Y = 0;
                for(; ++Y < g && (q *= 256);)j += this[p + Y] * q;
                return j;
            }, d.prototype.readUintBE = d.prototype.readUIntBE = function(p, g, E) {
                p = p >>> 0, g = g >>> 0, E || C(p, g, this.length);
                let j = this[p + --g], q = 1;
                for(; g > 0 && (q *= 256);)j += this[p + --g] * q;
                return j;
            }, d.prototype.readUint8 = d.prototype.readUInt8 = function(p, g) {
                return p = p >>> 0, g || C(p, 1, this.length), this[p];
            }, d.prototype.readUint16LE = d.prototype.readUInt16LE = function(p, g) {
                return p = p >>> 0, g || C(p, 2, this.length), this[p] | this[p + 1] << 8;
            }, d.prototype.readUint16BE = d.prototype.readUInt16BE = function(p, g) {
                return p = p >>> 0, g || C(p, 2, this.length), this[p] << 8 | this[p + 1];
            }, d.prototype.readUint32LE = d.prototype.readUInt32LE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), (this[p] | this[p + 1] << 8 | this[p + 2] << 16) + this[p + 3] * 16777216;
            }, d.prototype.readUint32BE = d.prototype.readUInt32BE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), this[p] * 16777216 + (this[p + 1] << 16 | this[p + 2] << 8 | this[p + 3]);
            }, d.prototype.readBigUInt64LE = hn(function(p) {
                p = p >>> 0, wn(p, "offset");
                const g = this[p], E = this[p + 7];
                (g === void 0 || E === void 0) && Nt(p, this.length - 8);
                const j = g + this[++p] * 2 ** 8 + this[++p] * 2 ** 16 + this[++p] * 2 ** 24, q = this[++p] + this[++p] * 2 ** 8 + this[++p] * 2 ** 16 + E * 2 ** 24;
                return BigInt(j) + (BigInt(q) << BigInt(32));
            }), d.prototype.readBigUInt64BE = hn(function(p) {
                p = p >>> 0, wn(p, "offset");
                const g = this[p], E = this[p + 7];
                (g === void 0 || E === void 0) && Nt(p, this.length - 8);
                const j = g * 2 ** 24 + this[++p] * 2 ** 16 + this[++p] * 2 ** 8 + this[++p], q = this[++p] * 2 ** 24 + this[++p] * 2 ** 16 + this[++p] * 2 ** 8 + E;
                return (BigInt(j) << BigInt(32)) + BigInt(q);
            }), d.prototype.readIntLE = function(p, g, E) {
                p = p >>> 0, g = g >>> 0, E || C(p, g, this.length);
                let j = this[p], q = 1, Y = 0;
                for(; ++Y < g && (q *= 256);)j += this[p + Y] * q;
                return q *= 128, j >= q && (j -= Math.pow(2, 8 * g)), j;
            }, d.prototype.readIntBE = function(p, g, E) {
                p = p >>> 0, g = g >>> 0, E || C(p, g, this.length);
                let j = g, q = 1, Y = this[p + --j];
                for(; j > 0 && (q *= 256);)Y += this[p + --j] * q;
                return q *= 128, Y >= q && (Y -= Math.pow(2, 8 * g)), Y;
            }, d.prototype.readInt8 = function(p, g) {
                return p = p >>> 0, g || C(p, 1, this.length), this[p] & 128 ? (255 - this[p] + 1) * -1 : this[p];
            }, d.prototype.readInt16LE = function(p, g) {
                p = p >>> 0, g || C(p, 2, this.length);
                const E = this[p] | this[p + 1] << 8;
                return E & 32768 ? E | 4294901760 : E;
            }, d.prototype.readInt16BE = function(p, g) {
                p = p >>> 0, g || C(p, 2, this.length);
                const E = this[p + 1] | this[p] << 8;
                return E & 32768 ? E | 4294901760 : E;
            }, d.prototype.readInt32LE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), this[p] | this[p + 1] << 8 | this[p + 2] << 16 | this[p + 3] << 24;
            }, d.prototype.readInt32BE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), this[p] << 24 | this[p + 1] << 16 | this[p + 2] << 8 | this[p + 3];
            }, d.prototype.readBigInt64LE = hn(function(p) {
                p = p >>> 0, wn(p, "offset");
                const g = this[p], E = this[p + 7];
                (g === void 0 || E === void 0) && Nt(p, this.length - 8);
                const j = this[p + 4] + this[p + 5] * 2 ** 8 + this[p + 6] * 2 ** 16 + (E << 24);
                return (BigInt(j) << BigInt(32)) + BigInt(g + this[++p] * 2 ** 8 + this[++p] * 2 ** 16 + this[++p] * 2 ** 24);
            }), d.prototype.readBigInt64BE = hn(function(p) {
                p = p >>> 0, wn(p, "offset");
                const g = this[p], E = this[p + 7];
                (g === void 0 || E === void 0) && Nt(p, this.length - 8);
                const j = (g << 24) + this[++p] * 2 ** 16 + this[++p] * 2 ** 8 + this[++p];
                return (BigInt(j) << BigInt(32)) + BigInt(this[++p] * 2 ** 24 + this[++p] * 2 ** 16 + this[++p] * 2 ** 8 + E);
            }), d.prototype.readFloatLE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), r.read(this, p, !0, 23, 4);
            }, d.prototype.readFloatBE = function(p, g) {
                return p = p >>> 0, g || C(p, 4, this.length), r.read(this, p, !1, 23, 4);
            }, d.prototype.readDoubleLE = function(p, g) {
                return p = p >>> 0, g || C(p, 8, this.length), r.read(this, p, !0, 52, 8);
            }, d.prototype.readDoubleBE = function(p, g) {
                return p = p >>> 0, g || C(p, 8, this.length), r.read(this, p, !1, 52, 8);
            };
            function G(_, p, g, E, j, q) {
                if (!d.isBuffer(_)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (p > j || p < q) throw new RangeError('"value" argument is out of bounds');
                if (g + E > _.length) throw new RangeError("Index out of range");
            }
            d.prototype.writeUintLE = d.prototype.writeUIntLE = function(p, g, E, j) {
                if (p = +p, g = g >>> 0, E = E >>> 0, !j) {
                    const ue = Math.pow(2, 8 * E) - 1;
                    G(this, p, g, E, ue, 0);
                }
                let q = 1, Y = 0;
                for(this[g] = p & 255; ++Y < E && (q *= 256);)this[g + Y] = p / q & 255;
                return g + E;
            }, d.prototype.writeUintBE = d.prototype.writeUIntBE = function(p, g, E, j) {
                if (p = +p, g = g >>> 0, E = E >>> 0, !j) {
                    const ue = Math.pow(2, 8 * E) - 1;
                    G(this, p, g, E, ue, 0);
                }
                let q = E - 1, Y = 1;
                for(this[g + q] = p & 255; --q >= 0 && (Y *= 256);)this[g + q] = p / Y & 255;
                return g + E;
            }, d.prototype.writeUint8 = d.prototype.writeUInt8 = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 1, 255, 0), this[g] = p & 255, g + 1;
            }, d.prototype.writeUint16LE = d.prototype.writeUInt16LE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 2, 65535, 0), this[g] = p & 255, this[g + 1] = p >>> 8, g + 2;
            }, d.prototype.writeUint16BE = d.prototype.writeUInt16BE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 2, 65535, 0), this[g] = p >>> 8, this[g + 1] = p & 255, g + 2;
            }, d.prototype.writeUint32LE = d.prototype.writeUInt32LE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 4, 4294967295, 0), this[g + 3] = p >>> 24, this[g + 2] = p >>> 16, this[g + 1] = p >>> 8, this[g] = p & 255, g + 4;
            }, d.prototype.writeUint32BE = d.prototype.writeUInt32BE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 4, 4294967295, 0), this[g] = p >>> 24, this[g + 1] = p >>> 16, this[g + 2] = p >>> 8, this[g + 3] = p & 255, g + 4;
            };
            function Q(_, p, g, E, j) {
                Ia(p, E, j, _, g, 7);
                let q = Number(p & BigInt(4294967295));
                _[g++] = q, q = q >> 8, _[g++] = q, q = q >> 8, _[g++] = q, q = q >> 8, _[g++] = q;
                let Y = Number(p >> BigInt(32) & BigInt(4294967295));
                return _[g++] = Y, Y = Y >> 8, _[g++] = Y, Y = Y >> 8, _[g++] = Y, Y = Y >> 8, _[g++] = Y, g;
            }
            function te(_, p, g, E, j) {
                Ia(p, E, j, _, g, 7);
                let q = Number(p & BigInt(4294967295));
                _[g + 7] = q, q = q >> 8, _[g + 6] = q, q = q >> 8, _[g + 5] = q, q = q >> 8, _[g + 4] = q;
                let Y = Number(p >> BigInt(32) & BigInt(4294967295));
                return _[g + 3] = Y, Y = Y >> 8, _[g + 2] = Y, Y = Y >> 8, _[g + 1] = Y, Y = Y >> 8, _[g] = Y, g + 8;
            }
            d.prototype.writeBigUInt64LE = hn(function(p, g = 0) {
                return Q(this, p, g, BigInt(0), BigInt("0xffffffffffffffff"));
            }), d.prototype.writeBigUInt64BE = hn(function(p, g = 0) {
                return te(this, p, g, BigInt(0), BigInt("0xffffffffffffffff"));
            }), d.prototype.writeIntLE = function(p, g, E, j) {
                if (p = +p, g = g >>> 0, !j) {
                    const Ce = Math.pow(2, 8 * E - 1);
                    G(this, p, g, E, Ce - 1, -Ce);
                }
                let q = 0, Y = 1, ue = 0;
                for(this[g] = p & 255; ++q < E && (Y *= 256);)p < 0 && ue === 0 && this[g + q - 1] !== 0 && (ue = 1), this[g + q] = (p / Y >> 0) - ue & 255;
                return g + E;
            }, d.prototype.writeIntBE = function(p, g, E, j) {
                if (p = +p, g = g >>> 0, !j) {
                    const Ce = Math.pow(2, 8 * E - 1);
                    G(this, p, g, E, Ce - 1, -Ce);
                }
                let q = E - 1, Y = 1, ue = 0;
                for(this[g + q] = p & 255; --q >= 0 && (Y *= 256);)p < 0 && ue === 0 && this[g + q + 1] !== 0 && (ue = 1), this[g + q] = (p / Y >> 0) - ue & 255;
                return g + E;
            }, d.prototype.writeInt8 = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 1, 127, -128), p < 0 && (p = 255 + p + 1), this[g] = p & 255, g + 1;
            }, d.prototype.writeInt16LE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 2, 32767, -32768), this[g] = p & 255, this[g + 1] = p >>> 8, g + 2;
            }, d.prototype.writeInt16BE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 2, 32767, -32768), this[g] = p >>> 8, this[g + 1] = p & 255, g + 2;
            }, d.prototype.writeInt32LE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 4, 2147483647, -2147483648), this[g] = p & 255, this[g + 1] = p >>> 8, this[g + 2] = p >>> 16, this[g + 3] = p >>> 24, g + 4;
            }, d.prototype.writeInt32BE = function(p, g, E) {
                return p = +p, g = g >>> 0, E || G(this, p, g, 4, 2147483647, -2147483648), p < 0 && (p = 4294967295 + p + 1), this[g] = p >>> 24, this[g + 1] = p >>> 16, this[g + 2] = p >>> 8, this[g + 3] = p & 255, g + 4;
            }, d.prototype.writeBigInt64LE = hn(function(p, g = 0) {
                return Q(this, p, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            }), d.prototype.writeBigInt64BE = hn(function(p, g = 0) {
                return te(this, p, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            });
            function de(_, p, g, E, j, q) {
                if (g + E > _.length) throw new RangeError("Index out of range");
                if (g < 0) throw new RangeError("Index out of range");
            }
            function ye(_, p, g, E, j) {
                return p = +p, g = g >>> 0, j || de(_, p, g, 4), r.write(_, p, g, E, 23, 4), g + 4;
            }
            d.prototype.writeFloatLE = function(p, g, E) {
                return ye(this, p, g, !0, E);
            }, d.prototype.writeFloatBE = function(p, g, E) {
                return ye(this, p, g, !1, E);
            };
            function Te(_, p, g, E, j) {
                return p = +p, g = g >>> 0, j || de(_, p, g, 8), r.write(_, p, g, E, 52, 8), g + 8;
            }
            d.prototype.writeDoubleLE = function(p, g, E) {
                return Te(this, p, g, !0, E);
            }, d.prototype.writeDoubleBE = function(p, g, E) {
                return Te(this, p, g, !1, E);
            }, d.prototype.copy = function(p, g, E, j) {
                if (!d.isBuffer(p)) throw new TypeError("argument should be a Buffer");
                if (E || (E = 0), !j && j !== 0 && (j = this.length), g >= p.length && (g = p.length), g || (g = 0), j > 0 && j < E && (j = E), j === E || p.length === 0 || this.length === 0) return 0;
                if (g < 0) throw new RangeError("targetStart out of bounds");
                if (E < 0 || E >= this.length) throw new RangeError("Index out of range");
                if (j < 0) throw new RangeError("sourceEnd out of bounds");
                j > this.length && (j = this.length), p.length - g < j - E && (j = p.length - g + E);
                const q = j - E;
                return this === p && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(g, E, j) : Uint8Array.prototype.set.call(p, this.subarray(E, j), g), q;
            }, d.prototype.fill = function(p, g, E, j) {
                if (typeof p == "string") {
                    if (typeof g == "string" ? (j = g, g = 0, E = this.length) : typeof E == "string" && (j = E, E = this.length), j !== void 0 && typeof j != "string") throw new TypeError("encoding must be a string");
                    if (typeof j == "string" && !d.isEncoding(j)) throw new TypeError("Unknown encoding: " + j);
                    if (p.length === 1) {
                        const Y = p.charCodeAt(0);
                        (j === "utf8" && Y < 128 || j === "latin1") && (p = Y);
                    }
                } else typeof p == "number" ? p = p & 255 : typeof p == "boolean" && (p = Number(p));
                if (g < 0 || this.length < g || this.length < E) throw new RangeError("Out of range index");
                if (E <= g) return this;
                g = g >>> 0, E = E === void 0 ? this.length : E >>> 0, p || (p = 0);
                let q;
                if (typeof p == "number") for(q = g; q < E; ++q)this[q] = p;
                else {
                    const Y = d.isBuffer(p) ? p : d.from(p, j), ue = Y.length;
                    if (ue === 0) throw new TypeError('The value "' + p + '" is invalid for argument "value"');
                    for(q = 0; q < E - g; ++q)this[q + g] = Y[q % ue];
                }
                return this;
            };
            const Fe = {};
            function Ge(_, p, g) {
                Fe[_] = class extends g {
                    constructor(){
                        super(), Object.defineProperty(this, "message", {
                            value: p.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${_}]`, this.stack, delete this.name;
                    }
                    get code() {
                        return _;
                    }
                    set code(j) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: j,
                            writable: !0
                        });
                    }
                    toString() {
                        return `${this.name} [${_}]: ${this.message}`;
                    }
                };
            }
            Ge("ERR_BUFFER_OUT_OF_BOUNDS", function(_) {
                return _ ? `${_} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
            }, RangeError), Ge("ERR_INVALID_ARG_TYPE", function(_, p) {
                return `The "${_}" argument must be of type number. Received type ${typeof p}`;
            }, TypeError), Ge("ERR_OUT_OF_RANGE", function(_, p, g) {
                let E = `The value of "${_}" is out of range.`, j = g;
                return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? j = Gn(String(g)) : typeof g == "bigint" && (j = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (j = Gn(j)), j += "n"), E += ` It must be ${p}. Received ${j}`, E;
            }, RangeError);
            function Gn(_) {
                let p = "", g = _.length;
                const E = _[0] === "-" ? 1 : 0;
                for(; g >= E + 4; g -= 3)p = `_${_.slice(g - 3, g)}${p}`;
                return `${_.slice(0, g)}${p}`;
            }
            function $a(_, p, g) {
                wn(p, "offset"), (_[p] === void 0 || _[p + g] === void 0) && Nt(p, _.length - (g + 1));
            }
            function Ia(_, p, g, E, j, q) {
                if (_ > g || _ < p) {
                    const Y = typeof p == "bigint" ? "n" : "";
                    let ue;
                    throw p === 0 || p === BigInt(0) ? ue = `>= 0${Y} and < 2${Y} ** ${(q + 1) * 8}${Y}` : ue = `>= -(2${Y} ** ${(q + 1) * 8 - 1}${Y}) and < 2 ** ${(q + 1) * 8 - 1}${Y}`, new Fe.ERR_OUT_OF_RANGE("value", ue, _);
                }
                $a(E, j, q);
            }
            function wn(_, p) {
                if (typeof _ != "number") throw new Fe.ERR_INVALID_ARG_TYPE(p, "number", _);
            }
            function Nt(_, p, g) {
                throw Math.floor(_) !== _ ? (wn(_, g), new Fe.ERR_OUT_OF_RANGE("offset", "an integer", _)) : p < 0 ? new Fe.ERR_BUFFER_OUT_OF_BOUNDS : new Fe.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${p}`, _);
            }
            const Vi = /[^+/0-9A-Za-z-_]/g;
            function Ki(_) {
                if (_ = _.split("=")[0], _ = _.trim().replace(Vi, ""), _.length < 2) return "";
                for(; _.length % 4 !== 0;)_ = _ + "=";
                return _;
            }
            function Yi(_, p) {
                p = p || 1 / 0;
                let g;
                const E = _.length;
                let j = null;
                const q = [];
                for(let Y = 0; Y < E; ++Y){
                    if (g = _.charCodeAt(Y), g > 55295 && g < 57344) {
                        if (!j) {
                            if (g > 56319) {
                                (p -= 3) > -1 && q.push(239, 191, 189);
                                continue;
                            } else if (Y + 1 === E) {
                                (p -= 3) > -1 && q.push(239, 191, 189);
                                continue;
                            }
                            j = g;
                            continue;
                        }
                        if (g < 56320) {
                            (p -= 3) > -1 && q.push(239, 191, 189), j = g;
                            continue;
                        }
                        g = (j - 55296 << 10 | g - 56320) + 65536;
                    } else j && (p -= 3) > -1 && q.push(239, 191, 189);
                    if (j = null, g < 128) {
                        if ((p -= 1) < 0) break;
                        q.push(g);
                    } else if (g < 2048) {
                        if ((p -= 2) < 0) break;
                        q.push(g >> 6 | 192, g & 63 | 128);
                    } else if (g < 65536) {
                        if ((p -= 3) < 0) break;
                        q.push(g >> 12 | 224, g >> 6 & 63 | 128, g & 63 | 128);
                    } else if (g < 1114112) {
                        if ((p -= 4) < 0) break;
                        q.push(g >> 18 | 240, g >> 12 & 63 | 128, g >> 6 & 63 | 128, g & 63 | 128);
                    } else throw new Error("Invalid code point");
                }
                return q;
            }
            function os(_) {
                const p = [];
                for(let g = 0; g < _.length; ++g)p.push(_.charCodeAt(g) & 255);
                return p;
            }
            function Xi(_, p) {
                let g, E, j;
                const q = [];
                for(let Y = 0; Y < _.length && !((p -= 2) < 0); ++Y)g = _.charCodeAt(Y), E = g >> 8, j = g % 256, q.push(j), q.push(E);
                return q;
            }
            function Pa(_) {
                return n.toByteArray(Ki(_));
            }
            function Vn(_, p, g, E) {
                let j;
                for(j = 0; j < E && !(j + g >= p.length || j >= _.length); ++j)p[j + g] = _[j];
                return j;
            }
            function Vt(_, p) {
                return _ instanceof p || _ != null && _.constructor != null && _.constructor.name != null && _.constructor.name === p.name;
            }
            function Ji(_) {
                return _ !== _;
            }
            const St = (function() {
                const _ = "0123456789abcdef", p = new Array(256);
                for(let g = 0; g < 16; ++g){
                    const E = g * 16;
                    for(let j = 0; j < 16; ++j)p[E + j] = _[g] + _[j];
                }
                return p;
            })();
            function hn(_) {
                return typeof BigInt > "u" ? us : _;
            }
            function us() {
                throw new Error("BigInt not supported");
            }
        })(hc)), hc;
    }
    var sv = rv(), fc = {
        exports: {}
    }, pe = {};
    var nm;
    function lv() {
        if (nm) return pe;
        nm = 1;
        var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), x = Symbol.iterator;
        function A(C) {
            return C === null || typeof C != "object" ? null : (C = x && C[x] || C["@@iterator"], typeof C == "function" ? C : null);
        }
        var U = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, B = Object.assign, D = {};
        function I(C, G, Q) {
            this.props = C, this.context = G, this.refs = D, this.updater = Q || U;
        }
        I.prototype.isReactComponent = {}, I.prototype.setState = function(C, G) {
            if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, C, G, "setState");
        }, I.prototype.forceUpdate = function(C) {
            this.updater.enqueueForceUpdate(this, C, "forceUpdate");
        };
        function K() {}
        K.prototype = I.prototype;
        function H(C, G, Q) {
            this.props = C, this.context = G, this.refs = D, this.updater = Q || U;
        }
        var F = H.prototype = new K;
        F.constructor = H, B(F, I.prototype), F.isPureReactComponent = !0;
        var Z = Array.isArray;
        function le() {}
        var ee = {
            H: null,
            A: null,
            T: null,
            S: null
        }, qe = Object.prototype.hasOwnProperty;
        function ke(C, G, Q) {
            var te = Q.ref;
            return {
                $$typeof: i,
                type: C,
                key: G,
                ref: te !== void 0 ? te : null,
                props: Q
            };
        }
        function Tt(C, G) {
            return ke(C.type, G, C.props);
        }
        function dt(C) {
            return typeof C == "object" && C !== null && C.$$typeof === i;
        }
        function tt(C) {
            var G = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + C.replace(/[=:]/g, function(Q) {
                return G[Q];
            });
        }
        var fe = /\/+/g;
        function Ae(C, G) {
            return typeof C == "object" && C !== null && C.key != null ? tt("" + C.key) : G.toString(36);
        }
        function je(C) {
            switch(C.status){
                case "fulfilled":
                    return C.value;
                case "rejected":
                    throw C.reason;
                default:
                    switch(typeof C.status == "string" ? C.then(le, le) : (C.status = "pending", C.then(function(G) {
                        C.status === "pending" && (C.status = "fulfilled", C.value = G);
                    }, function(G) {
                        C.status === "pending" && (C.status = "rejected", C.reason = G);
                    })), C.status){
                        case "fulfilled":
                            return C.value;
                        case "rejected":
                            throw C.reason;
                    }
            }
            throw C;
        }
        function P(C, G, Q, te, de) {
            var ye = typeof C;
            (ye === "undefined" || ye === "boolean") && (C = null);
            var Te = !1;
            if (C === null) Te = !0;
            else switch(ye){
                case "bigint":
                case "string":
                case "number":
                    Te = !0;
                    break;
                case "object":
                    switch(C.$$typeof){
                        case i:
                        case n:
                            Te = !0;
                            break;
                        case S:
                            return Te = C._init, P(Te(C._payload), G, Q, te, de);
                    }
            }
            if (Te) return de = de(C), Te = te === "" ? "." + Ae(C, 0) : te, Z(de) ? (Q = "", Te != null && (Q = Te.replace(fe, "$&/") + "/"), P(de, G, Q, "", function(Gn) {
                return Gn;
            })) : de != null && (dt(de) && (de = Tt(de, Q + (de.key == null || C && C.key === de.key ? "" : ("" + de.key).replace(fe, "$&/") + "/") + Te)), G.push(de)), 1;
            Te = 0;
            var Fe = te === "" ? "." : te + ":";
            if (Z(C)) for(var Ge = 0; Ge < C.length; Ge++)te = C[Ge], ye = Fe + Ae(te, Ge), Te += P(te, G, Q, ye, de);
            else if (Ge = A(C), typeof Ge == "function") for(C = Ge.call(C), Ge = 0; !(te = C.next()).done;)te = te.value, ye = Fe + Ae(te, Ge++), Te += P(te, G, Q, ye, de);
            else if (ye === "object") {
                if (typeof C.then == "function") return P(je(C), G, Q, te, de);
                throw G = String(C), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
            }
            return Te;
        }
        function W(C, G, Q) {
            if (C == null) return C;
            var te = [], de = 0;
            return P(C, te, "", "", function(ye) {
                return G.call(Q, ye, de++);
            }), te;
        }
        function he(C) {
            if (C._status === -1) {
                var G = C._result;
                G = G(), G.then(function(Q) {
                    (C._status === 0 || C._status === -1) && (C._status = 1, C._result = Q);
                }, function(Q) {
                    (C._status === 0 || C._status === -1) && (C._status = 2, C._result = Q);
                }), C._status === -1 && (C._status = 0, C._result = G);
            }
            if (C._status === 1) return C._result.default;
            throw C._result;
        }
        var Ue = typeof reportError == "function" ? reportError : function(C) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var G = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                    error: C
                });
                if (!window.dispatchEvent(G)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", C);
                return;
            }
            console.error(C);
        }, Ne = {
            map: W,
            forEach: function(C, G, Q) {
                W(C, function() {
                    G.apply(this, arguments);
                }, Q);
            },
            count: function(C) {
                var G = 0;
                return W(C, function() {
                    G++;
                }), G;
            },
            toArray: function(C) {
                return W(C, function(G) {
                    return G;
                }) || [];
            },
            only: function(C) {
                if (!dt(C)) throw Error("React.Children.only expected to receive a single React element child.");
                return C;
            }
        };
        return pe.Activity = b, pe.Children = Ne, pe.Component = I, pe.Fragment = r, pe.Profiler = u, pe.PureComponent = H, pe.StrictMode = l, pe.Suspense = m, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, pe.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(C) {
                return ee.H.useMemoCache(C);
            }
        }, pe.cache = function(C) {
            return function() {
                return C.apply(null, arguments);
            };
        }, pe.cacheSignal = function() {
            return null;
        }, pe.cloneElement = function(C, G, Q) {
            if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
            var te = B({}, C.props), de = C.key;
            if (G != null) for(ye in G.key !== void 0 && (de = "" + G.key), G)!qe.call(G, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && G.ref === void 0 || (te[ye] = G[ye]);
            var ye = arguments.length - 2;
            if (ye === 1) te.children = Q;
            else if (1 < ye) {
                for(var Te = Array(ye), Fe = 0; Fe < ye; Fe++)Te[Fe] = arguments[Fe + 2];
                te.children = Te;
            }
            return ke(C.type, de, te);
        }, pe.createContext = function(C) {
            return C = {
                $$typeof: f,
                _currentValue: C,
                _currentValue2: C,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, C.Provider = C, C.Consumer = {
                $$typeof: c,
                _context: C
            }, C;
        }, pe.createElement = function(C, G, Q) {
            var te, de = {}, ye = null;
            if (G != null) for(te in G.key !== void 0 && (ye = "" + G.key), G)qe.call(G, te) && te !== "key" && te !== "__self" && te !== "__source" && (de[te] = G[te]);
            var Te = arguments.length - 2;
            if (Te === 1) de.children = Q;
            else if (1 < Te) {
                for(var Fe = Array(Te), Ge = 0; Ge < Te; Ge++)Fe[Ge] = arguments[Ge + 2];
                de.children = Fe;
            }
            if (C && C.defaultProps) for(te in Te = C.defaultProps, Te)de[te] === void 0 && (de[te] = Te[te]);
            return ke(C, ye, de);
        }, pe.createRef = function() {
            return {
                current: null
            };
        }, pe.forwardRef = function(C) {
            return {
                $$typeof: d,
                render: C
            };
        }, pe.isValidElement = dt, pe.lazy = function(C) {
            return {
                $$typeof: S,
                _payload: {
                    _status: -1,
                    _result: C
                },
                _init: he
            };
        }, pe.memo = function(C, G) {
            return {
                $$typeof: v,
                type: C,
                compare: G === void 0 ? null : G
            };
        }, pe.startTransition = function(C) {
            var G = ee.T, Q = {};
            ee.T = Q;
            try {
                var te = C(), de = ee.S;
                de !== null && de(Q, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(le, Ue);
            } catch (ye) {
                Ue(ye);
            } finally{
                G !== null && Q.types !== null && (G.types = Q.types), ee.T = G;
            }
        }, pe.unstable_useCacheRefresh = function() {
            return ee.H.useCacheRefresh();
        }, pe.use = function(C) {
            return ee.H.use(C);
        }, pe.useActionState = function(C, G, Q) {
            return ee.H.useActionState(C, G, Q);
        }, pe.useCallback = function(C, G) {
            return ee.H.useCallback(C, G);
        }, pe.useContext = function(C) {
            return ee.H.useContext(C);
        }, pe.useDebugValue = function() {}, pe.useDeferredValue = function(C, G) {
            return ee.H.useDeferredValue(C, G);
        }, pe.useEffect = function(C, G) {
            return ee.H.useEffect(C, G);
        }, pe.useEffectEvent = function(C) {
            return ee.H.useEffectEvent(C);
        }, pe.useId = function() {
            return ee.H.useId();
        }, pe.useImperativeHandle = function(C, G, Q) {
            return ee.H.useImperativeHandle(C, G, Q);
        }, pe.useInsertionEffect = function(C, G) {
            return ee.H.useInsertionEffect(C, G);
        }, pe.useLayoutEffect = function(C, G) {
            return ee.H.useLayoutEffect(C, G);
        }, pe.useMemo = function(C, G) {
            return ee.H.useMemo(C, G);
        }, pe.useOptimistic = function(C, G) {
            return ee.H.useOptimistic(C, G);
        }, pe.useReducer = function(C, G, Q) {
            return ee.H.useReducer(C, G, Q);
        }, pe.useRef = function(C) {
            return ee.H.useRef(C);
        }, pe.useState = function(C) {
            return ee.H.useState(C);
        }, pe.useSyncExternalStore = function(C, G, Q) {
            return ee.H.useSyncExternalStore(C, G, Q);
        }, pe.useTransition = function() {
            return ee.H.useTransition();
        }, pe.version = "19.2.5", pe;
    }
    var am;
    function Ic() {
        return am || (am = 1, fc.exports = lv()), fc.exports;
    }
    k = Ic();
    jE = ev(k);
    var dc = {
        exports: {}
    }, Pr = {}, pc = {
        exports: {}
    }, mc = {};
    var im;
    function ov() {
        return im || (im = 1, (function(i) {
            function n(P, W) {
                var he = P.length;
                P.push(W);
                e: for(; 0 < he;){
                    var Ue = he - 1 >>> 1, Ne = P[Ue];
                    if (0 < u(Ne, W)) P[Ue] = W, P[he] = Ne, he = Ue;
                    else break e;
                }
            }
            function r(P) {
                return P.length === 0 ? null : P[0];
            }
            function l(P) {
                if (P.length === 0) return null;
                var W = P[0], he = P.pop();
                if (he !== W) {
                    P[0] = he;
                    e: for(var Ue = 0, Ne = P.length, C = Ne >>> 1; Ue < C;){
                        var G = 2 * (Ue + 1) - 1, Q = P[G], te = G + 1, de = P[te];
                        if (0 > u(Q, he)) te < Ne && 0 > u(de, Q) ? (P[Ue] = de, P[te] = he, Ue = te) : (P[Ue] = Q, P[G] = he, Ue = G);
                        else if (te < Ne && 0 > u(de, he)) P[Ue] = de, P[te] = he, Ue = te;
                        else break e;
                    }
                }
                return W;
            }
            function u(P, W) {
                var he = P.sortIndex - W.sortIndex;
                return he !== 0 ? he : P.id - W.id;
            }
            if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var c = performance;
                i.unstable_now = function() {
                    return c.now();
                };
            } else {
                var f = Date, d = f.now();
                i.unstable_now = function() {
                    return f.now() - d;
                };
            }
            var m = [], v = [], S = 1, b = null, x = 3, A = !1, U = !1, B = !1, D = !1, I = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
            function F(P) {
                for(var W = r(v); W !== null;){
                    if (W.callback === null) l(v);
                    else if (W.startTime <= P) l(v), W.sortIndex = W.expirationTime, n(m, W);
                    else break;
                    W = r(v);
                }
            }
            function Z(P) {
                if (B = !1, F(P), !U) if (r(m) !== null) U = !0, le || (le = !0, tt());
                else {
                    var W = r(v);
                    W !== null && je(Z, W.startTime - P);
                }
            }
            var le = !1, ee = -1, qe = 5, ke = -1;
            function Tt() {
                return D ? !0 : !(i.unstable_now() - ke < qe);
            }
            function dt() {
                if (D = !1, le) {
                    var P = i.unstable_now();
                    ke = P;
                    var W = !0;
                    try {
                        e: {
                            U = !1, B && (B = !1, K(ee), ee = -1), A = !0;
                            var he = x;
                            try {
                                t: {
                                    for(F(P), b = r(m); b !== null && !(b.expirationTime > P && Tt());){
                                        var Ue = b.callback;
                                        if (typeof Ue == "function") {
                                            b.callback = null, x = b.priorityLevel;
                                            var Ne = Ue(b.expirationTime <= P);
                                            if (P = i.unstable_now(), typeof Ne == "function") {
                                                b.callback = Ne, F(P), W = !0;
                                                break t;
                                            }
                                            b === r(m) && l(m), F(P);
                                        } else l(m);
                                        b = r(m);
                                    }
                                    if (b !== null) W = !0;
                                    else {
                                        var C = r(v);
                                        C !== null && je(Z, C.startTime - P), W = !1;
                                    }
                                }
                                break e;
                            } finally{
                                b = null, x = he, A = !1;
                            }
                            W = void 0;
                        }
                    } finally{
                        W ? tt() : le = !1;
                    }
                }
            }
            var tt;
            if (typeof H == "function") tt = function() {
                H(dt);
            };
            else if (typeof MessageChannel < "u") {
                var fe = new MessageChannel, Ae = fe.port2;
                fe.port1.onmessage = dt, tt = function() {
                    Ae.postMessage(null);
                };
            } else tt = function() {
                I(dt, 0);
            };
            function je(P, W) {
                ee = I(function() {
                    P(i.unstable_now());
                }, W);
            }
            i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, i.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qe = 0 < P ? Math.floor(1e3 / P) : 5;
            }, i.unstable_getCurrentPriorityLevel = function() {
                return x;
            }, i.unstable_next = function(P) {
                switch(x){
                    case 1:
                    case 2:
                    case 3:
                        var W = 3;
                        break;
                    default:
                        W = x;
                }
                var he = x;
                x = W;
                try {
                    return P();
                } finally{
                    x = he;
                }
            }, i.unstable_requestPaint = function() {
                D = !0;
            }, i.unstable_runWithPriority = function(P, W) {
                switch(P){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        P = 3;
                }
                var he = x;
                x = P;
                try {
                    return W();
                } finally{
                    x = he;
                }
            }, i.unstable_scheduleCallback = function(P, W, he) {
                var Ue = i.unstable_now();
                switch(typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? Ue + he : Ue) : he = Ue, P){
                    case 1:
                        var Ne = -1;
                        break;
                    case 2:
                        Ne = 250;
                        break;
                    case 5:
                        Ne = 1073741823;
                        break;
                    case 4:
                        Ne = 1e4;
                        break;
                    default:
                        Ne = 5e3;
                }
                return Ne = he + Ne, P = {
                    id: S++,
                    callback: W,
                    priorityLevel: P,
                    startTime: he,
                    expirationTime: Ne,
                    sortIndex: -1
                }, he > Ue ? (P.sortIndex = he, n(v, P), r(m) === null && P === r(v) && (B ? (K(ee), ee = -1) : B = !0, je(Z, he - Ue))) : (P.sortIndex = Ne, n(m, P), U || A || (U = !0, le || (le = !0, tt()))), P;
            }, i.unstable_shouldYield = Tt, i.unstable_wrapCallback = function(P) {
                var W = x;
                return function() {
                    var he = x;
                    x = W;
                    try {
                        return P.apply(this, arguments);
                    } finally{
                        x = he;
                    }
                };
            };
        })(mc)), mc;
    }
    var rm;
    function uv() {
        return rm || (rm = 1, pc.exports = ov()), pc.exports;
    }
    var gc = {
        exports: {}
    }, _t = {};
    var sm;
    function cv() {
        if (sm) return _t;
        sm = 1;
        var i = Ic();
        function n(m) {
            var v = "https://react.dev/errors/" + m;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var S = 2; S < arguments.length; S++)v += "&args[]=" + encodeURIComponent(arguments[S]);
            }
            return "Minified React error #" + m + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
        function c(m, v, S) {
            var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: u,
                key: b == null ? null : "" + b,
                children: m,
                containerInfo: v,
                implementation: S
            };
        }
        var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function d(m, v) {
            if (m === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, _t.createPortal = function(m, v) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(n(299));
            return c(m, v, null, S);
        }, _t.flushSync = function(m) {
            var v = f.T, S = l.p;
            try {
                if (f.T = null, l.p = 2, m) return m();
            } finally{
                f.T = v, l.p = S, l.d.f();
            }
        }, _t.preconnect = function(m, v) {
            typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, l.d.C(m, v));
        }, _t.prefetchDNS = function(m) {
            typeof m == "string" && l.d.D(m);
        }, _t.preinit = function(m, v) {
            if (typeof m == "string" && v && typeof v.as == "string") {
                var S = v.as, b = d(S, v.crossOrigin), x = typeof v.integrity == "string" ? v.integrity : void 0, A = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                S === "style" ? l.d.S(m, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: b,
                    integrity: x,
                    fetchPriority: A
                }) : S === "script" && l.d.X(m, {
                    crossOrigin: b,
                    integrity: x,
                    fetchPriority: A,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, _t.preinitModule = function(m, v) {
            if (typeof m == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var S = d(v.as, v.crossOrigin);
                    l.d.M(m, {
                        crossOrigin: S,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && l.d.M(m);
        }, _t.preload = function(m, v) {
            if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var S = v.as, b = d(S, v.crossOrigin);
                l.d.L(m, S, {
                    crossOrigin: b,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                    type: typeof v.type == "string" ? v.type : void 0,
                    fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                    referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                    imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                    imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                    media: typeof v.media == "string" ? v.media : void 0
                });
            }
        }, _t.preloadModule = function(m, v) {
            if (typeof m == "string") if (v) {
                var S = d(v.as, v.crossOrigin);
                l.d.m(m, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: S,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else l.d.m(m);
        }, _t.requestFormReset = function(m) {
            l.d.r(m);
        }, _t.unstable_batchedUpdates = function(m, v) {
            return m(v);
        }, _t.useFormState = function(m, v, S) {
            return f.H.useFormState(m, v, S);
        }, _t.useFormStatus = function() {
            return f.H.useHostTransitionStatus();
        }, _t.version = "19.2.5", _t;
    }
    var lm;
    function hv() {
        if (lm) return gc.exports;
        lm = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), gc.exports = cv(), gc.exports;
    }
    var om;
    function fv() {
        if (om) return Pr;
        om = 1;
        var i = uv(), n = Ic(), r = hv();
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
        function c(e) {
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
        function m(e) {
            if (c(e) !== e) throw Error(l(188));
        }
        function v(e) {
            var t = e.alternate;
            if (!t) {
                if (t = c(e), t === null) throw Error(l(188));
                return t !== e ? null : e;
            }
            for(var a = e, s = t;;){
                var o = a.return;
                if (o === null) break;
                var h = o.alternate;
                if (h === null) {
                    if (s = o.return, s !== null) {
                        a = s;
                        continue;
                    }
                    break;
                }
                if (o.child === h.child) {
                    for(h = o.child; h;){
                        if (h === a) return m(o), e;
                        if (h === s) return m(o), t;
                        h = h.sibling;
                    }
                    throw Error(l(188));
                }
                if (a.return !== s.return) a = o, s = h;
                else {
                    for(var y = !1, w = o.child; w;){
                        if (w === a) {
                            y = !0, a = o, s = h;
                            break;
                        }
                        if (w === s) {
                            y = !0, s = o, a = h;
                            break;
                        }
                        w = w.sibling;
                    }
                    if (!y) {
                        for(w = h.child; w;){
                            if (w === a) {
                                y = !0, a = h, s = o;
                                break;
                            }
                            if (w === s) {
                                y = !0, s = h, a = o;
                                break;
                            }
                            w = w.sibling;
                        }
                        if (!y) throw Error(l(189));
                    }
                }
                if (a.alternate !== s) throw Error(l(190));
            }
            if (a.tag !== 3) throw Error(l(188));
            return a.stateNode.current === a ? e : t;
        }
        function S(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = S(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var b = Object.assign, x = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), H = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ke = Symbol.for("react.activity"), Tt = Symbol.for("react.memo_cache_sentinel"), dt = Symbol.iterator;
        function tt(e) {
            return e === null || typeof e != "object" ? null : (e = dt && e[dt] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var fe = Symbol.for("react.client.reference");
        function Ae(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === fe ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case B:
                    return "Fragment";
                case I:
                    return "Profiler";
                case D:
                    return "StrictMode";
                case Z:
                    return "Suspense";
                case le:
                    return "SuspenseList";
                case ke:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case U:
                    return "Portal";
                case H:
                    return e.displayName || "Context";
                case K:
                    return (e._context.displayName || "Context") + ".Consumer";
                case F:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case ee:
                    return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
                case qe:
                    t = e._payload, e = e._init;
                    try {
                        return Ae(e(t));
                    } catch  {}
            }
            return null;
        }
        var je = Array.isArray, P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Ue = [], Ne = -1;
        function C(e) {
            return {
                current: e
            };
        }
        function G(e) {
            0 > Ne || (e.current = Ue[Ne], Ue[Ne] = null, Ne--);
        }
        function Q(e, t) {
            Ne++, Ue[Ne] = e.current, e.current = t;
        }
        var te = C(null), de = C(null), ye = C(null), Te = C(null);
        function Fe(e, t) {
            switch(Q(ye, t), Q(de, e), Q(te, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? wp(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = wp(t), e = _p(t, e);
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
            G(te), Q(te, e);
        }
        function Ge() {
            G(te), G(de), G(ye);
        }
        function Gn(e) {
            e.memoizedState !== null && Q(Te, e);
            var t = te.current, a = _p(t, e.type);
            t !== a && (Q(de, e), Q(te, a));
        }
        function $a(e) {
            de.current === e && (G(te), G(de)), Te.current === e && (G(Te), zr._currentValue = he);
        }
        var Ia, wn;
        function Nt(e) {
            if (Ia === void 0) try {
                throw Error();
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Ia = t && t[1] || "", wn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Ia + e + wn;
        }
        var Vi = !1;
        function Ki(e, t) {
            if (!e || Vi) return "";
            Vi = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var s = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var J = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(J.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(J, []);
                                    } catch ($) {
                                        var M = $;
                                    }
                                    Reflect.construct(e, [], J);
                                } else {
                                    try {
                                        J.call();
                                    } catch ($) {
                                        M = $;
                                    }
                                    e.call(J.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch ($) {
                                    M = $;
                                }
                                (J = e()) && typeof J.catch == "function" && J.catch(function() {});
                            }
                        } catch ($) {
                            if ($ && M && typeof $.stack == "string") return [
                                $.stack,
                                M.stack
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
                var h = s.DetermineComponentFrameRoot(), y = h[0], w = h[1];
                if (y && w) {
                    var R = y.split(`
`), z = w.split(`
`);
                    for(o = s = 0; s < R.length && !R[s].includes("DetermineComponentFrameRoot");)s++;
                    for(; o < z.length && !z[o].includes("DetermineComponentFrameRoot");)o++;
                    if (s === R.length || o === z.length) for(s = R.length - 1, o = z.length - 1; 1 <= s && 0 <= o && R[s] !== z[o];)o--;
                    for(; 1 <= s && 0 <= o; s--, o--)if (R[s] !== z[o]) {
                        if (s !== 1 || o !== 1) do if (s--, o--, 0 > o || R[s] !== z[o]) {
                            var V = `
` + R[s].replace(" at new ", " at ");
                            return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                        }
                        while (1 <= s && 0 <= o);
                        break;
                    }
                }
            } finally{
                Vi = !1, Error.prepareStackTrace = a;
            }
            return (a = e ? e.displayName || e.name : "") ? Nt(a) : "";
        }
        function Yi(e, t) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return Nt(e.type);
                case 16:
                    return Nt("Lazy");
                case 13:
                    return e.child !== t && t !== null ? Nt("Suspense Fallback") : Nt("Suspense");
                case 19:
                    return Nt("SuspenseList");
                case 0:
                case 15:
                    return Ki(e.type, !1);
                case 11:
                    return Ki(e.type.render, !1);
                case 1:
                    return Ki(e.type, !0);
                case 31:
                    return Nt("Activity");
                default:
                    return "";
            }
        }
        function os(e) {
            try {
                var t = "", a = null;
                do t += Yi(e, a), a = e, e = e.return;
                while (e);
                return t;
            } catch (s) {
                return `
Error generating stack: ` + s.message + `
` + s.stack;
            }
        }
        var Xi = Object.prototype.hasOwnProperty, Pa = i.unstable_scheduleCallback, Vn = i.unstable_cancelCallback, Vt = i.unstable_shouldYield, Ji = i.unstable_requestPaint, St = i.unstable_now, hn = i.unstable_getCurrentPriorityLevel, us = i.unstable_ImmediatePriority, _ = i.unstable_UserBlockingPriority, p = i.unstable_NormalPriority, g = i.unstable_LowPriority, E = i.unstable_IdlePriority, j = i.log, q = i.unstable_setDisableYieldValue, Y = null, ue = null;
        function Ce(e) {
            if (typeof j == "function" && q(e), ue && typeof ue.setStrictMode == "function") try {
                ue.setStrictMode(Y, e);
            } catch  {}
        }
        var ve = Math.clz32 ? Math.clz32 : qg, Ye = Math.log, De = Math.LN2;
        function qg(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Ye(e) / De | 0) | 0;
        }
        var cs = 256, hs = 262144, fs = 4194304;
        function va(e) {
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
        function ds(e, t, a) {
            var s = e.pendingLanes;
            if (s === 0) return 0;
            var o = 0, h = e.suspendedLanes, y = e.pingedLanes;
            e = e.warmLanes;
            var w = s & 134217727;
            return w !== 0 ? (s = w & ~h, s !== 0 ? o = va(s) : (y &= w, y !== 0 ? o = va(y) : a || (a = w & ~e, a !== 0 && (o = va(a))))) : (w = s & ~h, w !== 0 ? o = va(w) : y !== 0 ? o = va(y) : a || (a = s & ~e, a !== 0 && (o = va(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & h) === 0 && (h = o & -o, a = t & -t, h >= a || h === 32 && (a & 4194048) !== 0) ? t : o;
        }
        function Fi(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function $g(e, t) {
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
        function eh() {
            var e = fs;
            return fs <<= 1, (fs & 62914560) === 0 && (fs = 4194304), e;
        }
        function Wl(e) {
            for(var t = [], a = 0; 31 > a; a++)t.push(e);
            return t;
        }
        function Wi(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Ig(e, t, a, s, o, h) {
            var y = e.pendingLanes;
            e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
            var w = e.entanglements, R = e.expirationTimes, z = e.hiddenUpdates;
            for(a = y & ~a; 0 < a;){
                var V = 31 - ve(a), J = 1 << V;
                w[V] = 0, R[V] = -1;
                var M = z[V];
                if (M !== null) for(z[V] = null, V = 0; V < M.length; V++){
                    var $ = M[V];
                    $ !== null && ($.lane &= -536870913);
                }
                a &= ~J;
            }
            s !== 0 && th(e, s, 0), h !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(y & ~t));
        }
        function th(e, t, a) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var s = 31 - ve(t);
            e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930;
        }
        function nh(e, t) {
            var a = e.entangledLanes |= t;
            for(e = e.entanglements; a;){
                var s = 31 - ve(a), o = 1 << s;
                o & t | e[s] & t && (e[s] |= t), a &= ~o;
            }
        }
        function ah(e, t) {
            var a = t & -t;
            return a = (a & 42) !== 0 ? 1 : Ql(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
        }
        function Ql(e) {
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
        function Zl(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function ih() {
            var e = W.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gp(e.type));
        }
        function rh(e, t) {
            var a = W.p;
            try {
                return W.p = e, t();
            } finally{
                W.p = a;
            }
        }
        var Kn = Math.random().toString(36).slice(2), pt = "__reactFiber$" + Kn, At = "__reactProps$" + Kn, Ga = "__reactContainer$" + Kn, eo = "__reactEvents$" + Kn, Pg = "__reactListeners$" + Kn, Gg = "__reactHandles$" + Kn, sh = "__reactResources$" + Kn, Qi = "__reactMarker$" + Kn;
        function to(e) {
            delete e[pt], delete e[At], delete e[eo], delete e[Pg], delete e[Gg];
        }
        function Va(e) {
            var t = e[pt];
            if (t) return t;
            for(var a = e.parentNode; a;){
                if (t = a[Ga] || a[pt]) {
                    if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for(e = Cp(e); e !== null;){
                        if (a = e[pt]) return a;
                        e = Cp(e);
                    }
                    return t;
                }
                e = a, a = e.parentNode;
            }
            return null;
        }
        function Ka(e) {
            if (e = e[pt] || e[Ga]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Zi(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(l(33));
        }
        function Ya(e) {
            var t = e[sh];
            return t || (t = e[sh] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function ht(e) {
            e[Qi] = !0;
        }
        var lh = new Set, oh = {};
        function ba(e, t) {
            Xa(e, t), Xa(e + "Capture", t);
        }
        function Xa(e, t) {
            for(oh[e] = t, e = 0; e < t.length; e++)lh.add(t[e]);
        }
        var Vg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), uh = {}, ch = {};
        function Kg(e) {
            return Xi.call(ch, e) ? !0 : Xi.call(uh, e) ? !1 : Vg.test(e) ? ch[e] = !0 : (uh[e] = !0, !1);
        }
        function ps(e, t, a) {
            if (Kg(t)) if (a === null) e.removeAttribute(t);
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
        function ms(e, t, a) {
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
        function _n(e, t, a, s) {
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
        function Kt(e) {
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
        function hh(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Yg(e, t, a) {
            var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
                var o = s.get, h = s.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this);
                    },
                    set: function(y) {
                        a = "" + y, h.call(this, y);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: s.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(y) {
                        a = "" + y;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function no(e) {
            if (!e._valueTracker) {
                var t = hh(e) ? "checked" : "value";
                e._valueTracker = Yg(e, t, "" + e[t]);
            }
        }
        function fh(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var a = t.getValue(), s = "";
            return e && (s = hh(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1;
        }
        function gs(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var Xg = /[\n"\\]/g;
        function Yt(e) {
            return e.replace(Xg, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function ao(e, t, a, s, o, h, y, w) {
            e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Kt(t)) : e.value !== "" + Kt(t) && (e.value = "" + Kt(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? io(e, y, Kt(t)) : a != null ? io(e, y, Kt(a)) : s != null && e.removeAttribute("value"), o == null && h != null && (e.defaultChecked = !!h), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + Kt(w) : e.removeAttribute("name");
        }
        function dh(e, t, a, s, o, h, y, w) {
            if (h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.type = h), t != null || a != null) {
                if (!(h !== "submit" && h !== "reset" || t != null)) {
                    no(e);
                    return;
                }
                a = a != null ? "" + Kt(a) : "", t = t != null ? "" + Kt(t) : a, w || t === e.value || (e.value = t), e.defaultValue = t;
            }
            s = s ?? o, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = w ? e.checked : !!s, e.defaultChecked = !!s, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), no(e);
        }
        function io(e, t, a) {
            t === "number" && gs(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
        }
        function Ja(e, t, a, s) {
            if (e = e.options, t) {
                t = {};
                for(var o = 0; o < a.length; o++)t["$" + a[o]] = !0;
                for(a = 0; a < e.length; a++)o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && s && (e[a].defaultSelected = !0);
            } else {
                for(a = "" + Kt(a), t = null, o = 0; o < e.length; o++){
                    if (e[o].value === a) {
                        e[o].selected = !0, s && (e[o].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[o].disabled || (t = e[o]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function ph(e, t, a) {
            if (t != null && (t = "" + Kt(t), t !== e.value && (e.value = t), a == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = a != null ? "" + Kt(a) : "";
        }
        function mh(e, t, a, s) {
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
            a = Kt(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s), no(e);
        }
        function Fa(e, t) {
            if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === 3) {
                    a.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Jg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function gh(e, t, a) {
            var s = t.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Jg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
        }
        function yh(e, t, a) {
            if (t != null && typeof t != "object") throw Error(l(62));
            if (e = e.style, a != null) {
                for(var s in a)!a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
                for(var o in t)s = t[o], t.hasOwnProperty(o) && a[o] !== s && gh(e, o, s);
            } else for(var h in t)t.hasOwnProperty(h) && gh(e, h, t[h]);
        }
        function ro(e) {
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
        var Fg = new Map([
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
        ]), Wg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ys(e) {
            return Wg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function Sn() {}
        var so = null;
        function lo(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var Wa = null, Qa = null;
        function vh(e) {
            var t = Ka(e);
            if (t && (e = t.stateNode)) {
                var a = e[At] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (ao(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                            for(a = e; a.parentNode;)a = a.parentNode;
                            for(a = a.querySelectorAll('input[name="' + Yt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++){
                                var s = a[t];
                                if (s !== e && s.form === e.form) {
                                    var o = s[At] || null;
                                    if (!o) throw Error(l(90));
                                    ao(s, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                                }
                            }
                            for(t = 0; t < a.length; t++)s = a[t], s.form === e.form && fh(s);
                        }
                        break e;
                    case "textarea":
                        ph(e, a.value, a.defaultValue);
                        break e;
                    case "select":
                        t = a.value, t != null && Ja(e, !!a.multiple, t, !1);
                }
            }
        }
        var oo = !1;
        function bh(e, t, a) {
            if (oo) return e(t, a);
            oo = !0;
            try {
                var s = e(t);
                return s;
            } finally{
                if (oo = !1, (Wa !== null || Qa !== null) && (il(), Wa && (t = Wa, e = Qa, Qa = Wa = null, vh(t), e))) for(t = 0; t < e.length; t++)vh(e[t]);
            }
        }
        function er(e, t) {
            var a = e.stateNode;
            if (a === null) return null;
            var s = a[At] || null;
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
        var En = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uo = !1;
        if (En) try {
            var tr = {};
            Object.defineProperty(tr, "passive", {
                get: function() {
                    uo = !0;
                }
            }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
        } catch  {
            uo = !1;
        }
        var Yn = null, co = null, vs = null;
        function wh() {
            if (vs) return vs;
            var e, t = co, a = t.length, s, o = "value" in Yn ? Yn.value : Yn.textContent, h = o.length;
            for(e = 0; e < a && t[e] === o[e]; e++);
            var y = a - e;
            for(s = 1; s <= y && t[a - s] === o[h - s]; s++);
            return vs = o.slice(e, 1 < s ? 1 - s : void 0);
        }
        function bs(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function ws() {
            return !0;
        }
        function _h() {
            return !1;
        }
        function xt(e) {
            function t(a, s, o, h, y) {
                this._reactName = a, this._targetInst = o, this.type = s, this.nativeEvent = h, this.target = y, this.currentTarget = null;
                for(var w in e)e.hasOwnProperty(w) && (a = e[w], this[w] = a ? a(h) : h[w]);
                return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ws : _h, this.isPropagationStopped = _h, this;
            }
            return b(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ws);
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ws);
                },
                persist: function() {},
                isPersistent: ws
            }), t;
        }
        var wa = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, _s = xt(wa), nr = b({}, wa, {
            view: 0,
            detail: 0
        }), Qg = xt(nr), ho, fo, ar, Ss = b({}, nr, {
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
            getModifierState: mo,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== ar && (ar && e.type === "mousemove" ? (ho = e.screenX - ar.screenX, fo = e.screenY - ar.screenY) : fo = ho = 0, ar = e), ho);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : fo;
            }
        }), Sh = xt(Ss), Zg = b({}, Ss, {
            dataTransfer: 0
        }), ey = xt(Zg), ty = b({}, nr, {
            relatedTarget: 0
        }), po = xt(ty), ny = b({}, wa, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), ay = xt(ny), iy = b({}, wa, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), ry = xt(iy), sy = b({}, wa, {
            data: 0
        }), Eh = xt(sy), ly = {
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
        }, oy = {
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
        }, uy = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function cy(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = uy[e]) ? !!t[e] : !1;
        }
        function mo() {
            return cy;
        }
        var hy = b({}, nr, {
            key: function(e) {
                if (e.key) {
                    var t = ly[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = bs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oy[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: mo,
            charCode: function(e) {
                return e.type === "keypress" ? bs(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? bs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), fy = xt(hy), dy = b({}, Ss, {
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
        }), Th = xt(dy), py = b({}, nr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: mo
        }), my = xt(py), gy = b({}, wa, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), yy = xt(gy), vy = b({}, Ss, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), by = xt(vy), wy = b({}, wa, {
            newState: 0,
            oldState: 0
        }), _y = xt(wy), Sy = [
            9,
            13,
            27,
            32
        ], go = En && "CompositionEvent" in window, ir = null;
        En && "documentMode" in document && (ir = document.documentMode);
        var Ey = En && "TextEvent" in window && !ir, Ah = En && (!go || ir && 8 < ir && 11 >= ir), xh = " ", Rh = !1;
        function Ch(e, t) {
            switch(e){
                case "keyup":
                    return Sy.indexOf(t.keyCode) !== -1;
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
        function Oh(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var Za = !1;
        function Ty(e, t) {
            switch(e){
                case "compositionend":
                    return Oh(t);
                case "keypress":
                    return t.which !== 32 ? null : (Rh = !0, xh);
                case "textInput":
                    return e = t.data, e === xh && Rh ? null : e;
                default:
                    return null;
            }
        }
        function Ay(e, t) {
            if (Za) return e === "compositionend" || !go && Ch(e, t) ? (e = wh(), vs = co = Yn = null, Za = !1, e) : null;
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
                    return Ah && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var xy = {
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
        function kh(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!xy[e.type] : t === "textarea";
        }
        function jh(e, t, a, s) {
            Wa ? Qa ? Qa.push(s) : Qa = [
                s
            ] : Wa = s, t = hl(t, "onChange"), 0 < t.length && (a = new _s("onChange", "change", null, a, s), e.push({
                event: a,
                listeners: t
            }));
        }
        var rr = null, sr = null;
        function Ry(e) {
            pp(e, 0);
        }
        function Es(e) {
            var t = Zi(e);
            if (fh(t)) return e;
        }
        function Uh(e, t) {
            if (e === "change") return t;
        }
        var Nh = !1;
        if (En) {
            var yo;
            if (En) {
                var vo = "oninput" in document;
                if (!vo) {
                    var Dh = document.createElement("div");
                    Dh.setAttribute("oninput", "return;"), vo = typeof Dh.oninput == "function";
                }
                yo = vo;
            } else yo = !1;
            Nh = yo && (!document.documentMode || 9 < document.documentMode);
        }
        function Bh() {
            rr && (rr.detachEvent("onpropertychange", Lh), sr = rr = null);
        }
        function Lh(e) {
            if (e.propertyName === "value" && Es(sr)) {
                var t = [];
                jh(t, sr, e, lo(e)), bh(Ry, t);
            }
        }
        function Cy(e, t, a) {
            e === "focusin" ? (Bh(), rr = t, sr = a, rr.attachEvent("onpropertychange", Lh)) : e === "focusout" && Bh();
        }
        function Oy(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Es(sr);
        }
        function ky(e, t) {
            if (e === "click") return Es(t);
        }
        function jy(e, t) {
            if (e === "input" || e === "change") return Es(t);
        }
        function Uy(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Dt = typeof Object.is == "function" ? Object.is : Uy;
        function lr(e, t) {
            if (Dt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var a = Object.keys(e), s = Object.keys(t);
            if (a.length !== s.length) return !1;
            for(s = 0; s < a.length; s++){
                var o = a[s];
                if (!Xi.call(t, o) || !Dt(e[o], t[o])) return !1;
            }
            return !0;
        }
        function zh(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Mh(e, t) {
            var a = zh(e);
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
                a = zh(a);
            }
        }
        function Hh(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function qh(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = gs(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var a = typeof t.contentWindow.location.href == "string";
                } catch  {
                    a = !1;
                }
                if (a) e = t.contentWindow;
                else break;
                t = gs(e.document);
            }
            return t;
        }
        function bo(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var Ny = En && "documentMode" in document && 11 >= document.documentMode, ei = null, wo = null, or = null, _o = !1;
        function $h(e, t, a) {
            var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            _o || ei == null || ei !== gs(s) || (s = ei, "selectionStart" in s && bo(s) ? s = {
                start: s.selectionStart,
                end: s.selectionEnd
            } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
                anchorNode: s.anchorNode,
                anchorOffset: s.anchorOffset,
                focusNode: s.focusNode,
                focusOffset: s.focusOffset
            }), or && lr(or, s) || (or = s, s = hl(wo, "onSelect"), 0 < s.length && (t = new _s("onSelect", "select", null, t, a), e.push({
                event: t,
                listeners: s
            }), t.target = ei)));
        }
        function _a(e, t) {
            var a = {};
            return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
        }
        var ti = {
            animationend: _a("Animation", "AnimationEnd"),
            animationiteration: _a("Animation", "AnimationIteration"),
            animationstart: _a("Animation", "AnimationStart"),
            transitionrun: _a("Transition", "TransitionRun"),
            transitionstart: _a("Transition", "TransitionStart"),
            transitioncancel: _a("Transition", "TransitionCancel"),
            transitionend: _a("Transition", "TransitionEnd")
        }, So = {}, Ih = {};
        En && (Ih = document.createElement("div").style, "AnimationEvent" in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), "TransitionEvent" in window || delete ti.transitionend.transition);
        function Sa(e) {
            if (So[e]) return So[e];
            if (!ti[e]) return e;
            var t = ti[e], a;
            for(a in t)if (t.hasOwnProperty(a) && a in Ih) return So[e] = t[a];
            return e;
        }
        var Ph = Sa("animationend"), Gh = Sa("animationiteration"), Vh = Sa("animationstart"), Dy = Sa("transitionrun"), By = Sa("transitionstart"), Ly = Sa("transitioncancel"), Kh = Sa("transitionend"), Yh = new Map, Eo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Eo.push("scrollEnd");
        function an(e, t) {
            Yh.set(e, t), ba(t, [
                e
            ]);
        }
        var Ts = typeof reportError == "function" ? reportError : function(e) {
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
        }, Xt = [], ni = 0, To = 0;
        function As() {
            for(var e = ni, t = To = ni = 0; t < e;){
                var a = Xt[t];
                Xt[t++] = null;
                var s = Xt[t];
                Xt[t++] = null;
                var o = Xt[t];
                Xt[t++] = null;
                var h = Xt[t];
                if (Xt[t++] = null, s !== null && o !== null) {
                    var y = s.pending;
                    y === null ? o.next = o : (o.next = y.next, y.next = o), s.pending = o;
                }
                h !== 0 && Xh(a, o, h);
            }
        }
        function xs(e, t, a, s) {
            Xt[ni++] = e, Xt[ni++] = t, Xt[ni++] = a, Xt[ni++] = s, To |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s);
        }
        function Ao(e, t, a, s) {
            return xs(e, t, a, s), Rs(e);
        }
        function Ea(e, t) {
            return xs(e, null, null, t), Rs(e);
        }
        function Xh(e, t, a) {
            e.lanes |= a;
            var s = e.alternate;
            s !== null && (s.lanes |= a);
            for(var o = !1, h = e.return; h !== null;)h.childLanes |= a, s = h.alternate, s !== null && (s.childLanes |= a), h.tag === 22 && (e = h.stateNode, e === null || e._visibility & 1 || (o = !0)), e = h, h = h.return;
            return e.tag === 3 ? (h = e.stateNode, o && t !== null && (o = 31 - ve(a), e = h.hiddenUpdates, s = e[o], s === null ? e[o] = [
                t
            ] : s.push(t), t.lane = a | 536870912), h) : null;
        }
        function Rs(e) {
            if (50 < kr) throw kr = 0, Du = null, Error(l(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var ai = {};
        function zy(e, t, a, s) {
            this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Bt(e, t, a, s) {
            return new zy(e, t, a, s);
        }
        function xo(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Tn(e, t) {
            var a = e.alternate;
            return a === null ? (a = Bt(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
        }
        function Jh(e, t) {
            e.flags &= 65011714;
            var a = e.alternate;
            return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Cs(e, t, a, s, o, h) {
            var y = 0;
            if (s = e, typeof e == "function") xo(e) && (y = 1);
            else if (typeof e == "string") y = I0(e, a, te.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ke:
                    return e = Bt(31, a, t, o), e.elementType = ke, e.lanes = h, e;
                case B:
                    return Ta(a.children, o, h, t);
                case D:
                    y = 8, o |= 24;
                    break;
                case I:
                    return e = Bt(12, a, t, o | 2), e.elementType = I, e.lanes = h, e;
                case Z:
                    return e = Bt(13, a, t, o), e.elementType = Z, e.lanes = h, e;
                case le:
                    return e = Bt(19, a, t, o), e.elementType = le, e.lanes = h, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case H:
                            y = 10;
                            break e;
                        case K:
                            y = 9;
                            break e;
                        case F:
                            y = 11;
                            break e;
                        case ee:
                            y = 14;
                            break e;
                        case qe:
                            y = 16, s = null;
                            break e;
                    }
                    y = 29, a = Error(l(130, e === null ? "null" : typeof e, "")), s = null;
            }
            return t = Bt(y, a, t, o), t.elementType = e, t.type = s, t.lanes = h, t;
        }
        function Ta(e, t, a, s) {
            return e = Bt(7, e, s, t), e.lanes = a, e;
        }
        function Ro(e, t, a) {
            return e = Bt(6, e, null, t), e.lanes = a, e;
        }
        function Fh(e) {
            var t = Bt(18, null, null, 0);
            return t.stateNode = e, t;
        }
        function Co(e, t, a) {
            return t = Bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Wh = new WeakMap;
        function Jt(e, t) {
            if (typeof e == "object" && e !== null) {
                var a = Wh.get(e);
                return a !== void 0 ? a : (t = {
                    value: e,
                    source: t,
                    stack: os(t)
                }, Wh.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: os(t)
            };
        }
        var ii = [], ri = 0, Os = null, ur = 0, Ft = [], Wt = 0, Xn = null, fn = 1, dn = "";
        function An(e, t) {
            ii[ri++] = ur, ii[ri++] = Os, Os = e, ur = t;
        }
        function Qh(e, t, a) {
            Ft[Wt++] = fn, Ft[Wt++] = dn, Ft[Wt++] = Xn, Xn = e;
            var s = fn;
            e = dn;
            var o = 32 - ve(s) - 1;
            s &= ~(1 << o), a += 1;
            var h = 32 - ve(t) + o;
            if (30 < h) {
                var y = o - o % 5;
                h = (s & (1 << y) - 1).toString(32), s >>= y, o -= y, fn = 1 << 32 - ve(t) + o | a << o | s, dn = h + e;
            } else fn = 1 << h | a << o | s, dn = e;
        }
        function Oo(e) {
            e.return !== null && (An(e, 1), Qh(e, 1, 0));
        }
        function ko(e) {
            for(; e === Os;)Os = ii[--ri], ii[ri] = null, ur = ii[--ri], ii[ri] = null;
            for(; e === Xn;)Xn = Ft[--Wt], Ft[Wt] = null, dn = Ft[--Wt], Ft[Wt] = null, fn = Ft[--Wt], Ft[Wt] = null;
        }
        function Zh(e, t) {
            Ft[Wt++] = fn, Ft[Wt++] = dn, Ft[Wt++] = Xn, fn = t.id, dn = t.overflow, Xn = e;
        }
        var mt = null, Ve = null, Ee = !1, Jn = null, Qt = !1, jo = Error(l(519));
        function Fn(e) {
            var t = Error(l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw cr(Jt(t, e)), jo;
        }
        function ef(e) {
            var t = e.stateNode, a = e.type, s = e.memoizedProps;
            switch(t[pt] = e, t[At] = s, a){
                case "dialog":
                    we("cancel", t), we("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    we("load", t);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < Ur.length; a++)we(Ur[a], t);
                    break;
                case "source":
                    we("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    we("error", t), we("load", t);
                    break;
                case "details":
                    we("toggle", t);
                    break;
                case "input":
                    we("invalid", t), dh(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                    break;
                case "select":
                    we("invalid", t);
                    break;
                case "textarea":
                    we("invalid", t), mh(t, s.value, s.defaultValue, s.children);
            }
            a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || vp(t.textContent, a) ? (s.popover != null && (we("beforetoggle", t), we("toggle", t)), s.onScroll != null && we("scroll", t), s.onScrollEnd != null && we("scrollend", t), s.onClick != null && (t.onclick = Sn), t = !0) : t = !1, t || Fn(e, !0);
        }
        function tf(e) {
            for(mt = e.return; mt;)switch(mt.tag){
                case 5:
                case 31:
                case 13:
                    Qt = !1;
                    return;
                case 27:
                case 3:
                    Qt = !0;
                    return;
                default:
                    mt = mt.return;
            }
        }
        function si(e) {
            if (e !== mt) return !1;
            if (!Ee) return tf(e), Ee = !0, !1;
            var t = e.tag, a;
            if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ju(e.type, e.memoizedProps)), a = !a), a && Ve && Fn(e), tf(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                Ve = Rp(e);
            } else if (t === 31) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
                Ve = Rp(e);
            } else t === 27 ? (t = Ve, ca(e.type) ? (e = ec, ec = null, Ve = e) : Ve = t) : Ve = mt ? en(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Aa() {
            Ve = mt = null, Ee = !1;
        }
        function Uo() {
            var e = Jn;
            return e !== null && (kt === null ? kt = e : kt.push.apply(kt, e), Jn = null), e;
        }
        function cr(e) {
            Jn === null ? Jn = [
                e
            ] : Jn.push(e);
        }
        var No = C(null), xa = null, xn = null;
        function Wn(e, t, a) {
            Q(No, t._currentValue), t._currentValue = a;
        }
        function Rn(e) {
            e._currentValue = No.current, G(No);
        }
        function Do(e, t, a) {
            for(; e !== null;){
                var s = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
                e = e.return;
            }
        }
        function Bo(e, t, a, s) {
            var o = e.child;
            for(o !== null && (o.return = e); o !== null;){
                var h = o.dependencies;
                if (h !== null) {
                    var y = o.child;
                    h = h.firstContext;
                    e: for(; h !== null;){
                        var w = h;
                        h = o;
                        for(var R = 0; R < t.length; R++)if (w.context === t[R]) {
                            h.lanes |= a, w = h.alternate, w !== null && (w.lanes |= a), Do(h.return, a, e), s || (y = null);
                            break e;
                        }
                        h = w.next;
                    }
                } else if (o.tag === 18) {
                    if (y = o.return, y === null) throw Error(l(341));
                    y.lanes |= a, h = y.alternate, h !== null && (h.lanes |= a), Do(y, a, e), y = null;
                } else y = o.child;
                if (y !== null) y.return = o;
                else for(y = o; y !== null;){
                    if (y === e) {
                        y = null;
                        break;
                    }
                    if (o = y.sibling, o !== null) {
                        o.return = y.return, y = o;
                        break;
                    }
                    y = y.return;
                }
                o = y;
            }
        }
        function li(e, t, a, s) {
            e = null;
            for(var o = t, h = !1; o !== null;){
                if (!h) {
                    if ((o.flags & 524288) !== 0) h = !0;
                    else if ((o.flags & 262144) !== 0) break;
                }
                if (o.tag === 10) {
                    var y = o.alternate;
                    if (y === null) throw Error(l(387));
                    if (y = y.memoizedProps, y !== null) {
                        var w = o.type;
                        Dt(o.pendingProps.value, y.value) || (e !== null ? e.push(w) : e = [
                            w
                        ]);
                    }
                } else if (o === Te.current) {
                    if (y = o.alternate, y === null) throw Error(l(387));
                    y.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(zr) : e = [
                        zr
                    ]);
                }
                o = o.return;
            }
            e !== null && Bo(t, e, a, s), t.flags |= 262144;
        }
        function ks(e) {
            for(e = e.firstContext; e !== null;){
                if (!Dt(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Ra(e) {
            xa = e, xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function gt(e) {
            return nf(xa, e);
        }
        function js(e, t) {
            return xa === null && Ra(e), nf(e, t);
        }
        function nf(e, t) {
            var a = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, xn === null) {
                if (e === null) throw Error(l(308));
                xn = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else xn = xn.next = t;
            return a;
        }
        var My = typeof AbortController < "u" ? AbortController : function() {
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
        }, Hy = i.unstable_scheduleCallback, qy = i.unstable_NormalPriority, it = {
            $$typeof: H,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Lo() {
            return {
                controller: new My,
                data: new Map,
                refCount: 0
            };
        }
        function hr(e) {
            e.refCount--, e.refCount === 0 && Hy(qy, function() {
                e.controller.abort();
            });
        }
        var fr = null, zo = 0, oi = 0, ui = null;
        function $y(e, t) {
            if (fr === null) {
                var a = fr = [];
                zo = 0, oi = qu(), ui = {
                    status: "pending",
                    value: void 0,
                    then: function(s) {
                        a.push(s);
                    }
                };
            }
            return zo++, t.then(af, af), t;
        }
        function af() {
            if (--zo === 0 && fr !== null) {
                ui !== null && (ui.status = "fulfilled");
                var e = fr;
                fr = null, oi = 0, ui = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function Iy(e, t) {
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
        var rf = P.S;
        P.S = function(e, t) {
            Id = St(), typeof t == "object" && t !== null && typeof t.then == "function" && $y(e, t), rf !== null && rf(e, t);
        };
        var Ca = C(null);
        function Mo() {
            var e = Ca.current;
            return e !== null ? e : $e.pooledCache;
        }
        function Us(e, t) {
            t === null ? Q(Ca, Ca.current) : Q(Ca, t.pool);
        }
        function sf() {
            var e = Mo();
            return e === null ? null : {
                parent: it._currentValue,
                pool: e
            };
        }
        var ci = Error(l(460)), Ho = Error(l(474)), Ns = Error(l(542)), Ds = {
            then: function() {}
        };
        function lf(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function of(e, t, a) {
            switch(a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Sn, Sn), t = a), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, cf(e), e;
                default:
                    if (typeof t.status == "string") t.then(Sn, Sn);
                    else {
                        if (e = $e, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
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
                            throw e = t.reason, cf(e), e;
                    }
                    throw ka = t, ci;
            }
        }
        function Oa(e) {
            try {
                var t = e._init;
                return t(e._payload);
            } catch (a) {
                throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ka = a, ci) : a;
            }
        }
        var ka = null;
        function uf() {
            if (ka === null) throw Error(l(459));
            var e = ka;
            return ka = null, e;
        }
        function cf(e) {
            if (e === ci || e === Ns) throw Error(l(483));
        }
        var hi = null, dr = 0;
        function Bs(e) {
            var t = dr;
            return dr += 1, hi === null && (hi = []), of(hi, e, t);
        }
        function pr(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Ls(e, t) {
            throw t.$$typeof === x ? Error(l(525)) : (e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function hf(e) {
            function t(N, O) {
                if (e) {
                    var L = N.deletions;
                    L === null ? (N.deletions = [
                        O
                    ], N.flags |= 16) : L.push(O);
                }
            }
            function a(N, O) {
                if (!e) return null;
                for(; O !== null;)t(N, O), O = O.sibling;
                return null;
            }
            function s(N) {
                for(var O = new Map; N !== null;)N.key !== null ? O.set(N.key, N) : O.set(N.index, N), N = N.sibling;
                return O;
            }
            function o(N, O) {
                return N = Tn(N, O), N.index = 0, N.sibling = null, N;
            }
            function h(N, O, L) {
                return N.index = L, e ? (L = N.alternate, L !== null ? (L = L.index, L < O ? (N.flags |= 67108866, O) : L) : (N.flags |= 67108866, O)) : (N.flags |= 1048576, O);
            }
            function y(N) {
                return e && N.alternate === null && (N.flags |= 67108866), N;
            }
            function w(N, O, L, X) {
                return O === null || O.tag !== 6 ? (O = Ro(L, N.mode, X), O.return = N, O) : (O = o(O, L), O.return = N, O);
            }
            function R(N, O, L, X) {
                var re = L.type;
                return re === B ? V(N, O, L.props.children, X, L.key) : O !== null && (O.elementType === re || typeof re == "object" && re !== null && re.$$typeof === qe && Oa(re) === O.type) ? (O = o(O, L.props), pr(O, L), O.return = N, O) : (O = Cs(L.type, L.key, L.props, null, N.mode, X), pr(O, L), O.return = N, O);
            }
            function z(N, O, L, X) {
                return O === null || O.tag !== 4 || O.stateNode.containerInfo !== L.containerInfo || O.stateNode.implementation !== L.implementation ? (O = Co(L, N.mode, X), O.return = N, O) : (O = o(O, L.children || []), O.return = N, O);
            }
            function V(N, O, L, X, re) {
                return O === null || O.tag !== 7 ? (O = Ta(L, N.mode, X, re), O.return = N, O) : (O = o(O, L), O.return = N, O);
            }
            function J(N, O, L) {
                if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return O = Ro("" + O, N.mode, L), O.return = N, O;
                if (typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case A:
                            return L = Cs(O.type, O.key, O.props, null, N.mode, L), pr(L, O), L.return = N, L;
                        case U:
                            return O = Co(O, N.mode, L), O.return = N, O;
                        case qe:
                            return O = Oa(O), J(N, O, L);
                    }
                    if (je(O) || tt(O)) return O = Ta(O, N.mode, L, null), O.return = N, O;
                    if (typeof O.then == "function") return J(N, Bs(O), L);
                    if (O.$$typeof === H) return J(N, js(N, O), L);
                    Ls(N, O);
                }
                return null;
            }
            function M(N, O, L, X) {
                var re = O !== null ? O.key : null;
                if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return re !== null ? null : w(N, O, "" + L, X);
                if (typeof L == "object" && L !== null) {
                    switch(L.$$typeof){
                        case A:
                            return L.key === re ? R(N, O, L, X) : null;
                        case U:
                            return L.key === re ? z(N, O, L, X) : null;
                        case qe:
                            return L = Oa(L), M(N, O, L, X);
                    }
                    if (je(L) || tt(L)) return re !== null ? null : V(N, O, L, X, null);
                    if (typeof L.then == "function") return M(N, O, Bs(L), X);
                    if (L.$$typeof === H) return M(N, O, js(N, L), X);
                    Ls(N, L);
                }
                return null;
            }
            function $(N, O, L, X, re) {
                if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return N = N.get(L) || null, w(O, N, "" + X, re);
                if (typeof X == "object" && X !== null) {
                    switch(X.$$typeof){
                        case A:
                            return N = N.get(X.key === null ? L : X.key) || null, R(O, N, X, re);
                        case U:
                            return N = N.get(X.key === null ? L : X.key) || null, z(O, N, X, re);
                        case qe:
                            return X = Oa(X), $(N, O, L, X, re);
                    }
                    if (je(X) || tt(X)) return N = N.get(L) || null, V(O, N, X, re, null);
                    if (typeof X.then == "function") return $(N, O, L, Bs(X), re);
                    if (X.$$typeof === H) return $(N, O, L, js(O, X), re);
                    Ls(O, X);
                }
                return null;
            }
            function ne(N, O, L, X) {
                for(var re = null, xe = null, ie = O, ge = O = 0, Se = null; ie !== null && ge < L.length; ge++){
                    ie.index > ge ? (Se = ie, ie = null) : Se = ie.sibling;
                    var Re = M(N, ie, L[ge], X);
                    if (Re === null) {
                        ie === null && (ie = Se);
                        break;
                    }
                    e && ie && Re.alternate === null && t(N, ie), O = h(Re, O, ge), xe === null ? re = Re : xe.sibling = Re, xe = Re, ie = Se;
                }
                if (ge === L.length) return a(N, ie), Ee && An(N, ge), re;
                if (ie === null) {
                    for(; ge < L.length; ge++)ie = J(N, L[ge], X), ie !== null && (O = h(ie, O, ge), xe === null ? re = ie : xe.sibling = ie, xe = ie);
                    return Ee && An(N, ge), re;
                }
                for(ie = s(ie); ge < L.length; ge++)Se = $(ie, N, ge, L[ge], X), Se !== null && (e && Se.alternate !== null && ie.delete(Se.key === null ? ge : Se.key), O = h(Se, O, ge), xe === null ? re = Se : xe.sibling = Se, xe = Se);
                return e && ie.forEach(function(ma) {
                    return t(N, ma);
                }), Ee && An(N, ge), re;
            }
            function ce(N, O, L, X) {
                if (L == null) throw Error(l(151));
                for(var re = null, xe = null, ie = O, ge = O = 0, Se = null, Re = L.next(); ie !== null && !Re.done; ge++, Re = L.next()){
                    ie.index > ge ? (Se = ie, ie = null) : Se = ie.sibling;
                    var ma = M(N, ie, Re.value, X);
                    if (ma === null) {
                        ie === null && (ie = Se);
                        break;
                    }
                    e && ie && ma.alternate === null && t(N, ie), O = h(ma, O, ge), xe === null ? re = ma : xe.sibling = ma, xe = ma, ie = Se;
                }
                if (Re.done) return a(N, ie), Ee && An(N, ge), re;
                if (ie === null) {
                    for(; !Re.done; ge++, Re = L.next())Re = J(N, Re.value, X), Re !== null && (O = h(Re, O, ge), xe === null ? re = Re : xe.sibling = Re, xe = Re);
                    return Ee && An(N, ge), re;
                }
                for(ie = s(ie); !Re.done; ge++, Re = L.next())Re = $(ie, N, ge, Re.value, X), Re !== null && (e && Re.alternate !== null && ie.delete(Re.key === null ? ge : Re.key), O = h(Re, O, ge), xe === null ? re = Re : xe.sibling = Re, xe = Re);
                return e && ie.forEach(function(Z0) {
                    return t(N, Z0);
                }), Ee && An(N, ge), re;
            }
            function He(N, O, L, X) {
                if (typeof L == "object" && L !== null && L.type === B && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                    switch(L.$$typeof){
                        case A:
                            e: {
                                for(var re = L.key; O !== null;){
                                    if (O.key === re) {
                                        if (re = L.type, re === B) {
                                            if (O.tag === 7) {
                                                a(N, O.sibling), X = o(O, L.props.children), X.return = N, N = X;
                                                break e;
                                            }
                                        } else if (O.elementType === re || typeof re == "object" && re !== null && re.$$typeof === qe && Oa(re) === O.type) {
                                            a(N, O.sibling), X = o(O, L.props), pr(X, L), X.return = N, N = X;
                                            break e;
                                        }
                                        a(N, O);
                                        break;
                                    } else t(N, O);
                                    O = O.sibling;
                                }
                                L.type === B ? (X = Ta(L.props.children, N.mode, X, L.key), X.return = N, N = X) : (X = Cs(L.type, L.key, L.props, null, N.mode, X), pr(X, L), X.return = N, N = X);
                            }
                            return y(N);
                        case U:
                            e: {
                                for(re = L.key; O !== null;){
                                    if (O.key === re) if (O.tag === 4 && O.stateNode.containerInfo === L.containerInfo && O.stateNode.implementation === L.implementation) {
                                        a(N, O.sibling), X = o(O, L.children || []), X.return = N, N = X;
                                        break e;
                                    } else {
                                        a(N, O);
                                        break;
                                    }
                                    else t(N, O);
                                    O = O.sibling;
                                }
                                X = Co(L, N.mode, X), X.return = N, N = X;
                            }
                            return y(N);
                        case qe:
                            return L = Oa(L), He(N, O, L, X);
                    }
                    if (je(L)) return ne(N, O, L, X);
                    if (tt(L)) {
                        if (re = tt(L), typeof re != "function") throw Error(l(150));
                        return L = re.call(L), ce(N, O, L, X);
                    }
                    if (typeof L.then == "function") return He(N, O, Bs(L), X);
                    if (L.$$typeof === H) return He(N, O, js(N, L), X);
                    Ls(N, L);
                }
                return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, O !== null && O.tag === 6 ? (a(N, O.sibling), X = o(O, L), X.return = N, N = X) : (a(N, O), X = Ro(L, N.mode, X), X.return = N, N = X), y(N)) : a(N, O);
            }
            return function(N, O, L, X) {
                try {
                    dr = 0;
                    var re = He(N, O, L, X);
                    return hi = null, re;
                } catch (ie) {
                    if (ie === ci || ie === Ns) throw ie;
                    var xe = Bt(29, ie, null, N.mode);
                    return xe.lanes = X, xe.return = N, xe;
                }
            };
        }
        var ja = hf(!0), ff = hf(!1), Qn = !1;
        function qo(e) {
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
        function $o(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function Zn(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function ea(e, t, a) {
            var s = e.updateQueue;
            if (s === null) return null;
            if (s = s.shared, (Oe & 2) !== 0) {
                var o = s.pending;
                return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, t = Rs(e), Xh(e, null, a), t;
            }
            return xs(e, s, t, a), Rs(e);
        }
        function mr(e, t, a) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, nh(e, a);
            }
        }
        function Io(e, t) {
            var a = e.updateQueue, s = e.alternate;
            if (s !== null && (s = s.updateQueue, a === s)) {
                var o = null, h = null;
                if (a = a.firstBaseUpdate, a !== null) {
                    do {
                        var y = {
                            lane: a.lane,
                            tag: a.tag,
                            payload: a.payload,
                            callback: null,
                            next: null
                        };
                        h === null ? o = h = y : h = h.next = y, a = a.next;
                    }while (a !== null);
                    h === null ? o = h = t : h = h.next = t;
                } else o = h = t;
                a = {
                    baseState: s.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: h,
                    shared: s.shared,
                    callbacks: s.callbacks
                }, e.updateQueue = a;
                return;
            }
            e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
        }
        var Po = !1;
        function gr() {
            if (Po) {
                var e = ui;
                if (e !== null) throw e;
            }
        }
        function yr(e, t, a, s) {
            Po = !1;
            var o = e.updateQueue;
            Qn = !1;
            var h = o.firstBaseUpdate, y = o.lastBaseUpdate, w = o.shared.pending;
            if (w !== null) {
                o.shared.pending = null;
                var R = w, z = R.next;
                R.next = null, y === null ? h = z : y.next = z, y = R;
                var V = e.alternate;
                V !== null && (V = V.updateQueue, w = V.lastBaseUpdate, w !== y && (w === null ? V.firstBaseUpdate = z : w.next = z, V.lastBaseUpdate = R));
            }
            if (h !== null) {
                var J = o.baseState;
                y = 0, V = z = R = null, w = h;
                do {
                    var M = w.lane & -536870913, $ = M !== w.lane;
                    if ($ ? (_e & M) === M : (s & M) === M) {
                        M !== 0 && M === oi && (Po = !0), V !== null && (V = V.next = {
                            lane: 0,
                            tag: w.tag,
                            payload: w.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ne = e, ce = w;
                            M = t;
                            var He = a;
                            switch(ce.tag){
                                case 1:
                                    if (ne = ce.payload, typeof ne == "function") {
                                        J = ne.call(He, J, M);
                                        break e;
                                    }
                                    J = ne;
                                    break e;
                                case 3:
                                    ne.flags = ne.flags & -65537 | 128;
                                case 0:
                                    if (ne = ce.payload, M = typeof ne == "function" ? ne.call(He, J, M) : ne, M == null) break e;
                                    J = b({}, J, M);
                                    break e;
                                case 2:
                                    Qn = !0;
                            }
                        }
                        M = w.callback, M !== null && (e.flags |= 64, $ && (e.flags |= 8192), $ = o.callbacks, $ === null ? o.callbacks = [
                            M
                        ] : $.push(M));
                    } else $ = {
                        lane: M,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    }, V === null ? (z = V = $, R = J) : V = V.next = $, y |= M;
                    if (w = w.next, w === null) {
                        if (w = o.shared.pending, w === null) break;
                        $ = w, w = $.next, $.next = null, o.lastBaseUpdate = $, o.shared.pending = null;
                    }
                }while (!0);
                V === null && (R = J), o.baseState = R, o.firstBaseUpdate = z, o.lastBaseUpdate = V, h === null && (o.shared.lanes = 0), ra |= y, e.lanes = y, e.memoizedState = J;
            }
        }
        function df(e, t) {
            if (typeof e != "function") throw Error(l(191, e));
            e.call(t);
        }
        function pf(e, t) {
            var a = e.callbacks;
            if (a !== null) for(e.callbacks = null, e = 0; e < a.length; e++)df(a[e], t);
        }
        var fi = C(null), zs = C(0);
        function mf(e, t) {
            e = Ln, Q(zs, e), Q(fi, t), Ln = e | t.baseLanes;
        }
        function Go() {
            Q(zs, Ln), Q(fi, fi.current);
        }
        function Vo() {
            Ln = zs.current, G(fi), G(zs);
        }
        var Lt = C(null), Zt = null;
        function ta(e) {
            var t = e.alternate;
            Q(nt, nt.current & 1), Q(Lt, e), Zt === null && (t === null || fi.current !== null || t.memoizedState !== null) && (Zt = e);
        }
        function Ko(e) {
            Q(nt, nt.current), Q(Lt, e), Zt === null && (Zt = e);
        }
        function gf(e) {
            e.tag === 22 ? (Q(nt, nt.current), Q(Lt, e), Zt === null && (Zt = e)) : na();
        }
        function na() {
            Q(nt, nt.current), Q(Lt, Lt.current);
        }
        function zt(e) {
            G(Lt), Zt === e && (Zt = null), G(nt);
        }
        var nt = C(0);
        function Ms(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var a = t.memoizedState;
                    if (a !== null && (a = a.dehydrated, a === null || Qu(a) || Zu(a))) return t;
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
        var Cn = 0, me = null, ze = null, rt = null, Hs = !1, di = !1, Ua = !1, qs = 0, vr = 0, pi = null, Py = 0;
        function We() {
            throw Error(l(321));
        }
        function Yo(e, t) {
            if (t === null) return !1;
            for(var a = 0; a < t.length && a < e.length; a++)if (!Dt(e[a], t[a])) return !1;
            return !0;
        }
        function Xo(e, t, a, s, o, h) {
            return Cn = h, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Zf : uu, Ua = !1, h = a(s, o), Ua = !1, di && (h = vf(t, a, s, o)), yf(e), h;
        }
        function yf(e) {
            P.H = _r;
            var t = ze !== null && ze.next !== null;
            if (Cn = 0, rt = ze = me = null, Hs = !1, vr = 0, pi = null, t) throw Error(l(300));
            e === null || st || (e = e.dependencies, e !== null && ks(e) && (st = !0));
        }
        function vf(e, t, a, s) {
            me = e;
            var o = 0;
            do {
                if (di && (pi = null), vr = 0, di = !1, 25 <= o) throw Error(l(301));
                if (o += 1, rt = ze = null, e.updateQueue != null) {
                    var h = e.updateQueue;
                    h.lastEffect = null, h.events = null, h.stores = null, h.memoCache != null && (h.memoCache.index = 0);
                }
                P.H = ed, h = t(a, s);
            }while (di);
            return h;
        }
        function Gy() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? br(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (me.flags |= 1024), t;
        }
        function Jo() {
            var e = qs !== 0;
            return qs = 0, e;
        }
        function Fo(e, t, a) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
        }
        function Wo(e) {
            if (Hs) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Hs = !1;
            }
            Cn = 0, rt = ze = me = null, di = !1, vr = qs = 0, pi = null;
        }
        function Et() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return rt === null ? me.memoizedState = rt = e : rt = rt.next = e, rt;
        }
        function at() {
            if (ze === null) {
                var e = me.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = ze.next;
            var t = rt === null ? me.memoizedState : rt.next;
            if (t !== null) rt = t, ze = e;
            else {
                if (e === null) throw me.alternate === null ? Error(l(467)) : Error(l(310));
                ze = e, e = {
                    memoizedState: ze.memoizedState,
                    baseState: ze.baseState,
                    baseQueue: ze.baseQueue,
                    queue: ze.queue,
                    next: null
                }, rt === null ? me.memoizedState = rt = e : rt = rt.next = e;
            }
            return rt;
        }
        function $s() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function br(e) {
            var t = vr;
            return vr += 1, pi === null && (pi = []), e = of(pi, e, t), t = me, (rt === null ? t.memoizedState : rt.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Zf : uu), e;
        }
        function Is(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return br(e);
                if (e.$$typeof === H) return gt(e);
            }
            throw Error(l(438, String(e)));
        }
        function Qo(e) {
            var t = null, a = me.updateQueue;
            if (a !== null && (t = a.memoCache), t == null) {
                var s = me.alternate;
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
            }), a === null && (a = $s(), me.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for(a = t.data[t.index] = Array(e), s = 0; s < e; s++)a[s] = Tt;
            return t.index++, a;
        }
        function On(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Ps(e) {
            var t = at();
            return Zo(t, ze, e);
        }
        function Zo(e, t, a) {
            var s = e.queue;
            if (s === null) throw Error(l(311));
            s.lastRenderedReducer = a;
            var o = e.baseQueue, h = s.pending;
            if (h !== null) {
                if (o !== null) {
                    var y = o.next;
                    o.next = h.next, h.next = y;
                }
                t.baseQueue = o = h, s.pending = null;
            }
            if (h = e.baseState, o === null) e.memoizedState = h;
            else {
                t = o.next;
                var w = y = null, R = null, z = t, V = !1;
                do {
                    var J = z.lane & -536870913;
                    if (J !== z.lane ? (_e & J) === J : (Cn & J) === J) {
                        var M = z.revertLane;
                        if (M === 0) R !== null && (R = R.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }), J === oi && (V = !0);
                        else if ((Cn & M) === M) {
                            z = z.next, M === oi && (V = !0);
                            continue;
                        } else J = {
                            lane: 0,
                            revertLane: z.revertLane,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }, R === null ? (w = R = J, y = h) : R = R.next = J, me.lanes |= M, ra |= M;
                        J = z.action, Ua && a(h, J), h = z.hasEagerState ? z.eagerState : a(h, J);
                    } else M = {
                        lane: J,
                        revertLane: z.revertLane,
                        gesture: z.gesture,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }, R === null ? (w = R = M, y = h) : R = R.next = M, me.lanes |= J, ra |= J;
                    z = z.next;
                }while (z !== null && z !== t);
                if (R === null ? y = h : R.next = w, !Dt(h, e.memoizedState) && (st = !0, V && (a = ui, a !== null))) throw a;
                e.memoizedState = h, e.baseState = y, e.baseQueue = R, s.lastRenderedState = h;
            }
            return o === null && (s.lanes = 0), [
                e.memoizedState,
                s.dispatch
            ];
        }
        function eu(e) {
            var t = at(), a = t.queue;
            if (a === null) throw Error(l(311));
            a.lastRenderedReducer = e;
            var s = a.dispatch, o = a.pending, h = t.memoizedState;
            if (o !== null) {
                a.pending = null;
                var y = o = o.next;
                do h = e(h, y.action), y = y.next;
                while (y !== o);
                Dt(h, t.memoizedState) || (st = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), a.lastRenderedState = h;
            }
            return [
                h,
                s
            ];
        }
        function bf(e, t, a) {
            var s = me, o = at(), h = Ee;
            if (h) {
                if (a === void 0) throw Error(l(407));
                a = a();
            } else a = t();
            var y = !Dt((ze || o).memoizedState, a);
            if (y && (o.memoizedState = a, st = !0), o = o.queue, au(Sf.bind(null, s, o, e), [
                e
            ]), o.getSnapshot !== t || y || rt !== null && rt.memoizedState.tag & 1) {
                if (s.flags |= 2048, mi(9, {
                    destroy: void 0
                }, _f.bind(null, s, o, a, t), null), $e === null) throw Error(l(349));
                h || (Cn & 127) !== 0 || wf(s, t, a);
            }
            return a;
        }
        function wf(e, t, a) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: a
            }, t = me.updateQueue, t === null ? (t = $s(), me.updateQueue = t, t.stores = [
                e
            ]) : (a = t.stores, a === null ? t.stores = [
                e
            ] : a.push(e));
        }
        function _f(e, t, a, s) {
            t.value = a, t.getSnapshot = s, Ef(t) && Tf(e);
        }
        function Sf(e, t, a) {
            return a(function() {
                Ef(t) && Tf(e);
            });
        }
        function Ef(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var a = t();
                return !Dt(e, a);
            } catch  {
                return !0;
            }
        }
        function Tf(e) {
            var t = Ea(e, 2);
            t !== null && jt(t, e, 2);
        }
        function tu(e) {
            var t = Et();
            if (typeof e == "function") {
                var a = e;
                if (e = a(), Ua) {
                    Ce(!0);
                    try {
                        a();
                    } finally{
                        Ce(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: On,
                lastRenderedState: e
            }, t;
        }
        function Af(e, t, a, s) {
            return e.baseState = a, Zo(e, ze, typeof s == "function" ? s : On);
        }
        function Vy(e, t, a, s, o) {
            if (Ks(e)) throw Error(l(485));
            if (e = t.action, e !== null) {
                var h = {
                    payload: o,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(y) {
                        h.listeners.push(y);
                    }
                };
                P.T !== null ? a(!0) : h.isTransition = !1, s(h), a = t.pending, a === null ? (h.next = t.pending = h, xf(t, h)) : (h.next = a.next, t.pending = a.next = h);
            }
        }
        function xf(e, t) {
            var a = t.action, s = t.payload, o = e.state;
            if (t.isTransition) {
                var h = P.T, y = {};
                P.T = y;
                try {
                    var w = a(o, s), R = P.S;
                    R !== null && R(y, w), Rf(e, t, w);
                } catch (z) {
                    nu(e, t, z);
                } finally{
                    h !== null && y.types !== null && (h.types = y.types), P.T = h;
                }
            } else try {
                h = a(o, s), Rf(e, t, h);
            } catch (z) {
                nu(e, t, z);
            }
        }
        function Rf(e, t, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
                Cf(e, t, s);
            }, function(s) {
                return nu(e, t, s);
            }) : Cf(e, t, a);
        }
        function Cf(e, t, a) {
            t.status = "fulfilled", t.value = a, Of(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, xf(e, a)));
        }
        function nu(e, t, a) {
            var s = e.pending;
            if (e.pending = null, s !== null) {
                s = s.next;
                do t.status = "rejected", t.reason = a, Of(t), t = t.next;
                while (t !== s);
            }
            e.action = null;
        }
        function Of(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function kf(e, t) {
            return t;
        }
        function jf(e, t) {
            if (Ee) {
                var a = $e.formState;
                if (a !== null) {
                    e: {
                        var s = me;
                        if (Ee) {
                            if (Ve) {
                                t: {
                                    for(var o = Ve, h = Qt; o.nodeType !== 8;){
                                        if (!h) {
                                            o = null;
                                            break t;
                                        }
                                        if (o = en(o.nextSibling), o === null) {
                                            o = null;
                                            break t;
                                        }
                                    }
                                    h = o.data, o = h === "F!" || h === "F" ? o : null;
                                }
                                if (o) {
                                    Ve = en(o.nextSibling), s = o.data === "F!";
                                    break e;
                                }
                            }
                            Fn(s);
                        }
                        s = !1;
                    }
                    s && (t = a[0]);
                }
            }
            return a = Et(), a.memoizedState = a.baseState = t, s = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: kf,
                lastRenderedState: t
            }, a.queue = s, a = Ff.bind(null, me, s), s.dispatch = a, s = tu(!1), h = ou.bind(null, me, !1, s.queue), s = Et(), o = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, s.queue = o, a = Vy.bind(null, me, o, h, a), o.dispatch = a, s.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function Uf(e) {
            var t = at();
            return Nf(t, ze, e);
        }
        function Nf(e, t, a) {
            if (t = Zo(e, t, kf)[0], e = Ps(On)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var s = br(t);
            } catch (y) {
                throw y === ci ? Ns : y;
            }
            else s = t;
            t = at();
            var o = t.queue, h = o.dispatch;
            return a !== t.memoizedState && (me.flags |= 2048, mi(9, {
                destroy: void 0
            }, Ky.bind(null, o, a), null)), [
                s,
                h,
                e
            ];
        }
        function Ky(e, t) {
            e.action = t;
        }
        function Df(e) {
            var t = at(), a = ze;
            if (a !== null) return Nf(t, a, e);
            at(), t = t.memoizedState, a = at();
            var s = a.queue.dispatch;
            return a.memoizedState = e, [
                t,
                s,
                !1
            ];
        }
        function mi(e, t, a, s) {
            return e = {
                tag: e,
                create: a,
                deps: s,
                inst: t,
                next: null
            }, t = me.updateQueue, t === null && (t = $s(), me.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e;
        }
        function Bf() {
            return at().memoizedState;
        }
        function Gs(e, t, a, s) {
            var o = Et();
            me.flags |= e, o.memoizedState = mi(1 | t, {
                destroy: void 0
            }, a, s === void 0 ? null : s);
        }
        function Vs(e, t, a, s) {
            var o = at();
            s = s === void 0 ? null : s;
            var h = o.memoizedState.inst;
            ze !== null && s !== null && Yo(s, ze.memoizedState.deps) ? o.memoizedState = mi(t, h, a, s) : (me.flags |= e, o.memoizedState = mi(1 | t, h, a, s));
        }
        function Lf(e, t) {
            Gs(8390656, 8, e, t);
        }
        function au(e, t) {
            Vs(2048, 8, e, t);
        }
        function Yy(e) {
            me.flags |= 4;
            var t = me.updateQueue;
            if (t === null) t = $s(), me.updateQueue = t, t.events = [
                e
            ];
            else {
                var a = t.events;
                a === null ? t.events = [
                    e
                ] : a.push(e);
            }
        }
        function zf(e) {
            var t = at().memoizedState;
            return Yy({
                ref: t,
                nextImpl: e
            }), function() {
                if ((Oe & 2) !== 0) throw Error(l(440));
                return t.impl.apply(void 0, arguments);
            };
        }
        function Mf(e, t) {
            return Vs(4, 2, e, t);
        }
        function Hf(e, t) {
            return Vs(4, 4, e, t);
        }
        function qf(e, t) {
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
        function $f(e, t, a) {
            a = a != null ? a.concat([
                e
            ]) : null, Vs(4, 4, qf.bind(null, t, e), a);
        }
        function iu() {}
        function If(e, t) {
            var a = at();
            t = t === void 0 ? null : t;
            var s = a.memoizedState;
            return t !== null && Yo(t, s[1]) ? s[0] : (a.memoizedState = [
                e,
                t
            ], e);
        }
        function Pf(e, t) {
            var a = at();
            t = t === void 0 ? null : t;
            var s = a.memoizedState;
            if (t !== null && Yo(t, s[1])) return s[0];
            if (s = e(), Ua) {
                Ce(!0);
                try {
                    e();
                } finally{
                    Ce(!1);
                }
            }
            return a.memoizedState = [
                s,
                t
            ], s;
        }
        function ru(e, t, a) {
            return a === void 0 || (Cn & 1073741824) !== 0 && (_e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Gd(), me.lanes |= e, ra |= e, a);
        }
        function Gf(e, t, a, s) {
            return Dt(a, t) ? a : fi.current !== null ? (e = ru(e, a, s), Dt(e, t) || (st = !0), e) : (Cn & 42) === 0 || (Cn & 1073741824) !== 0 && (_e & 261930) === 0 ? (st = !0, e.memoizedState = a) : (e = Gd(), me.lanes |= e, ra |= e, t);
        }
        function Vf(e, t, a, s, o) {
            var h = W.p;
            W.p = h !== 0 && 8 > h ? h : 8;
            var y = P.T, w = {};
            P.T = w, ou(e, !1, t, a);
            try {
                var R = o(), z = P.S;
                if (z !== null && z(w, R), R !== null && typeof R == "object" && typeof R.then == "function") {
                    var V = Iy(R, s);
                    wr(e, t, V, qt(e));
                } else wr(e, t, s, qt(e));
            } catch (J) {
                wr(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: J
                }, qt());
            } finally{
                W.p = h, y !== null && w.types !== null && (y.types = w.types), P.T = y;
            }
        }
        function Xy() {}
        function su(e, t, a, s) {
            if (e.tag !== 5) throw Error(l(476));
            var o = Kf(e).queue;
            Vf(e, o, t, he, a === null ? Xy : function() {
                return Yf(e), a(s);
            });
        }
        function Kf(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: he,
                baseState: he,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: On,
                    lastRenderedState: he
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
                    lastRenderedReducer: On,
                    lastRenderedState: a
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Yf(e) {
            var t = Kf(e);
            t.next === null && (t = e.alternate.memoizedState), wr(e, t.next.queue, {}, qt());
        }
        function lu() {
            return gt(zr);
        }
        function Xf() {
            return at().memoizedState;
        }
        function Jf() {
            return at().memoizedState;
        }
        function Jy(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var a = qt();
                        e = Zn(a);
                        var s = ea(t, e, a);
                        s !== null && (jt(s, t, a), mr(s, t, a)), t = {
                            cache: Lo()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Fy(e, t, a) {
            var s = qt();
            a = {
                lane: s,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ks(e) ? Wf(t, a) : (a = Ao(e, t, a, s), a !== null && (jt(a, e, s), Qf(a, t, s)));
        }
        function Ff(e, t, a) {
            var s = qt();
            wr(e, t, a, s);
        }
        function wr(e, t, a, s) {
            var o = {
                lane: s,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Ks(e)) Wf(t, o);
            else {
                var h = e.alternate;
                if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null)) try {
                    var y = t.lastRenderedState, w = h(y, a);
                    if (o.hasEagerState = !0, o.eagerState = w, Dt(w, y)) return xs(e, t, o, 0), $e === null && As(), !1;
                } catch  {}
                if (a = Ao(e, t, o, s), a !== null) return jt(a, e, s), Qf(a, t, s), !0;
            }
            return !1;
        }
        function ou(e, t, a, s) {
            if (s = {
                lane: 2,
                revertLane: qu(),
                gesture: null,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ks(e)) {
                if (t) throw Error(l(479));
            } else t = Ao(e, a, s, 2), t !== null && jt(t, e, 2);
        }
        function Ks(e) {
            var t = e.alternate;
            return e === me || t !== null && t === me;
        }
        function Wf(e, t) {
            di = Hs = !0;
            var a = e.pending;
            a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
        }
        function Qf(e, t, a) {
            if ((a & 4194048) !== 0) {
                var s = t.lanes;
                s &= e.pendingLanes, a |= s, t.lanes = a, nh(e, a);
            }
        }
        var _r = {
            readContext: gt,
            use: Is,
            useCallback: We,
            useContext: We,
            useEffect: We,
            useImperativeHandle: We,
            useLayoutEffect: We,
            useInsertionEffect: We,
            useMemo: We,
            useReducer: We,
            useRef: We,
            useState: We,
            useDebugValue: We,
            useDeferredValue: We,
            useTransition: We,
            useSyncExternalStore: We,
            useId: We,
            useHostTransitionStatus: We,
            useFormState: We,
            useActionState: We,
            useOptimistic: We,
            useMemoCache: We,
            useCacheRefresh: We
        };
        _r.useEffectEvent = We;
        var Zf = {
            readContext: gt,
            use: Is,
            useCallback: function(e, t) {
                return Et().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: gt,
            useEffect: Lf,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([
                    e
                ]) : null, Gs(4194308, 4, qf.bind(null, t, e), a);
            },
            useLayoutEffect: function(e, t) {
                return Gs(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Gs(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var a = Et();
                t = t === void 0 ? null : t;
                var s = e();
                if (Ua) {
                    Ce(!0);
                    try {
                        e();
                    } finally{
                        Ce(!1);
                    }
                }
                return a.memoizedState = [
                    s,
                    t
                ], s;
            },
            useReducer: function(e, t, a) {
                var s = Et();
                if (a !== void 0) {
                    var o = a(t);
                    if (Ua) {
                        Ce(!0);
                        try {
                            a(t);
                        } finally{
                            Ce(!1);
                        }
                    }
                } else o = t;
                return s.memoizedState = s.baseState = o, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: o
                }, s.queue = e, e = e.dispatch = Fy.bind(null, me, e), [
                    s.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = Et();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = tu(e);
                var t = e.queue, a = Ff.bind(null, me, t);
                return t.dispatch = a, [
                    e.memoizedState,
                    a
                ];
            },
            useDebugValue: iu,
            useDeferredValue: function(e, t) {
                var a = Et();
                return ru(a, e, t);
            },
            useTransition: function() {
                var e = tu(!1);
                return e = Vf.bind(null, me, e.queue, !0, !1), Et().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, a) {
                var s = me, o = Et();
                if (Ee) {
                    if (a === void 0) throw Error(l(407));
                    a = a();
                } else {
                    if (a = t(), $e === null) throw Error(l(349));
                    (_e & 127) !== 0 || wf(s, t, a);
                }
                o.memoizedState = a;
                var h = {
                    value: a,
                    getSnapshot: t
                };
                return o.queue = h, Lf(Sf.bind(null, s, h, e), [
                    e
                ]), s.flags |= 2048, mi(9, {
                    destroy: void 0
                }, _f.bind(null, s, h, a, t), null), a;
            },
            useId: function() {
                var e = Et(), t = $e.identifierPrefix;
                if (Ee) {
                    var a = dn, s = fn;
                    a = (s & ~(1 << 32 - ve(s) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = qs++, 0 < a && (t += "H" + a.toString(32)), t += "_";
                } else a = Py++, t = "_" + t + "r_" + a.toString(32) + "_";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: lu,
            useFormState: jf,
            useActionState: jf,
            useOptimistic: function(e) {
                var t = Et();
                t.memoizedState = t.baseState = e;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = ou.bind(null, me, !0, a), a.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Qo,
            useCacheRefresh: function() {
                return Et().memoizedState = Jy.bind(null, me);
            },
            useEffectEvent: function(e) {
                var t = Et(), a = {
                    impl: e
                };
                return t.memoizedState = a, function() {
                    if ((Oe & 2) !== 0) throw Error(l(440));
                    return a.impl.apply(void 0, arguments);
                };
            }
        }, uu = {
            readContext: gt,
            use: Is,
            useCallback: If,
            useContext: gt,
            useEffect: au,
            useImperativeHandle: $f,
            useInsertionEffect: Mf,
            useLayoutEffect: Hf,
            useMemo: Pf,
            useReducer: Ps,
            useRef: Bf,
            useState: function() {
                return Ps(On);
            },
            useDebugValue: iu,
            useDeferredValue: function(e, t) {
                var a = at();
                return Gf(a, ze.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Ps(On)[0], t = at().memoizedState;
                return [
                    typeof e == "boolean" ? e : br(e),
                    t
                ];
            },
            useSyncExternalStore: bf,
            useId: Xf,
            useHostTransitionStatus: lu,
            useFormState: Uf,
            useActionState: Uf,
            useOptimistic: function(e, t) {
                var a = at();
                return Af(a, ze, e, t);
            },
            useMemoCache: Qo,
            useCacheRefresh: Jf
        };
        uu.useEffectEvent = zf;
        var ed = {
            readContext: gt,
            use: Is,
            useCallback: If,
            useContext: gt,
            useEffect: au,
            useImperativeHandle: $f,
            useInsertionEffect: Mf,
            useLayoutEffect: Hf,
            useMemo: Pf,
            useReducer: eu,
            useRef: Bf,
            useState: function() {
                return eu(On);
            },
            useDebugValue: iu,
            useDeferredValue: function(e, t) {
                var a = at();
                return ze === null ? ru(a, e, t) : Gf(a, ze.memoizedState, e, t);
            },
            useTransition: function() {
                var e = eu(On)[0], t = at().memoizedState;
                return [
                    typeof e == "boolean" ? e : br(e),
                    t
                ];
            },
            useSyncExternalStore: bf,
            useId: Xf,
            useHostTransitionStatus: lu,
            useFormState: Df,
            useActionState: Df,
            useOptimistic: function(e, t) {
                var a = at();
                return ze !== null ? Af(a, ze, e, t) : (a.baseState = e, [
                    e,
                    a.queue.dispatch
                ]);
            },
            useMemoCache: Qo,
            useCacheRefresh: Jf
        };
        ed.useEffectEvent = zf;
        function cu(e, t, a, s) {
            t = e.memoizedState, a = a(s, t), a = a == null ? t : b({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
        }
        var hu = {
            enqueueSetState: function(e, t, a) {
                e = e._reactInternals;
                var s = qt(), o = Zn(s);
                o.payload = t, a != null && (o.callback = a), t = ea(e, o, s), t !== null && (jt(t, e, s), mr(t, e, s));
            },
            enqueueReplaceState: function(e, t, a) {
                e = e._reactInternals;
                var s = qt(), o = Zn(s);
                o.tag = 1, o.payload = t, a != null && (o.callback = a), t = ea(e, o, s), t !== null && (jt(t, e, s), mr(t, e, s));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var a = qt(), s = Zn(a);
                s.tag = 2, t != null && (s.callback = t), t = ea(e, s, a), t !== null && (jt(t, e, a), mr(t, e, a));
            }
        };
        function td(e, t, a, s, o, h, y) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, h, y) : t.prototype && t.prototype.isPureReactComponent ? !lr(a, s) || !lr(o, h) : !0;
        }
        function nd(e, t, a, s) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && hu.enqueueReplaceState(t, t.state, null);
        }
        function Na(e, t) {
            var a = t;
            if ("ref" in t) {
                a = {};
                for(var s in t)s !== "ref" && (a[s] = t[s]);
            }
            if (e = e.defaultProps) {
                a === t && (a = b({}, a));
                for(var o in e)a[o] === void 0 && (a[o] = e[o]);
            }
            return a;
        }
        function ad(e) {
            Ts(e);
        }
        function id(e) {
            console.error(e);
        }
        function rd(e) {
            Ts(e);
        }
        function Ys(e, t) {
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
        function sd(e, t, a) {
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
        function fu(e, t, a) {
            return a = Zn(a), a.tag = 3, a.payload = {
                element: null
            }, a.callback = function() {
                Ys(e, t);
            }, a;
        }
        function ld(e) {
            return e = Zn(e), e.tag = 3, e;
        }
        function od(e, t, a, s) {
            var o = a.type.getDerivedStateFromError;
            if (typeof o == "function") {
                var h = s.value;
                e.payload = function() {
                    return o(h);
                }, e.callback = function() {
                    sd(t, a, s);
                };
            }
            var y = a.stateNode;
            y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
                sd(t, a, s), typeof o != "function" && (sa === null ? sa = new Set([
                    this
                ]) : sa.add(this));
                var w = s.stack;
                this.componentDidCatch(s.value, {
                    componentStack: w !== null ? w : ""
                });
            });
        }
        function Wy(e, t, a, s, o) {
            if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                if (t = a.alternate, t !== null && li(t, a, o, !0), a = Lt.current, a !== null) {
                    switch(a.tag){
                        case 31:
                        case 13:
                            return Zt === null ? rl() : a.alternate === null && Qe === 0 && (Qe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, s === Ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([
                                s
                            ]) : t.add(s), zu(e, s, o)), !1;
                        case 22:
                            return a.flags |= 65536, s === Ds ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    s
                                ])
                            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([
                                s
                            ]) : a.add(s)), zu(e, s, o)), !1;
                    }
                    throw Error(l(435, a.tag));
                }
                return zu(e, s, o), rl(), !1;
            }
            if (Ee) return t = Lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, s !== jo && (e = Error(l(422), {
                cause: s
            }), cr(Jt(e, a)))) : (s !== jo && (t = Error(l(423), {
                cause: s
            }), cr(Jt(t, a))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, s = Jt(s, a), o = fu(e.stateNode, s, o), Io(e, o), Qe !== 4 && (Qe = 2)), !1;
            var h = Error(l(520), {
                cause: s
            });
            if (h = Jt(h, a), Or === null ? Or = [
                h
            ] : Or.push(h), Qe !== 4 && (Qe = 2), t === null) return !0;
            s = Jt(s, a), a = t;
            do {
                switch(a.tag){
                    case 3:
                        return a.flags |= 65536, e = o & -o, a.lanes |= e, e = fu(a.stateNode, s, e), Io(a, e), !1;
                    case 1:
                        if (t = a.type, h = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (sa === null || !sa.has(h)))) return a.flags |= 65536, o &= -o, a.lanes |= o, o = ld(o), od(o, e, a, s), Io(a, o), !1;
                }
                a = a.return;
            }while (a !== null);
            return !1;
        }
        var du = Error(l(461)), st = !1;
        function yt(e, t, a, s) {
            t.child = e === null ? ff(t, null, a, s) : ja(t, e.child, a, s);
        }
        function ud(e, t, a, s, o) {
            a = a.render;
            var h = t.ref;
            if ("ref" in s) {
                var y = {};
                for(var w in s)w !== "ref" && (y[w] = s[w]);
            } else y = s;
            return Ra(t), s = Xo(e, t, a, y, h, o), w = Jo(), e !== null && !st ? (Fo(e, t, o), kn(e, t, o)) : (Ee && w && Oo(t), t.flags |= 1, yt(e, t, s, o), t.child);
        }
        function cd(e, t, a, s, o) {
            if (e === null) {
                var h = a.type;
                return typeof h == "function" && !xo(h) && h.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = h, hd(e, t, h, s, o)) : (e = Cs(a.type, null, s, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (h = e.child, !_u(e, o)) {
                var y = h.memoizedProps;
                if (a = a.compare, a = a !== null ? a : lr, a(y, s) && e.ref === t.ref) return kn(e, t, o);
            }
            return t.flags |= 1, e = Tn(h, s), e.ref = t.ref, e.return = t, t.child = e;
        }
        function hd(e, t, a, s, o) {
            if (e !== null) {
                var h = e.memoizedProps;
                if (lr(h, s) && e.ref === t.ref) if (st = !1, t.pendingProps = s = h, _u(e, o)) (e.flags & 131072) !== 0 && (st = !0);
                else return t.lanes = e.lanes, kn(e, t, o);
            }
            return pu(e, t, a, s, o);
        }
        function fd(e, t, a, s) {
            var o = s.children, h = e !== null ? e.memoizedState : null;
            if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), s.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (h = h !== null ? h.baseLanes | a : a, e !== null) {
                        for(s = t.child = e.child, o = 0; s !== null;)o = o | s.lanes | s.childLanes, s = s.sibling;
                        s = o & ~h;
                    } else s = 0, t.child = null;
                    return dd(e, t, h, a, s);
                }
                if ((a & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Us(t, h !== null ? h.cachePool : null), h !== null ? mf(t, h) : Go(), gf(t);
                else return s = t.lanes = 536870912, dd(e, t, h !== null ? h.baseLanes | a : a, a, s);
            } else h !== null ? (Us(t, h.cachePool), mf(t, h), na(), t.memoizedState = null) : (e !== null && Us(t, null), Go(), na());
            return yt(e, t, o, a), t.child;
        }
        function Sr(e, t) {
            return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), t.sibling;
        }
        function dd(e, t, a, s, o) {
            var h = Mo();
            return h = h === null ? null : {
                parent: it._currentValue,
                pool: h
            }, t.memoizedState = {
                baseLanes: a,
                cachePool: h
            }, e !== null && Us(t, null), Go(), gf(t), e !== null && li(e, t, s, !0), t.childLanes = o, null;
        }
        function Xs(e, t) {
            return t = Fs({
                mode: t.mode,
                children: t.children
            }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function pd(e, t, a) {
            return ja(t, e.child, null, a), e = Xs(t, t.pendingProps), e.flags |= 2, zt(t), t.memoizedState = null, e;
        }
        function Qy(e, t, a) {
            var s = t.pendingProps, o = (t.flags & 128) !== 0;
            if (t.flags &= -129, e === null) {
                if (Ee) {
                    if (s.mode === "hidden") return e = Xs(t, s), t.lanes = 536870912, Sr(null, e);
                    if (Ko(t), (e = Ve) ? (e = xp(e, Qt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Xn !== null ? {
                            id: fn,
                            overflow: dn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Fh(e), a.return = t, t.child = a, mt = t, Ve = null)) : e = null, e === null) throw Fn(t);
                    return t.lanes = 536870912, null;
                }
                return Xs(t, s);
            }
            var h = e.memoizedState;
            if (h !== null) {
                var y = h.dehydrated;
                if (Ko(t), o) if (t.flags & 256) t.flags &= -257, t = pd(e, t, a);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
                else throw Error(l(558));
                else if (st || li(e, t, a, !1), o = (a & e.childLanes) !== 0, st || o) {
                    if (s = $e, s !== null && (y = ah(s, a), y !== 0 && y !== h.retryLane)) throw h.retryLane = y, Ea(e, y), jt(s, e, y), du;
                    rl(), t = pd(e, t, a);
                } else e = h.treeContext, Ve = en(y.nextSibling), mt = t, Ee = !0, Jn = null, Qt = !1, e !== null && Zh(t, e), t = Xs(t, s), t.flags |= 4096;
                return t;
            }
            return e = Tn(e.child, {
                mode: s.mode,
                children: s.children
            }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function Js(e, t) {
            var a = t.ref;
            if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof a != "function" && typeof a != "object") throw Error(l(284));
                (e === null || e.ref !== a) && (t.flags |= 4194816);
            }
        }
        function pu(e, t, a, s, o) {
            return Ra(t), a = Xo(e, t, a, s, void 0, o), s = Jo(), e !== null && !st ? (Fo(e, t, o), kn(e, t, o)) : (Ee && s && Oo(t), t.flags |= 1, yt(e, t, a, o), t.child);
        }
        function md(e, t, a, s, o, h) {
            return Ra(t), t.updateQueue = null, a = vf(t, s, a, o), yf(e), s = Jo(), e !== null && !st ? (Fo(e, t, h), kn(e, t, h)) : (Ee && s && Oo(t), t.flags |= 1, yt(e, t, a, h), t.child);
        }
        function gd(e, t, a, s, o) {
            if (Ra(t), t.stateNode === null) {
                var h = ai, y = a.contextType;
                typeof y == "object" && y !== null && (h = gt(y)), h = new a(s, h), t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, h.updater = hu, t.stateNode = h, h._reactInternals = t, h = t.stateNode, h.props = s, h.state = t.memoizedState, h.refs = {}, qo(t), y = a.contextType, h.context = typeof y == "object" && y !== null ? gt(y) : ai, h.state = t.memoizedState, y = a.getDerivedStateFromProps, typeof y == "function" && (cu(t, a, y, s), h.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (y = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), y !== h.state && hu.enqueueReplaceState(h, h.state, null), yr(t, s, h, o), gr(), h.state = t.memoizedState), typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !0;
            } else if (e === null) {
                h = t.stateNode;
                var w = t.memoizedProps, R = Na(a, w);
                h.props = R;
                var z = h.context, V = a.contextType;
                y = ai, typeof V == "object" && V !== null && (y = gt(V));
                var J = a.getDerivedStateFromProps;
                V = typeof J == "function" || typeof h.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, V || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (w || z !== y) && nd(t, h, s, y), Qn = !1;
                var M = t.memoizedState;
                h.state = M, yr(t, s, h, o), gr(), z = t.memoizedState, w || M !== z || Qn ? (typeof J == "function" && (cu(t, a, J, s), z = t.memoizedState), (R = Qn || td(t, a, R, s, M, z, y)) ? (V || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = z), h.props = s, h.state = z, h.context = y, s = R) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
            } else {
                h = t.stateNode, $o(e, t), y = t.memoizedProps, V = Na(a, y), h.props = V, J = t.pendingProps, M = h.context, z = a.contextType, R = ai, typeof z == "object" && z !== null && (R = gt(z)), w = a.getDerivedStateFromProps, (z = typeof w == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (y !== J || M !== R) && nd(t, h, s, R), Qn = !1, M = t.memoizedState, h.state = M, yr(t, s, h, o), gr();
                var $ = t.memoizedState;
                y !== J || M !== $ || Qn || e !== null && e.dependencies !== null && ks(e.dependencies) ? (typeof w == "function" && (cu(t, a, w, s), $ = t.memoizedState), (V = Qn || td(t, a, V, s, M, $, R) || e !== null && e.dependencies !== null && ks(e.dependencies)) ? (z || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, $, R), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, $, R)), typeof h.componentDidUpdate == "function" && (t.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = $), h.props = s, h.state = $, h.context = R, s = V) : (typeof h.componentDidUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), s = !1);
            }
            return h = s, Js(e, t), s = (t.flags & 128) !== 0, h || s ? (h = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : h.render(), t.flags |= 1, e !== null && s ? (t.child = ja(t, e.child, null, o), t.child = ja(t, null, a, o)) : yt(e, t, a, o), t.memoizedState = h.state, e = t.child) : e = kn(e, t, o), e;
        }
        function yd(e, t, a, s) {
            return Aa(), t.flags |= 256, yt(e, t, a, s), t.child;
        }
        var mu = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function gu(e) {
            return {
                baseLanes: e,
                cachePool: sf()
            };
        }
        function yu(e, t, a) {
            return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ht), e;
        }
        function vd(e, t, a) {
            var s = t.pendingProps, o = !1, h = (t.flags & 128) !== 0, y;
            if ((y = h) || (y = e !== null && e.memoizedState === null ? !1 : (nt.current & 2) !== 0), y && (o = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (Ee) {
                    if (o ? ta(t) : na(), (e = Ve) ? (e = xp(e, Qt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Xn !== null ? {
                            id: fn,
                            overflow: dn
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Fh(e), a.return = t, t.child = a, mt = t, Ve = null)) : e = null, e === null) throw Fn(t);
                    return Zu(e) ? t.lanes = 32 : t.lanes = 536870912, null;
                }
                var w = s.children;
                return s = s.fallback, o ? (na(), o = t.mode, w = Fs({
                    mode: "hidden",
                    children: w
                }, o), s = Ta(s, o, a, null), w.return = t, s.return = t, w.sibling = s, t.child = w, s = t.child, s.memoizedState = gu(a), s.childLanes = yu(e, y, a), t.memoizedState = mu, Sr(null, s)) : (ta(t), vu(t, w));
            }
            var R = e.memoizedState;
            if (R !== null && (w = R.dehydrated, w !== null)) {
                if (h) t.flags & 256 ? (ta(t), t.flags &= -257, t = bu(e, t, a)) : t.memoizedState !== null ? (na(), t.child = e.child, t.flags |= 128, t = null) : (na(), w = s.fallback, o = t.mode, s = Fs({
                    mode: "visible",
                    children: s.children
                }, o), w = Ta(w, o, a, null), w.flags |= 2, s.return = t, w.return = t, s.sibling = w, t.child = s, ja(t, e.child, null, a), s = t.child, s.memoizedState = gu(a), s.childLanes = yu(e, y, a), t.memoizedState = mu, t = Sr(null, s));
                else if (ta(t), Zu(w)) {
                    if (y = w.nextSibling && w.nextSibling.dataset, y) var z = y.dgst;
                    y = z, s = Error(l(419)), s.stack = "", s.digest = y, cr({
                        value: s,
                        source: null,
                        stack: null
                    }), t = bu(e, t, a);
                } else if (st || li(e, t, a, !1), y = (a & e.childLanes) !== 0, st || y) {
                    if (y = $e, y !== null && (s = ah(y, a), s !== 0 && s !== R.retryLane)) throw R.retryLane = s, Ea(e, s), jt(y, e, s), du;
                    Qu(w) || rl(), t = bu(e, t, a);
                } else Qu(w) ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, Ve = en(w.nextSibling), mt = t, Ee = !0, Jn = null, Qt = !1, e !== null && Zh(t, e), t = vu(t, s.children), t.flags |= 4096);
                return t;
            }
            return o ? (na(), w = s.fallback, o = t.mode, R = e.child, z = R.sibling, s = Tn(R, {
                mode: "hidden",
                children: s.children
            }), s.subtreeFlags = R.subtreeFlags & 65011712, z !== null ? w = Tn(z, w) : (w = Ta(w, o, a, null), w.flags |= 2), w.return = t, s.return = t, s.sibling = w, t.child = s, Sr(null, s), s = t.child, w = e.child.memoizedState, w === null ? w = gu(a) : (o = w.cachePool, o !== null ? (R = it._currentValue, o = o.parent !== R ? {
                parent: R,
                pool: R
            } : o) : o = sf(), w = {
                baseLanes: w.baseLanes | a,
                cachePool: o
            }), s.memoizedState = w, s.childLanes = yu(e, y, a), t.memoizedState = mu, Sr(e.child, s)) : (ta(t), a = e.child, e = a.sibling, a = Tn(a, {
                mode: "visible",
                children: s.children
            }), a.return = t, a.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [
                e
            ], t.flags |= 16) : y.push(e)), t.child = a, t.memoizedState = null, a);
        }
        function vu(e, t) {
            return t = Fs({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Fs(e, t) {
            return e = Bt(22, e, null, t), e.lanes = 0, e;
        }
        function bu(e, t, a) {
            return ja(t, e.child, null, a), e = vu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function bd(e, t, a) {
            e.lanes |= t;
            var s = e.alternate;
            s !== null && (s.lanes |= t), Do(e.return, t, a);
        }
        function wu(e, t, a, s, o, h) {
            var y = e.memoizedState;
            y === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: s,
                tail: a,
                tailMode: o,
                treeForkCount: h
            } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = s, y.tail = a, y.tailMode = o, y.treeForkCount = h);
        }
        function wd(e, t, a) {
            var s = t.pendingProps, o = s.revealOrder, h = s.tail;
            s = s.children;
            var y = nt.current, w = (y & 2) !== 0;
            if (w ? (y = y & 1 | 2, t.flags |= 128) : y &= 1, Q(nt, y), yt(e, t, s, a), s = Ee ? ur : 0, !w && e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && bd(e, a, t);
                else if (e.tag === 19) bd(e, a, t);
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
                    for(a = t.child, o = null; a !== null;)e = a.alternate, e !== null && Ms(e) === null && (o = a), a = a.sibling;
                    a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), wu(t, !1, o, a, h, s);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for(a = null, o = t.child, t.child = null; o !== null;){
                        if (e = o.alternate, e !== null && Ms(e) === null) {
                            t.child = o;
                            break;
                        }
                        e = o.sibling, o.sibling = a, a = o, o = e;
                    }
                    wu(t, !0, a, null, h, s);
                    break;
                case "together":
                    wu(t, !1, null, null, void 0, s);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function kn(e, t, a) {
            if (e !== null && (t.dependencies = e.dependencies), ra |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
                if (li(e, t, a, !1), (a & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(l(153));
            if (t.child !== null) {
                for(e = t.child, a = Tn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;)e = e.sibling, a = a.sibling = Tn(e, e.pendingProps), a.return = t;
                a.sibling = null;
            }
            return t.child;
        }
        function _u(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ks(e)));
        }
        function Zy(e, t, a) {
            switch(t.tag){
                case 3:
                    Fe(t, t.stateNode.containerInfo), Wn(t, it, e.memoizedState.cache), Aa();
                    break;
                case 27:
                case 5:
                    Gn(t);
                    break;
                case 4:
                    Fe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    Wn(t, t.type, t.memoizedProps.value);
                    break;
                case 31:
                    if (t.memoizedState !== null) return t.flags |= 128, Ko(t), null;
                    break;
                case 13:
                    var s = t.memoizedState;
                    if (s !== null) return s.dehydrated !== null ? (ta(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? vd(e, t, a) : (ta(t), e = kn(e, t, a), e !== null ? e.sibling : null);
                    ta(t);
                    break;
                case 19:
                    var o = (e.flags & 128) !== 0;
                    if (s = (a & t.childLanes) !== 0, s || (li(e, t, a, !1), s = (a & t.childLanes) !== 0), o) {
                        if (s) return wd(e, t, a);
                        t.flags |= 128;
                    }
                    if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Q(nt, nt.current), s) break;
                    return null;
                case 22:
                    return t.lanes = 0, fd(e, t, a, t.pendingProps);
                case 24:
                    Wn(t, it, e.memoizedState.cache);
            }
            return kn(e, t, a);
        }
        function _d(e, t, a) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) st = !0;
            else {
                if (!_u(e, a) && (t.flags & 128) === 0) return st = !1, Zy(e, t, a);
                st = (e.flags & 131072) !== 0;
            }
            else st = !1, Ee && (t.flags & 1048576) !== 0 && Qh(t, ur, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        var s = t.pendingProps;
                        if (e = Oa(t.elementType), t.type = e, typeof e == "function") xo(e) ? (s = Na(e, s), t.tag = 1, t = gd(null, t, e, s, a)) : (t.tag = 0, t = pu(null, t, e, s, a));
                        else {
                            if (e != null) {
                                var o = e.$$typeof;
                                if (o === F) {
                                    t.tag = 11, t = ud(null, t, e, s, a);
                                    break e;
                                } else if (o === ee) {
                                    t.tag = 14, t = cd(null, t, e, s, a);
                                    break e;
                                }
                            }
                            throw t = Ae(e) || e, Error(l(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return pu(e, t, t.type, t.pendingProps, a);
                case 1:
                    return s = t.type, o = Na(s, t.pendingProps), gd(e, t, s, o, a);
                case 3:
                    e: {
                        if (Fe(t, t.stateNode.containerInfo), e === null) throw Error(l(387));
                        s = t.pendingProps;
                        var h = t.memoizedState;
                        o = h.element, $o(e, t), yr(t, s, null, a);
                        var y = t.memoizedState;
                        if (s = y.cache, Wn(t, it, s), s !== h.cache && Bo(t, [
                            it
                        ], a, !0), gr(), s = y.element, h.isDehydrated) if (h = {
                            element: s,
                            isDehydrated: !1,
                            cache: y.cache
                        }, t.updateQueue.baseState = h, t.memoizedState = h, t.flags & 256) {
                            t = yd(e, t, s, a);
                            break e;
                        } else if (s !== o) {
                            o = Jt(Error(l(424)), t), cr(o), t = yd(e, t, s, a);
                            break e;
                        } else for(e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ve = en(e.firstChild), mt = t, Ee = !0, Jn = null, Qt = !0, a = ff(t, null, s, a), t.child = a; a;)a.flags = a.flags & -3 | 4096, a = a.sibling;
                        else {
                            if (Aa(), s === o) {
                                t = kn(e, t, a);
                                break e;
                            }
                            yt(e, t, s, a);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Js(e, t), e === null ? (a = Up(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Ee || (a = t.type, e = t.pendingProps, s = fl(ye.current).createElement(a), s[pt] = t, s[At] = e, vt(s, a, e), ht(s), t.stateNode = s) : t.memoizedState = Up(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Gn(t), e === null && Ee && (s = t.stateNode = Op(t.type, t.pendingProps, ye.current), mt = t, Qt = !0, o = Ve, ca(t.type) ? (ec = o, Ve = en(s.firstChild)) : Ve = o), yt(e, t, t.pendingProps.children, a), Js(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && Ee && ((o = s = Ve) && (s = O0(s, t.type, t.pendingProps, Qt), s !== null ? (t.stateNode = s, mt = t, Ve = en(s.firstChild), Qt = !1, o = !0) : o = !1), o || Fn(t)), Gn(t), o = t.type, h = t.pendingProps, y = e !== null ? e.memoizedProps : null, s = h.children, Ju(o, h) ? s = null : y !== null && Ju(o, y) && (t.flags |= 32), t.memoizedState !== null && (o = Xo(e, t, Gy, null, null, a), zr._currentValue = o), Js(e, t), yt(e, t, s, a), t.child;
                case 6:
                    return e === null && Ee && ((e = a = Ve) && (a = k0(a, t.pendingProps, Qt), a !== null ? (t.stateNode = a, mt = t, Ve = null, e = !0) : e = !1), e || Fn(t)), null;
                case 13:
                    return vd(e, t, a);
                case 4:
                    return Fe(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = ja(t, null, s, a) : yt(e, t, s, a), t.child;
                case 11:
                    return ud(e, t, t.type, t.pendingProps, a);
                case 7:
                    return yt(e, t, t.pendingProps, a), t.child;
                case 8:
                    return yt(e, t, t.pendingProps.children, a), t.child;
                case 12:
                    return yt(e, t, t.pendingProps.children, a), t.child;
                case 10:
                    return s = t.pendingProps, Wn(t, t.type, s.value), yt(e, t, s.children, a), t.child;
                case 9:
                    return o = t.type._context, s = t.pendingProps.children, Ra(t), o = gt(o), s = s(o), t.flags |= 1, yt(e, t, s, a), t.child;
                case 14:
                    return cd(e, t, t.type, t.pendingProps, a);
                case 15:
                    return hd(e, t, t.type, t.pendingProps, a);
                case 19:
                    return wd(e, t, a);
                case 31:
                    return Qy(e, t, a);
                case 22:
                    return fd(e, t, a, t.pendingProps);
                case 24:
                    return Ra(t), s = gt(it), e === null ? (o = Mo(), o === null && (o = $e, h = Lo(), o.pooledCache = h, h.refCount++, h !== null && (o.pooledCacheLanes |= a), o = h), t.memoizedState = {
                        parent: s,
                        cache: o
                    }, qo(t), Wn(t, it, o)) : ((e.lanes & a) !== 0 && ($o(e, t), yr(t, null, null, a), gr()), o = e.memoizedState, h = t.memoizedState, o.parent !== s ? (o = {
                        parent: s,
                        cache: s
                    }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Wn(t, it, s)) : (s = h.cache, Wn(t, it, s), s !== o.cache && Bo(t, [
                        it
                    ], a, !0))), yt(e, t, t.pendingProps.children, a), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(l(156, t.tag));
        }
        function jn(e) {
            e.flags |= 4;
        }
        function Su(e, t, a, s, o) {
            if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
                if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
                else if (Xd()) e.flags |= 8192;
                else throw ka = Ds, Ho;
            } else e.flags &= -16777217;
        }
        function Sd(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !zp(t)) if (Xd()) e.flags |= 8192;
            else throw ka = Ds, Ho;
        }
        function Ws(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? eh() : 536870912, e.lanes |= t, bi |= t);
        }
        function Er(e, t) {
            if (!Ee) switch(e.tailMode){
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
        function Ke(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, a = 0, s = 0;
            if (t) for(var o = e.child; o !== null;)a |= o.lanes | o.childLanes, s |= o.subtreeFlags & 65011712, s |= o.flags & 65011712, o.return = e, o = o.sibling;
            else for(o = e.child; o !== null;)a |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = e, o = o.sibling;
            return e.subtreeFlags |= s, e.childLanes = a, t;
        }
        function e0(e, t, a) {
            var s = t.pendingProps;
            switch(ko(t), t.tag){
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Ke(t), null;
                case 1:
                    return Ke(t), null;
                case 3:
                    return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), Rn(it), Ge(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (si(t) ? jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uo())), Ke(t), null;
                case 26:
                    var o = t.type, h = t.memoizedState;
                    return e === null ? (jn(t), h !== null ? (Ke(t), Sd(t, h)) : (Ke(t), Su(t, o, null, s, a))) : h ? h !== e.memoizedState ? (jn(t), Ke(t), Sd(t, h)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== s && jn(t), Ke(t), Su(t, o, e, s, a)), null;
                case 27:
                    if ($a(t), a = ye.current, o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && jn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ke(t), null;
                        }
                        e = te.current, si(t) ? ef(t) : (e = Op(o, s, a), t.stateNode = e, jn(t));
                    }
                    return Ke(t), null;
                case 5:
                    if ($a(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && jn(t);
                    else {
                        if (!s) {
                            if (t.stateNode === null) throw Error(l(166));
                            return Ke(t), null;
                        }
                        if (h = te.current, si(t)) ef(t);
                        else {
                            var y = fl(ye.current);
                            switch(h){
                                case 1:
                                    h = y.createElementNS("http://www.w3.org/2000/svg", o);
                                    break;
                                case 2:
                                    h = y.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                    break;
                                default:
                                    switch(o){
                                        case "svg":
                                            h = y.createElementNS("http://www.w3.org/2000/svg", o);
                                            break;
                                        case "math":
                                            h = y.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                                            break;
                                        case "script":
                                            h = y.createElement("div"), h.innerHTML = "<script><\/script>", h = h.removeChild(h.firstChild);
                                            break;
                                        case "select":
                                            h = typeof s.is == "string" ? y.createElement("select", {
                                                is: s.is
                                            }) : y.createElement("select"), s.multiple ? h.multiple = !0 : s.size && (h.size = s.size);
                                            break;
                                        default:
                                            h = typeof s.is == "string" ? y.createElement(o, {
                                                is: s.is
                                            }) : y.createElement(o);
                                    }
                            }
                            h[pt] = t, h[At] = s;
                            e: for(y = t.child; y !== null;){
                                if (y.tag === 5 || y.tag === 6) h.appendChild(y.stateNode);
                                else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                                    y.child.return = y, y = y.child;
                                    continue;
                                }
                                if (y === t) break e;
                                for(; y.sibling === null;){
                                    if (y.return === null || y.return === t) break e;
                                    y = y.return;
                                }
                                y.sibling.return = y.return, y = y.sibling;
                            }
                            t.stateNode = h;
                            e: switch(vt(h, o, s), o){
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
                            s && jn(t);
                        }
                    }
                    return Ke(t), Su(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== s && jn(t);
                    else {
                        if (typeof s != "string" && t.stateNode === null) throw Error(l(166));
                        if (e = ye.current, si(t)) {
                            if (e = t.stateNode, a = t.memoizedProps, s = null, o = mt, o !== null) switch(o.tag){
                                case 27:
                                case 5:
                                    s = o.memoizedProps;
                            }
                            e[pt] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || vp(e.nodeValue, a)), e || Fn(t, !0);
                        } else e = fl(e).createTextNode(s), e[pt] = t, t.stateNode = e;
                    }
                    return Ke(t), null;
                case 31:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null) {
                        if (s = si(t), a !== null) {
                            if (e === null) {
                                if (!s) throw Error(l(318));
                                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(557));
                                e[pt] = t;
                            } else Aa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ke(t), e = !1;
                        } else a = Uo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                        if (!e) return t.flags & 256 ? (zt(t), t) : (zt(t), null);
                        if ((t.flags & 128) !== 0) throw Error(l(558));
                    }
                    return Ke(t), null;
                case 13:
                    if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (o = si(t), s !== null && s.dehydrated !== null) {
                            if (e === null) {
                                if (!o) throw Error(l(318));
                                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
                                o[pt] = t;
                            } else Aa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ke(t), o = !1;
                        } else o = Uo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
                        if (!o) return t.flags & 256 ? (zt(t), t) : (zt(t), null);
                    }
                    return zt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = s !== null, e = e !== null && e.memoizedState !== null, a && (s = t.child, o = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (o = s.alternate.memoizedState.cachePool.pool), h = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (h = s.memoizedState.cachePool.pool), h !== o && (s.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Ws(t, t.updateQueue), Ke(t), null);
                case 4:
                    return Ge(), e === null && Gu(t.stateNode.containerInfo), Ke(t), null;
                case 10:
                    return Rn(t.type), Ke(t), null;
                case 19:
                    if (G(nt), s = t.memoizedState, s === null) return Ke(t), null;
                    if (o = (t.flags & 128) !== 0, h = s.rendering, h === null) if (o) Er(s, !1);
                    else {
                        if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (h = Ms(e), h !== null) {
                                for(t.flags |= 128, Er(s, !1), e = h.updateQueue, t.updateQueue = e, Ws(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)Jh(a, e), a = a.sibling;
                                return Q(nt, nt.current & 1 | 2), Ee && An(t, s.treeForkCount), t.child;
                            }
                            e = e.sibling;
                        }
                        s.tail !== null && St() > nl && (t.flags |= 128, o = !0, Er(s, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!o) if (e = Ms(h), e !== null) {
                            if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Ws(t, e), Er(s, !0), s.tail === null && s.tailMode === "hidden" && !h.alternate && !Ee) return Ke(t), null;
                        } else 2 * St() - s.renderingStartTime > nl && a !== 536870912 && (t.flags |= 128, o = !0, Er(s, !1), t.lanes = 4194304);
                        s.isBackwards ? (h.sibling = t.child, t.child = h) : (e = s.last, e !== null ? e.sibling = h : t.child = h, s.last = h);
                    }
                    return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = St(), e.sibling = null, a = nt.current, Q(nt, o ? a & 1 | 2 : a & 1), Ee && An(t, s.treeForkCount), e) : (Ke(t), null);
                case 22:
                case 23:
                    return zt(t), Vo(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), a = t.updateQueue, a !== null && Ws(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && G(Ca), null;
                case 24:
                    return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Rn(it), Ke(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(l(156, t.tag));
        }
        function t0(e, t) {
            switch(ko(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Rn(it), Ge(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return $a(t), null;
                case 31:
                    if (t.memoizedState !== null) {
                        if (zt(t), t.alternate === null) throw Error(l(340));
                        Aa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 13:
                    if (zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(l(340));
                        Aa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return G(nt), null;
                case 4:
                    return Ge(), null;
                case 10:
                    return Rn(t.type), null;
                case 22:
                case 23:
                    return zt(t), Vo(), e !== null && G(Ca), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Rn(it), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function Ed(e, t) {
            switch(ko(t), t.tag){
                case 3:
                    Rn(it), Ge();
                    break;
                case 26:
                case 27:
                case 5:
                    $a(t);
                    break;
                case 4:
                    Ge();
                    break;
                case 31:
                    t.memoizedState !== null && zt(t);
                    break;
                case 13:
                    zt(t);
                    break;
                case 19:
                    G(nt);
                    break;
                case 10:
                    Rn(t.type);
                    break;
                case 22:
                case 23:
                    zt(t), Vo(), e !== null && G(Ca);
                    break;
                case 24:
                    Rn(it);
            }
        }
        function Tr(e, t) {
            try {
                var a = t.updateQueue, s = a !== null ? a.lastEffect : null;
                if (s !== null) {
                    var o = s.next;
                    a = o;
                    do {
                        if ((a.tag & e) === e) {
                            s = void 0;
                            var h = a.create, y = a.inst;
                            s = h(), y.destroy = s;
                        }
                        a = a.next;
                    }while (a !== o);
                }
            } catch (w) {
                Le(t, t.return, w);
            }
        }
        function aa(e, t, a) {
            try {
                var s = t.updateQueue, o = s !== null ? s.lastEffect : null;
                if (o !== null) {
                    var h = o.next;
                    s = h;
                    do {
                        if ((s.tag & e) === e) {
                            var y = s.inst, w = y.destroy;
                            if (w !== void 0) {
                                y.destroy = void 0, o = t;
                                var R = a, z = w;
                                try {
                                    z();
                                } catch (V) {
                                    Le(o, R, V);
                                }
                            }
                        }
                        s = s.next;
                    }while (s !== h);
                }
            } catch (V) {
                Le(t, t.return, V);
            }
        }
        function Td(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var a = e.stateNode;
                try {
                    pf(t, a);
                } catch (s) {
                    Le(e, e.return, s);
                }
            }
        }
        function Ad(e, t, a) {
            a.props = Na(e.type, e.memoizedProps), a.state = e.memoizedState;
            try {
                a.componentWillUnmount();
            } catch (s) {
                Le(e, t, s);
            }
        }
        function Ar(e, t) {
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
                Le(e, t, o);
            }
        }
        function pn(e, t) {
            var a = e.ref, s = e.refCleanup;
            if (a !== null) if (typeof s == "function") try {
                s();
            } catch (o) {
                Le(e, t, o);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof a == "function") try {
                a(null);
            } catch (o) {
                Le(e, t, o);
            }
            else a.current = null;
        }
        function xd(e) {
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
                Le(e, e.return, o);
            }
        }
        function Eu(e, t, a) {
            try {
                var s = e.stateNode;
                E0(s, e.type, a, t), s[At] = t;
            } catch (o) {
                Le(e, e.return, o);
            }
        }
        function Rd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ca(e.type) || e.tag === 4;
        }
        function Tu(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || Rd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && ca(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function Au(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Sn));
            else if (s !== 4 && (s === 27 && ca(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for(Au(e, t, a), e = e.sibling; e !== null;)Au(e, t, a), e = e.sibling;
        }
        function Qs(e, t, a) {
            var s = e.tag;
            if (s === 5 || s === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
            else if (s !== 4 && (s === 27 && ca(e.type) && (a = e.stateNode), e = e.child, e !== null)) for(Qs(e, t, a), e = e.sibling; e !== null;)Qs(e, t, a), e = e.sibling;
        }
        function Cd(e) {
            var t = e.stateNode, a = e.memoizedProps;
            try {
                for(var s = e.type, o = t.attributes; o.length;)t.removeAttributeNode(o[0]);
                vt(t, s, a), t[pt] = e, t[At] = a;
            } catch (h) {
                Le(e, e.return, h);
            }
        }
        var Un = !1, lt = !1, xu = !1, Od = typeof WeakSet == "function" ? WeakSet : Set, ft = null;
        function n0(e, t) {
            if (e = e.containerInfo, Yu = bl, e = qh(e), bo(e)) {
                if ("selectionStart" in e) var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var o = s.anchorOffset, h = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType, h.nodeType;
                        } catch  {
                            a = null;
                            break e;
                        }
                        var y = 0, w = -1, R = -1, z = 0, V = 0, J = e, M = null;
                        t: for(;;){
                            for(var $; J !== a || o !== 0 && J.nodeType !== 3 || (w = y + o), J !== h || s !== 0 && J.nodeType !== 3 || (R = y + s), J.nodeType === 3 && (y += J.nodeValue.length), ($ = J.firstChild) !== null;)M = J, J = $;
                            for(;;){
                                if (J === e) break t;
                                if (M === a && ++z === o && (w = y), M === h && ++V === s && (R = y), ($ = J.nextSibling) !== null) break;
                                J = M, M = J.parentNode;
                            }
                            J = $;
                        }
                        a = w === -1 || R === -1 ? null : {
                            start: w,
                            end: R
                        };
                    } else a = null;
                }
                a = a || {
                    start: 0,
                    end: 0
                };
            } else a = null;
            for(Xu = {
                focusedElem: e,
                selectionRange: a
            }, bl = !1, ft = t; ft !== null;)if (t = ft, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ft = e;
            else for(; ft !== null;){
                switch(t = ft, h = t.alternate, e = t.flags, t.tag){
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for(a = 0; a < e.length; a++)o = e[a], o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && h !== null) {
                            e = void 0, a = t, o = h.memoizedProps, h = h.memoizedState, s = a.stateNode;
                            try {
                                var ne = Na(a.type, o);
                                e = s.getSnapshotBeforeUpdate(ne, h), s.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ce) {
                                Le(a, a.return, ce);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Wu(e);
                            else if (a === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wu(e);
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
                    e.return = t.return, ft = e;
                    break;
                }
                ft = t.return;
            }
        }
        function kd(e, t, a) {
            var s = a.flags;
            switch(a.tag){
                case 0:
                case 11:
                case 15:
                    Dn(e, a), s & 4 && Tr(5, a);
                    break;
                case 1:
                    if (Dn(e, a), s & 4) if (e = a.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (y) {
                        Le(a, a.return, y);
                    }
                    else {
                        var o = Na(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (y) {
                            Le(a, a.return, y);
                        }
                    }
                    s & 64 && Td(a), s & 512 && Ar(a, a.return);
                    break;
                case 3:
                    if (Dn(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
                        if (t = null, a.child !== null) switch(a.child.tag){
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode;
                        }
                        try {
                            pf(e, t);
                        } catch (y) {
                            Le(a, a.return, y);
                        }
                    }
                    break;
                case 27:
                    t === null && s & 4 && Cd(a);
                case 26:
                case 5:
                    Dn(e, a), t === null && s & 4 && xd(a), s & 512 && Ar(a, a.return);
                    break;
                case 12:
                    Dn(e, a);
                    break;
                case 31:
                    Dn(e, a), s & 4 && Nd(e, a);
                    break;
                case 13:
                    Dn(e, a), s & 4 && Dd(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = h0.bind(null, a), j0(e, a))));
                    break;
                case 22:
                    if (s = a.memoizedState !== null || Un, !s) {
                        t = t !== null && t.memoizedState !== null || lt, o = Un;
                        var h = lt;
                        Un = s, (lt = t) && !h ? Bn(e, a, (a.subtreeFlags & 8772) !== 0) : Dn(e, a), Un = o, lt = h;
                    }
                    break;
                case 30:
                    break;
                default:
                    Dn(e, a);
            }
        }
        function jd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, jd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && to(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Xe = null, Rt = !1;
        function Nn(e, t, a) {
            for(a = a.child; a !== null;)Ud(e, t, a), a = a.sibling;
        }
        function Ud(e, t, a) {
            if (ue && typeof ue.onCommitFiberUnmount == "function") try {
                ue.onCommitFiberUnmount(Y, a);
            } catch  {}
            switch(a.tag){
                case 26:
                    lt || pn(a, t), Nn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                    break;
                case 27:
                    lt || pn(a, t);
                    var s = Xe, o = Rt;
                    ca(a.type) && (Xe = a.stateNode, Rt = !1), Nn(e, t, a), Dr(a.stateNode), Xe = s, Rt = o;
                    break;
                case 5:
                    lt || pn(a, t);
                case 6:
                    if (s = Xe, o = Rt, Xe = null, Nn(e, t, a), Xe = s, Rt = o, Xe !== null) if (Rt) try {
                        (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(a.stateNode);
                    } catch (h) {
                        Le(a, t, h);
                    }
                    else try {
                        Xe.removeChild(a.stateNode);
                    } catch (h) {
                        Le(a, t, h);
                    }
                    break;
                case 18:
                    Xe !== null && (Rt ? (e = Xe, Tp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Ri(e)) : Tp(Xe, a.stateNode));
                    break;
                case 4:
                    s = Xe, o = Rt, Xe = a.stateNode.containerInfo, Rt = !0, Nn(e, t, a), Xe = s, Rt = o;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    aa(2, a, t), lt || aa(4, a, t), Nn(e, t, a);
                    break;
                case 1:
                    lt || (pn(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && Ad(a, t, s)), Nn(e, t, a);
                    break;
                case 21:
                    Nn(e, t, a);
                    break;
                case 22:
                    lt = (s = lt) || a.memoizedState !== null, Nn(e, t, a), lt = s;
                    break;
                default:
                    Nn(e, t, a);
            }
        }
        function Nd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
                e = e.dehydrated;
                try {
                    Ri(e);
                } catch (a) {
                    Le(t, t.return, a);
                }
            }
        }
        function Dd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ri(e);
            } catch (a) {
                Le(t, t.return, a);
            }
        }
        function a0(e) {
            switch(e.tag){
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new Od), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Od), t;
                default:
                    throw Error(l(435, e.tag));
            }
        }
        function Zs(e, t) {
            var a = a0(e);
            t.forEach(function(s) {
                if (!a.has(s)) {
                    a.add(s);
                    var o = f0.bind(null, e, s);
                    s.then(o, o);
                }
            });
        }
        function Ct(e, t) {
            var a = t.deletions;
            if (a !== null) for(var s = 0; s < a.length; s++){
                var o = a[s], h = e, y = t, w = y;
                e: for(; w !== null;){
                    switch(w.tag){
                        case 27:
                            if (ca(w.type)) {
                                Xe = w.stateNode, Rt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Xe = w.stateNode, Rt = !1;
                            break e;
                        case 3:
                        case 4:
                            Xe = w.stateNode.containerInfo, Rt = !0;
                            break e;
                    }
                    w = w.return;
                }
                if (Xe === null) throw Error(l(160));
                Ud(h, y, o), Xe = null, Rt = !1, h = o.alternate, h !== null && (h.return = null), o.return = null;
            }
            if (t.subtreeFlags & 13886) for(t = t.child; t !== null;)Bd(t, e), t = t.sibling;
        }
        var rn = null;
        function Bd(e, t) {
            var a = e.alternate, s = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    Ct(t, e), Ot(e), s & 4 && (aa(3, e, e.return), Tr(3, e), aa(5, e, e.return));
                    break;
                case 1:
                    Ct(t, e), Ot(e), s & 512 && (lt || a === null || pn(a, a.return)), s & 64 && Un && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
                    break;
                case 26:
                    var o = rn;
                    if (Ct(t, e), Ot(e), s & 512 && (lt || a === null || pn(a, a.return)), s & 4) {
                        var h = a !== null ? a.memoizedState : null;
                        if (s = e.memoizedState, a === null) if (s === null) if (e.stateNode === null) {
                            e: {
                                s = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                                t: switch(s){
                                    case "title":
                                        h = o.getElementsByTagName("title")[0], (!h || h[Qi] || h[pt] || h.namespaceURI === "http://www.w3.org/2000/svg" || h.hasAttribute("itemprop")) && (h = o.createElement(s), o.head.insertBefore(h, o.querySelector("head > title"))), vt(h, s, a), h[pt] = e, ht(h), s = h;
                                        break e;
                                    case "link":
                                        var y = Bp("link", "href", o).get(s + (a.href || ""));
                                        if (y) {
                                            for(var w = 0; w < y.length; w++)if (h = y[w], h.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && h.getAttribute("rel") === (a.rel == null ? null : a.rel) && h.getAttribute("title") === (a.title == null ? null : a.title) && h.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(w, 1);
                                                break t;
                                            }
                                        }
                                        h = o.createElement(s), vt(h, s, a), o.head.appendChild(h);
                                        break;
                                    case "meta":
                                        if (y = Bp("meta", "content", o).get(s + (a.content || ""))) {
                                            for(w = 0; w < y.length; w++)if (h = y[w], h.getAttribute("content") === (a.content == null ? null : "" + a.content) && h.getAttribute("name") === (a.name == null ? null : a.name) && h.getAttribute("property") === (a.property == null ? null : a.property) && h.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && h.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(w, 1);
                                                break t;
                                            }
                                        }
                                        h = o.createElement(s), vt(h, s, a), o.head.appendChild(h);
                                        break;
                                    default:
                                        throw Error(l(468, s));
                                }
                                h[pt] = e, ht(h), s = h;
                            }
                            e.stateNode = s;
                        } else Lp(o, e.type, e.stateNode);
                        else e.stateNode = Dp(o, s, e.memoizedProps);
                        else h !== s ? (h === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : h.count--, s === null ? Lp(o, e.type, e.stateNode) : Dp(o, s, e.memoizedProps)) : s === null && e.stateNode !== null && Eu(e, e.memoizedProps, a.memoizedProps);
                    }
                    break;
                case 27:
                    Ct(t, e), Ot(e), s & 512 && (lt || a === null || pn(a, a.return)), a !== null && s & 4 && Eu(e, e.memoizedProps, a.memoizedProps);
                    break;
                case 5:
                    if (Ct(t, e), Ot(e), s & 512 && (lt || a === null || pn(a, a.return)), e.flags & 32) {
                        o = e.stateNode;
                        try {
                            Fa(o, "");
                        } catch (ne) {
                            Le(e, e.return, ne);
                        }
                    }
                    s & 4 && e.stateNode != null && (o = e.memoizedProps, Eu(e, o, a !== null ? a.memoizedProps : o)), s & 1024 && (xu = !0);
                    break;
                case 6:
                    if (Ct(t, e), Ot(e), s & 4) {
                        if (e.stateNode === null) throw Error(l(162));
                        s = e.memoizedProps, a = e.stateNode;
                        try {
                            a.nodeValue = s;
                        } catch (ne) {
                            Le(e, e.return, ne);
                        }
                    }
                    break;
                case 3:
                    if (ml = null, o = rn, rn = dl(t.containerInfo), Ct(t, e), rn = o, Ot(e), s & 4 && a !== null && a.memoizedState.isDehydrated) try {
                        Ri(t.containerInfo);
                    } catch (ne) {
                        Le(e, e.return, ne);
                    }
                    xu && (xu = !1, Ld(e));
                    break;
                case 4:
                    s = rn, rn = dl(e.stateNode.containerInfo), Ct(t, e), Ot(e), rn = s;
                    break;
                case 12:
                    Ct(t, e), Ot(e);
                    break;
                case 31:
                    Ct(t, e), Ot(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Zs(e, s)));
                    break;
                case 13:
                    Ct(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (tl = St()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Zs(e, s)));
                    break;
                case 22:
                    o = e.memoizedState !== null;
                    var R = a !== null && a.memoizedState !== null, z = Un, V = lt;
                    if (Un = z || o, lt = V || R, Ct(t, e), lt = V, Un = z, Ot(e), s & 8192) e: for(t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || R || Un || lt || Da(e)), a = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                R = a = t;
                                try {
                                    if (h = R.stateNode, o) y = h.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                    else {
                                        w = R.stateNode;
                                        var J = R.memoizedProps.style, M = J != null && J.hasOwnProperty("display") ? J.display : null;
                                        w.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                                    }
                                } catch (ne) {
                                    Le(R, R.return, ne);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                R = t;
                                try {
                                    R.stateNode.nodeValue = o ? "" : R.memoizedProps;
                                } catch (ne) {
                                    Le(R, R.return, ne);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (a === null) {
                                R = t;
                                try {
                                    var $ = R.stateNode;
                                    o ? Ap($, !0) : Ap(R.stateNode, !1);
                                } catch (ne) {
                                    Le(R, R.return, ne);
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
                    s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, Zs(e, a))));
                    break;
                case 19:
                    Ct(t, e), Ot(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, Zs(e, s)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    Ct(t, e), Ot(e);
            }
        }
        function Ot(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var a, s = e.return; s !== null;){
                        if (Rd(s)) {
                            a = s;
                            break;
                        }
                        s = s.return;
                    }
                    if (a == null) throw Error(l(160));
                    switch(a.tag){
                        case 27:
                            var o = a.stateNode, h = Tu(e);
                            Qs(e, h, o);
                            break;
                        case 5:
                            var y = a.stateNode;
                            a.flags & 32 && (Fa(y, ""), a.flags &= -33);
                            var w = Tu(e);
                            Qs(e, w, y);
                            break;
                        case 3:
                        case 4:
                            var R = a.stateNode.containerInfo, z = Tu(e);
                            Au(e, z, R);
                            break;
                        default:
                            throw Error(l(161));
                    }
                } catch (V) {
                    Le(e, e.return, V);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Ld(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Ld(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Dn(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)kd(e, t.alternate, t), t = t.sibling;
        }
        function Da(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        aa(4, t, t.return), Da(t);
                        break;
                    case 1:
                        pn(t, t.return);
                        var a = t.stateNode;
                        typeof a.componentWillUnmount == "function" && Ad(t, t.return, a), Da(t);
                        break;
                    case 27:
                        Dr(t.stateNode);
                    case 26:
                    case 5:
                        pn(t, t.return), Da(t);
                        break;
                    case 22:
                        t.memoizedState === null && Da(t);
                        break;
                    case 30:
                        Da(t);
                        break;
                    default:
                        Da(t);
                }
                e = e.sibling;
            }
        }
        function Bn(e, t, a) {
            for(a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var s = t.alternate, o = e, h = t, y = h.flags;
                switch(h.tag){
                    case 0:
                    case 11:
                    case 15:
                        Bn(o, h, a), Tr(4, h);
                        break;
                    case 1:
                        if (Bn(o, h, a), s = h, o = s.stateNode, typeof o.componentDidMount == "function") try {
                            o.componentDidMount();
                        } catch (z) {
                            Le(s, s.return, z);
                        }
                        if (s = h, o = s.updateQueue, o !== null) {
                            var w = s.stateNode;
                            try {
                                var R = o.shared.hiddenCallbacks;
                                if (R !== null) for(o.shared.hiddenCallbacks = null, o = 0; o < R.length; o++)df(R[o], w);
                            } catch (z) {
                                Le(s, s.return, z);
                            }
                        }
                        a && y & 64 && Td(h), Ar(h, h.return);
                        break;
                    case 27:
                        Cd(h);
                    case 26:
                    case 5:
                        Bn(o, h, a), a && s === null && y & 4 && xd(h), Ar(h, h.return);
                        break;
                    case 12:
                        Bn(o, h, a);
                        break;
                    case 31:
                        Bn(o, h, a), a && y & 4 && Nd(o, h);
                        break;
                    case 13:
                        Bn(o, h, a), a && y & 4 && Dd(o, h);
                        break;
                    case 22:
                        h.memoizedState === null && Bn(o, h, a), Ar(h, h.return);
                        break;
                    case 30:
                        break;
                    default:
                        Bn(o, h, a);
                }
                t = t.sibling;
            }
        }
        function Ru(e, t) {
            var a = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && hr(a));
        }
        function Cu(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hr(e));
        }
        function sn(e, t, a, s) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)zd(e, t, a, s), t = t.sibling;
        }
        function zd(e, t, a, s) {
            var o = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    sn(e, t, a, s), o & 2048 && Tr(9, t);
                    break;
                case 1:
                    sn(e, t, a, s);
                    break;
                case 3:
                    sn(e, t, a, s), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hr(e)));
                    break;
                case 12:
                    if (o & 2048) {
                        sn(e, t, a, s), e = t.stateNode;
                        try {
                            var h = t.memoizedProps, y = h.id, w = h.onPostCommit;
                            typeof w == "function" && w(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (R) {
                            Le(t, t.return, R);
                        }
                    } else sn(e, t, a, s);
                    break;
                case 31:
                    sn(e, t, a, s);
                    break;
                case 13:
                    sn(e, t, a, s);
                    break;
                case 23:
                    break;
                case 22:
                    h = t.stateNode, y = t.alternate, t.memoizedState !== null ? h._visibility & 2 ? sn(e, t, a, s) : xr(e, t) : h._visibility & 2 ? sn(e, t, a, s) : (h._visibility |= 2, gi(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)), o & 2048 && Ru(y, t);
                    break;
                case 24:
                    sn(e, t, a, s), o & 2048 && Cu(t.alternate, t);
                    break;
                default:
                    sn(e, t, a, s);
            }
        }
        function gi(e, t, a, s, o) {
            for(o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;){
                var h = e, y = t, w = a, R = s, z = y.flags;
                switch(y.tag){
                    case 0:
                    case 11:
                    case 15:
                        gi(h, y, w, R, o), Tr(8, y);
                        break;
                    case 23:
                        break;
                    case 22:
                        var V = y.stateNode;
                        y.memoizedState !== null ? V._visibility & 2 ? gi(h, y, w, R, o) : xr(h, y) : (V._visibility |= 2, gi(h, y, w, R, o)), o && z & 2048 && Ru(y.alternate, y);
                        break;
                    case 24:
                        gi(h, y, w, R, o), o && z & 2048 && Cu(y.alternate, y);
                        break;
                    default:
                        gi(h, y, w, R, o);
                }
                t = t.sibling;
            }
        }
        function xr(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var a = e, s = t, o = s.flags;
                switch(s.tag){
                    case 22:
                        xr(a, s), o & 2048 && Ru(s.alternate, s);
                        break;
                    case 24:
                        xr(a, s), o & 2048 && Cu(s.alternate, s);
                        break;
                    default:
                        xr(a, s);
                }
                t = t.sibling;
            }
        }
        var Rr = 8192;
        function yi(e, t, a) {
            if (e.subtreeFlags & Rr) for(e = e.child; e !== null;)Md(e, t, a), e = e.sibling;
        }
        function Md(e, t, a) {
            switch(e.tag){
                case 26:
                    yi(e, t, a), e.flags & Rr && e.memoizedState !== null && P0(a, rn, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    yi(e, t, a);
                    break;
                case 3:
                case 4:
                    var s = rn;
                    rn = dl(e.stateNode.containerInfo), yi(e, t, a), rn = s;
                    break;
                case 22:
                    e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = Rr, Rr = 16777216, yi(e, t, a), Rr = s) : yi(e, t, a));
                    break;
                default:
                    yi(e, t, a);
            }
        }
        function Hd(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Cr(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var a = 0; a < t.length; a++){
                    var s = t[a];
                    ft = s, $d(s, e);
                }
                Hd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)qd(e), e = e.sibling;
        }
        function qd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Cr(e), e.flags & 2048 && aa(9, e, e.return);
                    break;
                case 3:
                    Cr(e);
                    break;
                case 12:
                    Cr(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, el(e)) : Cr(e);
                    break;
                default:
                    Cr(e);
            }
        }
        function el(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var a = 0; a < t.length; a++){
                    var s = t[a];
                    ft = s, $d(s, e);
                }
                Hd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        aa(8, t, t.return), el(t);
                        break;
                    case 22:
                        a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, el(t));
                        break;
                    default:
                        el(t);
                }
                e = e.sibling;
            }
        }
        function $d(e, t) {
            for(; ft !== null;){
                var a = ft;
                switch(a.tag){
                    case 0:
                    case 11:
                    case 15:
                        aa(8, a, t);
                        break;
                    case 23:
                    case 22:
                        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                            var s = a.memoizedState.cachePool.pool;
                            s != null && s.refCount++;
                        }
                        break;
                    case 24:
                        hr(a.memoizedState.cache);
                }
                if (s = a.child, s !== null) s.return = a, ft = s;
                else e: for(a = e; ft !== null;){
                    s = ft;
                    var o = s.sibling, h = s.return;
                    if (jd(s), s === a) {
                        ft = null;
                        break e;
                    }
                    if (o !== null) {
                        o.return = h, ft = o;
                        break e;
                    }
                    ft = h;
                }
            }
        }
        var i0 = {
            getCacheForType: function(e) {
                var t = gt(it), a = t.data.get(e);
                return a === void 0 && (a = e(), t.data.set(e, a)), a;
            },
            cacheSignal: function() {
                return gt(it).controller.signal;
            }
        }, r0 = typeof WeakMap == "function" ? WeakMap : Map, Oe = 0, $e = null, be = null, _e = 0, Be = 0, Mt = null, ia = !1, vi = !1, Ou = !1, Ln = 0, Qe = 0, ra = 0, Ba = 0, ku = 0, Ht = 0, bi = 0, Or = null, kt = null, ju = !1, tl = 0, Id = 0, nl = 1 / 0, al = null, sa = null, ct = 0, la = null, wi = null, zn = 0, Uu = 0, Nu = null, Pd = null, kr = 0, Du = null;
        function qt() {
            return (Oe & 2) !== 0 && _e !== 0 ? _e & -_e : P.T !== null ? qu() : ih();
        }
        function Gd() {
            if (Ht === 0) if ((_e & 536870912) === 0 || Ee) {
                var e = hs;
                hs <<= 1, (hs & 3932160) === 0 && (hs = 262144), Ht = e;
            } else Ht = 536870912;
            return e = Lt.current, e !== null && (e.flags |= 32), Ht;
        }
        function jt(e, t, a) {
            (e === $e && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) && (_i(e, 0), oa(e, _e, Ht, !1)), Wi(e, a), ((Oe & 2) === 0 || e !== $e) && (e === $e && ((Oe & 2) === 0 && (Ba |= a), Qe === 4 && oa(e, _e, Ht, !1)), mn(e));
        }
        function Vd(e, t, a) {
            if ((Oe & 6) !== 0) throw Error(l(327));
            var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Fi(e, t), o = s ? o0(e, t) : Lu(e, t, !0), h = s;
            do {
                if (o === 0) {
                    vi && !s && oa(e, t, 0, !1);
                    break;
                } else {
                    if (a = e.current.alternate, h && !s0(a)) {
                        o = Lu(e, t, !1), h = !1;
                        continue;
                    }
                    if (o === 2) {
                        if (h = t, e.errorRecoveryDisabledLanes & h) var y = 0;
                        else y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                        if (y !== 0) {
                            t = y;
                            e: {
                                var w = e;
                                o = Or;
                                var R = w.current.memoizedState.isDehydrated;
                                if (R && (_i(w, y).flags |= 256), y = Lu(w, y, !1), y !== 2) {
                                    if (Ou && !R) {
                                        w.errorRecoveryDisabledLanes |= h, Ba |= h, o = 4;
                                        break e;
                                    }
                                    h = kt, kt = o, h !== null && (kt === null ? kt = h : kt.push.apply(kt, h));
                                }
                                o = y;
                            }
                            if (h = !1, o !== 2) continue;
                        }
                    }
                    if (o === 1) {
                        _i(e, 0), oa(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(s = e, h = o, h){
                            case 0:
                            case 1:
                                throw Error(l(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                oa(s, t, Ht, !ia);
                                break e;
                            case 2:
                                kt = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(l(329));
                        }
                        if ((t & 62914560) === t && (o = tl + 300 - St(), 10 < o)) {
                            if (oa(s, t, Ht, !ia), ds(s, 0, !0) !== 0) break e;
                            zn = t, s.timeoutHandle = Sp(Kd.bind(null, s, a, kt, al, ju, t, Ht, Ba, bi, ia, h, "Throttled", -0, 0), o);
                            break e;
                        }
                        Kd(s, a, kt, al, ju, t, Ht, Ba, bi, ia, h, null, -0, 0);
                    }
                }
                break;
            }while (!0);
            mn(e);
        }
        function Kd(e, t, a, s, o, h, y, w, R, z, V, J, M, $) {
            if (e.timeoutHandle = -1, J = t.subtreeFlags, J & 8192 || (J & 16785408) === 16785408) {
                J = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: Sn
                }, Md(t, h, J);
                var ne = (h & 62914560) === h ? tl - St() : (h & 4194048) === h ? Id - St() : 0;
                if (ne = G0(J, ne), ne !== null) {
                    zn = h, e.cancelPendingCommit = ne(ep.bind(null, e, t, h, a, s, o, y, w, R, V, J, null, M, $)), oa(e, h, y, !z);
                    return;
                }
            }
            ep(e, t, h, a, s, o, y, w, R);
        }
        function s0(e) {
            for(var t = e;;){
                var a = t.tag;
                if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for(var s = 0; s < a.length; s++){
                    var o = a[s], h = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Dt(h(), o)) return !1;
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
        function oa(e, t, a, s) {
            t &= ~ku, t &= ~Ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
            for(var o = t; 0 < o;){
                var h = 31 - ve(o), y = 1 << h;
                s[h] = -1, o &= ~y;
            }
            a !== 0 && th(e, a, t);
        }
        function il() {
            return (Oe & 6) === 0 ? (jr(0), !1) : !0;
        }
        function Bu() {
            if (be !== null) {
                if (Be === 0) var e = be.return;
                else e = be, xn = xa = null, Wo(e), hi = null, dr = 0, e = be;
                for(; e !== null;)Ed(e.alternate, e), e = e.return;
                be = null;
            }
        }
        function _i(e, t) {
            var a = e.timeoutHandle;
            a !== -1 && (e.timeoutHandle = -1, x0(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), zn = 0, Bu(), $e = e, be = a = Tn(e.current, null), _e = t, Be = 0, Mt = null, ia = !1, vi = Fi(e, t), Ou = !1, bi = Ht = ku = Ba = ra = Qe = 0, kt = Or = null, ju = !1, (t & 8) !== 0 && (t |= t & 32);
            var s = e.entangledLanes;
            if (s !== 0) for(e = e.entanglements, s &= t; 0 < s;){
                var o = 31 - ve(s), h = 1 << o;
                t |= e[o], s &= ~h;
            }
            return Ln = t, As(), a;
        }
        function Yd(e, t) {
            me = null, P.H = _r, t === ci || t === Ns ? (t = uf(), Be = 3) : t === Ho ? (t = uf(), Be = 4) : Be = t === du ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, be === null && (Qe = 1, Ys(e, Jt(t, e.current)));
        }
        function Xd() {
            var e = Lt.current;
            return e === null ? !0 : (_e & 4194048) === _e ? Zt === null : (_e & 62914560) === _e || (_e & 536870912) !== 0 ? e === Zt : !1;
        }
        function Jd() {
            var e = P.H;
            return P.H = _r, e === null ? _r : e;
        }
        function Fd() {
            var e = P.A;
            return P.A = i0, e;
        }
        function rl() {
            Qe = 4, ia || (_e & 4194048) !== _e && Lt.current !== null || (vi = !0), (ra & 134217727) === 0 && (Ba & 134217727) === 0 || $e === null || oa($e, _e, Ht, !1);
        }
        function Lu(e, t, a) {
            var s = Oe;
            Oe |= 2;
            var o = Jd(), h = Fd();
            ($e !== e || _e !== t) && (al = null, _i(e, t)), t = !1;
            var y = Qe;
            e: do try {
                if (Be !== 0 && be !== null) {
                    var w = be, R = Mt;
                    switch(Be){
                        case 8:
                            Bu(), y = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Lt.current === null && (t = !0);
                            var z = Be;
                            if (Be = 0, Mt = null, Si(e, w, R, z), a && vi) {
                                y = 0;
                                break e;
                            }
                            break;
                        default:
                            z = Be, Be = 0, Mt = null, Si(e, w, R, z);
                    }
                }
                l0(), y = Qe;
                break;
            } catch (V) {
                Yd(e, V);
            }
            while (!0);
            return t && e.shellSuspendCounter++, xn = xa = null, Oe = s, P.H = o, P.A = h, be === null && ($e = null, _e = 0, As()), y;
        }
        function l0() {
            for(; be !== null;)Wd(be);
        }
        function o0(e, t) {
            var a = Oe;
            Oe |= 2;
            var s = Jd(), o = Fd();
            $e !== e || _e !== t ? (al = null, nl = St() + 500, _i(e, t)) : vi = Fi(e, t);
            e: do try {
                if (Be !== 0 && be !== null) {
                    t = be;
                    var h = Mt;
                    t: switch(Be){
                        case 1:
                            Be = 0, Mt = null, Si(e, t, h, 1);
                            break;
                        case 2:
                        case 9:
                            if (lf(h)) {
                                Be = 0, Mt = null, Qd(t);
                                break;
                            }
                            t = function() {
                                Be !== 2 && Be !== 9 || $e !== e || (Be = 7), mn(e);
                            }, h.then(t, t);
                            break e;
                        case 3:
                            Be = 7;
                            break e;
                        case 4:
                            Be = 5;
                            break e;
                        case 7:
                            lf(h) ? (Be = 0, Mt = null, Qd(t)) : (Be = 0, Mt = null, Si(e, t, h, 7));
                            break;
                        case 5:
                            var y = null;
                            switch(be.tag){
                                case 26:
                                    y = be.memoizedState;
                                case 5:
                                case 27:
                                    var w = be;
                                    if (y ? zp(y) : w.stateNode.complete) {
                                        Be = 0, Mt = null;
                                        var R = w.sibling;
                                        if (R !== null) be = R;
                                        else {
                                            var z = w.return;
                                            z !== null ? (be = z, sl(z)) : be = null;
                                        }
                                        break t;
                                    }
                            }
                            Be = 0, Mt = null, Si(e, t, h, 5);
                            break;
                        case 6:
                            Be = 0, Mt = null, Si(e, t, h, 6);
                            break;
                        case 8:
                            Bu(), Qe = 6;
                            break e;
                        default:
                            throw Error(l(462));
                    }
                }
                u0();
                break;
            } catch (V) {
                Yd(e, V);
            }
            while (!0);
            return xn = xa = null, P.H = s, P.A = o, Oe = a, be !== null ? 0 : ($e = null, _e = 0, As(), Qe);
        }
        function u0() {
            for(; be !== null && !Vt();)Wd(be);
        }
        function Wd(e) {
            var t = _d(e.alternate, e, Ln);
            e.memoizedProps = e.pendingProps, t === null ? sl(e) : be = t;
        }
        function Qd(e) {
            var t = e, a = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = md(a, t, t.pendingProps, t.type, void 0, _e);
                    break;
                case 11:
                    t = md(a, t, t.pendingProps, t.type.render, t.ref, _e);
                    break;
                case 5:
                    Wo(t);
                default:
                    Ed(a, t), t = be = Jh(t, Ln), t = _d(a, t, Ln);
            }
            e.memoizedProps = e.pendingProps, t === null ? sl(e) : be = t;
        }
        function Si(e, t, a, s) {
            xn = xa = null, Wo(t), hi = null, dr = 0;
            var o = t.return;
            try {
                if (Wy(e, o, t, a, _e)) {
                    Qe = 1, Ys(e, Jt(a, e.current)), be = null;
                    return;
                }
            } catch (h) {
                if (o !== null) throw be = o, h;
                Qe = 1, Ys(e, Jt(a, e.current)), be = null;
                return;
            }
            t.flags & 32768 ? (Ee || s === 1 ? e = !0 : vi || (_e & 536870912) !== 0 ? e = !1 : (ia = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = Lt.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Zd(t, e)) : sl(t);
        }
        function sl(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Zd(t, ia);
                    return;
                }
                e = t.return;
                var a = e0(t.alternate, t, Ln);
                if (a !== null) {
                    be = a;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    be = t;
                    return;
                }
                be = t = e;
            }while (t !== null);
            Qe === 0 && (Qe = 5);
        }
        function Zd(e, t) {
            do {
                var a = t0(e.alternate, e);
                if (a !== null) {
                    a.flags &= 32767, be = a;
                    return;
                }
                if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
                    be = e;
                    return;
                }
                be = e = a;
            }while (e !== null);
            Qe = 6, be = null;
        }
        function ep(e, t, a, s, o, h, y, w, R) {
            e.cancelPendingCommit = null;
            do ll();
            while (ct !== 0);
            if ((Oe & 6) !== 0) throw Error(l(327));
            if (t !== null) {
                if (t === e.current) throw Error(l(177));
                if (h = t.lanes | t.childLanes, h |= To, Ig(e, a, h, y, w, R), e === $e && (be = $e = null, _e = 0), wi = t, la = e, zn = a, Uu = h, Nu = o, Pd = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, d0(p, function() {
                    return rp(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
                    s = P.T, P.T = null, o = W.p, W.p = 2, y = Oe, Oe |= 4;
                    try {
                        n0(e, t, a);
                    } finally{
                        Oe = y, W.p = o, P.T = s;
                    }
                }
                ct = 1, tp(), np(), ap();
            }
        }
        function tp() {
            if (ct === 1) {
                ct = 0;
                var e = la, t = wi, a = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || a) {
                    a = P.T, P.T = null;
                    var s = W.p;
                    W.p = 2;
                    var o = Oe;
                    Oe |= 4;
                    try {
                        Bd(t, e);
                        var h = Xu, y = qh(e.containerInfo), w = h.focusedElem, R = h.selectionRange;
                        if (y !== w && w && w.ownerDocument && Hh(w.ownerDocument.documentElement, w)) {
                            if (R !== null && bo(w)) {
                                var z = R.start, V = R.end;
                                if (V === void 0 && (V = z), "selectionStart" in w) w.selectionStart = z, w.selectionEnd = Math.min(V, w.value.length);
                                else {
                                    var J = w.ownerDocument || document, M = J && J.defaultView || window;
                                    if (M.getSelection) {
                                        var $ = M.getSelection(), ne = w.textContent.length, ce = Math.min(R.start, ne), He = R.end === void 0 ? ce : Math.min(R.end, ne);
                                        !$.extend && ce > He && (y = He, He = ce, ce = y);
                                        var N = Mh(w, ce), O = Mh(w, He);
                                        if (N && O && ($.rangeCount !== 1 || $.anchorNode !== N.node || $.anchorOffset !== N.offset || $.focusNode !== O.node || $.focusOffset !== O.offset)) {
                                            var L = J.createRange();
                                            L.setStart(N.node, N.offset), $.removeAllRanges(), ce > He ? ($.addRange(L), $.extend(O.node, O.offset)) : (L.setEnd(O.node, O.offset), $.addRange(L));
                                        }
                                    }
                                }
                            }
                            for(J = [], $ = w; $ = $.parentNode;)$.nodeType === 1 && J.push({
                                element: $,
                                left: $.scrollLeft,
                                top: $.scrollTop
                            });
                            for(typeof w.focus == "function" && w.focus(), w = 0; w < J.length; w++){
                                var X = J[w];
                                X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
                            }
                        }
                        bl = !!Yu, Xu = Yu = null;
                    } finally{
                        Oe = o, W.p = s, P.T = a;
                    }
                }
                e.current = t, ct = 2;
            }
        }
        function np() {
            if (ct === 2) {
                ct = 0;
                var e = la, t = wi, a = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || a) {
                    a = P.T, P.T = null;
                    var s = W.p;
                    W.p = 2;
                    var o = Oe;
                    Oe |= 4;
                    try {
                        kd(e, t.alternate, t);
                    } finally{
                        Oe = o, W.p = s, P.T = a;
                    }
                }
                ct = 3;
            }
        }
        function ap() {
            if (ct === 4 || ct === 3) {
                ct = 0, Ji();
                var e = la, t = wi, a = zn, s = Pd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ct = 5 : (ct = 0, wi = la = null, ip(e, e.pendingLanes));
                var o = e.pendingLanes;
                if (o === 0 && (sa = null), Zl(a), t = t.stateNode, ue && typeof ue.onCommitFiberRoot == "function") try {
                    ue.onCommitFiberRoot(Y, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (s !== null) {
                    t = P.T, o = W.p, W.p = 2, P.T = null;
                    try {
                        for(var h = e.onRecoverableError, y = 0; y < s.length; y++){
                            var w = s[y];
                            h(w.value, {
                                componentStack: w.stack
                            });
                        }
                    } finally{
                        P.T = t, W.p = o;
                    }
                }
                (zn & 3) !== 0 && ll(), mn(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Du ? kr++ : (kr = 0, Du = e) : kr = 0, jr(0);
            }
        }
        function ip(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hr(t)));
        }
        function ll() {
            return tp(), np(), ap(), rp();
        }
        function rp() {
            if (ct !== 5) return !1;
            var e = la, t = Uu;
            Uu = 0;
            var a = Zl(zn), s = P.T, o = W.p;
            try {
                W.p = 32 > a ? 32 : a, P.T = null, a = Nu, Nu = null;
                var h = la, y = zn;
                if (ct = 0, wi = la = null, zn = 0, (Oe & 6) !== 0) throw Error(l(331));
                var w = Oe;
                if (Oe |= 4, qd(h.current), zd(h, h.current, y, a), Oe = w, jr(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function") try {
                    ue.onPostCommitFiberRoot(Y, h);
                } catch  {}
                return !0;
            } finally{
                W.p = o, P.T = s, ip(e, t);
            }
        }
        function sp(e, t, a) {
            t = Jt(a, t), t = fu(e.stateNode, t, 2), e = ea(e, t, 2), e !== null && (Wi(e, 2), mn(e));
        }
        function Le(e, t, a) {
            if (e.tag === 3) sp(e, e, a);
            else for(; t !== null;){
                if (t.tag === 3) {
                    sp(t, e, a);
                    break;
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (sa === null || !sa.has(s))) {
                        e = Jt(a, e), a = ld(2), s = ea(t, a, 2), s !== null && (od(a, s, t, e), Wi(s, 2), mn(s));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function zu(e, t, a) {
            var s = e.pingCache;
            if (s === null) {
                s = e.pingCache = new r0;
                var o = new Set;
                s.set(t, o);
            } else o = s.get(t), o === void 0 && (o = new Set, s.set(t, o));
            o.has(a) || (Ou = !0, o.add(a), e = c0.bind(null, e, t, a), t.then(e, e));
        }
        function c0(e, t, a) {
            var s = e.pingCache;
            s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, $e === e && (_e & a) === a && (Qe === 4 || Qe === 3 && (_e & 62914560) === _e && 300 > St() - tl ? (Oe & 2) === 0 && _i(e, 0) : ku |= a, bi === _e && (bi = 0)), mn(e);
        }
        function lp(e, t) {
            t === 0 && (t = eh()), e = Ea(e, t), e !== null && (Wi(e, t), mn(e));
        }
        function h0(e) {
            var t = e.memoizedState, a = 0;
            t !== null && (a = t.retryLane), lp(e, a);
        }
        function f0(e, t) {
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
            s !== null && s.delete(t), lp(e, a);
        }
        function d0(e, t) {
            return Pa(e, t);
        }
        var ol = null, Ei = null, Mu = !1, ul = !1, Hu = !1, ua = 0;
        function mn(e) {
            e !== Ei && e.next === null && (Ei === null ? ol = Ei = e : Ei = Ei.next = e), ul = !0, Mu || (Mu = !0, m0());
        }
        function jr(e, t) {
            if (!Hu && ul) {
                Hu = !0;
                do for(var a = !1, s = ol; s !== null;){
                    if (e !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0) var h = 0;
                        else {
                            var y = s.suspendedLanes, w = s.pingedLanes;
                            h = (1 << 31 - ve(42 | e) + 1) - 1, h &= o & ~(y & ~w), h = h & 201326741 ? h & 201326741 | 1 : h ? h | 2 : 0;
                        }
                        h !== 0 && (a = !0, hp(s, h));
                    } else h = _e, h = ds(s, s === $e ? h : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (h & 3) === 0 || Fi(s, h) || (a = !0, hp(s, h));
                    s = s.next;
                }
                while (a);
                Hu = !1;
            }
        }
        function p0() {
            op();
        }
        function op() {
            ul = Mu = !1;
            var e = 0;
            ua !== 0 && A0() && (e = ua);
            for(var t = St(), a = null, s = ol; s !== null;){
                var o = s.next, h = up(s, t);
                h === 0 ? (s.next = null, a === null ? ol = o : a.next = o, o === null && (Ei = a)) : (a = s, (e !== 0 || (h & 3) !== 0) && (ul = !0)), s = o;
            }
            ct !== 0 && ct !== 5 || jr(e), ua !== 0 && (ua = 0);
        }
        function up(e, t) {
            for(var a = e.suspendedLanes, s = e.pingedLanes, o = e.expirationTimes, h = e.pendingLanes & -62914561; 0 < h;){
                var y = 31 - ve(h), w = 1 << y, R = o[y];
                R === -1 ? ((w & a) === 0 || (w & s) !== 0) && (o[y] = $g(w, t)) : R <= t && (e.expiredLanes |= w), h &= ~w;
            }
            if (t = $e, a = _e, a = ds(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, a === 0 || e === t && (Be === 2 || Be === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && Vn(s), e.callbackNode = null, e.callbackPriority = 0;
            if ((a & 3) === 0 || Fi(e, a)) {
                if (t = a & -a, t === e.callbackPriority) return t;
                switch(s !== null && Vn(s), Zl(a)){
                    case 2:
                    case 8:
                        a = _;
                        break;
                    case 32:
                        a = p;
                        break;
                    case 268435456:
                        a = E;
                        break;
                    default:
                        a = p;
                }
                return s = cp.bind(null, e), a = Pa(a, s), e.callbackPriority = t, e.callbackNode = a, t;
            }
            return s !== null && s !== null && Vn(s), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function cp(e, t) {
            if (ct !== 0 && ct !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var a = e.callbackNode;
            if (ll() && e.callbackNode !== a) return null;
            var s = _e;
            return s = ds(e, e === $e ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (Vd(e, s, t), up(e, St()), e.callbackNode != null && e.callbackNode === a ? cp.bind(null, e) : null);
        }
        function hp(e, t) {
            if (ll()) return null;
            Vd(e, t, !0);
        }
        function m0() {
            R0(function() {
                (Oe & 6) !== 0 ? Pa(us, p0) : op();
            });
        }
        function qu() {
            if (ua === 0) {
                var e = oi;
                e === 0 && (e = cs, cs <<= 1, (cs & 261888) === 0 && (cs = 256)), ua = e;
            }
            return ua;
        }
        function fp(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ys("" + e);
        }
        function dp(e, t) {
            var a = t.ownerDocument.createElement("input");
            return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
        }
        function g0(e, t, a, s, o) {
            if (t === "submit" && a && a.stateNode === o) {
                var h = fp((o[At] || null).action), y = s.submitter;
                y && (t = (t = y[At] || null) ? fp(t.formAction) : y.getAttribute("formAction"), t !== null && (h = t, y = null));
                var w = new _s("action", "action", null, s, o);
                e.push({
                    event: w,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (s.defaultPrevented) {
                                    if (ua !== 0) {
                                        var R = y ? dp(o, y) : new FormData(o);
                                        su(a, {
                                            pending: !0,
                                            data: R,
                                            method: o.method,
                                            action: h
                                        }, null, R);
                                    }
                                } else typeof h == "function" && (w.preventDefault(), R = y ? dp(o, y) : new FormData(o), su(a, {
                                    pending: !0,
                                    data: R,
                                    method: o.method,
                                    action: h
                                }, h, R));
                            },
                            currentTarget: o
                        }
                    ]
                });
            }
        }
        for(var $u = 0; $u < Eo.length; $u++){
            var Iu = Eo[$u], y0 = Iu.toLowerCase(), v0 = Iu[0].toUpperCase() + Iu.slice(1);
            an(y0, "on" + v0);
        }
        an(Ph, "onAnimationEnd"), an(Gh, "onAnimationIteration"), an(Vh, "onAnimationStart"), an("dblclick", "onDoubleClick"), an("focusin", "onFocus"), an("focusout", "onBlur"), an(Dy, "onTransitionRun"), an(By, "onTransitionStart"), an(Ly, "onTransitionCancel"), an(Kh, "onTransitionEnd"), Xa("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), Xa("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), Xa("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), Xa("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), ba("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ba("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ba("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), ba("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ba("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ba("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), b0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ur));
        function pp(e, t) {
            t = (t & 4) !== 0;
            for(var a = 0; a < e.length; a++){
                var s = e[a], o = s.event;
                s = s.listeners;
                e: {
                    var h = void 0;
                    if (t) for(var y = s.length - 1; 0 <= y; y--){
                        var w = s[y], R = w.instance, z = w.currentTarget;
                        if (w = w.listener, R !== h && o.isPropagationStopped()) break e;
                        h = w, o.currentTarget = z;
                        try {
                            h(o);
                        } catch (V) {
                            Ts(V);
                        }
                        o.currentTarget = null, h = R;
                    }
                    else for(y = 0; y < s.length; y++){
                        if (w = s[y], R = w.instance, z = w.currentTarget, w = w.listener, R !== h && o.isPropagationStopped()) break e;
                        h = w, o.currentTarget = z;
                        try {
                            h(o);
                        } catch (V) {
                            Ts(V);
                        }
                        o.currentTarget = null, h = R;
                    }
                }
            }
        }
        function we(e, t) {
            var a = t[eo];
            a === void 0 && (a = t[eo] = new Set);
            var s = e + "__bubble";
            a.has(s) || (mp(t, e, 2, !1), a.add(s));
        }
        function Pu(e, t, a) {
            var s = 0;
            t && (s |= 4), mp(a, e, s, t);
        }
        var cl = "_reactListening" + Math.random().toString(36).slice(2);
        function Gu(e) {
            if (!e[cl]) {
                e[cl] = !0, lh.forEach(function(a) {
                    a !== "selectionchange" && (b0.has(a) || Pu(a, !1, e), Pu(a, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[cl] || (t[cl] = !0, Pu("selectionchange", !1, t));
            }
        }
        function mp(e, t, a, s) {
            switch(Gp(t)){
                case 2:
                    var o = Y0;
                    break;
                case 8:
                    o = X0;
                    break;
                default:
                    o = rc;
            }
            a = o.bind(null, t, a, e), o = void 0, !uo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), s ? o !== void 0 ? e.addEventListener(t, a, {
                capture: !0,
                passive: o
            }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
                passive: o
            }) : e.addEventListener(t, a, !1);
        }
        function Vu(e, t, a, s, o) {
            var h = s;
            if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for(;;){
                if (s === null) return;
                var y = s.tag;
                if (y === 3 || y === 4) {
                    var w = s.stateNode.containerInfo;
                    if (w === o) break;
                    if (y === 4) for(y = s.return; y !== null;){
                        var R = y.tag;
                        if ((R === 3 || R === 4) && y.stateNode.containerInfo === o) return;
                        y = y.return;
                    }
                    for(; w !== null;){
                        if (y = Va(w), y === null) return;
                        if (R = y.tag, R === 5 || R === 6 || R === 26 || R === 27) {
                            s = h = y;
                            continue e;
                        }
                        w = w.parentNode;
                    }
                }
                s = s.return;
            }
            bh(function() {
                var z = h, V = lo(a), J = [];
                e: {
                    var M = Yh.get(e);
                    if (M !== void 0) {
                        var $ = _s, ne = e;
                        switch(e){
                            case "keypress":
                                if (bs(a) === 0) break e;
                            case "keydown":
                            case "keyup":
                                $ = fy;
                                break;
                            case "focusin":
                                ne = "focus", $ = po;
                                break;
                            case "focusout":
                                ne = "blur", $ = po;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                $ = po;
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
                                $ = Sh;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                $ = ey;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                $ = my;
                                break;
                            case Ph:
                            case Gh:
                            case Vh:
                                $ = ay;
                                break;
                            case Kh:
                                $ = yy;
                                break;
                            case "scroll":
                            case "scrollend":
                                $ = Qg;
                                break;
                            case "wheel":
                                $ = by;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                $ = ry;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                $ = Th;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                $ = _y;
                        }
                        var ce = (t & 4) !== 0, He = !ce && (e === "scroll" || e === "scrollend"), N = ce ? M !== null ? M + "Capture" : null : M;
                        ce = [];
                        for(var O = z, L; O !== null;){
                            var X = O;
                            if (L = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || L === null || N === null || (X = er(O, N), X != null && ce.push(Nr(O, X, L))), He) break;
                            O = O.return;
                        }
                        0 < ce.length && (M = new $(M, ne, null, a, V), J.push({
                            event: M,
                            listeners: ce
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (M = e === "mouseover" || e === "pointerover", $ = e === "mouseout" || e === "pointerout", M && a !== so && (ne = a.relatedTarget || a.fromElement) && (Va(ne) || ne[Ga])) break e;
                        if (($ || M) && (M = V.window === V ? V : (M = V.ownerDocument) ? M.defaultView || M.parentWindow : window, $ ? (ne = a.relatedTarget || a.toElement, $ = z, ne = ne ? Va(ne) : null, ne !== null && (He = c(ne), ce = ne.tag, ne !== He || ce !== 5 && ce !== 27 && ce !== 6) && (ne = null)) : ($ = null, ne = z), $ !== ne)) {
                            if (ce = Sh, X = "onMouseLeave", N = "onMouseEnter", O = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Th, X = "onPointerLeave", N = "onPointerEnter", O = "pointer"), He = $ == null ? M : Zi($), L = ne == null ? M : Zi(ne), M = new ce(X, O + "leave", $, a, V), M.target = He, M.relatedTarget = L, X = null, Va(V) === z && (ce = new ce(N, O + "enter", ne, a, V), ce.target = L, ce.relatedTarget = He, X = ce), He = X, $ && ne) t: {
                                for(ce = w0, N = $, O = ne, L = 0, X = N; X; X = ce(X))L++;
                                X = 0;
                                for(var re = O; re; re = ce(re))X++;
                                for(; 0 < L - X;)N = ce(N), L--;
                                for(; 0 < X - L;)O = ce(O), X--;
                                for(; L--;){
                                    if (N === O || O !== null && N === O.alternate) {
                                        ce = N;
                                        break t;
                                    }
                                    N = ce(N), O = ce(O);
                                }
                                ce = null;
                            }
                            else ce = null;
                            $ !== null && gp(J, M, $, ce, !1), ne !== null && He !== null && gp(J, He, ne, ce, !0);
                        }
                    }
                    e: {
                        if (M = z ? Zi(z) : window, $ = M.nodeName && M.nodeName.toLowerCase(), $ === "select" || $ === "input" && M.type === "file") var xe = Uh;
                        else if (kh(M)) if (Nh) xe = jy;
                        else {
                            xe = Oy;
                            var ie = Cy;
                        }
                        else $ = M.nodeName, !$ || $.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? z && ro(z.elementType) && (xe = Uh) : xe = ky;
                        if (xe && (xe = xe(e, z))) {
                            jh(J, xe, a, V);
                            break e;
                        }
                        ie && ie(e, M, z), e === "focusout" && z && M.type === "number" && z.memoizedProps.value != null && io(M, "number", M.value);
                    }
                    switch(ie = z ? Zi(z) : window, e){
                        case "focusin":
                            (kh(ie) || ie.contentEditable === "true") && (ei = ie, wo = z, or = null);
                            break;
                        case "focusout":
                            or = wo = ei = null;
                            break;
                        case "mousedown":
                            _o = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            _o = !1, $h(J, a, V);
                            break;
                        case "selectionchange":
                            if (Ny) break;
                        case "keydown":
                        case "keyup":
                            $h(J, a, V);
                    }
                    var ge;
                    if (go) e: {
                        switch(e){
                            case "compositionstart":
                                var Se = "onCompositionStart";
                                break e;
                            case "compositionend":
                                Se = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                Se = "onCompositionUpdate";
                                break e;
                        }
                        Se = void 0;
                    }
                    else Za ? Ch(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
                    Se && (Ah && a.locale !== "ko" && (Za || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && Za && (ge = wh()) : (Yn = V, co = "value" in Yn ? Yn.value : Yn.textContent, Za = !0)), ie = hl(z, Se), 0 < ie.length && (Se = new Eh(Se, e, null, a, V), J.push({
                        event: Se,
                        listeners: ie
                    }), ge ? Se.data = ge : (ge = Oh(a), ge !== null && (Se.data = ge)))), (ge = Ey ? Ty(e, a) : Ay(e, a)) && (Se = hl(z, "onBeforeInput"), 0 < Se.length && (ie = new Eh("onBeforeInput", "beforeinput", null, a, V), J.push({
                        event: ie,
                        listeners: Se
                    }), ie.data = ge)), g0(J, e, z, a, V);
                }
                pp(J, t);
            });
        }
        function Nr(e, t, a) {
            return {
                instance: e,
                listener: t,
                currentTarget: a
            };
        }
        function hl(e, t) {
            for(var a = t + "Capture", s = []; e !== null;){
                var o = e, h = o.stateNode;
                if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || h === null || (o = er(e, a), o != null && s.unshift(Nr(e, o, h)), o = er(e, t), o != null && s.push(Nr(e, o, h))), e.tag === 3) return s;
                e = e.return;
            }
            return [];
        }
        function w0(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function gp(e, t, a, s, o) {
            for(var h = t._reactName, y = []; a !== null && a !== s;){
                var w = a, R = w.alternate, z = w.stateNode;
                if (w = w.tag, R !== null && R === s) break;
                w !== 5 && w !== 26 && w !== 27 || z === null || (R = z, o ? (z = er(a, h), z != null && y.unshift(Nr(a, z, R))) : o || (z = er(a, h), z != null && y.push(Nr(a, z, R)))), a = a.return;
            }
            y.length !== 0 && e.push({
                event: t,
                listeners: y
            });
        }
        var _0 = /\r\n?/g, S0 = /\u0000|\uFFFD/g;
        function yp(e) {
            return (typeof e == "string" ? e : "" + e).replace(_0, `
`).replace(S0, "");
        }
        function vp(e, t) {
            return t = yp(t), yp(e) === t;
        }
        function Me(e, t, a, s, o, h) {
            switch(a){
                case "children":
                    typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Fa(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Fa(e, "" + s);
                    break;
                case "className":
                    ms(e, "class", s);
                    break;
                case "tabIndex":
                    ms(e, "tabindex", s);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    ms(e, a, s);
                    break;
                case "style":
                    yh(e, s, h);
                    break;
                case "data":
                    if (t !== "object") {
                        ms(e, "data", s);
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
                    s = ys("" + s), e.setAttribute(a, s);
                    break;
                case "action":
                case "formAction":
                    if (typeof s == "function") {
                        e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof h == "function" && (a === "formAction" ? (t !== "input" && Me(e, t, "name", o.name, o, null), Me(e, t, "formEncType", o.formEncType, o, null), Me(e, t, "formMethod", o.formMethod, o, null), Me(e, t, "formTarget", o.formTarget, o, null)) : (Me(e, t, "encType", o.encType, o, null), Me(e, t, "method", o.method, o, null), Me(e, t, "target", o.target, o, null)));
                    if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                        e.removeAttribute(a);
                        break;
                    }
                    s = ys("" + s), e.setAttribute(a, s);
                    break;
                case "onClick":
                    s != null && (e.onclick = Sn);
                    break;
                case "onScroll":
                    s != null && we("scroll", e);
                    break;
                case "onScrollEnd":
                    s != null && we("scrollend", e);
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
                    a = ys("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
                    we("beforetoggle", e), we("toggle", e), ps(e, "popover", s);
                    break;
                case "xlinkActuate":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                    break;
                case "xlinkArcrole":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                    break;
                case "xlinkRole":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
                    break;
                case "xlinkShow":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
                    break;
                case "xlinkTitle":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
                    break;
                case "xlinkType":
                    _n(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
                    break;
                case "xmlBase":
                    _n(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                    break;
                case "xmlLang":
                    _n(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                    break;
                case "xmlSpace":
                    _n(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                    break;
                case "is":
                    ps(e, "is", s);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Fg.get(a) || a, ps(e, a, s));
            }
        }
        function Ku(e, t, a, s, o, h) {
            switch(a){
                case "style":
                    yh(e, s, h);
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
                    typeof s == "string" ? Fa(e, s) : (typeof s == "number" || typeof s == "bigint") && Fa(e, "" + s);
                    break;
                case "onScroll":
                    s != null && we("scroll", e);
                    break;
                case "onScrollEnd":
                    s != null && we("scrollend", e);
                    break;
                case "onClick":
                    s != null && (e.onclick = Sn);
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
                    if (!oh.hasOwnProperty(a)) e: {
                        if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), h = e[At] || null, h = h != null ? h[a] : null, typeof h == "function" && e.removeEventListener(t, h, o), typeof s == "function")) {
                            typeof h != "function" && h !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, o);
                            break e;
                        }
                        a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : ps(e, a, s);
                    }
            }
        }
        function vt(e, t, a) {
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
                    we("error", e), we("load", e);
                    var s = !1, o = !1, h;
                    for(h in a)if (a.hasOwnProperty(h)) {
                        var y = a[h];
                        if (y != null) switch(h){
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
                                Me(e, t, h, y, a, null);
                        }
                    }
                    o && Me(e, t, "srcSet", a.srcSet, a, null), s && Me(e, t, "src", a.src, a, null);
                    return;
                case "input":
                    we("invalid", e);
                    var w = h = y = o = null, R = null, z = null;
                    for(s in a)if (a.hasOwnProperty(s)) {
                        var V = a[s];
                        if (V != null) switch(s){
                            case "name":
                                o = V;
                                break;
                            case "type":
                                y = V;
                                break;
                            case "checked":
                                R = V;
                                break;
                            case "defaultChecked":
                                z = V;
                                break;
                            case "value":
                                h = V;
                                break;
                            case "defaultValue":
                                w = V;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (V != null) throw Error(l(137, t));
                                break;
                            default:
                                Me(e, t, s, V, a, null);
                        }
                    }
                    dh(e, h, w, R, z, y, o, !1);
                    return;
                case "select":
                    we("invalid", e), s = y = h = null;
                    for(o in a)if (a.hasOwnProperty(o) && (w = a[o], w != null)) switch(o){
                        case "value":
                            h = w;
                            break;
                        case "defaultValue":
                            y = w;
                            break;
                        case "multiple":
                            s = w;
                        default:
                            Me(e, t, o, w, a, null);
                    }
                    t = h, a = y, e.multiple = !!s, t != null ? Ja(e, !!s, t, !1) : a != null && Ja(e, !!s, a, !0);
                    return;
                case "textarea":
                    we("invalid", e), h = o = s = null;
                    for(y in a)if (a.hasOwnProperty(y) && (w = a[y], w != null)) switch(y){
                        case "value":
                            s = w;
                            break;
                        case "defaultValue":
                            o = w;
                            break;
                        case "children":
                            h = w;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (w != null) throw Error(l(91));
                            break;
                        default:
                            Me(e, t, y, w, a, null);
                    }
                    mh(e, s, o, h);
                    return;
                case "option":
                    for(R in a)a.hasOwnProperty(R) && (s = a[R], s != null) && (R === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Me(e, t, R, s, a, null));
                    return;
                case "dialog":
                    we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
                    break;
                case "iframe":
                case "object":
                    we("load", e);
                    break;
                case "video":
                case "audio":
                    for(s = 0; s < Ur.length; s++)we(Ur[s], e);
                    break;
                case "image":
                    we("error", e), we("load", e);
                    break;
                case "details":
                    we("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    we("error", e), we("load", e);
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
                    for(z in a)if (a.hasOwnProperty(z) && (s = a[z], s != null)) switch(z){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(l(137, t));
                        default:
                            Me(e, t, z, s, a, null);
                    }
                    return;
                default:
                    if (ro(t)) {
                        for(V in a)a.hasOwnProperty(V) && (s = a[V], s !== void 0 && Ku(e, t, V, s, a, void 0));
                        return;
                    }
            }
            for(w in a)a.hasOwnProperty(w) && (s = a[w], s != null && Me(e, t, w, s, a, null));
        }
        function E0(e, t, a, s) {
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
                    var o = null, h = null, y = null, w = null, R = null, z = null, V = null;
                    for($ in a){
                        var J = a[$];
                        if (a.hasOwnProperty($) && J != null) switch($){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                R = J;
                            default:
                                s.hasOwnProperty($) || Me(e, t, $, null, s, J);
                        }
                    }
                    for(var M in s){
                        var $ = s[M];
                        if (J = a[M], s.hasOwnProperty(M) && ($ != null || J != null)) switch(M){
                            case "type":
                                h = $;
                                break;
                            case "name":
                                o = $;
                                break;
                            case "checked":
                                z = $;
                                break;
                            case "defaultChecked":
                                V = $;
                                break;
                            case "value":
                                y = $;
                                break;
                            case "defaultValue":
                                w = $;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if ($ != null) throw Error(l(137, t));
                                break;
                            default:
                                $ !== J && Me(e, t, M, $, s, J);
                        }
                    }
                    ao(e, y, w, R, z, V, h, o);
                    return;
                case "select":
                    $ = y = w = M = null;
                    for(h in a)if (R = a[h], a.hasOwnProperty(h) && R != null) switch(h){
                        case "value":
                            break;
                        case "multiple":
                            $ = R;
                        default:
                            s.hasOwnProperty(h) || Me(e, t, h, null, s, R);
                    }
                    for(o in s)if (h = s[o], R = a[o], s.hasOwnProperty(o) && (h != null || R != null)) switch(o){
                        case "value":
                            M = h;
                            break;
                        case "defaultValue":
                            w = h;
                            break;
                        case "multiple":
                            y = h;
                        default:
                            h !== R && Me(e, t, o, h, s, R);
                    }
                    t = w, a = y, s = $, M != null ? Ja(e, !!a, M, !1) : !!s != !!a && (t != null ? Ja(e, !!a, t, !0) : Ja(e, !!a, a ? [] : "", !1));
                    return;
                case "textarea":
                    $ = M = null;
                    for(w in a)if (o = a[w], a.hasOwnProperty(w) && o != null && !s.hasOwnProperty(w)) switch(w){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Me(e, t, w, null, s, o);
                    }
                    for(y in s)if (o = s[y], h = a[y], s.hasOwnProperty(y) && (o != null || h != null)) switch(y){
                        case "value":
                            M = o;
                            break;
                        case "defaultValue":
                            $ = o;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(l(91));
                            break;
                        default:
                            o !== h && Me(e, t, y, o, s, h);
                    }
                    ph(e, M, $);
                    return;
                case "option":
                    for(var ne in a)M = a[ne], a.hasOwnProperty(ne) && M != null && !s.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : Me(e, t, ne, null, s, M));
                    for(R in s)M = s[R], $ = a[R], s.hasOwnProperty(R) && M !== $ && (M != null || $ != null) && (R === "selected" ? e.selected = M && typeof M != "function" && typeof M != "symbol" : Me(e, t, R, M, s, $));
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
                    for(var ce in a)M = a[ce], a.hasOwnProperty(ce) && M != null && !s.hasOwnProperty(ce) && Me(e, t, ce, null, s, M);
                    for(z in s)if (M = s[z], $ = a[z], s.hasOwnProperty(z) && M !== $ && (M != null || $ != null)) switch(z){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(l(137, t));
                            break;
                        default:
                            Me(e, t, z, M, s, $);
                    }
                    return;
                default:
                    if (ro(t)) {
                        for(var He in a)M = a[He], a.hasOwnProperty(He) && M !== void 0 && !s.hasOwnProperty(He) && Ku(e, t, He, void 0, s, M);
                        for(V in s)M = s[V], $ = a[V], !s.hasOwnProperty(V) || M === $ || M === void 0 && $ === void 0 || Ku(e, t, V, M, s, $);
                        return;
                    }
            }
            for(var N in a)M = a[N], a.hasOwnProperty(N) && M != null && !s.hasOwnProperty(N) && Me(e, t, N, null, s, M);
            for(J in s)M = s[J], $ = a[J], !s.hasOwnProperty(J) || M === $ || M == null && $ == null || Me(e, t, J, M, s, $);
        }
        function bp(e) {
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
        function T0() {
            if (typeof performance.getEntriesByType == "function") {
                for(var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++){
                    var o = a[s], h = o.transferSize, y = o.initiatorType, w = o.duration;
                    if (h && w && bp(y)) {
                        for(y = 0, w = o.responseEnd, s += 1; s < a.length; s++){
                            var R = a[s], z = R.startTime;
                            if (z > w) break;
                            var V = R.transferSize, J = R.initiatorType;
                            V && bp(J) && (R = R.responseEnd, y += V * (R < w ? 1 : (w - z) / (R - z)));
                        }
                        if (--s, t += 8 * (h + y) / (o.duration / 1e3), e++, 10 < e) break;
                    }
                }
                if (0 < e) return t / e / 1e6;
            }
            return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var Yu = null, Xu = null;
        function fl(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function wp(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function _p(e, t) {
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
        function Ju(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Fu = null;
        function A0() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Fu ? !1 : (Fu = e, !0) : (Fu = null, !1);
        }
        var Sp = typeof setTimeout == "function" ? setTimeout : void 0, x0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ep = typeof Promise == "function" ? Promise : void 0, R0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(e) {
            return Ep.resolve(null).then(e).catch(C0);
        } : Sp;
        function C0(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function ca(e) {
            return e === "head";
        }
        function Tp(e, t) {
            var a = t, s = 0;
            do {
                var o = a.nextSibling;
                if (e.removeChild(a), o && o.nodeType === 8) if (a = o.data, a === "/$" || a === "/&") {
                    if (s === 0) {
                        e.removeChild(o), Ri(t);
                        return;
                    }
                    s--;
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") s++;
                else if (a === "html") Dr(e.ownerDocument.documentElement);
                else if (a === "head") {
                    a = e.ownerDocument.head, Dr(a);
                    for(var h = a.firstChild; h;){
                        var y = h.nextSibling, w = h.nodeName;
                        h[Qi] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && h.rel.toLowerCase() === "stylesheet" || a.removeChild(h), h = y;
                    }
                } else a === "body" && Dr(e.ownerDocument.body);
                a = o;
            }while (a);
            Ri(t);
        }
        function Ap(e, t) {
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
        function Wu(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var a = t;
                switch(t = t.nextSibling, a.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Wu(a), to(a);
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
        function O0(e, t, a, s) {
            for(; e.nodeType === 1;){
                var o = a;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (s) {
                    if (!e[Qi]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (h = e.getAttribute("rel"), h === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (h !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (h = e.getAttribute("src"), (h !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && h && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var h = o.name == null ? null : "" + o.name;
                    if (o.type === "hidden" && e.getAttribute("name") === h) return e;
                } else return e;
                if (e = en(e.nextSibling), e === null) break;
            }
            return null;
        }
        function k0(e, t, a) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = en(e.nextSibling), e === null)) return null;
            return e;
        }
        function xp(e, t) {
            for(; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = en(e.nextSibling), e === null)) return null;
            return e;
        }
        function Qu(e) {
            return e.data === "$?" || e.data === "$~";
        }
        function Zu(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function j0(e, t) {
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
        function en(e) {
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
        var ec = null;
        function Rp(e) {
            e = e.nextSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var a = e.data;
                    if (a === "/$" || a === "/&") {
                        if (t === 0) return en(e.nextSibling);
                        t--;
                    } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
                }
                e = e.nextSibling;
            }
            return null;
        }
        function Cp(e) {
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
        function Op(e, t, a) {
            switch(t = fl(a), e){
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
        function Dr(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            to(e);
        }
        var tn = new Map, kp = new Set;
        function dl(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Mn = W.d;
        W.d = {
            f: U0,
            r: N0,
            D: D0,
            C: B0,
            L: L0,
            m: z0,
            X: H0,
            S: M0,
            M: q0
        };
        function U0() {
            var e = Mn.f(), t = il();
            return e || t;
        }
        function N0(e) {
            var t = Ka(e);
            t !== null && t.tag === 5 && t.type === "form" ? Yf(t) : Mn.r(e);
        }
        var Ti = typeof document > "u" ? null : document;
        function jp(e, t, a) {
            var s = Ti;
            if (s && typeof t == "string" && t) {
                var o = Yt(t);
                o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), kp.has(o) || (kp.add(o), e = {
                    rel: e,
                    crossOrigin: a,
                    href: t
                }, s.querySelector(o) === null && (t = s.createElement("link"), vt(t, "link", e), ht(t), s.head.appendChild(t)));
            }
        }
        function D0(e) {
            Mn.D(e), jp("dns-prefetch", e, null);
        }
        function B0(e, t) {
            Mn.C(e, t), jp("preconnect", e, t);
        }
        function L0(e, t, a) {
            Mn.L(e, t, a);
            var s = Ti;
            if (s && e && t) {
                var o = 'link[rel="preload"][as="' + Yt(t) + '"]';
                t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Yt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Yt(a.imageSizes) + '"]')) : o += '[href="' + Yt(e) + '"]';
                var h = o;
                switch(t){
                    case "style":
                        h = Ai(e);
                        break;
                    case "script":
                        h = xi(e);
                }
                tn.has(h) || (e = b({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                    as: t
                }, a), tn.set(h, e), s.querySelector(o) !== null || t === "style" && s.querySelector(Br(h)) || t === "script" && s.querySelector(Lr(h)) || (t = s.createElement("link"), vt(t, "link", e), ht(t), s.head.appendChild(t)));
            }
        }
        function z0(e, t) {
            Mn.m(e, t);
            var a = Ti;
            if (a && e) {
                var s = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Yt(s) + '"][href="' + Yt(e) + '"]', h = o;
                switch(s){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        h = xi(e);
                }
                if (!tn.has(h) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), tn.set(h, e), a.querySelector(o) === null)) {
                    switch(s){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (a.querySelector(Lr(h))) return;
                    }
                    s = a.createElement("link"), vt(s, "link", e), ht(s), a.head.appendChild(s);
                }
            }
        }
        function M0(e, t, a) {
            Mn.S(e, t, a);
            var s = Ti;
            if (s && e) {
                var o = Ya(s).hoistableStyles, h = Ai(e);
                t = t || "default";
                var y = o.get(h);
                if (!y) {
                    var w = {
                        loading: 0,
                        preload: null
                    };
                    if (y = s.querySelector(Br(h))) w.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, a), (a = tn.get(h)) && tc(e, a);
                        var R = y = s.createElement("link");
                        ht(R), vt(R, "link", e), R._p = new Promise(function(z, V) {
                            R.onload = z, R.onerror = V;
                        }), R.addEventListener("load", function() {
                            w.loading |= 1;
                        }), R.addEventListener("error", function() {
                            w.loading |= 2;
                        }), w.loading |= 4, pl(y, t, s);
                    }
                    y = {
                        type: "stylesheet",
                        instance: y,
                        count: 1,
                        state: w
                    }, o.set(h, y);
                }
            }
        }
        function H0(e, t) {
            Mn.X(e, t);
            var a = Ti;
            if (a && e) {
                var s = Ya(a).hoistableScripts, o = xi(e), h = s.get(o);
                h || (h = a.querySelector(Lr(o)), h || (e = b({
                    src: e,
                    async: !0
                }, t), (t = tn.get(o)) && nc(e, t), h = a.createElement("script"), ht(h), vt(h, "link", e), a.head.appendChild(h)), h = {
                    type: "script",
                    instance: h,
                    count: 1,
                    state: null
                }, s.set(o, h));
            }
        }
        function q0(e, t) {
            Mn.M(e, t);
            var a = Ti;
            if (a && e) {
                var s = Ya(a).hoistableScripts, o = xi(e), h = s.get(o);
                h || (h = a.querySelector(Lr(o)), h || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = tn.get(o)) && nc(e, t), h = a.createElement("script"), ht(h), vt(h, "link", e), a.head.appendChild(h)), h = {
                    type: "script",
                    instance: h,
                    count: 1,
                    state: null
                }, s.set(o, h));
            }
        }
        function Up(e, t, a, s) {
            var o = (o = ye.current) ? dl(o) : null;
            if (!o) throw Error(l(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ai(a.href), a = Ya(o).hoistableStyles, s = a.get(t), s || (s = {
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
                        e = Ai(a.href);
                        var h = Ya(o).hoistableStyles, y = h.get(e);
                        if (y || (o = o.ownerDocument || o, y = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, h.set(e, y), (h = o.querySelector(Br(e))) && !h._p && (y.instance = h, y.state.loading = 5), tn.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, tn.set(e, a), h || $0(o, e, a, y.state))), t && s === null) throw Error(l(528, ""));
                        return y;
                    }
                    if (t && s !== null) throw Error(l(529, ""));
                    return null;
                case "script":
                    return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = xi(a), a = Ya(o).hoistableScripts, s = a.get(t), s || (s = {
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
        function Ai(e) {
            return 'href="' + Yt(e) + '"';
        }
        function Br(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function Np(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function $0(e, t, a, s) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
                return s.loading |= 1;
            }), t.addEventListener("error", function() {
                return s.loading |= 2;
            }), vt(t, "link", a), ht(t), e.head.appendChild(t));
        }
        function xi(e) {
            return '[src="' + Yt(e) + '"]';
        }
        function Lr(e) {
            return "script[async]" + e;
        }
        function Dp(e, t, a) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var s = e.querySelector('style[data-href~="' + Yt(a.href) + '"]');
                    if (s) return t.instance = s, ht(s), s;
                    var o = b({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return s = (e.ownerDocument || e).createElement("style"), ht(s), vt(s, "style", o), pl(s, a.precedence, e), t.instance = s;
                case "stylesheet":
                    o = Ai(a.href);
                    var h = e.querySelector(Br(o));
                    if (h) return t.state.loading |= 4, t.instance = h, ht(h), h;
                    s = Np(a), (o = tn.get(o)) && tc(s, o), h = (e.ownerDocument || e).createElement("link"), ht(h);
                    var y = h;
                    return y._p = new Promise(function(w, R) {
                        y.onload = w, y.onerror = R;
                    }), vt(h, "link", s), t.state.loading |= 4, pl(h, a.precedence, e), t.instance = h;
                case "script":
                    return h = xi(a.src), (o = e.querySelector(Lr(h))) ? (t.instance = o, ht(o), o) : (s = a, (o = tn.get(h)) && (s = b({}, a), nc(s, o)), e = e.ownerDocument || e, o = e.createElement("script"), ht(o), vt(o, "link", s), e.head.appendChild(o), t.instance = o);
                case "void":
                    return null;
                default:
                    throw Error(l(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, pl(s, a.precedence, e));
            return t.instance;
        }
        function pl(e, t, a) {
            for(var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = s.length ? s[s.length - 1] : null, h = o, y = 0; y < s.length; y++){
                var w = s[y];
                if (w.dataset.precedence === t) h = w;
                else if (h !== o) break;
            }
            h ? h.parentNode.insertBefore(e, h.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
        }
        function tc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function nc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var ml = null;
        function Bp(e, t, a) {
            if (ml === null) {
                var s = new Map, o = ml = new Map;
                o.set(a, s);
            } else o = ml, s = o.get(a), s || (s = new Map, o.set(a, s));
            if (s.has(e)) return s;
            for(s.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++){
                var h = a[o];
                if (!(h[Qi] || h[pt] || e === "link" && h.getAttribute("rel") === "stylesheet") && h.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var y = h.getAttribute(t) || "";
                    y = e + y;
                    var w = s.get(y);
                    w ? w.push(h) : s.set(y, [
                        h
                    ]);
                }
            }
            return s;
        }
        function Lp(e, t, a) {
            e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
        }
        function I0(e, t, a) {
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
        function zp(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function P0(e, t, a, s) {
            if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
                if (a.instance === null) {
                    var o = Ai(s.href), h = t.querySelector(Br(o));
                    if (h) {
                        t = h._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gl.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = h, ht(h);
                        return;
                    }
                    h = t.ownerDocument || t, s = Np(s), (o = tn.get(o)) && tc(s, o), h = h.createElement("link"), ht(h);
                    var y = h;
                    y._p = new Promise(function(w, R) {
                        y.onload = w, y.onerror = R;
                    }), vt(h, "link", s), a.instance = h;
                }
                e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = gl.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
            }
        }
        var ac = 0;
        function G0(e, t) {
            return e.stylesheets && e.count === 0 && vl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
                var s = setTimeout(function() {
                    if (e.stylesheets && vl(e, e.stylesheets), e.unsuspend) {
                        var h = e.unsuspend;
                        e.unsuspend = null, h();
                    }
                }, 6e4 + t);
                0 < e.imgBytes && ac === 0 && (ac = 62500 * T0());
                var o = setTimeout(function() {
                    if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vl(e, e.stylesheets), e.unsuspend)) {
                        var h = e.unsuspend;
                        e.unsuspend = null, h();
                    }
                }, (e.imgBytes > ac ? 50 : 800) + t);
                return e.unsuspend = a, function() {
                    e.unsuspend = null, clearTimeout(s), clearTimeout(o);
                };
            } : null;
        }
        function gl() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) vl(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var yl = null;
        function vl(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, yl = new Map, t.forEach(V0, e), yl = null, gl.call(e));
        }
        function V0(e, t) {
            if (!(t.state.loading & 4)) {
                var a = yl.get(e);
                if (a) var s = a.get(null);
                else {
                    a = new Map, yl.set(e, a);
                    for(var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), h = 0; h < o.length; h++){
                        var y = o[h];
                        (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y), s = y);
                    }
                    s && a.set(null, s);
                }
                o = t.instance, y = o.getAttribute("data-precedence"), h = a.get(y) || s, h === s && a.set(null, o), a.set(y, o), this.count++, s = gl.bind(this), o.addEventListener("load", s), o.addEventListener("error", s), h ? h.parentNode.insertBefore(o, h.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
            }
        }
        var zr = {
            $$typeof: H,
            Provider: null,
            Consumer: null,
            _currentValue: he,
            _currentValue2: he,
            _threadCount: 0
        };
        function K0(e, t, a, s, o, h, y, w, R) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.hiddenUpdates = Wl(null), this.identifierPrefix = s, this.onUncaughtError = o, this.onCaughtError = h, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = new Map;
        }
        function Mp(e, t, a, s, o, h, y, w, R, z, V, J) {
            return e = new K0(e, t, a, y, R, z, V, J, w), t = 1, h === !0 && (t |= 24), h = Bt(3, null, null, t), e.current = h, h.stateNode = e, t = Lo(), t.refCount++, e.pooledCache = t, t.refCount++, h.memoizedState = {
                element: s,
                isDehydrated: a,
                cache: t
            }, qo(h), e;
        }
        function Hp(e) {
            return e ? (e = ai, e) : ai;
        }
        function qp(e, t, a, s, o, h) {
            o = Hp(o), s.context === null ? s.context = o : s.pendingContext = o, s = Zn(t), s.payload = {
                element: a
            }, h = h === void 0 ? null : h, h !== null && (s.callback = h), a = ea(e, s, t), a !== null && (jt(a, e, t), mr(a, e, t));
        }
        function $p(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var a = e.retryLane;
                e.retryLane = a !== 0 && a < t ? a : t;
            }
        }
        function ic(e, t) {
            $p(e, t), (e = e.alternate) && $p(e, t);
        }
        function Ip(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = Ea(e, 67108864);
                t !== null && jt(t, e, 67108864), ic(e, 67108864);
            }
        }
        function Pp(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = qt();
                t = Ql(t);
                var a = Ea(e, t);
                a !== null && jt(a, e, t), ic(e, t);
            }
        }
        var bl = !0;
        function Y0(e, t, a, s) {
            var o = P.T;
            P.T = null;
            var h = W.p;
            try {
                W.p = 2, rc(e, t, a, s);
            } finally{
                W.p = h, P.T = o;
            }
        }
        function X0(e, t, a, s) {
            var o = P.T;
            P.T = null;
            var h = W.p;
            try {
                W.p = 8, rc(e, t, a, s);
            } finally{
                W.p = h, P.T = o;
            }
        }
        function rc(e, t, a, s) {
            if (bl) {
                var o = sc(s);
                if (o === null) Vu(e, t, s, wl, a), Vp(e, s);
                else if (F0(o, e, t, a, s)) s.stopPropagation();
                else if (Vp(e, s), t & 4 && -1 < J0.indexOf(e)) {
                    for(; o !== null;){
                        var h = Ka(o);
                        if (h !== null) switch(h.tag){
                            case 3:
                                if (h = h.stateNode, h.current.memoizedState.isDehydrated) {
                                    var y = va(h.pendingLanes);
                                    if (y !== 0) {
                                        var w = h;
                                        for(w.pendingLanes |= 2, w.entangledLanes |= 2; y;){
                                            var R = 1 << 31 - ve(y);
                                            w.entanglements[1] |= R, y &= ~R;
                                        }
                                        mn(h), (Oe & 6) === 0 && (nl = St() + 500, jr(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                w = Ea(h, 2), w !== null && jt(w, h, 2), il(), ic(h, 2);
                        }
                        if (h = sc(s), h === null && Vu(e, t, s, wl, a), h === o) break;
                        o = h;
                    }
                    o !== null && s.stopPropagation();
                } else Vu(e, t, s, null, a);
            }
        }
        function sc(e) {
            return e = lo(e), lc(e);
        }
        var wl = null;
        function lc(e) {
            if (wl = null, e = Va(e), e !== null) {
                var t = c(e);
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
            return wl = e, null;
        }
        function Gp(e) {
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
                    switch(hn()){
                        case us:
                            return 2;
                        case _:
                            return 8;
                        case p:
                        case g:
                            return 32;
                        case E:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var oc = !1, ha = null, fa = null, da = null, Mr = new Map, Hr = new Map, pa = [], J0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Vp(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    ha = null;
                    break;
                case "dragenter":
                case "dragleave":
                    fa = null;
                    break;
                case "mouseover":
                case "mouseout":
                    da = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Mr.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Hr.delete(t.pointerId);
            }
        }
        function qr(e, t, a, s, o, h) {
            return e === null || e.nativeEvent !== h ? (e = {
                blockedOn: t,
                domEventName: a,
                eventSystemFlags: s,
                nativeEvent: h,
                targetContainers: [
                    o
                ]
            }, t !== null && (t = Ka(t), t !== null && Ip(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
        }
        function F0(e, t, a, s, o) {
            switch(t){
                case "focusin":
                    return ha = qr(ha, e, t, a, s, o), !0;
                case "dragenter":
                    return fa = qr(fa, e, t, a, s, o), !0;
                case "mouseover":
                    return da = qr(da, e, t, a, s, o), !0;
                case "pointerover":
                    var h = o.pointerId;
                    return Mr.set(h, qr(Mr.get(h) || null, e, t, a, s, o)), !0;
                case "gotpointercapture":
                    return h = o.pointerId, Hr.set(h, qr(Hr.get(h) || null, e, t, a, s, o)), !0;
            }
            return !1;
        }
        function Kp(e) {
            var t = Va(e.target);
            if (t !== null) {
                var a = c(t);
                if (a !== null) {
                    if (t = a.tag, t === 13) {
                        if (t = f(a), t !== null) {
                            e.blockedOn = t, rh(e.priority, function() {
                                Pp(a);
                            });
                            return;
                        }
                    } else if (t === 31) {
                        if (t = d(a), t !== null) {
                            e.blockedOn = t, rh(e.priority, function() {
                                Pp(a);
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
        function _l(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var a = sc(e.nativeEvent);
                if (a === null) {
                    a = e.nativeEvent;
                    var s = new a.constructor(a.type, a);
                    so = s, a.target.dispatchEvent(s), so = null;
                } else return t = Ka(a), t !== null && Ip(t), e.blockedOn = a, !1;
                t.shift();
            }
            return !0;
        }
        function Yp(e, t, a) {
            _l(e) && a.delete(t);
        }
        function W0() {
            oc = !1, ha !== null && _l(ha) && (ha = null), fa !== null && _l(fa) && (fa = null), da !== null && _l(da) && (da = null), Mr.forEach(Yp), Hr.forEach(Yp);
        }
        function Sl(e, t) {
            e.blockedOn === t && (e.blockedOn = null, oc || (oc = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, W0)));
        }
        var El = null;
        function Xp(e) {
            El !== e && (El = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                El === e && (El = null);
                for(var t = 0; t < e.length; t += 3){
                    var a = e[t], s = e[t + 1], o = e[t + 2];
                    if (typeof s != "function") {
                        if (lc(s || a) === null) continue;
                        break;
                    }
                    var h = Ka(a);
                    h !== null && (e.splice(t, 3), t -= 3, su(h, {
                        pending: !0,
                        data: o,
                        method: a.method,
                        action: s
                    }, s, o));
                }
            }));
        }
        function Ri(e) {
            function t(R) {
                return Sl(R, e);
            }
            ha !== null && Sl(ha, e), fa !== null && Sl(fa, e), da !== null && Sl(da, e), Mr.forEach(t), Hr.forEach(t);
            for(var a = 0; a < pa.length; a++){
                var s = pa[a];
                s.blockedOn === e && (s.blockedOn = null);
            }
            for(; 0 < pa.length && (a = pa[0], a.blockedOn === null);)Kp(a), a.blockedOn === null && pa.shift();
            if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for(s = 0; s < a.length; s += 3){
                var o = a[s], h = a[s + 1], y = o[At] || null;
                if (typeof h == "function") y || Xp(a);
                else if (y) {
                    var w = null;
                    if (h && h.hasAttribute("formAction")) {
                        if (o = h, y = h[At] || null) w = y.formAction;
                        else if (lc(o) !== null) continue;
                    } else w = y.action;
                    typeof w == "function" ? a[s + 1] = w : (a.splice(s, 3), s -= 3), Xp(a);
                }
            }
        }
        function Jp() {
            function e(h) {
                h.canIntercept && h.info === "react-transition" && h.intercept({
                    handler: function() {
                        return new Promise(function(y) {
                            return o = y;
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
                    var h = navigation.currentEntry;
                    h && h.url != null && navigation.navigate(h.url, {
                        state: h.getState(),
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
        function uc(e) {
            this._internalRoot = e;
        }
        Tl.prototype.render = uc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(l(409));
            var a = t.current, s = qt();
            qp(a, s, e, t, null, null);
        }, Tl.prototype.unmount = uc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                qp(e.current, 2, null, e, null, null), il(), t[Ga] = null;
            }
        };
        function Tl(e) {
            this._internalRoot = e;
        }
        Tl.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = ih();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var a = 0; a < pa.length && t !== 0 && t < pa[a].priority; a++);
                pa.splice(a, 0, e), a === 0 && Kp(e);
            }
        };
        var Fp = n.version;
        if (Fp !== "19.2.5") throw Error(l(527, Fp, "19.2.5"));
        W.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
            return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var Q0 = {
            bundleType: 0,
            version: "19.2.5",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.2.5"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Al.isDisabled && Al.supportsFiber) try {
                Y = Al.inject(Q0), ue = Al;
            } catch  {}
        }
        return Pr.createRoot = function(e, t) {
            if (!u(e)) throw Error(l(299));
            var a = !1, s = "", o = ad, h = id, y = rd;
            return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (h = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError)), t = Mp(e, 1, !1, null, null, a, s, null, o, h, y, Jp), e[Ga] = t.current, Gu(e), new uc(t);
        }, Pr.hydrateRoot = function(e, t, a) {
            if (!u(e)) throw Error(l(299));
            var s = !1, o = "", h = ad, y = id, w = rd, R = null;
            return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (h = a.onUncaughtError), a.onCaughtError !== void 0 && (y = a.onCaughtError), a.onRecoverableError !== void 0 && (w = a.onRecoverableError), a.formState !== void 0 && (R = a.formState)), t = Mp(e, 1, !0, t, a ?? null, s, o, R, h, y, w, Jp), t.context = Hp(null), a = t.current, s = qt(), s = Ql(s), o = Zn(s), o.callback = null, ea(a, o, s), a = s, t.current.lanes = a, Wi(t, a), mn(t), e[Ga] = t.current, Gu(e), new Tl(t);
        }, Pr.version = "19.2.5", Pr;
    }
    var um;
    function dv() {
        if (um) return dc.exports;
        um = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (n) {
                console.error(n);
            }
        }
        return i(), dc.exports = fv(), dc.exports;
    }
    var pv = dv();
    var cm = "popstate";
    function hm(i) {
        return typeof i == "object" && i != null && "pathname" in i && "search" in i && "hash" in i && "state" in i && "key" in i;
    }
    function mv(i = {}) {
        function n(l, u) {
            let c = u.state?.masked, { pathname: f, search: d, hash: m } = c || l.location;
            return xc("", {
                pathname: f,
                search: d,
                hash: m
            }, u.state && u.state.usr || null, u.state && u.state.key || "default", c ? {
                pathname: l.location.pathname,
                search: l.location.search,
                hash: l.location.hash
            } : void 0);
        }
        function r(l, u) {
            return typeof u == "string" ? u : Wr(u);
        }
        return yv(n, r, null, i);
    }
    function Je(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function nn(i, n) {
        if (!i) {
            typeof console < "u" && console.warn(n);
            try {
                throw new Error(n);
            } catch  {}
        }
    }
    function gv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function fm(i, n) {
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
    function xc(i, n, r = null, l, u) {
        return {
            pathname: typeof i == "string" ? i : i.pathname,
            search: "",
            hash: "",
            ...typeof n == "string" ? $i(n) : n,
            state: r,
            key: n && n.key || l || gv(),
            unstable_mask: u
        };
    }
    function Wr({ pathname: i = "/", search: n = "", hash: r = "" }) {
        return n && n !== "?" && (i += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (i += r.charAt(0) === "#" ? r : "#" + r), i;
    }
    function $i(i) {
        let n = {};
        if (i) {
            let r = i.indexOf("#");
            r >= 0 && (n.hash = i.substring(r), i = i.substring(0, r));
            let l = i.indexOf("?");
            l >= 0 && (n.search = i.substring(l), i = i.substring(0, l)), i && (n.pathname = i);
        }
        return n;
    }
    function yv(i, n, r, l = {}) {
        let { window: u = document.defaultView, v5Compat: c = !1 } = l, f = u.history, d = "POP", m = null, v = S();
        v == null && (v = 0, f.replaceState({
            ...f.state,
            idx: v
        }, ""));
        function S() {
            return (f.state || {
                idx: null
            }).idx;
        }
        function b() {
            d = "POP";
            let D = S(), I = D == null ? null : D - v;
            v = D, m && m({
                action: d,
                location: B.location,
                delta: I
            });
        }
        function x(D, I) {
            d = "PUSH";
            let K = hm(D) ? D : xc(B.location, D, I);
            v = S() + 1;
            let H = fm(K, v), F = B.createHref(K.unstable_mask || K);
            try {
                f.pushState(H, "", F);
            } catch (Z) {
                if (Z instanceof DOMException && Z.name === "DataCloneError") throw Z;
                u.location.assign(F);
            }
            c && m && m({
                action: d,
                location: B.location,
                delta: 1
            });
        }
        function A(D, I) {
            d = "REPLACE";
            let K = hm(D) ? D : xc(B.location, D, I);
            v = S();
            let H = fm(K, v), F = B.createHref(K.unstable_mask || K);
            f.replaceState(H, "", F), c && m && m({
                action: d,
                location: B.location,
                delta: 0
            });
        }
        function U(D) {
            return vv(D);
        }
        let B = {
            get action () {
                return d;
            },
            get location () {
                return i(u, f);
            },
            listen (D) {
                if (m) throw new Error("A history only accepts one active listener");
                return u.addEventListener(cm, b), m = D, ()=>{
                    u.removeEventListener(cm, b), m = null;
                };
            },
            createHref (D) {
                return n(u, D);
            },
            createURL: U,
            encodeLocation (D) {
                let I = U(D);
                return {
                    pathname: I.pathname,
                    search: I.search,
                    hash: I.hash
                };
            },
            push: x,
            replace: A,
            go (D) {
                return f.go(D);
            }
        };
        return B;
    }
    function vv(i, n = !1) {
        let r = "http://localhost";
        typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Je(r, "No window.location.(origin|href) available to create URL");
        let l = typeof i == "string" ? i : Wr(i);
        return l = l.replace(/ $/, "%20"), !n && l.startsWith("//") && (l = r + l), new URL(l, r);
    }
    function Wm(i, n, r = "/") {
        return bv(i, n, r, !1);
    }
    function bv(i, n, r, l) {
        let u = typeof n == "string" ? $i(n) : n, c = In(u.pathname || "/", r);
        if (c == null) return null;
        let f = Qm(i);
        wv(f);
        let d = null;
        for(let m = 0; d == null && m < f.length; ++m){
            let v = jv(c);
            d = Ov(f[m], v, l);
        }
        return d;
    }
    function Qm(i, n = [], r = [], l = "", u = !1) {
        let c = (f, d, m = u, v)=>{
            let S = {
                relativePath: v === void 0 ? f.path || "" : v,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: d,
                route: f
            };
            if (S.relativePath.startsWith("/")) {
                if (!S.relativePath.startsWith(l) && m) return;
                Je(S.relativePath.startsWith(l), `Absolute route path "${S.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), S.relativePath = S.relativePath.slice(l.length);
            }
            let b = bn([
                l,
                S.relativePath
            ]), x = r.concat(S);
            f.children && f.children.length > 0 && (Je(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${b}".`), Qm(f.children, n, x, b, m)), !(f.path == null && !f.index) && n.push({
                path: b,
                score: Rv(b, f.index),
                routesMeta: x
            });
        };
        return i.forEach((f, d)=>{
            if (f.path === "" || !f.path?.includes("?")) c(f, d);
            else for (let m of Zm(f.path))c(f, d, !0, m);
        }), n;
    }
    function Zm(i) {
        let n = i.split("/");
        if (n.length === 0) return [];
        let [r, ...l] = n, u = r.endsWith("?"), c = r.replace(/\?$/, "");
        if (l.length === 0) return u ? [
            c,
            ""
        ] : [
            c
        ];
        let f = Zm(l.join("/")), d = [];
        return d.push(...f.map((m)=>m === "" ? c : [
                c,
                m
            ].join("/"))), u && d.push(...f), d.map((m)=>i.startsWith("/") && m === "" ? "/" : m);
    }
    function wv(i) {
        i.sort((n, r)=>n.score !== r.score ? r.score - n.score : Cv(n.routesMeta.map((l)=>l.childrenIndex), r.routesMeta.map((l)=>l.childrenIndex)));
    }
    var _v = /^:[\w-]+$/, Sv = 3, Ev = 2, Tv = 1, Av = 10, xv = -2, dm = (i)=>i === "*";
    function Rv(i, n) {
        let r = i.split("/"), l = r.length;
        return r.some(dm) && (l += xv), n && (l += Ev), r.filter((u)=>!dm(u)).reduce((u, c)=>u + (_v.test(c) ? Sv : c === "" ? Tv : Av), l);
    }
    function Cv(i, n) {
        return i.length === n.length && i.slice(0, -1).every((l, u)=>l === n[u]) ? i[i.length - 1] - n[n.length - 1] : 0;
    }
    function Ov(i, n, r = !1) {
        let { routesMeta: l } = i, u = {}, c = "/", f = [];
        for(let d = 0; d < l.length; ++d){
            let m = l[d], v = d === l.length - 1, S = c === "/" ? n : n.slice(c.length) || "/", b = Hl({
                path: m.relativePath,
                caseSensitive: m.caseSensitive,
                end: v
            }, S), x = m.route;
            if (!b && v && r && !l[l.length - 1].route.index && (b = Hl({
                path: m.relativePath,
                caseSensitive: m.caseSensitive,
                end: !1
            }, S)), !b) return null;
            Object.assign(u, b.params), f.push({
                params: u,
                pathname: bn([
                    c,
                    b.pathname
                ]),
                pathnameBase: Bv(bn([
                    c,
                    b.pathnameBase
                ])),
                route: x
            }), b.pathnameBase !== "/" && (c = bn([
                c,
                b.pathnameBase
            ]));
        }
        return f;
    }
    function Hl(i, n) {
        typeof i == "string" && (i = {
            path: i,
            caseSensitive: !1,
            end: !0
        });
        let [r, l] = kv(i.path, i.caseSensitive, i.end), u = n.match(r);
        if (!u) return null;
        let c = u[0], f = c.replace(/(.)\/+$/, "$1"), d = u.slice(1);
        return {
            params: l.reduce((v, { paramName: S, isOptional: b }, x)=>{
                if (S === "*") {
                    let U = d[x] || "";
                    f = c.slice(0, c.length - U.length).replace(/(.)\/+$/, "$1");
                }
                const A = d[x];
                return b && !A ? v[S] = void 0 : v[S] = (A || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: c,
            pathnameBase: f,
            pattern: i
        };
    }
    function kv(i, n = !1, r = !0) {
        nn(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
        let l = [], u = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, d, m, v, S)=>{
            if (l.push({
                paramName: d,
                isOptional: m != null
            }), m) {
                let b = S.charAt(v + f.length);
                return b && b !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
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
    function jv(i) {
        try {
            return i.split("/").map((n)=>decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
        } catch (n) {
            return nn(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`), i;
        }
    }
    function In(i, n) {
        if (n === "/") return i;
        if (!i.toLowerCase().startsWith(n.toLowerCase())) return null;
        let r = n.endsWith("/") ? n.length - 1 : n.length, l = i.charAt(r);
        return l && l !== "/" ? null : i.slice(r) || "/";
    }
    var Uv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    function Nv(i, n = "/") {
        let { pathname: r, search: l = "", hash: u = "" } = typeof i == "string" ? $i(i) : i, c;
        return r ? (r = r.replace(/\/\/+/g, "/"), r.startsWith("/") ? c = pm(r.substring(1), "/") : c = pm(r, n)) : c = n, {
            pathname: c,
            search: Lv(l),
            hash: zv(u)
        };
    }
    function pm(i, n) {
        let r = n.replace(/\/+$/, "").split("/");
        return i.split("/").forEach((u)=>{
            u === ".." ? r.length > 1 && r.pop() : u !== "." && r.push(u);
        }), r.length > 1 ? r.join("/") : "/";
    }
    function yc(i, n, r, l) {
        return `Cannot include a '${i}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Dv(i) {
        return i.filter((n, r)=>r === 0 || n.route.path && n.route.path.length > 0);
    }
    function Pc(i) {
        let n = Dv(i);
        return n.map((r, l)=>l === n.length - 1 ? r.pathname : r.pathnameBase);
    }
    function Gl(i, n, r, l = !1) {
        let u;
        typeof i == "string" ? u = $i(i) : (u = {
            ...i
        }, Je(!u.pathname || !u.pathname.includes("?"), yc("?", "pathname", "search", u)), Je(!u.pathname || !u.pathname.includes("#"), yc("#", "pathname", "hash", u)), Je(!u.search || !u.search.includes("#"), yc("#", "search", "hash", u)));
        let c = i === "" || u.pathname === "", f = c ? "/" : u.pathname, d;
        if (f == null) d = r;
        else {
            let b = n.length - 1;
            if (!l && f.startsWith("..")) {
                let x = f.split("/");
                for(; x[0] === "..";)x.shift(), b -= 1;
                u.pathname = x.join("/");
            }
            d = b >= 0 ? n[b] : "/";
        }
        let m = Nv(u, d), v = f && f !== "/" && f.endsWith("/"), S = (c || f === ".") && r.endsWith("/");
        return !m.pathname.endsWith("/") && (v || S) && (m.pathname += "/"), m;
    }
    var bn = (i)=>i.join("/").replace(/\/\/+/g, "/"), Bv = (i)=>i.replace(/\/+$/, "").replace(/^\/*/, "/"), Lv = (i)=>!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, zv = (i)=>!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, Mv = class {
        constructor(i, n, r, l = !1){
            this.status = i, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
        }
    };
    function Hv(i) {
        return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
    }
    function qv(i) {
        return i.map((n)=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
    }
    var eg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    function tg(i, n) {
        let r = i;
        if (typeof r != "string" || !Uv.test(r)) return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
        let l = r, u = !1;
        if (eg) try {
            let c = new URL(window.location.href), f = r.startsWith("//") ? new URL(c.protocol + r) : new URL(r), d = In(f.pathname, n);
            f.origin === c.origin && d != null ? r = d + f.search + f.hash : u = !0;
        } catch  {
            nn(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        return {
            absoluteURL: l,
            isExternal: u,
            to: r
        };
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    var ng = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(ng);
    var $v = [
        "GET",
        ...ng
    ];
    new Set($v);
    var Ii = k.createContext(null);
    Ii.displayName = "DataRouter";
    var Vl = k.createContext(null);
    Vl.displayName = "DataRouterState";
    var ag = k.createContext(!1);
    function Iv() {
        return k.useContext(ag);
    }
    var ig = k.createContext({
        isTransitioning: !1
    });
    ig.displayName = "ViewTransition";
    var Pv = k.createContext(new Map);
    Pv.displayName = "Fetchers";
    var Gv = k.createContext(null);
    Gv.displayName = "Await";
    var Pt = k.createContext(null);
    Pt.displayName = "Navigation";
    var rs = k.createContext(null);
    rs.displayName = "Location";
    var cn = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    cn.displayName = "Route";
    var Gc = k.createContext(null);
    Gc.displayName = "RouteError";
    var rg = "REACT_ROUTER_ERROR", Vv = "REDIRECT", Kv = "ROUTE_ERROR_RESPONSE";
    function Yv(i) {
        if (i.startsWith(`${rg}:${Vv}:{`)) try {
            let n = JSON.parse(i.slice(28));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.location == "string" && typeof n.reloadDocument == "boolean" && typeof n.replace == "boolean") return n;
        } catch  {}
    }
    function Xv(i) {
        if (i.startsWith(`${rg}:${Kv}:{`)) try {
            let n = JSON.parse(i.slice(40));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string") return new Mv(n.status, n.statusText, n.data);
        } catch  {}
    }
    function Jv(i, { relative: n } = {}) {
        Je(Pi(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: r, navigator: l } = k.useContext(Pt), { hash: u, pathname: c, search: f } = ss(i, {
            relative: n
        }), d = c;
        return r !== "/" && (d = c === "/" ? r : bn([
            r,
            c
        ])), l.createHref({
            pathname: d,
            search: f,
            hash: u
        });
    }
    function Pi() {
        return k.useContext(rs) != null;
    }
    Gt = function() {
        return Je(Pi(), "useLocation() may be used only in the context of a <Router> component."), k.useContext(rs).location;
    };
    var sg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function lg(i) {
        k.useContext(Pt).static || k.useLayoutEffect(i);
    }
    Vc = function() {
        let { isDataRoute: i } = k.useContext(cn);
        return i ? ob() : Fv();
    };
    function Fv() {
        Je(Pi(), "useNavigate() may be used only in the context of a <Router> component.");
        let i = k.useContext(Ii), { basename: n, navigator: r } = k.useContext(Pt), { matches: l } = k.useContext(cn), { pathname: u } = Gt(), c = JSON.stringify(Pc(l)), f = k.useRef(!1);
        return lg(()=>{
            f.current = !0;
        }), k.useCallback((m, v = {})=>{
            if (nn(f.current, sg), !f.current) return;
            if (typeof m == "number") {
                r.go(m);
                return;
            }
            let S = Gl(m, JSON.parse(c), u, v.relative === "path");
            i == null && n !== "/" && (S.pathname = S.pathname === "/" ? n : bn([
                n,
                S.pathname
            ])), (v.replace ? r.replace : r.push)(S, v.state, v);
        }, [
            n,
            r,
            c,
            u,
            i
        ]);
    }
    k.createContext(null);
    UE = function() {
        let { matches: i } = k.useContext(cn), n = i[i.length - 1];
        return n ? n.params : {};
    };
    function ss(i, { relative: n } = {}) {
        let { matches: r } = k.useContext(cn), { pathname: l } = Gt(), u = JSON.stringify(Pc(r));
        return k.useMemo(()=>Gl(i, JSON.parse(u), l, n === "path"), [
            i,
            u,
            l,
            n
        ]);
    }
    function Wv(i, n) {
        return og(i, n);
    }
    function og(i, n, r) {
        Je(Pi(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: l } = k.useContext(Pt), { matches: u } = k.useContext(cn), c = u[u.length - 1], f = c ? c.params : {}, d = c ? c.pathname : "/", m = c ? c.pathnameBase : "/", v = c && c.route;
        {
            let D = v && v.path || "";
            cg(d, !v || D.endsWith("*") || D.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D === "/" ? "*" : `${D}/*`}">.`);
        }
        let S = Gt(), b;
        if (n) {
            let D = typeof n == "string" ? $i(n) : n;
            Je(m === "/" || D.pathname?.startsWith(m), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${D.pathname}" was given in the \`location\` prop.`), b = D;
        } else b = S;
        let x = b.pathname || "/", A = x;
        if (m !== "/") {
            let D = m.replace(/^\//, "").split("/");
            A = "/" + x.replace(/^\//, "").split("/").slice(D.length).join("/");
        }
        let U = Wm(i, {
            pathname: A
        });
        nn(v || U != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `), nn(U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0, `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let B = nb(U && U.map((D)=>Object.assign({}, D, {
                params: Object.assign({}, f, D.params),
                pathname: bn([
                    m,
                    l.encodeLocation ? l.encodeLocation(D.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : D.pathname
                ]),
                pathnameBase: D.pathnameBase === "/" ? m : bn([
                    m,
                    l.encodeLocation ? l.encodeLocation(D.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : D.pathnameBase
                ])
            })), u, r);
        return n && B ? k.createElement(rs.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    unstable_mask: void 0,
                    ...b
                },
                navigationType: "POP"
            }
        }, B) : B;
    }
    function Qv() {
        let i = lb(), n = Hv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), r = i instanceof Error ? i.stack : null, l = "rgba(200,200,200, 0.5)", u = {
            padding: "0.5rem",
            backgroundColor: l
        }, c = {
            padding: "2px 4px",
            backgroundColor: l
        }, f = null;
        return console.error("Error handled by React Router default ErrorBoundary:", i), f = k.createElement(k.Fragment, null, k.createElement("p", null, "💿 Hey developer 👋"), k.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", k.createElement("code", {
            style: c
        }, "ErrorBoundary"), " or", " ", k.createElement("code", {
            style: c
        }, "errorElement"), " prop on your route.")), k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, n), r ? k.createElement("pre", {
            style: u
        }, r) : null, f);
    }
    var Zv = k.createElement(Qv, null), ug = class extends k.Component {
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
                const r = Xv(i.digest);
                r && (i = r);
            }
            let n = i !== void 0 ? k.createElement(cn.Provider, {
                value: this.props.routeContext
            }, k.createElement(Gc.Provider, {
                value: i,
                children: this.props.component
            })) : this.props.children;
            return this.context ? k.createElement(eb, {
                error: i
            }, n) : n;
        }
    };
    ug.contextType = ag;
    var vc = new WeakMap;
    function eb({ children: i, error: n }) {
        let { basename: r } = k.useContext(Pt);
        if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
            let l = Yv(n.digest);
            if (l) {
                let u = vc.get(n);
                if (u) throw u;
                let c = tg(l.location, r);
                if (eg && !vc.get(n)) if (c.isExternal || l.reloadDocument) window.location.href = c.absoluteURL || c.to;
                else {
                    const f = Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to, {
                            replace: l.replace
                        }));
                    throw vc.set(n, f), f;
                }
                return k.createElement("meta", {
                    httpEquiv: "refresh",
                    content: `0;url=${c.absoluteURL || c.to}`
                });
            }
        }
        return i;
    }
    function tb({ routeContext: i, match: n, children: r }) {
        let l = k.useContext(Ii);
        return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(cn.Provider, {
            value: i
        }, r);
    }
    function nb(i, n = [], r) {
        let l = r?.state;
        if (i == null) {
            if (!l) return null;
            if (l.errors) i = l.matches;
            else if (n.length === 0 && !l.initialized && l.matches.length > 0) i = l.matches;
            else return null;
        }
        let u = i, c = l?.errors;
        if (c != null) {
            let S = u.findIndex((b)=>b.route.id && c?.[b.route.id] !== void 0);
            Je(S >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`), u = u.slice(0, Math.min(u.length, S + 1));
        }
        let f = !1, d = -1;
        if (r && l) {
            f = l.renderFallback;
            for(let S = 0; S < u.length; S++){
                let b = u[S];
                if ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (d = S), b.route.id) {
                    let { loaderData: x, errors: A } = l, U = b.route.loader && !x.hasOwnProperty(b.route.id) && (!A || A[b.route.id] === void 0);
                    if (b.route.lazy || U) {
                        r.isStatic && (f = !0), d >= 0 ? u = u.slice(0, d + 1) : u = [
                            u[0]
                        ];
                        break;
                    }
                }
            }
        }
        let m = r?.onError, v = l && m ? (S, b)=>{
            m(S, {
                location: l.location,
                params: l.matches?.[0]?.params ?? {},
                unstable_pattern: qv(l.matches),
                errorInfo: b
            });
        } : void 0;
        return u.reduceRight((S, b, x)=>{
            let A, U = !1, B = null, D = null;
            l && (A = c && b.route.id ? c[b.route.id] : void 0, B = b.route.errorElement || Zv, f && (d < 0 && x === 0 ? (cg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), U = !0, D = null) : d === x && (U = !0, D = b.route.hydrateFallbackElement || null)));
            let I = n.concat(u.slice(0, x + 1)), K = ()=>{
                let H;
                return A ? H = B : U ? H = D : b.route.Component ? H = k.createElement(b.route.Component, null) : b.route.element ? H = b.route.element : H = S, k.createElement(tb, {
                    match: b,
                    routeContext: {
                        outlet: S,
                        matches: I,
                        isDataRoute: l != null
                    },
                    children: H
                });
            };
            return l && (b.route.ErrorBoundary || b.route.errorElement || x === 0) ? k.createElement(ug, {
                location: l.location,
                revalidation: l.revalidation,
                component: B,
                error: A,
                children: K(),
                routeContext: {
                    outlet: null,
                    matches: I,
                    isDataRoute: !0
                },
                onError: v
            }) : K();
        }, null);
    }
    function Kc(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function ab(i) {
        let n = k.useContext(Ii);
        return Je(n, Kc(i)), n;
    }
    function ib(i) {
        let n = k.useContext(Vl);
        return Je(n, Kc(i)), n;
    }
    function rb(i) {
        let n = k.useContext(cn);
        return Je(n, Kc(i)), n;
    }
    function Yc(i) {
        let n = rb(i), r = n.matches[n.matches.length - 1];
        return Je(r.route.id, `${i} can only be used on routes that contain a unique "id"`), r.route.id;
    }
    function sb() {
        return Yc("useRouteId");
    }
    function lb() {
        let i = k.useContext(Gc), n = ib("useRouteError"), r = Yc("useRouteError");
        return i !== void 0 ? i : n.errors?.[r];
    }
    function ob() {
        let { router: i } = ab("useNavigate"), n = Yc("useNavigate"), r = k.useRef(!1);
        return lg(()=>{
            r.current = !0;
        }), k.useCallback(async (u, c = {})=>{
            nn(r.current, sg), r.current && (typeof u == "number" ? await i.navigate(u) : await i.navigate(u, {
                fromRouteId: n,
                ...c
            }));
        }, [
            i,
            n
        ]);
    }
    var mm = {};
    function cg(i, n, r) {
        !n && !mm[i] && (mm[i] = !0, nn(!1, r));
    }
    k.memo(ub);
    function ub({ routes: i, future: n, state: r, isStatic: l, onError: u }) {
        return og(i, void 0, {
            state: r,
            isStatic: l,
            onError: u
        });
    }
    function cb({ to: i, replace: n, state: r, relative: l }) {
        Je(Pi(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: u } = k.useContext(Pt);
        nn(!u, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: c } = k.useContext(cn), { pathname: f } = Gt(), d = Vc(), m = Gl(i, Pc(c), f, l === "path"), v = JSON.stringify(m);
        return k.useEffect(()=>{
            d(JSON.parse(v), {
                replace: n,
                state: r,
                relative: l
            });
        }, [
            d,
            v,
            l,
            n,
            r
        ]), null;
    }
    function Ze(i) {
        Je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function hb({ basename: i = "/", children: n = null, location: r, navigationType: l = "POP", navigator: u, static: c = !1, unstable_useTransitions: f }) {
        Je(!Pi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let d = i.replace(/^\/*/, "/"), m = k.useMemo(()=>({
                basename: d,
                navigator: u,
                static: c,
                unstable_useTransitions: f,
                future: {}
            }), [
            d,
            u,
            c,
            f
        ]);
        typeof r == "string" && (r = $i(r));
        let { pathname: v = "/", search: S = "", hash: b = "", state: x = null, key: A = "default", unstable_mask: U } = r, B = k.useMemo(()=>{
            let D = In(v, d);
            return D == null ? null : {
                location: {
                    pathname: D,
                    search: S,
                    hash: b,
                    state: x,
                    key: A,
                    unstable_mask: U
                },
                navigationType: l
            };
        }, [
            d,
            v,
            S,
            b,
            x,
            A,
            l,
            U
        ]);
        return nn(B != null, `<Router basename="${d}"> is not able to match the URL "${v}${S}${b}" because it does not start with the basename, so the <Router> won't render anything.`), B == null ? null : k.createElement(Pt.Provider, {
            value: m
        }, k.createElement(rs.Provider, {
            children: n,
            value: B
        }));
    }
    function hg({ children: i, location: n }) {
        return Wv(Rc(i), n);
    }
    function Rc(i, n = []) {
        let r = [];
        return k.Children.forEach(i, (l, u)=>{
            if (!k.isValidElement(l)) return;
            let c = [
                ...n,
                u
            ];
            if (l.type === k.Fragment) {
                r.push.apply(r, Rc(l.props.children, c));
                return;
            }
            Je(l.type === Ze, `[${typeof l.type == "string" ? l.type : l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Je(!l.props.index || !l.props.children, "An index route cannot have child routes.");
            let f = {
                id: l.props.id || c.join("-"),
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
            l.props.children && (f.children = Rc(l.props.children, c)), r.push(f);
        }), r;
    }
    var Ll = "get", zl = "application/x-www-form-urlencoded";
    function Kl(i) {
        return typeof HTMLElement < "u" && i instanceof HTMLElement;
    }
    function fb(i) {
        return Kl(i) && i.tagName.toLowerCase() === "button";
    }
    function db(i) {
        return Kl(i) && i.tagName.toLowerCase() === "form";
    }
    function pb(i) {
        return Kl(i) && i.tagName.toLowerCase() === "input";
    }
    function mb(i) {
        return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
    }
    function gb(i, n) {
        return i.button === 0 && (!n || n === "_self") && !mb(i);
    }
    function Cc(i = "") {
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
    function yb(i, n) {
        let r = Cc(i);
        return n && n.forEach((l, u)=>{
            r.has(u) || n.getAll(u).forEach((c)=>{
                r.append(u, c);
            });
        }), r;
    }
    var Rl = null;
    function vb() {
        if (Rl === null) try {
            new FormData(document.createElement("form"), 0), Rl = !1;
        } catch  {
            Rl = !0;
        }
        return Rl;
    }
    var bb = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function bc(i) {
        return i != null && !bb.has(i) ? (nn(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zl}"`), null) : i;
    }
    function wb(i, n) {
        let r, l, u, c, f;
        if (db(i)) {
            let d = i.getAttribute("action");
            l = d ? In(d, n) : null, r = i.getAttribute("method") || Ll, u = bc(i.getAttribute("enctype")) || zl, c = new FormData(i);
        } else if (fb(i) || pb(i) && (i.type === "submit" || i.type === "image")) {
            let d = i.form;
            if (d == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let m = i.getAttribute("formaction") || d.getAttribute("action");
            if (l = m ? In(m, n) : null, r = i.getAttribute("formmethod") || d.getAttribute("method") || Ll, u = bc(i.getAttribute("formenctype")) || bc(d.getAttribute("enctype")) || zl, c = new FormData(d, i), !vb()) {
                let { name: v, type: S, value: b } = i;
                if (S === "image") {
                    let x = v ? `${v}.` : "";
                    c.append(`${x}x`, "0"), c.append(`${x}y`, "0");
                } else v && c.append(v, b);
            }
        } else {
            if (Kl(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            r = Ll, l = null, u = zl, f = i;
        }
        return c && u === "text/plain" && (f = c, c = void 0), {
            action: l,
            method: r.toLowerCase(),
            encType: u,
            formData: c,
            body: f
        };
    }
    Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    function Xc(i, n) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(n);
    }
    function fg(i, n, r, l) {
        let u = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
        return r ? u.pathname.endsWith("/") ? u.pathname = `${u.pathname}_.${l}` : u.pathname = `${u.pathname}.${l}` : u.pathname === "/" ? u.pathname = `_root.${l}` : n && In(u.pathname, n) === "/" ? u.pathname = `${n.replace(/\/$/, "")}/_root.${l}` : u.pathname = `${u.pathname.replace(/\/$/, "")}.${l}`, u;
    }
    async function _b(i, n) {
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
    function Sb(i) {
        return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
    }
    async function Eb(i, n, r) {
        let l = await Promise.all(i.map(async (u)=>{
            let c = n.routes[u.route.id];
            if (c) {
                let f = await _b(c, r);
                return f.links ? f.links() : [];
            }
            return [];
        }));
        return Rb(l.flat(1).filter(Sb).filter((u)=>u.rel === "stylesheet" || u.rel === "preload").map((u)=>u.rel === "stylesheet" ? {
                ...u,
                rel: "prefetch",
                as: "style"
            } : {
                ...u,
                rel: "prefetch"
            }));
    }
    function gm(i, n, r, l, u, c) {
        let f = (m, v)=>r[v] ? m.route.id !== r[v].route.id : !0, d = (m, v)=>r[v].pathname !== m.pathname || r[v].route.path?.endsWith("*") && r[v].params["*"] !== m.params["*"];
        return c === "assets" ? n.filter((m, v)=>f(m, v) || d(m, v)) : c === "data" ? n.filter((m, v)=>{
            let S = l.routes[m.route.id];
            if (!S || !S.hasLoader) return !1;
            if (f(m, v) || d(m, v)) return !0;
            if (m.route.shouldRevalidate) {
                let b = m.route.shouldRevalidate({
                    currentUrl: new URL(u.pathname + u.search + u.hash, window.origin),
                    currentParams: r[0]?.params || {},
                    nextUrl: new URL(i, window.origin),
                    nextParams: m.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof b == "boolean") return b;
            }
            return !0;
        }) : [];
    }
    function Tb(i, n, { includeHydrateFallback: r } = {}) {
        return Ab(i.map((l)=>{
            let u = n.routes[l.route.id];
            if (!u) return [];
            let c = [
                u.module
            ];
            return u.clientActionModule && (c = c.concat(u.clientActionModule)), u.clientLoaderModule && (c = c.concat(u.clientLoaderModule)), r && u.hydrateFallbackModule && (c = c.concat(u.hydrateFallbackModule)), u.imports && (c = c.concat(u.imports)), c;
        }).flat(1));
    }
    function Ab(i) {
        return [
            ...new Set(i)
        ];
    }
    function xb(i) {
        let n = {}, r = Object.keys(i).sort();
        for (let l of r)n[l] = i[l];
        return n;
    }
    function Rb(i, n) {
        let r = new Set;
        return new Set(n), i.reduce((l, u)=>{
            let c = JSON.stringify(xb(u));
            return r.has(c) || (r.add(c), l.push({
                key: c,
                link: u
            })), l;
        }, []);
    }
    function Jc() {
        let i = k.useContext(Ii);
        return Xc(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
    }
    function Cb() {
        let i = k.useContext(Vl);
        return Xc(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
    }
    var Fc = k.createContext(void 0);
    Fc.displayName = "FrameworkContext";
    function Wc() {
        let i = k.useContext(Fc);
        return Xc(i, "You must render this element inside a <HydratedRouter> element"), i;
    }
    function Ob(i, n) {
        let r = k.useContext(Fc), [l, u] = k.useState(!1), [c, f] = k.useState(!1), { onFocus: d, onBlur: m, onMouseEnter: v, onMouseLeave: S, onTouchStart: b } = n, x = k.useRef(null);
        k.useEffect(()=>{
            if (i === "render" && f(!0), i === "viewport") {
                let B = (I)=>{
                    I.forEach((K)=>{
                        f(K.isIntersecting);
                    });
                }, D = new IntersectionObserver(B, {
                    threshold: .5
                });
                return x.current && D.observe(x.current), ()=>{
                    D.disconnect();
                };
            }
        }, [
            i
        ]), k.useEffect(()=>{
            if (l) {
                let B = setTimeout(()=>{
                    f(!0);
                }, 100);
                return ()=>{
                    clearTimeout(B);
                };
            }
        }, [
            l
        ]);
        let A = ()=>{
            u(!0);
        }, U = ()=>{
            u(!1), f(!1);
        };
        return r ? i !== "intent" ? [
            c,
            x,
            {}
        ] : [
            c,
            x,
            {
                onFocus: Gr(d, A),
                onBlur: Gr(m, U),
                onMouseEnter: Gr(v, A),
                onMouseLeave: Gr(S, U),
                onTouchStart: Gr(b, A)
            }
        ] : [
            !1,
            x,
            {}
        ];
    }
    function Gr(i, n) {
        return (r)=>{
            i && i(r), r.defaultPrevented || n(r);
        };
    }
    function kb({ page: i, ...n }) {
        let r = Iv(), { router: l } = Jc(), u = k.useMemo(()=>Wm(l.routes, i, l.basename), [
            l.routes,
            i,
            l.basename
        ]);
        return u ? r ? k.createElement(Ub, {
            page: i,
            matches: u,
            ...n
        }) : k.createElement(Nb, {
            page: i,
            matches: u,
            ...n
        }) : null;
    }
    function jb(i) {
        let { manifest: n, routeModules: r } = Wc(), [l, u] = k.useState([]);
        return k.useEffect(()=>{
            let c = !1;
            return Eb(i, n, r).then((f)=>{
                c || u(f);
            }), ()=>{
                c = !0;
            };
        }, [
            i,
            n,
            r
        ]), l;
    }
    function Ub({ page: i, matches: n, ...r }) {
        let l = Gt(), { future: u } = Wc(), { basename: c } = Jc(), f = k.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let d = fg(i, c, u.unstable_trailingSlashAwareDataRequests, "rsc"), m = !1, v = [];
            for (let S of n)typeof S.route.shouldRevalidate == "function" ? m = !0 : v.push(S.route.id);
            return m && v.length > 0 && d.searchParams.set("_routes", v.join(",")), [
                d.pathname + d.search
            ];
        }, [
            c,
            u.unstable_trailingSlashAwareDataRequests,
            i,
            l,
            n
        ]);
        return k.createElement(k.Fragment, null, f.map((d)=>k.createElement("link", {
                key: d,
                rel: "prefetch",
                as: "fetch",
                href: d,
                ...r
            })));
    }
    function Nb({ page: i, matches: n, ...r }) {
        let l = Gt(), { future: u, manifest: c, routeModules: f } = Wc(), { basename: d } = Jc(), { loaderData: m, matches: v } = Cb(), S = k.useMemo(()=>gm(i, n, v, c, l, "data"), [
            i,
            n,
            v,
            c,
            l
        ]), b = k.useMemo(()=>gm(i, n, v, c, l, "assets"), [
            i,
            n,
            v,
            c,
            l
        ]), x = k.useMemo(()=>{
            if (i === l.pathname + l.search + l.hash) return [];
            let B = new Set, D = !1;
            if (n.forEach((K)=>{
                let H = c.routes[K.route.id];
                !H || !H.hasLoader || (!S.some((F)=>F.route.id === K.route.id) && K.route.id in m && f[K.route.id]?.shouldRevalidate || H.hasClientLoader ? D = !0 : B.add(K.route.id));
            }), B.size === 0) return [];
            let I = fg(i, d, u.unstable_trailingSlashAwareDataRequests, "data");
            return D && B.size > 0 && I.searchParams.set("_routes", n.filter((K)=>B.has(K.route.id)).map((K)=>K.route.id).join(",")), [
                I.pathname + I.search
            ];
        }, [
            d,
            u.unstable_trailingSlashAwareDataRequests,
            m,
            l,
            c,
            S,
            n,
            i,
            f
        ]), A = k.useMemo(()=>Tb(b, c), [
            b,
            c
        ]), U = jb(b);
        return k.createElement(k.Fragment, null, x.map((B)=>k.createElement("link", {
                key: B,
                rel: "prefetch",
                as: "fetch",
                href: B,
                ...r
            })), A.map((B)=>k.createElement("link", {
                key: B,
                rel: "modulepreload",
                href: B,
                ...r
            })), U.map(({ key: B, link: D })=>k.createElement("link", {
                key: B,
                nonce: r.nonce,
                ...D,
                crossOrigin: D.crossOrigin ?? r.crossOrigin
            })));
    }
    function Db(...i) {
        return (n)=>{
            i.forEach((r)=>{
                typeof r == "function" ? r(n) : r != null && (r.current = n);
            });
        };
    }
    var Bb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Bb && (window.__reactRouterVersion = "7.14.0");
    } catch  {}
    function Lb({ basename: i, children: n, unstable_useTransitions: r, window: l }) {
        let u = k.useRef();
        u.current == null && (u.current = mv({
            window: l,
            v5Compat: !0
        }));
        let c = u.current, [f, d] = k.useState({
            action: c.action,
            location: c.location
        }), m = k.useCallback((v)=>{
            r === !1 ? d(v) : k.startTransition(()=>d(v));
        }, [
            r
        ]);
        return k.useLayoutEffect(()=>c.listen(m), [
            c,
            m
        ]), k.createElement(hb, {
            basename: i,
            children: n,
            location: f.location,
            navigationType: f.action,
            navigator: c,
            unstable_useTransitions: r
        });
    }
    let dg;
    dg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    $n = k.forwardRef(function({ onClick: n, discover: r = "render", prefetch: l = "none", relative: u, reloadDocument: c, replace: f, unstable_mask: d, state: m, target: v, to: S, preventScrollReset: b, viewTransition: x, unstable_defaultShouldRevalidate: A, ...U }, B) {
        let { basename: D, navigator: I, unstable_useTransitions: K } = k.useContext(Pt), H = typeof S == "string" && dg.test(S), F = tg(S, D);
        S = F.to;
        let Z = Jv(S, {
            relative: u
        }), le = Gt(), ee = null;
        if (d) {
            let je = Gl(d, [], le.unstable_mask ? le.unstable_mask.pathname : "/", !0);
            D !== "/" && (je.pathname = je.pathname === "/" ? D : bn([
                D,
                je.pathname
            ])), ee = I.createHref(je);
        }
        let [qe, ke, Tt] = Ob(l, U), dt = qb(S, {
            replace: f,
            unstable_mask: d,
            state: m,
            target: v,
            preventScrollReset: b,
            relative: u,
            viewTransition: x,
            unstable_defaultShouldRevalidate: A,
            unstable_useTransitions: K
        });
        function tt(je) {
            n && n(je), je.defaultPrevented || dt(je);
        }
        let fe = !(F.isExternal || c), Ae = k.createElement("a", {
            ...U,
            ...Tt,
            href: (fe ? ee : void 0) || F.absoluteURL || Z,
            onClick: fe ? tt : n,
            ref: Db(B, ke),
            target: v,
            "data-discover": !H && r === "render" ? "true" : void 0
        });
        return qe && !H ? k.createElement(k.Fragment, null, Ae, k.createElement(kb, {
            page: Z
        })) : Ae;
    });
    $n.displayName = "Link";
    var zb = k.forwardRef(function({ "aria-current": n = "page", caseSensitive: r = !1, className: l = "", end: u = !1, style: c, to: f, viewTransition: d, children: m, ...v }, S) {
        let b = ss(f, {
            relative: v.relative
        }), x = Gt(), A = k.useContext(Vl), { navigator: U, basename: B } = k.useContext(Pt), D = A != null && Vb(b) && d === !0, I = U.encodeLocation ? U.encodeLocation(b).pathname : b.pathname, K = x.pathname, H = A && A.navigation && A.navigation.location ? A.navigation.location.pathname : null;
        r || (K = K.toLowerCase(), H = H ? H.toLowerCase() : null, I = I.toLowerCase()), H && B && (H = In(H, B) || H);
        const F = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
        let Z = K === I || !u && K.startsWith(I) && K.charAt(F) === "/", le = H != null && (H === I || !u && H.startsWith(I) && H.charAt(I.length) === "/"), ee = {
            isActive: Z,
            isPending: le,
            isTransitioning: D
        }, qe = Z ? n : void 0, ke;
        typeof l == "function" ? ke = l(ee) : ke = [
            l,
            Z ? "active" : null,
            le ? "pending" : null,
            D ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Tt = typeof c == "function" ? c(ee) : c;
        return k.createElement($n, {
            ...v,
            "aria-current": qe,
            className: ke,
            ref: S,
            style: Tt,
            to: f,
            viewTransition: d
        }, typeof m == "function" ? m(ee) : m);
    });
    zb.displayName = "NavLink";
    var Mb = k.forwardRef(({ discover: i = "render", fetcherKey: n, navigate: r, reloadDocument: l, replace: u, state: c, method: f = Ll, action: d, onSubmit: m, relative: v, preventScrollReset: S, viewTransition: b, unstable_defaultShouldRevalidate: x, ...A }, U)=>{
        let { unstable_useTransitions: B } = k.useContext(Pt), D = Pb(), I = Gb(d, {
            relative: v
        }), K = f.toLowerCase() === "get" ? "get" : "post", H = typeof d == "string" && dg.test(d), F = (Z)=>{
            if (m && m(Z), Z.defaultPrevented) return;
            Z.preventDefault();
            let le = Z.nativeEvent.submitter, ee = le?.getAttribute("formmethod") || f, qe = ()=>D(le || Z.currentTarget, {
                    fetcherKey: n,
                    method: ee,
                    navigate: r,
                    replace: u,
                    state: c,
                    relative: v,
                    preventScrollReset: S,
                    viewTransition: b,
                    unstable_defaultShouldRevalidate: x
                });
            B && r !== !1 ? k.startTransition(()=>qe()) : qe();
        };
        return k.createElement("form", {
            ref: U,
            method: K,
            action: I,
            onSubmit: l ? m : F,
            ...A,
            "data-discover": !H && i === "render" ? "true" : void 0
        });
    });
    Mb.displayName = "Form";
    function Hb(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function pg(i) {
        let n = k.useContext(Ii);
        return Je(n, Hb(i)), n;
    }
    function qb(i, { target: n, replace: r, unstable_mask: l, state: u, preventScrollReset: c, relative: f, viewTransition: d, unstable_defaultShouldRevalidate: m, unstable_useTransitions: v } = {}) {
        let S = Vc(), b = Gt(), x = ss(i, {
            relative: f
        });
        return k.useCallback((A)=>{
            if (gb(A, n)) {
                A.preventDefault();
                let U = r !== void 0 ? r : Wr(b) === Wr(x), B = ()=>S(i, {
                        replace: U,
                        unstable_mask: l,
                        state: u,
                        preventScrollReset: c,
                        relative: f,
                        viewTransition: d,
                        unstable_defaultShouldRevalidate: m
                    });
                v ? k.startTransition(()=>B()) : B();
            }
        }, [
            b,
            S,
            x,
            r,
            l,
            u,
            n,
            i,
            c,
            f,
            d,
            m,
            v
        ]);
    }
    NE = function(i) {
        nn(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
        let n = k.useRef(Cc(i)), r = k.useRef(!1), l = Gt(), u = k.useMemo(()=>yb(l.search, r.current ? null : n.current), [
            l.search
        ]), c = Vc(), f = k.useCallback((d, m)=>{
            const v = Cc(typeof d == "function" ? d(new URLSearchParams(u)) : d);
            r.current = !0, c("?" + v, m);
        }, [
            c,
            u
        ]);
        return [
            u,
            f
        ];
    };
    var $b = 0, Ib = ()=>`__${String(++$b)}__`;
    function Pb() {
        let { router: i } = pg("useSubmit"), { basename: n } = k.useContext(Pt), r = sb(), l = i.fetch, u = i.navigate;
        return k.useCallback(async (c, f = {})=>{
            let { action: d, method: m, encType: v, formData: S, body: b } = wb(c, n);
            if (f.navigate === !1) {
                let x = f.fetcherKey || Ib();
                await l(x, r, f.action || d, {
                    unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                    preventScrollReset: f.preventScrollReset,
                    formData: S,
                    body: b,
                    formMethod: f.method || m,
                    formEncType: f.encType || v,
                    flushSync: f.flushSync
                });
            } else await u(f.action || d, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: S,
                body: b,
                formMethod: f.method || m,
                formEncType: f.encType || v,
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
    function Gb(i, { relative: n } = {}) {
        let { basename: r } = k.useContext(Pt), l = k.useContext(cn);
        Je(l, "useFormAction must be used inside a RouteContext");
        let [u] = l.matches.slice(-1), c = {
            ...ss(i || ".", {
                relative: n
            })
        }, f = Gt();
        if (i == null) {
            c.search = f.search;
            let d = new URLSearchParams(c.search), m = d.getAll("index");
            if (m.some((S)=>S === "")) {
                d.delete("index"), m.filter((b)=>b).forEach((b)=>d.append("index", b));
                let S = d.toString();
                c.search = S ? `?${S}` : "";
            }
        }
        return (!i || i === ".") && u.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (c.pathname = c.pathname === "/" ? r : bn([
            r,
            c.pathname
        ])), Wr(c);
    }
    function Vb(i, { relative: n } = {}) {
        let r = k.useContext(ig);
        Je(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: l } = pg("useViewTransitionState"), u = ss(i, {
            relative: n
        });
        if (!r.isTransitioning) return !1;
        let c = In(r.currentLocation.pathname, l) || r.currentLocation.pathname, f = In(r.nextLocation.pathname, l) || r.nextLocation.pathname;
        return Hl(u.pathname, f) != null || Hl(u.pathname, c) != null;
    }
    let mg, wc, Kb, ym, vm, Yb, Xb, Jb, Fb, gg, Wb;
    mg = k.createContext(null);
    wc = ()=>{
        const i = new Date().getHours();
        return i >= 6 && i < 18 ? "light" : "dark";
    };
    Kb = [
        "blue",
        "red",
        "green",
        "purple",
        "orange"
    ];
    ym = (i)=>{
        const n = document.cookie.match(new RegExp("(^| )" + i + "=([^;]+)"));
        return n ? decodeURIComponent(n[2]) : null;
    };
    vm = (i, n)=>{
        document.cookie = `${i}=${encodeURIComponent(n)};path=/;max-age=31536000;SameSite=Lax`;
    };
    Yb = (i)=>{
        document.cookie = `${i}=;path=/;max-age=0`;
    };
    Xb = ({ children: i })=>{
        const [n, r] = k.useState(()=>{
            const m = ym("themeMode");
            return m === "light" || m === "dark" || m === "auto" ? m : "auto";
        }), [l, u] = k.useState(()=>n === "auto" ? wc() : n), [c, f] = k.useState(()=>{
            const m = ym("colorTheme");
            return Kb.includes(m ?? "") ? m : "blue";
        });
        k.useEffect(()=>{
            if (n !== "auto") {
                u(n);
                return;
            }
            u(wc());
            const m = setInterval(()=>{
                u(wc());
            }, 6e4);
            return ()=>clearInterval(m);
        }, [
            n
        ]), k.useEffect(()=>{
            document.documentElement.setAttribute("data-theme", l);
        }, [
            l
        ]), k.useEffect(()=>{
            document.documentElement.setAttribute("data-color", c), vm("colorTheme", c);
        }, [
            c
        ]), k.useEffect(()=>{
            vm("themeMode", n), Yb("theme");
        }, [
            n
        ]);
        const d = ()=>{
            r((m)=>m === "auto" ? "light" : m === "light" ? "dark" : "auto");
        };
        return T.jsx(mg.Provider, {
            value: {
                theme: l,
                mode: n,
                toggleTheme: d,
                colorTheme: c,
                setColorTheme: f
            },
            children: i
        });
    };
    Jb = ()=>{
        const i = k.useContext(mg);
        if (!i) throw new Error("useTheme must be used within ThemeProvider");
        return i;
    };
    Fb = {
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
                    groupConvert: "변환",
                    groupEdit: "편집",
                    groupCreate: "생성",
                    groupManage: "관리"
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
                    serviceUnavailable: "AI 휴머나이징 서비스가 설정되지 않았습니다."
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
                    groupConvert: "Convert",
                    groupEdit: "Edit",
                    groupCreate: "Create",
                    groupManage: "Manage"
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
                    serviceUnavailable: "AI humanization service is not configured."
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
    gg = k.createContext(null);
    Wb = ({ children: i })=>{
        const [n, r] = k.useState("ko"), l = ()=>{
            r((c)=>c === "ko" ? "en" : "ko");
        }, u = (c)=>{
            const f = c.split(".");
            let d = Fb[n];
            for (const m of f)d = d?.[m];
            return typeof d == "string" ? d : c;
        };
        return T.jsx(gg.Provider, {
            value: {
                language: n,
                toggleLanguage: l,
                t: u
            },
            children: i
        });
    };
    yg = ()=>{
        const i = k.useContext(gg);
        if (!i) throw new Error("useLanguage must be used within LanguageProvider");
        return i;
    };
    function Yl(i, n) {
        var r = {};
        for(var l in i)Object.prototype.hasOwnProperty.call(i, l) && n.indexOf(l) < 0 && (r[l] = i[l]);
        if (i != null && typeof Object.getOwnPropertySymbols == "function") for(var u = 0, l = Object.getOwnPropertySymbols(i); u < l.length; u++)n.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[u]) && (r[l[u]] = i[l[u]]);
        return r;
    }
    function Qb(i, n, r, l) {
        function u(c) {
            return c instanceof r ? c : new r(function(f) {
                f(c);
            });
        }
        return new (r || (r = Promise))(function(c, f) {
            function d(S) {
                try {
                    v(l.next(S));
                } catch (b) {
                    f(b);
                }
            }
            function m(S) {
                try {
                    v(l.throw(S));
                } catch (b) {
                    f(b);
                }
            }
            function v(S) {
                S.done ? c(S.value) : u(S.value).then(d, m);
            }
            v((l = l.apply(i, n || [])).next());
        });
    }
    const Zb = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n);
    class Qc extends Error {
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
    class ew extends Qc {
        constructor(n){
            super("Failed to send a request to the Edge Function", "FunctionsFetchError", n);
        }
    }
    class bm extends Qc {
        constructor(n){
            super("Relay Error invoking the Edge Function", "FunctionsRelayError", n);
        }
    }
    class wm extends Qc {
        constructor(n){
            super("Edge Function returned a non-2xx status code", "FunctionsHttpError", n);
        }
    }
    var Oc;
    (function(i) {
        i.Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
    })(Oc || (Oc = {}));
    class tw {
        constructor(n, { headers: r = {}, customFetch: l, region: u = Oc.Any } = {}){
            this.url = n, this.headers = r, this.region = u, this.fetch = Zb(l);
        }
        setAuth(n) {
            this.headers.Authorization = `Bearer ${n}`;
        }
        invoke(n) {
            return Qb(this, arguments, void 0, function*(r, l = {}) {
                var u;
                let c, f;
                try {
                    const { headers: d, method: m, body: v, signal: S, timeout: b } = l;
                    let x = {}, { region: A } = l;
                    A || (A = this.region);
                    const U = new URL(`${this.url}/${r}`);
                    A && A !== "any" && (x["x-region"] = A, U.searchParams.set("forceFunctionRegion", A));
                    let B;
                    v && (d && !Object.prototype.hasOwnProperty.call(d, "Content-Type") || !d) ? typeof Blob < "u" && v instanceof Blob || v instanceof ArrayBuffer ? (x["Content-Type"] = "application/octet-stream", B = v) : typeof v == "string" ? (x["Content-Type"] = "text/plain", B = v) : typeof FormData < "u" && v instanceof FormData ? B = v : (x["Content-Type"] = "application/json", B = JSON.stringify(v)) : v && typeof v != "string" && !(typeof Blob < "u" && v instanceof Blob) && !(v instanceof ArrayBuffer) && !(typeof FormData < "u" && v instanceof FormData) ? B = JSON.stringify(v) : B = v;
                    let D = S;
                    b && (f = new AbortController, c = setTimeout(()=>f.abort(), b), S ? (D = f.signal, S.addEventListener("abort", ()=>f.abort())) : D = f.signal);
                    const I = yield this.fetch(U.toString(), {
                        method: m || "POST",
                        headers: Object.assign(Object.assign(Object.assign({}, x), this.headers), d),
                        body: B,
                        signal: D
                    }).catch((Z)=>{
                        throw new ew(Z);
                    }), K = I.headers.get("x-relay-error");
                    if (K && K === "true") throw new bm(I);
                    if (!I.ok) throw new wm(I);
                    let H = ((u = I.headers.get("Content-Type")) !== null && u !== void 0 ? u : "text/plain").split(";")[0].trim(), F;
                    return H === "application/json" ? F = yield I.json() : H === "application/octet-stream" || H === "application/pdf" ? F = yield I.blob() : H === "text/event-stream" ? F = I : H === "multipart/form-data" ? F = yield I.formData() : F = yield I.text(), {
                        data: F,
                        error: null,
                        response: I
                    };
                } catch (d) {
                    return {
                        data: null,
                        error: d,
                        response: d instanceof wm || d instanceof bm ? d.context : void 0
                    };
                } finally{
                    c && clearTimeout(c);
                }
            });
        }
    }
    const vg = 3, _m = (i)=>Math.min(1e3 * 2 ** i, 3e4), nw = [
        520,
        503
    ], bg = [
        "GET",
        "HEAD",
        "OPTIONS"
    ];
    var aw = class extends Error {
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
    function Sm(i, n) {
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
    function iw(i, n, r, l) {
        return !(!l || r >= vg || !bg.includes(i) || !nw.includes(n));
    }
    var rw = class {
        constructor(i){
            var n, r, l, u, c;
            this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = i.method, this.url = i.url, this.headers = new Headers(i.headers), this.schema = i.schema, this.body = i.body, this.shouldThrowOnError = (n = i.shouldThrowOnError) !== null && n !== void 0 ? n : !1, this.signal = i.signal, this.isMaybeSingle = (r = i.isMaybeSingle) !== null && r !== void 0 ? r : !1, this.shouldStripNulls = (l = i.shouldStripNulls) !== null && l !== void 0 ? l : !1, this.urlLengthLimit = (u = i.urlLengthLimit) !== null && u !== void 0 ? u : 8e3, this.retryEnabled = (c = i.retry) !== null && c !== void 0 ? c : !0, i.fetch ? this.fetch = i.fetch : this.fetch = fetch;
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
            let c = (async ()=>{
                let f = 0;
                for(;;){
                    const v = new Headers(r.headers);
                    f > 0 && v.set("X-Retry-Count", String(f));
                    let S;
                    try {
                        S = await l(r.url.toString(), {
                            method: r.method,
                            headers: v,
                            body: JSON.stringify(r.body),
                            signal: r.signal
                        });
                    } catch (b) {
                        if (b?.name === "AbortError" || b?.code === "ABORT_ERR" || !bg.includes(r.method)) throw b;
                        if (r.retryEnabled && f < vg) {
                            const x = _m(f);
                            f++, await Sm(x, r.signal);
                            continue;
                        }
                        throw b;
                    }
                    if (iw(r.method, S.status, f, r.retryEnabled)) {
                        var d, m;
                        const b = (d = (m = S.headers) === null || m === void 0 ? void 0 : m.get("Retry-After")) !== null && d !== void 0 ? d : null, x = b !== null ? Math.max(0, parseInt(b, 10) || 0) * 1e3 : _m(f);
                        await S.text(), f++, await Sm(x, r.signal);
                        continue;
                    }
                    return await r.processResponse(S);
                }
            })();
            return this.shouldThrowOnError || (c = c.catch((f)=>{
                var d;
                let m = "", v = "", S = "";
                const b = f?.cause;
                if (b) {
                    var x, A, U, B;
                    const K = (x = b?.message) !== null && x !== void 0 ? x : "", H = (A = b?.code) !== null && A !== void 0 ? A : "";
                    m = `${(U = f?.name) !== null && U !== void 0 ? U : "FetchError"}: ${f?.message}`, m += `

Caused by: ${(B = b?.name) !== null && B !== void 0 ? B : "Error"}: ${K}`, H && (m += ` (${H})`), b?.stack && (m += `
${b.stack}`);
                } else {
                    var D;
                    m = (D = f?.stack) !== null && D !== void 0 ? D : "";
                }
                const I = this.url.toString().length;
                return f?.name === "AbortError" || f?.code === "ABORT_ERR" ? (S = "", v = "Request was aborted (timeout or manual cancellation)", I > this.urlLengthLimit && (v += `. Note: Your request URL is ${I} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : (b?.name === "HeadersOverflowError" || b?.code === "UND_ERR_HEADERS_OVERFLOW") && (S = "", v = "HTTP headers exceeded server limits (typically 16KB)", I > this.urlLengthLimit && (v += `. Your request URL is ${I} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
                    success: !1,
                    error: {
                        message: `${(d = f?.name) !== null && d !== void 0 ? d : "FetchError"}: ${f?.message}`,
                        details: m,
                        hint: v,
                        code: S
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ""
                };
            })), c.then(i, n);
        }
        async processResponse(i) {
            var n = this;
            let r = null, l = null, u = null, c = i.status, f = i.statusText;
            if (i.ok) {
                var d, m;
                if (n.method !== "HEAD") {
                    var v;
                    const x = await i.text();
                    x === "" || (n.headers.get("Accept") === "text/csv" || n.headers.get("Accept") && (!((v = n.headers.get("Accept")) === null || v === void 0) && v.includes("application/vnd.pgrst.plan+text")) ? l = x : l = JSON.parse(x));
                }
                const S = (d = n.headers.get("Prefer")) === null || d === void 0 ? void 0 : d.match(/count=(exact|planned|estimated)/), b = (m = i.headers.get("content-range")) === null || m === void 0 ? void 0 : m.split("/");
                S && b && b.length > 1 && (u = parseInt(b[1])), n.isMaybeSingle && Array.isArray(l) && (l.length > 1 ? (r = {
                    code: "PGRST116",
                    details: `Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, l = null, u = null, c = 406, f = "Not Acceptable") : l.length === 1 ? l = l[0] : l = null);
            } else {
                const S = await i.text();
                try {
                    r = JSON.parse(S), Array.isArray(r) && i.status === 404 && (l = [], r = null, c = 200, f = "OK");
                } catch  {
                    i.status === 404 && S === "" ? (c = 204, f = "No Content") : r = {
                        message: S
                    };
                }
                if (r && n.shouldThrowOnError) throw new aw(r);
            }
            return {
                success: r === null,
                error: r,
                data: l,
                count: u,
                status: c,
                statusText: f
            };
        }
        returns() {
            return this;
        }
        overrideTypes() {
            return this;
        }
    }, sw = class extends rw {
        select(i) {
            let n = !1;
            const r = (i ?? "*").split("").map((l)=>/\s/.test(l) && !n ? "" : (l === '"' && (n = !n), l)).join("");
            return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
        }
        order(i, { ascending: n = !0, nullsFirst: r, foreignTable: l, referencedTable: u = l } = {}) {
            const c = u ? `${u}.order` : "order", f = this.url.searchParams.get(c);
            return this.url.searchParams.set(c, `${f ? `${f},` : ""}${i}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
        }
        limit(i, { foreignTable: n, referencedTable: r = n } = {}) {
            const l = typeof r > "u" ? "limit" : `${r}.limit`;
            return this.url.searchParams.set(l, `${i}`), this;
        }
        range(i, n, { foreignTable: r, referencedTable: l = r } = {}) {
            const u = typeof l > "u" ? "offset" : `${l}.offset`, c = typeof l > "u" ? "limit" : `${l}.limit`;
            return this.url.searchParams.set(u, `${i}`), this.url.searchParams.set(c, `${n - i + 1}`), this;
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
        explain({ analyze: i = !1, verbose: n = !1, settings: r = !1, buffers: l = !1, wal: u = !1, format: c = "text" } = {}) {
            var f;
            const d = [
                i ? "analyze" : null,
                n ? "verbose" : null,
                r ? "settings" : null,
                l ? "buffers" : null,
                u ? "wal" : null
            ].filter(Boolean).join("|"), m = (f = this.headers.get("Accept")) !== null && f !== void 0 ? f : "application/json";
            return this.headers.set("Accept", `application/vnd.pgrst.plan+${c}; for="${m}"; options=${d};`), c === "json" ? this : this;
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
    const Em = new RegExp("[,()]");
    var Bi = class extends sw {
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
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && Em.test(l) ? `"${l}"` : `${l}`).join(",");
            return this.url.searchParams.append(i, `in.(${r})`), this;
        }
        notIn(i, n) {
            const r = Array.from(new Set(n)).map((l)=>typeof l == "string" && Em.test(l) ? `"${l}"` : `${l}`).join(",");
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
            const c = r === void 0 ? "" : `(${r})`;
            return this.url.searchParams.append(i, `${u}fts${c}.${n}`), this;
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
    }, lw = class {
        constructor(i, { headers: n = {}, schema: r, fetch: l, urlLengthLimit: u = 8e3, retry: c }){
            this.url = i, this.headers = new Headers(n), this.schema = r, this.fetch = l, this.urlLengthLimit = u, this.retry = c;
        }
        cloneRequestState() {
            return {
                url: new URL(this.url.toString()),
                headers: new Headers(this.headers)
            };
        }
        select(i, n) {
            const { head: r = !1, count: l } = n ?? {}, u = r ? "HEAD" : "GET";
            let c = !1;
            const f = (i ?? "*").split("").map((v)=>/\s/.test(v) && !c ? "" : (v === '"' && (c = !c), v)).join(""), { url: d, headers: m } = this.cloneRequestState();
            return d.searchParams.set("select", f), l && m.append("Prefer", `count=${l}`), new Bi({
                method: u,
                url: d,
                headers: m,
                schema: this.schema,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        insert(i, { count: n, defaultToNull: r = !0 } = {}) {
            var l;
            const u = "POST", { url: c, headers: f } = this.cloneRequestState();
            if (n && f.append("Prefer", `count=${n}`), r || f.append("Prefer", "missing=default"), Array.isArray(i)) {
                const d = i.reduce((m, v)=>m.concat(Object.keys(v)), []);
                if (d.length > 0) {
                    const m = [
                        ...new Set(d)
                    ].map((v)=>`"${v}"`);
                    c.searchParams.set("columns", m.join(","));
                }
            }
            return new Bi({
                method: u,
                url: c,
                headers: f,
                schema: this.schema,
                body: i,
                fetch: (l = this.fetch) !== null && l !== void 0 ? l : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        upsert(i, { onConflict: n, ignoreDuplicates: r = !1, count: l, defaultToNull: u = !0 } = {}) {
            var c;
            const f = "POST", { url: d, headers: m } = this.cloneRequestState();
            if (m.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`), n !== void 0 && d.searchParams.set("on_conflict", n), l && m.append("Prefer", `count=${l}`), u || m.append("Prefer", "missing=default"), Array.isArray(i)) {
                const v = i.reduce((S, b)=>S.concat(Object.keys(b)), []);
                if (v.length > 0) {
                    const S = [
                        ...new Set(v)
                    ].map((b)=>`"${b}"`);
                    d.searchParams.set("columns", S.join(","));
                }
            }
            return new Bi({
                method: f,
                url: d,
                headers: m,
                schema: this.schema,
                body: i,
                fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        update(i, { count: n } = {}) {
            var r;
            const l = "PATCH", { url: u, headers: c } = this.cloneRequestState();
            return n && c.append("Prefer", `count=${n}`), new Bi({
                method: l,
                url: u,
                headers: c,
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
            return i && u.append("Prefer", `count=${i}`), new Bi({
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
    function Qr(i) {
        "@babel/helpers - typeof";
        return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, Qr(i);
    }
    function ow(i, n) {
        if (Qr(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (Qr(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function uw(i) {
        var n = ow(i, "string");
        return Qr(n) == "symbol" ? n : n + "";
    }
    function cw(i, n, r) {
        return (n = uw(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function Tm(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function Cl(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? Tm(Object(r), !0).forEach(function(l) {
                cw(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    var hw = class wg {
        constructor(n, { headers: r = {}, schema: l, fetch: u, timeout: c, urlLengthLimit: f = 8e3, retry: d } = {}){
            this.url = n, this.headers = new Headers(r), this.schemaName = l, this.urlLengthLimit = f;
            const m = u ?? globalThis.fetch;
            c !== void 0 && c > 0 ? this.fetch = (v, S)=>{
                const b = new AbortController, x = setTimeout(()=>b.abort(), c), A = S?.signal;
                if (A) {
                    if (A.aborted) return clearTimeout(x), m(v, S);
                    const U = ()=>{
                        clearTimeout(x), b.abort();
                    };
                    return A.addEventListener("abort", U, {
                        once: !0
                    }), m(v, Cl(Cl({}, S), {}, {
                        signal: b.signal
                    })).finally(()=>{
                        clearTimeout(x), A.removeEventListener("abort", U);
                    });
                }
                return m(v, Cl(Cl({}, S), {}, {
                    signal: b.signal
                })).finally(()=>clearTimeout(x));
            } : this.fetch = m, this.retry = d;
        }
        from(n) {
            if (!n || typeof n != "string" || n.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
            return new lw(new URL(`${this.url}/${n}`), {
                headers: new Headers(this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        schema(n) {
            return new wg(this.url, {
                headers: this.headers,
                schema: n,
                fetch: this.fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
        rpc(n, r = {}, { head: l = !1, get: u = !1, count: c } = {}) {
            var f;
            let d;
            const m = new URL(`${this.url}/rpc/${n}`);
            let v;
            const S = (A)=>A !== null && typeof A == "object" && (!Array.isArray(A) || A.some(S)), b = l && Object.values(r).some(S);
            b ? (d = "POST", v = r) : l || u ? (d = l ? "HEAD" : "GET", Object.entries(r).filter(([A, U])=>U !== void 0).map(([A, U])=>[
                    A,
                    Array.isArray(U) ? `{${U.join(",")}}` : `${U}`
                ]).forEach(([A, U])=>{
                m.searchParams.append(A, U);
            })) : (d = "POST", v = r);
            const x = new Headers(this.headers);
            return b ? x.set("Prefer", c ? `count=${c},return=minimal` : "return=minimal") : c && x.set("Prefer", `count=${c}`), new Bi({
                method: d,
                url: m,
                headers: x,
                schema: this.schemaName,
                body: v,
                fetch: (f = this.fetch) !== null && f !== void 0 ? f : fetch,
                urlLengthLimit: this.urlLengthLimit,
                retry: this.retry
            });
        }
    };
    class fw {
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
                    const u = l.node, c = parseInt(u.replace(/^v/, "").split(".")[0]);
                    return c >= 22 ? typeof globalThis.WebSocket < "u" ? {
                        type: "native",
                        constructor: globalThis.WebSocket
                    } : {
                        type: "unsupported",
                        error: `Node.js ${c} detected but native WebSocket not found.`,
                        workaround: "Provide a WebSocket implementation via the transport option."
                    } : {
                        type: "unsupported",
                        error: `Node.js ${c} detected without native WebSocket support.`,
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
    const dw = "2.103.0", pw = `realtime-js/${dw}`, mw = "1.0.0", _g = "2.0.0", gw = _g, yw = 1e4, vw = 100, ga = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    }, Sg = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        leave: "phx_leave",
        access_token: "access_token"
    }, kc = {
        connecting: "connecting",
        closing: "closing",
        closed: "closed"
    };
    class bw {
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
            var u, c;
            const f = n.topic, d = (u = n.ref) !== null && u !== void 0 ? u : "", m = (c = n.join_ref) !== null && c !== void 0 ? c : "", v = n.payload.event, S = this.allowedMetadataKeys ? this._pick(n.payload, this.allowedMetadataKeys) : {}, b = Object.keys(S).length === 0 ? "" : JSON.stringify(S);
            if (m.length > 255) throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);
            if (d.length > 255) throw new Error(`ref length ${d.length} exceeds maximum of 255`);
            if (f.length > 255) throw new Error(`topic length ${f.length} exceeds maximum of 255`);
            if (v.length > 255) throw new Error(`userEvent length ${v.length} exceeds maximum of 255`);
            if (b.length > 255) throw new Error(`metadata length ${b.length} exceeds maximum of 255`);
            const x = this.USER_BROADCAST_PUSH_META_LENGTH + m.length + d.length + f.length + v.length + b.length, A = new ArrayBuffer(this.HEADER_LENGTH + x);
            let U = new DataView(A), B = 0;
            U.setUint8(B++, this.KINDS.userBroadcastPush), U.setUint8(B++, m.length), U.setUint8(B++, d.length), U.setUint8(B++, f.length), U.setUint8(B++, v.length), U.setUint8(B++, b.length), U.setUint8(B++, r), Array.from(m, (I)=>U.setUint8(B++, I.charCodeAt(0))), Array.from(d, (I)=>U.setUint8(B++, I.charCodeAt(0))), Array.from(f, (I)=>U.setUint8(B++, I.charCodeAt(0))), Array.from(v, (I)=>U.setUint8(B++, I.charCodeAt(0))), Array.from(b, (I)=>U.setUint8(B++, I.charCodeAt(0)));
            var D = new Uint8Array(A.byteLength + l.byteLength);
            return D.set(new Uint8Array(A), 0), D.set(new Uint8Array(l), A.byteLength), D.buffer;
        }
        decode(n, r) {
            if (this._isArrayBuffer(n)) {
                let l = this._binaryDecode(n);
                return r(l);
            }
            if (typeof n == "string") {
                const l = JSON.parse(n), [u, c, f, d, m] = l;
                return r({
                    join_ref: u,
                    ref: c,
                    topic: f,
                    event: d,
                    payload: m
                });
            }
            return r({});
        }
        _binaryDecode(n) {
            const r = new DataView(n), l = r.getUint8(0), u = new TextDecoder;
            if (l === this.KINDS.userBroadcast) return this._decodeUserBroadcast(n, r, u);
        }
        _decodeUserBroadcast(n, r, l) {
            const u = r.getUint8(1), c = r.getUint8(2), f = r.getUint8(3), d = r.getUint8(4);
            let m = this.HEADER_LENGTH + 4;
            const v = l.decode(n.slice(m, m + u));
            m = m + u;
            const S = l.decode(n.slice(m, m + c));
            m = m + c;
            const b = l.decode(n.slice(m, m + f));
            m = m + f;
            const x = n.slice(m, n.byteLength), A = d === this.JSON_ENCODING ? JSON.parse(l.decode(x)) : x, U = {
                type: this.BROADCAST_EVENT,
                event: S,
                payload: A
            };
            return f > 0 && (U.meta = JSON.parse(b)), {
                join_ref: null,
                ref: null,
                topic: v,
                event: this.BROADCAST_EVENT,
                payload: U
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
    var Ie;
    (function(i) {
        i.abstime = "abstime", i.bool = "bool", i.date = "date", i.daterange = "daterange", i.float4 = "float4", i.float8 = "float8", i.int2 = "int2", i.int4 = "int4", i.int4range = "int4range", i.int8 = "int8", i.int8range = "int8range", i.json = "json", i.jsonb = "jsonb", i.money = "money", i.numeric = "numeric", i.oid = "oid", i.reltime = "reltime", i.text = "text", i.time = "time", i.timestamp = "timestamp", i.timestamptz = "timestamptz", i.timetz = "timetz", i.tsrange = "tsrange", i.tstzrange = "tstzrange";
    })(Ie || (Ie = {}));
    const Am = (i, n, r = {})=>{
        var l;
        const u = (l = r.skipTypes) !== null && l !== void 0 ? l : [];
        return n ? Object.keys(n).reduce((c, f)=>(c[f] = ww(f, i, n, u), c), {}) : {};
    }, ww = (i, n, r, l)=>{
        const u = n.find((d)=>d.name === i), c = u?.type, f = r[i];
        return c && !l.includes(c) ? Eg(c, f) : jc(f);
    }, Eg = (i, n)=>{
        if (i.charAt(0) === "_") {
            const r = i.slice(1, i.length);
            return Tw(n, r);
        }
        switch(i){
            case Ie.bool:
                return _w(n);
            case Ie.float4:
            case Ie.float8:
            case Ie.int2:
            case Ie.int4:
            case Ie.int8:
            case Ie.numeric:
            case Ie.oid:
                return Sw(n);
            case Ie.json:
            case Ie.jsonb:
                return Ew(n);
            case Ie.timestamp:
                return Aw(n);
            case Ie.abstime:
            case Ie.date:
            case Ie.daterange:
            case Ie.int4range:
            case Ie.int8range:
            case Ie.money:
            case Ie.reltime:
            case Ie.text:
            case Ie.time:
            case Ie.timestamptz:
            case Ie.timetz:
            case Ie.tsrange:
            case Ie.tstzrange:
                return jc(n);
            default:
                return jc(n);
        }
    }, jc = (i)=>i, _w = (i)=>{
        switch(i){
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return i;
        }
    }, Sw = (i)=>{
        if (typeof i == "string") {
            const n = parseFloat(i);
            if (!Number.isNaN(n)) return n;
        }
        return i;
    }, Ew = (i)=>{
        if (typeof i == "string") try {
            return JSON.parse(i);
        } catch  {
            return i;
        }
        return i;
    }, Tw = (i, n)=>{
        if (typeof i != "string") return i;
        const r = i.length - 1, l = i[r];
        if (i[0] === "{" && l === "}") {
            let c;
            const f = i.slice(1, r);
            try {
                c = JSON.parse("[" + f + "]");
            } catch  {
                c = f ? f.split(",") : [];
            }
            return c.map((d)=>Eg(n, d));
        }
        return i;
    }, Aw = (i)=>typeof i == "string" ? i.replace(" ", "T") : i, Tg = (i)=>{
        const n = new URL(i);
        return n.protocol = n.protocol.replace(/^ws/i, "http"), n.pathname = n.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), n.pathname === "" || n.pathname === "/" ? n.pathname = "/api/broadcast" : n.pathname = n.pathname + "/api/broadcast", n.href;
    };
    var Xr = (i)=>typeof i == "function" ? i : function() {
            return i;
        }, xw = typeof self < "u" ? self : null, Li = typeof window < "u" ? window : null, yn = xw || Li || globalThis, Rw = "2.0.0", Cw = 1e4, Ow = 1e3, vn = {
        connecting: 0,
        open: 1,
        closing: 2,
        closed: 3
    }, Ut = {
        closed: "closed",
        errored: "errored",
        joined: "joined",
        joining: "joining",
        leaving: "leaving"
    }, Hn = {
        close: "phx_close",
        error: "phx_error",
        join: "phx_join",
        reply: "phx_reply",
        leave: "phx_leave"
    }, Uc = {
        longpoll: "longpoll",
        websocket: "websocket"
    }, kw = {
        complete: 4
    }, Nc = "base64url.bearer.phx.", Ol = class {
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
    }, Ag = class {
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
    }, jw = class {
        constructor(i, n, r){
            this.state = Ut.closed, this.topic = i, this.params = Xr(n || {}), this.socket = r, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new Ol(this, Hn.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new Ag(()=>{
                this.socket.isConnected() && this.rejoin();
            }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(()=>{
                this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
            })), this.joinPush.receive("ok", ()=>{
                this.state = Ut.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((l)=>l.send()), this.pushBuffer = [];
            }), this.joinPush.receive("error", (l)=>{
                this.state = Ut.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, l), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.onClose(()=>{
                this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = Ut.closed, this.socket.remove(this);
            }), this.onError((l)=>{
                this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, l), this.isJoining() && this.joinPush.reset(), this.state = Ut.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.joinPush.receive("timeout", ()=>{
                this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new Ol(this, Hn.leave, Xr({}), this.timeout).send(), this.state = Ut.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
            }), this.on(Hn.reply, (l, u)=>{
                this.trigger(this.replyEventName(u), l);
            });
        }
        join(i = this.timeout) {
            if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = i, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
        teardown() {
            this.pushBuffer.forEach((i)=>i.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = Ut.closed, this.bindings = [];
        }
        onClose(i) {
            this.on(Hn.close, i);
        }
        onError(i) {
            return this.on(Hn.error, (n)=>i(n));
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
            let l = new Ol(this, i, function() {
                return n;
            }, r);
            return this.canPush() ? l.send() : (l.startTimeout(), this.pushBuffer.push(l)), l;
        }
        leave(i = this.timeout) {
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = Ut.leaving;
            let n = ()=>{
                this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(Hn.close, "leave");
            }, r = new Ol(this, Hn.leave, Xr({}), i);
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
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Ut.joining, this.joinPush.resend(i));
        }
        trigger(i, n, r, l) {
            let u = this.onMessage(i, n, r, l);
            if (n && !u) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            let c = this.bindings.filter((f)=>f.event === i && this.filterBindings(f, n, r));
            for(let f = 0; f < c.length; f++)c[f].callback(u, r, l || this.joinRef());
        }
        replyEventName(i) {
            return `chan_reply_${i}`;
        }
        isClosed() {
            return this.state === Ut.closed;
        }
        isErrored() {
            return this.state === Ut.errored;
        }
        isJoined() {
            return this.state === Ut.joined;
        }
        isJoining() {
            return this.state === Ut.joining;
        }
        isLeaving() {
            return this.state === Ut.leaving;
        }
    }, ql = class {
        static request(i, n, r, l, u, c, f) {
            if (yn.XDomainRequest) {
                let d = new yn.XDomainRequest;
                return this.xdomainRequest(d, i, n, l, u, c, f);
            } else if (yn.XMLHttpRequest) {
                let d = new yn.XMLHttpRequest;
                return this.xhrRequest(d, i, n, r, l, u, c, f);
            } else {
                if (yn.fetch && yn.AbortController) return this.fetchRequest(i, n, r, l, u, c, f);
                throw new Error("No suitable XMLHttpRequest implementation found");
            }
        }
        static fetchRequest(i, n, r, l, u, c, f) {
            let d = {
                method: i,
                headers: r,
                body: l
            }, m = null;
            return u && (m = new AbortController, setTimeout(()=>m.abort(), u), d.signal = m.signal), yn.fetch(n, d).then((v)=>v.text()).then((v)=>this.parseJSON(v)).then((v)=>f && f(v)).catch((v)=>{
                v.name === "AbortError" && c ? c() : f && f(null);
            }), m;
        }
        static xdomainRequest(i, n, r, l, u, c, f) {
            return i.timeout = u, i.open(n, r), i.onload = ()=>{
                let d = this.parseJSON(i.responseText);
                f && f(d);
            }, c && (i.ontimeout = c), i.onprogress = ()=>{}, i.send(l), i;
        }
        static xhrRequest(i, n, r, l, u, c, f, d) {
            i.open(n, r, !0), i.timeout = c;
            for (let [m, v] of Object.entries(l))i.setRequestHeader(m, v);
            return i.onerror = ()=>d && d(null), i.onreadystatechange = ()=>{
                if (i.readyState === kw.complete && d) {
                    let m = this.parseJSON(i.responseText);
                    d(m);
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
                let u = n ? `${n}[${l}]` : l, c = i[l];
                typeof c == "object" ? r.push(this.serialize(c, u)) : r.push(encodeURIComponent(u) + "=" + encodeURIComponent(c));
            }
            return r.join("&");
        }
        static appendParams(i, n) {
            if (Object.keys(n).length === 0) return i;
            let r = i.match(/\?/) ? "&" : "?";
            return `${i}${r}${this.serialize(n)}`;
        }
    }, Uw = (i)=>{
        let n = "", r = new Uint8Array(i), l = r.byteLength;
        for(let u = 0; u < l; u++)n += String.fromCharCode(r[u]);
        return btoa(n);
    }, Ci = class {
        constructor(i, n){
            n && n.length === 2 && n[1].startsWith(Nc) && (this.authToken = atob(n[1].slice(Nc.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = new Set, this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(i), this.readyState = vn.connecting, setTimeout(()=>this.poll(), 0);
        }
        normalizeEndpoint(i) {
            return i.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + Uc.websocket), "$1/" + Uc.longpoll);
        }
        endpointURL() {
            return ql.appendParams(this.pollEndpoint, {
                token: this.token
            });
        }
        closeAndRetry(i, n, r) {
            this.close(i, n, r), this.readyState = vn.connecting;
        }
        ontimeout() {
            this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
        }
        isActive() {
            return this.readyState === vn.open || this.readyState === vn.connecting;
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
                        u.forEach((c)=>{
                            setTimeout(()=>this.onmessage({
                                    data: c
                                }), 0);
                        }), this.poll();
                        break;
                    case 204:
                        this.poll();
                        break;
                    case 410:
                        this.readyState = vn.open, this.onopen({}), this.poll();
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
            typeof i != "string" && (i = Uw(i)), this.currentBatch ? this.currentBatch.push(i) : this.awaitingBatchAck ? this.batchBuffer.push(i) : (this.currentBatch = [
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
            this.readyState = vn.closed;
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
            let c, f = ()=>{
                this.reqs.delete(c), l();
            };
            c = ql.request(i, this.endpointURL(), n, r, this.timeout, f, (d)=>{
                this.reqs.delete(c), this.isActive() && u(d);
            }), this.reqs.add(c);
        }
    }, Nw = class Kr {
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
                let { onJoin: c, onLeave: f, onSync: d } = this.caller;
                this.joinRef = this.channel.joinRef(), this.state = Kr.syncState(this.state, u, c, f), this.pendingDiffs.forEach((m)=>{
                    this.state = Kr.syncDiff(this.state, m, c, f);
                }), this.pendingDiffs = [], d();
            }), this.channel.on(l.diff, (u)=>{
                let { onJoin: c, onLeave: f, onSync: d } = this.caller;
                this.inPendingSyncState() ? this.pendingDiffs.push(u) : (this.state = Kr.syncDiff(this.state, u, c, f), d());
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
            return Kr.list(this.state, n);
        }
        inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
        static syncState(n, r, l, u) {
            let c = this.clone(n), f = {}, d = {};
            return this.map(c, (m, v)=>{
                r[m] || (d[m] = v);
            }), this.map(r, (m, v)=>{
                let S = c[m];
                if (S) {
                    let b = v.metas.map((B)=>B.phx_ref), x = S.metas.map((B)=>B.phx_ref), A = v.metas.filter((B)=>x.indexOf(B.phx_ref) < 0), U = S.metas.filter((B)=>b.indexOf(B.phx_ref) < 0);
                    A.length > 0 && (f[m] = v, f[m].metas = A), U.length > 0 && (d[m] = this.clone(S), d[m].metas = U);
                } else f[m] = v;
            }), this.syncDiff(c, {
                joins: f,
                leaves: d
            }, l, u);
        }
        static syncDiff(n, r, l, u) {
            let { joins: c, leaves: f } = this.clone(r);
            return l || (l = function() {}), u || (u = function() {}), this.map(c, (d, m)=>{
                let v = n[d];
                if (n[d] = this.clone(m), v) {
                    let S = n[d].metas.map((x)=>x.phx_ref), b = v.metas.filter((x)=>S.indexOf(x.phx_ref) < 0);
                    n[d].metas.unshift(...b);
                }
                l(d, v, m);
            }), this.map(f, (d, m)=>{
                let v = n[d];
                if (!v) return;
                let S = m.metas.map((b)=>b.phx_ref);
                v.metas = v.metas.filter((b)=>S.indexOf(b.phx_ref) < 0), u(d, v, m), v.metas.length === 0 && delete n[d];
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
    }, kl = {
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
                let [r, l, u, c, f] = JSON.parse(i);
                return n({
                    join_ref: r,
                    ref: l,
                    topic: u,
                    event: c,
                    payload: f
                });
            }
        },
        binaryEncode (i) {
            let { join_ref: n, ref: r, event: l, topic: u, payload: c } = i, f = this.META_LENGTH + n.length + r.length + u.length + l.length, d = new ArrayBuffer(this.HEADER_LENGTH + f), m = new DataView(d), v = 0;
            m.setUint8(v++, this.KINDS.push), m.setUint8(v++, n.length), m.setUint8(v++, r.length), m.setUint8(v++, u.length), m.setUint8(v++, l.length), Array.from(n, (b)=>m.setUint8(v++, b.charCodeAt(0))), Array.from(r, (b)=>m.setUint8(v++, b.charCodeAt(0))), Array.from(u, (b)=>m.setUint8(v++, b.charCodeAt(0))), Array.from(l, (b)=>m.setUint8(v++, b.charCodeAt(0)));
            var S = new Uint8Array(d.byteLength + c.byteLength);
            return S.set(new Uint8Array(d), 0), S.set(new Uint8Array(c), d.byteLength), S.buffer;
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
            let l = n.getUint8(1), u = n.getUint8(2), c = n.getUint8(3), f = this.HEADER_LENGTH + this.META_LENGTH - 1, d = r.decode(i.slice(f, f + l));
            f = f + l;
            let m = r.decode(i.slice(f, f + u));
            f = f + u;
            let v = r.decode(i.slice(f, f + c));
            f = f + c;
            let S = i.slice(f, i.byteLength);
            return {
                join_ref: d,
                ref: null,
                topic: m,
                event: v,
                payload: S
            };
        },
        decodeReply (i, n, r) {
            let l = n.getUint8(1), u = n.getUint8(2), c = n.getUint8(3), f = n.getUint8(4), d = this.HEADER_LENGTH + this.META_LENGTH, m = r.decode(i.slice(d, d + l));
            d = d + l;
            let v = r.decode(i.slice(d, d + u));
            d = d + u;
            let S = r.decode(i.slice(d, d + c));
            d = d + c;
            let b = r.decode(i.slice(d, d + f));
            d = d + f;
            let x = i.slice(d, i.byteLength), A = {
                status: b,
                response: x
            };
            return {
                join_ref: m,
                ref: v,
                topic: S,
                event: Hn.reply,
                payload: A
            };
        },
        decodeBroadcast (i, n, r) {
            let l = n.getUint8(1), u = n.getUint8(2), c = this.HEADER_LENGTH + 2, f = r.decode(i.slice(c, c + l));
            c = c + l;
            let d = r.decode(i.slice(c, c + u));
            c = c + u;
            let m = i.slice(c, i.byteLength);
            return {
                join_ref: null,
                ref: null,
                topic: f,
                event: d,
                payload: m
            };
        }
    }, Dw = class {
        constructor(i, n = {}){
            this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = n.timeout || Cw, this.transport = n.transport || yn.WebSocket || Ci, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = n.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = n.sessionStorage || yn && yn.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = kl.encode.bind(kl), this.defaultDecoder = kl.decode.bind(kl), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = n.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== Ci ? (this.encode = n.encode || this.defaultEncoder, this.decode = n.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
            let r = null;
            Li && Li.addEventListener && (Li.addEventListener("pagehide", (l)=>{
                this.conn && (this.disconnect(), r = this.connectClock);
            }), Li.addEventListener("pageshow", (l)=>{
                r === this.connectClock && (r = null, this.connect());
            }), Li.addEventListener("visibilitychange", ()=>{
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
                ][l - 1] || 5e3, this.logger = n.logger || null, !this.logger && n.debug && (this.logger = (l, u, c)=>{
                console.log(`${l}: ${u}`, c);
            }), this.longpollerTimeout = n.longpollerTimeout || 2e4, this.params = Xr(n.params || {}), this.endPoint = `${i}/${Uc.websocket}`, this.vsn = n.vsn || Rw, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new Ag(()=>{
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
            return Ci;
        }
        replaceTransport(i) {
            this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = i;
        }
        protocol() {
            return location.protocol.match(/^https/) ? "wss" : "ws";
        }
        endPointURL() {
            let i = ql.appendParams(ql.appendParams(this.endPoint, this.params()), {
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
            i && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = Xr(i)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Ci ? this.connectWithFallback(Ci, this.longPollFallbackMs) : this.transportConnect());
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
            return i === Ci ? "LongPoll" : i.name;
        }
        transportConnect() {
            this.connectClock++, this.closeWasClean = !1;
            let i;
            this.authToken && (i = [
                "phoenix",
                `${Nc}${btoa(this.authToken).replace(/=/g, "")}`
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
            let r = !1, l = !0, u, c, f = this.transportName(i), d = (m)=>{
                this.log("transport", `falling back to ${f}...`, m), this.off([
                    u,
                    c
                ]), l = !1, this.replaceTransport(i), this.transportConnect();
            };
            if (this.getSession(`phx:fallback:${f}`)) return d("memorized");
            this.fallbackTimer = setTimeout(d, n), c = this.onError((m)=>{
                this.log("transport", "error", m), l && !r && (clearTimeout(this.fallbackTimer), d(m));
            }), this.fallbackRef && this.off([
                this.fallbackRef
            ]), this.fallbackRef = this.onOpen(()=>{
                if (r = !0, !l) {
                    let m = this.transportName(i);
                    return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${m}`, "true"), this.log("transport", `established ${m} fallback`);
                }
                clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(d, n), this.ping((m)=>{
                    this.log("transport", "connected to primary after", m), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
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
                this.triggerChanError(), this.closeWasClean = !1, this.teardown(()=>this.reconnectTimer.scheduleTimeout(), Ow, "heartbeat timeout");
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
            if (r === 5 || i.readyState === vn.closed) {
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
                i.isErrored() || i.isLeaving() || i.isClosed() || i.trigger(Hn.error);
            });
        }
        connectionState() {
            switch(this.conn && this.conn.readyState){
                case vn.connecting:
                    return "connecting";
                case vn.open:
                    return "open";
                case vn.closing:
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
            let r = new jw(i, n, this);
            return this.channels.push(r), r;
        }
        push(i) {
            if (this.hasLogger()) {
                let { topic: n, event: r, payload: l, ref: u, join_ref: c } = i;
                this.log("push", `${n} ${r} (${c}, ${u})`, l);
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
                let { topic: r, event: l, payload: u, ref: c, join_ref: f } = n;
                if (c && c === this.pendingHeartbeatRef) {
                    const d = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
                    this.clearHeartbeats();
                    try {
                        this.heartbeatCallback(u.status === "ok" ? "ok" : "error", d);
                    } catch (m) {
                        this.log("error", "error in heartbeat callback", m);
                    }
                    this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(()=>this.sendHeartbeat(), this.heartbeatIntervalMs));
                }
                this.hasLogger() && this.log("receive", `${u.status || ""} ${r} ${l} ${c && "(" + c + ")" || ""}`.trim(), u);
                for(let d = 0; d < this.channels.length; d++){
                    const m = this.channels[d];
                    m.isMember(r, l, u, f) && m.trigger(l, u, c, f);
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
    class Jr {
        constructor(n, r){
            const l = Lw(r);
            this.presence = new Nw(n.getChannel(), l), this.presence.onJoin((u, c, f)=>{
                const d = Jr.onJoinPayload(u, c, f);
                n.getChannel().trigger("presence", d);
            }), this.presence.onLeave((u, c, f)=>{
                const d = Jr.onLeavePayload(u, c, f);
                n.getChannel().trigger("presence", d);
            }), this.presence.onSync(()=>{
                n.getChannel().trigger("presence", {
                    event: "sync"
                });
            });
        }
        get state() {
            return Jr.transformState(this.presence.state);
        }
        static transformState(n) {
            return n = Bw(n), Object.getOwnPropertyNames(n).reduce((r, l)=>{
                const u = n[l];
                return r[l] = Ml(u), r;
            }, {});
        }
        static onJoinPayload(n, r, l) {
            const u = xm(r), c = Ml(l);
            return {
                event: "join",
                key: n,
                currentPresences: u,
                newPresences: c
            };
        }
        static onLeavePayload(n, r, l) {
            const u = xm(r), c = Ml(l);
            return {
                event: "leave",
                key: n,
                currentPresences: u,
                leftPresences: c
            };
        }
    }
    function Ml(i) {
        return i.metas.map((n)=>(n.presence_ref = n.phx_ref, delete n.phx_ref, delete n.phx_ref_prev, n));
    }
    function Bw(i) {
        return JSON.parse(JSON.stringify(i));
    }
    function Lw(i) {
        return i?.events && {
            events: i.events
        };
    }
    function xm(i) {
        return i?.metas ? Ml(i) : [];
    }
    var Rm;
    (function(i) {
        i.SYNC = "sync", i.JOIN = "join", i.LEAVE = "leave";
    })(Rm || (Rm = {}));
    class zw {
        get state() {
            return this.presenceAdapter.state;
        }
        constructor(n, r){
            this.channel = n, this.presenceAdapter = new Jr(this.channel.channelAdapter, r);
        }
    }
    class Mw {
        constructor(n, r, l){
            const u = Hw(l);
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
            if (this.channel.pushBuffer.length > vw) {
                const c = this.channel.pushBuffer.shift();
                c.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${c.event}`, c.payload());
            }
            return u;
        }
        updateJoinPayload(n) {
            const r = this.channel.joinPush.payload();
            this.channel.joinPush.payload = ()=>Object.assign(Object.assign({}, r), n);
        }
        canPush() {
            return this.socket.isConnected() && this.state === ga.joined;
        }
        isJoined() {
            return this.state === ga.joined;
        }
        isJoining() {
            return this.state === ga.joining;
        }
        isClosed() {
            return this.state === ga.closed;
        }
        isLeaving() {
            return this.state === ga.leaving;
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
    function Hw(i) {
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
    var Cm;
    (function(i) {
        i.ALL = "*", i.INSERT = "INSERT", i.UPDATE = "UPDATE", i.DELETE = "DELETE";
    })(Cm || (Cm = {}));
    var Hi;
    (function(i) {
        i.BROADCAST = "broadcast", i.PRESENCE = "presence", i.POSTGRES_CHANGES = "postgres_changes", i.SYSTEM = "system";
    })(Hi || (Hi = {}));
    var qn;
    (function(i) {
        i.SUBSCRIBED = "SUBSCRIBED", i.TIMED_OUT = "TIMED_OUT", i.CLOSED = "CLOSED", i.CHANNEL_ERROR = "CHANNEL_ERROR";
    })(qn || (qn = {}));
    class Fr {
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
            var u, c;
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
            }, r.config), this.channelAdapter = new Mw(this.socket.socketAdapter, n, this.params), this.presence = new zw(this), this._onClose(()=>{
                this.socket._remove(this);
            }), this._updateFilterTransform(), this.broadcastEndpointURL = Tg(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((c = (u = this.params.config) === null || u === void 0 ? void 0 : u.broadcast) === null || c === void 0) && c.replay)) throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
        }
        subscribe(n, r = this.timeout) {
            var l, u, c;
            if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
                const { config: { broadcast: f, presence: d, private: m } } = this.params, v = (u = (l = this.bindings.postgres_changes) === null || l === void 0 ? void 0 : l.map((A)=>A.filter)) !== null && u !== void 0 ? u : [], S = !!this.bindings[Hi.PRESENCE] && this.bindings[Hi.PRESENCE].length > 0 || ((c = this.params.config.presence) === null || c === void 0 ? void 0 : c.enabled) === !0, b = {}, x = {
                    broadcast: f,
                    presence: Object.assign(Object.assign({}, d), {
                        enabled: S
                    }),
                    postgres_changes: v,
                    private: m
                };
                this.socket.accessTokenValue && (b.access_token = this.socket.accessTokenValue), this._onError((A)=>{
                    n?.(qn.CHANNEL_ERROR, A);
                }), this._onClose(()=>n?.(qn.CLOSED)), this.updateJoinPayload(Object.assign({
                    config: x
                }, b)), this._updateFilterMessage(), this.channelAdapter.subscribe(r).receive("ok", async ({ postgres_changes: A })=>{
                    if (this.socket._isManualToken() || this.socket.setAuth(), A === void 0) {
                        n?.(qn.SUBSCRIBED);
                        return;
                    }
                    this._updatePostgresBindings(A, n);
                }).receive("error", (A)=>{
                    this.state = ga.errored, n?.(qn.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(A).join(", ") || "error")));
                }).receive("timeout", ()=>{
                    n?.(qn.TIMED_OUT);
                });
            }
            return this;
        }
        _updatePostgresBindings(n, r) {
            var l;
            const u = this.bindings.postgres_changes, c = (l = u?.length) !== null && l !== void 0 ? l : 0, f = [];
            for(let d = 0; d < c; d++){
                const m = u[d], { filter: { event: v, schema: S, table: b, filter: x } } = m, A = n && n[d];
                if (A && A.event === v && Fr.isFilterValueEqual(A.schema, S) && Fr.isFilterValueEqual(A.table, b) && Fr.isFilterValueEqual(A.filter, x)) f.push(Object.assign(Object.assign({}, m), {
                    id: A.id
                }));
                else {
                    this.unsubscribe(), this.state = ga.errored, r?.(qn.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                    return;
                }
            }
            this.bindings.postgres_changes = f, this.state != ga.errored && r && r(qn.SUBSCRIBED);
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
            const u = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), c = n === Hi.PRESENCE || n === Hi.POSTGRES_CHANGES;
            if (u && c) throw this.socket.log("channel", `cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${n}\` callbacks for ${this.topic} after \`subscribe()\`.`);
            return this._on(n, r, l);
        }
        async httpSend(n, r, l = {}) {
            var u;
            if (r == null) return Promise.reject("Payload is required for httpSend()");
            const c = {
                apikey: this.socket.apiKey ? this.socket.apiKey : "",
                "Content-Type": "application/json"
            };
            this.socket.accessTokenValue && (c.Authorization = `Bearer ${this.socket.accessTokenValue}`);
            const f = {
                method: "POST",
                headers: c,
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
            let m = d.statusText;
            try {
                const v = await d.json();
                m = v.error || v.message || m;
            } catch  {}
            return Promise.reject(new Error(m));
        }
        async send(n, r = {}) {
            var l, u;
            if (!this.channelAdapter.canPush() && n.type === "broadcast") {
                console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
                const { event: c, payload: f } = n, d = {
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                };
                this.socket.accessTokenValue && (d.Authorization = `Bearer ${this.socket.accessTokenValue}`);
                const m = {
                    method: "POST",
                    headers: d,
                    body: JSON.stringify({
                        messages: [
                            {
                                topic: this.subTopic,
                                event: c,
                                payload: f,
                                private: this.private
                            }
                        ]
                    })
                };
                try {
                    const v = await this._fetchWithTimeout(this.broadcastEndpointURL, m, (l = r.timeout) !== null && l !== void 0 ? l : this.timeout);
                    return await ((u = v.body) === null || u === void 0 ? void 0 : u.cancel()), v.ok ? "ok" : "error";
                } catch (v) {
                    return v.name === "AbortError" ? "timed out" : "error";
                }
            } else return new Promise((c)=>{
                var f, d, m;
                const v = this.channelAdapter.push(n.type, n, r.timeout || this.timeout);
                n.type === "broadcast" && !(!((m = (d = (f = this.params) === null || f === void 0 ? void 0 : f.config) === null || d === void 0 ? void 0 : d.broadcast) === null || m === void 0) && m.ack) && c("ok"), v.receive("ok", ()=>c("ok")), v.receive("error", ()=>c("error")), v.receive("timeout", ()=>c("timed out"));
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
            const u = new AbortController, c = setTimeout(()=>u.abort(), l), f = await this.socket.fetch(n, Object.assign(Object.assign({}, r), {
                signal: u.signal
            }));
            return clearTimeout(c), f;
        }
        _on(n, r, l) {
            const u = n.toLocaleLowerCase(), c = this.channelAdapter.on(n, l), f = {
                type: u,
                filter: r,
                callback: l,
                ref: c
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
                var u, c, f, d, m, v, S;
                const b = n.event.toLocaleLowerCase();
                if (this._notThisChannelEvent(b, l)) return !1;
                const x = (u = this.bindings[b]) === null || u === void 0 ? void 0 : u.find((A)=>A.ref === n.ref);
                if (!x) return !0;
                if ([
                    "broadcast",
                    "presence",
                    "postgres_changes"
                ].includes(b)) if ("id" in x) {
                    const A = x.id, U = (c = x.filter) === null || c === void 0 ? void 0 : c.event;
                    return A && ((f = r.ids) === null || f === void 0 ? void 0 : f.includes(A)) && (U === "*" || U?.toLocaleLowerCase() === ((d = r.data) === null || d === void 0 ? void 0 : d.type.toLocaleLowerCase()));
                } else {
                    const A = (v = (m = x?.filter) === null || m === void 0 ? void 0 : m.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase();
                    return A === "*" || A === ((S = r?.event) === null || S === void 0 ? void 0 : S.toLocaleLowerCase());
                }
                else return x.type.toLocaleLowerCase() === b;
            });
        }
        _notThisChannelEvent(n, r) {
            const { close: l, error: u, leave: c, join: f } = Sg;
            return r && [
                l,
                u,
                c,
                f
            ].includes(n) && r !== this.joinPush.ref;
        }
        _updateFilterTransform() {
            this.channelAdapter.updatePayloadTransform((n, r, l)=>{
                if (typeof r == "object" && "ids" in r) {
                    const u = r.data, { schema: c, table: f, commit_timestamp: d, type: m, errors: v } = u;
                    return Object.assign(Object.assign({}, {
                        schema: c,
                        table: f,
                        commit_timestamp: d,
                        eventType: m,
                        new: {},
                        old: {},
                        errors: v
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
            return (n.type === "INSERT" || n.type === "UPDATE") && (r.new = Am(n.columns, n.record)), (n.type === "UPDATE" || n.type === "DELETE") && (r.old = Am(n.columns, n.old_record)), r;
        }
    }
    class qw {
        constructor(n, r){
            this.socket = new Dw(n, r);
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
            return new Promise((c)=>{
                setTimeout(()=>c("timeout"), u), this.socket.disconnect(()=>{
                    n(), c("ok");
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
            return this.socket.connectionState() == kc.connecting;
        }
        isDisconnecting() {
            return this.socket.connectionState() == kc.closing;
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
    const $w = {
        HEARTBEAT_INTERVAL: 25e3
    }, Iw = [
        1e3,
        2e3,
        5e3,
        1e4
    ], Pw = 1e4, Gw = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
    class Vw {
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
            if (this.channels = new Array, this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new bw, this._manuallySetToken = !1, this._authPromise = null, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._resolveFetch = (c)=>c ? (...f)=>c(...f) : (...f)=>fetch(...f), !(!((l = r?.params) === null || l === void 0) && l.apikey)) throw new Error("API key is required to connect to Realtime");
            this.apiKey = r.params.apikey;
            const u = this._initializeOptions(r);
            this.socketAdapter = new qw(n, u), this.httpEndpoint = Tg(n), this.fetch = this._resolveFetch(r?.fetch);
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
            return this.socketAdapter.connectionState() || kc.closed;
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
            const l = `realtime:${n}`, u = this.getChannels().find((c)=>c.topic === l);
            if (u) return u;
            {
                const c = new Fr(`realtime:${n}`, r, this);
                return this.channels.push(c), c;
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
                const c = {
                    access_token: r,
                    version: pw
                };
                r && u.updateJoinPayload(c), u.joinedOnce && u.channelAdapter.isJoined() && u.channelAdapter.push(Sg.access_token, {
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
                    Gw
                ], {
                    type: "application/javascript"
                });
                r = URL.createObjectURL(l);
            }
            return r;
        }
        _initializeOptions(n) {
            var r, l, u, c, f, d, m, v, S;
            this.worker = (r = n?.worker) !== null && r !== void 0 ? r : !1, this.accessToken = (l = n?.accessToken) !== null && l !== void 0 ? l : null;
            const b = {};
            b.timeout = (u = n?.timeout) !== null && u !== void 0 ? u : yw, b.heartbeatIntervalMs = (c = n?.heartbeatIntervalMs) !== null && c !== void 0 ? c : $w.HEARTBEAT_INTERVAL, b.transport = (f = n?.transport) !== null && f !== void 0 ? f : fw.getWebSocketConstructor(), b.params = n?.params, b.logger = n?.logger, b.heartbeatCallback = this._wrapHeartbeatCallback(n?.heartbeatCallback), b.reconnectAfterMs = (d = n?.reconnectAfterMs) !== null && d !== void 0 ? d : ((B)=>Iw[B - 1] || Pw);
            let x, A;
            const U = (m = n?.vsn) !== null && m !== void 0 ? m : gw;
            switch(U){
                case mw:
                    x = (B, D)=>D(JSON.stringify(B)), A = (B, D)=>D(JSON.parse(B));
                    break;
                case _g:
                    x = this.serializer.encode.bind(this.serializer), A = this.serializer.decode.bind(this.serializer);
                    break;
                default:
                    throw new Error(`Unsupported serializer version: ${b.vsn}`);
            }
            if (b.vsn = U, b.encode = (v = n?.encode) !== null && v !== void 0 ? v : x, b.decode = (S = n?.decode) !== null && S !== void 0 ? S : A, b.beforeReconnect = this._reconnectAuth.bind(this), (n?.logLevel || n?.log_level) && (this.logLevel = n.logLevel || n.log_level, b.params = Object.assign(Object.assign({}, b.params), {
                log_level: this.logLevel
            })), this.worker) {
                if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
                this.workerUrl = n?.workerUrl, b.autoSendHeartbeat = !this.worker;
            }
            return b;
        }
        async _reconnectAuth() {
            await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
        }
    }
    var Zr = class extends Error {
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
    function Kw(i, n, r) {
        const l = new URL(n, i);
        if (r) for (const [u, c] of Object.entries(r))c !== void 0 && l.searchParams.set(u, c);
        return l.toString();
    }
    async function Yw(i) {
        return !i || i.type === "none" ? {} : i.type === "bearer" ? {
            Authorization: `Bearer ${i.token}`
        } : i.type === "header" ? {
            [i.name]: i.value
        } : i.type === "custom" ? await i.getHeaders() : {};
    }
    function Xw(i) {
        const n = i.fetchImpl ?? globalThis.fetch;
        return {
            async request ({ method: r, path: l, query: u, body: c, headers: f }) {
                const d = Kw(i.baseUrl, l, u), m = await Yw(i.auth), v = await n(d, {
                    method: r,
                    headers: {
                        ...c ? {
                            "Content-Type": "application/json"
                        } : {},
                        ...m,
                        ...f
                    },
                    body: c ? JSON.stringify(c) : void 0
                }), S = await v.text(), b = (v.headers.get("content-type") || "").includes("application/json"), x = b && S ? JSON.parse(S) : S;
                if (!v.ok) {
                    const A = b ? x : void 0, U = A?.error;
                    throw new Zr(U?.message ?? `Request failed with status ${v.status}`, {
                        status: v.status,
                        icebergType: U?.type,
                        icebergCode: U?.code,
                        details: A
                    });
                }
                return {
                    status: v.status,
                    headers: v.headers,
                    data: x
                };
            }
        };
    }
    function jl(i) {
        return i.join("");
    }
    var Jw = class {
        constructor(i, n = ""){
            this.client = i, this.prefix = n;
        }
        async listNamespaces(i) {
            const n = i ? {
                parent: jl(i.namespace)
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
                path: `${this.prefix}/namespaces/${jl(i.namespace)}`
            });
        }
        async loadNamespaceMetadata(i) {
            return {
                properties: (await this.client.request({
                    method: "GET",
                    path: `${this.prefix}/namespaces/${jl(i.namespace)}`
                })).data.properties
            };
        }
        async namespaceExists(i) {
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${jl(i.namespace)}`
                }), !0;
            } catch (n) {
                if (n instanceof Zr && n.status === 404) return !1;
                throw n;
            }
        }
        async createNamespaceIfNotExists(i, n) {
            try {
                return await this.createNamespace(i, n);
            } catch (r) {
                if (r instanceof Zr && r.status === 409) return;
                throw r;
            }
        }
    };
    function Oi(i) {
        return i.join("");
    }
    var Fw = class {
        constructor(i, n = "", r){
            this.client = i, this.prefix = n, this.accessDelegation = r;
        }
        async listTables(i) {
            return (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables`
            })).data.identifiers;
        }
        async createTable(i, n) {
            const r = {};
            return this.accessDelegation && (r["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables`,
                body: n,
                headers: r
            })).data.metadata;
        }
        async updateTable(i, n) {
            const r = await this.client.request({
                method: "POST",
                path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,
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
                path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,
                query: {
                    purgeRequested: String(n?.purge ?? !1)
                }
            });
        }
        async loadTable(i) {
            const n = {};
            return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
                method: "GET",
                path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,
                headers: n
            })).data.metadata;
        }
        async tableExists(i) {
            const n = {};
            this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation);
            try {
                return await this.client.request({
                    method: "HEAD",
                    path: `${this.prefix}/namespaces/${Oi(i.namespace)}/tables/${i.name}`,
                    headers: n
                }), !0;
            } catch (r) {
                if (r instanceof Zr && r.status === 404) return !1;
                throw r;
            }
        }
        async createTableIfNotExists(i, n) {
            try {
                return await this.createTable(i, n);
            } catch (r) {
                if (r instanceof Zr && r.status === 409) return await this.loadTable({
                    namespace: i.namespace,
                    name: n.name
                });
                throw r;
            }
        }
    }, Ww = class {
        constructor(i){
            let n = "v1";
            i.catalogName && (n += `/${i.catalogName}`);
            const r = i.baseUrl.endsWith("/") ? i.baseUrl : `${i.baseUrl}/`;
            this.client = Xw({
                baseUrl: r,
                auth: i.auth,
                fetchImpl: i.fetch
            }), this.accessDelegation = i.accessDelegation?.join(","), this.namespaceOps = new Jw(this.client, n), this.tableOps = new Fw(this.client, n, this.accessDelegation);
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
    }, Xl = class extends Error {
        constructor(i, n = "storage", r, l){
            super(i), this.__isStorageError = !0, this.namespace = n, this.name = n === "vectors" ? "StorageVectorsError" : "StorageError", this.status = r, this.statusCode = l;
        }
    };
    function Jl(i) {
        return typeof i == "object" && i !== null && "__isStorageError" in i;
    }
    var Dc = class extends Xl {
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
    }, xg = class extends Xl {
        constructor(i, n, r = "storage"){
            super(i, r), this.name = r === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = n;
        }
    };
    const Qw = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), Zw = (i)=>{
        if (typeof i != "object" || i === null) return !1;
        const n = Object.getPrototypeOf(i);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in i) && !(Symbol.iterator in i);
    }, Bc = (i)=>{
        if (Array.isArray(i)) return i.map((r)=>Bc(r));
        if (typeof i == "function" || i !== Object(i)) return i;
        const n = {};
        return Object.entries(i).forEach(([r, l])=>{
            const u = r.replace(/([-_][a-z])/gi, (c)=>c.toUpperCase().replace(/[-_]/g, ""));
            n[u] = Bc(l);
        }), n;
    }, e_ = (i)=>!i || typeof i != "string" || i.length === 0 || i.length > 100 || i.trim() !== i || i.includes("/") || i.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(i);
    function es(i) {
        "@babel/helpers - typeof";
        return es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, es(i);
    }
    function t_(i, n) {
        if (es(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (es(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function n_(i) {
        var n = t_(i, "string");
        return es(n) == "symbol" ? n : n + "";
    }
    function a_(i, n, r) {
        return (n = n_(n)) in i ? Object.defineProperty(i, n, {
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
    function oe(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? Om(Object(r), !0).forEach(function(l) {
                a_(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const km = (i)=>{
        var n;
        return i.msg || i.message || i.error_description || (typeof i.error == "string" ? i.error : (n = i.error) === null || n === void 0 ? void 0 : n.message) || JSON.stringify(i);
    }, i_ = async (i, n, r, l)=>{
        if (i !== null && typeof i == "object" && typeof i.json == "function") {
            const u = i;
            let c = parseInt(u.status, 10);
            Number.isFinite(c) || (c = 500), u.json().then((f)=>{
                const d = f?.statusCode || f?.code || c + "";
                n(new Dc(km(f), c, d, l));
            }).catch(()=>{
                const f = c + "";
                n(new Dc(u.statusText || `HTTP ${c} error`, c, f, l));
            });
        } else n(new xg(km(i), i, l));
    }, r_ = (i, n, r, l)=>{
        const u = {
            method: i,
            headers: n?.headers || {}
        };
        if (i === "GET" || i === "HEAD" || !l) return oe(oe({}, u), r);
        if (Zw(l)) {
            var c;
            const f = n?.headers || {};
            let d;
            for (const [m, v] of Object.entries(f))m.toLowerCase() === "content-type" && (d = v);
            u.headers = s_(f, "Content-Type", (c = d) !== null && c !== void 0 ? c : "application/json"), u.body = JSON.stringify(l);
        } else u.body = l;
        return n?.duplex && (u.duplex = n.duplex), oe(oe({}, u), r);
    };
    function s_(i, n, r) {
        const l = oe({}, i);
        for (const u of Object.keys(l))u.toLowerCase() === n.toLowerCase() && delete l[u];
        return l[n] = r, l;
    }
    async function Vr(i, n, r, l, u, c, f) {
        return new Promise((d, m)=>{
            i(r, r_(n, l, u, c)).then((v)=>{
                if (!v.ok) throw v;
                if (l?.noResolveJson) return v;
                if (f === "vectors") {
                    const S = v.headers.get("content-type");
                    if (v.headers.get("content-length") === "0" || v.status === 204) return {};
                    if (!S || !S.includes("application/json")) return {};
                }
                return v.json();
            }).then((v)=>d(v)).catch((v)=>i_(v, m, l, f));
        });
    }
    function Rg(i = "storage") {
        return {
            get: async (n, r, l, u)=>Vr(n, "GET", r, l, u, void 0, i),
            post: async (n, r, l, u, c)=>Vr(n, "POST", r, u, c, l, i),
            put: async (n, r, l, u, c)=>Vr(n, "PUT", r, u, c, l, i),
            head: async (n, r, l, u)=>Vr(n, "HEAD", r, oe(oe({}, l), {}, {
                    noResolveJson: !0
                }), u, void 0, i),
            remove: async (n, r, l, u, c)=>Vr(n, "DELETE", r, u, c, l, i)
        };
    }
    const l_ = Rg("storage"), { get: ts, post: on, put: Lc, head: o_, remove: Zc } = l_, It = Rg("vectors");
    var Gi = class {
        constructor(i, n = {}, r, l = "storage"){
            this.shouldThrowOnError = !1, this.url = i, this.headers = Object.fromEntries(Object.entries(n).map(([u, c])=>[
                    u.toLowerCase(),
                    c
                ])), this.fetch = Qw(r), this.namespace = l;
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this;
        }
        setHeader(i, n) {
            return this.headers = oe(oe({}, this.headers), {}, {
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
                if (Jl(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
    }, u_ = class {
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
                if (Jl(n)) return {
                    data: null,
                    error: n
                };
                throw n;
            }
        }
    };
    let Cg;
    Cg = Symbol.toStringTag;
    var c_ = class {
        constructor(i, n){
            this.downloadFn = i, this.shouldThrowOnError = n, this[Cg] = "BlobDownloadBuilder", this.promise = null;
        }
        asStream() {
            return new u_(this.downloadFn, this.shouldThrowOnError);
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
                if (Jl(n)) return {
                    data: null,
                    error: n
                };
                throw n;
            }
        }
    };
    const h_ = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    }, jm = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
    var f_ = class extends Gi {
        constructor(i, n = {}, r, l){
            super(i, n, l, "storage"), this.bucketId = r;
        }
        async uploadOrUpdate(i, n, r, l) {
            var u = this;
            return u.handleOperation(async ()=>{
                let c;
                const f = oe(oe({}, jm), l);
                let d = oe(oe({}, u.headers), i === "POST" && {
                    "x-upsert": String(f.upsert)
                });
                const m = f.metadata;
                typeof Blob < "u" && r instanceof Blob ? (c = new FormData, c.append("cacheControl", f.cacheControl), m && c.append("metadata", u.encodeMetadata(m)), c.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (c = r, c.has("cacheControl") || c.append("cacheControl", f.cacheControl), m && !c.has("metadata") && c.append("metadata", u.encodeMetadata(m))) : (c = r, d["cache-control"] = `max-age=${f.cacheControl}`, d["content-type"] = f.contentType, m && (d["x-metadata"] = u.toBase64(u.encodeMetadata(m))), (typeof ReadableStream < "u" && c instanceof ReadableStream || c && typeof c == "object" && "pipe" in c && typeof c.pipe == "function") && !f.duplex && (f.duplex = "half")), l?.headers && (d = oe(oe({}, d), l.headers));
                const v = u._removeEmptyFolders(n), S = u._getFinalPath(v), b = await (i == "PUT" ? Lc : on)(u.fetch, `${u.url}/object/${S}`, c, oe({
                    headers: d
                }, f?.duplex ? {
                    duplex: f.duplex
                } : {}));
                return {
                    path: v,
                    id: b.Id,
                    fullPath: b.Key
                };
            });
        }
        async upload(i, n, r) {
            return this.uploadOrUpdate("POST", i, n, r);
        }
        async uploadToSignedUrl(i, n, r, l) {
            var u = this;
            const c = u._removeEmptyFolders(i), f = u._getFinalPath(c), d = new URL(u.url + `/object/upload/sign/${f}`);
            return d.searchParams.set("token", n), u.handleOperation(async ()=>{
                let m;
                const v = oe(oe({}, jm), l), S = oe(oe({}, u.headers), {
                    "x-upsert": String(v.upsert)
                });
                return typeof Blob < "u" && r instanceof Blob ? (m = new FormData, m.append("cacheControl", v.cacheControl), m.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (m = r, m.append("cacheControl", v.cacheControl)) : (m = r, S["cache-control"] = `max-age=${v.cacheControl}`, S["content-type"] = v.contentType), {
                    path: c,
                    fullPath: (await Lc(u.fetch, d.toString(), m, {
                        headers: S
                    })).Key
                };
            });
        }
        async createSignedUploadUrl(i, n) {
            var r = this;
            return r.handleOperation(async ()=>{
                let l = r._getFinalPath(i);
                const u = oe({}, r.headers);
                n?.upsert && (u["x-upsert"] = "true");
                const c = await on(r.fetch, `${r.url}/object/upload/sign/${l}`, {}, {
                    headers: u
                }), f = new URL(r.url + c.url), d = f.searchParams.get("token");
                if (!d) throw new Xl("No token returned by API");
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
            return l.handleOperation(async ()=>await on(l.fetch, `${l.url}/object/move`, {
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
                    path: (await on(l.fetch, `${l.url}/object/copy`, {
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
                const c = typeof r?.transform == "object" && r.transform !== null && Object.keys(r.transform).length > 0;
                let f = await on(l.fetch, `${l.url}/object/sign/${u}`, oe({
                    expiresIn: n
                }, c ? {
                    transform: r.transform
                } : {}), {
                    headers: l.headers
                });
                const d = new URLSearchParams;
                r?.download && d.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && d.set("cacheNonce", String(r.cacheNonce));
                const m = d.toString(), v = c && f.signedURL.includes("/object/sign/") ? f.signedURL.replace("/object/sign/", "/render/image/sign/") : f.signedURL;
                return {
                    signedUrl: encodeURI(`${l.url}${v}${m ? `&${m}` : ""}`)
                };
            });
        }
        async createSignedUrls(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                const u = await on(l.fetch, `${l.url}/object/sign/${l.bucketId}`, {
                    expiresIn: n,
                    paths: i
                }, {
                    headers: l.headers
                }), c = new URLSearchParams;
                r?.download && c.set("download", r.download === !0 ? "" : r.download), r?.cacheNonce != null && c.set("cacheNonce", String(r.cacheNonce));
                const f = c.toString();
                return u.map((d)=>oe(oe({}, d), {}, {
                        signedUrl: d.signedURL ? encodeURI(`${l.url}${d.signedURL}${f ? `&${f}` : ""}`) : null
                    }));
            });
        }
        download(i, n, r) {
            const l = typeof n?.transform < "u" ? "render/image/authenticated" : "object", u = new URLSearchParams;
            n?.transform && this.applyTransformOptsToQuery(u, n.transform), n?.cacheNonce != null && u.set("cacheNonce", String(n.cacheNonce));
            const c = u.toString(), f = this._getFinalPath(i), d = ()=>ts(this.fetch, `${this.url}/${l}/${f}${c ? `?${c}` : ""}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }, r);
            return new c_(d, this.shouldThrowOnError);
        }
        async info(i) {
            var n = this;
            const r = n._getFinalPath(i);
            return n.handleOperation(async ()=>Bc(await ts(n.fetch, `${n.url}/object/info/${r}`, {
                    headers: n.headers
                })));
        }
        async exists(i) {
            var n = this;
            const r = n._getFinalPath(i);
            try {
                return await o_(n.fetch, `${n.url}/object/${r}`, {
                    headers: n.headers
                }), {
                    data: !0,
                    error: null
                };
            } catch (u) {
                if (n.shouldThrowOnError) throw u;
                if (Jl(u)) {
                    var l;
                    const c = u instanceof Dc ? u.status : u instanceof xg ? (l = u.originalError) === null || l === void 0 ? void 0 : l.status : void 0;
                    if (c !== void 0 && [
                        400,
                        404
                    ].includes(c)) return {
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
            const u = l.toString(), c = typeof n?.transform < "u" ? "render/image" : "object";
            return {
                data: {
                    publicUrl: encodeURI(`${this.url}/${c}/public/${r}`) + (u ? `?${u}` : "")
                }
            };
        }
        async remove(i) {
            var n = this;
            return n.handleOperation(async ()=>await Zc(n.fetch, `${n.url}/object/${n.bucketId}`, {
                    prefixes: i
                }, {
                    headers: n.headers
                }));
        }
        async list(i, n, r) {
            var l = this;
            return l.handleOperation(async ()=>{
                const u = oe(oe(oe({}, h_), n), {}, {
                    prefix: i || ""
                });
                return await on(l.fetch, `${l.url}/object/list/${l.bucketId}`, u, {
                    headers: l.headers
                }, r);
            });
        }
        async listV2(i, n) {
            var r = this;
            return r.handleOperation(async ()=>{
                const l = oe({}, i);
                return await on(r.fetch, `${r.url}/object/list-v2/${r.bucketId}`, l, {
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
    const d_ = "2.103.0", ls = {
        "X-Client-Info": `storage-js/${d_}`
    };
    var p_ = class extends Gi {
        constructor(i, n = {}, r, l){
            const u = new URL(i);
            l?.useNewHostname && /supabase\.(co|in|red)$/.test(u.hostname) && !u.hostname.includes("storage.supabase.") && (u.hostname = u.hostname.replace("supabase.", "storage.supabase."));
            const c = u.href.replace(/\/$/, ""), f = oe(oe({}, ls), n);
            super(c, f, r, "storage");
        }
        async listBuckets(i) {
            var n = this;
            return n.handleOperation(async ()=>{
                const r = n.listBucketOptionsToQueryString(i);
                return await ts(n.fetch, `${n.url}/bucket${r}`, {
                    headers: n.headers
                });
            });
        }
        async getBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await ts(n.fetch, `${n.url}/bucket/${i}`, {
                    headers: n.headers
                }));
        }
        async createBucket(i, n = {
            public: !1
        }) {
            var r = this;
            return r.handleOperation(async ()=>await on(r.fetch, `${r.url}/bucket`, {
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
            return r.handleOperation(async ()=>await Lc(r.fetch, `${r.url}/bucket/${i}`, {
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
            return n.handleOperation(async ()=>await on(n.fetch, `${n.url}/bucket/${i}/empty`, {}, {
                    headers: n.headers
                }));
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Zc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        listBucketOptionsToQueryString(i) {
            const n = {};
            return i && ("limit" in i && (n.limit = String(i.limit)), "offset" in i && (n.offset = String(i.offset)), i.search && (n.search = i.search), i.sortColumn && (n.sortColumn = i.sortColumn), i.sortOrder && (n.sortOrder = i.sortOrder)), Object.keys(n).length > 0 ? "?" + new URLSearchParams(n).toString() : "";
        }
    }, m_ = class extends Gi {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = oe(oe({}, ls), n);
            super(l, u, r, "storage");
        }
        async createBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await on(n.fetch, `${n.url}/bucket`, {
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
                return await ts(n.fetch, u, {
                    headers: n.headers
                });
            });
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await Zc(n.fetch, `${n.url}/bucket/${i}`, {}, {
                    headers: n.headers
                }));
        }
        from(i) {
            var n = this;
            if (!e_(i)) throw new Xl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
            const r = new Ww({
                baseUrl: this.url,
                catalogName: i,
                auth: {
                    type: "custom",
                    getHeaders: async ()=>n.headers
                },
                fetch: this.fetch
            }), l = this.shouldThrowOnError;
            return new Proxy(r, {
                get (u, c) {
                    const f = u[c];
                    return typeof f != "function" ? f : async (...d)=>{
                        try {
                            return {
                                data: await f.apply(u, d),
                                error: null
                            };
                        } catch (m) {
                            if (l) throw m;
                            return {
                                data: null,
                                error: m
                            };
                        }
                    };
                }
            });
        }
    }, g_ = class extends Gi {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = oe(oe({}, ls), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async createIndex(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/CreateIndex`, i, {
                    headers: n.headers
                }) || {});
        }
        async getIndex(i, n) {
            var r = this;
            return r.handleOperation(async ()=>await It.post(r.fetch, `${r.url}/GetIndex`, {
                    vectorBucketName: i,
                    indexName: n
                }, {
                    headers: r.headers
                }));
        }
        async listIndexes(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/ListIndexes`, i, {
                    headers: n.headers
                }));
        }
        async deleteIndex(i, n) {
            var r = this;
            return r.handleOperation(async ()=>await It.post(r.fetch, `${r.url}/DeleteIndex`, {
                    vectorBucketName: i,
                    indexName: n
                }, {
                    headers: r.headers
                }) || {});
        }
    }, y_ = class extends Gi {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = oe(oe({}, ls), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async putVectors(i) {
            var n = this;
            if (i.vectors.length < 1 || i.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/PutVectors`, i, {
                    headers: n.headers
                }) || {});
        }
        async getVectors(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/GetVectors`, i, {
                    headers: n.headers
                }));
        }
        async listVectors(i) {
            var n = this;
            if (i.segmentCount !== void 0) {
                if (i.segmentCount < 1 || i.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
                if (i.segmentIndex !== void 0 && (i.segmentIndex < 0 || i.segmentIndex >= i.segmentCount)) throw new Error(`segmentIndex must be between 0 and ${i.segmentCount - 1}`);
            }
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/ListVectors`, i, {
                    headers: n.headers
                }));
        }
        async queryVectors(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/QueryVectors`, i, {
                    headers: n.headers
                }));
        }
        async deleteVectors(i) {
            var n = this;
            if (i.keys.length < 1 || i.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/DeleteVectors`, i, {
                    headers: n.headers
                }) || {});
        }
    }, v_ = class extends Gi {
        constructor(i, n = {}, r){
            const l = i.replace(/\/$/, ""), u = oe(oe({}, ls), {}, {
                "Content-Type": "application/json"
            }, n);
            super(l, u, r, "vectors");
        }
        async createBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/CreateVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }) || {});
        }
        async getBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/GetVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }));
        }
        async listBuckets(i = {}) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/ListVectorBuckets`, i, {
                    headers: n.headers
                }));
        }
        async deleteBucket(i) {
            var n = this;
            return n.handleOperation(async ()=>await It.post(n.fetch, `${n.url}/DeleteVectorBucket`, {
                    vectorBucketName: i
                }, {
                    headers: n.headers
                }) || {});
        }
    }, b_ = class extends v_ {
        constructor(i, n = {}){
            super(i, n.headers || {}, n.fetch);
        }
        from(i) {
            return new w_(this.url, this.headers, i, this.fetch);
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
    }, w_ = class extends g_ {
        constructor(i, n, r, l){
            super(i, n, l), this.vectorBucketName = r;
        }
        async createIndex(i) {
            var n = ()=>super.createIndex, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName
            }));
        }
        async listIndexes(i = {}) {
            var n = ()=>super.listIndexes, r = this;
            return n().call(r, oe(oe({}, i), {}, {
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
            return new __(this.url, this.headers, this.vectorBucketName, i, this.fetch);
        }
    }, __ = class extends y_ {
        constructor(i, n, r, l, u){
            super(i, n, u), this.vectorBucketName = r, this.indexName = l;
        }
        async putVectors(i) {
            var n = ()=>super.putVectors, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async getVectors(i) {
            var n = ()=>super.getVectors, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async listVectors(i = {}) {
            var n = ()=>super.listVectors, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async queryVectors(i) {
            var n = ()=>super.queryVectors, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
        async deleteVectors(i) {
            var n = ()=>super.deleteVectors, r = this;
            return n().call(r, oe(oe({}, i), {}, {
                vectorBucketName: r.vectorBucketName,
                indexName: r.indexName
            }));
        }
    }, S_ = class extends p_ {
        constructor(i, n = {}, r, l){
            super(i, n, r, l);
        }
        from(i) {
            return new f_(this.url, this.headers, i, this.fetch);
        }
        get vectors() {
            return new b_(this.url + "/vector", {
                headers: this.headers,
                fetch: this.fetch
            });
        }
        get analytics() {
            return new m_(this.url + "/iceberg", this.headers, this.fetch);
        }
    };
    const Og = "2.103.0", zi = 30 * 1e3, zc = 3, _c = zc * zi, E_ = "http://localhost:9999", T_ = "supabase.auth.token", A_ = {
        "X-Client-Info": `gotrue-js/${Og}`
    }, Mc = "X-Supabase-Api-Version", kg = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    }, x_ = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, R_ = 600 * 1e3;
    class ns extends Error {
        constructor(n, r, l){
            super(n), this.__isAuthError = !0, this.name = "AuthError", this.status = r, this.code = l;
        }
    }
    function ae(i) {
        return typeof i == "object" && i !== null && "__isAuthError" in i;
    }
    class C_ extends ns {
        constructor(n, r, l){
            super(n, r, l), this.name = "AuthApiError", this.status = r, this.code = l;
        }
    }
    function O_(i) {
        return ae(i) && i.name === "AuthApiError";
    }
    class Ha extends ns {
        constructor(n, r){
            super(n), this.name = "AuthUnknownError", this.originalError = r;
        }
    }
    class Pn extends ns {
        constructor(n, r, l, u){
            super(n, l, u), this.name = r, this.status = l;
        }
    }
    class $t extends Pn {
        constructor(){
            super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
        }
    }
    function Ul(i) {
        return ae(i) && i.name === "AuthSessionMissingError";
    }
    class ki extends Pn {
        constructor(){
            super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
        }
    }
    class Nl extends Pn {
        constructor(n){
            super(n, "AuthInvalidCredentialsError", 400, void 0);
        }
    }
    class Dl extends Pn {
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
    function k_(i) {
        return ae(i) && i.name === "AuthImplicitGrantRedirectError";
    }
    class Um extends Pn {
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
    class j_ extends Pn {
        constructor(){
            super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
        }
    }
    class Hc extends Pn {
        constructor(n, r){
            super(n, "AuthRetryableFetchError", r, void 0);
        }
    }
    function Sc(i) {
        return ae(i) && i.name === "AuthRetryableFetchError";
    }
    class Nm extends Pn {
        constructor(n, r, l){
            super(n, "AuthWeakPasswordError", r, "weak_password"), this.reasons = l;
        }
    }
    class qc extends Pn {
        constructor(n){
            super(n, "AuthInvalidJwtError", 400, "invalid_jwt");
        }
    }
    const $l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Dm = ` 	
\r=`.split(""), U_ = (()=>{
        const i = new Array(128);
        for(let n = 0; n < i.length; n += 1)i[n] = -1;
        for(let n = 0; n < Dm.length; n += 1)i[Dm[n].charCodeAt(0)] = -2;
        for(let n = 0; n < $l.length; n += 1)i[$l[n].charCodeAt(0)] = n;
        return i;
    })();
    function Bm(i, n, r) {
        if (i !== null) for(n.queue = n.queue << 8 | i, n.queuedBits += 8; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r($l[l]), n.queuedBits -= 6;
        }
        else if (n.queuedBits > 0) for(n.queue = n.queue << 6 - n.queuedBits, n.queuedBits = 6; n.queuedBits >= 6;){
            const l = n.queue >> n.queuedBits - 6 & 63;
            r($l[l]), n.queuedBits -= 6;
        }
    }
    function jg(i, n, r) {
        const l = U_[i];
        if (l > -1) for(n.queue = n.queue << 6 | l, n.queuedBits += 6; n.queuedBits >= 8;)r(n.queue >> n.queuedBits - 8 & 255), n.queuedBits -= 8;
        else {
            if (l === -2) return;
            throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`);
        }
    }
    function Lm(i) {
        const n = [], r = (f)=>{
            n.push(String.fromCodePoint(f));
        }, l = {
            utf8seq: 0,
            codepoint: 0
        }, u = {
            queue: 0,
            queuedBits: 0
        }, c = (f)=>{
            B_(f, l, r);
        };
        for(let f = 0; f < i.length; f += 1)jg(i.charCodeAt(f), u, c);
        return n.join("");
    }
    function N_(i, n) {
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
    function D_(i, n) {
        for(let r = 0; r < i.length; r += 1){
            let l = i.charCodeAt(r);
            if (l > 55295 && l <= 56319) {
                const u = (l - 55296) * 1024 & 65535;
                l = (i.charCodeAt(r + 1) - 56320 & 65535 | u) + 65536, r += 1;
            }
            N_(l, n);
        }
    }
    function B_(i, n, r) {
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
    function qi(i) {
        const n = [], r = {
            queue: 0,
            queuedBits: 0
        }, l = (u)=>{
            n.push(u);
        };
        for(let u = 0; u < i.length; u += 1)jg(i.charCodeAt(u), r, l);
        return new Uint8Array(n);
    }
    function L_(i) {
        const n = [];
        return D_(i, (r)=>n.push(r)), new Uint8Array(n);
    }
    function qa(i) {
        const n = [], r = {
            queue: 0,
            queuedBits: 0
        }, l = (u)=>{
            n.push(u);
        };
        return i.forEach((u)=>Bm(u, r, l)), Bm(null, r, l), n.join("");
    }
    function z_(i) {
        return Math.round(Date.now() / 1e3) + i;
    }
    function M_() {
        return Symbol("auth-callback");
    }
    const wt = ()=>typeof window < "u" && typeof document < "u", La = {
        tested: !1,
        writable: !1
    }, Ug = ()=>{
        if (!wt()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1;
        } catch  {
            return !1;
        }
        if (La.tested) return La.writable;
        const i = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(i, i), globalThis.localStorage.removeItem(i), La.tested = !0, La.writable = !0;
        } catch  {
            La.tested = !0, La.writable = !1;
        }
        return La.writable;
    };
    function H_(i) {
        const n = {}, r = new URL(i);
        if (r.hash && r.hash[0] === "#") try {
            new URLSearchParams(r.hash.substring(1)).forEach((u, c)=>{
                n[c] = u;
            });
        } catch  {}
        return r.searchParams.forEach((l, u)=>{
            n[u] = l;
        }), n;
    }
    const Ng = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), q_ = (i)=>typeof i == "object" && i !== null && "status" in i && "ok" in i && "json" in i && typeof i.json == "function", Mi = async (i, n, r)=>{
        await i.setItem(n, JSON.stringify(r));
    }, za = async (i, n)=>{
        const r = await i.getItem(n);
        if (!r) return null;
        try {
            return JSON.parse(r);
        } catch  {
            return r;
        }
    }, bt = async (i, n)=>{
        await i.removeItem(n);
    };
    class Fl {
        constructor(){
            this.promise = new Fl.promiseConstructor((n, r)=>{
                this.resolve = n, this.reject = r;
            });
        }
    }
    Fl.promiseConstructor = Promise;
    function Bl(i) {
        const n = i.split(".");
        if (n.length !== 3) throw new qc("Invalid JWT structure");
        for(let l = 0; l < n.length; l++)if (!x_.test(n[l])) throw new qc("JWT not in base64url format");
        return {
            header: JSON.parse(Lm(n[0])),
            payload: JSON.parse(Lm(n[1])),
            signature: qi(n[2]),
            raw: {
                header: n[0],
                payload: n[1]
            }
        };
    }
    async function $_(i) {
        return await new Promise((n)=>{
            setTimeout(()=>n(null), i);
        });
    }
    function I_(i, n) {
        return new Promise((l, u)=>{
            (async ()=>{
                for(let c = 0; c < 1 / 0; c++)try {
                    const f = await i(c);
                    if (!n(c, null, f)) {
                        l(f);
                        return;
                    }
                } catch (f) {
                    if (!n(c, f)) {
                        u(f);
                        return;
                    }
                }
            })();
        });
    }
    function P_(i) {
        return ("0" + i.toString(16)).substr(-2);
    }
    function G_() {
        const n = new Uint32Array(56);
        if (typeof crypto > "u") {
            const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", l = r.length;
            let u = "";
            for(let c = 0; c < 56; c++)u += r.charAt(Math.floor(Math.random() * l));
            return u;
        }
        return crypto.getRandomValues(n), Array.from(n, P_).join("");
    }
    async function V_(i) {
        const r = new TextEncoder().encode(i), l = await crypto.subtle.digest("SHA-256", r), u = new Uint8Array(l);
        return Array.from(u).map((c)=>String.fromCharCode(c)).join("");
    }
    async function K_(i) {
        if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), i;
        const r = await V_(i);
        return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    async function ji(i, n, r = !1) {
        const l = G_();
        let u = l;
        r && (u += "/PASSWORD_RECOVERY"), await Mi(i, `${n}-code-verifier`, u);
        const c = await K_(l);
        return [
            c,
            l === c ? "plain" : "s256"
        ];
    }
    const Y_ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
    function X_(i) {
        const n = i.headers.get(Mc);
        if (!n || !n.match(Y_)) return null;
        try {
            return new Date(`${n}T00:00:00.0Z`);
        } catch  {
            return null;
        }
    }
    function J_(i) {
        if (!i) throw new Error("Missing exp claim");
        const n = Math.floor(Date.now() / 1e3);
        if (i <= n) throw new Error("JWT has expired");
    }
    function F_(i) {
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
    const W_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    function Ui(i) {
        if (!W_.test(i)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
    }
    function Ec() {
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
    function Q_(i, n) {
        return new Proxy(i, {
            get: (r, l, u)=>{
                if (l === "__isInsecureUserWarningProxy") return !0;
                if (typeof l == "symbol") {
                    const c = l.toString();
                    if (c === "Symbol(Symbol.toPrimitive)" || c === "Symbol(Symbol.toStringTag)" || c === "Symbol(util.inspect.custom)" || c === "Symbol(nodejs.util.inspect.custom)") return Reflect.get(r, l, u);
                }
                return !n.value && typeof l == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), n.value = !0), Reflect.get(r, l, u);
            }
        });
    }
    function zm(i) {
        return JSON.parse(JSON.stringify(i));
    }
    const Ma = (i)=>i.msg || i.message || i.error_description || i.error || JSON.stringify(i), Z_ = [
        502,
        503,
        504
    ];
    async function Mm(i) {
        var n;
        if (!q_(i)) throw new Hc(Ma(i), 0);
        if (Z_.includes(i.status)) throw new Hc(Ma(i), i.status);
        let r;
        try {
            r = await i.json();
        } catch (c) {
            throw new Ha(Ma(c), c);
        }
        let l;
        const u = X_(i);
        if (u && u.getTime() >= kg["2024-01-01"].timestamp && typeof r == "object" && r && typeof r.code == "string" ? l = r.code : typeof r == "object" && r && typeof r.error_code == "string" && (l = r.error_code), l) {
            if (l === "weak_password") throw new Nm(Ma(r), i.status, ((n = r.weak_password) === null || n === void 0 ? void 0 : n.reasons) || []);
            if (l === "session_not_found") throw new $t;
        } else if (typeof r == "object" && r && typeof r.weak_password == "object" && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce((c, f)=>c && typeof f == "string", !0)) throw new Nm(Ma(r), i.status, r.weak_password.reasons);
        throw new C_(Ma(r), i.status || 500, l);
    }
    const eS = (i, n, r, l)=>{
        const u = {
            method: i,
            headers: n?.headers || {}
        };
        return i === "GET" ? u : (u.headers = Object.assign({
            "Content-Type": "application/json;charset=UTF-8"
        }, n?.headers), u.body = JSON.stringify(l), Object.assign(Object.assign({}, u), r));
    };
    async function se(i, n, r, l) {
        var u;
        const c = Object.assign({}, l?.headers);
        c[Mc] || (c[Mc] = kg["2024-01-01"].name), l?.jwt && (c.Authorization = `Bearer ${l.jwt}`);
        const f = (u = l?.query) !== null && u !== void 0 ? u : {};
        l?.redirectTo && (f.redirect_to = l.redirectTo);
        const d = Object.keys(f).length ? "?" + new URLSearchParams(f).toString() : "", m = await tS(i, n, r + d, {
            headers: c,
            noResolveJson: l?.noResolveJson
        }, {}, l?.body);
        return l?.xform ? l?.xform(m) : {
            data: Object.assign({}, m),
            error: null
        };
    }
    async function tS(i, n, r, l, u, c) {
        const f = eS(n, l, u, c);
        let d;
        try {
            d = await i(r, Object.assign({}, f));
        } catch (m) {
            throw console.error(m), new Hc(Ma(m), 0);
        }
        if (d.ok || await Mm(d), l?.noResolveJson) return d;
        try {
            return await d.json();
        } catch (m) {
            await Mm(m);
        }
    }
    function ln(i) {
        var n;
        let r = null;
        iS(i) && (r = Object.assign({}, i), i.expires_at || (r.expires_at = z_(i.expires_in)));
        const l = (n = i.user) !== null && n !== void 0 ? n : i;
        return {
            data: {
                session: r,
                user: l
            },
            error: null
        };
    }
    function Hm(i) {
        const n = ln(i);
        return !n.error && i.weak_password && typeof i.weak_password == "object" && Array.isArray(i.weak_password.reasons) && i.weak_password.reasons.length && i.weak_password.message && typeof i.weak_password.message == "string" && i.weak_password.reasons.reduce((r, l)=>r && typeof l == "string", !0) && (n.data.weak_password = i.weak_password), n;
    }
    function ya(i) {
        var n;
        return {
            data: {
                user: (n = i.user) !== null && n !== void 0 ? n : i
            },
            error: null
        };
    }
    function nS(i) {
        return {
            data: i,
            error: null
        };
    }
    function aS(i) {
        const { action_link: n, email_otp: r, hashed_token: l, redirect_to: u, verification_type: c } = i, f = Yl(i, [
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
            verification_type: c
        }, m = Object.assign({}, f);
        return {
            data: {
                properties: d,
                user: m
            },
            error: null
        };
    }
    function qm(i) {
        return i;
    }
    function iS(i) {
        return i.access_token && i.refresh_token && i.expires_in;
    }
    const Tc = [
        "global",
        "local",
        "others"
    ];
    class rS {
        constructor({ url: n = "", headers: r = {}, fetch: l }){
            this.url = n, this.headers = r, this.fetch = Ng(l), this.mfa = {
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
        async signOut(n, r = Tc[0]) {
            if (Tc.indexOf(r) < 0) throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Tc.join(", ")}`);
            try {
                return await se(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
                    headers: this.headers,
                    jwt: n,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (l) {
                if (ae(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async inviteUserByEmail(n, r = {}) {
            try {
                return await se(this.fetch, "POST", `${this.url}/invite`, {
                    body: {
                        email: n,
                        data: r.data
                    },
                    headers: this.headers,
                    redirectTo: r.redirectTo,
                    xform: ya
                });
            } catch (l) {
                if (ae(l)) return {
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
                const { options: r } = n, l = Yl(n, [
                    "options"
                ]), u = Object.assign(Object.assign({}, l), r);
                return "newEmail" in l && (u.new_email = l?.newEmail, delete u.newEmail), await se(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                    body: u,
                    headers: this.headers,
                    xform: aS,
                    redirectTo: r?.redirectTo
                });
            } catch (r) {
                if (ae(r)) return {
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
                return await se(this.fetch, "POST", `${this.url}/admin/users`, {
                    body: n,
                    headers: this.headers,
                    xform: ya
                });
            } catch (r) {
                if (ae(r)) return {
                    data: {
                        user: null
                    },
                    error: r
                };
                throw r;
            }
        }
        async listUsers(n) {
            var r, l, u, c, f, d, m;
            try {
                const v = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                }, S = await se(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (l = (r = n?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && l !== void 0 ? l : "",
                        per_page: (c = (u = n?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && c !== void 0 ? c : ""
                    },
                    xform: qm
                });
                if (S.error) throw S.error;
                const b = await S.json(), x = (f = S.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, A = (m = (d = S.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && m !== void 0 ? m : [];
                return A.length > 0 && (A.forEach((U)=>{
                    const B = parseInt(U.split(";")[0].split("=")[1].substring(0, 1)), D = JSON.parse(U.split(";")[1].split("=")[1]);
                    v[`${D}Page`] = B;
                }), v.total = parseInt(x)), {
                    data: Object.assign(Object.assign({}, b), v),
                    error: null
                };
            } catch (v) {
                if (ae(v)) return {
                    data: {
                        users: []
                    },
                    error: v
                };
                throw v;
            }
        }
        async getUserById(n) {
            Ui(n);
            try {
                return await se(this.fetch, "GET", `${this.url}/admin/users/${n}`, {
                    headers: this.headers,
                    xform: ya
                });
            } catch (r) {
                if (ae(r)) return {
                    data: {
                        user: null
                    },
                    error: r
                };
                throw r;
            }
        }
        async updateUserById(n, r) {
            Ui(n);
            try {
                return await se(this.fetch, "PUT", `${this.url}/admin/users/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: ya
                });
            } catch (l) {
                if (ae(l)) return {
                    data: {
                        user: null
                    },
                    error: l
                };
                throw l;
            }
        }
        async deleteUser(n, r = !1) {
            Ui(n);
            try {
                return await se(this.fetch, "DELETE", `${this.url}/admin/users/${n}`, {
                    headers: this.headers,
                    body: {
                        should_soft_delete: r
                    },
                    xform: ya
                });
            } catch (l) {
                if (ae(l)) return {
                    data: {
                        user: null
                    },
                    error: l
                };
                throw l;
            }
        }
        async _listFactors(n) {
            Ui(n.userId);
            try {
                const { data: r, error: l } = await se(this.fetch, "GET", `${this.url}/admin/users/${n.userId}/factors`, {
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
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _deleteFactor(n) {
            Ui(n.userId), Ui(n.id);
            try {
                return {
                    data: await se(this.fetch, "DELETE", `${this.url}/admin/users/${n.userId}/factors/${n.id}`, {
                        headers: this.headers
                    }),
                    error: null
                };
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _listOAuthClients(n) {
            var r, l, u, c, f, d, m;
            try {
                const v = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                }, S = await se(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (l = (r = n?.page) === null || r === void 0 ? void 0 : r.toString()) !== null && l !== void 0 ? l : "",
                        per_page: (c = (u = n?.perPage) === null || u === void 0 ? void 0 : u.toString()) !== null && c !== void 0 ? c : ""
                    },
                    xform: qm
                });
                if (S.error) throw S.error;
                const b = await S.json(), x = (f = S.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0, A = (m = (d = S.headers.get("link")) === null || d === void 0 ? void 0 : d.split(",")) !== null && m !== void 0 ? m : [];
                return A.length > 0 && (A.forEach((U)=>{
                    const B = parseInt(U.split(";")[0].split("=")[1].substring(0, 1)), D = JSON.parse(U.split(";")[1].split("=")[1]);
                    v[`${D}Page`] = B;
                }), v.total = parseInt(x)), {
                    data: Object.assign(Object.assign({}, b), v),
                    error: null
                };
            } catch (v) {
                if (ae(v)) return {
                    data: {
                        clients: []
                    },
                    error: v
                };
                throw v;
            }
        }
        async _createOAuthClient(n) {
            try {
                return await se(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
                    body: n,
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _getOAuthClient(n) {
            try {
                return await se(this.fetch, "GET", `${this.url}/admin/oauth/clients/${n}`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _updateOAuthClient(n, r) {
            try {
                return await se(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: (l)=>({
                            data: l,
                            error: null
                        })
                });
            } catch (l) {
                if (ae(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async _deleteOAuthClient(n) {
            try {
                return await se(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${n}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _regenerateOAuthClientSecret(n) {
            try {
                return await se(this.fetch, "POST", `${this.url}/admin/oauth/clients/${n}/regenerate_secret`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _listCustomProviders(n) {
            try {
                const r = {};
                return n?.type && (r.type = n.type), await se(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
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
                if (ae(r)) return {
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
                return await se(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
                    body: n,
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _getCustomProvider(n) {
            try {
                return await se(this.fetch, "GET", `${this.url}/admin/custom-providers/${n}`, {
                    headers: this.headers,
                    xform: (r)=>({
                            data: r,
                            error: null
                        })
                });
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
        async _updateCustomProvider(n, r) {
            try {
                return await se(this.fetch, "PUT", `${this.url}/admin/custom-providers/${n}`, {
                    body: r,
                    headers: this.headers,
                    xform: (l)=>({
                            data: l,
                            error: null
                        })
                });
            } catch (l) {
                if (ae(l)) return {
                    data: null,
                    error: l
                };
                throw l;
            }
        }
        async _deleteCustomProvider(n) {
            try {
                return await se(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${n}`, {
                    headers: this.headers,
                    noResolveJson: !0
                }), {
                    data: null,
                    error: null
                };
            } catch (r) {
                if (ae(r)) return {
                    data: null,
                    error: r
                };
                throw r;
            }
        }
    }
    function $m(i = {}) {
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
    const gn = {
        debug: !!(globalThis && Ug() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
    };
    class Dg extends Error {
        constructor(n){
            super(n), this.isAcquireTimeout = !0;
        }
    }
    class Im extends Dg {
    }
    async function sS(i, n, r) {
        gn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", i, n);
        const l = new globalThis.AbortController;
        let u;
        n > 0 && (u = setTimeout(()=>{
            l.abort(), gn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", i);
        }, n)), await Promise.resolve();
        try {
            return await globalThis.navigator.locks.request(i, n === 0 ? {
                mode: "exclusive",
                ifAvailable: !0
            } : {
                mode: "exclusive",
                signal: l.signal
            }, async (c)=>{
                if (c) {
                    clearTimeout(u), gn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", i, c.name);
                    try {
                        return await r();
                    } finally{
                        gn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", i, c.name);
                    }
                } else {
                    if (n === 0) throw gn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", i), new Im(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);
                    if (gn.debug) try {
                        const f = await globalThis.navigator.locks.query();
                        console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(f, null, "  "));
                    } catch (f) {
                        console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", f);
                    }
                    return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), clearTimeout(u), await r();
                }
            });
        } catch (c) {
            if (n > 0 && clearTimeout(u), c?.name === "AbortError" && n > 0) {
                if (l.signal.aborted) return gn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock", i), console.warn(`@supabase/gotrue-js: Lock "${i}" was not released within ${n}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`), await Promise.resolve().then(()=>globalThis.navigator.locks.request(i, {
                        mode: "exclusive",
                        steal: !0
                    }, async (f)=>{
                        if (f) {
                            gn.debug && console.log("@supabase/gotrue-js: navigatorLock: recovered (stolen)", i, f.name);
                            try {
                                return await r();
                            } finally{
                                gn.debug && console.log("@supabase/gotrue-js: navigatorLock: released (stolen)", i, f.name);
                            }
                        } else return console.warn("@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"), await r();
                    }));
                throw gn.debug && console.log("@supabase/gotrue-js: navigatorLock: lock was stolen by another request", i), new Im(`Lock "${i}" was released because another request stole it`);
            }
            throw c;
        }
    }
    function lS() {
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
    function Bg(i) {
        if (!/^0x[a-fA-F0-9]{40}$/.test(i)) throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);
        return i.toLowerCase();
    }
    function oS(i) {
        return parseInt(i, 16);
    }
    function uS(i) {
        const n = new TextEncoder().encode(i);
        return "0x" + Array.from(n, (l)=>l.toString(16).padStart(2, "0")).join("");
    }
    function cS(i) {
        var n;
        const { chainId: r, domain: l, expirationTime: u, issuedAt: c = new Date, nonce: f, notBefore: d, requestId: m, resources: v, scheme: S, uri: b, version: x } = i;
        {
            if (!Number.isInteger(r)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);
            if (!l) throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
            if (f && f.length < 8) throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);
            if (!b) throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
            if (x !== "1") throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);
            if (!((n = i.statement) === null || n === void 0) && n.includes(`
`)) throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`);
        }
        const A = Bg(i.address), U = S ? `${S}://${l}` : l, B = i.statement ? `${i.statement}
` : "", D = `${U} wants you to sign in with your Ethereum account:
${A}

${B}`;
        let I = `URI: ${b}
Version: ${x}
Chain ID: ${r}${f ? `
Nonce: ${f}` : ""}
Issued At: ${c.toISOString()}`;
        if (u && (I += `
Expiration Time: ${u.toISOString()}`), d && (I += `
Not Before: ${d.toISOString()}`), m && (I += `
Request ID: ${m}`), v) {
            let K = `
Resources:`;
            for (const H of v){
                if (!H || typeof H != "string") throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${H}`);
                K += `
- ${H}`;
            }
            I += K;
        }
        return `${D}
${I}`;
    }
    class ot extends Error {
        constructor({ message: n, code: r, cause: l, name: u }){
            var c;
            super(n, {
                cause: l
            }), this.__isWebAuthnError = !0, this.name = (c = u ?? (l instanceof Error ? l.name : void 0)) !== null && c !== void 0 ? c : "Unknown Error", this.code = r;
        }
    }
    class Il extends ot {
        constructor(n, r){
            super({
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: r,
                message: n
            }), this.name = "WebAuthnUnknownError", this.originalError = r;
        }
    }
    function hS({ error: i, options: n }) {
        var r, l, u;
        const { publicKey: c } = n;
        if (!c) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new ot({
                message: "Registration ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else if (i.name === "ConstraintError") {
            if (((r = c.authenticatorSelection) === null || r === void 0 ? void 0 : r.requireResidentKey) === !0) return new ot({
                message: "Discoverable credentials were required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                cause: i
            });
            if (n.mediation === "conditional" && ((l = c.authenticatorSelection) === null || l === void 0 ? void 0 : l.userVerification) === "required") return new ot({
                message: "User verification was required during automatic registration but it could not be performed",
                code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
                cause: i
            });
            if (((u = c.authenticatorSelection) === null || u === void 0 ? void 0 : u.userVerification) === "required") return new ot({
                message: "User verification was required but no available authenticator supported it",
                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                cause: i
            });
        } else {
            if (i.name === "InvalidStateError") return new ot({
                message: "The authenticator was previously registered",
                code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                cause: i
            });
            if (i.name === "NotAllowedError") return new ot({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "NotSupportedError") return c.pubKeyCredParams.filter((d)=>d.type === "public-key").length === 0 ? new ot({
                message: 'No entry in pubKeyCredParams was of type "public-key"',
                code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                cause: i
            }) : new ot({
                message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                cause: i
            });
            if (i.name === "SecurityError") {
                const f = window.location.hostname;
                if (Lg(f)) {
                    if (c.rp.id !== f) return new ot({
                        message: `The RP ID "${c.rp.id}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new ot({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "TypeError") {
                if (c.user.id.byteLength < 1 || c.user.id.byteLength > 64) return new ot({
                    message: "User ID was not between 1 and 64 characters",
                    code: "ERROR_INVALID_USER_ID_LENGTH",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new ot({
                message: "The authenticator was unable to process the specified options, or could not create a new credential",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new ot({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    function fS({ error: i, options: n }) {
        const { publicKey: r } = n;
        if (!r) throw Error("options was missing required publicKey property");
        if (i.name === "AbortError") {
            if (n.signal instanceof AbortSignal) return new ot({
                message: "Authentication ceremony was sent an abort signal",
                code: "ERROR_CEREMONY_ABORTED",
                cause: i
            });
        } else {
            if (i.name === "NotAllowedError") return new ot({
                message: i.message,
                code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                cause: i
            });
            if (i.name === "SecurityError") {
                const l = window.location.hostname;
                if (Lg(l)) {
                    if (r.rpId !== l) return new ot({
                        message: `The RP ID "${r.rpId}" is invalid for this domain`,
                        code: "ERROR_INVALID_RP_ID",
                        cause: i
                    });
                } else return new ot({
                    message: `${window.location.hostname} is an invalid domain`,
                    code: "ERROR_INVALID_DOMAIN",
                    cause: i
                });
            } else if (i.name === "UnknownError") return new ot({
                message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                cause: i
            });
        }
        return new ot({
            message: "a Non-Webauthn related error has occurred",
            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
            cause: i
        });
    }
    class dS {
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
    const pS = new dS;
    function mS(i) {
        if (!i) throw new Error("Credential creation options are required");
        if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function") return PublicKeyCredential.parseCreationOptionsFromJSON(i);
        const { challenge: n, user: r, excludeCredentials: l } = i, u = Yl(i, [
            "challenge",
            "user",
            "excludeCredentials"
        ]), c = qi(n).buffer, f = Object.assign(Object.assign({}, r), {
            id: qi(r.id).buffer
        }), d = Object.assign(Object.assign({}, u), {
            challenge: c,
            user: f
        });
        if (l && l.length > 0) {
            d.excludeCredentials = new Array(l.length);
            for(let m = 0; m < l.length; m++){
                const v = l[m];
                d.excludeCredentials[m] = Object.assign(Object.assign({}, v), {
                    id: qi(v.id).buffer,
                    type: v.type || "public-key",
                    transports: v.transports
                });
            }
        }
        return d;
    }
    function gS(i) {
        if (!i) throw new Error("Credential request options are required");
        if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function") return PublicKeyCredential.parseRequestOptionsFromJSON(i);
        const { challenge: n, allowCredentials: r } = i, l = Yl(i, [
            "challenge",
            "allowCredentials"
        ]), u = qi(n).buffer, c = Object.assign(Object.assign({}, l), {
            challenge: u
        });
        if (r && r.length > 0) {
            c.allowCredentials = new Array(r.length);
            for(let f = 0; f < r.length; f++){
                const d = r[f];
                c.allowCredentials[f] = Object.assign(Object.assign({}, d), {
                    id: qi(d.id).buffer,
                    type: d.type || "public-key",
                    transports: d.transports
                });
            }
        }
        return c;
    }
    function yS(i) {
        var n;
        if ("toJSON" in i && typeof i.toJSON == "function") return i.toJSON();
        const r = i;
        return {
            id: i.id,
            rawId: i.id,
            response: {
                attestationObject: qa(new Uint8Array(i.response.attestationObject)),
                clientDataJSON: qa(new Uint8Array(i.response.clientDataJSON))
            },
            type: "public-key",
            clientExtensionResults: i.getClientExtensionResults(),
            authenticatorAttachment: (n = r.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
        };
    }
    function vS(i) {
        var n;
        if ("toJSON" in i && typeof i.toJSON == "function") return i.toJSON();
        const r = i, l = i.getClientExtensionResults(), u = i.response;
        return {
            id: i.id,
            rawId: i.id,
            response: {
                authenticatorData: qa(new Uint8Array(u.authenticatorData)),
                clientDataJSON: qa(new Uint8Array(u.clientDataJSON)),
                signature: qa(new Uint8Array(u.signature)),
                userHandle: u.userHandle ? qa(new Uint8Array(u.userHandle)) : void 0
            },
            type: "public-key",
            clientExtensionResults: l,
            authenticatorAttachment: (n = r.authenticatorAttachment) !== null && n !== void 0 ? n : void 0
        };
    }
    function Lg(i) {
        return i === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i);
    }
    function Pm() {
        var i, n;
        return !!(wt() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((i = navigator?.credentials) === null || i === void 0 ? void 0 : i.create) == "function" && typeof ((n = navigator?.credentials) === null || n === void 0 ? void 0 : n.get) == "function");
    }
    async function bS(i) {
        try {
            const n = await navigator.credentials.create(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new Il("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new Il("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: hS({
                    error: n,
                    options: i
                })
            };
        }
    }
    async function wS(i) {
        try {
            const n = await navigator.credentials.get(i);
            return n ? n instanceof PublicKeyCredential ? {
                data: n,
                error: null
            } : {
                data: null,
                error: new Il("Browser returned unexpected credential type", n)
            } : {
                data: null,
                error: new Il("Empty credential response", n)
            };
        } catch (n) {
            return {
                data: null,
                error: fS({
                    error: n,
                    options: i
                })
            };
        }
    }
    const _S = {
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
    }, SS = {
        userVerification: "preferred",
        hints: [
            "security-key"
        ],
        attestation: "direct"
    };
    function Pl(...i) {
        const n = (u)=>u !== null && typeof u == "object" && !Array.isArray(u), r = (u)=>u instanceof ArrayBuffer || ArrayBuffer.isView(u), l = {};
        for (const u of i)if (u) for(const c in u){
            const f = u[c];
            if (f !== void 0) if (Array.isArray(f)) l[c] = f;
            else if (r(f)) l[c] = f;
            else if (n(f)) {
                const d = l[c];
                n(d) ? l[c] = Pl(d, f) : l[c] = Pl(f);
            } else l[c] = f;
        }
        return l;
    }
    function ES(i, n) {
        return Pl(_S, i, n || {});
    }
    function TS(i, n) {
        return Pl(SS, i, n || {});
    }
    class AS {
        constructor(n){
            this.client = n, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
        }
        async _enroll(n) {
            return this.client.mfa.enroll(Object.assign(Object.assign({}, n), {
                factorType: "webauthn"
            }));
        }
        async _challenge({ factorId: n, webauthn: r, friendlyName: l, signal: u }, c) {
            var f;
            try {
                const { data: d, error: m } = await this.client.mfa.challenge({
                    factorId: n,
                    webauthn: r
                });
                if (!d) return {
                    data: null,
                    error: m
                };
                const v = u ?? pS.createNewAbortSignal();
                if (d.webauthn.type === "create") {
                    const { user: S } = d.webauthn.credential_options.publicKey;
                    if (!S.name) {
                        const b = l;
                        if (b) S.name = `${S.id}:${b}`;
                        else {
                            const A = (await this.client.getUser()).data.user, U = ((f = A?.user_metadata) === null || f === void 0 ? void 0 : f.name) || A?.email || A?.id || "User";
                            S.name = `${S.id}:${U}`;
                        }
                    }
                    S.displayName || (S.displayName = S.name);
                }
                switch(d.webauthn.type){
                    case "create":
                        {
                            const S = ES(d.webauthn.credential_options.publicKey, c?.create), { data: b, error: x } = await bS({
                                publicKey: S,
                                signal: v
                            });
                            return b ? {
                                data: {
                                    factorId: n,
                                    challengeId: d.id,
                                    webauthn: {
                                        type: d.webauthn.type,
                                        credential_response: b
                                    }
                                },
                                error: null
                            } : {
                                data: null,
                                error: x
                            };
                        }
                    case "request":
                        {
                            const S = TS(d.webauthn.credential_options.publicKey, c?.request), { data: b, error: x } = await wS(Object.assign(Object.assign({}, d.webauthn.credential_options), {
                                publicKey: S,
                                signal: v
                            }));
                            return b ? {
                                data: {
                                    factorId: n,
                                    challengeId: d.id,
                                    webauthn: {
                                        type: d.webauthn.type,
                                        credential_response: b
                                    }
                                },
                                error: null
                            } : {
                                data: null,
                                error: x
                            };
                        }
                }
            } catch (d) {
                return ae(d) ? {
                    data: null,
                    error: d
                } : {
                    data: null,
                    error: new Ha("Unexpected error in challenge", d)
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
        ] : void 0, signal: u } = {} }, c) {
            if (!r) return {
                data: null,
                error: new ns("rpId is required for WebAuthn authentication")
            };
            try {
                if (!Pm()) return {
                    data: null,
                    error: new Ha("Browser does not support WebAuthn", null)
                };
                const { data: f, error: d } = await this.challenge({
                    factorId: n,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l
                    },
                    signal: u
                }, {
                    request: c
                });
                if (!f) return {
                    data: null,
                    error: d
                };
                const { webauthn: m } = f;
                return this._verify({
                    factorId: n,
                    challengeId: f.challengeId,
                    webauthn: {
                        type: m.type,
                        rpId: r,
                        rpOrigins: l,
                        credential_response: m.credential_response
                    }
                });
            } catch (f) {
                return ae(f) ? {
                    data: null,
                    error: f
                } : {
                    data: null,
                    error: new Ha("Unexpected error in authenticate", f)
                };
            }
        }
        async _register({ friendlyName: n, webauthn: { rpId: r = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: l = typeof window < "u" ? [
            window.location.origin
        ] : void 0, signal: u } = {} }, c) {
            if (!r) return {
                data: null,
                error: new ns("rpId is required for WebAuthn registration")
            };
            try {
                if (!Pm()) return {
                    data: null,
                    error: new Ha("Browser does not support WebAuthn", null)
                };
                const { data: f, error: d } = await this._enroll({
                    friendlyName: n
                });
                if (!f) return await this.client.mfa.listFactors().then((S)=>{
                    var b;
                    return (b = S.data) === null || b === void 0 ? void 0 : b.all.find((x)=>x.factor_type === "webauthn" && x.friendly_name === n && x.status !== "unverified");
                }).then((S)=>S ? this.client.mfa.unenroll({
                        factorId: S?.id
                    }) : void 0), {
                    data: null,
                    error: d
                };
                const { data: m, error: v } = await this._challenge({
                    factorId: f.id,
                    friendlyName: f.friendly_name,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l
                    },
                    signal: u
                }, {
                    create: c
                });
                return m ? this._verify({
                    factorId: f.id,
                    challengeId: m.challengeId,
                    webauthn: {
                        rpId: r,
                        rpOrigins: l,
                        type: m.webauthn.type,
                        credential_response: m.webauthn.credential_response
                    }
                }) : {
                    data: null,
                    error: v
                };
            } catch (f) {
                return ae(f) ? {
                    data: null,
                    error: f
                } : {
                    data: null,
                    error: new Ha("Unexpected error in register", f)
                };
            }
        }
    }
    lS();
    const xS = {
        url: E_,
        storageKey: T_,
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: A_,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1,
        throwOnError: !1,
        lockAcquireTimeout: 5e3,
        skipAutoInitialize: !1
    };
    async function Gm(i, n, r) {
        return await r();
    }
    const Ni = {};
    class as {
        get jwks() {
            var n, r;
            return (r = (n = Ni[this.storageKey]) === null || n === void 0 ? void 0 : n.jwks) !== null && r !== void 0 ? r : {
                keys: []
            };
        }
        set jwks(n) {
            Ni[this.storageKey] = Object.assign(Object.assign({}, Ni[this.storageKey]), {
                jwks: n
            });
        }
        get jwks_cached_at() {
            var n, r;
            return (r = (n = Ni[this.storageKey]) === null || n === void 0 ? void 0 : n.cachedAt) !== null && r !== void 0 ? r : Number.MIN_SAFE_INTEGER;
        }
        set jwks_cached_at(n) {
            Ni[this.storageKey] = Object.assign(Object.assign({}, Ni[this.storageKey]), {
                cachedAt: n
            });
        }
        constructor(n){
            var r, l, u;
            this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
            const c = Object.assign(Object.assign({}, xS), n);
            if (this.storageKey = c.storageKey, this.instanceID = (r = as.nextInstanceID[this.storageKey]) !== null && r !== void 0 ? r : 0, as.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!c.debug, typeof c.debug == "function" && (this.logger = c.debug), this.instanceID > 0 && wt()) {
                const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
                console.warn(f), this.logDebugMessages && console.trace(f);
            }
            if (this.persistSession = c.persistSession, this.autoRefreshToken = c.autoRefreshToken, this.admin = new rS({
                url: c.url,
                headers: c.headers,
                fetch: c.fetch
            }), this.url = c.url, this.headers = c.headers, this.fetch = Ng(c.fetch), this.lock = c.lock || Gm, this.detectSessionInUrl = c.detectSessionInUrl, this.flowType = c.flowType, this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader, this.throwOnError = c.throwOnError, this.lockAcquireTimeout = c.lockAcquireTimeout, c.lock ? this.lock = c.lock : this.persistSession && wt() && (!((l = globalThis?.navigator) === null || l === void 0) && l.locks) ? this.lock = sS : this.lock = Gm, this.jwks || (this.jwks = {
                keys: []
            }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
                webauthn: new AS(this)
            }, this.oauth = {
                getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
                approveAuthorization: this._approveAuthorization.bind(this),
                denyAuthorization: this._denyAuthorization.bind(this),
                listGrants: this._listOAuthGrants.bind(this),
                revokeGrant: this._revokeOAuthGrant.bind(this)
            }, this.persistSession ? (c.storage ? this.storage = c.storage : Ug() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = $m(this.memoryStorage)), c.userStorage && (this.userStorage = c.userStorage)) : (this.memoryStorage = {}, this.storage = $m(this.memoryStorage)), wt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
            c.skipAutoInitialize || this.initialize().catch((f)=>{
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
            return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Og}) ${new Date().toISOString()}`;
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
                if (wt() && (r = H_(window.location.href), this._isImplicitGrantCallback(r) ? l = "implicit" : await this._isPKCECallback(r) && (l = "pkce")), wt() && this.detectSessionInUrl && l !== "none") {
                    const { data: u, error: c } = await this._getSessionFromURL(r, l);
                    if (c) {
                        if (this._debug("#_initialize()", "error detecting session from URL", c), k_(c)) {
                            const m = (n = c.details) === null || n === void 0 ? void 0 : n.code;
                            if (m === "identity_already_exists" || m === "identity_not_found" || m === "single_identity_not_deletable") return {
                                error: c
                            };
                        }
                        return {
                            error: c
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
                return ae(r) ? this._returnResult({
                    error: r
                }) : this._returnResult({
                    error: new Ha("Unexpected error during initialization", r)
                });
            } finally{
                await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
            }
        }
        async signInAnonymously(n) {
            var r, l, u;
            try {
                const c = await se(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (l = (r = n?.options) === null || r === void 0 ? void 0 : r.data) !== null && l !== void 0 ? l : {},
                        gotrue_meta_security: {
                            captcha_token: (u = n?.options) === null || u === void 0 ? void 0 : u.captchaToken
                        }
                    },
                    xform: ln
                }), { data: f, error: d } = c;
                if (d || !f) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
                const m = f.session, v = f.user;
                return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", m)), this._returnResult({
                    data: {
                        user: v,
                        session: m
                    },
                    error: null
                });
            } catch (c) {
                if (ae(c)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                });
                throw c;
            }
        }
        async signUp(n) {
            var r, l, u;
            try {
                let c;
                if ("email" in n) {
                    const { email: S, password: b, options: x } = n;
                    let A = null, U = null;
                    this.flowType === "pkce" && ([A, U] = await ji(this.storage, this.storageKey)), c = await se(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        redirectTo: x?.emailRedirectTo,
                        body: {
                            email: S,
                            password: b,
                            data: (r = x?.data) !== null && r !== void 0 ? r : {},
                            gotrue_meta_security: {
                                captcha_token: x?.captchaToken
                            },
                            code_challenge: A,
                            code_challenge_method: U
                        },
                        xform: ln
                    });
                } else if ("phone" in n) {
                    const { phone: S, password: b, options: x } = n;
                    c = await se(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        body: {
                            phone: S,
                            password: b,
                            data: (l = x?.data) !== null && l !== void 0 ? l : {},
                            channel: (u = x?.channel) !== null && u !== void 0 ? u : "sms",
                            gotrue_meta_security: {
                                captcha_token: x?.captchaToken
                            }
                        },
                        xform: ln
                    });
                } else throw new Nl("You must provide either an email or phone number and a password");
                const { data: f, error: d } = c;
                if (d || !f) return await bt(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                });
                const m = f.session, v = f.user;
                return f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("SIGNED_IN", m)), this._returnResult({
                    data: {
                        user: v,
                        session: m
                    },
                    error: null
                });
            } catch (c) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(c)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: c
                });
                throw c;
            }
        }
        async signInWithPassword(n) {
            try {
                let r;
                if ("email" in n) {
                    const { email: c, password: f, options: d } = n;
                    r = await se(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            email: c,
                            password: f,
                            gotrue_meta_security: {
                                captcha_token: d?.captchaToken
                            }
                        },
                        xform: Hm
                    });
                } else if ("phone" in n) {
                    const { phone: c, password: f, options: d } = n;
                    r = await se(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            phone: c,
                            password: f,
                            gotrue_meta_security: {
                                captcha_token: d?.captchaToken
                            }
                        },
                        xform: Hm
                    });
                } else throw new Nl("You must provide either an email or phone number and a password");
                const { data: l, error: u } = r;
                if (u) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: u
                });
                if (!l || !l.session || !l.user) {
                    const c = new ki;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: c
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
                if (ae(r)) return this._returnResult({
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
            var r, l, u, c;
            return await this._handleProviderSignIn(n.provider, {
                redirectTo: (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo,
                scopes: (l = n.options) === null || l === void 0 ? void 0 : l.scopes,
                queryParams: (u = n.options) === null || u === void 0 ? void 0 : u.queryParams,
                skipBrowserRedirect: (c = n.options) === null || c === void 0 ? void 0 : c.skipBrowserRedirect
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
            var r, l, u, c, f, d, m, v, S, b, x;
            let A, U;
            if ("message" in n) A = n.message, U = n.signature;
            else {
                const { chain: B, wallet: D, statement: I, options: K } = n;
                let H;
                if (wt()) if (typeof D == "object") H = D;
                else {
                    const ke = window;
                    if ("ethereum" in ke && typeof ke.ethereum == "object" && "request" in ke.ethereum && typeof ke.ethereum.request == "function") H = ke.ethereum;
                    else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof D != "object" || !K?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    H = D;
                }
                const F = new URL((r = K?.url) !== null && r !== void 0 ? r : window.location.href), Z = await H.request({
                    method: "eth_requestAccounts"
                }).then((ke)=>ke).catch(()=>{
                    throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
                });
                if (!Z || Z.length === 0) throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
                const le = Bg(Z[0]);
                let ee = (l = K?.signInWithEthereum) === null || l === void 0 ? void 0 : l.chainId;
                if (!ee) {
                    const ke = await H.request({
                        method: "eth_chainId"
                    });
                    ee = oS(ke);
                }
                const qe = {
                    domain: F.host,
                    address: le,
                    statement: I,
                    uri: F.href,
                    version: "1",
                    chainId: ee,
                    nonce: (u = K?.signInWithEthereum) === null || u === void 0 ? void 0 : u.nonce,
                    issuedAt: (f = (c = K?.signInWithEthereum) === null || c === void 0 ? void 0 : c.issuedAt) !== null && f !== void 0 ? f : new Date,
                    expirationTime: (d = K?.signInWithEthereum) === null || d === void 0 ? void 0 : d.expirationTime,
                    notBefore: (m = K?.signInWithEthereum) === null || m === void 0 ? void 0 : m.notBefore,
                    requestId: (v = K?.signInWithEthereum) === null || v === void 0 ? void 0 : v.requestId,
                    resources: (S = K?.signInWithEthereum) === null || S === void 0 ? void 0 : S.resources
                };
                A = cS(qe), U = await H.request({
                    method: "personal_sign",
                    params: [
                        uS(A),
                        le
                    ]
                });
            }
            try {
                const { data: B, error: D } = await se(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                    headers: this.headers,
                    body: Object.assign({
                        chain: "ethereum",
                        message: A,
                        signature: U
                    }, !((b = n.options) === null || b === void 0) && b.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: (x = n.options) === null || x === void 0 ? void 0 : x.captchaToken
                        }
                    } : null),
                    xform: ln
                });
                if (D) throw D;
                if (!B || !B.session || !B.user) {
                    const I = new ki;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: I
                    });
                }
                return B.session && (await this._saveSession(B.session), await this._notifyAllSubscribers("SIGNED_IN", B.session)), this._returnResult({
                    data: Object.assign({}, B),
                    error: D
                });
            } catch (B) {
                if (ae(B)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: B
                });
                throw B;
            }
        }
        async signInWithSolana(n) {
            var r, l, u, c, f, d, m, v, S, b, x, A;
            let U, B;
            if ("message" in n) U = n.message, B = n.signature;
            else {
                const { chain: D, wallet: I, statement: K, options: H } = n;
                let F;
                if (wt()) if (typeof I == "object") F = I;
                else {
                    const le = window;
                    if ("solana" in le && typeof le.solana == "object" && ("signIn" in le.solana && typeof le.solana.signIn == "function" || "signMessage" in le.solana && typeof le.solana.signMessage == "function")) F = le.solana;
                    else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
                }
                else {
                    if (typeof I != "object" || !H?.url) throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
                    F = I;
                }
                const Z = new URL((r = H?.url) !== null && r !== void 0 ? r : window.location.href);
                if ("signIn" in F && F.signIn) {
                    const le = await F.signIn(Object.assign(Object.assign(Object.assign({
                        issuedAt: new Date().toISOString()
                    }, H?.signInWithSolana), {
                        version: "1",
                        domain: Z.host,
                        uri: Z.href
                    }), K ? {
                        statement: K
                    } : null));
                    let ee;
                    if (Array.isArray(le) && le[0] && typeof le[0] == "object") ee = le[0];
                    else if (le && typeof le == "object" && "signedMessage" in le && "signature" in le) ee = le;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                    if ("signedMessage" in ee && "signature" in ee && (typeof ee.signedMessage == "string" || ee.signedMessage instanceof Uint8Array) && ee.signature instanceof Uint8Array) U = typeof ee.signedMessage == "string" ? ee.signedMessage : new TextDecoder().decode(ee.signedMessage), B = ee.signature;
                    else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
                } else {
                    if (!("signMessage" in F) || typeof F.signMessage != "function" || !("publicKey" in F) || typeof F != "object" || !F.publicKey || !("toBase58" in F.publicKey) || typeof F.publicKey.toBase58 != "function") throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
                    U = [
                        `${Z.host} wants you to sign in with your Solana account:`,
                        F.publicKey.toBase58(),
                        ...K ? [
                            "",
                            K,
                            ""
                        ] : [
                            ""
                        ],
                        "Version: 1",
                        `URI: ${Z.href}`,
                        `Issued At: ${(u = (l = H?.signInWithSolana) === null || l === void 0 ? void 0 : l.issuedAt) !== null && u !== void 0 ? u : new Date().toISOString()}`,
                        ...!((c = H?.signInWithSolana) === null || c === void 0) && c.notBefore ? [
                            `Not Before: ${H.signInWithSolana.notBefore}`
                        ] : [],
                        ...!((f = H?.signInWithSolana) === null || f === void 0) && f.expirationTime ? [
                            `Expiration Time: ${H.signInWithSolana.expirationTime}`
                        ] : [],
                        ...!((d = H?.signInWithSolana) === null || d === void 0) && d.chainId ? [
                            `Chain ID: ${H.signInWithSolana.chainId}`
                        ] : [],
                        ...!((m = H?.signInWithSolana) === null || m === void 0) && m.nonce ? [
                            `Nonce: ${H.signInWithSolana.nonce}`
                        ] : [],
                        ...!((v = H?.signInWithSolana) === null || v === void 0) && v.requestId ? [
                            `Request ID: ${H.signInWithSolana.requestId}`
                        ] : [],
                        ...!((b = (S = H?.signInWithSolana) === null || S === void 0 ? void 0 : S.resources) === null || b === void 0) && b.length ? [
                            "Resources",
                            ...H.signInWithSolana.resources.map((ee)=>`- ${ee}`)
                        ] : []
                    ].join(`
`);
                    const le = await F.signMessage(new TextEncoder().encode(U), "utf8");
                    if (!le || !(le instanceof Uint8Array)) throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                    B = le;
                }
            }
            try {
                const { data: D, error: I } = await se(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                    headers: this.headers,
                    body: Object.assign({
                        chain: "solana",
                        message: U,
                        signature: qa(B)
                    }, !((x = n.options) === null || x === void 0) && x.captchaToken ? {
                        gotrue_meta_security: {
                            captcha_token: (A = n.options) === null || A === void 0 ? void 0 : A.captchaToken
                        }
                    } : null),
                    xform: ln
                });
                if (I) throw I;
                if (!D || !D.session || !D.user) {
                    const K = new ki;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: K
                    });
                }
                return D.session && (await this._saveSession(D.session), await this._notifyAllSubscribers("SIGNED_IN", D.session)), this._returnResult({
                    data: Object.assign({}, D),
                    error: I
                });
            } catch (D) {
                if (ae(D)) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: D
                });
                throw D;
            }
        }
        async _exchangeCodeForSession(n) {
            const r = await za(this.storage, `${this.storageKey}-code-verifier`), [l, u] = (r ?? "").split("/");
            try {
                if (!l && this.flowType === "pkce") throw new j_;
                const { data: c, error: f } = await se(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                    headers: this.headers,
                    body: {
                        auth_code: n,
                        code_verifier: l
                    },
                    xform: ln
                });
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), f) throw f;
                if (!c || !c.session || !c.user) {
                    const d = new ki;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: d
                    });
                }
                return c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), this._returnResult({
                    data: Object.assign(Object.assign({}, c), {
                        redirectType: u ?? null
                    }),
                    error: f
                });
            } catch (c) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(c)) return this._returnResult({
                    data: {
                        user: null,
                        session: null,
                        redirectType: null
                    },
                    error: c
                });
                throw c;
            }
        }
        async signInWithIdToken(n) {
            try {
                const { options: r, provider: l, token: u, access_token: c, nonce: f } = n, d = await se(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    body: {
                        provider: l,
                        id_token: u,
                        access_token: c,
                        nonce: f,
                        gotrue_meta_security: {
                            captcha_token: r?.captchaToken
                        }
                    },
                    xform: ln
                }), { data: m, error: v } = d;
                if (v) return this._returnResult({
                    data: {
                        user: null,
                        session: null
                    },
                    error: v
                });
                if (!m || !m.session || !m.user) {
                    const S = new ki;
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: S
                    });
                }
                return m.session && (await this._saveSession(m.session), await this._notifyAllSubscribers("SIGNED_IN", m.session)), this._returnResult({
                    data: m,
                    error: v
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
            var r, l, u, c, f;
            try {
                if ("email" in n) {
                    const { email: d, options: m } = n;
                    let v = null, S = null;
                    this.flowType === "pkce" && ([v, S] = await ji(this.storage, this.storageKey));
                    const { error: b } = await se(this.fetch, "POST", `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            email: d,
                            data: (r = m?.data) !== null && r !== void 0 ? r : {},
                            create_user: (l = m?.shouldCreateUser) !== null && l !== void 0 ? l : !0,
                            gotrue_meta_security: {
                                captcha_token: m?.captchaToken
                            },
                            code_challenge: v,
                            code_challenge_method: S
                        },
                        redirectTo: m?.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: b
                    });
                }
                if ("phone" in n) {
                    const { phone: d, options: m } = n, { data: v, error: S } = await se(this.fetch, "POST", `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            phone: d,
                            data: (u = m?.data) !== null && u !== void 0 ? u : {},
                            create_user: (c = m?.shouldCreateUser) !== null && c !== void 0 ? c : !0,
                            gotrue_meta_security: {
                                captcha_token: m?.captchaToken
                            },
                            channel: (f = m?.channel) !== null && f !== void 0 ? f : "sms"
                        }
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null,
                            messageId: v?.message_id
                        },
                        error: S
                    });
                }
                throw new Nl("You must provide either an email or phone number.");
            } catch (d) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(d)) return this._returnResult({
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
                let u, c;
                "options" in n && (u = (r = n.options) === null || r === void 0 ? void 0 : r.redirectTo, c = (l = n.options) === null || l === void 0 ? void 0 : l.captchaToken);
                const { data: f, error: d } = await se(this.fetch, "POST", `${this.url}/verify`, {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, n), {
                        gotrue_meta_security: {
                            captcha_token: c
                        }
                    }),
                    redirectTo: u,
                    xform: ln
                });
                if (d) throw d;
                if (!f) throw new Error("An error occurred on token verification.");
                const m = f.session, v = f.user;
                return m?.access_token && (await this._saveSession(m), await this._notifyAllSubscribers(n.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", m)), this._returnResult({
                    data: {
                        user: v,
                        session: m
                    },
                    error: null
                });
            } catch (u) {
                if (ae(u)) return this._returnResult({
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
            var r, l, u, c, f;
            try {
                let d = null, m = null;
                this.flowType === "pkce" && ([d, m] = await ji(this.storage, this.storageKey));
                const v = await se(this.fetch, "POST", `${this.url}/sso`, {
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
                        code_challenge_method: m
                    }),
                    headers: this.headers,
                    xform: nS
                });
                return !((c = v.data) === null || c === void 0) && c.url && wt() && !(!((f = n.options) === null || f === void 0) && f.skipBrowserRedirect) && window.location.assign(v.data.url), this._returnResult(v);
            } catch (d) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(d)) return this._returnResult({
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
                    if (!r) throw new $t;
                    const { error: u } = await se(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
                if (ae(n)) return this._returnResult({
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
                    const { email: l, type: u, options: c } = n, { error: f } = await se(this.fetch, "POST", r, {
                        headers: this.headers,
                        body: {
                            email: l,
                            type: u,
                            gotrue_meta_security: {
                                captcha_token: c?.captchaToken
                            }
                        },
                        redirectTo: c?.emailRedirectTo
                    });
                    return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: f
                    });
                } else if ("phone" in n) {
                    const { phone: l, type: u, options: c } = n, { data: f, error: d } = await se(this.fetch, "POST", r, {
                        headers: this.headers,
                        body: {
                            phone: l,
                            type: u,
                            gotrue_meta_security: {
                                captcha_token: c?.captchaToken
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
                throw new Nl("You must provide either an email or phone number and a type");
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
                const r = await za(this.storage, this.storageKey);
                if (this._debug("#getSession()", "session from storage", r), r !== null && (this._isValidSession(r) ? n = r : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !n) return {
                    data: {
                        session: null
                    },
                    error: null
                };
                const l = n.expires_at ? n.expires_at * 1e3 - Date.now() < _c : !1;
                if (this._debug("#__loadSession()", `session has${l ? "" : " not"} expired`, "expires_at", n.expires_at), !l) {
                    if (this.userStorage) {
                        const f = await za(this.userStorage, this.storageKey + "-user");
                        f?.user ? n.user = f.user : n.user = Ec();
                    }
                    if (this.storage.isServer && n.user && !n.user.__isUserNotAvailableProxy) {
                        const f = {
                            value: this.suppressGetSessionWarning
                        };
                        n.user = Q_(n.user, f), f.value && (this.suppressGetSessionWarning = !0);
                    }
                    return {
                        data: {
                            session: n
                        },
                        error: null
                    };
                }
                const { data: u, error: c } = await this._callRefreshToken(n.refresh_token);
                return c ? this._returnResult({
                    data: {
                        session: null
                    },
                    error: c
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
                return n ? await se(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: n,
                    xform: ya
                }) : await this._useSession(async (r)=>{
                    var l, u, c;
                    const { data: f, error: d } = r;
                    if (d) throw d;
                    return !(!((l = f.session) === null || l === void 0) && l.access_token) && !this.hasCustomAuthorizationHeader ? {
                        data: {
                            user: null
                        },
                        error: new $t
                    } : await se(this.fetch, "GET", `${this.url}/user`, {
                        headers: this.headers,
                        jwt: (c = (u = f.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0,
                        xform: ya
                    });
                });
            } catch (r) {
                if (ae(r)) return Ul(r) && (await this._removeSession(), await bt(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
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
                    const { data: u, error: c } = l;
                    if (c) throw c;
                    if (!u.session) throw new $t;
                    const f = u.session;
                    let d = null, m = null;
                    this.flowType === "pkce" && n.email != null && ([d, m] = await ji(this.storage, this.storageKey));
                    const { data: v, error: S } = await se(this.fetch, "PUT", `${this.url}/user`, {
                        headers: this.headers,
                        redirectTo: r?.emailRedirectTo,
                        body: Object.assign(Object.assign({}, n), {
                            code_challenge: d,
                            code_challenge_method: m
                        }),
                        jwt: f.access_token,
                        xform: ya
                    });
                    if (S) throw S;
                    return f.user = v.user, await this._saveSession(f), await this._notifyAllSubscribers("USER_UPDATED", f), this._returnResult({
                        data: {
                            user: f.user
                        },
                        error: null
                    });
                });
            } catch (l) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(l)) return this._returnResult({
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
                if (!n.access_token || !n.refresh_token) throw new $t;
                const r = Date.now() / 1e3;
                let l = r, u = !0, c = null;
                const { payload: f } = Bl(n.access_token);
                if (f.exp && (l = f.exp, u = l <= r), u) {
                    const { data: d, error: m } = await this._callRefreshToken(n.refresh_token);
                    if (m) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: m
                    });
                    if (!d) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    };
                    c = d;
                } else {
                    const { data: d, error: m } = await this._getUser(n.access_token);
                    if (m) return this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: m
                    });
                    c = {
                        access_token: n.access_token,
                        refresh_token: n.refresh_token,
                        user: d.user,
                        token_type: "bearer",
                        expires_in: l - r,
                        expires_at: l
                    }, await this._saveSession(c), await this._notifyAllSubscribers("SIGNED_IN", c);
                }
                return this._returnResult({
                    data: {
                        user: c.user,
                        session: c
                    },
                    error: null
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
                    if (!n?.refresh_token) throw new $t;
                    const { data: u, error: c } = await this._callRefreshToken(n.refresh_token);
                    return c ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: c
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
                if (ae(r)) return this._returnResult({
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
                if (!wt()) throw new Dl("No browser detected.");
                if (n.error || n.error_description || n.error_code) throw new Dl(n.error_description || "Error in URL with unspecified error_description", {
                    error: n.error || "unspecified_error",
                    code: n.error_code || "unspecified_code"
                });
                switch(r){
                    case "implicit":
                        if (this.flowType === "pkce") throw new Um("Not a valid PKCE flow url.");
                        break;
                    case "pkce":
                        if (this.flowType === "implicit") throw new Dl("Not a valid implicit grant flow url.");
                        break;
                    default:
                }
                if (r === "pkce") {
                    if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !n.code) throw new Um("No code detected.");
                    const { data: K, error: H } = await this._exchangeCodeForSession(n.code);
                    if (H) throw H;
                    const F = new URL(window.location.href);
                    return F.searchParams.delete("code"), window.history.replaceState(window.history.state, "", F.toString()), {
                        data: {
                            session: K.session,
                            redirectType: null
                        },
                        error: null
                    };
                }
                const { provider_token: l, provider_refresh_token: u, access_token: c, refresh_token: f, expires_in: d, expires_at: m, token_type: v } = n;
                if (!c || !d || !f || !v) throw new Dl("No session defined in URL");
                const S = Math.round(Date.now() / 1e3), b = parseInt(d);
                let x = S + b;
                m && (x = parseInt(m));
                const A = x - S;
                A * 1e3 <= zi && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${A}s, should have been closer to ${b}s`);
                const U = x - b;
                S - U >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", U, x, S) : S - U < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", U, x, S);
                const { data: B, error: D } = await this._getUser(c);
                if (D) throw D;
                const I = {
                    provider_token: l,
                    provider_refresh_token: u,
                    access_token: c,
                    expires_in: b,
                    expires_at: x,
                    refresh_token: f,
                    token_type: v,
                    user: B.user
                };
                return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({
                    data: {
                        session: I,
                        redirectType: n.type
                    },
                    error: null
                });
            } catch (l) {
                if (ae(l)) return this._returnResult({
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
            const r = await za(this.storage, `${this.storageKey}-code-verifier`);
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
                const { data: u, error: c } = r;
                if (c && !Ul(c)) return this._returnResult({
                    error: c
                });
                const f = (l = u.session) === null || l === void 0 ? void 0 : l.access_token;
                if (f) {
                    const { error: d } = await this.admin.signOut(f, n);
                    if (d && !(O_(d) && (d.status === 404 || d.status === 401 || d.status === 403) || Ul(d))) return this._returnResult({
                        error: d
                    });
                }
                return n !== "others" && (await this._removeSession(), await bt(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({
                    error: null
                });
            });
        }
        onAuthStateChange(n) {
            const r = M_(), l = {
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
                    const { data: { session: c }, error: f } = r;
                    if (f) throw f;
                    await ((l = this.stateChangeEmitters.get(n)) === null || l === void 0 ? void 0 : l.callback("INITIAL_SESSION", c)), this._debug("INITIAL_SESSION", "callback id", n, "session", c);
                } catch (c) {
                    await ((u = this.stateChangeEmitters.get(n)) === null || u === void 0 ? void 0 : u.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", n, "error", c), Ul(c) ? console.warn(c) : console.error(c);
                }
            });
        }
        async resetPasswordForEmail(n, r = {}) {
            let l = null, u = null;
            this.flowType === "pkce" && ([l, u] = await ji(this.storage, this.storageKey, !0));
            try {
                return await se(this.fetch, "POST", `${this.url}/recover`, {
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
            } catch (c) {
                if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(c)) return this._returnResult({
                    data: null,
                    error: c
                });
                throw c;
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
                if (ae(r)) return this._returnResult({
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
                const { data: l, error: u } = await this._useSession(async (c)=>{
                    var f, d, m, v, S;
                    const { data: b, error: x } = c;
                    if (x) throw x;
                    const A = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, n.provider, {
                        redirectTo: (f = n.options) === null || f === void 0 ? void 0 : f.redirectTo,
                        scopes: (d = n.options) === null || d === void 0 ? void 0 : d.scopes,
                        queryParams: (m = n.options) === null || m === void 0 ? void 0 : m.queryParams,
                        skipBrowserRedirect: !0
                    });
                    return await se(this.fetch, "GET", A, {
                        headers: this.headers,
                        jwt: (S = (v = b.session) === null || v === void 0 ? void 0 : v.access_token) !== null && S !== void 0 ? S : void 0
                    });
                });
                if (u) throw u;
                return wt() && !(!((r = n.options) === null || r === void 0) && r.skipBrowserRedirect) && window.location.assign(l?.url), this._returnResult({
                    data: {
                        provider: n.provider,
                        url: l?.url
                    },
                    error: null
                });
            } catch (l) {
                if (ae(l)) return this._returnResult({
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
                    const { error: u, data: { session: c } } = r;
                    if (u) throw u;
                    const { options: f, provider: d, token: m, access_token: v, nonce: S } = n, b = await se(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                        headers: this.headers,
                        jwt: (l = c?.access_token) !== null && l !== void 0 ? l : void 0,
                        body: {
                            provider: d,
                            id_token: m,
                            access_token: v,
                            nonce: S,
                            link_identity: !0,
                            gotrue_meta_security: {
                                captcha_token: f?.captchaToken
                            }
                        },
                        xform: ln
                    }), { data: x, error: A } = b;
                    return A ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: A
                    }) : !x || !x.session || !x.user ? this._returnResult({
                        data: {
                            user: null,
                            session: null
                        },
                        error: new ki
                    }) : (x.session && (await this._saveSession(x.session), await this._notifyAllSubscribers("USER_UPDATED", x.session)), this._returnResult({
                        data: x,
                        error: A
                    }));
                } catch (u) {
                    if (await bt(this.storage, `${this.storageKey}-code-verifier`), ae(u)) return this._returnResult({
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
                    const { data: c, error: f } = r;
                    if (f) throw f;
                    return await se(this.fetch, "DELETE", `${this.url}/user/identities/${n.identity_id}`, {
                        headers: this.headers,
                        jwt: (u = (l = c.session) === null || l === void 0 ? void 0 : l.access_token) !== null && u !== void 0 ? u : void 0
                    });
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
                return await I_(async (u)=>(u > 0 && await $_(200 * Math.pow(2, u - 1)), this._debug(r, "refreshing attempt", u), await se(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                        body: {
                            refresh_token: n
                        },
                        headers: this.headers,
                        xform: ln
                    })), (u, c)=>{
                    const f = 200 * Math.pow(2, u);
                    return c && Sc(c) && Date.now() + f - l < zi;
                });
            } catch (l) {
                if (this._debug(r, "error", l), ae(l)) return this._returnResult({
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
            return this._debug("#_handleProviderSignIn()", "provider", n, "options", r, "url", l), wt() && !r.skipBrowserRedirect && window.location.assign(l), {
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
                const u = await za(this.storage, this.storageKey);
                if (u && this.userStorage) {
                    let f = await za(this.userStorage, this.storageKey + "-user");
                    !this.storage.isServer && Object.is(this.storage, this.userStorage) && !f && (f = {
                        user: u.user
                    }, await Mi(this.userStorage, this.storageKey + "-user", f)), u.user = (n = f?.user) !== null && n !== void 0 ? n : Ec();
                } else if (u && !u.user && !u.user) {
                    const f = await za(this.storage, this.storageKey + "-user");
                    f && f?.user ? (u.user = f.user, await bt(this.storage, this.storageKey + "-user"), await Mi(this.storage, this.storageKey, u)) : u.user = Ec();
                }
                if (this._debug(l, "session from storage", u), !this._isValidSession(u)) {
                    this._debug(l, "session is not valid"), u !== null && await this._removeSession();
                    return;
                }
                const c = ((r = u.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 - Date.now() < _c;
                if (this._debug(l, `session has${c ? "" : " not"} expired with margin of ${_c}s`), c) {
                    if (this.autoRefreshToken && u.refresh_token) {
                        const { error: f } = await this._callRefreshToken(u.refresh_token);
                        f && (console.error(f), Sc(f) || (this._debug(l, "refresh failed with a non-retryable error, removing the session", f), await this._removeSession()));
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
            if (!n) throw new $t;
            if (this.refreshingDeferred) return this.refreshingDeferred.promise;
            const u = `#_callRefreshToken(${n.substring(0, 5)}...)`;
            this._debug(u, "begin");
            try {
                this.refreshingDeferred = new Fl;
                const { data: c, error: f } = await this._refreshAccessToken(n);
                if (f) throw f;
                if (!c.session) throw new $t;
                await this._saveSession(c.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", c.session);
                const d = {
                    data: c.session,
                    error: null
                };
                return this.refreshingDeferred.resolve(d), d;
            } catch (c) {
                if (this._debug(u, "error", c), ae(c)) {
                    const f = {
                        data: null,
                        error: c
                    };
                    return Sc(c) || await this._removeSession(), (r = this.refreshingDeferred) === null || r === void 0 || r.resolve(f), f;
                }
                throw (l = this.refreshingDeferred) === null || l === void 0 || l.reject(c), c;
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
                const c = [], f = Array.from(this.stateChangeEmitters.values()).map(async (d)=>{
                    try {
                        await d.callback(n, r);
                    } catch (m) {
                        c.push(m);
                    }
                });
                if (await Promise.all(f), c.length > 0) {
                    for(let d = 0; d < c.length; d += 1)console.error(c[d]);
                    throw c[0];
                }
            } finally{
                this._debug(u, "end");
            }
        }
        async _saveSession(n) {
            this._debug("#_saveSession()", n), this.suppressGetSessionWarning = !0, await bt(this.storage, `${this.storageKey}-code-verifier`);
            const r = Object.assign({}, n), l = r.user && r.user.__isUserNotAvailableProxy === !0;
            if (this.userStorage) {
                !l && r.user && await Mi(this.userStorage, this.storageKey + "-user", {
                    user: r.user
                });
                const u = Object.assign({}, r);
                delete u.user;
                const c = zm(u);
                await Mi(this.storage, this.storageKey, c);
            } else {
                const u = zm(r);
                await Mi(this.storage, this.storageKey, u);
            }
        }
        async _removeSession() {
            this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await bt(this.storage, this.storageKey), await bt(this.storage, this.storageKey + "-code-verifier"), await bt(this.storage, this.storageKey + "-user"), this.userStorage && await bt(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
        }
        _removeVisibilityChangedCallback() {
            this._debug("#_removeVisibilityChangedCallback()");
            const n = this.visibilityChangedCallback;
            this.visibilityChangedCallback = null;
            try {
                n && wt() && window?.removeEventListener && window.removeEventListener("visibilitychange", n);
            } catch (r) {
                console.error("removing visibilitychange callback failed", r);
            }
        }
        async _startAutoRefresh() {
            await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
            const n = setInterval(()=>this._autoRefreshTokenTick(), zi);
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
                                const u = Math.floor((l.expires_at * 1e3 - n) / zi);
                                this._debug("#_autoRefreshTokenTick()", `access token expires in ${u} ticks, a tick lasts ${zi}ms, refresh threshold is ${zc} ticks`), u <= zc && await this._callRefreshToken(l.refresh_token);
                            });
                        } catch (r) {
                            console.error("Auto refresh tick failed with error. This is likely a transient error.", r);
                        }
                    } finally{
                        this._debug("#_autoRefreshTokenTick()", "end");
                    }
                });
            } catch (n) {
                if (n.isAcquireTimeout || n instanceof Dg) this._debug("auto refresh token tick lock not available");
                else throw n;
            }
        }
        async _handleVisibilityChange() {
            if (this._debug("#_handleVisibilityChange()"), !wt() || !window?.addEventListener) return this.autoRefreshToken && this.startAutoRefresh(), !1;
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
                const [c, f] = await ji(this.storage, this.storageKey), d = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(c)}`,
                    code_challenge_method: `${encodeURIComponent(f)}`
                });
                u.push(d.toString());
            }
            if (l?.queryParams) {
                const c = new URLSearchParams(l.queryParams);
                u.push(c.toString());
            }
            return l?.skipBrowserRedirect && u.push(`skip_http_redirect=${l.skipBrowserRedirect}`), `${n}?${u.join("&")}`;
        }
        async _unenroll(n) {
            try {
                return await this._useSession(async (r)=>{
                    var l;
                    const { data: u, error: c } = r;
                    return c ? this._returnResult({
                        data: null,
                        error: c
                    }) : await se(this.fetch, "DELETE", `${this.url}/factors/${n.factorId}`, {
                        headers: this.headers,
                        jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
                    const { data: c, error: f } = r;
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
                    } : {}), { data: m, error: v } = await se(this.fetch, "POST", `${this.url}/factors`, {
                        body: d,
                        headers: this.headers,
                        jwt: (l = c?.session) === null || l === void 0 ? void 0 : l.access_token
                    });
                    return v ? this._returnResult({
                        data: null,
                        error: v
                    }) : (n.factorType === "totp" && m.type === "totp" && (!((u = m?.totp) === null || u === void 0) && u.qr_code) && (m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`), this._returnResult({
                        data: m,
                        error: null
                    }));
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
                        const { data: u, error: c } = r;
                        if (c) return this._returnResult({
                            data: null,
                            error: c
                        });
                        const f = Object.assign({
                            challenge_id: n.challengeId
                        }, "webauthn" in n ? {
                            webauthn: Object.assign(Object.assign({}, n.webauthn), {
                                credential_response: n.webauthn.type === "create" ? yS(n.webauthn.credential_response) : vS(n.webauthn.credential_response)
                            })
                        } : {
                            code: n.code
                        }), { data: d, error: m } = await se(this.fetch, "POST", `${this.url}/factors/${n.factorId}/verify`, {
                            body: f,
                            headers: this.headers,
                            jwt: (l = u?.session) === null || l === void 0 ? void 0 : l.access_token
                        });
                        return m ? this._returnResult({
                            data: null,
                            error: m
                        }) : (await this._saveSession(Object.assign({
                            expires_at: Math.round(Date.now() / 1e3) + d.expires_in
                        }, d)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d), this._returnResult({
                            data: d,
                            error: m
                        }));
                    });
                } catch (r) {
                    if (ae(r)) return this._returnResult({
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
                        const { data: u, error: c } = r;
                        if (c) return this._returnResult({
                            data: null,
                            error: c
                        });
                        const f = await se(this.fetch, "POST", `${this.url}/factors/${n.factorId}/challenge`, {
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
                                                publicKey: mS(d.webauthn.credential_options.publicKey)
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
                                                publicKey: gS(d.webauthn.credential_options.publicKey)
                                            })
                                        })
                                    }),
                                    error: null
                                };
                        }
                    });
                } catch (r) {
                    if (ae(r)) return this._returnResult({
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
            for (const c of (n = r?.factors) !== null && n !== void 0 ? n : [])u.all.push(c), c.status === "verified" && u[c.factor_type].push(c);
            return {
                data: u,
                error: null
            };
        }
        async _getAuthenticatorAssuranceLevel(n) {
            var r, l, u, c;
            if (n) try {
                const { payload: A } = Bl(n);
                let U = null;
                A.aal && (U = A.aal);
                let B = U;
                const { data: { user: D }, error: I } = await this.getUser(n);
                if (I) return this._returnResult({
                    data: null,
                    error: I
                });
                ((l = (r = D?.factors) === null || r === void 0 ? void 0 : r.filter((F)=>F.status === "verified")) !== null && l !== void 0 ? l : []).length > 0 && (B = "aal2");
                const H = A.amr || [];
                return {
                    data: {
                        currentLevel: U,
                        nextLevel: B,
                        currentAuthenticationMethods: H
                    },
                    error: null
                };
            } catch (A) {
                if (ae(A)) return this._returnResult({
                    data: null,
                    error: A
                });
                throw A;
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
            const { payload: m } = Bl(f.access_token);
            let v = null;
            m.aal && (v = m.aal);
            let S = v;
            ((c = (u = f.user.factors) === null || u === void 0 ? void 0 : u.filter((A)=>A.status === "verified")) !== null && c !== void 0 ? c : []).length > 0 && (S = "aal2");
            const x = m.amr || [];
            return {
                data: {
                    currentLevel: v,
                    nextLevel: S,
                    currentAuthenticationMethods: x
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
                    }) : l ? await se(this.fetch, "GET", `${this.url}/oauth/authorizations/${n}`, {
                        headers: this.headers,
                        jwt: l.access_token,
                        xform: (c)=>({
                                data: c,
                                error: null
                            })
                    }) : this._returnResult({
                        data: null,
                        error: new $t
                    });
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
                    data: null,
                    error: r
                });
                throw r;
            }
        }
        async _approveAuthorization(n, r) {
            try {
                return await this._useSession(async (l)=>{
                    const { data: { session: u }, error: c } = l;
                    if (c) return this._returnResult({
                        data: null,
                        error: c
                    });
                    if (!u) return this._returnResult({
                        data: null,
                        error: new $t
                    });
                    const f = await se(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
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
                    return f.data && f.data.redirect_url && wt() && !r?.skipBrowserRedirect && window.location.assign(f.data.redirect_url), f;
                });
            } catch (l) {
                if (ae(l)) return this._returnResult({
                    data: null,
                    error: l
                });
                throw l;
            }
        }
        async _denyAuthorization(n, r) {
            try {
                return await this._useSession(async (l)=>{
                    const { data: { session: u }, error: c } = l;
                    if (c) return this._returnResult({
                        data: null,
                        error: c
                    });
                    if (!u) return this._returnResult({
                        data: null,
                        error: new $t
                    });
                    const f = await se(this.fetch, "POST", `${this.url}/oauth/authorizations/${n}/consent`, {
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
                    return f.data && f.data.redirect_url && wt() && !r?.skipBrowserRedirect && window.location.assign(f.data.redirect_url), f;
                });
            } catch (l) {
                if (ae(l)) return this._returnResult({
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
                    }) : r ? await se(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
                        headers: this.headers,
                        jwt: r.access_token,
                        xform: (u)=>({
                                data: u,
                                error: null
                            })
                    }) : this._returnResult({
                        data: null,
                        error: new $t
                    });
                });
            } catch (n) {
                if (ae(n)) return this._returnResult({
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
                    }) : l ? (await se(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
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
                        error: new $t
                    });
                });
            } catch (r) {
                if (ae(r)) return this._returnResult({
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
            if (l = this.jwks.keys.find((d)=>d.kid === n), l && this.jwks_cached_at + R_ > u) return l;
            const { data: c, error: f } = await se(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
                headers: this.headers
            });
            if (f) throw f;
            return !c.keys || c.keys.length === 0 || (this.jwks = c, this.jwks_cached_at = u, l = c.keys.find((d)=>d.kid === n), !l) ? null : l;
        }
        async getClaims(n, r = {}) {
            try {
                let l = n;
                if (!l) {
                    const { data: A, error: U } = await this.getSession();
                    if (U || !A.session) return this._returnResult({
                        data: null,
                        error: U
                    });
                    l = A.session.access_token;
                }
                const { header: u, payload: c, signature: f, raw: { header: d, payload: m } } = Bl(l);
                r?.allowExpired || J_(c.exp);
                const v = !u.alg || u.alg.startsWith("HS") || !u.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(u.kid, r?.keys ? {
                    keys: r.keys
                } : r?.jwks);
                if (!v) {
                    const { error: A } = await this.getUser(l);
                    if (A) throw A;
                    return {
                        data: {
                            claims: c,
                            header: u,
                            signature: f
                        },
                        error: null
                    };
                }
                const S = F_(u.alg), b = await crypto.subtle.importKey("jwk", v, S, !0, [
                    "verify"
                ]);
                if (!await crypto.subtle.verify(S, b, f, L_(`${d}.${m}`))) throw new qc("Invalid JWT signature");
                return {
                    data: {
                        claims: c,
                        header: u,
                        signature: f
                    },
                    error: null
                };
            } catch (l) {
                if (ae(l)) return this._returnResult({
                    data: null,
                    error: l
                });
                throw l;
            }
        }
    }
    as.nextInstanceID = {};
    const RS = as, CS = "2.103.0";
    let Yr = "";
    typeof Deno < "u" ? Yr = "deno" : typeof document < "u" ? Yr = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Yr = "react-native" : Yr = "node";
    const OS = {
        "X-Client-Info": `supabase-js-${Yr}/${CS}`
    }, kS = {
        headers: OS
    }, jS = {
        schema: "public"
    }, US = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    }, NS = {};
    function is(i) {
        "@babel/helpers - typeof";
        return is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
            return typeof n;
        } : function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, is(i);
    }
    function DS(i, n) {
        if (is(i) != "object" || !i) return i;
        var r = i[Symbol.toPrimitive];
        if (r !== void 0) {
            var l = r.call(i, n);
            if (is(l) != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(i);
    }
    function BS(i) {
        var n = DS(i, "string");
        return is(n) == "symbol" ? n : n + "";
    }
    function LS(i, n, r) {
        return (n = BS(n)) in i ? Object.defineProperty(i, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[n] = r, i;
    }
    function Vm(i, n) {
        var r = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(i);
            n && (l = l.filter(function(u) {
                return Object.getOwnPropertyDescriptor(i, u).enumerable;
            })), r.push.apply(r, l);
        }
        return r;
    }
    function et(i) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n] != null ? arguments[n] : {};
            n % 2 ? Vm(Object(r), !0).forEach(function(l) {
                LS(i, l, r[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function(l) {
                Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(r, l));
            });
        }
        return i;
    }
    const zS = (i)=>i ? (...n)=>i(...n) : (...n)=>fetch(...n), MS = ()=>Headers, HS = (i, n, r)=>{
        const l = zS(r), u = MS();
        return async (c, f)=>{
            var d;
            const m = (d = await n()) !== null && d !== void 0 ? d : i;
            let v = new u(f?.headers);
            return v.has("apikey") || v.set("apikey", i), v.has("Authorization") || v.set("Authorization", `Bearer ${m}`), l(c, et(et({}, f), {}, {
                headers: v
            }));
        };
    };
    function qS(i) {
        return i.endsWith("/") ? i : i + "/";
    }
    function $S(i, n) {
        var r, l;
        const { db: u, auth: c, realtime: f, global: d } = i, { db: m, auth: v, realtime: S, global: b } = n, x = {
            db: et(et({}, m), u),
            auth: et(et({}, v), c),
            realtime: et(et({}, S), f),
            storage: {},
            global: et(et(et({}, b), d), {}, {
                headers: et(et({}, (r = b?.headers) !== null && r !== void 0 ? r : {}), (l = d?.headers) !== null && l !== void 0 ? l : {})
            }),
            accessToken: async ()=>""
        };
        return i.accessToken ? x.accessToken = i.accessToken : delete x.accessToken, x;
    }
    function IS(i) {
        const n = i?.trim();
        if (!n) throw new Error("supabaseUrl is required.");
        if (!n.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
        try {
            return new URL(qS(n));
        } catch  {
            throw Error("Invalid supabaseUrl: Provided URL is malformed.");
        }
    }
    var PS = class extends RS {
        constructor(i){
            super(i);
        }
    }, GS = class {
        constructor(i, n, r){
            var l, u;
            this.supabaseUrl = i, this.supabaseKey = n;
            const c = IS(i);
            if (!n) throw new Error("supabaseKey is required.");
            this.realtimeUrl = new URL("realtime/v1", c), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", c), this.storageUrl = new URL("storage/v1", c), this.functionsUrl = new URL("functions/v1", c);
            const f = `sb-${c.hostname.split(".")[0]}-auth-token`, d = {
                db: jS,
                realtime: NS,
                auth: et(et({}, US), {}, {
                    storageKey: f
                }),
                global: kS
            }, m = $S(r ?? {}, d);
            if (this.storageKey = (l = m.auth.storageKey) !== null && l !== void 0 ? l : "", this.headers = (u = m.global.headers) !== null && u !== void 0 ? u : {}, m.accessToken) this.accessToken = m.accessToken, this.auth = new Proxy({}, {
                get: (S, b)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(b)} is not possible`);
                }
            });
            else {
                var v;
                this.auth = this._initSupabaseAuthClient((v = m.auth) !== null && v !== void 0 ? v : {}, this.headers, m.global.fetch);
            }
            this.fetch = HS(n, this._getAccessToken.bind(this), m.global.fetch), this.realtime = this._initRealtimeClient(et({
                headers: this.headers,
                accessToken: this._getAccessToken.bind(this)
            }, m.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((S)=>this.realtime.setAuth(S)).catch((S)=>console.warn("Failed to set initial Realtime auth token:", S)), this.rest = new hw(new URL("rest/v1", c).href, {
                headers: this.headers,
                schema: m.db.schema,
                fetch: this.fetch,
                timeout: m.db.timeout,
                urlLengthLimit: m.db.urlLengthLimit
            }), this.storage = new S_(this.storageUrl.href, this.headers, this.fetch, r?.storage), m.accessToken || this._listenForAuthEvents();
        }
        get functions() {
            return new tw(this.functionsUrl.href, {
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
        _initSupabaseAuthClient({ autoRefreshToken: i, persistSession: n, detectSessionInUrl: r, storage: l, userStorage: u, storageKey: c, flowType: f, lock: d, debug: m, throwOnError: v }, S, b) {
            const x = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`
            };
            return new PS({
                url: this.authUrl.href,
                headers: et(et({}, x), S),
                storageKey: c,
                autoRefreshToken: i,
                persistSession: n,
                detectSessionInUrl: r,
                storage: l,
                userStorage: u,
                flowType: f,
                lock: d,
                debug: m,
                throwOnError: v,
                fetch: b,
                hasCustomAuthorizationHeader: Object.keys(this.headers).some((A)=>A.toLowerCase() === "authorization")
            });
        }
        _initRealtimeClient(i) {
            return new Vw(this.realtimeUrl.href, et(et({}, i), {}, {
                params: et(et({}, {
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
    const VS = (i, n, r)=>new GS(i, n, r);
    function KS() {
        if (typeof window < "u") return !1;
        const i = globalThis.process;
        if (!i) return !1;
        const n = i.version;
        if (n == null) return !1;
        const r = n.match(/^v(\d+)\./);
        return r ? parseInt(r[1], 10) <= 18 : !1;
    }
    KS() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
    let Km, Ym;
    Pe = {
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
                path: "/ai-writer",
                labelKey: "site.nav.aiWriter"
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
    Km = "https://hcmgdztsgjvzcyxyayaj.supabase.co";
    Ym = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw";
    DE = {
        documents: `${Pe.dbPrefix}documents`,
        templates: `${Pe.dbPrefix}templates`,
        conversions: `${Pe.dbPrefix}conversions`,
        businessPlans: `${Pe.dbPrefix}business_plans`
    };
    let Ac = null;
    un = ()=>(!Ac && Km && Ym && (Ac = VS(Km, Ym, {
            auth: {
                flowType: "pkce",
                detectSessionInUrl: !0,
                autoRefreshToken: !0,
                persistSession: !0
            }
        })), Ac);
    BE = async function() {
        const i = un();
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
    LE = async function() {
        const i = un();
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
    zE = async function(i, n) {
        const r = un();
        if (!r) throw new Error("Supabase not configured");
        const { data: l, error: u } = await r.auth.signInWithPassword({
            email: i,
            password: n
        });
        if (u) throw u;
        return l;
    };
    ME = async function(i, n, r) {
        const l = un();
        if (!l) throw new Error("Supabase not configured");
        const { data: u, error: c } = await l.auth.signUp({
            email: i,
            password: n,
            options: {
                data: {
                    full_name: r,
                    signup_domain: window.location.hostname
                }
            }
        });
        if (c) throw c;
        return u;
    };
    async function Xm() {
        const i = un();
        if (!i) return;
        const { error: n } = await i.auth.signOut({
            scope: "local"
        });
        if (n) throw n;
    }
    async function YS(i) {
        const n = un();
        if (!n) return null;
        const { data: r, error: l } = await n.from("user_profiles").select("*").eq("id", i).single();
        return l ? (console.error("getProfile error:", l), null) : r;
    }
    HE = async function(i) {
        const n = un();
        if (!n) throw new Error("Supabase not configured");
        const { data: r, error: l } = await n.auth.resetPasswordForEmail(i, {
            redirectTo: window.location.origin + window.location.pathname
        });
        if (l) throw l;
        return r;
    };
    $c = async function(i, n) {
        const r = un();
        if (!r) return null;
        const { data: l, error: u } = await r.from("user_profiles").update({
            ...n,
            updated_at: new Date().toISOString()
        }).eq("id", i).select().single();
        if (u) throw u;
        return l;
    };
    const XS = [
        "aebon@kakao.com",
        "radical8566@gmail.com",
        "aebon@kyonggi.ac.kr"
    ];
    function Jm(i) {
        const n = i.replace(/\D/g, "").slice(0, 11);
        return n.length <= 3 ? n : n.length <= 7 ? `${n.slice(0, 3)}-${n.slice(3)}` : `${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7)}`;
    }
    const JS = ({ user: i, onComplete: n })=>{
        const r = i.user_metadata || {}, [l, u] = k.useState(r.full_name || r.name || ""), [c, f] = k.useState(""), [d, m] = k.useState(!1), [v, S] = k.useState(""), b = async (A)=>{
            A.preventDefault(), S("");
            const U = l.trim();
            if (!U) {
                S("이름을 입력해주세요.");
                return;
            }
            const B = c.replace(/\D/g, "");
            if (B && !/^01[0-9]\d{7,8}$/.test(B)) {
                S("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)");
                return;
            }
            m(!0);
            try {
                const D = {
                    name: U,
                    display_name: U
                };
                B && (D.phone = Jm(B)), await $c(i.id, D), await n();
            } catch (D) {
                S("저장에 실패했습니다. 다시 시도해주세요."), console.error("ProfileCompleteModal save error:", D);
            } finally{
                m(!1);
            }
        }, x = async ()=>{
            const A = l.trim();
            if (A) try {
                await $c(i.id, {
                    name: A,
                    display_name: A
                });
            } catch  {}
            await n();
        };
        return T.jsx("div", {
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
            children: T.jsxs("form", {
                onSubmit: b,
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
                onClick: (A)=>A.stopPropagation(),
                children: [
                    T.jsx("button", {
                        type: "button",
                        onClick: x,
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
                    T.jsx("h2", {
                        style: {
                            margin: "0 0 6px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "프로필 정보 입력"
                    }),
                    T.jsxs("p", {
                        style: {
                            margin: "0 0 24px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.5
                        },
                        children: [
                            "원활한 수업 운영을 위해 아래 정보를 입력해주세요.",
                            T.jsx("br", {}),
                            T.jsx("span", {
                                style: {
                                    color: "#9CA3AF",
                                    fontSize: "12px"
                                },
                                children: "전화번호는 선택 사항입니다."
                            })
                        ]
                    }),
                    T.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "16px"
                        },
                        children: [
                            T.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "이름 ",
                                    T.jsx("span", {
                                        style: {
                                            color: "#dc2626"
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            T.jsx("input", {
                                type: "text",
                                value: l,
                                onChange: (A)=>u(A.target.value),
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
                                onFocus: (A)=>A.target.style.borderColor = "#2563eb",
                                onBlur: (A)=>A.target.style.borderColor = "#d1d5db"
                            })
                        ]
                    }),
                    T.jsxs("label", {
                        style: {
                            display: "block",
                            marginBottom: "20px"
                        },
                        children: [
                            T.jsxs("span", {
                                style: {
                                    display: "block",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "#333",
                                    marginBottom: "6px"
                                },
                                children: [
                                    "전화번호 ",
                                    T.jsx("span", {
                                        style: {
                                            color: "#9CA3AF",
                                            fontWeight: 400
                                        },
                                        children: "(선택)"
                                    })
                                ]
                            }),
                            T.jsx("input", {
                                type: "tel",
                                value: c,
                                onChange: (A)=>f(Jm(A.target.value)),
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
                                onFocus: (A)=>A.target.style.borderColor = "#2563eb",
                                onBlur: (A)=>A.target.style.borderColor = "#d1d5db"
                            })
                        ]
                    }),
                    v && T.jsx("p", {
                        style: {
                            margin: "0 0 14px",
                            fontSize: "13px",
                            color: "#dc2626",
                            fontWeight: 500
                        },
                        children: v
                    }),
                    T.jsx("button", {
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
                    T.jsx("button", {
                        type: "button",
                        onClick: x,
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
    async function FS() {
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
    const WS = [
        "aebon@kakao.com",
        "aebon@kyonggi.ac.kr",
        "radical8566@gmail.com"
    ], QS = 10080 * 60 * 1e3;
    function ZS({ user: i, siteSlug: n, shopUrl: r = "https://biz-hub.dreamitbiz.com/shop" }) {
        const [l, u] = k.useState(!1);
        k.useEffect(()=>{
            const f = `nudge_dismissed_${n}`;
            if (sessionStorage.getItem(f)) return;
            const d = (i.email || "").toLowerCase();
            if (WS.includes(d)) return;
            const m = i.created_at ? new Date(i.created_at).getTime() : Date.now();
            if (Date.now() - m < QS) return;
            (async ()=>{
                try {
                    const S = await FS();
                    if (!S) return;
                    const { data: b, error: x } = await S.from("user_licenses").select("id, license_type, site_slug, expires_at").eq("user_id", i.id);
                    if (x) return;
                    if (b && b.length > 0) {
                        const A = new Date;
                        if (b.some((B)=>B.expires_at && new Date(B.expires_at) < A ? !1 : B.license_type === "bundle" || B.site_slug === n)) return;
                    }
                    u(!0);
                } catch  {}
            })();
        }, [
            i,
            n
        ]);
        const c = ()=>{
            sessionStorage.setItem(`nudge_dismissed_${n}`, "1"), u(!1);
        };
        return l ? T.jsx("div", {
            onClick: c,
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
            children: T.jsxs("div", {
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
                    T.jsx("button", {
                        onClick: c,
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
                    T.jsx("div", {
                        style: {
                            fontSize: "48px",
                            marginBottom: "12px"
                        },
                        children: "📚"
                    }),
                    T.jsx("h2", {
                        style: {
                            margin: "0 0 8px",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "더 나은 학습 경험을 위해"
                    }),
                    T.jsxs("p", {
                        style: {
                            margin: "0 0 20px",
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: 1.6
                        },
                        children: [
                            "이용권을 구매하시면 모든 콘텐츠를",
                            T.jsx("br", {}),
                            "제한 없이 평생 이용하실 수 있습니다."
                        ]
                    }),
                    T.jsxs("div", {
                        style: {
                            background: "#F0F7FF",
                            borderRadius: "12px",
                            padding: "16px",
                            marginBottom: "20px",
                            textAlign: "left"
                        },
                        children: [
                            T.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "8px"
                                },
                                children: [
                                    T.jsx("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: "개별 사이트 이용권"
                                    }),
                                    T.jsx("span", {
                                        style: {
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            color: "#2563EB"
                                        },
                                        children: "30,000원"
                                    })
                                ]
                            }),
                            T.jsxs("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [
                                    T.jsxs("span", {
                                        style: {
                                            fontSize: "14px",
                                            color: "#333"
                                        },
                                        children: [
                                            "전체 사이트 이용권",
                                            T.jsx("span", {
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
                                    T.jsx("span", {
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
                    T.jsx("a", {
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
                    T.jsx("button", {
                        onClick: c,
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
                    T.jsx("p", {
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
    let zg, eE, Hg;
    zg = k.createContext(null);
    eE = ({ children: i })=>{
        const [n, r] = k.useState(null), [l, u] = k.useState(null), [c, f] = k.useState(!0), [d, m] = k.useState(null), v = k.useCallback(async (D)=>{
            if (!D) {
                u(null);
                return;
            }
            let I = await YS(D.id);
            if (!I) {
                const K = un();
                if (K) {
                    const H = D.user_metadata || {}, F = window.location.hostname, { data: Z } = await K.from("user_profiles").insert({
                        id: D.id,
                        email: D.email || "",
                        name: H.full_name || H.name || "",
                        display_name: H.full_name || H.name || "",
                        phone: "",
                        provider: D.app_metadata?.provider || "email",
                        signup_domain: F,
                        visited_sites: [
                            F
                        ],
                        role: "member"
                    }).select().single();
                    Z && (I = Z);
                }
            }
            if (I) {
                const K = {}, H = window.location.hostname;
                I.signup_domain || (K.signup_domain = H), (!I.role || I.role === "user") && (K.role = "member");
                const F = Array.isArray(I.visited_sites) ? I.visited_sites : [];
                if (F.includes(H) || (K.visited_sites = [
                    ...F,
                    H
                ]), Object.keys(K).length > 0) try {
                    const Z = await $c(D.id, K);
                    u(Z);
                } catch  {
                    u(I);
                }
                else u(I);
            }
            try {
                const K = un();
                if (K) {
                    const { data: H } = await K.rpc("check_user_status", {
                        target_user_id: D.id,
                        current_domain: window.location.hostname
                    });
                    if (H && H.status && H.status !== "active") {
                        m({
                            status: H.status,
                            reason: H.reason || "",
                            suspended_until: H.suspended_until || null
                        }), await Xm(), r(null), u(null);
                        return;
                    }
                }
            } catch  {}
        }, []);
        k.useEffect(()=>{
            const D = un();
            if (!D) {
                f(!1);
                return;
            }
            const { data: { subscription: I } } = D.auth.onAuthStateChange((H, F)=>{
                const Z = F?.user ?? null;
                r(Z), Z ? (v(Z), H === "SIGNED_IN" && D.from("user_profiles").update({
                    last_sign_in_at: new Date().toISOString()
                }).eq("id", Z.id).then(()=>{})) : u(null), H === "INITIAL_SESSION" && f(!1);
            }), K = setTimeout(()=>{
                f((H)=>(H && console.warn("Auth: INITIAL_SESSION timeout, forcing loading=false"), !1));
            }, 5e3);
            return ()=>{
                clearTimeout(K), I.unsubscribe();
            };
        }, [
            v
        ]);
        const S = k.useCallback(async ()=>{
            await Xm(), r(null), u(null);
        }, []), b = k.useCallback(async ()=>{
            n && await v(n);
        }, [
            n,
            v
        ]), A = [
            n?.email,
            n?.user_metadata?.email,
            n?.identities?.[0]?.identity_data?.email,
            l?.email
        ].filter((D)=>!!D).map((D)=>D.toLowerCase()).some((D)=>XS.includes(D)), U = !!n, B = U && !!l && !l.name;
        return T.jsxs(zg.Provider, {
            value: {
                user: n,
                profile: l,
                loading: c,
                isLoggedIn: U,
                isAdmin: A,
                signOut: S,
                refreshProfile: b,
                accountBlock: d,
                clearAccountBlock: ()=>m(null)
            },
            children: [
                i,
                B && n && T.jsx(JS, {
                    user: n,
                    onComplete: b
                }),
                U && n && !B && T.jsx(ZS, {
                    user: n,
                    siteSlug: "hwp"
                })
            ]
        });
    };
    Mg = ()=>{
        const i = k.useContext(zg);
        if (!i) throw new Error("useAuth must be used within AuthProvider");
        return i;
    };
    Hg = k.createContext(null);
    let tE = 0;
    function nE({ children: i }) {
        const [n, r] = k.useState([]), l = k.useRef({}), u = k.useCallback((f)=>{
            clearTimeout(l.current[f]), delete l.current[f], r((d)=>d.filter((m)=>m.id !== f));
        }, []), c = k.useCallback((f, d = "info", m = 4e3)=>{
            const v = ++tE;
            return r((S)=>[
                    ...S,
                    {
                        id: v,
                        message: f,
                        type: d
                    }
                ]), l.current[v] = setTimeout(()=>u(v), m), v;
        }, [
            u
        ]);
        return T.jsxs(Hg.Provider, {
            value: {
                showToast: c,
                removeToast: u
            },
            children: [
                i,
                T.jsx("div", {
                    className: "toast-container",
                    role: "status",
                    "aria-live": "polite",
                    children: n.map((f)=>T.jsxs("div", {
                            className: `toast-item toast-${f.type}`,
                            children: [
                                T.jsxs("span", {
                                    className: "toast-icon",
                                    children: [
                                        f.type === "success" && T.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                T.jsx("path", {
                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                }),
                                                T.jsx("polyline", {
                                                    points: "22 4 12 14.01 9 11.01"
                                                })
                                            ]
                                        }),
                                        f.type === "error" && T.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                T.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                T.jsx("line", {
                                                    x1: "15",
                                                    y1: "9",
                                                    x2: "9",
                                                    y2: "15"
                                                }),
                                                T.jsx("line", {
                                                    x1: "9",
                                                    y1: "9",
                                                    x2: "15",
                                                    y2: "15"
                                                })
                                            ]
                                        }),
                                        f.type === "info" && T.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                T.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }),
                                                T.jsx("line", {
                                                    x1: "12",
                                                    y1: "16",
                                                    x2: "12",
                                                    y2: "12"
                                                }),
                                                T.jsx("line", {
                                                    x1: "12",
                                                    y1: "8",
                                                    x2: "12.01",
                                                    y2: "8"
                                                })
                                            ]
                                        }),
                                        f.type === "warning" && T.jsxs("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            width: "18",
                                            height: "18",
                                            children: [
                                                T.jsx("path", {
                                                    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                                }),
                                                T.jsx("line", {
                                                    x1: "12",
                                                    y1: "9",
                                                    x2: "12",
                                                    y2: "13"
                                                }),
                                                T.jsx("line", {
                                                    x1: "12",
                                                    y1: "17",
                                                    x2: "12.01",
                                                    y2: "17"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                T.jsx("span", {
                                    className: "toast-message",
                                    children: f.message
                                }),
                                T.jsx("button", {
                                    className: "toast-close",
                                    onClick: ()=>u(f.id),
                                    children: T.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        width: "14",
                                        height: "14",
                                        children: [
                                            T.jsx("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }),
                                            T.jsx("line", {
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
    qE = function() {
        const i = k.useContext(Hg);
        return i || {
            showToast: (n)=>(console.warn("ToastProvider not found:", n), 0),
            removeToast: ()=>{}
        };
    };
    let aE, iE, Fm, Di, rE, sE, lE, oE, uE, cE, hE, fE, dE, pE, mE, gE, yE, vE, bE, wE, _E, SE, EE, TE, AE, xE, RE, CE;
    aE = "modulepreload";
    iE = function(i) {
        return "/" + i;
    };
    Fm = {};
    ut = function(n, r, l) {
        let u = Promise.resolve();
        if (r && r.length > 0) {
            let m = function(v) {
                return Promise.all(v.map((S)=>Promise.resolve(S).then((b)=>({
                            status: "fulfilled",
                            value: b
                        }), (b)=>({
                            status: "rejected",
                            reason: b
                        }))));
            };
            document.getElementsByTagName("link");
            const f = document.querySelector("meta[property=csp-nonce]"), d = f?.nonce || f?.getAttribute("nonce");
            u = m(r.map((v)=>{
                if (v = iE(v), v in Fm) return;
                Fm[v] = !0;
                const S = v.endsWith(".css"), b = S ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${v}"]${b}`)) return;
                const x = document.createElement("link");
                if (x.rel = S ? "stylesheet" : aE, S || (x.as = "script"), x.crossOrigin = "", x.href = v, d && x.setAttribute("nonce", d), document.head.appendChild(x), S) return new Promise((A, U)=>{
                    x.addEventListener("load", A), x.addEventListener("error", ()=>U(new Error(`Unable to preload CSS for ${v}`)));
                });
            }));
        }
        function c(f) {
            const d = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (d.payload = f, window.dispatchEvent(d), !d.defaultPrevented) throw f;
        }
        return u.then((f)=>{
            for (const d of f || [])d.status === "rejected" && c(d.reason);
            return n().catch(c);
        });
    };
    Di = ({ children: i })=>{
        const { isLoggedIn: n, loading: r } = Mg(), l = Gt();
        return r ? T.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: T.jsx("div", {
                className: "loading-spinner"
            })
        }) : n ? T.jsx(T.Fragment, {
            children: i
        }) : T.jsx(cb, {
            to: "/login",
            state: {
                from: l
            },
            replace: !0
        });
    };
    rE = ()=>{
        const [i, n] = k.useState(!1), [r, l] = k.useState(!1), [u, c] = k.useState(null), [f, d] = k.useState(!1), [m, v] = k.useState(!1), [S, b] = k.useState(!1), x = k.useRef(null), A = Gt(), { mode: U, toggleTheme: B, colorTheme: D, setColorTheme: I } = Jb(), { language: K, toggleLanguage: H, t: F } = yg(), { isLoggedIn: Z, isAdmin: le, profile: ee, signOut: qe } = Mg();
        k.useEffect(()=>{
            const fe = ()=>n(window.scrollY > 50);
            return window.addEventListener("scroll", fe), ()=>window.removeEventListener("scroll", fe);
        }, []), k.useEffect(()=>{
            l(!1), c(null), v(!1);
        }, [
            A
        ]), k.useEffect(()=>{
            const fe = (Ae)=>{
                x.current && !x.current.contains(Ae.target) && v(!1);
            };
            return document.addEventListener("mousedown", fe), ()=>document.removeEventListener("mousedown", fe);
        }, []);
        const ke = async ()=>{
            await qe(), v(!1);
        }, Tt = Pe.menuItems.map((fe)=>({
                ...fe,
                label: F(fe.labelKey),
                dropdown: fe.dropdown ? fe.dropdown.map((Ae)=>({
                        ...Ae,
                        label: F(Ae.labelKey)
                    })) : void 0
            })), dt = (fe)=>{
            if (fe.dropdown) return fe.dropdown.some((je)=>A.pathname.startsWith(je.path));
            const Ae = fe.activePath || fe.path;
            return Ae === "/" ? A.pathname === "/" : A.pathname.startsWith(Ae);
        }, tt = (ee?.display_name || ee?.email || "?")[0].toUpperCase();
        return T.jsxs("nav", {
            className: `navbar ${i ? "scrolled" : ""}`,
            children: [
                T.jsx("div", {
                    className: "container",
                    children: T.jsxs("div", {
                        className: "nav-wrapper",
                        children: [
                            T.jsx("div", {
                                className: "logo",
                                children: T.jsx($n, {
                                    to: "/",
                                    children: T.jsx("h1", {
                                        children: Pe.brand.parts.map((fe, Ae)=>T.jsx("span", {
                                                className: fe.className,
                                                children: fe.text
                                            }, Ae))
                                    })
                                })
                            }),
                            T.jsx("ul", {
                                className: `nav-menu ${r ? "active" : ""}`,
                                children: Tt.map((fe, Ae)=>T.jsx("li", {
                                        className: `${fe.dropdown ? "nav-item-dropdown" : ""} ${u === Ae ? "active" : ""}`,
                                        onMouseEnter: ()=>fe.dropdown && c(Ae),
                                        onMouseLeave: ()=>fe.dropdown && c(null),
                                        children: fe.dropdown ? T.jsxs(T.Fragment, {
                                            children: [
                                                T.jsxs($n, {
                                                    to: fe.path,
                                                    className: `nav-link has-dropdown ${dt(fe) ? "active" : ""}`,
                                                    onClick: (je)=>{
                                                        window.innerWidth <= 1100 && (je.preventDefault(), c(u === Ae ? null : Ae));
                                                    },
                                                    children: [
                                                        fe.label,
                                                        T.jsx("svg", {
                                                            className: "nav-dropdown-arrow",
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: T.jsx("path", {
                                                                d: "M3 5l3 3 3-3"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                T.jsx("ul", {
                                                    className: `dropdown-menu ${u === Ae ? "active" : ""}`,
                                                    children: fe.dropdown.map((je, P)=>T.jsx("li", {
                                                            children: T.jsx($n, {
                                                                to: je.path,
                                                                children: je.label
                                                            })
                                                        }, P))
                                                })
                                            ]
                                        }) : T.jsx($n, {
                                            to: fe.path,
                                            className: `nav-link ${dt(fe) ? "active" : ""}`,
                                            children: fe.label
                                        })
                                    }, Ae))
                            }),
                            T.jsxs("div", {
                                className: "nav-actions",
                                children: [
                                    Pe.features.search,
                                    T.jsx("button", {
                                        className: "lang-switcher",
                                        onClick: H,
                                        "aria-label": K === "ko" ? "Switch to English" : "한국어로 전환",
                                        children: K === "ko" ? "EN" : "KR"
                                    }),
                                    T.jsxs("div", {
                                        className: "color-picker-wrapper",
                                        children: [
                                            T.jsx("button", {
                                                className: "color-picker-btn",
                                                onClick: ()=>d(!f),
                                                "aria-label": "Color theme",
                                                children: T.jsxs("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: [
                                                        T.jsx("circle", {
                                                            cx: "13.5",
                                                            cy: "6.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C8102E",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        T.jsx("circle", {
                                                            cx: "17.5",
                                                            cy: "10.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#C87200",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        T.jsx("circle", {
                                                            cx: "8.5",
                                                            cy: "7.5",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#00855A",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        T.jsx("circle", {
                                                            cx: "6.5",
                                                            cy: "12",
                                                            r: "2.5",
                                                            style: {
                                                                fill: "#0046C8",
                                                                stroke: "none"
                                                            }
                                                        }),
                                                        T.jsx("path", {
                                                            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.24-.3-.39-.65-.39-1.04 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.5-9-10-9z"
                                                        })
                                                    ]
                                                })
                                            }),
                                            f && T.jsxs(T.Fragment, {
                                                children: [
                                                    T.jsx("div", {
                                                        className: "color-picker-overlay",
                                                        onClick: ()=>d(!1)
                                                    }),
                                                    T.jsxs("div", {
                                                        className: "color-picker-tooltip",
                                                        children: [
                                                            T.jsx("div", {
                                                                className: "color-picker-arrow"
                                                            }),
                                                            Pe.colors.map((fe)=>T.jsx("button", {
                                                                    className: `color-dot${D === fe.name ? " active" : ""}`,
                                                                    style: {
                                                                        background: fe.color
                                                                    },
                                                                    onClick: ()=>{
                                                                        I(fe.name), d(!1);
                                                                    },
                                                                    "aria-label": `${fe.name} theme`
                                                                }, fe.name))
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    T.jsxs("button", {
                                        className: "theme-toggle",
                                        onClick: B,
                                        "aria-label": "테마 전환",
                                        "data-mode": U,
                                        children: [
                                            T.jsxs("svg", {
                                                className: "sun-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    T.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "5"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "18.36",
                                                        x2: "19.78",
                                                        y2: "19.78"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "21",
                                                        y1: "12",
                                                        x2: "23",
                                                        y2: "12"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "18.36",
                                                        y1: "5.64",
                                                        x2: "19.78",
                                                        y2: "4.22"
                                                    })
                                                ]
                                            }),
                                            T.jsx("svg", {
                                                className: "moon-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: T.jsx("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                })
                                            }),
                                            T.jsxs("svg", {
                                                className: "auto-icon",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    T.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "9"
                                                    }),
                                                    T.jsx("path", {
                                                        d: "M12 3a9 9 0 0 1 0 18",
                                                        fill: "currentColor",
                                                        opacity: "0.3"
                                                    }),
                                                    T.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "12",
                                                        y1: "1",
                                                        x2: "12",
                                                        y2: "3"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "12",
                                                        y1: "21",
                                                        x2: "12",
                                                        y2: "23"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "4.22",
                                                        x2: "5.64",
                                                        y2: "5.64"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "1",
                                                        y1: "12",
                                                        x2: "3",
                                                        y2: "12"
                                                    }),
                                                    T.jsx("line", {
                                                        x1: "4.22",
                                                        y1: "19.78",
                                                        x2: "5.64",
                                                        y2: "18.36"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    Z ? T.jsxs("div", {
                                        className: "nav-user-menu",
                                        ref: x,
                                        children: [
                                            T.jsx("button", {
                                                className: "nav-user-btn",
                                                onClick: ()=>v(!m),
                                                children: T.jsx("span", {
                                                    className: "nav-user-avatar-placeholder",
                                                    children: tt
                                                })
                                            }),
                                            m && T.jsxs("div", {
                                                className: "nav-user-dropdown",
                                                children: [
                                                    T.jsxs("div", {
                                                        className: "dropdown-user-header",
                                                        children: [
                                                            T.jsx("span", {
                                                                className: "dropdown-user-avatar",
                                                                children: tt
                                                            }),
                                                            T.jsxs("div", {
                                                                className: "dropdown-user-info",
                                                                children: [
                                                                    T.jsx("span", {
                                                                        className: "dropdown-user-name",
                                                                        children: ee?.display_name || ""
                                                                    }),
                                                                    T.jsx("span", {
                                                                        className: "dropdown-user-email",
                                                                        children: ee?.email || ""
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    T.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    T.jsxs($n, {
                                                        to: "/mypage",
                                                        className: "dropdown-menu-item",
                                                        children: [
                                                            T.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    T.jsx("path", {
                                                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                                    }),
                                                                    T.jsx("circle", {
                                                                        cx: "12",
                                                                        cy: "7",
                                                                        r: "4"
                                                                    })
                                                                ]
                                                            }),
                                                            F("auth.myPage")
                                                        ]
                                                    }),
                                                    le && T.jsxs("a", {
                                                        href: Pe.parentSite.url + "/admin",
                                                        className: "dropdown-menu-item",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: [
                                                            T.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    T.jsx("rect", {
                                                                        x: "3",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    T.jsx("rect", {
                                                                        x: "14",
                                                                        y: "3",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    T.jsx("rect", {
                                                                        x: "3",
                                                                        y: "14",
                                                                        width: "7",
                                                                        height: "7",
                                                                        rx: "1"
                                                                    }),
                                                                    T.jsx("rect", {
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
                                                    T.jsx("div", {
                                                        className: "divider"
                                                    }),
                                                    T.jsxs("button", {
                                                        onClick: ke,
                                                        className: "dropdown-menu-item logout",
                                                        children: [
                                                            T.jsxs("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: [
                                                                    T.jsx("path", {
                                                                        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                                                    }),
                                                                    T.jsx("polyline", {
                                                                        points: "16 17 21 12 16 7"
                                                                    }),
                                                                    T.jsx("line", {
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
                                    }) : T.jsx($n, {
                                        to: "/login",
                                        className: "nav-login-btn",
                                        children: "Login"
                                    }),
                                    T.jsxs("button", {
                                        className: `mobile-toggle ${r ? "active" : ""}`,
                                        onClick: ()=>l(!r),
                                        "aria-label": "메뉴 토글",
                                        children: [
                                            T.jsx("span", {}),
                                            T.jsx("span", {}),
                                            T.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                Pe.features.search
            ]
        });
    };
    sE = ()=>{
        const { t: i } = yg();
        return T.jsx("footer", {
            className: "footer",
            children: T.jsxs("div", {
                className: "container",
                children: [
                    T.jsxs("div", {
                        className: "footer-content",
                        children: [
                            T.jsxs("div", {
                                className: "footer-brand",
                                children: [
                                    T.jsx("h3", {
                                        children: Pe.brand.parts.map((n, r)=>T.jsx("span", {
                                                className: n.className,
                                                children: n.text
                                            }, r))
                                    }),
                                    T.jsx("p", {
                                        children: i("footer.tagline")
                                    }),
                                    T.jsxs("div", {
                                        className: "company-info",
                                        children: [
                                            T.jsx("p", {
                                                children: T.jsx("strong", {
                                                    children: Pe.company.name
                                                })
                                            }),
                                            T.jsxs("p", {
                                                children: [
                                                    "대표이사: ",
                                                    Pe.company.ceo
                                                ]
                                            }),
                                            T.jsxs("p", {
                                                children: [
                                                    "사업자등록번호: ",
                                                    Pe.company.bizNumber
                                                ]
                                            }),
                                            T.jsxs("p", {
                                                children: [
                                                    "통신판매신고번호: ",
                                                    Pe.company.salesNumber
                                                ]
                                            }),
                                            Pe.company.publisherNumber && T.jsxs("p", {
                                                children: [
                                                    "출판사 신고번호: ",
                                                    Pe.company.publisherNumber
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            T.jsxs("div", {
                                className: "footer-links",
                                children: [
                                    T.jsx("h4", {
                                        children: i("footer.quickLinks")
                                    }),
                                    T.jsx("ul", {
                                        children: Pe.footerLinks.map((n, r)=>T.jsx("li", {
                                                children: T.jsx($n, {
                                                    to: n.path,
                                                    children: i(n.labelKey)
                                                })
                                            }, r))
                                    })
                                ]
                            }),
                            T.jsxs("div", {
                                className: "footer-contact",
                                children: [
                                    T.jsx("h4", {
                                        children: i("footer.contact")
                                    }),
                                    T.jsx("p", {
                                        children: Pe.company.address
                                    }),
                                    T.jsx("p", {
                                        children: Pe.company.email
                                    }),
                                    T.jsx("p", {
                                        children: Pe.company.phone
                                    }),
                                    T.jsxs("p", {
                                        children: [
                                            "카카오톡: ",
                                            Pe.company.kakao
                                        ]
                                    }),
                                    T.jsx("p", {
                                        className: "business-hours",
                                        children: Pe.company.businessHours
                                    }),
                                    T.jsx("div", {
                                        className: "footer-family",
                                        children: T.jsxs("select", {
                                            defaultValue: "",
                                            onChange: (n)=>{
                                                n.target.value && window.open(n.target.value, "_blank"), n.target.value = "";
                                            },
                                            children: [
                                                T.jsx("option", {
                                                    value: "",
                                                    disabled: !0,
                                                    children: "Family Site"
                                                }),
                                                T.jsxs("option", {
                                                    value: Pe.parentSite.url,
                                                    children: [
                                                        Pe.parentSite.name,
                                                        " (본사이트)"
                                                    ]
                                                }),
                                                Pe.familySites.map((n, r)=>T.jsx("option", {
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
                    T.jsx("div", {
                        className: "footer-bottom",
                        children: T.jsxs("p", {
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
    lE = k.lazy(()=>ut(()=>import("./Home-BH5FMpIj.js"), __vite__mapDeps([0,1])));
    oE = k.lazy(()=>ut(()=>import("./Convert-DB2GU_0n.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([2,1,3,4])));
    uE = k.lazy(()=>ut(()=>import("./Editor-HwZRSveP.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([5,1,3,6])));
    cE = k.lazy(()=>ut(()=>import("./Templates-ldxFnP_Y.js"), __vite__mapDeps([7,1,8])));
    hE = k.lazy(()=>ut(()=>import("./TemplateCreate-sbACS5Ci.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([9,1,3,8])));
    fE = k.lazy(()=>ut(()=>import("./TemplateDetail-DjLxR9ow.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([10,1,3,8])));
    dE = k.lazy(()=>ut(()=>import("./Documents-Co0jlz2X.js"), __vite__mapDeps([11,1,12])));
    pE = k.lazy(()=>ut(()=>import("./DocumentDetail-C7ziZkOT.js"), __vite__mapDeps([13,1,3,6])));
    mE = k.lazy(()=>ut(()=>import("./BusinessPlan-KrE-oupc.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([14,1,15])));
    gE = k.lazy(()=>ut(()=>import("./HwpEditor-CD-0rt04.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([16,17,1,18])));
    yE = k.lazy(()=>ut(()=>import("./Viewer-BeNGOK4u.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([19,1,17,20])));
    vE = k.lazy(()=>ut(()=>import("./Generator-DQ0rX9LD.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([21,1,22])));
    bE = k.lazy(()=>ut(()=>import("./AiWriter-ZJ5Z3prX.js"), __vite__mapDeps([23,1,24])));
    wE = k.lazy(()=>ut(()=>import("./Humanize-I7Xuva2p.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([25,1,3,26])));
    _E = k.lazy(()=>ut(()=>import("./Guide-okKLu32C.js"), __vite__mapDeps([27,1])));
    SE = k.lazy(()=>ut(()=>import("./NotFound-CiA67wED.js"), __vite__mapDeps([28,1])));
    EE = k.lazy(()=>ut(()=>import("./Login-PjFpRQuo.js"), __vite__mapDeps([29,1,30])));
    TE = k.lazy(()=>ut(()=>import("./Register-B4cyqRFK.js"), __vite__mapDeps([31,1,30])));
    AE = k.lazy(()=>ut(()=>import("./ForgotPassword-DwqXalcg.js"), __vite__mapDeps([32,1,30])));
    xE = k.lazy(()=>ut(()=>import("./MyPage-BIVSbKOc.js"), __vite__mapDeps([33,1,30])));
    RE = ()=>T.jsx("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh"
            },
            children: T.jsx("div", {
                className: "loading-spinner"
            })
        });
    CE = ()=>T.jsxs(T.Fragment, {
            children: [
                T.jsx(rE, {}),
                T.jsx("main", {
                    children: T.jsx(k.Suspense, {
                        fallback: T.jsx(RE, {}),
                        children: T.jsxs(hg, {
                            children: [
                                T.jsx(Ze, {
                                    path: "/",
                                    element: T.jsx(lE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/convert",
                                    element: T.jsx(oE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/md-editor",
                                    element: T.jsx(uE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/hwp-editor",
                                    element: T.jsx(gE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/templates",
                                    element: T.jsx(Di, {
                                        children: T.jsx(cE, {})
                                    })
                                }),
                                T.jsx(Ze, {
                                    path: "/templates/new",
                                    element: T.jsx(Di, {
                                        children: T.jsx(hE, {})
                                    })
                                }),
                                T.jsx(Ze, {
                                    path: "/templates/:id",
                                    element: T.jsx(Di, {
                                        children: T.jsx(fE, {})
                                    })
                                }),
                                T.jsx(Ze, {
                                    path: "/business-plan",
                                    element: T.jsx(mE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/viewer",
                                    element: T.jsx(yE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/generator",
                                    element: T.jsx(vE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/ai-writer",
                                    element: T.jsx(bE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/humanize",
                                    element: T.jsx(wE, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/guide",
                                    element: T.jsx(_E, {})
                                }),
                                T.jsx(Ze, {
                                    path: "/documents",
                                    element: T.jsx(Di, {
                                        children: T.jsx(dE, {})
                                    })
                                }),
                                T.jsx(Ze, {
                                    path: "/documents/:id",
                                    element: T.jsx(Di, {
                                        children: T.jsx(pE, {})
                                    })
                                }),
                                T.jsxs(T.Fragment, {
                                    children: [
                                        T.jsx(Ze, {
                                            path: "/login",
                                            element: T.jsx(EE, {})
                                        }),
                                        T.jsx(Ze, {
                                            path: "/register",
                                            element: T.jsx(TE, {})
                                        }),
                                        T.jsx(Ze, {
                                            path: "/forgot-password",
                                            element: T.jsx(AE, {})
                                        }),
                                        T.jsx(Ze, {
                                            path: "/mypage",
                                            element: T.jsx(Di, {
                                                children: T.jsx(xE, {})
                                            })
                                        })
                                    ]
                                }),
                                T.jsx(Ze, {
                                    path: "*",
                                    element: T.jsx(SE, {})
                                })
                            ]
                        })
                    })
                }),
                T.jsx(sE, {})
            ]
        });
    function OE() {
        return T.jsx(Xb, {
            children: T.jsx(Wb, {
                children: T.jsx(eE, {
                    children: T.jsx(nE, {
                        children: T.jsx(Lb, {
                            children: T.jsx("div", {
                                className: "App",
                                children: T.jsx(hg, {
                                    children: T.jsx(Ze, {
                                        path: "*",
                                        element: T.jsx(CE, {})
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    }
    typeof globalThis.Buffer > "u" && (globalThis.Buffer = sv.Buffer);
    pv.createRoot(document.getElementById("root")).render(T.jsx(k.StrictMode, {
        children: T.jsx(OE, {})
    }));
})();
export { $n as L, jE as R, DE as T, ut as _, Gt as a, Mg as b, qE as c, Vc as d, NE as e, UE as f, un as g, LE as h, zE as i, T as j, ME as k, HE as l, $c as m, Pe as n, ev as o, k as r, BE as s, yg as u, __tla };
