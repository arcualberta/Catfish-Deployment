import { defineComponent as f, openBlock as n, createBlock as y, Transition as V, withCtx as a, createElementVNode as t, renderSlot as p, createCommentVNode as b, ref as h, computed as L, resolveComponent as I, createElementBlock as u, createVNode as w, createTextVNode as i, toDisplayString as D, Fragment as v, renderList as U, unref as _, resolveDynamicComponent as R } from "vue";
import { _ as x, u as P, e as j } from "./library-exports.289f082f.js";
import { storeToRefs as F } from "pinia";
const M = { class: "popup-modal" }, O = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ f({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(c) {
    return (o, s) => c.popupTrigger ? (n(), y(V, {
      key: 0,
      name: "fade"
    }, {
      default: a(() => [
        t("div", M, [
          t("div", O, [
            t("header", q, [
              p(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", z, [
              p(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", A, [
              p(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const E = /* @__PURE__ */ x(G, [["__scopeId", "data-v-5b6b18b4"]]), H = { class: "row entryRow" }, J = { class: "col-sm-3" }, K = { class: "form-select" }, Q = /* @__PURE__ */ f({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(c) {
    const o = c, s = h(!1), d = h(!1), m = P(), r = L(() => m.apiRoot), g = L(() => j);
    console.log("stateList", g);
    const C = () => s.value = !s.value, k = () => d.value = !d.value, $ = (T) => {
      m.deleteObject(T), s.value = !s.value, m.loadEntries(r == null ? void 0 : r.value);
    }, B = "/read/" + o.entry.id, N = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (T, e) => {
      const S = I("router-link");
      return n(), u("div", H, [
        w(S, {
          to: B,
          class: "col-6"
        }, {
          default: a(() => [
            i(D(c.entry.name), 1)
          ]),
          _: 1
        }),
        w(S, {
          to: N,
          class: "col-2"
        }, {
          default: a(() => [
            i("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (l) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        d.value ? (n(), y(E, {
          key: 0,
          popupTrigger: !0
        }, {
          header: a(() => [
            i(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (l) => d.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            i(" Please select new State. "),
            t("div", J, [
              t("select", K, [
                (n(!0), u(v, null, U(_(g), (l) => (n(), u("option", null, D(l), 1))), 256))
              ])
            ])
          ]),
          footer: a(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (l) => $(_(r) + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[3] || (e[3] = (l) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0),
        t("a", {
          onClick: e[4] || (e[4] = (l) => C()),
          class: "col-2 delete-link"
        }, "Delete"),
        s.value ? (n(), y(E, {
          key: 1,
          popupTrigger: !0
        }, {
          header: a(() => [
            i(" Delete Confirmation. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[5] || (e[5] = (l) => s.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            i(" Do you want to delete this Item? ")
          ]),
          footer: a(() => [
            t("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[6] || (e[6] = (l) => $(_(r) + "/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[7] || (e[7] = (l) => C()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : b("", !0)
      ]);
    };
  }
});
const W = /* @__PURE__ */ x(Q, [["__scopeId", "data-v-494b671d"]]), ee = /* @__PURE__ */ f({
  __name: "List",
  setup(c) {
    const o = P(), { entries: s } = F(o);
    return (d, m) => (n(), u(v, null, [
      t("h4", null, [
        i("List "),
        p(d.$slots, "object-type"),
        i("s")
      ]),
      (n(!0), u(v, null, U(_(s), (r) => (n(), u("div", {
        key: r.id.toString()
      }, [
        p(d.$slots, "list-entry-delegate", {}, () => [
          (n(), y(R(W), { entry: r }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
