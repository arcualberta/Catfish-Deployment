import { defineComponent as y, openBlock as a, createBlock as m, Transition as x, withCtx as s, createElementVNode as t, renderSlot as p, createCommentVNode as _, ref as k, resolveComponent as E, createElementBlock as c, createVNode as $, createTextVNode as l, toDisplayString as L, Fragment as T, renderList as P, unref as B, resolveDynamicComponent as N } from "vue";
import { _ as S, u as w } from "./library-exports.94d4a522.js";
import { storeToRefs as V } from "pinia";
const I = { class: "popup-modal" }, R = { class: "window" }, j = { class: "modal-header" }, F = { class: "modal-body" }, M = { class: "modal-footer" }, O = /* @__PURE__ */ y({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(d) {
    return (o, n) => d.popupTrigger ? (a(), m(x, {
      key: 0,
      name: "fade"
    }, {
      default: s(() => [
        t("div", I, [
          t("div", R, [
            t("header", j, [
              p(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", F, [
              p(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", M, [
              p(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : _("", !0);
  }
});
const h = /* @__PURE__ */ S(O, [["__scopeId", "data-v-1c174a09"]]), q = { class: "row entryRow" }, z = /* @__PURE__ */ y({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(d) {
    const o = d, n = k(!1), r = k(!1), v = w(), u = () => n.value = !n.value, f = () => r.value = !r.value, b = (g) => {
      v.deleteObject(g), n.value = !n.value;
    }, D = "/read/" + o.entry.id, U = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (g, e) => {
      const C = E("router-link");
      return a(), c("div", q, [
        $(C, {
          to: D,
          class: "col-6"
        }, {
          default: s(() => [
            l(L(d.entry.name), 1)
          ]),
          _: 1
        }),
        $(C, {
          to: U,
          class: "col-2"
        }, {
          default: s(() => [
            l("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (i) => f()),
          class: "col-2"
        }, "Change State"),
        r.value ? (a(), m(h, {
          key: 0,
          popupTrigger: !0
        }, {
          header: s(() => [
            l(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (i) => r.value = !1)
            }, " x ")
          ]),
          body: s(() => [
            l(" Please select new State. ")
          ]),
          footer: s(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (i) => b("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Confirm "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[3] || (e[3] = (i) => f()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : _("", !0),
        t("a", {
          onClick: e[4] || (e[4] = (i) => u()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), m(h, {
          key: 1,
          popupTrigger: !0
        }, {
          header: s(() => [
            l(" Delete Confirmation. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[5] || (e[5] = (i) => n.value = !1)
            }, " x ")
          ]),
          body: s(() => [
            l(" Do you want to delete this Item? ")
          ]),
          footer: s(() => [
            t("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[6] || (e[6] = (i) => b("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[7] || (e[7] = (i) => u()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : _("", !0)
      ]);
    };
  }
});
const A = /* @__PURE__ */ S(z, [["__scopeId", "data-v-6a92b9d7"]]), K = /* @__PURE__ */ y({
  __name: "List",
  setup(d) {
    const o = w(), { entries: n } = V(o);
    return (r, v) => (a(), c(T, null, [
      t("h4", null, [
        l("List "),
        p(r.$slots, "object-type"),
        l("s")
      ]),
      (a(!0), c(T, null, P(B(n), (u) => (a(), c("div", {
        key: u.id.toString()
      }, [
        p(r.$slots, "list-entry-delegate", {}, () => [
          (a(), m(N(A), { entry: u }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  K as default
};
