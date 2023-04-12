import { defineComponent as g, ref as S, resolveComponent as D, openBlock as n, createElementBlock as d, createVNode as f, withCtx as l, createTextVNode as r, toDisplayString as E, createElementVNode as a, createBlock as v, createCommentVNode as L, pushScopeId as $, popScopeId as w, Fragment as y, renderSlot as C, renderList as x, unref as I, resolveDynamicComponent as T } from "vue";
import { u as b, C as U, _ as N } from "./library-exports.6b61686b.js";
import { storeToRefs as V } from "pinia";
const B = (e) => ($("data-v-f6c4df72"), e = e(), w(), e), R = { class: "row entryRow" }, j = /* @__PURE__ */ B(() => /* @__PURE__ */ a("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), P = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(e) {
    const t = e, s = S(!1), c = b(), p = () => s.value = !s.value, i = (u) => c.deleteObject(u), k = "/read/" + t.entry.id, h = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (u, o) => {
      const _ = D("router-link");
      return n(), d("div", R, [
        f(_, {
          to: k,
          class: "col-6"
        }, {
          default: l(() => [
            r(E(e.entry.name), 1)
          ]),
          _: 1
        }),
        f(_, {
          to: h,
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
              onClick: o[1] || (o[1] = (m) => i("https://localhost:5020/api/items/delete/" + t.entry.id)),
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
const F = /* @__PURE__ */ N(P, [["__scopeId", "data-v-f6c4df72"]]), z = /* @__PURE__ */ g({
  __name: "List",
  setup(e) {
    const t = b(), { entries: s } = V(t);
    return (c, p) => (n(), d(y, null, [
      a("h4", null, [
        r("List "),
        C(c.$slots, "object-type"),
        r("s")
      ]),
      (n(!0), d(y, null, x(I(s), (i) => (n(), d("div", {
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
