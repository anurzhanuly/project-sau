import {
  H as w,
  m as S,
  q as B,
  L as I,
  f as g,
  g as _,
  i as x,
  N as m,
  al as b,
  E as y,
  W as D,
  G as V,
} from "./index.c7985898.js";
var k = {
  name: "InputNumber",
  emits: ["update:modelValue", "input", "focus", "blur"],
  props: {
    modelValue: { type: Number, default: null },
    format: { type: Boolean, default: !0 },
    showButtons: { type: Boolean, default: !1 },
    buttonLayout: { type: String, default: "stacked" },
    incrementButtonClass: { type: String, default: null },
    decrementButtonClass: { type: String, default: null },
    incrementButtonIcon: { type: String, default: "pi pi-angle-up" },
    decrementButtonIcon: { type: String, default: "pi pi-angle-down" },
    locale: { type: String, default: void 0 },
    localeMatcher: { type: String, default: void 0 },
    mode: { type: String, default: "decimal" },
    prefix: { type: String, default: null },
    suffix: { type: String, default: null },
    currency: { type: String, default: void 0 },
    currencyDisplay: { type: String, default: void 0 },
    useGrouping: { type: Boolean, default: !0 },
    minFractionDigits: { type: Number, default: void 0 },
    maxFractionDigits: { type: Number, default: void 0 },
    min: { type: Number, default: null },
    max: { type: Number, default: null },
    step: { type: Number, default: 1 },
    allowEmpty: { type: Boolean, default: !0 },
    highlightOnFocus: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, default: null },
    inputId: { type: String, default: null },
    inputClass: { type: String, default: null },
    inputStyle: { type: null, default: null },
    inputProps: { type: null, default: null },
    incrementButtonProps: { type: null, default: null },
    decrementButtonProps: { type: null, default: null },
    "aria-labelledby": { type: String, default: null },
    "aria-label": { type: String, default: null },
  },
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: "",
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data() {
    return { d_modelValue: this.modelValue, focused: !1 };
  },
  watch: {
    modelValue(e) {
      this.d_modelValue = e;
    },
    locale(e, t) {
      this.updateConstructParser(e, t);
    },
    localeMatcher(e, t) {
      this.updateConstructParser(e, t);
    },
    mode(e, t) {
      this.updateConstructParser(e, t);
    },
    currency(e, t) {
      this.updateConstructParser(e, t);
    },
    currencyDisplay(e, t) {
      this.updateConstructParser(e, t);
    },
    useGrouping(e, t) {
      this.updateConstructParser(e, t);
    },
    minFractionDigits(e, t) {
      this.updateConstructParser(e, t);
    },
    maxFractionDigits(e, t) {
      this.updateConstructParser(e, t);
    },
    suffix(e, t) {
      this.updateConstructParser(e, t);
    },
    prefix(e, t) {
      this.updateConstructParser(e, t);
    },
  },
  created() {
    this.constructParser();
  },
  methods: {
    getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits,
      };
    },
    constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      const e = [
          ...new Intl.NumberFormat(this.locale, { useGrouping: !1 }).format(
            9876543210,
          ),
        ].reverse(),
        t = new Map(e.map((i, n) => [i, n]));
      (this._numeral = new RegExp(`[${e.join("")}]`, "g")),
        (this._group = this.getGroupingExpression()),
        (this._minusSign = this.getMinusSignExpression()),
        (this._currency = this.getCurrencyExpression()),
        (this._decimal = this.getDecimalExpression()),
        (this._suffix = this.getSuffixExpression()),
        (this._prefix = this.getPrefixExpression()),
        (this._index = i => t.get(i));
    },
    updateConstructParser(e, t) {
      e !== t && this.constructParser();
    },
    escapeRegExp(e) {
      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    getDecimalExpression() {
      const e = new Intl.NumberFormat(this.locale, {
        ...this.getOptions(),
        useGrouping: !1,
      });
      return new RegExp(
        `[${e
          .format(1.1)
          .replace(this._currency, "")
          .trim()
          .replace(this._numeral, "")}]`,
        "g",
      );
    },
    getGroupingExpression() {
      const e = new Intl.NumberFormat(this.locale, { useGrouping: !0 });
      return (
        (this.groupChar = e
          .format(1e6)
          .trim()
          .replace(this._numeral, "")
          .charAt(0)),
        new RegExp(`[${this.groupChar}]`, "g")
      );
    },
    getMinusSignExpression() {
      const e = new Intl.NumberFormat(this.locale, { useGrouping: !1 });
      return new RegExp(
        `[${e.format(-1).trim().replace(this._numeral, "")}]`,
        "g",
      );
    },
    getCurrencyExpression() {
      if (this.currency) {
        const e = new Intl.NumberFormat(this.locale, {
          style: "currency",
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        return new RegExp(
          `[${e
            .format(1)
            .replace(/\s/g, "")
            .replace(this._numeral, "")
            .replace(this._group, "")}]`,
          "g",
        );
      }
      return new RegExp("[]", "g");
    },
    getPrefixExpression() {
      if (this.prefix) this.prefixChar = this.prefix;
      else {
        const e = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
        });
        this.prefixChar = e.format(1).split("1")[0];
      }
      return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
    },
    getSuffixExpression() {
      if (this.suffix) this.suffixChar = this.suffix;
      else {
        const e = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        this.suffixChar = e.format(1).split("1")[1];
      }
      return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
    },
    formatValue(e) {
      if (e != null) {
        if (e === "-") return e;
        if (this.format) {
          let i = new Intl.NumberFormat(this.locale, this.getOptions()).format(
            e,
          );
          return (
            this.prefix && (i = this.prefix + i),
            this.suffix && (i = i + this.suffix),
            i
          );
        }
        return e.toString();
      }
      return "";
    },
    parseValue(e) {
      let t = e
        .replace(this._suffix, "")
        .replace(this._prefix, "")
        .trim()
        .replace(/\s/g, "")
        .replace(this._currency, "")
        .replace(this._group, "")
        .replace(this._minusSign, "-")
        .replace(this._decimal, ".")
        .replace(this._numeral, this._index);
      if (t) {
        if (t === "-") return t;
        let i = +t;
        return isNaN(i) ? null : i;
      }
      return null;
    },
    repeat(e, t, i) {
      if (this.readonly) return;
      let n = t || 500;
      this.clearTimer(),
        (this.timer = setTimeout(() => {
          this.repeat(e, 40, i);
        }, n)),
        this.spin(e, i);
    },
    spin(e, t) {
      if (this.$refs.input) {
        let i = this.step * t,
          n = this.parseValue(this.$refs.input.$el.value) || 0,
          s = this.validateValue(n + i);
        this.updateInput(s, null, "spin"),
          this.updateModel(e, s),
          this.handleOnInput(e, n, s);
      }
    },
    onUpButtonMouseDown(e) {
      this.disabled ||
        (this.$refs.input.$el.focus(),
        this.repeat(e, null, 1),
        e.preventDefault());
    },
    onUpButtonMouseUp() {
      this.disabled || this.clearTimer();
    },
    onUpButtonMouseLeave() {
      this.disabled || this.clearTimer();
    },
    onUpButtonKeyUp() {
      this.disabled || this.clearTimer();
    },
    onUpButtonKeyDown(e) {
      (e.keyCode === 32 || e.keyCode === 13) && this.repeat(e, null, 1);
    },
    onDownButtonMouseDown(e) {
      this.disabled ||
        (this.$refs.input.$el.focus(),
        this.repeat(e, null, -1),
        e.preventDefault());
    },
    onDownButtonMouseUp() {
      this.disabled || this.clearTimer();
    },
    onDownButtonMouseLeave() {
      this.disabled || this.clearTimer();
    },
    onDownButtonKeyUp() {
      this.disabled || this.clearTimer();
    },
    onDownButtonKeyDown(e) {
      (e.keyCode === 32 || e.keyCode === 13) && this.repeat(e, null, -1);
    },
    onUserInput() {
      this.isSpecialChar && (this.$refs.input.$el.value = this.lastValue),
        (this.isSpecialChar = !1);
    },
    onInputKeyDown(e) {
      if (this.readonly) return;
      if (((this.lastValue = e.target.value), e.shiftKey || e.altKey)) {
        this.isSpecialChar = !0;
        return;
      }
      let t = e.target.selectionStart,
        i = e.target.selectionEnd,
        n = e.target.value,
        s = null;
      switch ((e.altKey && e.preventDefault(), e.code)) {
        case "ArrowUp":
          this.spin(e, 1), e.preventDefault();
          break;
        case "ArrowDown":
          this.spin(e, -1), e.preventDefault();
          break;
        case "ArrowLeft":
          this.isNumeralChar(n.charAt(t - 1)) || e.preventDefault();
          break;
        case "ArrowRight":
          this.isNumeralChar(n.charAt(t)) || e.preventDefault();
          break;
        case "Tab":
        case "Enter":
          (s = this.validateValue(this.parseValue(n))),
            (this.$refs.input.$el.value = this.formatValue(s)),
            this.$refs.input.$el.setAttribute("aria-valuenow", s),
            this.updateModel(e, s);
          break;
        case "Backspace": {
          if ((e.preventDefault(), t === i)) {
            const r = n.charAt(t - 1),
              { decimalCharIndex: l, decimalCharIndexWithoutPrefix: a } =
                this.getDecimalCharIndexes(n);
            if (this.isNumeralChar(r)) {
              const u = this.getDecimalLength(n);
              if (this._group.test(r))
                (this._group.lastIndex = 0),
                  (s = n.slice(0, t - 2) + n.slice(t - 1));
              else if (this._decimal.test(r))
                (this._decimal.lastIndex = 0),
                  u
                    ? this.$refs.input.$el.setSelectionRange(t - 1, t - 1)
                    : (s = n.slice(0, t - 1) + n.slice(t));
              else if (l > 0 && t > l) {
                const h =
                  this.isDecimalMode() && (this.minFractionDigits || 0) < u
                    ? ""
                    : "0";
                s = n.slice(0, t - 1) + h + n.slice(t);
              } else
                a === 1
                  ? ((s = n.slice(0, t - 1) + "0" + n.slice(t)),
                    (s = this.parseValue(s) > 0 ? s : ""))
                  : (s = n.slice(0, t - 1) + n.slice(t));
            }
            this.updateValue(e, s, null, "delete-single");
          } else
            (s = this.deleteRange(n, t, i)),
              this.updateValue(e, s, null, "delete-range");
          break;
        }
        case "Delete":
          if ((e.preventDefault(), t === i)) {
            const r = n.charAt(t),
              { decimalCharIndex: l, decimalCharIndexWithoutPrefix: a } =
                this.getDecimalCharIndexes(n);
            if (this.isNumeralChar(r)) {
              const u = this.getDecimalLength(n);
              if (this._group.test(r))
                (this._group.lastIndex = 0),
                  (s = n.slice(0, t) + n.slice(t + 2));
              else if (this._decimal.test(r))
                (this._decimal.lastIndex = 0),
                  u
                    ? this.$refs.input.$el.setSelectionRange(t + 1, t + 1)
                    : (s = n.slice(0, t) + n.slice(t + 1));
              else if (l > 0 && t > l) {
                const h =
                  this.isDecimalMode() && (this.minFractionDigits || 0) < u
                    ? ""
                    : "0";
                s = n.slice(0, t) + h + n.slice(t + 1);
              } else
                a === 1
                  ? ((s = n.slice(0, t) + "0" + n.slice(t + 1)),
                    (s = this.parseValue(s) > 0 ? s : ""))
                  : (s = n.slice(0, t) + n.slice(t + 1));
            }
            this.updateValue(e, s, null, "delete-back-single");
          } else
            (s = this.deleteRange(n, t, i)),
              this.updateValue(e, s, null, "delete-range");
          break;
        case "Home":
          this.min && (this.updateModel(e, this.min), e.preventDefault());
          break;
        case "End":
          this.max && (this.updateModel(e, this.max), e.preventDefault());
          break;
      }
    },
    onInputKeyPress(e) {
      if (this.readonly) return;
      e.preventDefault();
      let t = e.which || e.keyCode,
        i = String.fromCharCode(t);
      const n = this.isDecimalSign(i),
        s = this.isMinusSign(i);
      ((48 <= t && t <= 57) || s || n) &&
        this.insert(e, i, { isDecimalSign: n, isMinusSign: s });
    },
    onPaste(e) {
      e.preventDefault();
      let t = (e.clipboardData || window.clipboardData).getData("Text");
      if (t) {
        let i = this.parseValue(t);
        i != null && this.insert(e, i.toString());
      }
    },
    allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign(e) {
      return this._minusSign.test(e) || e === "-"
        ? ((this._minusSign.lastIndex = 0), !0)
        : !1;
    },
    isDecimalSign(e) {
      return this._decimal.test(e) ? ((this._decimal.lastIndex = 0), !0) : !1;
    },
    isDecimalMode() {
      return this.mode === "decimal";
    },
    getDecimalCharIndexes(e) {
      let t = e.search(this._decimal);
      this._decimal.lastIndex = 0;
      const n = e
        .replace(this._prefix, "")
        .trim()
        .replace(/\s/g, "")
        .replace(this._currency, "")
        .search(this._decimal);
      return (
        (this._decimal.lastIndex = 0),
        { decimalCharIndex: t, decimalCharIndexWithoutPrefix: n }
      );
    },
    getCharIndexes(e) {
      const t = e.search(this._decimal);
      this._decimal.lastIndex = 0;
      const i = e.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      const n = e.search(this._suffix);
      this._suffix.lastIndex = 0;
      const s = e.search(this._currency);
      return (
        (this._currency.lastIndex = 0),
        {
          decimalCharIndex: t,
          minusCharIndex: i,
          suffixCharIndex: n,
          currencyCharIndex: s,
        }
      );
    },
    insert(e, t, i = { isDecimalSign: !1, isMinusSign: !1 }) {
      const n = t.search(this._minusSign);
      if (((this._minusSign.lastIndex = 0), !this.allowMinusSign() && n !== -1))
        return;
      const s = this.$refs.input.$el.selectionStart,
        r = this.$refs.input.$el.selectionEnd;
      let l = this.$refs.input.$el.value.trim();
      const {
        decimalCharIndex: a,
        minusCharIndex: u,
        suffixCharIndex: h,
        currencyCharIndex: d,
      } = this.getCharIndexes(l);
      let o;
      if (i.isMinusSign)
        s === 0 &&
          ((o = l),
          (u === -1 || r !== 0) && (o = this.insertText(l, t, 0, r)),
          this.updateValue(e, o, t, "insert"));
      else if (i.isDecimalSign)
        a > 0 && s === a
          ? this.updateValue(e, l, t, "insert")
          : a > s && a < r
          ? ((o = this.insertText(l, t, s, r)),
            this.updateValue(e, o, t, "insert"))
          : a === -1 &&
            this.maxFractionDigits &&
            ((o = this.insertText(l, t, s, r)),
            this.updateValue(e, o, t, "insert"));
      else {
        const p = this.numberFormat.resolvedOptions().maximumFractionDigits,
          c = s !== r ? "range-insert" : "insert";
        if (a > 0 && s > a) {
          if (s + t.length - (a + 1) <= p) {
            const f = d >= s ? d - 1 : h >= s ? h : l.length;
            (o = l.slice(0, s) + t + l.slice(s + t.length, f) + l.slice(f)),
              this.updateValue(e, o, t, c);
          }
        } else (o = this.insertText(l, t, s, r)), this.updateValue(e, o, t, c);
      }
    },
    insertText(e, t, i, n) {
      if ((t === "." ? t : t.split(".")).length === 2) {
        const r = e.slice(i, n).search(this._decimal);
        return (
          (this._decimal.lastIndex = 0),
          r > 0
            ? e.slice(0, i) + this.formatValue(t) + e.slice(n)
            : e || this.formatValue(t)
        );
      } else
        return n - i === e.length
          ? this.formatValue(t)
          : i === 0
          ? t + e.slice(n)
          : n === e.length
          ? e.slice(0, i) + t
          : e.slice(0, i) + t + e.slice(n);
    },
    deleteRange(e, t, i) {
      let n;
      return (
        i - t === e.length
          ? (n = "")
          : t === 0
          ? (n = e.slice(i))
          : i === e.length
          ? (n = e.slice(0, t))
          : (n = e.slice(0, t) + e.slice(i)),
        n
      );
    },
    initCursor() {
      let e = this.$refs.input.$el.selectionStart,
        t = this.$refs.input.$el.value,
        i = t.length,
        n = null,
        s = (this.prefixChar || "").length;
      (t = t.replace(this._prefix, "")), (e = e - s);
      let r = t.charAt(e);
      if (this.isNumeralChar(r)) return e + s;
      let l = e - 1;
      for (; l >= 0; )
        if (((r = t.charAt(l)), this.isNumeralChar(r))) {
          n = l + s;
          break;
        } else l--;
      if (n !== null) this.$refs.input.$el.setSelectionRange(n + 1, n + 1);
      else {
        for (l = e; l < i; )
          if (((r = t.charAt(l)), this.isNumeralChar(r))) {
            n = l + s;
            break;
          } else l++;
        n !== null && this.$refs.input.$el.setSelectionRange(n, n);
      }
      return n || 0;
    },
    onInputClick() {
      const e = this.$refs.input.$el.value;
      !this.readonly && e !== w.getSelection() && this.initCursor();
    },
    isNumeralChar(e) {
      return e.length === 1 &&
        (this._numeral.test(e) ||
          this._decimal.test(e) ||
          this._group.test(e) ||
          this._minusSign.test(e))
        ? (this.resetRegex(), !0)
        : !1;
    },
    resetRegex() {
      (this._numeral.lastIndex = 0),
        (this._decimal.lastIndex = 0),
        (this._group.lastIndex = 0),
        (this._minusSign.lastIndex = 0);
    },
    updateValue(e, t, i, n) {
      let s = this.$refs.input.$el.value,
        r = null;
      t != null &&
        ((r = this.parseValue(t)),
        (r = !r && !this.allowEmpty ? 0 : r),
        this.updateInput(r, i, n, t),
        this.handleOnInput(e, s, r));
    },
    handleOnInput(e, t, i) {
      this.isValueChanged(t, i) &&
        this.$emit("input", { originalEvent: e, value: i, formattedValue: t });
    },
    isValueChanged(e, t) {
      if (t === null && e !== null) return !0;
      if (t != null) {
        let i = typeof e == "string" ? this.parseValue(e) : e;
        return t !== i;
      }
      return !1;
    },
    validateValue(e) {
      return e === "-" || e == null
        ? null
        : this.min != null && e < this.min
        ? this.min
        : this.max != null && e > this.max
        ? this.max
        : e;
    },
    updateInput(e, t, i, n) {
      t = t || "";
      let s = this.$refs.input.$el.value,
        r = this.formatValue(e),
        l = s.length;
      if ((r !== n && (r = this.concatValues(r, n)), l === 0)) {
        (this.$refs.input.$el.value = r),
          this.$refs.input.$el.setSelectionRange(0, 0);
        const u = this.initCursor() + t.length;
        this.$refs.input.$el.setSelectionRange(u, u);
      } else {
        let a = this.$refs.input.$el.selectionStart,
          u = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = r;
        let h = r.length;
        if (i === "range-insert") {
          const d = this.parseValue((s || "").slice(0, a)),
            p = (d !== null ? d.toString() : "")
              .split("")
              .join(`(${this.groupChar})?`),
            c = new RegExp(p, "g");
          c.test(r);
          const f = t.split("").join(`(${this.groupChar})?`),
            C = new RegExp(f, "g");
          C.test(r.slice(c.lastIndex)),
            (u = c.lastIndex + C.lastIndex),
            this.$refs.input.$el.setSelectionRange(u, u);
        } else if (h === l)
          i === "insert" || i === "delete-back-single"
            ? this.$refs.input.$el.setSelectionRange(u + 1, u + 1)
            : i === "delete-single"
            ? this.$refs.input.$el.setSelectionRange(u - 1, u - 1)
            : (i === "delete-range" || i === "spin") &&
              this.$refs.input.$el.setSelectionRange(u, u);
        else if (i === "delete-back-single") {
          let d = s.charAt(u - 1),
            o = s.charAt(u),
            p = l - h,
            c = this._group.test(o);
          c && p === 1
            ? (u += 1)
            : !c && this.isNumeralChar(d) && (u += -1 * p + 1),
            (this._group.lastIndex = 0),
            this.$refs.input.$el.setSelectionRange(u, u);
        } else if (s === "-" && i === "insert") {
          this.$refs.input.$el.setSelectionRange(0, 0);
          const o = this.initCursor() + t.length + 1;
          this.$refs.input.$el.setSelectionRange(o, o);
        } else (u = u + (h - l)), this.$refs.input.$el.setSelectionRange(u, u);
      }
      this.$refs.input.$el.setAttribute("aria-valuenow", e);
    },
    concatValues(e, t) {
      if (e && t) {
        let i = t.search(this._decimal);
        return (
          (this._decimal.lastIndex = 0),
          this.suffixChar
            ? e.replace(this.suffixChar, "").split(this._decimal)[0] +
              t.replace(this.suffixChar, "").slice(i) +
              this.suffixChar
            : i !== -1
            ? e.split(this._decimal)[0] + t.slice(i)
            : e
        );
      }
      return e;
    },
    getDecimalLength(e) {
      if (e) {
        const t = e.split(this._decimal);
        if (t.length === 2)
          return t[1]
            .replace(this._suffix, "")
            .trim()
            .replace(/\s/g, "")
            .replace(this._currency, "").length;
      }
      return 0;
    },
    updateModel(e, t) {
      (this.d_modelValue = t), this.$emit("update:modelValue", t);
    },
    onInputFocus(e) {
      (this.focused = !0),
        !this.disabled &&
          !this.readonly &&
          this.$refs.input.$el.value !== w.getSelection() &&
          this.highlightOnFocus &&
          e.target.select(),
        this.$emit("focus", e);
    },
    onInputBlur(e) {
      this.focused = !1;
      let t = e.target,
        i = this.validateValue(this.parseValue(t.value));
      this.$emit("blur", { originalEvent: e, value: t.value }),
        (t.value = this.formatValue(i)),
        t.setAttribute("aria-valuenow", i),
        this.updateModel(e, i);
    },
    clearTimer() {
      this.timer && clearInterval(this.timer);
    },
    maxBoundry() {
      return this.d_modelValue >= this.max;
    },
    minBoundry() {
      return this.d_modelValue <= this.min;
    },
  },
  computed: {
    containerClass() {
      return [
        "p-inputnumber p-component p-inputwrapper",
        {
          "p-inputwrapper-filled": this.filled,
          "p-inputwrapper-focus": this.focused,
          "p-inputnumber-buttons-stacked":
            this.showButtons && this.buttonLayout === "stacked",
          "p-inputnumber-buttons-horizontal":
            this.showButtons && this.buttonLayout === "horizontal",
          "p-inputnumber-buttons-vertical":
            this.showButtons && this.buttonLayout === "vertical",
        },
      ];
    },
    upButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-up",
        this.incrementButtonClass,
        {
          "p-disabled":
            this.showButtons && this.max !== null && this.maxBoundry(),
        },
      ];
    },
    downButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-down",
        this.decrementButtonClass,
        {
          "p-disabled":
            this.showButtons && this.min !== null && this.minBoundry(),
        },
      ];
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    upButtonListeners() {
      return {
        mousedown: e => this.onUpButtonMouseDown(e),
        mouseup: e => this.onUpButtonMouseUp(e),
        mouseleave: e => this.onUpButtonMouseLeave(e),
        keydown: e => this.onUpButtonKeyDown(e),
        keyup: e => this.onUpButtonKeyUp(e),
      };
    },
    downButtonListeners() {
      return {
        mousedown: e => this.onDownButtonMouseDown(e),
        mouseup: e => this.onDownButtonMouseUp(e),
        mouseleave: e => this.onDownButtonMouseLeave(e),
        keydown: e => this.onDownButtonKeyDown(e),
        keyup: e => this.onDownButtonKeyUp(e),
      };
    },
    formattedValue() {
      const e = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
      return this.formatValue(e);
    },
    getFormatter() {
      return this.numberFormat;
    },
  },
  components: { INInputText: S, INButton: B },
};
const E = { key: 0, class: "p-inputnumber-button-group" };
function $(e, t, i, n, s, r) {
  const l = I("INInputText"),
    a = I("INButton");
  return (
    g(),
    _(
      "span",
      { class: V(r.containerClass) },
      [
        x(
          l,
          m(
            {
              ref: "input",
              id: i.inputId,
              class: ["p-inputnumber-input", i.inputClass],
              role: "spinbutton",
              style: i.inputStyle,
              value: r.formattedValue,
              "aria-valuemin": i.min,
              "aria-valuemax": i.max,
              "aria-valuenow": i.modelValue,
              disabled: i.disabled,
              readonly: i.readonly,
              placeholder: i.placeholder,
              "aria-labelledby": e.ariaLabelledby,
              "aria-label": e.ariaLabel,
              onInput: r.onUserInput,
              onKeydown: r.onInputKeyDown,
              onKeypress: r.onInputKeyPress,
              onPaste: r.onPaste,
              onClick: r.onInputClick,
              onFocus: r.onInputFocus,
              onBlur: r.onInputBlur,
            },
            i.inputProps,
          ),
          null,
          16,
          [
            "id",
            "class",
            "style",
            "value",
            "aria-valuemin",
            "aria-valuemax",
            "aria-valuenow",
            "disabled",
            "readonly",
            "placeholder",
            "aria-labelledby",
            "aria-label",
            "onInput",
            "onKeydown",
            "onKeypress",
            "onPaste",
            "onClick",
            "onFocus",
            "onBlur",
          ],
        ),
        i.showButtons && i.buttonLayout === "stacked"
          ? (g(),
            _("span", E, [
              x(
                a,
                m(
                  { class: r.upButtonClass, icon: i.incrementButtonIcon },
                  b(r.upButtonListeners),
                  { disabled: i.disabled, tabindex: -1, "aria-hidden": "true" },
                  i.incrementButtonProps,
                ),
                null,
                16,
                ["class", "icon", "disabled"],
              ),
              x(
                a,
                m(
                  { class: r.downButtonClass, icon: i.decrementButtonIcon },
                  b(r.downButtonListeners),
                  { disabled: i.disabled, tabindex: -1, "aria-hidden": "true" },
                  i.decrementButtonProps,
                ),
                null,
                16,
                ["class", "icon", "disabled"],
              ),
            ]))
          : y("", !0),
        i.showButtons && i.buttonLayout !== "stacked"
          ? (g(),
            D(
              a,
              m(
                { key: 1, class: r.upButtonClass, icon: i.incrementButtonIcon },
                b(r.upButtonListeners),
                { disabled: i.disabled, tabindex: -1, "aria-hidden": "true" },
                i.incrementButtonProps,
              ),
              null,
              16,
              ["class", "icon", "disabled"],
            ))
          : y("", !0),
        i.showButtons && i.buttonLayout !== "stacked"
          ? (g(),
            D(
              a,
              m(
                {
                  key: 2,
                  class: r.downButtonClass,
                  icon: i.decrementButtonIcon,
                },
                b(r.downButtonListeners),
                { disabled: i.disabled, tabindex: -1, "aria-hidden": "true" },
                i.decrementButtonProps,
              ),
              null,
              16,
              ["class", "icon", "disabled"],
            ))
          : y("", !0),
      ],
      2,
    )
  );
}
function N(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0],
      s = document.createElement("style");
    (s.type = "text/css"),
      i === "top" && n.firstChild
        ? n.insertBefore(s, n.firstChild)
        : n.appendChild(s),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(document.createTextNode(e));
  }
}
var F = `
.p-inputnumber {
    display: inline-flex;
}
.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-vertical {
    flex-direction: column;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}
.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}
.p-inputnumber-input {
    flex: 1 1 auto;
}
.p-fluid .p-inputnumber {
    width: 100%;
}
.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}
.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`;
N(F);
k.render = $;
export { k as s };
