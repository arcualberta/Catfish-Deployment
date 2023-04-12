import { defineComponent as a, computed as p, openBlock as s, createElementBlock as l, Fragment as m, createElementVNode as c, createTextVNode as t, renderSlot as o, toDisplayString as d, unref as u } from "vue";
import { a as i } from "./library-exports.46026ce1.js";
import "pinia";
const y = /* @__PURE__ */ a({
  __name: "Update",
  setup(f) {
    const r = i(), n = p(() => {
      var e;
      return (e = r.params) == null ? void 0 : e.id;
    });
    return (e, _) => (s(), l(m, null, [
      c("h4", null, [
        t("Update "),
        o(e.$slots, "object-type")
      ]),
      o(e.$slots, "update-delegate"),
      t(" " + d(u(n)), 1)
    ], 64));
  }
});
export {
  y as default
};
