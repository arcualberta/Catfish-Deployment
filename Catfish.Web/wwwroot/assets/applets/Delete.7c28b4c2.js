import { defineComponent as l, computed as s, openBlock as a, createElementBlock as m, Fragment as p, createElementVNode as c, createTextVNode as t, renderSlot as o, toDisplayString as u, unref as d } from "vue";
import { b as i } from "./library-exports.b377359a.js";
import "pinia";
const h = /* @__PURE__ */ l({
  __name: "Delete",
  setup(f) {
    const r = i(), n = s(() => {
      var e;
      return (e = r.params) == null ? void 0 : e.id;
    });
    return (e, _) => (a(), m(p, null, [
      c("h4", null, [
        t("Delete "),
        o(e.$slots, "object-type")
      ]),
      o(e.$slots, "delete-delegate"),
      t(" " + u(d(n)), 1)
    ], 64));
  }
});
export {
  h as default
};
