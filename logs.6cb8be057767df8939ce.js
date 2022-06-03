(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [507], {
        84148: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => ce });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(34699),
                o = r(96156),
                i = r(85893),
                s = r(86010),
                c = r(45697),
                a = r.n(c),
                l = r(67294),
                u = r(69834),
                d = (r(41539), r(88674), r(39714), r(23123), r(97943));

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var g, p, h, y = "/logs",
                b = new TextDecoder("utf-8"),
                j = !1,
                O = !1,
                m = "";

            function w(e, t) {
                var r;
                try { r = JSON.parse(e) } catch (t) { console.log("JSON.parse error", JSON.parse(e)) }
                var n = new Date,
                    o = n.toLocaleString("zh-Hans");
                r.time = o, r.id = +n - 0 + Math.floor(65536 * (1 + Math.random())).toString(16), r.even = j = !j, t(r)
            }

            function x(e, t) { return e.read().then((function(r) { for (var n = r.done, o = r.value, i = b.decode(o, { stream: !n }), s = (m += i).split("\n"), c = s[s.length - 1], a = 0; a < s.length - 1; a++) w(s[a], t); return n ? (w(c, t), m = "", console.log("GET /logs streaming done"), void(O = !1)) : (m = c, x(e, t)) })) }

            function P(e, t) {
                if (!O && 1 !== h) {
                    h = 1;
                    var r = (0, d.P)(e, y),
                        n = new WebSocket(r);
                    n.addEventListener("error", (function() { return h = 3 })), n.addEventListener("close", (function(r) {
                        h = 3,
                            function(e, t) {
                                if (!p || g.baseURL === e.baseURL && g.secret === e.secret && g.logLevel === e.logLevel) { if (O) return } else p.abort();
                                O = !0, g = v({}, e);
                                var r = (p = new AbortController).signal,
                                    n = (0, d.g)(e),
                                    o = n.url,
                                    i = n.init;
                                fetch(o + y + "?level=" + e.logLevel, v(v({}, i), {}, { signal: r })).then((function(e) { x(e.body.getReader(), t) }), (function(e) { O = !1, r.aborted || console.log("GET /logs error:", e.message) }))
                            }(e, t)
                    })), n.addEventListener("message", (function(e) { w(e.data, t) }))
                }
            }
            var S = r(23532),
                L = r(97798),
                N = r(79912),
                k = r(38429),
                E = r(68912);
            const C = "_3rlaagQhmO",
                D = "_1Y8l2FW3db",
                T = "_3RhnPkHfE2",
                Z = "o1S9cV4T0R",
                _ = "_3GIdCSyyS7",
                R = "lUDfnPiNdD",
                z = "PaFzglKCf5",
                Y = "_29b6nIu_GY";
            var H = r(80125);

            function I() { return (I = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) }

            function U(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e); for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]) }
                return o
            }
            var G = (0, l.forwardRef)((function(e, t) {
                var r = e.color,
                    n = void 0 === r ? "currentColor" : r,
                    o = e.size,
                    i = void 0 === o ? 24 : o,
                    s = U(e, ["color", "size"]);
                return l.createElement("svg", I({ ref: t, xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 24 24", fill: "none", stroke: n, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, s), l.createElement("circle", { cx: "11", cy: "11", r: "8" }), l.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }))
            }));
            G.propTypes = { color: a().string, size: a().oneOfType([a().string, a().number]) }, G.displayName = "Search";
            const J = G,
                Q = "_2QPZldYe9U",
                B = "_2PCUI90lIf",
                K = "xOYTLnYrng",
                M = "_1JKQs_Qawx",
                W = "_2km92h_dfH";
            const $ = function(e) {
                var t = e.dispatch,
                    r = e.searchText,
                    o = e.updateSearchText,
                    s = (0, l.useState)(r),
                    c = (0, n.Z)(s, 2),
                    a = c[0],
                    u = c[1],
                    d = (0, l.useCallback)((function(e) { t(o(e)) }), [t, o]),
                    f = (0, l.useMemo)((function() { return (0, H.Z)(d, 300) }), [d]);
                return (0, i.jsx)("div", { className: Q, children: (0, i.jsxs)("div", { className: B, children: [(0, i.jsx)("div", { className: K, children: (0, i.jsx)("input", { type: "text", placeholder: "搜索日志", value: a, onChange: function(e) { u(e.target.value), f(e.target.value) }, className: M }) }), (0, i.jsx)("div", { className: W, children: (0, i.jsx)(J, { size: 20 }) })] }) })
            };
            var A = r(55679);
            const F = (0, A.$j)((function(e) { return { searchText: (0, k.Rv)(e), updateSearchText: k.AR } }))($);
            var V = r(3835);

            function X(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(r), !0).forEach((function(t) {
                        (0, o.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var ee = l.useCallback,
                te = l.memo,
                re = l.useEffect,
                ne = { debug: "none", info: "#454545", warning: "#b99105", error: "#c11c1c" };

            function oe(e) {
                var t = e.time,
                    r = e.even,
                    n = e.payload,
                    o = e.type,
                    c = (0, s.Z)({ even: r }, R);
                return (0, i.jsx)("div", { className: c, children: (0, i.jsxs)("div", { className: C, children: [(0, i.jsx)("div", { className: T, children: t }), (0, i.jsx)("div", { className: D, style: { backgroundColor: ne[o] }, children: o }), (0, i.jsx)("div", { className: Z, children: n })] }) })
            }

            function ie(e, t) { return t[e].id }
            oe.propTypes = { time: a().string, even: a().bool, payload: a().string, type: a().string };
            var se = te((function(e) {
                var t = e.index,
                    r = e.style,
                    n = e.data[t];
                return (0, i.jsx)("div", { style: r, children: (0, i.jsx)(oe, q({}, n)) })
            }), u.wy);
            const ce = (0, A.$j)((function(e) { return { logs: (0, k.Xs)(e), logLevel: (0, N.ZO)(e), apiConfig: (0, L.Y$)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = e.logLevel,
                    o = e.apiConfig,
                    s = e.logs,
                    c = ee((function(e) { t((0, k.TH)(e)) }), [t]);
                re((function() { P(q(q({}, o), {}, { logLevel: r }), c) }), [o, r, c]);
                var a = (0, S.Z)(),
                    l = (0, n.Z)(a, 2),
                    d = l[0],
                    f = l[1];
                return (0, i.jsxs)("div", { children: [(0, i.jsx)(E.Z, { title: "日志" }), (0, i.jsx)(F, {}), (0, i.jsx)("div", { ref: d, style: { paddingBottom: 30 }, children: 0 === s.length ? (0, i.jsxs)("div", { className: z, style: { height: f - 30 }, children: [(0, i.jsx)("div", { className: Y, children: (0, i.jsx)(V.Z, { width: 200, height: 200 }) }), (0, i.jsx)("div", { children: "暂无日志，请稍候……" })] }) : (0, i.jsx)("div", { className: _, children: (0, i.jsx)(u.t7, { height: f - 30, width: "100%", itemCount: s.length, itemSize: 80, itemData: s, itemKey: ie, children: se }) }) })] })
            }))
        },
        23532: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var n = r(34699),
                o = r(67294),
                i = o.useState,
                s = o.useRef,
                c = o.useCallback,
                a = o.useLayoutEffect;

            function l() {
                var e = s(null),
                    t = i(200),
                    r = (0, n.Z)(t, 2),
                    o = r[0],
                    l = r[1],
                    u = c((function() {
                        var t = e.current.getBoundingClientRect().top;
                        l(window.innerHeight - t)
                    }), []);
                return a((function() {
                    return u(), window.addEventListener("resize", u),
                        function() { window.removeEventListener("resize", u) }
                }), [u]), [e, o]
            }
        }
    }
]);
//# sourceMappingURL=logs.6cb8be057767df8939ce.js.map