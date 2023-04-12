import { defineComponent as f, openBlock as a, createBlock as _, Transition as P, withCtx as l, createElementVNode as e, renderSlot as p, createCommentVNode as y, ref as T, resolveComponent as B, createElementBlock as c, createVNode as S, createTextVNode as i, toDisplayString as h, Fragment as b, renderList as w, unref as N, resolveDynamicComponent as V } from "vue";
import { _ as D, u as R, e as x } from "./library-exports.699e9702.js";
import { storeToRefs as I } from "pinia";
const j = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ f({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (a(), _(P, {
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
const L = /* @__PURE__ */ D(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ f({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = T(!1), r = T(!1), v = R(), u = () => x;
    console.log("stateList", u);
    const g = () => n.value = !n.value, C = () => r.value = !r.value, k = (m) => {
      v.deleteObject(m), n.value = !n.value;
    }, U = "/read/" + o.entry.id, E = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (m, t) => {
      const $ = B("router-link");
      return a(), c("div", A, [
        S($, {
          to: U,
          class: "col-6"
        }, {
          default: l(() => [
            i(h(d.entry.name), 1)
          ]),
          _: 1
        }),
        S($, {
          to: E,
          class: "col-2"
        }, {
          default: l(() => [
            i("Update")
          ]),
          _: 1
        }),
        e("a", {
          onClick: t[0] || (t[0] = (s) => C()),
          class: "col-2 change-state-link"
        }, "Change State"),
        r.value ? (a(), _(L, {
          key: 0,
          popupTrigger: !0
        }, {
          header: l(() => [
            i(" Change State. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[1] || (t[1] = (s) => r.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            i(" Please select new State. "),
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
            i(" Delete Confirmation. "),
            e("button", {
              type: "button",
              class: "btn-close",
              onClick: t[5] || (t[5] = (s) => n.value = !1)
            }, " x ")
          ]),
          body: l(() => [
            i(" Do you want to delete this Item? ")
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
const K = /* @__PURE__ */ D(J, [["__scopeId", "data-v-e3a11f9e"]]), Y = /* @__PURE__ */ f({
  __name: "List",
  setup(d) {
    const o = R(), { entries: n } = I(o);
    return (r, v) => (a(), c(b, null, [
      e("h4", null, [
        i("List "),
        p(r.$slots, "object-type"),
        i("s")
      ]),
      (a(!0), c(b, null, w(N(n), (u) => (a(), c("div", {
        key: u.id.toString()
      }, [
        p(r.$slots, "list-entry-delegate", { apiRoot: r.apiRoot }, () => [
          (a(), _(V(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
