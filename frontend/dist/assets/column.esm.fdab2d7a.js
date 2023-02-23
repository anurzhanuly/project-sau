import {
  o as a,
  c as p,
  H as I,
  R as B,
  B as O,
  J as D,
  v as R,
  A as C,
  X as w,
  F as v,
  x as P,
  k as V,
  U as A,
  q as E,
  g,
  e as b,
  D as f,
  ah as K,
  O as y,
  a0 as x,
  t as F,
  Z as G,
  C as ye,
  ai as H,
  i as we,
  z as be,
  aj as Re,
  E as _,
  f as L,
  G as T,
  T as Ce,
  y as q,
  ak as X,
  I as Y,
  a8 as N,
} from "./index.5bf35bb2.js";
import { s as j, a as ve } from "./dropdown.esm.49941dcc.js";
import { s as Se } from "./inputnumber.esm.79ddd81f.js";
import { O as z } from "./overlayeventbus.esm.e01cac82.js";
var Z = {
  name: "CurrentPageReport",
  props: {
    pageCount: { type: Number, default: 0 },
    currentPage: { type: Number, default: 0 },
    page: { type: Number, default: 0 },
    first: { type: Number, default: 0 },
    rows: { type: Number, default: 0 },
    totalRecords: { type: Number, default: 0 },
    template: { type: String, default: "({currentPage} of {totalPages})" },
  },
  computed: {
    text() {
      return this.template
        .replace("{currentPage}", this.currentPage)
        .replace("{totalPages}", this.pageCount)
        .replace("{first}", this.pageCount > 0 ? this.first + 1 : 0)
        .replace("{last}", Math.min(this.first + this.rows, this.totalRecords))
        .replace("{rows}", this.rows)
        .replace("{totalRecords}", this.totalRecords);
    },
  },
};
const xe = { class: "p-paginator-current" };
function ke(e, t, l, o, n, i) {
  return a(), p("span", xe, I(i.text), 1);
}
Z.render = ke;
var Q = {
  name: "FirstPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-first p-paginator-element p-link",
        { "p-disabled": this.$attrs.disabled },
      ];
    },
  },
  directives: { ripple: B },
};
const Pe = b(
    "span",
    { class: "p-paginator-icon pi pi-angle-double-left" },
    null,
    -1,
  ),
  Me = [Pe];
function Ee(e, t, l, o, n, i) {
  const r = O("ripple");
  return D(
    (a(), p("button", { class: R(i.containerClass), type: "button" }, Me, 2)),
    [[r]],
  );
}
Q.render = Ee;
var $ = {
  name: "JumpToPageDropdown",
  emits: ["page-change"],
  props: { page: Number, pageCount: Number, disabled: Boolean },
  methods: {
    onChange(e) {
      this.$emit("page-change", e);
    },
  },
  computed: {
    pageOptions() {
      let e = [];
      for (let t = 0; t < this.pageCount; t++)
        e.push({ label: String(t + 1), value: t });
      return e;
    },
  },
  components: { JTPDropdown: j },
};
function De(e, t, l, o, n, i) {
  const r = C("JTPDropdown");
  return (
    a(),
    w(
      r,
      {
        modelValue: l.page,
        options: i.pageOptions,
        optionLabel: "label",
        optionValue: "value",
        "onUpdate:modelValue": t[0] || (t[0] = c => i.onChange(c)),
        class: "p-paginator-page-options",
        disabled: l.disabled,
      },
      null,
      8,
      ["modelValue", "options", "disabled"],
    )
  );
}
$.render = De;
var ee = {
  name: "JumpToPageInput",
  inheritAttrs: !1,
  emits: ["page-change"],
  props: { page: Number, pageCount: Number, disabled: Boolean },
  data() {
    return { d_page: this.page };
  },
  watch: {
    page(e) {
      this.d_page = e;
    },
  },
  methods: {
    onChange(e) {
      e !== this.page && ((this.d_page = e), this.$emit("page-change", e - 1));
    },
  },
  computed: {
    inputArialabel() {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.jumpToPageInputLabel
        : void 0;
    },
  },
  components: { JTPInput: Se },
};
function Fe(e, t, l, o, n, i) {
  const r = C("JTPInput");
  return (
    a(),
    w(
      r,
      {
        ref: "jtpInput",
        modelValue: n.d_page,
        class: "p-paginator-page-input",
        "aria-label": i.inputArialabel,
        disabled: l.disabled,
        "onUpdate:modelValue": i.onChange,
      },
      null,
      8,
      ["modelValue", "aria-label", "disabled", "onUpdate:modelValue"],
    )
  );
}
ee.render = Fe;
var te = {
  name: "LastPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-last p-paginator-element p-link",
        { "p-disabled": this.$attrs.disabled },
      ];
    },
  },
  directives: { ripple: B },
};
const Ie = b(
    "span",
    { class: "p-paginator-icon pi pi-angle-double-right" },
    null,
    -1,
  ),
  Le = [Ie];
function Te(e, t, l, o, n, i) {
  const r = O("ripple");
  return D(
    (a(), p("button", { class: R(i.containerClass), type: "button" }, Le, 2)),
    [[r]],
  );
}
te.render = Te;
var le = {
  name: "NextPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-next p-paginator-element p-link",
        { "p-disabled": this.$attrs.disabled },
      ];
    },
  },
  directives: { ripple: B },
};
const ze = b("span", { class: "p-paginator-icon pi pi-angle-right" }, null, -1),
  Oe = [ze];
function Be(e, t, l, o, n, i) {
  const r = O("ripple");
  return D(
    (a(), p("button", { class: R(i.containerClass), type: "button" }, Oe, 2)),
    [[r]],
  );
}
le.render = Be;
var ie = {
  name: "PageLinks",
  inheritAttrs: !1,
  emits: ["click"],
  props: { value: Array, page: Number },
  methods: {
    onPageLinkClick(e, t) {
      this.$emit("click", { originalEvent: e, value: t });
    },
    ariaPageLabel(e) {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, e)
        : void 0;
    },
  },
  computed: {},
  directives: { ripple: B },
};
const Ke = { class: "p-paginator-pages" },
  Ae = ["aria-label", "aria-current", "onClick"];
function He(e, t, l, o, n, i) {
  const r = O("ripple");
  return (
    a(),
    p("span", Ke, [
      (a(!0),
      p(
        v,
        null,
        P(l.value, c =>
          D(
            (a(),
            p(
              "button",
              {
                key: c,
                class: R([
                  "p-paginator-page p-paginator-element p-link",
                  { "p-highlight": c - 1 === l.page },
                ]),
                type: "button",
                "aria-label": i.ariaPageLabel(c),
                "aria-current": c - 1 === l.page ? "page" : void 0,
                onClick: h => i.onPageLinkClick(h, c),
              },
              [V(I(c), 1)],
              10,
              Ae,
            )),
            [[r]],
          ),
        ),
        128,
      )),
    ])
  );
}
ie.render = He;
var ne = {
  name: "PrevPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-prev p-paginator-element p-link",
        { "p-disabled": this.$attrs.disabled },
      ];
    },
  },
  directives: { ripple: B },
};
const Ge = b("span", { class: "p-paginator-icon pi pi-angle-left" }, null, -1),
  _e = [Ge];
function Ve(e, t, l, o, n, i) {
  const r = O("ripple");
  return D(
    (a(), p("button", { class: R(i.containerClass), type: "button" }, _e, 2)),
    [[r]],
  );
}
ne.render = Ve;
var oe = {
  name: "RowsPerPageDropdown",
  emits: ["rows-change"],
  props: { options: Array, rows: Number, disabled: Boolean },
  methods: {
    onChange(e) {
      this.$emit("rows-change", e);
    },
  },
  computed: {
    rowsOptions() {
      let e = [];
      if (this.options)
        for (let t = 0; t < this.options.length; t++)
          e.push({ label: String(this.options[t]), value: this.options[t] });
      return e;
    },
  },
  components: { RPPDropdown: j },
};
function Ne(e, t, l, o, n, i) {
  const r = C("RPPDropdown");
  return (
    a(),
    w(
      r,
      {
        modelValue: l.rows,
        options: i.rowsOptions,
        optionLabel: "label",
        optionValue: "value",
        "onUpdate:modelValue": t[0] || (t[0] = c => i.onChange(c)),
        class: "p-paginator-rpp-options",
        disabled: l.disabled,
      },
      null,
      8,
      ["modelValue", "options", "disabled"],
    )
  );
}
oe.render = Ne;
var re = {
  name: "Paginator",
  emits: ["update:first", "update:rows", "page"],
  props: {
    totalRecords: { type: Number, default: 0 },
    rows: { type: Number, default: 0 },
    first: { type: Number, default: 0 },
    pageLinkSize: { type: Number, default: 5 },
    rowsPerPageOptions: { type: Array, default: null },
    template: {
      type: [Object, String],
      default:
        "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    },
    currentPageReportTemplate: {
      type: null,
      default: "({currentPage} of {totalPages})",
    },
    alwaysShow: { type: Boolean, default: !0 },
  },
  data() {
    return { d_first: this.first, d_rows: this.rows };
  },
  watch: {
    first(e) {
      this.d_first = e;
    },
    rows(e) {
      this.d_rows = e;
    },
    totalRecords(e) {
      this.page > 0 &&
        e &&
        this.d_first >= e &&
        this.changePage(this.pageCount - 1);
    },
  },
  mounted() {
    this.setPaginatorAttribute(), this.createStyle();
  },
  methods: {
    changePage(e) {
      const t = this.pageCount;
      if (e >= 0 && e < t) {
        this.d_first = this.d_rows * e;
        const l = {
          page: e,
          first: this.d_first,
          rows: this.d_rows,
          pageCount: t,
        };
        this.$emit("update:first", this.d_first),
          this.$emit("update:rows", this.d_rows),
          this.$emit("page", l);
      }
    },
    changePageToFirst(e) {
      this.isFirstPage || this.changePage(0), e.preventDefault();
    },
    changePageToPrev(e) {
      this.changePage(this.page - 1), e.preventDefault();
    },
    changePageLink(e) {
      this.changePage(e.value - 1), e.originalEvent.preventDefault();
    },
    changePageToNext(e) {
      this.changePage(this.page + 1), e.preventDefault();
    },
    changePageToLast(e) {
      this.isLastPage || this.changePage(this.pageCount - 1),
        e.preventDefault();
    },
    onRowChange(e) {
      (this.d_rows = e), this.changePage(this.page);
    },
    createStyle() {
      if (this.hasBreakpoints()) {
        (this.styleElement = document.createElement("style")),
          (this.styleElement.type = "text/css"),
          document.head.appendChild(this.styleElement);
        let e = "";
        const t = Object.keys(this.template),
          l = {};
        t.sort((o, n) => parseInt(o) - parseInt(n)).forEach(o => {
          l[o] = this.template[o];
        });
        for (const [o, [n]] of Object.entries(Object.entries(l))) {
          const i = Object.entries(l)[o - 1]
            ? `and (min-width:${Object.keys(l)[o - 1]})`
            : "";
          n === "default"
            ? (e += `
                            @media screen ${i} {
                                .paginator[${this.attributeSelector}],
                                .p-paginator-default{
                                    display: flex !important;
                                }
                            }
                        `)
            : (e += `
                        .paginator[${this.attributeSelector}], .p-paginator-${n} {
                                display: none !important;
                            }
                        @media screen ${i} and (max-width: ${n}) {
                            .paginator[${this.attributeSelector}], .p-paginator-${n} {
                                display: flex !important;
                            }
                            .paginator[${this.attributeSelector}],
                            .p-paginator-default{
                                display: none !important;
                            }
                        }
                    `);
        }
        this.styleElement.innerHTML = e;
      }
    },
    hasBreakpoints() {
      return typeof this.template == "object";
    },
    getPaginatorClasses(e) {
      return [
        {
          "p-paginator-default": !this.hasBreakpoints(),
          [`p-paginator-${e}`]: this.hasBreakpoints(),
        },
      ];
    },
    setPaginatorAttribute() {
      this.$refs.paginator &&
        this.$refs.paginator.length >= 0 &&
        [...this.$refs.paginator].forEach(e => {
          e.setAttribute(this.attributeSelector, "");
        });
    },
    getAriaLabel(e) {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria[e]
        : void 0;
    },
  },
  computed: {
    templateItems() {
      let e = {};
      if (this.hasBreakpoints()) {
        (e = this.template),
          e.default ||
            (e.default =
              "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown");
        for (const t in e)
          e[t] = this.template[t].split(" ").map(l => l.trim());
        return e;
      }
      return (e.default = this.template.split(" ").map(t => t.trim())), e;
    },
    page() {
      return Math.floor(this.d_first / this.d_rows);
    },
    pageCount() {
      return Math.ceil(this.totalRecords / this.d_rows);
    },
    isFirstPage() {
      return this.page === 0;
    },
    isLastPage() {
      return this.page === this.pageCount - 1;
    },
    calculatePageLinkBoundaries() {
      const e = this.pageCount,
        t = Math.min(this.pageLinkSize, e);
      let l = Math.max(0, Math.ceil(this.page - t / 2)),
        o = Math.min(e - 1, l + t - 1);
      const n = this.pageLinkSize - (o - l + 1);
      return (l = Math.max(0, l - n)), [l, o];
    },
    pageLinks() {
      let e = [],
        t = this.calculatePageLinkBoundaries,
        l = t[0],
        o = t[1];
      for (var n = l; n <= o; n++) e.push(n + 1);
      return e;
    },
    currentState() {
      return { page: this.page, first: this.d_first, rows: this.d_rows };
    },
    empty() {
      return this.pageCount === 0;
    },
    currentPage() {
      return this.pageCount > 0 ? this.page + 1 : 0;
    },
    attributeSelector() {
      return A();
    },
  },
  components: {
    CurrentPageReport: Z,
    FirstPageLink: Q,
    LastPageLink: te,
    NextPageLink: le,
    PageLinks: ie,
    PrevPageLink: ne,
    RowsPerPageDropdown: oe,
    JumpToPageDropdown: $,
    JumpToPageInput: ee,
  },
};
const je = { key: 0 },
  We = { key: 0, class: "p-paginator-left-content" },
  Ue = { key: 1, class: "p-paginator-right-content" };
function Je(e, t, l, o, n, i) {
  const r = C("FirstPageLink"),
    c = C("PrevPageLink"),
    h = C("NextPageLink"),
    s = C("LastPageLink"),
    m = C("PageLinks"),
    u = C("CurrentPageReport"),
    d = C("RowsPerPageDropdown"),
    S = C("JumpToPageDropdown"),
    me = C("JumpToPageInput");
  return l.alwaysShow || (i.pageLinks && i.pageLinks.length > 1)
    ? (a(),
      p("nav", je, [
        (a(!0),
        p(
          v,
          null,
          P(
            i.templateItems,
            (ge, J) => (
              a(),
              p(
                "div",
                {
                  key: J,
                  ref_for: !0,
                  ref: "paginator",
                  class: R([
                    "p-paginator p-component",
                    i.getPaginatorClasses(J),
                  ]),
                },
                [
                  e.$slots.start
                    ? (a(),
                      p("div", We, [
                        E(e.$slots, "start", { state: i.currentState }),
                      ]))
                    : g("", !0),
                  (a(!0),
                  p(
                    v,
                    null,
                    P(
                      ge,
                      M => (
                        a(),
                        p(
                          v,
                          { key: M },
                          [
                            M === "FirstPageLink"
                              ? (a(),
                                w(
                                  r,
                                  {
                                    key: 0,
                                    "aria-label":
                                      i.getAriaLabel("firstPageLabel"),
                                    onClick:
                                      t[0] ||
                                      (t[0] = k => i.changePageToFirst(k)),
                                    disabled: i.isFirstPage || i.empty,
                                  },
                                  null,
                                  8,
                                  ["aria-label", "disabled"],
                                ))
                              : M === "PrevPageLink"
                              ? (a(),
                                w(
                                  c,
                                  {
                                    key: 1,
                                    "aria-label":
                                      i.getAriaLabel("prevPageLabel"),
                                    onClick:
                                      t[1] ||
                                      (t[1] = k => i.changePageToPrev(k)),
                                    disabled: i.isFirstPage || i.empty,
                                  },
                                  null,
                                  8,
                                  ["aria-label", "disabled"],
                                ))
                              : M === "NextPageLink"
                              ? (a(),
                                w(
                                  h,
                                  {
                                    key: 2,
                                    "aria-label":
                                      i.getAriaLabel("nextPageLabel"),
                                    onClick:
                                      t[2] ||
                                      (t[2] = k => i.changePageToNext(k)),
                                    disabled: i.isLastPage || i.empty,
                                  },
                                  null,
                                  8,
                                  ["aria-label", "disabled"],
                                ))
                              : M === "LastPageLink"
                              ? (a(),
                                w(
                                  s,
                                  {
                                    key: 3,
                                    "aria-label":
                                      i.getAriaLabel("lastPageLabel"),
                                    onClick:
                                      t[3] ||
                                      (t[3] = k => i.changePageToLast(k)),
                                    disabled: i.isLastPage || i.empty,
                                  },
                                  null,
                                  8,
                                  ["aria-label", "disabled"],
                                ))
                              : M === "PageLinks"
                              ? (a(),
                                w(
                                  m,
                                  {
                                    key: 4,
                                    "aria-label": i.getAriaLabel("pageLabel"),
                                    value: i.pageLinks,
                                    page: i.page,
                                    onClick:
                                      t[4] || (t[4] = k => i.changePageLink(k)),
                                  },
                                  null,
                                  8,
                                  ["aria-label", "value", "page"],
                                ))
                              : M === "CurrentPageReport"
                              ? (a(),
                                w(
                                  u,
                                  {
                                    key: 5,
                                    "aria-live": "polite",
                                    template: l.currentPageReportTemplate,
                                    currentPage: i.currentPage,
                                    page: i.page,
                                    pageCount: i.pageCount,
                                    first: n.d_first,
                                    rows: n.d_rows,
                                    totalRecords: l.totalRecords,
                                  },
                                  null,
                                  8,
                                  [
                                    "template",
                                    "currentPage",
                                    "page",
                                    "pageCount",
                                    "first",
                                    "rows",
                                    "totalRecords",
                                  ],
                                ))
                              : M === "RowsPerPageDropdown" &&
                                l.rowsPerPageOptions
                              ? (a(),
                                w(
                                  d,
                                  {
                                    key: 6,
                                    "aria-label":
                                      i.getAriaLabel("rowsPerPageLabel"),
                                    rows: n.d_rows,
                                    options: l.rowsPerPageOptions,
                                    onRowsChange:
                                      t[5] || (t[5] = k => i.onRowChange(k)),
                                    disabled: i.empty,
                                  },
                                  null,
                                  8,
                                  ["aria-label", "rows", "options", "disabled"],
                                ))
                              : M === "JumpToPageDropdown"
                              ? (a(),
                                w(
                                  S,
                                  {
                                    key: 7,
                                    "aria-label": i.getAriaLabel(
                                      "jumpToPageDropdownLabel",
                                    ),
                                    page: i.page,
                                    pageCount: i.pageCount,
                                    onPageChange:
                                      t[6] || (t[6] = k => i.changePage(k)),
                                    disabled: i.empty,
                                  },
                                  null,
                                  8,
                                  [
                                    "aria-label",
                                    "page",
                                    "pageCount",
                                    "disabled",
                                  ],
                                ))
                              : M === "JumpToPageInput"
                              ? (a(),
                                w(
                                  me,
                                  {
                                    key: 8,
                                    page: i.currentPage,
                                    onPageChange:
                                      t[7] || (t[7] = k => i.changePage(k)),
                                    disabled: i.empty,
                                  },
                                  null,
                                  8,
                                  ["page", "disabled"],
                                ))
                              : g("", !0),
                          ],
                          64,
                        )
                      ),
                    ),
                    128,
                  )),
                  e.$slots.end
                    ? (a(),
                      p("div", Ue, [
                        E(e.$slots, "end", { state: i.currentState }),
                      ]))
                    : g("", !0),
                ],
                2,
              )
            ),
          ),
          128,
        )),
      ]))
    : g("", !0);
}
function qe(e, t) {
  t === void 0 && (t = {});
  var l = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    (n.type = "text/css"),
      l === "top" && o.firstChild
        ? o.insertBefore(n, o.firstChild)
        : o.appendChild(n),
      n.styleSheet
        ? (n.styleSheet.cssText = e)
        : n.appendChild(document.createTextNode(e));
  }
}
var Xe = `
.p-paginator-default {
    display: flex;
}
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.p-paginator-left-content {
    margin-right: auto;
}
.p-paginator-right-content {
    margin-left: auto;
}
.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev,
.p-paginator-current {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
}
.p-paginator-element:focus {
    z-index: 1;
    position: relative;
}
`;
qe(Xe);
re.render = Je;
var ae = {
  name: "RowCheckbox",
  emits: ["change"],
  props: { value: null, checked: null },
  data() {
    return { focused: !1 };
  },
  methods: {
    onClick(e) {
      this.$attrs.disabled ||
        (this.$emit("change", { originalEvent: e, data: this.value }),
        f.focus(this.$refs.input)),
        e.preventDefault();
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    },
    onKeydown(e) {
      switch (e.code) {
        case "Space": {
          this.onClick(e);
          break;
        }
      }
    },
  },
  computed: {
    checkboxAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.checked
          ? this.$primevue.config.locale.aria.selectRow
          : this.$primevue.config.locale.aria.unselectRow
        : void 0;
    },
  },
};
const Ye = { class: "p-hidden-accessible" },
  Ze = ["checked", "disabled", "tabindex", "aria-label"];
function Qe(e, t, l, o, n, i) {
  return (
    a(),
    p(
      "div",
      {
        class: R([
          "p-checkbox p-component",
          { "p-checkbox-focused": n.focused },
        ]),
        onClick: t[3] || (t[3] = (...r) => i.onClick && i.onClick(...r)),
      },
      [
        b("div", Ye, [
          b(
            "input",
            {
              ref: "input",
              type: "checkbox",
              checked: l.checked,
              disabled: e.$attrs.disabled,
              tabindex: e.$attrs.disabled ? null : "0",
              "aria-label": i.checkboxAriaLabel,
              onFocus: t[0] || (t[0] = r => i.onFocus(r)),
              onBlur: t[1] || (t[1] = r => i.onBlur(r)),
              onKeydown:
                t[2] || (t[2] = (...r) => i.onKeydown && i.onKeydown(...r)),
            },
            null,
            40,
            Ze,
          ),
        ]),
        b(
          "div",
          {
            ref: "box",
            class: R([
              "p-checkbox-box p-component",
              {
                "p-highlight": l.checked,
                "p-disabled": e.$attrs.disabled,
                "p-focus": n.focused,
              },
            ]),
          },
          [
            b(
              "span",
              { class: R(["p-checkbox-icon", { "pi pi-check": l.checked }]) },
              null,
              2,
            ),
          ],
          2,
        ),
      ],
      2,
    )
  );
}
ae.render = Qe;
var se = {
  name: "RowRadioButton",
  inheritAttrs: !1,
  emits: ["change"],
  props: { value: null, checked: null, name: null },
  data() {
    return { focused: !1 };
  },
  methods: {
    onClick(e) {
      this.disabled ||
        this.checked ||
        (this.$emit("change", { originalEvent: e, data: this.value }),
        f.focus(this.$refs.input));
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    },
  },
};
const $e = { class: "p-hidden-accessible" },
  et = ["checked", "disabled", "name"],
  tt = b("div", { class: "p-radiobutton-icon" }, null, -1),
  lt = [tt];
