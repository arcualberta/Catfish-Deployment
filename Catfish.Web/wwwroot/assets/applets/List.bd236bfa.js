import { defineComponent as g, ref as h, resolveComponent as D, openBlock as n, createElementBlock as d, createVNode as y, withCtx as l, createTextVNode as r, toDisplayString as E, createElementVNode as a, createBlock as v, createCommentVNode as L, pushScopeId as $, popScopeId as w, Fragment as f, renderSlot as C, renderList as x, unref as I, resolveDynamicComponent as T } from "vue";
import { u as b, C as U, _ as N } from "./library-exports.076e9f30.js";
import { storeToRefs as V } from "pinia";
const B = (e) => ($("data-v-3250e19f"), e = e(), w(), e), R = { class: "row entryRow" }, j = /* @__PURE__ */ B(() => /* @__PURE__ */ a("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), P = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(e) {
    const t = e, s = h(!1), c = b(), p = () => s.value = !s.value, i = (u) => c.deleteObject(u), k = "/read/" + t.entry.id, S = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (u, o) => {
      const _ = D("router-link");
      return n(), d("div", R, [
        y(_, {
          to: k,
          class: "col-6"
        }, {
          default: l(() => [
            r(E(e.entry.name), 1)
          ]),
          _: 1
        }),
        y(_, {
          to: S,
          class: "col-2"
        }, {
          default: l(() => [
            r("Update")
          ]),
          _: 1
        }),
        j,
        a("a", {
          onClick: o[0] || (o[0] = (m) => p()),
          class: "col-2"
        }, "Delete"),
        s.value ? (n(), v(U, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            r(" Delete Confirmation. ")
          ]),
          body: l(() => [
            r(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            a("button", {
              type: "button",
              class: "ok-btn",
              onClick: o[1] || (o[1] = (m) => i(t.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            a("button", {
              type: "button",
              class: "cancel-btn",
              onClick: o[2] || (o[2] = (m) => p()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0)
      ]);
    };
  }
});
const F = /* @__PURE__ */ N(P, [["__scopeId", "data-v-3250e19f"]]), z = /* @__PURE__ */ g({
  __name: "List",
  setup(e) {
    const t = b(), { entries: s } = V(t);
    return (c, p) => (n(), d(f, null, [
      a("h4", null, [
        r("List "),
        C(c.$slots, "object-type"),
        r("s")
      ]),
      (n(!0), d(f, null, x(I(s), (i) => (n(), d("div", {
        key: i.id.toString()
      }, [
        C(c.$slots, "list-entry-delegate", {}, () => [
          (n(), v(T(F), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  z as default
};
