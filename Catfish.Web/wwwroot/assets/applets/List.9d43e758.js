import { defineComponent as b, openBlock as a, createBlock as m, Transition as P, withCtx as l, createElementVNode as e, renderSlot as c, createCommentVNode as _, ref as h, resolveComponent as B, createElementBlock as u, createVNode as T, createTextVNode as r, toDisplayString as S, Fragment as y, renderList as D, unref as N, resolveDynamicComponent as V } from "vue";
import { _ as L, u as U, e as I } from "./library-exports.4217228e.js";
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
const w = /* @__PURE__ */ L(z, [["__scopeId", "data-v-bd7f7edb"]]), A = { class: "row entryRow" }, G = { class: "col-sm-3" }, H = { class: "form-select" }, J = /* @__PURE__ */ b({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = h(!1), i = h(!1), f = U(), p = () => I, v = () => n.value = !n.value, g = () => i.value = !i.value, C = (k) => {
      f.deleteObject(k), n.value = !n.value;
    }, x = "/read/" + o.entry.id, E = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (k, t) => {
      const $ = B("router-link");
      return a(), u("div", A, [
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
        i.value ? (a(), m(w, {
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
                (a(), u(y, null, D(p, (s) => e("option", null, S(s), 1)), 64))
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
          onClick: t[4] || (t[4] = (s) => v()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), m(w, {
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
              onClick: t[7] || (t[7] = (s) => v()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : _("", !0)
      ]);
    };
  }
});
const K = /* @__PURE__ */ L(J, [["__scopeId", "data-v-6cb47ec6"]]), Y = /* @__PURE__ */ b({
  __name: "List",
  setup(d) {
    const o = U(), { entries: n } = R(o);
    return (i, f) => (a(), u(y, null, [
      e("h4", null, [
        r("List "),
        c(i.$slots, "object-type"),
        r("s")
      ]),
      (a(!0), u(y, null, D(N(n), (p) => (a(), u("div", {
        key: p.id.toString()
      }, [
        c(i.$slots, "list-entry-delegate", {}, () => [
          (a(), m(V(K), { entry: p }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Y as default
};
