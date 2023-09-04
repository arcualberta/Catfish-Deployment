import { defineComponent as m, resolveComponent as y, openBlock as o, createElementBlock as s, createVNode as d, withCtx as _, createTextVNode as n, toDisplayString as h, pushScopeId as g, popScopeId as v, createElementVNode as f, Fragment as p, renderSlot as u, renderList as S, unref as k, createBlock as C, resolveDynamicComponent as L } from "vue";
import { _ as x, u as E } from "./library-exports.4dc963ac.js";
import { storeToRefs as U } from "pinia";
const w = (e) => (g("data-v-56f2d262"), e = e(), v(), e), D = { class: "row entryRow" }, I = /* @__PURE__ */ w(() => /* @__PURE__ */ f("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), B = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(e) {
    const t = e, c = "/read/" + t.entry.id, r = "/update/" + t.entry.id, i = "/delete/" + t.entry.id;
    return "" + t.entry.id, (l, R) => {
      const a = y("router-link");
      return o(), s("div", D, [
        d(a, {
          to: c,
          class: "col-6"
        }, {
          default: _(() => [
            n(h(e.entry.name), 1)
          ]),
          _: 1
        }),
        d(a, {
          to: r,
          class: "col-2"
        }, {
          default: _(() => [
            n("Update")
          ]),
          _: 1
        }),
        I,
        d(a, {
          to: i,
          class: "col-2"
        }, {
          default: _(() => [
            n("Delete")
          ]),
          _: 1
        })
      ]);
    };
  }
});
const N = /* @__PURE__ */ x(B, [["__scopeId", "data-v-56f2d262"]]), b = /* @__PURE__ */ m({
  __name: "List",
  setup(e) {
    const t = E(), { entries: c } = U(t);
    return (r, i) => (o(), s(p, null, [
      f("h4", null, [
        n("List "),
        u(r.$slots, "object-type"),
        n("s")
      ]),
      (o(!0), s(p, null, S(k(c), (l) => (o(), s("div", {
        key: l.id.toString()
      }, [
        u(r.$slots, "list-entry-delegate", {}, () => [
          (o(), C(L(N), { entry: l }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  b as default
};
