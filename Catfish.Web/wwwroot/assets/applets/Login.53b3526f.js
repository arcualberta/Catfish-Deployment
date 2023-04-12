import { defineComponent as c, computed as s, watch as e, openBlock as u, createBlock as p, unref as t } from "vue";
import { u as _, a as m, _ as f, c as h } from "./library-exports.b377359a.js";
import "pinia";
const x = /* @__PURE__ */ c({
  __name: "Login",
  setup(g) {
    const a = _(), r = m(), i = s(() => a.loginResult);
    e(() => i.value, async (o) => {
      o != null && o.success && r.push("/");
    });
    const n = h.authorizationApiRoot;
    return (o, l) => (u(), p(t(f), { "authorization-root": t(n) }, null, 8, ["authorization-root"]));
  }
});
export {
  x as default
};
