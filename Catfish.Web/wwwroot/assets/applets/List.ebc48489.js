import { defineComponent as b, openBlock as a, createBlock as m, Transition as P, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as _, ref as h, resolveComponent as B, createElementBlock as p, createVNode as T, createTextVNode as r, toDisplayString as S, Fragment as y, renderList as w, unref as N, resolveDynamicComponent as V } from "vue";
import { _ as D, u as U, e as I } from "./library-exports.5230c437.js";
import { storeToRefs as R } from "pinia";
const j = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ b({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (a(), m(P, {
      key: 0,
      name: "fade"
    }, {
      default: l(() => [
        e("div", j, [
          e("div", F, [
            e("header", M, [
              c(o.$slots, "header", {}, void 0, !0)
            ]),
            e("section", O, [
              c(o.$slots, "body", {}, void 0, !0)
            ]),
            e("footer", q, [
              c(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : _("", !0);
  }
});
const L = /* @__PURE__ */ D(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ b({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = h(!1), i = h(!1), v = U(), u = () => I;
    console.log("stateList", u);
    const f = () => n.value = !n.value, g = () => i.value = !i.value, C = (k) => {
      v.deleteObject(k), n.value = !n.value;
    }, x = "/read/" + o.entry.id, E = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (k, t) => {
      const $ = B("router-link");
      return a(), p("div", A, [
        T($, {
          to: x,
          class: "col-6"
        }, {
          default: l(() => [
            r(S(d.entry.name), 1)
          ]),
          _: 1
        }),
        T($, {
          to: E,
          class: "col-2"
        }, {
          default: l(() => [
            r("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => g()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (a(), m(L, {
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
                (a(), p(y, null, w(u, (s) => e("option", null, S(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => C("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (s) => g()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : _("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (s) => f()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), m(L, {
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
              onClick: t[6] || (t[6] = (s) => C("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (s) => f()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : _("", !0)
      ]);
    };
  }
});
const K = /* @__PURE__ */ D(J, [["__scopeId", "data-v-4005d661"]]), Y = /* @__PURE__ */ b({
  __name: "List",
  setup(d) {
    const o = U(), { entries: n } = R(o);
    return (i, v) => (a(), p(y, null, [
      e("h4", null, [
        r("List "),
        c(i.$slots, "object-type"),
        r("s")
      ]),
      (a(!0), p(y, null, w(N(n), (u) => (a(), p("div", {
        key: u.id.toString()
      }, [
        c(i.$slots, "list-entry-delegate", {}, () => [
          (a(), m(V(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
