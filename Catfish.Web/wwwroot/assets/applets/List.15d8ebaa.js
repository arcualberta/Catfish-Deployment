import { defineComponent as C, openBlock as n, createBlock as b, Transition as V, withCtx as i, createElementVNode as t, renderSlot as p, ref as $, computed as S, resolveComponent as B, createElementBlock as u, createVNode as L, createTextVNode as c, toDisplayString as f, withDirectives as N, Fragment as g, renderList as T, unref as v, vModelSelect as I, createCommentVNode as R, resolveDynamicComponent as M } from "vue";
import { _ as U, u as w, e as j } from "./library-exports.c6d319d5.js";
import { storeToRefs as F } from "pinia";
const q = { class: "popup-modal" }, z = { class: "window" }, A = { class: "modal-header" }, G = { class: "modal-body" }, H = { class: "modal-footer" }, J = /* @__PURE__ */ C({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(l) {
    return (o, a) => (n(), b(V, { name: "fade" }, {
      default: i(() => [
        t("div", q, [
          t("div", z, [
            t("header", A, [
              p(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", G, [
              p(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", H, [
              p(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const K = /* @__PURE__ */ U(J, [["__scopeId", "data-v-d7d9691d"]]), O = { class: "row entryRow" }, Q = { class: "col-sm-3" }, W = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(l) {
    const o = l, a = $(!1), r = $(!1), _ = w(), d = S(() => _.apiRoot), y = S(() => j);
    console.log("stateList", y);
    const E = () => a.value = !a.value, h = () => r.value = !r.value, P = (k, e, m) => {
      _.changeStatus(k, e, m), a.value = !a.value, _.loadEntries(d == null ? void 0 : d.value);
    }, x = "/read/" + o.entry.id, D = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (k, e) => {
      const m = B("router-link");
      return n(), u("div", O, [
        L(m, {
          to: x,
          class: "col-6"
        }, {
          default: i(() => [
            c(f(l.entry.name), 1)
          ]),
          _: 1
        }),
        L(m, {
          to: D,
          class: "col-2"
        }, {
          default: i(() => [
            c("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (s) => h()),
          class: "col-2 change-state-link"
        }, "Change State"),
        r.value ? (n(), b(K, { key: 0 }, {
          header: i(() => [
            c(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (s) => r.value = !1)
            }, " x ")
          ]),
          body: i(() => [
            c(" Please select new State. " + f(l.entry.state) + " ", 1),
            t("div", Q, [
              N(t("select", {
                class: "form-select",
                "onUpdate:modelValue": e[2] || (e[2] = (s) => l.entry.state = s)
              }, [
                (n(!0), u(g, null, T(v(y), (s) => (n(), u("option", null, f(s), 1))), 256))
              ], 512), [
                [I, l.entry.state]
              ])
            ])
          ]),
          footer: i(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[3] || (e[3] = (s) => P(v(d) + "/change-state/" + o.entry.id, o.entry.id, v(y).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[4] || (e[4] = (s) => h()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : R("", !0),
        t("a", {
          onClick: e[5] || (e[5] = (s) => E()),
          class: "col-2 delete-link"
        }, "Delete")
      ]);
    };
  }
});
const X = /* @__PURE__ */ U(W, [["__scopeId", "data-v-34a7c38f"]]), te = /* @__PURE__ */ C({
  __name: "List",
  setup(l) {
    const o = w(), { entries: a } = F(o);
    return (r, _) => (n(), u(g, null, [
      t("h4", null, [
        c("List "),
        p(r.$slots, "object-type"),
        c("s")
      ]),
      (n(!0), u(g, null, T(v(a), (d) => (n(), u("div", {
        key: d.id.toString()
      }, [
        p(r.$slots, "list-entry-delegate", {}, () => [
          (n(), b(M(X), { entry: d }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  te as default
};
