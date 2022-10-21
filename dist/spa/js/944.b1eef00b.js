(globalThis['webpackChunkastetrio_site'] =
  globalThis['webpackChunkastetrio_site'] || []).push([
  [944],
  {
    7944: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => S });
      var l = a(9835),
        i = a(1957),
        s = a(5034),
        o = a.n(s);
      const c = (e) => (
          (0, l.dD)('data-v-183aac7a'), (e = e()), (0, l.Cn)(), e
        ),
        n = { class: 'container' },
        u = c(() =>
          (0, l._)('h1', { class: 'logo-text text-black' }, 'Astetrio', -1),
        ),
        I = { class: 'relative-position' },
        r = c(() =>
          (0, l._)(
            'div',
            { class: 'row container q-px-sm-lg' },
            [
              (0, l._)(
                'div',
                { class: 'column col-12 col-sm-offset-3 items-center' },
                [
                  (0, l._)('div', null, [
                    (0, l._)('div', { class: 'column contacts' }, [
                      (0, l._)(
                        'a',
                        {
                          class: 'text-black',
                          href: 'mailto:astetrio.dev.supp@gmail.com',
                        },
                        'astetrio.dev.supp@gmail.com',
                      ),
                    ]),
                  ]),
                ],
              ),
            ],
            -1,
          ),
        );
      function d(e, t, a, s, c, d) {
        const L = (0, l.up)('q-img'),
          M = (0, l.up)('router-link'),
          g = (0, l.up)('q-toolbar-title'),
          j = (0, l.up)('q-toolbar'),
          m = (0, l.up)('q-header'),
          p = (0, l.up)('router-view'),
          T = (0, l.up)('q-page-container'),
          b = (0, l.up)('q-footer'),
          z = (0, l.up)('q-layout');
        return (
          (0, l.wg)(),
          (0, l.j4)(
            z,
            { view: 'hHh Lpr lff', style: { 'min-height': '100vh' } },
            {
              default: (0, l.w5)(() => [
                (0, l.Wm)(
                  m,
                  { class: 'q-py-md row justify-center bg-grey-2 header' },
                  {
                    default: (0, l.w5)(() => [
                      (0, l._)('div', n, [
                        (0, l.Wm)(
                          j,
                          { class: 'justify-center' },
                          {
                            default: (0, l.w5)(() => [
                              (0, l.Wm)(
                                g,
                                { class: 'col-12 col-sm logo' },
                                {
                                  default: (0, l.w5)(() => [
                                    (0, l.Wm)(
                                      M,
                                      {
                                        class: 'row items-center justify-start',
                                        to: '/',
                                      },
                                      {
                                        default: (0, l.w5)(() => [
                                          (0, l.Wm)(L, {
                                            'no-spinner': '',
                                            class: 'logo-icon',
                                            src: o(),
                                          }),
                                          u,
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                (0, l.Wm)(T, null, {
                  default: (0, l.w5)(() => [
                    (0, l._)('div', I, [
                      (0, l.Wm)(p, null, {
                        default: (0, l.w5)(({ Component: t }) => [
                          (0, l.Wm)(
                            i.uT,
                            {
                              'enter-active-class': 'animated fadeIn',
                              'leave-active-class': 'animated fadeOut',
                              appear: '',
                              duration: 300,
                              onBeforeLeave: e.beforeLeave,
                              onAfterLeave: e.afterLeave,
                            },
                            {
                              default: (0, l.w5)(() => [
                                ((0, l.wg)(),
                                (0, l.j4)((0, l.LL)(t), {
                                  key: e.$route.fullPath,
                                })),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['onBeforeLeave', 'onAfterLeave'],
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                  ]),
                  _: 1,
                }),
                (0, l.Wm)(
                  b,
                  { class: 'row q-py-lg justify-center bg-grey-2 footer' },
                  { default: (0, l.w5)(() => [r]), _: 1 },
                ),
              ]),
              _: 1,
            },
          )
        );
      }
      var L = a(499),
        M = a(9481);
      const g = (0, l.aZ)({
        name: 'MainLayout',
        components: {},
        methods: {
          backToTop() {
            window.scrollTo(0, 0);
          },
          toggleDrawer() {
            this.isDrawerOpened = !this.isDrawerOpened;
          },
          localeChanged() {
            (this.$i18n.locale =
              this.$i18n.availableLocales[this.currentLocaleIndex]),
              localStorage.setItem(
                'locale',
                this.currentLocaleIndex.toString(),
              );
          },
          beforeLeave(e) {
            const { top: t } = e.getBoundingClientRect();
            (e.style.position = 'fixed'),
              (e.style.top = `${t}px`),
              (e.style.left = '0px'),
              (e.style.right = '0px'),
              (e.style.zIndex = '-1');
          },
          afterLeave(e) {
            (e.style.position = ''),
              (e.style.top = ''),
              (e.style.left = ''),
              (e.style.right = ''),
              (e.style.zIndex = '');
          },
        },
        mounted() {
          const e = localStorage.getItem('locale');
          (this.currentLocaleIndex =
            null === e
              ? this.$i18n.availableLocales.findIndex((e) => 'uz' === e)
              : Number(e)),
            (this.$i18n.locale =
              this.$i18n.availableLocales[this.currentLocaleIndex]),
            (this.languages = this.$i18n.availableLocales.map((e, t) => ({
              label: e.toUpperCase(),
              value: t,
            })));
        },
        setup() {
          const e = (0, L.iH)(!1),
            t = (0, L.iH)(0),
            a = (0, L.iH)();
          return {
            isDrawerOpened: e,
            currentLocaleIndex: t,
            languages: a,
            mdiEarth: M.r8w,
          };
        },
      });
      var j = a(1639),
        m = a(4797),
        p = a(8825),
        T = a(8667),
        b = a(2640),
        z = a(1017),
        y = a(1496),
        N = a(5246),
        w = a(7051),
        x = a(1703),
        Z = a(5836),
        h = a(1085),
        v = a(1449),
        D = a(753),
        f = a(2245),
        W = a(9984),
        Q = a.n(W);
      const C = (0, j.Z)(g, [
          ['render', d],
          ['__scopeId', 'data-v-183aac7a'],
        ]),
        S = C;
      Q()(g, 'components', {
        QLayout: m.Z,
        QHeader: p.Z,
        QToolbar: T.Z,
        QBtn: b.Z,
        QIcon: z.Z,
        QToolbarTitle: y.Z,
        QImg: N.Z,
        QDrawer: w.Z,
        QList: x.Z,
        QItem: Z.Z,
        QBadge: h.Z,
        QPageContainer: v.Z,
        QFooter: D.Z,
        QField: f.Z,
      });
    },
    5034: (e) => {
      e.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iTWFpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjc5MzFlO30uY2xzLTJ7ZmlsbDojZmJiYzVhO30uY2xzLTN7ZmlsbDojNjY2N2FiO308L3N0eWxlPjxzeW1ib2wgaWQ9Ik1ldGVvcl80IiBkYXRhLW5hbWU9Ik1ldGVvciA0IiB2aWV3Qm94PSIwIDAgMTUzLjU4IDkzLjE0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzcuNCwyLjE2Yy0xNi4wOC04LjI0LTUzLjg1LDktNjksMTkuMjRDMjUuOTEsNTAuMTgsMCw4NS4wOSwwLDkyLjQ5LDAsOTksMzcuNTgsNTUuMjMsNzgsNDcuMTJjMjMuNzgtNC43Nyw0Ni40OSw4LjA3LDYwLjc4LDIuNzgsOS43MS0zLjYsMTQuODMtMTMuMzEsMTQuODMtMjMuMzNTMTQ5LjA3LDguMTUsMTM3LjQsMi4xNlptLTguODMsNDYuNDFhMjIsMjIsMCwxLDEsMjItMjJBMjIsMjIsMCwwLDEsMTI4LjU3LDQ4LjU3WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMTI4LjU4IiBjeT0iMjYuNTciIHI9IjE4Ii8+PC9zeW1ib2w+PC9kZWZzPjxnIGlkPSJIb2xlIj48Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iOTQiLz48L2c+PGcgaWQ9Ik1ldGVvcnNfNCIgZGF0YS1uYW1lPSJNZXRlb3JzIDQiPjx1c2UgaWQ9Ik1ldGVvciIgd2lkdGg9IjE1My41OCIgaGVpZ2h0PSI5My4xNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODgsIC0xLjQ4LCAxLjUzLCAtMC44NSwgMTczLjAzLCA1NTcuMTMpIiB4bGluazpocmVmPSIjTWV0ZW9yXzQiLz48dXNlIGlkPSJNZXRlb3ItMiIgZGF0YS1uYW1lPSJNZXRlb3IiIHdpZHRoPSIxNTMuNTgiIGhlaWdodD0iOTMuMTQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjg4LCAxLjQ4LCAtMS41MywgLTAuODUsIDU3Mi44LCAxNzYuNTEpIiB4bGluazpocmVmPSIjTWV0ZW9yXzQiLz48dXNlIGlkPSJNZXRlb3ItMyIgZGF0YS1uYW1lPSJNZXRlb3IiIHdpZHRoPSIxNTMuNTgiIGhlaWdodD0iOTMuMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyIDMyLjEyKSBzY2FsZSgxLjc3IDEuNzEpIiB4bGluazpocmVmPSIjTWV0ZW9yXzQiLz48L2c+PC9zdmc+';
    },
  },
]);
