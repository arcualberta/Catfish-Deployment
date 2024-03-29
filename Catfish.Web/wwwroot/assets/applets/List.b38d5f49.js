import { defineComponent as m, openBlock as r, createBlock as y, Transition as T, withCtx as l, createElementVNode as t, renderSlot as c, createCommentVNode as b, ref as w, resolveComponent as D, createElementBlock as p, createVNode as g, createTextVNode as a, toDisplayString as U, pushScopeId as E, popScopeId as I, Fragment as C, renderList as L, unref as x, resolveDynamicComponent as B } from "vue";
import { _ as h, u as k } from "./library-exports.75dd2390.js";
import { storeToRefs as N } from "pinia";
const P = { class: "popup-modal" }, V = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, M = /* @__PURE__ */ m({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (e, s) => o.popupTrigger ? (r(), y(T, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        t("div", P, [
          t("div", V, [
            t("header", R, [
              c(e.$slots, "header", {}, void 0, !0)
            ]),
            t("section", j, [
              c(e.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", F, [
              c(e.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const O = /* @__PURE__ */ h(M, [["__scopeId", "data-v-25885900"]]), q = (o) => (E("data-v-948ceeac"), o = o(), I(), o), z = { class: "row entryRow" }, A = /* @__PURE__ */ q(() => /* @__PURE__ */ t("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), G = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const e = o, s = w(!1), d = k(), u = () => s.value = !s.value, i = (f) => d.deleteObject(f), $ = "/read/" + e.entry.id, S = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (f, n) => {
      const v = D("router-link");
      return r(), p("div", z, [
        g(v, {
          to: $,
          class: "col-6"
        }, {
          default: l(() => [
            a(U(o.entry.name), 1)
          ]),
          _: 1
        }),
        g(v, {
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
        s.value ? (r(), y(O, {
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
              onClick: n[2] || (n[2] = (_) => i("https://localhost:5020/api/items/" + e.entry.id)),
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
        })) : b("", !0)
      ]);
    };
  }
});
const H = /* @__PURE__ */ h(G, [["__scopeId", "data-v-948ceeac"]]), W = /* @__PURE__ */ m({
  __name: "List",
  setup(o) {
    const e = k(), { entries: s } = N(e);
    return (d, u) => (r(), p(C, null, [
      t("h4", null, [
        a("List "),
        c(d.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(C, null, L(x(s), (i) => (r(), p("div", {
        key: i.id.toString()
      }, [
        c(d.$slots, "list-entry-delegate", {}, () => [
          (r(), y(B(H), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  W as default
};
