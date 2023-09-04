import { defineComponent as l, computed as a, openBlock as s, createElementBlock as m, Fragment as p, createElementVNode as c, createTextVNode as t, renderSlot as o, toDisplayString as u, unref as d } from "vue";
import { a as i } from "./library-exports.e99587b9.js";
import "pinia";
const k = /* @__PURE__ */ l({
  __name: "Delete",
  setup(f) {
    const r = i(), n = a(() => {
      var e;
      return (e = r.params) == null ? void 0 : e.id;
    });
    return (e, _) => (s(), m(p, null, [
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
  k as default
};
