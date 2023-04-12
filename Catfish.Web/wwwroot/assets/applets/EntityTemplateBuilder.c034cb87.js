import { defineComponent as e, openBlock as o, createBlock as a, unref as p } from "vue";
import { b as r, E as i, c as n } from "./library-exports.b377359a.js";
import "pinia";
const f = /* @__PURE__ */ e({
  __name: "EntityTemplateBuilder",
  setup(s) {
    r();
    const t = n.dataRepositoryApiRoot + "/api/entity-templates";
    return (c, m) => (o(), a(p(i), { "api-root": t }));
  }
});
export {
  f as default
};
