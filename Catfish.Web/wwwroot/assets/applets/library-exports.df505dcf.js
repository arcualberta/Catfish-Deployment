var EE = Object.defineProperty;
var TE = (M, A, I) => A in M ? EE(M, A, { enumerable: !0, configurable: !0, writable: !0, value: I }) : M[A] = I;
var PM = (M, A, I) => (TE(M, typeof A != "symbol" ? A + "" : A, I), I);
import { defineComponent as v, ref as DM, unref as e, openBlock as T, createElementBlock as s, createElementVNode as l, normalizeClass as F, withModifiers as FI, createCommentVNode as B, pushScopeId as WI, popScopeId as kI, watch as mM, createBlock as Z, Transition as LL, withCtx as h, toDisplayString as P, h as sM, resolveComponent as yM, createVNode as W, Fragment as MM, renderList as eM, computed as y, withDirectives as VM, vModelCheckbox as KI, shallowRef as Di, inject as tA, reactive as fA, nextTick as DI, provide as NI, onMounted as _M, createTextVNode as IM, vModelText as bg, vModelSelect as Wg, withKeys as Ni, isRef as EA, vModelRadio as Li, resolveDynamicComponent as EM, renderSlot as Q, toRef as o, watchEffect as xE, readonly as aE, Comment as yE, onBeforeUnmount as aj, onActivated as yj, useSlots as jA, normalizeStyle as QA, mergeProps as wM, getCurrentInstance as nE, normalizeProps as qM, useAttrs as ti, guardReactiveProps as iA, Teleport as oE, vShow as lE, createSlots as ji, onUnmounted as sE, isReactive as cE } from "vue";
import { defineStore as TI, storeToRefs as nj, createPinia as tL } from "pinia";
var rg = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.AttachmentField = "AttachmentField", M))(rg || {}), jL = /* @__PURE__ */ ((M) => (M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M))(jL || {}), rD = /* @__PURE__ */ ((M) => (M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M))(rD || {}), ui = /* @__PURE__ */ ((M) => (M.InfoSection = "Info Section", M))(ui || {}), rM = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M.InfoSection = "Info Section", M.AttachmentField = "AttachmentField", M))(rM || {});
const zE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextType: rg,
  MonolingualFieldType: jL,
  OptionFieldType: rD,
  InfoSectionType: ui,
  FieldType: rM
}, Symbol.toStringTag, { value: "Module" }));
var YE = function() {
  function M(A) {
    if (!A)
      throw new TypeError("Invalid argument; `value` has no value.");
    this.value = M.EMPTY, A && M.isGuid(A) && (this.value = A);
  }
  return M.isGuid = function(A) {
    var I = A.toString();
    return A && (A instanceof M || M.validator.test(I));
  }, M.create = function() {
    return new M([M.gen(2), M.gen(1), M.gen(1), M.gen(1), M.gen(3)].join("-"));
  }, M.createEmpty = function() {
    return new M("emptyguid");
  }, M.parse = function(A) {
    return new M(A);
  }, M.raw = function() {
    return [M.gen(2), M.gen(1), M.gen(1), M.gen(1), M.gen(3)].join("-");
  }, M.gen = function(A) {
    for (var I = "", g = 0; g < A; g++)
      I += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    return I;
  }, M.prototype.equals = function(A) {
    return M.isGuid(A) && this.value === A.toString();
  }, M.prototype.isEmpty = function() {
    return this.value === M.EMPTY;
  }, M.prototype.toString = function() {
    return this.value;
  }, M.prototype.toJSON = function() {
    return {
      value: this.value
    };
  }, M.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), M.EMPTY = "00000000-0000-0000-0000-000000000000", M;
}(), jM = YE;
const TA = {
  googleApiKey: "Use dev credentials from https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit",
  googleCalendarIds: ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  maxEvents: 10,
  initialView: "dayGridMonth",
  dataRepositoryApiRoot: "https://localhost:5020"
}, pD = TI("FormBuilderStore", {
  state: () => ({
    lang: ["en", "fr"],
    form: null,
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    loadForm(M) {
      let A = `${this.getApiRoot}/${M}`;
      console.log(A), fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.form = I;
      }).catch((I) => {
        console.error("Load Form API Error:", I);
      });
    },
    saveForm() {
      var g, D;
      if (!this.form) {
        console.error("Cannot save null form.");
        return;
      }
      const M = ((D = (g = this.form) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === jM.EMPTY;
      let A = `${this.getApiRoot}`, I = "";
      M ? (console.log("Saving new form."), this.form.id = jM.create().toString(), I = "POST") : (console.log("Updating existing form."), A = `${A}/${this.form.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.form),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": `${TA.dataRepositoryApiRoot}`,
            "Access-Control-Allow-Credentials": "true"
          }
        }
      ).then((N) => {
        if (N.ok)
          this.transientMessageModel.message = "The form saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (M && this.form && (this.form.id = jM.EMPTY), this.transientMessageModel.messageClass = "danger", N.status) {
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
      }).catch((N) => {
        M && this.form && (this.form.id = jM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Form Save API Error:", N);
      });
    },
    setApiRoot(M) {
      this.apiRoot = M;
    }
  },
  getters: {
    getApiRoot(M) {
      return M.apiRoot ? M.apiRoot : TA.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), kg = (M) => {
  const A = {
    id: jM.create().toString(),
    values: []
  };
  return (typeof M == "string" ? [M] : M).forEach((g) => {
    A.values.push({
      id: jM.create().toString(),
      lang: g
    });
  }), A;
}, Si = (M) => {
  const A = {
    id: jM.create().toString()
  };
  return M && (A.lang = M), A;
}, zu = () => jM.create().toString(), oj = (M, A, I) => {
  var D, N;
  let g;
  return A ? g = (D = M == null ? void 0 : M.values) == null ? void 0 : D.filter((L) => L.lang === A).map((L) => L.value) : g = (N = M == null ? void 0 : M.values) == null ? void 0 : N.map((L) => L.value), I ? g.join(I) : g;
}, rE = (M) => {
  const A = JSON.parse(JSON.stringify(M));
  return A.id = zu(), A.values.forEach((I) => {
    I.id = zu();
  }), A;
}, ii = (M, A) => {
  var D, N;
  var I = "", g = [];
  return M.multilingualTextValues && ((D = M.multilingualTextValues) == null ? void 0 : D.length) > 0 ? M.multilingualTextValues.forEach((L) => {
    I += oj(L, null, A);
  }) : M.monolingualTextValues && ((N = M.monolingualTextValues) == null ? void 0 : N.length) > 0 && (M.monolingualTextValues.forEach((L) => {
    g.push(L.value);
  }), I = g == null ? void 0 : g.join(A)), I;
};
function dE(M, A) {
  return {
    id: jM.create().toString(),
    isExtendedInput: !1,
    isExtendedInputRequired: !1,
    optionText: A || kg(M)
  };
}
const dg = (M, A) => UE(M.optionText, A);
function UE(M, A) {
  var I, g, D;
  return A ? (g = (I = M == null ? void 0 : M.values) == null ? void 0 : I.filter((N) => N.lang === A).map((N) => N.value)) == null ? void 0 : g.at(0) : (D = M == null ? void 0 : M.values) == null ? void 0 : D.map((N) => N.value);
}
const mE = (M) => {
  const A = JSON.parse(JSON.stringify(M));
  return A.id = jM.create(), A.optionText.id = jM.create(), A.optionText.values.forEach((I) => I.id = jM.create()), A;
}, lj = (M) => (WI("data-v-139cec3d"), M = M(), kI(), M), OE = {
  key: 0,
  class: "row"
}, hE = /* @__PURE__ */ lj(() => /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("h6", null, "File:")
], -1)), bE = { class: "col-sm-10" }, WE = ["onDragenter", "onDragleave", "onDrop"], kE = /* @__PURE__ */ lj(() => /* @__PURE__ */ l("div", null, "Drag or Drop File", -1)), pE = /* @__PURE__ */ lj(() => /* @__PURE__ */ l("div", null, "OR", -1)), QE = ["for"], vE = ["id"], GE = /* @__PURE__ */ v({
  __name: "AttachmentField",
  props: {
    model: null,
    elementId: null
  },
  setup(M) {
    const A = M, I = A.model.type === rM.AttachmentField, g = A.elementId;
    DM("");
    const D = DM(!1), N = () => {
      D.value = !D.value;
    };
    return (L, t) => e(I) ? (T(), s("div", OE, [
      hE,
      l("div", bE, [
        l("div", {
          class: F(["dropzone", { "active-dropzone": D.value }]),
          onDragenter: FI(N, ["prevent"]),
          onDragleave: FI(N, ["prevent"]),
          onDragover: t[0] || (t[0] = FI(() => {
          }, ["prevent"])),
          onDrop: FI(N, ["prevent"])
        }, [
          kE,
          pE,
          l("label", { for: e(g) }, "Select File ", 8, QE),
          l("input", {
            type: "file",
            id: e(g)
          }, null, 8, vE)
        ], 42, WE)
      ])
    ])) : B("", !0);
  }
});
const FM = (M, A) => {
  const I = M.__vccOpts || M;
  for (const [g, D] of A)
    I[g] = D;
  return I;
}, ei = /* @__PURE__ */ FM(GE, [["__scopeId", "data-v-139cec3d"]]), sj = (M) => Object.values(rD).map((A) => A).includes(M.type), Ci = (M) => Object.values(rg).map((A) => A).includes(M.type), wi = (M) => Object.values(jL).map((A) => A).includes(M.type), Ei = (M) => Object.values(jL).map((A) => A).includes(M.type), fE = (M) => Object.values(ei).map((A) => A).includes(M.type), Ti = (M, A) => {
  const I = oj(M.title, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, xi = (M, A) => {
  const I = oj(M.description, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, JE = (M, A) => {
  var g, D;
  const I = {
    id: jM.create().toString(),
    fieldId: M.id
  };
  if (sj(M))
    I.selectedOptionIds = [], M.allowCustomOptionValues && (I.customOptionValues = []), (g = M.options) != null && g.find((N) => N.isExtendedInput) && (I.extendedOptionValues = []);
  else if (fE(M))
    I.fileReferences = [], M.allowCustomOptionValues && (I.customOptionValues = []), (D = M.options) != null && D.find((N) => N.isExtendedInput) && (I.extendedOptionValues = []);
  else if (Ci(M)) {
    const N = typeof A == "string" ? [A] : A;
    I.multilingualTextValues = [kg(N)];
  } else
    wi(M) && (I.monolingualTextValues = [Si(null)]);
  return I;
}, ai = (M, A) => {
  var g;
  const I = {
    id: jM.EMPTY,
    formId: M.id,
    fieldData: []
  };
  return (g = M.fields) == null || g.forEach((D) => {
    const N = JE(D, A);
    I.fieldData.push(N);
  }), I;
}, cj = /* @__PURE__ */ v({
  __name: "TransientMessage",
  props: {
    model: null
  },
  setup(M) {
    const A = M;
    return mM(() => A.model.message, async (I) => {
      I && setTimeout(() => {
        A.model.message = null;
      }, 2e3);
    }), (I, g) => (T(), Z(LL, { name: "fade" }, {
      default: h(() => [
        M.model.message ? (T(), s("p", {
          key: 0,
          class: F("alert alert-" + M.model.messageClass)
        }, P(M.model.message), 3)) : B("", !0)
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
function Yu(M, A) {
  var I = Object.keys(M);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(M);
    A && (g = g.filter(function(D) {
      return Object.getOwnPropertyDescriptor(M, D).enumerable;
    })), I.push.apply(I, g);
  }
  return I;
}
function _A(M) {
  for (var A = 1; A < arguments.length; A++) {
    var I = arguments[A] != null ? arguments[A] : {};
    A % 2 ? Yu(Object(I), !0).forEach(function(g) {
      VE(M, g, I[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : Yu(Object(I)).forEach(function(g) {
      Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(I, g));
    });
  }
  return M;
}
function EN(M) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? EN = function(A) {
    return typeof A;
  } : EN = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, EN(M);
}
function VE(M, A, I) {
  return A in M ? Object.defineProperty(M, A, {
    value: I,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : M[A] = I, M;
}
function iI() {
  return iI = Object.assign || function(M) {
    for (var A = 1; A < arguments.length; A++) {
      var I = arguments[A];
      for (var g in I)
        Object.prototype.hasOwnProperty.call(I, g) && (M[g] = I[g]);
    }
    return M;
  }, iI.apply(this, arguments);
}
function ZE(M, A) {
  if (M == null)
    return {};
  var I = {}, g = Object.keys(M), D, N;
  for (N = 0; N < g.length; N++)
    D = g[N], !(A.indexOf(D) >= 0) && (I[D] = M[D]);
  return I;
}
function BE(M, A) {
  if (M == null)
    return {};
  var I = ZE(M, A), g, D;
  if (Object.getOwnPropertySymbols) {
    var N = Object.getOwnPropertySymbols(M);
    for (D = 0; D < N.length; D++)
      g = N[D], !(A.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, g) || (I[g] = M[g]));
  }
  return I;
}
var PE = "1.14.0";
function LI(M) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(M);
}
var xI = LI(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), QD = LI(/Edge/i), ru = LI(/firefox/i), CD = LI(/safari/i) && !LI(/chrome/i) && !LI(/android/i), yi = LI(/iP(ad|od|hone)/i), FE = LI(/chrome/i) && LI(/android/i), ni = {
  capture: !1,
  passive: !1
};
function WM(M, A, I) {
  M.addEventListener(A, I, !xI && ni);
}
function OM(M, A, I) {
  M.removeEventListener(A, I, !xI && ni);
}
function bN(M, A) {
  if (!!A) {
    if (A[0] === ">" && (A = A.substring(1)), M)
      try {
        if (M.matches)
          return M.matches(A);
        if (M.msMatchesSelector)
          return M.msMatchesSelector(A);
        if (M.webkitMatchesSelector)
          return M.webkitMatchesSelector(A);
      } catch {
        return !1;
      }
    return !1;
  }
}
function XE(M) {
  return M.host && M !== document && M.host.nodeType ? M.host : M.parentNode;
}
function PA(M, A, I, g) {
  if (M) {
    I = I || document;
    do {
      if (A != null && (A[0] === ">" ? M.parentNode === I && bN(M, A) : bN(M, A)) || g && M === I)
        return M;
      if (M === I)
        break;
    } while (M = XE(M));
  }
  return null;
}
var du = /\s+/g;
function aA(M, A, I) {
  if (M && A)
    if (M.classList)
      M.classList[I ? "add" : "remove"](A);
    else {
      var g = (" " + M.className + " ").replace(du, " ").replace(" " + A + " ", " ");
      M.className = (g + (I ? " " + A : "")).replace(du, " ");
    }
}
function xM(M, A, I) {
  var g = M && M.style;
  if (g) {
    if (I === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? I = document.defaultView.getComputedStyle(M, "") : M.currentStyle && (I = M.currentStyle), A === void 0 ? I : I[A];
    !(A in g) && A.indexOf("webkit") === -1 && (A = "-webkit-" + A), g[A] = I + (typeof I == "string" ? "" : "px");
  }
}
function Ug(M, A) {
  var I = "";
  if (typeof M == "string")
    I = M;
  else
    do {
      var g = xM(M, "transform");
      g && g !== "none" && (I = g + " " + I);
    } while (!A && (M = M.parentNode));
  var D = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return D && new D(I);
}
function oi(M, A, I) {
  if (M) {
    var g = M.getElementsByTagName(A), D = 0, N = g.length;
    if (I)
      for (; D < N; D++)
        I(g[D], D);
    return g;
  }
  return [];
}
function RA() {
  var M = document.scrollingElement;
  return M || document.documentElement;
}
function KM(M, A, I, g, D) {
  if (!(!M.getBoundingClientRect && M !== window)) {
    var N, L, t, j, S, u, i;
    if (M !== window && M.parentNode && M !== RA() ? (N = M.getBoundingClientRect(), L = N.top, t = N.left, j = N.bottom, S = N.right, u = N.height, i = N.width) : (L = 0, t = 0, j = window.innerHeight, S = window.innerWidth, u = window.innerHeight, i = window.innerWidth), (A || I) && M !== window && (D = D || M.parentNode, !xI))
      do
        if (D && D.getBoundingClientRect && (xM(D, "transform") !== "none" || I && xM(D, "position") !== "static")) {
          var C = D.getBoundingClientRect();
          L -= C.top + parseInt(xM(D, "border-top-width")), t -= C.left + parseInt(xM(D, "border-left-width")), j = L + N.height, S = t + N.width;
          break;
        }
      while (D = D.parentNode);
    if (g && M !== window) {
      var w = Ug(D || M), E = w && w.a, x = w && w.d;
      w && (L /= x, t /= E, i /= E, u /= x, j = L + u, S = t + i);
    }
    return {
      top: L,
      left: t,
      bottom: j,
      right: S,
      width: i,
      height: u
    };
  }
}
function Uu(M, A, I) {
  for (var g = YI(M, !0), D = KM(M)[A]; g; ) {
    var N = KM(g)[I], L = void 0;
    if (I === "top" || I === "left" ? L = D >= N : L = D <= N, !L)
      return g;
    if (g === RA())
      break;
    g = YI(g, !1);
  }
  return !1;
}
function pg(M, A, I, g) {
  for (var D = 0, N = 0, L = M.children; N < L.length; ) {
    if (L[N].style.display !== "none" && L[N] !== aM.ghost && (g || L[N] !== aM.dragged) && PA(L[N], I.draggable, M, !1)) {
      if (D === A)
        return L[N];
      D++;
    }
    N++;
  }
  return null;
}
function zj(M, A) {
  for (var I = M.lastElementChild; I && (I === aM.ghost || xM(I, "display") === "none" || A && !bN(I, A)); )
    I = I.previousElementSibling;
  return I || null;
}
function rA(M, A) {
  var I = 0;
  if (!M || !M.parentNode)
    return -1;
  for (; M = M.previousElementSibling; )
    M.nodeName.toUpperCase() !== "TEMPLATE" && M !== aM.clone && (!A || bN(M, A)) && I++;
  return I;
}
function mu(M) {
  var A = 0, I = 0, g = RA();
  if (M)
    do {
      var D = Ug(M), N = D.a, L = D.d;
      A += M.scrollLeft * N, I += M.scrollTop * L;
    } while (M !== g && (M = M.parentNode));
  return [A, I];
}
function RE(M, A) {
  for (var I in M)
    if (!!M.hasOwnProperty(I)) {
      for (var g in A)
        if (A.hasOwnProperty(g) && A[g] === M[I][g])
          return Number(I);
    }
  return -1;
}
function YI(M, A) {
  if (!M || !M.getBoundingClientRect)
    return RA();
  var I = M, g = !1;
  do
    if (I.clientWidth < I.scrollWidth || I.clientHeight < I.scrollHeight) {
      var D = xM(I);
      if (I.clientWidth < I.scrollWidth && (D.overflowX == "auto" || D.overflowX == "scroll") || I.clientHeight < I.scrollHeight && (D.overflowY == "auto" || D.overflowY == "scroll")) {
        if (!I.getBoundingClientRect || I === document.body)
          return RA();
        if (g || A)
          return I;
        g = !0;
      }
    }
  while (I = I.parentNode);
  return RA();
}
function HE(M, A) {
  if (M && A)
    for (var I in A)
      A.hasOwnProperty(I) && (M[I] = A[I]);
  return M;
}
function fL(M, A) {
  return Math.round(M.top) === Math.round(A.top) && Math.round(M.left) === Math.round(A.left) && Math.round(M.height) === Math.round(A.height) && Math.round(M.width) === Math.round(A.width);
}
var wD;
function li(M, A) {
  return function() {
    if (!wD) {
      var I = arguments, g = this;
      I.length === 1 ? M.call(g, I[0]) : M.apply(g, I), wD = setTimeout(function() {
        wD = void 0;
      }, A);
    }
  };
}
function _E() {
  clearTimeout(wD), wD = void 0;
}
function si(M, A, I) {
  M.scrollLeft += A, M.scrollTop += I;
}
function ci(M) {
  var A = window.Polymer, I = window.jQuery || window.Zepto;
  return A && A.dom ? A.dom(M).cloneNode(!0) : I ? I(M).clone(!0)[0] : M.cloneNode(!0);
}
var nA = "Sortable" + new Date().getTime();
function $E() {
  var M = [], A;
  return {
    captureAnimationState: function() {
      if (M = [], !!this.options.animation) {
        var g = [].slice.call(this.el.children);
        g.forEach(function(D) {
          if (!(xM(D, "display") === "none" || D === aM.ghost)) {
            M.push({
              target: D,
              rect: KM(D)
            });
            var N = _A({}, M[M.length - 1].rect);
            if (D.thisAnimationDuration) {
              var L = Ug(D, !0);
              L && (N.top -= L.f, N.left -= L.e);
            }
            D.fromRect = N;
          }
        });
      }
    },
    addAnimationState: function(g) {
      M.push(g);
    },
    removeAnimationState: function(g) {
      M.splice(RE(M, {
        target: g
      }), 1);
    },
    animateAll: function(g) {
      var D = this;
      if (!this.options.animation) {
        clearTimeout(A), typeof g == "function" && g();
        return;
      }
      var N = !1, L = 0;
      M.forEach(function(t) {
        var j = 0, S = t.target, u = S.fromRect, i = KM(S), C = S.prevFromRect, w = S.prevToRect, E = t.rect, x = Ug(S, !0);
        x && (i.top -= x.f, i.left -= x.e), S.toRect = i, S.thisAnimationDuration && fL(C, i) && !fL(u, i) && (E.top - i.top) / (E.left - i.left) === (u.top - i.top) / (u.left - i.left) && (j = KE(E, C, w, D.options)), fL(i, u) || (S.prevFromRect = u, S.prevToRect = i, j || (j = D.options.animation), D.animate(S, E, i, j)), j && (N = !0, L = Math.max(L, j), clearTimeout(S.animationResetTimer), S.animationResetTimer = setTimeout(function() {
          S.animationTime = 0, S.prevFromRect = null, S.fromRect = null, S.prevToRect = null, S.thisAnimationDuration = null;
        }, j), S.thisAnimationDuration = j);
      }), clearTimeout(A), N ? A = setTimeout(function() {
        typeof g == "function" && g();
      }, L) : typeof g == "function" && g(), M = [];
    },
    animate: function(g, D, N, L) {
      if (L) {
        xM(g, "transition", ""), xM(g, "transform", "");
        var t = Ug(this.el), j = t && t.a, S = t && t.d, u = (D.left - N.left) / (j || 1), i = (D.top - N.top) / (S || 1);
        g.animatingX = !!u, g.animatingY = !!i, xM(g, "transform", "translate3d(" + u + "px," + i + "px,0)"), this.forRepaintDummy = qE(g), xM(g, "transition", "transform " + L + "ms" + (this.options.easing ? " " + this.options.easing : "")), xM(g, "transform", "translate3d(0,0,0)"), typeof g.animated == "number" && clearTimeout(g.animated), g.animated = setTimeout(function() {
          xM(g, "transition", ""), xM(g, "transform", ""), g.animated = !1, g.animatingX = !1, g.animatingY = !1;
        }, L);
      }
    }
  };
}
function qE(M) {
  return M.offsetWidth;
}
function KE(M, A, I, g) {
  return Math.sqrt(Math.pow(A.top - M.top, 2) + Math.pow(A.left - M.left, 2)) / Math.sqrt(Math.pow(A.top - I.top, 2) + Math.pow(A.left - I.left, 2)) * g.animation;
}
var ig = [], JL = {
  initializeByDefault: !0
}, vD = {
  mount: function(A) {
    for (var I in JL)
      JL.hasOwnProperty(I) && !(I in A) && (A[I] = JL[I]);
    ig.forEach(function(g) {
      if (g.pluginName === A.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(A.pluginName, " more than once");
    }), ig.push(A);
  },
  pluginEvent: function(A, I, g) {
    var D = this;
    this.eventCanceled = !1, g.cancel = function() {
      D.eventCanceled = !0;
    };
    var N = A + "Global";
    ig.forEach(function(L) {
      !I[L.pluginName] || (I[L.pluginName][N] && I[L.pluginName][N](_A({
        sortable: I
      }, g)), I.options[L.pluginName] && I[L.pluginName][A] && I[L.pluginName][A](_A({
        sortable: I
      }, g)));
    });
  },
  initializePlugins: function(A, I, g, D) {
    ig.forEach(function(t) {
      var j = t.pluginName;
      if (!(!A.options[j] && !t.initializeByDefault)) {
        var S = new t(A, I, A.options);
        S.sortable = A, S.options = A.options, A[j] = S, iI(g, S.defaults);
      }
    });
    for (var N in A.options)
      if (!!A.options.hasOwnProperty(N)) {
        var L = this.modifyOption(A, N, A.options[N]);
        typeof L < "u" && (A.options[N] = L);
      }
  },
  getEventProperties: function(A, I) {
    var g = {};
    return ig.forEach(function(D) {
      typeof D.eventProperties == "function" && iI(g, D.eventProperties.call(I[D.pluginName], A));
    }), g;
  },
  modifyOption: function(A, I, g) {
    var D;
    return ig.forEach(function(N) {
      !A[N.pluginName] || N.optionListeners && typeof N.optionListeners[I] == "function" && (D = N.optionListeners[I].call(A[N.pluginName], g));
    }), D;
  }
};
function MT(M) {
  var A = M.sortable, I = M.rootEl, g = M.name, D = M.targetEl, N = M.cloneEl, L = M.toEl, t = M.fromEl, j = M.oldIndex, S = M.newIndex, u = M.oldDraggableIndex, i = M.newDraggableIndex, C = M.originalEvent, w = M.putSortable, E = M.extraEventProperties;
  if (A = A || I && I[nA], !!A) {
    var x, n = A.options, a = "on" + g.charAt(0).toUpperCase() + g.substr(1);
    window.CustomEvent && !xI && !QD ? x = new CustomEvent(g, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(g, !0, !0)), x.to = L || I, x.from = t || I, x.item = D || I, x.clone = N, x.oldIndex = j, x.newIndex = S, x.oldDraggableIndex = u, x.newDraggableIndex = i, x.originalEvent = C, x.pullMode = w ? w.lastPutMode : void 0;
    var z = _A(_A({}, E), vD.getEventProperties(g, A));
    for (var d in z)
      x[d] = z[d];
    I && I.dispatchEvent(x), n[a] && n[a].call(A, x);
  }
}
var AT = ["evt"], wA = function(A, I) {
  var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, D = g.evt, N = BE(g, AT);
  vD.pluginEvent.bind(aM)(A, I, _A({
    dragEl: K,
    parentEl: XM,
    ghostEl: lM,
    rootEl: JM,
    nextEl: BI,
    lastDownEl: TN,
    cloneEl: RM,
    cloneHidden: zI,
    dragStarted: jD,
    putSortable: DA,
    activeSortable: aM.active,
    originalEvent: D,
    oldIndex: zg,
    oldDraggableIndex: ED,
    newIndex: yA,
    newDraggableIndex: sI,
    hideGhostForTarget: di,
    unhideGhostForTarget: Ui,
    cloneNowHidden: function() {
      zI = !0;
    },
    cloneNowShown: function() {
      zI = !1;
    },
    dispatchSortableEvent: function(t) {
      uA({
        sortable: I,
        name: t,
        originalEvent: D
      });
    }
  }, N));
};
function uA(M) {
  MT(_A({
    putSortable: DA,
    cloneEl: RM,
    targetEl: K,
    rootEl: JM,
    oldIndex: zg,
    oldDraggableIndex: ED,
    newIndex: yA,
    newDraggableIndex: sI
  }, M));
}
var K, XM, lM, JM, BI, TN, RM, zI, zg, yA, ED, sI, HD, DA, ag = !1, WN = !1, kN = [], JI, kA, VL, ZL, Ou, hu, jD, eg, TD, xD = !1, _D = !1, xN, LA, BL = [], bt = !1, pN = [], uL = typeof document < "u", $D = yi, bu = QD || xI ? "cssFloat" : "float", IT = uL && !FE && !yi && "draggable" in document.createElement("div"), zi = function() {
  if (!!uL) {
    if (xI)
      return !1;
    var M = document.createElement("x");
    return M.style.cssText = "pointer-events:auto", M.style.pointerEvents === "auto";
  }
}(), Yi = function(A, I) {
  var g = xM(A), D = parseInt(g.width) - parseInt(g.paddingLeft) - parseInt(g.paddingRight) - parseInt(g.borderLeftWidth) - parseInt(g.borderRightWidth), N = pg(A, 0, I), L = pg(A, 1, I), t = N && xM(N), j = L && xM(L), S = t && parseInt(t.marginLeft) + parseInt(t.marginRight) + KM(N).width, u = j && parseInt(j.marginLeft) + parseInt(j.marginRight) + KM(L).width;
  if (g.display === "flex")
    return g.flexDirection === "column" || g.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (g.display === "grid")
    return g.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (N && t.float && t.float !== "none") {
    var i = t.float === "left" ? "left" : "right";
    return L && (j.clear === "both" || j.clear === i) ? "vertical" : "horizontal";
  }
  return N && (t.display === "block" || t.display === "flex" || t.display === "table" || t.display === "grid" || S >= D && g[bu] === "none" || L && g[bu] === "none" && S + u > D) ? "vertical" : "horizontal";
}, gT = function(A, I, g) {
  var D = g ? A.left : A.top, N = g ? A.right : A.bottom, L = g ? A.width : A.height, t = g ? I.left : I.top, j = g ? I.right : I.bottom, S = g ? I.width : I.height;
  return D === t || N === j || D + L / 2 === t + S / 2;
}, DT = function(A, I) {
  var g;
  return kN.some(function(D) {
    var N = D[nA].options.emptyInsertThreshold;
    if (!(!N || zj(D))) {
      var L = KM(D), t = A >= L.left - N && A <= L.right + N, j = I >= L.top - N && I <= L.bottom + N;
      if (t && j)
        return g = D;
    }
  }), g;
}, ri = function(A) {
  function I(N, L) {
    return function(t, j, S, u) {
      var i = t.options.group.name && j.options.group.name && t.options.group.name === j.options.group.name;
      if (N == null && (L || i))
        return !0;
      if (N == null || N === !1)
        return !1;
      if (L && N === "clone")
        return N;
      if (typeof N == "function")
        return I(N(t, j, S, u), L)(t, j, S, u);
      var C = (L ? t : j).options.group.name;
      return N === !0 || typeof N == "string" && N === C || N.join && N.indexOf(C) > -1;
    };
  }
  var g = {}, D = A.group;
  (!D || EN(D) != "object") && (D = {
    name: D
  }), g.name = D.name, g.checkPull = I(D.pull, !0), g.checkPut = I(D.put), g.revertClone = D.revertClone, A.group = g;
}, di = function() {
  !zi && lM && xM(lM, "display", "none");
}, Ui = function() {
  !zi && lM && xM(lM, "display", "");
};
uL && document.addEventListener("click", function(M) {
  if (WN)
    return M.preventDefault(), M.stopPropagation && M.stopPropagation(), M.stopImmediatePropagation && M.stopImmediatePropagation(), WN = !1, !1;
}, !0);
var VI = function(A) {
  if (K) {
    A = A.touches ? A.touches[0] : A;
    var I = DT(A.clientX, A.clientY);
    if (I) {
      var g = {};
      for (var D in A)
        A.hasOwnProperty(D) && (g[D] = A[D]);
      g.target = g.rootEl = I, g.preventDefault = void 0, g.stopPropagation = void 0, I[nA]._onDragOver(g);
    }
  }
}, NT = function(A) {
  K && K.parentNode[nA]._isOutsideThisEl(A.target);
};
function aM(M, A) {
  if (!(M && M.nodeType && M.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(M));
  this.el = M, this.options = A = iI({}, A), M[nA] = this;
  var I = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(M.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return Yi(M, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(L, t) {
      L.setData("Text", t.textContent);
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
    supportPointer: aM.supportPointer !== !1 && "PointerEvent" in window && !CD,
    emptyInsertThreshold: 5
  };
  vD.initializePlugins(this, M, I);
  for (var g in I)
    !(g in A) && (A[g] = I[g]);
  ri(A);
  for (var D in this)
    D.charAt(0) === "_" && typeof this[D] == "function" && (this[D] = this[D].bind(this));
  this.nativeDraggable = A.forceFallback ? !1 : IT, this.nativeDraggable && (this.options.touchStartThreshold = 1), A.supportPointer ? WM(M, "pointerdown", this._onTapStart) : (WM(M, "mousedown", this._onTapStart), WM(M, "touchstart", this._onTapStart)), this.nativeDraggable && (WM(M, "dragover", this), WM(M, "dragenter", this)), kN.push(this.el), A.store && A.store.get && this.sort(A.store.get(this) || []), iI(this, $E());
}
aM.prototype = {
  constructor: aM,
  _isOutsideThisEl: function(A) {
    !this.el.contains(A) && A !== this.el && (eg = null);
  },
  _getDirection: function(A, I) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, A, I, K) : this.options.direction;
  },
  _onTapStart: function(A) {
    if (!!A.cancelable) {
      var I = this, g = this.el, D = this.options, N = D.preventOnFilter, L = A.type, t = A.touches && A.touches[0] || A.pointerType && A.pointerType === "touch" && A, j = (t || A).target, S = A.target.shadowRoot && (A.path && A.path[0] || A.composedPath && A.composedPath()[0]) || j, u = D.filter;
      if (CT(g), !K && !(/mousedown|pointerdown/.test(L) && A.button !== 0 || D.disabled) && !S.isContentEditable && !(!this.nativeDraggable && CD && j && j.tagName.toUpperCase() === "SELECT") && (j = PA(j, D.draggable, g, !1), !(j && j.animated) && TN !== j)) {
        if (zg = rA(j), ED = rA(j, D.draggable), typeof u == "function") {
          if (u.call(this, A, j, this)) {
            uA({
              sortable: I,
              rootEl: S,
              name: "filter",
              targetEl: j,
              toEl: g,
              fromEl: g
            }), wA("filter", I, {
              evt: A
            }), N && A.cancelable && A.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(i) {
          if (i = PA(S, i.trim(), g, !1), i)
            return uA({
              sortable: I,
              rootEl: i,
              name: "filter",
              targetEl: j,
              fromEl: g,
              toEl: g
            }), wA("filter", I, {
              evt: A
            }), !0;
        }), u)) {
          N && A.cancelable && A.preventDefault();
          return;
        }
        D.handle && !PA(S, D.handle, g, !1) || this._prepareDragStart(A, t, j);
      }
    }
  },
  _prepareDragStart: function(A, I, g) {
    var D = this, N = D.el, L = D.options, t = N.ownerDocument, j;
    if (g && !K && g.parentNode === N) {
      var S = KM(g);
      if (JM = N, K = g, XM = K.parentNode, BI = K.nextSibling, TN = g, HD = L.group, aM.dragged = K, JI = {
        target: K,
        clientX: (I || A).clientX,
        clientY: (I || A).clientY
      }, Ou = JI.clientX - S.left, hu = JI.clientY - S.top, this._lastX = (I || A).clientX, this._lastY = (I || A).clientY, K.style["will-change"] = "all", j = function() {
        if (wA("delayEnded", D, {
          evt: A
        }), aM.eventCanceled) {
          D._onDrop();
          return;
        }
        D._disableDelayedDragEvents(), !ru && D.nativeDraggable && (K.draggable = !0), D._triggerDragStart(A, I), uA({
          sortable: D,
          name: "choose",
          originalEvent: A
        }), aA(K, L.chosenClass, !0);
      }, L.ignore.split(",").forEach(function(u) {
        oi(K, u.trim(), PL);
      }), WM(t, "dragover", VI), WM(t, "mousemove", VI), WM(t, "touchmove", VI), WM(t, "mouseup", D._onDrop), WM(t, "touchend", D._onDrop), WM(t, "touchcancel", D._onDrop), ru && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), wA("delayStart", this, {
        evt: A
      }), L.delay && (!L.delayOnTouchOnly || I) && (!this.nativeDraggable || !(QD || xI))) {
        if (aM.eventCanceled) {
          this._onDrop();
          return;
        }
        WM(t, "mouseup", D._disableDelayedDrag), WM(t, "touchend", D._disableDelayedDrag), WM(t, "touchcancel", D._disableDelayedDrag), WM(t, "mousemove", D._delayedDragTouchMoveHandler), WM(t, "touchmove", D._delayedDragTouchMoveHandler), L.supportPointer && WM(t, "pointermove", D._delayedDragTouchMoveHandler), D._dragStartTimer = setTimeout(j, L.delay);
      } else
        j();
    }
  },
  _delayedDragTouchMoveHandler: function(A) {
    var I = A.touches ? A.touches[0] : A;
    Math.max(Math.abs(I.clientX - this._lastX), Math.abs(I.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    K && PL(K), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var A = this.el.ownerDocument;
    OM(A, "mouseup", this._disableDelayedDrag), OM(A, "touchend", this._disableDelayedDrag), OM(A, "touchcancel", this._disableDelayedDrag), OM(A, "mousemove", this._delayedDragTouchMoveHandler), OM(A, "touchmove", this._delayedDragTouchMoveHandler), OM(A, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(A, I) {
    I = I || A.pointerType == "touch" && A, !this.nativeDraggable || I ? this.options.supportPointer ? WM(document, "pointermove", this._onTouchMove) : I ? WM(document, "touchmove", this._onTouchMove) : WM(document, "mousemove", this._onTouchMove) : (WM(K, "dragend", this), WM(JM, "dragstart", this._onDragStart));
    try {
      document.selection ? aN(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(A, I) {
    if (ag = !1, JM && K) {
      wA("dragStarted", this, {
        evt: I
      }), this.nativeDraggable && WM(document, "dragover", NT);
      var g = this.options;
      !A && aA(K, g.dragClass, !1), aA(K, g.ghostClass, !0), aM.active = this, A && this._appendGhost(), uA({
        sortable: this,
        name: "start",
        originalEvent: I
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (kA) {
      this._lastX = kA.clientX, this._lastY = kA.clientY, di();
      for (var A = document.elementFromPoint(kA.clientX, kA.clientY), I = A; A && A.shadowRoot && (A = A.shadowRoot.elementFromPoint(kA.clientX, kA.clientY), A !== I); )
        I = A;
      if (K.parentNode[nA]._isOutsideThisEl(A), I)
        do {
          if (I[nA]) {
            var g = void 0;
            if (g = I[nA]._onDragOver({
              clientX: kA.clientX,
              clientY: kA.clientY,
              target: A,
              rootEl: I
            }), g && !this.options.dragoverBubble)
              break;
          }
          A = I;
        } while (I = I.parentNode);
      Ui();
    }
  },
  _onTouchMove: function(A) {
    if (JI) {
      var I = this.options, g = I.fallbackTolerance, D = I.fallbackOffset, N = A.touches ? A.touches[0] : A, L = lM && Ug(lM, !0), t = lM && L && L.a, j = lM && L && L.d, S = $D && LA && mu(LA), u = (N.clientX - JI.clientX + D.x) / (t || 1) + (S ? S[0] - BL[0] : 0) / (t || 1), i = (N.clientY - JI.clientY + D.y) / (j || 1) + (S ? S[1] - BL[1] : 0) / (j || 1);
      if (!aM.active && !ag) {
        if (g && Math.max(Math.abs(N.clientX - this._lastX), Math.abs(N.clientY - this._lastY)) < g)
          return;
        this._onDragStart(A, !0);
      }
      if (lM) {
        L ? (L.e += u - (VL || 0), L.f += i - (ZL || 0)) : L = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: i
        };
        var C = "matrix(".concat(L.a, ",").concat(L.b, ",").concat(L.c, ",").concat(L.d, ",").concat(L.e, ",").concat(L.f, ")");
        xM(lM, "webkitTransform", C), xM(lM, "mozTransform", C), xM(lM, "msTransform", C), xM(lM, "transform", C), VL = u, ZL = i, kA = N;
      }
      A.cancelable && A.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!lM) {
      var A = this.options.fallbackOnBody ? document.body : JM, I = KM(K, !0, $D, !0, A), g = this.options;
      if ($D) {
        for (LA = A; xM(LA, "position") === "static" && xM(LA, "transform") === "none" && LA !== document; )
          LA = LA.parentNode;
        LA !== document.body && LA !== document.documentElement ? (LA === document && (LA = RA()), I.top += LA.scrollTop, I.left += LA.scrollLeft) : LA = RA(), BL = mu(LA);
      }
      lM = K.cloneNode(!0), aA(lM, g.ghostClass, !1), aA(lM, g.fallbackClass, !0), aA(lM, g.dragClass, !0), xM(lM, "transition", ""), xM(lM, "transform", ""), xM(lM, "box-sizing", "border-box"), xM(lM, "margin", 0), xM(lM, "top", I.top), xM(lM, "left", I.left), xM(lM, "width", I.width), xM(lM, "height", I.height), xM(lM, "opacity", "0.8"), xM(lM, "position", $D ? "absolute" : "fixed"), xM(lM, "zIndex", "100000"), xM(lM, "pointerEvents", "none"), aM.ghost = lM, A.appendChild(lM), xM(lM, "transform-origin", Ou / parseInt(lM.style.width) * 100 + "% " + hu / parseInt(lM.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(A, I) {
    var g = this, D = A.dataTransfer, N = g.options;
    if (wA("dragStart", this, {
      evt: A
    }), aM.eventCanceled) {
      this._onDrop();
      return;
    }
    wA("setupClone", this), aM.eventCanceled || (RM = ci(K), RM.draggable = !1, RM.style["will-change"] = "", this._hideClone(), aA(RM, this.options.chosenClass, !1), aM.clone = RM), g.cloneId = aN(function() {
      wA("clone", g), !aM.eventCanceled && (g.options.removeCloneOnHide || JM.insertBefore(RM, K), g._hideClone(), uA({
        sortable: g,
        name: "clone"
      }));
    }), !I && aA(K, N.dragClass, !0), I ? (WN = !0, g._loopId = setInterval(g._emulateDragOver, 50)) : (OM(document, "mouseup", g._onDrop), OM(document, "touchend", g._onDrop), OM(document, "touchcancel", g._onDrop), D && (D.effectAllowed = "move", N.setData && N.setData.call(g, D, K)), WM(document, "drop", g), xM(K, "transform", "translateZ(0)")), ag = !0, g._dragStartId = aN(g._dragStarted.bind(g, I, A)), WM(document, "selectstart", g), jD = !0, CD && xM(document.body, "user-select", "none");
  },
  _onDragOver: function(A) {
    var I = this.el, g = A.target, D, N, L, t = this.options, j = t.group, S = aM.active, u = HD === j, i = t.sort, C = DA || S, w, E = this, x = !1;
    if (bt)
      return;
    function n(CM, dM) {
      wA(CM, E, _A({
        evt: A,
        isOwner: u,
        axis: w ? "vertical" : "horizontal",
        revert: L,
        dragRect: D,
        targetRect: N,
        canSort: i,
        fromSortable: C,
        target: g,
        completed: z,
        onMove: function(vM, fM) {
          return qD(JM, I, K, D, vM, KM(vM), A, fM);
        },
        changed: d
      }, dM));
    }
    function a() {
      n("dragOverAnimationCapture"), E.captureAnimationState(), E !== C && C.captureAnimationState();
    }
    function z(CM) {
      return n("dragOverCompleted", {
        insertion: CM
      }), CM && (u ? S._hideClone() : S._showClone(E), E !== C && (aA(K, DA ? DA.options.ghostClass : S.options.ghostClass, !1), aA(K, t.ghostClass, !0)), DA !== E && E !== aM.active ? DA = E : E === aM.active && DA && (DA = null), C === E && (E._ignoreWhileAnimating = g), E.animateAll(function() {
        n("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== C && (C.animateAll(), C._ignoreWhileAnimating = null)), (g === K && !K.animated || g === I && !g.animated) && (eg = null), !t.dragoverBubble && !A.rootEl && g !== document && (K.parentNode[nA]._isOutsideThisEl(A.target), !CM && VI(A)), !t.dragoverBubble && A.stopPropagation && A.stopPropagation(), x = !0;
    }
    function d() {
      yA = rA(K), sI = rA(K, t.draggable), uA({
        sortable: E,
        name: "change",
        toEl: I,
        newIndex: yA,
        newDraggableIndex: sI,
        originalEvent: A
      });
    }
    if (A.preventDefault !== void 0 && A.cancelable && A.preventDefault(), g = PA(g, t.draggable, I, !0), n("dragOver"), aM.eventCanceled)
      return x;
    if (K.contains(A.target) || g.animated && g.animatingX && g.animatingY || E._ignoreWhileAnimating === g)
      return z(!1);
    if (WN = !1, S && !t.disabled && (u ? i || (L = XM !== JM) : DA === this || (this.lastPutMode = HD.checkPull(this, S, K, A)) && j.checkPut(this, S, K, A))) {
      if (w = this._getDirection(A, g) === "vertical", D = KM(K), n("dragOverValid"), aM.eventCanceled)
        return x;
      if (L)
        return XM = JM, a(), this._hideClone(), n("revert"), aM.eventCanceled || (BI ? JM.insertBefore(K, BI) : JM.appendChild(K)), z(!0);
      var Y = zj(I, t.draggable);
      if (!Y || uT(A, w, this) && !Y.animated) {
        if (Y === K)
          return z(!1);
        if (Y && I === A.target && (g = Y), g && (N = KM(g)), qD(JM, I, K, D, g, N, A, !!g) !== !1)
          return a(), I.appendChild(K), XM = I, d(), z(!0);
      } else if (Y && jT(A, w, this)) {
        var U = pg(I, 0, t, !0);
        if (U === K)
          return z(!1);
        if (g = U, N = KM(g), qD(JM, I, K, D, g, N, A, !1) !== !1)
          return a(), I.insertBefore(K, U), XM = I, d(), z(!0);
      } else if (g.parentNode === I) {
        N = KM(g);
        var k = 0, G, r = K.parentNode !== I, b = !gT(K.animated && K.toRect || D, g.animated && g.toRect || N, w), V = w ? "top" : "left", R = Uu(g, "top", "top") || Uu(K, "top", "top"), AM = R ? R.scrollTop : void 0;
        eg !== g && (G = N[V], xD = !1, _D = !b && t.invertSwap || r), k = ST(A, g, N, w, b ? 1 : t.swapThreshold, t.invertedSwapThreshold == null ? t.swapThreshold : t.invertedSwapThreshold, _D, eg === g);
        var LM;
        if (k !== 0) {
          var gM = rA(K);
          do
            gM -= k, LM = XM.children[gM];
          while (LM && (xM(LM, "display") === "none" || LM === lM));
        }
        if (k === 0 || LM === g)
          return z(!1);
        eg = g, TD = k;
        var oM = g.nextElementSibling, SM = !1;
        SM = k === 1;
        var tM = qD(JM, I, K, D, g, N, A, SM);
        if (tM !== !1)
          return (tM === 1 || tM === -1) && (SM = tM === 1), bt = !0, setTimeout(tT, 30), a(), SM && !oM ? I.appendChild(K) : g.parentNode.insertBefore(K, SM ? oM : g), R && si(R, 0, AM - R.scrollTop), XM = K.parentNode, G !== void 0 && !_D && (xN = Math.abs(G - KM(g)[V])), d(), z(!0);
      }
      if (I.contains(K))
        return z(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    OM(document, "mousemove", this._onTouchMove), OM(document, "touchmove", this._onTouchMove), OM(document, "pointermove", this._onTouchMove), OM(document, "dragover", VI), OM(document, "mousemove", VI), OM(document, "touchmove", VI);
  },
  _offUpEvents: function() {
    var A = this.el.ownerDocument;
    OM(A, "mouseup", this._onDrop), OM(A, "touchend", this._onDrop), OM(A, "pointerup", this._onDrop), OM(A, "touchcancel", this._onDrop), OM(document, "selectstart", this);
  },
  _onDrop: function(A) {
    var I = this.el, g = this.options;
    if (yA = rA(K), sI = rA(K, g.draggable), wA("drop", this, {
      evt: A
    }), XM = K && K.parentNode, yA = rA(K), sI = rA(K, g.draggable), aM.eventCanceled) {
      this._nulling();
      return;
    }
    ag = !1, _D = !1, xD = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Wt(this.cloneId), Wt(this._dragStartId), this.nativeDraggable && (OM(document, "drop", this), OM(I, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), CD && xM(document.body, "user-select", ""), xM(K, "transform", ""), A && (jD && (A.cancelable && A.preventDefault(), !g.dropBubble && A.stopPropagation()), lM && lM.parentNode && lM.parentNode.removeChild(lM), (JM === XM || DA && DA.lastPutMode !== "clone") && RM && RM.parentNode && RM.parentNode.removeChild(RM), K && (this.nativeDraggable && OM(K, "dragend", this), PL(K), K.style["will-change"] = "", jD && !ag && aA(K, DA ? DA.options.ghostClass : this.options.ghostClass, !1), aA(K, this.options.chosenClass, !1), uA({
      sortable: this,
      name: "unchoose",
      toEl: XM,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: A
    }), JM !== XM ? (yA >= 0 && (uA({
      rootEl: XM,
      name: "add",
      toEl: XM,
      fromEl: JM,
      originalEvent: A
    }), uA({
      sortable: this,
      name: "remove",
      toEl: XM,
      originalEvent: A
    }), uA({
      rootEl: XM,
      name: "sort",
      toEl: XM,
      fromEl: JM,
      originalEvent: A
    }), uA({
      sortable: this,
      name: "sort",
      toEl: XM,
      originalEvent: A
    })), DA && DA.save()) : yA !== zg && yA >= 0 && (uA({
      sortable: this,
      name: "update",
      toEl: XM,
      originalEvent: A
    }), uA({
      sortable: this,
      name: "sort",
      toEl: XM,
      originalEvent: A
    })), aM.active && ((yA == null || yA === -1) && (yA = zg, sI = ED), uA({
      sortable: this,
      name: "end",
      toEl: XM,
      originalEvent: A
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    wA("nulling", this), JM = K = XM = lM = BI = RM = TN = zI = JI = kA = jD = yA = sI = zg = ED = eg = TD = DA = HD = aM.dragged = aM.ghost = aM.clone = aM.active = null, pN.forEach(function(A) {
      A.checked = !0;
    }), pN.length = VL = ZL = 0;
  },
  handleEvent: function(A) {
    switch (A.type) {
      case "drop":
      case "dragend":
        this._onDrop(A);
        break;
      case "dragenter":
      case "dragover":
        K && (this._onDragOver(A), LT(A));
        break;
      case "selectstart":
        A.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var A = [], I, g = this.el.children, D = 0, N = g.length, L = this.options; D < N; D++)
      I = g[D], PA(I, L.draggable, this.el, !1) && A.push(I.getAttribute(L.dataIdAttr) || eT(I));
    return A;
  },
  sort: function(A, I) {
    var g = {}, D = this.el;
    this.toArray().forEach(function(N, L) {
      var t = D.children[L];
      PA(t, this.options.draggable, D, !1) && (g[N] = t);
    }, this), I && this.captureAnimationState(), A.forEach(function(N) {
      g[N] && (D.removeChild(g[N]), D.appendChild(g[N]));
    }), I && this.animateAll();
  },
  save: function() {
    var A = this.options.store;
    A && A.set && A.set(this);
  },
  closest: function(A, I) {
    return PA(A, I || this.options.draggable, this.el, !1);
  },
  option: function(A, I) {
    var g = this.options;
    if (I === void 0)
      return g[A];
    var D = vD.modifyOption(this, A, I);
    typeof D < "u" ? g[A] = D : g[A] = I, A === "group" && ri(g);
  },
  destroy: function() {
    wA("destroy", this);
    var A = this.el;
    A[nA] = null, OM(A, "mousedown", this._onTapStart), OM(A, "touchstart", this._onTapStart), OM(A, "pointerdown", this._onTapStart), this.nativeDraggable && (OM(A, "dragover", this), OM(A, "dragenter", this)), Array.prototype.forEach.call(A.querySelectorAll("[draggable]"), function(I) {
      I.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), kN.splice(kN.indexOf(this.el), 1), this.el = A = null;
  },
  _hideClone: function() {
    if (!zI) {
      if (wA("hideClone", this), aM.eventCanceled)
        return;
      xM(RM, "display", "none"), this.options.removeCloneOnHide && RM.parentNode && RM.parentNode.removeChild(RM), zI = !0;
    }
  },
  _showClone: function(A) {
    if (A.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (zI) {
      if (wA("showClone", this), aM.eventCanceled)
        return;
      K.parentNode == JM && !this.options.group.revertClone ? JM.insertBefore(RM, K) : BI ? JM.insertBefore(RM, BI) : JM.appendChild(RM), this.options.group.revertClone && this.animate(K, RM), xM(RM, "display", ""), zI = !1;
    }
  }
};
function LT(M) {
  M.dataTransfer && (M.dataTransfer.dropEffect = "move"), M.cancelable && M.preventDefault();
}
function qD(M, A, I, g, D, N, L, t) {
  var j, S = M[nA], u = S.options.onMove, i;
  return window.CustomEvent && !xI && !QD ? j = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (j = document.createEvent("Event"), j.initEvent("move", !0, !0)), j.to = A, j.from = M, j.dragged = I, j.draggedRect = g, j.related = D || A, j.relatedRect = N || KM(A), j.willInsertAfter = t, j.originalEvent = L, M.dispatchEvent(j), u && (i = u.call(S, j, L)), i;
}
function PL(M) {
  M.draggable = !1;
}
function tT() {
  bt = !1;
}
function jT(M, A, I) {
  var g = KM(pg(I.el, 0, I.options, !0)), D = 10;
  return A ? M.clientX < g.left - D || M.clientY < g.top && M.clientX < g.right : M.clientY < g.top - D || M.clientY < g.bottom && M.clientX < g.left;
}
function uT(M, A, I) {
  var g = KM(zj(I.el, I.options.draggable)), D = 10;
  return A ? M.clientX > g.right + D || M.clientX <= g.right && M.clientY > g.bottom && M.clientX >= g.left : M.clientX > g.right && M.clientY > g.top || M.clientX <= g.right && M.clientY > g.bottom + D;
}
function ST(M, A, I, g, D, N, L, t) {
  var j = g ? M.clientY : M.clientX, S = g ? I.height : I.width, u = g ? I.top : I.left, i = g ? I.bottom : I.right, C = !1;
  if (!L) {
    if (t && xN < S * D) {
      if (!xD && (TD === 1 ? j > u + S * N / 2 : j < i - S * N / 2) && (xD = !0), xD)
        C = !0;
      else if (TD === 1 ? j < u + xN : j > i - xN)
        return -TD;
    } else if (j > u + S * (1 - D) / 2 && j < i - S * (1 - D) / 2)
      return iT(A);
  }
  return C = C || L, C && (j < u + S * N / 2 || j > i - S * N / 2) ? j > u + S / 2 ? 1 : -1 : 0;
}
function iT(M) {
  return rA(K) < rA(M) ? 1 : -1;
}
function eT(M) {
  for (var A = M.tagName + M.className + M.src + M.href + M.textContent, I = A.length, g = 0; I--; )
    g += A.charCodeAt(I);
  return g.toString(36);
}
function CT(M) {
  pN.length = 0;
  for (var A = M.getElementsByTagName("input"), I = A.length; I--; ) {
    var g = A[I];
    g.checked && pN.push(g);
  }
}
function aN(M) {
  return setTimeout(M, 0);
}
function Wt(M) {
  return clearTimeout(M);
}
uL && WM(document, "touchmove", function(M) {
  (aM.active || ag) && M.cancelable && M.preventDefault();
});
aM.utils = {
  on: WM,
  off: OM,
  css: xM,
  find: oi,
  is: function(A, I) {
    return !!PA(A, I, A, !1);
  },
  extend: HE,
  throttle: li,
  closest: PA,
  toggleClass: aA,
  clone: ci,
  index: rA,
  nextTick: aN,
  cancelNextTick: Wt,
  detectDirection: Yi,
  getChild: pg
};
aM.get = function(M) {
  return M[nA];
};
aM.mount = function() {
  for (var M = arguments.length, A = new Array(M), I = 0; I < M; I++)
    A[I] = arguments[I];
  A[0].constructor === Array && (A = A[0]), A.forEach(function(g) {
    if (!g.prototype || !g.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(g));
    g.utils && (aM.utils = _A(_A({}, aM.utils), g.utils)), vD.mount(g);
  });
};
aM.create = function(M, A) {
  return new aM(M, A);
};
aM.version = PE;
var $M = [], uD, kt, pt = !1, FL, XL, QN, SD;
function wT() {
  function M() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var A in this)
      A.charAt(0) === "_" && typeof this[A] == "function" && (this[A] = this[A].bind(this));
  }
  return M.prototype = {
    dragStarted: function(I) {
      var g = I.originalEvent;
      this.sortable.nativeDraggable ? WM(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? WM(document, "pointermove", this._handleFallbackAutoScroll) : g.touches ? WM(document, "touchmove", this._handleFallbackAutoScroll) : WM(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(I) {
      var g = I.originalEvent;
      !this.options.dragOverBubble && !g.rootEl && this._handleAutoScroll(g);
    },
    drop: function() {
      this.sortable.nativeDraggable ? OM(document, "dragover", this._handleAutoScroll) : (OM(document, "pointermove", this._handleFallbackAutoScroll), OM(document, "touchmove", this._handleFallbackAutoScroll), OM(document, "mousemove", this._handleFallbackAutoScroll)), Wu(), yN(), _E();
    },
    nulling: function() {
      QN = kt = uD = pt = SD = FL = XL = null, $M.length = 0;
    },
    _handleFallbackAutoScroll: function(I) {
      this._handleAutoScroll(I, !0);
    },
    _handleAutoScroll: function(I, g) {
      var D = this, N = (I.touches ? I.touches[0] : I).clientX, L = (I.touches ? I.touches[0] : I).clientY, t = document.elementFromPoint(N, L);
      if (QN = I, g || this.options.forceAutoScrollFallback || QD || xI || CD) {
        RL(I, this.options, t, g);
        var j = YI(t, !0);
        pt && (!SD || N !== FL || L !== XL) && (SD && Wu(), SD = setInterval(function() {
          var S = YI(document.elementFromPoint(N, L), !0);
          S !== j && (j = S, yN()), RL(I, D.options, S, g);
        }, 10), FL = N, XL = L);
      } else {
        if (!this.options.bubbleScroll || YI(t, !0) === RA()) {
          yN();
          return;
        }
        RL(I, this.options, YI(t, !1), !1);
      }
    }
  }, iI(M, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function yN() {
  $M.forEach(function(M) {
    clearInterval(M.pid);
  }), $M = [];
}
function Wu() {
  clearInterval(SD);
}
var RL = li(function(M, A, I, g) {
  if (!!A.scroll) {
    var D = (M.touches ? M.touches[0] : M).clientX, N = (M.touches ? M.touches[0] : M).clientY, L = A.scrollSensitivity, t = A.scrollSpeed, j = RA(), S = !1, u;
    kt !== I && (kt = I, yN(), uD = A.scroll, u = A.scrollFn, uD === !0 && (uD = YI(I, !0)));
    var i = 0, C = uD;
    do {
      var w = C, E = KM(w), x = E.top, n = E.bottom, a = E.left, z = E.right, d = E.width, Y = E.height, U = void 0, k = void 0, G = w.scrollWidth, r = w.scrollHeight, b = xM(w), V = w.scrollLeft, R = w.scrollTop;
      w === j ? (U = d < G && (b.overflowX === "auto" || b.overflowX === "scroll" || b.overflowX === "visible"), k = Y < r && (b.overflowY === "auto" || b.overflowY === "scroll" || b.overflowY === "visible")) : (U = d < G && (b.overflowX === "auto" || b.overflowX === "scroll"), k = Y < r && (b.overflowY === "auto" || b.overflowY === "scroll"));
      var AM = U && (Math.abs(z - D) <= L && V + d < G) - (Math.abs(a - D) <= L && !!V), LM = k && (Math.abs(n - N) <= L && R + Y < r) - (Math.abs(x - N) <= L && !!R);
      if (!$M[i])
        for (var gM = 0; gM <= i; gM++)
          $M[gM] || ($M[gM] = {});
      ($M[i].vx != AM || $M[i].vy != LM || $M[i].el !== w) && ($M[i].el = w, $M[i].vx = AM, $M[i].vy = LM, clearInterval($M[i].pid), (AM != 0 || LM != 0) && (S = !0, $M[i].pid = setInterval(function() {
        g && this.layer === 0 && aM.active._onTouchMove(QN);
        var oM = $M[this.layer].vy ? $M[this.layer].vy * t : 0, SM = $M[this.layer].vx ? $M[this.layer].vx * t : 0;
        typeof u == "function" && u.call(aM.dragged.parentNode[nA], SM, oM, M, QN, $M[this.layer].el) !== "continue" || si($M[this.layer].el, SM, oM);
      }.bind({
        layer: i
      }), 24))), i++;
    } while (A.bubbleScroll && C !== j && (C = YI(C, !1)));
    pt = S;
  }
}, 30), mi = function(A) {
  var I = A.originalEvent, g = A.putSortable, D = A.dragEl, N = A.activeSortable, L = A.dispatchSortableEvent, t = A.hideGhostForTarget, j = A.unhideGhostForTarget;
  if (!!I) {
    var S = g || N;
    t();
    var u = I.changedTouches && I.changedTouches.length ? I.changedTouches[0] : I, i = document.elementFromPoint(u.clientX, u.clientY);
    j(), S && !S.el.contains(i) && (L("spill"), this.onSpill({
      dragEl: D,
      putSortable: g
    }));
  }
};
function Yj() {
}
Yj.prototype = {
  startIndex: null,
  dragStart: function(A) {
    var I = A.oldDraggableIndex;
    this.startIndex = I;
  },
  onSpill: function(A) {
    var I = A.dragEl, g = A.putSortable;
    this.sortable.captureAnimationState(), g && g.captureAnimationState();
    var D = pg(this.sortable.el, this.startIndex, this.options);
    D ? this.sortable.el.insertBefore(I, D) : this.sortable.el.appendChild(I), this.sortable.animateAll(), g && g.animateAll();
  },
  drop: mi
};
iI(Yj, {
  pluginName: "revertOnSpill"
});
function rj() {
}
rj.prototype = {
  onSpill: function(A) {
    var I = A.dragEl, g = A.putSortable, D = g || this.sortable;
    D.captureAnimationState(), I.parentNode && I.parentNode.removeChild(I), D.animateAll();
  },
  drop: mi
};
iI(rj, {
  pluginName: "removeOnSpill"
});
aM.mount(new wT());
aM.mount(rj, Yj);
function ET() {
  return typeof window < "u" ? window.console : global.console;
}
const TT = ET();
function xT(M) {
  const A = /* @__PURE__ */ Object.create(null);
  return function(g) {
    return A[g] || (A[g] = M(g));
  };
}
const aT = /-(\w)/g, ku = xT((M) => M.replace(aT, (A, I) => I ? I.toUpperCase() : ""));
function HL(M) {
  M.parentElement !== null && M.parentElement.removeChild(M);
}
function pu(M, A, I) {
  const g = I === 0 ? M.children[0] : M.children[I - 1].nextSibling;
  M.insertBefore(A, g);
}
function yT(M, A) {
  return Object.values(M).indexOf(A);
}
function nT(M, A, I, g) {
  if (!M)
    return [];
  const D = Object.values(M), N = A.length - g;
  return [...A].map((t, j) => j >= N ? D.length : D.indexOf(t));
}
function Oi(M, A) {
  this.$nextTick(() => this.$emit(M.toLowerCase(), A));
}
function oT(M) {
  return (A) => {
    this.realList !== null && this["onDrag" + M](A), Oi.call(this, M, A);
  };
}
function lT(M) {
  return ["transition-group", "TransitionGroup"].includes(M);
}
function sT(M) {
  if (!M || M.length !== 1)
    return !1;
  const [{ type: A }] = M;
  return A ? lT(A.name) : !1;
}
function cT(M, A) {
  return A ? { ...A.props, ...A.attrs } : M;
}
const Qt = ["Start", "Add", "Remove", "Update", "End"], vt = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], zT = ["Move", ...Qt, ...vt].map((M) => "on" + M);
let _L = null;
const YT = {
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
    default: (M) => M
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
}, vN = v({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...Qt.map((M) => M.toLowerCase()),
    ...vt.map((M) => M.toLowerCase())
  ],
  props: YT,
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
    const M = this.$slots.default ? this.$slots.default() : null, A = cT(this.$attrs, this.componentData);
    return M ? (this.transitionMode = sT(M), sM(this.getTag(), A, M)) : sM(this.getTag(), A, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && TT.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const M = {};
    Qt.forEach((D) => {
      M["on" + D] = oT.call(this, D);
    }), vt.forEach((D) => {
      M["on" + D] = Oi.bind(this, D);
    });
    const A = Object.keys(this.$attrs).reduce((D, N) => (D[ku(N)] = this.$attrs[N], D), {}), I = Object.assign({}, A, M, {
      onMove: (D, N) => this.onDragMove(D, N)
    });
    !("draggable" in I) && (I.draggable = ">*");
    const g = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new aM(g, I), g.__draggable_component__ = this, this.computeIndexes();
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
      handler(M) {
        this.updateOptions(M);
      },
      deep: !0
    },
    realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag() {
      return this.component ? yM(this.component) : this.tag;
    },
    updateOptions(M) {
      for (var A in M) {
        const I = ku(A);
        zT.indexOf(I) === -1 && this._sortable.option(I, M[A]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = nT(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(M) {
      const A = yT(this.getChildrenNodes() || [], M);
      if (A === -1)
        return null;
      const I = this.realList[A];
      return { index: A, element: I };
    },
    emitChanges(M) {
      this.$nextTick(() => {
        this.$emit("change", M);
      });
    },
    alterList(M) {
      if (this.list) {
        M(this.list);
        return;
      }
      const A = [...this.modelValue];
      M(A), this.$emit("update:modelValue", A);
    },
    spliceList() {
      const M = (A) => A.splice(...arguments);
      this.alterList(M);
    },
    updatePosition(M, A) {
      const I = (g) => g.splice(A, 0, g.splice(M, 1)[0]);
      this.alterList(I);
    },
    getVmIndex(M) {
      const A = this.visibleIndexes, I = A.length;
      return M > I - 1 ? I : A[M];
    },
    getComponent() {
      return this.$slots.default ? this.$slots.default()[0].componentInstance : null;
    },
    resetTransitionData(M) {
      if (!this.noTransitionOnDrag || !this.transitionMode)
        return;
      var A = this.getChildrenNodes();
      A[M].data = null;
      const I = this.getComponent();
      I.children = [], I.kept = void 0;
    },
    onDragStart(M) {
      this.context = this.getUnderlyingVm(M.item), this.context && (M.item._underlying_vm_ = this.clone(this.context.element), _L = M.item);
    },
    onDragAdd(M) {
      const A = M.item._underlying_vm_;
      if (A === void 0)
        return;
      HL(M.item);
      const I = this.getVmIndex(M.newIndex);
      this.spliceList(I, 0, A), this.computeIndexes();
      const g = { element: A, newIndex: I };
      this.emitChanges({ added: g });
    },
    onDragRemove(M) {
      if (pu(this.$el, M.item, M.oldIndex), M.pullMode === "clone") {
        HL(M.clone);
        return;
      }
      if (!this.context)
        return;
      const A = this.context.index;
      this.spliceList(A, 1);
      const I = { element: this.context.element, oldIndex: A };
      this.resetTransitionData(A), this.emitChanges({ removed: I });
    },
    onDragUpdate(M) {
      HL(M.item), pu(M.from, M.item, M.oldIndex);
      const A = this.context.index, I = this.getVmIndex(M.newIndex);
      this.updatePosition(A, I);
      const g = { element: this.context.element, oldIndex: A, newIndex: I };
      this.emitChanges({ moved: g });
    },
    updateProperty(M, A) {
      M.hasOwnProperty(A) && (M[A] += this.headerOffset);
    },
    onDragMove(M, A) {
      const I = this.move;
      if (!I || !this.realList)
        return !0;
      const g = this.getRelatedContextFromMoveEvent(M), D = this.context, N = this.computeFutureIndex(g, M);
      Object.assign(D, { futureIndex: N });
      const L = Object.assign({}, M, {
        relatedContext: g,
        draggedContext: D
      });
      return I(L, A);
    },
    onDragEnd() {
      this.computeIndexes(), _L = null;
    },
    getTrargetedComponent(M) {
      return M.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: M, related: A }) {
      const I = this.getTrargetedComponent(M);
      if (!I)
        return { component: I };
      const g = I.realList, D = { list: g, component: I };
      if (M !== A && g && I.getUnderlyingVm) {
        const N = I.getUnderlyingVm(A);
        if (N)
          return Object.assign(N, D);
      }
      return D;
    },
    computeFutureIndex(M, A) {
      const I = [...A.to.children].filter((L) => L.style.display !== "none");
      if (I.length === 0)
        return 0;
      const g = I.indexOf(A.related), D = M.component.getVmIndex(g);
      return I.indexOf(_L) !== -1 || !A.willInsertAfter ? D : D + 1;
    }
  }
}), rT = { key: 0 }, dT = /* @__PURE__ */ l("br", null, null, -1), UT = /* @__PURE__ */ l("br", null, null, -1), mT = { key: 1 }, OT = { key: 0 }, hT = { key: 1 }, bT = /* @__PURE__ */ v({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    dispLang: { type: Boolean }
  },
  setup(M) {
    return pD(), (A, I) => {
      const g = yM("b-col"), D = yM("b-form-input"), N = yM("b-row"), L = yM("b-form-textarea");
      return M.dispLang ? (T(), s("div", rT, [
        M.textType === e(rg).ShortAnswer ? (T(), Z(N, { key: 0 }, {
          default: h(() => [
            W(g, { class: "col-sm-1" }, {
              default: h(() => [
                l("h6", null, P(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            W(g, { class: "col-sm-11" }, {
              default: h(() => [
                W(D, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[0] || (I[0] = (t) => M.model.value = t)
                }, null, 8, ["modelValue"]),
                dT
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : M.textType === e(rg).Paragraph ? (T(), Z(N, { key: 1 }, {
          default: h(() => [
            W(g, { class: "col-sm-1" }, {
              default: h(() => [
                l("h6", null, P(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            W(g, { class: "col-sm-11" }, {
              default: h(() => [
                W(L, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[1] || (I[1] = (t) => M.model.value = t),
                  rows: "3",
                  "max-rows": "6"
                }, null, 8, ["modelValue"]),
                UT
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : B("", !0)
      ])) : (T(), s("div", mT, [
        M.textType === e(rg).ShortAnswer ? (T(), s("div", OT, [
          W(D, {
            modelValue: M.model.value,
            "onUpdate:modelValue": I[2] || (I[2] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : M.textType === "Paragraph" ? (T(), s("div", hT, [
          W(L, {
            modelValue: M.model.value,
            "onUpdate:modelValue": I[3] || (I[3] = (t) => M.model.value = t),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : B("", !0)
      ]));
    };
  }
}), Gt = /* @__PURE__ */ v({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(M) {
    return (A, I) => (T(!0), s(MM, null, eM(M.model.values, (g) => {
      var D;
      return T(), Z(bT, {
        key: g.id,
        model: g,
        "text-type": M.textType,
        "disp-lang": ((D = M.model.values) == null ? void 0 : D.length) > 1
      }, null, 8, ["model", "text-type", "disp-lang"]);
    }), 128));
  }
}), WT = { class: "alert alert-info" }, kT = { key: 0 }, pT = { key: 0 }, QT = /* @__PURE__ */ l("h6", null, "Is Extended:", -1), vT = /* @__PURE__ */ l("br", null, null, -1), GT = { class: "toggle-button-cover" }, fT = { class: "button-cover" }, JT = {
  class: "button r",
  id: "button-1"
}, VT = /* @__PURE__ */ l("div", { class: "knobs" }, null, -1), ZT = /* @__PURE__ */ l("div", { class: "layer" }, null, -1), BT = /* @__PURE__ */ l("h6", null, "Is Required:", -1), PT = /* @__PURE__ */ l("br", null, null, -1), FT = { class: "toggle-button-cover" }, XT = { class: "button-cover" }, RT = {
  class: "button r",
  id: "button-1"
}, HT = /* @__PURE__ */ l("div", { class: "knobs" }, null, -1), _T = /* @__PURE__ */ l("div", { class: "layer" }, null, -1), $T = { key: 1 }, qT = {
  key: 0,
  class: "option-values"
}, KT = { key: 0 }, M0 = {
  key: 0,
  style: { color: "red", "font-weight": "bold" }
}, Qu = /* @__PURE__ */ v({
  __name: "Option",
  props: {
    model: null,
    optionFieldType: null,
    disableInlineEditing: { type: Boolean }
  },
  setup(M) {
    const A = M;
    pD();
    const I = DM(!1), g = y(() => A.optionFieldType == rD.Checkboxes || A.optionFieldType == rD.RadioButtons);
    return (D, N) => {
      const L = yM("b-col"), t = yM("b-row"), j = yM("font-awesome-icon");
      return T(), s("div", WT, [
        I.value || M.disableInlineEditing ? (T(), s("div", kT, [
          W(Gt, {
            model: M.model.optionText,
            "text-type": e(rM).ShortAnswer
          }, null, 8, ["model", "text-type"]),
          e(g) ? (T(), s("span", pT, [
            W(t, null, {
              default: h(() => [
                W(L, { class: "col-sm-6" }, {
                  default: h(() => [
                    W(t, null, {
                      default: h(() => [
                        W(L, { class: "col-sm-4" }, {
                          default: h(() => [
                            QT
                          ]),
                          _: 1
                        }),
                        W(L, { class: "col-sm-8" }, {
                          default: h(() => [
                            vT,
                            l("div", GT, [
                              l("div", fT, [
                                l("div", JT, [
                                  VM(l("input", {
                                    "onUpdate:modelValue": N[0] || (N[0] = (S) => M.model.isExtendedInput = S),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [KI, M.model.isExtendedInput]
                                  ]),
                                  VT,
                                  ZT
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
                W(L, { class: "col-sm-4" }, {
                  default: h(() => [
                    M.model.isExtendedInput ? (T(), Z(t, { key: 0 }, {
                      default: h(() => [
                        W(L, { class: "col-sm-4" }, {
                          default: h(() => [
                            BT
                          ]),
                          _: 1
                        }),
                        W(L, { class: "col-sm-8" }, {
                          default: h(() => [
                            PT,
                            l("div", FT, [
                              l("div", XT, [
                                l("div", RT, [
                                  VM(l("input", {
                                    "onUpdate:modelValue": N[1] || (N[1] = (S) => M.model.isExtendedInputRequired = S),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [KI, M.model.isExtendedInputRequired]
                                  ]),
                                  HT,
                                  _T
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : B("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : B("", !0),
          M.disableInlineEditing ? B("", !0) : (T(), Z(j, {
            key: 1,
            icon: "fa-solid fa-circle-check",
            onClick: N[2] || (N[2] = (S) => I.value = !1),
            class: "fa-icon delete-button"
          }))
        ])) : (T(), s("div", $T, [
          (T(!0), s(MM, null, eM(M.model.optionText.values, (S) => {
            var u;
            return T(), s("span", null, [
              ((u = S.value) == null ? void 0 : u.length) > 0 ? (T(), s("span", qT, P(S.value), 1)) : B("", !0)
            ]);
          }), 256)),
          M.model.isExtendedInput ? (T(), s("span", KT, [
            W(j, {
              icon: "fa fa-th-list",
              class: "fa fa-th-list"
            }),
            M.model.isExtendedInputRequired ? (T(), s("span", M0, "*")) : B("", !0)
          ])) : B("", !0),
          W(j, {
            icon: "fa-solid fa-pen-to-square",
            onClick: N[3] || (N[3] = (S) => I.value = !0),
            class: "fa-icon"
          })
        ]))
      ]);
    };
  }
}), A0 = /* @__PURE__ */ l("h6", null, "Title:", -1), I0 = /* @__PURE__ */ l("h6", null, "Description:", -1), g0 = /* @__PURE__ */ l("br", null, null, -1), D0 = { key: 0 }, N0 = /* @__PURE__ */ l("h6", null, "Options:", -1), L0 = { class: "display-options" }, t0 = { class: "col-10" }, j0 = { class: "col-2" }, u0 = { class: "alert alert-success" }, S0 = /* @__PURE__ */ l("h6", null, "Add Option", -1), i0 = { class: "row" }, e0 = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("h6", null, "Required Field:")
], -1), C0 = { class: "col-sm-10" }, w0 = /* @__PURE__ */ l("br", null, null, -1), E0 = { class: "toggle-button-cover" }, T0 = { class: "button-cover" }, x0 = {
  class: "button r",
  id: "button-1"
}, a0 = /* @__PURE__ */ l("div", { class: "knobs" }, null, -1), y0 = /* @__PURE__ */ l("div", { class: "layer" }, null, -1), n0 = /* @__PURE__ */ l("br", null, null, -1), o0 = {
  key: 1,
  class: "row"
}, l0 = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("h6", null, "Multiple Value Field:")
], -1), s0 = { class: "col-sm-10" }, c0 = /* @__PURE__ */ l("br", null, null, -1), z0 = { class: "toggle-button-cover" }, Y0 = { class: "button-cover" }, r0 = {
  class: "button r",
  id: "button-1"
}, d0 = /* @__PURE__ */ l("div", { class: "knobs" }, null, -1), U0 = /* @__PURE__ */ l("div", { class: "layer" }, null, -1), m0 = /* @__PURE__ */ v({
  __name: "Field",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = sj(A.model), g = pD(), D = DM(dE(g.lang, rE(kg(g.lang)))), N = () => {
      A.model.options.push(mE(D.value)), D.value.isExtendedInput = !1, D.value.isExtendedInputRequired = !1, D.value.optionText.values.forEach((t) => t.value = "");
    }, L = (t) => {
      var S, u;
      const j = (S = A.model.options) == null ? void 0 : S.findIndex((i) => i.id == t);
      (u = A.model.options) == null || u.splice(j, 1);
    };
    return A.model.type, rM.AttachmentField, (t, j) => {
      const S = yM("b-col"), u = yM("b-row"), i = yM("font-awesome-icon");
      return T(), s(MM, null, [
        l("h5", null, P(M.model.type), 1),
        W(u, null, {
          default: h(() => [
            W(S, { class: "col-sm-2" }, {
              default: h(() => [
                A0
              ]),
              _: 1
            }),
            W(S, { class: "col-sm-10" }, {
              default: h(() => [
                W(Gt, {
                  model: M.model.title,
                  "text-type": e(rM).ShortAnswer
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        W(u, null, {
          default: h(() => [
            W(S, { class: "col-sm-2" }, {
              default: h(() => [
                I0
              ]),
              _: 1
            }),
            W(S, { class: "col-sm-10" }, {
              default: h(() => [
                W(Gt, {
                  model: M.model.description,
                  "text-type": e(rM).Paragraph
                }, null, 8, ["model", "text-type"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        g0,
        e(I) ? (T(), s("div", D0, [
          N0,
          l("div", L0, [
            W(e(vN), {
              class: "dragArea list-group w-full",
              list: M.model.options
            }, {
              default: h(() => [
                (T(!0), s(MM, null, eM(M.model.options, (C) => (T(), s("div", {
                  key: C.id,
                  class: "option-entry row"
                }, [
                  l("div", t0, [
                    W(Qu, {
                      model: C,
                      "option-field-type": M.model.type
                    }, null, 8, ["model", "option-field-type"])
                  ]),
                  l("div", j0, [
                    W(i, {
                      icon: "fa-solid fa-circle-xmark",
                      onClick: (w) => L(C.id),
                      class: "fa-icon delete"
                    }, null, 8, ["onClick"])
                  ])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          l("div", u0, [
            S0,
            W(Qu, {
              model: D.value,
              "option-field-type": M.model.type,
              "disable-inline-editing": !0
            }, null, 8, ["model", "option-field-type"]),
            W(i, {
              icon: "fa-solid fa-circle-plus",
              onClick: j[0] || (j[0] = (C) => N()),
              class: "fa-icon plus add-option"
            })
          ])
        ])) : B("", !0),
        l("div", i0, [
          e0,
          l("div", C0, [
            w0,
            l("div", E0, [
              l("div", T0, [
                l("div", x0, [
                  VM(l("input", {
                    "onUpdate:modelValue": j[1] || (j[1] = (C) => M.model.isRequired = C),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [KI, M.model.isRequired]
                  ]),
                  a0,
                  y0
                ])
              ])
            ])
          ])
        ]),
        n0,
        e(Ei)(M.model) ? (T(), s("div", o0, [
          l0,
          l("div", s0, [
            c0,
            l("div", z0, [
              l("div", Y0, [
                l("div", r0, [
                  VM(l("input", {
                    "onUpdate:modelValue": j[2] || (j[2] = (C) => M.model.isMultiValued = C),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [KI, M.model.isMultiValued]
                  ]),
                  d0,
                  U0
                ])
              ])
            ])
          ])
        ])) : B("", !0)
      ], 64);
    };
  }
});
const O0 = /* @__PURE__ */ l("div", null, [
  /* @__PURE__ */ l("h4", null, "Form properties")
], -1), h0 = { class: "form-field-border" }, b0 = /* @__PURE__ */ l("h6", null, "Name:", -1), W0 = /* @__PURE__ */ l("br", null, null, -1), k0 = /* @__PURE__ */ l("h6", null, "Description:", -1), p0 = /* @__PURE__ */ l("h3", null, "Fields", -1), Q0 = /* @__PURE__ */ v({
  __name: "Form",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = (g) => {
      var N, L;
      const D = (N = A.model.fields) == null ? void 0 : N.findIndex((t) => t.id == g);
      (L = A.model.fields) == null || L.splice(D, 1);
    };
    return (g, D) => {
      var u;
      const N = yM("b-col"), L = yM("b-form-input"), t = yM("b-row"), j = yM("b-form-textarea"), S = yM("font-awesome-icon");
      return T(), s(MM, null, [
        O0,
        l("div", h0, [
          W(t, null, {
            default: h(() => [
              W(N, { class: "col-sm-2" }, {
                default: h(() => [
                  b0
                ]),
                _: 1
              }),
              W(N, { class: "col-sm-10" }, {
                default: h(() => [
                  W(L, {
                    modelValue: M.model.name,
                    "onUpdate:modelValue": D[0] || (D[0] = (i) => M.model.name = i)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          W0,
          W(t, null, {
            default: h(() => [
              W(N, { class: "col-sm-2" }, {
                default: h(() => [
                  k0
                ]),
                _: 1
              }),
              W(N, { class: "col-sm-10" }, {
                default: h(() => [
                  W(j, {
                    modelValue: M.model.description,
                    "onUpdate:modelValue": D[1] || (D[1] = (i) => M.model.description = i),
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
        p0,
        W(e(vN), {
          class: "dragArea list-group w-full",
          list: (u = M.model) == null ? void 0 : u.fields
        }, {
          default: h(() => {
            var i;
            return [
              (T(!0), s(MM, null, eM((i = M.model) == null ? void 0 : i.fields, (C) => (T(), s("div", {
                key: C.id,
                class: "form-field-border form-field"
              }, [
                W(S, {
                  icon: "fa-solid fa-circle-xmark",
                  onClick: (w) => I(C.id),
                  class: "fa-icon field-delete"
                }, null, 8, ["onClick"]),
                W(m0, { model: C }, null, 8, ["model"])
              ]))), 128))
            ];
          }),
          _: 1
        }, 8, ["list"])
      ], 64);
    };
  }
});
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const yg = typeof window < "u";
function v0(M) {
  return M.__esModule || M[Symbol.toStringTag] === "Module";
}
const kM = Object.assign;
function $L(M, A) {
  const I = {};
  for (const g in A) {
    const D = A[g];
    I[g] = JA(D) ? D.map(M) : M(D);
  }
  return I;
}
const aD = () => {
}, JA = Array.isArray, G0 = /\/$/, f0 = (M) => M.replace(G0, "");
function qL(M, A, I = "/") {
  let g, D = {}, N = "", L = "";
  const t = A.indexOf("#");
  let j = A.indexOf("?");
  return t < j && t >= 0 && (j = -1), j > -1 && (g = A.slice(0, j), N = A.slice(j + 1, t > -1 ? t : A.length), D = M(N)), t > -1 && (g = g || A.slice(0, t), L = A.slice(t, A.length)), g = B0(g != null ? g : A, I), {
    fullPath: g + (N && "?") + N + L,
    path: g,
    query: D,
    hash: L
  };
}
function J0(M, A) {
  const I = A.query ? M(A.query) : "";
  return A.path + (I && "?") + I + (A.hash || "");
}
function vu(M, A) {
  return !A || !M.toLowerCase().startsWith(A.toLowerCase()) ? M : M.slice(A.length) || "/";
}
function V0(M, A, I) {
  const g = A.matched.length - 1, D = I.matched.length - 1;
  return g > -1 && g === D && Qg(A.matched[g], I.matched[D]) && hi(A.params, I.params) && M(A.query) === M(I.query) && A.hash === I.hash;
}
function Qg(M, A) {
  return (M.aliasOf || M) === (A.aliasOf || A);
}
function hi(M, A) {
  if (Object.keys(M).length !== Object.keys(A).length)
    return !1;
  for (const I in M)
    if (!Z0(M[I], A[I]))
      return !1;
  return !0;
}
function Z0(M, A) {
  return JA(M) ? Gu(M, A) : JA(A) ? Gu(A, M) : M === A;
}
function Gu(M, A) {
  return JA(A) ? M.length === A.length && M.every((I, g) => I === A[g]) : M.length === 1 && M[0] === A;
}
function B0(M, A) {
  if (M.startsWith("/"))
    return M;
  if (!M)
    return A;
  const I = A.split("/"), g = M.split("/");
  let D = I.length - 1, N, L;
  for (N = 0; N < g.length; N++)
    if (L = g[N], L !== ".")
      if (L === "..")
        D > 1 && D--;
      else
        break;
  return I.slice(0, D).join("/") + "/" + g.slice(N - (N === g.length ? 1 : 0)).join("/");
}
var dD;
(function(M) {
  M.pop = "pop", M.push = "push";
})(dD || (dD = {}));
var yD;
(function(M) {
  M.back = "back", M.forward = "forward", M.unknown = "";
})(yD || (yD = {}));
function P0(M) {
  if (!M)
    if (yg) {
      const A = document.querySelector("base");
      M = A && A.getAttribute("href") || "/", M = M.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      M = "/";
  return M[0] !== "/" && M[0] !== "#" && (M = "/" + M), f0(M);
}
const F0 = /^[^#]+#/;
function X0(M, A) {
  return M.replace(F0, "#") + A;
}
function R0(M, A) {
  const I = document.documentElement.getBoundingClientRect(), g = M.getBoundingClientRect();
  return {
    behavior: A.behavior,
    left: g.left - I.left - (A.left || 0),
    top: g.top - I.top - (A.top || 0)
  };
}
const SL = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function H0(M) {
  let A;
  if ("el" in M) {
    const I = M.el, g = typeof I == "string" && I.startsWith("#"), D = typeof I == "string" ? g ? document.getElementById(I.slice(1)) : document.querySelector(I) : I;
    if (!D)
      return;
    A = R0(D, M);
  } else
    A = M;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(A) : window.scrollTo(A.left != null ? A.left : window.pageXOffset, A.top != null ? A.top : window.pageYOffset);
}
function fu(M, A) {
  return (history.state ? history.state.position - A : -1) + M;
}
const ft = /* @__PURE__ */ new Map();
function _0(M, A) {
  ft.set(M, A);
}
function $0(M) {
  const A = ft.get(M);
  return ft.delete(M), A;
}
let q0 = () => location.protocol + "//" + location.host;
function bi(M, A) {
  const { pathname: I, search: g, hash: D } = A, N = M.indexOf("#");
  if (N > -1) {
    let t = D.includes(M.slice(N)) ? M.slice(N).length : 1, j = D.slice(t);
    return j[0] !== "/" && (j = "/" + j), vu(j, "");
  }
  return vu(I, M) + g + D;
}
function K0(M, A, I, g) {
  let D = [], N = [], L = null;
  const t = ({ state: C }) => {
    const w = bi(M, location), E = I.value, x = A.value;
    let n = 0;
    if (C) {
      if (I.value = w, A.value = C, L && L === E) {
        L = null;
        return;
      }
      n = x ? C.position - x.position : 0;
    } else
      g(w);
    D.forEach((a) => {
      a(I.value, E, {
        delta: n,
        type: dD.pop,
        direction: n ? n > 0 ? yD.forward : yD.back : yD.unknown
      });
    });
  };
  function j() {
    L = I.value;
  }
  function S(C) {
    D.push(C);
    const w = () => {
      const E = D.indexOf(C);
      E > -1 && D.splice(E, 1);
    };
    return N.push(w), w;
  }
  function u() {
    const { history: C } = window;
    !C.state || C.replaceState(kM({}, C.state, { scroll: SL() }), "");
  }
  function i() {
    for (const C of N)
      C();
    N = [], window.removeEventListener("popstate", t), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", t), window.addEventListener("beforeunload", u), {
    pauseListeners: j,
    listen: S,
    destroy: i
  };
}
function Ju(M, A, I, g = !1, D = !1) {
  return {
    back: M,
    current: A,
    forward: I,
    replaced: g,
    position: window.history.length,
    scroll: D ? SL() : null
  };
}
function Mx(M) {
  const { history: A, location: I } = window, g = {
    value: bi(M, I)
  }, D = { value: A.state };
  D.value || N(g.value, {
    back: null,
    current: g.value,
    forward: null,
    position: A.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function N(j, S, u) {
    const i = M.indexOf("#"), C = i > -1 ? (I.host && document.querySelector("base") ? M : M.slice(i)) + j : q0() + M + j;
    try {
      A[u ? "replaceState" : "pushState"](S, "", C), D.value = S;
    } catch (w) {
      console.error(w), I[u ? "replace" : "assign"](C);
    }
  }
  function L(j, S) {
    const u = kM({}, A.state, Ju(
      D.value.back,
      j,
      D.value.forward,
      !0
    ), S, { position: D.value.position });
    N(j, u, !0), g.value = j;
  }
  function t(j, S) {
    const u = kM(
      {},
      D.value,
      A.state,
      {
        forward: j,
        scroll: SL()
      }
    );
    N(u.current, u, !0);
    const i = kM({}, Ju(g.value, j, null), { position: u.position + 1 }, S);
    N(j, i, !1), g.value = j;
  }
  return {
    location: g,
    state: D,
    push: t,
    replace: L
  };
}
function Ax(M) {
  M = P0(M);
  const A = Mx(M), I = K0(M, A.state, A.location, A.replace);
  function g(N, L = !0) {
    L || I.pauseListeners(), history.go(N);
  }
  const D = kM({
    location: "",
    base: M,
    go: g,
    createHref: X0.bind(null, M)
  }, A, I);
  return Object.defineProperty(D, "location", {
    enumerable: !0,
    get: () => A.location.value
  }), Object.defineProperty(D, "state", {
    enumerable: !0,
    get: () => A.state.value
  }), D;
}
function Ix(M) {
  return M = location.host ? M || location.pathname + location.search : "", M.includes("#") || (M += "#"), Ax(M);
}
function gx(M) {
  return typeof M == "string" || M && typeof M == "object";
}
function Wi(M) {
  return typeof M == "string" || typeof M == "symbol";
}
const oI = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, ki = Symbol("");
var Vu;
(function(M) {
  M[M.aborted = 4] = "aborted", M[M.cancelled = 8] = "cancelled", M[M.duplicated = 16] = "duplicated";
})(Vu || (Vu = {}));
function vg(M, A) {
  return kM(new Error(), {
    type: M,
    [ki]: !0
  }, A);
}
function MI(M, A) {
  return M instanceof Error && ki in M && (A == null || !!(M.type & A));
}
const Zu = "[^/]+?", Dx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Nx = /[.+*?^${}()[\]/\\]/g;
function Lx(M, A) {
  const I = kM({}, Dx, A), g = [];
  let D = I.start ? "^" : "";
  const N = [];
  for (const S of M) {
    const u = S.length ? [] : [90];
    I.strict && !S.length && (D += "/");
    for (let i = 0; i < S.length; i++) {
      const C = S[i];
      let w = 40 + (I.sensitive ? 0.25 : 0);
      if (C.type === 0)
        i || (D += "/"), D += C.value.replace(Nx, "\\$&"), w += 40;
      else if (C.type === 1) {
        const { value: E, repeatable: x, optional: n, regexp: a } = C;
        N.push({
          name: E,
          repeatable: x,
          optional: n
        });
        const z = a || Zu;
        if (z !== Zu) {
          w += 10;
          try {
            new RegExp(`(${z})`);
          } catch (Y) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${z}): ` + Y.message);
          }
        }
        let d = x ? `((?:${z})(?:/(?:${z}))*)` : `(${z})`;
        i || (d = n && S.length < 2 ? `(?:/${d})` : "/" + d), n && (d += "?"), D += d, w += 20, n && (w += -8), x && (w += -20), z === ".*" && (w += -50);
      }
      u.push(w);
    }
    g.push(u);
  }
  if (I.strict && I.end) {
    const S = g.length - 1;
    g[S][g[S].length - 1] += 0.7000000000000001;
  }
  I.strict || (D += "/?"), I.end ? D += "$" : I.strict && (D += "(?:/|$)");
  const L = new RegExp(D, I.sensitive ? "" : "i");
  function t(S) {
    const u = S.match(L), i = {};
    if (!u)
      return null;
    for (let C = 1; C < u.length; C++) {
      const w = u[C] || "", E = N[C - 1];
      i[E.name] = w && E.repeatable ? w.split("/") : w;
    }
    return i;
  }
  function j(S) {
    let u = "", i = !1;
    for (const C of M) {
      (!i || !u.endsWith("/")) && (u += "/"), i = !1;
      for (const w of C)
        if (w.type === 0)
          u += w.value;
        else if (w.type === 1) {
          const { value: E, repeatable: x, optional: n } = w, a = E in S ? S[E] : "";
          if (JA(a) && !x)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const z = JA(a) ? a.join("/") : a;
          if (!z)
            if (n)
              C.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : i = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          u += z;
        }
    }
    return u || "/";
  }
  return {
    re: L,
    score: g,
    keys: N,
    parse: t,
    stringify: j
  };
}
function tx(M, A) {
  let I = 0;
  for (; I < M.length && I < A.length; ) {
    const g = A[I] - M[I];
    if (g)
      return g;
    I++;
  }
  return M.length < A.length ? M.length === 1 && M[0] === 40 + 40 ? -1 : 1 : M.length > A.length ? A.length === 1 && A[0] === 40 + 40 ? 1 : -1 : 0;
}
function jx(M, A) {
  let I = 0;
  const g = M.score, D = A.score;
  for (; I < g.length && I < D.length; ) {
    const N = tx(g[I], D[I]);
    if (N)
      return N;
    I++;
  }
  if (Math.abs(D.length - g.length) === 1) {
    if (Bu(g))
      return 1;
    if (Bu(D))
      return -1;
  }
  return D.length - g.length;
}
function Bu(M) {
  const A = M[M.length - 1];
  return M.length > 0 && A[A.length - 1] < 0;
}
const ux = {
  type: 0,
  value: ""
}, Sx = /[a-zA-Z0-9_]/;
function ix(M) {
  if (!M)
    return [[]];
  if (M === "/")
    return [[ux]];
  if (!M.startsWith("/"))
    throw new Error(`Invalid path "${M}"`);
  function A(w) {
    throw new Error(`ERR (${I})/"${S}": ${w}`);
  }
  let I = 0, g = I;
  const D = [];
  let N;
  function L() {
    N && D.push(N), N = [];
  }
  let t = 0, j, S = "", u = "";
  function i() {
    !S || (I === 0 ? N.push({
      type: 0,
      value: S
    }) : I === 1 || I === 2 || I === 3 ? (N.length > 1 && (j === "*" || j === "+") && A(`A repeatable param (${S}) must be alone in its segment. eg: '/:ids+.`), N.push({
      type: 1,
      value: S,
      regexp: u,
      repeatable: j === "*" || j === "+",
      optional: j === "*" || j === "?"
    })) : A("Invalid state to consume buffer"), S = "");
  }
  function C() {
    S += j;
  }
  for (; t < M.length; ) {
    if (j = M[t++], j === "\\" && I !== 2) {
      g = I, I = 4;
      continue;
    }
    switch (I) {
      case 0:
        j === "/" ? (S && i(), L()) : j === ":" ? (i(), I = 1) : C();
        break;
      case 4:
        C(), I = g;
        break;
      case 1:
        j === "(" ? I = 2 : Sx.test(j) ? C() : (i(), I = 0, j !== "*" && j !== "?" && j !== "+" && t--);
        break;
      case 2:
        j === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + j : I = 3 : u += j;
        break;
      case 3:
        i(), I = 0, j !== "*" && j !== "?" && j !== "+" && t--, u = "";
        break;
      default:
        A("Unknown state");
        break;
    }
  }
  return I === 2 && A(`Unfinished custom RegExp for param "${S}"`), i(), L(), D;
}
function ex(M, A, I) {
  const g = Lx(ix(M.path), I), D = kM(g, {
    record: M,
    parent: A,
    children: [],
    alias: []
  });
  return A && !D.record.aliasOf == !A.record.aliasOf && A.children.push(D), D;
}
function Cx(M, A) {
  const I = [], g = /* @__PURE__ */ new Map();
  A = Xu({ strict: !1, end: !0, sensitive: !1 }, A);
  function D(u) {
    return g.get(u);
  }
  function N(u, i, C) {
    const w = !C, E = wx(u);
    E.aliasOf = C && C.record;
    const x = Xu(A, u), n = [
      E
    ];
    if ("alias" in u) {
      const d = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const Y of d)
        n.push(kM({}, E, {
          components: C ? C.record.components : E.components,
          path: Y,
          aliasOf: C ? C.record : E
        }));
    }
    let a, z;
    for (const d of n) {
      const { path: Y } = d;
      if (i && Y[0] !== "/") {
        const U = i.record.path, k = U[U.length - 1] === "/" ? "" : "/";
        d.path = i.record.path + (Y && k + Y);
      }
      if (a = ex(d, i, x), C ? C.alias.push(a) : (z = z || a, z !== a && z.alias.push(a), w && u.name && !Fu(a) && L(u.name)), E.children) {
        const U = E.children;
        for (let k = 0; k < U.length; k++)
          N(U[k], a, C && C.children[k]);
      }
      C = C || a, (a.record.components && Object.keys(a.record.components).length || a.record.name || a.record.redirect) && j(a);
    }
    return z ? () => {
      L(z);
    } : aD;
  }
  function L(u) {
    if (Wi(u)) {
      const i = g.get(u);
      i && (g.delete(u), I.splice(I.indexOf(i), 1), i.children.forEach(L), i.alias.forEach(L));
    } else {
      const i = I.indexOf(u);
      i > -1 && (I.splice(i, 1), u.record.name && g.delete(u.record.name), u.children.forEach(L), u.alias.forEach(L));
    }
  }
  function t() {
    return I;
  }
  function j(u) {
    let i = 0;
    for (; i < I.length && jx(u, I[i]) >= 0 && (u.record.path !== I[i].record.path || !pi(u, I[i])); )
      i++;
    I.splice(i, 0, u), u.record.name && !Fu(u) && g.set(u.record.name, u);
  }
  function S(u, i) {
    let C, w = {}, E, x;
    if ("name" in u && u.name) {
      if (C = g.get(u.name), !C)
        throw vg(1, {
          location: u
        });
      x = C.record.name, w = kM(
        Pu(
          i.params,
          C.keys.filter((z) => !z.optional).map((z) => z.name)
        ),
        u.params && Pu(u.params, C.keys.map((z) => z.name))
      ), E = C.stringify(w);
    } else if ("path" in u)
      E = u.path, C = I.find((z) => z.re.test(E)), C && (w = C.parse(E), x = C.record.name);
    else {
      if (C = i.name ? g.get(i.name) : I.find((z) => z.re.test(i.path)), !C)
        throw vg(1, {
          location: u,
          currentLocation: i
        });
      x = C.record.name, w = kM({}, i.params, u.params), E = C.stringify(w);
    }
    const n = [];
    let a = C;
    for (; a; )
      n.unshift(a.record), a = a.parent;
    return {
      name: x,
      path: E,
      params: w,
      matched: n,
      meta: Tx(n)
    };
  }
  return M.forEach((u) => N(u)), { addRoute: N, resolve: S, removeRoute: L, getRoutes: t, getRecordMatcher: D };
}
function Pu(M, A) {
  const I = {};
  for (const g of A)
    g in M && (I[g] = M[g]);
  return I;
}
function wx(M) {
  return {
    path: M.path,
    redirect: M.redirect,
    name: M.name,
    meta: M.meta || {},
    aliasOf: void 0,
    beforeEnter: M.beforeEnter,
    props: Ex(M),
    children: M.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in M ? M.components || null : M.component && { default: M.component }
  };
}
function Ex(M) {
  const A = {}, I = M.props || !1;
  if ("component" in M)
    A.default = I;
  else
    for (const g in M.components)
      A[g] = typeof I == "boolean" ? I : I[g];
  return A;
}
function Fu(M) {
  for (; M; ) {
    if (M.record.aliasOf)
      return !0;
    M = M.parent;
  }
  return !1;
}
function Tx(M) {
  return M.reduce((A, I) => kM(A, I.meta), {});
}
function Xu(M, A) {
  const I = {};
  for (const g in M)
    I[g] = g in A ? A[g] : M[g];
  return I;
}
function pi(M, A) {
  return A.children.some((I) => I === M || pi(M, I));
}
const Qi = /#/g, xx = /&/g, ax = /\//g, yx = /=/g, nx = /\?/g, vi = /\+/g, ox = /%5B/g, lx = /%5D/g, Gi = /%5E/g, sx = /%60/g, fi = /%7B/g, cx = /%7C/g, Ji = /%7D/g, zx = /%20/g;
function dj(M) {
  return encodeURI("" + M).replace(cx, "|").replace(ox, "[").replace(lx, "]");
}
function Yx(M) {
  return dj(M).replace(fi, "{").replace(Ji, "}").replace(Gi, "^");
}
function Jt(M) {
  return dj(M).replace(vi, "%2B").replace(zx, "+").replace(Qi, "%23").replace(xx, "%26").replace(sx, "`").replace(fi, "{").replace(Ji, "}").replace(Gi, "^");
}
function rx(M) {
  return Jt(M).replace(yx, "%3D");
}
function dx(M) {
  return dj(M).replace(Qi, "%23").replace(nx, "%3F");
}
function Ux(M) {
  return M == null ? "" : dx(M).replace(ax, "%2F");
}
function GN(M) {
  try {
    return decodeURIComponent("" + M);
  } catch {
  }
  return "" + M;
}
function mx(M) {
  const A = {};
  if (M === "" || M === "?")
    return A;
  const g = (M[0] === "?" ? M.slice(1) : M).split("&");
  for (let D = 0; D < g.length; ++D) {
    const N = g[D].replace(vi, " "), L = N.indexOf("="), t = GN(L < 0 ? N : N.slice(0, L)), j = L < 0 ? null : GN(N.slice(L + 1));
    if (t in A) {
      let S = A[t];
      JA(S) || (S = A[t] = [S]), S.push(j);
    } else
      A[t] = j;
  }
  return A;
}
function Ru(M) {
  let A = "";
  for (let I in M) {
    const g = M[I];
    if (I = rx(I), g == null) {
      g !== void 0 && (A += (A.length ? "&" : "") + I);
      continue;
    }
    (JA(g) ? g.map((N) => N && Jt(N)) : [g && Jt(g)]).forEach((N) => {
      N !== void 0 && (A += (A.length ? "&" : "") + I, N != null && (A += "=" + N));
    });
  }
  return A;
}
function Ox(M) {
  const A = {};
  for (const I in M) {
    const g = M[I];
    g !== void 0 && (A[I] = JA(g) ? g.map((D) => D == null ? null : "" + D) : g == null ? g : "" + g);
  }
  return A;
}
const hx = Symbol(""), Hu = Symbol(""), iL = Symbol(""), Uj = Symbol(""), Vt = Symbol("");
function ND() {
  let M = [];
  function A(g) {
    return M.push(g), () => {
      const D = M.indexOf(g);
      D > -1 && M.splice(D, 1);
    };
  }
  function I() {
    M = [];
  }
  return {
    add: A,
    list: () => M,
    reset: I
  };
}
function cI(M, A, I, g, D) {
  const N = g && (g.enterCallbacks[D] = g.enterCallbacks[D] || []);
  return () => new Promise((L, t) => {
    const j = (i) => {
      i === !1 ? t(vg(4, {
        from: I,
        to: A
      })) : i instanceof Error ? t(i) : gx(i) ? t(vg(2, {
        from: A,
        to: i
      })) : (N && g.enterCallbacks[D] === N && typeof i == "function" && N.push(i), L());
    }, S = M.call(g && g.instances[D], A, I, j);
    let u = Promise.resolve(S);
    M.length < 3 && (u = u.then(j)), u.catch((i) => t(i));
  });
}
function KL(M, A, I, g) {
  const D = [];
  for (const N of M)
    for (const L in N.components) {
      let t = N.components[L];
      if (!(A !== "beforeRouteEnter" && !N.instances[L]))
        if (bx(t)) {
          const S = (t.__vccOpts || t)[A];
          S && D.push(cI(S, I, g, N, L));
        } else {
          let j = t();
          D.push(() => j.then((S) => {
            if (!S)
              return Promise.reject(new Error(`Couldn't resolve component "${L}" at "${N.path}"`));
            const u = v0(S) ? S.default : S;
            N.components[L] = u;
            const C = (u.__vccOpts || u)[A];
            return C && cI(C, I, g, N, L)();
          }));
        }
    }
  return D;
}
function bx(M) {
  return typeof M == "object" || "displayName" in M || "props" in M || "__vccOpts" in M;
}
function _u(M) {
  const A = tA(iL), I = tA(Uj), g = y(() => A.resolve(e(M.to))), D = y(() => {
    const { matched: j } = g.value, { length: S } = j, u = j[S - 1], i = I.matched;
    if (!u || !i.length)
      return -1;
    const C = i.findIndex(Qg.bind(null, u));
    if (C > -1)
      return C;
    const w = $u(j[S - 2]);
    return S > 1 && $u(u) === w && i[i.length - 1].path !== w ? i.findIndex(Qg.bind(null, j[S - 2])) : C;
  }), N = y(() => D.value > -1 && Qx(I.params, g.value.params)), L = y(() => D.value > -1 && D.value === I.matched.length - 1 && hi(I.params, g.value.params));
  function t(j = {}) {
    return px(j) ? A[e(M.replace) ? "replace" : "push"](
      e(M.to)
    ).catch(aD) : Promise.resolve();
  }
  return {
    route: g,
    href: y(() => g.value.href),
    isActive: N,
    isExactActive: L,
    navigate: t
  };
}
const Wx = /* @__PURE__ */ v({
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
  useLink: _u,
  setup(M, { slots: A }) {
    const I = fA(_u(M)), { options: g } = tA(iL), D = y(() => ({
      [qu(M.activeClass, g.linkActiveClass, "router-link-active")]: I.isActive,
      [qu(M.exactActiveClass, g.linkExactActiveClass, "router-link-exact-active")]: I.isExactActive
    }));
    return () => {
      const N = A.default && A.default(I);
      return M.custom ? N : sM("a", {
        "aria-current": I.isExactActive ? M.ariaCurrentValue : null,
        href: I.href,
        onClick: I.navigate,
        class: D.value
      }, N);
    };
  }
}), kx = Wx;
function px(M) {
  if (!(M.metaKey || M.altKey || M.ctrlKey || M.shiftKey) && !M.defaultPrevented && !(M.button !== void 0 && M.button !== 0)) {
    if (M.currentTarget && M.currentTarget.getAttribute) {
      const A = M.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(A))
        return;
    }
    return M.preventDefault && M.preventDefault(), !0;
  }
}
function Qx(M, A) {
  for (const I in A) {
    const g = A[I], D = M[I];
    if (typeof g == "string") {
      if (g !== D)
        return !1;
    } else if (!JA(D) || D.length !== g.length || g.some((N, L) => N !== D[L]))
      return !1;
  }
  return !0;
}
function $u(M) {
  return M ? M.aliasOf ? M.aliasOf.path : M.path : "";
}
const qu = (M, A, I) => M != null ? M : A != null ? A : I, vx = /* @__PURE__ */ v({
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
  setup(M, { attrs: A, slots: I }) {
    const g = tA(Vt), D = y(() => M.route || g.value), N = tA(Hu, 0), L = y(() => {
      let S = e(N);
      const { matched: u } = D.value;
      let i;
      for (; (i = u[S]) && !i.components; )
        S++;
      return S;
    }), t = y(() => D.value.matched[L.value]);
    NI(Hu, y(() => L.value + 1)), NI(hx, t), NI(Vt, D);
    const j = DM();
    return mM(() => [j.value, t.value, M.name], ([S, u, i], [C, w, E]) => {
      u && (u.instances[i] = S, w && w !== u && S && S === C && (u.leaveGuards.size || (u.leaveGuards = w.leaveGuards), u.updateGuards.size || (u.updateGuards = w.updateGuards))), S && u && (!w || !Qg(u, w) || !C) && (u.enterCallbacks[i] || []).forEach((x) => x(S));
    }, { flush: "post" }), () => {
      const S = D.value, u = M.name, i = t.value, C = i && i.components[u];
      if (!C)
        return Ku(I.default, { Component: C, route: S });
      const w = i.props[u], E = w ? w === !0 ? S.params : typeof w == "function" ? w(S) : w : null, n = sM(C, kM({}, E, A, {
        onVnodeUnmounted: (a) => {
          a.component.isUnmounted && (i.instances[u] = null);
        },
        ref: j
      }));
      return Ku(I.default, { Component: n, route: S }) || n;
    };
  }
});
function Ku(M, A) {
  if (!M)
    return null;
  const I = M(A);
  return I.length === 1 ? I[0] : I;
}
const Gx = vx;
function fx(M) {
  const A = Cx(M.routes, M), I = M.parseQuery || mx, g = M.stringifyQuery || Ru, D = M.history, N = ND(), L = ND(), t = ND(), j = Di(oI);
  let S = oI;
  yg && M.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = $L.bind(null, (J) => "" + J), i = $L.bind(null, Ux), C = $L.bind(null, GN);
  function w(J, _) {
    let $, NM;
    return Wi(J) ? ($ = A.getRecordMatcher(J), NM = _) : NM = J, A.addRoute(NM, $);
  }
  function E(J) {
    const _ = A.getRecordMatcher(J);
    _ && A.removeRoute(_);
  }
  function x() {
    return A.getRoutes().map((J) => J.record);
  }
  function n(J) {
    return !!A.getRecordMatcher(J);
  }
  function a(J, _) {
    if (_ = kM({}, _ || j.value), typeof J == "string") {
      const p = qL(I, J, _.path), q = A.resolve({ path: p.path }, _), YM = D.createHref(p.fullPath);
      return kM(p, q, {
        params: C(q.params),
        hash: GN(p.hash),
        redirectedFrom: void 0,
        href: YM
      });
    }
    let $;
    if ("path" in J)
      $ = kM({}, J, {
        path: qL(I, J.path, _.path).path
      });
    else {
      const p = kM({}, J.params);
      for (const q in p)
        p[q] == null && delete p[q];
      $ = kM({}, J, {
        params: i(J.params)
      }), _.params = i(_.params);
    }
    const NM = A.resolve($, _), hM = J.hash || "";
    NM.params = u(C(NM.params));
    const BM = J0(g, kM({}, J, {
      hash: Yx(hM),
      path: NM.path
    })), nM = D.createHref(BM);
    return kM({
      fullPath: BM,
      hash: hM,
      query: g === Ru ? Ox(J.query) : J.query || {}
    }, NM, {
      redirectedFrom: void 0,
      href: nM
    });
  }
  function z(J) {
    return typeof J == "string" ? qL(I, J, j.value.path) : kM({}, J);
  }
  function d(J, _) {
    if (S !== J)
      return vg(8, {
        from: _,
        to: J
      });
  }
  function Y(J) {
    return G(J);
  }
  function U(J) {
    return Y(kM(z(J), { replace: !0 }));
  }
  function k(J) {
    const _ = J.matched[J.matched.length - 1];
    if (_ && _.redirect) {
      const { redirect: $ } = _;
      let NM = typeof $ == "function" ? $(J) : $;
      return typeof NM == "string" && (NM = NM.includes("?") || NM.includes("#") ? NM = z(NM) : { path: NM }, NM.params = {}), kM({
        query: J.query,
        hash: J.hash,
        params: "path" in NM ? {} : J.params
      }, NM);
    }
  }
  function G(J, _) {
    const $ = S = a(J), NM = j.value, hM = J.state, BM = J.force, nM = J.replace === !0, p = k($);
    if (p)
      return G(
        kM(z(p), {
          state: typeof p == "object" ? kM({}, hM, p.state) : hM,
          force: BM,
          replace: nM
        }),
        _ || $
      );
    const q = $;
    q.redirectedFrom = _;
    let YM;
    return !BM && V0(g, NM, $) && (YM = vg(16, { to: q, from: NM }), bM(
      NM,
      NM,
      !0,
      !1
    )), (YM ? Promise.resolve(YM) : b(q, NM)).catch((H) => MI(H) ? MI(H, 2) ? H : dM(H) : tM(H, q, NM)).then((H) => {
      if (H) {
        if (MI(H, 2))
          return G(
            kM({
              replace: nM
            }, z(H.to), {
              state: typeof H.to == "object" ? kM({}, hM, H.to.state) : hM,
              force: BM
            }),
            _ || q
          );
      } else
        H = R(q, NM, !0, nM, hM);
      return V(q, NM, H), H;
    });
  }
  function r(J, _) {
    const $ = d(J, _);
    return $ ? Promise.reject($) : Promise.resolve();
  }
  function b(J, _) {
    let $;
    const [NM, hM, BM] = Jx(J, _);
    $ = KL(NM.reverse(), "beforeRouteLeave", J, _);
    for (const p of NM)
      p.leaveGuards.forEach((q) => {
        $.push(cI(q, J, _));
      });
    const nM = r.bind(null, J, _);
    return $.push(nM), Cg($).then(() => {
      $ = [];
      for (const p of N.list())
        $.push(cI(p, J, _));
      return $.push(nM), Cg($);
    }).then(() => {
      $ = KL(hM, "beforeRouteUpdate", J, _);
      for (const p of hM)
        p.updateGuards.forEach((q) => {
          $.push(cI(q, J, _));
        });
      return $.push(nM), Cg($);
    }).then(() => {
      $ = [];
      for (const p of J.matched)
        if (p.beforeEnter && !_.matched.includes(p))
          if (JA(p.beforeEnter))
            for (const q of p.beforeEnter)
              $.push(cI(q, J, _));
          else
            $.push(cI(p.beforeEnter, J, _));
      return $.push(nM), Cg($);
    }).then(() => (J.matched.forEach((p) => p.enterCallbacks = {}), $ = KL(BM, "beforeRouteEnter", J, _), $.push(nM), Cg($))).then(() => {
      $ = [];
      for (const p of L.list())
        $.push(cI(p, J, _));
      return $.push(nM), Cg($);
    }).catch((p) => MI(p, 8) ? p : Promise.reject(p));
  }
  function V(J, _, $) {
    for (const NM of t.list())
      NM(J, _, $);
  }
  function R(J, _, $, NM, hM) {
    const BM = d(J, _);
    if (BM)
      return BM;
    const nM = _ === oI, p = yg ? history.state : {};
    $ && (NM || nM ? D.replace(J.fullPath, kM({
      scroll: nM && p && p.scroll
    }, hM)) : D.push(J.fullPath, hM)), j.value = J, bM(J, _, $, nM), dM();
  }
  let AM;
  function LM() {
    AM || (AM = D.listen((J, _, $) => {
      if (!zM.listening)
        return;
      const NM = a(J), hM = k(NM);
      if (hM) {
        G(kM(hM, { replace: !0 }), NM).catch(aD);
        return;
      }
      S = NM;
      const BM = j.value;
      yg && _0(fu(BM.fullPath, $.delta), SL()), b(NM, BM).catch((nM) => MI(nM, 12) ? nM : MI(nM, 2) ? (G(
        nM.to,
        NM
      ).then((p) => {
        MI(p, 20) && !$.delta && $.type === dD.pop && D.go(-1, !1);
      }).catch(aD), Promise.reject()) : ($.delta && D.go(-$.delta, !1), tM(nM, NM, BM))).then((nM) => {
        nM = nM || R(
          NM,
          BM,
          !1
        ), nM && ($.delta && !MI(nM, 8) ? D.go(-$.delta, !1) : $.type === dD.pop && MI(nM, 20) && D.go(-1, !1)), V(NM, BM, nM);
      }).catch(aD);
    }));
  }
  let gM = ND(), oM = ND(), SM;
  function tM(J, _, $) {
    dM(J);
    const NM = oM.list();
    return NM.length ? NM.forEach((hM) => hM(J, _, $)) : console.error(J), Promise.reject(J);
  }
  function CM() {
    return SM && j.value !== oI ? Promise.resolve() : new Promise((J, _) => {
      gM.add([J, _]);
    });
  }
  function dM(J) {
    return SM || (SM = !J, LM(), gM.list().forEach(([_, $]) => J ? $(J) : _()), gM.reset()), J;
  }
  function bM(J, _, $, NM) {
    const { scrollBehavior: hM } = M;
    if (!yg || !hM)
      return Promise.resolve();
    const BM = !$ && $0(fu(J.fullPath, 0)) || (NM || !$) && history.state && history.state.scroll || null;
    return DI().then(() => hM(J, _, BM)).then((nM) => nM && H0(nM)).catch((nM) => tM(nM, J, _));
  }
  const vM = (J) => D.go(J);
  let fM;
  const iM = /* @__PURE__ */ new Set(), zM = {
    currentRoute: j,
    listening: !0,
    addRoute: w,
    removeRoute: E,
    hasRoute: n,
    getRoutes: x,
    resolve: a,
    options: M,
    push: Y,
    replace: U,
    go: vM,
    back: () => vM(-1),
    forward: () => vM(1),
    beforeEach: N.add,
    beforeResolve: L.add,
    afterEach: t.add,
    onError: oM.add,
    isReady: CM,
    install(J) {
      const _ = this;
      J.component("RouterLink", kx), J.component("RouterView", Gx), J.config.globalProperties.$router = _, Object.defineProperty(J.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => e(j)
      }), yg && !fM && j.value === oI && (fM = !0, Y(D.location).catch((hM) => {
      }));
      const $ = {};
      for (const hM in oI)
        $[hM] = y(() => j.value[hM]);
      J.provide(iL, _), J.provide(Uj, fA($)), J.provide(Vt, j);
      const NM = J.unmount;
      iM.add(J), J.unmount = function() {
        iM.delete(J), iM.size < 1 && (S = oI, AM && AM(), AM = null, j.value = oI, fM = !1, SM = !1), NM();
      };
    }
  };
  return zM;
}
function Cg(M) {
  return M.reduce((A, I) => A.then(() => I()), Promise.resolve());
}
function Jx(M, A) {
  const I = [], g = [], D = [], N = Math.max(A.matched.length, M.matched.length);
  for (let L = 0; L < N; L++) {
    const t = A.matched[L];
    t && (M.matched.find((S) => Qg(S, t)) ? g.push(t) : I.push(t));
    const j = M.matched[L];
    j && (A.matched.find((S) => Qg(S, j)) || D.push(j));
  }
  return [I, g, D];
}
function Vx() {
  return tA(iL);
}
function eL() {
  return tA(Uj);
}
const Vi = (M) => (WI("data-v-c29c21cd"), M = M(), kI(), M), Zx = /* @__PURE__ */ Vi(() => /* @__PURE__ */ l("h2", null, "Form Builder", -1)), Bx = { class: "control" }, Px = ["disabled"], Fx = ["disabled"], Xx = { class: "toolbar" }, Rx = ["disabled"], Hx = ["disabled"], _x = ["disabled"], $x = ["disabled"], qx = ["disabled"], Kx = ["disabled"], Ma = ["disabled"], Aa = ["disabled"], Ia = ["disabled"], ga = ["disabled"], Da = ["disabled"], Na = ["disabled"], La = ["disabled"], ta = ["disabled"], ja = /* @__PURE__ */ Vi(() => /* @__PURE__ */ l("hr", null, null, -1)), ua = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    formId: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = pD(), g = eL(), D = A.formId ? A.formId : g.params.id;
    A.apiRoot && I.setApiRoot(A.apiRoot), D && I.loadForm(D);
    const N = () => {
      I.form = {
        id: jM.EMPTY,
        name: "",
        description: "",
        fields: []
      };
    }, L = () => I.saveForm(), t = y(() => !I.form), j = (S) => {
      const u = {
        id: jM.create().toString(),
        title: kg(I.lang),
        description: kg(I.lang),
        type: S
      };
      Ei(u) && (u.isMultiValued = !1, u.isRequired = !1, u.allowCustomOptionValues = !1), sj(u) && (u.options = []), I.form.fields.push(u);
    };
    return (S, u) => (T(), s(MM, null, [
      Zx,
      e(I).form ? (T(), Z(Q0, {
        key: 0,
        model: e(I).form
      }, null, 8, ["model"])) : B("", !0),
      l("div", Bx, [
        l("button", {
          type: "button",
          class: "btn btn-primary",
          disabled: !e(t),
          onClick: N
        }, "New Form", 8, Px),
        l("button", {
          type: "button",
          class: "btn btn-success",
          disabled: e(t),
          onClick: L
        }, "Save", 8, Fx)
      ]),
      W(cj, {
        model: e(I).transientMessageModel
      }, null, 8, ["model"]),
      l("div", Xx, [
        l("button", {
          disabled: e(t),
          onClick: u[0] || (u[0] = (i) => j(e(rM).ShortAnswer))
        }, "+ Short Answer", 8, Rx),
        l("button", {
          disabled: e(t),
          onClick: u[1] || (u[1] = (i) => j(e(rM).Paragraph))
        }, "+ Paragraph", 8, Hx),
        l("button", {
          disabled: e(t),
          onClick: u[2] || (u[2] = (i) => j(e(rM).RichText))
        }, "+ Rich Text", 8, _x),
        l("button", {
          disabled: e(t),
          onClick: u[3] || (u[3] = (i) => j(e(rM).Date))
        }, "+ Date", 8, $x),
        l("button", {
          disabled: e(t),
          onClick: u[4] || (u[4] = (i) => j(e(rM).DateTime))
        }, "+ Date/Time", 8, qx),
        l("button", {
          disabled: e(t),
          onClick: u[5] || (u[5] = (i) => j(e(rM).Decimal))
        }, "+ Decimal", 8, Kx),
        l("button", {
          disabled: e(t),
          onClick: u[6] || (u[6] = (i) => j(e(rM).Integer))
        }, "+ Integer", 8, Ma),
        l("button", {
          disabled: e(t),
          onClick: u[7] || (u[7] = (i) => j(e(rM).Email))
        }, "+ Email", 8, Aa),
        l("button", {
          disabled: e(t),
          onClick: u[8] || (u[8] = (i) => j(e(rM).Checkboxes))
        }, "+ Checkboxes", 8, Ia),
        l("button", {
          disabled: e(t),
          onClick: u[9] || (u[9] = (i) => j(e(rM).DataList))
        }, "+ Data List", 8, ga),
        l("button", {
          disabled: e(t),
          onClick: u[10] || (u[10] = (i) => j(e(rM).RadioButtons))
        }, "+ Radio Buttons", 8, Da),
        l("button", {
          disabled: e(t),
          onClick: u[11] || (u[11] = (i) => j(e(rM).DropDown))
        }, "+ Drop Down", 8, Na),
        l("button", {
          disabled: e(t),
          onClick: u[12] || (u[12] = (i) => j(e(rM).InfoSection))
        }, "+ Info Section", 8, La),
        l("button", {
          disabled: e(t),
          onClick: u[13] || (u[13] = (i) => j(e(rM).AttachmentField))
        }, "+ Attachment Field", 8, ta)
      ]),
      ja
    ], 64));
  }
});
const Zt = /* @__PURE__ */ FM(ua, [["__scopeId", "data-v-c29c21cd"]]), oA = TI("FormSubmissionStore", {
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
    loadForm(M, A) {
      let I = `${TA.dataRepositoryApiRoot}/api/forms/${M}`;
      console.log(I), fetch(I, {
        method: "GET"
      }).then((g) => g.json()).then((g) => {
        this.form = g, A || (this.formData = ai(this.form, this.lang));
      }).catch((g) => {
        console.error("Load Form API Error:", g);
      });
    },
    loadSubmission(M) {
      let A = `${TA.dataRepositoryApiRoot}/api/form-submissions/${M}`;
      console.log(A), fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        var g;
        this.formData = I, (g = this.formData) != null && g.formId && this.loadForm(this.formData.formId, !0);
      }).catch((I) => {
        console.error("Load Form API Error:", I);
      });
    },
    validateFormData() {
      return console.log("TODO: Validate form data."), !0;
    },
    submitForm() {
      var g, D;
      if (!this.validateFormData()) {
        console.log("Form validation failed.");
        return;
      }
      const M = ((D = (g = this.formData) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === jM.EMPTY;
      let A = `${TA.dataRepositoryApiRoot}/api/form-submissions`, I = "";
      M ? I = "POST" : (A = `${A}/${this.formData.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.formData),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then(async (N) => {
        if (N.ok) {
          if (M) {
            const L = await N.json();
            this.formData.id = L;
          }
          this.transientMessage = "Success", this.transientMessageClass = "success", console.log("Form submission successfull.");
        } else
          switch (this.transientMessageClass = "danger", N.status) {
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
      }).catch((N) => {
        M && this.formData && (this.formData.id = jM.EMPTY), this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("FormData Submit API Error:", N);
      });
    },
    saveForm() {
      var g, D;
      if (!this.form) {
        console.error("Cannot save null form.");
        return;
      }
      const M = ((D = (g = this.form) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === jM.EMPTY;
      let A = `${TA.dataRepositoryApiRoot}/api/forms`, I = "";
      M ? (console.log("Saving new form."), this.form.id = jM.create().toString(), I = "POST") : (console.log("Updating existing form."), A = `${A}/${this.form.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.form),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then((N) => {
        if (N.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", N.status) {
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
      }).catch((N) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Form Save API Error:", N);
      });
    },
    clearMessages() {
      this.transientMessage = null;
    },
    addFile(M, A) {
      var I, g;
      (I = this.files) == null || I.push(M), (g = this.fileKeys) == null || g.push(A.toString());
    },
    attachFile(M, A, I) {
      Array.from(M).forEach((g) => {
        console.log("fieldId:" + A), this.addFile(g, A);
      });
    }
  }
}), Zi = (M) => (WI("data-v-7ad75a89"), M = M(), kI(), M), Sa = /* @__PURE__ */ Zi(() => /* @__PURE__ */ l("h2", null, "Form Submission", -1)), ia = /* @__PURE__ */ Zi(() => /* @__PURE__ */ l("hr", null, null, -1)), ea = { class: "control" }, Ca = ["disabled"], wa = /* @__PURE__ */ v({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    formId: null,
    submissionId: null
  },
  setup(M) {
    const A = M, I = oA(A.piniaInstance);
    A.formId ? I.loadForm(A.formId) : A.submissionId && I.loadSubmission(A.submissionId), mM(() => I.transientMessage, async (N) => {
      N && setTimeout(() => {
        I.transientMessage = null;
      }, 2e3);
    });
    const g = () => I.submitForm(), D = y(() => !!I.form);
    return (N, L) => {
      const t = yM("Form");
      return T(), s(MM, null, [
        W(LL, { name: "fade" }, {
          default: h(() => [
            e(I).transientMessage ? (T(), s("p", {
              key: 0,
              class: F("alert alert-" + e(I).transientMessageClass)
            }, P(e(I).transientMessage), 3)) : B("", !0)
          ]),
          _: 1
        }),
        Sa,
        ia,
        e(I).form ? (T(), Z(t, {
          key: 0,
          model: e(I).form
        }, null, 8, ["model"])) : B("", !0),
        l("div", ea, [
          l("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: !e(D),
            onClick: g
          }, "Submit", 8, Ca)
        ])
      ], 64);
    };
  }
});
const Ea = /* @__PURE__ */ FM(wa, [["__scopeId", "data-v-7ad75a89"]]), Bi = TI("LoginStore", {
  state: () => ({
    authorizationApiRoot: null,
    loginResult: null
  }),
  actions: {
    authorize(M) {
      var I;
      if (!M) {
        console.error("JWT token is null.");
        return;
      }
      if (!this.authorizationApiRoot) {
        console.error("Authorization service root is not specified.");
        return;
      }
      const A = ((I = this.authorizationApiRoot) == null ? void 0 : I.replace(/\/+$/, "")) + "/api/GoogleIdentity";
      fetch(
        A,
        {
          body: JSON.stringify(M),
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((g) => g.json()).then((g) => {
        g.success ? this.loginResult = g : (this.loginResult = g, console.error("User authorization not successful."));
      }).catch((g) => {
        this.loginResult = {}, console.error("User authorization failed: ", g);
      });
    }
  }
}), Ta = /* @__PURE__ */ l("h2", null, "Login", -1), xa = /* @__PURE__ */ l("br", null, null, -1), aa = /* @__PURE__ */ l("br", null, null, -1), ya = /* @__PURE__ */ v({
  __name: "App",
  props: {
    piniaInstance: null,
    authorizationRoot: null
  },
  setup(M) {
    const A = M, I = Bi(A.piniaInstance);
    _M(() => {
      I.authorizationApiRoot = A.authorizationRoot;
    });
    const g = (D) => {
      I.authorize(D.credential);
    };
    return (D, N) => {
      const L = yM("GoogleLogin");
      return T(), s(MM, null, [
        Ta,
        xa,
        W(L, { callback: g }),
        aa
      ], 64);
    };
  }
}), Pi = TI("WorkflowBuilderStore", {
  state: () => ({
    workflow: null,
    transientMessage: null,
    transientMessageClass: null
  }),
  actions: {
    loadWorkflow(M) {
      const A = `https://localhost:5020/api/workflow/${M}`;
      fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.workflow = I;
      }).catch((I) => {
        console.error("Load Workflow API Error:", I);
      });
    },
    saveWorkflow() {
      var g, D;
      if (!this.workflow) {
        console.error("Cannot save null workflow.");
        return;
      }
      const M = ((D = (g = this.workflow) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === jM.EMPTY;
      let A = "https://localhost:5020/api/workflow", I = "";
      M ? (console.log("Saving new workflow."), I = "POST") : (console.log("Updating existing workflow."), A = `${A}/${this.workflow.id}`, I = "PUT"), fetch(
        A,
        {
          body: JSON.stringify(this.workflow),
          method: I,
          headers: {
            encType: "multipart/form-data",
            "Content-Type": "application/json"
          }
        }
      ).then((N) => {
        if (N.ok)
          this.transientMessage = "The form saved successfully", this.transientMessageClass = "success";
        else
          switch (this.transientMessageClass = "danger", N.status) {
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
      }).catch((N) => {
        this.transientMessage = "Unknown error occurred", this.transientMessageClass = "danger", console.error("Workflow Save API Error:", N);
      });
    }
  }
}), na = (M) => (WI("data-v-a2d9971d"), M = M(), kI(), M), oa = { class: "action" }, la = /* @__PURE__ */ na(() => /* @__PURE__ */ l("select", null, [
  /* @__PURE__ */ l("option", { value: "b01e8c95-abef-4db2-ac3a-9ab35c4f6e11" }, "TO DO Form 1"),
  /* @__PURE__ */ l("option", { value: "139e7084-20ba-4268-9396-61bac78cda52" }, "TO DO Form 2")
], -1)), sa = /* @__PURE__ */ v({
  __name: "WorkflowAction",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(), s("div", oa, [
      IM(" Workflow Action: " + P(M.model.id) + " ", 1),
      l("div", null, [
        l("h4", null, P(M.model.name), 1),
        IM(" Name: "),
        VM(l("input", {
          type: "text",
          "onUpdate:modelValue": I[0] || (I[0] = (g) => M.model.name = g)
        }, null, 512), [
          [bg, M.model.name]
        ])
      ]),
      l("div", null, [
        l("p", null, P(M.model.description), 1),
        IM(" Description: "),
        VM(l("textarea", {
          "onUpdate:modelValue": I[1] || (I[1] = (g) => M.model.description = g)
        }, null, 512), [
          [bg, M.model.description]
        ])
      ]),
      l("div", null, [
        l("p", null, P(M.model.description), 1),
        IM(" Form: "),
        la
      ])
    ]));
  }
});
const ca = /* @__PURE__ */ FM(sa, [["__scopeId", "data-v-a2d9971d"]]), za = /* @__PURE__ */ v({
  __name: "Workflow",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(!0), s(MM, null, eM(M.model.actions, (g) => (T(), Z(ca, {
      key: g.id,
      model: g
    }, null, 8, ["model"]))), 128));
  }
}), Fi = (M) => (WI("data-v-52fc6feb"), M = M(), kI(), M), Ya = /* @__PURE__ */ Fi(() => /* @__PURE__ */ l("h2", null, "Workflow Builder", -1)), ra = { class: "control" }, da = ["disabled"], Ua = ["disabled"], ma = { class: "toolbar" }, Oa = ["disabled"], ha = /* @__PURE__ */ Fi(() => /* @__PURE__ */ l("hr", null, null, -1)), ba = /* @__PURE__ */ v({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    workflowId: null
  },
  setup(M) {
    const A = M, I = Pi(A.piniaInstance);
    A.workflowId && I.loadWorkflow(A.workflowId), mM(() => I.transientMessage, async (t) => {
      t && setTimeout(() => {
        I.transientMessage = null;
      }, 2e3);
    });
    const g = () => {
      I.workflow = {
        id: jM.EMPTY,
        name: "",
        description: "",
        states: []
      };
    }, D = () => I.saveWorkflow(), N = y(() => !I.workflow), L = () => {
      if (!I.workflow) {
        console.error("Cannot add action to null workflow");
        return;
      }
      const t = {
        id: jM.create().toString(),
        title: "",
        description: "",
        formId: jM.createEmpty()
      };
      I.workflow.actions ? I.workflow.actions.push(t) : I.workflow.actions = [t];
    };
    return (t, j) => (T(), s(MM, null, [
      W(LL, { name: "fade" }, {
        default: h(() => [
          e(I).transientMessage ? (T(), s("p", {
            key: 0,
            class: F("alert alert-" + e(I).transientMessageClass)
          }, P(e(I).transientMessage), 3)) : B("", !0)
        ]),
        _: 1
      }),
      Ya,
      l("div", ra, [
        l("button", {
          type: "button",
          class: "btn btn-primary",
          disabled: !e(N),
          onClick: g
        }, "New Workflow", 8, da),
        l("button", {
          type: "button",
          class: "btn btn-success",
          disabled: e(N),
          onClick: D
        }, "Save", 8, Ua)
      ]),
      l("div", ma, [
        l("button", {
          disabled: e(N),
          onClick: j[0] || (j[0] = (S) => L())
        }, "+ Form Submission Action", 8, Oa)
      ]),
      ha,
      e(I).workflow ? (T(), Z(za, {
        key: 0,
        model: e(I).workflow
      }, null, 8, ["model"])) : B("", !0)
    ], 64));
  }
});
const Wa = /* @__PURE__ */ FM(ba, [["__scopeId", "data-v-52fc6feb"]]);
var Xi = /* @__PURE__ */ ((M) => (M.Unpublished = "Unpublished", M.Published = "Published", M.Archived = "Archived", M.Deleted = "Deleted", M))(Xi || {}), CL = /* @__PURE__ */ ((M) => (M.Item = "Item", M.Collection = "Collection", M.Unknown = "Unknown", M))(CL || {}), Bt = /* @__PURE__ */ ((M) => (M.Title = "Title", M.Description = "Description", M.TitleOrDescription = "TitleOrDescription", M))(Bt || {});
const mj = TI("EntityTemplateBuilderStore", {
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
        id: jM.EMPTY,
        name: "New Entity Template",
        description: "Description about this new Entity Template",
        created: new Date(),
        updated: new Date(),
        state: Xi.Unpublished,
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
    associateForm(M) {
      if (this.forms.findIndex((A) => A.id === M) < 0) {
        const I = `${"https://" + this.getApiRoot.split("/")[2]}/api/forms/${M}`;
        fetch(I, {
          method: "GET"
        }).then((g) => g.json()).then((g) => {
          this.forms.push(g);
        }).catch((g) => {
          console.error("Load Form API Error:", g);
        });
      }
    },
    loadFormEntries() {
      const A = `${this.getApiRoot.split("/")[0] + "//" + this.getApiRoot.split("/")[2]}/api/forms`;
      console.log("loading forms: ", A), fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.formEntries = I;
      }).catch((I) => {
        console.error("Load Forms API Error:", I);
      });
    },
    loadTemplate(M) {
      const A = `${this.getApiRoot}/${M}`;
      console.log("loading entityTemplate: ", A), fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.template = I;
      }).catch((I) => {
        console.error("Load Entity Template API Error:", I);
      });
    },
    saveTemplate() {
      var g, D, N, L, t;
      const M = ((D = (g = this.template) == null ? void 0 : g.id) == null ? void 0 : D.toString()) === jM.EMPTY;
      let A = this.getApiRoot, I = "";
      M ? (console.log("Saving new template."), ((L = (N = this.template) == null ? void 0 : N.id) == null ? void 0 : L.toString()) === jM.EMPTY && (this.template.id = jM.create().toString()), I = "POST") : (console.log("Updating existing template."), A = `${A}/${(t = this.template) == null ? void 0 : t.id}`, I = "PUT"), fetch(A, {
        body: JSON.stringify(this.template),
        method: I,
        headers: {
          encType: "multipart/form-data",
          "Content-Type": "application/json"
        }
      }).then((j) => {
        if (j.ok)
          this.transientMessageModel.message = "The template saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (M && this.template && (this.template.id = jM.EMPTY), this.transientMessageModel.messageClass = "danger", j.status) {
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
      }).catch((j) => {
        M && this.template && (this.template.id = jM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity Template API Error:", j);
      });
    },
    deleteFormEntry(M) {
      let A = this.template.entityTemplateSettings.dataForms.findIndex((I) => I.id === M);
      A >= 0 ? this.template.entityTemplateSettings.dataForms.splice(A, 1) : (A = this.template.entityTemplateSettings.metadataForms.findIndex((I) => I.id === M), A >= 0 && this.template.entityTemplateSettings.metadataForms.splice(A, 1));
    },
    setApiRoot(M) {
      this.apiRoot = M;
    }
  },
  getters: {
    getApiRoot(M) {
      return M.apiRoot ? M.apiRoot : TA.dataRepositoryApiRoot + "/api/entity-templates";
    }
  }
}), Ri = (M) => (WI("data-v-90a75950"), M = M(), kI(), M), ka = /* @__PURE__ */ Ri(() => /* @__PURE__ */ l("h6", null, "Name :", -1)), pa = /* @__PURE__ */ Ri(() => /* @__PURE__ */ l("br", null, null, -1)), Qa = ["for"], va = ["name"], Ga = ["value"], fa = /* @__PURE__ */ v({
  __name: "FormEntry",
  props: {
    model: null
  },
  setup(M) {
    const A = mj();
    return (I, g) => {
      const D = yM("b-col"), N = yM("b-form-input"), L = yM("b-row"), t = yM("font-awesome-icon");
      return T(), s(MM, null, [
        IM(P(M.model.id.toString()) + " ", 1),
        W(L, { class: "mb-2" }, {
          default: h(() => [
            W(D, { class: "col-sm-11" }, {
              default: h(() => [
                W(L, null, {
                  default: h(() => [
                    W(D, { class: "col-sm-2" }, {
                      default: h(() => [
                        ka
                      ]),
                      _: 1
                    }),
                    W(D, { class: "col-sm-10" }, {
                      default: h(() => [
                        W(N, {
                          modelValue: M.model.name,
                          "onUpdate:modelValue": g[0] || (g[0] = (j) => M.model.name = j)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                pa,
                W(L, null, {
                  default: h(() => [
                    W(D, { class: "col-sm-2" }, {
                      default: h(() => [
                        l("label", {
                          for: M.model.id.toString()
                        }, "Form:", 8, Qa)
                      ]),
                      _: 1
                    }),
                    W(D, { class: "col-sm-10" }, {
                      default: h(() => [
                        VM(l("select", {
                          "onUpdate:modelValue": g[1] || (g[1] = (j) => M.model.id = j),
                          name: M.model.id.toString(),
                          class: "form-select"
                        }, [
                          (T(!0), s(MM, null, eM(e(A).formEntries, (j) => (T(), s("option", {
                            key: j.id.toString(),
                            value: j.id
                          }, P(j.name), 9, Ga))), 128))
                        ], 8, va), [
                          [Wg, M.model.id]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l("div", null, [
                  VM(l("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": g[2] || (g[2] = (j) => M.model.isRequired = j)
                  }, null, 512), [
                    [KI, M.model.isRequired]
                  ]),
                  IM(" Is Required? ")
                ])
              ]),
              _: 1
            }),
            W(D, { class: "col-sm-1" }, {
              default: h(() => [
                W(t, {
                  icon: "fa-solid fa-circle-xmark",
                  onClick: g[3] || (g[3] = (j) => e(A).deleteFormEntry(M.model.id)),
                  class: "fa-icon delete"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const M4 = /* @__PURE__ */ FM(fa, [["__scopeId", "data-v-90a75950"]]), Ja = { class: "row" }, Va = { class: "col-6" }, Za = { class: "col-6" }, Mt = /* @__PURE__ */ v({
  __name: "FormFieldSelectionDropdown",
  props: {
    model: null,
    optionSource: null,
    forms: null
  },
  setup(M) {
    const A = M, I = y(() => {
      const D = [{ value: null, text: "Please select a form" }];
      return A.optionSource.forEach((N) => {
        const L = {
          label: N.formGroupName,
          options: []
        };
        N.formGroup.forEach((t) => {
          L.options.push({
            value: t.id,
            text: t.name
          });
        }), D.push(L);
      }), D;
    }), g = y(() => {
      var N, L, t, j, S;
      return ((N = A.model) == null ? void 0 : N.formId) === null || ((t = (L = A.model) == null ? void 0 : L.formId) == null ? void 0 : t.toString()) === "" ? [{ value: null, text: "Please select a form first." }] : (S = (j = A.forms) == null ? void 0 : j.filter((u) => {
        var i;
        return u.id === ((i = A.model) == null ? void 0 : i.formId);
      })[0]) == null ? void 0 : S.fields.map((u) => ({
        value: u.id,
        text: Ti(u, null)
      }));
    });
    return mM(() => A.model.formId, (D) => {
      A.model.fieldId = jM.EMPTY;
    }), (D, N) => {
      const L = yM("b-form-select");
      return T(), s("div", Ja, [
        l("div", Va, [
          W(L, {
            modelValue: M.model.formId,
            "onUpdate:modelValue": N[0] || (N[0] = (t) => M.model.formId = t),
            options: e(I)
          }, null, 8, ["modelValue", "options"])
        ]),
        l("div", Za, [
          W(L, {
            modelValue: M.model.fieldId,
            "onUpdate:modelValue": N[1] || (N[1] = (t) => M.model.fieldId = t),
            options: e(g)
          }, null, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
}), At = /* @__PURE__ */ new Map(), Ba = (M) => (At.has(M) || At.set(M, Pa(M)), At.get(M));
function Pa(M) {
  return TI(`entitySelectStore/${M}`, {
    state: () => ({
      selectedEntityIds: [],
      entitySearchResult: null
    }),
    actions: {
      seach(A, I, g) {
        let D = 0, N = 10, L = TA.dataRepositoryApiRoot + "/api/entities/" + A + "/" + I + "/" + g + "/" + D + "/" + N;
        fetch(L, {
          method: "GET"
        }).then((t) => t.json()).then((t) => {
          this.entitySearchResult = t;
        }).catch((t) => {
          console.error("Load Entities API Error:", t);
        });
      }
    }
  });
}
const wL = (M) => Ba(M)(), Fa = { class: "row mt-2" }, Xa = { class: "col-sm-6" }, Ra = /* @__PURE__ */ l("label", null, "Search Target:", -1), Ha = ["value"], _a = { class: "col-sm-6" }, $a = /* @__PURE__ */ l("label", null, " Search Text ", -1), qa = ["onKeydown"], Ka = /* @__PURE__ */ v({
  __name: "EntitySearchBox",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M, I = DM(Bt), g = DM(""), D = wL(A.storeId), N = () => D.seach(A.entityType, I.value, g.value);
    return (L, t) => (T(), s("div", Fa, [
      l("div", Xa, [
        Ra,
        VM(l("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (j) => I.value = j),
          class: "form-select"
        }, [
          (T(!0), s(MM, null, eM(e(Bt), (j) => (T(), s("option", {
            key: j,
            value: j
          }, P(j), 9, Ha))), 128))
        ], 512), [
          [Wg, I.value]
        ])
      ]),
      l("div", _a, [
        $a,
        VM(l("input", {
          type: "text",
          "onUpdate:modelValue": t[1] || (t[1] = (j) => g.value = j),
          class: "form-control",
          onBlur: N,
          onKeydown: Ni(N, ["enter"])
        }, null, 40, qa), [
          [bg, g.value]
        ])
      ])
    ]));
  }
}), My = /* @__PURE__ */ l("h4", null, "Entity Selection List", -1), Ay = ["value"], Iy = /* @__PURE__ */ v({
  __name: "EntityList",
  props: {
    storeId: null
  },
  setup(M) {
    const I = wL(M.storeId), { entitySearchResult: g, selectedEntityIds: D } = nj(I);
    return (N, L) => {
      var t;
      return T(), s(MM, null, [
        My,
        (T(!0), s(MM, null, eM((t = e(g)) == null ? void 0 : t.result, (j) => (T(), s("div", {
          key: j.id.toString(),
          class: "form-control"
        }, [
          VM(l("input", {
            type: "checkbox",
            value: j.id,
            "onUpdate:modelValue": L[0] || (L[0] = (S) => EA(D) ? D.value = S : null)
          }, null, 8, Ay), [
            [KI, e(D)]
          ]),
          l("span", null, P(j.title) + " => " + P(j.description), 1)
        ]))), 128))
      ], 64);
    };
  }
}), gy = /* @__PURE__ */ v({
  __name: "EntitySelectionList",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M;
    wL(A.storeId);
    const I = DM(A.entityType);
    return (g, D) => (T(), s(MM, null, [
      W(Ka, {
        storeId: M.storeId,
        entityType: I.value
      }, null, 8, ["storeId", "entityType"]),
      W(Iy, { storeId: M.storeId }, null, 8, ["storeId"])
    ], 64));
  }
}), YA = (M) => (WI("data-v-d4b68068"), M = M(), kI(), M), Dy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h3", null, "Entity Template Builder", -1)), Ny = { class: "control" }, Ly = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("br", null, null, -1)), ty = { key: 0 }, jy = { class: "form-field-border" }, uy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h6", null, "Name :", -1)), Sy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("br", null, null, -1)), iy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h6", null, "Description :", -1)), ey = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("br", null, null, -1)), Cy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h6", null, "State:", -1)), wy = { class: "form-field-border blue" }, Ey = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h5", null, "Metadata Forms", -1)), Ty = { class: "form-field-border red" }, xy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h5", null, "Data Forms", -1)), ay = { key: 0 }, yy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("h5", null, "Field Mappings", -1)), ny = { class: "row" }, oy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("div", { class: "col-2" }, " Title ", -1)), ly = { class: "col-10" }, sy = { class: "row" }, cy = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("div", { class: "col-2" }, " Description ", -1)), zy = { class: "col-10" }, Yy = { class: "row" }, ry = /* @__PURE__ */ YA(() => /* @__PURE__ */ l("div", { class: "col-2" }, " Media ", -1)), dy = { class: "col-10" }, Uy = {
  class: "alert alert-info",
  style: { "margin-top": "2em" }
}, my = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = mj();
    A.apiRoot && I.setApiRoot(A.apiRoot);
    const g = () => I.newTemplate(), D = y(() => I.template), N = y(() => {
      var x;
      return (x = D.value) == null ? void 0 : x.entityTemplateSettings.titleField;
    }), L = y(() => {
      var x;
      return (x = D.value) == null ? void 0 : x.entityTemplateSettings.descriptionField;
    }), t = y(() => {
      var x;
      return (x = D.value) == null ? void 0 : x.entityTemplateSettings.mediaField;
    }), j = y(() => {
      var x, n, a, z;
      return [
        { formGroupName: "Matadata Form", formGroup: (n = (x = D.value) == null ? void 0 : x.entityTemplateSettings.metadataForms) == null ? void 0 : n.filter((d) => d.isRequired) },
        { formGroupName: "Data Form", formGroup: (z = (a = D.value) == null ? void 0 : a.entityTemplateSettings.dataForms) == null ? void 0 : z.filter((d) => d.isRequired) }
      ];
    });
    Vx();
    const S = () => {
      var x, n;
      (n = (x = I.template) == null ? void 0 : x.entityTemplateSettings.metadataForms) == null || n.push({ id: jM.create().toString(), formId: jM.createEmpty(), name: "" });
    }, u = () => {
      var x, n;
      (n = (x = I.template) == null ? void 0 : x.entityTemplateSettings.dataForms) == null || n.push({ id: jM.create().toString(), formId: jM.createEmpty(), name: "" });
    }, i = () => I.saveTemplate(), w = eL().params.id, E = DM(!0);
    return w && (E.value = !1, I.loadTemplate(w)), mM(() => {
      var x;
      return (x = N == null ? void 0 : N.value) == null ? void 0 : x.formId;
    }, (x) => {
      I.associateForm(x);
    }), _M(() => {
      var x;
      I.loadFormEntries(), D.value && ((x = D.value.id) == null ? void 0 : x.toString()) !== jM.EMPTY && (I.loadTemplate(D.value.id), E.value = !1);
    }), (x, n) => {
      const a = yM("b-col"), z = yM("b-form-input"), d = yM("b-row"), Y = yM("b-form-textarea");
      return T(), s(MM, null, [
        W(cj, {
          model: e(I).transientMessageModel
        }, null, 8, ["model"]),
        Dy,
        l("div", Ny, [
          E.value ? (T(), s("button", {
            key: 0,
            class: "btn btn-primary",
            onClick: g
          }, "New Template")) : B("", !0),
          l("button", {
            class: "btn btn-success",
            onClick: i
          }, "Save")
        ]),
        Ly,
        e(D) ? (T(), s("div", ty, [
          l("div", jy, [
            W(d, null, {
              default: h(() => [
                W(a, { class: "col-sm-2" }, {
                  default: h(() => [
                    uy
                  ]),
                  _: 1
                }),
                W(a, { class: "col-sm-10" }, {
                  default: h(() => [
                    W(z, {
                      modelValue: e(D).name,
                      "onUpdate:modelValue": n[0] || (n[0] = (U) => e(D).name = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Sy,
            W(d, null, {
              default: h(() => [
                W(a, { class: "col-sm-2" }, {
                  default: h(() => [
                    iy
                  ]),
                  _: 1
                }),
                W(a, { class: "col-sm-10" }, {
                  default: h(() => [
                    W(Y, {
                      modelValue: e(D).description,
                      "onUpdate:modelValue": n[1] || (n[1] = (U) => e(D).description = U)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ey,
            W(d, null, {
              default: h(() => [
                W(a, { class: "col-sm-2" }, {
                  default: h(() => [
                    Cy
                  ]),
                  _: 1
                }),
                W(a, { class: "col-sm-10" }, {
                  default: h(() => [
                    l("h6", null, P(e(D).state), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          l("div", null, [
            l("div", wy, [
              Ey,
              W(e(vN), {
                class: "dragArea list-group w-full",
                list: e(D).entityTemplateSettings.metadataForms
              }, {
                default: h(() => [
                  (T(!0), s(MM, null, eM(e(D).entityTemplateSettings.metadataForms, (U) => (T(), s("div", {
                    key: U.id.toString()
                  }, [
                    W(M4, {
                      model: U
                    }, null, 8, ["model"]),
                    l("span", null, " parent: " + P(U.id.toString), 1)
                  ]))), 128))
                ]),
                _: 1
              }, 8, ["list"]),
              l("button", {
                class: "btn btn-primary btn-blue",
                onClick: S
              }, "+ Add")
            ])
          ]),
          l("div", Ty, [
            xy,
            W(e(vN), {
              class: "dragArea list-group w-full",
              list: e(D).entityTemplateSettings.dataForms
            }, {
              default: h(() => [
                (T(!0), s(MM, null, eM(e(D).entityTemplateSettings.dataForms, (U) => (T(), s("div", {
                  key: U.id.toString()
                }, [
                  W(M4, {
                    model: U,
                    class: "form-field-border form-field red"
                  }, null, 8, ["model"])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"]),
            l("button", {
              class: "btn btn-warning btn-red",
              onClick: u
            }, "+ Add")
          ]),
          e(D).forms ? (T(), s("div", ay, [
            yy,
            l("div", ny, [
              oy,
              l("div", ly, [
                W(e(Mt), {
                  model: e(N),
                  "option-source": e(j),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            l("div", sy, [
              cy,
              l("div", zy, [
                W(e(Mt), {
                  model: e(L),
                  "option-source": e(j),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            l("div", Yy, [
              ry,
              l("div", dy, [
                W(e(Mt), {
                  model: e(t),
                  "option-source": e(j),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ])
          ])) : B("", !0)
        ])) : B("", !0),
        l("div", Uy, P(e(D)), 1)
      ], 64);
    };
  }
});
const Pt = /* @__PURE__ */ FM(my, [["__scopeId", "data-v-d4b68068"]]), Oy = (M, A) => M == null ? void 0 : M.data.find((I) => I.formId === A), nN = (M, A) => {
  var I;
  return (I = Oy(M, A == null ? void 0 : A.formId)) == null ? void 0 : I.fieldData.find((g) => g.fieldId === (A == null ? void 0 : A.fieldId));
}, It = (M, A) => {
  var I, g;
  return (g = (I = M == null ? void 0 : M.forms) == null ? void 0 : I.find((D) => (D == null ? void 0 : D.id) === A.formId)) == null ? void 0 : g.fields.find((D) => D.id === (A == null ? void 0 : A.fieldId));
}, hy = (M, A) => {
  A4(M, A.entityTemplateSettings.metadataForms, A.forms), A4(M, A.entityTemplateSettings.dataForms, A.forms);
}, A4 = (M, A, I) => {
  A.filter((g) => g.isRequired).forEach((g) => {
    if (M.data.filter((D) => D.formId == g.id).length == 0) {
      const D = I.filter((L) => L.id === g.id)[0], N = ai(D, "");
      N.id = jM.create().toString(), M.data.push(N);
    }
  });
}, by = (M, A, I) => {
  var g = A.entityTemplateSettings.titleField, D = M.data.filter((N) => N.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((N) => N.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return ii(D, I);
}, Wy = (M, A, I) => {
  var g = A.entityTemplateSettings.descriptionField, D = M.data.filter((N) => N.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((N) => N.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return ii(D, I);
}, GD = TI("EntityEditorStore", {
  state: () => ({
    id: null,
    templates: [],
    entityTemplate: null,
    entity: null,
    transientMessageModel: {},
    updatedFileKeys: [],
    entitySearchResult: null,
    storeId: jM.create().toString(),
    apiRoot: null
  }),
  actions: {
    loadTemplates() {
      const A = `${"https://" + this.getApiRoot.split("/")[2]}/api/entity-templates/`;
      fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.templates = I;
      }).catch((I) => {
        console.error("Load Templates API Error:", I);
      });
    },
    createNewEntity() {
      this.entity = {
        id: jM.createEmpty().toString(),
        templateId: jM.createEmpty().toString(),
        entityType: CL.Unknown,
        data: [],
        subjectRelationships: [],
        objectRelationships: [],
        files: [],
        created: new Date(),
        updated: new Date(),
        title: "",
        description: ""
      };
    },
    loadTemplate(M) {
      if (M.toString() === jM.EMPTY)
        return;
      const I = `${"https://" + this.getApiRoot.split("/")[2]}/api/entity-templates/${M}`;
      console.log(I), fetch(I, {
        method: "GET"
      }).then((g) => g.json()).then((g) => {
        this.entityTemplate = g;
      }).catch((g) => {
        console.error("Load Template API Error:", g);
      });
    },
    addFileReference(M, A) {
      var g;
      let I = "";
      (g = this.entity) == null || g.data.forEach((D) => {
        D.fieldData.forEach((N) => {
          var L, t;
          if (N.fieldId.toString() === A.toString()) {
            N.fileReferences || (N.fileReferences = []), I = this.entity.id + "_" + N.id + "_" + N.fieldId, (L = this.updatedFileKeys) == null || L.push(I);
            let j = I + "_" + M.name;
            (t = N.fileReferences) == null || t.push({
              id: jM.create(),
              fileName: j,
              originalFileName: M.name,
              thumbnail: "",
              contentType: M.type,
              size: M.size,
              created: new Date(),
              updated: new Date(),
              fieldId: A
            });
          }
        });
      });
    },
    saveEntity() {
      var j, S, u, i, C, w;
      const M = ((S = (j = this.entity) == null ? void 0 : j.id) == null ? void 0 : S.toString()) === jM.EMPTY;
      this.entity.title = by(this.entity, this.entityTemplate, " | "), this.entity.description = Wy(this.entity, this.entityTemplate, " | ");
      let A = this.getApiRoot, I = "";
      M ? (console.log("Saving new entity."), ((i = (u = this.entity) == null ? void 0 : u.id) == null ? void 0 : i.toString()) === jM.EMPTY && (this.entity.id = jM.create().toString()), I = "POST") : (console.log("Updating existing entity."), A = `${A}/${(C = this.entity) == null ? void 0 : C.id}`, I = "PUT");
      const g = oA();
      let D = g.files, N = g.fileKeys;
      var L = new FormData();
      let t = 0;
      D == null || D.forEach((E) => {
        this.addFileReference(E, jM.parse(N[t])), t++;
      }), L.append("value", JSON.stringify(this.entity)), D == null || D.forEach((E) => {
        L.append("files", E);
      }), (w = this.updatedFileKeys) == null || w.forEach((E) => {
        L.append("fileKeys", E);
      }), fetch(A, {
        body: L,
        method: I,
        headers: {
          encType: "multipart/form-data"
        }
      }).then((E) => {
        if (E.ok)
          this.transientMessageModel.message = "The entity saved successfully", this.transientMessageModel.messageClass = "success";
        else
          switch (M && this.entity && (this.entity.id = jM.EMPTY), this.transientMessageModel.messageClass = "danger", E.status) {
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
      }).catch((E) => {
        M && this.entity && (this.entity.id = jM.EMPTY), this.transientMessageModel.message = "Unknown error occurred", this.transientMessageModel.messageClass = "danger", console.error("Save/Update Entity API Error:", E);
      });
    },
    loadEntity(M) {
      const A = `${TA.dataRepositoryApiRoot}/api/entities/${M}`;
      fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.entity = I;
      }).catch((I) => {
        console.error("Load Entity API Error:", I);
      });
    },
    loadEntities(M, A, I, g, D) {
      let N = TA.dataRepositoryApiRoot + "/api/entities/" + M + "/" + A + "/" + I + "/" + g + "/" + D;
      fetch(N, {
        method: "GET"
      }).then((L) => L.json()).then((L) => {
        this.entitySearchResult = L;
      }).catch((L) => {
        console.error("Load Entities API Error:", L);
      });
    },
    AddToRelationObject() {
      console.log("add to relation object");
      let M = this.getSelectedEntityIds;
      console.log("selectedIds" + JSON.stringify(M)), M.forEach((A) => {
        var I;
        (I = this.entity) == null || I.subjectRelationships.push({
          subjectEntityId: A,
          subjectEntity: this.entity,
          objectEntityId: A,
          objectEntity: this.entity,
          name: "unlnown",
          order: 1
        });
      }), console.log("after adding: " + JSON.stringify(this.entity));
    },
    setApiRoot(M) {
      this.apiRoot = M;
    }
  },
  getters: {
    titleField: (M) => {
      var g, D, N, L, t;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.titleField;
      return (t = (L = (N = M.entityTemplate) == null ? void 0 : N.forms) == null ? void 0 : L.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : t.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    descriptionField: (M) => {
      var g, D, N, L, t;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.descriptionField;
      return (t = (L = (N = M.entityTemplate) == null ? void 0 : N.forms) == null ? void 0 : L.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : t.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    mediaField: (M) => {
      var g, D, N, L, t;
      const A = (D = (g = M == null ? void 0 : M.entityTemplate) == null ? void 0 : g.entityTemplateSettings) == null ? void 0 : D.mediaField;
      return (t = (L = (N = M.entityTemplate) == null ? void 0 : N.forms) == null ? void 0 : L.filter((j) => j.id === (A == null ? void 0 : A.formId))[0]) == null ? void 0 : t.fields.filter((j) => j.id == (A == null ? void 0 : A.fieldId))[0];
    },
    getFiles: (M) => oA().files,
    getSelectedEntityIds: (M) => (console.log("entity editor store id: " + M.storeId), wL(M.storeId).selectedEntityIds),
    getApiRoot: (M) => M.apiRoot ? M.apiRoot : TA.dataRepositoryApiRoot + "/api/entities"
  }
}), ky = ["onUpdate:modelValue"], py = { class: "col-sm-2" }, Hi = /* @__PURE__ */ v({
  __name: "CustomOptions",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var L;
      return A.modelData ? A.modelData : (L = I.formData.fieldData) == null ? void 0 : L.find((t) => t.fieldId == A.model.id);
    }), D = (L) => {
      var t;
      console.log(L), (t = g.value.customOptionValues) == null || t.splice(L, 1);
    }, N = () => {
      g.value.customOptionValues || (g.value.customOptionValues = []), g.value.customOptionValues.push("");
    };
    return (L, t) => {
      const j = yM("font-awesome-icon");
      return T(), s(MM, null, [
        l("div", null, [
          (T(!0), s(MM, null, eM(e(g).customOptionValues, (S, u) => (T(), s("span", {
            class: "custom-option",
            key: u
          }, [
            VM(l("input", {
              type: "text",
              "onUpdate:modelValue": (i) => e(g).customOptionValues[u] = i
            }, null, 8, ky), [
              [bg, e(g).customOptionValues[u]]
            ]),
            W(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (i) => D(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ]))), 128))
        ]),
        l("div", py, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (S) => N()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), Qy = ["checked", "onChange"], vy = { key: 0 }, Gy = /* @__PURE__ */ v({
  __name: "Checkboxes",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var L;
      return A.modelData ? A.modelData : (L = I.formData.fieldData) == null ? void 0 : L.find((t) => t.fieldId == A.model.id);
    }), D = (L) => {
      var t;
      return (t = g.value.selectedOptionIds) == null ? void 0 : t.includes(L);
    }, N = (L, t) => {
      var j, S, u;
      return t ? (j = g.value.selectedOptionIds) == null ? void 0 : j.push(L) : (u = g.value.selectedOptionIds) == null ? void 0 : u.splice((S = g.value.selectedOptionIds) == null ? void 0 : S.indexOf(L), 1);
    };
    return (L, t) => (T(), s(MM, null, [
      (T(!0), s(MM, null, eM(M.model.options, (j) => (T(), s("div", {
        key: j.id,
        class: "option-field"
      }, [
        l("input", {
          type: "checkbox",
          checked: D(j.id),
          onChange: (S) => N(j.id, S.target.checked)
        }, null, 40, Qy),
        IM(" " + P(dg(j, e(I).lang)) + " ", 1),
        j.isExtendedInput ? (T(), s("span", vy)) : B("", !0)
      ]))), 128)),
      W(Hi, { model: M.model }, null, 8, ["model"])
    ], 64));
  }
}), fy = { class: "col-sm-8" }, Jy = { id: "dataOptions" }, Vy = { class: "col-sm-2" }, Zy = /* @__PURE__ */ v({
  __name: "DataList",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var t;
      return A.modelData ? A.modelData : (t = I.formData.fieldData) == null ? void 0 : t.find((j) => j.fieldId == A.model.id);
    }), D = (t) => {
      var S, u;
      const j = (u = (S = A.model) == null ? void 0 : S.options) == null ? void 0 : u.filter((i) => i.id === t).at(0);
      return j ? dg(j, I.lang) : "";
    }, N = (t) => {
      var S, u;
      const j = (u = (S = A.model) == null ? void 0 : S.options) == null ? void 0 : u.filter((i) => dg(i, I.lang) === t).at(0);
      return j == null ? void 0 : j.id;
    }, L = y({
      get: () => {
        var t, j;
        return D((j = (t = g == null ? void 0 : g.value) == null ? void 0 : t.selectedOptionIds) == null ? void 0 : j.at(0));
      },
      set: (t) => {
        const j = N(t);
        j ? g.value.selectedOptionIds = [j] : g.value.selectedOptionIds = [];
      }
    });
    return (t, j) => {
      const S = yM("b-form-input");
      return T(), s(MM, null, [
        l("div", fy, [
          W(S, {
            list: "dataOptions",
            id: "model.id",
            name: "model.id",
            modelValue: e(L),
            "onUpdate:modelValue": j[0] || (j[0] = (u) => EA(L) ? L.value = u : null)
          }, null, 8, ["modelValue"]),
          l("datalist", Jy, [
            (T(!0), s(MM, null, eM(M.model.options, (u) => (T(), s("option", {
              key: u.id
            }, P(dg(u, e(I).lang)), 1))), 128))
          ])
        ]),
        l("div", Vy, [
          W(Hi, { model: M.model }, null, 8, ["model"])
        ])
      ], 64);
    };
  }
}), By = { class: "col-sm-3" }, Py = ["value"], Fy = /* @__PURE__ */ v({
  __name: "DropDown",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = y({
      get: () => {
        var N;
        return ((N = g == null ? void 0 : g.value) == null ? void 0 : N.selectedOptionIds) && g.value.selectedOptionIds.length > 0 ? g.value.selectedOptionIds[0] : jM.EMPTY;
      },
      set: (N) => g.value.selectedOptionIds = [N]
    });
    return (N, L) => (T(), s("div", By, [
      VM(l("select", {
        "onUpdate:modelValue": L[0] || (L[0] = (t) => EA(D) ? D.value = t : null),
        class: "form-select"
      }, [
        (T(!0), s(MM, null, eM(M.model.options, (t) => (T(), s("option", {
          key: t.id,
          value: t.id
        }, P(dg(t, e(I).lang)), 9, Py))), 128))
      ], 512), [
        [Wg, e(D)]
      ])
    ]));
  }
}), Xy = ["value"], Ry = /* @__PURE__ */ v({
  __name: "RadioButtons",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var N;
      return A.modelData ? A.modelData : (N = I.formData.fieldData) == null ? void 0 : N.find((L) => L.fieldId == A.model.id);
    }), D = y({
      get: () => {
        var N;
        return ((N = g == null ? void 0 : g.value) == null ? void 0 : N.selectedOptionIds) && g.value.selectedOptionIds.length > 0 ? g.value.selectedOptionIds[0] : jM.EMPTY;
      },
      set: (N) => g.value.selectedOptionIds = [N]
    });
    return (N, L) => (T(!0), s(MM, null, eM(M.model.options, (t) => (T(), s("div", {
      key: t.id,
      class: "option-field"
    }, [
      VM(l("input", {
        type: "radio",
        name: "model.id",
        value: t.id,
        "onUpdate:modelValue": L[0] || (L[0] = (j) => EA(D) ? D.value = j : null)
      }, null, 8, Xy), [
        [Li, e(D)]
      ]),
      IM(" " + P(dg(t, e(I).lang)), 1)
    ]))), 128));
  }
}), Hy = { key: 0 }, _y = { key: 1 }, $y = { key: 2 }, qy = { key: 3 }, Ky = { key: 4 }, Mn = { key: 5 }, An = { key: 6 }, In = { key: 7 }, _i = /* @__PURE__ */ v({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    decimalPoints: null
  },
  setup(M) {
    const A = M, I = A.decimalPoints ? A.decimalPoints : 2;
    return (g, D) => {
      const N = yM("b-form-input"), L = yM("b-form-textarea");
      return T(), s(MM, null, [
        M.textType === e(rM).ShortAnswer ? (T(), s("div", Hy, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[0] || (D[0] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : M.textType === e(rM).Paragraph ? (T(), s("div", _y, [
          W(L, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[1] || (D[1] = (t) => M.model.value = t),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : M.textType === e(rM).RichText ? (T(), s("div", $y, [
          W(L, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[2] || (D[2] = (t) => M.model.value = t),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Email ? (T(), s("div", qy, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[3] || (D[3] = (t) => M.model.value = t),
            type: "email"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Integer ? (T(), s("div", Ky, [
          W(N, {
            type: "number",
            step: "1",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[4] || (D[4] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Decimal ? (T(), s("div", Mn, [
          W(N, {
            type: "number",
            step: Math.pow(10, -e(I)),
            modelValue: M.model.value,
            "onUpdate:modelValue": D[5] || (D[5] = (t) => M.model.value = t)
          }, null, 8, ["step", "modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Date ? (T(), s("div", An, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[6] || (D[6] = (t) => M.model.value = t),
            type: "date"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).DateTime ? (T(), s("div", In, [
          W(N, {
            type: "datetime-local",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[7] || (D[7] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : B("", !0)
      ], 64);
    };
  }
}), gn = /* @__PURE__ */ v({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(M) {
    return (A, I) => (T(!0), s(MM, null, eM(M.model.values, (g) => (T(), Z(_i, {
      key: g.id,
      model: g,
      "text-type": M.textType
    }, null, 8, ["model", "text-type"]))), 128));
  }
}), Dn = ["model"], Nn = { class: "col col-sm-11" }, Ln = { class: "col col-sm-1" }, tn = { key: 0 }, jn = /* @__PURE__ */ v({
  __name: "MultilingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var L;
      return A.modelData ? A.modelData : (L = I.formData.fieldData) == null ? void 0 : L.find((t) => t.fieldId == A.model.id);
    }), D = () => {
      var L;
      return (L = g.value.multilingualTextValues) == null ? void 0 : L.push(kg(I.lang));
    }, N = (L) => {
      var t;
      console.log(L), (t = g.value.multilingualTextValues) == null || t.splice(L, 1);
    };
    return (L, t) => {
      var S;
      const j = yM("font-awesome-icon");
      return T(), s(MM, null, [
        (T(!0), s(MM, null, eM((S = e(g)) == null ? void 0 : S.multilingualTextValues, (u, i) => (T(), s("div", {
          key: u.id,
          model: u,
          class: "row mb-3"
        }, [
          l("div", Nn, [
            W(gn, {
              model: u,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          l("div", Ln, [
            e(g).multilingualTextValues.length > 1 ? (T(), s("div", tn, [
              W(j, {
                icon: "fa-solid fa-circle-xmark",
                onClick: (C) => N(i),
                class: "fa-icon delete"
              }, null, 8, ["onClick"])
            ])) : B("", !0)
          ])
        ], 8, Dn))), 128)),
        l("div", null, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (u) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), un = ["model"], Sn = { class: "col col-sm-11" }, en = {
  key: 0,
  class: "col-sm-1"
}, Cn = { class: "col-sm-1" }, wn = /* @__PURE__ */ v({
  __name: "MonolingualTextInput",
  props: {
    model: null,
    modelData: null
  },
  setup(M) {
    const A = M, I = oA(), g = y(() => {
      var L;
      return A.modelData ? A.modelData : (L = I.formData.fieldData) == null ? void 0 : L.find((t) => t.fieldId == A.model.id);
    }), D = () => {
      var L;
      return (L = g.value.monolingualTextValues) == null ? void 0 : L.push(Si(null));
    }, N = (L) => {
      var t;
      (t = g.value.monolingualTextValues) == null || t.splice(L, 1);
    };
    return (L, t) => {
      const j = yM("font-awesome-icon");
      return T(), s(MM, null, [
        (T(!0), s(MM, null, eM(e(g).monolingualTextValues, (S, u) => (T(), s("div", {
          key: S.id,
          model: S,
          class: "row mb-3"
        }, [
          l("div", Sn, [
            W(_i, {
              model: S,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          e(g).monolingualTextValues.length > 1 ? (T(), s("div", en, [
            W(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (i) => N(u),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ])) : B("", !0)
        ], 8, un))), 128)),
        l("div", Cn, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (S) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), En = /* @__PURE__ */ l("br", null, null, -1), Tn = ["innerHTML"], xn = /* @__PURE__ */ v({
  __name: "InfoSection",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = oA(), g = xi(A.model, I.lang);
    return (D, N) => (T(), s("div", null, [
      En,
      l("div", {
        innerHTML: e(g),
        class: "alert alert-info"
      }, null, 8, Tn)
    ]));
  }
}), an = {
  key: 0,
  class: "alert alert-info"
}, yn = { class: "text-field-label" }, nn = ["data-hover"], on = { key: 7 }, ln = { class: "dropzoneFiles" }, sn = /* @__PURE__ */ l("br", null, null, -1), oN = /* @__PURE__ */ v({
  __name: "Field",
  props: {
    model: null,
    modelData: null,
    formId: null
  },
  setup(M) {
    const A = M, I = oA(), g = Ti(A.model, I.lang), D = xi(A.model, I.lang), N = Ci(A.model), L = wi(A.model), t = A.model.type === rM.AttachmentField, j = DM(""), S = A.model.id.toString(), u = y(() => A.formId), i = (w) => {
      j.value = w.dataTransfer.files[0], I.attachFile(w.dataTransfer.files, A.model.id, A.formId);
    }, C = (w) => {
      j.value = document.getElementById(w).files[0];
      const E = document.getElementById(w);
      I.attachFile(E == null ? void 0 : E.files, A.model.id, u.value);
    };
    return (w, E) => {
      const x = yM("font-awesome-icon"), n = yM("b-col"), a = yM("b-row"), z = yM("b-container");
      return T(), Z(z, null, {
        default: h(() => [
          W(a, null, {
            default: h(() => [
              M.model.type === e(rM).InfoSection ? (T(), s("div", an, [
                l("h3", yn, P(e(g)), 1)
              ])) : (T(), Z(n, {
                key: 1,
                class: "col-sm-2"
              }, {
                default: h(() => [
                  IM(P(e(g)) + " ", 1),
                  e(D) ? (T(), s("span", {
                    key: 0,
                    class: "hovertext",
                    "data-hover": e(D)
                  }, [
                    W(x, {
                      icon: "fas fa-question-circle",
                      class: "fas fa-question-circle"
                    })
                  ], 8, nn)) : B("", !0),
                  IM(" : ")
                ]),
                _: 1
              })),
              W(n, { class: "col-sm-10" }, {
                default: h(() => [
                  M.model.type === e(rM).Checkboxes ? (T(), Z(Gy, {
                    key: 0,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).DataList ? (T(), Z(Zy, {
                    key: 1,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).DropDown ? (T(), Z(Fy, {
                    key: 2,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).RadioButtons ? (T(), Z(Ry, {
                    key: 3,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  e(N) ? (T(), Z(jn, {
                    key: 4,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  e(L) ? (T(), Z(wn, {
                    key: 5,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).InfoSection ? (T(), Z(xn, {
                    key: 6,
                    model: M.model
                  }, null, 8, ["model"])) : B("", !0),
                  e(t) ? (T(), s("div", on, [
                    W(ei, {
                      model: M.model,
                      elementId: e(S),
                      onDrop: i,
                      onChange: E[0] || (E[0] = (d) => C(e(S)))
                    }, null, 8, ["model", "elementId"]),
                    l("span", ln, "Selected File: " + P(j.value.name), 1)
                  ])) : B("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          sn
        ]),
        _: 1
      });
    };
  }
}), cn = { class: "pt-2 mt-2" }, zn = { class: "row" }, Yn = { class: "col-sm-7" }, rn = { class: "row mt-2" }, dn = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("label", null, "EntityType:")
], -1), Un = { class: "col-sm-10" }, mn = ["value"], On = { key: 1 }, hn = { class: "row mt-2" }, bn = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("label", null, "Template:")
], -1), Wn = { class: "col-sm-10" }, kn = ["value"], pn = { key: 1 }, Qn = { class: "row mt-2" }, vn = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("label", null, "Entity Title:")
], -1), Gn = { class: "col-sm-10" }, fn = { class: "row mt-2" }, Jn = /* @__PURE__ */ l("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ l("label", null, "Entity Description:")
], -1), Vn = { class: "col-sm-10" }, Zn = /* @__PURE__ */ l("br", null, null, -1), Bn = /* @__PURE__ */ l("h5", null, "Form Fields", -1), Pn = { key: 3 }, Fn = { class: "col-sm-5" }, Xn = /* @__PURE__ */ l("legend", null, " Right side ", -1), Rn = { class: "col-sm-8" }, Hn = /* @__PURE__ */ l("div", { class: "col-sm-4" }, [
  /* @__PURE__ */ l("img", { src: "#" })
], -1), _n = /* @__PURE__ */ v({
  __name: "entity-summary-editor",
  setup(M) {
    var w;
    const A = GD(), { entity: I } = nj(A);
    mM(() => {
      var E;
      return (E = I.value) == null ? void 0 : E.templateId;
    }, async (E) => {
      A.loadTemplate(E);
    }), A.loadTemplate((w = I.value) == null ? void 0 : w.templateId);
    const g = y(() => A.entity.id.toString() === jM.EMPTY), D = y(() => A.templates), N = y(() => A.entityTemplate), L = Object.values(CL), t = y(() => {
      var E;
      return It(N.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.titleField);
    }), j = y(() => {
      var E;
      return nN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.titleField);
    }), S = y(() => {
      var E;
      return It(N.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.descriptionField);
    }), u = y(() => {
      var E;
      return nN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.descriptionField);
    }), i = y(() => {
      var E;
      return It(N.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.mediaField);
    }), C = y(() => {
      var E;
      return nN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.mediaField);
    });
    return mM(() => N.value, async (E) => {
      hy(I.value, E);
    }), (E, x) => {
      var n, a, z, d, Y, U, k, G, r, b, V, R, AM, LM, gM, oM, SM, tM;
      return T(), s("div", cn, [
        l("div", zn, [
          l("fieldset", Yn, [
            l("div", rn, [
              dn,
              l("div", Un, [
                e(g) ? VM((T(), s("select", {
                  key: 0,
                  "onUpdate:modelValue": x[0] || (x[0] = (CM) => e(I).entityType = CM),
                  class: "form-select"
                }, [
                  (T(!0), s(MM, null, eM(e(L), (CM) => (T(), s("option", {
                    key: CM,
                    value: CM
                  }, P(CM), 9, mn))), 128))
                ], 512)), [
                  [Wg, e(I).entityType]
                ]) : (T(), s("span", On, P((n = e(I)) == null ? void 0 : n.entityType), 1))
              ])
            ]),
            l("div", hn, [
              bn,
              l("div", Wn, [
                e(g) ? VM((T(), s("select", {
                  key: 0,
                  "onUpdate:modelValue": x[1] || (x[1] = (CM) => e(I).templateId = CM),
                  class: "form-select"
                }, [
                  (T(!0), s(MM, null, eM(e(D), (CM) => {
                    var dM;
                    return T(), s("option", {
                      key: CM.id.toString(),
                      value: (dM = CM.id) == null ? void 0 : dM.toString()
                    }, P(CM.name), 9, kn);
                  }), 128))
                ], 512)), [
                  [Wg, e(I).templateId]
                ]) : (T(), s("span", pn, P((a = e(N)) == null ? void 0 : a.name), 1))
              ])
            ]),
            l("div", Qn, [
              vn,
              l("div", Gn, [
                VM(l("input", {
                  type: "text",
                  "onUpdate:modelValue": x[2] || (x[2] = (CM) => e(I).title = CM),
                  class: "form-control"
                }, null, 512), [
                  [bg, e(I).title]
                ])
              ])
            ]),
            l("div", fn, [
              Jn,
              l("div", Vn, [
                VM(l("input", {
                  type: "text",
                  "onUpdate:modelValue": x[3] || (x[3] = (CM) => e(I).description = CM),
                  class: "form-control"
                }, null, 512), [
                  [bg, e(I).description]
                ])
              ])
            ]),
            Zn,
            Bn,
            e(A).titleField ? (T(), Z(oN, {
              key: 0,
              model: e(t),
              "model-data": e(j)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).descriptionField ? (T(), Z(oN, {
              key: 1,
              model: e(S),
              "model-data": e(u)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).mediaField ? (T(), Z(oN, {
              key: 2,
              model: e(i),
              "model-data": e(C)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).mediaField && ((d = (z = e(C)) == null ? void 0 : z.fileReferences) == null ? void 0 : d.length) > 0 ? (T(), s("div", Pn, [
              (T(!0), s(MM, null, eM((Y = e(C)) == null ? void 0 : Y.fileReferences, (CM) => (T(), s("div", {
                key: CM.id
              }, [
                l("div", null, P(CM.originalFileName), 1)
              ]))), 128))
            ])) : B("", !0)
          ]),
          l("fieldset", Fn, [
            Xn,
            l("div", Rn, [
              l("div", null, P((G = (k = (U = e(t)) == null ? void 0 : U.title) == null ? void 0 : k.values[0]) == null ? void 0 : G.value) + ": " + P((V = (b = (r = e(j)) == null ? void 0 : r.multilingualTextValues[0]) == null ? void 0 : b.values[0]) == null ? void 0 : V.value), 1),
              l("div", null, P((LM = (AM = (R = e(S)) == null ? void 0 : R.title) == null ? void 0 : AM.values[0]) == null ? void 0 : LM.value) + ": " + P((oM = (gM = e(u)) == null ? void 0 : gM.multilingualTextValues[0]) == null ? void 0 : oM.values[0].value), 1),
              l("div", null, P((tM = (SM = e(C)) == null ? void 0 : SM.fileReferences[0]) == null ? void 0 : tM.originalFileName), 1)
            ]),
            Hn
          ])
        ])
      ]);
    };
  }
}), $n = /* @__PURE__ */ v({
  __name: "Form",
  props: {
    model: null,
    entity: null
  },
  setup(M) {
    const A = M, I = (g) => nN(A.entity, { formId: A.model.id, fieldId: g });
    return (g, D) => {
      var N;
      return T(!0), s(MM, null, eM((N = M.model) == null ? void 0 : N.fields, (L) => (T(), Z(oN, {
        key: L.id,
        model: L,
        modelData: I(L.id)
      }, null, 8, ["model", "modelData"]))), 128);
    };
  }
}), qn = { key: 0 }, Kn = ["onClick"], I4 = /* @__PURE__ */ v({
  __name: "FormList",
  props: {
    formEntries: null,
    entity: null
  },
  setup(M) {
    var N;
    const A = M, I = GD(), g = DM((N = A.formEntries[0]) == null ? void 0 : N.id.toString()), D = y(() => {
      var L, t;
      return (t = (L = I.entityTemplate) == null ? void 0 : L.forms) == null ? void 0 : t.find((j) => j.id.toString() === g.value);
    });
    return (L, t) => M.formEntries ? (T(), s("div", qn, [
      (T(!0), s(MM, null, eM(M.formEntries, (j) => (T(), s("span", {
        key: j.id.toString()
      }, [
        l("a", {
          href: "#",
          onClick: (S) => g.value = j.id
        }, P(j.name) + " | ", 9, Kn)
      ]))), 128)),
      e(D) ? (T(), Z($n, {
        key: 0,
        model: e(D),
        entity: M.entity
      }, null, 8, ["model", "entity"])) : B("", !0)
    ])) : B("", !0);
  }
}), Mo = { class: "form-field-border" }, Ao = { key: 0 }, Io = { class: "form-field-border" }, g4 = /* @__PURE__ */ v({
  __name: "EntityAssociationPanel",
  props: {
    entity: null,
    relationshipType: null,
    panelTitle: null
  },
  setup(M) {
    const A = M, I = GD(), { entity: g, storeId: D } = nj(I);
    y(() => {
      var L;
      return (L = A.entity) == null ? void 0 : L.subjectRelationships.filter((t) => t.name == A.relationshipType);
    });
    const N = () => {
      I.AddToRelationObject();
    };
    return (L, t) => {
      const j = yM("b-col"), S = yM("b-row"), u = yM("font-awesome-icon");
      return T(), s(MM, null, [
        W(S, null, {
          default: h(() => [
            W(j, { class: "col-sm-5" }, {
              default: h(() => [
                l("h6", null, P(M.relationshipType), 1)
              ]),
              _: 1
            }),
            W(j, { class: "col-sm-2" }),
            W(j, { class: "col-sm-5" }, {
              default: h(() => [
                l("h6", null, P(M.panelTitle), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        W(S, null, {
          default: h(() => [
            W(j, { class: "col-sm-5" }, {
              default: h(() => [
                l("div", Mo, [
                  e(g).subjectRelationships ? (T(), s("div", Ao, [
                    (T(!0), s(MM, null, eM(e(g).subjectRelationships, (i) => (T(), s("div", {
                      key: i.subjectEntityId
                    }, P(i.subjectEntityId), 1))), 128))
                  ])) : B("", !0)
                ])
              ]),
              _: 1
            }),
            W(j, { class: "col-sm-2" }, {
              default: h(() => [
                W(S, null, {
                  default: h(() => [
                    W(j, { class: "col-sm-4" }),
                    W(j, { class: "col-sm-4" }, {
                      default: h(() => [
                        l("button", {
                          class: "btn btn-primary",
                          onClick: N
                        }, [
                          W(u, { icon: "fa-solid fa-arrow-left" })
                        ])
                      ]),
                      _: 1
                    }),
                    W(j, { class: "col-sm-4" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            W(j, { class: "col-sm-5" }, {
              default: h(() => [
                l("div", Io, [
                  W(e(gy), {
                    storeId: e(D).toString(),
                    entityType: e(CL).Item
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
}), go = (M) => (WI("data-v-8a88581d"), M = M(), kI(), M), Do = /* @__PURE__ */ go(() => /* @__PURE__ */ l("h3", null, "Entity Editor", -1)), No = { class: "control" }, Lo = { class: "form-field-border" }, to = { key: 1 }, jo = { key: 2 }, uo = { key: 3 }, So = { key: 4 }, io = { key: 5 }, eo = /* @__PURE__ */ v({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = DM("Member of"), g = DM("Collections"), D = DM("Relationship"), N = DM("Items"), L = GD();
    A.apiRoot && (console.log("api root from props: " + A.apiRoot), L.setApiRoot(A.apiRoot));
    const t = y(() => L.entityTemplate);
    let j = DM("summary");
    const u = eL().params.id;
    _M(() => {
      L.loadTemplates();
    }), y(() => L.templates);
    const i = () => {
      L.createNewEntity();
    };
    let C = DM(!0);
    u && (L.loadEntity(u), C.value = !1);
    const w = y(() => L.entity), E = y(() => {
      var z;
      return (z = L.entityTemplate) == null ? void 0 : z.entityTemplateSettings.metadataForms;
    }), x = y(() => {
      var z;
      return (z = L.entityTemplate) == null ? void 0 : z.entityTemplateSettings.dataForms;
    }), n = () => {
      L.saveEntity(), C.value = !1;
    }, a = y(() => L.getFiles);
    return (z, d) => {
      const Y = yM("b-col"), U = yM("b-row");
      return T(), s(MM, null, [
        Do,
        W(cj, {
          model: e(L).transientMessageModel
        }, null, 8, ["model"]),
        l("div", No, [
          e(C) ? (T(), s("button", {
            key: 0,
            onClick: d[0] || (d[0] = (k) => i())
          }, "New Entity")) : B("", !0),
          l("button", {
            class: "btn btn-success",
            onClick: d[1] || (d[1] = (k) => n())
          }, "Save")
        ]),
        l("div", Lo, [
          e(t) ? (T(), Z(U, { key: 0 }, {
            default: h(() => [
              W(Y, {
                class: "btn-group",
                role: "group",
                id: "toolBtns"
              }, {
                default: h(() => [
                  l("button", {
                    class: F(["pannel-buttons", { active: e(j) === "summary" }]),
                    onClick: d[2] || (d[2] = (k) => EA(j) ? j.value = "summary" : j = "summary")
                  }, "Summary", 2),
                  l("button", {
                    class: F(["pannel-buttons", { active: e(j) === "data" }]),
                    onClick: d[3] || (d[3] = (k) => EA(j) ? j.value = "data" : j = "data")
                  }, "Data", 2),
                  l("button", {
                    class: F(["pannel-buttons", { active: e(j) === "metadata" }]),
                    onClick: d[4] || (d[4] = (k) => EA(j) ? j.value = "metadata" : j = "metadata")
                  }, "Metadata", 2),
                  l("button", {
                    class: F(["pannel-buttons", { active: e(j) === "collections" }]),
                    onClick: d[5] || (d[5] = (k) => EA(j) ? j.value = "collections" : j = "collections")
                  }, "Collection(s)", 2),
                  l("button", {
                    class: F(["pannel-buttons", { active: e(j) === "related" }]),
                    onClick: d[6] || (d[6] = (k) => EA(j) ? j.value = "related" : j = "related")
                  }, "Related", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : B("", !0),
          e(j) === "summary" ? (T(), s("div", to, [
            e(w) !== null ? (T(), Z(_n, { key: 0 })) : B("", !0),
            IM("Summary ")
          ])) : B("", !0),
          e(j) === "data" ? (T(), s("div", jo, [
            W(I4, {
              "form-entries": e(x),
              entity: e(w)
            }, null, 8, ["form-entries", "entity"])
          ])) : B("", !0),
          e(j) === "metadata" ? (T(), s("div", uo, [
            W(I4, {
              "form-entries": e(E),
              entity: e(w)
            }, null, 8, ["form-entries", "entity"])
          ])) : B("", !0),
          e(j) === "collections" ? (T(), s("div", So, [
            W(g4, {
              entity: e(w),
              relationshipType: I.value,
              panelTitle: g.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : B("", !0),
          e(j) === "related" ? (T(), s("div", io, [
            W(g4, {
              entity: e(w),
              relationshipType: D.value,
              panelTitle: N.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : B("", !0)
        ]),
        (T(!0), s(MM, null, eM(e(a), (k) => (T(), s("div", {
          key: k.name
        }, P(k.name), 1))), 128))
      ], 64);
    };
  }
});
const UD = /* @__PURE__ */ FM(eo, [["__scopeId", "data-v-8a88581d"]]), kW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormModels: zE,
  FormBuilder: Zt,
  useFormBuilderStore: pD,
  FormSubmission: Ea,
  useFormSubmissionStore: oA,
  Login: ya,
  useLoginStore: Bi,
  WorkflowBuilder: Wa,
  useWorkflowBuilderStore: Pi,
  EntityTemplateBuilder: Pt,
  useEntityTemplateBuilderStore: mj,
  EntityEditor: UD,
  useEntityEditorStore: GD
}, Symbol.toStringTag, { value: "Module" })), Co = [
  {
    path: "/",
    name: "List",
    component: () => import("./List.ddf6ef47.js")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("./Create.dcd38a8a.js")
  },
  {
    path: "/read/:id",
    name: "Read",
    component: () => import("./Read.ca957c2a.js")
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./Update.b543984d.js")
  },
  {
    path: "/delete/:id",
    name: "Delete",
    component: () => import("./Delete.7186b4bb.js")
  }
], EL = fx({
  history: Ix(),
  routes: Co
}), wo = TI("CRUDManagerStore", {
  state: () => ({
    entries: {}
  }),
  actions: {
    loadEntries(M) {
      const A = `${M}`;
      fetch(A, {
        method: "GET"
      }).then((I) => I.json()).then((I) => {
        this.entries = I;
      }).catch((I) => {
        console.error("Listing entities API Error:", I);
      });
    }
  }
}), Eo = { class: "m-2" }, To = { class: "header" }, TL = /* @__PURE__ */ v({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = wo(), g = y(() => A.apiRoot);
    return _M(() => {
      I.loadEntries(g == null ? void 0 : g.value);
    }), (D, N) => {
      const L = yM("router-link"), t = yM("router-view");
      return T(), s("div", Eo, [
        l("div", To, [
          W(L, {
            to: "/",
            class: "navigation-menu-box"
          }, {
            default: h(() => [
              IM("List")
            ]),
            _: 1
          }),
          IM(" | "),
          W(L, {
            to: "/create",
            class: "navigation-menu-box"
          }, {
            default: h(() => [
              IM("Create")
            ]),
            _: 1
          }),
          IM(" | "),
          W(L, {
            to: "/read/381449d3-9e3d-412a-9630-ea4cb6f35d8b",
            class: "navigation-menu-box"
          }, {
            default: h(() => [
              IM("Read")
            ]),
            _: 1
          }),
          IM(" | "),
          W(L, {
            to: "/update/381449d3-9e3d-412a-9630-ea4cb6f35d8b",
            class: "navigation-menu-box"
          }, {
            default: h(() => [
              IM("Update")
            ]),
            _: 1
          }),
          IM(" | "),
          W(L, {
            to: "/delete/381449d3-9e3d-412a-9630-ea4cb6f35d8b",
            class: "navigation-menu-box"
          }, {
            default: h(() => [
              IM("Delete")
            ]),
            _: 1
          })
        ]),
        W(t, null, {
          default: h(({ Component: j, route: S }) => [
            (T(), Z(EM(j), null, {
              "object-type": h(() => [
                Q(D.$slots, "object-type")
              ]),
              "list-entry-delegate": h(() => [
                Q(D.$slots, "list-entry-delegate")
              ]),
              "create-delegate": h(() => [
                Q(D.$slots, "create-delegate")
              ]),
              "read-delegate": h(() => [
                Q(D.$slots, "read-delegate")
              ]),
              "update-delegate": h(() => [
                Q(D.$slots, "update-delegate")
              ]),
              "delete-delegate": h(() => [
                Q(D.$slots, "delete-delegate")
              ]),
              _: 2
            }, 1024))
          ]),
          _: 3
        }),
        l("div", null, "API Root: " + P(M.apiRoot), 1)
      ]);
    };
  }
}), xo = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/collections");
    return (g, D) => (T(), Z(TL, { "api-root": e(I) }, {
      "object-type": h(() => [
        IM("Collection")
      ]),
      "create-delegate": h(() => [
        W(e(UD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": h(() => [
        IM("ReadCollectionComponent")
      ]),
      "update-delegate": h(() => [
        W(e(UD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": h(() => [
        IM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), ao = tL(), yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: ao,
  router: EL,
  App: xo
}, Symbol.toStringTag, { value: "Module" })), no = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/items");
    return (g, D) => (T(), Z(TL, { "api-root": e(I) }, {
      "object-type": h(() => [
        IM("Item")
      ]),
      "create-delegate": h(() => [
        W(e(UD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": h(() => [
        IM("ReadItemComponent")
      ]),
      "update-delegate": h(() => [
        W(e(UD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": h(() => [
        IM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), oo = tL(), lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: oo,
  router: EL,
  App: no
}, Symbol.toStringTag, { value: "Module" })), so = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/entity-templates"), D = eL().params.id;
    return (N, L) => (T(), Z(TL, { "api-root": e(I) }, {
      "object-type": h(() => [
        IM("Entity Template")
      ]),
      "create-delegate": h(() => [
        W(e(Pt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": h(() => [
        IM("ReadEntityTemplateComponent")
      ]),
      "update-delegate": h(() => [
        W(e(Pt), {
          "api-root": e(I),
          "template-id": e(D)
        }, null, 8, ["api-root", "template-id"])
      ]),
      "delete-delegate": h(() => [
        IM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), co = tL(), zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: co,
  router: EL,
  App: so
}, Symbol.toStringTag, { value: "Module" })), Yo = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/forms");
    return (g, D) => (T(), Z(TL, { "api-root": e(I) }, {
      "object-type": h(() => [
        IM("Form Template")
      ]),
      "create-delegate": h(() => [
        W(e(Zt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": h(() => [
        IM("ReadFormComponent")
      ]),
      "update-delegate": h(() => [
        W(e(Zt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": h(() => [
        IM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), ro = tL(), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: ro,
  router: EL,
  App: Yo
}, Symbol.toStringTag, { value: "Module" }));
var Ft = function(M, A) {
  return Ft = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, g) {
    I.__proto__ = g;
  } || function(I, g) {
    for (var D in g)
      Object.prototype.hasOwnProperty.call(g, D) && (I[D] = g[D]);
  }, Ft(M, A);
};
function TM(M, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Ft(M, A);
  function I() {
    this.constructor = M;
  }
  M.prototype = A === null ? Object.create(A) : (I.prototype = A.prototype, new I());
}
var m = function() {
  return m = Object.assign || function(A) {
    for (var I, g = 1, D = arguments.length; g < D; g++) {
      I = arguments[g];
      for (var N in I)
        Object.prototype.hasOwnProperty.call(I, N) && (A[N] = I[N]);
    }
    return A;
  }, m.apply(this, arguments);
};
function HM(M, A, I) {
  if (I || arguments.length === 2)
    for (var g = 0, D = A.length, N; g < D; g++)
      (N || !(g in A)) && (N || (N = Array.prototype.slice.call(A, 0, g)), N[g] = A[g]);
  return M.concat(N || Array.prototype.slice.call(A));
}
var xL, uM, $i, nD, D4, qi, fN = {}, Ki = [], mo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function rI(M, A) {
  for (var I in A)
    M[I] = A[I];
  return M;
}
function Me(M) {
  var A = M.parentNode;
  A && A.removeChild(M);
}
function OI(M, A, I) {
  var g, D, N, L = {};
  for (N in A)
    N == "key" ? g = A[N] : N == "ref" ? D = A[N] : L[N] = A[N];
  if (arguments.length > 2 && (L.children = arguments.length > 3 ? xL.call(arguments, 2) : I), typeof M == "function" && M.defaultProps != null)
    for (N in M.defaultProps)
      L[N] === void 0 && (L[N] = M.defaultProps[N]);
  return lN(M, L, g, D, null);
}
function lN(M, A, I, g, D) {
  var N = { type: M, props: A, key: I, ref: g, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: D == null ? ++$i : D };
  return D == null && uM.vnode != null && uM.vnode(N), N;
}
function Oo() {
  return { current: null };
}
function Mg(M) {
  return M.children;
}
function vA(M, A) {
  this.props = M, this.context = A;
}
function mD(M, A) {
  if (A == null)
    return M.__ ? mD(M.__, M.__.__k.indexOf(M) + 1) : null;
  for (var I; A < M.__k.length; A++)
    if ((I = M.__k[A]) != null && I.__e != null)
      return I.__e;
  return typeof M.type == "function" ? mD(M) : null;
}
function Ae(M) {
  var A, I;
  if ((M = M.__) != null && M.__c != null) {
    for (M.__e = M.__c.base = null, A = 0; A < M.__k.length; A++)
      if ((I = M.__k[A]) != null && I.__e != null) {
        M.__e = M.__c.base = I.__e;
        break;
      }
    return Ae(M);
  }
}
function Xt(M) {
  (!M.__d && (M.__d = !0) && nD.push(M) && !JN.__r++ || D4 !== uM.debounceRendering) && ((D4 = uM.debounceRendering) || setTimeout)(JN);
}
function JN() {
  for (var M; JN.__r = nD.length; )
    M = nD.sort(function(A, I) {
      return A.__v.__b - I.__v.__b;
    }), nD = [], M.some(function(A) {
      var I, g, D, N, L, t;
      A.__d && (L = (N = (I = A).__v).__e, (t = I.__P) && (g = [], (D = rI({}, N)).__v = N.__v + 1, Oj(t, N, D, I.__n, t.ownerSVGElement !== void 0, N.__h != null ? [L] : null, g, L == null ? mD(N) : L, N.__h), Ne(g, N), N.__e != L && Ae(N)));
    });
}
function Ie(M, A, I, g, D, N, L, t, j, S) {
  var u, i, C, w, E, x, n, a = g && g.__k || Ki, z = a.length;
  for (I.__k = [], u = 0; u < A.length; u++)
    if ((w = I.__k[u] = (w = A[u]) == null || typeof w == "boolean" ? null : typeof w == "string" || typeof w == "number" || typeof w == "bigint" ? lN(null, w, null, null, w) : Array.isArray(w) ? lN(Mg, { children: w }, null, null, null) : w.__b > 0 ? lN(w.type, w.props, w.key, w.ref ? w.ref : null, w.__v) : w) != null) {
      if (w.__ = I, w.__b = I.__b + 1, (C = a[u]) === null || C && w.key == C.key && w.type === C.type)
        a[u] = void 0;
      else
        for (i = 0; i < z; i++) {
          if ((C = a[i]) && w.key == C.key && w.type === C.type) {
            a[i] = void 0;
            break;
          }
          C = null;
        }
      Oj(M, w, C = C || fN, D, N, L, t, j, S), E = w.__e, (i = w.ref) && C.ref != i && (n || (n = []), C.ref && n.push(C.ref, null, w), n.push(i, w.__c || E, w)), E != null ? (x == null && (x = E), typeof w.type == "function" && w.__k === C.__k ? w.__d = j = ge(w, j, M) : j = De(M, w, C, a, E, j), typeof I.type == "function" && (I.__d = j)) : j && C.__e == j && j.parentNode != M && (j = mD(C));
    }
  for (I.__e = x, u = z; u--; )
    a[u] != null && te(a[u], a[u]);
  if (n)
    for (u = 0; u < n.length; u++)
      Le(n[u], n[++u], n[++u]);
}
function ge(M, A, I) {
  for (var g, D = M.__k, N = 0; D && N < D.length; N++)
    (g = D[N]) && (g.__ = M, A = typeof g.type == "function" ? ge(g, A, I) : De(I, g, g, D, g.__e, A));
  return A;
}
function VN(M, A) {
  return A = A || [], M == null || typeof M == "boolean" || (Array.isArray(M) ? M.some(function(I) {
    VN(I, A);
  }) : A.push(M)), A;
}
function De(M, A, I, g, D, N) {
  var L, t, j;
  if (A.__d !== void 0)
    L = A.__d, A.__d = void 0;
  else if (I == null || D != N || D.parentNode == null)
    M:
      if (N == null || N.parentNode !== M)
        M.appendChild(D), L = null;
      else {
        for (t = N, j = 0; (t = t.nextSibling) && j < g.length; j += 2)
          if (t == D)
            break M;
        M.insertBefore(D, N), L = N;
      }
  return L !== void 0 ? L : D.nextSibling;
}
function ho(M, A, I, g, D) {
  var N;
  for (N in I)
    N === "children" || N === "key" || N in A || ZN(M, N, null, I[N], g);
  for (N in A)
    D && typeof A[N] != "function" || N === "children" || N === "key" || N === "value" || N === "checked" || I[N] === A[N] || ZN(M, N, A[N], I[N], g);
}
function N4(M, A, I) {
  A[0] === "-" ? M.setProperty(A, I) : M[A] = I == null ? "" : typeof I != "number" || mo.test(A) ? I : I + "px";
}
function ZN(M, A, I, g, D) {
  var N;
  M:
    if (A === "style")
      if (typeof I == "string")
        M.style.cssText = I;
      else {
        if (typeof g == "string" && (M.style.cssText = g = ""), g)
          for (A in g)
            I && A in I || N4(M.style, A, "");
        if (I)
          for (A in I)
            g && I[A] === g[A] || N4(M.style, A, I[A]);
      }
    else if (A[0] === "o" && A[1] === "n")
      N = A !== (A = A.replace(/Capture$/, "")), A = A.toLowerCase() in M ? A.toLowerCase().slice(2) : A.slice(2), M.l || (M.l = {}), M.l[A + N] = I, I ? g || M.addEventListener(A, N ? t4 : L4, N) : M.removeEventListener(A, N ? t4 : L4, N);
    else if (A !== "dangerouslySetInnerHTML") {
      if (D)
        A = A.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (A !== "href" && A !== "list" && A !== "form" && A !== "tabIndex" && A !== "download" && A in M)
        try {
          M[A] = I == null ? "" : I;
          break M;
        } catch {
        }
      typeof I == "function" || (I == null || I === !1 && A.indexOf("-") == -1 ? M.removeAttribute(A) : M.setAttribute(A, I));
    }
}
function L4(M) {
  this.l[M.type + !1](uM.event ? uM.event(M) : M);
}
function t4(M) {
  this.l[M.type + !0](uM.event ? uM.event(M) : M);
}
function Oj(M, A, I, g, D, N, L, t, j) {
  var S, u, i, C, w, E, x, n, a, z, d, Y, U, k, G, r = A.type;
  if (A.constructor !== void 0)
    return null;
  I.__h != null && (j = I.__h, t = A.__e = I.__e, A.__h = null, N = [t]), (S = uM.__b) && S(A);
  try {
    M:
      if (typeof r == "function") {
        if (n = A.props, a = (S = r.contextType) && g[S.__c], z = S ? a ? a.props.value : S.__ : g, I.__c ? x = (u = A.__c = I.__c).__ = u.__E : ("prototype" in r && r.prototype.render ? A.__c = u = new r(n, z) : (A.__c = u = new vA(n, z), u.constructor = r, u.render = Wo), a && a.sub(u), u.props = n, u.state || (u.state = {}), u.context = z, u.__n = g, i = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), r.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = rI({}, u.__s)), rI(u.__s, r.getDerivedStateFromProps(n, u.__s))), C = u.props, w = u.state, i)
          r.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
          if (r.getDerivedStateFromProps == null && n !== C && u.componentWillReceiveProps != null && u.componentWillReceiveProps(n, z), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(n, u.__s, z) === !1 || A.__v === I.__v) {
            for (u.props = n, u.state = u.__s, A.__v !== I.__v && (u.__d = !1), u.__v = A, A.__e = I.__e, A.__k = I.__k, A.__k.forEach(function(b) {
              b && (b.__ = A);
            }), d = 0; d < u._sb.length; d++)
              u.__h.push(u._sb[d]);
            u._sb = [], u.__h.length && L.push(u);
            break M;
          }
          u.componentWillUpdate != null && u.componentWillUpdate(n, u.__s, z), u.componentDidUpdate != null && u.__h.push(function() {
            u.componentDidUpdate(C, w, E);
          });
        }
        if (u.context = z, u.props = n, u.__v = A, u.__P = M, Y = uM.__r, U = 0, "prototype" in r && r.prototype.render) {
          for (u.state = u.__s, u.__d = !1, Y && Y(A), S = u.render(u.props, u.state, u.context), k = 0; k < u._sb.length; k++)
            u.__h.push(u._sb[k]);
          u._sb = [];
        } else
          do
            u.__d = !1, Y && Y(A), S = u.render(u.props, u.state, u.context), u.state = u.__s;
          while (u.__d && ++U < 25);
        u.state = u.__s, u.getChildContext != null && (g = rI(rI({}, g), u.getChildContext())), i || u.getSnapshotBeforeUpdate == null || (E = u.getSnapshotBeforeUpdate(C, w)), G = S != null && S.type === Mg && S.key == null ? S.props.children : S, Ie(M, Array.isArray(G) ? G : [G], A, I, g, D, N, L, t, j), u.base = A.__e, A.__h = null, u.__h.length && L.push(u), x && (u.__E = u.__ = null), u.__e = !1;
      } else
        N == null && A.__v === I.__v ? (A.__k = I.__k, A.__e = I.__e) : A.__e = bo(I.__e, A, I, g, D, N, L, j);
    (S = uM.diffed) && S(A);
  } catch (b) {
    A.__v = null, (j || N != null) && (A.__e = t, A.__h = !!j, N[N.indexOf(t)] = null), uM.__e(b, A, I);
  }
}
function Ne(M, A) {
  uM.__c && uM.__c(A, M), M.some(function(I) {
    try {
      M = I.__h, I.__h = [], M.some(function(g) {
        g.call(I);
      });
    } catch (g) {
      uM.__e(g, I.__v);
    }
  });
}
function bo(M, A, I, g, D, N, L, t) {
  var j, S, u, i = I.props, C = A.props, w = A.type, E = 0;
  if (w === "svg" && (D = !0), N != null) {
    for (; E < N.length; E++)
      if ((j = N[E]) && "setAttribute" in j == !!w && (w ? j.localName === w : j.nodeType === 3)) {
        M = j, N[E] = null;
        break;
      }
  }
  if (M == null) {
    if (w === null)
      return document.createTextNode(C);
    M = D ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, C.is && C), N = null, t = !1;
  }
  if (w === null)
    i === C || t && M.data === C || (M.data = C);
  else {
    if (N = N && xL.call(M.childNodes), S = (i = I.props || fN).dangerouslySetInnerHTML, u = C.dangerouslySetInnerHTML, !t) {
      if (N != null)
        for (i = {}, E = 0; E < M.attributes.length; E++)
          i[M.attributes[E].name] = M.attributes[E].value;
      (u || S) && (u && (S && u.__html == S.__html || u.__html === M.innerHTML) || (M.innerHTML = u && u.__html || ""));
    }
    if (ho(M, C, i, D, t), u)
      A.__k = [];
    else if (E = A.props.children, Ie(M, Array.isArray(E) ? E : [E], A, I, g, D && w !== "foreignObject", N, L, N ? N[0] : I.__k && mD(I, 0), t), N != null)
      for (E = N.length; E--; )
        N[E] != null && Me(N[E]);
    t || ("value" in C && (E = C.value) !== void 0 && (E !== M.value || w === "progress" && !E || w === "option" && E !== i.value) && ZN(M, "value", E, i.value, !1), "checked" in C && (E = C.checked) !== void 0 && E !== M.checked && ZN(M, "checked", E, i.checked, !1));
  }
  return M;
}
function Le(M, A, I) {
  try {
    typeof M == "function" ? M(A) : M.current = A;
  } catch (g) {
    uM.__e(g, I);
  }
}
function te(M, A, I) {
  var g, D;
  if (uM.unmount && uM.unmount(M), (g = M.ref) && (g.current && g.current !== M.__e || Le(g, null, A)), (g = M.__c) != null) {
    if (g.componentWillUnmount)
      try {
        g.componentWillUnmount();
      } catch (N) {
        uM.__e(N, A);
      }
    g.base = g.__P = null, M.__c = void 0;
  }
  if (g = M.__k)
    for (D = 0; D < g.length; D++)
      g[D] && te(g[D], A, I || typeof M.type != "function");
  I || M.__e == null || Me(M.__e), M.__ = M.__e = M.__d = void 0;
}
function Wo(M, A, I) {
  return this.constructor(M, I);
}
function OD(M, A, I) {
  var g, D, N;
  uM.__ && uM.__(M, A), D = (g = typeof I == "function") ? null : I && I.__k || A.__k, N = [], Oj(A, M = (!g && I || A).__k = OI(Mg, null, [M]), D || fN, fN, A.ownerSVGElement !== void 0, !g && I ? [I] : D ? null : A.firstChild ? xL.call(A.childNodes) : null, N, !g && I ? I : D ? D.__e : A.firstChild, g), Ne(N, M);
}
function ko(M, A) {
  var I = { __c: A = "__cC" + qi++, __: M, Consumer: function(g, D) {
    return g.children(D);
  }, Provider: function(g) {
    var D, N;
    return this.getChildContext || (D = [], (N = {})[A] = this, this.getChildContext = function() {
      return N;
    }, this.shouldComponentUpdate = function(L) {
      this.props.value !== L.value && D.some(Xt);
    }, this.sub = function(L) {
      D.push(L);
      var t = L.componentWillUnmount;
      L.componentWillUnmount = function() {
        D.splice(D.indexOf(L), 1), t && t.call(L);
      };
    }), g.children;
  } };
  return I.Provider.__ = I.Consumer.contextType = I;
}
xL = Ki.slice, uM = { __e: function(M, A, I, g) {
  for (var D, N, L; A = A.__; )
    if ((D = A.__c) && !D.__)
      try {
        if ((N = D.constructor) && N.getDerivedStateFromError != null && (D.setState(N.getDerivedStateFromError(M)), L = D.__d), D.componentDidCatch != null && (D.componentDidCatch(M, g || {}), L = D.__d), L)
          return D.__E = D;
      } catch (t) {
        M = t;
      }
  throw M;
} }, $i = 0, vA.prototype.setState = function(M, A) {
  var I;
  I = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rI({}, this.state), typeof M == "function" && (M = M(rI({}, I), this.props)), M && rI(I, M), M != null && this.__v && (A && this._sb.push(A), Xt(this));
}, vA.prototype.forceUpdate = function(M) {
  this.__v && (this.__e = !0, M && this.__h.push(M), Xt(this));
}, vA.prototype.render = Mg, nD = [], JN.__r = 0, qi = 0;
var FA, gt, j4, je = [], Dt = [], u4 = uM.__b, S4 = uM.__r, i4 = uM.diffed, e4 = uM.__c, C4 = uM.unmount;
function po() {
  for (var M; M = je.shift(); )
    if (M.__P && M.__H)
      try {
        M.__H.__h.forEach(sN), M.__H.__h.forEach(Rt), M.__H.__h = [];
      } catch (A) {
        M.__H.__h = [], uM.__e(A, M.__v);
      }
}
uM.__b = function(M) {
  typeof M.type != "function" || M.__m || M.__ === null ? M.__m || (M.__m = M.__ && M.__.__m ? M.__.__m : "") : M.__m = (M.__ && M.__.__m ? M.__.__m : "") + (M.__ && M.__.__k ? M.__.__k.indexOf(M) : 0), FA = null, u4 && u4(M);
}, uM.__r = function(M) {
  S4 && S4(M);
  var A = (FA = M.__c).__H;
  A && (gt === FA ? (A.__h = [], FA.__h = [], A.__.forEach(function(I) {
    I.__N && (I.__ = I.__N), I.__V = Dt, I.__N = I.i = void 0;
  })) : (A.__h.forEach(sN), A.__h.forEach(Rt), A.__h = [])), gt = FA;
}, uM.diffed = function(M) {
  i4 && i4(M);
  var A = M.__c;
  A && A.__H && (A.__H.__h.length && (je.push(A) !== 1 && j4 === uM.requestAnimationFrame || ((j4 = uM.requestAnimationFrame) || Qo)(po)), A.__H.__.forEach(function(I) {
    I.i && (I.__H = I.i), I.__V !== Dt && (I.__ = I.__V), I.i = void 0, I.__V = Dt;
  })), gt = FA = null;
}, uM.__c = function(M, A) {
  A.some(function(I) {
    try {
      I.__h.forEach(sN), I.__h = I.__h.filter(function(g) {
        return !g.__ || Rt(g);
      });
    } catch (g) {
      A.some(function(D) {
        D.__h && (D.__h = []);
      }), A = [], uM.__e(g, I.__v);
    }
  }), e4 && e4(M, A);
}, uM.unmount = function(M) {
  C4 && C4(M);
  var A, I = M.__c;
  I && I.__H && (I.__H.__.forEach(function(g) {
    try {
      sN(g);
    } catch (D) {
      A = D;
    }
  }), I.__H = void 0, A && uM.__e(A, I.__v));
};
var w4 = typeof requestAnimationFrame == "function";
function Qo(M) {
  var A, I = function() {
    clearTimeout(g), w4 && cancelAnimationFrame(A), setTimeout(M);
  }, g = setTimeout(I, 100);
  w4 && (A = requestAnimationFrame(I));
}
function sN(M) {
  var A = FA, I = M.__c;
  typeof I == "function" && (M.__c = void 0, I()), FA = A;
}
function Rt(M) {
  var A = FA;
  M.__c = M.__(), FA = A;
}
function vo(M, A) {
  for (var I in A)
    M[I] = A[I];
  return M;
}
function E4(M, A) {
  for (var I in M)
    if (I !== "__source" && !(I in A))
      return !0;
  for (var g in A)
    if (g !== "__source" && M[g] !== A[g])
      return !0;
  return !1;
}
function T4(M) {
  this.props = M;
}
(T4.prototype = new vA()).isPureReactComponent = !0, T4.prototype.shouldComponentUpdate = function(M, A) {
  return E4(this.props, M) || E4(this.state, A);
};
var x4 = uM.__b;
uM.__b = function(M) {
  M.type && M.type.__f && M.ref && (M.props.ref = M.ref, M.ref = null), x4 && x4(M);
};
var Go = uM.__e;
uM.__e = function(M, A, I, g) {
  if (M.then) {
    for (var D, N = A; N = N.__; )
      if ((D = N.__c) && D.__c)
        return A.__e == null && (A.__e = I.__e, A.__k = I.__k), D.__c(M, A);
  }
  Go(M, A, I, g);
};
var a4 = uM.unmount;
function ue(M, A, I) {
  return M && (M.__c && M.__c.__H && (M.__c.__H.__.forEach(function(g) {
    typeof g.__c == "function" && g.__c();
  }), M.__c.__H = null), (M = vo({}, M)).__c != null && (M.__c.__P === I && (M.__c.__P = A), M.__c = null), M.__k = M.__k && M.__k.map(function(g) {
    return ue(g, A, I);
  })), M;
}
function Se(M, A, I) {
  return M && (M.__v = null, M.__k = M.__k && M.__k.map(function(g) {
    return Se(g, A, I);
  }), M.__c && M.__c.__P === A && (M.__e && I.insertBefore(M.__e, M.__d), M.__c.__e = !0, M.__c.__P = I)), M;
}
function Nt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ie(M) {
  var A = M.__.__c;
  return A && A.__a && A.__a(M);
}
function KD() {
  this.u = null, this.o = null;
}
uM.unmount = function(M) {
  var A = M.__c;
  A && A.__R && A.__R(), A && M.__h === !0 && (M.type = null), a4 && a4(M);
}, (Nt.prototype = new vA()).__c = function(M, A) {
  var I = A.__c, g = this;
  g.t == null && (g.t = []), g.t.push(I);
  var D = ie(g.__v), N = !1, L = function() {
    N || (N = !0, I.__R = null, D ? D(t) : t());
  };
  I.__R = L;
  var t = function() {
    if (!--g.__u) {
      if (g.state.__a) {
        var S = g.state.__a;
        g.__v.__k[0] = Se(S, S.__c.__P, S.__c.__O);
      }
      var u;
      for (g.setState({ __a: g.__b = null }); u = g.t.pop(); )
        u.forceUpdate();
    }
  }, j = A.__h === !0;
  g.__u++ || j || g.setState({ __a: g.__b = g.__v.__k[0] }), M.then(L, L);
}, Nt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Nt.prototype.render = function(M, A) {
  if (this.__b) {
    if (this.__v.__k) {
      var I = document.createElement("div"), g = this.__v.__k[0].__c;
      this.__v.__k[0] = ue(this.__b, I, g.__O = g.__P);
    }
    this.__b = null;
  }
  var D = A.__a && OI(Mg, null, M.fallback);
  return D && (D.__h = null), [OI(Mg, null, A.__a ? null : M.children), D];
};
var y4 = function(M, A, I) {
  if (++I[1] === I[0] && M.o.delete(A), M.props.revealOrder && (M.props.revealOrder[0] !== "t" || !M.o.size))
    for (I = M.u; I; ) {
      for (; I.length > 3; )
        I.pop()();
      if (I[1] < I[0])
        break;
      M.u = I = I[2];
    }
};
function fo(M) {
  return this.getChildContext = function() {
    return M.context;
  }, M.children;
}
function Jo(M) {
  var A = this, I = M.i;
  A.componentWillUnmount = function() {
    OD(null, A.l), A.l = null, A.i = null;
  }, A.i && A.i !== I && A.componentWillUnmount(), M.__v ? (A.l || (A.i = I, A.l = { nodeType: 1, parentNode: I, childNodes: [], appendChild: function(g) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, insertBefore: function(g, D) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, removeChild: function(g) {
    this.childNodes.splice(this.childNodes.indexOf(g) >>> 1, 1), A.i.removeChild(g);
  } }), OD(OI(fo, { context: A.context }, M.__v), A.l)) : A.l && A.componentWillUnmount();
}
function Vo(M, A) {
  var I = OI(Jo, { __v: M, i: A });
  return I.containerInfo = A, I;
}
(KD.prototype = new vA()).__a = function(M) {
  var A = this, I = ie(A.__v), g = A.o.get(M);
  return g[0]++, function(D) {
    var N = function() {
      A.props.revealOrder ? (g.push(D), y4(A, M, g)) : D();
    };
    I ? I(N) : N();
  };
}, KD.prototype.render = function(M) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var A = VN(M.children);
  M.revealOrder && M.revealOrder[0] === "b" && A.reverse();
  for (var I = A.length; I--; )
    this.o.set(A[I], this.u = [1, 0, this.u]);
  return M.children;
}, KD.prototype.componentDidUpdate = KD.prototype.componentDidMount = function() {
  var M = this;
  this.o.forEach(function(A, I) {
    y4(M, I, A);
  });
};
var Zo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Bo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Po = typeof document < "u", Fo = function(M) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(M);
};
vA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(M) {
  Object.defineProperty(vA.prototype, M, { configurable: !0, get: function() {
    return this["UNSAFE_" + M];
  }, set: function(A) {
    Object.defineProperty(this, M, { configurable: !0, writable: !0, value: A });
  } });
});
var n4 = uM.event;
function Xo() {
}
function Ro() {
  return this.cancelBubble;
}
function Ho() {
  return this.defaultPrevented;
}
uM.event = function(M) {
  return n4 && (M = n4(M)), M.persist = Xo, M.isPropagationStopped = Ro, M.isDefaultPrevented = Ho, M.nativeEvent = M;
};
var o4 = { configurable: !0, get: function() {
  return this.class;
} }, l4 = uM.vnode;
uM.vnode = function(M) {
  var A = M.type, I = M.props, g = I;
  if (typeof A == "string") {
    var D = A.indexOf("-") === -1;
    for (var N in g = {}, I) {
      var L = I[N];
      Po && N === "children" && A === "noscript" || N === "value" && "defaultValue" in I && L == null || (N === "defaultValue" && "value" in I && I.value == null ? N = "value" : N === "download" && L === !0 ? L = "" : /ondoubleclick/i.test(N) ? N = "ondblclick" : /^onchange(textarea|input)/i.test(N + A) && !Fo(I.type) ? N = "oninput" : /^onfocus$/i.test(N) ? N = "onfocusin" : /^onblur$/i.test(N) ? N = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(N) ? N = N.toLowerCase() : D && Bo.test(N) ? N = N.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : L === null && (L = void 0), /^oninput$/i.test(N) && (N = N.toLowerCase(), g[N] && (N = "oninputCapture")), g[N] = L);
    }
    A == "select" && g.multiple && Array.isArray(g.value) && (g.value = VN(I.children).forEach(function(t) {
      t.props.selected = g.value.indexOf(t.props.value) != -1;
    })), A == "select" && g.defaultValue != null && (g.value = VN(I.children).forEach(function(t) {
      t.props.selected = g.multiple ? g.defaultValue.indexOf(t.props.value) != -1 : g.defaultValue == t.props.value;
    })), M.props = g, I.class != I.className && (o4.enumerable = "className" in I, I.className != null && (g.class = I.className), Object.defineProperty(g, "className", o4));
  }
  M.$$typeof = Zo, l4 && l4(M);
};
var s4 = uM.__r;
uM.__r = function(M) {
  s4 && s4(M), M.__c;
};
var c4 = typeof globalThis < "u" ? globalThis : window;
c4.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : c4.FullCalendarVDom = {
  Component: vA,
  createElement: OI,
  render: OD,
  createRef: Oo,
  Fragment: Mg,
  createContext: qo,
  createPortal: Vo,
  flushSync: _o,
  unmountComponentAtNode: Ko
};
function _o(M) {
  M();
  var A = uM.debounceRendering, I = [];
  function g(D) {
    I.push(D);
  }
  for (uM.debounceRendering = g, OD(OI($o, {}), document.createElement("div")); I.length; )
    I.shift()();
  uM.debounceRendering = A;
}
var $o = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    return OI("div", {});
  }, A.prototype.componentDidMount = function() {
    this.setState({});
  }, A;
}(vA);
function qo(M) {
  var A = ko(M), I = A.Provider;
  return A.Provider = function() {
    var g = this, D = !this.getChildContext, N = I.apply(this, arguments);
    if (D) {
      var L = [];
      this.shouldComponentUpdate = function(t) {
        g.props.value !== t.value && L.forEach(function(j) {
          j.context = t.value, j.forceUpdate();
        });
      }, this.sub = function(t) {
        L.push(t);
        var j = t.componentWillUnmount;
        t.componentWillUnmount = function() {
          L.splice(L.indexOf(t), 1), j && j.call(t);
        };
      };
    }
    return N;
  }, A;
}
function Ko(M) {
  OD(null, M);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var hj = FullCalendarVDom.Component, O = FullCalendarVDom.createElement, Ml = FullCalendarVDom.render, OA = FullCalendarVDom.createRef, SA = FullCalendarVDom.Fragment, ee = FullCalendarVDom.createContext, Al = FullCalendarVDom.createPortal, z4 = FullCalendarVDom.flushSync, Il = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var ng = function() {
  function M(A, I) {
    this.context = A, this.internalEventSource = I;
  }
  return M.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }, M.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }, Object.defineProperty(M.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: !1,
    configurable: !0
  }), M;
}();
function gl(M) {
  M.parentNode && M.parentNode.removeChild(M);
}
function AI(M, A) {
  if (M.closest)
    return M.closest(A);
  if (!document.documentElement.contains(M))
    return null;
  do {
    if (Dl(M, A))
      return M;
    M = M.parentElement || M.parentNode;
  } while (M !== null && M.nodeType === 1);
  return null;
}
function Dl(M, A) {
  var I = M.matches || M.matchesSelector || M.msMatchesSelector;
  return I.call(M, A);
}
function Nl(M, A) {
  for (var I = M instanceof HTMLElement ? [M] : M, g = [], D = 0; D < I.length; D += 1)
    for (var N = I[D].querySelectorAll(A), L = 0; L < N.length; L += 1)
      g.push(N[L]);
  return g;
}
var Ll = /(top|left|right|bottom|width|height)$/i;
function tl(M, A) {
  for (var I in A)
    Ce(M, I, A[I]);
}
function Ce(M, A, I) {
  I == null ? M.style[A] = "" : typeof I == "number" && Ll.test(A) ? M.style[A] = I + "px" : M.style[A] = I;
}
function jl(M) {
  var A, I;
  return (I = (A = M.composedPath) === null || A === void 0 ? void 0 : A.call(M)[0]) !== null && I !== void 0 ? I : M.target;
}
var Y4 = 0;
function mI() {
  return Y4 += 1, "fc-dom-" + Y4;
}
function ul(M, A) {
  return function(I) {
    var g = AI(I.target, M);
    g && A.call(g, I, g);
  };
}
function we(M, A, I, g) {
  var D = ul(I, g);
  return M.addEventListener(A, D), function() {
    M.removeEventListener(A, D);
  };
}
function Sl(M, A, I, g) {
  var D;
  return we(M, "mouseover", A, function(N, L) {
    if (L !== D) {
      D = L, I(N, L);
      var t = function(j) {
        D = null, g(j, L), L.removeEventListener("mouseleave", t);
      };
      L.addEventListener("mouseleave", t);
    }
  });
}
function Ee(M) {
  return m({ onClick: M }, Te(M));
}
function Te(M) {
  return {
    tabIndex: 0,
    onKeyDown: function(A) {
      (A.key === "Enter" || A.key === " ") && (M(A), A.preventDefault());
    }
  };
}
var r4 = 0;
function qg() {
  return r4 += 1, String(r4);
}
function il(M) {
  var A = [], I = [], g, D;
  for (typeof M == "string" ? I = M.split(/\s*,\s*/) : typeof M == "function" ? I = [M] : Array.isArray(M) && (I = M), g = 0; g < I.length; g += 1)
    D = I[g], typeof D == "string" ? A.push(D.charAt(0) === "-" ? { field: D.substring(1), order: -1 } : { field: D, order: 1 }) : typeof D == "function" && A.push({ func: D });
  return A;
}
function el(M, A, I) {
  var g, D;
  for (g = 0; g < I.length; g += 1)
    if (D = Cl(M, A, I[g]), D)
      return D;
  return 0;
}
function Cl(M, A, I) {
  return I.func ? I.func(M, A) : wl(M[I.field], A[I.field]) * (I.order || 1);
}
function wl(M, A) {
  return !M && !A ? 0 : A == null ? -1 : M == null ? 1 : typeof M == "string" || typeof A == "string" ? String(M).localeCompare(String(A)) : M - A;
}
function Lt(M, A) {
  var I = String(M);
  return "000".substr(0, A - I.length) + I;
}
function oD(M, A, I) {
  return typeof M == "function" ? M.apply(void 0, A) : typeof M == "string" ? A.reduce(function(g, D, N) {
    return g.replace("$" + N, D || "");
  }, M) : I;
}
function tt(M) {
  return M % 1 === 0;
}
function El(M) {
  var A = M.querySelector(".fc-scrollgrid-shrink-frame"), I = M.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!A)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!I)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return M.getBoundingClientRect().width - A.getBoundingClientRect().width + I.getBoundingClientRect().width;
}
var Tl = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function d4(M, A) {
  var I = dI(M);
  return I[2] += A * 7, xA(I);
}
function IA(M, A) {
  var I = dI(M);
  return I[2] += A, xA(I);
}
function Ag(M, A) {
  var I = dI(M);
  return I[6] += A, xA(I);
}
function xl(M, A) {
  return Ng(M, A) / 7;
}
function Ng(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60 * 24);
}
function al(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60);
}
function yl(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60);
}
function nl(M, A) {
  return (A.valueOf() - M.valueOf()) / 1e3;
}
function ol(M, A) {
  var I = ZM(M), g = ZM(A);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ng(I, g)),
    milliseconds: A.valueOf() - g.valueOf() - (M.valueOf() - I.valueOf())
  };
}
function ll(M, A) {
  var I = BN(M, A);
  return I !== null && I % 7 === 0 ? I / 7 : null;
}
function BN(M, A) {
  return UI(M) === UI(A) ? Math.round(Ng(M, A)) : null;
}
function ZM(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate()
  ]);
}
function sl(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours()
  ]);
}
function cl(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes()
  ]);
}
function zl(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes(),
    M.getUTCSeconds()
  ]);
}
function Yl(M, A, I) {
  var g = M.getUTCFullYear(), D = jt(M, g, A, I);
  if (D < 1)
    return jt(M, g - 1, A, I);
  var N = jt(M, g + 1, A, I);
  return N >= 1 ? Math.min(D, N) : D;
}
function jt(M, A, I, g) {
  var D = xA([A, 0, 1 + rl(A, I, g)]), N = ZM(M), L = Math.round(Ng(D, N));
  return Math.floor(L / 7) + 1;
}
function rl(M, A, I) {
  var g = 7 + A - I, D = (7 + xA([M, 0, g]).getUTCDay() - A) % 7;
  return -D + g - 1;
}
function U4(M) {
  return [
    M.getFullYear(),
    M.getMonth(),
    M.getDate(),
    M.getHours(),
    M.getMinutes(),
    M.getSeconds(),
    M.getMilliseconds()
  ];
}
function m4(M) {
  return new Date(
    M[0],
    M[1] || 0,
    M[2] == null ? 1 : M[2],
    M[3] || 0,
    M[4] || 0,
    M[5] || 0
  );
}
function dI(M) {
  return [
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes(),
    M.getUTCSeconds(),
    M.getUTCMilliseconds()
  ];
}
function xA(M) {
  return M.length === 1 && (M = M.concat([0])), new Date(Date.UTC.apply(Date, M));
}
function xe(M) {
  return !isNaN(M.valueOf());
}
function UI(M) {
  return M.getUTCHours() * 1e3 * 60 * 60 + M.getUTCMinutes() * 1e3 * 60 + M.getUTCSeconds() * 1e3 + M.getUTCMilliseconds();
}
function bj(M, A, I, g) {
  return {
    instanceId: qg(),
    defId: M,
    range: A,
    forcedStartTzo: I == null ? null : I,
    forcedEndTzo: g == null ? null : g
  };
}
var PN = Object.prototype.hasOwnProperty;
function Wj(M, A) {
  var I = {};
  if (A)
    for (var g in A) {
      for (var D = [], N = M.length - 1; N >= 0; N -= 1) {
        var L = M[N][g];
        if (typeof L == "object" && L)
          D.unshift(L);
        else if (L !== void 0) {
          I[g] = L;
          break;
        }
      }
      D.length && (I[g] = Wj(D));
    }
  for (var N = M.length - 1; N >= 0; N -= 1) {
    var t = M[N];
    for (var j in t)
      j in I || (I[j] = t[j]);
  }
  return I;
}
function Gg(M, A) {
  var I = {};
  for (var g in M)
    A(M[g], g) && (I[g] = M[g]);
  return I;
}
function fD(M, A) {
  var I = {};
  for (var g in M)
    I[g] = A(M[g], g);
  return I;
}
function ae(M) {
  for (var A = {}, I = 0, g = M; I < g.length; I++) {
    var D = g[I];
    A[D] = !0;
  }
  return A;
}
function kj(M) {
  var A = [];
  for (var I in M)
    A.push(M[I]);
  return A;
}
function eI(M, A) {
  if (M === A)
    return !0;
  for (var I in M)
    if (PN.call(M, I) && !(I in A))
      return !1;
  for (var I in A)
    if (PN.call(A, I) && M[I] !== A[I])
      return !1;
  return !0;
}
function O4(M, A) {
  var I = [];
  for (var g in M)
    PN.call(M, g) && (g in A || I.push(g));
  for (var g in A)
    PN.call(A, g) && M[g] !== A[g] && I.push(g);
  return I;
}
function ut(M, A, I) {
  if (I === void 0 && (I = {}), M === A)
    return !0;
  for (var g in A)
    if (!(g in M && dl(M[g], A[g], I[g])))
      return !1;
  for (var g in M)
    if (!(g in A))
      return !1;
  return !0;
}
function dl(M, A, I) {
  return M === A || I === !0 ? !0 : I ? I(M, A) : !1;
}
function Ul(M, A, I, g) {
  A === void 0 && (A = 0), g === void 0 && (g = 1);
  var D = [];
  I == null && (I = Object.keys(M).length);
  for (var N = A; N < I; N += g) {
    var L = M[N];
    L !== void 0 && D.push(L);
  }
  return D;
}
function ml(M, A, I, g) {
  for (var D = 0; D < g.length; D += 1) {
    var N = g[D].parse(M, I);
    if (N) {
      var L = M.allDay;
      return L == null && (L = A, L == null && (L = N.allDayGuess, L == null && (L = !1))), {
        allDay: L,
        duration: N.duration,
        typeData: N.typeData,
        typeId: D
      };
    }
  }
  return null;
}
function aL(M, A, I) {
  var g = I.dateEnv, D = I.pluginHooks, N = I.options, L = M.defs, t = M.instances;
  t = Gg(t, function(n) {
    return !L[n.defId].recurringDef;
  });
  for (var j in L) {
    var S = L[j];
    if (S.recurringDef) {
      var u = S.recurringDef.duration;
      u || (u = S.allDay ? N.defaultAllDayEventDuration : N.defaultTimedEventDuration);
      for (var i = Ol(S, u, A, g, D.recurringTypes), C = 0, w = i; C < w.length; C++) {
        var E = w[C], x = bj(j, {
          start: E,
          end: g.add(E, u)
        });
        t[x.instanceId] = x;
      }
    }
  }
  return { defs: L, instances: t };
}
function Ol(M, A, I, g, D) {
  var N = D[M.recurringDef.typeId], L = N.expand(M.recurringDef.typeData, {
    start: g.subtract(I.start, A),
    end: I.end
  }, g);
  return M.allDay && (L = L.map(ZM)), L;
}
var hl = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function pM(M, A) {
  var I;
  return typeof M == "string" ? bl(M) : typeof M == "object" && M ? h4(M) : typeof M == "number" ? h4((I = {}, I[A || "milliseconds"] = M, I)) : null;
}
function bl(M) {
  var A = hl.exec(M);
  if (A) {
    var I = A[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: I * (A[2] ? parseInt(A[2], 10) : 0),
      milliseconds: I * ((A[3] ? parseInt(A[3], 10) : 0) * 60 * 60 * 1e3 + (A[4] ? parseInt(A[4], 10) : 0) * 60 * 1e3 + (A[5] ? parseInt(A[5], 10) : 0) * 1e3 + (A[6] ? parseInt(A[6], 10) : 0))
    };
  }
  return null;
}
function h4(M) {
  var A = {
    years: M.years || M.year || 0,
    months: M.months || M.month || 0,
    days: M.days || M.day || 0,
    milliseconds: (M.hours || M.hour || 0) * 60 * 60 * 1e3 + (M.minutes || M.minute || 0) * 60 * 1e3 + (M.seconds || M.second || 0) * 1e3 + (M.milliseconds || M.millisecond || M.ms || 0)
  }, I = M.weeks || M.week;
  return I && (A.days += I * 7, A.specifiedWeeks = !0), A;
}
function Wl(M, A) {
  return M.years === A.years && M.months === A.months && M.days === A.days && M.milliseconds === A.milliseconds;
}
function kl(M, A) {
  return {
    years: M.years - A.years,
    months: M.months - A.months,
    days: M.days - A.days,
    milliseconds: M.milliseconds - A.milliseconds
  };
}
function pl(M) {
  return mg(M) / 365;
}
function Ql(M) {
  return mg(M) / 30;
}
function mg(M) {
  return hD(M) / 864e5;
}
function hD(M) {
  return M.years * (365 * 864e5) + M.months * (30 * 864e5) + M.days * 864e5 + M.milliseconds;
}
function Ht(M) {
  var A = M.milliseconds;
  if (A) {
    if (A % 1e3 !== 0)
      return { unit: "millisecond", value: A };
    if (A % (1e3 * 60) !== 0)
      return { unit: "second", value: A / 1e3 };
    if (A % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: A / (1e3 * 60) };
    if (A)
      return { unit: "hour", value: A / (1e3 * 60 * 60) };
  }
  return M.days ? M.specifiedWeeks && M.days % 7 === 0 ? { unit: "week", value: M.days / 7 } : { unit: "day", value: M.days } : M.months ? { unit: "month", value: M.months } : M.years ? { unit: "year", value: M.years } : { unit: "millisecond", value: 0 };
}
function vl(M, A, I) {
  I === void 0 && (I = !1);
  var g = M.toISOString();
  return g = g.replace(".000", ""), I && (g = g.replace("T00:00:00Z", "")), g.length > 10 && (A == null ? g = g.replace("Z", "") : A !== 0 && (g = g.replace("Z", pj(A, !0)))), g;
}
function yL(M) {
  return M.toISOString().replace(/T.*$/, "");
}
function pj(M, A) {
  A === void 0 && (A = !1);
  var I = M < 0 ? "-" : "+", g = Math.abs(M), D = Math.floor(g / 60), N = Math.round(g % 60);
  return A ? I + Lt(D, 2) + ":" + Lt(N, 2) : "GMT" + I + D + (N ? ":" + Lt(N, 2) : "");
}
function fg(M, A, I) {
  if (M === A)
    return !0;
  var g = M.length, D;
  if (g !== A.length)
    return !1;
  for (D = 0; D < g; D += 1)
    if (!(I ? I(M[D], A[D]) : M[D] === A[D]))
      return !1;
  return !0;
}
function UM(M, A, I) {
  var g, D;
  return function() {
    for (var N = [], L = 0; L < arguments.length; L++)
      N[L] = arguments[L];
    if (!g)
      D = M.apply(this, N);
    else if (!fg(g, N)) {
      I && I(D);
      var t = M.apply(this, N);
      (!A || !A(t, D)) && (D = t);
    }
    return g = N, D;
  };
}
function cN(M, A, I) {
  var g = this, D, N;
  return function(L) {
    if (!D)
      N = M.call(g, L);
    else if (!eI(D, L)) {
      I && I(N);
      var t = M.call(g, L);
      (!A || !A(t, N)) && (N = t);
    }
    return D = L, N;
  };
}
var b4 = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, FN = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, MN = /\s*([ap])\.?m\.?/i, Gl = /,/g, fl = /\s+/g, Jl = /\u200e/g, Vl = /UTC|GMT/, Zl = function() {
  function M(A) {
    var I = {}, g = {}, D = 0;
    for (var N in A)
      N in b4 ? (g[N] = A[N], D = Math.max(b4[N], D)) : (I[N] = A[N], N in FN && (D = Math.max(FN[N], D)));
    this.standardDateProps = I, this.extendedSettings = g, this.severity = D, this.buildFormattingFunc = UM(W4);
  }
  return M.prototype.format = function(A, I) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, I)(A);
  }, M.prototype.formatRange = function(A, I, g, D) {
    var N = this, L = N.standardDateProps, t = N.extendedSettings, j = Hl(A.marker, I.marker, g.calendarSystem);
    if (!j)
      return this.format(A, g);
    var S = j;
    S > 1 && (L.year === "numeric" || L.year === "2-digit") && (L.month === "numeric" || L.month === "2-digit") && (L.day === "numeric" || L.day === "2-digit") && (S = 1);
    var u = this.format(A, g), i = this.format(I, g);
    if (u === i)
      return u;
    var C = _l(L, S), w = W4(C, t, g), E = w(A), x = w(I), n = $l(u, E, i, x), a = t.separator || D || g.defaultSeparator || "";
    return n ? n.before + E + a + x + n.after : u + a + i;
  }, M.prototype.getLargestUnit = function() {
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
  }, M;
}();
function W4(M, A, I) {
  var g = Object.keys(M).length;
  return g === 1 && M.timeZoneName === "short" ? function(D) {
    return pj(D.timeZoneOffset);
  } : g === 0 && A.week ? function(D) {
    return Rl(I.computeWeekNumber(D.marker), I.weekText, I.weekTextLong, I.locale, A.week);
  } : Bl(M, A, I);
}
function Bl(M, A, I) {
  M = m({}, M), A = m({}, A), Pl(M, A), M.timeZone = "UTC";
  var g = new Intl.DateTimeFormat(I.locale.codes, M), D;
  if (A.omitZeroMinute) {
    var N = m({}, M);
    delete N.minute, D = new Intl.DateTimeFormat(I.locale.codes, N);
  }
  return function(L) {
    var t = L.marker, j;
    D && !t.getUTCMinutes() ? j = D : j = g;
    var S = j.format(t);
    return Fl(S, L, M, A, I);
  };
}
function Pl(M, A) {
  M.timeZoneName && (M.hour || (M.hour = "2-digit"), M.minute || (M.minute = "2-digit")), M.timeZoneName === "long" && (M.timeZoneName = "short"), A.omitZeroMinute && (M.second || M.millisecond) && delete A.omitZeroMinute;
}
function Fl(M, A, I, g, D) {
  return M = M.replace(Jl, ""), I.timeZoneName === "short" && (M = Xl(M, D.timeZone === "UTC" || A.timeZoneOffset == null ? "UTC" : pj(A.timeZoneOffset))), g.omitCommas && (M = M.replace(Gl, "").trim()), g.omitZeroMinute && (M = M.replace(":00", "")), g.meridiem === !1 ? M = M.replace(MN, "").trim() : g.meridiem === "narrow" ? M = M.replace(MN, function(N, L) {
    return L.toLocaleLowerCase();
  }) : g.meridiem === "short" ? M = M.replace(MN, function(N, L) {
    return L.toLocaleLowerCase() + "m";
  }) : g.meridiem === "lowercase" && (M = M.replace(MN, function(N) {
    return N.toLocaleLowerCase();
  })), M = M.replace(fl, " "), M = M.trim(), M;
}
function Xl(M, A) {
  var I = !1;
  return M = M.replace(Vl, function() {
    return I = !0, A;
  }), I || (M += " " + A), M;
}
function Rl(M, A, I, g, D) {
  var N = [];
  return D === "long" ? N.push(I) : (D === "short" || D === "narrow") && N.push(A), (D === "long" || D === "short") && N.push(" "), N.push(g.simpleNumberFormat.format(M)), g.options.direction === "rtl" && N.reverse(), N.join("");
}
function Hl(M, A, I) {
  return I.getMarkerYear(M) !== I.getMarkerYear(A) ? 5 : I.getMarkerMonth(M) !== I.getMarkerMonth(A) ? 4 : I.getMarkerDay(M) !== I.getMarkerDay(A) ? 2 : UI(M) !== UI(A) ? 1 : 0;
}
function _l(M, A) {
  var I = {};
  for (var g in M)
    (!(g in FN) || FN[g] <= A) && (I[g] = M[g]);
  return I;
}
function $l(M, A, I, g) {
  for (var D = 0; D < M.length; ) {
    var N = M.indexOf(A, D);
    if (N === -1)
      break;
    var L = M.substr(0, N);
    D = N + A.length;
    for (var t = M.substr(D), j = 0; j < I.length; ) {
      var S = I.indexOf(g, j);
      if (S === -1)
        break;
      var u = I.substr(0, S);
      j = S + g.length;
      var i = I.substr(j);
      if (L === u && t === i)
        return {
          before: L,
          after: t
        };
    }
  }
  return null;
}
function k4(M, A) {
  var I = A.markerToArray(M.marker);
  return {
    marker: M.marker,
    timeZoneOffset: M.timeZoneOffset,
    array: I,
    year: I[0],
    month: I[1],
    day: I[2],
    hour: I[3],
    minute: I[4],
    second: I[5],
    millisecond: I[6]
  };
}
function XN(M, A, I, g) {
  var D = k4(M, I.calendarSystem), N = A ? k4(A, I.calendarSystem) : null;
  return {
    date: D,
    start: D,
    end: N,
    timeZone: I.timeZone,
    localeCodes: I.locale.codes,
    defaultSeparator: g || I.defaultSeparator
  };
}
var ql = function() {
  function M(A) {
    this.cmdStr = A;
  }
  return M.prototype.format = function(A, I, g) {
    return I.cmdFormatter(this.cmdStr, XN(A, null, I, g));
  }, M.prototype.formatRange = function(A, I, g, D) {
    return g.cmdFormatter(this.cmdStr, XN(A, I, g, D));
  }, M;
}(), Kl = function() {
  function M(A) {
    this.func = A;
  }
  return M.prototype.format = function(A, I, g) {
    return this.func(XN(A, null, I, g));
  }, M.prototype.formatRange = function(A, I, g, D) {
    return this.func(XN(A, I, g, D));
  }, M;
}();
function AA(M) {
  return typeof M == "object" && M ? new Zl(M) : typeof M == "string" ? new ql(M) : typeof M == "function" ? new Kl(M) : null;
}
var p4 = {
  navLinkDayClick: f,
  navLinkWeekClick: f,
  duration: pM,
  bootstrapFontAwesome: f,
  buttonIcons: f,
  customButtons: f,
  defaultAllDayEventDuration: pM,
  defaultTimedEventDuration: pM,
  nextDayThreshold: pM,
  scrollTime: pM,
  scrollTimeReset: Boolean,
  slotMinTime: pM,
  slotMaxTime: pM,
  dayPopoverFormat: AA,
  slotDuration: pM,
  snapDuration: pM,
  headerToolbar: f,
  footerToolbar: f,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: AA,
  dayHeaderClassNames: f,
  dayHeaderContent: f,
  dayHeaderDidMount: f,
  dayHeaderWillUnmount: f,
  dayCellClassNames: f,
  dayCellContent: f,
  dayCellDidMount: f,
  dayCellWillUnmount: f,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: f,
  weekNumbers: Boolean,
  weekNumberClassNames: f,
  weekNumberContent: f,
  weekNumberDidMount: f,
  weekNumberWillUnmount: f,
  editable: Boolean,
  viewClassNames: f,
  viewDidMount: f,
  viewWillUnmount: f,
  nowIndicator: Boolean,
  nowIndicatorClassNames: f,
  nowIndicatorContent: f,
  nowIndicatorDidMount: f,
  nowIndicatorWillUnmount: f,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: f,
  locale: f,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: f,
  eventOrder: il,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: f,
  contentHeight: f,
  direction: String,
  weekNumberFormat: AA,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: f,
  initialDate: f,
  now: f,
  eventDataTransform: f,
  stickyHeaderDates: f,
  stickyFooterScrollbar: f,
  viewHeight: f,
  defaultAllDay: Boolean,
  eventSourceFailure: f,
  eventSourceSuccess: f,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: f,
  eventConstraint: f,
  eventAllow: f,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: f,
  eventContent: f,
  eventDidMount: f,
  eventWillUnmount: f,
  selectConstraint: f,
  selectOverlap: f,
  selectAllow: f,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: f,
  slotLaneClassNames: f,
  slotLaneContent: f,
  slotLaneDidMount: f,
  slotLaneWillUnmount: f,
  slotLabelClassNames: f,
  slotLabelContent: f,
  slotLabelDidMount: f,
  slotLabelWillUnmount: f,
  dayMaxEvents: f,
  dayMaxEventRows: f,
  dayMinWidth: Number,
  slotLabelInterval: pM,
  allDayText: String,
  allDayClassNames: f,
  allDayContent: f,
  allDayDidMount: f,
  allDayWillUnmount: f,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: AA,
  rerenderDelay: Number,
  moreLinkText: f,
  moreLinkHint: f,
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
  plugins: f,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: pM,
  hiddenDays: f,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: f,
  visibleRange: f,
  titleFormat: f,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: f,
  navLinkHint: f,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: f,
  moreLinkClassNames: f,
  moreLinkContent: f,
  moreLinkDidMount: f,
  moreLinkWillUnmount: f
}, lD = {
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
}, Q4 = {
  datesSet: f,
  eventsSet: f,
  eventAdd: f,
  eventChange: f,
  eventRemove: f,
  windowResize: f,
  eventClick: f,
  eventMouseEnter: f,
  eventMouseLeave: f,
  select: f,
  unselect: f,
  loading: f,
  _unmount: f,
  _beforeprint: f,
  _afterprint: f,
  _noEventDrop: f,
  _noEventResize: f,
  _resize: f,
  _scrollRequest: f
}, v4 = {
  buttonText: f,
  buttonHints: f,
  views: f,
  plugins: f,
  initialEvents: f,
  events: f,
  eventSources: f
}, PI = {
  headerToolbar: wg,
  footerToolbar: wg,
  buttonText: wg,
  buttonHints: wg,
  buttonIcons: wg,
  dateIncrement: wg
};
function wg(M, A) {
  return typeof M == "object" && typeof A == "object" && M && A ? eI(M, A) : M === A;
}
var Ms = {
  type: String,
  component: f,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: f,
  usesMinMaxTime: Boolean,
  classNames: f,
  content: f,
  didMount: f,
  willUnmount: f
};
function St(M) {
  return Wj(M, PI);
}
function Qj(M, A) {
  var I = {}, g = {};
  for (var D in A)
    D in M && (I[D] = A[D](M[D]));
  for (var D in M)
    D in A || (g[D] = M[D]);
  return { refined: I, extra: g };
}
function f(M) {
  return M;
}
function RN(M, A, I, g) {
  for (var D = Ig(), N = fj(I), L = 0, t = M; L < t.length; L++) {
    var j = t[L], S = ne(j, A, I, g, N);
    S && _t(S, D);
  }
  return D;
}
function _t(M, A) {
  return A === void 0 && (A = Ig()), A.defs[M.def.defId] = M.def, M.instance && (A.instances[M.instance.instanceId] = M.instance), A;
}
function As(M, A) {
  var I = M.instances[A];
  if (I) {
    var g = M.defs[I.defId], D = Gj(M, function(N) {
      return Is(g, N);
    });
    return D.defs[g.defId] = g, D.instances[I.instanceId] = I, D;
  }
  return Ig();
}
function Is(M, A) {
  return Boolean(M.groupId && M.groupId === A.groupId);
}
function Ig() {
  return { defs: {}, instances: {} };
}
function vj(M, A) {
  return {
    defs: m(m({}, M.defs), A.defs),
    instances: m(m({}, M.instances), A.instances)
  };
}
function Gj(M, A) {
  var I = Gg(M.defs, A), g = Gg(M.instances, function(D) {
    return I[D.defId];
  });
  return { defs: I, instances: g };
}
function gs(M, A) {
  var I = M.defs, g = M.instances, D = {}, N = {};
  for (var L in I)
    A.defs[L] || (D[L] = I[L]);
  for (var t in g)
    !A.instances[t] && D[g[t].defId] && (N[t] = g[t]);
  return {
    defs: D,
    instances: N
  };
}
function Ds(M, A) {
  return Array.isArray(M) ? RN(M, null, A, !0) : typeof M == "object" && M ? RN([M], null, A, !0) : M != null ? String(M) : null;
}
function $t(M) {
  return Array.isArray(M) ? M : typeof M == "string" ? M.split(/\s+/) : [];
}
var HN = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: f,
  overlap: f,
  allow: f,
  className: $t,
  classNames: $t,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Ns = {
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
function _N(M, A) {
  var I = Ds(M.constraint, A);
  return {
    display: M.display || null,
    startEditable: M.startEditable != null ? M.startEditable : M.editable,
    durationEditable: M.durationEditable != null ? M.durationEditable : M.editable,
    constraints: I != null ? [I] : [],
    overlap: M.overlap != null ? M.overlap : null,
    allows: M.allow != null ? [M.allow] : [],
    backgroundColor: M.backgroundColor || M.color || "",
    borderColor: M.borderColor || M.color || "",
    textColor: M.textColor || "",
    classNames: (M.className || []).concat(M.classNames || [])
  };
}
function Ls(M) {
  return M.reduce(ts, Ns);
}
function ts(M, A) {
  return {
    display: A.display != null ? A.display : M.display,
    startEditable: A.startEditable != null ? A.startEditable : M.startEditable,
    durationEditable: A.durationEditable != null ? A.durationEditable : M.durationEditable,
    constraints: M.constraints.concat(A.constraints),
    overlap: typeof A.overlap == "boolean" ? A.overlap : M.overlap,
    allows: M.allows.concat(A.allows),
    backgroundColor: A.backgroundColor || M.backgroundColor,
    borderColor: A.borderColor || M.borderColor,
    textColor: A.textColor || M.textColor,
    classNames: M.classNames.concat(A.classNames)
  };
}
var zN = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, ye = {
  start: f,
  end: f,
  date: f,
  allDay: Boolean
}, js = m(m(m({}, zN), ye), { extendedProps: f });
function ne(M, A, I, g, D) {
  D === void 0 && (D = fj(I));
  var N = oe(M, I, D), L = N.refined, t = N.extra, j = Ss(A, I), S = ml(L, j, I.dateEnv, I.pluginHooks.recurringTypes);
  if (S) {
    var u = qt(L, t, A ? A.sourceId : "", S.allDay, Boolean(S.duration), I);
    return u.recurringDef = {
      typeId: S.typeId,
      typeData: S.typeData,
      duration: S.duration
    }, { def: u, instance: null };
  }
  var i = us(L, j, I, g);
  if (i) {
    var u = qt(L, t, A ? A.sourceId : "", i.allDay, i.hasEnd, I), C = bj(u.defId, i.range, i.forcedStartTzo, i.forcedEndTzo);
    return { def: u, instance: C };
  }
  return null;
}
function oe(M, A, I) {
  return I === void 0 && (I = fj(A)), Qj(M, I);
}
function fj(M) {
  return m(m(m({}, HN), js), M.pluginHooks.eventRefiners);
}
function qt(M, A, I, g, D, N) {
  for (var L = {
    title: M.title || "",
    groupId: M.groupId || "",
    publicId: M.id || "",
    url: M.url || "",
    recurringDef: null,
    defId: qg(),
    sourceId: I,
    allDay: g,
    hasEnd: D,
    interactive: M.interactive,
    ui: _N(M, N),
    extendedProps: m(m({}, M.extendedProps || {}), A)
  }, t = 0, j = N.pluginHooks.eventDefMemberAdders; t < j.length; t++) {
    var S = j[t];
    m(L, S(M));
  }
  return Object.freeze(L.ui.classNames), Object.freeze(L.extendedProps), L;
}
function us(M, A, I, g) {
  var D = M.allDay, N, L = null, t = !1, j, S = null, u = M.start != null ? M.start : M.date;
  if (N = I.dateEnv.createMarkerMeta(u), N)
    L = N.marker;
  else if (!g)
    return null;
  return M.end != null && (j = I.dateEnv.createMarkerMeta(M.end)), D == null && (A != null ? D = A : D = (!N || N.isTimeUnspecified) && (!j || j.isTimeUnspecified)), D && L && (L = ZM(L)), j && (S = j.marker, D && (S = ZM(S)), L && S <= L && (S = null)), S ? t = !0 : g || (t = I.options.forceEventDuration || !1, S = I.dateEnv.add(L, D ? I.options.defaultAllDayEventDuration : I.options.defaultTimedEventDuration)), {
    allDay: D,
    hasEnd: t,
    range: { start: L, end: S },
    forcedStartTzo: N ? N.forcedTzo : null,
    forcedEndTzo: j ? j.forcedTzo : null
  };
}
function Ss(M, A) {
  var I = null;
  return M && (I = M.defaultAllDay), I == null && (I = A.options.defaultAllDay), I;
}
function le(M) {
  var A = Math.floor(Ng(M.start, M.end)) || 1, I = ZM(M.start), g = IA(I, A);
  return { start: I, end: g };
}
function Jj(M, A) {
  A === void 0 && (A = pM(0));
  var I = null, g = null;
  if (M.end) {
    g = ZM(M.end);
    var D = M.end.valueOf() - g.valueOf();
    D && D >= hD(A) && (g = IA(g, 1));
  }
  return M.start && (I = ZM(M.start), g && g <= I && (g = IA(I, 1))), { start: I, end: g };
}
function is(M) {
  var A = Jj(M);
  return Ng(A.start, A.end) > 1;
}
function AN(M, A, I, g) {
  return g === "year" ? pM(I.diffWholeYears(M, A), "year") : g === "month" ? pM(I.diffWholeMonths(M, A), "month") : ol(M, A);
}
function es(M, A) {
  var I = null, g = null;
  return M.start && (I = A.createMarker(M.start)), M.end && (g = A.createMarker(M.end)), !I && !g || I && g && g < I ? null : { start: I, end: g };
}
function G4(M, A) {
  var I = [], g = A.start, D, N;
  for (M.sort(Cs), D = 0; D < M.length; D += 1)
    N = M[D], N.start > g && I.push({ start: g, end: N.start }), N.end > g && (g = N.end);
  return g < A.end && I.push({ start: g, end: A.end }), I;
}
function Cs(M, A) {
  return M.start.valueOf() - A.start.valueOf();
}
function Jg(M, A) {
  var I = M.start, g = M.end, D = null;
  return A.start !== null && (I === null ? I = A.start : I = new Date(Math.max(I.valueOf(), A.start.valueOf()))), A.end != null && (g === null ? g = A.end : g = new Date(Math.min(g.valueOf(), A.end.valueOf()))), (I === null || g === null || I < g) && (D = { start: I, end: g }), D;
}
function ws(M, A) {
  return (M.end === null || A.start === null || M.end > A.start) && (M.start === null || A.end === null || M.start < A.end);
}
function _I(M, A) {
  return (M.start === null || A >= M.start) && (M.end === null || A < M.end);
}
function Es(M, A) {
  return A.start != null && M < A.start ? A.start : A.end != null && M >= A.end ? new Date(A.end.valueOf() - 1) : M;
}
function Kt(M, A, I, g) {
  var D = {}, N = {}, L = {}, t = [], j = [], S = se(M.defs, A);
  for (var u in M.defs) {
    var i = M.defs[u], C = S[i.defId];
    C.display === "inverse-background" && (i.groupId ? (D[i.groupId] = [], L[i.groupId] || (L[i.groupId] = i)) : N[u] = []);
  }
  for (var w in M.instances) {
    var E = M.instances[w], i = M.defs[E.defId], C = S[i.defId], x = E.range, n = !i.allDay && g ? Jj(x, g) : x, a = Jg(n, I);
    a && (C.display === "inverse-background" ? i.groupId ? D[i.groupId].push(a) : N[E.defId].push(a) : C.display !== "none" && (C.display === "background" ? t : j).push({
      def: i,
      ui: C,
      instance: E,
      range: a,
      isStart: n.start && n.start.valueOf() === a.start.valueOf(),
      isEnd: n.end && n.end.valueOf() === a.end.valueOf()
    }));
  }
  for (var z in D)
    for (var d = D[z], Y = G4(d, I), U = 0, k = Y; U < k.length; U++) {
      var G = k[U], i = L[z], C = S[i.defId];
      t.push({
        def: i,
        ui: C,
        instance: null,
        range: G,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var u in N)
    for (var d = N[u], Y = G4(d, I), r = 0, b = Y; r < b.length; r++) {
      var G = b[r];
      t.push({
        def: M.defs[u],
        ui: S[u],
        instance: null,
        range: G,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: t, fg: j };
}
function f4(M, A) {
  M.fcSeg = A;
}
function Mj(M) {
  return M.fcSeg || M.parentNode.fcSeg || null;
}
function se(M, A) {
  return fD(M, function(I) {
    return ce(I, A);
  });
}
function ce(M, A) {
  var I = [];
  return A[""] && I.push(A[""]), A[M.defId] && I.push(A[M.defId]), I.push(M.ui), Ls(I);
}
function ze(M, A) {
  var I = M.map(Ts);
  return I.sort(function(g, D) {
    return el(g, D, A);
  }), I.map(function(g) {
    return g._seg;
  });
}
function Ts(M) {
  var A = M.eventRange, I = A.def, g = A.instance ? A.instance.range : A.range, D = g.start ? g.start.valueOf() : 0, N = g.end ? g.end.valueOf() : 0;
  return m(m(m({}, I.extendedProps), I), {
    id: I.publicId,
    start: D,
    end: N,
    duration: N - D,
    allDay: Number(I.allDay),
    _seg: M
  });
}
function xs(M, A) {
  for (var I = A.pluginHooks, g = I.isDraggableTransformers, D = M.eventRange, N = D.def, L = D.ui, t = L.startEditable, j = 0, S = g; j < S.length; j++) {
    var u = S[j];
    t = u(t, N, L, A);
  }
  return t;
}
function as(M, A) {
  return M.isStart && M.eventRange.ui.durationEditable && A.options.eventResizableFromStart;
}
function ys(M, A) {
  return M.isEnd && M.eventRange.ui.durationEditable;
}
function sD(M, A, I, g, D, N, L) {
  var t = I.dateEnv, j = I.options, S = j.displayEventTime, u = j.displayEventEnd, i = M.eventRange.def, C = M.eventRange.instance;
  S == null && (S = g !== !1), u == null && (u = D !== !1);
  var w = C.range.start, E = C.range.end, x = N || M.start || M.eventRange.range.start, n = L || M.end || M.eventRange.range.end, a = ZM(w).valueOf() === ZM(x).valueOf(), z = ZM(Ag(E, -1)).valueOf() === ZM(Ag(n, -1)).valueOf();
  return S && !i.allDay && (a || z) ? (x = a ? w : x, n = z ? E : n, u && i.hasEnd ? t.formatRange(x, n, A, {
    forcedStartTzo: N ? null : C.forcedStartTzo,
    forcedEndTzo: L ? null : C.forcedEndTzo
  }) : t.format(x, A, {
    forcedTzo: N ? null : C.forcedStartTzo
  })) : "";
}
function Og(M, A, I) {
  var g = M.eventRange.range;
  return {
    isPast: g.end < (I || A.start),
    isFuture: g.start >= (I || A.end),
    isToday: A && _I(A, g.start)
  };
}
function ns(M) {
  var A = ["fc-event"];
  return M.isMirror && A.push("fc-event-mirror"), M.isDraggable && A.push("fc-event-draggable"), (M.isStartResizable || M.isEndResizable) && A.push("fc-event-resizable"), M.isDragging && A.push("fc-event-dragging"), M.isResizing && A.push("fc-event-resizing"), M.isSelected && A.push("fc-event-selected"), M.isStart && A.push("fc-event-start"), M.isEnd && A.push("fc-event-end"), M.isPast && A.push("fc-event-past"), M.isToday && A.push("fc-event-today"), M.isFuture && A.push("fc-event-future"), A;
}
function os(M) {
  return M.instance ? M.instance.instanceId : M.def.defId + ":" + M.range.start.toISOString();
}
function Vj(M, A) {
  var I = M.eventRange, g = I.def, D = I.instance, N = g.url;
  if (N)
    return { href: N };
  var L = A.emitter, t = A.options, j = t.eventInteractive;
  return j == null && (j = g.interactive, j == null && (j = Boolean(L.hasHandlers("eventClick")))), j ? Te(function(S) {
    L.trigger("eventClick", {
      el: S.target,
      event: new XA(A, g, D),
      jsEvent: S,
      view: A.viewApi
    });
  }) : {};
}
var ls = {
  start: f,
  end: f,
  allDay: Boolean
};
function ss(M, A, I) {
  var g = cs(M, A), D = g.range;
  if (!D.start)
    return null;
  if (!D.end) {
    if (I == null)
      return null;
    D.end = A.add(D.start, I);
  }
  return g;
}
function cs(M, A) {
  var I = Qj(M, ls), g = I.refined, D = I.extra, N = g.start ? A.createMarkerMeta(g.start) : null, L = g.end ? A.createMarkerMeta(g.end) : null, t = g.allDay;
  return t == null && (t = N && N.isTimeUnspecified && (!L || L.isTimeUnspecified)), m({ range: {
    start: N ? N.marker : null,
    end: L ? L.marker : null
  }, allDay: t }, D);
}
function zs(M, A) {
  return m(m({}, re(M.range, A, M.allDay)), { allDay: M.allDay });
}
function Ye(M, A, I) {
  return m(m({}, re(M, A, I)), { timeZone: A.timeZone });
}
function re(M, A, I) {
  return {
    start: A.toDate(M.start),
    end: A.toDate(M.end),
    startStr: A.formatIso(M.start, { omitTime: I }),
    endStr: A.formatIso(M.end, { omitTime: I })
  };
}
function Ys(M, A, I) {
  var g = oe({ editable: !1 }, I), D = qt(
    g.refined,
    g.extra,
    "",
    M.allDay,
    !0,
    I
  );
  return {
    def: D,
    ui: ce(D, A),
    instance: bj(D.defId, M.range),
    range: M.range,
    isStart: !0,
    isEnd: !0
  };
}
function rs(M, A, I) {
  I.emitter.trigger("select", m(m({}, Us(M, I)), { jsEvent: A ? A.origEvent : null, view: I.viewApi || I.calendarApi.view }));
}
function ds(M, A) {
  A.emitter.trigger("unselect", {
    jsEvent: M ? M.origEvent : null,
    view: A.viewApi || A.calendarApi.view
  });
}
function Us(M, A) {
  for (var I = {}, g = 0, D = A.pluginHooks.dateSpanTransforms; g < D.length; g++) {
    var N = D[g];
    m(I, N(M, A));
  }
  return m(I, zs(M, A.dateEnv)), I;
}
function J4(M, A, I) {
  var g = I.dateEnv, D = I.options, N = A;
  return M ? (N = ZM(N), N = g.add(N, D.defaultAllDayEventDuration)) : N = g.add(N, D.defaultTimedEventDuration), N;
}
function ms(M, A, I, g) {
  var D = se(M.defs, A), N = Ig();
  for (var L in M.defs) {
    var t = M.defs[L];
    N.defs[L] = Os(t, D[L], I, g);
  }
  for (var j in M.instances) {
    var S = M.instances[j], t = N.defs[S.defId];
    N.instances[j] = hs(S, t, D[S.defId], I, g);
  }
  return N;
}
function Os(M, A, I, g) {
  var D = I.standardProps || {};
  D.hasEnd == null && A.durationEditable && (I.startDelta || I.endDelta) && (D.hasEnd = !0);
  var N = m(m(m({}, M), D), { ui: m(m({}, M.ui), D.ui) });
  I.extendedProps && (N.extendedProps = m(m({}, N.extendedProps), I.extendedProps));
  for (var L = 0, t = g.pluginHooks.eventDefMutationAppliers; L < t.length; L++) {
    var j = t[L];
    j(N, I, g);
  }
  return !N.hasEnd && g.options.forceEventDuration && (N.hasEnd = !0), N;
}
function hs(M, A, I, g, D) {
  var N = D.dateEnv, L = g.standardProps && g.standardProps.allDay === !0, t = g.standardProps && g.standardProps.hasEnd === !1, j = m({}, M);
  return L && (j.range = le(j.range)), g.datesDelta && I.startEditable && (j.range = {
    start: N.add(j.range.start, g.datesDelta),
    end: N.add(j.range.end, g.datesDelta)
  }), g.startDelta && I.durationEditable && (j.range = {
    start: N.add(j.range.start, g.startDelta),
    end: j.range.end
  }), g.endDelta && I.durationEditable && (j.range = {
    start: j.range.start,
    end: N.add(j.range.end, g.endDelta)
  }), t && (j.range = {
    start: j.range.start,
    end: J4(A.allDay, j.range.start, D)
  }), A.allDay && (j.range = {
    start: ZM(j.range.start),
    end: ZM(j.range.end)
  }), j.range.end < j.range.start && (j.range.end = J4(A.allDay, j.range.start, D)), j;
}
var bs = function() {
  function M(A, I, g) {
    this.type = A, this.getCurrentData = I, this.dateEnv = g;
  }
  return Object.defineProperty(M.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), M.prototype.getOption = function(A) {
    return this.getCurrentData().options[A];
  }, M;
}(), Ws = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: f,
  eventDataTransform: f,
  success: f,
  failure: f
};
function de(M, A, I) {
  I === void 0 && (I = Ue(A));
  var g;
  if (typeof M == "string" ? g = { url: M } : typeof M == "function" || Array.isArray(M) ? g = { events: M } : typeof M == "object" && M && (g = M), g) {
    var D = Qj(g, I), N = D.refined, L = D.extra, t = ks(N, A);
    if (t)
      return {
        _raw: M,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: N.defaultAllDay,
        eventDataTransform: N.eventDataTransform,
        success: N.success,
        failure: N.failure,
        publicId: N.id || "",
        sourceId: qg(),
        sourceDefId: t.sourceDefId,
        meta: t.meta,
        ui: _N(N, A),
        extendedProps: L
      };
  }
  return null;
}
function Ue(M) {
  return m(m(m({}, HN), Ws), M.pluginHooks.eventSourceRefiners);
}
function ks(M, A) {
  for (var I = A.pluginHooks.eventSourceDefs, g = I.length - 1; g >= 0; g -= 1) {
    var D = I[g], N = D.parseMeta(M);
    if (N)
      return { sourceDefId: g, meta: N };
  }
  return null;
}
function ps(M, A) {
  switch (A.type) {
    case "CHANGE_DATE":
      return A.dateMarker;
    default:
      return M;
  }
}
function Qs(M, A) {
  var I = M.initialDate;
  return I != null ? A.createMarker(I) : JD(M.now, A);
}
function JD(M, A) {
  return typeof M == "function" && (M = M()), M == null ? A.createNowMarker() : A.createMarker(M);
}
var vs = function() {
  function M() {
  }
  return M.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  }, M.prototype.dispatch = function(A) {
    return this.currentDataManager.dispatch(A);
  }, Object.defineProperty(M.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), M.prototype.batchRendering = function(A) {
    A();
  }, M.prototype.updateSize = function() {
    this.trigger("_resize", !0);
  }, M.prototype.setOption = function(A, I) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: A,
      rawOptionValue: I
    });
  }, M.prototype.getOption = function(A) {
    return this.currentDataManager.currentCalendarOptionsInput[A];
  }, M.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }, M.prototype.on = function(A, I) {
    var g = this.currentDataManager;
    g.currentCalendarOptionsRefiners[A] ? g.emitter.on(A, I) : console.warn("Unknown listener name '" + A + "'");
  }, M.prototype.off = function(A, I) {
    this.currentDataManager.emitter.off(A, I);
  }, M.prototype.trigger = function(A) {
    for (var I, g = [], D = 1; D < arguments.length; D++)
      g[D - 1] = arguments[D];
    (I = this.currentDataManager.emitter).trigger.apply(I, HM([A], g));
  }, M.prototype.changeView = function(A, I) {
    var g = this;
    this.batchRendering(function() {
      if (g.unselect(), I)
        if (I.start && I.end)
          g.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: A
          }), g.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: I
          });
        else {
          var D = g.getCurrentData().dateEnv;
          g.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: A,
            dateMarker: D.createMarker(I)
          });
        }
      else
        g.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: A
        });
    });
  }, M.prototype.zoomTo = function(A, I) {
    var g = this.getCurrentData(), D;
    I = I || "day", D = g.viewSpecs[I] || this.getUnitViewSpec(I), this.unselect(), D ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: D.type,
      dateMarker: A
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: A
    });
  }, M.prototype.getUnitViewSpec = function(A) {
    var I = this.getCurrentData(), g = I.viewSpecs, D = I.toolbarConfig, N = [].concat(D.header ? D.header.viewsWithButtons : [], D.footer ? D.footer.viewsWithButtons : []), L, t;
    for (var j in g)
      N.push(j);
    for (L = 0; L < N.length; L += 1)
      if (t = g[N[L]], t && t.singleUnit === A)
        return t;
    return null;
  }, M.prototype.prev = function() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }, M.prototype.next = function() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }, M.prototype.prevYear = function() {
    var A = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: A.dateEnv.addYears(A.currentDate, -1)
    });
  }, M.prototype.nextYear = function() {
    var A = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: A.dateEnv.addYears(A.currentDate, 1)
    });
  }, M.prototype.today = function() {
    var A = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: JD(A.calendarOptions.now, A.dateEnv)
    });
  }, M.prototype.gotoDate = function(A) {
    var I = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: I.dateEnv.createMarker(A)
    });
  }, M.prototype.incrementDate = function(A) {
    var I = this.getCurrentData(), g = pM(A);
    g && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: I.dateEnv.add(I.currentDate, g)
    }));
  }, M.prototype.getDate = function() {
    var A = this.getCurrentData();
    return A.dateEnv.toDate(A.currentDate);
  }, M.prototype.formatDate = function(A, I) {
    var g = this.getCurrentData().dateEnv;
    return g.format(g.createMarker(A), AA(I));
  }, M.prototype.formatRange = function(A, I, g) {
    var D = this.getCurrentData().dateEnv;
    return D.formatRange(D.createMarker(A), D.createMarker(I), AA(g), g);
  }, M.prototype.formatIso = function(A, I) {
    var g = this.getCurrentData().dateEnv;
    return g.formatIso(g.createMarker(A), { omitTime: I });
  }, M.prototype.select = function(A, I) {
    var g;
    I == null ? A.start != null ? g = A : g = {
      start: A,
      end: null
    } : g = {
      start: A,
      end: I
    };
    var D = this.getCurrentData(), N = ss(g, D.dateEnv, pM({ days: 1 }));
    N && (this.dispatch({ type: "SELECT_DATES", selection: N }), rs(N, null, D));
  }, M.prototype.unselect = function(A) {
    var I = this.getCurrentData();
    I.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), ds(A, I));
  }, M.prototype.addEvent = function(A, I) {
    if (A instanceof XA) {
      var g = A._def, D = A._instance, N = this.getCurrentData();
      return N.eventStore.defs[g.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: _t({ def: g, instance: D })
      }), this.triggerEventAdd(A)), A;
    }
    var L = this.getCurrentData(), t;
    if (I instanceof ng)
      t = I.internalEventSource;
    else if (typeof I == "boolean")
      I && (t = kj(L.eventSources)[0]);
    else if (I != null) {
      var j = this.getEventSourceById(I);
      if (!j)
        return console.warn('Could not find an event source with ID "' + I + '"'), null;
      t = j.internalEventSource;
    }
    var S = ne(A, t, L, !1);
    if (S) {
      var u = new XA(L, S.def, S.def.recurringDef ? null : S.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: _t(S)
      }), this.triggerEventAdd(u), u;
    }
    return null;
  }, M.prototype.triggerEventAdd = function(A) {
    var I = this, g = this.getCurrentData().emitter;
    g.trigger("eventAdd", {
      event: A,
      relatedEvents: [],
      revert: function() {
        I.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: me(A)
        });
      }
    });
  }, M.prototype.getEventById = function(A) {
    var I = this.getCurrentData(), g = I.eventStore, D = g.defs, N = g.instances;
    A = String(A);
    for (var L in D) {
      var t = D[L];
      if (t.publicId === A) {
        if (t.recurringDef)
          return new XA(I, t, null);
        for (var j in N) {
          var S = N[j];
          if (S.defId === t.defId)
            return new XA(I, t, S);
        }
      }
    }
    return null;
  }, M.prototype.getEvents = function() {
    var A = this.getCurrentData();
    return Zj(A.eventStore, A);
  }, M.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, M.prototype.getEventSources = function() {
    var A = this.getCurrentData(), I = A.eventSources, g = [];
    for (var D in I)
      g.push(new ng(A, I[D]));
    return g;
  }, M.prototype.getEventSourceById = function(A) {
    var I = this.getCurrentData(), g = I.eventSources;
    A = String(A);
    for (var D in g)
      if (g[D].publicId === A)
        return new ng(I, g[D]);
    return null;
  }, M.prototype.addEventSource = function(A) {
    var I = this.getCurrentData();
    if (A instanceof ng)
      return I.eventSources[A.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [A.internalEventSource]
      }), A;
    var g = de(A, I);
    return g ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [g] }), new ng(I, g)) : null;
  }, M.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, M.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, M.prototype.scrollToTime = function(A) {
    var I = pM(A);
    I && this.trigger("_scrollRequest", { time: I });
  }, M;
}(), XA = function() {
  function M(A, I, g) {
    this._context = A, this._def = I, this._instance = g || null;
  }
  return M.prototype.setProp = function(A, I) {
    var g, D;
    if (A in ye)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (A === "id")
      I = zN[A](I), this.mutate({
        standardProps: { publicId: I }
      });
    else if (A in zN)
      I = zN[A](I), this.mutate({
        standardProps: (g = {}, g[A] = I, g)
      });
    else if (A in HN) {
      var N = HN[A](I);
      A === "color" ? N = { backgroundColor: I, borderColor: I } : A === "editable" ? N = { startEditable: I, durationEditable: I } : N = (D = {}, D[A] = I, D), this.mutate({
        standardProps: { ui: N }
      });
    } else
      console.warn("Could not set prop '" + A + "'. Use setExtendedProp instead.");
  }, M.prototype.setExtendedProp = function(A, I) {
    var g;
    this.mutate({
      extendedProps: (g = {}, g[A] = I, g)
    });
  }, M.prototype.setStart = function(A, I) {
    I === void 0 && (I = {});
    var g = this._context.dateEnv, D = g.createMarker(A);
    if (D && this._instance) {
      var N = this._instance.range, L = AN(N.start, D, g, I.granularity);
      I.maintainDuration ? this.mutate({ datesDelta: L }) : this.mutate({ startDelta: L });
    }
  }, M.prototype.setEnd = function(A, I) {
    I === void 0 && (I = {});
    var g = this._context.dateEnv, D;
    if (!(A != null && (D = g.createMarker(A), !D)) && this._instance)
      if (D) {
        var N = AN(this._instance.range.end, D, g, I.granularity);
        this.mutate({ endDelta: N });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, M.prototype.setDates = function(A, I, g) {
    g === void 0 && (g = {});
    var D = this._context.dateEnv, N = { allDay: g.allDay }, L = D.createMarker(A), t;
    if (!!L && !(I != null && (t = D.createMarker(I), !t)) && this._instance) {
      var j = this._instance.range;
      g.allDay === !0 && (j = le(j));
      var S = AN(j.start, L, D, g.granularity);
      if (t) {
        var u = AN(j.end, t, D, g.granularity);
        Wl(S, u) ? this.mutate({ datesDelta: S, standardProps: N }) : this.mutate({ startDelta: S, endDelta: u, standardProps: N });
      } else
        N.hasEnd = !1, this.mutate({ datesDelta: S, standardProps: N });
    }
  }, M.prototype.moveStart = function(A) {
    var I = pM(A);
    I && this.mutate({ startDelta: I });
  }, M.prototype.moveEnd = function(A) {
    var I = pM(A);
    I && this.mutate({ endDelta: I });
  }, M.prototype.moveDates = function(A) {
    var I = pM(A);
    I && this.mutate({ datesDelta: I });
  }, M.prototype.setAllDay = function(A, I) {
    I === void 0 && (I = {});
    var g = { allDay: A }, D = I.maintainDuration;
    D == null && (D = this._context.options.allDayMaintainDuration), this._def.allDay !== A && (g.hasEnd = D), this.mutate({ standardProps: g });
  }, M.prototype.formatRange = function(A) {
    var I = this._context.dateEnv, g = this._instance, D = AA(A);
    return this._def.hasEnd ? I.formatRange(g.range.start, g.range.end, D, {
      forcedStartTzo: g.forcedStartTzo,
      forcedEndTzo: g.forcedEndTzo
    }) : I.format(g.range.start, D, {
      forcedTzo: g.forcedStartTzo
    });
  }, M.prototype.mutate = function(A) {
    var I = this._instance;
    if (I) {
      var g = this._def, D = this._context, N = D.getCurrentData().eventStore, L = As(N, I.instanceId), t = {
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
      L = ms(L, t, A, D);
      var j = new M(D, g, I);
      this._def = L.defs[g.defId], this._instance = L.instances[I.instanceId], D.dispatch({
        type: "MERGE_EVENTS",
        eventStore: L
      }), D.emitter.trigger("eventChange", {
        oldEvent: j,
        event: this,
        relatedEvents: Zj(L, D, I),
        revert: function() {
          D.dispatch({
            type: "RESET_EVENTS",
            eventStore: N
          });
        }
      });
    }
  }, M.prototype.remove = function() {
    var A = this._context, I = me(this);
    A.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: I
    }), A.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        A.dispatch({
          type: "MERGE_EVENTS",
          eventStore: I
        });
      }
    });
  }, Object.defineProperty(M.prototype, "source", {
    get: function() {
      var A = this._def.sourceId;
      return A ? new ng(this._context, this._context.getCurrentData().eventSources[A]) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "startStr", {
    get: function() {
      var A = this._instance;
      return A ? this._context.dateEnv.formatIso(A.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: A.forcedStartTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "endStr", {
    get: function() {
      var A = this._instance;
      return A && this._def.hasEnd ? this._context.dateEnv.formatIso(A.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: A.forcedEndTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(M.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: !1,
    configurable: !0
  }), M.prototype.toPlainObject = function(A) {
    A === void 0 && (A = {});
    var I = this._def, g = I.ui, D = this, N = D.startStr, L = D.endStr, t = {};
    return I.title && (t.title = I.title), N && (t.start = N), L && (t.end = L), I.publicId && (t.id = I.publicId), I.groupId && (t.groupId = I.groupId), I.url && (t.url = I.url), g.display && g.display !== "auto" && (t.display = g.display), A.collapseColor && g.backgroundColor && g.backgroundColor === g.borderColor ? t.color = g.backgroundColor : (g.backgroundColor && (t.backgroundColor = g.backgroundColor), g.borderColor && (t.borderColor = g.borderColor)), g.textColor && (t.textColor = g.textColor), g.classNames.length && (t.classNames = g.classNames), Object.keys(I.extendedProps).length && (A.collapseExtendedProps ? m(t, I.extendedProps) : t.extendedProps = I.extendedProps), t;
  }, M.prototype.toJSON = function() {
    return this.toPlainObject();
  }, M;
}();
function me(M) {
  var A, I, g = M._def, D = M._instance;
  return {
    defs: (A = {}, A[g.defId] = g, A),
    instances: D ? (I = {}, I[D.instanceId] = D, I) : {}
  };
}
function Zj(M, A, I) {
  var g = M.defs, D = M.instances, N = [], L = I ? I.instanceId : "";
  for (var t in D) {
    var j = D[t], S = g[j.defId];
    j.instanceId !== L && N.push(new XA(A, S, j));
  }
  return N;
}
var Oe = {};
function Gs(M, A) {
  Oe[M] = A;
}
function fs(M) {
  return new Oe[M]();
}
var Js = function() {
  function M() {
  }
  return M.prototype.getMarkerYear = function(A) {
    return A.getUTCFullYear();
  }, M.prototype.getMarkerMonth = function(A) {
    return A.getUTCMonth();
  }, M.prototype.getMarkerDay = function(A) {
    return A.getUTCDate();
  }, M.prototype.arrayToMarker = function(A) {
    return xA(A);
  }, M.prototype.markerToArray = function(A) {
    return dI(A);
  }, M;
}();
Gs("gregory", Js);
var Vs = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Zs(M) {
  var A = Vs.exec(M);
  if (A) {
    var I = new Date(Date.UTC(Number(A[1]), A[3] ? Number(A[3]) - 1 : 0, Number(A[5] || 1), Number(A[7] || 0), Number(A[8] || 0), Number(A[10] || 0), A[12] ? Number("0." + A[12]) * 1e3 : 0));
    if (xe(I)) {
      var g = null;
      return A[13] && (g = (A[15] === "-" ? -1 : 1) * (Number(A[16] || 0) * 60 + Number(A[18] || 0))), {
        marker: I,
        isTimeUnspecified: !A[6],
        timeZoneOffset: g
      };
    }
  }
  return null;
}
var Bs = function() {
  function M(A) {
    var I = this.timeZone = A.timeZone, g = I !== "local" && I !== "UTC";
    A.namedTimeZoneImpl && g && (this.namedTimeZoneImpl = new A.namedTimeZoneImpl(I)), this.canComputeOffset = Boolean(!g || this.namedTimeZoneImpl), this.calendarSystem = fs(A.calendarSystem), this.locale = A.locale, this.weekDow = A.locale.week.dow, this.weekDoy = A.locale.week.doy, A.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof A.firstDay == "number" && (this.weekDow = A.firstDay), typeof A.weekNumberCalculation == "function" && (this.weekNumberFunc = A.weekNumberCalculation), this.weekText = A.weekText != null ? A.weekText : A.locale.options.weekText, this.weekTextLong = (A.weekTextLong != null ? A.weekTextLong : A.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = A.cmdFormatter, this.defaultSeparator = A.defaultSeparator;
  }
  return M.prototype.createMarker = function(A) {
    var I = this.createMarkerMeta(A);
    return I === null ? null : I.marker;
  }, M.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : xA(U4(new Date()));
  }, M.prototype.createMarkerMeta = function(A) {
    if (typeof A == "string")
      return this.parse(A);
    var I = null;
    return typeof A == "number" ? I = this.timestampToMarker(A) : A instanceof Date ? (A = A.valueOf(), isNaN(A) || (I = this.timestampToMarker(A))) : Array.isArray(A) && (I = xA(A)), I === null || !xe(I) ? null : { marker: I, isTimeUnspecified: !1, forcedTzo: null };
  }, M.prototype.parse = function(A) {
    var I = Zs(A);
    if (I === null)
      return null;
    var g = I.marker, D = null;
    return I.timeZoneOffset !== null && (this.canComputeOffset ? g = this.timestampToMarker(g.valueOf() - I.timeZoneOffset * 60 * 1e3) : D = I.timeZoneOffset), { marker: g, isTimeUnspecified: I.isTimeUnspecified, forcedTzo: D };
  }, M.prototype.getYear = function(A) {
    return this.calendarSystem.getMarkerYear(A);
  }, M.prototype.getMonth = function(A) {
    return this.calendarSystem.getMarkerMonth(A);
  }, M.prototype.add = function(A, I) {
    var g = this.calendarSystem.markerToArray(A);
    return g[0] += I.years, g[1] += I.months, g[2] += I.days, g[6] += I.milliseconds, this.calendarSystem.arrayToMarker(g);
  }, M.prototype.subtract = function(A, I) {
    var g = this.calendarSystem.markerToArray(A);
    return g[0] -= I.years, g[1] -= I.months, g[2] -= I.days, g[6] -= I.milliseconds, this.calendarSystem.arrayToMarker(g);
  }, M.prototype.addYears = function(A, I) {
    var g = this.calendarSystem.markerToArray(A);
    return g[0] += I, this.calendarSystem.arrayToMarker(g);
  }, M.prototype.addMonths = function(A, I) {
    var g = this.calendarSystem.markerToArray(A);
    return g[1] += I, this.calendarSystem.arrayToMarker(g);
  }, M.prototype.diffWholeYears = function(A, I) {
    var g = this.calendarSystem;
    return UI(A) === UI(I) && g.getMarkerDay(A) === g.getMarkerDay(I) && g.getMarkerMonth(A) === g.getMarkerMonth(I) ? g.getMarkerYear(I) - g.getMarkerYear(A) : null;
  }, M.prototype.diffWholeMonths = function(A, I) {
    var g = this.calendarSystem;
    return UI(A) === UI(I) && g.getMarkerDay(A) === g.getMarkerDay(I) ? g.getMarkerMonth(I) - g.getMarkerMonth(A) + (g.getMarkerYear(I) - g.getMarkerYear(A)) * 12 : null;
  }, M.prototype.greatestWholeUnit = function(A, I) {
    var g = this.diffWholeYears(A, I);
    return g !== null ? { unit: "year", value: g } : (g = this.diffWholeMonths(A, I), g !== null ? { unit: "month", value: g } : (g = ll(A, I), g !== null ? { unit: "week", value: g } : (g = BN(A, I), g !== null ? { unit: "day", value: g } : (g = al(A, I), tt(g) ? { unit: "hour", value: g } : (g = yl(A, I), tt(g) ? { unit: "minute", value: g } : (g = nl(A, I), tt(g) ? { unit: "second", value: g } : { unit: "millisecond", value: I.valueOf() - A.valueOf() }))))));
  }, M.prototype.countDurationsBetween = function(A, I, g) {
    var D;
    return g.years && (D = this.diffWholeYears(A, I), D !== null) ? D / pl(g) : g.months && (D = this.diffWholeMonths(A, I), D !== null) ? D / Ql(g) : g.days && (D = BN(A, I), D !== null) ? D / mg(g) : (I.valueOf() - A.valueOf()) / hD(g);
  }, M.prototype.startOf = function(A, I) {
    return I === "year" ? this.startOfYear(A) : I === "month" ? this.startOfMonth(A) : I === "week" ? this.startOfWeek(A) : I === "day" ? ZM(A) : I === "hour" ? sl(A) : I === "minute" ? cl(A) : I === "second" ? zl(A) : null;
  }, M.prototype.startOfYear = function(A) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(A)
    ]);
  }, M.prototype.startOfMonth = function(A) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(A),
      this.calendarSystem.getMarkerMonth(A)
    ]);
  }, M.prototype.startOfWeek = function(A) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(A),
      this.calendarSystem.getMarkerMonth(A),
      A.getUTCDate() - (A.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }, M.prototype.computeWeekNumber = function(A) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(A)) : Yl(A, this.weekDow, this.weekDoy);
  }, M.prototype.format = function(A, I, g) {
    return g === void 0 && (g = {}), I.format({
      marker: A,
      timeZoneOffset: g.forcedTzo != null ? g.forcedTzo : this.offsetForMarker(A)
    }, this);
  }, M.prototype.formatRange = function(A, I, g, D) {
    return D === void 0 && (D = {}), D.isEndExclusive && (I = Ag(I, -1)), g.formatRange({
      marker: A,
      timeZoneOffset: D.forcedStartTzo != null ? D.forcedStartTzo : this.offsetForMarker(A)
    }, {
      marker: I,
      timeZoneOffset: D.forcedEndTzo != null ? D.forcedEndTzo : this.offsetForMarker(I)
    }, this, D.defaultSeparator);
  }, M.prototype.formatIso = function(A, I) {
    I === void 0 && (I = {});
    var g = null;
    return I.omitTimeZoneOffset || (I.forcedTzo != null ? g = I.forcedTzo : g = this.offsetForMarker(A)), vl(A, g, I.omitTime);
  }, M.prototype.timestampToMarker = function(A) {
    return this.timeZone === "local" ? xA(U4(new Date(A))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(A) : xA(this.namedTimeZoneImpl.timestampToArray(A));
  }, M.prototype.offsetForMarker = function(A) {
    return this.timeZone === "local" ? -m4(dI(A)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(dI(A)) : null;
  }, M.prototype.toDate = function(A, I) {
    return this.timeZone === "local" ? m4(dI(A)) : this.timeZone === "UTC" ? new Date(A.valueOf()) : this.namedTimeZoneImpl ? new Date(A.valueOf() - this.namedTimeZoneImpl.offsetForArray(dI(A)) * 1e3 * 60) : new Date(A.valueOf() - (I || 0));
  }, M;
}(), Ps = [], he = {
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
}, be = m(m({}, he), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(M, A) {
      return A === "day" ? "Today" : "This " + M;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(M) {
    return "Show " + M + " more event" + (M === 1 ? "" : "s");
  }
});
function Fs(M) {
  for (var A = M.length > 0 ? M[0].code : "en", I = Ps.concat(M), g = {
    en: be
  }, D = 0, N = I; D < N.length; D++) {
    var L = N[D];
    g[L.code] = L;
  }
  return {
    map: g,
    defaultCode: A
  };
}
function We(M, A) {
  return typeof M == "object" && !Array.isArray(M) ? ke(M.code, [M.code], M) : Xs(M, A);
}
function Xs(M, A) {
  var I = [].concat(M || []), g = Rs(I, A) || be;
  return ke(M, I, g);
}
function Rs(M, A) {
  for (var I = 0; I < M.length; I += 1)
    for (var g = M[I].toLocaleLowerCase().split("-"), D = g.length; D > 0; D -= 1) {
      var N = g.slice(0, D).join("-");
      if (A[N])
        return A[N];
    }
  return null;
}
function ke(M, A, I) {
  var g = Wj([he, I], ["buttonText"]);
  delete g.code;
  var D = g.week;
  return delete g.week, {
    codeArg: M,
    codes: A,
    week: D,
    simpleNumberFormat: new Intl.NumberFormat(M),
    options: g
  };
}
var Hs = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function _s(M, A) {
  return RN($s(M), null, A);
}
function $s(M) {
  var A;
  return M === !0 ? A = [{}] : Array.isArray(M) ? A = M.filter(function(I) {
    return I.daysOfWeek;
  }) : typeof M == "object" && M ? A = [M] : A = [], A = A.map(function(I) {
    return m(m({}, Hs), I);
  }), A;
}
function qs(M, A) {
  var I = {
    left: Math.max(M.left, A.left),
    right: Math.min(M.right, A.right),
    top: Math.max(M.top, A.top),
    bottom: Math.min(M.bottom, A.bottom)
  };
  return I.left < I.right && I.top < I.bottom ? I : !1;
}
var it;
function pe() {
  return it == null && (it = Ks()), it;
}
function Ks() {
  if (typeof document > "u")
    return !0;
  var M = document.createElement("div");
  M.style.position = "absolute", M.style.top = "0px", M.style.left = "0px", M.innerHTML = "<table><tr><td><div></div></td></tr></table>", M.querySelector("table").style.height = "100px", M.querySelector("div").style.height = "100%", document.body.appendChild(M);
  var A = M.querySelector("div"), I = A.offsetHeight > 0;
  return document.body.removeChild(M), I;
}
function Bj(M, A, I, g) {
  return {
    dow: M.getUTCDay(),
    isDisabled: Boolean(g && !_I(g.activeRange, M)),
    isOther: Boolean(g && !_I(g.currentRange, M)),
    isToday: Boolean(A && _I(A, M)),
    isPast: Boolean(I ? M < I : A ? M < A.start : !1),
    isFuture: Boolean(I ? M > I : A ? M >= A.end : !1)
  };
}
function nL(M, A) {
  var I = [
    "fc-day",
    "fc-day-" + Tl[M.dow]
  ];
  return M.isDisabled ? I.push("fc-day-disabled") : (M.isToday && (I.push("fc-day-today"), I.push(A.getClass("today"))), M.isPast && I.push("fc-day-past"), M.isFuture && I.push("fc-day-future"), M.isOther && I.push("fc-day-other")), I;
}
var Mc = AA({ year: "numeric", month: "long", day: "numeric" }), Ac = AA({ week: "long" });
function bD(M, A, I, g) {
  I === void 0 && (I = "day"), g === void 0 && (g = !0);
  var D = M.dateEnv, N = M.options, L = M.calendarApi, t = D.format(A, I === "week" ? Ac : Mc);
  if (N.navLinks) {
    var j = D.toDate(A), S = function(u) {
      var i = I === "day" ? N.navLinkDayClick : I === "week" ? N.navLinkWeekClick : null;
      typeof i == "function" ? i.call(L, D.toDate(A), u) : (typeof i == "string" && (I = i), L.zoomTo(A, I));
    };
    return m({ title: oD(N.navLinkHint, [t, j], t), "data-navlink": "" }, g ? Ee(S) : { onClick: S });
  }
  return { "aria-label": t };
}
var et;
function Ic() {
  return et || (et = gc()), et;
}
function gc() {
  var M = document.createElement("div");
  M.style.overflow = "scroll", M.style.position = "absolute", M.style.top = "-9999px", M.style.left = "-9999px", document.body.appendChild(M);
  var A = Dc(M);
  return document.body.removeChild(M), A;
}
function Dc(M) {
  return {
    x: M.offsetHeight - M.clientHeight,
    y: M.offsetWidth - M.clientWidth
  };
}
function Nc(M) {
  for (var A = Lc(M), I = M.getBoundingClientRect(), g = 0, D = A; g < D.length; g++) {
    var N = D[g], L = qs(I, N.getBoundingClientRect());
    if (L)
      I = L;
    else
      return null;
  }
  return I;
}
function Lc(M) {
  for (var A = []; M instanceof HTMLElement; ) {
    var I = window.getComputedStyle(M);
    if (I.position === "fixed")
      break;
    /(auto|scroll)/.test(I.overflow + I.overflowY + I.overflowX) && A.push(M), M = M.parentNode;
  }
  return A;
}
function tc(M, A, I) {
  var g = !1, D = function() {
    g || (g = !0, A.apply(this, arguments));
  }, N = function() {
    g || (g = !0, I && I.apply(this, arguments));
  }, L = M(D, N);
  L && typeof L.then == "function" && L.then(D, N);
}
var jc = function() {
  function M() {
    this.handlers = {}, this.thisContext = null;
  }
  return M.prototype.setThisContext = function(A) {
    this.thisContext = A;
  }, M.prototype.setOptions = function(A) {
    this.options = A;
  }, M.prototype.on = function(A, I) {
    uc(this.handlers, A, I);
  }, M.prototype.off = function(A, I) {
    Sc(this.handlers, A, I);
  }, M.prototype.trigger = function(A) {
    for (var I = [], g = 1; g < arguments.length; g++)
      I[g - 1] = arguments[g];
    for (var D = this.handlers[A] || [], N = this.options && this.options[A], L = [].concat(N || [], D), t = 0, j = L; t < j.length; t++) {
      var S = j[t];
      S.apply(this.thisContext, I);
    }
  }, M.prototype.hasHandlers = function(A) {
    return Boolean(this.handlers[A] && this.handlers[A].length || this.options && this.options[A]);
  }, M;
}();
function uc(M, A, I) {
  (M[A] || (M[A] = [])).push(I);
}
function Sc(M, A, I) {
  I ? M[A] && (M[A] = M[A].filter(function(g) {
    return g !== I;
  })) : delete M[A];
}
var Aj = function() {
  function M(A, I, g, D) {
    this.els = I;
    var N = this.originClientRect = A.getBoundingClientRect();
    g && this.buildElHorizontals(N.left), D && this.buildElVerticals(N.top);
  }
  return M.prototype.buildElHorizontals = function(A) {
    for (var I = [], g = [], D = 0, N = this.els; D < N.length; D++) {
      var L = N[D], t = L.getBoundingClientRect();
      I.push(t.left - A), g.push(t.right - A);
    }
    this.lefts = I, this.rights = g;
  }, M.prototype.buildElVerticals = function(A) {
    for (var I = [], g = [], D = 0, N = this.els; D < N.length; D++) {
      var L = N[D], t = L.getBoundingClientRect();
      I.push(t.top - A), g.push(t.bottom - A);
    }
    this.tops = I, this.bottoms = g;
  }, M.prototype.leftToIndex = function(A) {
    var I = this, g = I.lefts, D = I.rights, N = g.length, L;
    for (L = 0; L < N; L += 1)
      if (A >= g[L] && A < D[L])
        return L;
  }, M.prototype.topToIndex = function(A) {
    var I = this, g = I.tops, D = I.bottoms, N = g.length, L;
    for (L = 0; L < N; L += 1)
      if (A >= g[L] && A < D[L])
        return L;
  }, M.prototype.getWidth = function(A) {
    return this.rights[A] - this.lefts[A];
  }, M.prototype.getHeight = function(A) {
    return this.bottoms[A] - this.tops[A];
  }, M;
}(), Qe = function() {
  function M() {
  }
  return M.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  }, M.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  }, M.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  }, M.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  }, M.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  }, M.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }, M.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  }, M.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }, M;
}();
(function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this) || this;
    return g.el = I, g;
  }
  return A.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  }, A.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  }, A.prototype.setScrollTop = function(I) {
    this.el.scrollTop = I;
  }, A.prototype.setScrollLeft = function(I) {
    this.el.scrollLeft = I;
  }, A.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  }, A.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  }, A.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  }, A.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  }, A;
})(Qe);
(function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.getScrollTop = function() {
    return window.pageYOffset;
  }, A.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  }, A.prototype.setScrollTop = function(I) {
    window.scroll(window.pageXOffset, I);
  }, A.prototype.setScrollLeft = function(I) {
    window.scroll(I, window.pageYOffset);
  }, A.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  }, A.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  }, A.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  }, A.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  }, A;
})(Qe);
var VD = function() {
  function M(A) {
    this.iconOverrideOption && this.setIconOverride(A[this.iconOverrideOption]);
  }
  return M.prototype.setIconOverride = function(A) {
    var I, g;
    if (typeof A == "object" && A) {
      I = m({}, this.iconClasses);
      for (g in A)
        I[g] = this.applyIconOverridePrefix(A[g]);
      this.iconClasses = I;
    } else
      A === !1 && (this.iconClasses = {});
  }, M.prototype.applyIconOverridePrefix = function(A) {
    var I = this.iconOverridePrefix;
    return I && A.indexOf(I) !== 0 && (A = I + A), A;
  }, M.prototype.getClass = function(A) {
    return this.classes[A] || "";
  }, M.prototype.getIconClass = function(A, I) {
    var g;
    return I && this.rtlIconClasses ? g = this.rtlIconClasses[A] || this.iconClasses[A] : g = this.iconClasses[A], g ? this.baseIconClass + " " + g : "";
  }, M.prototype.getCustomButtonIconClass = function(A) {
    var I;
    return this.iconOverrideCustomButtonOption && (I = A[this.iconOverrideCustomButtonOption], I) ? this.baseIconClass + " " + this.applyIconOverridePrefix(I) : "";
  }, M;
}();
VD.prototype.classes = {};
VD.prototype.iconClasses = {};
VD.prototype.baseIconClass = "";
VD.prototype.iconOverridePrefix = "";
var ic = function() {
  function M(A, I, g, D) {
    var N = this;
    this.execFunc = A, this.emitter = I, this.scrollTime = g, this.scrollTimeReset = D, this.handleScrollRequest = function(L) {
      N.queuedRequest = m({}, N.queuedRequest || {}, L), N.drain();
    }, I.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  return M.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }, M.prototype.update = function(A) {
    A && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }, M.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }, M.prototype.drain = function() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }, M;
}(), Lg = ee({});
function ec(M, A, I, g, D, N, L, t, j, S, u, i, C) {
  return {
    dateEnv: D,
    options: I,
    pluginHooks: L,
    emitter: S,
    dispatch: t,
    getCurrentData: j,
    calendarApi: u,
    viewSpec: M,
    viewApi: A,
    dateProfileGenerator: g,
    theme: N,
    isRtl: I.direction === "rtl",
    addResizeHandler: function(w) {
      S.on("_resize", w);
    },
    removeResizeHandler: function(w) {
      S.off("_resize", w);
    },
    createScrollResponder: function(w) {
      return new ic(w, S, pM(I.scrollTime), I.scrollTimeReset);
    },
    registerInteractiveComponent: i,
    unregisterInteractiveComponent: C
  };
}
var oL = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.shouldComponentUpdate = function(I, g) {
    return this.debug && console.log(O4(I, this.props), O4(g, this.state)), !ut(this.props, I, this.propEquality) || !ut(this.state, g, this.stateEquality);
  }, A.prototype.safeSetState = function(I) {
    ut(this.state, m(m({}, this.state), I), this.stateEquality) || this.setState(I);
  }, A.addPropsEquality = Cc, A.addStateEquality = wc, A.contextType = Lg, A;
}(hj);
oL.prototype.propEquality = {};
oL.prototype.stateEquality = {};
var GM = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.contextType = Lg, A;
}(oL);
function Cc(M) {
  var A = Object.create(this.prototype.propEquality);
  m(A, M), this.prototype.propEquality = A;
}
function wc(M) {
  var A = Object.create(this.prototype.stateEquality);
  m(A, M), this.prototype.stateEquality = A;
}
function CI(M, A) {
  typeof M == "function" ? M(A) : M && (M.current = A);
}
var tg = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.uid = qg(), I;
  }
  return A.prototype.prepareHits = function() {
  }, A.prototype.queryHit = function(I, g, D, N) {
    return null;
  }, A.prototype.isValidSegDownEl = function(I) {
    return !this.props.eventDrag && !this.props.eventResize && !AI(I, ".fc-event-mirror");
  }, A.prototype.isValidDateDownEl = function(I) {
    return !AI(I, ".fc-event:not(.fc-bg-event)") && !AI(I, ".fc-more-link") && !AI(I, "a[data-navlink]") && !AI(I, ".fc-popover");
  }, A;
}(GM);
function aI(M) {
  return {
    id: qg(),
    deps: M.deps || [],
    reducers: M.reducers || [],
    isLoadingFuncs: M.isLoadingFuncs || [],
    contextInit: [].concat(M.contextInit || []),
    eventRefiners: M.eventRefiners || {},
    eventDefMemberAdders: M.eventDefMemberAdders || [],
    eventSourceRefiners: M.eventSourceRefiners || {},
    isDraggableTransformers: M.isDraggableTransformers || [],
    eventDragMutationMassagers: M.eventDragMutationMassagers || [],
    eventDefMutationAppliers: M.eventDefMutationAppliers || [],
    dateSelectionTransformers: M.dateSelectionTransformers || [],
    datePointTransforms: M.datePointTransforms || [],
    dateSpanTransforms: M.dateSpanTransforms || [],
    views: M.views || {},
    viewPropsTransformers: M.viewPropsTransformers || [],
    isPropsValid: M.isPropsValid || null,
    externalDefTransforms: M.externalDefTransforms || [],
    viewContainerAppends: M.viewContainerAppends || [],
    eventDropTransformers: M.eventDropTransformers || [],
    componentInteractions: M.componentInteractions || [],
    calendarInteractions: M.calendarInteractions || [],
    themeClasses: M.themeClasses || {},
    eventSourceDefs: M.eventSourceDefs || [],
    cmdFormatter: M.cmdFormatter,
    recurringTypes: M.recurringTypes || [],
    namedTimeZonedImpl: M.namedTimeZonedImpl,
    initialView: M.initialView || "",
    elementDraggingImpl: M.elementDraggingImpl,
    optionChangeHandlers: M.optionChangeHandlers || {},
    scrollGridImpl: M.scrollGridImpl || null,
    contentTypeHandlers: M.contentTypeHandlers || {},
    listenerRefiners: M.listenerRefiners || {},
    optionRefiners: M.optionRefiners || {},
    propSetHandlers: M.propSetHandlers || {}
  };
}
function Ec(M, A) {
  var I = {}, g = {
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
  function D(N) {
    for (var L = 0, t = N; L < t.length; L++) {
      var j = t[L];
      I[j.id] || (I[j.id] = !0, D(j.deps), g = xc(g, j));
    }
  }
  return M && D(M), D(A), g;
}
function Tc() {
  var M = [], A = [], I;
  return function(g, D) {
    return (!I || !fg(g, M) || !fg(D, A)) && (I = Ec(g, D)), M = g, A = D, I;
  };
}
function xc(M, A) {
  return {
    reducers: M.reducers.concat(A.reducers),
    isLoadingFuncs: M.isLoadingFuncs.concat(A.isLoadingFuncs),
    contextInit: M.contextInit.concat(A.contextInit),
    eventRefiners: m(m({}, M.eventRefiners), A.eventRefiners),
    eventDefMemberAdders: M.eventDefMemberAdders.concat(A.eventDefMemberAdders),
    eventSourceRefiners: m(m({}, M.eventSourceRefiners), A.eventSourceRefiners),
    isDraggableTransformers: M.isDraggableTransformers.concat(A.isDraggableTransformers),
    eventDragMutationMassagers: M.eventDragMutationMassagers.concat(A.eventDragMutationMassagers),
    eventDefMutationAppliers: M.eventDefMutationAppliers.concat(A.eventDefMutationAppliers),
    dateSelectionTransformers: M.dateSelectionTransformers.concat(A.dateSelectionTransformers),
    datePointTransforms: M.datePointTransforms.concat(A.datePointTransforms),
    dateSpanTransforms: M.dateSpanTransforms.concat(A.dateSpanTransforms),
    views: m(m({}, M.views), A.views),
    viewPropsTransformers: M.viewPropsTransformers.concat(A.viewPropsTransformers),
    isPropsValid: A.isPropsValid || M.isPropsValid,
    externalDefTransforms: M.externalDefTransforms.concat(A.externalDefTransforms),
    viewContainerAppends: M.viewContainerAppends.concat(A.viewContainerAppends),
    eventDropTransformers: M.eventDropTransformers.concat(A.eventDropTransformers),
    calendarInteractions: M.calendarInteractions.concat(A.calendarInteractions),
    componentInteractions: M.componentInteractions.concat(A.componentInteractions),
    themeClasses: m(m({}, M.themeClasses), A.themeClasses),
    eventSourceDefs: M.eventSourceDefs.concat(A.eventSourceDefs),
    cmdFormatter: A.cmdFormatter || M.cmdFormatter,
    recurringTypes: M.recurringTypes.concat(A.recurringTypes),
    namedTimeZonedImpl: A.namedTimeZonedImpl || M.namedTimeZonedImpl,
    initialView: M.initialView || A.initialView,
    elementDraggingImpl: M.elementDraggingImpl || A.elementDraggingImpl,
    optionChangeHandlers: m(m({}, M.optionChangeHandlers), A.optionChangeHandlers),
    scrollGridImpl: A.scrollGridImpl || M.scrollGridImpl,
    contentTypeHandlers: m(m({}, M.contentTypeHandlers), A.contentTypeHandlers),
    listenerRefiners: m(m({}, M.listenerRefiners), A.listenerRefiners),
    optionRefiners: m(m({}, M.optionRefiners), A.optionRefiners),
    propSetHandlers: m(m({}, M.propSetHandlers), A.propSetHandlers)
  };
}
var pI = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A;
}(VD);
pI.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
pI.prototype.baseIconClass = "fc-icon";
pI.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
pI.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
pI.prototype.iconOverrideOption = "buttonIcons";
pI.prototype.iconOverrideCustomButtonOption = "icon";
pI.prototype.iconOverridePrefix = "fc-icon-";
function ac(M, A) {
  var I = {}, g;
  for (g in M)
    Ij(g, I, M, A);
  for (g in A)
    Ij(g, I, M, A);
  return I;
}
function Ij(M, A, I, g) {
  if (A[M])
    return A[M];
  var D = yc(M, A, I, g);
  return D && (A[M] = D), D;
}
function yc(M, A, I, g) {
  var D = I[M], N = g[M], L = function(u) {
    return D && D[u] !== null ? D[u] : N && N[u] !== null ? N[u] : null;
  }, t = L("component"), j = L("superType"), S = null;
  if (j) {
    if (j === M)
      throw new Error("Can't have a custom view type that references itself");
    S = Ij(j, A, I, g);
  }
  return !t && S && (t = S.component), t ? {
    type: M,
    component: t,
    defaults: m(m({}, S ? S.defaults : {}), D ? D.rawOptions : {}),
    overrides: m(m({}, S ? S.overrides : {}), N ? N.rawOptions : {})
  } : null;
}
var yI = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = OA(), I.handleRootEl = function(g) {
      CI(I.rootElRef, g), I.props.elRef && CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.hookProps;
    return O(Pj, { hookProps: D, didMount: g.didMount, willUnmount: g.willUnmount, elRef: this.handleRootEl }, function(N) {
      return O(Ge, { hookProps: D, content: g.content, defaultContent: g.defaultContent, backupElRef: I.rootElRef }, function(L, t) {
        return g.children(N, Je(g.classNames, D), L, t);
      });
    });
  }, A;
}(GM), ve = ee(0);
function Ge(M) {
  return O(ve.Consumer, null, function(A) {
    return O(nc, m({ renderId: A }, M));
  });
}
var nc = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.innerElRef = OA(), I;
  }
  return A.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }, A.prototype.componentDidMount = function() {
    this.updateCustomContent();
  }, A.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  }, A.prototype.componentWillUnmount = function() {
    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
  }, A.prototype.renderInnerContent = function() {
    var I = this.customContentInfo, g = this.getInnerContent(), D = this.getContentMeta(g);
    return !I || I.contentKey !== D.contentKey ? (I && (I.destroy && I.destroy(), I = this.customContentInfo = null), D.contentKey && (I = this.customContentInfo = m({ contentKey: D.contentKey, contentVal: g[D.contentKey] }, D.buildLifecycleFuncs()))) : I && (I.contentVal = g[D.contentKey]), I ? [] : g;
  }, A.prototype.getInnerContent = function() {
    var I = this.props, g = V4(I.content, I.hookProps);
    return g === void 0 && (g = V4(I.defaultContent, I.hookProps)), g == null ? null : g;
  }, A.prototype.getContentMeta = function(I) {
    var g = this.context.pluginHooks.contentTypeHandlers, D = "", N = null;
    if (I) {
      for (var L in g)
        if (I[L] !== void 0) {
          D = L, N = g[L];
          break;
        }
    }
    return { contentKey: D, buildLifecycleFuncs: N };
  }, A.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, A;
}(GM), Pj = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleRootEl = function(g) {
      I.rootEl = g, I.props.elRef && CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, A.prototype.componentDidMount = function() {
    var I = this.props.didMount;
    I && I(m(m({}, this.props.hookProps), { el: this.rootEl }));
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.willUnmount;
    I && I(m(m({}, this.props.hookProps), { el: this.rootEl }));
  }, A;
}(GM);
function fe() {
  var M, A, I = [];
  return function(g, D) {
    return (!A || !eI(A, D) || g !== M) && (M = g, A = D, I = Je(g, D)), I;
  };
}
function Je(M, A) {
  return typeof M == "function" && (M = M(A)), $t(M);
}
function V4(M, A) {
  return typeof M == "function" ? M(A, O) : M;
}
var $N = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.normalizeClassNames = fe(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = { view: D.viewApi }, t = this.normalizeClassNames(N.viewClassNames, L);
    return O(Pj, { hookProps: L, didMount: N.viewDidMount, willUnmount: N.viewWillUnmount, elRef: g.elRef }, function(j) {
      return g.children(j, ["fc-" + g.viewSpec.type + "-view", "fc-view"].concat(t));
    });
  }, A;
}(GM);
function Z4(M) {
  return fD(M, oc);
}
function oc(M) {
  var A = typeof M == "function" ? { component: M } : M, I = A.component;
  return A.content && (I = lc(A)), {
    superType: A.type,
    component: I,
    rawOptions: A
  };
}
function lc(M) {
  return function(A) {
    return O(Lg.Consumer, null, function(I) {
      return O($N, { viewSpec: I.viewSpec }, function(g, D) {
        var N = m(m({}, A), { nextDayThreshold: I.options.nextDayThreshold });
        return O(yI, { hookProps: N, classNames: M.classNames, content: M.content, didMount: M.didMount, willUnmount: M.willUnmount, elRef: g }, function(L, t, j, S) {
          return O("div", { className: D.concat(t).join(" "), ref: L }, S);
        });
      });
    });
  };
}
function sc(M, A, I, g) {
  var D = Z4(M), N = Z4(A.views), L = ac(D, N);
  return fD(L, function(t) {
    return cc(t, N, A, I, g);
  });
}
function cc(M, A, I, g, D) {
  var N = M.overrides.duration || M.defaults.duration || g.duration || I.duration, L = null, t = "", j = "", S = {};
  if (N && (L = zc(N), L)) {
    var u = Ht(L);
    t = u.unit, u.value === 1 && (j = t, S = A[t] ? A[t].rawOptions : {});
  }
  var i = function(w) {
    var E = w.buttonText || {}, x = M.defaults.buttonTextKey;
    return x != null && E[x] != null ? E[x] : E[M.type] != null ? E[M.type] : E[j] != null ? E[j] : null;
  }, C = function(w) {
    var E = w.buttonHints || {}, x = M.defaults.buttonTextKey;
    return x != null && E[x] != null ? E[x] : E[M.type] != null ? E[M.type] : E[j] != null ? E[j] : null;
  };
  return {
    type: M.type,
    component: M.component,
    duration: L,
    durationUnit: t,
    singleUnit: j,
    optionDefaults: M.defaults,
    optionOverrides: m(m({}, S), M.overrides),
    buttonTextOverride: i(g) || i(I) || M.overrides.buttonText,
    buttonTextDefault: i(D) || M.defaults.buttonText || i(lD) || M.type,
    buttonTitleOverride: C(g) || C(I) || M.overrides.buttonHint,
    buttonTitleDefault: C(D) || M.defaults.buttonHint || C(lD)
  };
}
var B4 = {};
function zc(M) {
  var A = JSON.stringify(M), I = B4[A];
  return I === void 0 && (I = pM(M), B4[A] = I), I;
}
var Ve = function() {
  function M(A) {
    this.props = A, this.nowDate = JD(A.nowInput, A.dateEnv), this.initHiddenDays();
  }
  return M.prototype.buildPrev = function(A, I, g) {
    var D = this.props.dateEnv, N = D.subtract(
      D.startOf(I, A.currentRangeUnit),
      A.dateIncrement
    );
    return this.build(N, -1, g);
  }, M.prototype.buildNext = function(A, I, g) {
    var D = this.props.dateEnv, N = D.add(
      D.startOf(I, A.currentRangeUnit),
      A.dateIncrement
    );
    return this.build(N, 1, g);
  }, M.prototype.build = function(A, I, g) {
    g === void 0 && (g = !0);
    var D = this.props, N, L, t, j, S, u;
    return N = this.buildValidRange(), N = this.trimHiddenDays(N), g && (A = Es(A, N)), L = this.buildCurrentRangeInfo(A, I), t = /^(year|month|week|day)$/.test(L.unit), j = this.buildRenderRange(this.trimHiddenDays(L.range), L.unit, t), j = this.trimHiddenDays(j), S = j, D.showNonCurrentDates || (S = Jg(S, L.range)), S = this.adjustActiveRange(S), S = Jg(S, N), u = ws(L.range, N), {
      validRange: N,
      currentRange: L.range,
      currentRangeUnit: L.unit,
      isRangeAllDay: t,
      activeRange: S,
      renderRange: j,
      slotMinTime: D.slotMinTime,
      slotMaxTime: D.slotMaxTime,
      isValid: u,
      dateIncrement: this.buildDateIncrement(L.duration)
    };
  }, M.prototype.buildValidRange = function() {
    var A = this.props.validRangeInput, I = typeof A == "function" ? A.call(this.props.calendarApi, this.nowDate) : A;
    return this.refineRange(I) || { start: null, end: null };
  }, M.prototype.buildCurrentRangeInfo = function(A, I) {
    var g = this.props, D = null, N = null, L = null, t;
    return g.duration ? (D = g.duration, N = g.durationUnit, L = this.buildRangeFromDuration(A, I, D, N)) : (t = this.props.dayCount) ? (N = "day", L = this.buildRangeFromDayCount(A, I, t)) : (L = this.buildCustomVisibleRange(A)) ? N = g.dateEnv.greatestWholeUnit(L.start, L.end).unit : (D = this.getFallbackDuration(), N = Ht(D).unit, L = this.buildRangeFromDuration(A, I, D, N)), { duration: D, unit: N, range: L };
  }, M.prototype.getFallbackDuration = function() {
    return pM({ day: 1 });
  }, M.prototype.adjustActiveRange = function(A) {
    var I = this.props, g = I.dateEnv, D = I.usesMinMaxTime, N = I.slotMinTime, L = I.slotMaxTime, t = A.start, j = A.end;
    return D && (mg(N) < 0 && (t = ZM(t), t = g.add(t, N)), mg(L) > 1 && (j = ZM(j), j = IA(j, -1), j = g.add(j, L))), { start: t, end: j };
  }, M.prototype.buildRangeFromDuration = function(A, I, g, D) {
    var N = this.props, L = N.dateEnv, t = N.dateAlignment, j, S, u;
    if (!t) {
      var i = this.props.dateIncrement;
      i && hD(i) < hD(g) ? t = Ht(i).unit : t = D;
    }
    mg(g) <= 1 && this.isHiddenDay(j) && (j = this.skipHiddenDays(j, I), j = ZM(j));
    function C() {
      j = L.startOf(A, t), S = L.add(j, g), u = { start: j, end: S };
    }
    return C(), this.trimHiddenDays(u) || (A = this.skipHiddenDays(A, I), C()), u;
  }, M.prototype.buildRangeFromDayCount = function(A, I, g) {
    var D = this.props, N = D.dateEnv, L = D.dateAlignment, t = 0, j = A, S;
    L && (j = N.startOf(j, L)), j = ZM(j), j = this.skipHiddenDays(j, I), S = j;
    do
      S = IA(S, 1), this.isHiddenDay(S) || (t += 1);
    while (t < g);
    return { start: j, end: S };
  }, M.prototype.buildCustomVisibleRange = function(A) {
    var I = this.props, g = I.visibleRangeInput, D = typeof g == "function" ? g.call(I.calendarApi, I.dateEnv.toDate(A)) : g, N = this.refineRange(D);
    return N && (N.start == null || N.end == null) ? null : N;
  }, M.prototype.buildRenderRange = function(A, I, g) {
    return A;
  }, M.prototype.buildDateIncrement = function(A) {
    var I = this.props.dateIncrement, g;
    return I || ((g = this.props.dateAlignment) ? pM(1, g) : A || pM({ days: 1 }));
  }, M.prototype.refineRange = function(A) {
    if (A) {
      var I = es(A, this.props.dateEnv);
      return I && (I = Jj(I)), I;
    }
    return null;
  }, M.prototype.initHiddenDays = function() {
    var A = this.props.hiddenDays || [], I = [], g = 0, D;
    for (this.props.weekends === !1 && A.push(0, 6), D = 0; D < 7; D += 1)
      (I[D] = A.indexOf(D) !== -1) || (g += 1);
    if (!g)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = I;
  }, M.prototype.trimHiddenDays = function(A) {
    var I = A.start, g = A.end;
    return I && (I = this.skipHiddenDays(I)), g && (g = this.skipHiddenDays(g, -1, !0)), I == null || g == null || I < g ? { start: I, end: g } : null;
  }, M.prototype.isHiddenDay = function(A) {
    return A instanceof Date && (A = A.getUTCDay()), this.isHiddenDayHash[A];
  }, M.prototype.skipHiddenDays = function(A, I, g) {
    for (I === void 0 && (I = 1), g === void 0 && (g = !1); this.isHiddenDayHash[(A.getUTCDay() + (g ? I : 0) + 7) % 7]; )
      A = IA(A, I);
    return A;
  }, M;
}();
function Yc(M, A) {
  switch (A.type) {
    case "CHANGE_VIEW_TYPE":
      M = A.viewType;
  }
  return M;
}
function rc(M, A) {
  var I;
  switch (A.type) {
    case "SET_OPTION":
      return m(m({}, M), (I = {}, I[A.optionName] = A.rawOptionValue, I));
    default:
      return M;
  }
}
function dc(M, A, I, g) {
  var D;
  switch (A.type) {
    case "CHANGE_VIEW_TYPE":
      return g.build(A.dateMarker || I);
    case "CHANGE_DATE":
      return g.build(A.dateMarker);
    case "PREV":
      if (D = g.buildPrev(M, I), D.isValid)
        return D;
      break;
    case "NEXT":
      if (D = g.buildNext(M, I), D.isValid)
        return D;
      break;
  }
  return M;
}
function Uc(M, A, I) {
  var g = A ? A.activeRange : null;
  return Be({}, pc(M, I), g, I);
}
function mc(M, A, I, g) {
  var D = I ? I.activeRange : null;
  switch (A.type) {
    case "ADD_EVENT_SOURCES":
      return Be(M, A.sources, D, g);
    case "REMOVE_EVENT_SOURCE":
      return hc(M, A.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return I ? Pe(M, D, g) : M;
    case "FETCH_EVENT_SOURCES":
      return Fj(M, A.sourceIds ? ae(A.sourceIds) : Fe(M, g), D, A.isRefetch || !1, g);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return kc(M, A.sourceId, A.fetchId, A.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return M;
  }
}
function Oc(M, A, I) {
  var g = A ? A.activeRange : null;
  return Fj(M, Fe(M, I), g, !0, I);
}
function Ze(M) {
  for (var A in M)
    if (M[A].isFetching)
      return !0;
  return !1;
}
function Be(M, A, I, g) {
  for (var D = {}, N = 0, L = A; N < L.length; N++) {
    var t = L[N];
    D[t.sourceId] = t;
  }
  return I && (D = Pe(D, I, g)), m(m({}, M), D);
}
function hc(M, A) {
  return Gg(M, function(I) {
    return I.sourceId !== A;
  });
}
function Pe(M, A, I) {
  return Fj(M, Gg(M, function(g) {
    return bc(g, A, I);
  }), A, !1, I);
}
function bc(M, A, I) {
  return Xe(M, I) ? !I.options.lazyFetching || !M.fetchRange || M.isFetching || A.start < M.fetchRange.start || A.end > M.fetchRange.end : !M.latestFetchId;
}
function Fj(M, A, I, g, D) {
  var N = {};
  for (var L in M) {
    var t = M[L];
    A[L] ? N[L] = Wc(t, I, g, D) : N[L] = t;
  }
  return N;
}
function Wc(M, A, I, g) {
  var D = g.options, N = g.calendarApi, L = g.pluginHooks.eventSourceDefs[M.sourceDefId], t = qg();
  return L.fetch({
    eventSource: M,
    range: A,
    isRefetch: I,
    context: g
  }, function(j) {
    var S = j.rawEvents;
    D.eventSourceSuccess && (S = D.eventSourceSuccess.call(N, S, j.xhr) || S), M.success && (S = M.success.call(N, S, j.xhr) || S), g.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: M.sourceId,
      fetchId: t,
      fetchRange: A,
      rawEvents: S
    });
  }, function(j) {
    console.warn(j.message, j), D.eventSourceFailure && D.eventSourceFailure.call(N, j), M.failure && M.failure(j), g.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: M.sourceId,
      fetchId: t,
      fetchRange: A,
      error: j
    });
  }), m(m({}, M), { isFetching: !0, latestFetchId: t });
}
function kc(M, A, I, g) {
  var D, N = M[A];
  return N && I === N.latestFetchId ? m(m({}, M), (D = {}, D[A] = m(m({}, N), { isFetching: !1, fetchRange: g }), D)) : M;
}
function Fe(M, A) {
  return Gg(M, function(I) {
    return Xe(I, A);
  });
}
function pc(M, A) {
  var I = Ue(A), g = [].concat(M.eventSources || []), D = [];
  M.initialEvents && g.unshift(M.initialEvents), M.events && g.unshift(M.events);
  for (var N = 0, L = g; N < L.length; N++) {
    var t = L[N], j = de(t, A, I);
    j && D.push(j);
  }
  return D;
}
function Xe(M, A) {
  var I = A.pluginHooks.eventSourceDefs;
  return !I[M.sourceDefId].ignoreRange;
}
function Qc(M, A, I, g, D) {
  switch (A.type) {
    case "RECEIVE_EVENTS":
      return vc(M, I[A.sourceId], A.fetchId, A.fetchRange, A.rawEvents, D);
    case "ADD_EVENTS":
      return fc(
        M,
        A.eventStore,
        g ? g.activeRange : null,
        D
      );
    case "RESET_EVENTS":
      return A.eventStore;
    case "MERGE_EVENTS":
      return vj(M, A.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return g ? aL(M, g.activeRange, D) : M;
    case "REMOVE_EVENTS":
      return gs(M, A.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Re(M, A.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Gj(M, function(N) {
        return !N.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Ig();
    default:
      return M;
  }
}
function vc(M, A, I, g, D, N) {
  if (A && I === A.latestFetchId) {
    var L = RN(Gc(D, A, N), A, N);
    return g && (L = aL(L, g, N)), vj(Re(M, A.sourceId), L);
  }
  return M;
}
function Gc(M, A, I) {
  var g = I.options.eventDataTransform, D = A ? A.eventDataTransform : null;
  return D && (M = P4(M, D)), g && (M = P4(M, g)), M;
}
function P4(M, A) {
  var I;
  if (!A)
    I = M;
  else {
    I = [];
    for (var g = 0, D = M; g < D.length; g++) {
      var N = D[g], L = A(N);
      L ? I.push(L) : L == null && I.push(N);
    }
  }
  return I;
}
function fc(M, A, I, g) {
  return I && (A = aL(A, I, g)), vj(M, A);
}
function Jc(M, A, I) {
  var g = M.defs, D = fD(M.instances, function(N) {
    var L = g[N.defId];
    return L.allDay || L.recurringDef ? N : m(m({}, N), { range: {
      start: I.createMarker(A.toDate(N.range.start, N.forcedStartTzo)),
      end: I.createMarker(A.toDate(N.range.end, N.forcedEndTzo))
    }, forcedStartTzo: I.canComputeOffset ? null : N.forcedStartTzo, forcedEndTzo: I.canComputeOffset ? null : N.forcedEndTzo });
  });
  return { defs: g, instances: D };
}
function Re(M, A) {
  return Gj(M, function(I) {
    return I.sourceId !== A;
  });
}
function Vc(M, A) {
  switch (A.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return A.selection;
    default:
      return M;
  }
}
function Zc(M, A) {
  switch (A.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return A.eventInstanceId;
    default:
      return M;
  }
}
function Bc(M, A) {
  var I;
  switch (A.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return I = A.state, {
        affectedEvents: I.affectedEvents,
        mutatedEvents: I.mutatedEvents,
        isEvent: I.isEvent
      };
    default:
      return M;
  }
}
function Pc(M, A) {
  var I;
  switch (A.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return I = A.state, {
        affectedEvents: I.affectedEvents,
        mutatedEvents: I.mutatedEvents,
        isEvent: I.isEvent
      };
    default:
      return M;
  }
}
function Fc(M, A, I, g, D) {
  var N = M.headerToolbar ? F4(M.headerToolbar, M, A, I, g, D) : null, L = M.footerToolbar ? F4(M.footerToolbar, M, A, I, g, D) : null;
  return { header: N, footer: L };
}
function F4(M, A, I, g, D, N) {
  var L = {}, t = [], j = !1;
  for (var S in M) {
    var u = M[S], i = Xc(u, A, I, g, D, N);
    L[S] = i.widgets, t.push.apply(t, i.viewsWithButtons), j = j || i.hasTitle;
  }
  return { sectionWidgets: L, viewsWithButtons: t, hasTitle: j };
}
function Xc(M, A, I, g, D, N) {
  var L = A.direction === "rtl", t = A.customButtons || {}, j = I.buttonText || {}, S = A.buttonText || {}, u = I.buttonHints || {}, i = A.buttonHints || {}, C = M ? M.split(" ") : [], w = [], E = !1, x = C.map(function(n) {
    return n.split(",").map(function(a) {
      if (a === "title")
        return E = !0, { buttonName: a };
      var z, d, Y, U, k, G;
      if (z = t[a])
        Y = function(V) {
          z.click && z.click.call(V.target, V, V.target);
        }, (U = g.getCustomButtonIconClass(z)) || (U = g.getIconClass(a, L)) || (k = z.text), G = z.hint || z.text;
      else if (d = D[a]) {
        w.push(a), Y = function() {
          N.changeView(a);
        }, (k = d.buttonTextOverride) || (U = g.getIconClass(a, L)) || (k = d.buttonTextDefault);
        var r = d.buttonTextOverride || d.buttonTextDefault;
        G = oD(
          d.buttonTitleOverride || d.buttonTitleDefault || A.viewHint,
          [r, a],
          r
        );
      } else if (N[a])
        if (Y = function() {
          N[a]();
        }, (k = j[a]) || (U = g.getIconClass(a, L)) || (k = S[a]), a === "prevYear" || a === "nextYear") {
          var b = a === "prevYear" ? "prev" : "next";
          G = oD(u[b] || i[b], [
            S.year || "year",
            "year"
          ], S[a]);
        } else
          G = function(V) {
            return oD(u[a] || i[a], [
              S[V] || V,
              V
            ], S[a]);
          };
      return { buttonName: a, buttonClick: Y, buttonIcon: U, buttonText: k, buttonHint: G };
    });
  });
  return { widgets: x, viewsWithButtons: w, hasTitle: E };
}
var Rc = {
  ignoreRange: !0,
  parseMeta: function(M) {
    return Array.isArray(M.events) ? M.events : null;
  },
  fetch: function(M, A) {
    A({
      rawEvents: M.eventSource.meta
    });
  }
}, Hc = aI({
  eventSourceDefs: [Rc]
}), _c = {
  parseMeta: function(M) {
    return typeof M.events == "function" ? M.events : null;
  },
  fetch: function(M, A, I) {
    var g = M.context.dateEnv, D = M.eventSource.meta;
    tc(D.bind(null, Ye(M.range, g)), function(N) {
      A({ rawEvents: N });
    }, I);
  }
}, $c = aI({
  eventSourceDefs: [_c]
});
function He(M, A, I, g, D) {
  M = M.toUpperCase();
  var N = null;
  M === "GET" ? A = qc(A, I) : N = _e(I);
  var L = new XMLHttpRequest();
  L.open(M, A, !0), M !== "GET" && L.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), L.onload = function() {
    if (L.status >= 200 && L.status < 400) {
      var t = !1, j = void 0;
      try {
        j = JSON.parse(L.responseText), t = !0;
      } catch {
      }
      t ? g(j, L) : D("Failure parsing JSON", L);
    } else
      D("Request failed", L);
  }, L.onerror = function() {
    D("Request failed", L);
  }, L.send(N);
}
function qc(M, A) {
  return M + (M.indexOf("?") === -1 ? "?" : "&") + _e(A);
}
function _e(M) {
  var A = [];
  for (var I in M)
    A.push(encodeURIComponent(I) + "=" + encodeURIComponent(M[I]));
  return A.join("&");
}
var Kc = {
  method: String,
  extraParams: f,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, M1 = {
  parseMeta: function(M) {
    return M.url && (M.format === "json" || !M.format) ? {
      url: M.url,
      format: "json",
      method: (M.method || "GET").toUpperCase(),
      extraParams: M.extraParams,
      startParam: M.startParam,
      endParam: M.endParam,
      timeZoneParam: M.timeZoneParam
    } : null;
  },
  fetch: function(M, A, I) {
    var g = M.eventSource.meta, D = I1(g, M.range, M.context);
    He(g.method, g.url, D, function(N, L) {
      A({ rawEvents: N, xhr: L });
    }, function(N, L) {
      I({ message: N, xhr: L });
    });
  }
}, A1 = aI({
  eventSourceRefiners: Kc,
  eventSourceDefs: [M1]
});
function I1(M, A, I) {
  var g = I.dateEnv, D = I.options, N, L, t, j, S = {};
  return N = M.startParam, N == null && (N = D.startParam), L = M.endParam, L == null && (L = D.endParam), t = M.timeZoneParam, t == null && (t = D.timeZoneParam), typeof M.extraParams == "function" ? j = M.extraParams() : j = M.extraParams || {}, m(S, j), S[N] = g.formatIso(A.start), S[L] = g.formatIso(A.end), g.timeZone !== "local" && (S[t] = g.timeZone), S;
}
var g1 = {
  daysOfWeek: f,
  startTime: pM,
  endTime: pM,
  duration: pM,
  startRecur: f,
  endRecur: f
}, D1 = {
  parse: function(M, A) {
    if (M.daysOfWeek || M.startTime || M.endTime || M.startRecur || M.endRecur) {
      var I = {
        daysOfWeek: M.daysOfWeek || null,
        startTime: M.startTime || null,
        endTime: M.endTime || null,
        startRecur: M.startRecur ? A.createMarker(M.startRecur) : null,
        endRecur: M.endRecur ? A.createMarker(M.endRecur) : null
      }, g = void 0;
      return M.duration && (g = M.duration), !g && M.startTime && M.endTime && (g = kl(M.endTime, M.startTime)), {
        allDayGuess: Boolean(!M.startTime && !M.endTime),
        duration: g,
        typeData: I
      };
    }
    return null;
  },
  expand: function(M, A, I) {
    var g = Jg(A, { start: M.startRecur, end: M.endRecur });
    return g ? L1(M.daysOfWeek, M.startTime, g, I) : [];
  }
}, N1 = aI({
  recurringTypes: [D1],
  eventRefiners: g1
});
function L1(M, A, I, g) {
  for (var D = M ? ae(M) : null, N = ZM(I.start), L = I.end, t = []; N < L; ) {
    var j = void 0;
    (!D || D[N.getUTCDay()]) && (A ? j = g.add(N, A) : j = N, t.push(j)), N = IA(N, 1);
  }
  return t;
}
var t1 = aI({
  optionChangeHandlers: {
    events: function(M, A) {
      X4([M], A);
    },
    eventSources: X4
  }
});
function X4(M, A) {
  for (var I = kj(A.getCurrentData().eventSources), g = [], D = 0, N = M; D < N.length; D++) {
    for (var L = N[D], t = !1, j = 0; j < I.length; j += 1)
      if (I[j]._raw === L) {
        I.splice(j, 1), t = !0;
        break;
      }
    t || g.push(L);
  }
  for (var S = 0, u = I; S < u.length; S++) {
    var i = u[S];
    A.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: i.sourceId
    });
  }
  for (var C = 0, w = g; C < w.length; C++) {
    var E = w[C];
    A.calendarApi.addEventSource(E);
  }
}
function j1(M, A) {
  A.emitter.trigger("datesSet", m(m({}, Ye(M.activeRange, A.dateEnv)), { view: A.viewApi }));
}
function u1(M, A) {
  var I = A.emitter;
  I.hasHandlers("eventsSet") && I.trigger("eventsSet", Zj(M, A));
}
var S1 = [
  Hc,
  $c,
  A1,
  N1,
  t1,
  aI({
    isLoadingFuncs: [
      function(M) {
        return Ze(M.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: i1,
      domNodes: e1
    },
    propSetHandlers: {
      dateProfile: j1,
      eventStore: u1
    }
  })
];
function i1() {
  var M = null, A = "";
  function I(D, N) {
    (D !== M || N !== A) && (D.innerHTML = N), M = D, A = N;
  }
  function g() {
    M.innerHTML = "", M = null, A = "";
  }
  return { render: I, destroy: g };
}
function e1() {
  var M = null, A = [];
  function I(D, N) {
    var L = Array.prototype.slice.call(N);
    if (D !== M || !fg(A, L)) {
      for (var t = 0, j = L; t < j.length; t++) {
        var S = j[t];
        D.appendChild(S);
      }
      g();
    }
    M = D, A = L;
  }
  function g() {
    A.forEach(gl), A = [], M = null;
  }
  return { render: I, destroy: g };
}
var Xj = function() {
  function M(A) {
    this.drainedOption = A, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  return M.prototype.request = function(A) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), A == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      A
    ));
  }, M.prototype.pause = function(A) {
    A === void 0 && (A = "");
    var I = this.pauseDepths;
    I[A] = (I[A] || 0) + 1, this.clearTimeout();
  }, M.prototype.resume = function(A, I) {
    A === void 0 && (A = "");
    var g = this.pauseDepths;
    if (A in g) {
      if (I)
        delete g[A];
      else {
        g[A] -= 1;
        var D = g[A];
        D <= 0 && delete g[A];
      }
      this.tryDrain();
    }
  }, M.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  }, M.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }, M.prototype.clear = function() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }, M.prototype.clearTimeout = function() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }, M.prototype.drained = function() {
    this.drainedOption && this.drainedOption();
  }, M;
}(), C1 = function() {
  function M(A, I) {
    this.runTaskOption = A, this.drainedOption = I, this.queue = [], this.delayedRunner = new Xj(this.drain.bind(this));
  }
  return M.prototype.request = function(A, I) {
    this.queue.push(A), this.delayedRunner.request(I);
  }, M.prototype.pause = function(A) {
    this.delayedRunner.pause(A);
  }, M.prototype.resume = function(A, I) {
    this.delayedRunner.resume(A, I);
  }, M.prototype.drain = function() {
    for (var A = this.queue; A.length; ) {
      for (var I = [], g = void 0; g = A.shift(); )
        this.runTask(g), I.push(g);
      this.drained(I);
    }
  }, M.prototype.runTask = function(A) {
    this.runTaskOption && this.runTaskOption(A);
  }, M.prototype.drained = function(A) {
    this.drainedOption && this.drainedOption(A);
  }, M;
}();
function w1(M, A, I) {
  var g;
  return /^(year|month)$/.test(M.currentRangeUnit) ? g = M.currentRange : g = M.activeRange, I.formatRange(g.start, g.end, AA(A.titleFormat || E1(M)), {
    isEndExclusive: M.isRangeAllDay,
    defaultSeparator: A.titleRangeSeparator
  });
}
function E1(M) {
  var A = M.currentRangeUnit;
  if (A === "year")
    return { year: "numeric" };
  if (A === "month")
    return { year: "numeric", month: "long" };
  var I = BN(M.currentRange.start, M.currentRange.end);
  return I !== null && I > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var $e = function() {
  function M(A) {
    var I = this;
    this.computeOptionsData = UM(this._computeOptionsData), this.computeCurrentViewData = UM(this._computeCurrentViewData), this.organizeRawLocales = UM(Fs), this.buildLocale = UM(We), this.buildPluginHooks = Tc(), this.buildDateEnv = UM(T1), this.buildTheme = UM(x1), this.parseToolbars = UM(Fc), this.buildViewSpecs = UM(sc), this.buildDateProfileGenerator = cN(a1), this.buildViewApi = UM(y1), this.buildViewUiProps = cN(l1), this.buildEventUiBySource = UM(n1, eI), this.buildEventUiBases = UM(o1), this.parseContextBusinessHours = cN(s1), this.buildTitle = UM(w1), this.emitter = new jc(), this.actionRunner = new C1(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return I.data;
    }, this.dispatch = function(d) {
      I.actionRunner.request(d);
    }, this.props = A, this.actionRunner.pause();
    var g = {}, D = this.computeOptionsData(A.optionOverrides, g, A.calendarApi), N = D.calendarOptions.initialView || D.pluginHooks.initialView, L = this.computeCurrentViewData(N, D, A.optionOverrides, g);
    A.calendarApi.currentDataManager = this, this.emitter.setThisContext(A.calendarApi), this.emitter.setOptions(L.options);
    var t = Qs(D.calendarOptions, D.dateEnv), j = L.dateProfileGenerator.build(t);
    _I(j.activeRange, t) || (t = j.currentRange.start);
    for (var S = {
      dateEnv: D.dateEnv,
      options: D.calendarOptions,
      pluginHooks: D.pluginHooks,
      calendarApi: A.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, u = 0, i = D.pluginHooks.contextInit; u < i.length; u++) {
      var C = i[u];
      C(S);
    }
    for (var w = Uc(D.calendarOptions, j, S), E = {
      dynamicOptionOverrides: g,
      currentViewType: N,
      currentDate: t,
      dateProfile: j,
      businessHours: this.parseContextBusinessHours(S),
      eventSources: w,
      eventUiBases: {},
      eventStore: Ig(),
      renderableEventStore: Ig(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(S).selectionConfig
    }, x = m(m({}, S), E), n = 0, a = D.pluginHooks.reducers; n < a.length; n++) {
      var z = a[n];
      m(E, z(null, null, x));
    }
    Ct(E, S) && this.emitter.trigger("loading", !0), this.state = E, this.updateData(), this.actionRunner.resume();
  }
  return M.prototype.resetOptions = function(A, I) {
    var g = this.props;
    g.optionOverrides = I ? m(m({}, g.optionOverrides), A) : A, this.actionRunner.request({
      type: "NOTHING"
    });
  }, M.prototype._handleAction = function(A) {
    var I = this, g = I.props, D = I.state, N = I.emitter, L = rc(D.dynamicOptionOverrides, A), t = this.computeOptionsData(g.optionOverrides, L, g.calendarApi), j = Yc(D.currentViewType, A), S = this.computeCurrentViewData(j, t, g.optionOverrides, L);
    g.calendarApi.currentDataManager = this, N.setThisContext(g.calendarApi), N.setOptions(S.options);
    var u = {
      dateEnv: t.dateEnv,
      options: t.calendarOptions,
      pluginHooks: t.pluginHooks,
      calendarApi: g.calendarApi,
      dispatch: this.dispatch,
      emitter: N,
      getCurrentData: this.getCurrentData
    }, i = D.currentDate, C = D.dateProfile;
    this.data && this.data.dateProfileGenerator !== S.dateProfileGenerator && (C = S.dateProfileGenerator.build(i)), i = ps(i, A), C = dc(C, A, i, S.dateProfileGenerator), (A.type === "PREV" || A.type === "NEXT" || !_I(C.currentRange, i)) && (i = C.currentRange.start);
    for (var w = mc(D.eventSources, A, C, u), E = Qc(D.eventStore, A, w, C, u), x = Ze(w), n = x && !S.options.progressiveEventRendering && D.renderableEventStore || E, a = this.buildViewUiProps(u), z = a.eventUiSingleBase, d = a.selectionConfig, Y = this.buildEventUiBySource(w), U = this.buildEventUiBases(n.defs, z, Y), k = {
      dynamicOptionOverrides: L,
      currentViewType: j,
      currentDate: i,
      dateProfile: C,
      eventSources: w,
      eventStore: E,
      renderableEventStore: n,
      selectionConfig: d,
      eventUiBases: U,
      businessHours: this.parseContextBusinessHours(u),
      dateSelection: Vc(D.dateSelection, A),
      eventSelection: Zc(D.eventSelection, A),
      eventDrag: Bc(D.eventDrag, A),
      eventResize: Pc(D.eventResize, A)
    }, G = m(m({}, u), k), r = 0, b = t.pluginHooks.reducers; r < b.length; r++) {
      var V = b[r];
      m(k, V(D, A, G));
    }
    var R = Ct(D, u), AM = Ct(k, u);
    !R && AM ? N.trigger("loading", !0) : R && !AM && N.trigger("loading", !1), this.state = k, g.onAction && g.onAction(A);
  }, M.prototype.updateData = function() {
    var A = this, I = A.props, g = A.state, D = this.data, N = this.computeOptionsData(I.optionOverrides, g.dynamicOptionOverrides, I.calendarApi), L = this.computeCurrentViewData(g.currentViewType, N, I.optionOverrides, g.dynamicOptionOverrides), t = this.data = m(m(m({ viewTitle: this.buildTitle(g.dateProfile, L.options, N.dateEnv), calendarApi: I.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, N), L), g), j = N.pluginHooks.optionChangeHandlers, S = D && D.calendarOptions, u = N.calendarOptions;
    if (S && S !== u) {
      S.timeZone !== u.timeZone && (g.eventSources = t.eventSources = Oc(t.eventSources, g.dateProfile, t), g.eventStore = t.eventStore = Jc(t.eventStore, D.dateEnv, t.dateEnv));
      for (var i in j)
        S[i] !== u[i] && j[i](u[i], t);
    }
    I.onData && I.onData(t);
  }, M.prototype._computeOptionsData = function(A, I, g) {
    var D = this.processRawCalendarOptions(A, I), N = D.refinedOptions, L = D.pluginHooks, t = D.localeDefaults, j = D.availableLocaleData, S = D.extra;
    R4(S);
    var u = this.buildDateEnv(N.timeZone, N.locale, N.weekNumberCalculation, N.firstDay, N.weekText, L, j, N.defaultRangeSeparator), i = this.buildViewSpecs(L.views, A, I, t), C = this.buildTheme(N, L), w = this.parseToolbars(N, A, C, i, g);
    return {
      calendarOptions: N,
      pluginHooks: L,
      dateEnv: u,
      viewSpecs: i,
      theme: C,
      toolbarConfig: w,
      localeDefaults: t,
      availableRawLocales: j.map
    };
  }, M.prototype.processRawCalendarOptions = function(A, I) {
    var g = St([
      lD,
      A,
      I
    ]), D = g.locales, N = g.locale, L = this.organizeRawLocales(D), t = L.map, j = this.buildLocale(N || L.defaultCode, t).options, S = this.buildPluginHooks(A.plugins || [], S1), u = this.currentCalendarOptionsRefiners = m(m(m(m(m({}, p4), Q4), v4), S.listenerRefiners), S.optionRefiners), i = {}, C = St([
      lD,
      j,
      A,
      I
    ]), w = {}, E = this.currentCalendarOptionsInput, x = this.currentCalendarOptionsRefined, n = !1;
    for (var a in C)
      a !== "plugins" && (C[a] === E[a] || PI[a] && a in E && PI[a](E[a], C[a]) ? w[a] = x[a] : u[a] ? (w[a] = u[a](C[a]), n = !0) : i[a] = E[a]);
    return n && (this.currentCalendarOptionsInput = C, this.currentCalendarOptionsRefined = w), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: S,
      availableLocaleData: L,
      localeDefaults: j,
      extra: i
    };
  }, M.prototype._computeCurrentViewData = function(A, I, g, D) {
    var N = I.viewSpecs[A];
    if (!N)
      throw new Error('viewType "' + A + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var L = this.processRawViewOptions(N, I.pluginHooks, I.localeDefaults, g, D), t = L.refinedOptions, j = L.extra;
    R4(j);
    var S = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: N.optionDefaults.dateProfileGeneratorClass,
      duration: N.duration,
      durationUnit: N.durationUnit,
      usesMinMaxTime: N.optionDefaults.usesMinMaxTime,
      dateEnv: I.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: t.slotMinTime,
      slotMaxTime: t.slotMaxTime,
      showNonCurrentDates: t.showNonCurrentDates,
      dayCount: t.dayCount,
      dateAlignment: t.dateAlignment,
      dateIncrement: t.dateIncrement,
      hiddenDays: t.hiddenDays,
      weekends: t.weekends,
      nowInput: t.now,
      validRangeInput: t.validRange,
      visibleRangeInput: t.visibleRange,
      monthMode: t.monthMode,
      fixedWeekCount: t.fixedWeekCount
    }), u = this.buildViewApi(A, this.getCurrentData, I.dateEnv);
    return { viewSpec: N, options: t, dateProfileGenerator: S, viewApi: u };
  }, M.prototype.processRawViewOptions = function(A, I, g, D, N) {
    var L = St([
      lD,
      A.optionDefaults,
      g,
      D,
      A.optionOverrides,
      N
    ]), t = m(m(m(m(m(m({}, p4), Q4), v4), Ms), I.listenerRefiners), I.optionRefiners), j = {}, S = this.currentViewOptionsInput, u = this.currentViewOptionsRefined, i = !1, C = {};
    for (var w in L)
      L[w] === S[w] || PI[w] && PI[w](L[w], S[w]) ? j[w] = u[w] : (L[w] === this.currentCalendarOptionsInput[w] || PI[w] && PI[w](L[w], this.currentCalendarOptionsInput[w]) ? w in this.currentCalendarOptionsRefined && (j[w] = this.currentCalendarOptionsRefined[w]) : t[w] ? j[w] = t[w](L[w]) : C[w] = L[w], i = !0);
    return i && (this.currentViewOptionsInput = L, this.currentViewOptionsRefined = j), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: C
    };
  }, M;
}();
function T1(M, A, I, g, D, N, L, t) {
  var j = We(A || L.defaultCode, L.map);
  return new Bs({
    calendarSystem: "gregory",
    timeZone: M,
    namedTimeZoneImpl: N.namedTimeZonedImpl,
    locale: j,
    weekNumberCalculation: I,
    firstDay: g,
    weekText: D,
    cmdFormatter: N.cmdFormatter,
    defaultSeparator: t
  });
}
function x1(M, A) {
  var I = A.themeClasses[M.themeSystem] || pI;
  return new I(M);
}
function a1(M) {
  var A = M.dateProfileGeneratorClass || Ve;
  return new A(M);
}
function y1(M, A, I) {
  return new bs(M, A, I);
}
function n1(M) {
  return fD(M, function(A) {
    return A.ui;
  });
}
function o1(M, A, I) {
  var g = { "": A };
  for (var D in M) {
    var N = M[D];
    N.sourceId && I[N.sourceId] && (g[D] = I[N.sourceId]);
  }
  return g;
}
function l1(M) {
  var A = M.options;
  return {
    eventUiSingleBase: _N({
      display: A.eventDisplay,
      editable: A.editable,
      startEditable: A.eventStartEditable,
      durationEditable: A.eventDurationEditable,
      constraint: A.eventConstraint,
      overlap: typeof A.eventOverlap == "boolean" ? A.eventOverlap : void 0,
      allow: A.eventAllow,
      backgroundColor: A.eventBackgroundColor,
      borderColor: A.eventBorderColor,
      textColor: A.eventTextColor,
      color: A.eventColor
    }, M),
    selectionConfig: _N({
      constraint: A.selectConstraint,
      overlap: typeof A.selectOverlap == "boolean" ? A.selectOverlap : void 0,
      allow: A.selectAllow
    }, M)
  };
}
function Ct(M, A) {
  for (var I = 0, g = A.pluginHooks.isLoadingFuncs; I < g.length; I++) {
    var D = g[I];
    if (D(M))
      return !0;
  }
  return !1;
}
function s1(M) {
  return _s(M.options.businessHours, M);
}
function R4(M, A) {
  for (var I in M)
    console.warn("Unknown option '" + I + "'" + (A ? " for view '" + A + "'" : ""));
}
(function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleData = function(D) {
      g.dataManager ? g.setState(D) : g.state = D;
    }, g.dataManager = new $e({
      optionOverrides: I.optionOverrides,
      calendarApi: I.calendarApi,
      onData: g.handleData
    }), g;
  }
  return A.prototype.render = function() {
    return this.props.children(this.state);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props.optionOverrides;
    g !== I.optionOverrides && this.dataManager.resetOptions(g);
  }, A;
})(hj);
var c1 = function() {
  function M() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return M.prototype.addSegs = function(A) {
    for (var I = [], g = 0, D = A; g < D.length; g++) {
      var N = D[g];
      this.insertEntry(N, I);
    }
    return I;
  }, M.prototype.insertEntry = function(A, I) {
    var g = this.findInsertion(A);
    return this.isInsertionValid(g, A) ? (this.insertEntryAt(A, g), 1) : this.handleInvalidInsertion(g, A, I);
  }, M.prototype.isInsertionValid = function(A, I) {
    return (this.maxCoord === -1 || A.levelCoord + I.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || A.stackCnt < this.maxStackCnt);
  }, M.prototype.handleInvalidInsertion = function(A, I, g) {
    return this.allowReslicing && A.touchingEntry ? this.splitEntry(I, A.touchingEntry, g) : (g.push(I), 0);
  }, M.prototype.splitEntry = function(A, I, g) {
    var D = 0, N = [], L = A.span, t = I.span;
    return L.start < t.start && (D += this.insertEntry({
      index: A.index,
      thickness: A.thickness,
      span: { start: L.start, end: t.start }
    }, N)), L.end > t.end && (D += this.insertEntry({
      index: A.index,
      thickness: A.thickness,
      span: { start: t.end, end: L.end }
    }, N)), D ? (g.push.apply(g, HM([{
      index: A.index,
      thickness: A.thickness,
      span: qe(t, L)
    }], N)), D) : (g.push(A), 0);
  }, M.prototype.insertEntryAt = function(A, I) {
    var g = this, D = g.entriesByLevel, N = g.levelCoords;
    I.lateral === -1 ? (wt(N, I.level, I.levelCoord), wt(D, I.level, [A])) : wt(D[I.level], I.lateral, A), this.stackCnts[cD(A)] = I.stackCnt;
  }, M.prototype.findInsertion = function(A) {
    for (var I = this, g = I.levelCoords, D = I.entriesByLevel, N = I.strictOrder, L = I.stackCnts, t = g.length, j = 0, S = -1, u = -1, i = null, C = 0, w = 0; w < t; w += 1) {
      var E = g[w];
      if (!N && E >= j + A.thickness)
        break;
      for (var x = D[w], n = void 0, a = _4(x, A.span.start, H4), z = a[0] + a[1]; (n = x[z]) && n.span.start < A.span.end; ) {
        var d = E + n.thickness;
        d > j && (j = d, i = n, S = w, u = z), d === j && (C = Math.max(C, L[cD(n)] + 1)), z += 1;
      }
    }
    var Y = 0;
    if (i)
      for (Y = S + 1; Y < t && g[Y] < j; )
        Y += 1;
    var U = -1;
    return Y < t && g[Y] === j && (U = _4(D[Y], A.span.end, H4)[0]), {
      touchingLevel: S,
      touchingLateral: u,
      touchingEntry: i,
      stackCnt: C,
      levelCoord: j,
      level: Y,
      lateral: U
    };
  }, M.prototype.toRects = function() {
    for (var A = this, I = A.entriesByLevel, g = A.levelCoords, D = I.length, N = [], L = 0; L < D; L += 1)
      for (var t = I[L], j = g[L], S = 0, u = t; S < u.length; S++) {
        var i = u[S];
        N.push(m(m({}, i), { levelCoord: j }));
      }
    return N;
  }, M;
}();
function H4(M) {
  return M.span.end;
}
function cD(M) {
  return M.index + ":" + M.span.start;
}
function qe(M, A) {
  var I = Math.max(M.start, A.start), g = Math.min(M.end, A.end);
  return I < g ? { start: I, end: g } : null;
}
function wt(M, A, I) {
  M.splice(A, 0, I);
}
function _4(M, A, I) {
  var g = 0, D = M.length;
  if (!D || A < I(M[g]))
    return [0, 0];
  if (A > I(M[D - 1]))
    return [D, 0];
  for (; g < D; ) {
    var N = Math.floor(g + (D - g) / 2), L = I(M[N]);
    if (A < L)
      D = N;
    else if (A > L)
      g = N + 1;
    else
      return [N, 1];
  }
  return [g, 0];
}
var Ke = function() {
  function M(A) {
    this.component = A.component, this.isHitComboAllowed = A.isHitComboAllowed || null;
  }
  return M.prototype.destroy = function() {
  }, M;
}();
function z1(M, A) {
  return {
    component: M,
    el: A.el,
    useEventCenter: A.useEventCenter != null ? A.useEventCenter : !0,
    isHitComboAllowed: A.isHitComboAllowed || null
  };
}
var $4 = {}, Y1 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props.widgetGroups.map(function(D) {
      return I.renderWidgetGroup(D);
    });
    return O.apply(void 0, HM(["div", { className: "fc-toolbar-chunk" }], g));
  }, A.prototype.renderWidgetGroup = function(I) {
    for (var g = this.props, D = this.context.theme, N = [], L = !0, t = 0, j = I; t < j.length; t++) {
      var S = j[t], u = S.buttonName, i = S.buttonClick, C = S.buttonText, w = S.buttonIcon, E = S.buttonHint;
      if (u === "title")
        L = !1, N.push(O("h2", { className: "fc-toolbar-title", id: g.titleId }, g.title));
      else {
        var x = u === g.activeButton, n = !g.isTodayEnabled && u === "today" || !g.isPrevEnabled && u === "prev" || !g.isNextEnabled && u === "next", a = ["fc-" + u + "-button", D.getClass("button")];
        x && a.push(D.getClass("buttonActive")), N.push(O("button", { type: "button", title: typeof E == "function" ? E(g.navUnit) : E, disabled: n, "aria-pressed": x, className: a.join(" "), onClick: i }, C || (w ? O("span", { className: w }) : "")));
      }
    }
    if (N.length > 1) {
      var z = L && D.getClass("buttonGroup") || "";
      return O.apply(void 0, HM(["div", { className: z }], N));
    }
    return N[0];
  }, A;
}(GM), q4 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.model, D = I.extraClassName, N = !1, L, t, j = g.sectionWidgets, S = j.center;
    j.left ? (N = !0, L = j.left) : L = j.start, j.right ? (N = !0, t = j.right) : t = j.end;
    var u = [
      D || "",
      "fc-toolbar",
      N ? "fc-toolbar-ltr" : ""
    ];
    return O(
      "div",
      { className: u.join(" ") },
      this.renderSection("start", L || []),
      this.renderSection("center", S || []),
      this.renderSection("end", t || [])
    );
  }, A.prototype.renderSection = function(I, g) {
    var D = this.props;
    return O(Y1, { key: I, widgetGroups: g, title: D.title, navUnit: D.navUnit, activeButton: D.activeButton, isTodayEnabled: D.isTodayEnabled, isPrevEnabled: D.isPrevEnabled, isNextEnabled: D.isNextEnabled, titleId: D.titleId });
  }, A;
}(GM), r1 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      availableWidth: null
    }, I.handleEl = function(g) {
      I.el = g, CI(I.props.elRef, g), I.updateAvailableWidth();
    }, I.handleResize = function() {
      I.updateAvailableWidth();
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state, N = g.aspectRatio, L = [
      "fc-view-harness",
      N || g.liquid || g.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], t = "", j = "";
    return N ? D.availableWidth !== null ? t = D.availableWidth / N : j = 1 / N * 100 + "%" : t = g.height || "", O("div", { "aria-labelledby": g.labeledById, ref: this.handleEl, className: L.join(" "), style: { height: t, paddingBottom: j } }, g.children);
  }, A.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, A.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, A;
}(GM), d1 = function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleSegClick = function(D, N) {
      var L = g.component, t = L.context, j = Mj(N);
      if (j && L.isValidSegDownEl(D.target)) {
        var S = AI(D.target, ".fc-event-forced-url"), u = S ? S.querySelector("a[href]").href : "";
        t.emitter.trigger("eventClick", {
          el: N,
          event: new XA(L.context, j.eventRange.def, j.eventRange.instance),
          jsEvent: D,
          view: t.viewApi
        }), u && !D.defaultPrevented && (window.location.href = u);
      }
    }, g.destroy = we(
      I.el,
      "click",
      ".fc-event",
      g.handleSegClick
    ), g;
  }
  return A;
}(Ke), U1 = function(M) {
  TM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleEventElRemove = function(D) {
      D === g.currentSegEl && g.handleSegLeave(null, g.currentSegEl);
    }, g.handleSegEnter = function(D, N) {
      Mj(N) && (g.currentSegEl = N, g.triggerEvent("eventMouseEnter", D, N));
    }, g.handleSegLeave = function(D, N) {
      g.currentSegEl && (g.currentSegEl = null, g.triggerEvent("eventMouseLeave", D, N));
    }, g.removeHoverListeners = Sl(
      I.el,
      ".fc-event",
      g.handleSegEnter,
      g.handleSegLeave
    ), g;
  }
  return A.prototype.destroy = function() {
    this.removeHoverListeners();
  }, A.prototype.triggerEvent = function(I, g, D) {
    var N = this.component, L = N.context, t = Mj(D);
    (!g || N.isValidSegDownEl(g.target)) && L.emitter.trigger(I, {
      el: D,
      event: new XA(L, t.eventRange.def, t.eventRange.instance),
      jsEvent: g,
      view: L.viewApi
    });
  }, A;
}(Ke), m1 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildViewContext = UM(ec), I.buildViewPropTransformers = UM(h1), I.buildToolbarProps = UM(O1), I.headerRef = OA(), I.footerRef = OA(), I.interactionsStore = {}, I.state = {
      viewLabelId: mI()
    }, I.registerInteractiveComponent = function(g, D) {
      var N = z1(g, D), L = [
        d1,
        U1
      ], t = L.concat(I.props.pluginHooks.componentInteractions), j = t.map(function(S) {
        return new S(N);
      });
      I.interactionsStore[g.uid] = j, $4[g.uid] = N;
    }, I.unregisterInteractiveComponent = function(g) {
      var D = I.interactionsStore[g.uid];
      if (D) {
        for (var N = 0, L = D; N < L.length; N++) {
          var t = L[N];
          t.destroy();
        }
        delete I.interactionsStore[g.uid];
      }
      delete $4[g.uid];
    }, I.resizeRunner = new Xj(function() {
      I.props.emitter.trigger("_resize", !0), I.props.emitter.trigger("windowResize", { view: I.props.viewApi });
    }), I.handleWindowResize = function(g) {
      var D = I.props.options;
      D.handleWindowResize && g.target === window && I.resizeRunner.request(D.windowResizeDelay);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.toolbarConfig, D = I.options, N = this.buildToolbarProps(
      I.viewSpec,
      I.dateProfile,
      I.dateProfileGenerator,
      I.currentDate,
      JD(I.options.now, I.dateEnv),
      I.viewTitle
    ), L = !1, t = "", j;
    I.isHeightAuto || I.forPrint ? t = "" : D.height != null ? L = !0 : D.contentHeight != null ? t = D.contentHeight : j = Math.max(D.aspectRatio, 0.5);
    var S = this.buildViewContext(I.viewSpec, I.viewApi, I.options, I.dateProfileGenerator, I.dateEnv, I.theme, I.pluginHooks, I.dispatch, I.getCurrentData, I.emitter, I.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), u = g.header && g.header.hasTitle ? this.state.viewLabelId : "";
    return O(
      Lg.Provider,
      { value: S },
      g.header && O(q4, m({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: g.header, titleId: u }, N)),
      O(
        r1,
        { liquid: L, height: t, aspectRatio: j, labeledById: u },
        this.renderView(I),
        this.buildAppendContent()
      ),
      g.footer && O(q4, m({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: g.footer, titleId: "" }, N))
    );
  }, A.prototype.componentDidMount = function() {
    var I = this.props;
    this.calendarInteractions = I.pluginHooks.calendarInteractions.map(function(N) {
      return new N(I);
    }), window.addEventListener("resize", this.handleWindowResize);
    var g = I.pluginHooks.propSetHandlers;
    for (var D in g)
      g[D](I[D], I);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props, D = g.pluginHooks.propSetHandlers;
    for (var N in D)
      g[N] !== I[N] && D[N](g[N], g);
  }, A.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (var I = 0, g = this.calendarInteractions; I < g.length; I++) {
      var D = g[I];
      D.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }, A.prototype.buildAppendContent = function() {
    var I = this.props, g = I.pluginHooks.viewContainerAppends.map(function(D) {
      return D(I);
    });
    return O.apply(void 0, HM([SA, {}], g));
  }, A.prototype.renderView = function(I) {
    for (var g = I.pluginHooks, D = I.viewSpec, N = {
      dateProfile: I.dateProfile,
      businessHours: I.businessHours,
      eventStore: I.renderableEventStore,
      eventUiBases: I.eventUiBases,
      dateSelection: I.dateSelection,
      eventSelection: I.eventSelection,
      eventDrag: I.eventDrag,
      eventResize: I.eventResize,
      isHeightAuto: I.isHeightAuto,
      forPrint: I.forPrint
    }, L = this.buildViewPropTransformers(g.viewPropsTransformers), t = 0, j = L; t < j.length; t++) {
      var S = j[t];
      m(N, S.transform(N, I));
    }
    var u = D.component;
    return O(u, m({}, N));
  }, A;
}(oL);
function O1(M, A, I, g, D, N) {
  var L = I.build(D, void 0, !1), t = I.buildPrev(A, g, !1), j = I.buildNext(A, g, !1);
  return {
    title: N,
    activeButton: M.type,
    navUnit: M.singleUnit,
    isTodayEnabled: L.isValid && !_I(A.currentRange, D),
    isPrevEnabled: t.isValid,
    isNextEnabled: j.isValid
  };
}
function h1(M) {
  return M.map(function(A) {
    return new A();
  });
}
var b1 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      forPrint: !1
    }, I.handleBeforePrint = function() {
      I.setState({ forPrint: !0 });
    }, I.handleAfterPrint = function() {
      I.setState({ forPrint: !1 });
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.options, D = this.state.forPrint, N = D || g.height === "auto" || g.contentHeight === "auto", L = !N && g.height != null ? g.height : "", t = [
      "fc",
      D ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + g.direction,
      I.theme.getClass("root")
    ];
    return pe() || t.push("fc-liquid-hack"), I.children(t, L, N, D);
  }, A.prototype.componentDidMount = function() {
    var I = this.props.emitter;
    I.on("_beforeprint", this.handleBeforePrint), I.on("_afterprint", this.handleAfterPrint);
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.emitter;
    I.off("_beforeprint", this.handleBeforePrint), I.off("_afterprint", this.handleAfterPrint);
  }, A;
}(GM);
function W1(M, A) {
  return !M || A > 10 ? AA({ weekday: "short" }) : A > 1 ? AA({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : AA({ weekday: "long" });
}
var MC = "fc-col-header-cell";
function AC(M) {
  return M.text;
}
var k1 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.dateEnv, D = I.options, N = I.theme, L = I.viewApi, t = this.props, j = t.date, S = t.dateProfile, u = Bj(j, t.todayRange, null, S), i = [MC].concat(nL(u, N)), C = g.format(j, t.dayHeaderFormat), w = !u.isDisabled && t.colCnt > 1 ? bD(this.context, j) : {}, E = m(m(m({ date: g.toDate(j), view: L }, t.extraHookProps), { text: C }), u);
    return O(yI, { hookProps: E, classNames: D.dayHeaderClassNames, content: D.dayHeaderContent, defaultContent: AC, didMount: D.dayHeaderDidMount, willUnmount: D.dayHeaderWillUnmount }, function(x, n, a, z) {
      return O(
        "th",
        m({ ref: x, role: "columnheader", className: i.concat(n).join(" "), "data-date": u.isDisabled ? void 0 : yL(j), colSpan: t.colSpan }, t.extraDataAttrs),
        O("div", { className: "fc-scrollgrid-sync-inner" }, !u.isDisabled && O("a", m({ ref: a, className: [
          "fc-col-header-cell-cushion",
          t.isSticky ? "fc-sticky" : ""
        ].join(" ") }, w), z))
      );
    });
  }, A;
}(GM), p1 = AA({ weekday: "long" }), Q1 = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.context, D = g.dateEnv, N = g.theme, L = g.viewApi, t = g.options, j = IA(new Date(2592e5), I.dow), S = {
      dow: I.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, u = [MC].concat(nL(S, N), I.extraClassNames || []), i = D.format(j, I.dayHeaderFormat), C = m(m(m(m({
      date: j
    }, S), { view: L }), I.extraHookProps), { text: i });
    return O(yI, { hookProps: C, classNames: t.dayHeaderClassNames, content: t.dayHeaderContent, defaultContent: AC, didMount: t.dayHeaderDidMount, willUnmount: t.dayHeaderWillUnmount }, function(w, E, x, n) {
      return O(
        "th",
        m({ ref: w, role: "columnheader", className: u.concat(E).join(" "), colSpan: I.colSpan }, I.extraDataAttrs),
        O(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          O("a", { "aria-label": D.format(j, p1), className: [
            "fc-col-header-cell-cushion",
            I.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: x }, n)
        )
      );
    });
  }, A;
}(GM), Rj = function(M) {
  TM(A, M);
  function A(I, g) {
    var D = M.call(this, I, g) || this;
    return D.initialNowDate = JD(g.options.now, g.dateEnv), D.initialNowQueriedMs = new Date().valueOf(), D.state = D.computeTiming().currentState, D;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state;
    return g.children(D.nowDate, D.todayRange);
  }, A.prototype.componentDidMount = function() {
    this.setTimeout();
  }, A.prototype.componentDidUpdate = function(I) {
    I.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }, A.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  }, A.prototype.computeTiming = function() {
    var I = this, g = I.props, D = I.context, N = Ag(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), L = D.dateEnv.startOf(N, g.unit), t = D.dateEnv.add(L, pM(1, g.unit)), j = t.valueOf() - N.valueOf();
    return j = Math.min(1e3 * 60 * 60 * 24, j), {
      currentState: { nowDate: L, todayRange: K4(L) },
      nextState: { nowDate: t, todayRange: K4(t) },
      waitMs: j
    };
  }, A.prototype.setTimeout = function() {
    var I = this, g = this.computeTiming(), D = g.nextState, N = g.waitMs;
    this.timeoutId = setTimeout(function() {
      I.setState(D, function() {
        I.setTimeout();
      });
    }, N);
  }, A.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, A.contextType = Lg, A;
}(hj);
function K4(M) {
  var A = ZM(M), I = IA(A, 1);
  return { start: A, end: I };
}
var v1 = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.createDayHeaderFormatter = UM(G1), I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = this.props, D = g.dates, N = g.dateProfile, L = g.datesRepDistinctDays, t = g.renderIntro, j = this.createDayHeaderFormatter(I.options.dayHeaderFormat, L, D.length);
    return O(Rj, { unit: "day" }, function(S, u) {
      return O(
        "tr",
        { role: "row" },
        t && t("day"),
        D.map(function(i) {
          return L ? O(k1, { key: i.toISOString(), date: i, dateProfile: N, todayRange: u, colCnt: D.length, dayHeaderFormat: j }) : O(Q1, { key: i.getUTCDay(), dow: i.getUTCDay(), dayHeaderFormat: j });
        })
      );
    });
  }, A;
}(GM);
function G1(M, A, I) {
  return M || W1(A, I);
}
var f1 = function() {
  function M(A, I) {
    for (var g = A.start, D = A.end, N = [], L = [], t = -1; g < D; )
      I.isHiddenDay(g) ? N.push(t + 0.5) : (t += 1, N.push(t), L.push(g)), g = IA(g, 1);
    this.dates = L, this.indices = N, this.cnt = L.length;
  }
  return M.prototype.sliceRange = function(A) {
    var I = this.getDateDayIndex(A.start), g = this.getDateDayIndex(IA(A.end, -1)), D = Math.max(0, I), N = Math.min(this.cnt - 1, g);
    return D = Math.ceil(D), N = Math.floor(N), D <= N ? {
      firstIndex: D,
      lastIndex: N,
      isStart: I === D,
      isEnd: g === N
    } : null;
  }, M.prototype.getDateDayIndex = function(A) {
    var I = this.indices, g = Math.floor(Ng(this.dates[0], A));
    return g < 0 ? I[0] - 1 : g >= I.length ? I[I.length - 1] + 1 : I[g];
  }, M;
}(), J1 = function() {
  function M(A, I) {
    var g = A.dates, D, N, L;
    if (I) {
      for (N = g[0].getUTCDay(), D = 1; D < g.length && g[D].getUTCDay() !== N; D += 1)
        ;
      L = Math.ceil(g.length / D);
    } else
      L = 1, D = g.length;
    this.rowCnt = L, this.colCnt = D, this.daySeries = A, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  return M.prototype.buildCells = function() {
    for (var A = [], I = 0; I < this.rowCnt; I += 1) {
      for (var g = [], D = 0; D < this.colCnt; D += 1)
        g.push(this.buildCell(I, D));
      A.push(g);
    }
    return A;
  }, M.prototype.buildCell = function(A, I) {
    var g = this.daySeries.dates[A * this.colCnt + I];
    return {
      key: g.toISOString(),
      date: g
    };
  }, M.prototype.buildHeaderDates = function() {
    for (var A = [], I = 0; I < this.colCnt; I += 1)
      A.push(this.cells[0][I].date);
    return A;
  }, M.prototype.sliceRange = function(A) {
    var I = this.colCnt, g = this.daySeries.sliceRange(A), D = [];
    if (g)
      for (var N = g.firstIndex, L = g.lastIndex, t = N; t <= L; ) {
        var j = Math.floor(t / I), S = Math.min((j + 1) * I, L + 1);
        D.push({
          row: j,
          firstCol: t % I,
          lastCol: (S - 1) % I,
          isStart: g.isStart && t === N,
          isEnd: g.isEnd && S - 1 === L
        }), t = S;
      }
    return D;
  }, M;
}(), V1 = function() {
  function M() {
    this.sliceBusinessHours = UM(this._sliceBusinessHours), this.sliceDateSelection = UM(this._sliceDateSpan), this.sliceEventStore = UM(this._sliceEventStore), this.sliceEventDrag = UM(this._sliceInteraction), this.sliceEventResize = UM(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return M.prototype.sliceProps = function(A, I, g, D) {
    for (var N = [], L = 4; L < arguments.length; L++)
      N[L - 4] = arguments[L];
    var t = A.eventUiBases, j = this.sliceEventStore.apply(this, HM([A.eventStore, t, I, g], N));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, HM([A.dateSelection, t, D], N)),
      businessHourSegs: this.sliceBusinessHours.apply(this, HM([A.businessHours, I, g, D], N)),
      fgEventSegs: j.fg,
      bgEventSegs: j.bg,
      eventDrag: this.sliceEventDrag.apply(this, HM([A.eventDrag, t, I, g], N)),
      eventResize: this.sliceEventResize.apply(this, HM([A.eventResize, t, I, g], N)),
      eventSelection: A.eventSelection
    };
  }, M.prototype.sliceNowDate = function(A, I) {
    for (var g = [], D = 2; D < arguments.length; D++)
      g[D - 2] = arguments[D];
    return this._sliceDateSpan.apply(this, HM([
      { range: { start: A, end: Ag(A, 1) }, allDay: !1 },
      {},
      I
    ], g));
  }, M.prototype._sliceBusinessHours = function(A, I, g, D) {
    for (var N = [], L = 4; L < arguments.length; L++)
      N[L - 4] = arguments[L];
    return A ? this._sliceEventStore.apply(this, HM([
      aL(A, Et(I, Boolean(g)), D),
      {},
      I,
      g
    ], N)).bg : [];
  }, M.prototype._sliceEventStore = function(A, I, g, D) {
    for (var N = [], L = 4; L < arguments.length; L++)
      N[L - 4] = arguments[L];
    if (A) {
      var t = Kt(A, I, Et(g, Boolean(D)), D);
      return {
        bg: this.sliceEventRanges(t.bg, N),
        fg: this.sliceEventRanges(t.fg, N)
      };
    }
    return { bg: [], fg: [] };
  }, M.prototype._sliceInteraction = function(A, I, g, D) {
    for (var N = [], L = 4; L < arguments.length; L++)
      N[L - 4] = arguments[L];
    if (!A)
      return null;
    var t = Kt(A.mutatedEvents, I, Et(g, Boolean(D)), D);
    return {
      segs: this.sliceEventRanges(t.fg, N),
      affectedInstances: A.affectedEvents.instances,
      isEvent: A.isEvent
    };
  }, M.prototype._sliceDateSpan = function(A, I, g) {
    for (var D = [], N = 3; N < arguments.length; N++)
      D[N - 3] = arguments[N];
    if (!A)
      return [];
    for (var L = Ys(A, I, g), t = this.sliceRange.apply(this, HM([A.range], D)), j = 0, S = t; j < S.length; j++) {
      var u = S[j];
      u.eventRange = L;
    }
    return t;
  }, M.prototype.sliceEventRanges = function(A, I) {
    for (var g = [], D = 0, N = A; D < N.length; D++) {
      var L = N[D];
      g.push.apply(g, this.sliceEventRange(L, I));
    }
    return g;
  }, M.prototype.sliceEventRange = function(A, I) {
    var g = A.range;
    this.forceDayIfListItem && A.ui.display === "list-item" && (g = {
      start: g.start,
      end: IA(g.start, 1)
    });
    for (var D = this.sliceRange.apply(this, HM([g], I)), N = 0, L = D; N < L.length; N++) {
      var t = L[N];
      t.eventRange = A, t.isStart = A.isStart && t.isStart, t.isEnd = A.isEnd && t.isEnd;
    }
    return D;
  }, M;
}();
function Et(M, A) {
  var I = M.activeRange;
  return A ? I : {
    start: Ag(I.start, M.slotMinTime.milliseconds),
    end: Ag(I.end, M.slotMaxTime.milliseconds - 864e5)
  };
}
var IN = /^(visible|hidden)$/, IC = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleEl = function(g) {
      I.el = g, CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.liquid, D = I.liquidIsAbsolute, N = g && D, L = ["fc-scroller"];
    return g && (D ? L.push("fc-scroller-liquid-absolute") : L.push("fc-scroller-liquid")), O("div", { ref: this.handleEl, className: L.join(" "), style: {
      overflowX: I.overflowX,
      overflowY: I.overflowY,
      left: N && -(I.overcomeLeft || 0) || "",
      right: N && -(I.overcomeRight || 0) || "",
      bottom: N && -(I.overcomeBottom || 0) || "",
      marginLeft: !N && -(I.overcomeLeft || 0) || "",
      marginRight: !N && -(I.overcomeRight || 0) || "",
      marginBottom: !N && -(I.overcomeBottom || 0) || "",
      maxHeight: I.maxHeight || ""
    } }, I.children);
  }, A.prototype.needsXScrolling = function() {
    if (IN.test(this.props.overflowX))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), D = I.children, N = 0; N < D.length; N += 1) {
      var L = D[N];
      if (L.getBoundingClientRect().width > g)
        return !0;
    }
    return !1;
  }, A.prototype.needsYScrolling = function() {
    if (IN.test(this.props.overflowY))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), D = I.children, N = 0; N < D.length; N += 1) {
      var L = D[N];
      if (L.getBoundingClientRect().height > g)
        return !0;
    }
    return !1;
  }, A.prototype.getXScrollbarWidth = function() {
    return IN.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, A.prototype.getYScrollbarWidth = function() {
    return IN.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, A;
}(GM), XI = function() {
  function M(A) {
    var I = this;
    this.masterCallback = A, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(g, D) {
      var N = I, L = N.depths, t = N.currentMap, j = !1, S = !1;
      g !== null ? (j = D in t, t[D] = g, L[D] = (L[D] || 0) + 1, S = !0) : (L[D] -= 1, L[D] || (delete t[D], delete I.callbackMap[D], j = !0)), I.masterCallback && (j && I.masterCallback(null, String(D)), S && I.masterCallback(g, String(D)));
    };
  }
  return M.prototype.createRef = function(A) {
    var I = this, g = this.callbackMap[A];
    return g || (g = this.callbackMap[A] = function(D) {
      I.handleValue(D, String(A));
    }), g;
  }, M.prototype.collect = function(A, I, g) {
    return Ul(this.currentMap, A, I, g);
  }, M.prototype.getAll = function() {
    return kj(this.currentMap);
  }, M;
}();
function Z1(M) {
  for (var A = Nl(M, ".fc-scrollgrid-shrink"), I = 0, g = 0, D = A; g < D.length; g++) {
    var N = D[g];
    I = Math.max(I, El(N));
  }
  return Math.ceil(I);
}
function gC(M, A) {
  return M.liquid && A.liquid;
}
function B1(M, A) {
  return A.maxHeight != null || gC(M, A);
}
function P1(M, A, I, g) {
  var D = I.expandRows, N = typeof A.content == "function" ? A.content(I) : O("table", {
    role: "presentation",
    className: [
      A.tableClassName,
      M.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: I.tableMinWidth,
      width: I.clientWidth,
      height: D ? I.clientHeight : ""
    }
  }, I.tableColGroupNode, O(g ? "thead" : "tbody", {
    role: "presentation"
  }, typeof A.rowContent == "function" ? A.rowContent(I) : A.rowContent));
  return N;
}
function F1(M, A) {
  return fg(M, A, eI);
}
function X1(M, A) {
  for (var I = [], g = 0, D = M; g < D.length; g++)
    for (var N = D[g], L = N.span || 1, t = 0; t < L; t += 1)
      I.push(O("col", { style: {
        width: N.width === "shrink" ? R1(A) : N.width || "",
        minWidth: N.minWidth || ""
      } }));
  return O.apply(void 0, HM(["colgroup", {}], I));
}
function R1(M) {
  return M == null ? 4 : M;
}
function H1(M) {
  for (var A = 0, I = M; A < I.length; A++) {
    var g = I[A];
    if (g.width === "shrink")
      return !0;
  }
  return !1;
}
function _1(M, A) {
  var I = [
    "fc-scrollgrid",
    A.theme.getClass("table")
  ];
  return M && I.push("fc-scrollgrid-liquid"), I;
}
function $1(M, A) {
  var I = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + M.type,
    M.className
  ];
  return A && M.liquid && M.maxHeight == null && I.push("fc-scrollgrid-section-liquid"), M.isSticky && I.push("fc-scrollgrid-section-sticky"), I;
}
function q1(M) {
  return O("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: M.clientWidth,
    minWidth: M.tableMinWidth
  } });
}
function MS(M) {
  var A = M.stickyHeaderDates;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
function K1(M) {
  var A = M.stickyFooterScrollbar;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
var DC = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.processCols = UM(function(g) {
      return g;
    }, F1), I.renderMicroColGroup = UM(X1), I.scrollerRefs = new XI(), I.scrollerElRefs = new XI(I._handleScrollerEl.bind(I)), I.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, I.handleSizing = function() {
      I.safeSetState(m({ shrinkWidth: I.computeShrinkWidth() }, I.computeScrollerDims()));
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state, N = I.context, L = g.sections || [], t = this.processCols(g.cols), j = this.renderMicroColGroup(t, D.shrinkWidth), S = _1(g.liquid, N);
    g.collapsibleWidth && S.push("fc-scrollgrid-collapsible");
    for (var u = L.length, i = 0, C, w = [], E = [], x = []; i < u && (C = L[i]).type === "header"; )
      w.push(this.renderSection(C, j, !0)), i += 1;
    for (; i < u && (C = L[i]).type === "body"; )
      E.push(this.renderSection(C, j, !1)), i += 1;
    for (; i < u && (C = L[i]).type === "footer"; )
      x.push(this.renderSection(C, j, !0)), i += 1;
    var n = !pe(), a = { role: "rowgroup" };
    return O("table", {
      role: "grid",
      className: S.join(" "),
      style: { height: g.height }
    }, Boolean(!n && w.length) && O.apply(void 0, HM(["thead", a], w)), Boolean(!n && E.length) && O.apply(void 0, HM(["tbody", a], E)), Boolean(!n && x.length) && O.apply(void 0, HM(["tfoot", a], x)), n && O.apply(void 0, HM(HM(HM(["tbody", a], w), E), x)));
  }, A.prototype.renderSection = function(I, g, D) {
    return "outerContent" in I ? O(SA, { key: I.key }, I.outerContent) : O("tr", { key: I.key, role: "presentation", className: $1(I, this.props.liquid).join(" ") }, this.renderChunkTd(I, g, I.chunk, D));
  }, A.prototype.renderChunkTd = function(I, g, D, N) {
    if ("outerContent" in D)
      return D.outerContent;
    var L = this.props, t = this.state, j = t.forceYScrollbars, S = t.scrollerClientWidths, u = t.scrollerClientHeights, i = B1(L, I), C = gC(L, I), w = L.liquid ? j ? "scroll" : i ? "auto" : "hidden" : "visible", E = I.key, x = P1(I, D, {
      tableColGroupNode: g,
      tableMinWidth: "",
      clientWidth: !L.collapsibleWidth && S[E] !== void 0 ? S[E] : null,
      clientHeight: u[E] !== void 0 ? u[E] : null,
      expandRows: I.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, N);
    return O(N ? "th" : "td", {
      ref: D.elRef,
      role: "presentation"
    }, O(
      "div",
      { className: "fc-scroller-harness" + (C ? " fc-scroller-harness-liquid" : "") },
      O(IC, { ref: this.scrollerRefs.createRef(E), elRef: this.scrollerElRefs.createRef(E), overflowY: w, overflowX: L.liquid ? "hidden" : "visible", maxHeight: I.maxHeight, liquid: C, liquidIsAbsolute: !0 }, x)
    ));
  }, A.prototype._handleScrollerEl = function(I, g) {
    var D = Mz(this.props.sections, g);
    D && CI(D.chunk.scrollerElRef, I);
  }, A.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, A.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, A.prototype.computeShrinkWidth = function() {
    return H1(this.props.cols) ? Z1(this.scrollerElRefs.getAll()) : 0;
  }, A.prototype.computeScrollerDims = function() {
    var I = Ic(), g = this, D = g.scrollerRefs, N = g.scrollerElRefs, L = !1, t = {}, j = {};
    for (var S in D.currentMap) {
      var u = D.currentMap[S];
      if (u && u.needsYScrolling()) {
        L = !0;
        break;
      }
    }
    for (var i = 0, C = this.props.sections; i < C.length; i++) {
      var w = C[i], S = w.key, E = N.currentMap[S];
      if (E) {
        var x = E.parentNode;
        t[S] = Math.floor(x.getBoundingClientRect().width - (L ? I.y : 0)), j[S] = Math.floor(x.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: L, scrollerClientWidths: t, scrollerClientHeights: j };
  }, A;
}(GM);
DC.addStateEquality({
  scrollerClientWidths: eI,
  scrollerClientHeights: eI
});
function Mz(M, A) {
  for (var I = 0, g = M; I < g.length; I++) {
    var D = g[I];
    if (D.key === A)
      return D;
  }
  return null;
}
var lL = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.elRef = OA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = g.seg, t = L.eventRange, j = t.ui, S = {
      event: new XA(D, t.def, t.instance),
      view: D.viewApi,
      timeText: g.timeText,
      textColor: j.textColor,
      backgroundColor: j.backgroundColor,
      borderColor: j.borderColor,
      isDraggable: !g.disableDragging && xs(L, D),
      isStartResizable: !g.disableResizing && as(L, D),
      isEndResizable: !g.disableResizing && ys(L),
      isMirror: Boolean(g.isDragging || g.isResizing || g.isDateSelecting),
      isStart: Boolean(L.isStart),
      isEnd: Boolean(L.isEnd),
      isPast: Boolean(g.isPast),
      isFuture: Boolean(g.isFuture),
      isToday: Boolean(g.isToday),
      isSelected: Boolean(g.isSelected),
      isDragging: Boolean(g.isDragging),
      isResizing: Boolean(g.isResizing)
    }, u = ns(S).concat(j.classNames);
    return O(yI, { hookProps: S, classNames: N.eventClassNames, content: N.eventContent, defaultContent: g.defaultContent, didMount: N.eventDidMount, willUnmount: N.eventWillUnmount, elRef: this.elRef }, function(i, C, w, E) {
      return g.children(i, u.concat(C), w, E, S);
    });
  }, A.prototype.componentDidMount = function() {
    f4(this.elRef.current, this.props.seg);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props.seg;
    g !== I.seg && f4(this.elRef.current, g);
  }, A;
}(GM), Az = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = g.seg, L = D.options.eventTimeFormat || g.defaultTimeFormat, t = sD(N, L, D, g.defaultDisplayEventTime, g.defaultDisplayEventEnd);
    return O(lL, { seg: N, timeText: t, disableDragging: g.disableDragging, disableResizing: g.disableResizing, defaultContent: g.defaultContent || Iz, isDragging: g.isDragging, isResizing: g.isResizing, isDateSelecting: g.isDateSelecting, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(j, S, u, i, C) {
      return O(
        "a",
        m({ className: g.extraClassNames.concat(S).join(" "), style: {
          borderColor: C.borderColor,
          backgroundColor: C.backgroundColor
        }, ref: j }, Vj(N, D)),
        O("div", { className: "fc-event-main", ref: u, style: { color: C.textColor } }, i),
        C.isStartResizable && O("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        C.isEndResizable && O("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, A;
}(GM);
function Iz(M) {
  return O(
    "div",
    { className: "fc-event-main-frame" },
    M.timeText && O("div", { className: "fc-event-time" }, M.timeText),
    O(
      "div",
      { className: "fc-event-title-container" },
      O("div", { className: "fc-event-title fc-sticky" }, M.event.title || O(SA, null, "\xA0"))
    )
  );
}
var gz = AA({ day: "numeric" }), NC = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = LC({
      date: g.date,
      dateProfile: g.dateProfile,
      todayRange: g.todayRange,
      showDayNumber: g.showDayNumber,
      extraProps: g.extraHookProps,
      viewApi: D.viewApi,
      dateEnv: D.dateEnv
    });
    return O(Ge, { hookProps: L, content: N.dayCellContent, defaultContent: g.defaultContent }, g.children);
  }, A;
}(GM);
function LC(M) {
  var A = M.date, I = M.dateEnv, g = Bj(A, M.todayRange, null, M.dateProfile);
  return m(m(m({ date: I.toDate(A), view: M.viewApi }, g), { dayNumberText: M.showDayNumber ? I.format(A, gz) : "" }), M.extraProps);
}
var tC = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.refineHookProps = cN(LC), I.normalizeClassNames = fe(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = this.refineHookProps({
      date: g.date,
      dateProfile: g.dateProfile,
      todayRange: g.todayRange,
      showDayNumber: g.showDayNumber,
      extraProps: g.extraHookProps,
      viewApi: D.viewApi,
      dateEnv: D.dateEnv
    }), t = nL(L, D.theme).concat(L.isDisabled ? [] : this.normalizeClassNames(N.dayCellClassNames, L)), j = L.isDisabled ? {} : {
      "data-date": yL(g.date)
    };
    return O(Pj, { hookProps: L, didMount: N.dayCellDidMount, willUnmount: N.dayCellWillUnmount, elRef: g.elRef }, function(S) {
      return g.children(S, t, j, L.isDisabled);
    });
  }, A;
}(GM);
function Dz(M) {
  return O("div", { className: "fc-" + M });
}
var Nz = function(M) {
  return O(lL, { defaultContent: Lz, seg: M.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: M.isPast, isFuture: M.isFuture, isToday: M.isToday }, function(A, I, g, D, N) {
    return O("div", { ref: A, className: ["fc-bg-event"].concat(I).join(" "), style: {
      backgroundColor: N.backgroundColor
    } }, D);
  });
};
function Lz(M) {
  var A = M.event.title;
  return A && O("div", { className: "fc-event-title" }, M.event.title);
}
var tz = function(M) {
  return O(Lg.Consumer, null, function(A) {
    var I = A.dateEnv, g = A.options, D = M.date, N = g.weekNumberFormat || M.defaultFormat, L = I.computeWeekNumber(D), t = I.format(D, N), j = { num: L, text: t, date: D };
    return O(yI, { hookProps: j, classNames: g.weekNumberClassNames, content: g.weekNumberContent, defaultContent: jz, didMount: g.weekNumberDidMount, willUnmount: g.weekNumberWillUnmount }, M.children);
  });
};
function jz(M) {
  return M.text;
}
var Tt = 10, uz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      titleId: mI()
    }, I.handleRootEl = function(g) {
      I.rootEl = g, I.props.elRef && CI(I.props.elRef, g);
    }, I.handleDocumentMouseDown = function(g) {
      var D = jl(g);
      I.rootEl.contains(D) || I.handleCloseClick();
    }, I.handleDocumentKeyDown = function(g) {
      g.key === "Escape" && I.handleCloseClick();
    }, I.handleCloseClick = function() {
      var g = I.props.onClose;
      g && g();
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.theme, D = I.options, N = this, L = N.props, t = N.state, j = [
      "fc-popover",
      g.getClass("popover")
    ].concat(L.extraClassNames || []);
    return Al(O(
      "div",
      m({ id: L.id, className: j.join(" "), "aria-labelledby": t.titleId }, L.extraAttrs, { ref: this.handleRootEl }),
      O(
        "div",
        { className: "fc-popover-header " + g.getClass("popoverHeader") },
        O("span", { className: "fc-popover-title", id: t.titleId }, L.title),
        O("span", { className: "fc-popover-close " + g.getIconClass("close"), title: D.closeHint, onClick: this.handleCloseClick })
      ),
      O("div", { className: "fc-popover-body " + g.getClass("popoverContent") }, L.children)
    ), L.parentEl);
  }, A.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, A.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, A.prototype.updateSize = function() {
    var I = this.context.isRtl, g = this.props, D = g.alignmentEl, N = g.alignGridTop, L = this.rootEl, t = Nc(D);
    if (t) {
      var j = L.getBoundingClientRect(), S = N ? AI(D, ".fc-scrollgrid").getBoundingClientRect().top : t.top, u = I ? t.right - j.width : t.left;
      S = Math.max(S, Tt), u = Math.min(u, document.documentElement.clientWidth - Tt - j.width), u = Math.max(u, Tt);
      var i = L.offsetParent.getBoundingClientRect();
      tl(L, {
        top: S - i.top,
        left: u - i.left
      });
    }
  }, A;
}(GM), Sz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleRootEl = function(g) {
      I.rootEl = g, g ? I.context.registerInteractiveComponent(I, {
        el: g,
        useEventCenter: !1
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.options, D = I.dateEnv, N = this.props, L = N.startDate, t = N.todayRange, j = N.dateProfile, S = D.format(L, g.dayPopoverFormat);
    return O(tC, { date: L, dateProfile: j, todayRange: t, elRef: this.handleRootEl }, function(u, i, C) {
      return O(
        uz,
        { elRef: u, id: N.id, title: S, extraClassNames: ["fc-more-popover"].concat(i), extraAttrs: C, parentEl: N.parentEl, alignmentEl: N.alignmentEl, alignGridTop: N.alignGridTop, onClose: N.onClose },
        O(NC, { date: L, dateProfile: j, todayRange: t }, function(w, E) {
          return E && O("div", { className: "fc-more-popover-misc", ref: w }, E);
        }),
        N.children
      );
    });
  }, A.prototype.queryHit = function(I, g, D, N) {
    var L = this, t = L.rootEl, j = L.props;
    return I >= 0 && I < D && g >= 0 && g < N ? {
      dateProfile: j.dateProfile,
      dateSpan: m({ allDay: !0, range: {
        start: j.startDate,
        end: j.endDate
      } }, j.extraDateSpan),
      dayEl: t,
      rect: {
        left: 0,
        top: 0,
        right: D,
        bottom: N
      },
      layer: 1
    } : null;
  }, A;
}(tg), iz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.linkElRef = OA(), I.state = {
      isPopoverOpen: !1,
      popoverId: mI()
    }, I.handleClick = function(g) {
      var D = I, N = D.props, L = D.context, t = L.options.moreLinkClick, j = AS(N).start;
      function S(u) {
        var i = u.eventRange, C = i.def, w = i.instance, E = i.range;
        return {
          event: new XA(L, C, w),
          start: L.dateEnv.toDate(E.start),
          end: L.dateEnv.toDate(E.end),
          isStart: u.isStart,
          isEnd: u.isEnd
        };
      }
      typeof t == "function" && (t = t({
        date: j,
        allDay: Boolean(N.allDayDate),
        allSegs: N.allSegs.map(S),
        hiddenSegs: N.hiddenSegs.map(S),
        jsEvent: g,
        view: L.viewApi
      })), !t || t === "popover" ? I.setState({ isPopoverOpen: !0 }) : typeof t == "string" && L.calendarApi.zoomTo(j, t);
    }, I.handlePopoverClose = function() {
      I.setState({ isPopoverOpen: !1 });
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, N = g.state;
    return O(Lg.Consumer, null, function(L) {
      var t = L.viewApi, j = L.options, S = L.calendarApi, u = j.moreLinkText, i = D.moreCnt, C = AS(D), w = typeof u == "function" ? u.call(S, i) : "+" + i + " " + u, E = oD(j.moreLinkHint, [i], w), x = {
        num: i,
        shortText: "+" + i,
        text: w,
        view: t
      };
      return O(
        SA,
        null,
        Boolean(D.moreCnt) && O(yI, { elRef: I.linkElRef, hookProps: x, classNames: j.moreLinkClassNames, content: j.moreLinkContent, defaultContent: D.defaultContent || ez, didMount: j.moreLinkDidMount, willUnmount: j.moreLinkWillUnmount }, function(n, a, z, d) {
          return D.children(n, ["fc-more-link"].concat(a), z, d, I.handleClick, E, N.isPopoverOpen, N.isPopoverOpen ? N.popoverId : "");
        }),
        N.isPopoverOpen && O(Sz, { id: N.popoverId, startDate: C.start, endDate: C.end, dateProfile: D.dateProfile, todayRange: D.todayRange, extraDateSpan: D.extraDateSpan, parentEl: I.parentEl, alignmentEl: D.alignmentElRef.current, alignGridTop: D.alignGridTop, onClose: I.handlePopoverClose }, D.popoverContent())
      );
    });
  }, A.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, A.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, A.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = AI(this.linkElRef.current, ".fc-view-harness"));
  }, A;
}(GM);
function ez(M) {
  return M.text;
}
function AS(M) {
  if (M.allDayDate)
    return {
      start: M.allDayDate,
      end: IA(M.allDayDate, 1)
    };
  var A = M.hiddenSegs;
  return {
    start: Cz(A),
    end: Ez(A)
  };
}
function Cz(M) {
  return M.reduce(wz).eventRange.range.start;
}
function wz(M, A) {
  return M.eventRange.range.start < A.eventRange.range.start ? M : A;
}
function Ez(M) {
  return M.reduce(Tz).eventRange.range.end;
}
function Tz(M, A) {
  return M.eventRange.range.end > A.eventRange.range.end ? M : A;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var xz = function(M) {
  TM(A, M);
  function A(I, g) {
    g === void 0 && (g = {});
    var D = M.call(this) || this;
    return D.isRendering = !1, D.isRendered = !1, D.currentClassNames = [], D.customContentRenderId = 0, D.handleAction = function(N) {
      switch (N.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          D.renderRunner.tryDrain();
      }
    }, D.handleData = function(N) {
      D.currentData = N, D.renderRunner.request(N.calendarOptions.rerenderDelay);
    }, D.handleRenderRequest = function() {
      if (D.isRendering) {
        D.isRendered = !0;
        var N = D.currentData;
        z4(function() {
          Ml(O(b1, { options: N.calendarOptions, theme: N.theme, emitter: N.emitter }, function(L, t, j, S) {
            return D.setClassNames(L), D.setHeight(t), O(
              ve.Provider,
              { value: D.customContentRenderId },
              O(m1, m({ isHeightAuto: j, forPrint: S }, N))
            );
          }), D.el);
        });
      } else
        D.isRendered && (D.isRendered = !1, Il(D.el), D.setClassNames([]), D.setHeight(""));
    }, D.el = I, D.renderRunner = new Xj(D.handleRenderRequest), new $e({
      optionOverrides: g,
      calendarApi: D,
      onAction: D.handleAction,
      onData: D.handleData
    }), D;
  }
  return Object.defineProperty(A.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), A.prototype.render = function() {
    var I = this.isRendering;
    I ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), I && this.updateSize();
  }, A.prototype.destroy = function() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }, A.prototype.updateSize = function() {
    var I = this;
    z4(function() {
      M.prototype.updateSize.call(I);
    });
  }, A.prototype.batchRendering = function(I) {
    this.renderRunner.pause("batchRendering"), I(), this.renderRunner.resume("batchRendering");
  }, A.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  }, A.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", !0);
  }, A.prototype.resetOptions = function(I, g) {
    this.currentDataManager.resetOptions(I, g);
  }, A.prototype.setClassNames = function(I) {
    if (!fg(I, this.currentClassNames)) {
      for (var g = this.el.classList, D = 0, N = this.currentClassNames; D < N.length; D++) {
        var L = N[D];
        g.remove(L);
      }
      for (var t = 0, j = I; t < j.length; t++) {
        var L = j[t];
        g.add(L);
      }
      this.currentClassNames = I;
    }
  }, A.prototype.setHeight = function(I) {
    Ce(this.el, "height", I);
  }, A;
}(vs);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var az = {
  googleCalendarApiKey: String
}, yz = {
  googleCalendarApiKey: String,
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: f
}, nz = "https://www.googleapis.com/calendar/v3/calendars", oz = {
  parseMeta: function(M) {
    var A = M.googleCalendarId;
    return !A && M.url && (A = lz(M.url)), A ? {
      googleCalendarId: A,
      googleCalendarApiKey: M.googleCalendarApiKey,
      googleCalendarApiBase: M.googleCalendarApiBase,
      extraParams: M.extraParams
    } : null;
  },
  fetch: function(M, A, I) {
    var g = M.context, D = g.dateEnv, N = g.options, L = M.eventSource.meta, t = L.googleCalendarApiKey || N.googleCalendarApiKey;
    if (!t)
      I({
        message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
      });
    else {
      var j = sz(L), S = L.extraParams, u = typeof S == "function" ? S() : S, i = cz(M.range, t, u, D);
      He("GET", j, i, function(C, w) {
        C.error ? I({
          message: "Google Calendar API: " + C.error.message,
          errors: C.error.errors,
          xhr: w
        }) : A({
          rawEvents: zz(C.items, i.timeZone),
          xhr: w
        });
      }, function(C, w) {
        I({ message: C, xhr: w });
      });
    }
  }
};
function lz(M) {
  var A;
  return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(M) ? M : (A = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(M)) || (A = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(M)) ? decodeURIComponent(A[1]) : null;
}
function sz(M) {
  var A = M.googleCalendarApiBase;
  return A || (A = nz), A + "/" + encodeURIComponent(M.googleCalendarId) + "/events";
}
function cz(M, A, I, g) {
  var D, N, L;
  return g.canComputeOffset ? (N = g.formatIso(M.start), L = g.formatIso(M.end)) : (N = IA(M.start, -1).toISOString(), L = IA(M.end, 1).toISOString()), D = m(m({}, I || {}), { key: A, timeMin: N, timeMax: L, singleEvents: !0, maxResults: 9999 }), g.timeZone !== "local" && (D.timeZone = g.timeZone), D;
}
function zz(M, A) {
  return M.map(function(I) {
    return Yz(I, A);
  });
}
function Yz(M, A) {
  var I = M.htmlLink || null;
  return I && A && (I = rz(I, "ctz=" + A)), {
    id: M.id,
    title: M.summary,
    start: M.start.dateTime || M.start.date,
    end: M.end.dateTime || M.end.date,
    url: I,
    location: M.location,
    description: M.description,
    attachments: M.attachments || [],
    extendedProps: (M.extendedProperties || {}).shared || {}
  };
}
function rz(M, A) {
  return M.replace(/(\?.*?)?(#|$)/, function(I, g, D) {
    return (g ? g + "&" : "?") + A + D;
  });
}
var dz = aI({
  eventSourceDefs: [oz],
  optionRefiners: az,
  eventSourceRefiners: yz
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Uz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.headerElRef = OA(), I;
  }
  return A.prototype.renderSimpleLayout = function(I, g) {
    var D = this, N = D.props, L = D.context, t = [], j = MS(L.options);
    return I && t.push({
      type: "header",
      key: "header",
      isSticky: j,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: I
      }
    }), t.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: g }
    }), O($N, { viewSpec: L.viewSpec }, function(S, u) {
      return O(
        "div",
        { ref: S, className: ["fc-daygrid"].concat(u).join(" ") },
        O(DC, { liquid: !N.isHeightAuto && !N.forPrint, collapsibleWidth: N.forPrint, cols: [], sections: t })
      );
    });
  }, A.prototype.renderHScrollLayout = function(I, g, D, N) {
    var L = this.context.pluginHooks.scrollGridImpl;
    if (!L)
      throw new Error("No ScrollGrid implementation");
    var t = this, j = t.props, S = t.context, u = !j.forPrint && MS(S.options), i = !j.forPrint && K1(S.options), C = [];
    return I && C.push({
      type: "header",
      key: "header",
      isSticky: u,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: I
      }]
    }), C.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: g
      }]
    }), i && C.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: q1
      }]
    }), O($N, { viewSpec: S.viewSpec }, function(w, E) {
      return O(
        "div",
        { ref: w, className: ["fc-daygrid"].concat(E).join(" ") },
        O(L, { liquid: !j.isHeightAuto && !j.forPrint, collapsibleWidth: j.forPrint, colGroups: [{ cols: [{ span: D, minWidth: N }] }], sections: C })
      );
    });
  }, A;
}(tg);
function gN(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I[g] = [];
  for (var D = 0, N = M; D < N.length; D++) {
    var L = N[D];
    I[L.row].push(L);
  }
  return I;
}
function DN(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I[g] = [];
  for (var D = 0, N = M; D < N.length; D++) {
    var L = N[D];
    I[L.firstCol].push(L);
  }
  return I;
}
function IS(M, A) {
  var I = [];
  if (M) {
    for (var g = 0; g < A; g += 1)
      I[g] = {
        affectedInstances: M.affectedInstances,
        isEvent: M.isEvent,
        segs: []
      };
    for (var D = 0, N = M.segs; D < N.length; D++) {
      var L = N[D];
      I[L.row].segs.push(L);
    }
  } else
    for (var g = 0; g < A; g += 1)
      I[g] = null;
  return I;
}
var mz = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = bD(this.context, I.date);
    return O(NC, { date: I.date, dateProfile: I.dateProfile, todayRange: I.todayRange, showDayNumber: I.showDayNumber, extraHookProps: I.extraHookProps, defaultContent: Oz }, function(D, N) {
      return (N || I.forceDayTop) && O(
        "div",
        { className: "fc-daygrid-day-top", ref: D },
        O("a", m({ id: I.dayNumberId, className: "fc-daygrid-day-number" }, g), N || O(SA, null, "\xA0"))
      );
    });
  }, A;
}(GM);
function Oz(M) {
  return M.dayNumberText;
}
var jC = AA({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function uC(M) {
  var A = M.eventRange.ui.display;
  return A === "list-item" || A === "auto" && !M.eventRange.def.allDay && M.firstCol === M.lastCol && M.isStart && M.isEnd;
}
var SC = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props;
    return O(Az, m({}, I, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: jC, defaultDisplayEventEnd: I.defaultDisplayEventEnd, disableResizing: !I.seg.eventRange.def.allDay }));
  }, A;
}(GM), iC = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options.eventTimeFormat || jC, L = sD(g.seg, N, D, !0, g.defaultDisplayEventEnd);
    return O(lL, { seg: g.seg, timeText: L, defaultContent: hz, isDragging: g.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(t, j, S, u) {
      return O("a", m({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(j).join(" "), ref: t }, Vj(g.seg, D)), u);
    });
  }, A;
}(GM);
function hz(M) {
  return O(
    SA,
    null,
    O("div", { className: "fc-daygrid-event-dot", style: { borderColor: M.borderColor || M.backgroundColor } }),
    M.timeText && O("div", { className: "fc-event-time" }, M.timeText),
    O("div", { className: "fc-event-title" }, M.event.title || O(SA, null, "\xA0"))
  );
}
var bz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.compileSegs = UM(Wz), I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.compileSegs(I.singlePlacements), D = g.allSegs, N = g.invisibleSegs;
    return O(iz, { dateProfile: I.dateProfile, todayRange: I.todayRange, allDayDate: I.allDayDate, moreCnt: I.moreCnt, allSegs: D, hiddenSegs: N, alignmentElRef: I.alignmentElRef, alignGridTop: I.alignGridTop, extraDateSpan: I.extraDateSpan, popoverContent: function() {
      var L = (I.eventDrag ? I.eventDrag.affectedInstances : null) || (I.eventResize ? I.eventResize.affectedInstances : null) || {};
      return O(SA, null, D.map(function(t) {
        var j = t.eventRange.instance.instanceId;
        return O("div", { className: "fc-daygrid-event-harness", key: j, style: {
          visibility: L[j] ? "hidden" : ""
        } }, uC(t) ? O(iC, m({ seg: t, isDragging: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, Og(t, I.todayRange))) : O(SC, m({ seg: t, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, Og(t, I.todayRange))));
      }));
    } }, function(L, t, j, S, u, i, C, w) {
      return O("a", m({ ref: L, className: ["fc-daygrid-more-link"].concat(t).join(" "), title: i, "aria-expanded": C, "aria-controls": w }, Ee(u)), S);
    });
  }, A;
}(GM);
function Wz(M) {
  for (var A = [], I = [], g = 0, D = M; g < D.length; g++) {
    var N = D[g];
    A.push(N.seg), N.isVisible || I.push(N.seg);
  }
  return { allSegs: A, invisibleSegs: I };
}
var kz = AA({ week: "narrow" }), pz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = OA(), I.state = {
      dayNumberId: mI()
    }, I.handleRootEl = function(g) {
      CI(I.rootElRef, g), CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.context, D = I.props, N = I.state, L = I.rootElRef, t = D.date, j = D.dateProfile, S = bD(g, t, "week");
    return O(tC, { date: t, dateProfile: j, todayRange: D.todayRange, showDayNumber: D.showDayNumber, extraHookProps: D.extraHookProps, elRef: this.handleRootEl }, function(u, i, C, w) {
      return O(
        "td",
        m({ ref: u, role: "gridcell", className: ["fc-daygrid-day"].concat(i, D.extraClassNames || []).join(" ") }, C, D.extraDataAttrs, D.showDayNumber ? { "aria-labelledby": N.dayNumberId } : {}),
        O(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: D.innerElRef },
          D.showWeekNumber && O(tz, { date: t, defaultFormat: kz }, function(E, x, n, a) {
            return O("a", m({ ref: E, className: ["fc-daygrid-week-number"].concat(x).join(" ") }, S), a);
          }),
          !w && O(mz, { date: t, dateProfile: j, showDayNumber: D.showDayNumber, dayNumberId: N.dayNumberId, forceDayTop: D.forceDayTop, todayRange: D.todayRange, extraHookProps: D.extraHookProps }),
          O(
            "div",
            { className: "fc-daygrid-day-events", ref: D.fgContentElRef },
            D.fgContent,
            O(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: D.moreMarginTop } },
              O(bz, { allDayDate: t, singlePlacements: D.singlePlacements, moreCnt: D.moreCnt, alignmentElRef: L, alignGridTop: !D.showDayNumber, extraDateSpan: D.extraDateSpan, dateProfile: D.dateProfile, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, todayRange: D.todayRange })
            )
          ),
          O("div", { className: "fc-daygrid-day-bg" }, D.bgContent)
        )
      );
    });
  }, A;
}(tg);
function Qz(M, A, I, g, D, N, L) {
  var t = new fz();
  t.allowReslicing = !0, t.strictOrder = g, A === !0 || I === !0 ? (t.maxCoord = N, t.hiddenConsumes = !0) : typeof A == "number" ? t.maxStackCnt = A : typeof I == "number" && (t.maxStackCnt = I, t.hiddenConsumes = !0);
  for (var j = [], S = [], u = 0; u < M.length; u += 1) {
    var i = M[u], C = i.eventRange.instance.instanceId, w = D[C];
    w != null ? j.push({
      index: u,
      thickness: w,
      span: {
        start: i.firstCol,
        end: i.lastCol + 1
      }
    }) : S.push(i);
  }
  for (var E = t.addSegs(j), x = t.toRects(), n = vz(x, M, L), a = n.singleColPlacements, z = n.multiColPlacements, d = n.leftoverMargins, Y = [], U = [], k = 0, G = S; k < G.length; k++) {
    var i = G[k];
    z[i.firstCol].push({
      seg: i,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var r = i.firstCol; r <= i.lastCol; r += 1)
      a[r].push({
        seg: hg(i, r, r + 1, L),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var r = 0; r < L.length; r += 1)
    Y.push(0);
  for (var b = 0, V = E; b < V.length; b++) {
    var R = V[b], i = M[R.index], AM = R.span;
    z[AM.start].push({
      seg: hg(i, AM.start, AM.end, L),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var r = AM.start; r < AM.end; r += 1)
      Y[r] += 1, a[r].push({
        seg: hg(i, r, r + 1, L),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var r = 0; r < L.length; r += 1)
    U.push(d[r]);
  return { singleColPlacements: a, multiColPlacements: z, moreCnts: Y, moreMarginTops: U };
}
function vz(M, A, I) {
  for (var g = Gz(M, I.length), D = [], N = [], L = [], t = 0; t < I.length; t += 1) {
    for (var j = g[t], S = [], u = 0, i = 0, C = 0, w = j; C < w.length; C++) {
      var E = w[C], x = A[E.index];
      S.push({
        seg: hg(x, t, t + 1, I),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: E.levelCoord,
        marginTop: E.levelCoord - u
      }), u = E.levelCoord + E.thickness;
    }
    var n = [];
    u = 0, i = 0;
    for (var a = 0, z = j; a < z.length; a++) {
      var E = z[a], x = A[E.index], d = E.span.end - E.span.start > 1, Y = E.span.start === t;
      i += E.levelCoord - u, u = E.levelCoord + E.thickness, d ? (i += E.thickness, Y && n.push({
        seg: hg(x, E.span.start, E.span.end, I),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: E.levelCoord,
        marginTop: 0
      })) : Y && (n.push({
        seg: hg(x, E.span.start, E.span.end, I),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: E.levelCoord,
        marginTop: i
      }), i = 0);
    }
    D.push(S), N.push(n), L.push(i);
  }
  return { singleColPlacements: D, multiColPlacements: N, leftoverMargins: L };
}
function Gz(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I.push([]);
  for (var D = 0, N = M; D < N.length; D++)
    for (var L = N[D], g = L.span.start; g < L.span.end; g += 1)
      I[g].push(L);
  return I;
}
function hg(M, A, I, g) {
  if (M.firstCol === A && M.lastCol === I - 1)
    return M;
  var D = M.eventRange, N = D.range, L = Jg(N, {
    start: g[A].date,
    end: IA(g[I - 1].date, 1)
  });
  return m(m({}, M), { firstCol: A, lastCol: I - 1, eventRange: {
    def: D.def,
    ui: m(m({}, D.ui), { durationEditable: !1 }),
    instance: D.instance,
    range: L
  }, isStart: M.isStart && L.start.valueOf() === N.start.valueOf(), isEnd: M.isEnd && L.end.valueOf() === N.end.valueOf() });
}
var fz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.hiddenConsumes = !1, I.forceHidden = {}, I;
  }
  return A.prototype.addSegs = function(I) {
    for (var g = this, D = M.prototype.addSegs.call(this, I), N = this.entriesByLevel, L = function(j) {
      return !g.forceHidden[cD(j)];
    }, t = 0; t < N.length; t += 1)
      N[t] = N[t].filter(L);
    return D;
  }, A.prototype.handleInvalidInsertion = function(I, g, D) {
    var N = this, L = N.entriesByLevel, t = N.forceHidden, j = I.touchingEntry, S = I.touchingLevel, u = I.touchingLateral;
    if (this.hiddenConsumes && j) {
      var i = cD(j);
      if (!t[i])
        if (this.allowReslicing) {
          var C = m(m({}, j), { span: qe(j.span, g.span) }), w = cD(C);
          t[w] = !0, L[S][u] = C, this.splitEntry(j, g, D);
        } else
          t[i] = !0, D.push(j);
    }
    return M.prototype.handleInvalidInsertion.call(this, I, g, D);
  }, A;
}(c1), eC = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.cellElRefs = new XI(), I.frameElRefs = new XI(), I.fgElRefs = new XI(), I.segHarnessRefs = new XI(), I.rootElRef = OA(), I.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, N = g.state, L = g.context, t = L.options, j = D.cells.length, S = DN(D.businessHourSegs, j), u = DN(D.bgEventSegs, j), i = DN(this.getHighlightSegs(), j), C = DN(this.getMirrorSegs(), j), w = Qz(ze(D.fgEventSegs, t.eventOrder), D.dayMaxEvents, D.dayMaxEventRows, t.eventOrderStrict, N.eventInstanceHeights, N.maxContentHeight, D.cells), E = w.singleColPlacements, x = w.multiColPlacements, n = w.moreCnts, a = w.moreMarginTops, z = D.eventDrag && D.eventDrag.affectedInstances || D.eventResize && D.eventResize.affectedInstances || {};
    return O(
      "tr",
      { ref: this.rootElRef, role: "row" },
      D.renderIntro && D.renderIntro(),
      D.cells.map(function(d, Y) {
        var U = I.renderFgSegs(Y, D.forPrint ? E[Y] : x[Y], D.todayRange, z), k = I.renderFgSegs(Y, Jz(C[Y], x), D.todayRange, {}, Boolean(D.eventDrag), Boolean(D.eventResize), !1);
        return O(pz, { key: d.key, elRef: I.cellElRefs.createRef(d.key), innerElRef: I.frameElRefs.createRef(d.key), dateProfile: D.dateProfile, date: d.date, showDayNumber: D.showDayNumbers, showWeekNumber: D.showWeekNumbers && Y === 0, forceDayTop: D.showWeekNumbers, todayRange: D.todayRange, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, extraHookProps: d.extraHookProps, extraDataAttrs: d.extraDataAttrs, extraClassNames: d.extraClassNames, extraDateSpan: d.extraDateSpan, moreCnt: n[Y], moreMarginTop: a[Y], singlePlacements: E[Y], fgContentElRef: I.fgElRefs.createRef(d.key), fgContent: O(
          SA,
          null,
          O(SA, null, U),
          O(SA, null, k)
        ), bgContent: O(
          SA,
          null,
          I.renderFillSegs(i[Y], "highlight"),
          I.renderFillSegs(S[Y], "non-business"),
          I.renderFillSegs(u[Y], "bg-event")
        ) });
      })
    );
  }, A.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, A.prototype.componentDidUpdate = function(I, g) {
    var D = this.props;
    this.updateSizing(!eI(I, D));
  }, A.prototype.getHighlightSegs = function() {
    var I = this.props;
    return I.eventDrag && I.eventDrag.segs.length ? I.eventDrag.segs : I.eventResize && I.eventResize.segs.length ? I.eventResize.segs : I.dateSelectionSegs;
  }, A.prototype.getMirrorSegs = function() {
    var I = this.props;
    return I.eventResize && I.eventResize.segs.length ? I.eventResize.segs : [];
  }, A.prototype.renderFgSegs = function(I, g, D, N, L, t, j) {
    var S = this.context, u = this.props.eventSelection, i = this.state.framePositions, C = this.props.cells.length === 1, w = L || t || j, E = [];
    if (i)
      for (var x = 0, n = g; x < n.length; x++) {
        var a = n[x], z = a.seg, d = z.eventRange.instance.instanceId, Y = d + ":" + I, U = a.isVisible && !N[d], k = a.isAbsolute, G = "", r = "";
        k && (S.isRtl ? (r = 0, G = i.lefts[z.lastCol] - i.lefts[z.firstCol]) : (G = 0, r = i.rights[z.firstCol] - i.rights[z.lastCol])), E.push(O("div", { className: "fc-daygrid-event-harness" + (k ? " fc-daygrid-event-harness-abs" : ""), key: Y, ref: w ? null : this.segHarnessRefs.createRef(Y), style: {
          visibility: U ? "" : "hidden",
          marginTop: k ? "" : a.marginTop,
          top: k ? a.absoluteTop : "",
          left: G,
          right: r
        } }, uC(z) ? O(iC, m({ seg: z, isDragging: L, isSelected: d === u, defaultDisplayEventEnd: C }, Og(z, D))) : O(SC, m({ seg: z, isDragging: L, isResizing: t, isDateSelecting: j, isSelected: d === u, defaultDisplayEventEnd: C }, Og(z, D)))));
      }
    return E;
  }, A.prototype.renderFillSegs = function(I, g) {
    var D = this.context.isRtl, N = this.props.todayRange, L = this.state.framePositions, t = [];
    if (L)
      for (var j = 0, S = I; j < S.length; j++) {
        var u = S[j], i = D ? {
          right: 0,
          left: L.lefts[u.lastCol] - L.lefts[u.firstCol]
        } : {
          left: 0,
          right: L.rights[u.firstCol] - L.rights[u.lastCol]
        };
        t.push(O("div", { key: os(u.eventRange), className: "fc-daygrid-bg-harness", style: i }, g === "bg-event" ? O(Nz, m({ seg: u }, Og(u, N))) : Dz(g)));
      }
    return O.apply(void 0, HM([SA, {}], t));
  }, A.prototype.updateSizing = function(I) {
    var g = this, D = g.props, N = g.frameElRefs;
    if (!D.forPrint && D.clientWidth !== null) {
      if (I) {
        var L = D.cells.map(function(i) {
          return N.currentMap[i.key];
        });
        if (L.length) {
          var t = this.rootElRef.current;
          this.setState({
            framePositions: new Aj(
              t,
              L,
              !0,
              !1
            )
          });
        }
      }
      var j = this.state.eventInstanceHeights, S = this.queryEventInstanceHeights(), u = D.dayMaxEvents === !0 || D.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: m(m({}, j), S),
        maxContentHeight: u ? this.computeMaxContentHeight() : null
      });
    }
  }, A.prototype.queryEventInstanceHeights = function() {
    var I = this.segHarnessRefs.currentMap, g = {};
    for (var D in I) {
      var N = Math.round(I[D].getBoundingClientRect().height), L = D.split(":")[0];
      g[L] = Math.max(g[L] || 0, N);
    }
    return g;
  }, A.prototype.computeMaxContentHeight = function() {
    var I = this.props.cells[0].key, g = this.cellElRefs.currentMap[I], D = this.fgElRefs.currentMap[I];
    return g.getBoundingClientRect().bottom - D.getBoundingClientRect().top;
  }, A.prototype.getCellEls = function() {
    var I = this.cellElRefs.currentMap;
    return this.props.cells.map(function(g) {
      return I[g.key];
    });
  }, A;
}(tg);
eC.addStateEquality({
  eventInstanceHeights: eI
});
function Jz(M, A) {
  if (!M.length)
    return [];
  var I = Vz(A);
  return M.map(function(g) {
    return {
      seg: g,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: I[g.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function Vz(M) {
  for (var A = {}, I = 0, g = M; I < g.length; I++)
    for (var D = g[I], N = 0, L = D; N < L.length; N++) {
      var t = L[N];
      A[t.seg.eventRange.instance.instanceId] = t.absoluteTop;
    }
  return A;
}
var Zz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.splitBusinessHourSegs = UM(gN), I.splitBgEventSegs = UM(gN), I.splitFgEventSegs = UM(gN), I.splitDateSelectionSegs = UM(gN), I.splitEventDrag = UM(IS), I.splitEventResize = UM(IS), I.rowRefs = new XI(), I.handleRootEl = function(g) {
      I.rootEl = g, g ? I.context.registerInteractiveComponent(I, {
        el: g,
        isHitComboAllowed: I.props.isHitComboAllowed
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.dateProfile, N = g.dayMaxEventRows, L = g.dayMaxEvents, t = g.expandRows, j = g.cells.length, S = this.splitBusinessHourSegs(g.businessHourSegs, j), u = this.splitBgEventSegs(g.bgEventSegs, j), i = this.splitFgEventSegs(g.fgEventSegs, j), C = this.splitDateSelectionSegs(g.dateSelectionSegs, j), w = this.splitEventDrag(g.eventDrag, j), E = this.splitEventResize(g.eventResize, j), x = L === !0 || N === !0;
    x && !t && (x = !1, N = null, L = null);
    var n = [
      "fc-daygrid-body",
      x ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      t ? "" : "fc-daygrid-body-natural"
    ];
    return O(
      "div",
      { className: n.join(" "), ref: this.handleRootEl, style: {
        width: g.clientWidth,
        minWidth: g.tableMinWidth
      } },
      O(Rj, { unit: "day" }, function(a, z) {
        return O(
          SA,
          null,
          O(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: g.clientWidth,
              minWidth: g.tableMinWidth,
              height: t ? g.clientHeight : ""
            } },
            g.colGroupNode,
            O("tbody", { role: "presentation" }, g.cells.map(function(d, Y) {
              return O(eC, {
                ref: I.rowRefs.createRef(Y),
                key: d.length ? d[0].date.toISOString() : Y,
                showDayNumbers: j > 1,
                showWeekNumbers: g.showWeekNumbers,
                todayRange: z,
                dateProfile: D,
                cells: d,
                renderIntro: g.renderRowIntro,
                businessHourSegs: S[Y],
                eventSelection: g.eventSelection,
                bgEventSegs: u[Y].filter(Bz),
                fgEventSegs: i[Y],
                dateSelectionSegs: C[Y],
                eventDrag: w[Y],
                eventResize: E[Y],
                dayMaxEvents: L,
                dayMaxEventRows: N,
                clientWidth: g.clientWidth,
                clientHeight: g.clientHeight,
                forPrint: g.forPrint
              });
            }))
          )
        );
      })
    );
  }, A.prototype.prepareHits = function() {
    this.rowPositions = new Aj(
      this.rootEl,
      this.rowRefs.collect().map(function(I) {
        return I.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new Aj(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, A.prototype.queryHit = function(I, g) {
    var D = this, N = D.colPositions, L = D.rowPositions, t = N.leftToIndex(I), j = L.topToIndex(g);
    if (j != null && t != null) {
      var S = this.props.cells[j][t];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: m({ range: this.getCellRange(j, t), allDay: !0 }, S.extraDateSpan),
        dayEl: this.getCellEl(j, t),
        rect: {
          left: N.lefts[t],
          right: N.rights[t],
          top: L.tops[j],
          bottom: L.bottoms[j]
        },
        layer: 0
      };
    }
    return null;
  }, A.prototype.getCellEl = function(I, g) {
    return this.rowRefs.currentMap[I].getCellEls()[g];
  }, A.prototype.getCellRange = function(I, g) {
    var D = this.props.cells[I][g].date, N = IA(D, 1);
    return { start: D, end: N };
  }, A;
}(tg);
function Bz(M) {
  return M.eventRange.def.allDay;
}
var Pz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.forceDayIfListItem = !0, I;
  }
  return A.prototype.sliceRange = function(I, g) {
    return g.sliceRange(I);
  }, A;
}(V1), Fz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.slicer = new Pz(), I.tableRef = OA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context;
    return O(Zz, m({ ref: this.tableRef }, this.slicer.sliceProps(g, g.dateProfile, g.nextDayThreshold, D, g.dayTableModel), { dateProfile: g.dateProfile, cells: g.dayTableModel.cells, colGroupNode: g.colGroupNode, tableMinWidth: g.tableMinWidth, renderRowIntro: g.renderRowIntro, dayMaxEvents: g.dayMaxEvents, dayMaxEventRows: g.dayMaxEventRows, showWeekNumbers: g.showWeekNumbers, expandRows: g.expandRows, headerAlignElRef: g.headerAlignElRef, clientWidth: g.clientWidth, clientHeight: g.clientHeight, forPrint: g.forPrint }));
  }, A;
}(tg), Xz = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildDayTableModel = UM(Rz), I.headerRef = OA(), I.tableRef = OA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.context, D = g.options, N = g.dateProfileGenerator, L = this.props, t = this.buildDayTableModel(L.dateProfile, N), j = D.dayHeaders && O(v1, { ref: this.headerRef, dateProfile: L.dateProfile, dates: t.headerDates, datesRepDistinctDays: t.rowCnt === 1 }), S = function(u) {
      return O(Fz, { ref: I.tableRef, dateProfile: L.dateProfile, dayTableModel: t, businessHours: L.businessHours, dateSelection: L.dateSelection, eventStore: L.eventStore, eventUiBases: L.eventUiBases, eventSelection: L.eventSelection, eventDrag: L.eventDrag, eventResize: L.eventResize, nextDayThreshold: D.nextDayThreshold, colGroupNode: u.tableColGroupNode, tableMinWidth: u.tableMinWidth, dayMaxEvents: D.dayMaxEvents, dayMaxEventRows: D.dayMaxEventRows, showWeekNumbers: D.weekNumbers, expandRows: !L.isHeightAuto, headerAlignElRef: I.headerElRef, clientWidth: u.clientWidth, clientHeight: u.clientHeight, forPrint: L.forPrint });
    };
    return D.dayMinWidth ? this.renderHScrollLayout(j, S, t.colCnt, D.dayMinWidth) : this.renderSimpleLayout(j, S);
  }, A;
}(Uz);
function Rz(M, A) {
  var I = new f1(M.renderRange, A);
  return new J1(I, /year|month|week/.test(M.currentRangeUnit));
}
var Hz = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.buildRenderRange = function(I, g, D) {
    var N = this.props.dateEnv, L = M.prototype.buildRenderRange.call(this, I, g, D), t = L.start, j = L.end, S;
    if (/^(year|month)$/.test(g) && (t = N.startOfWeek(t), S = N.startOfWeek(j), S.valueOf() !== j.valueOf() && (j = d4(S, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var u = Math.ceil(
        xl(t, j)
      );
      j = d4(j, 6 - u);
    }
    return { start: t, end: j };
  }, A;
}(Ve), _z = aI({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Xz,
      dateProfileGeneratorClass: Hz
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
var $z = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      textId: mI()
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.theme, D = I.dateEnv, N = I.options, L = I.viewApi, t = this.props, j = t.cellId, S = t.dayDate, u = t.todayRange, i = this.state.textId, C = Bj(S, u), w = N.listDayFormat ? D.format(S, N.listDayFormat) : "", E = N.listDaySideFormat ? D.format(S, N.listDaySideFormat) : "", x = m({
      date: D.toDate(S),
      view: L,
      textId: i,
      text: w,
      sideText: E,
      navLinkAttrs: bD(this.context, S),
      sideNavLinkAttrs: bD(this.context, S, "day", !1)
    }, C), n = ["fc-list-day"].concat(nL(C, g));
    return O(yI, { hookProps: x, classNames: N.dayHeaderClassNames, content: N.dayHeaderContent, defaultContent: qz, didMount: N.dayHeaderDidMount, willUnmount: N.dayHeaderWillUnmount }, function(a, z, d, Y) {
      return O(
        "tr",
        { ref: a, className: n.concat(z).join(" "), "data-date": yL(S) },
        O(
          "th",
          { scope: "colgroup", colSpan: 3, id: j, "aria-labelledby": i },
          O("div", { className: "fc-list-day-cushion " + g.getClass("tableCellShaded"), ref: d }, Y)
        )
      );
    });
  }, A;
}(GM);
function qz(M) {
  return O(
    SA,
    null,
    M.text && O("a", m({ id: M.textId, className: "fc-list-day-text" }, M.navLinkAttrs), M.text),
    M.sideText && O("a", m({ "aria-hidden": !0, className: "fc-list-day-side-text" }, M.sideNavLinkAttrs), M.sideText)
  );
}
var Kz = AA({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
}), MY = function(M) {
  TM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = g.seg, L = g.timeHeaderId, t = g.eventHeaderId, j = g.dateHeaderId, S = D.options.eventTimeFormat || Kz;
    return O(lL, {
      seg: N,
      timeText: "",
      disableDragging: !0,
      disableResizing: !0,
      defaultContent: function() {
        return AY(N, D);
      },
      isPast: g.isPast,
      isFuture: g.isFuture,
      isToday: g.isToday,
      isSelected: g.isSelected,
      isDragging: g.isDragging,
      isResizing: g.isResizing,
      isDateSelecting: g.isDateSelecting
    }, function(u, i, C, w, E) {
      return O(
        "tr",
        { className: ["fc-list-event", E.event.url ? "fc-event-forced-url" : ""].concat(i).join(" "), ref: u },
        IY(N, S, D, L, j),
        O(
          "td",
          { "aria-hidden": !0, className: "fc-list-event-graphic" },
          O("span", { className: "fc-list-event-dot", style: { borderColor: E.borderColor || E.backgroundColor } })
        ),
        O("td", { ref: C, headers: t + " " + j, className: "fc-list-event-title" }, w)
      );
    });
  }, A;
}(GM);
function AY(M, A) {
  var I = Vj(M, A);
  return O("a", m({}, I), M.eventRange.def.title);
}
function IY(M, A, I, g, D) {
  var N = I.options;
  if (N.displayEventTime !== !1) {
    var L = M.eventRange.def, t = M.eventRange.instance, j = !1, S = void 0;
    if (L.allDay ? j = !0 : is(M.eventRange.range) ? M.isStart ? S = sD(M, A, I, null, null, t.range.start, M.end) : M.isEnd ? S = sD(M, A, I, null, null, M.start, t.range.end) : j = !0 : S = sD(M, A, I), j) {
      var u = {
        text: I.options.allDayText,
        view: I.viewApi
      };
      return O(yI, { hookProps: u, classNames: N.allDayClassNames, content: N.allDayContent, defaultContent: gY, didMount: N.allDayDidMount, willUnmount: N.allDayWillUnmount }, function(i, C, w, E) {
        return O("td", { ref: i, headers: g + " " + D, className: ["fc-list-event-time"].concat(C).join(" ") }, E);
      });
    }
    return O("td", { className: "fc-list-event-time" }, S);
  }
  return null;
}
function gY(M) {
  return M.text;
}
var DY = function(M) {
  TM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.computeDateVars = UM(LY), I.eventStoreToSegs = UM(I._eventStoreToSegs), I.state = {
      timeHeaderId: mI(),
      eventHeaderId: mI(),
      dateHeaderIdRoot: mI()
    }, I.setRootEl = function(g) {
      g ? I.context.registerInteractiveComponent(I, {
        el: g
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, N = g.context, L = [
      "fc-list",
      N.theme.getClass("table"),
      N.options.stickyHeaderDates !== !1 ? "fc-list-sticky" : ""
    ], t = this.computeDateVars(D.dateProfile), j = t.dayDates, S = t.dayRanges, u = this.eventStoreToSegs(D.eventStore, D.eventUiBases, S);
    return O($N, { viewSpec: N.viewSpec, elRef: this.setRootEl }, function(i, C) {
      return O(
        "div",
        { ref: i, className: L.concat(C).join(" ") },
        O(IC, { liquid: !D.isHeightAuto, overflowX: D.isHeightAuto ? "visible" : "hidden", overflowY: D.isHeightAuto ? "visible" : "auto" }, u.length > 0 ? I.renderSegList(u, j) : I.renderEmptyMessage())
      );
    });
  }, A.prototype.renderEmptyMessage = function() {
    var I = this.context, g = I.options, D = I.viewApi, N = {
      text: g.noEventsText,
      view: D
    };
    return O(yI, { hookProps: N, classNames: g.noEventsClassNames, content: g.noEventsContent, defaultContent: NY, didMount: g.noEventsDidMount, willUnmount: g.noEventsWillUnmount }, function(L, t, j, S) {
      return O(
        "div",
        { className: ["fc-list-empty"].concat(t).join(" "), ref: L },
        O("div", { className: "fc-list-empty-cushion", ref: j }, S)
      );
    });
  }, A.prototype.renderSegList = function(I, g) {
    var D = this.context, N = D.theme, L = D.options, t = this.state, j = t.timeHeaderId, S = t.eventHeaderId, u = t.dateHeaderIdRoot, i = tY(I);
    return O(Rj, { unit: "day" }, function(C, w) {
      for (var E = [], x = 0; x < i.length; x += 1) {
        var n = i[x];
        if (n) {
          var a = yL(g[x]), z = u + "-" + a;
          E.push(O($z, { key: a, cellId: z, dayDate: g[x], todayRange: w })), n = ze(n, L.eventOrder);
          for (var d = 0, Y = n; d < Y.length; d++) {
            var U = Y[d];
            E.push(O(MY, m({ key: a + ":" + U.eventRange.instance.instanceId, seg: U, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: j, eventHeaderId: S, dateHeaderId: z }, Og(U, w, C))));
          }
        }
      }
      return O(
        "table",
        { className: "fc-list-table " + N.getClass("table") },
        O(
          "thead",
          null,
          O(
            "tr",
            null,
            O("th", { scope: "col", id: j }, L.timeHint),
            O("th", { scope: "col", "aria-hidden": !0 }),
            O("th", { scope: "col", id: S }, L.eventHint)
          )
        ),
        O("tbody", null, E)
      );
    });
  }, A.prototype._eventStoreToSegs = function(I, g, D) {
    return this.eventRangesToSegs(Kt(I, g, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, D);
  }, A.prototype.eventRangesToSegs = function(I, g) {
    for (var D = [], N = 0, L = I; N < L.length; N++) {
      var t = L[N];
      D.push.apply(D, this.eventRangeToSegs(t, g));
    }
    return D;
  }, A.prototype.eventRangeToSegs = function(I, g) {
    var D = this.context.dateEnv, N = this.context.options.nextDayThreshold, L = I.range, t = I.def.allDay, j, S, u, i = [];
    for (j = 0; j < g.length; j += 1)
      if (S = Jg(L, g[j]), S && (u = {
        component: this,
        eventRange: I,
        start: S.start,
        end: S.end,
        isStart: I.isStart && S.start.valueOf() === L.start.valueOf(),
        isEnd: I.isEnd && S.end.valueOf() === L.end.valueOf(),
        dayIndex: j
      }, i.push(u), !u.isEnd && !t && j + 1 < g.length && L.end < D.add(g[j + 1].start, N))) {
        u.end = L.end, u.isEnd = !0;
        break;
      }
    return i;
  }, A;
}(tg);
function NY(M) {
  return M.text;
}
function LY(M) {
  for (var A = ZM(M.renderRange.start), I = M.renderRange.end, g = [], D = []; A < I; )
    g.push(A), D.push({
      start: A,
      end: IA(A, 1)
    }), A = IA(A, 1);
  return { dayDates: g, dayRanges: D };
}
function tY(M) {
  var A = [], I, g;
  for (I = 0; I < M.length; I += 1)
    g = M[I], (A[g.dayIndex] || (A[g.dayIndex] = [])).push(g);
  return A;
}
var jY = {
  listDayFormat: gS,
  listDaySideFormat: gS,
  noEventsClassNames: f,
  noEventsContent: f,
  noEventsDidMount: f,
  noEventsWillUnmount: f
};
function gS(M) {
  return M === !1 ? null : AA(M);
}
var uY = aI({
  optionRefiners: jY,
  views: {
    list: {
      component: DY,
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
const CC = TI("GoogleCalendarStore", {
  state: () => ({
    id: null,
    events: null,
    upcomingEvents: null,
    calendarIds: null
  }),
  actions: {}
}), SY = {
  key: 0,
  class: "title"
}, iY = {
  key: 1,
  class: "description"
}, eY = ["id"], CY = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null
  },
  setup(M) {
    const I = o(M, "dataAttributes");
    let g = I && (I == null ? void 0 : I.value) ? I.value["css-class"] : null;
    const D = g ? "google-calendar " + g : "google-calendar";
    console.log(D);
    const N = I && (I == null ? void 0 : I.value) ? I.value["calendar-title"] : null, L = I && (I == null ? void 0 : I.value) ? I.value["calendar-description"] : null;
    CC();
    const t = jM.create().toString();
    return _M(() => {
      let j = document.getElementById(t), S = [], u = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["calendar-ids"] : Array();
      (!u || !u.length) && (u = TA.googleCalendarIds), u.map(function(x) {
        let n = { googleCalendarId: x.trim(), className: "gcal-event" };
        S == null || S.push(n);
      });
      let i = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["display-style"] : null;
      i || (i = TA.initialView);
      const C = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["api-key"] : null;
      let w = C || TA.googleApiKey;
      new xz(j, {
        plugins: [dz, _z, uY],
        googleCalendarApiKey: w,
        eventSources: S,
        initialView: i
      }).render();
    }), (j, S) => (T(), s("div", {
      class: F(e(D))
    }, [
      e(N) ? (T(), s("div", SY, P(e(N)), 1)) : B("", !0),
      e(L) ? (T(), s("div", iY, P(e(L)), 1)) : B("", !0),
      l("div", {
        id: e(t),
        class: "reder-target"
      }, null, 8, eY)
    ], 2));
  }
});
const wY = /* @__PURE__ */ FM(CY, [["__scopeId", "data-v-22801c8c"]]), pW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CollectionManager: yo,
  ItemManager: lo,
  EntityTemplateManager: zo,
  FormTemplateManager: Uo,
  GoogleCalendar: wY,
  useGoogleCalendarStore: CC
}, Symbol.toStringTag, { value: "Module" })), EY = (M, A) => {
  var g;
  const I = Di();
  return xE(
    () => {
      I.value = M();
    },
    {
      ...A,
      flush: (g = A == null ? void 0 : A.flush) != null ? g : "sync"
    }
  ), aE(I);
}, TY = (M) => y(
  () => M.value === "center" ? "justify-content-center" : M.value === "end" ? "justify-content-end" : "justify-content-start"
), sL = (M, A) => Object.keys(M).filter((I) => !A.includes(I)).reduce((I, g) => ({ ...I, [g]: M[g] }), {}), ZI = () => ({ enumerable: !0, configurable: !1, writable: !1 }), qN = (M) => Array.isArray(M) ? M.map((A) => qN(A)) : M instanceof Date ? new Date(M.getTime()) : M && typeof M == "object" ? Object.getOwnPropertyNames(M).reduce((A, I) => {
  var g;
  return Object.defineProperty(A, I, (g = Object.getOwnPropertyDescriptor(M, I)) != null ? g : {}), A[I] = qN(M[I]), A;
}, Object.create(Object.getPrototypeOf(M))) : M, gj = (M) => new Promise((A) => A(qN(M)));
class cL {
  constructor(A, I = {}) {
    PM(this, "cancelable", !0);
    PM(this, "componentId", null);
    PM(this, "defaultPrevented", !1);
    PM(this, "nativeEvent", null);
    PM(this, "preventDefault");
    PM(this, "relatedTarget", null);
    PM(this, "target", null);
    PM(this, "eventType", "");
    PM(this, "vueTarget", null);
    if (!A)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, cL.Defaults, this.constructor.Defaults, I, { eventType: A }), Object.defineProperties(this, {
      type: ZI(),
      cancelable: ZI(),
      nativeEvent: ZI(),
      target: ZI(),
      relatedTarget: ZI(),
      vueTarget: ZI(),
      componentId: ZI()
    });
    let g = !1;
    this.preventDefault = function() {
      this.cancelable && (g = !0);
    }, Object.defineProperty(this, "defaultPrevented", {
      enumerable: !0,
      get() {
        return g;
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
const xY = (M) => M !== null && typeof M == "object", wC = (M) => /^[0-9]*\.?[0-9]+$/.test(String(M)), aY = (M) => Object.prototype.toString.call(M) === "[object Object]", EC = /_/g, TC = /([a-z])([A-Z])/g, yY = /(\s|^)(\w)/g, nY = /(\s|^)(\w)/, YN = /\s+/, oY = /^#/, lY = /^#[A-Za-z]+[\w\-:.]*$/, Dj = (M, A = 2) => typeof M == "string" ? M : M == null ? "" : Array.isArray(M) || aY(M) && M.toString === Object.prototype.toString ? JSON.stringify(M, null, A) : String(M), DS = (M) => M.replace(EC, " ").replace(TC, (A, I, g) => `${I} ${g}`).replace(nY, (A, I, g) => I + g.toUpperCase()), NS = (M) => M.replace(EC, " ").replace(TC, (A, I, g) => `${I} ${g}`).replace(yY, (A, I, g) => I + g.toUpperCase()), sY = (M) => {
  const A = M.trim();
  return A.charAt(0).toUpperCase() + A.slice(1);
}, xt = (M) => `\\${M}`, cY = (M) => {
  const A = Dj(M), { length: I } = A, g = A.charCodeAt(0);
  return A.split("").reduce((D, N, L) => {
    const t = A.charCodeAt(L);
    return t === 0 ? `${D}\uFFFD` : t === 127 || t >= 1 && t <= 31 || L === 0 && t >= 48 && t <= 57 || L === 1 && t >= 48 && t <= 57 && g === 45 ? D + xt(`${t.toString(16)} `) : L === 0 && t === 45 && I === 1 ? D + xt(N) : t >= 128 || t === 45 || t === 95 || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? D + N : D + xt(N);
  }, "");
}, xC = typeof window < "u", zY = typeof document < "u", YY = typeof navigator < "u", rY = xC && zY && YY, aC = typeof window < "u", yC = typeof document < "u", dY = typeof Element < "u", nC = typeof navigator < "u", zL = aC && yC && nC, $I = aC ? window : {}, YL = yC ? document : {}, oC = nC ? navigator : {}, lC = (oC.userAgent || "").toLowerCase();
lC.indexOf("jsdom") > 0;
/msie|trident/.test(lC);
(() => {
  let M = !1;
  if (zL)
    try {
      const A = {
        get passive() {
          return M = !0, M;
        }
      };
      $I.addEventListener("test", A, A), $I.removeEventListener("test", A, A);
    } catch {
      M = !1;
    }
  return M;
})();
zL && ("ontouchstart" in YL.documentElement || oC.maxTouchPoints > 0);
zL && Boolean($I.PointerEvent || $I.MSPointerEvent);
zL && "IntersectionObserver" in $I && "IntersectionObserverEntry" in $I && "intersectionRatio" in $I.IntersectionObserverEntry.prototype;
const dA = dY ? Element.prototype : void 0, UY = (dA == null ? void 0 : dA.matches) || (dA == null ? void 0 : dA.msMatchesSelector) || (dA == null ? void 0 : dA.webkitMatchesSelector), qA = (M) => !!(M && M.nodeType === Node.ELEMENT_NODE), mY = (M) => qA(M) ? M.getBoundingClientRect() : null, OY = (M = []) => {
  const { activeElement: A } = document;
  return A && !M.some((I) => I === A) ? A : null;
}, hY = (M) => qA(M) && M === OY(), bY = (M, A = {}) => {
  try {
    M.focus(A);
  } catch (I) {
    console.error(I);
  }
  return hY(M);
}, WY = (M, A) => A && qA(M) && M.getAttribute(A) || null, kY = (M) => {
  if (WY(M, "display") === "none")
    return !1;
  const A = mY(M);
  return !!(A && A.height > 0 && A.width > 0);
}, lA = (M, A) => !M || M(A).filter((I) => I.type !== yE).length < 1, sC = (M, A) => (qA(A) ? A : YL).querySelector(M) || null, pY = (M, A) => Array.from([(qA(A) ? A : YL).querySelectorAll(M)]), Hj = (M, A) => A && qA(M) ? M.getAttribute(A) : null, QY = (M) => YL.getElementById(/^#/.test(M) ? M.slice(1) : M) || null, vY = (M, A, I) => {
  A && qA(M) && M.setAttribute(A, I);
}, GY = (M, A) => {
  A && qA(M) && M.removeAttribute(A);
}, fY = (M, A) => Dj(M).toLowerCase() === Dj(A).toLowerCase(), NN = xC ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((M) => setTimeout(M, 16)) : (M) => setTimeout(M, 0), cC = (M, A) => qA(M) ? UY.call(M, A) : !1, JY = (dA == null ? void 0 : dA.closest) || function(M) {
  let A = this;
  if (!A)
    return null;
  do {
    if (cC(A, M))
      return A;
    A = A.parentElement || A.parentNode;
  } while (A !== null && A.nodeType === Node.ELEMENT_NODE);
  return null;
}, LS = (M, A, I = !1) => {
  if (!qA(A))
    return null;
  const g = JY.call(A, M);
  return I ? g : g === A ? null : g;
}, rL = (M, A, I) => A.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((g, D) => (g[M ? `${M}${D.charAt(0).toUpperCase() + D.slice(1)}` : D] = I, g), /* @__PURE__ */ Object.create(null)), zC = (M, A, I, g = I) => Object.keys(A).reduce((D, N) => (M[N] && D.push(
  [g, N.replace(I, ""), M[N]].filter((L) => L && typeof L != "boolean").join("-").toLowerCase()
), D), []), gI = (M = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${M}__`, dL = (M, A) => M === !0 || M === "true" || M === "" ? "true" : M === "grammar" || M === "spelling" ? M : A === !1 ? "true" : M === !1 || M === "false" ? "false" : void 0, at = (M) => !!M && typeof M == "object" && M.constructor === Object, Nj = (M, A, I = !0) => {
  const g = M instanceof Date && typeof M.getMonth == "function" ? new Date(M.getTime()) : Object.assign({}, M);
  return at(M) && at(A) && Object.keys(A).forEach((D) => {
    at(A[D]) ? D in M ? g[D] = Nj(M[D], A[D], I) : Object.assign(g, { [D]: A[D] }) : Array.isArray(A[D]) && Array.isArray(M[D]) ? Object.assign(g, {
      [D]: I ? M[D].concat(
        A[D].filter((N) => !M[D].includes(N))
      ) : A[D]
    }) : Object.assign(g, { [D]: A[D] });
  }), g;
}, pA = (M, A = {}, I = {}) => {
  const g = [M];
  let D;
  for (let N = 0; N < g.length && !D; N++) {
    const L = g[N];
    D = I[L];
  }
  return D && typeof D == "function" ? D(A) : D;
}, Vg = (M, A = NaN) => Number.isInteger(M) ? M : A, iD = (M, A = NaN) => {
  const I = Number.parseInt(M, 10);
  return Number.isNaN(I) ? A : I;
}, YC = (M, A = NaN) => {
  const I = Number.parseFloat(M.toString());
  return Number.isNaN(I) ? A : I;
}, tS = (M, A) => A + (M ? sY(M) : ""), _j = (M, A) => (Array.isArray(A) ? A.slice() : Object.keys(A)).reduce(
  (I, g) => (I[g] = M[g], I),
  {}
), VY = (M) => typeof M == "boolean" ? M : M === "" ? !0 : M === "true", WD = (M) => !!(M.href || M.to);
function c(M) {
  return EY(() => M.value === void 0 ? void 0 : VY(M.value));
}
const rC = Symbol(), dC = {
  items: fA([]),
  reset() {
    this.items = fA([]);
  }
}, ZY = (M) => {
  M.provide(rC, dC);
}, BY = () => {
  const M = tA(rC);
  return M || dC;
}, MA = (M, A, I) => {
  _M(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.addEventListener(A, I);
  }), aj(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.removeEventListener(A, I);
  });
}, UC = (M) => y(() => ({
  "form-check": !M.plain && !M.button,
  "form-check-inline": M.inline === !0,
  "form-switch": M.switch === !0,
  [`form-control-${M.size}`]: M.size !== void 0 && M.size !== "md"
})), mC = (M) => y(() => ({
  "form-check-input": !M.plain && !M.button,
  "is-valid": M.state === !0,
  "is-invalid": M.state === !1,
  "btn-check": M.button === !0
})), OC = (M) => y(() => ({
  "form-check-label": !M.plain && !M.button,
  btn: M.button === !0,
  [`btn-${M.buttonVariant}`]: M.button === !0 && M.buttonVariant !== void 0,
  [`btn-${M.size}`]: M.button && M.size && M.size !== "md"
})), hC = (M) => y(() => ({
  "aria-invalid": dL(M.ariaInvalid, M.state),
  "aria-required": M.required === !0 ? !0 : void 0
})), bC = (M) => y(() => ({
  "was-validated": M.validated === !0,
  "btn-group": M.buttons === !0 && !M.stacked,
  "btn-group-vertical": M.stacked === !0,
  [`btn-group-${M.size}`]: M.size !== void 0
})), KN = (M, A, I) => M.reduce(
  (g, D) => D.type.toString() === "Symbol(Fragment)" ? g.concat(D.children) : g.concat([D]),
  []
).filter((g) => (g.type.__name || g.type.name) === A).map((g) => {
  const D = (g.children.default ? g.children.default() : []).find(
    (N) => N.type.toString() === "Symbol(Text)"
  );
  return {
    props: {
      disabled: I,
      ...g.props
    },
    text: D ? D.children : ""
  };
}), WC = (M, A) => typeof M == "string" ? {
  props: {
    value: M,
    disabled: A.disabled
  },
  text: M
} : {
  props: {
    value: M[A.valueField],
    disabled: A.disabled || M[A.disabledField],
    ...M.props
  },
  text: M[A.textField],
  html: M[A.htmlField]
}, kC = (M, A, I, g, D) => ({
  ...M,
  props: {
    "button-variant": I.buttonVariant,
    form: I.form,
    name: g.value,
    id: `${D.value}_option_${A}`,
    button: I.buttons,
    state: I.state,
    plain: I.plain,
    size: I.size,
    inline: !I.stacked,
    required: I.required,
    ...M.props
  }
}), NA = (M, A) => y(() => (M == null ? void 0 : M.value) || gI(A)), pC = {
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
}, QC = (M, A) => {
  const I = DM();
  let g = null, D = !0;
  const N = NA(o(M, "id"), "input"), L = (x, n, a = !1) => (x = String(x), typeof M.formatter == "function" && (!M.lazyFormatter || a) ? (D = !1, M.formatter(x, n)) : x), t = (x) => M.trim ? x.trim() : M.number ? Number.parseFloat(x) : x, j = () => {
    DI(() => {
      var x;
      M.autofocus && ((x = I.value) == null || x.focus());
    });
  };
  _M(j), _M(() => {
    I.value && (I.value.value = M.modelValue);
  }), yj(j);
  const S = y(
    () => {
      var x;
      return dL(M.ariaInvalid, (x = M.state) != null ? x : void 0);
    }
  ), u = (x) => {
    const { value: n } = x.target, a = L(n, x);
    if (a === !1 || x.defaultPrevented) {
      x.preventDefault();
      return;
    }
    if (M.lazy)
      return;
    const z = t(a);
    M.modelValue !== z && (g = n, A("update:modelValue", z)), A("input", a);
  }, i = (x) => {
    const { value: n } = x.target, a = L(n, x);
    if (a === !1 || x.defaultPrevented) {
      x.preventDefault();
      return;
    }
    if (!M.lazy)
      return;
    g = n, A("update:modelValue", a);
    const z = t(a);
    M.modelValue !== z && A("change", a);
  }, C = (x) => {
    if (A("blur", x), !M.lazy && !M.lazyFormatter)
      return;
    const { value: n } = x.target, a = L(n, x, !0);
    g = n, A("update:modelValue", a);
  }, w = () => {
    var x;
    M.disabled || (x = I.value) == null || x.focus();
  }, E = () => {
    var x;
    M.disabled || (x = I.value) == null || x.blur();
  };
  return mM(
    () => M.modelValue,
    (x) => {
      !I.value || (I.value.value = g && D ? g : x, g = null, D = !0);
    }
  ), {
    input: I,
    computedId: N,
    computedAriaInvalid: S,
    onInput: u,
    onChange: i,
    onBlur: C,
    focus: w,
    blur: E
  };
}, og = (M, A) => {
  if (!M)
    return M;
  if (A in M)
    return M[A];
  const I = A.split(".");
  return og(M[I[0]], I.splice(1).join("."));
}, yt = (M, A = null, I, g) => {
  if (Object.prototype.toString.call(M) === "[object Object]") {
    const D = og(M, g.valueField), N = og(M, g.textField), L = og(M, g.htmlField), t = og(M, g.disabledField), j = M[g.optionsField] || null;
    return j !== null ? {
      label: String(og(M, g.labelField) || N),
      options: $j(j, I, g)
    } : {
      value: typeof D > "u" ? A || N : D,
      text: String(typeof N > "u" ? A : N),
      html: L,
      disabled: Boolean(t)
    };
  }
  return {
    value: A || M,
    text: String(M),
    disabled: !1
  };
}, $j = (M, A, I) => Array.isArray(M) ? M.map((g) => yt(g, null, A, I)) : Object.prototype.toString.call(M) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${A} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(M).map((g) => {
  const D = M[g];
  switch (typeof D) {
    case "object":
      return yt(D.text, String(D.value), A, I);
    default:
      return yt(D, String(g), A, I);
  }
})) : [], PY = ["id"], vC = Symbol(), FY = /* @__PURE__ */ v({
  __name: "BAccordion",
  props: {
    flush: { default: !1 },
    free: { default: !1 },
    id: null
  },
  setup(M) {
    const A = M, I = NA(o(A, "id"), "accordion"), g = c(o(A, "flush")), D = c(o(A, "free")), N = y(() => ({
      "accordion-flush": g.value
    }));
    return D.value || NI(vC, I.value), (L, t) => (T(), s("div", {
      id: e(I),
      class: F(["accordion", e(N)])
    }, [
      Q(L.$slots, "default")
    ], 10, PY));
  }
});
var eA = "top", sA = "bottom", cA = "right", CA = "left", UL = "auto", Kg = [eA, sA, cA, CA], gg = "start", Zg = "end", GC = "clippingParents", qj = "viewport", lg = "popper", fC = "reference", Lj = /* @__PURE__ */ Kg.reduce(function(M, A) {
  return M.concat([A + "-" + gg, A + "-" + Zg]);
}, []), Kj = /* @__PURE__ */ [].concat(Kg, [UL]).reduce(function(M, A) {
  return M.concat([A, A + "-" + gg, A + "-" + Zg]);
}, []), JC = "beforeRead", VC = "read", ZC = "afterRead", BC = "beforeMain", PC = "main", FC = "afterMain", XC = "beforeWrite", RC = "write", HC = "afterWrite", _C = [JC, VC, ZC, BC, PC, FC, XC, RC, HC];
function $A(M) {
  return M ? (M.nodeName || "").toLowerCase() : null;
}
function bA(M) {
  if (M == null)
    return window;
  if (M.toString() !== "[object Window]") {
    var A = M.ownerDocument;
    return A && A.defaultView || window;
  }
  return M;
}
function Dg(M) {
  var A = bA(M).Element;
  return M instanceof A || M instanceof Element;
}
function mA(M) {
  var A = bA(M).HTMLElement;
  return M instanceof A || M instanceof HTMLElement;
}
function Mu(M) {
  if (typeof ShadowRoot > "u")
    return !1;
  var A = bA(M).ShadowRoot;
  return M instanceof A || M instanceof ShadowRoot;
}
function XY(M) {
  var A = M.state;
  Object.keys(A.elements).forEach(function(I) {
    var g = A.styles[I] || {}, D = A.attributes[I] || {}, N = A.elements[I];
    !mA(N) || !$A(N) || (Object.assign(N.style, g), Object.keys(D).forEach(function(L) {
      var t = D[L];
      t === !1 ? N.removeAttribute(L) : N.setAttribute(L, t === !0 ? "" : t);
    }));
  });
}
function RY(M) {
  var A = M.state, I = {
    popper: {
      position: A.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(A.elements.popper.style, I.popper), A.styles = I, A.elements.arrow && Object.assign(A.elements.arrow.style, I.arrow), function() {
    Object.keys(A.elements).forEach(function(g) {
      var D = A.elements[g], N = A.attributes[g] || {}, L = Object.keys(A.styles.hasOwnProperty(g) ? A.styles[g] : I[g]), t = L.reduce(function(j, S) {
        return j[S] = "", j;
      }, {});
      !mA(D) || !$A(D) || (Object.assign(D.style, t), Object.keys(N).forEach(function(j) {
        D.removeAttribute(j);
      }));
    });
  };
}
const Au = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: XY,
  effect: RY,
  requires: ["computeStyles"]
};
function HA(M) {
  return M.split("-")[0];
}
var qI = Math.max, ML = Math.min, Bg = Math.round;
function tj() {
  var M = navigator.userAgentData;
  return M != null && M.brands ? M.brands.map(function(A) {
    return A.brand + "/" + A.version;
  }).join(" ") : navigator.userAgent;
}
function $C() {
  return !/^((?!chrome|android).)*safari/i.test(tj());
}
function Pg(M, A, I) {
  A === void 0 && (A = !1), I === void 0 && (I = !1);
  var g = M.getBoundingClientRect(), D = 1, N = 1;
  A && mA(M) && (D = M.offsetWidth > 0 && Bg(g.width) / M.offsetWidth || 1, N = M.offsetHeight > 0 && Bg(g.height) / M.offsetHeight || 1);
  var L = Dg(M) ? bA(M) : window, t = L.visualViewport, j = !$C() && I, S = (g.left + (j && t ? t.offsetLeft : 0)) / D, u = (g.top + (j && t ? t.offsetTop : 0)) / N, i = g.width / D, C = g.height / N;
  return {
    width: i,
    height: C,
    top: u,
    right: S + i,
    bottom: u + C,
    left: S,
    x: S,
    y: u
  };
}
function Iu(M) {
  var A = Pg(M), I = M.offsetWidth, g = M.offsetHeight;
  return Math.abs(A.width - I) <= 1 && (I = A.width), Math.abs(A.height - g) <= 1 && (g = A.height), {
    x: M.offsetLeft,
    y: M.offsetTop,
    width: I,
    height: g
  };
}
function qC(M, A) {
  var I = A.getRootNode && A.getRootNode();
  if (M.contains(A))
    return !0;
  if (I && Mu(I)) {
    var g = A;
    do {
      if (g && M.isSameNode(g))
        return !0;
      g = g.parentNode || g.host;
    } while (g);
  }
  return !1;
}
function wI(M) {
  return bA(M).getComputedStyle(M);
}
function HY(M) {
  return ["table", "td", "th"].indexOf($A(M)) >= 0;
}
function QI(M) {
  return ((Dg(M) ? M.ownerDocument : M.document) || window.document).documentElement;
}
function mL(M) {
  return $A(M) === "html" ? M : M.assignedSlot || M.parentNode || (Mu(M) ? M.host : null) || QI(M);
}
function jS(M) {
  return !mA(M) || wI(M).position === "fixed" ? null : M.offsetParent;
}
function _Y(M) {
  var A = /firefox/i.test(tj()), I = /Trident/i.test(tj());
  if (I && mA(M)) {
    var g = wI(M);
    if (g.position === "fixed")
      return null;
  }
  var D = mL(M);
  for (Mu(D) && (D = D.host); mA(D) && ["html", "body"].indexOf($A(D)) < 0; ) {
    var N = wI(D);
    if (N.transform !== "none" || N.perspective !== "none" || N.contain === "paint" || ["transform", "perspective"].indexOf(N.willChange) !== -1 || A && N.willChange === "filter" || A && N.filter && N.filter !== "none")
      return D;
    D = D.parentNode;
  }
  return null;
}
function ZD(M) {
  for (var A = bA(M), I = jS(M); I && HY(I) && wI(I).position === "static"; )
    I = jS(I);
  return I && ($A(I) === "html" || $A(I) === "body" && wI(I).position === "static") ? A : I || _Y(M) || A;
}
function gu(M) {
  return ["top", "bottom"].indexOf(M) >= 0 ? "x" : "y";
}
function zD(M, A, I) {
  return qI(M, ML(A, I));
}
function $Y(M, A, I) {
  var g = zD(M, A, I);
  return g > I ? I : g;
}
function KC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mw(M) {
  return Object.assign({}, KC(), M);
}
function Aw(M, A) {
  return A.reduce(function(I, g) {
    return I[g] = M, I;
  }, {});
}
var qY = function(A, I) {
  return A = typeof A == "function" ? A(Object.assign({}, I.rects, {
    placement: I.placement
  })) : A, Mw(typeof A != "number" ? A : Aw(A, Kg));
};
function KY(M) {
  var A, I = M.state, g = M.name, D = M.options, N = I.elements.arrow, L = I.modifiersData.popperOffsets, t = HA(I.placement), j = gu(t), S = [CA, cA].indexOf(t) >= 0, u = S ? "height" : "width";
  if (!(!N || !L)) {
    var i = qY(D.padding, I), C = Iu(N), w = j === "y" ? eA : CA, E = j === "y" ? sA : cA, x = I.rects.reference[u] + I.rects.reference[j] - L[j] - I.rects.popper[u], n = L[j] - I.rects.reference[j], a = ZD(N), z = a ? j === "y" ? a.clientHeight || 0 : a.clientWidth || 0 : 0, d = x / 2 - n / 2, Y = i[w], U = z - C[u] - i[E], k = z / 2 - C[u] / 2 + d, G = zD(Y, k, U), r = j;
    I.modifiersData[g] = (A = {}, A[r] = G, A.centerOffset = G - k, A);
  }
}
function Mr(M) {
  var A = M.state, I = M.options, g = I.element, D = g === void 0 ? "[data-popper-arrow]" : g;
  D != null && (typeof D == "string" && (D = A.elements.popper.querySelector(D), !D) || !qC(A.elements.popper, D) || (A.elements.arrow = D));
}
const Iw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: KY,
  effect: Mr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Fg(M) {
  return M.split("-")[1];
}
var Ar = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ir(M) {
  var A = M.x, I = M.y, g = window, D = g.devicePixelRatio || 1;
  return {
    x: Bg(A * D) / D || 0,
    y: Bg(I * D) / D || 0
  };
}
function uS(M) {
  var A, I = M.popper, g = M.popperRect, D = M.placement, N = M.variation, L = M.offsets, t = M.position, j = M.gpuAcceleration, S = M.adaptive, u = M.roundOffsets, i = M.isFixed, C = L.x, w = C === void 0 ? 0 : C, E = L.y, x = E === void 0 ? 0 : E, n = typeof u == "function" ? u({
    x: w,
    y: x
  }) : {
    x: w,
    y: x
  };
  w = n.x, x = n.y;
  var a = L.hasOwnProperty("x"), z = L.hasOwnProperty("y"), d = CA, Y = eA, U = window;
  if (S) {
    var k = ZD(I), G = "clientHeight", r = "clientWidth";
    if (k === bA(I) && (k = QI(I), wI(k).position !== "static" && t === "absolute" && (G = "scrollHeight", r = "scrollWidth")), k = k, D === eA || (D === CA || D === cA) && N === Zg) {
      Y = sA;
      var b = i && k === U && U.visualViewport ? U.visualViewport.height : k[G];
      x -= b - g.height, x *= j ? 1 : -1;
    }
    if (D === CA || (D === eA || D === sA) && N === Zg) {
      d = cA;
      var V = i && k === U && U.visualViewport ? U.visualViewport.width : k[r];
      w -= V - g.width, w *= j ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: t
  }, S && Ar), AM = u === !0 ? Ir({
    x: w,
    y: x
  }) : {
    x: w,
    y: x
  };
  if (w = AM.x, x = AM.y, j) {
    var LM;
    return Object.assign({}, R, (LM = {}, LM[Y] = z ? "0" : "", LM[d] = a ? "0" : "", LM.transform = (U.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + x + "px)" : "translate3d(" + w + "px, " + x + "px, 0)", LM));
  }
  return Object.assign({}, R, (A = {}, A[Y] = z ? x + "px" : "", A[d] = a ? w + "px" : "", A.transform = "", A));
}
function gr(M) {
  var A = M.state, I = M.options, g = I.gpuAcceleration, D = g === void 0 ? !0 : g, N = I.adaptive, L = N === void 0 ? !0 : N, t = I.roundOffsets, j = t === void 0 ? !0 : t, S = {
    placement: HA(A.placement),
    variation: Fg(A.placement),
    popper: A.elements.popper,
    popperRect: A.rects.popper,
    gpuAcceleration: D,
    isFixed: A.options.strategy === "fixed"
  };
  A.modifiersData.popperOffsets != null && (A.styles.popper = Object.assign({}, A.styles.popper, uS(Object.assign({}, S, {
    offsets: A.modifiersData.popperOffsets,
    position: A.options.strategy,
    adaptive: L,
    roundOffsets: j
  })))), A.modifiersData.arrow != null && (A.styles.arrow = Object.assign({}, A.styles.arrow, uS(Object.assign({}, S, {
    offsets: A.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: j
  })))), A.attributes.popper = Object.assign({}, A.attributes.popper, {
    "data-popper-placement": A.placement
  });
}
const Du = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: gr,
  data: {}
};
var LN = {
  passive: !0
};
function Dr(M) {
  var A = M.state, I = M.instance, g = M.options, D = g.scroll, N = D === void 0 ? !0 : D, L = g.resize, t = L === void 0 ? !0 : L, j = bA(A.elements.popper), S = [].concat(A.scrollParents.reference, A.scrollParents.popper);
  return N && S.forEach(function(u) {
    u.addEventListener("scroll", I.update, LN);
  }), t && j.addEventListener("resize", I.update, LN), function() {
    N && S.forEach(function(u) {
      u.removeEventListener("scroll", I.update, LN);
    }), t && j.removeEventListener("resize", I.update, LN);
  };
}
const Nu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Dr,
  data: {}
};
var Nr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function rN(M) {
  return M.replace(/left|right|bottom|top/g, function(A) {
    return Nr[A];
  });
}
var Lr = {
  start: "end",
  end: "start"
};
function SS(M) {
  return M.replace(/start|end/g, function(A) {
    return Lr[A];
  });
}
function Lu(M) {
  var A = bA(M), I = A.pageXOffset, g = A.pageYOffset;
  return {
    scrollLeft: I,
    scrollTop: g
  };
}
function tu(M) {
  return Pg(QI(M)).left + Lu(M).scrollLeft;
}
function tr(M, A) {
  var I = bA(M), g = QI(M), D = I.visualViewport, N = g.clientWidth, L = g.clientHeight, t = 0, j = 0;
  if (D) {
    N = D.width, L = D.height;
    var S = $C();
    (S || !S && A === "fixed") && (t = D.offsetLeft, j = D.offsetTop);
  }
  return {
    width: N,
    height: L,
    x: t + tu(M),
    y: j
  };
}
function jr(M) {
  var A, I = QI(M), g = Lu(M), D = (A = M.ownerDocument) == null ? void 0 : A.body, N = qI(I.scrollWidth, I.clientWidth, D ? D.scrollWidth : 0, D ? D.clientWidth : 0), L = qI(I.scrollHeight, I.clientHeight, D ? D.scrollHeight : 0, D ? D.clientHeight : 0), t = -g.scrollLeft + tu(M), j = -g.scrollTop;
  return wI(D || I).direction === "rtl" && (t += qI(I.clientWidth, D ? D.clientWidth : 0) - N), {
    width: N,
    height: L,
    x: t,
    y: j
  };
}
function ju(M) {
  var A = wI(M), I = A.overflow, g = A.overflowX, D = A.overflowY;
  return /auto|scroll|overlay|hidden/.test(I + D + g);
}
function gw(M) {
  return ["html", "body", "#document"].indexOf($A(M)) >= 0 ? M.ownerDocument.body : mA(M) && ju(M) ? M : gw(mL(M));
}
function YD(M, A) {
  var I;
  A === void 0 && (A = []);
  var g = gw(M), D = g === ((I = M.ownerDocument) == null ? void 0 : I.body), N = bA(g), L = D ? [N].concat(N.visualViewport || [], ju(g) ? g : []) : g, t = A.concat(L);
  return D ? t : t.concat(YD(mL(L)));
}
function jj(M) {
  return Object.assign({}, M, {
    left: M.x,
    top: M.y,
    right: M.x + M.width,
    bottom: M.y + M.height
  });
}
function ur(M, A) {
  var I = Pg(M, !1, A === "fixed");
  return I.top = I.top + M.clientTop, I.left = I.left + M.clientLeft, I.bottom = I.top + M.clientHeight, I.right = I.left + M.clientWidth, I.width = M.clientWidth, I.height = M.clientHeight, I.x = I.left, I.y = I.top, I;
}
function iS(M, A, I) {
  return A === qj ? jj(tr(M, I)) : Dg(A) ? ur(A, I) : jj(jr(QI(M)));
}
function Sr(M) {
  var A = YD(mL(M)), I = ["absolute", "fixed"].indexOf(wI(M).position) >= 0, g = I && mA(M) ? ZD(M) : M;
  return Dg(g) ? A.filter(function(D) {
    return Dg(D) && qC(D, g) && $A(D) !== "body";
  }) : [];
}
function ir(M, A, I, g) {
  var D = A === "clippingParents" ? Sr(M) : [].concat(A), N = [].concat(D, [I]), L = N[0], t = N.reduce(function(j, S) {
    var u = iS(M, S, g);
    return j.top = qI(u.top, j.top), j.right = ML(u.right, j.right), j.bottom = ML(u.bottom, j.bottom), j.left = qI(u.left, j.left), j;
  }, iS(M, L, g));
  return t.width = t.right - t.left, t.height = t.bottom - t.top, t.x = t.left, t.y = t.top, t;
}
function Dw(M) {
  var A = M.reference, I = M.element, g = M.placement, D = g ? HA(g) : null, N = g ? Fg(g) : null, L = A.x + A.width / 2 - I.width / 2, t = A.y + A.height / 2 - I.height / 2, j;
  switch (D) {
    case eA:
      j = {
        x: L,
        y: A.y - I.height
      };
      break;
    case sA:
      j = {
        x: L,
        y: A.y + A.height
      };
      break;
    case cA:
      j = {
        x: A.x + A.width,
        y: t
      };
      break;
    case CA:
      j = {
        x: A.x - I.width,
        y: t
      };
      break;
    default:
      j = {
        x: A.x,
        y: A.y
      };
  }
  var S = D ? gu(D) : null;
  if (S != null) {
    var u = S === "y" ? "height" : "width";
    switch (N) {
      case gg:
        j[S] = j[S] - (A[u] / 2 - I[u] / 2);
        break;
      case Zg:
        j[S] = j[S] + (A[u] / 2 - I[u] / 2);
        break;
    }
  }
  return j;
}
function Xg(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = g === void 0 ? M.placement : g, N = I.strategy, L = N === void 0 ? M.strategy : N, t = I.boundary, j = t === void 0 ? GC : t, S = I.rootBoundary, u = S === void 0 ? qj : S, i = I.elementContext, C = i === void 0 ? lg : i, w = I.altBoundary, E = w === void 0 ? !1 : w, x = I.padding, n = x === void 0 ? 0 : x, a = Mw(typeof n != "number" ? n : Aw(n, Kg)), z = C === lg ? fC : lg, d = M.rects.popper, Y = M.elements[E ? z : C], U = ir(Dg(Y) ? Y : Y.contextElement || QI(M.elements.popper), j, u, L), k = Pg(M.elements.reference), G = Dw({
    reference: k,
    element: d,
    strategy: "absolute",
    placement: D
  }), r = jj(Object.assign({}, d, G)), b = C === lg ? r : k, V = {
    top: U.top - b.top + a.top,
    bottom: b.bottom - U.bottom + a.bottom,
    left: U.left - b.left + a.left,
    right: b.right - U.right + a.right
  }, R = M.modifiersData.offset;
  if (C === lg && R) {
    var AM = R[D];
    Object.keys(V).forEach(function(LM) {
      var gM = [cA, sA].indexOf(LM) >= 0 ? 1 : -1, oM = [eA, sA].indexOf(LM) >= 0 ? "y" : "x";
      V[LM] += AM[oM] * gM;
    });
  }
  return V;
}
function er(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = I.boundary, N = I.rootBoundary, L = I.padding, t = I.flipVariations, j = I.allowedAutoPlacements, S = j === void 0 ? Kj : j, u = Fg(g), i = u ? t ? Lj : Lj.filter(function(E) {
    return Fg(E) === u;
  }) : Kg, C = i.filter(function(E) {
    return S.indexOf(E) >= 0;
  });
  C.length === 0 && (C = i);
  var w = C.reduce(function(E, x) {
    return E[x] = Xg(M, {
      placement: x,
      boundary: D,
      rootBoundary: N,
      padding: L
    })[HA(x)], E;
  }, {});
  return Object.keys(w).sort(function(E, x) {
    return w[E] - w[x];
  });
}
function Cr(M) {
  if (HA(M) === UL)
    return [];
  var A = rN(M);
  return [SS(M), A, SS(A)];
}
function wr(M) {
  var A = M.state, I = M.options, g = M.name;
  if (!A.modifiersData[g]._skip) {
    for (var D = I.mainAxis, N = D === void 0 ? !0 : D, L = I.altAxis, t = L === void 0 ? !0 : L, j = I.fallbackPlacements, S = I.padding, u = I.boundary, i = I.rootBoundary, C = I.altBoundary, w = I.flipVariations, E = w === void 0 ? !0 : w, x = I.allowedAutoPlacements, n = A.options.placement, a = HA(n), z = a === n, d = j || (z || !E ? [rN(n)] : Cr(n)), Y = [n].concat(d).reduce(function(zM, J) {
      return zM.concat(HA(J) === UL ? er(A, {
        placement: J,
        boundary: u,
        rootBoundary: i,
        padding: S,
        flipVariations: E,
        allowedAutoPlacements: x
      }) : J);
    }, []), U = A.rects.reference, k = A.rects.popper, G = /* @__PURE__ */ new Map(), r = !0, b = Y[0], V = 0; V < Y.length; V++) {
      var R = Y[V], AM = HA(R), LM = Fg(R) === gg, gM = [eA, sA].indexOf(AM) >= 0, oM = gM ? "width" : "height", SM = Xg(A, {
        placement: R,
        boundary: u,
        rootBoundary: i,
        altBoundary: C,
        padding: S
      }), tM = gM ? LM ? cA : CA : LM ? sA : eA;
      U[oM] > k[oM] && (tM = rN(tM));
      var CM = rN(tM), dM = [];
      if (N && dM.push(SM[AM] <= 0), t && dM.push(SM[tM] <= 0, SM[CM] <= 0), dM.every(function(zM) {
        return zM;
      })) {
        b = R, r = !1;
        break;
      }
      G.set(R, dM);
    }
    if (r)
      for (var bM = E ? 3 : 1, vM = function(J) {
        var _ = Y.find(function($) {
          var NM = G.get($);
          if (NM)
            return NM.slice(0, J).every(function(hM) {
              return hM;
            });
        });
        if (_)
          return b = _, "break";
      }, fM = bM; fM > 0; fM--) {
        var iM = vM(fM);
        if (iM === "break")
          break;
      }
    A.placement !== b && (A.modifiersData[g]._skip = !0, A.placement = b, A.reset = !0);
  }
}
const Nw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function eS(M, A, I) {
  return I === void 0 && (I = {
    x: 0,
    y: 0
  }), {
    top: M.top - A.height - I.y,
    right: M.right - A.width + I.x,
    bottom: M.bottom - A.height + I.y,
    left: M.left - A.width - I.x
  };
}
function CS(M) {
  return [eA, cA, sA, CA].some(function(A) {
    return M[A] >= 0;
  });
}
function Er(M) {
  var A = M.state, I = M.name, g = A.rects.reference, D = A.rects.popper, N = A.modifiersData.preventOverflow, L = Xg(A, {
    elementContext: "reference"
  }), t = Xg(A, {
    altBoundary: !0
  }), j = eS(L, g), S = eS(t, D, N), u = CS(j), i = CS(S);
  A.modifiersData[I] = {
    referenceClippingOffsets: j,
    popperEscapeOffsets: S,
    isReferenceHidden: u,
    hasPopperEscaped: i
  }, A.attributes.popper = Object.assign({}, A.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": i
  });
}
const Lw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Er
};
function Tr(M, A, I) {
  var g = HA(M), D = [CA, eA].indexOf(g) >= 0 ? -1 : 1, N = typeof I == "function" ? I(Object.assign({}, A, {
    placement: M
  })) : I, L = N[0], t = N[1];
  return L = L || 0, t = (t || 0) * D, [CA, cA].indexOf(g) >= 0 ? {
    x: t,
    y: L
  } : {
    x: L,
    y: t
  };
}
function xr(M) {
  var A = M.state, I = M.options, g = M.name, D = I.offset, N = D === void 0 ? [0, 0] : D, L = Kj.reduce(function(u, i) {
    return u[i] = Tr(i, A.rects, N), u;
  }, {}), t = L[A.placement], j = t.x, S = t.y;
  A.modifiersData.popperOffsets != null && (A.modifiersData.popperOffsets.x += j, A.modifiersData.popperOffsets.y += S), A.modifiersData[g] = L;
}
const tw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xr
};
function ar(M) {
  var A = M.state, I = M.name;
  A.modifiersData[I] = Dw({
    reference: A.rects.reference,
    element: A.rects.popper,
    strategy: "absolute",
    placement: A.placement
  });
}
const uu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ar,
  data: {}
};
function yr(M) {
  return M === "x" ? "y" : "x";
}
function nr(M) {
  var A = M.state, I = M.options, g = M.name, D = I.mainAxis, N = D === void 0 ? !0 : D, L = I.altAxis, t = L === void 0 ? !1 : L, j = I.boundary, S = I.rootBoundary, u = I.altBoundary, i = I.padding, C = I.tether, w = C === void 0 ? !0 : C, E = I.tetherOffset, x = E === void 0 ? 0 : E, n = Xg(A, {
    boundary: j,
    rootBoundary: S,
    padding: i,
    altBoundary: u
  }), a = HA(A.placement), z = Fg(A.placement), d = !z, Y = gu(a), U = yr(Y), k = A.modifiersData.popperOffsets, G = A.rects.reference, r = A.rects.popper, b = typeof x == "function" ? x(Object.assign({}, A.rects, {
    placement: A.placement
  })) : x, V = typeof b == "number" ? {
    mainAxis: b,
    altAxis: b
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, b), R = A.modifiersData.offset ? A.modifiersData.offset[A.placement] : null, AM = {
    x: 0,
    y: 0
  };
  if (!!k) {
    if (N) {
      var LM, gM = Y === "y" ? eA : CA, oM = Y === "y" ? sA : cA, SM = Y === "y" ? "height" : "width", tM = k[Y], CM = tM + n[gM], dM = tM - n[oM], bM = w ? -r[SM] / 2 : 0, vM = z === gg ? G[SM] : r[SM], fM = z === gg ? -r[SM] : -G[SM], iM = A.elements.arrow, zM = w && iM ? Iu(iM) : {
        width: 0,
        height: 0
      }, J = A.modifiersData["arrow#persistent"] ? A.modifiersData["arrow#persistent"].padding : KC(), _ = J[gM], $ = J[oM], NM = zD(0, G[SM], zM[SM]), hM = d ? G[SM] / 2 - bM - NM - _ - V.mainAxis : vM - NM - _ - V.mainAxis, BM = d ? -G[SM] / 2 + bM + NM + $ + V.mainAxis : fM + NM + $ + V.mainAxis, nM = A.elements.arrow && ZD(A.elements.arrow), p = nM ? Y === "y" ? nM.clientTop || 0 : nM.clientLeft || 0 : 0, q = (LM = R == null ? void 0 : R[Y]) != null ? LM : 0, YM = tM + hM - q - p, H = tM + BM - q, gA = zD(w ? ML(CM, YM) : CM, tM, w ? qI(dM, H) : dM);
      k[Y] = gA, AM[Y] = gA - tM;
    }
    if (t) {
      var QM, DD = Y === "x" ? eA : CA, KA = Y === "x" ? sA : cA, fI = k[U], RD = U === "y" ? "height" : "width", yu = fI + n[DD], nu = fI - n[KA], GL = [eA, CA].indexOf(a) !== -1, ou = (QM = R == null ? void 0 : R[U]) != null ? QM : 0, lu = GL ? yu : fI - G[RD] - r[RD] - ou + V.altAxis, su = GL ? fI + G[RD] + r[RD] - ou - V.altAxis : nu, cu = w && GL ? $Y(lu, fI, su) : zD(w ? lu : yu, fI, w ? su : nu);
      k[U] = cu, AM[U] = cu - fI;
    }
    A.modifiersData[g] = AM;
  }
}
const jw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nr,
  requiresIfExists: ["offset"]
};
function or(M) {
  return {
    scrollLeft: M.scrollLeft,
    scrollTop: M.scrollTop
  };
}
function lr(M) {
  return M === bA(M) || !mA(M) ? Lu(M) : or(M);
}
function sr(M) {
  var A = M.getBoundingClientRect(), I = Bg(A.width) / M.offsetWidth || 1, g = Bg(A.height) / M.offsetHeight || 1;
  return I !== 1 || g !== 1;
}
function cr(M, A, I) {
  I === void 0 && (I = !1);
  var g = mA(A), D = mA(A) && sr(A), N = QI(A), L = Pg(M, D, I), t = {
    scrollLeft: 0,
    scrollTop: 0
  }, j = {
    x: 0,
    y: 0
  };
  return (g || !g && !I) && (($A(A) !== "body" || ju(N)) && (t = lr(A)), mA(A) ? (j = Pg(A, !0), j.x += A.clientLeft, j.y += A.clientTop) : N && (j.x = tu(N))), {
    x: L.left + t.scrollLeft - j.x,
    y: L.top + t.scrollTop - j.y,
    width: L.width,
    height: L.height
  };
}
function zr(M) {
  var A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), g = [];
  M.forEach(function(N) {
    A.set(N.name, N);
  });
  function D(N) {
    I.add(N.name);
    var L = [].concat(N.requires || [], N.requiresIfExists || []);
    L.forEach(function(t) {
      if (!I.has(t)) {
        var j = A.get(t);
        j && D(j);
      }
    }), g.push(N);
  }
  return M.forEach(function(N) {
    I.has(N.name) || D(N);
  }), g;
}
function Yr(M) {
  var A = zr(M);
  return _C.reduce(function(I, g) {
    return I.concat(A.filter(function(D) {
      return D.phase === g;
    }));
  }, []);
}
function rr(M) {
  var A;
  return function() {
    return A || (A = new Promise(function(I) {
      Promise.resolve().then(function() {
        A = void 0, I(M());
      });
    })), A;
  };
}
function dr(M) {
  var A = M.reduce(function(I, g) {
    var D = I[g.name];
    return I[g.name] = D ? Object.assign({}, D, g, {
      options: Object.assign({}, D.options, g.options),
      data: Object.assign({}, D.data, g.data)
    }) : g, I;
  }, {});
  return Object.keys(A).map(function(I) {
    return A[I];
  });
}
var wS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ES() {
  for (var M = arguments.length, A = new Array(M), I = 0; I < M; I++)
    A[I] = arguments[I];
  return !A.some(function(g) {
    return !(g && typeof g.getBoundingClientRect == "function");
  });
}
function OL(M) {
  M === void 0 && (M = {});
  var A = M, I = A.defaultModifiers, g = I === void 0 ? [] : I, D = A.defaultOptions, N = D === void 0 ? wS : D;
  return function(t, j, S) {
    S === void 0 && (S = N);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wS, N),
      modifiersData: {},
      elements: {
        reference: t,
        popper: j
      },
      attributes: {},
      styles: {}
    }, i = [], C = !1, w = {
      state: u,
      setOptions: function(a) {
        var z = typeof a == "function" ? a(u.options) : a;
        x(), u.options = Object.assign({}, N, u.options, z), u.scrollParents = {
          reference: Dg(t) ? YD(t) : t.contextElement ? YD(t.contextElement) : [],
          popper: YD(j)
        };
        var d = Yr(dr([].concat(g, u.options.modifiers)));
        return u.orderedModifiers = d.filter(function(Y) {
          return Y.enabled;
        }), E(), w.update();
      },
      forceUpdate: function() {
        if (!C) {
          var a = u.elements, z = a.reference, d = a.popper;
          if (!!ES(z, d)) {
            u.rects = {
              reference: cr(z, ZD(d), u.options.strategy === "fixed"),
              popper: Iu(d)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(V) {
              return u.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var Y = 0; Y < u.orderedModifiers.length; Y++) {
              if (u.reset === !0) {
                u.reset = !1, Y = -1;
                continue;
              }
              var U = u.orderedModifiers[Y], k = U.fn, G = U.options, r = G === void 0 ? {} : G, b = U.name;
              typeof k == "function" && (u = k({
                state: u,
                options: r,
                name: b,
                instance: w
              }) || u);
            }
          }
        }
      },
      update: rr(function() {
        return new Promise(function(n) {
          w.forceUpdate(), n(u);
        });
      }),
      destroy: function() {
        x(), C = !0;
      }
    };
    if (!ES(t, j))
      return w;
    w.setOptions(S).then(function(n) {
      !C && S.onFirstUpdate && S.onFirstUpdate(n);
    });
    function E() {
      u.orderedModifiers.forEach(function(n) {
        var a = n.name, z = n.options, d = z === void 0 ? {} : z, Y = n.effect;
        if (typeof Y == "function") {
          var U = Y({
            state: u,
            name: a,
            instance: w,
            options: d
          }), k = function() {
          };
          i.push(U || k);
        }
      });
    }
    function x() {
      i.forEach(function(n) {
        return n();
      }), i = [];
    }
    return w;
  };
}
var Ur = /* @__PURE__ */ OL(), mr = [Nu, uu, Du, Au], Or = /* @__PURE__ */ OL({
  defaultModifiers: mr
}), hr = [Nu, uu, Du, Au, tw, Nw, jw, Iw, Lw], Su = /* @__PURE__ */ OL({
  defaultModifiers: hr
});
const uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperGenerator: OL,
  detectOverflow: Xg,
  createPopperBase: Ur,
  createPopper: Su,
  createPopperLite: Or,
  top: eA,
  bottom: sA,
  right: cA,
  left: CA,
  auto: UL,
  basePlacements: Kg,
  start: gg,
  end: Zg,
  clippingParents: GC,
  viewport: qj,
  popper: lg,
  reference: fC,
  variationPlacements: Lj,
  placements: Kj,
  beforeRead: JC,
  read: VC,
  afterRead: ZC,
  beforeMain: BC,
  main: PC,
  afterMain: FC,
  beforeWrite: XC,
  write: RC,
  afterWrite: HC,
  modifierPhases: _C,
  applyStyles: Au,
  arrow: Iw,
  computeStyles: Du,
  eventListeners: Nu,
  flip: Nw,
  hide: Lw,
  offset: tw,
  popperOffsets: uu,
  preventOverflow: jw
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const br = 1e6, Wr = 1e3, uj = "transitionend", kr = (M) => M == null ? `${M}` : Object.prototype.toString.call(M).match(/\s([a-z]+)/i)[1].toLowerCase(), pr = (M) => {
  do
    M += Math.floor(Math.random() * br);
  while (document.getElementById(M));
  return M;
}, Sw = (M) => {
  let A = M.getAttribute("data-bs-target");
  if (!A || A === "#") {
    let I = M.getAttribute("href");
    if (!I || !I.includes("#") && !I.startsWith("."))
      return null;
    I.includes("#") && !I.startsWith("#") && (I = `#${I.split("#")[1]}`), A = I && I !== "#" ? I.trim() : null;
  }
  return A;
}, iw = (M) => {
  const A = Sw(M);
  return A && document.querySelector(A) ? A : null;
}, tI = (M) => {
  const A = Sw(M);
  return A ? document.querySelector(A) : null;
}, Qr = (M) => {
  if (!M)
    return 0;
  let {
    transitionDuration: A,
    transitionDelay: I
  } = window.getComputedStyle(M);
  const g = Number.parseFloat(A), D = Number.parseFloat(I);
  return !g && !D ? 0 : (A = A.split(",")[0], I = I.split(",")[0], (Number.parseFloat(A) + Number.parseFloat(I)) * Wr);
}, ew = (M) => {
  M.dispatchEvent(new Event(uj));
}, jI = (M) => !M || typeof M != "object" ? !1 : (typeof M.jquery < "u" && (M = M[0]), typeof M.nodeType < "u"), hI = (M) => jI(M) ? M.jquery ? M[0] : M : typeof M == "string" && M.length > 0 ? document.querySelector(M) : null, MD = (M) => {
  if (!jI(M) || M.getClientRects().length === 0)
    return !1;
  const A = getComputedStyle(M).getPropertyValue("visibility") === "visible", I = M.closest("details:not([open])");
  if (!I)
    return A;
  if (I !== M) {
    const g = M.closest("summary");
    if (g && g.parentNode !== I || g === null)
      return !1;
  }
  return A;
}, bI = (M) => !M || M.nodeType !== Node.ELEMENT_NODE || M.classList.contains("disabled") ? !0 : typeof M.disabled < "u" ? M.disabled : M.hasAttribute("disabled") && M.getAttribute("disabled") !== "false", Cw = (M) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof M.getRootNode == "function") {
    const A = M.getRootNode();
    return A instanceof ShadowRoot ? A : null;
  }
  return M instanceof ShadowRoot ? M : M.parentNode ? Cw(M.parentNode) : null;
}, AL = () => {
}, BD = (M) => {
  M.offsetHeight;
}, ww = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, nt = [], vr = (M) => {
  document.readyState === "loading" ? (nt.length || document.addEventListener("DOMContentLoaded", () => {
    for (const A of nt)
      A();
  }), nt.push(M)) : M();
}, hA = () => document.documentElement.dir === "rtl", WA = (M) => {
  vr(() => {
    const A = ww();
    if (A) {
      const I = M.NAME, g = A.fn[I];
      A.fn[I] = M.jQueryInterface, A.fn[I].Constructor = M, A.fn[I].noConflict = () => (A.fn[I] = g, M.jQueryInterface);
    }
  });
}, II = (M) => {
  typeof M == "function" && M();
}, Ew = (M, A, I = !0) => {
  if (!I) {
    II(M);
    return;
  }
  const g = 5, D = Qr(A) + g;
  let N = !1;
  const L = ({
    target: t
  }) => {
    t === A && (N = !0, A.removeEventListener(uj, L), II(M));
  };
  A.addEventListener(uj, L), setTimeout(() => {
    N || ew(A);
  }, D);
}, iu = (M, A, I, g) => {
  const D = M.length;
  let N = M.indexOf(A);
  return N === -1 ? !I && g ? M[D - 1] : M[0] : (N += I ? 1 : -1, g && (N = (N + D) % D), M[Math.max(0, Math.min(N, D - 1))]);
}, Gr = /[^.]*(?=\..*)\.|.*/, fr = /\..*/, Jr = /::\d+$/, ot = {};
let TS = 1;
const Tw = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Vr = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function xw(M, A) {
  return A && `${A}::${TS++}` || M.uidEvent || TS++;
}
function aw(M) {
  const A = xw(M);
  return M.uidEvent = A, ot[A] = ot[A] || {}, ot[A];
}
function Zr(M, A) {
  return function I(g) {
    return eu(g, {
      delegateTarget: M
    }), I.oneOff && X.off(M, g.type, A), A.apply(M, [g]);
  };
}
function Br(M, A, I) {
  return function g(D) {
    const N = M.querySelectorAll(A);
    for (let {
      target: L
    } = D; L && L !== this; L = L.parentNode)
      for (const t of N)
        if (t === L)
          return eu(D, {
            delegateTarget: L
          }), g.oneOff && X.off(M, D.type, A, I), I.apply(L, [D]);
  };
}
function yw(M, A, I = null) {
  return Object.values(M).find((g) => g.callable === A && g.delegationSelector === I);
}
function nw(M, A, I) {
  const g = typeof A == "string", D = g ? I : A || I;
  let N = ow(M);
  return Vr.has(N) || (N = M), [g, D, N];
}
function xS(M, A, I, g, D) {
  if (typeof A != "string" || !M)
    return;
  let [N, L, t] = nw(A, I, g);
  A in Tw && (L = ((E) => function(x) {
    if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
      return E.call(this, x);
  })(L));
  const j = aw(M), S = j[t] || (j[t] = {}), u = yw(S, L, N ? I : null);
  if (u) {
    u.oneOff = u.oneOff && D;
    return;
  }
  const i = xw(L, A.replace(Gr, "")), C = N ? Br(M, I, L) : Zr(M, L);
  C.delegationSelector = N ? I : null, C.callable = L, C.oneOff = D, C.uidEvent = i, S[i] = C, M.addEventListener(t, C, N);
}
function Sj(M, A, I, g, D) {
  const N = yw(A[I], g, D);
  !N || (M.removeEventListener(I, N, Boolean(D)), delete A[I][N.uidEvent]);
}
function Pr(M, A, I, g) {
  const D = A[I] || {};
  for (const N of Object.keys(D))
    if (N.includes(g)) {
      const L = D[N];
      Sj(M, A, I, L.callable, L.delegationSelector);
    }
}
function ow(M) {
  return M = M.replace(fr, ""), Tw[M] || M;
}
const X = {
  on(M, A, I, g) {
    xS(M, A, I, g, !1);
  },
  one(M, A, I, g) {
    xS(M, A, I, g, !0);
  },
  off(M, A, I, g) {
    if (typeof A != "string" || !M)
      return;
    const [D, N, L] = nw(A, I, g), t = L !== A, j = aw(M), S = j[L] || {}, u = A.startsWith(".");
    if (typeof N < "u") {
      if (!Object.keys(S).length)
        return;
      Sj(M, j, L, N, D ? I : null);
      return;
    }
    if (u)
      for (const i of Object.keys(j))
        Pr(M, j, i, A.slice(1));
    for (const i of Object.keys(S)) {
      const C = i.replace(Jr, "");
      if (!t || A.includes(C)) {
        const w = S[i];
        Sj(M, j, L, w.callable, w.delegationSelector);
      }
    }
  },
  trigger(M, A, I) {
    if (typeof A != "string" || !M)
      return null;
    const g = ww(), D = ow(A), N = A !== D;
    let L = null, t = !0, j = !0, S = !1;
    N && g && (L = g.Event(A, I), g(M).trigger(L), t = !L.isPropagationStopped(), j = !L.isImmediatePropagationStopped(), S = L.isDefaultPrevented());
    let u = new Event(A, {
      bubbles: t,
      cancelable: !0
    });
    return u = eu(u, I), S && u.preventDefault(), j && M.dispatchEvent(u), u.defaultPrevented && L && L.preventDefault(), u;
  }
};
function eu(M, A) {
  for (const [I, g] of Object.entries(A || {}))
    try {
      M[I] = g;
    } catch {
      Object.defineProperty(M, I, {
        configurable: !0,
        get() {
          return g;
        }
      });
    }
  return M;
}
const lI = /* @__PURE__ */ new Map(), lt = {
  set(M, A, I) {
    lI.has(M) || lI.set(M, /* @__PURE__ */ new Map());
    const g = lI.get(M);
    if (!g.has(A) && g.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
      return;
    }
    g.set(A, I);
  },
  get(M, A) {
    return lI.has(M) && lI.get(M).get(A) || null;
  },
  remove(M, A) {
    if (!lI.has(M))
      return;
    const I = lI.get(M);
    I.delete(A), I.size === 0 && lI.delete(M);
  }
};
function aS(M) {
  if (M === "true")
    return !0;
  if (M === "false")
    return !1;
  if (M === Number(M).toString())
    return Number(M);
  if (M === "" || M === "null")
    return null;
  if (typeof M != "string")
    return M;
  try {
    return JSON.parse(decodeURIComponent(M));
  } catch {
    return M;
  }
}
function st(M) {
  return M.replace(/[A-Z]/g, (A) => `-${A.toLowerCase()}`);
}
const uI = {
  setDataAttribute(M, A, I) {
    M.setAttribute(`data-bs-${st(A)}`, I);
  },
  removeDataAttribute(M, A) {
    M.removeAttribute(`data-bs-${st(A)}`);
  },
  getDataAttributes(M) {
    if (!M)
      return {};
    const A = {}, I = Object.keys(M.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
    for (const g of I) {
      let D = g.replace(/^bs/, "");
      D = D.charAt(0).toLowerCase() + D.slice(1, D.length), A[D] = aS(M.dataset[g]);
    }
    return A;
  },
  getDataAttribute(M, A) {
    return aS(M.getAttribute(`data-bs-${st(A)}`));
  }
};
class PD {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(A) {
    return A = this._mergeConfigObj(A), A = this._configAfterMerge(A), this._typeCheckConfig(A), A;
  }
  _configAfterMerge(A) {
    return A;
  }
  _mergeConfigObj(A, I) {
    const g = jI(I) ? uI.getDataAttribute(I, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof g == "object" ? g : {},
      ...jI(I) ? uI.getDataAttributes(I) : {},
      ...typeof A == "object" ? A : {}
    };
  }
  _typeCheckConfig(A, I = this.constructor.DefaultType) {
    for (const g of Object.keys(I)) {
      const D = I[g], N = A[g], L = jI(N) ? "element" : kr(N);
      if (!new RegExp(D).test(L))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${L}" but expected type "${D}".`);
    }
  }
}
const Fr = "5.2.2";
class VA extends PD {
  constructor(A, I) {
    super(), A = hI(A), A && (this._element = A, this._config = this._getConfig(I), lt.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    lt.remove(this._element, this.constructor.DATA_KEY), X.off(this._element, this.constructor.EVENT_KEY);
    for (const A of Object.getOwnPropertyNames(this))
      this[A] = null;
  }
  _queueCallback(A, I, g = !0) {
    Ew(A, I, g);
  }
  _getConfig(A) {
    return A = this._mergeConfigObj(A, this._element), A = this._configAfterMerge(A), this._typeCheckConfig(A), A;
  }
  static getInstance(A) {
    return lt.get(hI(A), this.DATA_KEY);
  }
  static getOrCreateInstance(A, I = {}) {
    return this.getInstance(A) || new this(A, typeof I == "object" ? I : null);
  }
  static get VERSION() {
    return Fr;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(A) {
    return `${A}${this.EVENT_KEY}`;
  }
}
const hL = (M, A = "hide") => {
  const I = `click.dismiss${M.EVENT_KEY}`, g = M.NAME;
  X.on(document, I, `[data-bs-dismiss="${g}"]`, function(D) {
    if (["A", "AREA"].includes(this.tagName) && D.preventDefault(), bI(this))
      return;
    const N = tI(this) || this.closest(`.${g}`);
    M.getOrCreateInstance(N)[A]();
  });
}, Xr = "alert", Rr = "bs.alert", lw = `.${Rr}`, Hr = `close${lw}`, _r = `closed${lw}`, $r = "fade", qr = "show";
class FD extends VA {
  static get NAME() {
    return Xr;
  }
  close() {
    if (X.trigger(this._element, Hr).defaultPrevented)
      return;
    this._element.classList.remove(qr);
    const I = this._element.classList.contains($r);
    this._queueCallback(() => this._destroyElement(), this._element, I);
  }
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, _r), this.dispose();
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = FD.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
hL(FD, "close");
WA(FD);
const Kr = "button", Md = "bs.button", Ad = `.${Md}`, Id = ".data-api", gd = "active", yS = '[data-bs-toggle="button"]', Dd = `click${Ad}${Id}`;
class bL extends VA {
  static get NAME() {
    return Kr;
  }
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(gd));
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = bL.getOrCreateInstance(this);
      A === "toggle" && I[A]();
    });
  }
}
X.on(document, Dd, yS, (M) => {
  M.preventDefault();
  const A = M.target.closest(yS);
  bL.getOrCreateInstance(A).toggle();
});
WA(bL);
const cM = {
  find(M, A = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(A, M));
  },
  findOne(M, A = document.documentElement) {
    return Element.prototype.querySelector.call(A, M);
  },
  children(M, A) {
    return [].concat(...M.children).filter((I) => I.matches(A));
  },
  parents(M, A) {
    const I = [];
    let g = M.parentNode.closest(A);
    for (; g; )
      I.push(g), g = g.parentNode.closest(A);
    return I;
  },
  prev(M, A) {
    let I = M.previousElementSibling;
    for (; I; ) {
      if (I.matches(A))
        return [I];
      I = I.previousElementSibling;
    }
    return [];
  },
  next(M, A) {
    let I = M.nextElementSibling;
    for (; I; ) {
      if (I.matches(A))
        return [I];
      I = I.nextElementSibling;
    }
    return [];
  },
  focusableChildren(M) {
    const A = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((I) => `${I}:not([tabindex^="-"])`).join(",");
    return this.find(A, M).filter((I) => !bI(I) && MD(I));
  }
}, Nd = "swipe", AD = ".bs.swipe", Ld = `touchstart${AD}`, td = `touchmove${AD}`, jd = `touchend${AD}`, ud = `pointerdown${AD}`, Sd = `pointerup${AD}`, id = "touch", ed = "pen", Cd = "pointer-event", wd = 40, Ed = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Td = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class IL extends PD {
  constructor(A, I) {
    super(), this._element = A, !(!A || !IL.isSupported()) && (this._config = this._getConfig(I), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
  }
  static get Default() {
    return Ed;
  }
  static get DefaultType() {
    return Td;
  }
  static get NAME() {
    return Nd;
  }
  dispose() {
    X.off(this._element, AD);
  }
  _start(A) {
    if (!this._supportPointerEvents) {
      this._deltaX = A.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(A) && (this._deltaX = A.clientX);
  }
  _end(A) {
    this._eventIsPointerPenTouch(A) && (this._deltaX = A.clientX - this._deltaX), this._handleSwipe(), II(this._config.endCallback);
  }
  _move(A) {
    this._deltaX = A.touches && A.touches.length > 1 ? 0 : A.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const A = Math.abs(this._deltaX);
    if (A <= wd)
      return;
    const I = A / this._deltaX;
    this._deltaX = 0, I && II(I > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, ud, (A) => this._start(A)), X.on(this._element, Sd, (A) => this._end(A)), this._element.classList.add(Cd)) : (X.on(this._element, Ld, (A) => this._start(A)), X.on(this._element, td, (A) => this._move(A)), X.on(this._element, jd, (A) => this._end(A)));
  }
  _eventIsPointerPenTouch(A) {
    return this._supportPointerEvents && (A.pointerType === ed || A.pointerType === id);
  }
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const xd = "carousel", ad = "bs.carousel", vI = `.${ad}`, sw = ".data-api", yd = "ArrowLeft", nd = "ArrowRight", od = 500, LD = "next", Eg = "prev", sg = "left", dN = "right", ld = `slide${vI}`, ct = `slid${vI}`, sd = `keydown${vI}`, cd = `mouseenter${vI}`, zd = `mouseleave${vI}`, Yd = `dragstart${vI}`, rd = `load${vI}${sw}`, dd = `click${vI}${sw}`, cw = "carousel", tN = "active", Ud = "slide", md = "carousel-item-end", Od = "carousel-item-start", hd = "carousel-item-next", bd = "carousel-item-prev", zw = ".active", Yw = ".carousel-item", Wd = zw + Yw, kd = ".carousel-item img", pd = ".carousel-indicators", Qd = "[data-bs-slide], [data-bs-slide-to]", vd = '[data-bs-ride="carousel"]', Gd = {
  [yd]: dN,
  [nd]: sg
}, fd = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, Jd = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class ID extends VA {
  constructor(A, I) {
    super(A, I), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = cM.findOne(pd, this._element), this._addEventListeners(), this._config.ride === cw && this.cycle();
  }
  static get Default() {
    return fd;
  }
  static get DefaultType() {
    return Jd;
  }
  static get NAME() {
    return xd;
  }
  next() {
    this._slide(LD);
  }
  nextWhenVisible() {
    !document.hidden && MD(this._element) && this.next();
  }
  prev() {
    this._slide(Eg);
  }
  pause() {
    this._isSliding && ew(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!!this._config.ride) {
      if (this._isSliding) {
        X.one(this._element, ct, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(A) {
    const I = this._getItems();
    if (A > I.length - 1 || A < 0)
      return;
    if (this._isSliding) {
      X.one(this._element, ct, () => this.to(A));
      return;
    }
    const g = this._getItemIndex(this._getActive());
    if (g === A)
      return;
    const D = A > g ? LD : Eg;
    this._slide(D, I[A]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(A) {
    return A.defaultInterval = A.interval, A;
  }
  _addEventListeners() {
    this._config.keyboard && X.on(this._element, sd, (A) => this._keydown(A)), this._config.pause === "hover" && (X.on(this._element, cd, () => this.pause()), X.on(this._element, zd, () => this._maybeEnableCycle())), this._config.touch && IL.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const g of cM.find(kd, this._element))
      X.on(g, Yd, (D) => D.preventDefault());
    const I = {
      leftCallback: () => this._slide(this._directionToOrder(sg)),
      rightCallback: () => this._slide(this._directionToOrder(dN)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), od + this._config.interval));
      }
    };
    this._swipeHelper = new IL(this._element, I);
  }
  _keydown(A) {
    if (/input|textarea/i.test(A.target.tagName))
      return;
    const I = Gd[A.key];
    I && (A.preventDefault(), this._slide(this._directionToOrder(I)));
  }
  _getItemIndex(A) {
    return this._getItems().indexOf(A);
  }
  _setActiveIndicatorElement(A) {
    if (!this._indicatorsElement)
      return;
    const I = cM.findOne(zw, this._indicatorsElement);
    I.classList.remove(tN), I.removeAttribute("aria-current");
    const g = cM.findOne(`[data-bs-slide-to="${A}"]`, this._indicatorsElement);
    g && (g.classList.add(tN), g.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const A = this._activeElement || this._getActive();
    if (!A)
      return;
    const I = Number.parseInt(A.getAttribute("data-bs-interval"), 10);
    this._config.interval = I || this._config.defaultInterval;
  }
  _slide(A, I = null) {
    if (this._isSliding)
      return;
    const g = this._getActive(), D = A === LD, N = I || iu(this._getItems(), g, D, this._config.wrap);
    if (N === g)
      return;
    const L = this._getItemIndex(N), t = (w) => X.trigger(this._element, w, {
      relatedTarget: N,
      direction: this._orderToDirection(A),
      from: this._getItemIndex(g),
      to: L
    });
    if (t(ld).defaultPrevented || !g || !N)
      return;
    const S = Boolean(this._interval);
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(L), this._activeElement = N;
    const u = D ? Od : md, i = D ? hd : bd;
    N.classList.add(i), BD(N), g.classList.add(u), N.classList.add(u);
    const C = () => {
      N.classList.remove(u, i), N.classList.add(tN), g.classList.remove(tN, i, u), this._isSliding = !1, t(ct);
    };
    this._queueCallback(C, g, this._isAnimated()), S && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Ud);
  }
  _getActive() {
    return cM.findOne(Wd, this._element);
  }
  _getItems() {
    return cM.find(Yw, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(A) {
    return hA() ? A === sg ? Eg : LD : A === sg ? LD : Eg;
  }
  _orderToDirection(A) {
    return hA() ? A === Eg ? sg : dN : A === Eg ? dN : sg;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = ID.getOrCreateInstance(this, A);
      if (typeof A == "number") {
        I.to(A);
        return;
      }
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(document, dd, Qd, function(M) {
  const A = tI(this);
  if (!A || !A.classList.contains(cw))
    return;
  M.preventDefault();
  const I = ID.getOrCreateInstance(A), g = this.getAttribute("data-bs-slide-to");
  if (g) {
    I.to(g), I._maybeEnableCycle();
    return;
  }
  if (uI.getDataAttribute(this, "slide") === "next") {
    I.next(), I._maybeEnableCycle();
    return;
  }
  I.prev(), I._maybeEnableCycle();
});
X.on(window, rd, () => {
  const M = cM.find(vd);
  for (const A of M)
    ID.getOrCreateInstance(A);
});
WA(ID);
const Vd = "collapse", Zd = "bs.collapse", XD = `.${Zd}`, Bd = ".data-api", Pd = `show${XD}`, Fd = `shown${XD}`, Xd = `hide${XD}`, Rd = `hidden${XD}`, Hd = `click${XD}${Bd}`, zt = "show", Yg = "collapse", jN = "collapsing", _d = "collapsed", $d = `:scope .${Yg} .${Yg}`, qd = "collapse-horizontal", Kd = "width", MU = "height", AU = ".collapse.show, .collapse.collapsing", ij = '[data-bs-toggle="collapse"]', IU = {
  parent: null,
  toggle: !0
}, gU = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Rg extends VA {
  constructor(A, I) {
    super(A, I), this._isTransitioning = !1, this._triggerArray = [];
    const g = cM.find(ij);
    for (const D of g) {
      const N = iw(D), L = cM.find(N).filter((t) => t === this._element);
      N !== null && L.length && this._triggerArray.push(D);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  static get Default() {
    return IU;
  }
  static get DefaultType() {
    return gU;
  }
  static get NAME() {
    return Vd;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let A = [];
    if (this._config.parent && (A = this._getFirstLevelChildren(AU).filter((t) => t !== this._element).map((t) => Rg.getOrCreateInstance(t, {
      toggle: !1
    }))), A.length && A[0]._isTransitioning || X.trigger(this._element, Pd).defaultPrevented)
      return;
    for (const t of A)
      t.hide();
    const g = this._getDimension();
    this._element.classList.remove(Yg), this._element.classList.add(jN), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const D = () => {
      this._isTransitioning = !1, this._element.classList.remove(jN), this._element.classList.add(Yg, zt), this._element.style[g] = "", X.trigger(this._element, Fd);
    }, L = `scroll${g[0].toUpperCase() + g.slice(1)}`;
    this._queueCallback(D, this._element, !0), this._element.style[g] = `${this._element[L]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, Xd).defaultPrevented)
      return;
    const I = this._getDimension();
    this._element.style[I] = `${this._element.getBoundingClientRect()[I]}px`, BD(this._element), this._element.classList.add(jN), this._element.classList.remove(Yg, zt);
    for (const D of this._triggerArray) {
      const N = tI(D);
      N && !this._isShown(N) && this._addAriaAndCollapsedClass([D], !1);
    }
    this._isTransitioning = !0;
    const g = () => {
      this._isTransitioning = !1, this._element.classList.remove(jN), this._element.classList.add(Yg), X.trigger(this._element, Rd);
    };
    this._element.style[I] = "", this._queueCallback(g, this._element, !0);
  }
  _isShown(A = this._element) {
    return A.classList.contains(zt);
  }
  _configAfterMerge(A) {
    return A.toggle = Boolean(A.toggle), A.parent = hI(A.parent), A;
  }
  _getDimension() {
    return this._element.classList.contains(qd) ? Kd : MU;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const A = this._getFirstLevelChildren(ij);
    for (const I of A) {
      const g = tI(I);
      g && this._addAriaAndCollapsedClass([I], this._isShown(g));
    }
  }
  _getFirstLevelChildren(A) {
    const I = cM.find($d, this._config.parent);
    return cM.find(A, this._config.parent).filter((g) => !I.includes(g));
  }
  _addAriaAndCollapsedClass(A, I) {
    if (!!A.length)
      for (const g of A)
        g.classList.toggle(_d, !I), g.setAttribute("aria-expanded", I);
  }
  static jQueryInterface(A) {
    const I = {};
    return typeof A == "string" && /show|hide/.test(A) && (I.toggle = !1), this.each(function() {
      const g = Rg.getOrCreateInstance(this, I);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A]();
      }
    });
  }
}
X.on(document, Hd, ij, function(M) {
  (M.target.tagName === "A" || M.delegateTarget && M.delegateTarget.tagName === "A") && M.preventDefault();
  const A = iw(this), I = cM.find(A);
  for (const g of I)
    Rg.getOrCreateInstance(g, {
      toggle: !1
    }).toggle();
});
WA(Rg);
const nS = "dropdown", DU = "bs.dropdown", jg = `.${DU}`, Cu = ".data-api", NU = "Escape", oS = "Tab", LU = "ArrowUp", lS = "ArrowDown", tU = 2, jU = `hide${jg}`, uU = `hidden${jg}`, SU = `show${jg}`, iU = `shown${jg}`, rw = `click${jg}${Cu}`, dw = `keydown${jg}${Cu}`, eU = `keyup${jg}${Cu}`, cg = "show", CU = "dropup", wU = "dropend", EU = "dropstart", TU = "dropup-center", xU = "dropdown-center", RI = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', aU = `${RI}.${cg}`, UN = ".dropdown-menu", yU = ".navbar", nU = ".navbar-nav", oU = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", lU = hA() ? "top-end" : "top-start", sU = hA() ? "top-start" : "top-end", cU = hA() ? "bottom-end" : "bottom-start", zU = hA() ? "bottom-start" : "bottom-end", YU = hA() ? "left-start" : "right-start", rU = hA() ? "right-start" : "left-start", dU = "top", UU = "bottom", mU = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, OU = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class GA extends VA {
  constructor(A, I) {
    super(A, I), this._popper = null, this._parent = this._element.parentNode, this._menu = cM.next(this._element, UN)[0] || cM.prev(this._element, UN)[0] || cM.findOne(UN, this._parent), this._inNavbar = this._detectNavbar();
  }
  static get Default() {
    return mU;
  }
  static get DefaultType() {
    return OU;
  }
  static get NAME() {
    return nS;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (bI(this._element) || this._isShown())
      return;
    const A = {
      relatedTarget: this._element
    };
    if (!X.trigger(this._element, SU, A).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(nU))
        for (const g of [].concat(...document.body.children))
          X.on(g, "mouseover", AL);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(cg), this._element.classList.add(cg), X.trigger(this._element, iU, A);
    }
  }
  hide() {
    if (bI(this._element) || !this._isShown())
      return;
    const A = {
      relatedTarget: this._element
    };
    this._completeHide(A);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  _completeHide(A) {
    if (!X.trigger(this._element, jU, A).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const g of [].concat(...document.body.children))
          X.off(g, "mouseover", AL);
      this._popper && this._popper.destroy(), this._menu.classList.remove(cg), this._element.classList.remove(cg), this._element.setAttribute("aria-expanded", "false"), uI.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, uU, A);
    }
  }
  _getConfig(A) {
    if (A = super._getConfig(A), typeof A.reference == "object" && !jI(A.reference) && typeof A.reference.getBoundingClientRect != "function")
      throw new TypeError(`${nS.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return A;
  }
  _createPopper() {
    if (typeof uw > "u")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let A = this._element;
    this._config.reference === "parent" ? A = this._parent : jI(this._config.reference) ? A = hI(this._config.reference) : typeof this._config.reference == "object" && (A = this._config.reference);
    const I = this._getPopperConfig();
    this._popper = Su(A, this._menu, I);
  }
  _isShown() {
    return this._menu.classList.contains(cg);
  }
  _getPlacement() {
    const A = this._parent;
    if (A.classList.contains(wU))
      return YU;
    if (A.classList.contains(EU))
      return rU;
    if (A.classList.contains(TU))
      return dU;
    if (A.classList.contains(xU))
      return UU;
    const I = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return A.classList.contains(CU) ? I ? sU : lU : I ? zU : cU;
  }
  _detectNavbar() {
    return this._element.closest(yU) !== null;
  }
  _getOffset() {
    const {
      offset: A
    } = this._config;
    return typeof A == "string" ? A.split(",").map((I) => Number.parseInt(I, 10)) : typeof A == "function" ? (I) => A(I, this._element) : A;
  }
  _getPopperConfig() {
    const A = {
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
    return (this._inNavbar || this._config.display === "static") && (uI.setDataAttribute(this._menu, "popper", "static"), A.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), {
      ...A,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(A) : this._config.popperConfig
    };
  }
  _selectMenuItem({
    key: A,
    target: I
  }) {
    const g = cM.find(oU, this._menu).filter((D) => MD(D));
    !g.length || iu(g, I, A === lS, !g.includes(I)).focus();
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = GA.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
  static clearMenus(A) {
    if (A.button === tU || A.type === "keyup" && A.key !== oS)
      return;
    const I = cM.find(aU);
    for (const g of I) {
      const D = GA.getInstance(g);
      if (!D || D._config.autoClose === !1)
        continue;
      const N = A.composedPath(), L = N.includes(D._menu);
      if (N.includes(D._element) || D._config.autoClose === "inside" && !L || D._config.autoClose === "outside" && L || D._menu.contains(A.target) && (A.type === "keyup" && A.key === oS || /input|select|option|textarea|form/i.test(A.target.tagName)))
        continue;
      const t = {
        relatedTarget: D._element
      };
      A.type === "click" && (t.clickEvent = A), D._completeHide(t);
    }
  }
  static dataApiKeydownHandler(A) {
    const I = /input|textarea/i.test(A.target.tagName), g = A.key === NU, D = [LU, lS].includes(A.key);
    if (!D && !g || I && !g)
      return;
    A.preventDefault();
    const N = this.matches(RI) ? this : cM.prev(this, RI)[0] || cM.next(this, RI)[0] || cM.findOne(RI, A.delegateTarget.parentNode), L = GA.getOrCreateInstance(N);
    if (D) {
      A.stopPropagation(), L.show(), L._selectMenuItem(A);
      return;
    }
    L._isShown() && (A.stopPropagation(), L.hide(), N.focus());
  }
}
X.on(document, dw, RI, GA.dataApiKeydownHandler);
X.on(document, dw, UN, GA.dataApiKeydownHandler);
X.on(document, rw, GA.clearMenus);
X.on(document, eU, GA.clearMenus);
X.on(document, rw, RI, function(M) {
  M.preventDefault(), GA.getOrCreateInstance(this).toggle();
});
WA(GA);
const sS = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cS = ".sticky-top", uN = "padding-right", zS = "margin-right";
class ej {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const A = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - A);
  }
  hide() {
    const A = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, uN, (I) => I + A), this._setElementAttributes(sS, uN, (I) => I + A), this._setElementAttributes(cS, zS, (I) => I - A);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, uN), this._resetElementAttributes(sS, uN), this._resetElementAttributes(cS, zS);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(A, I, g) {
    const D = this.getWidth(), N = (L) => {
      if (L !== this._element && window.innerWidth > L.clientWidth + D)
        return;
      this._saveInitialAttribute(L, I);
      const t = window.getComputedStyle(L).getPropertyValue(I);
      L.style.setProperty(I, `${g(Number.parseFloat(t))}px`);
    };
    this._applyManipulationCallback(A, N);
  }
  _saveInitialAttribute(A, I) {
    const g = A.style.getPropertyValue(I);
    g && uI.setDataAttribute(A, I, g);
  }
  _resetElementAttributes(A, I) {
    const g = (D) => {
      const N = uI.getDataAttribute(D, I);
      if (N === null) {
        D.style.removeProperty(I);
        return;
      }
      uI.removeDataAttribute(D, I), D.style.setProperty(I, N);
    };
    this._applyManipulationCallback(A, g);
  }
  _applyManipulationCallback(A, I) {
    if (jI(A)) {
      I(A);
      return;
    }
    for (const g of cM.find(A, this._element))
      I(g);
  }
}
const Uw = "backdrop", hU = "fade", YS = "show", rS = `mousedown.bs.${Uw}`, bU = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  rootElement: "body"
}, WU = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class mw extends PD {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isAppended = !1, this._element = null;
  }
  static get Default() {
    return bU;
  }
  static get DefaultType() {
    return WU;
  }
  static get NAME() {
    return Uw;
  }
  show(A) {
    if (!this._config.isVisible) {
      II(A);
      return;
    }
    this._append();
    const I = this._getElement();
    this._config.isAnimated && BD(I), I.classList.add(YS), this._emulateAnimation(() => {
      II(A);
    });
  }
  hide(A) {
    if (!this._config.isVisible) {
      II(A);
      return;
    }
    this._getElement().classList.remove(YS), this._emulateAnimation(() => {
      this.dispose(), II(A);
    });
  }
  dispose() {
    !this._isAppended || (X.off(this._element, rS), this._element.remove(), this._isAppended = !1);
  }
  _getElement() {
    if (!this._element) {
      const A = document.createElement("div");
      A.className = this._config.className, this._config.isAnimated && A.classList.add(hU), this._element = A;
    }
    return this._element;
  }
  _configAfterMerge(A) {
    return A.rootElement = hI(A.rootElement), A;
  }
  _append() {
    if (this._isAppended)
      return;
    const A = this._getElement();
    this._config.rootElement.append(A), X.on(A, rS, () => {
      II(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(A) {
    Ew(A, this._getElement(), this._config.isAnimated);
  }
}
const kU = "focustrap", pU = "bs.focustrap", gL = `.${pU}`, QU = `focusin${gL}`, vU = `keydown.tab${gL}`, GU = "Tab", fU = "forward", dS = "backward", JU = {
  autofocus: !0,
  trapElement: null
}, VU = {
  autofocus: "boolean",
  trapElement: "element"
};
class Ow extends PD {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isActive = !1, this._lastTabNavDirection = null;
  }
  static get Default() {
    return JU;
  }
  static get DefaultType() {
    return VU;
  }
  static get NAME() {
    return kU;
  }
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, gL), X.on(document, QU, (A) => this._handleFocusin(A)), X.on(document, vU, (A) => this._handleKeydown(A)), this._isActive = !0);
  }
  deactivate() {
    !this._isActive || (this._isActive = !1, X.off(document, gL));
  }
  _handleFocusin(A) {
    const {
      trapElement: I
    } = this._config;
    if (A.target === document || A.target === I || I.contains(A.target))
      return;
    const g = cM.focusableChildren(I);
    g.length === 0 ? I.focus() : this._lastTabNavDirection === dS ? g[g.length - 1].focus() : g[0].focus();
  }
  _handleKeydown(A) {
    A.key === GU && (this._lastTabNavDirection = A.shiftKey ? dS : fU);
  }
}
const ZU = "modal", BU = "bs.modal", ZA = `.${BU}`, PU = ".data-api", FU = "Escape", XU = `hide${ZA}`, RU = `hidePrevented${ZA}`, hw = `hidden${ZA}`, bw = `show${ZA}`, HU = `shown${ZA}`, _U = `resize${ZA}`, $U = `click.dismiss${ZA}`, qU = `mousedown.dismiss${ZA}`, KU = `keydown.dismiss${ZA}`, M2 = `click${ZA}${PU}`, US = "modal-open", A2 = "fade", mS = "show", Yt = "modal-static", I2 = ".modal.show", g2 = ".modal-dialog", D2 = ".modal-body", N2 = '[data-bs-toggle="modal"]', L2 = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, t2 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Hg extends VA {
  constructor(A, I) {
    super(A, I), this._dialog = cM.findOne(g2, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ej(), this._addEventListeners();
  }
  static get Default() {
    return L2;
  }
  static get DefaultType() {
    return t2;
  }
  static get NAME() {
    return ZU;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    this._isShown || this._isTransitioning || X.trigger(this._element, bw, {
      relatedTarget: A
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(US), this._adjustDialog(), this._backdrop.show(() => this._showElement(A)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, XU).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(mS), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    for (const A of [window, this._dialog])
      X.off(A, ZA);
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new mw({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Ow({
      trapElement: this._element
    });
  }
  _showElement(A) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const I = cM.findOne(D2, this._dialog);
    I && (I.scrollTop = 0), BD(this._element), this._element.classList.add(mS);
    const g = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, HU, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, KU, (A) => {
      if (A.key === FU) {
        if (this._config.keyboard) {
          A.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, _U, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, qU, (A) => {
      X.one(this._element, $U, (I) => {
        if (!(this._element !== A.target || this._element !== I.target)) {
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
      document.body.classList.remove(US), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, hw);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(A2);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, RU).defaultPrevented)
      return;
    const I = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
    g === "hidden" || this._element.classList.contains(Yt) || (I || (this._element.style.overflowY = "hidden"), this._element.classList.add(Yt), this._queueCallback(() => {
      this._element.classList.remove(Yt), this._queueCallback(() => {
        this._element.style.overflowY = g;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  _adjustDialog() {
    const A = this._element.scrollHeight > document.documentElement.clientHeight, I = this._scrollBar.getWidth(), g = I > 0;
    if (g && !A) {
      const D = hA() ? "paddingLeft" : "paddingRight";
      this._element.style[D] = `${I}px`;
    }
    if (!g && A) {
      const D = hA() ? "paddingRight" : "paddingLeft";
      this._element.style[D] = `${I}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  static jQueryInterface(A, I) {
    return this.each(function() {
      const g = Hg.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A](I);
      }
    });
  }
}
X.on(document, M2, N2, function(M) {
  const A = tI(this);
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), X.one(A, bw, (D) => {
    D.defaultPrevented || X.one(A, hw, () => {
      MD(this) && this.focus();
    });
  });
  const I = cM.findOne(I2);
  I && Hg.getInstance(I).hide(), Hg.getOrCreateInstance(A).toggle(this);
});
hL(Hg);
WA(Hg);
const j2 = "offcanvas", u2 = "bs.offcanvas", nI = `.${u2}`, Ww = ".data-api", S2 = `load${nI}${Ww}`, i2 = "Escape", OS = "show", hS = "showing", bS = "hiding", e2 = "offcanvas-backdrop", kw = ".offcanvas.show", C2 = `show${nI}`, w2 = `shown${nI}`, E2 = `hide${nI}`, WS = `hidePrevented${nI}`, pw = `hidden${nI}`, T2 = `resize${nI}`, x2 = `click${nI}${Ww}`, a2 = `keydown.dismiss${nI}`, y2 = '[data-bs-toggle="offcanvas"]', n2 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, o2 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class EI extends VA {
  constructor(A, I) {
    super(A, I), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  static get Default() {
    return n2;
  }
  static get DefaultType() {
    return o2;
  }
  static get NAME() {
    return j2;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    if (this._isShown || X.trigger(this._element, C2, {
      relatedTarget: A
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new ej().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(hS);
    const g = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(OS), this._element.classList.remove(hS), X.trigger(this._element, w2, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, E2).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(bS), this._backdrop.hide();
    const I = () => {
      this._element.classList.remove(OS, bS), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ej().reset(), X.trigger(this._element, pw);
    };
    this._queueCallback(I, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const A = () => {
      if (this._config.backdrop === "static") {
        X.trigger(this._element, WS);
        return;
      }
      this.hide();
    }, I = Boolean(this._config.backdrop);
    return new mw({
      className: e2,
      isVisible: I,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: I ? A : null
    });
  }
  _initializeFocusTrap() {
    return new Ow({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, a2, (A) => {
      if (A.key === i2) {
        if (!this._config.keyboard) {
          X.trigger(this._element, WS);
          return;
        }
        this.hide();
      }
    });
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = EI.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
X.on(document, x2, y2, function(M) {
  const A = tI(this);
  if (["A", "AREA"].includes(this.tagName) && M.preventDefault(), bI(this))
    return;
  X.one(A, pw, () => {
    MD(this) && this.focus();
  });
  const I = cM.findOne(kw);
  I && I !== A && EI.getInstance(I).hide(), EI.getOrCreateInstance(A).toggle(this);
});
X.on(window, S2, () => {
  for (const M of cM.find(kw))
    EI.getOrCreateInstance(M).show();
});
X.on(window, T2, () => {
  for (const M of cM.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(M).position !== "fixed" && EI.getOrCreateInstance(M).hide();
});
hL(EI);
WA(EI);
const l2 = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), s2 = /^aria-[\w-]*$/i, c2 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, z2 = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Y2 = (M, A) => {
  const I = M.nodeName.toLowerCase();
  return A.includes(I) ? l2.has(I) ? Boolean(c2.test(M.nodeValue) || z2.test(M.nodeValue)) : !0 : A.filter((g) => g instanceof RegExp).some((g) => g.test(I));
}, Qw = {
  "*": ["class", "dir", "id", "lang", "role", s2],
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
function r2(M, A, I) {
  if (!M.length)
    return M;
  if (I && typeof I == "function")
    return I(M);
  const D = new window.DOMParser().parseFromString(M, "text/html"), N = [].concat(...D.body.querySelectorAll("*"));
  for (const L of N) {
    const t = L.nodeName.toLowerCase();
    if (!Object.keys(A).includes(t)) {
      L.remove();
      continue;
    }
    const j = [].concat(...L.attributes), S = [].concat(A["*"] || [], A[t] || []);
    for (const u of j)
      Y2(u, S) || L.removeAttribute(u.nodeName);
  }
  return D.body.innerHTML;
}
const d2 = "TemplateFactory", U2 = {
  allowList: Qw,
  content: {},
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, m2 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, O2 = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class h2 extends PD {
  constructor(A) {
    super(), this._config = this._getConfig(A);
  }
  static get Default() {
    return U2;
  }
  static get DefaultType() {
    return m2;
  }
  static get NAME() {
    return d2;
  }
  getContent() {
    return Object.values(this._config.content).map((A) => this._resolvePossibleFunction(A)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(A) {
    return this._checkContent(A), this._config.content = {
      ...this._config.content,
      ...A
    }, this;
  }
  toHtml() {
    const A = document.createElement("div");
    A.innerHTML = this._maybeSanitize(this._config.template);
    for (const [D, N] of Object.entries(this._config.content))
      this._setContent(A, N, D);
    const I = A.children[0], g = this._resolvePossibleFunction(this._config.extraClass);
    return g && I.classList.add(...g.split(" ")), I;
  }
  _typeCheckConfig(A) {
    super._typeCheckConfig(A), this._checkContent(A.content);
  }
  _checkContent(A) {
    for (const [I, g] of Object.entries(A))
      super._typeCheckConfig({
        selector: I,
        entry: g
      }, O2);
  }
  _setContent(A, I, g) {
    const D = cM.findOne(g, A);
    if (!!D) {
      if (I = this._resolvePossibleFunction(I), !I) {
        D.remove();
        return;
      }
      if (jI(I)) {
        this._putElementInTemplate(hI(I), D);
        return;
      }
      if (this._config.html) {
        D.innerHTML = this._maybeSanitize(I);
        return;
      }
      D.textContent = I;
    }
  }
  _maybeSanitize(A) {
    return this._config.sanitize ? r2(A, this._config.allowList, this._config.sanitizeFn) : A;
  }
  _resolvePossibleFunction(A) {
    return typeof A == "function" ? A(this) : A;
  }
  _putElementInTemplate(A, I) {
    if (this._config.html) {
      I.innerHTML = "", I.append(A);
      return;
    }
    I.textContent = A.textContent;
  }
}
const b2 = "tooltip", W2 = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), rt = "fade", k2 = "modal", SN = "show", p2 = ".tooltip-inner", kS = `.${k2}`, pS = "hide.bs.modal", tD = "hover", dt = "focus", Q2 = "click", v2 = "manual", G2 = "hide", f2 = "hidden", J2 = "show", V2 = "shown", Z2 = "inserted", B2 = "click", P2 = "focusin", F2 = "focusout", X2 = "mouseenter", R2 = "mouseleave", H2 = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: hA() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: hA() ? "right" : "left"
}, _2 = {
  allowList: Qw,
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
}, $2 = {
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
class SI extends VA {
  constructor(A, I) {
    if (typeof uw > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(A, I), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  static get Default() {
    return _2;
  }
  static get DefaultType() {
    return $2;
  }
  static get NAME() {
    return b2;
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
    clearTimeout(this._timeout), X.off(this._element.closest(kS), pS, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const A = X.trigger(this._element, this.constructor.eventName(J2)), g = (Cw(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (A.defaultPrevented || !g)
      return;
    this.tip && (this.tip.remove(), this.tip = null);
    const D = this._getTipElement();
    this._element.setAttribute("aria-describedby", D.getAttribute("id"));
    const {
      container: N
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (N.append(D), X.trigger(this._element, this.constructor.eventName(Z2))), this._popper ? this._popper.update() : this._popper = this._createPopper(D), D.classList.add(SN), "ontouchstart" in document.documentElement)
      for (const t of [].concat(...document.body.children))
        X.on(t, "mouseover", AL);
    const L = () => {
      X.trigger(this._element, this.constructor.eventName(V2)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(L, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(G2)).defaultPrevented)
      return;
    const I = this._getTipElement();
    if (I.classList.remove(SN), "ontouchstart" in document.documentElement)
      for (const D of [].concat(...document.body.children))
        X.off(D, "mouseover", AL);
    this._activeTrigger[Q2] = !1, this._activeTrigger[dt] = !1, this._activeTrigger[tD] = !1, this._isHovered = null;
    const g = () => {
      this._isWithActiveTrigger() || (this._isHovered || I.remove(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(f2)), this._disposePopper());
    };
    this._queueCallback(g, this.tip, this._isAnimated());
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
  _createTipElement(A) {
    const I = this._getTemplateFactory(A).toHtml();
    if (!I)
      return null;
    I.classList.remove(rt, SN), I.classList.add(`bs-${this.constructor.NAME}-auto`);
    const g = pr(this.constructor.NAME).toString();
    return I.setAttribute("id", g), this._isAnimated() && I.classList.add(rt), I;
  }
  setContent(A) {
    this._newContent = A, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(A) {
    return this._templateFactory ? this._templateFactory.changeContent(A) : this._templateFactory = new h2({
      ...this._config,
      content: A,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [p2]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  _initializeOnDelegatedTarget(A) {
    return this.constructor.getOrCreateInstance(A.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(rt);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(SN);
  }
  _createPopper(A) {
    const I = typeof this._config.placement == "function" ? this._config.placement.call(this, A, this._element) : this._config.placement, g = H2[I.toUpperCase()];
    return Su(this._element, A, this._getPopperConfig(g));
  }
  _getOffset() {
    const {
      offset: A
    } = this._config;
    return typeof A == "string" ? A.split(",").map((I) => Number.parseInt(I, 10)) : typeof A == "function" ? (I) => A(I, this._element) : A;
  }
  _resolvePossibleFunction(A) {
    return typeof A == "function" ? A.call(this._element) : A;
  }
  _getPopperConfig(A) {
    const I = {
      placement: A,
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
        fn: (g) => {
          this._getTipElement().setAttribute("data-popper-placement", g.state.placement);
        }
      }]
    };
    return {
      ...I,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(I) : this._config.popperConfig
    };
  }
  _setListeners() {
    const A = this._config.trigger.split(" ");
    for (const I of A)
      if (I === "click")
        X.on(this._element, this.constructor.eventName(B2), this._config.selector, (g) => {
          this._initializeOnDelegatedTarget(g).toggle();
        });
      else if (I !== v2) {
        const g = I === tD ? this.constructor.eventName(X2) : this.constructor.eventName(P2), D = I === tD ? this.constructor.eventName(R2) : this.constructor.eventName(F2);
        X.on(this._element, g, this._config.selector, (N) => {
          const L = this._initializeOnDelegatedTarget(N);
          L._activeTrigger[N.type === "focusin" ? dt : tD] = !0, L._enter();
        }), X.on(this._element, D, this._config.selector, (N) => {
          const L = this._initializeOnDelegatedTarget(N);
          L._activeTrigger[N.type === "focusout" ? dt : tD] = L._element.contains(N.relatedTarget), L._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, X.on(this._element.closest(kS), pS, this._hideModalHandler);
  }
  _fixTitle() {
    const A = this._element.getAttribute("title");
    !A || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", A), this._element.setAttribute("data-bs-original-title", A), this._element.removeAttribute("title"));
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
  _setTimeout(A, I) {
    clearTimeout(this._timeout), this._timeout = setTimeout(A, I);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(A) {
    const I = uI.getDataAttributes(this._element);
    for (const g of Object.keys(I))
      W2.has(g) && delete I[g];
    return A = {
      ...I,
      ...typeof A == "object" && A ? A : {}
    }, A = this._mergeConfigObj(A), A = this._configAfterMerge(A), this._typeCheckConfig(A), A;
  }
  _configAfterMerge(A) {
    return A.container = A.container === !1 ? document.body : hI(A.container), typeof A.delay == "number" && (A.delay = {
      show: A.delay,
      hide: A.delay
    }), typeof A.title == "number" && (A.title = A.title.toString()), typeof A.content == "number" && (A.content = A.content.toString()), A;
  }
  _getDelegateConfig() {
    const A = {};
    for (const I in this._config)
      this.constructor.Default[I] !== this._config[I] && (A[I] = this._config[I]);
    return A.selector = !1, A.trigger = "manual", A;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = SI.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
WA(SI);
const q2 = "popover", K2 = ".popover-header", Mm = ".popover-body", Am = {
  ...SI.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Im = {
  ...SI.DefaultType,
  content: "(null|string|element|function)"
};
class _g extends SI {
  static get Default() {
    return Am;
  }
  static get DefaultType() {
    return Im;
  }
  static get NAME() {
    return q2;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return {
      [K2]: this._getTitle(),
      [Mm]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = _g.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
WA(_g);
const gm = "scrollspy", Dm = "bs.scrollspy", wu = `.${Dm}`, Nm = ".data-api", Lm = `activate${wu}`, QS = `click${wu}`, tm = `load${wu}${Nm}`, jm = "dropdown-item", Tg = "active", um = '[data-bs-spy="scroll"]', Ut = "[href]", Sm = ".nav, .list-group", vS = ".nav-link", im = ".nav-item", em = ".list-group-item", Cm = `${vS}, ${im} > ${vS}, ${em}`, wm = ".dropdown", Em = ".dropdown-toggle", Tm = {
  offset: null,
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, xm = {
  offset: "(number|null)",
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class WL extends VA {
  constructor(A, I) {
    super(A, I), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  static get Default() {
    return Tm;
  }
  static get DefaultType() {
    return xm;
  }
  static get NAME() {
    return gm;
  }
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const A of this._observableSections.values())
      this._observer.observe(A);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(A) {
    return A.target = hI(A.target) || document.body, A.rootMargin = A.offset ? `${A.offset}px 0px -30%` : A.rootMargin, typeof A.threshold == "string" && (A.threshold = A.threshold.split(",").map((I) => Number.parseFloat(I))), A;
  }
  _maybeEnableSmoothScroll() {
    !this._config.smoothScroll || (X.off(this._config.target, QS), X.on(this._config.target, QS, Ut, (A) => {
      const I = this._observableSections.get(A.target.hash);
      if (I) {
        A.preventDefault();
        const g = this._rootElement || window, D = I.offsetTop - this._element.offsetTop;
        if (g.scrollTo) {
          g.scrollTo({
            top: D,
            behavior: "smooth"
          });
          return;
        }
        g.scrollTop = D;
      }
    }));
  }
  _getNewObserver() {
    const A = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((I) => this._observerCallback(I), A);
  }
  _observerCallback(A) {
    const I = (L) => this._targetLinks.get(`#${L.target.id}`), g = (L) => {
      this._previousScrollData.visibleEntryTop = L.target.offsetTop, this._process(I(L));
    }, D = (this._rootElement || document.documentElement).scrollTop, N = D >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = D;
    for (const L of A) {
      if (!L.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(I(L));
        continue;
      }
      const t = L.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (N && t) {
        if (g(L), !D)
          return;
        continue;
      }
      !N && !t && g(L);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const A = cM.find(Ut, this._config.target);
    for (const I of A) {
      if (!I.hash || bI(I))
        continue;
      const g = cM.findOne(I.hash, this._element);
      MD(g) && (this._targetLinks.set(I.hash, I), this._observableSections.set(I.hash, g));
    }
  }
  _process(A) {
    this._activeTarget !== A && (this._clearActiveClass(this._config.target), this._activeTarget = A, A.classList.add(Tg), this._activateParents(A), X.trigger(this._element, Lm, {
      relatedTarget: A
    }));
  }
  _activateParents(A) {
    if (A.classList.contains(jm)) {
      cM.findOne(Em, A.closest(wm)).classList.add(Tg);
      return;
    }
    for (const I of cM.parents(A, Sm))
      for (const g of cM.prev(I, Cm))
        g.classList.add(Tg);
  }
  _clearActiveClass(A) {
    A.classList.remove(Tg);
    const I = cM.find(`${Ut}.${Tg}`, A);
    for (const g of I)
      g.classList.remove(Tg);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = WL.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(window, tm, () => {
  for (const M of cM.find(um))
    WL.getOrCreateInstance(M);
});
WA(WL);
const am = "tab", ym = "bs.tab", ug = `.${ym}`, nm = `hide${ug}`, om = `hidden${ug}`, lm = `show${ug}`, sm = `shown${ug}`, cm = `click${ug}`, zm = `keydown${ug}`, Ym = `load${ug}`, rm = "ArrowLeft", GS = "ArrowRight", dm = "ArrowUp", fS = "ArrowDown", HI = "active", JS = "fade", mt = "show", Um = "dropdown", mm = ".dropdown-toggle", Om = ".dropdown-menu", Ot = ":not(.dropdown-toggle)", hm = '.list-group, .nav, [role="tablist"]', bm = ".nav-item, .list-group-item", Wm = `.nav-link${Ot}, .list-group-item${Ot}, [role="tab"]${Ot}`, vw = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ht = `${Wm}, ${vw}`, km = `.${HI}[data-bs-toggle="tab"], .${HI}[data-bs-toggle="pill"], .${HI}[data-bs-toggle="list"]`;
class $g extends VA {
  constructor(A) {
    super(A), this._parent = this._element.closest(hm), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, zm, (I) => this._keydown(I)));
  }
  static get NAME() {
    return am;
  }
  show() {
    const A = this._element;
    if (this._elemIsActive(A))
      return;
    const I = this._getActiveElem(), g = I ? X.trigger(I, nm, {
      relatedTarget: A
    }) : null;
    X.trigger(A, lm, {
      relatedTarget: I
    }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(I, A), this._activate(A, I));
  }
  _activate(A, I) {
    if (!A)
      return;
    A.classList.add(HI), this._activate(tI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.add(mt);
        return;
      }
      A.removeAttribute("tabindex"), A.setAttribute("aria-selected", !0), this._toggleDropDown(A, !0), X.trigger(A, sm, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(JS));
  }
  _deactivate(A, I) {
    if (!A)
      return;
    A.classList.remove(HI), A.blur(), this._deactivate(tI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.remove(mt);
        return;
      }
      A.setAttribute("aria-selected", !1), A.setAttribute("tabindex", "-1"), this._toggleDropDown(A, !1), X.trigger(A, om, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(JS));
  }
  _keydown(A) {
    if (![rm, GS, dm, fS].includes(A.key))
      return;
    A.stopPropagation(), A.preventDefault();
    const I = [GS, fS].includes(A.key), g = iu(this._getChildren().filter((D) => !bI(D)), A.target, I, !0);
    g && (g.focus({
      preventScroll: !0
    }), $g.getOrCreateInstance(g).show());
  }
  _getChildren() {
    return cM.find(ht, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((A) => this._elemIsActive(A)) || null;
  }
  _setInitialAttributes(A, I) {
    this._setAttributeIfNotExists(A, "role", "tablist");
    for (const g of I)
      this._setInitialAttributesOnChild(g);
  }
  _setInitialAttributesOnChild(A) {
    A = this._getInnerElement(A);
    const I = this._elemIsActive(A), g = this._getOuterElement(A);
    A.setAttribute("aria-selected", I), g !== A && this._setAttributeIfNotExists(g, "role", "presentation"), I || A.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(A, "role", "tab"), this._setInitialAttributesOnTargetPanel(A);
  }
  _setInitialAttributesOnTargetPanel(A) {
    const I = tI(A);
    !I || (this._setAttributeIfNotExists(I, "role", "tabpanel"), A.id && this._setAttributeIfNotExists(I, "aria-labelledby", `#${A.id}`));
  }
  _toggleDropDown(A, I) {
    const g = this._getOuterElement(A);
    if (!g.classList.contains(Um))
      return;
    const D = (N, L) => {
      const t = cM.findOne(N, g);
      t && t.classList.toggle(L, I);
    };
    D(mm, HI), D(Om, mt), g.setAttribute("aria-expanded", I);
  }
  _setAttributeIfNotExists(A, I, g) {
    A.hasAttribute(I) || A.setAttribute(I, g);
  }
  _elemIsActive(A) {
    return A.classList.contains(HI);
  }
  _getInnerElement(A) {
    return A.matches(ht) ? A : cM.findOne(ht, A);
  }
  _getOuterElement(A) {
    return A.closest(bm) || A;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = $g.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(document, cm, vw, function(M) {
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), !bI(this) && $g.getOrCreateInstance(this).show();
});
X.on(window, Ym, () => {
  for (const M of cM.find(km))
    $g.getOrCreateInstance(M);
});
WA($g);
const pm = "toast", Qm = "bs.toast", GI = `.${Qm}`, vm = `mouseover${GI}`, Gm = `mouseout${GI}`, fm = `focusin${GI}`, Jm = `focusout${GI}`, Vm = `hide${GI}`, Zm = `hidden${GI}`, Bm = `show${GI}`, Pm = `shown${GI}`, Fm = "fade", VS = "hide", iN = "show", eN = "showing", Xm = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Rm = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class kL extends VA {
  constructor(A, I) {
    super(A, I), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  static get Default() {
    return Rm;
  }
  static get DefaultType() {
    return Xm;
  }
  static get NAME() {
    return pm;
  }
  show() {
    if (X.trigger(this._element, Bm).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(Fm);
    const I = () => {
      this._element.classList.remove(eN), X.trigger(this._element, Pm), this._maybeScheduleHide();
    };
    this._element.classList.remove(VS), BD(this._element), this._element.classList.add(iN, eN), this._queueCallback(I, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, Vm).defaultPrevented)
      return;
    const I = () => {
      this._element.classList.add(VS), this._element.classList.remove(eN, iN), X.trigger(this._element, Zm);
    };
    this._element.classList.add(eN), this._queueCallback(I, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(iN), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(iN);
  }
  _maybeScheduleHide() {
    !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay));
  }
  _onInteraction(A, I) {
    switch (A.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = I;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = I;
        break;
      }
    }
    if (I) {
      this._clearTimeout();
      return;
    }
    const g = A.relatedTarget;
    this._element === g || this._element.contains(g) || this._maybeScheduleHide();
  }
  _setListeners() {
    X.on(this._element, vm, (A) => this._onInteraction(A, !0)), X.on(this._element, Gm, (A) => this._onInteraction(A, !1)), X.on(this._element, fm, (A) => this._onInteraction(A, !0)), X.on(this._element, Jm, (A) => this._onInteraction(A, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = kL.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
hL(kL);
WA(kL);
const Gw = /* @__PURE__ */ v({
  __name: "BCollapse",
  props: {
    accordion: null,
    id: { default: gI() },
    modelValue: { default: !1 },
    tag: { default: "div" },
    toggle: { default: !1 },
    visible: { default: !1 },
    isNav: { default: !1 }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "modelValue")), D = c(o(I, "toggle")), N = c(o(I, "visible")), L = c(o(I, "isNav")), t = DM(), j = DM(), S = y(() => ({
      show: g.value,
      "navbar-collapse": L.value
    })), u = () => A("update:modelValue", !1);
    return mM(
      () => g.value,
      (i) => {
        var C, w;
        i ? (C = j.value) == null || C.show() : (w = j.value) == null || w.hide();
      }
    ), mM(
      () => N.value,
      (i) => {
        var C, w;
        i ? (A("update:modelValue", !!i), (C = j.value) == null || C.show()) : (A("update:modelValue", !!i), (w = j.value) == null || w.hide());
      }
    ), MA(t, "show.bs.collapse", () => {
      A("show"), A("update:modelValue", !0);
    }), MA(t, "hide.bs.collapse", () => {
      A("hide"), A("update:modelValue", !1);
    }), MA(t, "shown.bs.collapse", () => A("shown")), MA(t, "hidden.bs.collapse", () => A("hidden")), _M(() => {
      var i;
      j.value = new Rg(t.value, {
        parent: I.accordion ? `#${I.accordion}` : void 0,
        toggle: D.value
      }), (N.value || g.value) && (A("update:modelValue", !0), (i = j.value) == null || i.show());
    }), (i, C) => (T(), Z(EM(M.tag), {
      id: M.id,
      ref_key: "element",
      ref: t,
      class: F(["collapse", e(S)]),
      "data-bs-parent": M.accordion || null,
      "is-nav": e(L)
    }, {
      default: h(() => [
        Q(i.$slots, "default", {
          visible: e(g),
          close: u
        })
      ]),
      _: 3
    }, 8, ["id", "class", "data-bs-parent", "is-nav"]));
  }
}), Hm = {
  mounted(M, A) {
    let I = A.value;
    Object.keys(A.modifiers).length > 0 && ([I] = Object.keys(A.modifiers)), M.setAttribute("data-bs-toggle", "modal"), M.setAttribute("data-bs-target", `#${I}`);
  }
}, _m = {
  mounted(M, A) {
    let I = "right";
    const g = [];
    A.modifiers.left ? I = "left" : A.modifiers.right ? I = "right" : A.modifiers.bottom ? I = "bottom" : A.modifiers.top && (I = "top"), A.modifiers.manual ? g.push("manual") : (A.modifiers.click && g.push("click"), A.modifiers.hover && g.push("hover"), A.modifiers.focus && g.push("focus")), M.setAttribute("data-bs-toggle", "popover"), new _g(M, {
      trigger: g.length === 0 ? "click" : g.join(" "),
      placement: I,
      content: A.value
    });
  },
  unmounted(M) {
    const A = _g.getInstance(M);
    A == null || A.dispose();
  }
}, $m = (M) => {
  if (M.classList.contains("offcanvas"))
    return "offcanvas";
  if (M.classList.contains("collapse"))
    return "collapse";
  throw Error("Couldn't resolve toggle type");
}, qm = (M, A) => {
  const { modifiers: I, arg: g, value: D } = M, N = Object.keys(I || {}), L = typeof D == "string" ? D.split(YN) : D;
  if (fY(A.tagName, "a")) {
    const t = Hj(A, "href") || "";
    lY.test(t) && N.push(t.replace(oY, ""));
  }
  return Array.prototype.concat.apply([], [g, L]).forEach((t) => typeof t == "string" && N.push(t)), N.filter((t, j, S) => t && S.indexOf(t) === j);
}, Eu = {
  mounted(M, A) {
    const I = qm(A, M), g = [];
    let D = "data-bs-target";
    M.tagName === "a" && (D = "href");
    for (let N = 0; N < I.length; N++) {
      const L = I[N], t = document.getElementById(L);
      t && (M.setAttribute("data-bs-toggle", $m(t)), g.push(`#${L}`));
    }
    g.length > 0 && M.setAttribute(D, g.join(","));
  }
}, Km = (M, A) => {
  if (A != null && A.trigger)
    return A.trigger;
  if (M.manual)
    return "manual";
  const I = [];
  return M.click && I.push("click"), M.hover && I.push("hover"), M.focus && I.push("focus"), I.length > 0 ? I.join(" ") : "hover focus";
}, MO = (M, A) => A != null && A.placement ? A.placement : M.left ? "left" : M.right ? "right" : M.bottom ? "bottom" : "top", AO = (M) => M != null && M.delay ? M.delay : 0, ZS = (M) => typeof M == "object" ? M == null ? void 0 : M.title : M, IO = {
  beforeMount(M, A) {
    M.setAttribute("data-bs-toggle", "tooltip"), M.getAttribute("title") || M.setAttribute("title", ZS(A.value).toString());
    const I = /<("[^"]*"|'[^']*'|[^'">])*>/.test(M.title), g = Km(A.modifiers, A.value), D = MO(A.modifiers, A.value), N = AO(A.value), L = M.getAttribute("title");
    new SI(M, {
      trigger: g,
      placement: D,
      delay: N,
      html: I
    }), L && M.setAttribute("data-bs-original-title", L);
  },
  updated(M, A) {
    M.getAttribute("title") || M.setAttribute("title", ZS(A.value).toString());
    const I = M.getAttribute("title"), g = M.getAttribute("data-bs-original-title"), D = SI.getInstance(M);
    M.removeAttribute("title"), I && I !== g && (D == null || D.setContent({ ".tooltip-inner": I }), M.setAttribute("data-bs-original-title", I));
  },
  unmounted(M) {
    const A = SI.getInstance(M);
    A == null || A.dispose();
  }
}, mN = /* @__PURE__ */ new Map(), fw = (M) => {
  if (mN.has(M)) {
    const A = mN.get(M);
    A && A.stop && A.stop(), mN.delete(M);
  }
}, BS = (M, A) => {
  const I = {
    margin: "0px",
    once: !1,
    callback: A.value
  };
  Object.keys(A.modifiers).forEach((D) => {
    Number.isInteger(D) ? I.margin = `${D}px` : D.toLowerCase() === "once" && (I.once = !0);
  }), fw(M);
  const g = new DO(
    M,
    I.margin,
    I.once,
    I.callback,
    A.instance
  );
  mN.set(M, g);
}, gO = {
  beforeMount(M, A) {
    BS(M, A);
  },
  updated(M, A) {
    BS(M, A);
  },
  unmounted(M) {
    fw(M);
  }
};
class DO {
  constructor(A, I, g, D, N) {
    PM(this, "element");
    PM(this, "margin");
    PM(this, "once");
    PM(this, "callback");
    PM(this, "instance");
    PM(this, "observer");
    PM(this, "doneOnce");
    PM(this, "visible");
    this.element = A, this.margin = I, this.once = g, this.callback = D, this.instance = N, this.createObserver();
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
  handler(A) {
    const [I] = A, g = Boolean(I.isIntersecting || I.intersectionRatio > 0);
    g !== this.visible && (this.visible = g, this.callback(g), this.once && this.visible && (this.doneOnce = !0, this.stop()));
  }
  stop() {
    this.observer && this.observer.disconnect(), this.observer = null;
  }
}
const NO = {
  mounted(M, A) {
    A.value !== !1 && M.focus();
  }
}, LO = {
  BModal: Hm,
  BPopover: _m,
  BToggle: Eu,
  BTooltip: IO,
  BVisible: gO,
  focus: NO
}, tO = { class: "accordion-item" }, jO = ["id"], uO = ["aria-expanded", "aria-controls"], SO = { class: "accordion-body" }, iO = /* @__PURE__ */ v({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { default: !1 }
  },
  setup(M) {
    const A = M, I = tA(vC, ""), g = NA(o(A, "id"), "accordion_item"), D = c(o(A, "visible"));
    return (N, L) => (T(), s("div", tO, [
      l("h2", {
        id: `${e(g)}heading`,
        class: "accordion-header"
      }, [
        VM((T(), s("button", {
          class: F(["accordion-button", { collapsed: !e(D) }]),
          type: "button",
          "aria-expanded": e(D) ? "true" : "false",
          "aria-controls": e(g)
        }, [
          Q(N.$slots, "title", {}, () => [
            IM(P(M.title), 1)
          ])
        ], 10, uO)), [
          [e(Eu), void 0, e(g)]
        ])
      ], 8, jO),
      W(Gw, {
        id: e(g),
        class: "accordion-collapse",
        visible: M.visible,
        accordion: e(I),
        "aria-labelledby": `heading${e(g)}`
      }, {
        default: h(() => [
          l("div", SO, [
            Q(N.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["id", "visible", "accordion", "aria-labelledby"])
    ]));
  }
}), eO = ["type", "disabled", "aria-label"], gD = /* @__PURE__ */ v({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { default: !1 },
    white: { default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "disabled")), D = c(o(I, "white")), N = y(() => ({
      "btn-close-white": D.value
    }));
    return (L, t) => (T(), s("button", {
      type: M.type,
      class: F(["btn-close", e(N)]),
      disabled: e(g),
      "aria-label": M.ariaLabel,
      onClick: t[0] || (t[0] = (j) => A("click", j))
    }, null, 10, eO));
  }
}), CO = /* @__PURE__ */ v({
  __name: "BAlert",
  props: {
    dismissLabel: { default: "Close" },
    dismissible: { default: !1 },
    fade: { default: !1 },
    modelValue: { type: [Boolean, Number], default: !1 },
    show: { default: !1 },
    variant: { default: "info" }
  },
  emits: ["closed", "close-count-down", "update:modelValue"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "dismissible"));
    c(o(I, "fade"));
    const D = c(o(I, "show")), N = jA();
    let L;
    const t = DM(null), j = DM(), S = y(() => !lA(N.close)), u = y(() => !!I.modelValue || D.value), i = y(() => [
      [`alert-${I.variant}`],
      {
        show: !!I.modelValue,
        "alert-dismissible": g.value,
        fade: !!I.modelValue
      }
    ]), C = (z) => {
      if (typeof z == "boolean")
        return 0;
      const d = Vg(z, 0);
      return d > 0 ? d : 0;
    }, w = DM(C(I.modelValue)), E = y(() => I.modelValue === !0 ? !0 : I.modelValue === !1 || Vg(I.modelValue, 0) < 1 ? !1 : !!I.modelValue), x = () => {
      L !== void 0 && (clearTimeout(L), L = void 0);
    }, n = () => {
      w.value = C(I.modelValue), (E.value || D.value) && !j.value && (j.value = new FD(t.value));
    }, a = () => {
      typeof I.modelValue == "boolean" ? A("update:modelValue", !1) : A("update:modelValue", 0), A("closed");
    };
    return mM(() => I.modelValue, n), mM(() => D.value, n), mM(w, (z) => {
      x(), typeof I.modelValue != "boolean" && (A("close-count-down", z), z === 0 && I.modelValue > 0 && A("closed"), I.modelValue !== z && A("update:modelValue", z), z > 0 && (L = setTimeout(() => {
        w.value--;
      }, 1e3)));
    }), aj(() => {
      var z;
      x(), (z = j.value) == null || z.dispose(), j.value = void 0;
    }), (z, d) => e(u) ? (T(), s("div", {
      key: 0,
      ref_key: "element",
      ref: t,
      class: F(["alert", e(i)]),
      role: "alert"
    }, [
      Q(z.$slots, "default"),
      e(g) ? (T(), s(MM, { key: 0 }, [
        e(S) ? (T(), s("button", {
          key: 0,
          type: "button",
          "data-bs-dismiss": "alert",
          onClick: a
        }, [
          Q(z.$slots, "close")
        ])) : (T(), Z(gD, {
          key: 1,
          "aria-label": M.dismissLabel,
          "data-bs-dismiss": "alert",
          onClick: a
        }, null, 8, ["aria-label"]))
      ], 64)) : B("", !0)
    ], 2)) : B("", !0);
  }
}), Jw = Symbol(), wO = /* @__PURE__ */ v({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    rounded: { type: [Boolean, String], default: !1 },
    size: null,
    square: { default: !1 },
    tag: { default: "div" },
    variant: null
  },
  setup(M) {
    const A = M, I = c(o(A, "square")), g = y(() => Cj(A.size)), D = y(
      () => Math.min(Math.max(L(A.overlap), 0), 1) / 2
    ), N = y(() => {
      const t = g.value ? `calc(${g.value} * ${D.value})` : null;
      return t ? { paddingLeft: t, paddingRight: t } : {};
    }), L = (t) => typeof t == "string" && wC(t) ? YC(t, 0) : t || 0;
    return NI(Jw, {
      overlapScale: D,
      size: A.size,
      square: I.value,
      rounded: A.rounded,
      variant: A.variant
    }), (t, j) => (T(), Z(EM(M.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: h(() => [
        l("div", {
          class: "b-avatar-group-inner",
          style: QA(e(N))
        }, [
          Q(t.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), EO = {
  key: 0,
  class: "b-avatar-custom"
}, TO = {
  key: 1,
  class: "b-avatar-img"
}, xO = ["src", "alt"], Cj = (M) => {
  const A = typeof M == "string" && wC(M) ? YC(M, 0) : M;
  return typeof A == "number" ? `${A}px` : A || null;
}, aO = /* @__PURE__ */ v({
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
    textVariant: null,
    variant: { default: "secondary" }
  },
  emits: ["click", "img-error"],
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = tA(Jw, null), N = ["sm", null, "lg"], L = 0.4, t = L * 0.7, j = c(o(I, "badgeLeft")), S = c(o(I, "badgeTop")), u = c(o(I, "button")), i = c(o(I, "disabled")), C = c(o(I, "square")), w = y(() => !lA(g.default)), E = y(() => !lA(g.badge)), x = y(() => !!I.badge || I.badge === "" || E.value), n = y(
      () => D != null && D.size ? D.size : Cj(I.size)
    ), a = y(
      () => D != null && D.variant ? D.variant : I.variant
    ), z = y(
      () => D != null && D.rounded ? D.rounded : I.rounded
    ), d = y(() => ({
      type: u.value ? I.buttonType : void 0,
      "aria-label": I.ariaLabel || null,
      disabled: i.value || null
    })), Y = y(() => [`bg-${I.badgeVariant}`]), U = y(() => I.badge === !0 ? "" : I.badge), k = y(() => [[`text-${gM(I.badgeVariant)}`]]), G = y(() => ({
      [`b-avatar-${I.size}`]: !!I.size && N.indexOf(Cj(I.size)) !== -1,
      [`bg-${a.value}`]: !!a.value,
      badge: !u.value && a.value && w.value,
      rounded: z.value === "" || z.value === !0,
      ["rounded-circle"]: !C.value && z.value === "circle",
      ["rounded-0"]: C.value || z.value === "0",
      ["rounded-1"]: !C.value && z.value === "sm",
      ["rounded-3"]: !C.value && z.value === "lg",
      ["rounded-top"]: !C.value && z.value === "top",
      ["rounded-bottom"]: !C.value && z.value === "bottom",
      ["rounded-start"]: !C.value && z.value === "left",
      ["rounded-end"]: !C.value && z.value === "right",
      btn: u.value,
      [`btn-${a.value}`]: u.value ? !!a.value : !1
    })), r = y(() => [
      [`text-${I.textVariant || gM(a.value)}`]
    ]), b = y(() => {
      const tM = I.badgeOffset || "0px";
      return {
        fontSize: (N.indexOf(n.value || null) === -1 ? `calc(${n.value} * ${t})` : "") || "",
        top: S.value ? tM : "",
        bottom: S.value ? "" : tM,
        left: j.value ? tM : "",
        right: j.value ? "" : tM
      };
    }), V = y(() => {
      const tM = N.indexOf(n.value || null) === -1 ? `calc(${n.value} * ${L})` : null;
      return tM ? { fontSize: tM } : {};
    }), R = y(() => {
      var dM;
      const tM = ((dM = D == null ? void 0 : D.overlapScale) == null ? void 0 : dM.value) || 0, CM = n.value && tM ? `calc(${n.value} * -${tM})` : null;
      return CM ? { marginLeft: CM, marginRight: CM } : {};
    }), AM = y(() => u.value ? "button" : "span"), LM = y(() => ({
      ...R.value,
      width: n.value,
      height: n.value
    })), gM = (tM) => tM === "light" || tM === "warning" ? "dark" : "light", oM = (tM) => {
      !i.value && u.value && A("click", tM);
    }, SM = (tM) => A("img-error", tM);
    return (tM, CM) => (T(), Z(EM(e(AM)), wM({
      class: ["b-avatar", e(G)],
      style: e(LM)
    }, e(d), { onClick: oM }), {
      default: h(() => [
        e(w) ? (T(), s("span", EO, [
          Q(tM.$slots, "default")
        ])) : M.src ? (T(), s("span", TO, [
          l("img", {
            src: M.src,
            alt: M.alt,
            onError: SM
          }, null, 40, xO)
        ])) : M.text ? (T(), s("span", {
          key: 2,
          class: F(["b-avatar-text", e(r)]),
          style: QA(e(V))
        }, P(M.text), 7)) : B("", !0),
        e(x) ? (T(), s("span", {
          key: 3,
          class: F(["b-avatar-badge", e(Y)]),
          style: QA(e(b))
        }, [
          e(E) ? Q(tM.$slots, "badge", { key: 0 }) : (T(), s("span", {
            key: 1,
            class: F(e(k))
          }, P(e(U)), 3))
        ], 6)) : B("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), Sg = {
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
}, yO = v({
  props: Sg,
  emits: ["click"],
  setup(M, { emit: A, attrs: I }) {
    const g = c(o(M, "active")), D = c(o(M, "append")), N = c(o(M, "disabled")), L = c(o(M, "exact")), t = c(o(M, "replace")), j = nE(), S = DM(null), u = y(() => {
      const x = M.routerComponentName.split("-").map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return !((j == null ? void 0 : j.appContext.app.component(x)) !== void 0) || N.value || !M.to ? "a" : M.routerComponentName;
    }), i = y(() => {
      const x = "#";
      if (M.href)
        return M.href;
      if (typeof M.to == "string")
        return M.to || x;
      const n = M.to;
      if (Object.prototype.toString.call(n) === "[object Object]" && (n.path || n.query || n.hash)) {
        const a = n.path || "", z = n.query ? `?${Object.keys(n.query).map((Y) => `${Y}=${n.query[Y]}`).join("=")}` : "", d = !n.hash || n.hash.charAt(0) === "#" ? n.hash || "" : `#${n.hash}`;
        return `${a}${z}${d}` || x;
      }
      return x;
    }), C = y(() => ({
      to: M.to,
      href: i.value,
      target: M.target,
      rel: M.target === "_blank" && M.rel === null ? "noopener" : M.rel || null,
      tabindex: N.value ? "-1" : typeof I.tabindex > "u" ? null : I.tabindex,
      "aria-disabled": N.value ? "true" : null
    }));
    return {
      computedLinkClasses: y(() => ({
        active: g.value,
        disabled: N.value
      })),
      tag: u,
      routerAttr: C,
      link: S,
      clicked: (x) => {
        if (N.value) {
          x.preventDefault(), x.stopImmediatePropagation();
          return;
        }
        A("click", x);
      },
      activeBoolean: g,
      appendBoolean: D,
      disabledBoolean: N,
      replaceBoolean: t,
      exactBoolean: L
    };
  }
});
function nO(M, A, I, g, D, N) {
  return M.tag === "router-link" ? (T(), Z(EM(M.tag), wM({ key: 0 }, M.routerAttr, { custom: "" }), {
    default: h(({ href: L, navigate: t, isActive: j, isExactActive: S }) => [
      (T(), Z(EM(M.routerTag), wM({
        ref: "link",
        href: L,
        class: [
          (j || M.activeBoolean) && M.activeClass,
          (S || M.exactBoolean) && M.exactActiveClass
        ]
      }, M.$attrs, { onClick: t }), {
        default: h(() => [
          Q(M.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (T(), Z(EM(M.tag), wM({
    key: 1,
    ref: "link",
    class: M.computedLinkClasses
  }, M.routerAttr, { onClick: M.clicked }), {
    default: h(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const zA = /* @__PURE__ */ FM(yO, [["render", nO]]), PS = sL(Sg, ["event", "routerTag"]), oO = v({
  components: { BLink: zA },
  props: {
    pill: { type: [Boolean, String], default: !1 },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: [Boolean, String], default: !1 },
    dotIndicator: { type: [Boolean, String], default: !1 },
    ...PS
  },
  setup(M) {
    const A = c(o(M, "pill")), I = c(o(M, "textIndicator")), g = c(o(M, "dotIndicator")), D = c(o(M, "active")), N = c(o(M, "disabled")), L = y(() => WD(M)), t = y(
      () => L.value ? zA : M.tag
    ), j = y(() => [
      [`bg-${M.variant}`],
      {
        active: D.value,
        disabled: N.value,
        "text-dark": ["warning", "info", "light"].includes(M.variant),
        "rounded-pill": A.value,
        "position-absolute top-0 start-100 translate-middle": I.value || g.value,
        "p-2 border border-light rounded-circle": g.value,
        "text-decoration-none": L.value
      }
    ]), S = y(
      () => L.value ? _j(M, PS) : {}
    );
    return {
      computedClasses: j,
      computedLinkProps: S,
      computedTag: t
    };
  }
});
function lO(M, A, I, g, D, N) {
  return T(), Z(EM(M.computedTag), wM({
    class: ["badge", M.computedClasses]
  }, M.computedLinkProps), {
    default: h(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const sO = /* @__PURE__ */ FM(oO, [["render", lO]]), FS = sL(Sg, ["event", "routerTag"]), cO = v({
  components: { BLink: zA },
  props: {
    ...FS,
    active: { type: [Boolean, String], default: !1 },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: [Boolean, String], default: !1 },
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = c(o(M, "active")), g = c(o(M, "disabled")), D = y(() => ({
      active: I.value
    })), N = y(
      () => I.value ? "span" : zA
    ), L = y(
      () => I.value ? M.ariaCurrent : void 0
    );
    return {
      computedLinkProps: y(
        () => N.value !== "span" ? _j(M, FS) : {}
      ),
      computedClasses: D,
      computedTag: N,
      computedAriaCurrent: L,
      clicked: (S) => {
        if (g.value || I.value) {
          S.preventDefault(), S.stopImmediatePropagation();
          return;
        }
        g.value || A("click", S);
      }
    };
  }
});
function zO(M, A, I, g, D, N) {
  return T(), s("li", {
    class: F(["breadcrumb-item", M.computedClasses])
  }, [
    (T(), Z(EM(M.computedTag), wM({ "aria-current": M.computedAriaCurrent }, M.computedLinkProps, { onClick: M.clicked }), {
      default: h(() => [
        Q(M.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const Vw = /* @__PURE__ */ FM(cO, [["render", zO]]), YO = { "aria-label": "breadcrumb" }, rO = { class: "breadcrumb" }, dO = /* @__PURE__ */ v({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(M) {
    const A = M, I = BY(), g = y(() => {
      const D = A.items || (I == null ? void 0 : I.items) || [];
      let N = !1;
      return D.map((t, j) => (typeof t == "string" && (t = { text: t }, j < D.length - 1 && (t.href = "#")), t.active && (N = !0), !t.active && !N && (t.active = j + 1 === D.length), t));
    });
    return (D, N) => (T(), s("nav", YO, [
      l("ol", rO, [
        Q(D.$slots, "prepend"),
        (T(!0), s(MM, null, eM(e(g), (L, t) => (T(), Z(Vw, wM({ key: t }, L), {
          default: h(() => [
            IM(P(L.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        Q(D.$slots, "default"),
        Q(D.$slots, "append")
      ])
    ]));
  }
}), UO = {
  key: 0,
  class: "visually-hidden"
}, pL = /* @__PURE__ */ v({
  __name: "BSpinner",
  props: {
    label: null,
    role: { default: "status" },
    small: { default: !1 },
    tag: { default: "span" },
    type: { default: "border" },
    variant: null
  },
  setup(M) {
    const A = M, I = jA(), g = c(o(A, "small")), D = y(() => ({
      "spinner-border": A.type === "border",
      "spinner-border-sm": A.type === "border" && g.value,
      "spinner-grow": A.type === "grow",
      "spinner-grow-sm": A.type === "grow" && g.value,
      [`text-${A.variant}`]: A.variant !== void 0
    })), N = y(() => !lA(I.label));
    return (L, t) => (T(), Z(EM(M.tag), {
      class: F(e(D)),
      role: M.label || e(N) ? M.role : null,
      "aria-hidden": M.label || e(N) ? null : !0
    }, {
      default: h(() => [
        M.label || e(N) ? (T(), s("span", UO, [
          Q(L.$slots, "label", {}, () => [
            IM(P(M.label), 1)
          ])
        ])) : B("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), mO = v({
  components: { BLink: zA, BSpinner: pL },
  props: {
    ...Sg,
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
  setup(M, { emit: A }) {
    const I = c(o(M, "active")), g = c(o(M, "disabled")), D = c(o(M, "pill")), N = c(o(M, "pressed")), L = c(o(M, "squared")), t = c(o(M, "loading")), j = y(() => N.value === !0), S = y(
      () => M.tag === "button" && M.href === void 0 && M.to === null
    ), u = y(() => WD(M)), i = y(() => M.to !== null), C = y(
      () => M.href !== void 0 ? !1 : !S.value
    ), w = y(() => [
      [`btn-${M.variant}`],
      [`btn-${M.size}`],
      {
        active: I.value || N.value,
        "rounded-pill": D.value,
        "rounded-0": L.value,
        disabled: g.value
      }
    ]), E = y(() => ({
      "aria-disabled": C.value ? g.value : null,
      "aria-pressed": j.value ? N.value : null,
      autocomplete: j.value ? "off" : null,
      disabled: S.value ? g.value : null,
      href: M.href,
      rel: u.value ? M.rel : null,
      role: C.value || u.value ? "button" : null,
      target: u.value ? M.target : null,
      type: S.value ? M.type : null,
      to: S.value ? null : M.to,
      append: u.value ? M.append : null,
      activeClass: i.value ? M.activeClass : null,
      event: i.value ? M.event : null,
      exact: i.value ? M.exact : null,
      exactActiveClass: i.value ? M.exactActiveClass : null,
      replace: i.value ? M.replace : null,
      routerComponentName: i.value ? M.routerComponentName : null,
      routerTag: i.value ? M.routerTag : null
    })), x = y(
      () => i.value ? zA : M.href ? "a" : M.tag
    );
    return {
      computedClasses: w,
      computedAttrs: E,
      computedTag: x,
      clicked: (a) => {
        if (g.value) {
          a.preventDefault(), a.stopPropagation();
          return;
        }
        A("click", a), j.value && A("update:pressed", !N.value);
      },
      loadingBoolean: t
    };
  }
});
function OO(M, A, I, g, D, N) {
  const L = yM("b-spinner");
  return T(), Z(EM(M.computedTag), wM({
    class: ["btn", M.computedClasses]
  }, M.computedAttrs, { onClick: M.clicked }), {
    default: h(() => [
      M.loadingBoolean ? (T(), s("div", {
        key: 0,
        class: F(["btn-loading", { "mode-fill": M.loadingMode === "fill", "mode-inline": M.loadingMode === "inline" }])
      }, [
        Q(M.$slots, "loading", {}, () => [
          W(L, {
            class: "btn-spinner",
            small: M.size !== "lg"
          }, null, 8, ["small"])
        ])
      ], 2)) : B("", !0),
      l("div", {
        class: F(["btn-content", { "btn-loading-fill": M.loadingBoolean && M.loadingMode === "fill" }])
      }, [
        Q(M.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const kD = /* @__PURE__ */ FM(mO, [["render", OO]]), hO = /* @__PURE__ */ v({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(o(A, "vertical")), g = y(() => ({
      "btn-group": !I.value && A.size === void 0,
      [`btn-group-${A.size}`]: A.size !== void 0,
      "btn-group-vertical": I.value
    }));
    return (D, N) => (T(), Z(EM(M.tag), {
      class: F(e(g)),
      role: "group",
      "aria-label": M.ariaLabel
    }, {
      default: h(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), bO = ["role", "aria-label"], WO = /* @__PURE__ */ v({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: !1 },
    role: { default: "toolbar" }
  },
  setup(M) {
    const I = c(o(M, "justify")), g = y(() => ({
      "justify-content-between": I.value
    }));
    return (D, N) => (T(), s("div", {
      class: F([e(g), "btn-toolbar"]),
      role: M.role,
      "aria-label": M.ariaLabel
    }, [
      Q(D.$slots, "default")
    ], 10, bO));
  }
}), Tu = /* @__PURE__ */ v({
  __name: "BImg",
  props: {
    alt: null,
    blank: { default: !1 },
    blankColor: { default: "transparent" },
    block: { default: !1 },
    center: { default: !1 },
    fluid: { default: !1 },
    lazy: { default: !1 },
    fluidGrow: { default: !1 },
    height: null,
    left: { default: !1 },
    start: { default: !1 },
    right: { default: !1 },
    end: { default: !1 },
    rounded: { type: [Boolean, String], default: !1 },
    sizes: null,
    src: null,
    srcset: null,
    thumbnail: { default: !1 },
    width: null
  },
  emits: ["load"],
  setup(M, { emit: A }) {
    const I = M, g = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', D = c(o(I, "lazy")), N = c(o(I, "blank")), L = c(o(I, "block")), t = c(o(I, "center")), j = c(o(I, "fluid")), S = c(o(I, "fluidGrow")), u = c(o(I, "left")), i = c(o(I, "start")), C = c(o(I, "right")), w = c(o(I, "end")), E = c(o(I, "thumbnail")), x = y(
      () => typeof I.srcset == "string" ? I.srcset.split(",").filter((G) => G).join(",") : Array.isArray(I.srcset) ? I.srcset.filter((G) => G).join(",") : void 0
    ), n = y(
      () => typeof I.sizes == "string" ? I.sizes.split(",").filter((G) => G).join(",") : Array.isArray(I.sizes) ? I.sizes.filter((G) => G).join(",") : void 0
    ), a = y(() => {
      const G = (V) => V === void 0 ? void 0 : typeof V == "number" ? V : Number.parseInt(V, 10) || void 0, r = G(I.width), b = G(I.height);
      if (N.value) {
        if (r !== void 0 && b === void 0)
          return { height: r, width: r };
        if (r === void 0 && b !== void 0)
          return { height: b, width: b };
        if (r === void 0 && b === void 0)
          return { height: 1, width: 1 };
      }
      return {
        width: r,
        height: b
      };
    }), z = y(
      () => k(a.value.width, a.value.height, I.blankColor)
    ), d = y(() => ({
      src: N.value ? z.value : I.src,
      alt: I.alt,
      width: a.value.width || void 0,
      height: a.value.height || void 0,
      srcset: N.value ? void 0 : x.value,
      sizes: N.value ? void 0 : n.value,
      loading: D.value ? "lazy" : "eager"
    })), Y = y(
      () => u.value || i.value ? "float-start" : C.value || w.value ? "float-end" : t.value ? "mx-auto" : void 0
    ), U = y(() => ({
      "img-thumbnail": E.value,
      "img-fluid": j.value || S.value,
      "w-100": S.value,
      rounded: I.rounded === "" || I.rounded === !0,
      [`rounded-${I.rounded}`]: typeof I.rounded == "string" && I.rounded !== "",
      [`${Y.value}`]: Y.value !== void 0,
      "d-block": L.value || t.value
    })), k = (G, r, b) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      g.replace("%{w}", String(G)).replace("%{h}", String(r)).replace("%{f}", b)
    )}`;
    return (G, r) => (T(), s("img", wM({ class: e(U) }, e(d), {
      onLoad: r[0] || (r[0] = (b) => A("load", b))
    }), null, 16));
  }
}), DL = /* @__PURE__ */ v({
  __name: "BCardImg",
  props: {
    alt: null,
    blank: { default: !1 },
    blankColor: null,
    bottom: { default: !1 },
    lazy: { default: !1 },
    height: null,
    left: { default: !1 },
    start: { default: !1 },
    right: { default: !1 },
    end: { default: !1 },
    sizes: null,
    src: null,
    srcset: null,
    top: { default: !1 },
    width: null
  },
  emits: ["load"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "bottom")), D = c(o(I, "end")), N = c(o(I, "left")), L = c(o(I, "right")), t = c(o(I, "start")), j = c(o(I, "top")), S = y(
      () => j.value ? "card-img-top" : L.value || D.value ? "card-img-right" : g.value ? "card-img-bottom" : N.value || t.value ? "card-img-left" : "card-img"
    ), u = y(() => ({
      alt: I.alt,
      height: I.height,
      src: I.src,
      lazy: I.lazy,
      width: I.width,
      blank: I.blank,
      blankColor: I.blankColor,
      sizes: I.sizes,
      srcset: I.srcset
    }));
    return (i, C) => (T(), Z(Tu, wM({ class: e(S) }, e(u), {
      onLoad: C[0] || (C[0] = (w) => A("load", w))
    }), null, 16, ["class"]));
  }
}), kO = ["innerHTML"], Zw = /* @__PURE__ */ v({
  __name: "BCardHeadFoot",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`text-${A.textVariant}`]: A.textVariant !== void 0,
      [`bg-${A.bgVariant}`]: A.bgVariant !== void 0,
      [`border-${A.borderVariant}`]: A.borderVariant !== void 0
    }));
    return (g, D) => (T(), Z(EM(M.tag), {
      class: F(e(I))
    }, {
      default: h(() => [
        M.html ? (T(), s("div", {
          key: 0,
          innerHTML: M.html
        }, null, 8, kO)) : Q(g.$slots, "default", { key: 1 }, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bw = /* @__PURE__ */ v({
  __name: "BCardHeader",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(M) {
    const A = M;
    return (I, g) => (T(), Z(Zw, wM({ class: "card-header" }, A), {
      default: h(() => [
        Q(I.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pw = /* @__PURE__ */ v({
  __name: "BCardTitle",
  props: {
    text: null,
    tag: { default: "h4" }
  },
  setup(M) {
    return (A, I) => (T(), Z(EM(M.tag), { class: "card-title" }, {
      default: h(() => [
        Q(A.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), Fw = /* @__PURE__ */ v({
  __name: "BCardSubtitle",
  props: {
    text: null,
    tag: { default: "h6" },
    textVariant: { default: "muted" }
  },
  setup(M) {
    const A = M, I = y(() => [`text-${A.textVariant}`]);
    return (g, D) => (T(), Z(EM(M.tag), {
      class: F(["card-subtitle mb-2", e(I)])
    }, {
      default: h(() => [
        Q(g.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xw = /* @__PURE__ */ v({
  __name: "BCardBody",
  props: {
    bodyBgVariant: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    overlay: { default: !1 },
    subtitle: null,
    subtitleTag: { default: "h4" },
    subtitleTextVariant: null,
    title: null,
    titleTag: { default: "h4" },
    text: null
  },
  setup(M) {
    const A = M, I = jA(), g = c(o(A, "overlay")), D = y(() => !lA(I.title)), N = y(() => !lA(I.subtitle)), L = y(() => ({
      "card-img-overlay": g.value,
      [`text-${A.bodyTextVariant}`]: A.bodyTextVariant !== void 0,
      [`bg-${A.bodyBgVariant}`]: A.bodyBgVariant !== void 0
    }));
    return (t, j) => (T(), Z(EM(M.bodyTag), {
      class: F(["card-body", e(L)])
    }, {
      default: h(() => [
        !!M.title || e(D) ? (T(), Z(Pw, {
          key: 0,
          tag: M.titleTag
        }, {
          default: h(() => [
            Q(t.$slots, "title", {}, () => [
              IM(P(M.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : B("", !0),
        !!M.subtitle || e(N) ? (T(), Z(Fw, {
          key: 1,
          tag: M.subtitleTag,
          "text-variant": M.subtitleTextVariant
        }, {
          default: h(() => [
            Q(t.$slots, "subtitle", {}, () => [
              IM(P(M.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : B("", !0),
        Q(t.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rw = /* @__PURE__ */ v({
  __name: "BCardFooter",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(M) {
    const A = M;
    return (I, g) => (T(), Z(Zw, wM({ class: "card-footer" }, A), {
      default: h(() => [
        Q(I.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Hw = /* @__PURE__ */ v({
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
    subtitle: null,
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "muted" },
    tag: { default: "div" },
    textVariant: null,
    title: null,
    titleTag: { default: "h4" },
    bodyText: { default: "" }
  },
  setup(M) {
    const A = M, I = jA(), g = c(o(A, "imgBottom")), D = c(o(A, "imgEnd")), N = c(o(A, "imgLeft")), L = c(o(A, "imgRight")), t = c(o(A, "imgStart")), j = c(o(A, "noBody")), S = y(() => !lA(I.header)), u = y(() => !lA(I.footer)), i = y(() => ({
      [`text-${A.align}`]: A.align !== void 0,
      [`text-${A.textVariant}`]: A.textVariant !== void 0,
      [`bg-${A.bgVariant}`]: A.bgVariant !== void 0,
      [`border-${A.borderVariant}`]: A.borderVariant !== void 0,
      "flex-row": N.value || t.value,
      "flex-row-reverse": D.value || L.value
    })), C = y(() => ({
      bgVariant: A.headerBgVariant,
      borderVariant: A.headerBorderVariant,
      html: A.headerHtml,
      tag: A.headerTag,
      textVariant: A.headerTextVariant
    })), w = y(() => ({
      overlay: A.overlay,
      bodyBgVariant: A.bodyBgVariant,
      bodyTag: A.bodyTag,
      bodyTextVariant: A.bodyTextVariant,
      subtitle: A.subtitle,
      subtitleTag: A.subtitleTag,
      subtitleTextVariant: A.subtitleTextVariant,
      title: A.title,
      titleTag: A.titleTag
    })), E = y(() => ({
      bgVariant: A.footerBgVariant,
      borderVariant: A.footerBorderVariant,
      html: A.footerHtml,
      tag: A.footerTag,
      textVariant: A.footerTextVariant
    })), x = y(() => ({
      src: A.imgSrc,
      alt: A.imgAlt,
      height: A.imgHeight,
      width: A.imgWidth,
      bottom: A.imgBottom,
      end: A.imgEnd,
      left: A.imgLeft,
      right: A.imgRight,
      start: A.imgStart,
      top: A.imgTop
    }));
    return (n, a) => (T(), Z(EM(M.tag), {
      class: F(["card", e(i)])
    }, {
      default: h(() => [
        e(g) ? B("", !0) : Q(n.$slots, "img", { key: 0 }, () => [
          M.imgSrc ? (T(), Z(DL, qM(wM({ key: 0 }, e(x))), null, 16)) : B("", !0)
        ]),
        M.header || e(S) || M.headerHtml ? (T(), Z(Bw, wM({ key: 1 }, e(C), { class: M.headerClass }), {
          default: h(() => [
            Q(n.$slots, "header", {}, () => [
              IM(P(M.header), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : B("", !0),
        e(j) ? Q(n.$slots, "default", { key: 3 }, () => [
          IM(P(M.bodyText), 1)
        ]) : (T(), Z(Xw, wM({ key: 2 }, e(w), { class: M.bodyClass }), {
          default: h(() => [
            Q(n.$slots, "default", {}, () => [
              IM(P(M.bodyText), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        M.footer || e(u) || M.footerHtml ? (T(), Z(Rw, wM({ key: 4 }, e(E), { class: M.footerClass }), {
          default: h(() => [
            Q(n.$slots, "footer", {}, () => [
              IM(P(M.footer), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : B("", !0),
        e(g) ? Q(n.$slots, "img", { key: 5 }, () => [
          M.imgSrc ? (T(), Z(DL, qM(wM({ key: 0 }, e(x))), null, 16)) : B("", !0)
        ]) : B("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pO = /* @__PURE__ */ v({
  __name: "BCardGroup",
  props: {
    columns: { default: !1 },
    deck: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = c(o(A, "columns")), g = c(o(A, "deck")), D = y(
      () => g.value ? "card-deck" : I.value ? "card-columns" : "card-group"
    ), N = y(() => [D.value]);
    return (L, t) => (T(), Z(EM(M.tag), {
      class: F(e(N))
    }, {
      default: h(() => [
        Q(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), QO = /* @__PURE__ */ v({
  __name: "BCardText",
  props: {
    text: null,
    tag: { default: "p" }
  },
  setup(M) {
    return (A, I) => (T(), Z(EM(M.tag), { class: "card-text" }, {
      default: h(() => [
        Q(A.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), vO = ["id"], GO = {
  key: 0,
  class: "carousel-indicators"
}, fO = ["data-bs-target", "data-bs-slide-to", "aria-label"], JO = { class: "carousel-inner" }, VO = ["data-bs-target"], ZO = /* @__PURE__ */ l("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), BO = { class: "visually-hidden" }, PO = ["data-bs-target"], FO = /* @__PURE__ */ l("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), XO = { class: "visually-hidden" }, _w = Symbol(), RO = /* @__PURE__ */ v({
  __name: "BCarousel",
  props: {
    startingSlide: { default: 0 },
    id: null,
    imgHeight: null,
    imgWidth: null,
    background: null,
    modelValue: { default: 0 },
    controls: { default: !1 },
    indicators: { default: !1 },
    interval: { default: 5e3 },
    noTouch: { default: !1 },
    noWrap: { default: !1 },
    controlsPrevText: { default: "Previous" },
    controlsNextText: { default: "Next" },
    indicatorsButtonLabel: { default: "Slide" }
  },
  emits: ["sliding-start", "sliding-end"],
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = NA(o(I, "id"), "carousel"), N = c(o(I, "controls")), L = c(o(I, "indicators")), t = c(o(I, "noTouch"));
    c(o(I, "noWrap"));
    const j = DM(), S = DM(), u = DM([]);
    return MA(j, "slide.bs.carousel", (i) => A("sliding-start", i)), MA(j, "slid.bs.carousel", (i) => A("sliding-end", i)), _M(() => {
      S.value = new ID(j.value, {
        wrap: !t.value,
        interval: I.interval,
        touch: !t.value
      }), g.default && (u.value = g.default().filter((i) => {
        var C;
        return ((C = i.type) == null ? void 0 : C.__name) === "BCarouselSlide";
      }));
    }), NI(_w, {
      background: I.background,
      width: I.imgWidth,
      height: I.imgHeight
    }), (i, C) => (T(), s("div", {
      id: e(D),
      ref_key: "element",
      ref: j,
      class: "carousel slide",
      "data-bs-ride": "carousel"
    }, [
      e(L) ? (T(), s("div", GO, [
        (T(!0), s(MM, null, eM(u.value, (w, E) => (T(), s("button", {
          key: E,
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide-to": E,
          class: F(E === M.startingSlide ? "active" : ""),
          "aria-current": "true",
          "aria-label": `${M.indicatorsButtonLabel} ${E}`
        }, null, 10, fO))), 128))
      ])) : B("", !0),
      l("div", JO, [
        Q(i.$slots, "default")
      ]),
      e(N) ? (T(), s(MM, { key: 1 }, [
        l("button", {
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide": "prev"
        }, [
          ZO,
          l("span", BO, P(M.controlsPrevText), 1)
        ], 8, VO),
        l("button", {
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide": "next"
        }, [
          FO,
          l("span", XO, P(M.controlsNextText), 1)
        ], 8, PO)
      ], 64)) : B("", !0)
    ], 8, vO));
  }
}), HO = ["data-bs-interval"], _O = ["innerHTML"], $O = { key: 1 }, qO = ["innerHTML"], KO = { key: 1 }, Mh = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = jA(), g = tA(_w, {}), D = c(o(A, "active")), N = y(() => !lA(I.default)), L = y(() => ({
      background: `${A.background || g.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), t = y(() => ({
      "d-none": A.contentVisibleUp !== void 0,
      [`d-${A.contentVisibleUp}-block`]: A.contentVisibleUp !== void 0
    })), j = y(() => g.width), S = y(() => g.height);
    return (u, i) => (T(), s("div", {
      class: F(["carousel-item", { active: e(D) }]),
      "data-bs-interval": M.interval,
      style: QA(e(L))
    }, [
      Q(u.$slots, "img", {}, () => [
        W(Tu, {
          class: "d-block w-100",
          alt: M.imgAlt,
          src: M.imgSrc,
          width: M.imgWidth || e(j),
          height: M.imgHeight || e(S),
          blank: M.imgBlank,
          "blank-color": M.imgBlankColor
        }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
      ]),
      M.caption || M.captionHtml || M.text || M.textHtml || e(N) ? (T(), Z(EM(M.contentTag), {
        key: 0,
        class: F(["carousel-caption", e(t)])
      }, {
        default: h(() => [
          M.caption || M.captionHtml ? (T(), Z(EM(M.captionTag), { key: 0 }, {
            default: h(() => [
              M.captionHtml ? (T(), s("span", {
                key: 0,
                innerHTML: M.captionHtml
              }, null, 8, _O)) : (T(), s("span", $O, P(M.caption), 1))
            ]),
            _: 1
          })) : B("", !0),
          M.text || M.textHtml ? (T(), Z(EM(M.textTag), { key: 1 }, {
            default: h(() => [
              M.textHtml ? (T(), s("span", {
                key: 0,
                innerHTML: M.textHtml
              }, null, 8, qO)) : (T(), s("span", KO, P(M.text), 1))
            ]),
            _: 1
          })) : B("", !0),
          Q(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : B("", !0)
    ], 14, HO));
  }
}), XS = rL("", [], { type: [Boolean, String, Number], default: !1 }), RS = rL("offset", [""], { type: [String, Number], default: null }), HS = rL("order", [""], { type: [String, Number], default: null }), Ah = v({
  name: "BCol",
  props: {
    col: { type: [Boolean, String], default: !1 },
    cols: { type: [String, Number], default: null },
    ...XS,
    offset: { type: [String, Number], default: null },
    ...RS,
    order: { type: [String, Number], default: null },
    ...HS,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(M) {
    const A = [
      { content: XS, propPrefix: "cols", classPrefix: "col" },
      { content: RS, propPrefix: "offset" },
      { content: HS, propPrefix: "order" }
    ], I = c(o(M, "col")), g = y(
      () => A.flatMap((N) => zC(M, N.content, N.propPrefix, N.classPrefix))
    );
    return {
      computedClasses: y(() => [
        g.value,
        {
          col: I.value || !g.value.some((N) => /^col-/.test(N)) && !M.cols,
          [`col-${M.cols}`]: !!M.cols,
          [`offset-${M.offset}`]: !!M.offset,
          [`order-${M.order}`]: !!M.order,
          [`align-self-${M.alignSelf}`]: !!M.alignSelf
        }
      ])
    };
  }
});
function Ih(M, A, I, g, D, N) {
  return T(), Z(EM(M.tag), {
    class: F(M.computedClasses)
  }, {
    default: h(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const eD = /* @__PURE__ */ FM(Ah, [["render", Ih]]), gh = /* @__PURE__ */ v({
  __name: "BContainer",
  props: {
    gutterX: null,
    gutterY: null,
    fluid: { type: [Boolean, String], default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = DM(), g = y(() => ({
      container: A.fluid === !1,
      ["container-fluid"]: A.fluid === !0,
      [`container-${A.fluid}`]: typeof A.fluid == "string",
      [`gx-${A.gutterX}`]: A.gutterX !== void 0,
      [`gy-${A.gutterY}`]: A.gutterY !== void 0
    }));
    return (D, N) => (T(), Z(EM(M.tag), {
      ref_key: "container",
      ref: I,
      class: F(e(g))
    }, {
      default: h(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Dh = { class: "visually-hidden" }, Nh = ["aria-labelledby", "role"], $w = /* @__PURE__ */ v({
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
  setup(M, { expose: A, emit: I }) {
    const g = M, D = NA(o(g, "id"), "dropdown"), N = c(o(g, "block")), L = c(o(g, "dark")), t = c(o(g, "dropup")), j = c(o(g, "dropright")), S = c(o(g, "isNav")), u = c(o(g, "dropleft")), i = c(o(g, "right")), C = c(o(g, "split")), w = c(o(g, "noCaret")), E = DM(), x = DM(), n = DM(), a = y(() => ({
      "d-grid": N.value,
      "d-flex": N.value && C.value
    })), z = y(() => [
      C.value ? g.splitClass : g.toggleClass,
      {
        "nav-link": S.value,
        "dropdown-toggle": !C.value,
        "dropdown-toggle-no-caret": w.value && !C.value,
        "w-100": C.value && N.value
      }
    ]), d = y(() => [
      g.menuClass,
      {
        "dropdown-menu-dark": L.value,
        "dropdown-menu-end": i.value
      }
    ]), Y = y(() => ({
      "data-bs-toggle": C.value ? void 0 : "dropdown",
      "aria-expanded": C.value ? void 0 : !1,
      ref: C.value ? void 0 : x,
      href: C.value ? g.splitHref : void 0
    })), U = y(() => ({
      ref: C.value ? x : void 0
    })), k = () => {
      var r;
      (r = n.value) == null || r.hide();
    }, G = (r) => {
      C.value && I("click", r);
    };
    return MA(E, "show.bs.dropdown", () => I("show")), MA(E, "shown.bs.dropdown", () => I("shown")), MA(E, "hide.bs.dropdown", () => I("hide")), MA(E, "hidden.bs.dropdown", () => I("hidden")), _M(() => {
      var r;
      n.value = new GA((r = x.value) == null ? void 0 : r.$el, {
        autoClose: g.autoClose,
        boundary: g.boundary,
        offset: g.offset ? g.offset.toString() : "",
        reference: g.offset || C.value ? "parent" : "toggle",
        popperConfig: (b) => {
          const V = {
            placement: "bottom-start",
            modifiers: g.noFlip ? [
              {
                name: "flip",
                options: {
                  fallbackPlacements: []
                }
              }
            ] : []
          };
          return t.value ? V.placement = i.value ? "top-end" : "top-start" : j.value ? V.placement = "right-start" : u.value ? V.placement = "left-start" : i.value && (V.placement = "bottom-end"), Nj(b, Nj(V, g.popperOpts));
        }
      });
    }), A({
      hide: k
    }), (r, b) => (T(), s("div", {
      ref_key: "parent",
      ref: E,
      class: F([e(a), "btn-group"])
    }, [
      W(kD, wM({
        id: e(D),
        variant: M.splitVariant || M.variant,
        size: M.size,
        class: e(z),
        disabled: M.disabled,
        type: M.splitButtonType
      }, e(Y), { onClick: G }), {
        default: h(() => [
          Q(r.$slots, "button-content", {}, () => [
            IM(P(M.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      e(C) ? (T(), Z(kD, wM({
        key: 0,
        variant: M.variant,
        size: M.size,
        disabled: M.disabled
      }, e(U), {
        class: [M.toggleClass, "dropdown-toggle-split dropdown-toggle"],
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: b[0] || (b[0] = (V) => I("toggle"))
      }), {
        default: h(() => [
          l("span", Dh, [
            Q(r.$slots, "toggle-text", {}, () => [
              IM(P(M.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 16, ["variant", "size", "disabled", "class"])) : B("", !0),
      l("ul", {
        class: F(["dropdown-menu", e(d)]),
        "aria-labelledby": e(D),
        role: M.role
      }, [
        Q(r.$slots, "default")
      ], 10, Nh)
    ], 2));
  }
}), Lh = { role: "presentation" }, th = /* @__PURE__ */ v({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(M) {
    return (A, I) => (T(), s("li", Lh, [
      (T(), Z(EM(M.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), jh = {}, uh = { role: "presentation" }, Sh = { class: "px-4 py-3" };
function ih(M, A) {
  return T(), s("li", uh, [
    l("form", Sh, [
      Q(M.$slots, "default")
    ])
  ]);
}
const eh = /* @__PURE__ */ FM(jh, [["render", ih]]), Ch = { role: "presentation" }, wh = ["id", "aria-describedby"], Eh = {
  inheritAttrs: !1
}, Th = /* @__PURE__ */ v({
  ...Eh,
  __name: "BDropdownGroup",
  props: {
    id: null,
    ariaDescribedby: null,
    header: null,
    headerClass: null,
    headerTag: { default: "header" },
    headerVariant: null
  },
  setup(M) {
    const A = M, I = y(
      () => A.id ? `${A.id}_group_dd_header` : void 0
    ), g = y(
      () => A.headerTag === "header" ? void 0 : "heading"
    ), D = y(() => [
      A.headerClass,
      {
        [`text-${A.headerVariant}`]: A.headerVariant !== void 0
      }
    ]);
    return (N, L) => (T(), s("li", Ch, [
      (T(), Z(EM(M.headerTag), {
        id: e(I),
        class: F(["dropdown-header", e(D)]),
        role: e(g)
      }, {
        default: h(() => [
          Q(N.$slots, "header", {}, () => [
            IM(P(M.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      l("ul", wM({
        id: M.id,
        role: "group",
        class: "list-unstyled"
      }, N.$attrs, {
        "aria-describedby": M.ariaDescribedby || e(I)
      }), [
        Q(N.$slots, "default")
      ], 16, wh)
    ]));
  }
}), xh = {}, ah = { class: "dropdown-header" };
function yh(M, A) {
  return T(), s("li", null, [
    l("h6", ah, [
      Q(M.$slots, "default")
    ])
  ]);
}
const nh = /* @__PURE__ */ FM(xh, [["render", yh]]), oh = {
  inheritAttrs: !1
}, lh = /* @__PURE__ */ v({
  ...oh,
  __name: "BDropdownItem",
  props: {
    href: null,
    linkClass: null,
    active: { default: !1 },
    disabled: { default: !1 },
    rel: { default: void 0 },
    target: { default: "_self" },
    variant: null
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "active")), D = c(o(I, "disabled")), N = ti(), L = y(() => [
      I.linkClass,
      {
        active: g.value,
        disabled: D.value,
        [`text-${I.variant}`]: I.variant !== void 0
      }
    ]), t = y(
      () => I.href ? "a" : N.to ? zA : "button"
    ), j = y(() => ({
      disabled: D.value,
      "aria-current": g.value ? "true" : null,
      href: t.value === "a" ? I.href : null,
      rel: I.rel,
      type: t.value === "button" ? "button" : null,
      target: I.target,
      ...N.to ? { activeClass: "active", ...N } : {}
    })), S = (u) => A("click", u);
    return (u, i) => (T(), s("li", {
      role: "presentation",
      class: F(u.$attrs.class)
    }, [
      (T(), Z(EM(e(t)), wM({
        class: ["dropdown-item", e(L)]
      }, e(j), { onClick: S }), {
        default: h(() => [
          Q(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 2));
  }
}), sh = ["disabled"], ch = {
  inheritAttrs: !1
}, zh = /* @__PURE__ */ v({
  ...ch,
  __name: "BDropdownItemButton",
  props: {
    buttonClass: null,
    active: { default: !1 },
    activeClass: { default: "active" },
    disabled: { default: !1 },
    variant: null
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "active")), D = c(o(I, "disabled")), N = y(() => [
      I.buttonClass,
      {
        [I.activeClass]: g.value,
        disabled: D.value,
        [`text-${I.variant}`]: I.variant !== void 0
      }
    ]), L = (t) => A("click", t);
    return (t, j) => (T(), s("li", {
      role: "presentation",
      class: F(t.$attrs.class)
    }, [
      l("button", {
        role: "menu",
        type: "button",
        class: F(["dropdown-item", e(N)]),
        disabled: e(D),
        onClick: L
      }, [
        Q(t.$slots, "default")
      ], 10, sh)
    ], 2));
  }
}), Yh = { role: "presentation" }, rh = { class: "px-4 py-1 mb-0 text-muted" }, dh = /* @__PURE__ */ v({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(M) {
    return (A, I) => (T(), s("li", Yh, [
      l("p", rh, [
        Q(A.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ])
    ]));
  }
}), Uh = ["id", "novalidate", "onSubmit"], qw = /* @__PURE__ */ v({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "floating")), D = c(o(I, "novalidate")), N = c(o(I, "validated")), L = y(() => ({
      "form-floating": g.value,
      "was-validated": N.value
    })), t = (j) => A("submit", j);
    return (j, S) => (T(), s("form", {
      id: M.id,
      novalidate: e(D),
      class: F(e(L)),
      onSubmit: FI(t, ["prevent"])
    }, [
      Q(j.$slots, "default")
    ], 42, Uh));
  }
}), mh = { class: "form-floating" }, Oh = ["for"], hh = /* @__PURE__ */ v({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null,
    text: null
  },
  setup(M) {
    return (A, I) => (T(), s("div", mh, [
      Q(A.$slots, "default", {}, () => [
        IM(P(M.text), 1)
      ]),
      l("label", { for: M.labelFor }, [
        Q(A.$slots, "label", {}, () => [
          IM(P(M.label), 1)
        ])
      ], 8, Oh)
    ]));
  }
}), wj = /* @__PURE__ */ v({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    text: null,
    role: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(o(A, "forceShow")), g = c(o(A, "state")), D = c(o(A, "tooltip")), N = y(
      () => I.value === !0 || g.value === !1
    ), L = y(() => ({
      "d-block": N.value,
      "invalid-feedback": !D.value,
      "invalid-tooltip": D.value
    })), t = y(() => ({
      id: A.id,
      role: A.role,
      "aria-live": A.ariaLive,
      "aria-atomic": A.ariaLive ? "true" : void 0
    }));
    return (j, S) => (T(), Z(EM(M.tag), wM({ class: e(L) }, e(t)), {
      default: h(() => [
        Q(j.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ON = /* @__PURE__ */ v({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(M) {
    return (A, I) => (T(), Z(EM(M.tag), { class: "row d-flex flex-wrap" }, {
      default: h(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ej = /* @__PURE__ */ v({
  __name: "BFormText",
  props: {
    id: null,
    inline: { default: !1 },
    tag: { default: "small" },
    text: null,
    textVariant: { default: "muted" }
  },
  setup(M) {
    const A = M, I = c(o(A, "inline")), g = y(() => [
      [`text-${A.textVariant}`],
      {
        "form-text": !I.value
      }
    ]);
    return (D, N) => (T(), Z(EM(M.tag), {
      id: M.id,
      class: F(e(g))
    }, {
      default: h(() => [
        Q(D.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Tj = /* @__PURE__ */ v({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: !1 },
    id: null,
    role: null,
    text: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(o(A, "forceShow")), g = c(o(A, "state")), D = c(o(A, "tooltip")), N = y(
      () => I.value === !0 || g.value === !0
    ), L = y(() => ({
      "d-block": N.value,
      "valid-feedback": !D.value,
      "valid-tooltip": D.value
    })), t = y(() => A.ariaLive ? "true" : void 0);
    return (j, S) => (T(), Z(EM(M.tag), {
      id: M.id,
      role: M.role,
      "aria-live": M.ariaLive,
      "aria-atomic": e(t),
      class: F(e(L))
    }, {
      default: h(() => [
        Q(j.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), bh = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], Wh = ["for"], kh = {
  inheritAttrs: !1
}, Kw = /* @__PURE__ */ v({
  ...kh,
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
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = NA(o(I, "id"), "form-check"), N = c(
      o(I, "indeterminate")
    ), L = c(o(I, "autofocus")), t = c(o(I, "plain")), j = c(o(I, "button")), S = c(o(I, "switch")), u = c(o(I, "disabled")), i = c(o(I, "inline")), C = c(o(I, "required")), w = c(o(I, "state")), E = DM(null), x = DM(!1), n = y(() => !lA(g.default)), a = y({
      get: () => I.uncheckedValue ? Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : I.modelValue === I.value : I.modelValue,
      set: (G) => {
        let r = G;
        Array.isArray(I.modelValue) ? I.uncheckedValue && (r = I.modelValue, G ? (r.indexOf(I.uncheckedValue) > -1 && r.splice(r.indexOf(I.uncheckedValue), 1), r.push(I.value)) : (r.indexOf(I.value) > -1 && r.splice(r.indexOf(I.value), 1), r.push(I.uncheckedValue))) : r = G ? I.value : I.uncheckedValue, A("input", r), A("update:modelValue", r), A("change", r);
      }
    }), z = y(() => Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), d = fA({
      plain: o(t, "value"),
      button: o(j, "value"),
      inline: o(i, "value"),
      switch: o(S, "value"),
      size: o(I, "size"),
      state: o(w, "value"),
      buttonVariant: o(I, "buttonVariant")
    }), Y = UC(d), U = mC(d), k = OC(d);
    return _M(() => {
      L.value && E.value.focus();
    }), (G, r) => (T(), s("div", {
      class: F(e(Y))
    }, [
      VM(l("input", wM({ id: e(D) }, G.$attrs, {
        ref_key: "input",
        ref: E,
        "onUpdate:modelValue": r[0] || (r[0] = (b) => EA(a) ? a.value = b : null),
        class: e(U),
        type: "checkbox",
        disabled: e(u),
        required: !!M.name && !!e(C),
        name: M.name,
        form: M.form,
        "aria-label": M.ariaLabel,
        "aria-labelledby": M.ariaLabelledBy,
        "aria-required": M.name && e(C) ? "true" : void 0,
        value: M.value,
        indeterminate: e(N),
        onFocus: r[1] || (r[1] = (b) => x.value = !0),
        onBlur: r[2] || (r[2] = (b) => x.value = !1)
      }), null, 16, bh), [
        [KI, e(a)]
      ]),
      e(n) || !e(t) ? (T(), s("label", {
        key: 0,
        for: e(D),
        class: F([e(k), { active: e(z), focus: x.value }])
      }, [
        Q(G.$slots, "default")
      ], 10, Wh)) : B("", !0)
    ], 2));
  }
}), ph = ["id"], Qh = ["innerHTML"], vh = ["textContent"], Gh = /* @__PURE__ */ v({
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
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = "BFormCheckbox", N = NA(o(I, "id"), "checkbox"), L = NA(o(I, "name"), "checkbox");
    c(o(I, "autofocus"));
    const t = c(o(I, "buttons")), j = c(o(I, "disabled"));
    c(o(I, "plain"));
    const S = c(o(I, "required")), u = c(o(I, "stacked")), i = c(o(I, "state")), C = c(o(I, "switches")), w = c(o(I, "validated")), E = y({
      get: () => I.modelValue,
      set: (d) => {
        if (JSON.stringify(d) === JSON.stringify(I.modelValue))
          return;
        const Y = I.options.filter(
          (U) => d.map((k) => JSON.stringify(k)).includes(JSON.stringify(typeof U == "string" ? U : U[I.valueField]))
        ).map((U) => typeof U == "string" ? U : U[I.valueField]);
        A("input", Y), A("update:modelValue", Y), A("change", Y);
      }
    }), x = y(
      () => (g.first ? KN(g.first(), D, j.value) : []).concat(I.options.map((d) => WC(d, I))).concat(g.default ? KN(g.default(), D, j.value) : []).map((d, Y) => kC(d, Y, I, L, N)).map((d) => ({
        ...d,
        props: {
          switch: C.value,
          ...d.props
        }
      }))
    ), n = fA({
      required: o(S, "value"),
      ariaInvalid: o(I, "ariaInvalid"),
      state: o(i, "value"),
      validated: o(w, "value"),
      buttons: o(t, "value"),
      stacked: o(u, "value"),
      size: o(I, "size")
    }), a = hC(n), z = bC(n);
    return (d, Y) => (T(), s("div", wM(e(a), {
      id: e(N),
      role: "group",
      class: [e(z), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), s(MM, null, eM(e(x), (U, k) => (T(), Z(Kw, wM({
        key: k,
        modelValue: e(E),
        "onUpdate:modelValue": Y[0] || (Y[0] = (G) => EA(E) ? E.value = G : null)
      }, U.props), {
        default: h(() => [
          U.html ? (T(), s("span", {
            key: 0,
            innerHTML: U.html
          }, null, 8, Qh)) : (T(), s("span", {
            key: 1,
            textContent: P(U.text)
          }, null, 8, vh))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, ph));
  }
}), ME = ["input", "select", "textarea"], fh = ME.map((M) => `${M}:not([disabled])`).join(), Jh = [...ME, "a", "button", "label"], Vh = "label", Zh = "invalid-feedback", Bh = "valid-feedback", Ph = "description", Fh = "default", Xh = v({
  components: { BCol: eD, BFormInvalidFeedback: wj, BFormRow: ON, BFormText: Ej, BFormValidFeedback: Tj },
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
  setup(M, { attrs: A }) {
    const I = c(o(M, "disabled")), g = c(o(M, "labelSrOnly")), D = c(o(M, "state")), N = c(o(M, "tooltip")), L = c(o(M, "validated")), t = c(o(M, "floating")), j = null, S = ["xs", "sm", "md", "lg", "xl"], u = (k, G) => S.reduce((r, b) => {
      const V = tS(b === "xs" ? "" : b, `${G}Align`), R = k[V] || null;
      return R && (b === "xs" ? r.push(`text-${R}`) : r.push(`text-${b}-${R}`)), r;
    }, []), i = (k, G) => S.reduce((r, b) => {
      const V = tS(b === "xs" ? "" : b, `${G}Cols`);
      let R = k[V];
      return R = R === "" ? !0 : R || !1, typeof R != "boolean" && R !== "auto" && (R = iD(R, 0), R = R > 0 ? R : !1), R && (b === "xs" ? r.cols = R : r[b || (typeof R == "boolean" ? "col" : "cols")] = R), r;
    }, {}), C = DM(), w = (k, G = null) => {
      if (rY && M.labelFor) {
        const r = sC(`#${cY(M.labelFor)}`, C);
        if (r) {
          const b = "aria-describedby", V = (k || "").split(YN), R = (G || "").split(YN), AM = (Hj(r, b) || "").split(YN).filter((LM) => !R.includes(LM)).concat(V).filter((LM, gM, oM) => oM.indexOf(LM) === gM).filter((LM) => LM).join(" ").trim();
          AM ? vY(r, b, AM) : GY(r, b);
        }
      }
    }, E = y(() => i(M, "content")), x = y(() => u(M, "label")), n = y(() => i(M, "label")), a = y(
      () => Object.keys(E.value).length > 0 || Object.keys(n.value).length > 0
    ), z = y(
      () => typeof D.value == "boolean" ? D.value : null
    ), d = y(() => {
      const k = z.value;
      return k === !0 ? "is-valid" : k === !1 ? "is-invalid" : null;
    }), Y = y(
      () => dL(A.ariaInvalid, D.value)
    );
    return mM(
      () => j,
      (k, G) => {
        k !== G && w(k, G);
      }
    ), _M(() => {
      DI(() => {
        w(j);
      });
    }), {
      disabledBoolean: I,
      labelSrOnlyBoolean: g,
      stateBoolean: D,
      tooltipBoolean: N,
      validatedBoolean: L,
      floatingBoolean: t,
      ariaDescribedby: j,
      computedAriaInvalid: Y,
      contentColProps: E,
      isHorizontal: a,
      labelAlignClasses: x,
      labelColProps: n,
      onLegendClick: (k) => {
        if (M.labelFor)
          return;
        const { target: G } = k, r = G ? G.tagName : "";
        if (Jh.indexOf(r) !== -1)
          return;
        const b = pY(fh, C).filter(kY);
        b.length === 1 && bY(b[0]);
      },
      stateClass: d
    };
  },
  render() {
    const M = this.$props, A = this.$slots, I = NA(), g = !M.labelFor;
    let D = null;
    const N = pA(Vh, {}, A) || M.label, L = N ? gI("_BV_label_") : null;
    if (N || this.isHorizontal) {
      const Y = g ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        N && (D = sM(
          Y,
          {
            class: "visually-hidden",
            id: L,
            for: M.labelFor || null
          },
          N
        )), this.isHorizontal ? D = sM(eD, this.labelColProps, { default: () => D }) : D = sM("div", {}, [D]);
      else {
        const U = {
          onClick: g ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? Y : null,
          id: L,
          for: M.labelFor || null,
          tabIndex: g ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": g,
              "col-form-label": this.isHorizontal || g,
              "pt-0": !this.isHorizontal && g,
              "d-block": !this.isHorizontal && !g,
              [`col-form-label-${M.labelSize}`]: !!M.labelSize
            },
            this.labelAlignClasses,
            M.labelClass
          ]
        };
        this.isHorizontal ? D = sM(eD, U, { default: () => N }) : D = sM(Y, U, N);
      }
    }
    let t = null;
    const j = pA(Zh, {}, A) || this.invalidFeedback, S = j ? gI("_BV_feedback_invalid_") : void 0;
    j && (t = sM(
      wj,
      {
        ariaLive: M.feedbackAriaLive,
        id: S,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => j }
    ));
    let u = null;
    const i = pA(Bh, {}, A) || this.validFeedback, C = i ? gI("_BV_feedback_valid_") : void 0;
    i && (u = sM(
      Tj,
      {
        ariaLive: M.feedbackAriaLive,
        id: C,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => i }
    ));
    let w = null;
    const E = pA(Ph, {}, A) || this.description, x = E ? gI("_BV_description_") : void 0;
    E && (w = sM(
      Ej,
      {
        id: x
      },
      { default: () => E }
    ));
    const n = this.ariaDescribedby = [
      x,
      this.stateBoolean === !1 ? S : null,
      this.stateBoolean === !0 ? C : null
    ].filter((Y) => Y).join(" ") || null, a = [
      pA(Fh, { ariaDescribedby: n, descriptionId: x, id: I, labelId: L }, A) || "",
      t,
      u,
      w
    ];
    !this.isHorizontal && this.floatingBoolean && a.push(D);
    let z = sM(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      a
    );
    this.isHorizontal && (z = sM(eD, { ref: "content", ...this.contentColProps }, { default: () => a }));
    const d = {
      class: [
        "mb-3",
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: NA(o(M, "id")).value,
      disabled: g ? this.disabledBoolean : null,
      role: g ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      "aria-labelledby": g && this.isHorizontal ? L : null
    };
    return this.isHorizontal && !g ? sM(ON, d, { default: () => [D, z] }) : sM(
      g ? "fieldset" : "div",
      d,
      this.isHorizontal && g ? [sM(ON, {}, { default: () => [D, z] })] : this.isHorizontal || !this.floatingBoolean ? [D, z] : [z]
    );
  }
}), _S = [
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
], Rh = v({
  props: {
    ...pC,
    max: { type: [String, Number], required: !1 },
    min: { type: [String, Number], required: !1 },
    step: { type: [String, Number], required: !1 },
    type: {
      type: String,
      default: "text",
      validator: (M) => _S.includes(M)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(M, { emit: A }) {
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: N, onChange: L, onBlur: t, focus: j, blur: S } = QC(M, A), u = DM(!1), i = y(() => {
      const E = M.type === "range", x = M.type === "color";
      return {
        "form-control-highlighted": u.value,
        "form-range": E,
        "form-control": x || !M.plaintext && !E,
        "form-control-color": x,
        "form-control-plaintext": M.plaintext && !E && !x,
        [`form-control-${M.size}`]: !!M.size,
        "is-valid": M.state === !0,
        "is-invalid": M.state === !1
      };
    }), C = y(
      () => _S.includes(M.type) ? M.type : "text"
    );
    return {
      computedClasses: i,
      localType: C,
      input: I,
      computedId: g,
      computedAriaInvalid: D,
      onInput: N,
      onChange: L,
      onBlur: t,
      focus: j,
      blur: S,
      highlight: () => {
        u.value !== !0 && (u.value = !0, setTimeout(() => {
          u.value = !1;
        }, 2e3));
      }
    };
  }
}), Hh = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function _h(M, A, I, g, D, N) {
  return T(), s("input", wM({
    id: M.computedId,
    ref: "input",
    class: M.computedClasses,
    name: M.name || void 0,
    form: M.form || void 0,
    type: M.localType,
    disabled: M.disabled,
    placeholder: M.placeholder,
    required: M.required,
    autocomplete: M.autocomplete || void 0,
    readonly: M.readonly || M.plaintext,
    min: M.min,
    max: M.max,
    step: M.step,
    list: M.type !== "password" ? M.list : void 0,
    "aria-required": M.required ? "true" : void 0,
    "aria-invalid": M.computedAriaInvalid
  }, M.$attrs, {
    onInput: A[0] || (A[0] = (L) => M.onInput(L)),
    onChange: A[1] || (A[1] = (L) => M.onChange(L)),
    onBlur: A[2] || (A[2] = (L) => M.onBlur(L))
  }), null, 16, Hh);
}
const $h = /* @__PURE__ */ FM(Rh, [["render", _h]]), qh = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], Kh = ["for"], AE = /* @__PURE__ */ v({
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
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = NA(o(I, "id"), "form-check"), N = c(o(I, "autofocus")), L = c(o(I, "plain")), t = c(o(I, "button")), j = c(o(I, "switch")), S = c(o(I, "disabled")), u = c(o(I, "inline")), i = c(o(I, "required")), C = c(o(I, "state")), w = DM(null), E = DM(!1), x = y({
      get: () => Array.isArray(I.modelValue) ? I.modelValue[0] : I.modelValue,
      set: (k) => {
        const G = k ? I.value : !1, r = Array.isArray(I.modelValue) ? [G] : G;
        A("input", r), A("change", r), A("update:modelValue", r);
      }
    }), n = y(() => Array.isArray(I.modelValue) ? (I.modelValue || []).find((k) => k === I.value) : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), a = y(() => !lA(g.default)), z = fA({
      plain: o(L, "value"),
      button: o(t, "value"),
      inline: o(u, "value"),
      switch: o(j, "value"),
      size: o(I, "size"),
      state: o(C, "value"),
      buttonVariant: o(I, "buttonVariant")
    }), d = UC(z), Y = mC(z), U = OC(z);
    return _M(() => {
      N.value && w.value !== null && w.value.focus();
    }), (k, G) => (T(), s("div", {
      class: F(e(d))
    }, [
      VM(l("input", wM({ id: e(D) }, k.$attrs, {
        ref_key: "input",
        ref: w,
        "onUpdate:modelValue": G[0] || (G[0] = (r) => EA(x) ? x.value = r : null),
        class: e(Y),
        type: "radio",
        disabled: e(S),
        required: !!M.name && !!e(i),
        name: M.name,
        form: M.form,
        "aria-label": M.ariaLabel,
        "aria-labelledby": M.ariaLabelledBy,
        value: M.value,
        "aria-required": M.name && e(i) ? !0 : void 0,
        onFocus: G[1] || (G[1] = (r) => E.value = !0),
        onBlur: G[2] || (G[2] = (r) => E.value = !1)
      }), null, 16, qh), [
        [Li, e(x)]
      ]),
      e(a) || !e(L) ? (T(), s("label", {
        key: 0,
        for: e(D),
        class: F([e(U), { active: e(n), focus: E.value }])
      }, [
        Q(k.$slots, "default")
      ], 10, Kh)) : B("", !0)
    ], 2));
  }
}), Mb = ["id"], Ab = ["innerHTML"], Ib = ["textContent"], gb = /* @__PURE__ */ v({
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
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = "BFormRadio", N = NA(o(I, "id"), "radio"), L = NA(o(I, "name"), "checkbox");
    c(o(I, "autofocus"));
    const t = c(o(I, "buttons")), j = c(o(I, "disabled"));
    c(o(I, "plain"));
    const S = c(o(I, "required")), u = c(o(I, "stacked")), i = c(o(I, "state")), C = c(o(I, "validated")), w = y({
      get: () => I.modelValue,
      set: (z) => {
        A("input", z), A("update:modelValue", z), A("change", z);
      }
    }), E = y(
      () => (g.first ? KN(g.first(), D, j.value) : []).concat(I.options.map((z) => WC(z, I))).concat(g.default ? KN(g.default(), D, j.value) : []).map((z, d) => kC(z, d, I, L, N)).map((z) => ({
        ...z
      }))
    ), x = fA({
      required: o(S, "value"),
      ariaInvalid: o(I, "ariaInvalid"),
      state: o(i, "value"),
      validated: o(C, "value"),
      buttons: o(t, "value"),
      stacked: o(u, "value"),
      size: o(I, "size")
    }), n = hC(x), a = bC(x);
    return (z, d) => (T(), s("div", wM(e(n), {
      id: e(N),
      role: "radiogroup",
      class: [e(a), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), s(MM, null, eM(e(E), (Y, U) => (T(), Z(AE, wM({
        key: U,
        modelValue: e(w),
        "onUpdate:modelValue": d[0] || (d[0] = (k) => EA(w) ? w.value = k : null)
      }, Y.props), {
        default: h(() => [
          Y.html ? (T(), s("span", {
            key: 0,
            innerHTML: Y.html
          }, null, 8, Ab)) : (T(), s("span", {
            key: 1,
            textContent: P(Y.text)
          }, null, 8, Ib))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, Mb));
  }
}), Db = ["value", "disabled"], xu = /* @__PURE__ */ v({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: !1 }
  },
  setup(M) {
    const I = c(o(M, "disabled"));
    return (g, D) => (T(), s("option", {
      value: M.value,
      disabled: e(I)
    }, [
      Q(g.$slots, "default")
    ], 8, Db));
  }
}), Nb = ["label"], IE = /* @__PURE__ */ v({
  __name: "BFormSelectOptionGroup",
  props: {
    label: null,
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(M) {
    const A = M, I = y(
      () => $j(A.options, "BFormSelectOptionGroup", A)
    );
    return (g, D) => (T(), s("optgroup", { label: M.label }, [
      Q(g.$slots, "first"),
      (T(!0), s(MM, null, eM(e(I), (N, L) => (T(), Z(xu, wM({
        key: L,
        value: N.value,
        disabled: N.disabled
      }, g.$attrs, {
        innerHTML: N.html || N.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      Q(g.$slots, "default")
    ], 8, Nb));
  }
}), Lb = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], tb = /* @__PURE__ */ v({
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
  setup(M, { expose: A, emit: I }) {
    const g = M, D = NA(o(g, "id"), "input"), N = c(o(g, "autofocus")), L = c(o(g, "disabled")), t = c(o(g, "multiple")), j = c(o(g, "plain")), S = c(o(g, "required")), u = c(o(g, "state")), i = DM(), C = y(() => ({
      "form-control": j.value,
      [`form-control-${g.size}`]: g.size && j.value,
      "form-select": !j.value,
      [`form-select-${g.size}`]: g.size && !j.value,
      "is-valid": u.value === !0,
      "is-invalid": u.value === !1
    })), w = y(() => {
      if (g.selectSize || j.value)
        return g.selectSize;
    }), E = y(
      () => dL(g.ariaInvalid, u.value)
    ), x = y(
      () => $j(g.options, "BFormSelect", g)
    ), n = y({
      get() {
        return g.modelValue;
      },
      set(Y) {
        I("change", Y), I("update:modelValue", Y), I("input", Y);
      }
    }), a = () => {
      var Y;
      L.value || (Y = i.value) == null || Y.focus();
    }, z = () => {
      var Y;
      L.value || (Y = i.value) == null || Y.blur();
    }, d = () => {
      DI(() => {
        var Y;
        N.value && ((Y = i.value) == null || Y.focus());
      });
    };
    return _M(d), yj(d), A({
      blur: z,
      focus: a
    }), (Y, U) => VM((T(), s("select", wM({
      id: e(D),
      ref_key: "input",
      ref: i
    }, Y.$attrs, {
      "onUpdate:modelValue": U[0] || (U[0] = (k) => EA(n) ? n.value = k : null),
      class: e(C),
      name: M.name,
      form: M.form || void 0,
      multiple: e(t) || void 0,
      size: e(w),
      disabled: e(L),
      required: e(S),
      "aria-required": e(S) ? !0 : void 0,
      "aria-invalid": e(E)
    }), [
      Q(Y.$slots, "first"),
      (T(!0), s(MM, null, eM(e(x), (k, G) => (T(), s(MM, { key: G }, [
        Array.isArray(k.options) ? (T(), Z(IE, {
          key: 0,
          label: k.label,
          options: k.options
        }, null, 8, ["label", "options"])) : (T(), Z(xu, {
          key: 1,
          value: k.value,
          disabled: k.disabled,
          innerHTML: k.html || k.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      Q(Y.$slots, "default")
    ], 16, Lb)), [
      [Wg, e(n)]
    ]);
  }
}), jb = ["id"], gE = /* @__PURE__ */ v({
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
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = NA(o(I, "id")), N = c(o(I, "disabled")), L = c(o(I, "noRemove")), t = c(o(I, "pill")), j = y(
      () => {
        var i, C, w;
        return (w = ((C = (i = g.default) == null ? void 0 : i.call(g)[0].children) == null ? void 0 : C.toString()) || I.title) != null ? w : "";
      }
    ), S = y(() => `${D.value}taglabel__`), u = y(() => [
      `bg-${I.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(I.variant),
        "rounded-pill": t.value,
        disabled: N.value
      }
    ]);
    return (i, C) => (T(), Z(EM(M.tag), {
      id: e(D),
      title: e(j),
      class: F(["badge b-form-tag d-inline-flex align-items-center mw-100", e(u)]),
      "aria-labelledby": e(S)
    }, {
      default: h(() => [
        l("span", {
          id: e(S),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          Q(i.$slots, "default", {}, () => [
            IM(P(e(j)), 1)
          ])
        ], 8, jb),
        !e(N) && !e(L) ? (T(), Z(gD, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": M.removeLabel,
          class: "b-form-tag-remove",
          white: !["warning", "info", "light"].includes(M.variant),
          "aria-describedby": e(S),
          "aria-controls": M.id,
          onClick: C[0] || (C[0] = (w) => A("remove", e(j)))
        }, null, 8, ["aria-label", "white", "aria-describedby", "aria-controls"])) : B("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), ub = ["id"], Sb = ["id", "for", "aria-live"], ib = ["id", "aria-live"], eb = ["id"], Cb = ["aria-controls"], wb = {
  role: "group",
  class: "d-flex"
}, Eb = ["id", "disabled", "value", "type", "placeholder", "form", "required"], Tb = ["disabled"], xb = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, ab = {
  key: 0,
  class: "d-block invalid-feedback"
}, yb = {
  key: 1,
  class: "form-text text-muted"
}, nb = {
  key: 2,
  class: "form-text text-muted"
}, ob = ["name", "value"], lb = /* @__PURE__ */ v({
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
  setup(M, { emit: A }) {
    const I = M, g = NA(), D = c(o(I, "addOnChange")), N = c(o(I, "autofocus")), L = c(o(I, "disabled")), t = c(o(I, "noAddOnEnter")), j = c(o(I, "noOuterFocus")), S = c(o(I, "noTagRemove")), u = c(o(I, "removeOnDelete")), i = c(o(I, "required")), C = c(o(I, "state")), w = c(o(I, "tagPills")), E = DM(null), x = y(() => I.inputId || `${g.value}input__`), n = DM(I.modelValue), a = DM(""), z = DM(!1), d = DM(!1), Y = DM(""), U = DM([]), k = DM([]), G = DM([]), r = y(() => ({
      [`form-control-${I.size}`]: I.size !== void 0,
      disabled: L.value,
      focus: d.value,
      "is-invalid": C.value === !1,
      "is-valid": C.value === !0
    })), b = y(() => n.value.includes(a.value)), V = y(
      () => a.value === "" ? !1 : !I.tagValidator(a.value)
    ), R = y(() => n.value.length === I.limit), AM = y(() => !V.value && !b.value), LM = y(() => ({
      addButtonText: I.addButtonText,
      addButtonVariant: I.addButtonVariant,
      addTag: vM,
      disableAddButton: AM.value,
      disabled: L.value,
      duplicateTagText: I.duplicateTagText,
      duplicateTags: G.value,
      form: I.form,
      inputAttrs: {
        ...I.inputAttrs,
        disabled: L.value,
        form: I.form,
        id: x,
        value: a
      },
      inputHandlers: {
        input: CM,
        keydown: bM,
        change: dM
      },
      inputId: x,
      inputType: I.inputType,
      invalidTagText: I.invalidTagText,
      invalidTags: k.value,
      isDuplicate: b.value,
      isInvalid: V.value,
      isLimitReached: R.value,
      limitTagsText: I.limitTagsText,
      limit: I.limit,
      noTagRemove: S.value,
      placeholder: I.placeholder,
      removeTag: fM,
      required: i.value,
      separator: I.separator,
      size: I.size,
      state: C.value,
      tagClass: I.tagClass,
      tagPills: w.value,
      tagRemoveLabel: I.tagRemoveLabel,
      tagVariant: I.tagVariant,
      tags: n.value
    }));
    mM(
      () => I.modelValue,
      (iM) => {
        n.value = iM;
      }
    );
    const gM = () => {
      var iM;
      N.value && ((iM = E.value) == null || iM.focus());
    }, oM = (iM) => {
      if (L.value) {
        iM.target.blur();
        return;
      }
      A("focusin", iM);
    }, SM = (iM) => {
      L.value || j.value || (d.value = !0, A("focus", iM));
    }, tM = (iM) => {
      d.value = !1, A("blur", iM);
    }, CM = (iM) => {
      var J, _;
      const zM = typeof iM == "string" ? iM : iM.target.value;
      if (z.value = !1, ((J = I.separator) == null ? void 0 : J.includes(zM.charAt(0))) && zM.length > 0) {
        E.value && (E.value.value = "");
        return;
      }
      if (a.value = zM, (_ = I.separator) != null && _.includes(zM.charAt(zM.length - 1))) {
        vM(zM.slice(0, zM.length - 1));
        return;
      }
      U.value = I.tagValidator(zM) && !b.value ? [zM] : [], k.value = I.tagValidator(zM) ? [] : [zM], G.value = b.value ? [zM] : [], A("tag-state", U.value, k.value, G.value);
    }, dM = (iM) => {
      D.value && (CM(iM), b.value || vM(a.value));
    }, bM = (iM) => {
      if (iM.key === "Enter" && !t.value) {
        vM(a.value);
        return;
      }
      (iM.key === "Backspace" || iM.key === "Delete") && u.value && a.value === "" && z.value && n.value.length > 0 ? fM(n.value[n.value.length - 1]) : z.value = !0;
    }, vM = (iM) => {
      var J;
      if (iM = (iM || a.value).trim(), iM === "" || b.value || !I.tagValidator(iM) || I.limit && R.value)
        return;
      const zM = [...I.modelValue, iM];
      a.value = "", z.value = !0, A("update:modelValue", zM), A("input", zM), (J = E.value) == null || J.focus();
    }, fM = (iM) => {
      var J;
      const zM = n.value.indexOf((J = iM == null ? void 0 : iM.toString()) != null ? J : "");
      Y.value = n.value.splice(zM, 1).toString(), A("update:modelValue", n.value);
    };
    return _M(() => {
      gM(), I.modelValue.length > 0 && (z.value = !0);
    }), yj(() => gM()), (iM, zM) => (T(), s("div", {
      id: e(g),
      class: F(["b-form-tags form-control h-auto", e(r)]),
      role: "group",
      tabindex: "-1",
      onFocusin: oM,
      onFocusout: zM[1] || (zM[1] = (J) => A("focusout", J))
    }, [
      l("output", {
        id: `${e(g)}selected_tags__`,
        class: "visually-hidden",
        role: "status",
        for: e(x),
        "aria-live": d.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, P(n.value.join(", ")), 9, Sb),
      l("div", {
        id: `${e(g)}removed_tags__`,
        role: "status",
        "aria-live": d.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + P(M.tagRemovedLabel) + ") " + P(Y.value), 9, ib),
      Q(iM.$slots, "default", qM(iA(e(LM))), () => [
        l("ul", {
          id: `${e(g)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (T(!0), s(MM, null, eM(n.value, (J, _) => Q(iM.$slots, "tag", qM(wM({ key: _ }, { tag: J, tagClass: M.tagClass, tagVariant: M.tagVariant, tagPills: e(w), removeTag: fM })), () => [
            W(gE, {
              class: F(M.tagClass),
              tag: "li",
              variant: M.tagVariant,
              pill: M.tagPills,
              onRemove: fM
            }, {
              default: h(() => [
                IM(P(J), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"])
          ])), 128)),
          l("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${e(g)}tag_list__`
          }, [
            l("div", wb, [
              l("input", wM({
                id: e(x),
                ref_key: "input",
                ref: E,
                disabled: e(L),
                value: a.value,
                type: M.inputType,
                placeholder: M.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, M.inputAttrs, {
                form: M.form,
                required: e(i),
                onInput: CM,
                onChange: dM,
                onKeydown: bM,
                onFocus: SM,
                onBlur: tM
              }), null, 16, Eb),
              e(AM) ? (T(), s("button", {
                key: 0,
                type: "button",
                class: F(["btn b-form-tags-button py-0", [
                  `btn-${M.addButtonVariant}`,
                  {
                    "disabled invisible": a.value.length === 0
                  },
                  M.inputClass
                ]]),
                style: { "font-size": "90%" },
                disabled: e(L) || a.value.length === 0 || e(R),
                onClick: zM[0] || (zM[0] = (J) => vM(a.value))
              }, [
                Q(iM.$slots, "add-button-text", {}, () => [
                  IM(P(M.addButtonText), 1)
                ])
              ], 10, Tb)) : B("", !0)
            ])
          ], 8, Cb)
        ], 8, eb),
        l("div", xb, [
          e(V) ? (T(), s("div", ab, P(M.invalidTagText) + ": " + P(a.value), 1)) : B("", !0),
          e(b) ? (T(), s("small", yb, P(M.duplicateTagText) + ": " + P(a.value), 1)) : B("", !0),
          n.value.length === M.limit ? (T(), s("small", nb, "Tag limit reached")) : B("", !0)
        ])
      ]),
      M.name ? (T(!0), s(MM, { key: 0 }, eM(n.value, (J, _) => (T(), s("input", {
        key: _,
        type: "hidden",
        name: M.name,
        value: J
      }, null, 8, ob))), 128)) : B("", !0)
    ], 42, ub));
  }
}), sb = v({
  props: {
    ...pC,
    noResize: { type: [Boolean, String], default: !1 },
    rows: { type: [String, Number], required: !1, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(M, { emit: A }) {
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: N, onChange: L, onBlur: t, focus: j, blur: S } = QC(M, A), u = c(o(M, "noResize")), i = y(() => ({
      "form-control": !M.plaintext,
      "form-control-plaintext": M.plaintext,
      [`form-control-${M.size}`]: !!M.size,
      "is-valid": M.state === !0,
      "is-invalid": M.state === !1
    })), C = y(
      () => u.value ? { resize: "none" } : void 0
    );
    return {
      input: I,
      computedId: g,
      computedAriaInvalid: D,
      onInput: N,
      onChange: L,
      onBlur: t,
      focus: j,
      blur: S,
      computedClasses: i,
      computedStyles: C
    };
  }
}), cb = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function zb(M, A, I, g, D, N) {
  return T(), s("textarea", wM({
    id: M.computedId,
    ref: "input",
    class: M.computedClasses,
    name: M.name || void 0,
    form: M.form || void 0,
    disabled: M.disabled,
    placeholder: M.placeholder,
    required: M.required,
    autocomplete: M.autocomplete || void 0,
    readonly: M.readonly || M.plaintext,
    "aria-required": M.required ? "true" : void 0,
    "aria-invalid": M.computedAriaInvalid,
    rows: M.rows,
    style: M.computedStyles,
    wrap: M.wrap || void 0
  }, M.$attrs, {
    onInput: A[0] || (A[0] = (L) => M.onInput(L)),
    onChange: A[1] || (A[1] = (L) => M.onChange(L)),
    onBlur: A[2] || (A[2] = (L) => M.onBlur(L))
  }), null, 16, cb);
}
const Yb = /* @__PURE__ */ FM(sb, [["render", zb]]), rb = {
  key: 0,
  class: "input-group-text"
}, db = ["innerHTML"], Ub = { key: 1 }, mb = {
  key: 0,
  class: "input-group-text"
}, Ob = ["innerHTML"], hb = { key: 1 }, bb = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = y(() => ({
      "input-group-sm": A.size === "sm",
      "input-group-lg": A.size === "lg"
    })), g = y(() => !!A.append || !!A.appendHtml), D = y(() => !!A.prepend || !!A.prependHtml);
    return (N, L) => (T(), Z(EM(M.tag), {
      id: M.id,
      class: F(["input-group", e(I)]),
      role: "group"
    }, {
      default: h(() => [
        Q(N.$slots, "prepend", {}, () => [
          e(D) ? (T(), s("span", rb, [
            M.prependHtml ? (T(), s("span", {
              key: 0,
              innerHTML: M.prependHtml
            }, null, 8, db)) : (T(), s("span", Ub, P(M.prepend), 1))
          ])) : B("", !0)
        ]),
        Q(N.$slots, "default"),
        Q(N.$slots, "append", {}, () => [
          e(g) ? (T(), s("span", mb, [
            M.appendHtml ? (T(), s("span", {
              key: 0,
              innerHTML: M.appendHtml
            }, null, 8, Ob)) : (T(), s("span", hb, P(M.append), 1))
          ])) : B("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), DE = /* @__PURE__ */ v({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: null
  },
  setup(M) {
    return (A, I) => (T(), Z(EM(M.tag), { class: "input-group-text" }, {
      default: h(() => [
        Q(A.$slots, "default", {}, () => [
          IM(P(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), au = /* @__PURE__ */ v({
  __name: "BInputGroupAddon",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    const I = c(o(M, "isText"));
    return (g, D) => e(I) ? (T(), Z(DE, { key: 0 }, {
      default: h(() => [
        Q(g.$slots, "default")
      ]),
      _: 3
    })) : Q(g.$slots, "default", { key: 1 });
  }
}), Wb = /* @__PURE__ */ v({
  __name: "BInputGroupAppend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), Z(au, { "is-text": M.isText }, {
      default: h(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), kb = /* @__PURE__ */ v({
  __name: "BInputGroupPrepend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), Z(au, { "is-text": M.isText }, {
      default: h(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), NE = Symbol(), pb = /* @__PURE__ */ v({
  __name: "BListGroup",
  props: {
    flush: { default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = c(o(A, "flush")), g = c(o(A, "numbered")), D = y(() => {
      const L = I.value ? !1 : A.horizontal;
      return {
        "list-group-flush": I.value,
        "list-group-horizontal": L === !0,
        [`list-group-horizontal-${L}`]: typeof L == "string",
        "list-group-numbered": g.value
      };
    }), N = y(() => g.value === !0 ? "ol" : A.tag);
    return NI(NE, {
      numbered: g.value
    }), (L, t) => (T(), Z(EM(e(N)), {
      class: F(["list-group", e(D)])
    }, {
      default: h(() => [
        Q(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qb = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = ti(), g = tA(NE, null), D = c(o(A, "action")), N = c(o(A, "active")), L = c(o(A, "button")), t = c(o(A, "disabled")), j = y(() => !L.value && (!!A.href || !!A.to)), S = y(
      () => g != null && g.numbered ? "li" : L.value ? "button" : j.value ? zA : A.tag
    ), u = y(
      () => D.value || j.value || L.value || ["a", "router-link", "button", "b-link"].includes(A.tag)
    ), i = y(() => ({
      [`list-group-item-${A.variant}`]: A.variant !== void 0,
      "list-group-item-action": u.value,
      active: N.value,
      disabled: t.value
    })), C = y(() => {
      const w = {};
      return L.value && ((!I || !I.type) && (w.type = "button"), t.value && (w.disabled = !0)), w;
    });
    return (w, E) => (T(), Z(EM(e(S)), wM({
      class: ["list-group-item", e(i)],
      "aria-current": e(N) ? !0 : void 0,
      "aria-disabled": e(t) ? !0 : void 0,
      target: e(j) ? M.target : void 0,
      href: e(L) ? void 0 : M.href,
      to: e(L) ? void 0 : M.to
    }, e(C)), {
      default: h(() => [
        Q(w.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), QL = /* @__PURE__ */ v({
  __name: "BTransition",
  props: {
    appear: { default: !1 },
    mode: null,
    noFade: { default: !1 },
    transProps: null
  },
  setup(M) {
    const A = M, I = c(o(A, "appear")), g = c(o(A, "noFade")), D = y(() => {
      const t = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, j = {
        ...t,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return g.value ? t : j;
    }), N = y(() => ({ mode: A.mode, css: !0, ...D.value })), L = y(
      () => A.transProps !== void 0 ? {
        ...N.value,
        ...A.transProps
      } : I.value ? {
        ...N.value,
        appear: !0,
        appearActiveClass: D.value.enterActiveClass,
        appearToClass: D.value.enterToClass
      } : N.value
    );
    return (t, j) => (T(), Z(LL, qM(iA(e(L))), {
      default: h(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vb = ["id", "aria-labelledby", "aria-describedby", "onKeyup"], Gb = ["id"], fb = {
  inheritAttrs: !1
}, Jb = /* @__PURE__ */ v({
  ...fb,
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
    titleTag: { default: "h5" },
    static: { default: !1 }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "ok", "cancel"],
  setup(M, { emit: A }) {
    const I = M, g = jA(), D = NA(o(I, "id"), "modal"), N = c(o(I, "busy")), L = c(o(I, "lazy")), t = c(o(I, "cancelDisabled")), j = c(o(I, "centered")), S = c(o(I, "hideBackdrop")), u = c(o(I, "hideFooter")), i = c(o(I, "hideHeader")), C = c(o(I, "hideHeaderClose")), w = c(o(I, "modelValue")), E = c(o(I, "noCloseOnBackdrop")), x = c(o(I, "noCloseOnEsc")), n = c(o(I, "noFade")), a = c(o(I, "noFocus")), z = c(o(I, "okDisabled")), d = c(o(I, "okOnly")), Y = c(o(I, "scrollable")), U = c(o(I, "titleSrOnly")), k = c(o(I, "static")), G = DM(!1), r = DM(null), b = DM(!1), V = y(() => [
      I.modalClass,
      {
        fade: !n.value,
        show: G.value
      }
    ]), R = y(() => !lA(g["header-close"])), AM = y(() => [
      I.dialogClass,
      {
        "modal-fullscreen": I.fullscreen === !0,
        [`modal-fullscreen-${I.fullscreen}-down`]: typeof I.fullscreen == "string",
        [`modal-${I.size}`]: I.size !== void 0,
        "modal-dialog-centered": j.value,
        "modal-dialog-scrollable": Y.value
      }
    ]), LM = y(() => [
      I.bodyClass,
      {
        [`bg-${I.bodyBgVariant}`]: I.bodyBgVariant !== void 0,
        [`text-${I.bodyTextVariant}`]: I.bodyTextVariant !== void 0
      }
    ]), gM = y(() => [
      I.headerClass,
      {
        [`bg-${I.headerBgVariant}`]: I.headerBgVariant !== void 0,
        [`border-${I.headerBorderVariant}`]: I.headerBorderVariant !== void 0,
        [`text-${I.headerTextVariant}`]: I.headerTextVariant !== void 0
      }
    ]), oM = y(() => [
      I.footerClass,
      {
        [`bg-${I.footerBgVariant}`]: I.footerBgVariant !== void 0,
        [`border-${I.footerBorderVariant}`]: I.footerBorderVariant !== void 0,
        [`text-${I.footerTextVariant}`]: I.footerTextVariant !== void 0
      }
    ]), SM = y(() => [
      I.titleClass,
      {
        ["visually-hidden"]: U.value
      }
    ]), tM = y(() => t.value || N.value), CM = y(() => z.value || N.value), dM = () => A("update:modelValue", !1), bM = (_) => {
      !x.value && w.value && _.key === "Escape" && dM();
    }, vM = () => A("show"), fM = () => {
      G.value = !0, A("shown"), L.value === !0 && (b.value = !0);
    }, iM = () => A("hide"), zM = () => {
      G.value = !1;
    }, J = () => {
      A("hidden"), L.value === !0 && (b.value = !1);
    };
    return mM(
      () => w.value,
      (_) => {
        _ === !0 && !a.value && DI(() => {
          r.value !== null && r.value.focus();
        });
      }
    ), (_, $) => (T(), Z(oE, {
      to: "body",
      disabled: e(k)
    }, [
      W(QL, {
        "no-fade": !0,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: vM,
        onAfterEnter: fM,
        onBeforeLeave: iM,
        onLeave: zM,
        onAfterLeave: J
      }, {
        default: h(() => [
          VM(l("div", wM({
            id: e(D),
            ref_key: "element",
            ref: r,
            class: ["modal", e(V)],
            role: "dialog",
            "aria-labelledby": `${e(D)}-label`,
            "aria-describedby": `${e(D)}-body`,
            tabindex: "-1"
          }, _.$attrs, {
            onKeyup: Ni(bM, ["esc"])
          }), [
            l("div", {
              class: F(["modal-dialog", e(AM)])
            }, [
              !e(L) || e(L) && b.value || e(L) && e(w) === !0 ? (T(), s("div", {
                key: 0,
                class: F(["modal-content", M.contentClass])
              }, [
                e(i) ? B("", !0) : (T(), s("div", {
                  key: 0,
                  class: F(["modal-header", e(gM)])
                }, [
                  Q(_.$slots, "header", {}, () => [
                    (T(), Z(EM(M.titleTag), {
                      id: `${e(D)}-label`,
                      class: F(["modal-title", e(SM)])
                    }, {
                      default: h(() => [
                        Q(_.$slots, "title", {}, () => [
                          IM(P(M.title), 1)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    e(C) ? B("", !0) : (T(), s(MM, { key: 0 }, [
                      e(R) ? (T(), s("button", {
                        key: 0,
                        type: "button",
                        "data-bs-dismiss": "modal",
                        onClick: $[0] || ($[0] = (NM) => dM())
                      }, [
                        Q(_.$slots, "header-close", {}, void 0, !0)
                      ])) : (T(), Z(gD, {
                        key: 1,
                        "aria-label": M.headerCloseLabel,
                        "data-bs-dismiss": "modal",
                        white: M.headerCloseWhite,
                        onClick: $[1] || ($[1] = (NM) => dM())
                      }, null, 8, ["aria-label", "white"]))
                    ], 64))
                  ], !0)
                ], 2)),
                l("div", {
                  id: `${e(D)}-body`,
                  class: F(["modal-body", e(LM)])
                }, [
                  Q(_.$slots, "default", {}, void 0, !0)
                ], 10, Gb),
                e(u) ? B("", !0) : (T(), s("div", {
                  key: 1,
                  class: F(["modal-footer", e(oM)])
                }, [
                  Q(_.$slots, "footer", {}, () => [
                    Q(_.$slots, "cancel", {}, () => [
                      e(d) ? B("", !0) : (T(), Z(kD, {
                        key: 0,
                        type: "button",
                        class: "btn",
                        disabled: e(tM),
                        size: M.buttonSize,
                        variant: M.cancelVariant,
                        onClick: $[2] || ($[2] = (NM) => (dM(), A("cancel")))
                      }, {
                        default: h(() => [
                          IM(P(M.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], !0),
                    Q(_.$slots, "ok", {}, () => [
                      W(kD, {
                        type: "button",
                        class: "btn",
                        disabled: e(CM),
                        size: M.buttonSize,
                        variant: M.okVariant,
                        onClick: $[3] || ($[3] = (NM) => (dM(), A("ok")))
                      }, {
                        default: h(() => [
                          IM(P(M.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], !0)
                  ], !0)
                ], 2))
              ], 2)) : B("", !0)
            ], 2),
            e(S) ? B("", !0) : Q(_.$slots, "backdrop", { key: 0 }, () => [
              l("div", {
                class: "modal-backdrop fade show",
                onClick: $[4] || ($[4] = (NM) => !e(E) && dM())
              })
            ], !0)
          ], 16, vb), [
            [lE, e(w)]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
const Vb = /* @__PURE__ */ FM(Jb, [["__scopeId", "data-v-a14859b1"]]), Zb = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = c(o(A, "cardHeader")), g = c(o(A, "fill")), D = c(o(A, "justified")), N = c(o(A, "pills")), L = c(o(A, "small")), t = c(o(A, "tabs")), j = c(o(A, "vertical")), S = y(() => ({
      "nav-tabs": t.value,
      "nav-pills": N.value && !t.value,
      "card-header-tabs": !j.value && I.value && t.value,
      "card-header-pills": !j.value && I.value && N.value && !t.value,
      "flex-column": j.value,
      "nav-fill": !j.value && g.value,
      "nav-justified": !j.value && D.value,
      [`justify-content-${A.align}`]: !j.value && A.align !== void 0,
      small: L.value
    }));
    return (u, i) => (T(), Z(EM(M.tag), {
      class: F(["nav", e(S)])
    }, {
      default: h(() => [
        Q(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Bb = /* @__PURE__ */ v({
  __name: "BNavForm",
  props: {
    role: null,
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(M, { emit: A }) {
    const I = M, g = y(() => ({
      floating: I.floating,
      role: I.role,
      id: I.id,
      novalidate: I.novalidate,
      validated: I.validated
    })), D = (N) => A("submit", N);
    return (N, L) => (T(), Z(qw, wM(e(g), {
      class: "d-flex",
      onSubmit: FI(D, ["prevent"])
    }), {
      default: h(() => [
        Q(N.$slots, "default")
      ]),
      _: 3
    }, 16, ["onSubmit"]));
  }
}), Pb = v({
  components: { BLink: zA },
  props: {
    ...sL(Sg, ["event", "routerTag"])
  },
  setup(M) {
    return { disabledBoolean: c(o(M, "disabled")) };
  }
}), Fb = { class: "nav-item" };
function Xb(M, A, I, g, D, N) {
  const L = yM("b-link");
  return T(), s("li", Fb, [
    W(L, wM({ class: "nav-link" }, M.$props, {
      "active-class": "active",
      tabindex: M.disabledBoolean ? -1 : void 0,
      "aria-disabled": M.disabledBoolean ? !0 : void 0
    }), {
      default: h(() => [
        Q(M.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const Rb = /* @__PURE__ */ FM(Pb, [["render", Xb]]), Hb = { class: "nav-item dropdown" }, _b = /* @__PURE__ */ v({
  __name: "BNavItemDropdown",
  props: {
    id: null,
    text: null,
    toggleClass: null,
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
  setup(M) {
    const A = M;
    return (I, g) => (T(), s("li", Hb, [
      W($w, wM(A, { "is-nav": "" }), ji({ _: 2 }, [
        eM(I.$slots, (D, N, L) => ({
          name: N,
          fn: h((t) => [
            Q(I.$slots, N, qM(iA(t || {})))
          ])
        }))
      ]), 1040)
    ]));
  }
}), $b = { class: "navbar-text" }, qb = /* @__PURE__ */ v({
  __name: "BNavText",
  props: {
    text: null
  },
  setup(M) {
    return (A, I) => (T(), s("li", $b, [
      Q(A.$slots, "default", {}, () => [
        IM(P(M.text), 1)
      ])
    ]));
  }
}), Kb = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = c(o(A, "print")), g = c(o(A, "dark")), D = y(
      () => A.tag === "nav" ? void 0 : "navigation"
    ), N = y(
      () => typeof A.toggleable == "string" ? `navbar-expand-${A.toggleable}` : A.toggleable === !1 ? "navbar-expand" : void 0
    ), L = y(
      () => A.container === !0 ? "container" : "container-fluid"
    ), t = y(() => ({
      "d-print": I.value,
      [`sticky-${A.sticky}`]: A.sticky !== void 0,
      "navbar-dark": g.value,
      [`bg-${A.variant}`]: A.variant !== void 0,
      [`fixed-${A.fixed}`]: A.fixed !== void 0,
      [`${N.value}`]: N.value !== void 0
    }));
    return (j, S) => (T(), Z(EM(M.tag), {
      class: F(["navbar", e(t)]),
      role: e(D)
    }, {
      default: h(() => [
        M.container !== !1 ? (T(), s("div", {
          key: 0,
          class: F(e(L))
        }, [
          Q(j.$slots, "default")
        ], 2)) : Q(j.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), $S = sL(Sg, ["event", "routerTag"]), M3 = v({
  components: {
    BLink: zA
  },
  props: {
    tag: { type: String, default: "div" },
    ...$S
  },
  setup(M) {
    const A = y(() => WD(M)), I = y(
      () => A.value ? zA : M.tag
    );
    return {
      computedLinkProps: y(
        () => A.value ? _j(M, $S) : {}
      ),
      computedTag: I
    };
  }
});
function A3(M, A, I, g, D, N) {
  return T(), Z(EM(M.computedTag), wM({ class: "navbar-brand" }, M.computedLinkProps), {
    default: h(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const I3 = /* @__PURE__ */ FM(M3, [["render", A3]]), g3 = /* @__PURE__ */ v({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: !1 },
    justified: { default: !1 },
    small: { default: !1 },
    tag: { default: "ul" }
  },
  setup(M) {
    const A = M, I = c(o(A, "fill")), g = c(o(A, "justified")), D = c(o(A, "small")), N = y(() => ({
      "nav-fill": I.value,
      "nav-justified": g.value,
      [`justify-content-${A.align}`]: A.align !== void 0,
      small: D.value
    }));
    return (L, t) => (T(), s("ul", {
      class: F(["navbar-nav", e(N)])
    }, [
      Q(L.$slots, "default")
    ], 2));
  }
}), D3 = /* @__PURE__ */ l("span", { class: "navbar-toggler-icon" }, null, -1), N3 = /* @__PURE__ */ v({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: !1 },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "disabled")), D = y(() => ({
      disabled: g.value,
      "aria-label": I.label
    })), N = y(() => ({
      disabled: g.value
    })), L = (t) => {
      g.value || A("click", t);
    };
    return (t, j) => VM((T(), s("button", wM({
      class: ["navbar-toggler", e(N)],
      type: "button"
    }, e(D), { onClick: L }), [
      Q(t.$slots, "default", {}, () => [
        D3
      ])
    ], 16)), [
      [e(Eu), e(g) ? void 0 : M.target]
    ]);
  }
}), L3 = ["data-bs-backdrop", "data-bs-scroll"], t3 = {
  key: 0,
  class: "offcanvas-header"
}, j3 = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, u3 = { class: "offcanvas-body" }, S3 = { key: 1 }, i3 = /* @__PURE__ */ v({
  __name: "BOffcanvas",
  props: {
    dismissLabel: { default: "Close" },
    modelValue: { default: !1 },
    bodyScrolling: { default: !1 },
    backdrop: { default: !0 },
    placement: { default: "start" },
    title: null,
    noHeaderClose: { default: !1 },
    noHeader: { default: !1 }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "modelValue")), D = c(o(I, "bodyScrolling")), N = c(o(I, "backdrop")), L = c(o(I, "noHeaderClose")), t = c(o(I, "noHeader")), j = jA(), S = DM(), u = DM(), i = y(() => !lA(j.footer)), C = y(() => [`offcanvas-${I.placement}`]), w = () => {
      A("show"), A("update:modelValue", !0);
    }, E = () => {
      A("hide"), A("update:modelValue", !1);
    };
    return mM(
      () => g.value,
      (x) => {
        var n, a;
        x ? (n = u.value) == null || n.show(S.value) : (a = u.value) == null || a.hide();
      }
    ), MA(S, "shown.bs.offcanvas", () => A("shown")), MA(S, "hidden.bs.offcanvas", () => A("hidden")), MA(S, "show.bs.offcanvas", () => {
      w();
    }), MA(S, "hide.bs.offcanvas", () => {
      E();
    }), _M(() => {
      var x;
      u.value = new EI(S.value), g.value && ((x = u.value) == null || x.show(S.value));
    }), (x, n) => (T(), s("div", {
      ref_key: "element",
      ref: S,
      class: F(["offcanvas", e(C)]),
      tabindex: "-1",
      "aria-labelledby": "offcanvasLabel",
      "data-bs-backdrop": e(N),
      "data-bs-scroll": e(D)
    }, [
      e(t) ? B("", !0) : (T(), s("div", t3, [
        Q(x.$slots, "header", qM(iA({ visible: e(g), placement: M.placement, hide: E })), () => [
          l("h5", j3, [
            Q(x.$slots, "title", {}, () => [
              IM(P(M.title), 1)
            ])
          ]),
          e(L) ? B("", !0) : (T(), Z(gD, {
            key: 0,
            class: "text-reset",
            "data-bs-dismiss": "offcanvas",
            "aria-label": M.dismissLabel
          }, null, 8, ["aria-label"]))
        ])
      ])),
      l("div", u3, [
        Q(x.$slots, "default")
      ]),
      e(i) ? (T(), s("div", S3, [
        Q(x.$slots, "footer", qM(iA({ visible: e(g), placement: M.placement, hide: E })))
      ])) : B("", !0)
    ], 10, L3));
  }
}), e3 = /* @__PURE__ */ v({
  __name: "BOverlay",
  props: {
    bgColor: null,
    blur: { default: "2px" },
    fixed: { default: !1 },
    noCenter: { default: !1 },
    noFade: { default: !1 },
    noWrap: { default: !1 },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    rounded: { type: [Boolean, String], default: !1 },
    show: { default: !1 },
    spinnerSmall: { default: !1 },
    spinnerType: { default: "border" },
    spinnerVariant: null,
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 }
  },
  emits: ["click", "hidden", "shown"],
  setup(M, { emit: A }) {
    const I = M, g = { top: 0, left: 0, bottom: 0, right: 0 }, D = c(o(I, "fixed")), N = c(o(I, "noCenter")), L = c(o(I, "noWrap")), t = c(o(I, "show")), j = c(o(I, "spinnerSmall")), S = y(
      () => I.rounded === !0 || I.rounded === "" ? "rounded" : I.rounded === !1 ? "" : `rounded-${I.rounded}`
    ), u = y(
      () => I.variant && !I.bgColor ? `bg-${I.variant}` : ""
    ), i = y(() => t.value ? "true" : null), C = y(() => ({
      type: I.spinnerType || void 0,
      variant: I.spinnerVariant || void 0,
      small: j.value
    })), w = y(() => ({
      ...g,
      zIndex: I.zIndex || 10
    })), E = y(() => [
      "b-overlay",
      {
        "position-absolute": !L.value || !D.value,
        "position-fixed": L.value && D.value
      }
    ]), x = y(() => [u.value, S.value]), n = y(() => ({
      ...g,
      opacity: I.opacity,
      backgroundColor: I.bgColor || void 0,
      backdropFilter: blur ? `blur(${blur})` : void 0
    })), a = y(
      () => N.value ? g : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (z, d) => (T(), Z(EM(M.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": e(i)
    }, {
      default: h(() => [
        Q(z.$slots, "default"),
        W(QL, {
          "no-fade": M.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: d[1] || (d[1] = (Y) => A("shown")),
          onOnAfterLeave: d[2] || (d[2] = (Y) => A("hidden"))
        }, {
          default: h(() => [
            e(t) ? (T(), Z(EM(M.overlayTag), {
              key: 0,
              class: F(e(E)),
              style: QA(e(w)),
              onClick: d[0] || (d[0] = (Y) => A("click", Y))
            }, {
              default: h(() => [
                l("div", {
                  class: F(["position-absolute", e(x)]),
                  style: QA(e(n))
                }, null, 6),
                l("div", {
                  class: "position-absolute",
                  style: QA(e(a))
                }, [
                  Q(z.$slots, "overlay", qM(iA(e(C))), () => [
                    W(pL, qM(iA(e(C))), null, 16)
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : B("", !0)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), C3 = 5, LE = 20, tE = 0, BA = 3, w3 = "ellipsis-text", E3 = "first-text", T3 = "last-text", x3 = "next-text", a3 = "page", y3 = "prev-text", qS = (M) => Math.max(Vg(M) || LE, 1), KS = (M) => Math.max(Vg(M) || tE, 0), n3 = (M, A) => {
  const I = Vg(M) || 1;
  return I > A ? A : I < 1 ? 1 : I;
}, o3 = v({
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
    limit: { type: Number, default: C3 },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "\u203A" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: LE },
    pills: { type: [Boolean, String], default: !1 },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "\u2039" },
    size: { type: String, required: !1 },
    totalRows: { type: Number, default: tE }
  },
  emits: ["update:modelValue", "page-click"],
  setup(M, { emit: A, slots: I }) {
    const g = c(o(M, "disabled")), D = c(o(M, "firstNumber")), N = c(o(M, "hideEllipsis")), L = c(o(M, "hideGotoEndButtons")), t = c(o(M, "lastNumber")), j = c(o(M, "pills")), S = TY(o(M, "align")), u = y(
      () => Math.ceil(KS(M.totalRows) / qS(M.perPage))
    ), i = y(() => {
      let Y;
      return u.value - M.modelValue + 2 < M.limit && M.limit > BA ? Y = u.value - w.value + 1 : Y = M.modelValue - Math.floor(w.value / 2), Y < 1 ? Y = 1 : Y > u.value - w.value && (Y = u.value - w.value + 1), M.limit <= BA && t.value && u.value === Y + w.value - 1 && (Y = Math.max(Y - 1, 1)), Y;
    }), C = y(() => {
      const Y = u.value - M.modelValue;
      let U = !1;
      return Y + 2 < M.limit && M.limit > BA ? M.limit > BA && (U = !0) : M.limit > BA && (U = !!(!N.value || D.value)), i.value <= 1 && (U = !1), U && D.value && i.value < 4 && (U = !1), U;
    }), w = y(() => {
      let Y = M.limit;
      return u.value <= M.limit ? Y = u.value : M.modelValue < M.limit - 1 && M.limit > BA ? ((!N.value || t.value) && (Y = M.limit - (D.value ? 0 : 1)), Y = Math.min(Y, M.limit)) : u.value - M.modelValue + 2 < M.limit && M.limit > BA ? (!N.value || D.value) && (Y = M.limit - (t.value ? 0 : 1)) : M.limit > BA && (Y = M.limit - (N.value ? 0 : 2)), Y;
    }), E = y(() => {
      const Y = u.value - w.value;
      let U = !1;
      M.modelValue < M.limit - 1 && M.limit > BA ? (!N.value || t.value) && (U = !0) : M.limit > BA && (U = !!(!N.value || t.value)), i.value > Y && (U = !1);
      const k = i.value + w.value - 1;
      return U && t.value && k > u.value - 3 && (U = !1), U;
    }), x = fA({
      pageSize: qS(M.perPage),
      totalRows: KS(M.totalRows),
      numberOfPages: u.value
    }), n = (Y, U) => {
      if (U === M.modelValue)
        return;
      const { target: k } = Y, G = new cL("page-click", {
        cancelable: !0,
        vueTarget: this,
        target: k
      });
      A("page-click", G, U), !G.defaultPrevented && A("update:modelValue", U);
    }, a = y(() => M.size ? `pagination-${M.size}` : ""), z = y(() => j.value ? "b-pagination-pills" : "");
    mM(
      () => M.modelValue,
      (Y) => {
        const U = n3(Y, u.value);
        U !== M.modelValue && A("update:modelValue", U);
      }
    ), mM(x, (Y, U) => {
      Y != null && (U.pageSize !== Y.pageSize && U.totalRows === Y.totalRows || U.numberOfPages !== Y.numberOfPages && M.modelValue > U.numberOfPages) && A("update:modelValue", 1);
    });
    const d = y(() => {
      const Y = [];
      for (let U = 0; U < w.value; U++)
        Y.push({ number: i.value + U, classes: null });
      return Y;
    });
    return () => {
      const Y = [], U = d.value.map((gM) => gM.number), k = (gM) => gM === M.modelValue, G = M.modelValue < 1, r = M.align === "fill", b = (gM, oM, SM, tM, CM, dM) => {
        const bM = g.value || k(dM) || G || gM < 1 || gM > u.value, vM = gM < 1 ? 1 : gM > u.value ? u.value : gM, fM = { disabled: bM, page: vM, index: vM - 1 }, iM = pA(SM, fM, I) || tM || "";
        return sM(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: bM,
                "flex-fill": r,
                "d-flex": r && !bM
              },
              CM
            ]
          },
          sM(
            bM ? "span" : "button",
            {
              class: ["page-link", { "flex-grow-1": !bM && r }],
              "aria-label": oM,
              "aria-controls": M.ariaControls || null,
              "aria-disabled": bM ? "true" : null,
              role: "menuitem",
              type: bM ? null : "button",
              tabindex: bM ? null : "-1",
              onClick: (zM) => {
                bM || n(zM, vM);
              }
            },
            iM
          )
        );
      }, V = (gM) => sM(
        "li",
        {
          class: [
            "page-item",
            "disabled",
            "bv-d-xs-down-none",
            r ? "flex-fill" : "",
            M.ellipsisClass
          ],
          role: "separator",
          key: `ellipsis-${gM ? "last" : "first"}`
        },
        [
          sM(
            "span",
            { class: ["page-link"] },
            pA(w3, {}, I) || M.ellipsisText || "..."
          )
        ]
      ), R = (gM, oM) => {
        const SM = k(gM.number) && !G, tM = g.value ? null : SM || G && oM === 0 ? "0" : "-1", CM = {
          active: SM,
          disabled: g.value,
          page: gM.number,
          index: gM.number - 1,
          content: gM.number
        }, dM = pA(a3, CM, I) || gM.number, bM = sM(
          g.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !g.value && r }],
            "aria-controls": M.ariaControls || null,
            "aria-disabled": g.value ? "true" : null,
            "aria-label": M.labelPage ? `${M.labelPage} ${gM.number}` : null,
            role: "menuitemradio",
            type: g.value ? null : "button",
            tabindex: tM,
            onClick: (vM) => {
              g.value || n(vM, gM.number);
            }
          },
          dM
        );
        return sM(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: g.value,
                active: SM,
                "flex-fill": r,
                "d-flex": r && !g.value
              },
              M.pageClass
            ],
            role: "presentation",
            key: `page-${gM.number}`
          },
          bM
        );
      };
      if (!L.value && !D.value) {
        const gM = b(
          1,
          M.labelFirstPage,
          E3,
          M.firstText,
          M.firstClass,
          1
        );
        Y.push(gM);
      }
      const AM = b(
        M.modelValue - 1,
        M.labelFirstPage,
        y3,
        M.prevText,
        M.prevClass,
        1
      );
      Y.push(AM), D.value && U[0] !== 1 && Y.push(R({ number: 1 }, 0)), C.value && Y.push(V(!1)), d.value.forEach((gM, oM) => {
        const SM = C.value && D.value && U[0] !== 1 ? 1 : 0;
        Y.push(R(gM, oM + SM));
      }), E.value && Y.push(V(!0)), t.value && U[U.length - 1] !== u.value && Y.push(R({ number: u.value }, -1));
      const LM = b(
        M.modelValue + 1,
        M.labelNextPage,
        x3,
        M.nextText,
        M.nextClass,
        u.value
      );
      if (Y.push(LM), !t.value && !L.value) {
        const gM = b(
          u.value,
          M.labelLastPage,
          T3,
          M.lastText,
          M.lastClass,
          u.value
        );
        Y.push(gM);
      }
      return sM(
        "ul",
        {
          class: ["pagination", a.value, S.value, z.value],
          role: "menubar",
          "aria-disabled": g.value,
          "aria-label": M.ariaLabel || null
        },
        Y
      );
    };
  }
}), UA = /* @__PURE__ */ v({
  __name: "BPlaceholder",
  props: {
    tag: { default: "span" },
    width: null,
    cols: null,
    variant: null,
    size: null,
    animation: null
  },
  setup(M) {
    const A = M, I = y(
      () => A.width === void 0 ? void 0 : typeof A.width == "number" ? A.width.toString() : A.width.includes("%") ? A.width.replaceAll("%", "") : A.width
    ), g = y(
      () => A.cols === void 0 ? void 0 : typeof A.cols == "number" ? A.cols.toString() : A.cols
    ), D = y(() => ({
      [`col-${g.value}`]: g.value !== void 0 && I.value === void 0,
      [`bg-${A.variant}`]: A.variant !== void 0,
      [`placeholder-${A.size}`]: A.size !== void 0,
      [`placeholder-${A.animation}`]: A.animation !== void 0
    })), N = y(
      () => I.value === void 0 ? void 0 : `width: ${I.value}%;`
    );
    return (L, t) => (T(), Z(EM(M.tag), {
      class: F(["placeholder", e(D)]),
      style: QA(e(N))
    }, null, 8, ["class", "style"]));
  }
}), jE = /* @__PURE__ */ v({
  __name: "BPlaceholderButton",
  props: {
    tag: { default: "div" },
    width: null,
    cols: null,
    variant: { default: "primary" },
    animation: null
  },
  setup(M) {
    const A = M, I = y(() => ["btn", `btn-${A.variant}`, "disabled"]), g = y(() => ({
      animation: A.animation,
      width: A.width,
      cols: A.cols,
      tag: A.tag
    }));
    return (D, N) => (T(), Z(UA, wM({ class: e(I) }, e(g)), null, 16, ["class"]));
  }
}), l3 = /* @__PURE__ */ v({
  __name: "BPlaceholderCard",
  props: {
    noHeader: { default: !1 },
    headerWidth: { default: 100 },
    headerVariant: null,
    headerAnimation: null,
    headerSize: null,
    noFooter: { default: !1 },
    footerWidth: { default: 100 },
    footerVariant: null,
    footerAnimation: null,
    footerSize: null,
    animation: null,
    size: null,
    variant: null,
    noButton: { default: !1 },
    imgBottom: { default: !1 },
    imgSrc: null,
    imgBlankColor: { default: "#868e96" },
    imgHeight: { default: 100 },
    noImg: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(o(A, "noButton")), g = c(o(A, "noHeader")), D = c(o(A, "noFooter")), N = c(o(A, "noImg")), L = y(() => ({
      width: A.headerWidth,
      variant: A.headerVariant,
      animation: A.headerAnimation,
      size: A.headerSize
    })), t = y(() => ({
      width: A.footerWidth,
      animation: A.footerAnimation,
      size: I.value ? A.footerSize : void 0,
      variant: A.footerVariant
    })), j = y(() => ({
      blank: !A.imgSrc,
      blankColor: A.imgBlankColor,
      height: A.imgSrc ? void 0 : A.imgHeight,
      src: A.imgSrc,
      top: !A.imgBottom,
      bottom: A.imgBottom
    }));
    return (S, u) => (T(), Z(Hw, { "img-bottom": M.imgBottom }, ji({
      default: h(() => [
        Q(S.$slots, "default", {}, () => [
          W(UA, { cols: "7" }),
          W(UA, { cols: "4" }),
          W(UA, { cols: "4" }),
          W(UA, { cols: "6" }),
          W(UA, { cols: "8" })
        ])
      ]),
      _: 2
    }, [
      e(N) ? void 0 : {
        name: "img",
        fn: h(() => [
          Q(S.$slots, "img", {}, () => [
            W(DL, qM(iA(e(j))), null, 16)
          ])
        ]),
        key: "0"
      },
      e(g) ? void 0 : {
        name: "header",
        fn: h(() => [
          Q(S.$slots, "header", {}, () => [
            W(UA, qM(iA(e(L))), null, 16)
          ])
        ]),
        key: "1"
      },
      e(D) ? void 0 : {
        name: "footer",
        fn: h(() => [
          Q(S.$slots, "footer", {}, () => [
            e(I) ? (T(), Z(UA, qM(wM({ key: 1 }, e(t))), null, 16)) : (T(), Z(jE, qM(wM({ key: 0 }, e(t))), null, 16))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
}), vL = /* @__PURE__ */ v({
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
    tableVariant: null,
    stickyHeader: { default: !1 }
  },
  setup(M) {
    const A = M, I = c(o(A, "captionTop")), g = c(o(A, "borderless")), D = c(o(A, "bordered")), N = c(o(A, "dark")), L = c(o(A, "hover")), t = c(o(A, "small")), j = c(o(A, "striped")), S = c(o(A, "stickyHeader")), u = y(() => [
      "table",
      "b-table",
      {
        "table-bordered": D.value,
        "table-borderless": g.value,
        [`border-${A.borderVariant}`]: A.borderVariant !== void 0,
        "caption-top": I.value,
        "table-dark": N.value,
        "table-hover": L.value,
        "b-table-stacked": typeof A.stacked == "boolean" && A.stacked,
        [`b-table-stacked-${A.stacked}`]: typeof A.stacked == "string",
        "table-striped": j.value,
        "table-sm": t.value,
        [`table-${A.tableVariant}`]: A.tableVariant !== void 0
      },
      A.tableClass
    ]), i = y(() => [
      {
        "table-responsive": A.responsive === !0,
        [`table-responsive-${A.responsive}`]: typeof A.responsive == "string",
        "b-table-sticky-header": S.value
      }
    ]);
    return (C, w) => M.responsive ? (T(), s("div", {
      key: 1,
      class: F(e(i))
    }, [
      l("table", {
        role: "table",
        class: F(e(u))
      }, [
        Q(C.$slots, "default")
      ], 2)
    ], 2)) : (T(), s("table", {
      key: 0,
      role: "table",
      class: F(e(u))
    }, [
      Q(C.$slots, "default")
    ], 2));
  }
}), s3 = /* @__PURE__ */ v({
  __name: "BPlaceholderTable",
  props: {
    rows: { default: 3 },
    columns: { default: 5 },
    cellWidth: { default: 100 },
    size: null,
    animation: null,
    variant: null,
    headerColumns: null,
    hideHeader: { default: !1 },
    headerCellWidth: { default: 100 },
    headerSize: null,
    headerAnimation: null,
    headerVariant: null,
    footerColumns: null,
    showFooter: { default: !1 },
    footerCellWidth: { default: 100 },
    footerSize: null,
    footerAnimation: null,
    footerVariant: null
  },
  setup(M) {
    const A = M, I = y(
      () => typeof A.columns == "string" ? iD(A.columns, 5) : A.columns
    ), g = y(
      () => typeof A.rows == "string" ? iD(A.rows, 3) : A.rows
    ), D = y(
      () => A.headerColumns === void 0 ? I.value : typeof A.headerColumns == "string" ? iD(A.headerColumns, I.value) : A.headerColumns
    ), N = y(
      () => A.footerColumns === void 0 ? I.value : typeof A.footerColumns == "string" ? iD(A.footerColumns, I.value) : A.footerColumns
    ), L = y(() => ({
      size: A.size,
      variant: A.variant,
      animation: A.animation,
      width: A.cellWidth
    })), t = y(() => ({
      size: A.headerSize,
      variant: A.headerVariant,
      animation: A.headerAnimation,
      width: A.headerCellWidth
    })), j = y(() => ({
      size: A.footerSize,
      variant: A.footerVariant,
      animation: A.footerAnimation,
      width: A.footerCellWidth
    })), S = c(o(A, "hideHeader")), u = c(o(A, "showFooter"));
    return (i, C) => (T(), Z(vL, null, {
      default: h(() => [
        e(S) ? B("", !0) : Q(i.$slots, "thead", { key: 0 }, () => [
          l("thead", null, [
            l("tr", null, [
              (T(!0), s(MM, null, eM(e(D), (w, E) => (T(), s("th", { key: E }, [
                W(UA, qM(iA(e(t))), null, 16)
              ]))), 128))
            ])
          ])
        ]),
        Q(i.$slots, "default", {}, () => [
          l("tbody", null, [
            (T(!0), s(MM, null, eM(e(g), (w, E) => (T(), s("tr", { key: E }, [
              (T(!0), s(MM, null, eM(e(I), (x, n) => (T(), s("td", { key: n }, [
                W(UA, qM(iA(e(L))), null, 16)
              ]))), 128))
            ]))), 128))
          ])
        ]),
        e(u) ? Q(i.$slots, "tfoot", { key: 1 }, () => [
          l("tfoot", null, [
            l("tr", null, [
              (T(!0), s(MM, null, eM(e(N), (w, E) => (T(), s("th", { key: E }, [
                W(UA, qM(iA(e(j))), null, 16)
              ]))), 128))
            ])
          ])
        ]) : B("", !0)
      ]),
      _: 3
    }));
  }
}), c3 = /* @__PURE__ */ v({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = c(o(M, "loading"));
    return (g, D) => e(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), z3 = v({
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
  setup(M, { emit: A, slots: I }) {
    c(o(M, "noninteractive"));
    const g = c(o(M, "show")), D = c(o(M, "html")), N = c(o(M, "sanitize")), L = DM(), t = DM(), j = DM(), S = DM(), u = DM(), i = y(() => ({
      [`b-popover-${M.variant}`]: M.variant !== void 0
    })), C = (x) => {
      if (typeof x == "string")
        return x;
      if (x instanceof HTMLElement)
        return x;
      if (typeof x < "u")
        return x.$el;
    }, w = (x) => {
      if (!!x) {
        if (typeof x == "string") {
          const n = document.getElementById(x);
          return n || void 0;
        }
        return x;
      }
    }, E = (x) => {
      t.value = w(C(x)), t.value && (j.value = new _g(t.value, {
        customClass: M.customClass,
        container: C(M.container),
        trigger: M.triggers,
        placement: M.placement,
        title: M.title || I.title ? S.value : "",
        content: u.value,
        html: D.value,
        delay: M.delay,
        sanitize: N.value,
        offset: M.offset
      }));
    };
    return mM(
      () => M.target,
      (x) => {
        var n;
        (n = j.value) == null || n.dispose(), E(x);
      }
    ), mM(
      () => g.value,
      (x, n) => {
        var a, z;
        x !== n && (x ? (a = j.value) == null || a.show() : (z = j.value) == null || z.hide());
      }
    ), MA(t, "show.bs.popover", () => A("show")), MA(t, "shown.bs.popover", () => A("shown")), MA(t, "hide.bs.popover", () => A("hide")), MA(t, "hidden.bs.popover", () => A("hidden")), MA(t, "inserted.bs.popover", () => A("inserted")), _M(() => {
      var x, n, a;
      DI(() => {
        E(M.target);
      }), (n = (x = L.value) == null ? void 0 : x.parentNode) == null || n.removeChild(L.value), g.value && ((a = j.value) == null || a.show());
    }), aj(() => {
      var x;
      (x = j.value) == null || x.dispose();
    }), {
      element: L,
      titleRef: S,
      contentRef: u,
      computedClasses: i
    };
  }
}), Y3 = ["id"], r3 = { ref: "titleRef" }, d3 = { ref: "contentRef" };
function U3(M, A, I, g, D, N) {
  return T(), s("div", {
    id: M.id,
    ref: "element",
    class: F(["popover b-popover", M.computedClasses]),
    role: "tooltip",
    tabindex: "-1"
  }, [
    l("div", r3, [
      Q(M.$slots, "title", {}, () => [
        IM(P(M.title), 1)
      ])
    ], 512),
    l("div", d3, [
      Q(M.$slots, "default", {}, () => [
        IM(P(M.content), 1)
      ])
    ], 512)
  ], 10, Y3);
}
const m3 = /* @__PURE__ */ FM(z3, [["render", U3]]), O3 = ["aria-valuenow", "aria-valuemax"], uE = /* @__PURE__ */ v({
  __name: "BProgressBar",
  props: {
    animated: { default: !1 },
    label: null,
    labelHtml: null,
    max: null,
    precision: { default: 0 },
    showProgress: { default: !1 },
    showValue: { default: !1 },
    striped: { default: !1 },
    value: { default: 0 },
    variant: null
  },
  setup(M) {
    const A = M, I = tA(SE), g = c(o(A, "animated")), D = c(o(A, "showProgress")), N = c(o(A, "showValue")), L = c(o(A, "striped")), t = y(() => ({
      "progress-bar-animated": g.value || (I == null ? void 0 : I.animated),
      "progress-bar-striped": L.value || (I == null ? void 0 : I.striped) || g.value || (I == null ? void 0 : I.animated),
      [`bg-${A.variant}`]: A.variant !== void 0
    })), j = y(
      () => typeof A.precision == "number" ? A.precision : Number.parseFloat(A.precision)
    ), S = y(
      () => typeof A.value == "number" ? A.value : Number.parseFloat(A.value)
    ), u = y(
      () => typeof A.max == "number" ? A.max : A.max === void 0 ? void 0 : Number.parseFloat(A.max)
    ), i = y(
      () => A.labelHtml !== void 0 ? A.labelHtml : N.value || (I == null ? void 0 : I.showValue) ? S.value.toFixed(j.value) : D.value || (I == null ? void 0 : I.showProgress) ? (S.value * 100 / (u.value || 100)).toFixed(j.value) : A.label !== void 0 ? A.label : ""
    ), C = y(
      () => I != null && I.max ? `${S.value * 100 / (typeof I.max == "number" ? I.max : Number.parseInt(I.max))}%` : A.max ? `${S.value * 100 / (typeof A.max == "number" ? A.max : Number.parseInt(A.max))}%` : typeof A.value == "string" ? A.value : `${A.value}%`
    );
    return (w, E) => (T(), s("div", {
      class: F(["progress-bar", e(t)]),
      role: "progressbar",
      "aria-valuenow": M.value,
      "aria-valuemin": "0",
      "aria-valuemax": M.max,
      style: QA({ width: e(C) })
    }, [
      Q(w.$slots, "default", {}, () => [
        IM(P(e(i)), 1)
      ])
    ], 14, O3));
  }
}), SE = Symbol(), h3 = /* @__PURE__ */ v({
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
  setup(M) {
    const A = M, I = c(o(A, "animated")), g = c(o(A, "showProgress")), D = c(o(A, "showValue")), N = c(o(A, "striped")), L = y(() => ({
      animated: A.animated,
      max: A.max,
      precision: A.precision,
      showProgress: A.showProgress,
      showValue: A.showValue,
      striped: A.striped,
      value: A.value,
      variant: A.variant
    }));
    return NI(SE, {
      animated: I.value,
      max: A.max,
      showProgress: g.value,
      showValue: D.value,
      striped: N.value
    }), (t, j) => (T(), s("div", {
      class: "progress",
      style: QA({ height: M.height })
    }, [
      Q(t.$slots, "default", {}, () => [
        W(uE, qM(iA(e(L))), null, 16)
      ])
    ], 4));
  }
}), Mi = rL("cols", [""], { type: [String, Number], default: null }), b3 = v({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: !1 },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...Mi
  },
  setup(M) {
    const A = c(o(M, "noGutters")), I = y(() => zC(M, Mi, "cols", "row-cols"));
    return {
      computedClasses: y(() => [
        I.value,
        {
          [`gx-${M.gutterX}`]: M.gutterX !== null,
          [`gy-${M.gutterY}`]: M.gutterY !== null,
          "g-0": A.value,
          [`align-items-${M.alignV}`]: M.alignV !== null,
          [`justify-content-${M.alignH}`]: M.alignH !== null,
          [`align-content-${M.alignContent}`]: M.alignContent !== null
        }
      ])
    };
  }
});
function W3(M, A, I, g, D, N) {
  return T(), Z(EM(M.tag), {
    class: F(["row", M.computedClasses])
  }, {
    default: h(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k3 = /* @__PURE__ */ FM(b3, [["render", W3]]), hN = /* @__PURE__ */ v({
  __name: "BSkeleton",
  props: {
    height: null,
    width: null,
    size: null,
    animation: { default: "wave" },
    type: { default: "text" },
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => [
      `b-skeleton-${A.type}`,
      {
        [`b-skeleton-animate-${A.animation}`]: typeof A.animation == "boolean" ? !1 : A.animation,
        [`bg-${A.variant}`]: A.variant !== void 0
      }
    ]), g = y(() => ({
      width: A.size || A.width,
      height: A.size || A.height
    }));
    return (D, N) => (T(), s("div", {
      class: F(["b-skeleton", e(I)]),
      style: QA(e(g))
    }, null, 6));
  }
}), p3 = /* @__PURE__ */ v({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(M) {
    const A = M, I = y(() => [`b-skeleton-animate-${A.animation}`]);
    return (g, D) => (T(), s("div", {
      class: F(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", e(I)])
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), Q3 = { key: 0 }, v3 = { key: 1 }, G3 = /* @__PURE__ */ v({
  __name: "BSkeletonTable",
  props: {
    animation: { default: "wave" },
    columns: { default: 5 },
    hideHeader: { default: !1 },
    rows: { default: 3 },
    showFooter: { default: !1 },
    tableProps: null
  },
  setup(M) {
    const A = M, I = c(o(A, "hideHeader")), g = c(o(A, "showFooter"));
    return (D, N) => (T(), Z(vL, qM(iA(M.tableProps)), {
      default: h(() => [
        e(I) ? B("", !0) : (T(), s("thead", Q3, [
          l("tr", null, [
            (T(!0), s(MM, null, eM(M.columns, (L, t) => (T(), s("th", { key: t }, [
              W(hN)
            ]))), 128))
          ])
        ])),
        l("tbody", null, [
          (T(!0), s(MM, null, eM(M.rows, (L, t) => (T(), s("tr", { key: t }, [
            (T(!0), s(MM, null, eM(M.columns, (j, S) => (T(), s("td", { key: S }, [
              W(hN, { width: "75%" })
            ]))), 128))
          ]))), 128))
        ]),
        e(g) ? (T(), s("tfoot", v3, [
          l("tr", null, [
            (T(!0), s(MM, null, eM(M.columns, (L, t) => (T(), s("th", { key: t }, [
              W(hN)
            ]))), 128))
          ])
        ])) : B("", !0)
      ]),
      _: 1
    }, 16));
  }
}), f3 = /* @__PURE__ */ v({
  __name: "BSkeletonWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = c(o(M, "loading"));
    return (g, D) => e(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), J3 = ["TD", "TH", "TR"], V3 = [
  "a",
  "a *",
  "button",
  "button *",
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(","), CN = (M) => {
  if (!M || !M.target)
    return !1;
  const A = M.target;
  if ("disabled" in A && A.disabled || J3.indexOf(A.tagName) !== -1)
    return !1;
  if (LS(".dropdown-menu", A))
    return !0;
  const I = A.tagName === "LABEL" ? A : LS("label", A);
  if (I) {
    const g = Hj(I, "for"), D = g ? QY(g) : sC("input, select, textarea", I);
    if (D && !D.disabled)
      return !0;
  }
  return cC(A, V3);
}, Z3 = () => {
  const M = (t, j) => {
    const S = [];
    return !(t != null && t.length) && (j == null ? void 0 : j.length) ? (Object.keys(j[0]).forEach((u) => S.push({ key: u, label: DS(u) })), S) : (Array.isArray(t) && t.forEach((u) => {
      typeof u == "string" ? S.push({ key: u, label: DS(u) }) : xY(u) && u.key && typeof u.key == "string" && S.push({ ...u });
    }), S);
  }, A = DM([]), I = (t, j, S, u) => {
    if (A.value = qN(j), "isFilterableTable" in u && u.isFilterableTable.value === !0 && S.filter && (A.value = N(A.value, S.filter, S.filterable), g.value && g.value(A.value)), "isSortable" in u && u.isSortable.value === !0 && (A.value = D(
      t,
      A.value,
      {
        key: S.sortBy,
        desc: u.sortDescBoolean.value
      },
      S.sortCompare
    )), S.perPage !== void 0) {
      const i = (S.currentPage - 1) * S.perPage;
      A.value = A.value.splice(i, S.perPage);
    }
    return A.value;
  }, g = DM(void 0), D = (t, j, S, u) => {
    if (!S || !S.key)
      return j;
    const i = S.key;
    return j.sort((C, w) => {
      if (u !== void 0)
        return u(C, w, S.key, S.desc);
      const E = (a) => typeof a == "object" ? JSON.stringify(a) : a;
      return E(C[i]) > E(w[i]) ? S.desc ? -1 : 1 : E(w[i]) > E(C[i]) ? S.desc ? 1 : -1 : 0;
    });
  }, N = (t, j, S) => t.filter(
    (u) => Object.entries(u).filter((i) => {
      const [C, w] = i;
      return C[0] === "_" || S.length > 0 && !S.includes(C) ? !1 : (typeof w == "object" ? JSON.stringify(Object.values(w)) : typeof w == "string" ? w : w.toString()).toLowerCase().includes(j.toLowerCase());
    }).length > 0
  );
  return {
    normaliseFields: M,
    mapItems: I,
    internalItems: A,
    updateInternalItems: async (t) => {
      try {
        return A.value = await gj(t), A.value;
      } catch {
        return;
      }
    },
    filterEvent: g
  };
}, B3 = ["title", "abbr", "onClick"], P3 = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, F3 = { key: 1 }, X3 = ["onClick", "onDblclick", "onMouseenter", "onMouseleave"], R3 = ["colspan"], H3 = ["colspan"], _3 = { class: "d-flex align-items-center justify-content-center gap-2" }, $3 = /* @__PURE__ */ l("strong", null, "Loading...", -1), q3 = {
  key: 1,
  class: "b-table-empty-slot"
}, K3 = ["colspan"], MW = { key: 0 }, AW = ["title", "abbr", "onClick"], IW = { key: 1 }, gW = { key: 2 }, DW = { key: 3 }, NW = /* @__PURE__ */ v({
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
    provider: null,
    sortCompare: null,
    noProvider: null,
    noProviderPaging: null,
    noProviderSorting: null,
    noProviderFiltering: null,
    responsive: { type: [Boolean, String], default: !1 },
    small: { default: !1 },
    striped: { default: !1 },
    variant: null,
    sortBy: null,
    sortDesc: { default: !1 },
    sortInternal: { default: !0 },
    selectable: { default: !1 },
    stickySelect: { default: !1 },
    selectHead: { type: [Boolean, String], default: !0 },
    selectMode: { default: "single" },
    selectionVariant: { default: "primary" },
    stickyHeader: { default: !1 },
    busy: { default: !1 },
    showEmpty: { default: !1 },
    perPage: null,
    currentPage: { default: 1 },
    filter: null,
    filterable: null,
    emptyText: { default: "There are no records to show" },
    emptyFilteredText: { default: "There are no records matching your request" }
  },
  emits: ["headClicked", "rowClicked", "rowDblClicked", "rowHovered", "rowUnhovered", "rowSelected", "rowUnselected", "selection", "update:busy", "update:sortBy", "update:sortDesc", "sorted", "filtered"],
  setup(M, { expose: A, emit: I }) {
    const g = M, D = jA(), N = Z3(), L = c(o(g, "footClone")), t = c(o(g, "sortDesc")), j = c(o(g, "sortInternal")), S = c(o(g, "selectable")), u = c(o(g, "stickySelect")), i = c(o(g, "busy")), C = c(o(g, "showEmpty")), w = c(o(g, "showEmpty")), E = c(o(g, "showEmpty")), x = c(o(g, "showEmpty")), n = DM(i.value);
    N.filterEvent.value = async (p) => {
      if (r.value) {
        await fM();
        return;
      }
      const q = await gj(p);
      I("filtered", q);
    };
    const a = DM(/* @__PURE__ */ new Set([])), z = y(() => a.value.size > 0), d = y(() => ({
      [`align-${g.align}`]: g.align !== void 0,
      "b-table-selectable": S.value,
      [`b-table-select-${g.selectMode}`]: S.value,
      "b-table-selecting user-select-none": S.value && z.value,
      "b-table-busy": n.value,
      "b-table-sortable": V.value,
      "b-table-sort-desc": V.value && t.value === !0,
      "b-table-sort-asc": V.value && t.value === !1
    })), Y = y(() => ({
      bordered: g.bordered,
      borderless: g.borderless,
      borderVariant: g.borderVariant,
      captionTop: g.captionTop,
      dark: g.dark,
      hover: g.hover,
      responsive: g.responsive,
      striped: g.striped,
      small: g.small,
      tableClass: d.value,
      tableVariant: g.variant,
      stickyHeader: g.stickyHeader
    })), U = y(() => N.normaliseFields(g.fields, g.items)), k = y(
      () => U.value.length + (S.value ? 1 : 0)
    ), G = y(() => g.filter !== void 0 && g.filter !== ""), r = y(() => g.provider !== void 0), b = y(
      () => S.value && (!!g.selectHead || D.selectHead !== void 0)
    ), V = y(
      () => g.fields.filter((p) => typeof p == "string" ? !1 : p.sortable).length > 0
    ), R = y(() => V.value && j.value === !0), AM = y(() => r.value ? N.internalItems.value : R.value ? N.mapItems(g.fields, g.items, g, {
      isSortable: V,
      isFilterableTable: G,
      sortDescBoolean: t
    }) : g.items), LM = (p) => typeof p == "string" ? NS(p) : p.label !== void 0 ? p.label : typeof p.key == "string" ? NS(p.key) : p.key, gM = (p, q, YM = !1) => {
      const H = typeof p == "string" ? p : p.key;
      I("headClicked", H, p, q, YM), dM(p);
    }, oM = (p, q, YM) => {
      I("rowClicked", p, q, YM), vM(p, q, YM.shiftKey);
    }, SM = (p, q, YM) => I("rowDblClicked", p, q, YM), tM = (p, q, YM) => I("rowHovered", p, q, YM), CM = (p, q, YM) => I("rowUnhovered", p, q, YM), dM = (p) => {
      if (!V.value)
        return;
      const q = typeof p == "string" ? p : p.key, YM = typeof p == "string" ? !1 : p.sortable;
      if (V.value === !0 && YM === !0) {
        const H = !t.value;
        q !== g.sortBy && I("update:sortBy", q), I("update:sortDesc", H), I("sorted", q, H);
      }
    }, bM = () => {
      !S.value || I("selection", Array.from(a.value));
    }, vM = (p, q, YM = !1) => {
      if (!!S.value) {
        if (a.value.has(p))
          a.value.delete(p), I("rowUnselected", p);
        else if (g.selectMode === "single" && a.value.size > 0 && (a.value.forEach((H) => I("rowUnselected", H)), a.value.clear()), g.selectMode === "range" && a.value.size > 0 && YM) {
          const H = Array.from(a.value).pop(), gA = AM.value.findIndex((KA) => KA === H), QM = Math.min(gA, q), DD = Math.max(gA, q);
          AM.value.slice(QM, DD + 1).forEach((KA) => {
            a.value.has(KA) || (a.value.add(KA), I("rowSelected", KA));
          });
        } else
          a.value.add(p), I("rowSelected", p);
        bM();
      }
    }, fM = async () => {
      if (!r.value || !g.provider || n.value)
        return;
      n.value = !0;
      const p = new Proxy(
        {
          currentPage: g.currentPage,
          filter: g.filter,
          sortBy: g.sortBy,
          sortDesc: g.sortDesc,
          perPage: g.perPage
        },
        {
          get(YM, H) {
            return H in YM ? YM[H] : void 0;
          },
          set() {
            return console.error("BTable provider context is a read-only object."), !0;
          }
        }
      ), q = g.provider(p, N.updateInternalItems);
      if (q !== void 0) {
        if (q instanceof Promise)
          try {
            const YM = await q;
            return Array.isArray(YM) ? await N.updateInternalItems(YM) : void 0;
          } finally {
            n.value && (n.value = !1);
          }
        try {
          return await N.updateInternalItems(q);
        } finally {
          n.value && (n.value = !1);
        }
      }
    }, iM = (p) => {
      p._showDetails = !p._showDetails;
    }, zM = (p) => [
      p.class,
      p.thClass,
      p.variant ? `table-${p.variant}` : void 0,
      {
        "b-table-sortable-column": V.value && p.sortable,
        "b-table-sticky-column": p.stickyColumn
      }
    ], J = (p, q) => [
      p.class,
      p.tdClass,
      p.variant ? `table-${p.variant}` : void 0,
      (q == null ? void 0 : q._cellVariants) && (q == null ? void 0 : q._cellVariants[p.key]) ? `table-${q == null ? void 0 : q._cellVariants[p.key]}` : void 0,
      {
        "b-table-sticky-column": p.stickyColumn
      }
    ], _ = (p) => [
      p._rowVariant ? `table-${p._rowVariant}` : null,
      p._rowVariant ? `table-${p._rowVariant}` : null,
      S.value && a.value.has(p) ? `selected table-${g.selectionVariant}` : null
    ], $ = () => {
      if (!S.value)
        return;
      const p = a.value.size > 0 ? Array.from(a.value) : [];
      a.value = /* @__PURE__ */ new Set([...AM.value]), a.value.forEach((q) => {
        p.includes(q) || I("rowSelected", q);
      }), bM();
    }, NM = () => {
      !S.value || (a.value.forEach((p) => {
        I("rowUnselected", p);
      }), a.value = /* @__PURE__ */ new Set([]), bM());
    }, hM = (p) => {
      if (!S.value)
        return;
      const q = AM.value[p];
      !q || a.value.has(q) || (a.value.add(q), I("rowSelected", q), bM());
    }, BM = (p) => {
      if (!S.value)
        return;
      const q = AM.value[p];
      !q || !a.value.has(q) || (a.value.delete(q), I("rowUnselected", q), bM());
    }, nM = async (p, q, YM) => {
      if (q === YM)
        return;
      const H = (KA) => g.noProvider && g.noProvider.includes(KA), gA = ["currentPage", "perPage"].includes(p) && (H("paging") || w.value === !0), QM = ["filter"].includes(p) && (H("filtering") || x.value === !0), DD = ["sortBy", "sortDesc"].includes(p) && (H("sorting") || E.value === !0);
      gA || QM || DD || await fM();
    };
    return mM(
      () => g.filter,
      (p, q) => {
        p === q || r.value || p || gj(g.items).then((YM) => I("filtered", YM));
      }
    ), mM(
      () => n.value,
      () => n.value !== i.value && I("update:busy", n.value)
    ), mM(
      () => i.value,
      () => n.value !== i.value && (n.value = i.value)
    ), mM(
      () => g.filter,
      (p, q) => nM("filter", p, q)
    ), mM(
      () => g.currentPage,
      (p, q) => nM("currentPage", p, q)
    ), mM(
      () => g.perPage,
      (p, q) => nM("perPage", p, q)
    ), mM(
      () => g.sortBy,
      (p, q) => nM("sortBy", p, q)
    ), mM(
      () => g.sortDesc,
      (p, q) => nM("sortDesc", p, q)
    ), _M(() => {
      r.value && fM();
    }), A({
      selectAllRows: $,
      clearSelected: NM,
      selectRow: hM,
      unselectRow: BM
    }), (p, q) => (T(), Z(vL, qM(iA(e(Y))), {
      default: h(() => {
        var YM;
        return [
          l("thead", null, [
            p.$slots["thead-top"] ? Q(p.$slots, "thead-top", { key: 0 }) : B("", !0),
            l("tr", null, [
              e(b) ? (T(), s("th", {
                key: 0,
                class: F(["b-table-selection-column", {
                  "b-table-sticky-column": e(u)
                }])
              }, [
                Q(p.$slots, "select-head", {}, () => [
                  IM(P(typeof M.selectHead == "boolean" ? "Selected" : M.selectHead), 1)
                ])
              ], 2)) : B("", !0),
              (T(!0), s(MM, null, eM(e(U), (H) => (T(), s("th", wM({
                key: H.key,
                scope: "col",
                class: zM(H),
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle
              }, H.thAttr, {
                onClick: (gA) => gM(H, gA)
              }), [
                l("div", P3, [
                  Q(p.$slots, "sort-icon", {
                    field: H,
                    sortBy: M.sortBy,
                    selected: H.key === M.sortBy,
                    isDesc: e(t),
                    direction: e(t) ? "desc" : "asc"
                  }, () => [
                    e(V) && H.sortable ? (T(), s("span", {
                      key: 0,
                      class: F(["b-table-sort-icon", {
                        sorted: H.key === M.sortBy,
                        [`sorted-${e(t) ? "desc" : "asc"}`]: H.key === M.sortBy
                      }])
                    }, null, 2)) : B("", !0)
                  ]),
                  l("div", null, [
                    p.$slots["head(" + H.key + ")"] || p.$slots["head()"] ? Q(p.$slots, p.$slots["head(" + H.key + ")"] ? "head(" + H.key + ")" : "head()", {
                      key: 0,
                      label: H.label
                    }) : (T(), s(MM, { key: 1 }, [
                      IM(P(LM(H)), 1)
                    ], 64))
                  ])
                ])
              ], 16, B3))), 128))
            ]),
            p.$slots["thead-sub"] ? (T(), s("tr", F3, [
              (T(!0), s(MM, null, eM(e(U), (H) => (T(), s("td", {
                key: H.key,
                scope: "col",
                class: F([H.class, H.thClass, H.variant ? `table-${H.variant}` : ""])
              }, [
                p.$slots["thead-sub"] ? Q(p.$slots, "thead-sub", wM({
                  key: 0,
                  items: e(U)
                }, H)) : (T(), s(MM, { key: 1 }, [
                  IM(P(H.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : B("", !0)
          ]),
          l("tbody", null, [
            (T(!0), s(MM, null, eM(e(AM), (H, gA) => (T(), s(MM, { key: gA }, [
              l("tr", {
                class: F(_(H)),
                onClick: (QM) => !e(CN)(QM) && oM(H, gA, QM),
                onDblclick: (QM) => !e(CN)(QM) && SM(H, gA, QM),
                onMouseenter: (QM) => !e(CN)(QM) && tM(H, gA, QM),
                onMouseleave: (QM) => !e(CN)(QM) && CM(H, gA, QM)
              }, [
                e(b) ? (T(), s("td", {
                  key: 0,
                  class: F(["b-table-selection-column", {
                    "b-table-sticky-column": e(u)
                  }])
                }, [
                  Q(p.$slots, "select-cell", {}, () => [
                    l("span", {
                      class: F(a.value.has(H) ? "text-primary" : "")
                    }, "\u{1F5F9}", 2)
                  ])
                ], 2)) : B("", !0),
                (T(!0), s(MM, null, eM(e(U), (QM) => (T(), s("td", wM({
                  key: QM.key
                }, QM.tdAttr, {
                  class: J(QM, H)
                }), [
                  p.$slots["cell(" + QM.key + ")"] || p.$slots["cell()"] ? Q(p.$slots, p.$slots["cell(" + QM.key + ")"] ? "cell(" + QM.key + ")" : "cell()", {
                    key: 0,
                    value: H[QM.key],
                    index: gA,
                    item: H,
                    field: QM,
                    items: M.items,
                    toggleDetails: () => iM(H),
                    detailsShowing: H._showDetails
                  }) : (T(), s(MM, { key: 1 }, [
                    IM(P(H[QM.key]), 1)
                  ], 64))
                ], 16))), 128))
              ], 42, X3),
              H._showDetails === !0 && p.$slots["row-details"] ? (T(), s("tr", {
                key: 0,
                class: F(_(H))
              }, [
                l("td", { colspan: e(k) }, [
                  Q(p.$slots, "row-details", {
                    item: H,
                    toggleDetails: () => iM(H)
                  })
                ], 8, R3)
              ], 2)) : B("", !0)
            ], 64))), 128)),
            n.value ? (T(), s("tr", {
              key: 0,
              class: F(["b-table-busy-slot", { "b-table-static-busy": e(AM).length == 0 }])
            }, [
              l("td", { colspan: e(k) }, [
                Q(p.$slots, "table-busy", {}, () => [
                  l("div", _3, [
                    W(pL, { class: "align-middle" }),
                    $3
                  ])
                ])
              ], 8, H3)
            ], 2)) : B("", !0),
            e(C) && e(AM).length === 0 ? (T(), s("tr", q3, [
              l("td", { colspan: e(k) }, [
                Q(p.$slots, "empty", {
                  items: e(AM),
                  filtered: e(G)
                }, () => [
                  IM(P(e(G) ? M.emptyFilteredText : M.emptyText), 1)
                ])
              ], 8, K3)
            ])) : B("", !0)
          ]),
          e(L) ? (T(), s("tfoot", MW, [
            l("tr", null, [
              (T(!0), s(MM, null, eM(e(U), (H) => (T(), s("th", wM({
                key: H.key
              }, H.thAttr, {
                scope: "col",
                class: [H.class, H.thClass, H.variant ? `table-${H.variant}` : ""],
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle,
                onClick: (gA) => gM(H, gA, !0)
              }), P(H.label), 17, AW))), 128))
            ])
          ])) : p.$slots["custom-foot"] ? (T(), s("tfoot", IW, [
            Q(p.$slots, "custom-foot", {
              fields: e(U),
              items: M.items,
              columns: (YM = e(U)) == null ? void 0 : YM.length
            })
          ])) : B("", !0),
          p.$slots["table-caption"] ? (T(), s("caption", gW, [
            Q(p.$slots, "table-caption")
          ])) : M.caption ? (T(), s("caption", DW, P(M.caption), 1)) : B("", !0)
        ];
      }),
      _: 3
    }, 16));
  }
}), LW = /* @__PURE__ */ v({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`thead-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), s("tbody", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), tW = ["scope", "colspan", "rowspan", "data-label"], jW = { key: 0 }, uW = /* @__PURE__ */ v({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = c(o(A, "stickyColumn")), g = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = y(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (N, L) => (T(), s("td", {
      role: "cell",
      scope: e(D),
      class: F(e(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading ? (T(), s("div", jW, [
        Q(N.$slots, "default")
      ])) : Q(N.$slots, "default", { key: 1 })
    ], 10, tW));
  }
}), SW = /* @__PURE__ */ v({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), s("tfoot", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), iW = ["scope", "colspan", "rowspan", "data-label"], eW = { key: 0 }, CW = /* @__PURE__ */ v({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = c(o(A, "stickyColumn")), g = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = y(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (N, L) => (T(), s("th", {
      role: "columnheader",
      scope: e(D),
      class: F(e(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading !== void 0 ? (T(), s("div", eW, [
        Q(N.$slots, "default")
      ])) : Q(N.$slots, "default", { key: 1 })
    ], 10, iW));
  }
}), wW = /* @__PURE__ */ v({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), s("thead", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), EW = /* @__PURE__ */ v({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), s("tr", {
      role: "row",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), TW = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], iE = Symbol(), xW = /* @__PURE__ */ v({
  __name: "BTabs",
  props: {
    activeNavItemClass: null,
    activeTabClass: null,
    align: null,
    card: { default: !1 },
    contentClass: null,
    end: { default: !1 },
    fill: { default: !1 },
    id: null,
    justified: { default: !1 },
    lazy: { default: !1 },
    navClass: null,
    navWrapperClass: null,
    noFade: { default: !1 },
    noNavStyle: { default: !1 },
    pills: { default: !1 },
    small: { default: !1 },
    tag: { default: "div" },
    vertical: { default: !1 },
    modelValue: { default: -1 }
  },
  emits: ["update:modelValue", "activate-tab", "click"],
  setup(M, { emit: A }) {
    const I = M, g = c(o(I, "card")), D = c(o(I, "end")), N = c(o(I, "fill")), L = c(o(I, "justified")), t = c(o(I, "lazy")), j = c(o(I, "noFade")), S = c(o(I, "noNavStyle")), u = c(o(I, "pills")), i = c(o(I, "small")), C = c(o(I, "vertical")), w = jA(), E = DM(I.modelValue), x = DM(""), n = y({
      get: () => E.value,
      set: (r) => {
        E.value = r, a.value.length > 0 && r >= 0 && r < a.value.length ? x.value = a.value[r].buttonId : x.value = "", A("update:modelValue", r);
      }
    }), a = y(() => {
      let r = [];
      return w.default && (r = G(w).map((b, V) => {
        b.props || (b.props = {});
        const R = b.props["button-id"] || gI("tab"), AM = b.props.id || gI(), LM = n.value > -1 ? V === n.value : b.props.active === "", gM = b.props["title-item-class"], oM = b.props["title-link-attributes"];
        return {
          buttonId: R,
          contentId: AM,
          active: LM,
          disabled: b.props.disabled === "" || b.props.disabled === !0,
          navItemClasses: [
            {
              active: LM,
              disabled: b.props.disabled === "" || b.props.disabled === !0
            },
            LM && I.activeNavItemClass ? I.activeNavItemClass : null,
            b.props["title-link-class"]
          ],
          tabClasses: [
            {
              fade: !j.value
            },
            LM && I.activeTabClass ? I.activeTabClass : null
          ],
          target: `#${AM}`,
          title: b.props.title,
          titleItemClass: gM,
          titleLinkAttributes: oM,
          onClick: b.props.onClick,
          tab: b
        };
      })), r;
    }), z = y(() => !((a == null ? void 0 : a.value) && a.value.length > 0)), d = y(() => ({
      "d-flex": C.value,
      "align-items-start": C.value
    })), Y = y(() => ({
      "nav-pills": u.value,
      "flex-column me-3": C.value,
      [`justify-content-${I.align}`]: I.align !== void 0,
      "nav-fill": N.value,
      "card-header-tabs": g.value,
      "nav-justified": L.value,
      "nav-tabs": !S.value && !u.value,
      small: i.value
    })), U = (r) => {
      let b = !1;
      if (r !== void 0 && r > -1 && r < a.value.length && !a.value[r].disabled && (n.value < 0 || a.value[r].buttonId !== x.value)) {
        const V = new cL("activate-tab", { cancelable: !0, vueTarget: this });
        A("activate-tab", r, n.value, V), V.defaultPrevented || (n.value = r, b = !0);
      }
      return !b && I.modelValue !== n.value && A("update:modelValue", n.value), b;
    }, k = (r, b) => {
      var V;
      U(b), b >= 0 && !a.value[b].disabled && ((V = a.value[b]) == null ? void 0 : V.onClick) && typeof a.value[b].onClick == "function" && a.value[b].onClick(r);
    }, G = (r) => !r || !r.default ? [] : r.default().reduce((b, V) => (typeof V.type == "symbol" ? b = b.concat(V.children) : b.push(V), b), []).filter((b) => {
      var V;
      return ((V = b.type) == null ? void 0 : V.__name) === "BTab";
    });
    return U(E.value), mM(
      () => I.modelValue,
      (r, b) => {
        if (r === b)
          return;
        if (r = Math.max(r, -1), b = Math.max(b, -1), a.value.length <= 0) {
          n.value = -1;
          return;
        }
        const V = r > b;
        let R = r;
        const AM = a.value.length - 1;
        for (; R >= 0 && R <= AM && a.value[R].disabled; )
          R += V ? 1 : -1;
        if (R < 0) {
          U(0);
          return;
        }
        if (R >= a.value.length) {
          U(a.value.length - 1);
          return;
        }
        U(R);
      }
    ), mM(
      () => a.value,
      () => {
        let r = a.value.map((b) => b.active && !b.disabled).lastIndexOf(!0);
        r < 0 && (n.value >= a.value.length ? r = a.value.map((b) => !b.disabled).lastIndexOf(!0) : a.value[n.value] && !a.value[n.value].disabled && (r = n.value)), r < 0 && (r = a.value.map((b) => !b.disabled).indexOf(!0)), a.value.forEach((b, V) => b.active = V === r), U(r);
      }
    ), _M(() => {
      if (n.value < 0 && a.value.length > 0 && !a.value.some((r) => r.active)) {
        const r = a.value.map((b) => !b.disabled).indexOf(!0);
        U(r >= 0 ? r : -1);
      }
    }), NI(iE, {
      lazy: t.value,
      card: g.value
    }), (r, b) => (T(), Z(EM(M.tag), {
      id: M.id,
      class: F(["tabs", e(d)])
    }, {
      default: h(() => [
        e(D) ? (T(), s("div", {
          key: 0,
          class: F(["tab-content", M.contentClass])
        }, [
          (T(!0), s(MM, null, eM(e(a), ({ tab: V, contentId: R, tabClasses: AM, active: LM }, gM) => (T(), Z(EM(V), {
            id: R,
            key: gM,
            class: F(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          e(z) ? (T(), s("div", {
            key: "bv-empty-tab",
            class: F(["tab-pane active", { "card-body": e(g) }])
          }, [
            Q(r.$slots, "empty")
          ], 2)) : B("", !0)
        ], 2)) : B("", !0),
        l("div", {
          class: F([M.navWrapperClass, { "card-header": e(g), "ms-auto": M.vertical && e(D) }])
        }, [
          l("ul", {
            class: F(["nav", [e(Y), M.navClass]]),
            role: "tablist"
          }, [
            Q(r.$slots, "tabs-start"),
            (T(!0), s(MM, null, eM(e(a), ({ tab: V, buttonId: R, contentId: AM, navItemClasses: LM, active: gM, target: oM }, SM) => (T(), s("li", {
              key: SM,
              class: F(["nav-item", V.props["title-item-class"]])
            }, [
              l("button", wM({
                id: R,
                class: ["nav-link", LM],
                "data-bs-toggle": "tab",
                "data-bs-target": oM,
                role: "tab",
                "aria-controls": AM,
                "aria-selected": gM
              }, V.props["title-link-attributes"], {
                onClick: FI((tM) => k(tM, SM), ["stop", "prevent"])
              }), [
                V.children && V.children.title ? (T(), Z(EM(V.children.title), { key: 0 })) : (T(), s(MM, { key: 1 }, [
                  IM(P(V.props.title), 1)
                ], 64))
              ], 16, TW)
            ], 2))), 128)),
            Q(r.$slots, "tabs-end")
          ], 2)
        ], 2),
        e(D) ? B("", !0) : (T(), s("div", {
          key: 1,
          class: F(["tab-content", M.contentClass])
        }, [
          (T(!0), s(MM, null, eM(e(a), ({ tab: V, contentId: R, tabClasses: AM, active: LM }, gM) => (T(), Z(EM(V), {
            id: R,
            key: gM,
            class: F(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          e(z) ? (T(), s("div", {
            key: "bv-empty-tab",
            class: F(["tab-pane active", { "card-body": e(g) }])
          }, [
            Q(r.$slots, "empty")
          ], 2)) : B("", !0)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), aW = /* @__PURE__ */ v({
  __name: "BTab",
  props: {
    id: null,
    title: null,
    active: { default: !1 },
    buttonId: { default: void 0 },
    disabled: { default: !1 },
    lazy: { default: void 0 },
    lazyOnce: { default: void 0 },
    noBody: { type: [Boolean, String], default: !1 },
    tag: { default: "div" },
    titleItemClass: null,
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: null
  },
  setup(M) {
    const A = M, I = tA(iE, null), g = c(o(A, "active")), D = c(o(A, "disabled")), N = c(o(A, A.lazyOnce !== void 0 ? "lazyOnce" : "lazy")), L = DM(!1), t = y(() => (I == null ? void 0 : I.lazy) || N.value), j = y(() => A.lazyOnce !== void 0), S = y(() => g.value && !D.value), u = y(() => {
      const C = t.value && j.value && L.value;
      return S.value || !t.value || C;
    }), i = y(() => ({
      active: g.value,
      show: g.value,
      "card-body": (I == null ? void 0 : I.card) && A.noBody === !1
    }));
    return mM(
      () => u.value,
      (C) => {
        C && !L.value && (L.value = !0);
      }
    ), (C, w) => (T(), Z(EM(M.tag), {
      id: M.id,
      class: F(["tab-pane", e(i)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: h(() => [
        e(u) ? Q(C.$slots, "default", { key: 0 }) : B("", !0)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), yW = "toast-title", Ai = 1e3, eE = v({
  components: { BLink: zA },
  props: {
    ...Sg,
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
  setup(M, { emit: A, slots: I }) {
    c(o(M, "animation"));
    const g = c(o(M, "isStatus")), D = c(o(M, "autoHide")), N = c(o(M, "noCloseButton")), L = c(o(M, "noFade")), t = c(o(M, "noHoverPause"));
    c(o(M, "solid")), c(o(M, "static"));
    const j = c(o(M, "modelValue")), S = DM(!1), u = DM(!1), i = DM(!1), C = y(() => ({
      [`b-toast-${M.variant}`]: M.variant !== void 0,
      show: i.value || S.value
    }));
    let w, E, x;
    const n = () => {
      typeof w > "u" || (clearTimeout(w), w = void 0);
    }, a = y(
      () => Math.max(Vg(M.delay, 0), Ai)
    ), z = () => {
      j.value && (E = x = 0, n(), u.value = !0, NN(() => {
        i.value = !1;
      }));
    }, d = () => {
      n(), A("update:modelValue", !0), E = x = 0, u.value = !1, DI(() => {
        NN(() => {
          i.value = !0;
        });
      });
    }, Y = () => {
      if (!D.value || t.value || !w || x)
        return;
      const AM = Date.now() - E;
      AM > 0 && (n(), x = Math.max(a.value - AM, Ai));
    }, U = () => {
      (!D.value || t.value || !x) && (x = E = 0), k();
    };
    mM(
      () => j.value,
      (AM) => {
        AM ? d() : z();
      }
    );
    const k = () => {
      n(), D.value && (w = setTimeout(z, x || a.value), E = Date.now(), x = 0);
    }, G = () => {
      S.value = !0, A("update:modelValue", !0);
    }, r = () => {
      S.value = !1, k();
    }, b = () => {
      S.value = !0;
    }, V = () => {
      S.value = !1, x = E = 0, A("update:modelValue", !1);
    };
    sE(() => {
      n(), D.value && A("destroyed", M.id);
    }), _M(() => {
      DI(() => {
        j.value && NN(() => {
          d();
        });
      });
    });
    const R = () => {
      DI(() => {
        NN(() => {
          z();
        });
      });
    };
    return () => {
      const AM = () => {
        const LM = [], gM = pA(yW, { hide: z }, I);
        gM ? LM.push(sM(gM)) : M.title && LM.push(sM("strong", { class: "me-auto" }, M.title)), !N.value && LM.length !== 0 && LM.push(
          sM(gD, {
            class: ["btn-close"],
            onClick: () => {
              z();
            }
          })
        );
        const oM = [];
        if (LM.length > 0 && oM.push(
          sM(
            M.headerTag,
            {
              class: "toast-header"
            },
            { default: () => LM }
          )
        ), pA("default", { hide: z }, I) || M.body) {
          const SM = sM(
            WD(M) ? "b-link" : "div",
            {
              class: ["toast-body", M.bodyClass],
              onClick: WD(M) ? { click: R } : {}
            },
            pA("default", { hide: z }, I) || M.body
          );
          oM.push(SM);
        }
        return sM(
          "div",
          {
            class: ["toast", M.toastClass, C.value],
            tabindex: "0"
          },
          oM
        );
      };
      return sM(
        "div",
        {
          class: ["b-toast"],
          id: M.id,
          role: u.value ? null : g.value ? "status" : "alert",
          "aria-live": u.value ? null : g.value ? "polite" : "assertive",
          "aria-atomic": u.value ? null : "true",
          onmouseenter: Y,
          onmouseleave: U
        },
        [
          sM(
            QL,
            {
              noFade: L.value,
              onAfterEnter: r,
              onBeforeEnter: G,
              onAfterLeave: V,
              onBeforeLeave: b
            },
            () => [i.value ? AM() : ""]
          )
        ]
      );
    };
  }
}), Ii = /* @__PURE__ */ v({
  __name: "BToaster",
  props: {
    position: { default: "top-right" },
    instance: null
  },
  setup(M) {
    const A = M, I = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, g = y(() => I[A.position]), D = (N) => {
      var L;
      (L = A.instance) == null || L.remove(N);
    };
    return (N, L) => {
      var t;
      return T(), s("div", {
        class: F([[e(g)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (T(!0), s(MM, null, eM((t = M.instance) == null ? void 0 : t.toasts(M.position).value, (j) => (T(), Z(eE, {
          id: j.options.id,
          key: j.options.id,
          modelValue: j.options.value,
          "onUpdate:modelValue": (S) => j.options.value = S,
          delay: j.options.delay,
          title: j.content.title,
          body: j.content.body,
          component: j.content.body,
          variant: j.options.variant,
          onDestroyed: D
        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "delay", "title", "body", "component", "variant"]))), 128))
      ], 2);
    };
  }
}), xg = { delay: 5e3, value: !0, pos: "top-right" };
class gi {
  constructor(A) {
    PM(this, "vm");
    PM(this, "containerPositions");
    cE(A) ? this.vm = A : this.vm = fA(A), this.containerPositions = y(() => {
      const I = /* @__PURE__ */ new Set([]);
      return this.vm.toasts.map((g) => {
        g.options.pos && I.add(g.options.pos);
      }), I;
    });
  }
  toasts(A) {
    return A ? y(
      () => this.vm.toasts.filter((I) => {
        if (I.options.pos === A && I.options.value)
          return I;
      })
    ) : y(() => this.vm.toasts);
  }
  remove(...A) {
    this.vm.toasts = this.vm.toasts.filter((I) => {
      if (I.options.id && !A.includes(I.options.id))
        return I;
    });
  }
  isRoot() {
    var A;
    return (A = this.vm.root) != null ? A : !1;
  }
  show(A, I = xg) {
    const g = { id: gI(), ...xg, ...I }, D = {
      options: fA(g),
      content: A
    };
    return this.vm.toasts.push(D), D;
  }
  info(A, I = xg) {
    return this.show(A, { variant: "info", ...I });
  }
  danger(A, I = xg) {
    return this.show(A, { variant: "danger", ...I });
  }
  warning(A, I = xg) {
    return this.show(A, { variant: "warning", ...I });
  }
  success(A, I = xg) {
    return this.show(A, { variant: "success", ...I });
  }
  hide() {
  }
}
class nW {
  constructor() {
    PM(this, "vms");
    PM(this, "rootInstance");
    PM(this, "useToast", sW);
    this.vms = {};
  }
  getOrCreateViewModel(A) {
    if (!A) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      const I = { root: !0, toasts: [], container: void 0, id: Symbol("toast") };
      return this.rootInstance = I.id, this.vms[I.id] = I, I;
    }
    if (A.root) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      this.rootInstance = A.id;
    }
    return this.vms[A.id] = A, A;
  }
  getVM(A) {
    if (!A && this.rootInstance)
      return this.vms[this.rootInstance];
    if (A)
      return this.vms[A];
  }
}
const xj = Symbol(), CE = Symbol(), oW = {
  container: void 0,
  toasts: [],
  root: !1
};
function lW() {
  return tA(CE);
}
function sW(M, A = xj) {
  const I = tA(lW());
  if (!M)
    return new gi(I.getOrCreateViewModel());
  const g = { id: Symbol("toastInstance") }, D = { ...oW, ...g, ...M }, N = I.getOrCreateViewModel(D);
  return new gi(N);
}
const cW = {
  install: (M, A = {}) => {
    var I, g, D, N;
    M.provide(CE, (g = (I = A == null ? void 0 : A.BToast) == null ? void 0 : I.injectkey) != null ? g : xj), M.provide((N = (D = A == null ? void 0 : A.BToast) == null ? void 0 : D.injectkey) != null ? N : xj, new nW());
  }
}, zW = {
  BAccordion: FY,
  BAccordionItem: iO,
  BNavText: qb,
  BAlert: CO,
  BAvatar: aO,
  BAvatarGroup: wO,
  BNavForm: Bb,
  BBadge: sO,
  BBreadcrumb: dO,
  BBreadcrumbItem: Vw,
  BButton: kD,
  BButtonGroup: hO,
  BButtonToolbar: WO,
  BCard: Hw,
  BCardBody: Xw,
  BCardFooter: Rw,
  BCardGroup: pO,
  BCardHeader: Bw,
  BCardImg: DL,
  BCardSubtitle: Fw,
  BCardText: QO,
  BCardTitle: Pw,
  BCarousel: RO,
  BCarouselSlide: Mh,
  BCloseButton: gD,
  BCol: eD,
  BCollapse: Gw,
  BContainer: gh,
  BDropdown: $w,
  BDropdownDivider: th,
  BDropdownForm: eh,
  BDropdownGroup: Th,
  BDropdownHeader: nh,
  BDropdownItem: lh,
  BDropdownItemButton: zh,
  BDropdownText: dh,
  BForm: qw,
  BFormCheckbox: Kw,
  BFormCheckboxGroup: Gh,
  BFormFloatingLabel: hh,
  BFormGroup: Xh,
  BFormInput: $h,
  BFormInvalidFeedback: wj,
  BFormRadio: AE,
  BFormRadioGroup: gb,
  BFormRow: ON,
  BFormSelect: tb,
  BFormSelectOption: xu,
  BFormSelectOptionGroup: IE,
  BFormText: Ej,
  BFormTextarea: Yb,
  BFormTag: gE,
  BFormTags: lb,
  BFormValidFeedback: Tj,
  BImg: Tu,
  BInputGroup: bb,
  BInputGroupAddon: au,
  BInputGroupAppend: Wb,
  BInputGroupPrepend: kb,
  BInputGroupText: DE,
  BLink: zA,
  BListGroup: pb,
  BListGroupItem: Qb,
  BModal: Vb,
  BNav: Zb,
  BNavbar: Kb,
  BNavbarBrand: I3,
  BNavbarNav: g3,
  BNavbarToggle: N3,
  BNavItem: Rb,
  BNavItemDropdown: _b,
  BOffcanvas: i3,
  BOverlay: e3,
  BPagination: o3,
  BPlaceholder: UA,
  BPlaceholderButton: jE,
  BPlaceholderCard: l3,
  BPlaceholderTable: s3,
  BPlaceholderWrapper: c3,
  BPopover: m3,
  BProgress: h3,
  BProgressBar: uE,
  BRow: k3,
  BSkeleton: hN,
  BSkeletonIcon: p3,
  BSkeletonTable: G3,
  BSkeletonWrapper: f3,
  BSpinner: pL,
  BTab: aW,
  BTable: NW,
  BTableSimple: vL,
  BTbody: LW,
  BTd: uW,
  BTfoot: SW,
  BTh: CW,
  BThead: wW,
  BTr: EW,
  BToast: eE,
  BToaster: Ii,
  BToastContainer: Ii,
  BTabs: xW,
  BTransition: QL,
  BToastPlugin: cW
};
const QW = {
  install(M, A = {}) {
    Object.entries(zW).forEach(([I, g]) => {
      M.component(I, g);
    }), Object.entries(LO).forEach(([I, g]) => {
      M.directive(I, g);
    }), ZY(M);
  }
  const g = [M];
  let D;
  for (let N = 0; N < g.length && !D; N++) {
    const L = g[N];
    D = I[L];
  }
  return D && dW(D) ? D(A) : D;
}, wN = (M, A = NaN) => {
  const I = parseFloat(M.toString());
  return Number.isNaN(I) ? A : I;
}, NL = /* @__PURE__ */ v({
  name: "BIcon",
  props: {
    animation: { type: String },
    class: { type: [Array, Object, String], required: !1 },
    content: {
      type: [String, Object],
      required: !1
    },
    flipH: { type: Boolean, default: !1 },
    flipV: { type: Boolean, default: !1 },
    fontScale: { type: [Number, String], default: 1 },
    rotate: {
      type: [String, Number],
      required: !1,
      validator: (M) => M >= -360 && M <= 360
    },
    scale: { type: [Number, String], default: 1 },
    shiftH: { type: [Number, String], default: 0 },
    shiftV: { type: [Number, String], default: 0 },
    size: { type: String, required: !1 },
    stacked: { type: Boolean, default: !1 },
    title: { type: String, required: !1 },
    variant: { type: String, required: !1 }
  },
  setup(M, { slots: A }) {
    const I = y(() => Math.max(wN(M.fontScale, 1), 0) || 1), g = y(() => Math.max(wN(M.scale, 1), 0) || 1), D = y(() => wN(M.shiftH, 0)), N = y(() => wN(M.shiftV, 0)), L = y(() => M.flipH || M.flipV || g.value !== 1), t = y(() => D.value || N.value), j = y(() => L.value || M.rotate), S = y(
      () => [
        j.value ? "translate(8 8)" : null,
        L.value ? `scale(${(M.flipH ? -1 : 1) * g.value} ${(M.flipV ? -1 : 1) * g.value})` : null,
        M.rotate ? `rotate(${M.rotate})` : null,
        j.value ? "translate(-8 -8)" : null
      ].filter((w) => w)
    ), u = y(() => {
      const w = [];
      return M.variant && w.push(`bootstrap-icon--variant-${M.variant}`), M.size && w.push(`bootstrap-icon--size-${M.size}`), M.animation && w.push(`bootstrap-icon--animation-${M.animation}`), w;
    });
    let i = {
      viewBox: "0 0 16 16"
    };
    M.stacked || (i = {
      ...i,
      width: "1em",
      height: "1em",
      focusable: "false",
      role: "img",
      "aria-label": "icon",
      xmlns: "http://www.w3.org/2000/svg"
    });
    const C = y(() => S.value.join(" ") || void 0);
    return () => {
      let w = sM(
        "g",
        {
          transform: C.value
        },
        [M.content, wE("default", {}, A)]
      );
      t.value && (w = sM(
        "g",
        {
          transform: `translate(${16 * D.value / 16} ${-16 * N.value / 16})`
        },
        [w]
      )), M.stacked && (w = sM("g", [w]));
      const x = [M.title ? sM("title", M.title) : null, w].filter((n) => n);
      return sM(
        "svg",
        {
          class: ["bootstrap-icon", u.value, M.class],
          ...i,
          style: M.stacked ? {} : {
            "font-size": I.value === 1 ? null : `${I.value * 100}%`
          }
        },
        x
      );
    };
  }
}), UW = /* @__PURE__ */ v({
  name: "BIcon",
  components: { BIconBase: NL },
  props: {
    animation: { type: String },
    flipH: { type: Boolean, default: !1 },
    flipV: { type: Boolean, default: !1 },
    fontScale: { type: [Number, String], default: 1 },
    icon: { type: String, required: !0 },
    rotate: {
      type: [String, Number],
      required: !1,
      validator: (M) => M >= -360 && M <= 360
    },
    scale: { type: [Number, String], default: 1 },
    shiftH: { type: [Number, String], default: 0 },
    shiftV: { type: [Number, String], default: 0 },
    size: { type: String, required: !1 },
    stacked: { type: Boolean, default: !1 },
    title: { type: String, required: !1 },
    variant: { type: String, required: !1 }
  },
  setup(M) {
    const A = y(() => YW);
    return () => {
      const I = sM(
        "use",
        {
          "xlink:href": `${A.value}#${M.icon}`
        },
        ""
      );
      return sM(
        NL,
        {
          ...M,
          content: I
        },
        {
          default: () => ""
        }
      );
    };
  }
}), mW = /* @__PURE__ */ v({
  name: "BIconstack",
  components: { BIconBase: NL },
  props: {
    animation: { type: String },
    content: {
      type: [String, Object],
      required: !1
    },
    flipH: { type: Boolean, default: !1 },
    flipV: { type: Boolean, default: !1 },
    fontScale: { type: [Number, String], default: 1 },
    rotate: {
      type: [String, Number],
      required: !1,
      validator: (M) => M >= -360 && M <= 360
    },
    scale: { type: [Number, String], default: 1 },
    shiftH: { type: [Number, String], default: 0 },
    shiftV: { type: [Number, String], default: 0 },
    size: { type: String, required: !1 },
    title: { type: String, required: !1 },
    variant: { type: String, required: !1 }
  },
  setup(M, { slots: A }) {
    return () => sM(
      NL,
      {
        ...M,
        class: "b-icon-stack"
      },
      {
        default: () => wE("default", {}, A) || ""
      }
    );
  }
}), OW = {
  BIcon: UW,
  BIconstack: mW
};
const vW = {
  install(M) {
    Object.entries(OW).forEach(([A, I]) => {
      M.component(A, I);
    });
  }
};
export {
  FM as _,
  eL as a,
  pW as b,
  vW as c,
  kW as i,
  QW as p,
  wo as u
};