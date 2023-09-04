import { defineComponent as C, ref as v, resolveComponent as b, openBlock as r, createElementBlock as p, createVNode as m, withCtx as a, createTextVNode as s, toDisplayString as k, createElementVNode as c, createBlock as g, createCommentVNode as S, pushScopeId as h, popScopeId as D, Fragment as y, renderSlot as f, renderList as L, unref as $, resolveDynamicComponent as w } from "vue";
import { C as x, _ as E, u as I } from "./library-exports.bae1164d.js";
import { storeToRefs as T } from "pinia";
const U = (e) => (h("data-v-e1bfe739"), e = e(), D(), e), N = { class: "row entryRow" }, V = /* @__PURE__ */ U(() => /* @__PURE__ */ c("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), B = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(e) {
    const t = e, l = v(!1), o = () => l.value = !l.value, d = "/read/" + t.entry.id, i = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (P, n) => {
      const u = b("router-link");
      return r(), p("div", N, [
        m(u, {
          to: d,
          class: "col-6"
        }, {
          default: a(() => [
            s(k(e.entry.name), 1)
          ]),
          _: 1
        }),
        m(u, {
          to: i,
          class: "col-2"
        }, {
          default: a(() => [
            s("Update")
          ]),
          _: 1
        }),
        V,
        c("a", {
          onClick: n[0] || (n[0] = (_) => o()),
          class: "col-2"
        }, "Delete"),
        l.value ? (r(), g(x, {
          key: 0,
          popupTrigger: !0
        }, {
          header: a(() => [
            s(" Delete Confirmation. ")
          ]),
          body: a(() => [
            s(" Do you want to delete this Item? ")
          ]),
          footer: a(() => [
            c("button", {
              type: "button",
              class: "ok-btn",
              onClick: n[1] || (n[1] = (_) => o()),
              "aria-label": "Close modal"
            }, " Delete "),
            c("button", {
              type: "button",
              class: "cancel-btn",
              onClick: n[2] || (n[2] = (_) => o()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : S("", !0)
      ]);
    };
  }
});
const R = /* @__PURE__ */ E(B, [["__scopeId", "data-v-e1bfe739"]]), q = /* @__PURE__ */ C({
  __name: "List",
  setup(e) {
    const t = I(), { entries: l } = T(t);
    return (o, d) => (r(), p(y, null, [
      c("h4", null, [
        s("List "),
        f(o.$slots, "object-type"),
        s("s")
      ]),
      (r(!0), p(y, null, L($(l), (i) => (r(), p("div", {
        key: i.id.toString()
      }, [
        f(o.$slots, "list-entry-delegate", {}, () => [
          (r(), g(w(R), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  q as default
};
