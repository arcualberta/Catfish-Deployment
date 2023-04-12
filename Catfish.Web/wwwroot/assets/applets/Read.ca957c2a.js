import { defineComponent as a, computed as s, openBlock as l, createElementBlock as m, Fragment as p, createElementVNode as c, createTextVNode as t, renderSlot as o, toDisplayString as d, unref as u } from "vue";
import { a as i } from "./library-exports.df505dcf.js";
import "pinia";
const k = /* @__PURE__ */ a({
  __name: "Read",
  setup(f) {
    const r = i(), n = s(() => {
      var e;
      return (e = r.params) == null ? void 0 : e.id;
    });
    return (e, _) => (l(), m(p, null, [
      c("h4", null, [
        t("Read "),
        o(e.$slots, "object-type")
      ]),
      o(e.$slots, "read-delegate"),
      t(" " + d(u(n)), 1)
    ], 64));
  }
});
export {
  k as default
};
