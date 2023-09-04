import { defineComponent as m, openBlock as r, createBlock as f, Transition as T, withCtx as l, createElementVNode as t, renderSlot as c, createCommentVNode as b, ref as w, resolveComponent as D, createElementBlock as p, createVNode as g, createTextVNode as a, toDisplayString as U, pushScopeId as E, popScopeId as I, Fragment as C, renderList as L, unref as x, resolveDynamicComponent as B } from "vue";
import { _ as h, u as k } from "./library-exports.c962edc6.js";
import { storeToRefs as N } from "pinia";
const P = { class: "popup-modal" }, V = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, M = /* @__PURE__ */ m({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (e, n) => o.popupTrigger ? (r(), f(T, {
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
const O = /* @__PURE__ */ h(M, [["__scopeId", "data-v-1c174a09"]]), q = (o) => (E("data-v-82fcc8d7"), o = o(), I(), o), z = { class: "row entryRow" }, A = /* @__PURE__ */ q(() => /* @__PURE__ */ t("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), G = /* @__PURE__ */ m({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const e = o, n = w(!1), d = k(), u = () => n.value = !n.value, i = (y) => {
      d.deleteObject(y), n.value = !n.value;
    }, $ = "/read/" + e.entry.id, S = "/update/" + e.entry.id;
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
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (r(), f(O, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Delete Confirmation. "),
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
              class: "modal-confirm-btn",
              onClick: s[2] || (s[2] = (_) => i("https://localhost:5020/api/items/" + e.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
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
const H = /* @__PURE__ */ h(G, [["__scopeId", "data-v-82fcc8d7"]]), W = /* @__PURE__ */ m({
  __name: "List",
  setup(o) {
    const e = k(), { entries: n } = N(e);
    return (d, u) => (r(), p(C, null, [
      t("h4", null, [
        a("List "),
        c(d.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(C, null, L(x(n), (i) => (r(), p("div", {
        key: i.id.toString()
      }, [
        c(d.$slots, "list-entry-delegate", {}, () => [
          (r(), f(B(H), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  W as default
};