function it(e, t, l, o, n, i) {
  return (
    a(),
    p(
      "div",
      {
        class: R([
          "p-radiobutton p-component",
          { "p-radiobutton-focused": n.focused },
        ]),
        onClick: t[3] || (t[3] = (...r) => i.onClick && i.onClick(...r)),
      },
      [
        b("div", $e, [
          b(
            "input",
            {
              ref: "input",
              type: "radio",
              checked: l.checked,
              disabled: e.$attrs.disabled,
              name: l.name,
              tabindex: "0",
              onFocus: t[0] || (t[0] = r => i.onFocus(r)),
              onBlur: t[1] || (t[1] = r => i.onBlur(r)),
              onKeydown:
                t[2] ||
                (t[2] = K(
                  N((...r) => i.onClick && i.onClick(...r), ["prevent"]),
                  ["space"],
                )),
            },
            null,
            40,
            et,
          ),
        ]),
        b(
          "div",
          {
            ref: "box",
            class: R([
              "p-radiobutton-box p-component",
              {
                "p-highlight": l.checked,
                "p-disabled": e.$attrs.disabled,
                "p-focus": n.focused,
              },
            ]),
          },
          lt,
          2,
        ),
      ],
      2,
    )
  );
}
se.render = it;
var de = {
  name: "BodyCell",
  emits: [
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel",
    "row-toggle",
    "radio-change",
    "checkbox-change",
    "editing-meta-change",
  ],
  props: {
    rowData: { type: Object, default: null },
    column: { type: Object, default: null },
    frozenRow: { type: Boolean, default: !1 },
    rowIndex: { type: Number, default: null },
    index: { type: Number, default: null },
    rowTogglerIcon: { type: Array, default: null },
    selected: { type: Boolean, default: !1 },
    editing: { type: Boolean, default: !1 },
    editingMeta: { type: Object, default: null },
    editMode: { type: String, default: null },
    responsiveLayout: { type: String, default: "stack" },
    virtualScrollerContentProps: { type: Object, default: null },
    ariaControls: { type: String, default: null },
    name: { type: String, default: null },
  },
  documentEditListener: null,
  selfClick: !1,
  overlayEventListener: null,
  data() {
    return { d_editing: this.editing, styleObject: {}, isRowExpanded: !1 };
  },
  watch: {
    editing(e) {
      this.d_editing = e;
    },
    "$data.d_editing": function (e) {
      this.$emit("editing-meta-change", {
        data: this.rowData,
        field: this.field || `field_${this.index}`,
        index: this.rowIndex,
        editing: e,
      });
    },
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    this.columnProp("frozen") && this.updateStickyPosition(),
      this.d_editing &&
        (this.editMode === "cell" ||
          (this.editMode === "row" && this.columnProp("rowEditor"))) &&
        setTimeout(() => {
          const e = f.getFirstFocusableElement(this.$el);
          e && e.focus();
        }, 1);
  },
  beforeUnmount() {
    this.overlayEventListener &&
      (z.off("overlay-click", this.overlayEventListener),
      (this.overlayEventListener = null));
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    resolveFieldData() {
      return y.resolveFieldData(this.rowData, this.field);
    },
    toggleRow(e) {
      (this.isRowExpanded = !this.isRowExpanded),
        this.$emit("row-toggle", { originalEvent: e, data: this.rowData });
    },
    toggleRowWithRadio(e, t) {
      this.$emit("radio-change", {
        originalEvent: e.originalEvent,
        index: t,
        data: e.data,
      });
    },
    toggleRowWithCheckbox(e, t) {
      this.$emit("checkbox-change", {
        originalEvent: e.originalEvent,
        index: t,
        data: e.data,
      });
    },
    isEditable() {
      return this.column.children && this.column.children.editor != null;
    },
    bindDocumentEditListener() {
      this.documentEditListener ||
        ((this.documentEditListener = e => {
          this.selfClick || this.completeEdit(e, "outside"),
            (this.selfClick = !1);
        }),
        document.addEventListener("click", this.documentEditListener));
    },
    unbindDocumentEditListener() {
      this.documentEditListener &&
        (document.removeEventListener("click", this.documentEditListener),
        (this.documentEditListener = null),
        (this.selfClick = !1));
    },
    switchCellToViewMode() {
      (this.d_editing = !1),
        this.unbindDocumentEditListener(),
        z.off("overlay-click", this.overlayEventListener),
        (this.overlayEventListener = null);
    },
    onClick(e) {
      this.editMode === "cell" &&
        this.isEditable() &&
        ((this.selfClick = !0),
        this.d_editing ||
          ((this.d_editing = !0),
          this.bindDocumentEditListener(),
          this.$emit("cell-edit-init", {
            originalEvent: e,
            data: this.rowData,
            field: this.field,
            index: this.rowIndex,
          }),
          (this.overlayEventListener = t => {
            this.$el && this.$el.contains(t.target) && (this.selfClick = !0);
          }),
          z.on("overlay-click", this.overlayEventListener)));
    },
    completeEdit(e, t) {
      const l = {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        value: this.rowData[this.field],
        newValue: this.editingRowData[this.field],
        field: this.field,
        index: this.rowIndex,
        type: t,
        defaultPrevented: !1,
        preventDefault: function () {
          this.defaultPrevented = !0;
        },
      };
      this.$emit("cell-edit-complete", l),
        l.defaultPrevented || this.switchCellToViewMode();
    },
    onKeyDown(e) {
      if (this.editMode === "cell")
        switch (e.code) {
          case "Enter":
            this.completeEdit(e, "enter");
            break;
          case "Escape":
            this.switchCellToViewMode(),
              this.$emit("cell-edit-cancel", {
                originalEvent: e,
                data: this.rowData,
                field: this.field,
                index: this.rowIndex,
              });
            break;
          case "Tab":
            this.completeEdit(e, "tab"),
              e.shiftKey ? this.moveToPreviousCell(e) : this.moveToNextCell(e);
            break;
        }
    },
    moveToPreviousCell(e) {
      let t = this.findCell(e.target),
        l = this.findPreviousEditableColumn(t);
      l && (f.invokeElementMethod(l, "click"), e.preventDefault());
    },
    moveToNextCell(e) {
      let t = this.findCell(e.target),
        l = this.findNextEditableColumn(t);
      l && (f.invokeElementMethod(l, "click"), e.preventDefault());
    },
    findCell(e) {
      if (e) {
        let t = e;
        for (; t && !f.hasClass(t, "p-cell-editing"); ) t = t.parentElement;
        return t;
      } else return null;
    },
    findPreviousEditableColumn(e) {
      let t = e.previousElementSibling;
      if (!t) {
        let l = e.parentElement.previousElementSibling;
        l && (t = l.lastElementChild);
      }
      return t
        ? f.hasClass(t, "p-editable-column")
          ? t
          : this.findPreviousEditableColumn(t)
        : null;
    },
    findNextEditableColumn(e) {
      let t = e.nextElementSibling;
      if (!t) {
        let l = e.parentElement.nextElementSibling;
        l && (t = l.firstElementChild);
      }
      return t
        ? f.hasClass(t, "p-editable-column")
          ? t
          : this.findNextEditableColumn(t)
        : null;
    },
    isEditingCellValid() {
      return f.find(this.$el, ".p-invalid").length === 0;
    },
    onRowEditInit(e) {
      this.$emit("row-edit-init", {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex,
      });
    },
    onRowEditSave(e) {
      this.$emit("row-edit-save", {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex,
      });
    },
    onRowEditCancel(e) {
      this.$emit("row-edit-cancel", {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex,
      });
    },
    editorInitCallback(e) {
      this.$emit("row-edit-init", {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex,
      });
    },
    editorSaveCallback(e) {
      this.editMode === "row"
        ? this.$emit("row-edit-save", {
            originalEvent: e,
            data: this.rowData,
            newData: this.editingRowData,
            field: this.field,
            index: this.rowIndex,
          })
        : this.completeEdit(e, "enter");
    },
    editorCancelCallback(e) {
      this.editMode === "row"
        ? this.$emit("row-edit-cancel", {
            originalEvent: e,
            data: this.rowData,
            newData: this.editingRowData,
            field: this.field,
            index: this.rowIndex,
          })
        : (this.switchCellToViewMode(),
          this.$emit("cell-edit-cancel", {
            originalEvent: e,
            data: this.rowData,
            field: this.field,
            index: this.rowIndex,
          }));
    },
    updateStickyPosition() {
      if (this.columnProp("frozen"))
        if (this.columnProp("alignFrozen") === "right") {
          let t = 0,
            l = this.$el.nextElementSibling;
          l && (t = f.getOuterWidth(l) + parseFloat(l.style.right || 0)),
            (this.styleObject.right = t + "px");
        } else {
          let t = 0,
            l = this.$el.previousElementSibling;
          l && (t = f.getOuterWidth(l) + parseFloat(l.style.left || 0)),
            (this.styleObject.left = t + "px");
        }
    },
    getVirtualScrollerProp(e) {
      return this.virtualScrollerContentProps
        ? this.virtualScrollerContentProps[e]
        : null;
    },
  },
  computed: {
    editingRowData() {
      return this.editingMeta[this.rowIndex]
        ? this.editingMeta[this.rowIndex].data
        : this.rowData;
    },
    field() {
      return this.columnProp("field");
    },
    containerClass() {
      return [
        this.columnProp("bodyClass"),
        this.columnProp("class"),
        {
          "p-selection-column": this.columnProp("selectionMode") != null,
          "p-editable-column": this.isEditable(),
          "p-cell-editing": this.d_editing,
          "p-frozen-column": this.columnProp("frozen"),
        },
      ];
    },
    containerStyle() {
      let e = this.columnProp("bodyStyle"),
        t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    loading() {
      return this.getVirtualScrollerProp("loading");
    },
    loadingOptions() {
      const e = this.getVirtualScrollerProp("getLoaderOptions");
      return (
        e &&
        e(this.rowIndex, {
          cellIndex: this.index,
          cellFirst: this.index === 0,
          cellLast:
            this.index === this.getVirtualScrollerProp("columns").length - 1,
          cellEven: this.index % 2 === 0,
          cellOdd: this.index % 2 !== 0,
          column: this.column,
          field: this.field,
        })
      );
    },
    expandButtonAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.isRowExpanded
          ? this.$primevue.config.locale.aria.expandRow
          : this.$primevue.config.locale.aria.collapseRow
        : void 0;
    },
    initButtonAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.editRow
        : void 0;
    },
    saveButtonAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.saveEdit
        : void 0;
    },
    cancelButtonAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.cancelEdit
        : void 0;
    },
  },
  components: { DTRadioButton: se, DTCheckbox: ae },
  directives: { ripple: B },
};
const nt = { key: 0, class: "p-column-title" },
  ot = ["aria-expanded", "aria-controls", "aria-label"],
  rt = ["aria-label"],
  at = b(
    "span",
    { class: "p-row-editor-init-icon pi pi-fw pi-pencil" },
    null,
    -1,
  ),
  st = [at],
  dt = ["aria-label"],
  ut = b(
    "span",
    { class: "p-row-editor-save-icon pi pi-fw pi-check" },
    null,
    -1,
  ),
  ct = [ut],
  ht = ["aria-label"],
  pt = b(
    "span",
    { class: "p-row-editor-cancel-icon pi pi-fw pi-times" },
    null,
    -1,
  ),
  ft = [pt];
function mt(e, t, l, o, n, i) {
  const r = C("DTRadioButton"),
    c = C("DTCheckbox"),
    h = O("ripple");
  return i.loading
    ? (a(),
      p(
        "td",
        { key: 0, style: F(i.containerStyle), class: R(i.containerClass) },
        [
          (a(),
          w(
            x(l.column.children.loading),
            {
              data: l.rowData,
              column: l.column,
              field: i.field,
              index: l.rowIndex,
              frozenRow: l.frozenRow,
              loadingOptions: i.loadingOptions,
            },
            null,
            8,
            ["data", "column", "field", "index", "frozenRow", "loadingOptions"],
          )),
        ],
        6,
      ))
    : (a(),
      p(
        "td",
        {
          key: 1,
          style: F(i.containerStyle),
          class: R(i.containerClass),
          onClick: t[6] || (t[6] = (...s) => i.onClick && i.onClick(...s)),
          onKeydown:
            t[7] || (t[7] = (...s) => i.onKeyDown && i.onKeyDown(...s)),
          role: "cell",
        },
        [
          l.responsiveLayout === "stack"
            ? (a(), p("span", nt, I(i.columnProp("header")), 1))
            : g("", !0),
          l.column.children && l.column.children.body && !n.d_editing
            ? (a(),
              w(
                x(l.column.children.body),
                {
                  key: 1,
                  data: l.rowData,
                  column: l.column,
                  field: i.field,
                  index: l.rowIndex,
                  frozenRow: l.frozenRow,
                  editorInitCallback: i.editorInitCallback,
                },
                null,
                8,
                [
                  "data",
                  "column",
                  "field",
                  "index",
                  "frozenRow",
                  "editorInitCallback",
                ],
              ))
            : l.column.children && l.column.children.editor && n.d_editing
            ? (a(),
              w(
                x(l.column.children.editor),
                {
                  key: 2,
                  data: i.editingRowData,
                  column: l.column,
                  field: i.field,
                  index: l.rowIndex,
                  frozenRow: l.frozenRow,
                  editorSaveCallback: i.editorSaveCallback,
                  editorCancelCallback: i.editorCancelCallback,
                },
                null,
                8,
                [
                  "data",
                  "column",
                  "field",
                  "index",
                  "frozenRow",
                  "editorSaveCallback",
                  "editorCancelCallback",
                ],
              ))
            : l.column.children &&
              l.column.children.body &&
              !l.column.children.editor &&
              n.d_editing
            ? (a(),
              w(
                x(l.column.children.body),
                {
                  key: 3,
                  data: i.editingRowData,
                  column: l.column,
                  field: i.field,
                  index: l.rowIndex,
                  frozenRow: l.frozenRow,
                },
                null,
                8,
                ["data", "column", "field", "index", "frozenRow"],
              ))
            : i.columnProp("selectionMode")
            ? (a(),
              p(
                v,
                { key: 4 },
                [
                  i.columnProp("selectionMode") === "single"
                    ? (a(),
                      w(
                        r,
                        {
                          key: 0,
                          value: l.rowData,
                          name: l.name,
                          checked: l.selected,
                          onChange:
                            t[0] ||
                            (t[0] = s => i.toggleRowWithRadio(s, l.rowIndex)),
                        },
                        null,
                        8,
                        ["value", "name", "checked"],
                      ))
                    : i.columnProp("selectionMode") === "multiple"
                    ? (a(),
                      w(
                        c,
                        {
                          key: 1,
                          value: l.rowData,
                          checked: l.selected,
                          "aria-selected": l.selected ? !0 : void 0,
                          onChange:
                            t[1] ||
                            (t[1] = s =>
                              i.toggleRowWithCheckbox(s, l.rowIndex)),
                        },
                        null,
                        8,
                        ["value", "checked", "aria-selected"],
                      ))
                    : g("", !0),
                ],
                64,
              ))
            : i.columnProp("rowReorder")
            ? (a(),
              p(
                "i",
                {
                  key: 5,
                  class: R([
                    "p-datatable-reorderablerow-handle",
                    i.columnProp("rowReorderIcon") || "pi pi-bars",
                  ]),
                },
                null,
                2,
              ))
            : i.columnProp("expander")
            ? D(
                (a(),
                p(
                  "button",
                  {
                    key: 6,
                    class: "p-row-toggler p-link",
                    type: "button",
                    "aria-expanded": n.isRowExpanded,
                    "aria-controls": l.ariaControls,
                    "aria-label": i.expandButtonAriaLabel,
                    onClick:
                      t[2] ||
                      (t[2] = (...s) => i.toggleRow && i.toggleRow(...s)),
                  },
                  [b("span", { class: R(l.rowTogglerIcon) }, null, 2)],
                  8,
                  ot,
                )),
                [[h]],
              )
            : l.editMode === "row" && i.columnProp("rowEditor")
            ? (a(),
              p(
                v,
                { key: 7 },
                [
                  n.d_editing
                    ? g("", !0)
                    : D(
                        (a(),
                        p(
                          "button",
                          {
                            key: 0,
                            class: "p-row-editor-init p-link",
                            type: "button",
                            "aria-label": i.initButtonAriaLabel,
                            onClick:
                              t[3] ||
                              (t[3] = (...s) =>
                                i.onRowEditInit && i.onRowEditInit(...s)),
                          },
                          st,
                          8,
                          rt,
                        )),
                        [[h]],
                      ),
                  n.d_editing
                    ? D(
                        (a(),
                        p(
                          "button",
                          {
                            key: 1,
                            class: "p-row-editor-save p-link",
                            type: "button",
                            "aria-label": i.saveButtonAriaLabel,
                            onClick:
                              t[4] ||
                              (t[4] = (...s) =>
                                i.onRowEditSave && i.onRowEditSave(...s)),
                          },
                          ct,
                          8,
                          dt,
                        )),
                        [[h]],
                      )
                    : g("", !0),
                  n.d_editing
                    ? D(
                        (a(),
                        p(
                          "button",
                          {
                            key: 2,
                            class: "p-row-editor-cancel p-link",
                            type: "button",
                            "aria-label": i.cancelButtonAriaLabel,
                            onClick:
                              t[5] ||
                              (t[5] = (...s) =>
                                i.onRowEditCancel && i.onRowEditCancel(...s)),
                          },
                          ft,
                          8,
                          ht,
                        )),
                        [[h]],
                      )
                    : g("", !0),
                ],
                64,
              ))
            : (a(), p(v, { key: 8 }, [V(I(i.resolveFieldData()), 1)], 64)),
        ],
        38,
      ));
}
de.render = mt;
var ue = {
  name: "TableBody",
  emits: [
    "rowgroup-toggle",
    "row-click",
    "row-dblclick",
    "row-rightclick",
    "row-touchend",
    "row-keydown",
    "row-mousedown",
    "row-dragstart",
    "row-dragover",
    "row-dragleave",
    "row-dragend",
    "row-drop",
    "row-toggle",
    "radio-change",
    "checkbox-change",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel",
    "editing-meta-change",
  ],
  props: {
    value: { type: Array, default: null },
    columns: { type: null, default: null },
    frozenRow: { type: Boolean, default: !1 },
    empty: { type: Boolean, default: !1 },
    rowGroupMode: { type: String, default: null },
    groupRowsBy: { type: [Array, String, Function], default: null },
    expandableRowGroups: { type: Boolean, default: !1 },
    expandedRowGroups: { type: Array, default: null },
    dataKey: { type: String, default: null },
    expandedRowIcon: { type: String, default: null },
    collapsedRowIcon: { type: String, default: null },
    expandedRows: { type: Array, default: null },
    expandedRowKeys: { type: null, default: null },
    selection: { type: [Array, Object], default: null },
    selectionKeys: { type: null, default: null },
    selectionMode: { type: String, default: null },
    contextMenu: { type: Boolean, default: !1 },
    contextMenuSelection: { type: Object, default: null },
    rowClass: { type: null, default: null },
    rowStyle: { type: null, default: null },
    editMode: { type: String, default: null },
    compareSelectionBy: { type: String, default: "deepEquals" },
    editingRows: { type: Array, default: null },
    editingRowKeys: { type: null, default: null },
    editingMeta: { type: Object, default: null },
    templates: { type: null, default: null },
    scrollable: { type: Boolean, default: !1 },
    responsiveLayout: { type: String, default: "stack" },
    virtualScrollerContentProps: { type: Object, default: null },
    isVirtualScrollerDisabled: { type: Boolean, default: !1 },
  },
  data() {
    return {
      rowGroupHeaderStyleObject: {},
      tabindexArray: [],
      isARowSelected: !1,
    };
  },
  watch: {
    virtualScrollerContentProps(e, t) {
      !this.isVirtualScrollerDisabled &&
        this.getVirtualScrollerProp("vertical") &&
        this.getVirtualScrollerProp("itemSize", t) !==
          this.getVirtualScrollerProp("itemSize", e) &&
        this.updateVirtualScrollerPosition();
    },
  },
  mounted() {
    this.frozenRow && this.updateFrozenRowStickyPosition(),
      this.scrollable &&
        this.rowGroupMode === "subheader" &&
        this.updateFrozenRowGroupHeaderStickyPosition(),
      !this.isVirtualScrollerDisabled &&
        this.getVirtualScrollerProp("vertical") &&
        this.updateVirtualScrollerPosition();
  },
  updated() {
    this.frozenRow && this.updateFrozenRowStickyPosition(),
      this.scrollable &&
        this.rowGroupMode === "subheader" &&
        this.updateFrozenRowGroupHeaderStickyPosition();
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    shouldRenderRowGroupHeader(e, t, l) {
      let o = y.resolveFieldData(t, this.groupRowsBy),
        n = e[l - 1];
      if (n) {
        let i = y.resolveFieldData(n, this.groupRowsBy);
        return o !== i;
      } else return !0;
    },
    getRowKey(e, t) {
      return this.dataKey ? y.resolveFieldData(e, this.dataKey) : t;
    },
    getRowIndex(e) {
      const t = this.getVirtualScrollerProp("getItemOptions");
      return t ? t(e).index : e;
    },
    getRowClass(e) {
      let t = [];
      if (
        (this.selectionMode && t.push("p-selectable-row"),
        this.selection && t.push({ "p-highlight": this.isSelected(e) }),
        this.contextMenuSelection &&
          t.push({
            "p-highlight-contextmenu": this.isSelectedWithContextMenu(e),
          }),
        this.rowClass)
      ) {
        let l = this.rowClass(e);
        l && t.push(l);
      }
      return t;
    },
    shouldRenderRowGroupFooter(e, t, l) {
      if (this.expandableRowGroups && !this.isRowGroupExpanded(t)) return !1;
      {
        let o = y.resolveFieldData(t, this.groupRowsBy),
          n = e[l + 1];
        if (n) {
          let i = y.resolveFieldData(n, this.groupRowsBy);
          return o !== i;
        } else return !0;
      }
    },
    shouldRenderBodyCell(e, t, l) {
      if (this.rowGroupMode) {
        if (this.rowGroupMode === "subheader")
          return this.groupRowsBy !== this.columnProp(t, "field");
        if (this.rowGroupMode === "rowspan")
          if (this.isGrouped(t)) {
            let o = e[l - 1];
            if (o) {
              let n = y.resolveFieldData(e[l], this.columnProp(t, "field")),
                i = y.resolveFieldData(o, this.columnProp(t, "field"));
              return n !== i;
            } else return !0;
          } else return !0;
      } else return !this.columnProp(t, "hidden");
    },
    calculateRowGroupSize(e, t, l) {
      if (this.isGrouped(t)) {
        let o = y.resolveFieldData(e[l], this.columnProp(t, "field")),
          n = o,
          i = 0;
        for (; o === n; ) {
          i++;
          let r = e[++l];
          if (r) n = y.resolveFieldData(r, this.columnProp(t, "field"));
          else break;
        }
        return i === 1 ? null : i;
      } else return null;
    },
    rowTogglerIcon(e) {
      const t = this.isRowExpanded(e)
        ? this.expandedRowIcon
        : this.collapsedRowIcon;
      return ["p-row-toggler-icon pi", t];
    },
    rowGroupTogglerIcon(e) {
      const t = this.isRowGroupExpanded(e)
        ? this.expandedRowIcon
        : this.collapsedRowIcon;
      return ["p-row-toggler-icon pi", t];
    },
    isGrouped(e) {
      return this.groupRowsBy && this.columnProp(e, "field")
        ? Array.isArray(this.groupRowsBy)
          ? this.groupRowsBy.indexOf(e.props.field) > -1
          : this.groupRowsBy === e.props.field
        : !1;
    },
    isRowEditing(e) {
      return e && this.editingRows
        ? this.dataKey
          ? this.editingRowKeys
            ? this.editingRowKeys[y.resolveFieldData(e, this.dataKey)] !==
              void 0
            : !1
          : this.findIndex(e, this.editingRows) > -1
        : !1;
    },
    isRowExpanded(e) {
      return e && this.expandedRows
        ? this.dataKey
          ? this.expandedRowKeys
            ? this.expandedRowKeys[y.resolveFieldData(e, this.dataKey)] !==
              void 0
            : !1
          : this.findIndex(e, this.expandedRows) > -1
        : !1;
    },
    isRowGroupExpanded(e) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let t = y.resolveFieldData(e, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(t) > -1;
      }
      return !1;
    },
    isSelected(e) {
      return e && this.selection
        ? this.dataKey
          ? this.selectionKeys
            ? this.selectionKeys[y.resolveFieldData(e, this.dataKey)] !== void 0
            : !1
          : this.selection instanceof Array
          ? this.findIndexInSelection(e) > -1
          : this.equals(e, this.selection)
        : !1;
    },
    isSelectedWithContextMenu(e) {
      return e && this.contextMenuSelection
        ? this.equals(e, this.contextMenuSelection, this.dataKey)
        : !1;
    },
    findIndexInSelection(e) {
      return this.findIndex(e, this.selection);
    },
    findIndex(e, t) {
      let l = -1;
      if (t && t.length) {
        for (let o = 0; o < t.length; o++)
          if (this.equals(e, t[o])) {
            l = o;
            break;
          }
      }
      return l;
    },
    equals(e, t) {
      return this.compareSelectionBy === "equals"
        ? e === t
        : y.equals(e, t, this.dataKey);
    },
    onRowGroupToggle(e, t) {
      this.$emit("rowgroup-toggle", { originalEvent: e, data: t });
    },
    onRowClick(e, t, l) {
      this.$emit("row-click", { originalEvent: e, data: t, index: l });
    },
    onRowDblClick(e, t, l) {
      this.$emit("row-dblclick", { originalEvent: e, data: t, index: l });
    },
    onRowRightClick(e, t, l) {
      this.$emit("row-rightclick", { originalEvent: e, data: t, index: l });
    },
    onRowTouchEnd(e) {
      this.$emit("row-touchend", e);
    },
    onRowKeyDown(e, t, l) {
      this.$emit("row-keydown", { originalEvent: e, data: t, index: l });
    },
    onRowMouseDown(e) {
      this.$emit("row-mousedown", e);
    },
    onRowDragStart(e, t) {
      this.$emit("row-dragstart", { originalEvent: e, index: t });
    },
    onRowDragOver(e, t) {
      this.$emit("row-dragover", { originalEvent: e, index: t });
    },
    onRowDragLeave(e) {
      this.$emit("row-dragleave", e);
    },
    onRowDragEnd(e) {
      this.$emit("row-dragend", e);
    },
    onRowDrop(e) {
      this.$emit("row-drop", e);
    },
    onRowToggle(e) {
      this.$emit("row-toggle", e);
    },
    onRadioChange(e) {
      this.$emit("radio-change", e);
    },
    onCheckboxChange(e) {
      this.$emit("checkbox-change", e);
    },
    onCellEditInit(e) {
      this.$emit("cell-edit-init", e);
    },
    onCellEditComplete(e) {
      this.$emit("cell-edit-complete", e);
    },
    onCellEditCancel(e) {
      this.$emit("cell-edit-cancel", e);
    },
    onRowEditInit(e) {
      this.$emit("row-edit-init", e);
    },
    onRowEditSave(e) {
      this.$emit("row-edit-save", e);
    },
    onRowEditCancel(e) {
      this.$emit("row-edit-cancel", e);
    },
    onEditingMetaChange(e) {
      this.$emit("editing-meta-change", e);
    },
    updateFrozenRowStickyPosition() {
      this.$el.style.top =
        f.getOuterHeight(this.$el.previousElementSibling) + "px";
    },
    updateFrozenRowGroupHeaderStickyPosition() {
      let e = f.getOuterHeight(this.$el.previousElementSibling);
      this.rowGroupHeaderStyleObject.top = e + "px";
    },
    updateVirtualScrollerPosition() {
      const e = f.getOuterHeight(this.$el.previousElementSibling);
      this.$el.style.top = (this.$el.style.top || 0) + e + "px";
    },
    getVirtualScrollerProp(e, t) {
      return (t = t || this.virtualScrollerContentProps), t ? t[e] : null;
    },
    bodyRef(e) {
      const t = this.getVirtualScrollerProp("contentRef");
      t && t(e);
    },
    setRowTabindex(e) {
      return this.selection === null &&
        (this.selectionMode === "single" ||
          this.selectionMode === "multiple") &&
        e === 0
        ? 0
        : -1;
    },
  },
  computed: {
    columnsLength() {
      let e = 0;
      return (
        this.columns.forEach(t => {
          this.columnProp(t, "hidden") && e++;
        }),
        this.columns ? this.columns.length - e : 0
      );
    },
    rowGroupHeaderStyle() {
      return this.scrollable
        ? { top: this.rowGroupHeaderStyleObject.top }
        : null;
    },
    bodyStyle() {
      return this.getVirtualScrollerProp("contentStyle");
    },
    expandedRowId() {
      return A();
    },
    nameAttributeSelector() {
      return A();
    },
  },
  components: { DTBodyCell: de },
};
const gt = ["colspan"],
  yt = ["onClick"],
  wt = [
    "tabindex",
    "aria-selected",
    "onClick",
    "onDblclick",
    "onContextmenu",
    "onKeydown",
    "onDragstart",
    "onDragover",
  ],
  bt = ["id"],
  Rt = ["colspan"],
  Ct = { key: 1, class: "p-datatable-emptymessage", role: "row" },
  vt = ["colspan"];
