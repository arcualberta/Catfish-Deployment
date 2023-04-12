import { defineComponent as C, openBlock as l, createBlock as b, Transition as j, withCtx as r, createElementVNode as t, renderSlot as m, createCommentVNode as f, ref as T, computed as h, resolveComponent as I, createElementBlock as c, createVNode as w, createTextVNode as i, toDisplayString as E, Fragment as g, renderList as D, unref as v, resolveDynamicComponent as O } from "vue";
import { _ as U, u as x, e as A } from "./library-exports.e172b7ec.js";
import { storeToRefs as F } from "pinia";
const M = { class: "popup-modal" }, R = { class: "window" }, q = { class: "modal-header" }, z = { class: "modal-body" }, G = { class: "modal-footer" }, H = /* @__PURE__ */ C({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (o, n) => p.popupTrigger ? (l(), b(j, {
      key: 0,
      name: "fade"
    }, {
      default: r(() => [
        t("div", M, [
          t("div", R, [
            t("header", q, [
              m(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", z, [
              m(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", G, [
              m(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : f("", !0);
  }
});
const L = /* @__PURE__ */ U(H, [["__scopeId", "data-v-5b6b18b4"]]), J = { class: "row entryRow" }, K = { class: "col-sm-3" }, Q = { class: "form-select" }, W = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const o = p, n = T(!1), d = T(!1), u = x(), s = h(() => u.apiRoot), y = h(() => A);
    console.log("stateList", y);
    const k = () => n.value = !n.value, $ = () => d.value = !d.value, P = (_) => {
      u.deleteObject(_), n.value = !n.value, u.loadEntries(s == null ? void 0 : s.value);
    }, B = (_, e) => {
      u.deleteObject(_), n.value = !n.value, u.loadEntries(s == null ? void 0 : s.value);
    }, N = "/read/" + o.entry.id, V = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (_, e) => {
      const S = I("router-link");
      return l(), c("div", J, [
        w(S, {
          to: N,
          class: "col-6"
        }, {
          default: r(() => [
            i(E(p.entry.name), 1)
          ]),
          _: 1
        }),
        w(S, {
          to: V,
          class: "col-2"
        }, {
          default: r(() => [
            i("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (a) => $()),
          class: "col-2 change-state-link"
        }, "Change State"),
        d.value ? (l(), b(L, {
          key: 0,
          popupTrigger: !0
        }, {
          header: r(() => [
            i(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (a) => d.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            i(" Please select new State. "),
            t("div", K, [
              t("select", Q, [
                (l(!0), c(g, null, D(v(y), (a) => (l(), c("option", null, E(a), 1))), 256))
              ])
            ])
          ]),
          footer: r(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (a) => B(o.entry.id, v(y).Active)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[3] || (e[3] = (a) => $()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : f("", !0),
        t("a", {
          onClick: e[4] || (e[4] = (a) => k()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (l(), b(L, {
          key: 1,
          popupTrigger: !0
        }, {
          header: r(() => [
            i(" Delete Confirmation. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[5] || (e[5] = (a) => n.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            i(" Do you want to delete this Item? ")
          ]),
          footer: r(() => [
            t("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[6] || (e[6] = (a) => P(v(s) + "/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[7] || (e[7] = (a) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : f("", !0)
      ]);
    };
  }
});
const X = /* @__PURE__ */ U(W, [["__scopeId", "data-v-f43bed64"]]), te = /* @__PURE__ */ C({
  __name: "List",
  setup(p) {
    const o = x(), { entries: n } = F(o);
    return (d, u) => (l(), c(g, null, [
      t("h4", null, [
        i("List "),
        m(d.$slots, "object-type"),
        i("s")
      ]),
      (l(!0), c(g, null, D(v(n), (s) => (l(), c("div", {
        key: s.id.toString()
      }, [
        m(d.$slots, "list-entry-delegate", {}, () => [
          (l(), b(O(X), { entry: s }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  te as default
};
