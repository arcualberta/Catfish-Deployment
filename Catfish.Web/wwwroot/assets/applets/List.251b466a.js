import { defineComponent as f, openBlock as r, createBlock as m, Transition as T, withCtx as l, createElementVNode as t, renderSlot as d, createCommentVNode as b, ref as w, resolveComponent as D, createElementBlock as p, createVNode as g, createTextVNode as a, toDisplayString as U, pushScopeId as E, popScopeId as I, Fragment as C, renderList as L, unref as x, resolveDynamicComponent as B } from "vue";
import { _ as h, u as k } from "./library-exports.6bb3e17a.js";
import { storeToRefs as N } from "pinia";
const P = { class: "popup-modal" }, V = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, M = /* @__PURE__ */ f({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (e, n) => o.popupTrigger ? (r(), m(T, {
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
    })) : b("", !0);
  }
});
const O = /* @__PURE__ */ h(M, [["__scopeId", "data-v-dfcfaf1c"]]), q = (o) => (E("data-v-f9ea1850"), o = o(), I(), o), z = { class: "row entryRow" }, A = /* @__PURE__ */ q(() => /* @__PURE__ */ t("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), G = /* @__PURE__ */ f({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const e = o, n = w(!1), c = k(), u = () => n.value = !n.value, i = (y) => c.deleteObject(y), $ = "/read/" + e.entry.id, S = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (y, s) => {
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
          onClick: s[0] || (s[0] = (_) => u()),
          class: "col-2"
        }, "Delete"),
        n.value ? (r(), m(O, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Delete Confirmation."),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: s[1] || (s[1] = (_) => n.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            a(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            t("button", {
              type: "button",
              class: "ok-btn",
              onClick: s[2] || (s[2] = (_) => i("https://localhost:5020/api/items/" + e.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "cancel-btn",
              onClick: s[3] || (s[3] = (_) => u()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0)
      ]);
    };
  }
});
const H = /* @__PURE__ */ h(G, [["__scopeId", "data-v-f9ea1850"]]), W = /* @__PURE__ */ f({
  __name: "List",
  setup(o) {
    const e = k(), { entries: n } = N(e);
    return (c, u) => (r(), p(C, null, [
      t("h4", null, [
        a("List "),
        d(c.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(C, null, L(x(n), (i) => (r(), p("div", {
        key: i.id.toString()
      }, [
        d(c.$slots, "list-entry-delegate", {}, () => [
          (r(), m(B(H), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  W as default
};
