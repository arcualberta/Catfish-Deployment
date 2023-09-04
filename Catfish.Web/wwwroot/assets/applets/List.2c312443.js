import { defineComponent as b, openBlock as s, createBlock as f, Transition as N, withCtx as a, createElementVNode as o, renderSlot as p, ref as $, computed as S, resolveComponent as I, createElementBlock as u, createVNode as h, createTextVNode as d, toDisplayString as T, withDirectives as j, Fragment as g, renderList as L, unref as v, vModelSelect as M, createCommentVNode as D, resolveDynamicComponent as F } from "vue";
import { _ as U, u as P, e as O } from "./library-exports.912e7964.js";
import { storeToRefs as q } from "pinia";
const z = { class: "popup-modal" }, A = { class: "window" }, G = { class: "modal-header" }, H = { class: "modal-body" }, J = { class: "modal-footer" }, K = /* @__PURE__ */ b({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(m) {
    return (t, r) => (s(), f(N, { name: "fade" }, {
      default: a(() => [
        o("div", z, [
          o("div", A, [
            o("header", G, [
              p(t.$slots, "header", {}, void 0, !0)
            ]),
            o("section", H, [
              p(t.$slots, "body", {}, void 0, !0)
            ]),
            o("footer", J, [
              p(t.$slots, "footer", {}, void 0, !0)
            ])
          ])
        ])
      ]),
      _: 3
    }));
  }
});
const w = /* @__PURE__ */ U(K, [["__scopeId", "data-v-d7d9691d"]]), Q = { class: "row entryRow" }, W = { class: "col-sm-3" }, X = /* @__PURE__ */ b({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(m) {
    const t = m, r = $(!1), l = $(!1), _ = P(), c = S(() => _.apiRoot), C = S(() => O);
    console.log("stateList", C);
    const E = () => r.value = !r.value, k = () => l.value = !l.value, R = (i, e) => {
      _.deleteObject(i, e), r.value = !r.value;
    }, V = (i, e, y) => {
      _.changeStatus(i, e, y), l.value = !l.value;
    }, x = "/read/" + t.entry.id, B = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (i, e) => {
      const y = I("router-link");
      return s(), u("div", Q, [
        h(y, {
          to: x,
          class: "col-6"
        }, {
          default: a(() => [
            d(T(m.entry.name), 1)
          ]),
          _: 1
        }),
        h(y, {
          to: B,
          class: "col-2"
        }, {
          default: a(() => [
            d("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: e[0] || (e[0] = (n) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (s(), f(w, { key: 0 }, {
          header: a(() => [
            d(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (n) => l.value = !1)
            }, " x ")
          ]),
          body: a(() => [
            d(" Please select new State. "),
            o("div", W, [
              j(o("select", {
                class: "form-select",
                "onUpdate:modelValue": e[2] || (e[2] = (n) => t.entry.state = n)
              }, [
                (s(!0), u(g, null, L(v(C), (n) => (s(), u("option", null, T(n), 1))), 256))
              ], 512), [
                [M, t.entry.state]
              ])
            ])
          ]),
          footer: a(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[3] || (e[3] = (n) => V(v(c) + "/change-state/" + t.entry.id, t.entry.id, t.entry.state)),
              "aria-label": "Close modal"
            }, " Confirm "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[4] || (e[4] = (n) => k()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : D("", !0),
        o("a", {
          onClick: e[5] || (e[5] = (n) => E()),
          class: "col-2 delete-link"
        }, "Delete"),
        r.value ? (s(), f(w, { key: 1 }, {
          header: a(() => [
            d(" Delete Confirmation. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[6] || (e[6] = (n) => i.popupTrigger = !1)
            }, " x ")
          ]),
          body: a(() => [
            d(" Do you want to delete this Item? ")
          ]),
          footer: a(() => [
            o("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[7] || (e[7] = (n) => R(v(c) + "/" + t.entry.id, t.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[8] || (e[8] = (n) => i.TogglePopup()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : D("", !0)
      ]);
    };
  }
});
const Y = /* @__PURE__ */ U(X, [["__scopeId", "data-v-f4714730"]]), oe = /* @__PURE__ */ b({
  __name: "List",
  setup(m) {
    const t = P(), { entries: r } = q(t);
    return (l, _) => (s(), u(g, null, [
      o("h4", null, [
        d("List "),
        p(l.$slots, "object-type"),
        d("s")
      ]),
      (s(!0), u(g, null, L(v(r), (c) => (s(), u("div", {
        key: c.id.toString()
      }, [
        p(l.$slots, "list-entry-delegate", {}, () => [
          (s(), f(F(Y), { entry: c }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  oe as default
};
