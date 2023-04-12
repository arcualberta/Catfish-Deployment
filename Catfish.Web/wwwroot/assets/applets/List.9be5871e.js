import { defineComponent as m, openBlock as r, createBlock as f, Transition as T, withCtx as l, createElementVNode as t, renderSlot as d, createCommentVNode as C, ref as w, resolveComponent as D, createElementBlock as p, createVNode as b, createTextVNode as a, toDisplayString as U, pushScopeId as E, popScopeId as I, Fragment as g, renderList as L, unref as x, resolveDynamicComponent as B } from "vue";
import { _ as h, u as k } from "./library-exports.85e0f5bb.js";
import { storeToRefs as N } from "pinia";
const P = { class: "popup-modal" }, V = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, M = /* @__PURE__ */ m({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (e, s) => o.popupTrigger ? (r(), f(T, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        t("div", P, [
          t("div", V, [
            t("header", R, [
              d(e.$slots, "header", {}, void 0, !0)
            ]),
            t("section", j, [
              d(e.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", F, [
              d(e.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : C("", !0);
  }
});
const O = /* @__PURE__ */ h(M, [["__scopeId", "data-v-7446701a"]]), q = (o) => (E("data-v-1b967d9f"), o = o(), I(), o), z = { class: "row entryRow" }, A = /* @__PURE__ */ q(() => /* @__PURE__ */ t("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), G = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const e = o, s = w(!1), i = k(), u = () => s.value = !s.value, c = (y) => i.deleteObject(y), $ = "/read/" + e.entry.id, S = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (y, n) => {
      const v = D("router-link");
      return r(), p("div", z, [
        b(v, {
          to: $,
          class: "col-6"
        }, {
          default: l(() => [
            a(U(o.entry.name), 1)
          ]),
          _: 1
        }),
        b(v, {
          to: S,
          class: "col-2"
        }, {
          default: l(() => [
            a("Update")
          ]),
          _: 1
        }),
        A,
        t("a", {
          onClick: n[0] || (n[0] = (_) => u()),
          class: "col-2 delete-link"
        }, "Delete"),
        s.value ? (r(), f(O, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Delete Confirmation."),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: n[1] || (n[1] = (_) => s.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            a(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: n[2] || (n[2] = (_) => c("https://localhost:5020/api/items/" + e.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: n[3] || (n[3] = (_) => u()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : C("", !0)
      ]);
    };
  }
});
const H = /* @__PURE__ */ h(G, [["__scopeId", "data-v-1b967d9f"]]), W = /* @__PURE__ */ m({
  __name: "List",
  setup(o) {
    const e = k(), { entries: s } = N(e);
    return (i, u) => (r(), p(g, null, [
      t("h4", null, [
        a("List "),
        d(i.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(g, null, L(x(s), (c) => (r(), p("div", {
        key: c.id.toString()
      }, [
        d(i.$slots, "list-entry-delegate", {}, () => [
          (r(), f(B(H), { entry: c }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  W as default
};
