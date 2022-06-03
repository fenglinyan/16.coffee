(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
    [170], {
        33380: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, { default: () => de });
            t(82526), t(41817), t(92222), t(57327), t(34553), t(89554), t(91038), t(26699), t(66992), t(21249), t(65069), t(47042), t(5212), t(49337), t(41539), t(39714), t(32023), t(54747), t(33948);
            var n = t(87329),
                s = t(34699),
                o = t(96156),
                a = t(85893),
                c = t(67294),
                i = t(45720),
                u = t(50794),
                l = t(78268),
                d = t(340),
                f = t(97750),
                p = t(23532),
                h = t(97798);
            const j = "_1L_OYNGd-Q",
                y = "_3KG2Wl3UIL",
                v = "_2VBzsdXyrW",
                m = "_3jbpkYalBS";
            var x = t(86010),
                b = t(70296),
                g = t(27434),
                w = t(79521),
                O = t(92375);
            const C = "_1jfIf4GmHx",
                P = "_3lQG38TYko",
                S = "_2jKsqjrYbo",
                Z = "MuvmFG__PV",
                k = "_3ydhc_nkf0",
                D = "_3q0v0OLzZL",
                H = "_1XNg9MalRS";

            function L(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function _(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? L(Object(t), !0).forEach((function(r) {
                        (0, o.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            var N = !0,
                R = [{ accessor: "id", show: !1 }, { Header: "目标主机", accessor: "host" }, { Header: "下载数据量", accessor: "download", sortDescFirst: N }, { Header: "上传数据量", accessor: "upload", sortDescFirst: N }, { Header: "下载速度", accessor: "downloadSpeedCurr", sortDescFirst: N }, { Header: "上传速度", accessor: "uploadSpeedCurr", sortDescFirst: N }, { Header: "连接策略", accessor: "chains" }, { Header: "规则", accessor: "rule" }, { Header: "时间", accessor: "start", sortDescFirst: N }, { Header: "源", accessor: "source" }, { Header: "目标IP", accessor: "destinationIP" }, { Header: "连接类型", accessor: "type" }];

            function I(e) {
                switch (e.column.id) {
                    case "start":
                        return (0, b.Z)(e.value, 0);
                    case "download":
                    case "upload":
                        return (0, O.Z)(e.value);
                    case "downloadSpeedCurr":
                    case "uploadSpeedCurr":
                        return (0, O.Z)(e.value) + "/s";
                    default:
                        return e.value
                }
            }
            var T = { sortBy: [{ id: "id", desc: !0 }], hiddenColumns: ["id"] };
            const B = function(e) {
                var r = e.data,
                    t = (0, w.useTable)({ columns: R, data: r, initialState: T, autoResetSortBy: !1 }, w.useSortBy),
                    n = t.getTableProps,
                    s = t.headerGroups,
                    o = t.rows,
                    c = t.prepareRow;
                return (0, a.jsx)("div", _(_({}, n()), {}, { children: s.map((function(e) { return (0, a.jsxs)("div", _(_({}, e.getHeaderGroupProps()), {}, { className: C, children: [e.headers.map((function(e) { return (0, a.jsxs)("div", _(_({}, e.getHeaderProps(e.getSortByToggleProps())), {}, { className: P, children: [(0, a.jsx)("span", { children: e.render("Header") }), (0, a.jsx)("span", { className: D, children: e.isSorted ? (0, a.jsx)("span", { className: e.isSortedDesc ? "" : H, children: (0, a.jsx)(g.Z, { size: 16 }) }) : null })] })) })), o.map((function(e, r) { return c(e), e.cells.map((function(e, t) { return (0, a.jsx)("div", _(_({}, e.getCellProps()), {}, { className: (0, x.Z)(S, r % 2 == 0 && Z, t >= 1 && t <= 4 && k), children: I(e) })) })) }))] })) })) }))
            };
            var F = t(68912),
                A = t(83253),
                E = t.n(A),
                q = t(25904),
                $ = t(93621);
            const z = "_2EXTX1C3T7",
                K = "_3Or8nP9psK",
                G = "cMLUu0qS4R",
                U = "_29FK6hdfwZ";
            var M = c.useRef,
                Y = c.useCallback,
                Q = c.useMemo;

            function X(e) {
                var r = e.isOpen,
                    t = e.onRequestClose,
                    n = e.primaryButtonOnTap,
                    s = M(null),
                    o = Y((function() { s.current.focus() }), []),
                    c = Q((function() { return { base: (0, x.Z)($.Z.content, K), afterOpen: G, beforeClose: "" } }), []);
                return (0, a.jsxs)(E(), { isOpen: r, onRequestClose: t, onAfterOpen: o, className: c, overlayClassName: (0, x.Z)($.Z.overlay, z), children: [(0, a.jsx)("p", { children: "Are you sure you want to close all connections?" }), (0, a.jsxs)("div", { className: U, children: [(0, a.jsx)(q.Z, { onClick: n, ref: s, children: "I'm sure" }), (0, a.jsx)("div", { style: { width: 20 } }), (0, a.jsx)(q.Z, { onClick: t, children: "No" })] })] })
            }
            var W = t(51858),
                V = t(55679),
                J = t(3835);

            function ee(e, r) {
                var t;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = function(e, r) { if (!e) return; if ("string" == typeof e) return re(e, r); var t = Object.prototype.toString.call(e).slice(8, -1); "Object" === t && e.constructor && (t = e.constructor.name); if ("Map" === t || "Set" === t) return Array.from(e); if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return re(e, r) }(e)) || r && e && "number" == typeof e.length) {
                        t && (e = t);
                        var n = 0,
                            s = function() {};
                        return { s, n: function() { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] } }, e: function(e) { throw e }, f: s }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    c = !1;
                return { s: function() { t = e[Symbol.iterator]() }, n: function() { var e = t.next(); return a = e.done, e }, e: function(e) { c = !0, o = e }, f: function() { try { a || null == t.return || t.return() } finally { if (c) throw o } } }
            }

            function re(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function te(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) { return Object.getOwnPropertyDescriptor(e, r).enumerable }))), t.push.apply(t, n)
                }
                return t
            }

            function ne(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? te(Object(t), !0).forEach((function(r) {
                        (0, o.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : te(Object(t)).forEach((function(r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)) }))
                }
                return e
            }
            var se = c.useEffect,
                oe = c.useState,
                ae = c.useRef,
                ce = c.useCallback;

            function ie(e, r) { return r ? e.filter((function(e) { return [e.host, e.sourceIP, e.sourcePort, e.destinationIP, e.chains, e.rule, e.type, e.network].some((function(e) { return t = r, e.toLowerCase().includes(t.toLowerCase()); var t })) })) : e }

            function ue(e) { return e.length > 0 ? (0, a.jsx)(B, { data: e }) : (0, a.jsx)("div", { className: j, children: (0, a.jsx)(J.Z, { width: 200, height: 200, c1: "var(--color-text)" }) }) }

            function le(e) { var r = e.qty; return r < 100 ? "" + r : "99+" }
            const de = (0, V.$j)((function(e) { return { apiConfig: (0, h.Y$)(e) } }))((function(e) {
                var r = e.apiConfig,
                    t = (0, p.Z)(),
                    o = (0, s.Z)(t, 2),
                    c = o[0],
                    h = o[1],
                    j = oe([]),
                    x = (0, s.Z)(j, 2),
                    b = x[0],
                    g = x[1],
                    w = oe([]),
                    O = (0, s.Z)(w, 2),
                    C = O[0],
                    P = O[1],
                    S = oe(""),
                    Z = (0, s.Z)(S, 2),
                    k = Z[0],
                    D = Z[1],
                    H = ie(b, k),
                    L = ie(C, k),
                    _ = oe(!1),
                    N = (0, s.Z)(_, 2),
                    R = N[0],
                    I = N[1],
                    T = ce((function() { return I(!0) }), []),
                    B = ce((function() { return I(!1) }), []),
                    A = oe(!1),
                    E = (0, s.Z)(A, 2),
                    q = E[0],
                    $ = E[1],
                    z = ce((function() { $((function(e) { return !e })) }), []),
                    K = ce((function() { f.PI(r), B() }), [r, B]),
                    G = ae(b),
                    U = ce((function(e) {
                        var r, t = e.connections,
                            s = function(e) {
                                for (var r = {}, t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    r[n.id] = n
                                }
                                return r
                            }(G.current),
                            o = new Date,
                            a = t.map((function(e) {
                                return function(e, r, t) {
                                    var n = e.id,
                                        s = e.metadata,
                                        o = e.upload,
                                        a = e.download,
                                        c = e.start,
                                        i = e.chains,
                                        u = e.rule,
                                        l = s.host,
                                        d = s.destinationPort,
                                        f = s.destinationIP,
                                        p = s.network,
                                        h = s.type,
                                        j = s.sourceIP,
                                        y = s.sourcePort;
                                    "" === l && (l = f);
                                    var v = ne(ne({ id: n, upload: o, download: a, start: t - new Date(c), chains: i.reverse().join(" / "), rule: u }, s), {}, { host: `${l}:${d}`, type: `${h}(${p})`, source: `${j}:${y}` }),
                                        m = r[n];
                                    return v.downloadSpeedCurr = a - (m ? m.download : 0), v.uploadSpeedCurr = o - (m ? m.upload : 0), v
                                }(e, s, o)
                            })),
                            c = [],
                            i = ee(G.current);
                        try {
                            var u = function() {
                                var e = r.value;
                                a.findIndex((function(r) { return r.id === e.id })) < 0 && c.push(e)
                            };
                            for (i.s(); !(r = i.n()).done;) u()
                        } catch (e) { i.e(e) } finally { i.f() }
                        P((function(e) { return [].concat(c, (0, n.Z)(e)).slice(0, 101) })), !a || 0 === a.length && 0 === G.current.length || q ? G.current = a : (G.current = a, g(a))
                    }), [g, q]);
                return se((function() { return f.rQ(r, U) }), [r, U]), (0, a.jsxs)("div", { children: [(0, a.jsx)(F.Z, { title: "连接" }), (0, a.jsxs)(d.mQ, { children: [(0, a.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "space-between" }, children: [(0, a.jsxs)(d.td, { children: [(0, a.jsxs)(d.OK, { children: [(0, a.jsx)("span", { children: "活跃连接" }), (0, a.jsx)("span", { className: y, children: (0, a.jsx)(le, { qty: H.length }) })] }), (0, a.jsxs)(d.OK, { children: [(0, a.jsx)("span", { children: "已关闭连接" }), (0, a.jsx)("span", { className: y, children: (0, a.jsx)(le, { qty: L.length }) })] })] }), (0, a.jsx)("div", { className: v, children: (0, a.jsx)("input", { type: "text", name: "filter", autoComplete: "off", className: m, placeholder: "搜索连接", onChange: function(e) { return D(e.target.value) } }) })] }), (0, a.jsx)("div", { ref: c, style: { padding: 30, paddingBottom: 30, paddingTop: 0 }, children: (0, a.jsxs)("div", { style: { height: h - 30, overflow: "auto" }, children: [(0, a.jsxs)(d.x4, { children: [(0, a.jsx)(a.Fragment, { children: ue(H) }), (0, a.jsx)(W.Lg, { icon: q ? (0, a.jsx)(i.Z, { size: 16 }) : (0, a.jsx)(u.Z, { size: 16 }), mainButtonStyles: q ? { background: "#e74c3c" } : {}, position: W.FK, text: q ? "恢复刷新" : "暂停刷新", onClick: z, children: (0, a.jsx)(W.aU, { text: "关闭所有连接", onClick: T, children: (0, a.jsx)(l.Z, { size: 10 }) }) })] }), (0, a.jsx)(d.x4, { children: ue(L) })] }) }), (0, a.jsx)(X, { isOpen: R, primaryButtonOnTap: K, onRequestClose: B })] })] })
            }))
        },
        51858: (e, r, t) => {
            "use strict";
            t.d(r, { FK: () => s, Lg: () => n.L, aU: () => n.a });
            var n = t(34179),
                s = { right: 10, bottom: 10 }
        },
        23532: (e, r, t) => {
            "use strict";
            t.d(r, { Z: () => u });
            var n = t(34699),
                s = t(67294),
                o = s.useState,
                a = s.useRef,
                c = s.useCallback,
                i = s.useLayoutEffect;

            function u() {
                var e = a(null),
                    r = o(200),
                    t = (0, n.Z)(r, 2),
                    s = t[0],
                    u = t[1],
                    l = c((function() {
                        var r = e.current.getBoundingClientRect().top;
                        u(window.innerHeight - r)
                    }), []);
                return i((function() {
                    return l(), window.addEventListener("resize", l),
                        function() { window.removeEventListener("resize", l) }
                }), [l]), [e, s]
            }
        }
    }
]);
//# sourceMappingURL=conns.08972bd7cc771f3299d5.js.map