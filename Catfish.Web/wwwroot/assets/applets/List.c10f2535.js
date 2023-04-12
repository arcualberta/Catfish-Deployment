import { defineComponent as _, openBlock as s, createBlock as m, Transition as S, withCtx as l, createElementVNode as t, renderSlot as i, createCommentVNode as C, ref as w, resolveComponent as D, createElementBlock as p, createVNode as g, createTextVNode as a, toDisplayString as U, pushScopeId as E, popScopeId as I, Fragment as b, renderList as L, unref as x, resolveDynamicComponent as B } from "vue";
import { _ as h, u as k } from "./library-exports.79e6ecd5.js";
import { storeToRefs as N } from "pinia";
const P = { class: "popup-modal" }, V = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, M = /* @__PURE__ */ _({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (e, n) => o.popupTrigger ? (s(), m(S, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        t("div", P, [
          t("div", V, [
            t("header", R, [
              i(e.$slots, "header", {}, void 0, !0),
              t("button", {
                type: "button",
                class: "btn-close",
                onClick: n[0] || (n[0] = (d) => o.popupTrigger = !1)
              }, "x ")
            ]),
            t("section", j, [
              i(e.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", F, [
              i(e.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : C("", !0);
  }
});
const O = /* @__PURE__ */ h(M, [["__scopeId", "data-v-c8b0fee7"]]), q = (o) => (E("data-v-829310d9"), o = o(), I(), o), z = { class: "row entryRow" }, A = /* @__PURE__ */ q(() => /* @__PURE__ */ t("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), G = /* @__PURE__ */ _({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const e = o, n = w(!1), d = k(), u = () => n.value = !n.value, c = (y) => d.deleteObject(y), $ = "/read/" + e.entry.id, T = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (y, r) => {
      const f = D("router-link");
      return s(), p("div", z, [
        g(f, {
          to: $,
          class: "col-6"
        }, {
          default: l(() => [
            a(U(o.entry.name), 1)
          ]),
          _: 1
        }),
        g(f, {
          to: T,
          class: "col-2"
        }, {
          default: l(() => [
            a("Update")
          ]),
          _: 1
        }),
        A,
        t("a", {
          onClick: r[0] || (r[0] = (v) => u()),
          class: "col-2"
        }, "Delete"),
        n.value ? (s(), m(O, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Delete Confirmation. ")
          ]),
          body: l(() => [
            a(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            t("button", {
              type: "button",
              class: "ok-btn",
              onClick: r[1] || (r[1] = (v) => c("https://localhost:5020/api/items/" + e.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "cancel-btn",
              onClick: r[2] || (r[2] = (v) => u()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : C("", !0)
      ]);
    };
  }
});
const H = /* @__PURE__ */ h(G, [["__scopeId", "data-v-829310d9"]]), W = /* @__PURE__ */ _({
  __name: "List",
  setup(o) {
    const e = k(), { entries: n } = N(e);
    return (d, u) => (s(), p(b, null, [
      t("h4", null, [
        a("List "),
        i(d.$slots, "object-type"),
        a("s")
      ]),
      (s(!0), p(b, null, L(x(n), (c) => (s(), p("div", {
        key: c.id.toString()
      }, [
        i(d.$slots, "list-entry-delegate", {}, () => [
          (s(), m(B(H), { entry: c }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  W as default
};
