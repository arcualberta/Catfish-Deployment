import { defineComponent as C, openBlock as l, createBlock as y, Transition as V, withCtx as r, createElementVNode as t, renderSlot as _, ref as S, computed as h, resolveComponent as j, createElementBlock as u, createVNode as w, createTextVNode as d, toDisplayString as E, Fragment as f, renderList as D, unref as p, createCommentVNode as L, resolveDynamicComponent as O } from "vue";
import { _ as U, u as x, e as F } from "./library-exports.491fd895.js";
import { storeToRefs as M } from "pinia";
const R = { class: "popup-modal" }, q = { class: "window" }, z = { class: "modal-header" }, A = { class: "modal-body" }, G = { class: "modal-footer" }, H = /* @__PURE__ */ C({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(m) {
    return (o, n) => (l(), y(V, { name: "fade" }, {
      default: r(() => [
        t("div", R, [
          t("div", q, [
            t("header", z, [
              _(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", A, [
              _(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", G, [
              _(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const T = /* @__PURE__ */ U(H, [["__scopeId", "data-v-d7d9691d"]]), J = { class: "row entryRow" }, K = { class: "col-sm-3" }, Q = { class: "form-select" }, W = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(m) {
    const o = m, n = S(!1), i = S(!1), c = x(), s = h(() => c.apiRoot), b = h(() => F);
    console.log("stateList", b);
    const g = () => n.value = !n.value, k = () => i.value = !i.value, P = (v) => {
      c.deleteObject(v), n.value = !n.value, c.loadEntries(s == null ? void 0 : s.value);
    }, B = (v, e) => {
      c.deleteObject(v), n.value = !n.value, c.loadEntries(s == null ? void 0 : s.value);
    }, I = "/read/" + o.entry.id, N = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (v, e) => {
      const $ = j("router-link");
      return l(), u("div", J, [
        w($, {
          to: I,
          class: "col-6"
        }, {
          default: r(() => [
            d(E(m.entry.name), 1)
          ]),
          _: 1
        }),
        w($, {
          to: N,
          class: "col-2"
        }, {
          default: r(() => [
            d("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (a) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (l(), y(T, { key: 0 }, {
          header: r(() => [
            d(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (a) => i.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Please select new State. "),
            t("div", K, [
              t("select", Q, [
                (l(!0), u(f, null, D(p(b), (a) => (l(), u("option", null, E(a), 1))), 256))
              ])
            ])
          ]),
          footer: r(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (a) => B(p(s) + "/change-state/" + o.entry.id, o.entry.id, p(b).Inactive)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[3] || (e[3] = (a) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0),
        t("a", {
          onClick: e[4] || (e[4] = (a) => g()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (l(), y(T, { key: 1 }, {
          header: r(() => [
            d(" Delete Confirmation. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[5] || (e[5] = (a) => n.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Do you want to delete this Item? ")
          ]),
          footer: r(() => [
            t("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[6] || (e[6] = (a) => P(p(s) + "/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[7] || (e[7] = (a) => g()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0)
      ]);
    };
  }
});
const X = /* @__PURE__ */ U(W, [["__scopeId", "data-v-2babe019"]]), te = /* @__PURE__ */ C({
  __name: "List",
  setup(m) {
    const o = x(), { entries: n } = M(o);
    return (i, c) => (l(), u(f, null, [
      t("h4", null, [
        d("List "),
        _(i.$slots, "object-type"),
        d("s")
      ]),
      (l(!0), u(f, null, D(p(n), (s) => (l(), u("div", {
        key: s.id.toString()
      }, [
        _(i.$slots, "list-entry-delegate", {}, () => [
          (l(), y(O(X), { entry: s }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  te as default
};
