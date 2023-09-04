import { defineComponent as g, openBlock as n, createBlock as C, Transition as V, withCtx as c, createElementVNode as o, renderSlot as u, ref as k, computed as $, resolveComponent as B, createElementBlock as i, createVNode as S, createTextVNode as d, toDisplayString as L, withDirectives as N, Fragment as f, renderList as T, unref as v, vModelSelect as I, createCommentVNode as R, resolveDynamicComponent as M } from "vue";
import { _ as U, u as w, e as j } from "./library-exports.e99587b9.js";
import { storeToRefs as F } from "pinia";
const q = { class: "popup-modal" }, z = { class: "window" }, A = { class: "modal-header" }, G = { class: "modal-body" }, H = { class: "modal-footer" }, J = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (e, l) => (n(), C(V, { name: "fade" }, {
      default: c(() => [
        o("div", q, [
          o("div", z, [
            o("header", A, [
              u(e.$slots, "header", {}, void 0, !0)
            ]),
            o("section", G, [
              u(e.$slots, "body", {}, void 0, !0)
            ]),
            o("footer", H, [
              u(e.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const K = /* @__PURE__ */ U(J, [["__scopeId", "data-v-d7d9691d"]]), O = { class: "row entryRow" }, Q = { class: "col-sm-3" }, W = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const e = p, l = k(!1), a = k(!1), _ = w(), r = $(() => _.apiRoot), y = $(() => j);
    console.log("stateList", y);
    const E = () => l.value = !l.value, b = () => a.value = !a.value, P = (h, t, m) => {
      _.changeStatus(h, t, m), l.value = !l.value, _.loadEntries(r == null ? void 0 : r.value);
    }, x = "/read/" + e.entry.id, D = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (h, t) => {
      const m = B("router-link");
      return n(), i("div", O, [
        S(m, {
          to: x,
          class: "col-6"
        }, {
          default: c(() => [
            d(L(p.entry.name), 1)
          ]),
          _: 1
        }),
        S(m, {
          to: D,
          class: "col-2"
        }, {
          default: c(() => [
            d("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: t[0] || (t[0] = (s) => b()),
          class: "col-2 change-state-link"
        }, "Change State"),
        a.value ? (n(), C(K, { key: 0 }, {
          header: c(() => [
            d(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => a.value = !1)
            }, " x ")
          ]),
          body: c(() => [
            d(" Please select new State. "),
            o("div", Q, [
              N(o("select", {
                class: "form-select",
                "onUpdate:modelValue": t[2] || (t[2] = (s) => e.entry.state = s)
              }, [
                (n(!0), i(f, null, T(v(y), (s) => (n(), i("option", null, L(s), 1))), 256))
              ], 512), [
                [I, e.entry.state]
              ])
            ])
          ]),
          footer: c(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[3] || (t[3] = (s) => P(v(r) + "/change-state/" + e.entry.id, e.entry.id, v(y).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[4] || (t[4] = (s) => b()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : R("", !0),
        o("a", {
          onClick: t[5] || (t[5] = (s) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const X = /* @__PURE__ */ U(W, [["__scopeId", "data-v-a42c3cdc"]]), te = /* @__PURE__ */ g({
  __name: "List",
  setup(p) {
    const e = w(), { entries: l } = F(e);
    return (a, _) => (n(), i(f, null, [
      o("h4", null, [
        d("List "),
        u(a.$slots, "object-type"),
        d("s")
      ]),
      (n(!0), i(f, null, T(v(l), (r) => (n(), i("div", {
        key: r.id.toString()
      }, [
        u(a.$slots, "list-entry-delegate", {}, () => [
          (n(), C(M(X), { entry: r }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  te as default
};
