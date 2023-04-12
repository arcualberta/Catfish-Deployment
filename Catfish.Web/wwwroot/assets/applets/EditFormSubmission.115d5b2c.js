import { defineComponent as i, unref as o, openBlock as e, createBlock as r, createElementBlock as n } from "vue";
import { b as a, e as m, c } from "./library-exports.b377359a.js";
import "pinia";
const p = {
  key: 1,
  class: "alert alert-danger mt-5"
}, y = /* @__PURE__ */ i({
  __name: "EditFormSubmission",
  setup(u) {
    const s = a().params.submissionId, t = c.dataRepositoryApiRoot;
    return (l, _) => o(s) ? (e(), r(o(m), {
      key: 0,
      "repository-root": o(t),
      "submission-id": o(s)
    }, null, 8, ["repository-root", "submission-id"])) : (e(), n("div", p, "Please append the submission ID to the URL."));
  }
});
export {
  y as default
};
