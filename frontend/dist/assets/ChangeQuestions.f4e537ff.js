import {
  a7 as p,
  n as l,
  d as _,
  r as d,
  o as g,
  c as m,
  f as o,
  u as a,
  i as y,
  p as f,
  j as h,
  e as v,
  _ as S,
} from "./index.5bf35bb2.js";
import { s as C } from "./textarea.esm.d8886f2e.js";
const Q = async e => {
    try {
      return p.put("/questionnaires/update", e);
    } catch (s) {
      const t = s;
      return console.log(s), t;
    }
  },
  q = l("questions", () => {
    async function e(s) {
      Q(s);
    }
    return { changeQuestionsData: e };
  }),
  x = e => (f("data-v-ab910555"), (e = e()), h(), e),
  b = { class: "section-questions__add" },
  E = x(() =>
    v(
      "h2",
      { style: { margin: "8px 0" } },
      "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u044E\u0434\u0430 json \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0438\u0437 survey",
      -1,
    ),
  ),
  J = _({
    __name: "ChangeQuestions",
    setup(e) {
      const s = q(),
        t = d(""),
        r = async () => {
          const u = JSON.parse(
              t.value
                .split(
                  `
`,
                )
                .join(""),
            ).pages.filter(i => i.elements[0].type !== "expression"),
            n = { id: "114", content: { pages: u } };
          await s.changeQuestionsData(n);
        };
      return (c, u) => (
        g(),
        m("section", b, [
          E,
          o(
            a(C),
            {
              modelValue: t.value,
              "onUpdate:modelValue": u[0] || (u[0] = n => (t.value = n)),
              rows: "25",
            },
            null,
            8,
            ["modelValue"],
          ),
          o(a(y), {
            label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
            class: "p-button-lg",
            onClick: r,
          }),
        ])
      );
    },
  });
const I = S(J, [["__scopeId", "data-v-ab910555"]]);
export { I as default };
