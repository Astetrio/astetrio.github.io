(() => {
  'use strict';
  var e = {
      4985: (e, t, r) => {
        var n = r(1957),
          o = r(5226),
          a = r(499),
          i = r(9835);
        const l = (e) => (
            (0, i.dD)('data-v-be8d5f4e'), (e = e()), (0, i.Cn)(), e
          ),
          s = { id: 'q-app' },
          c = l(() => (0, i._)('div', { class: 'bg' }, null, -1));
        function u(e, t, r, n, o, a) {
          const l = (0, i.up)('router-view');
          return (0, i.wg)(), (0, i.iD)('div', s, [c, (0, i.Wm)(l)]);
        }
        const d = (0, i.aZ)({ name: 'App' });
        var f = r(1639);
        const p = (0, f.Z)(d, [
            ['render', u],
            ['__scopeId', 'data-v-be8d5f4e'],
          ]),
          h = p;
        var v = r(3340),
          b = r(8339);
        const m = [
            {
              path: '/',
              component: () =>
                Promise.all([r.e(736), r.e(944)]).then(r.bind(r, 7944)),
              children: [
                {
                  path: '',
                  component: () =>
                    Promise.all([r.e(736), r.e(683)]).then(r.bind(r, 4683)),
                },
                {
                  path: 'project/:guid',
                  component: () =>
                    Promise.all([r.e(736), r.e(275)]).then(r.bind(r, 275)),
                },
              ],
            },
            {
              path: '/:catchAll(.*)*',
              component: () =>
                Promise.all([r.e(736), r.e(788)]).then(r.bind(r, 8788)),
            },
          ],
          g = m,
          y = (0, v.BC)(function () {
            const e = b.PO,
              t = (0, b.p7)({
                scrollBehavior(e, t, r) {
                  const n = { left: 0, top: 0 };
                  return r && ((n.left = r.left), (n.top = r.top)), n;
                },
                routes: g,
                history: e('/'),
              });
            return t;
          });
        async function w(e, t) {
          const r = e(h);
          r.use(o.Z, t);
          const n = (0, a.Xl)('function' === typeof y ? await y({}) : y);
          return { app: r, router: n };
        }
        var P = r(9527),
          C = r(1532),
          k = r(4500),
          O = r(7493),
          x = r(7342);
        const S = {
            config: {},
            lang: P.Z,
            iconSet: C.Z,
            plugins: { Notify: k.Z, AddressbarColor: O.Z, Dark: x.Z },
          },
          j = '/';
        async function A({ app: e, router: t }, r) {
          let n = !1;
          const o = (e) => {
              try {
                return t.resolve(e).href;
              } catch (r) {}
              return Object(e) === e ? null : e;
            },
            a = (e) => {
              if (((n = !0), 'string' === typeof e && /^https?:\/\//.test(e)))
                return void (window.location.href = e);
              const t = o(e);
              null !== t && (window.location.href = t);
            },
            i = window.location.href.replace(window.location.origin, '');
          for (let s = 0; !1 === n && s < r.length; s++)
            try {
              await r[s]({
                app: e,
                router: t,
                ssrContext: null,
                redirect: a,
                urlPath: i,
                publicPath: j,
              });
            } catch (l) {
              return l && l.url
                ? void a(l.url)
                : void console.error('[Quasar] boot error:', l);
            }
          !0 !== n && (e.use(t), e.mount('#q-app'));
        }
        w(n.ri, S).then((e) =>
          Promise.allSettled([
            Promise.resolve().then(r.bind(r, 3970)),
            Promise.resolve().then(r.bind(r, 3354)),
            Promise.resolve().then(r.bind(r, 910)),
            Promise.resolve().then(r.bind(r, 1314)),
            Promise.resolve().then(r.bind(r, 3768)),
            Promise.resolve().then(r.bind(r, 9435)),
          ]).then((t) => {
            const r = t
              .map((e) => {
                if ('rejected' !== e.status) return e.value.default;
                console.error('[Quasar] boot error:', e.reason);
              })
              .filter((e) => 'function' === typeof e);
            A(e, r);
          }),
        );
      },
      3768: (e, t, r) => {
        r.r(t), r.d(t, { default: () => o });
        var n = r(7493);
        const o = () => {
          n.Z.set('black');
        };
      },
      1314: (e, t, r) => {
        r.r(t), r.d(t, { default: () => i });
        var n = r(3340),
          o = r(8705),
          a = function (e, t, r, n) {
            function o(e) {
              return e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  });
            }
            return new (r || (r = Promise))(function (r, a) {
              function i(e) {
                try {
                  s(n.next(e));
                } catch (t) {
                  a(t);
                }
              }
              function l(e) {
                try {
                  s(n['throw'](e));
                } catch (t) {
                  a(t);
                }
              }
              function s(e) {
                e.done ? r(e.value) : o(e.value).then(i, l);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const i = (0, n.xr)(({ app: e }) =>
          a(void 0, void 0, void 0, function* () {
            e.use(o.Z);
          }),
        );
      },
      910: (e, t, r) => {
        r.r(t), r.d(t, { api: () => i, default: () => l });
        var n = r(3340),
          o = r(9981),
          a = r.n(o);
        const i = a().create({ baseURL: 'https://api.goldsemi.uz/astetrio' }),
          l = (0, n.xr)(({ app: e }) => {
            (e.config.globalProperties.$axios = a()),
              (e.config.globalProperties.$api = i);
          });
      },
      3354: (e, t, r) => {
        r.r(t), r.d(t, { default: () => s });
        var n = r(3340),
          o = r(7712);
        const a = { failed: 'Action failed', success: 'Action was successful' },
          i = {
            failed: 'Действие не удалось выполнить',
            success: 'Действие успешно выполнено',
          },
          l = { 'en-US': a, 'ru-RU': i },
          s = (0, n.xr)(({ app: e }) => {
            const t = (0, o.o)({ locale: 'en-US', legacy: !1, messages: l });
            e.use(t),
              (e.config.globalProperties.$mt = function (e) {
                var r, n;
                if (!e) return "Can't translate";
                let o = this;
                while (!o.$i18n.locale && o.$parent) o = o.$parent;
                const a =
                  null !== (r = o.$i18n.locale) && void 0 !== r
                    ? r
                    : null === (n = t.global.locale.value) || void 0 === n
                    ? void 0
                    : n.toString();
                return a in e
                  ? e[a]
                  : 'en-US' in e
                  ? e['en-US']
                  : "Can't translate";
              });
          });
      },
      3970: (e, t, r) => {
        r.r(t), r.d(t, { default: () => i });
        var n = r(3340),
          o = r(203),
          a = function (e, t, r, n) {
            function o(e) {
              return e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  });
            }
            return new (r || (r = Promise))(function (r, a) {
              function i(e) {
                try {
                  s(n.next(e));
                } catch (t) {
                  a(t);
                }
              }
              function l(e) {
                try {
                  s(n['throw'](e));
                } catch (t) {
                  a(t);
                }
              }
              function s(e) {
                e.done ? r(e.value) : o(e.value).then(i, l);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const i = (0, n.xr)(({ app: e, router: t }) =>
          a(void 0, void 0, void 0, function* () {
            e.use((0, o.Z)({ restrictToViewport: !0 })), t.beforeEach(o.ib);
          }),
        );
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.m = e),
    (() => {
      var e = [];
      r.O = (t, n, o, a) => {
        if (!n) {
          var i = 1 / 0;
          for (u = 0; u < e.length; u++) {
            for (var [n, o, a] = e[u], l = !0, s = 0; s < n.length; s++)
              (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[s]))
                ? n.splice(s--, 1)
                : ((l = !1), a < i && (i = a));
            if (l) {
              e.splice(u--, 1);
              var c = o();
              void 0 !== c && (t = c);
            }
          }
          return t;
        }
        a = a || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
        e[u] = [n, o, a];
      };
    })(),
    (() => {
      r.n = (e) => {
        var t = e && e.__esModule ? () => e['default'] : () => e;
        return r.d(t, { a: t }), t;
      };
    })(),
    (() => {
      r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (() => {
      (r.f = {}),
        (r.e = (e) =>
          Promise.all(
            Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []),
          ));
    })(),
    (() => {
      r.u = (e) =>
        'js/' +
        e +
        '.' +
        { 275: '9334e328', 683: '100bf0e9', 788: 'e1a0f96e', 944: 'b1eef00b' }[
          e
        ] +
        '.js';
    })(),
    (() => {
      r.miniCssF = (e) =>
        'css/' +
        ({ 143: 'app', 736: 'vendor' }[e] || e) +
        '.' +
        {
          143: '97ad7326',
          275: 'd63e6942',
          683: '364904b2',
          736: 'ad5be9a7',
          944: '10fbc199',
        }[e] +
        '.css';
    })(),
    (() => {
      r.g = (function () {
        if ('object' === typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' === typeof window) return window;
        }
      })();
    })(),
    (() => {
      r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    })(),
    (() => {
      var e = {},
        t = 'astetrio-site:';
      r.l = (n, o, a, i) => {
        if (e[n]) e[n].push(o);
        else {
          var l, s;
          if (void 0 !== a)
            for (
              var c = document.getElementsByTagName('script'), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute('src') == n ||
                d.getAttribute('data-webpack') == t + a
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            (l = document.createElement('script')),
            (l.charset = 'utf-8'),
            (l.timeout = 120),
            r.nc && l.setAttribute('nonce', r.nc),
            l.setAttribute('data-webpack', t + a),
            (l.src = n)),
            (e[n] = [o]);
          var f = (t, r) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[n];
              if (
                (delete e[n],
                l.parentNode && l.parentNode.removeChild(l),
                o && o.forEach((e) => e(r)),
                t)
              )
                return t(r);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: 'timeout', target: l }),
              12e4,
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (() => {
      r.r = (e) => {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      };
    })(),
    (() => {
      r.p = '/';
    })(),
    (() => {
      var e = (e, t, r, n) => {
          var o = document.createElement('link');
          (o.rel = 'stylesheet'), (o.type = 'text/css');
          var a = (a) => {
            if (((o.onerror = o.onload = null), 'load' === a.type)) r();
            else {
              var i = a && ('load' === a.type ? 'missing' : a.type),
                l = (a && a.target && a.target.href) || t,
                s = new Error(
                  'Loading CSS chunk ' + e + ' failed.\n(' + l + ')',
                );
              (s.code = 'CSS_CHUNK_LOAD_FAILED'),
                (s.type = i),
                (s.request = l),
                o.parentNode.removeChild(o),
                n(s);
            }
          };
          return (
            (o.onerror = o.onload = a),
            (o.href = t),
            document.head.appendChild(o),
            o
          );
        },
        t = (e, t) => {
          for (
            var r = document.getElementsByTagName('link'), n = 0;
            n < r.length;
            n++
          ) {
            var o = r[n],
              a = o.getAttribute('data-href') || o.getAttribute('href');
            if ('stylesheet' === o.rel && (a === e || a === t)) return o;
          }
          var i = document.getElementsByTagName('style');
          for (n = 0; n < i.length; n++) {
            (o = i[n]), (a = o.getAttribute('data-href'));
            if (a === e || a === t) return o;
          }
        },
        n = (n) =>
          new Promise((o, a) => {
            var i = r.miniCssF(n),
              l = r.p + i;
            if (t(i, l)) return o();
            e(n, l, o, a);
          }),
        o = { 143: 0 };
      r.f.miniCss = (e, t) => {
        var r = { 275: 1, 683: 1, 944: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
            r[e] &&
            t.push(
              (o[e] = n(e).then(
                () => {
                  o[e] = 0;
                },
                (t) => {
                  throw (delete o[e], t);
                },
              )),
            );
      };
    })(),
    (() => {
      var e = { 143: 0 };
      (r.f.j = (t, n) => {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else {
            var a = new Promise((r, n) => (o = e[t] = [r, n]));
            n.push((o[2] = a));
            var i = r.p + r.u(t),
              l = new Error(),
              s = (n) => {
                if (r.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var a = n && ('load' === n.type ? 'missing' : n.type),
                    i = n && n.target && n.target.src;
                  (l.message =
                    'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
                }
              };
            r.l(i, s, 'chunk-' + t, t);
          }
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, n) => {
          var o,
            a,
            [i, l, s] = n,
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (s) var u = s(r);
          }
          for (t && t(n); c < i.length; c++)
            (a = i[c]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(u);
        },
        n = (globalThis['webpackChunkastetrio_site'] =
          globalThis['webpackChunkastetrio_site'] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = r.O(void 0, [736], () => r(4985));
  n = r.O(n);
})();
