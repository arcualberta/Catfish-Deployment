import { defineComponent as m, resolveComponent as y, openBlock as t, createElementBlock as r, createVNode as _, withCtx as i, createTextVNode as n, toDisplayString as f, Fragment as u, createElementVNode as v, renderSlot as p, renderList as g, unref as k, createBlock as L, resolveDynamicComponent as h } from "vue";
import { _ as x, u as C } from "./library-exports.fee9f2ab.js";
import { storeToRefs as E } from "pinia";
const U = { class: "row entryRow" }, D = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(s) {
    const e = s, l = "/read/" + e.entry.id, o = "/update/" + e.entry.id, d = "/delete/" + e.entry.id;
    return (a, w) => {
      const c = y("router-link");
      return t(), r("div", U, [
        _(c, {
          to: l,
          class: "col-8"
        }, {
          default: i(() => [
            n(f(s.entry.name), 1)
          ]),
          _: 1
        }),
        _(c, {
          to: o,
          class: "col-2"
        }, {
          default: i(() => [
            n("Update")
          ]),
          _: 1
        }),
        _(c, {
          to: d,
          class: "col-2"
        }, {
          default: i(() => [
            n("Delete")
          ]),
          _: 1
        })
      ]);
    };
  }
});
const S = /* @__PURE__ */ x(D, [["__scopeId", "data-v-fec492aa"]]), V = /* @__PURE__ */ m({
  __name: "List",
  setup(s) {
    const e = C(), { entries: l } = E(e);
    return (o, d) => (t(), r(u, null, [
      v("h4", null, [
        n("List "),
        p(o.$slots, "object-type"),
        n("s")
      ]),
      (t(!0), r(u, null, g(k(l), (a) => (t(), r("div", {
        key: a.id.toString()
      }, [
        p(o.$slots, "list-entry-delegate", {}, () => [
          (t(), L(h(S), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  V as default
};
