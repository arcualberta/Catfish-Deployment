import { defineComponent as y, openBlock as n, createBlock as g, Transition as D, withCtx as c, createElementVNode as e, renderSlot as u, ref as $, computed as k, resolveComponent as N, createElementBlock as i, createVNode as S, createTextVNode as d, toDisplayString as L, Fragment as f, renderList as T, unref as m, createCommentVNode as V, resolveDynamicComponent as I } from "vue";
import { _ as w, u as U, e as R } from "./library-exports.4afb4ab8.js";
import { storeToRefs as j } from "pinia";
const F = { class: "popup-modal" }, M = { class: "window" }, O = { class: "modal-header" }, q = { class: "modal-body" }, z = { class: "modal-footer" }, A = /* @__PURE__ */ y({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (t, s) => (n(), g(D, { name: "fade" }, {
      default: c(() => [
        e("div", F, [
          e("div", M, [
            e("header", O, [
              u(t.$slots, "header", {}, void 0, !0)
            ]),
            e("section", q, [
              u(t.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", z, [
              u(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const G = /* @__PURE__ */ w(A, [["__scopeId", "data-v-d7d9691d"]]), H = { class: "row entryRow" }, J = { class: "col-sm-3" }, K = { class: "form-select" }, Q = /* @__PURE__ */ y({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const t = p, s = $(!1), l = $(!1), _ = U(), a = k(() => _.apiRoot), v = k(() => R);
    console.log("stateList", v);
    const E = () => s.value = !s.value, C = () => l.value = !l.value, P = (b, o) => {
      _.deleteObject(b), s.value = !s.value, _.loadEntries(a == null ? void 0 : a.value);
    }, x = "/read/" + t.entry.id, B = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (b, o) => {
      const h = N("router-link");
      return n(), i("div", H, [
        S(h, {
          to: x,
          class: "col-6"
        }, {
          default: c(() => [
            d(L(p.entry.name), 1)
          ]),
          _: 1
        }),
        S(h, {
          to: B,
          class: "col-2"
        }, {
          default: c(() => [
            d("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: o[0] || (o[0] = (r) => C()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (n(), g(G, { key: 0 }, {
          header: c(() => [
            d(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: o[1] || (o[1] = (r) => l.value = !1)
            }, " x ")
          ]),
          body: c(() => [
            d(" Please select new State. "),
            e("div", J, [
              e("select", K, [
                (n(!0), i(f, null, T(m(v), (r) => (n(), i("option", null, L(r), 1))), 256))
              ])
            ])
          ]),
          footer: c(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: o[2] || (o[2] = (r) => P(m(a) + "/change-state/" + t.entry.id, t.entry.id, m(v).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: o[3] || (o[3] = (r) => C()),
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
const W = /* @__PURE__ */ w(Q, [["__scopeId", "data-v-7cdc8cdb"]]), ee = /* @__PURE__ */ y({
  __name: "List",
  setup(p) {
    const t = U(), { entries: s } = j(t);
    return (l, _) => (n(), i(f, null, [
      e("h4", null, [
        d("List "),
        u(l.$slots, "object-type"),
        d("s")
      ]),
      (n(!0), i(f, null, T(m(s), (a) => (n(), i("div", {
        key: a.id.toString()
      }, [
        u(l.$slots, "list-entry-delegate", {}, () => [
          (n(), g(I(W), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
