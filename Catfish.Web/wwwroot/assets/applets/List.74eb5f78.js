import { defineComponent as g, openBlock as n, createBlock as C, Transition as V, withCtx as d, createElementVNode as o, renderSlot as u, ref as $, computed as S, resolveComponent as B, createElementBlock as c, createVNode as L, createTextVNode as i, toDisplayString as y, withDirectives as N, Fragment as v, renderList as T, unref as f, vModelSelect as R, createCommentVNode as I, resolveDynamicComponent as M } from "vue";
import { _ as U, u as w, e as j } from "./library-exports.c0988809.js";
import { storeToRefs as F } from "pinia";
const q = { class: "popup-modal" }, z = { class: "window" }, A = { class: "modal-header" }, G = { class: "modal-body" }, H = { class: "modal-footer" }, J = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (e, a) => (n(), C(V, { name: "fade" }, {
      default: d(() => [
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
    const e = p, a = $(!1), l = $(!1), _ = w(), r = S(() => _.apiRoot), b = S(() => j);
    console.log("stateList", b);
    const E = () => a.value = !a.value, h = () => l.value = !l.value, P = (k, t, m) => {
      _.changeStatus(k, t, m), a.value = !a.value, _.loadEntries(r == null ? void 0 : r.value);
    }, x = "/read/" + e.entry.id, D = "/update/" + e.entry.id;
    return "" + e.entry.id, "" + e.entry.id, (k, t) => {
      const m = B("router-link");
      return n(), c("div", O, [
        L(m, {
          to: x,
          class: "col-6"
        }, {
          default: d(() => [
            i(y(p.entry.name), 1)
          ]),
          _: 1
        }),
        L(m, {
          to: D,
          class: "col-2"
        }, {
          default: d(() => [
            i("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: t[0] || (t[0] = (s) => h()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (n(), C(K, { key: 0 }, {
          header: d(() => [
            i(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => l.value = !1)
            }, " x ")
          ]),
          body: d(() => [
            i(" Please select new State. " + y(e.entry.state) + " ", 1),
            o("div", Q, [
              N(o("select", {
                class: "form-select",
                "onUpdate:modelValue": t[2] || (t[2] = (s) => e.entry.state = s)
              }, [
                (n(!0), c(v, null, T(f(b), (s) => (n(), c("option", null, y(s), 1))), 256))
              ], 512), [
                [R, e.entry.state]
              ])
            ])
          ]),
          footer: d(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[3] || (t[3] = (s) => P(f(r) + "/change-state/" + e.entry.id, e.entry.id, e.entry.state)),
              "aria-label": "Close modal"
            }, " Confirm "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[4] || (t[4] = (s) => h()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : I("", !0),
        o("a", {
          onClick: t[5] || (t[5] = (s) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const X = /* @__PURE__ */ U(W, [["__scopeId", "data-v-83a6481a"]]), te = /* @__PURE__ */ g({
  __name: "List",
  setup(p) {
    const e = w(), { entries: a } = F(e);
    return (l, _) => (n(), c(v, null, [
      o("h4", null, [
        i("List "),
        u(l.$slots, "object-type"),
        i("s")
      ]),
      (n(!0), c(v, null, T(f(a), (r) => (n(), c("div", {
        key: r.id.toString()
      }, [
        u(l.$slots, "list-entry-delegate", {}, () => [
          (n(), C(M(X), { entry: r }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  te as default
};
