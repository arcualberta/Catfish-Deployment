import { defineComponent as x, ref as v, openBlock as s, createElementBlock as n, Fragment as _, createElementVNode as e, createVNode as o, unref as t, withCtx as E, renderList as S, toDisplayString as i, createTextVNode as u } from "vue";
import { f as m, V as T, g as p, h } from "./library-exports.b377359a.js";
import "pinia";
const L = {
  class: "flex m-10",
  style: { width: "50%" }
}, V = /* @__PURE__ */ e("h3", null, "List 1", -1), I = { class: "alert alert-info" }, N = /* @__PURE__ */ e("h3", null, "List 1 Selections", -1), b = /* @__PURE__ */ e("h3", null, "List 2", -1), k = { class: "alert alert-info" }, w = /* @__PURE__ */ e("h3", null, "List 2 Selections", -1), F = /* @__PURE__ */ x({
  __name: "Sandbox",
  setup(C) {
    const l = v([
      { name: "John", id: 1 },
      { name: "Joao", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 }
    ]), y = (c) => {
      console.log(c);
    }, r = "store-1", a = "store-2", f = m(r), g = m(a);
    return (c, J) => (s(), n(_, null, [
      e("div", L, [
        o(t(T), {
          class: "dragArea list-group w-full",
          list: l.value,
          onChange: y
        }, {
          default: E(() => [
            (s(!0), n(_, null, S(l.value, (d) => (s(), n("div", {
              class: "list-group-item bg-gray-300 m-1 p-3 rounded-md text-center",
              key: d.name
            }, i(d.name), 1))), 128))
          ]),
          _: 1
        }, 8, ["list"])
      ]),
      V,
      o(p, {
        "store-id": r,
        entityType: t(h).Item
      }, null, 8, ["entityType"]),
      e("div", I, [
        N,
        u(" " + i(t(f).selectedEntityIds), 1)
      ]),
      b,
      o(p, {
        "store-id": a,
        entityType: t(h).Item
      }, null, 8, ["entityType"]),
      e("div", k, [
        w,
        u(" " + i(t(g).selectedEntityIds), 1)
      ])
    ], 64));
  }
});
export {
  F as default
};
