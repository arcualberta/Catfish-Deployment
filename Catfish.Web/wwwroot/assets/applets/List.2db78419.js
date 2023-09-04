import { defineComponent as g, openBlock as n, createBlock as _, Transition as B, withCtx as a, createElementVNode as t, renderSlot as p, createCommentVNode as b, ref as S, computed as N, resolveComponent as V, createElementBlock as u, createVNode as h, createTextVNode as i, toDisplayString as L, Fragment as v, renderList as D, unref as f, resolveDynamicComponent as I } from "vue";
import { _ as E, u as U, e as R } from "./library-exports.e1ce4a69.js";
import { storeToRefs as j } from "pinia";
const F = { class: "popup-modal" }, M = { class: "window" }, O = { class: "modal-header" }, q = { class: "modal-body" }, z = { class: "modal-footer" }, A = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(c) {
    return (o, s) => c.popupTrigger ? (n(), _(B, {
      key: 0,
      name: "fade"
    }, {
      default: a(() => [
        t("div", F, [
          t("div", M, [
            t("header", O, [
              p(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", q, [
              p(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", z, [
              p(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : b("", !0);
  }
});
const w = /* @__PURE__ */ E(A, [["__scopeId", "data-v-5b6b18b4"]]), G = { class: "row entryRow" }, H = { class: "col-sm-3" }, J = { class: "form-select" }, K = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(c) {
    const o = c, s = S(!1), d = S(!1), m = U(), r = N(() => m.apiRoot);
    console.log("stateList", R);
    const C = () => s.value = !s.value, k = () => d.value = !d.value, $ = (y) => {
      m.deleteObject(y), s.value = !s.value, m.loadEntries(r == null ? void 0 : r.value);
    }, P = "/read/" + o.entry.id, x = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (y, e) => {
      const T = V("router-link");
      return n(), u("div", G, [
        h(T, {
          to: P,
          class: "col-6"
        }, {
          default: a(() => [
            i(L(c.entry.name), 1)
          ]),
          _: 1
        }),
        h(T, {
          to: x,
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
        d.value ? (n(), _(w, {
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
            t("div", H, [
              t("select", J, [
                (n(!0), u(v, null, D(y.stateList, (l) => (n(), u("option", null, L(l), 1))), 256))
              ])
            ])
          ]),
          footer: a(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (l) => $(f(r) + o.entry.id)),
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
        s.value ? (n(), _(w, {
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
              onClick: e[6] || (e[6] = (l) => $(f(r) + "/" + o.entry.id)),
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
const Q = /* @__PURE__ */ E(K, [["__scopeId", "data-v-2a9e0f2b"]]), Z = /* @__PURE__ */ g({
  __name: "List",
  setup(c) {
    const o = U(), { entries: s } = j(o);
    return (d, m) => (n(), u(v, null, [
      t("h4", null, [
        i("List "),
        p(d.$slots, "object-type"),
        i("s")
      ]),
      (n(!0), u(v, null, D(f(s), (r) => (n(), u("div", {
        key: r.id.toString()
      }, [
        p(d.$slots, "list-entry-delegate", {}, () => [
          (n(), _(I(Q), { entry: r }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Z as default
};
