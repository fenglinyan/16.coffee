(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [981], {
        76706: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, { default: () => ye });
            t(82526), t(57327), t(89554), t(82772), t(49337), t(54747);
            var n = t(34699),
                i = t(96156),
                s = t(85893),
                o = t(67294),
                a = t(86178),
                c = t(47727),
                u = t(69834),
                l = t(2804),
                p = (t(41539), t(88674), t(87757)),
                f = t.n(p),
                d = (t(35666), t(92137)),
                v = t(97943);

            function h(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function y(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? h(Object(t), !0).forEach((function(r) {
                        (0, i.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }

            function g(e) {
                for (var r = e.providers, t = Object.keys(r), n = {}, i = 0; i < t.length; i++) {
                    var s = t[i];
                    n[s] = y(y({}, r[s]), {}, { idx: i })
                }
                return { byName: n, names: t }
            }

            function b(e, r) { return m.apply(this, arguments) }

            function m() {
                return (m = (0, d.Z)(f().mark((function e(r, t) {
                    var n, i, s, o, a;
                    return f().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, v.g)(t), i = n.url, s = n.init, o = { providers: {} }, e.prev = 2, e.next = 5, fetch(i + r, s);
                            case 5:
                                if (!(a = e.sent).ok) { e.next = 10; break }
                                return e.next = 9, a.json();
                            case 9:
                                o = e.sent;
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), console.log("failed to GET /providers/rules", e.t0);
                            case 15:
                                return e.abrupt("return", g(o));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))).apply(this, arguments)
            }

            function j(e) { return O.apply(this, arguments) }

            function O() {
                return (O = (0, d.Z)(f().mark((function e(r) {
                    var t, n, i, s, o, a;
                    return f().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = r.name, n = r.apiConfig, i = (0, v.g)(n), s = i.url, o = i.init, e.prev = 2, e.next = 5, fetch(s + "/providers/rules/" + t, y({ method: "PUT" }, o));
                            case 5:
                                return a = e.sent, e.abrupt("return", a.ok);
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(2), console.log("failed to PUT /providers/rules/:name", e.t0), e.abrupt("return", !1);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 9]
                    ])
                })))).apply(this, arguments)
            }
            t(21249);
            var x = t(41143),
                w = t.n(x);

            function P(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function k(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? P(Object(t), !0).forEach((function(r) {
                        (0, i.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }

            function C(e) { return w()(e.rules && e.rules.length >= 0, "there is no valid rules list in the rules API response"), e.rules.map((function(e, r) { return k(k({}, e), {}, { id: r }) })) }

            function Z(e, r) { return E.apply(this, arguments) }

            function E() {
                return (E = (0, d.Z)(f().mark((function e(r, t) {
                    var n, i, s, o, a;
                    return f().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = { rules: [] }, e.prev = 1, i = (0, v.g)(t), s = i.url, o = i.init, e.next = 5, fetch(s + r, o);
                            case 5:
                                if (!(a = e.sent).ok) { e.next = 10; break }
                                return e.next = 9, a.json();
                            case 9:
                                n = e.sent;
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(1), console.log("failed to fetch rules", e.t0);
                            case 15:
                                return e.abrupt("return", C(n));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 12]
                    ])
                })))).apply(this, arguments)
            }
            var N = t(86010),
                D = t(70296),
                _ = t(25904),
                S = t(21820);
            const L = "_2F14Vs-eyF",
                R = "x4HgsJSs_L",
                T = "_1AQt0kcvQz",
                z = "_28wqsVo1h2",
                F = "_1g-irMIYO_",
                I = "_3HvVwQHShY",
                M = "_3rwg4EbgB3";

            function Q(e) {
                var r = e.isRotating,
                    t = (0, N.Z)(I, {
                        [M]: r
                    });
                return (0, s.jsx)("span", { className: t, children: (0, s.jsx)(a.Z, { width: 16 }) })
            }

            function V(e) {
                var r = e.idx,
                    t = e.name,
                    i = e.vehicleType,
                    o = e.behavior,
                    a = e.updatedAt,
                    u = e.ruleCount,
                    l = function(e, r) {
                        var t = (0, c.Db)(j, { onSuccess: function() { c.sJ.invalidateQueries("/providers/rules") } }),
                            i = (0, n.Z)(t, 2),
                            s = i[0];
                        return [function(t) { t.preventDefault(), s({ name: e, apiConfig: r }) }, i[1].isLoading]
                    }(t, e.apiConfig),
                    p = (0, n.Z)(l, 2),
                    f = p[0],
                    d = p[1],
                    v = (0, D.Z)(new Date(a), new Date);
                return (0, s.jsxs)("div", { className: L, children: [(0, s.jsx)("span", { className: R, children: r }), (0, s.jsxs)("div", { className: T, children: [(0, s.jsx)(S.$, { name: t, type: `${i} / ${o}` }), (0, s.jsx)("div", { className: z, children: u < 2 ? u + " rule" : u + " rules" }), (0, s.jsxs)("small", { className: z, children: ["Updated ", v, " ago"] })] }), (0, s.jsx)("span", { className: F, children: (0, s.jsx)(_.Z, { onClick: f, disabled: d, children: (0, s.jsx)(Q, { isRotating: d }) }) })] })
            }
            var A = t(44774),
                W = (0, l.cn)({ key: "ruleFilterText", default: "" }),
                J = t(57944);

            function Y() {
                var e = (0, A.g)(W),
                    r = (0, n.Z)(e, 2),
                    t = r[0],
                    i = r[1];
                return (0, s.jsx)("input", { className: J.Z.input, type: "text", value: i, onChange: t, placeholder: "搜索代理规则" })
            }
            var $ = t(23532),
                B = t(97798),
                H = t(68912),
                K = t(45697),
                U = t.n(K);
            const q = "_2ZxnpAgEbI",
                X = "_1Waxn5PO-y",
                G = "_1YW1imuuRW",
                ee = "_3Anv9Ytzq4",
                re = "_28txnmlSD3";
            var te = { _default: "#59caf9", DIRECT: "#f5bc41", REJECT: "#cb3166" };

            function ne(e) {
                var r = e.type,
                    t = e.payload,
                    n = e.proxy,
                    i = e.id,
                    o = function(e) {
                        var r = e.proxy,
                            t = te._default;
                        return te[r] && (t = te[r]), { color: t }
                    }({ proxy: n });
                return (0, s.jsxs)("div", { className: q, children: [(0, s.jsx)("div", { className: X, children: i }), (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: ee, children: t }), (0, s.jsxs)("div", { className: G, children: [(0, s.jsx)("div", { className: re, children: r }), (0, s.jsx)("div", { style: o, children: n })] })] })] })
            }
            ne.propTypes = { id: U().number, type: U().string, payload: U().string, proxy: U().string };
            const ie = ne,
                se = "_3WrcX9K2WQ",
                oe = "_109LiAqCt-";
            var ae = t(51858),
                ce = t(55679);

            function ue(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function le(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? ue(Object(t), !0).forEach((function(r) {
                        (0, i.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ue(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            var pe = o.memo,
                fe = o.useMemo,
                de = o.useCallback;

            function ve(e, r) {
                var t = r.rules,
                    n = r.provider,
                    i = n.names.length;
                return e < i ? n.names[e] : t[e - i].id
            }
            var he = pe((function(e) {
                var r = e.index,
                    t = e.style,
                    n = e.data,
                    i = n.rules,
                    o = n.provider,
                    a = n.apiConfig,
                    c = o.names.length;
                if (r < c) {
                    var u = o.names[r],
                        l = o.byName[u];
                    return (0, s.jsx)("div", { style: t, className: oe, children: (0, s.jsx)(V, le({ apiConfig: a }, l)) })
                }
                var p = i[r - c];
                return (0, s.jsx)("div", { style: t, children: (0, s.jsx)(ie, le({}, p)) })
            }), u.wy);
            const ye = (0, ce.$j)((function(e) { return { apiConfig: (0, B.Y$)(e) } }))((function(e) {
                var r = e.apiConfig,
                    t = (0, $.Z)(),
                    i = (0, n.Z)(t, 2),
                    o = i[0],
                    p = i[1],
                    f = fe((function() { return (0, s.jsx)(a.Z, { width: 16 }) }), []),
                    d = function(e) {
                        var r = (0, c.aM)(["/rules", e], Z, { suspense: !0 }).data,
                            t = (0, c.aM)(["/providers/rules", e], b, { suspense: !0 }).data,
                            i = (0, l.FV)(W),
                            s = (0, n.Z)(i, 1)[0];
                        if ("" === s) return { rules: r, provider: t };
                        var o = s.toLowerCase();
                        return { rules: r.filter((function(e) { return e.payload.toLowerCase().indexOf(o) >= 0 })), provider: { byName: t.byName, names: t.names.filter((function(e) { return e.toLowerCase().indexOf(o) >= 0 })) } }
                    }(r),
                    v = d.rules,
                    h = d.provider,
                    y = de((function() { c.sJ.invalidateQueries("/rules"), c.sJ.invalidateQueries("/providers/rules") }), []),
                    g = function(e) { var r = e.provider; return function(e) { return e < r.names.length ? 90 : 80 } }({ rules: v, provider: h });
                return (0, s.jsxs)("div", { children: [(0, s.jsxs)("div", { className: se, children: [(0, s.jsx)(H.Z, { title: "代理规则" }), (0, s.jsx)(Y, {})] }), (0, s.jsx)("div", { ref: o, style: { paddingBottom: 30 }, children: (0, s.jsx)(u.S_, { height: p - 30, width: "100%", itemCount: v.length + h.names.length, itemSize: g, itemData: { rules: v, provider: h, apiConfig: r }, itemKey: ve, children: he }) }), (0, s.jsx)(ae.Lg, { icon: f, text: "刷新", position: ae.FK, onClick: y })] })
            }))
        },
        51858: (e, r, t) => {
            "use strict";
            t.d(r, { FK: () => i, Lg: () => n.L, aU: () => n.a });
            var n = t(34179),
                i = { right: 10, bottom: 10 }
        },
        23532: (e, r, t) => {
            "use strict";
            t.d(r, { Z: () => u });
            var n = t(34699),
                i = t(67294),
                s = i.useState,
                o = i.useRef,
                a = i.useCallback,
                c = i.useLayoutEffect;

            function u() {
                var e = o(null),
                    r = s(200),
                    t = (0, n.Z)(r, 2),
                    i = t[0],
                    u = t[1],
                    l = a((function() {
                        var r = e.current.getBoundingClientRect().top;
                        u(window.innerHeight - r)
                    }), []);
                return c((function() {
                    return l(), window.addEventListener("resize", l),
                        function() { window.removeEventListener("resize", l) }
                }), [l]), [e, i]
            }
        },
        44774: (e, r, t) => {
            "use strict";
            t.d(r, { g: () => l });
            var n = t(34699),
                i = t(80125),
                s = t(67294),
                o = t(2804),
                a = s.useCallback,
                c = s.useState,
                u = s.useMemo;

            function l(e) {
                var r = (0, o.FV)(e),
                    t = (0, n.Z)(r, 2)[1],
                    s = c(""),
                    l = (0, n.Z)(s, 2),
                    p = l[0],
                    f = l[1],
                    d = u((function() { return (0, i.Z)(t, 300) }), [t]);
                return [a((function(e) { f(e.target.value), d(e.target.value) }), [d]), p]
            }
        },
        41143: e => {
            "use strict";
            e.exports = function(e, r, t, n, i, s, o, a) {
                if (!e) {
                    var c;
                    if (void 0 === r) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var u = [t, n, i, s, o, a],
                            l = 0;
                        (c = new Error(r.replace(/%s/g, (function() { return u[l++] })))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
        },
        57944: (e, r, t) => {
            "use strict";
            t.d(r, { Z: () => n });
            const n = { input: "_1I0EXOg8Vu" }
        },
        86178: (e, r, t) => {
            "use strict";
            t.d(r, { Z: () => u });
            var n = t(67294),
                i = t(45697),
                s = t.n(i);

            function o() { return (o = Object.assign || function(e) { for (var r = 1; r < arguments.length; r++) { var t = arguments[r]; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) } return e }).apply(this, arguments) }

            function a(e, r) {
                if (null == e) return {};
                var t, n, i = function(e, r) {
                    if (null == e) return {};
                    var t, n, i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i
                }(e, r);
                if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]) }
                return i
            }
            var c = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    i = void 0 === t ? "currentColor" : t,
                    s = e.size,
                    c = void 0 === s ? 24 : s,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", o({ ref: r, xmlns: "http://www.w3.org/2000/svg", width: c, height: c, viewBox: "0 0 24 24", fill: "none", stroke: i, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, u), n.createElement("polyline", { points: "23 4 23 10 17 10" }), n.createElement("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }))
            }));
            c.propTypes = { color: s().string, size: s().oneOfType([s().string, s().number]) }, c.displayName = "RotateCw";
            const u = c
        }
    }
]);
//# sourceMappingURL=rules.e13500747f79b08e1b96.js.map