(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [641], {
        22849: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, { default: () => dn });
            r(21249);
            var t = r(34699),
                i = r(85893),
                s = r(67294),
                a = r(34588),
                o = r(97798),
                c = r(19943),
                l = r(25904),
                u = r(68912),
                d = r(86010),
                p = r(83253),
                x = r.n(p),
                h = r(93621);
            const f = "_25Hedjekvk",
                v = "_1tfU5GSa-_",
                m = "_2VMuy-HWwC";
            var y = s.useMemo;

            function j(e) {
                var n = e.isOpen,
                    r = e.onRequestClose,
                    t = e.children,
                    s = y((function() { return { base: (0, d.Z)(h.Z.content, v), afterOpen: m, beforeClose: "" } }), []);
                return (0, i.jsx)(x(), { isOpen: n, onRequestClose: r, className: s, overlayClassName: (0, d.Z)(h.Z.overlay, f), children: t })
            }
            var C = r(51858),
                g = r(55679);

            function b(e) {
                var n = e.color,
                    r = void 0 === n ? "currentColor" : n,
                    t = e.size,
                    s = void 0 === t ? 24 : t;
                return (0, i.jsxs)("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: s, height: s, stroke: r, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, i.jsx)("path", { d: "M2 6h9M18.5 6H22" }), (0, i.jsx)("circle", { cx: "16", cy: "6", r: "2" }), (0, i.jsx)("path", { d: "M22 18h-9M6 18H2" }), (0, i.jsx)("circle", { r: "2", transform: "matrix(-1 0 0 1 8 18)" })] })
            }
            const k = "_1NNIVhRL-n";

            function w(e) { var n = e.children; return (0, i.jsx)("div", { className: k, children: n }) }
            var N = s.useRef,
                Z = s.useEffect;

            function _(e) {
                var n = e.onClickPrimaryButton,
                    r = e.onClickSecondaryButton,
                    t = N(null),
                    s = N(null);
                Z((function() { t.current.focus() }), []);
                return (0, i.jsxs)("div", { onKeyDown: function(e) { 39 === e.keyCode ? s.current.focus() : 37 === e.keyCode && t.current.focus() }, children: [(0, i.jsx)("h2", { children: "Close Connections?" }), (0, i.jsx)("p", { children: 'Click "Yes" to close those connections that are still using the old selected proxy in this group' }), (0, i.jsx)("div", { style: { height: 30 } }), (0, i.jsxs)(w, { children: [(0, i.jsx)(l.Z, { onClick: n, ref: t, children: "Yes" }), (0, i.jsx)("div", { style: { width: 20 } }), (0, i.jsx)(l.Z, { onClick: r, ref: s, children: "No" })] })] })
            }
            const O = "_2adLhYLrrV",
                S = "_1gc_yljm7w",
                P = "_1N0wXB7TV7",
                U = "_35E6rdJlPT",
                A = "_3NWc4-pcFT";
            var B = r(87757),
                L = r.n(B),
                M = (r(35666), r(92137)),
                D = r(27434);
            const R = "_2qbBB1Sojw",
                E = "_1iuVspxe4f",
                V = "_2CN_S7POBQ",
                T = "_3504uhlYv5",
                I = "_3Vynmp3NK4";
            var W = r(21820);

            function H(e) {
                var n = e.name,
                    r = e.type,
                    t = e.toggle,
                    a = e.isOpen,
                    o = e.qty,
                    c = s.useCallback((function(e) { e.preventDefault(), "Enter" !== e.key && " " !== e.key || t() }), [t]);
                return (0, i.jsxs)("div", {
                    className: R,
                    onClick: t,
                    style: { cursor: "pointer" },
                    tabIndex: 0,
                    onKeyDown: c,
                    role: "button",
                    children: [(0, i.jsx)("div", { children: (0, i.jsx)(W.$, { name: n, type: r }) }), "number" == typeof o ? (0, i.jsx)("span", { className: I, children: o }) : null, (0, i.jsx)(l.Z, {
                        kind: "minimal",
                        onClick: t,
                        className: T,
                        children: (0, i.jsx)("span", {
                            className: (0, d.Z)(E, {
                                [V]: a
                            }),
                            children: (0, i.jsx)(D.Z, { size: 20 })
                        })
                    })]
                })
            }
            r(57327), r(82772), r(2707), r(23123), r(73210);
            var F = r(87329),
                Y = r(2804),
                $ = s.useMemo;
            var q = function(e, n) { if (e && "number" == typeof e.number && e.number > 0) return e.number; var r = n && n.type; return r && c.SJ.indexOf(r) > -1 ? -1 : 999999 },
                z = { Natural: function(e) { return e }, LatencyAsc: function(e, n, r) { return e.sort((function(e, t) { return q(n[e], r && r[e]) - q(n[t], r && r[t]) })) }, LatencyDesc: function(e, n, r) { return e.sort((function(e, t) { var i = q(n[e], r && r[e]); return q(n[t], r && r[t]) - i })) }, NameAsc: function(e) { return e.sort() }, NameDesc: function(e) { return e.sort((function(e, n) { return e > n ? -1 : e < n ? 1 : 0 })) } };

            function G(e, n, r, i, s) {
                var a = (0, Y.FV)(c.RE),
                    o = (0, t.Z)(a, 1)[0];
                return $((function() { return function(e, n, r, t, i, s) { var a = (0, F.Z)(e); return r && (a = function(e, n) { return e.filter((function(e) { var r = n[e]; return void 0 === r || 0 !== r.number })) }(e, n)), "string" == typeof t && "" !== t && (a = function(e, n) { var r = n.toLowerCase().split(" ").map((function(e) { return e.trim() })).filter((function(e) { return !!e })); return 0 === r.length ? e : e.filter((function(e) { for (var n = 0; n < r.length; n++) { var t = r[n]; if (e.toLowerCase().indexOf(t) > -1) return !0 } return !1 })) }(a, t)), z[i](a, n, s) }(e, n, r, o, i, s) }), [e, n, r, o, i, s])
            }
            const K = { header: "v5oNKUwcTc", zapWrapper: "_2fR1H0ysyY" };
            var X = 13;
            const J = "_5-kOJyYfSn",
                Q = "MbWebw2VH4",
                ee = "_2dlAYgAIKi",
                ne = "_3rB1UgDAL6",
                re = "nnjdzHZySt",
                te = "_2E11-huRp7",
                ie = "_2Eys6UMXCm",
                se = "_2rRGWVNOYC",
                ae = "_1GlyjMFCSf";

            function oe(e) {
                var n = e.number,
                    r = e.color;
                return (0, i.jsx)("span", { className: ae, style: { color: r }, children: (0, i.jsxs)("span", { children: [n, " ms"] }) })
            }
            var ce = s.useMemo,
                le = "#67c23a",
                ue = "#d4b75c",
                de = "#e67f3c",
                pe = "#909399";

            function xe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.number;
                return 0 === n ? pe : n < 200 ? le : n < 400 ? ue : "number" == typeof n ? de : pe
            }
            var he = function(e, n) {
                    var r = n.name,
                        t = (0, c.yi)(e),
                        i = (0, c.sj)(e);
                    return { proxy: t[r], latency: i[r] }
                },
                fe = (0, g.$j)(he)((function(e) {
                    var n = e.now,
                        r = e.name,
                        t = e.proxy,
                        a = e.latency,
                        o = e.isSelectable,
                        c = e.onClick,
                        l = ce((function() { return xe(a) }), [a]),
                        u = s.useCallback((function() { o && c && c(r) }), [r, c, o]),
                        p = s.useCallback((function(e) { e.keyCode === X && u() }), [u]),
                        x = ce((function() {
                            return (0, d.Z)(J, {
                                [Q]: n,
                                [ee]: a && a.error,
                                [ne]: o
                            })
                        }), [o, n, a]);
                    return (0, i.jsxs)("div", { tabIndex: 0, className: x, onClick: u, onKeyDown: p, role: o ? "menuitem" : "", children: [(0, i.jsx)("div", { className: ie, children: r }), (0, i.jsxs)("div", { className: te, children: [(0, i.jsx)("span", { className: re, style: { opacity: n ? .6 : .2 }, children: t.type }), a && a.number ? (0, i.jsx)(oe, { number: a.number, color: l }) : null] })] })
                })),
                ve = (0, g.$j)(he)((function(e) {
                    var n = e.now,
                        r = e.name,
                        t = e.proxy,
                        a = e.latency,
                        o = e.isSelectable,
                        l = e.onClick,
                        u = ce((function() { return function(e, n) { return c.SJ.indexOf(n) > -1 ? "linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)" : xe(e) }(a, t.type) }), [a, t]),
                        p = ce((function() { var e = r; return a && "number" == typeof a.number && (e += " " + a.number + " ms"), e }), [r, a]),
                        x = s.useCallback((function() { o && l && l(r) }), [r, l, o]),
                        h = ce((function() {
                            return (0, d.Z)(se, {
                                [Q]: n,
                                [ne]: o
                            })
                        }), [o, n]),
                        f = s.useCallback((function(e) { e.keyCode === X && x() }), [x]);
                    return (0, i.jsx)("div", { title: p, className: h, style: { background: u }, onClick: x, onKeyDown: f, role: o ? "menuitem" : "" })
                }));
            const me = "_1pPZyUDtdp",
                ye = "_6uXcWV1Myk";

            function je(e) {
                var n = e.all,
                    r = e.now,
                    t = e.isSelectable,
                    s = e.itemOnTapCallback,
                    a = n;
                return (0, i.jsx)("div", { className: me, children: a.map((function(e) { return (0, i.jsx)(fe, { onClick: s, isSelectable: t, name: e, now: e === r }, e) })) })
            }

            function Ce(e) {
                var n = e.all,
                    r = e.now,
                    t = e.isSelectable,
                    s = e.itemOnTapCallback;
                return (0, i.jsx)("div", { className: ye, children: n.map((function(e) { return (0, i.jsx)(ve, { onClick: s, isSelectable: t, name: e, now: e === r }, e) })) })
            }
            var ge = s.createElement,
                be = s.useCallback,
                ke = s.useMemo,
                we = s.useState;

            function Ne() { return (0, i.jsx)("div", { className: K.zapWrapper, children: (0, i.jsx)(a.Z, { size: 16 }) }) }
            var Ze = (0, g.$j)((function(e, n) {
                    var r = n.name,
                        t = n.delay,
                        i = (0, c.yi)(e),
                        s = (0, o.VR)(e),
                        a = (0, o.S3)(e),
                        l = (0, o.sU)(e),
                        u = i[r];
                    return { all: u.all, delay: t, hideUnavailableProxies: l, proxySortBy: a, proxies: i, type: u.type, now: u.now, isOpen: s["proxyGroup:" + r] }
                }))((function(e) {
                    var n = e.name,
                        r = e.all,
                        s = e.delay,
                        a = e.hideUnavailableProxies,
                        o = e.proxySortBy,
                        u = e.proxies,
                        d = e.type,
                        p = e.now,
                        x = e.isOpen,
                        h = e.apiConfig,
                        f = e.dispatch,
                        v = G(r, s, a, o, u),
                        m = ke((function() { return "Selector" === d }), [d]),
                        y = (0, g.WX)(),
                        j = y.app.updateCollapsibleIsOpen,
                        C = y.proxies.requestDelayForProxies,
                        b = be((function() { j("proxyGroup", n, !x) }), [x, j, n]),
                        k = be((function(e) { m && f((0, c.hU)(h, n, e)) }), [h, f, n, m]),
                        w = we(!1),
                        N = (0, t.Z)(w, 2),
                        Z = N[0],
                        _ = N[1],
                        O = be((0, M.Z)(L().mark((function e() {
                            return L().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return _(!0), e.prev = 1, e.next = 4, C(h, v);
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 8:
                                        _(!1);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        }))), [v, h, C]);
                    return (0, i.jsxs)("div", { className: K.group, children: [(0, i.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, i.jsx)(H, { name: n, type: d, toggle: b, qty: v.length, isOpen: x }), (0, i.jsx)(l.Z, { kind: "minimal", onClick: O, isLoading: Z, children: (0, i.jsx)(Ne, {}) })] }), ge(x ? je : Ce, { all: v, now: p, isSelectable: m, itemOnTapCallback: k })] })
                })),
                _e = r(70296),
                Oe = r(86178),
                Se = r(88757),
                Pe = r(91033),
                Ue = s.memo,
                Ae = s.useState,
                Be = s.useRef,
                Le = s.useEffect;
            var Me = { initialOpen: { height: "auto", transition: { duration: 0 } }, open: function(e) { return { height: e, opacity: 1, visibility: "visible", transition: { duration: .3 } } }, closed: { height: 0, opacity: 0, visibility: "hidden", transition: { duration: .3 } } },
                De = { open: { x: 0 }, closed: { x: 20 } };
            const Re = Ue((function(e) {
                    var n, r, s = e.children,
                        a = e.isOpen,
                        o = Se.U.read().motion,
                        c = (n = a, r = Be(), Le((function() { r.current = n }), [n]), r.current),
                        l = function() {
                            var e = Be(),
                                n = Ae({ height: 0 }),
                                r = (0, t.Z)(n, 2),
                                i = r[0],
                                s = r[1];
                            return Le((function() {
                                var n = new Pe.Z((function(e) { var n = (0, t.Z)(e, 1)[0]; return s(n.contentRect) }));
                                return e.current && n.observe(e.current),
                                    function() { return n.disconnect() }
                            }), []), [e, i]
                        }(),
                        u = (0, t.Z)(l, 2),
                        d = u[0],
                        p = u[1].height;
                    return (0, i.jsx)("div", { children: (0, i.jsx)(o.div, { animate: a && c === a ? "initialOpen" : a ? "open" : "closed", custom: p, variants: Me, children: (0, i.jsx)(o.div, { variants: De, ref: d, children: s }) }) })
                })),
                Ee = "_113att7Ifr",
                Ve = "_26mH_RmGnl",
                Te = "_2cXcxGEUNI",
                Ie = "_2NjdAt9CvG";
            var We = s.useState,
                He = s.useCallback;
            var Fe = { rest: { scale: 1 }, pressed: { scale: .95 } },
                Ye = { rest: { rotate: 0 }, hover: { rotate: 360, transition: { duration: .3 } } };

            function $e() { var e = Se.U.read().motion; return (0, i.jsx)(e.div, { className: Ie, variants: Fe, initial: "rest", whileHover: "hover", whileTap: "pressed", children: (0, i.jsx)(e.div, { className: "flexCenter", variants: Ye, children: (0, i.jsx)(Oe.Z, { size: 16 }) }) }) }
            var qe = (0, g.$j)((function(e, n) {
                var r = n.proxies,
                    t = n.name,
                    i = (0, o.sU)(e),
                    s = (0, c.sj)(e),
                    a = (0, o.VR)(e);
                return { apiConfig: (0, o.Y$)(e), proxies: r, delay: s, hideUnavailableProxies: i, proxySortBy: (0, o.S3)(e), isOpen: a["proxyProvider:" + t] }
            }))((function(e) {
                var n = e.name,
                    r = e.proxies,
                    s = e.delay,
                    o = e.hideUnavailableProxies,
                    u = e.proxySortBy,
                    d = e.vehicleType,
                    p = e.updatedAt,
                    x = e.isOpen,
                    h = e.dispatch,
                    f = e.apiConfig,
                    v = G(r, s, o, u),
                    m = We(!1),
                    y = (0, t.Z)(m, 2),
                    j = y[0],
                    C = y[1],
                    b = He((function() { return h((0, c.kL)(f, n)) }), [f, h, n]),
                    k = He((0, M.Z)(L().mark((function e() {
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return C(!0), e.next = 3, h((0, c.IA)(f, n));
                                case 3:
                                    C(!1);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [f, h, n, C]),
                    w = (0, g.WX)().app.updateCollapsibleIsOpen,
                    N = He((function() { w("proxyProvider", n, !x) }), [x, w, n]),
                    Z = (0, _e.Z)(new Date(p), new Date);
                return (0, i.jsxs)("div", { className: Ve, children: [(0, i.jsx)(H, { name: n, toggle: N, type: d, isOpen: x, qty: v.length }), (0, i.jsx)("div", { className: Ee, children: (0, i.jsxs)("small", { children: ["Updated ", Z, " ago"] }) }), (0, i.jsxs)(Re, { isOpen: x, children: [(0, i.jsx)(je, { all: v }), (0, i.jsxs)("div", { className: Te, children: [(0, i.jsx)(l.Z, { text: "Update", start: (0, i.jsx)($e, {}), onClick: b }), (0, i.jsx)(l.Z, { text: "Health Check", start: (0, i.jsx)(a.Z, { size: 16 }), onClick: k, isLoading: j })] })] }), (0, i.jsx)(Re, { isOpen: !x, children: (0, i.jsx)(Ce, { all: v }) })] })
            }));

            function ze(e) { var n = e.items; return 0 === n.length ? null : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.Z, { title: "Proxy Provider" }), (0, i.jsx)("div", { children: n.map((function(e) { return (0, i.jsx)(qe, { name: e.name, proxies: e.proxies, type: e.type, vehicleType: e.vehicleType, updatedAt: e.updatedAt }, e.name) })) })] }) }
            const Ge = "_2epoA7G8CQ";

            function Ke(e) {
                var n = e.options,
                    r = e.selected,
                    s = e.onChange;
                return (0, i.jsx)("select", {
                    className: Ge,
                    value: r,
                    onChange: s,
                    children: n.map((function(e) {
                        var n = (0, t.Z)(e, 2),
                            r = n[0],
                            s = n[1];
                        return (0, i.jsx)("option", { value: r, children: s }, r)
                    }))
                })
            }
            var Xe = r(99175);
            const Je = "_1tkxMBL44k";
            var Qe = [
                    ["Natural", "配置文件的默认顺序"],
                    ["LatencyAsc", "延迟从小到大"],
                    ["LatencyDesc", "延迟从大到小"],
                    ["NameAsc", "节点首字母顺序"],
                    ["NameDesc", "节点首字母逆序"]
                ],
                en = s.useCallback;
            const nn = (0, g.$j)((function(e) { return { appConfig: { proxySortBy: (0, o.S3)(e), hideUnavailableProxies: (0, o.sU)(e), autoCloseOldConns: (0, o.xE)(e) } } }))((function(e) {
                var n = e.appConfig,
                    r = (0, g.WX)().app.updateAppConfig,
                    t = en((function(e) { r("proxySortBy", e.target.value) }), [r]),
                    s = en((function(e) { r("hideUnavailableProxies", e) }), [r]);
                return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("div", { className: Je, children: [(0, i.jsx)("span", { children: "节点组排序依据" }), (0, i.jsx)("div", { children: (0, i.jsx)(Ke, { options: Qe, selected: n.proxySortBy, onChange: t }) })] }), (0, i.jsx)("hr", {}), (0, i.jsxs)("div", { className: Je, children: [(0, i.jsx)("span", { children: "隐藏不可用节点" }), (0, i.jsx)("div", { children: (0, i.jsx)(Xe.Z, { name: "hideUnavailableProxies", checked: n.hideUnavailableProxies, onChange: s }) })] }), (0, i.jsxs)("div", { className: Je, children: [(0, i.jsx)("span", { children: "切换节点后，自动关闭旧节点的连接" }), (0, i.jsx)("div", { children: (0, i.jsx)(Xe.Z, { name: "autoCloseOldConns", checked: n.autoCloseOldConns, onChange: function(e) { return r("autoCloseOldConns", e) } }) })] })] })
            }));
            var rn = r(44774),
                tn = r(57944);

            function sn() {
                var e = (0, rn.g)(c.RE),
                    n = (0, t.Z)(e, 2),
                    r = n[0],
                    s = n[1];
                return (0, i.jsx)("input", { className: tn.Z.input, type: "text", value: s, onChange: r, placeholder: "搜索节点" })
            }
            var an = s.useState,
                on = s.useEffect,
                cn = s.useCallback,
                ln = s.useRef;

            function un() { return (0, i.jsx)("div", { className: A, style: { width: 48, height: 48, display: "flex", justifyContent: "center", alignItems: "center" }, children: (0, i.jsx)(a.Z, { width: 16, height: 16 }) }) }
            const dn = (0, g.$j)((function(e) { return { apiConfig: (0, o.Y$)(e), groupNames: (0, c.P_)(e), proxyProviders: (0, c.a)(e), delay: (0, c.sj)(e), showModalClosePrevConns: (0, c.DP)(e) } }))((function(e) {
                var n = e.dispatch,
                    r = e.groupNames,
                    s = e.delay,
                    o = e.proxyProviders,
                    d = e.apiConfig,
                    p = e.showModalClosePrevConns,
                    x = ln({}),
                    h = an(!1),
                    f = (0, t.Z)(h, 2),
                    v = f[0],
                    m = f[1],
                    y = cn((function() { v || (m(!0), n((0, c.$3)(d)).then((function() { return m(!1) }), (function() { return m(!1) }))) }), [d, n, v]),
                    k = cn((function() { x.current.startAt = Date.now(), n((0, c.Ry)(d)).then((function() { x.current.completeAt = Date.now() })) }), [d, n]);
                on((function() {
                    k();
                    var e = function() { x.current.startAt && Date.now() - x.current.startAt > 3e4 && k() };
                    return window.addEventListener("focus", e, !1),
                        function() { return window.removeEventListener("focus", e, !1) }
                }), [k]);
                var w = an(!1),
                    N = (0, t.Z)(w, 2),
                    Z = N[0],
                    A = N[1],
                    B = cn((function() { A(!1) }), []),
                    L = (0, g.WX)().proxies,
                    M = L.closeModalClosePrevConns,
                    D = L.closePrevConnsAndTheModal;
                return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(j, { isOpen: Z, onRequestClose: B, children: (0, i.jsx)(nn, {}) }), (0, i.jsxs)("div", { className: O, children: [(0, i.jsx)(u.Z, { title: "节点服务器" }), (0, i.jsxs)("div", { className: S, children: [(0, i.jsx)("div", { className: P, children: (0, i.jsx)(sn, {}) }), (0, i.jsx)(l.Z, { kind: "minimal", onClick: function() { return A(!0) }, children: (0, i.jsx)(b, { size: 16 }) })] })] }), (0, i.jsx)("div", { children: r.map((function(e) { return (0, i.jsx)("div", { className: U, children: (0, i.jsx)(Ze, { name: e, delay: s, apiConfig: d, dispatch: n }) }, e) })) }), (0, i.jsx)(ze, { items: o }), (0, i.jsx)("div", { style: { height: 60 } }), (0, i.jsx)(C.Lg, { icon: v ? (0, i.jsx)(un, {}) : (0, i.jsx)(a.Z, { width: 16, height: 16 }), onClick: y, text: "测试延迟", position: C.FK }), (0, i.jsx)(j, { isOpen: p, onRequestClose: M, children: (0, i.jsx)(_, { onClickPrimaryButton: function() { return D(d) }, onClickSecondaryButton: M }) })] })
            }))
        },
        51858: (e, n, r) => {
            "use strict";
            r.d(n, { FK: () => i, Lg: () => t.L, aU: () => t.a });
            var t = r(34179),
                i = { right: 10, bottom: 10 }
        },
        44774: (e, n, r) => {
            "use strict";
            r.d(n, { g: () => u });
            var t = r(34699),
                i = r(80125),
                s = r(67294),
                a = r(2804),
                o = s.useCallback,
                c = s.useState,
                l = s.useMemo;

            function u(e) {
                var n = (0, a.FV)(e),
                    r = (0, t.Z)(n, 2)[1],
                    s = c(""),
                    u = (0, t.Z)(s, 2),
                    d = u[0],
                    p = u[1],
                    x = l((function() { return (0, i.Z)(r, 300) }), [r]);
                return [o((function(e) { p(e.target.value), x(e.target.value) }), [x]), d]
            }
        },
        57944: (e, n, r) => {
            "use strict";
            r.d(n, { Z: () => t });
            const t = { input: "_1I0EXOg8Vu" }
        }
    }
]);
//# sourceMappingURL=proxies.e9b312dfe93094fab44d.js.map