(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [497], {
        42444: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, { default: () => X });
            t(82526), t(57327), t(89554), t(21249), t(47042), t(49337), t(54747);
            var n = t(96156),
                a = t(34699),
                o = t(85893),
                s = t(45697),
                c = t.n(s),
                i = t(67294),
                l = t(97798),
                u = t(79912),
                d = t(98236),
                p = t(25904);
            const f = "_2drigWG08z",
                v = "_3qy5-MPwaw",
                b = "_1sbDIR8sCY",
                j = "_1Hvw0QbyvH";
            var y = t(68912),
                h = t(65182),
                O = t(86010);
            const g = "_3uy3l7xDdI",
                x = "_2hwDLKbh5f",
                m = "_1OeAkW2Cff";

            function w(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function P(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? w(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }

            function C(e) {
                var r = e.OptionComponent,
                    t = e.optionPropsList,
                    n = e.selectedIndex,
                    a = e.onChange;
                return (0, o.jsx)("div", {
                    className: g,
                    children: t.map((function(e, t) {
                        var s = (0, O.Z)(x, {
                                [m]: t === n
                            }),
                            c = function(e) { e.preventDefault(), t !== n && a(t) };
                        return (0, o.jsx)("div", { className: s, tabIndex: 0, role: "menuitem", onKeyDown: c, onClick: c, children: (0, o.jsx)(r, P({}, e)) }, t)
                    }))
                })
            }
            C.propTypes = { OptionComponent: s.func, optionPropsList: s.array, selectedIndex: s.number, onChange: s.func };
            var k = t(55679),
                D = t(99175),
                N = t(68285),
                S = t(82759),
                I = t(36723);

            function E(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function Z(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? E(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            var T = { legend: { display: !1 }, scales: { xAxes: [{ display: !1 }], yAxes: [{ display: !1 }] } },
                A = [23e3, 35e3, 46e3, 33e3, 9e4, 68e3, 23e3, 45e3],
                L = [184e3, 183e3, 196e3, 182e3, 19e4, 186e3, 182e3, 189e3],
                _ = A;

            function M(e) {
                var r = e.id,
                    t = I.A8.read(),
                    n = (0, i.useMemo)((function() { return { labels: _, datasets: [Z(Z(Z({}, I.IE), I.Eu[r].up), {}, { data: A }), Z(Z(Z({}, I.IE), I.Eu[r].down), {}, { data: L })] } }), [r]),
                    a = "chart-" + r;
                return (0, S.Z)(t, a, n, null, T), (0, o.jsx)("div", { style: { width: 130, padding: 5 }, children: (0, o.jsx)("canvas", { id: a }) })
            }

            function R(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function U(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? R(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            var G = i.useEffect,
                W = i.useState,
                $ = i.useCallback,
                B = i.useRef,
                H = i.useMemo,
                K = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }],
                Y = [{ label: "全局代理", value: "Global" }, { label: "根据规则代理", value: "Rule" }, { label: "直接连接", value: "Direct" }],
                q = [{ label: "信息", value: "info" }, { label: "警告", value: "warning" }, { label: "错误", value: "error" }, { label: "调试", value: "debug" }, { label: "安静", value: "silent" }],
                z = [{ key: "port", label: "HTTP 代理接口" }, { key: "socks-port", label: "SOCKS5 代理接口" }, { key: "mixed-port", label: "混合代理接口" }, { key: "redir-port", label: "Redir 代理接口" }],
                Q = (0, k.$j)((function(e) { return { selectedChartStyleIndex: (0, l.AM)(e), latencyTestUrl: (0, l.Bg)(e), apiConfig: (0, l.Y$)(e) } }))((function(e) {
                    var r = e.dispatch,
                        t = e.configs,
                        n = e.selectedChartStyleIndex,
                        s = e.latencyTestUrl,
                        c = e.apiConfig,
                        i = W(t),
                        l = (0, a.Z)(i, 2),
                        O = l[0],
                        g = l[1],
                        x = B(t);
                    G((function() { x.current !== t && g(t), x.current = t }), [t]);
                    var m = $((function() { r((0, d.h7)("apiConfig")) }), [r]),
                        w = $((function(e, r) {
                            g(U(U({}, O), {}, {
                                [e]: r
                            }))
                        }), [O]),
                        P = $((function(e) {
                            var t = "allow-lan",
                                n = e;
                            w(t, n), r((0, u.wf)(c, {
                                [t]: n
                            }))
                        }), [c, r, w]),
                        S = $((function(e) {
                            var t = e.target,
                                n = t.name,
                                a = t.value;
                            switch (t.name) {
                                case "mode":
                                case "log-level":
                                    w(n, a), r((0, u.wf)(c, {
                                        [n]: a
                                    }));
                                    break;
                                case "redir-port":
                                case "socks-port":
                                case "mixed-port":
                                case "port":
                                    if ("" !== t.value) { var o = parseInt(t.value, 10); if (o < 0 || o > 65535) return }
                                    w(n, a);
                                    break;
                                default:
                                    return
                            }
                        }), [c, r, w]),
                        I = (0, k.WX)(),
                        E = I.selectChartStyleIndex,
                        Z = I.updateAppConfig,
                        T = $((function(e) {
                            var t = e.target,
                                n = t.name,
                                a = t.value;
                            switch (n) {
                                case "port":
                                case "socks-port":
                                case "mixed-port":
                                case "redir-port":
                                    var o = parseInt(a, 10);
                                    if (o < 0 || o > 65535) return;
                                    r((0, u.wf)(c, {
                                        [n]: o
                                    }));
                                    break;
                                case "latencyTestUrl":
                                    Z(n, a);
                                    break;
                                default:
                                    throw new Error("unknown input name " + n)
                            }
                        }), [c, r, Z]),
                        A = H((function() { var e = O.mode; return "string" == typeof e && e[0].toUpperCase() + e.slice(1) }), [O.mode]);
                    return (0, o.jsxs)("div", { children: [(0, o.jsx)(y.Z, { title: "设置" }), (0, o.jsxs)("div", { className: f, children: [z.map((function(e) { return void 0 !== O[e.key] ? (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: e.label }), (0, o.jsx)(h.Z, { name: e.key, value: O[e.key], onChange: S, onBlur: T })] }, e.key) : null })), (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: "允许来自局域网的连接" }), (0, o.jsx)(D.Z, { name: "allow-lan", checked: O["allow-lan"], onChange: P })] }), (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: "代理模式" }), (0, o.jsx)(N.Z, { options: Y, name: "mode", value: A, onChange: S })] }), (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: "日志记录级别" }), (0, o.jsx)(N.Z, { options: q, name: "log-level", value: O["log-level"], onChange: S })] })] }), (0, o.jsx)("div", { className: b, children: (0, o.jsx)("div", {}) }), (0, o.jsxs)("div", { className: v, children: [(0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: "图表样式" }), (0, o.jsx)(C, { OptionComponent: M, optionPropsList: K, selectedIndex: n, onChange: E })] }), (0, o.jsxs)("div", { style: { maxWidth: 360 }, children: [(0, o.jsx)("div", { className: j, children: "延迟测试 URL" }), (0, o.jsx)(h.N, { name: "latencyTestUrl", type: "text", value: s, onBlur: T })] }), (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: j, children: "操作" }), (0, o.jsx)(p.Z, { label: "切换控制面板", onClick: m })] })] })] })
                }));
            const X = (0, k.$j)((function(e) { return { configs: (0, u.G_)(e), apiConfig: (0, l.Y$)(e) } }))((function(e) {
                var r = e.dispatch,
                    t = e.configs,
                    n = e.apiConfig;
                return G((function() { r((0, u.Tj)(n)) }), [r, n]), (0, o.jsx)(Q, { configs: t })
            }));
            Q.propTypes = { configs: c().object }
        }
    }
]);
//# sourceMappingURL=config.de96eaa5acfdf315f624.js.map