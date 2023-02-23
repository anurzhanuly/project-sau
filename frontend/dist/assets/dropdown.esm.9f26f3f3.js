import {
  f as p,
  g as f,
  C as I,
  D as k,
  E as z,
  G as F,
  F as K,
  k as A,
  l as v,
  U as R,
  Z as P,
  O,
  H as w,
  I as U,
  J as W,
  R as _,
  K as j,
  L as N,
  M as q,
  N as M,
  i as H,
  j as B,
  T as Z,
  t as C,
  P as J,
  Q,
  y as D,
} from "./index.c7985898.js";
import { O as X } from "./overlayeventbus.esm.8d04a854.js";
var G = {
  name: "VirtualScroller",
  emits: [
    "update:numToleratedItems",
    "scroll",
    "scroll-index-change",
    "lazy-load",
  ],
  props: {
    id: { type: String, default: null },
    style: null,
    class: null,
    items: { type: Array, default: null },
    itemSize: { type: [Number, Array], default: 0 },
    scrollHeight: null,
    scrollWidth: null,
    orientation: { type: String, default: "vertical" },
    numToleratedItems: { type: Number, default: null },
    delay: { type: Number, default: 0 },
    lazy: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loaderDisabled: { type: Boolean, default: !1 },
    columns: { type: Array, default: null },
    loading: { type: Boolean, default: !1 },
    showSpacer: { type: Boolean, default: !0 },
    showLoader: { type: Boolean, default: !1 },
    tabindex: { type: Number, default: 0 },
  },
  data() {
    return {
      first: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      last: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      numItemsInViewport: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      lastScrollPos: this.isBoth() ? { top: 0, left: 0 } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {},
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  watch: {
    numToleratedItems(e) {
      this.d_numToleratedItems = e;
    },
    loading(e) {
      this.d_loading = e;
    },
    items(e, t) {
      (!t || t.length !== (e || []).length) && this.init();
    },
    orientation() {
      this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
    },
  },
  mounted() {
    this.init(), (this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0);
  },
  methods: {
    init() {
      this.setSize(), this.calculateOptions(), this.setSpacerSize();
    },
    isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth() {
      return this.orientation === "both";
    },
    scrollTo(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex(e, t = "auto") {
      const s = this.isBoth(),
        n = this.isHorizontal(),
        l = this.first,
        { numToleratedItems: i } = this.calculateNumItems(),
        o = this.itemSize,
        a = (d = 0, m) => (d <= m ? 0 : d),
        c = (d, m) => d * m,
        r = (d = 0, m = 0) => this.scrollTo({ left: d, top: m, behavior: t });
      if (s) {
        const d = { rows: a(e[0], i[0]), cols: a(e[1], i[1]) };
        (d.rows !== l.rows || d.cols !== l.cols) &&
          r(c(d.cols, o[1]), c(d.rows, o[0]));
      } else {
        const d = a(e, i);
        d !== l && (n ? r(c(d, o), 0) : r(0, c(d, o)));
      }
    },
    scrollInView(e, t, s = "auto") {
      if (t) {
        const n = this.isBoth(),
          l = this.isHorizontal(),
          { first: i, viewport: o } = this.getRenderedRange(),
          a = (d = 0, m = 0) => this.scrollTo({ left: d, top: m, behavior: s }),
          c = t === "to-start",
          r = t === "to-end";
        if (c) {
          if (n)
            o.first.rows - i.rows > e[0]
              ? a(
                  o.first.cols * this.itemSize[1],
                  (o.first.rows - 1) * this.itemSize[0],
                )
              : o.first.cols - i.cols > e[1] &&
                a(
                  (o.first.cols - 1) * this.itemSize[1],
                  o.first.rows * this.itemSize[0],
                );
          else if (o.first - i > e) {
            const d = (o.first - 1) * this.itemSize;
            l ? a(d, 0) : a(0, d);
          }
        } else if (r) {
          if (n)
            o.last.rows - i.rows <= e[0] + 1
              ? a(
                  o.first.cols * this.itemSize[1],
                  (o.first.rows + 1) * this.itemSize[0],
                )
              : o.last.cols - i.cols <= e[1] + 1 &&
                a(
                  (o.first.cols + 1) * this.itemSize[1],
                  o.first.rows * this.itemSize[0],
                );
          else if (o.last - i <= e + 1) {
            const d = (o.first + 1) * this.itemSize;
            l ? a(d, 0) : a(0, d);
          }
        }
      } else this.scrollToIndex(e, s);
    },
    getRenderedRange() {
      const e = (n, l) => Math.floor(n / (l || n));
      let t = this.first,
        s = 0;
      if (this.element) {
        const n = this.isBoth(),
          l = this.isHorizontal(),
          i = this.element.scrollTop,
          o = this.element.scrollLeft;
        n
          ? ((t = {
              rows: e(i, this.itemSize[0]),
              cols: e(o, this.itemSize[1]),
            }),
            (s = {
              rows: t.rows + this.numItemsInViewport.rows,
              cols: t.cols + this.numItemsInViewport.cols,
            }))
          : ((t = e(l ? o : i, this.itemSize)),
            (s = t + this.numItemsInViewport));
      }
      return {
        first: this.first,
        last: this.last,
        viewport: { first: t, last: s },
      };
    },
    calculateNumItems() {
      const e = this.isBoth(),
        t = this.isHorizontal(),
        s = this.itemSize,
        n = this.getContentPosition(),
        l = this.element ? this.element.offsetWidth - n.left : 0,
        i = this.element ? this.element.offsetHeight - n.top : 0,
        o = (d, m) => Math.ceil(d / (m || d)),
        a = d => Math.ceil(d / 2),
        c = e ? { rows: o(i, s[0]), cols: o(l, s[1]) } : o(t ? l : i, s),
        r = this.d_numToleratedItems || (e ? [a(c.rows), a(c.cols)] : a(c));
      return { numItemsInViewport: c, numToleratedItems: r };
    },
    calculateOptions() {
      const e = this.isBoth(),
        t = this.first,
        { numItemsInViewport: s, numToleratedItems: n } =
          this.calculateNumItems(),
        l = (o, a, c, r) => this.getLast(o + a + (o < c ? 2 : 3) * c, r),
        i = e
          ? { rows: l(t.rows, s.rows, n[0]), cols: l(t.cols, s.cols, n[1], !0) }
          : l(t, s, n);
      (this.last = i),
        (this.numItemsInViewport = s),
        (this.d_numToleratedItems = n),
        this.$emit("update:numToleratedItems", this.d_numToleratedItems),
        this.showLoader &&
          (this.loaderArr = e
            ? Array.from({ length: s.rows }).map(() =>
                Array.from({ length: s.cols }),
              )
            : Array.from({ length: s })),
        this.lazy && this.$emit("lazy-load", { first: t, last: i });
    },
    getLast(e = 0, t) {
      return this.items
        ? Math.min(
            t ? (this.columns || this.items[0]).length : this.items.length,
            e,
          )
        : 0;
    },
    getContentPosition() {
      if (this.content) {
        const e = getComputedStyle(this.content),
          t = parseInt(e.paddingLeft, 10) + Math.max(parseInt(e.left, 10), 0),
          s = parseInt(e.paddingRight, 10) + Math.max(parseInt(e.right, 10), 0),
          n = parseInt(e.paddingTop, 10) + Math.max(parseInt(e.top, 10), 0),
          l =
            parseInt(e.paddingBottom, 10) + Math.max(parseInt(e.bottom, 10), 0);
        return { left: t, right: s, top: n, bottom: l, x: t + s, y: n + l };
      }
      return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    },
    setSize() {
      if (this.element) {
        const e = this.isBoth(),
          t = this.isHorizontal(),
          s = this.element.parentElement,
          n =
            this.scrollWidth ||
            `${this.element.offsetWidth || s.offsetWidth}px`,
          l =
            this.scrollHeight ||
            `${this.element.offsetHeight || s.offsetHeight}px`,
          i = (o, a) => (this.element.style[o] = a);
        e || t ? (i("height", l), i("width", n)) : i("height", l);
      }
    },
    setSpacerSize() {
      const e = this.items;
      if (e) {
        const t = this.isBoth(),
          s = this.isHorizontal(),
          n = this.getContentPosition(),
          l = (i, o, a, c = 0) =>
            (this.spacerStyle = {
              ...this.spacerStyle,
              [`${i}`]: (o || []).length * a + c + "px",
            });
        t
          ? (l("height", e, this.itemSize[0], n.y),
            l("width", this.columns || e[1], this.itemSize[1], n.x))
          : s
          ? l("width", this.columns || e, this.itemSize, n.x)
          : l("height", e, this.itemSize, n.y);
      }
    },
    setContentPosition(e) {
      if (this.content) {
        const t = this.isBoth(),
          s = this.isHorizontal(),
          n = e ? e.first : this.first,
          l = (o, a) => o * a,
          i = (o = 0, a = 0) => {
            this.contentStyle = {
              ...this.contentStyle,
              transform: `translate3d(${o}px, ${a}px, 0)`,
            };
          };
        if (t) i(l(n.cols, this.itemSize[1]), l(n.rows, this.itemSize[0]));
        else {
          const o = l(n, this.itemSize);
          s ? i(o, 0) : i(0, o);
        }
      }
    },
    onScrollPositionChange(e) {
      const t = e.target,
        s = this.isBoth(),
        n = this.isHorizontal(),
        l = this.getContentPosition(),
        i = (h, u) => (h ? (h > u ? h - u : h) : 0),
        o = (h, u) => Math.floor(h / (u || h)),
        a = (h, u, g, S, x, T) => (h <= x ? x : T ? g - S - x : u + x - 1),
        c = (h, u, g, S, x, T, E) =>
          h <= T
            ? 0
            : Math.max(0, E ? (h < u ? g : h - T) : h > u ? g : h - 2 * T),
        r = (h, u, g, S, x, T) => {
          let E = u + S + 2 * x;
          return h >= x && (E += x + 1), this.getLast(E, T);
        },
        d = i(t.scrollTop, l.top),
        m = i(t.scrollLeft, l.left);
      let y = s ? { rows: 0, cols: 0 } : 0,
        V = this.last,
        L = !1,
        b = this.lastScrollPos;
      if (s) {
        const h = this.lastScrollPos.top <= d,
          u = this.lastScrollPos.left <= m,
          g = { rows: o(d, this.itemSize[0]), cols: o(m, this.itemSize[1]) },
          S = {
            rows: a(
              g.rows,
              this.first.rows,
              this.last.rows,
              this.numItemsInViewport.rows,
              this.d_numToleratedItems[0],
              h,
            ),
            cols: a(
              g.cols,
              this.first.cols,
              this.last.cols,
              this.numItemsInViewport.cols,
              this.d_numToleratedItems[1],
              u,
            ),
          };
        (y = {
          rows: c(
            g.rows,
            S.rows,
            this.first.rows,
            this.last.rows,
            this.numItemsInViewport.rows,
            this.d_numToleratedItems[0],
            h,
          ),
          cols: c(
            g.cols,
            S.cols,
            this.first.cols,
            this.last.cols,
            this.numItemsInViewport.cols,
            this.d_numToleratedItems[1],
            u,
          ),
        }),
          (V = {
            rows: r(
              g.rows,
              y.rows,
              this.last.rows,
              this.numItemsInViewport.rows,
              this.d_numToleratedItems[0],
            ),
            cols: r(
              g.cols,
              y.cols,
              this.last.cols,
              this.numItemsInViewport.cols,
              this.d_numToleratedItems[1],
              !0,
            ),
          }),
          (L =
            y.rows !== this.first.rows ||
            V.rows !== this.last.rows ||
            y.cols !== this.first.cols ||
            V.cols !== this.last.cols),
          (b = { top: d, left: m });
      } else {
        const h = n ? m : d,
          u = this.lastScrollPos <= h,
          g = o(h, this.itemSize),
          S = a(
            g,
            this.first,
            this.last,
            this.numItemsInViewport,
            this.d_numToleratedItems,
            u,
          );
        (y = c(
          g,
          S,
          this.first,
          this.last,
          this.numItemsInViewport,
          this.d_numToleratedItems,
          u,
        )),
          (V = r(
            g,
            y,
            this.last,
            this.numItemsInViewport,
            this.d_numToleratedItems,
          )),
          (L = y !== this.first || V !== this.last),
          (b = h);
      }
      return { first: y, last: V, isRangeChanged: L, scrollPos: b };
    },
    onScrollChange(e) {
      const {
        first: t,
        last: s,
        isRangeChanged: n,
        scrollPos: l,
      } = this.onScrollPositionChange(e);
      if (n) {
        const i = { first: t, last: s };
        this.setContentPosition(i),
          (this.first = t),
          (this.last = s),
          (this.lastScrollPos = l),
          this.$emit("scroll-index-change", i),
          this.lazy && this.$emit("lazy-load", i);
      }
    },
    onScroll(e) {
      if ((this.$emit("scroll", e), this.delay)) {
        if (
          (this.scrollTimeout && clearTimeout(this.scrollTimeout),
          !this.d_loading && this.showLoader)
        ) {
          const { isRangeChanged: t } = this.onScrollPositionChange(e);
          t && (this.d_loading = !0);
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(e),
            this.d_loading &&
              this.showLoader &&
              !this.lazy &&
              (this.d_loading = !1);
        }, this.delay);
      } else this.onScrollChange(e);
    },
    getOptions(e) {
      const t = (this.items || []).length,
        s = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: s,
        count: t,
        first: s === 0,
        last: s === t - 1,
        even: s % 2 === 0,
        odd: s % 2 !== 0,
      };
    },
    getLoaderOptions(e, t) {
      let s = this.loaderArr.length;
      return {
        index: e,
        count: s,
        first: e === 0,
        last: e === s - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0,
        ...t,
      };
    },
    elementRef(e) {
      this.element = e;
    },
    contentRef(e) {
      this.content = e;
    },
  },
  computed: {
    containerClass() {
      return [
        "p-virtualscroller",
        {
          "p-both-scroll": this.isBoth(),
          "p-horizontal-scroll": this.isHorizontal(),
        },
        this.class,
      ];
    },
    contentClass() {
      return [
        "p-virtualscroller-content",
        { "p-virtualscroller-loading": this.d_loading },
      ];
    },
    loaderClass() {
      return [
        "p-virtualscroller-loader",
        { "p-component-overlay": !this.$slots.loader },
      ];
    },
    loadedItems() {
      const e = this.items;
      return e && !this.d_loading
        ? this.isBoth()
          ? e
              .slice(this.first.rows, this.last.rows)
              .map(t =>
                this.columns ? t : t.slice(this.first.cols, this.last.cols),
              )
          : this.isHorizontal() && this.columns
          ? e
          : e.slice(this.first, this.last)
        : [];
    },
    loadedRows() {
      return this.d_loading
        ? this.loaderDisabled
          ? this.loaderArr
          : []
        : this.loadedItems;
    },
    loadedColumns() {
      if (this.columns) {
        const e = this.isBoth(),
          t = this.isHorizontal();
        if (e || t)
          return this.d_loading && this.loaderDisabled
            ? e
              ? this.loaderArr[0]
              : this.loaderArr
            : this.columns.slice(
                e ? this.first.cols : this.first,
                e ? this.last.cols : this.last,
              );
      }
      return this.columns;
    },
  },
};
const Y = ["tabindex"],
  $ = { key: 1, class: "p-virtualscroller-loading-icon pi pi-spinner pi-spin" };
function ee(e, t, s, n, l, i) {
  return s.disabled
    ? (p(),
      f(
        K,
        { key: 1 },
        [
          I(e.$slots, "default"),
          I(e.$slots, "content", {
            items: s.items,
            rows: s.items,
            columns: i.loadedColumns,
          }),
        ],
        64,
      ))
    : (p(),
      f(
        "div",
        {
          key: 0,
          ref: i.elementRef,
          class: F(i.containerClass),
          tabindex: s.tabindex,
          style: k(s.style),
          onScroll: t[0] || (t[0] = (...o) => i.onScroll && i.onScroll(...o)),
        },
        [
          I(
            e.$slots,
            "content",
            {
              styleClass: i.contentClass,
              items: i.loadedItems,
              getItemOptions: i.getOptions,
              loading: l.d_loading,
              getLoaderOptions: i.getLoaderOptions,
              itemSize: s.itemSize,
              rows: i.loadedRows,
              columns: i.loadedColumns,
              contentRef: i.contentRef,
              spacerStyle: l.spacerStyle,
              contentStyle: l.contentStyle,
              vertical: i.isVertical(),
              horizontal: i.isHorizontal(),
              both: i.isBoth(),
            },
            () => [
              v(
                "div",
                {
                  ref: i.contentRef,
                  class: F(i.contentClass),
                  style: k(l.contentStyle),
                },
                [
                  (p(!0),
                  f(
                    K,
                    null,
                    A(i.loadedItems, (o, a) =>
                      I(e.$slots, "item", {
                        key: a,
                        item: o,
                        options: i.getOptions(a),
                      }),
                    ),
                    128,
                  )),
                ],
                6,
              ),
            ],
          ),
          s.showSpacer
            ? (p(),
              f(
                "div",
                {
                  key: 0,
                  class: "p-virtualscroller-spacer",
                  style: k(l.spacerStyle),
                },
                null,
                4,
              ))
            : z("", !0),
          !s.loaderDisabled && s.showLoader && l.d_loading
            ? (p(),
              f(
                "div",
                { key: 1, class: F(i.loaderClass) },
                [
                  e.$slots && e.$slots.loader
                    ? (p(!0),
                      f(
                        K,
                        { key: 0 },
                        A(l.loaderArr, (o, a) =>
                          I(e.$slots, "loader", {
                            key: a,
                            options: i.getLoaderOptions(
                              a,
                              i.isBoth() && {
                                numCols: e.d_numItemsInViewport.cols,
                              },
                            ),
                          }),
                        ),
                        128,
                      ))
                    : (p(), f("i", $)),
                ],
                2,
              ))
            : z("", !0),
        ],
        46,
        Y,
      ));
}
function te(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0],
      l = document.createElement("style");
    (l.type = "text/css"),
      s === "top" && n.firstChild
        ? n.insertBefore(l, n.firstChild)
        : n.appendChild(l),
      l.styleSheet
        ? (l.styleSheet.cssText = e)
        : l.appendChild(document.createTextNode(e));
  }
}
var ie = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
te(ie);
G.render = ee;
var se = {
  name: "Dropdown",
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "before-show",
    "before-hide",
    "show",
    "hide",
    "filter",
  ],
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: { type: String, default: "200px" },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: { type: String, default: "contains" },
    filterFields: { type: Array, default: null },
    editable: Boolean,
    placeholder: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    dataKey: null,
    showClear: { type: Boolean, default: !1 },
    inputId: { type: String, default: null },
    inputClass: { type: String, default: null },
    inputStyle: { type: null, default: null },
    inputProps: { type: null, default: null },
    panelClass: { type: String, default: null },
    panelStyle: { type: null, default: null },
    panelProps: { type: null, default: null },
    filterInputProps: { type: null, default: null },
    clearIconProps: { type: null, default: null },
    appendTo: { type: String, default: "body" },
    loading: { type: Boolean, default: !1 },
    clearIcon: { type: String, default: "pi pi-times" },
    dropdownIcon: { type: String, default: "pi pi-chevron-down" },
    filterIcon: { type: String, default: "pi pi-search" },
    loadingIcon: { type: String, default: "pi pi-spinner pi-spin" },
    resetFilterOnHide: { type: Boolean, default: !1 },
    virtualScrollerOptions: { type: Object, default: null },
    autoOptionFocus: { type: Boolean, default: !0 },
    autoFilterFocus: { type: Boolean, default: !1 },
    selectOnFocus: { type: Boolean, default: !1 },
    filterMessage: { type: String, default: null },
    selectionMessage: { type: String, default: null },
    emptySelectionMessage: { type: String, default: null },
    emptyFilterMessage: { type: String, default: null },
    emptyMessage: { type: String, default: null },
    tabindex: { type: Number, default: 0 },
    "aria-label": { type: String, default: null },
    "aria-labelledby": { type: String, default: null },
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: !1,
  focusOnHover: !1,
  data() {
    return {
      id: this.$attrs.id,
      focused: !1,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: !1,
    };
  },
  watch: {
    "$attrs.id": function (e) {
      this.id = e || R();
    },
    modelValue() {
      this.isModelValueChanged = !0;
    },
    options() {
      this.autoUpdateModel();
    },
  },
  mounted() {
    (this.id = this.id || R()), this.autoUpdateModel();
  },
  updated() {
    this.overlayVisible &&
      this.isModelValueChanged &&
      this.scrollInView(this.findSelectedOptionIndex()),
      (this.isModelValueChanged = !1);
  },
  beforeUnmount() {
    this.unbindOutsideClickListener(),
      this.unbindResizeListener(),
      this.scrollHandler &&
        (this.scrollHandler.destroy(), (this.scrollHandler = null)),
      this.overlay && (P.clear(this.overlay), (this.overlay = null));
  },
  methods: {
    getOptionIndex(e, t) {
      return this.virtualScrollerDisabled ? e : t && t(e).index;
    },
    getOptionLabel(e) {
      return this.optionLabel ? O.resolveFieldData(e, this.optionLabel) : e;
    },
    getOptionValue(e) {
      return this.optionValue ? O.resolveFieldData(e, this.optionValue) : e;
    },
    getOptionRenderKey(e, t) {
      return (
        (this.dataKey
          ? O.resolveFieldData(e, this.dataKey)
          : this.getOptionLabel(e)) +
        "_" +
        t
      );
    },
    isOptionDisabled(e) {
      return this.optionDisabled
        ? O.resolveFieldData(e, this.optionDisabled)
        : !1;
    },
    isOptionGroup(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel(e) {
      return O.resolveFieldData(e, this.optionGroupLabel);
    },
    getOptionGroupChildren(e) {
      return O.resolveFieldData(e, this.optionGroupChildren);
    },
    getAriaPosInset(e) {
      return (
        (this.optionGroupLabel
          ? e -
            this.visibleOptions.slice(0, e).filter(t => this.isOptionGroup(t))
              .length
          : e) + 1
      );
    },
    show(e) {
      this.$emit("before-show"),
        (this.overlayVisible = !0),
        (this.focusedOptionIndex =
          this.focusedOptionIndex !== -1
            ? this.focusedOptionIndex
            : this.autoOptionFocus
            ? this.findFirstFocusedOptionIndex()
            : -1),
        e && w.focus(this.$refs.focusInput);
    },
    hide(e) {
      const t = () => {
        this.$emit("before-hide"),
          (this.overlayVisible = !1),
          (this.focusedOptionIndex = -1),
          (this.searchValue = ""),
          this.resetFilterOnHide && (this.filterValue = null),
          e && w.focus(this.$refs.focusInput);
      };
      setTimeout(() => {
        t();
      }, 0);
    },
    onFocus(e) {
      this.disabled ||
        ((this.focused = !0),
        (this.focusedOptionIndex =
          this.focusedOptionIndex !== -1
            ? this.focusedOptionIndex
            : this.overlayVisible && this.autoOptionFocus
            ? this.findFirstFocusedOptionIndex()
            : -1),
        this.overlayVisible && this.scrollInView(this.focusedOptionIndex),
        this.$emit("focus", e));
    },
    onBlur(e) {
      (this.focused = !1),
        (this.focusedOptionIndex = -1),
        (this.searchValue = ""),
        this.$emit("blur", e);
    },
    onKeyDown(e) {
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      const t = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, this.editable);
          break;
        case "Home":
          this.onHomeKey(e, this.editable);
          break;
        case "End":
          this.onEndKey(e, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Space":
          this.onSpaceKey(e, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !t &&
            O.isPrintableCharacter(e.key) &&
            (!this.overlayVisible && this.show(),
            !this.editable && this.searchOptions(e, e.key));
          break;
      }
    },
    onEditableInput(e) {
      const t = e.target.value;
      (this.searchValue = ""),
        !this.searchOptions(e, t) && (this.focusedOptionIndex = -1),
        this.$emit("update:modelValue", t);
    },
    onContainerClick(e) {
      this.disabled ||
        this.loading ||
        w.hasClass(e.target, "p-dropdown-clear-icon") ||
        e.target.tagName === "INPUT" ||
        ((!this.overlay || !this.overlay.contains(e.target)) &&
          (this.overlayVisible ? this.hide(!0) : this.show(!0)));
    },
    onClearClick(e) {
      this.updateModel(e, null);
    },
    onFirstHiddenFocus(e) {
      const t =
        e.relatedTarget === this.$refs.focusInput
          ? w.getFirstFocusableElement(
              this.overlay,
              ":not(.p-hidden-focusable)",
            )
          : this.$refs.focusInput;
      w.focus(t);
    },
    onLastHiddenFocus(e) {
      const t =
        e.relatedTarget === this.$refs.focusInput
          ? w.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)")
          : this.$refs.focusInput;
      w.focus(t);
    },
    onOptionSelect(e, t, s = !0) {
      const n = this.getOptionValue(t);
      this.updateModel(e, n), s && this.hide(!0);
    },
    onOptionMouseMove(e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t);
    },
    onFilterChange(e) {
      const t = e.target.value;
      (this.filterValue = t),
        (this.focusedOptionIndex = -1),
        this.$emit("filter", { originalEvent: e, value: t }),
        !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown(e) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, !0);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, !0);
          break;
        case "Home":
          this.onHomeKey(e, !0);
          break;
        case "End":
          this.onEndKey(e, !0);
          break;
        case "Enter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e, !0);
          break;
      }
    },
    onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated() {
      this.overlayVisible && this.alignOverlay();
    },
    onOverlayClick(e) {
      X.emit("overlay-click", { originalEvent: e, target: this.$el });
    },
    onOverlayKeyDown(e) {
      switch (e.code) {
        case "Escape":
          this.onEscapeKey(e);
          break;
      }
    },
    onArrowDownKey(e) {
      const t =
        this.focusedOptionIndex !== -1
          ? this.findNextOptionIndex(this.focusedOptionIndex)
          : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(e, t),
        !this.overlayVisible && this.show(),
        e.preventDefault();
    },
    onArrowUpKey(e, t = !1) {
      if (e.altKey && !t)
        this.focusedOptionIndex !== -1 &&
          this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]),
          this.overlayVisible && this.hide(),
          e.preventDefault();
      else {
        const s =
          this.focusedOptionIndex !== -1
            ? this.findPrevOptionIndex(this.focusedOptionIndex)
            : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, s),
          !this.overlayVisible && this.show(),
          e.preventDefault();
      }
    },
    onArrowLeftKey(e, t = !1) {
      t && (this.focusedOptionIndex = -1);
    },
    onHomeKey(e, t = !1) {
      t
        ? (e.currentTarget.setSelectionRange(0, 0),
          (this.focusedOptionIndex = -1))
        : (this.changeFocusedOptionIndex(e, this.findFirstOptionIndex()),
          !this.overlayVisible && this.show()),
        e.preventDefault();
    },
    onEndKey(e, t = !1) {
      if (t) {
        const s = e.currentTarget,
          n = s.value.length;
        s.setSelectionRange(n, n), (this.focusedOptionIndex = -1);
      } else
        this.changeFocusedOptionIndex(e, this.findLastOptionIndex()),
          !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onPageUpKey(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey(e) {
      this.overlayVisible
        ? (this.focusedOptionIndex !== -1 &&
            this.onOptionSelect(
              e,
              this.visibleOptions[this.focusedOptionIndex],
            ),
          this.hide())
        : this.onArrowDownKey(e),
        e.preventDefault();
    },
    onSpaceKey(e, t = !1) {
      !t && this.onEnterKey(e);
    },
    onEscapeKey(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey(e, t = !1) {
      t ||
        (this.overlayVisible && this.hasFocusableElements()
          ? (w.focus(this.$refs.firstHiddenFocusableElementOnOverlay),
            e.preventDefault())
          : (this.focusedOptionIndex !== -1 &&
              this.onOptionSelect(
                e,
                this.visibleOptions[this.focusedOptionIndex],
              ),
            this.overlayVisible && this.hide(this.filter)));
    },
    onBackspaceKey(e, t = !1) {
      t && !this.overlayVisible && this.show();
    },
    onOverlayEnter(e) {
      P.set("overlay", e, this.$primevue.config.zIndex.overlay),
        this.alignOverlay(),
        this.scrollInView(),
        this.autoFilterFocus && w.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener(),
        this.bindScrollListener(),
        this.bindResizeListener(),
        this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener(),
        this.unbindScrollListener(),
        this.unbindResizeListener(),
        this.$emit("hide"),
        (this.overlay = null);
    },
    onOverlayAfterLeave(e) {
      P.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self"
        ? w.relativePosition(this.overlay, this.$el)
        : ((this.overlay.style.minWidth = w.getOuterWidth(this.$el) + "px"),
          w.absolutePosition(this.overlay, this.$el));
    },
    bindOutsideClickListener() {
      this.outsideClickListener ||
        ((this.outsideClickListener = e => {
          this.overlayVisible &&
            this.overlay &&
            !this.$el.contains(e.target) &&
            !this.overlay.contains(e.target) &&
            this.hide();
        }),
        document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener &&
        (document.removeEventListener("click", this.outsideClickListener),
        (this.outsideClickListener = null));
    },
    bindScrollListener() {
      this.scrollHandler ||
        (this.scrollHandler = new U(this.$refs.container, () => {
          this.overlayVisible && this.hide();
        })),
        this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener ||
        ((this.resizeListener = () => {
          this.overlayVisible && !w.isTouchDevice() && this.hide();
        }),
        window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener &&
        (window.removeEventListener("resize", this.resizeListener),
        (this.resizeListener = null));
    },
    hasFocusableElements() {
      return (
        w.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)")
          .length > 0
      );
    },
    isOptionMatched(e) {
      return (
        this.isValidOption(e) &&
        this.getOptionLabel(e)
          .toLocaleLowerCase(this.filterLocale)
          .startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))
      );
    },
    isValidOption(e) {
      return e && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isSelected(e) {
      return O.equals(
        this.modelValue,
        this.getOptionValue(e),
        this.equalityKey,
      );
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex(e => this.isValidOption(e));
    },
    findLastOptionIndex() {
      return O.findLastIndex(this.visibleOptions, e => this.isValidOption(e));
    },
    findNextOptionIndex(e) {
      const t =
        e < this.visibleOptions.length - 1
          ? this.visibleOptions
              .slice(e + 1)
              .findIndex(s => this.isValidOption(s))
          : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex(e) {
      const t =
        e > 0
          ? O.findLastIndex(this.visibleOptions.slice(0, e), s =>
              this.isValidOption(s),
            )
          : -1;
      return t > -1 ? t : e;
    },
    findSelectedOptionIndex() {
      return this.hasSelectedOption
        ? this.visibleOptions.findIndex(e => this.isValidSelectedOption(e))
        : -1;
    },
    findFirstFocusedOptionIndex() {
      const e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex() {
      const e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    searchOptions(e, t) {
      this.searchValue = (this.searchValue || "") + t;
      let s = -1,
        n = !1;
      return (
        this.focusedOptionIndex !== -1
          ? ((s = this.visibleOptions
              .slice(this.focusedOptionIndex)
              .findIndex(l => this.isOptionMatched(l))),
            (s =
              s === -1
                ? this.visibleOptions
                    .slice(0, this.focusedOptionIndex)
                    .findIndex(l => this.isOptionMatched(l))
                : s + this.focusedOptionIndex))
          : (s = this.visibleOptions.findIndex(l => this.isOptionMatched(l))),
        s !== -1 && (n = !0),
        s === -1 &&
          this.focusedOptionIndex === -1 &&
          (s = this.findFirstFocusedOptionIndex()),
        s !== -1 && this.changeFocusedOptionIndex(e, s),
        this.searchTimeout && clearTimeout(this.searchTimeout),
        (this.searchTimeout = setTimeout(() => {
          (this.searchValue = ""), (this.searchTimeout = null);
        }, 500)),
        n
      );
    },
    changeFocusedOptionIndex(e, t) {
      this.focusedOptionIndex !== t &&
        ((this.focusedOptionIndex = t),
        this.scrollInView(),
        this.selectOnFocus &&
          this.onOptionSelect(e, this.visibleOptions[t], !1));
    },
    scrollInView(e = -1) {
      const t = e !== -1 ? `${this.id}_${e}` : this.focusedOptionId,
        s = w.findSingle(this.list, `li[id="${t}"]`);
      s
        ? s.scrollIntoView &&
          s.scrollIntoView({ block: "nearest", inline: "start" })
        : this.virtualScrollerDisabled ||
          setTimeout(() => {
            this.virtualScroller &&
              this.virtualScroller.scrollToIndex(
                e !== -1 ? e : this.focusedOptionIndex,
              );
          }, 0);
    },
    autoUpdateModel() {
      this.selectOnFocus &&
        this.autoOptionFocus &&
        !this.hasSelectedOption &&
        ((this.focusedOptionIndex = this.findFirstFocusedOptionIndex()),
        this.onOptionSelect(
          null,
          this.visibleOptions[this.focusedOptionIndex],
          !1,
        ));
    },
    updateModel(e, t) {
      this.$emit("update:modelValue", t),
        this.$emit("change", { originalEvent: e, value: t });
    },
    flatOptions(e) {
      return (e || []).reduce((t, s, n) => {
        t.push({ optionGroup: s, group: !0, index: n });
        const l = this.getOptionGroupChildren(s);
        return l && l.forEach(i => t.push(i)), t;
      }, []);
    },
    overlayRef(e) {
      this.overlay = e;
    },
    listRef(e, t) {
      (this.list = e), t && t(e);
    },
    virtualScrollerRef(e) {
      this.virtualScroller = e;
    },
  },
  computed: {
    containerClass() {
      return [
        "p-dropdown p-component p-inputwrapper",
        {
          "p-disabled": this.disabled,
          "p-dropdown-clearable": this.showClear && !this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.modelValue,
          "p-inputwrapper-focus": this.focused || this.overlayVisible,
          "p-overlay-open": this.overlayVisible,
        },
      ];
    },
    inputStyleClass() {
      return [
        "p-dropdown-label p-inputtext",
        this.inputClass,
        {
          "p-placeholder": !this.editable && this.label === this.placeholder,
          "p-dropdown-label-empty":
            !this.editable &&
            !this.$slots.value &&
            (this.label === "p-emptylabel" || this.label.length === 0),
        },
      ];
    },
    panelStyleClass() {
      return [
        "p-dropdown-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1,
        },
      ];
    },
    dropdownIconClass() {
      return [
        "p-dropdown-trigger-icon",
        this.loading ? this.loadingIcon : this.dropdownIcon,
      ];
    },
    visibleOptions() {
      const e = this.optionGroupLabel
        ? this.flatOptions(this.options)
        : this.options || [];
      if (this.filterValue) {
        const t = W.filter(
          e,
          this.searchFields,
          this.filterValue,
          this.filterMatchMode,
          this.filterLocale,
        );
        if (this.optionGroupLabel) {
          const s = this.options || [],
            n = [];
          return (
            s.forEach(l => {
              const i = l.items.filter(o => t.includes(o));
              i.length > 0 && n.push({ ...l, items: [...i] });
            }),
            this.flatOptions(n)
          );
        }
        return t;
      }
      return e;
    },
    hasSelectedOption() {
      return O.isNotEmpty(this.modelValue);
    },
    label() {
      const e = this.findSelectedOptionIndex();
      return e !== -1
        ? this.getOptionLabel(this.visibleOptions[e])
        : this.placeholder || "p-emptylabel";
    },
    editableInputValue() {
      const e = this.findSelectedOptionIndex();
      return e !== -1
        ? this.getOptionLabel(this.visibleOptions[e])
        : this.modelValue || "";
    },
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText() {
      return O.isNotEmpty(this.visibleOptions)
        ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length)
        : this.emptyFilterMessageText;
    },
    filterMessageText() {
      return (
        this.filterMessage || this.$primevue.config.locale.searchMessage || ""
      );
    },
    emptyFilterMessageText() {
      return (
        this.emptyFilterMessage ||
        this.$primevue.config.locale.emptySearchMessage ||
        this.$primevue.config.locale.emptyFilterMessage ||
        ""
      );
    },
    emptyMessageText() {
      return (
        this.emptyMessage || this.$primevue.config.locale.emptyMessage || ""
      );
    },
    selectionMessageText() {
      return (
        this.selectionMessage ||
        this.$primevue.config.locale.selectionMessage ||
        ""
      );
    },
    emptySelectionMessageText() {
      return (
        this.emptySelectionMessage ||
        this.$primevue.config.locale.emptySelectionMessage ||
        ""
      );
    },
    selectedMessageText() {
      return this.hasSelectedOption
        ? this.selectionMessageText.replaceAll("{0}", "1")
        : this.emptySelectionMessageText;
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1
        ? `${this.id}_${this.focusedOptionIndex}`
        : null;
    },
    ariaSetSize() {
      return this.visibleOptions.filter(e => !this.isOptionGroup(e)).length;
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
  },
  directives: { ripple: _ },
  components: { VirtualScroller: G, Portal: j },
};
const le = ["id"],
  ne = [
    "id",
    "value",
    "placeholder",
    "tabindex",
    "disabled",
    "aria-label",
    "aria-labelledby",
    "aria-expanded",
    "aria-controls",
    "aria-activedescendant",
  ],
  oe = [
    "id",
    "tabindex",
    "aria-label",
    "aria-labelledby",
    "aria-expanded",
    "aria-controls",
    "aria-activedescendant",
    "aria-disabled",
  ],
  re = { class: "p-dropdown-trigger" },
  ae = { key: 0, class: "p-dropdown-header" },
  de = { class: "p-dropdown-filter-container" },
  he = ["value", "placeholder", "aria-owns", "aria-activedescendant"],
  ce = { role: "status", "aria-live": "polite", class: "p-hidden-accessible" },
  ue = ["id"],
  pe = ["id"],
  fe = [
    "id",
    "aria-label",
    "aria-selected",
    "aria-disabled",
    "aria-setsize",
    "aria-posinset",
    "onClick",
    "onMousemove",
  ],
  me = { key: 0, class: "p-dropdown-empty-message", role: "option" },
  ye = { key: 1, class: "p-dropdown-empty-message", role: "option" },
  be = {
    key: 1,
    role: "status",
    "aria-live": "polite",
    class: "p-hidden-accessible",
  },
  ge = { role: "status", "aria-live": "polite", class: "p-hidden-accessible" };
function we(e, t, s, n, l, i) {
  const o = N("VirtualScroller"),
    a = N("Portal"),
    c = q("ripple");
  return (
    p(),
    f(
      "div",
      {
        ref: "container",
        id: l.id,
        class: F(i.containerClass),
        onClick:
          t[16] ||
          (t[16] = (...r) => i.onContainerClick && i.onContainerClick(...r)),
      },
      [
        s.editable
          ? (p(),
            f(
              "input",
              M(
                {
                  key: 0,
                  ref: "focusInput",
                  id: s.inputId,
                  type: "text",
                  style: s.inputStyle,
                  class: i.inputStyleClass,
                  value: i.editableInputValue,
                  placeholder: s.placeholder,
                  tabindex: s.disabled ? -1 : s.tabindex,
                  disabled: s.disabled,
                  autocomplete: "off",
                  role: "combobox",
                  "aria-label": e.ariaLabel,
                  "aria-labelledby": e.ariaLabelledby,
                  "aria-haspopup": "listbox",
                  "aria-expanded": l.overlayVisible,
                  "aria-controls": l.id + "_list",
                  "aria-activedescendant": l.focused
                    ? i.focusedOptionId
                    : void 0,
                  onFocus:
                    t[0] || (t[0] = (...r) => i.onFocus && i.onFocus(...r)),
                  onBlur: t[1] || (t[1] = (...r) => i.onBlur && i.onBlur(...r)),
                  onKeydown:
                    t[2] || (t[2] = (...r) => i.onKeyDown && i.onKeyDown(...r)),
                  onInput:
                    t[3] ||
                    (t[3] = (...r) =>
                      i.onEditableInput && i.onEditableInput(...r)),
                },
                s.inputProps,
              ),
              null,
              16,
              ne,
            ))
          : (p(),
            f(
              "span",
              M(
                {
                  key: 1,
                  ref: "focusInput",
                  id: s.inputId,
                  style: s.inputStyle,
                  class: i.inputStyleClass,
                  tabindex: s.disabled ? -1 : s.tabindex,
                  role: "combobox",
                  "aria-label":
                    e.ariaLabel ||
                    (i.label === "p-emptylabel" ? void 0 : i.label),
                  "aria-labelledby": e.ariaLabelledby,
                  "aria-haspopup": "listbox",
                  "aria-expanded": l.overlayVisible,
                  "aria-controls": l.id + "_list",
                  "aria-activedescendant": l.focused
                    ? i.focusedOptionId
                    : void 0,
                  "aria-disabled": s.disabled,
                  onFocus:
                    t[4] || (t[4] = (...r) => i.onFocus && i.onFocus(...r)),
                  onBlur: t[5] || (t[5] = (...r) => i.onBlur && i.onBlur(...r)),
                  onKeydown:
                    t[6] || (t[6] = (...r) => i.onKeyDown && i.onKeyDown(...r)),
                },
                s.inputProps,
              ),
              [
                I(
                  e.$slots,
                  "value",
                  { value: s.modelValue, placeholder: s.placeholder },
                  () => [
                    D(
                      C(
                        i.label === "p-emptylabel"
                          ? "\xA0"
                          : i.label || "empty",
                      ),
                      1,
                    ),
                  ],
                ),
              ],
              16,
              oe,
            )),
        s.showClear && s.modelValue != null
          ? (p(),
            f(
              "i",
              M(
                {
                  key: 2,
                  class: ["p-dropdown-clear-icon", s.clearIcon],
                  onClick:
                    t[7] ||
                    (t[7] = (...r) => i.onClearClick && i.onClearClick(...r)),
                },
                s.clearIconProps,
              ),
              null,
              16,
            ))
          : z("", !0),
        v("div", re, [
          I(e.$slots, "indicator", {}, () => [
            v(
              "span",
              { class: F(i.dropdownIconClass), "aria-hidden": "true" },
              null,
              2,
            ),
          ]),
        ]),
        H(
          a,
          { appendTo: s.appendTo },
          {
            default: B(() => [
              H(
                Z,
                {
                  name: "p-connected-overlay",
                  onEnter: i.onOverlayEnter,
                  onAfterEnter: i.onOverlayAfterEnter,
                  onLeave: i.onOverlayLeave,
                  onAfterLeave: i.onOverlayAfterLeave,
                },
                {
                  default: B(() => [
                    l.overlayVisible
                      ? (p(),
                        f(
                          "div",
                          M(
                            {
                              key: 0,
                              ref: i.overlayRef,
                              style: s.panelStyle,
                              class: i.panelStyleClass,
                              onClick:
                                t[14] ||
                                (t[14] = (...r) =>
                                  i.onOverlayClick && i.onOverlayClick(...r)),
                              onKeydown:
                                t[15] ||
                                (t[15] = (...r) =>
                                  i.onOverlayKeyDown &&
                                  i.onOverlayKeyDown(...r)),
                            },
                            s.panelProps,
                          ),
                          [
                            v(
                              "span",
                              {
                                ref: "firstHiddenFocusableElementOnOverlay",
                                role: "presentation",
                                "aria-hidden": "true",
                                class: "p-hidden-accessible p-hidden-focusable",
                                tabindex: 0,
                                onFocus:
                                  t[8] ||
                                  (t[8] = (...r) =>
                                    i.onFirstHiddenFocus &&
                                    i.onFirstHiddenFocus(...r)),
                              },
                              null,
                              544,
                            ),
                            I(e.$slots, "header", {
                              value: s.modelValue,
                              options: i.visibleOptions,
                            }),
                            s.filter
                              ? (p(),
                                f("div", ae, [
                                  v("div", de, [
                                    v(
                                      "input",
                                      M(
                                        {
                                          ref: "filterInput",
                                          type: "text",
                                          value: l.filterValue,
                                          onVnodeUpdated:
                                            t[9] ||
                                            (t[9] = (...r) =>
                                              i.onFilterUpdated &&
                                              i.onFilterUpdated(...r)),
                                          class:
                                            "p-dropdown-filter p-inputtext p-component",
                                          placeholder: s.filterPlaceholder,
                                          role: "searchbox",
                                          autocomplete: "off",
                                          "aria-owns": l.id + "_list",
                                          "aria-activedescendant":
                                            i.focusedOptionId,
                                          onKeydown:
                                            t[10] ||
                                            (t[10] = (...r) =>
                                              i.onFilterKeyDown &&
                                              i.onFilterKeyDown(...r)),
                                          onBlur:
                                            t[11] ||
                                            (t[11] = (...r) =>
                                              i.onFilterBlur &&
                                              i.onFilterBlur(...r)),
                                          onInput:
                                            t[12] ||
                                            (t[12] = (...r) =>
                                              i.onFilterChange &&
                                              i.onFilterChange(...r)),
                                        },
                                        s.filterInputProps,
                                      ),
                                      null,
                                      16,
                                      he,
                                    ),
                                    v(
                                      "span",
                                      {
                                        class: F([
                                          "p-dropdown-filter-icon",
                                          s.filterIcon,
                                        ]),
                                      },
                                      null,
                                      2,
                                    ),
                                  ]),
                                  v(
                                    "span",
                                    ce,
                                    C(i.filterResultMessageText),
                                    1,
                                  ),
                                ]))
                              : z("", !0),
                            v(
                              "div",
                              {
                                class: "p-dropdown-items-wrapper",
                                style: k({
                                  "max-height": i.virtualScrollerDisabled
                                    ? s.scrollHeight
                                    : "",
                                }),
                              },
                              [
                                H(
                                  o,
                                  M(
                                    { ref: i.virtualScrollerRef },
                                    s.virtualScrollerOptions,
                                    {
                                      items: i.visibleOptions,
                                      style: { height: s.scrollHeight },
                                      tabindex: -1,
                                      disabled: i.virtualScrollerDisabled,
                                    },
                                  ),
                                  J(
                                    {
                                      content: B(
                                        ({
                                          styleClass: r,
                                          contentRef: d,
                                          items: m,
                                          getItemOptions: y,
                                          contentStyle: V,
                                          itemSize: L,
                                        }) => [
                                          v(
                                            "ul",
                                            {
                                              ref: b => i.listRef(b, d),
                                              id: l.id + "_list",
                                              class: F(["p-dropdown-items", r]),
                                              style: k(V),
                                              role: "listbox",
                                            },
                                            [
                                              (p(!0),
                                              f(
                                                K,
                                                null,
                                                A(
                                                  m,
                                                  (b, h) => (
                                                    p(),
                                                    f(
                                                      K,
                                                      {
                                                        key: i.getOptionRenderKey(
                                                          b,
                                                          i.getOptionIndex(
                                                            h,
                                                            y,
                                                          ),
                                                        ),
                                                      },
                                                      [
                                                        i.isOptionGroup(b)
                                                          ? (p(),
                                                            f(
                                                              "li",
                                                              {
                                                                key: 0,
                                                                id:
                                                                  l.id +
                                                                  "_" +
                                                                  i.getOptionIndex(
                                                                    h,
                                                                    y,
                                                                  ),
                                                                style: k({
                                                                  height: L
                                                                    ? L + "px"
                                                                    : void 0,
                                                                }),
                                                                class:
                                                                  "p-dropdown-item-group",
                                                                role: "option",
                                                              },
                                                              [
                                                                I(
                                                                  e.$slots,
                                                                  "optiongroup",
                                                                  {
                                                                    option:
                                                                      b.optionGroup,
                                                                    index:
                                                                      i.getOptionIndex(
                                                                        h,
                                                                        y,
                                                                      ),
                                                                  },
                                                                  () => [
                                                                    D(
                                                                      C(
                                                                        i.getOptionGroupLabel(
                                                                          b.optionGroup,
                                                                        ),
                                                                      ),
                                                                      1,
                                                                    ),
                                                                  ],
                                                                ),
                                                              ],
                                                              12,
                                                              pe,
                                                            ))
                                                          : Q(
                                                              (p(),
                                                              f(
                                                                "li",
                                                                {
                                                                  key: 1,
                                                                  id:
                                                                    l.id +
                                                                    "_" +
                                                                    i.getOptionIndex(
                                                                      h,
                                                                      y,
                                                                    ),
                                                                  style: k({
                                                                    height: L
                                                                      ? L + "px"
                                                                      : void 0,
                                                                  }),
                                                                  class: F([
                                                                    "p-dropdown-item",
                                                                    {
                                                                      "p-highlight":
                                                                        i.isSelected(
                                                                          b,
                                                                        ),
                                                                      "p-focus":
                                                                        l.focusedOptionIndex ===
                                                                        i.getOptionIndex(
                                                                          h,
                                                                          y,
                                                                        ),
                                                                      "p-disabled":
                                                                        i.isOptionDisabled(
                                                                          b,
                                                                        ),
                                                                    },
                                                                  ]),
                                                                  role: "option",
                                                                  "aria-label":
                                                                    i.getOptionLabel(
                                                                      b,
                                                                    ),
                                                                  "aria-selected":
                                                                    i.isSelected(
                                                                      b,
                                                                    ),
                                                                  "aria-disabled":
                                                                    i.isOptionDisabled(
                                                                      b,
                                                                    ),
                                                                  "aria-setsize":
                                                                    i.ariaSetSize,
                                                                  "aria-posinset":
                                                                    i.getAriaPosInset(
                                                                      i.getOptionIndex(
                                                                        h,
                                                                        y,
                                                                      ),
                                                                    ),
                                                                  onClick: u =>
                                                                    i.onOptionSelect(
                                                                      u,
                                                                      b,
                                                                    ),
                                                                  onMousemove:
                                                                    u =>
                                                                      i.onOptionMouseMove(
                                                                        u,
                                                                        i.getOptionIndex(
                                                                          h,
                                                                          y,
                                                                        ),
                                                                      ),
                                                                },
                                                                [
                                                                  I(
                                                                    e.$slots,
                                                                    "option",
                                                                    {
                                                                      option: b,
                                                                      index:
                                                                        i.getOptionIndex(
                                                                          h,
                                                                          y,
                                                                        ),
                                                                    },
                                                                    () => [
                                                                      D(
                                                                        C(
                                                                          i.getOptionLabel(
                                                                            b,
                                                                          ),
                                                                        ),
                                                                        1,
                                                                      ),
                                                                    ],
                                                                  ),
                                                                ],
                                                                46,
                                                                fe,
                                                              )),
                                                              [[c]],
                                                            ),
                                                      ],
                                                      64,
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                              l.filterValue &&
                                              (!m || (m && m.length === 0))
                                                ? (p(),
                                                  f("li", me, [
                                                    I(
                                                      e.$slots,
                                                      "emptyfilter",
                                                      {},
                                                      () => [
                                                        D(
                                                          C(
                                                            i.emptyFilterMessageText,
                                                          ),
                                                          1,
                                                        ),
                                                      ],
                                                    ),
                                                  ]))
                                                : !s.options ||
                                                  (s.options &&
                                                    s.options.length === 0)
                                                ? (p(),
                                                  f("li", ye, [
                                                    I(
                                                      e.$slots,
                                                      "empty",
                                                      {},
                                                      () => [
                                                        D(
                                                          C(i.emptyMessageText),
                                                          1,
                                                        ),
                                                      ],
                                                    ),
                                                  ]))
                                                : z("", !0),
                                            ],
                                            14,
                                            ue,
                                          ),
                                        ],
                                      ),
                                      _: 2,
                                    },
                                    [
                                      e.$slots.loader
                                        ? {
                                            name: "loader",
                                            fn: B(({ options: r }) => [
                                              I(e.$slots, "loader", {
                                                options: r,
                                              }),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ],
                                  ),
                                  1040,
                                  ["items", "style", "disabled"],
                                ),
                              ],
                              4,
                            ),
                            I(e.$slots, "footer", {
                              value: s.modelValue,
                              options: i.visibleOptions,
                            }),
                            !s.options || (s.options && s.options.length === 0)
                              ? (p(), f("span", be, C(i.emptyMessageText), 1))
                              : z("", !0),
                            v("span", ge, C(i.selectedMessageText), 1),
                            v(
                              "span",
                              {
                                ref: "lastHiddenFocusableElementOnOverlay",
                                role: "presentation",
                                "aria-hidden": "true",
                                class: "p-hidden-accessible p-hidden-focusable",
                                tabindex: 0,
                                onFocus:
                                  t[13] ||
                                  (t[13] = (...r) =>
                                    i.onLastHiddenFocus &&
                                    i.onLastHiddenFocus(...r)),
                              },
                              null,
                              544,
                            ),
                          ],
                          16,
                        ))
                      : z("", !0),
                  ]),
                  _: 3,
                },
                8,
                ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"],
              ),
            ]),
            _: 3,
          },
          8,
          ["appendTo"],
        ),
      ],
      10,
      le,
    )
  );
}
function Ie(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0],
      l = document.createElement("style");
    (l.type = "text/css"),
      s === "top" && n.firstChild
        ? n.insertBefore(l, n.firstChild)
        : n.appendChild(l),
      l.styleSheet
        ? (l.styleSheet.cssText = e)
        : l.appendChild(document.createTextNode(e));
  }
}
var Oe = `
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;
Ie(Oe);
se.render = we;
export { G as a, se as s };
