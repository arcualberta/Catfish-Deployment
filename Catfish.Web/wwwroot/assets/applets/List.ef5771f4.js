import { defineComponent as g, openBlock as n, createBlock as C, Transition as D, withCtx as d, createElementVNode as e, renderSlot as u, ref as $, computed as k, resolveComponent as N, createElementBlock as i, createVNode as S, createTextVNode as c, toDisplayString as L, Fragment as y, renderList as T, unref as v, createCommentVNode as V, resolveDynamicComponent as I } from "vue";
import { _ as U, u as w, e as R } from "./library-exports.f76d27e2.js";
import { storeToRefs as j } from "pinia";
const F = { class: "popup-modal" }, M = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (t, s) => (n(), C(D, { name: "fade" }, {
      default: d(() => [
        e("div", F, [
          e("div", M, [
            e("header", q, [
              u(t.$slots, "header", {}, void 0, !0)
            ]),
            e("section", z, [
              u(t.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", A, [
              u(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const H = /* @__PURE__ */ U(G, [["__scopeId", "data-v-d7d9691d"]]), J = { class: "row entryRow" }, K = { class: "col-sm-3" }, O = { class: "form-select" }, Q = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const t = p, s = $(!1), l = $(!1), _ = w(), a = k(() => _.apiRoot), f = k(() => R);
    console.log("stateList", f);
    const E = () => s.value = !s.value, b = () => l.value = !l.value, P = (h, o, m) => {
      _.changeStatus(h, o, m), s.value = !s.value, _.loadEntries(a == null ? void 0 : a.value);
    }, x = "/read/" + t.entry.id, B = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (h, o) => {
      const m = N("router-link");
      return n(), i("div", J, [
        S(m, {
          to: x,
          class: "col-6"
        }, {
          default: d(() => [
            c(L(p.entry.name), 1)
          ]),
          _: 1
        }),
        S(m, {
          to: B,
          class: "col-2"
        }, {
          default: d(() => [
            c("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: o[0] || (o[0] = (r) => b()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (n(), C(H, { key: 0 }, {
          header: d(() => [
            c(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: o[1] || (o[1] = (r) => l.value = !1)
            }, " x ")
          ]),
          body: d(() => [
            c(" Please select new State. "),
            e("div", K, [
              e("select", O, [
                (n(!0), i(y, null, T(v(f), (r) => (n(), i("option", null, L(r), 1))), 256))
              ])
            ])
          ]),
          footer: d(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: o[2] || (o[2] = (r) => P(v(a) + "/change-state/" + t.entry.id, t.entry.id, v(f).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: o[3] || (o[3] = (r) => b()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : V("", !0),
        e("a", {
          onClick: o[4] || (o[4] = (r) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const W = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-8b3d8355"]]), ee = /* @__PURE__ */ g({
  __name: "List",
  setup(p) {
    const t = w(), { entries: s } = j(t);
    return (l, _) => (n(), i(y, null, [
      e("h4", null, [
        c("List "),
        u(l.$slots, "object-type"),
        c("s")
      ]),
      (n(!0), i(y, null, T(v(s), (a) => (n(), i("div", {
        key: a.id.toString()
      }, [
        u(l.$slots, "list-entry-delegate", {}, () => [
          (n(), C(I(W), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
