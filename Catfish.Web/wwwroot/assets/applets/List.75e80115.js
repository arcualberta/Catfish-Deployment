import { defineComponent as g, openBlock as r, createBlock as m, Transition as B, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as b, ref as L, computed as N, resolveComponent as V, createElementBlock as p, createVNode as w, createTextVNode as a, toDisplayString as y, unref as v, Fragment as f, renderList as U, resolveDynamicComponent as I } from "vue";
import { _ as x, u as E, e as j } from "./library-exports.5afc3b45.js";
import { storeToRefs as F } from "pinia";
const M = { class: "popup-modal" }, O = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (r(), m(B, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        e("div", M, [
          e("div", O, [
            e("header", q, [
              c(o.$slots, "header", {}, void 0, !0)
            ]),
            e("section", z, [
              c(o.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", A, [
              c(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const D = /* @__PURE__ */ x(G, [["__scopeId", "data-v-5b6b18b4"]]), H = { class: "row entryRow" }, J = { class: "col-sm-3" }, K = { class: "form-select" }, Q = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = L(!1), i = L(!1), _ = E(), u = N(() => _.apiRoot), C = () => j;
    console.log("stateList", C);
    const k = () => n.value = !n.value, $ = () => i.value = !i.value, h = (T) => {
      _.deleteObject(T), n.value = !n.value;
    }, P = "/read/" + o.entry.id, R = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (T, t) => {
      const S = V("router-link");
      return r(), p("div", H, [
        w(S, {
          to: P,
          class: "col-6"
        }, {
          default: l(() => [
            a(y(d.entry.name), 1)
          ]),
          _: 1
        }),
        a(" " + y(v(u)) + " ", 1),
        w(S, {
          to: R,
          class: "col-2"
        }, {
          default: l(() => [
            a("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => $()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (r(), m(D, {
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
            e("div", J, [
              e("select", K, [
                (r(), p(f, null, U(C, (s) => e("option", null, y(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => h(v(u) + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (s) => $()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (s) => k()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (r(), m(D, {
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
              onClick: t[6] || (t[6] = (s) => h("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (s) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0)
      ]);
    };
  }
});
const W = /* @__PURE__ */ x(Q, [["__scopeId", "data-v-1ee34197"]]), ee = /* @__PURE__ */ g({
  __name: "List",
  setup(d) {
    const o = E(), { entries: n } = F(o);
    return (i, _) => (r(), p(f, null, [
      e("h4", null, [
        a("List "),
        c(i.$slots, "object-type"),
        a("s")
      ]),
      (r(!0), p(f, null, U(v(n), (u) => (r(), p("div", {
        key: u.id.toString()
      }, [
        c(i.$slots, "list-entry-delegate", {}, () => [
          (r(), m(I(W), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
