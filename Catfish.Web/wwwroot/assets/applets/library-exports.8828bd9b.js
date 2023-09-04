import { defineComponent as B, ref as te, unref as v, openBlock as g, createElementBlock as T, createElementVNode as S, normalizeClass as W, withModifiers as ra, createCommentVNode as H, pushScopeId as Wn, popScopeId as qn, watch as $e, createBlock as z, Transition as ns, withCtx as N, toDisplayString as G, h as me, resolveComponent as ge, createVNode as P, Fragment as Z, renderList as he, computed as E, withDirectives as Ue, vModelCheckbox as pa, vShow as Wl, shallowRef as Wy, inject as ct, reactive as Ht, nextTick as sn, provide as ln, onMounted as je, createTextVNode as de, vModelText as To, vModelSelect as er, withKeys as qy, isRef as gt, vModelRadio as cv, resolveDynamicComponent as ce, renderSlot as F, toRef as b, getCurrentInstance as Gy, onUnmounted as Yy, onBeforeUnmount as ju, onActivated as Wu, mergeProps as ye, isReactive as Ky, normalizeStyle as tr, useSlots as wa, useAttrs as dv, normalizeProps as as, guardReactiveProps as rs, createSlots as Xy, Comment as Zy, Teleport as Qy } from "vue";
import { defineStore as wn, storeToRefs as is, createPinia as os } from "pinia";
var Ga = /* @__PURE__ */ ((e) => (e.ShortAnswer = "Short Answer", e.Paragraph = "Paragraph", e.RichText = "Rich Text", e.AttachmentField = "AttachmentField", e))(Ga || {}), ss = /* @__PURE__ */ ((e) => (e.Date = "Date", e.DateTime = "Date Time", e.Decimal = "Decimal", e.Integer = "Integer", e.Email = "Email", e))(ss || {}), Jr = /* @__PURE__ */ ((e) => (e.Checkboxes = "Checkboxes", e.DataList = "Data List", e.RadioButtons = "Radio Buttons", e.DropDown = "Drop Down", e))(Jr || {}), fv = /* @__PURE__ */ ((e) => (e.InfoSection = "Info Section", e))(fv || {}), Te = /* @__PURE__ */ ((e) => (e.ShortAnswer = "Short Answer", e.Paragraph = "Paragraph", e.RichText = "Rich Text", e.Date = "Date", e.DateTime = "Date Time", e.Decimal = "Decimal", e.Integer = "Integer", e.Email = "Email", e.Checkboxes = "Checkboxes", e.DataList = "Data List", e.RadioButtons = "Radio Buttons", e.DropDown = "Drop Down", e.InfoSection = "Info Section", e.AttachmentField = "AttachmentField", e))(Te || {});
const Jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextType: Ga,
  MonolingualFieldType: ss,
  OptionFieldType: Jr,
  InfoSectionType: fv,
  FieldType: Te
}, Symbol.toStringTag, { value: "Module" }));
var eb = function() {
  function e(t) {
    if (!t)
      throw new TypeError("Invalid argument; `value` has no value.");
    this.value = e.EMPTY, t && e.isGuid(t) && (this.value = t);
  }
  return e.isGuid = function(t) {
    var n = t.toString();
    return t && (t instanceof e || e.validator.test(n));
  }, e.create = function() {
    return new e([e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-"));
  }, e.createEmpty = function() {
    return new e("emptyguid");
  }, e.parse = function(t) {
    return new e(t);
  }, e.raw = function() {
    return [e.gen(2), e.gen(1), e.gen(1), e.gen(1), e.gen(3)].join("-");
  }, e.gen = function(t) {
    for (var n = "", a = 0; a < t; a++)
      n += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    return n;
  }, e.prototype.equals = function(t) {
    return e.isGuid(t) && this.value === t.toString();
  }, e.prototype.isEmpty = function() {
    return this.value === e.EMPTY;
  }, e.prototype.toString = function() {
    return this.value;
  }, e.prototype.toJSON = function() {
    return {
      value: this.value
    };
  }, e.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), e.EMPTY = "00000000-0000-0000-0000-000000000000", e;
}(), oe = eb;
const yt = {
  googleApiKey: "Use dev credentials from https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit",
  googleCalendarIds: ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  maxEvents: 10,
  initialView: "dayGridMonth",
  dataRepositoryApiRoot: "https://localhost:5020"
};
var nr = /* @__PURE__ */ ((e) => (e.Draft = "Draft", e.Active = "Active", e.Archived = "Archived", e.Inactive = "Inactive", e.Deleted = "Deleted", e))(nr || {}), ls = /* @__PURE__ */ ((e) => (e.Item = "Item", e.Collection = "Collection", e.Unknown = "Unknown", e))(ls || {}), ql = /* @__PURE__ */ ((e) => (e.Title = "Title", e.Description = "Description", e.TitleOrDescription = "TitleOrDescription", e))(ql || {});
const Er = wn("FormBuilderStore", {
  state: () => ({
    lang: ["en", "fr"],
    form: null,
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    createNewForm() {
      this.form = {
        id: oe.EMPTY,
        name: "",
        description: "",
        fields: [],
        state: nr.Draft
      };
    },
    loadForm(e) {
      let t = `${this.getApiRoot}/${e}`;
      console.log(t), fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.form = n;
      }).catch((n) => {
        console.error("Load Form API Error:", n);
      });
    },
    saveForm() {
      var a, r;
      if (!this.form) {
        console.error("Cannot save null form.");
        return;
      }
      const e = ((r = (a = this.form) == null ? void 0 : a.id) == null ? void 0 : r.toString()) === oe.EMPTY;
      let t = `${this.getApiRoot}`, n = "";
      e ? (console.log("Saving new form."), this.form.id = oe.create().toString(), n = "POST") : (console.log("Updating existing form."), t = `${t}/${this.form.id}`, n = "PUT"), fetch(
        t,
        {
          body: JSON.stringify(this.form),
          method: n,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": `${yt.dataRepositoryApiRoot}`,
            "Access-Control-Allow-Credentials": "true"
          }
        }
      ).then((i) => {
        if (i.ok)
          this.transientMessageModel.message = "The form saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (e && this.form && (this.form.id = oe.EMPTY), this.transientMessageModel.messageClass = "danger", i.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to save the form";
              break;
            case 404:
              this.transientMessageModel.message = "Form not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to save the form";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to save the form";
              break;
          }
      }).catch((i) => {
        e && this.form && (this.form.id = oe.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Form Save API Error:", i);
      });
    },
    setApiRoot(e) {
      this.apiRoot = e;
    }
  },
  getters: {
    getApiRoot(e) {
      return e.apiRoot ? e.apiRoot : yt.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), ar = (e) => {
  const t = {
    id: oe.create().toString(),
    values: []
  };
  return (typeof e == "string" ? [e] : e).forEach((a) => {
    t.values.push({
      id: oe.create().toString(),
      lang: a
    });
  }), t;
}, pv = (e) => {
  const t = {
    id: oe.create().toString()
  };
  return e && (t.lang = e), t;
}, sd = () => oe.create().toString(), qu = (e, t, n) => {
  var r, i;
  let a;
  return t ? a = (r = e == null ? void 0 : e.values) == null ? void 0 : r.filter((o) => o.lang === t).map((o) => o.value) : a = (i = e == null ? void 0 : e.values) == null ? void 0 : i.map((o) => o.value), n ? a.join(n) : a;
}, tb = (e) => {
  const t = JSON.parse(JSON.stringify(e));
  return t.id = sd(), t.values.forEach((n) => {
    n.id = sd();
  }), t;
}, vv = (e, t) => {
  var r, i;
  var n = "", a = [];
  return e.multilingualTextValues && ((r = e.multilingualTextValues) == null ? void 0 : r.length) > 0 ? e.multilingualTextValues.forEach((o) => {
    n += qu(o, null, t);
  }) : e.monolingualTextValues && ((i = e.monolingualTextValues) == null ? void 0 : i.length) > 0 && (e.monolingualTextValues.forEach((o) => {
    a.push(o.value);
  }), n = a == null ? void 0 : a.join(t)), n;
};
function nb(e, t) {
  return {
    id: oe.create().toString(),
    isExtendedInput: !1,
    isExtendedInputRequired: !1,
    optionText: t || ar(e)
  };
}
const Ya = (e, t) => ab(e.optionText, t);
function ab(e, t) {
  var n, a, r;
  return t ? (a = (n = e == null ? void 0 : e.values) == null ? void 0 : n.filter((i) => i.lang === t).map((i) => i.value)) == null ? void 0 : a.at(0) : (r = e == null ? void 0 : e.values) == null ? void 0 : r.map((i) => i.value);
}
const rb = (e) => {
  const t = JSON.parse(JSON.stringify(e));
  return t.id = oe.create(), t.optionText.id = oe.create(), t.optionText.values.forEach((n) => n.id = oe.create()), t;
}, Gu = (e) => (Wn("data-v-139cec3d"), e = e(), qn(), e), ib = {
  key: 0,
  class: "row"
}, ob = /* @__PURE__ */ Gu(() => /* @__PURE__ */ S("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ S("h6", null, "File:")
], -1)), sb = { class: "col-sm-10" }, lb = ["onDragenter", "onDragleave", "onDrop"], ub = /* @__PURE__ */ Gu(() => /* @__PURE__ */ S("div", null, "Drag or Drop File", -1)), cb = /* @__PURE__ */ Gu(() => /* @__PURE__ */ S("div", null, "OR", -1)), db = ["for"], fb = ["id"], pb = /* @__PURE__ */ B({
  __name: "AttachmentField",
  props: {
    model: null,
    elementId: null
  },
  setup(e) {
    const t = e, n = t.model.type === Te.AttachmentField, a = t.elementId;
    te("");
    const r = te(!1), i = () => {
      r.value = !r.value;
    };
    return (o, s) => v(n) ? (g(), T("div", ib, [
      ob,
      S("div", sb, [
        S("div", {
          class: W(["dropzone", { "active-dropzone": r.value }]),
          onDragenter: ra(i, ["prevent"]),
          onDragleave: ra(i, ["prevent"]),
          onDragover: s[0] || (s[0] = ra(() => {
          }, ["prevent"])),
          onDrop: ra(i, ["prevent"])
        }, [
          ub,
          cb,
          S("label", { for: v(a) }, "Select File ", 8, db),
          S("input", {
            type: "file",
            id: v(a)
          }, null, 8, fb)
        ], 42, lb)
      ])
    ])) : H("", !0);
  }
});
const Ut = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, hv = /* @__PURE__ */ Ut(pb, [["__scopeId", "data-v-139cec3d"]]), Yu = (e) => Object.values(Jr).map((t) => t).includes(e.type), mv = (e) => Object.values(Ga).map((t) => t).includes(e.type), gv = (e) => Object.values(ss).map((t) => t).includes(e.type), yv = (e) => Object.values(ss).map((t) => t).includes(e.type), vb = (e) => Object.values(hv).map((t) => t).includes(e.type), bv = (e, t) => {
  const n = qu(e.title, t);
  return (n == null ? void 0 : n.length) > 0 ? n[0] : null;
}, _v = (e, t) => {
  const n = qu(e.description, t);
  return (n == null ? void 0 : n.length) > 0 ? n[0] : null;
}, hb = (e, t) => {
  var a, r;
  const n = {
    id: oe.create().toString(),
    fieldId: e.id
  };
  if (Yu(e))
    n.selectedOptionIds = [], e.allowCustomOptionValues && (n.customOptionValues = []), (a = e.options) != null && a.find((i) => i.isExtendedInput) && (n.extendedOptionValues = []);
  else if (vb(e))
    n.fileReferences = [], e.allowCustomOptionValues && (n.customOptionValues = []), (r = e.options) != null && r.find((i) => i.isExtendedInput) && (n.extendedOptionValues = []);
  else if (mv(e)) {
    const i = typeof t == "string" ? [t] : t;
    n.multilingualTextValues = [ar(i)];
  } else
    gv(e) && (n.monolingualTextValues = [pv(null)]);
  return n;
}, Ev = (e, t) => {
  var a;
  const n = {
    id: oe.EMPTY,
    formId: e.id,
    fieldData: []
  };
  return (a = e.fields) == null || a.forEach((r) => {
    const i = hb(r, t);
    n.fieldData.push(i);
  }), n;
}, us = /* @__PURE__ */ B({
  __name: "TransientMessage",
  props: {
    model: null
  },
  setup(e) {
    const t = e;
    return $e(() => t.model.message, async (n) => {
      n && setTimeout(() => {
        t.model.message = null;
      }, 2e3);
    }), (n, a) => (g(), z(ns, { name: "fade" }, {
      default: N(() => [
        e.model.message ? (g(), T("p", {
          key: 0,
          class: W("alert alert-" + e.model.messageClass)
        }, G(e.model.message), 3)) : H("", !0)
      ]),
      _: 1
    }));
  }
});
/*!
  * vue-draggable-next v2.1.0
  * (c) 2021 Anish George
  * @license MIT
  */
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ld(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ld(Object(n), !0).forEach(function(a) {
      mb(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ld(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ro(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ro = function(t) {
    return typeof t;
  } : ro = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function mb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function vn() {
  return vn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vn.apply(this, arguments);
}
function gb(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function yb(e, t) {
  if (e == null)
    return {};
  var n = gb(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, a) || (n[a] = e[a]));
  }
  return n;
}
var bb = "1.14.0";
function un(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Sn = un(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), pi = un(/Edge/i), ud = un(/firefox/i), Pr = un(/safari/i) && !un(/chrome/i) && !un(/android/i), wv = un(/iP(ad|od|hone)/i), _b = un(/chrome/i) && un(/android/i), Sv = {
  capture: !1,
  passive: !1
};
function Oe(e, t, n) {
  e.addEventListener(t, n, !Sn && Sv);
}
function De(e, t, n) {
  e.removeEventListener(t, n, !Sn && Sv);
}
function ko(e, t) {
  if (!!t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Eb(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Gt(e, t, n, a) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && ko(e, t) : ko(e, t)) || a && e === n)
        return e;
      if (e === n)
        break;
    } while (e = Eb(e));
  }
  return null;
}
var cd = /\s+/g;
function _t(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var a = (" " + e.className + " ").replace(cd, " ").replace(" " + t + " ", " ");
      e.className = (a + (n ? " " + t : "")).replace(cd, " ");
    }
}
function pe(e, t, n) {
  var a = e && e.style;
  if (a) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in a) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), a[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function Ka(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var a = pe(e, "transform");
      a && a !== "none" && (n = a + " " + n);
    } while (!t && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Cv(e, t, n) {
  if (e) {
    var a = e.getElementsByTagName(t), r = 0, i = a.length;
    if (n)
      for (; r < i; r++)
        n(a[r], r);
    return a;
  }
  return [];
}
function Zt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function et(e, t, n, a, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, o, s, l, c, u, d;
    if (e !== window && e.parentNode && e !== Zt() ? (i = e.getBoundingClientRect(), o = i.top, s = i.left, l = i.bottom, c = i.right, u = i.height, d = i.width) : (o = 0, s = 0, l = window.innerHeight, c = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (t || n) && e !== window && (r = r || e.parentNode, !Sn))
      do
        if (r && r.getBoundingClientRect && (pe(r, "transform") !== "none" || n && pe(r, "position") !== "static")) {
          var f = r.getBoundingClientRect();
          o -= f.top + parseInt(pe(r, "border-top-width")), s -= f.left + parseInt(pe(r, "border-left-width")), l = o + i.height, c = s + i.width;
          break;
        }
      while (r = r.parentNode);
    if (a && e !== window) {
      var p = Ka(r || e), h = p && p.a, y = p && p.d;
      p && (o /= y, s /= h, d /= h, u /= y, l = o + u, c = s + d);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: c,
      width: d,
      height: u
    };
  }
}
function dd(e, t, n) {
  for (var a = Nn(e, !0), r = et(e)[t]; a; ) {
    var i = et(a)[n], o = void 0;
    if (n === "top" || n === "left" ? o = r >= i : o = r <= i, !o)
      return a;
    if (a === Zt())
      break;
    a = Nn(a, !1);
  }
  return !1;
}
function rr(e, t, n, a) {
  for (var r = 0, i = 0, o = e.children; i < o.length; ) {
    if (o[i].style.display !== "none" && o[i] !== ve.ghost && (a || o[i] !== ve.dragged) && Gt(o[i], n.draggable, e, !1)) {
      if (r === t)
        return o[i];
      r++;
    }
    i++;
  }
  return null;
}
function Ku(e, t) {
  for (var n = e.lastElementChild; n && (n === ve.ghost || pe(n, "display") === "none" || t && !ko(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function At(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ve.clone && (!t || ko(e, t)) && n++;
  return n;
}
function fd(e) {
  var t = 0, n = 0, a = Zt();
  if (e)
    do {
      var r = Ka(e), i = r.a, o = r.d;
      t += e.scrollLeft * i, n += e.scrollTop * o;
    } while (e !== a && (e = e.parentNode));
  return [t, n];
}
function wb(e, t) {
  for (var n in e)
    if (!!e.hasOwnProperty(n)) {
      for (var a in t)
        if (t.hasOwnProperty(a) && t[a] === e[n][a])
          return Number(n);
    }
  return -1;
}
function Nn(e, t) {
  if (!e || !e.getBoundingClientRect)
    return Zt();
  var n = e, a = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = pe(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return Zt();
        if (a || t)
          return n;
        a = !0;
      }
    }
  while (n = n.parentNode);
  return Zt();
}
function Sb(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function qs(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Br;
function Tv(e, t) {
  return function() {
    if (!Br) {
      var n = arguments, a = this;
      n.length === 1 ? e.call(a, n[0]) : e.apply(a, n), Br = setTimeout(function() {
        Br = void 0;
      }, t);
    }
  };
}
function Cb() {
  clearTimeout(Br), Br = void 0;
}
function kv(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function xv(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var wt = "Sortable" + new Date().getTime();
function Tb() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(r) {
          if (!(pe(r, "display") === "none" || r === ve.ghost)) {
            e.push({
              target: r,
              rect: et(r)
            });
            var i = Jt({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var o = Ka(r, !0);
              o && (i.top -= o.f, i.left -= o.e);
            }
            r.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(a) {
      e.push(a);
    },
    removeAnimationState: function(a) {
      e.splice(wb(e, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof a == "function" && a();
        return;
      }
      var i = !1, o = 0;
      e.forEach(function(s) {
        var l = 0, c = s.target, u = c.fromRect, d = et(c), f = c.prevFromRect, p = c.prevToRect, h = s.rect, y = Ka(c, !0);
        y && (d.top -= y.f, d.left -= y.e), c.toRect = d, c.thisAnimationDuration && qs(f, d) && !qs(u, d) && (h.top - d.top) / (h.left - d.left) === (u.top - d.top) / (u.left - d.left) && (l = xb(h, f, p, r.options)), qs(d, u) || (c.prevFromRect = u, c.prevToRect = d, l || (l = r.options.animation), r.animate(c, h, d, l)), l && (i = !0, o = Math.max(o, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof a == "function" && a();
      }, o) : typeof a == "function" && a(), e = [];
    },
    animate: function(a, r, i, o) {
      if (o) {
        pe(a, "transition", ""), pe(a, "transform", "");
        var s = Ka(this.el), l = s && s.a, c = s && s.d, u = (r.left - i.left) / (l || 1), d = (r.top - i.top) / (c || 1);
        a.animatingX = !!u, a.animatingY = !!d, pe(a, "transform", "translate3d(" + u + "px," + d + "px,0)"), this.forRepaintDummy = kb(a), pe(a, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), pe(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          pe(a, "transition", ""), pe(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, o);
      }
    }
  };
}
function kb(e) {
  return e.offsetWidth;
}
function xb(e, t, n, a) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * a.animation;
}
var Aa = [], Gs = {
  initializeByDefault: !0
}, vi = {
  mount: function(t) {
    for (var n in Gs)
      Gs.hasOwnProperty(n) && !(n in t) && (t[n] = Gs[n]);
    Aa.forEach(function(a) {
      if (a.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Aa.push(t);
  },
  pluginEvent: function(t, n, a) {
    var r = this;
    this.eventCanceled = !1, a.cancel = function() {
      r.eventCanceled = !0;
    };
    var i = t + "Global";
    Aa.forEach(function(o) {
      !n[o.pluginName] || (n[o.pluginName][i] && n[o.pluginName][i](Jt({
        sortable: n
      }, a)), n.options[o.pluginName] && n[o.pluginName][t] && n[o.pluginName][t](Jt({
        sortable: n
      }, a)));
    });
  },
  initializePlugins: function(t, n, a, r) {
    Aa.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var c = new s(t, n, t.options);
        c.sortable = t, c.options = t.options, t[l] = c, vn(a, c.defaults);
      }
    });
    for (var i in t.options)
      if (!!t.options.hasOwnProperty(i)) {
        var o = this.modifyOption(t, i, t.options[i]);
        typeof o < "u" && (t.options[i] = o);
      }
  },
  getEventProperties: function(t, n) {
    var a = {};
    return Aa.forEach(function(r) {
      typeof r.eventProperties == "function" && vn(a, r.eventProperties.call(n[r.pluginName], t));
    }), a;
  },
  modifyOption: function(t, n, a) {
    var r;
    return Aa.forEach(function(i) {
      !t[i.pluginName] || i.optionListeners && typeof i.optionListeners[n] == "function" && (r = i.optionListeners[n].call(t[i.pluginName], a));
    }), r;
  }
};
function Db(e) {
  var t = e.sortable, n = e.rootEl, a = e.name, r = e.targetEl, i = e.cloneEl, o = e.toEl, s = e.fromEl, l = e.oldIndex, c = e.newIndex, u = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent, p = e.putSortable, h = e.extraEventProperties;
  if (t = t || n && n[wt], !!t) {
    var y, w = t.options, m = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Sn && !pi ? y = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(a, !0, !0)), y.to = o || n, y.from = s || n, y.item = r || n, y.clone = i, y.oldIndex = l, y.newIndex = c, y.oldDraggableIndex = u, y.newDraggableIndex = d, y.originalEvent = f, y.pullMode = p ? p.lastPutMode : void 0;
    var _ = Jt(Jt({}, h), vi.getEventProperties(a, t));
    for (var k in _)
      y[k] = _[k];
    n && n.dispatchEvent(y), w[m] && w[m].call(t, y);
  }
}
var Ab = ["evt"], ht = function(t, n) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = a.evt, i = yb(a, Ab);
  vi.pluginEvent.bind(ve)(t, n, Jt({
    dragEl: Y,
    parentEl: Ge,
    ghostEl: _e,
    rootEl: He,
    nextEl: na,
    lastDownEl: io,
    cloneEl: Ye,
    cloneHidden: $n,
    dragStarted: Ir,
    putSortable: ot,
    activeSortable: ve.active,
    originalEvent: r,
    oldIndex: Ua,
    oldDraggableIndex: Vr,
    newIndex: Et,
    newDraggableIndex: In,
    hideGhostForTarget: Iv,
    unhideGhostForTarget: Ov,
    cloneNowHidden: function() {
      $n = !0;
    },
    cloneNowShown: function() {
      $n = !1;
    },
    dispatchSortableEvent: function(s) {
      dt({
        sortable: n,
        name: s,
        originalEvent: r
      });
    }
  }, i));
};
function dt(e) {
  Db(Jt({
    putSortable: ot,
    cloneEl: Ye,
    targetEl: Y,
    rootEl: He,
    oldIndex: Ua,
    oldDraggableIndex: Vr,
    newIndex: Et,
    newDraggableIndex: In
  }, e));
}
var Y, Ge, _e, He, na, io, Ye, $n, Ua, Et, Vr, In, Ii, ot, Pa = !1, xo = !1, Do = [], Jn, Pt, Ys, Ks, pd, vd, Ir, Ra, Lr, Fr = !1, Oi = !1, oo, ut, Xs = [], Gl = !1, Ao = [], cs = typeof document < "u", $i = wv, hd = pi || Sn ? "cssFloat" : "float", Rb = cs && !_b && !wv && "draggable" in document.createElement("div"), Dv = function() {
  if (!!cs) {
    if (Sn)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Av = function(t, n) {
  var a = pe(t), r = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), i = rr(t, 0, n), o = rr(t, 1, n), s = i && pe(i), l = o && pe(o), c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + et(i).width, u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + et(o).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === d) ? "vertical" : "horizontal";
  }
  return i && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || c >= r && a[hd] === "none" || o && a[hd] === "none" && c + u > r) ? "vertical" : "horizontal";
}, Ib = function(t, n, a) {
  var r = a ? t.left : t.top, i = a ? t.right : t.bottom, o = a ? t.width : t.height, s = a ? n.left : n.top, l = a ? n.right : n.bottom, c = a ? n.width : n.height;
  return r === s || i === l || r + o / 2 === s + c / 2;
}, Ob = function(t, n) {
  var a;
  return Do.some(function(r) {
    var i = r[wt].options.emptyInsertThreshold;
    if (!(!i || Ku(r))) {
      var o = et(r), s = t >= o.left - i && t <= o.right + i, l = n >= o.top - i && n <= o.bottom + i;
      if (s && l)
        return a = r;
    }
  }), a;
}, Rv = function(t) {
  function n(i, o) {
    return function(s, l, c, u) {
      var d = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (i == null && (o || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (o && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(s, l, c, u), o)(s, l, c, u);
      var f = (o ? s : l).options.group.name;
      return i === !0 || typeof i == "string" && i === f || i.join && i.indexOf(f) > -1;
    };
  }
  var a = {}, r = t.group;
  (!r || ro(r) != "object") && (r = {
    name: r
  }), a.name = r.name, a.checkPull = n(r.pull, !0), a.checkPut = n(r.put), a.revertClone = r.revertClone, t.group = a;
}, Iv = function() {
  !Dv && _e && pe(_e, "display", "none");
}, Ov = function() {
  !Dv && _e && pe(_e, "display", "");
};
cs && document.addEventListener("click", function(e) {
  if (xo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), xo = !1, !1;
}, !0);
var ea = function(t) {
  if (Y) {
    t = t.touches ? t.touches[0] : t;
    var n = Ob(t.clientX, t.clientY);
    if (n) {
      var a = {};
      for (var r in t)
        t.hasOwnProperty(r) && (a[r] = t[r]);
      a.target = a.rootEl = n, a.preventDefault = void 0, a.stopPropagation = void 0, n[wt]._onDragOver(a);
    }
  }
}, $b = function(t) {
  Y && Y.parentNode[wt]._isOutsideThisEl(t.target);
};
function ve(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = vn({}, t), e[wt] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return Av(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: ve.supportPointer !== !1 && "PointerEvent" in window && !Pr,
    emptyInsertThreshold: 5
  };
  vi.initializePlugins(this, e, n);
  for (var a in n)
    !(a in t) && (t[a] = n[a]);
  Rv(t);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Rb, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Oe(e, "pointerdown", this._onTapStart) : (Oe(e, "mousedown", this._onTapStart), Oe(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Oe(e, "dragover", this), Oe(e, "dragenter", this)), Do.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), vn(this, Tb());
}
ve.prototype = {
  constructor: ve,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Ra = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, Y) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (!!t.cancelable) {
      var n = this, a = this.el, r = this.options, i = r.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, u = r.filter;
      if (Hb(a), !Y && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || r.disabled) && !c.isContentEditable && !(!this.nativeDraggable && Pr && l && l.tagName.toUpperCase() === "SELECT") && (l = Gt(l, r.draggable, a, !1), !(l && l.animated) && io !== l)) {
        if (Ua = At(l), Vr = At(l, r.draggable), typeof u == "function") {
          if (u.call(this, t, l, this)) {
            dt({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: a,
              fromEl: a
            }), ht("filter", n, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(d) {
          if (d = Gt(c, d.trim(), a, !1), d)
            return dt({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: l,
              fromEl: a,
              toEl: a
            }), ht("filter", n, {
              evt: t
            }), !0;
        }), u)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        r.handle && !Gt(c, r.handle, a, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, n, a) {
    var r = this, i = r.el, o = r.options, s = i.ownerDocument, l;
    if (a && !Y && a.parentNode === i) {
      var c = et(a);
      if (He = i, Y = a, Ge = Y.parentNode, na = Y.nextSibling, io = a, Ii = o.group, ve.dragged = Y, Jn = {
        target: Y,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, pd = Jn.clientX - c.left, vd = Jn.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, Y.style["will-change"] = "all", l = function() {
        if (ht("delayEnded", r, {
          evt: t
        }), ve.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !ud && r.nativeDraggable && (Y.draggable = !0), r._triggerDragStart(t, n), dt({
          sortable: r,
          name: "choose",
          originalEvent: t
        }), _t(Y, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(u) {
        Cv(Y, u.trim(), Zs);
      }), Oe(s, "dragover", ea), Oe(s, "mousemove", ea), Oe(s, "touchmove", ea), Oe(s, "mouseup", r._onDrop), Oe(s, "touchend", r._onDrop), Oe(s, "touchcancel", r._onDrop), ud && this.nativeDraggable && (this.options.touchStartThreshold = 4, Y.draggable = !0), ht("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || n) && (!this.nativeDraggable || !(pi || Sn))) {
        if (ve.eventCanceled) {
          this._onDrop();
          return;
        }
        Oe(s, "mouseup", r._disableDelayedDrag), Oe(s, "touchend", r._disableDelayedDrag), Oe(s, "touchcancel", r._disableDelayedDrag), Oe(s, "mousemove", r._delayedDragTouchMoveHandler), Oe(s, "touchmove", r._delayedDragTouchMoveHandler), o.supportPointer && Oe(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Y && Zs(Y), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    De(t, "mouseup", this._disableDelayedDrag), De(t, "touchend", this._disableDelayedDrag), De(t, "touchcancel", this._disableDelayedDrag), De(t, "mousemove", this._delayedDragTouchMoveHandler), De(t, "touchmove", this._delayedDragTouchMoveHandler), De(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? Oe(document, "pointermove", this._onTouchMove) : n ? Oe(document, "touchmove", this._onTouchMove) : Oe(document, "mousemove", this._onTouchMove) : (Oe(Y, "dragend", this), Oe(He, "dragstart", this._onDragStart));
    try {
      document.selection ? so(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (Pa = !1, He && Y) {
      ht("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Oe(document, "dragover", $b);
      var a = this.options;
      !t && _t(Y, a.dragClass, !1), _t(Y, a.ghostClass, !0), ve.active = this, t && this._appendGhost(), dt({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pt) {
      this._lastX = Pt.clientX, this._lastY = Pt.clientY, Iv();
      for (var t = document.elementFromPoint(Pt.clientX, Pt.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Pt.clientX, Pt.clientY), t !== n); )
        n = t;
      if (Y.parentNode[wt]._isOutsideThisEl(t), n)
        do {
          if (n[wt]) {
            var a = void 0;
            if (a = n[wt]._onDragOver({
              clientX: Pt.clientX,
              clientY: Pt.clientY,
              target: t,
              rootEl: n
            }), a && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Ov();
    }
  },
  _onTouchMove: function(t) {
    if (Jn) {
      var n = this.options, a = n.fallbackTolerance, r = n.fallbackOffset, i = t.touches ? t.touches[0] : t, o = _e && Ka(_e, !0), s = _e && o && o.a, l = _e && o && o.d, c = $i && ut && fd(ut), u = (i.clientX - Jn.clientX + r.x) / (s || 1) + (c ? c[0] - Xs[0] : 0) / (s || 1), d = (i.clientY - Jn.clientY + r.y) / (l || 1) + (c ? c[1] - Xs[1] : 0) / (l || 1);
      if (!ve.active && !Pa) {
        if (a && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < a)
          return;
        this._onDragStart(t, !0);
      }
      if (_e) {
        o ? (o.e += u - (Ys || 0), o.f += d - (Ks || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: d
        };
        var f = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        pe(_e, "webkitTransform", f), pe(_e, "mozTransform", f), pe(_e, "msTransform", f), pe(_e, "transform", f), Ys = u, Ks = d, Pt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!_e) {
      var t = this.options.fallbackOnBody ? document.body : He, n = et(Y, !0, $i, !0, t), a = this.options;
      if ($i) {
        for (ut = t; pe(ut, "position") === "static" && pe(ut, "transform") === "none" && ut !== document; )
          ut = ut.parentNode;
        ut !== document.body && ut !== document.documentElement ? (ut === document && (ut = Zt()), n.top += ut.scrollTop, n.left += ut.scrollLeft) : ut = Zt(), Xs = fd(ut);
      }
      _e = Y.cloneNode(!0), _t(_e, a.ghostClass, !1), _t(_e, a.fallbackClass, !0), _t(_e, a.dragClass, !0), pe(_e, "transition", ""), pe(_e, "transform", ""), pe(_e, "box-sizing", "border-box"), pe(_e, "margin", 0), pe(_e, "top", n.top), pe(_e, "left", n.left), pe(_e, "width", n.width), pe(_e, "height", n.height), pe(_e, "opacity", "0.8"), pe(_e, "position", $i ? "absolute" : "fixed"), pe(_e, "zIndex", "100000"), pe(_e, "pointerEvents", "none"), ve.ghost = _e, t.appendChild(_e), pe(_e, "transform-origin", pd / parseInt(_e.style.width) * 100 + "% " + vd / parseInt(_e.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var a = this, r = t.dataTransfer, i = a.options;
    if (ht("dragStart", this, {
      evt: t
    }), ve.eventCanceled) {
      this._onDrop();
      return;
    }
    ht("setupClone", this), ve.eventCanceled || (Ye = xv(Y), Ye.draggable = !1, Ye.style["will-change"] = "", this._hideClone(), _t(Ye, this.options.chosenClass, !1), ve.clone = Ye), a.cloneId = so(function() {
      ht("clone", a), !ve.eventCanceled && (a.options.removeCloneOnHide || He.insertBefore(Ye, Y), a._hideClone(), dt({
        sortable: a,
        name: "clone"
      }));
    }), !n && _t(Y, i.dragClass, !0), n ? (xo = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (De(document, "mouseup", a._onDrop), De(document, "touchend", a._onDrop), De(document, "touchcancel", a._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(a, r, Y)), Oe(document, "drop", a), pe(Y, "transform", "translateZ(0)")), Pa = !0, a._dragStartId = so(a._dragStarted.bind(a, n, t)), Oe(document, "selectstart", a), Ir = !0, Pr && pe(document.body, "user-select", "none");
  },
  _onDragOver: function(t) {
    var n = this.el, a = t.target, r, i, o, s = this.options, l = s.group, c = ve.active, u = Ii === l, d = s.sort, f = ot || c, p, h = this, y = !1;
    if (Gl)
      return;
    function w(Re, Ee) {
      ht(Re, h, Jt({
        evt: t,
        isOwner: u,
        axis: p ? "vertical" : "horizontal",
        revert: o,
        dragRect: r,
        targetRect: i,
        canSort: d,
        fromSortable: f,
        target: a,
        completed: _,
        onMove: function(qe, it) {
          return Ni(He, n, Y, r, qe, et(qe), t, it);
        },
        changed: k
      }, Ee));
    }
    function m() {
      w("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState();
    }
    function _(Re) {
      return w("dragOverCompleted", {
        insertion: Re
      }), Re && (u ? c._hideClone() : c._showClone(h), h !== f && (_t(Y, ot ? ot.options.ghostClass : c.options.ghostClass, !1), _t(Y, s.ghostClass, !0)), ot !== h && h !== ve.active ? ot = h : h === ve.active && ot && (ot = null), f === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        w("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (a === Y && !Y.animated || a === n && !a.animated) && (Ra = null), !s.dragoverBubble && !t.rootEl && a !== document && (Y.parentNode[wt]._isOutsideThisEl(t.target), !Re && ea(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), y = !0;
    }
    function k() {
      Et = At(Y), In = At(Y, s.draggable), dt({
        sortable: h,
        name: "change",
        toEl: n,
        newIndex: Et,
        newDraggableIndex: In,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), a = Gt(a, s.draggable, n, !0), w("dragOver"), ve.eventCanceled)
      return y;
    if (Y.contains(t.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return _(!1);
    if (xo = !1, c && !s.disabled && (u ? d || (o = Ge !== He) : ot === this || (this.lastPutMode = Ii.checkPull(this, c, Y, t)) && l.checkPut(this, c, Y, t))) {
      if (p = this._getDirection(t, a) === "vertical", r = et(Y), w("dragOverValid"), ve.eventCanceled)
        return y;
      if (o)
        return Ge = He, m(), this._hideClone(), w("revert"), ve.eventCanceled || (na ? He.insertBefore(Y, na) : He.appendChild(Y)), _(!0);
      var x = Ku(n, s.draggable);
      if (!x || Bb(t, p, this) && !x.animated) {
        if (x === Y)
          return _(!1);
        if (x && n === t.target && (a = x), a && (i = et(a)), Ni(He, n, Y, r, a, i, t, !!a) !== !1)
          return m(), n.appendChild(Y), Ge = n, k(), _(!0);
      } else if (x && Pb(t, p, this)) {
        var D = rr(n, 0, s, !0);
        if (D === Y)
          return _(!1);
        if (a = D, i = et(a), Ni(He, n, Y, r, a, i, t, !1) !== !1)
          return m(), n.insertBefore(Y, D), Ge = n, k(), _(!0);
      } else if (a.parentNode === n) {
        i = et(a);
        var A = 0, L, $ = Y.parentNode !== n, O = !Ib(Y.animated && Y.toRect || r, a.animated && a.toRect || i, p), j = p ? "top" : "left", X = dd(a, "top", "top") || dd(Y, "top", "top"), Q = X ? X.scrollTop : void 0;
        Ra !== a && (L = i[j], Fr = !1, Oi = !O && s.invertSwap || $), A = Vb(t, a, i, p, O ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, Oi, Ra === a);
        var re;
        if (A !== 0) {
          var J = At(Y);
          do
            J -= A, re = Ge.children[J];
          while (re && (pe(re, "display") === "none" || re === _e));
        }
        if (A === 0 || re === a)
          return _(!1);
        Ra = a, Lr = A;
        var Ce = a.nextElementSibling, ue = !1;
        ue = A === 1;
        var ie = Ni(He, n, Y, r, a, i, t, ue);
        if (ie !== !1)
          return (ie === 1 || ie === -1) && (ue = ie === 1), Gl = !0, setTimeout(Mb, 30), m(), ue && !Ce ? n.appendChild(Y) : a.parentNode.insertBefore(Y, ue ? Ce : a), X && kv(X, 0, Q - X.scrollTop), Ge = Y.parentNode, L !== void 0 && !Oi && (oo = Math.abs(L - et(a)[j])), k(), _(!0);
      }
      if (n.contains(Y))
        return _(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    De(document, "mousemove", this._onTouchMove), De(document, "touchmove", this._onTouchMove), De(document, "pointermove", this._onTouchMove), De(document, "dragover", ea), De(document, "mousemove", ea), De(document, "touchmove", ea);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    De(t, "mouseup", this._onDrop), De(t, "touchend", this._onDrop), De(t, "pointerup", this._onDrop), De(t, "touchcancel", this._onDrop), De(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, a = this.options;
    if (Et = At(Y), In = At(Y, a.draggable), ht("drop", this, {
      evt: t
    }), Ge = Y && Y.parentNode, Et = At(Y), In = At(Y, a.draggable), ve.eventCanceled) {
      this._nulling();
      return;
    }
    Pa = !1, Oi = !1, Fr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Yl(this.cloneId), Yl(this._dragStartId), this.nativeDraggable && (De(document, "drop", this), De(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Pr && pe(document.body, "user-select", ""), pe(Y, "transform", ""), t && (Ir && (t.cancelable && t.preventDefault(), !a.dropBubble && t.stopPropagation()), _e && _e.parentNode && _e.parentNode.removeChild(_e), (He === Ge || ot && ot.lastPutMode !== "clone") && Ye && Ye.parentNode && Ye.parentNode.removeChild(Ye), Y && (this.nativeDraggable && De(Y, "dragend", this), Zs(Y), Y.style["will-change"] = "", Ir && !Pa && _t(Y, ot ? ot.options.ghostClass : this.options.ghostClass, !1), _t(Y, this.options.chosenClass, !1), dt({
      sortable: this,
      name: "unchoose",
      toEl: Ge,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), He !== Ge ? (Et >= 0 && (dt({
      rootEl: Ge,
      name: "add",
      toEl: Ge,
      fromEl: He,
      originalEvent: t
    }), dt({
      sortable: this,
      name: "remove",
      toEl: Ge,
      originalEvent: t
    }), dt({
      rootEl: Ge,
      name: "sort",
      toEl: Ge,
      fromEl: He,
      originalEvent: t
    }), dt({
      sortable: this,
      name: "sort",
      toEl: Ge,
      originalEvent: t
    })), ot && ot.save()) : Et !== Ua && Et >= 0 && (dt({
      sortable: this,
      name: "update",
      toEl: Ge,
      originalEvent: t
    }), dt({
      sortable: this,
      name: "sort",
      toEl: Ge,
      originalEvent: t
    })), ve.active && ((Et == null || Et === -1) && (Et = Ua, In = Vr), dt({
      sortable: this,
      name: "end",
      toEl: Ge,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ht("nulling", this), He = Y = Ge = _e = na = Ye = io = $n = Jn = Pt = Ir = Et = In = Ua = Vr = Ra = Lr = ot = Ii = ve.dragged = ve.ghost = ve.clone = ve.active = null, Ao.forEach(function(t) {
      t.checked = !0;
    }), Ao.length = Ys = Ks = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Y && (this._onDragOver(t), Nb(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var t = [], n, a = this.el.children, r = 0, i = a.length, o = this.options; r < i; r++)
      n = a[r], Gt(n, o.draggable, this.el, !1) && t.push(n.getAttribute(o.dataIdAttr) || Fb(n));
    return t;
  },
  sort: function(t, n) {
    var a = {}, r = this.el;
    this.toArray().forEach(function(i, o) {
      var s = r.children[o];
      Gt(s, this.options.draggable, r, !1) && (a[i] = s);
    }, this), n && this.captureAnimationState(), t.forEach(function(i) {
      a[i] && (r.removeChild(a[i]), r.appendChild(a[i]));
    }), n && this.animateAll();
  },
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  closest: function(t, n) {
    return Gt(t, n || this.options.draggable, this.el, !1);
  },
  option: function(t, n) {
    var a = this.options;
    if (n === void 0)
      return a[t];
    var r = vi.modifyOption(this, t, n);
    typeof r < "u" ? a[t] = r : a[t] = n, t === "group" && Rv(a);
  },
  destroy: function() {
    ht("destroy", this);
    var t = this.el;
    t[wt] = null, De(t, "mousedown", this._onTapStart), De(t, "touchstart", this._onTapStart), De(t, "pointerdown", this._onTapStart), this.nativeDraggable && (De(t, "dragover", this), De(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Do.splice(Do.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!$n) {
      if (ht("hideClone", this), ve.eventCanceled)
        return;
      pe(Ye, "display", "none"), this.options.removeCloneOnHide && Ye.parentNode && Ye.parentNode.removeChild(Ye), $n = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if ($n) {
      if (ht("showClone", this), ve.eventCanceled)
        return;
      Y.parentNode == He && !this.options.group.revertClone ? He.insertBefore(Ye, Y) : na ? He.insertBefore(Ye, na) : He.appendChild(Ye), this.options.group.revertClone && this.animate(Y, Ye), pe(Ye, "display", ""), $n = !1;
    }
  }
};
function Nb(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ni(e, t, n, a, r, i, o, s) {
  var l, c = e[wt], u = c.options.onMove, d;
  return window.CustomEvent && !Sn && !pi ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = n, l.draggedRect = a, l.related = r || t, l.relatedRect = i || et(t), l.willInsertAfter = s, l.originalEvent = o, e.dispatchEvent(l), u && (d = u.call(c, l, o)), d;
}
function Zs(e) {
  e.draggable = !1;
}
function Mb() {
  Gl = !1;
}
function Pb(e, t, n) {
  var a = et(rr(n.el, 0, n.options, !0)), r = 10;
  return t ? e.clientX < a.left - r || e.clientY < a.top && e.clientX < a.right : e.clientY < a.top - r || e.clientY < a.bottom && e.clientX < a.left;
}
function Bb(e, t, n) {
  var a = et(Ku(n.el, n.options.draggable)), r = 10;
  return t ? e.clientX > a.right + r || e.clientX <= a.right && e.clientY > a.bottom && e.clientX >= a.left : e.clientX > a.right && e.clientY > a.top || e.clientX <= a.right && e.clientY > a.bottom + r;
}
function Vb(e, t, n, a, r, i, o, s) {
  var l = a ? e.clientY : e.clientX, c = a ? n.height : n.width, u = a ? n.top : n.left, d = a ? n.bottom : n.right, f = !1;
  if (!o) {
    if (s && oo < c * r) {
      if (!Fr && (Lr === 1 ? l > u + c * i / 2 : l < d - c * i / 2) && (Fr = !0), Fr)
        f = !0;
      else if (Lr === 1 ? l < u + oo : l > d - oo)
        return -Lr;
    } else if (l > u + c * (1 - r) / 2 && l < d - c * (1 - r) / 2)
      return Lb(t);
  }
  return f = f || o, f && (l < u + c * i / 2 || l > d - c * i / 2) ? l > u + c / 2 ? 1 : -1 : 0;
}
function Lb(e) {
  return At(Y) < At(e) ? 1 : -1;
}
function Fb(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, a = 0; n--; )
    a += t.charCodeAt(n);
  return a.toString(36);
}
function Hb(e) {
  Ao.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var a = t[n];
    a.checked && Ao.push(a);
  }
}
function so(e) {
  return setTimeout(e, 0);
}
function Yl(e) {
  return clearTimeout(e);
}
cs && Oe(document, "touchmove", function(e) {
  (ve.active || Pa) && e.cancelable && e.preventDefault();
});
ve.utils = {
  on: Oe,
  off: De,
  css: pe,
  find: Cv,
  is: function(t, n) {
    return !!Gt(t, n, t, !1);
  },
  extend: Sb,
  throttle: Tv,
  closest: Gt,
  toggleClass: _t,
  clone: xv,
  index: At,
  nextTick: so,
  cancelNextTick: Yl,
  detectDirection: Av,
  getChild: rr
};
ve.get = function(e) {
  return e[wt];
};
ve.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (ve.utils = Jt(Jt({}, ve.utils), a.utils)), vi.mount(a);
  });
};
ve.create = function(e, t) {
  return new ve(e, t);
};
ve.version = bb;
var Je = [], Or, Kl, Xl = !1, Qs, Js, Ro, $r;
function zb() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var a = n.originalEvent;
      this.sortable.nativeDraggable ? Oe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Oe(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Oe(document, "touchmove", this._handleFallbackAutoScroll) : Oe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var a = n.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? De(document, "dragover", this._handleAutoScroll) : (De(document, "pointermove", this._handleFallbackAutoScroll), De(document, "touchmove", this._handleFallbackAutoScroll), De(document, "mousemove", this._handleFallbackAutoScroll)), md(), lo(), Cb();
    },
    nulling: function() {
      Ro = Kl = Or = Xl = $r = Qs = Js = null, Je.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, a) {
      var r = this, i = (n.touches ? n.touches[0] : n).clientX, o = (n.touches ? n.touches[0] : n).clientY, s = document.elementFromPoint(i, o);
      if (Ro = n, a || this.options.forceAutoScrollFallback || pi || Sn || Pr) {
        el(n, this.options, s, a);
        var l = Nn(s, !0);
        Xl && (!$r || i !== Qs || o !== Js) && ($r && md(), $r = setInterval(function() {
          var c = Nn(document.elementFromPoint(i, o), !0);
          c !== l && (l = c, lo()), el(n, r.options, c, a);
        }, 10), Qs = i, Js = o);
      } else {
        if (!this.options.bubbleScroll || Nn(s, !0) === Zt()) {
          lo();
          return;
        }
        el(n, this.options, Nn(s, !1), !1);
      }
    }
  }, vn(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function lo() {
  Je.forEach(function(e) {
    clearInterval(e.pid);
  }), Je = [];
}
function md() {
  clearInterval($r);
}
var el = Tv(function(e, t, n, a) {
  if (!!t.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = Zt(), c = !1, u;
    Kl !== n && (Kl = n, lo(), Or = t.scroll, u = t.scrollFn, Or === !0 && (Or = Nn(n, !0)));
    var d = 0, f = Or;
    do {
      var p = f, h = et(p), y = h.top, w = h.bottom, m = h.left, _ = h.right, k = h.width, x = h.height, D = void 0, A = void 0, L = p.scrollWidth, $ = p.scrollHeight, O = pe(p), j = p.scrollLeft, X = p.scrollTop;
      p === l ? (D = k < L && (O.overflowX === "auto" || O.overflowX === "scroll" || O.overflowX === "visible"), A = x < $ && (O.overflowY === "auto" || O.overflowY === "scroll" || O.overflowY === "visible")) : (D = k < L && (O.overflowX === "auto" || O.overflowX === "scroll"), A = x < $ && (O.overflowY === "auto" || O.overflowY === "scroll"));
      var Q = D && (Math.abs(_ - r) <= o && j + k < L) - (Math.abs(m - r) <= o && !!j), re = A && (Math.abs(w - i) <= o && X + x < $) - (Math.abs(y - i) <= o && !!X);
      if (!Je[d])
        for (var J = 0; J <= d; J++)
          Je[J] || (Je[J] = {});
      (Je[d].vx != Q || Je[d].vy != re || Je[d].el !== p) && (Je[d].el = p, Je[d].vx = Q, Je[d].vy = re, clearInterval(Je[d].pid), (Q != 0 || re != 0) && (c = !0, Je[d].pid = setInterval(function() {
        a && this.layer === 0 && ve.active._onTouchMove(Ro);
        var Ce = Je[this.layer].vy ? Je[this.layer].vy * s : 0, ue = Je[this.layer].vx ? Je[this.layer].vx * s : 0;
        typeof u == "function" && u.call(ve.dragged.parentNode[wt], ue, Ce, e, Ro, Je[this.layer].el) !== "continue" || kv(Je[this.layer].el, ue, Ce);
      }.bind({
        layer: d
      }), 24))), d++;
    } while (t.bubbleScroll && f !== l && (f = Nn(f, !1)));
    Xl = c;
  }
}, 30), $v = function(t) {
  var n = t.originalEvent, a = t.putSortable, r = t.dragEl, i = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (!!n) {
    var c = a || i;
    s();
    var u = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(u.clientX, u.clientY);
    l(), c && !c.el.contains(d) && (o("spill"), this.onSpill({
      dragEl: r,
      putSortable: a
    }));
  }
};
function Xu() {
}
Xu.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, a = t.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var r = rr(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: $v
};
vn(Xu, {
  pluginName: "revertOnSpill"
});
function Zu() {
}
Zu.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, a = t.putSortable, r = a || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: $v
};
vn(Zu, {
  pluginName: "removeOnSpill"
});
ve.mount(new zb());
ve.mount(Zu, Xu);
function Ub() {
  return typeof window < "u" ? window.console : global.console;
}
const jb = Ub();
function Wb(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return t[a] || (t[a] = e(a));
  };
}
const qb = /-(\w)/g, gd = Wb((e) => e.replace(qb, (t, n) => n ? n.toUpperCase() : ""));
function tl(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function yd(e, t, n) {
  const a = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, a);
}
function Gb(e, t) {
  return Object.values(e).indexOf(t);
}
function Yb(e, t, n, a) {
  if (!e)
    return [];
  const r = Object.values(e), i = t.length - a;
  return [...t].map((s, l) => l >= i ? r.length : r.indexOf(s));
}
function Nv(e, t) {
  this.$nextTick(() => this.$emit(e.toLowerCase(), t));
}
function Kb(e) {
  return (t) => {
    this.realList !== null && this["onDrag" + e](t), Nv.call(this, e, t);
  };
}
function Xb(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Zb(e) {
  if (!e || e.length !== 1)
    return !1;
  const [{ type: t }] = e;
  return t ? Xb(t.name) : !1;
}
function Qb(e, t) {
  return t ? { ...t.props, ...t.attrs } : e;
}
const Zl = ["Start", "Add", "Remove", "Update", "End"], Ql = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Jb = ["Move", ...Zl, ...Ql].map((e) => "on" + e);
let nl = null;
const e_ = {
  options: Object,
  list: {
    type: Array,
    required: !1,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: !1
  },
  clone: {
    type: Function,
    default: (e) => e
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  },
  component: {
    type: String,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  }
}, Io = B({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...Zl.map((e) => e.toLowerCase()),
    ...Ql.map((e) => e.toLowerCase())
  ],
  props: e_,
  data() {
    return {
      transitionMode: !1,
      noneFunctionalComponentMode: !1,
      headerOffset: 0,
      footerOffset: 0,
      _sortable: {},
      visibleIndexes: [],
      context: {}
    };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : null, t = Qb(this.$attrs, this.componentData);
    return e ? (this.transitionMode = Zb(e), me(this.getTag(), t, e)) : me(this.getTag(), t, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && jb.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const e = {};
    Zl.forEach((r) => {
      e["on" + r] = Kb.call(this, r);
    }), Ql.forEach((r) => {
      e["on" + r] = Nv.bind(this, r);
    });
    const t = Object.keys(this.$attrs).reduce((r, i) => (r[gd(i)] = this.$attrs[i], r), {}), n = Object.assign({}, t, e, {
      onMove: (r, i) => this.onDragMove(r, i)
    });
    !("draggable" in n) && (n.draggable = ">*");
    const a = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new ve(a, n), a.__draggable_component__ = this, this.computeIndexes();
  },
  beforeUnmount() {
    try {
      this._sortable !== void 0 && this._sortable.destroy();
    } catch {
    }
  },
  computed: {
    realList() {
      return this.list ? this.list : this.modelValue;
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        this.updateOptions(e);
      },
      deep: !0
    },
    realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag() {
      return this.component ? ge(this.component) : this.tag;
    },
    updateOptions(e) {
      for (var t in e) {
        const n = gd(t);
        Jb.indexOf(n) === -1 && this._sortable.option(n, e[t]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = Yb(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(e) {
      const t = Gb(this.getChildrenNodes() || [], e);
      if (t === -1)
        return null;
      const n = this.realList[t];
      return { index: t, element: n };
    },
    emitChanges(e) {
      this.$nextTick(() => {
        this.$emit("change", e);
      });
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const t = [...this.modelValue];
      e(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const e = (t) => t.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, t) {
      const n = (a) => a.splice(t, 0, a.splice(e, 1)[0]);
      this.alterList(n);
    },
    getVmIndex(e) {
      const t = this.visibleIndexes, n = t.length;
      return e > n - 1 ? n : t[e];
    },
    getComponent() {
      return this.$slots.default ? this.$slots.default()[0].componentInstance : null;
    },
    resetTransitionData(e) {
      if (!this.noTransitionOnDrag || !this.transitionMode)
        return;
      var t = this.getChildrenNodes();
      t[e].data = null;
      const n = this.getComponent();
      n.children = [], n.kept = void 0;
    },
    onDragStart(e) {
      this.context = this.getUnderlyingVm(e.item), this.context && (e.item._underlying_vm_ = this.clone(this.context.element), nl = e.item);
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      tl(e.item);
      const n = this.getVmIndex(e.newIndex);
      this.spliceList(n, 0, t), this.computeIndexes();
      const a = { element: t, newIndex: n };
      this.emitChanges({ added: a });
    },
    onDragRemove(e) {
      if (yd(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        tl(e.clone);
        return;
      }
      if (!this.context)
        return;
      const t = this.context.index;
      this.spliceList(t, 1);
      const n = { element: this.context.element, oldIndex: t };
      this.resetTransitionData(t), this.emitChanges({ removed: n });
    },
    onDragUpdate(e) {
      tl(e.item), yd(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndex(e.newIndex);
      this.updatePosition(t, n);
      const a = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: a });
    },
    updateProperty(e, t) {
      e.hasOwnProperty(t) && (e[t] += this.headerOffset);
    },
    onDragMove(e, t) {
      const n = this.move;
      if (!n || !this.realList)
        return !0;
      const a = this.getRelatedContextFromMoveEvent(e), r = this.context, i = this.computeFutureIndex(a, e);
      Object.assign(r, { futureIndex: i });
      const o = Object.assign({}, e, {
        relatedContext: a,
        draggedContext: r
      });
      return n(o, t);
    },
    onDragEnd() {
      this.computeIndexes(), nl = null;
    },
    getTrargetedComponent(e) {
      return e.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const n = this.getTrargetedComponent(e);
      if (!n)
        return { component: n };
      const a = n.realList, r = { list: a, component: n };
      if (e !== t && a && n.getUnderlyingVm) {
        const i = n.getUnderlyingVm(t);
        if (i)
          return Object.assign(i, r);
      }
      return r;
    },
    computeFutureIndex(e, t) {
      const n = [...t.to.children].filter((o) => o.style.display !== "none");
      if (n.length === 0)
        return 0;
      const a = n.indexOf(t.related), r = e.component.getVmIndex(a);
      return n.indexOf(nl) !== -1 || !t.willInsertAfter ? r : r + 1;
    }
  }
}), t_ = { key: 0 }, n_ = /* @__PURE__ */ S("br", null, null, -1), a_ = /* @__PURE__ */ S("br", null, null, -1), r_ = { key: 1 }, i_ = { key: 0 }, o_ = { key: 1 }, s_ = /* @__PURE__ */ B({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    dispLang: { type: Boolean }
  },
  setup(e) {
    return Er(), (t, n) => {
      const a = ge("b-col"), r = ge("b-form-input"), i = ge("b-row"), o = ge("b-form-textarea");
      return e.dispLang ? (g(), T("div", t_, [
        e.textType === v(Ga).ShortAnswer ? (g(), z(i, { key: 0 }, {
          default: N(() => [
            P(a, { class: "col-sm-1" }, {
              default: N(() => [
                S("h6", null, G(e.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            P(a, { class: "col-sm-11" }, {
              default: N(() => [
                P(r, {
                  modelValue: e.model.value,
                  "onUpdate:modelValue": n[0] || (n[0] = (s) => e.model.value = s)
                }, null, 8, ["modelValue"]),
                n_
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : e.textType === v(Ga).Paragraph ? (g(), z(i, { key: 1 }, {
          default: N(() => [
            P(a, { class: "col-sm-1" }, {
              default: N(() => [
                S("h6", null, G(e.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            P(a, { class: "col-sm-11" }, {
              default: N(() => [
                P(o, {
                  modelValue: e.model.value,
                  "onUpdate:modelValue": n[1] || (n[1] = (s) => e.model.value = s),
                  rows: "3",
                  "max-rows": "6"
                }, null, 8, ["modelValue"]),
                a_
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : H("", !0)
      ])) : (g(), T("div", r_, [
        e.textType === v(Ga).ShortAnswer ? (g(), T("div", i_, [
          P(r, {
            modelValue: e.model.value,
            "onUpdate:modelValue": n[2] || (n[2] = (s) => e.model.value = s)
          }, null, 8, ["modelValue"])
        ])) : e.textType === "Paragraph" ? (g(), T("div", o_, [
          P(o, {
            modelValue: e.model.value,
            "onUpdate:modelValue": n[3] || (n[3] = (s) => e.model.value = s),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : H("", !0)
      ]));
    };
  }
}), Jl = /* @__PURE__ */ B({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(e) {
    return (t, n) => (g(!0), T(Z, null, he(e.model.values, (a) => {
      var r;
      return g(), z(s_, {
        key: a.id,
        model: a,
        "text-type": e.textType,
        "disp-lang": ((r = e.model.values) == null ? void 0 : r.length) > 1
      }, null, 8, ["model", "text-type", "disp-lang"]);
    }), 128));
  }
}), l_ = { class: "alert alert-info" }, u_ = { key: 0 }, c_ = { key: 0 }, d_ = /* @__PURE__ */ S("h6", null, "Is Extended:", -1), f_ = /* @__PURE__ */ S("br", null, null, -1), p_ = { class: "toggle-button-cover" }, v_ = { class: "button-cover" }, h_ = {
  class: "button r",
  id: "button-1"
}, m_ = /* @__PURE__ */ S("div", { class: "knobs" }, null, -1), g_ = /* @__PURE__ */ S("div", { class: "layer" }, null, -1), y_ = /* @__PURE__ */ S("h6", null, "Is Required:", -1), b_ = /* @__PURE__ */ S("br", null, null, -1), __ = { class: "toggle-button-cover" }, E_ = { class: "button-cover" }, w_ = {
  class: "button r",
  id: "button-1"
}, S_ = /* @__PURE__ */ S("div", { class: "knobs" }, null, -1), C_ = /* @__PURE__ */ S("div", { class: "layer" }, null, -1), T_ = { key: 1 }, k_ = {
  key: 0,
  class: "option-values"
}, x_ = { key: 0 }, D_ = {
  key: 0,
  style: { color: "red", "font-weight": "bold" }
}, bd = /* @__PURE__ */ B({
  __name: "Option",
  props: {
    model: null,
    optionFieldType: null,
    disableInlineEditing: { type: Boolean }
  },
  setup(e) {
    const t = e;
    Er();
    const n = te(!1), a = E(() => t.optionFieldType == Jr.Checkboxes || t.optionFieldType == Jr.RadioButtons);
    return (r, i) => {
      const o = ge("b-col"), s = ge("b-row"), l = ge("font-awesome-icon");
      return g(), T("div", l_, [
        n.value || e.disableInlineEditing ? (g(), T("div", u_, [
          P(Jl, {
            model: e.model.optionText,
            "text-type": v(Te).ShortAnswer
          }, null, 8, ["model", "text-type"]),
          v(a) ? (g(), T("span", c_, [
            P(s, null, {
              default: N(() => [
                P(o, { class: "col-sm-6" }, {
                  default: N(() => [
                    P(s, null, {
                      default: N(() => [
                        P(o, { class: "col-sm-4" }, {
                          default: N(() => [
                            d_
                          ]),
                          _: 1
                        }),
                        P(o, { class: "col-sm-8" }, {
                          default: N(() => [
                            f_,
                            S("div", p_, [
                              S("div", v_, [
                                S("div", h_, [
                                  Ue(S("input", {
                                    "onUpdate:modelValue": i[0] || (i[0] = (c) => e.model.isExtendedInput = c),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [pa, e.model.isExtendedInput]
                                  ]),
                                  m_,
                                  g_
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                P(o, { class: "col-sm-4" }, {
                  default: N(() => [
                    e.model.isExtendedInput ? (g(), z(s, { key: 0 }, {
                      default: N(() => [
                        P(o, { class: "col-sm-4" }, {
                          default: N(() => [
                            y_
                          ]),
                          _: 1
                        }),
                        P(o, { class: "col-sm-8" }, {
                          default: N(() => [
                            b_,
                            S("div", __, [
                              S("div", E_, [
                                S("div", w_, [
                                  Ue(S("input", {
                                    "onUpdate:modelValue": i[1] || (i[1] = (c) => e.model.isExtendedInputRequired = c),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [pa, e.model.isExtendedInputRequired]
                                  ]),
                                  S_,
                                  C_
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : H("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : H("", !0),
          e.disableInlineEditing ? H("", !0) : (g(), z(l, {
            key: 1,
            icon: "fa-solid fa-circle-check",
            onClick: i[2] || (i[2] = (c) => n.value = !1),
            class: "fa-icon delete-button"
          }))
        ])) : (g(), T("div", T_, [
          (g(!0), T(Z, null, he(e.model.optionText.values, (c) => {
            var u;
            return g(), T("span", null, [
              ((u = c.value) == null ? void 0 : u.length) > 0 ? (g(), T("span", k_, G(c.value), 1)) : H("", !0)
            ]);
          }), 256)),
          e.model.isExtendedInput ? (g(), T("span", x_, [
            P(l, {
              icon: "fa fa-th-list",
              class: "fa fa-th-list"
            }),
            e.model.isExtendedInputRequired ? (g(), T("span", D_, "*")) : H("", !0)
          ])) : H("", !0),
          P(l, {
            icon: "fa-solid fa-pen-to-square",
            onClick: i[3] || (i[3] = (c) => n.value = !0),
            class: "fa-icon"
          })
        ]))
      ]);
    };
  }
});
function _d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _d(Object(n), !0).forEach(function(a) {
      at(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _d(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Oo(e) {
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e);
}
function A_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ed(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function R_(e, t, n) {
  return t && Ed(e.prototype, t), n && Ed(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function at(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qu(e, t) {
  return O_(e) || N_(e, t) || Mv(e, t) || P_();
}
function hi(e) {
  return I_(e) || $_(e) || Mv(e) || M_();
}
function I_(e) {
  if (Array.isArray(e))
    return eu(e);
}
function O_(e) {
  if (Array.isArray(e))
    return e;
}
function $_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function N_(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], r = !0, i = !1, o, s;
    try {
      for (n = n.call(e); !(r = (o = n.next()).done) && (a.push(o.value), !(t && a.length === t)); r = !0)
        ;
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Mv(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return eu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return eu(e, t);
  }
}
function eu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function M_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wd = function() {
}, Ju = {}, Pv = {}, Bv = null, Vv = {
  mark: wd,
  measure: wd
};
try {
  typeof window < "u" && (Ju = window), typeof document < "u" && (Pv = document), typeof MutationObserver < "u" && (Bv = MutationObserver), typeof performance < "u" && (Vv = performance);
} catch {
}
var B_ = Ju.navigator || {}, Sd = B_.userAgent, Cd = Sd === void 0 ? "" : Sd, Ln = Ju, Le = Pv, Td = Bv, Mi = Vv;
Ln.document;
var Cn = !!Le.documentElement && !!Le.head && typeof Le.addEventListener == "function" && typeof Le.createElement == "function", Lv = ~Cd.indexOf("MSIE") || ~Cd.indexOf("Trident/"), Pi, Bi, Vi, Li, Fi, hn = "___FONT_AWESOME___", tu = 16, Fv = "fa", Hv = "svg-inline--fa", va = "data-fa-i2svg", nu = "data-fa-pseudo-element", V_ = "data-fa-pseudo-element-pending", ec = "data-prefix", tc = "data-icon", kd = "fontawesome-i2svg", L_ = "async", F_ = ["HTML", "HEAD", "STYLE", "SCRIPT"], zv = function() {
  try {
    return !0;
  } catch {
    return !1;
  }
}(), Ve = "classic", Ze = "sharp", nc = [Ve, Ze];
function mi(e) {
  return new Proxy(e, {
    get: function(n, a) {
      return a in n ? n[a] : n[Ve];
    }
  });
}
var ei = mi((Pi = {}, at(Pi, Ve, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), at(Pi, Ze, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid"
}), Pi)), ti = mi((Bi = {}, at(Bi, Ve, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), at(Bi, Ze, {
  solid: "fass"
}), Bi)), ni = mi((Vi = {}, at(Vi, Ve, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), at(Vi, Ze, {
  fass: "fa-solid"
}), Vi)), H_ = mi((Li = {}, at(Li, Ve, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), at(Li, Ze, {
  "fa-solid": "fass"
}), Li)), z_ = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/, Uv = "fa-layers-text", U_ = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, j_ = mi((Fi = {}, at(Fi, Ve, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), at(Fi, Ze, {
  900: "fass"
}), Fi)), jv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], W_ = jv.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), q_ = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ia = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ai = /* @__PURE__ */ new Set();
Object.keys(ti[Ve]).map(ai.add.bind(ai));
Object.keys(ti[Ze]).map(ai.add.bind(ai));
var G_ = [].concat(nc, hi(ai), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ia.GROUP, ia.SWAP_OPACITY, ia.PRIMARY, ia.SECONDARY]).concat(jv.map(function(e) {
  return "".concat(e, "x");
})).concat(W_.map(function(e) {
  return "w-".concat(e);
})), Hr = Ln.FontAwesomeConfig || {};
function Y_(e) {
  var t = Le.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function K_(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Le && typeof Le.querySelector == "function") {
  var X_ = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  X_.forEach(function(e) {
    var t = Qu(e, 2), n = t[0], a = t[1], r = K_(Y_(n));
    r != null && (Hr[a] = r);
  });
}
var Wv = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Fv,
  replacementClass: Hv,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Hr.familyPrefix && (Hr.cssPrefix = Hr.familyPrefix);
var ir = ee(ee({}, Wv), Hr);
ir.autoReplaceSvg || (ir.observeMutations = !1);
var ae = {};
Object.keys(Wv).forEach(function(e) {
  Object.defineProperty(ae, e, {
    enumerable: !0,
    set: function(n) {
      ir[e] = n, zr.forEach(function(a) {
        return a(ae);
      });
    },
    get: function() {
      return ir[e];
    }
  });
});
Object.defineProperty(ae, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    ir.cssPrefix = t, zr.forEach(function(n) {
      return n(ae);
    });
  },
  get: function() {
    return ir.cssPrefix;
  }
});
Ln.FontAwesomeConfig = ae;
var zr = [];
function Z_(e) {
  return zr.push(e), function() {
    zr.splice(zr.indexOf(e), 1);
  };
}
var Dn = tu, Kt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Q_(e) {
  if (!(!e || !Cn)) {
    var t = Le.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Le.head.childNodes, a = null, r = n.length - 1; r > -1; r--) {
      var i = n[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
    }
    return Le.head.insertBefore(t, a), e;
  }
}
var J_ = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ri() {
  for (var e = 12, t = ""; e-- > 0; )
    t += J_[Math.random() * 62 | 0];
  return t;
}
function wr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ac(e) {
  return e.classList ? wr(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function qv(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function eE(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(qv(e[n]), '" ');
  }, "").trim();
}
function ds(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function rc(e) {
  return e.size !== Kt.size || e.x !== Kt.x || e.y !== Kt.y || e.rotate !== Kt.rotate || e.flipX || e.flipY;
}
function tE(e) {
  var t = e.transform, n = e.containerWidth, a = e.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function nE(e) {
  var t = e.transform, n = e.width, a = n === void 0 ? tu : n, r = e.height, i = r === void 0 ? tu : r, o = e.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && Lv ? l += "translate(".concat(t.x / Dn - a / 2, "em, ").concat(t.y / Dn - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / Dn, "em), calc(-50% + ").concat(t.y / Dn, "em)) ") : l += "translate(".concat(t.x / Dn, "em, ").concat(t.y / Dn, "em) "), l += "scale(".concat(t.size / Dn * (t.flipX ? -1 : 1), ", ").concat(t.size / Dn * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var aE = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Gv() {
  var e = Fv, t = Hv, n = ae.cssPrefix, a = ae.replacementClass, r = aE;
  if (n !== e || a !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
var xd = !1;
function al() {
  ae.autoAddCss && !xd && (Q_(Gv()), xd = !0);
}
var rE = {
  mixout: function() {
    return {
      dom: {
        css: Gv,
        insertCss: al
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        al();
      },
      beforeI2svg: function() {
        al();
      }
    };
  }
}, mn = Ln || {};
mn[hn] || (mn[hn] = {});
mn[hn].styles || (mn[hn].styles = {});
mn[hn].hooks || (mn[hn].hooks = {});
mn[hn].shims || (mn[hn].shims = []);
var Vt = mn[hn], Yv = [], iE = function e() {
  Le.removeEventListener("DOMContentLoaded", e), $o = 1, Yv.map(function(t) {
    return t();
  });
}, $o = !1;
Cn && ($o = (Le.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Le.readyState), $o || Le.addEventListener("DOMContentLoaded", iE));
function oE(e) {
  !Cn || ($o ? setTimeout(e, 0) : Yv.push(e));
}
function gi(e) {
  var t = e.tag, n = e.attributes, a = n === void 0 ? {} : n, r = e.children, i = r === void 0 ? [] : r;
  return typeof e == "string" ? qv(e) : "<".concat(t, " ").concat(eE(a), ">").concat(i.map(gi).join(""), "</").concat(t, ">");
}
function Dd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var sE = function(t, n) {
  return function(a, r, i, o) {
    return t.call(n, a, r, i, o);
  };
}, rl = function(t, n, a, r) {
  var i = Object.keys(t), o = i.length, s = r !== void 0 ? sE(n, r) : n, l, c, u;
  for (a === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = a); l < o; l++)
    c = i[l], u = s(u, t[c], c, t);
  return u;
};
function lE(e) {
  for (var t = [], n = 0, a = e.length; n < a; ) {
    var r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function au(e) {
  var t = lE(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function uE(e, t) {
  var n = e.length, a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function Ad(e) {
  return Object.keys(e).reduce(function(t, n) {
    var a = e[n], r = !!a.icon;
    return r ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function ru(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.skipHooks, r = a === void 0 ? !1 : a, i = Ad(t);
  typeof Vt.hooks.addPack == "function" && !r ? Vt.hooks.addPack(e, Ad(t)) : Vt.styles[e] = ee(ee({}, Vt.styles[e] || {}), i), e === "fas" && ru("fa", t);
}
var Hi, zi, Ui, ja = Vt.styles, cE = Vt.shims, dE = (Hi = {}, at(Hi, Ve, Object.values(ni[Ve])), at(Hi, Ze, Object.values(ni[Ze])), Hi), ic = null, Kv = {}, Xv = {}, Zv = {}, Qv = {}, Jv = {}, fE = (zi = {}, at(zi, Ve, Object.keys(ei[Ve])), at(zi, Ze, Object.keys(ei[Ze])), zi);
function pE(e) {
  return ~G_.indexOf(e);
}
function vE(e, t) {
  var n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !pE(r) ? r : null;
}
var eh = function() {
  var t = function(i) {
    return rl(ja, function(o, s, l) {
      return o[l] = rl(s, i, {}), o;
    }, {});
  };
  Kv = t(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Xv = t(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), Jv = t(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var n = "far" in ja || ae.autoFetchSvg, a = rl(cE, function(r, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Zv = a.names, Qv = a.unicodes, ic = fs(ae.styleDefault, {
    family: ae.familyDefault
  });
};
Z_(function(e) {
  ic = fs(e.styleDefault, {
    family: ae.familyDefault
  });
});
eh();
function oc(e, t) {
  return (Kv[e] || {})[t];
}
function hE(e, t) {
  return (Xv[e] || {})[t];
}
function oa(e, t) {
  return (Jv[e] || {})[t];
}
function th(e) {
  return Zv[e] || {
    prefix: null,
    iconName: null
  };
}
function mE(e) {
  var t = Qv[e], n = oc("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Fn() {
  return ic;
}
var sc = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function fs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, a = n === void 0 ? Ve : n, r = ei[a][e], i = ti[a][e] || ti[a][r], o = e in Vt.styles ? e : null;
  return i || o || null;
}
var Rd = (Ui = {}, at(Ui, Ve, Object.keys(ni[Ve])), at(Ui, Ze, Object.keys(ni[Ze])), Ui);
function ps(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.skipLookups, r = a === void 0 ? !1 : a, i = (t = {}, at(t, Ve, "".concat(ae.cssPrefix, "-").concat(Ve)), at(t, Ze, "".concat(ae.cssPrefix, "-").concat(Ze)), t), o = null, s = Ve;
  (e.includes(i[Ve]) || e.some(function(c) {
    return Rd[Ve].includes(c);
  })) && (s = Ve), (e.includes(i[Ze]) || e.some(function(c) {
    return Rd[Ze].includes(c);
  })) && (s = Ze);
  var l = e.reduce(function(c, u) {
    var d = vE(ae.cssPrefix, u);
    if (ja[u] ? (u = dE[s].includes(u) ? H_[s][u] : u, o = u, c.prefix = u) : fE[s].indexOf(u) > -1 ? (o = u, c.prefix = fs(u, {
      family: s
    })) : d ? c.iconName = d : u !== ae.replacementClass && u !== i[Ve] && u !== i[Ze] && c.rest.push(u), !r && c.prefix && c.iconName) {
      var f = o === "fa" ? th(c.iconName) : {}, p = oa(c.prefix, c.iconName);
      f.prefix && (o = null), c.iconName = f.iconName || p || c.iconName, c.prefix = f.prefix || c.prefix, c.prefix === "far" && !ja.far && ja.fas && !ae.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, sc());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === Ze && (ja.fass || ae.autoFetchSvg) && (l.prefix = "fass", l.iconName = oa(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = Fn() || "fas"), l;
}
var gE = /* @__PURE__ */ function() {
  function e() {
    A_(this, e), this.definitions = {};
  }
  return R_(e, [{
    key: "add",
    value: function() {
      for (var n = this, a = arguments.length, r = new Array(a), i = 0; i < a; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = ee(ee({}, n.definitions[s] || {}), o[s]), ru(s, o[s]);
        var l = ni[Ve][s];
        l && ru(l, o[s]), eh();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, a) {
      var r = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, l = o.iconName, c = o.icon, u = c[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (n[s][d] = c);
        }), n[s][l] = c;
      }), n;
    }
  }]), e;
}(), Id = [], Wa = {}, Xa = {}, yE = Object.keys(Xa);
function bE(e, t) {
  var n = t.mixoutsTo;
  return Id = e, Wa = {}, Object.keys(Xa).forEach(function(a) {
    yE.indexOf(a) === -1 && delete Xa[a];
  }), Id.forEach(function(a) {
    var r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (n[o] = r[o]), Oo(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = r[o][s];
      });
    }), a.hooks) {
      var i = a.hooks();
      Object.keys(i).forEach(function(o) {
        Wa[o] || (Wa[o] = []), Wa[o].push(i[o]);
      });
    }
    a.provides && a.provides(Xa);
  }), n;
}
function iu(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  var i = Wa[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(a));
  }), t;
}
function ha(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  var r = Wa[e] || [];
  r.forEach(function(i) {
    i.apply(null, n);
  });
}
function gn() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Xa[e] ? Xa[e].apply(null, t) : void 0;
}
function ou(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Fn();
  if (!!t)
    return t = oa(n, t) || t, Dd(nh.definitions, n, t) || Dd(Vt.styles, n, t);
}
var nh = new gE(), _E = function() {
  ae.autoReplaceSvg = !1, ae.observeMutations = !1, ha("noAuto");
}, EE = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Cn ? (ha("beforeI2svg", t), gn("pseudoElements2svg", t), gn("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    ae.autoReplaceSvg === !1 && (ae.autoReplaceSvg = !0), ae.observeMutations = !0, oE(function() {
      SE({
        autoReplaceSvgRoot: n
      }), ha("watch", t);
    });
  }
}, wE = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Oo(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: oa(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = fs(t[0]);
      return {
        prefix: a,
        iconName: oa(a, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(ae.cssPrefix, "-")) > -1 || t.match(z_))) {
      var r = ps(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Fn(),
        iconName: oa(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i = Fn();
      return {
        prefix: i,
        iconName: oa(i, t) || t
      };
    }
  }
}, Dt = {
  noAuto: _E,
  config: ae,
  dom: EE,
  parse: wE,
  library: nh,
  findIconDefinition: ou,
  toHtml: gi
}, SE = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, a = n === void 0 ? Le : n;
  (Object.keys(Vt.styles).length > 0 || ae.autoFetchSvg) && Cn && ae.autoReplaceSvg && Dt.dom.i2svg({
    node: a
  });
};
function vs(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(a) {
        return gi(a);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!!Cn) {
        var a = Le.createElement("div");
        return a.innerHTML = e.html, a.children;
      }
    }
  }), e;
}
function CE(e) {
  var t = e.children, n = e.main, a = e.mask, r = e.attributes, i = e.styles, o = e.transform;
  if (rc(o) && n.found && !a.found) {
    var s = n.width, l = n.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = ds(ee(ee({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function TE(e) {
  var t = e.prefix, n = e.iconName, a = e.children, r = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(ae.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: ee(ee({}, r), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function lc(e) {
  var t = e.icons, n = t.main, a = t.mask, r = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, l = e.title, c = e.maskId, u = e.titleId, d = e.extra, f = e.watchable, p = f === void 0 ? !1 : f, h = a.found ? a : n, y = h.width, w = h.height, m = r === "fak", _ = [ae.replacementClass, i ? "".concat(ae.cssPrefix, "-").concat(i) : ""].filter(function(O) {
    return d.classes.indexOf(O) === -1;
  }).filter(function(O) {
    return O !== "" || !!O;
  }).concat(d.classes).join(" "), k = {
    children: [],
    attributes: ee(ee({}, d.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(w)
    })
  }, x = m && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(y / w * 16 * 0.0625, "em")
  } : {};
  p && (k.attributes[va] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || ri())
    },
    children: [l]
  }), delete k.attributes.title);
  var D = ee(ee({}, k), {}, {
    prefix: r,
    iconName: i,
    main: n,
    mask: a,
    maskId: c,
    transform: o,
    symbol: s,
    styles: ee(ee({}, x), d.styles)
  }), A = a.found && n.found ? gn("generateAbstractMask", D) || {
    children: [],
    attributes: {}
  } : gn("generateAbstractIcon", D) || {
    children: [],
    attributes: {}
  }, L = A.children, $ = A.attributes;
  return D.children = L, D.attributes = $, s ? TE(D) : CE(D);
}
function Od(e) {
  var t = e.content, n = e.width, a = e.height, r = e.transform, i = e.title, o = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, c = ee(ee(ee({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[va] = "");
  var u = ee({}, o.styles);
  rc(r) && (u.transform = nE({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), u["-webkit-transform"] = u.transform);
  var d = ds(u);
  d.length > 0 && (c.style = d);
  var f = [];
  return f.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), f;
}
function kE(e) {
  var t = e.content, n = e.title, a = e.extra, r = ee(ee(ee({}, a.attributes), n ? {
    title: n
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = ds(a.styles);
  i.length > 0 && (r.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var il = Vt.styles;
function su(e) {
  var t = e[0], n = e[1], a = e.slice(4), r = Qu(a, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(ae.cssPrefix, "-").concat(ia.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ae.cssPrefix, "-").concat(ia.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ae.cssPrefix, "-").concat(ia.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var xE = {
  found: !1,
  width: 512,
  height: 512
};
function DE(e, t) {
  !zv && !ae.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function lu(e, t) {
  var n = t;
  return t === "fa" && ae.styleDefault !== null && (t = Fn()), new Promise(function(a, r) {
    if (gn("missingIconAbstract"), n === "fa") {
      var i = th(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && il[t] && il[t][e]) {
      var o = il[t][e];
      return a(su(o));
    }
    DE(e, t), a(ee(ee({}, xE), {}, {
      icon: ae.showMissingIcons && e ? gn("missingIconAbstract") || {} : {}
    }));
  });
}
var $d = function() {
}, uu = ae.measurePerformance && Mi && Mi.mark && Mi.measure ? Mi : {
  mark: $d,
  measure: $d
}, Nr = 'FA "6.2.0"', AE = function(t) {
  return uu.mark("".concat(Nr, " ").concat(t, " begins")), function() {
    return ah(t);
  };
}, ah = function(t) {
  uu.mark("".concat(Nr, " ").concat(t, " ends")), uu.measure("".concat(Nr, " ").concat(t), "".concat(Nr, " ").concat(t, " begins"), "".concat(Nr, " ").concat(t, " ends"));
}, uc = {
  begin: AE,
  end: ah
}, uo = function() {
};
function Nd(e) {
  var t = e.getAttribute ? e.getAttribute(va) : null;
  return typeof t == "string";
}
function RE(e) {
  var t = e.getAttribute ? e.getAttribute(ec) : null, n = e.getAttribute ? e.getAttribute(tc) : null;
  return t && n;
}
function IE(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ae.replacementClass);
}
function OE() {
  if (ae.autoReplaceSvg === !0)
    return co.replace;
  var e = co[ae.autoReplaceSvg];
  return e || co.replace;
}
function $E(e) {
  return Le.createElementNS("http://www.w3.org/2000/svg", e);
}
function NE(e) {
  return Le.createElement(e);
}
function rh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, a = n === void 0 ? e.tag === "svg" ? $E : NE : n;
  if (typeof e == "string")
    return Le.createTextNode(e);
  var r = a(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    r.appendChild(rh(o, {
      ceFn: a
    }));
  }), r;
}
function ME(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var co = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(r) {
        n.parentNode.insertBefore(rh(r), n);
      }), n.getAttribute(va) === null && ae.keepOriginalSource) {
        var a = Le.createComment(ME(n));
        n.parentNode.replaceChild(a, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], a = t[1];
    if (~ac(n).indexOf(ae.replacementClass))
      return co.replace(t);
    var r = new RegExp("".concat(ae.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var i = a[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === ae.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = a.map(function(s) {
      return gi(s);
    }).join(`
`);
    n.setAttribute(va, ""), n.innerHTML = o;
  }
};
function Md(e) {
  e();
}
function ih(e, t) {
  var n = typeof t == "function" ? t : uo;
  if (e.length === 0)
    n();
  else {
    var a = Md;
    ae.mutateApproach === L_ && (a = Ln.requestAnimationFrame || Md), a(function() {
      var r = OE(), i = uc.begin("mutate");
      e.map(r), i(), n();
    });
  }
}
var cc = !1;
function oh() {
  cc = !0;
}
function cu() {
  cc = !1;
}
var No = null;
function Pd(e) {
  if (!!Td && !!ae.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? uo : t, a = e.nodeCallback, r = a === void 0 ? uo : a, i = e.pseudoElementsCallback, o = i === void 0 ? uo : i, s = e.observeMutationsRoot, l = s === void 0 ? Le : s;
    No = new Td(function(c) {
      if (!cc) {
        var u = Fn();
        wr(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Nd(d.addedNodes[0]) && (ae.searchPseudoElements && o(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && ae.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && Nd(d.target) && ~q_.indexOf(d.attributeName))
            if (d.attributeName === "class" && RE(d.target)) {
              var f = ps(ac(d.target)), p = f.prefix, h = f.iconName;
              d.target.setAttribute(ec, p || u), h && d.target.setAttribute(tc, h);
            } else
              IE(d.target) && r(d.target);
        });
      }
    }), Cn && No.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function PE() {
  !No || No.disconnect();
}
function BE(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(a, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function VE(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "", r = ps(ac(e));
  return r.prefix || (r.prefix = Fn()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = hE(r.prefix, e.innerText) || oc(r.prefix, au(e.innerText))), !r.iconName && ae.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function LE(e) {
  var t = wr(e.attributes).reduce(function(r, i) {
    return r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r;
  }, {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return ae.autoA11y && (n ? t["aria-labelledby"] = "".concat(ae.replacementClass, "-title-").concat(a || ri()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function FE() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Kt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Bd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = VE(e), a = n.iconName, r = n.prefix, i = n.rest, o = LE(e), s = iu("parseNodeAttributes", {}, e), l = t.styleParser ? BE(e) : [];
  return ee({
    iconName: a,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Kt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var HE = Vt.styles;
function sh(e) {
  var t = ae.autoReplaceSvg === "nest" ? Bd(e, {
    styleParser: !1
  }) : Bd(e);
  return ~t.extra.classes.indexOf(Uv) ? gn("generateLayersText", e, t) : gn("generateSvgReplacementMutation", e, t);
}
var Hn = /* @__PURE__ */ new Set();
nc.map(function(e) {
  Hn.add("fa-".concat(e));
});
Object.keys(ei[Ve]).map(Hn.add.bind(Hn));
Object.keys(ei[Ze]).map(Hn.add.bind(Hn));
Hn = hi(Hn);
function Vd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Cn)
    return Promise.resolve();
  var n = Le.documentElement.classList, a = function(d) {
    return n.add("".concat(kd, "-").concat(d));
  }, r = function(d) {
    return n.remove("".concat(kd, "-").concat(d));
  }, i = ae.autoFetchSvg ? Hn : nc.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(HE));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Uv, ":not([").concat(va, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(va, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = wr(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  var l = uc.begin("onTree"), c = s.reduce(function(u, d) {
    try {
      var f = sh(d);
      f && u.push(f);
    } catch (p) {
      zv || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(c).then(function(f) {
      ih(f, function() {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(f) {
      l(), d(f);
    });
  });
}
function zE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sh(e).then(function(n) {
    n && ih([n], t);
  });
}
function UE(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : ou(t || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : ou(r || {})), e(a, ee(ee({}, n), {}, {
      mask: r
    }));
  };
}
var jE = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, r = a === void 0 ? Kt : a, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, l = s === void 0 ? null : s, c = n.maskId, u = c === void 0 ? null : c, d = n.title, f = d === void 0 ? null : d, p = n.titleId, h = p === void 0 ? null : p, y = n.classes, w = y === void 0 ? [] : y, m = n.attributes, _ = m === void 0 ? {} : m, k = n.styles, x = k === void 0 ? {} : k;
  if (!!t) {
    var D = t.prefix, A = t.iconName, L = t.icon;
    return vs(ee({
      type: "icon"
    }, t), function() {
      return ha("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), ae.autoA11y && (f ? _["aria-labelledby"] = "".concat(ae.replacementClass, "-title-").concat(h || ri()) : (_["aria-hidden"] = "true", _.focusable = "false")), lc({
        icons: {
          main: su(L),
          mask: l ? su(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: D,
        iconName: A,
        transform: ee(ee({}, Kt), r),
        symbol: o,
        title: f,
        maskId: u,
        titleId: h,
        extra: {
          attributes: _,
          styles: x,
          classes: w
        }
      });
    });
  }
}, WE = {
  mixout: function() {
    return {
      icon: UE(jE)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Vd, n.nodeCallback = zE, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var a = n.node, r = a === void 0 ? Le : a, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return Vd(r, o);
    }, t.generateSvgReplacementMutation = function(n, a) {
      var r = a.iconName, i = a.title, o = a.titleId, s = a.prefix, l = a.transform, c = a.symbol, u = a.mask, d = a.maskId, f = a.extra;
      return new Promise(function(p, h) {
        Promise.all([lu(r, s), u.iconName ? lu(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(y) {
          var w = Qu(y, 2), m = w[0], _ = w[1];
          p([n, lc({
            icons: {
              main: m,
              mask: _
            },
            prefix: s,
            iconName: r,
            transform: l,
            symbol: c,
            maskId: d,
            title: i,
            titleId: o,
            extra: f,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, t.generateAbstractIcon = function(n) {
      var a = n.children, r = n.attributes, i = n.main, o = n.transform, s = n.styles, l = ds(s);
      l.length > 0 && (r.style = l);
      var c;
      return rc(o) && (c = gn("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), a.push(c || i.icon), {
        children: a,
        attributes: r
      };
    };
  }
}, qE = {
  mixout: function() {
    return {
      layer: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.classes, i = r === void 0 ? [] : r;
        return vs({
          type: "layer"
        }, function() {
          ha("beforeDOMElementCreation", {
            assembler: n,
            params: a
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ae.cssPrefix, "-layers")].concat(hi(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, GE = {
  mixout: function() {
    return {
      counter: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.title, i = r === void 0 ? null : r, o = a.classes, s = o === void 0 ? [] : o, l = a.attributes, c = l === void 0 ? {} : l, u = a.styles, d = u === void 0 ? {} : u;
        return vs({
          type: "counter",
          content: n
        }, function() {
          return ha("beforeDOMElementCreation", {
            content: n,
            params: a
          }), kE({
            content: n.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(ae.cssPrefix, "-layers-counter")].concat(hi(s))
            }
          });
        });
      }
    };
  }
}, YE = {
  mixout: function() {
    return {
      text: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.transform, i = r === void 0 ? Kt : r, o = a.title, s = o === void 0 ? null : o, l = a.classes, c = l === void 0 ? [] : l, u = a.attributes, d = u === void 0 ? {} : u, f = a.styles, p = f === void 0 ? {} : f;
        return vs({
          type: "text",
          content: n
        }, function() {
          return ha("beforeDOMElementCreation", {
            content: n,
            params: a
          }), Od({
            content: n,
            transform: ee(ee({}, Kt), i),
            title: s,
            extra: {
              attributes: d,
              styles: p,
              classes: ["".concat(ae.cssPrefix, "-layers-text")].concat(hi(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, a) {
      var r = a.title, i = a.transform, o = a.extra, s = null, l = null;
      if (Lv) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        s = u.width / c, l = u.height / c;
      }
      return ae.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Od({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, KE = new RegExp('"', "ug"), Ld = [1105920, 1112319];
function XE(e) {
  var t = e.replace(KE, ""), n = uE(t, 0), a = n >= Ld[0] && n <= Ld[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: au(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Fd(e, t) {
  var n = "".concat(V_).concat(t.replace(":", "-"));
  return new Promise(function(a, r) {
    if (e.getAttribute(n) !== null)
      return a();
    var i = wr(e.children), o = i.filter(function(L) {
      return L.getAttribute(nu) === t;
    })[0], s = Ln.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(U_), c = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), a();
    if (l && u !== "none" && u !== "") {
      var d = s.getPropertyValue("content"), f = ~["Sharp"].indexOf(l[2]) ? Ze : Ve, p = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ti[f][l[2].toLowerCase()] : j_[f][c], h = XE(d), y = h.value, w = h.isSecondary, m = l[0].startsWith("FontAwesome"), _ = oc(p, y), k = _;
      if (m) {
        var x = mE(y);
        x.iconName && x.prefix && (_ = x.iconName, p = x.prefix);
      }
      if (_ && !w && (!o || o.getAttribute(ec) !== p || o.getAttribute(tc) !== k)) {
        e.setAttribute(n, k), o && e.removeChild(o);
        var D = FE(), A = D.extra;
        A.attributes[nu] = t, lu(_, p).then(function(L) {
          var $ = lc(ee(ee({}, D), {}, {
            icons: {
              main: L,
              mask: sc()
            },
            prefix: p,
            iconName: k,
            extra: A,
            watchable: !0
          })), O = Le.createElement("svg");
          t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O), O.outerHTML = $.map(function(j) {
            return gi(j);
          }).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function ZE(e) {
  return Promise.all([Fd(e, "::before"), Fd(e, "::after")]);
}
function QE(e) {
  return e.parentNode !== document.head && !~F_.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(nu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Hd(e) {
  if (!!Cn)
    return new Promise(function(t, n) {
      var a = wr(e.querySelectorAll("*")).filter(QE).map(ZE), r = uc.begin("searchPseudoElements");
      oh(), Promise.all(a).then(function() {
        r(), cu(), t();
      }).catch(function() {
        r(), cu(), n();
      });
    });
}
var JE = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Hd, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var a = n.node, r = a === void 0 ? Le : a;
      ae.searchPseudoElements && Hd(r);
    };
  }
}, zd = !1, e0 = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          oh(), zd = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Pd(iu("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        PE();
      },
      watch: function(n) {
        var a = n.observeMutationsRoot;
        zd ? cu() : Pd(iu("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
}, Ud = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(a, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return a.flipX = !0, a;
    if (o && s === "v")
      return a.flipY = !0, a;
    if (s = parseFloat(s), isNaN(s))
      return a;
    switch (o) {
      case "grow":
        a.size = a.size + s;
        break;
      case "shrink":
        a.size = a.size - s;
        break;
      case "left":
        a.x = a.x - s;
        break;
      case "right":
        a.x = a.x + s;
        break;
      case "up":
        a.y = a.y - s;
        break;
      case "down":
        a.y = a.y + s;
        break;
      case "rotate":
        a.rotate = a.rotate + s;
        break;
    }
    return a;
  }, n);
}, t0 = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Ud(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-transform");
        return r && (n.transform = Ud(r)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var a = n.main, r = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, f = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, p = {
        outer: s,
        inner: d,
        path: f
      };
      return {
        tag: "g",
        attributes: ee({}, p.outer),
        children: [{
          tag: "g",
          attributes: ee({}, p.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: ee(ee({}, a.icon.attributes), p.path)
          }]
        }]
      };
    };
  }
}, ol = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function jd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function n0(e) {
  return e.tag === "g" ? e.children : [e];
}
var a0 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-mask"), i = r ? ps(r.split(" ").map(function(o) {
          return o.trim();
        })) : sc();
        return i.prefix || (i.prefix = Fn()), n.mask = i, n.maskId = a.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var a = n.children, r = n.attributes, i = n.main, o = n.mask, s = n.maskId, l = n.transform, c = i.width, u = i.icon, d = o.width, f = o.icon, p = tE({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: ee(ee({}, ol), {}, {
          fill: "white"
        })
      }, y = u.children ? {
        children: u.children.map(jd)
      } : {}, w = {
        tag: "g",
        attributes: ee({}, p.inner),
        children: [jd(ee({
          tag: u.tag,
          attributes: ee(ee({}, u.attributes), p.path)
        }, y))]
      }, m = {
        tag: "g",
        attributes: ee({}, p.outer),
        children: [w]
      }, _ = "mask-".concat(s || ri()), k = "clip-".concat(s || ri()), x = {
        tag: "mask",
        attributes: ee(ee({}, ol), {}, {
          id: _,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, m]
      }, D = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: n0(f)
        }, x]
      };
      return a.push(D, {
        tag: "rect",
        attributes: ee({
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(_, ")")
        }, ol)
      }), {
        children: a,
        attributes: r
      };
    };
  }
}, r0 = {
  provides: function(t) {
    var n = !1;
    Ln.matchMedia && (n = Ln.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var a = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: ee(ee({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = ee(ee({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: ee(ee({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: ee(ee({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ee(ee({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(s), a.push({
        tag: "path",
        attributes: ee(ee({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: ee(ee({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || a.push({
        tag: "path",
        attributes: ee(ee({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ee(ee({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
}, i0 = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = i, n;
      }
    };
  }
}, o0 = [rE, WE, qE, GE, YE, JE, e0, t0, a0, r0, i0];
bE(o0, {
  mixoutsTo: Dt
});
Dt.noAuto;
var lh = Dt.config, Pe = Dt.library;
Dt.dom;
var Mo = Dt.parse;
Dt.findIconDefinition;
Dt.toHtml;
var s0 = Dt.icon;
Dt.layer;
var l0 = Dt.text;
Dt.counter;
function Wd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wd(Object(n), !0).forEach(function(a) {
      mt(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wd(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Po(e) {
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e);
}
function mt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function u0(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function c0(e, t) {
  if (e == null)
    return {};
  var n = u0(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, a) || (n[a] = e[a]));
  }
  return n;
}
function du(e) {
  return d0(e) || f0(e) || p0(e) || v0();
}
function d0(e) {
  if (Array.isArray(e))
    return fu(e);
}
function f0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function p0(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return fu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fu(e, t);
  }
}
function fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function v0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var h0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, uh = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(m, _, k) {
      if (!c(_) || d(_) || f(_) || p(_) || l(_))
        return _;
      var x, D = 0, A = 0;
      if (u(_))
        for (x = [], A = _.length; D < A; D++)
          x.push(n(m, _[D], k));
      else {
        x = {};
        for (var L in _)
          Object.prototype.hasOwnProperty.call(_, L) && (x[m(L, k)] = n(m, _[L], k));
      }
      return x;
    }, a = function(m, _) {
      _ = _ || {};
      var k = _.separator || "_", x = _.split || /(?=[A-Z])/;
      return m.split(x).join(k);
    }, r = function(m) {
      return h(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(_, k) {
        return k ? k.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, i = function(m) {
      var _ = r(m);
      return _.substr(0, 1).toUpperCase() + _.substr(1);
    }, o = function(m, _) {
      return a(m, _).toLowerCase();
    }, s = Object.prototype.toString, l = function(m) {
      return typeof m == "function";
    }, c = function(m) {
      return m === Object(m);
    }, u = function(m) {
      return s.call(m) == "[object Array]";
    }, d = function(m) {
      return s.call(m) == "[object Date]";
    }, f = function(m) {
      return s.call(m) == "[object RegExp]";
    }, p = function(m) {
      return s.call(m) == "[object Boolean]";
    }, h = function(m) {
      return m = m - 0, m === m;
    }, y = function(m, _) {
      var k = _ && "process" in _ ? _.process : _;
      return typeof k != "function" ? m : function(x, D) {
        return k(x, m, D);
      };
    }, w = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(m, _) {
        return n(y(r, _), m);
      },
      decamelizeKeys: function(m, _) {
        return n(y(o, _), m, _);
      },
      pascalizeKeys: function(m, _) {
        return n(y(i, _), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = w : t.humps = w;
  })(h0);
})(uh);
var m0 = uh.exports, g0 = ["class", "style"];
function y0(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = m0.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return t[r] = i, t;
  }, {});
}
function b0(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function dc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return dc(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var u = e.attributes[c];
    switch (c) {
      case "class":
        l.class = b0(u);
        break;
      case "style":
        l.style = y0(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, s = c0(n, g0);
  return me(e.tag, Bt(Bt(Bt({}, t), {}, {
    class: r.class,
    style: Bt(Bt({}, r.style), o)
  }, r.attrs), s), a);
}
var ch = !1;
try {
  ch = !0;
} catch {
}
function _0() {
  if (!ch && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ur(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? mt({}, e, t) : {};
}
function E0(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, mt(t, "fa-".concat(e.size), e.size !== null), mt(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), mt(t, "fa-pull-".concat(e.pull), e.pull !== null), mt(t, "fa-swap-opacity", e.swapOpacity), mt(t, "fa-bounce", e.bounce), mt(t, "fa-shake", e.shake), mt(t, "fa-beat", e.beat), mt(t, "fa-fade", e.fade), mt(t, "fa-beat-fade", e.beatFade), mt(t, "fa-flash", e.flash), mt(t, "fa-spin-pulse", e.spinPulse), mt(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function qd(e) {
  if (e && Po(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Mo.icon)
    return Mo.icon(e);
  if (e === null)
    return null;
  if (Po(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var sa = B({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.attrs, r = E(function() {
      return qd(t.icon);
    }), i = E(function() {
      return Ur("classes", E0(t));
    }), o = E(function() {
      return Ur("transform", typeof t.transform == "string" ? Mo.transform(t.transform) : t.transform);
    }), s = E(function() {
      return Ur("mask", qd(t.mask));
    }), l = E(function() {
      return s0(r.value, Bt(Bt(Bt(Bt({}, i.value), o.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    $e(l, function(u) {
      if (!u)
        return _0("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var c = E(function() {
      return l.value ? dc(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
B({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = lh.familyPrefix, i = E(function() {
      return ["".concat(r, "-layers")].concat(du(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return me("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
B({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var a = n.attrs, r = lh.familyPrefix, i = E(function() {
      return Ur("classes", [].concat(du(t.counter ? ["".concat(r, "-layers-counter")] : []), du(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), o = E(function() {
      return Ur("transform", typeof t.transform == "string" ? Mo.transform(t.transform) : t.transform);
    }), s = E(function() {
      var c = l0(t.value.toString(), Bt(Bt({}, o.value), i.value)), u = c.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = E(function() {
      return dc(s.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
var hs = {
  prefix: "fas",
  iconName: "pen-to-square",
  icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]
}, ms = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, w0 = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"]
}, gs = w0, ys = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, bs = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, S0 = {
  prefix: "fas",
  iconName: "table-list",
  icon: [512, 512, ["th-list"], "f00b", "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"]
}, _s = S0, Es = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
};
const C0 = /* @__PURE__ */ S("h6", null, "Title:", -1), T0 = /* @__PURE__ */ S("h6", null, "Description:", -1), k0 = /* @__PURE__ */ S("br", null, null, -1), x0 = { key: 0 }, D0 = /* @__PURE__ */ S("h6", null, "Options:", -1), A0 = { class: "display-options" }, R0 = { class: "col-10" }, I0 = { class: "col-2" }, O0 = { class: "alert alert-success" }, $0 = /* @__PURE__ */ S("h6", null, "Add Option", -1), N0 = { class: "row" }, M0 = /* @__PURE__ */ S("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ S("h6", null, "Required Field:")
], -1), P0 = { class: "col-sm-10" }, B0 = /* @__PURE__ */ S("br", null, null, -1), V0 = { class: "toggle-button-cover" }, L0 = { class: "button-cover" }, F0 = {
  class: "button r",
  id: "button-1"
}, H0 = /* @__PURE__ */ S("div", { class: "knobs" }, null, -1), z0 = /* @__PURE__ */ S("div", { class: "layer" }, null, -1), U0 = /* @__PURE__ */ S("br", null, null, -1), j0 = {
  key: 1,
  class: "row"
}, W0 = /* @__PURE__ */ S("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ S("h6", null, "Multiple Value Field:")
], -1), q0 = { class: "col-sm-10" }, G0 = /* @__PURE__ */ S("br", null, null, -1), Y0 = { class: "toggle-button-cover" }, K0 = { class: "button-cover" }, X0 = {
  class: "button r",
  id: "button-1"
}, Z0 = /* @__PURE__ */ S("div", { class: "knobs" }, null, -1), Q0 = /* @__PURE__ */ S("div", { class: "layer" }, null, -1), J0 = /* @__PURE__ */ B({
  __name: "Field",
  props: {
    model: null
  },
  setup(e) {
    const t = e;
    Pe.add(ms), Pe.add(Es), Pe.add(hs), Pe.add(bs), Pe.add(gs), Pe.add(_s), Pe.add(ys);
    const n = Yu(t.model), a = Er(), r = te(nb(a.lang, tb(ar(a.lang)))), i = () => {
      t.model.options.push(rb(r.value)), r.value.isExtendedInput = !1, r.value.isExtendedInputRequired = !1, r.value.optionText.values.forEach((s) => s.value = "");
    }, o = (s) => {
      var c, u;
      const l = (c = t.model.options) == null ? void 0 : c.findIndex((d) => d.id == s);
      (u = t.model.options) == null || u.splice(l, 1);
    };
    return t.model.type, Te.AttachmentField, (s, l) => {
      const c = ge("b-col"), u = ge("b-row");
      return g(), T(Z, null, [
        S("h5", null, G(e.model.type), 1),
        P(u, null, {
          default: N(() => [
            P(c, { class: "col-sm-2" }, {
              default: N(() => [
                C0
              ]),
              _: 1
            }),
            P(c, { class: "col-sm-10" }, {
              default: N(() => [
                P(Jl, {
                  model: e.model.title,
                  "text-type": v(Te).ShortAnswer
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(u, null, {
          default: N(() => [
            P(c, { class: "col-sm-2" }, {
              default: N(() => [
                T0
              ]),
              _: 1
            }),
            P(c, { class: "col-sm-10" }, {
              default: N(() => [
                P(Jl, {
                  model: e.model.description,
                  "text-type": v(Te).Paragraph
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        k0,
        v(n) ? (g(), T("div", x0, [
          D0,
          S("div", A0, [
            P(v(Io), {
              class: "dragArea list-group w-full",
              list: e.model.options
            }, {
              default: N(() => [
                (g(!0), T(Z, null, he(e.model.options, (d) => (g(), T("div", {
                  key: d.id,
                  class: "option-entry row"
                }, [
                  S("div", R0, [
                    P(bd, {
                      model: d,
                      "option-field-type": e.model.type
                    }, null, 8, ["model", "option-field-type"])
                  ]),
                  S("div", I0, [
                    P(v(sa), {
                      icon: "fa-solid fa-circle-xmark",
                      onClick: (f) => o(d.id),
                      class: "fa-icon delete"
                    }, null, 8, ["onClick"])
                  ])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          S("div", O0, [
            $0,
            P(bd, {
              model: r.value,
              "option-field-type": e.model.type,
              "disable-inline-editing": !0
            }, null, 8, ["model", "option-field-type"]),
            P(v(sa), {
              icon: "fa-solid fa-circle-plus",
              onClick: l[0] || (l[0] = (d) => i()),
              class: "fa-icon plus add-option"
            })
          ])
        ])) : H("", !0),
        S("div", N0, [
          M0,
          S("div", P0, [
            B0,
            S("div", V0, [
              S("div", L0, [
                S("div", F0, [
                  Ue(S("input", {
                    "onUpdate:modelValue": l[1] || (l[1] = (d) => e.model.isRequired = d),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [pa, e.model.isRequired]
                  ]),
                  H0,
                  z0
                ])
              ])
            ])
          ])
        ]),
        U0,
        v(yv)(e.model) ? (g(), T("div", j0, [
          W0,
          S("div", q0, [
            G0,
            S("div", Y0, [
              S("div", K0, [
                S("div", X0, [
                  Ue(S("input", {
                    "onUpdate:modelValue": l[2] || (l[2] = (d) => e.model.isMultiValued = d),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [pa, e.model.isMultiValued]
                  ]),
                  Z0,
                  Q0
                ])
              ])
            ])
          ])
        ])) : H("", !0)
      ], 64);
    };
  }
});
const e1 = { class: "tool-modal" }, t1 = { class: "tool-modal-inner" }, n1 = { class: "tool-modal-content" }, a1 = /* @__PURE__ */ B({
  __name: "ToolBar",
  props: {
    open: { type: Boolean },
    index: null
  },
  setup(e) {
    const t = e, n = Er();
    is(n);
    const a = (r) => {
      const i = {
        id: oe.create().toString(),
        title: ar(n.lang),
        description: ar(n.lang),
        type: r
      };
      yv(i) && (i.isMultiValued = !1, i.isRequired = !1, i.allowCustomOptionValues = !1), Yu(i) && (i.options = []), n.form.fields.splice(t.index, 0, i);
    };
    return (r, i) => Ue((g(), T("div", e1, [
      S("div", t1, [
        S("div", n1, [
          S("button", {
            onClick: i[0] || (i[0] = (o) => {
              a(v(Te).ShortAnswer), r.$emit("close");
            })
          }, "Short Answer"),
          S("button", {
            onClick: i[1] || (i[1] = (o) => {
              a(v(Te).Paragraph), r.$emit("close");
            })
          }, "Paragraph"),
          S("button", {
            onClick: i[2] || (i[2] = (o) => {
              a(v(Te).RichText), r.$emit("close");
            })
          }, "Rich Text"),
          S("button", {
            onClick: i[3] || (i[3] = (o) => {
              a(v(Te).Date), r.$emit("close");
            })
          }, "Date"),
          S("button", {
            onClick: i[4] || (i[4] = (o) => {
              a(v(Te).DateTime), r.$emit("close");
            })
          }, "Date/Time"),
          S("button", {
            onClick: i[5] || (i[5] = (o) => {
              a(v(Te).Decimal), r.$emit("close");
            })
          }, "Decimal"),
          S("button", {
            onClick: i[6] || (i[6] = (o) => {
              a(v(Te).Integer), r.$emit("close");
            })
          }, "Integer"),
          S("button", {
            onClick: i[7] || (i[7] = (o) => {
              a(v(Te).Email), r.$emit("close");
            })
          }, "Email"),
          S("button", {
            onClick: i[8] || (i[8] = (o) => {
              a(v(Te).Checkboxes), r.$emit("close");
            })
          }, "Checkboxes"),
          S("button", {
            onClick: i[9] || (i[9] = (o) => {
              a(v(Te).DataList), r.$emit("close");
            })
          }, "Data List"),
          S("button", {
            onClick: i[10] || (i[10] = (o) => {
              a(v(Te).RadioButtons), r.$emit("close");
            })
          }, "Radio Buttons"),
          S("button", {
            onClick: i[11] || (i[11] = (o) => {
              a(v(Te).DropDown), r.$emit("close");
            })
          }, "Drop Down"),
          S("button", {
            onClick: i[12] || (i[12] = (o) => {
              a(v(Te).InfoSection), r.$emit("close");
            })
          }, "Info Section"),
          S("button", {
            onClick: i[13] || (i[13] = (o) => {
              a(v(Te).AttachmentField), r.$emit("close");
            })
          }, "Attachment Field")
        ])
      ])
    ], 512)), [
      [Wl, e.open]
    ]);
  }
});
const r1 = /* @__PURE__ */ Ut(a1, [["__scopeId", "data-v-54a2a769"]]), yi = (e) => (Wn("data-v-803b663d"), e = e(), qn(), e), i1 = /* @__PURE__ */ yi(() => /* @__PURE__ */ S("div", null, [
  /* @__PURE__ */ S("h4", null, "Form properties")
], -1)), o1 = { class: "form-field-border" }, s1 = /* @__PURE__ */ yi(() => /* @__PURE__ */ S("h6", null, "Name:", -1)), l1 = /* @__PURE__ */ yi(() => /* @__PURE__ */ S("br", null, null, -1)), u1 = /* @__PURE__ */ yi(() => /* @__PURE__ */ S("h6", null, "Description:", -1)), c1 = /* @__PURE__ */ yi(() => /* @__PURE__ */ S("h3", null, "Fields", -1)), d1 = { class: "insertFieldBtn fontSize2em" }, f1 = { class: "insertFieldBtn fontSize2em" }, p1 = { class: "insertFieldBtn fontSize2em" }, v1 = /* @__PURE__ */ B({
  __name: "Form",
  props: {
    model: null
  },
  setup(e) {
    const t = e;
    Pe.add(ms), Pe.add(Es), Pe.add(hs), Pe.add(bs), Pe.add(gs), Pe.add(_s), Pe.add(ys);
    const n = (i) => {
      var s, l;
      const o = (s = t.model.fields) == null ? void 0 : s.findIndex((c) => c.id == i);
      (l = t.model.fields) == null || l.splice(o, 1);
    }, a = te(!1), r = te(0);
    return (i, o) => {
      var d;
      const s = ge("b-col"), l = ge("b-form-input"), c = ge("b-row"), u = ge("b-form-textarea");
      return g(), T(Z, null, [
        i1,
        S("div", o1, [
          P(c, null, {
            default: N(() => [
              P(s, { class: "col-sm-2" }, {
                default: N(() => [
                  s1
                ]),
                _: 1
              }),
              P(s, { class: "col-sm-10" }, {
                default: N(() => [
                  P(l, {
                    modelValue: e.model.name,
                    "onUpdate:modelValue": o[0] || (o[0] = (f) => e.model.name = f)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l1,
          P(c, null, {
            default: N(() => [
              P(s, { class: "col-sm-2" }, {
                default: N(() => [
                  u1
                ]),
                _: 1
              }),
              P(s, { class: "col-sm-10" }, {
                default: N(() => [
                  P(u, {
                    modelValue: e.model.description,
                    "onUpdate:modelValue": o[1] || (o[1] = (f) => e.model.description = f),
                    rows: "3",
                    "max-rows": "6"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        c1,
        S("div", d1, [
          e.model.fields.length == 0 ? (g(), z(v(sa), {
            key: 0,
            icon: "fa-solid fa-circle-plus",
            onClick: o[2] || (o[2] = (f) => a.value = !0),
            class: "fa-icon plus"
          })) : H("", !0)
        ]),
        P(v(Io), {
          class: "dragArea list-group w-full",
          list: (d = e.model) == null ? void 0 : d.fields
        }, {
          default: N(() => {
            var f;
            return [
              (g(!0), T(Z, null, he((f = e.model) == null ? void 0 : f.fields, (p, h) => (g(), T("div", {
                key: p.id,
                class: "form-field-border form-field"
              }, [
                S("div", f1, [
                  h == 0 ? (g(), z(v(sa), {
                    key: 0,
                    icon: "fa-solid fa-circle-plus",
                    onClick: (y) => {
                      a.value = !0, r.value = h;
                    },
                    class: "fa-icon plus"
                  }, null, 8, ["onClick"])) : H("", !0)
                ]),
                P(v(sa), {
                  icon: "fa-solid fa-circle-xmark",
                  onClick: (y) => n(p.id),
                  class: "fa-icon field-delete"
                }, null, 8, ["onClick"]),
                P(J0, { model: p }, null, 8, ["model"]),
                S("div", p1, [
                  P(v(sa), {
                    icon: "fa-solid fa-circle-plus",
                    onClick: (y) => {
                      a.value = !0, r.value = h + 1;
                    },
                    class: "fa-icon plus"
                  }, null, 8, ["onClick"])
                ])
              ]))), 128))
            ];
          }),
          _: 1
        }, 8, ["list"]),
        P(r1, {
          open: a.value,
          onClose: o[3] || (o[3] = (f) => a.value = !a.value),
          index: r.value
        }, null, 8, ["open", "index"])
      ], 64);
    };
  }
});
const h1 = /* @__PURE__ */ Ut(v1, [["__scopeId", "data-v-803b663d"]]);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Ba = typeof window < "u";
function m1(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Ne = Object.assign;
function sl(e, t) {
  const n = {};
  for (const a in t) {
    const r = t[a];
    n[a] = zt(r) ? r.map(e) : e(r);
  }
  return n;
}
const jr = () => {
}, zt = Array.isArray, g1 = /\/$/, y1 = (e) => e.replace(g1, "");
function ll(e, t, n = "/") {
  let a, r = {}, i = "", o = "";
  const s = t.indexOf("#");
  let l = t.indexOf("?");
  return s < l && s >= 0 && (l = -1), l > -1 && (a = t.slice(0, l), i = t.slice(l + 1, s > -1 ? s : t.length), r = e(i)), s > -1 && (a = a || t.slice(0, s), o = t.slice(s, t.length)), a = w1(a != null ? a : t, n), {
    fullPath: a + (i && "?") + i + o,
    path: a,
    query: r,
    hash: o
  };
}
function b1(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Gd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _1(e, t, n) {
  const a = t.matched.length - 1, r = n.matched.length - 1;
  return a > -1 && a === r && or(t.matched[a], n.matched[r]) && dh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function or(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!E1(e[n], t[n]))
      return !1;
  return !0;
}
function E1(e, t) {
  return zt(e) ? Yd(e, t) : zt(t) ? Yd(t, e) : e === t;
}
function Yd(e, t) {
  return zt(t) ? e.length === t.length && e.every((n, a) => n === t[a]) : e.length === 1 && e[0] === t;
}
function w1(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const n = t.split("/"), a = e.split("/");
  let r = n.length - 1, i, o;
  for (i = 0; i < a.length; i++)
    if (o = a[i], o !== ".")
      if (o === "..")
        r > 1 && r--;
      else
        break;
  return n.slice(0, r).join("/") + "/" + a.slice(i - (i === a.length ? 1 : 0)).join("/");
}
var ii;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ii || (ii = {}));
var Wr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Wr || (Wr = {}));
function S1(e) {
  if (!e)
    if (Ba) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), y1(e);
}
const C1 = /^[^#]+#/;
function T1(e, t) {
  return e.replace(C1, "#") + t;
}
function k1(e, t) {
  const n = document.documentElement.getBoundingClientRect(), a = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: a.left - n.left - (t.left || 0),
    top: a.top - n.top - (t.top || 0)
  };
}
const ws = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function x1(e) {
  let t;
  if ("el" in e) {
    const n = e.el, a = typeof n == "string" && n.startsWith("#"), r = typeof n == "string" ? a ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!r)
      return;
    t = k1(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Kd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const pu = /* @__PURE__ */ new Map();
function D1(e, t) {
  pu.set(e, t);
}
function A1(e) {
  const t = pu.get(e);
  return pu.delete(e), t;
}
let R1 = () => location.protocol + "//" + location.host;
function fh(e, t) {
  const { pathname: n, search: a, hash: r } = t, i = e.indexOf("#");
  if (i > -1) {
    let s = r.includes(e.slice(i)) ? e.slice(i).length : 1, l = r.slice(s);
    return l[0] !== "/" && (l = "/" + l), Gd(l, "");
  }
  return Gd(n, e) + a + r;
}
function I1(e, t, n, a) {
  let r = [], i = [], o = null;
  const s = ({ state: f }) => {
    const p = fh(e, location), h = n.value, y = t.value;
    let w = 0;
    if (f) {
      if (n.value = p, t.value = f, o && o === h) {
        o = null;
        return;
      }
      w = y ? f.position - y.position : 0;
    } else
      a(p);
    r.forEach((m) => {
      m(n.value, h, {
        delta: w,
        type: ii.pop,
        direction: w ? w > 0 ? Wr.forward : Wr.back : Wr.unknown
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(f) {
    r.push(f);
    const p = () => {
      const h = r.indexOf(f);
      h > -1 && r.splice(h, 1);
    };
    return i.push(p), p;
  }
  function u() {
    const { history: f } = window;
    !f.state || f.replaceState(Ne({}, f.state, { scroll: ws() }), "");
  }
  function d() {
    for (const f of i)
      f();
    i = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", s), window.addEventListener("beforeunload", u), {
    pauseListeners: l,
    listen: c,
    destroy: d
  };
}
function Xd(e, t, n, a = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: a,
    position: window.history.length,
    scroll: r ? ws() : null
  };
}
function O1(e) {
  const { history: t, location: n } = window, a = {
    value: fh(e, n)
  }, r = { value: t.state };
  r.value || i(a.value, {
    back: null,
    current: a.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function i(l, c, u) {
    const d = e.indexOf("#"), f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : R1() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), r.value = c;
    } catch (p) {
      console.error(p), n[u ? "replace" : "assign"](f);
    }
  }
  function o(l, c) {
    const u = Ne({}, t.state, Xd(
      r.value.back,
      l,
      r.value.forward,
      !0
    ), c, { position: r.value.position });
    i(l, u, !0), a.value = l;
  }
  function s(l, c) {
    const u = Ne(
      {},
      r.value,
      t.state,
      {
        forward: l,
        scroll: ws()
      }
    );
    i(u.current, u, !0);
    const d = Ne({}, Xd(a.value, l, null), { position: u.position + 1 }, c);
    i(l, d, !1), a.value = l;
  }
  return {
    location: a,
    state: r,
    push: s,
    replace: o
  };
}
function $1(e) {
  e = S1(e);
  const t = O1(e), n = I1(e, t.state, t.location, t.replace);
  function a(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const r = Ne({
    location: "",
    base: e,
    go: a,
    createHref: T1.bind(null, e)
  }, t, n);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function N1(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), $1(e);
}
function M1(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ph(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const An = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, vh = Symbol("");
var Zd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Zd || (Zd = {}));
function sr(e, t) {
  return Ne(new Error(), {
    type: e,
    [vh]: !0
  }, t);
}
function nn(e, t) {
  return e instanceof Error && vh in e && (t == null || !!(e.type & t));
}
const Qd = "[^/]+?", P1 = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, B1 = /[.+*?^${}()[\]/\\]/g;
function V1(e, t) {
  const n = Ne({}, P1, t), a = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (r += "/"), r += f.value.replace(B1, "\\$&"), p += 40;
      else if (f.type === 1) {
        const { value: h, repeatable: y, optional: w, regexp: m } = f;
        i.push({
          name: h,
          repeatable: y,
          optional: w
        });
        const _ = m || Qd;
        if (_ !== Qd) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${_}): ` + x.message);
          }
        }
        let k = y ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        d || (k = w && c.length < 2 ? `(?:/${k})` : "/" + k), w && (k += "?"), r += k, p += 20, w && (p += -8), y && (p += -20), _ === ".*" && (p += -50);
      }
      u.push(p);
    }
    a.push(u);
  }
  if (n.strict && n.end) {
    const c = a.length - 1;
    a[c][a[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function s(c) {
    const u = c.match(o), d = {};
    if (!u)
      return null;
    for (let f = 1; f < u.length; f++) {
      const p = u[f] || "", h = i[f - 1];
      d[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function l(c) {
    let u = "", d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const p of f)
        if (p.type === 0)
          u += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: y, optional: w } = p, m = h in c ? c[h] : "";
          if (zt(m) && !y)
            throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = zt(m) ? m.join("/") : m;
          if (!_)
            if (w)
              f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${h}"`);
          u += _;
        }
    }
    return u || "/";
  }
  return {
    re: o,
    score: a,
    keys: i,
    parse: s,
    stringify: l
  };
}
function L1(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const a = t[n] - e[n];
    if (a)
      return a;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function F1(e, t) {
  let n = 0;
  const a = e.score, r = t.score;
  for (; n < a.length && n < r.length; ) {
    const i = L1(a[n], r[n]);
    if (i)
      return i;
    n++;
  }
  if (Math.abs(r.length - a.length) === 1) {
    if (Jd(a))
      return 1;
    if (Jd(r))
      return -1;
  }
  return r.length - a.length;
}
function Jd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const H1 = {
  type: 0,
  value: ""
}, z1 = /[a-zA-Z0-9_]/;
function U1(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[H1]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`);
  }
  let n = 0, a = n;
  const r = [];
  let i;
  function o() {
    i && r.push(i), i = [];
  }
  let s = 0, l, c = "", u = "";
  function d() {
    !c || (n === 0 ? i.push({
      type: 0,
      value: c
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), c = "");
  }
  function f() {
    c += l;
  }
  for (; s < e.length; ) {
    if (l = e[s++], l === "\\" && n !== 2) {
      a = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && d(), o()) : l === ":" ? (d(), n = 1) : f();
        break;
      case 4:
        f(), n = a;
        break;
      case 1:
        l === "(" ? n = 2 : z1.test(l) ? f() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && s--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && s--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), o(), r;
}
function j1(e, t, n) {
  const a = V1(U1(e.path), n), r = Ne(a, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function W1(e, t) {
  const n = [], a = /* @__PURE__ */ new Map();
  t = nf({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(u) {
    return a.get(u);
  }
  function i(u, d, f) {
    const p = !f, h = q1(u);
    h.aliasOf = f && f.record;
    const y = nf(t, u), w = [
      h
    ];
    if ("alias" in u) {
      const k = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const x of k)
        w.push(Ne({}, h, {
          components: f ? f.record.components : h.components,
          path: x,
          aliasOf: f ? f.record : h
        }));
    }
    let m, _;
    for (const k of w) {
      const { path: x } = k;
      if (d && x[0] !== "/") {
        const D = d.record.path, A = D[D.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (x && A + x);
      }
      if (m = j1(k, d, y), f ? f.alias.push(m) : (_ = _ || m, _ !== m && _.alias.push(m), p && u.name && !tf(m) && o(u.name)), h.children) {
        const D = h.children;
        for (let A = 0; A < D.length; A++)
          i(D[A], m, f && f.children[A]);
      }
      f = f || m, (m.record.components && Object.keys(m.record.components).length || m.record.name || m.record.redirect) && l(m);
    }
    return _ ? () => {
      o(_);
    } : jr;
  }
  function o(u) {
    if (ph(u)) {
      const d = a.get(u);
      d && (a.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o));
    } else {
      const d = n.indexOf(u);
      d > -1 && (n.splice(d, 1), u.record.name && a.delete(u.record.name), u.children.forEach(o), u.alias.forEach(o));
    }
  }
  function s() {
    return n;
  }
  function l(u) {
    let d = 0;
    for (; d < n.length && F1(u, n[d]) >= 0 && (u.record.path !== n[d].record.path || !hh(u, n[d])); )
      d++;
    n.splice(d, 0, u), u.record.name && !tf(u) && a.set(u.record.name, u);
  }
  function c(u, d) {
    let f, p = {}, h, y;
    if ("name" in u && u.name) {
      if (f = a.get(u.name), !f)
        throw sr(1, {
          location: u
        });
      y = f.record.name, p = Ne(
        ef(
          d.params,
          f.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        u.params && ef(u.params, f.keys.map((_) => _.name))
      ), h = f.stringify(p);
    } else if ("path" in u)
      h = u.path, f = n.find((_) => _.re.test(h)), f && (p = f.parse(h), y = f.record.name);
    else {
      if (f = d.name ? a.get(d.name) : n.find((_) => _.re.test(d.path)), !f)
        throw sr(1, {
          location: u,
          currentLocation: d
        });
      y = f.record.name, p = Ne({}, d.params, u.params), h = f.stringify(p);
    }
    const w = [];
    let m = f;
    for (; m; )
      w.unshift(m.record), m = m.parent;
    return {
      name: y,
      path: h,
      params: p,
      matched: w,
      meta: Y1(w)
    };
  }
  return e.forEach((u) => i(u)), { addRoute: i, resolve: c, removeRoute: o, getRoutes: s, getRecordMatcher: r };
}
function ef(e, t) {
  const n = {};
  for (const a of t)
    a in e && (n[a] = e[a]);
  return n;
}
function q1(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: G1(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function G1(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const a in e.components)
      t[a] = typeof n == "boolean" ? n : n[a];
  return t;
}
function tf(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Y1(e) {
  return e.reduce((t, n) => Ne(t, n.meta), {});
}
function nf(e, t) {
  const n = {};
  for (const a in e)
    n[a] = a in t ? t[a] : e[a];
  return n;
}
function hh(e, t) {
  return t.children.some((n) => n === e || hh(e, n));
}
const mh = /#/g, K1 = /&/g, X1 = /\//g, Z1 = /=/g, Q1 = /\?/g, gh = /\+/g, J1 = /%5B/g, ew = /%5D/g, yh = /%5E/g, tw = /%60/g, bh = /%7B/g, nw = /%7C/g, _h = /%7D/g, aw = /%20/g;
function fc(e) {
  return encodeURI("" + e).replace(nw, "|").replace(J1, "[").replace(ew, "]");
}
function rw(e) {
  return fc(e).replace(bh, "{").replace(_h, "}").replace(yh, "^");
}
function vu(e) {
  return fc(e).replace(gh, "%2B").replace(aw, "+").replace(mh, "%23").replace(K1, "%26").replace(tw, "`").replace(bh, "{").replace(_h, "}").replace(yh, "^");
}
function iw(e) {
  return vu(e).replace(Z1, "%3D");
}
function ow(e) {
  return fc(e).replace(mh, "%23").replace(Q1, "%3F");
}
function sw(e) {
  return e == null ? "" : ow(e).replace(X1, "%2F");
}
function Bo(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
function lw(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const a = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < a.length; ++r) {
    const i = a[r].replace(gh, " "), o = i.indexOf("="), s = Bo(o < 0 ? i : i.slice(0, o)), l = o < 0 ? null : Bo(i.slice(o + 1));
    if (s in t) {
      let c = t[s];
      zt(c) || (c = t[s] = [c]), c.push(l);
    } else
      t[s] = l;
  }
  return t;
}
function af(e) {
  let t = "";
  for (let n in e) {
    const a = e[n];
    if (n = iw(n), a == null) {
      a !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (zt(a) ? a.map((i) => i && vu(i)) : [a && vu(a)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  }
  return t;
}
function uw(e) {
  const t = {};
  for (const n in e) {
    const a = e[n];
    a !== void 0 && (t[n] = zt(a) ? a.map((r) => r == null ? null : "" + r) : a == null ? a : "" + a);
  }
  return t;
}
const cw = Symbol(""), rf = Symbol(""), Ss = Symbol(""), pc = Symbol(""), hu = Symbol("");
function Dr() {
  let e = [];
  function t(a) {
    return e.push(a), () => {
      const r = e.indexOf(a);
      r > -1 && e.splice(r, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e,
    reset: n
  };
}
function On(e, t, n, a, r) {
  const i = a && (a.enterCallbacks[r] = a.enterCallbacks[r] || []);
  return () => new Promise((o, s) => {
    const l = (d) => {
      d === !1 ? s(sr(4, {
        from: n,
        to: t
      })) : d instanceof Error ? s(d) : M1(d) ? s(sr(2, {
        from: t,
        to: d
      })) : (i && a.enterCallbacks[r] === i && typeof d == "function" && i.push(d), o());
    }, c = e.call(a && a.instances[r], t, n, l);
    let u = Promise.resolve(c);
    e.length < 3 && (u = u.then(l)), u.catch((d) => s(d));
  });
}
function ul(e, t, n, a) {
  const r = [];
  for (const i of e)
    for (const o in i.components) {
      let s = i.components[o];
      if (!(t !== "beforeRouteEnter" && !i.instances[o]))
        if (dw(s)) {
          const c = (s.__vccOpts || s)[t];
          c && r.push(On(c, n, a, i, o));
        } else {
          let l = s();
          r.push(() => l.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));
            const u = m1(c) ? c.default : c;
            i.components[o] = u;
            const f = (u.__vccOpts || u)[t];
            return f && On(f, n, a, i, o)();
          }));
        }
    }
  return r;
}
function dw(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function of(e) {
  const t = ct(Ss), n = ct(pc), a = E(() => t.resolve(v(e.to))), r = E(() => {
    const { matched: l } = a.value, { length: c } = l, u = l[c - 1], d = n.matched;
    if (!u || !d.length)
      return -1;
    const f = d.findIndex(or.bind(null, u));
    if (f > -1)
      return f;
    const p = sf(l[c - 2]);
    return c > 1 && sf(u) === p && d[d.length - 1].path !== p ? d.findIndex(or.bind(null, l[c - 2])) : f;
  }), i = E(() => r.value > -1 && hw(n.params, a.value.params)), o = E(() => r.value > -1 && r.value === n.matched.length - 1 && dh(n.params, a.value.params));
  function s(l = {}) {
    return vw(l) ? t[v(e.replace) ? "replace" : "push"](
      v(e.to)
    ).catch(jr) : Promise.resolve();
  }
  return {
    route: a,
    href: E(() => a.value.href),
    isActive: i,
    isExactActive: o,
    navigate: s
  };
}
const fw = /* @__PURE__ */ B({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: of,
  setup(e, { slots: t }) {
    const n = Ht(of(e)), { options: a } = ct(Ss), r = E(() => ({
      [lf(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive,
      [lf(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && t.default(n);
      return e.custom ? i : me("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, i);
    };
  }
}), pw = fw;
function vw(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function hw(e, t) {
  for (const n in t) {
    const a = t[n], r = e[n];
    if (typeof a == "string") {
      if (a !== r)
        return !1;
    } else if (!zt(r) || r.length !== a.length || a.some((i, o) => i !== r[o]))
      return !1;
  }
  return !0;
}
function sf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const lf = (e, t, n) => e != null ? e : t != null ? t : n, mw = /* @__PURE__ */ B({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const a = ct(hu), r = E(() => e.route || a.value), i = ct(rf, 0), o = E(() => {
      let c = v(i);
      const { matched: u } = r.value;
      let d;
      for (; (d = u[c]) && !d.components; )
        c++;
      return c;
    }), s = E(() => r.value.matched[o.value]);
    ln(rf, E(() => o.value + 1)), ln(cw, s), ln(hu, r);
    const l = te();
    return $e(() => [l.value, s.value, e.name], ([c, u, d], [f, p, h]) => {
      u && (u.instances[d] = c, p && p !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), c && u && (!p || !or(u, p) || !f) && (u.enterCallbacks[d] || []).forEach((y) => y(c));
    }, { flush: "post" }), () => {
      const c = r.value, u = e.name, d = s.value, f = d && d.components[u];
      if (!f)
        return uf(n.default, { Component: f, route: c });
      const p = d.props[u], h = p ? p === !0 ? c.params : typeof p == "function" ? p(c) : p : null, w = me(f, Ne({}, h, t, {
        onVnodeUnmounted: (m) => {
          m.component.isUnmounted && (d.instances[u] = null);
        },
        ref: l
      }));
      return uf(n.default, { Component: w, route: c }) || w;
    };
  }
});
function uf(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const gw = mw;
function yw(e) {
  const t = W1(e.routes, e), n = e.parseQuery || lw, a = e.stringifyQuery || af, r = e.history, i = Dr(), o = Dr(), s = Dr(), l = Wy(An);
  let c = An;
  Ba && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = sl.bind(null, (M) => "" + M), d = sl.bind(null, sw), f = sl.bind(null, Bo);
  function p(M, q) {
    let K, ne;
    return ph(M) ? (K = t.getRecordMatcher(M), ne = q) : ne = M, t.addRoute(ne, K);
  }
  function h(M) {
    const q = t.getRecordMatcher(M);
    q && t.removeRoute(q);
  }
  function y() {
    return t.getRoutes().map((M) => M.record);
  }
  function w(M) {
    return !!t.getRecordMatcher(M);
  }
  function m(M, q) {
    if (q = Ne({}, q || l.value), typeof M == "string") {
      const be = ll(n, M, q.path), Fe = t.resolve({ path: be.path }, q), tn = r.createHref(be.fullPath);
      return Ne(be, Fe, {
        params: f(Fe.params),
        hash: Bo(be.hash),
        redirectedFrom: void 0,
        href: tn
      });
    }
    let K;
    if ("path" in M)
      K = Ne({}, M, {
        path: ll(n, M.path, q.path).path
      });
    else {
      const be = Ne({}, M.params);
      for (const Fe in be)
        be[Fe] == null && delete be[Fe];
      K = Ne({}, M, {
        params: d(M.params)
      }), q.params = d(q.params);
    }
    const ne = t.resolve(K, q), Ae = M.hash || "";
    ne.params = u(f(ne.params));
    const We = b1(a, Ne({}, M, {
      hash: rw(Ae),
      path: ne.path
    })), we = r.createHref(We);
    return Ne({
      fullPath: We,
      hash: Ae,
      query: a === af ? uw(M.query) : M.query || {}
    }, ne, {
      redirectedFrom: void 0,
      href: we
    });
  }
  function _(M) {
    return typeof M == "string" ? ll(n, M, l.value.path) : Ne({}, M);
  }
  function k(M, q) {
    if (c !== M)
      return sr(8, {
        from: q,
        to: M
      });
  }
  function x(M) {
    return L(M);
  }
  function D(M) {
    return x(Ne(_(M), { replace: !0 }));
  }
  function A(M) {
    const q = M.matched[M.matched.length - 1];
    if (q && q.redirect) {
      const { redirect: K } = q;
      let ne = typeof K == "function" ? K(M) : K;
      return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = _(ne) : { path: ne }, ne.params = {}), Ne({
        query: M.query,
        hash: M.hash,
        params: "path" in ne ? {} : M.params
      }, ne);
    }
  }
  function L(M, q) {
    const K = c = m(M), ne = l.value, Ae = M.state, We = M.force, we = M.replace === !0, be = A(K);
    if (be)
      return L(
        Ne(_(be), {
          state: typeof be == "object" ? Ne({}, Ae, be.state) : Ae,
          force: We,
          replace: we
        }),
        q || K
      );
    const Fe = K;
    Fe.redirectedFrom = q;
    let tn;
    return !We && _1(a, ne, K) && (tn = sr(16, { to: Fe, from: ne }), Ie(
      ne,
      ne,
      !0,
      !1
    )), (tn ? Promise.resolve(tn) : O(Fe, ne)).catch((rt) => nn(rt) ? nn(rt, 2) ? rt : Ee(rt) : ie(rt, Fe, ne)).then((rt) => {
      if (rt) {
        if (nn(rt, 2))
          return L(
            Ne({
              replace: we
            }, _(rt.to), {
              state: typeof rt.to == "object" ? Ne({}, Ae, rt.to.state) : Ae,
              force: We
            }),
            q || Fe
          );
      } else
        rt = X(Fe, ne, !0, we, Ae);
      return j(Fe, ne, rt), rt;
    });
  }
  function $(M, q) {
    const K = k(M, q);
    return K ? Promise.reject(K) : Promise.resolve();
  }
  function O(M, q) {
    let K;
    const [ne, Ae, We] = bw(M, q);
    K = ul(ne.reverse(), "beforeRouteLeave", M, q);
    for (const be of ne)
      be.leaveGuards.forEach((Fe) => {
        K.push(On(Fe, M, q));
      });
    const we = $.bind(null, M, q);
    return K.push(we), Ia(K).then(() => {
      K = [];
      for (const be of i.list())
        K.push(On(be, M, q));
      return K.push(we), Ia(K);
    }).then(() => {
      K = ul(Ae, "beforeRouteUpdate", M, q);
      for (const be of Ae)
        be.updateGuards.forEach((Fe) => {
          K.push(On(Fe, M, q));
        });
      return K.push(we), Ia(K);
    }).then(() => {
      K = [];
      for (const be of M.matched)
        if (be.beforeEnter && !q.matched.includes(be))
          if (zt(be.beforeEnter))
            for (const Fe of be.beforeEnter)
              K.push(On(Fe, M, q));
          else
            K.push(On(be.beforeEnter, M, q));
      return K.push(we), Ia(K);
    }).then(() => (M.matched.forEach((be) => be.enterCallbacks = {}), K = ul(We, "beforeRouteEnter", M, q), K.push(we), Ia(K))).then(() => {
      K = [];
      for (const be of o.list())
        K.push(On(be, M, q));
      return K.push(we), Ia(K);
    }).catch((be) => nn(be, 8) ? be : Promise.reject(be));
  }
  function j(M, q, K) {
    for (const ne of s.list())
      ne(M, q, K);
  }
  function X(M, q, K, ne, Ae) {
    const We = k(M, q);
    if (We)
      return We;
    const we = q === An, be = Ba ? history.state : {};
    K && (ne || we ? r.replace(M.fullPath, Ne({
      scroll: we && be && be.scroll
    }, Ae)) : r.push(M.fullPath, Ae)), l.value = M, Ie(M, q, K, we), Ee();
  }
  let Q;
  function re() {
    Q || (Q = r.listen((M, q, K) => {
      if (!xe.listening)
        return;
      const ne = m(M), Ae = A(ne);
      if (Ae) {
        L(Ne(Ae, { replace: !0 }), ne).catch(jr);
        return;
      }
      c = ne;
      const We = l.value;
      Ba && D1(Kd(We.fullPath, K.delta), ws()), O(ne, We).catch((we) => nn(we, 12) ? we : nn(we, 2) ? (L(
        we.to,
        ne
      ).then((be) => {
        nn(be, 20) && !K.delta && K.type === ii.pop && r.go(-1, !1);
      }).catch(jr), Promise.reject()) : (K.delta && r.go(-K.delta, !1), ie(we, ne, We))).then((we) => {
        we = we || X(
          ne,
          We,
          !1
        ), we && (K.delta && !nn(we, 8) ? r.go(-K.delta, !1) : K.type === ii.pop && nn(we, 20) && r.go(-1, !1)), j(ne, We, we);
      }).catch(jr);
    }));
  }
  let J = Dr(), Ce = Dr(), ue;
  function ie(M, q, K) {
    Ee(M);
    const ne = Ce.list();
    return ne.length ? ne.forEach((Ae) => Ae(M, q, K)) : console.error(M), Promise.reject(M);
  }
  function Re() {
    return ue && l.value !== An ? Promise.resolve() : new Promise((M, q) => {
      J.add([M, q]);
    });
  }
  function Ee(M) {
    return ue || (ue = !M, re(), J.list().forEach(([q, K]) => M ? K(M) : q()), J.reset()), M;
  }
  function Ie(M, q, K, ne) {
    const { scrollBehavior: Ae } = e;
    if (!Ba || !Ae)
      return Promise.resolve();
    const We = !K && A1(Kd(M.fullPath, 0)) || (ne || !K) && history.state && history.state.scroll || null;
    return sn().then(() => Ae(M, q, We)).then((we) => we && x1(we)).catch((we) => ie(we, M, q));
  }
  const qe = (M) => r.go(M);
  let it;
  const se = /* @__PURE__ */ new Set(), xe = {
    currentRoute: l,
    listening: !0,
    addRoute: p,
    removeRoute: h,
    hasRoute: w,
    getRoutes: y,
    resolve: m,
    options: e,
    push: x,
    replace: D,
    go: qe,
    back: () => qe(-1),
    forward: () => qe(1),
    beforeEach: i.add,
    beforeResolve: o.add,
    afterEach: s.add,
    onError: Ce.add,
    isReady: Re,
    install(M) {
      const q = this;
      M.component("RouterLink", pw), M.component("RouterView", gw), M.config.globalProperties.$router = q, Object.defineProperty(M.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => v(l)
      }), Ba && !it && l.value === An && (it = !0, x(r.location).catch((Ae) => {
      }));
      const K = {};
      for (const Ae in An)
        K[Ae] = E(() => l.value[Ae]);
      M.provide(Ss, q), M.provide(pc, Ht(K)), M.provide(hu, l);
      const ne = M.unmount;
      se.add(M), M.unmount = function() {
        se.delete(M), se.size < 1 && (c = An, Q && Q(), Q = null, l.value = An, it = !1, ue = !1), ne();
      };
    }
  };
  return xe;
}
function Ia(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function bw(e, t) {
  const n = [], a = [], r = [], i = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < i; o++) {
    const s = t.matched[o];
    s && (e.matched.find((c) => or(c, s)) ? a.push(s) : n.push(s));
    const l = e.matched[o];
    l && (t.matched.find((c) => or(c, l)) || r.push(l));
  }
  return [n, a, r];
}
function _w() {
  return ct(Ss);
}
function Cs() {
  return ct(pc);
}
const Ew = (e) => (Wn("data-v-c42f56b8"), e = e(), qn(), e), ww = { class: "control" }, Sw = ["disabled"], Cw = /* @__PURE__ */ Ew(() => /* @__PURE__ */ S("hr", null, null, -1)), Tw = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    formId: null,
    apiRoot: null
  },
  setup(e) {
    const t = e, n = Er(), a = Cs(), r = t.formId ? t.formId : a.params.id;
    t.apiRoot && n.setApiRoot(t.apiRoot), r && n.loadForm(r);
    const i = () => n.saveForm(), o = E(() => !n.form);
    return je(() => {
      n.createNewForm();
    }), (s, l) => (g(), T(Z, null, [
      S("div", ww, [
        S("button", {
          type: "button",
          class: "btn btn-success",
          disabled: v(o),
          onClick: i
        }, "Save", 8, Sw)
      ]),
      P(us, {
        model: v(n).transientMessageModel
      }, null, 8, ["model"]),
      v(n).form ? (g(), z(h1, {
        key: 0,
        model: v(n).form
      }, null, 8, ["model"])) : H("", !0),
      Cw
    ], 64));
  }
});
const mu = /* @__PURE__ */ Ut(Tw, [["__scopeId", "data-v-c42f56b8"]]), Ct = wn("FormSubmissionStore", {
  state: () => ({
    lang: "en",
    form: null,
    formData: {},
    transientMessage: null,
    transientMessageClass: null,
    files: [],
    fileKeys: []
  }),
  actions: {
    loadForm(e, t) {
      let n = `${yt.dataRepositoryApiRoot}/api/forms/${e}`;
      console.log(n), fetch(n, {
        method: "GET"
      }).then((a) => a.json()).then((a) => {
        this.form = a, t || (this.formData = Ev(this.form, this.lang));
      }).catch((a) => {
        console.error("Load Form API Error:", a);
      });
    },
    loadSubmission(e) {
      let t = `${yt.dataRepositoryApiRoot}/api/form-submissions/${e}`;
      console.log(t), fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        var a;
        this.formData = n, (a = this.formData) != null && a.formId && this.loadForm(this.formData.formId, !0);
      }).catch((n) => {
        console.error("Load Form API Error:", n);
      });
    },
    validateFormData() {
      return console.log("TODO: Validate form data."), !0;
    },
    submitForm() {
      var a, r;
      if (!this.validateFormData()) {
        console.log("Form validation failed.");
        return;
      }
      const e = ((r = (a = this.formData) == null ? void 0 : a.id) == null ? void 0 : r.toString()) === oe.EMPTY;
      let t = `${yt.dataRepositoryApiRoot}/api/form-submissions`, n = "";
      e ? (n = "POST", this.formData.state = nr.Draft) : (t = `${t}/${this.formData.id}`, n = "PUT"), fetch(
        t,
        {
          body: JSON.stringify(this.formData),
          method: n,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then(async (i) => {
        if (i.ok) {
          if (e) {
            const o = await i.json();
            this.formData.id = o;
          }
          this.transientMessage = "Success", this.transientMessageClass = "success", console.log("Form submission successfull.");
        } else
          switch (this.transientMessageClass = "danger", i.status) {
            case 400:
              this.transientMessage = "Bad request. Failed to submit the form";
              break;
            case 404:
              this.transientMessage = "Form submission not found";
              break;
            case 500:
              this.transientMessage = "An internal server error occurred. Failed to submit the form";
              break;
            default:
              this.transientMessage = "Unknown error occured. Failed to submit the form";
              break;
          }
      }).catch((i) => {
        e && this.formData && (this.formData.id = oe.EMPTY), this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("FormData Submit API Error:", i);
      });
    },
    saveForm() {
      var a, r;
      if (!this.form) {
        console.error("Cannot save null form.");
        return;
      }
      const e = ((r = (a = this.form) == null ? void 0 : a.id) == null ? void 0 : r.toString()) === oe.EMPTY;
      let t = `${yt.dataRepositoryApiRoot}/api/forms`, n = "";
      e ? (console.log("Saving new form."), this.form.id = oe.create().toString(), n = "POST", this.form.state = nr.Draft) : (console.log("Updating existing form."), t = `${t}/${this.form.id}`, n = "PUT"), fetch(
        t,
        {
          body: JSON.stringify(this.form),
          method: n,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then((i) => {
        if (i.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", i.status) {
            case 400:
              this.transientMessage = "Bad request. Failed to save the form";
              break;
            case 404:
              this.transientMessage = "Form not found";
              break;
            case 500:
              this.transientMessage = "An internal server error occurred. Failed to save the form";
              break;
            default:
              this.transientMessage = "Unknown error occured. Failed to save the form";
              break;
          }
      }).catch((i) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Form Save API Error:", i);
      });
    },
    clearMessages() {
      this.transientMessage = null;
    },
    addFile(e, t) {
      var n, a;
      (n = this.files) == null || n.push(e), (a = this.fileKeys) == null || a.push(t.toString());
    },
    putFile(e, t) {
      Array.from(e).forEach((n) => {
        console.log("fieldId:" + t), this.addFile(n, t);
      });
    }
  }
}), Eh = (e) => (Wn("data-v-7ad75a89"), e = e(), qn(), e), kw = /* @__PURE__ */ Eh(() => /* @__PURE__ */ S("h2", null, "Form Submission", -1)), xw = /* @__PURE__ */ Eh(() => /* @__PURE__ */ S("hr", null, null, -1)), Dw = { class: "control" }, Aw = ["disabled"], Rw = /* @__PURE__ */ B({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    formId: null,
    submissionId: null
  },
  setup(e) {
    const t = e, n = Ct(t.piniaInstance);
    t.formId ? n.loadForm(t.formId) : t.submissionId && n.loadSubmission(t.submissionId), $e(() => n.transientMessage, async (i) => {
      i && setTimeout(() => {
        n.transientMessage = null;
      }, 2e3);
    });
    const a = () => n.submitForm(), r = E(() => !!n.form);
    return (i, o) => {
      const s = ge("Form");
      return g(), T(Z, null, [
        P(ns, { name: "fade" }, {
          default: N(() => [
            v(n).transientMessage ? (g(), T("p", {
              key: 0,
              class: W("alert alert-" + v(n).transientMessageClass)
            }, G(v(n).transientMessage), 3)) : H("", !0)
          ]),
          _: 1
        }),
        kw,
        xw,
        v(n).form ? (g(), z(s, {
          key: 0,
          model: v(n).form
        }, null, 8, ["model"])) : H("", !0),
        S("div", Dw, [
          S("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: !v(r),
            onClick: a
          }, "Submit", 8, Aw)
        ])
      ], 64);
    };
  }
});
const Iw = /* @__PURE__ */ Ut(Rw, [["__scopeId", "data-v-7ad75a89"]]), wh = wn("LoginStore", {
  state: () => ({
    authorizationApiRoot: null,
    loginResult: null
  }),
  actions: {
    authorize(e) {
      var n;
      if (!e) {
        console.error("JWT token is null.");
        return;
      }
      if (!this.authorizationApiRoot) {
        console.error("Authorization service root is not specified.");
        return;
      }
      const t = ((n = this.authorizationApiRoot) == null ? void 0 : n.replace(/\/+$/, "")) + "/api/GoogleIdentity";
      fetch(
        t,
        {
          body: JSON.stringify(e),
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((a) => a.json()).then((a) => {
        a.success ? this.loginResult = a : (this.loginResult = a, console.error("User authorization not successful."));
      }).catch((a) => {
        this.loginResult = {}, console.error("User authorization failed: ", a);
      });
    }
  }
}), Ow = /* @__PURE__ */ S("h2", null, "Login", -1), $w = /* @__PURE__ */ S("br", null, null, -1), Nw = /* @__PURE__ */ S("br", null, null, -1), Mw = /* @__PURE__ */ B({
  __name: "App",
  props: {
    piniaInstance: null,
    authorizationRoot: null
  },
  setup(e) {
    const t = e, n = wh(t.piniaInstance);
    je(() => {
      n.authorizationApiRoot = t.authorizationRoot;
    });
    const a = (r) => {
      n.authorize(r.credential);
    };
    return (r, i) => {
      const o = ge("GoogleLogin");
      return g(), T(Z, null, [
        Ow,
        $w,
        P(o, { callback: a }),
        Nw
      ], 64);
    };
  }
}), Sh = wn("WorkflowBuilderStore", {
  state: () => ({
    workflow: null,
    transientMessage: null,
    transientMessageClass: null
  }),
  actions: {
    loadWorkflow(e) {
      const t = `https://localhost:5020/api/workflow/${e}`;
      fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.workflow = n;
      }).catch((n) => {
        console.error("Load Workflow API Error:", n);
      });
    },
    saveWorkflow() {
      var a, r;
      if (!this.workflow) {
        console.error("Cannot save null workflow.");
        return;
      }
      const e = ((r = (a = this.workflow) == null ? void 0 : a.id) == null ? void 0 : r.toString()) === oe.EMPTY;
      let t = "https://localhost:5020/api/workflow", n = "";
      e ? (console.log("Saving new workflow."), n = "POST") : (console.log("Updating existing workflow."), t = `${t}/${this.workflow.id}`, n = "PUT"), fetch(
        t,
        {
          body: JSON.stringify(this.workflow),
          method: n,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then((i) => {
        if (i.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", i.status) {
            case 400:
              this.transientMessage = "Bad request. Failed to save the workflow";
              break;
            case 404:
              this.transientMessage = "Workflow not found";
              break;
            case 500:
              this.transientMessage = "An internal server error occurred. Failed to save the workflow";
              break;
            default:
              this.transientMessage = "Unknown error occured. Failed to save the workflow";
              break;
          }
      }).catch((i) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Workflow Save API Error:", i);
      });
    }
  }
}), Pw = (e) => (Wn("data-v-a2d9971d"), e = e(), qn(), e), Bw = { class: "action" }, Vw = /* @__PURE__ */ Pw(() => /* @__PURE__ */ S("select", null, [
  /* @__PURE__ */ S("option", { value: "b01e8c95-abef-4db2-ac3a-9ab35c4f6e11" }, "TO DO Form 1"),
  /* @__PURE__ */ S("option", { value: "139e7084-20ba-4268-9396-61bac78cda52" }, "TO DO Form 2")
], -1)), Lw = /* @__PURE__ */ B({
  __name: "WorkflowAction",
  props: {
    model: null
  },
  setup(e) {
    return (t, n) => (g(), T("div", Bw, [
      de(" Workflow Action: " + G(e.model.id) + " ", 1),
      S("div", null, [
        S("h4", null, G(e.model.name), 1),
        de(" Name: "),
        Ue(S("input", {
          type: "text",
          "onUpdate:modelValue": n[0] || (n[0] = (a) => e.model.name = a)
        }, null, 512), [
          [To, e.model.name]
        ])
      ]),
      S("div", null, [
        S("p", null, G(e.model.description), 1),
        de(" Description: "),
        Ue(S("textarea", {
          "onUpdate:modelValue": n[1] || (n[1] = (a) => e.model.description = a)
        }, null, 512), [
          [To, e.model.description]
        ])
      ]),
      S("div", null, [
        S("p", null, G(e.model.description), 1),
        de(" Form: "),
        Vw
      ])
    ]));
  }
});
const Fw = /* @__PURE__ */ Ut(Lw, [["__scopeId", "data-v-a2d9971d"]]), Hw = /* @__PURE__ */ B({
  __name: "Workflow",
  props: {
    model: null
  },
  setup(e) {
    return (t, n) => (g(!0), T(Z, null, he(e.model.actions, (a) => (g(), z(Fw, {
      key: a.id,
      model: a
    }, null, 8, ["model"]))), 128));
  }
}), Ch = (e) => (Wn("data-v-52fc6feb"), e = e(), qn(), e), zw = /* @__PURE__ */ Ch(() => /* @__PURE__ */ S("h2", null, "Workflow Builder", -1)), Uw = { class: "control" }, jw = ["disabled"], Ww = ["disabled"], qw = { class: "toolbar" }, Gw = ["disabled"], Yw = /* @__PURE__ */ Ch(() => /* @__PURE__ */ S("hr", null, null, -1)), Kw = /* @__PURE__ */ B({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    workflowId: null
  },
  setup(e) {
    const t = e, n = Sh(t.piniaInstance);
    t.workflowId && n.loadWorkflow(t.workflowId), $e(() => n.transientMessage, async (s) => {
      s && setTimeout(() => {
        n.transientMessage = null;
      }, 2e3);
    });
    const a = () => {
      n.workflow = {
        id: oe.EMPTY,
        name: "",
        description: "",
        states: []
      };
    }, r = () => n.saveWorkflow(), i = E(() => !n.workflow), o = () => {
      if (!n.workflow) {
        console.error("Cannot add action to null workflow");
        return;
      }
      const s = {
        id: oe.create().toString(),
        title: "",
        description: "",
        formId: oe.createEmpty()
      };
      n.workflow.actions ? n.workflow.actions.push(s) : n.workflow.actions = [s];
    };
    return (s, l) => (g(), T(Z, null, [
      P(ns, { name: "fade" }, {
        default: N(() => [
          v(n).transientMessage ? (g(), T("p", {
            key: 0,
            class: W("alert alert-" + v(n).transientMessageClass)
          }, G(v(n).transientMessage), 3)) : H("", !0)
        ]),
        _: 1
      }),
      zw,
      S("div", Uw, [
        S("button", {
          type: "button",
          class: "btn btn-primary",
          disabled: !v(i),
          onClick: a
        }, "New Workflow", 8, jw),
        S("button", {
          type: "button",
          class: "btn btn-success",
          disabled: v(i),
          onClick: r
        }, "Save", 8, Ww)
      ]),
      S("div", qw, [
        S("button", {
          disabled: v(i),
          onClick: l[0] || (l[0] = (c) => o())
        }, "+ Form Submission Action", 8, Gw)
      ]),
      Yw,
      v(n).workflow ? (g(), z(Hw, {
        key: 0,
        model: v(n).workflow
      }, null, 8, ["model"])) : H("", !0)
    ], 64));
  }
});
const Xw = /* @__PURE__ */ Ut(Kw, [["__scopeId", "data-v-52fc6feb"]]), vc = wn("EntityTemplateBuilderStore", {
  state: () => ({
    id: null,
    template: null,
    formEntries: [],
    transientMessageModel: {},
    forms: [],
    apiRoot: null
  }),
  actions: {
    newTemplate() {
      this.template = {
        id: oe.EMPTY,
        name: "New Entity Template",
        description: "Description about this new Entity Template",
        created: new Date(),
        updated: new Date(),
        state: nr.Draft,
        forms: [],
        entityTemplateSettings: {
          metadataForms: [],
          dataForms: [],
          titleField: {},
          descriptionField: {},
          mediaField: {}
        }
      };
    },
    associateForm(e) {
      if (e.toString() !== oe.EMPTY && this.forms.findIndex((t) => t.id === e) < 0) {
        const n = `${"https://" + this.getApiRoot.split("/")[2]}/api/forms/${e}`;
        fetch(n, {
          method: "GET"
        }).then((a) => a.json()).then((a) => {
          this.forms.push(a);
        }).catch((a) => {
          console.error("Load Form API Error:", a);
        });
      }
    },
    loadFormEntries() {
      const t = `${"https://" + this.getApiRoot.split("/")[2]}/api/forms`;
      console.log("loading forms: ", t), fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.formEntries = n;
      }).catch((n) => {
        console.error("Load Forms API Error:", n);
      });
    },
    loadTemplate(e) {
      const t = `${this.getApiRoot}/${e}`;
      console.log("loading entityTemplate: ", t), fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.template = n;
      }).catch((n) => {
        console.error("Load Entity Template API Error:", n);
      });
    },
    saveTemplate() {
      var a, r, i, o, s;
      const e = ((r = (a = this.template) == null ? void 0 : a.id) == null ? void 0 : r.toString()) === oe.EMPTY;
      let t = this.getApiRoot, n = "";
      e ? (console.log("Saving new template."), ((o = (i = this.template) == null ? void 0 : i.id) == null ? void 0 : o.toString()) === oe.EMPTY && (this.template.id = oe.create().toString()), n = "POST") : (console.log("Updating existing template."), t = `${t}/${(s = this.template) == null ? void 0 : s.id}`, n = "PUT"), fetch(t, {
        body: JSON.stringify(this.template),
        method: n,
        headers: {
          encType: "multipart/form-data",
          "Content-Type": "application/json"
        }
      }).then((l) => {
        if (l.ok)
          this.transientMessageModel.message = "The template saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (e && this.template && (this.template.id = oe.EMPTY), this.transientMessageModel.messageClass = "danger", l.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to save the form";
              break;
            case 404:
              this.transientMessageModel.message = "Form not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to save the form";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to save the form";
              break;
          }
      }).catch((l) => {
        e && this.template && (this.template.id = oe.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity Template API Error:", l);
      });
    },
    deleteFormEntry(e) {
      let t = this.template.entityTemplateSettings.dataForms.findIndex((n) => n.id === e);
      t >= 0 ? this.template.entityTemplateSettings.dataForms.splice(t, 1) : (t = this.template.entityTemplateSettings.metadataForms.findIndex((n) => n.id === e), t >= 0 && this.template.entityTemplateSettings.metadataForms.splice(t, 1));
    },
    setApiRoot(e) {
      this.apiRoot = e;
    }
  },
  getters: {
    getApiRoot(e) {
      return e.apiRoot ? e.apiRoot : yt.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), Th = (e) => (Wn("data-v-6261062f"), e = e(), qn(), e), Zw = /* @__PURE__ */ Th(() => /* @__PURE__ */ S("h6", null, "Name :", -1)), Qw = /* @__PURE__ */ Th(() => /* @__PURE__ */ S("br", null, null, -1)), Jw = ["for"], eS = ["name"], tS = ["value"], nS = /* @__PURE__ */ B({
  __name: "FormEntry",
  props: {
    model: null
  },
  setup(e) {
    Pe.add(ms), Pe.add(Es), Pe.add(hs), Pe.add(bs), Pe.add(gs), Pe.add(_s), Pe.add(ys);
    const t = vc();
    return (n, a) => {
      const r = ge("b-col"), i = ge("b-form-input"), o = ge("b-row");
      return g(), z(o, { class: "mb-2" }, {
        default: N(() => [
          P(r, { class: "col-sm-11" }, {
            default: N(() => [
              P(o, null, {
                default: N(() => [
                  P(r, { class: "col-sm-2" }, {
                    default: N(() => [
                      Zw
                    ]),
                    _: 1
                  }),
                  P(r, { class: "col-sm-10" }, {
                    default: N(() => [
                      P(i, {
                        modelValue: e.model.name,
                        "onUpdate:modelValue": a[0] || (a[0] = (s) => e.model.name = s)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Qw,
              P(o, null, {
                default: N(() => [
                  P(r, { class: "col-sm-2" }, {
                    default: N(() => [
                      S("label", {
                        for: e.model.id.toString()
                      }, "Form:", 8, Jw)
                    ]),
                    _: 1
                  }),
                  P(r, { class: "col-sm-10" }, {
                    default: N(() => [
                      Ue(S("select", {
                        "onUpdate:modelValue": a[1] || (a[1] = (s) => e.model.id = s),
                        name: e.model.id.toString(),
                        class: "form-select"
                      }, [
                        (g(!0), T(Z, null, he(v(t).formEntries, (s) => (g(), T("option", {
                          key: s.id.toString(),
                          value: s.id
                        }, G(s.name), 9, tS))), 128))
                      ], 8, eS), [
                        [er, e.model.id]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              S("div", null, [
                Ue(S("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": a[2] || (a[2] = (s) => e.model.isRequired = s)
                }, null, 512), [
                  [pa, e.model.isRequired]
                ]),
                de(" Is Required? ")
              ])
            ]),
            _: 1
          }),
          P(r, { class: "col-sm-1" }, {
            default: N(() => [
              P(v(sa), {
                icon: "fa-solid fa-circle-xmark",
                onClick: a[3] || (a[3] = (s) => v(t).deleteFormEntry(e.model.id)),
                class: "fa-icon delete"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const cf = /* @__PURE__ */ Ut(nS, [["__scopeId", "data-v-6261062f"]]), aS = { class: "row" }, rS = { class: "col-6" }, iS = { class: "col-6" }, cl = /* @__PURE__ */ B({
  __name: "FormFieldSelectionDropdown",
  props: {
    model: null,
    optionSource: null,
    forms: null
  },
  setup(e) {
    const t = e, n = E(() => {
      const r = [{ value: null, text: "Please select a form" }];
      return t.optionSource.forEach((i) => {
        const o = {
          label: i.formGroupName,
          options: []
        };
        i.formGroup.forEach((s) => {
          o.options.push({
            value: s.id,
            text: s.name
          });
        }), r.push(o);
      }), r;
    }), a = E(() => {
      var i, o, s, l, c;
      return ((i = t.model) == null ? void 0 : i.formId) === null || ((s = (o = t.model) == null ? void 0 : o.formId) == null ? void 0 : s.toString()) === "" ? [{ value: null, text: "Please select a form first." }] : (c = (l = t.forms) == null ? void 0 : l.filter((u) => {
        var d;
        return u.id === ((d = t.model) == null ? void 0 : d.formId);
      })[0]) == null ? void 0 : c.fields.map((u) => ({
        value: u.id,
        text: bv(u, null)
      }));
    });
    return $e(() => t.optionSource, (r) => {
      let i = !1;
      r.forEach((o) => {
        o.formGroup.filter((s) => s.id === t.model.formId).length > 0 && (i = !0);
      }), i || (console.log("Resetting fields ", r), t.model.formId = oe.EMPTY, t.model.fieldId = oe.EMPTY);
    }, { deep: !0 }), (r, i) => {
      const o = ge("b-form-select");
      return g(), T("div", aS, [
        S("div", rS, [
          P(o, {
            modelValue: e.model.formId,
            "onUpdate:modelValue": i[0] || (i[0] = (s) => e.model.formId = s),
            options: v(n)
          }, null, 8, ["modelValue", "options"])
        ]),
        S("div", iS, [
          P(o, {
            modelValue: e.model.fieldId,
            "onUpdate:modelValue": i[1] || (i[1] = (s) => e.model.fieldId = s),
            options: v(a)
          }, null, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
}), dl = /* @__PURE__ */ new Map(), oS = (e) => (dl.has(e) || dl.set(e, sS(e)), dl.get(e));
function sS(e) {
  return wn(`entitySelectStore/${e}`, {
    state: () => ({
      selectedEntityIds: [],
      entitySearchResult: null
    }),
    actions: {
      seach(t, n, a) {
        let r = 0, i = 10, o = yt.dataRepositoryApiRoot + "/api/entities/" + t + "/" + n + "/" + a + "/" + r + "/" + i;
        fetch(o, {
          method: "GET"
        }).then((s) => s.json()).then((s) => {
          this.entitySearchResult = s;
        }).catch((s) => {
          console.error("Load Entities API Error:", s);
        });
      }
    }
  });
}
const Ts = (e) => oS(e)(), lS = { class: "row mt-2" }, uS = { class: "col-sm-6" }, cS = /* @__PURE__ */ S("label", null, "Search Target:", -1), dS = ["value"], fS = { class: "col-sm-6" }, pS = /* @__PURE__ */ S("label", null, " Search Text ", -1), vS = ["onKeydown"], hS = /* @__PURE__ */ B({
  __name: "EntitySearchBox",
  props: {
    storeId: null,
    entityType: null
  },
  setup(e) {
    const t = e, n = te(ql), a = te(""), r = Ts(t.storeId), i = () => r.seach(t.entityType, n.value, a.value);
    return (o, s) => (g(), T("div", lS, [
      S("div", uS, [
        cS,
        Ue(S("select", {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => n.value = l),
          class: "form-select"
        }, [
          (g(!0), T(Z, null, he(v(ql), (l) => (g(), T("option", {
            key: l,
            value: l
          }, G(l), 9, dS))), 128))
        ], 512), [
          [er, n.value]
        ])
      ]),
      S("div", fS, [
        pS,
        Ue(S("input", {
          type: "text",
          "onUpdate:modelValue": s[1] || (s[1] = (l) => a.value = l),
          class: "form-control",
          onBlur: i,
          onKeydown: qy(i, ["enter"])
        }, null, 40, vS), [
          [To, a.value]
        ])
      ])
    ]));
  }
}), mS = /* @__PURE__ */ S("h4", null, "Entity Selection List", -1), gS = ["value"], yS = /* @__PURE__ */ B({
  __name: "EntityList",
  props: {
    storeId: null
  },
  setup(e) {
    const n = Ts(e.storeId), { entitySearchResult: a, selectedEntityIds: r } = is(n);
    return (i, o) => {
      var s;
      return g(), T(Z, null, [
        mS,
        (g(!0), T(Z, null, he((s = v(a)) == null ? void 0 : s.result, (l) => (g(), T("div", {
          key: l.id.toString(),
          class: "form-control"
        }, [
          Ue(S("input", {
            type: "checkbox",
            value: l.id,
            "onUpdate:modelValue": o[0] || (o[0] = (c) => gt(r) ? r.value = c : null)
          }, null, 8, gS), [
            [pa, v(r)]
          ]),
          S("span", null, G(l.title) + " => " + G(l.description), 1)
        ]))), 128))
      ], 64);
    };
  }
}), bS = /* @__PURE__ */ B({
  __name: "EntitySelectionList",
  props: {
    storeId: null,
    entityType: null
  },
  setup(e) {
    const t = e;
    Ts(t.storeId);
    const n = te(t.entityType);
    return (a, r) => (g(), T(Z, null, [
      P(hS, {
        storeId: e.storeId,
        entityType: n.value
      }, null, 8, ["storeId", "entityType"]),
      P(yS, { storeId: e.storeId }, null, 8, ["storeId"])
    ], 64));
  }
}), $t = (e) => (Wn("data-v-669d5b02"), e = e(), qn(), e), _S = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("br", null, null, -1)), ES = { key: 0 }, wS = { class: "form-field-border" }, SS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h6", null, "Name :", -1)), CS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("br", null, null, -1)), TS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h6", null, "Description :", -1)), kS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("br", null, null, -1)), xS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h6", null, "State:", -1)), DS = { class: "form-field-border blue" }, AS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h5", null, "Metadata Forms", -1)), RS = { class: "form-field-border red" }, IS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h5", null, "Data Forms", -1)), OS = { key: 0 }, $S = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("h5", null, "Field Mappings", -1)), NS = { class: "row" }, MS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("div", { class: "col-2" }, " Title ", -1)), PS = { class: "col-10" }, BS = { class: "row" }, VS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("div", { class: "col-2" }, " Description ", -1)), LS = { class: "col-10" }, FS = { class: "row" }, HS = /* @__PURE__ */ $t(() => /* @__PURE__ */ S("div", { class: "col-2" }, " Media ", -1)), zS = { class: "col-10" }, US = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    apiRoot: null
  },
  setup(e) {
    const t = e, n = vc();
    t.apiRoot && n.setApiRoot(t.apiRoot);
    const a = E(() => n.template), r = E(() => {
      var p;
      return (p = a.value) == null ? void 0 : p.entityTemplateSettings.titleField;
    }), i = E(() => {
      var p;
      return (p = a.value) == null ? void 0 : p.entityTemplateSettings.descriptionField;
    }), o = E(() => {
      var p;
      return (p = a.value) == null ? void 0 : p.entityTemplateSettings.mediaField;
    }), s = E(() => {
      var p, h, y, w;
      return [
        { formGroupName: "Matadata Form", formGroup: (h = (p = a.value) == null ? void 0 : p.entityTemplateSettings.metadataForms) == null ? void 0 : h.filter((m) => m.isRequired) },
        { formGroupName: "Data Form", formGroup: (w = (y = a.value) == null ? void 0 : y.entityTemplateSettings.dataForms) == null ? void 0 : w.filter((m) => m.isRequired) }
      ];
    });
    _w();
    const l = () => {
      var p, h;
      (h = (p = n.template) == null ? void 0 : p.entityTemplateSettings.metadataForms) == null || h.push({ id: oe.create().toString(), formId: oe.createEmpty(), name: "" });
    }, c = () => {
      var p, h;
      (h = (p = n.template) == null ? void 0 : p.entityTemplateSettings.dataForms) == null || h.push({ id: oe.create().toString(), formId: oe.createEmpty(), name: "" });
    }, u = () => n.saveTemplate(), f = Cs().params.id;
    return f && n.loadTemplate(f), $e(() => {
      var p;
      return (p = r == null ? void 0 : r.value) == null ? void 0 : p.formId;
    }, (p) => {
      n.associateForm(p);
    }), $e(() => {
      var p;
      return (p = i == null ? void 0 : i.value) == null ? void 0 : p.formId;
    }, (p) => {
      n.associateForm(p);
    }), $e(() => {
      var p;
      return (p = o == null ? void 0 : o.value) == null ? void 0 : p.formId;
    }, (p) => {
      n.associateForm(p);
    }), je(() => {
      var p;
      n.newTemplate(), n.loadFormEntries(), a.value && ((p = a.value.id) == null ? void 0 : p.toString()) !== oe.EMPTY && n.loadTemplate(a.value.id);
    }), (p, h) => {
      const y = ge("b-col"), w = ge("b-form-input"), m = ge("b-row"), _ = ge("b-form-textarea");
      return g(), T(Z, null, [
        P(us, {
          model: v(n).transientMessageModel
        }, null, 8, ["model"]),
        S("div", { class: "control" }, [
          S("button", {
            class: "btn btn-success",
            onClick: u
          }, "Save")
        ]),
        _S,
        v(a) ? (g(), T("div", ES, [
          S("div", wS, [
            P(m, null, {
              default: N(() => [
                P(y, { class: "col-sm-2" }, {
                  default: N(() => [
                    SS
                  ]),
                  _: 1
                }),
                P(y, { class: "col-sm-10" }, {
                  default: N(() => [
                    P(w, {
                      modelValue: v(a).name,
                      "onUpdate:modelValue": h[0] || (h[0] = (k) => v(a).name = k)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            CS,
            P(m, null, {
              default: N(() => [
                P(y, { class: "col-sm-2" }, {
                  default: N(() => [
                    TS
                  ]),
                  _: 1
                }),
                P(y, { class: "col-sm-10" }, {
                  default: N(() => [
                    P(_, {
                      modelValue: v(a).description,
                      "onUpdate:modelValue": h[1] || (h[1] = (k) => v(a).description = k)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            kS,
            P(m, null, {
              default: N(() => [
                P(y, { class: "col-sm-2" }, {
                  default: N(() => [
                    xS
                  ]),
                  _: 1
                }),
                P(y, { class: "col-sm-10" }, {
                  default: N(() => [
                    S("h6", null, G(v(a).state), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          S("div", null, [
            S("div", DS, [
              AS,
              P(v(Io), {
                class: "dragArea list-group w-full",
                list: v(a).entityTemplateSettings.metadataForms
              }, {
                default: N(() => [
                  (g(!0), T(Z, null, he(v(a).entityTemplateSettings.metadataForms, (k) => (g(), T("div", {
                    key: k.id.toString()
                  }, [
                    P(cf, {
                      model: k
                    }, null, 8, ["model"])
                  ]))), 128))
                ]),
                _: 1
              }, 8, ["list"]),
              S("button", {
                class: "btn btn-primary btn-blue",
                onClick: l
              }, "+ Add")
            ])
          ]),
          S("div", RS, [
            IS,
            P(v(Io), {
              class: "dragArea list-group w-full",
              list: v(a).entityTemplateSettings.dataForms
            }, {
              default: N(() => [
                (g(!0), T(Z, null, he(v(a).entityTemplateSettings.dataForms, (k) => (g(), T("div", {
                  key: k.id.toString()
                }, [
                  P(cf, {
                    model: k,
                    class: "form-field-border form-field red"
                  }, null, 8, ["model"])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"]),
            S("button", {
              class: "btn btn-warning btn-red",
              onClick: c
            }, "+ Add")
          ]),
          v(a).forms ? (g(), T("div", OS, [
            $S,
            S("div", NS, [
              MS,
              S("div", PS, [
                P(v(cl), {
                  model: v(r),
                  "option-source": v(s),
                  forms: v(n).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            S("div", BS, [
              VS,
              S("div", LS, [
                P(v(cl), {
                  model: v(i),
                  "option-source": v(s),
                  forms: v(n).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            S("div", FS, [
              HS,
              S("div", zS, [
                P(v(cl), {
                  model: v(o),
                  "option-source": v(s),
                  forms: v(n).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ])
          ])) : H("", !0)
        ])) : H("", !0)
      ], 64);
    };
  }
});
const gu = /* @__PURE__ */ Ut(US, [["__scopeId", "data-v-669d5b02"]]), jS = (e, t) => e == null ? void 0 : e.data.find((n) => n.formId === t), fo = (e, t) => {
  var n;
  return (n = jS(e, t == null ? void 0 : t.formId)) == null ? void 0 : n.fieldData.find((a) => a.fieldId === (t == null ? void 0 : t.fieldId));
}, fl = (e, t) => {
  var n, a;
  return (a = (n = e == null ? void 0 : e.forms) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.id) === t.formId)) == null ? void 0 : a.fields.find((r) => r.id === (t == null ? void 0 : t.fieldId));
}, WS = (e, t) => {
  df(e, t.entityTemplateSettings.metadataForms, t.forms), df(e, t.entityTemplateSettings.dataForms, t.forms);
}, df = (e, t, n) => {
  t.filter((a) => a.isRequired).forEach((a) => {
    if (e.data.filter((r) => r.formId == a.id).length == 0) {
      const r = n.filter((o) => o.id === a.id)[0], i = Ev(r, "");
      i.id = oe.create().toString(), e.data.push(i);
    }
  });
}, qS = (e, t, n) => {
  var a = t.entityTemplateSettings.titleField, r = e.data.filter((i) => i.formId == (a == null ? void 0 : a.formId))[0].fieldData.filter((i) => i.fieldId == (a == null ? void 0 : a.fieldId))[0];
  return vv(r, n);
}, GS = (e, t, n) => {
  var a = t.entityTemplateSettings.descriptionField, r = e.data.filter((i) => i.formId == (a == null ? void 0 : a.formId))[0].fieldData.filter((i) => i.fieldId == (a == null ? void 0 : a.fieldId))[0];
  return vv(r, n);
}, bi = wn("EntityEditorStore", {
  state: () => ({
    id: null,
    templates: [],
    entityTemplate: null,
    entity: null,
    transientMessageModel: {},
    updatedFileKeys: [],
    entitySearchResult: null,
    storeId: oe.create().toString(),
    apiRoot: null
  }),
  actions: {
    loadTemplates() {
      const t = `${"https://" + this.getApiRoot.split("/")[2]}/api/entity-templates/`;
      fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.templates = n;
      }).catch((n) => {
        console.error("Load Templates API Error:", n);
      });
    },
    createNewEntity() {
      this.entity = {
        id: oe.createEmpty().toString(),
        templateId: oe.createEmpty().toString(),
        entityType: ls.Unknown,
        data: [],
        subjectRelationships: [],
        objectRelationships: [],
        files: [],
        created: new Date(),
        updated: new Date(),
        title: "",
        description: "",
        state: nr.Active
      };
    },
    loadTemplate(e) {
      if (e.toString() === oe.EMPTY)
        return;
      const n = `${"https://" + this.getApiRoot.split("/")[2]}/api/entity-templates/${e}`;
      console.log(n), fetch(n, {
        method: "GET"
      }).then((a) => a.json()).then((a) => {
        this.entityTemplate = a;
      }).catch((a) => {
        console.error("Load Template API Error:", a);
      });
    },
    addFileReference(e, t) {
      var a;
      let n = "";
      (a = this.entity) == null || a.data.forEach((r) => {
        r.fieldData.forEach((i) => {
          var o, s;
          if (i.fieldId.toString() === t.toString()) {
            i.fileReferences || (i.fileReferences = []), n = this.entity.id + "_" + i.id + "_" + i.fieldId, (o = this.updatedFileKeys) == null || o.push(n);
            let l = n + "_" + e.name;
            (s = i.fileReferences) == null || s.push({
              id: oe.create().toString(),
              fileName: l,
              originalFileName: e.name,
              thumbnail: "",
              contentType: e.type,
              size: e.size,
              created: new Date(),
              updated: new Date(),
              fieldId: t.toString()
            });
          }
        });
      });
    },
    saveEntity() {
      var l, c, u, d, f, p;
      const e = ((c = (l = this.entity) == null ? void 0 : l.id) == null ? void 0 : c.toString()) === oe.EMPTY;
      this.entity.title = qS(this.entity, this.entityTemplate, " | "), this.entity.description = GS(this.entity, this.entityTemplate, " | ");
      let t = this.getApiRoot, n = "";
      e ? (console.log("Saving new entity."), ((d = (u = this.entity) == null ? void 0 : u.id) == null ? void 0 : d.toString()) === oe.EMPTY && (this.entity.id = oe.create().toString()), n = "POST") : (console.log("Updating existing entity."), t = `${t}/${(f = this.entity) == null ? void 0 : f.id}`, n = "PUT");
      const a = Ct();
      let r = a.files, i = a.fileKeys;
      var o = new FormData();
      let s = 0;
      r == null || r.forEach((h) => {
        this.addFileReference(h, oe.parse(i[s])), s++;
      }), o.append("value", JSON.stringify(this.entity)), r == null || r.forEach((h) => {
        o.append("files", h);
      }), (p = this.updatedFileKeys) == null || p.forEach((h) => {
        o.append("fileKeys", h);
      }), fetch(t, {
        body: o,
        method: n,
        headers: {
          encType: "multipart/form-data"
        }
      }).then((h) => {
        if (h.ok)
          this.transientMessageModel.message = "The entity saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (e && this.entity && (this.entity.id = oe.EMPTY), this.transientMessageModel.messageClass = "danger", h.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to save the entity";
              break;
            case 404:
              this.transientMessageModel.message = "Entity not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to save the entity";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to save the entity";
              break;
          }
      }).catch((h) => {
        e && this.entity && (this.entity.id = oe.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity API Error:", h);
      });
    },
    loadEntity(e) {
      const t = `${yt.dataRepositoryApiRoot}/api/entities/${e}`;
      fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.entity = n;
      }).catch((n) => {
        console.error("Load Entity API Error:", n);
      });
    },
    loadEntities(e, t, n, a, r) {
      let i = yt.dataRepositoryApiRoot + "/api/entities/" + e + "/" + t + "/" + n + "/" + a + "/" + r;
      fetch(i, {
        method: "GET"
      }).then((o) => o.json()).then((o) => {
        this.entitySearchResult = o;
      }).catch((o) => {
        console.error("Load Entities API Error:", o);
      });
    },
    AddToRelationObject() {
      console.log("add to relation object");
      let e = this.getSelectedEntityIds;
      console.log("selectedIds" + JSON.stringify(e)), e.forEach((t) => {
        var n;
        (n = this.entity) == null || n.subjectRelationships.push({
          subjectEntityId: t,
          subjectEntity: this.entity,
          objectEntityId: t,
          objectEntity: this.entity,
          name: "unlnown",
          order: 1
        });
      }), console.log("after adding: " + JSON.stringify(this.entity));
    },
    setApiRoot(e) {
      this.apiRoot = e;
    }
  },
  getters: {
    titleField: (e) => {
      var a, r, i, o, s;
      const t = (r = (a = e == null ? void 0 : e.entityTemplate) == null ? void 0 : a.entityTemplateSettings) == null ? void 0 : r.titleField;
      return (s = (o = (i = e.entityTemplate) == null ? void 0 : i.forms) == null ? void 0 : o.filter((l) => l.id === (t == null ? void 0 : t.formId))[0]) == null ? void 0 : s.fields.filter((l) => l.id == (t == null ? void 0 : t.fieldId))[0];
    },
    descriptionField: (e) => {
      var a, r, i, o, s;
      const t = (r = (a = e == null ? void 0 : e.entityTemplate) == null ? void 0 : a.entityTemplateSettings) == null ? void 0 : r.descriptionField;
      return (s = (o = (i = e.entityTemplate) == null ? void 0 : i.forms) == null ? void 0 : o.filter((l) => l.id === (t == null ? void 0 : t.formId))[0]) == null ? void 0 : s.fields.filter((l) => l.id == (t == null ? void 0 : t.fieldId))[0];
    },
    mediaField: (e) => {
      var a, r, i, o, s;
      const t = (r = (a = e == null ? void 0 : e.entityTemplate) == null ? void 0 : a.entityTemplateSettings) == null ? void 0 : r.mediaField;
      return (s = (o = (i = e.entityTemplate) == null ? void 0 : i.forms) == null ? void 0 : o.filter((l) => l.id === (t == null ? void 0 : t.formId))[0]) == null ? void 0 : s.fields.filter((l) => l.id == (t == null ? void 0 : t.fieldId))[0];
    },
    getFiles: (e) => Ct().files,
    getSelectedEntityIds: (e) => (console.log("entity editor store id: " + e.storeId), Ts(e.storeId).selectedEntityIds),
    getApiRoot: (e) => e.apiRoot ? e.apiRoot : yt.dataRepositoryApiRoot + "/api/entities"
  }
}), YS = { key: 0 }, KS = ["onUpdate:modelValue"], XS = { class: "col-sm-2" }, kh = /* @__PURE__ */ B({
  __name: "CustomOptions",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var o;
      return t.modelData ? t.modelData : (o = n.formData.fieldData) == null ? void 0 : o.find((s) => s.fieldId == t.model.id);
    }), r = (o) => {
      var s;
      console.log(o), (s = a.value.customOptionValues) == null || s.splice(o, 1);
    }, i = () => {
      a.value.customOptionValues || (a.value.customOptionValues = []), a.value.customOptionValues.push("");
    };
    return (o, s) => {
      const l = ge("font-awesome-icon");
      return v(a) && v(a).customOptionValues ? (g(), T("div", YS, [
        S("div", null, [
          (g(!0), T(Z, null, he(v(a).customOptionValues, (c, u) => (g(), T("span", {
            class: "custom-option",
            key: u
          }, [
            Ue(S("input", {
              type: "text",
              "onUpdate:modelValue": (d) => v(a).customOptionValues[u] = d
            }, null, 8, KS), [
              [To, v(a).customOptionValues[u]]
            ]),
            P(l, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (d) => r(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ]))), 128))
        ]),
        S("div", XS, [
          P(l, {
            icon: "fa-solid fa-circle-plus",
            onClick: s[0] || (s[0] = (c) => i()),
            class: "fa-icon plus add-option"
          })
        ])
      ])) : H("", !0);
    };
  }
}), ZS = ["checked", "onChange"], QS = { key: 0 }, JS = /* @__PURE__ */ B({
  __name: "Checkboxes",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var o;
      return t.modelData ? t.modelData : (o = n.formData.fieldData) == null ? void 0 : o.find((s) => s.fieldId == t.model.id);
    }), r = (o) => {
      var s;
      return (s = a.value.selectedOptionIds) == null ? void 0 : s.includes(o);
    }, i = (o, s) => {
      var l, c, u;
      return s ? (l = a.value.selectedOptionIds) == null ? void 0 : l.push(o) : (u = a.value.selectedOptionIds) == null ? void 0 : u.splice((c = a.value.selectedOptionIds) == null ? void 0 : c.indexOf(o), 1);
    };
    return (o, s) => (g(), T(Z, null, [
      (g(!0), T(Z, null, he(e.model.options, (l) => (g(), T("div", {
        key: l.id,
        class: "option-field"
      }, [
        S("input", {
          type: "checkbox",
          checked: r(l.id),
          onChange: (c) => i(l.id, c.target.checked)
        }, null, 40, ZS),
        de(" " + G(Ya(l, v(n).lang)) + " ", 1),
        l.isExtendedInput ? (g(), T("span", QS)) : H("", !0)
      ]))), 128)),
      P(kh, { model: e.model }, null, 8, ["model"])
    ], 64));
  }
}), eC = { class: "col-sm-8" }, tC = { id: "dataOptions" }, nC = { class: "col-sm-2" }, aC = /* @__PURE__ */ B({
  __name: "DataList",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var s;
      return t.modelData ? t.modelData : (s = n.formData.fieldData) == null ? void 0 : s.find((l) => l.fieldId == t.model.id);
    }), r = (s) => {
      var c, u;
      const l = (u = (c = t.model) == null ? void 0 : c.options) == null ? void 0 : u.filter((d) => d.id === s).at(0);
      return l ? Ya(l, n.lang) : "";
    }, i = (s) => {
      var c, u;
      const l = (u = (c = t.model) == null ? void 0 : c.options) == null ? void 0 : u.filter((d) => Ya(d, n.lang) === s).at(0);
      return l == null ? void 0 : l.id;
    }, o = E({
      get: () => {
        var s, l;
        return r((l = (s = a == null ? void 0 : a.value) == null ? void 0 : s.selectedOptionIds) == null ? void 0 : l.at(0));
      },
      set: (s) => {
        const l = i(s);
        l ? a.value.selectedOptionIds = [l] : a.value.selectedOptionIds = [];
      }
    });
    return (s, l) => {
      const c = ge("b-form-input");
      return g(), T(Z, null, [
        S("div", eC, [
          P(c, {
            list: "dataOptions",
            id: "model.id",
            name: "model.id",
            modelValue: v(o),
            "onUpdate:modelValue": l[0] || (l[0] = (u) => gt(o) ? o.value = u : null)
          }, null, 8, ["modelValue"]),
          S("datalist", tC, [
            (g(!0), T(Z, null, he(e.model.options, (u) => (g(), T("option", {
              key: u.id
            }, G(Ya(u, v(n).lang)), 1))), 128))
          ])
        ]),
        S("div", nC, [
          P(kh, { model: e.model }, null, 8, ["model"])
        ])
      ], 64);
    };
  }
}), rC = { class: "col-sm-3" }, iC = ["value"], oC = /* @__PURE__ */ B({
  __name: "DropDown",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var i;
      return t.modelData ? t.modelData : (i = n.formData.fieldData) == null ? void 0 : i.find((o) => o.fieldId == t.model.id);
    }), r = E({
      get: () => {
        var i;
        return ((i = a == null ? void 0 : a.value) == null ? void 0 : i.selectedOptionIds) && a.value.selectedOptionIds.length > 0 ? a.value.selectedOptionIds[0] : oe.EMPTY;
      },
      set: (i) => a.value.selectedOptionIds = [i]
    });
    return (i, o) => (g(), T("div", rC, [
      Ue(S("select", {
        "onUpdate:modelValue": o[0] || (o[0] = (s) => gt(r) ? r.value = s : null),
        class: "form-select"
      }, [
        (g(!0), T(Z, null, he(e.model.options, (s) => (g(), T("option", {
          key: s.id,
          value: s.id
        }, G(Ya(s, v(n).lang)), 9, iC))), 128))
      ], 512), [
        [er, v(r)]
      ])
    ]));
  }
}), sC = ["value"], lC = /* @__PURE__ */ B({
  __name: "RadioButtons",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var i;
      return t.modelData ? t.modelData : (i = n.formData.fieldData) == null ? void 0 : i.find((o) => o.fieldId == t.model.id);
    }), r = E({
      get: () => {
        var i;
        return ((i = a == null ? void 0 : a.value) == null ? void 0 : i.selectedOptionIds) && a.value.selectedOptionIds.length > 0 ? a.value.selectedOptionIds[0] : oe.EMPTY;
      },
      set: (i) => a.value.selectedOptionIds = [i]
    });
    return (i, o) => (g(!0), T(Z, null, he(e.model.options, (s) => (g(), T("div", {
      key: s.id,
      class: "option-field"
    }, [
      Ue(S("input", {
        type: "radio",
        name: "model.id",
        value: s.id,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => gt(r) ? r.value = l : null)
      }, null, 8, sC), [
        [cv, v(r)]
      ]),
      de(" " + G(Ya(s, v(n).lang)), 1)
    ]))), 128));
  }
}), uC = { key: 0 }, cC = { key: 1 }, dC = { key: 2 }, fC = { key: 3 }, pC = { key: 4 }, vC = { key: 5 }, hC = { key: 6 }, mC = { key: 7 }, xh = /* @__PURE__ */ B({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    decimalPoints: null
  },
  setup(e) {
    const t = e, n = t.decimalPoints ? t.decimalPoints : 2;
    return (a, r) => {
      const i = ge("b-form-input"), o = ge("b-form-textarea");
      return g(), T(Z, null, [
        e.textType === v(Te).ShortAnswer ? (g(), T("div", uC, [
          P(i, {
            modelValue: e.model.value,
            "onUpdate:modelValue": r[0] || (r[0] = (s) => e.model.value = s)
          }, null, 8, ["modelValue"])
        ])) : e.textType === v(Te).Paragraph ? (g(), T("div", cC, [
          P(o, {
            modelValue: e.model.value,
            "onUpdate:modelValue": r[1] || (r[1] = (s) => e.model.value = s),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : e.textType === v(Te).RichText ? (g(), T("div", dC, [
          P(o, {
            modelValue: e.model.value,
            "onUpdate:modelValue": r[2] || (r[2] = (s) => e.model.value = s),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : H("", !0),
        e.textType === v(Te).Email ? (g(), T("div", fC, [
          P(i, {
            modelValue: e.model.value,
            "onUpdate:modelValue": r[3] || (r[3] = (s) => e.model.value = s),
            type: "email"
          }, null, 8, ["modelValue"])
        ])) : H("", !0),
        e.textType === v(Te).Integer ? (g(), T("div", pC, [
          P(i, {
            type: "number",
            step: "1",
            modelValue: e.model.value,
            "onUpdate:modelValue": r[4] || (r[4] = (s) => e.model.value = s)
          }, null, 8, ["modelValue"])
        ])) : H("", !0),
        e.textType === v(Te).Decimal ? (g(), T("div", vC, [
          P(i, {
            type: "number",
            step: Math.pow(10, -v(n)),
            modelValue: e.model.value,
            "onUpdate:modelValue": r[5] || (r[5] = (s) => e.model.value = s)
          }, null, 8, ["step", "modelValue"])
        ])) : H("", !0),
        e.textType === v(Te).Date ? (g(), T("div", hC, [
          P(i, {
            modelValue: e.model.value,
            "onUpdate:modelValue": r[6] || (r[6] = (s) => e.model.value = s),
            type: "date"
          }, null, 8, ["modelValue"])
        ])) : H("", !0),
        e.textType === v(Te).DateTime ? (g(), T("div", mC, [
          P(i, {
            type: "datetime-local",
            modelValue: e.model.value,
            "onUpdate:modelValue": r[7] || (r[7] = (s) => e.model.value = s)
          }, null, 8, ["modelValue"])
        ])) : H("", !0)
      ], 64);
    };
  }
}), gC = /* @__PURE__ */ B({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(e) {
    return (t, n) => (g(!0), T(Z, null, he(e.model.values, (a) => (g(), z(xh, {
      key: a.id,
      model: a,
      "text-type": e.textType
    }, null, 8, ["model", "text-type"]))), 128));
  }
}), yC = ["model"], bC = { class: "col col-sm-11" }, _C = { class: "col col-sm-1" }, EC = { key: 0 }, wC = /* @__PURE__ */ B({
  __name: "MultilingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var o;
      return t.modelData ? t.modelData : (o = n.formData.fieldData) == null ? void 0 : o.find((s) => s.fieldId == t.model.id);
    }), r = () => {
      var o;
      return (o = a.value.multilingualTextValues) == null ? void 0 : o.push(ar(n.lang));
    }, i = (o) => {
      var s;
      console.log(o), (s = a.value.multilingualTextValues) == null || s.splice(o, 1);
    };
    return (o, s) => {
      var c;
      const l = ge("font-awesome-icon");
      return g(), T(Z, null, [
        (g(!0), T(Z, null, he((c = v(a)) == null ? void 0 : c.multilingualTextValues, (u, d) => (g(), T("div", {
          key: u.id,
          model: u,
          class: "row mb-3"
        }, [
          S("div", bC, [
            P(gC, {
              model: u,
              "text-type": e.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          S("div", _C, [
            v(a).multilingualTextValues.length > 1 ? (g(), T("div", EC, [
              P(l, {
                icon: "fa-solid fa-circle-xmark",
                onClick: (f) => i(d),
                class: "fa-icon delete"
              }, null, 8, ["onClick"])
            ])) : H("", !0)
          ])
        ], 8, yC))), 128)),
        S("div", null, [
          P(l, {
            icon: "fa-solid fa-circle-plus",
            onClick: s[0] || (s[0] = (u) => r()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), SC = ["model"], CC = { class: "col col-sm-11" }, TC = {
  key: 0,
  class: "col-sm-1"
}, kC = { class: "col-sm-1" }, xC = /* @__PURE__ */ B({
  __name: "MonolingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = E(() => {
      var o;
      return t.modelData ? t.modelData : (o = n.formData.fieldData) == null ? void 0 : o.find((s) => s.fieldId == t.model.id);
    }), r = () => {
      var o;
      return (o = a.value.monolingualTextValues) == null ? void 0 : o.push(pv(null));
    }, i = (o) => {
      var s;
      (s = a.value.monolingualTextValues) == null || s.splice(o, 1);
    };
    return (o, s) => {
      const l = ge("font-awesome-icon");
      return g(), T(Z, null, [
        (g(!0), T(Z, null, he(v(a).monolingualTextValues, (c, u) => (g(), T("div", {
          key: c.id,
          model: c,
          class: "row mb-3"
        }, [
          S("div", CC, [
            P(xh, {
              model: c,
              "text-type": e.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          v(a).monolingualTextValues.length > 1 ? (g(), T("div", TC, [
            P(l, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (d) => i(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ])) : H("", !0)
        ], 8, SC))), 128)),
        S("div", kC, [
          P(l, {
            icon: "fa-solid fa-circle-plus",
            onClick: s[0] || (s[0] = (c) => r()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), DC = /* @__PURE__ */ S("br", null, null, -1), AC = ["innerHTML"], RC = /* @__PURE__ */ B({
  __name: "InfoSection",
  props: {
    model: null
  },
  setup(e) {
    const t = e, n = Ct(), a = _v(t.model, n.lang);
    return (r, i) => (g(), T("div", null, [
      DC,
      S("div", {
        innerHTML: v(a),
        class: "alert alert-info"
      }, null, 8, AC)
    ]));
  }
}), IC = {
  key: 0,
  class: "alert alert-info"
}, OC = { class: "text-field-label" }, $C = ["data-hover"], NC = { key: 7 }, MC = /* @__PURE__ */ S("br", null, null, -1), po = /* @__PURE__ */ B({
  __name: "Field",
  props: {
    model: null,
    modelData: null
  },
  setup(e) {
    const t = e, n = Ct(), a = bv(t.model, n.lang), r = _v(t.model, n.lang), i = mv(t.model), o = gv(t.model), s = t.model.type === Te.AttachmentField, l = t.model.id.toString(), c = (d) => {
      n.putFile(d.dataTransfer.files, t.model.id);
    }, u = (d) => {
      const f = document.getElementById(d);
      n.putFile(f == null ? void 0 : f.files, t.model.id);
    };
    return (d, f) => {
      const p = ge("font-awesome-icon"), h = ge("b-col"), y = ge("b-row"), w = ge("b-container");
      return g(), z(w, null, {
        default: N(() => [
          P(y, null, {
            default: N(() => [
              e.model.type === v(Te).InfoSection ? (g(), T("div", IC, [
                S("h3", OC, G(v(a)), 1)
              ])) : (g(), z(h, {
                key: 1,
                class: "col-sm-2"
              }, {
                default: N(() => [
                  de(G(v(a)) + " ", 1),
                  v(r) ? (g(), T("span", {
                    key: 0,
                    class: "hovertext",
                    "data-hover": v(r)
                  }, [
                    P(p, {
                      icon: "fas fa-question-circle",
                      class: "fas fa-question-circle"
                    })
                  ], 8, $C)) : H("", !0),
                  de(" : ")
                ]),
                _: 1
              })),
              P(h, { class: "col-sm-10" }, {
                default: N(() => [
                  e.model.type === v(Te).Checkboxes ? (g(), z(JS, {
                    key: 0,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  e.model.type === v(Te).DataList ? (g(), z(aC, {
                    key: 1,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  e.model.type === v(Te).DropDown ? (g(), z(oC, {
                    key: 2,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  e.model.type === v(Te).RadioButtons ? (g(), z(lC, {
                    key: 3,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  v(i) ? (g(), z(wC, {
                    key: 4,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  v(o) ? (g(), z(xC, {
                    key: 5,
                    model: e.model,
                    modelData: e.modelData
                  }, null, 8, ["model", "modelData"])) : H("", !0),
                  e.model.type === v(Te).InfoSection ? (g(), z(RC, {
                    key: 6,
                    model: e.model
                  }, null, 8, ["model"])) : H("", !0),
                  v(s) ? (g(), T("div", NC, [
                    P(hv, {
                      model: e.model,
                      elementId: v(l),
                      onDrop: c,
                      onChange: f[0] || (f[0] = (m) => u(v(l)))
                    }, null, 8, ["model", "elementId"])
                  ])) : H("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          MC
        ]),
        _: 1
      });
    };
  }
}), PC = { class: "pt-2 mt-2" }, BC = { class: "row" }, VC = { class: "col-sm-7" }, LC = { class: "row mt-2" }, FC = /* @__PURE__ */ S("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ S("label", null, "EntityType:")
], -1), HC = { class: "col-sm-10" }, zC = ["value"], UC = { key: 1 }, jC = { class: "row mt-2" }, WC = /* @__PURE__ */ S("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ S("label", null, "Template:")
], -1), qC = { class: "col-sm-10" }, GC = ["value"], YC = { key: 1 }, KC = /* @__PURE__ */ S("br", null, null, -1), XC = /* @__PURE__ */ S("h5", null, "Form Fields", -1), ZC = { key: 3 }, QC = { class: "col-sm-5" }, JC = /* @__PURE__ */ S("legend", null, " Right side ", -1), eT = { class: "col-sm-8" }, tT = /* @__PURE__ */ S("div", { class: "col-sm-4" }, [
  /* @__PURE__ */ S("img", { src: "#" })
], -1), nT = /* @__PURE__ */ B({
  __name: "entity-summary-editor",
  setup(e) {
    var p;
    te(!1);
    const t = bi(), { entity: n } = is(t);
    $e(() => {
      var h;
      return (h = n.value) == null ? void 0 : h.templateId;
    }, async (h) => {
      t.loadTemplate(h);
    }), t.loadTemplate((p = n.value) == null ? void 0 : p.templateId);
    const a = E(() => t.entity.id.toString() === oe.EMPTY), r = E(() => t.templates), i = E(() => t.entityTemplate), o = Object.values(ls), s = E(() => {
      var h;
      return fl(i.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.titleField);
    }), l = E(() => {
      var h;
      return fo(n.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.titleField);
    }), c = E(() => {
      var h;
      return fl(i.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.descriptionField);
    }), u = E(() => {
      var h;
      return fo(n.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.descriptionField);
    }), d = E(() => {
      var h;
      return fl(i.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.mediaField);
    }), f = E(() => {
      var h;
      return fo(n.value, (h = i.value) == null ? void 0 : h.entityTemplateSettings.mediaField);
    });
    return $e(() => i.value, async (h) => {
      WS(n.value, h);
    }), (h, y) => {
      var w, m, _, k, x, D, A, L, $, O, j, X, Q, re, J, Ce, ue, ie, Re;
      return g(), T("div", PC, [
        S("div", BC, [
          S("fieldset", VC, [
            S("div", LC, [
              FC,
              S("div", HC, [
                v(a) ? Ue((g(), T("select", {
                  key: 0,
                  "onUpdate:modelValue": y[0] || (y[0] = (Ee) => v(n).entityType = Ee),
                  class: "form-select"
                }, [
                  (g(!0), T(Z, null, he(v(o), (Ee) => (g(), T("option", {
                    key: Ee,
                    value: Ee
                  }, G(Ee), 9, zC))), 128))
                ], 512)), [
                  [er, v(n).entityType]
                ]) : (g(), T("span", UC, G((w = v(n)) == null ? void 0 : w.entityType), 1))
              ])
            ]),
            S("div", jC, [
              WC,
              S("div", qC, [
                v(a) ? Ue((g(), T("select", {
                  key: 0,
                  "onUpdate:modelValue": y[1] || (y[1] = (Ee) => v(n).templateId = Ee),
                  class: "form-select"
                }, [
                  (g(!0), T(Z, null, he(v(r), (Ee) => {
                    var Ie;
                    return g(), T("option", {
                      key: Ee.id.toString(),
                      value: (Ie = Ee.id) == null ? void 0 : Ie.toString()
                    }, G(Ee.name), 9, GC);
                  }), 128))
                ], 512)), [
                  [er, v(n).templateId]
                ]) : (g(), T("span", YC, G((m = v(i)) == null ? void 0 : m.name), 1))
              ])
            ]),
            KC,
            XC,
            v(t).titleField ? (g(), z(po, {
              key: 0,
              model: v(s),
              "model-data": v(l)
            }, null, 8, ["model", "model-data"])) : H("", !0),
            v(t).descriptionField ? (g(), z(po, {
              key: 1,
              model: v(c),
              "model-data": v(u)
            }, null, 8, ["model", "model-data"])) : H("", !0),
            v(t).mediaField ? (g(), z(po, {
              key: 2,
              model: v(d),
              "model-data": v(f)
            }, null, 8, ["model", "model-data"])) : H("", !0),
            v(t).mediaField && ((k = (_ = v(f)) == null ? void 0 : _.fileReferences) == null ? void 0 : k.length) > 0 ? (g(), T("div", ZC, [
              (g(!0), T(Z, null, he((x = v(f)) == null ? void 0 : x.fileReferences, (Ee) => (g(), T("div", {
                key: Ee.id
              }, [
                S("div", null, G(Ee.originalFileName), 1)
              ]))), 128))
            ])) : H("", !0)
          ]),
          S("fieldset", QC, [
            JC,
            S("div", eT, [
              S("div", null, G((L = (A = (D = v(s)) == null ? void 0 : D.title) == null ? void 0 : A.values[0]) == null ? void 0 : L.value) + ": " + G((j = (O = ($ = v(l)) == null ? void 0 : $.multilingualTextValues[0]) == null ? void 0 : O.values[0]) == null ? void 0 : j.value), 1),
              S("div", null, G((re = (Q = (X = v(c)) == null ? void 0 : X.title) == null ? void 0 : Q.values[0]) == null ? void 0 : re.value) + ": " + G((ue = (Ce = (J = v(u)) == null ? void 0 : J.multilingualTextValues[0]) == null ? void 0 : Ce.values[0]) == null ? void 0 : ue.value), 1),
              S("div", null, G((Re = (ie = v(f)) == null ? void 0 : ie.fileReferences[0]) == null ? void 0 : Re.originalFileName), 1)
            ]),
            tT
          ])
        ])
      ]);
    };
  }
}), aT = /* @__PURE__ */ B({
  __name: "Form",
  props: {
    model: null,
    entity: null
  },
  setup(e) {
    const t = e, n = (a) => fo(t.entity, { formId: t.model.id, fieldId: a });
    return (a, r) => {
      var i;
      return g(!0), T(Z, null, he((i = e.model) == null ? void 0 : i.fields, (o) => (g(), z(po, {
        key: o.id,
        model: o,
        modelData: n(o.id)
      }, null, 8, ["model", "modelData"]))), 128);
    };
  }
}), rT = { key: 0 }, iT = ["onClick"], ff = /* @__PURE__ */ B({
  __name: "FormList",
  props: {
    formEntries: null,
    entity: null
  },
  setup(e) {
    var i;
    const t = e, n = bi(), a = te((i = t.formEntries[0]) == null ? void 0 : i.id.toString()), r = E(() => {
      var o, s;
      return (s = (o = n.entityTemplate) == null ? void 0 : o.forms) == null ? void 0 : s.find((l) => l.id.toString() === a.value);
    });
    return (o, s) => e.formEntries ? (g(), T("div", rT, [
      (g(!0), T(Z, null, he(e.formEntries, (l) => (g(), T("span", {
        key: l.id.toString()
      }, [
        S("a", {
          href: "#",
          onClick: (c) => a.value = l.id
        }, G(l.name) + " | ", 9, iT)
      ]))), 128)),
      v(r) ? (g(), z(aT, {
        key: 0,
        model: v(r),
        entity: e.entity
      }, null, 8, ["model", "entity"])) : H("", !0)
    ])) : H("", !0);
  }
}), oT = { class: "form-field-border" }, sT = { key: 0 }, lT = { class: "form-field-border" }, pf = /* @__PURE__ */ B({
  __name: "EntityAssociationPanel",
  props: {
    entity: null,
    relationshipType: null,
    panelTitle: null
  },
  setup(e) {
    const t = e, n = bi(), { entity: a, storeId: r } = is(n);
    E(() => {
      var o;
      return (o = t.entity) == null ? void 0 : o.subjectRelationships.filter((s) => s.name == t.relationshipType);
    });
    const i = () => {
      n.AddToRelationObject();
    };
    return (o, s) => {
      const l = ge("b-col"), c = ge("b-row"), u = ge("font-awesome-icon");
      return g(), T(Z, null, [
        P(c, null, {
          default: N(() => [
            P(l, { class: "col-sm-5" }, {
              default: N(() => [
                S("h6", null, G(e.relationshipType), 1)
              ]),
              _: 1
            }),
            P(l, { class: "col-sm-2" }),
            P(l, { class: "col-sm-5" }, {
              default: N(() => [
                S("h6", null, G(e.panelTitle), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        P(c, null, {
          default: N(() => [
            P(l, { class: "col-sm-5" }, {
              default: N(() => [
                S("div", oT, [
                  v(a).subjectRelationships ? (g(), T("div", sT, [
                    (g(!0), T(Z, null, he(v(a).subjectRelationships, (d) => (g(), T("div", {
                      key: d.subjectEntityId
                    }, G(d.subjectEntityId), 1))), 128))
                  ])) : H("", !0)
                ])
              ]),
              _: 1
            }),
            P(l, { class: "col-sm-2" }, {
              default: N(() => [
                P(c, null, {
                  default: N(() => [
                    P(l, { class: "col-sm-4" }),
                    P(l, { class: "col-sm-4" }, {
                      default: N(() => [
                        S("button", {
                          class: "btn btn-primary",
                          onClick: i
                        }, [
                          P(u, { icon: "fa-solid fa-arrow-left" })
                        ])
                      ]),
                      _: 1
                    }),
                    P(l, { class: "col-sm-4" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            P(l, { class: "col-sm-5" }, {
              default: N(() => [
                S("div", lT, [
                  P(v(bS), {
                    storeId: v(r).toString(),
                    entityType: v(ls).Item
                  }, null, 8, ["storeId", "entityType"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), uT = { class: "control" }, cT = { class: "form-field-border" }, dT = { key: 1 }, fT = { key: 2 }, pT = { key: 3 }, vT = { key: 4 }, hT = { key: 5 }, mT = /* @__PURE__ */ B({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(e) {
    const t = e, n = te("Member of"), a = te("Collections"), r = te("Relationship"), i = te("Items"), o = bi();
    t.apiRoot && o.setApiRoot(t.apiRoot);
    const s = E(() => o.entityTemplate);
    let l = te("summary");
    const u = Cs().params.id;
    je(() => {
      u ? (console.log("entity Id: " + u.toString()), o.loadEntity(u)) : (console.log("load empty template"), o.loadTemplates());
    }), E(() => o.templates);
    const d = () => {
      o.createNewEntity();
    };
    let f = te(!0);
    u && (o.loadEntity(u), f.value = !1);
    const p = E(() => o.entity), h = E(() => {
      var _;
      return (_ = o.entityTemplate) == null ? void 0 : _.entityTemplateSettings.metadataForms;
    }), y = E(() => {
      var _;
      return (_ = o.entityTemplate) == null ? void 0 : _.entityTemplateSettings.dataForms;
    }), w = () => {
      o.saveEntity(), f.value = !1;
    }, m = E(() => o.getFiles);
    return je(() => {
      d();
    }), (_, k) => {
      const x = ge("b-col"), D = ge("b-row");
      return g(), T(Z, null, [
        P(us, {
          model: v(o).transientMessageModel
        }, null, 8, ["model"]),
        S("div", uT, [
          S("button", {
            class: "btn btn-success",
            onClick: k[0] || (k[0] = (A) => w())
          }, "Save")
        ]),
        S("div", cT, [
          v(s) ? (g(), z(D, { key: 0 }, {
            default: N(() => [
              P(x, {
                class: "btn-group",
                role: "group",
                id: "toolBtns"
              }, {
                default: N(() => [
                  S("button", {
                    class: W(["pannel-buttons", { active: v(l) === "summary" }]),
                    onClick: k[1] || (k[1] = (A) => gt(l) ? l.value = "summary" : l = "summary")
                  }, "Summary", 2),
                  S("button", {
                    class: W(["pannel-buttons", { active: v(l) === "data" }]),
                    onClick: k[2] || (k[2] = (A) => gt(l) ? l.value = "data" : l = "data")
                  }, "Data", 2),
                  S("button", {
                    class: W(["pannel-buttons", { active: v(l) === "metadata" }]),
                    onClick: k[3] || (k[3] = (A) => gt(l) ? l.value = "metadata" : l = "metadata")
                  }, "Metadata", 2),
                  S("button", {
                    class: W(["pannel-buttons", { active: v(l) === "collections" }]),
                    onClick: k[4] || (k[4] = (A) => gt(l) ? l.value = "collections" : l = "collections")
                  }, "Collection(s)", 2),
                  S("button", {
                    class: W(["pannel-buttons", { active: v(l) === "related" }]),
                    onClick: k[5] || (k[5] = (A) => gt(l) ? l.value = "related" : l = "related")
                  }, "Related", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : H("", !0),
          v(l) === "summary" ? (g(), T("div", dT, [
            v(p) !== null ? (g(), z(nT, { key: 0 })) : H("", !0),
            de("Summary ")
          ])) : H("", !0),
          v(l) === "data" ? (g(), T("div", fT, [
            P(ff, {
              "form-entries": v(y),
              entity: v(p)
            }, null, 8, ["form-entries", "entity"])
          ])) : H("", !0),
          v(l) === "metadata" ? (g(), T("div", pT, [
            P(ff, {
              "form-entries": v(h),
              entity: v(p)
            }, null, 8, ["form-entries", "entity"])
          ])) : H("", !0),
          v(l) === "collections" ? (g(), T("div", vT, [
            P(pf, {
              entity: v(p),
              relationshipType: n.value,
              panelTitle: a.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : H("", !0),
          v(l) === "related" ? (g(), T("div", hT, [
            P(pf, {
              entity: v(p),
              relationshipType: r.value,
              panelTitle: i.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : H("", !0)
        ]),
        (g(!0), T(Z, null, he(v(m), (A) => (g(), T("div", {
          key: A.name
        }, G(A.name), 1))), 128))
      ], 64);
    };
  }
});
const oi = /* @__PURE__ */ Ut(mT, [["__scopeId", "data-v-685bad7e"]]), ZF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormModels: Jy,
  FormBuilder: mu,
  useFormBuilderStore: Er,
  FormSubmission: Iw,
  useFormSubmissionStore: Ct,
  Login: Mw,
  useLoginStore: wh,
  WorkflowBuilder: Xw,
  useWorkflowBuilderStore: Sh,
  EntityTemplateBuilder: gu,
  useEntityTemplateBuilderStore: vc,
  EntityEditor: oi,
  useEntityEditorStore: bi
}, Symbol.toStringTag, { value: "Module" })), gT = [
  {
    path: "/",
    name: "List",
    component: () => import("./List.28d773b3.js")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("./Create.ff22b029.js")
  },
  {
    path: "/read/:id",
    name: "Read",
    component: () => import("./Read.b7cb0174.js")
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./Update.53e3f42d.js")
  },
  {
    path: "/delete/:id",
    name: "Delete",
    component: () => import("./Delete.e859fefc.js")
  }
], ks = yw({
  history: N1(),
  routes: gT
}), yT = wn("CRUDManagerStore", {
  state: () => ({
    entries: {},
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    loadEntries(e) {
      const t = `${e}`;
      console.log("LoadApi", t), fetch(t, {
        method: "GET"
      }).then((n) => n.json()).then((n) => {
        this.entries = n;
      }).catch((n) => {
        console.error("Listing entities API Error:", n);
      });
    },
    deleteObject(e, t) {
      const n = `${e}`;
      console.log("api", n), fetch(n, {
        method: "DELETE"
      }).then((a) => {
        if (a.ok) {
          let r = this.entries.findIndex((i) => i.id === t);
          this.entries.splice(r, 1), this.transientMessageModel.message = "The entity deleted successfully", this.transientMessageModel.messageClass = "success";
        } else
          switch (this.transientMessageModel.messageClass = "danger", a.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to delete the entity";
              break;
            case 404:
              this.transientMessageModel.message = "Entity not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to delete the entity";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to delete the entity";
              break;
          }
      }).catch((a) => {
        this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Delete entities API Error:", a);
      });
    },
    changeStatus(e, t, n) {
      console.log("change state started");
      const a = `${e}`;
      console.log("api", a), fetch(a, {
        body: JSON.stringify(n),
        method: "POST",
        headers: {
          encType: "multipart/form-data",
          "Content-Type": "application/json"
        }
      }).then((r) => {
        if (r.ok)
          this.transientMessageModel.message = "The entity status changed successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (this.transientMessageModel.messageClass = "danger", r.status) {
            case 400:
              this.transientMessageModel.message = "Bad request. Failed to change state from entity";
              break;
            case 404:
              this.transientMessageModel.message = "Entity not found";
              break;
            case 500:
              this.transientMessageModel.message = "An internal server error occurred. Failed to change state from entity";
              break;
            default:
              this.transientMessageModel.message = "Unknown error occured. Failed to change state from entity";
              break;
          }
      }).catch((r) => {
        this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Change State API Error:", r);
      });
    }
  }
}), bT = { class: "m-2" }, _T = { class: "header" }, xs = /* @__PURE__ */ B({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(e) {
    const t = e, n = yT(), a = E(() => t.apiRoot);
    return je(() => {
      n.apiRoot = a.value, n.loadEntries(a == null ? void 0 : a.value);
    }), (r, i) => {
      const o = ge("router-link"), s = ge("router-view");
      return g(), T(Z, null, [
        P(us, {
          model: v(n).transientMessageModel
        }, null, 8, ["model"]),
        S("div", bT, [
          S("div", _T, [
            P(o, {
              to: "/",
              class: "navigation-menu-box"
            }, {
              default: N(() => [
                de("List")
              ]),
              _: 1
            }),
            de(" | "),
            P(o, {
              to: "/create",
              class: "navigation-menu-box"
            }, {
              default: N(() => [
                de("Create")
              ]),
              _: 1
            })
          ]),
          P(s, null, {
            default: N(({ Component: l, route: c }) => [
              (g(), z(ce(l), null, {
                "object-type": N(() => [
                  F(r.$slots, "object-type")
                ]),
                "list-entry-delegate": N(() => [
                  F(r.$slots, "list-entry-delegate")
                ]),
                "create-delegate": N(() => [
                  F(r.$slots, "create-delegate")
                ]),
                "read-delegate": N(() => [
                  F(r.$slots, "read-delegate")
                ]),
                "update-delegate": N(() => [
                  F(r.$slots, "update-delegate")
                ]),
                "delete-delegate": N(() => [
                  F(r.$slots, "delete-delegate")
                ]),
                _: 2
              }, 1024))
            ]),
            _: 3
          })
        ])
      ], 64);
    };
  }
}), ET = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(e) {
    const t = e, n = E(() => (t.dataAttributes ? t.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/collections");
    return (a, r) => (g(), z(xs, { "api-root": v(n) }, {
      "object-type": N(() => [
        de("Collection")
      ]),
      "create-delegate": N(() => [
        P(v(oi), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "read-delegate": N(() => [
        de("ReadCollectionComponent")
      ]),
      "update-delegate": N(() => [
        P(v(oi), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": N(() => [
        de("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), wT = os(), ST = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: wT,
  router: ks,
  App: ET
}, Symbol.toStringTag, { value: "Module" })), CT = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(e) {
    const t = e, n = E(() => (t.dataAttributes ? t.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/items");
    return (a, r) => (g(), z(xs, { "api-root": v(n) }, {
      "object-type": N(() => [
        de("Item")
      ]),
      "create-delegate": N(() => [
        P(v(oi), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "read-delegate": N(() => [
        de("ReadItemComponent")
      ]),
      "update-delegate": N(() => [
        P(v(oi), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": N(() => [
        de("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), TT = os(), kT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: TT,
  router: ks,
  App: CT
}, Symbol.toStringTag, { value: "Module" })), xT = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(e) {
    const t = e, n = E(() => (t.dataAttributes ? t.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/entity-templates");
    return Cs().params.id, (r, i) => (g(), z(xs, { "api-root": v(n) }, {
      "object-type": N(() => [
        de("Entity Template")
      ]),
      "create-delegate": N(() => [
        P(v(gu), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "read-delegate": N(() => [
        de("ReadEntityTemplateComponent")
      ]),
      "update-delegate": N(() => [
        P(v(gu), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": N(() => [
        de("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), DT = os(), AT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: DT,
  router: ks,
  App: xT
}, Symbol.toStringTag, { value: "Module" })), RT = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(e) {
    const t = e, n = E(() => (t.dataAttributes ? t.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/forms");
    return (a, r) => (g(), z(xs, { "api-root": v(n) }, {
      "object-type": N(() => [
        de("Form Template")
      ]),
      "create-delegate": N(() => [
        P(v(mu), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "read-delegate": N(() => [
        de("ReadFormComponent")
      ]),
      "update-delegate": N(() => [
        P(v(mu), { "api-root": v(n) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": N(() => [
        de("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), IT = os(), OT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: IT,
  router: ks,
  App: RT
}, Symbol.toStringTag, { value: "Module" }));
var yu = function(e, t) {
  return yu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
    n.__proto__ = a;
  } || function(n, a) {
    for (var r in a)
      Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  }, yu(e, t);
};
function fe(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  yu(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var R = function() {
  return R = Object.assign || function(t) {
    for (var n, a = 1, r = arguments.length; a < r; a++) {
      n = arguments[a];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, R.apply(this, arguments);
};
function Ke(e, t, n) {
  if (n || arguments.length === 2)
    for (var a = 0, r = t.length, i; a < r; a++)
      (i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), i[a] = t[a]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ds, le, Dh, qr, vf, Ah, Vo = {}, Rh = [], $T = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function Mn(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ih(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function zn(e, t, n) {
  var a, r, i, o = {};
  for (i in t)
    i == "key" ? a = t[i] : i == "ref" ? r = t[i] : o[i] = t[i];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ds.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      o[i] === void 0 && (o[i] = e.defaultProps[i]);
  return vo(e, o, a, r, null);
}
function vo(e, t, n, a, r) {
  var i = { type: e, props: t, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r == null ? ++Dh : r };
  return r == null && le.vnode != null && le.vnode(i), i;
}
function NT() {
  return { current: null };
}
function ma(e) {
  return e.children;
}
function Lt(e, t) {
  this.props = e, this.context = t;
}
function si(e, t) {
  if (t == null)
    return e.__ ? si(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? si(e) : null;
}
function Oh(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Oh(e);
  }
}
function bu(e) {
  (!e.__d && (e.__d = !0) && qr.push(e) && !Lo.__r++ || vf !== le.debounceRendering) && ((vf = le.debounceRendering) || setTimeout)(Lo);
}
function Lo() {
  for (var e; Lo.__r = qr.length; )
    e = qr.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), qr = [], e.some(function(t) {
      var n, a, r, i, o, s;
      t.__d && (o = (i = (n = t).__v).__e, (s = n.__P) && (a = [], (r = Mn({}, i)).__v = i.__v + 1, hc(s, i, r, n.__n, s.ownerSVGElement !== void 0, i.__h != null ? [o] : null, a, o == null ? si(i) : o, i.__h), Ph(a, i), i.__e != o && Oh(i)));
    });
}
function $h(e, t, n, a, r, i, o, s, l, c) {
  var u, d, f, p, h, y, w, m = a && a.__k || Rh, _ = m.length;
  for (n.__k = [], u = 0; u < t.length; u++)
    if ((p = n.__k[u] = (p = t[u]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? vo(null, p, null, null, p) : Array.isArray(p) ? vo(ma, { children: p }, null, null, null) : p.__b > 0 ? vo(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
      if (p.__ = n, p.__b = n.__b + 1, (f = m[u]) === null || f && p.key == f.key && p.type === f.type)
        m[u] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((f = m[d]) && p.key == f.key && p.type === f.type) {
            m[d] = void 0;
            break;
          }
          f = null;
        }
      hc(e, p, f = f || Vo, r, i, o, s, l, c), h = p.__e, (d = p.ref) && f.ref != d && (w || (w = []), f.ref && w.push(f.ref, null, p), w.push(d, p.__c || h, p)), h != null ? (y == null && (y = h), typeof p.type == "function" && p.__k === f.__k ? p.__d = l = Nh(p, l, e) : l = Mh(e, p, f, m, h, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = si(f));
    }
  for (n.__e = y, u = _; u--; )
    m[u] != null && Vh(m[u], m[u]);
  if (w)
    for (u = 0; u < w.length; u++)
      Bh(w[u], w[++u], w[++u]);
}
function Nh(e, t, n) {
  for (var a, r = e.__k, i = 0; r && i < r.length; i++)
    (a = r[i]) && (a.__ = e, t = typeof a.type == "function" ? Nh(a, t, n) : Mh(n, a, a, r, a.__e, t));
  return t;
}
function Fo(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    Fo(n, t);
  }) : t.push(e)), t;
}
function Mh(e, t, n, a, r, i) {
  var o, s, l;
  if (t.__d !== void 0)
    o = t.__d, t.__d = void 0;
  else if (n == null || r != i || r.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(r), o = null;
      else {
        for (s = i, l = 0; (s = s.nextSibling) && l < a.length; l += 2)
          if (s == r)
            break e;
        e.insertBefore(r, i), o = i;
      }
  return o !== void 0 ? o : r.nextSibling;
}
function MT(e, t, n, a, r) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || Ho(e, i, null, n[i], a);
  for (i in t)
    r && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === t[i] || Ho(e, i, t[i], n[i], a);
}
function hf(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || $T.test(t) ? n : n + "px";
}
function Ho(e, t, n, a, r) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof a == "string" && (e.style.cssText = a = ""), a)
          for (t in a)
            n && t in n || hf(e.style, t, "");
        if (n)
          for (t in n)
            a && n[t] === a[t] || hf(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? a || e.addEventListener(t, i ? gf : mf, i) : e.removeEventListener(t, i ? gf : mf, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n == null ? "" : n;
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function mf(e) {
  this.l[e.type + !1](le.event ? le.event(e) : e);
}
function gf(e) {
  this.l[e.type + !0](le.event ? le.event(e) : e);
}
function hc(e, t, n, a, r, i, o, s, l) {
  var c, u, d, f, p, h, y, w, m, _, k, x, D, A, L, $ = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (c = le.__b) && c(t);
  try {
    e:
      if (typeof $ == "function") {
        if (w = t.props, m = (c = $.contextType) && a[c.__c], _ = c ? m ? m.props.value : c.__ : a, n.__c ? y = (u = t.__c = n.__c).__ = u.__E : ("prototype" in $ && $.prototype.render ? t.__c = u = new $(w, _) : (t.__c = u = new Lt(w, _), u.constructor = $, u.render = BT), m && m.sub(u), u.props = w, u.state || (u.state = {}), u.context = _, u.__n = a, d = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), $.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Mn({}, u.__s)), Mn(u.__s, $.getDerivedStateFromProps(w, u.__s))), f = u.props, p = u.state, d)
          $.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && w !== f && u.componentWillReceiveProps != null && u.componentWillReceiveProps(w, _), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(w, u.__s, _) === !1 || t.__v === n.__v) {
            for (u.props = w, u.state = u.__s, t.__v !== n.__v && (u.__d = !1), u.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), k = 0; k < u._sb.length; k++)
              u.__h.push(u._sb[k]);
            u._sb = [], u.__h.length && o.push(u);
            break e;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(w, u.__s, _), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(f, p, h);
          });
        }
        if (u.context = _, u.props = w, u.__v = t, u.__P = e, x = le.__r, D = 0, "prototype" in $ && $.prototype.render) {
          for (u.state = u.__s, u.__d = !1, x && x(t), c = u.render(u.props, u.state, u.context), A = 0; A < u._sb.length; A++)
            u.__h.push(u._sb[A]);
          u._sb = [];
        } else
          do
            u.__d = !1, x && x(t), c = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++D < 25);
        u.state = u.__s, u.getChildContext != null && (a = Mn(Mn({}, a), u.getChildContext())), d || u.getSnapshotBeforeUpdate == null || (h = u.getSnapshotBeforeUpdate(f, p)), L = c != null && c.type === ma && c.key == null ? c.props.children : c, $h(e, Array.isArray(L) ? L : [L], t, n, a, r, i, o, s, l), u.base = t.__e, t.__h = null, u.__h.length && o.push(u), y && (u.__E = u.__ = null), u.__e = !1;
      } else
        i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = PT(n.__e, t, n, a, r, i, o, l);
    (c = le.diffed) && c(t);
  } catch (O) {
    t.__v = null, (l || i != null) && (t.__e = s, t.__h = !!l, i[i.indexOf(s)] = null), le.__e(O, t, n);
  }
}
function Ph(e, t) {
  le.__c && le.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      le.__e(a, n.__v);
    }
  });
}
function PT(e, t, n, a, r, i, o, s) {
  var l, c, u, d = n.props, f = t.props, p = t.type, h = 0;
  if (p === "svg" && (r = !0), i != null) {
    for (; h < i.length; h++)
      if ((l = i[h]) && "setAttribute" in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
        e = l, i[h] = null;
        break;
      }
  }
  if (e == null) {
    if (p === null)
      return document.createTextNode(f);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, f.is && f), i = null, s = !1;
  }
  if (p === null)
    d === f || s && e.data === f || (e.data = f);
  else {
    if (i = i && Ds.call(e.childNodes), c = (d = n.props || Vo).dangerouslySetInnerHTML, u = f.dangerouslySetInnerHTML, !s) {
      if (i != null)
        for (d = {}, h = 0; h < e.attributes.length; h++)
          d[e.attributes[h].name] = e.attributes[h].value;
      (u || c) && (u && (c && u.__html == c.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""));
    }
    if (MT(e, f, d, r, s), u)
      t.__k = [];
    else if (h = t.props.children, $h(e, Array.isArray(h) ? h : [h], t, n, a, r && p !== "foreignObject", i, o, i ? i[0] : n.__k && si(n, 0), s), i != null)
      for (h = i.length; h--; )
        i[h] != null && Ih(i[h]);
    s || ("value" in f && (h = f.value) !== void 0 && (h !== e.value || p === "progress" && !h || p === "option" && h !== d.value) && Ho(e, "value", h, d.value, !1), "checked" in f && (h = f.checked) !== void 0 && h !== e.checked && Ho(e, "checked", h, d.checked, !1));
  }
  return e;
}
function Bh(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (a) {
    le.__e(a, n);
  }
}
function Vh(e, t, n) {
  var a, r;
  if (le.unmount && le.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || Bh(a, null, t)), (a = e.__c) != null) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (i) {
        le.__e(i, t);
      }
    a.base = a.__P = null, e.__c = void 0;
  }
  if (a = e.__k)
    for (r = 0; r < a.length; r++)
      a[r] && Vh(a[r], t, n || typeof e.type != "function");
  n || e.__e == null || Ih(e.__e), e.__ = e.__e = e.__d = void 0;
}
function BT(e, t, n) {
  return this.constructor(e, n);
}
function li(e, t, n) {
  var a, r, i;
  le.__ && le.__(e, t), r = (a = typeof n == "function") ? null : n && n.__k || t.__k, i = [], hc(t, e = (!a && n || t).__k = zn(ma, null, [e]), r || Vo, Vo, t.ownerSVGElement !== void 0, !a && n ? [n] : r ? null : t.firstChild ? Ds.call(t.childNodes) : null, i, !a && n ? n : r ? r.__e : t.firstChild, a), Ph(i, e);
}
function VT(e, t) {
  var n = { __c: t = "__cC" + Ah++, __: e, Consumer: function(a, r) {
    return a.children(r);
  }, Provider: function(a) {
    var r, i;
    return this.getChildContext || (r = [], (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && r.some(bu);
    }, this.sub = function(o) {
      r.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        r.splice(r.indexOf(o), 1), s && s.call(o);
      };
    }), a.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Ds = Rh.slice, le = { __e: function(e, t, n, a) {
  for (var r, i, o; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), o = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, a || {}), o = r.__d), o)
          return r.__E = r;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Dh = 0, Lt.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Mn({}, this.state), typeof e == "function" && (e = e(Mn({}, n), this.props)), e && Mn(n, e), e != null && this.__v && (t && this._sb.push(t), bu(this));
}, Lt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), bu(this));
}, Lt.prototype.render = ma, qr = [], Lo.__r = 0, Ah = 0;
var Yt, pl, yf, Lh = [], vl = [], bf = le.__b, _f = le.__r, Ef = le.diffed, wf = le.__c, Sf = le.unmount;
function LT() {
  for (var e; e = Lh.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(ho), e.__H.__h.forEach(_u), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], le.__e(t, e.__v);
      }
}
le.__b = function(e) {
  typeof e.type != "function" || e.__m || e.__ === null ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0), Yt = null, bf && bf(e);
}, le.__r = function(e) {
  _f && _f(e);
  var t = (Yt = e.__c).__H;
  t && (pl === Yt ? (t.__h = [], Yt.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = vl, n.__N = n.i = void 0;
  })) : (t.__h.forEach(ho), t.__h.forEach(_u), t.__h = [])), pl = Yt;
}, le.diffed = function(e) {
  Ef && Ef(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Lh.push(t) !== 1 && yf === le.requestAnimationFrame || ((yf = le.requestAnimationFrame) || FT)(LT)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== vl && (n.__ = n.__V), n.i = void 0, n.__V = vl;
  })), pl = Yt = null;
}, le.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(ho), n.__h = n.__h.filter(function(a) {
        return !a.__ || _u(a);
      });
    } catch (a) {
      t.some(function(r) {
        r.__h && (r.__h = []);
      }), t = [], le.__e(a, n.__v);
    }
  }), wf && wf(e, t);
}, le.unmount = function(e) {
  Sf && Sf(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      ho(a);
    } catch (r) {
      t = r;
    }
  }), n.__H = void 0, t && le.__e(t, n.__v));
};
var Cf = typeof requestAnimationFrame == "function";
function FT(e) {
  var t, n = function() {
    clearTimeout(a), Cf && cancelAnimationFrame(t), setTimeout(e);
  }, a = setTimeout(n, 100);
  Cf && (t = requestAnimationFrame(n));
}
function ho(e) {
  var t = Yt, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), Yt = t;
}
function _u(e) {
  var t = Yt;
  e.__c = e.__(), Yt = t;
}
function HT(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Tf(e, t) {
  for (var n in e)
    if (n !== "__source" && !(n in t))
      return !0;
  for (var a in t)
    if (a !== "__source" && e[a] !== t[a])
      return !0;
  return !1;
}
function kf(e) {
  this.props = e;
}
(kf.prototype = new Lt()).isPureReactComponent = !0, kf.prototype.shouldComponentUpdate = function(e, t) {
  return Tf(this.props, e) || Tf(this.state, t);
};
var xf = le.__b;
le.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), xf && xf(e);
};
var zT = le.__e;
le.__e = function(e, t, n, a) {
  if (e.then) {
    for (var r, i = t; i = i.__; )
      if ((r = i.__c) && r.__c)
        return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
  }
  zT(e, t, n, a);
};
var Df = le.unmount;
function Fh(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(a) {
    typeof a.__c == "function" && a.__c();
  }), e.__c.__H = null), (e = HT({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(a) {
    return Fh(a, t, n);
  })), e;
}
function Hh(e, t, n) {
  return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(a) {
    return Hh(a, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function hl() {
  this.__u = 0, this.t = null, this.__b = null;
}
function zh(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ji() {
  this.u = null, this.o = null;
}
le.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Df && Df(e);
}, (hl.prototype = new Lt()).__c = function(e, t) {
  var n = t.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var r = zh(a.__v), i = !1, o = function() {
    i || (i = !0, n.__R = null, r ? r(s) : s());
  };
  n.__R = o;
  var s = function() {
    if (!--a.__u) {
      if (a.state.__a) {
        var c = a.state.__a;
        a.__v.__k[0] = Hh(c, c.__c.__P, c.__c.__O);
      }
      var u;
      for (a.setState({ __a: a.__b = null }); u = a.t.pop(); )
        u.forceUpdate();
    }
  }, l = t.__h === !0;
  a.__u++ || l || a.setState({ __a: a.__b = a.__v.__k[0] }), e.then(o, o);
}, hl.prototype.componentWillUnmount = function() {
  this.t = [];
}, hl.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = Fh(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var r = t.__a && zn(ma, null, e.fallback);
  return r && (r.__h = null), [zn(ma, null, t.__a ? null : e.children), r];
};
var Af = function(e, t, n) {
  if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
function UT(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function jT(e) {
  var t = this, n = e.i;
  t.componentWillUnmount = function() {
    li(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(a) {
    this.childNodes.push(a), t.i.appendChild(a);
  }, insertBefore: function(a, r) {
    this.childNodes.push(a), t.i.appendChild(a);
  }, removeChild: function(a) {
    this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), t.i.removeChild(a);
  } }), li(zn(UT, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function WT(e, t) {
  var n = zn(jT, { __v: e, i: t });
  return n.containerInfo = t, n;
}
(ji.prototype = new Lt()).__a = function(e) {
  var t = this, n = zh(t.__v), a = t.o.get(e);
  return a[0]++, function(r) {
    var i = function() {
      t.props.revealOrder ? (a.push(r), Af(t, e, a)) : r();
    };
    n ? n(i) : i();
  };
}, ji.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t = Fo(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; )
    this.o.set(t[n], this.u = [1, 0, this.u]);
  return e.children;
}, ji.prototype.componentDidUpdate = ji.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(t, n) {
    Af(e, n, t);
  });
};
var qT = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, GT = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, YT = typeof document < "u", KT = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
Lt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(Lt.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Rf = le.event;
function XT() {
}
function ZT() {
  return this.cancelBubble;
}
function QT() {
  return this.defaultPrevented;
}
le.event = function(e) {
  return Rf && (e = Rf(e)), e.persist = XT, e.isPropagationStopped = ZT, e.isDefaultPrevented = QT, e.nativeEvent = e;
};
var If = { configurable: !0, get: function() {
  return this.class;
} }, Of = le.vnode;
le.vnode = function(e) {
  var t = e.type, n = e.props, a = n;
  if (typeof t == "string") {
    var r = t.indexOf("-") === -1;
    for (var i in a = {}, n) {
      var o = n[i];
      YT && i === "children" && t === "noscript" || i === "value" && "defaultValue" in n && o == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !KT(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : r && GT.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), a[i] && (i = "oninputCapture")), a[i] = o);
    }
    t == "select" && a.multiple && Array.isArray(a.value) && (a.value = Fo(n.children).forEach(function(s) {
      s.props.selected = a.value.indexOf(s.props.value) != -1;
    })), t == "select" && a.defaultValue != null && (a.value = Fo(n.children).forEach(function(s) {
      s.props.selected = a.multiple ? a.defaultValue.indexOf(s.props.value) != -1 : a.defaultValue == s.props.value;
    })), e.props = a, n.class != n.className && (If.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", If));
  }
  e.$$typeof = qT, Of && Of(e);
};
var $f = le.__r;
le.__r = function(e) {
  $f && $f(e), e.__c;
};
var Nf = typeof globalThis < "u" ? globalThis : window;
Nf.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Nf.FullCalendarVDom = {
  Component: Lt,
  createElement: zn,
  render: li,
  createRef: NT,
  Fragment: ma,
  createContext: tk,
  createPortal: WT,
  flushSync: JT,
  unmountComponentAtNode: nk
};
function JT(e) {
  e();
  var t = le.debounceRendering, n = [];
  function a(r) {
    n.push(r);
  }
  for (le.debounceRendering = a, li(zn(ek, {}), document.createElement("div")); n.length; )
    n.shift()();
  le.debounceRendering = t;
}
var ek = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    return zn("div", {});
  }, t.prototype.componentDidMount = function() {
    this.setState({});
  }, t;
}(Lt);
function tk(e) {
  var t = VT(e), n = t.Provider;
  return t.Provider = function() {
    var a = this, r = !this.getChildContext, i = n.apply(this, arguments);
    if (r) {
      var o = [];
      this.shouldComponentUpdate = function(s) {
        a.props.value !== s.value && o.forEach(function(l) {
          l.context = s.value, l.forceUpdate();
        });
      }, this.sub = function(s) {
        o.push(s);
        var l = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), l && l.call(s);
        };
      };
    }
    return i;
  }, t;
}
function nk(e) {
  li(null, e);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var mc = FullCalendarVDom.Component, I = FullCalendarVDom.createElement, ak = FullCalendarVDom.render, It = FullCalendarVDom.createRef, ft = FullCalendarVDom.Fragment, Uh = FullCalendarVDom.createContext, rk = FullCalendarVDom.createPortal, Mf = FullCalendarVDom.flushSync, ik = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Va = function() {
  function e(t, n) {
    this.context = t, this.internalEventSource = n;
  }
  return e.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }, e.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }, Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}();
function ok(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function an(e, t) {
  if (e.closest)
    return e.closest(t);
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (sk(e, t))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
}
function sk(e, t) {
  var n = e.matches || e.matchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
function lk(e, t) {
  for (var n = e instanceof HTMLElement ? [e] : e, a = [], r = 0; r < n.length; r += 1)
    for (var i = n[r].querySelectorAll(t), o = 0; o < i.length; o += 1)
      a.push(i[o]);
  return a;
}
var uk = /(top|left|right|bottom|width|height)$/i;
function ck(e, t) {
  for (var n in t)
    jh(e, n, t[n]);
}
function jh(e, t, n) {
  n == null ? e.style[t] = "" : typeof n == "number" && uk.test(t) ? e.style[t] = n + "px" : e.style[t] = n;
}
function dk(e) {
  var t, n;
  return (n = (t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)[0]) !== null && n !== void 0 ? n : e.target;
}
var Pf = 0;
function Vn() {
  return Pf += 1, "fc-dom-" + Pf;
}
function fk(e, t) {
  return function(n) {
    var a = an(n.target, e);
    a && t.call(a, n, a);
  };
}
function Wh(e, t, n, a) {
  var r = fk(n, a);
  return e.addEventListener(t, r), function() {
    e.removeEventListener(t, r);
  };
}
function pk(e, t, n, a) {
  var r;
  return Wh(e, "mouseover", t, function(i, o) {
    if (o !== r) {
      r = o, n(i, o);
      var s = function(l) {
        r = null, a(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
function qh(e) {
  return R({ onClick: e }, Gh(e));
}
function Gh(e) {
  return {
    tabIndex: 0,
    onKeyDown: function(t) {
      (t.key === "Enter" || t.key === " ") && (e(t), t.preventDefault());
    }
  };
}
var Bf = 0;
function Sr() {
  return Bf += 1, String(Bf);
}
function vk(e) {
  var t = [], n = [], a, r;
  for (typeof e == "string" ? n = e.split(/\s*,\s*/) : typeof e == "function" ? n = [e] : Array.isArray(e) && (n = e), a = 0; a < n.length; a += 1)
    r = n[a], typeof r == "string" ? t.push(r.charAt(0) === "-" ? { field: r.substring(1), order: -1 } : { field: r, order: 1 }) : typeof r == "function" && t.push({ func: r });
  return t;
}
function hk(e, t, n) {
  var a, r;
  for (a = 0; a < n.length; a += 1)
    if (r = mk(e, t, n[a]), r)
      return r;
  return 0;
}
function mk(e, t, n) {
  return n.func ? n.func(e, t) : gk(e[n.field], t[n.field]) * (n.order || 1);
}
function gk(e, t) {
  return !e && !t ? 0 : t == null ? -1 : e == null ? 1 : typeof e == "string" || typeof t == "string" ? String(e).localeCompare(String(t)) : e - t;
}
function ml(e, t) {
  var n = String(e);
  return "000".substr(0, t - n.length) + n;
}
function Gr(e, t, n) {
  return typeof e == "function" ? e.apply(void 0, t) : typeof e == "string" ? t.reduce(function(a, r, i) {
    return a.replace("$" + i, r || "");
  }, e) : n;
}
function gl(e) {
  return e % 1 === 0;
}
function yk(e) {
  var t = e.querySelector(".fc-scrollgrid-shrink-frame"), n = e.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!t)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!n)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
var bk = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Vf(e, t) {
  var n = Pn(e);
  return n[2] += t * 7, bt(n);
}
function nt(e, t) {
  var n = Pn(e);
  return n[2] += t, bt(n);
}
function ga(e, t) {
  var n = Pn(e);
  return n[6] += t, bt(n);
}
function _k(e, t) {
  return Sa(e, t) / 7;
}
function Sa(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Ek(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60);
}
function wk(e, t) {
  return (t.valueOf() - e.valueOf()) / (1e3 * 60);
}
function Sk(e, t) {
  return (t.valueOf() - e.valueOf()) / 1e3;
}
function Ck(e, t) {
  var n = ze(e), a = ze(t);
  return {
    years: 0,
    months: 0,
    days: Math.round(Sa(n, a)),
    milliseconds: t.valueOf() - a.valueOf() - (e.valueOf() - n.valueOf())
  };
}
function Tk(e, t) {
  var n = zo(e, t);
  return n !== null && n % 7 === 0 ? n / 7 : null;
}
function zo(e, t) {
  return Bn(e) === Bn(t) ? Math.round(Sa(e, t)) : null;
}
function ze(e) {
  return bt([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate()
  ]);
}
function kk(e) {
  return bt([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours()
  ]);
}
function xk(e) {
  return bt([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes()
  ]);
}
function Dk(e) {
  return bt([
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  ]);
}
function Ak(e, t, n) {
  var a = e.getUTCFullYear(), r = yl(e, a, t, n);
  if (r < 1)
    return yl(e, a - 1, t, n);
  var i = yl(e, a + 1, t, n);
  return i >= 1 ? Math.min(r, i) : r;
}
function yl(e, t, n, a) {
  var r = bt([t, 0, 1 + Rk(t, n, a)]), i = ze(e), o = Math.round(Sa(r, i));
  return Math.floor(o / 7) + 1;
}
function Rk(e, t, n) {
  var a = 7 + t - n, r = (7 + bt([e, 0, a]).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function Lf(e) {
  return [
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ];
}
function Ff(e) {
  return new Date(
    e[0],
    e[1] || 0,
    e[2] == null ? 1 : e[2],
    e[3] || 0,
    e[4] || 0,
    e[5] || 0
  );
}
function Pn(e) {
  return [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds(),
    e.getUTCMilliseconds()
  ];
}
function bt(e) {
  return e.length === 1 && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e));
}
function Yh(e) {
  return !isNaN(e.valueOf());
}
function Bn(e) {
  return e.getUTCHours() * 1e3 * 60 * 60 + e.getUTCMinutes() * 1e3 * 60 + e.getUTCSeconds() * 1e3 + e.getUTCMilliseconds();
}
function gc(e, t, n, a) {
  return {
    instanceId: Sr(),
    defId: e,
    range: t,
    forcedStartTzo: n == null ? null : n,
    forcedEndTzo: a == null ? null : a
  };
}
var Uo = Object.prototype.hasOwnProperty;
function yc(e, t) {
  var n = {};
  if (t)
    for (var a in t) {
      for (var r = [], i = e.length - 1; i >= 0; i -= 1) {
        var o = e[i][a];
        if (typeof o == "object" && o)
          r.unshift(o);
        else if (o !== void 0) {
          n[a] = o;
          break;
        }
      }
      r.length && (n[a] = yc(r));
    }
  for (var i = e.length - 1; i >= 0; i -= 1) {
    var s = e[i];
    for (var l in s)
      l in n || (n[l] = s[l]);
  }
  return n;
}
function lr(e, t) {
  var n = {};
  for (var a in e)
    t(e[a], a) && (n[a] = e[a]);
  return n;
}
function _i(e, t) {
  var n = {};
  for (var a in e)
    n[a] = t(e[a], a);
  return n;
}
function Kh(e) {
  for (var t = {}, n = 0, a = e; n < a.length; n++) {
    var r = a[n];
    t[r] = !0;
  }
  return t;
}
function bc(e) {
  var t = [];
  for (var n in e)
    t.push(e[n]);
  return t;
}
function yn(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (Uo.call(e, n) && !(n in t))
      return !1;
  for (var n in t)
    if (Uo.call(t, n) && e[n] !== t[n])
      return !1;
  return !0;
}
function Hf(e, t) {
  var n = [];
  for (var a in e)
    Uo.call(e, a) && (a in t || n.push(a));
  for (var a in t)
    Uo.call(t, a) && e[a] !== t[a] && n.push(a);
  return n;
}
function bl(e, t, n) {
  if (n === void 0 && (n = {}), e === t)
    return !0;
  for (var a in t)
    if (!(a in e && Ik(e[a], t[a], n[a])))
      return !1;
  for (var a in e)
    if (!(a in t))
      return !1;
  return !0;
}
function Ik(e, t, n) {
  return e === t || n === !0 ? !0 : n ? n(e, t) : !1;
}
function Ok(e, t, n, a) {
  t === void 0 && (t = 0), a === void 0 && (a = 1);
  var r = [];
  n == null && (n = Object.keys(e).length);
  for (var i = t; i < n; i += a) {
    var o = e[i];
    o !== void 0 && r.push(o);
  }
  return r;
}
function $k(e, t, n, a) {
  for (var r = 0; r < a.length; r += 1) {
    var i = a[r].parse(e, n);
    if (i) {
      var o = e.allDay;
      return o == null && (o = t, o == null && (o = i.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: i.duration,
        typeData: i.typeData,
        typeId: r
      };
    }
  }
  return null;
}
function As(e, t, n) {
  var a = n.dateEnv, r = n.pluginHooks, i = n.options, o = e.defs, s = e.instances;
  s = lr(s, function(w) {
    return !o[w.defId].recurringDef;
  });
  for (var l in o) {
    var c = o[l];
    if (c.recurringDef) {
      var u = c.recurringDef.duration;
      u || (u = c.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
      for (var d = Nk(c, u, t, a, r.recurringTypes), f = 0, p = d; f < p.length; f++) {
        var h = p[f], y = gc(l, {
          start: h,
          end: a.add(h, u)
        });
        s[y.instanceId] = y;
      }
    }
  }
  return { defs: o, instances: s };
}
function Nk(e, t, n, a, r) {
  var i = r[e.recurringDef.typeId], o = i.expand(e.recurringDef.typeData, {
    start: a.subtract(n.start, t),
    end: n.end
  }, a);
  return e.allDay && (o = o.map(ze)), o;
}
var Mk = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function Me(e, t) {
  var n;
  return typeof e == "string" ? Pk(e) : typeof e == "object" && e ? zf(e) : typeof e == "number" ? zf((n = {}, n[t || "milliseconds"] = e, n)) : null;
}
function Pk(e) {
  var t = Mk.exec(e);
  if (t) {
    var n = t[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: n * (t[2] ? parseInt(t[2], 10) : 0),
      milliseconds: n * ((t[3] ? parseInt(t[3], 10) : 0) * 60 * 60 * 1e3 + (t[4] ? parseInt(t[4], 10) : 0) * 60 * 1e3 + (t[5] ? parseInt(t[5], 10) : 0) * 1e3 + (t[6] ? parseInt(t[6], 10) : 0))
    };
  }
  return null;
}
function zf(e) {
  var t = {
    years: e.years || e.year || 0,
    months: e.months || e.month || 0,
    days: e.days || e.day || 0,
    milliseconds: (e.hours || e.hour || 0) * 60 * 60 * 1e3 + (e.minutes || e.minute || 0) * 60 * 1e3 + (e.seconds || e.second || 0) * 1e3 + (e.milliseconds || e.millisecond || e.ms || 0)
  }, n = e.weeks || e.week;
  return n && (t.days += n * 7, t.specifiedWeeks = !0), t;
}
function Bk(e, t) {
  return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds;
}
function Vk(e, t) {
  return {
    years: e.years - t.years,
    months: e.months - t.months,
    days: e.days - t.days,
    milliseconds: e.milliseconds - t.milliseconds
  };
}
function Lk(e) {
  return Za(e) / 365;
}
function Fk(e) {
  return Za(e) / 30;
}
function Za(e) {
  return ui(e) / 864e5;
}
function ui(e) {
  return e.years * (365 * 864e5) + e.months * (30 * 864e5) + e.days * 864e5 + e.milliseconds;
}
function Eu(e) {
  var t = e.milliseconds;
  if (t) {
    if (t % 1e3 !== 0)
      return { unit: "millisecond", value: t };
    if (t % (1e3 * 60) !== 0)
      return { unit: "second", value: t / 1e3 };
    if (t % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: t / (1e3 * 60) };
    if (t)
      return { unit: "hour", value: t / (1e3 * 60 * 60) };
  }
  return e.days ? e.specifiedWeeks && e.days % 7 === 0 ? { unit: "week", value: e.days / 7 } : { unit: "day", value: e.days } : e.months ? { unit: "month", value: e.months } : e.years ? { unit: "year", value: e.years } : { unit: "millisecond", value: 0 };
}
function Hk(e, t, n) {
  n === void 0 && (n = !1);
  var a = e.toISOString();
  return a = a.replace(".000", ""), n && (a = a.replace("T00:00:00Z", "")), a.length > 10 && (t == null ? a = a.replace("Z", "") : t !== 0 && (a = a.replace("Z", _c(t, !0)))), a;
}
function Rs(e) {
  return e.toISOString().replace(/T.*$/, "");
}
function _c(e, t) {
  t === void 0 && (t = !1);
  var n = e < 0 ? "-" : "+", a = Math.abs(e), r = Math.floor(a / 60), i = Math.round(a % 60);
  return t ? n + ml(r, 2) + ":" + ml(i, 2) : "GMT" + n + r + (i ? ":" + ml(i, 2) : "");
}
function ur(e, t, n) {
  if (e === t)
    return !0;
  var a = e.length, r;
  if (a !== t.length)
    return !1;
  for (r = 0; r < a; r += 1)
    if (!(n ? n(e[r], t[r]) : e[r] === t[r]))
      return !1;
  return !0;
}
function ke(e, t, n) {
  var a, r;
  return function() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (!a)
      r = e.apply(this, i);
    else if (!ur(a, i)) {
      n && n(r);
      var s = e.apply(this, i);
      (!t || !t(s, r)) && (r = s);
    }
    return a = i, r;
  };
}
function mo(e, t, n) {
  var a = this, r, i;
  return function(o) {
    if (!r)
      i = e.call(a, o);
    else if (!yn(r, o)) {
      n && n(i);
      var s = e.call(a, o);
      (!t || !t(s, i)) && (i = s);
    }
    return r = o, i;
  };
}
var Uf = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, jo = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Wi = /\s*([ap])\.?m\.?/i, zk = /,/g, Uk = /\s+/g, jk = /\u200e/g, Wk = /UTC|GMT/, qk = function() {
  function e(t) {
    var n = {}, a = {}, r = 0;
    for (var i in t)
      i in Uf ? (a[i] = t[i], r = Math.max(Uf[i], r)) : (n[i] = t[i], i in jo && (r = Math.max(jo[i], r)));
    this.standardDateProps = n, this.extendedSettings = a, this.severity = r, this.buildFormattingFunc = ke(jf);
  }
  return e.prototype.format = function(t, n) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(t);
  }, e.prototype.formatRange = function(t, n, a, r) {
    var i = this, o = i.standardDateProps, s = i.extendedSettings, l = Qk(t.marker, n.marker, a.calendarSystem);
    if (!l)
      return this.format(t, a);
    var c = l;
    c > 1 && (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (c = 1);
    var u = this.format(t, a), d = this.format(n, a);
    if (u === d)
      return u;
    var f = Jk(o, c), p = jf(f, s, a), h = p(t), y = p(n), w = ex(u, h, d, y), m = s.separator || r || a.defaultSeparator || "";
    return w ? w.before + h + m + y + w.after : u + m + d;
  }, e.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }, e;
}();
function jf(e, t, n) {
  var a = Object.keys(e).length;
  return a === 1 && e.timeZoneName === "short" ? function(r) {
    return _c(r.timeZoneOffset);
  } : a === 0 && t.week ? function(r) {
    return Zk(n.computeWeekNumber(r.marker), n.weekText, n.weekTextLong, n.locale, t.week);
  } : Gk(e, t, n);
}
function Gk(e, t, n) {
  e = R({}, e), t = R({}, t), Yk(e, t), e.timeZone = "UTC";
  var a = new Intl.DateTimeFormat(n.locale.codes, e), r;
  if (t.omitZeroMinute) {
    var i = R({}, e);
    delete i.minute, r = new Intl.DateTimeFormat(n.locale.codes, i);
  }
  return function(o) {
    var s = o.marker, l;
    r && !s.getUTCMinutes() ? l = r : l = a;
    var c = l.format(s);
    return Kk(c, o, e, t, n);
  };
}
function Yk(e, t) {
  e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")), e.timeZoneName === "long" && (e.timeZoneName = "short"), t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
}
function Kk(e, t, n, a, r) {
  return e = e.replace(jk, ""), n.timeZoneName === "short" && (e = Xk(e, r.timeZone === "UTC" || t.timeZoneOffset == null ? "UTC" : _c(t.timeZoneOffset))), a.omitCommas && (e = e.replace(zk, "").trim()), a.omitZeroMinute && (e = e.replace(":00", "")), a.meridiem === !1 ? e = e.replace(Wi, "").trim() : a.meridiem === "narrow" ? e = e.replace(Wi, function(i, o) {
    return o.toLocaleLowerCase();
  }) : a.meridiem === "short" ? e = e.replace(Wi, function(i, o) {
    return o.toLocaleLowerCase() + "m";
  }) : a.meridiem === "lowercase" && (e = e.replace(Wi, function(i) {
    return i.toLocaleLowerCase();
  })), e = e.replace(Uk, " "), e = e.trim(), e;
}
function Xk(e, t) {
  var n = !1;
  return e = e.replace(Wk, function() {
    return n = !0, t;
  }), n || (e += " " + t), e;
}
function Zk(e, t, n, a, r) {
  var i = [];
  return r === "long" ? i.push(n) : (r === "short" || r === "narrow") && i.push(t), (r === "long" || r === "short") && i.push(" "), i.push(a.simpleNumberFormat.format(e)), a.options.direction === "rtl" && i.reverse(), i.join("");
}
function Qk(e, t, n) {
  return n.getMarkerYear(e) !== n.getMarkerYear(t) ? 5 : n.getMarkerMonth(e) !== n.getMarkerMonth(t) ? 4 : n.getMarkerDay(e) !== n.getMarkerDay(t) ? 2 : Bn(e) !== Bn(t) ? 1 : 0;
}
function Jk(e, t) {
  var n = {};
  for (var a in e)
    (!(a in jo) || jo[a] <= t) && (n[a] = e[a]);
  return n;
}
function ex(e, t, n, a) {
  for (var r = 0; r < e.length; ) {
    var i = e.indexOf(t, r);
    if (i === -1)
      break;
    var o = e.substr(0, i);
    r = i + t.length;
    for (var s = e.substr(r), l = 0; l < n.length; ) {
      var c = n.indexOf(a, l);
      if (c === -1)
        break;
      var u = n.substr(0, c);
      l = c + a.length;
      var d = n.substr(l);
      if (o === u && s === d)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Wf(e, t) {
  var n = t.markerToArray(e.marker);
  return {
    marker: e.marker,
    timeZoneOffset: e.timeZoneOffset,
    array: n,
    year: n[0],
    month: n[1],
    day: n[2],
    hour: n[3],
    minute: n[4],
    second: n[5],
    millisecond: n[6]
  };
}
function Wo(e, t, n, a) {
  var r = Wf(e, n.calendarSystem), i = t ? Wf(t, n.calendarSystem) : null;
  return {
    date: r,
    start: r,
    end: i,
    timeZone: n.timeZone,
    localeCodes: n.locale.codes,
    defaultSeparator: a || n.defaultSeparator
  };
}
var tx = function() {
  function e(t) {
    this.cmdStr = t;
  }
  return e.prototype.format = function(t, n, a) {
    return n.cmdFormatter(this.cmdStr, Wo(t, null, n, a));
  }, e.prototype.formatRange = function(t, n, a, r) {
    return a.cmdFormatter(this.cmdStr, Wo(t, n, a, r));
  }, e;
}(), nx = function() {
  function e(t) {
    this.func = t;
  }
  return e.prototype.format = function(t, n, a) {
    return this.func(Wo(t, null, n, a));
  }, e.prototype.formatRange = function(t, n, a, r) {
    return this.func(Wo(t, n, a, r));
  }, e;
}();
function tt(e) {
  return typeof e == "object" && e ? new qk(e) : typeof e == "string" ? new tx(e) : typeof e == "function" ? new nx(e) : null;
}
var qf = {
  navLinkDayClick: V,
  navLinkWeekClick: V,
  duration: Me,
  bootstrapFontAwesome: V,
  buttonIcons: V,
  customButtons: V,
  defaultAllDayEventDuration: Me,
  defaultTimedEventDuration: Me,
  nextDayThreshold: Me,
  scrollTime: Me,
  scrollTimeReset: Boolean,
  slotMinTime: Me,
  slotMaxTime: Me,
  dayPopoverFormat: tt,
  slotDuration: Me,
  snapDuration: Me,
  headerToolbar: V,
  footerToolbar: V,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: tt,
  dayHeaderClassNames: V,
  dayHeaderContent: V,
  dayHeaderDidMount: V,
  dayHeaderWillUnmount: V,
  dayCellClassNames: V,
  dayCellContent: V,
  dayCellDidMount: V,
  dayCellWillUnmount: V,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: V,
  weekNumbers: Boolean,
  weekNumberClassNames: V,
  weekNumberContent: V,
  weekNumberDidMount: V,
  weekNumberWillUnmount: V,
  editable: Boolean,
  viewClassNames: V,
  viewDidMount: V,
  viewWillUnmount: V,
  nowIndicator: Boolean,
  nowIndicatorClassNames: V,
  nowIndicatorContent: V,
  nowIndicatorDidMount: V,
  nowIndicatorWillUnmount: V,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: V,
  locale: V,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: V,
  eventOrder: vk,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: V,
  contentHeight: V,
  direction: String,
  weekNumberFormat: tt,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: V,
  initialDate: V,
  now: V,
  eventDataTransform: V,
  stickyHeaderDates: V,
  stickyFooterScrollbar: V,
  viewHeight: V,
  defaultAllDay: Boolean,
  eventSourceFailure: V,
  eventSourceSuccess: V,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: V,
  eventConstraint: V,
  eventAllow: V,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: V,
  eventContent: V,
  eventDidMount: V,
  eventWillUnmount: V,
  selectConstraint: V,
  selectOverlap: V,
  selectAllow: V,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: V,
  slotLaneClassNames: V,
  slotLaneContent: V,
  slotLaneDidMount: V,
  slotLaneWillUnmount: V,
  slotLabelClassNames: V,
  slotLabelContent: V,
  slotLabelDidMount: V,
  slotLabelWillUnmount: V,
  dayMaxEvents: V,
  dayMaxEventRows: V,
  dayMinWidth: Number,
  slotLabelInterval: Me,
  allDayText: String,
  allDayClassNames: V,
  allDayContent: V,
  allDayDidMount: V,
  allDayWillUnmount: V,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: tt,
  rerenderDelay: Number,
  moreLinkText: V,
  moreLinkHint: V,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: V,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: Me,
  hiddenDays: V,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: V,
  visibleRange: V,
  titleFormat: V,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: V,
  navLinkHint: V,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: V,
  moreLinkClassNames: V,
  moreLinkContent: V,
  moreLinkDidMount: V,
  moreLinkWillUnmount: V
}, Yr = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, Gf = {
  datesSet: V,
  eventsSet: V,
  eventAdd: V,
  eventChange: V,
  eventRemove: V,
  windowResize: V,
  eventClick: V,
  eventMouseEnter: V,
  eventMouseLeave: V,
  select: V,
  unselect: V,
  loading: V,
  _unmount: V,
  _beforeprint: V,
  _afterprint: V,
  _noEventDrop: V,
  _noEventResize: V,
  _resize: V,
  _scrollRequest: V
}, Yf = {
  buttonText: V,
  buttonHints: V,
  views: V,
  plugins: V,
  initialEvents: V,
  events: V,
  eventSources: V
}, aa = {
  headerToolbar: Oa,
  footerToolbar: Oa,
  buttonText: Oa,
  buttonHints: Oa,
  buttonIcons: Oa,
  dateIncrement: Oa
};
function Oa(e, t) {
  return typeof e == "object" && typeof t == "object" && e && t ? yn(e, t) : e === t;
}
var ax = {
  type: String,
  component: V,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: V,
  usesMinMaxTime: Boolean,
  classNames: V,
  content: V,
  didMount: V,
  willUnmount: V
};
function _l(e) {
  return yc(e, aa);
}
function Ec(e, t) {
  var n = {}, a = {};
  for (var r in t)
    r in e && (n[r] = t[r](e[r]));
  for (var r in e)
    r in t || (a[r] = e[r]);
  return { refined: n, extra: a };
}
function V(e) {
  return e;
}
function qo(e, t, n, a) {
  for (var r = ya(), i = Cc(n), o = 0, s = e; o < s.length; o++) {
    var l = s[o], c = Zh(l, t, n, a, i);
    c && wu(c, r);
  }
  return r;
}
function wu(e, t) {
  return t === void 0 && (t = ya()), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
}
function rx(e, t) {
  var n = e.instances[t];
  if (n) {
    var a = e.defs[n.defId], r = Sc(e, function(i) {
      return ix(a, i);
    });
    return r.defs[a.defId] = a, r.instances[n.instanceId] = n, r;
  }
  return ya();
}
function ix(e, t) {
  return Boolean(e.groupId && e.groupId === t.groupId);
}
function ya() {
  return { defs: {}, instances: {} };
}
function wc(e, t) {
  return {
    defs: R(R({}, e.defs), t.defs),
    instances: R(R({}, e.instances), t.instances)
  };
}
function Sc(e, t) {
  var n = lr(e.defs, t), a = lr(e.instances, function(r) {
    return n[r.defId];
  });
  return { defs: n, instances: a };
}
function ox(e, t) {
  var n = e.defs, a = e.instances, r = {}, i = {};
  for (var o in n)
    t.defs[o] || (r[o] = n[o]);
  for (var s in a)
    !t.instances[s] && r[a[s].defId] && (i[s] = a[s]);
  return {
    defs: r,
    instances: i
  };
}
function sx(e, t) {
  return Array.isArray(e) ? qo(e, null, t, !0) : typeof e == "object" && e ? qo([e], null, t, !0) : e != null ? String(e) : null;
}
function Su(e) {
  return Array.isArray(e) ? e : typeof e == "string" ? e.split(/\s+/) : [];
}
var Go = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: V,
  overlap: V,
  allow: V,
  className: Su,
  classNames: Su,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, lx = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function Yo(e, t) {
  var n = sx(e.constraint, t);
  return {
    display: e.display || null,
    startEditable: e.startEditable != null ? e.startEditable : e.editable,
    durationEditable: e.durationEditable != null ? e.durationEditable : e.editable,
    constraints: n != null ? [n] : [],
    overlap: e.overlap != null ? e.overlap : null,
    allows: e.allow != null ? [e.allow] : [],
    backgroundColor: e.backgroundColor || e.color || "",
    borderColor: e.borderColor || e.color || "",
    textColor: e.textColor || "",
    classNames: (e.className || []).concat(e.classNames || [])
  };
}
function ux(e) {
  return e.reduce(cx, lx);
}
function cx(e, t) {
  return {
    display: t.display != null ? t.display : e.display,
    startEditable: t.startEditable != null ? t.startEditable : e.startEditable,
    durationEditable: t.durationEditable != null ? t.durationEditable : e.durationEditable,
    constraints: e.constraints.concat(t.constraints),
    overlap: typeof t.overlap == "boolean" ? t.overlap : e.overlap,
    allows: e.allows.concat(t.allows),
    backgroundColor: t.backgroundColor || e.backgroundColor,
    borderColor: t.borderColor || e.borderColor,
    textColor: t.textColor || e.textColor,
    classNames: e.classNames.concat(t.classNames)
  };
}
var go = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, Xh = {
  start: V,
  end: V,
  date: V,
  allDay: Boolean
}, dx = R(R(R({}, go), Xh), { extendedProps: V });
function Zh(e, t, n, a, r) {
  r === void 0 && (r = Cc(n));
  var i = Qh(e, n, r), o = i.refined, s = i.extra, l = px(t, n), c = $k(o, l, n.dateEnv, n.pluginHooks.recurringTypes);
  if (c) {
    var u = Cu(o, s, t ? t.sourceId : "", c.allDay, Boolean(c.duration), n);
    return u.recurringDef = {
      typeId: c.typeId,
      typeData: c.typeData,
      duration: c.duration
    }, { def: u, instance: null };
  }
  var d = fx(o, l, n, a);
  if (d) {
    var u = Cu(o, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n), f = gc(u.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
    return { def: u, instance: f };
  }
  return null;
}
function Qh(e, t, n) {
  return n === void 0 && (n = Cc(t)), Ec(e, n);
}
function Cc(e) {
  return R(R(R({}, Go), dx), e.pluginHooks.eventRefiners);
}
function Cu(e, t, n, a, r, i) {
  for (var o = {
    title: e.title || "",
    groupId: e.groupId || "",
    publicId: e.id || "",
    url: e.url || "",
    recurringDef: null,
    defId: Sr(),
    sourceId: n,
    allDay: a,
    hasEnd: r,
    interactive: e.interactive,
    ui: Yo(e, i),
    extendedProps: R(R({}, e.extendedProps || {}), t)
  }, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
    var c = l[s];
    R(o, c(e));
  }
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function fx(e, t, n, a) {
  var r = e.allDay, i, o = null, s = !1, l, c = null, u = e.start != null ? e.start : e.date;
  if (i = n.dateEnv.createMarkerMeta(u), i)
    o = i.marker;
  else if (!a)
    return null;
  return e.end != null && (l = n.dateEnv.createMarkerMeta(e.end)), r == null && (t != null ? r = t : r = (!i || i.isTimeUnspecified) && (!l || l.isTimeUnspecified)), r && o && (o = ze(o)), l && (c = l.marker, r && (c = ze(c)), o && c <= o && (c = null)), c ? s = !0 : a || (s = n.options.forceEventDuration || !1, c = n.dateEnv.add(o, r ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
    allDay: r,
    hasEnd: s,
    range: { start: o, end: c },
    forcedStartTzo: i ? i.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function px(e, t) {
  var n = null;
  return e && (n = e.defaultAllDay), n == null && (n = t.options.defaultAllDay), n;
}
function Jh(e) {
  var t = Math.floor(Sa(e.start, e.end)) || 1, n = ze(e.start), a = nt(n, t);
  return { start: n, end: a };
}
function Tc(e, t) {
  t === void 0 && (t = Me(0));
  var n = null, a = null;
  if (e.end) {
    a = ze(e.end);
    var r = e.end.valueOf() - a.valueOf();
    r && r >= ui(t) && (a = nt(a, 1));
  }
  return e.start && (n = ze(e.start), a && a <= n && (a = nt(n, 1))), { start: n, end: a };
}
function vx(e) {
  var t = Tc(e);
  return Sa(t.start, t.end) > 1;
}
function qi(e, t, n, a) {
  return a === "year" ? Me(n.diffWholeYears(e, t), "year") : a === "month" ? Me(n.diffWholeMonths(e, t), "month") : Ck(e, t);
}
function hx(e, t) {
  var n = null, a = null;
  return e.start && (n = t.createMarker(e.start)), e.end && (a = t.createMarker(e.end)), !n && !a || n && a && a < n ? null : { start: n, end: a };
}
function Kf(e, t) {
  var n = [], a = t.start, r, i;
  for (e.sort(mx), r = 0; r < e.length; r += 1)
    i = e[r], i.start > a && n.push({ start: a, end: i.start }), i.end > a && (a = i.end);
  return a < t.end && n.push({ start: a, end: t.end }), n;
}
function mx(e, t) {
  return e.start.valueOf() - t.start.valueOf();
}
function cr(e, t) {
  var n = e.start, a = e.end, r = null;
  return t.start !== null && (n === null ? n = t.start : n = new Date(Math.max(n.valueOf(), t.start.valueOf()))), t.end != null && (a === null ? a = t.end : a = new Date(Math.min(a.valueOf(), t.end.valueOf()))), (n === null || a === null || n < a) && (r = { start: n, end: a }), r;
}
function gx(e, t) {
  return (e.end === null || t.start === null || e.end > t.start) && (e.start === null || t.end === null || e.start < t.end);
}
function da(e, t) {
  return (e.start === null || t >= e.start) && (e.end === null || t < e.end);
}
function yx(e, t) {
  return t.start != null && e < t.start ? t.start : t.end != null && e >= t.end ? new Date(t.end.valueOf() - 1) : e;
}
function Tu(e, t, n, a) {
  var r = {}, i = {}, o = {}, s = [], l = [], c = em(e.defs, t);
  for (var u in e.defs) {
    var d = e.defs[u], f = c[d.defId];
    f.display === "inverse-background" && (d.groupId ? (r[d.groupId] = [], o[d.groupId] || (o[d.groupId] = d)) : i[u] = []);
  }
  for (var p in e.instances) {
    var h = e.instances[p], d = e.defs[h.defId], f = c[d.defId], y = h.range, w = !d.allDay && a ? Tc(y, a) : y, m = cr(w, n);
    m && (f.display === "inverse-background" ? d.groupId ? r[d.groupId].push(m) : i[h.defId].push(m) : f.display !== "none" && (f.display === "background" ? s : l).push({
      def: d,
      ui: f,
      instance: h,
      range: m,
      isStart: w.start && w.start.valueOf() === m.start.valueOf(),
      isEnd: w.end && w.end.valueOf() === m.end.valueOf()
    }));
  }
  for (var _ in r)
    for (var k = r[_], x = Kf(k, n), D = 0, A = x; D < A.length; D++) {
      var L = A[D], d = o[_], f = c[d.defId];
      s.push({
        def: d,
        ui: f,
        instance: null,
        range: L,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in i)
    for (var k = i[u], x = Kf(k, n), $ = 0, O = x; $ < O.length; $++) {
      var L = O[$];
      s.push({
        def: e.defs[u],
        ui: c[u],
        instance: null,
        range: L,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: s, fg: l };
}
function Xf(e, t) {
  e.fcSeg = t;
}
function ku(e) {
  return e.fcSeg || e.parentNode.fcSeg || null;
}
function em(e, t) {
  return _i(e, function(n) {
    return tm(n, t);
  });
}
function tm(e, t) {
  var n = [];
  return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), ux(n);
}
function nm(e, t) {
  var n = e.map(bx);
  return n.sort(function(a, r) {
    return hk(a, r, t);
  }), n.map(function(a) {
    return a._seg;
  });
}
function bx(e) {
  var t = e.eventRange, n = t.def, a = t.instance ? t.instance.range : t.range, r = a.start ? a.start.valueOf() : 0, i = a.end ? a.end.valueOf() : 0;
  return R(R(R({}, n.extendedProps), n), {
    id: n.publicId,
    start: r,
    end: i,
    duration: i - r,
    allDay: Number(n.allDay),
    _seg: e
  });
}
function _x(e, t) {
  for (var n = t.pluginHooks, a = n.isDraggableTransformers, r = e.eventRange, i = r.def, o = r.ui, s = o.startEditable, l = 0, c = a; l < c.length; l++) {
    var u = c[l];
    s = u(s, i, o, t);
  }
  return s;
}
function Ex(e, t) {
  return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
}
function wx(e, t) {
  return e.isEnd && e.eventRange.ui.durationEditable;
}
function Kr(e, t, n, a, r, i, o) {
  var s = n.dateEnv, l = n.options, c = l.displayEventTime, u = l.displayEventEnd, d = e.eventRange.def, f = e.eventRange.instance;
  c == null && (c = a !== !1), u == null && (u = r !== !1);
  var p = f.range.start, h = f.range.end, y = i || e.start || e.eventRange.range.start, w = o || e.end || e.eventRange.range.end, m = ze(p).valueOf() === ze(y).valueOf(), _ = ze(ga(h, -1)).valueOf() === ze(ga(w, -1)).valueOf();
  return c && !d.allDay && (m || _) ? (y = m ? p : y, w = _ ? h : w, u && d.hasEnd ? s.formatRange(y, w, t, {
    forcedStartTzo: i ? null : f.forcedStartTzo,
    forcedEndTzo: o ? null : f.forcedEndTzo
  }) : s.format(y, t, {
    forcedTzo: i ? null : f.forcedStartTzo
  })) : "";
}
function Qa(e, t, n) {
  var a = e.eventRange.range;
  return {
    isPast: a.end < (n || t.start),
    isFuture: a.start >= (n || t.end),
    isToday: t && da(t, a.start)
  };
}
function Sx(e) {
  var t = ["fc-event"];
  return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
}
function Cx(e) {
  return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString();
}
function kc(e, t) {
  var n = e.eventRange, a = n.def, r = n.instance, i = a.url;
  if (i)
    return { href: i };
  var o = t.emitter, s = t.options, l = s.eventInteractive;
  return l == null && (l = a.interactive, l == null && (l = Boolean(o.hasHandlers("eventClick")))), l ? Gh(function(c) {
    o.trigger("eventClick", {
      el: c.target,
      event: new Xt(t, a, r),
      jsEvent: c,
      view: t.viewApi
    });
  }) : {};
}
var Tx = {
  start: V,
  end: V,
  allDay: Boolean
};
function kx(e, t, n) {
  var a = xx(e, t), r = a.range;
  if (!r.start)
    return null;
  if (!r.end) {
    if (n == null)
      return null;
    r.end = t.add(r.start, n);
  }
  return a;
}
function xx(e, t) {
  var n = Ec(e, Tx), a = n.refined, r = n.extra, i = a.start ? t.createMarkerMeta(a.start) : null, o = a.end ? t.createMarkerMeta(a.end) : null, s = a.allDay;
  return s == null && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)), R({ range: {
    start: i ? i.marker : null,
    end: o ? o.marker : null
  }, allDay: s }, r);
}
function Dx(e, t) {
  return R(R({}, rm(e.range, t, e.allDay)), { allDay: e.allDay });
}
function am(e, t, n) {
  return R(R({}, rm(e, t, n)), { timeZone: t.timeZone });
}
function rm(e, t, n) {
  return {
    start: t.toDate(e.start),
    end: t.toDate(e.end),
    startStr: t.formatIso(e.start, { omitTime: n }),
    endStr: t.formatIso(e.end, { omitTime: n })
  };
}
function Ax(e, t, n) {
  var a = Qh({ editable: !1 }, n), r = Cu(
    a.refined,
    a.extra,
    "",
    e.allDay,
    !0,
    n
  );
  return {
    def: r,
    ui: tm(r, t),
    instance: gc(r.defId, e.range),
    range: e.range,
    isStart: !0,
    isEnd: !0
  };
}
function Rx(e, t, n) {
  n.emitter.trigger("select", R(R({}, Ox(e, n)), { jsEvent: t ? t.origEvent : null, view: n.viewApi || n.calendarApi.view }));
}
function Ix(e, t) {
  t.emitter.trigger("unselect", {
    jsEvent: e ? e.origEvent : null,
    view: t.viewApi || t.calendarApi.view
  });
}
function Ox(e, t) {
  for (var n = {}, a = 0, r = t.pluginHooks.dateSpanTransforms; a < r.length; a++) {
    var i = r[a];
    R(n, i(e, t));
  }
  return R(n, Dx(e, t.dateEnv)), n;
}
function Zf(e, t, n) {
  var a = n.dateEnv, r = n.options, i = t;
  return e ? (i = ze(i), i = a.add(i, r.defaultAllDayEventDuration)) : i = a.add(i, r.defaultTimedEventDuration), i;
}
function $x(e, t, n, a) {
  var r = em(e.defs, t), i = ya();
  for (var o in e.defs) {
    var s = e.defs[o];
    i.defs[o] = Nx(s, r[o], n, a);
  }
  for (var l in e.instances) {
    var c = e.instances[l], s = i.defs[c.defId];
    i.instances[l] = Mx(c, s, r[c.defId], n, a);
  }
  return i;
}
function Nx(e, t, n, a) {
  var r = n.standardProps || {};
  r.hasEnd == null && t.durationEditable && (n.startDelta || n.endDelta) && (r.hasEnd = !0);
  var i = R(R(R({}, e), r), { ui: R(R({}, e.ui), r.ui) });
  n.extendedProps && (i.extendedProps = R(R({}, i.extendedProps), n.extendedProps));
  for (var o = 0, s = a.pluginHooks.eventDefMutationAppliers; o < s.length; o++) {
    var l = s[o];
    l(i, n, a);
  }
  return !i.hasEnd && a.options.forceEventDuration && (i.hasEnd = !0), i;
}
function Mx(e, t, n, a, r) {
  var i = r.dateEnv, o = a.standardProps && a.standardProps.allDay === !0, s = a.standardProps && a.standardProps.hasEnd === !1, l = R({}, e);
  return o && (l.range = Jh(l.range)), a.datesDelta && n.startEditable && (l.range = {
    start: i.add(l.range.start, a.datesDelta),
    end: i.add(l.range.end, a.datesDelta)
  }), a.startDelta && n.durationEditable && (l.range = {
    start: i.add(l.range.start, a.startDelta),
    end: l.range.end
  }), a.endDelta && n.durationEditable && (l.range = {
    start: l.range.start,
    end: i.add(l.range.end, a.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: Zf(t.allDay, l.range.start, r)
  }), t.allDay && (l.range = {
    start: ze(l.range.start),
    end: ze(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = Zf(t.allDay, l.range.start, r)), l;
}
var Px = function() {
  function e(t, n, a) {
    this.type = t, this.getCurrentData = n, this.dateEnv = a;
  }
  return Object.defineProperty(e.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.getOption = function(t) {
    return this.getCurrentData().options[t];
  }, e;
}(), Bx = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: V,
  eventDataTransform: V,
  success: V,
  failure: V
};
function im(e, t, n) {
  n === void 0 && (n = om(t));
  var a;
  if (typeof e == "string" ? a = { url: e } : typeof e == "function" || Array.isArray(e) ? a = { events: e } : typeof e == "object" && e && (a = e), a) {
    var r = Ec(a, n), i = r.refined, o = r.extra, s = Vx(i, t);
    if (s)
      return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: i.defaultAllDay,
        eventDataTransform: i.eventDataTransform,
        success: i.success,
        failure: i.failure,
        publicId: i.id || "",
        sourceId: Sr(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: Yo(i, t),
        extendedProps: o
      };
  }
  return null;
}
function om(e) {
  return R(R(R({}, Go), Bx), e.pluginHooks.eventSourceRefiners);
}
function Vx(e, t) {
  for (var n = t.pluginHooks.eventSourceDefs, a = n.length - 1; a >= 0; a -= 1) {
    var r = n[a], i = r.parseMeta(e);
    if (i)
      return { sourceDefId: a, meta: i };
  }
  return null;
}
function Lx(e, t) {
  switch (t.type) {
    case "CHANGE_DATE":
      return t.dateMarker;
    default:
      return e;
  }
}
function Fx(e, t) {
  var n = e.initialDate;
  return n != null ? t.createMarker(n) : Ei(e.now, t);
}
function Ei(e, t) {
  return typeof e == "function" && (e = e()), e == null ? t.createNowMarker() : t.createMarker(e);
}
var Hx = function() {
  function e() {
  }
  return e.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  }, e.prototype.dispatch = function(t) {
    return this.currentDataManager.dispatch(t);
  }, Object.defineProperty(e.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.batchRendering = function(t) {
    t();
  }, e.prototype.updateSize = function() {
    this.trigger("_resize", !0);
  }, e.prototype.setOption = function(t, n) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: t,
      rawOptionValue: n
    });
  }, e.prototype.getOption = function(t) {
    return this.currentDataManager.currentCalendarOptionsInput[t];
  }, e.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }, e.prototype.on = function(t, n) {
    var a = this.currentDataManager;
    a.currentCalendarOptionsRefiners[t] ? a.emitter.on(t, n) : console.warn("Unknown listener name '" + t + "'");
  }, e.prototype.off = function(t, n) {
    this.currentDataManager.emitter.off(t, n);
  }, e.prototype.trigger = function(t) {
    for (var n, a = [], r = 1; r < arguments.length; r++)
      a[r - 1] = arguments[r];
    (n = this.currentDataManager.emitter).trigger.apply(n, Ke([t], a));
  }, e.prototype.changeView = function(t, n) {
    var a = this;
    this.batchRendering(function() {
      if (a.unselect(), n)
        if (n.start && n.end)
          a.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t
          }), a.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: n
          });
        else {
          var r = a.getCurrentData().dateEnv;
          a.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: t,
            dateMarker: r.createMarker(n)
          });
        }
      else
        a.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: t
        });
    });
  }, e.prototype.zoomTo = function(t, n) {
    var a = this.getCurrentData(), r;
    n = n || "day", r = a.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), r ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: r.type,
      dateMarker: t
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t
    });
  }, e.prototype.getUnitViewSpec = function(t) {
    var n = this.getCurrentData(), a = n.viewSpecs, r = n.toolbarConfig, i = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), o, s;
    for (var l in a)
      i.push(l);
    for (o = 0; o < i.length; o += 1)
      if (s = a[i[o]], s && s.singleUnit === t)
        return s;
    return null;
  }, e.prototype.prev = function() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }, e.prototype.next = function() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }, e.prototype.prevYear = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t.dateEnv.addYears(t.currentDate, -1)
    });
  }, e.prototype.nextYear = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: t.dateEnv.addYears(t.currentDate, 1)
    });
  }, e.prototype.today = function() {
    var t = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: Ei(t.calendarOptions.now, t.dateEnv)
    });
  }, e.prototype.gotoDate = function(t) {
    var n = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.createMarker(t)
    });
  }, e.prototype.incrementDate = function(t) {
    var n = this.getCurrentData(), a = Me(t);
    a && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: n.dateEnv.add(n.currentDate, a)
    }));
  }, e.prototype.getDate = function() {
    var t = this.getCurrentData();
    return t.dateEnv.toDate(t.currentDate);
  }, e.prototype.formatDate = function(t, n) {
    var a = this.getCurrentData().dateEnv;
    return a.format(a.createMarker(t), tt(n));
  }, e.prototype.formatRange = function(t, n, a) {
    var r = this.getCurrentData().dateEnv;
    return r.formatRange(r.createMarker(t), r.createMarker(n), tt(a), a);
  }, e.prototype.formatIso = function(t, n) {
    var a = this.getCurrentData().dateEnv;
    return a.formatIso(a.createMarker(t), { omitTime: n });
  }, e.prototype.select = function(t, n) {
    var a;
    n == null ? t.start != null ? a = t : a = {
      start: t,
      end: null
    } : a = {
      start: t,
      end: n
    };
    var r = this.getCurrentData(), i = kx(a, r.dateEnv, Me({ days: 1 }));
    i && (this.dispatch({ type: "SELECT_DATES", selection: i }), Rx(i, null, r));
  }, e.prototype.unselect = function(t) {
    var n = this.getCurrentData();
    n.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Ix(t, n));
  }, e.prototype.addEvent = function(t, n) {
    if (t instanceof Xt) {
      var a = t._def, r = t._instance, i = this.getCurrentData();
      return i.eventStore.defs[a.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: wu({ def: a, instance: r })
      }), this.triggerEventAdd(t)), t;
    }
    var o = this.getCurrentData(), s;
    if (n instanceof Va)
      s = n.internalEventSource;
    else if (typeof n == "boolean")
      n && (s = bc(o.eventSources)[0]);
    else if (n != null) {
      var l = this.getEventSourceById(n);
      if (!l)
        return console.warn('Could not find an event source with ID "' + n + '"'), null;
      s = l.internalEventSource;
    }
    var c = Zh(t, s, o, !1);
    if (c) {
      var u = new Xt(o, c.def, c.def.recurringDef ? null : c.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: wu(c)
      }), this.triggerEventAdd(u), u;
    }
    return null;
  }, e.prototype.triggerEventAdd = function(t) {
    var n = this, a = this.getCurrentData().emitter;
    a.trigger("eventAdd", {
      event: t,
      relatedEvents: [],
      revert: function() {
        n.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: sm(t)
        });
      }
    });
  }, e.prototype.getEventById = function(t) {
    var n = this.getCurrentData(), a = n.eventStore, r = a.defs, i = a.instances;
    t = String(t);
    for (var o in r) {
      var s = r[o];
      if (s.publicId === t) {
        if (s.recurringDef)
          return new Xt(n, s, null);
        for (var l in i) {
          var c = i[l];
          if (c.defId === s.defId)
            return new Xt(n, s, c);
        }
      }
    }
    return null;
  }, e.prototype.getEvents = function() {
    var t = this.getCurrentData();
    return xc(t.eventStore, t);
  }, e.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, e.prototype.getEventSources = function() {
    var t = this.getCurrentData(), n = t.eventSources, a = [];
    for (var r in n)
      a.push(new Va(t, n[r]));
    return a;
  }, e.prototype.getEventSourceById = function(t) {
    var n = this.getCurrentData(), a = n.eventSources;
    t = String(t);
    for (var r in a)
      if (a[r].publicId === t)
        return new Va(n, a[r]);
    return null;
  }, e.prototype.addEventSource = function(t) {
    var n = this.getCurrentData();
    if (t instanceof Va)
      return n.eventSources[t.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [t.internalEventSource]
      }), t;
    var a = im(t, n);
    return a ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [a] }), new Va(n, a)) : null;
  }, e.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, e.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, e.prototype.scrollToTime = function(t) {
    var n = Me(t);
    n && this.trigger("_scrollRequest", { time: n });
  }, e;
}(), Xt = function() {
  function e(t, n, a) {
    this._context = t, this._def = n, this._instance = a || null;
  }
  return e.prototype.setProp = function(t, n) {
    var a, r;
    if (t in Xh)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (t === "id")
      n = go[t](n), this.mutate({
        standardProps: { publicId: n }
      });
    else if (t in go)
      n = go[t](n), this.mutate({
        standardProps: (a = {}, a[t] = n, a)
      });
    else if (t in Go) {
      var i = Go[t](n);
      t === "color" ? i = { backgroundColor: n, borderColor: n } : t === "editable" ? i = { startEditable: n, durationEditable: n } : i = (r = {}, r[t] = n, r), this.mutate({
        standardProps: { ui: i }
      });
    } else
      console.warn("Could not set prop '" + t + "'. Use setExtendedProp instead.");
  }, e.prototype.setExtendedProp = function(t, n) {
    var a;
    this.mutate({
      extendedProps: (a = {}, a[t] = n, a)
    });
  }, e.prototype.setStart = function(t, n) {
    n === void 0 && (n = {});
    var a = this._context.dateEnv, r = a.createMarker(t);
    if (r && this._instance) {
      var i = this._instance.range, o = qi(i.start, r, a, n.granularity);
      n.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }, e.prototype.setEnd = function(t, n) {
    n === void 0 && (n = {});
    var a = this._context.dateEnv, r;
    if (!(t != null && (r = a.createMarker(t), !r)) && this._instance)
      if (r) {
        var i = qi(this._instance.range.end, r, a, n.granularity);
        this.mutate({ endDelta: i });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, e.prototype.setDates = function(t, n, a) {
    a === void 0 && (a = {});
    var r = this._context.dateEnv, i = { allDay: a.allDay }, o = r.createMarker(t), s;
    if (!!o && !(n != null && (s = r.createMarker(n), !s)) && this._instance) {
      var l = this._instance.range;
      a.allDay === !0 && (l = Jh(l));
      var c = qi(l.start, o, r, a.granularity);
      if (s) {
        var u = qi(l.end, s, r, a.granularity);
        Bk(c, u) ? this.mutate({ datesDelta: c, standardProps: i }) : this.mutate({ startDelta: c, endDelta: u, standardProps: i });
      } else
        i.hasEnd = !1, this.mutate({ datesDelta: c, standardProps: i });
    }
  }, e.prototype.moveStart = function(t) {
    var n = Me(t);
    n && this.mutate({ startDelta: n });
  }, e.prototype.moveEnd = function(t) {
    var n = Me(t);
    n && this.mutate({ endDelta: n });
  }, e.prototype.moveDates = function(t) {
    var n = Me(t);
    n && this.mutate({ datesDelta: n });
  }, e.prototype.setAllDay = function(t, n) {
    n === void 0 && (n = {});
    var a = { allDay: t }, r = n.maintainDuration;
    r == null && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== t && (a.hasEnd = r), this.mutate({ standardProps: a });
  }, e.prototype.formatRange = function(t) {
    var n = this._context.dateEnv, a = this._instance, r = tt(t);
    return this._def.hasEnd ? n.formatRange(a.range.start, a.range.end, r, {
      forcedStartTzo: a.forcedStartTzo,
      forcedEndTzo: a.forcedEndTzo
    }) : n.format(a.range.start, r, {
      forcedTzo: a.forcedStartTzo
    });
  }, e.prototype.mutate = function(t) {
    var n = this._instance;
    if (n) {
      var a = this._def, r = this._context, i = r.getCurrentData().eventStore, o = rx(i, n.instanceId), s = {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      o = $x(o, s, t, r);
      var l = new e(r, a, n);
      this._def = o.defs[a.defId], this._instance = o.instances[n.instanceId], r.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), r.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: xc(o, r, n),
        revert: function() {
          r.dispatch({
            type: "RESET_EVENTS",
            eventStore: i
          });
        }
      });
    }
  }, e.prototype.remove = function() {
    var t = this._context, n = sm(this);
    t.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: n
    }), t.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        t.dispatch({
          type: "MERGE_EVENTS",
          eventStore: n
        });
      }
    });
  }, Object.defineProperty(e.prototype, "source", {
    get: function() {
      var t = this._def.sourceId;
      return t ? new Va(this._context, this._context.getCurrentData().eventSources[t]) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "startStr", {
    get: function() {
      var t = this._instance;
      return t ? this._context.dateEnv.formatIso(t.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: t.forcedStartTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "endStr", {
    get: function() {
      var t = this._instance;
      return t && this._def.hasEnd ? this._context.dateEnv.formatIso(t.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: t.forcedEndTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.toPlainObject = function(t) {
    t === void 0 && (t = {});
    var n = this._def, a = n.ui, r = this, i = r.startStr, o = r.endStr, s = {};
    return n.title && (s.title = n.title), i && (s.start = i), o && (s.end = o), n.publicId && (s.id = n.publicId), n.groupId && (s.groupId = n.groupId), n.url && (s.url = n.url), a.display && a.display !== "auto" && (s.display = a.display), t.collapseColor && a.backgroundColor && a.backgroundColor === a.borderColor ? s.color = a.backgroundColor : (a.backgroundColor && (s.backgroundColor = a.backgroundColor), a.borderColor && (s.borderColor = a.borderColor)), a.textColor && (s.textColor = a.textColor), a.classNames.length && (s.classNames = a.classNames), Object.keys(n.extendedProps).length && (t.collapseExtendedProps ? R(s, n.extendedProps) : s.extendedProps = n.extendedProps), s;
  }, e.prototype.toJSON = function() {
    return this.toPlainObject();
  }, e;
}();
function sm(e) {
  var t, n, a = e._def, r = e._instance;
  return {
    defs: (t = {}, t[a.defId] = a, t),
    instances: r ? (n = {}, n[r.instanceId] = r, n) : {}
  };
}
function xc(e, t, n) {
  var a = e.defs, r = e.instances, i = [], o = n ? n.instanceId : "";
  for (var s in r) {
    var l = r[s], c = a[l.defId];
    l.instanceId !== o && i.push(new Xt(t, c, l));
  }
  return i;
}
var lm = {};
function zx(e, t) {
  lm[e] = t;
}
function Ux(e) {
  return new lm[e]();
}
var jx = function() {
  function e() {
  }
  return e.prototype.getMarkerYear = function(t) {
    return t.getUTCFullYear();
  }, e.prototype.getMarkerMonth = function(t) {
    return t.getUTCMonth();
  }, e.prototype.getMarkerDay = function(t) {
    return t.getUTCDate();
  }, e.prototype.arrayToMarker = function(t) {
    return bt(t);
  }, e.prototype.markerToArray = function(t) {
    return Pn(t);
  }, e;
}();
zx("gregory", jx);
var Wx = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function qx(e) {
  var t = Wx.exec(e);
  if (t) {
    var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? Number("0." + t[12]) * 1e3 : 0));
    if (Yh(n)) {
      var a = null;
      return t[13] && (a = (t[15] === "-" ? -1 : 1) * (Number(t[16] || 0) * 60 + Number(t[18] || 0))), {
        marker: n,
        isTimeUnspecified: !t[6],
        timeZoneOffset: a
      };
    }
  }
  return null;
}
var Gx = function() {
  function e(t) {
    var n = this.timeZone = t.timeZone, a = n !== "local" && n !== "UTC";
    t.namedTimeZoneImpl && a && (this.namedTimeZoneImpl = new t.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!a || this.namedTimeZoneImpl), this.calendarSystem = Ux(t.calendarSystem), this.locale = t.locale, this.weekDow = t.locale.week.dow, this.weekDoy = t.locale.week.doy, t.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof t.firstDay == "number" && (this.weekDow = t.firstDay), typeof t.weekNumberCalculation == "function" && (this.weekNumberFunc = t.weekNumberCalculation), this.weekText = t.weekText != null ? t.weekText : t.locale.options.weekText, this.weekTextLong = (t.weekTextLong != null ? t.weekTextLong : t.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = t.cmdFormatter, this.defaultSeparator = t.defaultSeparator;
  }
  return e.prototype.createMarker = function(t) {
    var n = this.createMarkerMeta(t);
    return n === null ? null : n.marker;
  }, e.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : bt(Lf(new Date()));
  }, e.prototype.createMarkerMeta = function(t) {
    if (typeof t == "string")
      return this.parse(t);
    var n = null;
    return typeof t == "number" ? n = this.timestampToMarker(t) : t instanceof Date ? (t = t.valueOf(), isNaN(t) || (n = this.timestampToMarker(t))) : Array.isArray(t) && (n = bt(t)), n === null || !Yh(n) ? null : { marker: n, isTimeUnspecified: !1, forcedTzo: null };
  }, e.prototype.parse = function(t) {
    var n = qx(t);
    if (n === null)
      return null;
    var a = n.marker, r = null;
    return n.timeZoneOffset !== null && (this.canComputeOffset ? a = this.timestampToMarker(a.valueOf() - n.timeZoneOffset * 60 * 1e3) : r = n.timeZoneOffset), { marker: a, isTimeUnspecified: n.isTimeUnspecified, forcedTzo: r };
  }, e.prototype.getYear = function(t) {
    return this.calendarSystem.getMarkerYear(t);
  }, e.prototype.getMonth = function(t) {
    return this.calendarSystem.getMarkerMonth(t);
  }, e.prototype.add = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] += n.years, a[1] += n.months, a[2] += n.days, a[6] += n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.subtract = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] -= n.years, a[1] -= n.months, a[2] -= n.days, a[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.addYears = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[0] += n, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.addMonths = function(t, n) {
    var a = this.calendarSystem.markerToArray(t);
    return a[1] += n, this.calendarSystem.arrayToMarker(a);
  }, e.prototype.diffWholeYears = function(t, n) {
    var a = this.calendarSystem;
    return Bn(t) === Bn(n) && a.getMarkerDay(t) === a.getMarkerDay(n) && a.getMarkerMonth(t) === a.getMarkerMonth(n) ? a.getMarkerYear(n) - a.getMarkerYear(t) : null;
  }, e.prototype.diffWholeMonths = function(t, n) {
    var a = this.calendarSystem;
    return Bn(t) === Bn(n) && a.getMarkerDay(t) === a.getMarkerDay(n) ? a.getMarkerMonth(n) - a.getMarkerMonth(t) + (a.getMarkerYear(n) - a.getMarkerYear(t)) * 12 : null;
  }, e.prototype.greatestWholeUnit = function(t, n) {
    var a = this.diffWholeYears(t, n);
    return a !== null ? { unit: "year", value: a } : (a = this.diffWholeMonths(t, n), a !== null ? { unit: "month", value: a } : (a = Tk(t, n), a !== null ? { unit: "week", value: a } : (a = zo(t, n), a !== null ? { unit: "day", value: a } : (a = Ek(t, n), gl(a) ? { unit: "hour", value: a } : (a = wk(t, n), gl(a) ? { unit: "minute", value: a } : (a = Sk(t, n), gl(a) ? { unit: "second", value: a } : { unit: "millisecond", value: n.valueOf() - t.valueOf() }))))));
  }, e.prototype.countDurationsBetween = function(t, n, a) {
    var r;
    return a.years && (r = this.diffWholeYears(t, n), r !== null) ? r / Lk(a) : a.months && (r = this.diffWholeMonths(t, n), r !== null) ? r / Fk(a) : a.days && (r = zo(t, n), r !== null) ? r / Za(a) : (n.valueOf() - t.valueOf()) / ui(a);
  }, e.prototype.startOf = function(t, n) {
    return n === "year" ? this.startOfYear(t) : n === "month" ? this.startOfMonth(t) : n === "week" ? this.startOfWeek(t) : n === "day" ? ze(t) : n === "hour" ? kk(t) : n === "minute" ? xk(t) : n === "second" ? Dk(t) : null;
  }, e.prototype.startOfYear = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t)
    ]);
  }, e.prototype.startOfMonth = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t)
    ]);
  }, e.prototype.startOfWeek = function(t) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(t),
      this.calendarSystem.getMarkerMonth(t),
      t.getUTCDate() - (t.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }, e.prototype.computeWeekNumber = function(t) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(t)) : Ak(t, this.weekDow, this.weekDoy);
  }, e.prototype.format = function(t, n, a) {
    return a === void 0 && (a = {}), n.format({
      marker: t,
      timeZoneOffset: a.forcedTzo != null ? a.forcedTzo : this.offsetForMarker(t)
    }, this);
  }, e.prototype.formatRange = function(t, n, a, r) {
    return r === void 0 && (r = {}), r.isEndExclusive && (n = ga(n, -1)), a.formatRange({
      marker: t,
      timeZoneOffset: r.forcedStartTzo != null ? r.forcedStartTzo : this.offsetForMarker(t)
    }, {
      marker: n,
      timeZoneOffset: r.forcedEndTzo != null ? r.forcedEndTzo : this.offsetForMarker(n)
    }, this, r.defaultSeparator);
  }, e.prototype.formatIso = function(t, n) {
    n === void 0 && (n = {});
    var a = null;
    return n.omitTimeZoneOffset || (n.forcedTzo != null ? a = n.forcedTzo : a = this.offsetForMarker(t)), Hk(t, a, n.omitTime);
  }, e.prototype.timestampToMarker = function(t) {
    return this.timeZone === "local" ? bt(Lf(new Date(t))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(t) : bt(this.namedTimeZoneImpl.timestampToArray(t));
  }, e.prototype.offsetForMarker = function(t) {
    return this.timeZone === "local" ? -Ff(Pn(t)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Pn(t)) : null;
  }, e.prototype.toDate = function(t, n) {
    return this.timeZone === "local" ? Ff(Pn(t)) : this.timeZone === "UTC" ? new Date(t.valueOf()) : this.namedTimeZoneImpl ? new Date(t.valueOf() - this.namedTimeZoneImpl.offsetForArray(Pn(t)) * 1e3 * 60) : new Date(t.valueOf() - (n || 0));
  }, e;
}(), Yx = [], um = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, cm = R(R({}, um), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(e, t) {
      return t === "day" ? "Today" : "This " + e;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(e) {
    return "Show " + e + " more event" + (e === 1 ? "" : "s");
  }
});
function Kx(e) {
  for (var t = e.length > 0 ? e[0].code : "en", n = Yx.concat(e), a = {
    en: cm
  }, r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    a[o.code] = o;
  }
  return {
    map: a,
    defaultCode: t
  };
}
function dm(e, t) {
  return typeof e == "object" && !Array.isArray(e) ? fm(e.code, [e.code], e) : Xx(e, t);
}
function Xx(e, t) {
  var n = [].concat(e || []), a = Zx(n, t) || cm;
  return fm(e, n, a);
}
function Zx(e, t) {
  for (var n = 0; n < e.length; n += 1)
    for (var a = e[n].toLocaleLowerCase().split("-"), r = a.length; r > 0; r -= 1) {
      var i = a.slice(0, r).join("-");
      if (t[i])
        return t[i];
    }
  return null;
}
function fm(e, t, n) {
  var a = yc([um, n], ["buttonText"]);
  delete a.code;
  var r = a.week;
  return delete a.week, {
    codeArg: e,
    codes: t,
    week: r,
    simpleNumberFormat: new Intl.NumberFormat(e),
    options: a
  };
}
var Qx = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function Jx(e, t) {
  return qo(eD(e), null, t);
}
function eD(e) {
  var t;
  return e === !0 ? t = [{}] : Array.isArray(e) ? t = e.filter(function(n) {
    return n.daysOfWeek;
  }) : typeof e == "object" && e ? t = [e] : t = [], t = t.map(function(n) {
    return R(R({}, Qx), n);
  }), t;
}
function tD(e, t) {
  var n = {
    left: Math.max(e.left, t.left),
    right: Math.min(e.right, t.right),
    top: Math.max(e.top, t.top),
    bottom: Math.min(e.bottom, t.bottom)
  };
  return n.left < n.right && n.top < n.bottom ? n : !1;
}
var El;
function pm() {
  return El == null && (El = nD()), El;
}
function nD() {
  if (typeof document > "u")
    return !0;
  var e = document.createElement("div");
  e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
  var t = e.querySelector("div"), n = t.offsetHeight > 0;
  return document.body.removeChild(e), n;
}
function Dc(e, t, n, a) {
  return {
    dow: e.getUTCDay(),
    isDisabled: Boolean(a && !da(a.activeRange, e)),
    isOther: Boolean(a && !da(a.currentRange, e)),
    isToday: Boolean(t && da(t, e)),
    isPast: Boolean(n ? e < n : t ? e < t.start : !1),
    isFuture: Boolean(n ? e > n : t ? e >= t.end : !1)
  };
}
function Is(e, t) {
  var n = [
    "fc-day",
    "fc-day-" + bk[e.dow]
  ];
  return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
}
var aD = tt({ year: "numeric", month: "long", day: "numeric" }), rD = tt({ week: "long" });
function ci(e, t, n, a) {
  n === void 0 && (n = "day"), a === void 0 && (a = !0);
  var r = e.dateEnv, i = e.options, o = e.calendarApi, s = r.format(t, n === "week" ? rD : aD);
  if (i.navLinks) {
    var l = r.toDate(t), c = function(u) {
      var d = n === "day" ? i.navLinkDayClick : n === "week" ? i.navLinkWeekClick : null;
      typeof d == "function" ? d.call(o, r.toDate(t), u) : (typeof d == "string" && (n = d), o.zoomTo(t, n));
    };
    return R({ title: Gr(i.navLinkHint, [s, l], s), "data-navlink": "" }, a ? qh(c) : { onClick: c });
  }
  return { "aria-label": s };
}
var wl;
function iD() {
  return wl || (wl = oD()), wl;
}
function oD() {
  var e = document.createElement("div");
  e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
  var t = sD(e);
  return document.body.removeChild(e), t;
}
function sD(e) {
  return {
    x: e.offsetHeight - e.clientHeight,
    y: e.offsetWidth - e.clientWidth
  };
}
function lD(e) {
  for (var t = uD(e), n = e.getBoundingClientRect(), a = 0, r = t; a < r.length; a++) {
    var i = r[a], o = tD(n, i.getBoundingClientRect());
    if (o)
      n = o;
    else
      return null;
  }
  return n;
}
function uD(e) {
  for (var t = []; e instanceof HTMLElement; ) {
    var n = window.getComputedStyle(e);
    if (n.position === "fixed")
      break;
    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode;
  }
  return t;
}
function cD(e, t, n) {
  var a = !1, r = function() {
    a || (a = !0, t.apply(this, arguments));
  }, i = function() {
    a || (a = !0, n && n.apply(this, arguments));
  }, o = e(r, i);
  o && typeof o.then == "function" && o.then(r, i);
}
var dD = function() {
  function e() {
    this.handlers = {}, this.thisContext = null;
  }
  return e.prototype.setThisContext = function(t) {
    this.thisContext = t;
  }, e.prototype.setOptions = function(t) {
    this.options = t;
  }, e.prototype.on = function(t, n) {
    fD(this.handlers, t, n);
  }, e.prototype.off = function(t, n) {
    pD(this.handlers, t, n);
  }, e.prototype.trigger = function(t) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    for (var r = this.handlers[t] || [], i = this.options && this.options[t], o = [].concat(i || [], r), s = 0, l = o; s < l.length; s++) {
      var c = l[s];
      c.apply(this.thisContext, n);
    }
  }, e.prototype.hasHandlers = function(t) {
    return Boolean(this.handlers[t] && this.handlers[t].length || this.options && this.options[t]);
  }, e;
}();
function fD(e, t, n) {
  (e[t] || (e[t] = [])).push(n);
}
function pD(e, t, n) {
  n ? e[t] && (e[t] = e[t].filter(function(a) {
    return a !== n;
  })) : delete e[t];
}
var xu = function() {
  function e(t, n, a, r) {
    this.els = n;
    var i = this.originClientRect = t.getBoundingClientRect();
    a && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
  }
  return e.prototype.buildElHorizontals = function(t) {
    for (var n = [], a = [], r = 0, i = this.els; r < i.length; r++) {
      var o = i[r], s = o.getBoundingClientRect();
      n.push(s.left - t), a.push(s.right - t);
    }
    this.lefts = n, this.rights = a;
  }, e.prototype.buildElVerticals = function(t) {
    for (var n = [], a = [], r = 0, i = this.els; r < i.length; r++) {
      var o = i[r], s = o.getBoundingClientRect();
      n.push(s.top - t), a.push(s.bottom - t);
    }
    this.tops = n, this.bottoms = a;
  }, e.prototype.leftToIndex = function(t) {
    var n = this, a = n.lefts, r = n.rights, i = a.length, o;
    for (o = 0; o < i; o += 1)
      if (t >= a[o] && t < r[o])
        return o;
  }, e.prototype.topToIndex = function(t) {
    var n = this, a = n.tops, r = n.bottoms, i = a.length, o;
    for (o = 0; o < i; o += 1)
      if (t >= a[o] && t < r[o])
        return o;
  }, e.prototype.getWidth = function(t) {
    return this.rights[t] - this.lefts[t];
  }, e.prototype.getHeight = function(t) {
    return this.bottoms[t] - this.tops[t];
  }, e;
}(), vm = function() {
  function e() {
  }
  return e.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  }, e.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  }, e.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  }, e.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  }, e.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  }, e.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }, e.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  }, e.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }, e;
}();
(function(e) {
  fe(t, e);
  function t(n) {
    var a = e.call(this) || this;
    return a.el = n, a;
  }
  return t.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  }, t.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  }, t.prototype.setScrollTop = function(n) {
    this.el.scrollTop = n;
  }, t.prototype.setScrollLeft = function(n) {
    this.el.scrollLeft = n;
  }, t.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  }, t.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  }, t.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  }, t.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  }, t;
})(vm);
(function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.getScrollTop = function() {
    return window.pageYOffset;
  }, t.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  }, t.prototype.setScrollTop = function(n) {
    window.scroll(window.pageXOffset, n);
  }, t.prototype.setScrollLeft = function(n) {
    window.scroll(n, window.pageYOffset);
  }, t.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  }, t.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  }, t.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  }, t.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  }, t;
})(vm);
var wi = function() {
  function e(t) {
    this.iconOverrideOption && this.setIconOverride(t[this.iconOverrideOption]);
  }
  return e.prototype.setIconOverride = function(t) {
    var n, a;
    if (typeof t == "object" && t) {
      n = R({}, this.iconClasses);
      for (a in t)
        n[a] = this.applyIconOverridePrefix(t[a]);
      this.iconClasses = n;
    } else
      t === !1 && (this.iconClasses = {});
  }, e.prototype.applyIconOverridePrefix = function(t) {
    var n = this.iconOverridePrefix;
    return n && t.indexOf(n) !== 0 && (t = n + t), t;
  }, e.prototype.getClass = function(t) {
    return this.classes[t] || "";
  }, e.prototype.getIconClass = function(t, n) {
    var a;
    return n && this.rtlIconClasses ? a = this.rtlIconClasses[t] || this.iconClasses[t] : a = this.iconClasses[t], a ? this.baseIconClass + " " + a : "";
  }, e.prototype.getCustomButtonIconClass = function(t) {
    var n;
    return this.iconOverrideCustomButtonOption && (n = t[this.iconOverrideCustomButtonOption], n) ? this.baseIconClass + " " + this.applyIconOverridePrefix(n) : "";
  }, e;
}();
wi.prototype.classes = {};
wi.prototype.iconClasses = {};
wi.prototype.baseIconClass = "";
wi.prototype.iconOverridePrefix = "";
var vD = function() {
  function e(t, n, a, r) {
    var i = this;
    this.execFunc = t, this.emitter = n, this.scrollTime = a, this.scrollTimeReset = r, this.handleScrollRequest = function(o) {
      i.queuedRequest = R({}, i.queuedRequest || {}, o), i.drain();
    }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  return e.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }, e.prototype.update = function(t) {
    t && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }, e.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }, e.prototype.drain = function() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }, e;
}(), Ca = Uh({});
function hD(e, t, n, a, r, i, o, s, l, c, u, d, f) {
  return {
    dateEnv: r,
    options: n,
    pluginHooks: o,
    emitter: c,
    dispatch: s,
    getCurrentData: l,
    calendarApi: u,
    viewSpec: e,
    viewApi: t,
    dateProfileGenerator: a,
    theme: i,
    isRtl: n.direction === "rtl",
    addResizeHandler: function(p) {
      c.on("_resize", p);
    },
    removeResizeHandler: function(p) {
      c.off("_resize", p);
    },
    createScrollResponder: function(p) {
      return new vD(p, c, Me(n.scrollTime), n.scrollTimeReset);
    },
    registerInteractiveComponent: d,
    unregisterInteractiveComponent: f
  };
}
var Os = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.shouldComponentUpdate = function(n, a) {
    return this.debug && console.log(Hf(n, this.props), Hf(a, this.state)), !bl(this.props, n, this.propEquality) || !bl(this.state, a, this.stateEquality);
  }, t.prototype.safeSetState = function(n) {
    bl(this.state, R(R({}, this.state), n), this.stateEquality) || this.setState(n);
  }, t.addPropsEquality = mD, t.addStateEquality = gD, t.contextType = Ca, t;
}(mc);
Os.prototype.propEquality = {};
Os.prototype.stateEquality = {};
var Be = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.contextType = Ca, t;
}(Os);
function mD(e) {
  var t = Object.create(this.prototype.propEquality);
  R(t, e), this.prototype.propEquality = t;
}
function gD(e) {
  var t = Object.create(this.prototype.stateEquality);
  R(t, e), this.prototype.stateEquality = t;
}
function bn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
var Ta = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.uid = Sr(), n;
  }
  return t.prototype.prepareHits = function() {
  }, t.prototype.queryHit = function(n, a, r, i) {
    return null;
  }, t.prototype.isValidSegDownEl = function(n) {
    return !this.props.eventDrag && !this.props.eventResize && !an(n, ".fc-event-mirror");
  }, t.prototype.isValidDateDownEl = function(n) {
    return !an(n, ".fc-event:not(.fc-bg-event)") && !an(n, ".fc-more-link") && !an(n, "a[data-navlink]") && !an(n, ".fc-popover");
  }, t;
}(Be);
function Tn(e) {
  return {
    id: Sr(),
    deps: e.deps || [],
    reducers: e.reducers || [],
    isLoadingFuncs: e.isLoadingFuncs || [],
    contextInit: [].concat(e.contextInit || []),
    eventRefiners: e.eventRefiners || {},
    eventDefMemberAdders: e.eventDefMemberAdders || [],
    eventSourceRefiners: e.eventSourceRefiners || {},
    isDraggableTransformers: e.isDraggableTransformers || [],
    eventDragMutationMassagers: e.eventDragMutationMassagers || [],
    eventDefMutationAppliers: e.eventDefMutationAppliers || [],
    dateSelectionTransformers: e.dateSelectionTransformers || [],
    datePointTransforms: e.datePointTransforms || [],
    dateSpanTransforms: e.dateSpanTransforms || [],
    views: e.views || {},
    viewPropsTransformers: e.viewPropsTransformers || [],
    isPropsValid: e.isPropsValid || null,
    externalDefTransforms: e.externalDefTransforms || [],
    viewContainerAppends: e.viewContainerAppends || [],
    eventDropTransformers: e.eventDropTransformers || [],
    componentInteractions: e.componentInteractions || [],
    calendarInteractions: e.calendarInteractions || [],
    themeClasses: e.themeClasses || {},
    eventSourceDefs: e.eventSourceDefs || [],
    cmdFormatter: e.cmdFormatter,
    recurringTypes: e.recurringTypes || [],
    namedTimeZonedImpl: e.namedTimeZonedImpl,
    initialView: e.initialView || "",
    elementDraggingImpl: e.elementDraggingImpl,
    optionChangeHandlers: e.optionChangeHandlers || {},
    scrollGridImpl: e.scrollGridImpl || null,
    contentTypeHandlers: e.contentTypeHandlers || {},
    listenerRefiners: e.listenerRefiners || {},
    optionRefiners: e.optionRefiners || {},
    propSetHandlers: e.propSetHandlers || {}
  };
}
function yD(e, t) {
  var n = {}, a = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function r(i) {
    for (var o = 0, s = i; o < s.length; o++) {
      var l = s[o];
      n[l.id] || (n[l.id] = !0, r(l.deps), a = _D(a, l));
    }
  }
  return e && r(e), r(t), a;
}
function bD() {
  var e = [], t = [], n;
  return function(a, r) {
    return (!n || !ur(a, e) || !ur(r, t)) && (n = yD(a, r)), e = a, t = r, n;
  };
}
function _D(e, t) {
  return {
    reducers: e.reducers.concat(t.reducers),
    isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
    contextInit: e.contextInit.concat(t.contextInit),
    eventRefiners: R(R({}, e.eventRefiners), t.eventRefiners),
    eventDefMemberAdders: e.eventDefMemberAdders.concat(t.eventDefMemberAdders),
    eventSourceRefiners: R(R({}, e.eventSourceRefiners), t.eventSourceRefiners),
    isDraggableTransformers: e.isDraggableTransformers.concat(t.isDraggableTransformers),
    eventDragMutationMassagers: e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),
    eventDefMutationAppliers: e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),
    dateSelectionTransformers: e.dateSelectionTransformers.concat(t.dateSelectionTransformers),
    datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms),
    dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
    views: R(R({}, e.views), t.views),
    viewPropsTransformers: e.viewPropsTransformers.concat(t.viewPropsTransformers),
    isPropsValid: t.isPropsValid || e.isPropsValid,
    externalDefTransforms: e.externalDefTransforms.concat(t.externalDefTransforms),
    viewContainerAppends: e.viewContainerAppends.concat(t.viewContainerAppends),
    eventDropTransformers: e.eventDropTransformers.concat(t.eventDropTransformers),
    calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions),
    componentInteractions: e.componentInteractions.concat(t.componentInteractions),
    themeClasses: R(R({}, e.themeClasses), t.themeClasses),
    eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
    cmdFormatter: t.cmdFormatter || e.cmdFormatter,
    recurringTypes: e.recurringTypes.concat(t.recurringTypes),
    namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl,
    initialView: e.initialView || t.initialView,
    elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
    optionChangeHandlers: R(R({}, e.optionChangeHandlers), t.optionChangeHandlers),
    scrollGridImpl: t.scrollGridImpl || e.scrollGridImpl,
    contentTypeHandlers: R(R({}, e.contentTypeHandlers), t.contentTypeHandlers),
    listenerRefiners: R(R({}, e.listenerRefiners), t.listenerRefiners),
    optionRefiners: R(R({}, e.optionRefiners), t.optionRefiners),
    propSetHandlers: R(R({}, e.propSetHandlers), t.propSetHandlers)
  };
}
var Gn = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(wi);
Gn.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
Gn.prototype.baseIconClass = "fc-icon";
Gn.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
Gn.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
Gn.prototype.iconOverrideOption = "buttonIcons";
Gn.prototype.iconOverrideCustomButtonOption = "icon";
Gn.prototype.iconOverridePrefix = "fc-icon-";
function ED(e, t) {
  var n = {}, a;
  for (a in e)
    Du(a, n, e, t);
  for (a in t)
    Du(a, n, e, t);
  return n;
}
function Du(e, t, n, a) {
  if (t[e])
    return t[e];
  var r = wD(e, t, n, a);
  return r && (t[e] = r), r;
}
function wD(e, t, n, a) {
  var r = n[e], i = a[e], o = function(u) {
    return r && r[u] !== null ? r[u] : i && i[u] !== null ? i[u] : null;
  }, s = o("component"), l = o("superType"), c = null;
  if (l) {
    if (l === e)
      throw new Error("Can't have a custom view type that references itself");
    c = Du(l, t, n, a);
  }
  return !s && c && (s = c.component), s ? {
    type: e,
    component: s,
    defaults: R(R({}, c ? c.defaults : {}), r ? r.rawOptions : {}),
    overrides: R(R({}, c ? c.overrides : {}), i ? i.rawOptions : {})
  } : null;
}
var kn = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.rootElRef = It(), n.handleRootEl = function(a) {
      bn(n.rootElRef, a), n.props.elRef && bn(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props, r = a.hookProps;
    return I(Ac, { hookProps: r, didMount: a.didMount, willUnmount: a.willUnmount, elRef: this.handleRootEl }, function(i) {
      return I(mm, { hookProps: r, content: a.content, defaultContent: a.defaultContent, backupElRef: n.rootElRef }, function(o, s) {
        return a.children(i, ym(a.classNames, r), o, s);
      });
    });
  }, t;
}(Be), hm = Uh(0);
function mm(e) {
  return I(hm.Consumer, null, function(t) {
    return I(SD, R({ renderId: t }, e));
  });
}
var SD = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.innerElRef = It(), n;
  }
  return t.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }, t.prototype.componentDidMount = function() {
    this.updateCustomContent();
  }, t.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  }, t.prototype.componentWillUnmount = function() {
    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
  }, t.prototype.renderInnerContent = function() {
    var n = this.customContentInfo, a = this.getInnerContent(), r = this.getContentMeta(a);
    return !n || n.contentKey !== r.contentKey ? (n && (n.destroy && n.destroy(), n = this.customContentInfo = null), r.contentKey && (n = this.customContentInfo = R({ contentKey: r.contentKey, contentVal: a[r.contentKey] }, r.buildLifecycleFuncs()))) : n && (n.contentVal = a[r.contentKey]), n ? [] : a;
  }, t.prototype.getInnerContent = function() {
    var n = this.props, a = Qf(n.content, n.hookProps);
    return a === void 0 && (a = Qf(n.defaultContent, n.hookProps)), a == null ? null : a;
  }, t.prototype.getContentMeta = function(n) {
    var a = this.context.pluginHooks.contentTypeHandlers, r = "", i = null;
    if (n) {
      for (var o in a)
        if (n[o] !== void 0) {
          r = o, i = a[o];
          break;
        }
    }
    return { contentKey: r, buildLifecycleFuncs: i };
  }, t.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, t;
}(Be), Ac = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleRootEl = function(a) {
      n.rootEl = a, n.props.elRef && bn(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, t.prototype.componentDidMount = function() {
    var n = this.props.didMount;
    n && n(R(R({}, this.props.hookProps), { el: this.rootEl }));
  }, t.prototype.componentWillUnmount = function() {
    var n = this.props.willUnmount;
    n && n(R(R({}, this.props.hookProps), { el: this.rootEl }));
  }, t;
}(Be);
function gm() {
  var e, t, n = [];
  return function(a, r) {
    return (!t || !yn(t, r) || a !== e) && (e = a, t = r, n = ym(a, r)), n;
  };
}
function ym(e, t) {
  return typeof e == "function" && (e = e(t)), Su(e);
}
function Qf(e, t) {
  return typeof e == "function" ? e(t, I) : e;
}
var Ko = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.normalizeClassNames = gm(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = r.options, o = { view: r.viewApi }, s = this.normalizeClassNames(i.viewClassNames, o);
    return I(Ac, { hookProps: o, didMount: i.viewDidMount, willUnmount: i.viewWillUnmount, elRef: a.elRef }, function(l) {
      return a.children(l, ["fc-" + a.viewSpec.type + "-view", "fc-view"].concat(s));
    });
  }, t;
}(Be);
function Jf(e) {
  return _i(e, CD);
}
function CD(e) {
  var t = typeof e == "function" ? { component: e } : e, n = t.component;
  return t.content && (n = TD(t)), {
    superType: t.type,
    component: n,
    rawOptions: t
  };
}
function TD(e) {
  return function(t) {
    return I(Ca.Consumer, null, function(n) {
      return I(Ko, { viewSpec: n.viewSpec }, function(a, r) {
        var i = R(R({}, t), { nextDayThreshold: n.options.nextDayThreshold });
        return I(kn, { hookProps: i, classNames: e.classNames, content: e.content, didMount: e.didMount, willUnmount: e.willUnmount, elRef: a }, function(o, s, l, c) {
          return I("div", { className: r.concat(s).join(" "), ref: o }, c);
        });
      });
    });
  };
}
function kD(e, t, n, a) {
  var r = Jf(e), i = Jf(t.views), o = ED(r, i);
  return _i(o, function(s) {
    return xD(s, i, t, n, a);
  });
}
function xD(e, t, n, a, r) {
  var i = e.overrides.duration || e.defaults.duration || a.duration || n.duration, o = null, s = "", l = "", c = {};
  if (i && (o = DD(i), o)) {
    var u = Eu(o);
    s = u.unit, u.value === 1 && (l = s, c = t[s] ? t[s].rawOptions : {});
  }
  var d = function(p) {
    var h = p.buttonText || {}, y = e.defaults.buttonTextKey;
    return y != null && h[y] != null ? h[y] : h[e.type] != null ? h[e.type] : h[l] != null ? h[l] : null;
  }, f = function(p) {
    var h = p.buttonHints || {}, y = e.defaults.buttonTextKey;
    return y != null && h[y] != null ? h[y] : h[e.type] != null ? h[e.type] : h[l] != null ? h[l] : null;
  };
  return {
    type: e.type,
    component: e.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: e.defaults,
    optionOverrides: R(R({}, c), e.overrides),
    buttonTextOverride: d(a) || d(n) || e.overrides.buttonText,
    buttonTextDefault: d(r) || e.defaults.buttonText || d(Yr) || e.type,
    buttonTitleOverride: f(a) || f(n) || e.overrides.buttonHint,
    buttonTitleDefault: f(r) || e.defaults.buttonHint || f(Yr)
  };
}
var ep = {};
function DD(e) {
  var t = JSON.stringify(e), n = ep[t];
  return n === void 0 && (n = Me(e), ep[t] = n), n;
}
var bm = function() {
  function e(t) {
    this.props = t, this.nowDate = Ei(t.nowInput, t.dateEnv), this.initHiddenDays();
  }
  return e.prototype.buildPrev = function(t, n, a) {
    var r = this.props.dateEnv, i = r.subtract(
      r.startOf(n, t.currentRangeUnit),
      t.dateIncrement
    );
    return this.build(i, -1, a);
  }, e.prototype.buildNext = function(t, n, a) {
    var r = this.props.dateEnv, i = r.add(
      r.startOf(n, t.currentRangeUnit),
      t.dateIncrement
    );
    return this.build(i, 1, a);
  }, e.prototype.build = function(t, n, a) {
    a === void 0 && (a = !0);
    var r = this.props, i, o, s, l, c, u;
    return i = this.buildValidRange(), i = this.trimHiddenDays(i), a && (t = yx(t, i)), o = this.buildCurrentRangeInfo(t, n), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), c = l, r.showNonCurrentDates || (c = cr(c, o.range)), c = this.adjustActiveRange(c), c = cr(c, i), u = gx(o.range, i), {
      validRange: i,
      currentRange: o.range,
      currentRangeUnit: o.unit,
      isRangeAllDay: s,
      activeRange: c,
      renderRange: l,
      slotMinTime: r.slotMinTime,
      slotMaxTime: r.slotMaxTime,
      isValid: u,
      dateIncrement: this.buildDateIncrement(o.duration)
    };
  }, e.prototype.buildValidRange = function() {
    var t = this.props.validRangeInput, n = typeof t == "function" ? t.call(this.props.calendarApi, this.nowDate) : t;
    return this.refineRange(n) || { start: null, end: null };
  }, e.prototype.buildCurrentRangeInfo = function(t, n) {
    var a = this.props, r = null, i = null, o = null, s;
    return a.duration ? (r = a.duration, i = a.durationUnit, o = this.buildRangeFromDuration(t, n, r, i)) : (s = this.props.dayCount) ? (i = "day", o = this.buildRangeFromDayCount(t, n, s)) : (o = this.buildCustomVisibleRange(t)) ? i = a.dateEnv.greatestWholeUnit(o.start, o.end).unit : (r = this.getFallbackDuration(), i = Eu(r).unit, o = this.buildRangeFromDuration(t, n, r, i)), { duration: r, unit: i, range: o };
  }, e.prototype.getFallbackDuration = function() {
    return Me({ day: 1 });
  }, e.prototype.adjustActiveRange = function(t) {
    var n = this.props, a = n.dateEnv, r = n.usesMinMaxTime, i = n.slotMinTime, o = n.slotMaxTime, s = t.start, l = t.end;
    return r && (Za(i) < 0 && (s = ze(s), s = a.add(s, i)), Za(o) > 1 && (l = ze(l), l = nt(l, -1), l = a.add(l, o))), { start: s, end: l };
  }, e.prototype.buildRangeFromDuration = function(t, n, a, r) {
    var i = this.props, o = i.dateEnv, s = i.dateAlignment, l, c, u;
    if (!s) {
      var d = this.props.dateIncrement;
      d && ui(d) < ui(a) ? s = Eu(d).unit : s = r;
    }
    Za(a) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n), l = ze(l));
    function f() {
      l = o.startOf(t, s), c = o.add(l, a), u = { start: l, end: c };
    }
    return f(), this.trimHiddenDays(u) || (t = this.skipHiddenDays(t, n), f()), u;
  }, e.prototype.buildRangeFromDayCount = function(t, n, a) {
    var r = this.props, i = r.dateEnv, o = r.dateAlignment, s = 0, l = t, c;
    o && (l = i.startOf(l, o)), l = ze(l), l = this.skipHiddenDays(l, n), c = l;
    do
      c = nt(c, 1), this.isHiddenDay(c) || (s += 1);
    while (s < a);
    return { start: l, end: c };
  }, e.prototype.buildCustomVisibleRange = function(t) {
    var n = this.props, a = n.visibleRangeInput, r = typeof a == "function" ? a.call(n.calendarApi, n.dateEnv.toDate(t)) : a, i = this.refineRange(r);
    return i && (i.start == null || i.end == null) ? null : i;
  }, e.prototype.buildRenderRange = function(t, n, a) {
    return t;
  }, e.prototype.buildDateIncrement = function(t) {
    var n = this.props.dateIncrement, a;
    return n || ((a = this.props.dateAlignment) ? Me(1, a) : t || Me({ days: 1 }));
  }, e.prototype.refineRange = function(t) {
    if (t) {
      var n = hx(t, this.props.dateEnv);
      return n && (n = Tc(n)), n;
    }
    return null;
  }, e.prototype.initHiddenDays = function() {
    var t = this.props.hiddenDays || [], n = [], a = 0, r;
    for (this.props.weekends === !1 && t.push(0, 6), r = 0; r < 7; r += 1)
      (n[r] = t.indexOf(r) !== -1) || (a += 1);
    if (!a)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = n;
  }, e.prototype.trimHiddenDays = function(t) {
    var n = t.start, a = t.end;
    return n && (n = this.skipHiddenDays(n)), a && (a = this.skipHiddenDays(a, -1, !0)), n == null || a == null || n < a ? { start: n, end: a } : null;
  }, e.prototype.isHiddenDay = function(t) {
    return t instanceof Date && (t = t.getUTCDay()), this.isHiddenDayHash[t];
  }, e.prototype.skipHiddenDays = function(t, n, a) {
    for (n === void 0 && (n = 1), a === void 0 && (a = !1); this.isHiddenDayHash[(t.getUTCDay() + (a ? n : 0) + 7) % 7]; )
      t = nt(t, n);
    return t;
  }, e;
}();
function AD(e, t) {
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      e = t.viewType;
  }
  return e;
}
function RD(e, t) {
  var n;
  switch (t.type) {
    case "SET_OPTION":
      return R(R({}, e), (n = {}, n[t.optionName] = t.rawOptionValue, n));
    default:
      return e;
  }
}
function ID(e, t, n, a) {
  var r;
  switch (t.type) {
    case "CHANGE_VIEW_TYPE":
      return a.build(t.dateMarker || n);
    case "CHANGE_DATE":
      return a.build(t.dateMarker);
    case "PREV":
      if (r = a.buildPrev(e, n), r.isValid)
        return r;
      break;
    case "NEXT":
      if (r = a.buildNext(e, n), r.isValid)
        return r;
      break;
  }
  return e;
}
function OD(e, t, n) {
  var a = t ? t.activeRange : null;
  return Em({}, LD(e, n), a, n);
}
function $D(e, t, n, a) {
  var r = n ? n.activeRange : null;
  switch (t.type) {
    case "ADD_EVENT_SOURCES":
      return Em(e, t.sources, r, a);
    case "REMOVE_EVENT_SOURCE":
      return MD(e, t.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? wm(e, r, a) : e;
    case "FETCH_EVENT_SOURCES":
      return Rc(e, t.sourceIds ? Kh(t.sourceIds) : Sm(e, a), r, t.isRefetch || !1, a);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return VD(e, t.sourceId, t.fetchId, t.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return e;
  }
}
function ND(e, t, n) {
  var a = t ? t.activeRange : null;
  return Rc(e, Sm(e, n), a, !0, n);
}
function _m(e) {
  for (var t in e)
    if (e[t].isFetching)
      return !0;
  return !1;
}
function Em(e, t, n, a) {
  for (var r = {}, i = 0, o = t; i < o.length; i++) {
    var s = o[i];
    r[s.sourceId] = s;
  }
  return n && (r = wm(r, n, a)), R(R({}, e), r);
}
function MD(e, t) {
  return lr(e, function(n) {
    return n.sourceId !== t;
  });
}
function wm(e, t, n) {
  return Rc(e, lr(e, function(a) {
    return PD(a, t, n);
  }), t, !1, n);
}
function PD(e, t, n) {
  return Cm(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
}
function Rc(e, t, n, a, r) {
  var i = {};
  for (var o in e) {
    var s = e[o];
    t[o] ? i[o] = BD(s, n, a, r) : i[o] = s;
  }
  return i;
}
function BD(e, t, n, a) {
  var r = a.options, i = a.calendarApi, o = a.pluginHooks.eventSourceDefs[e.sourceDefId], s = Sr();
  return o.fetch({
    eventSource: e,
    range: t,
    isRefetch: n,
    context: a
  }, function(l) {
    var c = l.rawEvents;
    r.eventSourceSuccess && (c = r.eventSourceSuccess.call(i, c, l.xhr) || c), e.success && (c = e.success.call(i, c, l.xhr) || c), a.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: e.sourceId,
      fetchId: s,
      fetchRange: t,
      rawEvents: c
    });
  }, function(l) {
    console.warn(l.message, l), r.eventSourceFailure && r.eventSourceFailure.call(i, l), e.failure && e.failure(l), a.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: e.sourceId,
      fetchId: s,
      fetchRange: t,
      error: l
    });
  }), R(R({}, e), { isFetching: !0, latestFetchId: s });
}
function VD(e, t, n, a) {
  var r, i = e[t];
  return i && n === i.latestFetchId ? R(R({}, e), (r = {}, r[t] = R(R({}, i), { isFetching: !1, fetchRange: a }), r)) : e;
}
function Sm(e, t) {
  return lr(e, function(n) {
    return Cm(n, t);
  });
}
function LD(e, t) {
  var n = om(t), a = [].concat(e.eventSources || []), r = [];
  e.initialEvents && a.unshift(e.initialEvents), e.events && a.unshift(e.events);
  for (var i = 0, o = a; i < o.length; i++) {
    var s = o[i], l = im(s, t, n);
    l && r.push(l);
  }
  return r;
}
function Cm(e, t) {
  var n = t.pluginHooks.eventSourceDefs;
  return !n[e.sourceDefId].ignoreRange;
}
function FD(e, t, n, a, r) {
  switch (t.type) {
    case "RECEIVE_EVENTS":
      return HD(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, r);
    case "ADD_EVENTS":
      return UD(
        e,
        t.eventStore,
        a ? a.activeRange : null,
        r
      );
    case "RESET_EVENTS":
      return t.eventStore;
    case "MERGE_EVENTS":
      return wc(e, t.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return a ? As(e, a.activeRange, r) : e;
    case "REMOVE_EVENTS":
      return ox(e, t.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Tm(e, t.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Sc(e, function(i) {
        return !i.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return ya();
    default:
      return e;
  }
}
function HD(e, t, n, a, r, i) {
  if (t && n === t.latestFetchId) {
    var o = qo(zD(r, t, i), t, i);
    return a && (o = As(o, a, i)), wc(Tm(e, t.sourceId), o);
  }
  return e;
}
function zD(e, t, n) {
  var a = n.options.eventDataTransform, r = t ? t.eventDataTransform : null;
  return r && (e = tp(e, r)), a && (e = tp(e, a)), e;
}
function tp(e, t) {
  var n;
  if (!t)
    n = e;
  else {
    n = [];
    for (var a = 0, r = e; a < r.length; a++) {
      var i = r[a], o = t(i);
      o ? n.push(o) : o == null && n.push(i);
    }
  }
  return n;
}
function UD(e, t, n, a) {
  return n && (t = As(t, n, a)), wc(e, t);
}
function jD(e, t, n) {
  var a = e.defs, r = _i(e.instances, function(i) {
    var o = a[i.defId];
    return o.allDay || o.recurringDef ? i : R(R({}, i), { range: {
      start: n.createMarker(t.toDate(i.range.start, i.forcedStartTzo)),
      end: n.createMarker(t.toDate(i.range.end, i.forcedEndTzo))
    }, forcedStartTzo: n.canComputeOffset ? null : i.forcedStartTzo, forcedEndTzo: n.canComputeOffset ? null : i.forcedEndTzo });
  });
  return { defs: a, instances: r };
}
function Tm(e, t) {
  return Sc(e, function(n) {
    return n.sourceId !== t;
  });
}
function WD(e, t) {
  switch (t.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return t.selection;
    default:
      return e;
  }
}
function qD(e, t) {
  switch (t.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return t.eventInstanceId;
    default:
      return e;
  }
}
function GD(e, t) {
  var n;
  switch (t.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return n = t.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return e;
  }
}
function YD(e, t) {
  var n;
  switch (t.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return n = t.state, {
        affectedEvents: n.affectedEvents,
        mutatedEvents: n.mutatedEvents,
        isEvent: n.isEvent
      };
    default:
      return e;
  }
}
function KD(e, t, n, a, r) {
  var i = e.headerToolbar ? np(e.headerToolbar, e, t, n, a, r) : null, o = e.footerToolbar ? np(e.footerToolbar, e, t, n, a, r) : null;
  return { header: i, footer: o };
}
function np(e, t, n, a, r, i) {
  var o = {}, s = [], l = !1;
  for (var c in e) {
    var u = e[c], d = XD(u, t, n, a, r, i);
    o[c] = d.widgets, s.push.apply(s, d.viewsWithButtons), l = l || d.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function XD(e, t, n, a, r, i) {
  var o = t.direction === "rtl", s = t.customButtons || {}, l = n.buttonText || {}, c = t.buttonText || {}, u = n.buttonHints || {}, d = t.buttonHints || {}, f = e ? e.split(" ") : [], p = [], h = !1, y = f.map(function(w) {
    return w.split(",").map(function(m) {
      if (m === "title")
        return h = !0, { buttonName: m };
      var _, k, x, D, A, L;
      if (_ = s[m])
        x = function(j) {
          _.click && _.click.call(j.target, j, j.target);
        }, (D = a.getCustomButtonIconClass(_)) || (D = a.getIconClass(m, o)) || (A = _.text), L = _.hint || _.text;
      else if (k = r[m]) {
        p.push(m), x = function() {
          i.changeView(m);
        }, (A = k.buttonTextOverride) || (D = a.getIconClass(m, o)) || (A = k.buttonTextDefault);
        var $ = k.buttonTextOverride || k.buttonTextDefault;
        L = Gr(
          k.buttonTitleOverride || k.buttonTitleDefault || t.viewHint,
          [$, m],
          $
        );
      } else if (i[m])
        if (x = function() {
          i[m]();
        }, (A = l[m]) || (D = a.getIconClass(m, o)) || (A = c[m]), m === "prevYear" || m === "nextYear") {
          var O = m === "prevYear" ? "prev" : "next";
          L = Gr(u[O] || d[O], [
            c.year || "year",
            "year"
          ], c[m]);
        } else
          L = function(j) {
            return Gr(u[m] || d[m], [
              c[j] || j,
              j
            ], c[m]);
          };
      return { buttonName: m, buttonClick: x, buttonIcon: D, buttonText: A, buttonHint: L };
    });
  });
  return { widgets: y, viewsWithButtons: p, hasTitle: h };
}
var ZD = {
  ignoreRange: !0,
  parseMeta: function(e) {
    return Array.isArray(e.events) ? e.events : null;
  },
  fetch: function(e, t) {
    t({
      rawEvents: e.eventSource.meta
    });
  }
}, QD = Tn({
  eventSourceDefs: [ZD]
}), JD = {
  parseMeta: function(e) {
    return typeof e.events == "function" ? e.events : null;
  },
  fetch: function(e, t, n) {
    var a = e.context.dateEnv, r = e.eventSource.meta;
    cD(r.bind(null, am(e.range, a)), function(i) {
      t({ rawEvents: i });
    }, n);
  }
}, eA = Tn({
  eventSourceDefs: [JD]
});
function km(e, t, n, a, r) {
  e = e.toUpperCase();
  var i = null;
  e === "GET" ? t = tA(t, n) : i = xm(n);
  var o = new XMLHttpRequest();
  o.open(e, t, !0), e !== "GET" && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
    if (o.status >= 200 && o.status < 400) {
      var s = !1, l = void 0;
      try {
        l = JSON.parse(o.responseText), s = !0;
      } catch {
      }
      s ? a(l, o) : r("Failure parsing JSON", o);
    } else
      r("Request failed", o);
  }, o.onerror = function() {
    r("Request failed", o);
  }, o.send(i);
}
function tA(e, t) {
  return e + (e.indexOf("?") === -1 ? "?" : "&") + xm(t);
}
function xm(e) {
  var t = [];
  for (var n in e)
    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t.join("&");
}
var nA = {
  method: String,
  extraParams: V,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, aA = {
  parseMeta: function(e) {
    return e.url && (e.format === "json" || !e.format) ? {
      url: e.url,
      format: "json",
      method: (e.method || "GET").toUpperCase(),
      extraParams: e.extraParams,
      startParam: e.startParam,
      endParam: e.endParam,
      timeZoneParam: e.timeZoneParam
    } : null;
  },
  fetch: function(e, t, n) {
    var a = e.eventSource.meta, r = iA(a, e.range, e.context);
    km(a.method, a.url, r, function(i, o) {
      t({ rawEvents: i, xhr: o });
    }, function(i, o) {
      n({ message: i, xhr: o });
    });
  }
}, rA = Tn({
  eventSourceRefiners: nA,
  eventSourceDefs: [aA]
});
function iA(e, t, n) {
  var a = n.dateEnv, r = n.options, i, o, s, l, c = {};
  return i = e.startParam, i == null && (i = r.startParam), o = e.endParam, o == null && (o = r.endParam), s = e.timeZoneParam, s == null && (s = r.timeZoneParam), typeof e.extraParams == "function" ? l = e.extraParams() : l = e.extraParams || {}, R(c, l), c[i] = a.formatIso(t.start), c[o] = a.formatIso(t.end), a.timeZone !== "local" && (c[s] = a.timeZone), c;
}
var oA = {
  daysOfWeek: V,
  startTime: Me,
  endTime: Me,
  duration: Me,
  startRecur: V,
  endRecur: V
}, sA = {
  parse: function(e, t) {
    if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
      var n = {
        daysOfWeek: e.daysOfWeek || null,
        startTime: e.startTime || null,
        endTime: e.endTime || null,
        startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
        endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
      }, a = void 0;
      return e.duration && (a = e.duration), !a && e.startTime && e.endTime && (a = Vk(e.endTime, e.startTime)), {
        allDayGuess: Boolean(!e.startTime && !e.endTime),
        duration: a,
        typeData: n
      };
    }
    return null;
  },
  expand: function(e, t, n) {
    var a = cr(t, { start: e.startRecur, end: e.endRecur });
    return a ? uA(e.daysOfWeek, e.startTime, a, n) : [];
  }
}, lA = Tn({
  recurringTypes: [sA],
  eventRefiners: oA
});
function uA(e, t, n, a) {
  for (var r = e ? Kh(e) : null, i = ze(n.start), o = n.end, s = []; i < o; ) {
    var l = void 0;
    (!r || r[i.getUTCDay()]) && (t ? l = a.add(i, t) : l = i, s.push(l)), i = nt(i, 1);
  }
  return s;
}
var cA = Tn({
  optionChangeHandlers: {
    events: function(e, t) {
      ap([e], t);
    },
    eventSources: ap
  }
});
function ap(e, t) {
  for (var n = bc(t.getCurrentData().eventSources), a = [], r = 0, i = e; r < i.length; r++) {
    for (var o = i[r], s = !1, l = 0; l < n.length; l += 1)
      if (n[l]._raw === o) {
        n.splice(l, 1), s = !0;
        break;
      }
    s || a.push(o);
  }
  for (var c = 0, u = n; c < u.length; c++) {
    var d = u[c];
    t.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: d.sourceId
    });
  }
  for (var f = 0, p = a; f < p.length; f++) {
    var h = p[f];
    t.calendarApi.addEventSource(h);
  }
}
function dA(e, t) {
  t.emitter.trigger("datesSet", R(R({}, am(e.activeRange, t.dateEnv)), { view: t.viewApi }));
}
function fA(e, t) {
  var n = t.emitter;
  n.hasHandlers("eventsSet") && n.trigger("eventsSet", xc(e, t));
}
var pA = [
  QD,
  eA,
  rA,
  lA,
  cA,
  Tn({
    isLoadingFuncs: [
      function(e) {
        return _m(e.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: vA,
      domNodes: hA
    },
    propSetHandlers: {
      dateProfile: dA,
      eventStore: fA
    }
  })
];
function vA() {
  var e = null, t = "";
  function n(r, i) {
    (r !== e || i !== t) && (r.innerHTML = i), e = r, t = i;
  }
  function a() {
    e.innerHTML = "", e = null, t = "";
  }
  return { render: n, destroy: a };
}
function hA() {
  var e = null, t = [];
  function n(r, i) {
    var o = Array.prototype.slice.call(i);
    if (r !== e || !ur(t, o)) {
      for (var s = 0, l = o; s < l.length; s++) {
        var c = l[s];
        r.appendChild(c);
      }
      a();
    }
    e = r, t = o;
  }
  function a() {
    t.forEach(ok), t = [], e = null;
  }
  return { render: n, destroy: a };
}
var Ic = function() {
  function e(t) {
    this.drainedOption = t, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  return e.prototype.request = function(t) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), t == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      t
    ));
  }, e.prototype.pause = function(t) {
    t === void 0 && (t = "");
    var n = this.pauseDepths;
    n[t] = (n[t] || 0) + 1, this.clearTimeout();
  }, e.prototype.resume = function(t, n) {
    t === void 0 && (t = "");
    var a = this.pauseDepths;
    if (t in a) {
      if (n)
        delete a[t];
      else {
        a[t] -= 1;
        var r = a[t];
        r <= 0 && delete a[t];
      }
      this.tryDrain();
    }
  }, e.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  }, e.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }, e.prototype.clear = function() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }, e.prototype.clearTimeout = function() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }, e.prototype.drained = function() {
    this.drainedOption && this.drainedOption();
  }, e;
}(), mA = function() {
  function e(t, n) {
    this.runTaskOption = t, this.drainedOption = n, this.queue = [], this.delayedRunner = new Ic(this.drain.bind(this));
  }
  return e.prototype.request = function(t, n) {
    this.queue.push(t), this.delayedRunner.request(n);
  }, e.prototype.pause = function(t) {
    this.delayedRunner.pause(t);
  }, e.prototype.resume = function(t, n) {
    this.delayedRunner.resume(t, n);
  }, e.prototype.drain = function() {
    for (var t = this.queue; t.length; ) {
      for (var n = [], a = void 0; a = t.shift(); )
        this.runTask(a), n.push(a);
      this.drained(n);
    }
  }, e.prototype.runTask = function(t) {
    this.runTaskOption && this.runTaskOption(t);
  }, e.prototype.drained = function(t) {
    this.drainedOption && this.drainedOption(t);
  }, e;
}();
function gA(e, t, n) {
  var a;
  return /^(year|month)$/.test(e.currentRangeUnit) ? a = e.currentRange : a = e.activeRange, n.formatRange(a.start, a.end, tt(t.titleFormat || yA(e)), {
    isEndExclusive: e.isRangeAllDay,
    defaultSeparator: t.titleRangeSeparator
  });
}
function yA(e) {
  var t = e.currentRangeUnit;
  if (t === "year")
    return { year: "numeric" };
  if (t === "month")
    return { year: "numeric", month: "long" };
  var n = zo(e.currentRange.start, e.currentRange.end);
  return n !== null && n > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var Dm = function() {
  function e(t) {
    var n = this;
    this.computeOptionsData = ke(this._computeOptionsData), this.computeCurrentViewData = ke(this._computeCurrentViewData), this.organizeRawLocales = ke(Kx), this.buildLocale = ke(dm), this.buildPluginHooks = bD(), this.buildDateEnv = ke(bA), this.buildTheme = ke(_A), this.parseToolbars = ke(KD), this.buildViewSpecs = ke(kD), this.buildDateProfileGenerator = mo(EA), this.buildViewApi = ke(wA), this.buildViewUiProps = mo(TA), this.buildEventUiBySource = ke(SA, yn), this.buildEventUiBases = ke(CA), this.parseContextBusinessHours = mo(kA), this.buildTitle = ke(gA), this.emitter = new dD(), this.actionRunner = new mA(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return n.data;
    }, this.dispatch = function(k) {
      n.actionRunner.request(k);
    }, this.props = t, this.actionRunner.pause();
    var a = {}, r = this.computeOptionsData(t.optionOverrides, a, t.calendarApi), i = r.calendarOptions.initialView || r.pluginHooks.initialView, o = this.computeCurrentViewData(i, r, t.optionOverrides, a);
    t.calendarApi.currentDataManager = this, this.emitter.setThisContext(t.calendarApi), this.emitter.setOptions(o.options);
    var s = Fx(r.calendarOptions, r.dateEnv), l = o.dateProfileGenerator.build(s);
    da(l.activeRange, s) || (s = l.currentRange.start);
    for (var c = {
      dateEnv: r.dateEnv,
      options: r.calendarOptions,
      pluginHooks: r.pluginHooks,
      calendarApi: t.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, u = 0, d = r.pluginHooks.contextInit; u < d.length; u++) {
      var f = d[u];
      f(c);
    }
    for (var p = OD(r.calendarOptions, l, c), h = {
      dynamicOptionOverrides: a,
      currentViewType: i,
      currentDate: s,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(c),
      eventSources: p,
      eventUiBases: {},
      eventStore: ya(),
      renderableEventStore: ya(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(c).selectionConfig
    }, y = R(R({}, c), h), w = 0, m = r.pluginHooks.reducers; w < m.length; w++) {
      var _ = m[w];
      R(h, _(null, null, y));
    }
    Sl(h, c) && this.emitter.trigger("loading", !0), this.state = h, this.updateData(), this.actionRunner.resume();
  }
  return e.prototype.resetOptions = function(t, n) {
    var a = this.props;
    a.optionOverrides = n ? R(R({}, a.optionOverrides), t) : t, this.actionRunner.request({
      type: "NOTHING"
    });
  }, e.prototype._handleAction = function(t) {
    var n = this, a = n.props, r = n.state, i = n.emitter, o = RD(r.dynamicOptionOverrides, t), s = this.computeOptionsData(a.optionOverrides, o, a.calendarApi), l = AD(r.currentViewType, t), c = this.computeCurrentViewData(l, s, a.optionOverrides, o);
    a.calendarApi.currentDataManager = this, i.setThisContext(a.calendarApi), i.setOptions(c.options);
    var u = {
      dateEnv: s.dateEnv,
      options: s.calendarOptions,
      pluginHooks: s.pluginHooks,
      calendarApi: a.calendarApi,
      dispatch: this.dispatch,
      emitter: i,
      getCurrentData: this.getCurrentData
    }, d = r.currentDate, f = r.dateProfile;
    this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (f = c.dateProfileGenerator.build(d)), d = Lx(d, t), f = ID(f, t, d, c.dateProfileGenerator), (t.type === "PREV" || t.type === "NEXT" || !da(f.currentRange, d)) && (d = f.currentRange.start);
    for (var p = $D(r.eventSources, t, f, u), h = FD(r.eventStore, t, p, f, u), y = _m(p), w = y && !c.options.progressiveEventRendering && r.renderableEventStore || h, m = this.buildViewUiProps(u), _ = m.eventUiSingleBase, k = m.selectionConfig, x = this.buildEventUiBySource(p), D = this.buildEventUiBases(w.defs, _, x), A = {
      dynamicOptionOverrides: o,
      currentViewType: l,
      currentDate: d,
      dateProfile: f,
      eventSources: p,
      eventStore: h,
      renderableEventStore: w,
      selectionConfig: k,
      eventUiBases: D,
      businessHours: this.parseContextBusinessHours(u),
      dateSelection: WD(r.dateSelection, t),
      eventSelection: qD(r.eventSelection, t),
      eventDrag: GD(r.eventDrag, t),
      eventResize: YD(r.eventResize, t)
    }, L = R(R({}, u), A), $ = 0, O = s.pluginHooks.reducers; $ < O.length; $++) {
      var j = O[$];
      R(A, j(r, t, L));
    }
    var X = Sl(r, u), Q = Sl(A, u);
    !X && Q ? i.trigger("loading", !0) : X && !Q && i.trigger("loading", !1), this.state = A, a.onAction && a.onAction(t);
  }, e.prototype.updateData = function() {
    var t = this, n = t.props, a = t.state, r = this.data, i = this.computeOptionsData(n.optionOverrides, a.dynamicOptionOverrides, n.calendarApi), o = this.computeCurrentViewData(a.currentViewType, i, n.optionOverrides, a.dynamicOptionOverrides), s = this.data = R(R(R({ viewTitle: this.buildTitle(a.dateProfile, o.options, i.dateEnv), calendarApi: n.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, i), o), a), l = i.pluginHooks.optionChangeHandlers, c = r && r.calendarOptions, u = i.calendarOptions;
    if (c && c !== u) {
      c.timeZone !== u.timeZone && (a.eventSources = s.eventSources = ND(s.eventSources, a.dateProfile, s), a.eventStore = s.eventStore = jD(s.eventStore, r.dateEnv, s.dateEnv));
      for (var d in l)
        c[d] !== u[d] && l[d](u[d], s);
    }
    n.onData && n.onData(s);
  }, e.prototype._computeOptionsData = function(t, n, a) {
    var r = this.processRawCalendarOptions(t, n), i = r.refinedOptions, o = r.pluginHooks, s = r.localeDefaults, l = r.availableLocaleData, c = r.extra;
    rp(c);
    var u = this.buildDateEnv(i.timeZone, i.locale, i.weekNumberCalculation, i.firstDay, i.weekText, o, l, i.defaultRangeSeparator), d = this.buildViewSpecs(o.views, t, n, s), f = this.buildTheme(i, o), p = this.parseToolbars(i, t, f, d, a);
    return {
      calendarOptions: i,
      pluginHooks: o,
      dateEnv: u,
      viewSpecs: d,
      theme: f,
      toolbarConfig: p,
      localeDefaults: s,
      availableRawLocales: l.map
    };
  }, e.prototype.processRawCalendarOptions = function(t, n) {
    var a = _l([
      Yr,
      t,
      n
    ]), r = a.locales, i = a.locale, o = this.organizeRawLocales(r), s = o.map, l = this.buildLocale(i || o.defaultCode, s).options, c = this.buildPluginHooks(t.plugins || [], pA), u = this.currentCalendarOptionsRefiners = R(R(R(R(R({}, qf), Gf), Yf), c.listenerRefiners), c.optionRefiners), d = {}, f = _l([
      Yr,
      l,
      t,
      n
    ]), p = {}, h = this.currentCalendarOptionsInput, y = this.currentCalendarOptionsRefined, w = !1;
    for (var m in f)
      m !== "plugins" && (f[m] === h[m] || aa[m] && m in h && aa[m](h[m], f[m]) ? p[m] = y[m] : u[m] ? (p[m] = u[m](f[m]), w = !0) : d[m] = h[m]);
    return w && (this.currentCalendarOptionsInput = f, this.currentCalendarOptionsRefined = p), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: c,
      availableLocaleData: o,
      localeDefaults: l,
      extra: d
    };
  }, e.prototype._computeCurrentViewData = function(t, n, a, r) {
    var i = n.viewSpecs[t];
    if (!i)
      throw new Error('viewType "' + t + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var o = this.processRawViewOptions(i, n.pluginHooks, n.localeDefaults, a, r), s = o.refinedOptions, l = o.extra;
    rp(l);
    var c = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
      duration: i.duration,
      durationUnit: i.durationUnit,
      usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
      dateEnv: n.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: s.slotMinTime,
      slotMaxTime: s.slotMaxTime,
      showNonCurrentDates: s.showNonCurrentDates,
      dayCount: s.dayCount,
      dateAlignment: s.dateAlignment,
      dateIncrement: s.dateIncrement,
      hiddenDays: s.hiddenDays,
      weekends: s.weekends,
      nowInput: s.now,
      validRangeInput: s.validRange,
      visibleRangeInput: s.visibleRange,
      monthMode: s.monthMode,
      fixedWeekCount: s.fixedWeekCount
    }), u = this.buildViewApi(t, this.getCurrentData, n.dateEnv);
    return { viewSpec: i, options: s, dateProfileGenerator: c, viewApi: u };
  }, e.prototype.processRawViewOptions = function(t, n, a, r, i) {
    var o = _l([
      Yr,
      t.optionDefaults,
      a,
      r,
      t.optionOverrides,
      i
    ]), s = R(R(R(R(R(R({}, qf), Gf), Yf), ax), n.listenerRefiners), n.optionRefiners), l = {}, c = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, d = !1, f = {};
    for (var p in o)
      o[p] === c[p] || aa[p] && aa[p](o[p], c[p]) ? l[p] = u[p] : (o[p] === this.currentCalendarOptionsInput[p] || aa[p] && aa[p](o[p], this.currentCalendarOptionsInput[p]) ? p in this.currentCalendarOptionsRefined && (l[p] = this.currentCalendarOptionsRefined[p]) : s[p] ? l[p] = s[p](o[p]) : f[p] = o[p], d = !0);
    return d && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: f
    };
  }, e;
}();
function bA(e, t, n, a, r, i, o, s) {
  var l = dm(t || o.defaultCode, o.map);
  return new Gx({
    calendarSystem: "gregory",
    timeZone: e,
    namedTimeZoneImpl: i.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: n,
    firstDay: a,
    weekText: r,
    cmdFormatter: i.cmdFormatter,
    defaultSeparator: s
  });
}
function _A(e, t) {
  var n = t.themeClasses[e.themeSystem] || Gn;
  return new n(e);
}
function EA(e) {
  var t = e.dateProfileGeneratorClass || bm;
  return new t(e);
}
function wA(e, t, n) {
  return new Px(e, t, n);
}
function SA(e) {
  return _i(e, function(t) {
    return t.ui;
  });
}
function CA(e, t, n) {
  var a = { "": t };
  for (var r in e) {
    var i = e[r];
    i.sourceId && n[i.sourceId] && (a[r] = n[i.sourceId]);
  }
  return a;
}
function TA(e) {
  var t = e.options;
  return {
    eventUiSingleBase: Yo({
      display: t.eventDisplay,
      editable: t.editable,
      startEditable: t.eventStartEditable,
      durationEditable: t.eventDurationEditable,
      constraint: t.eventConstraint,
      overlap: typeof t.eventOverlap == "boolean" ? t.eventOverlap : void 0,
      allow: t.eventAllow,
      backgroundColor: t.eventBackgroundColor,
      borderColor: t.eventBorderColor,
      textColor: t.eventTextColor,
      color: t.eventColor
    }, e),
    selectionConfig: Yo({
      constraint: t.selectConstraint,
      overlap: typeof t.selectOverlap == "boolean" ? t.selectOverlap : void 0,
      allow: t.selectAllow
    }, e)
  };
}
function Sl(e, t) {
  for (var n = 0, a = t.pluginHooks.isLoadingFuncs; n < a.length; n++) {
    var r = a[n];
    if (r(e))
      return !0;
  }
  return !1;
}
function kA(e) {
  return Jx(e.options.businessHours, e);
}
function rp(e, t) {
  for (var n in e)
    console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""));
}
(function(e) {
  fe(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleData = function(r) {
      a.dataManager ? a.setState(r) : a.state = r;
    }, a.dataManager = new Dm({
      optionOverrides: n.optionOverrides,
      calendarApi: n.calendarApi,
      onData: a.handleData
    }), a;
  }
  return t.prototype.render = function() {
    return this.props.children(this.state);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props.optionOverrides;
    a !== n.optionOverrides && this.dataManager.resetOptions(a);
  }, t;
})(mc);
var xA = function() {
  function e() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return e.prototype.addSegs = function(t) {
    for (var n = [], a = 0, r = t; a < r.length; a++) {
      var i = r[a];
      this.insertEntry(i, n);
    }
    return n;
  }, e.prototype.insertEntry = function(t, n) {
    var a = this.findInsertion(t);
    return this.isInsertionValid(a, t) ? (this.insertEntryAt(t, a), 1) : this.handleInvalidInsertion(a, t, n);
  }, e.prototype.isInsertionValid = function(t, n) {
    return (this.maxCoord === -1 || t.levelCoord + n.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || t.stackCnt < this.maxStackCnt);
  }, e.prototype.handleInvalidInsertion = function(t, n, a) {
    return this.allowReslicing && t.touchingEntry ? this.splitEntry(n, t.touchingEntry, a) : (a.push(n), 0);
  }, e.prototype.splitEntry = function(t, n, a) {
    var r = 0, i = [], o = t.span, s = n.span;
    return o.start < s.start && (r += this.insertEntry({
      index: t.index,
      thickness: t.thickness,
      span: { start: o.start, end: s.start }
    }, i)), o.end > s.end && (r += this.insertEntry({
      index: t.index,
      thickness: t.thickness,
      span: { start: s.end, end: o.end }
    }, i)), r ? (a.push.apply(a, Ke([{
      index: t.index,
      thickness: t.thickness,
      span: Am(s, o)
    }], i)), r) : (a.push(t), 0);
  }, e.prototype.insertEntryAt = function(t, n) {
    var a = this, r = a.entriesByLevel, i = a.levelCoords;
    n.lateral === -1 ? (Cl(i, n.level, n.levelCoord), Cl(r, n.level, [t])) : Cl(r[n.level], n.lateral, t), this.stackCnts[Xr(t)] = n.stackCnt;
  }, e.prototype.findInsertion = function(t) {
    for (var n = this, a = n.levelCoords, r = n.entriesByLevel, i = n.strictOrder, o = n.stackCnts, s = a.length, l = 0, c = -1, u = -1, d = null, f = 0, p = 0; p < s; p += 1) {
      var h = a[p];
      if (!i && h >= l + t.thickness)
        break;
      for (var y = r[p], w = void 0, m = op(y, t.span.start, ip), _ = m[0] + m[1]; (w = y[_]) && w.span.start < t.span.end; ) {
        var k = h + w.thickness;
        k > l && (l = k, d = w, c = p, u = _), k === l && (f = Math.max(f, o[Xr(w)] + 1)), _ += 1;
      }
    }
    var x = 0;
    if (d)
      for (x = c + 1; x < s && a[x] < l; )
        x += 1;
    var D = -1;
    return x < s && a[x] === l && (D = op(r[x], t.span.end, ip)[0]), {
      touchingLevel: c,
      touchingLateral: u,
      touchingEntry: d,
      stackCnt: f,
      levelCoord: l,
      level: x,
      lateral: D
    };
  }, e.prototype.toRects = function() {
    for (var t = this, n = t.entriesByLevel, a = t.levelCoords, r = n.length, i = [], o = 0; o < r; o += 1)
      for (var s = n[o], l = a[o], c = 0, u = s; c < u.length; c++) {
        var d = u[c];
        i.push(R(R({}, d), { levelCoord: l }));
      }
    return i;
  }, e;
}();
function ip(e) {
  return e.span.end;
}
function Xr(e) {
  return e.index + ":" + e.span.start;
}
function Am(e, t) {
  var n = Math.max(e.start, t.start), a = Math.min(e.end, t.end);
  return n < a ? { start: n, end: a } : null;
}
function Cl(e, t, n) {
  e.splice(t, 0, n);
}
function op(e, t, n) {
  var a = 0, r = e.length;
  if (!r || t < n(e[a]))
    return [0, 0];
  if (t > n(e[r - 1]))
    return [r, 0];
  for (; a < r; ) {
    var i = Math.floor(a + (r - a) / 2), o = n(e[i]);
    if (t < o)
      r = i;
    else if (t > o)
      a = i + 1;
    else
      return [i, 1];
  }
  return [a, 0];
}
var Rm = function() {
  function e(t) {
    this.component = t.component, this.isHitComboAllowed = t.isHitComboAllowed || null;
  }
  return e.prototype.destroy = function() {
  }, e;
}();
function DA(e, t) {
  return {
    component: e,
    el: t.el,
    useEventCenter: t.useEventCenter != null ? t.useEventCenter : !0,
    isHitComboAllowed: t.isHitComboAllowed || null
  };
}
var sp = {}, AA = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props.widgetGroups.map(function(r) {
      return n.renderWidgetGroup(r);
    });
    return I.apply(void 0, Ke(["div", { className: "fc-toolbar-chunk" }], a));
  }, t.prototype.renderWidgetGroup = function(n) {
    for (var a = this.props, r = this.context.theme, i = [], o = !0, s = 0, l = n; s < l.length; s++) {
      var c = l[s], u = c.buttonName, d = c.buttonClick, f = c.buttonText, p = c.buttonIcon, h = c.buttonHint;
      if (u === "title")
        o = !1, i.push(I("h2", { className: "fc-toolbar-title", id: a.titleId }, a.title));
      else {
        var y = u === a.activeButton, w = !a.isTodayEnabled && u === "today" || !a.isPrevEnabled && u === "prev" || !a.isNextEnabled && u === "next", m = ["fc-" + u + "-button", r.getClass("button")];
        y && m.push(r.getClass("buttonActive")), i.push(I("button", { type: "button", title: typeof h == "function" ? h(a.navUnit) : h, disabled: w, "aria-pressed": y, className: m.join(" "), onClick: d }, f || (p ? I("span", { className: p }) : "")));
      }
    }
    if (i.length > 1) {
      var _ = o && r.getClass("buttonGroup") || "";
      return I.apply(void 0, Ke(["div", { className: _ }], i));
    }
    return i[0];
  }, t;
}(Be), lp = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.model, r = n.extraClassName, i = !1, o, s, l = a.sectionWidgets, c = l.center;
    l.left ? (i = !0, o = l.left) : o = l.start, l.right ? (i = !0, s = l.right) : s = l.end;
    var u = [
      r || "",
      "fc-toolbar",
      i ? "fc-toolbar-ltr" : ""
    ];
    return I(
      "div",
      { className: u.join(" ") },
      this.renderSection("start", o || []),
      this.renderSection("center", c || []),
      this.renderSection("end", s || [])
    );
  }, t.prototype.renderSection = function(n, a) {
    var r = this.props;
    return I(AA, { key: n, widgetGroups: a, title: r.title, navUnit: r.navUnit, activeButton: r.activeButton, isTodayEnabled: r.isTodayEnabled, isPrevEnabled: r.isPrevEnabled, isNextEnabled: r.isNextEnabled, titleId: r.titleId });
  }, t;
}(Be), RA = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      availableWidth: null
    }, n.handleEl = function(a) {
      n.el = a, bn(n.props.elRef, a), n.updateAvailableWidth();
    }, n.handleResize = function() {
      n.updateAvailableWidth();
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state, i = a.aspectRatio, o = [
      "fc-view-harness",
      i || a.liquid || a.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], s = "", l = "";
    return i ? r.availableWidth !== null ? s = r.availableWidth / i : l = 1 / i * 100 + "%" : s = a.height || "", I("div", { "aria-labelledby": a.labeledById, ref: this.handleEl, className: o.join(" "), style: { height: s, paddingBottom: l } }, a.children);
  }, t.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, t.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, t.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, t;
}(Be), IA = function(e) {
  fe(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleSegClick = function(r, i) {
      var o = a.component, s = o.context, l = ku(i);
      if (l && o.isValidSegDownEl(r.target)) {
        var c = an(r.target, ".fc-event-forced-url"), u = c ? c.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: i,
          event: new Xt(o.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: r,
          view: s.viewApi
        }), u && !r.defaultPrevented && (window.location.href = u);
      }
    }, a.destroy = Wh(
      n.el,
      "click",
      ".fc-event",
      a.handleSegClick
    ), a;
  }
  return t;
}(Rm), OA = function(e) {
  fe(t, e);
  function t(n) {
    var a = e.call(this, n) || this;
    return a.handleEventElRemove = function(r) {
      r === a.currentSegEl && a.handleSegLeave(null, a.currentSegEl);
    }, a.handleSegEnter = function(r, i) {
      ku(i) && (a.currentSegEl = i, a.triggerEvent("eventMouseEnter", r, i));
    }, a.handleSegLeave = function(r, i) {
      a.currentSegEl && (a.currentSegEl = null, a.triggerEvent("eventMouseLeave", r, i));
    }, a.removeHoverListeners = pk(
      n.el,
      ".fc-event",
      a.handleSegEnter,
      a.handleSegLeave
    ), a;
  }
  return t.prototype.destroy = function() {
    this.removeHoverListeners();
  }, t.prototype.triggerEvent = function(n, a, r) {
    var i = this.component, o = i.context, s = ku(r);
    (!a || i.isValidSegDownEl(a.target)) && o.emitter.trigger(n, {
      el: r,
      event: new Xt(o, s.eventRange.def, s.eventRange.instance),
      jsEvent: a,
      view: o.viewApi
    });
  }, t;
}(Rm), $A = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.buildViewContext = ke(hD), n.buildViewPropTransformers = ke(MA), n.buildToolbarProps = ke(NA), n.headerRef = It(), n.footerRef = It(), n.interactionsStore = {}, n.state = {
      viewLabelId: Vn()
    }, n.registerInteractiveComponent = function(a, r) {
      var i = DA(a, r), o = [
        IA,
        OA
      ], s = o.concat(n.props.pluginHooks.componentInteractions), l = s.map(function(c) {
        return new c(i);
      });
      n.interactionsStore[a.uid] = l, sp[a.uid] = i;
    }, n.unregisterInteractiveComponent = function(a) {
      var r = n.interactionsStore[a.uid];
      if (r) {
        for (var i = 0, o = r; i < o.length; i++) {
          var s = o[i];
          s.destroy();
        }
        delete n.interactionsStore[a.uid];
      }
      delete sp[a.uid];
    }, n.resizeRunner = new Ic(function() {
      n.props.emitter.trigger("_resize", !0), n.props.emitter.trigger("windowResize", { view: n.props.viewApi });
    }), n.handleWindowResize = function(a) {
      var r = n.props.options;
      r.handleWindowResize && a.target === window && n.resizeRunner.request(r.windowResizeDelay);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.toolbarConfig, r = n.options, i = this.buildToolbarProps(
      n.viewSpec,
      n.dateProfile,
      n.dateProfileGenerator,
      n.currentDate,
      Ei(n.options.now, n.dateEnv),
      n.viewTitle
    ), o = !1, s = "", l;
    n.isHeightAuto || n.forPrint ? s = "" : r.height != null ? o = !0 : r.contentHeight != null ? s = r.contentHeight : l = Math.max(r.aspectRatio, 0.5);
    var c = this.buildViewContext(n.viewSpec, n.viewApi, n.options, n.dateProfileGenerator, n.dateEnv, n.theme, n.pluginHooks, n.dispatch, n.getCurrentData, n.emitter, n.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = a.header && a.header.hasTitle ? this.state.viewLabelId : "";
    return I(
      Ca.Provider,
      { value: c },
      a.header && I(lp, R({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: a.header, titleId: u }, i)),
      I(
        RA,
        { liquid: o, height: s, aspectRatio: l, labeledById: u },
        this.renderView(n),
        this.buildAppendContent()
      ),
      a.footer && I(lp, R({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: a.footer, titleId: "" }, i))
    );
  }, t.prototype.componentDidMount = function() {
    var n = this.props;
    this.calendarInteractions = n.pluginHooks.calendarInteractions.map(function(i) {
      return new i(n);
    }), window.addEventListener("resize", this.handleWindowResize);
    var a = n.pluginHooks.propSetHandlers;
    for (var r in a)
      a[r](n[r], n);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props, r = a.pluginHooks.propSetHandlers;
    for (var i in r)
      a[i] !== n[i] && r[i](a[i], a);
  }, t.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (var n = 0, a = this.calendarInteractions; n < a.length; n++) {
      var r = a[n];
      r.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }, t.prototype.buildAppendContent = function() {
    var n = this.props, a = n.pluginHooks.viewContainerAppends.map(function(r) {
      return r(n);
    });
    return I.apply(void 0, Ke([ft, {}], a));
  }, t.prototype.renderView = function(n) {
    for (var a = n.pluginHooks, r = n.viewSpec, i = {
      dateProfile: n.dateProfile,
      businessHours: n.businessHours,
      eventStore: n.renderableEventStore,
      eventUiBases: n.eventUiBases,
      dateSelection: n.dateSelection,
      eventSelection: n.eventSelection,
      eventDrag: n.eventDrag,
      eventResize: n.eventResize,
      isHeightAuto: n.isHeightAuto,
      forPrint: n.forPrint
    }, o = this.buildViewPropTransformers(a.viewPropsTransformers), s = 0, l = o; s < l.length; s++) {
      var c = l[s];
      R(i, c.transform(i, n));
    }
    var u = r.component;
    return I(u, R({}, i));
  }, t;
}(Os);
function NA(e, t, n, a, r, i) {
  var o = n.build(r, void 0, !1), s = n.buildPrev(t, a, !1), l = n.buildNext(t, a, !1);
  return {
    title: i,
    activeButton: e.type,
    navUnit: e.singleUnit,
    isTodayEnabled: o.isValid && !da(t.currentRange, r),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function MA(e) {
  return e.map(function(t) {
    return new t();
  });
}
var PA = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      forPrint: !1
    }, n.handleBeforePrint = function() {
      n.setState({ forPrint: !0 });
    }, n.handleAfterPrint = function() {
      n.setState({ forPrint: !1 });
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.options, r = this.state.forPrint, i = r || a.height === "auto" || a.contentHeight === "auto", o = !i && a.height != null ? a.height : "", s = [
      "fc",
      r ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + a.direction,
      n.theme.getClass("root")
    ];
    return pm() || s.push("fc-liquid-hack"), n.children(s, o, i, r);
  }, t.prototype.componentDidMount = function() {
    var n = this.props.emitter;
    n.on("_beforeprint", this.handleBeforePrint), n.on("_afterprint", this.handleAfterPrint);
  }, t.prototype.componentWillUnmount = function() {
    var n = this.props.emitter;
    n.off("_beforeprint", this.handleBeforePrint), n.off("_afterprint", this.handleAfterPrint);
  }, t;
}(Be);
function BA(e, t) {
  return !e || t > 10 ? tt({ weekday: "short" }) : t > 1 ? tt({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : tt({ weekday: "long" });
}
var Im = "fc-col-header-cell";
function Om(e) {
  return e.text;
}
var VA = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.dateEnv, r = n.options, i = n.theme, o = n.viewApi, s = this.props, l = s.date, c = s.dateProfile, u = Dc(l, s.todayRange, null, c), d = [Im].concat(Is(u, i)), f = a.format(l, s.dayHeaderFormat), p = !u.isDisabled && s.colCnt > 1 ? ci(this.context, l) : {}, h = R(R(R({ date: a.toDate(l), view: o }, s.extraHookProps), { text: f }), u);
    return I(kn, { hookProps: h, classNames: r.dayHeaderClassNames, content: r.dayHeaderContent, defaultContent: Om, didMount: r.dayHeaderDidMount, willUnmount: r.dayHeaderWillUnmount }, function(y, w, m, _) {
      return I(
        "th",
        R({ ref: y, role: "columnheader", className: d.concat(w).join(" "), "data-date": u.isDisabled ? void 0 : Rs(l), colSpan: s.colSpan }, s.extraDataAttrs),
        I("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && I("a", R({ ref: m, className: [
          "fc-col-header-cell-cushion",
          s.isSticky ? "fc-sticky" : ""
        ].join(" ") }, p), _))
      );
    });
  }, t;
}(Be), LA = tt({ weekday: "long" }), FA = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = this.context, r = a.dateEnv, i = a.theme, o = a.viewApi, s = a.options, l = nt(new Date(2592e5), n.dow), c = {
      dow: n.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = [Im].concat(Is(c, i), n.extraClassNames || []), d = r.format(l, n.dayHeaderFormat), f = R(R(R(R({
      date: l
    }, c), { view: o }), n.extraHookProps), { text: d });
    return I(kn, { hookProps: f, classNames: s.dayHeaderClassNames, content: s.dayHeaderContent, defaultContent: Om, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, function(p, h, y, w) {
      return I(
        "th",
        R({ ref: p, role: "columnheader", className: u.concat(h).join(" "), colSpan: n.colSpan }, n.extraDataAttrs),
        I(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          I("a", { "aria-label": r.format(l, LA), className: [
            "fc-col-header-cell-cushion",
            n.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: y }, w)
        )
      );
    });
  }, t;
}(Be), Oc = function(e) {
  fe(t, e);
  function t(n, a) {
    var r = e.call(this, n, a) || this;
    return r.initialNowDate = Ei(a.options.now, a.dateEnv), r.initialNowQueriedMs = new Date().valueOf(), r.state = r.computeTiming().currentState, r;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state;
    return a.children(r.nowDate, r.todayRange);
  }, t.prototype.componentDidMount = function() {
    this.setTimeout();
  }, t.prototype.componentDidUpdate = function(n) {
    n.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }, t.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  }, t.prototype.computeTiming = function() {
    var n = this, a = n.props, r = n.context, i = ga(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), o = r.dateEnv.startOf(i, a.unit), s = r.dateEnv.add(o, Me(1, a.unit)), l = s.valueOf() - i.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: o, todayRange: up(o) },
      nextState: { nowDate: s, todayRange: up(s) },
      waitMs: l
    };
  }, t.prototype.setTimeout = function() {
    var n = this, a = this.computeTiming(), r = a.nextState, i = a.waitMs;
    this.timeoutId = setTimeout(function() {
      n.setState(r, function() {
        n.setTimeout();
      });
    }, i);
  }, t.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, t.contextType = Ca, t;
}(mc);
function up(e) {
  var t = ze(e), n = nt(t, 1);
  return { start: t, end: n };
}
var HA = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.createDayHeaderFormatter = ke(zA), n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = this.props, r = a.dates, i = a.dateProfile, o = a.datesRepDistinctDays, s = a.renderIntro, l = this.createDayHeaderFormatter(n.options.dayHeaderFormat, o, r.length);
    return I(Oc, { unit: "day" }, function(c, u) {
      return I(
        "tr",
        { role: "row" },
        s && s("day"),
        r.map(function(d) {
          return o ? I(VA, { key: d.toISOString(), date: d, dateProfile: i, todayRange: u, colCnt: r.length, dayHeaderFormat: l }) : I(FA, { key: d.getUTCDay(), dow: d.getUTCDay(), dayHeaderFormat: l });
        })
      );
    });
  }, t;
}(Be);
function zA(e, t, n) {
  return e || BA(t, n);
}
var UA = function() {
  function e(t, n) {
    for (var a = t.start, r = t.end, i = [], o = [], s = -1; a < r; )
      n.isHiddenDay(a) ? i.push(s + 0.5) : (s += 1, i.push(s), o.push(a)), a = nt(a, 1);
    this.dates = o, this.indices = i, this.cnt = o.length;
  }
  return e.prototype.sliceRange = function(t) {
    var n = this.getDateDayIndex(t.start), a = this.getDateDayIndex(nt(t.end, -1)), r = Math.max(0, n), i = Math.min(this.cnt - 1, a);
    return r = Math.ceil(r), i = Math.floor(i), r <= i ? {
      firstIndex: r,
      lastIndex: i,
      isStart: n === r,
      isEnd: a === i
    } : null;
  }, e.prototype.getDateDayIndex = function(t) {
    var n = this.indices, a = Math.floor(Sa(this.dates[0], t));
    return a < 0 ? n[0] - 1 : a >= n.length ? n[n.length - 1] + 1 : n[a];
  }, e;
}(), jA = function() {
  function e(t, n) {
    var a = t.dates, r, i, o;
    if (n) {
      for (i = a[0].getUTCDay(), r = 1; r < a.length && a[r].getUTCDay() !== i; r += 1)
        ;
      o = Math.ceil(a.length / r);
    } else
      o = 1, r = a.length;
    this.rowCnt = o, this.colCnt = r, this.daySeries = t, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  return e.prototype.buildCells = function() {
    for (var t = [], n = 0; n < this.rowCnt; n += 1) {
      for (var a = [], r = 0; r < this.colCnt; r += 1)
        a.push(this.buildCell(n, r));
      t.push(a);
    }
    return t;
  }, e.prototype.buildCell = function(t, n) {
    var a = this.daySeries.dates[t * this.colCnt + n];
    return {
      key: a.toISOString(),
      date: a
    };
  }, e.prototype.buildHeaderDates = function() {
    for (var t = [], n = 0; n < this.colCnt; n += 1)
      t.push(this.cells[0][n].date);
    return t;
  }, e.prototype.sliceRange = function(t) {
    var n = this.colCnt, a = this.daySeries.sliceRange(t), r = [];
    if (a)
      for (var i = a.firstIndex, o = a.lastIndex, s = i; s <= o; ) {
        var l = Math.floor(s / n), c = Math.min((l + 1) * n, o + 1);
        r.push({
          row: l,
          firstCol: s % n,
          lastCol: (c - 1) % n,
          isStart: a.isStart && s === i,
          isEnd: a.isEnd && c - 1 === o
        }), s = c;
      }
    return r;
  }, e;
}(), WA = function() {
  function e() {
    this.sliceBusinessHours = ke(this._sliceBusinessHours), this.sliceDateSelection = ke(this._sliceDateSpan), this.sliceEventStore = ke(this._sliceEventStore), this.sliceEventDrag = ke(this._sliceInteraction), this.sliceEventResize = ke(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return e.prototype.sliceProps = function(t, n, a, r) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    var s = t.eventUiBases, l = this.sliceEventStore.apply(this, Ke([t.eventStore, s, n, a], i));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, Ke([t.dateSelection, s, r], i)),
      businessHourSegs: this.sliceBusinessHours.apply(this, Ke([t.businessHours, n, a, r], i)),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag.apply(this, Ke([t.eventDrag, s, n, a], i)),
      eventResize: this.sliceEventResize.apply(this, Ke([t.eventResize, s, n, a], i)),
      eventSelection: t.eventSelection
    };
  }, e.prototype.sliceNowDate = function(t, n) {
    for (var a = [], r = 2; r < arguments.length; r++)
      a[r - 2] = arguments[r];
    return this._sliceDateSpan.apply(this, Ke([
      { range: { start: t, end: ga(t, 1) }, allDay: !1 },
      {},
      n
    ], a));
  }, e.prototype._sliceBusinessHours = function(t, n, a, r) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    return t ? this._sliceEventStore.apply(this, Ke([
      As(t, Tl(n, Boolean(a)), r),
      {},
      n,
      a
    ], i)).bg : [];
  }, e.prototype._sliceEventStore = function(t, n, a, r) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    if (t) {
      var s = Tu(t, n, Tl(a, Boolean(r)), r);
      return {
        bg: this.sliceEventRanges(s.bg, i),
        fg: this.sliceEventRanges(s.fg, i)
      };
    }
    return { bg: [], fg: [] };
  }, e.prototype._sliceInteraction = function(t, n, a, r) {
    for (var i = [], o = 4; o < arguments.length; o++)
      i[o - 4] = arguments[o];
    if (!t)
      return null;
    var s = Tu(t.mutatedEvents, n, Tl(a, Boolean(r)), r);
    return {
      segs: this.sliceEventRanges(s.fg, i),
      affectedInstances: t.affectedEvents.instances,
      isEvent: t.isEvent
    };
  }, e.prototype._sliceDateSpan = function(t, n, a) {
    for (var r = [], i = 3; i < arguments.length; i++)
      r[i - 3] = arguments[i];
    if (!t)
      return [];
    for (var o = Ax(t, n, a), s = this.sliceRange.apply(this, Ke([t.range], r)), l = 0, c = s; l < c.length; l++) {
      var u = c[l];
      u.eventRange = o;
    }
    return s;
  }, e.prototype.sliceEventRanges = function(t, n) {
    for (var a = [], r = 0, i = t; r < i.length; r++) {
      var o = i[r];
      a.push.apply(a, this.sliceEventRange(o, n));
    }
    return a;
  }, e.prototype.sliceEventRange = function(t, n) {
    var a = t.range;
    this.forceDayIfListItem && t.ui.display === "list-item" && (a = {
      start: a.start,
      end: nt(a.start, 1)
    });
    for (var r = this.sliceRange.apply(this, Ke([a], n)), i = 0, o = r; i < o.length; i++) {
      var s = o[i];
      s.eventRange = t, s.isStart = t.isStart && s.isStart, s.isEnd = t.isEnd && s.isEnd;
    }
    return r;
  }, e;
}();
function Tl(e, t) {
  var n = e.activeRange;
  return t ? n : {
    start: ga(n.start, e.slotMinTime.milliseconds),
    end: ga(n.end, e.slotMaxTime.milliseconds - 864e5)
  };
}
var Gi = /^(visible|hidden)$/, $m = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleEl = function(a) {
      n.el = a, bn(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = n.liquid, r = n.liquidIsAbsolute, i = a && r, o = ["fc-scroller"];
    return a && (r ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), I("div", { ref: this.handleEl, className: o.join(" "), style: {
      overflowX: n.overflowX,
      overflowY: n.overflowY,
      left: i && -(n.overcomeLeft || 0) || "",
      right: i && -(n.overcomeRight || 0) || "",
      bottom: i && -(n.overcomeBottom || 0) || "",
      marginLeft: !i && -(n.overcomeLeft || 0) || "",
      marginRight: !i && -(n.overcomeRight || 0) || "",
      marginBottom: !i && -(n.overcomeBottom || 0) || "",
      maxHeight: n.maxHeight || ""
    } }, n.children);
  }, t.prototype.needsXScrolling = function() {
    if (Gi.test(this.props.overflowX))
      return !1;
    for (var n = this.el, a = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), r = n.children, i = 0; i < r.length; i += 1) {
      var o = r[i];
      if (o.getBoundingClientRect().width > a)
        return !0;
    }
    return !1;
  }, t.prototype.needsYScrolling = function() {
    if (Gi.test(this.props.overflowY))
      return !1;
    for (var n = this.el, a = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), r = n.children, i = 0; i < r.length; i += 1) {
      var o = r[i];
      if (o.getBoundingClientRect().height > a)
        return !0;
    }
    return !1;
  }, t.prototype.getXScrollbarWidth = function() {
    return Gi.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, t.prototype.getYScrollbarWidth = function() {
    return Gi.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, t;
}(Be), la = function() {
  function e(t) {
    var n = this;
    this.masterCallback = t, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(a, r) {
      var i = n, o = i.depths, s = i.currentMap, l = !1, c = !1;
      a !== null ? (l = r in s, s[r] = a, o[r] = (o[r] || 0) + 1, c = !0) : (o[r] -= 1, o[r] || (delete s[r], delete n.callbackMap[r], l = !0)), n.masterCallback && (l && n.masterCallback(null, String(r)), c && n.masterCallback(a, String(r)));
    };
  }
  return e.prototype.createRef = function(t) {
    var n = this, a = this.callbackMap[t];
    return a || (a = this.callbackMap[t] = function(r) {
      n.handleValue(r, String(t));
    }), a;
  }, e.prototype.collect = function(t, n, a) {
    return Ok(this.currentMap, t, n, a);
  }, e.prototype.getAll = function() {
    return bc(this.currentMap);
  }, e;
}();
function qA(e) {
  for (var t = lk(e, ".fc-scrollgrid-shrink"), n = 0, a = 0, r = t; a < r.length; a++) {
    var i = r[a];
    n = Math.max(n, yk(i));
  }
  return Math.ceil(n);
}
function Nm(e, t) {
  return e.liquid && t.liquid;
}
function GA(e, t) {
  return t.maxHeight != null || Nm(e, t);
}
function YA(e, t, n, a) {
  var r = n.expandRows, i = typeof t.content == "function" ? t.content(n) : I("table", {
    role: "presentation",
    className: [
      t.tableClassName,
      e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: n.tableMinWidth,
      width: n.clientWidth,
      height: r ? n.clientHeight : ""
    }
  }, n.tableColGroupNode, I(a ? "thead" : "tbody", {
    role: "presentation"
  }, typeof t.rowContent == "function" ? t.rowContent(n) : t.rowContent));
  return i;
}
function KA(e, t) {
  return ur(e, t, yn);
}
function XA(e, t) {
  for (var n = [], a = 0, r = e; a < r.length; a++)
    for (var i = r[a], o = i.span || 1, s = 0; s < o; s += 1)
      n.push(I("col", { style: {
        width: i.width === "shrink" ? ZA(t) : i.width || "",
        minWidth: i.minWidth || ""
      } }));
  return I.apply(void 0, Ke(["colgroup", {}], n));
}
function ZA(e) {
  return e == null ? 4 : e;
}
function QA(e) {
  for (var t = 0, n = e; t < n.length; t++) {
    var a = n[t];
    if (a.width === "shrink")
      return !0;
  }
  return !1;
}
function JA(e, t) {
  var n = [
    "fc-scrollgrid",
    t.theme.getClass("table")
  ];
  return e && n.push("fc-scrollgrid-liquid"), n;
}
function eR(e, t) {
  var n = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + e.type,
    e.className
  ];
  return t && e.liquid && e.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function tR(e) {
  return I("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: e.clientWidth,
    minWidth: e.tableMinWidth
  } });
}
function cp(e) {
  var t = e.stickyHeaderDates;
  return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
function nR(e) {
  var t = e.stickyFooterScrollbar;
  return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
var Mm = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.processCols = ke(function(a) {
      return a;
    }, KA), n.renderMicroColGroup = ke(XA), n.scrollerRefs = new la(), n.scrollerElRefs = new la(n._handleScrollerEl.bind(n)), n.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, n.handleSizing = function() {
      n.safeSetState(R({ shrinkWidth: n.computeShrinkWidth() }, n.computeScrollerDims()));
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.state, i = n.context, o = a.sections || [], s = this.processCols(a.cols), l = this.renderMicroColGroup(s, r.shrinkWidth), c = JA(a.liquid, i);
    a.collapsibleWidth && c.push("fc-scrollgrid-collapsible");
    for (var u = o.length, d = 0, f, p = [], h = [], y = []; d < u && (f = o[d]).type === "header"; )
      p.push(this.renderSection(f, l, !0)), d += 1;
    for (; d < u && (f = o[d]).type === "body"; )
      h.push(this.renderSection(f, l, !1)), d += 1;
    for (; d < u && (f = o[d]).type === "footer"; )
      y.push(this.renderSection(f, l, !0)), d += 1;
    var w = !pm(), m = { role: "rowgroup" };
    return I("table", {
      role: "grid",
      className: c.join(" "),
      style: { height: a.height }
    }, Boolean(!w && p.length) && I.apply(void 0, Ke(["thead", m], p)), Boolean(!w && h.length) && I.apply(void 0, Ke(["tbody", m], h)), Boolean(!w && y.length) && I.apply(void 0, Ke(["tfoot", m], y)), w && I.apply(void 0, Ke(Ke(Ke(["tbody", m], p), h), y)));
  }, t.prototype.renderSection = function(n, a, r) {
    return "outerContent" in n ? I(ft, { key: n.key }, n.outerContent) : I("tr", { key: n.key, role: "presentation", className: eR(n, this.props.liquid).join(" ") }, this.renderChunkTd(n, a, n.chunk, r));
  }, t.prototype.renderChunkTd = function(n, a, r, i) {
    if ("outerContent" in r)
      return r.outerContent;
    var o = this.props, s = this.state, l = s.forceYScrollbars, c = s.scrollerClientWidths, u = s.scrollerClientHeights, d = GA(o, n), f = Nm(o, n), p = o.liquid ? l ? "scroll" : d ? "auto" : "hidden" : "visible", h = n.key, y = YA(n, r, {
      tableColGroupNode: a,
      tableMinWidth: "",
      clientWidth: !o.collapsibleWidth && c[h] !== void 0 ? c[h] : null,
      clientHeight: u[h] !== void 0 ? u[h] : null,
      expandRows: n.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, i);
    return I(i ? "th" : "td", {
      ref: r.elRef,
      role: "presentation"
    }, I(
      "div",
      { className: "fc-scroller-harness" + (f ? " fc-scroller-harness-liquid" : "") },
      I($m, { ref: this.scrollerRefs.createRef(h), elRef: this.scrollerElRefs.createRef(h), overflowY: p, overflowX: o.liquid ? "hidden" : "visible", maxHeight: n.maxHeight, liquid: f, liquidIsAbsolute: !0 }, y)
    ));
  }, t.prototype._handleScrollerEl = function(n, a) {
    var r = aR(this.props.sections, a);
    r && bn(r.chunk.scrollerElRef, n);
  }, t.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, t.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, t.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, t.prototype.computeShrinkWidth = function() {
    return QA(this.props.cols) ? qA(this.scrollerElRefs.getAll()) : 0;
  }, t.prototype.computeScrollerDims = function() {
    var n = iD(), a = this, r = a.scrollerRefs, i = a.scrollerElRefs, o = !1, s = {}, l = {};
    for (var c in r.currentMap) {
      var u = r.currentMap[c];
      if (u && u.needsYScrolling()) {
        o = !0;
        break;
      }
    }
    for (var d = 0, f = this.props.sections; d < f.length; d++) {
      var p = f[d], c = p.key, h = i.currentMap[c];
      if (h) {
        var y = h.parentNode;
        s[c] = Math.floor(y.getBoundingClientRect().width - (o ? n.y : 0)), l[c] = Math.floor(y.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l };
  }, t;
}(Be);
Mm.addStateEquality({
  scrollerClientWidths: yn,
  scrollerClientHeights: yn
});
function aR(e, t) {
  for (var n = 0, a = e; n < a.length; n++) {
    var r = a[n];
    if (r.key === t)
      return r;
  }
  return null;
}
var $s = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.elRef = It(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = r.options, o = a.seg, s = o.eventRange, l = s.ui, c = {
      event: new Xt(r, s.def, s.instance),
      view: r.viewApi,
      timeText: a.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !a.disableDragging && _x(o, r),
      isStartResizable: !a.disableResizing && Ex(o, r),
      isEndResizable: !a.disableResizing && wx(o),
      isMirror: Boolean(a.isDragging || a.isResizing || a.isDateSelecting),
      isStart: Boolean(o.isStart),
      isEnd: Boolean(o.isEnd),
      isPast: Boolean(a.isPast),
      isFuture: Boolean(a.isFuture),
      isToday: Boolean(a.isToday),
      isSelected: Boolean(a.isSelected),
      isDragging: Boolean(a.isDragging),
      isResizing: Boolean(a.isResizing)
    }, u = Sx(c).concat(l.classNames);
    return I(kn, { hookProps: c, classNames: i.eventClassNames, content: i.eventContent, defaultContent: a.defaultContent, didMount: i.eventDidMount, willUnmount: i.eventWillUnmount, elRef: this.elRef }, function(d, f, p, h) {
      return a.children(d, u.concat(f), p, h, c);
    });
  }, t.prototype.componentDidMount = function() {
    Xf(this.elRef.current, this.props.seg);
  }, t.prototype.componentDidUpdate = function(n) {
    var a = this.props.seg;
    a !== n.seg && Xf(this.elRef.current, a);
  }, t;
}(Be), rR = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = a.seg, o = r.options.eventTimeFormat || a.defaultTimeFormat, s = Kr(i, o, r, a.defaultDisplayEventTime, a.defaultDisplayEventEnd);
    return I($s, { seg: i, timeText: s, disableDragging: a.disableDragging, disableResizing: a.disableResizing, defaultContent: a.defaultContent || iR, isDragging: a.isDragging, isResizing: a.isResizing, isDateSelecting: a.isDateSelecting, isSelected: a.isSelected, isPast: a.isPast, isFuture: a.isFuture, isToday: a.isToday }, function(l, c, u, d, f) {
      return I(
        "a",
        R({ className: a.extraClassNames.concat(c).join(" "), style: {
          borderColor: f.borderColor,
          backgroundColor: f.backgroundColor
        }, ref: l }, kc(i, r)),
        I("div", { className: "fc-event-main", ref: u, style: { color: f.textColor } }, d),
        f.isStartResizable && I("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        f.isEndResizable && I("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, t;
}(Be);
function iR(e) {
  return I(
    "div",
    { className: "fc-event-main-frame" },
    e.timeText && I("div", { className: "fc-event-time" }, e.timeText),
    I(
      "div",
      { className: "fc-event-title-container" },
      I("div", { className: "fc-event-title fc-sticky" }, e.event.title || I(ft, null, "\xA0"))
    )
  );
}
var oR = tt({ day: "numeric" }), Pm = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = r.options, o = Bm({
      date: a.date,
      dateProfile: a.dateProfile,
      todayRange: a.todayRange,
      showDayNumber: a.showDayNumber,
      extraProps: a.extraHookProps,
      viewApi: r.viewApi,
      dateEnv: r.dateEnv
    });
    return I(mm, { hookProps: o, content: i.dayCellContent, defaultContent: a.defaultContent }, a.children);
  }, t;
}(Be);
function Bm(e) {
  var t = e.date, n = e.dateEnv, a = Dc(t, e.todayRange, null, e.dateProfile);
  return R(R(R({ date: n.toDate(t), view: e.viewApi }, a), { dayNumberText: e.showDayNumber ? n.format(t, oR) : "" }), e.extraProps);
}
var Vm = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.refineHookProps = mo(Bm), n.normalizeClassNames = gm(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = r.options, o = this.refineHookProps({
      date: a.date,
      dateProfile: a.dateProfile,
      todayRange: a.todayRange,
      showDayNumber: a.showDayNumber,
      extraProps: a.extraHookProps,
      viewApi: r.viewApi,
      dateEnv: r.dateEnv
    }), s = Is(o, r.theme).concat(o.isDisabled ? [] : this.normalizeClassNames(i.dayCellClassNames, o)), l = o.isDisabled ? {} : {
      "data-date": Rs(a.date)
    };
    return I(Ac, { hookProps: o, didMount: i.dayCellDidMount, willUnmount: i.dayCellWillUnmount, elRef: a.elRef }, function(c) {
      return a.children(c, s, l, o.isDisabled);
    });
  }, t;
}(Be);
function sR(e) {
  return I("div", { className: "fc-" + e });
}
var lR = function(e) {
  return I($s, { defaultContent: uR, seg: e.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: e.isPast, isFuture: e.isFuture, isToday: e.isToday }, function(t, n, a, r, i) {
    return I("div", { ref: t, className: ["fc-bg-event"].concat(n).join(" "), style: {
      backgroundColor: i.backgroundColor
    } }, r);
  });
};
function uR(e) {
  var t = e.event.title;
  return t && I("div", { className: "fc-event-title" }, e.event.title);
}
var cR = function(e) {
  return I(Ca.Consumer, null, function(t) {
    var n = t.dateEnv, a = t.options, r = e.date, i = a.weekNumberFormat || e.defaultFormat, o = n.computeWeekNumber(r), s = n.format(r, i), l = { num: o, text: s, date: r };
    return I(kn, { hookProps: l, classNames: a.weekNumberClassNames, content: a.weekNumberContent, defaultContent: dR, didMount: a.weekNumberDidMount, willUnmount: a.weekNumberWillUnmount }, e.children);
  });
};
function dR(e) {
  return e.text;
}
var kl = 10, fR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      titleId: Vn()
    }, n.handleRootEl = function(a) {
      n.rootEl = a, n.props.elRef && bn(n.props.elRef, a);
    }, n.handleDocumentMouseDown = function(a) {
      var r = dk(a);
      n.rootEl.contains(r) || n.handleCloseClick();
    }, n.handleDocumentKeyDown = function(a) {
      a.key === "Escape" && n.handleCloseClick();
    }, n.handleCloseClick = function() {
      var a = n.props.onClose;
      a && a();
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.theme, r = n.options, i = this, o = i.props, s = i.state, l = [
      "fc-popover",
      a.getClass("popover")
    ].concat(o.extraClassNames || []);
    return rk(I(
      "div",
      R({ id: o.id, className: l.join(" "), "aria-labelledby": s.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
      I(
        "div",
        { className: "fc-popover-header " + a.getClass("popoverHeader") },
        I("span", { className: "fc-popover-title", id: s.titleId }, o.title),
        I("span", { className: "fc-popover-close " + a.getIconClass("close"), title: r.closeHint, onClick: this.handleCloseClick })
      ),
      I("div", { className: "fc-popover-body " + a.getClass("popoverContent") }, o.children)
    ), o.parentEl);
  }, t.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, t.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, t.prototype.updateSize = function() {
    var n = this.context.isRtl, a = this.props, r = a.alignmentEl, i = a.alignGridTop, o = this.rootEl, s = lD(r);
    if (s) {
      var l = o.getBoundingClientRect(), c = i ? an(r, ".fc-scrollgrid").getBoundingClientRect().top : s.top, u = n ? s.right - l.width : s.left;
      c = Math.max(c, kl), u = Math.min(u, document.documentElement.clientWidth - kl - l.width), u = Math.max(u, kl);
      var d = o.offsetParent.getBoundingClientRect();
      ck(o, {
        top: c - d.top,
        left: u - d.left
      });
    }
  }, t;
}(Be), pR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.handleRootEl = function(a) {
      n.rootEl = a, a ? n.context.registerInteractiveComponent(n, {
        el: a,
        useEventCenter: !1
      }) : n.context.unregisterInteractiveComponent(n);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.options, r = n.dateEnv, i = this.props, o = i.startDate, s = i.todayRange, l = i.dateProfile, c = r.format(o, a.dayPopoverFormat);
    return I(Vm, { date: o, dateProfile: l, todayRange: s, elRef: this.handleRootEl }, function(u, d, f) {
      return I(
        fR,
        { elRef: u, id: i.id, title: c, extraClassNames: ["fc-more-popover"].concat(d), extraAttrs: f, parentEl: i.parentEl, alignmentEl: i.alignmentEl, alignGridTop: i.alignGridTop, onClose: i.onClose },
        I(Pm, { date: o, dateProfile: l, todayRange: s }, function(p, h) {
          return h && I("div", { className: "fc-more-popover-misc", ref: p }, h);
        }),
        i.children
      );
    });
  }, t.prototype.queryHit = function(n, a, r, i) {
    var o = this, s = o.rootEl, l = o.props;
    return n >= 0 && n < r && a >= 0 && a < i ? {
      dateProfile: l.dateProfile,
      dateSpan: R({ allDay: !0, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: r,
        bottom: i
      },
      layer: 1
    } : null;
  }, t;
}(Ta), vR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.linkElRef = It(), n.state = {
      isPopoverOpen: !1,
      popoverId: Vn()
    }, n.handleClick = function(a) {
      var r = n, i = r.props, o = r.context, s = o.options.moreLinkClick, l = dp(i).start;
      function c(u) {
        var d = u.eventRange, f = d.def, p = d.instance, h = d.range;
        return {
          event: new Xt(o, f, p),
          start: o.dateEnv.toDate(h.start),
          end: o.dateEnv.toDate(h.end),
          isStart: u.isStart,
          isEnd: u.isEnd
        };
      }
      typeof s == "function" && (s = s({
        date: l,
        allDay: Boolean(i.allDayDate),
        allSegs: i.allSegs.map(c),
        hiddenSegs: i.hiddenSegs.map(c),
        jsEvent: a,
        view: o.viewApi
      })), !s || s === "popover" ? n.setState({ isPopoverOpen: !0 }) : typeof s == "string" && o.calendarApi.zoomTo(l, s);
    }, n.handlePopoverClose = function() {
      n.setState({ isPopoverOpen: !1 });
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this, r = a.props, i = a.state;
    return I(Ca.Consumer, null, function(o) {
      var s = o.viewApi, l = o.options, c = o.calendarApi, u = l.moreLinkText, d = r.moreCnt, f = dp(r), p = typeof u == "function" ? u.call(c, d) : "+" + d + " " + u, h = Gr(l.moreLinkHint, [d], p), y = {
        num: d,
        shortText: "+" + d,
        text: p,
        view: s
      };
      return I(
        ft,
        null,
        Boolean(r.moreCnt) && I(kn, { elRef: n.linkElRef, hookProps: y, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: r.defaultContent || hR, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(w, m, _, k) {
          return r.children(w, ["fc-more-link"].concat(m), _, k, n.handleClick, h, i.isPopoverOpen, i.isPopoverOpen ? i.popoverId : "");
        }),
        i.isPopoverOpen && I(pR, { id: i.popoverId, startDate: f.start, endDate: f.end, dateProfile: r.dateProfile, todayRange: r.todayRange, extraDateSpan: r.extraDateSpan, parentEl: n.parentEl, alignmentEl: r.alignmentElRef.current, alignGridTop: r.alignGridTop, onClose: n.handlePopoverClose }, r.popoverContent())
      );
    });
  }, t.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, t.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, t.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = an(this.linkElRef.current, ".fc-view-harness"));
  }, t;
}(Be);
function hR(e) {
  return e.text;
}
function dp(e) {
  if (e.allDayDate)
    return {
      start: e.allDayDate,
      end: nt(e.allDayDate, 1)
    };
  var t = e.hiddenSegs;
  return {
    start: mR(t),
    end: yR(t)
  };
}
function mR(e) {
  return e.reduce(gR).eventRange.range.start;
}
function gR(e, t) {
  return e.eventRange.range.start < t.eventRange.range.start ? e : t;
}
function yR(e) {
  return e.reduce(bR).eventRange.range.end;
}
function bR(e, t) {
  return e.eventRange.range.end > t.eventRange.range.end ? e : t;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var _R = function(e) {
  fe(t, e);
  function t(n, a) {
    a === void 0 && (a = {});
    var r = e.call(this) || this;
    return r.isRendering = !1, r.isRendered = !1, r.currentClassNames = [], r.customContentRenderId = 0, r.handleAction = function(i) {
      switch (i.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          r.renderRunner.tryDrain();
      }
    }, r.handleData = function(i) {
      r.currentData = i, r.renderRunner.request(i.calendarOptions.rerenderDelay);
    }, r.handleRenderRequest = function() {
      if (r.isRendering) {
        r.isRendered = !0;
        var i = r.currentData;
        Mf(function() {
          ak(I(PA, { options: i.calendarOptions, theme: i.theme, emitter: i.emitter }, function(o, s, l, c) {
            return r.setClassNames(o), r.setHeight(s), I(
              hm.Provider,
              { value: r.customContentRenderId },
              I($A, R({ isHeightAuto: l, forPrint: c }, i))
            );
          }), r.el);
        });
      } else
        r.isRendered && (r.isRendered = !1, ik(r.el), r.setClassNames([]), r.setHeight(""));
    }, r.el = n, r.renderRunner = new Ic(r.handleRenderRequest), new Dm({
      optionOverrides: a,
      calendarApi: r,
      onAction: r.handleAction,
      onData: r.handleData
    }), r;
  }
  return Object.defineProperty(t.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.render = function() {
    var n = this.isRendering;
    n ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), n && this.updateSize();
  }, t.prototype.destroy = function() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }, t.prototype.updateSize = function() {
    var n = this;
    Mf(function() {
      e.prototype.updateSize.call(n);
    });
  }, t.prototype.batchRendering = function(n) {
    this.renderRunner.pause("batchRendering"), n(), this.renderRunner.resume("batchRendering");
  }, t.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  }, t.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", !0);
  }, t.prototype.resetOptions = function(n, a) {
    this.currentDataManager.resetOptions(n, a);
  }, t.prototype.setClassNames = function(n) {
    if (!ur(n, this.currentClassNames)) {
      for (var a = this.el.classList, r = 0, i = this.currentClassNames; r < i.length; r++) {
        var o = i[r];
        a.remove(o);
      }
      for (var s = 0, l = n; s < l.length; s++) {
        var o = l[s];
        a.add(o);
      }
      this.currentClassNames = n;
    }
  }, t.prototype.setHeight = function(n) {
    jh(this.el, "height", n);
  }, t;
}(Hx);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var ER = {
  googleCalendarApiKey: String
}, wR = {
  googleCalendarApiKey: String,
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: V
}, SR = "https://www.googleapis.com/calendar/v3/calendars", CR = {
  parseMeta: function(e) {
    var t = e.googleCalendarId;
    return !t && e.url && (t = TR(e.url)), t ? {
      googleCalendarId: t,
      googleCalendarApiKey: e.googleCalendarApiKey,
      googleCalendarApiBase: e.googleCalendarApiBase,
      extraParams: e.extraParams
    } : null;
  },
  fetch: function(e, t, n) {
    var a = e.context, r = a.dateEnv, i = a.options, o = e.eventSource.meta, s = o.googleCalendarApiKey || i.googleCalendarApiKey;
    if (!s)
      n({
        message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
      });
    else {
      var l = kR(o), c = o.extraParams, u = typeof c == "function" ? c() : c, d = xR(e.range, s, u, r);
      km("GET", l, d, function(f, p) {
        f.error ? n({
          message: "Google Calendar API: " + f.error.message,
          errors: f.error.errors,
          xhr: p
        }) : t({
          rawEvents: DR(f.items, d.timeZone),
          xhr: p
        });
      }, function(f, p) {
        n({ message: f, xhr: p });
      });
    }
  }
};
function TR(e) {
  var t;
  return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e) ? e : (t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e)) ? decodeURIComponent(t[1]) : null;
}
function kR(e) {
  var t = e.googleCalendarApiBase;
  return t || (t = SR), t + "/" + encodeURIComponent(e.googleCalendarId) + "/events";
}
function xR(e, t, n, a) {
  var r, i, o;
  return a.canComputeOffset ? (i = a.formatIso(e.start), o = a.formatIso(e.end)) : (i = nt(e.start, -1).toISOString(), o = nt(e.end, 1).toISOString()), r = R(R({}, n || {}), { key: t, timeMin: i, timeMax: o, singleEvents: !0, maxResults: 9999 }), a.timeZone !== "local" && (r.timeZone = a.timeZone), r;
}
function DR(e, t) {
  return e.map(function(n) {
    return AR(n, t);
  });
}
function AR(e, t) {
  var n = e.htmlLink || null;
  return n && t && (n = RR(n, "ctz=" + t)), {
    id: e.id,
    title: e.summary,
    start: e.start.dateTime || e.start.date,
    end: e.end.dateTime || e.end.date,
    url: n,
    location: e.location,
    description: e.description,
    attachments: e.attachments || [],
    extendedProps: (e.extendedProperties || {}).shared || {}
  };
}
function RR(e, t) {
  return e.replace(/(\?.*?)?(#|$)/, function(n, a, r) {
    return (a ? a + "&" : "?") + t + r;
  });
}
var IR = Tn({
  eventSourceDefs: [CR],
  optionRefiners: ER,
  eventSourceRefiners: wR
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var OR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.headerElRef = It(), n;
  }
  return t.prototype.renderSimpleLayout = function(n, a) {
    var r = this, i = r.props, o = r.context, s = [], l = cp(o.options);
    return n && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: n
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: a }
    }), I(Ko, { viewSpec: o.viewSpec }, function(c, u) {
      return I(
        "div",
        { ref: c, className: ["fc-daygrid"].concat(u).join(" ") },
        I(Mm, { liquid: !i.isHeightAuto && !i.forPrint, collapsibleWidth: i.forPrint, cols: [], sections: s })
      );
    });
  }, t.prototype.renderHScrollLayout = function(n, a, r, i) {
    var o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    var s = this, l = s.props, c = s.context, u = !l.forPrint && cp(c.options), d = !l.forPrint && nR(c.options), f = [];
    return n && f.push({
      type: "header",
      key: "header",
      isSticky: u,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: n
      }]
    }), f.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: a
      }]
    }), d && f.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: tR
      }]
    }), I(Ko, { viewSpec: c.viewSpec }, function(p, h) {
      return I(
        "div",
        { ref: p, className: ["fc-daygrid"].concat(h).join(" ") },
        I(o, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: r, minWidth: i }] }], sections: f })
      );
    });
  }, t;
}(Ta);
function Yi(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n[a] = [];
  for (var r = 0, i = e; r < i.length; r++) {
    var o = i[r];
    n[o.row].push(o);
  }
  return n;
}
function Ki(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n[a] = [];
  for (var r = 0, i = e; r < i.length; r++) {
    var o = i[r];
    n[o.firstCol].push(o);
  }
  return n;
}
function fp(e, t) {
  var n = [];
  if (e) {
    for (var a = 0; a < t; a += 1)
      n[a] = {
        affectedInstances: e.affectedInstances,
        isEvent: e.isEvent,
        segs: []
      };
    for (var r = 0, i = e.segs; r < i.length; r++) {
      var o = i[r];
      n[o.row].segs.push(o);
    }
  } else
    for (var a = 0; a < t; a += 1)
      n[a] = null;
  return n;
}
var $R = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props, a = ci(this.context, n.date);
    return I(Pm, { date: n.date, dateProfile: n.dateProfile, todayRange: n.todayRange, showDayNumber: n.showDayNumber, extraHookProps: n.extraHookProps, defaultContent: NR }, function(r, i) {
      return (i || n.forceDayTop) && I(
        "div",
        { className: "fc-daygrid-day-top", ref: r },
        I("a", R({ id: n.dayNumberId, className: "fc-daygrid-day-number" }, a), i || I(ft, null, "\xA0"))
      );
    });
  }, t;
}(Be);
function NR(e) {
  return e.dayNumberText;
}
var Lm = tt({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Fm(e) {
  var t = e.eventRange.ui.display;
  return t === "list-item" || t === "auto" && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
}
var Hm = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this.props;
    return I(rR, R({}, n, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Lm, defaultDisplayEventEnd: n.defaultDisplayEventEnd, disableResizing: !n.seg.eventRange.def.allDay }));
  }, t;
}(Be), zm = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = r.options.eventTimeFormat || Lm, o = Kr(a.seg, i, r, !0, a.defaultDisplayEventEnd);
    return I($s, { seg: a.seg, timeText: o, defaultContent: MR, isDragging: a.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: a.isSelected, isPast: a.isPast, isFuture: a.isFuture, isToday: a.isToday }, function(s, l, c, u) {
      return I("a", R({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: s }, kc(a.seg, r)), u);
    });
  }, t;
}(Be);
function MR(e) {
  return I(
    ft,
    null,
    I("div", { className: "fc-daygrid-event-dot", style: { borderColor: e.borderColor || e.backgroundColor } }),
    e.timeText && I("div", { className: "fc-event-time" }, e.timeText),
    I("div", { className: "fc-event-title" }, e.event.title || I(ft, null, "\xA0"))
  );
}
var PR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.compileSegs = ke(BR), n;
  }
  return t.prototype.render = function() {
    var n = this.props, a = this.compileSegs(n.singlePlacements), r = a.allSegs, i = a.invisibleSegs;
    return I(vR, { dateProfile: n.dateProfile, todayRange: n.todayRange, allDayDate: n.allDayDate, moreCnt: n.moreCnt, allSegs: r, hiddenSegs: i, alignmentElRef: n.alignmentElRef, alignGridTop: n.alignGridTop, extraDateSpan: n.extraDateSpan, popoverContent: function() {
      var o = (n.eventDrag ? n.eventDrag.affectedInstances : null) || (n.eventResize ? n.eventResize.affectedInstances : null) || {};
      return I(ft, null, r.map(function(s) {
        var l = s.eventRange.instance.instanceId;
        return I("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: o[l] ? "hidden" : ""
        } }, Fm(s) ? I(zm, R({ seg: s, isDragging: !1, isSelected: l === n.eventSelection, defaultDisplayEventEnd: !1 }, Qa(s, n.todayRange))) : I(Hm, R({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === n.eventSelection, defaultDisplayEventEnd: !1 }, Qa(s, n.todayRange))));
      }));
    } }, function(o, s, l, c, u, d, f, p) {
      return I("a", R({ ref: o, className: ["fc-daygrid-more-link"].concat(s).join(" "), title: d, "aria-expanded": f, "aria-controls": p }, qh(u)), c);
    });
  }, t;
}(Be);
function BR(e) {
  for (var t = [], n = [], a = 0, r = e; a < r.length; a++) {
    var i = r[a];
    t.push(i.seg), i.isVisible || n.push(i.seg);
  }
  return { allSegs: t, invisibleSegs: n };
}
var VR = tt({ week: "narrow" }), LR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.rootElRef = It(), n.state = {
      dayNumberId: Vn()
    }, n.handleRootEl = function(a) {
      bn(n.rootElRef, a), bn(n.props.elRef, a);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.context, r = n.props, i = n.state, o = n.rootElRef, s = r.date, l = r.dateProfile, c = ci(a, s, "week");
    return I(Vm, { date: s, dateProfile: l, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, elRef: this.handleRootEl }, function(u, d, f, p) {
      return I(
        "td",
        R({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(d, r.extraClassNames || []).join(" ") }, f, r.extraDataAttrs, r.showDayNumber ? { "aria-labelledby": i.dayNumberId } : {}),
        I(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: r.innerElRef },
          r.showWeekNumber && I(cR, { date: s, defaultFormat: VR }, function(h, y, w, m) {
            return I("a", R({ ref: h, className: ["fc-daygrid-week-number"].concat(y).join(" ") }, c), m);
          }),
          !p && I($R, { date: s, dateProfile: l, showDayNumber: r.showDayNumber, dayNumberId: i.dayNumberId, forceDayTop: r.forceDayTop, todayRange: r.todayRange, extraHookProps: r.extraHookProps }),
          I(
            "div",
            { className: "fc-daygrid-day-events", ref: r.fgContentElRef },
            r.fgContent,
            I(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: r.moreMarginTop } },
              I(PR, { allDayDate: s, singlePlacements: r.singlePlacements, moreCnt: r.moreCnt, alignmentElRef: o, alignGridTop: !r.showDayNumber, extraDateSpan: r.extraDateSpan, dateProfile: r.dateProfile, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, todayRange: r.todayRange })
            )
          ),
          I("div", { className: "fc-daygrid-day-bg" }, r.bgContent)
        )
      );
    });
  }, t;
}(Ta);
function FR(e, t, n, a, r, i, o) {
  var s = new UR();
  s.allowReslicing = !0, s.strictOrder = a, t === !0 || n === !0 ? (s.maxCoord = i, s.hiddenConsumes = !0) : typeof t == "number" ? s.maxStackCnt = t : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
  for (var l = [], c = [], u = 0; u < e.length; u += 1) {
    var d = e[u], f = d.eventRange.instance.instanceId, p = r[f];
    p != null ? l.push({
      index: u,
      thickness: p,
      span: {
        start: d.firstCol,
        end: d.lastCol + 1
      }
    }) : c.push(d);
  }
  for (var h = s.addSegs(l), y = s.toRects(), w = HR(y, e, o), m = w.singleColPlacements, _ = w.multiColPlacements, k = w.leftoverMargins, x = [], D = [], A = 0, L = c; A < L.length; A++) {
    var d = L[A];
    _[d.firstCol].push({
      seg: d,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var $ = d.firstCol; $ <= d.lastCol; $ += 1)
      m[$].push({
        seg: Ja(d, $, $ + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var $ = 0; $ < o.length; $ += 1)
    x.push(0);
  for (var O = 0, j = h; O < j.length; O++) {
    var X = j[O], d = e[X.index], Q = X.span;
    _[Q.start].push({
      seg: Ja(d, Q.start, Q.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var $ = Q.start; $ < Q.end; $ += 1)
      x[$] += 1, m[$].push({
        seg: Ja(d, $, $ + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var $ = 0; $ < o.length; $ += 1)
    D.push(k[$]);
  return { singleColPlacements: m, multiColPlacements: _, moreCnts: x, moreMarginTops: D };
}
function HR(e, t, n) {
  for (var a = zR(e, n.length), r = [], i = [], o = [], s = 0; s < n.length; s += 1) {
    for (var l = a[s], c = [], u = 0, d = 0, f = 0, p = l; f < p.length; f++) {
      var h = p[f], y = t[h.index];
      c.push({
        seg: Ja(y, s, s + 1, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: h.levelCoord - u
      }), u = h.levelCoord + h.thickness;
    }
    var w = [];
    u = 0, d = 0;
    for (var m = 0, _ = l; m < _.length; m++) {
      var h = _[m], y = t[h.index], k = h.span.end - h.span.start > 1, x = h.span.start === s;
      d += h.levelCoord - u, u = h.levelCoord + h.thickness, k ? (d += h.thickness, x && w.push({
        seg: Ja(y, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: h.levelCoord,
        marginTop: 0
      })) : x && (w.push({
        seg: Ja(y, h.span.start, h.span.end, n),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: h.levelCoord,
        marginTop: d
      }), d = 0);
    }
    r.push(c), i.push(w), o.push(d);
  }
  return { singleColPlacements: r, multiColPlacements: i, leftoverMargins: o };
}
function zR(e, t) {
  for (var n = [], a = 0; a < t; a += 1)
    n.push([]);
  for (var r = 0, i = e; r < i.length; r++)
    for (var o = i[r], a = o.span.start; a < o.span.end; a += 1)
      n[a].push(o);
  return n;
}
function Ja(e, t, n, a) {
  if (e.firstCol === t && e.lastCol === n - 1)
    return e;
  var r = e.eventRange, i = r.range, o = cr(i, {
    start: a[t].date,
    end: nt(a[n - 1].date, 1)
  });
  return R(R({}, e), { firstCol: t, lastCol: n - 1, eventRange: {
    def: r.def,
    ui: R(R({}, r.ui), { durationEditable: !1 }),
    instance: r.instance,
    range: o
  }, isStart: e.isStart && o.start.valueOf() === i.start.valueOf(), isEnd: e.isEnd && o.end.valueOf() === i.end.valueOf() });
}
var UR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.hiddenConsumes = !1, n.forceHidden = {}, n;
  }
  return t.prototype.addSegs = function(n) {
    for (var a = this, r = e.prototype.addSegs.call(this, n), i = this.entriesByLevel, o = function(l) {
      return !a.forceHidden[Xr(l)];
    }, s = 0; s < i.length; s += 1)
      i[s] = i[s].filter(o);
    return r;
  }, t.prototype.handleInvalidInsertion = function(n, a, r) {
    var i = this, o = i.entriesByLevel, s = i.forceHidden, l = n.touchingEntry, c = n.touchingLevel, u = n.touchingLateral;
    if (this.hiddenConsumes && l) {
      var d = Xr(l);
      if (!s[d])
        if (this.allowReslicing) {
          var f = R(R({}, l), { span: Am(l.span, a.span) }), p = Xr(f);
          s[p] = !0, o[c][u] = f, this.splitEntry(l, a, r);
        } else
          s[d] = !0, r.push(l);
    }
    return e.prototype.handleInvalidInsertion.call(this, n, a, r);
  }, t;
}(xA), Um = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.cellElRefs = new la(), n.frameElRefs = new la(), n.fgElRefs = new la(), n.segHarnessRefs = new la(), n.rootElRef = It(), n.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this, r = a.props, i = a.state, o = a.context, s = o.options, l = r.cells.length, c = Ki(r.businessHourSegs, l), u = Ki(r.bgEventSegs, l), d = Ki(this.getHighlightSegs(), l), f = Ki(this.getMirrorSegs(), l), p = FR(nm(r.fgEventSegs, s.eventOrder), r.dayMaxEvents, r.dayMaxEventRows, s.eventOrderStrict, i.eventInstanceHeights, i.maxContentHeight, r.cells), h = p.singleColPlacements, y = p.multiColPlacements, w = p.moreCnts, m = p.moreMarginTops, _ = r.eventDrag && r.eventDrag.affectedInstances || r.eventResize && r.eventResize.affectedInstances || {};
    return I(
      "tr",
      { ref: this.rootElRef, role: "row" },
      r.renderIntro && r.renderIntro(),
      r.cells.map(function(k, x) {
        var D = n.renderFgSegs(x, r.forPrint ? h[x] : y[x], r.todayRange, _), A = n.renderFgSegs(x, jR(f[x], y), r.todayRange, {}, Boolean(r.eventDrag), Boolean(r.eventResize), !1);
        return I(LR, { key: k.key, elRef: n.cellElRefs.createRef(k.key), innerElRef: n.frameElRefs.createRef(k.key), dateProfile: r.dateProfile, date: k.date, showDayNumber: r.showDayNumbers, showWeekNumber: r.showWeekNumbers && x === 0, forceDayTop: r.showWeekNumbers, todayRange: r.todayRange, eventSelection: r.eventSelection, eventDrag: r.eventDrag, eventResize: r.eventResize, extraHookProps: k.extraHookProps, extraDataAttrs: k.extraDataAttrs, extraClassNames: k.extraClassNames, extraDateSpan: k.extraDateSpan, moreCnt: w[x], moreMarginTop: m[x], singlePlacements: h[x], fgContentElRef: n.fgElRefs.createRef(k.key), fgContent: I(
          ft,
          null,
          I(ft, null, D),
          I(ft, null, A)
        ), bgContent: I(
          ft,
          null,
          n.renderFillSegs(d[x], "highlight"),
          n.renderFillSegs(c[x], "non-business"),
          n.renderFillSegs(u[x], "bg-event")
        ) });
      })
    );
  }, t.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, t.prototype.componentDidUpdate = function(n, a) {
    var r = this.props;
    this.updateSizing(!yn(n, r));
  }, t.prototype.getHighlightSegs = function() {
    var n = this.props;
    return n.eventDrag && n.eventDrag.segs.length ? n.eventDrag.segs : n.eventResize && n.eventResize.segs.length ? n.eventResize.segs : n.dateSelectionSegs;
  }, t.prototype.getMirrorSegs = function() {
    var n = this.props;
    return n.eventResize && n.eventResize.segs.length ? n.eventResize.segs : [];
  }, t.prototype.renderFgSegs = function(n, a, r, i, o, s, l) {
    var c = this.context, u = this.props.eventSelection, d = this.state.framePositions, f = this.props.cells.length === 1, p = o || s || l, h = [];
    if (d)
      for (var y = 0, w = a; y < w.length; y++) {
        var m = w[y], _ = m.seg, k = _.eventRange.instance.instanceId, x = k + ":" + n, D = m.isVisible && !i[k], A = m.isAbsolute, L = "", $ = "";
        A && (c.isRtl ? ($ = 0, L = d.lefts[_.lastCol] - d.lefts[_.firstCol]) : (L = 0, $ = d.rights[_.firstCol] - d.rights[_.lastCol])), h.push(I("div", { className: "fc-daygrid-event-harness" + (A ? " fc-daygrid-event-harness-abs" : ""), key: x, ref: p ? null : this.segHarnessRefs.createRef(x), style: {
          visibility: D ? "" : "hidden",
          marginTop: A ? "" : m.marginTop,
          top: A ? m.absoluteTop : "",
          left: L,
          right: $
        } }, Fm(_) ? I(zm, R({ seg: _, isDragging: o, isSelected: k === u, defaultDisplayEventEnd: f }, Qa(_, r))) : I(Hm, R({ seg: _, isDragging: o, isResizing: s, isDateSelecting: l, isSelected: k === u, defaultDisplayEventEnd: f }, Qa(_, r)))));
      }
    return h;
  }, t.prototype.renderFillSegs = function(n, a) {
    var r = this.context.isRtl, i = this.props.todayRange, o = this.state.framePositions, s = [];
    if (o)
      for (var l = 0, c = n; l < c.length; l++) {
        var u = c[l], d = r ? {
          right: 0,
          left: o.lefts[u.lastCol] - o.lefts[u.firstCol]
        } : {
          left: 0,
          right: o.rights[u.firstCol] - o.rights[u.lastCol]
        };
        s.push(I("div", { key: Cx(u.eventRange), className: "fc-daygrid-bg-harness", style: d }, a === "bg-event" ? I(lR, R({ seg: u }, Qa(u, i))) : sR(a)));
      }
    return I.apply(void 0, Ke([ft, {}], s));
  }, t.prototype.updateSizing = function(n) {
    var a = this, r = a.props, i = a.frameElRefs;
    if (!r.forPrint && r.clientWidth !== null) {
      if (n) {
        var o = r.cells.map(function(d) {
          return i.currentMap[d.key];
        });
        if (o.length) {
          var s = this.rootElRef.current;
          this.setState({
            framePositions: new xu(
              s,
              o,
              !0,
              !1
            )
          });
        }
      }
      var l = this.state.eventInstanceHeights, c = this.queryEventInstanceHeights(), u = r.dayMaxEvents === !0 || r.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: R(R({}, l), c),
        maxContentHeight: u ? this.computeMaxContentHeight() : null
      });
    }
  }, t.prototype.queryEventInstanceHeights = function() {
    var n = this.segHarnessRefs.currentMap, a = {};
    for (var r in n) {
      var i = Math.round(n[r].getBoundingClientRect().height), o = r.split(":")[0];
      a[o] = Math.max(a[o] || 0, i);
    }
    return a;
  }, t.prototype.computeMaxContentHeight = function() {
    var n = this.props.cells[0].key, a = this.cellElRefs.currentMap[n], r = this.fgElRefs.currentMap[n];
    return a.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
  }, t.prototype.getCellEls = function() {
    var n = this.cellElRefs.currentMap;
    return this.props.cells.map(function(a) {
      return n[a.key];
    });
  }, t;
}(Ta);
Um.addStateEquality({
  eventInstanceHeights: yn
});
function jR(e, t) {
  if (!e.length)
    return [];
  var n = WR(t);
  return e.map(function(a) {
    return {
      seg: a,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: n[a.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function WR(e) {
  for (var t = {}, n = 0, a = e; n < a.length; n++)
    for (var r = a[n], i = 0, o = r; i < o.length; i++) {
      var s = o[i];
      t[s.seg.eventRange.instance.instanceId] = s.absoluteTop;
    }
  return t;
}
var qR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.splitBusinessHourSegs = ke(Yi), n.splitBgEventSegs = ke(Yi), n.splitFgEventSegs = ke(Yi), n.splitDateSelectionSegs = ke(Yi), n.splitEventDrag = ke(fp), n.splitEventResize = ke(fp), n.rowRefs = new la(), n.handleRootEl = function(a) {
      n.rootEl = a, a ? n.context.registerInteractiveComponent(n, {
        el: a,
        isHitComboAllowed: n.props.isHitComboAllowed
      }) : n.context.unregisterInteractiveComponent(n);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.props, r = a.dateProfile, i = a.dayMaxEventRows, o = a.dayMaxEvents, s = a.expandRows, l = a.cells.length, c = this.splitBusinessHourSegs(a.businessHourSegs, l), u = this.splitBgEventSegs(a.bgEventSegs, l), d = this.splitFgEventSegs(a.fgEventSegs, l), f = this.splitDateSelectionSegs(a.dateSelectionSegs, l), p = this.splitEventDrag(a.eventDrag, l), h = this.splitEventResize(a.eventResize, l), y = o === !0 || i === !0;
    y && !s && (y = !1, i = null, o = null);
    var w = [
      "fc-daygrid-body",
      y ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      s ? "" : "fc-daygrid-body-natural"
    ];
    return I(
      "div",
      { className: w.join(" "), ref: this.handleRootEl, style: {
        width: a.clientWidth,
        minWidth: a.tableMinWidth
      } },
      I(Oc, { unit: "day" }, function(m, _) {
        return I(
          ft,
          null,
          I(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: a.clientWidth,
              minWidth: a.tableMinWidth,
              height: s ? a.clientHeight : ""
            } },
            a.colGroupNode,
            I("tbody", { role: "presentation" }, a.cells.map(function(k, x) {
              return I(Um, {
                ref: n.rowRefs.createRef(x),
                key: k.length ? k[0].date.toISOString() : x,
                showDayNumbers: l > 1,
                showWeekNumbers: a.showWeekNumbers,
                todayRange: _,
                dateProfile: r,
                cells: k,
                renderIntro: a.renderRowIntro,
                businessHourSegs: c[x],
                eventSelection: a.eventSelection,
                bgEventSegs: u[x].filter(GR),
                fgEventSegs: d[x],
                dateSelectionSegs: f[x],
                eventDrag: p[x],
                eventResize: h[x],
                dayMaxEvents: o,
                dayMaxEventRows: i,
                clientWidth: a.clientWidth,
                clientHeight: a.clientHeight,
                forPrint: a.forPrint
              });
            }))
          )
        );
      })
    );
  }, t.prototype.prepareHits = function() {
    this.rowPositions = new xu(
      this.rootEl,
      this.rowRefs.collect().map(function(n) {
        return n.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new xu(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, t.prototype.queryHit = function(n, a) {
    var r = this, i = r.colPositions, o = r.rowPositions, s = i.leftToIndex(n), l = o.topToIndex(a);
    if (l != null && s != null) {
      var c = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: R({ range: this.getCellRange(l, s), allDay: !0 }, c.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: i.lefts[s],
          right: i.rights[s],
          top: o.tops[l],
          bottom: o.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }, t.prototype.getCellEl = function(n, a) {
    return this.rowRefs.currentMap[n].getCellEls()[a];
  }, t.prototype.getCellRange = function(n, a) {
    var r = this.props.cells[n][a].date, i = nt(r, 1);
    return { start: r, end: i };
  }, t;
}(Ta);
function GR(e) {
  return e.eventRange.def.allDay;
}
var YR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.forceDayIfListItem = !0, n;
  }
  return t.prototype.sliceRange = function(n, a) {
    return a.sliceRange(n);
  }, t;
}(WA), KR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.slicer = new YR(), n.tableRef = It(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context;
    return I(qR, R({ ref: this.tableRef }, this.slicer.sliceProps(a, a.dateProfile, a.nextDayThreshold, r, a.dayTableModel), { dateProfile: a.dateProfile, cells: a.dayTableModel.cells, colGroupNode: a.colGroupNode, tableMinWidth: a.tableMinWidth, renderRowIntro: a.renderRowIntro, dayMaxEvents: a.dayMaxEvents, dayMaxEventRows: a.dayMaxEventRows, showWeekNumbers: a.showWeekNumbers, expandRows: a.expandRows, headerAlignElRef: a.headerAlignElRef, clientWidth: a.clientWidth, clientHeight: a.clientHeight, forPrint: a.forPrint }));
  }, t;
}(Ta), XR = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.buildDayTableModel = ke(ZR), n.headerRef = It(), n.tableRef = It(), n;
  }
  return t.prototype.render = function() {
    var n = this, a = this.context, r = a.options, i = a.dateProfileGenerator, o = this.props, s = this.buildDayTableModel(o.dateProfile, i), l = r.dayHeaders && I(HA, { ref: this.headerRef, dateProfile: o.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), c = function(u) {
      return I(KR, { ref: n.tableRef, dateProfile: o.dateProfile, dayTableModel: s, businessHours: o.businessHours, dateSelection: o.dateSelection, eventStore: o.eventStore, eventUiBases: o.eventUiBases, eventSelection: o.eventSelection, eventDrag: o.eventDrag, eventResize: o.eventResize, nextDayThreshold: r.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: r.dayMaxEvents, dayMaxEventRows: r.dayMaxEventRows, showWeekNumbers: r.weekNumbers, expandRows: !o.isHeightAuto, headerAlignElRef: n.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: o.forPrint });
    };
    return r.dayMinWidth ? this.renderHScrollLayout(l, c, s.colCnt, r.dayMinWidth) : this.renderSimpleLayout(l, c);
  }, t;
}(OR);
function ZR(e, t) {
  var n = new UA(e.renderRange, t);
  return new jA(n, /year|month|week/.test(e.currentRangeUnit));
}
var QR = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.buildRenderRange = function(n, a, r) {
    var i = this.props.dateEnv, o = e.prototype.buildRenderRange.call(this, n, a, r), s = o.start, l = o.end, c;
    if (/^(year|month)$/.test(a) && (s = i.startOfWeek(s), c = i.startOfWeek(l), c.valueOf() !== l.valueOf() && (l = Vf(c, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var u = Math.ceil(
        _k(s, l)
      );
      l = Vf(l, 6 - u);
    }
    return { start: s, end: l };
  }, t;
}(bm), JR = Tn({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: XR,
      dateProfileGeneratorClass: QR
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var eI = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.state = {
      textId: Vn()
    }, n;
  }
  return t.prototype.render = function() {
    var n = this.context, a = n.theme, r = n.dateEnv, i = n.options, o = n.viewApi, s = this.props, l = s.cellId, c = s.dayDate, u = s.todayRange, d = this.state.textId, f = Dc(c, u), p = i.listDayFormat ? r.format(c, i.listDayFormat) : "", h = i.listDaySideFormat ? r.format(c, i.listDaySideFormat) : "", y = R({
      date: r.toDate(c),
      view: o,
      textId: d,
      text: p,
      sideText: h,
      navLinkAttrs: ci(this.context, c),
      sideNavLinkAttrs: ci(this.context, c, "day", !1)
    }, f), w = ["fc-list-day"].concat(Is(f, a));
    return I(kn, { hookProps: y, classNames: i.dayHeaderClassNames, content: i.dayHeaderContent, defaultContent: tI, didMount: i.dayHeaderDidMount, willUnmount: i.dayHeaderWillUnmount }, function(m, _, k, x) {
      return I(
        "tr",
        { ref: m, className: w.concat(_).join(" "), "data-date": Rs(c) },
        I(
          "th",
          { scope: "colgroup", colSpan: 3, id: l, "aria-labelledby": d },
          I("div", { className: "fc-list-day-cushion " + a.getClass("tableCellShaded"), ref: k }, x)
        )
      );
    });
  }, t;
}(Be);
function tI(e) {
  return I(
    ft,
    null,
    e.text && I("a", R({ id: e.textId, className: "fc-list-day-text" }, e.navLinkAttrs), e.text),
    e.sideText && I("a", R({ "aria-hidden": !0, className: "fc-list-day-side-text" }, e.sideNavLinkAttrs), e.sideText)
  );
}
var nI = tt({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
}), aI = function(e) {
  fe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.render = function() {
    var n = this, a = n.props, r = n.context, i = a.seg, o = a.timeHeaderId, s = a.eventHeaderId, l = a.dateHeaderId, c = r.options.eventTimeFormat || nI;
    return I($s, {
      seg: i,
      timeText: "",
      disableDragging: !0,
      disableResizing: !0,
      defaultContent: function() {
        return rI(i, r);
      },
      isPast: a.isPast,
      isFuture: a.isFuture,
      isToday: a.isToday,
      isSelected: a.isSelected,
      isDragging: a.isDragging,
      isResizing: a.isResizing,
      isDateSelecting: a.isDateSelecting
    }, function(u, d, f, p, h) {
      return I(
        "tr",
        { className: ["fc-list-event", h.event.url ? "fc-event-forced-url" : ""].concat(d).join(" "), ref: u },
        iI(i, c, r, o, l),
        I(
          "td",
          { "aria-hidden": !0, className: "fc-list-event-graphic" },
          I("span", { className: "fc-list-event-dot", style: { borderColor: h.borderColor || h.backgroundColor } })
        ),
        I("td", { ref: f, headers: s + " " + l, className: "fc-list-event-title" }, p)
      );
    });
  }, t;
}(Be);
function rI(e, t) {
  var n = kc(e, t);
  return I("a", R({}, n), e.eventRange.def.title);
}
function iI(e, t, n, a, r) {
  var i = n.options;
  if (i.displayEventTime !== !1) {
    var o = e.eventRange.def, s = e.eventRange.instance, l = !1, c = void 0;
    if (o.allDay ? l = !0 : vx(e.eventRange.range) ? e.isStart ? c = Kr(e, t, n, null, null, s.range.start, e.end) : e.isEnd ? c = Kr(e, t, n, null, null, e.start, s.range.end) : l = !0 : c = Kr(e, t, n), l) {
      var u = {
        text: n.options.allDayText,
        view: n.viewApi
      };
      return I(kn, { hookProps: u, classNames: i.allDayClassNames, content: i.allDayContent, defaultContent: oI, didMount: i.allDayDidMount, willUnmount: i.allDayWillUnmount }, function(d, f, p, h) {
        return I("td", { ref: d, headers: a + " " + r, className: ["fc-list-event-time"].concat(f).join(" ") }, h);
      });
    }
    return I("td", { className: "fc-list-event-time" }, c);
  }
  return null;
}
function oI(e) {
  return e.text;
}
var sI = function(e) {
  fe(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.computeDateVars = ke(uI), n.eventStoreToSegs = ke(n._eventStoreToSegs), n.state = {
      timeHeaderId: Vn(),
      eventHeaderId: Vn(),
      dateHeaderIdRoot: Vn()
    }, n.setRootEl = function(a) {
      a ? n.context.registerInteractiveComponent(n, {
        el: a
      }) : n.context.unregisterInteractiveComponent(n);
    }, n;
  }
  return t.prototype.render = function() {
    var n = this, a = this, r = a.props, i = a.context, o = [
      "fc-list",
      i.theme.getClass("table"),
      i.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""
    ], s = this.computeDateVars(r.dateProfile), l = s.dayDates, c = s.dayRanges, u = this.eventStoreToSegs(r.eventStore, r.eventUiBases, c);
    return I(Ko, { viewSpec: i.viewSpec, elRef: this.setRootEl }, function(d, f) {
      return I(
        "div",
        { ref: d, className: o.concat(f).join(" ") },
        I($m, { liquid: !r.isHeightAuto, overflowX: r.isHeightAuto ? "visible" : "hidden", overflowY: r.isHeightAuto ? "visible" : "auto" }, u.length > 0 ? n.renderSegList(u, l) : n.renderEmptyMessage())
      );
    });
  }, t.prototype.renderEmptyMessage = function() {
    var n = this.context, a = n.options, r = n.viewApi, i = {
      text: a.noEventsText,
      view: r
    };
    return I(kn, { hookProps: i, classNames: a.noEventsClassNames, content: a.noEventsContent, defaultContent: lI, didMount: a.noEventsDidMount, willUnmount: a.noEventsWillUnmount }, function(o, s, l, c) {
      return I(
        "div",
        { className: ["fc-list-empty"].concat(s).join(" "), ref: o },
        I("div", { className: "fc-list-empty-cushion", ref: l }, c)
      );
    });
  }, t.prototype.renderSegList = function(n, a) {
    var r = this.context, i = r.theme, o = r.options, s = this.state, l = s.timeHeaderId, c = s.eventHeaderId, u = s.dateHeaderIdRoot, d = cI(n);
    return I(Oc, { unit: "day" }, function(f, p) {
      for (var h = [], y = 0; y < d.length; y += 1) {
        var w = d[y];
        if (w) {
          var m = Rs(a[y]), _ = u + "-" + m;
          h.push(I(eI, { key: m, cellId: _, dayDate: a[y], todayRange: p })), w = nm(w, o.eventOrder);
          for (var k = 0, x = w; k < x.length; k++) {
            var D = x[k];
            h.push(I(aI, R({ key: m + ":" + D.eventRange.instance.instanceId, seg: D, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: l, eventHeaderId: c, dateHeaderId: _ }, Qa(D, p, f))));
          }
        }
      }
      return I(
        "table",
        { className: "fc-list-table " + i.getClass("table") },
        I(
          "thead",
          null,
          I(
            "tr",
            null,
            I("th", { scope: "col", id: l }, o.timeHint),
            I("th", { scope: "col", "aria-hidden": !0 }),
            I("th", { scope: "col", id: c }, o.eventHint)
          )
        ),
        I("tbody", null, h)
      );
    });
  }, t.prototype._eventStoreToSegs = function(n, a, r) {
    return this.eventRangesToSegs(Tu(n, a, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r);
  }, t.prototype.eventRangesToSegs = function(n, a) {
    for (var r = [], i = 0, o = n; i < o.length; i++) {
      var s = o[i];
      r.push.apply(r, this.eventRangeToSegs(s, a));
    }
    return r;
  }, t.prototype.eventRangeToSegs = function(n, a) {
    var r = this.context.dateEnv, i = this.context.options.nextDayThreshold, o = n.range, s = n.def.allDay, l, c, u, d = [];
    for (l = 0; l < a.length; l += 1)
      if (c = cr(o, a[l]), c && (u = {
        component: this,
        eventRange: n,
        start: c.start,
        end: c.end,
        isStart: n.isStart && c.start.valueOf() === o.start.valueOf(),
        isEnd: n.isEnd && c.end.valueOf() === o.end.valueOf(),
        dayIndex: l
      }, d.push(u), !u.isEnd && !s && l + 1 < a.length && o.end < r.add(a[l + 1].start, i))) {
        u.end = o.end, u.isEnd = !0;
        break;
      }
    return d;
  }, t;
}(Ta);
function lI(e) {
  return e.text;
}
function uI(e) {
  for (var t = ze(e.renderRange.start), n = e.renderRange.end, a = [], r = []; t < n; )
    a.push(t), r.push({
      start: t,
      end: nt(t, 1)
    }), t = nt(t, 1);
  return { dayDates: a, dayRanges: r };
}
function cI(e) {
  var t = [], n, a;
  for (n = 0; n < e.length; n += 1)
    a = e[n], (t[a.dayIndex] || (t[a.dayIndex] = [])).push(a);
  return t;
}
var dI = {
  listDayFormat: pp,
  listDaySideFormat: pp,
  noEventsClassNames: V,
  noEventsContent: V,
  noEventsDidMount: V,
  noEventsWillUnmount: V
};
function pp(e) {
  return e === !1 ? null : tt(e);
}
var fI = Tn({
  optionRefiners: dI,
  views: {
    list: {
      component: sI,
      buttonTextKey: "list",
      listDayFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listDay: {
      type: "list",
      duration: { days: 1 },
      listDayFormat: { weekday: "long" }
    },
    listWeek: {
      type: "list",
      duration: { weeks: 1 },
      listDayFormat: { weekday: "long" },
      listDaySideFormat: { month: "long", day: "numeric", year: "numeric" }
    },
    listMonth: {
      type: "list",
      duration: { month: 1 },
      listDaySideFormat: { weekday: "long" }
    },
    listYear: {
      type: "list",
      duration: { year: 1 },
      listDaySideFormat: { weekday: "long" }
    }
  }
});
const jm = wn("GoogleCalendarStore", {
  state: () => ({
    id: null,
    events: null,
    upcomingEvents: null,
    calendarIds: null
  }),
  actions: {}
}), pI = {
  key: 0,
  class: "title"
}, vI = {
  key: 1,
  class: "description"
}, hI = ["id"], mI = /* @__PURE__ */ B({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null
  },
  setup(e) {
    const n = b(e, "dataAttributes");
    let a = n && (n == null ? void 0 : n.value) ? n.value["css-class"] : null;
    const r = a ? "google-calendar " + a : "google-calendar";
    console.log(r);
    const i = n && (n == null ? void 0 : n.value) ? n.value["calendar-title"] : null, o = n && (n == null ? void 0 : n.value) ? n.value["calendar-description"] : null;
    jm();
    const s = oe.create().toString();
    return je(() => {
      let l = document.getElementById(s), c = [], u = n && (n == null ? void 0 : n.value) ? n == null ? void 0 : n.value["calendar-ids"] : Array();
      (!u || !u.length) && (u = yt.googleCalendarIds), u.map(function(y) {
        let w = { googleCalendarId: y.trim(), className: "gcal-event" };
        c == null || c.push(w);
      });
      let d = n && (n == null ? void 0 : n.value) ? n == null ? void 0 : n.value["display-style"] : null;
      d || (d = yt.initialView);
      const f = n && (n == null ? void 0 : n.value) ? n == null ? void 0 : n.value["api-key"] : null;
      let p = f || yt.googleApiKey;
      new _R(l, {
        plugins: [IR, JR, fI],
        googleCalendarApiKey: p,
        eventSources: c,
        initialView: d
      }).render();
    }), (l, c) => (g(), T("div", {
      class: W(v(r))
    }, [
      v(i) ? (g(), T("div", pI, G(v(i)), 1)) : H("", !0),
      v(o) ? (g(), T("div", vI, G(v(o)), 1)) : H("", !0),
      S("div", {
        id: v(s),
        class: "reder-target"
      }, null, 8, hI)
    ], 2));
  }
});
const gI = /* @__PURE__ */ Ut(mI, [["__scopeId", "data-v-22801c8c"]]), QF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CollectionManager: ST,
  ItemManager: kT,
  EntityTemplateManager: AT,
  FormTemplateManager: OT,
  GoogleCalendar: gI,
  useGoogleCalendarStore: jm
}, Symbol.toStringTag, { value: "Module" }));
var pt = "top", Tt = "bottom", kt = "right", vt = "left", Ns = "auto", Cr = [pt, Tt, kt, vt], ba = "start", dr = "end", Wm = "clippingParents", $c = "viewport", La = "popper", qm = "reference", Au = /* @__PURE__ */ Cr.reduce(function(e, t) {
  return e.concat([t + "-" + ba, t + "-" + dr]);
}, []), Nc = /* @__PURE__ */ [].concat(Cr, [Ns]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ba, t + "-" + dr]);
}, []), Gm = "beforeRead", Ym = "read", Km = "afterRead", Xm = "beforeMain", Zm = "main", Qm = "afterMain", Jm = "beforeWrite", eg = "write", tg = "afterWrite", ng = [Gm, Ym, Km, Xm, Zm, Qm, Jm, eg, tg];
function en(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Nt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _a(e) {
  var t = Nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Rt(e) {
  var t = Nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yI(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !Rt(i) || !en(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(o) {
      var s = r[o];
      s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function bI(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var r = t.elements[a], i = t.attributes[a] || {}, o = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), s = o.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Rt(r) || !en(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Pc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yI,
  effect: bI,
  requires: ["computeStyles"]
};
function Qt(e) {
  return e.split("-")[0];
}
var fa = Math.max, Xo = Math.min, fr = Math.round;
function Ru() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ag() {
  return !/^((?!chrome|android).)*safari/i.test(Ru());
}
function pr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), r = 1, i = 1;
  t && Rt(e) && (r = e.offsetWidth > 0 && fr(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && fr(a.height) / e.offsetHeight || 1);
  var o = _a(e) ? Nt(e) : window, s = o.visualViewport, l = !ag() && n, c = (a.left + (l && s ? s.offsetLeft : 0)) / r, u = (a.top + (l && s ? s.offsetTop : 0)) / i, d = a.width / r, f = a.height / i;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Bc(e) {
  var t = pr(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function rg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Mc(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function _n(e) {
  return Nt(e).getComputedStyle(e);
}
function _I(e) {
  return ["table", "td", "th"].indexOf(en(e)) >= 0;
}
function Yn(e) {
  return ((_a(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ms(e) {
  return en(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mc(e) ? e.host : null) || Yn(e);
}
function vp(e) {
  return !Rt(e) || _n(e).position === "fixed" ? null : e.offsetParent;
}
function EI(e) {
  var t = /firefox/i.test(Ru()), n = /Trident/i.test(Ru());
  if (n && Rt(e)) {
    var a = _n(e);
    if (a.position === "fixed")
      return null;
  }
  var r = Ms(e);
  for (Mc(r) && (r = r.host); Rt(r) && ["html", "body"].indexOf(en(r)) < 0; ) {
    var i = _n(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Si(e) {
  for (var t = Nt(e), n = vp(e); n && _I(n) && _n(n).position === "static"; )
    n = vp(n);
  return n && (en(n) === "html" || en(n) === "body" && _n(n).position === "static") ? t : n || EI(e) || t;
}
function Vc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zr(e, t, n) {
  return fa(e, Xo(t, n));
}
function wI(e, t, n) {
  var a = Zr(e, t, n);
  return a > n ? n : a;
}
function ig() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function og(e) {
  return Object.assign({}, ig(), e);
}
function sg(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var SI = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, og(typeof t != "number" ? t : sg(t, Cr));
};
function CI(e) {
  var t, n = e.state, a = e.name, r = e.options, i = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Qt(n.placement), l = Vc(s), c = [vt, kt].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !o)) {
    var d = SI(r.padding, n), f = Bc(i), p = l === "y" ? pt : vt, h = l === "y" ? Tt : kt, y = n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u], w = o[l] - n.rects.reference[l], m = Si(i), _ = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, k = y / 2 - w / 2, x = d[p], D = _ - f[u] - d[h], A = _ / 2 - f[u] / 2 + k, L = Zr(x, A, D), $ = l;
    n.modifiersData[a] = (t = {}, t[$] = L, t.centerOffset = L - A, t);
  }
}
function TI(e) {
  var t = e.state, n = e.options, a = n.element, r = a === void 0 ? "[data-popper-arrow]" : a;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !rg(t.elements.popper, r) || (t.elements.arrow = r));
}
const lg = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: CI,
  effect: TI,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function vr(e) {
  return e.split("-")[1];
}
var kI = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xI(e) {
  var t = e.x, n = e.y, a = window, r = a.devicePixelRatio || 1;
  return {
    x: fr(t * r) / r || 0,
    y: fr(n * r) / r || 0
  };
}
function hp(e) {
  var t, n = e.popper, a = e.popperRect, r = e.placement, i = e.variation, o = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, h = o.y, y = h === void 0 ? 0 : h, w = typeof u == "function" ? u({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = w.x, y = w.y;
  var m = o.hasOwnProperty("x"), _ = o.hasOwnProperty("y"), k = vt, x = pt, D = window;
  if (c) {
    var A = Si(n), L = "clientHeight", $ = "clientWidth";
    if (A === Nt(n) && (A = Yn(n), _n(A).position !== "static" && s === "absolute" && (L = "scrollHeight", $ = "scrollWidth")), A = A, r === pt || (r === vt || r === kt) && i === dr) {
      x = Tt;
      var O = d && A === D && D.visualViewport ? D.visualViewport.height : A[L];
      y -= O - a.height, y *= l ? 1 : -1;
    }
    if (r === vt || (r === pt || r === Tt) && i === dr) {
      k = kt;
      var j = d && A === D && D.visualViewport ? D.visualViewport.width : A[$];
      p -= j - a.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && kI), Q = u === !0 ? xI({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  if (p = Q.x, y = Q.y, l) {
    var re;
    return Object.assign({}, X, (re = {}, re[x] = _ ? "0" : "", re[k] = m ? "0" : "", re.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", re));
  }
  return Object.assign({}, X, (t = {}, t[x] = _ ? y + "px" : "", t[k] = m ? p + "px" : "", t.transform = "", t));
}
function DI(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, r = a === void 0 ? !0 : a, i = n.adaptive, o = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Qt(t.placement),
    variation: vr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, hp(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, hp(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Lc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: DI,
  data: {}
};
var Xi = {
  passive: !0
};
function AI(e) {
  var t = e.state, n = e.instance, a = e.options, r = a.scroll, i = r === void 0 ? !0 : r, o = a.resize, s = o === void 0 ? !0 : o, l = Nt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Xi);
  }), s && l.addEventListener("resize", n.update, Xi), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Xi);
    }), s && l.removeEventListener("resize", n.update, Xi);
  };
}
const Fc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: AI,
  data: {}
};
var RI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return RI[t];
  });
}
var II = {
  start: "end",
  end: "start"
};
function mp(e) {
  return e.replace(/start|end/g, function(t) {
    return II[t];
  });
}
function Hc(e) {
  var t = Nt(e), n = t.pageXOffset, a = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function zc(e) {
  return pr(Yn(e)).left + Hc(e).scrollLeft;
}
function OI(e, t) {
  var n = Nt(e), a = Yn(e), r = n.visualViewport, i = a.clientWidth, o = a.clientHeight, s = 0, l = 0;
  if (r) {
    i = r.width, o = r.height;
    var c = ag();
    (c || !c && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: s + zc(e),
    y: l
  };
}
function $I(e) {
  var t, n = Yn(e), a = Hc(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = fa(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), o = fa(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -a.scrollLeft + zc(e), l = -a.scrollTop;
  return _n(r || n).direction === "rtl" && (s += fa(n.clientWidth, r ? r.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: s,
    y: l
  };
}
function Uc(e) {
  var t = _n(e), n = t.overflow, a = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + a);
}
function ug(e) {
  return ["html", "body", "#document"].indexOf(en(e)) >= 0 ? e.ownerDocument.body : Rt(e) && Uc(e) ? e : ug(Ms(e));
}
function Qr(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = ug(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Nt(a), o = r ? [i].concat(i.visualViewport || [], Uc(a) ? a : []) : a, s = t.concat(o);
  return r ? s : s.concat(Qr(Ms(o)));
}
function Iu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function NI(e, t) {
  var n = pr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gp(e, t, n) {
  return t === $c ? Iu(OI(e, n)) : _a(t) ? NI(t, n) : Iu($I(Yn(e)));
}
function MI(e) {
  var t = Qr(Ms(e)), n = ["absolute", "fixed"].indexOf(_n(e).position) >= 0, a = n && Rt(e) ? Si(e) : e;
  return _a(a) ? t.filter(function(r) {
    return _a(r) && rg(r, a) && en(r) !== "body";
  }) : [];
}
function PI(e, t, n, a) {
  var r = t === "clippingParents" ? MI(e) : [].concat(t), i = [].concat(r, [n]), o = i[0], s = i.reduce(function(l, c) {
    var u = gp(e, c, a);
    return l.top = fa(u.top, l.top), l.right = Xo(u.right, l.right), l.bottom = Xo(u.bottom, l.bottom), l.left = fa(u.left, l.left), l;
  }, gp(e, o, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function cg(e) {
  var t = e.reference, n = e.element, a = e.placement, r = a ? Qt(a) : null, i = a ? vr(a) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case pt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Tt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case kt:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case vt:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = r ? Vc(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case ba:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case dr:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function hr(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = a === void 0 ? e.placement : a, i = n.strategy, o = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? Wm : s, c = n.rootBoundary, u = c === void 0 ? $c : c, d = n.elementContext, f = d === void 0 ? La : d, p = n.altBoundary, h = p === void 0 ? !1 : p, y = n.padding, w = y === void 0 ? 0 : y, m = og(typeof w != "number" ? w : sg(w, Cr)), _ = f === La ? qm : La, k = e.rects.popper, x = e.elements[h ? _ : f], D = PI(_a(x) ? x : x.contextElement || Yn(e.elements.popper), l, u, o), A = pr(e.elements.reference), L = cg({
    reference: A,
    element: k,
    strategy: "absolute",
    placement: r
  }), $ = Iu(Object.assign({}, k, L)), O = f === La ? $ : A, j = {
    top: D.top - O.top + m.top,
    bottom: O.bottom - D.bottom + m.bottom,
    left: D.left - O.left + m.left,
    right: O.right - D.right + m.right
  }, X = e.modifiersData.offset;
  if (f === La && X) {
    var Q = X[r];
    Object.keys(j).forEach(function(re) {
      var J = [kt, Tt].indexOf(re) >= 0 ? 1 : -1, Ce = [pt, Tt].indexOf(re) >= 0 ? "y" : "x";
      j[re] += Q[Ce] * J;
    });
  }
  return j;
}
function BI(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = n.boundary, i = n.rootBoundary, o = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Nc : l, u = vr(a), d = u ? s ? Au : Au.filter(function(h) {
    return vr(h) === u;
  }) : Cr, f = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(h, y) {
    return h[y] = hr(e, {
      placement: y,
      boundary: r,
      rootBoundary: i,
      padding: o
    })[Qt(y)], h;
  }, {});
  return Object.keys(p).sort(function(h, y) {
    return p[h] - p[y];
  });
}
function VI(e) {
  if (Qt(e) === Ns)
    return [];
  var t = yo(e);
  return [mp(e), t, mp(t)];
}
function LI(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, o = n.altAxis, s = o === void 0 ? !0 : o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, y = n.allowedAutoPlacements, w = t.options.placement, m = Qt(w), _ = m === w, k = l || (_ || !h ? [yo(w)] : VI(w)), x = [w].concat(k).reduce(function(xe, M) {
      return xe.concat(Qt(M) === Ns ? BI(t, {
        placement: M,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : M);
    }, []), D = t.rects.reference, A = t.rects.popper, L = /* @__PURE__ */ new Map(), $ = !0, O = x[0], j = 0; j < x.length; j++) {
      var X = x[j], Q = Qt(X), re = vr(X) === ba, J = [pt, Tt].indexOf(Q) >= 0, Ce = J ? "width" : "height", ue = hr(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), ie = J ? re ? kt : vt : re ? Tt : pt;
      D[Ce] > A[Ce] && (ie = yo(ie));
      var Re = yo(ie), Ee = [];
      if (i && Ee.push(ue[Q] <= 0), s && Ee.push(ue[ie] <= 0, ue[Re] <= 0), Ee.every(function(xe) {
        return xe;
      })) {
        O = X, $ = !1;
        break;
      }
      L.set(X, Ee);
    }
    if ($)
      for (var Ie = h ? 3 : 1, qe = function(M) {
        var q = x.find(function(K) {
          var ne = L.get(K);
          if (ne)
            return ne.slice(0, M).every(function(Ae) {
              return Ae;
            });
        });
        if (q)
          return O = q, "break";
      }, it = Ie; it > 0; it--) {
        var se = qe(it);
        if (se === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[a]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const dg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: LI,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function yp(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function bp(e) {
  return [pt, kt, Tt, vt].some(function(t) {
    return e[t] >= 0;
  });
}
function FI(e) {
  var t = e.state, n = e.name, a = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, o = hr(t, {
    elementContext: "reference"
  }), s = hr(t, {
    altBoundary: !0
  }), l = yp(o, a), c = yp(s, r, i), u = bp(l), d = bp(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const fg = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: FI
};
function HI(e, t, n) {
  var a = Qt(e), r = [vt, pt].indexOf(a) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = i[0], s = i[1];
  return o = o || 0, s = (s || 0) * r, [vt, kt].indexOf(a) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function zI(e) {
  var t = e.state, n = e.options, a = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, o = Nc.reduce(function(u, d) {
    return u[d] = HI(d, t.rects, i), u;
  }, {}), s = o[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[a] = o;
}
const pg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: zI
};
function UI(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = cg({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const jc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: UI,
  data: {}
};
function jI(e) {
  return e === "x" ? "y" : "x";
}
function WI(e) {
  var t = e.state, n = e.options, a = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, o = n.altAxis, s = o === void 0 ? !1 : o, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, h = n.tetherOffset, y = h === void 0 ? 0 : h, w = hr(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), m = Qt(t.placement), _ = vr(t.placement), k = !_, x = Vc(m), D = jI(x), A = t.modifiersData.popperOffsets, L = t.rects.reference, $ = t.rects.popper, O = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, j = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = {
    x: 0,
    y: 0
  };
  if (!!A) {
    if (i) {
      var re, J = x === "y" ? pt : vt, Ce = x === "y" ? Tt : kt, ue = x === "y" ? "height" : "width", ie = A[x], Re = ie + w[J], Ee = ie - w[Ce], Ie = p ? -$[ue] / 2 : 0, qe = _ === ba ? L[ue] : $[ue], it = _ === ba ? -$[ue] : -L[ue], se = t.elements.arrow, xe = p && se ? Bc(se) : {
        width: 0,
        height: 0
      }, M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ig(), q = M[J], K = M[Ce], ne = Zr(0, L[ue], xe[ue]), Ae = k ? L[ue] / 2 - Ie - ne - q - j.mainAxis : qe - ne - q - j.mainAxis, We = k ? -L[ue] / 2 + Ie + ne + K + j.mainAxis : it + ne + K + j.mainAxis, we = t.elements.arrow && Si(t.elements.arrow), be = we ? x === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, Fe = (re = X == null ? void 0 : X[x]) != null ? re : 0, tn = ie + Ae - Fe - be, rt = ie + We - Fe, Di = Zr(p ? Xo(Re, tn) : Re, ie, p ? fa(Ee, rt) : Ee);
      A[x] = Di, Q[x] = Di - ie;
    }
    if (s) {
      var Ai, Uy = x === "x" ? pt : vt, jy = x === "x" ? Tt : kt, Qn = A[D], Ri = D === "y" ? "height" : "width", td = Qn + w[Uy], nd = Qn - w[jy], Ws = [pt, vt].indexOf(m) !== -1, ad = (Ai = X == null ? void 0 : X[D]) != null ? Ai : 0, rd = Ws ? td : Qn - L[Ri] - $[Ri] - ad + j.altAxis, id = Ws ? Qn + L[Ri] + $[Ri] - ad - j.altAxis : nd, od = p && Ws ? wI(rd, Qn, id) : Zr(p ? rd : td, Qn, p ? id : nd);
      A[D] = od, Q[D] = od - Qn;
    }
    t.modifiersData[a] = Q;
  }
}
const vg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: WI,
  requiresIfExists: ["offset"]
};
function qI(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function GI(e) {
  return e === Nt(e) || !Rt(e) ? Hc(e) : qI(e);
}
function YI(e) {
  var t = e.getBoundingClientRect(), n = fr(t.width) / e.offsetWidth || 1, a = fr(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function KI(e, t, n) {
  n === void 0 && (n = !1);
  var a = Rt(t), r = Rt(t) && YI(t), i = Yn(t), o = pr(e, r, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((en(t) !== "body" || Uc(i)) && (s = GI(t)), Rt(t) ? (l = pr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = zc(i))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function XI(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), a;
}
function ZI(e) {
  var t = XI(e);
  return ng.reduce(function(n, a) {
    return n.concat(t.filter(function(r) {
      return r.phase === a;
    }));
  }, []);
}
function QI(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function JI(e) {
  var t = e.reduce(function(n, a) {
    var r = n[a.name];
    return n[a.name] = r ? Object.assign({}, r, a, {
      options: Object.assign({}, r.options, a.options),
      data: Object.assign({}, r.data, a.data)
    }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var _p = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ep() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ps(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? _p : r;
  return function(s, l, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _p, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(m) {
        var _ = typeof m == "function" ? m(u.options) : m;
        y(), u.options = Object.assign({}, i, u.options, _), u.scrollParents = {
          reference: _a(s) ? Qr(s) : s.contextElement ? Qr(s.contextElement) : [],
          popper: Qr(l)
        };
        var k = ZI(JI([].concat(a, u.options.modifiers)));
        return u.orderedModifiers = k.filter(function(x) {
          return x.enabled;
        }), h(), p.update();
      },
      forceUpdate: function() {
        if (!f) {
          var m = u.elements, _ = m.reference, k = m.popper;
          if (!!Ep(_, k)) {
            u.rects = {
              reference: KI(_, Si(k), u.options.strategy === "fixed"),
              popper: Bc(k)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var x = 0; x < u.orderedModifiers.length; x++) {
              if (u.reset === !0) {
                u.reset = !1, x = -1;
                continue;
              }
              var D = u.orderedModifiers[x], A = D.fn, L = D.options, $ = L === void 0 ? {} : L, O = D.name;
              typeof A == "function" && (u = A({
                state: u,
                options: $,
                name: O,
                instance: p
              }) || u);
            }
          }
        }
      },
      update: QI(function() {
        return new Promise(function(w) {
          p.forceUpdate(), w(u);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Ep(s, l))
      return p;
    p.setOptions(c).then(function(w) {
      !f && c.onFirstUpdate && c.onFirstUpdate(w);
    });
    function h() {
      u.orderedModifiers.forEach(function(w) {
        var m = w.name, _ = w.options, k = _ === void 0 ? {} : _, x = w.effect;
        if (typeof x == "function") {
          var D = x({
            state: u,
            name: m,
            instance: p,
            options: k
          }), A = function() {
          };
          d.push(D || A);
        }
      });
    }
    function y() {
      d.forEach(function(w) {
        return w();
      }), d = [];
    }
    return p;
  };
}
var eO = /* @__PURE__ */ Ps(), tO = [Fc, jc, Lc, Pc], nO = /* @__PURE__ */ Ps({
  defaultModifiers: tO
}), aO = [Fc, jc, Lc, Pc, pg, dg, vg, lg, fg], Wc = /* @__PURE__ */ Ps({
  defaultModifiers: aO
});
const hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperGenerator: Ps,
  detectOverflow: hr,
  createPopperBase: eO,
  createPopper: Wc,
  createPopperLite: nO,
  top: pt,
  bottom: Tt,
  right: kt,
  left: vt,
  auto: Ns,
  basePlacements: Cr,
  start: ba,
  end: dr,
  clippingParents: Wm,
  viewport: $c,
  popper: La,
  reference: qm,
  variationPlacements: Au,
  placements: Nc,
  beforeRead: Gm,
  read: Ym,
  afterRead: Km,
  beforeMain: Xm,
  main: Zm,
  afterMain: Qm,
  beforeWrite: Jm,
  write: eg,
  afterWrite: tg,
  modifierPhases: ng,
  applyStyles: Pc,
  arrow: lg,
  computeStyles: Lc,
  eventListeners: Fc,
  flip: dg,
  hide: fg,
  offset: pg,
  popperOffsets: jc,
  preventOverflow: vg
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const rO = 1e6, iO = 1e3, Ou = "transitionend", oO = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), sO = (e) => {
  do
    e += Math.floor(Math.random() * rO);
  while (document.getElementById(e));
  return e;
}, mg = (e) => {
  let t = e.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith("."))
      return null;
    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
  }
  return t;
}, gg = (e) => {
  const t = mg(e);
  return t && document.querySelector(t) ? t : null;
}, cn = (e) => {
  const t = mg(e);
  return t ? document.querySelector(t) : null;
}, lO = (e) => {
  if (!e)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: n
  } = window.getComputedStyle(e);
  const a = Number.parseFloat(t), r = Number.parseFloat(n);
  return !a && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * iO);
}, yg = (e) => {
  e.dispatchEvent(new Event(Ou));
}, dn = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), Un = (e) => dn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, Tr = (e) => {
  if (!dn(e) || e.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
  if (!n)
    return t;
  if (n !== e) {
    const a = e.closest("summary");
    if (a && a.parentNode !== n || a === null)
      return !1;
  }
  return t;
}, jn = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", bg = (e) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof e.getRootNode == "function") {
    const t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return e instanceof ShadowRoot ? e : e.parentNode ? bg(e.parentNode) : null;
}, Zo = () => {
}, Ci = (e) => {
  e.offsetHeight;
}, _g = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, xl = [], uO = (e) => {
  document.readyState === "loading" ? (xl.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of xl)
      t();
  }), xl.push(e)) : e();
}, Ot = () => document.documentElement.dir === "rtl", Mt = (e) => {
  uO(() => {
    const t = _g();
    if (t) {
      const n = e.NAME, a = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = a, e.jQueryInterface);
    }
  });
}, rn = (e) => {
  typeof e == "function" && e();
}, Eg = (e, t, n = !0) => {
  if (!n) {
    rn(e);
    return;
  }
  const a = 5, r = lO(t) + a;
  let i = !1;
  const o = ({
    target: s
  }) => {
    s === t && (i = !0, t.removeEventListener(Ou, o), rn(e));
  };
  t.addEventListener(Ou, o), setTimeout(() => {
    i || yg(t);
  }, r);
}, qc = (e, t, n, a) => {
  const r = e.length;
  let i = e.indexOf(t);
  return i === -1 ? !n && a ? e[r - 1] : e[0] : (i += n ? 1 : -1, a && (i = (i + r) % r), e[Math.max(0, Math.min(i, r - 1))]);
}, cO = /[^.]*(?=\..*)\.|.*/, dO = /\..*/, fO = /::\d+$/, Dl = {};
let wp = 1;
const wg = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, pO = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Sg(e, t) {
  return t && `${t}::${wp++}` || e.uidEvent || wp++;
}
function Cg(e) {
  const t = Sg(e);
  return e.uidEvent = t, Dl[t] = Dl[t] || {}, Dl[t];
}
function vO(e, t) {
  return function n(a) {
    return Gc(a, {
      delegateTarget: e
    }), n.oneOff && U.off(e, a.type, t), t.apply(e, [a]);
  };
}
function hO(e, t, n) {
  return function a(r) {
    const i = e.querySelectorAll(t);
    for (let {
      target: o
    } = r; o && o !== this; o = o.parentNode)
      for (const s of i)
        if (s === o)
          return Gc(r, {
            delegateTarget: o
          }), a.oneOff && U.off(e, r.type, t, n), n.apply(o, [r]);
  };
}
function Tg(e, t, n = null) {
  return Object.values(e).find((a) => a.callable === t && a.delegationSelector === n);
}
function kg(e, t, n) {
  const a = typeof t == "string", r = a ? n : t || n;
  let i = xg(e);
  return pO.has(i) || (i = e), [a, r, i];
}
function Sp(e, t, n, a, r) {
  if (typeof t != "string" || !e)
    return;
  let [i, o, s] = kg(t, n, a);
  t in wg && (o = ((h) => function(y) {
    if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
      return h.call(this, y);
  })(o));
  const l = Cg(e), c = l[s] || (l[s] = {}), u = Tg(c, o, i ? n : null);
  if (u) {
    u.oneOff = u.oneOff && r;
    return;
  }
  const d = Sg(o, t.replace(cO, "")), f = i ? hO(e, n, o) : vO(e, o);
  f.delegationSelector = i ? n : null, f.callable = o, f.oneOff = r, f.uidEvent = d, c[d] = f, e.addEventListener(s, f, i);
}
function $u(e, t, n, a, r) {
  const i = Tg(t[n], a, r);
  !i || (e.removeEventListener(n, i, Boolean(r)), delete t[n][i.uidEvent]);
}
function mO(e, t, n, a) {
  const r = t[n] || {};
  for (const i of Object.keys(r))
    if (i.includes(a)) {
      const o = r[i];
      $u(e, t, n, o.callable, o.delegationSelector);
    }
}
function xg(e) {
  return e = e.replace(dO, ""), wg[e] || e;
}
const U = {
  on(e, t, n, a) {
    Sp(e, t, n, a, !1);
  },
  one(e, t, n, a) {
    Sp(e, t, n, a, !0);
  },
  off(e, t, n, a) {
    if (typeof t != "string" || !e)
      return;
    const [r, i, o] = kg(t, n, a), s = o !== t, l = Cg(e), c = l[o] || {}, u = t.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(c).length)
        return;
      $u(e, l, o, i, r ? n : null);
      return;
    }
    if (u)
      for (const d of Object.keys(l))
        mO(e, l, d, t.slice(1));
    for (const d of Object.keys(c)) {
      const f = d.replace(fO, "");
      if (!s || t.includes(f)) {
        const p = c[d];
        $u(e, l, o, p.callable, p.delegationSelector);
      }
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e)
      return null;
    const a = _g(), r = xg(t), i = t !== r;
    let o = null, s = !0, l = !0, c = !1;
    i && a && (o = a.Event(t, n), a(e).trigger(o), s = !o.isPropagationStopped(), l = !o.isImmediatePropagationStopped(), c = o.isDefaultPrevented());
    let u = new Event(t, {
      bubbles: s,
      cancelable: !0
    });
    return u = Gc(u, n), c && u.preventDefault(), l && e.dispatchEvent(u), u.defaultPrevented && o && o.preventDefault(), u;
  }
};
function Gc(e, t) {
  for (const [n, a] of Object.entries(t || {}))
    try {
      e[n] = a;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return a;
        }
      });
    }
  return e;
}
const Rn = /* @__PURE__ */ new Map(), Al = {
  set(e, t, n) {
    Rn.has(e) || Rn.set(e, /* @__PURE__ */ new Map());
    const a = Rn.get(e);
    if (!a.has(t) && a.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);
      return;
    }
    a.set(t, n);
  },
  get(e, t) {
    return Rn.has(e) && Rn.get(e).get(t) || null;
  },
  remove(e, t) {
    if (!Rn.has(e))
      return;
    const n = Rn.get(e);
    n.delete(t), n.size === 0 && Rn.delete(e);
  }
};
function Cp(e) {
  if (e === "true")
    return !0;
  if (e === "false")
    return !1;
  if (e === Number(e).toString())
    return Number(e);
  if (e === "" || e === "null")
    return null;
  if (typeof e != "string")
    return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Rl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const fn = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Rl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Rl(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {}, n = Object.keys(e.dataset).filter((a) => a.startsWith("bs") && !a.startsWith("bsConfig"));
    for (const a of n) {
      let r = a.replace(/^bs/, "");
      r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = Cp(e.dataset[a]);
    }
    return t;
  },
  getDataAttribute(e, t) {
    return Cp(e.getAttribute(`data-bs-${Rl(t)}`));
  }
};
class Ti {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const a = dn(n) ? fn.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof a == "object" ? a : {},
      ...dn(n) ? fn.getDataAttributes(n) : {},
      ...typeof t == "object" ? t : {}
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const a of Object.keys(n)) {
      const r = n[a], i = t[a], o = dn(i) ? "element" : oO(i);
      if (!new RegExp(r).test(o))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${a}" provided type "${o}" but expected type "${r}".`);
    }
  }
}
const gO = "5.2.2";
class jt extends Ti {
  constructor(t, n) {
    super(), t = Un(t), t && (this._element = t, this._config = this._getConfig(n), Al.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Al.remove(this._element, this.constructor.DATA_KEY), U.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, n, a = !0) {
    Eg(t, n, a);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  static getInstance(t) {
    return Al.get(Un(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return gO;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Bs = (e, t = "hide") => {
  const n = `click.dismiss${e.EVENT_KEY}`, a = e.NAME;
  U.on(document, n, `[data-bs-dismiss="${a}"]`, function(r) {
    if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), jn(this))
      return;
    const i = cn(this) || this.closest(`.${a}`);
    e.getOrCreateInstance(i)[t]();
  });
}, yO = "alert", bO = "bs.alert", Dg = `.${bO}`, _O = `close${Dg}`, EO = `closed${Dg}`, wO = "fade", SO = "show";
class ki extends jt {
  static get NAME() {
    return yO;
  }
  close() {
    if (U.trigger(this._element, _O).defaultPrevented)
      return;
    this._element.classList.remove(SO);
    const n = this._element.classList.contains(wO);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), U.trigger(this._element, EO), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = ki.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Bs(ki, "close");
Mt(ki);
const CO = "button", TO = "bs.button", kO = `.${TO}`, xO = ".data-api", DO = "active", Tp = '[data-bs-toggle="button"]', AO = `click${kO}${xO}`;
class Vs extends jt {
  static get NAME() {
    return CO;
  }
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(DO));
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Vs.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
U.on(document, AO, Tp, (e) => {
  e.preventDefault();
  const t = e.target.closest(Tp);
  Vs.getOrCreateInstance(t).toggle();
});
Mt(Vs);
const Se = {
  find(e, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, e));
  },
  findOne(e, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, e);
  },
  children(e, t) {
    return [].concat(...e.children).filter((n) => n.matches(t));
  },
  parents(e, t) {
    const n = [];
    let a = e.parentNode.closest(t);
    for (; a; )
      n.push(a), a = a.parentNode.closest(t);
    return n;
  },
  prev(e, t) {
    let n = e.previousElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.previousElementSibling;
    }
    return [];
  },
  next(e, t) {
    let n = e.nextElementSibling;
    for (; n; ) {
      if (n.matches(t))
        return [n];
      n = n.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((n) => `${n}:not([tabindex^="-"])`).join(",");
    return this.find(t, e).filter((n) => !jn(n) && Tr(n));
  }
}, RO = "swipe", kr = ".bs.swipe", IO = `touchstart${kr}`, OO = `touchmove${kr}`, $O = `touchend${kr}`, NO = `pointerdown${kr}`, MO = `pointerup${kr}`, PO = "touch", BO = "pen", VO = "pointer-event", LO = 40, FO = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, HO = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Qo extends Ti {
  constructor(t, n) {
    super(), this._element = t, !(!t || !Qo.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
  }
  static get Default() {
    return FO;
  }
  static get DefaultType() {
    return HO;
  }
  static get NAME() {
    return RO;
  }
  dispose() {
    U.off(this._element, kr);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), rn(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= LO)
      return;
    const n = t / this._deltaX;
    this._deltaX = 0, n && rn(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (U.on(this._element, NO, (t) => this._start(t)), U.on(this._element, MO, (t) => this._end(t)), this._element.classList.add(VO)) : (U.on(this._element, IO, (t) => this._start(t)), U.on(this._element, OO, (t) => this._move(t)), U.on(this._element, $O, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === BO || t.pointerType === PO);
  }
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const zO = "carousel", UO = "bs.carousel", Kn = `.${UO}`, Ag = ".data-api", jO = "ArrowLeft", WO = "ArrowRight", qO = 500, Ar = "next", $a = "prev", Fa = "left", bo = "right", GO = `slide${Kn}`, Il = `slid${Kn}`, YO = `keydown${Kn}`, KO = `mouseenter${Kn}`, XO = `mouseleave${Kn}`, ZO = `dragstart${Kn}`, QO = `load${Kn}${Ag}`, JO = `click${Kn}${Ag}`, Rg = "carousel", Zi = "active", e$ = "slide", t$ = "carousel-item-end", n$ = "carousel-item-start", a$ = "carousel-item-next", r$ = "carousel-item-prev", Ig = ".active", Og = ".carousel-item", i$ = Ig + Og, o$ = ".carousel-item img", s$ = ".carousel-indicators", l$ = "[data-bs-slide], [data-bs-slide-to]", u$ = '[data-bs-ride="carousel"]', c$ = {
  [jO]: bo,
  [WO]: Fa
}, d$ = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, f$ = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class xr extends jt {
  constructor(t, n) {
    super(t, n), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Se.findOne(s$, this._element), this._addEventListeners(), this._config.ride === Rg && this.cycle();
  }
  static get Default() {
    return d$;
  }
  static get DefaultType() {
    return f$;
  }
  static get NAME() {
    return zO;
  }
  next() {
    this._slide(Ar);
  }
  nextWhenVisible() {
    !document.hidden && Tr(this._element) && this.next();
  }
  prev() {
    this._slide($a);
  }
  pause() {
    this._isSliding && yg(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!!this._config.ride) {
      if (this._isSliding) {
        U.one(this._element, Il, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      U.one(this._element, Il, () => this.to(t));
      return;
    }
    const a = this._getItemIndex(this._getActive());
    if (a === t)
      return;
    const r = t > a ? Ar : $a;
    this._slide(r, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && U.on(this._element, YO, (t) => this._keydown(t)), this._config.pause === "hover" && (U.on(this._element, KO, () => this.pause()), U.on(this._element, XO, () => this._maybeEnableCycle())), this._config.touch && Qo.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const a of Se.find(o$, this._element))
      U.on(a, ZO, (r) => r.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(Fa)),
      rightCallback: () => this._slide(this._directionToOrder(bo)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), qO + this._config.interval));
      }
    };
    this._swipeHelper = new Qo(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const n = c$[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const n = Se.findOne(Ig, this._indicatorsElement);
    n.classList.remove(Zi), n.removeAttribute("aria-current");
    const a = Se.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    a && (a.classList.add(Zi), a.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding)
      return;
    const a = this._getActive(), r = t === Ar, i = n || qc(this._getItems(), a, r, this._config.wrap);
    if (i === a)
      return;
    const o = this._getItemIndex(i), s = (p) => U.trigger(this._element, p, {
      relatedTarget: i,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(a),
      to: o
    });
    if (s(GO).defaultPrevented || !a || !i)
      return;
    const c = Boolean(this._interval);
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = i;
    const u = r ? n$ : t$, d = r ? a$ : r$;
    i.classList.add(d), Ci(i), a.classList.add(u), i.classList.add(u);
    const f = () => {
      i.classList.remove(u, d), i.classList.add(Zi), a.classList.remove(Zi, d, u), this._isSliding = !1, s(Il);
    };
    this._queueCallback(f, a, this._isAnimated()), c && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(e$);
  }
  _getActive() {
    return Se.findOne(i$, this._element);
  }
  _getItems() {
    return Se.find(Og, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return Ot() ? t === Fa ? $a : Ar : t === Fa ? Ar : $a;
  }
  _orderToDirection(t) {
    return Ot() ? t === $a ? Fa : bo : t === $a ? bo : Fa;
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = xr.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(document, JO, l$, function(e) {
  const t = cn(this);
  if (!t || !t.classList.contains(Rg))
    return;
  e.preventDefault();
  const n = xr.getOrCreateInstance(t), a = this.getAttribute("data-bs-slide-to");
  if (a) {
    n.to(a), n._maybeEnableCycle();
    return;
  }
  if (fn.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
U.on(window, QO, () => {
  const e = Se.find(u$);
  for (const t of e)
    xr.getOrCreateInstance(t);
});
Mt(xr);
const p$ = "collapse", v$ = "bs.collapse", xi = `.${v$}`, h$ = ".data-api", m$ = `show${xi}`, g$ = `shown${xi}`, y$ = `hide${xi}`, b$ = `hidden${xi}`, _$ = `click${xi}${h$}`, Ol = "show", qa = "collapse", Qi = "collapsing", E$ = "collapsed", w$ = `:scope .${qa} .${qa}`, S$ = "collapse-horizontal", C$ = "width", T$ = "height", k$ = ".collapse.show, .collapse.collapsing", Nu = '[data-bs-toggle="collapse"]', x$ = {
  parent: null,
  toggle: !0
}, D$ = {
  parent: "(null|element)",
  toggle: "boolean"
};
class mr extends jt {
  constructor(t, n) {
    super(t, n), this._isTransitioning = !1, this._triggerArray = [];
    const a = Se.find(Nu);
    for (const r of a) {
      const i = gg(r), o = Se.find(i).filter((s) => s === this._element);
      i !== null && o.length && this._triggerArray.push(r);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  static get Default() {
    return x$;
  }
  static get DefaultType() {
    return D$;
  }
  static get NAME() {
    return p$;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(k$).filter((s) => s !== this._element).map((s) => mr.getOrCreateInstance(s, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || U.trigger(this._element, m$).defaultPrevented)
      return;
    for (const s of t)
      s.hide();
    const a = this._getDimension();
    this._element.classList.remove(qa), this._element.classList.add(Qi), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const r = () => {
      this._isTransitioning = !1, this._element.classList.remove(Qi), this._element.classList.add(qa, Ol), this._element.style[a] = "", U.trigger(this._element, g$);
    }, o = `scroll${a[0].toUpperCase() + a.slice(1)}`;
    this._queueCallback(r, this._element, !0), this._element.style[a] = `${this._element[o]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || U.trigger(this._element, y$).defaultPrevented)
      return;
    const n = this._getDimension();
    this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`, Ci(this._element), this._element.classList.add(Qi), this._element.classList.remove(qa, Ol);
    for (const r of this._triggerArray) {
      const i = cn(r);
      i && !this._isShown(i) && this._addAriaAndCollapsedClass([r], !1);
    }
    this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, this._element.classList.remove(Qi), this._element.classList.add(qa), U.trigger(this._element, b$);
    };
    this._element.style[n] = "", this._queueCallback(a, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Ol);
  }
  _configAfterMerge(t) {
    return t.toggle = Boolean(t.toggle), t.parent = Un(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(S$) ? C$ : T$;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(Nu);
    for (const n of t) {
      const a = cn(n);
      a && this._addAriaAndCollapsedClass([n], this._isShown(a));
    }
  }
  _getFirstLevelChildren(t) {
    const n = Se.find(w$, this._config.parent);
    return Se.find(t, this._config.parent).filter((a) => !n.includes(a));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (!!t.length)
      for (const a of t)
        a.classList.toggle(E$, !n), a.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
      const a = mr.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof a[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        a[t]();
      }
    });
  }
}
U.on(document, _$, Nu, function(e) {
  (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
  const t = gg(this), n = Se.find(t);
  for (const a of n)
    mr.getOrCreateInstance(a, {
      toggle: !1
    }).toggle();
});
Mt(mr);
const kp = "dropdown", A$ = "bs.dropdown", ka = `.${A$}`, Yc = ".data-api", R$ = "Escape", xp = "Tab", I$ = "ArrowUp", Dp = "ArrowDown", O$ = 2, $$ = `hide${ka}`, N$ = `hidden${ka}`, M$ = `show${ka}`, P$ = `shown${ka}`, $g = `click${ka}${Yc}`, Ng = `keydown${ka}${Yc}`, B$ = `keyup${ka}${Yc}`, Ha = "show", V$ = "dropup", L$ = "dropend", F$ = "dropstart", H$ = "dropup-center", z$ = "dropdown-center", ua = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', U$ = `${ua}.${Ha}`, _o = ".dropdown-menu", j$ = ".navbar", W$ = ".navbar-nav", q$ = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", G$ = Ot() ? "top-end" : "top-start", Y$ = Ot() ? "top-start" : "top-end", K$ = Ot() ? "bottom-end" : "bottom-start", X$ = Ot() ? "bottom-start" : "bottom-end", Z$ = Ot() ? "left-start" : "right-start", Q$ = Ot() ? "right-start" : "left-start", J$ = "top", eN = "bottom", tN = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, nN = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Ft extends jt {
  constructor(t, n) {
    super(t, n), this._popper = null, this._parent = this._element.parentNode, this._menu = Se.next(this._element, _o)[0] || Se.prev(this._element, _o)[0] || Se.findOne(_o, this._parent), this._inNavbar = this._detectNavbar();
  }
  static get Default() {
    return tN;
  }
  static get DefaultType() {
    return nN;
  }
  static get NAME() {
    return kp;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (jn(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!U.trigger(this._element, M$, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(W$))
        for (const a of [].concat(...document.body.children))
          U.on(a, "mouseover", Zo);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ha), this._element.classList.add(Ha), U.trigger(this._element, P$, t);
    }
  }
  hide() {
    if (jn(this._element) || !this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!U.trigger(this._element, $$, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const a of [].concat(...document.body.children))
          U.off(a, "mouseover", Zo);
      this._popper && this._popper.destroy(), this._menu.classList.remove(Ha), this._element.classList.remove(Ha), this._element.setAttribute("aria-expanded", "false"), fn.removeDataAttribute(this._menu, "popper"), U.trigger(this._element, N$, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !dn(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${kp.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof hg > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : dn(this._config.reference) ? t = Un(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Wc(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Ha);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(L$))
      return Z$;
    if (t.classList.contains(F$))
      return Q$;
    if (t.classList.contains(H$))
      return J$;
    if (t.classList.contains(z$))
      return eN;
    const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(V$) ? n ? Y$ : G$ : n ? X$ : K$;
  }
  _detectNavbar() {
    return this._element.closest(j$) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (fn.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...t,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig
    };
  }
  _selectMenuItem({
    key: t,
    target: n
  }) {
    const a = Se.find(q$, this._menu).filter((r) => Tr(r));
    !a.length || qc(a, n, t === Dp, !a.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ft.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === O$ || t.type === "keyup" && t.key !== xp)
      return;
    const n = Se.find(U$);
    for (const a of n) {
      const r = Ft.getInstance(a);
      if (!r || r._config.autoClose === !1)
        continue;
      const i = t.composedPath(), o = i.includes(r._menu);
      if (i.includes(r._element) || r._config.autoClose === "inside" && !o || r._config.autoClose === "outside" && o || r._menu.contains(t.target) && (t.type === "keyup" && t.key === xp || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const s = {
        relatedTarget: r._element
      };
      t.type === "click" && (s.clickEvent = t), r._completeHide(s);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName), a = t.key === R$, r = [I$, Dp].includes(t.key);
    if (!r && !a || n && !a)
      return;
    t.preventDefault();
    const i = this.matches(ua) ? this : Se.prev(this, ua)[0] || Se.next(this, ua)[0] || Se.findOne(ua, t.delegateTarget.parentNode), o = Ft.getOrCreateInstance(i);
    if (r) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), i.focus());
  }
}
U.on(document, Ng, ua, Ft.dataApiKeydownHandler);
U.on(document, Ng, _o, Ft.dataApiKeydownHandler);
U.on(document, $g, Ft.clearMenus);
U.on(document, B$, Ft.clearMenus);
U.on(document, $g, ua, function(e) {
  e.preventDefault(), Ft.getOrCreateInstance(this).toggle();
});
Mt(Ft);
const Ap = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Rp = ".sticky-top", Ji = "padding-right", Ip = "margin-right";
class Mu {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, Ji, (n) => n + t), this._setElementAttributes(Ap, Ji, (n) => n + t), this._setElementAttributes(Rp, Ip, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ji), this._resetElementAttributes(Ap, Ji), this._resetElementAttributes(Rp, Ip);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, n, a) {
    const r = this.getWidth(), i = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + r)
        return;
      this._saveInitialAttribute(o, n);
      const s = window.getComputedStyle(o).getPropertyValue(n);
      o.style.setProperty(n, `${a(Number.parseFloat(s))}px`);
    };
    this._applyManipulationCallback(t, i);
  }
  _saveInitialAttribute(t, n) {
    const a = t.style.getPropertyValue(n);
    a && fn.setDataAttribute(t, n, a);
  }
  _resetElementAttributes(t, n) {
    const a = (r) => {
      const i = fn.getDataAttribute(r, n);
      if (i === null) {
        r.style.removeProperty(n);
        return;
      }
      fn.removeDataAttribute(r, n), r.style.setProperty(n, i);
    };
    this._applyManipulationCallback(t, a);
  }
  _applyManipulationCallback(t, n) {
    if (dn(t)) {
      n(t);
      return;
    }
    for (const a of Se.find(t, this._element))
      n(a);
  }
}
const Mg = "backdrop", aN = "fade", Op = "show", $p = `mousedown.bs.${Mg}`, rN = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  rootElement: "body"
}, iN = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Pg extends Ti {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  static get Default() {
    return rN;
  }
  static get DefaultType() {
    return iN;
  }
  static get NAME() {
    return Mg;
  }
  show(t) {
    if (!this._config.isVisible) {
      rn(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Ci(n), n.classList.add(Op), this._emulateAnimation(() => {
      rn(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      rn(t);
      return;
    }
    this._getElement().classList.remove(Op), this._emulateAnimation(() => {
      this.dispose(), rn(t);
    });
  }
  dispose() {
    !this._isAppended || (U.off(this._element, $p), this._element.remove(), this._isAppended = !1);
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(aN), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = Un(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), U.on(t, $p, () => {
      rn(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Eg(t, this._getElement(), this._config.isAnimated);
  }
}
const oN = "focustrap", sN = "bs.focustrap", Jo = `.${sN}`, lN = `focusin${Jo}`, uN = `keydown.tab${Jo}`, cN = "Tab", dN = "forward", Np = "backward", fN = {
  autofocus: !0,
  trapElement: null
}, pN = {
  autofocus: "boolean",
  trapElement: "element"
};
class Bg extends Ti {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  static get Default() {
    return fN;
  }
  static get DefaultType() {
    return pN;
  }
  static get NAME() {
    return oN;
  }
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), U.off(document, Jo), U.on(document, lN, (t) => this._handleFocusin(t)), U.on(document, uN, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    !this._isActive || (this._isActive = !1, U.off(document, Jo));
  }
  _handleFocusin(t) {
    const {
      trapElement: n
    } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target))
      return;
    const a = Se.focusableChildren(n);
    a.length === 0 ? n.focus() : this._lastTabNavDirection === Np ? a[a.length - 1].focus() : a[0].focus();
  }
  _handleKeydown(t) {
    t.key === cN && (this._lastTabNavDirection = t.shiftKey ? Np : dN);
  }
}
const vN = "modal", hN = "bs.modal", Wt = `.${hN}`, mN = ".data-api", gN = "Escape", yN = `hide${Wt}`, bN = `hidePrevented${Wt}`, Vg = `hidden${Wt}`, Lg = `show${Wt}`, _N = `shown${Wt}`, EN = `resize${Wt}`, wN = `click.dismiss${Wt}`, SN = `mousedown.dismiss${Wt}`, CN = `keydown.dismiss${Wt}`, TN = `click${Wt}${mN}`, Mp = "modal-open", kN = "fade", Pp = "show", $l = "modal-static", xN = ".modal.show", DN = ".modal-dialog", AN = ".modal-body", RN = '[data-bs-toggle="modal"]', IN = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, ON = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Ea extends jt {
  constructor(t, n) {
    super(t, n), this._dialog = Se.findOne(DN, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Mu(), this._addEventListeners();
  }
  static get Default() {
    return IN;
  }
  static get DefaultType() {
    return ON;
  }
  static get NAME() {
    return vN;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || U.trigger(this._element, Lg, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Mp), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || U.trigger(this._element, yN).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Pp), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    for (const t of [window, this._dialog])
      U.off(t, Wt);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Pg({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Bg({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const n = Se.findOne(AN, this._dialog);
    n && (n.scrollTop = 0), Ci(this._element), this._element.classList.add(Pp);
    const a = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, U.trigger(this._element, _N, {
        relatedTarget: t
      });
    };
    this._queueCallback(a, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    U.on(this._element, CN, (t) => {
      if (t.key === gN) {
        if (this._config.keyboard) {
          t.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), U.on(window, EN, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), U.on(this._element, SN, (t) => {
      U.one(this._element, wN, (n) => {
        if (!(this._element !== t.target || this._element !== n.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(Mp), this._resetAdjustments(), this._scrollBar.reset(), U.trigger(this._element, Vg);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(kN);
  }
  _triggerBackdropTransition() {
    if (U.trigger(this._element, bN).defaultPrevented)
      return;
    const n = this._element.scrollHeight > document.documentElement.clientHeight, a = this._element.style.overflowY;
    a === "hidden" || this._element.classList.contains($l) || (n || (this._element.style.overflowY = "hidden"), this._element.classList.add($l), this._queueCallback(() => {
      this._element.classList.remove($l), this._queueCallback(() => {
        this._element.style.overflowY = a;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, n = this._scrollBar.getWidth(), a = n > 0;
    if (a && !t) {
      const r = Ot() ? "paddingLeft" : "paddingRight";
      this._element.style[r] = `${n}px`;
    }
    if (!a && t) {
      const r = Ot() ? "paddingRight" : "paddingLeft";
      this._element.style[r] = `${n}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  static jQueryInterface(t, n) {
    return this.each(function() {
      const a = Ea.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof a[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        a[t](n);
      }
    });
  }
}
U.on(document, TN, RN, function(e) {
  const t = cn(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), U.one(t, Lg, (r) => {
    r.defaultPrevented || U.one(t, Vg, () => {
      Tr(this) && this.focus();
    });
  });
  const n = Se.findOne(xN);
  n && Ea.getInstance(n).hide(), Ea.getOrCreateInstance(t).toggle(this);
});
Bs(Ea);
Mt(Ea);
const $N = "offcanvas", NN = "bs.offcanvas", xn = `.${NN}`, Fg = ".data-api", MN = `load${xn}${Fg}`, PN = "Escape", Bp = "show", Vp = "showing", Lp = "hiding", BN = "offcanvas-backdrop", Hg = ".offcanvas.show", VN = `show${xn}`, LN = `shown${xn}`, FN = `hide${xn}`, Fp = `hidePrevented${xn}`, zg = `hidden${xn}`, HN = `resize${xn}`, zN = `click${xn}${Fg}`, UN = `keydown.dismiss${xn}`, jN = '[data-bs-toggle="offcanvas"]', WN = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, qN = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class En extends jt {
  constructor(t, n) {
    super(t, n), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  static get Default() {
    return WN;
  }
  static get DefaultType() {
    return qN;
  }
  static get NAME() {
    return $N;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || U.trigger(this._element, VN, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Mu().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Vp);
    const a = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Bp), this._element.classList.remove(Vp), U.trigger(this._element, LN, {
        relatedTarget: t
      });
    };
    this._queueCallback(a, this._element, !0);
  }
  hide() {
    if (!this._isShown || U.trigger(this._element, FN).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Lp), this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(Bp, Lp), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Mu().reset(), U.trigger(this._element, zg);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        U.trigger(this._element, Fp);
        return;
      }
      this.hide();
    }, n = Boolean(this._config.backdrop);
    return new Pg({
      className: BN,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Bg({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    U.on(this._element, UN, (t) => {
      if (t.key === PN) {
        if (!this._config.keyboard) {
          U.trigger(this._element, Fp);
          return;
        }
        this.hide();
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = En.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
U.on(document, zN, jN, function(e) {
  const t = cn(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), jn(this))
    return;
  U.one(t, zg, () => {
    Tr(this) && this.focus();
  });
  const n = Se.findOne(Hg);
  n && n !== t && En.getInstance(n).hide(), En.getOrCreateInstance(t).toggle(this);
});
U.on(window, MN, () => {
  for (const e of Se.find(Hg))
    En.getOrCreateInstance(e).show();
});
U.on(window, HN, () => {
  for (const e of Se.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" && En.getOrCreateInstance(e).hide();
});
Bs(En);
Mt(En);
const GN = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), YN = /^aria-[\w-]*$/i, KN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, XN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, ZN = (e, t) => {
  const n = e.nodeName.toLowerCase();
  return t.includes(n) ? GN.has(n) ? Boolean(KN.test(e.nodeValue) || XN.test(e.nodeValue)) : !0 : t.filter((a) => a instanceof RegExp).some((a) => a.test(n));
}, Ug = {
  "*": ["class", "dir", "id", "lang", "role", YN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function QN(e, t, n) {
  if (!e.length)
    return e;
  if (n && typeof n == "function")
    return n(e);
  const r = new window.DOMParser().parseFromString(e, "text/html"), i = [].concat(...r.body.querySelectorAll("*"));
  for (const o of i) {
    const s = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(s)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes), c = [].concat(t["*"] || [], t[s] || []);
    for (const u of l)
      ZN(u, c) || o.removeAttribute(u.nodeName);
  }
  return r.body.innerHTML;
}
const JN = "TemplateFactory", eM = {
  allowList: Ug,
  content: {},
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, tM = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, nM = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class aM extends Ti {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  static get Default() {
    return eM;
  }
  static get DefaultType() {
    return tM;
  }
  static get NAME() {
    return JN;
  }
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = {
      ...this._config.content,
      ...t
    }, this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [r, i] of Object.entries(this._config.content))
      this._setContent(t, i, r);
    const n = t.children[0], a = this._resolvePossibleFunction(this._config.extraClass);
    return a && n.classList.add(...a.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, a] of Object.entries(t))
      super._typeCheckConfig({
        selector: n,
        entry: a
      }, nM);
  }
  _setContent(t, n, a) {
    const r = Se.findOne(a, t);
    if (!!r) {
      if (n = this._resolvePossibleFunction(n), !n) {
        r.remove();
        return;
      }
      if (dn(n)) {
        this._putElementInTemplate(Un(n), r);
        return;
      }
      if (this._config.html) {
        r.innerHTML = this._maybeSanitize(n);
        return;
      }
      r.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? QN(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t(this) : t;
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      n.innerHTML = "", n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const rM = "tooltip", iM = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Nl = "fade", oM = "modal", eo = "show", sM = ".tooltip-inner", Hp = `.${oM}`, zp = "hide.bs.modal", Rr = "hover", Ml = "focus", lM = "click", uM = "manual", cM = "hide", dM = "hidden", fM = "show", pM = "shown", vM = "inserted", hM = "click", mM = "focusin", gM = "focusout", yM = "mouseenter", bM = "mouseleave", _M = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: Ot() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: Ot() ? "right" : "left"
}, EM = {
  allowList: Ug,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 0],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, wM = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class pn extends jt {
  constructor(t, n) {
    if (typeof hg > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  static get Default() {
    return EM;
  }
  static get DefaultType() {
    return wM;
  }
  static get NAME() {
    return rM;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!!this._isEnabled) {
      if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), U.off(this._element.closest(Hp), zp, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = U.trigger(this._element, this.constructor.eventName(fM)), a = (bg(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !a)
      return;
    this.tip && (this.tip.remove(), this.tip = null);
    const r = this._getTipElement();
    this._element.setAttribute("aria-describedby", r.getAttribute("id"));
    const {
      container: i
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(r), U.trigger(this._element, this.constructor.eventName(vM))), this._popper ? this._popper.update() : this._popper = this._createPopper(r), r.classList.add(eo), "ontouchstart" in document.documentElement)
      for (const s of [].concat(...document.body.children))
        U.on(s, "mouseover", Zo);
    const o = () => {
      U.trigger(this._element, this.constructor.eventName(pM)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || U.trigger(this._element, this.constructor.eventName(cM)).defaultPrevented)
      return;
    const n = this._getTipElement();
    if (n.classList.remove(eo), "ontouchstart" in document.documentElement)
      for (const r of [].concat(...document.body.children))
        U.off(r, "mouseover", Zo);
    this._activeTrigger[lM] = !1, this._activeTrigger[Ml] = !1, this._activeTrigger[Rr] = !1, this._isHovered = null;
    const a = () => {
      this._isWithActiveTrigger() || (this._isHovered || n.remove(), this._element.removeAttribute("aria-describedby"), U.trigger(this._element, this.constructor.eventName(dM)), this._disposePopper());
    };
    this._queueCallback(a, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n)
      return null;
    n.classList.remove(Nl, eo), n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const a = sO(this.constructor.NAME).toString();
    return n.setAttribute("id", a), this._isAnimated() && n.classList.add(Nl), n;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new aM({
      ...this._config,
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [sM]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(Nl);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(eo);
  }
  _createPopper(t) {
    const n = typeof this._config.placement == "function" ? this._config.placement.call(this, t, this._element) : this._config.placement, a = _M[n.toUpperCase()];
    return Wc(this._element, t, this._getPopperConfig(a));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((n) => Number.parseInt(n, 10)) : typeof t == "function" ? (n) => t(n, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (a) => {
          this._getTipElement().setAttribute("data-popper-placement", a.state.placement);
        }
      }]
    };
    return {
      ...n,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(n) : this._config.popperConfig
    };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        U.on(this._element, this.constructor.eventName(hM), this._config.selector, (a) => {
          this._initializeOnDelegatedTarget(a).toggle();
        });
      else if (n !== uM) {
        const a = n === Rr ? this.constructor.eventName(yM) : this.constructor.eventName(mM), r = n === Rr ? this.constructor.eventName(bM) : this.constructor.eventName(gM);
        U.on(this._element, a, this._config.selector, (i) => {
          const o = this._initializeOnDelegatedTarget(i);
          o._activeTrigger[i.type === "focusin" ? Ml : Rr] = !0, o._enter();
        }), U.on(this._element, r, this._config.selector, (i) => {
          const o = this._initializeOnDelegatedTarget(i);
          o._activeTrigger[i.type === "focusout" ? Ml : Rr] = o._element.contains(i.relatedTarget), o._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, U.on(this._element.closest(Hp), zp, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    !t || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, n);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = fn.getDataAttributes(this._element);
    for (const a of Object.keys(n))
      iM.has(a) && delete n[a];
    return t = {
      ...n,
      ...typeof t == "object" && t ? t : {}
    }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : Un(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const n in this._config)
      this.constructor.Default[n] !== this._config[n] && (t[n] = this._config[n]);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = pn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Mt(pn);
const SM = "popover", CM = ".popover-header", TM = ".popover-body", kM = {
  ...pn.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, xM = {
  ...pn.DefaultType,
  content: "(null|string|element|function)"
};
class gr extends pn {
  static get Default() {
    return kM;
  }
  static get DefaultType() {
    return xM;
  }
  static get NAME() {
    return SM;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return {
      [CM]: this._getTitle(),
      [TM]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = gr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Mt(gr);
const DM = "scrollspy", AM = "bs.scrollspy", Kc = `.${AM}`, RM = ".data-api", IM = `activate${Kc}`, Up = `click${Kc}`, OM = `load${Kc}${RM}`, $M = "dropdown-item", Na = "active", NM = '[data-bs-spy="scroll"]', Pl = "[href]", MM = ".nav, .list-group", jp = ".nav-link", PM = ".nav-item", BM = ".list-group-item", VM = `${jp}, ${PM} > ${jp}, ${BM}`, LM = ".dropdown", FM = ".dropdown-toggle", HM = {
  offset: null,
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, zM = {
  offset: "(number|null)",
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ls extends jt {
  constructor(t, n) {
    super(t, n), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  static get Default() {
    return HM;
  }
  static get DefaultType() {
    return zM;
  }
  static get NAME() {
    return DM;
  }
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return t.target = Un(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))), t;
  }
  _maybeEnableSmoothScroll() {
    !this._config.smoothScroll || (U.off(this._config.target, Up), U.on(this._config.target, Up, Pl, (t) => {
      const n = this._observableSections.get(t.target.hash);
      if (n) {
        t.preventDefault();
        const a = this._rootElement || window, r = n.offsetTop - this._element.offsetTop;
        if (a.scrollTo) {
          a.scrollTo({
            top: r,
            behavior: "smooth"
          });
          return;
        }
        a.scrollTop = r;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  _observerCallback(t) {
    const n = (o) => this._targetLinks.get(`#${o.target.id}`), a = (o) => {
      this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(n(o));
    }, r = (this._rootElement || document.documentElement).scrollTop, i = r >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = r;
    for (const o of t) {
      if (!o.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(n(o));
        continue;
      }
      const s = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (i && s) {
        if (a(o), !r)
          return;
        continue;
      }
      !i && !s && a(o);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = Se.find(Pl, this._config.target);
    for (const n of t) {
      if (!n.hash || jn(n))
        continue;
      const a = Se.findOne(n.hash, this._element);
      Tr(a) && (this._targetLinks.set(n.hash, n), this._observableSections.set(n.hash, a));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Na), this._activateParents(t), U.trigger(this._element, IM, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains($M)) {
      Se.findOne(FM, t.closest(LM)).classList.add(Na);
      return;
    }
    for (const n of Se.parents(t, MM))
      for (const a of Se.prev(n, VM))
        a.classList.add(Na);
  }
  _clearActiveClass(t) {
    t.classList.remove(Na);
    const n = Se.find(`${Pl}.${Na}`, t);
    for (const a of n)
      a.classList.remove(Na);
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Ls.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(window, OM, () => {
  for (const e of Se.find(NM))
    Ls.getOrCreateInstance(e);
});
Mt(Ls);
const UM = "tab", jM = "bs.tab", xa = `.${jM}`, WM = `hide${xa}`, qM = `hidden${xa}`, GM = `show${xa}`, YM = `shown${xa}`, KM = `click${xa}`, XM = `keydown${xa}`, ZM = `load${xa}`, QM = "ArrowLeft", Wp = "ArrowRight", JM = "ArrowUp", qp = "ArrowDown", ca = "active", Gp = "fade", Bl = "show", eP = "dropdown", tP = ".dropdown-toggle", nP = ".dropdown-menu", Vl = ":not(.dropdown-toggle)", aP = '.list-group, .nav, [role="tablist"]', rP = ".nav-item, .list-group-item", iP = `.nav-link${Vl}, .list-group-item${Vl}, [role="tab"]${Vl}`, jg = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Ll = `${iP}, ${jg}`, oP = `.${ca}[data-bs-toggle="tab"], .${ca}[data-bs-toggle="pill"], .${ca}[data-bs-toggle="list"]`;
class yr extends jt {
  constructor(t) {
    super(t), this._parent = this._element.closest(aP), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), U.on(this._element, XM, (n) => this._keydown(n)));
  }
  static get NAME() {
    return UM;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const n = this._getActiveElem(), a = n ? U.trigger(n, WM, {
      relatedTarget: t
    }) : null;
    U.trigger(t, GM, {
      relatedTarget: n
    }).defaultPrevented || a && a.defaultPrevented || (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t)
      return;
    t.classList.add(ca), this._activate(cn(t));
    const a = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(Bl);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), U.trigger(t, YM, {
        relatedTarget: n
      });
    };
    this._queueCallback(a, t, t.classList.contains(Gp));
  }
  _deactivate(t, n) {
    if (!t)
      return;
    t.classList.remove(ca), t.blur(), this._deactivate(cn(t));
    const a = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(Bl);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), U.trigger(t, qM, {
        relatedTarget: n
      });
    };
    this._queueCallback(a, t, t.classList.contains(Gp));
  }
  _keydown(t) {
    if (![QM, Wp, JM, qp].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const n = [Wp, qp].includes(t.key), a = qc(this._getChildren().filter((r) => !jn(r)), t.target, n, !0);
    a && (a.focus({
      preventScroll: !0
    }), yr.getOrCreateInstance(a).show());
  }
  _getChildren() {
    return Se.find(Ll, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const a of n)
      this._setInitialAttributesOnChild(a);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t), a = this._getOuterElement(t);
    t.setAttribute("aria-selected", n), a !== t && this._setAttributeIfNotExists(a, "role", "presentation"), n || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = cn(t);
    !n || (this._setAttributeIfNotExists(n, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `#${t.id}`));
  }
  _toggleDropDown(t, n) {
    const a = this._getOuterElement(t);
    if (!a.classList.contains(eP))
      return;
    const r = (i, o) => {
      const s = Se.findOne(i, a);
      s && s.classList.toggle(o, n);
    };
    r(tP, ca), r(nP, Bl), a.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, a) {
    t.hasAttribute(n) || t.setAttribute(n, a);
  }
  _elemIsActive(t) {
    return t.classList.contains(ca);
  }
  _getInnerElement(t) {
    return t.matches(Ll) ? t : Se.findOne(Ll, t);
  }
  _getOuterElement(t) {
    return t.closest(rP) || t;
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = yr.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
U.on(document, KM, jg, function(e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !jn(this) && yr.getOrCreateInstance(this).show();
});
U.on(window, ZM, () => {
  for (const e of Se.find(oP))
    yr.getOrCreateInstance(e);
});
Mt(yr);
const sP = "toast", lP = "bs.toast", Xn = `.${lP}`, uP = `mouseover${Xn}`, cP = `mouseout${Xn}`, dP = `focusin${Xn}`, fP = `focusout${Xn}`, pP = `hide${Xn}`, vP = `hidden${Xn}`, hP = `show${Xn}`, mP = `shown${Xn}`, gP = "fade", Yp = "hide", to = "show", no = "showing", yP = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, bP = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Fs extends jt {
  constructor(t, n) {
    super(t, n), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  static get Default() {
    return bP;
  }
  static get DefaultType() {
    return yP;
  }
  static get NAME() {
    return sP;
  }
  show() {
    if (U.trigger(this._element, hP).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(gP);
    const n = () => {
      this._element.classList.remove(no), U.trigger(this._element, mP), this._maybeScheduleHide();
    };
    this._element.classList.remove(Yp), Ci(this._element), this._element.classList.add(to, no), this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || U.trigger(this._element, pP).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(Yp), this._element.classList.remove(no, to), U.trigger(this._element, vP);
    };
    this._element.classList.add(no), this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(to), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(to);
  }
  _maybeScheduleHide() {
    !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const a = t.relatedTarget;
    this._element === a || this._element.contains(a) || this._maybeScheduleHide();
  }
  _setListeners() {
    U.on(this._element, uP, (t) => this._onInteraction(t, !0)), U.on(this._element, cP, (t) => this._onInteraction(t, !1)), U.on(this._element, dP, (t) => this._onInteraction(t, !0)), U.on(this._element, fP, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  static jQueryInterface(t) {
    return this.each(function() {
      const n = Fs.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
Bs(Fs);
Mt(Fs);
var _P = Object.defineProperty, EP = (e, t, n) => t in e ? _P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xe = (e, t, n) => (EP(e, typeof t != "symbol" ? t + "" : t, n), n);
const wP = (e) => E(
  () => e.value === "center" ? "justify-content-center" : e.value === "end" ? "justify-content-end" : "justify-content-start"
), Wg = Symbol(), qg = {
  items: Ht([]),
  reset() {
    this.items = Ht([]);
  }
}, SP = (e) => {
  e.provide(Wg, qg);
}, CP = () => ct(Wg) || qg, Qe = (e, t, n) => {
  je(() => {
    var a;
    (a = e == null ? void 0 : e.value) == null || a.addEventListener(t, n);
  }), ju(() => {
    var a;
    (a = e == null ? void 0 : e.value) == null || a.removeEventListener(t, n);
  });
}, TP = (e, t) => e.indexOf(t) !== -1, kP = (...e) => Array.from([...e]), xP = (...e) => Array.prototype.concat.apply([], e);
class Hs {
  constructor(t, n = {}) {
    if (Xe(this, "cancelable", !0), Xe(this, "componentId", null), Xe(this, "defaultPrevented", !1), Xe(this, "nativeEvent", null), Xe(this, "preventDefault"), Xe(this, "relatedTarget", null), Xe(this, "target", null), Xe(this, "eventType", ""), Xe(this, "vueTarget", null), !t)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    YP(this, Hs.Defaults, this.constructor.Defaults, n, { eventType: t }), KP(this, {
      type: ta(),
      cancelable: ta(),
      nativeEvent: ta(),
      target: ta(),
      relatedTarget: ta(),
      vueTarget: ta(),
      componentId: ta()
    });
    let a = !1;
    this.preventDefault = function() {
      this.cancelable && (a = !0);
    }, XP(this, "defaultPrevented", {
      enumerable: !0,
      get() {
        return a;
      }
    });
  }
  static get Defaults() {
    return {
      eventType: "",
      cancelable: !0,
      nativeEvent: null,
      target: null,
      relatedTarget: null,
      vueTarget: null,
      componentId: null
    };
  }
}
const Fl = (e) => `\\${e}`, DP = (e) => {
  e = Bu(e);
  const { length: t } = e, n = e.charCodeAt(0);
  return e.split("").reduce((a, r, i) => {
    const o = e.charCodeAt(i);
    return o === 0 ? `${a}\uFFFD` : o === 127 || o >= 1 && o <= 31 || i === 0 && o >= 48 && o <= 57 || i === 1 && o >= 48 && o <= 57 && n === 45 ? a + Fl(`${o.toString(16)} `) : i === 0 && o === 45 && t === 1 ? a + Fl(r) : o >= 128 || o === 45 || o === 95 || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? a + r : a + Fl(r);
  }, "");
}, Gg = typeof window < "u", Yg = typeof document < "u", AP = typeof navigator < "u", RP = Gg && Yg && AP, Kg = Yg ? document : {}, Zn = (e) => !!(e && e.nodeType === Node.ELEMENT_NODE), IP = (e) => Zn(e) ? e.getBoundingClientRect() : null, OP = (e = []) => {
  const { activeElement: t } = document;
  return t && !e.some((n) => n === t) ? t : null;
}, $P = (e) => Zn(e) && e === OP(), NP = (e, t = {}) => {
  try {
    e.focus(t);
  } catch (n) {
    console.error(n);
  }
  return $P(e);
}, MP = (e, t) => t && Zn(e) && e.getAttribute(t) || null, PP = (e) => {
  if (MP(e, "display") === "none")
    return !1;
  const t = IP(e);
  return !!(t && t.height > 0 && t.width > 0);
}, Kp = (e, t) => !e || e(t).filter((n) => n.type !== Zy).length < 1, BP = (e, t) => (Zn(t) ? t : Kg).querySelector(e) || null, VP = (e, t) => kP((Zn(t) ? t : Kg).querySelectorAll(e)), Xg = (e, t) => t && Zn(e) ? e.getAttribute(t) : null, LP = (e, t, n) => {
  t && Zn(e) && e.setAttribute(t, n);
}, FP = (e, t) => {
  t && Zn(e) && e.removeAttribute(t);
}, HP = (e, t) => Bu(e).toLowerCase() === Bu(t).toLowerCase(), ao = Gg ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((e) => setTimeout(e, 16)) : (e) => setTimeout(e, 0), zs = (e, t, n) => t.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((a, r) => (a[e ? `${e}${r.charAt(0).toUpperCase() + r.slice(1)}` : r] = n, a), /* @__PURE__ */ Object.create(null)), Zg = (e, t, n, a = n) => Object.keys(t).reduce((r, i) => (e[i] && r.push(
  [a, i.replace(n, ""), e[i]].filter((o) => o && typeof o != "boolean").join("-").toLowerCase()
), r), []), on = (e = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${e}__`, Us = (e, t) => e === !0 || e === "true" || e === "" ? "true" : e === "grammar" || e === "spelling" ? e : t === !1 ? "true" : e === !1 || e === "false" ? "false" : e, zP = /^[0-9]*\.?[0-9]+$/, Hl = (e) => ey(e) === "boolean", UP = (e) => e !== null && typeof e == "object", br = (e) => typeof e == "string", jP = (e) => e === void 0, WP = (e) => e === null, Qg = (e) => jP(e) || WP(e), Jg = (e) => zP.test(String(e)), qP = (e) => typeof e == "number", ey = (e) => typeof e, ty = (e) => ey(e) === "function", ny = (e) => Object.prototype.toString.call(e) === "[object Object]", ay = (e) => Array.isArray(e), zl = (e) => e && typeof e == "object" && e.constructor === Object, Pu = (e, t, n = !0) => {
  const a = e instanceof Date && typeof e.getMonth == "function" ? new Date(e) : Object.assign({}, e);
  return zl(e) && zl(t) && Object.keys(t).forEach((r) => {
    zl(t[r]) ? r in e ? a[r] = Pu(e[r], t[r], n) : Object.assign(a, { [r]: t[r] }) : Array.isArray(t[r]) && Array.isArray(e[r]) ? Object.assign(a, {
      [r]: n ? e[r].concat(t[r].filter((i) => !e[r].includes(i))) : t[r]
    }) : Object.assign(a, { [r]: t[r] });
  }), a;
}, St = (e, t = {}, n = {}) => {
  const a = [e];
  let r;
  for (let i = 0; i < a.length && !r; i++) {
    const o = a[i];
    r = n[o];
  }
  return r && ty(r) ? r(t) : r;
}, _r = (e, t = NaN) => Number.isInteger(e) ? e : t, GP = (e, t = NaN) => {
  const n = parseInt(e, 10);
  return isNaN(n) ? t : n;
}, Xc = (e, t = NaN) => {
  const n = parseFloat(e.toString());
  return isNaN(n) ? t : n;
}, YP = (e, ...t) => Object.assign(e, ...t), KP = (e, t) => Object.defineProperties(e, t), XP = (e, t, n) => Object.defineProperty(e, t, n), js = (e, t) => Object.keys(e).filter((n) => t.indexOf(n) === -1).reduce((n, a) => ({ ...n, [a]: e[a] }), {}), ta = () => ({ enumerable: !0, configurable: !1, writable: !1 }), Xp = (e, t) => t + (e ? a2(e) : ""), ry = (e, t, n = (a) => a) => (ay(e) ? e.slice() : Object.keys(e)).reduce(
  (a, r) => (a[n(r)] = t[r], a),
  {}
), ZP = (e) => typeof e == "boolean" ? e : e === "" ? !0 : e === "true", di = (e) => !!(e.href || e.to), QP = /_/g, JP = /([a-z])([A-Z])/g, e2 = /(\s|^)(\w)/, Eo = /\s+/, t2 = /^#/, n2 = /^#[A-Za-z]+[\w\-:.]*$/, Bu = (e, t = 2) => Qg(e) ? "" : ay(e) || ny(e) && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e), Zp = (e) => e.replace(QP, " ").replace(JP, (t, n, a) => `${n} ${a}`).replace(e2, (t, n, a) => n + a.toUpperCase()), a2 = (e) => (e = br(e) ? e.trim() : String(e), e.charAt(0).toUpperCase() + e.slice(1)), iy = (e) => E(() => ({
  "form-check": !e.plain && !e.button,
  "form-check-inline": e.inline,
  "form-switch": e.switch,
  [`form-control-${e.size}`]: e.size && e.size !== "md"
})), oy = (e) => E(() => ({
  "form-check-input": !e.plain && !e.button,
  "is-valid": e.state === !0,
  "is-invalid": e.state === !1,
  "btn-check": e.button
})), sy = (e) => E(() => ({
  "form-check-label": !e.plain && !e.button,
  btn: e.button,
  [`btn-${e.buttonVariant}`]: e.button,
  [`btn-${e.size}`]: e.button && e.size && e.size !== "md"
})), ly = (e) => E(() => {
  var t;
  return {
    "aria-invalid": Us(e.ariaInvalid, e.state),
    "aria-required": ((t = e.required) == null ? void 0 : t.toString()) === "true" ? "true" : null
  };
}), uy = (e) => E(() => ({
  "was-validated": e.validated,
  "btn-group": e.buttons && !e.stacked,
  "btn-group-vertical": e.stacked,
  [`btn-group-${e.size}`]: e.size
})), es = (e, t, n) => e.filter((a) => a.type.name === t).map((a) => {
  const r = (a.children.default ? a.children.default() : []).find(
    (i) => i.type.toString() === "Symbol(Text)"
  );
  return {
    props: {
      disabled: n,
      ...a.props
    },
    text: r ? r.children : ""
  };
}), cy = (e, t) => typeof e == "string" ? {
  props: {
    value: e,
    disabled: t.disabled
  },
  text: e
} : {
  props: {
    value: e[t.valueField],
    disabled: t.disabled || e[t.disabledField],
    ...e.props
  },
  text: e[t.textField],
  html: e[t.htmlField]
}, dy = (e, t, n, a, r) => ({
  ...e,
  props: {
    "button-variant": n.buttonVariant,
    form: n.form,
    name: a.value,
    id: `${r.value}_option_${t}`,
    button: n.buttons,
    state: n.state,
    plain: n.plain,
    size: n.size,
    inline: !n.stacked,
    required: n.required,
    ...e.props
  }
}), st = (e, t) => E(() => (e == null ? void 0 : e.value) || on(t)), fy = {
  ariaInvalid: {
    type: [Boolean, String],
    default: void 0
  },
  autocomplete: { type: String, required: !1 },
  autofocus: { type: Boolean, default: !1 },
  disabled: { type: Boolean, default: !1 },
  form: { type: String, required: !1 },
  formatter: { type: Function, required: !1 },
  id: { type: String, required: !1 },
  lazy: { type: Boolean, default: !1 },
  lazyFormatter: { type: Boolean, default: !1 },
  list: { type: String, required: !1 },
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: !1 },
  number: { type: Boolean, default: !1 },
  placeholder: { type: String, required: !1 },
  plaintext: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  required: { type: Boolean, default: !1 },
  size: { type: String, required: !1 },
  state: { type: Boolean, default: null },
  trim: { type: Boolean, default: !1 }
}, py = (e, t) => {
  const n = te();
  let a = null, r = !0;
  const i = st(b(e, "id"), "input"), o = (y, w, m = !1) => (y = String(y), typeof e.formatter == "function" && (!e.lazyFormatter || m) ? (r = !1, e.formatter(y, w)) : y), s = (y) => e.trim ? y.trim() : e.number ? parseFloat(y) : y, l = () => {
    sn(() => {
      var y;
      e.autofocus && ((y = n.value) == null || y.focus());
    });
  };
  je(l), je(() => {
    n.value && (n.value.value = e.modelValue);
  }), Wu(l);
  const c = E(
    () => {
      var y;
      return Us(e.ariaInvalid, (y = e.state) != null ? y : void 0);
    }
  ), u = (y) => {
    const { value: w } = y.target, m = o(w, y);
    if (m === !1 || y.defaultPrevented) {
      y.preventDefault();
      return;
    }
    if (e.lazy)
      return;
    const _ = s(m);
    e.modelValue !== _ && (a = w, t("update:modelValue", _)), t("input", m);
  }, d = (y) => {
    const { value: w } = y.target, m = o(w, y);
    if (m === !1 || y.defaultPrevented) {
      y.preventDefault();
      return;
    }
    if (!e.lazy)
      return;
    a = w, t("update:modelValue", m);
    const _ = s(m);
    e.modelValue !== _ && t("change", m);
  }, f = (y) => {
    if (t("blur", y), !e.lazy && !e.lazyFormatter)
      return;
    const { value: w } = y.target, m = o(w, y, !0);
    a = w, t("update:modelValue", m);
  }, p = () => {
    var y;
    e.disabled || (y = n.value) == null || y.focus();
  }, h = () => {
    var y;
    e.disabled || (y = n.value) == null || y.blur();
  };
  return $e(
    () => e.modelValue,
    (y) => {
      !n.value || (n.value.value = a && r ? a : y, a = null, r = !0);
    }
  ), {
    input: n,
    computedId: i,
    computedAriaInvalid: c,
    onInput: u,
    onChange: d,
    onBlur: f,
    focus: p,
    blur: h
  };
}, za = (e, t) => {
  if (!e)
    return e;
  if (t in e)
    return e[t];
  const n = t.split(".");
  return za(e[n[0]], n.splice(1).join("."));
}, Ul = (e, t = null, n, a) => {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    const r = za(e, a.valueField), i = za(e, a.textField), o = za(e, a.htmlField), s = za(e, a.disabledField), l = e[a.optionsField] || null;
    return l !== null ? {
      label: String(za(e, a.labelField) || i),
      options: Zc(l, n, a)
    } : {
      value: typeof r > "u" ? t || i : r,
      text: String(typeof i > "u" ? t : i),
      html: o,
      disabled: Boolean(s)
    };
  }
  return {
    value: t || e,
    text: String(e),
    disabled: !1
  };
}, Zc = (e, t, n) => Array.isArray(e) ? e.map((a) => Ul(a, null, t, n)) : Object.prototype.toString.call(e) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(e).map((a) => {
  const r = e[a];
  switch (typeof r) {
    case "object":
      return Ul(r.text, String(r.value), t, n);
    default:
      return Ul(r, String(a), t, n);
  }
})) : [], C = (e) => E(() => ZP(e.value)), r2 = ["id"], vy = Symbol(), i2 = /* @__PURE__ */ B({
  __name: "BAccordion",
  props: {
    flush: { default: !1 },
    free: { default: !1 },
    id: { default: void 0 }
  },
  setup(e) {
    const t = e, n = st(b(t, "id"), "accordion"), a = C(b(t, "flush")), r = C(b(t, "free")), i = E(() => ({
      "accordion-flush": a.value
    }));
    return r.value || ln(vy, n.value.toString()), (o, s) => (g(), T("div", {
      id: v(n),
      class: W(["accordion", v(i)])
    }, [
      F(o.$slots, "default")
    ], 10, r2));
  }
}), hy = /* @__PURE__ */ B({
  __name: "BCollapse",
  props: {
    accordion: null,
    id: { default: on() },
    modelValue: { default: !1 },
    tag: { default: "div" },
    toggle: { default: !1 },
    visible: { default: !1 },
    isNav: { default: !1 }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "modelValue")), r = C(b(n, "toggle")), i = C(b(n, "visible")), o = C(b(n, "isNav")), s = te(), l = te(), c = E(() => ({
      show: a.value,
      "navbar-collapse": o.value
    })), u = () => t("update:modelValue", !1);
    return Qe(s, "show.bs.collapse", () => {
      t("show"), t("update:modelValue", !0);
    }), Qe(s, "hide.bs.collapse", () => {
      t("hide"), t("update:modelValue", !1);
    }), Qe(s, "shown.bs.collapse", () => t("shown")), Qe(s, "hidden.bs.collapse", () => t("hidden")), je(() => {
      var d;
      l.value = new mr(s.value, {
        parent: n.accordion ? `#${n.accordion}` : void 0,
        toggle: r.value
      }), (i.value || a.value) && (t("update:modelValue", !0), (d = l.value) == null || d.show());
    }), $e(
      () => a.value,
      (d) => {
        var f, p;
        d ? (f = l.value) == null || f.show() : (p = l.value) == null || p.hide();
      }
    ), $e(
      () => i.value,
      (d) => {
        var f, p;
        d ? (t("update:modelValue", !!d), (f = l.value) == null || f.show()) : (t("update:modelValue", !!d), (p = l.value) == null || p.hide());
      }
    ), (d, f) => (g(), z(ce(e.tag), {
      id: e.id,
      ref_key: "element",
      ref: s,
      class: W(["collapse", v(c)]),
      "data-bs-parent": e.accordion || null,
      "is-nav": v(o)
    }, {
      default: N(() => [
        F(d.$slots, "default", {
          visible: v(a),
          close: u
        })
      ]),
      _: 3
    }, 8, ["id", "class", "data-bs-parent", "is-nav"]));
  }
}), o2 = (e) => {
  if (e.classList.contains("offcanvas"))
    return "offcanvas";
  if (e.classList.contains("collapse"))
    return "collapse";
  throw Error("Couldn't resolve toggle type");
}, s2 = (e, t) => {
  const { modifiers: n, arg: a, value: r } = e, i = Object.keys(n || {}), o = br(r) ? r.split(Eo) : r;
  if (HP(t.tagName, "a")) {
    const s = Xg(t, "href") || "";
    n2.test(s) && i.push(s.replace(t2, ""));
  }
  return xP(a, o).forEach((s) => br(s) && i.push(s)), i.filter((s, l, c) => s && c.indexOf(s) === l);
}, Qc = {
  mounted(e, t) {
    const n = s2(t, e), a = [];
    let r = "data-bs-target";
    e.tagName === "a" && (r = "href");
    for (let i = 0; i < n.length; i++) {
      const o = n[i], s = document.getElementById(o);
      s && (e.setAttribute("data-bs-toggle", o2(s)), a.push(`#${o}`));
    }
    a.length > 0 && e.setAttribute(r, a.join(","));
  }
}, l2 = { class: "accordion-item" }, u2 = ["id"], c2 = ["aria-expanded", "aria-controls"], d2 = { class: "accordion-body" }, f2 = /* @__PURE__ */ B({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { default: !1 }
  },
  setup(e) {
    const t = e, n = C(b(t, "visible")), a = st(b(t, "id"), "accordion_item"), r = ct(vy, "");
    return (i, o) => (g(), T("div", l2, [
      S("h2", {
        id: `${v(a)}heading`,
        class: "accordion-header"
      }, [
        Ue((g(), T("button", {
          class: W(["accordion-button", { collapsed: !v(n) }]),
          type: "button",
          "aria-expanded": v(n) ? "true" : "false",
          "aria-controls": v(a)
        }, [
          F(i.$slots, "title", {}, () => [
            de(G(e.title), 1)
          ])
        ], 10, c2)), [
          [v(Qc), void 0, v(a)]
        ])
      ], 8, u2),
      P(hy, {
        id: v(a),
        class: "accordion-collapse",
        visible: v(n),
        accordion: v(r),
        "aria-labelledby": `heading${v(a)}`
      }, {
        default: N(() => [
          S("div", d2, [
            F(i.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["id", "visible", "accordion", "aria-labelledby"])
    ]));
  }
}), p2 = ["aria-label"], v2 = /* @__PURE__ */ B({
  __name: "BAlert",
  props: {
    dismissLabel: { default: "Close" },
    dismissible: { default: !1 },
    fade: { default: !1 },
    modelValue: { type: [Boolean, Number], default: !1 },
    show: { default: !1 },
    variant: { default: "info" }
  },
  emits: ["dismissed", "dismiss-count-down", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "dismissible"));
    C(b(n, "fade"));
    const r = C(b(n, "show")), i = te(), o = te(), s = E(() => ({
      [`alert-${n.variant}`]: !!n.variant,
      show: !!n.modelValue,
      "alert-dismissible": a.value,
      fade: !!n.modelValue
    }));
    let l;
    const c = (w) => {
      if (typeof w == "boolean")
        return 0;
      const m = _r(w, 0);
      return m > 0 ? m : 0;
    }, u = () => {
      l !== void 0 && (clearTimeout(l), l = void 0);
    }, d = te(c(n.modelValue)), f = E(() => !!n.modelValue || r.value);
    ju(() => {
      var w;
      u(), (w = o.value) == null || w.dispose(), o.value = void 0;
    });
    const p = E(() => n.modelValue === !0 ? !0 : n.modelValue === !1 || _r(n.modelValue, 0) < 1 ? !1 : !!n.modelValue), h = () => {
      d.value = c(n.modelValue), (p.value || r.value) && !o.value && (o.value = new ki(i.value));
    }, y = () => {
      typeof n.modelValue == "boolean" ? t("update:modelValue", !1) : t("update:modelValue", 0), t("dismissed");
    };
    return $e(() => n.modelValue, h), $e(() => r.value, h), $e(d, (w) => {
      u(), typeof n.modelValue != "boolean" && (t("dismiss-count-down", w), w === 0 && n.modelValue > 0 && t("dismissed"), n.modelValue !== w && t("update:modelValue", w), w > 0 && (l = setTimeout(() => {
        d.value--;
      }, 1e3)));
    }), (w, m) => v(f) ? (g(), T("div", {
      key: 0,
      ref_key: "element",
      ref: i,
      class: W(["alert", v(s)]),
      role: "alert"
    }, [
      F(w.$slots, "default"),
      v(a) ? (g(), T("button", {
        key: 0,
        type: "button",
        class: "btn-close",
        "data-bs-dismiss": "alert",
        "aria-label": e.dismissLabel,
        onClick: y
      }, null, 8, p2)) : H("", !0)
    ], 2)) : H("", !0);
  }
}), my = Symbol(), h2 = /* @__PURE__ */ B({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    rounded: { type: [Boolean, String], default: !1 },
    size: null,
    square: { default: !1 },
    tag: { default: "div" },
    variant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "square")), a = E(() => Vu(t.size)), r = (s) => br(s) && Jg(s) ? Xc(s, 0) : s || 0, i = E(
      () => Math.min(Math.max(r(t.overlap), 0), 1) / 2
    ), o = E(() => {
      let { value: s } = a;
      return s = s ? `calc(${s} * ${i.value})` : null, s ? { paddingLeft: s, paddingRight: s } : {};
    });
    return ln(my, {
      overlapScale: i,
      size: t.size,
      square: n.value,
      rounded: t.rounded,
      variant: t.variant
    }), (s, l) => (g(), z(ce(e.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: N(() => [
        S("div", {
          class: "b-avatar-group-inner",
          style: tr(v(o))
        }, [
          F(s.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), m2 = {
  key: 0,
  class: "b-avatar-custom"
}, g2 = {
  key: 1,
  class: "b-avatar-img"
}, y2 = ["src", "alt"], Vu = (e) => {
  const t = br(e) && Jg(e) ? Xc(e, 0) : e;
  return qP(t) ? `${t}px` : t || null;
}, b2 = /* @__PURE__ */ B({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    ariaLabel: null,
    badge: { type: [Boolean, String], default: !1 },
    badgeLeft: { default: !1 },
    badgeOffset: null,
    badgeTop: { default: !1 },
    badgeVariant: { default: "primary" },
    button: { default: !1 },
    buttonType: { default: "button" },
    disabled: { default: !1 },
    icon: null,
    rounded: { type: [Boolean, String], default: "circle" },
    size: null,
    square: { default: !1 },
    src: null,
    text: null,
    textVariant: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["click", "img-error"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "badgeLeft")), r = C(b(n, "badgeTop")), i = C(b(n, "button")), o = C(b(n, "disabled")), s = C(b(n, "square")), l = wa(), c = ["sm", null, "lg"], u = 0.4, d = u * 0.7, f = ct(my, null), p = (ie) => {
      const Re = ie;
      return Re === "light" || Re === "warning" ? "dark" : "light";
    }, h = E(() => !Kp(l.default)), y = E(() => !Kp(l.badge)), w = E(
      () => n.badge || n.badge === "" || y.value
    ), m = E(
      () => f != null && f.size ? f.size : Vu(n.size)
    ), _ = E(
      () => f != null && f.variant ? f.variant : n.variant
    ), k = E(
      () => f != null && f.rounded ? f.rounded : n.rounded
    ), x = E(() => ({
      "aria-label": n.ariaLabel || null,
      disabled: o.value || null
    })), D = E(() => ({
      [`bg-${n.badgeVariant}`]: !!n.badgeVariant
    })), A = E(() => n.badge === !0 ? "" : n.badge), L = E(() => `text-${p(n.badgeVariant)}`), $ = E(() => ({
      [`b-avatar-${n.size}`]: !!n.size && c.indexOf(Vu(n.size)) !== -1,
      [`bg-${_.value}`]: !!_.value,
      badge: !i.value && _.value && h.value,
      rounded: k.value === "" || k.value === !0,
      ["rounded-circle"]: !s.value && k.value === "circle",
      ["rounded-0"]: s.value || k.value === "0",
      ["rounded-1"]: !s.value && k.value === "sm",
      ["rounded-3"]: !s.value && k.value === "lg",
      ["rounded-top"]: !s.value && k.value === "top",
      ["rounded-bottom"]: !s.value && k.value === "bottom",
      ["rounded-start"]: !s.value && k.value === "left",
      ["rounded-end"]: !s.value && k.value === "right",
      btn: i.value,
      [`btn-${_.value}`]: i.value ? !!_.value : !1
    })), O = E(() => `text-${n.textVariant || p(_.value)}`), j = E(() => {
      const ie = n.badgeOffset || "0px";
      return {
        fontSize: (c.indexOf(m.value || null) === -1 ? `calc(${m.value} * ${d})` : "") || "",
        top: r.value ? ie : "",
        bottom: r.value ? "" : ie,
        left: a.value ? ie : "",
        right: a.value ? "" : ie
      };
    }), X = E(() => {
      const ie = c.indexOf(m.value || null) === -1 ? `calc(${m.value} * ${u})` : null;
      return ie ? { fontSize: ie } : {};
    }), Q = E(() => {
      var ie;
      const Re = ((ie = f == null ? void 0 : f.overlapScale) == null ? void 0 : ie.value) || 0, Ee = m.value && Re ? `calc(${m.value} * -${Re})` : null;
      return Ee ? { marginLeft: Ee, marginRight: Ee } : {};
    }), re = E(() => i.value ? n.buttonType : "span"), J = E(() => ({
      ...Q.value,
      width: m.value,
      height: m.value
    })), Ce = (ie) => {
      !o.value && i.value && t("click", ie);
    }, ue = (ie) => t("img-error", ie);
    return (ie, Re) => (g(), z(ce(v(re)), ye({
      class: ["b-avatar", v($)],
      style: v(J)
    }, v(x), { onClick: Ce }), {
      default: N(() => [
        v(h) ? (g(), T("span", m2, [
          F(ie.$slots, "default")
        ])) : e.src ? (g(), T("span", g2, [
          S("img", {
            src: e.src,
            alt: e.alt,
            onError: ue
          }, null, 40, y2)
        ])) : e.text ? (g(), T("span", {
          key: 2,
          class: W(["b-avatar-text", v(O)]),
          style: tr(v(X))
        }, G(e.text), 7)) : H("", !0),
        v(w) ? (g(), T("span", {
          key: 3,
          class: W(["b-avatar-badge", v(D)]),
          style: tr(v(j))
        }, [
          v(y) ? F(ie.$slots, "badge", { key: 0 }) : (g(), T("span", {
            key: 1,
            class: W(v(L))
          }, G(v(A)), 3))
        ], 6)) : H("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), Da = {
  active: { type: [Boolean, String], default: !1 },
  activeClass: { type: String, default: "router-link-active" },
  append: { type: [Boolean, String], default: !1 },
  disabled: { type: [Boolean, String], default: !1 },
  event: { type: [String, Array], default: "click" },
  exact: { type: [Boolean, String], default: !1 },
  exactActiveClass: { type: String, default: "router-link-exact-active" },
  href: { type: String },
  rel: { type: String, default: null },
  replace: { type: [Boolean, String], default: !1 },
  routerComponentName: { type: String, default: "router-link" },
  routerTag: { type: String, default: "a" },
  target: { type: String, default: "_self" },
  to: { type: [String, Object], default: null }
}, _2 = B({
  props: Da,
  emits: ["click"],
  setup(e, { emit: t, attrs: n }) {
    const a = C(b(e, "active")), r = C(b(e, "append")), i = C(b(e, "disabled")), o = C(b(e, "exact")), s = C(b(e, "replace")), l = Gy(), c = te(null), u = E(() => {
      const p = e.routerComponentName.split("-").map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join("");
      return (l == null ? void 0 : l.appContext.app.component(p)) === void 0 || i.value || !e.to ? "a" : e.routerComponentName;
    }), d = E(() => {
      const p = "#";
      if (e.href)
        return e.href;
      if (typeof e.to == "string")
        return e.to || p;
      const h = e.to;
      if (Object.prototype.toString.call(h) === "[object Object]" && (h.path || h.query || h.hash)) {
        const y = h.path || "", w = h.query ? `?${Object.keys(h.query).map((_) => `${_}=${h.query[_]}`).join("=")}` : "", m = !h.hash || h.hash.charAt(0) === "#" ? h.hash || "" : `#${h.hash}`;
        return `${y}${w}${m}` || p;
      }
      return p;
    }), f = E(() => ({
      to: e.to,
      href: d.value,
      target: e.target,
      rel: e.target === "_blank" && e.rel === null ? "noopener" : e.rel || null,
      tabindex: i.value ? "-1" : typeof n.tabindex > "u" ? null : n.tabindex,
      "aria-disabled": i.value ? "true" : null
    }));
    return {
      tag: u,
      routerAttr: f,
      link: c,
      clicked: (p) => {
        if (i.value) {
          p.preventDefault(), p.stopImmediatePropagation();
          return;
        }
        t("click", p);
      },
      activeBoolean: a,
      appendBoolean: r,
      disabledBoolean: i,
      replaceBoolean: s,
      exactBoolean: o
    };
  }
}), lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
function E2(e, t, n, a, r, i) {
  return e.tag === "router-link" ? (g(), z(ce(e.tag), ye({ key: 0 }, e.routerAttr, { custom: "" }), {
    default: N(({ href: o, navigate: s, isActive: l, isExactActive: c }) => [
      (g(), z(ce(e.routerTag), ye({
        ref: "link",
        href: o,
        class: [l && e.activeClass, c && e.exactActiveClass]
      }, e.$attrs, { onClick: s }), {
        default: N(() => [
          F(e.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (g(), z(ce(e.tag), ye({
    key: 1,
    ref: "link",
    class: { active: e.activeBoolean, disabled: e.disabledBoolean }
  }, e.routerAttr, { onClick: e.clicked }), {
    default: N(() => [
      F(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const xt = /* @__PURE__ */ lt(_2, [["render", E2]]), Qp = js(Da, ["event", "routerTag"]), w2 = B({
  components: { BLink: xt },
  props: {
    pill: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: [Boolean, String], default: !1 },
    dotIndicator: { type: [Boolean, String], default: !1 },
    ...Qp
  },
  setup(e) {
    const t = E(() => di(e)), n = E(() => t.value ? xt : e.tag), a = C(b(e, "pill")), r = C(b(e, "textIndicator")), i = C(b(e, "dotIndicator"));
    return {
      classes: E(() => ({
        [`bg-${e.variant}`]: e.variant,
        active: e.active,
        disabled: e.disabled,
        "text-dark": ["warning", "info", "light"].includes(e.variant),
        "rounded-pill": a.value,
        "position-absolute top-0 start-100 translate-middle": r.value || i.value,
        "p-2 border border-light rounded-circle": i.value,
        "text-decoration-none": t.value
      })),
      props: t.value ? ry(Qp, e) : {},
      computedTag: n
    };
  }
});
function S2(e, t, n, a, r, i) {
  return g(), z(ce(e.computedTag), ye({
    class: ["badge", e.classes]
  }, e.props), {
    default: N(() => [
      F(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const C2 = /* @__PURE__ */ lt(w2, [["render", S2]]), T2 = B({
  components: { BLink: xt },
  props: {
    ...js(Da, ["event", "routerTag"]),
    active: { type: [Boolean, String], default: !1 },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: [Boolean, String], default: !1 },
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = C(b(e, "active")), a = C(b(e, "disabled")), r = E(() => ({
      active: n.value
    })), i = E(
      () => n.value ? "span" : xt
    ), o = E(
      () => n.value ? e.ariaCurrent : void 0
    );
    return {
      liClasses: r,
      computedTag: i,
      computedAriaCurrent: o,
      clicked: (s) => {
        if (a.value || n.value) {
          s.preventDefault(), s.stopImmediatePropagation();
          return;
        }
        a.value || t("click", s);
      }
    };
  }
});
function k2(e, t, n, a, r, i) {
  return g(), T("li", {
    class: W(["breadcrumb-item", e.liClasses])
  }, [
    (g(), z(ce(e.computedTag), ye({ "aria-current": e.computedAriaCurrent }, e.$props, { onClick: e.clicked }), {
      default: N(() => [
        F(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const gy = /* @__PURE__ */ lt(T2, [["render", k2]]), x2 = { "aria-label": "breadcrumb" }, D2 = { class: "breadcrumb" }, A2 = /* @__PURE__ */ B({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(e) {
    const t = e, n = CP(), a = E(() => {
      const r = t.items || (n == null ? void 0 : n.items) || [];
      let i = !1;
      return r.map((o, s) => (typeof o == "string" && (o = { text: o }, s < r.length - 1 && (o.href = "#")), o.active && (i = !0), !o.active && !i && (o.active = s + 1 === r.length), o));
    });
    return (r, i) => (g(), T("nav", x2, [
      S("ol", D2, [
        F(r.$slots, "prepend"),
        (g(!0), T(Z, null, he(v(a), (o, s) => (g(), z(gy, ye({ key: s }, o), {
          default: N(() => [
            de(G(o.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        F(r.$slots, "default"),
        F(r.$slots, "append")
      ])
    ]));
  }
}), R2 = B({
  components: { BLink: xt },
  props: {
    ...Da,
    active: { type: [Boolean, String], default: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    href: { type: String, required: !1 },
    pill: { type: [Boolean, String], default: !1 },
    pressed: { type: [Boolean, String], default: !1 },
    rel: { type: String, default: void 0 },
    size: { type: String, default: "md" },
    squared: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "button" },
    target: { type: String, default: "_self" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "secondary" },
    loading: { type: [Boolean, String], default: !1 },
    loadingMode: { type: String, default: "inline" }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const n = C(b(e, "active")), a = C(b(e, "disabled")), r = C(b(e, "pill")), i = C(b(e, "pressed")), o = C(b(e, "squared")), s = E(() => i.value === !0), l = E(
      () => e.tag === "button" && e.href === void 0 && e.to === null
    ), c = E(() => di(e)), u = E(() => e.to !== null), d = E(
      () => e.href !== void 0 ? !1 : !l.value
    ), f = E(() => ({
      [`btn-${e.variant}`]: !!e.variant,
      [`btn-${e.size}`]: !!e.size,
      active: n.value || i.value,
      "rounded-pill": r.value,
      "rounded-0": o.value,
      disabled: a.value
    })), p = E(() => ({
      "aria-disabled": d.value ? a.value : null,
      "aria-pressed": s.value ? i.value : null,
      autocomplete: s.value ? "off" : null,
      disabled: l.value ? a.value : null,
      href: e.href,
      rel: c.value ? e.rel : null,
      role: d.value || c.value ? "button" : null,
      target: c.value ? e.target : null,
      type: l.value ? e.type : null,
      to: l.value ? null : e.to,
      append: c.value ? e.append : null,
      activeClass: u.value ? e.activeClass : null,
      event: u.value ? e.event : null,
      exact: u.value ? e.exact : null,
      exactActiveClass: u.value ? e.exactActiveClass : null,
      replace: u.value ? e.replace : null,
      routerComponentName: u.value ? e.routerComponentName : null,
      routerTag: u.value ? e.routerTag : null
    })), h = E(
      () => u.value ? xt : e.href ? "a" : e.tag
    );
    return {
      classes: f,
      attrs: p,
      computedTag: h,
      clicked: (y) => {
        if (a.value) {
          y.preventDefault(), y.stopPropagation();
          return;
        }
        t("click", y), s.value && t("update:pressed", !i.value);
      }
    };
  }
});
function I2(e, t, n, a, r, i) {
  const o = ge("BSpinner");
  return g(), z(ce(e.computedTag), ye({
    class: ["btn", e.classes]
  }, e.attrs, { onClick: e.clicked }), {
    default: N(() => [
      e.loading ? (g(), T("div", {
        key: 0,
        class: W(["btn-loading", { "mode-fill": e.loadingMode === "fill", "mode-inline": e.loadingMode === "inline" }])
      }, [
        F(e.$slots, "loading", {}, () => [
          P(o, {
            class: "btn-spinner",
            small: e.size !== "lg"
          }, null, 8, ["small"])
        ])
      ], 2)) : H("", !0),
      S("div", {
        class: W(["btn-content", { "btn-loading-fill": e.loading && e.loadingMode == "fill" }])
      }, [
        F(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const fi = /* @__PURE__ */ lt(R2, [["render", I2]]), O2 = /* @__PURE__ */ B({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: !1 }
  },
  setup(e) {
    const t = e, n = C(b(t, "vertical")), a = E(() => ({
      "btn-group": !n.value,
      "btn-group-vertical": n.value,
      [`btn-group-${t.size}`]: t.size !== void 0
    }));
    return (r, i) => (g(), z(ce(e.tag), {
      class: W(v(a)),
      role: "group",
      "aria-label": e.ariaLabel
    }, {
      default: N(() => [
        F(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), $2 = ["aria-label"], N2 = /* @__PURE__ */ B({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: !1 }
  },
  setup(e) {
    const t = C(b(e, "justify")), n = E(() => ({
      "justify-content-between": t.value
    }));
    return (a, r) => (g(), T("div", {
      class: W([v(n), "btn-toolbar"]),
      role: "toolbar",
      "aria-label": e.ariaLabel
    }, [
      F(a.$slots, "default")
    ], 10, $2));
  }
}), M2 = ["disabled", "aria-label"], yy = /* @__PURE__ */ B({
  __name: "BCloseButton",
  props: {
    disabled: { default: !1 },
    white: { default: !1 },
    ariaLabel: { default: "Close" }
  },
  setup(e) {
    const t = e, n = C(b(t, "disabled")), a = C(b(t, "white")), r = E(() => ({
      "btn-close-white": a.value
    }));
    return (i, o) => (g(), T("button", {
      type: "button",
      class: W(["btn-close", v(r)]),
      disabled: v(n),
      "aria-label": e.ariaLabel
    }, null, 10, M2));
  }
}), P2 = ["innerHTML"], B2 = ["innerHTML"], V2 = /* @__PURE__ */ B({
  __name: "BCard",
  props: {
    align: null,
    bgVariant: null,
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    borderVariant: null,
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: null,
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: null,
    imgAlt: null,
    imgBottom: { default: !1 },
    imgEnd: { default: !1 },
    imgHeight: null,
    imgLeft: { default: !1 },
    imgRight: { default: !1 },
    imgSrc: null,
    imgStart: { default: !1 },
    imgTop: { default: !1 },
    imgWidth: null,
    noBody: { default: !1 },
    overlay: { default: !1 },
    subTitle: null,
    subTitleTag: { default: "h6" },
    subTitleTextVariant: { default: "muted" },
    tag: { default: "div" },
    textVariant: null,
    title: null,
    titleTag: { default: "h4" }
  },
  setup(e) {
    const t = e, n = C(b(t, "imgBottom")), a = C(b(t, "imgEnd")), r = C(b(t, "imgLeft")), i = C(b(t, "imgRight")), o = C(b(t, "imgStart")), s = C(b(t, "imgTop")), l = C(b(t, "noBody")), c = C(b(t, "overlay")), u = E(() => ({
      [`text-${t.align}`]: t.align !== void 0,
      [`text-${t.textVariant}`]: t.textVariant !== void 0,
      [`bg-${t.bgVariant}`]: t.bgVariant !== void 0,
      [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
      "flex-row": r.value || o.value,
      "flex-row-reverse": a.value || i.value
    })), d = E(() => ({
      "card-body": !l.value,
      "card-img-overlay": c.value,
      [`bg-${t.bodyBgVariant}`]: t.bodyBgVariant !== void 0,
      [`text-${t.bodyTextVariant}`]: t.bodyTextVariant !== void 0
    })), f = E(() => ({
      [`bg-${t.footerBgVariant}`]: t.footerBgVariant !== void 0,
      [`border-${t.footerBorderVariant}`]: t.footerBorderVariant !== void 0,
      [`text-${t.footerTextVariant}`]: t.footerTextVariant !== void 0
    })), p = E(() => ({
      [`bg-${t.headerBgVariant}`]: t.headerBgVariant !== void 0,
      [`border-${t.headerBorderVariant}`]: t.headerBorderVariant !== void 0,
      [`text-${t.headerTextVariant}`]: t.headerTextVariant !== void 0
    })), h = E(() => ({
      "card-img": !a.value && !i.value && !o.value && !r.value && !s.value && !s.value,
      "card-img-right": a.value || i.value,
      "card-img-left": o.value || r.value,
      "card-img-top": s.value,
      "card-img-bottom": n.value
    })), y = E(() => ({
      src: t.imgSrc,
      alt: t.imgAlt,
      height: t.imgHeight,
      width: t.imgWidth
    })), w = E(() => ({
      [`text-${t.subTitleTextVariant}`]: !!t.subTitleTextVariant
    }));
    return (m, _) => (g(), z(ce(e.tag), {
      class: W(["card", v(u)])
    }, {
      default: N(() => [
        e.imgSrc && !v(n) ? (g(), T("img", ye({ key: 0 }, v(y), { class: v(h) }), null, 16)) : H("", !0),
        e.header || m.$slots.header || e.headerHtml ? (g(), z(ce(e.headerTag), {
          key: 1,
          class: W(["card-header", [e.headerClass, v(p)]])
        }, {
          default: N(() => [
            e.headerHtml ? (g(), T("div", {
              key: 0,
              innerHTML: e.headerHtml
            }, null, 8, P2)) : F(m.$slots, "header", { key: 1 }, () => [
              de(G(e.header), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : H("", !0),
        v(l) ? H("", !0) : (g(), z(ce(e.bodyTag), {
          key: 2,
          class: W([e.bodyClass, v(d)])
        }, {
          default: N(() => [
            e.title && !v(l) ? (g(), z(ce(e.titleTag), {
              key: 0,
              class: "card-title"
            }, {
              default: N(() => [
                de(G(e.title), 1)
              ]),
              _: 1
            })) : H("", !0),
            e.subTitle && !v(l) ? (g(), z(ce(e.subTitleTag), {
              key: 1,
              class: W(["card-subtitle mb-2", v(w)])
            }, {
              default: N(() => [
                de(G(e.subTitle), 1)
              ]),
              _: 1
            }, 8, ["class"])) : H("", !0),
            F(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["class"])),
        v(l) ? F(m.$slots, "default", { key: 3 }) : H("", !0),
        e.footer || m.$slots.footer || e.footerHtml ? (g(), z(ce(e.footerTag), {
          key: 4,
          class: W(["card-footer", [e.footerClass, v(f)]])
        }, {
          default: N(() => [
            e.footerHtml ? (g(), T("div", {
              key: 0,
              innerHTML: e.footerHtml
            }, null, 8, B2)) : F(m.$slots, "footer", { key: 1 }, () => [
              de(G(e.footer), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : H("", !0),
        e.imgSrc && v(n) ? (g(), T("img", ye({ key: 5 }, v(y), { class: v(h) }), null, 16)) : H("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), by = /* @__PURE__ */ B({
  __name: "BCardTitle",
  props: {
    title: null,
    titleTag: { default: "h4" }
  },
  setup(e) {
    return (t, n) => (g(), z(ce(e.titleTag), { class: "card-title" }, {
      default: N(() => [
        F(t.$slots, "default", {}, () => [
          de(G(e.title), 1)
        ])
      ]),
      _: 3
    }));
  }
}), _y = /* @__PURE__ */ B({
  __name: "BCardSubTitle",
  props: {
    subTitle: null,
    subTitleTag: { default: "h6" },
    subTitleTextVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`text-${t.subTitleTextVariant}`]: !!t.subTitleTextVariant
    }));
    return (a, r) => (g(), z(ce(e.subTitleTag), {
      class: W(["card-subtitle mb-2", v(n)])
    }, {
      default: N(() => [
        F(a.$slots, "default", {}, () => [
          de(G(e.subTitle), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L2 = /* @__PURE__ */ B({
  __name: "BCardBody",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    overlay: { default: !1 },
    subTitle: null,
    subTitleTag: { default: "h4" },
    subTitleTextVariant: null,
    title: null,
    titleTag: { default: "h4" }
  },
  setup(e) {
    const t = e;
    C(b(t, "overlay"));
    const n = E(() => ({
      [`text-${t.bodyTextVariant}`]: t.bodyTextVariant !== void 0,
      [`bg-${t.bodyBgVariant}`]: t.bodyBgVariant !== void 0
    }));
    return (a, r) => (g(), z(ce(e.bodyTag), {
      class: W(["card-body", v(n)])
    }, {
      default: N(() => [
        e.title ? (g(), z(by, {
          key: 0,
          "title-tag": e.titleTag,
          title: e.title
        }, null, 8, ["title-tag", "title"])) : H("", !0),
        e.subTitle ? (g(), z(_y, {
          key: 1,
          "sub-title-tag": e.subTitleTag,
          "sub-title": e.subTitle,
          "sub-title-text-variant": e.subTitleTextVariant
        }, null, 8, ["sub-title-tag", "sub-title", "sub-title-text-variant"])) : H("", !0),
        F(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), F2 = ["innerHTML"], H2 = /* @__PURE__ */ B({
  __name: "BCardFooter",
  props: {
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: null,
    footerTag: { default: "div" },
    footerTextVariant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`text-${t.footerTextVariant}`]: t.footerTextVariant !== void 0,
      [`bg-${t.footerBgVariant}`]: t.footerBgVariant !== void 0,
      [`border-${t.footerBorderVariant}`]: t.footerBorderVariant !== void 0
    }));
    return (a, r) => (g(), z(ce(e.footerTag), {
      class: W(["card-footer", [e.footerClass, v(n)]])
    }, {
      default: N(() => [
        e.footerHtml ? (g(), T("div", {
          key: 0,
          innerHTML: e.footerHtml
        }, null, 8, F2)) : F(a.$slots, "default", { key: 1 }, () => [
          de(G(e.footer), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), z2 = /* @__PURE__ */ B({
  __name: "BCardGroup",
  props: {
    columns: { default: !1 },
    deck: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, n = C(b(t, "columns")), a = C(b(t, "deck")), r = E(
      () => a.value ? "card-deck" : n.value ? "card-columns" : "card-group"
    );
    return (i, o) => (g(), z(ce(e.tag), {
      class: W(v(r))
    }, {
      default: N(() => [
        F(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), U2 = ["innerHTML"], j2 = /* @__PURE__ */ B({
  __name: "BCardHeader",
  props: {
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: null,
    headerTag: { default: "div" },
    headerTextVariant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`text-${t.headerTextVariant}`]: t.headerTextVariant !== void 0,
      [`bg-${t.headerBgVariant}`]: t.headerBgVariant !== void 0,
      [`border-${t.headerBorderVariant}`]: t.headerBorderVariant !== void 0
    }));
    return (a, r) => (g(), z(ce(e.headerTag), {
      class: W(["card-header", [e.headerClass, v(n)]])
    }, {
      default: N(() => [
        e.headerHtml ? (g(), T("div", {
          key: 0,
          innerHTML: e.headerHtml
        }, null, 8, U2)) : F(a.$slots, "default", { key: 1 }, () => [
          de(G(e.header), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), W2 = /* @__PURE__ */ B({
  __name: "BCardImg",
  props: {
    alt: { default: void 0 },
    bottom: { default: !1 },
    end: { default: !1 },
    height: null,
    left: { default: !1 },
    right: { default: !1 },
    src: null,
    start: { default: !1 },
    top: { default: !1 },
    width: null
  },
  setup(e) {
    const t = e, n = C(b(t, "bottom")), a = C(b(t, "end")), r = C(b(t, "left")), i = C(b(t, "right")), o = C(b(t, "start")), s = C(b(t, "top")), l = E(() => ({
      src: t.src,
      alt: t.alt,
      width: (typeof t.width == "number" ? t.width : parseInt(t.width, 10)) || void 0,
      height: (typeof t.height == "number" ? t.height : parseInt(t.height, 10)) || void 0
    })), c = E(() => {
      const u = r.value ? "float-left" : i.value ? "float-right" : "";
      let d = "card-img";
      return s.value ? d += "-top" : i.value || a.value ? d += "-right" : n.value ? d += "-bottom" : (r.value || o.value) && (d += "-left"), {
        [u]: !!u,
        [d]: !0
      };
    });
    return (u, d) => (g(), T("img", ye({ class: v(c) }, v(l)), null, 16));
  }
}), q2 = {}, G2 = { class: "card-text" };
function Y2(e, t) {
  return g(), T("p", G2, [
    F(e.$slots, "default")
  ]);
}
const K2 = /* @__PURE__ */ lt(q2, [["render", Y2]]), X2 = ["id"], Z2 = {
  key: 0,
  class: "carousel-indicators"
}, Q2 = ["data-bs-target", "data-bs-slide-to", "aria-label"], J2 = { class: "carousel-inner" }, eB = ["data-bs-target"], tB = /* @__PURE__ */ S("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), nB = /* @__PURE__ */ S("span", { class: "visually-hidden" }, "Previous", -1), aB = [
  tB,
  nB
], rB = ["data-bs-target"], iB = /* @__PURE__ */ S("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), oB = /* @__PURE__ */ S("span", { class: "visually-hidden" }, "Next", -1), sB = [
  iB,
  oB
], Ey = Symbol(), lB = /* @__PURE__ */ B({
  __name: "BCarousel",
  props: {
    id: null,
    imgHeight: null,
    imgWidth: null,
    background: null,
    modelValue: { default: 0 },
    controls: { default: !1 },
    indicators: { default: !1 },
    interval: { default: 5e3 },
    noTouch: { default: !1 },
    noWrap: { default: !1 }
  },
  emits: ["sliding-start", "sliding-end"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "controls")), r = C(b(n, "indicators")), i = C(b(n, "noTouch"));
    C(b(n, "noWrap"));
    const o = wa(), s = te(), l = te(), c = st(b(n, "id"), "accordion"), u = te([]);
    return Qe(s, "slide.bs.carousel", (d) => t("sliding-start", d)), Qe(s, "slid.bs.carousel", (d) => t("sliding-end", d)), je(() => {
      l.value = new xr(s.value, {
        wrap: !i.value,
        interval: n.interval,
        touch: !i.value
      }), o.default && (u.value = o.default().filter((d) => {
        var f;
        return ((f = d.type) == null ? void 0 : f.name) === "BCarouselSlide";
      }));
    }), ln(Ey, {
      background: n.background,
      width: n.imgWidth,
      height: n.imgHeight
    }), (d, f) => (g(), T("div", {
      id: v(c),
      ref_key: "element",
      ref: s,
      class: "carousel slide",
      "data-bs-ride": "carousel"
    }, [
      v(r) ? (g(), T("div", Z2, [
        (g(!0), T(Z, null, he(u.value, (p, h) => (g(), T("button", {
          key: h,
          type: "button",
          "data-bs-target": `#${v(c)}`,
          "data-bs-slide-to": h,
          class: W(h === 0 ? "active" : ""),
          "aria-current": "true",
          "aria-label": `Slide ${h}`
        }, null, 10, Q2))), 128))
      ])) : H("", !0),
      S("div", J2, [
        F(d.$slots, "default")
      ]),
      v(a) ? (g(), T(Z, { key: 1 }, [
        S("button", {
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": `#${v(c)}`,
          "data-bs-slide": "prev"
        }, aB, 8, eB),
        S("button", {
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": `#${v(c)}`,
          "data-bs-slide": "next"
        }, sB, 8, rB)
      ], 64)) : H("", !0)
    ], 8, X2));
  }
}), wy = /* @__PURE__ */ B({
  __name: "BImg",
  props: {
    alt: { default: void 0 },
    blank: { default: !1 },
    blankColor: { default: "transparent" },
    block: { default: !1 },
    center: { default: !1 },
    fluid: { default: !1 },
    lazy: { default: !1 },
    fluidGrow: { default: !1 },
    height: null,
    left: { default: !1 },
    right: { default: !1 },
    rounded: { type: [Boolean, String], default: !1 },
    sizes: null,
    src: null,
    srcset: null,
    thumbnail: { default: !1 },
    width: null
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "lazy")), r = C(b(n, "blank")), i = C(b(n, "block")), o = C(b(n, "center")), s = C(b(n, "fluid")), l = C(b(n, "fluidGrow")), c = C(b(n, "left")), u = C(b(n, "right")), d = C(b(n, "thumbnail")), f = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', p = (m, _, k) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      f.replace("%{w}", String(m)).replace("%{h}", String(_)).replace("%{f}", k)
    )}`, h = E(() => {
      let { src: m } = n, _ = (typeof n.width == "number" ? n.width : parseInt(n.width, 10)) || void 0, k = (typeof n.height == "number" ? n.height : parseInt(n.height, 10)) || void 0, x = "";
      typeof n.srcset == "string" ? x = n.srcset.split(",").filter((A) => A).join(",") : Array.isArray(n.srcset) && (x = n.srcset.filter((A) => A).join(","));
      let D = "";
      return typeof n.sizes == "string" ? D = n.sizes.split(",").filter((A) => A).join(",") : Array.isArray(n.sizes) && (D = n.sizes.filter((A) => A).join(",")), r.value && (!k && _ ? k = _ : !_ && k && (_ = k), !_ && !k && (_ = 1, k = 1), m = p(_, k, n.blankColor || "transparent"), x = "", D = ""), {
        src: m,
        alt: n.alt,
        width: _ || void 0,
        height: k || void 0,
        srcset: x || void 0,
        sizes: D || void 0,
        loading: a.value ? "lazy" : "eager"
      };
    }), y = E(
      () => c.value ? "float-start" : u.value ? "float-end" : o.value ? "mx-auto" : void 0
    ), w = E(() => ({
      "img-thumbnail": d.value,
      "img-fluid": s.value || l.value,
      "w-100": l.value,
      rounded: n.rounded === "" || n.rounded === !0,
      [`rounded-${n.rounded}`]: typeof n.rounded == "string" && n.rounded !== "",
      [`${y.value}`]: y.value !== void 0,
      "d-block": i.value || o.value
    }));
    return (m, _) => (g(), T("img", ye({ class: v(w) }, v(h), {
      onLoad: _[0] || (_[0] = (k) => t("load", k))
    }), null, 16));
  }
}), uB = ["id", "data-bs-interval"], cB = { key: 0 }, dB = ["innerHTML"], fB = { key: 0 }, pB = ["innerHTML"], vB = /* @__PURE__ */ B({
  __name: "BCarouselSlide",
  props: {
    imgSrc: null,
    imgHeight: null,
    imgWidth: null,
    interval: null,
    active: { default: !1 },
    background: null,
    caption: null,
    captionHtml: null,
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: null,
    id: null,
    imgAlt: null,
    imgBlank: { default: !1 },
    imgBlankColor: { default: "transparent" },
    text: null,
    textHtml: null,
    textTag: { default: "p" }
  },
  setup(e) {
    const t = e, n = C(b(t, "active")), a = C(b(t, "imgBlank")), r = ct(Ey, {}), i = st(b(t, "id"), "accordion");
    E(
      () => a.value ? a.value : t.imgSrc
    );
    const o = E(() => ({
      background: `${t.background || r.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), s = E(() => ({
      "d-none": t.contentVisibleUp !== void 0,
      [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
    })), l = E(() => t.text && !t.textHtml), c = E(() => t.textHtml), u = E(() => t.caption && !t.captionHtml), d = E(() => t.captionHtml), f = E(() => r.width), p = E(() => r.height);
    return (h, y) => (g(), T("div", {
      id: v(i),
      class: W(["carousel-item", { active: v(n) }]),
      "data-bs-interval": e.interval,
      style: tr(v(o))
    }, [
      F(h.$slots, "img", {}, () => [
        P(wy, {
          class: "d-block w-100",
          alt: e.imgAlt,
          src: e.imgSrc,
          width: e.imgWidth || v(f),
          height: e.imgHeight || v(p),
          blank: v(a),
          "blank-color": e.imgBlankColor
        }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
      ]),
      e.caption || e.captionHtml || e.text || e.textHtml || h.$slots.default ? (g(), z(ce(e.contentTag), {
        key: 0,
        class: W(["carousel-caption", v(s)])
      }, {
        default: N(() => [
          e.caption || e.captionHtml ? (g(), z(ce(e.captionTag), { key: 0 }, {
            default: N(() => [
              v(u) ? (g(), T("span", cB, G(e.caption), 1)) : H("", !0),
              v(d) ? (g(), T("span", {
                key: 1,
                innerHTML: e.captionHtml
              }, null, 8, dB)) : H("", !0)
            ]),
            _: 1
          })) : H("", !0),
          e.text || e.textHtml ? (g(), z(ce(e.textTag), { key: 1 }, {
            default: N(() => [
              v(l) ? (g(), T("span", fB, G(e.text), 1)) : H("", !0),
              v(c) ? (g(), T("span", {
                key: 1,
                innerHTML: e.textHtml
              }, null, 8, pB)) : H("", !0)
            ]),
            _: 1
          })) : H("", !0),
          F(h.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : H("", !0)
    ], 14, uB));
  }
}), Jp = zs("", [], { type: [Boolean, String, Number], default: !1 }), ev = zs("offset", [""], { type: [String, Number], default: null }), tv = zs("order", [""], { type: [String, Number], default: null }), hB = B({
  name: "BCol",
  props: {
    col: { type: [Boolean, String], default: !1 },
    cols: { type: [String, Number], default: null },
    ...Jp,
    offset: { type: [String, Number], default: null },
    ...ev,
    order: { type: [String, Number], default: null },
    ...tv,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(e) {
    const t = C(b(e, "col")), n = [
      { content: Jp, propPrefix: "cols", classPrefix: "col" },
      { content: ev, propPrefix: "offset" },
      { content: tv, propPrefix: "order" }
    ], a = E(
      () => n.flatMap((r) => Zg(e, r.content, r.propPrefix, r.classPrefix))
    );
    return {
      classes: E(() => ({
        col: t.value || !a.value.some((r) => /^col-/.test(r) && !e.cols),
        [`col-${e.cols}`]: !!e.cols,
        [`offset-${e.offset}`]: !!e.offset,
        [`order-${e.order}`]: !!e.order,
        [`align-self-${e.alignSelf}`]: !!e.alignSelf
      })),
      classList: a
    };
  }
});
function mB(e, t, n, a, r, i) {
  return g(), z(ce(e.tag), {
    class: W([e.classes, e.classList])
  }, {
    default: N(() => [
      F(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Mr = /* @__PURE__ */ lt(hB, [["render", mB]]), Ma = { delay: 5e3, value: !0, pos: "top-right" };
class nv {
  constructor(t) {
    Xe(this, "vm"), Xe(this, "containerPositions"), Ky(t) ? this.vm = t : this.vm = Ht(t), this.containerPositions = E(() => {
      const n = /* @__PURE__ */ new Set([]);
      return this.vm.toasts.map((a) => {
        a.options.pos && n.add(a.options.pos);
      }), n;
    });
  }
  toasts(t) {
    return t ? E(
      () => this.vm.toasts.filter((n) => {
        if (n.options.pos === t && n.options.value)
          return n;
      })
    ) : E(() => this.vm.toasts);
  }
  remove(...t) {
    this.vm.toasts = this.vm.toasts.filter((n) => {
      if (n.options.id && !t.includes(n.options.id))
        return n;
    });
  }
  isRoot() {
    var t;
    return (t = this.vm.root) != null ? t : !1;
  }
  show(t, n = Ma) {
    const a = { id: on(), ...Ma, ...n }, r = {
      options: Ht(a),
      content: t
    };
    return this.vm.toasts.push(r), r;
  }
  info(t, n = Ma) {
    return this.show(t, { variant: "info", ...n });
  }
  danger(t, n = Ma) {
    return this.show(t, { variant: "danger", ...n });
  }
  warning(t, n = Ma) {
    return this.show(t, { variant: "warning", ...n });
  }
  success(t, n = Ma) {
    return this.show(t, { variant: "success", ...n });
  }
  hide() {
  }
}
class gB {
  constructor() {
    Xe(this, "vms"), Xe(this, "rootInstance"), Xe(this, "useToast", Cy), this.vms = {};
  }
  getOrCreateViewModel(t) {
    if (!t) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      const n = { root: !0, toasts: [], container: void 0, id: Symbol("toast") };
      return this.rootInstance = n.id, this.vms[n.id] = n, n;
    }
    if (t.root) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      this.rootInstance = t.id;
    }
    return this.vms[t.id] = t, t;
  }
  getVM(t) {
    if (!t && this.rootInstance)
      return this.vms[this.rootInstance];
    if (t)
      return this.vms[t];
  }
}
const Lu = Symbol(), Sy = Symbol(), yB = {
  container: void 0,
  toasts: [],
  root: !1
};
function bB() {
  return ct(Sy);
}
function Cy(e, t = Lu) {
  const n = ct(bB());
  if (!e)
    return new nv(n.getOrCreateViewModel());
  const a = { id: Symbol("toastInstance") }, r = { ...yB, ...a, ...e }, i = n.getOrCreateViewModel(r);
  return new nv(i);
}
const _B = {
  install: (e, t = {}) => {
    var n, a, r, i;
    e.provide(Sy, (a = (n = t == null ? void 0 : t.BToast) == null ? void 0 : n.injectkey) != null ? a : Lu), e.provide((i = (r = t == null ? void 0 : t.BToast) == null ? void 0 : r.injectkey) != null ? i : Lu, new gB());
  }
}, Ty = {
  name: "",
  enterActiveClass: "",
  enterToClass: "",
  leaveActiveClass: "",
  leaveToClass: "showing",
  enterFromClass: "showing",
  leaveFromClass: ""
}, EB = {
  ...Ty,
  enterActiveClass: "fade showing",
  leaveActiveClass: "fade showing"
}, ts = B({
  props: {
    appear: { type: [Boolean, String], default: !1 },
    mode: { type: String, required: !1 },
    noFade: { type: [Boolean, String], default: !1 },
    transProps: { type: Object, required: !1 }
  },
  setup(e, { slots: t }) {
    const n = C(b(e, "appear")), a = C(b(e, "noFade")), r = te(e.transProps);
    return ny(r.value) || (r.value = a.value ? Ty : EB, n.value && (r.value = {
      ...r.value,
      appear: !0,
      appearClass: r.value.enterClass,
      appearActiveClass: r.value.enterActiveClass,
      appearToClass: r.value.enterToClass
    })), r.value = {
      mode: e.mode,
      ...r.value,
      css: !0
    }, () => me(
      ns,
      { ...r.value },
      {
        default: () => t.default ? t.default() : []
      }
    );
  }
}), wB = "toast-title", av = 1e3, ky = B({
  components: { BLink: xt },
  props: {
    ...Da,
    delay: { type: Number, default: 5e3 },
    bodyClass: { type: String },
    body: { type: [Object, String] },
    headerClass: { type: String },
    headerTag: { type: String, default: "div" },
    animation: { type: [Boolean, String], default: !0 },
    id: { type: String },
    isStatus: { type: [Boolean, String], default: !1 },
    autoHide: { type: [Boolean, String], default: !0 },
    noCloseButton: { type: [Boolean, String], default: !1 },
    noFade: { type: [Boolean, String], default: !1 },
    noHoverPause: { type: [Boolean, String], default: !1 },
    solid: { type: [Boolean, String], default: !1 },
    static: { type: [Boolean, String], default: !1 },
    title: { type: String },
    modelValue: { type: [Boolean, String], default: !1 },
    toastClass: { type: Array },
    variant: { type: String }
  },
  emits: ["destroyed", "update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    C(b(e, "animation"));
    const a = C(b(e, "isStatus")), r = C(b(e, "autoHide")), i = C(b(e, "noCloseButton")), o = C(b(e, "noFade")), s = C(b(e, "noHoverPause"));
    C(b(e, "solid")), C(b(e, "static"));
    const l = C(b(e, "modelValue")), c = te(!1), u = te(!1), d = te(!1), f = E(() => ({
      [`b-toast-${e.variant}`]: e.variant !== void 0,
      show: d.value || c.value
    }));
    let p, h, y;
    const w = () => {
      typeof p > "u" || (clearTimeout(p), p = void 0);
    }, m = E(
      () => Math.max(_r(e.delay, 0), av)
    ), _ = () => {
      l.value && (h = y = 0, w(), u.value = !0, ao(() => {
        d.value = !1;
      }));
    }, k = () => {
      w(), t("update:modelValue", !0), h = y = 0, u.value = !1, sn(() => {
        ao(() => {
          d.value = !0;
        });
      });
    }, x = () => {
      if (!r.value || s.value || !p || y)
        return;
      const Q = Date.now() - h;
      Q > 0 && (w(), y = Math.max(m.value - Q, av));
    }, D = () => {
      (!r.value || s.value || !y) && (y = h = 0), A();
    };
    $e(
      () => l.value,
      (Q) => {
        Q ? k() : _();
      }
    );
    const A = () => {
      w(), r.value && (p = setTimeout(_, y || m.value), h = Date.now(), y = 0);
    }, L = () => {
      c.value = !0, t("update:modelValue", !0);
    }, $ = () => {
      c.value = !1, A();
    }, O = () => {
      c.value = !0;
    }, j = () => {
      c.value = !1, y = h = 0, t("update:modelValue", !1);
    };
    Yy(() => {
      w(), r.value && t("destroyed", e.id);
    }), je(() => {
      sn(() => {
        l.value && ao(() => {
          k();
        });
      });
    });
    const X = () => {
      sn(() => {
        ao(() => {
          _();
        });
      });
    };
    return () => {
      const Q = () => {
        const re = [], J = St(wB, { hide: _ }, n);
        J ? re.push(me(J)) : e.title && re.push(me("strong", { class: "me-auto" }, e.title)), !i.value && re.length !== 0 && re.push(
          me(yy, {
            class: ["btn-close"],
            onClick: () => {
              _();
            }
          })
        );
        const Ce = [];
        if (re.length > 0 && Ce.push(
          me(
            e.headerTag,
            {
              class: "toast-header"
            },
            { default: () => re }
          )
        ), St("default", { hide: _ }, n) || e.body) {
          const ue = me(
            di(e) ? "b-link" : "div",
            {
              class: ["toast-body", e.bodyClass],
              onClick: di(e) ? { click: X } : {}
            },
            St("default", { hide: _ }, n) || e.body
          );
          Ce.push(ue);
        }
        return me(
          "div",
          {
            class: ["toast", e.toastClass, f.value],
            tabindex: "0"
          },
          Ce
        );
      };
      return me(
        "div",
        {
          class: ["b-toast"],
          id: e.id,
          role: u.value ? null : a.value ? "status" : "alert",
          "aria-live": u.value ? null : a.value ? "polite" : "assertive",
          "aria-atomic": u.value ? null : "true",
          onmouseenter: x,
          onmouseleave: D
        },
        [
          me(
            ts,
            {
              noFade: o.value,
              onAfterEnter: $,
              onBeforeEnter: L,
              onAfterLeave: j,
              onBeforeLeave: O
            },
            () => [d.value ? Q() : ""]
          )
        ]
      );
    };
  }
}), Fu = /* @__PURE__ */ B({
  __name: "BToaster",
  props: {
    position: { default: "top-right" },
    instance: null
  },
  setup(e) {
    const t = e, n = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, a = E(() => n[t.position]), r = (i) => {
      var o;
      (o = t.instance) == null || o.remove(i);
    };
    return (i, o) => {
      var s;
      return g(), T("div", {
        class: W([[v(a)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (g(!0), T(Z, null, he((s = e.instance) == null ? void 0 : s.toasts(e.position).value, (l) => (g(), z(ky, {
          id: l.options.id,
          key: l.options.id,
          modelValue: l.options.value,
          "onUpdate:modelValue": (c) => l.options.value = c,
          delay: l.options.delay,
          title: l.content.title,
          body: l.content.body,
          component: l.content.body,
          variant: l.options.variant,
          onDestroyed: r
        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "delay", "title", "body", "component", "variant"]))), 128))
      ], 2);
    };
  }
}), SB = B({
  name: "BContainer",
  props: {
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    fluid: { type: [Boolean, String], default: !1 },
    toast: { type: Object },
    position: { type: String, required: !1 }
  },
  setup(e, { slots: t, expose: n }) {
    const a = te();
    let r;
    const i = E(() => ({
      container: !e.fluid,
      ["container-fluid"]: typeof e.fluid == "boolean" && e.fluid,
      [`container-${e.fluid}`]: typeof e.fluid == "string",
      [`gx-${e.gutterX}`]: e.gutterX !== null,
      [`gy-${e.gutterY}`]: e.gutterY !== null
    }));
    return je(() => {
      e.toast;
    }), e.toast && (r = Cy({ container: a, root: e.toast.root }), n({})), () => {
      var o;
      const s = [];
      return r == null || r.containerPositions.value.forEach((l) => {
        s.push(me(Fu, { key: l, instance: r, position: l }));
      }), me("div", { class: [i.value, e.position], ref: a }, [
        ...s,
        (o = t.default) == null ? void 0 : o.call(t)
      ]);
    };
  },
  methods: {}
}), CB = { class: "visually-hidden" }, TB = ["aria-labelledby", "role"], xy = /* @__PURE__ */ B({
  __name: "BDropdown",
  props: {
    id: null,
    menuClass: null,
    size: null,
    splitClass: null,
    splitVariant: null,
    text: null,
    toggleClass: null,
    autoClose: { type: [Boolean, String], default: !0 },
    block: { default: !1 },
    boundary: { default: "clippingParents" },
    dark: { default: !1 },
    disabled: { default: !1 },
    isNav: { default: !1 },
    dropup: { default: !1 },
    dropright: { default: !1 },
    dropleft: { default: !1 },
    noFlip: { default: !1 },
    offset: { default: 0 },
    popperOpts: { default: () => ({}) },
    right: { default: !1 },
    role: { default: "menu" },
    split: { default: !1 },
    splitButtonType: { default: "button" },
    splitHref: { default: void 0 },
    noCaret: { default: !1 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" }
  },
  emits: ["show", "shown", "hide", "hidden", "click", "toggle"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = C(b(a, "block")), i = C(b(a, "dark")), o = C(b(a, "disabled")), s = C(b(a, "dropup")), l = C(b(a, "dropright")), c = C(b(a, "isNav")), u = C(b(a, "dropleft")), d = C(b(a, "right")), f = C(b(a, "split")), p = C(b(a, "noCaret")), h = te(), y = te(), w = te(), m = st(b(a, "id"), "dropdown");
    Qe(h, "show.bs.dropdown", () => n("show")), Qe(h, "shown.bs.dropdown", () => n("shown")), Qe(h, "hide.bs.dropdown", () => n("hide")), Qe(h, "hidden.bs.dropdown", () => n("hidden"));
    const _ = (O) => {
      f.value && n("click", O);
    }, k = E(() => ({
      "d-grid": r.value,
      "d-flex": r.value && f.value
    })), x = E(() => ({
      "nav-link": c.value,
      "dropdown-toggle": !f.value,
      "dropdown-toggle-no-caret": p.value && !f.value,
      "w-100": f.value && r.value
    })), D = E(() => ({
      "dropdown-menu-dark": i.value,
      "dropdown-menu-right": d.value
    })), A = E(() => ({
      "data-bs-toggle": f.value ? void 0 : "dropdown",
      "aria-expanded": f.value ? void 0 : !1,
      ref: f.value ? void 0 : y,
      href: f.value ? a.splitHref : void 0
    })), L = E(() => ({
      ref: f.value ? y : void 0
    })), $ = () => {
      var O;
      (O = w.value) == null || O.hide();
    };
    return je(() => {
      var O;
      w.value = new Ft((O = y.value) == null ? void 0 : O.$el, {
        autoClose: a.autoClose,
        boundary: a.boundary,
        offset: a.offset ? a.offset.toString() : "",
        reference: a.offset || f.value ? "parent" : "toggle",
        popperConfig: (j) => {
          const X = {
            placement: "bottom-start",
            modifiers: a.noFlip ? [
              {
                name: "flip",
                options: {
                  fallbackPlacements: []
                }
              }
            ] : []
          };
          return s.value ? X.placement = d.value ? "top-end" : "top-start" : l.value ? X.placement = "right-start" : u.value ? X.placement = "left-start" : d.value && (X.placement = "bottom-end"), Pu(j, Pu(X, a.popperOpts));
        }
      });
    }), t({
      hide: $
    }), (O, j) => (g(), T("div", {
      ref_key: "parent",
      ref: h,
      class: W([v(k), "btn-group"])
    }, [
      P(fi, ye({
        id: v(m),
        variant: e.splitVariant || e.variant,
        size: e.size,
        class: [v(x), v(f) ? e.splitClass : e.toggleClass],
        disabled: v(o),
        type: e.splitButtonType
      }, v(A), { onClick: _ }), {
        default: N(() => [
          de(G(e.text) + " ", 1),
          F(O.$slots, "button-content")
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      v(f) ? (g(), z(fi, ye({
        key: 0,
        variant: e.variant,
        size: e.size,
        disabled: v(o)
      }, v(L), {
        class: [e.toggleClass, "dropdown-toggle-split dropdown-toggle"],
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: j[0] || (j[0] = (X) => n("toggle"))
      }), {
        default: N(() => [
          S("span", CB, G(e.toggleText), 1)
        ]),
        _: 1
      }, 16, ["variant", "size", "disabled", "class"])) : H("", !0),
      S("ul", {
        class: W(["dropdown-menu", [e.menuClass, v(D)]]),
        "aria-labelledby": v(m),
        role: e.role
      }, [
        F(O.$slots, "default")
      ], 10, TB)
    ], 2));
  }
}), kB = { role: "presentation" }, xB = /* @__PURE__ */ B({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(e) {
    return (t, n) => (g(), T("li", kB, [
      (g(), z(ce(e.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), DB = {}, AB = { role: "presentation" }, RB = { class: "px-4 py-3" };
function IB(e, t) {
  return g(), T("li", AB, [
    S("form", RB, [
      F(e.$slots, "default")
    ])
  ]);
}
const OB = /* @__PURE__ */ lt(DB, [["render", IB]]), $B = { role: "presentation" }, NB = ["id", "aria-describedby"], MB = {
  inheritAttrs: !1
}, PB = /* @__PURE__ */ B({
  ...MB,
  __name: "BDropdownGroup",
  props: {
    id: null,
    ariaDescribedby: null,
    header: null,
    headerClasses: { default: void 0 },
    headerTag: { default: "header" },
    headerVariant: { default: void 0 }
  },
  setup(e) {
    const t = e, n = E(
      () => t.id ? [t.id, "group_dd_header"].join("_") : void 0
    ), a = E(
      () => t.headerTag === "header" ? void 0 : "heading"
    ), r = E(() => ({
      [`text-${t.headerVariant}`]: !!t.headerVariant
    }));
    return (i, o) => (g(), T("li", $B, [
      (g(), z(ce(e.headerTag), {
        id: v(n),
        class: W(["dropdown-header", [v(r), e.headerClasses]]),
        role: v(a)
      }, {
        default: N(() => [
          F(i.$slots, "header", {}, () => [
            de(G(e.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      S("ul", ye({
        id: e.id,
        role: "group",
        class: "list-unstyled"
      }, i.$attrs, {
        "aria-describedby": e.ariaDescribedby || v(n)
      }), [
        F(i.$slots, "default")
      ], 16, NB)
    ]));
  }
}), BB = {}, VB = { class: "dropdown-header" };
function LB(e, t) {
  return g(), T("li", null, [
    S("h6", VB, [
      F(e.$slots, "default")
    ])
  ]);
}
const FB = /* @__PURE__ */ lt(BB, [["render", LB]]), HB = { role: "presentation" }, zB = {
  inheritAttrs: !1
}, UB = /* @__PURE__ */ B({
  ...zB,
  __name: "BDropdownItem",
  props: {
    href: null,
    linkClass: null,
    active: { default: !1 },
    disabled: { default: !1 },
    rel: { default: void 0 },
    target: { default: "_self" },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "active")), r = C(b(n, "disabled")), i = dv(), o = E(() => ({
      active: a.value,
      disabled: r.value,
      [`text-${n.variant}`]: !!n.variant
    })), s = E(
      () => n.href ? "a" : i.to ? xt : "button"
    ), l = E(() => ({
      "aria-current": a.value ? "true" : null,
      href: s.value === "a" ? n.href : null,
      rel: n.rel,
      type: s.value === "button" ? "button" : null,
      target: n.target,
      ...i.to ? { activeClass: "active", ...i } : {}
    })), c = (u) => t("click", u);
    return (u, d) => (g(), T("li", HB, [
      (g(), z(ce(v(s)), ye({
        class: ["dropdown-item", [v(o), e.linkClass]]
      }, v(l), { onClick: c }), {
        default: N(() => [
          F(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ]));
  }
}), jB = { role: "presentation" }, WB = {
  inheritAttrs: !1
}, qB = /* @__PURE__ */ B({
  ...WB,
  __name: "BDropdownItemButton",
  props: {
    buttonClass: null,
    active: { default: !1 },
    activeClass: { default: "active" },
    disabled: { default: !1 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "active")), r = C(b(n, "disabled")), i = E(() => ({
      [n.activeClass]: a.value,
      disabled: r.value,
      [`text-${n.variant}`]: !!n.variant
    })), o = E(() => ({
      role: "menuitem",
      type: "button",
      disabled: r.value
    })), s = (l) => t("click", l);
    return (l, c) => (g(), T("li", jB, [
      S("button", ye({
        class: ["dropdown-item", [v(i), e.buttonClass]]
      }, v(o), { onClick: s }), [
        F(l.$slots, "default")
      ], 16)
    ]));
  }
}), GB = {}, YB = { role: "presentation" }, KB = { class: "px-4 py-1 mb-0 text-muted" };
function XB(e, t) {
  return g(), T("li", YB, [
    S("p", KB, [
      F(e.$slots, "default")
    ])
  ]);
}
const ZB = /* @__PURE__ */ lt(GB, [["render", XB]]), QB = ["id", "novalidate", "onSubmit"], Dy = /* @__PURE__ */ B({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "floating")), r = C(b(n, "novalidate")), i = C(b(n, "validated")), o = E(() => ({
      "form-floating": a.value,
      "was-validated": i.value
    })), s = (l) => t("submit", l);
    return (l, c) => (g(), T("form", {
      id: e.id,
      novalidate: v(r),
      class: W(v(o)),
      onSubmit: ra(s, ["prevent"])
    }, [
      F(l.$slots, "default")
    ], 42, QB));
  }
}), JB = { class: "form-floating" }, eV = ["for"], tV = /* @__PURE__ */ B({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null
  },
  setup(e) {
    return (t, n) => (g(), T("div", JB, [
      F(t.$slots, "default"),
      S("label", { for: e.labelFor }, G(e.label), 9, eV)
    ]));
  }
}), Hu = /* @__PURE__ */ B({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    role: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(e) {
    const t = e, n = C(b(t, "forceShow")), a = t.state !== void 0 ? C(b(t, "state")) : E(() => {
    }), r = C(b(t, "tooltip")), i = E(
      () => n.value === !0 || a.value === !1
    ), o = E(() => ({
      "d-block": i.value,
      "invalid-feedback": !r.value,
      "invalid-tooltip": r.value
    })), s = E(() => ({
      id: t.id || null,
      role: t.role || null,
      "aria-live": t.ariaLive || null,
      "aria-atomic": t.ariaLive ? "true" : null
    }));
    return (l, c) => (g(), z(ce(e.tag), ye({ class: v(o) }, v(s)), {
      default: N(() => [
        F(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wo = /* @__PURE__ */ B({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, n) => (g(), z(ce(e.tag), { class: "row d-flex flex-wrap" }, {
      default: N(() => [
        F(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zu = /* @__PURE__ */ B({
  __name: "BFormText",
  props: {
    id: null,
    inline: { default: !1 },
    tag: { default: "small" },
    textVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, n = C(b(t, "inline")), a = E(() => ({
      "form-text": !n.value,
      [`text-${t.textVariant}`]: !!t.textVariant
    })), r = E(() => ({
      id: t.id || null
    }));
    return (i, o) => (g(), z(ce(e.tag), ye({ class: v(a) }, v(r)), {
      default: N(() => [
        F(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uu = /* @__PURE__ */ B({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    role: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(e) {
    const t = e, n = C(b(t, "forceShow")), a = t.state !== void 0 ? C(b(t, "state")) : E(() => {
    }), r = C(b(t, "tooltip")), i = E(
      () => n.value === !0 || a.value === !0
    ), o = E(() => ({
      "d-block": i.value,
      "valid-feedback": !r.value,
      "valid-tooltip": r.value
    })), s = E(() => ({
      id: t.id || null,
      role: t.role || null,
      "aria-live": t.ariaLive || null,
      "aria-atomic": t.ariaLive ? "true" : null
    }));
    return (l, c) => (g(), z(ce(e.tag), ye({ class: v(o) }, v(s)), {
      default: N(() => [
        F(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nV = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], aV = ["for"], rV = {
  inheritAttrs: !1
}, Ay = /* @__PURE__ */ B({
  ...rV,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    indeterminate: null,
    name: null,
    id: { default: void 0 },
    autofocus: { default: !1 },
    plain: { default: !1 },
    button: { default: !1 },
    switch: { default: !1 },
    disabled: { default: !1 },
    buttonVariant: { default: "secondary" },
    inline: { default: !1 },
    required: { default: void 0 },
    size: { default: "md" },
    state: { default: void 0 },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number], default: !1 },
    value: { type: [Array, Set, Boolean, String, Object, Number], default: !0 },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number], default: void 0 }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(e, { emit: t }) {
    const n = e, a = n.indeterminate !== void 0 ? C(b(n, "indeterminate")) : E(() => {
    }), r = C(b(n, "autofocus")), i = C(b(n, "plain")), o = C(b(n, "button")), s = C(b(n, "switch")), l = C(b(n, "disabled")), c = C(b(n, "inline")), u = n.required !== void 0 ? C(b(n, "required")) : E(() => {
    }), d = n.state !== void 0 ? C(b(n, "state")) : E(() => {
    }), f = st(b(n, "id"), "form-check"), p = te(null), h = te(!1), y = E({
      get: () => n.uncheckedValue ? Array.isArray(n.modelValue) ? n.modelValue.indexOf(n.value) > -1 : n.modelValue === n.value : n.modelValue,
      set: (D) => {
        let A = D;
        Array.isArray(n.modelValue) ? n.uncheckedValue && (A = n.modelValue, D ? (A.indexOf(n.uncheckedValue) > -1 && A.splice(A.indexOf(n.uncheckedValue), 1), A.push(n.value)) : (A.indexOf(n.value) > -1 && A.splice(A.indexOf(n.value), 1), A.push(n.uncheckedValue))) : A = D ? n.value : n.uncheckedValue, t("input", A), t("update:modelValue", A), t("change", A);
      }
    }), w = E(() => Array.isArray(n.modelValue) ? n.modelValue.indexOf(n.value) > -1 : JSON.stringify(n.modelValue) === JSON.stringify(n.value)), m = Ht({
      plain: b(i, "value"),
      button: b(o, "value"),
      inline: b(c, "value"),
      switch: b(s, "value"),
      size: b(n, "size"),
      state: b(d, "value"),
      buttonVariant: b(n, "buttonVariant")
    }), _ = iy(m), k = oy(m), x = sy(m);
    return je(() => {
      r.value && p.value.focus();
    }), (D, A) => (g(), T("div", {
      class: W(v(_))
    }, [
      Ue(S("input", ye({ id: v(f) }, D.$attrs, {
        ref_key: "input",
        ref: p,
        "onUpdate:modelValue": A[0] || (A[0] = (L) => gt(y) ? y.value = L : null),
        class: v(k),
        type: "checkbox",
        disabled: v(l),
        required: !!e.name && !!v(u),
        name: e.name,
        form: e.form,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        "aria-required": e.name && v(u) ? "true" : void 0,
        value: e.value,
        indeterminate: v(a),
        onFocus: A[1] || (A[1] = (L) => h.value = !0),
        onBlur: A[2] || (A[2] = (L) => h.value = !1)
      }), null, 16, nV), [
        [pa, v(y)]
      ]),
      D.$slots.default || !v(i) ? (g(), T("label", {
        key: 0,
        for: v(f),
        class: W([v(x), { active: v(w), focus: h.value }])
      }, [
        F(D.$slots, "default")
      ], 10, aV)) : H("", !0)
    ], 2));
  }
}), iV = ["id"], oV = ["innerHTML"], sV = ["textContent"], lV = /* @__PURE__ */ B({
  __name: "BFormCheckboxGroup",
  props: {
    id: null,
    form: null,
    modelValue: { default: () => [] },
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    name: null,
    options: { default: () => [] },
    plain: { default: !1 },
    required: { default: !1 },
    size: null,
    stacked: { default: !1 },
    state: { default: void 0 },
    switches: { default: !1 },
    textField: { default: "text" },
    validated: { default: !1 },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e;
    C(b(n, "autofocus"));
    const a = C(b(n, "buttons")), r = C(b(n, "disabled"));
    C(b(n, "plain"));
    const i = C(b(n, "required")), o = C(b(n, "stacked")), s = n.state !== void 0 ? C(b(n, "state")) : E(() => {
    }), l = C(b(n, "switches")), c = C(b(n, "validated")), u = wa(), d = "BFormCheckbox", f = st(b(n, "id"), "checkbox"), p = st(b(n, "name"), "checkbox"), h = E({
      get: () => n.modelValue,
      set: (k) => {
        if (JSON.stringify(k) === JSON.stringify(n.modelValue))
          return;
        const x = n.options.filter(
          (D) => k.map((A) => JSON.stringify(A)).includes(JSON.stringify(typeof D == "string" ? D : D[n.valueField]))
        ).map((D) => typeof D == "string" ? D : D[n.valueField]);
        t("input", x), t("update:modelValue", x), t("change", x);
      }
    }), y = E(
      () => (u.first ? es(u.first(), d, r.value) : []).concat(n.options.map((k) => cy(k, n))).concat(u.default ? es(u.default(), d, r.value) : []).map((k, x) => dy(k, x, n, p, f)).map((k) => ({
        ...k,
        props: {
          switch: l.value,
          ...k.props
        }
      }))
    ), w = Ht({
      required: b(i, "value"),
      ariaInvalid: b(n, "ariaInvalid"),
      state: b(s, "value"),
      validated: b(c, "value"),
      buttons: b(a, "value"),
      stacked: b(o, "value"),
      size: b(n, "size")
    }), m = ly(w), _ = uy(w);
    return (k, x) => (g(), T("div", ye(v(m), {
      id: v(f),
      role: "group",
      class: [v(_), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (g(!0), T(Z, null, he(v(y), (D, A) => (g(), z(Ay, ye({
        key: A,
        modelValue: v(h),
        "onUpdate:modelValue": x[0] || (x[0] = (L) => gt(h) ? h.value = L : null)
      }, D.props), {
        default: N(() => [
          D.html ? (g(), T("span", {
            key: 0,
            innerHTML: D.html
          }, null, 8, oV)) : (g(), T("span", {
            key: 1,
            textContent: G(D.text)
          }, null, 8, sV))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, iV));
  }
}), Ry = ["input", "select", "textarea"], uV = Ry.map((e) => `${e}:not([disabled])`).join(), cV = [...Ry, "a", "button", "label"], dV = "label", fV = "invalid-feedback", pV = "valid-feedback", vV = "description", hV = "default", mV = B({
  components: { BCol: Mr, BFormInvalidFeedback: Hu, BFormRow: wo, BFormText: zu, BFormValidFeedback: Uu },
  props: {
    contentCols: { type: [Boolean, String, Number], required: !1 },
    contentColsLg: { type: [Boolean, String, Number], required: !1 },
    contentColsMd: { type: [Boolean, String, Number], required: !1 },
    contentColsSm: { type: [Boolean, String, Number], required: !1 },
    contentColsXl: { type: [Boolean, String, Number], required: !1 },
    description: { type: [String], required: !1 },
    disabled: { type: [Boolean, String], default: !1 },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, required: !1 },
    invalidFeedback: { type: String, required: !1 },
    label: { type: String, required: !1 },
    labelAlign: { type: [Boolean, String, Number], required: !1 },
    labelAlignLg: { type: [Boolean, String, Number], required: !1 },
    labelAlignMd: { type: [Boolean, String, Number], required: !1 },
    labelAlignSm: { type: [Boolean, String, Number], required: !1 },
    labelAlignXl: { type: [Boolean, String, Number], required: !1 },
    labelClass: { type: [Array, Object, String], required: !1 },
    labelCols: { type: [Boolean, String, Number], required: !1 },
    labelColsLg: { type: [Boolean, String, Number], required: !1 },
    labelColsMd: { type: [Boolean, String, Number], required: !1 },
    labelColsSm: { type: [Boolean, String, Number], required: !1 },
    labelColsXl: { type: [Boolean, String, Number], required: !1 },
    labelFor: { type: String, required: !1 },
    labelSize: { type: String, required: !1 },
    labelSrOnly: { type: [Boolean, String], default: !1 },
    state: { type: [Boolean, String], default: null },
    tooltip: { type: [Boolean, String], default: !1 },
    validFeedback: { type: String, required: !1 },
    validated: { type: [Boolean, String], default: !1 },
    floating: { type: [Boolean, String], default: !1 }
  },
  setup(e, { attrs: t }) {
    const n = C(b(e, "disabled")), a = C(b(e, "labelSrOnly")), r = C(b(e, "state")), i = C(b(e, "tooltip")), o = C(b(e, "validated")), s = C(b(e, "floating")), l = null, c = ["xs", "sm", "md", "lg", "xl"], u = (D, A) => c.reduce((L, $) => {
      const O = D[Xp($, `${A}Align`)] || null;
      return O && L.push(["text", $, O].filter((j) => j).join("-")), L;
    }, []), d = (D, A) => c.reduce((L, $) => {
      let O = D[Xp($, `${A}Cols`)];
      return O = O === "" ? !0 : O || !1, !Hl(O) && O !== "auto" && (O = GP(O, 0), O = O > 0 ? O : !1), O && (L[$ || (Hl(O) ? "col" : "cols")] = O), L;
    }, {}), f = te(), p = (D, A = null) => {
      if (RP && e.labelFor) {
        const L = BP(`#${DP(e.labelFor)}`, f);
        if (L) {
          const $ = "aria-describedby", O = (D || "").split(Eo), j = (A || "").split(Eo), X = (Xg(L, $) || "").split(Eo).filter((Q) => !TP(j, Q)).concat(O).filter((Q, re, J) => J.indexOf(Q) === re).filter((Q) => Q).join(" ").trim();
          X ? LP(L, $, X) : FP(L, $);
        }
      }
    }, h = E(() => d(e, "content")), y = E(() => u(e, "label")), w = E(() => d(e, "label")), m = E(
      () => Object.keys(h.value).length > 0 || Object.keys(w.value).length > 0
    ), _ = E(
      () => Hl(r.value) ? r.value : null
    ), k = E(() => {
      const D = _.value;
      return D === !0 ? "is-valid" : D === !1 ? "is-invalid" : null;
    }), x = E(
      () => Us(t.ariaInvalid, r.value)
    );
    return $e(
      () => l,
      (D, A) => {
        D !== A && p(D, A);
      }
    ), je(() => {
      sn(() => {
        p(l);
      });
    }), {
      disabledBoolean: n,
      labelSrOnlyBoolean: a,
      stateBoolean: r,
      tooltipBoolean: i,
      validatedBoolean: o,
      floatingBoolean: s,
      ariaDescribedby: l,
      computedAriaInvalid: x,
      contentColProps: h,
      isHorizontal: m,
      labelAlignClasses: y,
      labelColProps: w,
      onLegendClick: (D) => {
        if (e.labelFor)
          return;
        const { target: A } = D, L = A ? A.tagName : "";
        if (cV.indexOf(L) !== -1)
          return;
        const $ = VP(uV, f).filter(PP);
        $.length === 1 && NP($[0]);
      },
      stateClass: k
    };
  },
  render() {
    const e = this.$props, t = this.$slots, n = st(), a = !e.labelFor;
    let r = null;
    const i = St(dV, {}, t) || e.label, o = i ? on("_BV_label_") : null;
    if (i || this.isHorizontal) {
      const x = a ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        i && (r = me(
          x,
          {
            class: "visually-hidden",
            id: o,
            for: e.labelFor || null
          },
          i
        )), this.isHorizontal ? r = me(Mr, this.labelColProps, { default: () => r }) : r = me("div", {}, [r]);
      else {
        const D = {
          onClick: a ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? x : null,
          id: o,
          for: e.labelFor || null,
          tabIndex: a ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": a,
              "col-form-label": this.isHorizontal || a,
              "pt-0": !this.isHorizontal && a,
              "d-block": !this.isHorizontal && !a,
              [`col-form-label-${e.labelSize}`]: !!e.labelSize
            },
            this.labelAlignClasses,
            e.labelClass
          ]
        };
        this.isHorizontal ? r = me(Mr, D, { default: () => i }) : r = me(x, D, i);
      }
    }
    let s = null;
    const l = St(fV, {}, t) || this.invalidFeedback, c = l ? on("_BV_feedback_invalid_") : void 0;
    l && (s = me(
      Hu,
      {
        ariaLive: e.feedbackAriaLive,
        id: c,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => l }
    ));
    let u = null;
    const d = St(pV, {}, t) || this.validFeedback, f = d ? on("_BV_feedback_valid_") : void 0;
    d && (u = me(
      Uu,
      {
        ariaLive: e.feedbackAriaLive,
        id: f,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => d }
    ));
    let p = null;
    const h = St(vV, {}, t) || this.description, y = h ? on("_BV_description_") : void 0;
    h && (p = me(
      zu,
      {
        id: y
      },
      { default: () => h }
    ));
    const w = this.ariaDescribedby = [
      y,
      this.stateBoolean === !1 ? c : null,
      this.stateBoolean === !0 ? f : null
    ].filter((x) => x).join(" ") || null, m = [
      St(hV, { ariaDescribedby: w, descriptionId: y, id: n, labelId: o }, t) || "",
      s,
      u,
      p
    ];
    !this.isHorizontal && this.floatingBoolean && m.push(r);
    let _ = me(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      m
    );
    this.isHorizontal && (_ = me(Mr, { ref: "content", ...this.contentColProps }, { default: () => m }));
    const k = {
      class: [
        "mb-3",
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: st(b(e, "id")).value,
      disabled: a ? this.disabledBoolean : null,
      role: a ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      "aria-labelledby": a && this.isHorizontal ? o : null
    };
    return this.isHorizontal && !a ? me(wo, k, { default: () => [r, _] }) : me(
      a ? "fieldset" : "div",
      k,
      this.isHorizontal && a ? [me(wo, {}, { default: () => [r, _] })] : this.isHorizontal || !this.floatingBoolean ? [r, _] : [_]
    );
  }
}), rv = [
  "text",
  "number",
  "email",
  "password",
  "search",
  "url",
  "tel",
  "date",
  "time",
  "range",
  "color"
], gV = B({
  props: {
    ...fy,
    max: { type: [String, Number], required: !1 },
    min: { type: [String, Number], required: !1 },
    step: { type: [String, Number], required: !1 },
    type: {
      type: String,
      default: "text",
      validator: (e) => rv.includes(e)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const n = E(() => {
      const f = e.type === "range", p = e.type === "color";
      return {
        "form-range": f,
        "form-control": p || !e.plaintext && !f,
        "form-control-color": p,
        "form-control-plaintext": e.plaintext && !f && !p,
        [`form-control-${e.size}`]: !!e.size,
        "is-valid": e.state === !0,
        "is-invalid": e.state === !1
      };
    }), a = E(
      () => rv.includes(e.type) ? e.type : "text"
    ), { input: r, computedId: i, computedAriaInvalid: o, onInput: s, onChange: l, onBlur: c, focus: u, blur: d } = py(e, t);
    return {
      classes: n,
      localType: a,
      input: r,
      computedId: i,
      computedAriaInvalid: o,
      onInput: s,
      onChange: l,
      onBlur: c,
      focus: u,
      blur: d
    };
  }
}), yV = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function bV(e, t, n, a, r, i) {
  return g(), T("input", ye({
    id: e.computedId,
    ref: "input",
    class: e.classes,
    name: e.name || void 0,
    form: e.form || void 0,
    type: e.localType,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    min: e.min,
    max: e.max,
    step: e.step,
    list: e.type !== "password" ? e.list : void 0,
    "aria-required": e.required ? "true" : void 0,
    "aria-invalid": e.computedAriaInvalid
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (o) => e.onInput(o)),
    onChange: t[1] || (t[1] = (o) => e.onChange(o)),
    onBlur: t[2] || (t[2] = (o) => e.onBlur(o))
  }), null, 16, yV);
}
const _V = /* @__PURE__ */ lt(gV, [["render", bV]]), EV = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], wV = ["for"], Iy = /* @__PURE__ */ B({
  __name: "BFormRadio",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    id: null,
    name: null,
    size: null,
    autofocus: { default: !1 },
    modelValue: { type: [Boolean, String, Array, Object, Number], default: void 0 },
    plain: { default: !1 },
    button: { default: !1 },
    switch: { default: !1 },
    disabled: { default: !1 },
    buttonVariant: { default: "secondary" },
    inline: { default: !1 },
    required: { default: !1 },
    state: { default: void 0 },
    value: { type: [String, Boolean, Object, Number], default: !0 }
  },
  emits: ["input", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "autofocus")), r = C(b(n, "plain")), i = C(b(n, "button")), o = C(b(n, "switch")), s = C(b(n, "disabled")), l = C(b(n, "inline")), c = C(b(n, "required")), u = n.state !== void 0 ? C(b(n, "state")) : E(() => {
    }), d = st(b(n, "id"), "form-check"), f = te(null), p = te(!1), h = E({
      get: () => Array.isArray(n.modelValue) ? n.modelValue[0] : n.modelValue,
      set: (x) => {
        const D = x ? n.value : !1, A = Array.isArray(n.modelValue) ? [D] : D;
        t("input", A), t("change", A), t("update:modelValue", A);
      }
    }), y = E(() => Array.isArray(n.modelValue) ? (n.modelValue || []).find((x) => x === n.value) : JSON.stringify(n.modelValue) === JSON.stringify(n.value)), w = Ht({
      plain: b(r, "value"),
      button: b(i, "value"),
      inline: b(l, "value"),
      switch: b(o, "value"),
      size: b(n, "size"),
      state: b(u, "value"),
      buttonVariant: b(n, "buttonVariant")
    }), m = iy(w), _ = oy(w), k = sy(w);
    return je(() => {
      a.value && f.value.focus();
    }), (x, D) => (g(), T("div", {
      class: W(v(m))
    }, [
      Ue(S("input", ye({ id: v(d) }, x.$attrs, {
        ref_key: "input",
        ref: f,
        "onUpdate:modelValue": D[0] || (D[0] = (A) => gt(h) ? h.value = A : null),
        class: v(_),
        type: "radio",
        disabled: v(s),
        required: !!e.name && !!v(c),
        name: e.name,
        form: e.form,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        value: e.value,
        "aria-required": e.name && v(c) ? !0 : void 0,
        onFocus: D[1] || (D[1] = (A) => p.value = !0),
        onBlur: D[2] || (D[2] = (A) => p.value = !1)
      }), null, 16, EV), [
        [cv, v(h)]
      ]),
      x.$slots.default || !v(r) ? (g(), T("label", {
        key: 0,
        for: v(d),
        class: W([v(k), { active: v(y), focus: p.value }])
      }, [
        F(x.$slots, "default")
      ], 10, wV)) : H("", !0)
    ], 2));
  }
}), SV = ["id"], CV = ["innerHTML"], TV = ["textContent"], kV = /* @__PURE__ */ B({
  __name: "BFormRadioGroup",
  props: {
    size: null,
    form: null,
    id: null,
    name: null,
    modelValue: { type: [String, Boolean, Array, Object, Number], default: "" },
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    buttonVariant: { default: "secondary" },
    buttons: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    plain: { default: !1 },
    required: { default: !1 },
    stacked: { default: !1 },
    state: { default: void 0 },
    textField: { default: "text" },
    validated: { default: !1 },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e;
    C(b(n, "autofocus"));
    const a = C(b(n, "buttons")), r = C(b(n, "disabled"));
    C(b(n, "plain"));
    const i = C(b(n, "required")), o = C(b(n, "stacked")), s = n.state !== void 0 ? C(b(n, "state")) : E(() => {
    }), l = C(b(n, "validated")), c = wa(), u = "BFormRadio", d = st(b(n, "id"), "radio"), f = st(b(n, "name"), "checkbox"), p = E({
      get: () => n.modelValue,
      set: (_) => {
        t("input", _), t("update:modelValue", _), t("change", _);
      }
    }), h = E(
      () => (c.first ? es(c.first(), u, r.value) : []).concat(n.options.map((_) => cy(_, n))).concat(c.default ? es(c.default(), u, r.value) : []).map((_, k) => dy(_, k, n, f, d)).map((_) => ({
        ..._
      }))
    ), y = Ht({
      required: b(i, "value"),
      ariaInvalid: b(n, "ariaInvalid"),
      state: b(s, "value"),
      validated: b(l, "value"),
      buttons: b(a, "value"),
      stacked: b(o, "value"),
      size: b(n, "size")
    }), w = ly(y), m = uy(y);
    return (_, k) => (g(), T("div", ye(v(w), {
      id: v(d),
      role: "radiogroup",
      class: [v(m), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (g(!0), T(Z, null, he(v(h), (x, D) => (g(), z(Iy, ye({
        key: D,
        modelValue: v(p),
        "onUpdate:modelValue": k[0] || (k[0] = (A) => gt(p) ? p.value = A : null)
      }, x.props), {
        default: N(() => [
          x.html ? (g(), T("span", {
            key: 0,
            innerHTML: x.html
          }, null, 8, CV)) : (g(), T("span", {
            key: 1,
            textContent: G(x.text)
          }, null, 8, TV))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, SV));
  }
}), xV = ["value", "disabled"], Jc = /* @__PURE__ */ B({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: !1 }
  },
  setup(e) {
    const t = C(b(e, "disabled"));
    return (n, a) => {
      var r;
      return g(), T("option", {
        value: (r = e.value) != null ? r : "",
        disabled: v(t)
      }, [
        F(n.$slots, "default")
      ], 8, xV);
    };
  }
}), DV = ["label"], Oy = /* @__PURE__ */ B({
  __name: "BFormSelectOptionGroup",
  props: {
    label: null,
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(e) {
    const t = e, n = E(
      () => Zc(t.options, "BFormSelectOptionGroup", t)
    );
    return (a, r) => (g(), T("optgroup", { label: e.label }, [
      F(a.$slots, "first"),
      (g(!0), T(Z, null, he(v(n), (i, o) => (g(), z(Jc, ye({
        key: `option_${o}`,
        value: i.value,
        disabled: i.disabled
      }, a.$attrs, {
        innerHTML: i.html || i.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      F(a.$slots, "default")
    ], 8, DV));
  }
}), AV = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], RV = /* @__PURE__ */ B({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { default: void 0 },
    autofocus: { default: !1 },
    disabled: { default: !1 },
    disabledField: { default: "disabled" },
    form: null,
    htmlField: { default: "html" },
    id: null,
    labelField: { default: "label" },
    multiple: { default: !1 },
    name: null,
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { default: !1 },
    required: { default: !1 },
    selectSize: { default: 0 },
    size: null,
    state: { default: void 0 },
    textField: { default: "text" },
    valueField: { default: "value" },
    modelValue: { default: "" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = C(b(a, "autofocus")), i = C(b(a, "disabled")), o = C(b(a, "multiple")), s = C(b(a, "plain")), l = C(b(a, "required")), c = a.state !== void 0 ? C(b(a, "state")) : E(() => {
    }), u = te(), d = st(b(a, "id"), "input"), f = () => {
      sn(() => {
        var _;
        r.value && ((_ = u.value) == null || _.focus());
      });
    };
    je(f), Wu(f);
    const p = E(() => ({
      "form-control": s.value,
      [`form-control-${a.size}`]: a.size && s.value,
      "form-select": !s.value,
      [`form-select-${a.size}`]: a.size && !s.value,
      "is-valid": c.value === !0,
      "is-invalid": c.value === !1
    })), h = E(() => {
      if (a.selectSize || s.value)
        return a.selectSize;
    }), y = E(
      () => Us(a.ariaInvalid, c.value)
    ), w = E(
      () => Zc(a.options, "BFormSelect", a)
    ), m = E({
      get() {
        return a.modelValue;
      },
      set(_) {
        n("change", _), n("update:modelValue", _), n("input", _);
      }
    });
    return t({
      blur: () => {
        var _;
        i.value || (_ = u.value) == null || _.blur();
      },
      focus: () => {
        var _;
        i.value || (_ = u.value) == null || _.focus();
      }
    }), (_, k) => Ue((g(), T("select", ye({
      id: v(d),
      ref_key: "input",
      ref: u
    }, _.$attrs, {
      "onUpdate:modelValue": k[0] || (k[0] = (x) => gt(m) ? m.value = x : null),
      class: v(p),
      name: e.name,
      form: e.form || void 0,
      multiple: v(o) || void 0,
      size: v(h),
      disabled: v(i),
      required: v(l),
      "aria-required": v(l) ? !0 : void 0,
      "aria-invalid": v(y)
    }), [
      F(_.$slots, "first"),
      (g(!0), T(Z, null, he(v(w), (x, D) => (g(), T(Z, null, [
        Array.isArray(x.options) ? (g(), z(Oy, {
          key: `option_${D}`,
          label: x.label,
          options: x.options
        }, null, 8, ["label", "options"])) : (g(), z(Jc, {
          key: `option2_${D}`,
          value: x.value,
          disabled: x.disabled,
          innerHTML: x.html || x.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 256)),
      F(_.$slots, "default")
    ], 16, AV)), [
      [er, v(m)]
    ]);
  }
}), IV = ["id"], OV = ["aria-label", "aria-controls", "aria-describedby"], $y = /* @__PURE__ */ B({
  __name: "BFormTag",
  props: {
    id: null,
    title: null,
    disabled: { default: !1 },
    noRemove: { default: !1 },
    pill: { default: !1 },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "disabled")), r = C(b(n, "noRemove")), i = C(b(n, "pill")), o = wa(), s = E(
      () => {
        var d, f, p;
        return (p = ((f = (d = o.default) == null ? void 0 : d.call(o)[0].children) == null ? void 0 : f.toString()) || n.title) != null ? p : "";
      }
    ), l = st(b(n, "id")), c = E(() => `${l.value}taglabel__`), u = E(() => [
      `bg-${n.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(n.variant),
        "rounded-pill": i.value,
        disabled: a.value
      }
    ]);
    return (d, f) => (g(), z(ce(e.tag), {
      id: v(l),
      title: v(s),
      class: W(["badge b-form-tag d-inline-flex align-items-center mw-100", v(u)]),
      "aria-labelledby": v(c)
    }, {
      default: N(() => [
        S("span", {
          id: v(c),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          F(d.$slots, "default", {}, () => [
            de(G(v(s)), 1)
          ])
        ], 8, IV),
        !v(a) && !v(r) ? (g(), T("button", {
          key: 0,
          "aria-keyshortcuts": "Delete",
          type: "button",
          "aria-label": e.removeLabel,
          class: W(["btn-close b-form-tag-remove", {
            "btn-close-white": !["warning", "info", "light"].includes(e.variant)
          }]),
          "aria-controls": e.id,
          "aria-describedby": v(c),
          onClick: f[0] || (f[0] = (p) => t("remove", v(s)))
        }, null, 10, OV)) : H("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), $V = ["id"], NV = ["id", "for", "aria-live"], MV = ["id", "aria-live"], PV = ["id"], BV = ["aria-controls"], VV = {
  role: "group",
  class: "d-flex"
}, LV = ["id", "disabled", "value", "type", "placeholder", "form", "required"], FV = ["disabled"], HV = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, zV = {
  key: 0,
  class: "d-block invalid-feedback"
}, UV = {
  key: 1,
  class: "form-text text-muted"
}, jV = {
  key: 2,
  class: "form-text text-muted"
}, WV = ["name", "value"], qV = /* @__PURE__ */ B({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { default: !1 },
    autofocus: { default: !1 },
    disabled: { default: !1 },
    duplicateTagText: { default: "Duplicate tag(s)" },
    inputAttrs: null,
    inputClass: null,
    inputId: null,
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    form: null,
    limit: null,
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: null,
    noAddOnEnter: { default: !1 },
    noOuterFocus: { default: !1 },
    noTagRemove: { default: !1 },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { default: !1 },
    required: { default: !1 },
    separator: null,
    state: { default: void 0 },
    size: null,
    tagClass: null,
    tagPills: { default: !1 },
    tagRemoveLabel: null,
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => !0 },
    tagVariant: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "tag-state", "focus", "focusin", "focusout", "blur"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "addOnChange")), r = C(b(n, "autofocus")), i = C(b(n, "disabled")), o = C(b(n, "noAddOnEnter")), s = C(b(n, "noOuterFocus")), l = C(b(n, "noTagRemove")), c = C(b(n, "removeOnDelete")), u = C(b(n, "required")), d = n.state !== void 0 ? C(b(n, "state")) : E(() => {
    }), f = C(b(n, "tagPills")), p = te(null), h = st(), y = E(() => n.inputId || `${h.value}input__`);
    je(() => {
      re(), n.modelValue.length > 0 && (_.value = !0);
    }), Wu(() => re()), $e(
      () => n.modelValue,
      (se) => {
        w.value = se;
      }
    );
    const w = te(n.modelValue), m = te(""), _ = te(!1), k = te(!1), x = te(""), D = te([]), A = te([]), L = te([]), $ = E(() => ({
      [`form-control-${n.size}`]: n.size !== void 0,
      disabled: i.value,
      focus: k.value,
      "is-invalid": d.value === !1,
      "is-valid": d.value === !0
    })), O = E(() => w.value.includes(m.value)), j = E(
      () => m.value === "" ? !1 : !n.tagValidator(m.value)
    ), X = E(() => w.value.length === n.limit), Q = E(() => !j.value && !O.value), re = () => {
      var se;
      r.value && ((se = p.value) == null || se.focus());
    }, J = (se) => {
      if (i.value) {
        se.target.blur();
        return;
      }
      t("focusin", se);
    }, Ce = (se) => {
      i.value || s.value || (k.value = !0, t("focus", se));
    }, ue = (se) => {
      k.value = !1, t("blur", se);
    }, ie = (se) => {
      var xe, M;
      const q = typeof se == "string" ? se : se.target.value;
      if (_.value = !1, ((xe = n.separator) == null ? void 0 : xe.includes(q.charAt(0))) && q.length > 0) {
        p.value && (p.value.value = "");
        return;
      }
      if (m.value = q, (M = n.separator) != null && M.includes(q.charAt(q.length - 1))) {
        Ie(q.slice(0, q.length - 1));
        return;
      }
      D.value = n.tagValidator(q) && !O.value ? [q] : [], A.value = n.tagValidator(q) ? [] : [q], L.value = O.value ? [q] : [], t("tag-state", D.value, A.value, L.value);
    }, Re = (se) => {
      a.value && (ie(se), O.value || Ie(m.value));
    }, Ee = (se) => {
      if (se.key === "Enter" && !o.value) {
        Ie(m.value);
        return;
      }
      (se.key === "Backspace" || se.key === "Delete") && c.value && m.value === "" && _.value && w.value.length > 0 ? qe(w.value[w.value.length - 1]) : _.value = !0;
    }, Ie = (se) => {
      var xe;
      if (se = (se || m.value).trim(), se === "" || O.value || !n.tagValidator(se) || n.limit && X.value)
        return;
      const M = [...n.modelValue, se];
      m.value = "", _.value = !0, t("update:modelValue", M), t("input", M), (xe = p.value) == null || xe.focus();
    }, qe = (se) => {
      var xe;
      const M = w.value.indexOf((xe = se == null ? void 0 : se.toString()) != null ? xe : "");
      x.value = w.value.splice(M, 1).toString(), t("update:modelValue", w.value);
    }, it = E(() => {
      const {
        addButtonText: se,
        addButtonVariant: xe,
        duplicateTagText: M,
        inputAttrs: q,
        form: K,
        inputType: ne,
        invalidTagText: Ae,
        limitTagsText: We,
        limit: we,
        placeholder: be,
        separator: Fe,
        size: tn,
        tagClass: rt,
        tagRemoveLabel: Di,
        tagVariant: Ai
      } = n;
      return {
        addButtonText: se,
        addButtonVariant: xe,
        addTag: Ie,
        disableAddButton: Q,
        disabled: i.value,
        duplicateTagText: M,
        duplicateTags: L,
        form: K,
        inputAttrs: {
          ...q,
          disabled: i.value,
          form: K,
          id: y,
          value: m
        },
        inputHandlers: {
          input: ie,
          keydown: Ee,
          change: Re
        },
        inputId: y,
        inputType: ne,
        invalidTagText: Ae,
        invalidTags: A,
        isDuplicate: O,
        isInvalid: j,
        isLimitReached: X,
        limitTagsText: We,
        limit: we,
        noTagRemove: l.value,
        placeholder: be,
        removeTag: qe,
        required: u.value,
        separator: Fe,
        size: tn,
        state: d.value,
        tagClass: rt,
        tagPills: f.value,
        tagRemoveLabel: Di,
        tagVariant: Ai,
        tags: w
      };
    });
    return (se, xe) => (g(), T("div", {
      id: v(h),
      class: W(["b-form-tags form-control h-auto", v($)]),
      role: "group",
      tabindex: "-1",
      onFocusin: J,
      onFocusout: xe[1] || (xe[1] = (M) => se.$emit("focusout", M))
    }, [
      S("output", {
        id: `${v(h)}selected_tags__`,
        class: "visually-hidden",
        role: "status",
        for: v(y),
        "aria-live": k.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, G(w.value.join(", ")), 9, NV),
      S("div", {
        id: `${v(h)}removed_tags__`,
        role: "status",
        "aria-live": k.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + G(e.tagRemovedLabel) + ") " + G(x.value), 9, MV),
      F(se.$slots, "default", as(rs(v(it))), () => [
        S("ul", {
          id: `${v(h)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (g(!0), T(Z, null, he(w.value, (M) => (g(), z($y, {
            key: M,
            class: W(e.tagClass),
            tag: "li",
            variant: e.tagVariant,
            pill: v(f),
            onRemove: qe
          }, {
            default: N(() => [
              de(G(M), 1)
            ]),
            _: 2
          }, 1032, ["class", "variant", "pill"]))), 128)),
          S("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${v(h)}tag_list__`
          }, [
            S("div", VV, [
              S("input", ye({
                id: v(y),
                ref_key: "input",
                ref: p,
                disabled: v(i),
                value: m.value,
                type: e.inputType,
                placeholder: e.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, e.inputAttrs, {
                form: e.form,
                required: v(u),
                onInput: ie,
                onChange: Re,
                onKeydown: Ee,
                onFocus: Ce,
                onBlur: ue
              }), null, 16, LV),
              v(Q) ? (g(), T("button", {
                key: 0,
                type: "button",
                class: W(["btn b-form-tags-button py-0", [
                  `btn-${e.addButtonVariant}`,
                  {
                    "disabled invisible": m.value.length === 0
                  },
                  e.inputClass
                ]]),
                style: { "font-size": "90%" },
                disabled: v(i) || m.value.length === 0 || v(X),
                onClick: xe[0] || (xe[0] = (M) => Ie(m.value))
              }, [
                F(se.$slots, "add-button-text", {}, () => [
                  de(G(e.addButtonText), 1)
                ])
              ], 10, FV)) : H("", !0)
            ])
          ], 8, BV)
        ], 8, PV),
        S("div", HV, [
          v(j) ? (g(), T("div", zV, G(e.invalidTagText) + ": " + G(m.value), 1)) : H("", !0),
          v(O) ? (g(), T("small", UV, G(e.duplicateTagText) + ": " + G(m.value), 1)) : H("", !0),
          w.value.length === e.limit ? (g(), T("small", jV, "Tag limit reached")) : H("", !0)
        ])
      ]),
      e.name ? (g(!0), T(Z, { key: 0 }, he(w.value, (M) => (g(), T("input", {
        key: M,
        type: "hidden",
        name: e.name,
        value: M
      }, null, 8, WV))), 128)) : H("", !0)
    ], 42, $V));
  }
}), GV = B({
  props: {
    ...fy,
    noResize: { type: [Boolean, String], default: !1 },
    rows: { type: [String, Number], required: !1, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const n = C(b(e, "noResize")), a = E(() => ({
      "form-control": !e.plaintext,
      "form-control-plaintext": e.plaintext,
      [`form-control-${e.size}`]: !!e.size,
      "is-valid": e.state === !0,
      "is-invalid": e.state === !1
    })), r = E(
      () => n.value ? { resize: "none" } : void 0
    ), { input: i, computedId: o, computedAriaInvalid: s, onInput: l, onChange: c, onBlur: u, focus: d, blur: f } = py(e, t);
    return {
      input: i,
      computedId: o,
      computedAriaInvalid: s,
      onInput: l,
      onChange: c,
      onBlur: u,
      focus: d,
      blur: f,
      classes: a,
      computedStyles: r
    };
  }
}), YV = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function KV(e, t, n, a, r, i) {
  return g(), T("textarea", ye({
    id: e.computedId,
    ref: "input",
    class: e.classes,
    name: e.name || void 0,
    form: e.form || void 0,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    "aria-required": e.required ? "true" : void 0,
    "aria-invalid": e.computedAriaInvalid,
    rows: e.rows,
    style: e.computedStyles,
    wrap: e.wrap || void 0
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (o) => e.onInput(o)),
    onChange: t[1] || (t[1] = (o) => e.onChange(o)),
    onBlur: t[2] || (t[2] = (o) => e.onBlur(o))
  }), null, 16, YV);
}
const XV = /* @__PURE__ */ lt(GV, [["render", KV]]), ZV = {
  key: 0,
  class: "input-group-text"
}, QV = { key: 0 }, JV = ["innerHTML"], eL = {
  key: 0,
  class: "input-group-text"
}, tL = { key: 0 }, nL = ["innerHTML"], aL = /* @__PURE__ */ B({
  __name: "BInputGroup",
  props: {
    append: null,
    appendHtml: null,
    id: null,
    prepend: null,
    prependHtml: null,
    size: null,
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, n = E(() => ({
      "input-group-sm": t.size === "sm",
      "input-group-lg": t.size === "lg"
    })), a = E(() => !!t.append || !!t.appendHtml), r = E(() => !!t.prepend || !!t.prependHtml), i = E(() => !!t.appendHtml), o = E(() => !!t.prependHtml);
    return (s, l) => (g(), z(ce(e.tag), {
      id: e.id,
      class: W(["input-group", v(n)]),
      role: "group"
    }, {
      default: N(() => [
        F(s.$slots, "prepend", {}, () => [
          v(r) ? (g(), T("span", ZV, [
            v(o) ? H("", !0) : (g(), T("span", QV, G(e.prepend), 1)),
            v(o) ? (g(), T("span", {
              key: 1,
              innerHTML: e.prependHtml
            }, null, 8, JV)) : H("", !0)
          ])) : H("", !0)
        ]),
        F(s.$slots, "default"),
        F(s.$slots, "append", {}, () => [
          v(a) ? (g(), T("span", eL, [
            v(i) ? H("", !0) : (g(), T("span", tL, G(e.append), 1)),
            v(i) ? (g(), T("span", {
              key: 1,
              innerHTML: e.appendHtml
            }, null, 8, nL)) : H("", !0)
          ])) : H("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Ny = /* @__PURE__ */ B({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, n) => (g(), z(ce(e.tag), { class: "input-group-text" }, {
      default: N(() => [
        F(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ed = /* @__PURE__ */ B({
  __name: "BInputGroupAddon",
  props: {
    append: { default: !1 },
    id: null,
    isText: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, n = C(b(t, "append")), a = C(b(t, "isText")), r = E(() => ({
      "input-group-append": n.value,
      "input-group-prepend": !n.value
    }));
    return (i, o) => (g(), z(ce(e.tag), {
      id: e.id,
      class: W(["d-flex", v(r)])
    }, {
      default: N(() => [
        v(a) ? (g(), z(Ny, { key: 0 }, {
          default: N(() => [
            F(i.$slots, "default")
          ]),
          _: 3
        })) : F(i.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), rL = /* @__PURE__ */ B({
  __name: "BInputGroupAppend",
  props: {
    id: null,
    isText: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = C(b(e, "isText"));
    return (n, a) => (g(), z(ed, {
      id: e.id,
      "is-text": v(t),
      tag: e.tag,
      append: ""
    }, {
      default: N(() => [
        F(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "is-text", "tag"]));
  }
}), iL = /* @__PURE__ */ B({
  __name: "BInputGroupPrepend",
  props: {
    id: null,
    isText: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = C(b(e, "isText"));
    return (n, a) => (g(), z(ed, {
      id: e.id,
      "is-text": v(t),
      tag: e.tag,
      append: !1
    }, {
      default: N(() => [
        F(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "is-text", "tag"]));
  }
}), My = Symbol(), oL = /* @__PURE__ */ B({
  __name: "BListGroup",
  props: {
    flush: { default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { default: !1 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, n = C(b(t, "flush")), a = C(b(t, "numbered")), r = E(() => {
      const o = n.value ? !1 : t.horizontal;
      return {
        "list-group-flush": n.value,
        "list-group-horizontal": o === !0,
        [`list-group-horizontal-${o}`]: typeof o == "string",
        "list-group-numbered": a.value
      };
    }), i = E(() => a.value === !0 ? "ol" : t.tag);
    return ln(My, {
      numbered: a.value
    }), (o, s) => (g(), z(ce(v(i)), {
      class: W(["list-group", v(r)])
    }, {
      default: N(() => [
        F(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sL = /* @__PURE__ */ B({
  __name: "BListGroupItem",
  props: {
    action: { default: !1 },
    active: { default: !1 },
    button: { default: !1 },
    disabled: { default: !1 },
    href: null,
    tag: { default: "div" },
    target: { default: "_self" },
    to: null,
    variant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "action")), a = C(b(t, "active")), r = C(b(t, "button")), i = C(b(t, "disabled")), o = dv(), s = ct(My, null), l = E(() => !r.value && (!!t.href || !!t.to)), c = E(
      () => s != null && s.numbered ? "li" : r.value ? "button" : l.value ? xt : t.tag
    ), u = E(() => {
      const f = n.value || l.value || r.value || ["a", "router-link", "button", "b-link"].includes(t.tag);
      return {
        [`list-group-item-${t.variant}`]: t.variant !== void 0,
        "list-group-item-action": f,
        active: a.value,
        disabled: i.value
      };
    }), d = E(() => {
      const f = {};
      return r.value && ((!o || !o.type) && (f.type = "button"), i.value && (f.disabled = !0)), f;
    });
    return (f, p) => (g(), z(ce(v(c)), ye({
      class: ["list-group-item", v(u)],
      "aria-current": v(a) ? !0 : null,
      "aria-disabled": v(i) ? !0 : null,
      target: v(l) ? e.target : null,
      href: v(r) ? null : e.href,
      to: v(r) ? null : e.to
    }, v(d)), {
      default: N(() => [
        F(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), lL = ["id"], uL = ["aria-label"], cL = {
  inheritAttrs: !1
}, dL = /* @__PURE__ */ B({
  ...cL,
  __name: "BModal",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTextVariant: null,
    busy: { default: !1 },
    lazy: { default: !1 },
    buttonSize: { default: "md" },
    cancelDisabled: { default: !1 },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { default: !1 },
    contentClass: null,
    dialogClass: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerTextVariant: null,
    fullscreen: { type: [Boolean, String], default: !1 },
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerCloseLabel: { default: "Close" },
    headerCloseWhite: { default: !1 },
    headerTextVariant: null,
    hideBackdrop: { default: !1 },
    hideFooter: { default: !1 },
    hideHeader: { default: !1 },
    hideHeaderClose: { default: !1 },
    id: null,
    modalClass: null,
    modelValue: { default: !1 },
    noCloseOnBackdrop: { default: !1 },
    noCloseOnEsc: { default: !1 },
    noFade: { default: !1 },
    noFocus: { default: !1 },
    okDisabled: { default: !1 },
    okOnly: { default: !1 },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { default: !1 },
    show: { default: !1 },
    size: null,
    title: null,
    titleClass: null,
    titleSrOnly: { default: !1 },
    titleTag: { default: "h5" }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "ok", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "busy")), r = C(b(n, "lazy")), i = C(b(n, "cancelDisabled")), o = C(b(n, "centered")), s = C(b(n, "headerCloseWhite")), l = C(b(n, "hideBackdrop")), c = C(b(n, "hideFooter")), u = C(b(n, "hideHeader")), d = C(b(n, "hideHeaderClose")), f = C(b(n, "modelValue")), p = C(b(n, "noCloseOnBackdrop")), h = C(b(n, "noCloseOnEsc")), y = C(b(n, "noFade")), w = C(b(n, "noFocus")), m = C(b(n, "okDisabled")), _ = C(b(n, "okOnly")), k = C(b(n, "scrollable")), x = C(b(n, "show")), D = C(b(n, "titleSrOnly")), A = te(!1), L = wa(), $ = te(), O = te(), j = E(() => [
      {
        fade: !y.value,
        show: x.value
      },
      n.modalClass
    ]), X = E(() => [
      {
        "modal-fullscreen": typeof n.fullscreen == "boolean" ? n.fullscreen : !1,
        [`modal-fullscreen-${n.fullscreen}-down`]: typeof n.fullscreen == "string" ? n.fullscreen : !1,
        [`modal-${n.size}`]: n.size,
        "modal-dialog-centered": o.value,
        "modal-dialog-scrollable": k.value
      },
      n.dialogClass
    ]), Q = E(() => [
      {
        [`bg-${n.bodyBgVariant}`]: n.bodyBgVariant,
        [`text-${n.bodyTextVariant}`]: n.bodyTextVariant
      },
      n.bodyClass
    ]), re = E(() => [
      {
        [`bg-${n.headerBgVariant}`]: n.headerBgVariant,
        [`border-${n.headerBorderVariant}`]: n.headerBorderVariant,
        [`text-${n.headerTextVariant}`]: n.headerTextVariant
      },
      n.headerClass
    ]), J = E(() => [
      {
        [`bg-${n.footerBgVariant}`]: n.footerBgVariant,
        [`border-${n.footerBorderVariant}`]: n.footerBorderVariant,
        [`text-${n.footerTextVariant}`]: n.footerTextVariant
      },
      n.footerClass
    ]), Ce = E(() => [
      {
        ["visually-hidden"]: D.value
      },
      n.titleClass
    ]), ue = E(() => !!L["header-close"]), ie = E(() => [
      {
        ["btn-close-content"]: ue.value,
        ["d-flex"]: ue.value,
        ["btn-close-white"]: !ue.value && s.value
      }
    ]), Re = E(() => i.value || a.value), Ee = E(() => m.value || a.value);
    Qe($, "shown.bs.modal", (M) => Ie(M)), Qe($, "hidden.bs.modal", (M) => qe(M));
    const Ie = (M) => {
      t("shown", M), r.value === !0 && (A.value = !0);
    }, qe = (M) => {
      t("hidden", M), r.value === !0 && (A.value = !1);
    }, it = () => {
      t("update:modelValue", !0), xe().show();
    }, se = () => {
      t("update:modelValue", !1), xe().hide();
    }, xe = () => (O.value !== void 0 || (O.value = new Ea($.value, {
      backdrop: !1,
      keyboard: !h.value,
      focus: !w.value
    })), O.value);
    return je(() => {
      f.value && xe().show();
    }), $e(
      () => n.noCloseOnBackdrop,
      (M) => {
        xe()._config.backdrop = n.hideBackdrop ? !1 : M ? "static" : !n.hideBackdrop;
      }
    ), $e(
      () => n.noCloseOnEsc,
      (M) => {
        xe()._config.keyboard = !M;
      }
    ), $e(
      () => f.value,
      (M) => {
        sn(() => {
          M ? it() : se();
        });
      }
    ), (M, q) => (g(), z(Qy, { to: "body" }, [
      S("div", ye({
        id: e.id,
        ref_key: "element",
        ref: $,
        class: ["modal", v(j)],
        tabindex: "-1"
      }, M.$attrs), [
        S("div", {
          class: W(["modal-dialog", v(X)])
        }, [
          !v(r) || v(r) && A.value || v(r) && v(f) === !0 ? (g(), T("div", {
            key: 0,
            class: W(["modal-content", e.contentClass])
          }, [
            v(u) ? H("", !0) : (g(), T("div", {
              key: 0,
              class: W(["modal-header", v(re)])
            }, [
              (g(), z(ce(e.titleTag), {
                class: W(["modal-title", v(Ce)])
              }, {
                default: N(() => [
                  F(M.$slots, "title", {}, () => [
                    de(G(e.title), 1)
                  ], !0)
                ]),
                _: 3
              }, 8, ["class"])),
              v(d) ? H("", !0) : (g(), T("button", {
                key: 0,
                type: "button",
                class: W(["btn-close", v(ie)]),
                "data-bs-dismiss": "modal",
                "aria-label": e.headerCloseLabel
              }, [
                F(M.$slots, "header-close", {}, void 0, !0)
              ], 10, uL))
            ], 2)),
            S("div", {
              class: W(["modal-body", v(Q)])
            }, [
              F(M.$slots, "default", {}, void 0, !0)
            ], 2),
            v(c) ? H("", !0) : (g(), T("div", {
              key: 1,
              class: W(["modal-footer", v(J)])
            }, [
              F(M.$slots, "footer", {}, () => [
                v(_) ? H("", !0) : (g(), z(fi, {
                  key: 0,
                  type: "button",
                  class: "btn",
                  disabled: v(Re),
                  size: e.buttonSize,
                  variant: e.cancelVariant,
                  onClick: q[0] || (q[0] = (K) => (se(), M.$emit("cancel")))
                }, {
                  default: N(() => [
                    de(G(e.cancelTitle), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "size", "variant"])),
                P(fi, {
                  type: "button",
                  class: "btn",
                  disabled: v(Ee),
                  size: e.buttonSize,
                  variant: e.okVariant,
                  onClick: q[1] || (q[1] = (K) => (se(), M.$emit("ok")))
                }, {
                  default: N(() => [
                    de(G(e.okTitle), 1)
                  ]),
                  _: 1
                }, 8, ["disabled", "size", "variant"])
              ], !0)
            ], 2))
          ], 2)) : H("", !0)
        ], 2),
        v(l) === !1 ? (g(), T("div", {
          key: 0,
          class: "modal-backdrop fade show",
          onClick: q[2] || (q[2] = ra((K) => v(p) === !1 && se(), ["prevent"]))
        })) : H("", !0)
      ], 16, lL)
    ]));
  }
}), fL = /* @__PURE__ */ lt(dL, [["__scopeId", "data-v-0368138c"]]), pL = /* @__PURE__ */ B({
  __name: "BNav",
  props: {
    align: null,
    cardHeader: { default: !1 },
    fill: { default: !1 },
    justified: { default: !1 },
    pills: { default: !1 },
    small: { default: !1 },
    tabs: { default: !1 },
    tag: { default: "ul" },
    vertical: { default: !1 }
  },
  setup(e) {
    const t = e, n = C(b(t, "cardHeader")), a = C(b(t, "fill")), r = C(b(t, "justified")), i = C(b(t, "pills")), o = C(b(t, "small")), s = C(b(t, "tabs")), l = C(b(t, "vertical")), c = E(() => ({
      "nav-tabs": s.value,
      "nav-pills": i.value && !s.value,
      "card-header-tabs": !l.value && n.value && s.value,
      "card-header-pills": !l.value && n.value && i.value && !s.value,
      "flex-column": l.value,
      "nav-fill": !l.value && a.value,
      "nav-justified": !l.value && r.value,
      [`justify-content-${t.align}`]: !l.value && t.align !== void 0,
      small: o.value
    }));
    return (u, d) => (g(), z(ce(e.tag), {
      class: W(["nav", v(c)])
    }, {
      default: N(() => [
        F(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vL = /* @__PURE__ */ B({
  __name: "BNavForm",
  props: {
    role: null,
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  setup(e) {
    const t = e, n = E(() => ({
      floating: t.floating,
      role: t.role,
      id: t.id,
      novalidate: t.novalidate,
      validated: t.validated
    }));
    return (a, r) => (g(), z(Dy, ye(v(n), { class: "d-flex" }), {
      default: N(() => [
        F(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hL = js(Da, ["event", "routerTag"]), mL = B({
  components: { BLink: xt },
  props: {
    ...hL
  },
  setup(e) {
    return { disabledBoolean: C(b(e, "disabled")) };
  }
}), gL = { class: "nav-item" };
function yL(e, t, n, a, r, i) {
  const o = ge("b-link");
  return g(), T("li", gL, [
    P(o, ye({ class: "nav-link" }, e.$props, {
      tabindex: e.disabledBoolean ? -1 : void 0,
      "aria-disabled": e.disabledBoolean ? !0 : void 0
    }), {
      default: N(() => [
        F(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const bL = /* @__PURE__ */ lt(mL, [["render", yL]]), _L = { class: "nav-item dropdown" }, EL = /* @__PURE__ */ B({
  __name: "BNavItemDropdown",
  props: {
    id: null,
    text: null,
    size: null,
    offset: null,
    autoClose: { type: [Boolean, String], default: !0 },
    dark: { type: Boolean, default: !1 },
    dropleft: { type: Boolean, default: !1 },
    dropright: { type: Boolean, default: !1 },
    dropup: { type: Boolean, default: !1 },
    right: { type: Boolean, default: !1 },
    left: { type: [Boolean, String], default: !1 },
    split: { type: Boolean, default: !1 },
    splitVariant: null,
    noCaret: { type: Boolean, default: !1 },
    variant: { default: "link" }
  },
  setup(e) {
    return (t, n) => (g(), T("li", _L, [
      P(xy, ye(t.$props, { "is-nav": "" }), Xy({ _: 2 }, [
        he(t.$slots, (a, r) => ({
          name: r,
          fn: N((i) => [
            F(t.$slots, r, as(rs(i || {})))
          ])
        }))
      ]), 1040)
    ]));
  }
}), wL = {}, SL = { class: "navbar-text" };
function CL(e, t) {
  return g(), T("li", SL, [
    F(e.$slots, "default")
  ]);
}
const TL = /* @__PURE__ */ lt(wL, [["render", CL]]), kL = /* @__PURE__ */ B({
  __name: "BNavbar",
  props: {
    fixed: null,
    print: { default: !1 },
    sticky: null,
    tag: { default: "nav" },
    toggleable: { type: [Boolean, String], default: !1 },
    dark: { default: !1 },
    variant: null,
    container: { type: [String, Boolean], default: "fluid" }
  },
  setup(e) {
    const t = e, n = C(b(t, "print")), a = C(b(t, "dark")), r = E(
      () => t.tag === "nav" ? void 0 : "navigation"
    ), i = E(
      () => typeof t.toggleable == "string" ? `navbar-expand-${t.toggleable}` : t.toggleable === !1 ? "navbar-expand" : void 0
    ), o = E(
      () => t.container === !1 ? void 0 : t.container === !0 ? "container" : `container-${t.container}`
    ), s = E(() => ({
      "d-print": n.value,
      [`sticky-${t.sticky}`]: t.sticky !== void 0,
      "navbar-dark": a.value,
      [`bg-${t.variant}`]: t.variant !== void 0,
      [`fixed-${t.fixed}`]: t.fixed !== void 0,
      [`${i.value}`]: i.value !== void 0
    }));
    return (l, c) => (g(), z(ce(e.tag), {
      class: W(["navbar", v(s)]),
      role: v(r)
    }, {
      default: N(() => [
        e.container !== !1 ? (g(), T("div", {
          key: 0,
          class: W(v(o))
        }, [
          F(l.$slots, "default")
        ], 2)) : F(l.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), iv = js(Da, ["event", "routerTag"]), xL = B({
  components: {
    BLink: xt
  },
  props: {
    tag: { type: String, default: "div" },
    ...iv
  },
  setup(e) {
    const t = E(() => di(e)), n = E(() => t.value ? xt : e.tag);
    return {
      props: t.value ? ry(iv, e) : {},
      computedTag: n
    };
  }
});
function DL(e, t, n, a, r, i) {
  return g(), z(ce(e.computedTag), ye({ class: "navbar-brand" }, e.props), {
    default: N(() => [
      F(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const AL = /* @__PURE__ */ lt(xL, [["render", DL]]), RL = /* @__PURE__ */ B({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: !1 },
    justified: { default: !1 },
    small: { default: !1 },
    tag: { default: "ul" }
  },
  setup(e) {
    const t = e, n = C(b(t, "fill")), a = C(b(t, "justified")), r = C(b(t, "small")), i = E(() => ({
      "nav-fill": n.value,
      "nav-justified": a.value,
      [`justify-content-${t.align}`]: t.align !== void 0,
      small: r.value
    }));
    return (o, s) => (g(), T("ul", {
      class: W(["navbar-nav", v(i)])
    }, [
      F(o.$slots, "default")
    ], 2));
  }
}), IL = {
  mounted(e, t) {
    let n = t.value;
    Object.keys(t.modifiers).length > 0 && ([n] = Object.keys(t.modifiers)), e.setAttribute("data-bs-toggle", "modal"), e.setAttribute("data-bs-target", `#${n}`);
  }
}, OL = {
  mounted(e, t) {
    let n = "right";
    const a = [];
    t.modifiers.left ? n = "left" : t.modifiers.right ? n = "right" : t.modifiers.bottom ? n = "bottom" : t.modifiers.top && (n = "top"), t.modifiers.manual ? a.push("manual") : (t.modifiers.click && a.push("click"), t.modifiers.hover && a.push("hover"), t.modifiers.focus && a.push("focus")), e.setAttribute("data-bs-toggle", "popover"), new gr(e, {
      trigger: a.length === 0 ? "click" : a.join(" "),
      placement: n,
      content: t.value
    });
  },
  unmounted(e) {
    const t = gr.getInstance(e);
    t == null || t.dispose();
  }
}, $L = (e) => {
  if (e.manual)
    return "manual";
  const t = [];
  return e.click && t.push("click"), e.hover && t.push("hover"), e.focus && t.push("focus"), t.length > 0 ? t.join(" ") : "hover focus";
}, NL = (e) => e.left ? "left" : e.right ? "right" : e.bottom ? "bottom" : "top", ML = (e) => e != null && e.delay ? e.delay : 0, PL = {
  beforeMount(e, t) {
    e.setAttribute("data-bs-toggle", "tooltip");
    const n = /<("[^"]*"|'[^']*'|[^'">])*>/.test(e.title), a = $L(t.modifiers), r = NL(t.modifiers), i = ML(t.value), o = e.getAttribute("title");
    new pn(e, {
      trigger: a,
      placement: r,
      delay: i,
      html: n
    }), o && e.setAttribute("data-bs-original-title", o);
  },
  updated(e) {
    const t = e.getAttribute("title"), n = e.getAttribute("data-bs-original-title"), a = pn.getInstance(e);
    e.removeAttribute("title"), t && t !== n && (a == null || a.setContent({ ".tooltip-inner": t }), e.setAttribute("data-bs-original-title", t));
  },
  unmounted(e) {
    const t = pn.getInstance(e);
    t == null || t.dispose();
  }
}, So = /* @__PURE__ */ new Map(), Py = (e) => {
  if (So.has(e)) {
    const t = So.get(e);
    t && t.stop && t.stop(), So.delete(e);
  }
}, ov = (e, t) => {
  const n = {
    margin: "0px",
    once: !1,
    callback: t.value
  };
  Object.keys(t.modifiers).forEach((r) => {
    Number.isInteger(r) ? n.margin = `${r}px` : r.toLowerCase() === "once" && (n.once = !0);
  }), Py(e);
  const a = new VL(
    e,
    n.margin,
    n.once,
    n.callback,
    t.instance
  );
  So.set(e, a);
}, BL = {
  beforeMount(e, t) {
    ov(e, t);
  },
  updated(e, t) {
    ov(e, t);
  },
  unmounted(e) {
    Py(e);
  }
};
class VL {
  constructor(t, n, a, r, i) {
    Xe(this, "element"), Xe(this, "margin"), Xe(this, "once"), Xe(this, "callback"), Xe(this, "instance"), Xe(this, "observer"), Xe(this, "doneOnce"), Xe(this, "visible"), this.element = t, this.margin = n, this.once = a, this.callback = r, this.instance = i, this.createObserver();
  }
  createObserver() {
    if (this.observer && this.stop(), !(this.doneOnce || typeof this.callback != "function")) {
      try {
        this.observer = new IntersectionObserver(this.handler.bind(this), {
          root: null,
          rootMargin: this.margin,
          threshold: 0
        });
      } catch {
        console.error("Intersection Observer not supported"), this.doneOnce = !0, this.observer = void 0, this.callback(null);
        return;
      }
      this.instance.$nextTick(() => {
        this.observer && this.observer.observe(this.element);
      });
    }
  }
  handler(t) {
    const [n] = t, a = Boolean(n.isIntersecting || n.intersectionRatio > 0);
    a !== this.visible && (this.visible = a, this.callback(a), this.once && this.visible && (this.doneOnce = !0, this.stop()));
  }
  stop() {
    this.observer && this.observer.disconnect(), this.observer = null;
  }
}
const LL = {
  mounted(e, t) {
    t.value !== !1 && e.focus();
  }
}, FL = {
  BModal: IL,
  BPopover: OL,
  BToggle: Qc,
  BTooltip: PL,
  BVisible: BL,
  focus: LL
}, HL = /* @__PURE__ */ S("span", { class: "navbar-toggler-icon" }, null, -1), zL = /* @__PURE__ */ B({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: !1 },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "disabled")), r = E(() => ({
      disabled: a.value,
      "aria-label": n.label
    })), i = E(() => ({
      disabled: a.value
    })), o = () => {
      a.value || t("click");
    };
    return (s, l) => Ue((g(), T("button", ye({
      class: ["navbar-toggler", v(i)],
      type: "button"
    }, v(r), { onClick: o }), [
      F(s.$slots, "default", {}, () => [
        HL
      ])
    ], 16)), [
      [v(Qc), v(a) ? void 0 : e.target]
    ]);
  }
}), UL = ["data-bs-backdrop", "data-bs-scroll"], jL = { class: "offcanvas-header" }, WL = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, qL = ["aria-label"], GL = { class: "offcanvas-body" }, YL = /* @__PURE__ */ B({
  __name: "BOffcanvas",
  props: {
    dismissLabel: { default: "Close" },
    modelValue: { default: !1 },
    bodyScrolling: { default: !1 },
    backdrop: { default: !0 },
    placement: { default: "start" },
    title: null
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "modelValue")), r = C(b(n, "bodyScrolling")), i = C(b(n, "backdrop")), o = te(), s = te();
    Qe(o, "shown.bs.offcanvas", () => t("shown")), Qe(o, "hidden.bs.offcanvas", () => t("hidden")), Qe(o, "show.bs.offcanvas", () => {
      t("show"), t("update:modelValue", !0);
    }), Qe(o, "hide.bs.offcanvas", () => {
      t("hide"), t("update:modelValue", !1);
    }), je(() => {
      var c;
      s.value = new En(o.value), a.value && ((c = s.value) == null || c.show(o.value));
    });
    const l = E(() => ({
      [`offcanvas-${n.placement}`]: !!n.placement
    }));
    return $e(
      () => a.value,
      (c) => {
        var u, d;
        c ? (u = s.value) == null || u.show(o.value) : (d = s.value) == null || d.hide();
      }
    ), (c, u) => (g(), T("div", {
      ref_key: "element",
      ref: o,
      class: W(["offcanvas", v(l)]),
      tabindex: "-1",
      "aria-labelledby": "offcanvasLabel",
      "data-bs-backdrop": v(i),
      "data-bs-scroll": v(r)
    }, [
      S("div", jL, [
        S("h5", WL, [
          F(c.$slots, "title", {}, () => [
            de(G(e.title), 1)
          ])
        ]),
        S("button", {
          type: "button",
          class: "btn-close text-reset",
          "data-bs-dismiss": "offcanvas",
          "aria-label": e.dismissLabel
        }, null, 8, qL)
      ]),
      S("div", GL, [
        F(c.$slots, "default")
      ])
    ], 10, UL));
  }
}), jl = { top: 0, left: 0, bottom: 0, right: 0 }, KL = "default", XL = "overlay", ZL = B({
  components: { BTransition: ts },
  props: {
    bgColor: { type: String, required: !1 },
    blur: { type: String, default: "2px" },
    fixed: { type: [Boolean, String], default: !1 },
    noCenter: { type: [Boolean, String], default: !1 },
    noFade: { type: [Boolean, String], default: !1 },
    noWrap: { type: [Boolean, String], default: !1 },
    opacity: {
      type: [Number, String],
      default: 0.85,
      validator: (e) => {
        const t = Xc(e, 0);
        return t >= 0 && t <= 1;
      }
    },
    overlayTag: { type: String, default: "div" },
    rounded: { type: [Boolean, String], default: !1 },
    show: { type: [Boolean, String], default: !1 },
    spinnerSmall: { type: [Boolean, String], default: !1 },
    spinnerType: { type: String, default: "border" },
    spinnerVariant: { type: String, required: !1 },
    variant: { type: String, default: "light" },
    wrapTag: { type: String, default: "div" },
    zIndex: { type: [Number, String], default: 10 }
  },
  emits: ["click", "hidden", "shown"],
  setup(e, { slots: t, emit: n }) {
    const a = C(b(e, "fixed")), r = C(b(e, "noCenter")), i = C(b(e, "noFade")), o = C(b(e, "noWrap")), s = C(b(e, "show")), l = C(b(e, "spinnerSmall")), c = E(
      () => e.rounded === !0 || e.rounded === "" ? "rounded" : e.rounded ? `rounded-${e.rounded}` : ""
    ), u = E(
      () => e.variant && !e.bgColor ? `bg-${e.variant}` : ""
    ), d = E(() => ({
      spinnerType: e.spinnerType || null,
      spinnerVariant: e.spinnerVariant || null,
      spinnerSmall: l.value
    }));
    return () => {
      const f = (y) => me(ge("BSpinner"), {
        type: y.spinnerType,
        variant: y.spinnerVariant,
        small: l.value
      });
      let p = "";
      if (s.value) {
        const y = me("div", {
          class: ["position-absolute", u.value, c.value],
          style: {
            ...jl,
            opacity: e.opacity,
            backgroundColor: e.bgColor || null,
            backdropFilter: e.blur ? `blur(${e.blur})` : null
          }
        }), w = me(
          "div",
          {
            class: "position-absolute",
            style: r.value ? { ...jl } : { top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }
          },
          St(XL, d.value, t) || f(d.value) || ""
        );
        p = me(
          e.overlayTag,
          {
            class: [
              "b-overlay",
              {
                "position-absolute": !o.value || o.value && !a.value,
                "position-fixed": o.value && a.value
              }
            ],
            style: {
              ...jl,
              zIndex: e.zIndex || 10
            },
            onClick: (m) => n("click", m),
            key: "overlay"
          },
          [y, w]
        );
      }
      const h = () => me(
        ts,
        {
          noFade: i.value,
          transProps: { enterToClass: "show" },
          name: "fade",
          onAfterEnter: () => n("shown"),
          onAfterLeave: () => n("hidden")
        },
        { default: () => p }
      );
      return o.value ? h() : me(
        e.wrapTag,
        {
          class: ["b-overlay-wrap position-relative"],
          "aria-busy": s.value ? "true" : null
        },
        [me("span", St(KL, {}, t)), h()]
      );
    };
  }
}), QL = 5, By = 20, Vy = 0, qt = 3, JL = "ellipsis-text", eF = "first-text", tF = "last-text", nF = "next-text", aF = "page", rF = "prev-text", sv = (e) => Math.max(_r(e) || By, 1), lv = (e) => Math.max(_r(e) || Vy, 0), iF = (e, t) => {
  const n = _r(e) || 1;
  return n > t ? t : n < 1 ? 1 : n;
}, oF = B({
  name: "BPagination",
  props: {
    align: { type: String, default: "start" },
    ariaControls: { type: String, required: !1 },
    ariaLabel: { type: String, default: "Pagination" },
    disabled: { type: [Boolean, String], default: !1 },
    ellipsisClass: { type: [Array, String], default: () => [] },
    ellipsisText: { type: String, default: "\u2026" },
    firstClass: { type: [Array, String], default: () => [] },
    firstNumber: { type: [Boolean, String], default: !1 },
    firstText: { type: String, default: "\xAB" },
    hideEllipsis: { type: [Boolean, String], default: !1 },
    hideGotoEndButtons: { type: [Boolean, String], default: !1 },
    labelFirstPage: { type: String, default: "Go to first page" },
    labelLastPage: { type: String, default: "Go to last page" },
    labelNextPage: { type: String, default: "Go to next page" },
    labelPage: { type: String, default: "Go to page" },
    labelPrevPage: { type: String, default: "Go to previous page" },
    lastClass: { type: [Array, String], default: () => [] },
    lastNumber: { type: [Boolean, String], default: !1 },
    lastText: { type: String, default: "\xBB" },
    limit: { type: Number, default: QL },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "\u203A" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: By },
    pills: { type: [Boolean, String], default: !1 },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "\u2039" },
    size: { type: String, required: !1 },
    totalRows: { type: Number, default: Vy }
  },
  emits: ["update:modelValue", "page-click"],
  setup(e, { emit: t, slots: n }) {
    const a = C(b(e, "disabled")), r = C(b(e, "firstNumber")), i = C(b(e, "hideEllipsis")), o = C(b(e, "hideGotoEndButtons")), s = C(b(e, "lastNumber")), l = C(b(e, "pills")), c = wP(b(e, "align")), u = E(
      () => Math.ceil(lv(e.totalRows) / sv(e.perPage))
    ), d = E(() => {
      let x;
      return u.value - e.modelValue + 2 < e.limit && e.limit > qt ? x = u.value - p.value + 1 : x = e.modelValue - Math.floor(p.value / 2), x < 1 ? x = 1 : x > u.value - p.value && (x = u.value - p.value + 1), e.limit <= qt && s.value && u.value === x + p.value - 1 && (x = Math.max(x - 1, 1)), x;
    }), f = E(() => {
      const x = u.value - e.modelValue;
      let D = !1;
      return x + 2 < e.limit && e.limit > qt ? e.limit > qt && (D = !0) : e.limit > qt && (D = !!(!i.value || r.value)), d.value <= 1 && (D = !1), D && r.value && d.value < 4 && (D = !1), D;
    }), p = E(() => {
      let x = e.limit;
      return u.value <= e.limit ? x = u.value : e.modelValue < e.limit - 1 && e.limit > qt ? ((!i.value || s.value) && (x = e.limit - (r.value ? 0 : 1)), x = Math.min(x, e.limit)) : u.value - e.modelValue + 2 < e.limit && e.limit > qt ? (!i.value || r.value) && (x = e.limit - (s.value ? 0 : 1)) : e.limit > qt && (x = e.limit - (i.value ? 0 : 2)), x;
    }), h = E(() => {
      const x = u.value - p.value;
      let D = !1;
      e.modelValue < e.limit - 1 && e.limit > qt ? (!i.value || s.value) && (D = !0) : e.limit > qt && (D = !!(!i.value || s.value)), d.value > x && (D = !1);
      const A = d.value + p.value - 1;
      return D && s.value && A > u.value - 3 && (D = !1), D;
    }), y = Ht({
      pageSize: sv(e.perPage),
      totalRows: lv(e.totalRows),
      numberOfPages: u.value
    }), w = (x, D) => {
      if (D === e.modelValue)
        return;
      const { target: A } = x, L = new Hs("page-click", {
        cancelable: !0,
        vueTarget: this,
        target: A
      });
      t("page-click", L, D), !L.defaultPrevented && t("update:modelValue", D);
    }, m = E(() => e.size ? `pagination-${e.size}` : ""), _ = E(() => l.value ? "b-pagination-pills" : "");
    $e(
      () => e.modelValue,
      (x) => {
        const D = iF(x, u.value);
        D !== e.modelValue && t("update:modelValue", D);
      }
    ), $e(y, (x, D) => {
      Qg(x) || (D.pageSize !== x.pageSize && D.totalRows === x.totalRows || D.numberOfPages !== x.numberOfPages && e.modelValue > D.numberOfPages) && t("update:modelValue", 1);
    });
    const k = E(() => {
      const x = [];
      for (let D = 0; D < p.value; D++)
        x.push({ number: d.value + D, classes: null });
      return x;
    });
    return () => {
      const x = [], D = k.value.map((J) => J.number), A = (J) => J === e.modelValue, L = e.modelValue < 1, $ = e.align === "fill", O = (J, Ce, ue, ie, Re, Ee) => {
        const Ie = a.value || A(Ee) || L || J < 1 || J > u.value, qe = J < 1 ? 1 : J > u.value ? u.value : J, it = { disabled: Ie, page: qe, index: qe - 1 }, se = St(ue, it, n) || ie || "";
        return me(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: Ie,
                "flex-fill": $,
                "d-flex": $ && !Ie
              },
              Re
            ]
          },
          me(
            Ie ? "span" : "button",
            {
              class: ["page-link", { "flex-grow-1": !Ie && $ }],
              "aria-label": Ce,
              "aria-controls": e.ariaControls || null,
              "aria-disabled": Ie ? "true" : null,
              role: "menuitem",
              type: Ie ? null : "button",
              tabindex: Ie ? null : "-1",
              onClick: (xe) => {
                Ie || w(xe, qe);
              }
            },
            se
          )
        );
      }, j = (J) => me(
        "li",
        {
          class: [
            "page-item",
            "disabled",
            "bv-d-xs-down-none",
            $ ? "flex-fill" : "",
            e.ellipsisClass
          ],
          role: "separator",
          key: `ellipsis-${J ? "last" : "first"}`
        },
        [
          me(
            "span",
            { class: ["page-link"] },
            St(JL, {}, n) || e.ellipsisText || "..."
          )
        ]
      ), X = (J, Ce) => {
        const ue = A(J.number) && !L, ie = a.value ? null : ue || L && Ce === 0 ? "0" : "-1", Re = {
          active: ue,
          disabled: a.value,
          page: J.number,
          index: J.number - 1,
          content: J.number
        }, Ee = St(aF, Re, n) || J.number, Ie = me(
          a.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !a.value && $ }],
            "aria-controls": e.ariaControls || null,
            "aria-disabled": a.value ? "true" : null,
            "aria-label": e.labelPage ? `${e.labelPage} ${J.number}` : null,
            role: "menuitemradio",
            type: a.value ? null : "button",
            tabindex: ie,
            onClick: (qe) => {
              a.value || w(qe, J.number);
            }
          },
          Ee
        );
        return me(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: a.value,
                active: ue,
                "flex-fill": $,
                "d-flex": $ && !a.value
              },
              e.pageClass
            ],
            role: "presentation",
            key: `page-${J.number}`
          },
          Ie
        );
      };
      if (!o.value && !r.value) {
        const J = O(
          1,
          e.labelFirstPage,
          eF,
          e.firstText,
          e.firstClass,
          1
        );
        x.push(J);
      }
      const Q = O(
        e.modelValue - 1,
        e.labelFirstPage,
        rF,
        e.prevText,
        e.prevClass,
        1
      );
      x.push(Q), r.value && D[0] !== 1 && x.push(X({ number: 1 }, 0)), f.value && x.push(j(!1)), k.value.forEach((J, Ce) => {
        const ue = f.value && r.value && D[0] !== 1 ? 1 : 0;
        x.push(X(J, Ce + ue));
      }), h.value && x.push(j(!0)), s.value && D[D.length - 1] !== u.value && x.push(X({ number: u.value }, -1));
      const re = O(
        e.modelValue + 1,
        e.labelNextPage,
        nF,
        e.nextText,
        e.nextClass,
        u.value
      );
      if (x.push(re), !s.value && !o.value) {
        const J = O(
          u.value,
          e.labelLastPage,
          tF,
          e.lastText,
          e.lastClass,
          u.value
        );
        x.push(J);
      }
      return me(
        "ul",
        {
          class: ["pagination", m.value, c.value, _.value],
          role: "menubar",
          "aria-disabled": a.value,
          "aria-label": e.ariaLabel || null
        },
        x
      );
    };
  }
}), sF = B({
  props: {
    container: {
      type: [String, Object],
      default: "body"
    },
    content: { type: String },
    id: { type: String },
    customClass: { type: String, default: "" },
    noninteractive: { type: [Boolean, String], default: !1 },
    placement: { type: String, default: "right" },
    target: {
      type: [String, Object],
      default: void 0
    },
    title: { type: String },
    delay: { type: [Number, Object], default: 0 },
    triggers: { type: String, default: "click" },
    show: { type: [Boolean, String], default: !1 },
    variant: { type: String, default: void 0 },
    html: { type: [Boolean, String], default: !0 },
    sanitize: { type: [Boolean, String], default: !1 },
    offset: { type: String, default: "0" }
  },
  emits: ["show", "shown", "hide", "hidden", "inserted"],
  setup(e, { emit: t, slots: n }) {
    C(b(e, "noninteractive"));
    const a = C(b(e, "show")), r = C(b(e, "html")), i = C(b(e, "sanitize")), o = te(), s = te(), l = te(), c = te(), u = te(), d = E(() => ({
      [`b-popover-${e.variant}`]: e.variant !== void 0
    })), f = (y) => {
      if (typeof y == "string" || y instanceof HTMLElement)
        return y;
      if (typeof y < "u")
        return y.$el;
    }, p = (y) => {
      if (y)
        return typeof y == "string" ? document.getElementById(y) || void 0 : y;
    }, h = (y) => {
      s.value = p(f(y)), s.value && (l.value = new gr(s.value, {
        customClass: e.customClass,
        container: f(e.container),
        trigger: e.triggers,
        placement: e.placement,
        title: e.title || n.title ? c.value : "",
        content: u.value,
        html: r.value,
        delay: e.delay,
        sanitize: i.value,
        offset: e.offset
      }));
    };
    return je(() => {
      var y, w, m;
      sn(() => {
        h(e.target);
      }), (w = (y = o.value) == null ? void 0 : y.parentNode) == null || w.removeChild(o.value), a.value && ((m = l.value) == null || m.show());
    }), ju(() => {
      var y;
      (y = l.value) == null || y.dispose();
    }), $e(
      () => e.target,
      (y) => {
        var w;
        (w = l.value) == null || w.dispose(), h(y);
      }
    ), $e(
      () => a.value,
      (y, w) => {
        var m, _;
        y !== w && (y ? (m = l.value) == null || m.show() : (_ = l.value) == null || _.hide());
      }
    ), Qe(s, "show.bs.popover", () => t("show")), Qe(s, "shown.bs.popover", () => t("shown")), Qe(s, "hide.bs.popover", () => t("hide")), Qe(s, "hidden.bs.popover", () => t("hidden")), Qe(s, "inserted.bs.popover", () => t("inserted")), {
      element: o,
      titleRef: c,
      contentRef: u,
      classes: d
    };
  }
}), lF = ["id"], uF = { ref: "titleRef" }, cF = { ref: "contentRef" };
function dF(e, t, n, a, r, i) {
  return g(), T("div", {
    id: e.id,
    ref: "element",
    class: W(["popover b-popover", e.classes]),
    role: "tooltip",
    tabindex: "-1"
  }, [
    S("div", uF, [
      F(e.$slots, "title", {}, () => [
        de(G(e.title), 1)
      ])
    ], 512),
    S("div", cF, [
      F(e.$slots, "default", {}, () => [
        de(G(e.content), 1)
      ])
    ], 512)
  ], 10, lF);
}
const fF = /* @__PURE__ */ lt(sF, [["render", dF]]), Ly = B({
  props: {
    animated: { type: [Boolean, String], default: !1 },
    label: { type: String },
    labelHtml: { type: String },
    max: { type: [Number, String] },
    precision: { type: [Number, String], default: 0 },
    showProgress: { type: [Boolean, String], default: !1 },
    showValue: { type: [Boolean, String], default: !1 },
    striped: { type: [Boolean, String], default: !1 },
    value: { type: [Number, String], default: 0 },
    variant: { type: String }
  },
  setup(e, { slots: t }) {
    const n = C(b(e, "animated")), a = C(b(e, "showProgress")), r = C(b(e, "showValue")), i = C(b(e, "striped")), o = ct(Fy), s = E(() => ({
      "progress-bar-animated": n.value || (o == null ? void 0 : o.animated),
      "progress-bar-striped": i.value || (o == null ? void 0 : o.striped) || n.value || (o == null ? void 0 : o.animated),
      [`bg-${e.variant}`]: e.variant !== void 0
    })), l = E(() => {
      if (r.value || (o == null ? void 0 : o.showValue))
        return parseFloat(e.value).toFixed(e.precision);
      if (a.value || (o == null ? void 0 : o.showProgress)) {
        const d = (e.value * 100 / parseInt(e.max || 100)).toString();
        return parseFloat(d).toFixed(e.precision);
      }
      return e.label || "";
    }), c = E(() => e.max || (o == null ? void 0 : o.max) ? `${e.value * 100 / parseInt(e.max || (o == null ? void 0 : o.max))}%` : typeof e.value == "string" ? e.value : `${e.value}%`), u = E(() => {
      const d = {
        class: ["progress-bar", s.value],
        role: "progressbar",
        "aria-valuenow": e.value,
        "aria-valuemin": 0,
        "aria-valuemax": e.max,
        style: { width: c.value }
      };
      return e.labelHtml ? {
        ...d,
        innerHTML: e.labelHtml
      } : d;
    });
    return () => {
      var d;
      return me("div", u.value, ((d = t.default) == null ? void 0 : d.call(t)) || l.value);
    };
  }
}), Fy = Symbol(), pF = /* @__PURE__ */ B({
  __name: "BProgress",
  props: {
    variant: null,
    max: null,
    height: null,
    animated: { default: !1 },
    precision: { default: 0 },
    showProgress: { default: !1 },
    showValue: { default: !1 },
    striped: { default: !1 },
    value: { default: 0 }
  },
  setup(e) {
    const t = e, n = C(b(t, "animated")), a = C(b(t, "showProgress")), r = C(b(t, "showValue")), i = C(b(t, "striped"));
    return ln(Fy, {
      animated: n.value,
      max: t.max,
      showProgress: a.value,
      showValue: r.value,
      striped: i.value
    }), (o, s) => (g(), T("div", {
      class: "progress",
      style: tr({ height: e.height })
    }, [
      F(o.$slots, "default", {}, () => [
        P(Ly, as(rs({
          animated: v(n),
          max: e.max,
          precision: e.precision,
          showProgress: v(a),
          showValue: v(r),
          striped: v(i),
          value: e.value,
          variant: e.variant
        })), null, 16)
      ])
    ], 4));
  }
}), uv = zs("cols", [""], { type: [String, Number], default: null }), vF = B({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: !1 },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...uv
  },
  setup(e) {
    const t = C(b(e, "noGutters")), n = Zg(e, uv, "cols", "row-cols");
    return {
      classes: E(() => ({
        [`gx-${e.gutterX}`]: e.gutterX !== null,
        [`gy-${e.gutterY}`]: e.gutterY !== null,
        "g-0": t.value,
        [`align-items-${e.alignV}`]: e.alignV !== null,
        [`justify-content-${e.alignH}`]: e.alignH !== null,
        [`align-content-${e.alignContent}`]: e.alignContent !== null
      })),
      rowColsClasses: n
    };
  }
});
function hF(e, t, n, a, r, i) {
  return g(), z(ce(e.tag), {
    class: W(["row", [e.classes, e.rowColsClasses]])
  }, {
    default: N(() => [
      F(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const mF = /* @__PURE__ */ lt(vF, [["render", hF]]), Co = /* @__PURE__ */ B({
  __name: "BSkeleton",
  props: {
    height: null,
    width: null,
    size: null,
    animation: { default: "wave" },
    type: { default: "text" },
    variant: null
  },
  setup(e) {
    const t = e, n = E(() => [
      `b-skeleton-${t.type}`,
      {
        [`b-skeleton-animate-${t.animation}`]: typeof t.animation == "boolean" ? !1 : t.animation,
        [`bg-${t.variant}`]: t.variant !== void 0
      }
    ]), a = E(() => ({
      width: t.size || t.width,
      height: t.size || t.height
    }));
    return (r, i) => (g(), T("div", {
      class: W(["b-skeleton", v(n)]),
      style: tr(v(a))
    }, null, 6));
  }
}), gF = /* @__PURE__ */ B({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(e) {
    const t = e, n = E(() => [`b-skeleton-animate-${t.animation}`]);
    return (a, r) => (g(), T("div", {
      class: W(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", v(n)])
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}), Hy = /* @__PURE__ */ B({
  __name: "BTableSimple",
  props: {
    bordered: { default: !1 },
    borderless: { default: !1 },
    borderVariant: null,
    captionTop: { default: !1 },
    dark: { default: !1 },
    hover: { default: !1 },
    responsive: { type: [Boolean, String], default: !1 },
    stacked: { type: [Boolean, String], default: !1 },
    striped: { default: !1 },
    small: { default: !1 },
    tableClass: null,
    tableVariant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "captionTop")), a = C(b(t, "borderless")), r = C(b(t, "bordered")), i = C(b(t, "dark")), o = C(b(t, "hover")), s = C(b(t, "small")), l = C(b(t, "striped")), c = E(() => [
      "table",
      "b-table",
      {
        "table-bordered": r.value,
        "table-borderless": a.value,
        [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
        "caption-top": n.value,
        "table-dark": i.value,
        "table-hover": o.value,
        "b-table-stacked": typeof t.stacked == "boolean" && t.stacked,
        [`b-table-stacked-${t.stacked}`]: typeof t.stacked == "string",
        "table-striped": l.value,
        "table-sm": s.value,
        [`table-${t.tableVariant}`]: t.tableVariant !== void 0
      },
      t.tableClass
    ]), u = E(() => [
      {
        "table-responsive": typeof t.responsive == "boolean" && t.responsive,
        [`table-responsive-${t.responsive}`]: typeof t.responsive == "string"
      }
    ]);
    return (d, f) => e.responsive ? (g(), T("div", {
      key: 1,
      class: W(v(u))
    }, [
      S("table", {
        role: "table",
        class: W(v(c))
      }, [
        F(d.$slots, "default")
      ], 2)
    ], 2)) : (g(), T("table", {
      key: 0,
      role: "table",
      class: W(v(c))
    }, [
      F(d.$slots, "default")
    ], 2));
  }
}), yF = { key: 0 }, bF = { key: 1 }, _F = /* @__PURE__ */ B({
  __name: "BSkeletonTable",
  props: {
    animation: { default: "wave" },
    columns: { default: 5 },
    hideHeader: { default: !1 },
    rows: { default: 3 },
    showFooter: { default: !1 },
    tableProps: null
  },
  setup(e) {
    const t = e, n = C(b(t, "hideHeader")), a = C(b(t, "showFooter"));
    return (r, i) => (g(), z(Hy, as(rs(e.tableProps)), {
      default: N(() => [
        v(n) ? H("", !0) : (g(), T("thead", yF, [
          S("tr", null, [
            (g(!0), T(Z, null, he(e.columns, (o, s) => (g(), T("th", { key: s }, [
              P(Co)
            ]))), 128))
          ])
        ])),
        S("tbody", null, [
          (g(!0), T(Z, null, he(e.rows, (o, s) => (g(), T("tr", { key: s }, [
            (g(!0), T(Z, null, he(e.columns, (l, c) => (g(), T("td", { key: c }, [
              P(Co, { width: "75%" })
            ]))), 128))
          ]))), 128))
        ]),
        v(a) ? (g(), T("tfoot", bF, [
          S("tr", null, [
            (g(!0), T(Z, null, he(e.columns, (o, s) => (g(), T("th", { key: s }, [
              P(Co)
            ]))), 128))
          ])
        ])) : H("", !0)
      ]),
      _: 1
    }, 16));
  }
}), EF = /* @__PURE__ */ B({
  __name: "BSkeletonWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(e) {
    const t = C(b(e, "loading"));
    return (n, a) => v(t) ? F(n.$slots, "loading", { key: 0 }) : F(n.$slots, "default", { key: 1 });
  }
}), wF = {
  key: 0,
  class: "visually-hidden"
}, SF = /* @__PURE__ */ B({
  __name: "BSpinner",
  props: {
    label: null,
    role: { default: "status" },
    small: { default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "small")), a = E(() => ({
      "spinner-border": t.type === "border",
      "spinner-border-sm": t.type === "border" && n.value,
      "spinner-grow": t.type === "grow",
      "spinner-grow-sm": t.type === "grow" && n.value,
      [`text-${t.variant}`]: t.variant !== void 0
    }));
    return (r, i) => (g(), z(ce(e.tag), {
      class: W(v(a)),
      role: e.label || r.$slots.label ? e.role : null,
      "aria-hidden": e.label || r.$slots.label ? null : !0
    }, {
      default: N(() => [
        e.label || r.$slots.label ? (g(), T("span", wF, [
          F(r.$slots, "label", {}, () => [
            de(G(e.label), 1)
          ])
        ])) : H("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), CF = /* @__PURE__ */ B({
  __name: "BTableContainer",
  props: {
    responsive: { type: [Boolean, String], default: !1 },
    responsiveClasses: null
  },
  setup(e) {
    return (t, n) => e.responsive ? (g(), T("div", {
      key: 0,
      class: W(e.responsiveClasses)
    }, [
      F(t.$slots, "default")
    ], 2)) : F(t.$slots, "default", { key: 1 });
  }
}), TF = () => ({
  normaliseFields: (e, t) => {
    const n = [];
    return !(e != null && e.length) && (t == null ? void 0 : t.length) ? (Object.keys(t[0]).forEach((a) => n.push({ key: a, label: Zp(a) })), n) : (Array.isArray(e) && e.forEach((a) => {
      typeof a == "string" ? n.push({ key: a, label: Zp(a) }) : UP(a) && a.key && br(a.key) && n.push({ ...a });
    }), n);
  },
  sortItems: (e, t, n) => {
    if (!n || !n.key)
      return t;
    const a = n.key;
    return t.sort(
      (r, i) => r[a] > i[a] ? n.desc ? -1 : 1 : i[a] > r[a] ? n.desc ? 1 : -1 : 0
    );
  }
}), kF = ["title", "abbr", "onClick"], xF = { class: "d-flex flex-nowrap align-items-center gap-1" }, DF = {
  key: 0,
  class: "text-muted small"
}, AF = { key: 1 }, RF = { key: 0 }, IF = ["title", "abbr"], OF = { key: 1 }, $F = { key: 2 }, NF = /* @__PURE__ */ B({
  __name: "BTable",
  props: {
    align: null,
    caption: null,
    captionTop: { default: !1 },
    borderless: { default: !1 },
    bordered: { default: !1 },
    borderVariant: null,
    dark: { default: !1 },
    fields: { default: () => [] },
    footClone: { default: !1 },
    hover: { default: !1 },
    items: { default: () => [] },
    responsive: { type: [Boolean, String], default: !1 },
    small: { default: !1 },
    striped: { default: !1 },
    variant: null,
    sortBy: null,
    sortDesc: { type: Boolean },
    sortInternal: { type: Boolean, default: !0 }
  },
  emits: ["update:sortBy", "update:sortDesc", "sorted"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "captionTop")), r = C(b(n, "borderless")), i = C(b(n, "bordered")), o = C(b(n, "dark")), s = C(b(n, "footClone")), l = C(b(n, "hover")), c = C(b(n, "small")), u = C(b(n, "striped")), d = E(() => [
      "table",
      {
        [`align-${n.align}`]: n.align !== void 0,
        [`table-${n.variant}`]: n.variant !== void 0,
        "table-striped": u.value,
        "table-hover": l.value,
        "table-dark": o.value,
        "table-bordered": i.value,
        [`border-${n.borderVariant}`]: n.borderVariant !== void 0,
        "table-borderless": r.value,
        "table-sm": c.value,
        "caption-top": a.value
      }
    ]), f = TF(), p = E(() => f.normaliseFields(n.fields, n.items)), h = E(
      () => n.sortInternal ? f.sortItems(n.fields, n.items, { key: n.sortBy, desc: n.sortDesc }) : n.items
    ), y = E(() => ({
      "table-responsive": typeof n.responsive == "boolean" && n.responsive,
      [`table-responsive-${n.responsive}`]: typeof n.responsive == "string"
    })), w = E(
      () => n.fields.filter((k) => typeof k == "string" ? !1 : k.sortable).length > 0
    ), m = (k) => {
      //!! make sure to enable this flag after implementing the table.busy feature.
      const x = typeof k == "string" ? k : k.key, D = typeof k == "string" ? !1 : k.sortable;
      w.value === !0 && D === !0 && (x === n.sortBy ? t("update:sortDesc", !n.sortDesc) : (t("update:sortBy", typeof k == "string" ? k : k.key), t("update:sortDesc", !1)), t("sorted", n.sortBy, n.sortDesc));
    }, _ = (k) => [
      k.class,
      k.thClass,
      k.variant ? `table-${k.variant}` : void 0,
      { "b-table-sortable-column": w.value && k.sortable }
    ];
    return (k, x) => (g(), z(CF, {
      responsive: e.responsive,
      "responsive-classes": v(y)
    }, {
      default: N(() => [
        S("table", {
          class: W(v(d))
        }, [
          S("thead", null, [
            k.$slots["thead-top"] ? F(k.$slots, "thead-top", { key: 0 }) : H("", !0),
            S("tr", null, [
              (g(!0), T(Z, null, he(v(p), (D) => (g(), T("th", ye({
                key: D.key,
                scope: "col",
                class: _(D),
                title: D.headerTitle,
                abbr: D.headerAbbr,
                style: D.thStyle
              }, D.thAttr, {
                onClick: (A) => m(D)
              }), [
                S("div", xF, [
                  v(w) && D.sortable && D.key === e.sortBy ? (g(), T("span", DF, [
                    Ue(S("span", null, "\u25BC", 512), [
                      [Wl, e.sortDesc === !0]
                    ]),
                    Ue(S("span", null, "\u25B2", 512), [
                      [Wl, e.sortDesc === !1]
                    ])
                  ])) : H("", !0),
                  S("div", null, [
                    k.$slots["head(" + D.key + ")"] ? F(k.$slots, "head(" + D.key + ")", {
                      key: 0,
                      label: D.label
                    }) : (g(), T(Z, { key: 1 }, [
                      de(G(D.label), 1)
                    ], 64))
                  ])
                ])
              ], 16, kF))), 128))
            ]),
            k.$slots["thead-sub"] ? (g(), T("tr", AF, [
              (g(!0), T(Z, null, he(v(p), (D) => (g(), T("td", {
                key: D.key,
                scope: "col",
                class: W([D.class, D.thClass, D.variant ? `table-${D.variant}` : ""])
              }, [
                k.$slots["thead-sub"] ? F(k.$slots, "thead-sub", ye({
                  key: 0,
                  items: v(p)
                }, D)) : (g(), T(Z, { key: 1 }, [
                  de(G(D.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : H("", !0)
          ]),
          S("tbody", null, [
            (g(!0), T(Z, null, he(v(h), (D, A) => (g(), T("tr", {
              key: A,
              class: W(D._rowVariant ? `table-${D._rowVariant}` : null)
            }, [
              (g(!0), T(Z, null, he(v(p), (L, $) => (g(), T("td", ye({
                key: L.key
              }, L.tdAttr, {
                class: [
                  L.class,
                  L.tdClass,
                  L.variant ? `table-${L.variant}` : "",
                  (D == null ? void 0 : D._cellVariants) && (D == null ? void 0 : D._cellVariants[L.key]) ? `table-${D == null ? void 0 : D._cellVariants[L.key]}` : ""
                ]
              }), [
                k.$slots["cell(" + L.key + ")"] ? F(k.$slots, "cell(" + L.key + ")", {
                  key: 0,
                  value: D[L.key],
                  index: $,
                  item: D,
                  items: e.items
                }) : (g(), T(Z, { key: 1 }, [
                  de(G(D[L.key]), 1)
                ], 64))
              ], 16))), 128))
            ], 2))), 128))
          ]),
          v(s) ? (g(), T("tfoot", RF, [
            S("tr", null, [
              (g(!0), T(Z, null, he(v(p), (D) => (g(), T("th", ye({
                key: D.key
              }, D.thAttr, {
                scope: "col",
                class: [D.class, D.thClass, D.variant ? `table-${D.variant}` : ""],
                title: D.headerTitle,
                abbr: D.headerAbbr,
                style: D.thStyle
              }), G(D.label), 17, IF))), 128))
            ])
          ])) : H("", !0),
          k.$slots["table-caption"] ? (g(), T("caption", OF, [
            F(k.$slots, "table-caption")
          ])) : e.caption ? (g(), T("caption", $F, G(e.caption), 1)) : H("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["responsive", "responsive-classes"]));
  }
}), MF = /* @__PURE__ */ B({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`thead-${t.variant}`]: t.variant !== void 0
    }));
    return (a, r) => (g(), T("tbody", {
      role: "rowgroup",
      class: W(v(n))
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}), PF = ["scope", "colspan", "rowspan", "data-label"], BF = { key: 0 }, VF = /* @__PURE__ */ B({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "stickyColumn")), a = E(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": n.value,
      "table-b-table-default": n.value && !t.variant
    })), r = E(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (i, o) => (g(), T("td", {
      role: "cell",
      scope: v(r),
      class: W(v(a)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading ? (g(), T("div", BF, [
        F(i.$slots, "default")
      ])) : F(i.$slots, "default", { key: 1 })
    ], 10, PF));
  }
}), LF = /* @__PURE__ */ B({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, r) => (g(), T("tfoot", {
      role: "rowgroup",
      class: W(v(n))
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}), FF = ["scope", "colspan", "rowspan", "data-label"], HF = { key: 0 }, zF = /* @__PURE__ */ B({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(e) {
    const t = e, n = C(b(t, "stickyColumn")), a = E(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": n.value,
      "table-b-table-default": n.value && t.variant === void 0
    })), r = E(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (i, o) => (g(), T("th", {
      role: "columnheader",
      scope: v(r),
      class: W(v(a)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading !== void 0 ? (g(), T("div", HF, [
        F(i.$slots, "default")
      ])) : F(i.$slots, "default", { key: 1 })
    ], 10, FF));
  }
}), UF = /* @__PURE__ */ B({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, r) => (g(), T("thead", {
      role: "rowgroup",
      class: W(v(n))
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}), jF = /* @__PURE__ */ B({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, n = E(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (a, r) => (g(), T("tr", {
      role: "row",
      class: W(v(n))
    }, [
      F(a.$slots, "default")
    ], 2));
  }
}), WF = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], zy = Symbol(), qF = /* @__PURE__ */ B({
  __name: "BTabs",
  props: {
    activeNavItemClass: { default: void 0 },
    activeTabClass: { default: void 0 },
    align: { default: void 0 },
    card: { default: !1 },
    contentClass: { default: void 0 },
    end: { default: !1 },
    fill: { default: !1 },
    id: { default: void 0 },
    justified: { default: !1 },
    lazy: { default: !1 },
    navClass: { default: void 0 },
    navWrapperClass: { default: void 0 },
    noFade: { default: !1 },
    noNavStyle: { default: !1 },
    pills: { default: !1 },
    small: { default: !1 },
    tag: { default: "div" },
    vertical: { default: !1 },
    modelValue: { default: -1 }
  },
  emits: ["update:modelValue", "activate-tab", "click"],
  setup(e, { emit: t }) {
    const n = e, a = C(b(n, "card")), r = C(b(n, "end")), i = C(b(n, "fill")), o = C(b(n, "justified")), s = C(b(n, "lazy")), l = C(b(n, "noFade")), c = C(b(n, "noNavStyle")), u = C(b(n, "pills")), d = C(b(n, "small")), f = C(b(n, "vertical")), p = wa(), h = te(n.modelValue), y = te(""), w = E({
      get: () => h.value,
      set: ($) => {
        h.value = $, m.value.length > 0 && $ >= 0 && $ < m.value.length ? y.value = m.value[$].buttonId : y.value = "", t("update:modelValue", $);
      }
    }), m = E(() => {
      let $ = [];
      return p.default && ($ = L(p).map((O, j) => {
        O.props || (O.props = {});
        const X = O.props["button-id"] || on("tab"), Q = O.props.id || on(), re = w.value > -1 ? j === w.value : O.props.active === "", J = O.props["title-item-class"], Ce = O.props["title-link-attributes"];
        return {
          buttonId: X,
          contentId: Q,
          active: re,
          disabled: O.props.disabled === "" || O.props.disabled === !0,
          navItemClasses: [
            {
              active: re,
              disabled: O.props.disabled === "" || O.props.disabled === !0
            },
            re && n.activeNavItemClass ? n.activeNavItemClass : null,
            O.props["title-link-class"]
          ],
          tabClasses: [
            {
              fade: !l.value
            },
            re && n.activeTabClass ? n.activeTabClass : null
          ],
          target: `#${Q}`,
          title: O.props.title,
          titleItemClass: J,
          titleLinkAttributes: Ce,
          onClick: O.props.onClick,
          tab: O
        };
      })), $;
    }), _ = E(() => !((m == null ? void 0 : m.value) && m.value.length > 0)), k = E(() => ({
      "d-flex align-items-start": f.value
    })), x = E(() => ({
      "nav-pills": u.value,
      "flex-column me-3": f.value,
      [`justify-content-${n.align}`]: !!n.align,
      "nav-fill": i.value,
      "card-header-tabs": a.value,
      "nav-justified": o.value,
      "nav-tabs": !c.value && !u.value,
      small: d.value
    })), D = ($) => {
      let O = !1;
      if ($ !== void 0 && $ > -1 && $ < m.value.length && !m.value[$].disabled && (w.value < 0 || m.value[$].buttonId !== y.value)) {
        const j = new Hs("activate-tab", { cancelable: !0, vueTarget: this });
        t("activate-tab", $, w.value, j), j.defaultPrevented || (w.value = $, O = !0);
      }
      return !O && n.modelValue !== w.value && t("update:modelValue", w.value), O;
    }, A = ($, O) => {
      var j;
      D(O), O >= 0 && !m.value[O].disabled && ((j = m.value[O]) == null ? void 0 : j.onClick) && ty(m.value[O].onClick) && m.value[O].onClick($);
    }, L = ($) => !$ || !$.default ? [] : $.default().reduce((O, j) => (typeof j.type == "symbol" ? O = O.concat(j.children) : O.push(j), O), []).filter((O) => {
      var j;
      return ((j = O.type) == null ? void 0 : j.__name) === "BTab";
    });
    return D(h.value), $e(
      () => n.modelValue,
      ($, O) => {
        if ($ === O)
          return;
        if ($ = Math.max($, -1), O = Math.max(O, -1), m.value.length <= 0) {
          w.value = -1;
          return;
        }
        const j = $ > O;
        let X = $;
        const Q = m.value.length - 1;
        for (; X >= 0 && X <= Q && m.value[X].disabled; )
          X += j ? 1 : -1;
        if (X < 0) {
          D(0);
          return;
        }
        if (X >= m.value.length) {
          D(m.value.length - 1);
          return;
        }
        D(X);
      }
    ), $e(
      () => m.value,
      () => {
        let $ = m.value.map((O) => O.active && !O.disabled).lastIndexOf(!0);
        $ < 0 && (w.value >= m.value.length ? $ = m.value.map((O) => !O.disabled).lastIndexOf(!0) : m.value[w.value] && !m.value[w.value].disabled && ($ = w.value)), $ < 0 && ($ = m.value.map((O) => !O.disabled).indexOf(!0)), m.value.forEach((O, j) => O.active = j === $), D($);
      }
    ), je(() => {
      if (w.value < 0 && m.value.length > 0 && !m.value.some(($) => $.active)) {
        const $ = m.value.map((O) => !O.disabled).indexOf(!0);
        D($ >= 0 ? $ : -1);
      }
    }), ln(zy, {
      lazy: s.value,
      card: a.value
    }), ($, O) => (g(), z(ce(e.tag), {
      id: e.id,
      class: W(["tabs", v(k)])
    }, {
      default: N(() => [
        v(r) ? (g(), T("div", {
          key: 0,
          class: W(["tab-content", e.contentClass])
        }, [
          (g(!0), T(Z, null, he(v(m), ({ tab: j, contentId: X, tabClasses: Q, active: re }, J) => (g(), z(ce(j), {
            key: J,
            id: X,
            class: W(Q),
            active: re
          }, null, 8, ["id", "class", "active"]))), 128)),
          v(_) ? (g(), T("div", {
            key: "bv-empty-tab",
            class: W(["tab-pane active", { "card-body": v(a) }])
          }, [
            F($.$slots, "empty")
          ], 2)) : H("", !0)
        ], 2)) : H("", !0),
        S("div", {
          class: W([e.navWrapperClass, { "card-header": v(a), "ms-auto": e.vertical && v(r) }])
        }, [
          S("ul", {
            class: W(["nav", [v(x), e.navClass]]),
            role: "tablist"
          }, [
            F($.$slots, "tabs-start"),
            (g(!0), T(Z, null, he(v(m), ({ tab: j, buttonId: X, contentId: Q, navItemClasses: re, active: J, target: Ce }, ue) => (g(), T("li", {
              key: ue,
              class: W(["nav-item", j.props["title-item-class"]])
            }, [
              S("button", ye({
                id: X,
                class: ["nav-link", re],
                "data-bs-toggle": "tab",
                "data-bs-target": Ce,
                role: "tab",
                "aria-controls": Q,
                "aria-selected": J
              }, j.props["title-link-attributes"], {
                onClick: ra((ie) => A(ie, ue), ["stop", "prevent"])
              }), [
                j.children && j.children.title ? (g(), z(ce(j.children.title), { key: 0 })) : (g(), T(Z, { key: 1 }, [
                  de(G(j.props.title), 1)
                ], 64))
              ], 16, WF)
            ], 2))), 128)),
            F($.$slots, "tabs-end")
          ], 2)
        ], 2),
        v(r) ? H("", !0) : (g(), T("div", {
          key: 1,
          class: W(["tab-content", e.contentClass])
        }, [
          (g(!0), T(Z, null, he(v(m), ({ tab: j, contentId: X, tabClasses: Q, active: re }, J) => (g(), z(ce(j), {
            key: J,
            id: X,
            class: W(Q),
            active: re
          }, null, 8, ["id", "class", "active"]))), 128)),
          v(_) ? (g(), T("div", {
            key: "bv-empty-tab",
            class: W(["tab-pane active", { "card-body": v(a) }])
          }, [
            F($.$slots, "empty")
          ], 2)) : H("", !0)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), GF = /* @__PURE__ */ B({
  __name: "BTab",
  props: {
    id: null,
    title: null,
    active: { default: !1 },
    buttonId: { default: void 0 },
    disabled: { default: !1 },
    lazy: { default: !1 },
    noBody: { type: [Boolean, String], default: !1 },
    tag: { default: "div" },
    titleItemClass: { default: void 0 },
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: { default: void 0 }
  },
  setup(e) {
    const t = e, n = C(b(t, "active")), a = C(b(t, "disabled")), r = C(b(t, "lazy")), i = ct(zy, null), o = E(() => (i == null ? void 0 : i.lazy) || r.value), s = E(() => n.value && !a.value), l = E(() => s.value || !o.value), c = E(() => ({
      active: n.value,
      show: n.value,
      "card-body": (i == null ? void 0 : i.card) && t.noBody === !1
    }));
    return (u, d) => (g(), z(ce(e.tag), {
      id: e.id,
      class: W(["tab-pane", v(c)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: N(() => [
        v(l) ? F(u.$slots, "default", { key: 0 }) : H("", !0)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), YF = {
  BAccordion: i2,
  BAccordionItem: f2,
  BNavText: TL,
  BAlert: v2,
  BAvatar: b2,
  BAvatarGroup: h2,
  BNavForm: vL,
  BBadge: C2,
  BBreadcrumb: A2,
  BBreadcrumbItem: gy,
  BButton: fi,
  BButtonGroup: O2,
  BButtonToolbar: N2,
  BCard: V2,
  BCardBody: L2,
  BCardFooter: H2,
  BCardGroup: z2,
  BCardHeader: j2,
  BCardImg: W2,
  BCardSubTitle: _y,
  BCardText: K2,
  BCardTitle: by,
  BCarousel: lB,
  BCarouselSlide: vB,
  BCloseButton: yy,
  BCol: Mr,
  BCollapse: hy,
  BContainer: SB,
  BDropdown: xy,
  BDropdownDivider: xB,
  BDropdownForm: OB,
  BDropdownGroup: PB,
  BDropdownHeader: FB,
  BDropdownItem: UB,
  BDropdownItemButton: qB,
  BDropdownText: ZB,
  BForm: Dy,
  BFormCheckbox: Ay,
  BFormCheckboxGroup: lV,
  BFormFloatingLabel: tV,
  BFormGroup: mV,
  BFormInput: _V,
  BFormInvalidFeedback: Hu,
  BFormRadio: Iy,
  BFormRadioGroup: kV,
  BFormRow: wo,
  BFormSelect: RV,
  BFormSelectOption: Jc,
  BFormSelectOptionGroup: Oy,
  BFormText: zu,
  BFormTextarea: XV,
  BFormTag: $y,
  BFormTags: qV,
  BFormValidFeedback: Uu,
  BImg: wy,
  BInputGroup: aL,
  BInputGroupAddon: ed,
  BInputGroupAppend: rL,
  BInputGroupPrepend: iL,
  BInputGroupText: Ny,
  BLink: xt,
  BListGroup: oL,
  BListGroupItem: sL,
  BModal: fL,
  BNav: pL,
  BNavbar: kL,
  BNavbarBrand: AL,
  BNavbarNav: RL,
  BNavbarToggle: zL,
  BNavItem: bL,
  BNavItemDropdown: EL,
  BOffcanvas: YL,
  BOverlay: ZL,
  BPagination: oF,
  BPopover: fF,
  BProgress: pF,
  BProgressBar: Ly,
  BRow: mF,
  BSkeleton: Co,
  BSkeletonIcon: gF,
  BSkeletonTable: _F,
  BSkeletonWrapper: EF,
  BSpinner: SF,
  BTab: GF,
  BTable: NF,
  BTableSimple: Hy,
  BTbody: MF,
  BTd: VF,
  BTfoot: LF,
  BTh: zF,
  BThead: UF,
  BTr: jF,
  BToast: ky,
  BToaster: Fu,
  BToastContainer: Fu,
  BTabs: qF,
  BTransition: ts,
  BToastPlugin: _B
}, JF = {
  install(e, t = {}) {
    Object.entries(YF).forEach(([n, a]) => {
      e.component(n, a);
    }), Object.entries(FL).forEach(([n, a]) => {
      e.directive(n, a);
    }), SP(e);
  }
};
Pe.add(ms);
Pe.add(Es);
Pe.add(hs);
Pe.add(bs);
Pe.add(gs);
Pe.add(_s);
Pe.add(ys);
export {
  sa as F,
  JF as M,
  Ut as _,
  Cs as a,
  QF as b,
  nr as e,
  ZF as i,
  yT as u
};
