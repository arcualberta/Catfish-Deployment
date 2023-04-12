import { defineComponent as v, openBlock as r, createBlock as _, Transition as w, withCtx as s, createElementVNode as t, renderSlot as u, createCommentVNode as y, ref as S, resolveComponent as U, createElementBlock as m, createVNode as C, createTextVNode as l, toDisplayString as x, Fragment as g, renderList as E, unref as L, resolveDynamicComponent as P } from "vue";
import { _ as $, u as T } from "./library-exports.a1409bca.js";
import { storeToRefs as B } from "pinia";
const N = { class: "popup-modal" }, V = { class: "window" }, I = { class: "modal-header" }, R = { class: "modal-body" }, j = { class: "modal-footer" }, F = /* @__PURE__ */ v({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(i) {
    return (o, n) => i.popupTrigger ? (r(), _(w, {
      key: 0,
      name: "fade"
    }, {
      default: s(() => [
        t("div", N, [
          t("div", V, [
            t("header", I, [
              u(o.$slots, "header", {}, void 0, !0)
            ]),
            t("section", R, [
              u(o.$slots, "body", {}, void 0, !0)
            ]),
            t("footer", j, [
              u(o.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    })) : y("", !0);
  }
});
const k = /* @__PURE__ */ $(F, [["__scopeId", "data-v-1c174a09"]]), M = { class: "row entryRow" }, O = /* @__PURE__ */ v({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(i) {
    const o = i, n = S(!1), c = T(), d = () => n.value = !n.value, p = (f) => {
      c.deleteObject(f), n.value = !n.value;
    }, h = "/read/" + o.entry.id, D = "/update/" + o.entry.id;
    return "" + o.entry.id, "" + o.entry.id, (f, e) => {
      const b = U("router-link");
      return r(), m("div", M, [
        C(b, {
          to: h,
          class: "col-6"
        }, {
          default: s(() => [
            l(x(i.entry.name), 1)
          ]),
          _: 1
        }),
        C(b, {
          to: D,
          class: "col-2"
        }, {
          default: s(() => [
            l("Update")
          ]),
          _: 1
        }),
        t("a", {
          onClick: e[0] || (e[0] = (a) => d()),
          class: "col-2"
        }, "Change State"),
        n.value ? (r(), _(k, {
          key: 0,
          popupTrigger: !0
        }, {
          header: s(() => [
            l(" Change State. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (a) => n.value = !1)
            }, " x ")
          ]),
          body: s(() => [
            l(" Please select new State. ")
          ]),
          footer: s(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[2] || (e[2] = (a) => p("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[3] || (e[3] = (a) => d()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0),
        t("a", {
          onClick: e[4] || (e[4] = (a) => d()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (r(), _(k, {
          key: 1,
          popupTrigger: !0
        }, {
          header: s(() => [
            l(" Delete Confirmation. "),
            t("button", {
              type: "button",
              class: "btn-close",
              onClick: e[5] || (e[5] = (a) => n.value = !1)
            }, " x ")
          ]),
          body: s(() => [
            l(" Do you want to delete this Item? ")
          ]),
          footer: s(() => [
            t("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[6] || (e[6] = (a) => p("https://localhost:5020/api/items/" + o.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            t("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[7] || (e[7] = (a) => d()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : y("", !0)
      ]);
    };
  }
});
const q = /* @__PURE__ */ $(O, [["__scopeId", "data-v-51e53e67"]]), H = /* @__PURE__ */ v({
  __name: "List",
  setup(i) {
    const o = T(), { entries: n } = B(o);
    return (c, d) => (r(), m(g, null, [
      t("h4", null, [
        l("List "),
        u(c.$slots, "object-type"),
        l("s")
      ]),
      (r(!0), m(g, null, E(L(n), (p) => (r(), m("div", {
        key: p.id.toString()
      }, [
        u(c.$slots, "list-entry-delegate", {}, () => [
          (r(), _(P(q), { entry: p }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  H as default
};
