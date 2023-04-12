import { openBlock as r, createElementBlock as o, Fragment as n, createElementVNode as c, createTextVNode as a, renderSlot as t } from "vue";
import { _ as l } from "./library-exports.076e9f30.js";
import "pinia";
const s = {};
function m(e, d) {
  return r(), o(n, null, [
    c("h4", null, [
      a("Create "),
      t(e.$slots, "object-type")
    ]),
    t(e.$slots, "create-delegate")
  ], 64);
}
const i = /* @__PURE__ */ l(s, [["render", m]]);
export {
  i as default
};