function St(e, t, l, o, n, i) {
  const r = C("DTBodyCell");
  return (
    a(),
    p(
      "tbody",
      {
        ref: i.bodyRef,
        class: "p-datatable-tbody",
        role: "rowgroup",
        style: F(i.bodyStyle),
      },
      [
        l.empty
          ? (a(),
            p("tr", Ct, [
              b(
                "td",
                { colspan: i.columnsLength },
                [
                  l.templates.empty
                    ? (a(), w(x(l.templates.empty), { key: 0 }))
                    : g("", !0),
                ],
                8,
                vt,
              ),
            ]))
          : (a(!0),
            p(
              v,
              { key: 0 },
              P(
                l.value,
                (c, h) => (
                  a(),
                  p(
                    v,
                    { key: i.getRowKey(c, i.getRowIndex(h)) + "_subheader" },
                    [
                      l.templates.groupheader &&
                      l.rowGroupMode === "subheader" &&
                      i.shouldRenderRowGroupHeader(l.value, c, i.getRowIndex(h))
                        ? (a(),
                          p(
                            "tr",
                            {
                              key: 0,
                              class: "p-rowgroup-header",
                              style: F(i.rowGroupHeaderStyle),
                              role: "row",
                            },
                            [
                              b(
                                "td",
                                { colspan: i.columnsLength - 1 },
                                [
                                  l.expandableRowGroups
                                    ? (a(),
                                      p(
                                        "button",
                                        {
                                          key: 0,
                                          class: "p-row-toggler p-link",
                                          onClick: s =>
                                            i.onRowGroupToggle(s, c),
                                          type: "button",
                                        },
                                        [
                                          b(
                                            "span",
                                            {
                                              class: R(
                                                i.rowGroupTogglerIcon(c),
                                              ),
                                            },
                                            null,
                                            2,
                                          ),
                                        ],
                                        8,
                                        yt,
                                      ))
                                    : g("", !0),
                                  (a(),
                                  w(
                                    x(l.templates.groupheader),
                                    { data: c, index: i.getRowIndex(h) },
                                    null,
                                    8,
                                    ["data", "index"],
                                  )),
                                ],
                                8,
                                gt,
                              ),
                            ],
                            4,
                          ))
                        : g("", !0),
                      !l.expandableRowGroups || i.isRowGroupExpanded(c)
                        ? (a(),
                          p(
                            "tr",
                            {
                              key: i.getRowKey(c, i.getRowIndex(h)),
                              class: R(i.getRowClass(c)),
                              style: F(l.rowStyle),
                              tabindex: i.setRowTabindex(h),
                              role: "row",
                              "aria-selected": l.selectionMode
                                ? i.isSelected(c)
                                : null,
                              onClick: s =>
                                i.onRowClick(s, c, i.getRowIndex(h)),
                              onDblclick: s =>
                                i.onRowDblClick(s, c, i.getRowIndex(h)),
                              onContextmenu: s =>
                                i.onRowRightClick(s, c, i.getRowIndex(h)),
                              onTouchend:
                                t[9] || (t[9] = s => i.onRowTouchEnd(s)),
                              onKeydown: s =>
                                i.onRowKeyDown(s, c, i.getRowIndex(h)),
                              onMousedown:
                                t[10] || (t[10] = s => i.onRowMouseDown(s)),
                              onDragstart: s =>
                                i.onRowDragStart(s, i.getRowIndex(h)),
                              onDragover: s =>
                                i.onRowDragOver(s, i.getRowIndex(h)),
                              onDragleave:
                                t[11] || (t[11] = s => i.onRowDragLeave(s)),
                              onDragend:
                                t[12] || (t[12] = s => i.onRowDragEnd(s)),
                              onDrop: t[13] || (t[13] = s => i.onRowDrop(s)),
                            },
                            [
                              (a(!0),
                              p(
                                v,
                                null,
                                P(
                                  l.columns,
                                  (s, m) => (
                                    a(),
                                    p(
                                      v,
                                      {
                                        key:
                                          i.columnProp(s, "columnKey") ||
                                          i.columnProp(s, "field") ||
                                          m,
                                      },
                                      [
                                        i.shouldRenderBodyCell(
                                          l.value,
                                          s,
                                          i.getRowIndex(h),
                                        )
                                          ? (a(),
                                            w(
                                              r,
                                              {
                                                key: 0,
                                                rowData: c,
                                                column: s,
                                                rowIndex: i.getRowIndex(h),
                                                index: m,
                                                selected: i.isSelected(c),
                                                rowTogglerIcon: i.columnProp(
                                                  s,
                                                  "expander",
                                                )
                                                  ? i.rowTogglerIcon(c)
                                                  : null,
                                                frozenRow: l.frozenRow,
                                                rowspan:
                                                  l.rowGroupMode === "rowspan"
                                                    ? i.calculateRowGroupSize(
                                                        l.value,
                                                        s,
                                                        i.getRowIndex(h),
                                                      )
                                                    : null,
                                                editMode: l.editMode,
                                                editing:
                                                  l.editMode === "row" &&
                                                  i.isRowEditing(c),
                                                editingMeta: l.editingMeta,
                                                responsiveLayout:
                                                  l.responsiveLayout,
                                                virtualScrollerContentProps:
                                                  l.virtualScrollerContentProps,
                                                ariaControls:
                                                  i.expandedRowId +
                                                  "_" +
                                                  h +
                                                  "_expansion",
                                                name: i.nameAttributeSelector,
                                                onRadioChange:
                                                  t[0] ||
                                                  (t[0] = u =>
                                                    i.onRadioChange(u)),
                                                onCheckboxChange:
                                                  t[1] ||
                                                  (t[1] = u =>
                                                    i.onCheckboxChange(u)),
                                                onRowToggle:
                                                  t[2] ||
                                                  (t[2] = u =>
                                                    i.onRowToggle(u)),
                                                onCellEditInit:
                                                  t[3] ||
                                                  (t[3] = u =>
                                                    i.onCellEditInit(u)),
                                                onCellEditComplete:
                                                  t[4] ||
                                                  (t[4] = u =>
                                                    i.onCellEditComplete(u)),
                                                onCellEditCancel:
                                                  t[5] ||
                                                  (t[5] = u =>
                                                    i.onCellEditCancel(u)),
                                                onRowEditInit:
                                                  t[6] ||
                                                  (t[6] = u =>
                                                    i.onRowEditInit(u)),
                                                onRowEditSave:
                                                  t[7] ||
                                                  (t[7] = u =>
                                                    i.onRowEditSave(u)),
                                                onRowEditCancel:
                                                  t[8] ||
                                                  (t[8] = u =>
                                                    i.onRowEditCancel(u)),
                                                onEditingMetaChange:
                                                  i.onEditingMetaChange,
                                              },
                                              null,
                                              8,
                                              [
                                                "rowData",
                                                "column",
                                                "rowIndex",
                                                "index",
                                                "selected",
                                                "rowTogglerIcon",
                                                "frozenRow",
                                                "rowspan",
                                                "editMode",
                                                "editing",
                                                "editingMeta",
                                                "responsiveLayout",
                                                "virtualScrollerContentProps",
                                                "ariaControls",
                                                "name",
                                                "onEditingMetaChange",
                                              ],
                                            ))
                                          : g("", !0),
                                      ],
                                      64,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ],
                            46,
                            wt,
                          ))
                        : g("", !0),
                      l.templates.expansion &&
                      l.expandedRows &&
                      i.isRowExpanded(c)
                        ? (a(),
                          p(
                            "tr",
                            {
                              key:
                                i.getRowKey(c, i.getRowIndex(h)) + "_expansion",
                              id: i.expandedRowId + "_" + h + "_expansion",
                              class: "p-datatable-row-expansion",
                              role: "row",
                            },
                            [
                              b(
                                "td",
                                { colspan: i.columnsLength },
                                [
                                  (a(),
                                  w(
                                    x(l.templates.expansion),
                                    { data: c, index: i.getRowIndex(h) },
                                    null,
                                    8,
                                    ["data", "index"],
                                  )),
                                ],
                                8,
                                Rt,
                              ),
                            ],
                            8,
                            bt,
                          ))
                        : g("", !0),
                      l.templates.groupfooter &&
                      l.rowGroupMode === "subheader" &&
                      i.shouldRenderRowGroupFooter(l.value, c, i.getRowIndex(h))
                        ? (a(),
                          p(
                            "tr",
                            {
                              key:
                                i.getRowKey(c, i.getRowIndex(h)) + "_subfooter",
                              class: "p-rowgroup-footer",
                              role: "row",
                            },
                            [
                              (a(),
                              w(
                                x(l.templates.groupfooter),
                                { data: c, index: i.getRowIndex(h) },
                                null,
                                8,
                                ["data", "index"],
                              )),
                            ],
                          ))
                        : g("", !0),
                    ],
                    64,
                  )
                ),
              ),
              128,
            )),
      ],
      4,
    )
  );
}
ue.render = St;
var ce = {
  name: "FooterCell",
  props: { column: { type: null, default: null } },
  data() {
    return { styleObject: {} };
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    updateStickyPosition() {
      if (this.columnProp("frozen"))
        if (this.columnProp("alignFrozen") === "right") {
          let t = 0,
            l = this.$el.nextElementSibling;
          l && (t = f.getOuterWidth(l) + parseFloat(l.style.left)),
            (this.styleObject.right = t + "px");
        } else {
          let t = 0,
            l = this.$el.previousElementSibling;
          l && (t = f.getOuterWidth(l) + parseFloat(l.style.left)),
            (this.styleObject.left = t + "px");
        }
    },
  },
  computed: {
    containerClass() {
      return [
        this.columnProp("footerClass"),
        this.columnProp("class"),
        { "p-frozen-column": this.columnProp("frozen") },
      ];
    },
    containerStyle() {
      let e = this.columnProp("footerStyle"),
        t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
  },
};
const xt = ["colspan", "rowspan"];
function kt(e, t, l, o, n, i) {
  return (
    a(),
    p(
      "td",
      {
        style: F(i.containerStyle),
        class: R(i.containerClass),
        role: "cell",
        colspan: i.columnProp("colspan"),
        rowspan: i.columnProp("rowspan"),
      },
      [
        l.column.children && l.column.children.footer
          ? (a(),
            w(
              x(l.column.children.footer),
              { key: 0, column: l.column },
              null,
              8,
              ["column"],
            ))
          : g("", !0),
        V(" " + I(i.columnProp("footer")), 1),
      ],
      14,
      xt,
    )
  );
}
ce.render = kt;
var he = {
  name: "TableFooter",
  props: {
    columnGroup: { type: null, default: null },
    columns: { type: null, default: null },
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    getFooterRows() {
      let e = [],
        t = this.columnGroup;
      if (t.children && t.children.default) {
        for (let l of t.children.default())
          l.type.name === "Row"
            ? e.push(l)
            : l.children && l.children instanceof Array && (e = l.children);
        return e;
      }
    },
    getFooterColumns(e) {
      let t = [];
      if (e.children && e.children.default)
        return (
          e.children.default().forEach(l => {
            l.children && l.children instanceof Array
              ? (t = [...t, ...l.children])
              : l.type.name === "Column" && t.push(l);
          }),
          t
        );
    },
  },
  computed: {
    hasFooter() {
      let e = !1;
      if (this.columnGroup) e = !0;
      else if (this.columns) {
        for (let t of this.columns)
          if (
            this.columnProp(t, "footer") ||
            (t.children && t.children.footer)
          ) {
            e = !0;
            break;
          }
      }
      return e;
    },
  },
  components: { DTFooterCell: ce },
};
const Pt = { key: 0, class: "p-datatable-tfoot", role: "rowgroup" },
  Mt = { key: 0, role: "row" };
function Et(e, t, l, o, n, i) {
  const r = C("DTFooterCell");
  return i.hasFooter
    ? (a(),
      p("tfoot", Pt, [
        l.columnGroup
          ? (a(!0),
            p(
              v,
              { key: 1 },
              P(
                i.getFooterRows(),
                (c, h) => (
                  a(),
                  p("tr", { key: h, role: "row" }, [
                    (a(!0),
                    p(
                      v,
                      null,
                      P(
                        i.getFooterColumns(c),
                        (s, m) => (
                          a(),
                          p(
                            v,
                            {
                              key:
                                i.columnProp(s, "columnKey") ||
                                i.columnProp(s, "field") ||
                                m,
                            },
                            [
                              i.columnProp(s, "hidden")
                                ? g("", !0)
                                : (a(),
                                  w(r, { key: 0, column: s }, null, 8, [
                                    "column",
                                  ])),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ])
                ),
              ),
              128,
            ))
          : (a(),
            p("tr", Mt, [
              (a(!0),
              p(
                v,
                null,
                P(
                  l.columns,
                  (c, h) => (
                    a(),
                    p(
                      v,
                      {
                        key:
                          i.columnProp(c, "columnKey") ||
                          i.columnProp(c, "field") ||
                          h,
                      },
                      [
                        i.columnProp(c, "hidden")
                          ? g("", !0)
                          : (a(),
                            w(r, { key: 0, column: c }, null, 8, ["column"])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ])),
      ]))
    : g("", !0);
}
he.render = Et;
var W = {
  name: "ColumnFilter",
  emits: [
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click",
  ],
  props: {
    field: { type: String, default: null },
    type: { type: String, default: "text" },
    display: { type: String, default: null },
    showMenu: { type: Boolean, default: !0 },
    matchMode: { type: String, default: null },
    showOperator: { type: Boolean, default: !0 },
    showClearButton: { type: Boolean, default: !0 },
    showApplyButton: { type: Boolean, default: !0 },
    showMatchModes: { type: Boolean, default: !0 },
    showAddButton: { type: Boolean, default: !0 },
    matchModeOptions: { type: Array, default: null },
    maxConstraints: { type: Number, default: 2 },
    filterElement: null,
    filterHeaderTemplate: null,
    filterFooterTemplate: null,
    filterClearTemplate: null,
    filterApplyTemplate: null,
    filters: { type: Object, default: null },
    filtersStore: { type: Object, default: null },
    filterMenuClass: { type: String, default: null },
    filterMenuStyle: { type: null, default: null },
    filterInputProps: { type: null, default: null },
  },
  data() {
    return {
      overlayVisible: !1,
      defaultMatchMode: null,
      defaultOperator: null,
    };
  },
  overlay: null,
  selfClick: !1,
  overlayEventListener: null,
  beforeUnmount() {
    this.overlayEventListener &&
      (z.off("overlay-click", this.overlayEventListener),
      (this.overlayEventListener = null)),
      this.overlay && (G.clear(this.overlay), this.onOverlayHide());
  },
  mounted() {
    if (this.filters && this.filters[this.field]) {
      let e = this.filters[this.field];
      e.operator
        ? ((this.defaultMatchMode = e.constraints[0].matchMode),
          (this.defaultOperator = e.operator))
        : (this.defaultMatchMode = this.filters[this.field].matchMode);
    }
  },
  methods: {
    clearFilter() {
      let e = { ...this.filters };
      e[this.field].operator
        ? (e[this.field].constraints.splice(1),
          (e[this.field].operator = this.defaultOperator),
          (e[this.field].constraints[0] = {
            value: null,
            matchMode: this.defaultMatchMode,
          }))
        : ((e[this.field].value = null),
          (e[this.field].matchMode = this.defaultMatchMode)),
        this.$emit("filter-clear"),
        this.$emit("filter-change", e),
        this.$emit("filter-apply"),
        this.hide();
    },
    applyFilter() {
      this.$emit("apply-click", {
        field: this.field,
        constraints: this.filters[this.field],
      }),
        this.$emit("filter-apply"),
        this.hide();
    },
    hasFilter() {
      if (this.filtersStore) {
        let e = this.filtersStore[this.field];
        if (e)
          return e.operator
            ? !this.isFilterBlank(e.constraints[0].value)
            : !this.isFilterBlank(e.value);
      }
      return !1;
    },
    hasRowFilter() {
      return (
        this.filters[this.field] &&
        !this.isFilterBlank(this.filters[this.field].value)
      );
    },
    isFilterBlank(e) {
      return e != null
        ? (typeof e == "string" && e.trim().length == 0) ||
            (e instanceof Array && e.length == 0)
        : !0;
    },
    toggleMenu() {
      this.overlayVisible = !this.overlayVisible;
    },
    onToggleButtonKeyDown(e) {
      switch (e.code) {
        case "Enter":
        case "Space":
          this.toggleMenu(), e.preventDefault();
          break;
        case "Escape":
          this.overlayVisible = !1;
          break;
      }
    },
    onRowMatchModeChange(e) {
      let t = { ...this.filters };
      (t[this.field].matchMode = e),
        this.$emit("matchmode-change", { field: this.field, matchMode: e }),
        this.$emit("filter-change", t),
        this.$emit("filter-apply"),
        this.hide();
    },
    onRowMatchModeKeyDown(e) {
      let t = e.target;
      switch (e.code) {
        case "ArrowDown":
          var l = this.findNextItem(t);
          l && (t.removeAttribute("tabindex"), (l.tabIndex = "0"), l.focus()),
            e.preventDefault();
          break;
        case "ArrowUp":
          var o = this.findPrevItem(t);
          o && (t.removeAttribute("tabindex"), (o.tabIndex = "0"), o.focus()),
            e.preventDefault();
          break;
      }
    },
    isRowMatchModeSelected(e) {
      return this.filters[this.field].matchMode === e;
    },
    onOperatorChange(e) {
      let t = { ...this.filters };
      (t[this.field].operator = e),
        this.$emit("filter-change", t),
        this.$emit("operator-change", { field: this.field, operator: e }),
        this.showApplyButton || this.$emit("filter-apply");
    },
    onMenuMatchModeChange(e, t) {
      let l = { ...this.filters };
      (l[this.field].constraints[t].matchMode = e),
        this.$emit("matchmode-change", {
          field: this.field,
          matchMode: e,
          index: t,
        }),
        this.showApplyButton || this.$emit("filter-apply");
    },
    addConstraint() {
      let e = { ...this.filters },
        t = { value: null, matchMode: this.defaultMatchMode };
      e[this.field].constraints.push(t),
        this.$emit("constraint-add", { field: this.field, constraing: t }),
        this.$emit("filter-change", e),
        this.showApplyButton || this.$emit("filter-apply");
    },
    removeConstraint(e) {
      let t = { ...this.filters },
        l = t[this.field].constraints.splice(e, 1);
      this.$emit("constraint-remove", { field: this.field, constraing: l }),
        this.$emit("filter-change", t),
        this.showApplyButton || this.$emit("filter-apply");
    },
    filterCallback() {
      this.$emit("filter-apply");
    },
    findNextItem(e) {
      let t = e.nextElementSibling;
      return t
        ? f.hasClass(t, "p-column-filter-separator")
          ? this.findNextItem(t)
          : t
        : e.parentElement.firstElementChild;
    },
    findPrevItem(e) {
      let t = e.previousElementSibling;
      return t
        ? f.hasClass(t, "p-column-filter-separator")
          ? this.findPrevItem(t)
          : t
        : e.parentElement.lastElementChild;
    },
    hide() {
      (this.overlayVisible = !1), f.focus(this.$refs.icon);
    },
    onContentClick(e) {
      (this.selfClick = !0),
        z.emit("overlay-click", { originalEvent: e, target: this.overlay });
    },
    onContentMouseDown() {
      this.selfClick = !0;
    },
    onOverlayEnter(e) {
      this.filterMenuStyle && f.applyStyle(this.overlay, this.filterMenuStyle),
        G.set("overlay", e, this.$primevue.config.zIndex.overlay),
        f.absolutePosition(this.overlay, this.$refs.icon),
        this.bindOutsideClickListener(),
        this.bindScrollListener(),
        this.bindResizeListener(),
        (this.overlayEventListener = t => {
          this.isOutsideClicked(t.target) || (this.selfClick = !0);
        }),
        z.on("overlay-click", this.overlayEventListener);
    },
    onOverlayLeave() {
      this.onOverlayHide();
    },
    onOverlayAfterLeave(e) {
      G.clear(e);
    },
    onOverlayHide() {
      this.unbindOutsideClickListener(),
        this.unbindResizeListener(),
        this.unbindScrollListener(),
        (this.overlay = null),
        z.off("overlay-click", this.overlayEventListener),
        (this.overlayEventListener = null);
    },
    overlayRef(e) {
      this.overlay = e;
    },
    isOutsideClicked(e) {
      return (
        !this.isTargetClicked(e) &&
        this.overlay &&
        !(this.overlay.isSameNode(e) || this.overlay.contains(e))
      );
    },
    isTargetClicked(e) {
      return (
        this.$refs.icon &&
        (this.$refs.icon.isSameNode(e) || this.$refs.icon.contains(e))
      );
    },
    bindOutsideClickListener() {
      this.outsideClickListener ||
        ((this.outsideClickListener = e => {
          this.overlayVisible &&
            !this.selfClick &&
            this.isOutsideClicked(e.target) &&
            (this.overlayVisible = !1),
            (this.selfClick = !1);
        }),
        document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener &&
        (document.removeEventListener("click", this.outsideClickListener),
        (this.outsideClickListener = null),
        (this.selfClick = !1));
    },
    bindScrollListener() {
      this.scrollHandler ||
        (this.scrollHandler = new ye(this.$refs.icon, () => {
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
          this.overlayVisible && !f.isTouchDevice() && this.hide();
        }),
        window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener &&
        (window.removeEventListener("resize", this.resizeListener),
        (this.resizeListener = null));
    },
  },
  computed: {
    containerClass() {
      return [
        "p-column-filter p-fluid",
        {
          "p-column-filter-row": this.display === "row",
          "p-column-filter-menu": this.display === "menu",
        },
      ];
    },
    overlayClass() {
      return [
        this.filterMenuClass,
        {
          "p-column-filter-overlay p-component p-fluid": !0,
          "p-column-filter-overlay-menu": this.display === "menu",
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1,
        },
      ];
    },
    showMenuButton() {
      return (
        this.showMenu && (this.display === "row" ? this.type !== "boolean" : !0)
      );
    },
    overlayId() {
      return A();
    },
    matchModes() {
      return (
        this.matchModeOptions ||
        this.$primevue.config.filterMatchModeOptions[this.type].map(e => ({
          label: this.$primevue.config.locale[e],
          value: e,
        }))
      );
    },
    isShowMatchModes() {
      return this.type !== "boolean" && this.showMatchModes && this.matchModes;
    },
    operatorOptions() {
      return [
        { label: this.$primevue.config.locale.matchAll, value: H.AND },
        { label: this.$primevue.config.locale.matchAny, value: H.OR },
      ];
    },
    noFilterLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.noFilter
        : void 0;
    },
    isShowOperator() {
      return this.showOperator && this.filters[this.field].operator;
    },
    operator() {
      return this.filters[this.field].operator;
    },
    fieldConstraints() {
      return this.filters[this.field].constraints || [this.filters[this.field]];
    },
    showRemoveIcon() {
      return this.fieldConstraints.length > 1;
    },
    removeRuleButtonLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.removeRule
        : void 0;
    },
    addRuleButtonLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.addRule
        : void 0;
    },
    isShowAddConstraint() {
      return (
        this.showAddButton &&
        this.filters[this.field].operator &&
        this.fieldConstraints &&
        this.fieldConstraints.length < this.maxConstraints
      );
    },
    clearButtonLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.clear
        : void 0;
    },
    applyButtonLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.apply
        : void 0;
    },
    filterMenuButtonAriaLabel() {
      return this.$primevue.config.locale
        ? this.overlayVisible
          ? this.$primevue.config.locale.showFilterMenu
          : this.$primevue.config.locale.hideFilterMenu
        : void 0;
    },
    filterOperatorAriaLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.filterOperator
        : void 0;
    },
    filterConstraintAriaLabel() {
      return this.$primevue.config.locale
        ? this.$primevue.config.locale.filterConstraint
        : void 0;
    },
  },
  components: { CFDropdown: j, CFButton: we, Portal: be },
  directives: { focustrap: Re },
};
const Dt = ["aria-label", "aria-expanded", "aria-controls"],
  Ft = b("span", { class: "pi pi-filter-icon pi-filter" }, null, -1),
  It = [Ft],
  Lt = b("span", { class: "pi pi-filter-slash" }, null, -1),
  Tt = [Lt],
  zt = ["id", "aria-modal"],
  Ot = { key: 0, class: "p-column-filter-row-items" },
  Bt = ["onClick", "onKeydown", "tabindex"],
  Kt = b("li", { class: "p-column-filter-separator" }, null, -1),
  At = { key: 0, class: "p-column-filter-operator" },
  Ht = { class: "p-column-filter-constraints" },
  Gt = { key: 1, class: "p-column-filter-add-rule" },
  _t = { class: "p-column-filter-buttonbar" };
function Vt(e, t, l, o, n, i) {
  const r = C("CFDropdown"),
    c = C("CFButton"),
    h = C("Portal"),
    s = O("focustrap");
  return (
    a(),
    p(
      "div",
      { class: R(i.containerClass) },
      [
        l.display === "row"
          ? (a(),
            p(
              "div",
              _(
                { key: 0, class: "p-fluid p-column-filter-element" },
                l.filterInputProps,
              ),
              [
                (a(),
                w(
                  x(l.filterElement),
                  {
                    field: l.field,
                    filterModel: l.filters[l.field],
                    filterCallback: i.filterCallback,
                  },
                  null,
                  8,
                  ["field", "filterModel", "filterCallback"],
                )),
              ],
              16,
            ))
          : g("", !0),
        i.showMenuButton
          ? (a(),
            p(
              "button",
              {
                key: 1,
                ref: "icon",
                type: "button",
                class: R([
                  "p-column-filter-menu-button p-link",
                  {
                    "p-column-filter-menu-button-open": n.overlayVisible,
                    "p-column-filter-menu-button-active": i.hasFilter(),
                  },
                ]),
                "aria-label": i.filterMenuButtonAriaLabel,
                "aria-haspopup": "true",
                "aria-expanded": n.overlayVisible,
                "aria-controls": i.overlayId,
                onClick: t[0] || (t[0] = m => i.toggleMenu()),
                onKeydown: t[1] || (t[1] = m => i.onToggleButtonKeyDown(m)),
              },
              It,
              42,
              Dt,
            ))
          : g("", !0),
        l.showClearButton && l.display === "row"
          ? (a(),
            p(
              "button",
              {
                key: 2,
                class: R([
                  { "p-hidden-space": !i.hasRowFilter() },
                  "p-column-filter-clear-button p-link",
                ]),
                type: "button",
                onClick: t[2] || (t[2] = m => i.clearFilter()),
              },
              Tt,
              2,
            ))
          : g("", !0),
        L(h, null, {
          default: T(() => [
            L(
              Ce,
              {
                name: "p-connected-overlay",
                onEnter: i.onOverlayEnter,
                onLeave: i.onOverlayLeave,
                onAfterLeave: i.onOverlayAfterLeave,
              },
              {
                default: T(() => [
                  n.overlayVisible
                    ? D(
                        (a(),
                        p(
                          "div",
                          {
                            key: 0,
                            ref: i.overlayRef,
                            id: i.overlayId,
                            "aria-modal": n.overlayVisible,
                            role: "dialog",
                            class: R(i.overlayClass),
                            onKeydown:
                              t[10] ||
                              (t[10] = K(
                                (...m) => i.hide && i.hide(...m),
                                ["escape"],
                              )),
                            onClick:
                              t[11] ||
                              (t[11] = (...m) =>
                                i.onContentClick && i.onContentClick(...m)),
                            onMousedown:
                              t[12] ||
                              (t[12] = (...m) =>
                                i.onContentMouseDown &&
                                i.onContentMouseDown(...m)),
                          },
                          [
                            (a(),
                            w(
                              x(l.filterHeaderTemplate),
                              {
                                field: l.field,
                                filterModel: l.filters[l.field],
                                filterCallback: i.filterCallback,
                              },
                              null,
                              8,
                              ["field", "filterModel", "filterCallback"],
                            )),
                            l.display === "row"
                              ? (a(),
                                p("ul", Ot, [
                                  (a(!0),
                                  p(
                                    v,
                                    null,
                                    P(
                                      i.matchModes,
                                      (m, u) => (
                                        a(),
                                        p(
                                          "li",
                                          {
                                            key: m.label,
                                            class: R([
                                              "p-column-filter-row-item",
                                              {
                                                "p-highlight":
                                                  i.isRowMatchModeSelected(
                                                    m.value,
                                                  ),
                                              },
                                            ]),
                                            onClick: d =>
                                              i.onRowMatchModeChange(m.value),
                                            onKeydown: [
                                              t[3] ||
                                                (t[3] = d =>
                                                  i.onRowMatchModeKeyDown(d)),
                                              K(
                                                N(
                                                  d =>
                                                    i.onRowMatchModeChange(
                                                      m.value,
                                                    ),
                                                  ["prevent"],
                                                ),
                                                ["enter"],
                                              ),
                                            ],
                                            tabindex: u === 0 ? "0" : null,
                                          },
                                          I(m.label),
                                          43,
                                          Bt,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                  Kt,
                                  b(
                                    "li",
                                    {
                                      class: "p-column-filter-row-item",
                                      onClick:
                                        t[4] || (t[4] = m => i.clearFilter()),
                                      onKeydown: [
                                        t[5] ||
                                          (t[5] = m =>
                                            i.onRowMatchModeKeyDown(m)),
                                        t[6] ||
                                          (t[6] = K(
                                            m => e.onRowClearItemClick(),
                                            ["enter"],
                                          )),
                                      ],
                                    },
                                    I(i.noFilterLabel),
                                    33,
                                  ),
                                ]))
                              : (a(),
                                p(
                                  v,
                                  { key: 1 },
                                  [
                                    i.isShowOperator
                                      ? (a(),
                                        p("div", At, [
                                          L(
                                            r,
                                            {
                                              options: i.operatorOptions,
                                              modelValue: i.operator,
                                              "aria-label":
                                                i.filterOperatorAriaLabel,
                                              class:
                                                "p-column-filter-operator-dropdown",
                                              optionLabel: "label",
                                              optionValue: "value",
                                              "onUpdate:modelValue":
                                                t[7] ||
                                                (t[7] = m =>
                                                  i.onOperatorChange(m)),
                                            },
                                            null,
                                            8,
                                            [
                                              "options",
                                              "modelValue",
                                              "aria-label",
                                            ],
                                          ),
                                        ]))
                                      : g("", !0),
                                    b("div", Ht, [
                                      (a(!0),
                                      p(
                                        v,
                                        null,
                                        P(
                                          i.fieldConstraints,
                                          (m, u) => (
                                            a(),
                                            p(
                                              "div",
                                              {
                                                key: u,
                                                class:
                                                  "p-column-filter-constraint",
                                              },
                                              [
                                                i.isShowMatchModes
                                                  ? (a(),
                                                    w(
                                                      r,
                                                      {
                                                        key: 0,
                                                        options: i.matchModes,
                                                        modelValue: m.matchMode,
                                                        class:
                                                          "p-column-filter-matchmode-dropdown",
                                                        optionLabel: "label",
                                                        optionValue: "value",
                                                        "aria-label":
                                                          i.filterConstraintAriaLabel,
                                                        "onUpdate:modelValue":
                                                          d =>
                                                            i.onMenuMatchModeChange(
                                                              d,
                                                              u,
                                                            ),
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "options",
                                                        "modelValue",
                                                        "aria-label",
                                                        "onUpdate:modelValue",
                                                      ],
                                                    ))
                                                  : g("", !0),
                                                l.display === "menu"
                                                  ? (a(),
                                                    w(
                                                      x(l.filterElement),
                                                      {
                                                        key: 1,
                                                        field: l.field,
                                                        filterModel: m,
                                                        filterCallback:
                                                          i.filterCallback,
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "field",
                                                        "filterModel",
                                                        "filterCallback",
                                                      ],
                                                    ))
                                                  : g("", !0),
                                                b("div", null, [
                                                  i.showRemoveIcon
                                                    ? (a(),
                                                      w(
                                                        c,
                                                        {
                                                          key: 0,
                                                          type: "button",
                                                          icon: "pi pi-trash",
                                                          class:
                                                            "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
                                                          onClick: d =>
                                                            i.removeConstraint(
                                                              u,
                                                            ),
                                                          label:
                                                            i.removeRuleButtonLabel,
                                                        },
                                                        null,
                                                        8,
                                                        ["onClick", "label"],
                                                      ))
                                                    : g("", !0),
                                                ]),
                                              ],
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                    i.isShowAddConstraint
                                      ? (a(),
                                        p("div", Gt, [
                                          L(
                                            c,
                                            {
                                              type: "button",
                                              label: i.addRuleButtonLabel,
                                              icon: "pi pi-plus",
                                              class:
                                                "p-column-filter-add-button p-button-text p-button-sm",
                                              onClick:
                                                t[8] ||
                                                (t[8] = m => i.addConstraint()),
                                            },
                                            null,
                                            8,
                                            ["label"],
                                          ),
                                        ]))
                                      : g("", !0),
                                    b("div", _t, [
                                      !l.filterClearTemplate &&
                                      l.showClearButton
                                        ? (a(),
                                          w(
                                            c,
                                            {
                                              key: 0,
                                              type: "button",
                                              class:
                                                "p-button-outlined p-button-sm",
                                              label: i.clearButtonLabel,
                                              onClick: i.clearFilter,
                                            },
                                            null,
                                            8,
                                            ["label", "onClick"],
                                          ))
                                        : (a(),
                                          w(
                                            x(l.filterClearTemplate),
                                            {
                                              key: 1,
                                              field: l.field,
                                              filterModel: l.filters[l.field],
                                              filterCallback: i.clearFilter,
                                            },
                                            null,
                                            8,
                                            [
                                              "field",
                                              "filterModel",
                                              "filterCallback",
                                            ],
                                          )),
                                      l.showApplyButton
                                        ? (a(),
                                          p(
                                            v,
                                            { key: 2 },
                                            [
                                              l.filterApplyTemplate
                                                ? (a(),
                                                  w(
                                                    x(l.filterApplyTemplate),
                                                    {
                                                      key: 1,
                                                      field: l.field,
                                                      filterModel:
                                                        l.filters[l.field],
                                                      filterCallback:
                                                        i.applyFilter,
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "field",
                                                      "filterModel",
                                                      "filterCallback",
                                                    ],
                                                  ))
                                                : (a(),
                                                  w(
                                                    c,
                                                    {
                                                      key: 0,
                                                      type: "button",
                                                      class: "p-button-sm",
                                                      label: i.applyButtonLabel,
                                                      onClick:
                                                        t[9] ||
                                                        (t[9] = m =>
                                                          i.applyFilter()),
                                                    },
                                                    null,
                                                    8,
                                                    ["label"],
                                                  )),
                                            ],
                                            64,
                                          ))
                                        : g("", !0),
                                    ]),
                                  ],
                                  64,
                                )),
                            (a(),
                            w(
                              x(l.filterFooterTemplate),
                              {
                                field: l.field,
                                filterModel: l.filters[l.field],
                                filterCallback: i.filterCallback,
                              },
                              null,
                              8,
                              ["field", "filterModel", "filterCallback"],
                            )),
                          ],
                          42,
                          zt,
                        )),
                        [[s, { autoFocus: !0 }]],
                      )
                    : g("", !0),
                ]),
                _: 1,
              },
              8,
              ["onEnter", "onLeave", "onAfterLeave"],
            ),
          ]),
          _: 1,
        }),
      ],
      2,
    )
  );
}
W.render = Vt;
var U = {
  name: "HeaderCheckbox",
  emits: ["change"],
  props: { checked: null, disabled: null },
  data() {
    return { focused: !1 };
  },
  methods: {
    onClick(e) {
      this.disabled ||
        (this.$emit("change", { originalEvent: e, checked: !this.checked }),
        f.focus(this.$refs.input));
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    },
  },
  computed: {
    headerCheckboxAriaLabel() {
      return this.$primevue.config.locale.aria
        ? this.checked
          ? this.$primevue.config.locale.aria.selectAll
          : this.$primevue.config.locale.aria.unselectAll
        : void 0;
    },
  },
};
const Nt = { class: "p-hidden-accessible" },
  jt = ["checked", "disabled", "tabindex", "aria-label"];
function Wt(e, t, l, o, n, i) {
  return (
    a(),
    p(
      "div",
      {
        class: R([
          "p-checkbox p-component",
          { "p-checkbox-focused": n.focused, "p-disabled": l.disabled },
        ]),
        onClick: t[2] || (t[2] = (...r) => i.onClick && i.onClick(...r)),
        onKeydown:
          t[3] ||
          (t[3] = K(
            N((...r) => i.onClick && i.onClick(...r), ["prevent"]),
            ["space"],
          )),
      },
      [
        b("div", Nt, [
          b(
            "input",
            {
              ref: "input",
              type: "checkbox",
              checked: l.checked,
              disabled: l.disabled,
              tabindex: l.disabled ? null : "0",
              "aria-label": i.headerCheckboxAriaLabel,
              onFocus: t[0] || (t[0] = r => i.onFocus(r)),
              onBlur: t[1] || (t[1] = r => i.onBlur(r)),
            },
            null,
            40,
            jt,
          ),
        ]),
        b(
          "div",
          {
            ref: "box",
            class: R([
              "p-checkbox-box p-component",
              {
                "p-highlight": l.checked,
                "p-disabled": l.disabled,
                "p-focus": n.focused,
              },
            ]),
          },
          [
            b(
              "span",
              { class: R(["p-checkbox-icon", { "pi pi-check": l.checked }]) },
              null,
              2,
            ),
          ],
          2,
        ),
      ],
      34,
    )
  );
}
U.render = Wt;
var pe = {
  name: "HeaderCell",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click",
  ],
  props: {
    column: { type: Object, default: null },
    resizableColumns: { type: Boolean, default: !1 },
    groupRowsBy: { type: [Array, String, Function], default: null },
    sortMode: { type: String, default: "single" },
    groupRowSortField: { type: [String, Function], default: null },
    sortField: { type: [String, Function], default: null },
    sortOrder: { type: Number, default: null },
    multiSortMeta: { type: Array, default: null },
    allRowsSelected: { type: Boolean, default: !1 },
    empty: { type: Boolean, default: !1 },
    filterDisplay: { type: String, default: null },
    filters: { type: Object, default: null },
    filtersStore: { type: Object, default: null },
    filterColumn: { type: Boolean, default: !1 },
    reorderableColumns: { type: Boolean, default: !1 },
    filterInputProps: { type: null, default: null },
  },
  data() {
    return { styleObject: {} };
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    onClick(e) {
      this.$emit("column-click", { originalEvent: e, column: this.column });
    },
    onKeyDown(e) {
      (e.code === "Enter" || e.code === "Space") &&
        e.currentTarget.nodeName === "TH" &&
        f.hasClass(e.currentTarget, "p-sortable-column") &&
        (this.$emit("column-click", { originalEvent: e, column: this.column }),
        e.preventDefault());
    },
    onMouseDown(e) {
      this.$emit("column-mousedown", { originalEvent: e, column: this.column });
    },
    onDragStart(e) {
      this.$emit("column-dragstart", e);
    },
    onDragOver(e) {
      this.$emit("column-dragover", e);
    },
    onDragLeave(e) {
      this.$emit("column-dragleave", e);
    },
    onDrop(e) {
      this.$emit("column-drop", e);
    },
    onResizeStart(e) {
      this.$emit("column-resizestart", e);
    },
    getMultiSortMetaIndex() {
      return this.multiSortMeta.findIndex(
        e =>
          e.field === this.columnProp("field") ||
          e.field === this.columnProp("sortField"),
      );
    },
    getBadgeValue() {
      let e = this.getMultiSortMetaIndex();
      return this.groupRowsBy &&
        this.groupRowsBy === this.groupRowSortField &&
        e > -1
        ? e
        : e + 1;
    },
    isMultiSorted() {
      return (
        this.sortMode === "multiple" &&
        this.columnProp("sortable") &&
        this.getMultiSortMetaIndex() > -1
      );
    },
    isColumnSorted() {
      return this.sortMode === "single"
        ? this.sortField &&
            (this.sortField === this.columnProp("field") ||
              this.sortField === this.columnProp("sortField"))
        : this.isMultiSorted();
    },
    updateStickyPosition() {
      if (this.columnProp("frozen")) {
        if (this.columnProp("alignFrozen") === "right") {
          let l = 0,
            o = this.$el.nextElementSibling;
          o && (l = f.getOuterWidth(o) + parseFloat(o.style.right || 0)),
            (this.styleObject.right = l + "px");
        } else {
          let l = 0,
            o = this.$el.previousElementSibling;
          o && (l = f.getOuterWidth(o) + parseFloat(o.style.left || 0)),
            (this.styleObject.left = l + "px");
        }
        let t = this.$el.parentElement.nextElementSibling;
        if (t) {
          let l = f.index(this.$el);
          (t.children[l].style.left = this.styleObject.left),
            (t.children[l].style.right = this.styleObject.right);
        }
      }
    },
    onHeaderCheckboxChange(e) {
      this.$emit("checkbox-change", e);
    },
  },
  computed: {
    containerClass() {
      return [
        this.filterColumn
          ? this.columnProp("filterHeaderClass")
          : this.columnProp("headerClass"),
        this.columnProp("class"),
        {
          "p-sortable-column": this.columnProp("sortable"),
          "p-resizable-column": this.resizableColumns,
          "p-highlight": this.isColumnSorted(),
          "p-filter-column": this.filterColumn,
          "p-frozen-column": this.columnProp("frozen"),
          "p-reorderable-column": this.reorderableColumns,
        },
      ];
    },
    containerStyle() {
      let e = this.filterColumn
          ? this.columnProp("filterHeaderStyle")
          : this.columnProp("headerStyle"),
        t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    sortableColumnIcon() {
      let e = !1,
        t = null;
      if (this.sortMode === "single")
        (e =
          this.sortField &&
          (this.sortField === this.columnProp("field") ||
            this.sortField === this.columnProp("sortField"))),
          (t = e ? this.sortOrder : 0);
      else if (this.sortMode === "multiple") {
        let l = this.getMultiSortMetaIndex();
        l > -1 && ((e = !0), (t = this.multiSortMeta[l].order));
      }
      return [
        "p-sortable-column-icon pi pi-fw",
        {
          "pi-sort-alt": !e,
          "pi-sort-amount-up-alt": e && t > 0,
          "pi-sort-amount-down": e && t < 0,
        },
      ];
    },
    ariaSort() {
      if (this.columnProp("sortable")) {
        const e = this.sortableColumnIcon;
        return e[1]["pi-sort-amount-down"]
          ? "descending"
          : e[1]["pi-sort-amount-up-alt"]
          ? "ascending"
          : "none";
      } else return null;
    },
  },
  components: { DTHeaderCheckbox: U, DTColumnFilter: W },
};
const Ut = ["tabindex", "colspan", "rowspan", "aria-sort"],
  Jt = { class: "p-column-header-content" },
  qt = { key: 1, class: "p-column-title" },
  Xt = { key: 3, class: "p-sortable-column-badge" };
function Yt(e, t, l, o, n, i) {
  const r = C("DTHeaderCheckbox"),
    c = C("DTColumnFilter");
  return (
    a(),
    p(
      "th",
      {
        style: F(i.containerStyle),
        class: R(i.containerClass),
        tabindex: i.columnProp("sortable") ? "0" : null,
        role: "columnheader",
        colspan: i.columnProp("colspan"),
        rowspan: i.columnProp("rowspan"),
        "aria-sort": i.ariaSort,
        onClick: t[8] || (t[8] = (...h) => i.onClick && i.onClick(...h)),
        onKeydown: t[9] || (t[9] = (...h) => i.onKeyDown && i.onKeyDown(...h)),
        onMousedown:
          t[10] || (t[10] = (...h) => i.onMouseDown && i.onMouseDown(...h)),
        onDragstart:
          t[11] || (t[11] = (...h) => i.onDragStart && i.onDragStart(...h)),
        onDragover:
          t[12] || (t[12] = (...h) => i.onDragOver && i.onDragOver(...h)),
        onDragleave:
          t[13] || (t[13] = (...h) => i.onDragLeave && i.onDragLeave(...h)),
        onDrop: t[14] || (t[14] = (...h) => i.onDrop && i.onDrop(...h)),
      },
      [
        l.resizableColumns && !i.columnProp("frozen")
          ? (a(),
            p(
              "span",
              {
                key: 0,
                class: "p-column-resizer",
                onMousedown:
                  t[0] ||
                  (t[0] = (...h) => i.onResizeStart && i.onResizeStart(...h)),
              },
              null,
              32,
            ))
          : g("", !0),
        b("div", Jt, [
          l.column.children && l.column.children.header
            ? (a(),
              w(
                x(l.column.children.header),
                { key: 0, column: l.column },
                null,
                8,
                ["column"],
              ))
            : g("", !0),
          i.columnProp("header")
            ? (a(), p("span", qt, I(i.columnProp("header")), 1))
            : g("", !0),
          i.columnProp("sortable")
            ? (a(),
              p("span", { key: 2, class: R(i.sortableColumnIcon) }, null, 2))
            : g("", !0),
          i.isMultiSorted()
            ? (a(), p("span", Xt, I(i.getBadgeValue()), 1))
            : g("", !0),
          i.columnProp("selectionMode") === "multiple" &&
          l.filterDisplay !== "row"
            ? (a(),
              w(
                r,
                {
                  key: 4,
                  checked: l.allRowsSelected,
                  onChange: i.onHeaderCheckboxChange,
                  disabled: l.empty,
                },
                null,
                8,
                ["checked", "onChange", "disabled"],
              ))
            : g("", !0),
          l.filterDisplay === "menu" &&
          l.column.children &&
          l.column.children.filter
            ? (a(),
              w(
                c,
                {
                  key: 5,
                  field: i.columnProp("filterField") || i.columnProp("field"),
                  type: i.columnProp("dataType"),
                  display: "menu",
                  showMenu: i.columnProp("showFilterMenu"),
                  filterElement: l.column.children && l.column.children.filter,
                  filterHeaderTemplate:
                    l.column.children && l.column.children.filterheader,
                  filterFooterTemplate:
                    l.column.children && l.column.children.filterfooter,
                  filterClearTemplate:
                    l.column.children && l.column.children.filterclear,
                  filterApplyTemplate:
                    l.column.children && l.column.children.filterapply,
                  filters: l.filters,
                  filtersStore: l.filtersStore,
                  filterInputProps: l.filterInputProps,
                  onFilterChange:
                    t[1] || (t[1] = h => e.$emit("filter-change", h)),
                  onFilterApply: t[2] || (t[2] = h => e.$emit("filter-apply")),
                  filterMenuStyle: i.columnProp("filterMenuStyle"),
                  filterMenuClass: i.columnProp("filterMenuClass"),
                  showOperator: i.columnProp("showFilterOperator"),
                  showClearButton: i.columnProp("showClearButton"),
                  showApplyButton: i.columnProp("showApplyButton"),
                  showMatchModes: i.columnProp("showFilterMatchModes"),
                  showAddButton: i.columnProp("showAddButton"),
                  matchModeOptions: i.columnProp("filterMatchModeOptions"),
                  maxConstraints: i.columnProp("maxConstraints"),
                  onOperatorChange:
                    t[3] || (t[3] = h => e.$emit("operator-change", h)),
                  onMatchmodeChange:
                    t[4] || (t[4] = h => e.$emit("matchmode-change", h)),
                  onConstraintAdd:
                    t[5] || (t[5] = h => e.$emit("constraint-add", h)),
                  onConstraintRemove:
                    t[6] || (t[6] = h => e.$emit("constraint-remove", h)),
                  onApplyClick: t[7] || (t[7] = h => e.$emit("apply-click", h)),
                },
                null,
                8,
                [
                  "field",
                  "type",
                  "showMenu",
                  "filterElement",
                  "filterHeaderTemplate",
                  "filterFooterTemplate",
                  "filterClearTemplate",
                  "filterApplyTemplate",
                  "filters",
                  "filtersStore",
                  "filterInputProps",
                  "filterMenuStyle",
                  "filterMenuClass",
                  "showOperator",
                  "showClearButton",
                  "showApplyButton",
                  "showMatchModes",
                  "showAddButton",
                  "matchModeOptions",
                  "maxConstraints",
                ],
              ))
            : g("", !0),
        ]),
      ],
      46,
      Ut,
    )
  );
}
pe.render = Yt;
var fe = {
  name: "TableHeader",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click",
  ],
  props: {
    columnGroup: { type: null, default: null },
    columns: { type: null, default: null },
    rowGroupMode: { type: String, default: null },
    groupRowsBy: { type: [Array, String, Function], default: null },
    resizableColumns: { type: Boolean, default: !1 },
    allRowsSelected: { type: Boolean, default: !1 },
    empty: { type: Boolean, default: !1 },
    sortMode: { type: String, default: "single" },
    groupRowSortField: { type: [String, Function], default: null },
    sortField: { type: [String, Function], default: null },
    sortOrder: { type: Number, default: null },
    multiSortMeta: { type: Array, default: null },
    filterDisplay: { type: String, default: null },
    filters: { type: Object, default: null },
    filtersStore: { type: Object, default: null },
    reorderableColumns: { type: Boolean, default: !1 },
    filterInputProps: { type: null, default: null },
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    getFilterColumnHeaderClass(e) {
      return [
        "p-filter-column",
        this.columnProp(e, "filterHeaderClass"),
        this.columnProp(e, "class"),
        { "p-frozen-column": this.columnProp(e, "frozen") },
      ];
    },
    getFilterColumnHeaderStyle(e) {
      return [
        this.columnProp(e, "filterHeaderStyle"),
        this.columnProp(e, "style"),
      ];
    },
    getHeaderRows() {
      let e = [],
        t = this.columnGroup;
      if (t.children && t.children.default) {
        for (let l of t.children.default())
          l.type.name === "Row"
            ? e.push(l)
            : l.children && l.children instanceof Array && (e = l.children);
        return e;
      }
    },
    getHeaderColumns(e) {
      let t = [];
      if (e.children && e.children.default)
        return (
          e.children.default().forEach(l => {
            l.children && l.children instanceof Array
              ? (t = [...t, ...l.children])
              : l.type.name === "Column" && t.push(l);
          }),
          t
        );
    },
  },
  components: { DTHeaderCell: pe, DTHeaderCheckbox: U, DTColumnFilter: W },
};
const Zt = { class: "p-datatable-thead", role: "rowgroup" },
  Qt = { role: "row" },
  $t = { key: 0, role: "row" };
function el(e, t, l, o, n, i) {
  const r = C("DTHeaderCell"),
    c = C("DTHeaderCheckbox"),
    h = C("DTColumnFilter");
  return (
    a(),
    p("thead", Zt, [
      l.columnGroup
        ? (a(!0),
          p(
            v,
            { key: 1 },
            P(
              i.getHeaderRows(),
              (s, m) => (
                a(),
                p("tr", { key: m, role: "row" }, [
                  (a(!0),
                  p(
                    v,
                    null,
                    P(
                      i.getHeaderColumns(s),
                      (u, d) => (
                        a(),
                        p(
                          v,
                          {
                            key:
                              i.columnProp(u, "columnKey") ||
                              i.columnProp(u, "field") ||
                              d,
                          },
                          [
                            !i.columnProp(u, "hidden") &&
                            (l.rowGroupMode !== "subheader" ||
                              l.groupRowsBy !== i.columnProp(u, "field")) &&
                            typeof u.children != "string"
                              ? (a(),
                                w(
                                  r,
                                  {
                                    key: 0,
                                    column: u,
                                    onColumnClick:
                                      t[23] ||
                                      (t[23] = S => e.$emit("column-click", S)),
                                    onColumnMousedown:
                                      t[24] ||
                                      (t[24] = S =>
                                        e.$emit("column-mousedown", S)),
                                    groupRowsBy: l.groupRowsBy,
                                    groupRowSortField: l.groupRowSortField,
                                    sortMode: l.sortMode,
                                    sortField: l.sortField,
                                    sortOrder: l.sortOrder,
                                    multiSortMeta: l.multiSortMeta,
                                    allRowsSelected: l.allRowsSelected,
                                    empty: l.empty,
                                    onCheckboxChange:
                                      t[25] ||
                                      (t[25] = S =>
                                        e.$emit("checkbox-change", S)),
                                    filters: l.filters,
                                    filterDisplay: l.filterDisplay,
                                    filtersStore: l.filtersStore,
                                    onFilterChange:
                                      t[26] ||
                                      (t[26] = S =>
                                        e.$emit("filter-change", S)),
                                    onFilterApply:
                                      t[27] ||
                                      (t[27] = S => e.$emit("filter-apply")),
                                    onOperatorChange:
                                      t[28] ||
                                      (t[28] = S =>
                                        e.$emit("operator-change", S)),
                                    onMatchmodeChange:
                                      t[29] ||
                                      (t[29] = S =>
                                        e.$emit("matchmode-change", S)),
                                    onConstraintAdd:
                                      t[30] ||
                                      (t[30] = S =>
                                        e.$emit("constraint-add", S)),
                                    onConstraintRemove:
                                      t[31] ||
                                      (t[31] = S =>
                                        e.$emit("constraint-remove", S)),
                                    onApplyClick:
                                      t[32] ||
                                      (t[32] = S => e.$emit("apply-click", S)),
                                  },
                                  null,
                                  8,
                                  [
                                    "column",
                                    "groupRowsBy",
                                    "groupRowSortField",
                                    "sortMode",
                                    "sortField",
                                    "sortOrder",
                                    "multiSortMeta",
                                    "allRowsSelected",
                                    "empty",
                                    "filters",
                                    "filterDisplay",
                                    "filtersStore",
                                  ],
                                ))
                              : g("", !0),
                          ],
                          64,
                        )
                      ),
                    ),
                    128,
                  )),
                ])
              ),
            ),
            128,
          ))
        : (a(),
          p(
            v,
            { key: 0 },
            [
              b("tr", Qt, [
                (a(!0),
                p(
                  v,
                  null,
                  P(
                    l.columns,
                    (s, m) => (
                      a(),
                      p(
                        v,
                        {
                          key:
                            i.columnProp(s, "columnKey") ||
                            i.columnProp(s, "field") ||
                            m,
                        },
                        [
                          !i.columnProp(s, "hidden") &&
                          (l.rowGroupMode !== "subheader" ||
                            l.groupRowsBy !== i.columnProp(s, "field"))
                            ? (a(),
                              w(
                                r,
                                {
                                  key: 0,
                                  column: s,
                                  onColumnClick:
                                    t[0] ||
                                    (t[0] = u => e.$emit("column-click", u)),
                                  onColumnMousedown:
                                    t[1] ||
                                    (t[1] = u =>
                                      e.$emit("column-mousedown", u)),
                                  onColumnDragstart:
                                    t[2] ||
                                    (t[2] = u =>
                                      e.$emit("column-dragstart", u)),
                                  onColumnDragover:
                                    t[3] ||
                                    (t[3] = u => e.$emit("column-dragover", u)),
                                  onColumnDragleave:
                                    t[4] ||
                                    (t[4] = u =>
                                      e.$emit("column-dragleave", u)),
                                  onColumnDrop:
                                    t[5] ||
                                    (t[5] = u => e.$emit("column-drop", u)),
                                  groupRowsBy: l.groupRowsBy,
                                  groupRowSortField: l.groupRowSortField,
                                  reorderableColumns: l.reorderableColumns,
                                  resizableColumns: l.resizableColumns,
                                  onColumnResizestart:
                                    t[6] ||
                                    (t[6] = u =>
                                      e.$emit("column-resizestart", u)),
                                  sortMode: l.sortMode,
                                  sortField: l.sortField,
                                  sortOrder: l.sortOrder,
                                  multiSortMeta: l.multiSortMeta,
                                  allRowsSelected: l.allRowsSelected,
                                  empty: l.empty,
                                  onCheckboxChange:
                                    t[7] ||
                                    (t[7] = u => e.$emit("checkbox-change", u)),
                                  filters: l.filters,
                                  filterDisplay: l.filterDisplay,
                                  filtersStore: l.filtersStore,
                                  filterInputProps: l.filterInputProps,
                                  onFilterChange:
                                    t[8] ||
                                    (t[8] = u => e.$emit("filter-change", u)),
                                  onFilterApply:
                                    t[9] ||
                                    (t[9] = u => e.$emit("filter-apply")),
                                  onOperatorChange:
                                    t[10] ||
                                    (t[10] = u =>
                                      e.$emit("operator-change", u)),
                                  onMatchmodeChange:
                                    t[11] ||
                                    (t[11] = u =>
                                      e.$emit("matchmode-change", u)),
                                  onConstraintAdd:
                                    t[12] ||
                                    (t[12] = u => e.$emit("constraint-add", u)),
                                  onConstraintRemove:
                                    t[13] ||
                                    (t[13] = u =>
                                      e.$emit("constraint-remove", u)),
                                  onApplyClick:
                                    t[14] ||
                                    (t[14] = u => e.$emit("apply-click", u)),
                                },
                                null,
                                8,
                                [
                                  "column",
                                  "groupRowsBy",
                                  "groupRowSortField",
                                  "reorderableColumns",
                                  "resizableColumns",
                                  "sortMode",
                                  "sortField",
                                  "sortOrder",
                                  "multiSortMeta",
                                  "allRowsSelected",
                                  "empty",
                                  "filters",
                                  "filterDisplay",
                                  "filtersStore",
                                  "filterInputProps",
                                ],
                              ))
                            : g("", !0),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              l.filterDisplay === "row"
                ? (a(),
                  p("tr", $t, [
                    (a(!0),
                    p(
                      v,
                      null,
                      P(
                        l.columns,
                        (s, m) => (
                          a(),
                          p(
                            v,
                            {
                              key:
                                i.columnProp(s, "columnKey") ||
                                i.columnProp(s, "field") ||
                                m,
                            },
                            [
                              !i.columnProp(s, "hidden") &&
                              (l.rowGroupMode !== "subheader" ||
                                l.groupRowsBy !== i.columnProp(s, "field"))
                                ? (a(),
                                  p(
                                    "th",
                                    {
                                      key: 0,
                                      style: F(i.getFilterColumnHeaderStyle(s)),
                                      class: R(i.getFilterColumnHeaderClass(s)),
                                    },
                                    [
                                      i.columnProp(s, "selectionMode") ===
                                      "multiple"
                                        ? (a(),
                                          w(
                                            c,
                                            {
                                              key: 0,
                                              checked: l.allRowsSelected,
                                              disabled: l.empty,
                                              onChange:
                                                t[15] ||
                                                (t[15] = u =>
                                                  e.$emit(
                                                    "checkbox-change",
                                                    u,
                                                  )),
                                            },
                                            null,
                                            8,
                                            ["checked", "disabled"],
                                          ))
                                        : g("", !0),
                                      s.children && s.children.filter
                                        ? (a(),
                                          w(
                                            h,
                                            {
                                              key: 1,
                                              field:
                                                i.columnProp(
                                                  s,
                                                  "filterField",
                                                ) || i.columnProp(s, "field"),
                                              type: i.columnProp(s, "dataType"),
                                              display: "row",
                                              showMenu: i.columnProp(
                                                s,
                                                "showFilterMenu",
                                              ),
                                              filterElement:
                                                s.children && s.children.filter,
                                              filterHeaderTemplate:
                                                s.children &&
                                                s.children.filterheader,
                                              filterFooterTemplate:
                                                s.children &&
                                                s.children.filterfooter,
                                              filterClearTemplate:
                                                s.children &&
                                                s.children.filterclear,
                                              filterApplyTemplate:
                                                s.children &&
                                                s.children.filterapply,
                                              filters: l.filters,
                                              filtersStore: l.filtersStore,
                                              filterInputProps:
                                                l.filterInputProps,
                                              onFilterChange:
                                                t[16] ||
                                                (t[16] = u =>
                                                  e.$emit("filter-change", u)),
                                              onFilterApply:
                                                t[17] ||
                                                (t[17] = u =>
                                                  e.$emit("filter-apply")),
                                              filterMenuStyle: i.columnProp(
                                                s,
                                                "filterMenuStyle",
                                              ),
                                              filterMenuClass: i.columnProp(
                                                s,
                                                "filterMenuClass",
                                              ),
                                              showOperator: i.columnProp(
                                                s,
                                                "showFilterOperator",
                                              ),
                                              showClearButton: i.columnProp(
                                                s,
                                                "showClearButton",
                                              ),
                                              showApplyButton: i.columnProp(
                                                s,
                                                "showApplyButton",
                                              ),
                                              showMatchModes: i.columnProp(
                                                s,
                                                "showFilterMatchModes",
                                              ),
                                              showAddButton: i.columnProp(
                                                s,
                                                "showAddButton",
                                              ),
                                              matchModeOptions: i.columnProp(
                                                s,
                                                "filterMatchModeOptions",
                                              ),
                                              maxConstraints: i.columnProp(
                                                s,
                                                "maxConstraints",
                                              ),
                                              onOperatorChange:
                                                t[18] ||
                                                (t[18] = u =>
                                                  e.$emit(
                                                    "operator-change",
                                                    u,
                                                  )),
                                              onMatchmodeChange:
                                                t[19] ||
                                                (t[19] = u =>
                                                  e.$emit(
                                                    "matchmode-change",
                                                    u,
                                                  )),
                                              onConstraintAdd:
                                                t[20] ||
                                                (t[20] = u =>
                                                  e.$emit("constraint-add", u)),
                                              onConstraintRemove:
                                                t[21] ||
                                                (t[21] = u =>
                                                  e.$emit(
                                                    "constraint-remove",
                                                    u,
                                                  )),
                                              onApplyClick:
                                                t[22] ||
                                                (t[22] = u =>
                                                  e.$emit("apply-click", u)),
                                            },
                                            null,
                                            8,
                                            [
                                              "field",
                                              "type",
                                              "showMenu",
                                              "filterElement",
                                              "filterHeaderTemplate",
                                              "filterFooterTemplate",
                                              "filterClearTemplate",
                                              "filterApplyTemplate",
                                              "filters",
                                              "filtersStore",
                                              "filterInputProps",
                                              "filterMenuStyle",
                                              "filterMenuClass",
                                              "showOperator",
                                              "showClearButton",
                                              "showApplyButton",
                                              "showMatchModes",
                                              "showAddButton",
                                              "matchModeOptions",
                                              "maxConstraints",
                                            ],
                                          ))
                                        : g("", !0),
                                    ],
                                    6,
                                  ))
                                : g("", !0),
                            ],
                            64,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]))
                : g("", !0),
            ],
            64,
          )),
    ])
  );
}
fe.render = el;
var tl = {
  name: "DataTable",
  emits: [
    "value-change",
    "update:first",
    "update:rows",
    "page",
    "update:sortField",
    "update:sortOrder",
    "update:multiSortMeta",
    "sort",
    "filter",
    "row-click",
    "row-dblclick",
    "update:selection",
    "row-select",
    "row-unselect",
    "update:contextMenuSelection",
    "row-contextmenu",
    "row-unselect-all",
    "row-select-all",
    "select-all-change",
    "column-resize-end",
    "column-reorder",
    "row-reorder",
    "update:expandedRows",
    "row-collapse",
    "row-expand",
    "update:expandedRowGroups",
    "rowgroup-collapse",
    "rowgroup-expand",
    "update:filters",
    "state-restore",
    "state-save",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "update:editingRows",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel",
  ],
  props: {
    value: { type: Array, default: null },
    dataKey: { type: [String, Function], default: null },
    rows: { type: Number, default: 0 },
    first: { type: Number, default: 0 },
    totalRecords: { type: Number, default: 0 },
    paginator: { type: Boolean, default: !1 },
    paginatorPosition: { type: String, default: "bottom" },
    alwaysShowPaginator: { type: Boolean, default: !0 },
    paginatorTemplate: {
      type: [Object, String],
      default:
        "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    },
    pageLinkSize: { type: Number, default: 5 },
    rowsPerPageOptions: { type: Array, default: null },
    currentPageReportTemplate: {
      type: String,
      default: "({currentPage} of {totalPages})",
    },
    lazy: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingIcon: { type: String, default: "pi pi-spinner" },
    sortField: { type: [String, Function], default: null },
    sortOrder: { type: Number, default: null },
    defaultSortOrder: { type: Number, default: 1 },
    multiSortMeta: { type: Array, default: null },
    sortMode: { type: String, default: "single" },
    removableSort: { type: Boolean, default: !1 },
    filters: { type: Object, default: null },
    filterDisplay: { type: String, default: null },
    globalFilterFields: { type: Array, default: null },
    filterLocale: { type: String, default: void 0 },
    selection: { type: [Array, Object], default: null },
    selectionMode: { type: String, default: null },
    compareSelectionBy: { type: String, default: "deepEquals" },
    metaKeySelection: { type: Boolean, default: !0 },
    contextMenu: { type: Boolean, default: !1 },
    contextMenuSelection: { type: Object, default: null },
    selectAll: { type: Boolean, default: null },
    rowHover: { type: Boolean, default: !1 },
    csvSeparator: { type: String, default: "," },
    exportFilename: { type: String, default: "download" },
    exportFunction: { type: Function, default: null },
    autoLayout: { type: Boolean, default: !1 },
    resizableColumns: { type: Boolean, default: !1 },
    columnResizeMode: { type: String, default: "fit" },
    reorderableColumns: { type: Boolean, default: !1 },
    expandedRows: { type: Array, default: null },
    expandedRowIcon: { type: String, default: "pi-chevron-down" },
    collapsedRowIcon: { type: String, default: "pi-chevron-right" },
    rowGroupMode: { type: String, default: null },
    groupRowsBy: { type: [Array, String, Function], default: null },
    expandableRowGroups: { type: Boolean, default: !1 },
    expandedRowGroups: { type: Array, default: null },
    stateStorage: { type: String, default: "session" },
    stateKey: { type: String, default: null },
    editMode: { type: String, default: null },
    editingRows: { type: Array, default: null },
    rowClass: { type: null, default: null },
    rowStyle: { type: null, default: null },
    scrollable: { type: Boolean, default: !1 },
    scrollDirection: { type: String, default: "vertical" },
    virtualScrollerOptions: { type: Object, default: null },
    scrollHeight: { type: String, default: null },
    frozenValue: { type: Array, default: null },
    responsiveLayout: { type: String, default: "stack" },
    breakpoint: { type: String, default: "960px" },
    showGridlines: { type: Boolean, default: !1 },
    stripedRows: { type: Boolean, default: !1 },
    tableStyle: { type: null, default: null },
    tableClass: { type: String, default: null },
    tableProps: { type: null, default: null },
    filterInputProps: { type: null, default: null },
  },
  data() {
    return {
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
      d_groupRowsSortMeta: null,
      d_selectionKeys: null,
      d_expandedRowKeys: null,
      d_columnOrder: null,
      d_editingRowKeys: null,
      d_editingMeta: {},
      d_filters: this.cloneFilters(this.filters),
    };
  },
  rowTouched: !1,
  anchorRowIndex: null,
  rangeRowIndex: null,
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  columnResizing: !1,
  colReorderIconWidth: null,
  colReorderIconHeight: null,
  draggedColumn: null,
  draggedRowIndex: null,
  droppedRowIndex: null,
  rowDragging: null,
  columnWidthsState: null,
  tableWidthState: null,
  columnWidthsRestored: !1,
  watch: {
    first(e) {
      this.d_first = e;
    },
    rows(e) {
      this.d_rows = e;
    },
    sortField(e) {
      this.d_sortField = e;
    },
    sortOrder(e) {
      this.d_sortOrder = e;
    },
    multiSortMeta(e) {
      this.d_multiSortMeta = e;
    },
    selection: {
      immediate: !0,
      handler(e) {
        this.dataKey && this.updateSelectionKeys(e);
      },
    },
    expandedRows(e) {
      this.dataKey && this.updateExpandedRowKeys(e);
    },
    editingRows(e) {
      this.dataKey && this.updateEditingRowKeys(e);
    },
    filters: {
      deep: !0,
      handler: function (e) {
        this.d_filters = this.cloneFilters(e);
      },
    },
  },
  beforeMount() {
    this.isStateful() && this.restoreState();
  },
  mounted() {
    this.$el.setAttribute(this.attributeSelector, ""),
      this.responsiveLayout === "stack" &&
        !this.scrollable &&
        this.createResponsiveStyle(),
      this.isStateful() && this.resizableColumns && this.restoreColumnWidths(),
      this.editMode === "row" &&
        this.dataKey &&
        !this.d_editingRowKeys &&
        this.updateEditingRowKeys(this.editingRows);
  },
  beforeUnmount() {
    this.unbindColumnResizeEvents(),
      this.destroyStyleElement(),
      this.destroyResponsiveStyle();
  },
  updated() {
    this.isStateful() && this.saveState(),
      this.editMode === "row" &&
        this.dataKey &&
        !this.d_editingRowKeys &&
        this.updateEditingRowKeys(this.editingRows);
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    onPage(e) {
      this.clearEditingMetaData(),
        (this.d_first = e.first),
        (this.d_rows = e.rows);
      let t = this.createLazyLoadEvent(e);
      (t.pageCount = e.pageCount),
        (t.page = e.page),
        this.$emit("update:first", this.d_first),
        this.$emit("update:rows", this.d_rows),
        this.$emit("page", t),
        this.$emit("value-change", this.processedData);
    },
    onColumnHeaderClick(e) {
      const t = e.originalEvent,
        l = e.column;
      if (this.columnProp(l, "sortable")) {
        const o = t.target,
          n = this.columnProp(l, "sortField") || this.columnProp(l, "field");
        (f.hasClass(o, "p-sortable-column") ||
          f.hasClass(o, "p-column-title") ||
          f.hasClass(o, "p-column-header-content") ||
          f.hasClass(o, "p-sortable-column-icon") ||
          f.hasClass(o.parentElement, "p-sortable-column-icon")) &&
          (f.clearSelection(),
          this.sortMode === "single"
            ? (this.d_sortField === n
                ? this.removableSort &&
                  this.d_sortOrder * -1 === this.defaultSortOrder
                  ? ((this.d_sortOrder = null), (this.d_sortField = null))
                  : (this.d_sortOrder = this.d_sortOrder * -1)
                : ((this.d_sortOrder = this.defaultSortOrder),
                  (this.d_sortField = n)),
              this.$emit("update:sortField", this.d_sortField),
              this.$emit("update:sortOrder", this.d_sortOrder),
              this.resetPage())
            : this.sortMode === "multiple" &&
              (t.metaKey ||
                t.ctrlKey ||
                (this.d_multiSortMeta = this.d_multiSortMeta.filter(
                  r => r.field === n,
                )),
              this.addMultiSortField(n),
              this.$emit("update:multiSortMeta", this.d_multiSortMeta)),
          this.$emit("sort", this.createLazyLoadEvent(t)),
          this.$emit("value-change", this.processedData));
      }
    },
    sortSingle(e) {
      if (
        (this.clearEditingMetaData(),
        this.groupRowsBy && this.groupRowsBy === this.sortField)
      )
        return (
          (this.d_multiSortMeta = [
            {
              field: this.sortField,
              order: this.sortOrder || this.defaultSortOrder,
            },
            { field: this.d_sortField, order: this.d_sortOrder },
          ]),
          this.sortMultiple(e)
        );
      let t = [...e];
      return (
        t.sort((l, o) => {
          let n = y.resolveFieldData(l, this.d_sortField),
            i = y.resolveFieldData(o, this.d_sortField),
            r = null;
          return (
            n == null && i != null
              ? (r = -1)
              : n != null && i == null
              ? (r = 1)
              : n == null && i == null
              ? (r = 0)
              : typeof n == "string" && typeof i == "string"
              ? (r = n.localeCompare(i, void 0, { numeric: !0 }))
              : (r = n < i ? -1 : n > i ? 1 : 0),
            this.d_sortOrder * r
          );
        }),
        t
      );
    },
    sortMultiple(e) {
      if (
        (this.clearEditingMetaData(),
        this.groupRowsBy &&
          (this.d_groupRowsSortMeta ||
            (this.d_multiSortMeta.length &&
              this.groupRowsBy === this.d_multiSortMeta[0].field)))
      ) {
        const l = this.d_multiSortMeta[0];
        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = l),
          l.field !== this.d_groupRowsSortMeta.field &&
            (this.d_multiSortMeta = [
              this.d_groupRowsSortMeta,
              ...this.d_multiSortMeta,
            ]);
      }
      let t = [...e];
      return t.sort((l, o) => this.multisortField(l, o, 0)), t;
    },
    multisortField(e, t, l) {
      const o = y.resolveFieldData(e, this.d_multiSortMeta[l].field),
        n = y.resolveFieldData(t, this.d_multiSortMeta[l].field);
      let i = null;
      if (typeof o == "string" || o instanceof String) {
        if (o.localeCompare && o !== n)
          return (
            this.d_multiSortMeta[l].order *
            o.localeCompare(n, void 0, { numeric: !0 })
          );
      } else i = o < n ? -1 : 1;
      return o === n
        ? this.d_multiSortMeta.length - 1 > l
          ? this.multisortField(e, t, l + 1)
          : 0
        : this.d_multiSortMeta[l].order * i;
    },
    addMultiSortField(e) {
      let t = this.d_multiSortMeta.findIndex(l => l.field === e);
      t >= 0
        ? this.removableSort &&
          this.d_multiSortMeta[t].order * -1 === this.defaultSortOrder
          ? this.d_multiSortMeta.splice(t, 1)
          : (this.d_multiSortMeta[t] = {
              field: e,
              order: this.d_multiSortMeta[t].order * -1,
            })
        : this.d_multiSortMeta.push({ field: e, order: this.defaultSortOrder }),
        (this.d_multiSortMeta = [...this.d_multiSortMeta]);
    },
    filter(e) {
      if (!e) return;
      this.clearEditingMetaData();
      let t;
      this.filters.global &&
        (t =
          this.globalFilterFields ||
          this.columns.map(
            n =>
              this.columnProp(n, "filterField") || this.columnProp(n, "field"),
          ));
      let l = [];
      for (let n = 0; n < e.length; n++) {
        let i = !0,
          r = !1,
          c = !1;
        for (let s in this.filters)
          if (
            Object.prototype.hasOwnProperty.call(this.filters, s) &&
            s !== "global"
          ) {
            c = !0;
            let m = s,
              u = this.filters[m];
            if (u.operator) {
              for (let d of u.constraints)
                if (
                  ((i = this.executeLocalFilter(m, e[n], d)),
                  (u.operator === H.OR && i) || (u.operator === H.AND && !i))
                )
                  break;
            } else i = this.executeLocalFilter(m, e[n], u);
            if (!i) break;
          }
        if (this.filters.global && !r && t)
          for (let s = 0; s < t.length; s++) {
            let m = t[s];
            if (
              ((r = q.filters[this.filters.global.matchMode || X.CONTAINS](
                y.resolveFieldData(e[n], m),
                this.filters.global.value,
                this.filterLocale,
              )),
              r)
            )
              break;
          }
        let h;
        this.filters.global ? (h = c ? c && i && r : r) : (h = c && i),
          h && l.push(e[n]);
      }
      l.length === this.value.length && (l = e);
      let o = this.createLazyLoadEvent();
      return (
        (o.filteredValue = l),
        this.$emit("filter", o),
        this.$emit("value-change", l),
        l
      );
    },
    executeLocalFilter(e, t, l) {
      let o = l.value,
        n = l.matchMode || X.STARTS_WITH,
        i = y.resolveFieldData(t, e),
        r = q.filters[n];
      return r(i, o, this.filterLocale);
    },
    onRowClick(e) {
      const t = e.originalEvent,
        l = e.index,
        o = this.$refs.bodyRef && this.$refs.bodyRef.$el,
        n = f.findSingle(o, 'tr.p-selectable-row[tabindex="0"]');
      if (!f.isClickable(t.target)) {
        if ((this.$emit("row-click", e), this.selectionMode)) {
          const i = e.data,
            r = this.d_first + e.index;
          if (
            this.isMultipleSelectionMode() &&
            t.shiftKey &&
            this.anchorRowIndex != null
          )
            f.clearSelection(), (this.rangeRowIndex = r), this.selectRange(t);
          else {
            const c = this.isSelected(i),
              h = this.rowTouched ? !1 : this.metaKeySelection;
            if (((this.anchorRowIndex = r), (this.rangeRowIndex = r), h)) {
              let s = t.metaKey || t.ctrlKey;
              if (c && s) {
                if (this.isSingleSelectionMode())
                  this.$emit("update:selection", null);
                else {
                  const m = this.findIndexInSelection(i),
                    u = this.selection.filter((d, S) => S != m);
                  this.$emit("update:selection", u);
                }
                this.$emit("row-unselect", {
                  originalEvent: t,
                  data: i,
                  index: r,
                  type: "row",
                });
              } else {
                if (this.isSingleSelectionMode())
                  this.$emit("update:selection", i);
                else if (this.isMultipleSelectionMode()) {
                  let m = s ? this.selection || [] : [];
                  (m = [...m, i]), this.$emit("update:selection", m);
                }
                this.$emit("row-select", {
                  originalEvent: t,
                  data: i,
                  index: r,
                  type: "row",
                });
              }
            } else if (this.selectionMode === "single")
              c
                ? (this.$emit("update:selection", null),
                  this.$emit("row-unselect", {
                    originalEvent: t,
                    data: i,
                    index: r,
                    type: "row",
                  }))
                : (this.$emit("update:selection", i),
                  this.$emit("row-select", {
                    originalEvent: t,
                    data: i,
                    index: r,
                    type: "row",
                  }));
            else if (this.selectionMode === "multiple")
              if (c) {
                const s = this.findIndexInSelection(i),
                  m = this.selection.filter((u, d) => d != s);
                this.$emit("update:selection", m),
                  this.$emit("row-unselect", {
                    originalEvent: t,
                    data: i,
                    index: r,
                    type: "row",
                  });
              } else {
                const s = this.selection ? [...this.selection, i] : [i];
                this.$emit("update:selection", s),
                  this.$emit("row-select", {
                    originalEvent: t,
                    data: i,
                    index: r,
                    type: "row",
                  });
              }
          }
        }
        (this.rowTouched = !1),
          n &&
            ((n.tabIndex = "-1"),
            (f.find(o, "tr.p-selectable-row")[l].tabIndex = "0"));
      }
    },
    onRowDblClick(e) {
      const t = e.originalEvent;
      f.isClickable(t.target) || this.$emit("row-dblclick", e);
    },
    onRowRightClick(e) {
      f.clearSelection(),
        e.originalEvent.target.focus(),
        this.$emit("update:contextMenuSelection", e.data),
        this.$emit("row-contextmenu", e);
    },
    onRowTouchEnd() {
      this.rowTouched = !0;
    },
    onRowKeyDown(e, t) {
      const l = e.originalEvent,
        o = e.data,
        n = e.index,
        i = l.metaKey || l.ctrlKey;
      if (this.selectionMode) {
        const r = l.target;
        switch (l.code) {
          case "ArrowDown":
            this.onArrowDownKey(l, r, n, t);
            break;
          case "ArrowUp":
            this.onArrowUpKey(l, r, n, t);
            break;
          case "Home":
            this.onHomeKey(l, r, n, t);
            break;
          case "End":
            this.onEndKey(l, r, n, t);
            break;
          case "Enter":
            this.onEnterKey(l, o, n);
            break;
          case "Space":
            this.onSpaceKey(l, o, n, t);
            break;
          case "Tab":
            this.onTabKey(l, n);
            break;
          default:
            if (l.code === "KeyA" && i) {
              const c = this.dataToRender(t.rows);
              this.$emit("update:selection", c);
            }
            break;
        }
      }
    },
    onArrowDownKey(e, t, l, o) {
      const n = this.findNextSelectableRow(t);
      if ((n && this.focusRowChange(t, n), e.shiftKey)) {
        const i = this.dataToRender(o.rows),
          r = l + 1 >= i.length ? i.length - 1 : l + 1;
        this.onRowClick({ originalEvent: e, data: i[r], index: r });
      }
      e.preventDefault();
    },
    onArrowUpKey(e, t, l, o) {
      const n = this.findPrevSelectableRow(t);
      if ((n && this.focusRowChange(t, n), e.shiftKey)) {
        const i = this.dataToRender(o.rows),
          r = l - 1 <= 0 ? 0 : l - 1;
        this.onRowClick({ originalEvent: e, data: i[r], index: r });
      }
      e.preventDefault();
    },
    onHomeKey(e, t, l, o) {
      const n = this.findFirstSelectableRow();
      if ((n && this.focusRowChange(t, n), e.ctrlKey && e.shiftKey)) {
        const i = this.dataToRender(o.rows);
        this.$emit("update:selection", i.slice(0, l + 1));
      }
      e.preventDefault();
    },
    onEndKey(e, t, l, o) {
      const n = this.findLastSelectableRow();
      if ((n && this.focusRowChange(t, n), e.ctrlKey && e.shiftKey)) {
        const i = this.dataToRender(o.rows);
        this.$emit("update:selection", i.slice(l, i.length));
      }
      e.preventDefault();
    },
    onEnterKey(e, t, l) {
      this.onRowClick({ originalEvent: e, data: t, index: l }),
        e.preventDefault();
    },
    onSpaceKey(e, t, l, o) {
      if ((this.onEnterKey(e, t, l), e.shiftKey && this.selection !== null)) {
        const n = this.dataToRender(o.rows);
        let i;
        if (this.selection.length > 0) {
          let c, h;
          (c = y.findIndexInList(this.selection[0], n)),
            (h = y.findIndexInList(
              this.selection[this.selection.length - 1],
              n,
            )),
            (i = l <= c ? h : c);
        } else i = y.findIndexInList(this.selection, n);
        const r = i !== l ? n.slice(Math.min(i, l), Math.max(i, l) + 1) : t;
        this.$emit("update:selection", r);
      }
    },
    onTabKey(e, t) {
      const l = this.$refs.bodyRef && this.$refs.bodyRef.$el,
        o = f.find(l, "tr.p-selectable-row");
      if (e.code === "Tab" && o && o.length > 0) {
        const n = f.findSingle(l, "tr.p-highlight"),
          i = f.findSingle(l, 'tr.p-selectable-row[tabindex="0"]');
        n
          ? ((n.tabIndex = "0"), i && i !== n && (i.tabIndex = "-1"))
          : ((o[0].tabIndex = "0"), i !== o[0] && (o[t].tabIndex = "-1"));
      }
    },
    findNextSelectableRow(e) {
      let t = e.nextElementSibling;
      return t
        ? f.hasClass(t, "p-selectable-row")
          ? t
          : this.findNextSelectableRow(t)
        : null;
    },
    findPrevSelectableRow(e) {
      let t = e.previousElementSibling;
      return t
        ? f.hasClass(t, "p-selectable-row")
          ? t
          : this.findPrevSelectableRow(t)
        : null;
    },
    findFirstSelectableRow() {
      return f.findSingle(this.$refs.table, ".p-selectable-row");
    },
    findLastSelectableRow() {
      const e = f.find(this.$refs.table, ".p-selectable-row");
      return e ? e[e.length - 1] : null;
    },
    focusRowChange(e, t) {
      (e.tabIndex = "-1"), (t.tabIndex = "0"), f.focus(t);
    },
    toggleRowWithRadio(e) {
      const t = e.data;
      this.isSelected(t)
        ? (this.$emit("update:selection", null),
          this.$emit("row-unselect", {
            originalEvent: e.originalEvent,
            data: t,
            index: e.index,
            type: "radiobutton",
          }))
        : (this.$emit("update:selection", t),
          this.$emit("row-select", {
            originalEvent: e.originalEvent,
            data: t,
            index: e.index,
            type: "radiobutton",
          }));
    },
    toggleRowWithCheckbox(e) {
      const t = e.data;
      if (this.isSelected(t)) {
        const l = this.findIndexInSelection(t),
          o = this.selection.filter((n, i) => i != l);
        this.$emit("update:selection", o),
          this.$emit("row-unselect", {
            originalEvent: e.originalEvent,
            data: t,
            index: e.index,
            type: "checkbox",
          });
      } else {
        let l = this.selection ? [...this.selection] : [];
        (l = [...l, t]),
          this.$emit("update:selection", l),
          this.$emit("row-select", {
            originalEvent: e.originalEvent,
            data: t,
            index: e.index,
            type: "checkbox",
          });
      }
    },
    toggleRowsWithCheckbox(e) {
      if (this.selectAll !== null) this.$emit("select-all-change", e);
      else {
        const { originalEvent: t, checked: l } = e;
        let o = [];
        l
          ? ((o = this.frozenValue
              ? [...this.frozenValue, ...this.processedData]
              : this.processedData),
            this.$emit("row-select-all", { originalEvent: t, data: o }))
          : this.$emit("row-unselect-all", { originalEvent: t }),
          this.$emit("update:selection", o);
      }
    },
    isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isSelected(e) {
      return e && this.selection
        ? this.dataKey
          ? this.d_selectionKeys
            ? this.d_selectionKeys[y.resolveFieldData(e, this.dataKey)] !==
              void 0
            : !1
          : this.selection instanceof Array
          ? this.findIndexInSelection(e) > -1
          : this.equals(e, this.selection)
        : !1;
    },
    findIndexInSelection(e) {
      return this.findIndex(e, this.selection);
    },
    findIndex(e, t) {
      let l = -1;
      if (t && t.length) {
        for (let o = 0; o < t.length; o++)
          if (this.equals(e, t[o])) {
            l = o;
            break;
          }
      }
      return l;
    },
    updateSelectionKeys(e) {
      if (((this.d_selectionKeys = {}), Array.isArray(e)))
        for (let t of e)
          this.d_selectionKeys[String(y.resolveFieldData(t, this.dataKey))] = 1;
      else
        this.d_selectionKeys[String(y.resolveFieldData(e, this.dataKey))] = 1;
    },
    updateExpandedRowKeys(e) {
      if (e && e.length) {
        this.d_expandedRowKeys = {};
        for (let t of e)
          this.d_expandedRowKeys[
            String(y.resolveFieldData(t, this.dataKey))
          ] = 1;
      } else this.d_expandedRowKeys = null;
    },
    updateEditingRowKeys(e) {
      if (e && e.length) {
        this.d_editingRowKeys = {};
        for (let t of e)
          this.d_editingRowKeys[
            String(y.resolveFieldData(t, this.dataKey))
          ] = 1;
      } else this.d_editingRowKeys = null;
    },
    equals(e, t) {
      return this.compareSelectionBy === "equals"
        ? e === t
        : y.equals(e, t, this.dataKey);
    },
    selectRange(e) {
      let t, l;
      this.rangeRowIndex > this.anchorRowIndex
        ? ((t = this.anchorRowIndex), (l = this.rangeRowIndex))
        : this.rangeRowIndex < this.anchorRowIndex
        ? ((t = this.rangeRowIndex), (l = this.anchorRowIndex))
        : ((t = this.rangeRowIndex), (l = this.rangeRowIndex)),
        this.lazy && this.paginator && ((t -= this.first), (l -= this.first));
      const o = this.processedData;
      let n = [];
      for (let i = t; i <= l; i++) {
        let r = o[i];
        n.push(r),
          this.$emit("row-select", { originalEvent: e, data: r, type: "row" });
      }
      this.$emit("update:selection", n);
    },
    exportCSV(e, t) {
      let l = "\uFEFF";
      t ||
        ((t = this.processedData),
        e && e.selectionOnly
          ? (t = this.selection || [])
          : this.frozenValue &&
            (t = t ? [...this.frozenValue, ...t] : this.frozenValue));
      let o = !1;
      for (let i = 0; i < this.columns.length; i++) {
        let r = this.columns[i];
        this.columnProp(r, "exportable") !== !1 &&
          this.columnProp(r, "field") &&
          (o ? (l += this.csvSeparator) : (o = !0),
          (l +=
            '"' +
            (this.columnProp(r, "exportHeader") ||
              this.columnProp(r, "header") ||
              this.columnProp(r, "field")) +
            '"'));
      }
      t &&
        t.forEach(i => {
          l += `
`;
          let r = !1;
          for (let c = 0; c < this.columns.length; c++) {
            let h = this.columns[c];
            if (
              this.columnProp(h, "exportable") !== !1 &&
              this.columnProp(h, "field")
            ) {
              r ? (l += this.csvSeparator) : (r = !0);
              let s = y.resolveFieldData(i, this.columnProp(h, "field"));
              s != null
                ? this.exportFunction
                  ? (s = this.exportFunction({
                      data: s,
                      field: this.columnProp(h, "field"),
                    }))
                  : (s = String(s).replace(/"/g, '""'))
                : (s = ""),
                (l += '"' + s + '"');
            }
          }
        });
      let n = !1;
      for (let i = 0; i < this.columns.length; i++) {
        let r = this.columns[i];
        i === 0 &&
          (l += `
`),
          this.columnProp(r, "exportable") !== !1 &&
            this.columnProp(r, "exportFooter") &&
            (n ? (l += this.csvSeparator) : (n = !0),
            (l +=
              '"' +
              (this.columnProp(r, "exportFooter") ||
                this.columnProp(r, "footer") ||
                this.columnProp(r, "field")) +
              '"'));
      }
      f.exportCSV(l, this.exportFilename);
    },
    resetPage() {
      (this.d_first = 0), this.$emit("update:first", this.d_first);
    },
    onColumnResizeStart(e) {
      let t = f.getOffset(this.$el).left;
      (this.resizeColumnElement = e.target.parentElement),
        (this.columnResizing = !0),
        (this.lastResizeHelperX = e.pageX - t + this.$el.scrollLeft),
        this.bindColumnResizeEvents();
    },
    onColumnResize(e) {
      let t = f.getOffset(this.$el).left;
      f.addClass(this.$el, "p-unselectable-text"),
        (this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px"),
        (this.$refs.resizeHelper.style.top = 0 + "px"),
        (this.$refs.resizeHelper.style.left =
          e.pageX - t + this.$el.scrollLeft + "px"),
        (this.$refs.resizeHelper.style.display = "block");
    },
    onColumnResizeEnd() {
      let e = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX,
        t = this.resizeColumnElement.offsetWidth,
        l = t + e,
        o = this.resizeColumnElement.style.minWidth || 15;
      if (t + e > parseInt(o, 10)) {
        if (this.columnResizeMode === "fit") {
          let i = this.resizeColumnElement.nextElementSibling.offsetWidth - e;
          l > 15 && i > 15 && this.resizeTableCells(l, i);
        } else if (this.columnResizeMode === "expand") {
          const n = this.$refs.table.offsetWidth + e + "px",
            i = r => {
              r && (r.style.width = r.style.minWidth = n);
            };
          if ((i(this.$refs.table), !this.virtualScrollerDisabled)) {
            const r = this.$refs.bodyRef && this.$refs.bodyRef.$el,
              c = this.$refs.frozenBodyRef && this.$refs.frozenBodyRef.$el;
            i(r), i(c);
          }
          this.resizeTableCells(l);
        }
        this.$emit("column-resize-end", {
          element: this.resizeColumnElement,
          delta: e,
        });
      }
      (this.$refs.resizeHelper.style.display = "none"),
        (this.resizeColumn = null),
        f.removeClass(this.$el, "p-unselectable-text"),
        this.unbindColumnResizeEvents(),
        this.isStateful() && this.saveState();
    },
    resizeTableCells(e, t) {
      let l = f.index(this.resizeColumnElement),
        o = [];
      f
        .find(this.$refs.table, ".p-datatable-thead > tr > th")
        .forEach(r => o.push(f.getOuterWidth(r))),
        this.destroyStyleElement(),
        this.createStyleElement();
      let i = "";
      o.forEach((r, c) => {
        let h = c === l ? e : t && c === l + 1 ? t : r,
          s = this.scrollable
            ? `flex: 1 1 ${h}px !important`
            : `width: ${h}px !important`;
        i += `
                    .p-datatable[${
                      this.attributeSelector
                    }] .p-datatable-thead > tr > th:nth-child(${c + 1}),
                    .p-datatable[${
                      this.attributeSelector
                    }] .p-datatable-tbody > tr > td:nth-child(${c + 1}),
                    .p-datatable[${
                      this.attributeSelector
                    }] .p-datatable-tfoot > tr > td:nth-child(${c + 1}) {
                        ${s}
                    }
                `;
      }),
        (this.styleElement.innerHTML = i);
    },
    bindColumnResizeEvents() {
      this.documentColumnResizeListener ||
        (this.documentColumnResizeListener = document.addEventListener(
          "mousemove",
          () => {
            this.columnResizing && this.onColumnResize(event);
          },
        )),
        this.documentColumnResizeEndListener ||
          (this.documentColumnResizeEndListener = document.addEventListener(
            "mouseup",
            () => {
              this.columnResizing &&
                ((this.columnResizing = !1), this.onColumnResizeEnd());
            },
          ));
    },
    unbindColumnResizeEvents() {
      this.documentColumnResizeListener &&
        (document.removeEventListener(
          "document",
          this.documentColumnResizeListener,
        ),
        (this.documentColumnResizeListener = null)),
        this.documentColumnResizeEndListener &&
          (document.removeEventListener(
            "document",
            this.documentColumnResizeEndListener,
          ),
          (this.documentColumnResizeEndListener = null));
    },
    onColumnHeaderMouseDown(e) {
      const t = e.originalEvent,
        l = e.column;
      this.reorderableColumns &&
        this.columnProp(l, "reorderableColumn") !== !1 &&
        (t.target.nodeName === "INPUT" ||
        t.target.nodeName === "TEXTAREA" ||
        f.hasClass(t.target, "p-column-resizer")
          ? (t.currentTarget.draggable = !1)
          : (t.currentTarget.draggable = !0));
    },
    onColumnHeaderDragStart(e) {
      if (this.columnResizing) {
        e.preventDefault();
        return;
      }
      (this.colReorderIconWidth = f.getHiddenElementOuterWidth(
        this.$refs.reorderIndicatorUp,
      )),
        (this.colReorderIconHeight = f.getHiddenElementOuterHeight(
          this.$refs.reorderIndicatorUp,
        )),
        (this.draggedColumn = this.findParentHeader(e.target)),
        e.dataTransfer.setData("text", "b");
    },
    onColumnHeaderDragOver(e) {
      let t = this.findParentHeader(e.target);
      if (this.reorderableColumns && this.draggedColumn && t) {
        e.preventDefault();
        let l = f.getOffset(this.$el),
          o = f.getOffset(t);
        if (this.draggedColumn !== t) {
          let n = o.left - l.left,
            i = o.left + t.offsetWidth / 2;
          (this.$refs.reorderIndicatorUp.style.top =
            o.top - l.top - (this.colReorderIconHeight - 1) + "px"),
            (this.$refs.reorderIndicatorDown.style.top =
              o.top - l.top + t.offsetHeight + "px"),
            e.pageX > i
              ? ((this.$refs.reorderIndicatorUp.style.left =
                  n +
                  t.offsetWidth -
                  Math.ceil(this.colReorderIconWidth / 2) +
                  "px"),
                (this.$refs.reorderIndicatorDown.style.left =
                  n +
                  t.offsetWidth -
                  Math.ceil(this.colReorderIconWidth / 2) +
                  "px"),
                (this.dropPosition = 1))
              : ((this.$refs.reorderIndicatorUp.style.left =
                  n - Math.ceil(this.colReorderIconWidth / 2) + "px"),
                (this.$refs.reorderIndicatorDown.style.left =
                  n - Math.ceil(this.colReorderIconWidth / 2) + "px"),
                (this.dropPosition = -1)),
            (this.$refs.reorderIndicatorUp.style.display = "block"),
            (this.$refs.reorderIndicatorDown.style.display = "block");
        }
      }
    },
    onColumnHeaderDragLeave(e) {
      this.reorderableColumns &&
        this.draggedColumn &&
        (e.preventDefault(),
        (this.$refs.reorderIndicatorUp.style.display = "none"),
        (this.$refs.reorderIndicatorDown.style.display = "none"));
    },
    onColumnHeaderDrop(e) {
      if ((e.preventDefault(), this.draggedColumn)) {
        let t = f.index(this.draggedColumn),
          l = f.index(this.findParentHeader(e.target)),
          o = t !== l;
        o &&
          ((l - t === 1 && this.dropPosition === -1) ||
            (l - t === -1 && this.dropPosition === 1)) &&
          (o = !1),
          o &&
            (y.reorderArray(this.columns, t, l),
            this.updateReorderableColumns(),
            this.$emit("column-reorder", {
              originalEvent: e,
              dragIndex: t,
              dropIndex: l,
            })),
          (this.$refs.reorderIndicatorUp.style.display = "none"),
          (this.$refs.reorderIndicatorDown.style.display = "none"),
          (this.draggedColumn.draggable = !1),
          (this.draggedColumn = null),
          (this.dropPosition = null);
      }
    },
    findParentHeader(e) {
      if (e.nodeName === "TH") return e;
      {
        let t = e.parentElement;
        for (; t.nodeName !== "TH" && ((t = t.parentElement), !!t); );
        return t;
      }
    },
    findColumnByKey(e, t) {
      if (e && e.length)
        for (let l = 0; l < e.length; l++) {
          let o = e[l];
          if (
            this.columnProp(o, "columnKey") === t ||
            this.columnProp(o, "field") === t
          )
            return o;
        }
      return null;
    },
    onRowMouseDown(e) {
      f.hasClass(e.target, "p-datatable-reorderablerow-handle")
        ? (e.currentTarget.draggable = !0)
        : (e.currentTarget.draggable = !1);
    },
    onRowDragStart(e) {
      const t = e.originalEvent,
        l = e.index;
      (this.rowDragging = !0),
        (this.draggedRowIndex = l),
        t.dataTransfer.setData("text", "b");
    },
    onRowDragOver(e) {
      const t = e.originalEvent,
        l = e.index;
      if (this.rowDragging && this.draggedRowIndex !== l) {
        let o = t.currentTarget,
          n = f.getOffset(o).top + f.getWindowScrollTop(),
          i = t.pageY,
          r = n + f.getOuterHeight(o) / 2,
          c = o.previousElementSibling;
        i < r
          ? (f.removeClass(o, "p-datatable-dragpoint-bottom"),
            (this.droppedRowIndex = l),
            c
              ? f.addClass(c, "p-datatable-dragpoint-bottom")
              : f.addClass(o, "p-datatable-dragpoint-top"))
          : (c
              ? f.removeClass(c, "p-datatable-dragpoint-bottom")
              : f.addClass(o, "p-datatable-dragpoint-top"),
            (this.droppedRowIndex = l + 1),
            f.addClass(o, "p-datatable-dragpoint-bottom")),
          t.preventDefault();
      }
    },
    onRowDragLeave(e) {
      let t = e.currentTarget,
        l = t.previousElementSibling;
      l && f.removeClass(l, "p-datatable-dragpoint-bottom"),
        f.removeClass(t, "p-datatable-dragpoint-bottom"),
        f.removeClass(t, "p-datatable-dragpoint-top");
    },
    onRowDragEnd(e) {
      (this.rowDragging = !1),
        (this.draggedRowIndex = null),
        (this.droppedRowIndex = null),
        (e.currentTarget.draggable = !1);
    },
    onRowDrop(e) {
      if (this.droppedRowIndex != null) {
        let t =
            this.draggedRowIndex > this.droppedRowIndex
              ? this.droppedRowIndex
              : this.droppedRowIndex === 0
              ? 0
              : this.droppedRowIndex - 1,
          l = [...this.processedData];
        y.reorderArray(
          l,
          this.draggedRowIndex + this.d_first,
          t + this.d_first,
        ),
          this.$emit("row-reorder", {
            originalEvent: e,
            dragIndex: this.draggedRowIndex,
            dropIndex: t,
            value: l,
          });
      }
      this.onRowDragLeave(e), this.onRowDragEnd(e), e.preventDefault();
    },
    toggleRow(e) {
      let t = e.data,
        l,
        o,
        n = this.expandedRows ? [...this.expandedRows] : [];
      this.dataKey
        ? (l = this.d_expandedRowKeys
            ? this.d_expandedRowKeys[y.resolveFieldData(t, this.dataKey)] !==
              void 0
            : !1)
        : ((o = this.findIndex(t, this.expandedRows)), (l = o > -1)),
        l
          ? (o == null && (o = this.findIndex(t, this.expandedRows)),
            n.splice(o, 1),
            this.$emit("update:expandedRows", n),
            this.$emit("row-collapse", e))
          : (n.push(t),
            this.$emit("update:expandedRows", n),
            this.$emit("row-expand", e));
    },
    toggleRowGroup(e) {
      const t = e.originalEvent,
        l = e.data,
        o = y.resolveFieldData(l, this.groupRowsBy);
      let n = this.expandedRowGroups ? [...this.expandedRowGroups] : [];
      this.isRowGroupExpanded(l)
        ? ((n = n.filter(i => i !== o)),
          this.$emit("update:expandedRowGroups", n),
          this.$emit("rowgroup-collapse", { originalEvent: t, data: o }))
        : (n.push(o),
          this.$emit("update:expandedRowGroups", n),
          this.$emit("rowgroup-expand", { originalEvent: t, data: o }));
    },
    isRowGroupExpanded(e) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let t = y.resolveFieldData(e, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(t) > -1;
      }
      return !1;
    },
    isStateful() {
      return this.stateKey != null;
    },
    getStorage() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(
            this.stateStorage +
              ' is not a valid value for the state storage, supported values are "local" and "session".',
          );
      }
    },
    saveState() {
      const e = this.getStorage();
      let t = {};
      this.paginator && ((t.first = this.d_first), (t.rows = this.d_rows)),
        this.d_sortField &&
          ((t.sortField = this.d_sortField), (t.sortOrder = this.d_sortOrder)),
        this.d_multiSortMeta && (t.multiSortMeta = this.d_multiSortMeta),
        this.hasFilters && (t.filters = this.filters),
        this.resizableColumns && this.saveColumnWidths(t),
        this.reorderableColumns && (t.columnOrder = this.d_columnOrder),
        this.expandedRows &&
          ((t.expandedRows = this.expandedRows),
          (t.expandedRowKeys = this.d_expandedRowKeys)),
        this.expandedRowGroups &&
          (t.expandedRowGroups = this.expandedRowGroups),
        this.selection &&
          ((t.selection = this.selection),
          (t.selectionKeys = this.d_selectionKeys)),
        Object.keys(t).length && e.setItem(this.stateKey, JSON.stringify(t)),
        this.$emit("state-save", t);
    },
    restoreState() {
      const t = this.getStorage().getItem(this.stateKey),
        l = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
        o = function (n, i) {
          return typeof i == "string" && l.test(i) ? new Date(i) : i;
        };
      if (t) {
        let n = JSON.parse(t, o);
        this.paginator && ((this.d_first = n.first), (this.d_rows = n.rows)),
          n.sortField &&
            ((this.d_sortField = n.sortField),
            (this.d_sortOrder = n.sortOrder)),
          n.multiSortMeta && (this.d_multiSortMeta = n.multiSortMeta),
          n.filters && this.$emit("update:filters", n.filters),
          this.resizableColumns &&
            ((this.columnWidthsState = n.columnWidths),
            (this.tableWidthState = n.tableWidth)),
          this.reorderableColumns && (this.d_columnOrder = n.columnOrder),
          n.expandedRows &&
            ((this.d_expandedRowKeys = n.expandedRowKeys),
            this.$emit("update:expandedRows", n.expandedRows)),
          n.expandedRowGroups &&
            this.$emit("update:expandedRowGroups", n.expandedRowGroups),
          n.selection &&
            ((this.d_selectionKeys = n.d_selectionKeys),
            this.$emit("update:selection", n.selection)),
          this.$emit("state-restore", n);
      }
    },
    saveColumnWidths(e) {
      let t = [];
      f
        .find(this.$el, ".p-datatable-thead > tr > th")
        .forEach(o => t.push(f.getOuterWidth(o))),
        (e.columnWidths = t.join(",")),
        this.columnResizeMode === "expand" &&
          (e.tableWidth = f.getOuterWidth(this.$refs.table) + "px");
    },
    restoreColumnWidths() {
      if (this.columnWidthsState) {
        let e = this.columnWidthsState.split(",");
        if (
          (this.columnResizeMode === "expand" &&
            this.tableWidthState &&
            ((this.$refs.table.style.width = this.tableWidthState),
            (this.$refs.table.style.minWidth = this.tableWidthState),
            (this.$el.style.width = this.tableWidthState)),
          y.isNotEmpty(e))
        ) {
          this.createStyleElement();
          let t = "";
          e.forEach((l, o) => {
            let n = this.scrollable
              ? `flex: 1 1 ${l}px !important`
              : `width: ${l}px !important`;
            t += `
                            .p-datatable[${
                              this.attributeSelector
                            }] .p-datatable-thead > tr > th:nth-child(${o + 1}),
                            .p-datatable[${
                              this.attributeSelector
                            }] .p-datatable-tbody > tr > td:nth-child(${o + 1}),
                            .p-datatable[${
                              this.attributeSelector
                            }] .p-datatable-tfoot > tr > td:nth-child(${
              o + 1
            }) {
                                ${n}
                            }
                        `;
          }),
            (this.styleElement.innerHTML = t);
        }
      }
    },
    onCellEditInit(e) {
      this.$emit("cell-edit-init", e);
    },
    onCellEditComplete(e) {
      this.$emit("cell-edit-complete", e);
    },
    onCellEditCancel(e) {
      this.$emit("cell-edit-cancel", e);
    },
    onRowEditInit(e) {
      let t = this.editingRows ? [...this.editingRows] : [];
      t.push(e.data),
        this.$emit("update:editingRows", t),
        this.$emit("row-edit-init", e);
    },
    onRowEditSave(e) {
      let t = [...this.editingRows];
      t.splice(this.findIndex(e.data, t), 1),
        this.$emit("update:editingRows", t),
        this.$emit("row-edit-save", e);
    },
    onRowEditCancel(e) {
      let t = [...this.editingRows];
      t.splice(this.findIndex(e.data, t), 1),
        this.$emit("update:editingRows", t),
        this.$emit("row-edit-cancel", e);
    },
    onEditingMetaChange(e) {
      let { data: t, field: l, index: o, editing: n } = e,
        i = { ...this.d_editingMeta },
        r = i[o];
      if (n)
        !r && (r = i[o] = { data: { ...t }, fields: [] }), r.fields.push(l);
      else if (r) {
        const c = r.fields.filter(h => h !== l);
        c.length ? (r.fields = c) : delete i[o];
      }
      this.d_editingMeta = i;
    },
    clearEditingMetaData() {
      this.editMode && (this.d_editingMeta = {});
    },
    createLazyLoadEvent(e) {
      return {
        originalEvent: e,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.d_filters,
      };
    },
    hasGlobalFilter() {
      return (
        this.filters &&
        Object.prototype.hasOwnProperty.call(this.filters, "global")
      );
    },
    getChildren() {
      return this.$slots.default ? this.$slots.default() : null;
    },
    onFilterChange(e) {
      this.d_filters = e;
    },
    onFilterApply() {
      (this.d_first = 0),
        this.$emit("update:first", this.d_first),
        this.$emit("update:filters", this.d_filters),
        this.lazy && this.$emit("filter", this.createLazyLoadEvent());
    },
    cloneFilters() {
      let e = {};
      return (
        this.filters &&
          Object.entries(this.filters).forEach(([t, l]) => {
            e[t] = l.operator
              ? {
                  operator: l.operator,
                  constraints: l.constraints.map(o => ({ ...o })),
                }
              : { ...l };
          }),
        e
      );
    },
    updateReorderableColumns() {
      let e = [];
      this.columns.forEach(t =>
        e.push(this.columnProp(t, "columnKey") || this.columnProp(t, "field")),
      ),
        (this.d_columnOrder = e);
    },
    createStyleElement() {
      (this.styleElement = document.createElement("style")),
        (this.styleElement.type = "text/css"),
        document.head.appendChild(this.styleElement);
    },
    createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        (this.responsiveStyleElement = document.createElement("style")),
          (this.responsiveStyleElement.type = "text/css"),
          document.head.appendChild(this.responsiveStyleElement);
        let e = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,
    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;
        this.responsiveStyleElement.innerHTML = e;
      }
    },
    destroyResponsiveStyle() {
      this.responsiveStyleElement &&
        (document.head.removeChild(this.responsiveStyleElement),
        (this.responsiveStyleElement = null));
    },
    destroyStyleElement() {
      this.styleElement &&
        (document.head.removeChild(this.styleElement),
        (this.styleElement = null));
    },
    recursiveGetChildren(e, t) {
      return (
        t || (t = []),
        e &&
          e.length &&
          e.forEach(l => {
            l.children instanceof Array
              ? t.concat(this.recursiveGetChildren(l.children, t))
              : l.type.name == "Column" && t.push(l);
          }),
        t
      );
    },
    dataToRender(e) {
      const t = e || this.processedData;
      if (t && this.paginator) {
        const l = this.lazy ? 0 : this.d_first;
        return t.slice(l, l + this.d_rows);
      }
      return t;
    },
    getVirtualScrollerRef() {
      return this.$refs.virtualScroller;
    },
  },
  computed: {
    containerClass() {
      return [
        "p-datatable p-component",
        {
          "p-datatable-hoverable-rows": this.rowHover || this.selectionMode,
          "p-datatable-auto-layout": this.autoLayout,
          "p-datatable-resizable": this.resizableColumns,
          "p-datatable-resizable-fit":
            this.resizableColumns && this.columnResizeMode === "fit",
          "p-datatable-scrollable": this.scrollable,
          "p-datatable-scrollable-vertical":
            this.scrollable && this.scrollDirection === "vertical",
          "p-datatable-scrollable-horizontal":
            this.scrollable && this.scrollDirection === "horizontal",
          "p-datatable-scrollable-both":
            this.scrollable && this.scrollDirection === "both",
          "p-datatable-flex-scrollable":
            this.scrollable && this.scrollHeight === "flex",
          "p-datatable-responsive-stack": this.responsiveLayout === "stack",
          "p-datatable-responsive-scroll": this.responsiveLayout === "scroll",
          "p-datatable-striped": this.stripedRows,
          "p-datatable-gridlines": this.showGridlines,
          "p-datatable-grouped-header": this.headerColumnGroup != null,
          "p-datatable-grouped-footer": this.footerColumnGroup != null,
        },
      ];
    },
    columns() {
      let e = this.getChildren();
      if (!e) return;
      const t = this.recursiveGetChildren(e, []);
      if (this.reorderableColumns && this.d_columnOrder) {
        let l = [];
        for (let o of this.d_columnOrder) {
          let n = this.findColumnByKey(t, o);
          n && !this.columnProp(n, "hidden") && l.push(n);
        }
        return [...l, ...t.filter(o => l.indexOf(o) < 0)];
      }
      return t;
    },
    headerColumnGroup() {
      const e = this.getChildren();
      if (e) {
        for (let t of e)
          if (
            t.type.name === "ColumnGroup" &&
            this.columnProp(t, "type") === "header"
          )
            return t;
      }
      return null;
    },
    footerColumnGroup() {
      const e = this.getChildren();
      if (e) {
        for (let t of e)
          if (
            t.type.name === "ColumnGroup" &&
            this.columnProp(t, "type") === "footer"
          )
            return t;
      }
      return null;
    },
    hasFilters() {
      return (
        this.filters &&
        Object.keys(this.filters).length > 0 &&
        this.filters.constructor === Object
      );
    },
    processedData() {
      let e = this.value || [];
      return (
        this.lazy ||
          (e &&
            e.length &&
            (this.hasFilters && (e = this.filter(e)),
            this.sorted &&
              (this.sortMode === "single"
                ? (e = this.sortSingle(e))
                : this.sortMode === "multiple" && (e = this.sortMultiple(e))))),
        e
      );
    },
    totalRecordsLength() {
      if (this.lazy) return this.totalRecords;
      {
        const e = this.processedData;
        return e ? e.length : 0;
      }
    },
    empty() {
      const e = this.processedData;
      return !e || e.length === 0;
    },
    paginatorTop() {
      return (
        this.paginator &&
        (this.paginatorPosition !== "bottom" ||
          this.paginatorPosition === "both")
      );
    },
    paginatorBottom() {
      return (
        this.paginator &&
        (this.paginatorPosition !== "top" || this.paginatorPosition === "both")
      );
    },
    sorted() {
      return (
        this.d_sortField ||
        (this.d_multiSortMeta && this.d_multiSortMeta.length > 0)
      );
    },
    loadingIconClass() {
      return ["p-datatable-loading-icon pi-spin", this.loadingIcon];
    },
    allRowsSelected() {
      if (this.selectAll !== null) return this.selectAll;
      {
        const e = this.frozenValue
          ? [...this.frozenValue, ...this.processedData]
          : this.processedData;
        return (
          y.isNotEmpty(e) &&
          this.selection &&
          Array.isArray(this.selection) &&
          e.every(t => this.selection.some(l => this.equals(l, t)))
        );
      }
    },
    attributeSelector() {
      return A();
    },
    groupRowSortField() {
      return this.sortMode === "single"
        ? this.sortField
        : this.d_groupRowsSortMeta
        ? this.d_groupRowsSortMeta.field
        : null;
    },
    virtualScrollerDisabled() {
      return y.isEmpty(this.virtualScrollerOptions) || !this.scrollable;
    },
  },
  components: {
    DTPaginator: re,
    DTTableHeader: fe,
    DTTableBody: ue,
    DTTableFooter: he,
    DTVirtualScroller: ve,
  },
};
const ll = { key: 0, class: "p-datatable-loading-overlay p-component-overlay" },
  il = { key: 1, class: "p-datatable-header" },
  nl = { key: 3, class: "p-datatable-footer" },
  ol = {
    ref: "resizeHelper",
    class: "p-column-resizer-helper",
    style: { display: "none" },
  },
  rl = {
    key: 5,
    ref: "reorderIndicatorUp",
    class: "pi pi-arrow-down p-datatable-reorder-indicator-up",
    style: { position: "absolute", display: "none" },
  },
  al = {
    key: 6,
    ref: "reorderIndicatorDown",
    class: "pi pi-arrow-up p-datatable-reorder-indicator-down",
    style: { position: "absolute", display: "none" },
  };
function sl(e, t, l, o, n, i) {
  const r = C("DTPaginator"),
    c = C("DTTableHeader"),
    h = C("DTTableBody"),
    s = C("DTTableFooter"),
    m = C("DTVirtualScroller");
  return (
    a(),
    p(
      "div",
      {
        class: R(i.containerClass),
        "data-scrollselectors": ".p-datatable-wrapper",
      },
      [
        E(e.$slots, "default"),
        l.loading
          ? (a(),
            p("div", ll, [
              e.$slots.loading
                ? E(e.$slots, "loading", { key: 0 })
                : (a(),
                  p("i", { key: 1, class: R(i.loadingIconClass) }, null, 2)),
            ]))
          : g("", !0),
        e.$slots.header
          ? (a(), p("div", il, [E(e.$slots, "header")]))
          : g("", !0),
        i.paginatorTop
          ? (a(),
            w(
              r,
              {
                key: 2,
                rows: n.d_rows,
                first: n.d_first,
                totalRecords: i.totalRecordsLength,
                pageLinkSize: l.pageLinkSize,
                template: l.paginatorTemplate,
                rowsPerPageOptions: l.rowsPerPageOptions,
                currentPageReportTemplate: l.currentPageReportTemplate,
                class: "p-paginator-top",
                onPage: t[0] || (t[0] = u => i.onPage(u)),
                alwaysShow: l.alwaysShowPaginator,
              },
              Y({ _: 2 }, [
                e.$slots.paginatorstart
                  ? {
                      name: "start",
                      fn: T(() => [E(e.$slots, "paginatorstart")]),
                      key: "0",
                    }
                  : void 0,
                e.$slots.paginatorend
                  ? {
                      name: "end",
                      fn: T(() => [E(e.$slots, "paginatorend")]),
                      key: "1",
                    }
                  : void 0,
              ]),
              1032,
              [
                "rows",
                "first",
                "totalRecords",
                "pageLinkSize",
                "template",
                "rowsPerPageOptions",
                "currentPageReportTemplate",
                "alwaysShow",
              ],
            ))
          : g("", !0),
        b(
          "div",
          {
            class: "p-datatable-wrapper",
            style: F({
              maxHeight: i.virtualScrollerDisabled ? l.scrollHeight : "",
            }),
          },
          [
            L(
              m,
              _({ ref: "virtualScroller" }, l.virtualScrollerOptions, {
                items: i.processedData,
                columns: i.columns,
                style: { height: l.scrollHeight },
                disabled: i.virtualScrollerDisabled,
                loaderDisabled: "",
                showSpacer: !1,
              }),
              {
                content: T(u => [
                  b(
                    "table",
                    _(
                      {
                        ref: "table",
                        role: "table",
                        class: [l.tableClass, "p-datatable-table"],
                        style: [l.tableStyle, u.spacerStyle],
                      },
                      l.tableProps,
                    ),
                    [
                      L(
                        c,
                        {
                          columnGroup: i.headerColumnGroup,
                          columns: u.columns,
                          rowGroupMode: l.rowGroupMode,
                          groupRowsBy: l.groupRowsBy,
                          groupRowSortField: i.groupRowSortField,
                          reorderableColumns: l.reorderableColumns,
                          resizableColumns: l.resizableColumns,
                          allRowsSelected: i.allRowsSelected,
                          empty: i.empty,
                          sortMode: l.sortMode,
                          sortField: n.d_sortField,
                          sortOrder: n.d_sortOrder,
                          multiSortMeta: n.d_multiSortMeta,
                          filters: n.d_filters,
                          filtersStore: l.filters,
                          filterDisplay: l.filterDisplay,
                          filterInputProps: l.filterInputProps,
                          onColumnClick:
                            t[1] || (t[1] = d => i.onColumnHeaderClick(d)),
                          onColumnMousedown:
                            t[2] || (t[2] = d => i.onColumnHeaderMouseDown(d)),
                          onFilterChange: i.onFilterChange,
                          onFilterApply: i.onFilterApply,
                          onColumnDragstart:
                            t[3] || (t[3] = d => i.onColumnHeaderDragStart(d)),
                          onColumnDragover:
                            t[4] || (t[4] = d => i.onColumnHeaderDragOver(d)),
                          onColumnDragleave:
                            t[5] || (t[5] = d => i.onColumnHeaderDragLeave(d)),
                          onColumnDrop:
                            t[6] || (t[6] = d => i.onColumnHeaderDrop(d)),
                          onColumnResizestart:
                            t[7] || (t[7] = d => i.onColumnResizeStart(d)),
                          onCheckboxChange:
                            t[8] || (t[8] = d => i.toggleRowsWithCheckbox(d)),
                        },
                        null,
                        8,
                        [
                          "columnGroup",
                          "columns",
                          "rowGroupMode",
                          "groupRowsBy",
                          "groupRowSortField",
                          "reorderableColumns",
                          "resizableColumns",
                          "allRowsSelected",
                          "empty",
                          "sortMode",
                          "sortField",
                          "sortOrder",
                          "multiSortMeta",
                          "filters",
                          "filtersStore",
                          "filterDisplay",
                          "filterInputProps",
                          "onFilterChange",
                          "onFilterApply",
                        ],
                      ),
                      l.frozenValue
                        ? (a(),
                          w(
                            h,
                            {
                              key: 0,
                              ref: "frozenBodyRef",
                              value: l.frozenValue,
                              frozenRow: !0,
                              class: "p-datatable-frozen-tbody",
                              columns: u.columns,
                              dataKey: l.dataKey,
                              selection: l.selection,
                              selectionKeys: n.d_selectionKeys,
                              selectionMode: l.selectionMode,
                              contextMenu: l.contextMenu,
                              contextMenuSelection: l.contextMenuSelection,
                              rowGroupMode: l.rowGroupMode,
                              groupRowsBy: l.groupRowsBy,
                              expandableRowGroups: l.expandableRowGroups,
                              rowClass: l.rowClass,
                              rowStyle: l.rowStyle,
                              editMode: l.editMode,
                              compareSelectionBy: l.compareSelectionBy,
                              scrollable: l.scrollable,
                              expandedRowIcon: l.expandedRowIcon,
                              collapsedRowIcon: l.collapsedRowIcon,
                              expandedRows: l.expandedRows,
                              expandedRowKeys: n.d_expandedRowKeys,
                              expandedRowGroups: l.expandedRowGroups,
                              editingRows: l.editingRows,
                              editingRowKeys: n.d_editingRowKeys,
                              templates: e.$slots,
                              responsiveLayout: l.responsiveLayout,
                              isVirtualScrollerDisabled: !0,
                              onRowgroupToggle: i.toggleRowGroup,
                              onRowClick: t[9] || (t[9] = d => i.onRowClick(d)),
                              onRowDblclick:
                                t[10] || (t[10] = d => i.onRowDblClick(d)),
                              onRowRightclick:
                                t[11] || (t[11] = d => i.onRowRightClick(d)),
                              onRowTouchend: i.onRowTouchEnd,
                              onRowKeydown: i.onRowKeyDown,
                              onRowMousedown: i.onRowMouseDown,
                              onRowDragstart:
                                t[12] || (t[12] = d => i.onRowDragStart(d)),
                              onRowDragover:
                                t[13] || (t[13] = d => i.onRowDragOver(d)),
                              onRowDragleave:
                                t[14] || (t[14] = d => i.onRowDragLeave(d)),
                              onRowDragend:
                                t[15] || (t[15] = d => i.onRowDragEnd(d)),
                              onRowDrop: t[16] || (t[16] = d => i.onRowDrop(d)),
                              onRowToggle:
                                t[17] || (t[17] = d => i.toggleRow(d)),
                              onRadioChange:
                                t[18] || (t[18] = d => i.toggleRowWithRadio(d)),
                              onCheckboxChange:
                                t[19] ||
                                (t[19] = d => i.toggleRowWithCheckbox(d)),
                              onCellEditInit:
                                t[20] || (t[20] = d => i.onCellEditInit(d)),
                              onCellEditComplete:
                                t[21] || (t[21] = d => i.onCellEditComplete(d)),
                              onCellEditCancel:
                                t[22] || (t[22] = d => i.onCellEditCancel(d)),
                              onRowEditInit:
                                t[23] || (t[23] = d => i.onRowEditInit(d)),
                              onRowEditSave:
                                t[24] || (t[24] = d => i.onRowEditSave(d)),
                              onRowEditCancel:
                                t[25] || (t[25] = d => i.onRowEditCancel(d)),
                              editingMeta: n.d_editingMeta,
                              onEditingMetaChange: i.onEditingMetaChange,
                            },
                            null,
                            8,
                            [
                              "value",
                              "columns",
                              "dataKey",
                              "selection",
                              "selectionKeys",
                              "selectionMode",
                              "contextMenu",
                              "contextMenuSelection",
                              "rowGroupMode",
                              "groupRowsBy",
                              "expandableRowGroups",
                              "rowClass",
                              "rowStyle",
                              "editMode",
                              "compareSelectionBy",
                              "scrollable",
                              "expandedRowIcon",
                              "collapsedRowIcon",
                              "expandedRows",
                              "expandedRowKeys",
                              "expandedRowGroups",
                              "editingRows",
                              "editingRowKeys",
                              "templates",
                              "responsiveLayout",
                              "onRowgroupToggle",
                              "onRowTouchend",
                              "onRowKeydown",
                              "onRowMousedown",
                              "editingMeta",
                              "onEditingMetaChange",
                            ],
                          ))
                        : g("", !0),
                      L(
                        h,
                        {
                          ref: "bodyRef",
                          value: i.dataToRender(u.rows),
                          class: R(u.styleClass),
                          columns: u.columns,
                          empty: i.empty,
                          dataKey: l.dataKey,
                          selection: l.selection,
                          selectionKeys: n.d_selectionKeys,
                          selectionMode: l.selectionMode,
                          contextMenu: l.contextMenu,
                          contextMenuSelection: l.contextMenuSelection,
                          rowGroupMode: l.rowGroupMode,
                          groupRowsBy: l.groupRowsBy,
                          expandableRowGroups: l.expandableRowGroups,
                          rowClass: l.rowClass,
                          rowStyle: l.rowStyle,
                          editMode: l.editMode,
                          compareSelectionBy: l.compareSelectionBy,
                          scrollable: l.scrollable,
                          expandedRowIcon: l.expandedRowIcon,
                          collapsedRowIcon: l.collapsedRowIcon,
                          expandedRows: l.expandedRows,
                          expandedRowKeys: n.d_expandedRowKeys,
                          expandedRowGroups: l.expandedRowGroups,
                          editingRows: l.editingRows,
                          editingRowKeys: n.d_editingRowKeys,
                          templates: e.$slots,
                          responsiveLayout: l.responsiveLayout,
                          virtualScrollerContentProps: u,
                          isVirtualScrollerDisabled: i.virtualScrollerDisabled,
                          onRowgroupToggle: i.toggleRowGroup,
                          onRowClick: t[26] || (t[26] = d => i.onRowClick(d)),
                          onRowDblclick:
                            t[27] || (t[27] = d => i.onRowDblClick(d)),
                          onRowRightclick:
                            t[28] || (t[28] = d => i.onRowRightClick(d)),
                          onRowTouchend: i.onRowTouchEnd,
                          onRowKeydown: d => i.onRowKeyDown(d, u),
                          onRowMousedown: i.onRowMouseDown,
                          onRowDragstart:
                            t[29] || (t[29] = d => i.onRowDragStart(d)),
                          onRowDragover:
                            t[30] || (t[30] = d => i.onRowDragOver(d)),
                          onRowDragleave:
                            t[31] || (t[31] = d => i.onRowDragLeave(d)),
                          onRowDragend:
                            t[32] || (t[32] = d => i.onRowDragEnd(d)),
                          onRowDrop: t[33] || (t[33] = d => i.onRowDrop(d)),
                          onRowToggle: t[34] || (t[34] = d => i.toggleRow(d)),
                          onRadioChange:
                            t[35] || (t[35] = d => i.toggleRowWithRadio(d)),
                          onCheckboxChange:
                            t[36] || (t[36] = d => i.toggleRowWithCheckbox(d)),
                          onCellEditInit:
                            t[37] || (t[37] = d => i.onCellEditInit(d)),
                          onCellEditComplete:
                            t[38] || (t[38] = d => i.onCellEditComplete(d)),
                          onCellEditCancel:
                            t[39] || (t[39] = d => i.onCellEditCancel(d)),
                          onRowEditInit:
                            t[40] || (t[40] = d => i.onRowEditInit(d)),
                          onRowEditSave:
                            t[41] || (t[41] = d => i.onRowEditSave(d)),
                          onRowEditCancel:
                            t[42] || (t[42] = d => i.onRowEditCancel(d)),
                          editingMeta: n.d_editingMeta,
                          onEditingMetaChange: i.onEditingMetaChange,
                        },
                        null,
                        8,
                        [
                          "value",
                          "class",
                          "columns",
                          "empty",
                          "dataKey",
                          "selection",
                          "selectionKeys",
                          "selectionMode",
                          "contextMenu",
                          "contextMenuSelection",
                          "rowGroupMode",
                          "groupRowsBy",
                          "expandableRowGroups",
                          "rowClass",
                          "rowStyle",
                          "editMode",
                          "compareSelectionBy",
                          "scrollable",
                          "expandedRowIcon",
                          "collapsedRowIcon",
                          "expandedRows",
                          "expandedRowKeys",
                          "expandedRowGroups",
                          "editingRows",
                          "editingRowKeys",
                          "templates",
                          "responsiveLayout",
                          "virtualScrollerContentProps",
                          "isVirtualScrollerDisabled",
                          "onRowgroupToggle",
                          "onRowTouchend",
                          "onRowKeydown",
                          "onRowMousedown",
                          "editingMeta",
                          "onEditingMetaChange",
                        ],
                      ),
                      L(
                        s,
                        {
                          columnGroup: i.footerColumnGroup,
                          columns: u.columns,
                        },
                        null,
                        8,
                        ["columnGroup", "columns"],
                      ),
                    ],
                    16,
                  ),
                ]),
                _: 1,
              },
              16,
              ["items", "columns", "style", "disabled"],
            ),
          ],
          4,
        ),
        e.$slots.footer
          ? (a(), p("div", nl, [E(e.$slots, "footer")]))
          : g("", !0),
        i.paginatorBottom
          ? (a(),
            w(
              r,
              {
                key: 4,
                rows: n.d_rows,
                first: n.d_first,
                totalRecords: i.totalRecordsLength,
                pageLinkSize: l.pageLinkSize,
                template: l.paginatorTemplate,
                rowsPerPageOptions: l.rowsPerPageOptions,
                currentPageReportTemplate: l.currentPageReportTemplate,
                class: "p-paginator-bottom",
                onPage: t[43] || (t[43] = u => i.onPage(u)),
                alwaysShow: l.alwaysShowPaginator,
              },
              Y({ _: 2 }, [
                e.$slots.paginatorstart
                  ? {
                      name: "start",
                      fn: T(() => [E(e.$slots, "paginatorstart")]),
                      key: "0",
                    }
                  : void 0,
                e.$slots.paginatorend
                  ? {
                      name: "end",
                      fn: T(() => [E(e.$slots, "paginatorend")]),
                      key: "1",
                    }
                  : void 0,
              ]),
              1032,
              [
                "rows",
                "first",
                "totalRecords",
                "pageLinkSize",
                "template",
                "rowsPerPageOptions",
                "currentPageReportTemplate",
                "alwaysShow",
              ],
            ))
          : g("", !0),
        b("div", ol, null, 512),
        l.reorderableColumns ? (a(), p("span", rl, null, 512)) : g("", !0),
        l.reorderableColumns ? (a(), p("span", al, null, 512)) : g("", !0),
      ],
      2,
    )
  );
}
function dl(e, t) {
  t === void 0 && (t = {});
  var l = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    (n.type = "text/css"),
      l === "top" && o.firstChild
        ? o.insertBefore(n, o.firstChild)
        : o.appendChild(n),
      n.styleSheet
        ? (n.styleSheet.cssText = e)
        : n.appendChild(document.createTextNode(e));
  }
}
var ul = `
.p-datatable {
    position: relative;
}
.p-datatable table {
    border-collapse: collapse;
    min-width: 100%;
    table-layout: fixed;
}
.p-datatable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}
.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}
.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.p-datatable-responsive-scroll > .p-datatable-wrapper {
    overflow-x: auto;
}
.p-datatable-responsive-scroll > .p-datatable-wrapper > table,
.p-datatable-auto-layout > .p-datatable-wrapper > table {
    table-layout: auto;
}
.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

/* Scrollable */
.p-datatable-scrollable .p-datatable-wrapper {
    position: relative;
    overflow: auto;
}
.p-datatable-scrollable .p-datatable-thead,
.p-datatable-scrollable .p-datatable-tbody,
.p-datatable-scrollable .p-datatable-tfoot {
    display: block;
}
.p-datatable-scrollable .p-datatable-thead > tr,
.p-datatable-scrollable .p-datatable-tbody > tr,
.p-datatable-scrollable .p-datatable-tfoot > tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}
.p-datatable-scrollable .p-datatable-thead > tr > th,
.p-datatable-scrollable .p-datatable-tbody > tr > td,
.p-datatable-scrollable .p-datatable-tfoot > tr > td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}
.p-datatable-scrollable .p-datatable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}
.p-datatable-scrollable .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 1;
}
.p-datatable-scrollable .p-datatable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}
.p-datatable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}
.p-datatable-scrollable th.p-frozen-column {
    z-index: 1;
}
.p-datatable-scrollable-both .p-datatable-thead > tr > th,
.p-datatable-scrollable-both .p-datatable-tbody > tr > td,
.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,
.p-datatable-scrollable-horizontal .p-datatable-thead > tr > th .p-datatable-scrollable-horizontal .p-datatable-tbody > tr > td,
.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {
    flex: 1 0 auto;
}
.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.p-datatable-flex-scrollable .p-datatable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}
.p-datatable-scrollable .p-rowgroup-header {
    position: sticky;
    z-index: 1;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {
    display: table;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {
    display: table-row;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr > td {
    display: table-cell;
}
.p-datatable-scrollable .p-virtualscroller > .p-datatable-table {
    display: inline-block; /* For Safari */
}

/* Resizable */
.p-datatable-resizable > .p-datatable-wrapper {
    overflow-x: auto;
}
.p-datatable-resizable .p-datatable-thead > tr > th,
.p-datatable-resizable .p-datatable-tfoot > tr > td,
.p-datatable-resizable .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}
.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}
.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}
.p-datatable .p-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}
.p-datatable .p-column-header-content {
    display: flex;
    align-items: center;
}
.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}
.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Expand */
.p-datatable .p-row-toggler {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Reorder */
.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}
.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

/* Loader */
.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Filter */
.p-column-filter-row {
    display: flex;
    align-items: center;
    width: 100%;
}
.p-column-filter-menu {
    display: inline-flex;
    margin-left: auto;
}
.p-column-filter-row .p-column-filter-element {
    flex: 1 1 auto;
    width: 1%;
}
.p-column-filter-menu-button,
.p-column-filter-clear-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-column-filter-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-column-filter-row-items {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-column-filter-row-item {
    cursor: pointer;
}
.p-column-filter-add-button,
.p-column-filter-remove-button {
    justify-content: center;
}
.p-column-filter-add-button .p-button-label,
.p-column-filter-remove-button .p-button-label {
    flex-grow: 0;
}
.p-column-filter-buttonbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
    width: auto;
}

/* Responsive */
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    display: none;
}

/* VirtualScroller */
.p-datatable .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}
`;
dl(ul);
tl.render = sl;
var ml = {
  name: "Column",
  props: {
    columnKey: { type: null, default: null },
    field: { type: [String, Function], default: null },
    sortField: { type: [String, Function], default: null },
    filterField: { type: [String, Function], default: null },
    dataType: { type: String, default: "text" },
    sortable: { type: Boolean, default: !1 },
    header: { type: null, default: null },
    footer: { type: null, default: null },
    style: { type: null, default: null },
    class: { type: String, default: null },
    headerStyle: { type: null, default: null },
    headerClass: { type: String, default: null },
    bodyStyle: { type: null, default: null },
    bodyClass: { type: String, default: null },
    footerStyle: { type: null, default: null },
    footerClass: { type: String, default: null },
    showFilterMenu: { type: Boolean, default: !0 },
    showFilterOperator: { type: Boolean, default: !0 },
    showClearButton: { type: Boolean, default: !0 },
    showApplyButton: { type: Boolean, default: !0 },
    showFilterMatchModes: { type: Boolean, default: !0 },
    showAddButton: { type: Boolean, default: !0 },
    filterMatchModeOptions: { type: Array, default: null },
    maxConstraints: { type: Number, default: 2 },
    excludeGlobalFilter: { type: Boolean, default: !1 },
    filterHeaderClass: { type: String, default: null },
    filterHeaderStyle: { type: null, default: null },
    filterMenuClass: { type: String, default: null },
    filterMenuStyle: { type: null, default: null },
    selectionMode: { type: String, default: null },
    expander: { type: Boolean, default: !1 },
    colspan: { type: Number, default: null },
    rowspan: { type: Number, default: null },
    rowReorder: { type: Boolean, default: !1 },
    rowReorderIcon: { type: String, default: "pi pi-bars" },
    reorderableColumn: { type: Boolean, default: !0 },
    rowEditor: { type: Boolean, default: !1 },
    frozen: { type: Boolean, default: !1 },
    alignFrozen: { type: String, default: "left" },
    exportable: { type: Boolean, default: !0 },
    exportHeader: { type: String, default: null },
    exportFooter: { type: String, default: null },
    filterMatchMode: { type: String, default: null },
    hidden: { type: Boolean, default: !1 },
  },
  render() {
    return null;
  },
};
export { tl as a, ml as s };
