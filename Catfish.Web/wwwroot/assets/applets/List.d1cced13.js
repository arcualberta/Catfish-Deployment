import { defineComponent as g, openBlock as i, createBlock as f, Transition as N, withCtx as a, createElementVNode as e, renderSlot as c, createCommentVNode as v, ref as L, computed as V, resolveComponent as I, createElementBlock as p, createVNode as w, createTextVNode as r, toDisplayString as y, unref as _, Fragment as b, renderList as E, resolveDynamicComponent as R } from "vue";
import { _ as U, u as x, e as j } from "./library-exports.b08df282.js";
import { storeToRefs as F } from "pinia";
const M = { class: "popup-modal" }, O = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(u) {
    return (o, n) => u.popupTrigger ? (i(), f(N, {
      key: 0,
      name: "fade"
    }, {
      default: a(() => [
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
    })) : v("", !0);
  }
});
const D = /* @__PURE__ */ U(G, [["__scopeId", "data-v-5b6b18b4"]]), H = { class: "row entryRow" }, J = { class: "col-sm-3" }, K = { class: "form-select" }, Q = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(u) {
    const o = u, n = L(!1), d = L(!1), m = x(), s = V(() => m.apiRoot), C = () => j;
    console.log("stateList", C);
    const k = () => n.value = !n.value, $ = () => d.value = !d.value, T = (S) => {
      m.deleteObject(S), m.loadEntries(s == null ? void 0 : s.value), n.value = !n.value;
    }, P = "/read/" + o.entry.id, B = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (S, t) => {
      const h = I("router-link");
      return i(), p("div", H, [
        w(h, {
          to: P,
          class: "col-6"
        }, {
          default: a(() => [
            r(y(u.entry.name), 1)
          ]),
          _: 1
        }),
        r(" " + y(_(s)) + " ", 1),
        w(h, {
          to: B,
          class: "col-2"
        }, {
          default: a(() => [
            r("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (l) => $()),
          class: "col-2 change-state-link"
        }, "Change State"),
        d.value ? (i(), f(D, {
          key: 0,
          popupTrigger: !0
        }, {
          header: a(() => [
            r(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (l) => d.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            r(" Please select new State. "),
            e("div", J, [
              e("select", K, [
                (i(), p(b, null, E(C, (l) => e("option", null, y(l), 1)), 64))
              ])
            ])
          ]),
          footer: a(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (l) => T(_(s) + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (l) => $()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : v("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (l) => k()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (i(), f(D, {
          key: 1,
          popupTrigger: !0
        }, {
          header: a(() => [
            r(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (l) => n.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            r(" Do you want to delete this Item? ")
          ]),
          footer: a(() => [
            e("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: t[6] || (t[6] = (l) => T(_(s) + "/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (l) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : v("", !0)
      ]);
    };
  }
});
const W = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-9761f6ff"]]), ee = /* @__PURE__ */ g({
  __name: "List",
  setup(u) {
    const o = x(), { entries: n } = F(o);
    return (d, m) => (i(), p(b, null, [
      e("h4", null, [
        r("List "),
        c(d.$slots, "object-type"),
        r("s")
      ]),
      (i(!0), p(b, null, E(_(n), (s) => (i(), p("div", {
        key: s.id.toString()
      }, [
        c(d.$slots, "list-entry-delegate", {}, () => [
          (i(), f(R(W), { entry: s }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
