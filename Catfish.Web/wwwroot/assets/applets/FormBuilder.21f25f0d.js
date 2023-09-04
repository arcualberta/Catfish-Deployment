import { defineComponent as e, openBlock as a, createBlock as i, unref as o } from "vue";
import { b as m, F as n, c as p } from "./library-exports.b377359a.js";
import "pinia";
const B = /* @__PURE__ */ e({
  __name: "FormBuilder",
  setup(s) {
    const r = m().params.id, t = p.dataRepositoryApiRoot + "/api/forms";
    return (u, f) => (a(), i(o(n), {
      "api-root": t,
      "form-id": o(r)
    }, null, 8, ["form-id"]));
  }
});
export {
  B as default
};
