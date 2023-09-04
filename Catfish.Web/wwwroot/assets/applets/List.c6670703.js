import { defineComponent as f, openBlock as a, createBlock as _, Transition as N, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as y, ref as h, computed as V, resolveComponent as I, createElementBlock as p, createVNode as L, createTextVNode as i, toDisplayString as w, Fragment as b, renderList as E, unref as v, resolveDynamicComponent as R } from "vue";
import { _ as U, u as x, e as j } from "./library-exports.2dca44a9.js";
import { storeToRefs as F } from "pinia";
const M = { class: "popup-modal" }, O = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ f({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(u) {
    return (o, n) => u.popupTrigger ? (a(), _(N, {
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
    })) : y("", !0);
  }
});
const D = /* @__PURE__ */ U(G, [["__scopeId", "data-v-5b6b18b4"]]), H = { class: "row entryRow" }, J = { class: "col-sm-3" }, K = { class: "form-select" }, Q = /* @__PURE__ */ f({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(u) {
    const o = u, n = h(!1), d = h(!1), m = x(), r = V(() => m.apiRoot), g = () => j;
    console.log("stateList", g);
    const C = () => n.value = !n.value, k = () => d.value = !d.value, $ = (T) => {
      m.deleteObject(T), m.loadEntries(r == null ? void 0 : r.value), n.value = !n.value;
    }, P = "/read/" + o.entry.id, B = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (T, t) => {
      const S = I("router-link");
      return a(), p("div", H, [
        L(S, {
          to: P,
          class: "col-6"
        }, {
          default: l(() => [
            i(w(u.entry.name), 1)
          ]),
          _: 1
        }),
        L(S, {
          to: B,
          class: "col-2"
        }, {
          default: l(() => [
            i("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        d.value ? (a(), _(D, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            i(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => d.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            i(" Please select new State. "),
            e("div", J, [
              e("select", K, [
                (a(), p(b, null, E(g, (s) => e("option", null, w(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => $(v(r) + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (s) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (s) => C()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), _(D, {
          key: 1,
          popupTrigger: !0
        }, {
          header: l(() => [
            i(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (s) => n.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            i(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: t[6] || (t[6] = (s) => $(v(r) + "/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (s) => C()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0)
      ]);
    };
  }
});
const W = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-095b95f6"]]), ee = /* @__PURE__ */ f({
  __name: "List",
  setup(u) {
    const o = x(), { entries: n } = F(o);
    return (d, m) => (a(), p(b, null, [
      e("h4", null, [
        i("List "),
        c(d.$slots, "object-type"),
        i("s")
      ]),
      (a(!0), p(b, null, E(v(n), (r) => (a(), p("div", {
        key: r.id.toString()
      }, [
        c(d.$slots, "list-entry-delegate", {}, () => [
          (a(), _(R(W), { entry: r }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
