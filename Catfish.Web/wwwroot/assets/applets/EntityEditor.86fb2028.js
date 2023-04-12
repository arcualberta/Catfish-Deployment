import { defineComponent as o, openBlock as e, createBlock as i, unref as r } from "vue";
import { b as n, k as a, c as p } from "./library-exports.b377359a.js";
import "pinia";
const d = /* @__PURE__ */ o({
  __name: "EntityEditor",
  setup(s) {
    n();
    const t = p.dataRepositoryApiRoot + "/api/entities";
    return (c, m) => (e(), i(r(a), { "api-root": t }));
  }
});
export {
  d as default
};
