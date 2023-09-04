import { defineComponent as t, openBlock as e, createBlock as i, unref as o } from "vue";
import { getActivePinia as n } from "pinia";
import { b as a, W as s } from "./library-exports.b377359a.js";
const w = /* @__PURE__ */ t({
  __name: "WorkflowBuilder",
  setup(c) {
    const r = a().params.id;
    return (p, f) => (e(), i(o(s), {
      "pinia-instance": o(n)(),
      "repository-root": "https://localhost:5020/",
      "workflow-id": o(r)
    }, null, 8, ["pinia-instance", "workflow-id"]));
  }
});
export {
  w as default
};
