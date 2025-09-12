(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[39096], {
    37297: (e, i, t) => {
        "use strict";
        t.r(i),
        t.d(i, {
            default: () => L
        });
        var n = t(95155)
          , a = t(73991)
          , l = t.n(a)
          , s = t(66255)
          , r = t(56474)
          , o = t(5653)
          , c = t(28902)
          , d = t(35694)
          , m = t(7548)
          , u = t(32590)
          , _ = t(48342)
          , h = t(32110)
          , g = t(73287)
          , x = t(85744)
          , v = t(12115)
          , p = t(36760)
          , w = t(98799);
        function b() {
            let e = (0,
            w.A)();
            return (0,
            n.jsxs)("svg", {
                width: "32",
                height: "34",
                viewBox: "0 0 32 34",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsxs)("g", {
                    filter: "url(#".concat(e, ")"),
                    suppressHydrationWarning: !0,
                    children: [(0,
                    n.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "8",
                        fill: "#566194"
                    }), (0,
                    n.jsx)("rect", {
                        x: "9",
                        y: "10",
                        width: "2",
                        height: "12",
                        rx: "1",
                        fill: "#2F385C"
                    }), (0,
                    n.jsx)("rect", {
                        x: "15",
                        y: "10",
                        width: "2",
                        height: "12",
                        rx: "1",
                        fill: "#2F385C"
                    }), (0,
                    n.jsx)("rect", {
                        x: "21",
                        y: "10",
                        width: "2",
                        height: "12",
                        rx: "1",
                        fill: "#2F385C"
                    })]
                }), (0,
                n.jsx)("defs", {
                    children: (0,
                    n.jsxs)("filter", {
                        id: e,
                        suppressHydrationWarning: !0,
                        x: "0",
                        y: "0",
                        width: "32",
                        height: "34",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0,
                        n.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0,
                        n.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0,
                        n.jsx)("feOffset", {
                            dy: "2"
                        }), (0,
                        n.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "out"
                        }), (0,
                        n.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.208 0 0 0 0 0.244571 0 0 0 0 0.4 0 0 0 1 0"
                        }), (0,
                        n.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_1_11605"
                        }), (0,
                        n.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_1_11605",
                            result: "shape"
                        })]
                    })
                })]
            })
        }
        var j = t(73e3)
          , C = t(65663)
          , f = t(77881)
          , N = t(32449)
          , D = t(77343)
          , A = t(58733)
          , B = t(94877)
          , F = t(61182)
          , M = t(44013);
        let y = new B.Howl({
            src: "/audio/bet.mp3",
            autoplay: !1
        })
          , R = new B.Howl({
            src: "/audio/slider.mp3",
            autoplay: !1
        })
          , S = new B.Howl({
            src: "/audio/switch.mp3",
            autoplay: !1
        })
          , E = new B.Howl({
            src: "/audio/win.mp3",
            autoplay: !1
        });
        function L() {
            let e = (0,
            u.A)()
              , i = e ? C.A.findVip(e.vipXp) : null
              , [t,a] = (0,
            p.A)(10)
              , [w,B] = (0,
            p.A)("50", 99)
              , [L,k] = (0,
            v.useState)("before")
              , [I,H] = (0,
            v.useState)(!1)
              , O = "after" === L ? 100 - w : w
              , X = t ? (parseFloat(t) / (parseFloat(O) / 100)).toFixed(2) : "0.00"
              , T = (1 / (parseFloat(O) / 100)).toFixed(2)
              , [W,Z] = (0,
            v.useState)({})
              , [z,P] = (0,
            v.useState)([])
              , Q = (0,
            v.useRef)(null)
              , V = (0,
            F.A)(Q, e => {
                e.firstElementChild.style.transform = "scale(".concat(e.offsetHeight / 610, ")")
            }
            )
              , q = function(e, i) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e6;
                null == S || S.seek(0),
                null == S || S.play(),
                i(Math.min(t, +(2 * e).toFixed(2)).toFixed(2))
            }
              , G = function(e, i) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
                null == S || S.seek(0),
                null == S || S.play(),
                i(Math.max(t, +(e / 2).toFixed(2)).toFixed(2))
            }
              , K = e => {
                k(e),
                null == S || S.seek(0),
                null == S || S.play()
            }
            ;
            (0,
            v.useEffect)( () => {
                I && (null == R || R.seek(0),
                null == R || R.play()),
                H(!0)
            }
            , [O]);
            let Y = (0,
            v.useRef)(null)
              , {touchS: U, touchM: $, drag: J, down: ee} = function(e, i, t) {
                let[n,a] = (0,
                v.useState)(!1);
                return (0,
                v.useEffect)( () => {
                    let l = () => a(!1);
                    document.addEventListener("mouseup", l),
                    document.addEventListener("touchend", l),
                    document.addEventListener("touchcancel", l);
                    let s = a => {
                        if (!n || !e.current)
                            return !0;
                        a.preventDefault();
                        let l = e.current.parentNode
                          , s = Math.max(1, Math.min(99, Math.ceil((a.clientX - l.getBoundingClientRect().x) / (l.getBoundingClientRect().width / 100))));
                        return i(s + "%"),
                        t(s + "%"),
                        !1
                    }
                    ;
                    return document.addEventListener("mousemove", s),
                    () => {
                        document.removeEventListener("mouseup", l),
                        document.removeEventListener("touchend", l),
                        document.removeEventListener("touchcancel", l),
                        document.removeEventListener("mousemove", s)
                    }
                }
                , [n]),
                {
                    touchS: n => {
                        a(!0);
                        let l = e.current.parentNode
                          , s = Math.max(1, Math.min(99, Math.ceil((n.nativeEvent.targetTouches[0].clientX - l.getBoundingClientRect().x) / (l.getBoundingClientRect().width / 100))));
                        i(s + "%"),
                        t(s + "%")
                    }
                    ,
                    touchM: a => {
                        if (!n || !e.current)
                            return !0;
                        let l = e.current.parentNode
                          , s = Math.max(1, Math.min(99, Math.ceil((a.nativeEvent.targetTouches[0].clientX - l.getBoundingClientRect().x) / (l.getBoundingClientRect().width / 100))));
                        return i(s + "%"),
                        t(s + "%"),
                        !1
                    }
                    ,
                    drag: n,
                    down: n => {
                        a(!0),
                        n.preventDefault();
                        let l = e.current.parentNode
                          , s = Math.max(1, Math.min(99, Math.ceil((n.clientX - l.getBoundingClientRect().x) / (l.getBoundingClientRect().width / 100))));
                        return i(s + "%"),
                        t(s + "%"),
                        !1
                    }
                }
            }(Y, B, B)
              , ei = (0,
            n.jsx)("svg", {
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M7.20845 10.4165C8.98013 10.4165 10.4166 8.97996 10.4166 7.20824C10.4166 5.43653 8.98013 4 7.20845 4C5.43678 4 4 5.43653 4 7.20824C4 8.97996 5.4365 10.4165 7.20845 10.4165ZM7.20845 6.33352C7.32334 6.33354 7.4371 6.35618 7.54323 6.40017C7.64937 6.44415 7.7458 6.50861 7.82702 6.58986C7.90825 6.67111 7.97267 6.76756 8.01662 6.87371C8.06057 6.97986 8.08318 7.09363 8.08316 7.20852C8.08314 7.32341 8.06049 7.43717 8.01651 7.5433C7.97253 7.64944 7.90807 7.74587 7.82682 7.8271C7.74558 7.90832 7.64912 7.97275 7.54298 8.0167C7.43683 8.06065 7.32306 8.08326 7.20818 8.08324C6.97615 8.08324 6.75363 7.99107 6.58957 7.827C6.4255 7.66293 6.33333 7.44041 6.33333 7.20838C6.33333 6.97635 6.4255 6.75383 6.58957 6.58976C6.75363 6.42569 6.97643 6.33352 7.20845 6.33352ZM14.7918 11.5835C13.0201 11.5835 11.5836 13.02 11.5836 14.7918C11.5836 16.5635 13.0201 18 14.7918 18C16.5635 18 18 16.5635 18 14.7918C18 13.02 16.5635 11.5835 14.7918 11.5835ZM14.7918 15.6665C14.5598 15.6665 14.3373 15.5743 14.1732 15.4102C14.0092 15.2462 13.917 15.0236 13.917 14.7916C13.917 14.5596 14.0092 14.3371 14.1732 14.173C14.3373 14.0089 14.5598 13.9168 14.7918 13.9168C15.0238 13.9168 15.2464 14.0089 15.4104 14.173C15.5745 14.3371 15.6667 14.5596 15.6667 14.7916C15.6667 15.0236 15.5745 15.2462 15.4104 15.4102C15.2464 15.5743 15.0238 15.6665 14.7918 15.6665ZM14.9547 4.00056L4.00056 18H6.96375L17.9182 4.00056H14.9547Z",
                    fill: "currentColor"
                })
            })
              , et = (0,
            n.jsx)("svg", {
                className: l().roll,
                onClick: () => K("after" === L ? "before" : "after"),
                width: "22",
                height: "21",
                viewBox: "0 0 22 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.98598 8.18731C7.5195 8.74184 7.20264 9.41537 7.06773 10.1391H8.33423L5.66773 14.0488L3.00098 10.1391H4.36773C4.50909 8.87807 4.97963 7.68149 5.7282 6.67951C6.47677 5.67752 7.47472 4.90848 8.61354 4.45599C9.75236 4.00351 10.9885 3.88489 12.1875 4.11305C13.3865 4.3412 14.5025 4.90739 15.4142 5.75006L13.6677 7.83341C13.2739 7.46477 12.8136 7.18127 12.3138 6.99933C11.8139 6.8174 11.2843 6.74065 10.7558 6.77355C10.2272 6.80645 9.71021 6.94833 9.2347 7.19097C8.75919 7.43362 8.33466 7.77219 7.98573 8.18705M16.3342 7.95138L19.001 11.8613H17.6675C17.526 13.1223 17.0555 14.3188 16.3069 15.3207C15.5583 16.3226 14.5604 17.0916 13.4216 17.544C12.2829 17.9965 11.0468 18.1151 9.84785 17.887C8.6489 17.6588 7.53291 17.0927 6.62123 16.2501L8.36773 14.1668C8.89464 14.6506 9.53457 14.9814 10.2231 15.1258C10.9117 15.2702 11.6247 15.2232 12.2903 14.9895C12.9559 14.7559 13.5507 14.3437 14.0149 13.7946C14.479 13.2454 14.7962 12.5787 14.9345 11.8613H13.6677L16.3342 7.95138Z",
                    fill: "currentColor"
                })
            })
              , [en,ea] = (0,
            v.useState)(!1)
              , el = (0,
            N.A)(async () => {
                if (t > 2e5 || i && t > i.maxBet)
                    return window.addNotification({
                        title: window.mb_lang.errors.game_error,
                        desc: window.mb_lang.games.bet_max("".concat(i ? i.maxBet : 2e5, ".00"))
                    });
                if (t > e.balance)
                    return window.addNotification({
                        title: window.mb_lang.errors.game_error,
                        desc: window.mb_lang.games.insufficient_funds
                    });
                null == y || y.play();
                let n = await (0,
                f.A)(C.A.api + "/mammoth/games/dice", {
                    method: "POST",
                    body: {
                        chance: O,
                        bet: +(+t).toFixed(2),
                        type: L
                    }
                });
                if (!(null == n ? void 0 : n.success))
                    return window.addNotification({
                        title: window.mb_lang.errors.game_error,
                        desc: (0,
                        M.q)(n.error)
                    });
                if ("balance"in (null == n ? void 0 : n.data)) {
                    e.bonus.did < e.bonus.need && e.bonus.did + parseFloat(t) >= e.bonus.need && window.addNotification({
                        title: window.mb_lang.wager.you_wagered,
                        desc: window.mb_lang.wager.desc,
                        type: "wagered"
                    }),
                    e.updateBalance(+n.data.balance.toFixed(2));
                    let i = (null == n ? void 0 : n.data.number) || 0;
                    (null == n ? void 0 : n.data.won) && (null == E || E.seek(0),
                    null == E || E.play()),
                    (null == W ? void 0 : W.timeout) && clearTimeout(W.timeout);
                    let a = {
                        lose: !(null == n ? void 0 : n.data.won),
                        number: i,
                        active: !0
                    }
                      , l = setTimeout( () => Z({
                        ...a,
                        timeout: null,
                        active: !1
                    }), 3e3);
                    Z({
                        ...a,
                        timeout: l
                    }),
                    P([{
                        value: parseFloat(T).toFixed(2),
                        win: !!(null == n ? void 0 : n.data.won)
                    }, ...z].slice(0, 15))
                }
            }
            , en, ea)
              , es = null;
            t < .1 ? es = "bet_01" : (t > 2e5 || i && t > i.maxBet) && (es = "bet_max");
            let er = (e, i) => (0,
            n.jsx)(x.A, {
                className: (0,
                j.A)(l().bet, e),
                onClick: el,
                children: en ? (0,
                n.jsx)(A.A, {}) : i.games.bet
            });
            return (0,
            n.jsx)(s.A, {
                children: s => (0,
                n.jsx)(r.A, {
                    requireAuth: !0,
                    children: (0,
                    n.jsxs)(o.A, {
                        lang: s,
                        children: [(0,
                        n.jsx)(c.A, {
                            lang: s
                        }), (0,
                        n.jsx)("div", {
                            className: l().main,
                            children: (0,
                            n.jsx)("div", {
                                className: l().content,
                                children: (0,
                                n.jsx)(d.A, {
                                    lang: s,
                                    game: "dice",
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: l().game,
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: l().gameLeft,
                                            children: [(0,
                                            n.jsx)(m.A, {
                                                error: es ? s.games[es]((i ? i.maxBet : 2e5) + ".00") : null,
                                                title: (0,
                                                n.jsxs)("div", {
                                                    className: l().balance,
                                                    children: [(0,
                                                    n.jsx)("span", {
                                                        children: s.games.bet_amount
                                                    }), e ? (0,
                                                    n.jsxs)("span", {
                                                        className: l().balanceRight,
                                                        children: [(0,
                                                        n.jsx)(_.A, {
                                                            variant: "Bold",
                                                            color: "currentColor"
                                                        }), (0,
                                                        h.zc)((null == e ? void 0 : e.balance) || 0)]
                                                    }) : (0,
                                                    n.jsx)(g.A, {
                                                        className: l().balanceSkeleton
                                                    })]
                                                }),
                                                value: t,
                                                onChange: e => a(e.target.value),
                                                rightContent: "$",
                                                manageButtons: [{
                                                    text: "1/2",
                                                    action: () => G(t, a)
                                                }, {
                                                    text: "2X",
                                                    action: () => q(t, a)
                                                }]
                                            }), er(l().mobile, s), (0,
                                            n.jsx)(m.A, {
                                                value: X,
                                                title: s.games.profit_on_win,
                                                rightContent: "$",
                                                disabled: !0
                                            }), er(l().notMobile, s)]
                                        }), (0,
                                        n.jsx)("div", {
                                            className: l().gameRightOver,
                                            ref: V,
                                            children: (0,
                                            n.jsxs)("div", {
                                                className: l().gameRight,
                                                children: [(0,
                                                n.jsxs)("div", {
                                                    className: l().top,
                                                    children: [(0,
                                                    n.jsx)("div", {
                                                        className: l().topShadow
                                                    }), (null == z ? void 0 : z.length) > 0 ? z.map( (e, i) => (0,
                                                    n.jsxs)("div", {
                                                        className: (0,
                                                        j.A)(l().gameResult, [e.win, l().win]),
                                                        children: ["X", e.value]
                                                    }, i)) : (0,
                                                    n.jsx)("div", {
                                                        className: l().noWins,
                                                        children: s.games.no_wins
                                                    })]
                                                }), (0,
                                                n.jsxs)("div", {
                                                    className: l().gameIn,
                                                    children: [(0,
                                                    n.jsx)("div", {
                                                        className: l().zero
                                                    }), (0,
                                                    n.jsxs)("div", {
                                                        className: l().center,
                                                        children: [(0,
                                                        n.jsx)("img", {
                                                            src: "/bg/dice.webp",
                                                            className: l().bg
                                                        }), (0,
                                                        n.jsx)("div", {
                                                            className: l().possible,
                                                            children: (0,
                                                            h.zc)(parseFloat(X))
                                                        }), (0,
                                                        n.jsx)("div", {
                                                            className: l().desc,
                                                            children: s.games.possible_winning
                                                        }), (0,
                                                        n.jsxs)("div", {
                                                            className: l().overBar,
                                                            children: [(0,
                                                            n.jsxs)("div", {
                                                                className: l().points,
                                                                children: [(0,
                                                                n.jsxs)("div", {
                                                                    className: l().point,
                                                                    children: [(0,
                                                                    n.jsx)("span", {
                                                                        children: "0"
                                                                    }), (0,
                                                                    n.jsx)("img", {
                                                                        src: "/mix/diceArrow.svg"
                                                                    })]
                                                                }), (0,
                                                                n.jsxs)("div", {
                                                                    className: l().point,
                                                                    children: [(0,
                                                                    n.jsx)("span", {
                                                                        children: "25"
                                                                    }), (0,
                                                                    n.jsx)("img", {
                                                                        src: "/mix/diceArrow.svg"
                                                                    })]
                                                                }), (0,
                                                                n.jsxs)("div", {
                                                                    className: l().point,
                                                                    children: [(0,
                                                                    n.jsx)("span", {
                                                                        children: "50"
                                                                    }), (0,
                                                                    n.jsx)("img", {
                                                                        src: "/mix/diceArrow.svg"
                                                                    })]
                                                                }), (0,
                                                                n.jsxs)("div", {
                                                                    className: l().point,
                                                                    children: [(0,
                                                                    n.jsx)("span", {
                                                                        children: "75"
                                                                    }), (0,
                                                                    n.jsx)("img", {
                                                                        src: "/mix/diceArrow.svg"
                                                                    })]
                                                                }), (0,
                                                                n.jsxs)("div", {
                                                                    className: l().point,
                                                                    children: [(0,
                                                                    n.jsx)("span", {
                                                                        children: "100"
                                                                    }), (0,
                                                                    n.jsx)("img", {
                                                                        src: "/mix/diceArrow.svg"
                                                                    })]
                                                                })]
                                                            }), (0,
                                                            n.jsx)("div", {
                                                                className: l().barCont,
                                                                children: (0,
                                                                n.jsx)("div", {
                                                                    className: l().barIn,
                                                                    onMouseDown: ee,
                                                                    onTouchStart: U,
                                                                    onTouchMove: $,
                                                                    children: (0,
                                                                    n.jsxs)("div", {
                                                                        className: (0,
                                                                        j.A)(l().bar, ["after" === L, l().inverse]),
                                                                        children: [(0,
                                                                        n.jsx)("div", {
                                                                            className: l().dragger,
                                                                            style: {
                                                                                left: "".concat(w, "%")
                                                                            },
                                                                            ref: Y,
                                                                            children: (0,
                                                                            n.jsxs)("div", {
                                                                                className: l().draggerIn,
                                                                                children: [(0,
                                                                                n.jsx)(D.A, {
                                                                                    active: J,
                                                                                    green: !0,
                                                                                    text: O,
                                                                                    className: l().tooltip
                                                                                }), (0,
                                                                                n.jsx)(b, {})]
                                                                            })
                                                                        }), (0,
                                                                        n.jsxs)("div", {
                                                                            className: (0,
                                                                            j.A)(l().winDice, [null == W ? void 0 : W.active, l().active], [null == W ? void 0 : W.lose, l().lose]),
                                                                            style: {
                                                                                left: "".concat(parseFloat((null == W ? void 0 : W.number) || 0).toFixed(2), "%")
                                                                            },
                                                                            children: [(0,
                                                                            n.jsx)("img", {
                                                                                src: "/mix/winDice.svg"
                                                                            }), (0,
                                                                            n.jsx)("span", {
                                                                                children: parseFloat((null == W ? void 0 : W.number) || 0).toFixed(2)
                                                                            })]
                                                                        }), (0,
                                                                        n.jsx)("div", {
                                                                            className: l().barActive,
                                                                            style: {
                                                                                width: "".concat(w, "%")
                                                                            }
                                                                        })]
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0,
                                                    n.jsxs)("div", {
                                                        className: l().bottom,
                                                        children: [(0,
                                                        n.jsx)(m.A, {
                                                            value: T,
                                                            title: s.games.multiplier,
                                                            rightContent: "X",
                                                            disabled: !0
                                                        }), (0,
                                                        n.jsx)(m.A, {
                                                            value: w,
                                                            title: s.games["before" === L ? "roll_under" : "roll_over"],
                                                            rightContent: et,
                                                            disabled: !0
                                                        }), (0,
                                                        n.jsx)(m.A, {
                                                            value: O,
                                                            title: s.games.win_chance,
                                                            rightContent: ei,
                                                            disabled: !0
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        }
    }
    ,
    62961: (e, i, t) => {
        Promise.resolve().then(t.bind(t, 37297))
    }
    ,
    73991: e => {
        e.exports = {
            main: "Dice_main__vm3_E",
            content: "Dice_content__HBz8R",
            game: "Dice_game__KfVQ2",
            gameLeft: "Dice_gameLeft__3KW1R",
            gameRight: "Dice_gameRight__SuL2v",
            gameRightOver: "Dice_gameRightOver__i2IOd",
            balance: "Dice_balance__v_sPC",
            balanceRight: "Dice_balanceRight__YR0XR",
            balanceSkeleton: "Dice_balanceSkeleton__7UYuu",
            top: "Dice_top__7dfmI",
            topShadow: "Dice_topShadow__ANCxw",
            gameResult: "Dice_gameResult__lxSnE",
            win: "Dice_win__E4PVF",
            zero: "Dice_zero__b9MIe",
            gameIn: "Dice_gameIn__AvGOQ",
            bg: "Dice_bg__v6FDd",
            center: "Dice_center__SBHYr",
            possible: "Dice_possible__5dkSF",
            desc: "Dice_desc__4lPtk",
            overBar: "Dice_overBar__5LM8B",
            point: "Dice_point__qgCNK",
            points: "Dice_points__CDmu9",
            barCont: "Dice_barCont__QmLel",
            barIn: "Dice_barIn__yqqY9",
            bar: "Dice_bar__3XQZi",
            barActive: "Dice_barActive__7npB_",
            inverse: "Dice_inverse__7Au_3",
            bottom: "Dice_bottom__WiE9h",
            dragger: "Dice_dragger__TomFx",
            winDice: "Dice_winDice__9ih7d",
            active: "Dice_active__uau3V",
            lose: "Dice_lose__GvyPS",
            draggerIn: "Dice_draggerIn__WFbQO",
            roll: "Dice_roll__XSjdK",
            tooltip: "Dice_tooltip__DS8V4",
            bet: "Dice_bet__Is9xt",
            noWins: "Dice_noWins__6QbVN",
            mobile: "Dice_mobile__ESbJk",
            notMobile: "Dice_notMobile__9E42B"
        }
    }
}, e => {
    var i = i => e(e.s = i);
    e.O(0, [16128, 38323, 78505, 31735, 23802, 47190, 47076, 58211, 73345, 40750, 58172, 54490, 77781, 76143, 53090, 28574, 58607, 70187, 28441, 31684, 77358], () => i(62961)),
    _N_E = e.O()
}
]);
