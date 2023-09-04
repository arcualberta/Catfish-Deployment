import { defineComponent as m, watch as c, unref as e, openBlock as r, createBlock as u, createElementBlock as p } from "vue";
import { getActivePinia as f } from "pinia";
import { b as d, a as l, d as _, G as i, e as h } from "./library-exports.b377359a.js";
const b = {
  key: 1,
  class: "alert alert-danger mt-5"
}, E = /* @__PURE__ */ m({
  __name: "NewFormSubmission",
  setup(S) {
    const t = d().params.formId, a = l(), n = _();
    return c(() => {
      var o;
      return (o = n.formData) == null ? void 0 : o.id;
    }, async (o, s) => {
      s === i.EMPTY && o !== i.EMPTY && a.push(`/edit-form-submission/${o}`);
    }), (o, s) => e(t) ? (r(), u(e(h), {
      key: 0,
      "pinia-instance": e(f)(),
      "repository-root": "https://localhost:5020/",
      "form-id": e(t)
    }, null, 8, ["pinia-instance", "form-id"])) : (r(), p("div", b, "Please append the form ID to the URL."));
  }
});
export {
  E as default
};
