import { defineComponent as g, openBlock as a, createBlock as f, Transition as I, withCtx as r, createElementVNode as o, renderSlot as p, ref as h, computed as w, resolveComponent as j, createElementBlock as c, createVNode as D, createTextVNode as d, toDisplayString as b, withDirectives as M, Fragment as C, renderList as T, unref as v, vModelSelect as F, createCommentVNode as E, resolveDynamicComponent as O } from "vue";
import { _ as U, u as x, e as R } from "./library-exports.370db50e.js";
import { storeToRefs as q } from "pinia";
const z = { class: "popup-modal" }, A = { class: "window" }, G = { class: "modal-header" }, H = { class: "modal-body" }, J = { class: "modal-footer" }, K = /* @__PURE__ */ g({
  __name: "ConfirmPopUp",
  props: {
    popupTrigger: { type: Boolean }
  },
  setup(m) {
    return (t, n) => (a(), f(I, { name: "fade" }, {
      default: r(() => [
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
const L = /* @__PURE__ */ U(K, [["__scopeId", "data-v-d7d9691d"]]), Q = { class: "row entryRow" }, W = { class: "col-sm-3" }, X = /* @__PURE__ */ g({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(m) {
    const t = m, n = h(!1), i = h(!1), u = x(), s = w(() => u.apiRoot), k = w(() => R);
    console.log("stateList", k);
    const $ = () => n.value = !n.value, S = () => i.value = !i.value, P = (_) => {
      u.deleteObject(_), n.value = !n.value, u.loadEntries(s == null ? void 0 : s.value);
    }, V = (_, e, y) => {
      u.changeStatus(_, e, y), n.value = !n.value, u.loadEntries(s == null ? void 0 : s.value);
    }, B = "/read/" + t.entry.id, N = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (_, e) => {
      const y = j("router-link");
      return a(), c("div", Q, [
        D(y, {
          to: B,
          class: "col-6"
        }, {
          default: r(() => [
            d(b(m.entry.name), 1)
          ]),
          _: 1
        }),
        D(y, {
          to: N,
          class: "col-2"
        }, {
          default: r(() => [
            d("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: e[0] || (e[0] = (l) => S()),
          class: "col-2 change-state-link"
        }, "Change State"),
        i.value ? (a(), f(L, { key: 0 }, {
          header: r(() => [
            d(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (l) => i.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Please select new State. " + b(t.entry.state) + " ", 1),
            o("div", W, [
              M(o("select", {
                class: "form-select",
                "onUpdate:modelValue": e[2] || (e[2] = (l) => t.entry.state = l)
              }, [
                (a(!0), c(C, null, T(v(k), (l) => (a(), c("option", null, b(l), 1))), 256))
              ], 512), [
                [F, t.entry.state]
              ])
            ])
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[3] || (e[3] = (l) => V(v(s) + "/change-state/" + t.entry.id, t.entry.id, t.entry.state)),
              "aria-label": "Close modal"
            }, " Confirm "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[4] || (e[4] = (l) => S()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : E("", !0),
        o("a", {
          onClick: e[5] || (e[5] = (l) => $()),
          class: "col-2 delete-link"
        }, "Delete"),
        n.value ? (a(), f(L, { key: 1 }, {
          header: r(() => [
            d(" Delete Confirmation. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[6] || (e[6] = (l) => n.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            d(" Do you want to delete this Item? ")
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[7] || (e[7] = (l) => P(v(s) + "/" + t.entry.id, t.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[8] || (e[8] = (l) => $()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : E("", !0)
      ]);
    };
  }
});
const Y = /* @__PURE__ */ U(X, [["__scopeId", "data-v-29c16638"]]), oe = /* @__PURE__ */ g({
  __name: "List",
  setup(m) {
    const t = x(), { entries: n } = q(t);
    return (i, u) => (a(), c(C, null, [
      o("h4", null, [
        d("List "),
        p(i.$slots, "object-type"),
        d("s")
      ]),
      (a(!0), c(C, null, T(v(n), (s) => (a(), c("div", {
        key: s.id.toString()
      }, [
        p(i.$slots, "list-entry-delegate", {}, () => [
          (a(), f(O(Y), { entry: s }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  oe as default
};
