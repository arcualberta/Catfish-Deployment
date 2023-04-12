import { defineComponent as C, openBlock as s, createBlock as f, Transition as N, withCtx as r, createElementVNode as o, renderSlot as u, ref as S, computed as h, resolveComponent as I, createElementBlock as i, createVNode as D, createTextVNode as d, toDisplayString as w, withDirectives as j, Fragment as b, renderList as U, unref as v, vModelSelect as M, createCommentVNode as L, resolveDynamicComponent as F } from "vue";
import { _ as x, u as E, e as O } from "./library-exports.03281328.js";
import { storeToRefs as q } from "pinia";
const z = { class: "popup-modal" }, A = { class: "window" }, G = { class: "modal-header" }, H = { class: "modal-body" }, J = { class: "modal-footer" }, K = /* @__PURE__ */ C({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(p) {
    return (t, l) => (s(), f(N, { name: "fade" }, {
      default: r(() => [
        o("div", z, [
          o("div", A, [
            o("header", G, [
              u(t.$slots, "header", {}, void 0, !0)
            ]),
            o("section", H, [
              u(t.$slots, "body", {}, void 0, !0)
            ]),
            o("footer", J, [
              u(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const T = /* @__PURE__ */ x(K, [["__scopeId", "data-v-d7d9691d"]]), Q = { class: "row entryRow" }, W = { class: "col-sm-3" }, X = /* @__PURE__ */ C({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(p) {
    const t = p, l = S(!1), a = S(!1), m = E(), c = h(() => m.apiRoot), g = h(() => O);
    console.log("stateList", g);
    const k = () => l.value = !l.value, $ = () => a.value = !a.value, P = (_, e) => {
      m.deleteObject(_, e), l.value = !l.value;
    }, R = (_, e, y) => {
      m.changeStatus(_, e, y), a.value = !a.value;
    }, V = "/read/" + t.entry.id, B = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (_, e) => {
      const y = I("router-link");
      return s(), i("div", Q, [
        D(y, {
          to: V,
          class: "col-6"
        }, {
          default: r(() => [
            d(w(p.entry.name), 1)
          ]),
          _: 1
        }),
        D(y, {
          to: B,
          class: "col-2"
        }, {
          default: r(() => [
            d("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: e[0] || (e[0] = (n) => $()),
          class: "col-2 change-state-link"
        }, "Change State"),
        a.value ? (s(), f(T, { key: 0 }, {
          header: r(() => [
            d(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (n) => a.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Please select new State. "),
            o("div", W, [
              j(o("select", {
                class: "form-select",
                "onUpdate:modelValue": e[2] || (e[2] = (n) => t.entry.state = n)
              }, [
                (s(!0), i(b, null, U(v(g), (n) => (s(), i("option", null, w(n), 1))), 256))
              ], 512), [
                [M, t.entry.state]
              ])
            ])
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[3] || (e[3] = (n) => R(v(c) + "/change-state/" + t.entry.id, t.entry.id, t.entry.state)),
              "aria-label": "Close modal"
            }, " Confirm "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[4] || (e[4] = (n) => $()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0),
        o("a", {
          onClick: e[5] || (e[5] = (n) => k()),
          class: "col-2 delete-link"
        }, "Delete"),
        l.value ? (s(), f(T, { key: 1 }, {
          header: r(() => [
            d(" Delete Confirmation. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[6] || (e[6] = (n) => l.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Do you want to delete this Item? ")
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[7] || (e[7] = (n) => P(v(c) + "/" + t.entry.id, t.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[8] || (e[8] = (n) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0)
      ]);
    };
  }
});
const Y = /* @__PURE__ */ x(X, [["__scopeId", "data-v-ff1cad70"]]), oe = /* @__PURE__ */ C({
  __name: "List",
  setup(p) {
    const t = E(), { entries: l } = q(t);
    return (a, m) => (s(), i(b, null, [
      o("h4", null, [
        d("List "),
        u(a.$slots, "object-type"),
        d("s")
      ]),
      (s(!0), i(b, null, U(v(l), (c) => (s(), i("div", {
        key: c.id.toString()
      }, [
        u(a.$slots, "list-entry-delegate", {}, () => [
          (s(), f(F(Y), { entry: c }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  oe as default
};
