import { defineComponent as v, openBlock as i, createBlock as _, Transition as P, withCtx as a, createElementVNode as e, renderSlot as p, createCommentVNode as y, ref as S, resolveComponent as B, createElementBlock as c, createVNode as h, createTextVNode as r, toDisplayString as b, Fragment as f, renderList as L, unref as N, resolveDynamicComponent as V } from "vue";
import { _ as w, u as D, e as I } from "./library-exports.c9b00634.js";
import { storeToRefs as j } from "pinia";
const x = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ v({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (i(), _(P, {
      key: 0,
      name: "fade"
    }, {
      default: a(() => [
        e("div", x, [
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
const R = /* @__PURE__ */ w(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ v({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = S(!1), s = S(!1), g = D(), u = () => I;
    console.log("stateList", u);
    const C = () => n.value = !n.value, k = () => s.value = !s.value, $ = (m) => {
      g.deleteObject(m), n.value = !n.value;
    }, U = "/read/" + o.entry.id, E = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (m, t) => {
      const T = B("router-link");
      return i(), c("div", A, [
        h(T, {
          to: U,
          class: "col-6"
        }, {
          default: a(() => [
            r(b(d.entry.name), 1)
          ]),
          _: 1
        }),
        h(T, {
          to: E,
          class: "col-2"
        }, {
          default: a(() => [
            r("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (l) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        s.value ? (i(), _(R, {
          key: 0,
          popupTrigger: !0
        }, {
          header: a(() => [
            r(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (l) => s.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            r(" Please select new State. "),
            e("div", G, [
              e("select", H, [
                (i(), c(f, null, L(u, (l) => e("option", null, b(l), 1)), 64))
              ])
            ])
          ]),
          footer: a(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (l) => $(m.apiRoot + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[3] || (t[3] = (l) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0),
        e("a", {
          onClick: t[4] || (t[4] = (l) => C()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (i(), _(R, {
          key: 1,
          popupTrigger: !0
        }, {
          header: a(() => [
            r(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (l) => n.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            r(" Do you want to delete this Item? ")
          ]),
          footer: a(() => [
            e("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: t[6] || (t[6] = (l) => $(m.apiRoot + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            e("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: t[7] || (t[7] = (l) => C()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0)
      ]);
    };
  }
});
const K = /* @__PURE__ */ w(J, [["__scopeId", "data-v-e3a11f9e"]]), Y = /* @__PURE__ */ v({
  __name: "List",
  setup(d) {
    const o = D(), { entries: n } = j(o);
    return (s, g) => (i(), c(f, null, [
      r(" apiRoot - " + b(s.apiRoot) + " ", 1),
      e("h4", null, [
        r("List "),
        p(s.$slots, "object-type"),
        r("s")
      ]),
      (i(!0), c(f, null, L(N(n), (u) => (i(), c("div", {
        key: u.id.toString()
      }, [
        p(s.$slots, "list-entry-delegate", { apiRoot: s.apiRoot }, () => [
          (i(), _(V(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
