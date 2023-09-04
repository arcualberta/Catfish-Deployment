import { defineComponent as v, openBlock as a, createBlock as _, Transition as R, withCtx as l, createElementVNode as e, renderSlot as p, createCommentVNode as y, ref as T, resolveComponent as x, createElementBlock as c, createVNode as S, createTextVNode as r, toDisplayString as h, Fragment as b, renderList as w, unref as B, resolveDynamicComponent as N } from "vue";
import { _ as D, u as U, e as V } from "./library-exports.abb99d66.js";
import { storeToRefs as I } from "pinia";
const j = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ v({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (a(), _(R, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        e("div", j, [
          e("div", F, [
            e("header", M, [
              p(o.$slots, "header", {}, void 0, !0)
            ]),
            e("section", O, [
              p(o.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", q, [
              p(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : y("", !0);
  }
});
const L = /* @__PURE__ */ D(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ v({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = T(!1), i = T(!1), f = U(), u = () => V;
    console.log("stateList", u);
    const g = () => n.value = !n.value, C = () => i.value = !i.value, k = (m) => {
      f.deleteObject(m), n.value = !n.value;
    }, E = "/read/" + o.entry.id, P = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (m, t) => {
      const $ = x("router-link");
      return a(), c("div", A, [
        S($, {
          to: E,
          class: "col-6"
        }, {
          default: l(() => [
            r(h(d.entry.name), 1)
          ]),
          _: 1
        }),
        S($, {
          to: P,
          class: "col-2"
        }, {
          default: l(() => [
            r("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => C()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (a(), _(L, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            r(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => i.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            r(" Please select new State. "),
            e("div", G, [
              e("select", H, [
                (a(), c(b, null, w(u, (s) => e("option", null, h(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => k(m.apiRoot + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (s) => C()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (s) => g()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), _(L, {
          key: 1,
          popupTrigger: !0
        }, {
          header: l(() => [
            r(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (s) => n.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            r(" Do you want to delete this Item? ")
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: t[6] || (t[6] = (s) => k(m.apiRoot + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (s) => g()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0)
      ]);
    };
  }
});
const K = /* @__PURE__ */ D(J, [["__scopeId", "data-v-24d9da1e"]]), Y = /* @__PURE__ */ v({
  __name: "List",
  setup(d) {
    const o = U(), { entries: n } = I(o);
    return (i, f) => (a(), c(b, null, [
      e("h4", null, [
        r("List "),
        p(i.$slots, "object-type"),
        r("s")
      ]),
      (a(!0), c(b, null, w(B(n), (u) => (a(), c("div", {
        key: u.id.toString()
      }, [
        p(i.$slots, "list-entry-delegate", {}, () => [
          (a(), _(N(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
