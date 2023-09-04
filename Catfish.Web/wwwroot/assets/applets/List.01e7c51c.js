import { defineComponent as v, openBlock as r, createBlock as m, Transition as P, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as b, ref as T, resolveComponent as B, createElementBlock as p, createVNode as S, createTextVNode as a, toDisplayString as _, Fragment as y, renderList as D, unref as N, resolveDynamicComponent as V } from "vue";
import { _ as L, u as U, e as I } from "./library-exports.1f49c0f3.js";
import { storeToRefs as R } from "pinia";
const j = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ v({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (r(), m(P, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        e("div", j, [
          e("div", F, [
            e("header", M, [
              c(o.$slots, "header", {}, void 0, !0)
            ]),
            e("section", O, [
              c(o.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", q, [
              c(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const w = /* @__PURE__ */ L(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ v({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = T(!1), i = T(!1), f = U(), u = () => I, g = () => n.value = !n.value, C = () => i.value = !i.value, k = ($) => {
      f.deleteObject($), n.value = !n.value;
    }, x = "/read/" + o.entry.id, E = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, ($, t) => {
      const h = B("router-link");
      return r(), p("div", A, [
        S(h, {
          to: x,
          class: "col-6"
        }, {
          default: l(() => [
            a(_(d.entry.name), 1)
          ]),
          _: 1
        }),
        S(h, {
          to: E,
          class: "col-2"
        }, {
          default: l(() => [
            a("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => C()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (r(), m(w, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => i.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            a(" Please select new State. "),
            e("div", G, [
              a(_(u) + " "),
              e("select", H, [
                (r(), p(y, null, D(u, (s) => e("option", null, _(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => k("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (s) => C()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (s) => g()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (r(), m(w, {
          key: 1,
          popupTrigger: !0
        }, {
          header: l(() => [
            a(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (s) => n.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            a(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: t[6] || (t[6] = (s) => k("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (s) => g()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0)
      ]);
    };
  }
});
const K = /* @__PURE__ */ L(J, [["__scopeId", "data-v-102b0ba3"]]), Y = /* @__PURE__ */ v({
  __name: "List",
  setup(d) {
    const o = U(), { entries: n } = R(o);
    return (i, f) => (r(), p(y, null, [
      e("h4", null, [
        a("List "),
        c(i.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(y, null, D(N(n), (u) => (r(), p("div", {
        key: u.id.toString()
      }, [
        c(i.$slots, "list-entry-delegate", {}, () => [
          (r(), m(V(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
