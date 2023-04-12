import { defineComponent as m, resolveComponent as h, openBlock as o, createElementBlock as r, createVNode as d, withCtx as i, createTextVNode as s, toDisplayString as g, pushScopeId as v, popScopeId as S, createElementVNode as l, Fragment as p, renderSlot as u, renderList as k, unref as C, createBlock as L, resolveDynamicComponent as x } from "vue";
import { _ as E, u as w } from "./library-exports.b5f329aa.js";
import { storeToRefs as D } from "pinia";
const y = (e) => (v("data-v-0c130160"), e = e(), S(), e), I = { class: "row entryRow" }, U = /* @__PURE__ */ y(() => /* @__PURE__ */ l("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), B = /* @__PURE__ */ y(() => /* @__PURE__ */ l("a", {
  href: "#",
  class: "col-2"
}, "Delete", -1)), N = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(e) {
    const t = e, c = "/read/" + t.entry.id, n = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (f, a) => {
      const _ = h("router-link");
      return o(), r("div", I, [
        d(_, {
          to: c,
          class: "col-6"
        }, {
          default: i(() => [
            s(g(e.entry.name), 1)
          ]),
          _: 1
        }),
        d(_, {
          to: n,
          class: "col-2"
        }, {
          default: i(() => [
            s("Update")
          ]),
          _: 1
        }),
        U,
        B
      ]);
    };
  }
});
const R = /* @__PURE__ */ E(N, [["__scopeId", "data-v-0c130160"]]), b = /* @__PURE__ */ m({
  __name: "List",
  setup(e) {
    const t = w(), { entries: c } = D(t);
    return (n, f) => (o(), r(p, null, [
      l("h4", null, [
        s("List "),
        u(n.$slots, "object-type"),
        s("s")
      ]),
      (o(!0), r(p, null, k(C(c), (a) => (o(), r("div", {
        key: a.id.toString()
      }, [
        u(n.$slots, "list-entry-delegate", {}, () => [
          (o(), L(x(R), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  b as default
};
