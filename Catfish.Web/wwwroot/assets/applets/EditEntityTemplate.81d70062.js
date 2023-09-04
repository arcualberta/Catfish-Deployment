import { defineComponent as a, openBlock as n, createElementBlock as r, Fragment as i, createVNode as p, unref as s, createElementVNode as l } from "vue";
import { b as m, j as c, E as u, c as d } from "./library-exports.b377359a.js";
import "pinia";
const _ = /* @__PURE__ */ l("h5", null, "Edit Template ", -1), g = /* @__PURE__ */ a({
  __name: "EditEntityTemplate",
  setup(f) {
    const t = m().params.id, e = c();
    t && e.loadTemplate(t);
    const o = d.dataRepositoryApiRoot + "/api/entity-templates";
    return (y, T) => (n(), r(i, null, [
      _,
      p(s(u), { "api-root": o })
    ], 64));
  }
});
export {
  g as default
};
