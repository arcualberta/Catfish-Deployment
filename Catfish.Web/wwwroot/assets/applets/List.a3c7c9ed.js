import { defineComponent as E, ref as _, computed as S, resolveComponent as B, openBlock as s, createElementBlock as u, createVNode as $, withCtx as r, createTextVNode as i, toDisplayString as D, createElementVNode as o, createBlock as C, withDirectives as j, Fragment as b, renderList as T, unref as y, vModelSelect as I, createCommentVNode as L, renderSlot as x, resolveDynamicComponent as M } from "vue";
import { u as U, e as h, C as w, _ as F } from "./library-exports.f4a50f72.js";
import { storeToRefs as O } from "pinia";
const q = { class: "row entryRow" }, z = { class: "col-sm-3" }, A = /* @__PURE__ */ E({
  __name: "ListEntry",
  props: {
    entry: null
  },
  setup(v) {
    const t = v, a = _(!1), l = _(!1), c = U(), d = S(() => c.apiRoot), f = S(() => h);
    console.log("stateList", f);
    const g = () => a.value = !a.value, k = () => l.value = !l.value, R = (p, e) => {
      c.deleteObject(p, e), a.value = !a.value;
    }, V = (p, e, m) => {
      c.changeStatus(p, e, m), l.value = !l.value;
    }, N = "/read/" + t.entry.id, P = "/update/" + t.entry.id;
    return "" + t.entry.id, "" + t.entry.id, (p, e) => {
      const m = B("router-link");
      return s(), u("div", q, [
        $(m, {
          to: N,
          class: "col-6"
        }, {
          default: r(() => [
            i(D(v.entry.name), 1)
          ]),
          _: 1
        }),
        $(m, {
          to: P,
          class: "col-2"
        }, {
          default: r(() => [
            i("Update")
          ]),
          _: 1
        }),
        o("a", {
          onClick: e[0] || (e[0] = (n) => k()),
          class: "col-2 change-state-link"
        }, "Change State"),
        l.value ? (s(), C(w, { key: 0 }, {
          header: r(() => [
            i(" Change State. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[1] || (e[1] = (n) => l.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            i(" Please select new State. "),
            o("div", z, [
              j(o("select", {
                class: "form-select",
                "onUpdate:modelValue": e[2] || (e[2] = (n) => t.entry.state = n)
              }, [
                (s(!0), u(b, null, T(y(f), (n) => (s(), u("option", null, D(n), 1))), 256))
              ], 512), [
                [I, t.entry.state]
              ])
            ])
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-confirm-btn",
              onClick: e[3] || (e[3] = (n) => V(y(d) + "/change-state/" + t.entry.id, t.entry.id, t.entry.state)),
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
        })) : L("", !0),
        o("a", {
          onClick: e[5] || (e[5] = (n) => g()),
          class: "col-2 delete-link"
        }, "Delete"),
        a.value ? (s(), C(w, { key: 1 }, {
          header: r(() => [
            i(" Delete Confirmation. "),
            o("button", {
              type: "button",
              class: "btn-close",
              onClick: e[6] || (e[6] = (n) => a.value = !1)
            }, " x ")
          ]),
          body: r(() => [
            i(" Do you want to delete this Item? ")
          ]),
          footer: r(() => [
            o("button", {
              type: "button",
              class: "modal-delete-btn",
              onClick: e[7] || (e[7] = (n) => R(y(d) + "/" + t.entry.id, t.entry.id)),
              "aria-label": "Close modal"
            }, " Delete "),
            o("button", {
              type: "button",
              class: "modal-cancel-btn",
              onClick: e[8] || (e[8] = (n) => g()),
              "aria-label": "Close modal"
            }, " Cancel ")
          ]),
          _: 1
        })) : L("", !0)
      ]);
    };
  }
});
const G = /* @__PURE__ */ F(A, [["__scopeId", "data-v-087fa61d"]]), Q = /* @__PURE__ */ E({
  __name: "List",
  setup(v) {
    const t = U(), { entries: a } = O(t);
    return (l, c) => (s(), u(b, null, [
      o("h4", null, [
        i("List "),
        x(l.$slots, "object-type"),
        i("s")
      ]),
      (s(!0), u(b, null, T(y(a), (d) => (s(), u("div", {
        key: d.id.toString()
      }, [
        x(l.$slots, "list-entry-delegate", {}, () => [
          (s(), C(M(G), { entry: d }, null, 8, ["entry"]))
        ])
      ]))), 128))
    ], 64));
  }
});
export {
  Q as default
};
