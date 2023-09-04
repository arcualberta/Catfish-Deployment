import { defineComponent as C, openBlock as n, createBlock as b, Transition as D, withCtx as c, createElementVNode as e, renderSlot as p, ref as k, computed as S, resolveComponent as N, createElementBlock as u, createVNode as L, createTextVNode as i, toDisplayString as y, Fragment as g, renderList as T, unref as f, createCommentVNode as V, resolveDynamicComponent as I } from "vue";
import { _ as U, u as w, e as R } from "./library-exports.ea350a6b.js";
import { storeToRefs as j } from "pinia";
const F = { class: "popup-modal" }, M = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, A = { class: "modal-footer" }, G = /* @__PURE__ */ C({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(r) {
    return (t, s) => (n(), b(D, { name: "fade" }, {
      default: c(() => [
        e("div", F, [
          e("div", M, [
            e("header", q, [
              p(t.$slots, "header", {}, void 0, !0)
            ]),
            e("section", z, [
              p(t.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", A, [
              p(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const H = /* @__PURE__ */ U(G, [["__scopeId", "data-v-d7d9691d"]]), J = { class: "row entryRow" }, K = { class: "col-sm-3" }, O = ["model"], Q = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(r) {
    const t = r, s = k(!1), l = k(!1), _ = w(), a = S(() => _.apiRoot), v = S(() => R);
    console.log("stateList", v);
    const E = () => s.value = !s.value, h = () => l.value = !l.value, P = ($, o, m) => {
      _.changeStatus($, o, m), s.value = !s.value, _.loadEntries(a == null ? void 0 : a.value);
    }, x = "/read/" + t.entry.id, B = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, ($, o) => {
      const m = N("router-link");
      return n(), u("div", J, [
        L(m, {
          to: x,
          class: "col-6"
        }, {
          default: c(() => [
            i(y(r.entry.name), 1)
          ]),
          _: 1
        }),
        L(m, {
          to: B,
          class: "col-2"
        }, {
          default: c(() => [
            i("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: o[0] || (o[0] = (d) => h()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (n(), b(H, { key: 0 }, {
          header: c(() => [
            i(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: o[1] || (o[1] = (d) => l.value = !1)
            }, " x ")
          ]),
          body: c(() => [
            i(" Please select new State. " + y(r.entry.state) + " ", 1),
            e("div", K, [
              e("select", {
                class: "form-select",
                model: r.entry.state
              }, [
                (n(!0), u(g, null, T(f(v), (d) => (n(), u("option", null, y(d), 1))), 256))
              ], 8, O)
            ])
          ]),
          footer: c(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: o[2] || (o[2] = (d) => P(f(a) + "/change-state/" + t.entry.id, t.entry.id, f(v).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: o[3] || (o[3] = (d) => h()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : V("", !0),
        e("a", {
          onClick: o[4] || (o[4] = (d) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const W = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-20ffb27f"]]), ee = /* @__PURE__ */ C({
  __name: "List",
  setup(r) {
    const t = w(), { entries: s } = j(t);
    return (l, _) => (n(), u(g, null, [
      e("h4", null, [
        i("List "),
        p(l.$slots, "object-type"),
        i("s")
      ]),
      (n(!0), u(g, null, T(f(s), (a) => (n(), u("div", {
        key: a.id.toString()
      }, [
        p(l.$slots, "list-entry-delegate", {}, () => [
          (n(), b(I(W), { entry: a }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  ee as default
};
