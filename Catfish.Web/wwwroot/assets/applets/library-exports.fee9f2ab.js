var wE = Object.defineProperty;
var EE = (M, A, I) => A in M ? wE(M, A, { enumerable: !0, configurable: !0, writable: !0, value: I }) : M[A] = I;
var BM = (M, A, I) => (EE(M, typeof A != "symbol" ? A + "" : A, I), I);
import { defineComponent as v, ref as DM, unref as e, openBlock as T, createElementBlock as c, createElementVNode as s, normalizeClass as F, withModifiers as BI, createCommentVNode as B, pushScopeId as gg, popScopeId as Dg, watch as mM, createBlock as V, Transition as LL, withCtx as O, toDisplayString as P, h as sM, resolveComponent as aM, createVNode as W, Fragment as MM, renderList as eM, computed as y, withDirectives as _M, vModelCheckbox as $I, shallowRef as Di, inject as tA, reactive as fA, nextTick as DI, provide as NI, onMounted as PM, createTextVNode as gM, vModelText as hN, vModelSelect as bg, withKeys as Ni, isRef as EA, vModelRadio as Li, resolveDynamicComponent as wM, renderSlot as Q, toRef as o, watchEffect as TE, readonly as xE, Comment as aE, onBeforeUnmount as aj, onActivated as yj, useSlots as jA, normalizeStyle as QA, mergeProps as CM, getCurrentInstance as yE, normalizeProps as qM, useAttrs as ti, guardReactiveProps as iA, Teleport as nE, vShow as oE, createSlots as ji, onUnmounted as lE, isReactive as sE } from "vue";
import { defineStore as TI, storeToRefs as nj, createPinia as tL } from "pinia";
var rg = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.AttachmentField = "AttachmentField", M))(rg || {}), jL = /* @__PURE__ */ ((M) => (M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M))(jL || {}), YD = /* @__PURE__ */ ((M) => (M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M))(YD || {}), ui = /* @__PURE__ */ ((M) => (M.InfoSection = "Info Section", M))(ui || {}), rM = /* @__PURE__ */ ((M) => (M.ShortAnswer = "Short Answer", M.Paragraph = "Paragraph", M.RichText = "Rich Text", M.Date = "Date", M.DateTime = "Date Time", M.Decimal = "Decimal", M.Integer = "Integer", M.Email = "Email", M.Checkboxes = "Checkboxes", M.DataList = "Data List", M.RadioButtons = "Radio Buttons", M.DropDown = "Drop Down", M.InfoSection = "Info Section", M.AttachmentField = "AttachmentField", M))(rM || {});
const cE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TextType: rg,
  MonolingualFieldType: jL,
  OptionFieldType: YD,
  InfoSectionType: ui,
  FieldType: rM
}, Symbol.toStringTag, { value: "Module" }));
var zE = function() {
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
}(), jM = zE;
const TA = {
  googleApiKey: "Use dev credentials from https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit",
  googleCalendarIds: ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  maxEvents: 10,
  initialView: "dayGridMonth",
  dataRepositoryApiRoot: "https://localhost:5020"
}, kD = TI("FormBuilderStore", {
  state: () => ({
    lang: ["en", "fr"],
    form: null,
    transientMessageModel: {},
    apiRoot: null
  }),
  actions: {
    createNewForm() {
      this.form = {
        id: jM.EMPTY,
        name: "",
        description: "",
        fields: []
      };
    },
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
}), Wg = (M) => {
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
}, YE = (M) => {
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
function rE(M, A) {
  return {
    id: jM.create().toString(),
    isExtendedInput: !1,
    isExtendedInputRequired: !1,
    optionText: A || Wg(M)
  };
}
const dg = (M, A) => dE(M.optionText, A);
function dE(M, A) {
  var I, g, D;
  return A ? (g = (I = M == null ? void 0 : M.values) == null ? void 0 : I.filter((N) => N.lang === A).map((N) => N.value)) == null ? void 0 : g.at(0) : (D = M == null ? void 0 : M.values) == null ? void 0 : D.map((N) => N.value);
}
const UE = (M) => {
  const A = JSON.parse(JSON.stringify(M));
  return A.id = jM.create(), A.optionText.id = jM.create(), A.optionText.values.forEach((I) => I.id = jM.create()), A;
}, lj = (M) => (gg("data-v-139cec3d"), M = M(), Dg(), M), mE = {
  key: 0,
  class: "row"
}, OE = /* @__PURE__ */ lj(() => /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "File:")
], -1)), hE = { class: "col-sm-10" }, bE = ["onDragenter", "onDragleave", "onDrop"], WE = /* @__PURE__ */ lj(() => /* @__PURE__ */ s("div", null, "Drag or Drop File", -1)), kE = /* @__PURE__ */ lj(() => /* @__PURE__ */ s("div", null, "OR", -1)), pE = ["for"], QE = ["id"], vE = /* @__PURE__ */ v({
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
    return (L, t) => e(I) ? (T(), c("div", mE, [
      OE,
      s("div", hE, [
        s("div", {
          class: F(["dropzone", { "active-dropzone": D.value }]),
          onDragenter: BI(N, ["prevent"]),
          onDragleave: BI(N, ["prevent"]),
          onDragover: t[0] || (t[0] = BI(() => {
          }, ["prevent"])),
          onDrop: BI(N, ["prevent"])
        }, [
          WE,
          kE,
          s("label", { for: e(g) }, "Select File ", 8, pE),
          s("input", {
            type: "file",
            id: e(g)
          }, null, 8, QE)
        ], 42, bE)
      ])
    ])) : B("", !0);
  }
});
const FM = (M, A) => {
  const I = M.__vccOpts || M;
  for (const [g, D] of A)
    I[g] = D;
  return I;
}, ei = /* @__PURE__ */ FM(vE, [["__scopeId", "data-v-139cec3d"]]), sj = (M) => Object.values(YD).map((A) => A).includes(M.type), Ci = (M) => Object.values(rg).map((A) => A).includes(M.type), wi = (M) => Object.values(jL).map((A) => A).includes(M.type), Ei = (M) => Object.values(jL).map((A) => A).includes(M.type), GE = (M) => Object.values(ei).map((A) => A).includes(M.type), Ti = (M, A) => {
  const I = oj(M.title, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, xi = (M, A) => {
  const I = oj(M.description, A);
  return (I == null ? void 0 : I.length) > 0 ? I[0] : null;
}, fE = (M, A) => {
  var g, D;
  const I = {
    id: jM.create().toString(),
    fieldId: M.id
  };
  if (sj(M))
    I.selectedOptionIds = [], M.allowCustomOptionValues && (I.customOptionValues = []), (g = M.options) != null && g.find((N) => N.isExtendedInput) && (I.extendedOptionValues = []);
  else if (GE(M))
    I.fileReferences = [], M.allowCustomOptionValues && (I.customOptionValues = []), (D = M.options) != null && D.find((N) => N.isExtendedInput) && (I.extendedOptionValues = []);
  else if (Ci(M)) {
    const N = typeof A == "string" ? [A] : A;
    I.multilingualTextValues = [Wg(N)];
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
    const N = fE(D, A);
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
    }), (I, g) => (T(), V(LL, { name: "fade" }, {
      default: O(() => [
        M.model.message ? (T(), c("p", {
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
      JE(M, g, I[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : Yu(Object(I)).forEach(function(g) {
      Object.defineProperty(M, g, Object.getOwnPropertyDescriptor(I, g));
    });
  }
  return M;
}
function wN(M) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wN = function(A) {
    return typeof A;
  } : wN = function(A) {
    return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
  }, wN(M);
}
function JE(M, A, I) {
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
function VE(M, A) {
  if (M == null)
    return {};
  var I = {}, g = Object.keys(M), D, N;
  for (N = 0; N < g.length; N++)
    D = g[N], !(A.indexOf(D) >= 0) && (I[D] = M[D]);
  return I;
}
function ZE(M, A) {
  if (M == null)
    return {};
  var I = VE(M, A), g, D;
  if (Object.getOwnPropertySymbols) {
    var N = Object.getOwnPropertySymbols(M);
    for (D = 0; D < N.length; D++)
      g = N[D], !(A.indexOf(g) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, g) || (I[g] = M[g]));
  }
  return I;
}
var BE = "1.14.0";
function LI(M) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(M);
}
var xI = LI(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), pD = LI(/Edge/i), ru = LI(/firefox/i), eD = LI(/safari/i) && !LI(/chrome/i) && !LI(/android/i), yi = LI(/iP(ad|od|hone)/i), PE = LI(/chrome/i) && LI(/android/i), ni = {
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
function FE(M) {
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
    } while (M = FE(M));
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
function TM(M, A, I) {
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
      var g = TM(M, "transform");
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
    var N, L, t, j, u, S, i;
    if (M !== window && M.parentNode && M !== RA() ? (N = M.getBoundingClientRect(), L = N.top, t = N.left, j = N.bottom, u = N.right, S = N.height, i = N.width) : (L = 0, t = 0, j = window.innerHeight, u = window.innerWidth, S = window.innerHeight, i = window.innerWidth), (A || I) && M !== window && (D = D || M.parentNode, !xI))
      do
        if (D && D.getBoundingClientRect && (TM(D, "transform") !== "none" || I && TM(D, "position") !== "static")) {
          var C = D.getBoundingClientRect();
          L -= C.top + parseInt(TM(D, "border-top-width")), t -= C.left + parseInt(TM(D, "border-left-width")), j = L + N.height, u = t + N.width;
          break;
        }
      while (D = D.parentNode);
    if (g && M !== window) {
      var w = Ug(D || M), E = w && w.a, x = w && w.d;
      w && (L /= x, t /= E, i /= E, S /= x, j = L + S, u = t + i);
    }
    return {
      top: L,
      left: t,
      bottom: j,
      right: u,
      width: i,
      height: S
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
function kg(M, A, I, g) {
  for (var D = 0, N = 0, L = M.children; N < L.length; ) {
    if (L[N].style.display !== "none" && L[N] !== xM.ghost && (g || L[N] !== xM.dragged) && PA(L[N], I.draggable, M, !1)) {
      if (D === A)
        return L[N];
      D++;
    }
    N++;
  }
  return null;
}
function zj(M, A) {
  for (var I = M.lastElementChild; I && (I === xM.ghost || TM(I, "display") === "none" || A && !bN(I, A)); )
    I = I.previousElementSibling;
  return I || null;
}
function YA(M, A) {
  var I = 0;
  if (!M || !M.parentNode)
    return -1;
  for (; M = M.previousElementSibling; )
    M.nodeName.toUpperCase() !== "TEMPLATE" && M !== xM.clone && (!A || bN(M, A)) && I++;
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
function XE(M, A) {
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
      var D = TM(I);
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
function RE(M, A) {
  if (M && A)
    for (var I in A)
      A.hasOwnProperty(I) && (M[I] = A[I]);
  return M;
}
function fL(M, A) {
  return Math.round(M.top) === Math.round(A.top) && Math.round(M.left) === Math.round(A.left) && Math.round(M.height) === Math.round(A.height) && Math.round(M.width) === Math.round(A.width);
}
var CD;
function li(M, A) {
  return function() {
    if (!CD) {
      var I = arguments, g = this;
      I.length === 1 ? M.call(g, I[0]) : M.apply(g, I), CD = setTimeout(function() {
        CD = void 0;
      }, A);
    }
  };
}
function HE() {
  clearTimeout(CD), CD = void 0;
}
function si(M, A, I) {
  M.scrollLeft += A, M.scrollTop += I;
}
function ci(M) {
  var A = window.Polymer, I = window.jQuery || window.Zepto;
  return A && A.dom ? A.dom(M).cloneNode(!0) : I ? I(M).clone(!0)[0] : M.cloneNode(!0);
}
var nA = "Sortable" + new Date().getTime();
function _E() {
  var M = [], A;
  return {
    captureAnimationState: function() {
      if (M = [], !!this.options.animation) {
        var g = [].slice.call(this.el.children);
        g.forEach(function(D) {
          if (!(TM(D, "display") === "none" || D === xM.ghost)) {
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
      M.splice(XE(M, {
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
        var j = 0, u = t.target, S = u.fromRect, i = KM(u), C = u.prevFromRect, w = u.prevToRect, E = t.rect, x = Ug(u, !0);
        x && (i.top -= x.f, i.left -= x.e), u.toRect = i, u.thisAnimationDuration && fL(C, i) && !fL(S, i) && (E.top - i.top) / (E.left - i.left) === (S.top - i.top) / (S.left - i.left) && (j = qE(E, C, w, D.options)), fL(i, S) || (u.prevFromRect = S, u.prevToRect = i, j || (j = D.options.animation), D.animate(u, E, i, j)), j && (N = !0, L = Math.max(L, j), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, j), u.thisAnimationDuration = j);
      }), clearTimeout(A), N ? A = setTimeout(function() {
        typeof g == "function" && g();
      }, L) : typeof g == "function" && g(), M = [];
    },
    animate: function(g, D, N, L) {
      if (L) {
        TM(g, "transition", ""), TM(g, "transform", "");
        var t = Ug(this.el), j = t && t.a, u = t && t.d, S = (D.left - N.left) / (j || 1), i = (D.top - N.top) / (u || 1);
        g.animatingX = !!S, g.animatingY = !!i, TM(g, "transform", "translate3d(" + S + "px," + i + "px,0)"), this.forRepaintDummy = $E(g), TM(g, "transition", "transform " + L + "ms" + (this.options.easing ? " " + this.options.easing : "")), TM(g, "transform", "translate3d(0,0,0)"), typeof g.animated == "number" && clearTimeout(g.animated), g.animated = setTimeout(function() {
          TM(g, "transition", ""), TM(g, "transform", ""), g.animated = !1, g.animatingX = !1, g.animatingY = !1;
        }, L);
      }
    }
  };
}
function $E(M) {
  return M.offsetWidth;
}
function qE(M, A, I, g) {
  return Math.sqrt(Math.pow(A.top - M.top, 2) + Math.pow(A.left - M.left, 2)) / Math.sqrt(Math.pow(A.top - I.top, 2) + Math.pow(A.left - I.left, 2)) * g.animation;
}
var ig = [], JL = {
  initializeByDefault: !0
}, QD = {
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
        var u = new t(A, I, A.options);
        u.sortable = A, u.options = A.options, A[j] = u, iI(g, u.defaults);
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
function KE(M) {
  var A = M.sortable, I = M.rootEl, g = M.name, D = M.targetEl, N = M.cloneEl, L = M.toEl, t = M.fromEl, j = M.oldIndex, u = M.newIndex, S = M.oldDraggableIndex, i = M.newDraggableIndex, C = M.originalEvent, w = M.putSortable, E = M.extraEventProperties;
  if (A = A || I && I[nA], !!A) {
    var x, n = A.options, a = "on" + g.charAt(0).toUpperCase() + g.substr(1);
    window.CustomEvent && !xI && !pD ? x = new CustomEvent(g, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(g, !0, !0)), x.to = L || I, x.from = t || I, x.item = D || I, x.clone = N, x.oldIndex = j, x.newIndex = u, x.oldDraggableIndex = S, x.newDraggableIndex = i, x.originalEvent = C, x.pullMode = w ? w.lastPutMode : void 0;
    var z = _A(_A({}, E), QD.getEventProperties(g, A));
    for (var d in z)
      x[d] = z[d];
    I && I.dispatchEvent(x), n[a] && n[a].call(A, x);
  }
}
var MT = ["evt"], wA = function(A, I) {
  var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, D = g.evt, N = ZE(g, MT);
  QD.pluginEvent.bind(xM)(A, I, _A({
    dragEl: K,
    parentEl: XM,
    ghostEl: lM,
    rootEl: JM,
    nextEl: VI,
    lastDownEl: EN,
    cloneEl: RM,
    cloneHidden: zI,
    dragStarted: tD,
    putSortable: DA,
    activeSortable: xM.active,
    originalEvent: D,
    oldIndex: zg,
    oldDraggableIndex: wD,
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
  KE(_A({
    putSortable: DA,
    cloneEl: RM,
    targetEl: K,
    rootEl: JM,
    oldIndex: zg,
    oldDraggableIndex: wD,
    newIndex: yA,
    newDraggableIndex: sI
  }, M));
}
var K, XM, lM, JM, VI, EN, RM, zI, zg, yA, wD, sI, RD, DA, ag = !1, WN = !1, kN = [], GI, kA, VL, ZL, Ou, hu, tD, eg, ED, TD = !1, HD = !1, TN, LA, BL = [], bt = !1, pN = [], uL = typeof document < "u", _D = yi, bu = pD || xI ? "cssFloat" : "float", AT = uL && !PE && !yi && "draggable" in document.createElement("div"), zi = function() {
  if (!!uL) {
    if (xI)
      return !1;
    var M = document.createElement("x");
    return M.style.cssText = "pointer-events:auto", M.style.pointerEvents === "auto";
  }
}(), Yi = function(A, I) {
  var g = TM(A), D = parseInt(g.width) - parseInt(g.paddingLeft) - parseInt(g.paddingRight) - parseInt(g.borderLeftWidth) - parseInt(g.borderRightWidth), N = kg(A, 0, I), L = kg(A, 1, I), t = N && TM(N), j = L && TM(L), u = t && parseInt(t.marginLeft) + parseInt(t.marginRight) + KM(N).width, S = j && parseInt(j.marginLeft) + parseInt(j.marginRight) + KM(L).width;
  if (g.display === "flex")
    return g.flexDirection === "column" || g.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (g.display === "grid")
    return g.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (N && t.float && t.float !== "none") {
    var i = t.float === "left" ? "left" : "right";
    return L && (j.clear === "both" || j.clear === i) ? "vertical" : "horizontal";
  }
  return N && (t.display === "block" || t.display === "flex" || t.display === "table" || t.display === "grid" || u >= D && g[bu] === "none" || L && g[bu] === "none" && u + S > D) ? "vertical" : "horizontal";
}, IT = function(A, I, g) {
  var D = g ? A.left : A.top, N = g ? A.right : A.bottom, L = g ? A.width : A.height, t = g ? I.left : I.top, j = g ? I.right : I.bottom, u = g ? I.width : I.height;
  return D === t || N === j || D + L / 2 === t + u / 2;
}, gT = function(A, I) {
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
    return function(t, j, u, S) {
      var i = t.options.group.name && j.options.group.name && t.options.group.name === j.options.group.name;
      if (N == null && (L || i))
        return !0;
      if (N == null || N === !1)
        return !1;
      if (L && N === "clone")
        return N;
      if (typeof N == "function")
        return I(N(t, j, u, S), L)(t, j, u, S);
      var C = (L ? t : j).options.group.name;
      return N === !0 || typeof N == "string" && N === C || N.join && N.indexOf(C) > -1;
    };
  }
  var g = {}, D = A.group;
  (!D || wN(D) != "object") && (D = {
    name: D
  }), g.name = D.name, g.checkPull = I(D.pull, !0), g.checkPut = I(D.put), g.revertClone = D.revertClone, A.group = g;
}, di = function() {
  !zi && lM && TM(lM, "display", "none");
}, Ui = function() {
  !zi && lM && TM(lM, "display", "");
};
uL && document.addEventListener("click", function(M) {
  if (WN)
    return M.preventDefault(), M.stopPropagation && M.stopPropagation(), M.stopImmediatePropagation && M.stopImmediatePropagation(), WN = !1, !1;
}, !0);
var fI = function(A) {
  if (K) {
    A = A.touches ? A.touches[0] : A;
    var I = gT(A.clientX, A.clientY);
    if (I) {
      var g = {};
      for (var D in A)
        A.hasOwnProperty(D) && (g[D] = A[D]);
      g.target = g.rootEl = I, g.preventDefault = void 0, g.stopPropagation = void 0, I[nA]._onDragOver(g);
    }
  }
}, DT = function(A) {
  K && K.parentNode[nA]._isOutsideThisEl(A.target);
};
function xM(M, A) {
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
    supportPointer: xM.supportPointer !== !1 && "PointerEvent" in window && !eD,
    emptyInsertThreshold: 5
  };
  QD.initializePlugins(this, M, I);
  for (var g in I)
    !(g in A) && (A[g] = I[g]);
  ri(A);
  for (var D in this)
    D.charAt(0) === "_" && typeof this[D] == "function" && (this[D] = this[D].bind(this));
  this.nativeDraggable = A.forceFallback ? !1 : AT, this.nativeDraggable && (this.options.touchStartThreshold = 1), A.supportPointer ? WM(M, "pointerdown", this._onTapStart) : (WM(M, "mousedown", this._onTapStart), WM(M, "touchstart", this._onTapStart)), this.nativeDraggable && (WM(M, "dragover", this), WM(M, "dragenter", this)), kN.push(this.el), A.store && A.store.get && this.sort(A.store.get(this) || []), iI(this, _E());
}
xM.prototype = {
  constructor: xM,
  _isOutsideThisEl: function(A) {
    !this.el.contains(A) && A !== this.el && (eg = null);
  },
  _getDirection: function(A, I) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, A, I, K) : this.options.direction;
  },
  _onTapStart: function(A) {
    if (!!A.cancelable) {
      var I = this, g = this.el, D = this.options, N = D.preventOnFilter, L = A.type, t = A.touches && A.touches[0] || A.pointerType && A.pointerType === "touch" && A, j = (t || A).target, u = A.target.shadowRoot && (A.path && A.path[0] || A.composedPath && A.composedPath()[0]) || j, S = D.filter;
      if (eT(g), !K && !(/mousedown|pointerdown/.test(L) && A.button !== 0 || D.disabled) && !u.isContentEditable && !(!this.nativeDraggable && eD && j && j.tagName.toUpperCase() === "SELECT") && (j = PA(j, D.draggable, g, !1), !(j && j.animated) && EN !== j)) {
        if (zg = YA(j), wD = YA(j, D.draggable), typeof S == "function") {
          if (S.call(this, A, j, this)) {
            uA({
              sortable: I,
              rootEl: u,
              name: "filter",
              targetEl: j,
              toEl: g,
              fromEl: g
            }), wA("filter", I, {
              evt: A
            }), N && A.cancelable && A.preventDefault();
            return;
          }
        } else if (S && (S = S.split(",").some(function(i) {
          if (i = PA(u, i.trim(), g, !1), i)
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
        }), S)) {
          N && A.cancelable && A.preventDefault();
          return;
        }
        D.handle && !PA(u, D.handle, g, !1) || this._prepareDragStart(A, t, j);
      }
    }
  },
  _prepareDragStart: function(A, I, g) {
    var D = this, N = D.el, L = D.options, t = N.ownerDocument, j;
    if (g && !K && g.parentNode === N) {
      var u = KM(g);
      if (JM = N, K = g, XM = K.parentNode, VI = K.nextSibling, EN = g, RD = L.group, xM.dragged = K, GI = {
        target: K,
        clientX: (I || A).clientX,
        clientY: (I || A).clientY
      }, Ou = GI.clientX - u.left, hu = GI.clientY - u.top, this._lastX = (I || A).clientX, this._lastY = (I || A).clientY, K.style["will-change"] = "all", j = function() {
        if (wA("delayEnded", D, {
          evt: A
        }), xM.eventCanceled) {
          D._onDrop();
          return;
        }
        D._disableDelayedDragEvents(), !ru && D.nativeDraggable && (K.draggable = !0), D._triggerDragStart(A, I), uA({
          sortable: D,
          name: "choose",
          originalEvent: A
        }), aA(K, L.chosenClass, !0);
      }, L.ignore.split(",").forEach(function(S) {
        oi(K, S.trim(), PL);
      }), WM(t, "dragover", fI), WM(t, "mousemove", fI), WM(t, "touchmove", fI), WM(t, "mouseup", D._onDrop), WM(t, "touchend", D._onDrop), WM(t, "touchcancel", D._onDrop), ru && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), wA("delayStart", this, {
        evt: A
      }), L.delay && (!L.delayOnTouchOnly || I) && (!this.nativeDraggable || !(pD || xI))) {
        if (xM.eventCanceled) {
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
      document.selection ? xN(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(A, I) {
    if (ag = !1, JM && K) {
      wA("dragStarted", this, {
        evt: I
      }), this.nativeDraggable && WM(document, "dragover", DT);
      var g = this.options;
      !A && aA(K, g.dragClass, !1), aA(K, g.ghostClass, !0), xM.active = this, A && this._appendGhost(), uA({
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
    if (GI) {
      var I = this.options, g = I.fallbackTolerance, D = I.fallbackOffset, N = A.touches ? A.touches[0] : A, L = lM && Ug(lM, !0), t = lM && L && L.a, j = lM && L && L.d, u = _D && LA && mu(LA), S = (N.clientX - GI.clientX + D.x) / (t || 1) + (u ? u[0] - BL[0] : 0) / (t || 1), i = (N.clientY - GI.clientY + D.y) / (j || 1) + (u ? u[1] - BL[1] : 0) / (j || 1);
      if (!xM.active && !ag) {
        if (g && Math.max(Math.abs(N.clientX - this._lastX), Math.abs(N.clientY - this._lastY)) < g)
          return;
        this._onDragStart(A, !0);
      }
      if (lM) {
        L ? (L.e += S - (VL || 0), L.f += i - (ZL || 0)) : L = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: S,
          f: i
        };
        var C = "matrix(".concat(L.a, ",").concat(L.b, ",").concat(L.c, ",").concat(L.d, ",").concat(L.e, ",").concat(L.f, ")");
        TM(lM, "webkitTransform", C), TM(lM, "mozTransform", C), TM(lM, "msTransform", C), TM(lM, "transform", C), VL = S, ZL = i, kA = N;
      }
      A.cancelable && A.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!lM) {
      var A = this.options.fallbackOnBody ? document.body : JM, I = KM(K, !0, _D, !0, A), g = this.options;
      if (_D) {
        for (LA = A; TM(LA, "position") === "static" && TM(LA, "transform") === "none" && LA !== document; )
          LA = LA.parentNode;
        LA !== document.body && LA !== document.documentElement ? (LA === document && (LA = RA()), I.top += LA.scrollTop, I.left += LA.scrollLeft) : LA = RA(), BL = mu(LA);
      }
      lM = K.cloneNode(!0), aA(lM, g.ghostClass, !1), aA(lM, g.fallbackClass, !0), aA(lM, g.dragClass, !0), TM(lM, "transition", ""), TM(lM, "transform", ""), TM(lM, "box-sizing", "border-box"), TM(lM, "margin", 0), TM(lM, "top", I.top), TM(lM, "left", I.left), TM(lM, "width", I.width), TM(lM, "height", I.height), TM(lM, "opacity", "0.8"), TM(lM, "position", _D ? "absolute" : "fixed"), TM(lM, "zIndex", "100000"), TM(lM, "pointerEvents", "none"), xM.ghost = lM, A.appendChild(lM), TM(lM, "transform-origin", Ou / parseInt(lM.style.width) * 100 + "% " + hu / parseInt(lM.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(A, I) {
    var g = this, D = A.dataTransfer, N = g.options;
    if (wA("dragStart", this, {
      evt: A
    }), xM.eventCanceled) {
      this._onDrop();
      return;
    }
    wA("setupClone", this), xM.eventCanceled || (RM = ci(K), RM.draggable = !1, RM.style["will-change"] = "", this._hideClone(), aA(RM, this.options.chosenClass, !1), xM.clone = RM), g.cloneId = xN(function() {
      wA("clone", g), !xM.eventCanceled && (g.options.removeCloneOnHide || JM.insertBefore(RM, K), g._hideClone(), uA({
        sortable: g,
        name: "clone"
      }));
    }), !I && aA(K, N.dragClass, !0), I ? (WN = !0, g._loopId = setInterval(g._emulateDragOver, 50)) : (OM(document, "mouseup", g._onDrop), OM(document, "touchend", g._onDrop), OM(document, "touchcancel", g._onDrop), D && (D.effectAllowed = "move", N.setData && N.setData.call(g, D, K)), WM(document, "drop", g), TM(K, "transform", "translateZ(0)")), ag = !0, g._dragStartId = xN(g._dragStarted.bind(g, I, A)), WM(document, "selectstart", g), tD = !0, eD && TM(document.body, "user-select", "none");
  },
  _onDragOver: function(A) {
    var I = this.el, g = A.target, D, N, L, t = this.options, j = t.group, u = xM.active, S = RD === j, i = t.sort, C = DA || u, w, E = this, x = !1;
    if (bt)
      return;
    function n(yM, dM) {
      wA(yM, E, _A({
        evt: A,
        isOwner: S,
        axis: w ? "vertical" : "horizontal",
        revert: L,
        dragRect: D,
        targetRect: N,
        canSort: i,
        fromSortable: C,
        target: g,
        completed: z,
        onMove: function(vM, fM) {
          return $D(JM, I, K, D, vM, KM(vM), A, fM);
        },
        changed: d
      }, dM));
    }
    function a() {
      n("dragOverAnimationCapture"), E.captureAnimationState(), E !== C && C.captureAnimationState();
    }
    function z(yM) {
      return n("dragOverCompleted", {
        insertion: yM
      }), yM && (S ? u._hideClone() : u._showClone(E), E !== C && (aA(K, DA ? DA.options.ghostClass : u.options.ghostClass, !1), aA(K, t.ghostClass, !0)), DA !== E && E !== xM.active ? DA = E : E === xM.active && DA && (DA = null), C === E && (E._ignoreWhileAnimating = g), E.animateAll(function() {
        n("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== C && (C.animateAll(), C._ignoreWhileAnimating = null)), (g === K && !K.animated || g === I && !g.animated) && (eg = null), !t.dragoverBubble && !A.rootEl && g !== document && (K.parentNode[nA]._isOutsideThisEl(A.target), !yM && fI(A)), !t.dragoverBubble && A.stopPropagation && A.stopPropagation(), x = !0;
    }
    function d() {
      yA = YA(K), sI = YA(K, t.draggable), uA({
        sortable: E,
        name: "change",
        toEl: I,
        newIndex: yA,
        newDraggableIndex: sI,
        originalEvent: A
      });
    }
    if (A.preventDefault !== void 0 && A.cancelable && A.preventDefault(), g = PA(g, t.draggable, I, !0), n("dragOver"), xM.eventCanceled)
      return x;
    if (K.contains(A.target) || g.animated && g.animatingX && g.animatingY || E._ignoreWhileAnimating === g)
      return z(!1);
    if (WN = !1, u && !t.disabled && (S ? i || (L = XM !== JM) : DA === this || (this.lastPutMode = RD.checkPull(this, u, K, A)) && j.checkPut(this, u, K, A))) {
      if (w = this._getDirection(A, g) === "vertical", D = KM(K), n("dragOverValid"), xM.eventCanceled)
        return x;
      if (L)
        return XM = JM, a(), this._hideClone(), n("revert"), xM.eventCanceled || (VI ? JM.insertBefore(K, VI) : JM.appendChild(K)), z(!0);
      var Y = zj(I, t.draggable);
      if (!Y || jT(A, w, this) && !Y.animated) {
        if (Y === K)
          return z(!1);
        if (Y && I === A.target && (g = Y), g && (N = KM(g)), $D(JM, I, K, D, g, N, A, !!g) !== !1)
          return a(), I.appendChild(K), XM = I, d(), z(!0);
      } else if (Y && tT(A, w, this)) {
        var h = kg(I, 0, t, !0);
        if (h === K)
          return z(!1);
        if (g = h, N = KM(g), $D(JM, I, K, D, g, N, A, !1) !== !1)
          return a(), I.insertBefore(K, h), XM = I, d(), z(!0);
      } else if (g.parentNode === I) {
        N = KM(g);
        var k = 0, G, r = K.parentNode !== I, b = !IT(K.animated && K.toRect || D, g.animated && g.toRect || N, w), Z = w ? "top" : "left", R = Uu(g, "top", "top") || Uu(K, "top", "top"), AM = R ? R.scrollTop : void 0;
        eg !== g && (G = N[Z], TD = !1, HD = !b && t.invertSwap || r), k = uT(A, g, N, w, b ? 1 : t.swapThreshold, t.invertedSwapThreshold == null ? t.swapThreshold : t.invertedSwapThreshold, HD, eg === g);
        var LM;
        if (k !== 0) {
          var IM = YA(K);
          do
            IM -= k, LM = XM.children[IM];
          while (LM && (TM(LM, "display") === "none" || LM === lM));
        }
        if (k === 0 || LM === g)
          return z(!1);
        eg = g, ED = k;
        var oM = g.nextElementSibling, SM = !1;
        SM = k === 1;
        var tM = $D(JM, I, K, D, g, N, A, SM);
        if (tM !== !1)
          return (tM === 1 || tM === -1) && (SM = tM === 1), bt = !0, setTimeout(LT, 30), a(), SM && !oM ? I.appendChild(K) : g.parentNode.insertBefore(K, SM ? oM : g), R && si(R, 0, AM - R.scrollTop), XM = K.parentNode, G !== void 0 && !HD && (TN = Math.abs(G - KM(g)[Z])), d(), z(!0);
      }
      if (I.contains(K))
        return z(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    OM(document, "mousemove", this._onTouchMove), OM(document, "touchmove", this._onTouchMove), OM(document, "pointermove", this._onTouchMove), OM(document, "dragover", fI), OM(document, "mousemove", fI), OM(document, "touchmove", fI);
  },
  _offUpEvents: function() {
    var A = this.el.ownerDocument;
    OM(A, "mouseup", this._onDrop), OM(A, "touchend", this._onDrop), OM(A, "pointerup", this._onDrop), OM(A, "touchcancel", this._onDrop), OM(document, "selectstart", this);
  },
  _onDrop: function(A) {
    var I = this.el, g = this.options;
    if (yA = YA(K), sI = YA(K, g.draggable), wA("drop", this, {
      evt: A
    }), XM = K && K.parentNode, yA = YA(K), sI = YA(K, g.draggable), xM.eventCanceled) {
      this._nulling();
      return;
    }
    ag = !1, HD = !1, TD = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Wt(this.cloneId), Wt(this._dragStartId), this.nativeDraggable && (OM(document, "drop", this), OM(I, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), eD && TM(document.body, "user-select", ""), TM(K, "transform", ""), A && (tD && (A.cancelable && A.preventDefault(), !g.dropBubble && A.stopPropagation()), lM && lM.parentNode && lM.parentNode.removeChild(lM), (JM === XM || DA && DA.lastPutMode !== "clone") && RM && RM.parentNode && RM.parentNode.removeChild(RM), K && (this.nativeDraggable && OM(K, "dragend", this), PL(K), K.style["will-change"] = "", tD && !ag && aA(K, DA ? DA.options.ghostClass : this.options.ghostClass, !1), aA(K, this.options.chosenClass, !1), uA({
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
    })), xM.active && ((yA == null || yA === -1) && (yA = zg, sI = wD), uA({
      sortable: this,
      name: "end",
      toEl: XM,
      originalEvent: A
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    wA("nulling", this), JM = K = XM = lM = VI = RM = EN = zI = GI = kA = tD = yA = sI = zg = wD = eg = ED = DA = RD = xM.dragged = xM.ghost = xM.clone = xM.active = null, pN.forEach(function(A) {
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
        K && (this._onDragOver(A), NT(A));
        break;
      case "selectstart":
        A.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var A = [], I, g = this.el.children, D = 0, N = g.length, L = this.options; D < N; D++)
      I = g[D], PA(I, L.draggable, this.el, !1) && A.push(I.getAttribute(L.dataIdAttr) || iT(I));
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
    var D = QD.modifyOption(this, A, I);
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
      if (wA("hideClone", this), xM.eventCanceled)
        return;
      TM(RM, "display", "none"), this.options.removeCloneOnHide && RM.parentNode && RM.parentNode.removeChild(RM), zI = !0;
    }
  },
  _showClone: function(A) {
    if (A.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (zI) {
      if (wA("showClone", this), xM.eventCanceled)
        return;
      K.parentNode == JM && !this.options.group.revertClone ? JM.insertBefore(RM, K) : VI ? JM.insertBefore(RM, VI) : JM.appendChild(RM), this.options.group.revertClone && this.animate(K, RM), TM(RM, "display", ""), zI = !1;
    }
  }
};
function NT(M) {
  M.dataTransfer && (M.dataTransfer.dropEffect = "move"), M.cancelable && M.preventDefault();
}
function $D(M, A, I, g, D, N, L, t) {
  var j, u = M[nA], S = u.options.onMove, i;
  return window.CustomEvent && !xI && !pD ? j = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (j = document.createEvent("Event"), j.initEvent("move", !0, !0)), j.to = A, j.from = M, j.dragged = I, j.draggedRect = g, j.related = D || A, j.relatedRect = N || KM(A), j.willInsertAfter = t, j.originalEvent = L, M.dispatchEvent(j), S && (i = S.call(u, j, L)), i;
}
function PL(M) {
  M.draggable = !1;
}
function LT() {
  bt = !1;
}
function tT(M, A, I) {
  var g = KM(kg(I.el, 0, I.options, !0)), D = 10;
  return A ? M.clientX < g.left - D || M.clientY < g.top && M.clientX < g.right : M.clientY < g.top - D || M.clientY < g.bottom && M.clientX < g.left;
}
function jT(M, A, I) {
  var g = KM(zj(I.el, I.options.draggable)), D = 10;
  return A ? M.clientX > g.right + D || M.clientX <= g.right && M.clientY > g.bottom && M.clientX >= g.left : M.clientX > g.right && M.clientY > g.top || M.clientX <= g.right && M.clientY > g.bottom + D;
}
function uT(M, A, I, g, D, N, L, t) {
  var j = g ? M.clientY : M.clientX, u = g ? I.height : I.width, S = g ? I.top : I.left, i = g ? I.bottom : I.right, C = !1;
  if (!L) {
    if (t && TN < u * D) {
      if (!TD && (ED === 1 ? j > S + u * N / 2 : j < i - u * N / 2) && (TD = !0), TD)
        C = !0;
      else if (ED === 1 ? j < S + TN : j > i - TN)
        return -ED;
    } else if (j > S + u * (1 - D) / 2 && j < i - u * (1 - D) / 2)
      return ST(A);
  }
  return C = C || L, C && (j < S + u * N / 2 || j > i - u * N / 2) ? j > S + u / 2 ? 1 : -1 : 0;
}
function ST(M) {
  return YA(K) < YA(M) ? 1 : -1;
}
function iT(M) {
  for (var A = M.tagName + M.className + M.src + M.href + M.textContent, I = A.length, g = 0; I--; )
    g += A.charCodeAt(I);
  return g.toString(36);
}
function eT(M) {
  pN.length = 0;
  for (var A = M.getElementsByTagName("input"), I = A.length; I--; ) {
    var g = A[I];
    g.checked && pN.push(g);
  }
}
function xN(M) {
  return setTimeout(M, 0);
}
function Wt(M) {
  return clearTimeout(M);
}
uL && WM(document, "touchmove", function(M) {
  (xM.active || ag) && M.cancelable && M.preventDefault();
});
xM.utils = {
  on: WM,
  off: OM,
  css: TM,
  find: oi,
  is: function(A, I) {
    return !!PA(A, I, A, !1);
  },
  extend: RE,
  throttle: li,
  closest: PA,
  toggleClass: aA,
  clone: ci,
  index: YA,
  nextTick: xN,
  cancelNextTick: Wt,
  detectDirection: Yi,
  getChild: kg
};
xM.get = function(M) {
  return M[nA];
};
xM.mount = function() {
  for (var M = arguments.length, A = new Array(M), I = 0; I < M; I++)
    A[I] = arguments[I];
  A[0].constructor === Array && (A = A[0]), A.forEach(function(g) {
    if (!g.prototype || !g.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(g));
    g.utils && (xM.utils = _A(_A({}, xM.utils), g.utils)), QD.mount(g);
  });
};
xM.create = function(M, A) {
  return new xM(M, A);
};
xM.version = BE;
var $M = [], jD, kt, pt = !1, FL, XL, QN, uD;
function CT() {
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
      this.sortable.nativeDraggable ? OM(document, "dragover", this._handleAutoScroll) : (OM(document, "pointermove", this._handleFallbackAutoScroll), OM(document, "touchmove", this._handleFallbackAutoScroll), OM(document, "mousemove", this._handleFallbackAutoScroll)), Wu(), aN(), HE();
    },
    nulling: function() {
      QN = kt = jD = pt = uD = FL = XL = null, $M.length = 0;
    },
    _handleFallbackAutoScroll: function(I) {
      this._handleAutoScroll(I, !0);
    },
    _handleAutoScroll: function(I, g) {
      var D = this, N = (I.touches ? I.touches[0] : I).clientX, L = (I.touches ? I.touches[0] : I).clientY, t = document.elementFromPoint(N, L);
      if (QN = I, g || this.options.forceAutoScrollFallback || pD || xI || eD) {
        RL(I, this.options, t, g);
        var j = YI(t, !0);
        pt && (!uD || N !== FL || L !== XL) && (uD && Wu(), uD = setInterval(function() {
          var u = YI(document.elementFromPoint(N, L), !0);
          u !== j && (j = u, aN()), RL(I, D.options, u, g);
        }, 10), FL = N, XL = L);
      } else {
        if (!this.options.bubbleScroll || YI(t, !0) === RA()) {
          aN();
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
function aN() {
  $M.forEach(function(M) {
    clearInterval(M.pid);
  }), $M = [];
}
function Wu() {
  clearInterval(uD);
}
var RL = li(function(M, A, I, g) {
  if (!!A.scroll) {
    var D = (M.touches ? M.touches[0] : M).clientX, N = (M.touches ? M.touches[0] : M).clientY, L = A.scrollSensitivity, t = A.scrollSpeed, j = RA(), u = !1, S;
    kt !== I && (kt = I, aN(), jD = A.scroll, S = A.scrollFn, jD === !0 && (jD = YI(I, !0)));
    var i = 0, C = jD;
    do {
      var w = C, E = KM(w), x = E.top, n = E.bottom, a = E.left, z = E.right, d = E.width, Y = E.height, h = void 0, k = void 0, G = w.scrollWidth, r = w.scrollHeight, b = TM(w), Z = w.scrollLeft, R = w.scrollTop;
      w === j ? (h = d < G && (b.overflowX === "auto" || b.overflowX === "scroll" || b.overflowX === "visible"), k = Y < r && (b.overflowY === "auto" || b.overflowY === "scroll" || b.overflowY === "visible")) : (h = d < G && (b.overflowX === "auto" || b.overflowX === "scroll"), k = Y < r && (b.overflowY === "auto" || b.overflowY === "scroll"));
      var AM = h && (Math.abs(z - D) <= L && Z + d < G) - (Math.abs(a - D) <= L && !!Z), LM = k && (Math.abs(n - N) <= L && R + Y < r) - (Math.abs(x - N) <= L && !!R);
      if (!$M[i])
        for (var IM = 0; IM <= i; IM++)
          $M[IM] || ($M[IM] = {});
      ($M[i].vx != AM || $M[i].vy != LM || $M[i].el !== w) && ($M[i].el = w, $M[i].vx = AM, $M[i].vy = LM, clearInterval($M[i].pid), (AM != 0 || LM != 0) && (u = !0, $M[i].pid = setInterval(function() {
        g && this.layer === 0 && xM.active._onTouchMove(QN);
        var oM = $M[this.layer].vy ? $M[this.layer].vy * t : 0, SM = $M[this.layer].vx ? $M[this.layer].vx * t : 0;
        typeof S == "function" && S.call(xM.dragged.parentNode[nA], SM, oM, M, QN, $M[this.layer].el) !== "continue" || si($M[this.layer].el, SM, oM);
      }.bind({
        layer: i
      }), 24))), i++;
    } while (A.bubbleScroll && C !== j && (C = YI(C, !1)));
    pt = u;
  }
}, 30), mi = function(A) {
  var I = A.originalEvent, g = A.putSortable, D = A.dragEl, N = A.activeSortable, L = A.dispatchSortableEvent, t = A.hideGhostForTarget, j = A.unhideGhostForTarget;
  if (!!I) {
    var u = g || N;
    t();
    var S = I.changedTouches && I.changedTouches.length ? I.changedTouches[0] : I, i = document.elementFromPoint(S.clientX, S.clientY);
    j(), u && !u.el.contains(i) && (L("spill"), this.onSpill({
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
    var D = kg(this.sortable.el, this.startIndex, this.options);
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
xM.mount(new CT());
xM.mount(rj, Yj);
function wT() {
  return typeof window < "u" ? window.console : global.console;
}
const ET = wT();
function TT(M) {
  const A = /* @__PURE__ */ Object.create(null);
  return function(g) {
    return A[g] || (A[g] = M(g));
  };
}
const xT = /-(\w)/g, ku = TT((M) => M.replace(xT, (A, I) => I ? I.toUpperCase() : ""));
function HL(M) {
  M.parentElement !== null && M.parentElement.removeChild(M);
}
function pu(M, A, I) {
  const g = I === 0 ? M.children[0] : M.children[I - 1].nextSibling;
  M.insertBefore(A, g);
}
function aT(M, A) {
  return Object.values(M).indexOf(A);
}
function yT(M, A, I, g) {
  if (!M)
    return [];
  const D = Object.values(M), N = A.length - g;
  return [...A].map((t, j) => j >= N ? D.length : D.indexOf(t));
}
function Oi(M, A) {
  this.$nextTick(() => this.$emit(M.toLowerCase(), A));
}
function nT(M) {
  return (A) => {
    this.realList !== null && this["onDrag" + M](A), Oi.call(this, M, A);
  };
}
function oT(M) {
  return ["transition-group", "TransitionGroup"].includes(M);
}
function lT(M) {
  if (!M || M.length !== 1)
    return !1;
  const [{ type: A }] = M;
  return A ? oT(A.name) : !1;
}
function sT(M, A) {
  return A ? { ...A.props, ...A.attrs } : M;
}
const Qt = ["Start", "Add", "Remove", "Update", "End"], vt = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], cT = ["Move", ...Qt, ...vt].map((M) => "on" + M);
let _L = null;
const zT = {
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
  props: zT,
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
    const M = this.$slots.default ? this.$slots.default() : null, A = sT(this.$attrs, this.componentData);
    return M ? (this.transitionMode = lT(M), sM(this.getTag(), A, M)) : sM(this.getTag(), A, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && ET.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const M = {};
    Qt.forEach((D) => {
      M["on" + D] = nT.call(this, D);
    }), vt.forEach((D) => {
      M["on" + D] = Oi.bind(this, D);
    });
    const A = Object.keys(this.$attrs).reduce((D, N) => (D[ku(N)] = this.$attrs[N], D), {}), I = Object.assign({}, A, M, {
      onMove: (D, N) => this.onDragMove(D, N)
    });
    !("draggable" in I) && (I.draggable = ">*");
    const g = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new xM(g, I), g.__draggable_component__ = this, this.computeIndexes();
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
      return this.component ? aM(this.component) : this.tag;
    },
    updateOptions(M) {
      for (var A in M) {
        const I = ku(A);
        cT.indexOf(I) === -1 && this._sortable.option(I, M[A]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = yT(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(M) {
      const A = aT(this.getChildrenNodes() || [], M);
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
}), YT = { key: 0 }, rT = /* @__PURE__ */ s("br", null, null, -1), dT = /* @__PURE__ */ s("br", null, null, -1), UT = { key: 1 }, mT = { key: 0 }, OT = { key: 1 }, hT = /* @__PURE__ */ v({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    dispLang: { type: Boolean }
  },
  setup(M) {
    return kD(), (A, I) => {
      const g = aM("b-col"), D = aM("b-form-input"), N = aM("b-row"), L = aM("b-form-textarea");
      return M.dispLang ? (T(), c("div", YT, [
        M.textType === e(rg).ShortAnswer ? (T(), V(N, { key: 0 }, {
          default: O(() => [
            W(g, { class: "col-sm-1" }, {
              default: O(() => [
                s("h6", null, P(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            W(g, { class: "col-sm-11" }, {
              default: O(() => [
                W(D, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[0] || (I[0] = (t) => M.model.value = t)
                }, null, 8, ["modelValue"]),
                rT
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : M.textType === e(rg).Paragraph ? (T(), V(N, { key: 1 }, {
          default: O(() => [
            W(g, { class: "col-sm-1" }, {
              default: O(() => [
                s("h6", null, P(M.model.lang) + ": ", 1)
              ]),
              _: 1
            }),
            W(g, { class: "col-sm-11" }, {
              default: O(() => [
                W(L, {
                  modelValue: M.model.value,
                  "onUpdate:modelValue": I[1] || (I[1] = (t) => M.model.value = t),
                  rows: "3",
                  "max-rows": "6"
                }, null, 8, ["modelValue"]),
                dT
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : B("", !0)
      ])) : (T(), c("div", UT, [
        M.textType === e(rg).ShortAnswer ? (T(), c("div", mT, [
          W(D, {
            modelValue: M.model.value,
            "onUpdate:modelValue": I[2] || (I[2] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : M.textType === "Paragraph" ? (T(), c("div", OT, [
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
    return (A, I) => (T(!0), c(MM, null, eM(M.model.values, (g) => {
      var D;
      return T(), V(hT, {
        key: g.id,
        model: g,
        "text-type": M.textType,
        "disp-lang": ((D = M.model.values) == null ? void 0 : D.length) > 1
      }, null, 8, ["model", "text-type", "disp-lang"]);
    }), 128));
  }
}), bT = { class: "alert alert-info" }, WT = { key: 0 }, kT = { key: 0 }, pT = /* @__PURE__ */ s("h6", null, "Is Extended:", -1), QT = /* @__PURE__ */ s("br", null, null, -1), vT = { class: "toggle-button-cover" }, GT = { class: "button-cover" }, fT = {
  class: "button r",
  id: "button-1"
}, JT = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), VT = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), ZT = /* @__PURE__ */ s("h6", null, "Is Required:", -1), BT = /* @__PURE__ */ s("br", null, null, -1), PT = { class: "toggle-button-cover" }, FT = { class: "button-cover" }, XT = {
  class: "button r",
  id: "button-1"
}, RT = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), HT = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), _T = { key: 1 }, $T = {
  key: 0,
  class: "option-values"
}, qT = { key: 0 }, KT = {
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
    kD();
    const I = DM(!1), g = y(() => A.optionFieldType == YD.Checkboxes || A.optionFieldType == YD.RadioButtons);
    return (D, N) => {
      const L = aM("b-col"), t = aM("b-row"), j = aM("font-awesome-icon");
      return T(), c("div", bT, [
        I.value || M.disableInlineEditing ? (T(), c("div", WT, [
          W(Gt, {
            model: M.model.optionText,
            "text-type": e(rM).ShortAnswer
          }, null, 8, ["model", "text-type"]),
          e(g) ? (T(), c("span", kT, [
            W(t, null, {
              default: O(() => [
                W(L, { class: "col-sm-6" }, {
                  default: O(() => [
                    W(t, null, {
                      default: O(() => [
                        W(L, { class: "col-sm-4" }, {
                          default: O(() => [
                            pT
                          ]),
                          _: 1
                        }),
                        W(L, { class: "col-sm-8" }, {
                          default: O(() => [
                            QT,
                            s("div", vT, [
                              s("div", GT, [
                                s("div", fT, [
                                  _M(s("input", {
                                    "onUpdate:modelValue": N[0] || (N[0] = (u) => M.model.isExtendedInput = u),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [$I, M.model.isExtendedInput]
                                  ]),
                                  JT,
                                  VT
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
                  default: O(() => [
                    M.model.isExtendedInput ? (T(), V(t, { key: 0 }, {
                      default: O(() => [
                        W(L, { class: "col-sm-4" }, {
                          default: O(() => [
                            ZT
                          ]),
                          _: 1
                        }),
                        W(L, { class: "col-sm-8" }, {
                          default: O(() => [
                            BT,
                            s("div", PT, [
                              s("div", FT, [
                                s("div", XT, [
                                  _M(s("input", {
                                    "onUpdate:modelValue": N[1] || (N[1] = (u) => M.model.isExtendedInputRequired = u),
                                    type: "checkbox",
                                    class: "checkbox"
                                  }, null, 512), [
                                    [$I, M.model.isExtendedInputRequired]
                                  ]),
                                  RT,
                                  HT
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
          M.disableInlineEditing ? B("", !0) : (T(), V(j, {
            key: 1,
            icon: "fa-solid fa-circle-check",
            onClick: N[2] || (N[2] = (u) => I.value = !1),
            class: "fa-icon delete-button"
          }))
        ])) : (T(), c("div", _T, [
          (T(!0), c(MM, null, eM(M.model.optionText.values, (u) => {
            var S;
            return T(), c("span", null, [
              ((S = u.value) == null ? void 0 : S.length) > 0 ? (T(), c("span", $T, P(u.value), 1)) : B("", !0)
            ]);
          }), 256)),
          M.model.isExtendedInput ? (T(), c("span", qT, [
            W(j, {
              icon: "fa fa-th-list",
              class: "fa fa-th-list"
            }),
            M.model.isExtendedInputRequired ? (T(), c("span", KT, "*")) : B("", !0)
          ])) : B("", !0),
          W(j, {
            icon: "fa-solid fa-pen-to-square",
            onClick: N[3] || (N[3] = (u) => I.value = !0),
            class: "fa-icon"
          })
        ]))
      ]);
    };
  }
}), M0 = /* @__PURE__ */ s("h6", null, "Title:", -1), A0 = /* @__PURE__ */ s("h6", null, "Description:", -1), I0 = /* @__PURE__ */ s("br", null, null, -1), g0 = { key: 0 }, D0 = /* @__PURE__ */ s("h6", null, "Options:", -1), N0 = { class: "display-options" }, L0 = { class: "col-10" }, t0 = { class: "col-2" }, j0 = { class: "alert alert-success" }, u0 = /* @__PURE__ */ s("h6", null, "Add Option", -1), S0 = { class: "row" }, i0 = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "Required Field:")
], -1), e0 = { class: "col-sm-10" }, C0 = /* @__PURE__ */ s("br", null, null, -1), w0 = { class: "toggle-button-cover" }, E0 = { class: "button-cover" }, T0 = {
  class: "button r",
  id: "button-1"
}, x0 = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), a0 = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), y0 = /* @__PURE__ */ s("br", null, null, -1), n0 = {
  key: 1,
  class: "row"
}, o0 = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("h6", null, "Multiple Value Field:")
], -1), l0 = { class: "col-sm-10" }, s0 = /* @__PURE__ */ s("br", null, null, -1), c0 = { class: "toggle-button-cover" }, z0 = { class: "button-cover" }, Y0 = {
  class: "button r",
  id: "button-1"
}, r0 = /* @__PURE__ */ s("div", { class: "knobs" }, null, -1), d0 = /* @__PURE__ */ s("div", { class: "layer" }, null, -1), U0 = /* @__PURE__ */ v({
  __name: "Field",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = sj(A.model), g = kD(), D = DM(rE(g.lang, YE(Wg(g.lang)))), N = () => {
      A.model.options.push(UE(D.value)), D.value.isExtendedInput = !1, D.value.isExtendedInputRequired = !1, D.value.optionText.values.forEach((t) => t.value = "");
    }, L = (t) => {
      var u, S;
      const j = (u = A.model.options) == null ? void 0 : u.findIndex((i) => i.id == t);
      (S = A.model.options) == null || S.splice(j, 1);
    };
    return A.model.type, rM.AttachmentField, (t, j) => {
      const u = aM("b-col"), S = aM("b-row"), i = aM("font-awesome-icon");
      return T(), c(MM, null, [
        s("h5", null, P(M.model.type), 1),
        W(S, null, {
          default: O(() => [
            W(u, { class: "col-sm-2" }, {
              default: O(() => [
                M0
              ]),
              _: 1
            }),
            W(u, { class: "col-sm-10" }, {
              default: O(() => [
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
        W(S, null, {
          default: O(() => [
            W(u, { class: "col-sm-2" }, {
              default: O(() => [
                A0
              ]),
              _: 1
            }),
            W(u, { class: "col-sm-10" }, {
              default: O(() => [
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
        I0,
        e(I) ? (T(), c("div", g0, [
          D0,
          s("div", N0, [
            W(e(vN), {
              class: "dragArea list-group w-full",
              list: M.model.options
            }, {
              default: O(() => [
                (T(!0), c(MM, null, eM(M.model.options, (C) => (T(), c("div", {
                  key: C.id,
                  class: "option-entry row"
                }, [
                  s("div", L0, [
                    W(Qu, {
                      model: C,
                      "option-field-type": M.model.type
                    }, null, 8, ["model", "option-field-type"])
                  ]),
                  s("div", t0, [
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
          s("div", j0, [
            u0,
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
        s("div", S0, [
          i0,
          s("div", e0, [
            C0,
            s("div", w0, [
              s("div", E0, [
                s("div", T0, [
                  _M(s("input", {
                    "onUpdate:modelValue": j[1] || (j[1] = (C) => M.model.isRequired = C),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [$I, M.model.isRequired]
                  ]),
                  x0,
                  a0
                ])
              ])
            ])
          ])
        ]),
        y0,
        e(Ei)(M.model) ? (T(), c("div", n0, [
          o0,
          s("div", l0, [
            s0,
            s("div", c0, [
              s("div", z0, [
                s("div", Y0, [
                  _M(s("input", {
                    "onUpdate:modelValue": j[2] || (j[2] = (C) => M.model.isMultiValued = C),
                    type: "checkbox",
                    class: "checkbox"
                  }, null, 512), [
                    [$I, M.model.isMultiValued]
                  ]),
                  r0,
                  d0
                ])
              ])
            ])
          ])
        ])) : B("", !0)
      ], 64);
    };
  }
});
const m0 = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("h4", null, "Form properties")
], -1), O0 = { class: "form-field-border" }, h0 = /* @__PURE__ */ s("h6", null, "Name:", -1), b0 = /* @__PURE__ */ s("br", null, null, -1), W0 = /* @__PURE__ */ s("h6", null, "Description:", -1), k0 = /* @__PURE__ */ s("h3", null, "Fields", -1), p0 = /* @__PURE__ */ v({
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
      var S;
      const N = aM("b-col"), L = aM("b-form-input"), t = aM("b-row"), j = aM("b-form-textarea"), u = aM("font-awesome-icon");
      return T(), c(MM, null, [
        m0,
        s("div", O0, [
          W(t, null, {
            default: O(() => [
              W(N, { class: "col-sm-2" }, {
                default: O(() => [
                  h0
                ]),
                _: 1
              }),
              W(N, { class: "col-sm-10" }, {
                default: O(() => [
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
          b0,
          W(t, null, {
            default: O(() => [
              W(N, { class: "col-sm-2" }, {
                default: O(() => [
                  W0
                ]),
                _: 1
              }),
              W(N, { class: "col-sm-10" }, {
                default: O(() => [
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
        k0,
        W(e(vN), {
          class: "dragArea list-group w-full",
          list: (S = M.model) == null ? void 0 : S.fields
        }, {
          default: O(() => {
            var i;
            return [
              (T(!0), c(MM, null, eM((i = M.model) == null ? void 0 : i.fields, (C) => (T(), c("div", {
                key: C.id,
                class: "form-field-border form-field"
              }, [
                W(u, {
                  icon: "fa-solid fa-circle-xmark",
                  onClick: (w) => I(C.id),
                  class: "fa-icon field-delete"
                }, null, 8, ["onClick"]),
                W(U0, { model: C }, null, 8, ["model"])
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
function Q0(M) {
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
const xD = () => {
}, JA = Array.isArray, v0 = /\/$/, G0 = (M) => M.replace(v0, "");
function qL(M, A, I = "/") {
  let g, D = {}, N = "", L = "";
  const t = A.indexOf("#");
  let j = A.indexOf("?");
  return t < j && t >= 0 && (j = -1), j > -1 && (g = A.slice(0, j), N = A.slice(j + 1, t > -1 ? t : A.length), D = M(N)), t > -1 && (g = g || A.slice(0, t), L = A.slice(t, A.length)), g = Z0(g != null ? g : A, I), {
    fullPath: g + (N && "?") + N + L,
    path: g,
    query: D,
    hash: L
  };
}
function f0(M, A) {
  const I = A.query ? M(A.query) : "";
  return A.path + (I && "?") + I + (A.hash || "");
}
function vu(M, A) {
  return !A || !M.toLowerCase().startsWith(A.toLowerCase()) ? M : M.slice(A.length) || "/";
}
function J0(M, A, I) {
  const g = A.matched.length - 1, D = I.matched.length - 1;
  return g > -1 && g === D && pg(A.matched[g], I.matched[D]) && hi(A.params, I.params) && M(A.query) === M(I.query) && A.hash === I.hash;
}
function pg(M, A) {
  return (M.aliasOf || M) === (A.aliasOf || A);
}
function hi(M, A) {
  if (Object.keys(M).length !== Object.keys(A).length)
    return !1;
  for (const I in M)
    if (!V0(M[I], A[I]))
      return !1;
  return !0;
}
function V0(M, A) {
  return JA(M) ? Gu(M, A) : JA(A) ? Gu(A, M) : M === A;
}
function Gu(M, A) {
  return JA(A) ? M.length === A.length && M.every((I, g) => I === A[g]) : M.length === 1 && M[0] === A;
}
function Z0(M, A) {
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
var rD;
(function(M) {
  M.pop = "pop", M.push = "push";
})(rD || (rD = {}));
var aD;
(function(M) {
  M.back = "back", M.forward = "forward", M.unknown = "";
})(aD || (aD = {}));
function B0(M) {
  if (!M)
    if (yg) {
      const A = document.querySelector("base");
      M = A && A.getAttribute("href") || "/", M = M.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      M = "/";
  return M[0] !== "/" && M[0] !== "#" && (M = "/" + M), G0(M);
}
const P0 = /^[^#]+#/;
function F0(M, A) {
  return M.replace(P0, "#") + A;
}
function X0(M, A) {
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
function R0(M) {
  let A;
  if ("el" in M) {
    const I = M.el, g = typeof I == "string" && I.startsWith("#"), D = typeof I == "string" ? g ? document.getElementById(I.slice(1)) : document.querySelector(I) : I;
    if (!D)
      return;
    A = X0(D, M);
  } else
    A = M;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(A) : window.scrollTo(A.left != null ? A.left : window.pageXOffset, A.top != null ? A.top : window.pageYOffset);
}
function fu(M, A) {
  return (history.state ? history.state.position - A : -1) + M;
}
const ft = /* @__PURE__ */ new Map();
function H0(M, A) {
  ft.set(M, A);
}
function _0(M) {
  const A = ft.get(M);
  return ft.delete(M), A;
}
let $0 = () => location.protocol + "//" + location.host;
function bi(M, A) {
  const { pathname: I, search: g, hash: D } = A, N = M.indexOf("#");
  if (N > -1) {
    let t = D.includes(M.slice(N)) ? M.slice(N).length : 1, j = D.slice(t);
    return j[0] !== "/" && (j = "/" + j), vu(j, "");
  }
  return vu(I, M) + g + D;
}
function q0(M, A, I, g) {
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
        type: rD.pop,
        direction: n ? n > 0 ? aD.forward : aD.back : aD.unknown
      });
    });
  };
  function j() {
    L = I.value;
  }
  function u(C) {
    D.push(C);
    const w = () => {
      const E = D.indexOf(C);
      E > -1 && D.splice(E, 1);
    };
    return N.push(w), w;
  }
  function S() {
    const { history: C } = window;
    !C.state || C.replaceState(kM({}, C.state, { scroll: SL() }), "");
  }
  function i() {
    for (const C of N)
      C();
    N = [], window.removeEventListener("popstate", t), window.removeEventListener("beforeunload", S);
  }
  return window.addEventListener("popstate", t), window.addEventListener("beforeunload", S), {
    pauseListeners: j,
    listen: u,
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
function K0(M) {
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
  function N(j, u, S) {
    const i = M.indexOf("#"), C = i > -1 ? (I.host && document.querySelector("base") ? M : M.slice(i)) + j : $0() + M + j;
    try {
      A[S ? "replaceState" : "pushState"](u, "", C), D.value = u;
    } catch (w) {
      console.error(w), I[S ? "replace" : "assign"](C);
    }
  }
  function L(j, u) {
    const S = kM({}, A.state, Ju(
      D.value.back,
      j,
      D.value.forward,
      !0
    ), u, { position: D.value.position });
    N(j, S, !0), g.value = j;
  }
  function t(j, u) {
    const S = kM(
      {},
      D.value,
      A.state,
      {
        forward: j,
        scroll: SL()
      }
    );
    N(S.current, S, !0);
    const i = kM({}, Ju(g.value, j, null), { position: S.position + 1 }, u);
    N(j, i, !1), g.value = j;
  }
  return {
    location: g,
    state: D,
    push: t,
    replace: L
  };
}
function Mx(M) {
  M = B0(M);
  const A = K0(M), I = q0(M, A.state, A.location, A.replace);
  function g(N, L = !0) {
    L || I.pauseListeners(), history.go(N);
  }
  const D = kM({
    location: "",
    base: M,
    go: g,
    createHref: F0.bind(null, M)
  }, A, I);
  return Object.defineProperty(D, "location", {
    enumerable: !0,
    get: () => A.location.value
  }), Object.defineProperty(D, "state", {
    enumerable: !0,
    get: () => A.state.value
  }), D;
}
function Ax(M) {
  return M = location.host ? M || location.pathname + location.search : "", M.includes("#") || (M += "#"), Mx(M);
}
function Ix(M) {
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
function Qg(M, A) {
  return kM(new Error(), {
    type: M,
    [ki]: !0
  }, A);
}
function MI(M, A) {
  return M instanceof Error && ki in M && (A == null || !!(M.type & A));
}
const Zu = "[^/]+?", gx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Dx = /[.+*?^${}()[\]/\\]/g;
function Nx(M, A) {
  const I = kM({}, gx, A), g = [];
  let D = I.start ? "^" : "";
  const N = [];
  for (const u of M) {
    const S = u.length ? [] : [90];
    I.strict && !u.length && (D += "/");
    for (let i = 0; i < u.length; i++) {
      const C = u[i];
      let w = 40 + (I.sensitive ? 0.25 : 0);
      if (C.type === 0)
        i || (D += "/"), D += C.value.replace(Dx, "\\$&"), w += 40;
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
        i || (d = n && u.length < 2 ? `(?:/${d})` : "/" + d), n && (d += "?"), D += d, w += 20, n && (w += -8), x && (w += -20), z === ".*" && (w += -50);
      }
      S.push(w);
    }
    g.push(S);
  }
  if (I.strict && I.end) {
    const u = g.length - 1;
    g[u][g[u].length - 1] += 0.7000000000000001;
  }
  I.strict || (D += "/?"), I.end ? D += "$" : I.strict && (D += "(?:/|$)");
  const L = new RegExp(D, I.sensitive ? "" : "i");
  function t(u) {
    const S = u.match(L), i = {};
    if (!S)
      return null;
    for (let C = 1; C < S.length; C++) {
      const w = S[C] || "", E = N[C - 1];
      i[E.name] = w && E.repeatable ? w.split("/") : w;
    }
    return i;
  }
  function j(u) {
    let S = "", i = !1;
    for (const C of M) {
      (!i || !S.endsWith("/")) && (S += "/"), i = !1;
      for (const w of C)
        if (w.type === 0)
          S += w.value;
        else if (w.type === 1) {
          const { value: E, repeatable: x, optional: n } = w, a = E in u ? u[E] : "";
          if (JA(a) && !x)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const z = JA(a) ? a.join("/") : a;
          if (!z)
            if (n)
              C.length < 2 && (S.endsWith("/") ? S = S.slice(0, -1) : i = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          S += z;
        }
    }
    return S || "/";
  }
  return {
    re: L,
    score: g,
    keys: N,
    parse: t,
    stringify: j
  };
}
function Lx(M, A) {
  let I = 0;
  for (; I < M.length && I < A.length; ) {
    const g = A[I] - M[I];
    if (g)
      return g;
    I++;
  }
  return M.length < A.length ? M.length === 1 && M[0] === 40 + 40 ? -1 : 1 : M.length > A.length ? A.length === 1 && A[0] === 40 + 40 ? 1 : -1 : 0;
}
function tx(M, A) {
  let I = 0;
  const g = M.score, D = A.score;
  for (; I < g.length && I < D.length; ) {
    const N = Lx(g[I], D[I]);
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
const jx = {
  type: 0,
  value: ""
}, ux = /[a-zA-Z0-9_]/;
function Sx(M) {
  if (!M)
    return [[]];
  if (M === "/")
    return [[jx]];
  if (!M.startsWith("/"))
    throw new Error(`Invalid path "${M}"`);
  function A(w) {
    throw new Error(`ERR (${I})/"${u}": ${w}`);
  }
  let I = 0, g = I;
  const D = [];
  let N;
  function L() {
    N && D.push(N), N = [];
  }
  let t = 0, j, u = "", S = "";
  function i() {
    !u || (I === 0 ? N.push({
      type: 0,
      value: u
    }) : I === 1 || I === 2 || I === 3 ? (N.length > 1 && (j === "*" || j === "+") && A(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), N.push({
      type: 1,
      value: u,
      regexp: S,
      repeatable: j === "*" || j === "+",
      optional: j === "*" || j === "?"
    })) : A("Invalid state to consume buffer"), u = "");
  }
  function C() {
    u += j;
  }
  for (; t < M.length; ) {
    if (j = M[t++], j === "\\" && I !== 2) {
      g = I, I = 4;
      continue;
    }
    switch (I) {
      case 0:
        j === "/" ? (u && i(), L()) : j === ":" ? (i(), I = 1) : C();
        break;
      case 4:
        C(), I = g;
        break;
      case 1:
        j === "(" ? I = 2 : ux.test(j) ? C() : (i(), I = 0, j !== "*" && j !== "?" && j !== "+" && t--);
        break;
      case 2:
        j === ")" ? S[S.length - 1] == "\\" ? S = S.slice(0, -1) + j : I = 3 : S += j;
        break;
      case 3:
        i(), I = 0, j !== "*" && j !== "?" && j !== "+" && t--, S = "";
        break;
      default:
        A("Unknown state");
        break;
    }
  }
  return I === 2 && A(`Unfinished custom RegExp for param "${u}"`), i(), L(), D;
}
function ix(M, A, I) {
  const g = Nx(Sx(M.path), I), D = kM(g, {
    record: M,
    parent: A,
    children: [],
    alias: []
  });
  return A && !D.record.aliasOf == !A.record.aliasOf && A.children.push(D), D;
}
function ex(M, A) {
  const I = [], g = /* @__PURE__ */ new Map();
  A = Xu({ strict: !1, end: !0, sensitive: !1 }, A);
  function D(S) {
    return g.get(S);
  }
  function N(S, i, C) {
    const w = !C, E = Cx(S);
    E.aliasOf = C && C.record;
    const x = Xu(A, S), n = [
      E
    ];
    if ("alias" in S) {
      const d = typeof S.alias == "string" ? [S.alias] : S.alias;
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
        const h = i.record.path, k = h[h.length - 1] === "/" ? "" : "/";
        d.path = i.record.path + (Y && k + Y);
      }
      if (a = ix(d, i, x), C ? C.alias.push(a) : (z = z || a, z !== a && z.alias.push(a), w && S.name && !Fu(a) && L(S.name)), E.children) {
        const h = E.children;
        for (let k = 0; k < h.length; k++)
          N(h[k], a, C && C.children[k]);
      }
      C = C || a, (a.record.components && Object.keys(a.record.components).length || a.record.name || a.record.redirect) && j(a);
    }
    return z ? () => {
      L(z);
    } : xD;
  }
  function L(S) {
    if (Wi(S)) {
      const i = g.get(S);
      i && (g.delete(S), I.splice(I.indexOf(i), 1), i.children.forEach(L), i.alias.forEach(L));
    } else {
      const i = I.indexOf(S);
      i > -1 && (I.splice(i, 1), S.record.name && g.delete(S.record.name), S.children.forEach(L), S.alias.forEach(L));
    }
  }
  function t() {
    return I;
  }
  function j(S) {
    let i = 0;
    for (; i < I.length && tx(S, I[i]) >= 0 && (S.record.path !== I[i].record.path || !pi(S, I[i])); )
      i++;
    I.splice(i, 0, S), S.record.name && !Fu(S) && g.set(S.record.name, S);
  }
  function u(S, i) {
    let C, w = {}, E, x;
    if ("name" in S && S.name) {
      if (C = g.get(S.name), !C)
        throw Qg(1, {
          location: S
        });
      x = C.record.name, w = kM(
        Pu(
          i.params,
          C.keys.filter((z) => !z.optional).map((z) => z.name)
        ),
        S.params && Pu(S.params, C.keys.map((z) => z.name))
      ), E = C.stringify(w);
    } else if ("path" in S)
      E = S.path, C = I.find((z) => z.re.test(E)), C && (w = C.parse(E), x = C.record.name);
    else {
      if (C = i.name ? g.get(i.name) : I.find((z) => z.re.test(i.path)), !C)
        throw Qg(1, {
          location: S,
          currentLocation: i
        });
      x = C.record.name, w = kM({}, i.params, S.params), E = C.stringify(w);
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
      meta: Ex(n)
    };
  }
  return M.forEach((S) => N(S)), { addRoute: N, resolve: u, removeRoute: L, getRoutes: t, getRecordMatcher: D };
}
function Pu(M, A) {
  const I = {};
  for (const g of A)
    g in M && (I[g] = M[g]);
  return I;
}
function Cx(M) {
  return {
    path: M.path,
    redirect: M.redirect,
    name: M.name,
    meta: M.meta || {},
    aliasOf: void 0,
    beforeEnter: M.beforeEnter,
    props: wx(M),
    children: M.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in M ? M.components || null : M.component && { default: M.component }
  };
}
function wx(M) {
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
function Ex(M) {
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
const Qi = /#/g, Tx = /&/g, xx = /\//g, ax = /=/g, yx = /\?/g, vi = /\+/g, nx = /%5B/g, ox = /%5D/g, Gi = /%5E/g, lx = /%60/g, fi = /%7B/g, sx = /%7C/g, Ji = /%7D/g, cx = /%20/g;
function dj(M) {
  return encodeURI("" + M).replace(sx, "|").replace(nx, "[").replace(ox, "]");
}
function zx(M) {
  return dj(M).replace(fi, "{").replace(Ji, "}").replace(Gi, "^");
}
function Jt(M) {
  return dj(M).replace(vi, "%2B").replace(cx, "+").replace(Qi, "%23").replace(Tx, "%26").replace(lx, "`").replace(fi, "{").replace(Ji, "}").replace(Gi, "^");
}
function Yx(M) {
  return Jt(M).replace(ax, "%3D");
}
function rx(M) {
  return dj(M).replace(Qi, "%23").replace(yx, "%3F");
}
function dx(M) {
  return M == null ? "" : rx(M).replace(xx, "%2F");
}
function GN(M) {
  try {
    return decodeURIComponent("" + M);
  } catch {
  }
  return "" + M;
}
function Ux(M) {
  const A = {};
  if (M === "" || M === "?")
    return A;
  const g = (M[0] === "?" ? M.slice(1) : M).split("&");
  for (let D = 0; D < g.length; ++D) {
    const N = g[D].replace(vi, " "), L = N.indexOf("="), t = GN(L < 0 ? N : N.slice(0, L)), j = L < 0 ? null : GN(N.slice(L + 1));
    if (t in A) {
      let u = A[t];
      JA(u) || (u = A[t] = [u]), u.push(j);
    } else
      A[t] = j;
  }
  return A;
}
function Ru(M) {
  let A = "";
  for (let I in M) {
    const g = M[I];
    if (I = Yx(I), g == null) {
      g !== void 0 && (A += (A.length ? "&" : "") + I);
      continue;
    }
    (JA(g) ? g.map((N) => N && Jt(N)) : [g && Jt(g)]).forEach((N) => {
      N !== void 0 && (A += (A.length ? "&" : "") + I, N != null && (A += "=" + N));
    });
  }
  return A;
}
function mx(M) {
  const A = {};
  for (const I in M) {
    const g = M[I];
    g !== void 0 && (A[I] = JA(g) ? g.map((D) => D == null ? null : "" + D) : g == null ? g : "" + g);
  }
  return A;
}
const Ox = Symbol(""), Hu = Symbol(""), iL = Symbol(""), Uj = Symbol(""), Vt = Symbol("");
function DD() {
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
      i === !1 ? t(Qg(4, {
        from: I,
        to: A
      })) : i instanceof Error ? t(i) : Ix(i) ? t(Qg(2, {
        from: A,
        to: i
      })) : (N && g.enterCallbacks[D] === N && typeof i == "function" && N.push(i), L());
    }, u = M.call(g && g.instances[D], A, I, j);
    let S = Promise.resolve(u);
    M.length < 3 && (S = S.then(j)), S.catch((i) => t(i));
  });
}
function KL(M, A, I, g) {
  const D = [];
  for (const N of M)
    for (const L in N.components) {
      let t = N.components[L];
      if (!(A !== "beforeRouteEnter" && !N.instances[L]))
        if (hx(t)) {
          const u = (t.__vccOpts || t)[A];
          u && D.push(cI(u, I, g, N, L));
        } else {
          let j = t();
          D.push(() => j.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${L}" at "${N.path}"`));
            const S = Q0(u) ? u.default : u;
            N.components[L] = S;
            const C = (S.__vccOpts || S)[A];
            return C && cI(C, I, g, N, L)();
          }));
        }
    }
  return D;
}
function hx(M) {
  return typeof M == "object" || "displayName" in M || "props" in M || "__vccOpts" in M;
}
function _u(M) {
  const A = tA(iL), I = tA(Uj), g = y(() => A.resolve(e(M.to))), D = y(() => {
    const { matched: j } = g.value, { length: u } = j, S = j[u - 1], i = I.matched;
    if (!S || !i.length)
      return -1;
    const C = i.findIndex(pg.bind(null, S));
    if (C > -1)
      return C;
    const w = $u(j[u - 2]);
    return u > 1 && $u(S) === w && i[i.length - 1].path !== w ? i.findIndex(pg.bind(null, j[u - 2])) : C;
  }), N = y(() => D.value > -1 && px(I.params, g.value.params)), L = y(() => D.value > -1 && D.value === I.matched.length - 1 && hi(I.params, g.value.params));
  function t(j = {}) {
    return kx(j) ? A[e(M.replace) ? "replace" : "push"](
      e(M.to)
    ).catch(xD) : Promise.resolve();
  }
  return {
    route: g,
    href: y(() => g.value.href),
    isActive: N,
    isExactActive: L,
    navigate: t
  };
}
const bx = /* @__PURE__ */ v({
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
}), Wx = bx;
function kx(M) {
  if (!(M.metaKey || M.altKey || M.ctrlKey || M.shiftKey) && !M.defaultPrevented && !(M.button !== void 0 && M.button !== 0)) {
    if (M.currentTarget && M.currentTarget.getAttribute) {
      const A = M.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(A))
        return;
    }
    return M.preventDefault && M.preventDefault(), !0;
  }
}
function px(M, A) {
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
const qu = (M, A, I) => M != null ? M : A != null ? A : I, Qx = /* @__PURE__ */ v({
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
      let u = e(N);
      const { matched: S } = D.value;
      let i;
      for (; (i = S[u]) && !i.components; )
        u++;
      return u;
    }), t = y(() => D.value.matched[L.value]);
    NI(Hu, y(() => L.value + 1)), NI(Ox, t), NI(Vt, D);
    const j = DM();
    return mM(() => [j.value, t.value, M.name], ([u, S, i], [C, w, E]) => {
      S && (S.instances[i] = u, w && w !== S && u && u === C && (S.leaveGuards.size || (S.leaveGuards = w.leaveGuards), S.updateGuards.size || (S.updateGuards = w.updateGuards))), u && S && (!w || !pg(S, w) || !C) && (S.enterCallbacks[i] || []).forEach((x) => x(u));
    }, { flush: "post" }), () => {
      const u = D.value, S = M.name, i = t.value, C = i && i.components[S];
      if (!C)
        return Ku(I.default, { Component: C, route: u });
      const w = i.props[S], E = w ? w === !0 ? u.params : typeof w == "function" ? w(u) : w : null, n = sM(C, kM({}, E, A, {
        onVnodeUnmounted: (a) => {
          a.component.isUnmounted && (i.instances[S] = null);
        },
        ref: j
      }));
      return Ku(I.default, { Component: n, route: u }) || n;
    };
  }
});
function Ku(M, A) {
  if (!M)
    return null;
  const I = M(A);
  return I.length === 1 ? I[0] : I;
}
const vx = Qx;
function Gx(M) {
  const A = ex(M.routes, M), I = M.parseQuery || Ux, g = M.stringifyQuery || Ru, D = M.history, N = DD(), L = DD(), t = DD(), j = Di(oI);
  let u = oI;
  yg && M.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const S = $L.bind(null, (J) => "" + J), i = $L.bind(null, dx), C = $L.bind(null, GN);
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
    NM.params = S(C(NM.params));
    const ZM = f0(g, kM({}, J, {
      hash: zx(hM),
      path: NM.path
    })), nM = D.createHref(ZM);
    return kM({
      fullPath: ZM,
      hash: hM,
      query: g === Ru ? mx(J.query) : J.query || {}
    }, NM, {
      redirectedFrom: void 0,
      href: nM
    });
  }
  function z(J) {
    return typeof J == "string" ? qL(I, J, j.value.path) : kM({}, J);
  }
  function d(J, _) {
    if (u !== J)
      return Qg(8, {
        from: _,
        to: J
      });
  }
  function Y(J) {
    return G(J);
  }
  function h(J) {
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
    const $ = u = a(J), NM = j.value, hM = J.state, ZM = J.force, nM = J.replace === !0, p = k($);
    if (p)
      return G(
        kM(z(p), {
          state: typeof p == "object" ? kM({}, hM, p.state) : hM,
          force: ZM,
          replace: nM
        }),
        _ || $
      );
    const q = $;
    q.redirectedFrom = _;
    let YM;
    return !ZM && J0(g, NM, $) && (YM = Qg(16, { to: q, from: NM }), bM(
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
              force: ZM
            }),
            _ || q
          );
      } else
        H = R(q, NM, !0, nM, hM);
      return Z(q, NM, H), H;
    });
  }
  function r(J, _) {
    const $ = d(J, _);
    return $ ? Promise.reject($) : Promise.resolve();
  }
  function b(J, _) {
    let $;
    const [NM, hM, ZM] = fx(J, _);
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
    }).then(() => (J.matched.forEach((p) => p.enterCallbacks = {}), $ = KL(ZM, "beforeRouteEnter", J, _), $.push(nM), Cg($))).then(() => {
      $ = [];
      for (const p of L.list())
        $.push(cI(p, J, _));
      return $.push(nM), Cg($);
    }).catch((p) => MI(p, 8) ? p : Promise.reject(p));
  }
  function Z(J, _, $) {
    for (const NM of t.list())
      NM(J, _, $);
  }
  function R(J, _, $, NM, hM) {
    const ZM = d(J, _);
    if (ZM)
      return ZM;
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
        G(kM(hM, { replace: !0 }), NM).catch(xD);
        return;
      }
      u = NM;
      const ZM = j.value;
      yg && H0(fu(ZM.fullPath, $.delta), SL()), b(NM, ZM).catch((nM) => MI(nM, 12) ? nM : MI(nM, 2) ? (G(
        nM.to,
        NM
      ).then((p) => {
        MI(p, 20) && !$.delta && $.type === rD.pop && D.go(-1, !1);
      }).catch(xD), Promise.reject()) : ($.delta && D.go(-$.delta, !1), tM(nM, NM, ZM))).then((nM) => {
        nM = nM || R(
          NM,
          ZM,
          !1
        ), nM && ($.delta && !MI(nM, 8) ? D.go(-$.delta, !1) : $.type === rD.pop && MI(nM, 20) && D.go(-1, !1)), Z(NM, ZM, nM);
      }).catch(xD);
    }));
  }
  let IM = DD(), oM = DD(), SM;
  function tM(J, _, $) {
    dM(J);
    const NM = oM.list();
    return NM.length ? NM.forEach((hM) => hM(J, _, $)) : console.error(J), Promise.reject(J);
  }
  function yM() {
    return SM && j.value !== oI ? Promise.resolve() : new Promise((J, _) => {
      IM.add([J, _]);
    });
  }
  function dM(J) {
    return SM || (SM = !J, LM(), IM.list().forEach(([_, $]) => J ? $(J) : _()), IM.reset()), J;
  }
  function bM(J, _, $, NM) {
    const { scrollBehavior: hM } = M;
    if (!yg || !hM)
      return Promise.resolve();
    const ZM = !$ && _0(fu(J.fullPath, 0)) || (NM || !$) && history.state && history.state.scroll || null;
    return DI().then(() => hM(J, _, ZM)).then((nM) => nM && R0(nM)).catch((nM) => tM(nM, J, _));
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
    replace: h,
    go: vM,
    back: () => vM(-1),
    forward: () => vM(1),
    beforeEach: N.add,
    beforeResolve: L.add,
    afterEach: t.add,
    onError: oM.add,
    isReady: yM,
    install(J) {
      const _ = this;
      J.component("RouterLink", Wx), J.component("RouterView", vx), J.config.globalProperties.$router = _, Object.defineProperty(J.config.globalProperties, "$route", {
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
        iM.delete(J), iM.size < 1 && (u = oI, AM && AM(), AM = null, j.value = oI, fM = !1, SM = !1), NM();
      };
    }
  };
  return zM;
}
function Cg(M) {
  return M.reduce((A, I) => A.then(() => I()), Promise.resolve());
}
function fx(M, A) {
  const I = [], g = [], D = [], N = Math.max(A.matched.length, M.matched.length);
  for (let L = 0; L < N; L++) {
    const t = A.matched[L];
    t && (M.matched.find((u) => pg(u, t)) ? g.push(t) : I.push(t));
    const j = M.matched[L];
    j && (A.matched.find((u) => pg(u, j)) || D.push(j));
  }
  return [I, g, D];
}
function Jx() {
  return tA(iL);
}
function eL() {
  return tA(Uj);
}
const Vx = (M) => (gg("data-v-e6df1366"), M = M(), Dg(), M), Zx = { class: "control" }, Bx = ["disabled"], Px = { class: "toolbar" }, Fx = ["disabled"], Xx = ["disabled"], Rx = ["disabled"], Hx = ["disabled"], _x = ["disabled"], $x = ["disabled"], qx = ["disabled"], Kx = ["disabled"], Ma = ["disabled"], Aa = ["disabled"], Ia = ["disabled"], ga = ["disabled"], Da = ["disabled"], Na = ["disabled"], La = /* @__PURE__ */ Vx(() => /* @__PURE__ */ s("hr", null, null, -1)), ta = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    formId: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = kD(), g = eL(), D = A.formId ? A.formId : g.params.id;
    A.apiRoot && I.setApiRoot(A.apiRoot), D && I.loadForm(D);
    const N = () => I.saveForm(), L = y(() => !I.form), t = (j) => {
      const u = {
        id: jM.create().toString(),
        title: Wg(I.lang),
        description: Wg(I.lang),
        type: j
      };
      Ei(u) && (u.isMultiValued = !1, u.isRequired = !1, u.allowCustomOptionValues = !1), sj(u) && (u.options = []), I.form.fields.push(u);
    };
    return PM(() => {
      I.createNewForm();
    }), (j, u) => (T(), c(MM, null, [
      s("div", Zx, [
        s("button", {
          type: "button",
          class: "btn btn-success",
          disabled: e(L),
          onClick: N
        }, "Save", 8, Bx)
      ]),
      W(cj, {
        model: e(I).transientMessageModel
      }, null, 8, ["model"]),
      e(I).form ? (T(), V(p0, {
        key: 0,
        model: e(I).form
      }, null, 8, ["model"])) : B("", !0),
      s("div", Px, [
        s("button", {
          disabled: e(L),
          onClick: u[0] || (u[0] = (S) => t(e(rM).ShortAnswer))
        }, "+ Short Answer", 8, Fx),
        s("button", {
          disabled: e(L),
          onClick: u[1] || (u[1] = (S) => t(e(rM).Paragraph))
        }, "+ Paragraph", 8, Xx),
        s("button", {
          disabled: e(L),
          onClick: u[2] || (u[2] = (S) => t(e(rM).RichText))
        }, "+ Rich Text", 8, Rx),
        s("button", {
          disabled: e(L),
          onClick: u[3] || (u[3] = (S) => t(e(rM).Date))
        }, "+ Date", 8, Hx),
        s("button", {
          disabled: e(L),
          onClick: u[4] || (u[4] = (S) => t(e(rM).DateTime))
        }, "+ Date/Time", 8, _x),
        s("button", {
          disabled: e(L),
          onClick: u[5] || (u[5] = (S) => t(e(rM).Decimal))
        }, "+ Decimal", 8, $x),
        s("button", {
          disabled: e(L),
          onClick: u[6] || (u[6] = (S) => t(e(rM).Integer))
        }, "+ Integer", 8, qx),
        s("button", {
          disabled: e(L),
          onClick: u[7] || (u[7] = (S) => t(e(rM).Email))
        }, "+ Email", 8, Kx),
        s("button", {
          disabled: e(L),
          onClick: u[8] || (u[8] = (S) => t(e(rM).Checkboxes))
        }, "+ Checkboxes", 8, Ma),
        s("button", {
          disabled: e(L),
          onClick: u[9] || (u[9] = (S) => t(e(rM).DataList))
        }, "+ Data List", 8, Aa),
        s("button", {
          disabled: e(L),
          onClick: u[10] || (u[10] = (S) => t(e(rM).RadioButtons))
        }, "+ Radio Buttons", 8, Ia),
        s("button", {
          disabled: e(L),
          onClick: u[11] || (u[11] = (S) => t(e(rM).DropDown))
        }, "+ Drop Down", 8, ga),
        s("button", {
          disabled: e(L),
          onClick: u[12] || (u[12] = (S) => t(e(rM).InfoSection))
        }, "+ Info Section", 8, Da),
        s("button", {
          disabled: e(L),
          onClick: u[13] || (u[13] = (S) => t(e(rM).AttachmentField))
        }, "+ Attachment Field", 8, Na)
      ]),
      La
    ], 64));
  }
});
const Zt = /* @__PURE__ */ FM(ta, [["__scopeId", "data-v-e6df1366"]]), oA = TI("FormSubmissionStore", {
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
}), Vi = (M) => (gg("data-v-7ad75a89"), M = M(), Dg(), M), ja = /* @__PURE__ */ Vi(() => /* @__PURE__ */ s("h2", null, "Form Submission", -1)), ua = /* @__PURE__ */ Vi(() => /* @__PURE__ */ s("hr", null, null, -1)), Sa = { class: "control" }, ia = ["disabled"], ea = /* @__PURE__ */ v({
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
      const t = aM("Form");
      return T(), c(MM, null, [
        W(LL, { name: "fade" }, {
          default: O(() => [
            e(I).transientMessage ? (T(), c("p", {
              key: 0,
              class: F("alert alert-" + e(I).transientMessageClass)
            }, P(e(I).transientMessage), 3)) : B("", !0)
          ]),
          _: 1
        }),
        ja,
        ua,
        e(I).form ? (T(), V(t, {
          key: 0,
          model: e(I).form
        }, null, 8, ["model"])) : B("", !0),
        s("div", Sa, [
          s("button", {
            type: "button",
            class: "btn btn-primary",
            disabled: !e(D),
            onClick: g
          }, "Submit", 8, ia)
        ])
      ], 64);
    };
  }
});
const Ca = /* @__PURE__ */ FM(ea, [["__scopeId", "data-v-7ad75a89"]]), Zi = TI("LoginStore", {
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
}), wa = /* @__PURE__ */ s("h2", null, "Login", -1), Ea = /* @__PURE__ */ s("br", null, null, -1), Ta = /* @__PURE__ */ s("br", null, null, -1), xa = /* @__PURE__ */ v({
  __name: "App",
  props: {
    piniaInstance: null,
    authorizationRoot: null
  },
  setup(M) {
    const A = M, I = Zi(A.piniaInstance);
    PM(() => {
      I.authorizationApiRoot = A.authorizationRoot;
    });
    const g = (D) => {
      I.authorize(D.credential);
    };
    return (D, N) => {
      const L = aM("GoogleLogin");
      return T(), c(MM, null, [
        wa,
        Ea,
        W(L, { callback: g }),
        Ta
      ], 64);
    };
  }
}), Bi = TI("WorkflowBuilderStore", {
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
}), aa = (M) => (gg("data-v-a2d9971d"), M = M(), Dg(), M), ya = { class: "action" }, na = /* @__PURE__ */ aa(() => /* @__PURE__ */ s("select", null, [
  /* @__PURE__ */ s("option", { value: "b01e8c95-abef-4db2-ac3a-9ab35c4f6e11" }, "TO DO Form 1"),
  /* @__PURE__ */ s("option", { value: "139e7084-20ba-4268-9396-61bac78cda52" }, "TO DO Form 2")
], -1)), oa = /* @__PURE__ */ v({
  __name: "WorkflowAction",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(), c("div", ya, [
      gM(" Workflow Action: " + P(M.model.id) + " ", 1),
      s("div", null, [
        s("h4", null, P(M.model.name), 1),
        gM(" Name: "),
        _M(s("input", {
          type: "text",
          "onUpdate:modelValue": I[0] || (I[0] = (g) => M.model.name = g)
        }, null, 512), [
          [hN, M.model.name]
        ])
      ]),
      s("div", null, [
        s("p", null, P(M.model.description), 1),
        gM(" Description: "),
        _M(s("textarea", {
          "onUpdate:modelValue": I[1] || (I[1] = (g) => M.model.description = g)
        }, null, 512), [
          [hN, M.model.description]
        ])
      ]),
      s("div", null, [
        s("p", null, P(M.model.description), 1),
        gM(" Form: "),
        na
      ])
    ]));
  }
});
const la = /* @__PURE__ */ FM(oa, [["__scopeId", "data-v-a2d9971d"]]), sa = /* @__PURE__ */ v({
  __name: "Workflow",
  props: {
    model: null
  },
  setup(M) {
    return (A, I) => (T(!0), c(MM, null, eM(M.model.actions, (g) => (T(), V(la, {
      key: g.id,
      model: g
    }, null, 8, ["model"]))), 128));
  }
}), Pi = (M) => (gg("data-v-52fc6feb"), M = M(), Dg(), M), ca = /* @__PURE__ */ Pi(() => /* @__PURE__ */ s("h2", null, "Workflow Builder", -1)), za = { class: "control" }, Ya = ["disabled"], ra = ["disabled"], da = { class: "toolbar" }, Ua = ["disabled"], ma = /* @__PURE__ */ Pi(() => /* @__PURE__ */ s("hr", null, null, -1)), Oa = /* @__PURE__ */ v({
  __name: "App",
  props: {
    piniaInstance: null,
    repositoryRoot: null,
    workflowId: null
  },
  setup(M) {
    const A = M, I = Bi(A.piniaInstance);
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
    return (t, j) => (T(), c(MM, null, [
      W(LL, { name: "fade" }, {
        default: O(() => [
          e(I).transientMessage ? (T(), c("p", {
            key: 0,
            class: F("alert alert-" + e(I).transientMessageClass)
          }, P(e(I).transientMessage), 3)) : B("", !0)
        ]),
        _: 1
      }),
      ca,
      s("div", za, [
        s("button", {
          type: "button",
          class: "btn btn-primary",
          disabled: !e(N),
          onClick: g
        }, "New Workflow", 8, Ya),
        s("button", {
          type: "button",
          class: "btn btn-success",
          disabled: e(N),
          onClick: D
        }, "Save", 8, ra)
      ]),
      s("div", da, [
        s("button", {
          disabled: e(N),
          onClick: j[0] || (j[0] = (u) => L())
        }, "+ Form Submission Action", 8, Ua)
      ]),
      ma,
      e(I).workflow ? (T(), V(sa, {
        key: 0,
        model: e(I).workflow
      }, null, 8, ["model"])) : B("", !0)
    ], 64));
  }
});
const ha = /* @__PURE__ */ FM(Oa, [["__scopeId", "data-v-52fc6feb"]]);
var Fi = /* @__PURE__ */ ((M) => (M.Unpublished = "Unpublished", M.Published = "Published", M.Archived = "Archived", M.Deleted = "Deleted", M))(Fi || {}), CL = /* @__PURE__ */ ((M) => (M.Item = "Item", M.Collection = "Collection", M.Unknown = "Unknown", M))(CL || {}), Bt = /* @__PURE__ */ ((M) => (M.Title = "Title", M.Description = "Description", M.TitleOrDescription = "TitleOrDescription", M))(Bt || {});
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
        state: Fi.Unpublished,
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
}), Xi = (M) => (gg("data-v-a40911f9"), M = M(), Dg(), M), ba = /* @__PURE__ */ Xi(() => /* @__PURE__ */ s("h6", null, "Name :", -1)), Wa = /* @__PURE__ */ Xi(() => /* @__PURE__ */ s("br", null, null, -1)), ka = ["for"], pa = ["name"], Qa = ["value"], va = /* @__PURE__ */ v({
  __name: "FormEntry",
  props: {
    model: null
  },
  setup(M) {
    const A = mj();
    return (I, g) => {
      const D = aM("b-col"), N = aM("b-form-input"), L = aM("b-row"), t = aM("font-awesome-icon");
      return T(), V(L, { class: "mb-2" }, {
        default: O(() => [
          W(D, { class: "col-sm-11" }, {
            default: O(() => [
              W(L, null, {
                default: O(() => [
                  W(D, { class: "col-sm-2" }, {
                    default: O(() => [
                      ba
                    ]),
                    _: 1
                  }),
                  W(D, { class: "col-sm-10" }, {
                    default: O(() => [
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
              Wa,
              W(L, null, {
                default: O(() => [
                  W(D, { class: "col-sm-2" }, {
                    default: O(() => [
                      s("label", {
                        for: M.model.id.toString()
                      }, "Form:", 8, ka)
                    ]),
                    _: 1
                  }),
                  W(D, { class: "col-sm-10" }, {
                    default: O(() => [
                      _M(s("select", {
                        "onUpdate:modelValue": g[1] || (g[1] = (j) => M.model.id = j),
                        name: M.model.id.toString(),
                        class: "form-select"
                      }, [
                        (T(!0), c(MM, null, eM(e(A).formEntries, (j) => (T(), c("option", {
                          key: j.id.toString(),
                          value: j.id
                        }, P(j.name), 9, Qa))), 128))
                      ], 8, pa), [
                        [bg, M.model.id]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              s("div", null, [
                _M(s("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": g[2] || (g[2] = (j) => M.model.isRequired = j)
                }, null, 512), [
                  [$I, M.model.isRequired]
                ]),
                gM(" Is Required? ")
              ])
            ]),
            _: 1
          }),
          W(D, { class: "col-sm-1" }, {
            default: O(() => [
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
      });
    };
  }
});
const M4 = /* @__PURE__ */ FM(va, [["__scopeId", "data-v-a40911f9"]]), Ga = { class: "row" }, fa = { class: "col-6" }, Ja = { class: "col-6" }, Mt = /* @__PURE__ */ v({
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
      var N, L, t, j, u;
      return ((N = A.model) == null ? void 0 : N.formId) === null || ((t = (L = A.model) == null ? void 0 : L.formId) == null ? void 0 : t.toString()) === "" ? [{ value: null, text: "Please select a form first." }] : (u = (j = A.forms) == null ? void 0 : j.filter((S) => {
        var i;
        return S.id === ((i = A.model) == null ? void 0 : i.formId);
      })[0]) == null ? void 0 : u.fields.map((S) => ({
        value: S.id,
        text: Ti(S, null)
      }));
    });
    return mM(() => A.model.formId, (D) => {
      A.model.fieldId = jM.EMPTY;
    }), (D, N) => {
      const L = aM("b-form-select");
      return T(), c("div", Ga, [
        s("div", fa, [
          W(L, {
            modelValue: M.model.formId,
            "onUpdate:modelValue": N[0] || (N[0] = (t) => M.model.formId = t),
            options: e(I)
          }, null, 8, ["modelValue", "options"])
        ]),
        s("div", Ja, [
          W(L, {
            modelValue: M.model.fieldId,
            "onUpdate:modelValue": N[1] || (N[1] = (t) => M.model.fieldId = t),
            options: e(g)
          }, null, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
}), At = /* @__PURE__ */ new Map(), Va = (M) => (At.has(M) || At.set(M, Za(M)), At.get(M));
function Za(M) {
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
const wL = (M) => Va(M)(), Ba = { class: "row mt-2" }, Pa = { class: "col-sm-6" }, Fa = /* @__PURE__ */ s("label", null, "Search Target:", -1), Xa = ["value"], Ra = { class: "col-sm-6" }, Ha = /* @__PURE__ */ s("label", null, " Search Text ", -1), _a = ["onKeydown"], $a = /* @__PURE__ */ v({
  __name: "EntitySearchBox",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M, I = DM(Bt), g = DM(""), D = wL(A.storeId), N = () => D.seach(A.entityType, I.value, g.value);
    return (L, t) => (T(), c("div", Ba, [
      s("div", Pa, [
        Fa,
        _M(s("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (j) => I.value = j),
          class: "form-select"
        }, [
          (T(!0), c(MM, null, eM(e(Bt), (j) => (T(), c("option", {
            key: j,
            value: j
          }, P(j), 9, Xa))), 128))
        ], 512), [
          [bg, I.value]
        ])
      ]),
      s("div", Ra, [
        Ha,
        _M(s("input", {
          type: "text",
          "onUpdate:modelValue": t[1] || (t[1] = (j) => g.value = j),
          class: "form-control",
          onBlur: N,
          onKeydown: Ni(N, ["enter"])
        }, null, 40, _a), [
          [hN, g.value]
        ])
      ])
    ]));
  }
}), qa = /* @__PURE__ */ s("h4", null, "Entity Selection List", -1), Ka = ["value"], My = /* @__PURE__ */ v({
  __name: "EntityList",
  props: {
    storeId: null
  },
  setup(M) {
    const I = wL(M.storeId), { entitySearchResult: g, selectedEntityIds: D } = nj(I);
    return (N, L) => {
      var t;
      return T(), c(MM, null, [
        qa,
        (T(!0), c(MM, null, eM((t = e(g)) == null ? void 0 : t.result, (j) => (T(), c("div", {
          key: j.id.toString(),
          class: "form-control"
        }, [
          _M(s("input", {
            type: "checkbox",
            value: j.id,
            "onUpdate:modelValue": L[0] || (L[0] = (u) => EA(D) ? D.value = u : null)
          }, null, 8, Ka), [
            [$I, e(D)]
          ]),
          s("span", null, P(j.title) + " => " + P(j.description), 1)
        ]))), 128))
      ], 64);
    };
  }
}), Ay = /* @__PURE__ */ v({
  __name: "EntitySelectionList",
  props: {
    storeId: null,
    entityType: null
  },
  setup(M) {
    const A = M;
    wL(A.storeId);
    const I = DM(A.entityType);
    return (g, D) => (T(), c(MM, null, [
      W($a, {
        storeId: M.storeId,
        entityType: I.value
      }, null, 8, ["storeId", "entityType"]),
      W(My, { storeId: M.storeId }, null, 8, ["storeId"])
    ], 64));
  }
}), hA = (M) => (gg("data-v-50ab58af"), M = M(), Dg(), M), Iy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("br", null, null, -1)), gy = { key: 0 }, Dy = { class: "form-field-border" }, Ny = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h6", null, "Name :", -1)), Ly = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("br", null, null, -1)), ty = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h6", null, "Description :", -1)), jy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("br", null, null, -1)), uy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h6", null, "State:", -1)), Sy = { class: "form-field-border blue" }, iy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h5", null, "Metadata Forms", -1)), ey = { class: "form-field-border red" }, Cy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h5", null, "Data Forms", -1)), wy = { key: 0 }, Ey = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("h5", null, "Field Mappings", -1)), Ty = { class: "row" }, xy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Title ", -1)), ay = { class: "col-10" }, yy = { class: "row" }, ny = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Description ", -1)), oy = { class: "col-10" }, ly = { class: "row" }, sy = /* @__PURE__ */ hA(() => /* @__PURE__ */ s("div", { class: "col-2" }, " Media ", -1)), cy = { class: "col-10" }, zy = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null,
    queryParameters: null,
    apiRoot: null
  },
  setup(M) {
    const A = M, I = mj();
    A.apiRoot && I.setApiRoot(A.apiRoot);
    const g = y(() => I.template), D = y(() => {
      var E;
      return (E = g.value) == null ? void 0 : E.entityTemplateSettings.titleField;
    }), N = y(() => {
      var E;
      return (E = g.value) == null ? void 0 : E.entityTemplateSettings.descriptionField;
    }), L = y(() => {
      var E;
      return (E = g.value) == null ? void 0 : E.entityTemplateSettings.mediaField;
    }), t = y(() => {
      var E, x, n, a;
      return [
        { formGroupName: "Matadata Form", formGroup: (x = (E = g.value) == null ? void 0 : E.entityTemplateSettings.metadataForms) == null ? void 0 : x.filter((z) => z.isRequired) },
        { formGroupName: "Data Form", formGroup: (a = (n = g.value) == null ? void 0 : n.entityTemplateSettings.dataForms) == null ? void 0 : a.filter((z) => z.isRequired) }
      ];
    });
    Jx();
    const j = () => {
      var E, x;
      (x = (E = I.template) == null ? void 0 : E.entityTemplateSettings.metadataForms) == null || x.push({ id: jM.create().toString(), formId: jM.createEmpty(), name: "" });
    }, u = () => {
      var E, x;
      (x = (E = I.template) == null ? void 0 : E.entityTemplateSettings.dataForms) == null || x.push({ id: jM.create().toString(), formId: jM.createEmpty(), name: "" });
    }, S = () => I.saveTemplate(), C = eL().params.id, w = DM(!0);
    return C && (w.value = !1, I.loadTemplate(C)), mM(() => {
      var E;
      return (E = D == null ? void 0 : D.value) == null ? void 0 : E.formId;
    }, (E) => {
      I.associateForm(E);
    }), PM(() => {
      var E;
      I.newTemplate(), I.loadFormEntries(), g.value && ((E = g.value.id) == null ? void 0 : E.toString()) !== jM.EMPTY && (I.loadTemplate(g.value.id), w.value = !1);
    }), (E, x) => {
      const n = aM("b-col"), a = aM("b-form-input"), z = aM("b-row"), d = aM("b-form-textarea");
      return T(), c(MM, null, [
        W(cj, {
          model: e(I).transientMessageModel
        }, null, 8, ["model"]),
        s("div", { class: "control" }, [
          s("button", {
            class: "btn btn-success",
            onClick: S
          }, "Save")
        ]),
        Iy,
        e(g) ? (T(), c("div", gy, [
          s("div", Dy, [
            W(z, null, {
              default: O(() => [
                W(n, { class: "col-sm-2" }, {
                  default: O(() => [
                    Ny
                  ]),
                  _: 1
                }),
                W(n, { class: "col-sm-10" }, {
                  default: O(() => [
                    W(a, {
                      modelValue: e(g).name,
                      "onUpdate:modelValue": x[0] || (x[0] = (Y) => e(g).name = Y)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ly,
            W(z, null, {
              default: O(() => [
                W(n, { class: "col-sm-2" }, {
                  default: O(() => [
                    ty
                  ]),
                  _: 1
                }),
                W(n, { class: "col-sm-10" }, {
                  default: O(() => [
                    W(d, {
                      modelValue: e(g).description,
                      "onUpdate:modelValue": x[1] || (x[1] = (Y) => e(g).description = Y)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            jy,
            W(z, null, {
              default: O(() => [
                W(n, { class: "col-sm-2" }, {
                  default: O(() => [
                    uy
                  ]),
                  _: 1
                }),
                W(n, { class: "col-sm-10" }, {
                  default: O(() => [
                    s("h6", null, P(e(g).state), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          s("div", null, [
            s("div", Sy, [
              iy,
              W(e(vN), {
                class: "dragArea list-group w-full",
                list: e(g).entityTemplateSettings.metadataForms
              }, {
                default: O(() => [
                  (T(!0), c(MM, null, eM(e(g).entityTemplateSettings.metadataForms, (Y) => (T(), c("div", {
                    key: Y.id.toString()
                  }, [
                    W(M4, {
                      model: Y
                    }, null, 8, ["model"])
                  ]))), 128))
                ]),
                _: 1
              }, 8, ["list"]),
              s("button", {
                class: "btn btn-primary btn-blue",
                onClick: j
              }, "+ Add")
            ])
          ]),
          s("div", ey, [
            Cy,
            W(e(vN), {
              class: "dragArea list-group w-full",
              list: e(g).entityTemplateSettings.dataForms
            }, {
              default: O(() => [
                (T(!0), c(MM, null, eM(e(g).entityTemplateSettings.dataForms, (Y) => (T(), c("div", {
                  key: Y.id.toString()
                }, [
                  W(M4, {
                    model: Y,
                    class: "form-field-border form-field red"
                  }, null, 8, ["model"])
                ]))), 128))
              ]),
              _: 1
            }, 8, ["list"]),
            s("button", {
              class: "btn btn-warning btn-red",
              onClick: u
            }, "+ Add")
          ]),
          e(g).forms ? (T(), c("div", wy, [
            Ey,
            s("div", Ty, [
              xy,
              s("div", ay, [
                W(e(Mt), {
                  model: e(D),
                  "option-source": e(t),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            s("div", yy, [
              ny,
              s("div", oy, [
                W(e(Mt), {
                  model: e(N),
                  "option-source": e(t),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ]),
            s("div", ly, [
              sy,
              s("div", cy, [
                W(e(Mt), {
                  model: e(L),
                  "option-source": e(t),
                  forms: e(I).forms
                }, null, 8, ["model", "option-source", "forms"])
              ])
            ])
          ])) : B("", !0)
        ])) : B("", !0)
      ], 64);
    };
  }
});
const Pt = /* @__PURE__ */ FM(zy, [["__scopeId", "data-v-50ab58af"]]), Yy = (M, A) => M == null ? void 0 : M.data.find((I) => I.formId === A), yN = (M, A) => {
  var I;
  return (I = Yy(M, A == null ? void 0 : A.formId)) == null ? void 0 : I.fieldData.find((g) => g.fieldId === (A == null ? void 0 : A.fieldId));
}, It = (M, A) => {
  var I, g;
  return (g = (I = M == null ? void 0 : M.forms) == null ? void 0 : I.find((D) => (D == null ? void 0 : D.id) === A.formId)) == null ? void 0 : g.fields.find((D) => D.id === (A == null ? void 0 : A.fieldId));
}, ry = (M, A) => {
  A4(M, A.entityTemplateSettings.metadataForms, A.forms), A4(M, A.entityTemplateSettings.dataForms, A.forms);
}, A4 = (M, A, I) => {
  A.filter((g) => g.isRequired).forEach((g) => {
    if (M.data.filter((D) => D.formId == g.id).length == 0) {
      const D = I.filter((L) => L.id === g.id)[0], N = ai(D, "");
      N.id = jM.create().toString(), M.data.push(N);
    }
  });
}, dy = (M, A, I) => {
  var g = A.entityTemplateSettings.titleField, D = M.data.filter((N) => N.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((N) => N.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return ii(D, I);
}, Uy = (M, A, I) => {
  var g = A.entityTemplateSettings.descriptionField, D = M.data.filter((N) => N.formId == (g == null ? void 0 : g.formId))[0].fieldData.filter((N) => N.fieldId == (g == null ? void 0 : g.fieldId))[0];
  return ii(D, I);
}, vD = TI("EntityEditorStore", {
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
      var j, u, S, i, C, w;
      const M = ((u = (j = this.entity) == null ? void 0 : j.id) == null ? void 0 : u.toString()) === jM.EMPTY;
      this.entity.title = dy(this.entity, this.entityTemplate, " | "), this.entity.description = Uy(this.entity, this.entityTemplate, " | ");
      let A = this.getApiRoot, I = "";
      M ? (console.log("Saving new entity."), ((i = (S = this.entity) == null ? void 0 : S.id) == null ? void 0 : i.toString()) === jM.EMPTY && (this.entity.id = jM.create().toString()), I = "POST") : (console.log("Updating existing entity."), A = `${A}/${(C = this.entity) == null ? void 0 : C.id}`, I = "PUT");
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
}), my = ["onUpdate:modelValue"], Oy = { class: "col-sm-2" }, Ri = /* @__PURE__ */ v({
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
      const j = aM("font-awesome-icon");
      return T(), c(MM, null, [
        s("div", null, [
          (T(!0), c(MM, null, eM(e(g).customOptionValues, (u, S) => (T(), c("span", {
            class: "custom-option",
            key: S
          }, [
            _M(s("input", {
              type: "text",
              "onUpdate:modelValue": (i) => e(g).customOptionValues[S] = i
            }, null, 8, my), [
              [hN, e(g).customOptionValues[S]]
            ]),
            W(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (i) => D(S),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ]))), 128))
        ]),
        s("div", Oy, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (u) => N()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), hy = ["checked", "onChange"], by = { key: 0 }, Wy = /* @__PURE__ */ v({
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
      var j, u, S;
      return t ? (j = g.value.selectedOptionIds) == null ? void 0 : j.push(L) : (S = g.value.selectedOptionIds) == null ? void 0 : S.splice((u = g.value.selectedOptionIds) == null ? void 0 : u.indexOf(L), 1);
    };
    return (L, t) => (T(), c(MM, null, [
      (T(!0), c(MM, null, eM(M.model.options, (j) => (T(), c("div", {
        key: j.id,
        class: "option-field"
      }, [
        s("input", {
          type: "checkbox",
          checked: D(j.id),
          onChange: (u) => N(j.id, u.target.checked)
        }, null, 40, hy),
        gM(" " + P(dg(j, e(I).lang)) + " ", 1),
        j.isExtendedInput ? (T(), c("span", by)) : B("", !0)
      ]))), 128)),
      W(Ri, { model: M.model }, null, 8, ["model"])
    ], 64));
  }
}), ky = { class: "col-sm-8" }, py = { id: "dataOptions" }, Qy = { class: "col-sm-2" }, vy = /* @__PURE__ */ v({
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
      var u, S;
      const j = (S = (u = A.model) == null ? void 0 : u.options) == null ? void 0 : S.filter((i) => i.id === t).at(0);
      return j ? dg(j, I.lang) : "";
    }, N = (t) => {
      var u, S;
      const j = (S = (u = A.model) == null ? void 0 : u.options) == null ? void 0 : S.filter((i) => dg(i, I.lang) === t).at(0);
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
      const u = aM("b-form-input");
      return T(), c(MM, null, [
        s("div", ky, [
          W(u, {
            list: "dataOptions",
            id: "model.id",
            name: "model.id",
            modelValue: e(L),
            "onUpdate:modelValue": j[0] || (j[0] = (S) => EA(L) ? L.value = S : null)
          }, null, 8, ["modelValue"]),
          s("datalist", py, [
            (T(!0), c(MM, null, eM(M.model.options, (S) => (T(), c("option", {
              key: S.id
            }, P(dg(S, e(I).lang)), 1))), 128))
          ])
        ]),
        s("div", Qy, [
          W(Ri, { model: M.model }, null, 8, ["model"])
        ])
      ], 64);
    };
  }
}), Gy = { class: "col-sm-3" }, fy = ["value"], Jy = /* @__PURE__ */ v({
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
    return (N, L) => (T(), c("div", Gy, [
      _M(s("select", {
        "onUpdate:modelValue": L[0] || (L[0] = (t) => EA(D) ? D.value = t : null),
        class: "form-select"
      }, [
        (T(!0), c(MM, null, eM(M.model.options, (t) => (T(), c("option", {
          key: t.id,
          value: t.id
        }, P(dg(t, e(I).lang)), 9, fy))), 128))
      ], 512), [
        [bg, e(D)]
      ])
    ]));
  }
}), Vy = ["value"], Zy = /* @__PURE__ */ v({
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
    return (N, L) => (T(!0), c(MM, null, eM(M.model.options, (t) => (T(), c("div", {
      key: t.id,
      class: "option-field"
    }, [
      _M(s("input", {
        type: "radio",
        name: "model.id",
        value: t.id,
        "onUpdate:modelValue": L[0] || (L[0] = (j) => EA(D) ? D.value = j : null)
      }, null, 8, Vy), [
        [Li, e(D)]
      ]),
      gM(" " + P(dg(t, e(I).lang)), 1)
    ]))), 128));
  }
}), By = { key: 0 }, Py = { key: 1 }, Fy = { key: 2 }, Xy = { key: 3 }, Ry = { key: 4 }, Hy = { key: 5 }, _y = { key: 6 }, $y = { key: 7 }, Hi = /* @__PURE__ */ v({
  __name: "Text",
  props: {
    model: null,
    textType: null,
    decimalPoints: null
  },
  setup(M) {
    const A = M, I = A.decimalPoints ? A.decimalPoints : 2;
    return (g, D) => {
      const N = aM("b-form-input"), L = aM("b-form-textarea");
      return T(), c(MM, null, [
        M.textType === e(rM).ShortAnswer ? (T(), c("div", By, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[0] || (D[0] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : M.textType === e(rM).Paragraph ? (T(), c("div", Py, [
          W(L, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[1] || (D[1] = (t) => M.model.value = t),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : M.textType === e(rM).RichText ? (T(), c("div", Fy, [
          W(L, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[2] || (D[2] = (t) => M.model.value = t),
            rows: "3",
            "max-rows": "6"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Email ? (T(), c("div", Xy, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[3] || (D[3] = (t) => M.model.value = t),
            type: "email"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Integer ? (T(), c("div", Ry, [
          W(N, {
            type: "number",
            step: "1",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[4] || (D[4] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Decimal ? (T(), c("div", Hy, [
          W(N, {
            type: "number",
            step: Math.pow(10, -e(I)),
            modelValue: M.model.value,
            "onUpdate:modelValue": D[5] || (D[5] = (t) => M.model.value = t)
          }, null, 8, ["step", "modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).Date ? (T(), c("div", _y, [
          W(N, {
            modelValue: M.model.value,
            "onUpdate:modelValue": D[6] || (D[6] = (t) => M.model.value = t),
            type: "date"
          }, null, 8, ["modelValue"])
        ])) : B("", !0),
        M.textType === e(rM).DateTime ? (T(), c("div", $y, [
          W(N, {
            type: "datetime-local",
            modelValue: M.model.value,
            "onUpdate:modelValue": D[7] || (D[7] = (t) => M.model.value = t)
          }, null, 8, ["modelValue"])
        ])) : B("", !0)
      ], 64);
    };
  }
}), qy = /* @__PURE__ */ v({
  __name: "TextCollection",
  props: {
    model: null,
    textType: null
  },
  setup(M) {
    return (A, I) => (T(!0), c(MM, null, eM(M.model.values, (g) => (T(), V(Hi, {
      key: g.id,
      model: g,
      "text-type": M.textType
    }, null, 8, ["model", "text-type"]))), 128));
  }
}), Ky = ["model"], Mn = { class: "col col-sm-11" }, An = { class: "col col-sm-1" }, In = { key: 0 }, gn = /* @__PURE__ */ v({
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
      return (L = g.value.multilingualTextValues) == null ? void 0 : L.push(Wg(I.lang));
    }, N = (L) => {
      var t;
      console.log(L), (t = g.value.multilingualTextValues) == null || t.splice(L, 1);
    };
    return (L, t) => {
      var u;
      const j = aM("font-awesome-icon");
      return T(), c(MM, null, [
        (T(!0), c(MM, null, eM((u = e(g)) == null ? void 0 : u.multilingualTextValues, (S, i) => (T(), c("div", {
          key: S.id,
          model: S,
          class: "row mb-3"
        }, [
          s("div", Mn, [
            W(qy, {
              model: S,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          s("div", An, [
            e(g).multilingualTextValues.length > 1 ? (T(), c("div", In, [
              W(j, {
                icon: "fa-solid fa-circle-xmark",
                onClick: (C) => N(i),
                class: "fa-icon delete"
              }, null, 8, ["onClick"])
            ])) : B("", !0)
          ])
        ], 8, Ky))), 128)),
        s("div", null, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (S) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), Dn = ["model"], Nn = { class: "col col-sm-11" }, Ln = {
  key: 0,
  class: "col-sm-1"
}, tn = { class: "col-sm-1" }, jn = /* @__PURE__ */ v({
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
      const j = aM("font-awesome-icon");
      return T(), c(MM, null, [
        (T(!0), c(MM, null, eM(e(g).monolingualTextValues, (u, S) => (T(), c("div", {
          key: u.id,
          model: u,
          class: "row mb-3"
        }, [
          s("div", Nn, [
            W(Hi, {
              model: u,
              "text-type": M.model.type
            }, null, 8, ["model", "text-type"])
          ]),
          e(g).monolingualTextValues.length > 1 ? (T(), c("div", Ln, [
            W(j, {
              icon: "fa-solid fa-circle-xmark",
              onClick: (i) => N(S),
              class: "fa-icon delete"
            }, null, 8, ["onClick"])
          ])) : B("", !0)
        ], 8, Dn))), 128)),
        s("div", tn, [
          W(j, {
            icon: "fa-solid fa-circle-plus",
            onClick: t[0] || (t[0] = (u) => D()),
            class: "fa-icon plus add-option"
          })
        ])
      ], 64);
    };
  }
}), un = /* @__PURE__ */ s("br", null, null, -1), Sn = ["innerHTML"], en = /* @__PURE__ */ v({
  __name: "InfoSection",
  props: {
    model: null
  },
  setup(M) {
    const A = M, I = oA(), g = xi(A.model, I.lang);
    return (D, N) => (T(), c("div", null, [
      un,
      s("div", {
        innerHTML: e(g),
        class: "alert alert-info"
      }, null, 8, Sn)
    ]));
  }
}), Cn = {
  key: 0,
  class: "alert alert-info"
}, wn = { class: "text-field-label" }, En = ["data-hover"], Tn = { key: 7 }, xn = { class: "dropzoneFiles" }, an = /* @__PURE__ */ s("br", null, null, -1), nN = /* @__PURE__ */ v({
  __name: "Field",
  props: {
    model: null,
    modelData: null,
    formId: null
  },
  setup(M) {
    const A = M, I = oA(), g = Ti(A.model, I.lang), D = xi(A.model, I.lang), N = Ci(A.model), L = wi(A.model), t = A.model.type === rM.AttachmentField, j = DM(""), u = A.model.id.toString(), S = y(() => A.formId), i = (w) => {
      j.value = w.dataTransfer.files[0], I.attachFile(w.dataTransfer.files, A.model.id, A.formId);
    }, C = (w) => {
      j.value = document.getElementById(w).files[0];
      const E = document.getElementById(w);
      I.attachFile(E == null ? void 0 : E.files, A.model.id, S.value);
    };
    return (w, E) => {
      const x = aM("font-awesome-icon"), n = aM("b-col"), a = aM("b-row"), z = aM("b-container");
      return T(), V(z, null, {
        default: O(() => [
          W(a, null, {
            default: O(() => [
              M.model.type === e(rM).InfoSection ? (T(), c("div", Cn, [
                s("h3", wn, P(e(g)), 1)
              ])) : (T(), V(n, {
                key: 1,
                class: "col-sm-2"
              }, {
                default: O(() => [
                  gM(P(e(g)) + " ", 1),
                  e(D) ? (T(), c("span", {
                    key: 0,
                    class: "hovertext",
                    "data-hover": e(D)
                  }, [
                    W(x, {
                      icon: "fas fa-question-circle",
                      class: "fas fa-question-circle"
                    })
                  ], 8, En)) : B("", !0),
                  gM(" : ")
                ]),
                _: 1
              })),
              W(n, { class: "col-sm-10" }, {
                default: O(() => [
                  M.model.type === e(rM).Checkboxes ? (T(), V(Wy, {
                    key: 0,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).DataList ? (T(), V(vy, {
                    key: 1,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).DropDown ? (T(), V(Jy, {
                    key: 2,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).RadioButtons ? (T(), V(Zy, {
                    key: 3,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  e(N) ? (T(), V(gn, {
                    key: 4,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  e(L) ? (T(), V(jn, {
                    key: 5,
                    model: M.model,
                    modelData: M.modelData
                  }, null, 8, ["model", "modelData"])) : B("", !0),
                  M.model.type === e(rM).InfoSection ? (T(), V(en, {
                    key: 6,
                    model: M.model
                  }, null, 8, ["model"])) : B("", !0),
                  e(t) ? (T(), c("div", Tn, [
                    W(ei, {
                      model: M.model,
                      elementId: e(u),
                      onDrop: i,
                      onChange: E[0] || (E[0] = (d) => C(e(u)))
                    }, null, 8, ["model", "elementId"]),
                    s("span", xn, "Selected File: " + P(j.value.name), 1)
                  ])) : B("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          an
        ]),
        _: 1
      });
    };
  }
}), yn = { class: "pt-2 mt-2" }, nn = { class: "row" }, on = { class: "col-sm-7" }, ln = { class: "row mt-2" }, sn = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("label", null, "EntityType:")
], -1), cn = { class: "col-sm-10" }, zn = ["value"], Yn = { key: 1 }, rn = { class: "row mt-2" }, dn = /* @__PURE__ */ s("div", { class: "col-sm-2" }, [
  /* @__PURE__ */ s("label", null, "Template:")
], -1), Un = { class: "col-sm-10" }, mn = ["value"], On = { key: 1 }, hn = /* @__PURE__ */ s("br", null, null, -1), bn = /* @__PURE__ */ s("h5", null, "Form Fields", -1), Wn = { key: 3 }, kn = { class: "col-sm-5" }, pn = /* @__PURE__ */ s("legend", null, " Right side ", -1), Qn = { class: "col-sm-8" }, vn = /* @__PURE__ */ s("div", { class: "col-sm-4" }, [
  /* @__PURE__ */ s("img", { src: "#" })
], -1), Gn = /* @__PURE__ */ v({
  __name: "entity-summary-editor",
  setup(M) {
    var w;
    const A = vD(), { entity: I } = nj(A);
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
      return yN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.titleField);
    }), u = y(() => {
      var E;
      return It(N.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.descriptionField);
    }), S = y(() => {
      var E;
      return yN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.descriptionField);
    }), i = y(() => {
      var E;
      return It(N.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.mediaField);
    }), C = y(() => {
      var E;
      return yN(I.value, (E = N.value) == null ? void 0 : E.entityTemplateSettings.mediaField);
    });
    return mM(() => N.value, async (E) => {
      ry(I.value, E);
    }), (E, x) => {
      var n, a, z, d, Y, h, k, G, r, b, Z, R, AM, LM, IM, oM, SM, tM;
      return T(), c("div", yn, [
        s("div", nn, [
          s("fieldset", on, [
            s("div", ln, [
              sn,
              s("div", cn, [
                e(g) ? _M((T(), c("select", {
                  key: 0,
                  "onUpdate:modelValue": x[0] || (x[0] = (yM) => e(I).entityType = yM),
                  class: "form-select"
                }, [
                  (T(!0), c(MM, null, eM(e(L), (yM) => (T(), c("option", {
                    key: yM,
                    value: yM
                  }, P(yM), 9, zn))), 128))
                ], 512)), [
                  [bg, e(I).entityType]
                ]) : (T(), c("span", Yn, P((n = e(I)) == null ? void 0 : n.entityType), 1))
              ])
            ]),
            s("div", rn, [
              dn,
              s("div", Un, [
                e(g) ? _M((T(), c("select", {
                  key: 0,
                  "onUpdate:modelValue": x[1] || (x[1] = (yM) => e(I).templateId = yM),
                  class: "form-select"
                }, [
                  (T(!0), c(MM, null, eM(e(D), (yM) => {
                    var dM;
                    return T(), c("option", {
                      key: yM.id.toString(),
                      value: (dM = yM.id) == null ? void 0 : dM.toString()
                    }, P(yM.name), 9, mn);
                  }), 128))
                ], 512)), [
                  [bg, e(I).templateId]
                ]) : (T(), c("span", On, P((a = e(N)) == null ? void 0 : a.name), 1))
              ])
            ]),
            hn,
            bn,
            e(A).titleField ? (T(), V(nN, {
              key: 0,
              model: e(t),
              "model-data": e(j)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).descriptionField ? (T(), V(nN, {
              key: 1,
              model: e(u),
              "model-data": e(S)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).mediaField ? (T(), V(nN, {
              key: 2,
              model: e(i),
              "model-data": e(C)
            }, null, 8, ["model", "model-data"])) : B("", !0),
            e(A).mediaField && ((d = (z = e(C)) == null ? void 0 : z.fileReferences) == null ? void 0 : d.length) > 0 ? (T(), c("div", Wn, [
              (T(!0), c(MM, null, eM((Y = e(C)) == null ? void 0 : Y.fileReferences, (yM) => (T(), c("div", {
                key: yM.id
              }, [
                s("div", null, P(yM.originalFileName), 1)
              ]))), 128))
            ])) : B("", !0)
          ]),
          s("fieldset", kn, [
            pn,
            s("div", Qn, [
              s("div", null, P((G = (k = (h = e(t)) == null ? void 0 : h.title) == null ? void 0 : k.values[0]) == null ? void 0 : G.value) + ": " + P((Z = (b = (r = e(j)) == null ? void 0 : r.multilingualTextValues[0]) == null ? void 0 : b.values[0]) == null ? void 0 : Z.value), 1),
              s("div", null, P((LM = (AM = (R = e(u)) == null ? void 0 : R.title) == null ? void 0 : AM.values[0]) == null ? void 0 : LM.value) + ": " + P((oM = (IM = e(S)) == null ? void 0 : IM.multilingualTextValues[0]) == null ? void 0 : oM.values[0].value), 1),
              s("div", null, P((tM = (SM = e(C)) == null ? void 0 : SM.fileReferences[0]) == null ? void 0 : tM.originalFileName), 1)
            ]),
            vn
          ])
        ])
      ]);
    };
  }
}), fn = /* @__PURE__ */ v({
  __name: "Form",
  props: {
    model: null,
    entity: null
  },
  setup(M) {
    const A = M, I = (g) => yN(A.entity, { formId: A.model.id, fieldId: g });
    return (g, D) => {
      var N;
      return T(!0), c(MM, null, eM((N = M.model) == null ? void 0 : N.fields, (L) => (T(), V(nN, {
        key: L.id,
        model: L,
        modelData: I(L.id)
      }, null, 8, ["model", "modelData"]))), 128);
    };
  }
}), Jn = { key: 0 }, Vn = ["onClick"], I4 = /* @__PURE__ */ v({
  __name: "FormList",
  props: {
    formEntries: null,
    entity: null
  },
  setup(M) {
    var N;
    const A = M, I = vD(), g = DM((N = A.formEntries[0]) == null ? void 0 : N.id.toString()), D = y(() => {
      var L, t;
      return (t = (L = I.entityTemplate) == null ? void 0 : L.forms) == null ? void 0 : t.find((j) => j.id.toString() === g.value);
    });
    return (L, t) => M.formEntries ? (T(), c("div", Jn, [
      (T(!0), c(MM, null, eM(M.formEntries, (j) => (T(), c("span", {
        key: j.id.toString()
      }, [
        s("a", {
          href: "#",
          onClick: (u) => g.value = j.id
        }, P(j.name) + " | ", 9, Vn)
      ]))), 128)),
      e(D) ? (T(), V(fn, {
        key: 0,
        model: e(D),
        entity: M.entity
      }, null, 8, ["model", "entity"])) : B("", !0)
    ])) : B("", !0);
  }
}), Zn = { class: "form-field-border" }, Bn = { key: 0 }, Pn = { class: "form-field-border" }, g4 = /* @__PURE__ */ v({
  __name: "EntityAssociationPanel",
  props: {
    entity: null,
    relationshipType: null,
    panelTitle: null
  },
  setup(M) {
    const A = M, I = vD(), { entity: g, storeId: D } = nj(I);
    y(() => {
      var L;
      return (L = A.entity) == null ? void 0 : L.subjectRelationships.filter((t) => t.name == A.relationshipType);
    });
    const N = () => {
      I.AddToRelationObject();
    };
    return (L, t) => {
      const j = aM("b-col"), u = aM("b-row"), S = aM("font-awesome-icon");
      return T(), c(MM, null, [
        W(u, null, {
          default: O(() => [
            W(j, { class: "col-sm-5" }, {
              default: O(() => [
                s("h6", null, P(M.relationshipType), 1)
              ]),
              _: 1
            }),
            W(j, { class: "col-sm-2" }),
            W(j, { class: "col-sm-5" }, {
              default: O(() => [
                s("h6", null, P(M.panelTitle), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        W(u, null, {
          default: O(() => [
            W(j, { class: "col-sm-5" }, {
              default: O(() => [
                s("div", Zn, [
                  e(g).subjectRelationships ? (T(), c("div", Bn, [
                    (T(!0), c(MM, null, eM(e(g).subjectRelationships, (i) => (T(), c("div", {
                      key: i.subjectEntityId
                    }, P(i.subjectEntityId), 1))), 128))
                  ])) : B("", !0)
                ])
              ]),
              _: 1
            }),
            W(j, { class: "col-sm-2" }, {
              default: O(() => [
                W(u, null, {
                  default: O(() => [
                    W(j, { class: "col-sm-4" }),
                    W(j, { class: "col-sm-4" }, {
                      default: O(() => [
                        s("button", {
                          class: "btn btn-primary",
                          onClick: N
                        }, [
                          W(S, { icon: "fa-solid fa-arrow-left" })
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
              default: O(() => [
                s("div", Pn, [
                  W(e(Ay), {
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
}), Fn = { class: "control" }, Xn = { class: "form-field-border" }, Rn = { key: 1 }, Hn = { key: 2 }, _n = { key: 3 }, $n = { key: 4 }, qn = { key: 5 }, Kn = /* @__PURE__ */ v({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = DM("Member of"), g = DM("Collections"), D = DM("Relationship"), N = DM("Items"), L = vD();
    A.apiRoot && L.setApiRoot(A.apiRoot);
    const t = y(() => L.entityTemplate);
    let j = DM("summary");
    const S = eL().params.id;
    PM(() => {
      S ? (console.log("entity Id: " + S.toString()), L.loadEntity(S)) : (console.log("load empty template"), L.loadTemplates());
    }), y(() => L.templates);
    const i = () => {
      L.createNewEntity();
    };
    let C = DM(!0);
    S && (L.loadEntity(S), C.value = !1);
    const w = y(() => L.entity), E = y(() => {
      var z;
      return (z = L.entityTemplate) == null ? void 0 : z.entityTemplateSettings.metadataForms;
    }), x = y(() => {
      var z;
      return (z = L.entityTemplate) == null ? void 0 : z.entityTemplateSettings.dataForms;
    }), n = () => {
      L.saveEntity(), C.value = !1;
    }, a = y(() => L.getFiles);
    return PM(() => {
      i();
    }), (z, d) => {
      const Y = aM("b-col"), h = aM("b-row");
      return T(), c(MM, null, [
        W(cj, {
          model: e(L).transientMessageModel
        }, null, 8, ["model"]),
        s("div", Fn, [
          s("button", {
            class: "btn btn-success",
            onClick: d[0] || (d[0] = (k) => n())
          }, "Save")
        ]),
        s("div", Xn, [
          e(t) ? (T(), V(h, { key: 0 }, {
            default: O(() => [
              W(Y, {
                class: "btn-group",
                role: "group",
                id: "toolBtns"
              }, {
                default: O(() => [
                  s("button", {
                    class: F(["pannel-buttons", { active: e(j) === "summary" }]),
                    onClick: d[1] || (d[1] = (k) => EA(j) ? j.value = "summary" : j = "summary")
                  }, "Summary", 2),
                  s("button", {
                    class: F(["pannel-buttons", { active: e(j) === "data" }]),
                    onClick: d[2] || (d[2] = (k) => EA(j) ? j.value = "data" : j = "data")
                  }, "Data", 2),
                  s("button", {
                    class: F(["pannel-buttons", { active: e(j) === "metadata" }]),
                    onClick: d[3] || (d[3] = (k) => EA(j) ? j.value = "metadata" : j = "metadata")
                  }, "Metadata", 2),
                  s("button", {
                    class: F(["pannel-buttons", { active: e(j) === "collections" }]),
                    onClick: d[4] || (d[4] = (k) => EA(j) ? j.value = "collections" : j = "collections")
                  }, "Collection(s)", 2),
                  s("button", {
                    class: F(["pannel-buttons", { active: e(j) === "related" }]),
                    onClick: d[5] || (d[5] = (k) => EA(j) ? j.value = "related" : j = "related")
                  }, "Related", 2)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : B("", !0),
          e(j) === "summary" ? (T(), c("div", Rn, [
            e(w) !== null ? (T(), V(Gn, { key: 0 })) : B("", !0),
            gM("Summary ")
          ])) : B("", !0),
          e(j) === "data" ? (T(), c("div", Hn, [
            W(I4, {
              "form-entries": e(x),
              entity: e(w)
            }, null, 8, ["form-entries", "entity"])
          ])) : B("", !0),
          e(j) === "metadata" ? (T(), c("div", _n, [
            W(I4, {
              "form-entries": e(E),
              entity: e(w)
            }, null, 8, ["form-entries", "entity"])
          ])) : B("", !0),
          e(j) === "collections" ? (T(), c("div", $n, [
            W(g4, {
              entity: e(w),
              relationshipType: I.value,
              panelTitle: g.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : B("", !0),
          e(j) === "related" ? (T(), c("div", qn, [
            W(g4, {
              entity: e(w),
              relationshipType: D.value,
              panelTitle: N.value
            }, null, 8, ["entity", "relationshipType", "panelTitle"])
          ])) : B("", !0)
        ]),
        (T(!0), c(MM, null, eM(e(a), (k) => (T(), c("div", {
          key: k.name
        }, P(k.name), 1))), 128))
      ], 64);
    };
  }
});
const dD = /* @__PURE__ */ FM(Kn, [["__scopeId", "data-v-685bad7e"]]), lW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FormModels: cE,
  FormBuilder: Zt,
  useFormBuilderStore: kD,
  FormSubmission: Ca,
  useFormSubmissionStore: oA,
  Login: xa,
  useLoginStore: Zi,
  WorkflowBuilder: ha,
  useWorkflowBuilderStore: Bi,
  EntityTemplateBuilder: Pt,
  useEntityTemplateBuilderStore: mj,
  EntityEditor: dD,
  useEntityEditorStore: vD
}, Symbol.toStringTag, { value: "Module" })), Mo = [
  {
    path: "/",
    name: "List",
    component: () => import("./List.e4a10758.js")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("./Create.72540e4a.js")
  },
  {
    path: "/read/:id",
    name: "Read",
    component: () => import("./Read.b19f5951.js")
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("./Update.87742795.js")
  },
  {
    path: "/delete/:id",
    name: "Delete",
    component: () => import("./Delete.0112ba6c.js")
  }
], EL = Gx({
  history: Ax(),
  routes: Mo
}), Ao = TI("CRUDManagerStore", {
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
}), Io = { class: "m-2" }, go = { class: "header" }, TL = /* @__PURE__ */ v({
  __name: "App",
  props: {
    apiRoot: null
  },
  setup(M) {
    const A = M, I = Ao(), g = y(() => A.apiRoot);
    return PM(() => {
      I.loadEntries(g == null ? void 0 : g.value);
    }), (D, N) => {
      const L = aM("router-link"), t = aM("router-view");
      return T(), c("div", Io, [
        s("div", go, [
          W(L, {
            to: "/",
            class: "navigation-menu-box"
          }, {
            default: O(() => [
              gM("List")
            ]),
            _: 1
          }),
          gM(" | "),
          W(L, {
            to: "/create",
            class: "navigation-menu-box"
          }, {
            default: O(() => [
              gM("Create")
            ]),
            _: 1
          })
        ]),
        W(t, null, {
          default: O(({ Component: j, route: u }) => [
            (T(), V(wM(j), null, {
              "object-type": O(() => [
                Q(D.$slots, "object-type")
              ]),
              "list-entry-delegate": O(() => [
                Q(D.$slots, "list-entry-delegate")
              ]),
              "create-delegate": O(() => [
                Q(D.$slots, "create-delegate")
              ]),
              "read-delegate": O(() => [
                Q(D.$slots, "read-delegate")
              ]),
              "update-delegate": O(() => [
                Q(D.$slots, "update-delegate")
              ]),
              "delete-delegate": O(() => [
                Q(D.$slots, "delete-delegate")
              ]),
              _: 2
            }, 1024))
          ]),
          _: 3
        })
      ]);
    };
  }
}), Do = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/collections");
    return (g, D) => (T(), V(TL, { "api-root": e(I) }, {
      "object-type": O(() => [
        gM("Collection")
      ]),
      "create-delegate": O(() => [
        W(e(dD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": O(() => [
        gM("ReadCollectionComponent")
      ]),
      "update-delegate": O(() => [
        W(e(dD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": O(() => [
        gM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), No = tL(), Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: No,
  router: EL,
  App: Do
}, Symbol.toStringTag, { value: "Module" })), to = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/items");
    return (g, D) => (T(), V(TL, { "api-root": e(I) }, {
      "object-type": O(() => [
        gM("Item")
      ]),
      "create-delegate": O(() => [
        W(e(dD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": O(() => [
        gM("ReadItemComponent")
      ]),
      "update-delegate": O(() => [
        W(e(dD), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": O(() => [
        gM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), jo = tL(), uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: jo,
  router: EL,
  App: to
}, Symbol.toStringTag, { value: "Module" })), So = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/entity-templates");
    return eL().params.id, (D, N) => (T(), V(TL, { "api-root": e(I) }, {
      "object-type": O(() => [
        gM("Entity Template")
      ]),
      "create-delegate": O(() => [
        W(e(Pt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": O(() => [
        gM("ReadEntityTemplateComponent")
      ]),
      "update-delegate": O(() => [
        W(e(Pt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": O(() => [
        gM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), io = tL(), eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: io,
  router: EL,
  App: So
}, Symbol.toStringTag, { value: "Module" })), Co = /* @__PURE__ */ v({
  __name: "App",
  props: {
    dataAttributes: null
  },
  setup(M) {
    const A = M, I = y(() => (A.dataAttributes ? A.dataAttributes.RepositoryMicroserviceUrl : "") + "/api/forms");
    return (g, D) => (T(), V(TL, { "api-root": e(I) }, {
      "object-type": O(() => [
        gM("Form Template")
      ]),
      "create-delegate": O(() => [
        W(e(Zt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "read-delegate": O(() => [
        gM("ReadFormComponent")
      ]),
      "update-delegate": O(() => [
        W(e(Zt), { "api-root": e(I) }, null, 8, ["api-root"])
      ]),
      "delete-delegate": O(() => [
        gM("Delete")
      ]),
      _: 1
    }, 8, ["api-root"]));
  }
}), wo = tL(), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pinia: wo,
  router: EL,
  App: Co
}, Symbol.toStringTag, { value: "Module" }));
var Ft = function(M, A) {
  return Ft = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, g) {
    I.__proto__ = g;
  } || function(I, g) {
    for (var D in g)
      Object.prototype.hasOwnProperty.call(g, D) && (I[D] = g[D]);
  }, Ft(M, A);
};
function EM(M, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  Ft(M, A);
  function I() {
    this.constructor = M;
  }
  M.prototype = A === null ? Object.create(A) : (I.prototype = A.prototype, new I());
}
var U = function() {
  return U = Object.assign || function(A) {
    for (var I, g = 1, D = arguments.length; g < D; g++) {
      I = arguments[g];
      for (var N in I)
        Object.prototype.hasOwnProperty.call(I, N) && (A[N] = I[N]);
    }
    return A;
  }, U.apply(this, arguments);
};
function HM(M, A, I) {
  if (I || arguments.length === 2)
    for (var g = 0, D = A.length, N; g < D; g++)
      (N || !(g in A)) && (N || (N = Array.prototype.slice.call(A, 0, g)), N[g] = A[g]);
  return M.concat(N || Array.prototype.slice.call(A));
}
var xL, uM, _i, yD, D4, $i, fN = {}, qi = [], To = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function rI(M, A) {
  for (var I in A)
    M[I] = A[I];
  return M;
}
function Ki(M) {
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
  return oN(M, L, g, D, null);
}
function oN(M, A, I, g, D) {
  var N = { type: M, props: A, key: I, ref: g, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: D == null ? ++_i : D };
  return D == null && uM.vnode != null && uM.vnode(N), N;
}
function xo() {
  return { current: null };
}
function qI(M) {
  return M.children;
}
function vA(M, A) {
  this.props = M, this.context = A;
}
function UD(M, A) {
  if (A == null)
    return M.__ ? UD(M.__, M.__.__k.indexOf(M) + 1) : null;
  for (var I; A < M.__k.length; A++)
    if ((I = M.__k[A]) != null && I.__e != null)
      return I.__e;
  return typeof M.type == "function" ? UD(M) : null;
}
function Me(M) {
  var A, I;
  if ((M = M.__) != null && M.__c != null) {
    for (M.__e = M.__c.base = null, A = 0; A < M.__k.length; A++)
      if ((I = M.__k[A]) != null && I.__e != null) {
        M.__e = M.__c.base = I.__e;
        break;
      }
    return Me(M);
  }
}
function Xt(M) {
  (!M.__d && (M.__d = !0) && yD.push(M) && !JN.__r++ || D4 !== uM.debounceRendering) && ((D4 = uM.debounceRendering) || setTimeout)(JN);
}
function JN() {
  for (var M; JN.__r = yD.length; )
    M = yD.sort(function(A, I) {
      return A.__v.__b - I.__v.__b;
    }), yD = [], M.some(function(A) {
      var I, g, D, N, L, t;
      A.__d && (L = (N = (I = A).__v).__e, (t = I.__P) && (g = [], (D = rI({}, N)).__v = N.__v + 1, Oj(t, N, D, I.__n, t.ownerSVGElement !== void 0, N.__h != null ? [L] : null, g, L == null ? UD(N) : L, N.__h), De(g, N), N.__e != L && Me(N)));
    });
}
function Ae(M, A, I, g, D, N, L, t, j, u) {
  var S, i, C, w, E, x, n, a = g && g.__k || qi, z = a.length;
  for (I.__k = [], S = 0; S < A.length; S++)
    if ((w = I.__k[S] = (w = A[S]) == null || typeof w == "boolean" ? null : typeof w == "string" || typeof w == "number" || typeof w == "bigint" ? oN(null, w, null, null, w) : Array.isArray(w) ? oN(qI, { children: w }, null, null, null) : w.__b > 0 ? oN(w.type, w.props, w.key, w.ref ? w.ref : null, w.__v) : w) != null) {
      if (w.__ = I, w.__b = I.__b + 1, (C = a[S]) === null || C && w.key == C.key && w.type === C.type)
        a[S] = void 0;
      else
        for (i = 0; i < z; i++) {
          if ((C = a[i]) && w.key == C.key && w.type === C.type) {
            a[i] = void 0;
            break;
          }
          C = null;
        }
      Oj(M, w, C = C || fN, D, N, L, t, j, u), E = w.__e, (i = w.ref) && C.ref != i && (n || (n = []), C.ref && n.push(C.ref, null, w), n.push(i, w.__c || E, w)), E != null ? (x == null && (x = E), typeof w.type == "function" && w.__k === C.__k ? w.__d = j = Ie(w, j, M) : j = ge(M, w, C, a, E, j), typeof I.type == "function" && (I.__d = j)) : j && C.__e == j && j.parentNode != M && (j = UD(C));
    }
  for (I.__e = x, S = z; S--; )
    a[S] != null && Le(a[S], a[S]);
  if (n)
    for (S = 0; S < n.length; S++)
      Ne(n[S], n[++S], n[++S]);
}
function Ie(M, A, I) {
  for (var g, D = M.__k, N = 0; D && N < D.length; N++)
    (g = D[N]) && (g.__ = M, A = typeof g.type == "function" ? Ie(g, A, I) : ge(I, g, g, D, g.__e, A));
  return A;
}
function VN(M, A) {
  return A = A || [], M == null || typeof M == "boolean" || (Array.isArray(M) ? M.some(function(I) {
    VN(I, A);
  }) : A.push(M)), A;
}
function ge(M, A, I, g, D, N) {
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
function ao(M, A, I, g, D) {
  var N;
  for (N in I)
    N === "children" || N === "key" || N in A || ZN(M, N, null, I[N], g);
  for (N in A)
    D && typeof A[N] != "function" || N === "children" || N === "key" || N === "value" || N === "checked" || I[N] === A[N] || ZN(M, N, A[N], I[N], g);
}
function N4(M, A, I) {
  A[0] === "-" ? M.setProperty(A, I) : M[A] = I == null ? "" : typeof I != "number" || To.test(A) ? I : I + "px";
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
  var u, S, i, C, w, E, x, n, a, z, d, Y, h, k, G, r = A.type;
  if (A.constructor !== void 0)
    return null;
  I.__h != null && (j = I.__h, t = A.__e = I.__e, A.__h = null, N = [t]), (u = uM.__b) && u(A);
  try {
    M:
      if (typeof r == "function") {
        if (n = A.props, a = (u = r.contextType) && g[u.__c], z = u ? a ? a.props.value : u.__ : g, I.__c ? x = (S = A.__c = I.__c).__ = S.__E : ("prototype" in r && r.prototype.render ? A.__c = S = new r(n, z) : (A.__c = S = new vA(n, z), S.constructor = r, S.render = no), a && a.sub(S), S.props = n, S.state || (S.state = {}), S.context = z, S.__n = g, i = S.__d = !0, S.__h = [], S._sb = []), S.__s == null && (S.__s = S.state), r.getDerivedStateFromProps != null && (S.__s == S.state && (S.__s = rI({}, S.__s)), rI(S.__s, r.getDerivedStateFromProps(n, S.__s))), C = S.props, w = S.state, i)
          r.getDerivedStateFromProps == null && S.componentWillMount != null && S.componentWillMount(), S.componentDidMount != null && S.__h.push(S.componentDidMount);
        else {
          if (r.getDerivedStateFromProps == null && n !== C && S.componentWillReceiveProps != null && S.componentWillReceiveProps(n, z), !S.__e && S.shouldComponentUpdate != null && S.shouldComponentUpdate(n, S.__s, z) === !1 || A.__v === I.__v) {
            for (S.props = n, S.state = S.__s, A.__v !== I.__v && (S.__d = !1), S.__v = A, A.__e = I.__e, A.__k = I.__k, A.__k.forEach(function(b) {
              b && (b.__ = A);
            }), d = 0; d < S._sb.length; d++)
              S.__h.push(S._sb[d]);
            S._sb = [], S.__h.length && L.push(S);
            break M;
          }
          S.componentWillUpdate != null && S.componentWillUpdate(n, S.__s, z), S.componentDidUpdate != null && S.__h.push(function() {
            S.componentDidUpdate(C, w, E);
          });
        }
        if (S.context = z, S.props = n, S.__v = A, S.__P = M, Y = uM.__r, h = 0, "prototype" in r && r.prototype.render) {
          for (S.state = S.__s, S.__d = !1, Y && Y(A), u = S.render(S.props, S.state, S.context), k = 0; k < S._sb.length; k++)
            S.__h.push(S._sb[k]);
          S._sb = [];
        } else
          do
            S.__d = !1, Y && Y(A), u = S.render(S.props, S.state, S.context), S.state = S.__s;
          while (S.__d && ++h < 25);
        S.state = S.__s, S.getChildContext != null && (g = rI(rI({}, g), S.getChildContext())), i || S.getSnapshotBeforeUpdate == null || (E = S.getSnapshotBeforeUpdate(C, w)), G = u != null && u.type === qI && u.key == null ? u.props.children : u, Ae(M, Array.isArray(G) ? G : [G], A, I, g, D, N, L, t, j), S.base = A.__e, A.__h = null, S.__h.length && L.push(S), x && (S.__E = S.__ = null), S.__e = !1;
      } else
        N == null && A.__v === I.__v ? (A.__k = I.__k, A.__e = I.__e) : A.__e = yo(I.__e, A, I, g, D, N, L, j);
    (u = uM.diffed) && u(A);
  } catch (b) {
    A.__v = null, (j || N != null) && (A.__e = t, A.__h = !!j, N[N.indexOf(t)] = null), uM.__e(b, A, I);
  }
}
function De(M, A) {
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
function yo(M, A, I, g, D, N, L, t) {
  var j, u, S, i = I.props, C = A.props, w = A.type, E = 0;
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
    if (N = N && xL.call(M.childNodes), u = (i = I.props || fN).dangerouslySetInnerHTML, S = C.dangerouslySetInnerHTML, !t) {
      if (N != null)
        for (i = {}, E = 0; E < M.attributes.length; E++)
          i[M.attributes[E].name] = M.attributes[E].value;
      (S || u) && (S && (u && S.__html == u.__html || S.__html === M.innerHTML) || (M.innerHTML = S && S.__html || ""));
    }
    if (ao(M, C, i, D, t), S)
      A.__k = [];
    else if (E = A.props.children, Ae(M, Array.isArray(E) ? E : [E], A, I, g, D && w !== "foreignObject", N, L, N ? N[0] : I.__k && UD(I, 0), t), N != null)
      for (E = N.length; E--; )
        N[E] != null && Ki(N[E]);
    t || ("value" in C && (E = C.value) !== void 0 && (E !== M.value || w === "progress" && !E || w === "option" && E !== i.value) && ZN(M, "value", E, i.value, !1), "checked" in C && (E = C.checked) !== void 0 && E !== M.checked && ZN(M, "checked", E, i.checked, !1));
  }
  return M;
}
function Ne(M, A, I) {
  try {
    typeof M == "function" ? M(A) : M.current = A;
  } catch (g) {
    uM.__e(g, I);
  }
}
function Le(M, A, I) {
  var g, D;
  if (uM.unmount && uM.unmount(M), (g = M.ref) && (g.current && g.current !== M.__e || Ne(g, null, A)), (g = M.__c) != null) {
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
      g[D] && Le(g[D], A, I || typeof M.type != "function");
  I || M.__e == null || Ki(M.__e), M.__ = M.__e = M.__d = void 0;
}
function no(M, A, I) {
  return this.constructor(M, I);
}
function mD(M, A, I) {
  var g, D, N;
  uM.__ && uM.__(M, A), D = (g = typeof I == "function") ? null : I && I.__k || A.__k, N = [], Oj(A, M = (!g && I || A).__k = OI(qI, null, [M]), D || fN, fN, A.ownerSVGElement !== void 0, !g && I ? [I] : D ? null : A.firstChild ? xL.call(A.childNodes) : null, N, !g && I ? I : D ? D.__e : A.firstChild, g), De(N, M);
}
function oo(M, A) {
  var I = { __c: A = "__cC" + $i++, __: M, Consumer: function(g, D) {
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
xL = qi.slice, uM = { __e: function(M, A, I, g) {
  for (var D, N, L; A = A.__; )
    if ((D = A.__c) && !D.__)
      try {
        if ((N = D.constructor) && N.getDerivedStateFromError != null && (D.setState(N.getDerivedStateFromError(M)), L = D.__d), D.componentDidCatch != null && (D.componentDidCatch(M, g || {}), L = D.__d), L)
          return D.__E = D;
      } catch (t) {
        M = t;
      }
  throw M;
} }, _i = 0, vA.prototype.setState = function(M, A) {
  var I;
  I = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rI({}, this.state), typeof M == "function" && (M = M(rI({}, I), this.props)), M && rI(I, M), M != null && this.__v && (A && this._sb.push(A), Xt(this));
}, vA.prototype.forceUpdate = function(M) {
  this.__v && (this.__e = !0, M && this.__h.push(M), Xt(this));
}, vA.prototype.render = qI, yD = [], JN.__r = 0, $i = 0;
var FA, gt, j4, te = [], Dt = [], u4 = uM.__b, S4 = uM.__r, i4 = uM.diffed, e4 = uM.__c, C4 = uM.unmount;
function lo() {
  for (var M; M = te.shift(); )
    if (M.__P && M.__H)
      try {
        M.__H.__h.forEach(lN), M.__H.__h.forEach(Rt), M.__H.__h = [];
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
  })) : (A.__h.forEach(lN), A.__h.forEach(Rt), A.__h = [])), gt = FA;
}, uM.diffed = function(M) {
  i4 && i4(M);
  var A = M.__c;
  A && A.__H && (A.__H.__h.length && (te.push(A) !== 1 && j4 === uM.requestAnimationFrame || ((j4 = uM.requestAnimationFrame) || so)(lo)), A.__H.__.forEach(function(I) {
    I.i && (I.__H = I.i), I.__V !== Dt && (I.__ = I.__V), I.i = void 0, I.__V = Dt;
  })), gt = FA = null;
}, uM.__c = function(M, A) {
  A.some(function(I) {
    try {
      I.__h.forEach(lN), I.__h = I.__h.filter(function(g) {
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
      lN(g);
    } catch (D) {
      A = D;
    }
  }), I.__H = void 0, A && uM.__e(A, I.__v));
};
var w4 = typeof requestAnimationFrame == "function";
function so(M) {
  var A, I = function() {
    clearTimeout(g), w4 && cancelAnimationFrame(A), setTimeout(M);
  }, g = setTimeout(I, 100);
  w4 && (A = requestAnimationFrame(I));
}
function lN(M) {
  var A = FA, I = M.__c;
  typeof I == "function" && (M.__c = void 0, I()), FA = A;
}
function Rt(M) {
  var A = FA;
  M.__c = M.__(), FA = A;
}
function co(M, A) {
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
var zo = uM.__e;
uM.__e = function(M, A, I, g) {
  if (M.then) {
    for (var D, N = A; N = N.__; )
      if ((D = N.__c) && D.__c)
        return A.__e == null && (A.__e = I.__e, A.__k = I.__k), D.__c(M, A);
  }
  zo(M, A, I, g);
};
var a4 = uM.unmount;
function je(M, A, I) {
  return M && (M.__c && M.__c.__H && (M.__c.__H.__.forEach(function(g) {
    typeof g.__c == "function" && g.__c();
  }), M.__c.__H = null), (M = co({}, M)).__c != null && (M.__c.__P === I && (M.__c.__P = A), M.__c = null), M.__k = M.__k && M.__k.map(function(g) {
    return je(g, A, I);
  })), M;
}
function ue(M, A, I) {
  return M && (M.__v = null, M.__k = M.__k && M.__k.map(function(g) {
    return ue(g, A, I);
  }), M.__c && M.__c.__P === A && (M.__e && I.insertBefore(M.__e, M.__d), M.__c.__e = !0, M.__c.__P = I)), M;
}
function Nt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Se(M) {
  var A = M.__.__c;
  return A && A.__a && A.__a(M);
}
function qD() {
  this.u = null, this.o = null;
}
uM.unmount = function(M) {
  var A = M.__c;
  A && A.__R && A.__R(), A && M.__h === !0 && (M.type = null), a4 && a4(M);
}, (Nt.prototype = new vA()).__c = function(M, A) {
  var I = A.__c, g = this;
  g.t == null && (g.t = []), g.t.push(I);
  var D = Se(g.__v), N = !1, L = function() {
    N || (N = !0, I.__R = null, D ? D(t) : t());
  };
  I.__R = L;
  var t = function() {
    if (!--g.__u) {
      if (g.state.__a) {
        var u = g.state.__a;
        g.__v.__k[0] = ue(u, u.__c.__P, u.__c.__O);
      }
      var S;
      for (g.setState({ __a: g.__b = null }); S = g.t.pop(); )
        S.forceUpdate();
    }
  }, j = A.__h === !0;
  g.__u++ || j || g.setState({ __a: g.__b = g.__v.__k[0] }), M.then(L, L);
}, Nt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Nt.prototype.render = function(M, A) {
  if (this.__b) {
    if (this.__v.__k) {
      var I = document.createElement("div"), g = this.__v.__k[0].__c;
      this.__v.__k[0] = je(this.__b, I, g.__O = g.__P);
    }
    this.__b = null;
  }
  var D = A.__a && OI(qI, null, M.fallback);
  return D && (D.__h = null), [OI(qI, null, A.__a ? null : M.children), D];
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
function Yo(M) {
  return this.getChildContext = function() {
    return M.context;
  }, M.children;
}
function ro(M) {
  var A = this, I = M.i;
  A.componentWillUnmount = function() {
    mD(null, A.l), A.l = null, A.i = null;
  }, A.i && A.i !== I && A.componentWillUnmount(), M.__v ? (A.l || (A.i = I, A.l = { nodeType: 1, parentNode: I, childNodes: [], appendChild: function(g) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, insertBefore: function(g, D) {
    this.childNodes.push(g), A.i.appendChild(g);
  }, removeChild: function(g) {
    this.childNodes.splice(this.childNodes.indexOf(g) >>> 1, 1), A.i.removeChild(g);
  } }), mD(OI(Yo, { context: A.context }, M.__v), A.l)) : A.l && A.componentWillUnmount();
}
function Uo(M, A) {
  var I = OI(ro, { __v: M, i: A });
  return I.containerInfo = A, I;
}
(qD.prototype = new vA()).__a = function(M) {
  var A = this, I = Se(A.__v), g = A.o.get(M);
  return g[0]++, function(D) {
    var N = function() {
      A.props.revealOrder ? (g.push(D), y4(A, M, g)) : D();
    };
    I ? I(N) : N();
  };
}, qD.prototype.render = function(M) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var A = VN(M.children);
  M.revealOrder && M.revealOrder[0] === "b" && A.reverse();
  for (var I = A.length; I--; )
    this.o.set(A[I], this.u = [1, 0, this.u]);
  return M.children;
}, qD.prototype.componentDidUpdate = qD.prototype.componentDidMount = function() {
  var M = this;
  this.o.forEach(function(A, I) {
    y4(M, I, A);
  });
};
var mo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Oo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ho = typeof document < "u", bo = function(M) {
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
function Wo() {
}
function ko() {
  return this.cancelBubble;
}
function po() {
  return this.defaultPrevented;
}
uM.event = function(M) {
  return n4 && (M = n4(M)), M.persist = Wo, M.isPropagationStopped = ko, M.isDefaultPrevented = po, M.nativeEvent = M;
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
      ho && N === "children" && A === "noscript" || N === "value" && "defaultValue" in I && L == null || (N === "defaultValue" && "value" in I && I.value == null ? N = "value" : N === "download" && L === !0 ? L = "" : /ondoubleclick/i.test(N) ? N = "ondblclick" : /^onchange(textarea|input)/i.test(N + A) && !bo(I.type) ? N = "oninput" : /^onfocus$/i.test(N) ? N = "onfocusin" : /^onblur$/i.test(N) ? N = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(N) ? N = N.toLowerCase() : D && Oo.test(N) ? N = N.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : L === null && (L = void 0), /^oninput$/i.test(N) && (N = N.toLowerCase(), g[N] && (N = "oninputCapture")), g[N] = L);
    }
    A == "select" && g.multiple && Array.isArray(g.value) && (g.value = VN(I.children).forEach(function(t) {
      t.props.selected = g.value.indexOf(t.props.value) != -1;
    })), A == "select" && g.defaultValue != null && (g.value = VN(I.children).forEach(function(t) {
      t.props.selected = g.multiple ? g.defaultValue.indexOf(t.props.value) != -1 : g.defaultValue == t.props.value;
    })), M.props = g, I.class != I.className && (o4.enumerable = "className" in I, I.className != null && (g.class = I.className), Object.defineProperty(g, "className", o4));
  }
  M.$$typeof = mo, l4 && l4(M);
};
var s4 = uM.__r;
uM.__r = function(M) {
  s4 && s4(M), M.__c;
};
var c4 = typeof globalThis < "u" ? globalThis : window;
c4.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : c4.FullCalendarVDom = {
  Component: vA,
  createElement: OI,
  render: mD,
  createRef: xo,
  Fragment: qI,
  createContext: Go,
  createPortal: Uo,
  flushSync: Qo,
  unmountComponentAtNode: fo
};
function Qo(M) {
  M();
  var A = uM.debounceRendering, I = [];
  function g(D) {
    I.push(D);
  }
  for (uM.debounceRendering = g, mD(OI(vo, {}), document.createElement("div")); I.length; )
    I.shift()();
  uM.debounceRendering = A;
}
var vo = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    return OI("div", {});
  }, A.prototype.componentDidMount = function() {
    this.setState({});
  }, A;
}(vA);
function Go(M) {
  var A = oo(M), I = A.Provider;
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
function fo(M) {
  mD(null, M);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var hj = FullCalendarVDom.Component, m = FullCalendarVDom.createElement, Jo = FullCalendarVDom.render, mA = FullCalendarVDom.createRef, SA = FullCalendarVDom.Fragment, ie = FullCalendarVDom.createContext, Vo = FullCalendarVDom.createPortal, z4 = FullCalendarVDom.flushSync, Zo = FullCalendarVDom.unmountComponentAtNode;
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
function Bo(M) {
  M.parentNode && M.parentNode.removeChild(M);
}
function AI(M, A) {
  if (M.closest)
    return M.closest(A);
  if (!document.documentElement.contains(M))
    return null;
  do {
    if (Po(M, A))
      return M;
    M = M.parentElement || M.parentNode;
  } while (M !== null && M.nodeType === 1);
  return null;
}
function Po(M, A) {
  var I = M.matches || M.matchesSelector || M.msMatchesSelector;
  return I.call(M, A);
}
function Fo(M, A) {
  for (var I = M instanceof HTMLElement ? [M] : M, g = [], D = 0; D < I.length; D += 1)
    for (var N = I[D].querySelectorAll(A), L = 0; L < N.length; L += 1)
      g.push(N[L]);
  return g;
}
var Xo = /(top|left|right|bottom|width|height)$/i;
function Ro(M, A) {
  for (var I in A)
    ee(M, I, A[I]);
}
function ee(M, A, I) {
  I == null ? M.style[A] = "" : typeof I == "number" && Xo.test(A) ? M.style[A] = I + "px" : M.style[A] = I;
}
function Ho(M) {
  var A, I;
  return (I = (A = M.composedPath) === null || A === void 0 ? void 0 : A.call(M)[0]) !== null && I !== void 0 ? I : M.target;
}
var Y4 = 0;
function mI() {
  return Y4 += 1, "fc-dom-" + Y4;
}
function _o(M, A) {
  return function(I) {
    var g = AI(I.target, M);
    g && A.call(g, I, g);
  };
}
function Ce(M, A, I, g) {
  var D = _o(I, g);
  return M.addEventListener(A, D), function() {
    M.removeEventListener(A, D);
  };
}
function $o(M, A, I, g) {
  var D;
  return Ce(M, "mouseover", A, function(N, L) {
    if (L !== D) {
      D = L, I(N, L);
      var t = function(j) {
        D = null, g(j, L), L.removeEventListener("mouseleave", t);
      };
      L.addEventListener("mouseleave", t);
    }
  });
}
function we(M) {
  return U({ onClick: M }, Ee(M));
}
function Ee(M) {
  return {
    tabIndex: 0,
    onKeyDown: function(A) {
      (A.key === "Enter" || A.key === " ") && (M(A), A.preventDefault());
    }
  };
}
var r4 = 0;
function $g() {
  return r4 += 1, String(r4);
}
function qo(M) {
  var A = [], I = [], g, D;
  for (typeof M == "string" ? I = M.split(/\s*,\s*/) : typeof M == "function" ? I = [M] : Array.isArray(M) && (I = M), g = 0; g < I.length; g += 1)
    D = I[g], typeof D == "string" ? A.push(D.charAt(0) === "-" ? { field: D.substring(1), order: -1 } : { field: D, order: 1 }) : typeof D == "function" && A.push({ func: D });
  return A;
}
function Ko(M, A, I) {
  var g, D;
  for (g = 0; g < I.length; g += 1)
    if (D = Ml(M, A, I[g]), D)
      return D;
  return 0;
}
function Ml(M, A, I) {
  return I.func ? I.func(M, A) : Al(M[I.field], A[I.field]) * (I.order || 1);
}
function Al(M, A) {
  return !M && !A ? 0 : A == null ? -1 : M == null ? 1 : typeof M == "string" || typeof A == "string" ? String(M).localeCompare(String(A)) : M - A;
}
function Lt(M, A) {
  var I = String(M);
  return "000".substr(0, A - I.length) + I;
}
function nD(M, A, I) {
  return typeof M == "function" ? M.apply(void 0, A) : typeof M == "string" ? A.reduce(function(g, D, N) {
    return g.replace("$" + N, D || "");
  }, M) : I;
}
function tt(M) {
  return M % 1 === 0;
}
function Il(M) {
  var A = M.querySelector(".fc-scrollgrid-shrink-frame"), I = M.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!A)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!I)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return M.getBoundingClientRect().width - A.getBoundingClientRect().width + I.getBoundingClientRect().width;
}
var gl = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function d4(M, A) {
  var I = dI(M);
  return I[2] += A * 7, xA(I);
}
function IA(M, A) {
  var I = dI(M);
  return I[2] += A, xA(I);
}
function KI(M, A) {
  var I = dI(M);
  return I[6] += A, xA(I);
}
function Dl(M, A) {
  return Ng(M, A) / 7;
}
function Ng(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60 * 24);
}
function Nl(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60 * 60);
}
function Ll(M, A) {
  return (A.valueOf() - M.valueOf()) / (1e3 * 60);
}
function tl(M, A) {
  return (A.valueOf() - M.valueOf()) / 1e3;
}
function jl(M, A) {
  var I = VM(M), g = VM(A);
  return {
    years: 0,
    months: 0,
    days: Math.round(Ng(I, g)),
    milliseconds: A.valueOf() - g.valueOf() - (M.valueOf() - I.valueOf())
  };
}
function ul(M, A) {
  var I = BN(M, A);
  return I !== null && I % 7 === 0 ? I / 7 : null;
}
function BN(M, A) {
  return UI(M) === UI(A) ? Math.round(Ng(M, A)) : null;
}
function VM(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate()
  ]);
}
function Sl(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours()
  ]);
}
function il(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes()
  ]);
}
function el(M) {
  return xA([
    M.getUTCFullYear(),
    M.getUTCMonth(),
    M.getUTCDate(),
    M.getUTCHours(),
    M.getUTCMinutes(),
    M.getUTCSeconds()
  ]);
}
function Cl(M, A, I) {
  var g = M.getUTCFullYear(), D = jt(M, g, A, I);
  if (D < 1)
    return jt(M, g - 1, A, I);
  var N = jt(M, g + 1, A, I);
  return N >= 1 ? Math.min(D, N) : D;
}
function jt(M, A, I, g) {
  var D = xA([A, 0, 1 + wl(A, I, g)]), N = VM(M), L = Math.round(Ng(D, N));
  return Math.floor(L / 7) + 1;
}
function wl(M, A, I) {
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
function Te(M) {
  return !isNaN(M.valueOf());
}
function UI(M) {
  return M.getUTCHours() * 1e3 * 60 * 60 + M.getUTCMinutes() * 1e3 * 60 + M.getUTCSeconds() * 1e3 + M.getUTCMilliseconds();
}
function bj(M, A, I, g) {
  return {
    instanceId: $g(),
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
function vg(M, A) {
  var I = {};
  for (var g in M)
    A(M[g], g) && (I[g] = M[g]);
  return I;
}
function GD(M, A) {
  var I = {};
  for (var g in M)
    I[g] = A(M[g], g);
  return I;
}
function xe(M) {
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
    if (!(g in M && El(M[g], A[g], I[g])))
      return !1;
  for (var g in M)
    if (!(g in A))
      return !1;
  return !0;
}
function El(M, A, I) {
  return M === A || I === !0 ? !0 : I ? I(M, A) : !1;
}
function Tl(M, A, I, g) {
  A === void 0 && (A = 0), g === void 0 && (g = 1);
  var D = [];
  I == null && (I = Object.keys(M).length);
  for (var N = A; N < I; N += g) {
    var L = M[N];
    L !== void 0 && D.push(L);
  }
  return D;
}
function xl(M, A, I, g) {
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
  t = vg(t, function(n) {
    return !L[n.defId].recurringDef;
  });
  for (var j in L) {
    var u = L[j];
    if (u.recurringDef) {
      var S = u.recurringDef.duration;
      S || (S = u.allDay ? N.defaultAllDayEventDuration : N.defaultTimedEventDuration);
      for (var i = al(u, S, A, g, D.recurringTypes), C = 0, w = i; C < w.length; C++) {
        var E = w[C], x = bj(j, {
          start: E,
          end: g.add(E, S)
        });
        t[x.instanceId] = x;
      }
    }
  }
  return { defs: L, instances: t };
}
function al(M, A, I, g, D) {
  var N = D[M.recurringDef.typeId], L = N.expand(M.recurringDef.typeData, {
    start: g.subtract(I.start, A),
    end: I.end
  }, g);
  return M.allDay && (L = L.map(VM)), L;
}
var yl = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function pM(M, A) {
  var I;
  return typeof M == "string" ? nl(M) : typeof M == "object" && M ? h4(M) : typeof M == "number" ? h4((I = {}, I[A || "milliseconds"] = M, I)) : null;
}
function nl(M) {
  var A = yl.exec(M);
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
function ol(M, A) {
  return M.years === A.years && M.months === A.months && M.days === A.days && M.milliseconds === A.milliseconds;
}
function ll(M, A) {
  return {
    years: M.years - A.years,
    months: M.months - A.months,
    days: M.days - A.days,
    milliseconds: M.milliseconds - A.milliseconds
  };
}
function sl(M) {
  return mg(M) / 365;
}
function cl(M) {
  return mg(M) / 30;
}
function mg(M) {
  return OD(M) / 864e5;
}
function OD(M) {
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
function zl(M, A, I) {
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
function Gg(M, A, I) {
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
    else if (!Gg(g, N)) {
      I && I(D);
      var t = M.apply(this, N);
      (!A || !A(t, D)) && (D = t);
    }
    return g = N, D;
  };
}
function sN(M, A, I) {
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
}, KD = /\s*([ap])\.?m\.?/i, Yl = /,/g, rl = /\s+/g, dl = /\u200e/g, Ul = /UTC|GMT/, ml = function() {
  function M(A) {
    var I = {}, g = {}, D = 0;
    for (var N in A)
      N in b4 ? (g[N] = A[N], D = Math.max(b4[N], D)) : (I[N] = A[N], N in FN && (D = Math.max(FN[N], D)));
    this.standardDateProps = I, this.extendedSettings = g, this.severity = D, this.buildFormattingFunc = UM(W4);
  }
  return M.prototype.format = function(A, I) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, I)(A);
  }, M.prototype.formatRange = function(A, I, g, D) {
    var N = this, L = N.standardDateProps, t = N.extendedSettings, j = pl(A.marker, I.marker, g.calendarSystem);
    if (!j)
      return this.format(A, g);
    var u = j;
    u > 1 && (L.year === "numeric" || L.year === "2-digit") && (L.month === "numeric" || L.month === "2-digit") && (L.day === "numeric" || L.day === "2-digit") && (u = 1);
    var S = this.format(A, g), i = this.format(I, g);
    if (S === i)
      return S;
    var C = Ql(L, u), w = W4(C, t, g), E = w(A), x = w(I), n = vl(S, E, i, x), a = t.separator || D || g.defaultSeparator || "";
    return n ? n.before + E + a + x + n.after : S + a + i;
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
    return kl(I.computeWeekNumber(D.marker), I.weekText, I.weekTextLong, I.locale, A.week);
  } : Ol(M, A, I);
}
function Ol(M, A, I) {
  M = U({}, M), A = U({}, A), hl(M, A), M.timeZone = "UTC";
  var g = new Intl.DateTimeFormat(I.locale.codes, M), D;
  if (A.omitZeroMinute) {
    var N = U({}, M);
    delete N.minute, D = new Intl.DateTimeFormat(I.locale.codes, N);
  }
  return function(L) {
    var t = L.marker, j;
    D && !t.getUTCMinutes() ? j = D : j = g;
    var u = j.format(t);
    return bl(u, L, M, A, I);
  };
}
function hl(M, A) {
  M.timeZoneName && (M.hour || (M.hour = "2-digit"), M.minute || (M.minute = "2-digit")), M.timeZoneName === "long" && (M.timeZoneName = "short"), A.omitZeroMinute && (M.second || M.millisecond) && delete A.omitZeroMinute;
}
function bl(M, A, I, g, D) {
  return M = M.replace(dl, ""), I.timeZoneName === "short" && (M = Wl(M, D.timeZone === "UTC" || A.timeZoneOffset == null ? "UTC" : pj(A.timeZoneOffset))), g.omitCommas && (M = M.replace(Yl, "").trim()), g.omitZeroMinute && (M = M.replace(":00", "")), g.meridiem === !1 ? M = M.replace(KD, "").trim() : g.meridiem === "narrow" ? M = M.replace(KD, function(N, L) {
    return L.toLocaleLowerCase();
  }) : g.meridiem === "short" ? M = M.replace(KD, function(N, L) {
    return L.toLocaleLowerCase() + "m";
  }) : g.meridiem === "lowercase" && (M = M.replace(KD, function(N) {
    return N.toLocaleLowerCase();
  })), M = M.replace(rl, " "), M = M.trim(), M;
}
function Wl(M, A) {
  var I = !1;
  return M = M.replace(Ul, function() {
    return I = !0, A;
  }), I || (M += " " + A), M;
}
function kl(M, A, I, g, D) {
  var N = [];
  return D === "long" ? N.push(I) : (D === "short" || D === "narrow") && N.push(A), (D === "long" || D === "short") && N.push(" "), N.push(g.simpleNumberFormat.format(M)), g.options.direction === "rtl" && N.reverse(), N.join("");
}
function pl(M, A, I) {
  return I.getMarkerYear(M) !== I.getMarkerYear(A) ? 5 : I.getMarkerMonth(M) !== I.getMarkerMonth(A) ? 4 : I.getMarkerDay(M) !== I.getMarkerDay(A) ? 2 : UI(M) !== UI(A) ? 1 : 0;
}
function Ql(M, A) {
  var I = {};
  for (var g in M)
    (!(g in FN) || FN[g] <= A) && (I[g] = M[g]);
  return I;
}
function vl(M, A, I, g) {
  for (var D = 0; D < M.length; ) {
    var N = M.indexOf(A, D);
    if (N === -1)
      break;
    var L = M.substr(0, N);
    D = N + A.length;
    for (var t = M.substr(D), j = 0; j < I.length; ) {
      var u = I.indexOf(g, j);
      if (u === -1)
        break;
      var S = I.substr(0, u);
      j = u + g.length;
      var i = I.substr(j);
      if (L === S && t === i)
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
var Gl = function() {
  function M(A) {
    this.cmdStr = A;
  }
  return M.prototype.format = function(A, I, g) {
    return I.cmdFormatter(this.cmdStr, XN(A, null, I, g));
  }, M.prototype.formatRange = function(A, I, g, D) {
    return g.cmdFormatter(this.cmdStr, XN(A, I, g, D));
  }, M;
}(), fl = function() {
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
  return typeof M == "object" && M ? new ml(M) : typeof M == "string" ? new Gl(M) : typeof M == "function" ? new fl(M) : null;
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
  eventOrder: qo,
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
}, oD = {
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
}, ZI = {
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
var Jl = {
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
  return Wj(M, ZI);
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
  for (var D = Mg(), N = fj(I), L = 0, t = M; L < t.length; L++) {
    var j = t[L], u = ye(j, A, I, g, N);
    u && _t(u, D);
  }
  return D;
}
function _t(M, A) {
  return A === void 0 && (A = Mg()), A.defs[M.def.defId] = M.def, M.instance && (A.instances[M.instance.instanceId] = M.instance), A;
}
function Vl(M, A) {
  var I = M.instances[A];
  if (I) {
    var g = M.defs[I.defId], D = Gj(M, function(N) {
      return Zl(g, N);
    });
    return D.defs[g.defId] = g, D.instances[I.instanceId] = I, D;
  }
  return Mg();
}
function Zl(M, A) {
  return Boolean(M.groupId && M.groupId === A.groupId);
}
function Mg() {
  return { defs: {}, instances: {} };
}
function vj(M, A) {
  return {
    defs: U(U({}, M.defs), A.defs),
    instances: U(U({}, M.instances), A.instances)
  };
}
function Gj(M, A) {
  var I = vg(M.defs, A), g = vg(M.instances, function(D) {
    return I[D.defId];
  });
  return { defs: I, instances: g };
}
function Bl(M, A) {
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
function Pl(M, A) {
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
}, Fl = {
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
  var I = Pl(M.constraint, A);
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
function Xl(M) {
  return M.reduce(Rl, Fl);
}
function Rl(M, A) {
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
var cN = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, ae = {
  start: f,
  end: f,
  date: f,
  allDay: Boolean
}, Hl = U(U(U({}, cN), ae), { extendedProps: f });
function ye(M, A, I, g, D) {
  D === void 0 && (D = fj(I));
  var N = ne(M, I, D), L = N.refined, t = N.extra, j = $l(A, I), u = xl(L, j, I.dateEnv, I.pluginHooks.recurringTypes);
  if (u) {
    var S = qt(L, t, A ? A.sourceId : "", u.allDay, Boolean(u.duration), I);
    return S.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: S, instance: null };
  }
  var i = _l(L, j, I, g);
  if (i) {
    var S = qt(L, t, A ? A.sourceId : "", i.allDay, i.hasEnd, I), C = bj(S.defId, i.range, i.forcedStartTzo, i.forcedEndTzo);
    return { def: S, instance: C };
  }
  return null;
}
function ne(M, A, I) {
  return I === void 0 && (I = fj(A)), Qj(M, I);
}
function fj(M) {
  return U(U(U({}, HN), Hl), M.pluginHooks.eventRefiners);
}
function qt(M, A, I, g, D, N) {
  for (var L = {
    title: M.title || "",
    groupId: M.groupId || "",
    publicId: M.id || "",
    url: M.url || "",
    recurringDef: null,
    defId: $g(),
    sourceId: I,
    allDay: g,
    hasEnd: D,
    interactive: M.interactive,
    ui: _N(M, N),
    extendedProps: U(U({}, M.extendedProps || {}), A)
  }, t = 0, j = N.pluginHooks.eventDefMemberAdders; t < j.length; t++) {
    var u = j[t];
    U(L, u(M));
  }
  return Object.freeze(L.ui.classNames), Object.freeze(L.extendedProps), L;
}
function _l(M, A, I, g) {
  var D = M.allDay, N, L = null, t = !1, j, u = null, S = M.start != null ? M.start : M.date;
  if (N = I.dateEnv.createMarkerMeta(S), N)
    L = N.marker;
  else if (!g)
    return null;
  return M.end != null && (j = I.dateEnv.createMarkerMeta(M.end)), D == null && (A != null ? D = A : D = (!N || N.isTimeUnspecified) && (!j || j.isTimeUnspecified)), D && L && (L = VM(L)), j && (u = j.marker, D && (u = VM(u)), L && u <= L && (u = null)), u ? t = !0 : g || (t = I.options.forceEventDuration || !1, u = I.dateEnv.add(L, D ? I.options.defaultAllDayEventDuration : I.options.defaultTimedEventDuration)), {
    allDay: D,
    hasEnd: t,
    range: { start: L, end: u },
    forcedStartTzo: N ? N.forcedTzo : null,
    forcedEndTzo: j ? j.forcedTzo : null
  };
}
function $l(M, A) {
  var I = null;
  return M && (I = M.defaultAllDay), I == null && (I = A.options.defaultAllDay), I;
}
function oe(M) {
  var A = Math.floor(Ng(M.start, M.end)) || 1, I = VM(M.start), g = IA(I, A);
  return { start: I, end: g };
}
function Jj(M, A) {
  A === void 0 && (A = pM(0));
  var I = null, g = null;
  if (M.end) {
    g = VM(M.end);
    var D = M.end.valueOf() - g.valueOf();
    D && D >= OD(A) && (g = IA(g, 1));
  }
  return M.start && (I = VM(M.start), g && g <= I && (g = IA(I, 1))), { start: I, end: g };
}
function ql(M) {
  var A = Jj(M);
  return Ng(A.start, A.end) > 1;
}
function MN(M, A, I, g) {
  return g === "year" ? pM(I.diffWholeYears(M, A), "year") : g === "month" ? pM(I.diffWholeMonths(M, A), "month") : jl(M, A);
}
function Kl(M, A) {
  var I = null, g = null;
  return M.start && (I = A.createMarker(M.start)), M.end && (g = A.createMarker(M.end)), !I && !g || I && g && g < I ? null : { start: I, end: g };
}
function G4(M, A) {
  var I = [], g = A.start, D, N;
  for (M.sort(Ms), D = 0; D < M.length; D += 1)
    N = M[D], N.start > g && I.push({ start: g, end: N.start }), N.end > g && (g = N.end);
  return g < A.end && I.push({ start: g, end: A.end }), I;
}
function Ms(M, A) {
  return M.start.valueOf() - A.start.valueOf();
}
function fg(M, A) {
  var I = M.start, g = M.end, D = null;
  return A.start !== null && (I === null ? I = A.start : I = new Date(Math.max(I.valueOf(), A.start.valueOf()))), A.end != null && (g === null ? g = A.end : g = new Date(Math.min(g.valueOf(), A.end.valueOf()))), (I === null || g === null || I < g) && (D = { start: I, end: g }), D;
}
function As(M, A) {
  return (M.end === null || A.start === null || M.end > A.start) && (M.start === null || A.end === null || M.start < A.end);
}
function RI(M, A) {
  return (M.start === null || A >= M.start) && (M.end === null || A < M.end);
}
function Is(M, A) {
  return A.start != null && M < A.start ? A.start : A.end != null && M >= A.end ? new Date(A.end.valueOf() - 1) : M;
}
function Kt(M, A, I, g) {
  var D = {}, N = {}, L = {}, t = [], j = [], u = le(M.defs, A);
  for (var S in M.defs) {
    var i = M.defs[S], C = u[i.defId];
    C.display === "inverse-background" && (i.groupId ? (D[i.groupId] = [], L[i.groupId] || (L[i.groupId] = i)) : N[S] = []);
  }
  for (var w in M.instances) {
    var E = M.instances[w], i = M.defs[E.defId], C = u[i.defId], x = E.range, n = !i.allDay && g ? Jj(x, g) : x, a = fg(n, I);
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
    for (var d = D[z], Y = G4(d, I), h = 0, k = Y; h < k.length; h++) {
      var G = k[h], i = L[z], C = u[i.defId];
      t.push({
        def: i,
        ui: C,
        instance: null,
        range: G,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var S in N)
    for (var d = N[S], Y = G4(d, I), r = 0, b = Y; r < b.length; r++) {
      var G = b[r];
      t.push({
        def: M.defs[S],
        ui: u[S],
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
function le(M, A) {
  return GD(M, function(I) {
    return se(I, A);
  });
}
function se(M, A) {
  var I = [];
  return A[""] && I.push(A[""]), A[M.defId] && I.push(A[M.defId]), I.push(M.ui), Xl(I);
}
function ce(M, A) {
  var I = M.map(gs);
  return I.sort(function(g, D) {
    return Ko(g, D, A);
  }), I.map(function(g) {
    return g._seg;
  });
}
function gs(M) {
  var A = M.eventRange, I = A.def, g = A.instance ? A.instance.range : A.range, D = g.start ? g.start.valueOf() : 0, N = g.end ? g.end.valueOf() : 0;
  return U(U(U({}, I.extendedProps), I), {
    id: I.publicId,
    start: D,
    end: N,
    duration: N - D,
    allDay: Number(I.allDay),
    _seg: M
  });
}
function Ds(M, A) {
  for (var I = A.pluginHooks, g = I.isDraggableTransformers, D = M.eventRange, N = D.def, L = D.ui, t = L.startEditable, j = 0, u = g; j < u.length; j++) {
    var S = u[j];
    t = S(t, N, L, A);
  }
  return t;
}
function Ns(M, A) {
  return M.isStart && M.eventRange.ui.durationEditable && A.options.eventResizableFromStart;
}
function Ls(M, A) {
  return M.isEnd && M.eventRange.ui.durationEditable;
}
function lD(M, A, I, g, D, N, L) {
  var t = I.dateEnv, j = I.options, u = j.displayEventTime, S = j.displayEventEnd, i = M.eventRange.def, C = M.eventRange.instance;
  u == null && (u = g !== !1), S == null && (S = D !== !1);
  var w = C.range.start, E = C.range.end, x = N || M.start || M.eventRange.range.start, n = L || M.end || M.eventRange.range.end, a = VM(w).valueOf() === VM(x).valueOf(), z = VM(KI(E, -1)).valueOf() === VM(KI(n, -1)).valueOf();
  return u && !i.allDay && (a || z) ? (x = a ? w : x, n = z ? E : n, S && i.hasEnd ? t.formatRange(x, n, A, {
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
    isToday: A && RI(A, g.start)
  };
}
function ts(M) {
  var A = ["fc-event"];
  return M.isMirror && A.push("fc-event-mirror"), M.isDraggable && A.push("fc-event-draggable"), (M.isStartResizable || M.isEndResizable) && A.push("fc-event-resizable"), M.isDragging && A.push("fc-event-dragging"), M.isResizing && A.push("fc-event-resizing"), M.isSelected && A.push("fc-event-selected"), M.isStart && A.push("fc-event-start"), M.isEnd && A.push("fc-event-end"), M.isPast && A.push("fc-event-past"), M.isToday && A.push("fc-event-today"), M.isFuture && A.push("fc-event-future"), A;
}
function js(M) {
  return M.instance ? M.instance.instanceId : M.def.defId + ":" + M.range.start.toISOString();
}
function Vj(M, A) {
  var I = M.eventRange, g = I.def, D = I.instance, N = g.url;
  if (N)
    return { href: N };
  var L = A.emitter, t = A.options, j = t.eventInteractive;
  return j == null && (j = g.interactive, j == null && (j = Boolean(L.hasHandlers("eventClick")))), j ? Ee(function(u) {
    L.trigger("eventClick", {
      el: u.target,
      event: new XA(A, g, D),
      jsEvent: u,
      view: A.viewApi
    });
  }) : {};
}
var us = {
  start: f,
  end: f,
  allDay: Boolean
};
function Ss(M, A, I) {
  var g = is(M, A), D = g.range;
  if (!D.start)
    return null;
  if (!D.end) {
    if (I == null)
      return null;
    D.end = A.add(D.start, I);
  }
  return g;
}
function is(M, A) {
  var I = Qj(M, us), g = I.refined, D = I.extra, N = g.start ? A.createMarkerMeta(g.start) : null, L = g.end ? A.createMarkerMeta(g.end) : null, t = g.allDay;
  return t == null && (t = N && N.isTimeUnspecified && (!L || L.isTimeUnspecified)), U({ range: {
    start: N ? N.marker : null,
    end: L ? L.marker : null
  }, allDay: t }, D);
}
function es(M, A) {
  return U(U({}, Ye(M.range, A, M.allDay)), { allDay: M.allDay });
}
function ze(M, A, I) {
  return U(U({}, Ye(M, A, I)), { timeZone: A.timeZone });
}
function Ye(M, A, I) {
  return {
    start: A.toDate(M.start),
    end: A.toDate(M.end),
    startStr: A.formatIso(M.start, { omitTime: I }),
    endStr: A.formatIso(M.end, { omitTime: I })
  };
}
function Cs(M, A, I) {
  var g = ne({ editable: !1 }, I), D = qt(
    g.refined,
    g.extra,
    "",
    M.allDay,
    !0,
    I
  );
  return {
    def: D,
    ui: se(D, A),
    instance: bj(D.defId, M.range),
    range: M.range,
    isStart: !0,
    isEnd: !0
  };
}
function ws(M, A, I) {
  I.emitter.trigger("select", U(U({}, Ts(M, I)), { jsEvent: A ? A.origEvent : null, view: I.viewApi || I.calendarApi.view }));
}
function Es(M, A) {
  A.emitter.trigger("unselect", {
    jsEvent: M ? M.origEvent : null,
    view: A.viewApi || A.calendarApi.view
  });
}
function Ts(M, A) {
  for (var I = {}, g = 0, D = A.pluginHooks.dateSpanTransforms; g < D.length; g++) {
    var N = D[g];
    U(I, N(M, A));
  }
  return U(I, es(M, A.dateEnv)), I;
}
function J4(M, A, I) {
  var g = I.dateEnv, D = I.options, N = A;
  return M ? (N = VM(N), N = g.add(N, D.defaultAllDayEventDuration)) : N = g.add(N, D.defaultTimedEventDuration), N;
}
function xs(M, A, I, g) {
  var D = le(M.defs, A), N = Mg();
  for (var L in M.defs) {
    var t = M.defs[L];
    N.defs[L] = as(t, D[L], I, g);
  }
  for (var j in M.instances) {
    var u = M.instances[j], t = N.defs[u.defId];
    N.instances[j] = ys(u, t, D[u.defId], I, g);
  }
  return N;
}
function as(M, A, I, g) {
  var D = I.standardProps || {};
  D.hasEnd == null && A.durationEditable && (I.startDelta || I.endDelta) && (D.hasEnd = !0);
  var N = U(U(U({}, M), D), { ui: U(U({}, M.ui), D.ui) });
  I.extendedProps && (N.extendedProps = U(U({}, N.extendedProps), I.extendedProps));
  for (var L = 0, t = g.pluginHooks.eventDefMutationAppliers; L < t.length; L++) {
    var j = t[L];
    j(N, I, g);
  }
  return !N.hasEnd && g.options.forceEventDuration && (N.hasEnd = !0), N;
}
function ys(M, A, I, g, D) {
  var N = D.dateEnv, L = g.standardProps && g.standardProps.allDay === !0, t = g.standardProps && g.standardProps.hasEnd === !1, j = U({}, M);
  return L && (j.range = oe(j.range)), g.datesDelta && I.startEditable && (j.range = {
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
    start: VM(j.range.start),
    end: VM(j.range.end)
  }), j.range.end < j.range.start && (j.range.end = J4(A.allDay, j.range.start, D)), j;
}
var ns = function() {
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
}(), os = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: f,
  eventDataTransform: f,
  success: f,
  failure: f
};
function re(M, A, I) {
  I === void 0 && (I = de(A));
  var g;
  if (typeof M == "string" ? g = { url: M } : typeof M == "function" || Array.isArray(M) ? g = { events: M } : typeof M == "object" && M && (g = M), g) {
    var D = Qj(g, I), N = D.refined, L = D.extra, t = ls(N, A);
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
        sourceId: $g(),
        sourceDefId: t.sourceDefId,
        meta: t.meta,
        ui: _N(N, A),
        extendedProps: L
      };
  }
  return null;
}
function de(M) {
  return U(U(U({}, HN), os), M.pluginHooks.eventSourceRefiners);
}
function ls(M, A) {
  for (var I = A.pluginHooks.eventSourceDefs, g = I.length - 1; g >= 0; g -= 1) {
    var D = I[g], N = D.parseMeta(M);
    if (N)
      return { sourceDefId: g, meta: N };
  }
  return null;
}
function ss(M, A) {
  switch (A.type) {
    case "CHANGE_DATE":
      return A.dateMarker;
    default:
      return M;
  }
}
function cs(M, A) {
  var I = M.initialDate;
  return I != null ? A.createMarker(I) : fD(M.now, A);
}
function fD(M, A) {
  return typeof M == "function" && (M = M()), M == null ? A.createNowMarker() : A.createMarker(M);
}
var zs = function() {
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
      dateMarker: fD(A.calendarOptions.now, A.dateEnv)
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
    var D = this.getCurrentData(), N = Ss(g, D.dateEnv, pM({ days: 1 }));
    N && (this.dispatch({ type: "SELECT_DATES", selection: N }), ws(N, null, D));
  }, M.prototype.unselect = function(A) {
    var I = this.getCurrentData();
    I.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), Es(A, I));
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
    var u = ye(A, t, L, !1);
    if (u) {
      var S = new XA(L, u.def, u.def.recurringDef ? null : u.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: _t(u)
      }), this.triggerEventAdd(S), S;
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
          eventStore: Ue(A)
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
          var u = N[j];
          if (u.defId === t.defId)
            return new XA(I, t, u);
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
    var g = re(A, I);
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
    if (A in ae)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (A === "id")
      I = cN[A](I), this.mutate({
        standardProps: { publicId: I }
      });
    else if (A in cN)
      I = cN[A](I), this.mutate({
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
      var N = this._instance.range, L = MN(N.start, D, g, I.granularity);
      I.maintainDuration ? this.mutate({ datesDelta: L }) : this.mutate({ startDelta: L });
    }
  }, M.prototype.setEnd = function(A, I) {
    I === void 0 && (I = {});
    var g = this._context.dateEnv, D;
    if (!(A != null && (D = g.createMarker(A), !D)) && this._instance)
      if (D) {
        var N = MN(this._instance.range.end, D, g, I.granularity);
        this.mutate({ endDelta: N });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, M.prototype.setDates = function(A, I, g) {
    g === void 0 && (g = {});
    var D = this._context.dateEnv, N = { allDay: g.allDay }, L = D.createMarker(A), t;
    if (!!L && !(I != null && (t = D.createMarker(I), !t)) && this._instance) {
      var j = this._instance.range;
      g.allDay === !0 && (j = oe(j));
      var u = MN(j.start, L, D, g.granularity);
      if (t) {
        var S = MN(j.end, t, D, g.granularity);
        ol(u, S) ? this.mutate({ datesDelta: u, standardProps: N }) : this.mutate({ startDelta: u, endDelta: S, standardProps: N });
      } else
        N.hasEnd = !1, this.mutate({ datesDelta: u, standardProps: N });
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
      var g = this._def, D = this._context, N = D.getCurrentData().eventStore, L = Vl(N, I.instanceId), t = {
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
      L = xs(L, t, A, D);
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
    var A = this._context, I = Ue(this);
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
    return I.title && (t.title = I.title), N && (t.start = N), L && (t.end = L), I.publicId && (t.id = I.publicId), I.groupId && (t.groupId = I.groupId), I.url && (t.url = I.url), g.display && g.display !== "auto" && (t.display = g.display), A.collapseColor && g.backgroundColor && g.backgroundColor === g.borderColor ? t.color = g.backgroundColor : (g.backgroundColor && (t.backgroundColor = g.backgroundColor), g.borderColor && (t.borderColor = g.borderColor)), g.textColor && (t.textColor = g.textColor), g.classNames.length && (t.classNames = g.classNames), Object.keys(I.extendedProps).length && (A.collapseExtendedProps ? U(t, I.extendedProps) : t.extendedProps = I.extendedProps), t;
  }, M.prototype.toJSON = function() {
    return this.toPlainObject();
  }, M;
}();
function Ue(M) {
  var A, I, g = M._def, D = M._instance;
  return {
    defs: (A = {}, A[g.defId] = g, A),
    instances: D ? (I = {}, I[D.instanceId] = D, I) : {}
  };
}
function Zj(M, A, I) {
  var g = M.defs, D = M.instances, N = [], L = I ? I.instanceId : "";
  for (var t in D) {
    var j = D[t], u = g[j.defId];
    j.instanceId !== L && N.push(new XA(A, u, j));
  }
  return N;
}
var me = {};
function Ys(M, A) {
  me[M] = A;
}
function rs(M) {
  return new me[M]();
}
var ds = function() {
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
Ys("gregory", ds);
var Us = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function ms(M) {
  var A = Us.exec(M);
  if (A) {
    var I = new Date(Date.UTC(Number(A[1]), A[3] ? Number(A[3]) - 1 : 0, Number(A[5] || 1), Number(A[7] || 0), Number(A[8] || 0), Number(A[10] || 0), A[12] ? Number("0." + A[12]) * 1e3 : 0));
    if (Te(I)) {
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
var Os = function() {
  function M(A) {
    var I = this.timeZone = A.timeZone, g = I !== "local" && I !== "UTC";
    A.namedTimeZoneImpl && g && (this.namedTimeZoneImpl = new A.namedTimeZoneImpl(I)), this.canComputeOffset = Boolean(!g || this.namedTimeZoneImpl), this.calendarSystem = rs(A.calendarSystem), this.locale = A.locale, this.weekDow = A.locale.week.dow, this.weekDoy = A.locale.week.doy, A.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof A.firstDay == "number" && (this.weekDow = A.firstDay), typeof A.weekNumberCalculation == "function" && (this.weekNumberFunc = A.weekNumberCalculation), this.weekText = A.weekText != null ? A.weekText : A.locale.options.weekText, this.weekTextLong = (A.weekTextLong != null ? A.weekTextLong : A.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = A.cmdFormatter, this.defaultSeparator = A.defaultSeparator;
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
    return typeof A == "number" ? I = this.timestampToMarker(A) : A instanceof Date ? (A = A.valueOf(), isNaN(A) || (I = this.timestampToMarker(A))) : Array.isArray(A) && (I = xA(A)), I === null || !Te(I) ? null : { marker: I, isTimeUnspecified: !1, forcedTzo: null };
  }, M.prototype.parse = function(A) {
    var I = ms(A);
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
    return g !== null ? { unit: "year", value: g } : (g = this.diffWholeMonths(A, I), g !== null ? { unit: "month", value: g } : (g = ul(A, I), g !== null ? { unit: "week", value: g } : (g = BN(A, I), g !== null ? { unit: "day", value: g } : (g = Nl(A, I), tt(g) ? { unit: "hour", value: g } : (g = Ll(A, I), tt(g) ? { unit: "minute", value: g } : (g = tl(A, I), tt(g) ? { unit: "second", value: g } : { unit: "millisecond", value: I.valueOf() - A.valueOf() }))))));
  }, M.prototype.countDurationsBetween = function(A, I, g) {
    var D;
    return g.years && (D = this.diffWholeYears(A, I), D !== null) ? D / sl(g) : g.months && (D = this.diffWholeMonths(A, I), D !== null) ? D / cl(g) : g.days && (D = BN(A, I), D !== null) ? D / mg(g) : (I.valueOf() - A.valueOf()) / OD(g);
  }, M.prototype.startOf = function(A, I) {
    return I === "year" ? this.startOfYear(A) : I === "month" ? this.startOfMonth(A) : I === "week" ? this.startOfWeek(A) : I === "day" ? VM(A) : I === "hour" ? Sl(A) : I === "minute" ? il(A) : I === "second" ? el(A) : null;
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
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(A)) : Cl(A, this.weekDow, this.weekDoy);
  }, M.prototype.format = function(A, I, g) {
    return g === void 0 && (g = {}), I.format({
      marker: A,
      timeZoneOffset: g.forcedTzo != null ? g.forcedTzo : this.offsetForMarker(A)
    }, this);
  }, M.prototype.formatRange = function(A, I, g, D) {
    return D === void 0 && (D = {}), D.isEndExclusive && (I = KI(I, -1)), g.formatRange({
      marker: A,
      timeZoneOffset: D.forcedStartTzo != null ? D.forcedStartTzo : this.offsetForMarker(A)
    }, {
      marker: I,
      timeZoneOffset: D.forcedEndTzo != null ? D.forcedEndTzo : this.offsetForMarker(I)
    }, this, D.defaultSeparator);
  }, M.prototype.formatIso = function(A, I) {
    I === void 0 && (I = {});
    var g = null;
    return I.omitTimeZoneOffset || (I.forcedTzo != null ? g = I.forcedTzo : g = this.offsetForMarker(A)), zl(A, g, I.omitTime);
  }, M.prototype.timestampToMarker = function(A) {
    return this.timeZone === "local" ? xA(U4(new Date(A))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(A) : xA(this.namedTimeZoneImpl.timestampToArray(A));
  }, M.prototype.offsetForMarker = function(A) {
    return this.timeZone === "local" ? -m4(dI(A)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(dI(A)) : null;
  }, M.prototype.toDate = function(A, I) {
    return this.timeZone === "local" ? m4(dI(A)) : this.timeZone === "UTC" ? new Date(A.valueOf()) : this.namedTimeZoneImpl ? new Date(A.valueOf() - this.namedTimeZoneImpl.offsetForArray(dI(A)) * 1e3 * 60) : new Date(A.valueOf() - (I || 0));
  }, M;
}(), hs = [], Oe = {
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
}, he = U(U({}, Oe), {
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
function bs(M) {
  for (var A = M.length > 0 ? M[0].code : "en", I = hs.concat(M), g = {
    en: he
  }, D = 0, N = I; D < N.length; D++) {
    var L = N[D];
    g[L.code] = L;
  }
  return {
    map: g,
    defaultCode: A
  };
}
function be(M, A) {
  return typeof M == "object" && !Array.isArray(M) ? We(M.code, [M.code], M) : Ws(M, A);
}
function Ws(M, A) {
  var I = [].concat(M || []), g = ks(I, A) || he;
  return We(M, I, g);
}
function ks(M, A) {
  for (var I = 0; I < M.length; I += 1)
    for (var g = M[I].toLocaleLowerCase().split("-"), D = g.length; D > 0; D -= 1) {
      var N = g.slice(0, D).join("-");
      if (A[N])
        return A[N];
    }
  return null;
}
function We(M, A, I) {
  var g = Wj([Oe, I], ["buttonText"]);
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
var ps = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function Qs(M, A) {
  return RN(vs(M), null, A);
}
function vs(M) {
  var A;
  return M === !0 ? A = [{}] : Array.isArray(M) ? A = M.filter(function(I) {
    return I.daysOfWeek;
  }) : typeof M == "object" && M ? A = [M] : A = [], A = A.map(function(I) {
    return U(U({}, ps), I);
  }), A;
}
function Gs(M, A) {
  var I = {
    left: Math.max(M.left, A.left),
    right: Math.min(M.right, A.right),
    top: Math.max(M.top, A.top),
    bottom: Math.min(M.bottom, A.bottom)
  };
  return I.left < I.right && I.top < I.bottom ? I : !1;
}
var it;
function ke() {
  return it == null && (it = fs()), it;
}
function fs() {
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
    isDisabled: Boolean(g && !RI(g.activeRange, M)),
    isOther: Boolean(g && !RI(g.currentRange, M)),
    isToday: Boolean(A && RI(A, M)),
    isPast: Boolean(I ? M < I : A ? M < A.start : !1),
    isFuture: Boolean(I ? M > I : A ? M >= A.end : !1)
  };
}
function nL(M, A) {
  var I = [
    "fc-day",
    "fc-day-" + gl[M.dow]
  ];
  return M.isDisabled ? I.push("fc-day-disabled") : (M.isToday && (I.push("fc-day-today"), I.push(A.getClass("today"))), M.isPast && I.push("fc-day-past"), M.isFuture && I.push("fc-day-future"), M.isOther && I.push("fc-day-other")), I;
}
var Js = AA({ year: "numeric", month: "long", day: "numeric" }), Vs = AA({ week: "long" });
function hD(M, A, I, g) {
  I === void 0 && (I = "day"), g === void 0 && (g = !0);
  var D = M.dateEnv, N = M.options, L = M.calendarApi, t = D.format(A, I === "week" ? Vs : Js);
  if (N.navLinks) {
    var j = D.toDate(A), u = function(S) {
      var i = I === "day" ? N.navLinkDayClick : I === "week" ? N.navLinkWeekClick : null;
      typeof i == "function" ? i.call(L, D.toDate(A), S) : (typeof i == "string" && (I = i), L.zoomTo(A, I));
    };
    return U({ title: nD(N.navLinkHint, [t, j], t), "data-navlink": "" }, g ? we(u) : { onClick: u });
  }
  return { "aria-label": t };
}
var et;
function Zs() {
  return et || (et = Bs()), et;
}
function Bs() {
  var M = document.createElement("div");
  M.style.overflow = "scroll", M.style.position = "absolute", M.style.top = "-9999px", M.style.left = "-9999px", document.body.appendChild(M);
  var A = Ps(M);
  return document.body.removeChild(M), A;
}
function Ps(M) {
  return {
    x: M.offsetHeight - M.clientHeight,
    y: M.offsetWidth - M.clientWidth
  };
}
function Fs(M) {
  for (var A = Xs(M), I = M.getBoundingClientRect(), g = 0, D = A; g < D.length; g++) {
    var N = D[g], L = Gs(I, N.getBoundingClientRect());
    if (L)
      I = L;
    else
      return null;
  }
  return I;
}
function Xs(M) {
  for (var A = []; M instanceof HTMLElement; ) {
    var I = window.getComputedStyle(M);
    if (I.position === "fixed")
      break;
    /(auto|scroll)/.test(I.overflow + I.overflowY + I.overflowX) && A.push(M), M = M.parentNode;
  }
  return A;
}
function Rs(M, A, I) {
  var g = !1, D = function() {
    g || (g = !0, A.apply(this, arguments));
  }, N = function() {
    g || (g = !0, I && I.apply(this, arguments));
  }, L = M(D, N);
  L && typeof L.then == "function" && L.then(D, N);
}
var Hs = function() {
  function M() {
    this.handlers = {}, this.thisContext = null;
  }
  return M.prototype.setThisContext = function(A) {
    this.thisContext = A;
  }, M.prototype.setOptions = function(A) {
    this.options = A;
  }, M.prototype.on = function(A, I) {
    _s(this.handlers, A, I);
  }, M.prototype.off = function(A, I) {
    $s(this.handlers, A, I);
  }, M.prototype.trigger = function(A) {
    for (var I = [], g = 1; g < arguments.length; g++)
      I[g - 1] = arguments[g];
    for (var D = this.handlers[A] || [], N = this.options && this.options[A], L = [].concat(N || [], D), t = 0, j = L; t < j.length; t++) {
      var u = j[t];
      u.apply(this.thisContext, I);
    }
  }, M.prototype.hasHandlers = function(A) {
    return Boolean(this.handlers[A] && this.handlers[A].length || this.options && this.options[A]);
  }, M;
}();
function _s(M, A, I) {
  (M[A] || (M[A] = [])).push(I);
}
function $s(M, A, I) {
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
}(), pe = function() {
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
  EM(A, M);
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
})(pe);
(function(M) {
  EM(A, M);
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
})(pe);
var JD = function() {
  function M(A) {
    this.iconOverrideOption && this.setIconOverride(A[this.iconOverrideOption]);
  }
  return M.prototype.setIconOverride = function(A) {
    var I, g;
    if (typeof A == "object" && A) {
      I = U({}, this.iconClasses);
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
JD.prototype.classes = {};
JD.prototype.iconClasses = {};
JD.prototype.baseIconClass = "";
JD.prototype.iconOverridePrefix = "";
var qs = function() {
  function M(A, I, g, D) {
    var N = this;
    this.execFunc = A, this.emitter = I, this.scrollTime = g, this.scrollTimeReset = D, this.handleScrollRequest = function(L) {
      N.queuedRequest = U({}, N.queuedRequest || {}, L), N.drain();
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
}(), Lg = ie({});
function Ks(M, A, I, g, D, N, L, t, j, u, S, i, C) {
  return {
    dateEnv: D,
    options: I,
    pluginHooks: L,
    emitter: u,
    dispatch: t,
    getCurrentData: j,
    calendarApi: S,
    viewSpec: M,
    viewApi: A,
    dateProfileGenerator: g,
    theme: N,
    isRtl: I.direction === "rtl",
    addResizeHandler: function(w) {
      u.on("_resize", w);
    },
    removeResizeHandler: function(w) {
      u.off("_resize", w);
    },
    createScrollResponder: function(w) {
      return new qs(w, u, pM(I.scrollTime), I.scrollTimeReset);
    },
    registerInteractiveComponent: i,
    unregisterInteractiveComponent: C
  };
}
var oL = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.shouldComponentUpdate = function(I, g) {
    return this.debug && console.log(O4(I, this.props), O4(g, this.state)), !ut(this.props, I, this.propEquality) || !ut(this.state, g, this.stateEquality);
  }, A.prototype.safeSetState = function(I) {
    ut(this.state, U(U({}, this.state), I), this.stateEquality) || this.setState(I);
  }, A.addPropsEquality = Mc, A.addStateEquality = Ac, A.contextType = Lg, A;
}(hj);
oL.prototype.propEquality = {};
oL.prototype.stateEquality = {};
var GM = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.contextType = Lg, A;
}(oL);
function Mc(M) {
  var A = Object.create(this.prototype.propEquality);
  U(A, M), this.prototype.propEquality = A;
}
function Ac(M) {
  var A = Object.create(this.prototype.stateEquality);
  U(A, M), this.prototype.stateEquality = A;
}
function CI(M, A) {
  typeof M == "function" ? M(A) : M && (M.current = A);
}
var tg = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.uid = $g(), I;
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
    id: $g(),
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
function Ic(M, A) {
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
      I[j.id] || (I[j.id] = !0, D(j.deps), g = Dc(g, j));
    }
  }
  return M && D(M), D(A), g;
}
function gc() {
  var M = [], A = [], I;
  return function(g, D) {
    return (!I || !Gg(g, M) || !Gg(D, A)) && (I = Ic(g, D)), M = g, A = D, I;
  };
}
function Dc(M, A) {
  return {
    reducers: M.reducers.concat(A.reducers),
    isLoadingFuncs: M.isLoadingFuncs.concat(A.isLoadingFuncs),
    contextInit: M.contextInit.concat(A.contextInit),
    eventRefiners: U(U({}, M.eventRefiners), A.eventRefiners),
    eventDefMemberAdders: M.eventDefMemberAdders.concat(A.eventDefMemberAdders),
    eventSourceRefiners: U(U({}, M.eventSourceRefiners), A.eventSourceRefiners),
    isDraggableTransformers: M.isDraggableTransformers.concat(A.isDraggableTransformers),
    eventDragMutationMassagers: M.eventDragMutationMassagers.concat(A.eventDragMutationMassagers),
    eventDefMutationAppliers: M.eventDefMutationAppliers.concat(A.eventDefMutationAppliers),
    dateSelectionTransformers: M.dateSelectionTransformers.concat(A.dateSelectionTransformers),
    datePointTransforms: M.datePointTransforms.concat(A.datePointTransforms),
    dateSpanTransforms: M.dateSpanTransforms.concat(A.dateSpanTransforms),
    views: U(U({}, M.views), A.views),
    viewPropsTransformers: M.viewPropsTransformers.concat(A.viewPropsTransformers),
    isPropsValid: A.isPropsValid || M.isPropsValid,
    externalDefTransforms: M.externalDefTransforms.concat(A.externalDefTransforms),
    viewContainerAppends: M.viewContainerAppends.concat(A.viewContainerAppends),
    eventDropTransformers: M.eventDropTransformers.concat(A.eventDropTransformers),
    calendarInteractions: M.calendarInteractions.concat(A.calendarInteractions),
    componentInteractions: M.componentInteractions.concat(A.componentInteractions),
    themeClasses: U(U({}, M.themeClasses), A.themeClasses),
    eventSourceDefs: M.eventSourceDefs.concat(A.eventSourceDefs),
    cmdFormatter: A.cmdFormatter || M.cmdFormatter,
    recurringTypes: M.recurringTypes.concat(A.recurringTypes),
    namedTimeZonedImpl: A.namedTimeZonedImpl || M.namedTimeZonedImpl,
    initialView: M.initialView || A.initialView,
    elementDraggingImpl: M.elementDraggingImpl || A.elementDraggingImpl,
    optionChangeHandlers: U(U({}, M.optionChangeHandlers), A.optionChangeHandlers),
    scrollGridImpl: A.scrollGridImpl || M.scrollGridImpl,
    contentTypeHandlers: U(U({}, M.contentTypeHandlers), A.contentTypeHandlers),
    listenerRefiners: U(U({}, M.listenerRefiners), A.listenerRefiners),
    optionRefiners: U(U({}, M.optionRefiners), A.optionRefiners),
    propSetHandlers: U(U({}, M.propSetHandlers), A.propSetHandlers)
  };
}
var WI = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A;
}(JD);
WI.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
WI.prototype.baseIconClass = "fc-icon";
WI.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
WI.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
WI.prototype.iconOverrideOption = "buttonIcons";
WI.prototype.iconOverrideCustomButtonOption = "icon";
WI.prototype.iconOverridePrefix = "fc-icon-";
function Nc(M, A) {
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
  var D = Lc(M, A, I, g);
  return D && (A[M] = D), D;
}
function Lc(M, A, I, g) {
  var D = I[M], N = g[M], L = function(S) {
    return D && D[S] !== null ? D[S] : N && N[S] !== null ? N[S] : null;
  }, t = L("component"), j = L("superType"), u = null;
  if (j) {
    if (j === M)
      throw new Error("Can't have a custom view type that references itself");
    u = Ij(j, A, I, g);
  }
  return !t && u && (t = u.component), t ? {
    type: M,
    component: t,
    defaults: U(U({}, u ? u.defaults : {}), D ? D.rawOptions : {}),
    overrides: U(U({}, u ? u.overrides : {}), N ? N.rawOptions : {})
  } : null;
}
var yI = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = mA(), I.handleRootEl = function(g) {
      CI(I.rootElRef, g), I.props.elRef && CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.hookProps;
    return m(Pj, { hookProps: D, didMount: g.didMount, willUnmount: g.willUnmount, elRef: this.handleRootEl }, function(N) {
      return m(ve, { hookProps: D, content: g.content, defaultContent: g.defaultContent, backupElRef: I.rootElRef }, function(L, t) {
        return g.children(N, fe(g.classNames, D), L, t);
      });
    });
  }, A;
}(GM), Qe = ie(0);
function ve(M) {
  return m(Qe.Consumer, null, function(A) {
    return m(tc, U({ renderId: A }, M));
  });
}
var tc = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.innerElRef = mA(), I;
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
    return !I || I.contentKey !== D.contentKey ? (I && (I.destroy && I.destroy(), I = this.customContentInfo = null), D.contentKey && (I = this.customContentInfo = U({ contentKey: D.contentKey, contentVal: g[D.contentKey] }, D.buildLifecycleFuncs()))) : I && (I.contentVal = g[D.contentKey]), I ? [] : g;
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
  EM(A, M);
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
    I && I(U(U({}, this.props.hookProps), { el: this.rootEl }));
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.willUnmount;
    I && I(U(U({}, this.props.hookProps), { el: this.rootEl }));
  }, A;
}(GM);
function Ge() {
  var M, A, I = [];
  return function(g, D) {
    return (!A || !eI(A, D) || g !== M) && (M = g, A = D, I = fe(g, D)), I;
  };
}
function fe(M, A) {
  return typeof M == "function" && (M = M(A)), $t(M);
}
function V4(M, A) {
  return typeof M == "function" ? M(A, m) : M;
}
var $N = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.normalizeClassNames = Ge(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = { view: D.viewApi }, t = this.normalizeClassNames(N.viewClassNames, L);
    return m(Pj, { hookProps: L, didMount: N.viewDidMount, willUnmount: N.viewWillUnmount, elRef: g.elRef }, function(j) {
      return g.children(j, ["fc-" + g.viewSpec.type + "-view", "fc-view"].concat(t));
    });
  }, A;
}(GM);
function Z4(M) {
  return GD(M, jc);
}
function jc(M) {
  var A = typeof M == "function" ? { component: M } : M, I = A.component;
  return A.content && (I = uc(A)), {
    superType: A.type,
    component: I,
    rawOptions: A
  };
}
function uc(M) {
  return function(A) {
    return m(Lg.Consumer, null, function(I) {
      return m($N, { viewSpec: I.viewSpec }, function(g, D) {
        var N = U(U({}, A), { nextDayThreshold: I.options.nextDayThreshold });
        return m(yI, { hookProps: N, classNames: M.classNames, content: M.content, didMount: M.didMount, willUnmount: M.willUnmount, elRef: g }, function(L, t, j, u) {
          return m("div", { className: D.concat(t).join(" "), ref: L }, u);
        });
      });
    });
  };
}
function Sc(M, A, I, g) {
  var D = Z4(M), N = Z4(A.views), L = Nc(D, N);
  return GD(L, function(t) {
    return ic(t, N, A, I, g);
  });
}
function ic(M, A, I, g, D) {
  var N = M.overrides.duration || M.defaults.duration || g.duration || I.duration, L = null, t = "", j = "", u = {};
  if (N && (L = ec(N), L)) {
    var S = Ht(L);
    t = S.unit, S.value === 1 && (j = t, u = A[t] ? A[t].rawOptions : {});
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
    optionOverrides: U(U({}, u), M.overrides),
    buttonTextOverride: i(g) || i(I) || M.overrides.buttonText,
    buttonTextDefault: i(D) || M.defaults.buttonText || i(oD) || M.type,
    buttonTitleOverride: C(g) || C(I) || M.overrides.buttonHint,
    buttonTitleDefault: C(D) || M.defaults.buttonHint || C(oD)
  };
}
var B4 = {};
function ec(M) {
  var A = JSON.stringify(M), I = B4[A];
  return I === void 0 && (I = pM(M), B4[A] = I), I;
}
var Je = function() {
  function M(A) {
    this.props = A, this.nowDate = fD(A.nowInput, A.dateEnv), this.initHiddenDays();
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
    var D = this.props, N, L, t, j, u, S;
    return N = this.buildValidRange(), N = this.trimHiddenDays(N), g && (A = Is(A, N)), L = this.buildCurrentRangeInfo(A, I), t = /^(year|month|week|day)$/.test(L.unit), j = this.buildRenderRange(this.trimHiddenDays(L.range), L.unit, t), j = this.trimHiddenDays(j), u = j, D.showNonCurrentDates || (u = fg(u, L.range)), u = this.adjustActiveRange(u), u = fg(u, N), S = As(L.range, N), {
      validRange: N,
      currentRange: L.range,
      currentRangeUnit: L.unit,
      isRangeAllDay: t,
      activeRange: u,
      renderRange: j,
      slotMinTime: D.slotMinTime,
      slotMaxTime: D.slotMaxTime,
      isValid: S,
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
    return D && (mg(N) < 0 && (t = VM(t), t = g.add(t, N)), mg(L) > 1 && (j = VM(j), j = IA(j, -1), j = g.add(j, L))), { start: t, end: j };
  }, M.prototype.buildRangeFromDuration = function(A, I, g, D) {
    var N = this.props, L = N.dateEnv, t = N.dateAlignment, j, u, S;
    if (!t) {
      var i = this.props.dateIncrement;
      i && OD(i) < OD(g) ? t = Ht(i).unit : t = D;
    }
    mg(g) <= 1 && this.isHiddenDay(j) && (j = this.skipHiddenDays(j, I), j = VM(j));
    function C() {
      j = L.startOf(A, t), u = L.add(j, g), S = { start: j, end: u };
    }
    return C(), this.trimHiddenDays(S) || (A = this.skipHiddenDays(A, I), C()), S;
  }, M.prototype.buildRangeFromDayCount = function(A, I, g) {
    var D = this.props, N = D.dateEnv, L = D.dateAlignment, t = 0, j = A, u;
    L && (j = N.startOf(j, L)), j = VM(j), j = this.skipHiddenDays(j, I), u = j;
    do
      u = IA(u, 1), this.isHiddenDay(u) || (t += 1);
    while (t < g);
    return { start: j, end: u };
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
      var I = Kl(A, this.props.dateEnv);
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
function Cc(M, A) {
  switch (A.type) {
    case "CHANGE_VIEW_TYPE":
      M = A.viewType;
  }
  return M;
}
function wc(M, A) {
  var I;
  switch (A.type) {
    case "SET_OPTION":
      return U(U({}, M), (I = {}, I[A.optionName] = A.rawOptionValue, I));
    default:
      return M;
  }
}
function Ec(M, A, I, g) {
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
function Tc(M, A, I) {
  var g = A ? A.activeRange : null;
  return Ze({}, sc(M, I), g, I);
}
function xc(M, A, I, g) {
  var D = I ? I.activeRange : null;
  switch (A.type) {
    case "ADD_EVENT_SOURCES":
      return Ze(M, A.sources, D, g);
    case "REMOVE_EVENT_SOURCE":
      return yc(M, A.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return I ? Be(M, D, g) : M;
    case "FETCH_EVENT_SOURCES":
      return Fj(M, A.sourceIds ? xe(A.sourceIds) : Pe(M, g), D, A.isRefetch || !1, g);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return lc(M, A.sourceId, A.fetchId, A.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return M;
  }
}
function ac(M, A, I) {
  var g = A ? A.activeRange : null;
  return Fj(M, Pe(M, I), g, !0, I);
}
function Ve(M) {
  for (var A in M)
    if (M[A].isFetching)
      return !0;
  return !1;
}
function Ze(M, A, I, g) {
  for (var D = {}, N = 0, L = A; N < L.length; N++) {
    var t = L[N];
    D[t.sourceId] = t;
  }
  return I && (D = Be(D, I, g)), U(U({}, M), D);
}
function yc(M, A) {
  return vg(M, function(I) {
    return I.sourceId !== A;
  });
}
function Be(M, A, I) {
  return Fj(M, vg(M, function(g) {
    return nc(g, A, I);
  }), A, !1, I);
}
function nc(M, A, I) {
  return Fe(M, I) ? !I.options.lazyFetching || !M.fetchRange || M.isFetching || A.start < M.fetchRange.start || A.end > M.fetchRange.end : !M.latestFetchId;
}
function Fj(M, A, I, g, D) {
  var N = {};
  for (var L in M) {
    var t = M[L];
    A[L] ? N[L] = oc(t, I, g, D) : N[L] = t;
  }
  return N;
}
function oc(M, A, I, g) {
  var D = g.options, N = g.calendarApi, L = g.pluginHooks.eventSourceDefs[M.sourceDefId], t = $g();
  return L.fetch({
    eventSource: M,
    range: A,
    isRefetch: I,
    context: g
  }, function(j) {
    var u = j.rawEvents;
    D.eventSourceSuccess && (u = D.eventSourceSuccess.call(N, u, j.xhr) || u), M.success && (u = M.success.call(N, u, j.xhr) || u), g.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: M.sourceId,
      fetchId: t,
      fetchRange: A,
      rawEvents: u
    });
  }, function(j) {
    console.warn(j.message, j), D.eventSourceFailure && D.eventSourceFailure.call(N, j), M.failure && M.failure(j), g.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: M.sourceId,
      fetchId: t,
      fetchRange: A,
      error: j
    });
  }), U(U({}, M), { isFetching: !0, latestFetchId: t });
}
function lc(M, A, I, g) {
  var D, N = M[A];
  return N && I === N.latestFetchId ? U(U({}, M), (D = {}, D[A] = U(U({}, N), { isFetching: !1, fetchRange: g }), D)) : M;
}
function Pe(M, A) {
  return vg(M, function(I) {
    return Fe(I, A);
  });
}
function sc(M, A) {
  var I = de(A), g = [].concat(M.eventSources || []), D = [];
  M.initialEvents && g.unshift(M.initialEvents), M.events && g.unshift(M.events);
  for (var N = 0, L = g; N < L.length; N++) {
    var t = L[N], j = re(t, A, I);
    j && D.push(j);
  }
  return D;
}
function Fe(M, A) {
  var I = A.pluginHooks.eventSourceDefs;
  return !I[M.sourceDefId].ignoreRange;
}
function cc(M, A, I, g, D) {
  switch (A.type) {
    case "RECEIVE_EVENTS":
      return zc(M, I[A.sourceId], A.fetchId, A.fetchRange, A.rawEvents, D);
    case "ADD_EVENTS":
      return rc(
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
      return Bl(M, A.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return Xe(M, A.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return Gj(M, function(N) {
        return !N.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Mg();
    default:
      return M;
  }
}
function zc(M, A, I, g, D, N) {
  if (A && I === A.latestFetchId) {
    var L = RN(Yc(D, A, N), A, N);
    return g && (L = aL(L, g, N)), vj(Xe(M, A.sourceId), L);
  }
  return M;
}
function Yc(M, A, I) {
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
function rc(M, A, I, g) {
  return I && (A = aL(A, I, g)), vj(M, A);
}
function dc(M, A, I) {
  var g = M.defs, D = GD(M.instances, function(N) {
    var L = g[N.defId];
    return L.allDay || L.recurringDef ? N : U(U({}, N), { range: {
      start: I.createMarker(A.toDate(N.range.start, N.forcedStartTzo)),
      end: I.createMarker(A.toDate(N.range.end, N.forcedEndTzo))
    }, forcedStartTzo: I.canComputeOffset ? null : N.forcedStartTzo, forcedEndTzo: I.canComputeOffset ? null : N.forcedEndTzo });
  });
  return { defs: g, instances: D };
}
function Xe(M, A) {
  return Gj(M, function(I) {
    return I.sourceId !== A;
  });
}
function Uc(M, A) {
  switch (A.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return A.selection;
    default:
      return M;
  }
}
function mc(M, A) {
  switch (A.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return A.eventInstanceId;
    default:
      return M;
  }
}
function Oc(M, A) {
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
function hc(M, A) {
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
function bc(M, A, I, g, D) {
  var N = M.headerToolbar ? F4(M.headerToolbar, M, A, I, g, D) : null, L = M.footerToolbar ? F4(M.footerToolbar, M, A, I, g, D) : null;
  return { header: N, footer: L };
}
function F4(M, A, I, g, D, N) {
  var L = {}, t = [], j = !1;
  for (var u in M) {
    var S = M[u], i = Wc(S, A, I, g, D, N);
    L[u] = i.widgets, t.push.apply(t, i.viewsWithButtons), j = j || i.hasTitle;
  }
  return { sectionWidgets: L, viewsWithButtons: t, hasTitle: j };
}
function Wc(M, A, I, g, D, N) {
  var L = A.direction === "rtl", t = A.customButtons || {}, j = I.buttonText || {}, u = A.buttonText || {}, S = I.buttonHints || {}, i = A.buttonHints || {}, C = M ? M.split(" ") : [], w = [], E = !1, x = C.map(function(n) {
    return n.split(",").map(function(a) {
      if (a === "title")
        return E = !0, { buttonName: a };
      var z, d, Y, h, k, G;
      if (z = t[a])
        Y = function(Z) {
          z.click && z.click.call(Z.target, Z, Z.target);
        }, (h = g.getCustomButtonIconClass(z)) || (h = g.getIconClass(a, L)) || (k = z.text), G = z.hint || z.text;
      else if (d = D[a]) {
        w.push(a), Y = function() {
          N.changeView(a);
        }, (k = d.buttonTextOverride) || (h = g.getIconClass(a, L)) || (k = d.buttonTextDefault);
        var r = d.buttonTextOverride || d.buttonTextDefault;
        G = nD(
          d.buttonTitleOverride || d.buttonTitleDefault || A.viewHint,
          [r, a],
          r
        );
      } else if (N[a])
        if (Y = function() {
          N[a]();
        }, (k = j[a]) || (h = g.getIconClass(a, L)) || (k = u[a]), a === "prevYear" || a === "nextYear") {
          var b = a === "prevYear" ? "prev" : "next";
          G = nD(S[b] || i[b], [
            u.year || "year",
            "year"
          ], u[a]);
        } else
          G = function(Z) {
            return nD(S[a] || i[a], [
              u[Z] || Z,
              Z
            ], u[a]);
          };
      return { buttonName: a, buttonClick: Y, buttonIcon: h, buttonText: k, buttonHint: G };
    });
  });
  return { widgets: x, viewsWithButtons: w, hasTitle: E };
}
var kc = {
  ignoreRange: !0,
  parseMeta: function(M) {
    return Array.isArray(M.events) ? M.events : null;
  },
  fetch: function(M, A) {
    A({
      rawEvents: M.eventSource.meta
    });
  }
}, pc = aI({
  eventSourceDefs: [kc]
}), Qc = {
  parseMeta: function(M) {
    return typeof M.events == "function" ? M.events : null;
  },
  fetch: function(M, A, I) {
    var g = M.context.dateEnv, D = M.eventSource.meta;
    Rs(D.bind(null, ze(M.range, g)), function(N) {
      A({ rawEvents: N });
    }, I);
  }
}, vc = aI({
  eventSourceDefs: [Qc]
});
function Re(M, A, I, g, D) {
  M = M.toUpperCase();
  var N = null;
  M === "GET" ? A = Gc(A, I) : N = He(I);
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
function Gc(M, A) {
  return M + (M.indexOf("?") === -1 ? "?" : "&") + He(A);
}
function He(M) {
  var A = [];
  for (var I in M)
    A.push(encodeURIComponent(I) + "=" + encodeURIComponent(M[I]));
  return A.join("&");
}
var fc = {
  method: String,
  extraParams: f,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, Jc = {
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
    var g = M.eventSource.meta, D = Zc(g, M.range, M.context);
    Re(g.method, g.url, D, function(N, L) {
      A({ rawEvents: N, xhr: L });
    }, function(N, L) {
      I({ message: N, xhr: L });
    });
  }
}, Vc = aI({
  eventSourceRefiners: fc,
  eventSourceDefs: [Jc]
});
function Zc(M, A, I) {
  var g = I.dateEnv, D = I.options, N, L, t, j, u = {};
  return N = M.startParam, N == null && (N = D.startParam), L = M.endParam, L == null && (L = D.endParam), t = M.timeZoneParam, t == null && (t = D.timeZoneParam), typeof M.extraParams == "function" ? j = M.extraParams() : j = M.extraParams || {}, U(u, j), u[N] = g.formatIso(A.start), u[L] = g.formatIso(A.end), g.timeZone !== "local" && (u[t] = g.timeZone), u;
}
var Bc = {
  daysOfWeek: f,
  startTime: pM,
  endTime: pM,
  duration: pM,
  startRecur: f,
  endRecur: f
}, Pc = {
  parse: function(M, A) {
    if (M.daysOfWeek || M.startTime || M.endTime || M.startRecur || M.endRecur) {
      var I = {
        daysOfWeek: M.daysOfWeek || null,
        startTime: M.startTime || null,
        endTime: M.endTime || null,
        startRecur: M.startRecur ? A.createMarker(M.startRecur) : null,
        endRecur: M.endRecur ? A.createMarker(M.endRecur) : null
      }, g = void 0;
      return M.duration && (g = M.duration), !g && M.startTime && M.endTime && (g = ll(M.endTime, M.startTime)), {
        allDayGuess: Boolean(!M.startTime && !M.endTime),
        duration: g,
        typeData: I
      };
    }
    return null;
  },
  expand: function(M, A, I) {
    var g = fg(A, { start: M.startRecur, end: M.endRecur });
    return g ? Xc(M.daysOfWeek, M.startTime, g, I) : [];
  }
}, Fc = aI({
  recurringTypes: [Pc],
  eventRefiners: Bc
});
function Xc(M, A, I, g) {
  for (var D = M ? xe(M) : null, N = VM(I.start), L = I.end, t = []; N < L; ) {
    var j = void 0;
    (!D || D[N.getUTCDay()]) && (A ? j = g.add(N, A) : j = N, t.push(j)), N = IA(N, 1);
  }
  return t;
}
var Rc = aI({
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
  for (var u = 0, S = I; u < S.length; u++) {
    var i = S[u];
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
function Hc(M, A) {
  A.emitter.trigger("datesSet", U(U({}, ze(M.activeRange, A.dateEnv)), { view: A.viewApi }));
}
function _c(M, A) {
  var I = A.emitter;
  I.hasHandlers("eventsSet") && I.trigger("eventsSet", Zj(M, A));
}
var $c = [
  pc,
  vc,
  Vc,
  Fc,
  Rc,
  aI({
    isLoadingFuncs: [
      function(M) {
        return Ve(M.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: qc,
      domNodes: Kc
    },
    propSetHandlers: {
      dateProfile: Hc,
      eventStore: _c
    }
  })
];
function qc() {
  var M = null, A = "";
  function I(D, N) {
    (D !== M || N !== A) && (D.innerHTML = N), M = D, A = N;
  }
  function g() {
    M.innerHTML = "", M = null, A = "";
  }
  return { render: I, destroy: g };
}
function Kc() {
  var M = null, A = [];
  function I(D, N) {
    var L = Array.prototype.slice.call(N);
    if (D !== M || !Gg(A, L)) {
      for (var t = 0, j = L; t < j.length; t++) {
        var u = j[t];
        D.appendChild(u);
      }
      g();
    }
    M = D, A = L;
  }
  function g() {
    A.forEach(Bo), A = [], M = null;
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
}(), M1 = function() {
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
function A1(M, A, I) {
  var g;
  return /^(year|month)$/.test(M.currentRangeUnit) ? g = M.currentRange : g = M.activeRange, I.formatRange(g.start, g.end, AA(A.titleFormat || I1(M)), {
    isEndExclusive: M.isRangeAllDay,
    defaultSeparator: A.titleRangeSeparator
  });
}
function I1(M) {
  var A = M.currentRangeUnit;
  if (A === "year")
    return { year: "numeric" };
  if (A === "month")
    return { year: "numeric", month: "long" };
  var I = BN(M.currentRange.start, M.currentRange.end);
  return I !== null && I > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var _e = function() {
  function M(A) {
    var I = this;
    this.computeOptionsData = UM(this._computeOptionsData), this.computeCurrentViewData = UM(this._computeCurrentViewData), this.organizeRawLocales = UM(bs), this.buildLocale = UM(be), this.buildPluginHooks = gc(), this.buildDateEnv = UM(g1), this.buildTheme = UM(D1), this.parseToolbars = UM(bc), this.buildViewSpecs = UM(Sc), this.buildDateProfileGenerator = sN(N1), this.buildViewApi = UM(L1), this.buildViewUiProps = sN(u1), this.buildEventUiBySource = UM(t1, eI), this.buildEventUiBases = UM(j1), this.parseContextBusinessHours = sN(S1), this.buildTitle = UM(A1), this.emitter = new Hs(), this.actionRunner = new M1(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return I.data;
    }, this.dispatch = function(d) {
      I.actionRunner.request(d);
    }, this.props = A, this.actionRunner.pause();
    var g = {}, D = this.computeOptionsData(A.optionOverrides, g, A.calendarApi), N = D.calendarOptions.initialView || D.pluginHooks.initialView, L = this.computeCurrentViewData(N, D, A.optionOverrides, g);
    A.calendarApi.currentDataManager = this, this.emitter.setThisContext(A.calendarApi), this.emitter.setOptions(L.options);
    var t = cs(D.calendarOptions, D.dateEnv), j = L.dateProfileGenerator.build(t);
    RI(j.activeRange, t) || (t = j.currentRange.start);
    for (var u = {
      dateEnv: D.dateEnv,
      options: D.calendarOptions,
      pluginHooks: D.pluginHooks,
      calendarApi: A.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, S = 0, i = D.pluginHooks.contextInit; S < i.length; S++) {
      var C = i[S];
      C(u);
    }
    for (var w = Tc(D.calendarOptions, j, u), E = {
      dynamicOptionOverrides: g,
      currentViewType: N,
      currentDate: t,
      dateProfile: j,
      businessHours: this.parseContextBusinessHours(u),
      eventSources: w,
      eventUiBases: {},
      eventStore: Mg(),
      renderableEventStore: Mg(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(u).selectionConfig
    }, x = U(U({}, u), E), n = 0, a = D.pluginHooks.reducers; n < a.length; n++) {
      var z = a[n];
      U(E, z(null, null, x));
    }
    Ct(E, u) && this.emitter.trigger("loading", !0), this.state = E, this.updateData(), this.actionRunner.resume();
  }
  return M.prototype.resetOptions = function(A, I) {
    var g = this.props;
    g.optionOverrides = I ? U(U({}, g.optionOverrides), A) : A, this.actionRunner.request({
      type: "NOTHING"
    });
  }, M.prototype._handleAction = function(A) {
    var I = this, g = I.props, D = I.state, N = I.emitter, L = wc(D.dynamicOptionOverrides, A), t = this.computeOptionsData(g.optionOverrides, L, g.calendarApi), j = Cc(D.currentViewType, A), u = this.computeCurrentViewData(j, t, g.optionOverrides, L);
    g.calendarApi.currentDataManager = this, N.setThisContext(g.calendarApi), N.setOptions(u.options);
    var S = {
      dateEnv: t.dateEnv,
      options: t.calendarOptions,
      pluginHooks: t.pluginHooks,
      calendarApi: g.calendarApi,
      dispatch: this.dispatch,
      emitter: N,
      getCurrentData: this.getCurrentData
    }, i = D.currentDate, C = D.dateProfile;
    this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (C = u.dateProfileGenerator.build(i)), i = ss(i, A), C = Ec(C, A, i, u.dateProfileGenerator), (A.type === "PREV" || A.type === "NEXT" || !RI(C.currentRange, i)) && (i = C.currentRange.start);
    for (var w = xc(D.eventSources, A, C, S), E = cc(D.eventStore, A, w, C, S), x = Ve(w), n = x && !u.options.progressiveEventRendering && D.renderableEventStore || E, a = this.buildViewUiProps(S), z = a.eventUiSingleBase, d = a.selectionConfig, Y = this.buildEventUiBySource(w), h = this.buildEventUiBases(n.defs, z, Y), k = {
      dynamicOptionOverrides: L,
      currentViewType: j,
      currentDate: i,
      dateProfile: C,
      eventSources: w,
      eventStore: E,
      renderableEventStore: n,
      selectionConfig: d,
      eventUiBases: h,
      businessHours: this.parseContextBusinessHours(S),
      dateSelection: Uc(D.dateSelection, A),
      eventSelection: mc(D.eventSelection, A),
      eventDrag: Oc(D.eventDrag, A),
      eventResize: hc(D.eventResize, A)
    }, G = U(U({}, S), k), r = 0, b = t.pluginHooks.reducers; r < b.length; r++) {
      var Z = b[r];
      U(k, Z(D, A, G));
    }
    var R = Ct(D, S), AM = Ct(k, S);
    !R && AM ? N.trigger("loading", !0) : R && !AM && N.trigger("loading", !1), this.state = k, g.onAction && g.onAction(A);
  }, M.prototype.updateData = function() {
    var A = this, I = A.props, g = A.state, D = this.data, N = this.computeOptionsData(I.optionOverrides, g.dynamicOptionOverrides, I.calendarApi), L = this.computeCurrentViewData(g.currentViewType, N, I.optionOverrides, g.dynamicOptionOverrides), t = this.data = U(U(U({ viewTitle: this.buildTitle(g.dateProfile, L.options, N.dateEnv), calendarApi: I.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, N), L), g), j = N.pluginHooks.optionChangeHandlers, u = D && D.calendarOptions, S = N.calendarOptions;
    if (u && u !== S) {
      u.timeZone !== S.timeZone && (g.eventSources = t.eventSources = ac(t.eventSources, g.dateProfile, t), g.eventStore = t.eventStore = dc(t.eventStore, D.dateEnv, t.dateEnv));
      for (var i in j)
        u[i] !== S[i] && j[i](S[i], t);
    }
    I.onData && I.onData(t);
  }, M.prototype._computeOptionsData = function(A, I, g) {
    var D = this.processRawCalendarOptions(A, I), N = D.refinedOptions, L = D.pluginHooks, t = D.localeDefaults, j = D.availableLocaleData, u = D.extra;
    R4(u);
    var S = this.buildDateEnv(N.timeZone, N.locale, N.weekNumberCalculation, N.firstDay, N.weekText, L, j, N.defaultRangeSeparator), i = this.buildViewSpecs(L.views, A, I, t), C = this.buildTheme(N, L), w = this.parseToolbars(N, A, C, i, g);
    return {
      calendarOptions: N,
      pluginHooks: L,
      dateEnv: S,
      viewSpecs: i,
      theme: C,
      toolbarConfig: w,
      localeDefaults: t,
      availableRawLocales: j.map
    };
  }, M.prototype.processRawCalendarOptions = function(A, I) {
    var g = St([
      oD,
      A,
      I
    ]), D = g.locales, N = g.locale, L = this.organizeRawLocales(D), t = L.map, j = this.buildLocale(N || L.defaultCode, t).options, u = this.buildPluginHooks(A.plugins || [], $c), S = this.currentCalendarOptionsRefiners = U(U(U(U(U({}, p4), Q4), v4), u.listenerRefiners), u.optionRefiners), i = {}, C = St([
      oD,
      j,
      A,
      I
    ]), w = {}, E = this.currentCalendarOptionsInput, x = this.currentCalendarOptionsRefined, n = !1;
    for (var a in C)
      a !== "plugins" && (C[a] === E[a] || ZI[a] && a in E && ZI[a](E[a], C[a]) ? w[a] = x[a] : S[a] ? (w[a] = S[a](C[a]), n = !0) : i[a] = E[a]);
    return n && (this.currentCalendarOptionsInput = C, this.currentCalendarOptionsRefined = w), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: u,
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
    var u = this.buildDateProfileGenerator({
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
    }), S = this.buildViewApi(A, this.getCurrentData, I.dateEnv);
    return { viewSpec: N, options: t, dateProfileGenerator: u, viewApi: S };
  }, M.prototype.processRawViewOptions = function(A, I, g, D, N) {
    var L = St([
      oD,
      A.optionDefaults,
      g,
      D,
      A.optionOverrides,
      N
    ]), t = U(U(U(U(U(U({}, p4), Q4), v4), Jl), I.listenerRefiners), I.optionRefiners), j = {}, u = this.currentViewOptionsInput, S = this.currentViewOptionsRefined, i = !1, C = {};
    for (var w in L)
      L[w] === u[w] || ZI[w] && ZI[w](L[w], u[w]) ? j[w] = S[w] : (L[w] === this.currentCalendarOptionsInput[w] || ZI[w] && ZI[w](L[w], this.currentCalendarOptionsInput[w]) ? w in this.currentCalendarOptionsRefined && (j[w] = this.currentCalendarOptionsRefined[w]) : t[w] ? j[w] = t[w](L[w]) : C[w] = L[w], i = !0);
    return i && (this.currentViewOptionsInput = L, this.currentViewOptionsRefined = j), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: C
    };
  }, M;
}();
function g1(M, A, I, g, D, N, L, t) {
  var j = be(A || L.defaultCode, L.map);
  return new Os({
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
function D1(M, A) {
  var I = A.themeClasses[M.themeSystem] || WI;
  return new I(M);
}
function N1(M) {
  var A = M.dateProfileGeneratorClass || Je;
  return new A(M);
}
function L1(M, A, I) {
  return new ns(M, A, I);
}
function t1(M) {
  return GD(M, function(A) {
    return A.ui;
  });
}
function j1(M, A, I) {
  var g = { "": A };
  for (var D in M) {
    var N = M[D];
    N.sourceId && I[N.sourceId] && (g[D] = I[N.sourceId]);
  }
  return g;
}
function u1(M) {
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
function S1(M) {
  return Qs(M.options.businessHours, M);
}
function R4(M, A) {
  for (var I in M)
    console.warn("Unknown option '" + I + "'" + (A ? " for view '" + A + "'" : ""));
}
(function(M) {
  EM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleData = function(D) {
      g.dataManager ? g.setState(D) : g.state = D;
    }, g.dataManager = new _e({
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
var i1 = function() {
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
      span: $e(t, L)
    }], N)), D) : (g.push(A), 0);
  }, M.prototype.insertEntryAt = function(A, I) {
    var g = this, D = g.entriesByLevel, N = g.levelCoords;
    I.lateral === -1 ? (wt(N, I.level, I.levelCoord), wt(D, I.level, [A])) : wt(D[I.level], I.lateral, A), this.stackCnts[sD(A)] = I.stackCnt;
  }, M.prototype.findInsertion = function(A) {
    for (var I = this, g = I.levelCoords, D = I.entriesByLevel, N = I.strictOrder, L = I.stackCnts, t = g.length, j = 0, u = -1, S = -1, i = null, C = 0, w = 0; w < t; w += 1) {
      var E = g[w];
      if (!N && E >= j + A.thickness)
        break;
      for (var x = D[w], n = void 0, a = _4(x, A.span.start, H4), z = a[0] + a[1]; (n = x[z]) && n.span.start < A.span.end; ) {
        var d = E + n.thickness;
        d > j && (j = d, i = n, u = w, S = z), d === j && (C = Math.max(C, L[sD(n)] + 1)), z += 1;
      }
    }
    var Y = 0;
    if (i)
      for (Y = u + 1; Y < t && g[Y] < j; )
        Y += 1;
    var h = -1;
    return Y < t && g[Y] === j && (h = _4(D[Y], A.span.end, H4)[0]), {
      touchingLevel: u,
      touchingLateral: S,
      touchingEntry: i,
      stackCnt: C,
      levelCoord: j,
      level: Y,
      lateral: h
    };
  }, M.prototype.toRects = function() {
    for (var A = this, I = A.entriesByLevel, g = A.levelCoords, D = I.length, N = [], L = 0; L < D; L += 1)
      for (var t = I[L], j = g[L], u = 0, S = t; u < S.length; u++) {
        var i = S[u];
        N.push(U(U({}, i), { levelCoord: j }));
      }
    return N;
  }, M;
}();
function H4(M) {
  return M.span.end;
}
function sD(M) {
  return M.index + ":" + M.span.start;
}
function $e(M, A) {
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
var qe = function() {
  function M(A) {
    this.component = A.component, this.isHitComboAllowed = A.isHitComboAllowed || null;
  }
  return M.prototype.destroy = function() {
  }, M;
}();
function e1(M, A) {
  return {
    component: M,
    el: A.el,
    useEventCenter: A.useEventCenter != null ? A.useEventCenter : !0,
    isHitComboAllowed: A.isHitComboAllowed || null
  };
}
var $4 = {}, C1 = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props.widgetGroups.map(function(D) {
      return I.renderWidgetGroup(D);
    });
    return m.apply(void 0, HM(["div", { className: "fc-toolbar-chunk" }], g));
  }, A.prototype.renderWidgetGroup = function(I) {
    for (var g = this.props, D = this.context.theme, N = [], L = !0, t = 0, j = I; t < j.length; t++) {
      var u = j[t], S = u.buttonName, i = u.buttonClick, C = u.buttonText, w = u.buttonIcon, E = u.buttonHint;
      if (S === "title")
        L = !1, N.push(m("h2", { className: "fc-toolbar-title", id: g.titleId }, g.title));
      else {
        var x = S === g.activeButton, n = !g.isTodayEnabled && S === "today" || !g.isPrevEnabled && S === "prev" || !g.isNextEnabled && S === "next", a = ["fc-" + S + "-button", D.getClass("button")];
        x && a.push(D.getClass("buttonActive")), N.push(m("button", { type: "button", title: typeof E == "function" ? E(g.navUnit) : E, disabled: n, "aria-pressed": x, className: a.join(" "), onClick: i }, C || (w ? m("span", { className: w }) : "")));
      }
    }
    if (N.length > 1) {
      var z = L && D.getClass("buttonGroup") || "";
      return m.apply(void 0, HM(["div", { className: z }], N));
    }
    return N[0];
  }, A;
}(GM), q4 = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.model, D = I.extraClassName, N = !1, L, t, j = g.sectionWidgets, u = j.center;
    j.left ? (N = !0, L = j.left) : L = j.start, j.right ? (N = !0, t = j.right) : t = j.end;
    var S = [
      D || "",
      "fc-toolbar",
      N ? "fc-toolbar-ltr" : ""
    ];
    return m(
      "div",
      { className: S.join(" ") },
      this.renderSection("start", L || []),
      this.renderSection("center", u || []),
      this.renderSection("end", t || [])
    );
  }, A.prototype.renderSection = function(I, g) {
    var D = this.props;
    return m(C1, { key: I, widgetGroups: g, title: D.title, navUnit: D.navUnit, activeButton: D.activeButton, isTodayEnabled: D.isTodayEnabled, isPrevEnabled: D.isPrevEnabled, isNextEnabled: D.isNextEnabled, titleId: D.titleId });
  }, A;
}(GM), w1 = function(M) {
  EM(A, M);
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
    return N ? D.availableWidth !== null ? t = D.availableWidth / N : j = 1 / N * 100 + "%" : t = g.height || "", m("div", { "aria-labelledby": g.labeledById, ref: this.handleEl, className: L.join(" "), style: { height: t, paddingBottom: j } }, g.children);
  }, A.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, A.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, A;
}(GM), E1 = function(M) {
  EM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleSegClick = function(D, N) {
      var L = g.component, t = L.context, j = Mj(N);
      if (j && L.isValidSegDownEl(D.target)) {
        var u = AI(D.target, ".fc-event-forced-url"), S = u ? u.querySelector("a[href]").href : "";
        t.emitter.trigger("eventClick", {
          el: N,
          event: new XA(L.context, j.eventRange.def, j.eventRange.instance),
          jsEvent: D,
          view: t.viewApi
        }), S && !D.defaultPrevented && (window.location.href = S);
      }
    }, g.destroy = Ce(
      I.el,
      "click",
      ".fc-event",
      g.handleSegClick
    ), g;
  }
  return A;
}(qe), T1 = function(M) {
  EM(A, M);
  function A(I) {
    var g = M.call(this, I) || this;
    return g.handleEventElRemove = function(D) {
      D === g.currentSegEl && g.handleSegLeave(null, g.currentSegEl);
    }, g.handleSegEnter = function(D, N) {
      Mj(N) && (g.currentSegEl = N, g.triggerEvent("eventMouseEnter", D, N));
    }, g.handleSegLeave = function(D, N) {
      g.currentSegEl && (g.currentSegEl = null, g.triggerEvent("eventMouseLeave", D, N));
    }, g.removeHoverListeners = $o(
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
}(qe), x1 = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildViewContext = UM(Ks), I.buildViewPropTransformers = UM(y1), I.buildToolbarProps = UM(a1), I.headerRef = mA(), I.footerRef = mA(), I.interactionsStore = {}, I.state = {
      viewLabelId: mI()
    }, I.registerInteractiveComponent = function(g, D) {
      var N = e1(g, D), L = [
        E1,
        T1
      ], t = L.concat(I.props.pluginHooks.componentInteractions), j = t.map(function(u) {
        return new u(N);
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
      fD(I.options.now, I.dateEnv),
      I.viewTitle
    ), L = !1, t = "", j;
    I.isHeightAuto || I.forPrint ? t = "" : D.height != null ? L = !0 : D.contentHeight != null ? t = D.contentHeight : j = Math.max(D.aspectRatio, 0.5);
    var u = this.buildViewContext(I.viewSpec, I.viewApi, I.options, I.dateProfileGenerator, I.dateEnv, I.theme, I.pluginHooks, I.dispatch, I.getCurrentData, I.emitter, I.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), S = g.header && g.header.hasTitle ? this.state.viewLabelId : "";
    return m(
      Lg.Provider,
      { value: u },
      g.header && m(q4, U({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: g.header, titleId: S }, N)),
      m(
        w1,
        { liquid: L, height: t, aspectRatio: j, labeledById: S },
        this.renderView(I),
        this.buildAppendContent()
      ),
      g.footer && m(q4, U({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: g.footer, titleId: "" }, N))
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
    return m.apply(void 0, HM([SA, {}], g));
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
      var u = j[t];
      U(N, u.transform(N, I));
    }
    var S = D.component;
    return m(S, U({}, N));
  }, A;
}(oL);
function a1(M, A, I, g, D, N) {
  var L = I.build(D, void 0, !1), t = I.buildPrev(A, g, !1), j = I.buildNext(A, g, !1);
  return {
    title: N,
    activeButton: M.type,
    navUnit: M.singleUnit,
    isTodayEnabled: L.isValid && !RI(A.currentRange, D),
    isPrevEnabled: t.isValid,
    isNextEnabled: j.isValid
  };
}
function y1(M) {
  return M.map(function(A) {
    return new A();
  });
}
var n1 = function(M) {
  EM(A, M);
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
    return ke() || t.push("fc-liquid-hack"), I.children(t, L, N, D);
  }, A.prototype.componentDidMount = function() {
    var I = this.props.emitter;
    I.on("_beforeprint", this.handleBeforePrint), I.on("_afterprint", this.handleAfterPrint);
  }, A.prototype.componentWillUnmount = function() {
    var I = this.props.emitter;
    I.off("_beforeprint", this.handleBeforePrint), I.off("_afterprint", this.handleAfterPrint);
  }, A;
}(GM);
function o1(M, A) {
  return !M || A > 10 ? AA({ weekday: "short" }) : A > 1 ? AA({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : AA({ weekday: "long" });
}
var Ke = "fc-col-header-cell";
function MC(M) {
  return M.text;
}
var l1 = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.dateEnv, D = I.options, N = I.theme, L = I.viewApi, t = this.props, j = t.date, u = t.dateProfile, S = Bj(j, t.todayRange, null, u), i = [Ke].concat(nL(S, N)), C = g.format(j, t.dayHeaderFormat), w = !S.isDisabled && t.colCnt > 1 ? hD(this.context, j) : {}, E = U(U(U({ date: g.toDate(j), view: L }, t.extraHookProps), { text: C }), S);
    return m(yI, { hookProps: E, classNames: D.dayHeaderClassNames, content: D.dayHeaderContent, defaultContent: MC, didMount: D.dayHeaderDidMount, willUnmount: D.dayHeaderWillUnmount }, function(x, n, a, z) {
      return m(
        "th",
        U({ ref: x, role: "columnheader", className: i.concat(n).join(" "), "data-date": S.isDisabled ? void 0 : yL(j), colSpan: t.colSpan }, t.extraDataAttrs),
        m("div", { className: "fc-scrollgrid-sync-inner" }, !S.isDisabled && m("a", U({ ref: a, className: [
          "fc-col-header-cell-cushion",
          t.isSticky ? "fc-sticky" : ""
        ].join(" ") }, w), z))
      );
    });
  }, A;
}(GM), s1 = AA({ weekday: "long" }), c1 = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.context, D = g.dateEnv, N = g.theme, L = g.viewApi, t = g.options, j = IA(new Date(2592e5), I.dow), u = {
      dow: I.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, S = [Ke].concat(nL(u, N), I.extraClassNames || []), i = D.format(j, I.dayHeaderFormat), C = U(U(U(U({
      date: j
    }, u), { view: L }), I.extraHookProps), { text: i });
    return m(yI, { hookProps: C, classNames: t.dayHeaderClassNames, content: t.dayHeaderContent, defaultContent: MC, didMount: t.dayHeaderDidMount, willUnmount: t.dayHeaderWillUnmount }, function(w, E, x, n) {
      return m(
        "th",
        U({ ref: w, role: "columnheader", className: S.concat(E).join(" "), colSpan: I.colSpan }, I.extraDataAttrs),
        m(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          m("a", { "aria-label": D.format(j, s1), className: [
            "fc-col-header-cell-cushion",
            I.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: x }, n)
        )
      );
    });
  }, A;
}(GM), Rj = function(M) {
  EM(A, M);
  function A(I, g) {
    var D = M.call(this, I, g) || this;
    return D.initialNowDate = fD(g.options.now, g.dateEnv), D.initialNowQueriedMs = new Date().valueOf(), D.state = D.computeTiming().currentState, D;
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
    var I = this, g = I.props, D = I.context, N = KI(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), L = D.dateEnv.startOf(N, g.unit), t = D.dateEnv.add(L, pM(1, g.unit)), j = t.valueOf() - N.valueOf();
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
  var A = VM(M), I = IA(A, 1);
  return { start: A, end: I };
}
var z1 = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.createDayHeaderFormatter = UM(Y1), I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = this.props, D = g.dates, N = g.dateProfile, L = g.datesRepDistinctDays, t = g.renderIntro, j = this.createDayHeaderFormatter(I.options.dayHeaderFormat, L, D.length);
    return m(Rj, { unit: "day" }, function(u, S) {
      return m(
        "tr",
        { role: "row" },
        t && t("day"),
        D.map(function(i) {
          return L ? m(l1, { key: i.toISOString(), date: i, dateProfile: N, todayRange: S, colCnt: D.length, dayHeaderFormat: j }) : m(c1, { key: i.getUTCDay(), dow: i.getUTCDay(), dayHeaderFormat: j });
        })
      );
    });
  }, A;
}(GM);
function Y1(M, A, I) {
  return M || o1(A, I);
}
var r1 = function() {
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
}(), d1 = function() {
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
        var j = Math.floor(t / I), u = Math.min((j + 1) * I, L + 1);
        D.push({
          row: j,
          firstCol: t % I,
          lastCol: (u - 1) % I,
          isStart: g.isStart && t === N,
          isEnd: g.isEnd && u - 1 === L
        }), t = u;
      }
    return D;
  }, M;
}(), U1 = function() {
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
      { range: { start: A, end: KI(A, 1) }, allDay: !1 },
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
    for (var L = Cs(A, I, g), t = this.sliceRange.apply(this, HM([A.range], D)), j = 0, u = t; j < u.length; j++) {
      var S = u[j];
      S.eventRange = L;
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
    start: KI(I.start, M.slotMinTime.milliseconds),
    end: KI(I.end, M.slotMaxTime.milliseconds - 864e5)
  };
}
var AN = /^(visible|hidden)$/, AC = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.handleEl = function(g) {
      I.el = g, CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = I.liquid, D = I.liquidIsAbsolute, N = g && D, L = ["fc-scroller"];
    return g && (D ? L.push("fc-scroller-liquid-absolute") : L.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: L.join(" "), style: {
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
    if (AN.test(this.props.overflowX))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), D = I.children, N = 0; N < D.length; N += 1) {
      var L = D[N];
      if (L.getBoundingClientRect().width > g)
        return !0;
    }
    return !1;
  }, A.prototype.needsYScrolling = function() {
    if (AN.test(this.props.overflowY))
      return !1;
    for (var I = this.el, g = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), D = I.children, N = 0; N < D.length; N += 1) {
      var L = D[N];
      if (L.getBoundingClientRect().height > g)
        return !0;
    }
    return !1;
  }, A.prototype.getXScrollbarWidth = function() {
    return AN.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, A.prototype.getYScrollbarWidth = function() {
    return AN.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, A;
}(GM), PI = function() {
  function M(A) {
    var I = this;
    this.masterCallback = A, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(g, D) {
      var N = I, L = N.depths, t = N.currentMap, j = !1, u = !1;
      g !== null ? (j = D in t, t[D] = g, L[D] = (L[D] || 0) + 1, u = !0) : (L[D] -= 1, L[D] || (delete t[D], delete I.callbackMap[D], j = !0)), I.masterCallback && (j && I.masterCallback(null, String(D)), u && I.masterCallback(g, String(D)));
    };
  }
  return M.prototype.createRef = function(A) {
    var I = this, g = this.callbackMap[A];
    return g || (g = this.callbackMap[A] = function(D) {
      I.handleValue(D, String(A));
    }), g;
  }, M.prototype.collect = function(A, I, g) {
    return Tl(this.currentMap, A, I, g);
  }, M.prototype.getAll = function() {
    return kj(this.currentMap);
  }, M;
}();
function m1(M) {
  for (var A = Fo(M, ".fc-scrollgrid-shrink"), I = 0, g = 0, D = A; g < D.length; g++) {
    var N = D[g];
    I = Math.max(I, Il(N));
  }
  return Math.ceil(I);
}
function IC(M, A) {
  return M.liquid && A.liquid;
}
function O1(M, A) {
  return A.maxHeight != null || IC(M, A);
}
function h1(M, A, I, g) {
  var D = I.expandRows, N = typeof A.content == "function" ? A.content(I) : m("table", {
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
  }, I.tableColGroupNode, m(g ? "thead" : "tbody", {
    role: "presentation"
  }, typeof A.rowContent == "function" ? A.rowContent(I) : A.rowContent));
  return N;
}
function b1(M, A) {
  return Gg(M, A, eI);
}
function W1(M, A) {
  for (var I = [], g = 0, D = M; g < D.length; g++)
    for (var N = D[g], L = N.span || 1, t = 0; t < L; t += 1)
      I.push(m("col", { style: {
        width: N.width === "shrink" ? k1(A) : N.width || "",
        minWidth: N.minWidth || ""
      } }));
  return m.apply(void 0, HM(["colgroup", {}], I));
}
function k1(M) {
  return M == null ? 4 : M;
}
function p1(M) {
  for (var A = 0, I = M; A < I.length; A++) {
    var g = I[A];
    if (g.width === "shrink")
      return !0;
  }
  return !1;
}
function Q1(M, A) {
  var I = [
    "fc-scrollgrid",
    A.theme.getClass("table")
  ];
  return M && I.push("fc-scrollgrid-liquid"), I;
}
function v1(M, A) {
  var I = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + M.type,
    M.className
  ];
  return A && M.liquid && M.maxHeight == null && I.push("fc-scrollgrid-section-liquid"), M.isSticky && I.push("fc-scrollgrid-section-sticky"), I;
}
function G1(M) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: M.clientWidth,
    minWidth: M.tableMinWidth
  } });
}
function MS(M) {
  var A = M.stickyHeaderDates;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
function f1(M) {
  var A = M.stickyFooterScrollbar;
  return (A == null || A === "auto") && (A = M.height === "auto" || M.viewHeight === "auto"), A;
}
var gC = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.processCols = UM(function(g) {
      return g;
    }, b1), I.renderMicroColGroup = UM(W1), I.scrollerRefs = new PI(), I.scrollerElRefs = new PI(I._handleScrollerEl.bind(I)), I.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, I.handleSizing = function() {
      I.safeSetState(U({ shrinkWidth: I.computeShrinkWidth() }, I.computeScrollerDims()));
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.state, N = I.context, L = g.sections || [], t = this.processCols(g.cols), j = this.renderMicroColGroup(t, D.shrinkWidth), u = Q1(g.liquid, N);
    g.collapsibleWidth && u.push("fc-scrollgrid-collapsible");
    for (var S = L.length, i = 0, C, w = [], E = [], x = []; i < S && (C = L[i]).type === "header"; )
      w.push(this.renderSection(C, j, !0)), i += 1;
    for (; i < S && (C = L[i]).type === "body"; )
      E.push(this.renderSection(C, j, !1)), i += 1;
    for (; i < S && (C = L[i]).type === "footer"; )
      x.push(this.renderSection(C, j, !0)), i += 1;
    var n = !ke(), a = { role: "rowgroup" };
    return m("table", {
      role: "grid",
      className: u.join(" "),
      style: { height: g.height }
    }, Boolean(!n && w.length) && m.apply(void 0, HM(["thead", a], w)), Boolean(!n && E.length) && m.apply(void 0, HM(["tbody", a], E)), Boolean(!n && x.length) && m.apply(void 0, HM(["tfoot", a], x)), n && m.apply(void 0, HM(HM(HM(["tbody", a], w), E), x)));
  }, A.prototype.renderSection = function(I, g, D) {
    return "outerContent" in I ? m(SA, { key: I.key }, I.outerContent) : m("tr", { key: I.key, role: "presentation", className: v1(I, this.props.liquid).join(" ") }, this.renderChunkTd(I, g, I.chunk, D));
  }, A.prototype.renderChunkTd = function(I, g, D, N) {
    if ("outerContent" in D)
      return D.outerContent;
    var L = this.props, t = this.state, j = t.forceYScrollbars, u = t.scrollerClientWidths, S = t.scrollerClientHeights, i = O1(L, I), C = IC(L, I), w = L.liquid ? j ? "scroll" : i ? "auto" : "hidden" : "visible", E = I.key, x = h1(I, D, {
      tableColGroupNode: g,
      tableMinWidth: "",
      clientWidth: !L.collapsibleWidth && u[E] !== void 0 ? u[E] : null,
      clientHeight: S[E] !== void 0 ? S[E] : null,
      expandRows: I.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, N);
    return m(N ? "th" : "td", {
      ref: D.elRef,
      role: "presentation"
    }, m(
      "div",
      { className: "fc-scroller-harness" + (C ? " fc-scroller-harness-liquid" : "") },
      m(AC, { ref: this.scrollerRefs.createRef(E), elRef: this.scrollerElRefs.createRef(E), overflowY: w, overflowX: L.liquid ? "hidden" : "visible", maxHeight: I.maxHeight, liquid: C, liquidIsAbsolute: !0 }, x)
    ));
  }, A.prototype._handleScrollerEl = function(I, g) {
    var D = J1(this.props.sections, g);
    D && CI(D.chunk.scrollerElRef, I);
  }, A.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, A.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, A.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, A.prototype.computeShrinkWidth = function() {
    return p1(this.props.cols) ? m1(this.scrollerElRefs.getAll()) : 0;
  }, A.prototype.computeScrollerDims = function() {
    var I = Zs(), g = this, D = g.scrollerRefs, N = g.scrollerElRefs, L = !1, t = {}, j = {};
    for (var u in D.currentMap) {
      var S = D.currentMap[u];
      if (S && S.needsYScrolling()) {
        L = !0;
        break;
      }
    }
    for (var i = 0, C = this.props.sections; i < C.length; i++) {
      var w = C[i], u = w.key, E = N.currentMap[u];
      if (E) {
        var x = E.parentNode;
        t[u] = Math.floor(x.getBoundingClientRect().width - (L ? I.y : 0)), j[u] = Math.floor(x.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: L, scrollerClientWidths: t, scrollerClientHeights: j };
  }, A;
}(GM);
gC.addStateEquality({
  scrollerClientWidths: eI,
  scrollerClientHeights: eI
});
function J1(M, A) {
  for (var I = 0, g = M; I < g.length; I++) {
    var D = g[I];
    if (D.key === A)
      return D;
  }
  return null;
}
var lL = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.elRef = mA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = g.seg, t = L.eventRange, j = t.ui, u = {
      event: new XA(D, t.def, t.instance),
      view: D.viewApi,
      timeText: g.timeText,
      textColor: j.textColor,
      backgroundColor: j.backgroundColor,
      borderColor: j.borderColor,
      isDraggable: !g.disableDragging && Ds(L, D),
      isStartResizable: !g.disableResizing && Ns(L, D),
      isEndResizable: !g.disableResizing && Ls(L),
      isMirror: Boolean(g.isDragging || g.isResizing || g.isDateSelecting),
      isStart: Boolean(L.isStart),
      isEnd: Boolean(L.isEnd),
      isPast: Boolean(g.isPast),
      isFuture: Boolean(g.isFuture),
      isToday: Boolean(g.isToday),
      isSelected: Boolean(g.isSelected),
      isDragging: Boolean(g.isDragging),
      isResizing: Boolean(g.isResizing)
    }, S = ts(u).concat(j.classNames);
    return m(yI, { hookProps: u, classNames: N.eventClassNames, content: N.eventContent, defaultContent: g.defaultContent, didMount: N.eventDidMount, willUnmount: N.eventWillUnmount, elRef: this.elRef }, function(i, C, w, E) {
      return g.children(i, S.concat(C), w, E, u);
    });
  }, A.prototype.componentDidMount = function() {
    f4(this.elRef.current, this.props.seg);
  }, A.prototype.componentDidUpdate = function(I) {
    var g = this.props.seg;
    g !== I.seg && f4(this.elRef.current, g);
  }, A;
}(GM), V1 = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = g.seg, L = D.options.eventTimeFormat || g.defaultTimeFormat, t = lD(N, L, D, g.defaultDisplayEventTime, g.defaultDisplayEventEnd);
    return m(lL, { seg: N, timeText: t, disableDragging: g.disableDragging, disableResizing: g.disableResizing, defaultContent: g.defaultContent || Z1, isDragging: g.isDragging, isResizing: g.isResizing, isDateSelecting: g.isDateSelecting, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(j, u, S, i, C) {
      return m(
        "a",
        U({ className: g.extraClassNames.concat(u).join(" "), style: {
          borderColor: C.borderColor,
          backgroundColor: C.backgroundColor
        }, ref: j }, Vj(N, D)),
        m("div", { className: "fc-event-main", ref: S, style: { color: C.textColor } }, i),
        C.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        C.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, A;
}(GM);
function Z1(M) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    M.timeText && m("div", { className: "fc-event-time" }, M.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, M.event.title || m(SA, null, "\xA0"))
    )
  );
}
var B1 = AA({ day: "numeric" }), DC = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options, L = NC({
      date: g.date,
      dateProfile: g.dateProfile,
      todayRange: g.todayRange,
      showDayNumber: g.showDayNumber,
      extraProps: g.extraHookProps,
      viewApi: D.viewApi,
      dateEnv: D.dateEnv
    });
    return m(ve, { hookProps: L, content: N.dayCellContent, defaultContent: g.defaultContent }, g.children);
  }, A;
}(GM);
function NC(M) {
  var A = M.date, I = M.dateEnv, g = Bj(A, M.todayRange, null, M.dateProfile);
  return U(U(U({ date: I.toDate(A), view: M.viewApi }, g), { dayNumberText: M.showDayNumber ? I.format(A, B1) : "" }), M.extraProps);
}
var LC = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.refineHookProps = sN(NC), I.normalizeClassNames = Ge(), I;
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
    return m(Pj, { hookProps: L, didMount: N.dayCellDidMount, willUnmount: N.dayCellWillUnmount, elRef: g.elRef }, function(u) {
      return g.children(u, t, j, L.isDisabled);
    });
  }, A;
}(GM);
function P1(M) {
  return m("div", { className: "fc-" + M });
}
var F1 = function(M) {
  return m(lL, { defaultContent: X1, seg: M.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: M.isPast, isFuture: M.isFuture, isToday: M.isToday }, function(A, I, g, D, N) {
    return m("div", { ref: A, className: ["fc-bg-event"].concat(I).join(" "), style: {
      backgroundColor: N.backgroundColor
    } }, D);
  });
};
function X1(M) {
  var A = M.event.title;
  return A && m("div", { className: "fc-event-title" }, M.event.title);
}
var R1 = function(M) {
  return m(Lg.Consumer, null, function(A) {
    var I = A.dateEnv, g = A.options, D = M.date, N = g.weekNumberFormat || M.defaultFormat, L = I.computeWeekNumber(D), t = I.format(D, N), j = { num: L, text: t, date: D };
    return m(yI, { hookProps: j, classNames: g.weekNumberClassNames, content: g.weekNumberContent, defaultContent: H1, didMount: g.weekNumberDidMount, willUnmount: g.weekNumberWillUnmount }, M.children);
  });
};
function H1(M) {
  return M.text;
}
var Tt = 10, _1 = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      titleId: mI()
    }, I.handleRootEl = function(g) {
      I.rootEl = g, I.props.elRef && CI(I.props.elRef, g);
    }, I.handleDocumentMouseDown = function(g) {
      var D = Ho(g);
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
    return Vo(m(
      "div",
      U({ id: L.id, className: j.join(" "), "aria-labelledby": t.titleId }, L.extraAttrs, { ref: this.handleRootEl }),
      m(
        "div",
        { className: "fc-popover-header " + g.getClass("popoverHeader") },
        m("span", { className: "fc-popover-title", id: t.titleId }, L.title),
        m("span", { className: "fc-popover-close " + g.getIconClass("close"), title: D.closeHint, onClick: this.handleCloseClick })
      ),
      m("div", { className: "fc-popover-body " + g.getClass("popoverContent") }, L.children)
    ), L.parentEl);
  }, A.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, A.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, A.prototype.updateSize = function() {
    var I = this.context.isRtl, g = this.props, D = g.alignmentEl, N = g.alignGridTop, L = this.rootEl, t = Fs(D);
    if (t) {
      var j = L.getBoundingClientRect(), u = N ? AI(D, ".fc-scrollgrid").getBoundingClientRect().top : t.top, S = I ? t.right - j.width : t.left;
      u = Math.max(u, Tt), S = Math.min(S, document.documentElement.clientWidth - Tt - j.width), S = Math.max(S, Tt);
      var i = L.offsetParent.getBoundingClientRect();
      Ro(L, {
        top: u - i.top,
        left: S - i.left
      });
    }
  }, A;
}(GM), $1 = function(M) {
  EM(A, M);
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
    var I = this.context, g = I.options, D = I.dateEnv, N = this.props, L = N.startDate, t = N.todayRange, j = N.dateProfile, u = D.format(L, g.dayPopoverFormat);
    return m(LC, { date: L, dateProfile: j, todayRange: t, elRef: this.handleRootEl }, function(S, i, C) {
      return m(
        _1,
        { elRef: S, id: N.id, title: u, extraClassNames: ["fc-more-popover"].concat(i), extraAttrs: C, parentEl: N.parentEl, alignmentEl: N.alignmentEl, alignGridTop: N.alignGridTop, onClose: N.onClose },
        m(DC, { date: L, dateProfile: j, todayRange: t }, function(w, E) {
          return E && m("div", { className: "fc-more-popover-misc", ref: w }, E);
        }),
        N.children
      );
    });
  }, A.prototype.queryHit = function(I, g, D, N) {
    var L = this, t = L.rootEl, j = L.props;
    return I >= 0 && I < D && g >= 0 && g < N ? {
      dateProfile: j.dateProfile,
      dateSpan: U({ allDay: !0, range: {
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
}(tg), q1 = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.linkElRef = mA(), I.state = {
      isPopoverOpen: !1,
      popoverId: mI()
    }, I.handleClick = function(g) {
      var D = I, N = D.props, L = D.context, t = L.options.moreLinkClick, j = AS(N).start;
      function u(S) {
        var i = S.eventRange, C = i.def, w = i.instance, E = i.range;
        return {
          event: new XA(L, C, w),
          start: L.dateEnv.toDate(E.start),
          end: L.dateEnv.toDate(E.end),
          isStart: S.isStart,
          isEnd: S.isEnd
        };
      }
      typeof t == "function" && (t = t({
        date: j,
        allDay: Boolean(N.allDayDate),
        allSegs: N.allSegs.map(u),
        hiddenSegs: N.hiddenSegs.map(u),
        jsEvent: g,
        view: L.viewApi
      })), !t || t === "popover" ? I.setState({ isPopoverOpen: !0 }) : typeof t == "string" && L.calendarApi.zoomTo(j, t);
    }, I.handlePopoverClose = function() {
      I.setState({ isPopoverOpen: !1 });
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, N = g.state;
    return m(Lg.Consumer, null, function(L) {
      var t = L.viewApi, j = L.options, u = L.calendarApi, S = j.moreLinkText, i = D.moreCnt, C = AS(D), w = typeof S == "function" ? S.call(u, i) : "+" + i + " " + S, E = nD(j.moreLinkHint, [i], w), x = {
        num: i,
        shortText: "+" + i,
        text: w,
        view: t
      };
      return m(
        SA,
        null,
        Boolean(D.moreCnt) && m(yI, { elRef: I.linkElRef, hookProps: x, classNames: j.moreLinkClassNames, content: j.moreLinkContent, defaultContent: D.defaultContent || K1, didMount: j.moreLinkDidMount, willUnmount: j.moreLinkWillUnmount }, function(n, a, z, d) {
          return D.children(n, ["fc-more-link"].concat(a), z, d, I.handleClick, E, N.isPopoverOpen, N.isPopoverOpen ? N.popoverId : "");
        }),
        N.isPopoverOpen && m($1, { id: N.popoverId, startDate: C.start, endDate: C.end, dateProfile: D.dateProfile, todayRange: D.todayRange, extraDateSpan: D.extraDateSpan, parentEl: I.parentEl, alignmentEl: D.alignmentElRef.current, alignGridTop: D.alignGridTop, onClose: I.handlePopoverClose }, D.popoverContent())
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
function K1(M) {
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
    start: Mz(A),
    end: Iz(A)
  };
}
function Mz(M) {
  return M.reduce(Az).eventRange.range.start;
}
function Az(M, A) {
  return M.eventRange.range.start < A.eventRange.range.start ? M : A;
}
function Iz(M) {
  return M.reduce(gz).eventRange.range.end;
}
function gz(M, A) {
  return M.eventRange.range.end > A.eventRange.range.end ? M : A;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Dz = function(M) {
  EM(A, M);
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
          Jo(m(n1, { options: N.calendarOptions, theme: N.theme, emitter: N.emitter }, function(L, t, j, u) {
            return D.setClassNames(L), D.setHeight(t), m(
              Qe.Provider,
              { value: D.customContentRenderId },
              m(x1, U({ isHeightAuto: j, forPrint: u }, N))
            );
          }), D.el);
        });
      } else
        D.isRendered && (D.isRendered = !1, Zo(D.el), D.setClassNames([]), D.setHeight(""));
    }, D.el = I, D.renderRunner = new Xj(D.handleRenderRequest), new _e({
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
    if (!Gg(I, this.currentClassNames)) {
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
    ee(this.el, "height", I);
  }, A;
}(zs);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Nz = {
  googleCalendarApiKey: String
}, Lz = {
  googleCalendarApiKey: String,
  googleCalendarId: String,
  googleCalendarApiBase: String,
  extraParams: f
}, tz = "https://www.googleapis.com/calendar/v3/calendars", jz = {
  parseMeta: function(M) {
    var A = M.googleCalendarId;
    return !A && M.url && (A = uz(M.url)), A ? {
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
      var j = Sz(L), u = L.extraParams, S = typeof u == "function" ? u() : u, i = iz(M.range, t, S, D);
      Re("GET", j, i, function(C, w) {
        C.error ? I({
          message: "Google Calendar API: " + C.error.message,
          errors: C.error.errors,
          xhr: w
        }) : A({
          rawEvents: ez(C.items, i.timeZone),
          xhr: w
        });
      }, function(C, w) {
        I({ message: C, xhr: w });
      });
    }
  }
};
function uz(M) {
  var A;
  return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(M) ? M : (A = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(M)) || (A = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(M)) ? decodeURIComponent(A[1]) : null;
}
function Sz(M) {
  var A = M.googleCalendarApiBase;
  return A || (A = tz), A + "/" + encodeURIComponent(M.googleCalendarId) + "/events";
}
function iz(M, A, I, g) {
  var D, N, L;
  return g.canComputeOffset ? (N = g.formatIso(M.start), L = g.formatIso(M.end)) : (N = IA(M.start, -1).toISOString(), L = IA(M.end, 1).toISOString()), D = U(U({}, I || {}), { key: A, timeMin: N, timeMax: L, singleEvents: !0, maxResults: 9999 }), g.timeZone !== "local" && (D.timeZone = g.timeZone), D;
}
function ez(M, A) {
  return M.map(function(I) {
    return Cz(I, A);
  });
}
function Cz(M, A) {
  var I = M.htmlLink || null;
  return I && A && (I = wz(I, "ctz=" + A)), {
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
function wz(M, A) {
  return M.replace(/(\?.*?)?(#|$)/, function(I, g, D) {
    return (g ? g + "&" : "?") + A + D;
  });
}
var Ez = aI({
  eventSourceDefs: [jz],
  optionRefiners: Nz,
  eventSourceRefiners: Lz
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var Tz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.headerElRef = mA(), I;
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
    }), m($N, { viewSpec: L.viewSpec }, function(u, S) {
      return m(
        "div",
        { ref: u, className: ["fc-daygrid"].concat(S).join(" ") },
        m(gC, { liquid: !N.isHeightAuto && !N.forPrint, collapsibleWidth: N.forPrint, cols: [], sections: t })
      );
    });
  }, A.prototype.renderHScrollLayout = function(I, g, D, N) {
    var L = this.context.pluginHooks.scrollGridImpl;
    if (!L)
      throw new Error("No ScrollGrid implementation");
    var t = this, j = t.props, u = t.context, S = !j.forPrint && MS(u.options), i = !j.forPrint && f1(u.options), C = [];
    return I && C.push({
      type: "header",
      key: "header",
      isSticky: S,
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
        content: G1
      }]
    }), m($N, { viewSpec: u.viewSpec }, function(w, E) {
      return m(
        "div",
        { ref: w, className: ["fc-daygrid"].concat(E).join(" ") },
        m(L, { liquid: !j.isHeightAuto && !j.forPrint, collapsibleWidth: j.forPrint, colGroups: [{ cols: [{ span: D, minWidth: N }] }], sections: C })
      );
    });
  }, A;
}(tg);
function IN(M, A) {
  for (var I = [], g = 0; g < A; g += 1)
    I[g] = [];
  for (var D = 0, N = M; D < N.length; D++) {
    var L = N[D];
    I[L.row].push(L);
  }
  return I;
}
function gN(M, A) {
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
var xz = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props, g = hD(this.context, I.date);
    return m(DC, { date: I.date, dateProfile: I.dateProfile, todayRange: I.todayRange, showDayNumber: I.showDayNumber, extraHookProps: I.extraHookProps, defaultContent: az }, function(D, N) {
      return (N || I.forceDayTop) && m(
        "div",
        { className: "fc-daygrid-day-top", ref: D },
        m("a", U({ id: I.dayNumberId, className: "fc-daygrid-day-number" }, g), N || m(SA, null, "\xA0"))
      );
    });
  }, A;
}(GM);
function az(M) {
  return M.dayNumberText;
}
var tC = AA({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function jC(M) {
  var A = M.eventRange.ui.display;
  return A === "list-item" || A === "auto" && !M.eventRange.def.allDay && M.firstCol === M.lastCol && M.isStart && M.isEnd;
}
var uC = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this.props;
    return m(V1, U({}, I, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: tC, defaultDisplayEventEnd: I.defaultDisplayEventEnd, disableResizing: !I.seg.eventRange.def.allDay }));
  }, A;
}(GM), SC = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = D.options.eventTimeFormat || tC, L = lD(g.seg, N, D, !0, g.defaultDisplayEventEnd);
    return m(lL, { seg: g.seg, timeText: L, defaultContent: yz, isDragging: g.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: g.isSelected, isPast: g.isPast, isFuture: g.isFuture, isToday: g.isToday }, function(t, j, u, S) {
      return m("a", U({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(j).join(" "), ref: t }, Vj(g.seg, D)), S);
    });
  }, A;
}(GM);
function yz(M) {
  return m(
    SA,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: M.borderColor || M.backgroundColor } }),
    M.timeText && m("div", { className: "fc-event-time" }, M.timeText),
    m("div", { className: "fc-event-title" }, M.event.title || m(SA, null, "\xA0"))
  );
}
var nz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.compileSegs = UM(oz), I;
  }
  return A.prototype.render = function() {
    var I = this.props, g = this.compileSegs(I.singlePlacements), D = g.allSegs, N = g.invisibleSegs;
    return m(q1, { dateProfile: I.dateProfile, todayRange: I.todayRange, allDayDate: I.allDayDate, moreCnt: I.moreCnt, allSegs: D, hiddenSegs: N, alignmentElRef: I.alignmentElRef, alignGridTop: I.alignGridTop, extraDateSpan: I.extraDateSpan, popoverContent: function() {
      var L = (I.eventDrag ? I.eventDrag.affectedInstances : null) || (I.eventResize ? I.eventResize.affectedInstances : null) || {};
      return m(SA, null, D.map(function(t) {
        var j = t.eventRange.instance.instanceId;
        return m("div", { className: "fc-daygrid-event-harness", key: j, style: {
          visibility: L[j] ? "hidden" : ""
        } }, jC(t) ? m(SC, U({ seg: t, isDragging: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, Og(t, I.todayRange))) : m(uC, U({ seg: t, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: j === I.eventSelection, defaultDisplayEventEnd: !1 }, Og(t, I.todayRange))));
      }));
    } }, function(L, t, j, u, S, i, C, w) {
      return m("a", U({ ref: L, className: ["fc-daygrid-more-link"].concat(t).join(" "), title: i, "aria-expanded": C, "aria-controls": w }, we(S)), u);
    });
  }, A;
}(GM);
function oz(M) {
  for (var A = [], I = [], g = 0, D = M; g < D.length; g++) {
    var N = D[g];
    A.push(N.seg), N.isVisible || I.push(N.seg);
  }
  return { allSegs: A, invisibleSegs: I };
}
var lz = AA({ week: "narrow" }), sz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.rootElRef = mA(), I.state = {
      dayNumberId: mI()
    }, I.handleRootEl = function(g) {
      CI(I.rootElRef, g), CI(I.props.elRef, g);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.context, D = I.props, N = I.state, L = I.rootElRef, t = D.date, j = D.dateProfile, u = hD(g, t, "week");
    return m(LC, { date: t, dateProfile: j, todayRange: D.todayRange, showDayNumber: D.showDayNumber, extraHookProps: D.extraHookProps, elRef: this.handleRootEl }, function(S, i, C, w) {
      return m(
        "td",
        U({ ref: S, role: "gridcell", className: ["fc-daygrid-day"].concat(i, D.extraClassNames || []).join(" ") }, C, D.extraDataAttrs, D.showDayNumber ? { "aria-labelledby": N.dayNumberId } : {}),
        m(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: D.innerElRef },
          D.showWeekNumber && m(R1, { date: t, defaultFormat: lz }, function(E, x, n, a) {
            return m("a", U({ ref: E, className: ["fc-daygrid-week-number"].concat(x).join(" ") }, u), a);
          }),
          !w && m(xz, { date: t, dateProfile: j, showDayNumber: D.showDayNumber, dayNumberId: N.dayNumberId, forceDayTop: D.forceDayTop, todayRange: D.todayRange, extraHookProps: D.extraHookProps }),
          m(
            "div",
            { className: "fc-daygrid-day-events", ref: D.fgContentElRef },
            D.fgContent,
            m(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: D.moreMarginTop } },
              m(nz, { allDayDate: t, singlePlacements: D.singlePlacements, moreCnt: D.moreCnt, alignmentElRef: L, alignGridTop: !D.showDayNumber, extraDateSpan: D.extraDateSpan, dateProfile: D.dateProfile, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, todayRange: D.todayRange })
            )
          ),
          m("div", { className: "fc-daygrid-day-bg" }, D.bgContent)
        )
      );
    });
  }, A;
}(tg);
function cz(M, A, I, g, D, N, L) {
  var t = new rz();
  t.allowReslicing = !0, t.strictOrder = g, A === !0 || I === !0 ? (t.maxCoord = N, t.hiddenConsumes = !0) : typeof A == "number" ? t.maxStackCnt = A : typeof I == "number" && (t.maxStackCnt = I, t.hiddenConsumes = !0);
  for (var j = [], u = [], S = 0; S < M.length; S += 1) {
    var i = M[S], C = i.eventRange.instance.instanceId, w = D[C];
    w != null ? j.push({
      index: S,
      thickness: w,
      span: {
        start: i.firstCol,
        end: i.lastCol + 1
      }
    }) : u.push(i);
  }
  for (var E = t.addSegs(j), x = t.toRects(), n = zz(x, M, L), a = n.singleColPlacements, z = n.multiColPlacements, d = n.leftoverMargins, Y = [], h = [], k = 0, G = u; k < G.length; k++) {
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
  for (var b = 0, Z = E; b < Z.length; b++) {
    var R = Z[b], i = M[R.index], AM = R.span;
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
    h.push(d[r]);
  return { singleColPlacements: a, multiColPlacements: z, moreCnts: Y, moreMarginTops: h };
}
function zz(M, A, I) {
  for (var g = Yz(M, I.length), D = [], N = [], L = [], t = 0; t < I.length; t += 1) {
    for (var j = g[t], u = [], S = 0, i = 0, C = 0, w = j; C < w.length; C++) {
      var E = w[C], x = A[E.index];
      u.push({
        seg: hg(x, t, t + 1, I),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: E.levelCoord,
        marginTop: E.levelCoord - S
      }), S = E.levelCoord + E.thickness;
    }
    var n = [];
    S = 0, i = 0;
    for (var a = 0, z = j; a < z.length; a++) {
      var E = z[a], x = A[E.index], d = E.span.end - E.span.start > 1, Y = E.span.start === t;
      i += E.levelCoord - S, S = E.levelCoord + E.thickness, d ? (i += E.thickness, Y && n.push({
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
    D.push(u), N.push(n), L.push(i);
  }
  return { singleColPlacements: D, multiColPlacements: N, leftoverMargins: L };
}
function Yz(M, A) {
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
  var D = M.eventRange, N = D.range, L = fg(N, {
    start: g[A].date,
    end: IA(g[I - 1].date, 1)
  });
  return U(U({}, M), { firstCol: A, lastCol: I - 1, eventRange: {
    def: D.def,
    ui: U(U({}, D.ui), { durationEditable: !1 }),
    instance: D.instance,
    range: L
  }, isStart: M.isStart && L.start.valueOf() === N.start.valueOf(), isEnd: M.isEnd && L.end.valueOf() === N.end.valueOf() });
}
var rz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.hiddenConsumes = !1, I.forceHidden = {}, I;
  }
  return A.prototype.addSegs = function(I) {
    for (var g = this, D = M.prototype.addSegs.call(this, I), N = this.entriesByLevel, L = function(j) {
      return !g.forceHidden[sD(j)];
    }, t = 0; t < N.length; t += 1)
      N[t] = N[t].filter(L);
    return D;
  }, A.prototype.handleInvalidInsertion = function(I, g, D) {
    var N = this, L = N.entriesByLevel, t = N.forceHidden, j = I.touchingEntry, u = I.touchingLevel, S = I.touchingLateral;
    if (this.hiddenConsumes && j) {
      var i = sD(j);
      if (!t[i])
        if (this.allowReslicing) {
          var C = U(U({}, j), { span: $e(j.span, g.span) }), w = sD(C);
          t[w] = !0, L[u][S] = C, this.splitEntry(j, g, D);
        } else
          t[i] = !0, D.push(j);
    }
    return M.prototype.handleInvalidInsertion.call(this, I, g, D);
  }, A;
}(i1), iC = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.cellElRefs = new PI(), I.frameElRefs = new PI(), I.fgElRefs = new PI(), I.segHarnessRefs = new PI(), I.rootElRef = mA(), I.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this, D = g.props, N = g.state, L = g.context, t = L.options, j = D.cells.length, u = gN(D.businessHourSegs, j), S = gN(D.bgEventSegs, j), i = gN(this.getHighlightSegs(), j), C = gN(this.getMirrorSegs(), j), w = cz(ce(D.fgEventSegs, t.eventOrder), D.dayMaxEvents, D.dayMaxEventRows, t.eventOrderStrict, N.eventInstanceHeights, N.maxContentHeight, D.cells), E = w.singleColPlacements, x = w.multiColPlacements, n = w.moreCnts, a = w.moreMarginTops, z = D.eventDrag && D.eventDrag.affectedInstances || D.eventResize && D.eventResize.affectedInstances || {};
    return m(
      "tr",
      { ref: this.rootElRef, role: "row" },
      D.renderIntro && D.renderIntro(),
      D.cells.map(function(d, Y) {
        var h = I.renderFgSegs(Y, D.forPrint ? E[Y] : x[Y], D.todayRange, z), k = I.renderFgSegs(Y, dz(C[Y], x), D.todayRange, {}, Boolean(D.eventDrag), Boolean(D.eventResize), !1);
        return m(sz, { key: d.key, elRef: I.cellElRefs.createRef(d.key), innerElRef: I.frameElRefs.createRef(d.key), dateProfile: D.dateProfile, date: d.date, showDayNumber: D.showDayNumbers, showWeekNumber: D.showWeekNumbers && Y === 0, forceDayTop: D.showWeekNumbers, todayRange: D.todayRange, eventSelection: D.eventSelection, eventDrag: D.eventDrag, eventResize: D.eventResize, extraHookProps: d.extraHookProps, extraDataAttrs: d.extraDataAttrs, extraClassNames: d.extraClassNames, extraDateSpan: d.extraDateSpan, moreCnt: n[Y], moreMarginTop: a[Y], singlePlacements: E[Y], fgContentElRef: I.fgElRefs.createRef(d.key), fgContent: m(
          SA,
          null,
          m(SA, null, h),
          m(SA, null, k)
        ), bgContent: m(
          SA,
          null,
          I.renderFillSegs(i[Y], "highlight"),
          I.renderFillSegs(u[Y], "non-business"),
          I.renderFillSegs(S[Y], "bg-event")
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
    var u = this.context, S = this.props.eventSelection, i = this.state.framePositions, C = this.props.cells.length === 1, w = L || t || j, E = [];
    if (i)
      for (var x = 0, n = g; x < n.length; x++) {
        var a = n[x], z = a.seg, d = z.eventRange.instance.instanceId, Y = d + ":" + I, h = a.isVisible && !N[d], k = a.isAbsolute, G = "", r = "";
        k && (u.isRtl ? (r = 0, G = i.lefts[z.lastCol] - i.lefts[z.firstCol]) : (G = 0, r = i.rights[z.firstCol] - i.rights[z.lastCol])), E.push(m("div", { className: "fc-daygrid-event-harness" + (k ? " fc-daygrid-event-harness-abs" : ""), key: Y, ref: w ? null : this.segHarnessRefs.createRef(Y), style: {
          visibility: h ? "" : "hidden",
          marginTop: k ? "" : a.marginTop,
          top: k ? a.absoluteTop : "",
          left: G,
          right: r
        } }, jC(z) ? m(SC, U({ seg: z, isDragging: L, isSelected: d === S, defaultDisplayEventEnd: C }, Og(z, D))) : m(uC, U({ seg: z, isDragging: L, isResizing: t, isDateSelecting: j, isSelected: d === S, defaultDisplayEventEnd: C }, Og(z, D)))));
      }
    return E;
  }, A.prototype.renderFillSegs = function(I, g) {
    var D = this.context.isRtl, N = this.props.todayRange, L = this.state.framePositions, t = [];
    if (L)
      for (var j = 0, u = I; j < u.length; j++) {
        var S = u[j], i = D ? {
          right: 0,
          left: L.lefts[S.lastCol] - L.lefts[S.firstCol]
        } : {
          left: 0,
          right: L.rights[S.firstCol] - L.rights[S.lastCol]
        };
        t.push(m("div", { key: js(S.eventRange), className: "fc-daygrid-bg-harness", style: i }, g === "bg-event" ? m(F1, U({ seg: S }, Og(S, N))) : P1(g)));
      }
    return m.apply(void 0, HM([SA, {}], t));
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
      var j = this.state.eventInstanceHeights, u = this.queryEventInstanceHeights(), S = D.dayMaxEvents === !0 || D.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: U(U({}, j), u),
        maxContentHeight: S ? this.computeMaxContentHeight() : null
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
iC.addStateEquality({
  eventInstanceHeights: eI
});
function dz(M, A) {
  if (!M.length)
    return [];
  var I = Uz(A);
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
function Uz(M) {
  for (var A = {}, I = 0, g = M; I < g.length; I++)
    for (var D = g[I], N = 0, L = D; N < L.length; N++) {
      var t = L[N];
      A[t.seg.eventRange.instance.instanceId] = t.absoluteTop;
    }
  return A;
}
var mz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.splitBusinessHourSegs = UM(IN), I.splitBgEventSegs = UM(IN), I.splitFgEventSegs = UM(IN), I.splitDateSelectionSegs = UM(IN), I.splitEventDrag = UM(IS), I.splitEventResize = UM(IS), I.rowRefs = new PI(), I.handleRootEl = function(g) {
      I.rootEl = g, g ? I.context.registerInteractiveComponent(I, {
        el: g,
        isHitComboAllowed: I.props.isHitComboAllowed
      }) : I.context.unregisterInteractiveComponent(I);
    }, I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.props, D = g.dateProfile, N = g.dayMaxEventRows, L = g.dayMaxEvents, t = g.expandRows, j = g.cells.length, u = this.splitBusinessHourSegs(g.businessHourSegs, j), S = this.splitBgEventSegs(g.bgEventSegs, j), i = this.splitFgEventSegs(g.fgEventSegs, j), C = this.splitDateSelectionSegs(g.dateSelectionSegs, j), w = this.splitEventDrag(g.eventDrag, j), E = this.splitEventResize(g.eventResize, j), x = L === !0 || N === !0;
    x && !t && (x = !1, N = null, L = null);
    var n = [
      "fc-daygrid-body",
      x ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      t ? "" : "fc-daygrid-body-natural"
    ];
    return m(
      "div",
      { className: n.join(" "), ref: this.handleRootEl, style: {
        width: g.clientWidth,
        minWidth: g.tableMinWidth
      } },
      m(Rj, { unit: "day" }, function(a, z) {
        return m(
          SA,
          null,
          m(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: g.clientWidth,
              minWidth: g.tableMinWidth,
              height: t ? g.clientHeight : ""
            } },
            g.colGroupNode,
            m("tbody", { role: "presentation" }, g.cells.map(function(d, Y) {
              return m(iC, {
                ref: I.rowRefs.createRef(Y),
                key: d.length ? d[0].date.toISOString() : Y,
                showDayNumbers: j > 1,
                showWeekNumbers: g.showWeekNumbers,
                todayRange: z,
                dateProfile: D,
                cells: d,
                renderIntro: g.renderRowIntro,
                businessHourSegs: u[Y],
                eventSelection: g.eventSelection,
                bgEventSegs: S[Y].filter(Oz),
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
      var u = this.props.cells[j][t];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: U({ range: this.getCellRange(j, t), allDay: !0 }, u.extraDateSpan),
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
function Oz(M) {
  return M.eventRange.def.allDay;
}
var hz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.forceDayIfListItem = !0, I;
  }
  return A.prototype.sliceRange = function(I, g) {
    return g.sliceRange(I);
  }, A;
}(U1), bz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.slicer = new hz(), I.tableRef = mA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context;
    return m(mz, U({ ref: this.tableRef }, this.slicer.sliceProps(g, g.dateProfile, g.nextDayThreshold, D, g.dayTableModel), { dateProfile: g.dateProfile, cells: g.dayTableModel.cells, colGroupNode: g.colGroupNode, tableMinWidth: g.tableMinWidth, renderRowIntro: g.renderRowIntro, dayMaxEvents: g.dayMaxEvents, dayMaxEventRows: g.dayMaxEventRows, showWeekNumbers: g.showWeekNumbers, expandRows: g.expandRows, headerAlignElRef: g.headerAlignElRef, clientWidth: g.clientWidth, clientHeight: g.clientHeight, forPrint: g.forPrint }));
  }, A;
}(tg), Wz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.buildDayTableModel = UM(kz), I.headerRef = mA(), I.tableRef = mA(), I;
  }
  return A.prototype.render = function() {
    var I = this, g = this.context, D = g.options, N = g.dateProfileGenerator, L = this.props, t = this.buildDayTableModel(L.dateProfile, N), j = D.dayHeaders && m(z1, { ref: this.headerRef, dateProfile: L.dateProfile, dates: t.headerDates, datesRepDistinctDays: t.rowCnt === 1 }), u = function(S) {
      return m(bz, { ref: I.tableRef, dateProfile: L.dateProfile, dayTableModel: t, businessHours: L.businessHours, dateSelection: L.dateSelection, eventStore: L.eventStore, eventUiBases: L.eventUiBases, eventSelection: L.eventSelection, eventDrag: L.eventDrag, eventResize: L.eventResize, nextDayThreshold: D.nextDayThreshold, colGroupNode: S.tableColGroupNode, tableMinWidth: S.tableMinWidth, dayMaxEvents: D.dayMaxEvents, dayMaxEventRows: D.dayMaxEventRows, showWeekNumbers: D.weekNumbers, expandRows: !L.isHeightAuto, headerAlignElRef: I.headerElRef, clientWidth: S.clientWidth, clientHeight: S.clientHeight, forPrint: L.forPrint });
    };
    return D.dayMinWidth ? this.renderHScrollLayout(j, u, t.colCnt, D.dayMinWidth) : this.renderSimpleLayout(j, u);
  }, A;
}(Tz);
function kz(M, A) {
  var I = new r1(M.renderRange, A);
  return new d1(I, /year|month|week/.test(M.currentRangeUnit));
}
var pz = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.buildRenderRange = function(I, g, D) {
    var N = this.props.dateEnv, L = M.prototype.buildRenderRange.call(this, I, g, D), t = L.start, j = L.end, u;
    if (/^(year|month)$/.test(g) && (t = N.startOfWeek(t), u = N.startOfWeek(j), u.valueOf() !== j.valueOf() && (j = d4(u, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var S = Math.ceil(
        Dl(t, j)
      );
      j = d4(j, 6 - S);
    }
    return { start: t, end: j };
  }, A;
}(Je), Qz = aI({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: Wz,
      dateProfileGeneratorClass: pz
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
var vz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.state = {
      textId: mI()
    }, I;
  }
  return A.prototype.render = function() {
    var I = this.context, g = I.theme, D = I.dateEnv, N = I.options, L = I.viewApi, t = this.props, j = t.cellId, u = t.dayDate, S = t.todayRange, i = this.state.textId, C = Bj(u, S), w = N.listDayFormat ? D.format(u, N.listDayFormat) : "", E = N.listDaySideFormat ? D.format(u, N.listDaySideFormat) : "", x = U({
      date: D.toDate(u),
      view: L,
      textId: i,
      text: w,
      sideText: E,
      navLinkAttrs: hD(this.context, u),
      sideNavLinkAttrs: hD(this.context, u, "day", !1)
    }, C), n = ["fc-list-day"].concat(nL(C, g));
    return m(yI, { hookProps: x, classNames: N.dayHeaderClassNames, content: N.dayHeaderContent, defaultContent: Gz, didMount: N.dayHeaderDidMount, willUnmount: N.dayHeaderWillUnmount }, function(a, z, d, Y) {
      return m(
        "tr",
        { ref: a, className: n.concat(z).join(" "), "data-date": yL(u) },
        m(
          "th",
          { scope: "colgroup", colSpan: 3, id: j, "aria-labelledby": i },
          m("div", { className: "fc-list-day-cushion " + g.getClass("tableCellShaded"), ref: d }, Y)
        )
      );
    });
  }, A;
}(GM);
function Gz(M) {
  return m(
    SA,
    null,
    M.text && m("a", U({ id: M.textId, className: "fc-list-day-text" }, M.navLinkAttrs), M.text),
    M.sideText && m("a", U({ "aria-hidden": !0, className: "fc-list-day-side-text" }, M.sideNavLinkAttrs), M.sideText)
  );
}
var fz = AA({
  hour: "numeric",
  minute: "2-digit",
  meridiem: "short"
}), Jz = function(M) {
  EM(A, M);
  function A() {
    return M !== null && M.apply(this, arguments) || this;
  }
  return A.prototype.render = function() {
    var I = this, g = I.props, D = I.context, N = g.seg, L = g.timeHeaderId, t = g.eventHeaderId, j = g.dateHeaderId, u = D.options.eventTimeFormat || fz;
    return m(lL, {
      seg: N,
      timeText: "",
      disableDragging: !0,
      disableResizing: !0,
      defaultContent: function() {
        return Vz(N, D);
      },
      isPast: g.isPast,
      isFuture: g.isFuture,
      isToday: g.isToday,
      isSelected: g.isSelected,
      isDragging: g.isDragging,
      isResizing: g.isResizing,
      isDateSelecting: g.isDateSelecting
    }, function(S, i, C, w, E) {
      return m(
        "tr",
        { className: ["fc-list-event", E.event.url ? "fc-event-forced-url" : ""].concat(i).join(" "), ref: S },
        Zz(N, u, D, L, j),
        m(
          "td",
          { "aria-hidden": !0, className: "fc-list-event-graphic" },
          m("span", { className: "fc-list-event-dot", style: { borderColor: E.borderColor || E.backgroundColor } })
        ),
        m("td", { ref: C, headers: t + " " + j, className: "fc-list-event-title" }, w)
      );
    });
  }, A;
}(GM);
function Vz(M, A) {
  var I = Vj(M, A);
  return m("a", U({}, I), M.eventRange.def.title);
}
function Zz(M, A, I, g, D) {
  var N = I.options;
  if (N.displayEventTime !== !1) {
    var L = M.eventRange.def, t = M.eventRange.instance, j = !1, u = void 0;
    if (L.allDay ? j = !0 : ql(M.eventRange.range) ? M.isStart ? u = lD(M, A, I, null, null, t.range.start, M.end) : M.isEnd ? u = lD(M, A, I, null, null, M.start, t.range.end) : j = !0 : u = lD(M, A, I), j) {
      var S = {
        text: I.options.allDayText,
        view: I.viewApi
      };
      return m(yI, { hookProps: S, classNames: N.allDayClassNames, content: N.allDayContent, defaultContent: Bz, didMount: N.allDayDidMount, willUnmount: N.allDayWillUnmount }, function(i, C, w, E) {
        return m("td", { ref: i, headers: g + " " + D, className: ["fc-list-event-time"].concat(C).join(" ") }, E);
      });
    }
    return m("td", { className: "fc-list-event-time" }, u);
  }
  return null;
}
function Bz(M) {
  return M.text;
}
var Pz = function(M) {
  EM(A, M);
  function A() {
    var I = M !== null && M.apply(this, arguments) || this;
    return I.computeDateVars = UM(Xz), I.eventStoreToSegs = UM(I._eventStoreToSegs), I.state = {
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
    ], t = this.computeDateVars(D.dateProfile), j = t.dayDates, u = t.dayRanges, S = this.eventStoreToSegs(D.eventStore, D.eventUiBases, u);
    return m($N, { viewSpec: N.viewSpec, elRef: this.setRootEl }, function(i, C) {
      return m(
        "div",
        { ref: i, className: L.concat(C).join(" ") },
        m(AC, { liquid: !D.isHeightAuto, overflowX: D.isHeightAuto ? "visible" : "hidden", overflowY: D.isHeightAuto ? "visible" : "auto" }, S.length > 0 ? I.renderSegList(S, j) : I.renderEmptyMessage())
      );
    });
  }, A.prototype.renderEmptyMessage = function() {
    var I = this.context, g = I.options, D = I.viewApi, N = {
      text: g.noEventsText,
      view: D
    };
    return m(yI, { hookProps: N, classNames: g.noEventsClassNames, content: g.noEventsContent, defaultContent: Fz, didMount: g.noEventsDidMount, willUnmount: g.noEventsWillUnmount }, function(L, t, j, u) {
      return m(
        "div",
        { className: ["fc-list-empty"].concat(t).join(" "), ref: L },
        m("div", { className: "fc-list-empty-cushion", ref: j }, u)
      );
    });
  }, A.prototype.renderSegList = function(I, g) {
    var D = this.context, N = D.theme, L = D.options, t = this.state, j = t.timeHeaderId, u = t.eventHeaderId, S = t.dateHeaderIdRoot, i = Rz(I);
    return m(Rj, { unit: "day" }, function(C, w) {
      for (var E = [], x = 0; x < i.length; x += 1) {
        var n = i[x];
        if (n) {
          var a = yL(g[x]), z = S + "-" + a;
          E.push(m(vz, { key: a, cellId: z, dayDate: g[x], todayRange: w })), n = ce(n, L.eventOrder);
          for (var d = 0, Y = n; d < Y.length; d++) {
            var h = Y[d];
            E.push(m(Jz, U({ key: a + ":" + h.eventRange.instance.instanceId, seg: h, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, timeHeaderId: j, eventHeaderId: u, dateHeaderId: z }, Og(h, w, C))));
          }
        }
      }
      return m(
        "table",
        { className: "fc-list-table " + N.getClass("table") },
        m(
          "thead",
          null,
          m(
            "tr",
            null,
            m("th", { scope: "col", id: j }, L.timeHint),
            m("th", { scope: "col", "aria-hidden": !0 }),
            m("th", { scope: "col", id: u }, L.eventHint)
          )
        ),
        m("tbody", null, E)
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
    var D = this.context.dateEnv, N = this.context.options.nextDayThreshold, L = I.range, t = I.def.allDay, j, u, S, i = [];
    for (j = 0; j < g.length; j += 1)
      if (u = fg(L, g[j]), u && (S = {
        component: this,
        eventRange: I,
        start: u.start,
        end: u.end,
        isStart: I.isStart && u.start.valueOf() === L.start.valueOf(),
        isEnd: I.isEnd && u.end.valueOf() === L.end.valueOf(),
        dayIndex: j
      }, i.push(S), !S.isEnd && !t && j + 1 < g.length && L.end < D.add(g[j + 1].start, N))) {
        S.end = L.end, S.isEnd = !0;
        break;
      }
    return i;
  }, A;
}(tg);
function Fz(M) {
  return M.text;
}
function Xz(M) {
  for (var A = VM(M.renderRange.start), I = M.renderRange.end, g = [], D = []; A < I; )
    g.push(A), D.push({
      start: A,
      end: IA(A, 1)
    }), A = IA(A, 1);
  return { dayDates: g, dayRanges: D };
}
function Rz(M) {
  var A = [], I, g;
  for (I = 0; I < M.length; I += 1)
    g = M[I], (A[g.dayIndex] || (A[g.dayIndex] = [])).push(g);
  return A;
}
var Hz = {
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
var _z = aI({
  optionRefiners: Hz,
  views: {
    list: {
      component: Pz,
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
const eC = TI("GoogleCalendarStore", {
  state: () => ({
    id: null,
    events: null,
    upcomingEvents: null,
    calendarIds: null
  }),
  actions: {}
}), $z = {
  key: 0,
  class: "title"
}, qz = {
  key: 1,
  class: "description"
}, Kz = ["id"], MY = /* @__PURE__ */ v({
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
    eC();
    const t = jM.create().toString();
    return PM(() => {
      let j = document.getElementById(t), u = [], S = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["calendar-ids"] : Array();
      (!S || !S.length) && (S = TA.googleCalendarIds), S.map(function(x) {
        let n = { googleCalendarId: x.trim(), className: "gcal-event" };
        u == null || u.push(n);
      });
      let i = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["display-style"] : null;
      i || (i = TA.initialView);
      const C = I && (I == null ? void 0 : I.value) ? I == null ? void 0 : I.value["api-key"] : null;
      let w = C || TA.googleApiKey;
      new Dz(j, {
        plugins: [Ez, Qz, _z],
        googleCalendarApiKey: w,
        eventSources: u,
        initialView: i
      }).render();
    }), (j, u) => (T(), c("div", {
      class: F(e(D))
    }, [
      e(N) ? (T(), c("div", $z, P(e(N)), 1)) : B("", !0),
      e(L) ? (T(), c("div", qz, P(e(L)), 1)) : B("", !0),
      s("div", {
        id: e(t),
        class: "reder-target"
      }, null, 8, Kz)
    ], 2));
  }
});
const AY = /* @__PURE__ */ FM(MY, [["__scopeId", "data-v-22801c8c"]]), sW = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CollectionManager: Lo,
  ItemManager: uo,
  EntityTemplateManager: eo,
  FormTemplateManager: Eo,
  GoogleCalendar: AY,
  useGoogleCalendarStore: eC
}, Symbol.toStringTag, { value: "Module" })), IY = (M, A) => {
  var g;
  const I = Di();
  return TE(
    () => {
      I.value = M();
    },
    {
      ...A,
      flush: (g = A == null ? void 0 : A.flush) != null ? g : "sync"
    }
  ), xE(I);
}, gY = (M) => y(
  () => M.value === "center" ? "justify-content-center" : M.value === "end" ? "justify-content-end" : "justify-content-start"
), sL = (M, A) => Object.keys(M).filter((I) => !A.includes(I)).reduce((I, g) => ({ ...I, [g]: M[g] }), {}), JI = () => ({ enumerable: !0, configurable: !1, writable: !1 }), qN = (M) => Array.isArray(M) ? M.map((A) => qN(A)) : M instanceof Date ? new Date(M.getTime()) : M && typeof M == "object" ? Object.getOwnPropertyNames(M).reduce((A, I) => {
  var g;
  return Object.defineProperty(A, I, (g = Object.getOwnPropertyDescriptor(M, I)) != null ? g : {}), A[I] = qN(M[I]), A;
}, Object.create(Object.getPrototypeOf(M))) : M, gj = (M) => new Promise((A) => A(qN(M)));
class cL {
  constructor(A, I = {}) {
    BM(this, "cancelable", !0);
    BM(this, "componentId", null);
    BM(this, "defaultPrevented", !1);
    BM(this, "nativeEvent", null);
    BM(this, "preventDefault");
    BM(this, "relatedTarget", null);
    BM(this, "target", null);
    BM(this, "eventType", "");
    BM(this, "vueTarget", null);
    if (!A)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, cL.Defaults, this.constructor.Defaults, I, { eventType: A }), Object.defineProperties(this, {
      type: JI(),
      cancelable: JI(),
      nativeEvent: JI(),
      target: JI(),
      relatedTarget: JI(),
      vueTarget: JI(),
      componentId: JI()
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
const DY = (M) => M !== null && typeof M == "object", CC = (M) => /^[0-9]*\.?[0-9]+$/.test(String(M)), NY = (M) => Object.prototype.toString.call(M) === "[object Object]", wC = /_/g, EC = /([a-z])([A-Z])/g, LY = /(\s|^)(\w)/g, tY = /(\s|^)(\w)/, zN = /\s+/, jY = /^#/, uY = /^#[A-Za-z]+[\w\-:.]*$/, Dj = (M, A = 2) => typeof M == "string" ? M : M == null ? "" : Array.isArray(M) || NY(M) && M.toString === Object.prototype.toString ? JSON.stringify(M, null, A) : String(M), DS = (M) => M.replace(wC, " ").replace(EC, (A, I, g) => `${I} ${g}`).replace(tY, (A, I, g) => I + g.toUpperCase()), NS = (M) => M.replace(wC, " ").replace(EC, (A, I, g) => `${I} ${g}`).replace(LY, (A, I, g) => I + g.toUpperCase()), SY = (M) => {
  const A = M.trim();
  return A.charAt(0).toUpperCase() + A.slice(1);
}, xt = (M) => `\\${M}`, iY = (M) => {
  const A = Dj(M), { length: I } = A, g = A.charCodeAt(0);
  return A.split("").reduce((D, N, L) => {
    const t = A.charCodeAt(L);
    return t === 0 ? `${D}\uFFFD` : t === 127 || t >= 1 && t <= 31 || L === 0 && t >= 48 && t <= 57 || L === 1 && t >= 48 && t <= 57 && g === 45 ? D + xt(`${t.toString(16)} `) : L === 0 && t === 45 && I === 1 ? D + xt(N) : t >= 128 || t === 45 || t === 95 || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? D + N : D + xt(N);
  }, "");
}, TC = typeof window < "u", eY = typeof document < "u", CY = typeof navigator < "u", wY = TC && eY && CY, xC = typeof window < "u", aC = typeof document < "u", EY = typeof Element < "u", yC = typeof navigator < "u", zL = xC && aC && yC, HI = xC ? window : {}, YL = aC ? document : {}, nC = yC ? navigator : {}, oC = (nC.userAgent || "").toLowerCase();
oC.indexOf("jsdom") > 0;
/msie|trident/.test(oC);
(() => {
  let M = !1;
  if (zL)
    try {
      const A = {
        get passive() {
          return M = !0, M;
        }
      };
      HI.addEventListener("test", A, A), HI.removeEventListener("test", A, A);
    } catch {
      M = !1;
    }
  return M;
})();
zL && ("ontouchstart" in YL.documentElement || nC.maxTouchPoints > 0);
zL && Boolean(HI.PointerEvent || HI.MSPointerEvent);
zL && "IntersectionObserver" in HI && "IntersectionObserverEntry" in HI && "intersectionRatio" in HI.IntersectionObserverEntry.prototype;
const rA = EY ? Element.prototype : void 0, TY = (rA == null ? void 0 : rA.matches) || (rA == null ? void 0 : rA.msMatchesSelector) || (rA == null ? void 0 : rA.webkitMatchesSelector), qA = (M) => !!(M && M.nodeType === Node.ELEMENT_NODE), xY = (M) => qA(M) ? M.getBoundingClientRect() : null, aY = (M = []) => {
  const { activeElement: A } = document;
  return A && !M.some((I) => I === A) ? A : null;
}, yY = (M) => qA(M) && M === aY(), nY = (M, A = {}) => {
  try {
    M.focus(A);
  } catch (I) {
    console.error(I);
  }
  return yY(M);
}, oY = (M, A) => A && qA(M) && M.getAttribute(A) || null, lY = (M) => {
  if (oY(M, "display") === "none")
    return !1;
  const A = xY(M);
  return !!(A && A.height > 0 && A.width > 0);
}, lA = (M, A) => !M || M(A).filter((I) => I.type !== aE).length < 1, lC = (M, A) => (qA(A) ? A : YL).querySelector(M) || null, sY = (M, A) => Array.from([(qA(A) ? A : YL).querySelectorAll(M)]), Hj = (M, A) => A && qA(M) ? M.getAttribute(A) : null, cY = (M) => YL.getElementById(/^#/.test(M) ? M.slice(1) : M) || null, zY = (M, A, I) => {
  A && qA(M) && M.setAttribute(A, I);
}, YY = (M, A) => {
  A && qA(M) && M.removeAttribute(A);
}, rY = (M, A) => Dj(M).toLowerCase() === Dj(A).toLowerCase(), DN = TC ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((M) => setTimeout(M, 16)) : (M) => setTimeout(M, 0), sC = (M, A) => qA(M) ? TY.call(M, A) : !1, dY = (rA == null ? void 0 : rA.closest) || function(M) {
  let A = this;
  if (!A)
    return null;
  do {
    if (sC(A, M))
      return A;
    A = A.parentElement || A.parentNode;
  } while (A !== null && A.nodeType === Node.ELEMENT_NODE);
  return null;
}, LS = (M, A, I = !1) => {
  if (!qA(A))
    return null;
  const g = dY.call(A, M);
  return I ? g : g === A ? null : g;
}, rL = (M, A, I) => A.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((g, D) => (g[M ? `${M}${D.charAt(0).toUpperCase() + D.slice(1)}` : D] = I, g), /* @__PURE__ */ Object.create(null)), cC = (M, A, I, g = I) => Object.keys(A).reduce((D, N) => (M[N] && D.push(
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
}, Jg = (M, A = NaN) => Number.isInteger(M) ? M : A, SD = (M, A = NaN) => {
  const I = Number.parseInt(M, 10);
  return Number.isNaN(I) ? A : I;
}, zC = (M, A = NaN) => {
  const I = Number.parseFloat(M.toString());
  return Number.isNaN(I) ? A : I;
}, tS = (M, A) => A + (M ? SY(M) : ""), _j = (M, A) => (Array.isArray(A) ? A.slice() : Object.keys(A)).reduce(
  (I, g) => (I[g] = M[g], I),
  {}
), UY = (M) => typeof M == "boolean" ? M : M === "" ? !0 : M === "true", bD = (M) => !!(M.href || M.to);
function l(M) {
  return IY(() => M.value === void 0 ? void 0 : UY(M.value));
}
const YC = Symbol(), rC = {
  items: fA([]),
  reset() {
    this.items = fA([]);
  }
}, mY = (M) => {
  M.provide(YC, rC);
}, OY = () => {
  const M = tA(YC);
  return M || rC;
}, MA = (M, A, I) => {
  PM(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.addEventListener(A, I);
  }), aj(() => {
    var g;
    (g = M == null ? void 0 : M.value) == null || g.removeEventListener(A, I);
  });
}, dC = (M) => y(() => ({
  "form-check": !M.plain && !M.button,
  "form-check-inline": M.inline === !0,
  "form-switch": M.switch === !0,
  [`form-control-${M.size}`]: M.size !== void 0 && M.size !== "md"
})), UC = (M) => y(() => ({
  "form-check-input": !M.plain && !M.button,
  "is-valid": M.state === !0,
  "is-invalid": M.state === !1,
  "btn-check": M.button === !0
})), mC = (M) => y(() => ({
  "form-check-label": !M.plain && !M.button,
  btn: M.button === !0,
  [`btn-${M.buttonVariant}`]: M.button === !0 && M.buttonVariant !== void 0,
  [`btn-${M.size}`]: M.button && M.size && M.size !== "md"
})), OC = (M) => y(() => ({
  "aria-invalid": dL(M.ariaInvalid, M.state),
  "aria-required": M.required === !0 ? !0 : void 0
})), hC = (M) => y(() => ({
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
}), bC = (M, A) => typeof M == "string" ? {
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
}, WC = (M, A, I, g, D) => ({
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
}), NA = (M, A) => y(() => (M == null ? void 0 : M.value) || gI(A)), kC = {
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
}, pC = (M, A) => {
  const I = DM();
  let g = null, D = !0;
  const N = NA(o(M, "id"), "input"), L = (x, n, a = !1) => (x = String(x), typeof M.formatter == "function" && (!M.lazyFormatter || a) ? (D = !1, M.formatter(x, n)) : x), t = (x) => M.trim ? x.trim() : M.number ? Number.parseFloat(x) : x, j = () => {
    DI(() => {
      var x;
      M.autofocus && ((x = I.value) == null || x.focus());
    });
  };
  PM(j), PM(() => {
    I.value && (I.value.value = M.modelValue);
  }), yj(j);
  const u = y(
    () => {
      var x;
      return dL(M.ariaInvalid, (x = M.state) != null ? x : void 0);
    }
  ), S = (x) => {
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
    computedAriaInvalid: u,
    onInput: S,
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
})) : [], hY = ["id"], QC = Symbol(), bY = /* @__PURE__ */ v({
  __name: "BAccordion",
  props: {
    flush: { default: !1 },
    free: { default: !1 },
    id: null
  },
  setup(M) {
    const A = M, I = NA(o(A, "id"), "accordion"), g = l(o(A, "flush")), D = l(o(A, "free")), N = y(() => ({
      "accordion-flush": g.value
    }));
    return D.value || NI(QC, I.value), (L, t) => (T(), c("div", {
      id: e(I),
      class: F(["accordion", e(N)])
    }, [
      Q(L.$slots, "default")
    ], 10, hY));
  }
});
var eA = "top", sA = "bottom", cA = "right", CA = "left", UL = "auto", qg = [eA, sA, cA, CA], Ag = "start", Vg = "end", vC = "clippingParents", qj = "viewport", lg = "popper", GC = "reference", Lj = /* @__PURE__ */ qg.reduce(function(M, A) {
  return M.concat([A + "-" + Ag, A + "-" + Vg]);
}, []), Kj = /* @__PURE__ */ [].concat(qg, [UL]).reduce(function(M, A) {
  return M.concat([A, A + "-" + Ag, A + "-" + Vg]);
}, []), fC = "beforeRead", JC = "read", VC = "afterRead", ZC = "beforeMain", BC = "main", PC = "afterMain", FC = "beforeWrite", XC = "write", RC = "afterWrite", HC = [fC, JC, VC, ZC, BC, PC, FC, XC, RC];
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
function Ig(M) {
  var A = bA(M).Element;
  return M instanceof A || M instanceof Element;
}
function UA(M) {
  var A = bA(M).HTMLElement;
  return M instanceof A || M instanceof HTMLElement;
}
function Mu(M) {
  if (typeof ShadowRoot > "u")
    return !1;
  var A = bA(M).ShadowRoot;
  return M instanceof A || M instanceof ShadowRoot;
}
function WY(M) {
  var A = M.state;
  Object.keys(A.elements).forEach(function(I) {
    var g = A.styles[I] || {}, D = A.attributes[I] || {}, N = A.elements[I];
    !UA(N) || !$A(N) || (Object.assign(N.style, g), Object.keys(D).forEach(function(L) {
      var t = D[L];
      t === !1 ? N.removeAttribute(L) : N.setAttribute(L, t === !0 ? "" : t);
    }));
  });
}
function kY(M) {
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
      var D = A.elements[g], N = A.attributes[g] || {}, L = Object.keys(A.styles.hasOwnProperty(g) ? A.styles[g] : I[g]), t = L.reduce(function(j, u) {
        return j[u] = "", j;
      }, {});
      !UA(D) || !$A(D) || (Object.assign(D.style, t), Object.keys(N).forEach(function(j) {
        D.removeAttribute(j);
      }));
    });
  };
}
const Au = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: WY,
  effect: kY,
  requires: ["computeStyles"]
};
function HA(M) {
  return M.split("-")[0];
}
var _I = Math.max, ML = Math.min, Zg = Math.round;
function tj() {
  var M = navigator.userAgentData;
  return M != null && M.brands ? M.brands.map(function(A) {
    return A.brand + "/" + A.version;
  }).join(" ") : navigator.userAgent;
}
function _C() {
  return !/^((?!chrome|android).)*safari/i.test(tj());
}
function Bg(M, A, I) {
  A === void 0 && (A = !1), I === void 0 && (I = !1);
  var g = M.getBoundingClientRect(), D = 1, N = 1;
  A && UA(M) && (D = M.offsetWidth > 0 && Zg(g.width) / M.offsetWidth || 1, N = M.offsetHeight > 0 && Zg(g.height) / M.offsetHeight || 1);
  var L = Ig(M) ? bA(M) : window, t = L.visualViewport, j = !_C() && I, u = (g.left + (j && t ? t.offsetLeft : 0)) / D, S = (g.top + (j && t ? t.offsetTop : 0)) / N, i = g.width / D, C = g.height / N;
  return {
    width: i,
    height: C,
    top: S,
    right: u + i,
    bottom: S + C,
    left: u,
    x: u,
    y: S
  };
}
function Iu(M) {
  var A = Bg(M), I = M.offsetWidth, g = M.offsetHeight;
  return Math.abs(A.width - I) <= 1 && (I = A.width), Math.abs(A.height - g) <= 1 && (g = A.height), {
    x: M.offsetLeft,
    y: M.offsetTop,
    width: I,
    height: g
  };
}
function $C(M, A) {
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
function pY(M) {
  return ["table", "td", "th"].indexOf($A(M)) >= 0;
}
function kI(M) {
  return ((Ig(M) ? M.ownerDocument : M.document) || window.document).documentElement;
}
function mL(M) {
  return $A(M) === "html" ? M : M.assignedSlot || M.parentNode || (Mu(M) ? M.host : null) || kI(M);
}
function jS(M) {
  return !UA(M) || wI(M).position === "fixed" ? null : M.offsetParent;
}
function QY(M) {
  var A = /firefox/i.test(tj()), I = /Trident/i.test(tj());
  if (I && UA(M)) {
    var g = wI(M);
    if (g.position === "fixed")
      return null;
  }
  var D = mL(M);
  for (Mu(D) && (D = D.host); UA(D) && ["html", "body"].indexOf($A(D)) < 0; ) {
    var N = wI(D);
    if (N.transform !== "none" || N.perspective !== "none" || N.contain === "paint" || ["transform", "perspective"].indexOf(N.willChange) !== -1 || A && N.willChange === "filter" || A && N.filter && N.filter !== "none")
      return D;
    D = D.parentNode;
  }
  return null;
}
function VD(M) {
  for (var A = bA(M), I = jS(M); I && pY(I) && wI(I).position === "static"; )
    I = jS(I);
  return I && ($A(I) === "html" || $A(I) === "body" && wI(I).position === "static") ? A : I || QY(M) || A;
}
function gu(M) {
  return ["top", "bottom"].indexOf(M) >= 0 ? "x" : "y";
}
function cD(M, A, I) {
  return _I(M, ML(A, I));
}
function vY(M, A, I) {
  var g = cD(M, A, I);
  return g > I ? I : g;
}
function qC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function KC(M) {
  return Object.assign({}, qC(), M);
}
function Mw(M, A) {
  return A.reduce(function(I, g) {
    return I[g] = M, I;
  }, {});
}
var GY = function(A, I) {
  return A = typeof A == "function" ? A(Object.assign({}, I.rects, {
    placement: I.placement
  })) : A, KC(typeof A != "number" ? A : Mw(A, qg));
};
function fY(M) {
  var A, I = M.state, g = M.name, D = M.options, N = I.elements.arrow, L = I.modifiersData.popperOffsets, t = HA(I.placement), j = gu(t), u = [CA, cA].indexOf(t) >= 0, S = u ? "height" : "width";
  if (!(!N || !L)) {
    var i = GY(D.padding, I), C = Iu(N), w = j === "y" ? eA : CA, E = j === "y" ? sA : cA, x = I.rects.reference[S] + I.rects.reference[j] - L[j] - I.rects.popper[S], n = L[j] - I.rects.reference[j], a = VD(N), z = a ? j === "y" ? a.clientHeight || 0 : a.clientWidth || 0 : 0, d = x / 2 - n / 2, Y = i[w], h = z - C[S] - i[E], k = z / 2 - C[S] / 2 + d, G = cD(Y, k, h), r = j;
    I.modifiersData[g] = (A = {}, A[r] = G, A.centerOffset = G - k, A);
  }
}
function JY(M) {
  var A = M.state, I = M.options, g = I.element, D = g === void 0 ? "[data-popper-arrow]" : g;
  D != null && (typeof D == "string" && (D = A.elements.popper.querySelector(D), !D) || !$C(A.elements.popper, D) || (A.elements.arrow = D));
}
const Aw = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: fY,
  effect: JY,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Pg(M) {
  return M.split("-")[1];
}
var VY = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ZY(M) {
  var A = M.x, I = M.y, g = window, D = g.devicePixelRatio || 1;
  return {
    x: Zg(A * D) / D || 0,
    y: Zg(I * D) / D || 0
  };
}
function uS(M) {
  var A, I = M.popper, g = M.popperRect, D = M.placement, N = M.variation, L = M.offsets, t = M.position, j = M.gpuAcceleration, u = M.adaptive, S = M.roundOffsets, i = M.isFixed, C = L.x, w = C === void 0 ? 0 : C, E = L.y, x = E === void 0 ? 0 : E, n = typeof S == "function" ? S({
    x: w,
    y: x
  }) : {
    x: w,
    y: x
  };
  w = n.x, x = n.y;
  var a = L.hasOwnProperty("x"), z = L.hasOwnProperty("y"), d = CA, Y = eA, h = window;
  if (u) {
    var k = VD(I), G = "clientHeight", r = "clientWidth";
    if (k === bA(I) && (k = kI(I), wI(k).position !== "static" && t === "absolute" && (G = "scrollHeight", r = "scrollWidth")), k = k, D === eA || (D === CA || D === cA) && N === Vg) {
      Y = sA;
      var b = i && k === h && h.visualViewport ? h.visualViewport.height : k[G];
      x -= b - g.height, x *= j ? 1 : -1;
    }
    if (D === CA || (D === eA || D === sA) && N === Vg) {
      d = cA;
      var Z = i && k === h && h.visualViewport ? h.visualViewport.width : k[r];
      w -= Z - g.width, w *= j ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: t
  }, u && VY), AM = S === !0 ? ZY({
    x: w,
    y: x
  }) : {
    x: w,
    y: x
  };
  if (w = AM.x, x = AM.y, j) {
    var LM;
    return Object.assign({}, R, (LM = {}, LM[Y] = z ? "0" : "", LM[d] = a ? "0" : "", LM.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + x + "px)" : "translate3d(" + w + "px, " + x + "px, 0)", LM));
  }
  return Object.assign({}, R, (A = {}, A[Y] = z ? x + "px" : "", A[d] = a ? w + "px" : "", A.transform = "", A));
}
function BY(M) {
  var A = M.state, I = M.options, g = I.gpuAcceleration, D = g === void 0 ? !0 : g, N = I.adaptive, L = N === void 0 ? !0 : N, t = I.roundOffsets, j = t === void 0 ? !0 : t, u = {
    placement: HA(A.placement),
    variation: Pg(A.placement),
    popper: A.elements.popper,
    popperRect: A.rects.popper,
    gpuAcceleration: D,
    isFixed: A.options.strategy === "fixed"
  };
  A.modifiersData.popperOffsets != null && (A.styles.popper = Object.assign({}, A.styles.popper, uS(Object.assign({}, u, {
    offsets: A.modifiersData.popperOffsets,
    position: A.options.strategy,
    adaptive: L,
    roundOffsets: j
  })))), A.modifiersData.arrow != null && (A.styles.arrow = Object.assign({}, A.styles.arrow, uS(Object.assign({}, u, {
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
  fn: BY,
  data: {}
};
var NN = {
  passive: !0
};
function PY(M) {
  var A = M.state, I = M.instance, g = M.options, D = g.scroll, N = D === void 0 ? !0 : D, L = g.resize, t = L === void 0 ? !0 : L, j = bA(A.elements.popper), u = [].concat(A.scrollParents.reference, A.scrollParents.popper);
  return N && u.forEach(function(S) {
    S.addEventListener("scroll", I.update, NN);
  }), t && j.addEventListener("resize", I.update, NN), function() {
    N && u.forEach(function(S) {
      S.removeEventListener("scroll", I.update, NN);
    }), t && j.removeEventListener("resize", I.update, NN);
  };
}
const Nu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: PY,
  data: {}
};
var FY = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function YN(M) {
  return M.replace(/left|right|bottom|top/g, function(A) {
    return FY[A];
  });
}
var XY = {
  start: "end",
  end: "start"
};
function SS(M) {
  return M.replace(/start|end/g, function(A) {
    return XY[A];
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
  return Bg(kI(M)).left + Lu(M).scrollLeft;
}
function RY(M, A) {
  var I = bA(M), g = kI(M), D = I.visualViewport, N = g.clientWidth, L = g.clientHeight, t = 0, j = 0;
  if (D) {
    N = D.width, L = D.height;
    var u = _C();
    (u || !u && A === "fixed") && (t = D.offsetLeft, j = D.offsetTop);
  }
  return {
    width: N,
    height: L,
    x: t + tu(M),
    y: j
  };
}
function HY(M) {
  var A, I = kI(M), g = Lu(M), D = (A = M.ownerDocument) == null ? void 0 : A.body, N = _I(I.scrollWidth, I.clientWidth, D ? D.scrollWidth : 0, D ? D.clientWidth : 0), L = _I(I.scrollHeight, I.clientHeight, D ? D.scrollHeight : 0, D ? D.clientHeight : 0), t = -g.scrollLeft + tu(M), j = -g.scrollTop;
  return wI(D || I).direction === "rtl" && (t += _I(I.clientWidth, D ? D.clientWidth : 0) - N), {
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
function Iw(M) {
  return ["html", "body", "#document"].indexOf($A(M)) >= 0 ? M.ownerDocument.body : UA(M) && ju(M) ? M : Iw(mL(M));
}
function zD(M, A) {
  var I;
  A === void 0 && (A = []);
  var g = Iw(M), D = g === ((I = M.ownerDocument) == null ? void 0 : I.body), N = bA(g), L = D ? [N].concat(N.visualViewport || [], ju(g) ? g : []) : g, t = A.concat(L);
  return D ? t : t.concat(zD(mL(L)));
}
function jj(M) {
  return Object.assign({}, M, {
    left: M.x,
    top: M.y,
    right: M.x + M.width,
    bottom: M.y + M.height
  });
}
function _Y(M, A) {
  var I = Bg(M, !1, A === "fixed");
  return I.top = I.top + M.clientTop, I.left = I.left + M.clientLeft, I.bottom = I.top + M.clientHeight, I.right = I.left + M.clientWidth, I.width = M.clientWidth, I.height = M.clientHeight, I.x = I.left, I.y = I.top, I;
}
function iS(M, A, I) {
  return A === qj ? jj(RY(M, I)) : Ig(A) ? _Y(A, I) : jj(HY(kI(M)));
}
function $Y(M) {
  var A = zD(mL(M)), I = ["absolute", "fixed"].indexOf(wI(M).position) >= 0, g = I && UA(M) ? VD(M) : M;
  return Ig(g) ? A.filter(function(D) {
    return Ig(D) && $C(D, g) && $A(D) !== "body";
  }) : [];
}
function qY(M, A, I, g) {
  var D = A === "clippingParents" ? $Y(M) : [].concat(A), N = [].concat(D, [I]), L = N[0], t = N.reduce(function(j, u) {
    var S = iS(M, u, g);
    return j.top = _I(S.top, j.top), j.right = ML(S.right, j.right), j.bottom = ML(S.bottom, j.bottom), j.left = _I(S.left, j.left), j;
  }, iS(M, L, g));
  return t.width = t.right - t.left, t.height = t.bottom - t.top, t.x = t.left, t.y = t.top, t;
}
function gw(M) {
  var A = M.reference, I = M.element, g = M.placement, D = g ? HA(g) : null, N = g ? Pg(g) : null, L = A.x + A.width / 2 - I.width / 2, t = A.y + A.height / 2 - I.height / 2, j;
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
  var u = D ? gu(D) : null;
  if (u != null) {
    var S = u === "y" ? "height" : "width";
    switch (N) {
      case Ag:
        j[u] = j[u] - (A[S] / 2 - I[S] / 2);
        break;
      case Vg:
        j[u] = j[u] + (A[S] / 2 - I[S] / 2);
        break;
    }
  }
  return j;
}
function Fg(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = g === void 0 ? M.placement : g, N = I.strategy, L = N === void 0 ? M.strategy : N, t = I.boundary, j = t === void 0 ? vC : t, u = I.rootBoundary, S = u === void 0 ? qj : u, i = I.elementContext, C = i === void 0 ? lg : i, w = I.altBoundary, E = w === void 0 ? !1 : w, x = I.padding, n = x === void 0 ? 0 : x, a = KC(typeof n != "number" ? n : Mw(n, qg)), z = C === lg ? GC : lg, d = M.rects.popper, Y = M.elements[E ? z : C], h = qY(Ig(Y) ? Y : Y.contextElement || kI(M.elements.popper), j, S, L), k = Bg(M.elements.reference), G = gw({
    reference: k,
    element: d,
    strategy: "absolute",
    placement: D
  }), r = jj(Object.assign({}, d, G)), b = C === lg ? r : k, Z = {
    top: h.top - b.top + a.top,
    bottom: b.bottom - h.bottom + a.bottom,
    left: h.left - b.left + a.left,
    right: b.right - h.right + a.right
  }, R = M.modifiersData.offset;
  if (C === lg && R) {
    var AM = R[D];
    Object.keys(Z).forEach(function(LM) {
      var IM = [cA, sA].indexOf(LM) >= 0 ? 1 : -1, oM = [eA, sA].indexOf(LM) >= 0 ? "y" : "x";
      Z[LM] += AM[oM] * IM;
    });
  }
  return Z;
}
function KY(M, A) {
  A === void 0 && (A = {});
  var I = A, g = I.placement, D = I.boundary, N = I.rootBoundary, L = I.padding, t = I.flipVariations, j = I.allowedAutoPlacements, u = j === void 0 ? Kj : j, S = Pg(g), i = S ? t ? Lj : Lj.filter(function(E) {
    return Pg(E) === S;
  }) : qg, C = i.filter(function(E) {
    return u.indexOf(E) >= 0;
  });
  C.length === 0 && (C = i);
  var w = C.reduce(function(E, x) {
    return E[x] = Fg(M, {
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
function Mr(M) {
  if (HA(M) === UL)
    return [];
  var A = YN(M);
  return [SS(M), A, SS(A)];
}
function Ar(M) {
  var A = M.state, I = M.options, g = M.name;
  if (!A.modifiersData[g]._skip) {
    for (var D = I.mainAxis, N = D === void 0 ? !0 : D, L = I.altAxis, t = L === void 0 ? !0 : L, j = I.fallbackPlacements, u = I.padding, S = I.boundary, i = I.rootBoundary, C = I.altBoundary, w = I.flipVariations, E = w === void 0 ? !0 : w, x = I.allowedAutoPlacements, n = A.options.placement, a = HA(n), z = a === n, d = j || (z || !E ? [YN(n)] : Mr(n)), Y = [n].concat(d).reduce(function(zM, J) {
      return zM.concat(HA(J) === UL ? KY(A, {
        placement: J,
        boundary: S,
        rootBoundary: i,
        padding: u,
        flipVariations: E,
        allowedAutoPlacements: x
      }) : J);
    }, []), h = A.rects.reference, k = A.rects.popper, G = /* @__PURE__ */ new Map(), r = !0, b = Y[0], Z = 0; Z < Y.length; Z++) {
      var R = Y[Z], AM = HA(R), LM = Pg(R) === Ag, IM = [eA, sA].indexOf(AM) >= 0, oM = IM ? "width" : "height", SM = Fg(A, {
        placement: R,
        boundary: S,
        rootBoundary: i,
        altBoundary: C,
        padding: u
      }), tM = IM ? LM ? cA : CA : LM ? sA : eA;
      h[oM] > k[oM] && (tM = YN(tM));
      var yM = YN(tM), dM = [];
      if (N && dM.push(SM[AM] <= 0), t && dM.push(SM[tM] <= 0, SM[yM] <= 0), dM.every(function(zM) {
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
const Dw = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ar,
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
function Ir(M) {
  var A = M.state, I = M.name, g = A.rects.reference, D = A.rects.popper, N = A.modifiersData.preventOverflow, L = Fg(A, {
    elementContext: "reference"
  }), t = Fg(A, {
    altBoundary: !0
  }), j = eS(L, g), u = eS(t, D, N), S = CS(j), i = CS(u);
  A.modifiersData[I] = {
    referenceClippingOffsets: j,
    popperEscapeOffsets: u,
    isReferenceHidden: S,
    hasPopperEscaped: i
  }, A.attributes.popper = Object.assign({}, A.attributes.popper, {
    "data-popper-reference-hidden": S,
    "data-popper-escaped": i
  });
}
const Nw = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ir
};
function gr(M, A, I) {
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
function Dr(M) {
  var A = M.state, I = M.options, g = M.name, D = I.offset, N = D === void 0 ? [0, 0] : D, L = Kj.reduce(function(S, i) {
    return S[i] = gr(i, A.rects, N), S;
  }, {}), t = L[A.placement], j = t.x, u = t.y;
  A.modifiersData.popperOffsets != null && (A.modifiersData.popperOffsets.x += j, A.modifiersData.popperOffsets.y += u), A.modifiersData[g] = L;
}
const Lw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dr
};
function Nr(M) {
  var A = M.state, I = M.name;
  A.modifiersData[I] = gw({
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
  fn: Nr,
  data: {}
};
function Lr(M) {
  return M === "x" ? "y" : "x";
}
function tr(M) {
  var A = M.state, I = M.options, g = M.name, D = I.mainAxis, N = D === void 0 ? !0 : D, L = I.altAxis, t = L === void 0 ? !1 : L, j = I.boundary, u = I.rootBoundary, S = I.altBoundary, i = I.padding, C = I.tether, w = C === void 0 ? !0 : C, E = I.tetherOffset, x = E === void 0 ? 0 : E, n = Fg(A, {
    boundary: j,
    rootBoundary: u,
    padding: i,
    altBoundary: S
  }), a = HA(A.placement), z = Pg(A.placement), d = !z, Y = gu(a), h = Lr(Y), k = A.modifiersData.popperOffsets, G = A.rects.reference, r = A.rects.popper, b = typeof x == "function" ? x(Object.assign({}, A.rects, {
    placement: A.placement
  })) : x, Z = typeof b == "number" ? {
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
      var LM, IM = Y === "y" ? eA : CA, oM = Y === "y" ? sA : cA, SM = Y === "y" ? "height" : "width", tM = k[Y], yM = tM + n[IM], dM = tM - n[oM], bM = w ? -r[SM] / 2 : 0, vM = z === Ag ? G[SM] : r[SM], fM = z === Ag ? -r[SM] : -G[SM], iM = A.elements.arrow, zM = w && iM ? Iu(iM) : {
        width: 0,
        height: 0
      }, J = A.modifiersData["arrow#persistent"] ? A.modifiersData["arrow#persistent"].padding : qC(), _ = J[IM], $ = J[oM], NM = cD(0, G[SM], zM[SM]), hM = d ? G[SM] / 2 - bM - NM - _ - Z.mainAxis : vM - NM - _ - Z.mainAxis, ZM = d ? -G[SM] / 2 + bM + NM + $ + Z.mainAxis : fM + NM + $ + Z.mainAxis, nM = A.elements.arrow && VD(A.elements.arrow), p = nM ? Y === "y" ? nM.clientTop || 0 : nM.clientLeft || 0 : 0, q = (LM = R == null ? void 0 : R[Y]) != null ? LM : 0, YM = tM + hM - q - p, H = tM + ZM - q, gA = cD(w ? ML(yM, YM) : yM, tM, w ? _I(dM, H) : dM);
      k[Y] = gA, AM[Y] = gA - tM;
    }
    if (t) {
      var QM, gD = Y === "x" ? eA : CA, KA = Y === "x" ? sA : cA, vI = k[h], XD = h === "y" ? "height" : "width", yu = vI + n[gD], nu = vI - n[KA], GL = [eA, CA].indexOf(a) !== -1, ou = (QM = R == null ? void 0 : R[h]) != null ? QM : 0, lu = GL ? yu : vI - G[XD] - r[XD] - ou + Z.altAxis, su = GL ? vI + G[XD] + r[XD] - ou - Z.altAxis : nu, cu = w && GL ? vY(lu, vI, su) : cD(w ? lu : yu, vI, w ? su : nu);
      k[h] = cu, AM[h] = cu - vI;
    }
    A.modifiersData[g] = AM;
  }
}
const tw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tr,
  requiresIfExists: ["offset"]
};
function jr(M) {
  return {
    scrollLeft: M.scrollLeft,
    scrollTop: M.scrollTop
  };
}
function ur(M) {
  return M === bA(M) || !UA(M) ? Lu(M) : jr(M);
}
function Sr(M) {
  var A = M.getBoundingClientRect(), I = Zg(A.width) / M.offsetWidth || 1, g = Zg(A.height) / M.offsetHeight || 1;
  return I !== 1 || g !== 1;
}
function ir(M, A, I) {
  I === void 0 && (I = !1);
  var g = UA(A), D = UA(A) && Sr(A), N = kI(A), L = Bg(M, D, I), t = {
    scrollLeft: 0,
    scrollTop: 0
  }, j = {
    x: 0,
    y: 0
  };
  return (g || !g && !I) && (($A(A) !== "body" || ju(N)) && (t = ur(A)), UA(A) ? (j = Bg(A, !0), j.x += A.clientLeft, j.y += A.clientTop) : N && (j.x = tu(N))), {
    x: L.left + t.scrollLeft - j.x,
    y: L.top + t.scrollTop - j.y,
    width: L.width,
    height: L.height
  };
}
function er(M) {
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
function Cr(M) {
  var A = er(M);
  return HC.reduce(function(I, g) {
    return I.concat(A.filter(function(D) {
      return D.phase === g;
    }));
  }, []);
}
function wr(M) {
  var A;
  return function() {
    return A || (A = new Promise(function(I) {
      Promise.resolve().then(function() {
        A = void 0, I(M());
      });
    })), A;
  };
}
function Er(M) {
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
  return function(t, j, u) {
    u === void 0 && (u = N);
    var S = {
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
      state: S,
      setOptions: function(a) {
        var z = typeof a == "function" ? a(S.options) : a;
        x(), S.options = Object.assign({}, N, S.options, z), S.scrollParents = {
          reference: Ig(t) ? zD(t) : t.contextElement ? zD(t.contextElement) : [],
          popper: zD(j)
        };
        var d = Cr(Er([].concat(g, S.options.modifiers)));
        return S.orderedModifiers = d.filter(function(Y) {
          return Y.enabled;
        }), E(), w.update();
      },
      forceUpdate: function() {
        if (!C) {
          var a = S.elements, z = a.reference, d = a.popper;
          if (!!ES(z, d)) {
            S.rects = {
              reference: ir(z, VD(d), S.options.strategy === "fixed"),
              popper: Iu(d)
            }, S.reset = !1, S.placement = S.options.placement, S.orderedModifiers.forEach(function(Z) {
              return S.modifiersData[Z.name] = Object.assign({}, Z.data);
            });
            for (var Y = 0; Y < S.orderedModifiers.length; Y++) {
              if (S.reset === !0) {
                S.reset = !1, Y = -1;
                continue;
              }
              var h = S.orderedModifiers[Y], k = h.fn, G = h.options, r = G === void 0 ? {} : G, b = h.name;
              typeof k == "function" && (S = k({
                state: S,
                options: r,
                name: b,
                instance: w
              }) || S);
            }
          }
        }
      },
      update: wr(function() {
        return new Promise(function(n) {
          w.forceUpdate(), n(S);
        });
      }),
      destroy: function() {
        x(), C = !0;
      }
    };
    if (!ES(t, j))
      return w;
    w.setOptions(u).then(function(n) {
      !C && u.onFirstUpdate && u.onFirstUpdate(n);
    });
    function E() {
      S.orderedModifiers.forEach(function(n) {
        var a = n.name, z = n.options, d = z === void 0 ? {} : z, Y = n.effect;
        if (typeof Y == "function") {
          var h = Y({
            state: S,
            name: a,
            instance: w,
            options: d
          }), k = function() {
          };
          i.push(h || k);
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
var Tr = /* @__PURE__ */ OL(), xr = [Nu, uu, Du, Au], ar = /* @__PURE__ */ OL({
  defaultModifiers: xr
}), yr = [Nu, uu, Du, Au, Lw, Dw, tw, Aw, Nw], Su = /* @__PURE__ */ OL({
  defaultModifiers: yr
});
const jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  popperGenerator: OL,
  detectOverflow: Fg,
  createPopperBase: Tr,
  createPopper: Su,
  createPopperLite: ar,
  top: eA,
  bottom: sA,
  right: cA,
  left: CA,
  auto: UL,
  basePlacements: qg,
  start: Ag,
  end: Vg,
  clippingParents: vC,
  viewport: qj,
  popper: lg,
  reference: GC,
  variationPlacements: Lj,
  placements: Kj,
  beforeRead: fC,
  read: JC,
  afterRead: VC,
  beforeMain: ZC,
  main: BC,
  afterMain: PC,
  beforeWrite: FC,
  write: XC,
  afterWrite: RC,
  modifierPhases: HC,
  applyStyles: Au,
  arrow: Aw,
  computeStyles: Du,
  eventListeners: Nu,
  flip: Dw,
  hide: Nw,
  offset: Lw,
  popperOffsets: uu,
  preventOverflow: tw
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const nr = 1e6, or = 1e3, uj = "transitionend", lr = (M) => M == null ? `${M}` : Object.prototype.toString.call(M).match(/\s([a-z]+)/i)[1].toLowerCase(), sr = (M) => {
  do
    M += Math.floor(Math.random() * nr);
  while (document.getElementById(M));
  return M;
}, uw = (M) => {
  let A = M.getAttribute("data-bs-target");
  if (!A || A === "#") {
    let I = M.getAttribute("href");
    if (!I || !I.includes("#") && !I.startsWith("."))
      return null;
    I.includes("#") && !I.startsWith("#") && (I = `#${I.split("#")[1]}`), A = I && I !== "#" ? I.trim() : null;
  }
  return A;
}, Sw = (M) => {
  const A = uw(M);
  return A && document.querySelector(A) ? A : null;
}, tI = (M) => {
  const A = uw(M);
  return A ? document.querySelector(A) : null;
}, cr = (M) => {
  if (!M)
    return 0;
  let {
    transitionDuration: A,
    transitionDelay: I
  } = window.getComputedStyle(M);
  const g = Number.parseFloat(A), D = Number.parseFloat(I);
  return !g && !D ? 0 : (A = A.split(",")[0], I = I.split(",")[0], (Number.parseFloat(A) + Number.parseFloat(I)) * or);
}, iw = (M) => {
  M.dispatchEvent(new Event(uj));
}, jI = (M) => !M || typeof M != "object" ? !1 : (typeof M.jquery < "u" && (M = M[0]), typeof M.nodeType < "u"), hI = (M) => jI(M) ? M.jquery ? M[0] : M : typeof M == "string" && M.length > 0 ? document.querySelector(M) : null, Kg = (M) => {
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
}, bI = (M) => !M || M.nodeType !== Node.ELEMENT_NODE || M.classList.contains("disabled") ? !0 : typeof M.disabled < "u" ? M.disabled : M.hasAttribute("disabled") && M.getAttribute("disabled") !== "false", ew = (M) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof M.getRootNode == "function") {
    const A = M.getRootNode();
    return A instanceof ShadowRoot ? A : null;
  }
  return M instanceof ShadowRoot ? M : M.parentNode ? ew(M.parentNode) : null;
}, AL = () => {
}, ZD = (M) => {
  M.offsetHeight;
}, Cw = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, nt = [], zr = (M) => {
  document.readyState === "loading" ? (nt.length || document.addEventListener("DOMContentLoaded", () => {
    for (const A of nt)
      A();
  }), nt.push(M)) : M();
}, OA = () => document.documentElement.dir === "rtl", WA = (M) => {
  zr(() => {
    const A = Cw();
    if (A) {
      const I = M.NAME, g = A.fn[I];
      A.fn[I] = M.jQueryInterface, A.fn[I].Constructor = M, A.fn[I].noConflict = () => (A.fn[I] = g, M.jQueryInterface);
    }
  });
}, II = (M) => {
  typeof M == "function" && M();
}, ww = (M, A, I = !0) => {
  if (!I) {
    II(M);
    return;
  }
  const g = 5, D = cr(A) + g;
  let N = !1;
  const L = ({
    target: t
  }) => {
    t === A && (N = !0, A.removeEventListener(uj, L), II(M));
  };
  A.addEventListener(uj, L), setTimeout(() => {
    N || iw(A);
  }, D);
}, iu = (M, A, I, g) => {
  const D = M.length;
  let N = M.indexOf(A);
  return N === -1 ? !I && g ? M[D - 1] : M[0] : (N += I ? 1 : -1, g && (N = (N + D) % D), M[Math.max(0, Math.min(N, D - 1))]);
}, Yr = /[^.]*(?=\..*)\.|.*/, rr = /\..*/, dr = /::\d+$/, ot = {};
let TS = 1;
const Ew = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Ur = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Tw(M, A) {
  return A && `${A}::${TS++}` || M.uidEvent || TS++;
}
function xw(M) {
  const A = Tw(M);
  return M.uidEvent = A, ot[A] = ot[A] || {}, ot[A];
}
function mr(M, A) {
  return function I(g) {
    return eu(g, {
      delegateTarget: M
    }), I.oneOff && X.off(M, g.type, A), A.apply(M, [g]);
  };
}
function Or(M, A, I) {
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
function aw(M, A, I = null) {
  return Object.values(M).find((g) => g.callable === A && g.delegationSelector === I);
}
function yw(M, A, I) {
  const g = typeof A == "string", D = g ? I : A || I;
  let N = nw(M);
  return Ur.has(N) || (N = M), [g, D, N];
}
function xS(M, A, I, g, D) {
  if (typeof A != "string" || !M)
    return;
  let [N, L, t] = yw(A, I, g);
  A in Ew && (L = ((E) => function(x) {
    if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
      return E.call(this, x);
  })(L));
  const j = xw(M), u = j[t] || (j[t] = {}), S = aw(u, L, N ? I : null);
  if (S) {
    S.oneOff = S.oneOff && D;
    return;
  }
  const i = Tw(L, A.replace(Yr, "")), C = N ? Or(M, I, L) : mr(M, L);
  C.delegationSelector = N ? I : null, C.callable = L, C.oneOff = D, C.uidEvent = i, u[i] = C, M.addEventListener(t, C, N);
}
function Sj(M, A, I, g, D) {
  const N = aw(A[I], g, D);
  !N || (M.removeEventListener(I, N, Boolean(D)), delete A[I][N.uidEvent]);
}
function hr(M, A, I, g) {
  const D = A[I] || {};
  for (const N of Object.keys(D))
    if (N.includes(g)) {
      const L = D[N];
      Sj(M, A, I, L.callable, L.delegationSelector);
    }
}
function nw(M) {
  return M = M.replace(rr, ""), Ew[M] || M;
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
    const [D, N, L] = yw(A, I, g), t = L !== A, j = xw(M), u = j[L] || {}, S = A.startsWith(".");
    if (typeof N < "u") {
      if (!Object.keys(u).length)
        return;
      Sj(M, j, L, N, D ? I : null);
      return;
    }
    if (S)
      for (const i of Object.keys(j))
        hr(M, j, i, A.slice(1));
    for (const i of Object.keys(u)) {
      const C = i.replace(dr, "");
      if (!t || A.includes(C)) {
        const w = u[i];
        Sj(M, j, L, w.callable, w.delegationSelector);
      }
    }
  },
  trigger(M, A, I) {
    if (typeof A != "string" || !M)
      return null;
    const g = Cw(), D = nw(A), N = A !== D;
    let L = null, t = !0, j = !0, u = !1;
    N && g && (L = g.Event(A, I), g(M).trigger(L), t = !L.isPropagationStopped(), j = !L.isImmediatePropagationStopped(), u = L.isDefaultPrevented());
    let S = new Event(A, {
      bubbles: t,
      cancelable: !0
    });
    return S = eu(S, I), u && S.preventDefault(), j && M.dispatchEvent(S), S.defaultPrevented && L && L.preventDefault(), S;
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
class BD {
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
      const D = I[g], N = A[g], L = jI(N) ? "element" : lr(N);
      if (!new RegExp(D).test(L))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${L}" but expected type "${D}".`);
    }
  }
}
const br = "5.2.2";
class VA extends BD {
  constructor(A, I) {
    super(), A = hI(A), A && (this._element = A, this._config = this._getConfig(I), lt.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    lt.remove(this._element, this.constructor.DATA_KEY), X.off(this._element, this.constructor.EVENT_KEY);
    for (const A of Object.getOwnPropertyNames(this))
      this[A] = null;
  }
  _queueCallback(A, I, g = !0) {
    ww(A, I, g);
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
    return br;
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
}, Wr = "alert", kr = "bs.alert", ow = `.${kr}`, pr = `close${ow}`, Qr = `closed${ow}`, vr = "fade", Gr = "show";
class PD extends VA {
  static get NAME() {
    return Wr;
  }
  close() {
    if (X.trigger(this._element, pr).defaultPrevented)
      return;
    this._element.classList.remove(Gr);
    const I = this._element.classList.contains(vr);
    this._queueCallback(() => this._destroyElement(), this._element, I);
  }
  _destroyElement() {
    this._element.remove(), X.trigger(this._element, Qr), this.dispose();
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = PD.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A](this);
      }
    });
  }
}
hL(PD, "close");
WA(PD);
const fr = "button", Jr = "bs.button", Vr = `.${Jr}`, Zr = ".data-api", Br = "active", yS = '[data-bs-toggle="button"]', Pr = `click${Vr}${Zr}`;
class bL extends VA {
  static get NAME() {
    return fr;
  }
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(Br));
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = bL.getOrCreateInstance(this);
      A === "toggle" && I[A]();
    });
  }
}
X.on(document, Pr, yS, (M) => {
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
    return this.find(A, M).filter((I) => !bI(I) && Kg(I));
  }
}, Fr = "swipe", MD = ".bs.swipe", Xr = `touchstart${MD}`, Rr = `touchmove${MD}`, Hr = `touchend${MD}`, _r = `pointerdown${MD}`, $r = `pointerup${MD}`, qr = "touch", Kr = "pen", Md = "pointer-event", Ad = 40, Id = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, gd = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class IL extends BD {
  constructor(A, I) {
    super(), this._element = A, !(!A || !IL.isSupported()) && (this._config = this._getConfig(I), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
  }
  static get Default() {
    return Id;
  }
  static get DefaultType() {
    return gd;
  }
  static get NAME() {
    return Fr;
  }
  dispose() {
    X.off(this._element, MD);
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
    if (A <= Ad)
      return;
    const I = A / this._deltaX;
    this._deltaX = 0, I && II(I > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (X.on(this._element, _r, (A) => this._start(A)), X.on(this._element, $r, (A) => this._end(A)), this._element.classList.add(Md)) : (X.on(this._element, Xr, (A) => this._start(A)), X.on(this._element, Rr, (A) => this._move(A)), X.on(this._element, Hr, (A) => this._end(A)));
  }
  _eventIsPointerPenTouch(A) {
    return this._supportPointerEvents && (A.pointerType === Kr || A.pointerType === qr);
  }
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Dd = "carousel", Nd = "bs.carousel", pI = `.${Nd}`, lw = ".data-api", Ld = "ArrowLeft", td = "ArrowRight", jd = 500, ND = "next", Eg = "prev", sg = "left", rN = "right", ud = `slide${pI}`, ct = `slid${pI}`, Sd = `keydown${pI}`, id = `mouseenter${pI}`, ed = `mouseleave${pI}`, Cd = `dragstart${pI}`, wd = `load${pI}${lw}`, Ed = `click${pI}${lw}`, sw = "carousel", LN = "active", Td = "slide", xd = "carousel-item-end", ad = "carousel-item-start", yd = "carousel-item-next", nd = "carousel-item-prev", cw = ".active", zw = ".carousel-item", od = cw + zw, ld = ".carousel-item img", sd = ".carousel-indicators", cd = "[data-bs-slide], [data-bs-slide-to]", zd = '[data-bs-ride="carousel"]', Yd = {
  [Ld]: rN,
  [td]: sg
}, rd = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, dd = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class AD extends VA {
  constructor(A, I) {
    super(A, I), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = cM.findOne(sd, this._element), this._addEventListeners(), this._config.ride === sw && this.cycle();
  }
  static get Default() {
    return rd;
  }
  static get DefaultType() {
    return dd;
  }
  static get NAME() {
    return Dd;
  }
  next() {
    this._slide(ND);
  }
  nextWhenVisible() {
    !document.hidden && Kg(this._element) && this.next();
  }
  prev() {
    this._slide(Eg);
  }
  pause() {
    this._isSliding && iw(this._element), this._clearInterval();
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
    const D = A > g ? ND : Eg;
    this._slide(D, I[A]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(A) {
    return A.defaultInterval = A.interval, A;
  }
  _addEventListeners() {
    this._config.keyboard && X.on(this._element, Sd, (A) => this._keydown(A)), this._config.pause === "hover" && (X.on(this._element, id, () => this.pause()), X.on(this._element, ed, () => this._maybeEnableCycle())), this._config.touch && IL.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const g of cM.find(ld, this._element))
      X.on(g, Cd, (D) => D.preventDefault());
    const I = {
      leftCallback: () => this._slide(this._directionToOrder(sg)),
      rightCallback: () => this._slide(this._directionToOrder(rN)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), jd + this._config.interval));
      }
    };
    this._swipeHelper = new IL(this._element, I);
  }
  _keydown(A) {
    if (/input|textarea/i.test(A.target.tagName))
      return;
    const I = Yd[A.key];
    I && (A.preventDefault(), this._slide(this._directionToOrder(I)));
  }
  _getItemIndex(A) {
    return this._getItems().indexOf(A);
  }
  _setActiveIndicatorElement(A) {
    if (!this._indicatorsElement)
      return;
    const I = cM.findOne(cw, this._indicatorsElement);
    I.classList.remove(LN), I.removeAttribute("aria-current");
    const g = cM.findOne(`[data-bs-slide-to="${A}"]`, this._indicatorsElement);
    g && (g.classList.add(LN), g.setAttribute("aria-current", "true"));
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
    const g = this._getActive(), D = A === ND, N = I || iu(this._getItems(), g, D, this._config.wrap);
    if (N === g)
      return;
    const L = this._getItemIndex(N), t = (w) => X.trigger(this._element, w, {
      relatedTarget: N,
      direction: this._orderToDirection(A),
      from: this._getItemIndex(g),
      to: L
    });
    if (t(ud).defaultPrevented || !g || !N)
      return;
    const u = Boolean(this._interval);
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(L), this._activeElement = N;
    const S = D ? ad : xd, i = D ? yd : nd;
    N.classList.add(i), ZD(N), g.classList.add(S), N.classList.add(S);
    const C = () => {
      N.classList.remove(S, i), N.classList.add(LN), g.classList.remove(LN, i, S), this._isSliding = !1, t(ct);
    };
    this._queueCallback(C, g, this._isAnimated()), u && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Td);
  }
  _getActive() {
    return cM.findOne(od, this._element);
  }
  _getItems() {
    return cM.find(zw, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(A) {
    return OA() ? A === sg ? Eg : ND : A === sg ? ND : Eg;
  }
  _orderToDirection(A) {
    return OA() ? A === Eg ? sg : rN : A === Eg ? rN : sg;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = AD.getOrCreateInstance(this, A);
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
X.on(document, Ed, cd, function(M) {
  const A = tI(this);
  if (!A || !A.classList.contains(sw))
    return;
  M.preventDefault();
  const I = AD.getOrCreateInstance(A), g = this.getAttribute("data-bs-slide-to");
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
X.on(window, wd, () => {
  const M = cM.find(zd);
  for (const A of M)
    AD.getOrCreateInstance(A);
});
WA(AD);
const Ud = "collapse", md = "bs.collapse", FD = `.${md}`, Od = ".data-api", hd = `show${FD}`, bd = `shown${FD}`, Wd = `hide${FD}`, kd = `hidden${FD}`, pd = `click${FD}${Od}`, zt = "show", Yg = "collapse", tN = "collapsing", Qd = "collapsed", vd = `:scope .${Yg} .${Yg}`, Gd = "collapse-horizontal", fd = "width", Jd = "height", Vd = ".collapse.show, .collapse.collapsing", ij = '[data-bs-toggle="collapse"]', Zd = {
  parent: null,
  toggle: !0
}, Bd = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Xg extends VA {
  constructor(A, I) {
    super(A, I), this._isTransitioning = !1, this._triggerArray = [];
    const g = cM.find(ij);
    for (const D of g) {
      const N = Sw(D), L = cM.find(N).filter((t) => t === this._element);
      N !== null && L.length && this._triggerArray.push(D);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  static get Default() {
    return Zd;
  }
  static get DefaultType() {
    return Bd;
  }
  static get NAME() {
    return Ud;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let A = [];
    if (this._config.parent && (A = this._getFirstLevelChildren(Vd).filter((t) => t !== this._element).map((t) => Xg.getOrCreateInstance(t, {
      toggle: !1
    }))), A.length && A[0]._isTransitioning || X.trigger(this._element, hd).defaultPrevented)
      return;
    for (const t of A)
      t.hide();
    const g = this._getDimension();
    this._element.classList.remove(Yg), this._element.classList.add(tN), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const D = () => {
      this._isTransitioning = !1, this._element.classList.remove(tN), this._element.classList.add(Yg, zt), this._element.style[g] = "", X.trigger(this._element, bd);
    }, L = `scroll${g[0].toUpperCase() + g.slice(1)}`;
    this._queueCallback(D, this._element, !0), this._element.style[g] = `${this._element[L]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || X.trigger(this._element, Wd).defaultPrevented)
      return;
    const I = this._getDimension();
    this._element.style[I] = `${this._element.getBoundingClientRect()[I]}px`, ZD(this._element), this._element.classList.add(tN), this._element.classList.remove(Yg, zt);
    for (const D of this._triggerArray) {
      const N = tI(D);
      N && !this._isShown(N) && this._addAriaAndCollapsedClass([D], !1);
    }
    this._isTransitioning = !0;
    const g = () => {
      this._isTransitioning = !1, this._element.classList.remove(tN), this._element.classList.add(Yg), X.trigger(this._element, kd);
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
    return this._element.classList.contains(Gd) ? fd : Jd;
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
    const I = cM.find(vd, this._config.parent);
    return cM.find(A, this._config.parent).filter((g) => !I.includes(g));
  }
  _addAriaAndCollapsedClass(A, I) {
    if (!!A.length)
      for (const g of A)
        g.classList.toggle(Qd, !I), g.setAttribute("aria-expanded", I);
  }
  static jQueryInterface(A) {
    const I = {};
    return typeof A == "string" && /show|hide/.test(A) && (I.toggle = !1), this.each(function() {
      const g = Xg.getOrCreateInstance(this, I);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A]();
      }
    });
  }
}
X.on(document, pd, ij, function(M) {
  (M.target.tagName === "A" || M.delegateTarget && M.delegateTarget.tagName === "A") && M.preventDefault();
  const A = Sw(this), I = cM.find(A);
  for (const g of I)
    Xg.getOrCreateInstance(g, {
      toggle: !1
    }).toggle();
});
WA(Xg);
const nS = "dropdown", Pd = "bs.dropdown", jg = `.${Pd}`, Cu = ".data-api", Fd = "Escape", oS = "Tab", Xd = "ArrowUp", lS = "ArrowDown", Rd = 2, Hd = `hide${jg}`, _d = `hidden${jg}`, $d = `show${jg}`, qd = `shown${jg}`, Yw = `click${jg}${Cu}`, rw = `keydown${jg}${Cu}`, Kd = `keyup${jg}${Cu}`, cg = "show", MU = "dropup", AU = "dropend", IU = "dropstart", gU = "dropup-center", DU = "dropdown-center", FI = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', NU = `${FI}.${cg}`, dN = ".dropdown-menu", LU = ".navbar", tU = ".navbar-nav", jU = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", uU = OA() ? "top-end" : "top-start", SU = OA() ? "top-start" : "top-end", iU = OA() ? "bottom-end" : "bottom-start", eU = OA() ? "bottom-start" : "bottom-end", CU = OA() ? "left-start" : "right-start", wU = OA() ? "right-start" : "left-start", EU = "top", TU = "bottom", xU = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, aU = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class GA extends VA {
  constructor(A, I) {
    super(A, I), this._popper = null, this._parent = this._element.parentNode, this._menu = cM.next(this._element, dN)[0] || cM.prev(this._element, dN)[0] || cM.findOne(dN, this._parent), this._inNavbar = this._detectNavbar();
  }
  static get Default() {
    return xU;
  }
  static get DefaultType() {
    return aU;
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
    if (!X.trigger(this._element, $d, A).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(tU))
        for (const g of [].concat(...document.body.children))
          X.on(g, "mouseover", AL);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(cg), this._element.classList.add(cg), X.trigger(this._element, qd, A);
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
    if (!X.trigger(this._element, Hd, A).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const g of [].concat(...document.body.children))
          X.off(g, "mouseover", AL);
      this._popper && this._popper.destroy(), this._menu.classList.remove(cg), this._element.classList.remove(cg), this._element.setAttribute("aria-expanded", "false"), uI.removeDataAttribute(this._menu, "popper"), X.trigger(this._element, _d, A);
    }
  }
  _getConfig(A) {
    if (A = super._getConfig(A), typeof A.reference == "object" && !jI(A.reference) && typeof A.reference.getBoundingClientRect != "function")
      throw new TypeError(`${nS.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return A;
  }
  _createPopper() {
    if (typeof jw > "u")
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
    if (A.classList.contains(AU))
      return CU;
    if (A.classList.contains(IU))
      return wU;
    if (A.classList.contains(gU))
      return EU;
    if (A.classList.contains(DU))
      return TU;
    const I = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return A.classList.contains(MU) ? I ? SU : uU : I ? eU : iU;
  }
  _detectNavbar() {
    return this._element.closest(LU) !== null;
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
    const g = cM.find(jU, this._menu).filter((D) => Kg(D));
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
    if (A.button === Rd || A.type === "keyup" && A.key !== oS)
      return;
    const I = cM.find(NU);
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
    const I = /input|textarea/i.test(A.target.tagName), g = A.key === Fd, D = [Xd, lS].includes(A.key);
    if (!D && !g || I && !g)
      return;
    A.preventDefault();
    const N = this.matches(FI) ? this : cM.prev(this, FI)[0] || cM.next(this, FI)[0] || cM.findOne(FI, A.delegateTarget.parentNode), L = GA.getOrCreateInstance(N);
    if (D) {
      A.stopPropagation(), L.show(), L._selectMenuItem(A);
      return;
    }
    L._isShown() && (A.stopPropagation(), L.hide(), N.focus());
  }
}
X.on(document, rw, FI, GA.dataApiKeydownHandler);
X.on(document, rw, dN, GA.dataApiKeydownHandler);
X.on(document, Yw, GA.clearMenus);
X.on(document, Kd, GA.clearMenus);
X.on(document, Yw, FI, function(M) {
  M.preventDefault(), GA.getOrCreateInstance(this).toggle();
});
WA(GA);
const sS = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cS = ".sticky-top", jN = "padding-right", zS = "margin-right";
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
    this._disableOverFlow(), this._setElementAttributes(this._element, jN, (I) => I + A), this._setElementAttributes(sS, jN, (I) => I + A), this._setElementAttributes(cS, zS, (I) => I - A);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, jN), this._resetElementAttributes(sS, jN), this._resetElementAttributes(cS, zS);
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
const dw = "backdrop", yU = "fade", YS = "show", rS = `mousedown.bs.${dw}`, nU = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  rootElement: "body"
}, oU = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Uw extends BD {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isAppended = !1, this._element = null;
  }
  static get Default() {
    return nU;
  }
  static get DefaultType() {
    return oU;
  }
  static get NAME() {
    return dw;
  }
  show(A) {
    if (!this._config.isVisible) {
      II(A);
      return;
    }
    this._append();
    const I = this._getElement();
    this._config.isAnimated && ZD(I), I.classList.add(YS), this._emulateAnimation(() => {
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
      A.className = this._config.className, this._config.isAnimated && A.classList.add(yU), this._element = A;
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
    ww(A, this._getElement(), this._config.isAnimated);
  }
}
const lU = "focustrap", sU = "bs.focustrap", gL = `.${sU}`, cU = `focusin${gL}`, zU = `keydown.tab${gL}`, YU = "Tab", rU = "forward", dS = "backward", dU = {
  autofocus: !0,
  trapElement: null
}, UU = {
  autofocus: "boolean",
  trapElement: "element"
};
class mw extends BD {
  constructor(A) {
    super(), this._config = this._getConfig(A), this._isActive = !1, this._lastTabNavDirection = null;
  }
  static get Default() {
    return dU;
  }
  static get DefaultType() {
    return UU;
  }
  static get NAME() {
    return lU;
  }
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), X.off(document, gL), X.on(document, cU, (A) => this._handleFocusin(A)), X.on(document, zU, (A) => this._handleKeydown(A)), this._isActive = !0);
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
    A.key === YU && (this._lastTabNavDirection = A.shiftKey ? dS : rU);
  }
}
const mU = "modal", OU = "bs.modal", ZA = `.${OU}`, hU = ".data-api", bU = "Escape", WU = `hide${ZA}`, kU = `hidePrevented${ZA}`, Ow = `hidden${ZA}`, hw = `show${ZA}`, pU = `shown${ZA}`, QU = `resize${ZA}`, vU = `click.dismiss${ZA}`, GU = `mousedown.dismiss${ZA}`, fU = `keydown.dismiss${ZA}`, JU = `click${ZA}${hU}`, US = "modal-open", VU = "fade", mS = "show", Yt = "modal-static", ZU = ".modal.show", BU = ".modal-dialog", PU = ".modal-body", FU = '[data-bs-toggle="modal"]', XU = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, RU = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Rg extends VA {
  constructor(A, I) {
    super(A, I), this._dialog = cM.findOne(BU, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ej(), this._addEventListeners();
  }
  static get Default() {
    return XU;
  }
  static get DefaultType() {
    return RU;
  }
  static get NAME() {
    return mU;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    this._isShown || this._isTransitioning || X.trigger(this._element, hw, {
      relatedTarget: A
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(US), this._adjustDialog(), this._backdrop.show(() => this._showElement(A)));
  }
  hide() {
    !this._isShown || this._isTransitioning || X.trigger(this._element, WU).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(mS), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
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
    return new Uw({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new mw({
      trapElement: this._element
    });
  }
  _showElement(A) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const I = cM.findOne(PU, this._dialog);
    I && (I.scrollTop = 0), ZD(this._element), this._element.classList.add(mS);
    const g = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, X.trigger(this._element, pU, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    X.on(this._element, fU, (A) => {
      if (A.key === bU) {
        if (this._config.keyboard) {
          A.preventDefault(), this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), X.on(window, QU, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), X.on(this._element, GU, (A) => {
      X.one(this._element, vU, (I) => {
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
      document.body.classList.remove(US), this._resetAdjustments(), this._scrollBar.reset(), X.trigger(this._element, Ow);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(VU);
  }
  _triggerBackdropTransition() {
    if (X.trigger(this._element, kU).defaultPrevented)
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
      const D = OA() ? "paddingLeft" : "paddingRight";
      this._element.style[D] = `${I}px`;
    }
    if (!g && A) {
      const D = OA() ? "paddingRight" : "paddingLeft";
      this._element.style[D] = `${I}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  static jQueryInterface(A, I) {
    return this.each(function() {
      const g = Rg.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof g[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        g[A](I);
      }
    });
  }
}
X.on(document, JU, FU, function(M) {
  const A = tI(this);
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), X.one(A, hw, (D) => {
    D.defaultPrevented || X.one(A, Ow, () => {
      Kg(this) && this.focus();
    });
  });
  const I = cM.findOne(ZU);
  I && Rg.getInstance(I).hide(), Rg.getOrCreateInstance(A).toggle(this);
});
hL(Rg);
WA(Rg);
const HU = "offcanvas", _U = "bs.offcanvas", nI = `.${_U}`, bw = ".data-api", $U = `load${nI}${bw}`, qU = "Escape", OS = "show", hS = "showing", bS = "hiding", KU = "offcanvas-backdrop", Ww = ".offcanvas.show", M2 = `show${nI}`, A2 = `shown${nI}`, I2 = `hide${nI}`, WS = `hidePrevented${nI}`, kw = `hidden${nI}`, g2 = `resize${nI}`, D2 = `click${nI}${bw}`, N2 = `keydown.dismiss${nI}`, L2 = '[data-bs-toggle="offcanvas"]', t2 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, j2 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class EI extends VA {
  constructor(A, I) {
    super(A, I), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  static get Default() {
    return t2;
  }
  static get DefaultType() {
    return j2;
  }
  static get NAME() {
    return HU;
  }
  toggle(A) {
    return this._isShown ? this.hide() : this.show(A);
  }
  show(A) {
    if (this._isShown || X.trigger(this._element, M2, {
      relatedTarget: A
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new ej().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(hS);
    const g = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(OS), this._element.classList.remove(hS), X.trigger(this._element, A2, {
        relatedTarget: A
      });
    };
    this._queueCallback(g, this._element, !0);
  }
  hide() {
    if (!this._isShown || X.trigger(this._element, I2).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(bS), this._backdrop.hide();
    const I = () => {
      this._element.classList.remove(OS, bS), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ej().reset(), X.trigger(this._element, kw);
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
    return new Uw({
      className: KU,
      isVisible: I,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: I ? A : null
    });
  }
  _initializeFocusTrap() {
    return new mw({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    X.on(this._element, N2, (A) => {
      if (A.key === qU) {
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
X.on(document, D2, L2, function(M) {
  const A = tI(this);
  if (["A", "AREA"].includes(this.tagName) && M.preventDefault(), bI(this))
    return;
  X.one(A, kw, () => {
    Kg(this) && this.focus();
  });
  const I = cM.findOne(Ww);
  I && I !== A && EI.getInstance(I).hide(), EI.getOrCreateInstance(A).toggle(this);
});
X.on(window, $U, () => {
  for (const M of cM.find(Ww))
    EI.getOrCreateInstance(M).show();
});
X.on(window, g2, () => {
  for (const M of cM.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(M).position !== "fixed" && EI.getOrCreateInstance(M).hide();
});
hL(EI);
WA(EI);
const u2 = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), S2 = /^aria-[\w-]*$/i, i2 = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, e2 = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, C2 = (M, A) => {
  const I = M.nodeName.toLowerCase();
  return A.includes(I) ? u2.has(I) ? Boolean(i2.test(M.nodeValue) || e2.test(M.nodeValue)) : !0 : A.filter((g) => g instanceof RegExp).some((g) => g.test(I));
}, pw = {
  "*": ["class", "dir", "id", "lang", "role", S2],
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
function w2(M, A, I) {
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
    const j = [].concat(...L.attributes), u = [].concat(A["*"] || [], A[t] || []);
    for (const S of j)
      C2(S, u) || L.removeAttribute(S.nodeName);
  }
  return D.body.innerHTML;
}
const E2 = "TemplateFactory", T2 = {
  allowList: pw,
  content: {},
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, x2 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, a2 = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class y2 extends BD {
  constructor(A) {
    super(), this._config = this._getConfig(A);
  }
  static get Default() {
    return T2;
  }
  static get DefaultType() {
    return x2;
  }
  static get NAME() {
    return E2;
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
      }, a2);
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
    return this._config.sanitize ? w2(A, this._config.allowList, this._config.sanitizeFn) : A;
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
const n2 = "tooltip", o2 = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), rt = "fade", l2 = "modal", uN = "show", s2 = ".tooltip-inner", kS = `.${l2}`, pS = "hide.bs.modal", LD = "hover", dt = "focus", c2 = "click", z2 = "manual", Y2 = "hide", r2 = "hidden", d2 = "show", U2 = "shown", m2 = "inserted", O2 = "click", h2 = "focusin", b2 = "focusout", W2 = "mouseenter", k2 = "mouseleave", p2 = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: OA() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: OA() ? "right" : "left"
}, Q2 = {
  allowList: pw,
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
}, v2 = {
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
    if (typeof jw > "u")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(A, I), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  static get Default() {
    return Q2;
  }
  static get DefaultType() {
    return v2;
  }
  static get NAME() {
    return n2;
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
    const A = X.trigger(this._element, this.constructor.eventName(d2)), g = (ew(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (A.defaultPrevented || !g)
      return;
    this.tip && (this.tip.remove(), this.tip = null);
    const D = this._getTipElement();
    this._element.setAttribute("aria-describedby", D.getAttribute("id"));
    const {
      container: N
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (N.append(D), X.trigger(this._element, this.constructor.eventName(m2))), this._popper ? this._popper.update() : this._popper = this._createPopper(D), D.classList.add(uN), "ontouchstart" in document.documentElement)
      for (const t of [].concat(...document.body.children))
        X.on(t, "mouseover", AL);
    const L = () => {
      X.trigger(this._element, this.constructor.eventName(U2)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(L, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || X.trigger(this._element, this.constructor.eventName(Y2)).defaultPrevented)
      return;
    const I = this._getTipElement();
    if (I.classList.remove(uN), "ontouchstart" in document.documentElement)
      for (const D of [].concat(...document.body.children))
        X.off(D, "mouseover", AL);
    this._activeTrigger[c2] = !1, this._activeTrigger[dt] = !1, this._activeTrigger[LD] = !1, this._isHovered = null;
    const g = () => {
      this._isWithActiveTrigger() || (this._isHovered || I.remove(), this._element.removeAttribute("aria-describedby"), X.trigger(this._element, this.constructor.eventName(r2)), this._disposePopper());
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
    I.classList.remove(rt, uN), I.classList.add(`bs-${this.constructor.NAME}-auto`);
    const g = sr(this.constructor.NAME).toString();
    return I.setAttribute("id", g), this._isAnimated() && I.classList.add(rt), I;
  }
  setContent(A) {
    this._newContent = A, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(A) {
    return this._templateFactory ? this._templateFactory.changeContent(A) : this._templateFactory = new y2({
      ...this._config,
      content: A,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    }), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [s2]: this._getTitle()
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
    return this.tip && this.tip.classList.contains(uN);
  }
  _createPopper(A) {
    const I = typeof this._config.placement == "function" ? this._config.placement.call(this, A, this._element) : this._config.placement, g = p2[I.toUpperCase()];
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
        X.on(this._element, this.constructor.eventName(O2), this._config.selector, (g) => {
          this._initializeOnDelegatedTarget(g).toggle();
        });
      else if (I !== z2) {
        const g = I === LD ? this.constructor.eventName(W2) : this.constructor.eventName(h2), D = I === LD ? this.constructor.eventName(k2) : this.constructor.eventName(b2);
        X.on(this._element, g, this._config.selector, (N) => {
          const L = this._initializeOnDelegatedTarget(N);
          L._activeTrigger[N.type === "focusin" ? dt : LD] = !0, L._enter();
        }), X.on(this._element, D, this._config.selector, (N) => {
          const L = this._initializeOnDelegatedTarget(N);
          L._activeTrigger[N.type === "focusout" ? dt : LD] = L._element.contains(N.relatedTarget), L._leave();
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
      o2.has(g) && delete I[g];
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
const G2 = "popover", f2 = ".popover-header", J2 = ".popover-body", V2 = {
  ...SI.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}, Z2 = {
  ...SI.DefaultType,
  content: "(null|string|element|function)"
};
class Hg extends SI {
  static get Default() {
    return V2;
  }
  static get DefaultType() {
    return Z2;
  }
  static get NAME() {
    return G2;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return {
      [f2]: this._getTitle(),
      [J2]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = Hg.getOrCreateInstance(this, A);
      if (typeof A == "string") {
        if (typeof I[A] > "u")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
WA(Hg);
const B2 = "scrollspy", P2 = "bs.scrollspy", wu = `.${P2}`, F2 = ".data-api", X2 = `activate${wu}`, QS = `click${wu}`, R2 = `load${wu}${F2}`, H2 = "dropdown-item", Tg = "active", _2 = '[data-bs-spy="scroll"]', Ut = "[href]", $2 = ".nav, .list-group", vS = ".nav-link", q2 = ".nav-item", K2 = ".list-group-item", Mm = `${vS}, ${q2} > ${vS}, ${K2}`, Am = ".dropdown", Im = ".dropdown-toggle", gm = {
  offset: null,
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, Dm = {
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
    return gm;
  }
  static get DefaultType() {
    return Dm;
  }
  static get NAME() {
    return B2;
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
      Kg(g) && (this._targetLinks.set(I.hash, I), this._observableSections.set(I.hash, g));
    }
  }
  _process(A) {
    this._activeTarget !== A && (this._clearActiveClass(this._config.target), this._activeTarget = A, A.classList.add(Tg), this._activateParents(A), X.trigger(this._element, X2, {
      relatedTarget: A
    }));
  }
  _activateParents(A) {
    if (A.classList.contains(H2)) {
      cM.findOne(Im, A.closest(Am)).classList.add(Tg);
      return;
    }
    for (const I of cM.parents(A, $2))
      for (const g of cM.prev(I, Mm))
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
X.on(window, R2, () => {
  for (const M of cM.find(_2))
    WL.getOrCreateInstance(M);
});
WA(WL);
const Nm = "tab", Lm = "bs.tab", ug = `.${Lm}`, tm = `hide${ug}`, jm = `hidden${ug}`, um = `show${ug}`, Sm = `shown${ug}`, im = `click${ug}`, em = `keydown${ug}`, Cm = `load${ug}`, wm = "ArrowLeft", GS = "ArrowRight", Em = "ArrowUp", fS = "ArrowDown", XI = "active", JS = "fade", mt = "show", Tm = "dropdown", xm = ".dropdown-toggle", am = ".dropdown-menu", Ot = ":not(.dropdown-toggle)", ym = '.list-group, .nav, [role="tablist"]', nm = ".nav-item, .list-group-item", om = `.nav-link${Ot}, .list-group-item${Ot}, [role="tab"]${Ot}`, Qw = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ht = `${om}, ${Qw}`, lm = `.${XI}[data-bs-toggle="tab"], .${XI}[data-bs-toggle="pill"], .${XI}[data-bs-toggle="list"]`;
class _g extends VA {
  constructor(A) {
    super(A), this._parent = this._element.closest(ym), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), X.on(this._element, em, (I) => this._keydown(I)));
  }
  static get NAME() {
    return Nm;
  }
  show() {
    const A = this._element;
    if (this._elemIsActive(A))
      return;
    const I = this._getActiveElem(), g = I ? X.trigger(I, tm, {
      relatedTarget: A
    }) : null;
    X.trigger(A, um, {
      relatedTarget: I
    }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(I, A), this._activate(A, I));
  }
  _activate(A, I) {
    if (!A)
      return;
    A.classList.add(XI), this._activate(tI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.add(mt);
        return;
      }
      A.removeAttribute("tabindex"), A.setAttribute("aria-selected", !0), this._toggleDropDown(A, !0), X.trigger(A, Sm, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(JS));
  }
  _deactivate(A, I) {
    if (!A)
      return;
    A.classList.remove(XI), A.blur(), this._deactivate(tI(A));
    const g = () => {
      if (A.getAttribute("role") !== "tab") {
        A.classList.remove(mt);
        return;
      }
      A.setAttribute("aria-selected", !1), A.setAttribute("tabindex", "-1"), this._toggleDropDown(A, !1), X.trigger(A, jm, {
        relatedTarget: I
      });
    };
    this._queueCallback(g, A, A.classList.contains(JS));
  }
  _keydown(A) {
    if (![wm, GS, Em, fS].includes(A.key))
      return;
    A.stopPropagation(), A.preventDefault();
    const I = [GS, fS].includes(A.key), g = iu(this._getChildren().filter((D) => !bI(D)), A.target, I, !0);
    g && (g.focus({
      preventScroll: !0
    }), _g.getOrCreateInstance(g).show());
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
    if (!g.classList.contains(Tm))
      return;
    const D = (N, L) => {
      const t = cM.findOne(N, g);
      t && t.classList.toggle(L, I);
    };
    D(xm, XI), D(am, mt), g.setAttribute("aria-expanded", I);
  }
  _setAttributeIfNotExists(A, I, g) {
    A.hasAttribute(I) || A.setAttribute(I, g);
  }
  _elemIsActive(A) {
    return A.classList.contains(XI);
  }
  _getInnerElement(A) {
    return A.matches(ht) ? A : cM.findOne(ht, A);
  }
  _getOuterElement(A) {
    return A.closest(nm) || A;
  }
  static jQueryInterface(A) {
    return this.each(function() {
      const I = _g.getOrCreateInstance(this);
      if (typeof A == "string") {
        if (I[A] === void 0 || A.startsWith("_") || A === "constructor")
          throw new TypeError(`No method named "${A}"`);
        I[A]();
      }
    });
  }
}
X.on(document, im, Qw, function(M) {
  ["A", "AREA"].includes(this.tagName) && M.preventDefault(), !bI(this) && _g.getOrCreateInstance(this).show();
});
X.on(window, Cm, () => {
  for (const M of cM.find(lm))
    _g.getOrCreateInstance(M);
});
WA(_g);
const sm = "toast", cm = "bs.toast", QI = `.${cm}`, zm = `mouseover${QI}`, Ym = `mouseout${QI}`, rm = `focusin${QI}`, dm = `focusout${QI}`, Um = `hide${QI}`, mm = `hidden${QI}`, Om = `show${QI}`, hm = `shown${QI}`, bm = "fade", VS = "hide", SN = "show", iN = "showing", Wm = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, km = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class kL extends VA {
  constructor(A, I) {
    super(A, I), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  static get Default() {
    return km;
  }
  static get DefaultType() {
    return Wm;
  }
  static get NAME() {
    return sm;
  }
  show() {
    if (X.trigger(this._element, Om).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(bm);
    const I = () => {
      this._element.classList.remove(iN), X.trigger(this._element, hm), this._maybeScheduleHide();
    };
    this._element.classList.remove(VS), ZD(this._element), this._element.classList.add(SN, iN), this._queueCallback(I, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || X.trigger(this._element, Um).defaultPrevented)
      return;
    const I = () => {
      this._element.classList.add(VS), this._element.classList.remove(iN, SN), X.trigger(this._element, mm);
    };
    this._element.classList.add(iN), this._queueCallback(I, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(SN), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(SN);
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
    X.on(this._element, zm, (A) => this._onInteraction(A, !0)), X.on(this._element, Ym, (A) => this._onInteraction(A, !1)), X.on(this._element, rm, (A) => this._onInteraction(A, !0)), X.on(this._element, dm, (A) => this._onInteraction(A, !1));
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
const vw = /* @__PURE__ */ v({
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
    const I = M, g = l(o(I, "modelValue")), D = l(o(I, "toggle")), N = l(o(I, "visible")), L = l(o(I, "isNav")), t = DM(), j = DM(), u = y(() => ({
      show: g.value,
      "navbar-collapse": L.value
    })), S = () => A("update:modelValue", !1);
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
    }), MA(t, "shown.bs.collapse", () => A("shown")), MA(t, "hidden.bs.collapse", () => A("hidden")), PM(() => {
      var i;
      j.value = new Xg(t.value, {
        parent: I.accordion ? `#${I.accordion}` : void 0,
        toggle: D.value
      }), (N.value || g.value) && (A("update:modelValue", !0), (i = j.value) == null || i.show());
    }), (i, C) => (T(), V(wM(M.tag), {
      id: M.id,
      ref_key: "element",
      ref: t,
      class: F(["collapse", e(u)]),
      "data-bs-parent": M.accordion || null,
      "is-nav": e(L)
    }, {
      default: O(() => [
        Q(i.$slots, "default", {
          visible: e(g),
          close: S
        })
      ]),
      _: 3
    }, 8, ["id", "class", "data-bs-parent", "is-nav"]));
  }
}), pm = {
  mounted(M, A) {
    let I = A.value;
    Object.keys(A.modifiers).length > 0 && ([I] = Object.keys(A.modifiers)), M.setAttribute("data-bs-toggle", "modal"), M.setAttribute("data-bs-target", `#${I}`);
  }
}, Qm = {
  mounted(M, A) {
    let I = "right";
    const g = [];
    A.modifiers.left ? I = "left" : A.modifiers.right ? I = "right" : A.modifiers.bottom ? I = "bottom" : A.modifiers.top && (I = "top"), A.modifiers.manual ? g.push("manual") : (A.modifiers.click && g.push("click"), A.modifiers.hover && g.push("hover"), A.modifiers.focus && g.push("focus")), M.setAttribute("data-bs-toggle", "popover"), new Hg(M, {
      trigger: g.length === 0 ? "click" : g.join(" "),
      placement: I,
      content: A.value
    });
  },
  unmounted(M) {
    const A = Hg.getInstance(M);
    A == null || A.dispose();
  }
}, vm = (M) => {
  if (M.classList.contains("offcanvas"))
    return "offcanvas";
  if (M.classList.contains("collapse"))
    return "collapse";
  throw Error("Couldn't resolve toggle type");
}, Gm = (M, A) => {
  const { modifiers: I, arg: g, value: D } = M, N = Object.keys(I || {}), L = typeof D == "string" ? D.split(zN) : D;
  if (rY(A.tagName, "a")) {
    const t = Hj(A, "href") || "";
    uY.test(t) && N.push(t.replace(jY, ""));
  }
  return Array.prototype.concat.apply([], [g, L]).forEach((t) => typeof t == "string" && N.push(t)), N.filter((t, j, u) => t && u.indexOf(t) === j);
}, Eu = {
  mounted(M, A) {
    const I = Gm(A, M), g = [];
    let D = "data-bs-target";
    M.tagName === "a" && (D = "href");
    for (let N = 0; N < I.length; N++) {
      const L = I[N], t = document.getElementById(L);
      t && (M.setAttribute("data-bs-toggle", vm(t)), g.push(`#${L}`));
    }
    g.length > 0 && M.setAttribute(D, g.join(","));
  }
}, fm = (M, A) => {
  if (A != null && A.trigger)
    return A.trigger;
  if (M.manual)
    return "manual";
  const I = [];
  return M.click && I.push("click"), M.hover && I.push("hover"), M.focus && I.push("focus"), I.length > 0 ? I.join(" ") : "hover focus";
}, Jm = (M, A) => A != null && A.placement ? A.placement : M.left ? "left" : M.right ? "right" : M.bottom ? "bottom" : "top", Vm = (M) => M != null && M.delay ? M.delay : 0, ZS = (M) => typeof M == "object" ? M == null ? void 0 : M.title : M, Zm = {
  beforeMount(M, A) {
    M.setAttribute("data-bs-toggle", "tooltip"), M.getAttribute("title") || M.setAttribute("title", ZS(A.value).toString());
    const I = /<("[^"]*"|'[^']*'|[^'">])*>/.test(M.title), g = fm(A.modifiers, A.value), D = Jm(A.modifiers, A.value), N = Vm(A.value), L = M.getAttribute("title");
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
}, UN = /* @__PURE__ */ new Map(), Gw = (M) => {
  if (UN.has(M)) {
    const A = UN.get(M);
    A && A.stop && A.stop(), UN.delete(M);
  }
}, BS = (M, A) => {
  const I = {
    margin: "0px",
    once: !1,
    callback: A.value
  };
  Object.keys(A.modifiers).forEach((D) => {
    Number.isInteger(D) ? I.margin = `${D}px` : D.toLowerCase() === "once" && (I.once = !0);
  }), Gw(M);
  const g = new Pm(
    M,
    I.margin,
    I.once,
    I.callback,
    A.instance
  );
  UN.set(M, g);
}, Bm = {
  beforeMount(M, A) {
    BS(M, A);
  },
  updated(M, A) {
    BS(M, A);
  },
  unmounted(M) {
    Gw(M);
  }
};
class Pm {
  constructor(A, I, g, D, N) {
    BM(this, "element");
    BM(this, "margin");
    BM(this, "once");
    BM(this, "callback");
    BM(this, "instance");
    BM(this, "observer");
    BM(this, "doneOnce");
    BM(this, "visible");
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
const Fm = {
  mounted(M, A) {
    A.value !== !1 && M.focus();
  }
}, Xm = {
  BModal: pm,
  BPopover: Qm,
  BToggle: Eu,
  BTooltip: Zm,
  BVisible: Bm,
  focus: Fm
}, Rm = { class: "accordion-item" }, Hm = ["id"], _m = ["aria-expanded", "aria-controls"], $m = { class: "accordion-body" }, qm = /* @__PURE__ */ v({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { default: !1 }
  },
  setup(M) {
    const A = M, I = tA(QC, ""), g = NA(o(A, "id"), "accordion_item"), D = l(o(A, "visible"));
    return (N, L) => (T(), c("div", Rm, [
      s("h2", {
        id: `${e(g)}heading`,
        class: "accordion-header"
      }, [
        _M((T(), c("button", {
          class: F(["accordion-button", { collapsed: !e(D) }]),
          type: "button",
          "aria-expanded": e(D) ? "true" : "false",
          "aria-controls": e(g)
        }, [
          Q(N.$slots, "title", {}, () => [
            gM(P(M.title), 1)
          ])
        ], 10, _m)), [
          [e(Eu), void 0, e(g)]
        ])
      ], 8, Hm),
      W(vw, {
        id: e(g),
        class: "accordion-collapse",
        visible: M.visible,
        accordion: e(I),
        "aria-labelledby": `heading${e(g)}`
      }, {
        default: O(() => [
          s("div", $m, [
            Q(N.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["id", "visible", "accordion", "aria-labelledby"])
    ]));
  }
}), Km = ["type", "disabled", "aria-label"], ID = /* @__PURE__ */ v({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { default: !1 },
    white: { default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = l(o(I, "disabled")), D = l(o(I, "white")), N = y(() => ({
      "btn-close-white": D.value
    }));
    return (L, t) => (T(), c("button", {
      type: M.type,
      class: F(["btn-close", e(N)]),
      disabled: e(g),
      "aria-label": M.ariaLabel,
      onClick: t[0] || (t[0] = (j) => A("click", j))
    }, null, 10, Km));
  }
}), MO = /* @__PURE__ */ v({
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
    const I = M, g = l(o(I, "dismissible"));
    l(o(I, "fade"));
    const D = l(o(I, "show")), N = jA();
    let L;
    const t = DM(null), j = DM(), u = y(() => !lA(N.close)), S = y(() => !!I.modelValue || D.value), i = y(() => [
      [`alert-${I.variant}`],
      {
        show: !!I.modelValue,
        "alert-dismissible": g.value,
        fade: !!I.modelValue
      }
    ]), C = (z) => {
      if (typeof z == "boolean")
        return 0;
      const d = Jg(z, 0);
      return d > 0 ? d : 0;
    }, w = DM(C(I.modelValue)), E = y(() => I.modelValue === !0 ? !0 : I.modelValue === !1 || Jg(I.modelValue, 0) < 1 ? !1 : !!I.modelValue), x = () => {
      L !== void 0 && (clearTimeout(L), L = void 0);
    }, n = () => {
      w.value = C(I.modelValue), (E.value || D.value) && !j.value && (j.value = new PD(t.value));
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
    }), (z, d) => e(S) ? (T(), c("div", {
      key: 0,
      ref_key: "element",
      ref: t,
      class: F(["alert", e(i)]),
      role: "alert"
    }, [
      Q(z.$slots, "default"),
      e(g) ? (T(), c(MM, { key: 0 }, [
        e(u) ? (T(), c("button", {
          key: 0,
          type: "button",
          "data-bs-dismiss": "alert",
          onClick: a
        }, [
          Q(z.$slots, "close")
        ])) : (T(), V(ID, {
          key: 1,
          "aria-label": M.dismissLabel,
          "data-bs-dismiss": "alert",
          onClick: a
        }, null, 8, ["aria-label"]))
      ], 64)) : B("", !0)
    ], 2)) : B("", !0);
  }
}), fw = Symbol(), AO = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "square")), g = y(() => Cj(A.size)), D = y(
      () => Math.min(Math.max(L(A.overlap), 0), 1) / 2
    ), N = y(() => {
      const t = g.value ? `calc(${g.value} * ${D.value})` : null;
      return t ? { paddingLeft: t, paddingRight: t } : {};
    }), L = (t) => typeof t == "string" && CC(t) ? zC(t, 0) : t || 0;
    return NI(fw, {
      overlapScale: D,
      size: A.size,
      square: I.value,
      rounded: A.rounded,
      variant: A.variant
    }), (t, j) => (T(), V(wM(M.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: O(() => [
        s("div", {
          class: "b-avatar-group-inner",
          style: QA(e(N))
        }, [
          Q(t.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), IO = {
  key: 0,
  class: "b-avatar-custom"
}, gO = {
  key: 1,
  class: "b-avatar-img"
}, DO = ["src", "alt"], Cj = (M) => {
  const A = typeof M == "string" && CC(M) ? zC(M, 0) : M;
  return typeof A == "number" ? `${A}px` : A || null;
}, NO = /* @__PURE__ */ v({
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
    const I = M, g = jA(), D = tA(fw, null), N = ["sm", null, "lg"], L = 0.4, t = L * 0.7, j = l(o(I, "badgeLeft")), u = l(o(I, "badgeTop")), S = l(o(I, "button")), i = l(o(I, "disabled")), C = l(o(I, "square")), w = y(() => !lA(g.default)), E = y(() => !lA(g.badge)), x = y(() => !!I.badge || I.badge === "" || E.value), n = y(
      () => D != null && D.size ? D.size : Cj(I.size)
    ), a = y(
      () => D != null && D.variant ? D.variant : I.variant
    ), z = y(
      () => D != null && D.rounded ? D.rounded : I.rounded
    ), d = y(() => ({
      type: S.value ? I.buttonType : void 0,
      "aria-label": I.ariaLabel || null,
      disabled: i.value || null
    })), Y = y(() => [`bg-${I.badgeVariant}`]), h = y(() => I.badge === !0 ? "" : I.badge), k = y(() => [[`text-${IM(I.badgeVariant)}`]]), G = y(() => ({
      [`b-avatar-${I.size}`]: !!I.size && N.indexOf(Cj(I.size)) !== -1,
      [`bg-${a.value}`]: !!a.value,
      badge: !S.value && a.value && w.value,
      rounded: z.value === "" || z.value === !0,
      ["rounded-circle"]: !C.value && z.value === "circle",
      ["rounded-0"]: C.value || z.value === "0",
      ["rounded-1"]: !C.value && z.value === "sm",
      ["rounded-3"]: !C.value && z.value === "lg",
      ["rounded-top"]: !C.value && z.value === "top",
      ["rounded-bottom"]: !C.value && z.value === "bottom",
      ["rounded-start"]: !C.value && z.value === "left",
      ["rounded-end"]: !C.value && z.value === "right",
      btn: S.value,
      [`btn-${a.value}`]: S.value ? !!a.value : !1
    })), r = y(() => [
      [`text-${I.textVariant || IM(a.value)}`]
    ]), b = y(() => {
      const tM = I.badgeOffset || "0px";
      return {
        fontSize: (N.indexOf(n.value || null) === -1 ? `calc(${n.value} * ${t})` : "") || "",
        top: u.value ? tM : "",
        bottom: u.value ? "" : tM,
        left: j.value ? tM : "",
        right: j.value ? "" : tM
      };
    }), Z = y(() => {
      const tM = N.indexOf(n.value || null) === -1 ? `calc(${n.value} * ${L})` : null;
      return tM ? { fontSize: tM } : {};
    }), R = y(() => {
      var dM;
      const tM = ((dM = D == null ? void 0 : D.overlapScale) == null ? void 0 : dM.value) || 0, yM = n.value && tM ? `calc(${n.value} * -${tM})` : null;
      return yM ? { marginLeft: yM, marginRight: yM } : {};
    }), AM = y(() => S.value ? "button" : "span"), LM = y(() => ({
      ...R.value,
      width: n.value,
      height: n.value
    })), IM = (tM) => tM === "light" || tM === "warning" ? "dark" : "light", oM = (tM) => {
      !i.value && S.value && A("click", tM);
    }, SM = (tM) => A("img-error", tM);
    return (tM, yM) => (T(), V(wM(e(AM)), CM({
      class: ["b-avatar", e(G)],
      style: e(LM)
    }, e(d), { onClick: oM }), {
      default: O(() => [
        e(w) ? (T(), c("span", IO, [
          Q(tM.$slots, "default")
        ])) : M.src ? (T(), c("span", gO, [
          s("img", {
            src: M.src,
            alt: M.alt,
            onError: SM
          }, null, 40, DO)
        ])) : M.text ? (T(), c("span", {
          key: 2,
          class: F(["b-avatar-text", e(r)]),
          style: QA(e(Z))
        }, P(M.text), 7)) : B("", !0),
        e(x) ? (T(), c("span", {
          key: 3,
          class: F(["b-avatar-badge", e(Y)]),
          style: QA(e(b))
        }, [
          e(E) ? Q(tM.$slots, "badge", { key: 0 }) : (T(), c("span", {
            key: 1,
            class: F(e(k))
          }, P(e(h)), 3))
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
}, LO = v({
  props: Sg,
  emits: ["click"],
  setup(M, { emit: A, attrs: I }) {
    const g = l(o(M, "active")), D = l(o(M, "append")), N = l(o(M, "disabled")), L = l(o(M, "exact")), t = l(o(M, "replace")), j = yE(), u = DM(null), S = y(() => {
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
      tag: S,
      routerAttr: C,
      link: u,
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
function tO(M, A, I, g, D, N) {
  return M.tag === "router-link" ? (T(), V(wM(M.tag), CM({ key: 0 }, M.routerAttr, { custom: "" }), {
    default: O(({ href: L, navigate: t, isActive: j, isExactActive: u }) => [
      (T(), V(wM(M.routerTag), CM({
        ref: "link",
        href: L,
        class: [
          (j || M.activeBoolean) && M.activeClass,
          (u || M.exactBoolean) && M.exactActiveClass
        ]
      }, M.$attrs, { onClick: t }), {
        default: O(() => [
          Q(M.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (T(), V(wM(M.tag), CM({
    key: 1,
    ref: "link",
    class: M.computedLinkClasses
  }, M.routerAttr, { onClick: M.clicked }), {
    default: O(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const zA = /* @__PURE__ */ FM(LO, [["render", tO]]), PS = sL(Sg, ["event", "routerTag"]), jO = v({
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
    const A = l(o(M, "pill")), I = l(o(M, "textIndicator")), g = l(o(M, "dotIndicator")), D = l(o(M, "active")), N = l(o(M, "disabled")), L = y(() => bD(M)), t = y(
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
    ]), u = y(
      () => L.value ? _j(M, PS) : {}
    );
    return {
      computedClasses: j,
      computedLinkProps: u,
      computedTag: t
    };
  }
});
function uO(M, A, I, g, D, N) {
  return T(), V(wM(M.computedTag), CM({
    class: ["badge", M.computedClasses]
  }, M.computedLinkProps), {
    default: O(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const SO = /* @__PURE__ */ FM(jO, [["render", uO]]), FS = sL(Sg, ["event", "routerTag"]), iO = v({
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
    const I = l(o(M, "active")), g = l(o(M, "disabled")), D = y(() => ({
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
      clicked: (u) => {
        if (g.value || I.value) {
          u.preventDefault(), u.stopImmediatePropagation();
          return;
        }
        g.value || A("click", u);
      }
    };
  }
});
function eO(M, A, I, g, D, N) {
  return T(), c("li", {
    class: F(["breadcrumb-item", M.computedClasses])
  }, [
    (T(), V(wM(M.computedTag), CM({ "aria-current": M.computedAriaCurrent }, M.computedLinkProps, { onClick: M.clicked }), {
      default: O(() => [
        Q(M.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const Jw = /* @__PURE__ */ FM(iO, [["render", eO]]), CO = { "aria-label": "breadcrumb" }, wO = { class: "breadcrumb" }, EO = /* @__PURE__ */ v({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(M) {
    const A = M, I = OY(), g = y(() => {
      const D = A.items || (I == null ? void 0 : I.items) || [];
      let N = !1;
      return D.map((t, j) => (typeof t == "string" && (t = { text: t }, j < D.length - 1 && (t.href = "#")), t.active && (N = !0), !t.active && !N && (t.active = j + 1 === D.length), t));
    });
    return (D, N) => (T(), c("nav", CO, [
      s("ol", wO, [
        Q(D.$slots, "prepend"),
        (T(!0), c(MM, null, eM(e(g), (L, t) => (T(), V(Jw, CM({ key: t }, L), {
          default: O(() => [
            gM(P(L.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        Q(D.$slots, "default"),
        Q(D.$slots, "append")
      ])
    ]));
  }
}), TO = {
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
    const A = M, I = jA(), g = l(o(A, "small")), D = y(() => ({
      "spinner-border": A.type === "border",
      "spinner-border-sm": A.type === "border" && g.value,
      "spinner-grow": A.type === "grow",
      "spinner-grow-sm": A.type === "grow" && g.value,
      [`text-${A.variant}`]: A.variant !== void 0
    })), N = y(() => !lA(I.label));
    return (L, t) => (T(), V(wM(M.tag), {
      class: F(e(D)),
      role: M.label || e(N) ? M.role : null,
      "aria-hidden": M.label || e(N) ? null : !0
    }, {
      default: O(() => [
        M.label || e(N) ? (T(), c("span", TO, [
          Q(L.$slots, "label", {}, () => [
            gM(P(M.label), 1)
          ])
        ])) : B("", !0)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), xO = v({
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
    const I = l(o(M, "active")), g = l(o(M, "disabled")), D = l(o(M, "pill")), N = l(o(M, "pressed")), L = l(o(M, "squared")), t = l(o(M, "loading")), j = y(() => N.value === !0), u = y(
      () => M.tag === "button" && M.href === void 0 && M.to === null
    ), S = y(() => bD(M)), i = y(() => M.to !== null), C = y(
      () => M.href !== void 0 ? !1 : !u.value
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
      disabled: u.value ? g.value : null,
      href: M.href,
      rel: S.value ? M.rel : null,
      role: C.value || S.value ? "button" : null,
      target: S.value ? M.target : null,
      type: u.value ? M.type : null,
      to: u.value ? null : M.to,
      append: S.value ? M.append : null,
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
function aO(M, A, I, g, D, N) {
  const L = aM("b-spinner");
  return T(), V(wM(M.computedTag), CM({
    class: ["btn", M.computedClasses]
  }, M.computedAttrs, { onClick: M.clicked }), {
    default: O(() => [
      M.loadingBoolean ? (T(), c("div", {
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
      s("div", {
        class: F(["btn-content", { "btn-loading-fill": M.loadingBoolean && M.loadingMode === "fill" }])
      }, [
        Q(M.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const WD = /* @__PURE__ */ FM(xO, [["render", aO]]), yO = /* @__PURE__ */ v({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: !1 }
  },
  setup(M) {
    const A = M, I = l(o(A, "vertical")), g = y(() => ({
      "btn-group": !I.value && A.size === void 0,
      [`btn-group-${A.size}`]: A.size !== void 0,
      "btn-group-vertical": I.value
    }));
    return (D, N) => (T(), V(wM(M.tag), {
      class: F(e(g)),
      role: "group",
      "aria-label": M.ariaLabel
    }, {
      default: O(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), nO = ["role", "aria-label"], oO = /* @__PURE__ */ v({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: !1 },
    role: { default: "toolbar" }
  },
  setup(M) {
    const I = l(o(M, "justify")), g = y(() => ({
      "justify-content-between": I.value
    }));
    return (D, N) => (T(), c("div", {
      class: F([e(g), "btn-toolbar"]),
      role: M.role,
      "aria-label": M.ariaLabel
    }, [
      Q(D.$slots, "default")
    ], 10, nO));
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
    const I = M, g = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', D = l(o(I, "lazy")), N = l(o(I, "blank")), L = l(o(I, "block")), t = l(o(I, "center")), j = l(o(I, "fluid")), u = l(o(I, "fluidGrow")), S = l(o(I, "left")), i = l(o(I, "start")), C = l(o(I, "right")), w = l(o(I, "end")), E = l(o(I, "thumbnail")), x = y(
      () => typeof I.srcset == "string" ? I.srcset.split(",").filter((G) => G).join(",") : Array.isArray(I.srcset) ? I.srcset.filter((G) => G).join(",") : void 0
    ), n = y(
      () => typeof I.sizes == "string" ? I.sizes.split(",").filter((G) => G).join(",") : Array.isArray(I.sizes) ? I.sizes.filter((G) => G).join(",") : void 0
    ), a = y(() => {
      const G = (Z) => Z === void 0 ? void 0 : typeof Z == "number" ? Z : Number.parseInt(Z, 10) || void 0, r = G(I.width), b = G(I.height);
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
      () => S.value || i.value ? "float-start" : C.value || w.value ? "float-end" : t.value ? "mx-auto" : void 0
    ), h = y(() => ({
      "img-thumbnail": E.value,
      "img-fluid": j.value || u.value,
      "w-100": u.value,
      rounded: I.rounded === "" || I.rounded === !0,
      [`rounded-${I.rounded}`]: typeof I.rounded == "string" && I.rounded !== "",
      [`${Y.value}`]: Y.value !== void 0,
      "d-block": L.value || t.value
    })), k = (G, r, b) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      g.replace("%{w}", String(G)).replace("%{h}", String(r)).replace("%{f}", b)
    )}`;
    return (G, r) => (T(), c("img", CM({ class: e(h) }, e(d), {
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
    const I = M, g = l(o(I, "bottom")), D = l(o(I, "end")), N = l(o(I, "left")), L = l(o(I, "right")), t = l(o(I, "start")), j = l(o(I, "top")), u = y(
      () => j.value ? "card-img-top" : L.value || D.value ? "card-img-right" : g.value ? "card-img-bottom" : N.value || t.value ? "card-img-left" : "card-img"
    ), S = y(() => ({
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
    return (i, C) => (T(), V(Tu, CM({ class: e(u) }, e(S), {
      onLoad: C[0] || (C[0] = (w) => A("load", w))
    }), null, 16, ["class"]));
  }
}), lO = ["innerHTML"], Vw = /* @__PURE__ */ v({
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
    return (g, D) => (T(), V(wM(M.tag), {
      class: F(e(I))
    }, {
      default: O(() => [
        M.html ? (T(), c("div", {
          key: 0,
          innerHTML: M.html
        }, null, 8, lO)) : Q(g.$slots, "default", { key: 1 }, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zw = /* @__PURE__ */ v({
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
    return (I, g) => (T(), V(Vw, CM({ class: "card-header" }, A), {
      default: O(() => [
        Q(I.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bw = /* @__PURE__ */ v({
  __name: "BCardTitle",
  props: {
    text: null,
    tag: { default: "h4" }
  },
  setup(M) {
    return (A, I) => (T(), V(wM(M.tag), { class: "card-title" }, {
      default: O(() => [
        Q(A.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), Pw = /* @__PURE__ */ v({
  __name: "BCardSubtitle",
  props: {
    text: null,
    tag: { default: "h6" },
    textVariant: { default: "muted" }
  },
  setup(M) {
    const A = M, I = y(() => [`text-${A.textVariant}`]);
    return (g, D) => (T(), V(wM(M.tag), {
      class: F(["card-subtitle mb-2", e(I)])
    }, {
      default: O(() => [
        Q(g.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Fw = /* @__PURE__ */ v({
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
    const A = M, I = jA(), g = l(o(A, "overlay")), D = y(() => !lA(I.title)), N = y(() => !lA(I.subtitle)), L = y(() => ({
      "card-img-overlay": g.value,
      [`text-${A.bodyTextVariant}`]: A.bodyTextVariant !== void 0,
      [`bg-${A.bodyBgVariant}`]: A.bodyBgVariant !== void 0
    }));
    return (t, j) => (T(), V(wM(M.bodyTag), {
      class: F(["card-body", e(L)])
    }, {
      default: O(() => [
        !!M.title || e(D) ? (T(), V(Bw, {
          key: 0,
          tag: M.titleTag
        }, {
          default: O(() => [
            Q(t.$slots, "title", {}, () => [
              gM(P(M.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : B("", !0),
        !!M.subtitle || e(N) ? (T(), V(Pw, {
          key: 1,
          tag: M.subtitleTag,
          "text-variant": M.subtitleTextVariant
        }, {
          default: O(() => [
            Q(t.$slots, "subtitle", {}, () => [
              gM(P(M.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : B("", !0),
        Q(t.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xw = /* @__PURE__ */ v({
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
    return (I, g) => (T(), V(Vw, CM({ class: "card-footer" }, A), {
      default: O(() => [
        Q(I.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Rw = /* @__PURE__ */ v({
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
    const A = M, I = jA(), g = l(o(A, "imgBottom")), D = l(o(A, "imgEnd")), N = l(o(A, "imgLeft")), L = l(o(A, "imgRight")), t = l(o(A, "imgStart")), j = l(o(A, "noBody")), u = y(() => !lA(I.header)), S = y(() => !lA(I.footer)), i = y(() => ({
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
    return (n, a) => (T(), V(wM(M.tag), {
      class: F(["card", e(i)])
    }, {
      default: O(() => [
        e(g) ? B("", !0) : Q(n.$slots, "img", { key: 0 }, () => [
          M.imgSrc ? (T(), V(DL, qM(CM({ key: 0 }, e(x))), null, 16)) : B("", !0)
        ]),
        M.header || e(u) || M.headerHtml ? (T(), V(Zw, CM({ key: 1 }, e(C), { class: M.headerClass }), {
          default: O(() => [
            Q(n.$slots, "header", {}, () => [
              gM(P(M.header), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : B("", !0),
        e(j) ? Q(n.$slots, "default", { key: 3 }, () => [
          gM(P(M.bodyText), 1)
        ]) : (T(), V(Fw, CM({ key: 2 }, e(w), { class: M.bodyClass }), {
          default: O(() => [
            Q(n.$slots, "default", {}, () => [
              gM(P(M.bodyText), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        M.footer || e(S) || M.footerHtml ? (T(), V(Xw, CM({ key: 4 }, e(E), { class: M.footerClass }), {
          default: O(() => [
            Q(n.$slots, "footer", {}, () => [
              gM(P(M.footer), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : B("", !0),
        e(g) ? Q(n.$slots, "img", { key: 5 }, () => [
          M.imgSrc ? (T(), V(DL, qM(CM({ key: 0 }, e(x))), null, 16)) : B("", !0)
        ]) : B("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sO = /* @__PURE__ */ v({
  __name: "BCardGroup",
  props: {
    columns: { default: !1 },
    deck: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = l(o(A, "columns")), g = l(o(A, "deck")), D = y(
      () => g.value ? "card-deck" : I.value ? "card-columns" : "card-group"
    ), N = y(() => [D.value]);
    return (L, t) => (T(), V(wM(M.tag), {
      class: F(e(N))
    }, {
      default: O(() => [
        Q(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cO = /* @__PURE__ */ v({
  __name: "BCardText",
  props: {
    text: null,
    tag: { default: "p" }
  },
  setup(M) {
    return (A, I) => (T(), V(wM(M.tag), { class: "card-text" }, {
      default: O(() => [
        Q(A.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), zO = ["id"], YO = {
  key: 0,
  class: "carousel-indicators"
}, rO = ["data-bs-target", "data-bs-slide-to", "aria-label"], dO = { class: "carousel-inner" }, UO = ["data-bs-target"], mO = /* @__PURE__ */ s("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), OO = { class: "visually-hidden" }, hO = ["data-bs-target"], bO = /* @__PURE__ */ s("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), WO = { class: "visually-hidden" }, Hw = Symbol(), kO = /* @__PURE__ */ v({
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
    const I = M, g = jA(), D = NA(o(I, "id"), "carousel"), N = l(o(I, "controls")), L = l(o(I, "indicators")), t = l(o(I, "noTouch"));
    l(o(I, "noWrap"));
    const j = DM(), u = DM(), S = DM([]);
    return MA(j, "slide.bs.carousel", (i) => A("sliding-start", i)), MA(j, "slid.bs.carousel", (i) => A("sliding-end", i)), PM(() => {
      u.value = new AD(j.value, {
        wrap: !t.value,
        interval: I.interval,
        touch: !t.value
      }), g.default && (S.value = g.default().filter((i) => {
        var C;
        return ((C = i.type) == null ? void 0 : C.__name) === "BCarouselSlide";
      }));
    }), NI(Hw, {
      background: I.background,
      width: I.imgWidth,
      height: I.imgHeight
    }), (i, C) => (T(), c("div", {
      id: e(D),
      ref_key: "element",
      ref: j,
      class: "carousel slide",
      "data-bs-ride": "carousel"
    }, [
      e(L) ? (T(), c("div", YO, [
        (T(!0), c(MM, null, eM(S.value, (w, E) => (T(), c("button", {
          key: E,
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide-to": E,
          class: F(E === M.startingSlide ? "active" : ""),
          "aria-current": "true",
          "aria-label": `${M.indicatorsButtonLabel} ${E}`
        }, null, 10, rO))), 128))
      ])) : B("", !0),
      s("div", dO, [
        Q(i.$slots, "default")
      ]),
      e(N) ? (T(), c(MM, { key: 1 }, [
        s("button", {
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide": "prev"
        }, [
          mO,
          s("span", OO, P(M.controlsPrevText), 1)
        ], 8, UO),
        s("button", {
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": `#${e(D)}`,
          "data-bs-slide": "next"
        }, [
          bO,
          s("span", WO, P(M.controlsNextText), 1)
        ], 8, hO)
      ], 64)) : B("", !0)
    ], 8, zO));
  }
}), pO = ["data-bs-interval"], QO = ["innerHTML"], vO = { key: 1 }, GO = ["innerHTML"], fO = { key: 1 }, JO = /* @__PURE__ */ v({
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
    const A = M, I = jA(), g = tA(Hw, {}), D = l(o(A, "active")), N = y(() => !lA(I.default)), L = y(() => ({
      background: `${A.background || g.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), t = y(() => ({
      "d-none": A.contentVisibleUp !== void 0,
      [`d-${A.contentVisibleUp}-block`]: A.contentVisibleUp !== void 0
    })), j = y(() => g.width), u = y(() => g.height);
    return (S, i) => (T(), c("div", {
      class: F(["carousel-item", { active: e(D) }]),
      "data-bs-interval": M.interval,
      style: QA(e(L))
    }, [
      Q(S.$slots, "img", {}, () => [
        W(Tu, {
          class: "d-block w-100",
          alt: M.imgAlt,
          src: M.imgSrc,
          width: M.imgWidth || e(j),
          height: M.imgHeight || e(u),
          blank: M.imgBlank,
          "blank-color": M.imgBlankColor
        }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
      ]),
      M.caption || M.captionHtml || M.text || M.textHtml || e(N) ? (T(), V(wM(M.contentTag), {
        key: 0,
        class: F(["carousel-caption", e(t)])
      }, {
        default: O(() => [
          M.caption || M.captionHtml ? (T(), V(wM(M.captionTag), { key: 0 }, {
            default: O(() => [
              M.captionHtml ? (T(), c("span", {
                key: 0,
                innerHTML: M.captionHtml
              }, null, 8, QO)) : (T(), c("span", vO, P(M.caption), 1))
            ]),
            _: 1
          })) : B("", !0),
          M.text || M.textHtml ? (T(), V(wM(M.textTag), { key: 1 }, {
            default: O(() => [
              M.textHtml ? (T(), c("span", {
                key: 0,
                innerHTML: M.textHtml
              }, null, 8, GO)) : (T(), c("span", fO, P(M.text), 1))
            ]),
            _: 1
          })) : B("", !0),
          Q(S.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : B("", !0)
    ], 14, pO));
  }
}), XS = rL("", [], { type: [Boolean, String, Number], default: !1 }), RS = rL("offset", [""], { type: [String, Number], default: null }), HS = rL("order", [""], { type: [String, Number], default: null }), VO = v({
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
    ], I = l(o(M, "col")), g = y(
      () => A.flatMap((N) => cC(M, N.content, N.propPrefix, N.classPrefix))
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
function ZO(M, A, I, g, D, N) {
  return T(), V(wM(M.tag), {
    class: F(M.computedClasses)
  }, {
    default: O(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const iD = /* @__PURE__ */ FM(VO, [["render", ZO]]), BO = /* @__PURE__ */ v({
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
    return (D, N) => (T(), V(wM(M.tag), {
      ref_key: "container",
      ref: I,
      class: F(e(g))
    }, {
      default: O(() => [
        Q(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), PO = { class: "visually-hidden" }, FO = ["aria-labelledby", "role"], _w = /* @__PURE__ */ v({
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
    const g = M, D = NA(o(g, "id"), "dropdown"), N = l(o(g, "block")), L = l(o(g, "dark")), t = l(o(g, "dropup")), j = l(o(g, "dropright")), u = l(o(g, "isNav")), S = l(o(g, "dropleft")), i = l(o(g, "right")), C = l(o(g, "split")), w = l(o(g, "noCaret")), E = DM(), x = DM(), n = DM(), a = y(() => ({
      "d-grid": N.value,
      "d-flex": N.value && C.value
    })), z = y(() => [
      C.value ? g.splitClass : g.toggleClass,
      {
        "nav-link": u.value,
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
    })), h = y(() => ({
      ref: C.value ? x : void 0
    })), k = () => {
      var r;
      (r = n.value) == null || r.hide();
    }, G = (r) => {
      C.value && I("click", r);
    };
    return MA(E, "show.bs.dropdown", () => I("show")), MA(E, "shown.bs.dropdown", () => I("shown")), MA(E, "hide.bs.dropdown", () => I("hide")), MA(E, "hidden.bs.dropdown", () => I("hidden")), PM(() => {
      var r;
      n.value = new GA((r = x.value) == null ? void 0 : r.$el, {
        autoClose: g.autoClose,
        boundary: g.boundary,
        offset: g.offset ? g.offset.toString() : "",
        reference: g.offset || C.value ? "parent" : "toggle",
        popperConfig: (b) => {
          const Z = {
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
          return t.value ? Z.placement = i.value ? "top-end" : "top-start" : j.value ? Z.placement = "right-start" : S.value ? Z.placement = "left-start" : i.value && (Z.placement = "bottom-end"), Nj(b, Nj(Z, g.popperOpts));
        }
      });
    }), A({
      hide: k
    }), (r, b) => (T(), c("div", {
      ref_key: "parent",
      ref: E,
      class: F([e(a), "btn-group"])
    }, [
      W(WD, CM({
        id: e(D),
        variant: M.splitVariant || M.variant,
        size: M.size,
        class: e(z),
        disabled: M.disabled,
        type: M.splitButtonType
      }, e(Y), { onClick: G }), {
        default: O(() => [
          Q(r.$slots, "button-content", {}, () => [
            gM(P(M.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      e(C) ? (T(), V(WD, CM({
        key: 0,
        variant: M.variant,
        size: M.size,
        disabled: M.disabled
      }, e(h), {
        class: [M.toggleClass, "dropdown-toggle-split dropdown-toggle"],
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: b[0] || (b[0] = (Z) => I("toggle"))
      }), {
        default: O(() => [
          s("span", PO, [
            Q(r.$slots, "toggle-text", {}, () => [
              gM(P(M.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 16, ["variant", "size", "disabled", "class"])) : B("", !0),
      s("ul", {
        class: F(["dropdown-menu", e(d)]),
        "aria-labelledby": e(D),
        role: M.role
      }, [
        Q(r.$slots, "default")
      ], 10, FO)
    ], 2));
  }
}), XO = { role: "presentation" }, RO = /* @__PURE__ */ v({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(M) {
    return (A, I) => (T(), c("li", XO, [
      (T(), V(wM(M.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), HO = {}, _O = { role: "presentation" }, $O = { class: "px-4 py-3" };
function qO(M, A) {
  return T(), c("li", _O, [
    s("form", $O, [
      Q(M.$slots, "default")
    ])
  ]);
}
const KO = /* @__PURE__ */ FM(HO, [["render", qO]]), Mh = { role: "presentation" }, Ah = ["id", "aria-describedby"], Ih = {
  inheritAttrs: !1
}, gh = /* @__PURE__ */ v({
  ...Ih,
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
    return (N, L) => (T(), c("li", Mh, [
      (T(), V(wM(M.headerTag), {
        id: e(I),
        class: F(["dropdown-header", e(D)]),
        role: e(g)
      }, {
        default: O(() => [
          Q(N.$slots, "header", {}, () => [
            gM(P(M.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      s("ul", CM({
        id: M.id,
        role: "group",
        class: "list-unstyled"
      }, N.$attrs, {
        "aria-describedby": M.ariaDescribedby || e(I)
      }), [
        Q(N.$slots, "default")
      ], 16, Ah)
    ]));
  }
}), Dh = {}, Nh = { class: "dropdown-header" };
function Lh(M, A) {
  return T(), c("li", null, [
    s("h6", Nh, [
      Q(M.$slots, "default")
    ])
  ]);
}
const th = /* @__PURE__ */ FM(Dh, [["render", Lh]]), jh = {
  inheritAttrs: !1
}, uh = /* @__PURE__ */ v({
  ...jh,
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
    const I = M, g = l(o(I, "active")), D = l(o(I, "disabled")), N = ti(), L = y(() => [
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
    })), u = (S) => A("click", S);
    return (S, i) => (T(), c("li", {
      role: "presentation",
      class: F(S.$attrs.class)
    }, [
      (T(), V(wM(e(t)), CM({
        class: ["dropdown-item", e(L)]
      }, e(j), { onClick: u }), {
        default: O(() => [
          Q(S.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 2));
  }
}), Sh = ["disabled"], ih = {
  inheritAttrs: !1
}, eh = /* @__PURE__ */ v({
  ...ih,
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
    const I = M, g = l(o(I, "active")), D = l(o(I, "disabled")), N = y(() => [
      I.buttonClass,
      {
        [I.activeClass]: g.value,
        disabled: D.value,
        [`text-${I.variant}`]: I.variant !== void 0
      }
    ]), L = (t) => A("click", t);
    return (t, j) => (T(), c("li", {
      role: "presentation",
      class: F(t.$attrs.class)
    }, [
      s("button", {
        role: "menu",
        type: "button",
        class: F(["dropdown-item", e(N)]),
        disabled: e(D),
        onClick: L
      }, [
        Q(t.$slots, "default")
      ], 10, Sh)
    ], 2));
  }
}), Ch = { role: "presentation" }, wh = { class: "px-4 py-1 mb-0 text-muted" }, Eh = /* @__PURE__ */ v({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(M) {
    return (A, I) => (T(), c("li", Ch, [
      s("p", wh, [
        Q(A.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ])
    ]));
  }
}), Th = ["id", "novalidate", "onSubmit"], $w = /* @__PURE__ */ v({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: !1 },
    novalidate: { default: !1 },
    validated: { default: !1 }
  },
  emits: ["submit"],
  setup(M, { emit: A }) {
    const I = M, g = l(o(I, "floating")), D = l(o(I, "novalidate")), N = l(o(I, "validated")), L = y(() => ({
      "form-floating": g.value,
      "was-validated": N.value
    })), t = (j) => A("submit", j);
    return (j, u) => (T(), c("form", {
      id: M.id,
      novalidate: e(D),
      class: F(e(L)),
      onSubmit: BI(t, ["prevent"])
    }, [
      Q(j.$slots, "default")
    ], 42, Th));
  }
}), xh = { class: "form-floating" }, ah = ["for"], yh = /* @__PURE__ */ v({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null,
    text: null
  },
  setup(M) {
    return (A, I) => (T(), c("div", xh, [
      Q(A.$slots, "default", {}, () => [
        gM(P(M.text), 1)
      ]),
      s("label", { for: M.labelFor }, [
        Q(A.$slots, "label", {}, () => [
          gM(P(M.label), 1)
        ])
      ], 8, ah)
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
    const A = M, I = l(o(A, "forceShow")), g = l(o(A, "state")), D = l(o(A, "tooltip")), N = y(
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
    return (j, u) => (T(), V(wM(M.tag), CM({ class: e(L) }, e(t)), {
      default: O(() => [
        Q(j.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mN = /* @__PURE__ */ v({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(M) {
    return (A, I) => (T(), V(wM(M.tag), { class: "row d-flex flex-wrap" }, {
      default: O(() => [
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
    const A = M, I = l(o(A, "inline")), g = y(() => [
      [`text-${A.textVariant}`],
      {
        "form-text": !I.value
      }
    ]);
    return (D, N) => (T(), V(wM(M.tag), {
      id: M.id,
      class: F(e(g))
    }, {
      default: O(() => [
        Q(D.$slots, "default", {}, () => [
          gM(P(M.text), 1)
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
    const A = M, I = l(o(A, "forceShow")), g = l(o(A, "state")), D = l(o(A, "tooltip")), N = y(
      () => I.value === !0 || g.value === !0
    ), L = y(() => ({
      "d-block": N.value,
      "valid-feedback": !D.value,
      "valid-tooltip": D.value
    })), t = y(() => A.ariaLive ? "true" : void 0);
    return (j, u) => (T(), V(wM(M.tag), {
      id: M.id,
      role: M.role,
      "aria-live": M.ariaLive,
      "aria-atomic": e(t),
      class: F(e(L))
    }, {
      default: O(() => [
        Q(j.$slots, "default", {}, () => [
          gM(P(M.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), nh = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], oh = ["for"], lh = {
  inheritAttrs: !1
}, qw = /* @__PURE__ */ v({
  ...lh,
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
    const I = M, g = jA(), D = NA(o(I, "id"), "form-check"), N = l(
      o(I, "indeterminate")
    ), L = l(o(I, "autofocus")), t = l(o(I, "plain")), j = l(o(I, "button")), u = l(o(I, "switch")), S = l(o(I, "disabled")), i = l(o(I, "inline")), C = l(o(I, "required")), w = l(o(I, "state")), E = DM(null), x = DM(!1), n = y(() => !lA(g.default)), a = y({
      get: () => I.uncheckedValue ? Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : I.modelValue === I.value : I.modelValue,
      set: (G) => {
        let r = G;
        Array.isArray(I.modelValue) ? I.uncheckedValue && (r = I.modelValue, G ? (r.indexOf(I.uncheckedValue) > -1 && r.splice(r.indexOf(I.uncheckedValue), 1), r.push(I.value)) : (r.indexOf(I.value) > -1 && r.splice(r.indexOf(I.value), 1), r.push(I.uncheckedValue))) : r = G ? I.value : I.uncheckedValue, A("input", r), A("update:modelValue", r), A("change", r);
      }
    }), z = y(() => Array.isArray(I.modelValue) ? I.modelValue.indexOf(I.value) > -1 : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), d = fA({
      plain: o(t, "value"),
      button: o(j, "value"),
      inline: o(i, "value"),
      switch: o(u, "value"),
      size: o(I, "size"),
      state: o(w, "value"),
      buttonVariant: o(I, "buttonVariant")
    }), Y = dC(d), h = UC(d), k = mC(d);
    return PM(() => {
      L.value && E.value.focus();
    }), (G, r) => (T(), c("div", {
      class: F(e(Y))
    }, [
      _M(s("input", CM({ id: e(D) }, G.$attrs, {
        ref_key: "input",
        ref: E,
        "onUpdate:modelValue": r[0] || (r[0] = (b) => EA(a) ? a.value = b : null),
        class: e(h),
        type: "checkbox",
        disabled: e(S),
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
      }), null, 16, nh), [
        [$I, e(a)]
      ]),
      e(n) || !e(t) ? (T(), c("label", {
        key: 0,
        for: e(D),
        class: F([e(k), { active: e(z), focus: x.value }])
      }, [
        Q(G.$slots, "default")
      ], 10, oh)) : B("", !0)
    ], 2));
  }
}), sh = ["id"], ch = ["innerHTML"], zh = ["textContent"], Yh = /* @__PURE__ */ v({
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
    l(o(I, "autofocus"));
    const t = l(o(I, "buttons")), j = l(o(I, "disabled"));
    l(o(I, "plain"));
    const u = l(o(I, "required")), S = l(o(I, "stacked")), i = l(o(I, "state")), C = l(o(I, "switches")), w = l(o(I, "validated")), E = y({
      get: () => I.modelValue,
      set: (d) => {
        if (JSON.stringify(d) === JSON.stringify(I.modelValue))
          return;
        const Y = I.options.filter(
          (h) => d.map((k) => JSON.stringify(k)).includes(JSON.stringify(typeof h == "string" ? h : h[I.valueField]))
        ).map((h) => typeof h == "string" ? h : h[I.valueField]);
        A("input", Y), A("update:modelValue", Y), A("change", Y);
      }
    }), x = y(
      () => (g.first ? KN(g.first(), D, j.value) : []).concat(I.options.map((d) => bC(d, I))).concat(g.default ? KN(g.default(), D, j.value) : []).map((d, Y) => WC(d, Y, I, L, N)).map((d) => ({
        ...d,
        props: {
          switch: C.value,
          ...d.props
        }
      }))
    ), n = fA({
      required: o(u, "value"),
      ariaInvalid: o(I, "ariaInvalid"),
      state: o(i, "value"),
      validated: o(w, "value"),
      buttons: o(t, "value"),
      stacked: o(S, "value"),
      size: o(I, "size")
    }), a = OC(n), z = hC(n);
    return (d, Y) => (T(), c("div", CM(e(a), {
      id: e(N),
      role: "group",
      class: [e(z), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), c(MM, null, eM(e(x), (h, k) => (T(), V(qw, CM({
        key: k,
        modelValue: e(E),
        "onUpdate:modelValue": Y[0] || (Y[0] = (G) => EA(E) ? E.value = G : null)
      }, h.props), {
        default: O(() => [
          h.html ? (T(), c("span", {
            key: 0,
            innerHTML: h.html
          }, null, 8, ch)) : (T(), c("span", {
            key: 1,
            textContent: P(h.text)
          }, null, 8, zh))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, sh));
  }
}), Kw = ["input", "select", "textarea"], rh = Kw.map((M) => `${M}:not([disabled])`).join(), dh = [...Kw, "a", "button", "label"], Uh = "label", mh = "invalid-feedback", Oh = "valid-feedback", hh = "description", bh = "default", Wh = v({
  components: { BCol: iD, BFormInvalidFeedback: wj, BFormRow: mN, BFormText: Ej, BFormValidFeedback: Tj },
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
    const I = l(o(M, "disabled")), g = l(o(M, "labelSrOnly")), D = l(o(M, "state")), N = l(o(M, "tooltip")), L = l(o(M, "validated")), t = l(o(M, "floating")), j = null, u = ["xs", "sm", "md", "lg", "xl"], S = (k, G) => u.reduce((r, b) => {
      const Z = tS(b === "xs" ? "" : b, `${G}Align`), R = k[Z] || null;
      return R && (b === "xs" ? r.push(`text-${R}`) : r.push(`text-${b}-${R}`)), r;
    }, []), i = (k, G) => u.reduce((r, b) => {
      const Z = tS(b === "xs" ? "" : b, `${G}Cols`);
      let R = k[Z];
      return R = R === "" ? !0 : R || !1, typeof R != "boolean" && R !== "auto" && (R = SD(R, 0), R = R > 0 ? R : !1), R && (b === "xs" ? r.cols = R : r[b || (typeof R == "boolean" ? "col" : "cols")] = R), r;
    }, {}), C = DM(), w = (k, G = null) => {
      if (wY && M.labelFor) {
        const r = lC(`#${iY(M.labelFor)}`, C);
        if (r) {
          const b = "aria-describedby", Z = (k || "").split(zN), R = (G || "").split(zN), AM = (Hj(r, b) || "").split(zN).filter((LM) => !R.includes(LM)).concat(Z).filter((LM, IM, oM) => oM.indexOf(LM) === IM).filter((LM) => LM).join(" ").trim();
          AM ? zY(r, b, AM) : YY(r, b);
        }
      }
    }, E = y(() => i(M, "content")), x = y(() => S(M, "label")), n = y(() => i(M, "label")), a = y(
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
    ), PM(() => {
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
        if (dh.indexOf(r) !== -1)
          return;
        const b = sY(rh, C).filter(lY);
        b.length === 1 && nY(b[0]);
      },
      stateClass: d
    };
  },
  render() {
    const M = this.$props, A = this.$slots, I = NA(), g = !M.labelFor;
    let D = null;
    const N = pA(Uh, {}, A) || M.label, L = N ? gI("_BV_label_") : null;
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
        )), this.isHorizontal ? D = sM(iD, this.labelColProps, { default: () => D }) : D = sM("div", {}, [D]);
      else {
        const h = {
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
        this.isHorizontal ? D = sM(iD, h, { default: () => N }) : D = sM(Y, h, N);
      }
    }
    let t = null;
    const j = pA(mh, {}, A) || this.invalidFeedback, u = j ? gI("_BV_feedback_invalid_") : void 0;
    j && (t = sM(
      wj,
      {
        ariaLive: M.feedbackAriaLive,
        id: u,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => j }
    ));
    let S = null;
    const i = pA(Oh, {}, A) || this.validFeedback, C = i ? gI("_BV_feedback_valid_") : void 0;
    i && (S = sM(
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
    const E = pA(hh, {}, A) || this.description, x = E ? gI("_BV_description_") : void 0;
    E && (w = sM(
      Ej,
      {
        id: x
      },
      { default: () => E }
    ));
    const n = this.ariaDescribedby = [
      x,
      this.stateBoolean === !1 ? u : null,
      this.stateBoolean === !0 ? C : null
    ].filter((Y) => Y).join(" ") || null, a = [
      pA(bh, { ariaDescribedby: n, descriptionId: x, id: I, labelId: L }, A) || "",
      t,
      S,
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
    this.isHorizontal && (z = sM(iD, { ref: "content", ...this.contentColProps }, { default: () => a }));
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
    return this.isHorizontal && !g ? sM(mN, d, { default: () => [D, z] }) : sM(
      g ? "fieldset" : "div",
      d,
      this.isHorizontal && g ? [sM(mN, {}, { default: () => [D, z] })] : this.isHorizontal || !this.floatingBoolean ? [D, z] : [z]
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
], kh = v({
  props: {
    ...kC,
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
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: N, onChange: L, onBlur: t, focus: j, blur: u } = pC(M, A), S = DM(!1), i = y(() => {
      const E = M.type === "range", x = M.type === "color";
      return {
        "form-control-highlighted": S.value,
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
      blur: u,
      highlight: () => {
        S.value !== !0 && (S.value = !0, setTimeout(() => {
          S.value = !1;
        }, 2e3));
      }
    };
  }
}), ph = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function Qh(M, A, I, g, D, N) {
  return T(), c("input", CM({
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
  }), null, 16, ph);
}
const vh = /* @__PURE__ */ FM(kh, [["render", Qh]]), Gh = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], fh = ["for"], ME = /* @__PURE__ */ v({
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
    const I = M, g = jA(), D = NA(o(I, "id"), "form-check"), N = l(o(I, "autofocus")), L = l(o(I, "plain")), t = l(o(I, "button")), j = l(o(I, "switch")), u = l(o(I, "disabled")), S = l(o(I, "inline")), i = l(o(I, "required")), C = l(o(I, "state")), w = DM(null), E = DM(!1), x = y({
      get: () => Array.isArray(I.modelValue) ? I.modelValue[0] : I.modelValue,
      set: (k) => {
        const G = k ? I.value : !1, r = Array.isArray(I.modelValue) ? [G] : G;
        A("input", r), A("change", r), A("update:modelValue", r);
      }
    }), n = y(() => Array.isArray(I.modelValue) ? (I.modelValue || []).find((k) => k === I.value) : JSON.stringify(I.modelValue) === JSON.stringify(I.value)), a = y(() => !lA(g.default)), z = fA({
      plain: o(L, "value"),
      button: o(t, "value"),
      inline: o(S, "value"),
      switch: o(j, "value"),
      size: o(I, "size"),
      state: o(C, "value"),
      buttonVariant: o(I, "buttonVariant")
    }), d = dC(z), Y = UC(z), h = mC(z);
    return PM(() => {
      N.value && w.value !== null && w.value.focus();
    }), (k, G) => (T(), c("div", {
      class: F(e(d))
    }, [
      _M(s("input", CM({ id: e(D) }, k.$attrs, {
        ref_key: "input",
        ref: w,
        "onUpdate:modelValue": G[0] || (G[0] = (r) => EA(x) ? x.value = r : null),
        class: e(Y),
        type: "radio",
        disabled: e(u),
        required: !!M.name && !!e(i),
        name: M.name,
        form: M.form,
        "aria-label": M.ariaLabel,
        "aria-labelledby": M.ariaLabelledBy,
        value: M.value,
        "aria-required": M.name && e(i) ? !0 : void 0,
        onFocus: G[1] || (G[1] = (r) => E.value = !0),
        onBlur: G[2] || (G[2] = (r) => E.value = !1)
      }), null, 16, Gh), [
        [Li, e(x)]
      ]),
      e(a) || !e(L) ? (T(), c("label", {
        key: 0,
        for: e(D),
        class: F([e(h), { active: e(n), focus: E.value }])
      }, [
        Q(k.$slots, "default")
      ], 10, fh)) : B("", !0)
    ], 2));
  }
}), Jh = ["id"], Vh = ["innerHTML"], Zh = ["textContent"], Bh = /* @__PURE__ */ v({
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
    l(o(I, "autofocus"));
    const t = l(o(I, "buttons")), j = l(o(I, "disabled"));
    l(o(I, "plain"));
    const u = l(o(I, "required")), S = l(o(I, "stacked")), i = l(o(I, "state")), C = l(o(I, "validated")), w = y({
      get: () => I.modelValue,
      set: (z) => {
        A("input", z), A("update:modelValue", z), A("change", z);
      }
    }), E = y(
      () => (g.first ? KN(g.first(), D, j.value) : []).concat(I.options.map((z) => bC(z, I))).concat(g.default ? KN(g.default(), D, j.value) : []).map((z, d) => WC(z, d, I, L, N)).map((z) => ({
        ...z
      }))
    ), x = fA({
      required: o(u, "value"),
      ariaInvalid: o(I, "ariaInvalid"),
      state: o(i, "value"),
      validated: o(C, "value"),
      buttons: o(t, "value"),
      stacked: o(S, "value"),
      size: o(I, "size")
    }), n = OC(x), a = hC(x);
    return (z, d) => (T(), c("div", CM(e(n), {
      id: e(N),
      role: "radiogroup",
      class: [e(a), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (T(!0), c(MM, null, eM(e(E), (Y, h) => (T(), V(ME, CM({
        key: h,
        modelValue: e(w),
        "onUpdate:modelValue": d[0] || (d[0] = (k) => EA(w) ? w.value = k : null)
      }, Y.props), {
        default: O(() => [
          Y.html ? (T(), c("span", {
            key: 0,
            innerHTML: Y.html
          }, null, 8, Vh)) : (T(), c("span", {
            key: 1,
            textContent: P(Y.text)
          }, null, 8, Zh))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, Jh));
  }
}), Ph = ["value", "disabled"], xu = /* @__PURE__ */ v({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: !1 }
  },
  setup(M) {
    const I = l(o(M, "disabled"));
    return (g, D) => (T(), c("option", {
      value: M.value,
      disabled: e(I)
    }, [
      Q(g.$slots, "default")
    ], 8, Ph));
  }
}), Fh = ["label"], AE = /* @__PURE__ */ v({
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
    return (g, D) => (T(), c("optgroup", { label: M.label }, [
      Q(g.$slots, "first"),
      (T(!0), c(MM, null, eM(e(I), (N, L) => (T(), V(xu, CM({
        key: L,
        value: N.value,
        disabled: N.disabled
      }, g.$attrs, {
        innerHTML: N.html || N.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      Q(g.$slots, "default")
    ], 8, Fh));
  }
}), Xh = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], Rh = /* @__PURE__ */ v({
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
    const g = M, D = NA(o(g, "id"), "input"), N = l(o(g, "autofocus")), L = l(o(g, "disabled")), t = l(o(g, "multiple")), j = l(o(g, "plain")), u = l(o(g, "required")), S = l(o(g, "state")), i = DM(), C = y(() => ({
      "form-control": j.value,
      [`form-control-${g.size}`]: g.size && j.value,
      "form-select": !j.value,
      [`form-select-${g.size}`]: g.size && !j.value,
      "is-valid": S.value === !0,
      "is-invalid": S.value === !1
    })), w = y(() => {
      if (g.selectSize || j.value)
        return g.selectSize;
    }), E = y(
      () => dL(g.ariaInvalid, S.value)
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
    return PM(d), yj(d), A({
      blur: z,
      focus: a
    }), (Y, h) => _M((T(), c("select", CM({
      id: e(D),
      ref_key: "input",
      ref: i
    }, Y.$attrs, {
      "onUpdate:modelValue": h[0] || (h[0] = (k) => EA(n) ? n.value = k : null),
      class: e(C),
      name: M.name,
      form: M.form || void 0,
      multiple: e(t) || void 0,
      size: e(w),
      disabled: e(L),
      required: e(u),
      "aria-required": e(u) ? !0 : void 0,
      "aria-invalid": e(E)
    }), [
      Q(Y.$slots, "first"),
      (T(!0), c(MM, null, eM(e(x), (k, G) => (T(), c(MM, { key: G }, [
        Array.isArray(k.options) ? (T(), V(AE, {
          key: 0,
          label: k.label,
          options: k.options
        }, null, 8, ["label", "options"])) : (T(), V(xu, {
          key: 1,
          value: k.value,
          disabled: k.disabled,
          innerHTML: k.html || k.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      Q(Y.$slots, "default")
    ], 16, Xh)), [
      [bg, e(n)]
    ]);
  }
}), Hh = ["id"], IE = /* @__PURE__ */ v({
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
    const I = M, g = jA(), D = NA(o(I, "id")), N = l(o(I, "disabled")), L = l(o(I, "noRemove")), t = l(o(I, "pill")), j = y(
      () => {
        var i, C, w;
        return (w = ((C = (i = g.default) == null ? void 0 : i.call(g)[0].children) == null ? void 0 : C.toString()) || I.title) != null ? w : "";
      }
    ), u = y(() => `${D.value}taglabel__`), S = y(() => [
      `bg-${I.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(I.variant),
        "rounded-pill": t.value,
        disabled: N.value
      }
    ]);
    return (i, C) => (T(), V(wM(M.tag), {
      id: e(D),
      title: e(j),
      class: F(["badge b-form-tag d-inline-flex align-items-center mw-100", e(S)]),
      "aria-labelledby": e(u)
    }, {
      default: O(() => [
        s("span", {
          id: e(u),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          Q(i.$slots, "default", {}, () => [
            gM(P(e(j)), 1)
          ])
        ], 8, Hh),
        !e(N) && !e(L) ? (T(), V(ID, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": M.removeLabel,
          class: "b-form-tag-remove",
          white: !["warning", "info", "light"].includes(M.variant),
          "aria-describedby": e(u),
          "aria-controls": M.id,
          onClick: C[0] || (C[0] = (w) => A("remove", e(j)))
        }, null, 8, ["aria-label", "white", "aria-describedby", "aria-controls"])) : B("", !0)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), _h = ["id"], $h = ["id", "for", "aria-live"], qh = ["id", "aria-live"], Kh = ["id"], Mb = ["aria-controls"], Ab = {
  role: "group",
  class: "d-flex"
}, Ib = ["id", "disabled", "value", "type", "placeholder", "form", "required"], gb = ["disabled"], Db = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, Nb = {
  key: 0,
  class: "d-block invalid-feedback"
}, Lb = {
  key: 1,
  class: "form-text text-muted"
}, tb = {
  key: 2,
  class: "form-text text-muted"
}, jb = ["name", "value"], ub = /* @__PURE__ */ v({
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
    const I = M, g = NA(), D = l(o(I, "addOnChange")), N = l(o(I, "autofocus")), L = l(o(I, "disabled")), t = l(o(I, "noAddOnEnter")), j = l(o(I, "noOuterFocus")), u = l(o(I, "noTagRemove")), S = l(o(I, "removeOnDelete")), i = l(o(I, "required")), C = l(o(I, "state")), w = l(o(I, "tagPills")), E = DM(null), x = y(() => I.inputId || `${g.value}input__`), n = DM(I.modelValue), a = DM(""), z = DM(!1), d = DM(!1), Y = DM(""), h = DM([]), k = DM([]), G = DM([]), r = y(() => ({
      [`form-control-${I.size}`]: I.size !== void 0,
      disabled: L.value,
      focus: d.value,
      "is-invalid": C.value === !1,
      "is-valid": C.value === !0
    })), b = y(() => n.value.includes(a.value)), Z = y(
      () => a.value === "" ? !1 : !I.tagValidator(a.value)
    ), R = y(() => n.value.length === I.limit), AM = y(() => !Z.value && !b.value), LM = y(() => ({
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
        input: yM,
        keydown: bM,
        change: dM
      },
      inputId: x,
      inputType: I.inputType,
      invalidTagText: I.invalidTagText,
      invalidTags: k.value,
      isDuplicate: b.value,
      isInvalid: Z.value,
      isLimitReached: R.value,
      limitTagsText: I.limitTagsText,
      limit: I.limit,
      noTagRemove: u.value,
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
    const IM = () => {
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
    }, yM = (iM) => {
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
      h.value = I.tagValidator(zM) && !b.value ? [zM] : [], k.value = I.tagValidator(zM) ? [] : [zM], G.value = b.value ? [zM] : [], A("tag-state", h.value, k.value, G.value);
    }, dM = (iM) => {
      D.value && (yM(iM), b.value || vM(a.value));
    }, bM = (iM) => {
      if (iM.key === "Enter" && !t.value) {
        vM(a.value);
        return;
      }
      (iM.key === "Backspace" || iM.key === "Delete") && S.value && a.value === "" && z.value && n.value.length > 0 ? fM(n.value[n.value.length - 1]) : z.value = !0;
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
    return PM(() => {
      IM(), I.modelValue.length > 0 && (z.value = !0);
    }), yj(() => IM()), (iM, zM) => (T(), c("div", {
      id: e(g),
      class: F(["b-form-tags form-control h-auto", e(r)]),
      role: "group",
      tabindex: "-1",
      onFocusin: oM,
      onFocusout: zM[1] || (zM[1] = (J) => A("focusout", J))
    }, [
      s("output", {
        id: `${e(g)}selected_tags__`,
        class: "visually-hidden",
        role: "status",
        for: e(x),
        "aria-live": d.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, P(n.value.join(", ")), 9, $h),
      s("div", {
        id: `${e(g)}removed_tags__`,
        role: "status",
        "aria-live": d.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + P(M.tagRemovedLabel) + ") " + P(Y.value), 9, qh),
      Q(iM.$slots, "default", qM(iA(e(LM))), () => [
        s("ul", {
          id: `${e(g)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (T(!0), c(MM, null, eM(n.value, (J, _) => Q(iM.$slots, "tag", qM(CM({ key: _ }, { tag: J, tagClass: M.tagClass, tagVariant: M.tagVariant, tagPills: e(w), removeTag: fM })), () => [
            W(IE, {
              class: F(M.tagClass),
              tag: "li",
              variant: M.tagVariant,
              pill: M.tagPills,
              onRemove: fM
            }, {
              default: O(() => [
                gM(P(J), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"])
          ])), 128)),
          s("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${e(g)}tag_list__`
          }, [
            s("div", Ab, [
              s("input", CM({
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
                onInput: yM,
                onChange: dM,
                onKeydown: bM,
                onFocus: SM,
                onBlur: tM
              }), null, 16, Ib),
              e(AM) ? (T(), c("button", {
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
                  gM(P(M.addButtonText), 1)
                ])
              ], 10, gb)) : B("", !0)
            ])
          ], 8, Mb)
        ], 8, Kh),
        s("div", Db, [
          e(Z) ? (T(), c("div", Nb, P(M.invalidTagText) + ": " + P(a.value), 1)) : B("", !0),
          e(b) ? (T(), c("small", Lb, P(M.duplicateTagText) + ": " + P(a.value), 1)) : B("", !0),
          n.value.length === M.limit ? (T(), c("small", tb, "Tag limit reached")) : B("", !0)
        ])
      ]),
      M.name ? (T(!0), c(MM, { key: 0 }, eM(n.value, (J, _) => (T(), c("input", {
        key: _,
        type: "hidden",
        name: M.name,
        value: J
      }, null, 8, jb))), 128)) : B("", !0)
    ], 42, _h));
  }
}), Sb = v({
  props: {
    ...kC,
    noResize: { type: [Boolean, String], default: !1 },
    rows: { type: [String, Number], required: !1, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(M, { emit: A }) {
    const { input: I, computedId: g, computedAriaInvalid: D, onInput: N, onChange: L, onBlur: t, focus: j, blur: u } = pC(M, A), S = l(o(M, "noResize")), i = y(() => ({
      "form-control": !M.plaintext,
      "form-control-plaintext": M.plaintext,
      [`form-control-${M.size}`]: !!M.size,
      "is-valid": M.state === !0,
      "is-invalid": M.state === !1
    })), C = y(
      () => S.value ? { resize: "none" } : void 0
    );
    return {
      input: I,
      computedId: g,
      computedAriaInvalid: D,
      onInput: N,
      onChange: L,
      onBlur: t,
      focus: j,
      blur: u,
      computedClasses: i,
      computedStyles: C
    };
  }
}), ib = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function eb(M, A, I, g, D, N) {
  return T(), c("textarea", CM({
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
  }), null, 16, ib);
}
const Cb = /* @__PURE__ */ FM(Sb, [["render", eb]]), wb = {
  key: 0,
  class: "input-group-text"
}, Eb = ["innerHTML"], Tb = { key: 1 }, xb = {
  key: 0,
  class: "input-group-text"
}, ab = ["innerHTML"], yb = { key: 1 }, nb = /* @__PURE__ */ v({
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
    return (N, L) => (T(), V(wM(M.tag), {
      id: M.id,
      class: F(["input-group", e(I)]),
      role: "group"
    }, {
      default: O(() => [
        Q(N.$slots, "prepend", {}, () => [
          e(D) ? (T(), c("span", wb, [
            M.prependHtml ? (T(), c("span", {
              key: 0,
              innerHTML: M.prependHtml
            }, null, 8, Eb)) : (T(), c("span", Tb, P(M.prepend), 1))
          ])) : B("", !0)
        ]),
        Q(N.$slots, "default"),
        Q(N.$slots, "append", {}, () => [
          e(g) ? (T(), c("span", xb, [
            M.appendHtml ? (T(), c("span", {
              key: 0,
              innerHTML: M.appendHtml
            }, null, 8, ab)) : (T(), c("span", yb, P(M.append), 1))
          ])) : B("", !0)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), gE = /* @__PURE__ */ v({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: null
  },
  setup(M) {
    return (A, I) => (T(), V(wM(M.tag), { class: "input-group-text" }, {
      default: O(() => [
        Q(A.$slots, "default", {}, () => [
          gM(P(M.text), 1)
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
    const I = l(o(M, "isText"));
    return (g, D) => e(I) ? (T(), V(gE, { key: 0 }, {
      default: O(() => [
        Q(g.$slots, "default")
      ]),
      _: 3
    })) : Q(g.$slots, "default", { key: 1 });
  }
}), ob = /* @__PURE__ */ v({
  __name: "BInputGroupAppend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), V(au, { "is-text": M.isText }, {
      default: O(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), lb = /* @__PURE__ */ v({
  __name: "BInputGroupPrepend",
  props: {
    isText: { default: !1 }
  },
  setup(M) {
    return (A, I) => (T(), V(au, { "is-text": M.isText }, {
      default: O(() => [
        Q(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), DE = Symbol(), sb = /* @__PURE__ */ v({
  __name: "BListGroup",
  props: {
    flush: { default: !1 },
    horizontal: { type: [Boolean, String], default: !1 },
    numbered: { default: !1 },
    tag: { default: "div" }
  },
  setup(M) {
    const A = M, I = l(o(A, "flush")), g = l(o(A, "numbered")), D = y(() => {
      const L = I.value ? !1 : A.horizontal;
      return {
        "list-group-flush": I.value,
        "list-group-horizontal": L === !0,
        [`list-group-horizontal-${L}`]: typeof L == "string",
        "list-group-numbered": g.value
      };
    }), N = y(() => g.value === !0 ? "ol" : A.tag);
    return NI(DE, {
      numbered: g.value
    }), (L, t) => (T(), V(wM(e(N)), {
      class: F(["list-group", e(D)])
    }, {
      default: O(() => [
        Q(L.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cb = /* @__PURE__ */ v({
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
    const A = M, I = ti(), g = tA(DE, null), D = l(o(A, "action")), N = l(o(A, "active")), L = l(o(A, "button")), t = l(o(A, "disabled")), j = y(() => !L.value && (!!A.href || !!A.to)), u = y(
      () => g != null && g.numbered ? "li" : L.value ? "button" : j.value ? zA : A.tag
    ), S = y(
      () => D.value || j.value || L.value || ["a", "router-link", "button", "b-link"].includes(A.tag)
    ), i = y(() => ({
      [`list-group-item-${A.variant}`]: A.variant !== void 0,
      "list-group-item-action": S.value,
      active: N.value,
      disabled: t.value
    })), C = y(() => {
      const w = {};
      return L.value && ((!I || !I.type) && (w.type = "button"), t.value && (w.disabled = !0)), w;
    });
    return (w, E) => (T(), V(wM(e(u)), CM({
      class: ["list-group-item", e(i)],
      "aria-current": e(N) ? !0 : void 0,
      "aria-disabled": e(t) ? !0 : void 0,
      target: e(j) ? M.target : void 0,
      href: e(L) ? void 0 : M.href,
      to: e(L) ? void 0 : M.to
    }, e(C)), {
      default: O(() => [
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
    const A = M, I = l(o(A, "appear")), g = l(o(A, "noFade")), D = y(() => {
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
    return (t, j) => (T(), V(LL, qM(iA(e(L))), {
      default: O(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zb = ["id", "aria-labelledby", "aria-describedby", "onKeyup"], Yb = ["id"], rb = {
  inheritAttrs: !1
}, db = /* @__PURE__ */ v({
  ...rb,
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
    const I = M, g = jA(), D = NA(o(I, "id"), "modal"), N = l(o(I, "busy")), L = l(o(I, "lazy")), t = l(o(I, "cancelDisabled")), j = l(o(I, "centered")), u = l(o(I, "hideBackdrop")), S = l(o(I, "hideFooter")), i = l(o(I, "hideHeader")), C = l(o(I, "hideHeaderClose")), w = l(o(I, "modelValue")), E = l(o(I, "noCloseOnBackdrop")), x = l(o(I, "noCloseOnEsc")), n = l(o(I, "noFade")), a = l(o(I, "noFocus")), z = l(o(I, "okDisabled")), d = l(o(I, "okOnly")), Y = l(o(I, "scrollable")), h = l(o(I, "titleSrOnly")), k = l(o(I, "static")), G = DM(!1), r = DM(null), b = DM(!1), Z = y(() => [
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
    ]), IM = y(() => [
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
        ["visually-hidden"]: h.value
      }
    ]), tM = y(() => t.value || N.value), yM = y(() => z.value || N.value), dM = () => A("update:modelValue", !1), bM = (_) => {
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
    ), (_, $) => (T(), V(nE, {
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
        default: O(() => [
          _M(s("div", CM({
            id: e(D),
            ref_key: "element",
            ref: r,
            class: ["modal", e(Z)],
            role: "dialog",
            "aria-labelledby": `${e(D)}-label`,
            "aria-describedby": `${e(D)}-body`,
            tabindex: "-1"
          }, _.$attrs, {
            onKeyup: Ni(bM, ["esc"])
          }), [
            s("div", {
              class: F(["modal-dialog", e(AM)])
            }, [
              !e(L) || e(L) && b.value || e(L) && e(w) === !0 ? (T(), c("div", {
                key: 0,
                class: F(["modal-content", M.contentClass])
              }, [
                e(i) ? B("", !0) : (T(), c("div", {
                  key: 0,
                  class: F(["modal-header", e(IM)])
                }, [
                  Q(_.$slots, "header", {}, () => [
                    (T(), V(wM(M.titleTag), {
                      id: `${e(D)}-label`,
                      class: F(["modal-title", e(SM)])
                    }, {
                      default: O(() => [
                        Q(_.$slots, "title", {}, () => [
                          gM(P(M.title), 1)
                        ], !0)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    e(C) ? B("", !0) : (T(), c(MM, { key: 0 }, [
                      e(R) ? (T(), c("button", {
                        key: 0,
                        type: "button",
                        "data-bs-dismiss": "modal",
                        onClick: $[0] || ($[0] = (NM) => dM())
                      }, [
                        Q(_.$slots, "header-close", {}, void 0, !0)
                      ])) : (T(), V(ID, {
                        key: 1,
                        "aria-label": M.headerCloseLabel,
                        "data-bs-dismiss": "modal",
                        white: M.headerCloseWhite,
                        onClick: $[1] || ($[1] = (NM) => dM())
                      }, null, 8, ["aria-label", "white"]))
                    ], 64))
                  ], !0)
                ], 2)),
                s("div", {
                  id: `${e(D)}-body`,
                  class: F(["modal-body", e(LM)])
                }, [
                  Q(_.$slots, "default", {}, void 0, !0)
                ], 10, Yb),
                e(S) ? B("", !0) : (T(), c("div", {
                  key: 1,
                  class: F(["modal-footer", e(oM)])
                }, [
                  Q(_.$slots, "footer", {}, () => [
                    Q(_.$slots, "cancel", {}, () => [
                      e(d) ? B("", !0) : (T(), V(WD, {
                        key: 0,
                        type: "button",
                        class: "btn",
                        disabled: e(tM),
                        size: M.buttonSize,
                        variant: M.cancelVariant,
                        onClick: $[2] || ($[2] = (NM) => (dM(), A("cancel")))
                      }, {
                        default: O(() => [
                          gM(P(M.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], !0),
                    Q(_.$slots, "ok", {}, () => [
                      W(WD, {
                        type: "button",
                        class: "btn",
                        disabled: e(yM),
                        size: M.buttonSize,
                        variant: M.okVariant,
                        onClick: $[3] || ($[3] = (NM) => (dM(), A("ok")))
                      }, {
                        default: O(() => [
                          gM(P(M.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], !0)
                  ], !0)
                ], 2))
              ], 2)) : B("", !0)
            ], 2),
            e(u) ? B("", !0) : Q(_.$slots, "backdrop", { key: 0 }, () => [
              s("div", {
                class: "modal-backdrop fade show",
                onClick: $[4] || ($[4] = (NM) => !e(E) && dM())
              })
            ], !0)
          ], 16, zb), [
            [oE, e(w)]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
const Ub = /* @__PURE__ */ FM(db, [["__scopeId", "data-v-a14859b1"]]), mb = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "cardHeader")), g = l(o(A, "fill")), D = l(o(A, "justified")), N = l(o(A, "pills")), L = l(o(A, "small")), t = l(o(A, "tabs")), j = l(o(A, "vertical")), u = y(() => ({
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
    return (S, i) => (T(), V(wM(M.tag), {
      class: F(["nav", e(u)])
    }, {
      default: O(() => [
        Q(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ob = /* @__PURE__ */ v({
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
    return (N, L) => (T(), V($w, CM(e(g), {
      class: "d-flex",
      onSubmit: BI(D, ["prevent"])
    }), {
      default: O(() => [
        Q(N.$slots, "default")
      ]),
      _: 3
    }, 16, ["onSubmit"]));
  }
}), hb = v({
  components: { BLink: zA },
  props: {
    ...sL(Sg, ["event", "routerTag"])
  },
  setup(M) {
    return { disabledBoolean: l(o(M, "disabled")) };
  }
}), bb = { class: "nav-item" };
function Wb(M, A, I, g, D, N) {
  const L = aM("b-link");
  return T(), c("li", bb, [
    W(L, CM({ class: "nav-link" }, M.$props, {
      "active-class": "active",
      tabindex: M.disabledBoolean ? -1 : void 0,
      "aria-disabled": M.disabledBoolean ? !0 : void 0
    }), {
      default: O(() => [
        Q(M.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const kb = /* @__PURE__ */ FM(hb, [["render", Wb]]), pb = { class: "nav-item dropdown" }, Qb = /* @__PURE__ */ v({
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
    return (I, g) => (T(), c("li", pb, [
      W(_w, CM(A, { "is-nav": "" }), ji({ _: 2 }, [
        eM(I.$slots, (D, N, L) => ({
          name: N,
          fn: O((t) => [
            Q(I.$slots, N, qM(iA(t || {})))
          ])
        }))
      ]), 1040)
    ]));
  }
}), vb = { class: "navbar-text" }, Gb = /* @__PURE__ */ v({
  __name: "BNavText",
  props: {
    text: null
  },
  setup(M) {
    return (A, I) => (T(), c("li", vb, [
      Q(A.$slots, "default", {}, () => [
        gM(P(M.text), 1)
      ])
    ]));
  }
}), fb = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "print")), g = l(o(A, "dark")), D = y(
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
    return (j, u) => (T(), V(wM(M.tag), {
      class: F(["navbar", e(t)]),
      role: e(D)
    }, {
      default: O(() => [
        M.container !== !1 ? (T(), c("div", {
          key: 0,
          class: F(e(L))
        }, [
          Q(j.$slots, "default")
        ], 2)) : Q(j.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), $S = sL(Sg, ["event", "routerTag"]), Jb = v({
  components: {
    BLink: zA
  },
  props: {
    tag: { type: String, default: "div" },
    ...$S
  },
  setup(M) {
    const A = y(() => bD(M)), I = y(
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
function Vb(M, A, I, g, D, N) {
  return T(), V(wM(M.computedTag), CM({ class: "navbar-brand" }, M.computedLinkProps), {
    default: O(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Zb = /* @__PURE__ */ FM(Jb, [["render", Vb]]), Bb = /* @__PURE__ */ v({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: !1 },
    justified: { default: !1 },
    small: { default: !1 },
    tag: { default: "ul" }
  },
  setup(M) {
    const A = M, I = l(o(A, "fill")), g = l(o(A, "justified")), D = l(o(A, "small")), N = y(() => ({
      "nav-fill": I.value,
      "nav-justified": g.value,
      [`justify-content-${A.align}`]: A.align !== void 0,
      small: D.value
    }));
    return (L, t) => (T(), c("ul", {
      class: F(["navbar-nav", e(N)])
    }, [
      Q(L.$slots, "default")
    ], 2));
  }
}), Pb = /* @__PURE__ */ s("span", { class: "navbar-toggler-icon" }, null, -1), Fb = /* @__PURE__ */ v({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: !1 },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(M, { emit: A }) {
    const I = M, g = l(o(I, "disabled")), D = y(() => ({
      disabled: g.value,
      "aria-label": I.label
    })), N = y(() => ({
      disabled: g.value
    })), L = (t) => {
      g.value || A("click", t);
    };
    return (t, j) => _M((T(), c("button", CM({
      class: ["navbar-toggler", e(N)],
      type: "button"
    }, e(D), { onClick: L }), [
      Q(t.$slots, "default", {}, () => [
        Pb
      ])
    ], 16)), [
      [e(Eu), e(g) ? void 0 : M.target]
    ]);
  }
}), Xb = ["data-bs-backdrop", "data-bs-scroll"], Rb = {
  key: 0,
  class: "offcanvas-header"
}, Hb = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, _b = { class: "offcanvas-body" }, $b = { key: 1 }, qb = /* @__PURE__ */ v({
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
    const I = M, g = l(o(I, "modelValue")), D = l(o(I, "bodyScrolling")), N = l(o(I, "backdrop")), L = l(o(I, "noHeaderClose")), t = l(o(I, "noHeader")), j = jA(), u = DM(), S = DM(), i = y(() => !lA(j.footer)), C = y(() => [`offcanvas-${I.placement}`]), w = () => {
      A("show"), A("update:modelValue", !0);
    }, E = () => {
      A("hide"), A("update:modelValue", !1);
    };
    return mM(
      () => g.value,
      (x) => {
        var n, a;
        x ? (n = S.value) == null || n.show(u.value) : (a = S.value) == null || a.hide();
      }
    ), MA(u, "shown.bs.offcanvas", () => A("shown")), MA(u, "hidden.bs.offcanvas", () => A("hidden")), MA(u, "show.bs.offcanvas", () => {
      w();
    }), MA(u, "hide.bs.offcanvas", () => {
      E();
    }), PM(() => {
      var x;
      S.value = new EI(u.value), g.value && ((x = S.value) == null || x.show(u.value));
    }), (x, n) => (T(), c("div", {
      ref_key: "element",
      ref: u,
      class: F(["offcanvas", e(C)]),
      tabindex: "-1",
      "aria-labelledby": "offcanvasLabel",
      "data-bs-backdrop": e(N),
      "data-bs-scroll": e(D)
    }, [
      e(t) ? B("", !0) : (T(), c("div", Rb, [
        Q(x.$slots, "header", qM(iA({ visible: e(g), placement: M.placement, hide: E })), () => [
          s("h5", Hb, [
            Q(x.$slots, "title", {}, () => [
              gM(P(M.title), 1)
            ])
          ]),
          e(L) ? B("", !0) : (T(), V(ID, {
            key: 0,
            class: "text-reset",
            "data-bs-dismiss": "offcanvas",
            "aria-label": M.dismissLabel
          }, null, 8, ["aria-label"]))
        ])
      ])),
      s("div", _b, [
        Q(x.$slots, "default")
      ]),
      e(i) ? (T(), c("div", $b, [
        Q(x.$slots, "footer", qM(iA({ visible: e(g), placement: M.placement, hide: E })))
      ])) : B("", !0)
    ], 10, Xb));
  }
}), Kb = /* @__PURE__ */ v({
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
    const I = M, g = { top: 0, left: 0, bottom: 0, right: 0 }, D = l(o(I, "fixed")), N = l(o(I, "noCenter")), L = l(o(I, "noWrap")), t = l(o(I, "show")), j = l(o(I, "spinnerSmall")), u = y(
      () => I.rounded === !0 || I.rounded === "" ? "rounded" : I.rounded === !1 ? "" : `rounded-${I.rounded}`
    ), S = y(
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
    ]), x = y(() => [S.value, u.value]), n = y(() => ({
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
    return (z, d) => (T(), V(wM(M.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": e(i)
    }, {
      default: O(() => [
        Q(z.$slots, "default"),
        W(QL, {
          "no-fade": M.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: d[1] || (d[1] = (Y) => A("shown")),
          onOnAfterLeave: d[2] || (d[2] = (Y) => A("hidden"))
        }, {
          default: O(() => [
            e(t) ? (T(), V(wM(M.overlayTag), {
              key: 0,
              class: F(e(E)),
              style: QA(e(w)),
              onClick: d[0] || (d[0] = (Y) => A("click", Y))
            }, {
              default: O(() => [
                s("div", {
                  class: F(["position-absolute", e(x)]),
                  style: QA(e(n))
                }, null, 6),
                s("div", {
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
}), M3 = 5, NE = 20, LE = 0, BA = 3, A3 = "ellipsis-text", I3 = "first-text", g3 = "last-text", D3 = "next-text", N3 = "page", L3 = "prev-text", qS = (M) => Math.max(Jg(M) || NE, 1), KS = (M) => Math.max(Jg(M) || LE, 0), t3 = (M, A) => {
  const I = Jg(M) || 1;
  return I > A ? A : I < 1 ? 1 : I;
}, j3 = v({
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
    limit: { type: Number, default: M3 },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "\u203A" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: NE },
    pills: { type: [Boolean, String], default: !1 },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "\u2039" },
    size: { type: String, required: !1 },
    totalRows: { type: Number, default: LE }
  },
  emits: ["update:modelValue", "page-click"],
  setup(M, { emit: A, slots: I }) {
    const g = l(o(M, "disabled")), D = l(o(M, "firstNumber")), N = l(o(M, "hideEllipsis")), L = l(o(M, "hideGotoEndButtons")), t = l(o(M, "lastNumber")), j = l(o(M, "pills")), u = gY(o(M, "align")), S = y(
      () => Math.ceil(KS(M.totalRows) / qS(M.perPage))
    ), i = y(() => {
      let Y;
      return S.value - M.modelValue + 2 < M.limit && M.limit > BA ? Y = S.value - w.value + 1 : Y = M.modelValue - Math.floor(w.value / 2), Y < 1 ? Y = 1 : Y > S.value - w.value && (Y = S.value - w.value + 1), M.limit <= BA && t.value && S.value === Y + w.value - 1 && (Y = Math.max(Y - 1, 1)), Y;
    }), C = y(() => {
      const Y = S.value - M.modelValue;
      let h = !1;
      return Y + 2 < M.limit && M.limit > BA ? M.limit > BA && (h = !0) : M.limit > BA && (h = !!(!N.value || D.value)), i.value <= 1 && (h = !1), h && D.value && i.value < 4 && (h = !1), h;
    }), w = y(() => {
      let Y = M.limit;
      return S.value <= M.limit ? Y = S.value : M.modelValue < M.limit - 1 && M.limit > BA ? ((!N.value || t.value) && (Y = M.limit - (D.value ? 0 : 1)), Y = Math.min(Y, M.limit)) : S.value - M.modelValue + 2 < M.limit && M.limit > BA ? (!N.value || D.value) && (Y = M.limit - (t.value ? 0 : 1)) : M.limit > BA && (Y = M.limit - (N.value ? 0 : 2)), Y;
    }), E = y(() => {
      const Y = S.value - w.value;
      let h = !1;
      M.modelValue < M.limit - 1 && M.limit > BA ? (!N.value || t.value) && (h = !0) : M.limit > BA && (h = !!(!N.value || t.value)), i.value > Y && (h = !1);
      const k = i.value + w.value - 1;
      return h && t.value && k > S.value - 3 && (h = !1), h;
    }), x = fA({
      pageSize: qS(M.perPage),
      totalRows: KS(M.totalRows),
      numberOfPages: S.value
    }), n = (Y, h) => {
      if (h === M.modelValue)
        return;
      const { target: k } = Y, G = new cL("page-click", {
        cancelable: !0,
        vueTarget: this,
        target: k
      });
      A("page-click", G, h), !G.defaultPrevented && A("update:modelValue", h);
    }, a = y(() => M.size ? `pagination-${M.size}` : ""), z = y(() => j.value ? "b-pagination-pills" : "");
    mM(
      () => M.modelValue,
      (Y) => {
        const h = t3(Y, S.value);
        h !== M.modelValue && A("update:modelValue", h);
      }
    ), mM(x, (Y, h) => {
      Y != null && (h.pageSize !== Y.pageSize && h.totalRows === Y.totalRows || h.numberOfPages !== Y.numberOfPages && M.modelValue > h.numberOfPages) && A("update:modelValue", 1);
    });
    const d = y(() => {
      const Y = [];
      for (let h = 0; h < w.value; h++)
        Y.push({ number: i.value + h, classes: null });
      return Y;
    });
    return () => {
      const Y = [], h = d.value.map((IM) => IM.number), k = (IM) => IM === M.modelValue, G = M.modelValue < 1, r = M.align === "fill", b = (IM, oM, SM, tM, yM, dM) => {
        const bM = g.value || k(dM) || G || IM < 1 || IM > S.value, vM = IM < 1 ? 1 : IM > S.value ? S.value : IM, fM = { disabled: bM, page: vM, index: vM - 1 }, iM = pA(SM, fM, I) || tM || "";
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
              yM
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
      }, Z = (IM) => sM(
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
          key: `ellipsis-${IM ? "last" : "first"}`
        },
        [
          sM(
            "span",
            { class: ["page-link"] },
            pA(A3, {}, I) || M.ellipsisText || "..."
          )
        ]
      ), R = (IM, oM) => {
        const SM = k(IM.number) && !G, tM = g.value ? null : SM || G && oM === 0 ? "0" : "-1", yM = {
          active: SM,
          disabled: g.value,
          page: IM.number,
          index: IM.number - 1,
          content: IM.number
        }, dM = pA(N3, yM, I) || IM.number, bM = sM(
          g.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !g.value && r }],
            "aria-controls": M.ariaControls || null,
            "aria-disabled": g.value ? "true" : null,
            "aria-label": M.labelPage ? `${M.labelPage} ${IM.number}` : null,
            role: "menuitemradio",
            type: g.value ? null : "button",
            tabindex: tM,
            onClick: (vM) => {
              g.value || n(vM, IM.number);
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
            key: `page-${IM.number}`
          },
          bM
        );
      };
      if (!L.value && !D.value) {
        const IM = b(
          1,
          M.labelFirstPage,
          I3,
          M.firstText,
          M.firstClass,
          1
        );
        Y.push(IM);
      }
      const AM = b(
        M.modelValue - 1,
        M.labelFirstPage,
        L3,
        M.prevText,
        M.prevClass,
        1
      );
      Y.push(AM), D.value && h[0] !== 1 && Y.push(R({ number: 1 }, 0)), C.value && Y.push(Z(!1)), d.value.forEach((IM, oM) => {
        const SM = C.value && D.value && h[0] !== 1 ? 1 : 0;
        Y.push(R(IM, oM + SM));
      }), E.value && Y.push(Z(!0)), t.value && h[h.length - 1] !== S.value && Y.push(R({ number: S.value }, -1));
      const LM = b(
        M.modelValue + 1,
        M.labelNextPage,
        D3,
        M.nextText,
        M.nextClass,
        S.value
      );
      if (Y.push(LM), !t.value && !L.value) {
        const IM = b(
          S.value,
          M.labelLastPage,
          g3,
          M.lastText,
          M.lastClass,
          S.value
        );
        Y.push(IM);
      }
      return sM(
        "ul",
        {
          class: ["pagination", a.value, u.value, z.value],
          role: "menubar",
          "aria-disabled": g.value,
          "aria-label": M.ariaLabel || null
        },
        Y
      );
    };
  }
}), dA = /* @__PURE__ */ v({
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
    return (L, t) => (T(), V(wM(M.tag), {
      class: F(["placeholder", e(D)]),
      style: QA(e(N))
    }, null, 8, ["class", "style"]));
  }
}), tE = /* @__PURE__ */ v({
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
    return (D, N) => (T(), V(dA, CM({ class: e(I) }, e(g)), null, 16, ["class"]));
  }
}), u3 = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "noButton")), g = l(o(A, "noHeader")), D = l(o(A, "noFooter")), N = l(o(A, "noImg")), L = y(() => ({
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
    return (u, S) => (T(), V(Rw, { "img-bottom": M.imgBottom }, ji({
      default: O(() => [
        Q(u.$slots, "default", {}, () => [
          W(dA, { cols: "7" }),
          W(dA, { cols: "4" }),
          W(dA, { cols: "4" }),
          W(dA, { cols: "6" }),
          W(dA, { cols: "8" })
        ])
      ]),
      _: 2
    }, [
      e(N) ? void 0 : {
        name: "img",
        fn: O(() => [
          Q(u.$slots, "img", {}, () => [
            W(DL, qM(iA(e(j))), null, 16)
          ])
        ]),
        key: "0"
      },
      e(g) ? void 0 : {
        name: "header",
        fn: O(() => [
          Q(u.$slots, "header", {}, () => [
            W(dA, qM(iA(e(L))), null, 16)
          ])
        ]),
        key: "1"
      },
      e(D) ? void 0 : {
        name: "footer",
        fn: O(() => [
          Q(u.$slots, "footer", {}, () => [
            e(I) ? (T(), V(dA, qM(CM({ key: 1 }, e(t))), null, 16)) : (T(), V(tE, qM(CM({ key: 0 }, e(t))), null, 16))
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
    const A = M, I = l(o(A, "captionTop")), g = l(o(A, "borderless")), D = l(o(A, "bordered")), N = l(o(A, "dark")), L = l(o(A, "hover")), t = l(o(A, "small")), j = l(o(A, "striped")), u = l(o(A, "stickyHeader")), S = y(() => [
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
        "b-table-sticky-header": u.value
      }
    ]);
    return (C, w) => M.responsive ? (T(), c("div", {
      key: 1,
      class: F(e(i))
    }, [
      s("table", {
        role: "table",
        class: F(e(S))
      }, [
        Q(C.$slots, "default")
      ], 2)
    ], 2)) : (T(), c("table", {
      key: 0,
      role: "table",
      class: F(e(S))
    }, [
      Q(C.$slots, "default")
    ], 2));
  }
}), S3 = /* @__PURE__ */ v({
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
      () => typeof A.columns == "string" ? SD(A.columns, 5) : A.columns
    ), g = y(
      () => typeof A.rows == "string" ? SD(A.rows, 3) : A.rows
    ), D = y(
      () => A.headerColumns === void 0 ? I.value : typeof A.headerColumns == "string" ? SD(A.headerColumns, I.value) : A.headerColumns
    ), N = y(
      () => A.footerColumns === void 0 ? I.value : typeof A.footerColumns == "string" ? SD(A.footerColumns, I.value) : A.footerColumns
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
    })), u = l(o(A, "hideHeader")), S = l(o(A, "showFooter"));
    return (i, C) => (T(), V(vL, null, {
      default: O(() => [
        e(u) ? B("", !0) : Q(i.$slots, "thead", { key: 0 }, () => [
          s("thead", null, [
            s("tr", null, [
              (T(!0), c(MM, null, eM(e(D), (w, E) => (T(), c("th", { key: E }, [
                W(dA, qM(iA(e(t))), null, 16)
              ]))), 128))
            ])
          ])
        ]),
        Q(i.$slots, "default", {}, () => [
          s("tbody", null, [
            (T(!0), c(MM, null, eM(e(g), (w, E) => (T(), c("tr", { key: E }, [
              (T(!0), c(MM, null, eM(e(I), (x, n) => (T(), c("td", { key: n }, [
                W(dA, qM(iA(e(L))), null, 16)
              ]))), 128))
            ]))), 128))
          ])
        ]),
        e(S) ? Q(i.$slots, "tfoot", { key: 1 }, () => [
          s("tfoot", null, [
            s("tr", null, [
              (T(!0), c(MM, null, eM(e(N), (w, E) => (T(), c("th", { key: E }, [
                W(dA, qM(iA(e(j))), null, 16)
              ]))), 128))
            ])
          ])
        ]) : B("", !0)
      ]),
      _: 3
    }));
  }
}), i3 = /* @__PURE__ */ v({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = l(o(M, "loading"));
    return (g, D) => e(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), e3 = v({
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
    l(o(M, "noninteractive"));
    const g = l(o(M, "show")), D = l(o(M, "html")), N = l(o(M, "sanitize")), L = DM(), t = DM(), j = DM(), u = DM(), S = DM(), i = y(() => ({
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
      t.value = w(C(x)), t.value && (j.value = new Hg(t.value, {
        customClass: M.customClass,
        container: C(M.container),
        trigger: M.triggers,
        placement: M.placement,
        title: M.title || I.title ? u.value : "",
        content: S.value,
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
    ), MA(t, "show.bs.popover", () => A("show")), MA(t, "shown.bs.popover", () => A("shown")), MA(t, "hide.bs.popover", () => A("hide")), MA(t, "hidden.bs.popover", () => A("hidden")), MA(t, "inserted.bs.popover", () => A("inserted")), PM(() => {
      var x, n, a;
      DI(() => {
        E(M.target);
      }), (n = (x = L.value) == null ? void 0 : x.parentNode) == null || n.removeChild(L.value), g.value && ((a = j.value) == null || a.show());
    }), aj(() => {
      var x;
      (x = j.value) == null || x.dispose();
    }), {
      element: L,
      titleRef: u,
      contentRef: S,
      computedClasses: i
    };
  }
}), C3 = ["id"], w3 = { ref: "titleRef" }, E3 = { ref: "contentRef" };
function T3(M, A, I, g, D, N) {
  return T(), c("div", {
    id: M.id,
    ref: "element",
    class: F(["popover b-popover", M.computedClasses]),
    role: "tooltip",
    tabindex: "-1"
  }, [
    s("div", w3, [
      Q(M.$slots, "title", {}, () => [
        gM(P(M.title), 1)
      ])
    ], 512),
    s("div", E3, [
      Q(M.$slots, "default", {}, () => [
        gM(P(M.content), 1)
      ])
    ], 512)
  ], 10, C3);
}
const x3 = /* @__PURE__ */ FM(e3, [["render", T3]]), a3 = ["aria-valuenow", "aria-valuemax"], jE = /* @__PURE__ */ v({
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
    const A = M, I = tA(uE), g = l(o(A, "animated")), D = l(o(A, "showProgress")), N = l(o(A, "showValue")), L = l(o(A, "striped")), t = y(() => ({
      "progress-bar-animated": g.value || (I == null ? void 0 : I.animated),
      "progress-bar-striped": L.value || (I == null ? void 0 : I.striped) || g.value || (I == null ? void 0 : I.animated),
      [`bg-${A.variant}`]: A.variant !== void 0
    })), j = y(
      () => typeof A.precision == "number" ? A.precision : Number.parseFloat(A.precision)
    ), u = y(
      () => typeof A.value == "number" ? A.value : Number.parseFloat(A.value)
    ), S = y(
      () => typeof A.max == "number" ? A.max : A.max === void 0 ? void 0 : Number.parseFloat(A.max)
    ), i = y(
      () => A.labelHtml !== void 0 ? A.labelHtml : N.value || (I == null ? void 0 : I.showValue) ? u.value.toFixed(j.value) : D.value || (I == null ? void 0 : I.showProgress) ? (u.value * 100 / (S.value || 100)).toFixed(j.value) : A.label !== void 0 ? A.label : ""
    ), C = y(
      () => I != null && I.max ? `${u.value * 100 / (typeof I.max == "number" ? I.max : Number.parseInt(I.max))}%` : A.max ? `${u.value * 100 / (typeof A.max == "number" ? A.max : Number.parseInt(A.max))}%` : typeof A.value == "string" ? A.value : `${A.value}%`
    );
    return (w, E) => (T(), c("div", {
      class: F(["progress-bar", e(t)]),
      role: "progressbar",
      "aria-valuenow": M.value,
      "aria-valuemin": "0",
      "aria-valuemax": M.max,
      style: QA({ width: e(C) })
    }, [
      Q(w.$slots, "default", {}, () => [
        gM(P(e(i)), 1)
      ])
    ], 14, a3));
  }
}), uE = Symbol(), y3 = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "animated")), g = l(o(A, "showProgress")), D = l(o(A, "showValue")), N = l(o(A, "striped")), L = y(() => ({
      animated: A.animated,
      max: A.max,
      precision: A.precision,
      showProgress: A.showProgress,
      showValue: A.showValue,
      striped: A.striped,
      value: A.value,
      variant: A.variant
    }));
    return NI(uE, {
      animated: I.value,
      max: A.max,
      showProgress: g.value,
      showValue: D.value,
      striped: N.value
    }), (t, j) => (T(), c("div", {
      class: "progress",
      style: QA({ height: M.height })
    }, [
      Q(t.$slots, "default", {}, () => [
        W(jE, qM(iA(e(L))), null, 16)
      ])
    ], 4));
  }
}), Mi = rL("cols", [""], { type: [String, Number], default: null }), n3 = v({
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
    const A = l(o(M, "noGutters")), I = y(() => cC(M, Mi, "cols", "row-cols"));
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
function o3(M, A, I, g, D, N) {
  return T(), V(wM(M.tag), {
    class: F(["row", M.computedClasses])
  }, {
    default: O(() => [
      Q(M.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const l3 = /* @__PURE__ */ FM(n3, [["render", o3]]), ON = /* @__PURE__ */ v({
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
    return (D, N) => (T(), c("div", {
      class: F(["b-skeleton", e(I)]),
      style: QA(e(g))
    }, null, 6));
  }
}), s3 = /* @__PURE__ */ v({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(M) {
    const A = M, I = y(() => [`b-skeleton-animate-${A.animation}`]);
    return (g, D) => (T(), c("div", {
      class: F(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", e(I)])
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), c3 = { key: 0 }, z3 = { key: 1 }, Y3 = /* @__PURE__ */ v({
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
    const A = M, I = l(o(A, "hideHeader")), g = l(o(A, "showFooter"));
    return (D, N) => (T(), V(vL, qM(iA(M.tableProps)), {
      default: O(() => [
        e(I) ? B("", !0) : (T(), c("thead", c3, [
          s("tr", null, [
            (T(!0), c(MM, null, eM(M.columns, (L, t) => (T(), c("th", { key: t }, [
              W(ON)
            ]))), 128))
          ])
        ])),
        s("tbody", null, [
          (T(!0), c(MM, null, eM(M.rows, (L, t) => (T(), c("tr", { key: t }, [
            (T(!0), c(MM, null, eM(M.columns, (j, u) => (T(), c("td", { key: u }, [
              W(ON, { width: "75%" })
            ]))), 128))
          ]))), 128))
        ]),
        e(g) ? (T(), c("tfoot", z3, [
          s("tr", null, [
            (T(!0), c(MM, null, eM(M.columns, (L, t) => (T(), c("th", { key: t }, [
              W(ON)
            ]))), 128))
          ])
        ])) : B("", !0)
      ]),
      _: 1
    }, 16));
  }
}), r3 = /* @__PURE__ */ v({
  __name: "BSkeletonWrapper",
  props: {
    loading: { default: !1 }
  },
  setup(M) {
    const I = l(o(M, "loading"));
    return (g, D) => e(I) ? Q(g.$slots, "loading", { key: 0 }) : Q(g.$slots, "default", { key: 1 });
  }
}), d3 = ["TD", "TH", "TR"], U3 = [
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
].join(","), eN = (M) => {
  if (!M || !M.target)
    return !1;
  const A = M.target;
  if ("disabled" in A && A.disabled || d3.indexOf(A.tagName) !== -1)
    return !1;
  if (LS(".dropdown-menu", A))
    return !0;
  const I = A.tagName === "LABEL" ? A : LS("label", A);
  if (I) {
    const g = Hj(I, "for"), D = g ? cY(g) : lC("input, select, textarea", I);
    if (D && !D.disabled)
      return !0;
  }
  return sC(A, U3);
}, m3 = () => {
  const M = (t, j) => {
    const u = [];
    return !(t != null && t.length) && (j == null ? void 0 : j.length) ? (Object.keys(j[0]).forEach((S) => u.push({ key: S, label: DS(S) })), u) : (Array.isArray(t) && t.forEach((S) => {
      typeof S == "string" ? u.push({ key: S, label: DS(S) }) : DY(S) && S.key && typeof S.key == "string" && u.push({ ...S });
    }), u);
  }, A = DM([]), I = (t, j, u, S) => {
    if (A.value = qN(j), "isFilterableTable" in S && S.isFilterableTable.value === !0 && u.filter && (A.value = N(A.value, u.filter, u.filterable), g.value && g.value(A.value)), "isSortable" in S && S.isSortable.value === !0 && (A.value = D(
      t,
      A.value,
      {
        key: u.sortBy,
        desc: S.sortDescBoolean.value
      },
      u.sortCompare
    )), u.perPage !== void 0) {
      const i = (u.currentPage - 1) * u.perPage;
      A.value = A.value.splice(i, u.perPage);
    }
    return A.value;
  }, g = DM(void 0), D = (t, j, u, S) => {
    if (!u || !u.key)
      return j;
    const i = u.key;
    return j.sort((C, w) => {
      if (S !== void 0)
        return S(C, w, u.key, u.desc);
      const E = (a) => typeof a == "object" ? JSON.stringify(a) : a;
      return E(C[i]) > E(w[i]) ? u.desc ? -1 : 1 : E(w[i]) > E(C[i]) ? u.desc ? 1 : -1 : 0;
    });
  }, N = (t, j, u) => t.filter(
    (S) => Object.entries(S).filter((i) => {
      const [C, w] = i;
      return C[0] === "_" || u.length > 0 && !u.includes(C) ? !1 : (typeof w == "object" ? JSON.stringify(Object.values(w)) : typeof w == "string" ? w : w.toString()).toLowerCase().includes(j.toLowerCase());
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
}, O3 = ["title", "abbr", "onClick"], h3 = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, b3 = { key: 1 }, W3 = ["onClick", "onDblclick", "onMouseenter", "onMouseleave"], k3 = ["colspan"], p3 = ["colspan"], Q3 = { class: "d-flex align-items-center justify-content-center gap-2" }, v3 = /* @__PURE__ */ s("strong", null, "Loading...", -1), G3 = {
  key: 1,
  class: "b-table-empty-slot"
}, f3 = ["colspan"], J3 = { key: 0 }, V3 = ["title", "abbr", "onClick"], Z3 = { key: 1 }, B3 = { key: 2 }, P3 = { key: 3 }, F3 = /* @__PURE__ */ v({
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
    const g = M, D = jA(), N = m3(), L = l(o(g, "footClone")), t = l(o(g, "sortDesc")), j = l(o(g, "sortInternal")), u = l(o(g, "selectable")), S = l(o(g, "stickySelect")), i = l(o(g, "busy")), C = l(o(g, "showEmpty")), w = l(o(g, "showEmpty")), E = l(o(g, "showEmpty")), x = l(o(g, "showEmpty")), n = DM(i.value);
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
      "b-table-selectable": u.value,
      [`b-table-select-${g.selectMode}`]: u.value,
      "b-table-selecting user-select-none": u.value && z.value,
      "b-table-busy": n.value,
      "b-table-sortable": Z.value,
      "b-table-sort-desc": Z.value && t.value === !0,
      "b-table-sort-asc": Z.value && t.value === !1
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
    })), h = y(() => N.normaliseFields(g.fields, g.items)), k = y(
      () => h.value.length + (u.value ? 1 : 0)
    ), G = y(() => g.filter !== void 0 && g.filter !== ""), r = y(() => g.provider !== void 0), b = y(
      () => u.value && (!!g.selectHead || D.selectHead !== void 0)
    ), Z = y(
      () => g.fields.filter((p) => typeof p == "string" ? !1 : p.sortable).length > 0
    ), R = y(() => Z.value && j.value === !0), AM = y(() => r.value ? N.internalItems.value : R.value ? N.mapItems(g.fields, g.items, g, {
      isSortable: Z,
      isFilterableTable: G,
      sortDescBoolean: t
    }) : g.items), LM = (p) => typeof p == "string" ? NS(p) : p.label !== void 0 ? p.label : typeof p.key == "string" ? NS(p.key) : p.key, IM = (p, q, YM = !1) => {
      const H = typeof p == "string" ? p : p.key;
      I("headClicked", H, p, q, YM), dM(p);
    }, oM = (p, q, YM) => {
      I("rowClicked", p, q, YM), vM(p, q, YM.shiftKey);
    }, SM = (p, q, YM) => I("rowDblClicked", p, q, YM), tM = (p, q, YM) => I("rowHovered", p, q, YM), yM = (p, q, YM) => I("rowUnhovered", p, q, YM), dM = (p) => {
      if (!Z.value)
        return;
      const q = typeof p == "string" ? p : p.key, YM = typeof p == "string" ? !1 : p.sortable;
      if (Z.value === !0 && YM === !0) {
        const H = !t.value;
        q !== g.sortBy && I("update:sortBy", q), I("update:sortDesc", H), I("sorted", q, H);
      }
    }, bM = () => {
      !u.value || I("selection", Array.from(a.value));
    }, vM = (p, q, YM = !1) => {
      if (!!u.value) {
        if (a.value.has(p))
          a.value.delete(p), I("rowUnselected", p);
        else if (g.selectMode === "single" && a.value.size > 0 && (a.value.forEach((H) => I("rowUnselected", H)), a.value.clear()), g.selectMode === "range" && a.value.size > 0 && YM) {
          const H = Array.from(a.value).pop(), gA = AM.value.findIndex((KA) => KA === H), QM = Math.min(gA, q), gD = Math.max(gA, q);
          AM.value.slice(QM, gD + 1).forEach((KA) => {
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
        "b-table-sortable-column": Z.value && p.sortable,
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
      u.value && a.value.has(p) ? `selected table-${g.selectionVariant}` : null
    ], $ = () => {
      if (!u.value)
        return;
      const p = a.value.size > 0 ? Array.from(a.value) : [];
      a.value = /* @__PURE__ */ new Set([...AM.value]), a.value.forEach((q) => {
        p.includes(q) || I("rowSelected", q);
      }), bM();
    }, NM = () => {
      !u.value || (a.value.forEach((p) => {
        I("rowUnselected", p);
      }), a.value = /* @__PURE__ */ new Set([]), bM());
    }, hM = (p) => {
      if (!u.value)
        return;
      const q = AM.value[p];
      !q || a.value.has(q) || (a.value.add(q), I("rowSelected", q), bM());
    }, ZM = (p) => {
      if (!u.value)
        return;
      const q = AM.value[p];
      !q || !a.value.has(q) || (a.value.delete(q), I("rowUnselected", q), bM());
    }, nM = async (p, q, YM) => {
      if (q === YM)
        return;
      const H = (KA) => g.noProvider && g.noProvider.includes(KA), gA = ["currentPage", "perPage"].includes(p) && (H("paging") || w.value === !0), QM = ["filter"].includes(p) && (H("filtering") || x.value === !0), gD = ["sortBy", "sortDesc"].includes(p) && (H("sorting") || E.value === !0);
      gA || QM || gD || await fM();
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
    ), PM(() => {
      r.value && fM();
    }), A({
      selectAllRows: $,
      clearSelected: NM,
      selectRow: hM,
      unselectRow: ZM
    }), (p, q) => (T(), V(vL, qM(iA(e(Y))), {
      default: O(() => {
        var YM;
        return [
          s("thead", null, [
            p.$slots["thead-top"] ? Q(p.$slots, "thead-top", { key: 0 }) : B("", !0),
            s("tr", null, [
              e(b) ? (T(), c("th", {
                key: 0,
                class: F(["b-table-selection-column", {
                  "b-table-sticky-column": e(S)
                }])
              }, [
                Q(p.$slots, "select-head", {}, () => [
                  gM(P(typeof M.selectHead == "boolean" ? "Selected" : M.selectHead), 1)
                ])
              ], 2)) : B("", !0),
              (T(!0), c(MM, null, eM(e(h), (H) => (T(), c("th", CM({
                key: H.key,
                scope: "col",
                class: zM(H),
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle
              }, H.thAttr, {
                onClick: (gA) => IM(H, gA)
              }), [
                s("div", h3, [
                  Q(p.$slots, "sort-icon", {
                    field: H,
                    sortBy: M.sortBy,
                    selected: H.key === M.sortBy,
                    isDesc: e(t),
                    direction: e(t) ? "desc" : "asc"
                  }, () => [
                    e(Z) && H.sortable ? (T(), c("span", {
                      key: 0,
                      class: F(["b-table-sort-icon", {
                        sorted: H.key === M.sortBy,
                        [`sorted-${e(t) ? "desc" : "asc"}`]: H.key === M.sortBy
                      }])
                    }, null, 2)) : B("", !0)
                  ]),
                  s("div", null, [
                    p.$slots["head(" + H.key + ")"] || p.$slots["head()"] ? Q(p.$slots, p.$slots["head(" + H.key + ")"] ? "head(" + H.key + ")" : "head()", {
                      key: 0,
                      label: H.label
                    }) : (T(), c(MM, { key: 1 }, [
                      gM(P(LM(H)), 1)
                    ], 64))
                  ])
                ])
              ], 16, O3))), 128))
            ]),
            p.$slots["thead-sub"] ? (T(), c("tr", b3, [
              (T(!0), c(MM, null, eM(e(h), (H) => (T(), c("td", {
                key: H.key,
                scope: "col",
                class: F([H.class, H.thClass, H.variant ? `table-${H.variant}` : ""])
              }, [
                p.$slots["thead-sub"] ? Q(p.$slots, "thead-sub", CM({
                  key: 0,
                  items: e(h)
                }, H)) : (T(), c(MM, { key: 1 }, [
                  gM(P(H.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : B("", !0)
          ]),
          s("tbody", null, [
            (T(!0), c(MM, null, eM(e(AM), (H, gA) => (T(), c(MM, { key: gA }, [
              s("tr", {
                class: F(_(H)),
                onClick: (QM) => !e(eN)(QM) && oM(H, gA, QM),
                onDblclick: (QM) => !e(eN)(QM) && SM(H, gA, QM),
                onMouseenter: (QM) => !e(eN)(QM) && tM(H, gA, QM),
                onMouseleave: (QM) => !e(eN)(QM) && yM(H, gA, QM)
              }, [
                e(b) ? (T(), c("td", {
                  key: 0,
                  class: F(["b-table-selection-column", {
                    "b-table-sticky-column": e(S)
                  }])
                }, [
                  Q(p.$slots, "select-cell", {}, () => [
                    s("span", {
                      class: F(a.value.has(H) ? "text-primary" : "")
                    }, "\u{1F5F9}", 2)
                  ])
                ], 2)) : B("", !0),
                (T(!0), c(MM, null, eM(e(h), (QM) => (T(), c("td", CM({
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
                  }) : (T(), c(MM, { key: 1 }, [
                    gM(P(H[QM.key]), 1)
                  ], 64))
                ], 16))), 128))
              ], 42, W3),
              H._showDetails === !0 && p.$slots["row-details"] ? (T(), c("tr", {
                key: 0,
                class: F(_(H))
              }, [
                s("td", { colspan: e(k) }, [
                  Q(p.$slots, "row-details", {
                    item: H,
                    toggleDetails: () => iM(H)
                  })
                ], 8, k3)
              ], 2)) : B("", !0)
            ], 64))), 128)),
            n.value ? (T(), c("tr", {
              key: 0,
              class: F(["b-table-busy-slot", { "b-table-static-busy": e(AM).length == 0 }])
            }, [
              s("td", { colspan: e(k) }, [
                Q(p.$slots, "table-busy", {}, () => [
                  s("div", Q3, [
                    W(pL, { class: "align-middle" }),
                    v3
                  ])
                ])
              ], 8, p3)
            ], 2)) : B("", !0),
            e(C) && e(AM).length === 0 ? (T(), c("tr", G3, [
              s("td", { colspan: e(k) }, [
                Q(p.$slots, "empty", {
                  items: e(AM),
                  filtered: e(G)
                }, () => [
                  gM(P(e(G) ? M.emptyFilteredText : M.emptyText), 1)
                ])
              ], 8, f3)
            ])) : B("", !0)
          ]),
          e(L) ? (T(), c("tfoot", J3, [
            s("tr", null, [
              (T(!0), c(MM, null, eM(e(h), (H) => (T(), c("th", CM({
                key: H.key
              }, H.thAttr, {
                scope: "col",
                class: [H.class, H.thClass, H.variant ? `table-${H.variant}` : ""],
                title: H.headerTitle,
                abbr: H.headerAbbr,
                style: H.thStyle,
                onClick: (gA) => IM(H, gA, !0)
              }), P(H.label), 17, V3))), 128))
            ])
          ])) : p.$slots["custom-foot"] ? (T(), c("tfoot", Z3, [
            Q(p.$slots, "custom-foot", {
              fields: e(h),
              items: M.items,
              columns: (YM = e(h)) == null ? void 0 : YM.length
            })
          ])) : B("", !0),
          p.$slots["table-caption"] ? (T(), c("caption", B3, [
            Q(p.$slots, "table-caption")
          ])) : M.caption ? (T(), c("caption", P3, P(M.caption), 1)) : B("", !0)
        ];
      }),
      _: 3
    }, 16));
  }
}), X3 = /* @__PURE__ */ v({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`thead-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), c("tbody", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), R3 = ["scope", "colspan", "rowspan", "data-label"], H3 = { key: 0 }, _3 = /* @__PURE__ */ v({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = l(o(A, "stickyColumn")), g = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = y(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (N, L) => (T(), c("td", {
      role: "cell",
      scope: e(D),
      class: F(e(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading ? (T(), c("div", H3, [
        Q(N.$slots, "default")
      ])) : Q(N.$slots, "default", { key: 1 })
    ], 10, R3));
  }
}), $3 = /* @__PURE__ */ v({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), c("tfoot", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), q3 = ["scope", "colspan", "rowspan", "data-label"], K3 = { key: 0 }, MW = /* @__PURE__ */ v({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: !1 },
    variant: null
  },
  setup(M) {
    const A = M, I = l(o(A, "stickyColumn")), g = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0,
      "b-table-sticky-column": I.value,
      "table-b-table-default": I.value && A.variant === void 0
    })), D = y(() => A.colspan ? "colspan" : A.rowspan ? "rowspan" : "col");
    return (N, L) => (T(), c("th", {
      role: "columnheader",
      scope: e(D),
      class: F(e(g)),
      colspan: M.colspan,
      rowspan: M.rowspan,
      "data-label": M.stackedHeading
    }, [
      M.stackedHeading !== void 0 ? (T(), c("div", K3, [
        Q(N.$slots, "default")
      ])) : Q(N.$slots, "default", { key: 1 })
    ], 10, q3));
  }
}), AW = /* @__PURE__ */ v({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), c("thead", {
      role: "rowgroup",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), IW = /* @__PURE__ */ v({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(M) {
    const A = M, I = y(() => ({
      [`table-${A.variant}`]: A.variant !== void 0
    }));
    return (g, D) => (T(), c("tr", {
      role: "row",
      class: F(e(I))
    }, [
      Q(g.$slots, "default")
    ], 2));
  }
}), gW = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], SE = Symbol(), DW = /* @__PURE__ */ v({
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
    const I = M, g = l(o(I, "card")), D = l(o(I, "end")), N = l(o(I, "fill")), L = l(o(I, "justified")), t = l(o(I, "lazy")), j = l(o(I, "noFade")), u = l(o(I, "noNavStyle")), S = l(o(I, "pills")), i = l(o(I, "small")), C = l(o(I, "vertical")), w = jA(), E = DM(I.modelValue), x = DM(""), n = y({
      get: () => E.value,
      set: (r) => {
        E.value = r, a.value.length > 0 && r >= 0 && r < a.value.length ? x.value = a.value[r].buttonId : x.value = "", A("update:modelValue", r);
      }
    }), a = y(() => {
      let r = [];
      return w.default && (r = G(w).map((b, Z) => {
        b.props || (b.props = {});
        const R = b.props["button-id"] || gI("tab"), AM = b.props.id || gI(), LM = n.value > -1 ? Z === n.value : b.props.active === "", IM = b.props["title-item-class"], oM = b.props["title-link-attributes"];
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
          titleItemClass: IM,
          titleLinkAttributes: oM,
          onClick: b.props.onClick,
          tab: b
        };
      })), r;
    }), z = y(() => !((a == null ? void 0 : a.value) && a.value.length > 0)), d = y(() => ({
      "d-flex": C.value,
      "align-items-start": C.value
    })), Y = y(() => ({
      "nav-pills": S.value,
      "flex-column me-3": C.value,
      [`justify-content-${I.align}`]: I.align !== void 0,
      "nav-fill": N.value,
      "card-header-tabs": g.value,
      "nav-justified": L.value,
      "nav-tabs": !u.value && !S.value,
      small: i.value
    })), h = (r) => {
      let b = !1;
      if (r !== void 0 && r > -1 && r < a.value.length && !a.value[r].disabled && (n.value < 0 || a.value[r].buttonId !== x.value)) {
        const Z = new cL("activate-tab", { cancelable: !0, vueTarget: this });
        A("activate-tab", r, n.value, Z), Z.defaultPrevented || (n.value = r, b = !0);
      }
      return !b && I.modelValue !== n.value && A("update:modelValue", n.value), b;
    }, k = (r, b) => {
      var Z;
      h(b), b >= 0 && !a.value[b].disabled && ((Z = a.value[b]) == null ? void 0 : Z.onClick) && typeof a.value[b].onClick == "function" && a.value[b].onClick(r);
    }, G = (r) => !r || !r.default ? [] : r.default().reduce((b, Z) => (typeof Z.type == "symbol" ? b = b.concat(Z.children) : b.push(Z), b), []).filter((b) => {
      var Z;
      return ((Z = b.type) == null ? void 0 : Z.__name) === "BTab";
    });
    return h(E.value), mM(
      () => I.modelValue,
      (r, b) => {
        if (r === b)
          return;
        if (r = Math.max(r, -1), b = Math.max(b, -1), a.value.length <= 0) {
          n.value = -1;
          return;
        }
        const Z = r > b;
        let R = r;
        const AM = a.value.length - 1;
        for (; R >= 0 && R <= AM && a.value[R].disabled; )
          R += Z ? 1 : -1;
        if (R < 0) {
          h(0);
          return;
        }
        if (R >= a.value.length) {
          h(a.value.length - 1);
          return;
        }
        h(R);
      }
    ), mM(
      () => a.value,
      () => {
        let r = a.value.map((b) => b.active && !b.disabled).lastIndexOf(!0);
        r < 0 && (n.value >= a.value.length ? r = a.value.map((b) => !b.disabled).lastIndexOf(!0) : a.value[n.value] && !a.value[n.value].disabled && (r = n.value)), r < 0 && (r = a.value.map((b) => !b.disabled).indexOf(!0)), a.value.forEach((b, Z) => b.active = Z === r), h(r);
      }
    ), PM(() => {
      if (n.value < 0 && a.value.length > 0 && !a.value.some((r) => r.active)) {
        const r = a.value.map((b) => !b.disabled).indexOf(!0);
        h(r >= 0 ? r : -1);
      }
    }), NI(SE, {
      lazy: t.value,
      card: g.value
    }), (r, b) => (T(), V(wM(M.tag), {
      id: M.id,
      class: F(["tabs", e(d)])
    }, {
      default: O(() => [
        e(D) ? (T(), c("div", {
          key: 0,
          class: F(["tab-content", M.contentClass])
        }, [
          (T(!0), c(MM, null, eM(e(a), ({ tab: Z, contentId: R, tabClasses: AM, active: LM }, IM) => (T(), V(wM(Z), {
            id: R,
            key: IM,
            class: F(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          e(z) ? (T(), c("div", {
            key: "bv-empty-tab",
            class: F(["tab-pane active", { "card-body": e(g) }])
          }, [
            Q(r.$slots, "empty")
          ], 2)) : B("", !0)
        ], 2)) : B("", !0),
        s("div", {
          class: F([M.navWrapperClass, { "card-header": e(g), "ms-auto": M.vertical && e(D) }])
        }, [
          s("ul", {
            class: F(["nav", [e(Y), M.navClass]]),
            role: "tablist"
          }, [
            Q(r.$slots, "tabs-start"),
            (T(!0), c(MM, null, eM(e(a), ({ tab: Z, buttonId: R, contentId: AM, navItemClasses: LM, active: IM, target: oM }, SM) => (T(), c("li", {
              key: SM,
              class: F(["nav-item", Z.props["title-item-class"]])
            }, [
              s("button", CM({
                id: R,
                class: ["nav-link", LM],
                "data-bs-toggle": "tab",
                "data-bs-target": oM,
                role: "tab",
                "aria-controls": AM,
                "aria-selected": IM
              }, Z.props["title-link-attributes"], {
                onClick: BI((tM) => k(tM, SM), ["stop", "prevent"])
              }), [
                Z.children && Z.children.title ? (T(), V(wM(Z.children.title), { key: 0 })) : (T(), c(MM, { key: 1 }, [
                  gM(P(Z.props.title), 1)
                ], 64))
              ], 16, gW)
            ], 2))), 128)),
            Q(r.$slots, "tabs-end")
          ], 2)
        ], 2),
        e(D) ? B("", !0) : (T(), c("div", {
          key: 1,
          class: F(["tab-content", M.contentClass])
        }, [
          (T(!0), c(MM, null, eM(e(a), ({ tab: Z, contentId: R, tabClasses: AM, active: LM }, IM) => (T(), V(wM(Z), {
            id: R,
            key: IM,
            class: F(AM),
            active: LM
          }, null, 8, ["id", "class", "active"]))), 128)),
          e(z) ? (T(), c("div", {
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
}), NW = /* @__PURE__ */ v({
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
    const A = M, I = tA(SE, null), g = l(o(A, "active")), D = l(o(A, "disabled")), N = l(o(A, A.lazyOnce !== void 0 ? "lazyOnce" : "lazy")), L = DM(!1), t = y(() => (I == null ? void 0 : I.lazy) || N.value), j = y(() => A.lazyOnce !== void 0), u = y(() => g.value && !D.value), S = y(() => {
      const C = t.value && j.value && L.value;
      return u.value || !t.value || C;
    }), i = y(() => ({
      active: g.value,
      show: g.value,
      "card-body": (I == null ? void 0 : I.card) && A.noBody === !1
    }));
    return mM(
      () => S.value,
      (C) => {
        C && !L.value && (L.value = !0);
      }
    ), (C, w) => (T(), V(wM(M.tag), {
      id: M.id,
      class: F(["tab-pane", e(i)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: O(() => [
        e(S) ? Q(C.$slots, "default", { key: 0 }) : B("", !0)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), LW = "toast-title", Ai = 1e3, iE = v({
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
    l(o(M, "animation"));
    const g = l(o(M, "isStatus")), D = l(o(M, "autoHide")), N = l(o(M, "noCloseButton")), L = l(o(M, "noFade")), t = l(o(M, "noHoverPause"));
    l(o(M, "solid")), l(o(M, "static"));
    const j = l(o(M, "modelValue")), u = DM(!1), S = DM(!1), i = DM(!1), C = y(() => ({
      [`b-toast-${M.variant}`]: M.variant !== void 0,
      show: i.value || u.value
    }));
    let w, E, x;
    const n = () => {
      typeof w > "u" || (clearTimeout(w), w = void 0);
    }, a = y(
      () => Math.max(Jg(M.delay, 0), Ai)
    ), z = () => {
      j.value && (E = x = 0, n(), S.value = !0, DN(() => {
        i.value = !1;
      }));
    }, d = () => {
      n(), A("update:modelValue", !0), E = x = 0, S.value = !1, DI(() => {
        DN(() => {
          i.value = !0;
        });
      });
    }, Y = () => {
      if (!D.value || t.value || !w || x)
        return;
      const AM = Date.now() - E;
      AM > 0 && (n(), x = Math.max(a.value - AM, Ai));
    }, h = () => {
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
      u.value = !0, A("update:modelValue", !0);
    }, r = () => {
      u.value = !1, k();
    }, b = () => {
      u.value = !0;
    }, Z = () => {
      u.value = !1, x = E = 0, A("update:modelValue", !1);
    };
    lE(() => {
      n(), D.value && A("destroyed", M.id);
    }), PM(() => {
      DI(() => {
        j.value && DN(() => {
          d();
        });
      });
    });
    const R = () => {
      DI(() => {
        DN(() => {
          z();
        });
      });
    };
    return () => {
      const AM = () => {
        const LM = [], IM = pA(LW, { hide: z }, I);
        IM ? LM.push(sM(IM)) : M.title && LM.push(sM("strong", { class: "me-auto" }, M.title)), !N.value && LM.length !== 0 && LM.push(
          sM(ID, {
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
            bD(M) ? "b-link" : "div",
            {
              class: ["toast-body", M.bodyClass],
              onClick: bD(M) ? { click: R } : {}
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
          role: S.value ? null : g.value ? "status" : "alert",
          "aria-live": S.value ? null : g.value ? "polite" : "assertive",
          "aria-atomic": S.value ? null : "true",
          onmouseenter: Y,
          onmouseleave: h
        },
        [
          sM(
            QL,
            {
              noFade: L.value,
              onAfterEnter: r,
              onBeforeEnter: G,
              onAfterLeave: Z,
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
      return T(), c("div", {
        class: F([[e(g)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (T(!0), c(MM, null, eM((t = M.instance) == null ? void 0 : t.toasts(M.position).value, (j) => (T(), V(iE, {
          id: j.options.id,
          key: j.options.id,
          modelValue: j.options.value,
          "onUpdate:modelValue": (u) => j.options.value = u,
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
    BM(this, "vm");
    BM(this, "containerPositions");
    sE(A) ? this.vm = A : this.vm = fA(A), this.containerPositions = y(() => {
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
class tW {
  constructor() {
    BM(this, "vms");
    BM(this, "rootInstance");
    BM(this, "useToast", SW);
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
const xj = Symbol(), eE = Symbol(), jW = {
  container: void 0,
  toasts: [],
  root: !1
};
function uW() {
  return tA(eE);
}
function SW(M, A = xj) {
  const I = tA(uW());
  if (!M)
    return new gi(I.getOrCreateViewModel());
  const g = { id: Symbol("toastInstance") }, D = { ...jW, ...g, ...M }, N = I.getOrCreateViewModel(D);
  return new gi(N);
}
const iW = {
  install: (M, A = {}) => {
    var I, g, D, N;
    M.provide(eE, (g = (I = A == null ? void 0 : A.BToast) == null ? void 0 : I.injectkey) != null ? g : xj), M.provide((N = (D = A == null ? void 0 : A.BToast) == null ? void 0 : D.injectkey) != null ? N : xj, new tW());
  }
}, eW = {
  BAccordion: bY,
  BAccordionItem: qm,
  BNavText: Gb,
  BAlert: MO,
  BAvatar: NO,
  BAvatarGroup: AO,
  BNavForm: Ob,
  BBadge: SO,
  BBreadcrumb: EO,
  BBreadcrumbItem: Jw,
  BButton: WD,
  BButtonGroup: yO,
  BButtonToolbar: oO,
  BCard: Rw,
  BCardBody: Fw,
  BCardFooter: Xw,
  BCardGroup: sO,
  BCardHeader: Zw,
  BCardImg: DL,
  BCardSubtitle: Pw,
  BCardText: cO,
  BCardTitle: Bw,
  BCarousel: kO,
  BCarouselSlide: JO,
  BCloseButton: ID,
  BCol: iD,
  BCollapse: vw,
  BContainer: BO,
  BDropdown: _w,
  BDropdownDivider: RO,
  BDropdownForm: KO,
  BDropdownGroup: gh,
  BDropdownHeader: th,
  BDropdownItem: uh,
  BDropdownItemButton: eh,
  BDropdownText: Eh,
  BForm: $w,
  BFormCheckbox: qw,
  BFormCheckboxGroup: Yh,
  BFormFloatingLabel: yh,
  BFormGroup: Wh,
  BFormInput: vh,
  BFormInvalidFeedback: wj,
  BFormRadio: ME,
  BFormRadioGroup: Bh,
  BFormRow: mN,
  BFormSelect: Rh,
  BFormSelectOption: xu,
  BFormSelectOptionGroup: AE,
  BFormText: Ej,
  BFormTextarea: Cb,
  BFormTag: IE,
  BFormTags: ub,
  BFormValidFeedback: Tj,
  BImg: Tu,
  BInputGroup: nb,
  BInputGroupAddon: au,
  BInputGroupAppend: ob,
  BInputGroupPrepend: lb,
  BInputGroupText: gE,
  BLink: zA,
  BListGroup: sb,
  BListGroupItem: cb,
  BModal: Ub,
  BNav: mb,
  BNavbar: fb,
  BNavbarBrand: Zb,
  BNavbarNav: Bb,
  BNavbarToggle: Fb,
  BNavItem: kb,
  BNavItemDropdown: Qb,
  BOffcanvas: qb,
  BOverlay: Kb,
  BPagination: j3,
  BPlaceholder: dA,
  BPlaceholderButton: tE,
  BPlaceholderCard: u3,
  BPlaceholderTable: S3,
  BPlaceholderWrapper: i3,
  BPopover: x3,
  BProgress: y3,
  BProgressBar: jE,
  BRow: l3,
  BSkeleton: ON,
  BSkeletonIcon: s3,
  BSkeletonTable: Y3,
  BSkeletonWrapper: r3,
  BSpinner: pL,
  BTab: NW,
  BTable: F3,
  BTableSimple: vL,
  BTbody: X3,
  BTd: _3,
  BTfoot: $3,
  BTh: MW,
  BThead: AW,
  BTr: IW,
  BToast: iE,
  BToaster: Ii,
  BToastContainer: Ii,
  BTabs: DW,
  BTransition: QL,
  BToastPlugin: iW
};
const cW = {
  install(M, A = {}) {
    Object.entries(eW).forEach(([I, g]) => {
      M.component(I, g);
    }), Object.entries(Xm).forEach(([I, g]) => {
      M.directive(I, g);
    }), mY(M);
  }
  const g = [M];
  let D;
  for (let N = 0; N < g.length && !D; N++) {
    const L = g[N];
    D = I[L];
  }
  return D && EW(D) ? D(A) : D;
}, CN = (M, A = NaN) => {
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
    const I = y(() => Math.max(CN(M.fontScale, 1), 0) || 1), g = y(() => Math.max(CN(M.scale, 1), 0) || 1), D = y(() => CN(M.shiftH, 0)), N = y(() => CN(M.shiftV, 0)), L = y(() => M.flipH || M.flipV || g.value !== 1), t = y(() => D.value || N.value), j = y(() => L.value || M.rotate), u = y(
      () => [
        j.value ? "translate(8 8)" : null,
        L.value ? `scale(${(M.flipH ? -1 : 1) * g.value} ${(M.flipV ? -1 : 1) * g.value})` : null,
        M.rotate ? `rotate(${M.rotate})` : null,
        j.value ? "translate(-8 -8)" : null
      ].filter((w) => w)
    ), S = y(() => {
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
    const C = y(() => u.value.join(" ") || void 0);
    return () => {
      let w = sM(
        "g",
        {
          transform: C.value
        },
        [M.content, CE("default", {}, A)]
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
          class: ["bootstrap-icon", S.value, M.class],
          ...i,
          style: M.stacked ? {} : {
            "font-size": I.value === 1 ? null : `${I.value * 100}%`
          }
        },
        x
      );
    };
  }
}), TW = /* @__PURE__ */ v({
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
    const A = y(() => CW);
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
}), xW = /* @__PURE__ */ v({
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
        default: () => CE("default", {}, A) || ""
      }
    );
  }
}), aW = {
  BIcon: TW,
  BIconstack: xW
};
const zW = {
  install(M) {
    Object.entries(aW).forEach(([A, I]) => {
      M.component(A, I);
    });
  }
};
export {
  FM as _,
  eL as a,
  sW as b,
  zW as c,
  lW as i,
  cW as p,
  Ao as u
};