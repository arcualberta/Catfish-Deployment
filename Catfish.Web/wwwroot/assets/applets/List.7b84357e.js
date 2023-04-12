import { defineComponent as f, openBlock as a, createBlock as v, Transition as w, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as b, ref as D, resolveComponent as U, createElementBlock as p, Fragment as y, createVNode as m, unref as h, createTextVNode as r, toDisplayString as E, pushScopeId as I, popScopeId as L, renderList as x, resolveDynamicComponent as B } from "vue";
import { _ as $, u as k, a as N } from "./library-exports.095c12d9.js";
import { storeToRefs as P } from "pinia";
const V = { class: "popup-modal" }, M = { class: "window" }, R = { class: "modal-header" }, j = { class: "modal-body" }, F = { class: "modal-footer" }, O = /* @__PURE__ */ f({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(o) {
    return (t, n) => o.popupTrigger ? (a(), v(w, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        e("div", V, [
          e("div", M, [
            e("header", R, [
              c(t.$slots, "header", {}, void 0, !0)
            ]),
            e("section", j, [
              c(t.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", F, [
              c(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const q = /* @__PURE__ */ $(O, [["__scopeId", "data-v-1c174a09"]]), z = (o) => (I("data-v-aa89a22c"), o = o(), L(), o), A = { class: "row entryRow" }, G = /* @__PURE__ */ z(() => /* @__PURE__ */ e("a", {
  href: "#",
  class: "col-2"
}, "Change State", -1)), H = /* @__PURE__ */ f({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(o) {
    const t = o, n = D(!1), d = k(), u = () => n.value = !n.value, i = (g) => {
      d.deleteObject(g), n.value = !n.value;
    }, S = "/read/" + t.entry.id, T = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (g, s) => {
      const C = U("router-link");
      return a(), p(y, null, [
        m(N, {
          model: h(d).transientMessageModel
        }, null, 8, ["model"]),
        e("div", A, [
          m(C, {
            to: S,
            class: "col-6"
          }, {
            default: l(() => [
              r(E(o.entry.name), 1)
            ]),
            _: 1
          }),
          m(C, {
            to: T,
            class: "col-2"
          }, {
            default: l(() => [
              r("Update")
            ]),
            _: 1
          }),
          G,
          e("a", {
            onClick: s[0] || (s[0] = (_) => u()),
            class: "col-2 delete-link"
          }, "Delete"),
          n.value ? (a(), v(q, {
            key: 0,
            popupTrigger: !0
          }, {
            header: l(() => [
              r(" Delete Confirmation. "),
              e("button", {
                type: "button",
                class: "btn-close",
                onClick: s[1] || (s[1] = (_) => n.value = !1)
              }, " x ")
            ]),
            body: l(() => [
              r(" Do you want to delete this Item? ")
            ]),
            footer: l(() => [
              e("button", {
                type: "button",
                class: "modal-confirm-btn",
                onClick: s[2] || (s[2] = (_) => i("https://localhost:5020/api/items/" + t.entry.id)),
                "aria-label": "Close modal"
              }, " Delete "),
              e("button", {
                type: "button",
                class: "modal-cancel-btn",
                onClick: s[3] || (s[3] = (_) => u()),
                "aria-label": "Close modal"
              }, " Cancel ")
            ]),
            _: 1
          })) : b("", !0)
        ])
      ], 64);
    };
  }
});
const J = /* @__PURE__ */ $(H, [["__scopeId", "data-v-aa89a22c"]]), X = /* @__PURE__ */ f({
  __name: "List",
  setup(o) {
    const t = k(), { entries: n } = P(t);
    return (d, u) => (a(), p(y, null, [
      e("h4", null, [
        r("List "),
        c(d.$slots, "object-type"),
        r("s")
      ]),
      (a(!0), p(y, null, x(h(n), (i) => (a(), p("div", {
        key: i.id.toString()
      }, [
        c(d.$slots, "list-entry-delegate", {}, () => [
          (a(), v(B(J), { entry: i }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  X as default
};
