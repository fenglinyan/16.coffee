<<<<<<< HEAD
(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [143], {
        50497: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => p, w: () => h });
            r(82526), r(57327), r(89554), r(49337), r(41539), r(88674), r(54747);
            var n = r(96156),
                o = r(87757),
                s = r.n(o),
                c = (r(35666), r(92137)),
                i = r(97943);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((
                        function(t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var l = "/configs";

            function p(e) { return f.apply(this, arguments) }

            function f() {
                return (f = (0, c.Z)(s().mark((function e(t) {
                    var r, n, o;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, o = r.init, e.next = 3, fetch(n + l, o);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d(e) { return "socks-port" in e && (e["socket-port"] = e["socks-port"]), e }

            function h(e, t) { return v.apply(this, arguments) }

            function v() {
                return (v = (0, c.Z)(s().mark((function e(t, r) {
                    var n, o, c, a;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, i.g)(t), o = n.url, c = n.init, a = JSON.stringify(d(r)), e.next = 4, fetch(o + l, u(u({}, c), {}, { body: a, method: "PATCH" }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        97750: (e, t, r) => {
            "use strict";
            r.d(t, { rQ: () => d, PI: () => v, $K: () => g, Sm: () => y });
            r(82526), r(57327), r(89554), r(82772), r(40561), r(49337), r(41539), r(88674), r(54747);
            var n = r(87757),
                o = r.n(n),
                s = r(96156),
                c = (r(35666), r(92137)),
                i = r(97943);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var l, p = "/connections",
                f = [];

            function d(e, t) {
                if (1 === l && t) return h(t);
                l = 1;
                var r = (0, i.P)(e, p),
                    n = new WebSocket(r);
                return n.addEventListener("error", (function() { return l = 3 })), n.addEventListener("message", (function(e) {
                    return function(e) {
                        var t;
                        try { t = JSON.parse(e) } catch (t) { console.log("JSON.parse error", JSON.parse(e)) }
                        f.forEach((function(e) { return e(t) }))
                    }(e.data)
                })), t ? h(t) : void 0
            }

            function h(e) {
                return f.push(e),
                    function() {
                        var t = f.indexOf(e);
                        f.splice(t, 1)
                    }
            }

            function v(e) { return b.apply(this, arguments) }

            function b() {
                return (b = (0, c.Z)(o().mark((function e(t) {
                    var r, n, s;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + p, u(u({}, s), {}, { method: "DELETE" }));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function g(e) { return x.apply(this, arguments) }

            function x() {
                return (x = (0, c.Z)(o().mark((function e(t) {
                    var r, n, s;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + p, u({}, s));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y(e, t) { return j.apply(this, arguments) }

            function j() {
                return (j = (0, c.Z)(o().mark((function e(t, r) {
                    var n, s, c, a;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, i.g)(t), s = n.url, c = n.init, a = `${s}${p}/${r}`, e.next = 4, fetch(a, u(u({}, c), {}, { method: "DELETE" }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        10877: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => d });
            r(89554), r(82772), r(40561), r(41539), r(88674), r(23123), r(54747);
            var n, o = r(97943),
                s = "/traffic",
                c = new TextDecoder("utf-8"),
                i = 150,
                a = {
                    labels: Array(i),
                    up: Array(i),
                    down: Array(i),
                    size: i,
                    subscribers: [],
                    appendData(e) {
                        this.up.push(e.up), this.down.push(e.down);
                        var t = new Date,
                            r = "" + t.getMinutes() + t.getSeconds();
                        this.labels.push(r), this.up.length > this.size && this.up.shift(), this.down.length > this.size && this.down.shift(), this.labels.length > this.size && this.labels.shift(), this.subscribers.forEach((function(t) { return t(e) }))
                    },
                    subscribe(e) {
                        var t = this;
                        return this.subscribers.push(e),
                            function() {
                                var r = t.subscribers.indexOf(e);
                                t.subscribers.splice(r, 1)
                            }
                    }
                },
                u = !1,
                l = "";

            function p(e) { a.appendData(JSON.parse(e)) }

            function f(e) { return e.read().then((function(t) { for (var r = t.done, n = t.value, o = c.decode(n, { stream: !r }), s = (l += o).split("\n"), i = s[s.length - 1], a = 0; a < s.length - 1; a++) p(s[a]); return r ? (p(i), l = "", console.log("GET /traffic streaming done"), void(u = !1)) : (l = i, f(e)) })) }

            function d(e) {
                if (u || 1 === n) return a;
                n = 1;
                var t = (0, o.P)(e, s),
                    r = new WebSocket(t);
                return r.addEventListener("error", (function(e) { n = 3 })), r.addEventListener("close", (function(t) {
                    n = 3,
                        function(e) {
                            if (u) return a;
                            u = !0;
                            var t = (0, o.g)(e),
                                r = t.url,
                                n = t.init;
                            fetch(r + s, n).then((function(e) { e.ok ? f(e.body.getReader()) : u = !1 }), (function(e) { console.log("fetch /traffic error", e), u = !1 }))
                        }(e)
                })), r.addEventListener("message", (function(e) { p(e.data) })), a
            }
        },
        97698: (e, t, r) => {
            "use strict";
            var n = r(85893),
                o = r(67294),
                s = r(73935),
                c = r(83253),
                i = r.n(c),
                a = (r(57327), r(41539), r(88674), r(39711)),
                u = r(96974),
                l = r(2804),
                p = r(46702),
                f = r(47727),
                d = r(87757),
                h = r.n(d),
                v = (r(35666), r(92137)),
                b = r(97943);

            function g(e, t) { return x.apply(this, arguments) }

            function x() {
                return (x = (0, v.Z)(h().mark((function e(t, r) {
                    var n, o, s, c, i;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = {}, e.prev = 1, o = (0, b.g)(r), s = o.url, c = o.init, e.next = 5, fetch(s + t, c);
                            case 5:
                                if (!(i = e.sent).ok) { e.next = 10; break }
                                return e.next = 9, i.json();
                            case 9:
                                n = e.sent;
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(1), console.log("failed to fetch " + t, e.t0);
                            case 15:
                                return e.abrupt("return", n);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 12]
                    ])
                })))).apply(this, arguments)
            }
            var y = r(68912),
                j = r(55679),
                m = r(97798);
            const O = "cHbZy_rAHf",
                w = "_2SNe_x81Ib",
                P = "LUI6m76ply";

            function C(e) {
                var t = e.name,
                    r = e.link,
                    o = e.version;
                return (0, n.jsxs)("div", { className: O, children: [(0, n.jsx)("h2", { children: t }), (0, n.jsxs)("p", { children: [(0, n.jsx)("span", { children: "Version " }), (0, n.jsx)("span", { className: w, children: o })] }), (0, n.jsx)("p", { children: (0, n.jsxs)("a", { className: P, href: r, target: "_blank", rel: "noopener noreferrer", children: [(0, n.jsx)(p.Z, { size: 20 }), (0, n.jsx)("span", { children: "Source" })] }) })] })
            }
            var k = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) { var t = (0, f.aM)(["/version", e.apiConfig], g, { suspense: !0 }).data; return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(y.Z, { title: "About" }), t && t.version ? (0, n.jsx)(C, { name: "Clash", version: t.version, link: "https://github.com/Dreamacro/clash" }) : null, (0, n.jsx)(C, { name: "Yacd", version: "0.2.8", link: "https://github.com/haishanh/yacd" })] }) })),
                Z = r(79912),
                N = r(38429),
                S = r(98236),
                D = r(19943),
                E = { app: (0, m.E3)(), modals: S.E3, configs: Z.E3, proxies: D.E3, logs: N.E3 },
                R = { selectChartStyleIndex: m.Pw, updateAppConfig: m.N, app: { updateCollapsibleIsOpen: m.iB, updateAppConfig: m.N, removeClashAPIConfig: m.aj, selectClashAPIConfig: m.O4 }, proxies: D.Nw },
                T = (r(66992), r(33948), r(60285), r(34699)),
                I = r(50497),
                A = (r(21249), r(86010)),
                L = r(44309),
                U = r(12590),
                _ = r(78268),
                M = o.useState,
                B = o.useCallback;
            const $ = { ul: "_1MP9tbO2C9", li: "_39O4-s-qNw", close: "_3U13UgV7Z1", eye: "ipx6os2H89", hasSecret: "_3GP8CDySTd", url: "PK8GjRW5ZI", secret: "_2-iwpHoCB6", btn: "S1-PNvCcRP" };
            var F = (0, j.$j)((function(e) { return { apiConfigs: (0, m.AJ)(e), selectedClashAPIConfigIndex: (0, m.I4)(e) } }))((function(e) {
                var t = e.apiConfigs,
                    r = e.selectedClashAPIConfigIndex,
                    s = (0, j.WX)().app,
                    c = s.removeClashAPIConfig,
                    i = s.selectClashAPIConfig,
                    a = o.useCallback((function(e) { c(e) }), [c]),
                    u = o.useCallback((function(e) { i(e) }), [i]);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("ul", {
                        className: $.ul,
                        children: t.map((function(e, t) {
                            return (0, n.jsx)("li", {
                                className: (0, A.Z)($.li, {
                                    [$.hasSecret]: e.secret,
                                    [$.isSelected]: t === r
                                }),
                                children: (0, n.jsx)(z, { disableRemove: t === r, baseURL: e.baseURL, secret: e.secret, onRemove: a, onSelect: u })
                            }, e.baseURL + e.secret)
                        }))
                    })
                })
            }));

            function z(e) {
                var t = e.baseURL,
                    r = e.secret,
                    s = e.disableRemove,
                    c = e.onRemove,
                    i = e.onSelect,
                    a = function() {
                        var e = M(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]),
                            t = (0, T.Z)(e, 2),
                            r = t[0],
                            n = t[1],
                            o = B((function() { return n((function(e) { return !e })) }), []);
                        return [r, o]
                    }(),
                    u = (0, T.Z)(a, 2),
                    l = u[0],
                    p = u[1],
                    f = l ? L.Z : U.Z,
                    d = o.useCallback((function(e) { e.stopPropagation() }), []);
                return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(q, { disabled: s, onClick: function() { return c({ baseURL: t, secret: r }) }, className: $.close, children: (0, n.jsx)(_.Z, { size: 20 }) }), (0, n.jsx)("span", { className: $.url, tabIndex: 0, role: "button", onClick: function() { return i({ baseURL: t, secret: r }) }, onKeyUp: d, children: t }), (0, n.jsx)("span", {}), r ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("span", { className: $.secret, children: l ? r : "***" }), (0, n.jsx)(q, { onClick: p, className: $.eye, children: (0, n.jsx)(f, { size: 20 }) })] }) : null] })
            }

            function q(e) {
                var t = e.children,
                    r = e.onClick,
                    o = e.className,
                    s = e.disabled;
                return (0, n.jsx)("button", { disabled: s, className: (0, A.Z)(o, $.btn), onClick: r, children: t })
            }
            const W = "_2-70itbuF1",
                J = "JKE-0c5hxF",
                G = "o2VhY_cs6Z",
                V = "_3QDGxJ_pWs",
                H = "tTZzzcEsTA",
                Y = "_2cCgtjpQZP",
                Q = "_3OT00Mqmrw";
            var K = r(25904),
                X = (r(82526), r(89554), r(49337), r(54747), r(96156)),
                ee = r(17375),
                te = r(45697),
                re = r.n(te);
            const ne = "_2uN43zExEi",
                oe = "_2gQ0j5OHC8";

            function se(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var ie = o.useCallback;

            function ae(e) {
                var t = e.id,
                    r = e.label,
                    o = e.value,
                    s = e.onChange,
                    c = (0, ee.Z)(e, ["id", "label", "value", "onChange"]),
                    i = ie((function(e) { return s(e) }), [s]),
                    a = (0, A.Z)({
                        [oe]: "string" == typeof o && "" !== o
                    });
                return (0, n.jsxs)("div", { className: ne, children: [(0, n.jsx)("input", ce({ id: t, value: o, onChange: i }, c)), (0, n.jsx)("label", { htmlFor: t, className: a, children: r })] })
            }
            ae.propTypes = { value: re().oneOfType([re().string, re().number]), type: re().oneOf(["text", "number"]), onChange: re().func, id: re().string, label: re().string };
            var ue = r(3835),
                le = o.useState,
                pe = o.useRef,
                fe = o.useCallback;
            const de = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = le(""),
                    o = (0, T.Z)(r, 2),
                    s = o[0],
                    c = o[1],
                    i = le(""),
                    a = (0, T.Z)(i, 2),
                    u = a[0],
                    l = a[1],
                    p = le(""),
                    f = (0, T.Z)(p, 2),
                    d = f[0],
                    h = f[1],
                    v = pe(!1),
                    b = pe(null),
                    g = fe((function(e) {
                        v.current = !0, h("");
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        switch (r) {
                            case "baseURL":
                                c(n);
                                break;
                            case "secret":
                                l(n);
                                break;
                            default:
                                throw new Error("unknown input name " + r)
                        }
                    }), []),
                    x = fe((function() {
                        (function(e) { return he.apply(this, arguments) })({ baseURL: s, secret: u }).then((function(e) { 0 !== e[0] ? h(e[1]) : t((0, m.sv)({ baseURL: s, secret: u })) }))
                    }), [s, u, t]),
                    y = fe((function(e) { e.target instanceof Element && (!e.target.tagName || "INPUT" !== e.target.tagName.toUpperCase()) || "Enter" === e.key && x() }), [x]);
                return (0, n.jsxs)("div", { className: W, ref: b, onKeyDown: y, children: [(0, n.jsx)("div", { className: J, children: (0, n.jsx)("div", { className: G, children: (0, n.jsx)(ue.Z, { width: 160, height: 160 }) }) }), (0, n.jsx)("div", { className: V, children: (0, n.jsxs)("div", { className: H, children: [(0, n.jsx)(ae, { id: "baseURL", name: "baseURL", label: "Clash 服务器:配置端口", type: "text", value: s, onChange: g }), (0, n.jsx)(ae, { id: "secret", name: "secret", label: "密钥（可选）", value: u, type: "text", onChange: g })] }) }), (0, n.jsx)("div", { className: Y, children: d || null }), (0, n.jsx)("div", { className: Q, children: (0, n.jsx)(K.Z, { label: "添加", onClick: x }) }), (0, n.jsx)("div", { style: { height: 20 } }), (0, n.jsx)(F, {})] })
            }));

            function he() {
                return (he = (0, v.Z)(h().mark((function e(t) {
                    var r, n;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.prev = 0, new URL(t.baseURL), e.next = 11;
                                break;
                            case 4:
                                if (e.prev = 4, e.t0 = e.catch(0), !t.baseURL) { e.next = 10; break }
                                if ("http://" === (r = t.baseURL.substring(0, 7)) || "https:/" === r) { e.next = 10; break }
                                return e.abrupt("return", [1, "Must starts with http:// or https://"]);
                            case 10:
                                return e.abrupt("return", [1, "Invalid URL"]);
                            case 11:
                                return e.prev = 11, e.next = 14, (0, I.T)(t);
                            case 14:
                                if (!((n = e.sent).status > 399)) { e.next = 17; break }
                                return e.abrupt("return", [1, n.statusText]);
                            case 17:
                                return e.abrupt("return", [0]);
                            case 20:
                                return e.prev = 20, e.t1 = e.catch(11), e.abrupt("return", [1, "Failed to connect"]);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 4],
                        [11, 20]
                    ])
                })))).apply(this, arguments)
            }
            var ve = { 0: { message: "Browser not supported!", detail: 'This browser does not support "fetch", please choose another one.' }, default: { message: "Oops, something went wrong!" } };
            const be = "_2vs8ks4GvR",
                ge = "Z8vSJz0PbL",
                xe = "EWfRQXOK8M";
            var ye = r(93621);

            function je(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }

            function Oe(e) {
                var t = e.isOpen,
                    r = e.onRequestClose,
                    o = e.className,
                    s = e.overlayClassName,
                    c = e.children,
                    a = (0, ee.Z)(e, ["isOpen", "onRequestClose", "className", "overlayClassName", "children"]),
                    u = (0, A.Z)(o, ye.Z.content),
                    l = (0, A.Z)(s, ye.Z.overlay);
                return (0, n.jsx)(i(), me(me({ isOpen: t, onRequestClose: r, className: u, overlayClassName: l }, a), {}, { children: c }))
            }
            Oe.propTypes = { isOpen: re().bool.isRequired, onRequestClose: re().func.isRequired, children: re().node.isRequired, className: re().string, overlayClassName: re().string };
            const we = o.memo(Oe);
            var Pe = o.useCallback,
                Ce = o.useEffect;
            const ke = (0, j.$j)((function(e) { return { modals: e.modals, apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = e.apiConfig,
                    o = e.modals;
                if (!window.fetch) {
                    var s = ve[0].detail,
                        c = new Error(s);
                    throw c.code = 0, c
                }
                var i = Pe((function() { t((0, S.Mr)("apiConfig")) }), [t]);
                return Ce((function() { t((0, Z.Tj)(r)) }), [t, r]), (0, n.jsx)(we, { isOpen: o.apiConfig, className: be, overlayClassName: xe, shouldCloseOnOverlayClick: !1, shouldCloseOnEsc: !1, onRequestClose: i, children: (0, n.jsx)("div", { className: ge, children: (0, n.jsx)(de, {}) }) })
            }));
            r(92222), r(12419), r(39714);
            var Ze = r(6610),
                Ne = r(5991),
                Se = r(63349),
                De = r(65255),
                Ee = r(86089),
                Re = r(77608);
            const Te = "_113JVByWGF",
                Ie = "_1m2ZsnzFvt",
                Ae = "_3TKFOM4Tgj";

            function Le() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o;
                return (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: r, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
            }
            Le.propTypes = { width: re().number, height: re().number };

            function Ue(e) {
                var t = e.message,
                    r = e.detail;
                return (0, n.jsxs)("div", { className: Te, children: [(0, n.jsx)("div", { className: Ie, children: (0, n.jsx)(ue.Z, { width: 150, height: 150 }) }), t ? (0, n.jsx)("h1", { children: t }) : null, r ? (0, n.jsx)("p", { children: r }) : null, (0, n.jsx)("p", { children: (0, n.jsxs)("a", { className: Ae, href: "https://github.com/haishanh/yacd/issues", children: [(0, n.jsx)(Le, { width: 16, height: 16 }), "haishanh/yacd"] }) })] })
            }
            Ue.propTypes = { message: re().string };
            const _e = Ue;

            function Me(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var r, n = (0, Re.Z)(e);
                    if (t) {
                        var o = (0, Re.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, Ee.Z)(this, r)
                }
            }
            var Be = function(e) {
                (0, De.Z)(r, e);
                var t = Me(r);

                function r() {
                    var e;
                    (0, Ze.Z)(this, r);
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, X.Z)((0, Se.Z)(e), "state", { error: null }), e
                }
                return (0, Ne.Z)(r, [{
                    key: "render",
                    value: function() {
                        if (this.state.error) {
                            var e = (o = this.state.error, "number" == typeof(s = o.code) ? ve[s] : ve.default),
                                t = e.message,
                                r = e.detail;
                            return (0, n.jsx)(_e, { message: t, detail: r })
                        }
                        return this.props.children;
                        var o, s
                    }
                }], [{ key: "getDerivedStateFromError", value: function(e) { return { error: e } } }]), r
            }(o.Component);
            (0, X.Z)(Be, "propTypes", { children: re().node });
            const $e = Be,
                Fe = { root: "_2kr0S-YLqE" },
                ze = "_12V5kDiPEH",
                qe = "_2FcudZSVil";
            var We = function(e) {
                var t = e.height,
                    r = t ? { height: t } : {};
                return (0, n.jsx)("div", { className: ze, style: r, children: (0, n.jsx)("div", { className: qe }) })
            };
            We.propTypes = { height: re().string };
            const Je = We;
            var Ge = r(10877),
                Ve = r(82759),
                He = r(36723);

            function Ye(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var Ke = { position: "relative", maxWidth: 1e3 };
            const Xe = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e), selectedChartStyleIndex: (0, m.AM)(e) } }))((function(e) {
                var t = e.apiConfig,
                    r = e.selectedChartStyleIndex,
                    s = He.A8.read(),
                    c = (0, Ge.r)(t),
                    i = (0, o.useMemo)((function() { return { labels: c.labels, datasets: [Qe(Qe(Qe({}, He.IE), He.Eu[r].up), {}, { label: "上行速度", data: c.up }), Qe(Qe(Qe({}, He.IE), He.Eu[r].down), {}, { label: "下行速度", data: c.down })] } }), [c, r]);
                return (0, Ve.Z)(s, "trafficChart", i, c), (0, n.jsx)("div", { style: Ke, children: (0, n.jsx)("canvas", { id: "trafficChart" }) })
            }));
            var et = r(97750),
                tt = r(92375);
            const rt = "_2n4kL7wLDR";
            var nt = o.useState,
                ot = o.useEffect,
                st = o.useCallback;
            const ct = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.apiConfig,
                    r = function(e) {
                        var t = nt({ upStr: "0 B/s", downStr: "0 B/s" }),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            o = r[1];
                        return ot((function() { return (0, Ge.r)(e).subscribe((function(e) { return o({ upStr: (0, tt.Z)(e.up) + "/s", downStr: (0, tt.Z)(e.down) + "/s" }) })) }), [e]), n
                    }(t),
                    o = r.upStr,
                    s = r.downStr,
                    c = function(e) {
                        var t = nt({ upTotal: "0 B", dlTotal: "0 B", connNumber: 0 }),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            o = r[1],
                            s = st((function(e) {
                                var t = e.downloadTotal,
                                    r = e.uploadTotal,
                                    n = e.connections;
                                o({ upTotal: (0, tt.Z)(r), dlTotal: (0, tt.Z)(t), connNumber: n.length })
                            }), [o]);
                        return ot((function() { return et.rQ(e, s) }), [e, s]), n
                    }(t),
                    i = c.upTotal,
                    a = c.dlTotal,
                    u = c.connNumber;
                return (0, n.jsxs)("div", { className: rt, children: [(0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "上传" }), (0, n.jsx)("div", { children: o })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "下载" }), (0, n.jsx)("div", { children: s })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "总上传数据量" }), (0, n.jsx)("div", { children: i })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "总下载数据量" }), (0, n.jsx)("div", { children: a })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "活跃连接" }), (0, n.jsx)("div", { children: u })] })] })
            }));

            function it() { return (0, n.jsxs)("div", { children: [(0, n.jsx)(y.Z, { title: "概览" }), (0, n.jsxs)("div", { className: Fe.root, children: [(0, n.jsx)("div", { children: (0, n.jsx)(ct, {}) }), (0, n.jsx)("div", { className: Fe.chart, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(Je, { height: "200px" }), children: (0, n.jsx)(Xe, {}) }) })] })] }) }
            const at = "_2fg1R7Zu62";
            const ut = function() { return (0, n.jsx)("div", { className: at, children: (0, n.jsx)(ue.Z, { width: 280, height: 280, animate: !0, c0: "transparent", c1: "#646464" }) }) },
                lt = "_1X99PPGcn7",
                pt = "_2oV8uPP0dj";
            var ft = r(73973),
                dt = r(59467),
                ht = r(88757);
            const vt = "_3sTuXodYya",
                bt = "_1WdrygzFVZ",
                gt = "q9nBJwAvlz",
                xt = "_3yqSXpep4D",
                yt = "_3wqPc_btNi",
                jt = "_2sd59kze-t",
                mt = "_2o6aUGu--S",
                Ot = "_11NITPe4W7",
                wt = "_1kzEILbWHq";
            var Pt = o.useCallback,
                Ct = { activity: dt.o_x, globe: dt.XUT, command: dt.e71, file: dt.NFo, settings: dt.cKh, link: dt.wWA },
                kt = o.memo((function(e) {
                    var t = e.isActive,
                        r = e.to,
                        o = e.iconId,
                        s = e.labelText,
                        c = Ct[o],
                        i = (0, A.Z)(xt, t ? yt : null);
                    return (0, n.jsxs)(a.rU, { to: r, className: i, children: [(0, n.jsx)(c, {}), (0, n.jsx)("div", { className: jt, children: s })] })
                }));
            kt.propTypes = { isActive: re().bool.isRequired, to: re().string.isRequired, iconId: re().string, labelText: re().string };
            var Zt = [{ to: "/", iconId: "activity", labelText: "概览" }, { to: "/proxies", iconId: "globe", labelText: "节点服务器" }, { to: "/rules", iconId: "command", labelText: "代理规则" }, { to: "/connections", iconId: "link", labelText: "连接" }, { to: "/configs", iconId: "settings", labelText: "设置" }, { to: "/logs", iconId: "file", labelText: "日志" }];

            function Nt() { var e = ht.U.read().motion; return (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)(e.path, { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", initial: { rotate: -30 }, animate: { rotate: 0 }, transition: { duration: .7 } }) }) }

            function St() { var e = ht.U.read().motion; return (0, n.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, n.jsx)("circle", { cx: "12", cy: "12", r: "5" }), (0, n.jsxs)(e.g, { initial: { scale: .8 }, animate: { scale: 1 }, transition: { duration: .7 }, children: [(0, n.jsx)("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), (0, n.jsx)("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), (0, n.jsx)("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), (0, n.jsx)("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), (0, n.jsx)("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), (0, n.jsx)("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), (0, n.jsx)("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), (0, n.jsx)("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })] })] }) }
            const Dt = (0, j.$j)((function(e) { return { theme: (0, m.gh)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = e.theme,
                    o = (0, u.TH)(),
                    s = Pt((function() { t((0, m.tj)()) }), [t]);
                return (0, n.jsxs)("div", {
                    className: vt,
                    children: [(0, n.jsx)("div", { className: bt }), (0, n.jsx)("div", {
                        className: gt,
                        children: Zt.map((function(e) {
                            var t = e.to,
                                r = e.iconId,
                                s = e.labelText;
                            return (0, n.jsx)(kt, { to: t, isActive: o.pathname === t, iconId: r, labelText: s }, t)
                        }))
                    }), (0, n.jsxs)("div", { className: mt, children: [(0, n.jsx)("button", { className: (0, A.Z)(Ot, wt), onClick: s, children: "light" === r ? (0, n.jsx)(Nt, {}) : (0, n.jsx)(St, {}) }), (0, n.jsx)(a.rU, { to: "/about", className: Ot, children: (0, n.jsx)(ft.Z, { size: 20 }) })] })]
                })
            }));
            var Et = r(34588),
                Rt = r(65182),
                Tt = r(21820),
                It = r(99175),
                At = r(68285);

            function Lt(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var r, n = (0, Re.Z)(e);
                    if (t) {
                        var o = (0, Re.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, Ee.Z)(this, r)
                }
            }

            function Ut(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ut(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var Mt = function() {},
                Bt = { padding: "20px 0" },
                $t = [{ label: "Global", value: "Global" }, { label: "Rule", value: "Rule" }, { label: "Direct", value: "Direct" }],
                Ft = function(e) {
                    var t = e.children,
                        r = e.style;
                    return (0, n.jsx)("div", { style: _t(_t({}, Bt), r), children: t })
                };

            function zt() {
                var e = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = o.useState(e),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            s = r[1],
                            c = o.useCallback((function() { s((function(e) { return !e })) }), []);
                        return [n, c]
                    }(!1),
                    t = (0, T.Z)(e, 2),
                    r = t[0],
                    s = t[1];
                return (0, n.jsx)(It.Z, { checked: r, onChange: s })
            }
            o.PureComponent;
            var qt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(331), r.e(170)]).then(r.bind(r, 33380)) })),
                Wt = (0, o.lazy)((function() { return r.e(497).then(r.bind(r, 42444)) })),
                Jt = (0, o.lazy)((function() { return Promise.all([r.e(237), r.e(507)]).then(r.bind(r, 84148)) })),
                Gt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(869), r.e(641)]).then(r.bind(r, 22849)) })),
                Vt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(237), r.e(981)]).then(r.bind(r, 76706)) })),
                Ht = [{ path: "/", element: (0, n.jsx)(it, {}) }, { path: "/connections", element: (0, n.jsx)(qt, {}) }, { path: "/configs", element: (0, n.jsx)(Wt, {}) }, { path: "/logs", element: (0, n.jsx)(Jt, {}) }, { path: "/proxies", element: (0, n.jsx)(Gt, {}) }, { path: "/rules", element: (0, n.jsx)(Vt, {}) }, { path: "/about", element: (0, n.jsx)(k, {}) }, !1].filter(Boolean);

            function Yt() { return (0, u.V$)(Ht) }

            function Qt() { return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ke, {}), (0, n.jsx)(Dt, {}), (0, n.jsx)("div", { className: pt, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(ut, {}), children: (0, n.jsx)(Yt, {}) }) })] }) }

            function Kt() { return (0, u.V$)([{ path: "/backend", element: (0, n.jsx)(de, {}) }, { path: "*", element: (0, n.jsx)(Qt, {}) }]) }
            const Xt = function() { return (0, n.jsx)($e, { children: (0, n.jsx)(l.Wh, { children: (0, n.jsx)(j.ZP, { initialState: E, actions: R, children: (0, n.jsx)(a.UT, { children: (0, n.jsx)("div", { className: lt, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(ut, {}), children: (0, n.jsx)(Kt, {}) }) }) }) }) }) }) };
            var er = document.getElementById("app");
            i().setAppElement(er), s.unstable_createRoot(er).render((0, n.jsx)(Xt, {})), console.log("Checkout the repo: https://github.com/haishanh/yacd"), console.log("Version:", "0.2.8")
        },
        25904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => y });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(17375),
                s = r(85893),
                c = r(86010),
                i = r(67294);
            const a = "_796AqwOFs_",
                u = "_1bLZvI40oA",
                l = "_1SrCTG7yDt",
                p = "_39VuJRXAmL";
            var f = r(21820);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var v = i.memo,
                b = i.forwardRef,
                g = i.useCallback;

            function x(e) {
                var t = e.children,
                    r = e.label,
                    n = e.text,
                    o = e.start;
                return (0, s.jsxs)(s.Fragment, { children: [o ? (0, s.jsx)("span", { className: l, children: "function" == typeof o ? o() : o }) : null, t || r || n] })
            }
            const y = v(b((function(e, t) {
                var r = e.onClick,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    l = e.isLoading,
                    d = e.kind,
                    v = void 0 === d ? "primary" : d,
                    b = e.className,
                    y = (0, o.Z)(e, ["onClick", "disabled", "isLoading", "kind", "className"]),
                    j = g((function(e) { l || r && r(e) }), [l, r]),
                    m = (0, c.Z)(a, {
                        [u]: "minimal" === v
                    }, b);
                return (0, s.jsx)("button", { className: m, ref: t, onClick: j, disabled: i, children: l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("span", { style: { display: "inline-flex", opacity: 0 }, children: (0, s.jsx)(x, h({}, y)) }), (0, s.jsx)("span", { className: p, children: (0, s.jsx)(f.M, {}) })] }) : (0, s.jsx)(x, h({}, y)) })
            })))
        },
        68912: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var n = r(85893),
                o = r(45697),
                s = r.n(o),
                c = r(67294);
            const i = "_24ddJm1Q5s",
                a = "B4QNkMu-0t";

            function u(e) { var t = e.title; return (0, n.jsx)("div", { className: i, children: (0, n.jsx)("h1", { className: a, children: t }) }) }
            u.propTypes = { title: s().string.isRequired };
            const l = c.memo(u)
        },
        65182: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => x, Z: () => g });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(34699),
                o = r(17375),
                s = r(96156),
                c = r(85893),
                i = r(45697),
                a = r.n(i),
                u = r(67294);
            const l = "_2DECxrOsTa";

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var d = u.useState,
                h = u.useRef,
                v = u.useEffect,
                b = u.useCallback;

            function g(e) { return (0, c.jsx)("input", f({ className: l }, e)) }

            function x(e) {
                var t = e.value,
                    r = (0, o.Z)(e, ["value"]),
                    s = d(t),
                    i = (0, n.Z)(s, 2),
                    a = i[0],
                    u = i[1],
                    p = h(t);
                v((function() { p.current !== t && u(t), p.current = t }), [t]);
                var g = b((function(e) { return u(e.target.value) }), [u]);
                return (0, c.jsx)("input", f({ className: l, value: a, onChange: g }, r))
            }
            g.propTypes = { value: a().oneOfType([a().string, a().number]), type: a().string, onChange: a().func, name: a().string, placeholder: a().string }
        },
        55679: (e, t, r) => {
            "use strict";
            r.d(t, { WX: () => m, ZP: () => O, $j: () => w });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(34699),
                s = r(85893),
                c = r(18172),
                i = r(67294);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            c.Fl(!1);
            var l = i.createContext,
                p = i.memo,
                f = i.useMemo,
                d = i.useRef,
                h = i.useEffect,
                v = i.useCallback,
                b = i.useContext,
                g = i.useState,
                x = l(null),
                y = l(null),
                j = l(null);

            function m() { return b(j) }

            function O(e) {
                var t = e.initialState,
                    r = e.actions,
                    n = void 0 === r ? {} : r,
                    i = e.children,
                    a = d(t),
                    u = g(t),
                    l = (0, o.Z)(u, 2),
                    p = l[0],
                    b = l[1],
                    m = v((function() { return a.current }), []);
                h((function() { 0 }), [m]);
                var O = v((function(e, t) {
                        if ("function" == typeof e) return e(O, m);
                        var r = (0, c.ZP)(m(), t);
                        r !== a.current && (a.current = r, b(r))
                    }), [m]),
                    w = f((function() { return C(n, O) }), [n, O]);
                return (0, s.jsx)(x.Provider, { value: p, children: (0, s.jsx)(y.Provider, { value: O, children: (0, s.jsx)(j.Provider, { value: w, children: i }) }) })
            }

            function w(e) {
                return function(t) {
                    var r = p(t);
                    return function(t) {
                        var n = b(x),
                            o = b(y),
                            c = e(n, t),
                            i = u(u({ dispatch: o }, t), c);
                        return (0, s.jsx)(r, u({}, i))
                    }
                }
            }

            function P(e, t) { return function() { for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]; return t(e.apply(this, n)) } }

            function C(e, t) { var r = {}; for (var n in e) { var o = e[n]; "function" == typeof o ? r[n] = P(o, t) : "object" == typeof o && (r[n] = C(o, t)) } return r }
        },
        3835: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var n = r(85893),
                o = r(86010),
                s = r(45697),
                c = r.n(s);
            r(67294);
            const i = "_3MvgliBN_D";

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 320 : t,
                    s = e.height,
                    c = void 0 === s ? 320 : s,
                    a = e.animate,
                    u = void 0 !== a && a,
                    l = e.c0,
                    p = void 0 === l ? "currentColor" : l,
                    f = e.c1,
                    d = void 0 === f ? "#eee" : f,
                    h = (0, o.Z)({
                        [i]: u
                    });
                return (0, n.jsx)("svg", { width: r, height: c, viewBox: "0 0 320 320", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [(0, n.jsx)("path", { d: "M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z", stroke: d, strokeWidth: "4", strokeLinecap: "round", fill: p, className: h }), (0, n.jsx)("circle", { fill: d, cx: "216.5", cy: "181.5", r: "14.5" }), (0, n.jsx)("circle", { fill: d, cx: "104.5", cy: "181.5", r: "14.5" }), (0, n.jsx)("g", { stroke: d, strokeLinecap: "round", strokeWidth: "4", children: (0, n.jsx)("path", { d: "M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11" }) })] }) })
            }
            a.propTypes = { width: c().number, height: c().number };
            const u = a
        },
        99175: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var n = r(85893),
                o = (r(67294), r(59936)),
                s = r(97798);
            const c = (0, r(55679).$j)((function(e) { return { theme: (0, s.gh)(e) } }))((function(e) {
                var t = e.checked,
                    r = void 0 !== t && t,
                    s = e.onChange,
                    c = e.theme,
                    i = e.name,
                    a = "dark" === c ? "#393939" : "#e9e9e9";
                return (0, n.jsx)(o.default, { onChange: s, checked: r, uncheckedIcon: !1, checkedIcon: !1, offColor: a, onColor: "#047aff", offHandleColor: "#fff", onHandleColor: "#fff", handleDiameter: 24, height: 28, width: 44, className: "rs", name: i })
            }))
        },
        68285: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            r(82772), r(21249);
            var n = r(85893),
                o = r(45697),
                s = r.n(o),
                c = r(67294);
            const i = "_2IgDTE__bQ",
                a = "_2IfOm9qQ_4";

            function u(e) {
                var t = e.options,
                    r = e.value,
                    o = e.name,
                    s = e.onChange,
                    u = (0, c.useMemo)((function() { return t.map((function(e) { return e.value })).indexOf(r) }), [t, r]),
                    l = (0, c.useCallback)((function(e) { var r = Math.floor(100 / t.length); return e === t.length - 1 ? 100 - t.length * r + r : e > -1 ? r : void 0 }), [t]),
                    p = (0, c.useMemo)((function() { return { width: l(u) + "%", left: u * l(0) + "%" } }), [u, l]);
                return (0, n.jsxs)("div", {
                    className: i,
                    children: [(0, n.jsx)("div", { className: a, style: p }), t.map((function(e, t) {
                        var c = `${o}-${e.label}`,
                            i = 0 === t ? "" : "border-left";
                        return (0, n.jsxs)("label", { htmlFor: c, className: i, style: { width: l(t) + "%" }, children: [(0, n.jsx)("input", { id: c, name: o, type: "radio", value: e.value, checked: r === e.value, onChange: s }), (0, n.jsx)("div", { children: e.label })] }, c)
                    }))]
                })
            }
            u.propTypes = { options: s().array, value: s().string, name: s().string, onChange: s().func };
            const l = c.memo(u)
        },
        21820: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => i, $: () => c });
            var n = r(85893);
            r(67294);
            const o = "Q-CsP5Y3FT",
                s = "_3GL3LmFL_E";

            function c(e) {
                var t = e.name,
                    r = e.type;
                return (0, n.jsxs)("h2", { className: o, children: [(0, n.jsx)("span", { children: t }), (0, n.jsx)("span", { children: r })] })
            }

            function i() { return (0, n.jsx)("span", { className: s }) }
        },
        82759: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(67294),
                s = r(36723);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var a = o.useEffect,
                u = s.SB;

            function l(e, t, r, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                a((function() {
                    var s = document.getElementById(t).getContext("2d"),
                        c = new e(s, { type: "line", data: r, options: i(i({}, u), o) }),
                        a = n && n.subscribe((function() { return c.update() }));
                    return function() { a && a(), c.destroy() }
                }), [e, t, r, n, o])
            }
        },
        36723: (e, t, r) => {
            "use strict";
            r.d(t, { A8: () => s, IE: () => c, SB: () => i, Eu: () => a });
            r(41539), r(88674);
            var n = r(4374),
                o = r(92375),
                s = (0, n.unstable_createResource)((function() { return r.e(736).then(r.t.bind(r, 72037, 7)).then((function(e) { return e.default })) })),
                c = { borderWidth: 1, lineTension: 0, pointRadius: 0 },
                i = { responsive: !0, maintainAspectRatio: !0, title: { display: !1 }, legend: { display: !0, position: "top", labels: { fontColor: "#ccc", boxWidth: 20 } }, tooltips: { enabled: !1, mode: "index", intersect: !1, animationDuration: 100 }, hover: { mode: "nearest", intersect: !0 }, scales: { xAxes: [{ display: !1, gridLines: { display: !1 } }], yAxes: [{ display: !0, gridLines: { display: !0, color: "#555", borderDash: [3, 6], drawBorder: !1 }, ticks: { callback: e => (0, o.Z)(e) + "/s " } }] } },
                a = [{ down: { backgroundColor: "rgba(176, 209, 132, 0.8)", borderColor: "rgb(176, 209, 132)" }, up: { backgroundColor: "rgba(181, 220, 231, 0.8)", borderColor: "rgb(181, 220, 231)" } }, { up: { backgroundColor: "rgb(98, 190, 100)", borderColor: "rgb(78,146,79)" }, down: { backgroundColor: "rgb(160, 230, 66)", borderColor: "rgb(110, 156, 44)" } }, { up: { backgroundColor: "rgba(94, 175, 223, 0.3)", borderColor: "rgb(94, 175, 223)" }, down: { backgroundColor: "rgba(139, 227, 195, 0.3)", borderColor: "rgb(139, 227, 195)" } }, { up: { backgroundColor: "rgba(242, 174, 62, 0.3)", borderColor: "rgb(242, 174, 62)" }, down: { backgroundColor: "rgba(69, 154, 248, 0.3)", borderColor: "rgb(69, 154, 248)" } }]
        },
        88757: (e, t, r) => {
            "use strict";
            r.d(t, { U: () => n });
            r(41539), r(88674);
            var n = function(e) {
                var t = {},
                    r = {},
                    n = {};

                function o() { var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; return r[o] = e(o).then((function(e) { delete r[o], t[o] = e })).catch((function(e) { n[o] = e })), r[o] }
                return {
                    preload: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        void 0 !== t[e] || r[e] || o(e)
                    },
                    read: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; if (void 0 !== t[e]) return t[e]; throw n[e] ? n[e] : r[e] ? r[e] : o(e) },
                    clear: function(e) { e ? delete t[e] : t = {} }
                }
            }((function() { return r.e(888).then(r.bind(r, 55888)) }))
        },
        92375: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            var n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            const o = function(e) { if (e < 1e3) return e + " B"; var t = Math.min(Math.floor(Math.log10(e) / 3), n.length - 1); return (e = Number((e / Math.pow(1e3, t)).toPrecision(3))) + " " + n[t] }
        },
        97943: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => a, P: () => u });
            r(82526), r(57327), r(89554), r(66992), r(49337), r(41539), r(54747), r(33948), r(60285);
            var n = r(96156),
                o = r(53062);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }
            var c = { "Content-Type": "application/json" };

            function i(e) {
                var t = e.secret,
                    r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                        }
                        return e
                    }({}, c);
                return t && (r.Authorization = "Bearer " + t), r
            }

            function a(e) { return { url: e.baseURL, init: { headers: i({ secret: e.secret }) } } }

            function u(e, t) {
                var r = e.baseURL,
                    n = e.secret,
                    s = "";
                "string" == typeof n && "" !== n && (s += "?token=" + encodeURIComponent(n));
                var c = new URL(r);
                return "https:" === c.protocol ? c.protocol = "wss:" : c.protocol = "ws:", `${(0, o.Os)(c.href)}${t}${s}`
            }
        },
        53062: (e, t, r) => {
            "use strict";
            r.d(t, { Ds: () => n, Os: () => o });
            r(15306);

            function n(e, t) {
                var r;
                return function() {
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    r && clearTimeout(r), r = setTimeout((function() { e.apply(void 0, o) }), t)
                }
            }

            function o(e) { return e.replace(/\/$/, "") }
        },
        97798: (e, t, r) => {
            "use strict";
            r.d(t, { sv: () => k, xE: () => w, Y$: () => h, AJ: () => b, VR: () => j, sU: () => O, Bg: () => y, S3: () => m, AM: () => x, I4: () => v, gh: () => g, E3: () => L, aj: () => Z, Pw: () => R, O4: () => N, tj: () => E, N: () => T, iB: () => I });
            r(82526), r(92222), r(57327), r(89554), r(66992), r(47042), r(49337), r(41539), r(15306), r(64765), r(23123), r(54747), r(33948), r(60285);
            var n = r(96156),
                o = r(34699),
                s = r(87329),
                c = r(87757),
                i = r.n(c),
                a = (r(35666), r(92137)),
                u = "yacd.haishan.me";

            function l(e) {
                try {
                    var t = JSON.stringify(e);
                    localStorage.setItem(u, t)
                } catch (e) {}
            }
            var p = r(53062);
            r(79912), r(98236);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var h = function(e) { var t = e.app.selectedClashAPIConfigIndex; return e.app.clashAPIConfigs[t] },
                v = function(e) { return e.app.selectedClashAPIConfigIndex },
                b = function(e) { return e.app.clashAPIConfigs },
                g = function(e) { return e.app.theme },
                x = function(e) { return e.app.selectedChartStyleIndex },
                y = function(e) { return e.app.latencyTestUrl },
                j = function(e) { return e.app.collapsibleIsOpen },
                m = function(e) { return e.app.proxySortBy },
                O = function(e) { return e.app.hideUnavailableProxies },
                w = function(e) { return e.app.autoCloseOldConns },
                P = (0, p.Ds)(l, 600);

            function C(e, t) { for (var r = t.baseURL, n = t.secret, o = b(e()), s = 0; s < o.length; s++) { var c = o[s]; if (c.baseURL === r && c.secret === n) return s } }

            function k(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!C(o, { baseURL: t, secret: r })) { e.next = 3; break }
                                    return e.abrupt("return");
                                case 3:
                                    s = { baseURL: t, secret: r, addedAt: Date.now() }, n("addClashAPIConfig", (function(e) { e.app.clashAPIConfigs.push(s) })), l(o().app);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }

            function Z(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    c = C(o, { baseURL: t, secret: r }), n("removeClashAPIConfig", (function(e) { e.app.clashAPIConfigs = [].concat((0, s.Z)(e.app.clashAPIConfigs.slice(0, c)), (0, s.Z)(e.app.clashAPIConfigs.slice(c + 1))) })), l(o().app);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }

            function N(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    s = C(o, { baseURL: t, secret: r }), v(o()) !== s && n("selectClashAPIConfig", (function(e) { e.app.selectedClashAPIConfigIndex = s })), l(o().app);
                                    try { window.location.reload() } catch (e) {}
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }
            var S = document.body;

            function D() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dark"; "dark" === e ? (S.classList.remove("light"), S.classList.add("dark")) : (S.classList.remove("dark"), S.classList.add("light")) }

            function E() {
                return function(e, t) {
                    var r = "light" === g(t()) ? "dark" : "light";
                    D(r), e("storeSwitchTheme", (function(e) { e.app.theme = r })), l(t().app)
                }
            }

            function R(e) { return function(t, r) { t("appSelectChartStyleIndex", (function(t) { t.app.selectedChartStyleIndex = e })), l(r().app) } }

            function T(e, t) { return function(r, n) { r("appUpdateAppConfig", (function(r) { r.app[e] = t })), l(n().app) } }

            function I(e, t, r) { return function(n, o) { n("updateCollapsibleIsOpen", (function(n) { n.app.collapsibleIsOpen[`${e}:${t}`] = r })), P(o().app) } }
            var A = { selectedClashAPIConfigIndex: 0, clashAPIConfigs: [{ baseURL: "http://192.168.16.116:9090", secret: "123456", addedAt: 0 }], latencyTestUrl: "http://www.gstatic.com/generate_204", selectedChartStyleIndex: 0, theme: "dark", collapsibleIsOpen: {}, proxySortBy: "Natural", hideUnavailableProxies: !1, autoCloseOldConns: !1 };

            function L() {
                var e = function() { try { var e = localStorage.getItem(u); if (!e) return; return JSON.parse(e) } catch (e) { return } }();
                e = d(d({}, A), e);
                var t = function() {
                        var e = window.location.search,
                            t = {};
                        if ("string" != typeof e || "" === e) return t;
                        for (var r = e.replace(/^\?/, "").split("&"), n = 0; n < r.length; n++) {
                            var s = r[n].split("="),
                                c = (0, o.Z)(s, 2),
                                i = c[0],
                                a = c[1];
                            t[i] = encodeURIComponent(a)
                        }
                        return t
                    }(),
                    r = e.clashAPIConfigs[e.selectedClashAPIConfigIndex];
                if (r) {
                    var n = new URL(r.baseURL);
                    t.hostname && (n.hostname = t.hostname), t.port && (n.port = t.port), r.baseURL = (0, p.Os)(n.href), t.secret && (r.secret = t.secret)
                }
                return "dark" !== t.theme && "light" !== t.theme || (e.theme = t.theme), D(e.theme), e
            }
        },
        79912: (e, t, r) => {
            "use strict";
            r.d(t, { G_: () => f, ZO: () => d, Tj: () => h, wf: () => v, E3: () => b });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(87757),
                s = r.n(o),
                c = (r(35666), r(92137)),
                i = r(50497),
                a = r(10877),
                u = r(98236);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var f = function(e) { return e.configs.configs },
                d = function(e) { return e.configs.configs["log-level"] };

            function h(e) {
                return function() {
                    var t = (0, c.Z)(s().mark((function t(r, n) {
                        var o, c;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, i.T(e);
                                case 3:
                                    o = t.sent, t.next = 10;
                                    break;
                                case 6:
                                    return t.prev = 6, t.t0 = t.catch(0), r((0, u.h7)("apiConfig")), t.abrupt("return");
                                case 10:
                                    if (o.ok) { t.next = 14; break }
                                    return console.log("Error fetch configs", o.statusText), r((0, u.h7)("apiConfig")), t.abrupt("return");
                                case 14:
                                    return t.next = 16, o.json();
                                case 16:
                                    c = t.sent, r("store/configs#fetchConfigs", (function(e) { e.configs.configs = c })), f(n()).haveFetchedConfig ? a.r(e) : r((function(e) { e("store/configs#markHaveFetchedConfig", (function(e) { e.configs.haveFetchedConfig = !0 })) }));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 6]
                        ])
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function v(e, t) {
                return function() {
                    var r = (0, c.Z)(s().mark((function r(n) {
                        return s().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    i.w(e, t).then((function(e) {!1 === e.ok && console.log("Error update configs", e.statusText) }), (function(e) { throw console.log("Error update configs", e), e })).then((function() { n(h(e)) })), n("storeConfigsOptimisticUpdateConfigs", (function(e) { e.configs.configs = p(p({}, e.configs.configs), t) }));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }
            var b = { configs: { port: 7890, "socks-port": 7891, "redir-port": 0, "allow-lan": !1, mode: "Rule", "log-level": "info" }, haveFetchedConfig: !1 }
        },
        38429: (e, t, r) => {
            "use strict";
            r.d(t, { Rv: () => c, Xs: () => i, AR: () => a, TH: () => u, E3: () => l });
            r(57327), r(82772);
            var n = r(22222),
                o = function(e) { return e.logs.logs },
                s = function(e) { return e.logs.tail },
                c = function(e) { return e.logs.searchText },
                i = (0, n.P1)(o, s, c, (function(e, t, r) {
                    for (var n = [], o = t; o >= 0; o--) n.push(e[o]);
                    if (300 === e.length)
                        for (var s = 299; s > t; s--) n.push(e[s]);
                    return "" === r ? n : n.filter((function(e) { return e.payload.toLowerCase().indexOf(r) >= 0 }))
                }));

            function a(e) { return function(t) { t("logsUpdateSearchText", (function(t) { t.logs.searchText = e.toLowerCase() })) } }

            function u(e) {
                return function(t, r) {
                    var n = r(),
                        c = o(n),
                        i = s(n),
                        a = i >= 299 ? 0 : i + 1;
                    c[a] = e, t("logsAppendLog", (function(e) { e.logs.tail = a }))
                }
            }
            var l = { searchText: "", logs: [], tail: -1 }
        },
        98236: (e, t, r) => {
            "use strict";

            function n(e) { return function(t) { t("openModal:" + e, (function(t) { t.modals[e] = !0 })) } }

            function o(e) { return function(t) { t("closeModal:" + e, (function(t) { t.modals[e] = !1 })) } }
            r.d(t, { h7: () => n, Mr: () => o, E3: () => s });
            var s = { apiConfig: !1 }
        },
        19943: (e, t, r) => {
            "use strict";
            r.d(t, { SJ: () => T, Nw: () => re, Ry: () => B, sj: () => A, yi: () => I, P_: () => L, a: () => U, DP: () => M, IA: () => q, E3: () => E, RE: () => ne, $3: () => X, hU: () => Y, kL: () => $ });
            r(82526), r(41817), r(57327), r(89554), r(91038), r(82772), r(66992), r(21249), r(47042), r(2707), r(49337), r(41539), r(88674), r(39714), r(54747), r(33948);
            var n = r(87757),
                o = r.n(n),
                s = r(96156),
                c = r(34699),
                i = (r(35666), r(92137)),
                a = r(2804),
                u = r(97750),
                l = r(97943);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var d = "/proxies";

            function h(e) { return v.apply(this, arguments) }

            function v() {
                return (v = (0, i.Z)(o().mark((function e(t) {
                    var r, n, s, c;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, l.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + d, s);
                            case 3:
                                return c = e.sent, e.next = 6, c.json();
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b(e, t, r) { return g.apply(this, arguments) }

            function g() {
                return (g = (0, i.Z)(o().mark((function e(t, r, n) {
                    var s, c, i, a, u;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = { name: n }, c = (0, l.g)(t), i = c.url, a = c.init, u = `${i}/proxies/${r}`, e.next = 5, fetch(u, f(f({}, a), {}, { method: "PUT", body: JSON.stringify(s) }));
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function x(e, t) { return y.apply(this, arguments) }

            function y() {
                return (y = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i, a, u = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = u.length > 2 && void 0 !== u[2] ? u[2] : "http://www.gstatic.com/generate_204", s = (0, l.g)(t), c = s.url, i = s.init, a = `${c}/proxies/${r}/delay?${"timeout=5000&url=" + n}`, e.next = 6, fetch(a, i);
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j(e) { return m.apply(this, arguments) }

            function m() {
                return (m = (0, i.Z)(o().mark((function e(t) {
                    var r, n, s, c;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, l.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + "/providers/proxies", s);
                            case 3:
                                if (404 !== (c = e.sent).status) { e.next = 6; break }
                                return e.abrupt("return", { providers: {} });
                            case 6:
                                return e.next = 8, c.json();
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function O(e, t) { return w.apply(this, arguments) }

            function w() {
                return (w = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, l.g)(t), s = n.url, c = n.init, i = f(f({}, c), {}, { method: "PUT" }), e.next = 4, fetch(s + "/providers/proxies/" + r, i);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function P(e, t) { return C.apply(this, arguments) }

            function C() {
                return (C = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, l.g)(t), s = n.url, c = n.init, i = f(f({}, c), {}, { method: "GET" }), e.next = 4, fetch(s + "/providers/proxies/" + r + "/healthcheck", i);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var k = r(97798);

            function Z(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) { if (!e) return; if ("string" == typeof e) return N(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r) return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return { s: o, n: function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function(e) { throw e }, f: o }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, c = !0,
                    i = !1;
                return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return c = e.done, e }, e: function(e) { i = !0, s = e }, f: function() { try { c || null == r.return || r.return() } finally { if (i) throw s } } }
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var E = { proxies: {}, delay: {}, groupNames: [], showModalClosePrevConns: !1 },
                R = function() { return null },
                T = ["Direct", "Fallback", "Reject", "Selector", "URLTest", "LoadBalance", "Unknown"],
                I = function(e) { return e.proxies.proxies },
                A = function(e) { return e.proxies.delay },
                L = function(e) { return e.proxies.groupNames },
                U = function(e) { return e.proxies.proxyProviders || [] },
                _ = function(e) { return e.proxies.dangleProxyNames },
                M = function(e) { return e.proxies.showModalClosePrevConns };

            function B(e) {
                return function() {
                    var t = (0, i.Z)(o().mark((function t(r, n) {
                        var s, i, a, u, l, p, f, d, v, b, g, x, y, m, O, w, P, C, k, N, S, E, R;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all([h(e), j(e)]);
                                case 2:
                                    for (s = t.sent, i = (0, c.Z)(s, 2), a = i[0], u = i[1], l = te(u.providers), p = l.providers, f = l.proxies, d = D(D({}, f), a.proxies), v = ee(d), b = (0, c.Z)(v, 2), g = b[0], x = b[1], y = A(n()), m = D({}, y), O = 0; O < x.length; O++) w = x[O], P = d[w] || { history: [] }, C = P.history, (k = C[C.length - 1]) && "number" == typeof k.delay && (m[w] = { number: k.delay });
                                    N = [], S = Z(x);
                                    try { for (S.s(); !(E = S.n()).done;) R = E.value, f[R] || N.push(R) } catch (e) { S.e(e) } finally { S.f() }
                                    r("store/proxies#fetchProxies", (function(e) { e.proxies.proxies = d, e.proxies.groupNames = g, e.proxies.delay = m, e.proxies.proxyProviders = p, e.proxies.dangleProxyNames = N }));
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function $(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, O(e, t);
                                case 3:
                                    r.next = 7;
                                    break;
                                case 5:
                                    r.prev = 5, r.t0 = r.catch(0);
                                case 7:
                                    n(B(e));
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [0, 5]
                        ])
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function F(e, t) { return z.apply(this, arguments) }

            function z() {
                return (z = (0, i.Z)(o().mark((function e(t, r) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, P(t, r);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                e.prev = 5, e.t0 = e.catch(0);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }

            function q(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, F(e, t);
                                case 2:
                                    return r.next = 4, n(B(e));
                                case 4:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function W() {
                return (W = (0, i.Z)(o().mark((function e(t, r, n) {
                    var s, c, i, a, l, p, f;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, u.$K(t);
                            case 2:
                                return (s = e.sent).ok || console.log("unable to fetch all connections", s.statusText), e.next = 6, s.json();
                            case 6:
                                c = e.sent, i = c.connections, a = [], l = Z(i);
                                try { for (l.s(); !(p = l.n()).done;)(f = p.value).chains.indexOf(r) > -1 && f.chains.indexOf(n) < 0 && a.push(f.id) } catch (e) { l.e(e) } finally { l.f() }
                                return e.next = 13, Promise.all(a.map((function(e) { return u.Sm(t, e).catch(R) })));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function J(e, t, r, n, o) { return G.apply(this, arguments) }

            function G() {
                return (G = (0, i.Z)(o().mark((function e(t, r, n, s, c) {
                    var i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, b(n, s, c);
                            case 3:
                                if (!1 !== e.sent.ok) { e.next = 6; break }
                                throw new Error("failed to switch proxy: res.statusText");
                            case 6:
                                e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(0), console.log(e.t0, "failed to swith proxy"), e.t0;
                            case 12:
                                t(B(n)), (0, k.xE)(r()) && (i = I(r()), H(n, i, { groupName: s, itemName: c }));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function V() { return function(e) { e("closeModalClosePrevConns", (function(e) { e.proxies.showModalClosePrevConns = !1 })) } }

            function H(e, t, r) {
                var n = function(e, t, r) {
                    for (var n, o = [r, t], s = r;
                        (n = e[s]) && n.now;) o.unshift(n.now), s = n.now;
                    return o
                }(t, r.groupName, r.itemName);
                ! function(e, t, r) { W.apply(this, arguments) }(e, r.groupName, n[0])
            }

            function Y(e, t, r) {
                return function() {
                    var n = (0, i.Z)(o().mark((function n(s, c) {
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    J(s, c, e, t, r).catch(R), s("store/proxies#switchProxy", (function(e) {
                                        var n = e.proxies.proxies;
                                        n[t] && n[t].now && (n[t].now = r)
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) { return n.apply(this, arguments) }
                }()
            }

            function Q(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n, s) {
                        var c, i, a, u, l, p, f;
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return c = (0, k.Bg)(s()), r.next = 3, x(e, t, c);
                                case 3:
                                    return i = r.sent, a = "", !1 === i.ok && (a = i.statusText), r.next = 8, i.json();
                                case 8:
                                    u = r.sent, l = u.delay, p = A(s()), f = D(D({}, p), {}, {
                                        [t]: { error: a, number: l }
                                    }), n("requestDelayForProxyOnce", (function(e) { e.proxies.delay = f }));
                                case 13:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e, t) { return r.apply(this, arguments) }
                }()
            }

            function K(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, n(Q(e, t));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function X(e) {
                return function() {
                    var t = (0, i.Z)(o().mark((function t(r, n) {
                        var s, c, i, a, u;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = _(n()), t.next = 3, Promise.all(s.map((function(t) { return r(K(e, t)) })));
                                case 3:
                                    c = U(n()), i = Z(c), t.prev = 5, i.s();
                                case 7:
                                    if ((a = i.n()).done) { t.next = 13; break }
                                    return u = a.value, t.next = 11, F(e, u.name);
                                case 11:
                                    t.next = 7;
                                    break;
                                case 13:
                                    t.next = 18;
                                    break;
                                case 15:
                                    t.prev = 15, t.t0 = t.catch(5), i.e(t.t0);
                                case 18:
                                    return t.prev = 18, i.f(), t.finish(18);
                                case 21:
                                    return t.next = 23, r(B(e));
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [5, 15, 18, 21]
                        ])
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function ee(e) {
                var t, r = [],
                    n = [];
                for (var o in e) {
                    var s = e[o];
                    s.all && Array.isArray(s.all) ? (r.push(o), "GLOBAL" === o && (t = s.all)) : T.indexOf(s.type) < 0 && n.push(o)
                }
                return t && (t.push("GLOBAL"), r = r.map((function(e) { return [t.indexOf(e), e] })).sort((function(e, t) { return e[0] - t[0] })).map((function(e) { return e[1] }))), [r, n]
            }

            function te(e) {
                for (var t = Object.keys(e), r = [], n = {}, o = 0; o < t.length; o++) {
                    var s = e[t[o]];
                    if ("default" !== s.name && "Compatible" !== s.vehicleType) {
                        for (var c = s.proxies, i = [], a = 0; a < c.length; a++) {
                            var u = c[a];
                            n[u.name] = u, i.push(u.name)
                        }
                        s.proxies = i, r.push(s)
                    }
                }
                return { providers: r, proxies: n }
            }
            var re = {
                    requestDelayForProxies: function(e, t) {
                        return function() {
                            var r = (0, i.Z)(o().mark((function r(n, s) {
                                var c, i;
                                return o().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return c = _(s()), i = t.filter((function(e) { return c.indexOf(e) > -1 })).map((function(t) { return n(K(e, t)) })), r.next = 4, Promise.all(i);
                                        case 4:
                                            return r.next = 6, n(B(e));
                                        case 6:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function(e, t) { return r.apply(this, arguments) }
                        }()
                    },
                    closeModalClosePrevConns: V,
                    closePrevConnsAndTheModal: function(e) {
                        return function() {
                            var t = (0, i.Z)(o().mark((function t(r, n) {
                                var s, c, i, a;
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (c = n(), i = null === (s = c.proxies.switchProxyCtx) || void 0 === s ? void 0 : s.to) { t.next = 5; break }
                                            return r((function(e) { e("closeModalClosePrevConns", (function(e) { e.proxies.showModalClosePrevConns = !1 })) })), t.abrupt("return");
                                        case 5:
                                            a = c.proxies.proxies, H(e, a, i), r("closePrevConnsAndTheModal", (function(e) { e.proxies.showModalClosePrevConns = !1, e.proxies.switchProxyCtx = void 0 }));
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, r) { return t.apply(this, arguments) }
                        }()
                    }
                },
                ne = (0, a.cn)({ key: "proxyFilterText", default: "" })
        },
        93621: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            const n = { overlay: "_2ueF0jmjym", content: "UZ5fqyDCOb" }
        }
    },
    function(e) {
        "use strict";
        var t;
        t = e.x, e.x = () => { var r = t(); return [180, 331, 170, 869, 641, 237, 981, 507, 497, 736].map(e.E), r }
    },
    [
        [97698, 537, 138, 977, 935, 545, 486, 623]
    ]
]);
//# sourceMappingURL=app.d58caec1b2e4b2f6f6f4.js.map
=======
(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [143], {
        50497: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => p, w: () => h });
            r(82526), r(57327), r(89554), r(49337), r(41539), r(88674), r(54747);
            var n = r(96156),
                o = r(87757),
                s = r.n(o),
                c = (r(35666), r(92137)),
                i = r(97943);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((
                        function(t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var l = "/configs";

            function p(e) { return f.apply(this, arguments) }

            function f() {
                return (f = (0, c.Z)(s().mark((function e(t) {
                    var r, n, o;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, o = r.init, e.next = 3, fetch(n + l, o);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function d(e) { return "socks-port" in e && (e["socket-port"] = e["socks-port"]), e }

            function h(e, t) { return v.apply(this, arguments) }

            function v() {
                return (v = (0, c.Z)(s().mark((function e(t, r) {
                    var n, o, c, a;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, i.g)(t), o = n.url, c = n.init, a = JSON.stringify(d(r)), e.next = 4, fetch(o + l, u(u({}, c), {}, { body: a, method: "PATCH" }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        97750: (e, t, r) => {
            "use strict";
            r.d(t, { rQ: () => d, PI: () => v, $K: () => g, Sm: () => y });
            r(82526), r(57327), r(89554), r(82772), r(40561), r(49337), r(41539), r(88674), r(54747);
            var n = r(87757),
                o = r.n(n),
                s = r(96156),
                c = (r(35666), r(92137)),
                i = r(97943);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var l, p = "/connections",
                f = [];

            function d(e, t) {
                if (1 === l && t) return h(t);
                l = 1;
                var r = (0, i.P)(e, p),
                    n = new WebSocket(r);
                return n.addEventListener("error", (function() { return l = 3 })), n.addEventListener("message", (function(e) {
                    return function(e) {
                        var t;
                        try { t = JSON.parse(e) } catch (t) { console.log("JSON.parse error", JSON.parse(e)) }
                        f.forEach((function(e) { return e(t) }))
                    }(e.data)
                })), t ? h(t) : void 0
            }

            function h(e) {
                return f.push(e),
                    function() {
                        var t = f.indexOf(e);
                        f.splice(t, 1)
                    }
            }

            function v(e) { return b.apply(this, arguments) }

            function b() {
                return (b = (0, c.Z)(o().mark((function e(t) {
                    var r, n, s;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + p, u(u({}, s), {}, { method: "DELETE" }));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function g(e) { return x.apply(this, arguments) }

            function x() {
                return (x = (0, c.Z)(o().mark((function e(t) {
                    var r, n, s;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, i.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + p, u({}, s));
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y(e, t) { return j.apply(this, arguments) }

            function j() {
                return (j = (0, c.Z)(o().mark((function e(t, r) {
                    var n, s, c, a;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, i.g)(t), s = n.url, c = n.init, a = `${s}${p}/${r}`, e.next = 4, fetch(a, u(u({}, c), {}, { method: "DELETE" }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        10877: (e, t, r) => {
            "use strict";
            r.d(t, { r: () => d });
            r(89554), r(82772), r(40561), r(41539), r(88674), r(23123), r(54747);
            var n, o = r(97943),
                s = "/traffic",
                c = new TextDecoder("utf-8"),
                i = 150,
                a = {
                    labels: Array(i),
                    up: Array(i),
                    down: Array(i),
                    size: i,
                    subscribers: [],
                    appendData(e) {
                        this.up.push(e.up), this.down.push(e.down);
                        var t = new Date,
                            r = "" + t.getMinutes() + t.getSeconds();
                        this.labels.push(r), this.up.length > this.size && this.up.shift(), this.down.length > this.size && this.down.shift(), this.labels.length > this.size && this.labels.shift(), this.subscribers.forEach((function(t) { return t(e) }))
                    },
                    subscribe(e) {
                        var t = this;
                        return this.subscribers.push(e),
                            function() {
                                var r = t.subscribers.indexOf(e);
                                t.subscribers.splice(r, 1)
                            }
                    }
                },
                u = !1,
                l = "";

            function p(e) { a.appendData(JSON.parse(e)) }

            function f(e) { return e.read().then((function(t) { for (var r = t.done, n = t.value, o = c.decode(n, { stream: !r }), s = (l += o).split("\n"), i = s[s.length - 1], a = 0; a < s.length - 1; a++) p(s[a]); return r ? (p(i), l = "", console.log("GET /traffic streaming done"), void(u = !1)) : (l = i, f(e)) })) }

            function d(e) {
                if (u || 1 === n) return a;
                n = 1;
                var t = (0, o.P)(e, s),
                    r = new WebSocket(t);
                return r.addEventListener("error", (function(e) { n = 3 })), r.addEventListener("close", (function(t) {
                    n = 3,
                        function(e) {
                            if (u) return a;
                            u = !0;
                            var t = (0, o.g)(e),
                                r = t.url,
                                n = t.init;
                            fetch(r + s, n).then((function(e) { e.ok ? f(e.body.getReader()) : u = !1 }), (function(e) { console.log("fetch /traffic error", e), u = !1 }))
                        }(e)
                })), r.addEventListener("message", (function(e) { p(e.data) })), a
            }
        },
        97698: (e, t, r) => {
            "use strict";
            var n = r(85893),
                o = r(67294),
                s = r(73935),
                c = r(83253),
                i = r.n(c),
                a = (r(57327), r(41539), r(88674), r(39711)),
                u = r(96974),
                l = r(2804),
                p = r(46702),
                f = r(47727),
                d = r(87757),
                h = r.n(d),
                v = (r(35666), r(92137)),
                b = r(97943);

            function g(e, t) { return x.apply(this, arguments) }

            function x() {
                return (x = (0, v.Z)(h().mark((function e(t, r) {
                    var n, o, s, c, i;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = {}, e.prev = 1, o = (0, b.g)(r), s = o.url, c = o.init, e.next = 5, fetch(s + t, c);
                            case 5:
                                if (!(i = e.sent).ok) { e.next = 10; break }
                                return e.next = 9, i.json();
                            case 9:
                                n = e.sent;
                            case 10:
                                e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(1), console.log("failed to fetch " + t, e.t0);
                            case 15:
                                return e.abrupt("return", n);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 12]
                    ])
                })))).apply(this, arguments)
            }
            var y = r(68912),
                j = r(55679),
                m = r(97798);
            const O = "cHbZy_rAHf",
                w = "_2SNe_x81Ib",
                P = "LUI6m76ply";

            function C(e) {
                var t = e.name,
                    r = e.link,
                    o = e.version;
                return (0, n.jsxs)("div", { className: O, children: [(0, n.jsx)("h2", { children: t }), (0, n.jsxs)("p", { children: [(0, n.jsx)("span", { children: "Version " }), (0, n.jsx)("span", { className: w, children: o })] }), (0, n.jsx)("p", { children: (0, n.jsxs)("a", { className: P, href: r, target: "_blank", rel: "noopener noreferrer", children: [(0, n.jsx)(p.Z, { size: 20 }), (0, n.jsx)("span", { children: "Source" })] }) })] })
            }
            var k = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) { var t = (0, f.aM)(["/version", e.apiConfig], g, { suspense: !0 }).data; return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(y.Z, { title: "About" }), t && t.version ? (0, n.jsx)(C, { name: "Clash", version: t.version, link: "https://github.com/Dreamacro/clash" }) : null, (0, n.jsx)(C, { name: "Yacd", version: "0.2.8", link: "https://github.com/haishanh/yacd" })] }) })),
                Z = r(79912),
                N = r(38429),
                S = r(98236),
                D = r(19943),
                E = { app: (0, m.E3)(), modals: S.E3, configs: Z.E3, proxies: D.E3, logs: N.E3 },
                R = { selectChartStyleIndex: m.Pw, updateAppConfig: m.N, app: { updateCollapsibleIsOpen: m.iB, updateAppConfig: m.N, removeClashAPIConfig: m.aj, selectClashAPIConfig: m.O4 }, proxies: D.Nw },
                T = (r(66992), r(33948), r(60285), r(34699)),
                I = r(50497),
                A = (r(21249), r(86010)),
                L = r(44309),
                U = r(12590),
                _ = r(78268),
                M = o.useState,
                B = o.useCallback;
            const $ = { ul: "_1MP9tbO2C9", li: "_39O4-s-qNw", close: "_3U13UgV7Z1", eye: "ipx6os2H89", hasSecret: "_3GP8CDySTd", url: "PK8GjRW5ZI", secret: "_2-iwpHoCB6", btn: "S1-PNvCcRP" };
            var F = (0, j.$j)((function(e) { return { apiConfigs: (0, m.AJ)(e), selectedClashAPIConfigIndex: (0, m.I4)(e) } }))((function(e) {
                var t = e.apiConfigs,
                    r = e.selectedClashAPIConfigIndex,
                    s = (0, j.WX)().app,
                    c = s.removeClashAPIConfig,
                    i = s.selectClashAPIConfig,
                    a = o.useCallback((function(e) { c(e) }), [c]),
                    u = o.useCallback((function(e) { i(e) }), [i]);
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("ul", {
                        className: $.ul,
                        children: t.map((function(e, t) {
                            return (0, n.jsx)("li", {
                                className: (0, A.Z)($.li, {
                                    [$.hasSecret]: e.secret,
                                    [$.isSelected]: t === r
                                }),
                                children: (0, n.jsx)(z, { disableRemove: t === r, baseURL: e.baseURL, secret: e.secret, onRemove: a, onSelect: u })
                            }, e.baseURL + e.secret)
                        }))
                    })
                })
            }));

            function z(e) {
                var t = e.baseURL,
                    r = e.secret,
                    s = e.disableRemove,
                    c = e.onRemove,
                    i = e.onSelect,
                    a = function() {
                        var e = M(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]),
                            t = (0, T.Z)(e, 2),
                            r = t[0],
                            n = t[1],
                            o = B((function() { return n((function(e) { return !e })) }), []);
                        return [r, o]
                    }(),
                    u = (0, T.Z)(a, 2),
                    l = u[0],
                    p = u[1],
                    f = l ? L.Z : U.Z,
                    d = o.useCallback((function(e) { e.stopPropagation() }), []);
                return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(q, { disabled: s, onClick: function() { return c({ baseURL: t, secret: r }) }, className: $.close, children: (0, n.jsx)(_.Z, { size: 20 }) }), (0, n.jsx)("span", { className: $.url, tabIndex: 0, role: "button", onClick: function() { return i({ baseURL: t, secret: r }) }, onKeyUp: d, children: t }), (0, n.jsx)("span", {}), r ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("span", { className: $.secret, children: l ? r : "***" }), (0, n.jsx)(q, { onClick: p, className: $.eye, children: (0, n.jsx)(f, { size: 20 }) })] }) : null] })
            }

            function q(e) {
                var t = e.children,
                    r = e.onClick,
                    o = e.className,
                    s = e.disabled;
                return (0, n.jsx)("button", { disabled: s, className: (0, A.Z)(o, $.btn), onClick: r, children: t })
            }
            const W = "_2-70itbuF1",
                J = "JKE-0c5hxF",
                G = "o2VhY_cs6Z",
                V = "_3QDGxJ_pWs",
                H = "tTZzzcEsTA",
                Y = "_2cCgtjpQZP",
                Q = "_3OT00Mqmrw";
            var K = r(25904),
                X = (r(82526), r(89554), r(49337), r(54747), r(96156)),
                ee = r(17375),
                te = r(45697),
                re = r.n(te);
            const ne = "_2uN43zExEi",
                oe = "_2gQ0j5OHC8";

            function se(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? se(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var ie = o.useCallback;

            function ae(e) {
                var t = e.id,
                    r = e.label,
                    o = e.value,
                    s = e.onChange,
                    c = (0, ee.Z)(e, ["id", "label", "value", "onChange"]),
                    i = ie((function(e) { return s(e) }), [s]),
                    a = (0, A.Z)({
                        [oe]: "string" == typeof o && "" !== o
                    });
                return (0, n.jsxs)("div", { className: ne, children: [(0, n.jsx)("input", ce({ id: t, value: o, onChange: i }, c)), (0, n.jsx)("label", { htmlFor: t, className: a, children: r })] })
            }
            ae.propTypes = { value: re().oneOfType([re().string, re().number]), type: re().oneOf(["text", "number"]), onChange: re().func, id: re().string, label: re().string };
            var ue = r(3835),
                le = o.useState,
                pe = o.useRef,
                fe = o.useCallback;
            const de = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = le(""),
                    o = (0, T.Z)(r, 2),
                    s = o[0],
                    c = o[1],
                    i = le(""),
                    a = (0, T.Z)(i, 2),
                    u = a[0],
                    l = a[1],
                    p = le(""),
                    f = (0, T.Z)(p, 2),
                    d = f[0],
                    h = f[1],
                    v = pe(!1),
                    b = pe(null),
                    g = fe((function(e) {
                        v.current = !0, h("");
                        var t = e.target,
                            r = t.name,
                            n = t.value;
                        switch (r) {
                            case "baseURL":
                                c(n);
                                break;
                            case "secret":
                                l(n);
                                break;
                            default:
                                throw new Error("unknown input name " + r)
                        }
                    }), []),
                    x = fe((function() {
                        (function(e) { return he.apply(this, arguments) })({ baseURL: s, secret: u }).then((function(e) { 0 !== e[0] ? h(e[1]) : t((0, m.sv)({ baseURL: s, secret: u })) }))
                    }), [s, u, t]),
                    y = fe((function(e) { e.target instanceof Element && (!e.target.tagName || "INPUT" !== e.target.tagName.toUpperCase()) || "Enter" === e.key && x() }), [x]);
                return (0, n.jsxs)("div", { className: W, ref: b, onKeyDown: y, children: [(0, n.jsx)("div", { className: J, children: (0, n.jsx)("div", { className: G, children: (0, n.jsx)(ue.Z, { width: 160, height: 160 }) }) }), (0, n.jsx)("div", { className: V, children: (0, n.jsxs)("div", { className: H, children: [(0, n.jsx)(ae, { id: "baseURL", name: "baseURL", label: "Clash 服务器:配置端口", type: "text", value: s, onChange: g }), (0, n.jsx)(ae, { id: "secret", name: "secret", label: "密钥（可选）", value: u, type: "text", onChange: g })] }) }), (0, n.jsx)("div", { className: Y, children: d || null }), (0, n.jsx)("div", { className: Q, children: (0, n.jsx)(K.Z, { label: "添加", onClick: x }) }), (0, n.jsx)("div", { style: { height: 20 } }), (0, n.jsx)(F, {})] })
            }));

            function he() {
                return (he = (0, v.Z)(h().mark((function e(t) {
                    var r, n;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.prev = 0, new URL(t.baseURL), e.next = 11;
                                break;
                            case 4:
                                if (e.prev = 4, e.t0 = e.catch(0), !t.baseURL) { e.next = 10; break }
                                if ("http://" === (r = t.baseURL.substring(0, 7)) || "https:/" === r) { e.next = 10; break }
                                return e.abrupt("return", [1, "Must starts with http:// or https://"]);
                            case 10:
                                return e.abrupt("return", [1, "Invalid URL"]);
                            case 11:
                                return e.prev = 11, e.next = 14, (0, I.T)(t);
                            case 14:
                                if (!((n = e.sent).status > 399)) { e.next = 17; break }
                                return e.abrupt("return", [1, n.statusText]);
                            case 17:
                                return e.abrupt("return", [0]);
                            case 20:
                                return e.prev = 20, e.t1 = e.catch(11), e.abrupt("return", [1, "Failed to connect"]);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 4],
                        [11, 20]
                    ])
                })))).apply(this, arguments)
            }
            var ve = { 0: { message: "Browser not supported!", detail: 'This browser does not support "fetch", please choose another one.' }, default: { message: "Oops, something went wrong!" } };
            const be = "_2vs8ks4GvR",
                ge = "Z8vSJz0PbL",
                xe = "EWfRQXOK8M";
            var ye = r(93621);

            function je(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? je(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : je(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }

            function Oe(e) {
                var t = e.isOpen,
                    r = e.onRequestClose,
                    o = e.className,
                    s = e.overlayClassName,
                    c = e.children,
                    a = (0, ee.Z)(e, ["isOpen", "onRequestClose", "className", "overlayClassName", "children"]),
                    u = (0, A.Z)(o, ye.Z.content),
                    l = (0, A.Z)(s, ye.Z.overlay);
                return (0, n.jsx)(i(), me(me({ isOpen: t, onRequestClose: r, className: u, overlayClassName: l }, a), {}, { children: c }))
            }
            Oe.propTypes = { isOpen: re().bool.isRequired, onRequestClose: re().func.isRequired, children: re().node.isRequired, className: re().string, overlayClassName: re().string };
            const we = o.memo(Oe);
            var Pe = o.useCallback,
                Ce = o.useEffect;
            const ke = (0, j.$j)((function(e) { return { modals: e.modals, apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = e.apiConfig,
                    o = e.modals;
                if (!window.fetch) {
                    var s = ve[0].detail,
                        c = new Error(s);
                    throw c.code = 0, c
                }
                var i = Pe((function() { t((0, S.Mr)("apiConfig")) }), [t]);
                return Ce((function() { t((0, Z.Tj)(r)) }), [t, r]), (0, n.jsx)(we, { isOpen: o.apiConfig, className: be, overlayClassName: xe, shouldCloseOnOverlayClick: !1, shouldCloseOnEsc: !1, onRequestClose: i, children: (0, n.jsx)("div", { className: ge, children: (0, n.jsx)(de, {}) }) })
            }));
            r(92222), r(12419), r(39714);
            var Ze = r(6610),
                Ne = r(5991),
                Se = r(63349),
                De = r(65255),
                Ee = r(86089),
                Re = r(77608);
            const Te = "_113JVByWGF",
                Ie = "_1m2ZsnzFvt",
                Ae = "_3TKFOM4Tgj";

            function Le() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o;
                return (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: r, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
            }
            Le.propTypes = { width: re().number, height: re().number };

            function Ue(e) {
                var t = e.message,
                    r = e.detail;
                return (0, n.jsxs)("div", { className: Te, children: [(0, n.jsx)("div", { className: Ie, children: (0, n.jsx)(ue.Z, { width: 150, height: 150 }) }), t ? (0, n.jsx)("h1", { children: t }) : null, r ? (0, n.jsx)("p", { children: r }) : null, (0, n.jsx)("p", { children: (0, n.jsxs)("a", { className: Ae, href: "https://github.com/haishanh/yacd/issues", children: [(0, n.jsx)(Le, { width: 16, height: 16 }), "haishanh/yacd"] }) })] })
            }
            Ue.propTypes = { message: re().string };
            const _e = Ue;

            function Me(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var r, n = (0, Re.Z)(e);
                    if (t) {
                        var o = (0, Re.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, Ee.Z)(this, r)
                }
            }
            var Be = function(e) {
                (0, De.Z)(r, e);
                var t = Me(r);

                function r() {
                    var e;
                    (0, Ze.Z)(this, r);
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, X.Z)((0, Se.Z)(e), "state", { error: null }), e
                }
                return (0, Ne.Z)(r, [{
                    key: "render",
                    value: function() {
                        if (this.state.error) {
                            var e = (o = this.state.error, "number" == typeof(s = o.code) ? ve[s] : ve.default),
                                t = e.message,
                                r = e.detail;
                            return (0, n.jsx)(_e, { message: t, detail: r })
                        }
                        return this.props.children;
                        var o, s
                    }
                }], [{ key: "getDerivedStateFromError", value: function(e) { return { error: e } } }]), r
            }(o.Component);
            (0, X.Z)(Be, "propTypes", { children: re().node });
            const $e = Be,
                Fe = { root: "_2kr0S-YLqE" },
                ze = "_12V5kDiPEH",
                qe = "_2FcudZSVil";
            var We = function(e) {
                var t = e.height,
                    r = t ? { height: t } : {};
                return (0, n.jsx)("div", { className: ze, style: r, children: (0, n.jsx)("div", { className: qe }) })
            };
            We.propTypes = { height: re().string };
            const Je = We;
            var Ge = r(10877),
                Ve = r(82759),
                He = r(36723);

            function Ye(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ye(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ye(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var Ke = { position: "relative", maxWidth: 1e3 };
            const Xe = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e), selectedChartStyleIndex: (0, m.AM)(e) } }))((function(e) {
                var t = e.apiConfig,
                    r = e.selectedChartStyleIndex,
                    s = He.A8.read(),
                    c = (0, Ge.r)(t),
                    i = (0, o.useMemo)((function() { return { labels: c.labels, datasets: [Qe(Qe(Qe({}, He.IE), He.Eu[r].up), {}, { label: "上行速度", data: c.up }), Qe(Qe(Qe({}, He.IE), He.Eu[r].down), {}, { label: "下行速度", data: c.down })] } }), [c, r]);
                return (0, Ve.Z)(s, "trafficChart", i, c), (0, n.jsx)("div", { style: Ke, children: (0, n.jsx)("canvas", { id: "trafficChart" }) })
            }));
            var et = r(97750),
                tt = r(92375);
            const rt = "_2n4kL7wLDR";
            var nt = o.useState,
                ot = o.useEffect,
                st = o.useCallback;
            const ct = (0, j.$j)((function(e) { return { apiConfig: (0, m.Y$)(e) } }))((function(e) {
                var t = e.apiConfig,
                    r = function(e) {
                        var t = nt({ upStr: "0 B/s", downStr: "0 B/s" }),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            o = r[1];
                        return ot((function() { return (0, Ge.r)(e).subscribe((function(e) { return o({ upStr: (0, tt.Z)(e.up) + "/s", downStr: (0, tt.Z)(e.down) + "/s" }) })) }), [e]), n
                    }(t),
                    o = r.upStr,
                    s = r.downStr,
                    c = function(e) {
                        var t = nt({ upTotal: "0 B", dlTotal: "0 B", connNumber: 0 }),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            o = r[1],
                            s = st((function(e) {
                                var t = e.downloadTotal,
                                    r = e.uploadTotal,
                                    n = e.connections;
                                o({ upTotal: (0, tt.Z)(r), dlTotal: (0, tt.Z)(t), connNumber: n.length })
                            }), [o]);
                        return ot((function() { return et.rQ(e, s) }), [e, s]), n
                    }(t),
                    i = c.upTotal,
                    a = c.dlTotal,
                    u = c.connNumber;
                return (0, n.jsxs)("div", { className: rt, children: [(0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "上传" }), (0, n.jsx)("div", { children: o })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "下载" }), (0, n.jsx)("div", { children: s })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "总上传数据量" }), (0, n.jsx)("div", { children: i })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "总下载数据量" }), (0, n.jsx)("div", { children: a })] }), (0, n.jsxs)("div", { className: "sec", children: [(0, n.jsx)("div", { children: "活跃连接" }), (0, n.jsx)("div", { children: u })] })] })
            }));

            function it() { return (0, n.jsxs)("div", { children: [(0, n.jsx)(y.Z, { title: "概览" }), (0, n.jsxs)("div", { className: Fe.root, children: [(0, n.jsx)("div", { children: (0, n.jsx)(ct, {}) }), (0, n.jsx)("div", { className: Fe.chart, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(Je, { height: "200px" }), children: (0, n.jsx)(Xe, {}) }) })] })] }) }
            const at = "_2fg1R7Zu62";
            const ut = function() { return (0, n.jsx)("div", { className: at, children: (0, n.jsx)(ue.Z, { width: 280, height: 280, animate: !0, c0: "transparent", c1: "#646464" }) }) },
                lt = "_1X99PPGcn7",
                pt = "_2oV8uPP0dj";
            var ft = r(73973),
                dt = r(59467),
                ht = r(88757);
            const vt = "_3sTuXodYya",
                bt = "_1WdrygzFVZ",
                gt = "q9nBJwAvlz",
                xt = "_3yqSXpep4D",
                yt = "_3wqPc_btNi",
                jt = "_2sd59kze-t",
                mt = "_2o6aUGu--S",
                Ot = "_11NITPe4W7",
                wt = "_1kzEILbWHq";
            var Pt = o.useCallback,
                Ct = { activity: dt.o_x, globe: dt.XUT, command: dt.e71, file: dt.NFo, settings: dt.cKh, link: dt.wWA },
                kt = o.memo((function(e) {
                    var t = e.isActive,
                        r = e.to,
                        o = e.iconId,
                        s = e.labelText,
                        c = Ct[o],
                        i = (0, A.Z)(xt, t ? yt : null);
                    return (0, n.jsxs)(a.rU, { to: r, className: i, children: [(0, n.jsx)(c, {}), (0, n.jsx)("div", { className: jt, children: s })] })
                }));
            kt.propTypes = { isActive: re().bool.isRequired, to: re().string.isRequired, iconId: re().string, labelText: re().string };
            var Zt = [{ to: "/", iconId: "activity", labelText: "概览" }, { to: "/proxies", iconId: "globe", labelText: "节点服务器" }, { to: "/rules", iconId: "command", labelText: "代理规则" }, { to: "/connections", iconId: "link", labelText: "连接" }, { to: "/configs", iconId: "settings", labelText: "设置" }, { to: "/logs", iconId: "file", labelText: "日志" }];

            function Nt() { var e = ht.U.read().motion; return (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)(e.path, { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", initial: { rotate: -30 }, animate: { rotate: 0 }, transition: { duration: .7 } }) }) }

            function St() { var e = ht.U.read().motion; return (0, n.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, n.jsx)("circle", { cx: "12", cy: "12", r: "5" }), (0, n.jsxs)(e.g, { initial: { scale: .8 }, animate: { scale: 1 }, transition: { duration: .7 }, children: [(0, n.jsx)("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), (0, n.jsx)("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), (0, n.jsx)("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), (0, n.jsx)("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), (0, n.jsx)("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), (0, n.jsx)("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), (0, n.jsx)("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), (0, n.jsx)("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })] })] }) }
            const Dt = (0, j.$j)((function(e) { return { theme: (0, m.gh)(e) } }))((function(e) {
                var t = e.dispatch,
                    r = e.theme,
                    o = (0, u.TH)(),
                    s = Pt((function() { t((0, m.tj)()) }), [t]);
                return (0, n.jsxs)("div", {
                    className: vt,
                    children: [(0, n.jsx)("div", { className: bt }), (0, n.jsx)("div", {
                        className: gt,
                        children: Zt.map((function(e) {
                            var t = e.to,
                                r = e.iconId,
                                s = e.labelText;
                            return (0, n.jsx)(kt, { to: t, isActive: o.pathname === t, iconId: r, labelText: s }, t)
                        }))
                    }), (0, n.jsxs)("div", { className: mt, children: [(0, n.jsx)("button", { className: (0, A.Z)(Ot, wt), onClick: s, children: "light" === r ? (0, n.jsx)(Nt, {}) : (0, n.jsx)(St, {}) }), (0, n.jsx)(a.rU, { to: "/about", className: Ot, children: (0, n.jsx)(ft.Z, { size: 20 }) })] })]
                })
            }));
            var Et = r(34588),
                Rt = r(65182),
                Tt = r(21820),
                It = r(99175),
                At = r(68285);

            function Lt(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var r, n = (0, Re.Z)(e);
                    if (t) {
                        var o = (0, Re.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, Ee.Z)(this, r)
                }
            }

            function Ut(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ut(Object(r), !0).forEach((function(t) {
                        (0, X.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var Mt = function() {},
                Bt = { padding: "20px 0" },
                $t = [{ label: "Global", value: "Global" }, { label: "Rule", value: "Rule" }, { label: "Direct", value: "Direct" }],
                Ft = function(e) {
                    var t = e.children,
                        r = e.style;
                    return (0, n.jsx)("div", { style: _t(_t({}, Bt), r), children: t })
                };

            function zt() {
                var e = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = o.useState(e),
                            r = (0, T.Z)(t, 2),
                            n = r[0],
                            s = r[1],
                            c = o.useCallback((function() { s((function(e) { return !e })) }), []);
                        return [n, c]
                    }(!1),
                    t = (0, T.Z)(e, 2),
                    r = t[0],
                    s = t[1];
                return (0, n.jsx)(It.Z, { checked: r, onChange: s })
            }
            o.PureComponent;
            var qt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(331), r.e(170)]).then(r.bind(r, 33380)) })),
                Wt = (0, o.lazy)((function() { return r.e(497).then(r.bind(r, 42444)) })),
                Jt = (0, o.lazy)((function() { return Promise.all([r.e(237), r.e(507)]).then(r.bind(r, 84148)) })),
                Gt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(869), r.e(641)]).then(r.bind(r, 22849)) })),
                Vt = (0, o.lazy)((function() { return Promise.all([r.e(180), r.e(237), r.e(981)]).then(r.bind(r, 76706)) })),
                Ht = [{ path: "/", element: (0, n.jsx)(it, {}) }, { path: "/connections", element: (0, n.jsx)(qt, {}) }, { path: "/configs", element: (0, n.jsx)(Wt, {}) }, { path: "/logs", element: (0, n.jsx)(Jt, {}) }, { path: "/proxies", element: (0, n.jsx)(Gt, {}) }, { path: "/rules", element: (0, n.jsx)(Vt, {}) }, { path: "/about", element: (0, n.jsx)(k, {}) }, !1].filter(Boolean);

            function Yt() { return (0, u.V$)(Ht) }

            function Qt() { return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ke, {}), (0, n.jsx)(Dt, {}), (0, n.jsx)("div", { className: pt, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(ut, {}), children: (0, n.jsx)(Yt, {}) }) })] }) }

            function Kt() { return (0, u.V$)([{ path: "/backend", element: (0, n.jsx)(de, {}) }, { path: "*", element: (0, n.jsx)(Qt, {}) }]) }
            const Xt = function() { return (0, n.jsx)($e, { children: (0, n.jsx)(l.Wh, { children: (0, n.jsx)(j.ZP, { initialState: E, actions: R, children: (0, n.jsx)(a.UT, { children: (0, n.jsx)("div", { className: lt, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(ut, {}), children: (0, n.jsx)(Kt, {}) }) }) }) }) }) }) };
            var er = document.getElementById("app");
            i().setAppElement(er), s.unstable_createRoot(er).render((0, n.jsx)(Xt, {})), console.log("Checkout the repo: https://github.com/haishanh/yacd"), console.log("Version:", "0.2.8")
        },
        25904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => y });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(17375),
                s = r(85893),
                c = r(86010),
                i = r(67294);
            const a = "_796AqwOFs_",
                u = "_1bLZvI40oA",
                l = "_1SrCTG7yDt",
                p = "_39VuJRXAmL";
            var f = r(21820);

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var v = i.memo,
                b = i.forwardRef,
                g = i.useCallback;

            function x(e) {
                var t = e.children,
                    r = e.label,
                    n = e.text,
                    o = e.start;
                return (0, s.jsxs)(s.Fragment, { children: [o ? (0, s.jsx)("span", { className: l, children: "function" == typeof o ? o() : o }) : null, t || r || n] })
            }
            const y = v(b((function(e, t) {
                var r = e.onClick,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    l = e.isLoading,
                    d = e.kind,
                    v = void 0 === d ? "primary" : d,
                    b = e.className,
                    y = (0, o.Z)(e, ["onClick", "disabled", "isLoading", "kind", "className"]),
                    j = g((function(e) { l || r && r(e) }), [l, r]),
                    m = (0, c.Z)(a, {
                        [u]: "minimal" === v
                    }, b);
                return (0, s.jsx)("button", { className: m, ref: t, onClick: j, disabled: i, children: l ? (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("span", { style: { display: "inline-flex", opacity: 0 }, children: (0, s.jsx)(x, h({}, y)) }), (0, s.jsx)("span", { className: p, children: (0, s.jsx)(f.M, {}) })] }) : (0, s.jsx)(x, h({}, y)) })
            })))
        },
        68912: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var n = r(85893),
                o = r(45697),
                s = r.n(o),
                c = r(67294);
            const i = "_24ddJm1Q5s",
                a = "B4QNkMu-0t";

            function u(e) { var t = e.title; return (0, n.jsx)("div", { className: i, children: (0, n.jsx)("h1", { className: a, children: t }) }) }
            u.propTypes = { title: s().string.isRequired };
            const l = c.memo(u)
        },
        65182: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => x, Z: () => g });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(34699),
                o = r(17375),
                s = r(96156),
                c = r(85893),
                i = r(45697),
                a = r.n(i),
                u = r(67294);
            const l = "_2DECxrOsTa";

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var d = u.useState,
                h = u.useRef,
                v = u.useEffect,
                b = u.useCallback;

            function g(e) { return (0, c.jsx)("input", f({ className: l }, e)) }

            function x(e) {
                var t = e.value,
                    r = (0, o.Z)(e, ["value"]),
                    s = d(t),
                    i = (0, n.Z)(s, 2),
                    a = i[0],
                    u = i[1],
                    p = h(t);
                v((function() { p.current !== t && u(t), p.current = t }), [t]);
                var g = b((function(e) { return u(e.target.value) }), [u]);
                return (0, c.jsx)("input", f({ className: l, value: a, onChange: g }, r))
            }
            g.propTypes = { value: a().oneOfType([a().string, a().number]), type: a().string, onChange: a().func, name: a().string, placeholder: a().string }
        },
        55679: (e, t, r) => {
            "use strict";
            r.d(t, { WX: () => m, ZP: () => O, $j: () => w });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(34699),
                s = r(85893),
                c = r(18172),
                i = r(67294);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            c.Fl(!1);
            var l = i.createContext,
                p = i.memo,
                f = i.useMemo,
                d = i.useRef,
                h = i.useEffect,
                v = i.useCallback,
                b = i.useContext,
                g = i.useState,
                x = l(null),
                y = l(null),
                j = l(null);

            function m() { return b(j) }

            function O(e) {
                var t = e.initialState,
                    r = e.actions,
                    n = void 0 === r ? {} : r,
                    i = e.children,
                    a = d(t),
                    u = g(t),
                    l = (0, o.Z)(u, 2),
                    p = l[0],
                    b = l[1],
                    m = v((function() { return a.current }), []);
                h((function() { 0 }), [m]);
                var O = v((function(e, t) {
                        if ("function" == typeof e) return e(O, m);
                        var r = (0, c.ZP)(m(), t);
                        r !== a.current && (a.current = r, b(r))
                    }), [m]),
                    w = f((function() { return C(n, O) }), [n, O]);
                return (0, s.jsx)(x.Provider, { value: p, children: (0, s.jsx)(y.Provider, { value: O, children: (0, s.jsx)(j.Provider, { value: w, children: i }) }) })
            }

            function w(e) {
                return function(t) {
                    var r = p(t);
                    return function(t) {
                        var n = b(x),
                            o = b(y),
                            c = e(n, t),
                            i = u(u({ dispatch: o }, t), c);
                        return (0, s.jsx)(r, u({}, i))
                    }
                }
            }

            function P(e, t) { return function() { for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]; return t(e.apply(this, n)) } }

            function C(e, t) { var r = {}; for (var n in e) { var o = e[n]; "function" == typeof o ? r[n] = P(o, t) : "object" == typeof o && (r[n] = C(o, t)) } return r }
        },
        3835: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var n = r(85893),
                o = r(86010),
                s = r(45697),
                c = r.n(s);
            r(67294);
            const i = "_3MvgliBN_D";

            function a(e) {
                var t = e.width,
                    r = void 0 === t ? 320 : t,
                    s = e.height,
                    c = void 0 === s ? 320 : s,
                    a = e.animate,
                    u = void 0 !== a && a,
                    l = e.c0,
                    p = void 0 === l ? "currentColor" : l,
                    f = e.c1,
                    d = void 0 === f ? "#eee" : f,
                    h = (0, o.Z)({
                        [i]: u
                    });
                return (0, n.jsx)("svg", { width: r, height: c, viewBox: "0 0 320 320", xmlns: "http://www.w3.org/2000/svg", children: (0, n.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [(0, n.jsx)("path", { d: "M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z", stroke: d, strokeWidth: "4", strokeLinecap: "round", fill: p, className: h }), (0, n.jsx)("circle", { fill: d, cx: "216.5", cy: "181.5", r: "14.5" }), (0, n.jsx)("circle", { fill: d, cx: "104.5", cy: "181.5", r: "14.5" }), (0, n.jsx)("g", { stroke: d, strokeLinecap: "round", strokeWidth: "4", children: (0, n.jsx)("path", { d: "M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11" }) })] }) })
            }
            a.propTypes = { width: c().number, height: c().number };
            const u = a
        },
        99175: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var n = r(85893),
                o = (r(67294), r(59936)),
                s = r(97798);
            const c = (0, r(55679).$j)((function(e) { return { theme: (0, s.gh)(e) } }))((function(e) {
                var t = e.checked,
                    r = void 0 !== t && t,
                    s = e.onChange,
                    c = e.theme,
                    i = e.name,
                    a = "dark" === c ? "#393939" : "#e9e9e9";
                return (0, n.jsx)(o.default, { onChange: s, checked: r, uncheckedIcon: !1, checkedIcon: !1, offColor: a, onColor: "#047aff", offHandleColor: "#fff", onHandleColor: "#fff", handleDiameter: 24, height: 28, width: 44, className: "rs", name: i })
            }))
        },
        68285: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            r(82772), r(21249);
            var n = r(85893),
                o = r(45697),
                s = r.n(o),
                c = r(67294);
            const i = "_2IgDTE__bQ",
                a = "_2IfOm9qQ_4";

            function u(e) {
                var t = e.options,
                    r = e.value,
                    o = e.name,
                    s = e.onChange,
                    u = (0, c.useMemo)((function() { return t.map((function(e) { return e.value })).indexOf(r) }), [t, r]),
                    l = (0, c.useCallback)((function(e) { var r = Math.floor(100 / t.length); return e === t.length - 1 ? 100 - t.length * r + r : e > -1 ? r : void 0 }), [t]),
                    p = (0, c.useMemo)((function() { return { width: l(u) + "%", left: u * l(0) + "%" } }), [u, l]);
                return (0, n.jsxs)("div", {
                    className: i,
                    children: [(0, n.jsx)("div", { className: a, style: p }), t.map((function(e, t) {
                        var c = `${o}-${e.label}`,
                            i = 0 === t ? "" : "border-left";
                        return (0, n.jsxs)("label", { htmlFor: c, className: i, style: { width: l(t) + "%" }, children: [(0, n.jsx)("input", { id: c, name: o, type: "radio", value: e.value, checked: r === e.value, onChange: s }), (0, n.jsx)("div", { children: e.label })] }, c)
                    }))]
                })
            }
            u.propTypes = { options: s().array, value: s().string, name: s().string, onChange: s().func };
            const l = c.memo(u)
        },
        21820: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => i, $: () => c });
            var n = r(85893);
            r(67294);
            const o = "Q-CsP5Y3FT",
                s = "_3GL3LmFL_E";

            function c(e) {
                var t = e.name,
                    r = e.type;
                return (0, n.jsxs)("h2", { className: o, children: [(0, n.jsx)("span", { children: t }), (0, n.jsx)("span", { children: r })] })
            }

            function i() { return (0, n.jsx)("span", { className: s }) }
        },
        82759: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(67294),
                s = r(36723);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var a = o.useEffect,
                u = s.SB;

            function l(e, t, r, n) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                a((function() {
                    var s = document.getElementById(t).getContext("2d"),
                        c = new e(s, { type: "line", data: r, options: i(i({}, u), o) }),
                        a = n && n.subscribe((function() { return c.update() }));
                    return function() { a && a(), c.destroy() }
                }), [e, t, r, n, o])
            }
        },
        36723: (e, t, r) => {
            "use strict";
            r.d(t, { A8: () => s, IE: () => c, SB: () => i, Eu: () => a });
            r(41539), r(88674);
            var n = r(4374),
                o = r(92375),
                s = (0, n.unstable_createResource)((function() { return r.e(736).then(r.t.bind(r, 72037, 7)).then((function(e) { return e.default })) })),
                c = { borderWidth: 1, lineTension: 0, pointRadius: 0 },
                i = { responsive: !0, maintainAspectRatio: !0, title: { display: !1 }, legend: { display: !0, position: "top", labels: { fontColor: "#ccc", boxWidth: 20 } }, tooltips: { enabled: !1, mode: "index", intersect: !1, animationDuration: 100 }, hover: { mode: "nearest", intersect: !0 }, scales: { xAxes: [{ display: !1, gridLines: { display: !1 } }], yAxes: [{ display: !0, gridLines: { display: !0, color: "#555", borderDash: [3, 6], drawBorder: !1 }, ticks: { callback: e => (0, o.Z)(e) + "/s " } }] } },
                a = [{ down: { backgroundColor: "rgba(176, 209, 132, 0.8)", borderColor: "rgb(176, 209, 132)" }, up: { backgroundColor: "rgba(181, 220, 231, 0.8)", borderColor: "rgb(181, 220, 231)" } }, { up: { backgroundColor: "rgb(98, 190, 100)", borderColor: "rgb(78,146,79)" }, down: { backgroundColor: "rgb(160, 230, 66)", borderColor: "rgb(110, 156, 44)" } }, { up: { backgroundColor: "rgba(94, 175, 223, 0.3)", borderColor: "rgb(94, 175, 223)" }, down: { backgroundColor: "rgba(139, 227, 195, 0.3)", borderColor: "rgb(139, 227, 195)" } }, { up: { backgroundColor: "rgba(242, 174, 62, 0.3)", borderColor: "rgb(242, 174, 62)" }, down: { backgroundColor: "rgba(69, 154, 248, 0.3)", borderColor: "rgb(69, 154, 248)" } }]
        },
        88757: (e, t, r) => {
            "use strict";
            r.d(t, { U: () => n });
            r(41539), r(88674);
            var n = function(e) {
                var t = {},
                    r = {},
                    n = {};

                function o() { var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; return r[o] = e(o).then((function(e) { delete r[o], t[o] = e })).catch((function(e) { n[o] = e })), r[o] }
                return {
                    preload: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                        void 0 !== t[e] || r[e] || o(e)
                    },
                    read: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default"; if (void 0 !== t[e]) return t[e]; throw n[e] ? n[e] : r[e] ? r[e] : o(e) },
                    clear: function(e) { e ? delete t[e] : t = {} }
                }
            }((function() { return r.e(888).then(r.bind(r, 55888)) }))
        },
        92375: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            var n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            const o = function(e) { if (e < 1e3) return e + " B"; var t = Math.min(Math.floor(Math.log10(e) / 3), n.length - 1); return (e = Number((e / Math.pow(1e3, t)).toPrecision(3))) + " " + n[t] }
        },
        97943: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => a, P: () => u });
            r(82526), r(57327), r(89554), r(66992), r(49337), r(41539), r(54747), r(33948), r(60285);
            var n = r(96156),
                o = r(53062);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }
            var c = { "Content-Type": "application/json" };

            function i(e) {
                var t = e.secret,
                    r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(r), !0).forEach((function(t) {
                                (0, n.Z)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                        }
                        return e
                    }({}, c);
                return t && (r.Authorization = "Bearer " + t), r
            }

            function a(e) { return { url: e.baseURL, init: { headers: i({ secret: e.secret }) } } }

            function u(e, t) {
                var r = e.baseURL,
                    n = e.secret,
                    s = "";
                "string" == typeof n && "" !== n && (s += "?token=" + encodeURIComponent(n));
                var c = new URL(r);
                return "https:" === c.protocol ? c.protocol = "wss:" : c.protocol = "ws:", `${(0, o.Os)(c.href)}${t}${s}`
            }
        },
        53062: (e, t, r) => {
            "use strict";
            r.d(t, { Ds: () => n, Os: () => o });
            r(15306);

            function n(e, t) {
                var r;
                return function() {
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    r && clearTimeout(r), r = setTimeout((function() { e.apply(void 0, o) }), t)
                }
            }

            function o(e) { return e.replace(/\/$/, "") }
        },
        97798: (e, t, r) => {
            "use strict";
            r.d(t, { sv: () => k, xE: () => w, Y$: () => h, AJ: () => b, VR: () => j, sU: () => O, Bg: () => y, S3: () => m, AM: () => x, I4: () => v, gh: () => g, E3: () => L, aj: () => Z, Pw: () => R, O4: () => N, tj: () => E, N: () => T, iB: () => I });
            r(82526), r(92222), r(57327), r(89554), r(66992), r(47042), r(49337), r(41539), r(15306), r(64765), r(23123), r(54747), r(33948), r(60285);
            var n = r(96156),
                o = r(34699),
                s = r(87329),
                c = r(87757),
                i = r.n(c),
                a = (r(35666), r(92137)),
                u = "yacd.haishan.me";

            function l(e) {
                try {
                    var t = JSON.stringify(e);
                    localStorage.setItem(u, t)
                } catch (e) {}
            }
            var p = r(53062);
            r(79912), r(98236);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var h = function(e) { var t = e.app.selectedClashAPIConfigIndex; return e.app.clashAPIConfigs[t] },
                v = function(e) { return e.app.selectedClashAPIConfigIndex },
                b = function(e) { return e.app.clashAPIConfigs },
                g = function(e) { return e.app.theme },
                x = function(e) { return e.app.selectedChartStyleIndex },
                y = function(e) { return e.app.latencyTestUrl },
                j = function(e) { return e.app.collapsibleIsOpen },
                m = function(e) { return e.app.proxySortBy },
                O = function(e) { return e.app.hideUnavailableProxies },
                w = function(e) { return e.app.autoCloseOldConns },
                P = (0, p.Ds)(l, 600);

            function C(e, t) { for (var r = t.baseURL, n = t.secret, o = b(e()), s = 0; s < o.length; s++) { var c = o[s]; if (c.baseURL === r && c.secret === n) return s } }

            function k(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!C(o, { baseURL: t, secret: r })) { e.next = 3; break }
                                    return e.abrupt("return");
                                case 3:
                                    s = { baseURL: t, secret: r, addedAt: Date.now() }, n("addClashAPIConfig", (function(e) { e.app.clashAPIConfigs.push(s) })), l(o().app);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }

            function Z(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    c = C(o, { baseURL: t, secret: r }), n("removeClashAPIConfig", (function(e) { e.app.clashAPIConfigs = [].concat((0, s.Z)(e.app.clashAPIConfigs.slice(0, c)), (0, s.Z)(e.app.clashAPIConfigs.slice(c + 1))) })), l(o().app);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }

            function N(e) {
                var t = e.baseURL,
                    r = e.secret;
                return function() {
                    var e = (0, a.Z)(i().mark((function e(n, o) {
                        var s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    s = C(o, { baseURL: t, secret: r }), v(o()) !== s && n("selectClashAPIConfig", (function(e) { e.app.selectedClashAPIConfigIndex = s })), l(o().app);
                                    try { window.location.reload() } catch (e) {}
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) { return e.apply(this, arguments) }
                }()
            }
            var S = document.body;

            function D() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dark"; "dark" === e ? (S.classList.remove("light"), S.classList.add("dark")) : (S.classList.remove("dark"), S.classList.add("light")) }

            function E() {
                return function(e, t) {
                    var r = "light" === g(t()) ? "dark" : "light";
                    D(r), e("storeSwitchTheme", (function(e) { e.app.theme = r })), l(t().app)
                }
            }

            function R(e) { return function(t, r) { t("appSelectChartStyleIndex", (function(t) { t.app.selectedChartStyleIndex = e })), l(r().app) } }

            function T(e, t) { return function(r, n) { r("appUpdateAppConfig", (function(r) { r.app[e] = t })), l(n().app) } }

            function I(e, t, r) { return function(n, o) { n("updateCollapsibleIsOpen", (function(n) { n.app.collapsibleIsOpen[`${e}:${t}`] = r })), P(o().app) } }
            var A = { selectedClashAPIConfigIndex: 0, clashAPIConfigs: [{ baseURL: "http://192.168.16.16:9090", secret: "123456", addedAt: 0 }], latencyTestUrl: "http://www.gstatic.com/generate_204", selectedChartStyleIndex: 0, theme: "dark", collapsibleIsOpen: {}, proxySortBy: "Natural", hideUnavailableProxies: !1, autoCloseOldConns: !1 };

            function L() {
                var e = function() { try { var e = localStorage.getItem(u); if (!e) return; return JSON.parse(e) } catch (e) { return } }();
                e = d(d({}, A), e);
                var t = function() {
                        var e = window.location.search,
                            t = {};
                        if ("string" != typeof e || "" === e) return t;
                        for (var r = e.replace(/^\?/, "").split("&"), n = 0; n < r.length; n++) {
                            var s = r[n].split("="),
                                c = (0, o.Z)(s, 2),
                                i = c[0],
                                a = c[1];
                            t[i] = encodeURIComponent(a)
                        }
                        return t
                    }(),
                    r = e.clashAPIConfigs[e.selectedClashAPIConfigIndex];
                if (r) {
                    var n = new URL(r.baseURL);
                    t.hostname && (n.hostname = t.hostname), t.port && (n.port = t.port), r.baseURL = (0, p.Os)(n.href), t.secret && (r.secret = t.secret)
                }
                return "dark" !== t.theme && "light" !== t.theme || (e.theme = t.theme), D(e.theme), e
            }
        },
        79912: (e, t, r) => {
            "use strict";
            r.d(t, { G_: () => f, ZO: () => d, Tj: () => h, wf: () => v, E3: () => b });
            r(82526), r(57327), r(89554), r(49337), r(54747);
            var n = r(96156),
                o = r(87757),
                s = r.n(o),
                c = (r(35666), r(92137)),
                i = r(50497),
                a = r(10877),
                u = r(98236);

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var f = function(e) { return e.configs.configs },
                d = function(e) { return e.configs.configs["log-level"] };

            function h(e) {
                return function() {
                    var t = (0, c.Z)(s().mark((function t(r, n) {
                        var o, c;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, i.T(e);
                                case 3:
                                    o = t.sent, t.next = 10;
                                    break;
                                case 6:
                                    return t.prev = 6, t.t0 = t.catch(0), r((0, u.h7)("apiConfig")), t.abrupt("return");
                                case 10:
                                    if (o.ok) { t.next = 14; break }
                                    return console.log("Error fetch configs", o.statusText), r((0, u.h7)("apiConfig")), t.abrupt("return");
                                case 14:
                                    return t.next = 16, o.json();
                                case 16:
                                    c = t.sent, r("store/configs#fetchConfigs", (function(e) { e.configs.configs = c })), f(n()).haveFetchedConfig ? a.r(e) : r((function(e) { e("store/configs#markHaveFetchedConfig", (function(e) { e.configs.haveFetchedConfig = !0 })) }));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 6]
                        ])
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function v(e, t) {
                return function() {
                    var r = (0, c.Z)(s().mark((function r(n) {
                        return s().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    i.w(e, t).then((function(e) {!1 === e.ok && console.log("Error update configs", e.statusText) }), (function(e) { throw console.log("Error update configs", e), e })).then((function() { n(h(e)) })), n("storeConfigsOptimisticUpdateConfigs", (function(e) { e.configs.configs = p(p({}, e.configs.configs), t) }));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }
            var b = { configs: { port: 7890, "socks-port": 7891, "redir-port": 0, "allow-lan": !1, mode: "Rule", "log-level": "info" }, haveFetchedConfig: !1 }
        },
        38429: (e, t, r) => {
            "use strict";
            r.d(t, { Rv: () => c, Xs: () => i, AR: () => a, TH: () => u, E3: () => l });
            r(57327), r(82772);
            var n = r(22222),
                o = function(e) { return e.logs.logs },
                s = function(e) { return e.logs.tail },
                c = function(e) { return e.logs.searchText },
                i = (0, n.P1)(o, s, c, (function(e, t, r) {
                    for (var n = [], o = t; o >= 0; o--) n.push(e[o]);
                    if (300 === e.length)
                        for (var s = 299; s > t; s--) n.push(e[s]);
                    return "" === r ? n : n.filter((function(e) { return e.payload.toLowerCase().indexOf(r) >= 0 }))
                }));

            function a(e) { return function(t) { t("logsUpdateSearchText", (function(t) { t.logs.searchText = e.toLowerCase() })) } }

            function u(e) {
                return function(t, r) {
                    var n = r(),
                        c = o(n),
                        i = s(n),
                        a = i >= 299 ? 0 : i + 1;
                    c[a] = e, t("logsAppendLog", (function(e) { e.logs.tail = a }))
                }
            }
            var l = { searchText: "", logs: [], tail: -1 }
        },
        98236: (e, t, r) => {
            "use strict";

            function n(e) { return function(t) { t("openModal:" + e, (function(t) { t.modals[e] = !0 })) } }

            function o(e) { return function(t) { t("closeModal:" + e, (function(t) { t.modals[e] = !1 })) } }
            r.d(t, { h7: () => n, Mr: () => o, E3: () => s });
            var s = { apiConfig: !1 }
        },
        19943: (e, t, r) => {
            "use strict";
            r.d(t, { SJ: () => T, Nw: () => re, Ry: () => B, sj: () => A, yi: () => I, P_: () => L, a: () => U, DP: () => M, IA: () => q, E3: () => E, RE: () => ne, $3: () => X, hU: () => Y, kL: () => $ });
            r(82526), r(41817), r(57327), r(89554), r(91038), r(82772), r(66992), r(21249), r(47042), r(2707), r(49337), r(41539), r(88674), r(39714), r(54747), r(33948);
            var n = r(87757),
                o = r.n(n),
                s = r(96156),
                c = r(34699),
                i = (r(35666), r(92137)),
                a = r(2804),
                u = r(97750),
                l = r(97943);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var d = "/proxies";

            function h(e) { return v.apply(this, arguments) }

            function v() {
                return (v = (0, i.Z)(o().mark((function e(t) {
                    var r, n, s, c;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, l.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + d, s);
                            case 3:
                                return c = e.sent, e.next = 6, c.json();
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b(e, t, r) { return g.apply(this, arguments) }

            function g() {
                return (g = (0, i.Z)(o().mark((function e(t, r, n) {
                    var s, c, i, a, u;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = { name: n }, c = (0, l.g)(t), i = c.url, a = c.init, u = `${i}/proxies/${r}`, e.next = 5, fetch(u, f(f({}, a), {}, { method: "PUT", body: JSON.stringify(s) }));
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function x(e, t) { return y.apply(this, arguments) }

            function y() {
                return (y = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i, a, u = arguments;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = u.length > 2 && void 0 !== u[2] ? u[2] : "http://www.gstatic.com/generate_204", s = (0, l.g)(t), c = s.url, i = s.init, a = `${c}/proxies/${r}/delay?${"timeout=5000&url=" + n}`, e.next = 6, fetch(a, i);
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j(e) { return m.apply(this, arguments) }

            function m() {
                return (m = (0, i.Z)(o().mark((function e(t) {
                    var r, n, s, c;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = (0, l.g)(t), n = r.url, s = r.init, e.next = 3, fetch(n + "/providers/proxies", s);
                            case 3:
                                if (404 !== (c = e.sent).status) { e.next = 6; break }
                                return e.abrupt("return", { providers: {} });
                            case 6:
                                return e.next = 8, c.json();
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function O(e, t) { return w.apply(this, arguments) }

            function w() {
                return (w = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, l.g)(t), s = n.url, c = n.init, i = f(f({}, c), {}, { method: "PUT" }), e.next = 4, fetch(s + "/providers/proxies/" + r, i);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function P(e, t) { return C.apply(this, arguments) }

            function C() {
                return (C = (0, i.Z)(o().mark((function e(t, r) {
                    var n, s, c, i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = (0, l.g)(t), s = n.url, c = n.init, i = f(f({}, c), {}, { method: "GET" }), e.next = 4, fetch(s + "/providers/proxies/" + r + "/healthcheck", i);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var k = r(97798);

            function Z(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) { if (!e) return; if ("string" == typeof e) return N(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r) return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return { s: o, n: function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function(e) { throw e }, f: o }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, c = !0,
                    i = !1;
                return { s: function() { r = e[Symbol.iterator]() }, n: function() { var e = r.next(); return c = e.done, e }, e: function(e) { i = !0, s = e }, f: function() { try { c || null == r.return || r.return() } finally { if (i) throw s } } }
            }

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
                }
                return e
            }
            var E = { proxies: {}, delay: {}, groupNames: [], showModalClosePrevConns: !1 },
                R = function() { return null },
                T = ["Direct", "Fallback", "Reject", "Selector", "URLTest", "LoadBalance", "Unknown"],
                I = function(e) { return e.proxies.proxies },
                A = function(e) { return e.proxies.delay },
                L = function(e) { return e.proxies.groupNames },
                U = function(e) { return e.proxies.proxyProviders || [] },
                _ = function(e) { return e.proxies.dangleProxyNames },
                M = function(e) { return e.proxies.showModalClosePrevConns };

            function B(e) {
                return function() {
                    var t = (0, i.Z)(o().mark((function t(r, n) {
                        var s, i, a, u, l, p, f, d, v, b, g, x, y, m, O, w, P, C, k, N, S, E, R;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all([h(e), j(e)]);
                                case 2:
                                    for (s = t.sent, i = (0, c.Z)(s, 2), a = i[0], u = i[1], l = te(u.providers), p = l.providers, f = l.proxies, d = D(D({}, f), a.proxies), v = ee(d), b = (0, c.Z)(v, 2), g = b[0], x = b[1], y = A(n()), m = D({}, y), O = 0; O < x.length; O++) w = x[O], P = d[w] || { history: [] }, C = P.history, (k = C[C.length - 1]) && "number" == typeof k.delay && (m[w] = { number: k.delay });
                                    N = [], S = Z(x);
                                    try { for (S.s(); !(E = S.n()).done;) R = E.value, f[R] || N.push(R) } catch (e) { S.e(e) } finally { S.f() }
                                    r("store/proxies#fetchProxies", (function(e) { e.proxies.proxies = d, e.proxies.groupNames = g, e.proxies.delay = m, e.proxies.proxyProviders = p, e.proxies.dangleProxyNames = N }));
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function $(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, r.next = 3, O(e, t);
                                case 3:
                                    r.next = 7;
                                    break;
                                case 5:
                                    r.prev = 5, r.t0 = r.catch(0);
                                case 7:
                                    n(B(e));
                                case 8:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [0, 5]
                        ])
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function F(e, t) { return z.apply(this, arguments) }

            function z() {
                return (z = (0, i.Z)(o().mark((function e(t, r) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, P(t, r);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                e.prev = 5, e.t0 = e.catch(0);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 5]
                    ])
                })))).apply(this, arguments)
            }

            function q(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, F(e, t);
                                case 2:
                                    return r.next = 4, n(B(e));
                                case 4:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function W() {
                return (W = (0, i.Z)(o().mark((function e(t, r, n) {
                    var s, c, i, a, l, p, f;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, u.$K(t);
                            case 2:
                                return (s = e.sent).ok || console.log("unable to fetch all connections", s.statusText), e.next = 6, s.json();
                            case 6:
                                c = e.sent, i = c.connections, a = [], l = Z(i);
                                try { for (l.s(); !(p = l.n()).done;)(f = p.value).chains.indexOf(r) > -1 && f.chains.indexOf(n) < 0 && a.push(f.id) } catch (e) { l.e(e) } finally { l.f() }
                                return e.next = 13, Promise.all(a.map((function(e) { return u.Sm(t, e).catch(R) })));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function J(e, t, r, n, o) { return G.apply(this, arguments) }

            function G() {
                return (G = (0, i.Z)(o().mark((function e(t, r, n, s, c) {
                    var i;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, b(n, s, c);
                            case 3:
                                if (!1 !== e.sent.ok) { e.next = 6; break }
                                throw new Error("failed to switch proxy: res.statusText");
                            case 6:
                                e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(0), console.log(e.t0, "failed to swith proxy"), e.t0;
                            case 12:
                                t(B(n)), (0, k.xE)(r()) && (i = I(r()), H(n, i, { groupName: s, itemName: c }));
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function V() { return function(e) { e("closeModalClosePrevConns", (function(e) { e.proxies.showModalClosePrevConns = !1 })) } }

            function H(e, t, r) {
                var n = function(e, t, r) {
                    for (var n, o = [r, t], s = r;
                        (n = e[s]) && n.now;) o.unshift(n.now), s = n.now;
                    return o
                }(t, r.groupName, r.itemName);
                ! function(e, t, r) { W.apply(this, arguments) }(e, r.groupName, n[0])
            }

            function Y(e, t, r) {
                return function() {
                    var n = (0, i.Z)(o().mark((function n(s, c) {
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    J(s, c, e, t, r).catch(R), s("store/proxies#switchProxy", (function(e) {
                                        var n = e.proxies.proxies;
                                        n[t] && n[t].now && (n[t].now = r)
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) { return n.apply(this, arguments) }
                }()
            }

            function Q(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n, s) {
                        var c, i, a, u, l, p, f;
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return c = (0, k.Bg)(s()), r.next = 3, x(e, t, c);
                                case 3:
                                    return i = r.sent, a = "", !1 === i.ok && (a = i.statusText), r.next = 8, i.json();
                                case 8:
                                    u = r.sent, l = u.delay, p = A(s()), f = D(D({}, p), {}, {
                                        [t]: { error: a, number: l }
                                    }), n("requestDelayForProxyOnce", (function(e) { e.proxies.delay = f }));
                                case 13:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e, t) { return r.apply(this, arguments) }
                }()
            }

            function K(e, t) {
                return function() {
                    var r = (0, i.Z)(o().mark((function r(n) {
                        return o().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, n(Q(e, t));
                                case 2:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) { return r.apply(this, arguments) }
                }()
            }

            function X(e) {
                return function() {
                    var t = (0, i.Z)(o().mark((function t(r, n) {
                        var s, c, i, a, u;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = _(n()), t.next = 3, Promise.all(s.map((function(t) { return r(K(e, t)) })));
                                case 3:
                                    c = U(n()), i = Z(c), t.prev = 5, i.s();
                                case 7:
                                    if ((a = i.n()).done) { t.next = 13; break }
                                    return u = a.value, t.next = 11, F(e, u.name);
                                case 11:
                                    t.next = 7;
                                    break;
                                case 13:
                                    t.next = 18;
                                    break;
                                case 15:
                                    t.prev = 15, t.t0 = t.catch(5), i.e(t.t0);
                                case 18:
                                    return t.prev = 18, i.f(), t.finish(18);
                                case 21:
                                    return t.next = 23, r(B(e));
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [5, 15, 18, 21]
                        ])
                    })));
                    return function(e, r) { return t.apply(this, arguments) }
                }()
            }

            function ee(e) {
                var t, r = [],
                    n = [];
                for (var o in e) {
                    var s = e[o];
                    s.all && Array.isArray(s.all) ? (r.push(o), "GLOBAL" === o && (t = s.all)) : T.indexOf(s.type) < 0 && n.push(o)
                }
                return t && (t.push("GLOBAL"), r = r.map((function(e) { return [t.indexOf(e), e] })).sort((function(e, t) { return e[0] - t[0] })).map((function(e) { return e[1] }))), [r, n]
            }

            function te(e) {
                for (var t = Object.keys(e), r = [], n = {}, o = 0; o < t.length; o++) {
                    var s = e[t[o]];
                    if ("default" !== s.name && "Compatible" !== s.vehicleType) {
                        for (var c = s.proxies, i = [], a = 0; a < c.length; a++) {
                            var u = c[a];
                            n[u.name] = u, i.push(u.name)
                        }
                        s.proxies = i, r.push(s)
                    }
                }
                return { providers: r, proxies: n }
            }
            var re = {
                    requestDelayForProxies: function(e, t) {
                        return function() {
                            var r = (0, i.Z)(o().mark((function r(n, s) {
                                var c, i;
                                return o().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return c = _(s()), i = t.filter((function(e) { return c.indexOf(e) > -1 })).map((function(t) { return n(K(e, t)) })), r.next = 4, Promise.all(i);
                                        case 4:
                                            return r.next = 6, n(B(e));
                                        case 6:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function(e, t) { return r.apply(this, arguments) }
                        }()
                    },
                    closeModalClosePrevConns: V,
                    closePrevConnsAndTheModal: function(e) {
                        return function() {
                            var t = (0, i.Z)(o().mark((function t(r, n) {
                                var s, c, i, a;
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (c = n(), i = null === (s = c.proxies.switchProxyCtx) || void 0 === s ? void 0 : s.to) { t.next = 5; break }
                                            return r((function(e) { e("closeModalClosePrevConns", (function(e) { e.proxies.showModalClosePrevConns = !1 })) })), t.abrupt("return");
                                        case 5:
                                            a = c.proxies.proxies, H(e, a, i), r("closePrevConnsAndTheModal", (function(e) { e.proxies.showModalClosePrevConns = !1, e.proxies.switchProxyCtx = void 0 }));
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, r) { return t.apply(this, arguments) }
                        }()
                    }
                },
                ne = (0, a.cn)({ key: "proxyFilterText", default: "" })
        },
        93621: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            const n = { overlay: "_2ueF0jmjym", content: "UZ5fqyDCOb" }
        }
    },
    function(e) {
        "use strict";
        var t;
        t = e.x, e.x = () => { var r = t(); return [180, 331, 170, 869, 641, 237, 981, 507, 497, 736].map(e.E), r }
    },
    [
        [97698, 537, 138, 977, 935, 545, 486, 623]
    ]
]);
//# sourceMappingURL=app.d58caec1b2e4b2f6f6f4.js.map
>>>>>>> parent of 811e294 (Update app.d58caec1b2e4b2f6f6f4.js)
