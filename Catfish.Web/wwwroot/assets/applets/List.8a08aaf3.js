import { defineComponent as g, openBlock as n, createBlock as C, Transition as D, withCtx as d, createElementVNode as t, renderSlot as u, ref as k, computed as S, resolveComponent as N, createElementBlock as i, createVNode as L, createTextVNode as c, toDisplayString as v, Fragment as y, renderList as T, unref as f, createCommentVNode as V, resolveDynamicComponent as R } from "vue";
import { _ as U, u as w, e as I } from "./library-exports.344c37bf.js";
import { storeToRefs as j } from "pinia";
const F = { class: "popup-modal" }, M = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (e, s) => (n(), C(D, { name: "fade" }, {
      default: d(() => [
        t("div", F, [
          t("div", M, [
            t("header", q, [
              u(e.$slots, "header", {}, void 0, !0)
            ]),
            t("section", z, [
              u(e.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", A, [
              u(e.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const H = /* @__PURE__ */ U(G, [["__scopeId", "data-v-d7d9691d"]]), J = { class: "row entryRow" }, K = { class: "col-sm-3" }, O = ["value"], Q = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const e = p, s = k(!1), l = k(!1), _ = w(), a = S(() => _.apiRoot), h = S(() => I);
    console.log("stateList", h);
    const E = () => s.value = !s.value, b = () => l.value = !l.value, P = ($, o, m) => {
      _.changeStatus($, o, m), s.value = !s.value, _.loadEntries(a == null ? void 0 : a.value);
    }, x = "/read/" + e.entry.id, B = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, ($, o) => {
      const m = N("router-link");
      return n(), i("div", J, [
        L(m, {
          to: x,
          class: "col-6"
        }, {
          default: d(() => [
            c(v(p.entry.name), 1)
          ]),
          _: 1
        }),
        L(m, {
          to: B,
          class: "col-2"
        }, {
          default: d(() => [
            c("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: o[0] || (o[0] = (r) => b()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (n(), C(H, { key: 0 }, {
          header: d(() => [
            c(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: o[1] || (o[1] = (r) => l.value = !1)
            }, " x ")
          ]),
          body: d(() => [
            c(" Please select new State. " + v(e.entry.state) + " ", 1),
            t("div", K, [
              t("select", {
                class: "form-select",
                value: e.entry.state
              }, [
                (n(!0), i(y, null, T(f(h), (r) => (n(), i("option", null, v(r), 1))), 256))
              ], 8, O)
            ])
          ]),
          footer: d(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: o[2] || (o[2] = (r) => P(f(a) + "/change-state/" + e.entry.id, e.entry.id, e.entry.state)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: o[3] || (o[3] = (r) => b()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : V("", !0),
        t("a", {
          onClick: o[4] || (o[4] = (r) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const W = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-09fd1871"]]), ee = /* @__PURE__ */ g({
  __name: "List",
  setup(p) {
    const e = w(), { entries: s } = j(e);
    return (l, _) => (n(), i(y, null, [
      t("h4", null, [
        c("List "),
        u(l.$slots, "object-type"),
        c("s")
      ]),
      (n(!0), i(y, null, T(f(s), (a) => (n(), i("div", {
        key: a.id.toString()
      }, [
        u(l.$slots, "list-entry-delegate", {}, () => [
          (n(), C(R(W), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
