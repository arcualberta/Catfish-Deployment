import { defineComponent as v, openBlock as a, createBlock as m, Transition as x, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as y, ref as h, resolveComponent as B, createElementBlock as p, createVNode as T, createTextVNode as r, toDisplayString as S, Fragment as b, renderList as w, unref as N, resolveDynamicComponent as R } from "vue";
import { _ as D, u as U, e as V } from "./library-exports.fa6933f7.js";
import { storeToRefs as I } from "pinia";
const j = { class: "popup-modal" }, F = { class: "window" }, M = { class: "modal-header" }, O = { class: "modal-body" }, q = { class: "modal-footer" }, z = /* @__PURE__ */ v({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (a(), m(x, {
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
    })) : y("", !0);
  }
});
const L = /* @__PURE__ */ D(z, [["__scopeId", "data-v-5b6b18b4"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ v({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = h(!1), i = h(!1), f = U(), u = () => V;
    console.log("stateList", u);
    const g = () => n.value = !n.value, C = () => i.value = !i.value, k = (_) => {
      f.deleteObject(_), n.value = !n.value;
    }, E = "/read/" + o.entry.id, P = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (_, t) => {
      const $ = B("router-link");
      return a(), p("div", A, [
        T($, {
          to: E,
          class: "col-6"
        }, {
          default: l(() => [
            r(S(d.entry.name), 1)
          ]),
          _: 1
        }),
        T($, {
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
                (a(), p(b, null, w(u, (s) => e("option", null, S(s), 1)), 64))
              ])
            ])
          ]),
          footer: l(() => [
            e("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: t[2] || (t[2] = (s) => k(_.apiRoot + o.entry.id)),
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
              onClick: t[6] || (t[6] = (s) => k("https://localhost:5020/api/items/" + o.entry.id)),
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
const K = /* @__PURE__ */ D(J, [["__scopeId", "data-v-8a91636b"]]), Y = /* @__PURE__ */ v({
  __name: "List",
  setup(d) {
    const o = U(), { entries: n } = I(o);
    return (i, f) => (a(), p(b, null, [
      e("h4", null, [
        r("List "),
        c(i.$slots, "object-type"),
        r("s")
      ]),
      (a(!0), p(b, null, w(N(n), (u) => (a(), p("div", {
        key: u.id.toString()
      }, [
        c(i.$slots, "list-entry-delegate", {}, () => [
          (a(), m(R(K), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
